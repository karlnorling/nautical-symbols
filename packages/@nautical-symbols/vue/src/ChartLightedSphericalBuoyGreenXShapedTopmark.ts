// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\" xmlns:svg=\"http://www.w3.org/2000/svg\"",
  body: "<svg:path d=\"M 131.60087,181.31159 L 69.97299,257.62001 L 65.44288,263.19827 L 59.885447,267.42201 L 52.986033,269.53125 L 45.663807,269.42153 L 38.851616,267.12524 L 33.104189,262.78791 L 28.902861,256.70061 L 26.677963,249.64945 L 26.834933,242.67425 L 29.567773,236.58472 L 34.162548,231.27636 L 39.756076,226.40835 L 40.930254,225.46186 L 131.60087,181.31159 z M 159.60212,156.05108 C 161.79918,155.83146 163.76054,157.43633 163.98017,159.63337 C 164.19979,161.83043 162.59492,163.79179 160.39788,164.01142 C 158.20082,164.23104 156.23946,162.62617 156.01983,160.42913 C 155.80021,158.23207 157.40508,156.27071 159.60212,156.05108 z\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/><path d=\"m179.344 93.031-6.375 18.563a34 34 0 0 0-5.906-.906 34 34 0 0 0-2.438-.063A33.26 33.26 0 0 0 148 115.219c-14.661 8.624-20.342 26.812-13.812 42.062h-8.063v5.656h21.719c1.287 5.533 6.233 9.657 12.156 9.657 5.925 0 10.87-4.12 12.156-9.656l32.281.03v-5.655l-8.593-.032c4.239-9.772 3.576-20.761-1.969-30.187a33.24 33.24 0 0 0-16.812-14.25l6.312-18.469zM160 152.594c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m6.75-71.294 17.938-8.938-8.938-17.937 4.475-2.25 9.275 18.062 17.95-8.962 2.238 4.5-18.275 8.837 8.937 17.938-4.15 2.35-9.275-18.063-17.937 8.95z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Lighted spherical buoy green X-shaped topmark";
const _description = "Lighted spherical buoy green X-shaped topmark — INT 1 paper chart symbol";

export const ChartLightedSphericalBuoyGreenXShapedTopmark = defineComponent({
  name: 'ChartLightedSphericalBuoyGreenXShapedTopmark',
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
