import{j as n}from"./jsx-runtime-wTqLqomF.js";import{useMDXComponents as c}from"./index-DHoIkTbl.js";import{S as s}from"./index-DmIGjz0l.js";import{C as o}from"./CdnIcon.docs.stories-XDhzP6DZ.js";import{M as i,H as t}from"./Meta-Cjs_UgRC.js";import"./index-Bk3ZmH4I.js";import"./iframe-BbACQoXw.js";import"./index-B_peBN76.js";import"./index-Nwkb1jlR.js";import"./index-J3bWmEqI.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./CdnIcon-Ct2KsfxA.js";import"./toPropertyKey-B36dj_7n.js";import"./Gapped-BXpVHwpM.js";function d(r){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:o}),`
`,n.jsx(t,{component:"CdnIcon",figma:"https://www.figma.com/design/69XYlhg5sQ5i7by1lhzXmP/%E2%9A%A1-Kontur-Icons?node-id=1176-24002&p=f&t=Nlj2vZPZRow4CrXi-0",guides:"https://guides.kontur.ru/re/sources/icons/"}),`
`,n.jsxs(e.p,{children:["UI-иконки Контура ",n.jsx(e.a,{href:"https://s.kontur.ru/common-v2/",rel:"nofollow",children:"с сервера статики"}),". Альтернатива ",n.jsx(e.code,{children:"@skbkontur/icons"})," для проектов, которым требуется dual-build (CJS + ESM)."]}),`
`,n.jsx(e.h2,{id:"установка",children:"Установка"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i @skbkontur/ui-cdn-components
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { CdnIcon } from "@skbkontur/ui-cdn-components";
`})}),`
`,n.jsxs(e.p,{children:["Иконку можно получить по имени (",n.jsx(e.code,{children:"icon"}),") или по полному URL (",n.jsx(e.code,{children:"url"}),"). Должен быть задан ",n.jsx(e.strong,{children:"либо"})," ",n.jsx(e.code,{children:"icon"}),", ",n.jsx(e.strong,{children:"либо"})," ",n.jsx(e.code,{children:"url"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Button } from "@skbkontur/react-ui";
import { CdnIcon } from "@skbkontur/ui-cdn-components";

<div>
  Иконка в тексте <CdnIcon icon="animal-paw" />
</div>

<Button size="small" icon={<CdnIcon icon="animal-paw" size={16} />}>
  Кнопка с иконкой
</Button>
`})}),`
`,n.jsx(e.h2,{id:"пропсы",children:"Пропсы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Name"}),n.jsx(e.th,{children:"Description"}),n.jsx(e.th,{children:"Default"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"icon"})}),n.jsxs(e.td,{children:["Название иконки (",n.jsx(e.code,{children:"IconsType"}),")"]}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"url"})}),n.jsx(e.td,{children:"Полный URL иконки на CDN"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"size"})}),n.jsxs(e.td,{children:["Размер: ",n.jsx(e.code,{children:"16"})," | ",n.jsx(e.code,{children:"20"})," | ",n.jsx(e.code,{children:"24"})," | ",n.jsx(e.code,{children:"32"})," | ",n.jsx(e.code,{children:"64"})," или произвольный (масштабируется)"]}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"weight"})}),n.jsxs(e.td,{children:["Начертание: ",n.jsx(e.code,{children:'"light"'})," | ",n.jsx(e.code,{children:'"regular"'})," | ",n.jsx(e.code,{children:'"solid"'})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:'"regular"'})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"color"})}),n.jsx(e.td,{children:"Цвет иконки (любой sRGB-совместимый)"}),n.jsx(e.td,{children:"наследуется"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"align"})}),n.jsxs(e.td,{children:["Выравнивание: ",n.jsx(e.code,{children:'"center"'})," | ",n.jsx(e.code,{children:'"baseline"'})," | ",n.jsx(e.code,{children:'"none"'})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:'"center"'})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"embed"})}),n.jsxs(e.td,{children:["Загрузить SVG в документ вместо ",n.jsx(e.code,{children:"background-image"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"false"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"lazy"})}),n.jsxs(e.td,{children:["Ленивая загрузка при появлении во viewport (не для ",n.jsx(e.code,{children:"embed"}),")"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"false"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"alt"})}),n.jsxs(e.td,{children:["Подпись к изображению (при ",n.jsx(e.code,{children:"embed"}),")"]}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onLoad"})}),n.jsx(e.td,{children:"Колбэк успешной загрузки"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onError"})}),n.jsx(e.td,{children:"Колбэк ошибки загрузки"}),n.jsx(e.td,{children:"—"})]})]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type IconProps = { icon: IconsType; url?: never } | { url: string; icon?: never };

interface CdnIconPropsCommon {
  size?: 16 | 20 | 24 | 32 | 64 | number;
  weight?: "light" | "regular" | "solid";
  color?: string;
  align?: "center" | "baseline" | "none";
  embed?: boolean;
  lazy?: boolean;
  alt?: string;
  onLoad?: (e?: React.SyntheticEvent<HTMLImageElement>) => void;
  onError?: (e?: React.SyntheticEvent<HTMLImageElement>) => void;
}

export type CdnIconProps = IconProps & CdnIconPropsCommon;
`})}),`
`,n.jsx(e.h2,{id:"cdniconprovider",children:"CdnIconProvider"}),`
`,n.jsx(e.p,{children:"Переопределение URL для получения иконки:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { CdnIcon, CdnIconProvider } from "@skbkontur/ui-cdn-components";

<CdnIconProvider
  value={{
    getIconUrl: (icon, size, type) =>
      \`https://s.kontur.ru/common-v2/icons-ui/black/\${icon}/\${icon}-\${size}-\${type}.svg\`,
  }}
>
  <CdnIcon icon="doc" color="red" embed />
</CdnIconProvider>;
`})}),`
`,n.jsx(e.h2,{id:"шоу-кейс-всех-иконок",children:"Шоу-кейс всех иконок"}),`
`,n.jsxs(e.p,{children:["Смотреть в гайде ",n.jsx(e.a,{href:"https://guides.kontur.ru/re/sources/icons/",rel:"nofollow",children:"Шоу-кейс"})]}),`
`,n.jsx(s,{title:"",includePrimary:!0})]})}function y(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{y as default};
