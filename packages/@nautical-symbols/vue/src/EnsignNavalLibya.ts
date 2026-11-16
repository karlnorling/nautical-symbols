// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1500 1000\"",
  body: "<path d=\"M0 0h1500v1000H0z\" style=\"fill:#2683ba;stroke:none\"/><path d=\"M0 0h750v500H0z\" style=\"fill:#239e46;stroke:none\"/><path d=\"M0 0h750v375H0z\" style=\"fill:#000;stroke:none\"/><path d=\"M0 0h750v125H0z\" style=\"fill:#e70013;stroke:none\"/><path d=\"M419.2 205.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M405.4 250l84.1-27.3-52 71.5v-88.4l52 71.5z\" style=\"fill:#fff;stroke:none\"/><path d=\"m1104.924 316.143-4.106 233.378-3.194 179.084c-86.47-25.89-112.567-46.292-147.83-67.527l36.502-3.65-94.903-40.151c11.633 31.893 1.815 39.27 43.801 105.853v-45.627c52.603 56.132 99.91 75.204 147.83 98.553L1125 799.782l41.976-23.726c47.92-23.349 95.227-42.421 147.83-98.553v45.627c41.986-66.582 32.168-73.96 43.8-105.853l-94.902 40.15 36.501 3.65c-35.262 21.236-61.36 41.638-147.83 67.528l-3.193-179.084-4.107-233.378z\" style=\"fill:#fff;fill-opacity:1;stroke:#2683ba;stroke-opacity:1;stroke-width:3.5;stroke-miterlimit:4;stroke-dasharray:none\"/><path d=\"M1125 220.218c-29.72 0-54.095 24.375-54.095 54.094s24.375 54.095 54.095 54.095 54.095-24.375 54.095-54.095-24.376-54.094-54.095-54.094m0 27.376c14.924 0 26.719 11.794 26.719 26.718 0 14.925-11.795 26.72-26.72 26.72s-26.718-11.795-26.718-26.72 11.794-26.718 26.719-26.718\" style=\"font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000;fill:#fff;fill-opacity:1;stroke:none;stroke-width:11.71875;marker:none;visibility:visible;display:inline;overflow:visible;font-family:Sans;-inkscape-font-specification:Sans\"/><path d=\"M1103.784 283.178c-3.226.296-6.277 1.779-8.555 4.106-.804.665-10.597 8.242-19.848 17.68-9.55 9.743-20.096 23.134-25.893 40.38-5.797 17.245-6.176 38.451 3.878 60.797s29.761 45.753 63.079 70.606c27.798 20.736 49.556 40.196 61.253 57.49s14.207 30.174 6.844 45.968c-6.28 13.471-18.759 24.82-34.22 34.904l.57 32.167c24.135-13.227 46.622-30.035 58.517-55.55 11.447-24.557 5.98-50.722-9.011-72.888-14.993-22.166-38.74-42.631-67.528-64.105-30.855-23.017-47.084-43.237-54.523-59.77-7.44-16.534-6.86-29.363-2.966-40.95s11.786-21.893 19.62-29.886c7.833-7.992 14.149-12.093 19.505-17.452a13.74 13.74 0 0 0 3.08-15.17c-2.195-5.197-7.365-8.484-13.004-8.327-.276.009-.525-.026-.798 0zm-4.677 358.85c-18.103 8.395-35.621 16.479-49.733 26.92-11.414 8.446-21.281 19.875-24.068 33.878a500 500 0 0 0 26.692 10.722 13 13 0 0 0-.114-1.939c-.413-7.386 3.157-12.853 13.688-20.646 8.16-6.038 19.813-12.14 33.079-18.479l.57-30.455c-.03.014-.084-.014-.115 0z\" style=\"fill:#fff;fill-opacity:1;stroke:#2683ba;stroke-opacity:1;stroke-width:3.5;stroke-miterlimit:4;stroke-dasharray:none\"/><path d=\"m1104.924 316.143-4.106 233.378-3.194 179.084c-86.47-25.89-112.567-46.292-147.83-67.527l36.502-3.65-94.903-40.151c11.633 31.893 1.815 39.27 43.801 105.853v-45.627c52.603 56.132 99.91 75.204 147.83 98.553L1125 799.782l41.976-23.726c47.92-23.349 95.227-42.421 147.83-98.553v45.627c41.986-66.582 32.168-73.96 43.8-105.853l-94.902 40.15 36.501 3.65c-35.262 21.236-61.36 41.638-147.83 67.528l-3.193-179.084-4.107-233.378z\" style=\"fill:#fff;fill-opacity:1;stroke:#2683ba;stroke-opacity:1;stroke-width:3.5;stroke-miterlimit:4;stroke-dasharray:none\"/><path d=\"M1125 220.218c-29.72 0-54.095 24.375-54.095 54.094s24.375 54.095 54.095 54.095 54.095-24.375 54.095-54.095-24.376-54.094-54.095-54.094m0 27.376c14.924 0 26.719 11.794 26.719 26.718 0 14.925-11.795 26.72-26.72 26.72s-26.718-11.795-26.718-26.72 11.794-26.718 26.719-26.718\" style=\"font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000;fill:#fff;fill-opacity:1;stroke:none;stroke-width:11.71875;marker:none;visibility:visible;display:inline;overflow:visible;font-family:Sans;-inkscape-font-specification:Sans\"/><path d=\"M1103.784 283.178c-3.226.296-6.277 1.779-8.555 4.106-.804.665-10.597 8.242-19.848 17.68-9.55 9.743-20.096 23.134-25.893 40.38-5.797 17.245-6.176 38.451 3.878 60.797s29.761 45.753 63.079 70.606c27.798 20.736 49.556 40.196 61.253 57.49s14.207 30.174 6.844 45.968c-6.28 13.471-18.759 24.82-34.22 34.904l.57 32.167c24.135-13.227 46.622-30.035 58.517-55.55 11.447-24.557 5.98-50.722-9.011-72.888-14.993-22.166-38.74-42.631-67.528-64.105-30.855-23.017-47.084-43.237-54.523-59.77-7.44-16.534-6.86-29.363-2.966-40.95s11.786-21.893 19.62-29.886c7.833-7.992 14.149-12.093 19.505-17.452a13.74 13.74 0 0 0 3.08-15.17c-2.195-5.197-7.365-8.484-13.004-8.327-.276.009-.525-.026-.798 0zm-4.677 358.85c-18.103 8.395-35.621 16.479-49.733 26.92-11.414 8.446-21.281 19.875-24.068 33.878a500 500 0 0 0 26.692 10.722 13 13 0 0 0-.114-1.939c-.413-7.386 3.157-12.853 13.688-20.646 8.16-6.038 19.813-12.14 33.079-18.479l.57-30.455c-.03.014-.084-.014-.115 0z\" style=\"fill:#fff;fill-opacity:1;stroke:#2683ba;stroke-opacity:1;stroke-width:3.5;stroke-miterlimit:4;stroke-dasharray:none\"/>",
  height: "1000",
  width: "1500",
};
const _title = "Naval ensign of Libya";
const _description = "Naval ensign of Libya. Flown at the stern by warships and other state vessels.";

export const EnsignNavalLibya = defineComponent({
  name: 'EnsignNavalLibya',
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
