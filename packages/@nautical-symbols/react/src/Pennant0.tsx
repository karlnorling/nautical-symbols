// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-1.25 -1.25 542.5 302.5\"",
  body: "<title>ICS numeral pennant 0: Or, a pale gules</title><desc>Original drawing for nautical-symbols, dedicated to the public domain (CC0 1.0).</desc><clipPath id=\"pennant-0-a\"><path d=\"m0 0 540 75v150L0 300Z\"/></clipPath><g clip-path=\"url(#pennant-0-a)\"><path fill=\"#ff0\" d=\"M0 0h540v300H0z\"/><path fill=\"red\" d=\"M180 0h180v300H180z\"/></g><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m0 0 540 75v150L0 300Z\"/>",
  height: "302.5",
  width: "542.5",
};
const _title = "Number pennant 0";
const _description = "Blazon: Or, a pale gules";

export const Pennant0 = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
Pennant0.displayName = 'Pennant0';
