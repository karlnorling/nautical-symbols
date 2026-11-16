// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m182.563 85.734-6.157 18.344c-3.946.065-7.532 2.22-11.281 5.187-4 3.165-8.228 7.496-12.656 12.594-8.774 10.103-18.28 23.167-27.156 35.313h-7.157v5.656h29.688c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656H202v-5.656h-7.719c-1.276-11.328-2.185-23.373-4-33.094-.954-5.114-2.122-9.575-4-13.157-1.318-2.513-3.235-4.743-5.687-5.937l6-17.875zm-5.782 25.313c1.085.06 1.995.67 3.281 3.124s2.452 6.41 3.344 11.188c1.658 8.877 2.56 20.532 3.813 31.813h-15.063c-1.285-5.536-6.231-9.657-12.156-9.657-5.923 0-10.869 4.124-12.156 9.657H134c7.978-10.902 16.24-22.072 23.75-30.72 4.269-4.914 8.302-9.014 11.719-11.718s6.211-3.748 7.312-3.687M160 152.484c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5M190.8 50.84c-9.357 0-17 7.644-17 17s7.643 17 17 17 17-7.643 17-17-7.643-17-17-17m0 5c6.651 0 12 5.349 12 12 0 6.652-5.349 12-12 12s-12-5.348-12-12c0-6.651 5.349-12 12-12\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Conical buoy red spherical topmark";
const _description = "Conical buoy red spherical topmark — INT 1 paper chart symbol";

export const ChartConicalBuoyRedSphericalTopmark = defineComponent({
  name: 'ChartConicalBuoyRedSphericalTopmark',
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
