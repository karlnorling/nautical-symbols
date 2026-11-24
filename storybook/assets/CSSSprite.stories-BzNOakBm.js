import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-BkUPCq91.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{a as i,d as a,i as o,r as s,t as c}from"./src-CWnghI4G.js";function l(e){return`nautical-`+(e.replace(/\\/g,`/`).split(`/`).pop()??``).replace(/\.svg$/i,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)}var u,d;function f(){return(f=e((()=>{i(),u=Object.fromEntries(a.map(e=>[e.id,l(e.assets.svg)])),d=e=>u[e]})))()}var p=t({AllSymbols:()=>M,CardinalMarks:()=>O,ChartSymbols:()=>b,CivilEnsigns:()=>T,Dangers:()=>j,Ensigns:()=>y,Jacks:()=>D,LateralMarks:()=>k,LetterFlags:()=>x,NatoNumberFlags:()=>C,NavalEnsigns:()=>E,NumberPennants:()=>S,SignalFlags:()=>v,SpecialPennants:()=>w,Topmarks:()=>A,__namedExportsOrder:()=>N,default:()=>_}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),i(),f(),m=r(),h=({size:e})=>{let t=c().map(e=>{let t=d(e.id);return t?`.${t} { background-image: url('/nautical-symbols/storybook/assets/${e.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`:``}).filter(Boolean).join(`
`),n=`.nautical-icon { display: inline-block; width: ${e}px; height: ${e}px; }`;return(0,m.jsx)(`style`,{children:`${t}\n${n}`})},g=({size:e=96,category:t})=>{let n=t===`flags`||t===`ensigns`||t===`chart`?o(t):t?s(t):c();return n.length===0?(0,m.jsxs)(`p`,{style:{color:`#888`,fontFamily:`sans-serif`},children:[`No symbols loaded. Run `,(0,m.jsx)(`code`,{children:`yarn update`}),` to populate symbol data.`]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{size:e}),(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`1.5rem`,padding:`1rem`},children:n.map(e=>{let t=d(e.id)??``;return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.4rem`},children:[(0,m.jsx)(`span`,{className:`nautical-icon ${t}`,role:`img`,"aria-label":e.name,title:e.name}),(0,m.jsx)(`span`,{style:{fontSize:`0.7rem`,textAlign:`center`,color:`#555`},children:e.code}),(0,m.jsx)(`span`,{style:{fontSize:`0.65rem`,textAlign:`center`,color:`#888`},children:e.name})]},e.id)})})]})},_={title:`Nautical Symbols/CSS Sprite`,component:g,parameters:{layout:`padded`},argTypes:{size:{control:{type:`number`,min:32,max:256,step:8}}}},v={name:`Signal flags`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`flags`}),args:{size:96}},y={name:`Ensigns and jacks`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`ensigns`}),args:{size:96}},b={name:`Chart symbols`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`chart`}),args:{size:96}},x={name:`Letter flags`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`letter-flags`}),args:{size:96}},S={name:`ICS number pennants`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`number-pennants`}),args:{size:96}},C={name:`NATO number flags`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`nato-number-flags`}),args:{size:96}},w={name:`Answer pennant and substitutes`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`special-pennants`}),args:{size:96}},T={name:`Civil ensigns`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`civil-ensigns`}),args:{size:96}},E={name:`Naval and coast guard ensigns`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`naval-ensigns`}),args:{size:96}},D={name:`Jacks`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`jacks`}),args:{size:96}},O={name:`Cardinal marks`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`cardinal-marks`}),args:{size:96}},k={name:`Lateral marks`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`lateral-marks`}),args:{size:96}},A={name:`Topmarks`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`topmarks`}),args:{size:96}},j={name:`Rocks, wrecks and obstructions`,render:({size:e})=>(0,m.jsx)(g,{size:e,category:`dangers`}),args:{size:96}},M={name:`All Symbols`,render:({size:e})=>(0,m.jsx)(g,{size:e}),args:{size:96}},N=[`SignalFlags`,`Ensigns`,`ChartSymbols`,`LetterFlags`,`NumberPennants`,`NatoNumberFlags`,`SpecialPennants`,`CivilEnsigns`,`NavalEnsigns`,`Jacks`,`CardinalMarks`,`LateralMarks`,`Topmarks`,`Dangers`,`AllSymbols`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Signal flags',
  render: ({
    size
  }) => <CSSGrid size={size} category="flags" />,
  args: {
    size: 96
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Ensigns and jacks',
  render: ({
    size
  }) => <CSSGrid size={size} category="ensigns" />,
  args: {
    size: 96
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Chart symbols',
  render: ({
    size
  }) => <CSSGrid size={size} category="chart" />,
  args: {
    size: 96
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Letter flags',
  render: ({
    size
  }) => <CSSGrid size={size} category="letter-flags" />,
  args: {
    size: 96
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'ICS number pennants',
  render: ({
    size
  }) => <CSSGrid size={size} category="number-pennants" />,
  args: {
    size: 96
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'NATO number flags',
  render: ({
    size
  }) => <CSSGrid size={size} category="nato-number-flags" />,
  args: {
    size: 96
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Answer pennant and substitutes',
  render: ({
    size
  }) => <CSSGrid size={size} category="special-pennants" />,
  args: {
    size: 96
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Civil ensigns',
  render: ({
    size
  }) => <CSSGrid size={size} category="civil-ensigns" />,
  args: {
    size: 96
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Naval and coast guard ensigns',
  render: ({
    size
  }) => <CSSGrid size={size} category="naval-ensigns" />,
  args: {
    size: 96
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Jacks',
  render: ({
    size
  }) => <CSSGrid size={size} category="jacks" />,
  args: {
    size: 96
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Cardinal marks',
  render: ({
    size
  }) => <CSSGrid size={size} category="cardinal-marks" />,
  args: {
    size: 96
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Lateral marks',
  render: ({
    size
  }) => <CSSGrid size={size} category="lateral-marks" />,
  args: {
    size: 96
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Topmarks',
  render: ({
    size
  }) => <CSSGrid size={size} category="topmarks" />,
  args: {
    size: 96
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Rocks, wrecks and obstructions',
  render: ({
    size
  }) => <CSSGrid size={size} category="dangers" />,
  args: {
    size: 96
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'All Symbols',
  render: ({
    size
  }) => <CSSGrid size={size} />,
  args: {
    size: 96
  }
}`,...M.parameters?.docs?.source}}}})))()}export{P as a,v as i,p as n,b as r,M as t};