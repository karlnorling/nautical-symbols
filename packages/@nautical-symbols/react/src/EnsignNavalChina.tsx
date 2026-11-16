// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 32\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#ff0\"",
  body: "<path fill=\"#000064\" d=\"M0 0h40v32H0\"/><path fill=\"#ee1c25\" d=\"M0 0h40v20H0\"/><path fill=\"#fdfbfc\" d=\"M0 22.8h40v1.8H0m0 2.8h40v1.8H0\"/><g transform=\"translate(6 8)\"><g id=\"ensign-naval-china-b\"><path id=\"ensign-naval-china-a\" d=\"M0-4v4h2\" transform=\"rotate(18 0 -4)\"/><use xlink:href=\"#ensign-naval-china-a\" transform=\"scale(-1 1)\"/></g><g id=\"ensign-naval-china-c\"><use xlink:href=\"#ensign-naval-china-b\" transform=\"rotate(72)\"/><use xlink:href=\"#ensign-naval-china-b\" transform=\"rotate(216)\"/></g><use xlink:href=\"#ensign-naval-china-c\" transform=\"rotate(72)\"/></g><path stroke=\"#ff0\" d=\"m10.204 11.7 1.8-2.4m1.296 0 1.8 2.4m.9-1.2h4\"/>",
  height: "600",
  width: "750",
};
const _title = "Naval ensign of China";
const _description = "Naval ensign of China. Flown at the stern by warships and other state vessels.";

export const EnsignNavalChina = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignNavalChina.displayName = 'EnsignNavalChina';
