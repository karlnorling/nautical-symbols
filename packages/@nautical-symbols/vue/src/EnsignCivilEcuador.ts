// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 400\"",
  body: "<path fill=\"#fd0\" d=\"M0 0h600v400H0z\"/><path fill=\"#034ea2\" d=\"M0 200h600v100H0z\"/><path fill=\"#ed1c24\" d=\"M0 300h600v100H0z\"/>",
  height: "400",
  width: "600",
};
const _title = "Civil ensign of Ecuador";
const _description = "Civil ensign of Ecuador. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilEcuador = defineComponent({
  name: 'EnsignCivilEcuador',
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
