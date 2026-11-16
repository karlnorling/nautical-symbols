// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 32\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#ff0\"",
  body: "<path fill=\"#ee1c25\" d=\"M0 0h40v32H0\"/><g transform=\"translate(6 8)\"><g id=\"jack-china-b\"><path id=\"jack-china-a\" d=\"M0-4v4h2\" transform=\"rotate(18 0 -4)\"/><use xlink:href=\"#jack-china-a\" transform=\"scale(-1 1)\"/></g><g id=\"jack-china-c\"><use xlink:href=\"#jack-china-b\" transform=\"rotate(72)\"/><use xlink:href=\"#jack-china-b\" transform=\"rotate(216)\"/></g><use xlink:href=\"#jack-china-c\" transform=\"rotate(72)\"/></g><path stroke=\"#ff0\" d=\"m10.204 11.7 1.8-2.4m1.296 0 1.8 2.4m.9-1.2h4\"/>",
  height: "600",
  width: "750",
};
const _title = "Naval jack of China";
const _description = "Naval jack of China. Flown at the bow of naval vessels in harbour or at anchor. The war flag flown as the jack.";

export class JackChina extends SymbolElement {
  static readonly tagName = 'nautical-jack-china';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
