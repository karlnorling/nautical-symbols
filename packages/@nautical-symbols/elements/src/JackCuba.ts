// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 400\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path fill=\"#cf142b\" d=\"M0 0h300v200H0z\"/><path fill=\"#fff\" d=\"M300 0h300v200H300z\"/><path fill=\"#002a8f\" d=\"M0 200h600v200H0z\"/><g fill=\"#fff\" transform=\"translate(150 100)\"><g id=\"jack-cuba-b\"><path id=\"jack-cuba-a\" d=\"M0-60V0h30\" transform=\"rotate(18 0 -60)\"/><use xlink:href=\"#jack-cuba-a\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#jack-cuba-b\" transform=\"rotate(72)\"/><use xlink:href=\"#jack-cuba-b\" transform=\"rotate(144)\"/><use xlink:href=\"#jack-cuba-b\" transform=\"rotate(216)\"/><use xlink:href=\"#jack-cuba-b\" transform=\"rotate(288)\"/></g>",
  height: "400",
  width: "600",
};
const _title = "Naval jack of Cuba";
const _description = "Naval jack of Cuba. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export class JackCuba extends SymbolElement {
  static readonly tagName = 'nautical-jack-cuba';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
