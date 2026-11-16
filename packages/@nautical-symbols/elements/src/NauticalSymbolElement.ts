import { getSymbol, parseSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

/**
 * Generic nautical symbol custom element — renders any symbol by slug ID.
 *
 * Accepts every {@link SymbolElement} attribute, plus:
 * - `symbol-id` — slug ID, e.g. `"flag-alfa"` or `"chart-can-buoy-red"`
 *
 * @example
 * ```html
 * <nautical-symbol symbol-id="flag-alfa" width="64"></nautical-symbol>
 * ```
 */
export class NauticalSymbolElement extends SymbolElement {
  static readonly tagName = 'nautical-symbol';
  static readonly observedAttributes = ['symbol-id', ...SymbolElement.observedAttributes];

  protected content(): SymbolElementContent | undefined {
    const symbolId = this.getAttribute('symbol-id');
    const symbol = symbolId ? getSymbol(symbolId) : undefined;
    if (!symbol) return undefined;
    return { description: symbol.description, svg: parseSvg(symbol.svg), title: symbol.name };
  }
}
