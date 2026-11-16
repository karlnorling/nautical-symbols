// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 300\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path fill=\"#0033a0\" d=\"M0 0h300v300H0\"/><g fill=\"#fff\" transform=\"translate(150 150)\"><g id=\"jack-chile-b\"><path id=\"jack-chile-a\" d=\"M0-75V0h37.5\" transform=\"rotate(18 0 -75)\"/><use xlink:href=\"#jack-chile-a\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#jack-chile-b\" transform=\"rotate(72)\"/><use xlink:href=\"#jack-chile-b\" transform=\"rotate(144)\"/><use xlink:href=\"#jack-chile-b\" transform=\"rotate(216)\"/><use xlink:href=\"#jack-chile-b\" transform=\"rotate(288)\"/></g>",
  height: "300",
  width: "300",
};
const _title = "Naval jack of Chile";
const _description = "Naval jack of Chile. Flown at the bow of naval vessels in harbour or at anchor. The canton of the national ensign.";

export class JackChile extends SymbolElement {
  static readonly tagName = 'nautical-jack-chile';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
