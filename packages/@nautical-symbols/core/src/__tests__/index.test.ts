import fs from 'fs';
import path from 'path';
import {
  getAllSymbols,
  getSymbol,
  getSymbolsByCategory,
  getSymbolsByGroup,
  parseSvg,
  renderSvg,
  symbols,
  toInstanceId,
} from '../index';

describe('@nautical-symbols/core', () => {
  it('exports a symbols array', () => {
    expect(Array.isArray(symbols)).toBe(true);
  });

  it('getAllSymbols returns the same array', () => {
    expect(getAllSymbols()).toBe(symbols);
  });

  it('getSymbol returns undefined for unknown id', () => {
    expect(getSymbol('not-a-real-symbol')).toBeUndefined();
  });

  it('getSymbolsByCategory returns empty array for unknown category', () => {
    // @ts-expect-error testing invalid input
    expect(getSymbolsByCategory('unknown')).toEqual([]);
  });

  it('getSymbolsByCategory filters correctly when symbols exist', () => {
    const all = getAllSymbols();
    if (all.length === 0) return; // pipeline hasn't run yet — skip
    const cardinal = getSymbolsByCategory('cardinal-marks');
    expect(cardinal.length).toBeGreaterThan(0);
    expect(cardinal.every((s) => s.category === 'cardinal-marks')).toBe(true);
  });

  it('each symbol has the required fields', () => {
    for (const symbol of symbols) {
      expect(symbol).toHaveProperty('id');
      expect(symbol).toHaveProperty('code');
      expect(symbol).toHaveProperty('name');
      expect(symbol).toHaveProperty('category');
      expect(symbol).toHaveProperty('svg');
      expect(symbol).toHaveProperty('assets');
    }
  });
});

describe('symbol data', () => {
  const assetsRoot = path.join(__dirname, '..', '..', '..', 'assets', 'assets');

  it('every asset path points at a file that exists', () => {
    const missing: string[] = [];
    for (const { assets } of symbols) {
      const paths = [
        assets.svg,
        ...Object.values(assets.jpg),
        ...Object.values(assets.png),
        ...Object.values(assets.webp),
      ];
      for (const p of paths) if (!fs.existsSync(path.join(assetsRoot, p))) missing.push(p);
    }
    expect(missing).toEqual([]);
  });

  it('asset svg paths are source files, not sized copies', () => {
    for (const { assets } of symbols) expect(assets.svg).not.toMatch(/_\d+x\d+\.svg$/);
  });

  it('names are unique', () => {
    const names = symbols.map((s) => s.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('has the full International Code of Signals set', () => {
    expect(getSymbolsByCategory('letter-flags')).toHaveLength(26);
    expect(getSymbolsByCategory('number-pennants')).toHaveLength(10);
    expect(getSymbolsByCategory('nato-number-flags')).toHaveLength(10);
    expect(getSymbolsByCategory('special-pennants')).toHaveLength(5);
    expect(getSymbol('flag-alfa')?.name).toBe('A (Alfa)');
    expect(getSymbol('flag-alfa')?.description).toContain('diver down');
  });

  it('groups split flags, ensigns and chart symbols', () => {
    const flags = getSymbolsByGroup('flags');
    const ensigns = getSymbolsByGroup('ensigns');
    const chart = getSymbolsByGroup('chart');
    expect(flags.length + ensigns.length + chart.length).toBe(symbols.length);
    expect(flags.every((s) => s.id !== 'chart-can-buoy-red')).toBe(true);
    expect(chart.some((s) => s.id === 'chart-can-buoy-red')).toBe(true);
    expect(ensigns.map((s) => s.category).sort()).toEqual(
      [
        ...getSymbolsByCategory('civil-ensigns'),
        ...getSymbolsByCategory('naval-ensigns'),
        ...getSymbolsByCategory('jacks'),
      ]
        .map((s) => s.category)
        .sort(),
    );
  });

  it('has per-country civil ensigns, naval ensigns and jacks', () => {
    expect(getSymbolsByCategory('civil-ensigns').length).toBeGreaterThan(50);
    expect(getSymbolsByCategory('naval-ensigns').length).toBeGreaterThan(50);
    expect(getSymbolsByCategory('jacks').length).toBeGreaterThan(50);
    expect(getSymbol('ensign-civil-united-kingdom')?.name).toBe(
      'Civil ensign of United Kingdom',
    );
    expect(getSymbol('ensign-naval-united-kingdom')?.group).toBe('ensigns');
    expect(getSymbol('jack-united-kingdom')?.description).toContain('bow');
  });

  it('every symbol records its licence and Commons source page', () => {
    for (const { license, source } of symbols) {
      expect(license).not.toBe('unknown');
      expect(source).toMatch(
        /^https:\/\/(commons\.wikimedia\.org\/wiki\/File:|github\.com\/karlnorling\/nautical-symbols\/blob\/main\/art\/)/,
      );
    }
  });

  it('ships no GPL artwork', () => {
    for (const { id, license } of symbols) expect([id, license]).not.toEqual([id, 'GPL']);
    for (const s of getSymbolsByCategory('number-pennants')) expect(s.license).toBe('CC0');
  });

  it('inline svgs contain no scripts or event handlers', () => {
    for (const { svg } of symbols) {
      expect(svg).not.toMatch(/<script/i);
      expect(svg).not.toMatch(/\son[a-z]+=/i);
    }
  });
});

describe('renderSvg', () => {
  const svg = parseSvg(
    '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><defs><linearGradient id="g"/></defs><path fill="url(#g)"/><use href="#g"/></svg>',
  );
  const base = { description: 'Desc', instanceId: 'nautical-1', title: 'Title' };

  it('synthesises a viewBox from width/height', () => {
    expect(svg.attrs).toContain('viewBox="0 0 10 10"');
  });

  it('labels the svg via its title and description by default', () => {
    const html = renderSvg(svg, base);
    expect(html).toContain('aria-labelledby="nautical-1-title nautical-1-desc"');
    expect(html).toContain('<title id="nautical-1-title">Title</title>');
  });

  it('uses aria-label instead of aria-labelledby when given', () => {
    const html = renderSvg(svg, { ...base, ariaLabel: 'Exit "here"' });
    expect(html).toContain('aria-label="Exit &quot;here&quot;"');
    expect(html).not.toContain('aria-labelledby');
  });

  it('scopes internal ids and references to the instance', () => {
    const a = renderSvg(svg, base);
    const b = renderSvg(svg, { ...base, instanceId: 'nautical-2' });
    expect(a).toContain('id="nautical-1-g"');
    expect(a).toContain('url(#nautical-1-g)');
    expect(a).toContain('href="#nautical-1-g"');
    expect(b).toContain('id="nautical-2-g"');
    expect(b).not.toContain('nautical-1');
  });

  it('escapes width, height, title and description', () => {
    const html = renderSvg(svg, { ...base, title: '<b>', width: '1" onload="x' });
    expect(html).toContain('&lt;b&gt;');
    expect(html).not.toContain('" onload="');
  });

  it('toInstanceId strips characters unsafe in url(#…) references', () => {
    expect(toInstanceId(':r0:')).toBe('nautical-r0');
    expect(toInstanceId('«r1»')).toBe('nautical-r1');
  });
});
