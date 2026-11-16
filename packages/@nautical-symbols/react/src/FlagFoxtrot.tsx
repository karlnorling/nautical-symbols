// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4 4\"",
  body: "<path fill=\"#fff\" stroke=\"#000\" stroke-width=\".017\" d=\"M0 0h4v4H0z\"/><path fill=\"red\" d=\"m2 0 2 2-2 2-2-2\"/>",
  height: "600",
  width: "600",
};
const _title = "F (Foxtrot)";
const _description = "\"I am disabled; communicate with me.\"";

export const FlagFoxtrot = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagFoxtrot.displayName = 'FlagFoxtrot';
