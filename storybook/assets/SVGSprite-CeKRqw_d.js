import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-B4O8vZE2.js";import{c as i,i as a,n as o,s}from"./blocks-C8tMWsnz.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./SVGSprite.stories-CzTTxhy0.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:f}),`
`,(0,g.jsx)(t.h1,{id:`svg-sprite`,children:`SVG Sprite`}),`
`,(0,g.jsxs)(t.p,{children:[`A single `,(0,g.jsx)(t.code,{children:`sprite.svg`}),` contains all nautical symbols as `,(0,g.jsx)(t.code,{children:`<symbol>`}),` elements. Reference any symbol with `,(0,g.jsx)(t.code,{children:`<use href="#id">`}),` — one HTTP request serves every symbol.`]}),`
`,(0,g.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npm install @nautical-symbols/sprite
`})}),`
`,(0,g.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Approach`}),(0,g.jsx)(t.th,{children:`Best for`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`SVG sprite`})}),(0,g.jsx)(t.td,{children:`Plain HTML, no framework, single network request`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`React components`}),(0,g.jsx)(t.td,{children:`React/JSX — richer props, TypeScript, tree-shakeable`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`CSS sprite`}),(0,g.jsx)(t.td,{children:`Class-name driven usage, CMS output, no JavaScript`})]})]})]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(t.h3,{id:`external-file-reference-recommended`,children:`External file reference (recommended)`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-html`,children:`<svg width="64" height="64" role="img" aria-label="A (Alfa)">
  <title>A (Alfa)</title>
  <use href="/assets/sprites/sprite.svg#flag-alfa" />
</svg>
`})}),`
`,(0,g.jsx)(t.h3,{id:`inline-sprite`,children:`Inline sprite`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-html`,children:`<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<svg width="64" height="64" role="img" aria-label="A (Alfa)">
  <title>A (Alfa)</title>
  <use href="#flag-alfa" />
</svg>
`})}),`
`,(0,g.jsx)(t.h3,{id:`react-with-bundler-import`,children:`React with bundler import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import spriteUrl from '@nautical-symbols/sprite/sprite.svg';

<svg width={64} height={64} role="img" aria-label="A (Alfa)">
  <title>A (Alfa)</title>
  <use href={\`\${spriteUrl}#flag-alfa\`} />
</svg>
`})}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`symbol-id-pattern`,children:`Symbol ID pattern`}),`
`,(0,g.jsxs)(t.p,{children:[`Symbol IDs are the symbol codes: `,(0,g.jsx)(t.code,{children:`flag-alfa`}),`, `,(0,g.jsx)(t.code,{children:`chart-can-buoy-red`}),`, `,(0,g.jsx)(t.code,{children:`pennant-1`}),`, etc. Enumerate all IDs from `,(0,g.jsx)(t.code,{children:`sprite-ids.json`}),`:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-ts`,children:`import ids from '@nautical-symbols/sprite/sprite-ids.json';
`})}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`signal-flags`,children:`Signal flags`}),`
`,(0,g.jsx)(t.p,{children:`International Code of Signals letter flags, number pennants, NATO number flags, the answer pennant and the substitutes.`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`chart-symbols`,children:`Chart symbols`}),`
`,(0,g.jsx)(t.p,{children:`INT 1 paper-chart and ECDIS symbols: buoys, beacons, topmarks, lights, dangers and areas.`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`all-symbols`,children:`All symbols`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`single-icon-with-controls`,children:`Single icon with controls`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(a,{of:c})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};