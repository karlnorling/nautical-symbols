// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 750 500\" fill=\"#fff\"",
  body: "<path d=\"M0 0h750v500H0\"/><path fill=\"#cf142b\" d=\"M45 45h660v410H45\"/><path d=\"M442 89 308 411l67-67 67 67L308 89l67 67zm-228 94 322 134-67-67 67-67-322 134 67-67z\"/>",
  height: "500",
  width: "750",
};
const _title = "Civil ensign of Malta";
const _description = "Civil ensign of Malta. Flown at the stern by merchant and private vessels. Differs markedly from the national flag.";

export class EnsignCivilMalta extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-malta';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
