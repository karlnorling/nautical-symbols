// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\" xmlns:svg=\"http://www.w3.org/2000/svg\"",
  body: "<svg:path d=\"M 131.60087,181.31159 L 69.97299,257.62001 L 65.44288,263.19827 L 59.885447,267.42201 L 52.986033,269.53125 L 45.663807,269.42153 L 38.851616,267.12524 L 33.104189,262.78791 L 28.902861,256.70061 L 26.677963,249.64945 L 26.834933,242.67425 L 29.567773,236.58472 L 34.162548,231.27636 L 39.756076,226.40835 L 40.930254,225.46186 L 131.60087,181.31159 z M 159.60212,156.05108 C 161.79918,155.83146 163.76054,157.43633 163.98017,159.63337 C 164.19979,161.83043 162.59492,163.79179 160.39788,164.01142 C 158.20082,164.23104 156.23946,162.62617 156.01983,160.42913 C 155.80021,158.23207 157.40508,156.27071 159.60212,156.05108 z\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/><path d=\"m222.563 125.75-6.157 18.344c-3.946.065-7.532 2.22-11.281 5.187-4 3.165-8.228 7.496-12.656 12.594-8.774 10.103-18.28 23.167-27.156 35.313h-7.157v5.656h29.688c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656H242v-5.657h-7.719c-1.276-11.327-2.185-23.372-4-33.093-.954-5.114-2.122-9.575-4-13.156-1.318-2.514-3.235-4.744-5.687-5.938l6-17.875zM200 192.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m23.905-106.979-11.163 33.534 26.21 8.726 11.164-33.534z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Lighted conical buoy green cylindrical topmark";
const _description = "Lighted conical buoy green cylindrical topmark — INT 1 paper chart symbol";

export const ChartLightedConicalBuoyGreenCylindricalTopmark = defineComponent({
  name: 'ChartLightedConicalBuoyGreenCylindricalTopmark',
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
