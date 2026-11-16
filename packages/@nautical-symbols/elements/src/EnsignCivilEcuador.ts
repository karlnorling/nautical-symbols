// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 400\"",
  body: "<path fill=\"#fd0\" d=\"M0 0h600v400H0z\"/><path fill=\"#034ea2\" d=\"M0 200h600v100H0z\"/><path fill=\"#ed1c24\" d=\"M0 300h600v100H0z\"/>",
  height: "400",
  width: "600",
};
const _title = "Civil ensign of Ecuador";
const _description = "Civil ensign of Ecuador. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilEcuador extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-ecuador';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
