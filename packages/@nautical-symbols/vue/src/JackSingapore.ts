// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 54 36\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#fff\"",
  body: "<path d=\"M0 0h54v36H0z\"/><path fill=\"#ed2939\" d=\"M0 0h54v18H0z\"/><circle cx=\"11.405\" cy=\"9\" r=\"6.625\"/><circle cx=\"15.03\" cy=\"9\" r=\"7.25\" fill=\"#ed2939\"/><path id=\"jack-singapore-a\" d=\"m15.03 3.475-1.014 3.12 2.655-1.928h-3.282l2.655 1.929z\"/><g id=\"jack-singapore-b\"><use xlink:href=\"#jack-singapore-a\" transform=\"rotate(72 15.03 9)\"/><use xlink:href=\"#jack-singapore-a\" transform=\"rotate(216 15.03 9)\"/></g><use xlink:href=\"#jack-singapore-b\" transform=\"rotate(72 15.03 9)\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of Singapore";
const _description = "Naval jack of Singapore. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export const JackSingapore = defineComponent({
  name: 'JackSingapore',
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
