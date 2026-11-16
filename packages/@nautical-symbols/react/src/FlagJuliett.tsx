// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#00f\" d=\"M0 0h600v600H0z\"/><path fill=\"#fff\" d=\"M0 200h600v200H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "J (Juliett)";
const _description = "\"I am on fire and have dangerous cargo on board: keep well clear of me.\" or \"I am leaking dangerous cargo.\"";

export const FlagJuliett = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagJuliett.displayName = 'FlagJuliett';
