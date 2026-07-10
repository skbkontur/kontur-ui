import{j as e}from"./jsx-runtime-wTqLqomF.js";import{C as s,B as f,a as k}from"./CdnIcon-Ct2KsfxA.js";import{G as d}from"./Gapped-BXpVHwpM.js";const N={title:"CdnIcon",parameters:{creevey:{skip:!0}}},i=()=>e.jsx(e.Fragment,{children:e.jsx(s,{size:64,weight:"regular",icon:"animal-paw"})});i.storyName="Пример иконки";const r=()=>e.jsxs(d,{vertical:!0,gap:16,children:[e.jsxs("div",{children:["Иконка в тексте ",e.jsx(s,{icon:"animal-paw"})]}),e.jsx(f,{size:"small",icon:e.jsx(s,{icon:"animal-paw",size:16}),children:"Иконка в кнопке"})]});r.storyName="Иконка в тексте и кнопке";const a=()=>{const o=[14,16,20,24,32,64];return e.jsxs(d,{vertical:!0,children:[e.jsx("div",{children:o.map(n=>e.jsx(s,{icon:"doc",size:n,weight:"light"},n))}),e.jsx("div",{children:o.map(n=>e.jsx(s,{icon:"doc",size:n,weight:"regular"},n))}),e.jsx("div",{children:o.map(n=>e.jsx(s,{icon:"doc",size:n,weight:"solid"},n))})]})};a.storyName="Размеры и начертания";const c=()=>{const o={boxShadow:"inset 0 0 0 1px cyan"},n={boxShadow:"inset 0 0 0 1px cyan",display:"inline-block",width:150,height:70,textAlign:"center"};return e.jsxs(d,{vertical:!0,children:[e.jsxs("div",{style:n,children:[e.jsx("span",{children:"none"}),e.jsx(s,{style:o,icon:"doc",size:32,align:"none"})]}),e.jsxs("div",{style:n,children:[e.jsx("span",{children:"baseline"}),e.jsx(s,{style:o,icon:"doc",size:32,align:"baseline"})]}),e.jsxs("div",{style:n,children:[e.jsx("span",{children:"center"}),e.jsx(s,{style:o,icon:"doc",size:32,align:"center"})]})]})};c.storyName="Выравнивание";const t=()=>{const o=(n,_,b)=>`https://s.kontur.ru/common-v2/icons-ui/black/${n}/${n}-${_}-${b}.svg`;return e.jsx(k,{value:{getIconUrl:o},children:e.jsx(s,{icon:"doc",color:"red",embed:!0})})};t.storyName="CdnIconProvider";i.__docgenInfo={description:"",methods:[],displayName:"BaseExample"};r.__docgenInfo={description:"",methods:[],displayName:"InTextStory"};a.__docgenInfo={description:"",methods:[],displayName:"SizeCases"};c.__docgenInfo={description:"",methods:[],displayName:"AlignCases"};t.__docgenInfo={description:"",methods:[],displayName:"ProviderCase"};var l,p,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => <>
    <CdnIcon size={64} weight="regular" icon="animal-paw" />
  </>`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,u,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Gapped vertical gap={16}>
    <div>
      Иконка в тексте <CdnIcon icon="animal-paw" />
    </div>
    <Button size="small" icon={<CdnIcon icon="animal-paw" size={16} />}>
      Иконка в кнопке
    </Button>
  </Gapped>`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const sizes = [14, 16, 20, 24, 32, 64];
  return <Gapped vertical>
      <div>
        {sizes.map(size => <CdnIcon key={size} icon="doc" size={size} weight="light" />)}
      </div>
      <div>
        {sizes.map(size => <CdnIcon key={size} icon="doc" size={size} weight="regular" />)}
      </div>
      <div>
        {sizes.map(size => <CdnIcon key={size} icon="doc" size={size} weight="solid" />)}
      </div>
    </Gapped>;
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var I,C,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const styleIcon: CSSProperties = {
    boxShadow: "inset 0 0 0 1px cyan"
  };
  const styleWrapper: CSSProperties = {
    boxShadow: "inset 0 0 0 1px cyan",
    display: "inline-block",
    width: 150,
    height: 70,
    textAlign: "center"
  };
  return <Gapped vertical>
      <div style={styleWrapper}>
        <span>none</span>
        <CdnIcon style={styleIcon} icon="doc" size={32} align="none" />
      </div>
      <div style={styleWrapper}>
        <span>baseline</span>
        <CdnIcon style={styleIcon} icon="doc" size={32} align="baseline" />
      </div>
      <div style={styleWrapper}>
        <span>center</span>
        <CdnIcon style={styleIcon} icon="doc" size={32} align="center" />
      </div>
    </Gapped>;
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var j,S,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const getIconUrl: CdnIconContextType = (icon, size, type) => {
    return \`https://s.kontur.ru/common-v2/icons-ui/black/\${icon}/\${icon}-\${size}-\${type}.svg\`;
  };
  return <CdnIconProvider value={{
    getIconUrl
  }}>
      <CdnIcon icon={"doc" as IconsType} color="red" embed />
    </CdnIconProvider>;
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const P=["BaseExample","InTextStory","SizeCases","AlignCases","ProviderCase"],T=Object.freeze(Object.defineProperty({__proto__:null,AlignCases:c,BaseExample:i,InTextStory:r,ProviderCase:t,SizeCases:a,__namedExportsOrder:P,default:N},Symbol.toStringTag,{value:"Module"}));export{T as C};
