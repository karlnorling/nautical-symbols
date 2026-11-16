// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\"",
  body: "<path d=\"M60 23c-20.402 0-37 16.598-37 37s16.598 37 37 37 37-16.598 37-37-16.598-37-37-37m0 4c14.749 0 27.235 9.66 31.469 23H28.53C32.765 36.66 45.251 27 60 27M27.531 54H92.47c.356 1.945.531 3.951.531 6s-.175 4.055-.531 6H27.53a33.3 33.3 0 0 1-.53-6c0-2.049.175-4.055.531-6m1 16H91.47C87.235 83.34 74.749 93 60 93s-27.235-9.66-31.469-23\"/>",
  height: "120",
  width: "120",
};
const _title = "Custom office";
const _description = "Custom office — INT 1 paper chart symbol";

export const ChartCustomOffice = defineComponent({
  name: 'ChartCustomOffice',
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
