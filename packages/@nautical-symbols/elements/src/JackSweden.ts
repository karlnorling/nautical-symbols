// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path fill=\"#005293\" d=\"M0 0h600L360 120v60l240 120H0z\"/><path fill=\"#fecb00\" d=\"M150 0h60v300h-60z\"/><path fill=\"#fecb00\" d=\"M0 120h360l240 30-240 30H0z\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval jack of Sweden";
const _description = "Naval jack of Sweden. Flown at the bow of naval vessels in harbour or at anchor. The naval ensign flown as the jack.";

export class JackSweden extends SymbolElement {
  static readonly tagName = 'nautical-jack-sweden';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
