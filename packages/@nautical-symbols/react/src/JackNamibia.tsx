// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@nautical-symbols/core';
import type { SymbolProps } from './SymbolProps.js';
import { SymbolSvg } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1800 1200\"",
  body: "<defs><clipPath id=\"jack-namibia-a\"><path d=\"M0 0h900v600H0z\"/></clipPath></defs><path d=\"M0 0h1800v1200H0z\" style=\"opacity:.98000004;color:#000;fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:10;marker:none;visibility:visible;display:inline;overflow:visible\"/><path d=\"M0 0h900L0 600z\" style=\"fill:#003580\"/><path d=\"M0 600h900V0z\" style=\"fill:#009543\"/><path d=\"M0 600 900 0\" clip-path=\"url(#jack-namibia-a)\" style=\"stroke:#fff;stroke-width:200\"/><path d=\"M0 600 900 0\" clip-path=\"url(#jack-namibia-a)\" style=\"stroke:#d21034;stroke-width:150\"/><path d=\"m266.602 215-44.176-7.574L230 251.603l-34.47-28.647L180 265l-15.53-42.044L130 251.603l7.574-44.177L93.397 215l28.647-34.47L80 165l42.044-15.53L93.397 115l44.177 7.574L130 78.398l34.47 28.647L180 65l15.53 42.045L230 78.398l-7.574 44.176L266.602 115l-28.647 34.47L280 165l-42.045 15.53z\" style=\"fill:#ffce00\"/><path d=\"M240 165a60 60 0 0 1-120 0 60 60 0 1 1 120 0\" style=\"fill:#003580\"/><path d=\"M230 165a50 50 0 1 1-100 0 50 50 0 1 1 100 0\" style=\"fill:#ffce00\"/>",
  height: "1200",
  width: "1800",
};
const _title = "Naval jack of Namibia";
const _description = "Naval jack of Namibia. Flown at the bow of naval vessels in harbour or at anchor. The national flag in the canton.";

export const JackNamibia = React.memo<SymbolProps>((props) => (
  <SymbolSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
JackNamibia.displayName = 'JackNamibia';
