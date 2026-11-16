// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 300\"",
  body: "<path stroke=\"#0f0\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 90v206\"/><path d=\"m50 0 50 90H0\" style=\"fill:#0f0\"/><circle cx=\"50\" cy=\"200\" r=\"50\" fill=\"#0f0\"/>",
  height: "300",
  width: "100",
};
const _title = "Topmark cone sphere green";
const _description = "Topmark cone sphere green — Buoyage topmark";

export const TopmarkConeSphereGreen = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
TopmarkConeSphereGreen.displayName = 'TopmarkConeSphereGreen';
