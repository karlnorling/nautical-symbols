// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90 60\"",
  body: "<path fill=\"#fff\" d=\"M0 0h90v60H0z\"/><path d=\"M520 400v400h160V0h-80v400z\" style=\"fill:#005bbb\" transform=\"scale(.075)\"/><path d=\"M600 320v80H0v80h1200V320z\" style=\"fill:#005bbb\" transform=\"scale(.075)\"/><path stroke=\"#fff\" stroke-width=\"9\" d=\"M45 0v60M0 30h90\"/><path stroke=\"#005bbb\" stroke-width=\"6\" d=\"M45 0v60M0 30h90\"/><path fill=\"#ffd500\" d=\"M0 0h40.5v25.5H0z\"/><path fill=\"#005bbb\" d=\"M0 0h40.5v12.75H0z\"/>",
  height: "800",
  width: "1200",
};
const _title = "Naval ensign of Ukraine";
const _description = "Naval ensign of Ukraine. Flown at the stern by warships and other state vessels.";

export class EnsignNavalUkraine extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-ukraine';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
