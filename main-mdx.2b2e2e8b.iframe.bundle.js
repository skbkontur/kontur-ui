(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[758],{"./.storybook/docsPages/main.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>main});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_versions=__webpack_require__("./.storybook/versions/index.ts");let colors_namespaceObject=__webpack_require__.p+"static/media/colors.42b6b3b8.svg",guides_namespaceObject=__webpack_require__.p+"static/media/guides.fe68a834.svg",home_namespaceObject=__webpack_require__.p+"static/media/home.3cf8abe4.svg",server_namespaceObject=__webpack_require__.p+"static/media/server.4eebd860.svg",logo_namespaceObject=__webpack_require__.p+"static/media/logo.1d3057f4.svg",typography_namespaceObject=__webpack_require__.p+"static/media/typography.e034f1b7.svg";var Toast=__webpack_require__("./node_modules/@skbkontur/react-ui/components/Toast/Toast/Toast.js"),Button=__webpack_require__("./node_modules/@skbkontur/react-ui/components/Button/Button/Button.js"),Tooltip=__webpack_require__("./node_modules/@skbkontur/react-ui/components/Tooltip/Tooltip/Tooltip.js"),Gapped=__webpack_require__("./node_modules/@skbkontur/react-ui/components/Gapped/Gapped/Gapped.js"),Text=__webpack_require__("./node_modules/@skbkontur/typography/src/Text.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",div:"div",article:"article",img:"img",a:"a"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Main"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"документация-kontur-ui",children:"Документация Kontur UI"}),"\n",(()=>{let[versions,setVersions]=react.useState(null),[hasAccess,setHasAccess]=react.useState(!1);return react.useEffect(()=>{(0,_storybook_versions.z)().then(versions=>{setVersions(versions),setHasAccess(!0)})},[]),(0,jsx_runtime.jsxs)(dist.di,{children:[(0,jsx_runtime.jsxs)(_components.div,{style:{maxWidth:600,marginBottom:48},children:[(0,jsx_runtime.jsx)(Text.E,{tag:"div",size:16,children:"Набор готовых React-компонентов, токенов, шаблонов и принципов, которые помогают разработчикам быстро и предсказуемо собирать пользовательские интерфейсы. Подходит для команд, которым важны консистентность и увеличение скорости вывода продуктов в продакшн."}),(0,jsx_runtime.jsxs)(Gapped.O,{style:{marginTop:24},children:[(0,jsx_runtime.jsx)(Button.$n,{href:"https://tech.skbkontur.ru/kontur-ui/?path=/docs/getting-started--docs",component:"a",size:"medium",use:"primary",children:"С чего начать"}),(0,jsx_runtime.jsx)(Button.$n,{href:"https://tech.skbkontur.ru/kontur-ui/?path=/docs/overview--docs",component:"a",size:"medium",children:"Знакомство"})]})]}),(0,jsx_runtime.jsx)(_components.div,{className:"card-list card-list-small",children:[{title:"React UI",packageName:"react-ui",description:"Базовый набор контролов для дизайна продуктов Контура",link:"?path=/docs/react-ui_versioning-changelog",size:"medium",customClass:"card_react-ui",isPublic:!0},{title:"Контур.Гайды",icon:guides_namespaceObject,description:"Первоисточник требований к дизайну интерфейсов Контура",link:"https://guides.kontur.ru",size:"medium",customClass:"card_guides",isPublic:!0},{title:"React UI Validations",packageName:"react-ui-validations",description:"Библиотека, которая реализует поведение валидаций форм и отображение найденных ошибок",link:"?path=/docs/react-ui-validations_api-reference",size:"medium",isPublic:!0},{title:"React UI Addons",packageName:"react-ui-addons",description:"Дополнительные компоненты: Fias, FiasSearch, Logotype, TopBar, UserAvatar",link:"?path=/docs/react-ui-addons_fias",size:"medium"},{title:"Side Menu",packageName:"side-menu",description:"Боковое меню сервисов Контура",link:"?path=/docs/side-menu_sidemenu",size:"medium"},{title:"Logos",packageName:"logos",description:"Логотипы продуктов",link:"?path=/docs/logos_logos",icon:logo_namespaceObject,size:"small"},{title:"Icons",packageName:"icons",description:"Набор интерфейсных иконок",link:"?path=/docs/icons_icons",icon:home_namespaceObject},{title:"CDN Components",packageName:"ui-cdn-components",description:"Компоненты для работы с ресурсами на сервере статики",link:"https://git.skbkontur.ru/ui/ui-cdn-components#ui-cdn-components",icon:server_namespaceObject},{title:"Typography",packageName:"typography",description:"Стили текста для шрифта Lab Grotesque K",link:"?path=/docs/typography_docs",icon:typography_namespaceObject,size:"large"},{title:"Colors",packageName:"colors",description:"Переменные палитры Контура",link:"?path=/docs/colors_colors",icon:colors_namespaceObject,size:"small"},{title:"Error Pages",description:"HTML-шаблоны и компоненты страниц ошибок 404, 500 и других",packageName:"react-error-pages",link:"?path=/docs/react-error-pages_errorpage",size:"medium"},{title:"Empty State",description:"Заглушки для пустых состояний",packageName:"empty-state",link:"?path=/docs/empty-state_emptystate",size:"medium"},{title:"Mass Actions Panel",description:"Плашка массовых действий",packageName:"mass-actions-panel",link:"?path=/docs/mass-actions-panel_actionbutton",size:"large"},{title:"Hidden Links",description:"Скрытые ссылки доступные через Tab и скринридер",packageName:"hidden-links",link:"?path=/docs/hidden-links_hiddenlinks--docs"},{title:"Mini Skeletons",description:"SVG-заглушки для загрузки контента",packageName:"mini-skeleton",link:"?path=/docs/mini-skeleton_miniskeleton"},{title:"Import Wizard",description:"Компонент для импорта xls и csv файлов",packageName:"import-wizard",link:"?path=/docs/import-wizard_importwizard",size:"large"}].map(({title,packageName,description,link,icon,size,isPublic,customClass})=>{let isDisabled=!hasAccess&&!isPublic,isExternalLink=link.includes("https://"),packageVersion=packageName&&versions?.[packageName]?.versions&&Object.keys(versions?.[packageName]?.versions).at(0),card=(0,jsx_runtime.jsxs)(_components.article,{className:`card card_${size} ${isDisabled?"card_disabled":""} ${customClass||""}`,children:[icon&&(0,jsx_runtime.jsx)(_components.img,{src:icon,alt:""}),title&&(0,jsx_runtime.jsxs)(Text.E,{size:18,tag:"h3",noSpacing:!0,children:[title,packageVersion&&(0,jsx_runtime.jsx)(Text.E,{size:12,tag:"span","aria-hidden":!0,className:"version",children:packageVersion})]}),description&&(0,jsx_runtime.jsx)(Text.E,{size:14,tag:"div",className:"card-decription",noSpacing:!0,children:description}),packageName&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(_components.div,{className:"copy-clipboard",onClick:e=>{if("Range"===document.getSelection().type){e.stopPropagation();return}window.navigator.clipboard.writeText(`npm i @skbkontur/${packageName}`),Toast.y.push("Скопировано",null,1e3)},children:(0,jsx_runtime.jsxs)(Text.E,{size:12,tag:"span",noSpacing:!0,children:["npm i @skbkontur/",packageName]})})}),link&&(0,jsx_runtime.jsxs)(_components.a,{href:isExternalLink?link:`https://tech.skbkontur.ru/kontur-ui/${link}`,target:isExternalLink&&"_blank",children:["Перейти к ",title]})]});return isDisabled?(0,jsx_runtime.jsx)(Tooltip.m,{pos:"top left",render:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Доступно только из внутренней сети Контура"}),children:card}):card})})]})})(),"\n",(0,jsx_runtime.jsx)("style",{dangerouslySetInnerHTML:{__html:`
    .card-list {
      max-width: 820px;
      display: grid;
      gap: 16px;
      margin: 24px 0 16px;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      background: var(--kontur-grayscale-light-background);
      padding: 24px;
      border-radius: 12px;
      transition: .15s ease;
    }

    .card:hover {
      background-color: var(--kontur-grayscale-background);
    }

    .card:has(a:active) {
      filter: brightness(96%);
    }

    .card_disabled {
      user-select: none;
    }

    .card_disabled > * {
      pointer-events: none;
      opacity: .54;
    }

    .card_react-ui {
      background-image: url("data:image/svg+xml,%3Csvg width='152' height='128' viewBox='0 0 152 128' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M106.266 75.375C95.063 75.375 85.9808 84.5252 85.9808 95.8125C85.9808 107.1 95.063 116.25 106.266 116.25C117.47 116.25 126.552 107.1 126.552 95.8125C126.552 84.5252 117.47 75.375 106.266 75.375Z' fill='rgba(0,0,0,.1)'/%3E%3Cpath d='M211.773 95.9979C211.773 79.9529 197.026 65.8805 173.544 56.6195C173.858 54.5338 174.142 52.4708 174.344 50.4454C176.66 27.3906 171.146 10.7507 158.826 3.5828C145.042 -4.43594 125.573 1.38424 105.887 17.2561C86.2006 1.38424 66.7311 -4.43594 52.9471 3.5828C40.6274 10.7507 35.1138 27.3906 37.4298 50.4454C37.6315 52.4708 37.9079 54.5414 38.2292 56.6345C36.2718 57.3875 34.3517 58.1856 32.5064 59.0213C11.5427 68.5158 0 81.662 0 95.9979C0 112.043 14.7478 126.115 38.2292 135.376C37.9079 137.462 37.6315 139.525 37.4298 141.55C35.1138 164.605 40.6274 181.245 52.9471 188.413C57.1827 190.833 61.9823 192.07 66.8506 191.997C78.5204 191.997 92.1475 185.808 105.887 174.74C119.618 185.808 133.253 191.997 144.938 191.997C149.806 192.069 154.605 190.832 158.841 188.413C171.161 181.245 176.675 164.605 174.359 141.55C174.157 139.525 173.873 137.462 173.559 135.376C197.041 126.13 211.788 112.035 211.788 95.9979M144.848 10.1634C147.978 10.0874 151.072 10.8513 153.813 12.3771C162.368 17.354 166.208 30.8541 164.34 49.4139C164.213 50.6788 164.063 51.9588 163.884 53.2463C154.12 50.283 144.122 48.1696 134 46.9292C127.864 38.709 121.04 31.0337 113.604 23.9873C125.281 14.8919 136.241 10.1634 144.841 10.1634M140.829 116.327C137.05 122.937 132.936 129.345 128.501 135.527C120.985 136.305 113.435 136.692 105.879 136.686C98.3262 136.692 90.7779 136.305 83.2645 135.527C78.8422 129.345 74.7401 122.936 70.9746 116.327C67.1963 109.736 63.7624 102.95 60.687 95.9979C63.7624 89.0455 67.1963 82.2598 70.9746 75.6687C74.7341 69.086 78.8236 62.7004 83.2271 56.5366C90.7543 55.7393 98.318 55.3422 105.887 55.347C113.44 55.3424 120.988 55.7294 128.501 56.5065C132.92 62.6798 137.024 69.0754 140.799 75.6687C144.574 82.2614 148.008 89.0469 151.086 95.9979C148.008 102.949 144.574 109.734 140.799 116.327M156.226 108.798C158.597 115.314 160.544 121.979 162.054 128.751C155.502 130.809 148.824 132.431 142.061 133.607C144.631 129.702 147.122 125.638 149.532 121.417C151.916 117.246 154.149 113.037 156.256 108.828M91.6992 146.392C96.3462 146.678 101.09 146.844 105.894 146.844C110.698 146.844 115.472 146.678 120.126 146.392C115.713 151.719 110.959 156.749 105.894 161.45C100.84 156.75 96.0983 151.719 91.6992 146.392ZM69.7195 133.592C62.9548 132.421 56.2738 130.804 49.7196 128.751C51.2232 121.99 53.1623 115.335 55.5246 108.828C57.6015 113.037 59.8279 117.246 62.2485 121.417C64.6691 125.588 67.1719 129.699 69.7195 133.607M55.5246 83.1604C53.1708 76.6777 51.2367 70.048 49.7345 63.313C56.2725 61.2571 62.9356 59.6299 69.6821 58.4416C67.1271 62.3342 64.6243 66.3699 62.2111 70.5788C59.798 74.7878 57.594 78.9439 55.4872 83.1604M120.082 45.5965C115.435 45.3104 110.691 45.1447 105.849 45.1447C101.048 45.1447 96.3163 45.2953 91.6544 45.5965C96.0534 40.2688 100.795 35.2384 105.849 30.5378C110.916 35.2372 115.671 40.2676 120.082 45.5965ZM149.517 70.5788C147.097 66.3524 144.594 62.2865 142.009 58.3813C148.789 59.5571 155.485 61.182 162.054 63.2453C160.547 70.0052 158.608 76.66 156.249 83.1679C154.172 78.959 151.938 74.7501 149.525 70.5864M47.4634 49.4214C45.5732 30.8691 49.4357 17.3615 57.9825 12.3846C60.7243 10.8612 63.8178 10.0974 66.9478 10.171C75.5469 10.171 86.5069 14.8994 98.1841 23.9948C90.743 31.0462 83.9144 38.7266 77.7733 46.9518C67.6538 48.198 57.6569 50.3037 47.8892 53.2463C47.7174 51.9588 47.5605 50.6863 47.4409 49.4214M36.6453 68.2899C37.7959 67.788 38.9688 67.286 40.1642 66.7841C42.5142 76.7759 45.7008 86.5488 49.6897 95.9979C45.6932 105.465 42.5041 115.259 40.1567 125.272C21.1206 117.404 10.0859 106.501 10.0859 95.9979C10.0859 86.0441 19.7982 75.9473 36.6453 68.2899ZM57.9825 179.611C49.4357 174.634 45.5732 161.127 47.4634 142.574C47.5829 141.309 47.7398 140.037 47.9116 138.742C57.6755 141.704 67.6735 143.818 77.7957 145.059C83.9338 153.282 90.7572 160.962 98.1915 168.016C81.9122 180.688 67.0374 184.867 58.0049 179.611M164.332 142.574C166.2 161.134 162.36 174.634 153.806 179.611C144.781 184.882 129.899 180.688 113.627 168.016C121.059 160.962 127.879 153.282 134.015 145.059C144.137 143.819 154.135 141.705 163.899 138.742C164.078 140.037 164.228 141.309 164.355 142.574M171.661 125.257C169.308 115.25 166.116 105.462 162.121 95.9979C166.114 86.529 169.303 76.7359 171.654 66.7238C190.653 74.592 201.717 85.4945 201.717 95.9979C201.717 106.501 190.683 117.404 171.647 125.272' fill='rgba(0,0,0,.1)' /%3E%3C/svg%3E%0A");
      background-position: 100% 100%;
      background-repeat: no-repeat;
    }
    
    .card_guides {
      background: var(--kontur-primary-default);
      color: white;
    }

    .card_guides:hover {
      background-color: var(--kontur-grayscale-text);
    }

    .card img {
      margin-bottom: 4px;
    }

    .card h3 {
      font-weight: 700;
      margin-bottom: 4px;
    }

    .card h3:last-child {
      margin-bottom: 0;
    }

    .card-decription {
      flex-grow: 1;
      margin-bottom: 20px;
    }

    .card a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 0;
      outline-offset: 4px;
      border-radius: inherit;
    }

    .copy-clipboard {
      position: relative;
      z-index: 1;
      border: 0;
      background: none;
      font-family: inherit;
      padding: 0;
      margin: 0;
      color: var(--kontur-grayscale-54-secondary-text);
      white-space: nowrap;
      transition: .15s ease;
    }
    
    .copy-clipboard:hover {
      color: var(--kontur-grayscale-87-text);
    }

    .version {
      margin-left: 8px;
      color: var(--kontur-grayscale-54-secondary-text);
    }

    @media screen and (max-width: 768px) {
        .sbdocs {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        #storybook-docs {
          margin-left: 0;
        }
    }

    @media screen and (min-width: 768px) {
      .card-list {
        grid-template-columns: repeat(6, 1fr);
      }

      .card {
        grid-column-end: span 2;
      }

      .card_small {
        grid-column-end: span 2;
      }

      .card_medium {
        grid-column-end: span 3;
      }

      .card_large {
        grid-column-end: span 4;
      }

      .card_guides {
        grid-row-end: span 2;
      }
    }
  `}})]})}__webpack_require__("./node_modules/@skbkontur/colors/colors.css");let main=function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./.storybook/versions/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}__webpack_require__.d(__webpack_exports__,{z:()=>getStorybooksVersions});var OLD_VERSIONS={"react-ui":["4.27.0","4.26.0","4.25.2","4.25.1","4.25.0","4.24.0","4.23.0","4.22.6","4.22.5","4.22.4","4.22.3","4.22.2","4.22.1","4.22.0","4.21.4","4.21.3","4.21.2","4.21.1","4.21.0","4.20.3","4.20.2","4.20.1","4.20.0","4.19.1","4.19.0","4.18.0","4.17.4","4.17.3","4.17.2","4.17.1","4.17.0","4.16.2","4.16.1","4.16.0","4.15.7","4.15.6","4.15.5","4.15.4","4.15.3","4.15.2","4.15.1","4.15.0","4.14.2","4.14.1","4.14.0","4.13.4","4.13.3","4.13.2","4.13.1","4.13.0","4.12.0","4.11.0","4.10.0","4.9.2","4.9.1","4.9.0","4.8.0","4.7.0","4.6.1","4.6.0","4.5.3","4.5.2","4.5.1","4.5.0","4.4.0","4.3.1","4.3.0","4.2.2","4.2.1","4.2.0","4.1.2","4.1.1","4.1.0","4.0.6","4.0.5","4.0.4","4.0.3","4.0.2","4.0.1","4.0.0"].reduce(function(acc,version){return _object_spread_props(_object_spread({},acc),_define_property({},version,"https://tech.skbkontur.ru/react-ui/"+version))},{}),"react-ui-validations":{"1.16.3 ":"https://tech.skbkontur.ru/react-ui-validations/"},"react-ui-addons":{"5.1.5":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/react-ui-addons"},"side-menu":{"3.1.8 ":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/side-menu"},icons:{"1.16.0 ":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/icons"},colors:{"0.5.1":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/colors"},"import-wizard":{"1.5.9":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/import-wizard"},logos:{"2.10.0":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/logos"},"mass-actions-panel":{"0.4.2":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/mass-actions-panel"},"mini-skeleton":{"0.1.3":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/mini-skeleton"},"react-error-pages":{"2.1.3":"https://ui.gitlab-pages.kontur.host/docs/ui-parking-old-if/#/react-error-pages"}};let actual_versions_namespaceObject=JSON.parse('{"typography":["0.1.3","0.1.2","0.1.1","0.1.0"],"table":["0.1.0"],"storybook-8":["0.0.0"],"side-menu":["side-menu_dark-theme","master","3.4.7","3.4.6","3.4.5","3.4.4","3.4.3","3.4.2","3.4.1","3.4.0","3.3.8","3.3.7","3.3.6","3.3.5","3.3.4","3.3.3","3.3.2","3.3.1","3.3.0","3.2.7","3.2.5","3.2.4","3.2.3","3.2.2","3.2.1","3.2.0"],"react-ui-validations":["virtualized-validation","next","merge-requests","master","2.3.7","2.3.6","2.3.4","2.3.3","2.3.2","2.3.0","2.2.1","2.2.0","2.1.6","2.1.5","2.1.3-66a28a30","2.1.3","2.1.0","2.0.6","2.0.5","2.0.4","2.0.3","2.0.2","2.0.1","2.0.0","0.0.0"],"react-ui-addons":["user-avatar_remake-default-and-initials","side-menu_avatar-icon","master","logos_dark-theme","5.3.3","5.3.2","5.3.1","5.3.0","5.2.5","5.2.4","5.2.3","5.2.2","5.2.1","5.2.0"],"react-ui":["keep-open-date-range-picker-on-edit","date-range-picker-dark","date-range-picker-5.x","date-input-fix-onblur-call-after-typing","date-input-allow-invalid-days","data-range-picker-label","IF-2268-FileUploader-tile","5.x","5.5.0","5.4.6","5.4.5","5.4.4","5.4.3","5.4.2","5.4.1","5.4.0","5.3.9","5.3.8","5.3.7","5.3.6","5.3.5","5.3.4","5.3.3","5.3.2","5.3.10","5.3.1","5.3.0","5.2.1","5.2.0","5.1.7","5.1.6","5.1.5","5.1.4","5.1.3","5.1.2","5.1.1","5.1.0","5.0.9","5.0.8","5.0.7","5.0.6","5.0.5","5.0.4","5.0.3","5.0.2","5.0.16","5.0.15","5.0.14","5.0.13","5.0.12","5.0.11","5.0.10","5.0.1","5.0.0","0.0.0"],"react-error-pages":["2.2.9","2.2.8","2.2.7","2.2.6","2.2.5","2.2.4","2.2.3","2.2.2","2.2.1","2.2.0"],"mini-skeleton":["0.2.0"],"mass-actions-panel":["master","0.6.2","0.6.1","0.6.0","0.5.7","0.5.6","0.5.5","0.5.4","0.5.3","0.5.2","0.5.1","0.5.0"],"logos":["master","logos_dark-theme","2.14.0","2.13.0","2.12.0","2.11.0"],"import-wizard":["master","2.3.6","2.3.5","2.3.4","2.3.3","2.3.2","2.3.1","2.3.0","2.2.2","2.2.1","2.2.0","2.1.0","2.0.1","2.0.0"],"icons":["master","1.20.1","1.20.0","1.19.1","1.19.0","1.18.0","1.17.1","1.17.0"],"hidden-links":["0.1.2","0.1.1","0.1.0"],"empty-state":["master","IF-2144_empty-state-docs","1.1.4","1.1.3","1.1.2","1.1.1","1.1.0"],"colors":["master","1.1.1","1.1.0","1.0.0"],"all-packages":["table-dev","side-menu_dark-theme","poc-notifications","mass-actions-panel_fix-styles","logos_dark-theme","icons-2.0-docs","holkin","hidden-links","fix-typography-docs-demo","fix-error-pages","empty-state","debug-side-menu-opening","colors-docs-v2","IF-2398-MassActionsPanel_Add_Local"]}');function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self1=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self1,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function versions_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function versions_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){versions_define_property(target,key,source[key])})}return target}function versions_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function versions_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):versions_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var STORYBOOKS_BASE_URLS={github:"https://tech.skbkontur.ru/kontur-ui/packages",gitlab:"https://ui.gitlab-pages.kontur.host/docs/storybook"},STORYBOOKS_LIST=[{key:"react-ui",title:"React UI"},{key:"react-ui-validations",title:"React UI Validations"},{key:"typography",title:"Typography"},{key:"react-ui-addons",title:"React UI Addons"},{key:"react-error-pages",title:"React Error Pages"},{key:"side-menu",title:"SideMenu"},{key:"empty-state",title:"EmptyState"},{key:"mass-actions-panel",title:"MassActionsPanel"},{key:"import-wizard",title:"ImportWizard"},{key:"mini-skeleton",title:"MiniSkeleton"},{key:"colors",title:"Colors"},{key:"icons",title:"Icons"},{key:"logos",title:"Logos"},{key:"hidden-links",title:"HiddenLinks"}],STORYBOOKS_HOSTED_ON_GITHUB=["react-ui","react-ui-validations"],versionRegexp=/^\d+\.\d+\.\d+$/,getStorybookUrl=function(storybookName,storybookVersion){var baseUrl=STORYBOOKS_BASE_URLS[STORYBOOKS_HOSTED_ON_GITHUB.includes(storybookName)?"github":"gitlab"];return"".concat(baseUrl,"/").concat(storybookName,"/").concat(storybookVersion)},sortVersions=function(a,b){for(var parseVersion=function(version){var match=version.match(versionRegexp);return match?match[0].split(".").map(Number):[1/0]},splitA=parseVersion(a),splitB=parseVersion(b),i=0;i<Math.max(splitA.length,splitB.length);i++){if(splitA[i]<splitB[i])return 1;if(splitA[i]>splitB[i])return -1}return a.localeCompare(b)},getStorybooksVersions=function(){var _ref=_async_to_generator(function(){var versions;return _ts_generator(this,function(_state){return[2,Object.keys(versions=actual_versions_namespaceObject).reduce(function(acc,packageName){var processedVersions=versions[packageName].filter(function(v){return v.match(versionRegexp)}).sort(sortVersions),latestVersion=processedVersions[0];return versions_object_spread_props(versions_object_spread({},acc),versions_define_property({},packageName,{latest:latestVersion?getStorybookUrl(packageName,latestVersion):"",versions:processedVersions.reduce(function(acc,version){return versions_object_spread_props(versions_object_spread({},acc),versions_define_property({},version,getStorybookUrl(packageName,version)))},{})}))},{})]})});return function getStorybooksVersions(){return _ref.apply(this,arguments)}}();_async_to_generator(function(){var packagesVersions;return _ts_generator(this,function(_state){switch(_state.label){case 0:return[4,getStorybooksVersions()];case 1:if(!Object.entries(packagesVersions=_state.sent()).length)return[2,{}];return[2,STORYBOOKS_LIST.reduce(function(acc,param){var packageName=param.key,title=param.title,versions=Object.assign(packagesVersions[packageName].versions,OLD_VERSIONS[packageName]);return versions_object_spread_props(versions_object_spread({},acc),versions_define_property({},packageName,{expanded:!0,title:title,url:packagesVersions[packageName].latest,versions:versions}))},{})]}})})}}]);
//# sourceMappingURL=main-mdx.2b2e2e8b.iframe.bundle.js.map