// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 6\"",
  body: "<path fill=\"#001489\" d=\"M0 0h10v6H0z\"/><path fill=\"#fff\" d=\"M0 1h10v4H0z\"/><path fill=\"#da291c\" d=\"M0 2h10v2H0z\"/>",
  height: "600",
  width: "1000",
};
const _title = "Civil ensign of Costa Rica";
const _description = "Civil ensign of Costa Rica. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilCostaRica extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-costa-rica';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
