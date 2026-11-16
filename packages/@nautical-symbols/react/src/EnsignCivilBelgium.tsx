// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#ef3340\" d=\"M0 0h900v600H0z\"/><path fill=\"#fdda25\" d=\"M0 0h600v600H0z\"/><path d=\"M0 0h300v600H0z\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of Belgium";
const _description = "Civil ensign of Belgium. Flown at the stern by merchant and private vessels. The national flag in different proportions.";

export const EnsignCivilBelgium = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilBelgium.displayName = 'EnsignCivilBelgium';
