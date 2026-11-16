// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 3\"",
  body: "<title>Flag of the Bahamas</title><path fill=\"#00778b\" d=\"M0 0h6v3H0z\"/><path fill=\"#ffc72c\" d=\"M1 1h5v1H1z\"/><path d=\"M2.598 1.5 0 3V0z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval jack of the Bahamas";
const _description = "Naval jack of the Bahamas. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export const JackBahamas = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackBahamas.displayName = 'JackBahamas';
