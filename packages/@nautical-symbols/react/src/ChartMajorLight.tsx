// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 300\"",
  body: "<path d=\"m131.244 119.889-69.9-68.838-5.1-5.05-3.688-5.95-1.412-7.062.825-7.275 2.95-6.563 4.862-5.3 6.488-3.575 7.25-1.525 6.925.85 5.775 3.3 4.825 5.1 4.312 6.063.825 1.25zM154 150c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/><path d=\"m128.831 178.589 8.513-24.8-20.913-14.875h25.513l8.15-24.463 7.8 24.463h25.862l-20.9 15.225 7.8 24.45-20.562-15.225zM157 150c0 3.864-3.136 7-7 7s-7-3.136-7-7 3.136-7 7-7 7 3.136 7 7\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "300",
  width: "300",
};
const _title = "Major light";
const _description = "Major light — INT 1 paper chart symbol";

export const ChartMajorLight = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
ChartMajorLight.displayName = 'ChartMajorLight';
