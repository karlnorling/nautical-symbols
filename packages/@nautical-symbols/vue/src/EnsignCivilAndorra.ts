// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 700\"",
  body: "<path fill=\"#d0103a\" d=\"M0 0h1000v700H0z\"/><path fill=\"#fedf00\" d=\"M0 0h680v700H0z\"/><path fill=\"#0018a8\" d=\"M0 0h320v700H0z\"/>",
  height: "700",
  width: "1000",
};
const _title = "Civil ensign of Andorra";
const _description = "Civil ensign of Andorra. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilAndorra = defineComponent({
  name: 'EnsignCivilAndorra',
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
