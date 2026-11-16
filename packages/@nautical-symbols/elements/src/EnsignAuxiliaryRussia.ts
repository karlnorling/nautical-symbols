// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#fff\" d=\"M0 0h500v400H0\"/><path fill=\"#0051ba\" stroke=\"#0051ba\" stroke-width=\"45\" d=\"M459-6-9 306M0 0l459 306M0 323h473V0h427v600H0\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval auxiliary ensign of Russia";
const _description = "Naval auxiliary ensign of Russia. Flown at the stern by warships and other state vessels.";

export class EnsignAuxiliaryRussia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-auxiliary-russia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
