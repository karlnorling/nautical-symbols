// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 550 350\"",
  body: "<path fill=\"#00f\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m2 2 546 173L2 348z\"/><path fill=\"#ff0\" d=\"m3 58 364 117L3 292\"/>",
  height: "350",
  width: "550",
};
const _title = "First substitute";
const _description = "Repeats the first flag or pennant in the same hoist. Blazon: Triangular, or, a bordure azure which does not touch the dexter end";

export const Substitute1 = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
Substitute1.displayName = 'Substitute1';
