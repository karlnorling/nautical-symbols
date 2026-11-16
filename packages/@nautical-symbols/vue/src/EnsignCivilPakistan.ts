// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-75 -40 240 160\"",
  body: "<path fill=\"#d1081d\" d=\"M45-40h195v160H-75V40z\"/><path fill=\"#01411c\" d=\"M-75-40H45v80h-90z\"/><path fill=\"#fff\" d=\"M-75-40v80h30v-80z\"/><circle r=\"24\" fill=\"#fff\"/><circle cx=\"-7\" cy=\"-40\" r=\"22\" fill=\"#01411c\" transform=\"rotate(-41.634 45 -40)\"/><path fill=\"#fff\" d=\"m8.751-17.959 10.11 11.373L3.997-9.844l13.94-6.1-7.692 13.129z\"/>",
  height: "600",
  width: "900",
};
const _title = "Civil ensign of Pakistan";
const _description = "Civil ensign of Pakistan. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export const EnsignCivilPakistan = defineComponent({
  name: 'EnsignCivilPakistan',
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
