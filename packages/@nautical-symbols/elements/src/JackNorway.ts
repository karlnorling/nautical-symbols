// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"",
  body: "<path fill=\"#ba0c2f\" d=\"M0 0h16v16H0z\"/><path stroke=\"#fff\" stroke-width=\"4\" d=\"M0 8h16M8 0v16\"/><path stroke=\"#00205b\" stroke-width=\"2\" d=\"M0 8h16M8 0v16\"/>",
  height: "800",
  width: "800",
};
const _title = "Naval jack of Norway";
const _description = "Naval jack of Norway. Flown at the bow of naval vessels in harbour or at anchor. A square version of the national flag.";

export class JackNorway extends SymbolElement {
  static readonly tagName = 'nautical-jack-norway';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
