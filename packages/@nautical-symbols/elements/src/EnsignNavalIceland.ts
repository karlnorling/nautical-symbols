// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 18\"",
  body: "<defs><clipPath id=\"ensign-naval-iceland-b\"><use href=\"#ensign-naval-iceland-a\"/></clipPath></defs><g clip-path=\"url(#ensign-naval-iceland-b)\"><path id=\"ensign-naval-iceland-a\" fill=\"#02529c\" d=\"M0 0h32L20 8v2l12 8H0z\"/><path stroke=\"#fff\" stroke-width=\"4\" d=\"M0 9h25M9 0v18\"/><path stroke=\"#dc1e35\" stroke-width=\"2\" d=\"M0 9h25M9 0v18\"/></g>",
  height: "720",
  width: "1280",
};
const _title = "Naval ensign of Iceland";
const _description = "Naval ensign of Iceland. Flown at the stern by warships and other state vessels.";

export class EnsignNavalIceland extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-iceland';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
