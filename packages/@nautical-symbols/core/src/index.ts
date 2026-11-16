/**
 * Main entry point for the @nautical-symbols/core package.
 *
 * Provides typed access to all nautical symbol data (signal flags and chart symbols) including inline SVGs,
 * asset paths, and metadata.
 *
 * @module @nautical-symbols/core
 */

import { symbols } from './symbols.generated.js';
import type { NauticalSymbol, NauticalSymbolCategory, NauticalSymbolGroup } from './types.js';

export type {
  NauticalSymbol,
  NauticalSymbolAssets,
  NauticalSymbolCategory,
  NauticalSymbolGroup,
} from './types.js';
export { symbols } from './symbols.generated.js';
export {
  createInstanceId,
  escapeHtml,
  parseSvg,
  renderSvg,
  scopeIds,
  toInstanceId,
} from './render.js';
export type { ParsedSvg, RenderSvgOptions } from './render.js';

/** Returns every symbol in the registry. */
export const getAllSymbols = (): NauticalSymbol[] => symbols;

/** Returns a symbol by its slug ID (e.g. `"flag-alfa"`). */
export const getSymbol = (id: string): NauticalSymbol | undefined => symbols.find((s) => s.id === id);

/** Returns all symbols that belong to the given category. */
export const getSymbolsByCategory = (category: NauticalSymbolCategory): NauticalSymbol[] =>
  symbols.filter((s) => s.category === category);

/** Returns all symbols in one family: `"flags"` or `"chart"`. */
export const getSymbolsByGroup = (group: NauticalSymbolGroup): NauticalSymbol[] =>
  symbols.filter((s) => s.group === group);
