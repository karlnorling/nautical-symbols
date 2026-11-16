// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h600v600H0z\"/><path stroke=\"#00f\" stroke-width=\"106\" d=\"m0 0 600 600M0 600 600 0\"/>",
  height: "600",
  width: "600",
};
const _title = "NATO number flag 5";
const _description = "Blazon: Or, a saltire azure";

export const NatoFlag5 = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
NatoFlag5.displayName = 'NatoFlag5';
