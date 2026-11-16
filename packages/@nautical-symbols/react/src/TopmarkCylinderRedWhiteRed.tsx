// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"",
  body: "<path stroke=\"red\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M45 130v70\"/><path d=\"M0 0h100v130H0z\" style=\"fill:red\"/><path d=\"M0 43h100v42H0z\" style=\"fill:#fff\"/>",
  height: "200",
  width: "100",
};
const _title = "Topmark cylinder red white red";
const _description = "Topmark cylinder red white red — Buoyage topmark";

export const TopmarkCylinderRedWhiteRed = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
TopmarkCylinderRedWhiteRed.displayName = 'TopmarkCylinderRedWhiteRed';
