import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-DmJR_N6r.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{a as i,d as a,i as o,r as s,t as c}from"./src-BmQqmNxF.js";function l(e){return`nautical-`+(e.replace(/\\/g,`/`).split(`/`).pop()??``).replace(/\.svg$/i,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)}var u,d;function f(){return(f=e((()=>{i(),u=Object.fromEntries(a.map(e=>[e.id,l(e.assets.svg)])),d=e=>u[e]})))()}var p=t({AllSymbols:()=>O,CardinalMarks:()=>w,ChartSymbols:()=>y,Dangers:()=>D,LateralMarks:()=>T,LetterFlags:()=>b,NatoNumberFlags:()=>S,NumberPennants:()=>x,SignalFlags:()=>v,SpecialPennants:()=>C,Topmarks:()=>E,__namedExportsOrder:()=>k,default:()=>_}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),i(),f(),m=r(),h=({size:e})=>{let t=c().map(e=>{let t=d(e.id);return t?`.${t} { background-image: url('/nautical-symbols/storybook/assets/${e.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`:``}).filter(Boolean).join(`
`),n=`.nautical-icon { display: inline-block; width: ${e}px; height: ${e}px; }`;return(0,m.jsx)(`style`,{children:`${t}\n${n}`})},g=({size:e=96,category:t})=>{let n=t===`flags`||t===`chart`?o(t):t?s(t):c();return n.length===0?(0,m.jsxs)(`p`,{style:{color:`#888`,fontFamily:`sans-serif`},children:[`No symbols loaded. Run `,(0,m.jsx)(`code`,{children:`yarn update`}),` to populate symbol data.`]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{size:e}),(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`1.5rem`,padding:`1rem`},children:n.map(e=>{let t=d(e.id)??``;return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.4rem`},children:[(0,m.jsx)(`span`,{className:`nautical-icon ${t}`,role:`img`,"aria-label":e.name,title:e.name}),(0,m.jsx)(`span`,{style:{fontSize:`0.7rem`,textAlign:`center`,color:`#555`},children:e.code}),(0,m.jsx)(`span`,{style:{fontSize:`0.65rem`,textAlign:`center`,color:`#888`},children:e.name})]},e.id)})})]})},_={title:`Nautical Symbols/CSS Sprite`,component:g,parameters:{layout:`padded`},argTypes:{size:{control:{type:`number`,min:32,max:256,step:8}}}},v={name:`Signal flags`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`flags`}),args:{size:96}},y={name:`Chart symbols`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`chart`}),args:{size:96}},b={name:`Letter flags`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`letter-flags`}),args:{size:96}},x={name:`ICS number pennants`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`number-pennants`}),args:{size:96}},S={name:`NATO number flags`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`nato-number-flags`}),args:{size:96}},C={name:`Answer pennant and substitutes`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`special-pennants`}),args:{size:96}},w={name:`Cardinal marks`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`cardinal-marks`}),args:{size:96}},T={name:`Lateral marks`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`lateral-marks`}),args:{size:96}},E={name:`Topmarks`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`topmarks`}),args:{size:96}},D={name:`Rocks, wrecks and obstructions`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`dangers`}),args:{size:96}},O={name:`All Symbols`,render:({size:e})=>(0,m.jsx)(g,{size:e}),args:{size:96}},k=[`SignalFlags`,`ChartSymbols`,`LetterFlags`,`NumberPennants`,`NatoNumberFlags`,`SpecialPennants`,`CardinalMarks`,`LateralMarks`,`Topmarks`,`Dangers`,`AllSymbols`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Signal flags',
  render: ({
    size
  }) => <CSSGrid size={size} category="flags" />,
  args: {
    size: 96
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Chart symbols',
  render: ({
    size
  }) => <CSSGrid size={size} category="chart" />,
  args: {
    size: 96
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Letter flags',
  render: ({
    size
  }) => <CSSGrid size={size} category="letter-flags" />,
  args: {
    size: 96
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'ICS number pennants',
  render: ({
    size
  }) => <CSSGrid size={size} category="number-pennants" />,
  args: {
    size: 96
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'NATO number flags',
  render: ({
    size
  }) => <CSSGrid size={size} category="nato-number-flags" />,
  args: {
    size: 96
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Answer pennant and substitutes',
  render: ({
    size
  }) => <CSSGrid size={size} category="special-pennants" />,
  args: {
    size: 96
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Cardinal marks',
  render: ({
    size
  }) => <CSSGrid size={size} category="cardinal-marks" />,
  args: {
    size: 96
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Lateral marks',
  render: ({
    size
  }) => <CSSGrid size={size} category="lateral-marks" />,
  args: {
    size: 96
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Topmarks',
  render: ({
    size
  }) => <CSSGrid size={size} category="topmarks" />,
  args: {
    size: 96
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Rocks, wrecks and obstructions',
  render: ({
    size
  }) => <CSSGrid size={size} category="dangers" />,
  args: {
    size: 96
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'All Symbols',
  render: ({
    size
  }) => <CSSGrid size={size} />,
  args: {
    size: 96
  }
}`,...O.parameters?.docs?.source}}}})))()}export{A as a,v as i,p as n,y as r,O as t};