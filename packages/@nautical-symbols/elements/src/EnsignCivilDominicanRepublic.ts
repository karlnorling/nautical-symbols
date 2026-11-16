// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 750 500\"",
  body: "<path fill=\"#ce1126\" d=\"M0 0h750v500H0\"/><path fill=\"#002d62\" d=\"M0 0h375v250H0m375 0h375v250H350\"/><path fill=\"#fff\" d=\"M325 0h100v500H325M0 200h750v100H0\"/>",
  height: "500",
  width: "750",
};
const _title = "Civil ensign of Dominican Republic";
const _description = "Civil ensign of Dominican Republic. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilDominicanRepublic extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-dominican-republic';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
