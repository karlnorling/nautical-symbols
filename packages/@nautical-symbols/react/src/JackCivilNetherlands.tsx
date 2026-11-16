// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1800 1200\"",
  body: "<path fill=\"#ae1c28\" d=\"M0 0h1800v600H0z\"/><path fill=\"#21468b\" d=\"M0 600h1800v600H0z\"/><path fill=\"#fff\" d=\"M0 400v400l1800-400v400z\"/><path fill=\"#fff\" d=\"M590.625 0h618.75l-618.75 1200h618.75z\"/>",
  height: "400",
  width: "600",
};
const _title = "Civil jack of the Netherlands (unofficial)";
const _description = "Civil jack of the Netherlands (unofficial). Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export const JackCivilNetherlands = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackCivilNetherlands.displayName = 'JackCivilNetherlands';
