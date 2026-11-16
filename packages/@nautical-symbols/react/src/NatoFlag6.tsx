// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#fff\" d=\"M1.25 1.25h597.5v597.5H1.25z\"/><path fill=\"#00f\" d=\"M171 0h175L0 346V171zm341 0h88v88L88 600H0v-88zM254 600l346-346v177L254 777z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"M1.25 1.25h597.5v597.5H1.25z\"/>",
  height: "600",
  width: "600",
};
const _title = "NATO number flag 6";
const _description = "Blazon: Bendy sinister of seven argent and azure";

export const NatoFlag6 = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
NatoFlag6.displayName = 'NatoFlag6';
