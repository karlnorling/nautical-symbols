// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1801.759 1101.76\" xml:space=\"preserve\" id=\"ensign-yacht-finland-svg2\" style=\"fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision\"",
  body: "<defs id=\"ensign-yacht-finland-defs4\"><style id=\"ensign-yacht-finland-style6\" type=\"text/css\">.str3{stroke:#000;stroke-width:15;stroke-linecap:round}.fil1{fill:none}</style></defs><path id=\"ensign-yacht-finland-path8-2\" d=\"M1802.562 0H-.318v1101.76h1802.88z\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke-width:1.76032;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision\"/><path id=\"ensign-yacht-finland-path861\" d=\"M500.482 0v400.64H-.318v120.192h620.992V0ZM680.77 0v520.832h1121.792V400.64h-1001.6V0ZM-.318 580.928V701.12h500.8v400.64h120.192V580.928Zm681.088 0v520.832h120.192V701.12h1001.6V580.928Z\" style=\"fill:#002f6c;fill-opacity:1;fill-rule:evenodd;stroke-width:.919297;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision\"/><g id=\"ensign-yacht-finland-g964\" transform=\"translate(-2397.748 -176.282)scale(1.76)\"><g id=\"ensign-yacht-finland-g922-9\" style=\"fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision\" transform=\"translate(1361.449 99.978)\"><circle id=\"ensign-yacht-finland-circle19-3\" cx=\"143\" cy=\"114\" r=\"67\" class=\"fil1\" style=\"stroke:#000;stroke-width:15\"/><path id=\"ensign-yacht-finland-path23-6\" d=\"m169 87-53 54\" class=\"fil1 str3\"/><path id=\"ensign-yacht-finland-path966\" d=\"m116 87 53 54\" class=\"fil1 str3\"/></g></g>",
  height: "1100",
  width: "1800",
};
const _title = "Yacht ensign of Finland";
const _description = "Yacht ensign of Finland. Flown at the stern by merchant and private vessels. The national flag with an added emblem.";

export const EnsignYachtFinland = defineComponent({
  name: 'EnsignYachtFinland',
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
