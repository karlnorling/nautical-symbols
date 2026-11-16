// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1008 504\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#c8102e\"",
  body: "<defs><clipPath id=\"ensign-naval-new-zealand-a\"><path d=\"M0 0h65v35H0z\"/></clipPath><clipPath id=\"ensign-naval-new-zealand-b\"><path d=\"M0 0v15h65v15h-5zm0 30v5h30V0h30z\"/></clipPath><path id=\"ensign-naval-new-zealand-c\" d=\"M-21-6.823h42l-33.979 24.687L0-22.081l12.979 39.945z\"/></defs><path fill=\"#012169\" d=\"M0 0h1008v504H0z\"/><path stroke=\"#fff\" stroke-width=\"6\" d=\"m0 0 70 35M60 0 0 30\" clip-path=\"url(#ensign-naval-new-zealand-a)\" transform=\"scale(8.4)\"/><path stroke=\"#c8102e\" stroke-width=\"4\" d=\"m0 0 70 35M60 0 0 30\" clip-path=\"url(#ensign-naval-new-zealand-b)\" transform=\"scale(8.4)\"/><path stroke=\"#fff\" stroke-width=\"84\" d=\"M0 126h546M252 0v294\"/><path stroke=\"#c8102e\" stroke-width=\"50.4\" d=\"M0 126h546M252 0v294\"/><path fill=\"#fff\" d=\"M0 252h504V0h504v504H0z\"/><g stroke=\"#c8102e\"><use xlink:href=\"#ensign-naval-new-zealand-c\" stroke-width=\"7\" transform=\"matrix(1.2 0 0 1.2 756 100.8)\"/><use xlink:href=\"#ensign-naval-new-zealand-c\" stroke-width=\"6\" transform=\"matrix(1.4 0 0 1.4 756 403.2)\"/><g transform=\"rotate(-8 756 201.6)\"><use xlink:href=\"#ensign-naval-new-zealand-c\" stroke-width=\"7\" transform=\"rotate(8 -1122.307 4665.573)scale(1.2)\"/><use xlink:href=\"#ensign-naval-new-zealand-c\" stroke-width=\"8.4\" transform=\"rotate(8 -1013.107 6227.205)\"/></g></g>",
  height: "600",
  width: "1200",
};
const _title = "Naval ensign of New Zealand";
const _description = "Naval ensign of New Zealand. Flown at the stern by warships and other state vessels.";

export const EnsignNavalNewZealand = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalNewZealand.displayName = 'EnsignNavalNewZealand';
