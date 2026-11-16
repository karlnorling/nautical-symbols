// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-75 -40 240 160\"",
  body: "<path fill=\"#d1081d\" d=\"M45-40h195v160H-75V40z\"/><path fill=\"#01411c\" d=\"M-75-40H45v80h-90z\"/><path fill=\"#fff\" d=\"M-75-40v80h30v-80z\"/><circle r=\"24\" fill=\"#fff\"/><circle cx=\"-7\" cy=\"-40\" r=\"22\" fill=\"#01411c\" transform=\"rotate(-41.634 45 -40)\"/><path fill=\"#fff\" d=\"m8.751-17.959 10.11 11.373L3.997-9.844l13.94-6.1-7.692 13.129z\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of Pakistan";
const _description = "Civil ensign of Pakistan. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export class EnsignCivilPakistan extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-pakistan';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
