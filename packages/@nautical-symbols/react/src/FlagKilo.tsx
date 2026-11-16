// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h1v2H0z\"/><path fill=\"#00f\" d=\"M1 0h1v2H1z\"/>",
  height: "600",
  width: "600",
};
const _title = "K (Kilo)";
const _description = "\"I wish to communicate with you.\" With a numeric complement: \"I wish to communicate with you by...\": 1) Semaphore signaling by hand-flags or arms; 2) Loud hailer (megaphone); 3) Morse signaling lamp; 4) Sound signals.";

export const FlagKilo = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagKilo.displayName = 'FlagKilo';
