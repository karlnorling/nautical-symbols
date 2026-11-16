// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1100 750\"",
  body: "<path fill=\"#007934\" d=\"M0 0h1100v750H0z\"/><path fill=\"#f9e300\" d=\"M0 0h1100v500H0z\"/><path fill=\"#d52b1e\" d=\"M0 0h1100v250H0z\"/>",
  height: "750",
  width: "1100",
};
const _title = "Civil ensign of Bolivia";
const _description = "Civil ensign of Bolivia. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilBolivia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilBolivia.displayName = 'EnsignCivilBolivia';
