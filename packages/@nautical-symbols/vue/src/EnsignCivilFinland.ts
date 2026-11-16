// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 11\"",
  body: "<path fill=\"#fff\" d=\"M0 0h18v11H0z\"/><path stroke=\"#002f6c\" stroke-width=\"3\" d=\"M0 5.5h18M6.5 0v11\"/>",
  height: "1100",
  width: "1800",
};
const _title = "Civil ensign of Finland";
const _description = "Civil ensign of Finland. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilFinland = defineComponent({
  name: 'EnsignCivilFinland',
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
