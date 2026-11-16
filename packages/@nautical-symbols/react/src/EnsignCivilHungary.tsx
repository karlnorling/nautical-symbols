// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 9 6\"",
  body: "<path fill=\"#436f4d\" d=\"M0 0h9v6H0z\"/><path fill=\"#fff\" d=\"M0 0h9v4H0z\"/><path fill=\"#cd2a3e\" d=\"M0 0h9v2H0z\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of Hungary";
const _description = "Civil ensign of Hungary. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilHungary = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilHungary.displayName = 'EnsignCivilHungary';
