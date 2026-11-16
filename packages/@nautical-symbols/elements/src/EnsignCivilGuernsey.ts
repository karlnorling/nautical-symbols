// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 60\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<clipPath id=\"ensign-civil-guernsey-a\"><path d=\"M0 0h60v30H0z\"/></clipPath><path fill=\"#cf142b\" d=\"M0 0h120v60H0z\"/><g clip-path=\"url(#ensign-civil-guernsey-a)\"><path fill=\"#00247d\" d=\"M0 0h60v30H0z\"/><path stroke=\"#fff\" stroke-width=\"6\" d=\"m0 0 60 30M0 30 60 0\"/><path stroke=\"#cf142b\" stroke-width=\"4\" d=\"m0 0 60 30M0 30 60 0\"/><path fill=\"#fff\" d=\"M0 0h5l30 15L65 0h-5L30 15M-5 30l30-15 30 15h5L30 15 0 30\"/><path stroke=\"#fff\" stroke-width=\"10\" d=\"M0 15h60M30 0v30\"/><path stroke=\"#cf142b\" stroke-width=\"6\" d=\"M0 15h60M30 0v30\"/></g><path id=\"ensign-civil-guernsey-b\" fill=\"#f9dd16\" d=\"M86 12h8l-2 2v32l2 2h-8l2-2V14z\"/><use xlink:href=\"#ensign-civil-guernsey-b\" transform=\"rotate(90 90 30)\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of Guernsey";
const _description = "Civil ensign of Guernsey. Flown at the stern by merchant and private vessels. A British Red Ensign defaced with the badge of the territory.";

export class EnsignCivilGuernsey extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-guernsey';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
