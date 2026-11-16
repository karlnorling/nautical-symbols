import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-B70VqAm_.js";import{c as i,s as a}from"./blocks-BNIJabqn.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Nautical Symbols/Assets & API`}),`
`,(0,c.jsx)(t.h1,{id:`assets--programmatic-api`,children:`Assets & Programmatic API`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@nautical-symbols/core`}),` package exposes typed data for all nautical symbols alongside helper functions for filtering and lookup. The `,(0,c.jsx)(t.code,{children:`@nautical-symbols/assets`}),` package provides pre-built image files at multiple resolutions.`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`npm install @nautical-symbols/core @nautical-symbols/assets
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`programmatic-api`,children:`Programmatic API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import {
  getAllSymbols,
  getSymbol,
  getSymbolsByCategory,
} from '@nautical-symbols/core';
`})}),`
`,(0,c.jsx)(t.h3,{id:`getallsymbols`,children:(0,c.jsx)(t.code,{children:`getAllSymbols()`})}),`
`,(0,c.jsx)(t.p,{children:`Returns all nautical symbols.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const all = getAllSymbols();
// → NauticalSymbol[]
`})}),`
`,(0,c.jsx)(t.h3,{id:`getsymbolid`,children:(0,c.jsx)(t.code,{children:`getSymbol(id)`})}),`
`,(0,c.jsx)(t.p,{children:`Look up a single symbol by its slug ID.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const alfa = getSymbol('flag-alfa');
// → NauticalSymbol | undefined

const canBuoy = getSymbol('chart-can-buoy-red');
`})}),`
`,(0,c.jsx)(t.h3,{id:`getsymbolsbycategorycategory`,children:(0,c.jsx)(t.code,{children:`getSymbolsByCategory(category)`})}),`
`,(0,c.jsxs)(t.p,{children:[`Filter symbols by category, or by group with `,(0,c.jsx)(t.code,{children:`getSymbolsByGroup`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const letters   = getSymbolsByCategory('letter-flags');
const pennants  = getSymbolsByCategory('number-pennants');
const cardinals = getSymbolsByCategory('cardinal-marks');
const flags     = getSymbolsByGroup('flags');
const chart     = getSymbolsByGroup('chart');
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsxs)(t.h2,{id:`nauticalsymbol-type`,children:[(0,c.jsx)(t.code,{children:`NauticalSymbol`}),` type`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`interface NauticalSymbol {
  id: string;          // e.g. 'flag-alfa'
  code: string;        // e.g. 'flag-alfa' (same as id)
  name: string;        // e.g. 'A (Alfa)'
  category: NauticalSymbolCategory;
  description: string; // accessible description
  svg: string;         // inline SVG markup
  assets: NauticalSymbolAssets;
}

interface NauticalSymbolAssets {
  svg: string;                    // relative path to original SVG
  png: Record<number, string>;    // size → relative path (240, 512, 768, 1024, 2048)
  jpg: Record<number, string>;    // same sizes
  webp: Record<number, string>;   // same sizes
}

type NauticalSymbolCategory = 'letter-flags' | 'number-pennants' | 'nato-number-flags' | 'special-pennants' | 'cardinal-marks' | 'lateral-marks' | 'isolated-danger-marks' | 'special-marks' | 'beacons' | 'topmarks' | 'lights' | 'dangers' | 'areas' | 'harbour' | 'other';
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`categories`,children:`Categories`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Category`}),(0,c.jsx)(t.th,{children:`Symbols`}),(0,c.jsx)(t.th,{children:`Group`}),(0,c.jsx)(t.th,{children:`Contents`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`letter-flags`})}),(0,c.jsx)(t.td,{children:`26`}),(0,c.jsx)(t.td,{children:`flags`}),(0,c.jsx)(t.td,{children:`ICS letter flags Alfa–Zulu, with single-flag meanings`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number-pennants`})}),(0,c.jsx)(t.td,{children:`10`}),(0,c.jsx)(t.td,{children:`flags`}),(0,c.jsx)(t.td,{children:`ICS numeral pennants 0–9`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`nato-number-flags`})}),(0,c.jsx)(t.td,{children:`10`}),(0,c.jsx)(t.td,{children:`flags`}),(0,c.jsx)(t.td,{children:`NATO numeral flags 0–9`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`special-pennants`})}),(0,c.jsx)(t.td,{children:`5`}),(0,c.jsx)(t.td,{children:`flags`}),(0,c.jsx)(t.td,{children:`Answer (code) pennant and the four substitutes`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`cardinal-marks`})}),(0,c.jsx)(t.td,{children:`24`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`North, east, south and west cardinal marks`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`lateral-marks`})}),(0,c.jsx)(t.td,{children:`124`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Red and green port / starboard buoys and beacons`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`isolated-danger-marks`})}),(0,c.jsx)(t.td,{children:`6`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Isolated danger marks`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`special-marks`})}),(0,c.jsx)(t.td,{children:`2`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Special marks (X-shaped topmark)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`beacons`})}),(0,c.jsx)(t.td,{children:`3`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Unpainted beacons and stakes`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`topmarks`})}),(0,c.jsx)(t.td,{children:`16`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Buoyage topmarks`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`lights`})}),(0,c.jsx)(t.td,{children:`8`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Light symbols and flares`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`dangers`})}),(0,c.jsx)(t.td,{children:`14`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Rocks, wrecks and obstructions`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`areas`})}),(0,c.jsx)(t.td,{children:`13`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Anchorage, fishing and traffic areas`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`harbour`})}),(0,c.jsx)(t.td,{children:`10`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Harbours, marinas, pilot stations, lock gates and offices`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`other`})}),(0,c.jsx)(t.td,{children:`2`}),(0,c.jsx)(t.td,{children:`chart`}),(0,c.jsx)(t.td,{children:`Diving sites`})]})]})]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`asset-files`,children:`Asset files`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@nautical-symbols/assets`}),` package ships pre-converted raster images at five resolutions in PNG, JPG, and WebP formats alongside the original SVGs.`]}),`
`,(0,c.jsx)(t.h3,{id:`directory-layout`,children:`Directory layout`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`assets/
  letter-flags/
    flag-alfa/
      flag-alfa.svg
      flag-alfa_240x240.png
      flag-alfa_512x512.png
      flag-alfa_768x768.png
      flag-alfa_1024x1024.png
      flag-alfa_2048x2048.png
      flag-alfa_240x240.jpg
      flag-alfa_240x240.webp
      …
  special-pennants/
    substitute-1/
      substitute-1.svg
      …
  cardinal-marks/
  lateral-marks/
  …
`})}),`
`,(0,c.jsx)(t.h3,{id:`resolve-asset-paths-via-the-api`,children:`Resolve asset paths via the API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import { getSymbol } from '@nautical-symbols/core';

const symbol = getSymbol('flag-alfa');
if (symbol) {
  console.log(symbol.assets.svg);       // 'letter-flags/flag-alfa/flag-alfa.svg'
  console.log(symbol.assets.png[512]);  // 'letter-flags/flag-alfa/flag-alfa_512x512.png'
  console.log(symbol.assets.webp[240]); // 'letter-flags/flag-alfa/flag-alfa_240x240.webp'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};