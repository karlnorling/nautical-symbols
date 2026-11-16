// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 20\"",
  body: "<path fill=\"#fff\" d=\"M0 0h30v20H0z\"/><path stroke=\"#0032a0\" stroke-width=\"3\" d=\"m0 0 30 20M0 20 30 0\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval ensign of Russia";
const _description = "Naval ensign of Russia. Flown at the stern by warships and other state vessels.";

export const EnsignNavalRussia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalRussia.displayName = 'EnsignNavalRussia';
