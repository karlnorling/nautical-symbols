// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"M204.625 150.563A33.26 33.26 0 0 0 188 155.156c-14.661 8.625-20.342 26.812-13.812 42.063h-8.063v5.656h21.719c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656l32.281.031v-5.656l-8.593-.031c4.239-9.772 3.576-20.762-1.969-30.188-5.848-9.94-16.072-15.728-26.812-16.406a34 34 0 0 0-2.438-.062m.75 6.937a26.45 26.45 0 0 1 22.469 13.094c5.045 8.576 5.072 18.064.125 26.625l-15.813-.031c-1.285-5.536-6.231-9.657-12.156-9.657-5.923 0-10.869 4.124-12.156 9.656H182c-7.21-12.599-2.985-28.619 9.563-36 4.345-2.556 9.125-3.751 13.812-3.687M200 192.531c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Sphere buoy red";
const _description = "Sphere buoy red — INT 1 paper chart symbol";

export const ChartSphereBuoyRed = defineComponent({
  name: 'ChartSphereBuoyRed',
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
