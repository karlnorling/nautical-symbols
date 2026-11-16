// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 600\"",
  body: "<path fill=\"#d21034\" d=\"M0 0h1000v600H0z\"/><path fill=\"#00209f\" d=\"M0 0h1000v300H0z\"/>",
  height: "600",
  width: "1000",
};
const _title = "Civil ensign of Haiti";
const _description = "Civil ensign of Haiti. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilHaiti = defineComponent({
  name: 'EnsignCivilHaiti',
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
