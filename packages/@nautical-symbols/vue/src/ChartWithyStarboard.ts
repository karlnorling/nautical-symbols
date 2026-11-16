// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M60.081 107.563v-3.526h7.788V73.913L40.23 87.726l-1.412-3.2 29.05-14.863V48.4l-14.875 7.788-1.775-3.55 16.65-8.488V32.438h4.25V44.15l16.312 8.488-1.425 3.187L72.12 48.4v21.262l29.062 14.525-1.775 3.538L72.12 73.913v30.124h7.8v3.525z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "140",
  width: "140",
};
const _title = "Withy starboard";
const _description = "Withy starboard — INT 1 paper chart symbol";

export const ChartWithyStarboard = defineComponent({
  name: 'ChartWithyStarboard',
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
