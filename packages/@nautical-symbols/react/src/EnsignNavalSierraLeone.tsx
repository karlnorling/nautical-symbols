// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 12\"",
  body: "<path fill=\"#fff\" d=\"M0 0h18v12H0z\"/><path fill=\"#0072c6\" d=\"M0 4h9v2H0z\"/><path fill=\"#1eb53a\" d=\"M0 0h9v2H0z\"/>",
  height: "800",
  width: "1200",
};
const _title = "Naval ensign of Sierra Leone";
const _description = "Naval ensign of Sierra Leone. Flown at the stern by warships and other state vessels.";

export const EnsignNavalSierraLeone = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalSierraLeone.displayName = 'EnsignNavalSierraLeone';
