// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 300\"",
  body: "<style>.s1{fill:#fff}.s2{fill:#debc6e}</style><path id=\"jack-cyprus-Shape 2\" fill-rule=\"evenodd\" d=\"M300 0v300H0V0z\" style=\"fill:#003f87\"/><path id=\"jack-cyprus-Shape 1\" fill-rule=\"evenodd\" d=\"M300 120v60H0v-60z\" class=\"s1\"/><path id=\"jack-cyprus-Shape 1 copy\" fill-rule=\"evenodd\" d=\"M180 300h-60V0h60z\" class=\"s1\"/><g id=\"jack-cyprus-Folder 1\"><path d=\"m115.72 129.48-2.72 2.65 9.43 9.2-5.67 5.52 3.23 3.15 5.67-5.53 42.65 41.58 2.72-2.66-42.65-41.57 5.67-5.53-3.22-3.14-5.67 5.52z\" class=\"s2\"/><path d=\"m185.02 130.81-11.73 7.31.75.73-5.12 4.99h-1.94v-3.9h4.31c1.36-2.84 2.42-5.93 1.34-10.77l-7.65 7.46c-3.62 3.53-2.73 8.68-.75 11.78l-35.88 34.98 2.72 2.66 35.89-34.99c3.18 1.94 8.46 2.81 12.08-.73l7.65-7.45c-4.96-1.05-8.13-.02-11.04 1.31v4.2h-4.01v-1.89l5.13-5 .75.73z\" class=\"s2\"/><path d=\"M149.69 110c-2.07 0-3.96.46-5.46 1.32-1.49.86-2.71 2.26-2.71 4.03 0 1.74 1.19 3.12 2.66 3.98l.08 9.13h-7.82c-6.03 0-7.14 3.26-2.29 5.68 3.22 1.59 9.46 4.07 10.02 4.39v32.45c0 7.79-6.96 6.03-12.15 1.75.73-.4 1.54-.82 2.56-1.32l-9.62-8.57c-1.8 5.58-1.51 10.79-.97 15.56 1.16-.87 2.04-1.55 2.84-2.16 5.54 5.44 16.72 7.74 22.87 13.12 6.15-5.38 17.32-7.68 22.86-13.12.8.61 1.68 1.29 2.84 2.16.55-4.77.83-9.98-.96-15.56l-9.63 8.57c1.02.5 1.83.92 2.56 1.32-5.18 4.28-12.15 6.04-12.15-1.75v-32.45c.56-.32 6.8-2.8 10.02-4.39 4.85-2.42 3.74-5.68-2.29-5.68h-7.82l.08-9.13c1.47-.86 2.66-2.24 2.66-3.98 0-1.77-1.22-3.17-2.71-4.03-1.5-.86-3.4-1.32-5.47-1.32m0 3.15c1.56 0 2.95.38 3.83.88.87.51 1.12 1 1.12 1.32s-.25.8-1.12 1.31c-.88.5-2.27.88-3.83.88-1.55 0-2.94-.38-3.82-.88-.87-.51-1.12-.99-1.12-1.31s.25-.81 1.12-1.32c.88-.5 2.27-.88 3.82-.88\" class=\"s2\"/></g>",
  height: "300",
  width: "300",
};
const _title = "Naval jack of Cyprus";
const _description = "Naval jack of Cyprus. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export class JackCyprus extends SymbolElement {
  static readonly tagName = 'nautical-jack-cyprus';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
