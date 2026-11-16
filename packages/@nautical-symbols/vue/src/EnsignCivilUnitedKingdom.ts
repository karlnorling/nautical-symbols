// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 60\"",
  body: "<clipPath id=\"ensign-civil-united-kingdom-a\"><path d=\"M0 0h65v35H0z\"/></clipPath><clipPath id=\"ensign-civil-united-kingdom-b\"><path d=\"M0 0v15h65v15h-5zm0 30v5h30V0h30z\"/></clipPath><path fill=\"#012169\" d=\"M0 0h120v60H0z\"/><path stroke=\"#fff\" stroke-width=\"6\" d=\"m0 0 60 30m0-30L0 30\" clip-path=\"url(#ensign-civil-united-kingdom-a)\"/><path stroke=\"#c8102e\" stroke-width=\"4\" d=\"m0 0 60 30m0-30L0 30\" clip-path=\"url(#ensign-civil-united-kingdom-b)\"/><path stroke=\"#fff\" stroke-width=\"10\" d=\"M0 15h65M30 0v35\"/><path stroke=\"#c8102e\" stroke-width=\"6\" d=\"M0 15h65M30 0v35\"/><path fill=\"#c8102e\" d=\"M0 30h60V0h60v60H0z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of United Kingdom";
const _description = "Civil ensign of United Kingdom. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export const EnsignCivilUnitedKingdom = defineComponent({
  name: 'EnsignCivilUnitedKingdom',
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
