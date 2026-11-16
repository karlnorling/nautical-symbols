// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m179.344 93.031-6.375 18.563a34 34 0 0 0-5.906-.906 34 34 0 0 0-2.438-.063A33.26 33.26 0 0 0 148 115.219c-14.661 8.624-20.342 26.812-13.812 42.062h-8.063v5.656h21.719c1.287 5.533 6.233 9.657 12.156 9.657 5.925 0 10.87-4.12 12.156-9.656l32.281.03v-5.655l-8.593-.032c4.239-9.772 3.576-20.761-1.969-30.187a33.24 33.24 0 0 0-16.812-14.25l6.312-18.469zm-13.969 24.531a26.45 26.45 0 0 1 22.469 13.094c5.045 8.577 5.072 18.064.125 26.625l-15.813-.031c-1.285-5.536-6.231-9.656-12.156-9.656-5.923 0-10.869 4.123-12.156 9.656H142c-7.21-12.6-2.985-28.619 9.563-36 4.345-2.556 9.125-3.752 13.812-3.687M160 152.594c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m6.75-71.294 17.938-8.938-8.938-17.937 4.475-2.25 9.275 18.062 17.95-8.962 2.238 4.5-18.275 8.837 8.937 17.938-4.15 2.35-9.275-18.063-17.937 8.95z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Spherical buoy red X-shaped topmark";
const _description = "Spherical buoy red X-shaped topmark — INT 1 paper chart symbol";

export const ChartSphericalBuoyRedXShapedTopmark = defineComponent({
  name: 'ChartSphericalBuoyRedXShapedTopmark',
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
