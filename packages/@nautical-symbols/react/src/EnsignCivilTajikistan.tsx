// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1400 700\"",
  body: "<path fill=\"#060\" d=\"M0 0h1400v700H0z\"/><path fill=\"#fff\" d=\"M0 0h1400v500H0z\"/><path fill=\"#c00\" d=\"M0 0h1400v200H0z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of Tajikistan";
const _description = "Civil ensign of Tajikistan. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilTajikistan = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilTajikistan.displayName = 'EnsignCivilTajikistan';
