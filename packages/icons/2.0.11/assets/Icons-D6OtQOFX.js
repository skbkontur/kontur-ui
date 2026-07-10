import{j as n}from"./jsx-runtime-DbrDegQX.js";import{useMDXComponents as a}from"./index-D5wSPPPF.js";import{e as s,r as h}from"./index-DudzRYJp.js";const x=()=>new Promise(t=>{fetch("https://ui.gitlab-pages.kontur.host/docs/storybook/versions.json",{method:"HEAD"}).then(e=>{e.ok?t(!0):t(!1)}).catch(()=>{t(!1)})}),u="packages/react-ui/components",l=({component:t,guides:e,figma:c}={})=>{const[o,d]=s.useState(!1);return h.useEffect(()=>{x().then(r=>{d(r)}).catch(r=>console.log("Error checking access: ",r))},[]),s.createElement(s.Fragment,null,s.createElement("h1",null,t),s.createElement("div",{className:"sb-docs-header"},s.createElement("style",null,`
    .sb-docs-header {
      display: flex;
      gap: 2px;
      align-items: flex-start;
      margin: 12px 0 24px !important;

      & a {
        position: relative;
        display: inline-flex;
        gap: 6px;
        padding: 4px 8px;
        align-items: center;
        text-decoration: none !important;
        transition: 0.15s ease;
        border-radius: 8px;
      }

      & a:first-child {
        margin-left: -8px;
      }

      & a:hover {
        background: rgba(0, 0, 0, 0.06);
      }

      & a:active {
        background: rgba(0, 0, 0, 0.1);
      }

      & a:before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        width: calc(100% + 8px);
        height: calc(100% + 8px);
      }

      & img {
        width: 16px;
        height: 16px;
      }
    }
  `),e&&s.createElement("a",{href:e,target:"_blank"},s.createElement("img",{src:"https://tech.skbkontur.ru/kontur-ui/favicon.svg",alt:""}),"Гайды"),c&&s.createElement("a",{href:c,target:"_blank"},s.createElement("img",{src:"https://static.figma.com/app/icon/1/favicon.svg",alt:""}),"Figma"),o&&t&&s.createElement("a",{href:`https://yt.skbkontur.ru/issues/IF?q=${t}`,target:"_blank"},s.createElement("img",{src:"https://yt.skbkontur.ru/static/favicon.ico",alt:""}),"YouTrack"),o&&t&&s.createElement("a",{href:`https://git.skbkontur.ru/ui/kontur-ui/-/tree/master/${u}/${t}`,target:"_blank"},s.createElement("img",{src:"https://git.skbkontur.ru/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png",alt:""}),"GitLab")))};l.__docgenInfo={description:"",methods:[],displayName:"Header"};function i(t){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{component:"Icons",figma:"https://www.figma.com/design/69XYlhg5sQ5i7by1lhzXmP/%E2%9A%A1-Kontur-Icons?node-id=1176-24002&p=f&t=Nlj2vZPZRow4CrXi-0",guides:"https://guides.kontur.ru/re/sources/icons/"}),`
`,n.jsx(e.h2,{id:"esm-only",children:"ESM-only"}),`
`,n.jsxs(e.p,{children:[`Начиная с версии 2.0 пакет поставляется только в ESM формате.
Если у вас возникают сложности, то попробуйте пакет `,n.jsx(e.a,{href:"https://git.skbkontur.ru/ui/ui-cdn-components",rel:"nofollow",children:"@skbkontur/ui-cdn-components"}),". Он имеет dual-build, но грузит иконки с сервера статики."]}),`
`,n.jsx(e.h2,{id:"установка",children:"Установка"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i @skbkontur/icons
`})}),`
`,n.jsx(e.h2,{id:"библиотека-предоставляет-гранулярные-иконки",children:"Библиотека предоставляет гранулярные иконки"}),`
`,n.jsxs(e.p,{children:["Гранулярные иконки (",n.jsx(e.code,{children:"IconCheckLight16"}),",",n.jsx(e.code,{children:"IconXRegular20"}),") содержат одно конретное начертание, как в макете Фигмы."]}),`
`,n.jsx(e.h2,{id:"импорт",children:"Импорт"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { IconCheckARegular16 } from "@skbkontur/icons/IconCheckARegular16";
import { IconMathDeltaRegular20 } from "@skbkontur/icons/IconMathDeltaRegular20";
import { IconMathDeltaLight20 } from "@skbkontur/icons/IconMathDeltaLight20";
import { IconArchiveBoxSolid24 } from "@skbkontur/icons/IconArchiveBoxSolid24";
`})}),`
`,n.jsx(e.p,{children:"Из корня можно импортировать некоторые типы:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {
  IconSize, // 16 | 20 | 24 | 32 | 64
  IconWeight, // "light" | "regular" | "solid"
  IconComponent, // React.FunctionComponent<IconProps>
  IconProps, // См. ниже
} from "@skbkontur/icons";
`})}),`
`,n.jsx(e.h2,{id:"пропы-иконок",children:"Пропы иконок:"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Name"}),n.jsx(e.th,{children:"Description"}),n.jsx(e.th,{children:"Default"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"size"})}),n.jsx(e.td,{children:"Масштабирование начертания"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"color"})}),n.jsx(e.td,{children:"Цвет иконки"}),n.jsx(e.td,{children:"Наследуется цвет родителя"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"align"})}),n.jsxs(e.td,{children:["Выравнивание иконки:",n.jsx("br",{}),n.jsx(e.code,{children:'"baseline"'})," — по базовой линии",n.jsx("br",{}),n.jsx(e.code,{children:'"center"'})," — по центру контента",n.jsx("br",{}),n.jsx(e.code,{children:'"none"'})," — без выравнивания"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:'"center"'})})]})]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// Иконка принимает все атрибуты элемента \`svg\`.
interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number; // Масштабирование начертания
  color?: string; // Цвет иконки. По умолчанию наследуется цвет ближайшего родителя, у которого явно задан аттрибут \`color\`.
  align?: "center" | "baseline" | "none"; // Позволяет выровнять иконку относительно остального контента. При 'baseline' иконка будет выравниваться относительно базовой линии текста, при 'center' иконка будет выравниваться относительно центра текста или друго контента, при 'none' к иконке не будут применены дополнительные стили для выравнивания. Значение по умолчанию - 'center'.
}
`})}),`
`,n.jsx(e.h2,{id:"шоу-кейс-всех-иконок",children:"Шоу-кейс всех иконок"}),`
`,n.jsxs(e.p,{children:["Смотреть в гайде ",n.jsx(e.a,{href:"https://guides.kontur.ru/re/sources/icons/",rel:"nofollow",children:"Шоу-кейс"})]})]})}function b(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{b as default};
