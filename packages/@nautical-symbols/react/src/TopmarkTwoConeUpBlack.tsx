// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 300\"",
  body: "<path stroke=\"#000\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 90v206\"/><path d=\"m50 0 50 90H0m50 50 50 90H0\" style=\"fill:#000\"/>",
  height: "300",
  width: "100",
};
const _title = "Topmark two cone up black";
const _description = "Topmark two cone up black — Buoyage topmark";

export const TopmarkTwoConeUpBlack = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
TopmarkTwoConeUpBlack.displayName = 'TopmarkTwoConeUpBlack';
