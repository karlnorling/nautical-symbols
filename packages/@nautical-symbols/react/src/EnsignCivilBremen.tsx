// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 8\"",
  body: "<path fill=\"#fff\" d=\"M0 0h12v8H0\"/><path fill=\"#d00\" d=\"M0 0h1v8h1V0h10v1H0v1h12v1H0v1h12v1H0v1h12v1H0\"/>",
  height: "400",
  width: "600",
};
const _title = "Civil ensign of Bremen";
const _description = "Civil ensign of Bremen. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilBremen = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilBremen.displayName = 'EnsignCivilBremen';
