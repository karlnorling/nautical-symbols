// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"m87.844 8.913-14.188 42.53-49.281-16.687L38.219 67.35h-7.813v5.688h27.469c1.36 5.43 6.275 9.468 12.125 9.468s10.765-4.038 12.125-9.469h47.5V67.35h-7.406l-43.625-14.5L92.78 10.319zM70 62.506c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5\" style=\"fill:#000;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "140",
  width: "140",
};
const _title = "Wreck";
const _description = "Wreck — INT 1 paper chart symbol";

export const ChartWreck = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
ChartWreck.displayName = 'ChartWreck';
