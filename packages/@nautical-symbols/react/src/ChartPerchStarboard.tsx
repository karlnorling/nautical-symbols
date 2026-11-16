// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"m59.369 107.913.35-4.95h7.8V42.35L44.83 67.862l-3.537-3.524 28.7-32.25 28.712 32.25-3.9 3.525L72.481 42.35v60.613h7.788l-.35 4.95z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "140",
  width: "140",
};
const _title = "Perch starboard";
const _description = "Perch starboard — INT 1 paper chart symbol";

export const ChartPerchStarboard = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
ChartPerchStarboard.displayName = 'ChartPerchStarboard';
