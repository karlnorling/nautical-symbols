// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M119.625 40C109.456 23.225 91.035 12 70 12c-17.04 0-32.386 7.35-43 19.063m0 77.875C37.614 120.65 52.96 128 70 128c21.035 0 39.456-11.225 49.625-28M80 48c-21 0-34 8-48 22 14 14 28 22 48 22 21 0 34-9 48-22-14-14-27-22-48-22M32 70 14.625 52.625C12.905 58.108 12 63.952 12 70s.905 11.892 2.625 17.375z\" style=\"fill:none;stroke:#c64dbb;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Fishing harbour (ECDIS)";
const _description = "Fishing harbour (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisFishingHarbour = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EcdisFishingHarbour.displayName = 'EcdisFishingHarbour';
