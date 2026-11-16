// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path fill=\"#ce1126\" d=\"M600 0H0v300h600L400 150z\"/><svg width=\"286\" height=\"130\" viewBox=\"0 0 660 300\"><path fill=\"#00778b\" d=\"M0 0h660v300H0z\"/><path fill=\"#ffc72c\" d=\"M0 100h660v100H0z\"/><path d=\"M0 0v300l260-150z\"/></svg><clipPath id=\"jack-civil-bahamas-a\"><path d=\"M600 0H0v300h600L400 150z\"/></clipPath><path stroke=\"#fff\" stroke-width=\"40\" d=\"M300 0v300M0 150h600\" clip-path=\"url(#jack-civil-bahamas-a)\"/>",
  height: "300",
  width: "600",
};
const _title = "Civil jack of the Bahamas";
const _description = "Civil jack of the Bahamas. Flown at the bow of naval vessels in harbour or at anchor. The national flag in the canton.";

export class JackCivilBahamas extends SymbolElement {
  static readonly tagName = 'nautical-jack-civil-bahamas';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
