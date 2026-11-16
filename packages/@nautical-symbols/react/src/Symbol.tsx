import * as React from 'react';
import { getSymbol, parseSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

/** Props for the generic {@link SymbolById} component. */
export interface SymbolByIdProps extends SymbolProps {
  /** Symbol slug ID, e.g. `"flag-alfa"` or `"chart-can-buoy-red"`. */
  id: string;
}

/**
 * Renders any nautical symbol by slug ID.
 *
 * Useful for data-driven rendering where the symbol ID comes from an API
 * response or user input rather than being known at compile time.
 *
 * Returns `null` for unrecognised IDs so callers can handle missing symbols
 * gracefully without a try/catch.
 *
 * @example
 * ```tsx
 * <SymbolById id="flag-alfa" width={64} />
 * ```
 */
export const SymbolById = React.memo<SymbolByIdProps>(({ id, ...props }) => {
  const symbol = getSymbol(id);
  if (!symbol) return null;
  return (
    <SymbolSvg
      {...props}
      defaultDescription={symbol.description}
      defaultTitle={symbol.name}
      svg={parseSvg(symbol.svg)}
    />
  );
});
SymbolById.displayName = 'SymbolById';
