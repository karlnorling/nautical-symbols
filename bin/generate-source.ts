/**
 * generate-source.ts
 *
 * Reads data/scraped.json + assets/svg-map.json and generates:
 *   - packages/@nautical-symbols/core/src/symbols.generated.ts
 *   - packages/@nautical-symbols/react/src/SymbolProps.ts
 *   - packages/@nautical-symbols/react/src/{ComponentName}.tsx  (one per symbol)
 *   - packages/@nautical-symbols/react/src/index.ts
 *   - packages/@nautical-symbols/vue/src/SymbolProps.ts
 *   - packages/@nautical-symbols/vue/src/{ComponentName}.ts    (one per symbol)
 *   - packages/@nautical-symbols/vue/src/index.ts
 *   - packages/@nautical-symbols/elements/src/{ComponentName}.ts (one per symbol)
 *   - packages/@nautical-symbols/elements/src/defineCustomElements.ts
 *   - packages/@nautical-symbols/elements/src/index.ts
 *
 * Run via: yarn generate
 */

import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import type { ScrapedData, NauticalSymbolCategory } from './scrape';
import type { NauticalSymbolGroup } from '../packages/@nautical-symbols/core/src/types';
import type { NauticalSymbol } from '../packages/@nautical-symbols/core/src/types';
import { parseSvg, scopeIds } from '../packages/@nautical-symbols/core/src/render';
import type { ParsedSvg } from '../packages/@nautical-symbols/core/src/render';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const slugify = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Converts a kebab-case slug to PascalCase component name. */
const toComponentName = (id: string): string =>
  id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const FLAG_CATEGORIES: ReadonlySet<NauticalSymbolCategory> = new Set([
  'letter-flags',
  'number-pennants',
  'nato-number-flags',
  'special-pennants',
]);

const groupOf = (category: NauticalSymbolCategory): NauticalSymbolGroup =>
  FLAG_CATEGORIES.has(category) ? 'flags' : 'chart';

const IMAGE_SIZES = [240, 512, 768, 1024, 2048] as const;

const buildAssets = (svgRelPath: string): NauticalSymbol['assets'] => {
  const dir = path.dirname(svgRelPath);
  const base = path.basename(svgRelPath, path.extname(svgRelPath));
  const makeRecord = (ext: string): Record<number, string> =>
    Object.fromEntries(IMAGE_SIZES.map((s) => [s, `${dir}/${base}_${s}x${s}.${ext}`])) as Record<
      number,
      string
    >;
  return {
    jpg: makeRecord('jpg'),
    png: makeRecord('png'),
    svg: svgRelPath,
    webp: makeRecord('webp'),
  };
};

const cleanSvg = (svg: string): string =>
  svg
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!DOCTYPE[^>]*>/g, '')
    .trim();

/**
 * Ensures the SVG has a `viewBox`. When `width`/`height` are present but
 * `viewBox` is absent, synthesises `viewBox="0 0 {w} {h}"` so that CSS
 * resizing scales the content rather than clipping it.
 */
