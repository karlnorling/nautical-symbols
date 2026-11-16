// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 750 750\"",
  body: "<path fill-rule=\"evenodd\" d=\"M750 0v750H0V0z\" style=\"fill:#3a75c4\"/><path fill-rule=\"evenodd\" d=\"M750 0v500H0V0z\" style=\"fill:#fcd116\"/><path fill-rule=\"evenodd\" d=\"M750 0v250H0V0z\" style=\"fill:#009e60\"/>",
  height: "750",
  width: "750",
};
const _title = "Naval jack of Gabon";
const _description = "Naval jack of Gabon. Flown at the bow of naval vessels in harbour or at anchor. A square version of the national flag.";

export const JackGabon = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackGabon.displayName = 'JackGabon';
