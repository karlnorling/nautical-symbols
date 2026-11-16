// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 150\"",
  body: "<path stroke=\"#ff0\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 100v50\"/><path stroke=\"#ff0\" stroke-linecap=\"square\" stroke-width=\"15\" d=\"M50 8v84M8 50h84\"/>",
  height: "150",
  width: "100",
};
const _title = "Topmark greek cross";
const _description = "Topmark greek cross — Buoyage topmark";

export const TopmarkGreekCross = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
TopmarkGreekCross.displayName = 'TopmarkGreekCross';
