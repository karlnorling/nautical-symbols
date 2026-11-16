// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\"",
  body: "<path d=\"M5.6 63.538v-7.075h22.688l-.363-12.05h7.088v12.05h21.262v-23.4h7.087v23.4h21.263v-12.05H91.7v12.05h22.7v7.075H91.7v12.05h-7.075v-12.05H63.362l-.35 23.4h-6.737v-23.4H35.013v12.05h-7.088l.363-12.05z\" style=\"fill:#000;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "120",
  width: "120",
};
const _title = "Wreck depth";
const _description = "Wreck depth — INT 1 paper chart symbol";

export const ChartWreckDepth = defineComponent({
  name: 'ChartWreckDepth',
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
