import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{f as r}from"./iframe-DmJR_N6r.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{a,i as o,r as s,t as c}from"./src-BmQqmNxF.js";var l=n({AllSymbols:()=>D,CardinalMarks:()=>C,ChartSymbols:()=>v,Dangers:()=>E,LateralMarks:()=>w,LetterFlags:()=>y,NatoNumberFlags:()=>x,NumberPennants:()=>b,SignalFlags:()=>_,SingleIcon:()=>O,SpecialPennants:()=>S,Topmarks:()=>T,__namedExportsOrder:()=>k,default:()=>g}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{u=e(r()),a(),d=i(),f=()=>{let[e,t]=u.useState(``);return u.useEffect(()=>{fetch(`/nautical-symbols/storybook/assets/sprites/sprite.svg`).then(e=>e.text()).then(t).catch(()=>{})},[]),e?(0,d.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,width:0,height:0,overflow:`hidden`},dangerouslySetInnerHTML:{__html:e}}):null},p=({id:e,label:t,size:n=96})=>(0,d.jsxs)(`svg`,{width:n,height:n,role:`img`,"aria-label":t,style:{display:`block`},children:[(0,d.jsx)(`title`,{children:t}),(0,d.jsx)(`use`,{href:`#${e}`})]}),m=({size:e=96,category:t})=>{let n=t===`flags`||t===`chart`?o(t):t?s(t):c();return n.length===0?(0,d.jsxs)(`p`,{style:{color:`#888`,fontFamily:`sans-serif`},children:[`No symbols loaded. Run `,(0,d.jsx)(`code`,{children:`yarn update`}),` to populate symbol data.`]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`1.5rem`,padding:`1rem`},children:n.map(t=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.4rem`},children:[(0,d.jsx)(p,{id:t.code.toLowerCase(),label:t.name,size:e}),(0,d.jsx)(`span`,{style:{fontSize:`0.7rem`,textAlign:`center`,color:`#555`},children:t.code}),(0,d.jsx)(`span`,{style:{fontSize:`0.65rem`,textAlign:`center`,color:`#888`},children:t.name})]},t.id))})]})},h=({id:e,label:t,size:n})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(p,{id:e,label:t,size:n})]}),g={title:`Nautical Symbols/SVG Sprite`,component:m,parameters:{layout:`padded`},argTypes:{size:{control:{type:`number`,min:32,max:256,step:8}}}},_={name:`Signal flags`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`flags`}),args:{size:96}},v={name:`Chart symbols`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`chart`}),args:{size:96}},y={name:`Letter flags`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`letter-flags`}),args:{size:96}},b={name:`ICS number pennants`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`number-pennants`}),args:{size:96}},x={name:`NATO number flags`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`nato-number-flags`}),args:{size:96}},S={name:`Answer pennant and substitutes`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`special-pennants`}),args:{size:96}},C={name:`Cardinal marks`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`cardinal-marks`}),args:{size:96}},w={name:`Lateral marks`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`lateral-marks`}),args:{size:96}},T={name:`Topmarks`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`topmarks`}),args:{size:96}},E={name:`Rocks, wrecks and obstructions`,render:({size:e})=>(0,d.jsx)(m,{size:e,category:`dangers`}),args:{size:96}},D={name:`All Symbols`,render:({size:e})=>(0,d.jsx)(m,{size:e}),args:{size:96}},O={parameters:{layout:`centered`},render:e=>(0,d.jsx)(h,{...e}),args:{id:`flag-alfa`,label:`A (Alfa)`,size:200},argTypes:{id:{control:`text`,description:`Symbol code in lowercase, e.g. flag-alfa, pennant-1, substitute-1`},label:{control:`text`,description:`Accessible label`},size:{control:{type:`number`,min:32,max:512,step:8}}}},k=[`SignalFlags`,`ChartSymbols`,`LetterFlags`,`NumberPennants`,`NatoNumberFlags`,`SpecialPennants`,`CardinalMarks`,`LateralMarks`,`Topmarks`,`Dangers`,`AllSymbols`,`SingleIcon`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Signal flags',
  render: ({
    size
  }) => <SpriteGrid size={size} category="flags" />,
  args: {
    size: 96
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Chart symbols',
  render: ({
    size
  }) => <SpriteGrid size={size} category="chart" />,
  args: {
    size: 96
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Letter flags',
  render: ({
    size
  }) => <SpriteGrid size={size} category="letter-flags" />,
  args: {
    size: 96
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'ICS number pennants',
  render: ({
    size
  }) => <SpriteGrid size={size} category="number-pennants" />,
  args: {
    size: 96
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'NATO number flags',
  render: ({
    size
  }) => <SpriteGrid size={size} category="nato-number-flags" />,
  args: {
    size: 96
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Answer pennant and substitutes',
  render: ({
    size
  }) => <SpriteGrid size={size} category="special-pennants" />,
  args: {
    size: 96
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Cardinal marks',
  render: ({
    size
  }) => <SpriteGrid size={size} category="cardinal-marks" />,
  args: {
    size: 96
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Lateral marks',
  render: ({
    size
  }) => <SpriteGrid size={size} category="lateral-marks" />,
  args: {
    size: 96
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Topmarks',
  render: ({
    size
  }) => <SpriteGrid size={size} category="topmarks" />,
  args: {
    size: 96
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Rocks, wrecks and obstructions',
  render: ({
    size
  }) => <SpriteGrid size={size} category="dangers" />,
  args: {
    size: 96
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'All Symbols',
  render: ({
    size
  }) => <SpriteGrid size={size} />,
  args: {
    size: 96
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <SingleSpriteIcon {...args} />,
  args: {
    id: 'flag-alfa',
    label: 'A (Alfa)',
    size: 200
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Symbol code in lowercase, e.g. flag-alfa, pennant-1, substitute-1'
    },
    label: {
      control: 'text',
      description: 'Accessible label'
    },
    size: {
      control: {
        type: 'number',
        min: 32,
        max: 512,
        step: 8
      }
    }
  }
}`,...O.parameters?.docs?.source}}}})))()}export{O as a,_ as i,v as n,A as o,l as r,D as t};