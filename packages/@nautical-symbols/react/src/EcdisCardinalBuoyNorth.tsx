// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M95 9 34 64h61zM73 76l-61 55h61z\" style=\"fill:#f3e54d;fill-opacity:1;fill-rule:evenodd;stroke:#010101;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Cardinal buoy north (ECDIS)";
const _description = "Cardinal buoy north (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisCardinalBuoyNorth = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EcdisCardinalBuoyNorth.displayName = 'EcdisCardinalBuoyNorth';
