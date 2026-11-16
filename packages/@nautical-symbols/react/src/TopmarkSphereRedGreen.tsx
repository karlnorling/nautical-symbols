// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 150\"",
  body: "<path stroke=\"#0f0\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 100v46\"/><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"red\"/><path fill=\"#0f0\" d=\"M100 50A50 50 0 0 1 0 50z\"/>",
  height: "150",
  width: "100",
};
const _title = "Topmark sphere red green";
const _description = "Topmark sphere red green — Buoyage topmark";

export const TopmarkSphereRedGreen = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
TopmarkSphereRedGreen.displayName = 'TopmarkSphereRedGreen';
