import{j as o,M as t,U as d,S as i}from"./index-DucPVuvA.js";import{useMDXComponents as s}from"./index-uDG1oqxT.js";import{L as c}from"./Logos.docs.stories-YZPsQZgW.js";import"./iframe-CBHY7RwD.js";import"./index-YTOF1_EJ.js";import"./index-Boh3aX-1.js";import"./index-C2r-3Y3z.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function e(r){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{of:c}),`
`,o.jsx(d,{children:o.jsx("aside",{style:{padding:"12px 16px",margin:"0 0 16px",background:"#fff8e1",borderLeft:"4px solid #ffb300",borderRadius:"4px",fontSize:"16px",lineHeight:"24px"},children:o.jsxs(n.p,{children:["Пакет устарел и заменен на ",o.jsx("code",{children:"CdnLogo"})," из ",o.jsx("code",{children:"@skbkontur/ui-cdn-components"}),` (
`,o.jsx("a",{href:"#/ui-cdn-components/cdnlogo",children:"CdnLogo"}),")."]})})}),`
`,o.jsx(n.p,{children:"NPM-пакет для доступа к иконкам из общей Figma-библиотеки Kontur.Logos"}),`
`,o.jsx(n.h2,{id:"установка",children:"Установка"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-bash",children:`npm i @skbkontur/logos
`})}),`
`,o.jsx(n.h2,{id:"логотипы-продуктов-контура",children:"Логотипы продуктов Контура"}),`
`,o.jsxs(n.p,{children:["Используются с компонентом ",o.jsx(n.code,{children:"Logotype"})," из пакета ",o.jsx(n.code,{children:"@skbkontur/react-ui-addons"})," (",o.jsx(n.a,{href:"#/react-ui-addons/Logotype",children:"Logotype/readme"}),")."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`import { Kontur } from "@skbkontur/logos/Kontur";
import { Extern } from "@skbkontur/logos/Extern";
import { Logotype } from "@skbkontur/react-ui-addons";

<Logotype konturLogo={<Kontur />} productLogo={<Extern />} />;
`})}),`
`,o.jsx(n.h2,{id:"пропы",children:"Пропы"}),`
`,o.jsxs(n.p,{children:["В некоторых логотипах по-умолчанию установлены фирменные цвета. Но их можно переопределить через проп ",o.jsx(n.code,{children:"color"}),"."]}),`
`,o.jsxs(n.p,{children:["Размер можно изменять пропом ",o.jsx(n.code,{children:"size"}),". Его значение будет соответствовать высоте лого. По-умолчанию для всех лого это ",o.jsx(n.code,{children:"24px"}),"."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-js",children:`props: {
  color: string;
  size: number;
}
`})}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`import { Kontur } from "@skbkontur/logos/Kontur";

<div>
  <Kontur color="black" size={32} />
  <Kontur color="gray" size={28} />
  <Kontur color="lightgray" />
</div>;
`})}),`
`,o.jsx(n.h2,{id:"локализация",children:"Локализация"}),`
`,o.jsxs(n.p,{children:["На данный момент локализация через ",o.jsx(n.code,{children:"LocaleContext"})," ",o.jsx(n.strong,{children:"не"})," поддерживается и логотипы нужно менять самостоятельно."]}),`
`,o.jsxs(n.p,{children:["Не все продуктовые логотипы имеют английскую или русскую версию. У английских версий в названии присутствует постфикс ",o.jsx(n.code,{children:"EN"}),". Такие логотипы рекомендуется использовать совместно с ",o.jsx(n.code,{children:"KonturEN"}),"."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`import { Kontur } from "@skbkontur/logos/Kontur";
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
`,o.jsx(i,{title:"",includePrimary:!0}),`
`,o.jsxs(n.p,{children:["Смотреть в ",o.jsx(n.a,{href:"https://guides.kontur.ru/re/sources/logos/",rel:"nofollow",children:"гайде"})]})]})}function k(r={}){const{wrapper:n}={...s(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(e,{...r})}):e(r)}export{k as default};
