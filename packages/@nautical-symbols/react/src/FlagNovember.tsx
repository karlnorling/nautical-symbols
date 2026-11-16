// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4 4\"",
  body: "<path fill=\"#fff\" d=\"M0 0h4v4H0z\"/><path fill=\"#00f\" d=\"M0 3V0h1v4h1V0h1v4h1V1H0v1h4v1z\"/>",
  height: "600",
  width: "600",
};
const _title = "N (November)";
const _description = "\"Negative.\"";

export const FlagNovember = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagNovember.displayName = 'FlagNovember';
