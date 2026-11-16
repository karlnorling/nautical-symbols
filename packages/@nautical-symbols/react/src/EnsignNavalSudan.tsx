// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 12\"",
  body: "<path fill=\"#fff\" d=\"M0 0h24v12H0z\"/><path fill=\"#d21034\" d=\"M0 0h12v2H0z\"/><path d=\"M0 4h12v2H0z\"/><path fill=\"#007229\" d=\"m0 0 4 3-4 3z\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Sudan";
const _description = "Naval ensign of Sudan. Flown at the stern by warships and other state vessels.";

export const EnsignNavalSudan = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalSudan.displayName = 'EnsignNavalSudan';
