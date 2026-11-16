// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"",
  body: "<path d=\"m34.425 71.975 11.35-19.487h-22.7v-4.963h22.7l-11.35-19.5 4.25-2.462 11.35 19.475L61.35 25.563l4.25 2.462-11.325 19.5h22.65v4.962h-22.65L65.6 71.976l-4.25 2.463-11.325-19.476-11.35 19.475z\" style=\"fill:#000;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "100",
  width: "100",
};
const _title = "Rock covers and uncovers";
const _description = "Rock covers and uncovers — INT 1 paper chart symbol";

export const ChartRockCoversAndUncovers = defineComponent({
  name: 'ChartRockCoversAndUncovers',
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
