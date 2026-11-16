// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 12\"",
  body: "<title>Civil Ensign of Jamaica</title><defs><clipPath id=\"ensign-civil-jamaica-a\"><path d=\"M0 0h12v6H0Z\"/></clipPath></defs><path fill=\"#c8102e\" d=\"M0 0h24v12H0z\"/><path fill=\"#007749\" d=\"M0 0h12v6H0Z\"/><path fill=\"#2d2926\" stroke=\"#ffb81c\" d=\"M-2-1v8l16-8v8Z\" clip-path=\"url(#ensign-civil-jamaica-a)\"/>",
  height: "1200",
  width: "2400",
};
const _title = "Civil ensign of Jamaica";
const _description = "Civil ensign of Jamaica. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export class EnsignCivilJamaica extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-jamaica';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
