// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1080 540\"",
  body: "<path fill=\"#c8102e\" d=\"M0 0h1080v540H0z\"/><path d=\"M0 0h537v267H0z\"/><path fill=\"#fff\" d=\"M0 0h537v176H0z\"/><path fill=\"#00843d\" d=\"M0 0h537v88H0z\"/><path fill=\"#c8102e\" d=\"M0 0h132v267H0z\"/><path fill=\"none\" stroke=\"#fff\" stroke-width=\"6\" d=\"M0 267h537V0\"/>",
  height: "540",
  width: "1080",
};
const _title = "Civil ensign of United Arab Emirates";
const _description = "Civil ensign of United Arab Emirates. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export class EnsignCivilUnitedArabEmirates extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-united-arab-emirates';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
