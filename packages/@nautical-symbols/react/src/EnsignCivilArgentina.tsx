// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 500\"",
  body: "<path fill=\"#74acdf\" d=\"M0 0h800v500H0z\"/><path fill=\"#fff\" d=\"M0 166.67h800v166.67H0z\"/>",
  height: "500",
  width: "800",
};
const _title = "Civil ensign of Argentina";
const _description = "Civil ensign of Argentina. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilArgentina = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilArgentina.displayName = 'EnsignCivilArgentina';
