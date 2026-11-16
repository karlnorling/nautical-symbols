// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-160 -80 640 320\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<defs><path id=\"ensign-naval-kenya-a\" d=\"M-1 55.426h2V-38c2-2 2-5 2-8 0-2 0-10-3-18.663C-3-56-3-48-3-46c0 3 0 6 2 8z\" style=\"stroke-miterlimit:10\" transform=\"rotate(30)\"/></defs><path d=\"M-160-80h640v320h-640z\" style=\"fill:#fff\"/><path d=\"M-160-80h320v48h-320z\" style=\"fill:#000\"/><path d=\"M-160 32h320v48h-320z\" style=\"fill:#060\"/><use xlink:href=\"#ensign-naval-kenya-a\" width=\"640\" height=\"320\" style=\"stroke:#000\"/><use xlink:href=\"#ensign-naval-kenya-a\" width=\"640\" height=\"320\" style=\"fill:#fff;stroke:none\"/><use xlink:href=\"#ensign-naval-kenya-a\" width=\"640\" height=\"320\" style=\"stroke:#000\" transform=\"scale(-1 1)\"/><use xlink:href=\"#ensign-naval-kenya-a\" width=\"640\" height=\"320\" style=\"fill:#fff;stroke:none\" transform=\"scale(-1 1)\"/><path d=\"M-160-24v48h141c3 8 13 24 19 24s16-16 19-24h141v-48H19C16-32 6-48 0-48s-16 16-19 24z\" style=\"fill:#b00\"/><path id=\"ensign-naval-kenya-b\" d=\"M19 24c3-8 5-16 5-24s-2-16-5-24c-3 8-5 16-5 24s2 16 5 24\" style=\"fill:#000\"/><use xlink:href=\"#ensign-naval-kenya-b\" width=\"640\" height=\"320\" transform=\"scale(-1 1)\"/><ellipse rx=\"4\" ry=\"6\" style=\"fill:#fff\"/><path id=\"ensign-naval-kenya-c\" d=\"M1 5.85s4 8 4 21-4 21-4 21z\" style=\"fill:#fff\"/><use xlink:href=\"#ensign-naval-kenya-c\" width=\"640\" height=\"320\" style=\"fill:#fff\" transform=\"scale(-1)\"/><use xlink:href=\"#ensign-naval-kenya-c\" width=\"640\" height=\"320\" style=\"fill:#fff\" transform=\"scale(-1 1)\"/><use xlink:href=\"#ensign-naval-kenya-c\" width=\"640\" height=\"320\" style=\"fill:#fff\" transform=\"scale(1 -1)\"/><path d=\"M387.367 191.894c-5.5-3.509-8-6.016-11.5-9.023v10.026c-6-8.021-8.5-16.543-10-25.066 7.5 4.01 15.5 7.52 23.5 9.024l-9.5 2.005c8 8.021 15 9.525 22 11.53v-44.115l-22.5-4.511v-6.016h23v-11.029h7v11.029h23v6.016l-22.5 4.511v44.115c7-2.005 14-3.509 22-11.53l-9.5-2.005c8-1.504 16-5.013 23.5-9.023-1.5 8.522-4 17.044-10 25.065V182.87c-3.5 3.007-6 5.514-11.5 9.023-6.5 3.51-13.5 9.024-18.5 15.04-5-6.016-12-11.03-18.5-15.04\" style=\"fill:#b00\"/><circle cx=\"320\" cy=\"2\" r=\"17.5\" style=\"fill:#b00\" transform=\"matrix(.5 0 0 .5013 245.867 118.704)\"/><circle cx=\"320\" cy=\"2\" r=\"12.5\" style=\"fill:#fff\" transform=\"matrix(.5 0 0 .5013 245.867 118.704)\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval ensign of Kenya";
const _description = "Naval ensign of Kenya. Flown at the stern by warships and other state vessels.";

export class EnsignNavalKenya extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-kenya';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
