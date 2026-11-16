// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 60\"",
  body: "<title>Flag of Guyana 1:2</title><defs><clipPath id=\"ensign-naval-guyana-a\"><path d=\"m0 0 120 30L0 60z\"/></clipPath><clipPath id=\"ensign-naval-guyana-b\"><path d=\"m0 0 60 30L0 60z\"/></clipPath></defs><path fill=\"#2a936a\" d=\"M0 0h120v60H0z\"/><path fill=\"#ffc20e\" stroke=\"#fff\" stroke-width=\"4\" d=\"m0 0 120 30L0 60\" clip-path=\"url(#ensign-naval-guyana-a)\"/><path fill=\"#be1e2d\" stroke=\"#000\" stroke-width=\"4\" d=\"m0 0 60 30L0 60\" clip-path=\"url(#ensign-naval-guyana-b)\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval ensign of Guyana";
const _description = "Naval ensign of Guyana. Flown at the stern by warships and other state vessels.";

export const EnsignNavalGuyana = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalGuyana.displayName = 'EnsignNavalGuyana';
