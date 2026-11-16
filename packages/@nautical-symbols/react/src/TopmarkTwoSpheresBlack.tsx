// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 300\"",
  body: "<path stroke=\"#000\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 100v196\"/><circle cx=\"50\" cy=\"50\" r=\"50\"/><circle cx=\"50\" cy=\"200\" r=\"50\"/>",
  height: "300",
  width: "100",
};
const _title = "Topmark two spheres black";
const _description = "Topmark two spheres black — Buoyage topmark";

export const TopmarkTwoSpheresBlack = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
TopmarkTwoSpheresBlack.displayName = 'TopmarkTwoSpheresBlack';
