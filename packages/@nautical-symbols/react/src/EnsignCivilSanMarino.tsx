// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 600\"",
  body: "<path fill=\"#5eb6e4\" d=\"M0 0h800v600H0z\"/><path fill=\"#fff\" d=\"M0 0h800v300H0z\"/>",
  height: "600",
  width: "800",
};
const _title = "Civil ensign of San Marino";
const _description = "Civil ensign of San Marino. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilSanMarino = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilSanMarino.displayName = 'EnsignCivilSanMarino';
