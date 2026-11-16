// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-45 -30 180 120\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#2c2c6f\"",
  body: "<path fill=\"#cf142b\" d=\"M-45-30h180V90H-45z\"/><path fill=\"#fff\" d=\"M-45-30h90v60h-90z\"/><path fill=\"#f15b25\" d=\"M-45-30h90v20h-90z\"/><path fill=\"#006934\" d=\"M-45 10h90v20h-90z\"/><circle r=\"9.25\"/><circle r=\"8\" fill=\"#fff\"/><circle r=\"1.6\"/><g id=\"ensign-civil-india-d\"><g id=\"ensign-civil-india-c\"><g id=\"ensign-civil-india-b\"><g id=\"ensign-civil-india-a\"><path d=\"m0-8 .3 4.814L0-.802l-.3-2.384z\"/><circle cy=\"-8\" r=\".35\" transform=\"rotate(7.5)\"/></g><use xlink:href=\"#ensign-civil-india-a\" transform=\"scale(-1)\"/></g><use xlink:href=\"#ensign-civil-india-b\" transform=\"rotate(15)\"/></g><use xlink:href=\"#ensign-civil-india-c\" transform=\"rotate(30)\"/></g><use xlink:href=\"#ensign-civil-india-d\" transform=\"rotate(60)\"/><use xlink:href=\"#ensign-civil-india-d\" transform=\"rotate(120)\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of India";
const _description = "Civil ensign of India. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export const EnsignCivilIndia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilIndia.displayName = 'EnsignCivilIndia';
