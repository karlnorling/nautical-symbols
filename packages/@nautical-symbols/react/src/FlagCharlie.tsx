// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 5\"",
  body: "<path fill=\"#00f\" d=\"M0 0h5v5H0z\"/><path fill=\"#fff\" d=\"M0 1h5v3H0z\"/><path fill=\"red\" d=\"M0 2h5v1H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "C (Charlie)";
const _description = "\"Affirmative.\" With a numeric complement: Magnetic bearing";

export const FlagCharlie = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagCharlie.displayName = 'FlagCharlie';
