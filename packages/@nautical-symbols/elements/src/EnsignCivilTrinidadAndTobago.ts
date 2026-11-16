// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 9\"",
  body: "<path fill=\"#da1a35\" d=\"M0 0h18v9H0z\"/><path fill=\"#fff\" d=\"M0 0h6l12 9h-6z\"/><path d=\"M1 0h4l12 9h-4z\"/>",
  height: "400",
  width: "800",
};
const _title = "Civil ensign of Trinidad and Tobago";
const _description = "Civil ensign of Trinidad and Tobago. Flown at the stern by merchant and private vessels. The national flag in different proportions.";

export class EnsignCivilTrinidadAndTobago extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-trinidad-and-tobago';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
