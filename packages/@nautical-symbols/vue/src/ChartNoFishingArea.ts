// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M1.781 92.15.37 87.187l28.337-17L.37 52.476l1.41-5.326 31.89 19.838 14.537-8.838 3.55 3.525-13.475 8.15 13.825 8.513-3.9 3.537-14.887-9.213zm20.2 20.912L65.22 69.826 21.98 26.95l3.538-3.55 43.237 43.238L111.994 23.4l3.537 3.2-43.587 43.588 43.237 42.875-3.187 3.537-43.238-43.225L25.52 116.6zM59.556 87.55l3.888-3.9 6.875 1.637 6.587 1.55 5.313 5.676-7.05-.675-6.913-1.413-6.75-2.187zm3.525-31.187-3.525-3.888 6.663-2.413 6.875-1.562 7.062-.8 2.425-.2-5.312 5.313-6.85 1.724-6.85 1.7zM98.52 91.45l-4.25-4.263-2.063-6.775-1.212-6.975.075-7.124 1.237-6.988 1.95-6.812 4.263-4.3 6.9 1.637 6.75 2.112 6.525 2.8 6.25 3.388 5.85 3.988 5.412 4.562 3.425 3.125-5.262 4.75-5.525 4.45-5.938 3.875-6.362 3.15-6.65 2.425-6.8 1.875zm.712-4.963 6.863-1.825 6.712-2.262 6.425-3.013 6.013-3.775 5.587-4.362 1.713-1.425-5.675-4.312-5.9-3.876-6.288-3.112-6.637-2.45L101.219 54l-1.638-.475-2.15 6.763-1.237 6.937.187 7.113 1.388 6.937zm16.3-20.912-.487 1.987-1.35 1.513-1.9.725-2.025-.25-1.675-1.15-.938-1.812v-2.025l.938-1.813 1.675-1.15 2.025-.263 1.9.738 1.35 1.525z\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "140",
  width: "140",
};
const _title = "No fishing area";
const _description = "No fishing area — INT 1 paper chart symbol";

export const ChartNoFishingArea = defineComponent({
  name: 'ChartNoFishingArea',
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
