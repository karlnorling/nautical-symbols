// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 150\"",
  body: "<path stroke=\"#ff0\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 50v100\"/><path stroke=\"#ff0\" stroke-linecap=\"square\" stroke-width=\"15\" d=\"m10 10 80 80m-80 0 80-80\"/>",
  height: "150",
  width: "100",
};
const _title = "Topmark saltire";
const _description = "Topmark saltire — Buoyage topmark";

export const TopmarkSaltire = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
TopmarkSaltire.displayName = 'TopmarkSaltire';
