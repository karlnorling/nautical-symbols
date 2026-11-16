// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 750 500\"",
  body: "<path fill=\"#ce1126\" d=\"M0 0h750v500H0\"/><path fill=\"#002d62\" d=\"M0 0h375v250H0m375 0h375v250H350\"/><path fill=\"#fff\" d=\"M325 0h100v500H325M0 200h750v100H0\"/>",
  height: "500",
  width: "750",
};
const _title = "Civil ensign of Dominican Republic";
const _description = "Civil ensign of Dominican Republic. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilDominicanRepublic = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
EnsignCivilDominicanRepublic.displayName = 'EnsignCivilDominicanRepublic';
