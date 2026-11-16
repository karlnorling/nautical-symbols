// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 960 600\"",
  body: "<path fill=\"#4997d0\" d=\"M0 0h960v600H0z\"/><path fill=\"#fff\" d=\"M320 0h320v600H320z\"/>",
  height: "600",
  width: "960",
};
const _title = "Civil ensign of Guatemala";
const _description = "Civil ensign of Guatemala. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilGuatemala = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilGuatemala.displayName = 'EnsignCivilGuatemala';
