// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 450\"",
  body: "<path fill=\"#da121a\" d=\"M0 0h900v450H0\"/><path fill=\"#fcdd09\" d=\"M0 0h900v300H0\"/><path fill=\"#078930\" d=\"M0 0h900v150H0\"/>",
  height: "450",
  width: "900",
};
const _title = "Civil ensign of Ethiopia";
const _description = "Civil ensign of Ethiopia. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilEthiopia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilEthiopia.displayName = 'EnsignCivilEthiopia';
