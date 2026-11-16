// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 300\"",
  body: "<path stroke=\"#000\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 86v210\"/><path d=\"m50 0 50 90H0m0 50h100l-50 90\" style=\"fill:#000\"/>",
  height: "300",
  width: "100",
};
const _title = "Topmark cone up down black";
const _description = "Topmark cone up down black — Buoyage topmark";

export const TopmarkConeUpDownBlack = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
TopmarkConeUpDownBlack.displayName = 'TopmarkConeUpDownBlack';
