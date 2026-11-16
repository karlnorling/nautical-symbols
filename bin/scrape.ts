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
 *
 * Every file's licence is read from the Commons API, because the sources mix
 * public domain, CC0, CC BY-SA 4.0 and GPL artwork.
 *
 * Codes are the public identifiers (slug IDs, component names, sprite IDs,
 * CSS classes), so never change one. Flags use the fixed {@link FLAG_CODES}
 * table; chart codes are derived from the Commons file name by
 * {@link chartCode}, with {@link CHART_OVERRIDES} for files that do not follow
 * the `NChart-Symbol INT …` / `NChart ECDIS …` naming.
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
const fetchFileInfo = async (fileNames: string[]): Promise<Map<string, FileInfo>> => {
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
      if (!ii) throw new Error(`Commons has no file "${fileName}"`);
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
// Public API
// ---------------------------------------------------------------------------

/**
 * Scrapes both sources and groups the symbols by category.
 *
 * @throws When a source cannot be fetched or two symbols resolve to the same code.
 */
const scrape = async (): Promise<ScrapedData> => {
  const all = [...(await scrapeFlags()), ...(await scrapeChart())];

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
