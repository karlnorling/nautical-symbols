// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1400 700\"",
  body: "<path fill=\"#060\" d=\"M0 0h1400v700H0z\"/><path fill=\"#fff\" d=\"M0 0h1400v500H0z\"/><path fill=\"#c00\" d=\"M0 0h1400v200H0z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of Tajikistan";
const _description = "Civil ensign of Tajikistan. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilTajikistan = defineComponent({
  name: 'EnsignCivilTajikistan',
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
