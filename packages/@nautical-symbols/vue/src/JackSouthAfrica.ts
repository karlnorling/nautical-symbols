// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90 60\"",
  body: "<title>Flag of South Africa</title><defs><clipPath id=\"jack-south-africa-b\"><path d=\"m0 0 45 30L0 60z\"/></clipPath><clipPath id=\"jack-south-africa-a\"><path d=\"M0 0h90v60H0z\"/></clipPath></defs><path fill=\"#e03c31\" d=\"M0 0h90v30H45z\"/><path fill=\"#001489\" d=\"M0 60h90V30H45z\"/><g fill=\"none\" clip-path=\"url(#jack-south-africa-a)\"><path stroke=\"#fff\" stroke-width=\"20\" d=\"M90 30H45L0 0v60l45-30\"/><path fill=\"#000\" stroke=\"#ffb81c\" stroke-width=\"20\" d=\"m0 0 45 30L0 60\" clip-path=\"url(#jack-south-africa-b)\"/><path stroke=\"#007749\" stroke-width=\"12\" d=\"m0 0 45 30h45M0 60l45-30\"/></g>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of South Africa";
const _description = "Naval jack of South Africa. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export const JackSouthAfrica = defineComponent({
  name: 'JackSouthAfrica',
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
