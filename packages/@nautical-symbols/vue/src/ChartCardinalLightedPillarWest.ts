// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"",
  body: "<path d=\"m246.888 8.925 4.78 35.969 25.813-25.719zm3.656 39.344-25.782 25.75 30.907 10.343zm-13.469 33.625-5.594 16.718-6.531-2.093-30.469 68.062-29.781 32.594h-7.781l-.125 5.656h31.062c1.288 5.533 6.234 9.656 12.156 9.657 5.925 0 10.871-4.121 12.157-9.657h24.125v-5.656h-7.782l-2.468-22.344 16.625-72.625-7.157-2.281 5.594-16.687zm-7.875 23.125 4.969 1.781-15.219 68.031 2.469 22.344h-9.25c-1.283-5.54-6.229-9.687-12.157-9.687-5.925 0-10.871 4.15-12.156 9.687h-13.594l26.25-28.375zM207.5 200c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/><path d=\"m181.65 169.625-69.8-68.912-5.1-5.063-3.65-5.95-1.412-7.075.837-7.275 2.962-6.55 4.888-5.287 6.475-3.575 7.238-1.513 6.924.85L136.8 62.6l4.825 5.1 4.287 6.05.826 1.263zM204 200c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "400",
  width: "400",
};
const _title = "Cardinal lighted pillar west";
const _description = "Cardinal lighted pillar west — INT 1 paper chart symbol";

export const ChartCardinalLightedPillarWest = defineComponent({
  name: 'ChartCardinalLightedPillarWest',
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
