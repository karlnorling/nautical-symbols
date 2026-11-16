// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 3\"",
  body: "<desc>Flag of Germany</desc><path d=\"M0 0h5v3H0z\"/><path fill=\"#d00\" d=\"M0 1h5v2H0z\"/><path fill=\"#ffce00\" d=\"M0 2h5v1H0z\"/>",
  height: "600",
  width: "1000",
};
const _title = "Civil ensign of Germany";
const _description = "Civil ensign of Germany. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilGermany = defineComponent({
  name: 'EnsignCivilGermany',
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
