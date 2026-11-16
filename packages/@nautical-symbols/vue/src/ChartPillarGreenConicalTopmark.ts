// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m237.075 81.894-5.594 16.718-6.531-2.093-30.469 68.062-29.781 32.594h-7.781l-.125 5.656h31.062c1.288 5.533 6.234 9.656 12.156 9.657 5.925 0 10.871-4.121 12.157-9.657h24.125v-5.656h-7.782l-2.468-22.344 16.625-72.625-7.157-2.281 5.594-16.687zM207.5 200c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5m50.631-114.931-6.2-40.575-29.337 29z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Pillar green conical topmark";
const _description = "Pillar green conical topmark — INT 1 paper chart symbol";

export const ChartPillarGreenConicalTopmark = defineComponent({
  name: 'ChartPillarGreenConicalTopmark',
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
