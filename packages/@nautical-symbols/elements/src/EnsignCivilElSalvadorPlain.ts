// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 3\"",
  body: "<path fill=\"#0047ab\" d=\"M0 0h5v3H0\"/><path fill=\"#fff\" d=\"M0 1h5v1H0\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Civil ensign of El Salvador (without coat of arms)";
const _description = "Civil ensign of El Salvador (without coat of arms). Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilElSalvadorPlain extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-el-salvador-plain';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
