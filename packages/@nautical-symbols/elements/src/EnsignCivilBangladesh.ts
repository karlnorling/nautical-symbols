// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 6\"",
  body: "<path fill=\"#da291c\" d=\"M0 0h12v6H0\"/><path fill=\"#006747\" d=\"M0 0h6v3H0\"/><circle cx=\"2.7\" cy=\"1.5\" r=\"1\" fill=\"#da291c\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of Bangladesh";
const _description = "Civil ensign of Bangladesh. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export class EnsignCivilBangladesh extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-bangladesh';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
