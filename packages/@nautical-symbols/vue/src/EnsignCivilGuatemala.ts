// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 960 600\"",
  body: "<path fill=\"#4997d0\" d=\"M0 0h960v600H0z\"/><path fill=\"#fff\" d=\"M320 0h320v600H320z\"/>",
  height: "600",
  width: "960",
};
const _title = "Civil ensign of Guatemala";
const _description = "Civil ensign of Guatemala. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilGuatemala = defineComponent({
  name: 'EnsignCivilGuatemala',
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
