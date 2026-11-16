// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 32\"",
  body: "<path fill=\"red\" d=\"M0 0h48v32H0z\"/><path fill=\"#fff\" d=\"M14 13h20v6H14z\"/><path fill=\"#fff\" d=\"M21 6h6v20h-6z\"/>",
  height: "1000",
  width: "1500",
};
const _title = "Civil ensign of Switzerland";
const _description = "Civil ensign of Switzerland. Flown at the stern by merchant and private vessels. The national flag in different proportions.";

export const EnsignCivilSwitzerland = defineComponent({
  name: 'EnsignCivilSwitzerland',
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
