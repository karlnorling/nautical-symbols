// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 6\"",
  body: "<clipPath id=\"ensign-government-united-kingdom-a\"><path d=\"M0 0h12v6H0z\"/></clipPath><clipPath id=\"ensign-government-united-kingdom-b\"><path d=\"M0 0v1.5h7v2zm0 3v.5h3V0h3z\"/></clipPath><path fill=\"#012169\" d=\"M0 0h12v6H0z\"/><path stroke=\"#fff\" stroke-width=\".6\" d=\"m0 0 6 3m0-3L0 3\" clip-path=\"url(#ensign-government-united-kingdom-a)\"/><path stroke=\"#c8102e\" stroke-width=\".4\" d=\"m0 0 6 3m0-3L0 3\" clip-path=\"url(#ensign-government-united-kingdom-b)\"/><path stroke=\"#fff\" d=\"M0 1.5h7M3 0v3.5\"/><path stroke=\"#c8102e\" stroke-width=\".6\" d=\"M0 1.5h7M3 0v3.5\"/><path fill=\"#012169\" d=\"M0 3h6V0h6v6H0z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Government ensign of United Kingdom";
const _description = "Government ensign of United Kingdom. Flown at the stern by merchant and private vessels. A blue ensign for government or reserve vessels.";

export const EnsignGovernmentUnitedKingdom = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignGovernmentUnitedKingdom.displayName = 'EnsignGovernmentUnitedKingdom';
