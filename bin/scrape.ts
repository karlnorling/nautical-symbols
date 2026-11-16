/**
 * scrape.ts
 *
 * Collects nautical symbol data from two sources:
 *
 * - **Flags** — the Wikipedia article "International maritime signal flags":
 *   the 26 letter flags with their ICS meanings, the ICS number pennants, the
 *   NATO number flags, the answer pennant and the four substitutes.
 * - **Chart symbols** — the Wikimedia Commons category "SVG Nautical Chart
 *   icons" (the SVG sub-category of "Nautical Chart Icons"): INT 1 paper-chart
 *   and ECDIS symbols for buoys, beacons, lights, topmarks, dangers and areas.
 * - **Ensigns** — the galleries in the Wikipedia articles "Civil ensign",
 *   "Naval ensign" and "Jack (flag)": the flags vessels fly to show their
 *   nationality, per country. Former and historical flags are left out.
 *
 * Every file's licence is read from the Commons API, because the sources mix
 * public domain, CC0, CC BY-SA 4.0 and GPL artwork.
 *
 * Codes are the public identifiers (slug IDs, component names, sprite IDs,
 * CSS classes), so never change one. Flags use the fixed {@link FLAG_CODES}
 * table; chart codes are derived from the Commons file name by
 * {@link chartCode}, with {@link CHART_OVERRIDES} for files that do not follow
 * the `NChart-Symbol INT …` / `NChart ECDIS …` naming. Ensign codes are derived
 * from the country in the gallery caption ({@link ensignCode}).
 *
 * Run indirectly via `yarn update` (bin/update.ts).
 */

// Requests are sequential on purpose: Wikimedia rate-limits bursts.
/* oxlint-disable no-await-in-loop */

import { parse } from 'node-html-parser';
import { pennantPath } from './draw-pennants';
import type { HTMLElement, Node } from 'node-html-parser';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Every category, flags first, in the order the docs and generated code list them. */
export const CATEGORIES = [
  'letter-flags',
  'number-pennants',
  'nato-number-flags',
  'special-pennants',
  'civil-ensigns',
  'naval-ensigns',
  'jacks',
  'cardinal-marks',
  'lateral-marks',
  'isolated-danger-marks',
  'special-marks',
  'beacons',
  'topmarks',
  'lights',
  'dangers',
  'areas',
  'harbour',
  'other',
] as const;

export type NauticalSymbolCategory = (typeof CATEGORIES)[number];

/** A single scraped symbol entry. */
export interface ScrapedSymbol {
  /** Stable code, e.g. `"flag-alfa"` or `"chart-can-buoy-red"`. */
  code: string;
  /** Short human-readable name, used as the accessible title. */
  name: string;
  /** Longer description: the ICS meaning for flags, the chart style for chart symbols. */
  description: string;
  /** Wikimedia Commons file page URL. */
  imageUrl: string | null;
  /** Direct URL of the original SVG file, from the Commons API. */
  fileUrl: string | null;
  /**
   * Repository path of artwork drawn for this project, used instead of
   * `fileUrl` (see bin/draw-pennants.ts).
   */
  localFile?: string;
  /** Licence short name as Commons reports it, e.g. `"Public domain"`, `"CC BY-SA 4.0"`. */
  license: string;
  /** Author as Commons credits it, for attribution in NOTICE.md. */
  author: string;
}

/** Root shape of the data returned by {@link scrape}. */
export type ScrapedData = Record<NauticalSymbolCategory, ScrapedSymbol[]>;

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

const USER_AGENT =
  'nautical-symbols/0.0.0 (https://github.com/karlnorling/nautical-symbols; build-script)';
const REPO_URL = 'https://github.com/karlnorling/nautical-symbols';
const WIKIPEDIA_ORIGIN = 'https://en.wikipedia.org';
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';

const fetchText = async (url: string): Promise<string> => {
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return res.text();
};

const commonsApi = async <T>(params: Record<string, string>): Promise<T> =>
  JSON.parse(
    await fetchText(
      `${COMMONS_API}?${new URLSearchParams({ ...params, format: 'json', formatversion: '2' })}`,
    ),
  ) as T;

/** Commons file name with spaces, as the API reports it: `ICS Alfa.svg`. */
const normalizeFileName = (name: string): string =>
  decodeURIComponent(name)
    .replace(/^File:/, '')
    .replace(/_/g, ' ');

