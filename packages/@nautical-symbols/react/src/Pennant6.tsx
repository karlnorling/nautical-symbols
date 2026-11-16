// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 540 300\"",
  body: "<path d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/><path fill=\"#fff\" d=\"M1.25 150h537.5v73.75l-537.5 75z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/>",
  height: "300",
  width: "540",
};
const _title = "Number pennant 6";
const _description = "Blazon: Per fess sable and argent";

export const Pennant6 = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
Pennant6.displayName = 'Pennant6';
