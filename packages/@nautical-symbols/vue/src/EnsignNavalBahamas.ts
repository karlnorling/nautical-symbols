// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path fill=\"#c00\" d=\"M0 0h600v300H0z\"/><path fill=\"#fff\" d=\"M320 0h280v130H320zM0 170h280v130H0zm320 0h280v130H320z\"/><path fill=\"#00778b\" d=\"M0 0h280v130H0z\"/><path fill=\"#ffc72c\" d=\"M0 43.333h280v43.334H0z\"/><path d=\"m0 0 121.333 65.04L0 130z\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of the Bahamas";
const _description = "Naval ensign of the Bahamas. Flown at the stern by warships and other state vessels.";

export const EnsignNavalBahamas = defineComponent({
  name: 'EnsignNavalBahamas',
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
