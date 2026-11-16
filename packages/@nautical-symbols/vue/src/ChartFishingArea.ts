// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"m1.981 92.381-1.425-4.95L28.92 70.044.18 52.344l1.425-4.95 31.9 19.812 12.05-7.437 6.075-3.663 6.35-3.1 6.713-2.325 6.937-1.687 7.013-1.025 7.112-.413 7.1.225 7.05.85 6.95 1.513 6.775 2.15 6.55 2.837 6.175 3.513 5.7 4.2 5.275 4.737 2.488 2.413-5.225 4.787-5.525 4.413-5.95 3.887-6.338 3.225-6.612 2.563-6.863 1.925-7 1.225-7.075.587-7.1-.1-7.075-.762-6.975-1.413-6.8-2.1-6.537-2.787-6.238-3.313-5.412-3.225-9.588-5.662zM38.47 70.044l8.862 5.662 6.238 3.4 6.4 3.025 6.662 2.413 6.863 1.837 7.012 1.163 7.05.25 6.913-.413-1.825-6.837-1.225-7.013-.15-7.075 1.225-6.962 1.95-6.838.012-.025-7.087-.062-7.075.212-7 .85-6.913 1.738-6.625 2.512-6.3 3.2-6.15 3.563-.675.425zm61.325 16.262 6.862-1.737 6.738-2.15 6.475-2.925 6.037-3.738 5.438-4.512 1.387-1.25-5.475-4.513-5.825-4.012-6.35-3.188-6.675-2.375-6.837-1.775-1.788-.425-2.262 6.725-1.1 7 .387 7.075 1.538 6.913zm15.925-20.562-.488 1.975-1.337 1.512-1.913.738-2.012-.238-1.688-1.15-.937-1.812v-2.025l.937-1.8 1.675-1.175 2.025-.25 1.913.737 1.337 1.513z\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "140",
  width: "140",
};
const _title = "Fishing area";
const _description = "Fishing area — INT 1 paper chart symbol";

export const ChartFishingArea = defineComponent({
  name: 'ChartFishingArea',
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
