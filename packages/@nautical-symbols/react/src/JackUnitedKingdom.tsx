// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 30\"",
  body: "<clipPath id=\"jack-united-kingdom-a\"><path d=\"M25 15h25v15zv15H0zH0V0zV0h25z\"/></clipPath><path fill=\"#012169\" d=\"M0 0v30h50V0z\"/><path stroke=\"#fff\" stroke-width=\"6\" d=\"m0 0 50 30m0-30L0 30\"/><path stroke=\"#c8102e\" stroke-width=\"4\" d=\"m0 0 50 30m0-30L0 30\" clip-path=\"url(#jack-united-kingdom-a)\"/><path fill=\"#c8102e\" stroke=\"#fff\" stroke-width=\"2\" d=\"M-1 11h22V-1h8v12h22v8H29v12h-8V19H-1z\"/>",
  height: "600",
  width: "1000",
};
const _title = "Naval jack of the United Kingdom";
const _description = "Naval jack of the United Kingdom. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export const JackUnitedKingdom = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackUnitedKingdom.displayName = 'JackUnitedKingdom';
