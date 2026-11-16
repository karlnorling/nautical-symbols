// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M59.906 108.094v-4.6h7.788v-16.65L38.28 74.069l2.125-4.238L67.694 81.52V54.93L50.33 47.144l1.775-4.263 15.588 6.738V31.906h4.962V49.62l15.6-6.738 1.763 4.263-17.363 7.787V81.52l27.288-12.05 1.775 4.25-29.063 13.125v16.65h7.8v4.6z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "140",
  width: "140",
};
const _title = "Withy port";
const _description = "Withy port — INT 1 paper chart symbol";

export const ChartWithyPort = defineComponent({
  name: 'ChartWithyPort',
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
