// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10080 5040\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<defs><clipPath id=\"jack-australia-a\"><path d=\"M0 0h6v3H0z\"/></clipPath><clipPath id=\"jack-australia-b\"><path d=\"M0 0v1.5h6V3zm6 0H3v3H0z\"/></clipPath><path id=\"jack-australia-c\" d=\"m0-360 69.421 215.845 212.038-80.301L155.99-35.603l194.985 115.71-225.881 19.651 31.105 224.59L0 160l-156.198 164.349 31.105-224.59-225.881-19.651 194.986-115.711-125.471-188.853 212.038 80.301z\"/><path id=\"jack-australia-d\" d=\"M0-210 54.86-75.508l144.862 10.614L88.765 28.842l34.67 141.052L0 93.334l-123.435 76.56 34.67-141.052-110.957-93.736L-54.86-75.508z\"/></defs><path fill=\"#012169\" d=\"M0 0h10080v5040H0z\"/><path stroke=\"#fff\" stroke-width=\".6\" d=\"m0 0 6 3m0-3L0 3\" clip-path=\"url(#jack-australia-a)\" transform=\"scale(840)\"/><path stroke=\"#e4002b\" stroke-width=\".4\" d=\"m0 0 6 3m0-3L0 3\" clip-path=\"url(#jack-australia-b)\" transform=\"scale(840)\"/><path stroke=\"#fff\" stroke-width=\"840\" d=\"M2520 0v2520M0 1260h5040\"/><path stroke=\"#e4002b\" stroke-width=\"504\" d=\"M2520 0v2520M0 1260h5040\"/><g fill=\"#fff\"><use xlink:href=\"#jack-australia-c\" transform=\"matrix(2.1 0 0 2.1 2520 3780)\"/><use xlink:href=\"#jack-australia-c\" x=\"7560\" y=\"4200\"/><use xlink:href=\"#jack-australia-c\" x=\"6300\" y=\"2205\"/><use xlink:href=\"#jack-australia-c\" x=\"7560\" y=\"840\"/><use xlink:href=\"#jack-australia-c\" x=\"8680\" y=\"1869\"/><use xlink:href=\"#jack-australia-d\" x=\"8064\" y=\"2730\"/></g>",
  height: "640",
  width: "1280",
};
const _title = "Naval jack of Australia";
const _description = "Naval jack of Australia. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export const JackAustralia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackAustralia.displayName = 'JackAustralia';
