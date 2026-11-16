// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"",
  body: "<path fill=\"#fff\" d=\"M0 0h1200v600H0z\"/><svg width=\"960\" height=\"360\" x=\"120\" y=\"120\"><clipPath id=\"jack-civil-united-kingdom-a\"><path d=\"M480 180h480v180zv180H0zH0V0zV0h480z\"/></clipPath><path fill=\"#012169\" d=\"M0 0h960v360H0z\"/><path stroke=\"#fff\" stroke-width=\"72\" d=\"m0 0 960 360m0-360L0 360\"/><path stroke=\"#c8102e\" stroke-width=\"48\" d=\"m0 0 960 360m0-360L0 360\" clip-path=\"url(#jack-civil-united-kingdom-a)\"/><path stroke=\"#fff\" stroke-width=\"120\" d=\"M480 0v360M0 180h960\"/><path stroke=\"#c8102e\" stroke-width=\"72\" d=\"M480 0v360M0 180h960\"/></svg>",
  height: "600",
  width: "1200",
};
const _title = "Civil jack of the United Kingdom";
const _description = "Civil jack of the United Kingdom. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export const JackCivilUnitedKingdom = defineComponent({
  name: 'JackCivilUnitedKingdom',
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
