import * as React from 'react';
import { renderSvg, toInstanceId } from '@nautical-symbols/core';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';

/** Props for the internal {@link SymbolSvg} renderer shared by every symbol component. */
export interface SymbolSvgProps extends SymbolProps {
  /** The symbol's parsed SVG. */
  svg: ParsedSvg;
  /** Title used when the `title` prop is omitted. */
  defaultTitle: string;
  /** Description used when the `description` prop is omitted. */
  defaultDescription: string;
}

/**
 * Renders a parsed symbol SVG inside a `display: contents` wrapper.
 *
 * Ids are derived from `React.useId()`, so any number of instances of the
 * same symbol can share a page and still match between server and client.
 */
export const SymbolSvg = ({
  'aria-label': ariaLabel,
  className,
  defaultDescription,
  defaultTitle,
  description = defaultDescription,
  height,
  style,
  svg,
  title = defaultTitle,
  width,
}: SymbolSvgProps): React.ReactElement => {
  const instanceId = toInstanceId(React.useId());
  const html = renderSvg(svg, { ariaLabel, description, height, instanceId, title, width });
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ display: 'contents', ...style }}
    />
  );
};
