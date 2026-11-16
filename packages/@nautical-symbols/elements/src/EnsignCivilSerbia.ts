// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#c6363c\" d=\"M0 0h900v600H0z\"/><path fill=\"#0c4076\" d=\"M0 200h900v400H0z\"/><path fill=\"#fff\" d=\"M0 400h900v200H0z\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of Serbia";
const _description = "Civil ensign of Serbia. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilSerbia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-serbia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
