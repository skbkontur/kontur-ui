import{j as e}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as s}from"./index-uDG1oqxT.js";import{M as r,S as c}from"./index-DJZEkC7N.js";import{C as l}from"./CdnLogo.docs.stories-CoDdqA0h.js";import"./index-YTOF1_EJ.js";import"./iframe-pyMEG4GD.js";import"./index-Boh3aX-1.js";import"./index-C2r-3Y3z.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Gapped-WvmOyBbz.js";function d(o){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsxs(n.p,{children:["Логотипы продуктов Контура с сервера статики (",e.jsx(n.a,{href:"https://s.kontur.ru/common-v2/",rel:"nofollow",children:"https://s.kontur.ru/common-v2/"}),"). Рекомендуемая замена пакета ",e.jsx(n.code,{children:"@skbkontur/logos"}),"."]}),`
`,e.jsx(n.h2,{id:"установка",children:"Установка"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i @skbkontur/ui-cdn-components
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { CdnLogo } from "@skbkontur/ui-cdn-components";
`})}),`
`,e.jsx(n.h2,{id:"использование-с-logotype",children:"Использование с Logotype"}),`
`,e.jsxs(n.p,{children:["Используются с компонентом ",e.jsx(n.code,{children:"Logotype"})," из пакета ",e.jsx(n.code,{children:"@skbkontur/react-ui-addons"})," (",e.jsx(n.a,{href:"#/react-ui-addons/Logotype",children:"Logotype/readme"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { CdnLogo } from "@skbkontur/ui-cdn-components";
import { Logotype } from "@skbkontur/react-ui-addons";

<Logotype productLogo={<CdnLogo logo="extern" />} />;
`})}),`
`,e.jsxs(n.h2,{id:"проп-logo",children:["Проп ",e.jsx(n.code,{children:"logo"})]}),`
`,e.jsx(n.p,{children:"Название логотипа без размера. Доступные варианты:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["базовый: ",e.jsx(n.code,{children:"dostup"})]}),`
`,e.jsxs(n.li,{children:["тёмная тема: ",e.jsx(n.code,{children:"dostup-dark"})," или проп ",e.jsx(n.code,{children:"useDarkThemeColors"})]}),`
`,e.jsxs(n.li,{children:["вертикальный: ",e.jsx(n.code,{children:"dostup-vertical"}),", ",e.jsx(n.code,{children:"dostup-vertical-dark"})]}),`
`,e.jsxs(n.li,{children:["английская версия: ",e.jsx(n.code,{children:"focus-en"}),", ",e.jsx(n.code,{children:"diadoc-en"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Полный список значений — в типе ",e.jsx(n.code,{children:"LogosType"}),"."]}),`
`,e.jsx(n.h2,{id:"пропсы",children:"Пропсы"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"logo"})}),e.jsxs(n.td,{children:["Название логотипа (",e.jsx(n.code,{children:"LogosType"}),")"]}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"size"})}),e.jsx(n.td,{children:"Высота логотипа в px, ширина масштабируется пропорционально"}),e.jsxs(n.td,{children:["из ",e.jsx(n.code,{children:"LogosObject"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"useDarkThemeColors"})}),e.jsxs(n.td,{children:["Автоматически запросить ",e.jsx(n.code,{children:"-dark"})," вариант"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsxs(n.td,{children:["Текст для ",e.jsx(n.code,{children:"alt"}),"; если не задан — логотип скрыт от скринридеров"]}),e.jsx(n.td,{children:"—"})]})]})]}),`
`,e.jsxs(n.p,{children:["Компонент рендерит ",e.jsx(n.code,{children:"<img>"})," и принимает стандартные HTML-атрибуты изображения (",e.jsx(n.code,{children:"style"}),", ",e.jsx(n.code,{children:"onError"}),", ",e.jsx(n.code,{children:"className"})," и т.д.)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<CdnLogo logo="kontur" size={32} />
<CdnLogo logo="kontur" size={28} useDarkThemeColors />
`})}),`
`,e.jsxs(n.h2,{id:"миграция-с-skbkonturlogos",children:["Миграция с ",e.jsx(n.code,{children:"@skbkontur/logos"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:e.jsx(n.code,{children:"@skbkontur/logos"})}),e.jsx(n.th,{children:e.jsx(n.code,{children:"CdnLogo"})})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<Kontur />"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'<CdnLogo logo="kontur" />'})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<DiadocEN />"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'<CdnLogo logo="diadoc-en" />'})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<Kontur size={32} />"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'<CdnLogo logo="kontur" size={32} />'})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<Kontur useDarkThemeColors />"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'<CdnLogo logo="kontur" useDarkThemeColors />'})})]})]})]}),`
`,e.jsx(n.p,{children:"Отличия:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Один компонент вместо сотен импортов; имя логотипа — kebab-case строка."}),`
`,e.jsxs(n.li,{children:["Проп ",e.jsx(n.code,{children:"color"})," ",e.jsx(n.strong,{children:"не поддерживается"})," — цвета зашиты в SVG на CDN. Для тёмной темы используйте ",e.jsx(n.code,{children:"useDarkThemeColors"})," или суффикс ",e.jsx(n.code,{children:"-dark"}),"."]}),`
`,e.jsxs(n.li,{children:["Ресурсы загружаются с сервера статики (",e.jsx(n.a,{href:"https://s.kontur.ru/common-v2/",rel:"nofollow",children:"https://s.kontur.ru/common-v2/"}),") в runtime, а не встраиваются как inline SVG."]}),`
`]}),`
`,e.jsx(n.h2,{id:"локализация",children:"Локализация"}),`
`,e.jsxs(n.p,{children:["Локализация через ",e.jsx(n.code,{children:"LocaleContext"})," ",e.jsx(n.strong,{children:"не"})," поддерживается — логотипы нужно менять самостоятельно."]}),`
`,e.jsxs(n.p,{children:["Не все продуктовые логотипы имеют английскую версию. У английских версий в названии постфикс ",e.jsx(n.code,{children:"-en"}),". Такие логотипы рекомендуется использовать совместно с ",e.jsx(n.code,{children:"kontur-en"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { CdnLogo } from "@skbkontur/ui-cdn-components";
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
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.p,{children:["Если логотип важен для понимания контекста (например, в ссылке), укажите ",e.jsx(n.code,{children:"name"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<CdnLogo logo="dostup" name="Контур Доступ" />
`})}),`
`,e.jsxs(n.p,{children:["Если логотип декоративный и не влияет на понимание контекста, ",e.jsx(n.code,{children:"name"})," можно не указывать — изображение будет скрыто от скринридеров."]}),`
`,e.jsx(n.h2,{id:"cdnlogoprovider",children:"CdnLogoProvider"}),`
`,e.jsx(n.p,{children:"Переопределение URL для получения логотипа (тестовые стенды, кастомный CDN):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { CdnLogo, CdnLogoProvider } from "@skbkontur/ui-cdn-components";

<CdnLogoProvider value={{ getLogosUrl: (logo) => \`https://example.com/\${logo}.svg\` }}>
  <CdnLogo logo="ai-en-vertical" />
</CdnLogoProvider>;
`})}),`
`,e.jsx(c,{title:"",includePrimary:!0}),`
`,e.jsxs(n.p,{children:["Смотреть в ",e.jsx(n.a,{href:"https://guides.kontur.ru/re/sources/logos/",rel:"nofollow",children:"гайде"})]})]})}function L(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}export{L as default};
