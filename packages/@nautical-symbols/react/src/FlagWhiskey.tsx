// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#00f\" stroke=\"#000\" stroke-width=\"2.5\" d=\"M0 0h600v600H0z\"/><path fill=\"#fff\" d=\"M120 120h360v360H120z\"/><path fill=\"red\" d=\"M240 240h120v120H240z\"/>",
  height: "600",
  width: "600",
};
const _title = "W (Whiskey)";
const _description = "\"I require medical assistance.\"";

export const FlagWhiskey = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagWhiskey.displayName = 'FlagWhiskey';
