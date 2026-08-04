import{j as t}from"./jsx-runtime-wTqLqomF.js";import{useMDXComponents as h}from"./index-DHoIkTbl.js";import{R as s,r as i}from"./index-Bk3ZmH4I.js";import{s as p}from"./Gapped-CzLSiTPH.js";import{c as g,S as j}from"./index-P_23Y2kN.js";import{I as f}from"./Icon.docs.stories-BkCRyW8-.js";import"./toPropertyKey-B36dj_7n.js";import"./index-Nwkb1jlR.js";import"./index-J3bWmEqI.js";import"./iframe-CRUkRPQM.js";import"./index-B_peBN76.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const b=()=>new Promise(n=>{fetch("https://ui.gitlab-pages.kontur.host/docs/storybook/versions.json",{method:"HEAD"}).then(e=>{e.ok?n(!0):n(!1)}).catch(()=>{n(!1)})}),k="packages/react-ui/components",u=({component:n,guides:e,figma:r}={})=>{const[o,a]=s.useState(!1);return i.useEffect(()=>{b().then(c=>{a(c)}).catch(c=>console.log("Error checking access: ",c))},[]),s.createElement(s.Fragment,null,s.createElement("h1",null,n),s.createElement("div",{className:"sb-docs-header"},s.createElement("style",null,`
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
  `),e&&s.createElement("a",{href:e,target:"_blank"},s.createElement("img",{src:"https://tech.skbkontur.ru/kontur-ui/favicon.svg",alt:""}),"Гайды"),r&&s.createElement("a",{href:r,target:"_blank"},s.createElement("img",{src:"https://static.figma.com/app/icon/1/favicon.svg",alt:""}),"Figma"),o&&n&&s.createElement("a",{href:`https://yt.skbkontur.ru/issues/IF?q=${n}`,target:"_blank"},s.createElement("img",{src:"https://yt.skbkontur.ru/static/favicon.ico",alt:""}),"YouTrack"),o&&n&&s.createElement("a",{href:`https://git.skbkontur.ru/ui/kontur-ui/-/tree/master/${k}/${n}`,target:"_blank"},s.createElement("img",{src:"https://git.skbkontur.ru/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png",alt:""}),"GitLab")))};u.__docgenInfo={description:"",methods:[],displayName:"Header"};const E=p(16,["M7.376 1.592a.776.776 0 0 1 .02.835 4.5 4.5 0 0 0 6.178 6.178.776.776 0 0 1 .834.02c.238.159.405.475.293.828A6.5 6.5 0 1 1 6.547 1.3a.727.727 0 0 1 .83.293zm-1.14.894a5.501 5.501 0 1 0 7.278 7.278 5.5 5.5 0 0 1-7.278-7.278z"]),M=p(16,["M8 .5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z","M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z","M12.803 12.803a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z","M4.318 4.318a.5.5 0 0 1-.707 0L2.197 2.904a.5.5 0 0 1 .707-.707L4.318 3.61a.5.5 0 0 1 0 .707z","M4 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z","M14.5 8a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z","M2.5 8a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z","M12.803 2.197a.5.5 0 0 1 0 .707L11.39 4.318a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z","M4.318 10.682a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z"]);let I="";const m=document.createElement("style");m.innerHTML=I;document.head.appendChild(m);const y=[{icon:s.createElement(M,null),caption:"Light",value:"LIGHT_THEME"},{icon:s.createElement(E,null),caption:"Dark",value:"DARK_THEME"}],x=({of:n})=>{const e=i.useContext(g);return n&&!e.componentStories().some(r=>r.title===n.default.title)&&e.referenceMeta(n,!0),i.useEffect(()=>{let r;try{if(r=new URL(window.parent.location.toString()),r.hash){const o=document.getElementById(decodeURIComponent(r.hash.substring(1)));o&&window.setTimeout(()=>{const l=o.getBoundingClientRect().top+window.scrollY+-65;window.scrollTo({top:l,behavior:"smooth"})},2e3)}}catch{}}),y.find(r=>r.value===e.store.userGlobals.globals.theme),s.createElement(s.Fragment,null)};x.__docgenInfo={description:"",methods:[],displayName:"Meta",props:{of:{required:!1,tsType:{name:"ModuleExports"},description:""}}};function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:f}),`
