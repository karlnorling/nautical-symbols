// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 12\"",
  body: "<defs><pattern id=\"ensign-civil-monaco-a\" width=\"2\" height=\"4\" patternUnits=\"userSpaceOnUse\"><path fill=\"#ce1126\" d=\"m1 0 1 2-1 2-1-2z\"/></pattern></defs><path fill=\"#fff\" d=\"M0 0h18v12H0z\"/><path fill=\"url(#ensign-civil-monaco-a)\" d=\"M0 0h18v12H0z\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of Monaco";
const _description = "Civil ensign of Monaco. Flown at the stern by merchant and private vessels. Differs markedly from the national flag.";

export const EnsignCivilMonaco = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilMonaco.displayName = 'EnsignCivilMonaco';
