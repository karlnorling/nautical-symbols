// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path d=\"M0 0h600v300H0z\" style=\"opacity:1;fill:#ce1126;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.97836268;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:.99999998;stroke-opacity:1\"/><path d=\"M320 0v130h280V0zm0 170v130h280V170zM0 170v130h280V170z\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\"/><path d=\"M23.8 23.8h292.4v122.4H23.8z\" style=\"fill:#007a5e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"matrix(.8208 0 0 .7353 20.465 22.5)\"/><path d=\"M23.8 146.2 170 85l146.2 61.2zm0-122.4L170 85l146.2-61.2z\" style=\"fill:#fcd116;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"matrix(.8208 0 0 .7353 20.465 22.5)\"/><path d=\"M190.4 85c0-11.267-9.133-20.4-20.4-20.4s-20.4 9.133-20.4 20.4 9.133 20.4 20.4 20.4 20.4-9.133 20.4-20.4\" style=\"fill:#ce1126;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"translate(-10)\"/><path d=\"M152.215 79.222h13.588L170 66.3l4.197 12.922h13.588l-10.991 7.986 4.197 12.922-10.99-7.985-10.992 7.985 4.197-12.922z\" style=\"fill:#fcd116;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"translate(-10)\"/><path d=\"M62.885 17.76h8.029l2.48-7.636 2.48 7.637h8.029l-6.495 4.719 2.48 7.636-6.494-4.719-6.495 4.719 2.48-7.636zm86.288 0h8.03l2.48-7.636 2.48 7.637h8.028l-6.494 4.719 2.48 7.636-6.495-4.719-6.494 4.719 2.48-7.636zm86.289 0h8.028l2.48-7.636 2.48 7.637h8.03l-6.495 4.719 2.48 7.636-6.494-4.719-6.495 4.719 2.48-7.636zM62.885 146.443h8.029l2.48-7.637 2.48 7.637h8.029l-6.495 4.719 2.48 7.636-6.494-4.719-6.495 4.72 2.48-7.637zm86.288 0h8.03l2.48-7.637 2.48 7.637h8.028l-6.494 4.719 2.48 7.636-6.495-4.719-6.494 4.72 2.48-7.637zm86.289 0h8.028l2.48-7.637 2.48 7.637h8.03l-6.495 4.719 2.48 7.636-6.494-4.719-6.495 4.72 2.48-7.637z\" style=\"fill:#fcd116;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"translate(.318)\"/><path d=\"M48.59 85.23c2.553 4.755 7.518 9.93 11.854 11.748.07-4.825-1.644-11.014-3.986-15.944z\" style=\"fill:#ce1126;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"translate(18.85 12.196)scale(.86532)\"/><path d=\"M44.264 68.924c3.7 7.713-9.596 26.11 12.555 30.424-2.733-3.728-4.494-9.885-3.828-14.827 4.647 1.772 9.537 6.942 11.513 10.898 5.797-21.051-14.87-19.768-20.24-26.495\" style=\"fill:#fcd116;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"translate(18.85 12.196)scale(.86532)\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Grenada";
const _description = "Naval ensign of Grenada. Flown at the stern by warships and other state vessels.";

export const EnsignNavalGrenada = defineComponent({
  name: 'EnsignNavalGrenada',
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
