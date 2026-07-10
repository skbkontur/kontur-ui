import{j as e}from"./index-DSU5k4bI.js";import{useMDXComponents as E}from"./index-DHoIkTbl.js";import{r as s,R as h}from"./index-Bk3ZmH4I.js";import{c as D,U as R,S as T}from"./index-BO_8CfHz.js";import{L as S}from"./Logos.docs.stories-ItJv7gAo.js";import"./iframe-7eGPDqS8.js";import"./index-Nwkb1jlR.js";import"./index-J3bWmEqI.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-sa0rRjVA.js";import"./toPropertyKey-B36dj_7n.js";const z=typeof window<"u"?s.useLayoutEffect:s.useEffect,I="​";function K(n){return n.nodeType===Node.DOCUMENT_NODE}function F(n){return n.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"adoptedStyleSheets"in n}const k=s.forwardRef(({color:n,size:o,style:t,"aria-hidden":c=!0,viewBoxSize:i=16,align:d="center",children:H,tabIndex:M,onKeyUp:u,onBlur:p,paths:L=[],...w},v)=>{const m=s.useRef(null),[l,x]=s.useState(!1);z(()=>{const r=m.current;if(!r||!r.attachShadow)return;const a=r.ownerDocument.createElement("span");r.append(a);try{const f=a.attachShadow({mode:"closed"});f.textContent=I}catch(f){console.error(f)}return()=>a.remove()},[m.current]);const C=s.useCallback(r=>{const a=r.currentTarget.getRootNode();!l&&r.key==="Tab"&&(K(a)||F(a))&&a.activeElement===r.currentTarget&&x(!0),u==null||u(r)},[l,u]),_=s.useCallback(r=>{l&&x(!1),p==null||p(r)},[l,p]),g=e.jsx("svg",{role:"img","aria-label":"ui-icons","data-tid":"Icon__root",ref:v,width:o||i,height:o||i,style:{fill:n??"currentColor",marginBottom:d==="none"||d==="center"?0:"-0.1875em",flexShrink:0,outline:l?void 0:"none",...d!=="center"?t:{}},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${i} ${i}`,"aria-hidden":c,tabIndex:M,onKeyUp:C,onBlur:_,...w,children:L.map((r,a)=>e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:r},a.toString()))});return d==="center"?e.jsxs("span",{"aria-hidden":c,style:{display:"inline-flex",alignItems:"center",...t},children:[e.jsx("span",{ref:m}),g]}):g});k.__docgenInfo={description:"",methods:[],displayName:"BaseIcon",props:{"aria-hidden":{defaultValue:{value:"true",computed:!1},required:!1},viewBoxSize:{defaultValue:{value:"16",computed:!1},required:!1},align:{defaultValue:{value:'"center"',computed:!1},required:!1},paths:{defaultValue:{value:"[]",computed:!1},required:!1}}};const b=(n,o)=>{const t=s.forwardRef((c,i)=>s.createElement(k,{paths:o,viewBoxSize:n,ref:i,...c}));return t.__KONTUR_ICON__=!0,t},G=b(16,["M7.376 1.592a.776.776 0 0 1 .02.835 4.5 4.5 0 0 0 6.178 6.178.776.776 0 0 1 .834.02c.238.159.405.475.293.828A6.5 6.5 0 1 1 6.547 1.3a.727.727 0 0 1 .83.293zm-1.14.894a5.501 5.501 0 1 0 7.278 7.278 5.5 5.5 0 0 1-7.278-7.278z"]),O=b(16,["M8 .5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z","M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z","M12.803 12.803a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z","M4.318 4.318a.5.5 0 0 1-.707 0L2.197 2.904a.5.5 0 0 1 .707-.707L4.318 3.61a.5.5 0 0 1 0 .707z","M4 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z","M14.5 8a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z","M2.5 8a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z","M12.803 2.197a.5.5 0 0 1 0 .707L11.39 4.318a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z","M4.318 10.682a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z"]);let V="";const N=document.createElement("style");N.innerHTML=V;document.head.appendChild(N);const q=[{icon:h.createElement(O,null),caption:"Light",value:"LIGHT_THEME"},{icon:h.createElement(G,null),caption:"Dark",value:"DARK_THEME"}],y=({of:n})=>{const o=s.useContext(D);return n&&!o.componentStories().some(t=>t.title===n.default.title)&&o.referenceMeta(n,!0),s.useEffect(()=>{let t;try{if(t=new URL(window.parent.location.toString()),t.hash){const c=document.getElementById(decodeURIComponent(t.hash.substring(1)));c&&window.setTimeout(()=>{const d=c.getBoundingClientRect().top+window.scrollY+-65;window.scrollTo({top:d,behavior:"smooth"})},2e3)}}catch{}}),q.find(t=>t.value===o.store.userGlobals.globals.theme),h.createElement(h.Fragment,null)};y.__docgenInfo={description:"",methods:[],displayName:"Meta",props:{of:{required:!1,tsType:{name:"ModuleExports"},description:""}}};function j(n){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...E(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{of:S}),`
`,e.jsx(R,{children:e.jsx("aside",{style:{padding:"12px 16px",margin:"0 0 16px",background:"#fff8e1",borderLeft:"4px solid #ffb300",borderRadius:"4px",fontSize:"16px",lineHeight:"24px"},children:e.jsxs(o.p,{children:["Пакет устарел и заменен на ",e.jsx("code",{children:"CdnLogo"})," из ",e.jsx("code",{children:"@skbkontur/ui-cdn-components"}),` (
`,e.jsx("a",{href:"#/ui-cdn-components/cdnlogo",children:"CdnLogo"}),")."]})})}),`
`,e.jsx(o.p,{children:"NPM-пакет для доступа к иконкам из общей Figma-библиотеки Kontur.Logos"}),`
`,e.jsx(o.h2,{id:"установка",children:"Установка"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-bash",children:`npm i @skbkontur/logos
`})}),`
`,e.jsx(o.h2,{id:"логотипы-продуктов-контура",children:"Логотипы продуктов Контура"}),`
`,e.jsxs(o.p,{children:["Используются с компонентом ",e.jsx(o.code,{children:"Logotype"})," из пакета ",e.jsx(o.code,{children:"@skbkontur/react-ui-addons"})," (",e.jsx(o.a,{href:"#/react-ui-addons/Logotype",children:"Logotype/readme"}),")."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { Kontur } from "@skbkontur/logos/Kontur";
import { Extern } from "@skbkontur/logos/Extern";
import { Logotype } from "@skbkontur/react-ui-addons";

<Logotype konturLogo={<Kontur />} productLogo={<Extern />} />;
`})}),`
`,e.jsx(o.h2,{id:"пропы",children:"Пропы"}),`
`,e.jsxs(o.p,{children:["В некоторых логотипах по-умолчанию установлены фирменные цвета. Но их можно переопределить через проп ",e.jsx(o.code,{children:"color"}),"."]}),`
`,e.jsxs(o.p,{children:["Размер можно изменять пропом ",e.jsx(o.code,{children:"size"}),". Его значение будет соответствовать высоте лого. По-умолчанию для всех лого это ",e.jsx(o.code,{children:"24px"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`props: {
  color: string;
  size: number;
}
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { Kontur } from "@skbkontur/logos/Kontur";

<div>
  <Kontur color="black" size={32} />
  <Kontur color="gray" size={28} />
  <Kontur color="lightgray" />
</div>;
`})}),`
`,e.jsx(o.h2,{id:"локализация",children:"Локализация"}),`
`,e.jsxs(o.p,{children:["На данный момент локализация через ",e.jsx(o.code,{children:"LocaleContext"})," ",e.jsx(o.strong,{children:"не"})," поддерживается и логотипы нужно менять самостоятельно."]}),`
`,e.jsxs(o.p,{children:["Не все продуктовые логотипы имеют английскую или русскую версию. У английских версий в названии присутствует постфикс ",e.jsx(o.code,{children:"EN"}),". Такие логотипы рекомендуется использовать совместно с ",e.jsx(o.code,{children:"KonturEN"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { Kontur } from "@skbkontur/logos/Kontur";
import { KonturEN } from "@skbkontur/logos/KonturEN";
import { Focus } from "@skbkontur/logos/Focus";
import { FocusEN } from "@skbkontur/logos/FocusEN";
import { Diadoc } from "@skbkontur/logos/Diadoc";
import { DiadocEN } from "@skbkontur/logos/DiadocEN";
import { Gapped } from "@skbkontur/react-ui";

<Gapped vertical gap={8}>
  <Gapped gap={8}>
    <Kontur />
    ➜
    <KonturEN />
  </Gapped>
  <Gapped gap={8}>
    <Focus />
    ➜
    <FocusEN />
  </Gapped>
  <Gapped gap={8}>
    <Diadoc />
    ➜
    <DiadocEN />
  </Gapped>
</Gapped>;
`})}),`
`,e.jsxs(o.p,{children:["Смотреть в ",e.jsx(o.a,{href:"https://guides.kontur.ru/re/sources/logos/",rel:"nofollow",children:"гайде"})]}),`
`,e.jsx(T,{title:"",includePrimary:!0})]})}function oe(n={}){const{wrapper:o}={...E(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(j,{...n})}):j(n)}export{oe as default};
