// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 525 350\"",
  body: "<defs><clipPath id=\"ensign-naval-south-africa-c\"><path d=\"M0 0h50.16v30H0z\"/></clipPath><clipPath id=\"ensign-naval-south-africa-a\"><path d=\"M0 0h51v31H0z\"/></clipPath><clipPath id=\"ensign-naval-south-africa-b\"><path d=\"m0 0 22.5 15L0 30\"/></clipPath></defs><path fill=\"#fff\" d=\"M0 0h525v350H0z\"/><path stroke=\"#007749\" stroke-width=\"50\" d=\"M262.5 350V0M525 175H0Z\"/><path fill=\"#e03c31\" d=\"M0 0h228.127v140.625H0z\"/><path fill=\"#001489\" d=\"M0 93.75h228.127v46.875H0z\"/><path fill=\"none\" stroke=\"#fff\" stroke-width=\"10\" d=\"m0 0 24.333 15L0 30m24.333-15h25.334\" clip-path=\"url(#ensign-naval-south-africa-a)\" transform=\"scale(4.6875)\"/><path stroke=\"#ffb81c\" stroke-width=\"10\" d=\"m0 0 24.333 15L0 30\" clip-path=\"url(#ensign-naval-south-africa-b)\" transform=\"scale(4.6875)\"/><path fill=\"none\" stroke=\"#007749\" stroke-width=\"6\" d=\"m0 0 24.333 15L0 30m24.333-15h24.334\" clip-path=\"url(#ensign-naval-south-africa-c)\" transform=\"scale(4.6875)\"/>",
  height: "350",
  width: "525",
};
const _title = "Naval ensign of South Africa";
const _description = "Naval ensign of South Africa. Flown at the stern by warships and other state vessels.";

export class EnsignNavalSouthAfrica extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-south-africa';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
