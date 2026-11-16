// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 813.594 542.396\" xml:space=\"preserve\"",
  body: "<path d=\"M0 0h813.594v542.396H0z\" style=\"fill:#005ab9;stroke-width:0\"/><path fill=\"#fff\" d=\"M0 0h406.797v271.198H0z\" style=\"stroke-width:4.51997\"/><path d=\"M176.279 135.599v135.599h54.24V0h-27.12v135.599z\" style=\"fill:#0038a8;stroke-width:.338997\"/><path d=\"M203.399 108.48v27.12H.001v27.12h406.797v-54.24z\" style=\"fill:#0038a8;stroke-width:.338997\"/><path stroke=\"#fff\" stroke-width=\"40.68\" d=\"M203.399 0v271.198M.001 135.599h406.797\" style=\"fill:#0038a8\"/><path stroke=\"#005bbb\" stroke-width=\"27.12\" d=\"M203.399 0v271.198M.001 135.599h406.797\" style=\"fill:#0038a8;stroke:#0038a8\"/><path fill=\"#ffd500\" d=\"M0 0h183.059v115.259H0z\" style=\"fill:#f9dd16;stroke-width:4.51997\"/><path fill=\"#005bbb\" d=\"M0 0h183.059v57.63H0z\" style=\"fill:#0038a8;stroke-width:4.51997\"/>",
  height: "2050",
  width: "3075",
};
const _title = "Naval auxiliary ensign of Ukraine";
const _description = "Naval auxiliary ensign of Ukraine. Flown at the stern by warships and other state vessels.";

export class EnsignAuxiliaryUkraine extends SymbolElement {
  static readonly tagName = 'nautical-ensign-auxiliary-ukraine';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
