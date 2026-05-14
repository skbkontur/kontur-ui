import{j as n}from"./jsx-runtime-CxDcHYHg.js";import{useMDXComponents as t}from"./index-D9RHlbuj.js";import"./index-euwJYB9f.js";function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"ui-cdn-components",children:"Ui Cdn Components"}),`
`,n.jsx(o.h2,{id:"storybook",children:"Storybook"}),`
`,n.jsx(o.p,{children:n.jsx(o.a,{href:"https://ui-cdn-components-56dad0.gitlab-pages.kontur.host",rel:"nofollow",children:"https://ui-cdn-components-56dad0.gitlab-pages.kontur.host"})}),`
`,n.jsx(o.h2,{id:"что-это",children:"Что это"}),`
`,n.jsxs(o.p,{children:["Обертки на реакте для ресурсов которые лежат на ",n.jsx(o.a,{href:"https://s.kontur.ru/common-v2/",rel:"nofollow",children:"https://s.kontur.ru/common-v2/"}),"."]}),`
`,n.jsx(o.p,{children:`Библиотека не содержит самих ресурсов, а является лишь удобной оберткой на реакте.
Все ресурсы будут скачиваться в runtime через сеть.`}),`
`,n.jsx(o.h3,{id:"установить-пакет",children:"Установить пакет"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-text",children:`
npm i -S @skbkontur/ui-cdn-components


`})}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-text",children:`
Иконку можно получить либо по имени (icon=doc) либо по полному урлу.

// Должен быть задан или icon, или url

type IconProps =
 { icon: Название иконки  } |
 { url: Полный url иконки; (https://s.kontur.ru/common-v2/icons-ui/black/animal-paw/animal-paw-16-light.svg) };

interface CdnIconPropsCommon {
    size?: Размер иконки (16 | 20 | 24 | 32 | 64) - потянется с сервера статики, либо произвольный размер - будет масштабирован;
    weight?: Вес иконки ("light" | "regular" | "solid");
    color?: Цвет иконки (любой цвет совместимый с sRGB, red, #ff0000 и тд);
    align?: "center" | "baseline" | "none"
    embed?: boolean; // если задан, то изображение скачается в документ в виде SVG, а не будет применяться как background-image
    alt?: "" — подпись к изображению иконки
    lazy?: boolean — ленивая загрузка иконок, только когда видно во viewport, не реализовано для embed=true
    onLoad?: (e?: React.SyntheticEvent<HTMLImageElement>) => { ... } — колбэк успешной загрузки иконки
    onError?: (e?: React.SyntheticEvent<HTMLImageElement>) => { ...} — колбэк ошибки при загрузке иконки
}

export type CdnIconProps = IconProps & CdnIconPropsCommon;
`})}),`
`,n.jsx(o.h3,{id:"пример-использования-иконки",children:"Пример использования иконки"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { Button } from "@skbkontur/react-ui";
import { CdnIcon } from "@skbkontur/ui-cdn-components";


<div>
    Я иконка в тексте <CdnIcon icon="animal-paw" />.
    Привет!
</div>

<Button
    size={"small"}
    icon={<CdnIcon icon="animal-paw" size={16}/>}
>
    Я кнопка
</Button>

<div>
  Можно использовать CdnIconProvider чтобы переопределить Url для получения иконки
  <CdnIconProvider value={{ getIconUrl }}>
    <CdnIcon icon="doc" color="red" embed />
  </CdnIconProvider>
</div>
`})}),`
`,n.jsx(o.h3,{id:"пример-использования-логотипа",children:"Пример использования логотипа"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { Button } from "@skbkontur/react-ui";
import { CdnLogo } from "@skbkontur/ui-cdn-components";

// Если логотип важен для понимания пользователем контекста. Например, используется в ссылке, то нужно указать name с подходящим названием.

<CdnLogo {...props} name="Контур Доступ" logo="logo-access-24" />

// Если логотип используется как декоративный элемент и не влияет на понимание контекста, то name можно не указывать.

<CdnLogo {...props} logo="logo-access-24" />

<div>
  Можно использовать CdnLogoProvider чтобы переопределить Url для получения логотипа
  <CdnLogoProvider value={{ getLogosUrl }}>
    <CdnLogo logo="logo-ai-en-24" />
  </CdnLogoProvider>
</div>
`})}),`
`,n.jsx(o.h3,{id:"пример-использования-иконки-продукта",children:"Пример использования иконки продукта"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { CdnProductIcon } from "@skbkontur/ui-cdn-components";

// Базовое использование — укажите название продукта и размер
<CdnProductIcon product="adaptation" size={128} />

// Доступные размеры: 16, 24, 32, 36, 48, 64, 82, 128, 256, 512
<CdnProductIcon product="adaptation" size={64} />
<CdnProductIcon product="adaptation" size={256} />

// Символьная иконка (symbol) — упрощённая версия для мелких размеров
// Доступные размеры для symbol: 16, 24, 32, 36, 48, 64
<CdnProductIcon product="adaptation" size={32} symbol />

// Если иконка важна для понимания контекста, укажите name для атрибута alt
<CdnProductIcon product="adaptation" size={128} name="Адаптация" />

// Если иконка декоративная, name можно не указывать — она будет скрыта от скринридеров
<CdnProductIcon product="adaptation" size={128} />

<div>
  Можно использовать CdnProductIconProvider чтобы переопределить Url для получения иконки продукта
  <CdnProductIconProvider value={{ getProductIconUrl }}>
    <CdnProductIcon product="adaptation" size={128} />
  </CdnProductIconProvider>
</div>
`})}),`
`,n.jsx(o.h4,{id:"пропсы-cdnproducticon",children:"Пропсы CdnProductIcon"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-text",children:`interface CdnProductIconProps {
    product: string;                    // Название продукта (например, "adaptation")
    size: ProductIconSize;              // Размер: 16 | 24 | 32 | 36 | 48 | 64 | 82 | 128 | 256 | 512
    symbol?: boolean;                   // Использовать символьную версию иконки (размеры 16-64)
    name?: string;                      // Название для alt, если пусто — иконка скрыта от скринридеров
    style?: CSSProperties;              // Кастомные стили
    // + стандартные HTML-атрибуты для img
}
`})}),`
`,n.jsx(o.h3,{id:"для-разработчиков-пакета",children:"Для разработчиков пакета"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{children:`Минимальная версия node.js >= 22.18
`})})]})}function s(e={}){const{wrapper:o}={...t(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{s as default};
