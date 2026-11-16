// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 6\"",
  body: "<path fill=\"#006747\" d=\"M0 0h10v6H0z\"/><circle cx=\"4.5\" cy=\"3\" r=\"2\" fill=\"#da291c\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Naval jack of Bangladesh";
const _description = "Naval jack of Bangladesh. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export const JackBangladesh = defineComponent({
  name: 'JackBangladesh',
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
