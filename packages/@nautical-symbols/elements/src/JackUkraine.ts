// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"",
  body: "<path fill=\"#0057b7\" d=\"M0 0h1200v800H0z\"/><path fill=\"gold\" d=\"M0 400h1200v400H0z\"/>",
  height: "800",
  width: "1200",
};
const _title = "Naval jack of Ukraine";
const _description = "Naval jack of Ukraine. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export class JackUkraine extends SymbolElement {
  static readonly tagName = 'nautical-jack-ukraine';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
