import{j as n}from"./jsx-runtime-wTqLqomF.js";import{useMDXComponents as r}from"./index-DHoIkTbl.js";import{S as s}from"./index-DmIGjz0l.js";import{M as o,H as i}from"./Meta-Cjs_UgRC.js";import{C as t}from"./CdnProductIcon.docs.stories-dzbSwUJ6.js";import"./index-Bk3ZmH4I.js";import"./iframe-BbACQoXw.js";import"./index-B_peBN76.js";import"./index-Nwkb1jlR.js";import"./index-J3bWmEqI.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CdnProductIcon-DNg4cawY.js";function c(e){const d={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:t}),`
`,n.jsx(i,{component:"CdnProductIcon",figma:"https://www.figma.com/design/ZyM7Ms3HjFL9PFX3ALthDx/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2?m=auto&t=32P54zPqIYfdEJUH-6",guides:"https://guides.kontur.ru/re/sources/icons-products/"}),`
`,n.jsxs(d.p,{children:["Иконки продуктов Контура ",n.jsx(d.a,{href:"https://s.kontur.ru/common-v2/",rel:"nofollow",children:"с сервера статики"}),"."]}),`
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
`,n.jsx(s,{title:"",includePrimary:!0})]})}function I(e={}){const{wrapper:d}={...r(),...e.components};return d?n.jsx(d,{...e,children:n.jsx(c,{...e})}):c(e)}export{I as default};
