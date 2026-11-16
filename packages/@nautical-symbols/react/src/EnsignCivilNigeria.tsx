// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 6\"",
  body: "<path fill=\"#d1081d\" d=\"M0 0h12v6H0z\"/><path fill=\"#008751\" d=\"M0 0h6v3H0z\"/><path fill=\"#fff\" d=\"M2 0h2v3H2z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of Nigeria";
const _description = "Civil ensign of Nigeria. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export const EnsignCivilNigeria = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilNigeria.displayName = 'EnsignCivilNigeria';
