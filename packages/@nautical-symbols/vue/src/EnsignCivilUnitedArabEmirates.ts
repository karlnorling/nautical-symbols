// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1080 540\"",
  body: "<path fill=\"#c8102e\" d=\"M0 0h1080v540H0z\"/><path d=\"M0 0h537v267H0z\"/><path fill=\"#fff\" d=\"M0 0h537v176H0z\"/><path fill=\"#00843d\" d=\"M0 0h537v88H0z\"/><path fill=\"#c8102e\" d=\"M0 0h132v267H0z\"/><path fill=\"none\" stroke=\"#fff\" stroke-width=\"6\" d=\"M0 267h537V0\"/>",
  height: "540",
  width: "1080",
};
const _title = "Civil ensign of United Arab Emirates";
const _description = "Civil ensign of United Arab Emirates. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export const EnsignCivilUnitedArabEmirates = defineComponent({
  name: 'EnsignCivilUnitedArabEmirates',
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
