// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -30000 90000 60000\"",
  body: "<title>Flag of Turkey</title><path fill=\"#e30a17\" d=\"M0-30000h90000v60000H0z\"/><path fill=\"#fff\" d=\"m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042\"/>",
  height: "800",
  width: "1200",
};
const _title = "Naval jack of Turkey";
const _description = "Naval jack of Turkey. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export class JackTurkey extends SymbolElement {
  static readonly tagName = 'nautical-jack-turkey';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
