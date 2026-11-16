// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 6\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h6v6H0z\"/><path fill=\"#00f\" d=\"M1 0v6h1V0h1v6h1V0h1v6h1V0z\"/>",
  height: "600",
  width: "600",
};
const _title = "G (Golf)";
const _description = "\"I require a pilot.\" By fishing vessels near fishing grounds: \"I am hauling nets.\" With a numeric complement: Longitude (The first 2 or 3 digits denote degrees; the last 2 denote minutes.)";

export const FlagGolf = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagGolf.displayName = 'FlagGolf';
