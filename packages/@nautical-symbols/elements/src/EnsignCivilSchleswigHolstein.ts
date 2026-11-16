// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 3\"",
  body: "<path fill=\"#fff\" d=\"M0 0h5v3H0z\"/><path fill=\"#0039ad\" d=\"M0 0h5v1H0z\"/><path fill=\"#d61810\" d=\"M0 2h5v1H0z\"/>",
  height: "600",
  width: "1000",
};
const _title = "Civil ensign of Schleswig-Holstein";
const _description = "Civil ensign of Schleswig-Holstein. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilSchleswigHolstein extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-schleswig-holstein';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
