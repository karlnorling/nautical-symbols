// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#fff\" d=\"M1.25 1.25h597.5L450 300l148.75 298.75H1.25z\"/><path fill=\"#00f\" d=\"M300 1.25h297.5L448.75 300 597.5 598.75H300z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"M1.25 1.25h597.5L450 300l148.75 298.75H1.25z\"/>",
  height: "600",
  width: "600",
};
const _title = "A (Alfa)";
const _description = "\"I have a diver down; keep well clear at slow speed.\" With a numeric complement: Azimuth or bearing";

export const FlagAlfa = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagAlfa.displayName = 'FlagAlfa';
