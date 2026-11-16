// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\"",
  body: "<path fill=\"#003f87\" d=\"M0 0h800v800H0z\"/><path fill=\"#fff\" d=\"M335 0h130v800H335z\"/><path fill=\"#fff\" d=\"M0 335h800v130H0z\"/>",
  height: "800",
  width: "800",
};
const _title = "Naval jack of Greece";
const _description = "Naval jack of Greece. Flown at the bow of naval vessels in harbour or at anchor. The canton of the national ensign.";

export class JackGreece extends SymbolElement {
  static readonly tagName = 'nautical-jack-greece';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
