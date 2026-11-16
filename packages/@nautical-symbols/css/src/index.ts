// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { symbols } from '@nautical-symbols/core';

/**
 * Derives the CSS class name for a nautical symbol from its SVG asset path.
 *
 * Symbols are stored as `category/code/code.svg`, e.g.
 * `letter-flags/flag-alfa/flag-alfa.svg` → class `nautical-flag-alfa`.
 */
function cssClassForPath(assetPath: string): string {
  const filename = assetPath.replace(/\\/g, '/').split('/').pop() ?? '';
  return 'nautical-' + filename.replace(/\.svg$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/**
 * Map of symbol slug ID → CSS sprite class name.
 *
 * Import `@nautical-symbols/css/sprite.css` and apply the class to a
 * block element to show the symbol as a background image.
 */
export const symbolCssClasses: Readonly<Record<string, string>> = Object.fromEntries(
  symbols.map((s) => [s.id, cssClassForPath(s.assets.svg)]),
);

/**
 * Returns the CSS sprite class name for a symbol by its slug ID.
 *
 * @param id - Symbol slug ID, e.g. `"flag-alfa"`.
 * @returns The CSS class name string, or `undefined` if the ID is not found.
 */
export const getCssClassName = (id: string): string | undefined => symbolCssClasses[id];
