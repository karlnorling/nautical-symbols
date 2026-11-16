// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 9 6\"",
  body: "<path fill=\"#fff\" d=\"M0 0h9v6H0\"/><path stroke=\"#00966e\" d=\"m0 0 9 6M0 6l9-6\"/><path stroke=\"#d62612\" d=\"M4.5 0v6M0 3h9\"/>",
  height: "480",
  width: "720",
};
const _title = "Naval jack of Bulgaria";
const _description = "Naval jack of Bulgaria. Flown at the bow of naval vessels in harbour or at anchor. A cross or saltire design.";

export class JackBulgaria extends SymbolElement {
  static readonly tagName = 'nautical-jack-bulgaria';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
