// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#ff0\" stroke=\"#000\" stroke-width=\"2\" d=\"M0 0h600v600H0\"/><circle cx=\"300\" cy=\"300\" r=\"150\"/>",
  height: "600",
  width: "600",
};
const _title = "I (India)";
const _description = "\"I am altering my course to port.\"";

export const FlagIndia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagIndia.displayName = 'FlagIndia';
