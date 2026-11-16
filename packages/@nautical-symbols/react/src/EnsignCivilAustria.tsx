// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#c8102e\" d=\"M0 0h900v600H0z\"/><path fill=\"#fff\" d=\"M0 200h900v200H0z\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of Austria";
const _description = "Civil ensign of Austria. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilAustria = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilAustria.displayName = 'EnsignCivilAustria';
