// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path fill=\"#fff\" d=\"M0 0h600v600H0z\"/><path fill=\"#d52b1e\" d=\"M0 0h75l525 525v75h-75L0 75z\"/><path fill=\"#0038a8\" d=\"M600 0h-75L0 525v75h75L600 75z\"/><circle cx=\"300\" cy=\"300\" r=\"75\" fill=\"#fff\"/><g fill=\"#f9d90f\" transform=\"translate(300 300)\"><g id=\"jack-paraguay-b\"><path id=\"jack-paraguay-a\" d=\"M0-62.5V0h32\" transform=\"rotate(18 0 -62.5)\"/><use xlink:href=\"#jack-paraguay-a\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#jack-paraguay-b\" transform=\"rotate(72)\"/><use xlink:href=\"#jack-paraguay-b\" transform=\"rotate(144)\"/><use xlink:href=\"#jack-paraguay-b\" transform=\"rotate(216)\"/><use xlink:href=\"#jack-paraguay-b\" transform=\"rotate(288)\"/></g>",
  height: "600",
  width: "600",
};
const _title = "Naval jack of Paraguay";
const _description = "Naval jack of Paraguay. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export class JackParaguay extends SymbolElement {
  static readonly tagName = 'nautical-jack-paraguay';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
