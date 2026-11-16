// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 3\"",
  body: "<title>Flag of the Bahamas</title><path fill=\"#00778b\" d=\"M0 0h6v3H0z\"/><path fill=\"#ffc72c\" d=\"M1 1h5v1H1z\"/><path d=\"M2.598 1.5 0 3V0z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval jack of the Bahamas";
const _description = "Naval jack of the Bahamas. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export class JackBahamas extends SymbolElement {
  static readonly tagName = 'nautical-jack-bahamas';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
