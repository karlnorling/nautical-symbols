// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 300\"",
  body: "<path d=\"M142.5 8h15v66h64v22h-64v116c30 0 63-16 83-36h32c-30 30-75 57-115 72h-15c-40-15-85-42-115-72h32c20 20 53 36 83 36V96h-64V74h64z\" style=\"fill:none;fill-rule:evenodd;stroke:#d4b1dd;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "300",
  width: "300",
};
const _title = "Anchorage area (ECDIS)";
const _description = "Anchorage area (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisAnchorageArea = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EcdisAnchorageArea.displayName = 'EcdisAnchorageArea';
