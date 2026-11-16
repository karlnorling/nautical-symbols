// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3 2\"",
  body: "<path fill=\"#002b7f\" d=\"M0 0h3v2H0z\"/><path fill=\"#fcd116\" d=\"M1 0h2v2H1z\"/><path fill=\"#ce1126\" d=\"M2 0h1v2H2z\"/>",
  height: "400",
  width: "600",
};
const _title = "Civil ensign of Romania";
const _description = "Civil ensign of Romania. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilRomania = defineComponent({
  name: 'EnsignCivilRomania',
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
