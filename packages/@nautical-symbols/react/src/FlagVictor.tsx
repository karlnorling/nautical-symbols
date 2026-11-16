// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#fff\" d=\"M0 0h600v600H0z\"/><g stroke=\"red\" stroke-width=\"105\"><path d=\"m0 0 600 600zm0 600L600 0z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M0 0h600v600H0z\"/></g>",
  height: "600",
  width: "600",
};
const _title = "V (Victor)";
const _description = "\"I require assistance.\" With a numeric complement: Velocity in kilometres per hour.";

export const FlagVictor = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagVictor.displayName = 'FlagVictor';
