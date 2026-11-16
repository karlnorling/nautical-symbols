// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 105.834 105.833\"",
  body: "<text xml:space=\"preserve\" x=\"52.762\" y=\"81.039\" style=\"font-size:71.8708px;line-height:125%;font-family:Sy1Ca;-inkscape-font-specification:&quot;Sy1Ca, Normal&quot;;font-variant-ligatures:none;text-align:center;letter-spacing:0;word-spacing:0;text-anchor:middle;fill:none;stroke:#000;stroke-width:.528216px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"scale(.99257 1.00748)\"><tspan x=\"52.762\" y=\"81.039\" style=\"fill:purple;stroke-width:.528216px\">¨</tspan></text>",
  height: "400",
  width: "400",
};
const _title = "Pilot station";
const _description = "Pilot station — Nautical chart symbol";

export const ChartPilotStation = defineComponent({
  name: 'ChartPilotStation',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const instanceId = useInstanceId();
    return () =>
      renderSymbol({
        attrs,
        description: props.description ?? _description,
        height: props.height,
        instanceId,
        svg: _svg,
        title: props.title ?? _title,
        width: props.width,
      });
  },
});
