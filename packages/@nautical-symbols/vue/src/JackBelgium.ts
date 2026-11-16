// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path d=\"M0 0h200v600H0z\"/><path fill=\"#fae042\" d=\"M200 0h200v600H200z\"/><path fill=\"#ed2939\" d=\"M400 0h200v600H400z\"/>",
  height: "600",
  width: "600",
};
const _title = "Naval jack of Belgium";
const _description = "Naval jack of Belgium. Flown at the bow of naval vessels in harbour or at anchor. A square version of the national flag.";

export const JackBelgium = defineComponent({
  name: 'JackBelgium',
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
