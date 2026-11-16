// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 600\"",
  body: "<path fill=\"#fff\" d=\"M0 0h1000v600H0\"/><path fill=\"#2b58a3\" d=\"M0 0h1000v160H0\"/><path fill=\"#f9f400\" d=\"M0 280h1000v40H0\"/><path fill=\"#de0029\" d=\"M0 440h1000v160H0\"/>",
  height: "600",
  width: "1000",
};
const _title = "Civil ensign of Mecklenburg-Vorpommern";
const _description = "Civil ensign of Mecklenburg-Vorpommern. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilMecklenburgVorpommern extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-mecklenburg-vorpommern';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
