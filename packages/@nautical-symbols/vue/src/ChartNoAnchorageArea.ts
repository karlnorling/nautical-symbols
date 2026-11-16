// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\"",
  body: "<path d=\"M60 7.116c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m2.5 19.312 14.85-.181v4.975H62.475l.712 21.25-3.55 3.55-3.187-3.55.35-21.25H41.913v-4.975l15.275.056v-4.062A10.51 10.51 0 0 1 49.5 12.116c0-5.796 4.704-10.5 10.5-10.5s10.5 4.704 10.5 10.5c0 4.935-3.408 9.066-8 10.187zm-6.413 84.531-.7-7.1-7-1.425-6.562-2.437-5.575-3.225-18.425 21.612-3.9-3.175L32 93.934l-4.837-5.137-.838-.888-5.312 5.325-3.9-24.45L32.7 81.197l-3.888 3.875 5.675 4.187 1.05.775L56.45 65.247 13.563 15.622l3.55-3.538 42.525 49.6 42.175-49.6 3.887 3.175-42.875 49.988 21.263 24.787 5.587-4.337.788-.625-3.888-3.875 15.587-12.775-3.187 24.812L93.3 87.91l-4.987 5-1.038 1.025L105.7 115.21l-3.538 3.175-18.787-21.612-6.2 3.462-6.625 2.35-6.662 1.275-.7 7.1zm-16.3-18.437 6.6 2.637 6.912 1.388 2.088.225.35-17.725 3.9-4.588 3.9 4.588.35 17.725 6.987-1.213 6.7-2.25 1.912-.787-19.85-23.388z\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "120",
  width: "120",
};
const _title = "No anchorage area";
const _description = "No anchorage area — INT 1 paper chart symbol";

export const ChartNoAnchorageArea = defineComponent({
  name: 'ChartNoAnchorageArea',
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