const normalizeSvg = (svg: string): string => {
  const cleaned = cleanSvg(svg);
  if (/\bviewBox="/i.test(cleaned)) return cleaned;
  const wm = cleaned.match(/\bwidth="([0-9.]+)(?:px)?"/);
  const hm = cleaned.match(/\bheight="([0-9.]+)(?:px)?"/);
  if (!wm || !hm) return cleaned;
  return cleaned.replace(/<svg\b/, `<svg viewBox="0 0 ${wm[1]} ${hm[1]}"`);
};

// `removeScripts` strips <script>, on* handlers and javascript: links: the
// SVGs come from Wikimedia Commons and end up in innerHTML.
const optimizeSvg = (svg: string): string =>
  optimize(svg, { multipass: true, plugins: ['preset-default', 'removeScripts'] }).data;

// ---------------------------------------------------------------------------
// Symbol collection
// ---------------------------------------------------------------------------

/** Matches the pre-sized copies older pipeline runs wrote next to each source SVG. */
const SIZED_SVG_RE = /_\d+x\d+\.svg$/;

const collectEntries = (scraped: ScrapedData, svgMap: Record<string, string>): NauticalSymbol[] => {
  const entries: NauticalSymbol[] = [];
  const svgKeys = Object.keys(svgMap)
    .filter((k) => !SIZED_SVG_RE.test(k))
    .sort();

  /** Finds the source SVG in the symbol's own `{category}/{code}/` directory, preferring `{code}.svg`. */
  const findSvgKey = (category: NauticalSymbolCategory, code: string): string | undefined => {
    const candidates = svgKeys.filter((k) => k.startsWith(`${category}/${code}/`));
    return candidates.find((k) => path.basename(k, '.svg') === code) ?? candidates[0];
  };

  for (const [category, symbols] of Object.entries(scraped) as Array<
    [NauticalSymbolCategory, ScrapedData[NauticalSymbolCategory]]
  >) {
    for (const symbol of symbols) {
      const { code, name, description, license } = symbol;
      const svgKey = findSvgKey(category, code);

      if (!svgKey) {
        console.warn(`  Warning: no SVG found for "${code}" (${name})`);
        continue;
      }

      const svgContent = svgMap[svgKey];
      if (!svgContent) continue;

      // Codes are already kebab-case slugs (`flag-alfa`), so they double as the ID.
      const id = slugify(code);
      entries.push({
        assets: buildAssets(svgKey),
        category,
        code,
        description,
        group: groupOf(category),
        id,
        license,
        name,
        source: symbol.imageUrl ?? '',
        svg: scopeIds(normalizeSvg(optimizeSvg(svgContent)), id),
      });

      console.log(`  + ${id} (${category})`);
    }
  }

  return entries;
};

// ---------------------------------------------------------------------------
// Code generation — core/src/symbols.generated.ts
// ---------------------------------------------------------------------------

const generateSymbolsFile = (symbols: NauticalSymbol[]): string => {
  const lines: string[] = [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import type { NauticalSymbol } from './types.js';`,
    ``,
    `export const symbols: NauticalSymbol[] = [`,
  ];

  for (const s of symbols) {
    lines.push(
      `  {`,
      `    assets: {`,
      `      jpg: ${JSON.stringify(s.assets.jpg)},`,
      `      png: ${JSON.stringify(s.assets.png)},`,
      `      svg: ${JSON.stringify(s.assets.svg)},`,
      `      webp: ${JSON.stringify(s.assets.webp)},`,
      `    },`,
      `    category: ${JSON.stringify(s.category)},`,
      `    code: ${JSON.stringify(s.code)},`,
      `    description: ${JSON.stringify(s.description)},`,
      `    group: ${JSON.stringify(s.group)},`,
      `    id: ${JSON.stringify(s.id)},`,
      `    license: ${JSON.stringify(s.license)},`,
      `    name: ${JSON.stringify(s.name)},`,
      `    source: ${JSON.stringify(s.source)},`,
      `    svg: ${JSON.stringify(s.svg)},`,
      `  },`,
    );
  }

  lines.push(`];`);
  return lines.join('\n') + '\n';
};

// ---------------------------------------------------------------------------
// Code generation — react/src/SymbolProps.ts
// ---------------------------------------------------------------------------

const generateReactPropsFile = (): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import type * as React from 'react';`,
    ``,
    `/** Props accepted by every generated nautical symbol React component. */`,
    `export interface SymbolProps {`,
    `  /** CSS class forwarded to the wrapping \`<span>\`. */`,
    `  className?: string;`,
    `  /** Accessible description injected as \`<desc>\` inside the SVG. Defaults to the symbol name. */`,
    `  description?: string;`,
    `  /** Height applied to the \`<svg>\` element (pixels or any CSS length). */`,
    `  height?: number | string;`,
    `  /** Inline styles forwarded to the wrapping \`<span>\`. */`,
    `  style?: React.CSSProperties;`,
    `  /** Accessible title injected as \`<title>\` inside the SVG. Defaults to the symbol name. */`,
    `  title?: string;`,
    `  /** Width applied to the \`<svg>\` element (pixels or any CSS length). */`,
    `  width?: number | string;`,
    `  /** Labels the \`<svg>\` directly, replacing its \`aria-labelledby\` title/description reference. */`,
    `  'aria-label'?: string;`,
    `}`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — shared per-component constants
// ---------------------------------------------------------------------------

const HEADER = [
  `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
  `// Run 'yarn generate' to regenerate.`,
  ``,
];

/**
 * Module-level constants every generated component starts with: the parsed
 * SVG plus the default title/description. Values go through JSON.stringify so
 * any character in a scraped name is emitted safely.
 */
const componentConstants = (symbol: NauticalSymbol): string[] => {
  const svg: ParsedSvg = parseSvg(symbol.svg);
  return [
    `const _svg: ParsedSvg = {`,
    `  attrs: ${JSON.stringify(svg.attrs)},`,
    `  body: ${JSON.stringify(svg.body)},`,
    `  height: ${JSON.stringify(svg.height)},`,
    `  width: ${JSON.stringify(svg.width)},`,
    `};`,
    `const _title = ${JSON.stringify(symbol.name)};`,
    `const _description = ${JSON.stringify(symbol.description)};`,
  ];
};

// ---------------------------------------------------------------------------
// Code generation — react/src/{ComponentName}.tsx
// ---------------------------------------------------------------------------

const generateReactComponentFile = (symbol: NauticalSymbol): string => {
  const componentName = toComponentName(symbol.id);
  return [
    ...HEADER,
    `import * as React from 'react';`,
    `import type { ParsedSvg } from '@nautical-symbols/core';`,
    `import type { SymbolProps } from './SymbolProps.js';`,
    `import { SymbolSvg } from './SymbolSvg.js';`,
    ``,
    ...componentConstants(symbol),
    ``,
    `export const ${componentName} = React.memo<SymbolProps>((props) => (`,
    `  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />`,
    `));`,
    `${componentName}.displayName = '${componentName}';`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — react/src/index.ts
// ---------------------------------------------------------------------------

const generateReactIndex = (componentNames: string[]): string =>
  [
    ...HEADER,
    `export type { SymbolProps } from './SymbolProps.js';`,
    `export { SymbolById } from './Symbol.js';`,
    `export type { SymbolByIdProps } from './Symbol.js';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}.js';`),
    `export type {\n  NauticalSymbol,\n  NauticalSymbolAssets,\n  NauticalSymbolCategory,\n  NauticalSymbolGroup,\n} from '@nautical-symbols/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — vue/src/SymbolProps.ts
// ---------------------------------------------------------------------------

const generateVuePropsFile = (): string =>
  [
    ...HEADER,
    `import type { PropType } from 'vue';`,
    ``,
    `/**`,
    ` * Reusable Vue prop definitions shared by every generated nautical symbol component.`,
    ` * \`aria-label\` is read from fallthrough attributes and labels the \`<svg>\` directly.`,
    ` */`,
    `export const symbolProps = {`,
    `  /** Accessible description injected as \`<desc>\` inside the SVG. Defaults to the symbol name. */`,
    `  description: { type: String as PropType<string> },`,
    `  /** Height applied to the \`<svg>\` element (pixels or any CSS length). */`,
    `  height: { type: [Number, String] as PropType<number | string> },`,
    `  /** Accessible title injected as \`<title>\` inside the SVG. Defaults to the symbol name. */`,
    `  title: { type: String as PropType<string> },`,
    `  /** Width applied to the \`<svg>\` element (pixels or any CSS length). */`,
    `  width: { type: [Number, String] as PropType<number | string> },`,
    `} as const;`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — vue/src/{ComponentName}.ts
// ---------------------------------------------------------------------------

const generateVueComponentFile = (symbol: NauticalSymbol): string => {
  const componentName = toComponentName(symbol.id);
  return [
    ...HEADER,
    `import { defineComponent } from 'vue';`,
    `import type { ParsedSvg } from '@nautical-symbols/core';`,
    `import { symbolProps } from './SymbolProps.js';`,
    `import { renderSymbol, useInstanceId } from './SymbolSvg.js';`,
    ``,
    ...componentConstants(symbol),
    ``,
    `export const ${componentName} = defineComponent({`,
    `  name: '${componentName}',`,
    `  inheritAttrs: false,`,
    `  props: symbolProps,`,
    `  setup(props, { attrs }) {`,
    `    const instanceId = useInstanceId();`,
    `    return () =>`,
    `      renderSymbol({`,
    `        attrs,`,
    `        description: props.description ?? _description,`,
    `        height: props.height,`,
    `        instanceId,`,
    `        svg: _svg,`,
    `        title: props.title ?? _title,`,
    `        width: props.width,`,
    `      });`,
    `  },`,
    `});`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — vue/src/index.ts
// ---------------------------------------------------------------------------

const generateVueIndex = (componentNames: string[]): string =>
  [
    ...HEADER,
    `export { symbolProps } from './SymbolProps.js';`,
    `export { SymbolById } from './SymbolById.js';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}.js';`),
    `export type {\n  NauticalSymbol,\n  NauticalSymbolAssets,\n  NauticalSymbolCategory,\n  NauticalSymbolGroup,\n} from '@nautical-symbols/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — elements/src/{ComponentName}.ts
// ---------------------------------------------------------------------------

const generateElementFile = (symbol: NauticalSymbol): string => {
  const componentName = toComponentName(symbol.id);
  return [
    ...HEADER,
    `import type { ParsedSvg } from '@nautical-symbols/core';`,
    `import { SymbolElement } from './SymbolElement.js';`,
    `import type { SymbolElementContent } from './SymbolElement.js';`,
    ``,
    ...componentConstants(symbol),
    ``,
    `export class ${componentName} extends SymbolElement {`,
    `  static readonly tagName = 'nautical-${symbol.id}';`,
    ``,
    `  protected content(): SymbolElementContent {`,
    `    return { description: _description, svg: _svg, title: _title };`,
    `  }`,
    `}`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — elements/src/defineCustomElements.ts
// ---------------------------------------------------------------------------

const generateDefineCustomElements = (componentNames: string[], exampleIds: string[]): string =>
  [
    ...HEADER,
    `import { NauticalSymbolElement } from './NauticalSymbolElement.js';`,
    ...componentNames.map((name) => `import { ${name} } from './${name}.js';`),
    ``,
    `const _elements: Array<[CustomElementConstructor, string]> = [`,
    `  [NauticalSymbolElement, NauticalSymbolElement.tagName],`,
    ...componentNames.map((name) => `  [${name}, ${name}.tagName],`),
    `];`,
    ``,
    `/**`,
    ` * Registers all nautical symbol custom elements.`,
    ` *`,
    ` * Safe to call more than once, including with different prefixes or after`,
    ` * registering some classes yourself: tags that are already defined are skipped,`,
    ` * and a class that is already registered under another name is registered via`,
    ` * a subclass (the registry rejects one constructor under two names).`,
    ` *`,
    ` * @param prefix — tag-name prefix (default \`"nautical"\`). Each element is registered`,
    ` *   as \`{prefix}-{id}\`, e.g. \`nautical-${exampleIds[0]}\`, plus the generic \`{prefix}-symbol\`.`,
    ` *   Pass a custom string to avoid conflicts with other libraries.`,
    ` * @example`,
    ` * \`\`\`ts`,
    ` * import { defineCustomElements } from '@nautical-symbols/elements';`,
    ` * defineCustomElements(); // registers nautical-symbol, ${exampleIds.map((id) => `nautical-${id}`).join(', ')}, etc.`,
    ` * \`\`\``,
    ` */`,
    `export function defineCustomElements(prefix = 'nautical'): void {`,
    `  for (const [cls, defaultTag] of _elements) {`,
    `    const tag = prefix === 'nautical' ? defaultTag : \`\${prefix}-\${defaultTag.replace(/^nautical-/, '')}\`;`,
    `    if (customElements.get(tag)) continue;`,
    `    try {`,
    `      customElements.define(tag, cls);`,
    `    } catch {`,
    `      customElements.define(tag, class extends cls {});`,
    `    }`,
    `  }`,
    `}`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — elements/src/index.ts
// ---------------------------------------------------------------------------

const generateElementsIndex = (componentNames: string[]): string =>
  [
    ...HEADER,
    `export { NauticalSymbolElement } from './NauticalSymbolElement.js';`,
    `export { SymbolElement } from './SymbolElement.js';`,
    `export type { SymbolElementContent } from './SymbolElement.js';`,
    `export { defineCustomElements } from './defineCustomElements.js';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}.js';`),
    `export type {\n  NauticalSymbol,\n  NauticalSymbolAssets,\n  NauticalSymbolCategory,\n  NauticalSymbolGroup,\n} from '@nautical-symbols/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export const generateSource = async (): Promise<void> => {
  const scrapedPath = path.join('data', 'scraped.json');
  const svgMapPath = path.join('packages', '@nautical-symbols', 'assets', 'assets', 'svg-map.json');

  if (!fs.existsSync(scrapedPath)) {
    throw new Error(`Missing ${scrapedPath}. Run 'yarn update' first.`);
  }
  if (!fs.existsSync(svgMapPath)) {
    throw new Error(`Missing ${svgMapPath}. Run 'yarn update' first.`);
  }

  const scraped: ScrapedData = JSON.parse(fs.readFileSync(scrapedPath, 'utf-8'));
  const svgMap: Record<string, string> = JSON.parse(fs.readFileSync(svgMapPath, 'utf-8'));

  console.log(`Loaded ${Object.keys(svgMap).length} SVGs from svg-map.json`);

  const symbols = collectEntries(scraped, svgMap);
  console.log(`Collected ${symbols.length} symbol entries`);
  const componentNames = symbols.map((s) => toComponentName(s.id));

  const write = (file: string, content: string): void => {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Written: ${file}`);
  };
  const pkgSrc = (pkg: string, file: string): string =>
    path.join('packages', '@nautical-symbols', pkg, 'src', file);

  write(pkgSrc('core', 'symbols.generated.ts'), generateSymbolsFile(symbols));

  write(pkgSrc('react', 'SymbolProps.ts'), generateReactPropsFile());
  for (const symbol of symbols) {
    write(pkgSrc('react', `${toComponentName(symbol.id)}.tsx`), generateReactComponentFile(symbol));
  }
  write(pkgSrc('react', 'index.ts'), generateReactIndex(componentNames));

  write(pkgSrc('vue', 'SymbolProps.ts'), generateVuePropsFile());
  for (const symbol of symbols) {
    write(pkgSrc('vue', `${toComponentName(symbol.id)}.ts`), generateVueComponentFile(symbol));
  }
  write(pkgSrc('vue', 'index.ts'), generateVueIndex(componentNames));

  for (const symbol of symbols) {
    write(pkgSrc('elements', `${toComponentName(symbol.id)}.ts`), generateElementFile(symbol));
  }
  write(
    pkgSrc('elements', 'defineCustomElements.ts'),
    generateDefineCustomElements(
      componentNames,
      symbols.slice(0, 2).map((s) => s.id),
    ),
  );
  write(pkgSrc('elements', 'index.ts'), generateElementsIndex(componentNames));

  console.log('\nDone.');
};

const isMain =
  process.argv[1] &&
  (process.argv[1].endsWith('generate-source.ts') ||
    process.argv[1].endsWith('generate-source.js'));

if (isMain) {
  generateSource().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
