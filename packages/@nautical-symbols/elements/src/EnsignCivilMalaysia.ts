// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2240 1120.188\"",
  body: "<path fill=\"#fff\" d=\"M0 .188h2240v1120H0z\"/><path stroke=\"#c00\" stroke-width=\"38.837\" d=\"M0 19.418h2240m0 76.923H0m0 76.924h2240m0 76.923H0m0 76.923h2240m0 76.923H0m0 76.923h2240\"/><path fill=\"#006\" d=\"M1098.04.188v538.461H0v581.539h2240V.188z\"/><path fill=\"#c00\" d=\"M1120 .188v560H0v560h2240V.188z\"/><path fill=\"#006\" d=\"M0 .188h549.02V307.88H0z\"/><path fill=\"#fc0\" d=\"m342.998 57.88 8.574 58.654 33.173-49.119-17.789 56.57 51.202-29.887-40.545 43.27 59.135-4.728-55.289 21.394 55.289 21.394-59.135-4.728 40.545 43.27-51.202-29.888 17.789 56.57-33.173-49.118-8.574 58.654-8.574-58.654-33.173 49.118 17.789-56.57-51.202 29.888 40.545-43.27-59.135 4.728 55.288-21.394-55.288-21.394 59.135 4.727-40.545-43.27 51.202 29.889-17.789-56.57 33.173 49.118zm-48.077 2.404a102.564 102.564 0 1 0 0 187.5 115.385 115.385 0 1 1 0-187.5\"/>",
  height: "400.067",
  width: "800",
};
const _title = "Civil ensign of Malaysia";
const _description = "Civil ensign of Malaysia. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export class EnsignCivilMalaysia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-malaysia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
