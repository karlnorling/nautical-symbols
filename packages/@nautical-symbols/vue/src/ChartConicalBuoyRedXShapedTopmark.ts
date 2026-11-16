// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m182.563 85.812-6.157 18.344c-3.946.066-7.532 2.22-11.281 5.188-4 3.164-8.228 7.495-12.656 12.594-8.774 10.102-18.28 23.166-27.156 35.312h-7.157v5.656h29.688c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656H202v-5.656h-7.719c-1.276-11.327-2.185-23.373-4-33.094-.954-5.113-2.122-9.575-4-13.156-1.318-2.514-3.235-4.744-5.687-5.937l6-17.876zm-5.782 25.313c1.085.06 1.995.671 3.281 3.125s2.452 6.41 3.344 11.188c1.658 8.877 2.56 20.531 3.813 31.812h-15.063c-1.285-5.536-6.231-9.656-12.156-9.656-5.923 0-10.869 4.123-12.156 9.656H134c7.978-10.901 16.24-22.072 23.75-30.719 4.269-4.915 8.302-9.015 11.719-11.719s6.211-3.748 7.312-3.687M160 152.563c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m9.969-78.482 17.937-8.937-8.937-17.938 4.475-2.25 9.275 18.063 17.95-8.963 2.237 4.5-18.275 8.838 8.938 17.937-4.15 2.35-9.275-18.062-17.938 8.95z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Conical buoy red X-shaped topmark";
const _description = "Conical buoy red X-shaped topmark — INT 1 paper chart symbol";

export const ChartConicalBuoyRedXShapedTopmark = defineComponent({
  name: 'ChartConicalBuoyRedXShapedTopmark',
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
