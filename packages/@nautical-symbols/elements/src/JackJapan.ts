// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#fff\" d=\"M0 0h900v600H0z\"/><circle cx=\"450\" cy=\"300\" r=\"180\" fill=\"#bc002d\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of Japan";
const _description = "Naval jack of Japan. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export class JackJapan extends SymbolElement {
  static readonly tagName = 'nautical-jack-japan';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
