import{j as n}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as r}from"./index-uDG1oqxT.js";import{M as s,S as o}from"./index-CWeP5fdu.js";import{C as i}from"./CdnProductIcon.docs.stories-wiDQaMWQ.js";import"./index-YTOF1_EJ.js";import"./iframe-BGo_Lkw3.js";import"./index-Boh3aX-1.js";import"./index-C2r-3Y3z.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function c(e){const d={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:i}),`
`,n.jsxs(d.p,{children:["Иконки продуктов Контура с сервера статики (",n.jsx(d.a,{href:"https://s.kontur.ru/common-v2/",rel:"nofollow",children:"https://s.kontur.ru/common-v2/"}),")."]}),`
`,n.jsx(d.h2,{id:"установка",children:"Установка"}),`
`,n.jsx(d.pre,{children:n.jsx(d.code,{className:"language-bash",children:`npm i @skbkontur/ui-cdn-components
`})}),`
`,n.jsx(d.pre,{children:n.jsx(d.code,{className:"language-jsx",children:`import { CdnProductIcon } from "@skbkontur/ui-cdn-components";
`})}),`
`,n.jsx(d.h2,{id:"базовое-использование",children:"Базовое использование"}),`
`,n.jsx(d.pre,{children:n.jsx(d.code,{className:"language-jsx",children:`<CdnProductIcon product="adaptation" size={128} />
`})}),`
`,n.jsxs(d.p,{children:["Доступные размеры: ",n.jsx(d.code,{children:"16"}),", ",n.jsx(d.code,{children:"24"}),", ",n.jsx(d.code,{children:"32"}),", ",n.jsx(d.code,{children:"36"}),", ",n.jsx(d.code,{children:"48"}),", ",n.jsx(d.code,{children:"64"}),", ",n.jsx(d.code,{children:"82"}),", ",n.jsx(d.code,{children:"128"}),", ",n.jsx(d.code,{children:"256"}),", ",n.jsx(d.code,{children:"512"}),"."]}),`
`,n.jsx(d.h2,{id:"symbol-режим",children:"Symbol-режим"}),`
`,n.jsxs(d.p,{children:["Символьная иконка — упрощённая версия для мелких размеров. Доступные размеры: ",n.jsx(d.code,{children:"16"}),"–",n.jsx(d.code,{children:"64"}),"."]}),`
`,n.jsx(d.pre,{children:n.jsx(d.code,{className:"language-jsx",children:`<CdnProductIcon product="adaptation" size={32} symbol />
`})}),`
`,n.jsx(d.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(d.p,{children:["Если иконка важна для понимания контекста, укажите ",n.jsx(d.code,{children:"name"})," для атрибута ",n.jsx(d.code,{children:"alt"}),":"]}),`
`,n.jsx(d.pre,{children:n.jsx(d.code,{className:"language-jsx",children:`<CdnProductIcon product="adaptation" size={128} name="Адаптация" />
`})}),`
`,n.jsxs(d.p,{children:["Если иконка декоративная, ",n.jsx(d.code,{children:"name"})," можно не указывать — она будет скрыта от скринридеров."]}),`
`,n.jsx(d.h2,{id:"пропсы",children:"Пропсы"}),`
`,n.jsxs(d.table,{children:[n.jsx(d.thead,{children:n.jsxs(d.tr,{children:[n.jsx(d.th,{children:"Name"}),n.jsx(d.th,{children:"Description"}),n.jsx(d.th,{children:"Default"})]})}),n.jsxs(d.tbody,{children:[n.jsxs(d.tr,{children:[n.jsx(d.td,{children:n.jsx(d.code,{children:"product"})}),n.jsxs(d.td,{children:["Название продукта (",n.jsx(d.code,{children:"ProductIconsType"}),")"]}),n.jsx(d.td,{children:"—"})]}),n.jsxs(d.tr,{children:[n.jsx(d.td,{children:n.jsx(d.code,{children:"size"})}),n.jsxs(d.td,{children:["Размер: ",n.jsx(d.code,{children:"16"})," | ",n.jsx(d.code,{children:"24"})," | ",n.jsx(d.code,{children:"32"})," | ",n.jsx(d.code,{children:"36"})," | ",n.jsx(d.code,{children:"48"})," | ",n.jsx(d.code,{children:"64"})," | ",n.jsx(d.code,{children:"82"})," | ",n.jsx(d.code,{children:"128"})," | ",n.jsx(d.code,{children:"256"})," | ",n.jsx(d.code,{children:"512"})]}),n.jsx(d.td,{children:"—"})]}),n.jsxs(d.tr,{children:[n.jsx(d.td,{children:n.jsx(d.code,{children:"symbol"})}),n.jsx(d.td,{children:"Использовать символьную версию (размеры 16–64)"}),n.jsx(d.td,{children:n.jsx(d.code,{children:"false"})})]}),n.jsxs(d.tr,{children:[n.jsx(d.td,{children:n.jsx(d.code,{children:"name"})}),n.jsxs(d.td,{children:["Текст для ",n.jsx(d.code,{children:"alt"}),"; если не задан — скрыто от скринридеров"]}),n.jsx(d.td,{children:"—"})]})]})]}),`
`,n.jsxs(d.p,{children:["Компонент рендерит ",n.jsx(d.code,{children:"<img>"})," и принимает стандартные HTML-атрибуты изображения."]}),`
`,n.jsx(d.h2,{id:"cdnproducticonprovider",children:"CdnProductIconProvider"}),`
`,n.jsx(d.p,{children:"Переопределение URL для получения иконки продукта:"}),`
`,n.jsx(d.pre,{children:n.jsx(d.code,{className:"language-jsx",children:`import { CdnProductIcon, CdnProductIconProvider } from "@skbkontur/ui-cdn-components";

<CdnProductIconProvider
  value={{
    getProductIconUrl: (product, size) =>
      \`https://s.kontur.ru/common-v2/icons-products/\${product}/\${product}-\${size}.svg\`,
  }}
>
  <CdnProductIcon product="adaptation" size={128} />
</CdnProductIconProvider>;
`})}),`
`,n.jsx(o,{title:"",includePrimary:!0})]})}function g(e={}){const{wrapper:d}={...r(),...e.components};return d?n.jsx(d,{...e,children:n.jsx(c,{...e})}):c(e)}export{g as default};
