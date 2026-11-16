// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 750 500\"",
  body: "<path fill=\"#c60b1e\" d=\"M0 0h750v500H0z\"/><path fill=\"#ffc400\" d=\"M0 125h750v250H0z\"/>",
  height: "500",
  width: "750",
};
const _title = "Civil ensign of Spain";
const _description = "Civil ensign of Spain. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilSpain = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilSpain.displayName = 'EnsignCivilSpain';
