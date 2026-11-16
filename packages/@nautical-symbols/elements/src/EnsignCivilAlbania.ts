// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 980 700\"",
  body: "<path fill=\"red\" d=\"M980 0H0v700h980z\"/><path d=\"M0 233.333h980v233.333H0z\"/>",
  height: "700",
  width: "980",
};
const _title = "Civil ensign of Albania";
const _description = "Civil ensign of Albania. Flown at the stern by merchant and private vessels. Differs markedly from the national flag.";

export class EnsignCivilAlbania extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-albania';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
