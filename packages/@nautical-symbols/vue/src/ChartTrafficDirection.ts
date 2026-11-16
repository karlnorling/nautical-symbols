// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 200\"",
  body: "<path d=\"m374.012 82.273-.009-35.43 88.632 53.067-88.556 53.247-.034-35.43-336.633.288-.047-35.455z\" style=\"fill:none;stroke:#a30075;stroke-width:4.375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1\"/>",
  height: "200",
  width: "500",
};
const _title = "Traffic direction";
const _description = "Traffic direction — INT 1 paper chart symbol";

export const ChartTrafficDirection = defineComponent({
  name: 'ChartTrafficDirection',
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
