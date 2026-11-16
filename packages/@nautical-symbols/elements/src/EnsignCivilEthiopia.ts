// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 450\"",
  body: "<path fill=\"#da121a\" d=\"M0 0h900v450H0\"/><path fill=\"#fcdd09\" d=\"M0 0h900v300H0\"/><path fill=\"#078930\" d=\"M0 0h900v150H0\"/>",
  height: "450",
  width: "900",
};
const _title = "Civil ensign of Ethiopia";
const _description = "Civil ensign of Ethiopia. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilEthiopia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-ethiopia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
