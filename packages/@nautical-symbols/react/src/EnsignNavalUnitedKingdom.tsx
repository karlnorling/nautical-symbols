// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 720 360\"",
  body: "<clipPath id=\"ensign-naval-united-kingdom-a\"><path d=\"M0 0h360v180H0z\"/></clipPath><clipPath id=\"ensign-naval-united-kingdom-b\"><path d=\"M0 0v78h360v78h-24zm336 0H168v180H0v-24z\"/></clipPath><path fill=\"#fff\" d=\"M0 0h720v360H0z\"/><path fill=\"#012169\" d=\"M0 0h360v180H0z\"/><path stroke=\"#fff\" stroke-width=\"31.2\" d=\"m0 0 336 156M0 156 336 0\" clip-path=\"url(#ensign-naval-united-kingdom-a)\"/><path stroke=\"#c8102e\" stroke-width=\"20.8\" d=\"m0 0 336 156M0 156 336 0\" clip-path=\"url(#ensign-naval-united-kingdom-b)\"/><path stroke=\"#fff\" stroke-width=\"52\" d=\"M0 78h360M168 0v180\"/><path stroke=\"#c8102e\" stroke-width=\"31.2\" d=\"M0 78h360M168 0v180\"/><path stroke=\"#c8102e\" stroke-width=\"48\" d=\"M0 180h720M360 0v360\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval ensign of United Kingdom";
const _description = "Naval ensign of United Kingdom. Flown at the stern by warships and other state vessels.";

export const EnsignNavalUnitedKingdom = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalUnitedKingdom.displayName = 'EnsignNavalUnitedKingdom';
