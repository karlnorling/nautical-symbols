// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 3\"",
  body: "<desc>Civil flag of North Rhine-Westphalia</desc><path fill=\"#fff\" d=\"M0 0h5v2H0z\"/><path fill=\"#009136\" d=\"M0 0h5v1H0z\"/><path fill=\"#e3001b\" d=\"M0 2h5v1H0z\"/>",
  height: "480",
  width: "800",
};
const _title = "Civil ensign of North Rhine-Westphalia";
const _description = "Civil ensign of North Rhine-Westphalia. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilNorthRhineWestphalia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-north-rhine-westphalia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
