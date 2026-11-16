// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" d=\"M0 0h600v600H0z\"/><path fill=\"#ff0\" d=\"M0 200h600v200H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "NATO number flag 1";
const _description = "Blazon: Gules, a fess or";

export const NatoFlag1 = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
NatoFlag1.displayName = 'NatoFlag1';
