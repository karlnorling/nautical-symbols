// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 6\"",
  body: "<desc>Civil flag of Hesse</desc><path fill=\"#e10000\" d=\"M0 0h10v3H0z\"/><path fill=\"#fff\" d=\"M0 3h10v3H0z\"/>",
  height: "600",
  width: "1000",
};
const _title = "Civil ensign of Hesse";
const _description = "Civil ensign of Hesse. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilHesse = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilHesse.displayName = 'EnsignCivilHesse';
