// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 750 500\"",
  body: "<path fill=\"#c60b1e\" d=\"M0 0h750v500H0z\"/><path fill=\"#ffc400\" d=\"M0 125h750v250H0z\"/>",
  height: "500",
  width: "750",
};
const _title = "Civil ensign of Spain";
const _description = "Civil ensign of Spain. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilSpain extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-spain';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
