// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h2v2H0z\"/><path d=\"m0 0 1 1-1 1z\"/><path fill=\"red\" d=\"m0 2 1-1 1 1z\"/><path fill=\"#00f\" d=\"M2 2 1 1l1-1z\"/>",
  height: "600",
  width: "600",
};
const _title = "Z (Zulu)";
const _description = "\"I require a tug.\" By fishing vessels near fishing grounds: \"I am shooting nets.\" With a numeric complement: Time (UTC). (The first 2 digits denote hours; the last 2 denote minutes.)";

export const FlagZulu = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagZulu.displayName = 'FlagZulu';