`,t.jsx(u,{component:"Icons",figma:"https://www.figma.com/design/69XYlhg5sQ5i7by1lhzXmP/%E2%9A%A1-Kontur-Icons?node-id=1176-24002&p=f&t=Nlj2vZPZRow4CrXi-0",guides:"https://guides.kontur.ru/re/sources/icons/"}),`
`,t.jsx(e.p,{children:"Библиотека интерфейсных SVG-иконок."}),`
`,t.jsxs(e.p,{children:[`Иконки гранулярные, то есть каждая иконка представлена в основных начертаниях (Light, Regular, Solid) и размерах, как и в Figma.
Названия иконок отражают это, в них последовательно указывается название иконки, начертание и размер, например: `,t.jsx(e.code,{children:"IconCheckLight16"}),", ",t.jsx(e.code,{children:"IconXRegular20"}),"."]}),`
`,t.jsx(e.p,{children:"Начиная с версии 2.0 пакет иконок поставляется только в формате ESM."}),`
`,t.jsx(e.h2,{id:"установка-и-использование",children:"Установка и использование"}),`
`,t.jsx(e.p,{children:"Команда установки пакета с иконками:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-bash",children:`npm i @skbkontur/icons
`})}),`
`,t.jsxs(e.p,{children:["Находить и копировать код для вставки иконки в нужном начертании и размере можно с помощью ",t.jsx(e.a,{href:"https://guides.kontur.ru/re/sources/icons/",rel:"nofollow",children:"Шоу-кейса"}),"."]}),`
`,t.jsx(e.p,{children:"Код импорта иконок в проект:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import { IconCheckARegular16 } from "@skbkontur/icons/IconCheckARegular16";
import { IconMathDeltaRegular20 } from "@skbkontur/icons/IconMathDeltaRegular20";
import { IconMathDeltaLight20 } from "@skbkontur/icons/IconMathDeltaLight20";
import { IconArchiveBoxSolid24 } from "@skbkontur/icons/IconArchiveBoxSolid24";
`})}),`
`,t.jsx(e.p,{children:"Из корня можно импортировать некоторые TypeScript-типы:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import {
  IconSize, // допустимые размеры иконки (16 | 20 | 24 | 32 | 64)
  IconWeight, // тип начертания икокни ("light" | "regular" | "solid")
  IconComponent, // тип компонента иконки (React.FunctionComponent<IconProps>)
  IconProps, // интерфейс пропсов, которые принимает компонент иконки: size, color, align и др.  Описания и примеры смотрите ниже.
} from "@skbkontur/icons";
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Альтернативы"})}),`
`,t.jsxs(e.p,{children:["Альтернативный пакет с иконками с сервера статики: ",t.jsx(e.a,{href:"https://git.skbkontur.ru/ui/ui-cdn-components",rel:"nofollow",children:"@skbkontur/ui-cdn-components"}),". Можете использовать его, если:"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"важен dual-build: поддержка CJS + ESM"}),`
`,t.jsx(e.li,{children:"в проекте используется много иконок — это уменьшает размер бандла;"}),`
`,t.jsx(e.li,{children:"нужно получать новые иконки и фиксы начертания без обновления пакета."}),`
`]}),`
`,t.jsx(e.h2,{id:"все-пропсы",children:"Все пропсы"}),`
`,t.jsxs(e.p,{children:["Иконка принимает все атрибуты элемента ",t.jsx(e.code,{children:"svg"}),"."]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Name"}),t.jsx(e.th,{children:"Description"}),t.jsx(e.th,{children:"Default"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"size"})}),t.jsx(e.td,{children:"Размер иконки в пикселях."}),t.jsx(e.td,{})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"color"})}),t.jsx(e.td,{children:"Цвет иконки."}),t.jsxs(e.td,{children:["Наследуется цвет ближайшего родителя, у которого явно задан аттрибут ",t.jsx(e.code,{children:"color"}),"."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"align"})}),t.jsxs(e.td,{children:["Выравнивание иконки:",t.jsx("br",{}),t.jsx(e.code,{children:'"baseline"'})," — по базовой линии",t.jsx("br",{}),t.jsx(e.code,{children:'"center"'})," — по центру контента",t.jsx("br",{}),t.jsx(e.code,{children:'"none"'})," — без выравнивания"]}),t.jsx(e.td,{children:t.jsx(e.code,{children:'"center"'})})]})]})]}),`
`,t.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,t.jsx(j,{title:"",includePrimary:!0})]})}function P(n={}){const{wrapper:e}={...h(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(d,{...n})}):d(n)}export{P as default};
