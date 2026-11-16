// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"",
  body: "<path d=\"M47.519 76.925V52.513H23.056v-5H47.52V23.075h4.962v24.438h24.463v5H52.48v24.412zM72.33 32.3l-.537 2.125-1.463 1.688-2.05.775-2.2-.263-1.812-1.25-1.025-1.975v-2.2l1.025-1.975 1.812-1.25 2.2-.263 2.05.776 1.463 1.662zm-35.45 0-.512 2.125-1.463 1.688-2.075.775-2.175-.263-1.837-1.25-1.025-1.975v-2.2l1.025-1.975 1.837-1.25 2.175-.263 2.075.776 1.463 1.662zm0 35.425-.51 2.175-1.463 1.65-2.075.737-2.175-.237-1.837-1.275-1.025-1.925v-2.225L28.82 64.7l1.837-1.25 2.175-.263 2.075.776 1.463 1.612zm35.45 0-.537 2.175-1.463 1.65-2.05.737-2.2-.237-1.812-1.275-1.025-1.925v-2.225l1.025-1.925 1.812-1.25 2.2-.263 2.05.776 1.463 1.612z\" style=\"fill:#000;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "100",
  width: "100",
};
const _title = "Rock awash";
const _description = "Rock awash — INT 1 paper chart symbol";

export const ChartRockAwash = defineComponent({
  name: 'ChartRockAwash',
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
