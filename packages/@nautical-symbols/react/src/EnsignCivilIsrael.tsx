// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 120\"",
  body: "<path fill=\"#005\" d=\"M0 0h180v120H0z\"/><ellipse cx=\"45\" cy=\"60\" fill=\"#fff\" rx=\"30\" ry=\"45\"/><path fill=\"none\" stroke=\"#005\" stroke-width=\"3\" d=\"M32.121 47.358H57.88L45 83.784zM57.88 72.642H32.12L45 36.216z\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of Israel";
const _description = "Civil ensign of Israel. Flown at the stern by merchant and private vessels. Differs markedly from the national flag.";

export const EnsignCivilIsrael = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilIsrael.displayName = 'EnsignCivilIsrael';
