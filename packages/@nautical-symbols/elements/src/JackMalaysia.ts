// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 13440 6720\" fill=\"none\"",
  body: "<title>Flag of Malaysia</title><path fill=\"#fff\" d=\"M0 0h13440v6720H0z\"/><path stroke=\"#c00\" stroke-width=\"480\" d=\"M480 240h12960m0 960H480m0 960h12960m0 960H480\"/><path fill=\"#006\" d=\"M0 0h6720v4080H0z\"/><path stroke=\"#c00\" stroke-width=\"480\" d=\"M0 4080h13440m0 960H0m0 960h13440\"/><path fill=\"#fc0\" d=\"m4200 720 107 732 414-613-222 706 639-373-506 540 738-59-690 267 690 267-738-59 506 540-639-373 222 706-414-613-107 732-107-732-414 613 222-706-639 373 506-540-738 59 690-267-690-267 738 59-506-540 639 373-222-706 414 613zm-600 30a1280 1280 0 1 0 0 2340 1440 1440 0 1 1 0-2340\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval jack of Malaysia";
const _description = "Naval jack of Malaysia. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export class JackMalaysia extends SymbolElement {
  static readonly tagName = 'nautical-jack-malaysia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
