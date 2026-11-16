/**
 * draw-pennants.ts
 *
 * Draws the ten International Code of Signals numeral pennants from their
 * blazons and writes them to `art/number-pennants/pennant-{n}.svg`.
 *
 * The pennant artwork on Wikimedia Commons is GPL-licensed, which does not
 * fit the MIT packages. These drawings are original to this repository and
 * dedicated to the public domain (CC0); `bin/scrape.ts` points the
 * `number-pennants` category at them instead of the Commons files.
 *
 * Run via: yarn draw-pennants
 */

import fs from 'fs';
import path from 'path';

const W = 540;
const H = 300;
/** Height of the fly end; the pennant tapers evenly from the full-height hoist. */
const FLY = 150;
const STROKE = 2.5;

const COLORS = {
  black: '#000',
  blue: '#00f',
  red: '#f00',
  white: '#fff',
  yellow: '#ff0',
} as const;

type Color = keyof typeof COLORS;

const top = (FLY_ = FLY): number => (H - FLY_) / 2;
const OUTLINE = `M0,0L${W},${top()}V${H - top()}L0,${H}Z`;

const rect = (x: number, y: number, w: number, h: number, fill: Color): string =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${COLORS[fill]}"/>`;

const disc = (fill: Color): string =>
  `<circle cx="${W / 3}" cy="${H / 2}" r="${H / 4}" fill="${COLORS[fill]}"/>`;

/** A cross whose upright sits towards the hoist and whose arm runs to the fly. */
const cross = (fill: Color): string => {
  const bar = H / 4;
  const x = W / 3 - bar / 2;
  return rect(x, 0, bar, H, fill) + rect(0, H / 2 - bar / 2, W, bar, fill);
};

/** Pennant designs keyed by numeral; each draws on a field clipped to the outline. */
const DESIGNS: Record<number, { blazon: string; body: string }> = {
  0: { blazon: 'Or, a pale gules', body: rect(0, 0, W, H, 'yellow') + rect(W / 3, 0, W / 3, H, 'red') },
  1: { blazon: 'Argent, a torteau', body: rect(0, 0, W, H, 'white') + disc('red') },
  2: { blazon: 'Azure, a plate', body: rect(0, 0, W, H, 'blue') + disc('white') },
  3: {
    blazon: 'Tierced in pale gules, argent and azure',
    body: rect(0, 0, W / 3, H, 'red') + rect(W / 3, 0, W / 3, H, 'white') + rect((2 * W) / 3, 0, W / 3, H, 'blue'),
  },
  4: { blazon: 'Gules, a cross argent', body: rect(0, 0, W, H, 'red') + cross('white') },
  5: { blazon: 'Per pale or and azure', body: rect(0, 0, W / 2, H, 'yellow') + rect(W / 2, 0, W / 2, H, 'blue') },
  6: { blazon: 'Per fess sable and argent', body: rect(0, 0, W, H / 2, 'black') + rect(0, H / 2, W, H / 2, 'white') },
  7: { blazon: 'Per fess or and gules', body: rect(0, 0, W, H / 2, 'yellow') + rect(0, H / 2, W, H / 2, 'red') },
  8: { blazon: 'Argent, a cross gules', body: rect(0, 0, W, H, 'white') + cross('red') },
  9: {
    blazon: 'Quarterly argent, sable, gules and or',
    body:
      rect(0, 0, W / 2, H / 2, 'white') +
      rect(W / 2, 0, W / 2, H / 2, 'black') +
      rect(0, H / 2, W / 2, H / 2, 'red') +
      rect(W / 2, H / 2, W / 2, H / 2, 'yellow'),
  },
}; // prettier-ignore

export const ART_DIR = path.join('art', 'number-pennants');

/** Repository path of a numeral pennant's SVG, e.g. `art/number-pennants/pennant-3.svg`. */
export const pennantPath = (n: number): string => path.join(ART_DIR, `pennant-${n}.svg`);

export const drawPennant = (n: number): string => {
  const { blazon, body } = DESIGNS[n]!;
  const half = STROKE / 2;
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-half} ${-half} ${W + STROKE} ${H + STROKE}" width="${W + STROKE}" height="${H + STROKE}">`,
    `<title>ICS numeral pennant ${n}: ${blazon}</title>`,
    `<desc>Original drawing for nautical-symbols, dedicated to the public domain (CC0 1.0).</desc>`,
    `<clipPath id="pennant"><path d="${OUTLINE}"/></clipPath>`,
    `<g clip-path="url(#pennant)">${body}</g>`,
    `<path d="${OUTLINE}" fill="none" stroke="#000" stroke-width="${STROKE}" stroke-linejoin="miter"/>`,
    `</svg>`,
    ``,
  ].join('\n');
};

const isMain = process.argv[1]?.endsWith('draw-pennants.ts');

if (isMain) {
  fs.mkdirSync(ART_DIR, { recursive: true });
  for (let n = 0; n <= 9; n++) {
    fs.writeFileSync(pennantPath(n), drawPennant(n), 'utf-8');
    console.log(`Written: ${pennantPath(n)}`);
  }
}
