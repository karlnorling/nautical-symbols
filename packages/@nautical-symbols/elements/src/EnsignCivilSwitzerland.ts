// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 32\"",
  body: "<path fill=\"red\" d=\"M0 0h48v32H0z\"/><path fill=\"#fff\" d=\"M14 13h20v6H14z\"/><path fill=\"#fff\" d=\"M21 6h6v20h-6z\"/>",
  height: "1000",
  width: "1500",
};
const _title = "Civil ensign of Switzerland";
const _description = "Civil ensign of Switzerland. Flown at the stern by merchant and private vessels. The national flag in different proportions.";

export class EnsignCivilSwitzerland extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-switzerland';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
