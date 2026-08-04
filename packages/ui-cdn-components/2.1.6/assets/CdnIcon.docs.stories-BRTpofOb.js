import{j as e}from"./jsx-runtime-wTqLqomF.js";import{C as n,B as J,a as K}from"./CdnIcon-Ct2KsfxA.js";import{G as p}from"./Gapped-BXpVHwpM.js";const Q={title:"CdnIcon",parameters:{creevey:{skip:!0}}},l=()=>e.jsx(n,{size:64,weight:"regular",icon:"animal-paw"});l.storyName="Базовый пример";const a=()=>e.jsxs(p,{vertical:!0,gap:16,children:[e.jsxs("div",{children:["Иконка в тексте ",e.jsx(n,{icon:"animal-paw"})]}),e.jsx(J,{size:"small",icon:e.jsx(n,{icon:"animal-paw",size:16}),children:"Иконка в кнопке"})]});a.storyName="Иконка в тексте и кнопке";const o=()=>e.jsx(n,{size:64,weight:"regular",url:"https://s.kontur.ru/common-v2/icons-ui/black/animal-paw/animal-paw-64-regular.svg"});o.storyName="Получение иконки по URL";const i=()=>e.jsx(n,{size:64,weight:"regular",url:"animal-paw"});i.storyName="Фоллбек иконки";const t=()=>{const r=(s,D,H)=>`https://s.kontur.ru/common-v2/icons-ui/black/${s}/${s}-${D}-${H}.svg`;return e.jsx(K,{value:{getIconUrl:r},children:e.jsx(n,{icon:"doc",size:24,weight:"regular"})})};t.storyName="Переопределение URL";const c=()=>{const r=[14,16,20,24,32,64];return e.jsxs(p,{vertical:!0,children:[e.jsx("div",{children:r.map(s=>e.jsx(n,{icon:"doc",size:s,weight:"light"},s))}),e.jsx("div",{children:r.map(s=>e.jsx(n,{icon:"doc",size:s,weight:"regular"},s))}),e.jsx("div",{children:r.map(s=>e.jsx(n,{icon:"doc",size:s,weight:"solid"},s))})]})};c.storyName="Размеры и начертания";const d=()=>{const r={boxShadow:"inset 0 0 0 1px cyan"},s={boxShadow:"inset 0 0 0 1px cyan",display:"inline-block",width:150,height:70,textAlign:"center"};return e.jsxs(p,{vertical:!0,children:[e.jsxs("div",{style:s,children:[e.jsx("span",{children:"none"}),e.jsx(n,{style:r,icon:"doc",size:32,align:"none"})]}),e.jsxs("div",{style:s,children:[e.jsx("span",{children:"baseline"}),e.jsx(n,{style:r,icon:"doc",size:32,align:"baseline"})]}),e.jsxs("div",{style:s,children:[e.jsx("span",{children:"center"}),e.jsx(n,{style:r,icon:"doc",size:32,align:"center"})]})]})};d.storyName="Выравнивание";l.__docgenInfo={description:"",methods:[],displayName:"ExampleBasic"};a.__docgenInfo={description:"Иконка может размещаться в любом месте контента или внутри компонента. Если цвет иконки не задан явно, он будет наследоваться от ближайшего родителя.",methods:[],displayName:"ExampleInTextStory"};o.__docgenInfo={description:"Иконку можно задать по имени через проп `icon`, как в примерах выше. Либо передать прямой URL до картинки в проп `url`.",methods:[],displayName:"ExampleUrl"};i.__docgenInfo={description:"Если указать некорректный `url`, компонент не сможет загрузить нужное изображение и вместо него отобразит фоллбек-иконку — заглушку по умолчанию.",methods:[],displayName:"ExampleFallback"};t.__docgenInfo={description:"Компонент `<CdnIconProvider>` позволяет переопределить URL для получения иконки.\n\nЕсли используете собственную функцию `getIconUrl`, нормализуйте самостоятельно входные параметры — `size`, `weight`, `type`. В дефолтной реализации для этого используется внутренняя функция `getSafeParams`, которая приводит переданные значения к допустимому набору. Но так как функция не экспортируется из пакета, при кастомной реализации `getIconUrl` валидацию и нормализацию параметров нужно реализовать самостоятельно.",methods:[],displayName:"ExampleProviderCase"};c.__docgenInfo={description:"Проп `size` управляет размером иконки, а `weight` — начертанием.\n\nПри запросе иконки функция `getSafeParams` автоматически подбирает ближайший размер к переданному параметру `size`. Загруженный файл затем масштабируется до запрошенного размера.",methods:[],displayName:"ExampleSizeCases"};d.__docgenInfo={description:"Проп `align` задаёт выравнивание иконки.",methods:[],displayName:"ExampleAlignCases"};var m,g,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:'() => <CdnIcon size={64} weight="regular" icon="animal-paw" />',...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,y,h,v,z;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Gapped vertical gap={16}>
    <div>
      Иконка в тексте <CdnIcon icon="animal-paw" />
    </div>
    <Button size="small" icon={<CdnIcon icon="animal-paw" size={16} />}>
      Иконка в кнопке
    </Button>
  </Gapped>`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"Иконка может размещаться в любом месте контента или внутри компонента. Если цвет иконки не задан явно, он будет наследоваться от ближайшего родителя.",...(z=(v=a.parameters)==null?void 0:v.docs)==null?void 0:z.description}}};var I,w,C,j,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:'() => <CdnIcon size={64} weight="regular" url="https://s.kontur.ru/common-v2/icons-ui/black/animal-paw/animal-paw-64-regular.svg" />',...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Иконку можно задать по имени через проп `icon`, как в примерах выше. Либо передать прямой URL до картинки в проп `url`.",...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.description}}};var E,_,b,f,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:'() => <CdnIcon size={64} weight="regular" url="animal-paw" />',...(b=(_=i.parameters)==null?void 0:_.docs)==null?void 0:b.source},description:{story:"Если указать некорректный `url`, компонент не сможет загрузить нужное изображение и вместо него отобразит фоллбек-иконку — заглушку по умолчанию.",...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.description}}};var U,P,N,G,$;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const getIconUrl: CdnIconContextType = (icon, size, type) => {
    return \`https://s.kontur.ru/common-v2/icons-ui/black/\${icon}/\${icon}-\${size}-\${type}.svg\`;
  };
  return <CdnIconProvider value={{
    getIconUrl
  }}>
      <CdnIcon icon="doc" size={24} weight="regular" />
    </CdnIconProvider>;
}`,...(N=(P=t.parameters)==null?void 0:P.docs)==null?void 0:N.source},description:{story:"Компонент `<CdnIconProvider>` позволяет переопределить URL для получения иконки.\n\nЕсли используете собственную функцию `getIconUrl`, нормализуйте самостоятельно входные параметры — `size`, `weight`, `type`. В дефолтной реализации для этого используется внутренняя функция `getSafeParams`, которая приводит переданные значения к допустимому набору. Но так как функция не экспортируется из пакета, при кастомной реализации `getIconUrl` валидацию и нормализацию параметров нужно реализовать самостоятельно.",...($=(G=t.parameters)==null?void 0:G.docs)==null?void 0:$.description}}};var B,R,L,A,T;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(L=(R=c.parameters)==null?void 0:R.docs)==null?void 0:L.source},description:{story:"Проп `size` управляет размером иконки, а `weight` — начертанием.\n\nПри запросе иконки функция `getSafeParams` автоматически подбирает ближайший размер к переданному параметру `size`. Загруженный файл затем масштабируется до запрошенного размера.",...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.description}}};var W,F,O,M,q;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"Проп `align` задаёт выравнивание иконки.",...(q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:q.description}}};const V=["ExampleBasic","ExampleInTextStory","ExampleUrl","ExampleFallback","ExampleProviderCase","ExampleSizeCases","ExampleAlignCases"],ee=Object.freeze(Object.defineProperty({__proto__:null,ExampleAlignCases:d,ExampleBasic:l,ExampleFallback:i,ExampleInTextStory:a,ExampleProviderCase:t,ExampleSizeCases:c,ExampleUrl:o,__namedExportsOrder:V,default:Q},Symbol.toStringTag,{value:"Module"}));export{ee as C};
