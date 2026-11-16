// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 5\"",
  body: "<path fill=\"#fff\" d=\"M0 0h5v5H0z\"/><path fill=\"#00f\" d=\"M2 0h1v2h2v1H3v2H2V3H0V2h2z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\".02\" d=\"M0 0h5v5H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "X (Xray)";
const _description = "\"Stop carrying out your intentions and watch for my signals.\"";

export const FlagXray = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagXray.displayName = 'FlagXray';
