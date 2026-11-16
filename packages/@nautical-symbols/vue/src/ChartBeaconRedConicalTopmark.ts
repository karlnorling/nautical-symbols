// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m200.536 67.82-18.52 36.964 36.218-.003zm-.376 10.444 10.062 21.799-20.827-.773zm-2.441 30.33v17.687h-6.375v64.75a12.5 12.5 0 0 0-3.5 6.156h-8.438l-.125 5.657h8.563c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656l8.313-.031v-5.657l-8.313.031a12.5 12.5 0 0 0-3.812-6.437v-64.469h-6.375v-17.687zM200 192.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Beacon red conical topmark";
const _description = "Beacon red conical topmark — INT 1 paper chart symbol";

export const ChartBeaconRedConicalTopmark = defineComponent({
  name: 'ChartBeaconRedConicalTopmark',
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
