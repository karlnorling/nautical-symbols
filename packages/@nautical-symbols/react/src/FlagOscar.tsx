// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1 1\"",
  body: "<path fill=\"red\" d=\"M0 0h1v1H0z\"/><path fill=\"#ff0\" d=\"M0 0v1h1z\"/>",
  height: "600",
  width: "600",
};
const _title = "O (Oscar)";
const _description = "\"Man overboard.\" (often attached to the man overboard pole on boats). With a sinister hoist, the semaphore flag.";

export const FlagOscar = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
FlagOscar.displayName = 'FlagOscar';
