// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 300\"",
  body: "<path fill=\"#166c23\" d=\"M0 0h500v300H0z\"/><path fill=\"#fff\" d=\"M0 0h500v150H0z\"/>",
  height: "300",
  width: "500",
};
const _title = "Civil ensign of Saxony";
const _description = "Civil ensign of Saxony. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilSaxony = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilSaxony.displayName = 'EnsignCivilSaxony';
