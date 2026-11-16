// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-75 -40 160 80\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path fill=\"#fff\" d=\"M-75-40H85v80H-75z\"/><path fill=\"#01411c\" d=\"M-35-40H85v80H-35z\"/><g transform=\"translate(25)\"><circle r=\"24\" fill=\"#fff\"/><circle cx=\"-7\" cy=\"-40\" r=\"22\" fill=\"#01411c\" transform=\"rotate(-41.634 45 -40)\"/><g fill=\"#fff\" transform=\"rotate(-41.634 -8 -21.042)\"><g id=\"ensign-naval-pakistan-b\"><path id=\"ensign-naval-pakistan-a\" d=\"M0 0h-8v4z\" transform=\"rotate(18 4 25.255)\"/><use xlink:href=\"#ensign-naval-pakistan-a\" transform=\"scale(1 -1)\"/></g><use xlink:href=\"#ensign-naval-pakistan-b\" transform=\"rotate(72)\"/><use xlink:href=\"#ensign-naval-pakistan-b\" transform=\"rotate(-72)\"/><use xlink:href=\"#ensign-naval-pakistan-b\" transform=\"rotate(144)\"/><use xlink:href=\"#ensign-naval-pakistan-b\" transform=\"rotate(-144)\"/></g></g>",
  height: "600",
  width: "1200",
};
const _title = "Naval ensign of Pakistan";
const _description = "Naval ensign of Pakistan. Flown at the stern by warships and other state vessels.";

export const EnsignNavalPakistan = defineComponent({
  name: 'EnsignNavalPakistan',
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
