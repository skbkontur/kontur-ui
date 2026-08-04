import{j as e}from"./jsx-runtime-wTqLqomF.js";import{I as i,G as b,B as t,a as v,b as c}from"./Gapped-CzLSiTPH.js";const B={title:"Icons",parameters:{creevey:{skip:!0}}},n=()=>e.jsxs(b,{gap:5,children:[e.jsx(t,{size:"large",icon:e.jsx(v,{}),children:"Создать"}),e.jsx(t,{size:"medium",icon:e.jsx(i,{}),children:"Создать"}),e.jsx(t,{icon:e.jsx(c,{}),children:"Создать"}),e.jsx(t,{icon:e.jsx(c,{size:12}),children:"Создать"})]});n.storyName="Размер иконки";const s=()=>e.jsxs(b,{gap:5,children:[e.jsx(t,{size:"medium",icon:e.jsx(i,{}),children:"Создать"}),e.jsx(t,{size:"medium",icon:e.jsx(i,{color:"red"}),children:"Создать"})]});s.storyName="Цвет иконки";const o=()=>{const r={boxShadow:"inset 0 0 0 1px cyan"},a={boxShadow:"inset 0 0 0 1px cyan",display:"inline-block",width:150,height:70,textAlign:"center"};return e.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column"},children:[e.jsxs("div",{style:a,children:[e.jsx("span",{children:"none"}),e.jsx(i,{style:r,align:"none"})]}),e.jsxs("div",{style:a,children:[e.jsx("span",{children:"baseline"}),e.jsx(i,{style:r,align:"baseline"})]}),e.jsxs("div",{style:a,children:[e.jsx("span",{children:"center"}),e.jsx(i,{style:r,align:"center"})]})]})};o.storyName="Выравнивание иконки";n.__docgenInfo={description:`В пакете иконок уже заложены базовые размеры. Всегда старайтесь использовать их. Выбирайте подходящие начертания и размер иконки под размер элемента, в котором она используется:

- Small — Light16
- Medium — Light20
- Large — Regular24

Если же этих размеров недостаточно, используйте ближайшую по значению иконку и масштабируйте её через проп \`size\`.`,methods:[],displayName:"ExampleIconSize"};s.__docgenInfo={description:"По умолчанию цвет иконки наследуется от ближайшего родителя, у которого явно задан аттрибут `color`. Переопределить цввет можно через проп `color`.",methods:[],displayName:"ExampleIconColor"};o.__docgenInfo={description:"Проп `align` задаёт выравнивание иконки.",methods:[],displayName:"ExampleIconAlign"};var l,p,d,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Gapped gap={5}>
      <Button size="large" icon={<IconPlusRegular24 />}>
        Создать
      </Button>
      <Button size="medium" icon={<IconPlusLight20 />}>
        Создать
      </Button>
      <Button icon={<IconPlusLight16 />}>Создать</Button>
      <Button icon={<IconPlusLight16 size={12} />}>Создать</Button>
    </Gapped>;
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:`В пакете иконок уже заложены базовые размеры. Всегда старайтесь использовать их. Выбирайте подходящие начертания и размер иконки под размер элемента, в котором она используется:

- Small — Light16
- Medium — Light20
- Large — Regular24

Если же этих размеров недостаточно, используйте ближайшую по значению иконку и масштабируйте её через проп \`size\`.`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var x,g,y,h,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Gapped gap={5}>
      <Button size="medium" icon={<IconPlusLight20 />}>
        Создать
      </Button>
      <Button size="medium" icon={<IconPlusLight20 color="red" />}>
        Создать
      </Button>
    </Gapped>;
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"По умолчанию цвет иконки наследуется от ближайшего родителя, у которого явно задан аттрибут `color`. Переопределить цввет можно через проп `color`.",...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.description}}};var j,S,z,L,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
  return <div style={{
    display: "flex",
    gap: "16px",
    flexDirection: "column"
  }}>
      <div style={styleWrapper}>
        <span>none</span>
        <IconPlusLight20 style={styleIcon} align="none" />
      </div>
      <div style={styleWrapper}>
        <span>baseline</span>
        <IconPlusLight20 style={styleIcon} align="baseline" />
      </div>
      <div style={styleWrapper}>
        <span>center</span>
        <IconPlusLight20 style={styleIcon} align="center" />
      </div>
    </div>;
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:"Проп `align` задаёт выравнивание иконки.",...(P=(L=o.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};const f=["ExampleIconSize","ExampleIconColor","ExampleIconAlign"],w=Object.freeze(Object.defineProperty({__proto__:null,ExampleIconAlign:o,ExampleIconColor:s,ExampleIconSize:n,__namedExportsOrder:f,default:B},Symbol.toStringTag,{value:"Module"}));export{w as I};
