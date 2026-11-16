// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M92 40c0 12.144-9.856 22-22 22s-22-9.856-22-22 9.856-22 22-22 22 9.856 22 22m0 60c0 12.144-9.856 22-22 22s-22-9.856-22-22 9.856-22 22-22 22 9.856 22 22\" style=\"fill:#ee5a6c;fill-opacity:1;fill-rule:evenodd;stroke:#010101;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Isolated danger beacon (ECDIS)";
const _description = "Isolated danger beacon (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisIsolatedDangerBeacon = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EcdisIsolatedDangerBeacon.displayName = 'EcdisIsolatedDangerBeacon';
