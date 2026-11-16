// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 20\"",
  body: "<path fill=\"#da251d\" d=\"M0 0h30v20H0z\"/><path fill=\"#ff0\" d=\"m15 4-3.53 10.85 9.24-6.7H9.29l9.24 6.7z\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of Vietnam";
const _description = "Naval jack of Vietnam. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export class JackVietnam extends SymbolElement {
  static readonly tagName = 'nautical-jack-vietnam';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
