// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 107 56\"",
  body: "<path fill=\"#a50021\" d=\"M0 0h107L62 24l-2.751 4L62 32l45 24H0Z\"/><path stroke=\"#fff\" stroke-width=\"8\" d=\"M28-2.216v62M-3.134 28H62\"/>",
  height: "560",
  width: "1070",
};
const _title = "Naval jack of Denmark";
const _description = "Naval jack of Denmark. Flown at the bow of naval vessels in harbour or at anchor. The naval ensign flown as the jack.";

export const JackDenmark = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackDenmark.displayName = 'JackDenmark';
