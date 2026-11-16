// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 8\"",
  body: "<path fill=\"#de0000\" d=\"M0 0h16v8H0z\"/><path fill=\"#093\" d=\"M0 3h16v2H0z\"/>",
  height: "700",
  width: "1400",
};
const _title = "Civil ensign of Transnistria";
const _description = "Civil ensign of Transnistria. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilTransnistria = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilTransnistria.displayName = 'EnsignCivilTransnistria';
