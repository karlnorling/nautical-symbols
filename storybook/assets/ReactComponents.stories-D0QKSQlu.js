import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{f as r}from"./iframe-DmJR_N6r.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{a,c as o,i as s,l as c,n as l,r as u,s as d,t as f}from"./src-BmQqmNxF.js";var p,m,h;function g(){return(g=t((()=>{p=e(r()),a(),m=i(),h=({"aria-label":e,className:t,defaultDescription:n,defaultTitle:r,description:i=n,height:a,style:s,svg:l,title:u=r,width:d})=>{let f=c(p.useId()),h=o(l,{ariaLabel:e,description:i,height:a,instanceId:f,title:u,width:d});return(0,m.jsx)(`span`,{className:t,dangerouslySetInnerHTML:{__html:h},style:{display:`contents`,...s}})},h.__docgenInfo={description:"Renders a parsed symbol SVG inside a `display: contents` wrapper.\n\nIds are derived from `React.useId()`, so any number of instances of the\nsame symbol can share a page and still match between server and client.",methods:[],displayName:`SymbolSvg`,props:{className:{required:!1,tsType:{name:`string`},description:"CSS class forwarded to the wrapping `<span>`."},description:{required:!1,tsType:{name:`string`},description:"Accessible description injected as `<desc>` inside the SVG. Defaults to the symbol name.",defaultValue:{value:`defaultDescription`,computed:!1}},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Height applied to the `<svg>` element (pixels or any CSS length)."},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:"Inline styles forwarded to the wrapping `<span>`."},title:{required:!1,tsType:{name:`string`},description:"Accessible title injected as `<title>` inside the SVG. Defaults to the symbol name.",defaultValue:{value:`defaultTitle`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width applied to the `<svg>` element (pixels or any CSS length)."},"aria-label":{required:!1,tsType:{name:`string`},description:"Labels the `<svg>` directly, replacing its `aria-labelledby` title/description reference."},svg:{required:!0,tsType:{name:`ParsedSvg`},description:`The symbol's parsed SVG.`},defaultTitle:{required:!0,tsType:{name:`string`},description:"Title used when the `title` prop is omitted."},defaultDescription:{required:!0,tsType:{name:`string`},description:"Description used when the `description` prop is omitted."}}}})))()}var _,v,y;function b(){return(b=t((()=>{_=e(r()),a(),g(),v=i(),y=_.memo(({id:e,...t})=>{let n=l(e);return n?(0,v.jsx)(h,{...t,defaultDescription:n.description,defaultTitle:n.name,svg:d(n.svg)}):null}),y.displayName=`SymbolById`,y.__docgenInfo={description:`Renders any nautical symbol by slug ID.

Useful for data-driven rendering where the symbol ID comes from an API
response or user input rather than being known at compile time.

Returns \`null\` for unrecognised IDs so callers can handle missing symbols
gracefully without a try/catch.

@example
\`\`\`tsx
<SymbolById id="flag-alfa" width={64} />
\`\`\``,methods:[],displayName:`SymbolById`}})))()}var x=n({AllSymbols:()=>R,CardinalMarks:()=>P,ChartCanBuoyRed:()=>E,ChartSymbols:()=>k,Dangers:()=>L,FlagAlfa:()=>T,LateralMarks:()=>F,LetterFlags:()=>A,NatoNumberFlags:()=>M,NumberPennants:()=>j,SignalFlags:()=>O,SpecialPennants:()=>N,Topmarks:()=>I,UnknownId:()=>D,__namedExportsOrder:()=>z,default:()=>w}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{r(),b(),a(),S=i(),C=({size:e=96,category:t})=>{let n=t===`flags`||t===`chart`?s(t):t?u(t):f();return n.length===0?(0,S.jsxs)(`p`,{style:{color:`#888`,fontFamily:`sans-serif`},children:[`No symbols loaded. Run `,(0,S.jsx)(`code`,{children:`yarn update`}),` to populate symbol data.`]}):(0,S.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.75rem`,padding:`1rem`,alignItems:`flex-start`},children:n.map(t=>(0,S.jsxs)(`div`,{title:`${t.code} — ${t.name}`,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.25rem`,width:e+16},children:[(0,S.jsx)(y,{id:t.id,width:e,height:e}),(0,S.jsx)(`span`,{style:{fontSize:`0.6rem`,textAlign:`center`,color:`#555`,lineHeight:1.2},children:t.code})]},t.id))})},w={title:`Nautical Symbols/React Components`,component:y,parameters:{layout:`centered`},argTypes:{id:{control:`text`},width:{control:`number`},height:{control:`number`},title:{control:`text`},description:{control:`text`}}},T={args:{id:`flag-alfa`,width:128}},E={args:{id:`chart-can-buoy-red`,width:128}},D={args:{id:`not-a-real-symbol`,width:128}},O={name:`Signal flags`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`flags`}),args:{size:96}},k={name:`Chart symbols`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`chart`}),args:{size:96}},A={name:`Letter flags`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`letter-flags`}),args:{size:96}},j={name:`ICS number pennants`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`number-pennants`}),args:{size:96}},M={name:`NATO number flags`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`nato-number-flags`}),args:{size:96}},N={name:`Answer pennant and substitutes`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`special-pennants`}),args:{size:96}},P={name:`Cardinal marks`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`cardinal-marks`}),args:{size:96}},F={name:`Lateral marks`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`lateral-marks`}),args:{size:96}},I={name:`Topmarks`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`topmarks`}),args:{size:96}},L={name:`Rocks, wrecks and obstructions`,render:({size:e})=>(0,S.jsx)(C,{size:e,category:`dangers`}),args:{size:96}},R={name:`All Symbols`,render:({size:e})=>(0,S.jsx)(C,{size:e}),args:{size:96}},z=[`FlagAlfa`,`ChartCanBuoyRed`,`UnknownId`,`SignalFlags`,`ChartSymbols`,`LetterFlags`,`NumberPennants`,`NatoNumberFlags`,`SpecialPennants`,`CardinalMarks`,`LateralMarks`,`Topmarks`,`Dangers`,`AllSymbols`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'flag-alfa',
    width: 128
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chart-can-buoy-red',
    width: 128
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'not-a-real-symbol',
    width: 128
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Signal flags',
  render: ({
    size
  }) => <SymbolGrid size={size} category="flags" />,
  args: {
    size: 96
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Chart symbols',
  render: ({
    size
  }) => <SymbolGrid size={size} category="chart" />,
  args: {
    size: 96
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Letter flags',
  render: ({
    size
  }) => <SymbolGrid size={size} category="letter-flags" />,
  args: {
    size: 96
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'ICS number pennants',
  render: ({
    size
  }) => <SymbolGrid size={size} category="number-pennants" />,
  args: {
    size: 96
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'NATO number flags',
  render: ({
    size
  }) => <SymbolGrid size={size} category="nato-number-flags" />,
  args: {
    size: 96
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Answer pennant and substitutes',
  render: ({
    size
  }) => <SymbolGrid size={size} category="special-pennants" />,
  args: {
    size: 96
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Cardinal marks',
  render: ({
    size
  }) => <SymbolGrid size={size} category="cardinal-marks" />,
  args: {
    size: 96
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Lateral marks',
  render: ({
    size
  }) => <SymbolGrid size={size} category="lateral-marks" />,
  args: {
    size: 96
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Topmarks',
  render: ({
    size
  }) => <SymbolGrid size={size} category="topmarks" />,
  args: {
    size: 96
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Rocks, wrecks and obstructions',
  render: ({
    size
  }) => <SymbolGrid size={size} category="dangers" />,
  args: {
    size: 96
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'All Symbols',
  render: ({
    size
  }) => <SymbolGrid size={size} />,
  args: {
    size: 96
  }
}`,...R.parameters?.docs?.source}}}})))()}export{B as a,O as i,T as n,x as r,k as t};