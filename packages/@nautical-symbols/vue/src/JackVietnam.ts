// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 20\"",
  body: "<path fill=\"#da251d\" d=\"M0 0h30v20H0z\"/><path fill=\"#ff0\" d=\"m15 4-3.53 10.85 9.24-6.7H9.29l9.24 6.7z\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of Vietnam";
const _description = "Naval jack of Vietnam. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export const JackVietnam = defineComponent({
  name: 'JackVietnam',
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
