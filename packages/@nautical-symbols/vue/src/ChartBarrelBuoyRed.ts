// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"M156 118c-5.565 0-11.123.163-17.187.5-9.298.517-16.932 2.273-22.25 8.625-5.046 6.026-7.726 15.281-9.72 30.063h-8.03v5.656h49.03c1.288 5.533 6.234 9.656 12.157 9.656 5.925 0 10.87-4.12 12.156-9.656h41.469v-5.594h-7.469c-2.025-14.862-4.973-24.182-10.281-30.187-5.585-6.32-13.394-8.047-22.687-8.563-6.065-.337-11.623-.5-17.188-.5m0 7c5.427 0 10.854.169 16.813.5 8.706.484 13.897 1.758 17.812 6.188 3.632 4.11 6.503 11.876 8.469 25.53l-26.938-.03c-1.285-5.536-6.231-9.657-12.156-9.657-5.923 0-10.869 4.124-12.156 9.656h-5.531c-1.031-12.574-3.697-21.47-9.813-31 1.956-.331 4.14-.546 6.688-.687 5.958-.331 11.385-.5 16.812-.5m-30.375 3.469c6.284 9.153 8.643 16.508 9.656 28.719h-21.344c1.943-13.68 4.586-21.485 8-25.563 1.1-1.312 2.308-2.342 3.688-3.156M160 152.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Barrel buoy red";
const _description = "Barrel buoy red — INT 1 paper chart symbol";

export const ChartBarrelBuoyRed = defineComponent({
  name: 'ChartBarrelBuoyRed',
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
