// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path fill=\"#005293\" d=\"M0 0h600L360 120v60l240 120H0z\"/><path fill=\"#fecb00\" d=\"M150 0h60v300h-60z\"/><path fill=\"#fecb00\" d=\"M0 120h360l240 30-240 30H0z\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Sweden";
const _description = "Naval ensign of Sweden. Flown at the stern by warships and other state vessels.";

export const EnsignNavalSweden = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalSweden.displayName = 'EnsignNavalSweden';
