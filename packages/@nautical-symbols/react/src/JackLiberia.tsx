// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<desc>Star - Flag of Liberia</desc><path fill=\"#00205b\" d=\"M0 0h50v50H0z\"/><g fill=\"#fff\" transform=\"matrix(15 0 0 15 25 25)\"><g id=\"jack-liberia-b\"><path id=\"jack-liberia-a\" d=\"M0 0v1h.6z\" transform=\"rotate(18 3.157 -.5)\"/><use xlink:href=\"#jack-liberia-a\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#jack-liberia-b\" transform=\"rotate(72)\"/><use xlink:href=\"#jack-liberia-b\" transform=\"rotate(144)\"/><use xlink:href=\"#jack-liberia-b\" transform=\"rotate(216)\"/><use xlink:href=\"#jack-liberia-b\" transform=\"rotate(288)\"/></g>",
  height: "50",
  width: "50",
};
const _title = "Naval jack of Liberia";
const _description = "Naval jack of Liberia. Flown at the bow of naval vessels in harbour or at anchor. The canton of the national ensign.";

export const JackLiberia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackLiberia.displayName = 'JackLiberia';
