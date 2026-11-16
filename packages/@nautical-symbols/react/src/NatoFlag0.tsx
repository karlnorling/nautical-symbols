// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"",
  body: "<path fill=\"#fff\" stroke=\"#000\" stroke-width=\".06\" d=\"M0 0h15v15H0z\"/><path stroke=\"#00f\" d=\"M1 2.5h3M2.5 1v3M11 2.5h3M12.5 1v3M6 7.5h3M7.5 6v3M1 12.5h3M2.5 11v3m8.5-1.5h3M12.5 11v3\"/>",
  height: "600",
  width: "600",
};
const _title = "NATO number flag 0";
const _description = "Blazon: Argent, five crosses hummetty azure in saltire";

export const NatoFlag0 = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
NatoFlag0.displayName = 'NatoFlag0';
