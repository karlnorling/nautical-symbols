// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50.251 53.536\"",
  body: "<path d=\"M527.83 44.575c-4.33-3.301-6.29-6.911-6.67-12.331-.44-6.328 2.51-11.346 9.33-15.869 7.43-4.933 39.98-22.619 39.82-21.638-.1.599-4.71 11.011-10.24 23.137-8.21 17.987-10.49 22.481-12.39 24.397-5.43 5.49-14.31 6.521-19.85 2.304z\" style=\"fill-rule:evenodd;stroke:#000;stroke-miterlimit:3.9879;stroke-width:1.063;fill:green\" transform=\"translate(-520.59 5.834)\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Green light (teardrop)";
const _description = "Green light (teardrop) — Nautical chart symbol";

export const LightGreenTeardrop = defineComponent({
  name: 'LightGreenTeardrop',
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
