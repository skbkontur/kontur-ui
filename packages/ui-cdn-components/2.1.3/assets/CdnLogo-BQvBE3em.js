import{j as n}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as s}from"./index-uDG1oqxT.js";import{M as r,S as c}from"./index-ChvHC-hC.js";import{C as l}from"./CdnLogo.docs.stories-1hvTV_ca.js";import"./index-YTOF1_EJ.js";import"./iframe-D_sb1T37.js";import"./index-Boh3aX-1.js";import"./index-C2r-3Y3z.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Gapped-WvmOyBbz.js";function d(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l}),`
`,n.jsx(e.h1,{id:"cdnlogo---логотипы-продуктов-контура",children:"CdnLogo - Логотипы продуктов Контура"}),`
`,n.jsx(e.p,{children:n.jsxs(e.a,{href:"https://guides.kontur.ru/re/sources/logos/",rel:"nofollow",children:[n.jsx("img",{src:"https://tech.skbkontur.ru/kontur-ui/favicon.svg",alt:"",height:"16"})," Шоу-Кейс"]})}),`
`,n.jsxs(e.p,{children:["Логотипы продуктов Контура с сервера статики (",n.jsx(e.a,{href:"https://s.kontur.ru/common-v2/",rel:"nofollow",children:"https://s.kontur.ru/common-v2/"}),"). Рекомендуемая замена пакета ",n.jsx(e.code,{children:"@skbkontur/logos"}),"."]}),`
`,n.jsx(e.h2,{id:"установка",children:"Установка"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i @skbkontur/ui-cdn-components
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { CdnLogo } from "@skbkontur/ui-cdn-components";
`})}),`
`,n.jsx(e.h2,{id:"использование-с-logotype",children:"Использование с Logotype"}),`
`,n.jsxs(e.p,{children:["Может использоваться с компонентом ",n.jsx(e.code,{children:"Logotype"})," из пакета ",n.jsx(e.code,{children:"@skbkontur/react-ui-addons"})," (",n.jsx(e.a,{href:"#/react-ui-addons/Logotype",children:"Logotype/readme"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { CdnLogo } from "@skbkontur/ui-cdn-components";
import { Logotype } from "@skbkontur/react-ui-addons";

<Logotype productLogo={<CdnLogo logo="extern" />} />;
`})}),`
`,n.jsxs(e.h2,{id:"проп-logo",children:["Проп ",n.jsx(e.code,{children:"logo"})]}),`
`,n.jsx(e.p,{children:"Название логотипа без размера. Доступные варианты:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["базовый: ",n.jsx(e.code,{children:"dostup"})]}),`
`,n.jsxs(e.li,{children:["тёмная тема: ",n.jsx(e.code,{children:"dostup-dark"})," или проп ",n.jsx(e.code,{children:"useDarkThemeColors"})]}),`
`,n.jsxs(e.li,{children:["вертикальный: ",n.jsx(e.code,{children:"dostup-vertical"}),", ",n.jsx(e.code,{children:"dostup-vertical-dark"})]}),`
`,n.jsxs(e.li,{children:["английская версия: ",n.jsx(e.code,{children:"focus-en"}),", ",n.jsx(e.code,{children:"diadoc-en"})]}),`
`]}),`
`,n.jsxs(e.p,{children:["Полный список значений — в типе ",n.jsx(e.code,{children:"LogosType"}),"."]}),`
`,n.jsx(e.h2,{id:"пропсы",children:"Пропсы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Name"}),n.jsx(e.th,{children:"Description"}),n.jsx(e.th,{children:"Default"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"logo"})}),n.jsxs(e.td,{children:["Название логотипа (",n.jsx(e.code,{children:"LogosType"}),")"]}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"size"})}),n.jsx(e.td,{children:"Высота логотипа в px, ширина масштабируется пропорционально"}),n.jsxs(e.td,{children:["из ",n.jsx(e.code,{children:"LogosObject"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"useDarkThemeColors"})}),n.jsxs(e.td,{children:["Автоматически запросить ",n.jsx(e.code,{children:"-dark"})," вариант"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"false"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"name"})}),n.jsxs(e.td,{children:["Текст для ",n.jsx(e.code,{children:"alt"}),"; если не задан — логотип скрыт от скринридеров"]}),n.jsx(e.td,{children:"—"})]})]})]}),`
`,n.jsxs(e.p,{children:["Компонент рендерит ",n.jsx(e.code,{children:"<img>"})," и принимает стандартные HTML-атрибуты изображения (",n.jsx(e.code,{children:"style"}),", ",n.jsx(e.code,{children:"onError"}),", ",n.jsx(e.code,{children:"className"})," и т.д.)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<CdnLogo logo="kontur" size={32} />
<CdnLogo logo="kontur" size={28} useDarkThemeColors />
`})}),`
`,n.jsxs(e.h2,{id:"миграция-с-skbkonturlogos",children:["Миграция с ",n.jsx(e.code,{children:"@skbkontur/logos"})]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:n.jsx(e.code,{children:"@skbkontur/logos"})}),n.jsx(e.th,{children:n.jsx(e.code,{children:"CdnLogo"})})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"<Kontur />"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:'<CdnLogo logo="kontur" />'})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"<DiadocEN />"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:'<CdnLogo logo="diadoc-en" />'})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"<Kontur size={32} />"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:'<CdnLogo logo="kontur" size={32} />'})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"<Kontur useDarkThemeColors />"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:'<CdnLogo logo="kontur" useDarkThemeColors />'})})]})]})]}),`
`,n.jsx(e.p,{children:"Отличия:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Один компонент вместо сотен импортов; имя логотипа — kebab-case строка."}),`
`,n.jsxs(e.li,{children:["Проп ",n.jsx(e.code,{children:"color"})," ",n.jsx(e.strong,{children:"не поддерживается"})," — цвета зашиты в SVG на CDN. Для тёмной темы используйте ",n.jsx(e.code,{children:"useDarkThemeColors"})," или суффикс ",n.jsx(e.code,{children:"-dark"}),"."]}),`
`,n.jsxs(e.li,{children:["Ресурсы загружаются с сервера статики (",n.jsx(e.a,{href:"https://s.kontur.ru/common-v2/",rel:"nofollow",children:"https://s.kontur.ru/common-v2/"}),") в runtime, а не встраиваются как inline SVG."]}),`
`]}),`
`,n.jsx(e.h2,{id:"локализация",children:"Локализация"}),`
`,n.jsxs(e.p,{children:["Локализация через ",n.jsx(e.code,{children:"LocaleContext"})," ",n.jsx(e.strong,{children:"не"})," поддерживается — логотипы нужно менять самостоятельно."]}),`
`,n.jsxs(e.p,{children:["Не все продуктовые логотипы имеют английскую версию. У английских версий в названии постфикс ",n.jsx(e.code,{children:"-en"}),". Такие логотипы рекомендуется использовать совместно с ",n.jsx(e.code,{children:"kontur-en"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { CdnLogo } from "@skbkontur/ui-cdn-components";
import { Gapped } from "@skbkontur/react-ui";

<Gapped vertical gap={8}>
  <Gapped gap={8}>
    <CdnLogo logo="kontur" />
    ➜
    <CdnLogo logo="kontur-en" />
  </Gapped>
  <Gapped gap={8}>
    <CdnLogo logo="focus" />
    ➜
    <CdnLogo logo="focus-en" />
  </Gapped>
  <Gapped gap={8}>
    <CdnLogo logo="diadoc" />
    ➜
    <CdnLogo logo="diadoc-en" />
  </Gapped>
</Gapped>;
`})}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.p,{children:["Если логотип важен для понимания контекста (например, в ссылке), укажите ",n.jsx(e.code,{children:"name"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<CdnLogo logo="dostup" name="Контур Доступ" />
`})}),`
`,n.jsxs(e.p,{children:["Если логотип декоративный и не влияет на понимание контекста, ",n.jsx(e.code,{children:"name"})," можно не указывать — изображение будет скрыто от скринридеров."]}),`
`,n.jsx(e.h2,{id:"cdnlogoprovider",children:"CdnLogoProvider"}),`
`,n.jsx(e.p,{children:"Переопределение URL для получения логотипа (тестовые стенды, кастомный CDN):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { CdnLogo, CdnLogoProvider } from "@skbkontur/ui-cdn-components";

<CdnLogoProvider value={{ getLogosUrl: (logo) => \`https://example.com/\${logo}.svg\` }}>
  <CdnLogo logo="ai-en-vertical" />
</CdnLogoProvider>;
`})}),`
`,n.jsx(c,{title:"",includePrimary:!0}),`
`,n.jsxs(e.p,{children:["Смотреть в ",n.jsx(e.a,{href:"https://guides.kontur.ru/re/sources/logos/",rel:"nofollow",children:"гайде"})]})]})}function L(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{L as default};
