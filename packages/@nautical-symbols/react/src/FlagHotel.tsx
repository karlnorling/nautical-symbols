// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" d=\"M1 0h599v600H1\"/><path fill=\"#fff\" d=\"M0 0h300v600H0\"/>",
  height: "600",
  width: "600",
};
const _title = "H (Hotel)";
const _description = "\"I have a pilot on board.\"";

export const FlagHotel = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagHotel.displayName = 'FlagHotel';
