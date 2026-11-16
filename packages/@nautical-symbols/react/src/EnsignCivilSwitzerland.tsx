// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 32\"",
  body: "<path fill=\"red\" d=\"M0 0h48v32H0z\"/><path fill=\"#fff\" d=\"M14 13h20v6H14z\"/><path fill=\"#fff\" d=\"M21 6h6v20h-6z\"/>",
  height: "1000",
  width: "1500",
};
const _title = "Civil ensign of Switzerland";
const _description = "Civil ensign of Switzerland. Flown at the stern by merchant and private vessels. The national flag in different proportions.";

export const EnsignCivilSwitzerland = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilSwitzerland.displayName = 'EnsignCivilSwitzerland';
