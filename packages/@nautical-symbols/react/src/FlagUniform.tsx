// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"",
  body: "<path fill=\"red\" d=\"M0 0h2v2H0z\"/><path fill=\"#fff\" d=\"M0 1h2V0H1v2H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "U (Uniform)";
const _description = "\"You are running into danger.\"";

export const FlagUniform = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagUniform.displayName = 'FlagUniform';
