// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"M156 118c-5.565 0-11.123.163-17.187.5-9.298.517-16.932 2.273-22.25 8.625-5.046 6.026-7.726 15.281-9.72 30.063h-8.03v5.656h49.03c1.288 5.533 6.234 9.656 12.157 9.656 5.925 0 10.87-4.12 12.156-9.656h41.469v-5.594h-7.469c-2.025-14.862-4.973-24.182-10.281-30.187-5.585-6.32-13.394-8.047-22.687-8.563-6.065-.337-11.623-.5-17.188-.5m-30.375 10.469c6.284 9.153 8.643 16.508 9.656 28.719h-21.344c1.943-13.68 4.586-21.485 8-25.563 1.1-1.312 2.308-2.342 3.688-3.156M160 152.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Barrel buoy green";
const _description = "Barrel buoy green — INT 1 paper chart symbol";

export const ChartBarrelBuoyGreen = defineComponent({
  name: 'ChartBarrelBuoyGreen',
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
