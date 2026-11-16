// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 3\"",
  body: "<path fill=\"#0047ab\" d=\"M0 0h5v3H0\"/><path fill=\"#fff\" d=\"M0 1h5v1H0\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Civil ensign of El Salvador (without coat of arms)";
const _description = "Civil ensign of El Salvador (without coat of arms). Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilElSalvadorPlain = defineComponent({
  name: 'EnsignCivilElSalvadorPlain',
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
