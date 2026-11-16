// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 6\"",
  body: "<path fill=\"#ce1126\" d=\"M0 0h6v6H0z\"/><path fill=\"#f9d616\" d=\"M1 1h4v4H1z\"/><path fill=\"#007a3d\" d=\"M2 2h2v2H2z\"/>",
  height: "600",
  width: "600",
};
const _title = "Naval jack of Bolivia";
const _description = "Naval jack of Bolivia. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export class JackBolivia extends SymbolElement {
  static readonly tagName = 'nautical-jack-bolivia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
