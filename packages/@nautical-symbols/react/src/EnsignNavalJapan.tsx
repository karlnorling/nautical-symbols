// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#bc002d\"",
  body: "<path d=\"M0 0h900v600H0z\"/><path id=\"ensign-naval-japan-a\" fill=\"#fff\" d=\"M354.976 291.321 115.895 0h83.367zL266.605 0h59.678zL383.67 0h59.678zL510.691 0h83.366zL709.952 0H900zM338.74 300 900 129.743v114.978zm26.811 0L0 263.996v-74.885zL0 0v104.609z\"/><use xlink:href=\"#ensign-naval-japan-a\" fill=\"#fff\" transform=\"matrix(1 0 0 -1 0 600)\"/><circle cx=\"350\" cy=\"300\" r=\"150\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval ensign of Japan";
const _description = "Naval ensign of Japan. Flown at the stern by warships and other state vessels.";

export const EnsignNavalJapan = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalJapan.displayName = 'EnsignNavalJapan';
