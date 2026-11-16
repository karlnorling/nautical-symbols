// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 300\"",
  body: "<path fill=\"#166c23\" d=\"M0 0h500v300H0z\"/><path fill=\"#fff\" d=\"M0 0h500v150H0z\"/>",
  height: "300",
  width: "500",
};
const _title = "Civil ensign of Saxony";
const _description = "Civil ensign of Saxony. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export const EnsignCivilSaxony = defineComponent({
  name: 'EnsignCivilSaxony',
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
