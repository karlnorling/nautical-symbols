// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 20\"",
  body: "<path fill=\"#d52b1e\" d=\"M0 0h30v20H0z\"/><path stroke=\"#fff\" d=\"M0 10h30M15 0v20\"/><path stroke=\"#fff\" stroke-width=\"4\" d=\"m0 0 30 20M0 20 30 0\"/><path stroke=\"#0039a6\" stroke-width=\"3\" d=\"m0 0 30 20M0 20 30 0\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of Russia";
const _description = "Naval jack of Russia. Flown at the bow of naval vessels in harbour or at anchor. A cross or saltire design.";

export const JackRussia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackRussia.displayName = 'JackRussia';