const filePageUrl = (fileName: string): string =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName.replace(/ /g, '_'))}`;

const slugify = (str: string): string =>
  str
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const squash = (text: string): string =>
  text
    .replace(/\[(?:\d+|[a-z])\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/**
 * Visible text of a table cell. Footnote markers and template styles are
 * dropped, and block breaks (`<br>`, `<p>`, the `{{clear}}` divs the article
 * puts between alternative meanings) become spaces so sentences don't run together.
 */
const cellText = (node: Node): string => {
  const walk = (n: Node): string => {
    if (n.nodeType === 3) return n.text;
    if (n.nodeType !== 1) return '';
    const el = n as HTMLElement;
    const tag = el.tagName?.toLowerCase();
    if (tag === 'sup' || tag === 'style' || tag === 'link') return '';
    const inner = el.childNodes.map(walk).join('');
    return tag === 'br' || tag === 'p' || tag === 'div' ? ` ${inner} ` : inner;
  };
  return squash(walk(node));
};

interface FileInfo {
  author: string;
  fileUrl: string;
  license: string;
}

/** Plain text of a Commons `Artist` value, which is HTML (often a user-page link). */
const authorText = (html: string | undefined): string =>
  html ? squash(parse(html).textContent) || 'unknown' : 'unknown';

/** Looks up the original file URL, licence and author for each Commons file, 50 per request. */
const fetchFileInfo = async (
  fileNames: string[],
  { allowMissing = false } = {},
): Promise<Map<string, FileInfo>> => {
  interface Response {
    query: {
      normalized?: Array<{ from: string; to: string }>;
      redirects?: Array<{ from: string; to: string }>;
      pages: Array<{
        title: string;
        missing?: boolean;
        imageinfo?: Array<{
          url: string;
          extmetadata?: Record<string, { value: string } | undefined>;
        }>;
      }>;
    };
  }

  const info = new Map<string, FileInfo>();
  for (let i = 0; i < fileNames.length; i += 50) {
    const batch = fileNames.slice(i, i + 50);
    const data = await commonsApi<Response>({
      action: 'query',
      iiextmetadatafilter: 'LicenseShortName|Artist',
      iiprop: 'url|extmetadata',
      prop: 'imageinfo',
      redirects: '1',
      titles: batch.map((f) => `File:${f}`).join('|'),
    });

    // Follow the API's renames (e.g. `ICS Alpha.svg` redirects to `ICS Alfa.svg`).
    const resolve = new Map<string, string>();
    for (const { from, to } of [
      ...(data.query.normalized ?? []),
      ...(data.query.redirects ?? []),
    ]) {
      resolve.set(from, to);
    }
    const byTitle = new Map(data.query.pages.map((p) => [p.title, p]));

    for (const fileName of batch) {
      let title = `File:${fileName}`;
      for (let hops = 0; resolve.has(title) && hops < 5; hops++) title = resolve.get(title)!;
      const ii = byTitle.get(title)?.imageinfo?.[0];
      if (!ii) {
        // Wikipedia articles can use local (often non-free) files that Commons lacks.
        if (allowMissing) continue;
        throw new Error(`Commons has no file "${fileName}"`);
      }
      info.set(fileName, {
        author: authorText(ii.extmetadata?.Artist?.value),
        fileUrl: ii.url,
        license: ii.extmetadata?.LicenseShortName?.value ?? 'unknown',
      });
    }
  }
  return info;
};

// ---------------------------------------------------------------------------
// Flags
// ---------------------------------------------------------------------------

const FLAGS_ARTICLE = `${WIKIPEDIA_ORIGIN}/wiki/International_maritime_signal_flags`;

const PHONETIC = [
  'Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India',
  'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo',
  'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu',
] as const; // prettier-ignore

const DIGIT_WORDS = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Niner',
] as const; // prettier-ignore

const ORDINALS = ['First', 'Second', 'Third', 'Fourth'] as const;

/**
 * Stable code for every Commons file the flag article uses, with the
 * category and name it gets. Keyed by file name with spaces.
 */
const FLAG_CODES: ReadonlyMap<
  string,
  { category: NauticalSymbolCategory; code: string; name: string }
> = new Map([
  ...PHONETIC.map((word, i) => {
    const letter = String.fromCharCode(65 + i);
    // The article links `ICS Alpha.svg` and `ICS X-ray.svg`; the API resolves the redirects.
    const file =
      { Alfa: 'ICS Alpha.svg', Xray: 'ICS X-ray.svg' }[word as string] ?? `ICS ${word}.svg`;
    return [
      file,
      { category: 'letter-flags', code: `flag-${word.toLowerCase()}`, name: `${letter} (${word})` },
    ] as const;
  }),
  ...DIGIT_WORDS.map(
    (word, i) =>
      [
        `ICS Pennant ${word}.svg`,
        { category: 'number-pennants', code: `pennant-${i}`, name: `Number pennant ${i}` },
      ] as const,
  ),
  ...DIGIT_WORDS.map(
    (word, i) =>
      [
        `ICS ${word}.svg`,
        { category: 'nato-number-flags', code: `nato-flag-${i}`, name: `NATO number flag ${i}` },
      ] as const,
  ),
  [
    'ICS Answer.svg',
    { category: 'special-pennants', code: 'pennant-answer', name: 'Answer pennant' },
  ] as const,
  ...ORDINALS.map(
    (ordinal, i) =>
      [
        `ICS Repeat ${DIGIT_WORDS[i + 1]}.svg`,
        {
          category: 'special-pennants',
          code: `substitute-${i + 1}`,
          name: `${ordinal} substitute`,
        },
      ] as const,
  ),
]);

/** File names (with spaces) linked from a table row, in document order. */
const rowFiles = (row: HTMLElement): string[] => [
  ...new Set(
    row
      .querySelectorAll('a[href*="/wiki/File:"]')
      .map((a) => a.getAttribute('href')!.match(/\/wiki\/File:([^?#]+)/)?.[1])
      .filter((f): f is string => !!f)
      .map(normalizeFileName),
  ),
];

/** The table that follows a section heading, before the next heading. */
const sectionTables = (doc: HTMLElement, headingId: string): HTMLElement[] => {
  const heading = doc.getElementById(headingId);
  if (!heading) throw new Error(`Flag article has no section "${headingId}"`);
  const start = heading.parentNode.classNames.includes('mw-heading') ? heading.parentNode : heading;
  const tables: HTMLElement[] = [];
  for (let n = start.nextElementSibling; n; n = n.nextElementSibling) {
    if (n.classNames.includes('mw-heading') || /^h[1-6]$/i.test(n.tagName ?? '')) break;
    if (n.tagName === 'TABLE') tables.push(n);
    tables.push(...n.querySelectorAll('table'));
  }
  return tables;
};

/** Descriptions keyed by file name, scraped from the article's three tables. */
const scrapeFlagDescriptions = (doc: HTMLElement): Map<string, string> => {
  const descriptions = new Map<string, string>();

  // Letter flags: Letter | Flag | Blazon | ICS meaning | Meaning with numeric complements.
  const [letters] = sectionTables(doc, 'Letter_flags_(with_ICS_meaning)');
  for (const row of letters?.querySelectorAll('tr') ?? []) {
    const [file] = rowFiles(row);
    const cells = row.querySelectorAll('td');
    if (!file || cells.length < 4) continue;
    const meaning = cellText(cells[2]);
    const complement = cellText(cells[3]);
    descriptions.set(
      file,
      complement ? `${meaning} With a numeric complement: ${complement}` : meaning,
    );
  }

  // Number flags: Number | NATO flag | ICS pennant | Blazons ("NATO: … ICS: …").
  const [numbers] = sectionTables(doc, 'Number_flags');
  for (const row of numbers?.querySelectorAll('tr') ?? []) {
    const cells = row.querySelectorAll('td');
    if (cells.length < 3) continue;
    const blazons = cellText(cells[2]);
    const nato = blazons.match(/NATO:\s*(.*?)(?=\s*ICS:|$)/)?.[1];
    const ics = blazons.match(/ICS:\s*(.*)$/)?.[1];
    const natoFile = rowFiles(cells[0])[0];
    const icsFile = rowFiles(cells[1])[0];
    if (natoFile && nato) descriptions.set(natoFile, `Blazon: ${nato}`);
    if (icsFile === 'ICS Answer.svg') {
      descriptions.set(
        icsFile,
        'Code and answering pennant, also used as the decimal point. Flown above a reply ' +
          `to acknowledge a signal. ${ics ? `Blazon: ${ics.replace(/\s*\(when used as.*\)$/, '')}` : ''}`.trim(),
      );
    } else if (icsFile && ics) {
      descriptions.set(icsFile, `Blazon: ${ics}`);
    }
  }

  // Substitutes: one row of four pennants, then a row of blazons under the same columns.
  const [substitutes] = sectionTables(doc, 'Substitute');
  const rows = substitutes?.querySelectorAll('tr') ?? [];
  const files = rows[0] ? rowFiles(rows[0]) : [];
  const blazonRow = rows.find((r) => cellText(r.querySelector('th, td') ?? r).startsWith('Blazon'));
  // Drop the leading "Blazon" label cell so the rest line up with the pennant columns.
  const blazonCells = blazonRow?.querySelectorAll('th, td').slice(1) ?? [];
  files.forEach((file, i) => {
    const blazon = blazonCells[i] ? cellText(blazonCells[i]) : '';
    descriptions.set(
      file,
      `Repeats the ${ORDINALS[i]!.toLowerCase()} flag or pennant in the same hoist.` +
        (blazon ? ` Blazon: ${blazon}` : ''),
    );
  });

  return descriptions;
};

const scrapeFlags = async (): Promise<
  Array<ScrapedSymbol & { category: NauticalSymbolCategory }>
> => {
  const doc = parse(await fetchText(FLAGS_ARTICLE));
  const descriptions = scrapeFlagDescriptions(doc);

  // Every flag file linked from the article must be in FLAG_CODES, and vice versa.
  const linked = new Set(
    doc
      .querySelectorAll('a[href*="/wiki/File:ICS_"]')
      .map((a) => normalizeFileName(a.getAttribute('href')!.match(/\/wiki\/File:([^?#]+)/)![1])),
  );
  for (const file of linked) {
    if (!FLAG_CODES.has(file)) console.warn(`  Warning: no flag code for "${file}"; skipped.`);
  }

  const info = await fetchFileInfo(
    [...FLAG_CODES].filter(([, { category }]) => category !== 'number-pennants').map(([f]) => f),
  );
  return [...FLAG_CODES].map(([file, { category, code, name }]) => {
    if (!linked.has(file))
      console.warn(`  Warning: "${file}" (${code}) is no longer in the article`);
    const description = descriptions.get(file) ?? name;

    // The Commons pennants are GPL; use the CC0 drawings from bin/draw-pennants.ts.
    if (category === 'number-pennants') {
      const localFile = pennantPath(Number(code.replace('pennant-', ''))).replace(/\\/g, '/');
      return {
        category,
        code,
        description,
        fileUrl: null,
        imageUrl: `${REPO_URL}/blob/main/${localFile}`,
        author: 'nautical-symbols contributors',
        license: 'CC0',
        localFile,
        name,
      };
    }

    const { author, fileUrl, license } = info.get(file)!;
    return {
      author,
      category,
      code,
      description,
      fileUrl,
      imageUrl: filePageUrl(file),
      license,
      name,
    };
  });
};

// ---------------------------------------------------------------------------
// Chart symbols
// ---------------------------------------------------------------------------

const CHART_CATEGORY = 'Category:SVG Nautical Chart icons';

/**
 * Files outside the `NChart-Symbol INT` / `NChart ECDIS` naming. `null`
 * excludes a file. Keyed by file name with spaces.
 */
const CHART_OVERRIDES: Readonly<
  Record<string, { category: NauticalSymbolCategory; code: string; name: string } | null>
> = {
  'Cliff diving navy.svg': { category: 'other', code: 'cliff-diving', name: 'Cliff diving' },
  'Scuba diving navy.svg': { category: 'other', code: 'scuba-diving', name: 'Scuba diving' },
  'N-chart Icon Pilot station 400x400.svg': {
    category: 'harbour',
    code: 'chart-pilot-station',
    name: 'Pilot station',
  },
  'Green Light Down.svg': { category: 'lights', code: 'light-flare-green-down', name: 'Green light flare (pointing down)' },
  'Red Light.svg': { category: 'lights', code: 'light-flare-red', name: 'Red light flare' },
  'White Light.svg': { category: 'lights', code: 'light-flare-white', name: 'White light flare' },
  'Red Light Chart Symbol.svg': { category: 'lights', code: 'light-red', name: 'Red light' },
  'Nautical Light Green.svg': { category: 'lights', code: 'light-green-teardrop', name: 'Green light (teardrop)' },
  'Nautical Light Red.svg': { category: 'lights', code: 'light-red-teardrop', name: 'Red light (teardrop)' },
  // Chart-legend snippets (symbol plus a "Masts" caption), not standalone symbols.
  'WRECK Point.svg': null,
  'Wrecks.svg': null,
}; // prettier-ignore

/** Readable words for the CamelCase tokens in Commons chart file names. */
const WORDS: Readonly<Record<string, string>> = {
  AboveWater: 'above water',
  CoverUncover: 'covers and uncovers',
  ConicalTM: 'conical topmark',
  CylindricalTM: 'cylindrical topmark',
  LightedMark: 'lighted',
  NonDangerous: 'non-dangerous',
  NonNavigable: 'non-navigable',
  SingleBerth: 'single berth',
  SphereTM: 'spherical topmark',
  XShapeTM: 'X-shaped topmark',
  Cilinder: 'cylinder',
  E: 'east',
  N: 'north',
  S: 'south',
  W: 'west',
};

const splitCamel = (token: string): string =>
  WORDS[token] ?? token.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

/** Chart category from the file-name tokens (after the `INT` / `ECDIS` prefix). */
const chartCategory = (tokens: string[]): NauticalSymbolCategory => {
  const t = tokens.join(' ');
  if (/^Topmark\b/.test(t)) return 'topmarks';
  if (/\bCardinal\b/.test(t)) return 'cardinal-marks';
  if (/\bIsolatedDanger\b/.test(t)) return 'isolated-danger-marks';
  if (/\b(Red|Green|Port|Starboard)\b/.test(t) && !/\bWreck\b/.test(t)) return 'lateral-marks';
  if (/\bXShapeTM\b/.test(t)) return 'special-marks';
  if (/\b(Beacon|Stake|Perch|Withy)\b/.test(t)) return 'beacons';
  if (/\bLight\b/.test(t)) return 'lights';
  if (/\b(Rock|Wreck|Obstruction)\b/.test(t)) return 'dangers';
  if (/\b(Area|Anchorage|TrafficDirection)\b/.test(t)) return 'areas';
  if (/\b(Harbour|Marina|Office|Master|LockGate)\b/.test(t)) return 'harbour';
  return 'other';
};

/**
 * Derives code, name and category from a chart file name:
 * - `NChart-Symbol INT CanBuoy Red ConicalTM.svg` → `chart-can-buoy-red-conical-topmark`
 * - `NChart ECDIS Cardinal simple Buoy N.svg` → `ecdis-cardinal-buoy-north`
 * - `Topmark Two Cone Up Black.svg` → `topmark-two-cone-up-black`
 */
export const chartCode = (
  fileName: string,
): { category: NauticalSymbolCategory; code: string; name: string; style: string } | null => {
  const base = fileName.replace(/\.svg$/i, '');
  let style: string;
  let tokens: string[];
  if (base.startsWith('NChart-Symbol INT ')) {
    style = 'INT 1 paper chart symbol';
    tokens = base.slice('NChart-Symbol INT '.length).split(' ');
  } else if (base.startsWith('NChart ECDIS ')) {
    style = 'ECDIS (IHO S-52) simplified symbol';
    // "simple" marks the S-52 simplified buoy set; every ECDIS file here uses it.
    tokens = base
      .slice('NChart ECDIS '.length)
      .split(' ')
      .filter((t) => t !== 'simple');
  } else if (base.startsWith('Topmark ')) {
    style = 'Buoyage topmark';
    tokens = base.split(' ');
  } else {
    return null;
  }

  const words = tokens.map(splitCamel);
  const prefix = style.startsWith('ECDIS') ? 'ecdis' : style.startsWith('INT') ? 'chart' : '';
  const code = slugify([prefix, ...words].filter(Boolean).join(' '));
  const sentence = words.join(' ');
  // INT 1 and ECDIS draw many of the same features; the suffix keeps names unique.
  const name =
    sentence.charAt(0).toUpperCase() + sentence.slice(1) + (prefix === 'ecdis' ? ' (ECDIS)' : '');
  return { category: chartCategory(tokens), code, name, style };
};

const scrapeChart = async (): Promise<
  Array<ScrapedSymbol & { category: NauticalSymbolCategory }>
> => {
  interface Response {
    continue?: { cmcontinue: string };
    query: { categorymembers: Array<{ ns: number; title: string }> };
  }

  const files: string[] = [];
  let cmcontinue: string | undefined;
  do {
    const data = await commonsApi<Response>({
      action: 'query',
      cmlimit: '500',
      cmtitle: CHART_CATEGORY,
      cmtype: 'file',
      list: 'categorymembers',
      ...(cmcontinue ? { cmcontinue } : {}),
    });
    files.push(...data.query.categorymembers.map((m) => normalizeFileName(m.title)));
    cmcontinue = data.continue?.cmcontinue;
  } while (cmcontinue);

  const info = await fetchFileInfo(files);
  const symbols: Array<ScrapedSymbol & { category: NauticalSymbolCategory }> = [];

  for (const file of files.sort()) {
    const override = CHART_OVERRIDES[file];
    if (override === null) continue;
    const derived = override ? { ...override, style: 'Nautical chart symbol' } : chartCode(file);
    if (!derived) {
      console.warn(`  Warning: no chart code for "${file}"; skipped. Add it to CHART_OVERRIDES.`);
      continue;
    }
    const { author, fileUrl, license } = info.get(file)!;
    symbols.push({
      author,
      category: derived.category,
      code: derived.code,
      description: `${derived.name} — ${derived.style}`,
      fileUrl,
      imageUrl: filePageUrl(file),
      license,
      name: derived.name,
    });
  }

  return symbols;
};

// ---------------------------------------------------------------------------
// Ensigns
// ---------------------------------------------------------------------------

type EnsignCategory = 'civil-ensigns' | 'naval-ensigns' | 'jacks';

/** A Wikipedia article whose galleries list one ensign or jack per country. */
interface EnsignSource {
  article: string;
  category: EnsignCategory;
  /** Section ids (headings) whose galleries are skipped: former and historical flags. */
  skip: RegExp;
}

const ENSIGN_SOURCES: readonly EnsignSource[] = [
  { article: 'Civil_ensign', category: 'civil-ensigns', skip: /^(Former|See_also|Remarks)/ },
  { article: 'Naval_ensign', category: 'naval-ensigns', skip: /^(Historical|References)/ },
  { article: 'Jack_(flag)', category: 'jacks', skip: /^(Etymology|Usage|Shapes|See_also|Notes|References|Further|External)/ },
]; // prettier-ignore

/** One gallery item: the caption under it and the captioned images in it. */
interface GalleryItem {
  /** Id of the nearest heading above the gallery. */
  section: string;
  text: string;
  figures: Array<{ caption: string; file: string }>;
}

/** Every gallery item in an article, in document order, with its section heading. */
const galleryItems = (doc: HTMLElement): GalleryItem[] => {
  const items: GalleryItem[] = [];
  let section = '';
  const walk = (node: Node): void => {
    if (node.nodeType !== 1) return;
    const el = node as HTMLElement;
    if (/^H[2-4]$/.test(el.tagName ?? '') && el.id) section = el.id;
    if (el.classNames.includes('gallerybox')) {
      const figures = el.querySelectorAll('a[href*="/wiki/File:"]').map((a) => ({
        caption: (a.getAttribute('title') ?? '').trim(),
        file: normalizeFileName(a.getAttribute('href')!.match(/\/wiki\/File:([^?#]+)/)![1]),
      }));
      const caption = el.querySelector('.gallerytext');
      items.push({ figures, section, text: caption ? cellText(caption) : '' });
      return;
    }
    el.childNodes.forEach(walk);
  };
  walk(doc);
  return items;
};

/** One-line notes per gallery section, used in the descriptions. */
const SECTION_NOTES: Readonly<Record<string, string>> = {
  Sovereign_states: 'The national flag in the canton of a red or blue field.',
  British_overseas_territories_and_crown_dependencies:
    'A British Red Ensign defaced with the badge of the territory.',
  Blue_Ensign_exceptions: 'A blue ensign for government or reserve vessels.',
  Civil_ensigns_that_vary_greatly_from_the_national_flag:
    'Differs markedly from the national flag.',
  Civil_ensigns_consisting_of_the_national_flag_with_an_additional_emblem:
    'The national flag with an added emblem.',
  Civil_ensigns_that_are_simplified_national_flags_with_coat_of_arms_removed:
    'The national flag without the coat of arms.',
  Civil_ensigns_with_a_modified_coat_of_arms: 'The national flag with a modified coat of arms.',
  Civil_ensigns_differing_from_the_national_flag_in_the_proportions:
    'The national flag in different proportions.',
  War_ensign_as_jack: 'The naval ensign flown as the jack.',
  War_flag_as_jack: 'The war flag flown as the jack.',
  Square_version_of_national_flag_as_jack: 'A square version of the national flag.',
  Canton_of_national_ensign_as_jack: 'The canton of the national ensign.',
  National_coat_of_arms_as_jack: 'Shows the national coat of arms.',
  National_flag_as_jack: 'The national flag flown as the jack.',
  National_flag_in_canton_as_jack: 'The national flag in the canton.',
  Jacks_of_special_design: 'A jack of special design.',
  Cross_and_Saltire_Jacks: 'A cross or saltire design.',
  Union_jacks: 'A union jack.',
};

/** Jack captions that don't follow "<Kind> jack of <Country>". Keyed by caption text. */
const JACK_OVERRIDES: Readonly<Record<string, { code: string; name: string } | null>> = {
  'Canadian Coast Guard jack': { code: 'jack-coast-guard-canada', name: 'Coast guard jack of Canada' },
  'Naval jack (Prinsengeus) of the Royal Netherlands Navy (Kingdom of The Netherlands)': {
    code: 'jack-netherlands',
    name: 'Naval jack of the Netherlands (Prinsengeus)',
  },
  'Netherlands (civil jack, unofficial, the most popular of several designs)': {
    code: 'jack-civil-netherlands',
    name: 'Civil jack of the Netherlands (unofficial)',
  },
  // Same artwork as "Naval jack of the United Kingdom".
  'The Union Jack of the United Kingdom': null,
}; // prettier-ignore

/** Ensign files whose derived code and name collide with another entry. Keyed by file name with spaces. */
const ENSIGN_FILE_OVERRIDES: Readonly<Record<string, { code: string; name: string }>> = {
  // El Salvador is listed twice: with an emblem added, and with the arms removed.
  'Civil Flag of El Salvador.svg': {
    code: 'ensign-civil-el-salvador-plain',
    name: 'Civil ensign of El Salvador (without coat of arms)',
  },
};

/** Captions for flags that are no longer in use, e.g. "Naval jack of Canada from 1968 to 2013". */
const isHistorical = (text: string): boolean =>
  /\(former\)|\b(?:from|in) \d{4}\b/.test(text) && !/\bpresent\b/.test(text);

/** Slug for a country or territory name, without a leading article: "The Bahamas" → "bahamas". */
const countrySlug = (country: string): string => slugify(country.replace(/^the\s+/i, ''));

/** A gallery caption's country inside a sentence: "The Bahamas" → "the Bahamas". */
const inSentence = (country: string): string => country.replace(/^The\s/, 'the ');

/**
 * Derives the code and name of an ensign or jack from its gallery item, or
 * `null` when the item is not one (a vexillology icon, a former flag).
 *
 * - Civil ensign, "Australia" → `ensign-civil-australia`, "Civil ensign of Australia"
 * - Civil ensign, "Spain (Yacht ensign)" → `ensign-yacht-spain`, "Yacht ensign of Spain"
 * - Naval ensign, "Albania (Coast Guard)" → `ensign-coast-guard-albania`
 * - Jack, "Naval jack of Denmark" → `jack-denmark`, "Naval jack of Denmark"
 */
export const ensignCode = (
  category: EnsignCategory,
  text: string,
  caption: string,
): { code: string; name: string } | null => {
  if (isHistorical(text)) return null;

  if (category === 'jacks') {
    if (text in JACK_OVERRIDES) return JACK_OVERRIDES[text]!;
    const match = text.match(/^(Naval|Coast Guard|Civil) jack of (.+?)(?:,.*)?$/i);
    if (!match) return null;
    const kind = match[1]!.toLowerCase();
    const country = match[2]!.replace(/\s*\(i\.e\..*\)$/, '');
    return {
      code: slugify(['jack', kind === 'naval' ? '' : kind, countrySlug(country)].join(' ')),
      name: `${kind.charAt(0).toUpperCase() + kind.slice(1)} jack of ${country}`,
    };
  }

  const [, country = text, qualifier = ''] = text.match(/^(.+?)(?:\s*\((.+)\))?$/) ?? [];
  if (category === 'civil-ensigns') {
    // The caption on the image says which ensign it is; the gallery text names the country.
    const kind = /yacht/i.test(caption)
      ? 'yacht'
      : /government/i.test(caption)
        ? 'government'
        : /reserve/i.test(caption)
          ? 'reserve'
          : 'civil';
    const note = kind === 'yacht' ? qualifier.replace(/^yacht ensign;?\s*/i, '') : qualifier;
    return {
      code: slugify(`ensign ${kind} ${countrySlug(country)}`),
      name: `${kind.charAt(0).toUpperCase() + kind.slice(1)} ensign of ${inSentence(country)}${note ? ` (${note})` : ''}`,
    };
  }

  // Naval ensigns: the qualifier names the service ("Coast Guard", "naval auxiliary ships").
  const kind = /coast guard|sea guard/i.test(qualifier)
    ? 'coast guard'
    : /auxiliary/i.test(qualifier)
      ? 'auxiliary'
      : 'naval';
  const label = { auxiliary: 'Naval auxiliary', 'coast guard': 'Coast guard', naval: 'Naval' }[
    kind
  ];
  return {
    code: slugify(`ensign ${kind} ${countrySlug(country)}`),
    name: `${label} ensign of ${inSentence(country)}`,
  };
};

const ENSIGN_DESCRIPTIONS: Readonly<Record<EnsignCategory, string>> = {
  'civil-ensigns': 'Flown at the stern by merchant and private vessels.',
  jacks: 'Flown at the bow of naval vessels in harbour or at anchor.',
  'naval-ensigns': 'Flown at the stern by warships and other state vessels.',
};

const scrapeEnsigns = async (): Promise<
  Array<ScrapedSymbol & { category: NauticalSymbolCategory }>
> => {
  const entries: Array<{
    category: EnsignCategory;
    code: string;
    description: string;
    file: string;
    name: string;
  }> = [];

  for (const { article, category, skip } of ENSIGN_SOURCES) {
    const doc = parse(await fetchText(`${WIKIPEDIA_ORIGIN}/wiki/${article}`));
    const files = new Set<string>();
    for (const { figures, section, text } of galleryItems(doc)) {
      if (!section || skip.test(section)) continue;
      // The civil ensign galleries show the national flag first; the ensign is the last image.
      const figure = figures
        .filter((f) => !/^FIAV|vexillological/i.test(`${f.file} ${f.caption}`))
        .at(-1);
      if (!figure) continue;
      if (!/\.svg$/i.test(figure.file)) {
        console.warn(`  Warning: "${figure.file}" (${text}) is not an SVG; skipped.`);
        continue;
      }
      const derived =
        ENSIGN_FILE_OVERRIDES[figure.file] ?? ensignCode(category, text, figure.caption);
      // A flag can appear in two sections (Hungary's civil ensign) or under two captions.
      if (!derived || files.has(figure.file)) continue;
      files.add(figure.file);
      const note = SECTION_NOTES[section];
      entries.push({
        category,
        code: derived.code,
        description: [ENSIGN_DESCRIPTIONS[category], note].filter(Boolean).join(' '),
        file: figure.file,
        name: derived.name,
      });
    }
  }

  const info = await fetchFileInfo([...new Set(entries.map((e) => e.file))], {
    allowMissing: true,
  });
  const symbols: Array<ScrapedSymbol & { category: NauticalSymbolCategory }> = [];
  for (const { category, code, description, file, name } of entries) {
    const fileInfo = info.get(file);
    if (!fileInfo) {
      console.warn(`  Warning: "${file}" (${code}) is not on Commons; skipped.`);
      continue;
    }
    // The packages are MIT; GPL artwork cannot ship in them (see bin/draw-pennants.ts).
    if (/GPL/i.test(fileInfo.license)) {
      console.warn(`  Warning: "${file}" (${code}) is ${fileInfo.license}; skipped.`);
      continue;
    }
    symbols.push({
      ...fileInfo,
      category,
      code,
      description: `${name}. ${description}`,
      imageUrl: filePageUrl(file),
      name,
    });
  }
  return symbols;
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Scrapes all sources and groups the symbols by category.
 *
 * @throws When a source cannot be fetched or two symbols resolve to the same code.
 */
const scrape = async (): Promise<ScrapedData> => {
  const all = [...(await scrapeFlags()), ...(await scrapeEnsigns()), ...(await scrapeChart())];

  const result = Object.fromEntries(CATEGORIES.map((c) => [c, []])) as unknown as ScrapedData;
  const seen = new Map<string, string>();
  for (const { category, ...symbol } of all) {
    const previous = seen.get(symbol.code);
    if (previous) {
      throw new Error(`Duplicate code "${symbol.code}" for ${symbol.imageUrl} and ${previous}`);
    }
    seen.set(symbol.code, symbol.imageUrl ?? '');
    result[category].push(symbol);
  }

  for (const category of CATEGORIES) {
    console.log(`  ${category}: ${result[category].length} symbols`);
  }
  return result;
};

export default scrape;
