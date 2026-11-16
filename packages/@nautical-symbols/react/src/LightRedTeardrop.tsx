// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50.251 53.536\"",
  body: "<path d=\"M-417.88 490.29c-4.34-3.3-6.29-6.91-6.67-12.33-.45-6.33 2.5-11.35 9.32-15.87 7.44-4.93 39.99-22.62 39.82-21.64-.1.6-4.71 11.01-10.24 23.14-8.21 17.99-10.49 22.48-12.38 24.4-5.43 5.49-14.31 6.52-19.85 2.3z\" style=\"fill-rule:evenodd;stroke:#000;stroke-miterlimit:3.9879;stroke-width:1.063;fill:red\" transform=\"translate(425.13 -439.88)\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Red light (teardrop)";
const _description = "Red light (teardrop) — Nautical chart symbol";

export const LightRedTeardrop = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
LightRedTeardrop.displayName = 'LightRedTeardrop';
