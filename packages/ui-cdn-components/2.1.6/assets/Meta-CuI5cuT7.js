import{R as e,r as o}from"./index-Bk3ZmH4I.js";import{s as l}from"./m-Dz_YzSTF.js";import{c as p}from"./index-0g1UT_Ru.js";const h=()=>new Promise(t=>{fetch("https://ui.gitlab-pages.kontur.host/docs/storybook/versions.json",{method:"HEAD"}).then(s=>{s.ok?t(!0):t(!1)}).catch(()=>{t(!1)})}),u="packages/react-ui/components",d=({component:t,guides:s,figma:a}={})=>{const[n,c]=e.useState(!1);return o.useEffect(()=>{h().then(r=>{c(r)}).catch(r=>console.log("Error checking access: ",r))},[]),e.createElement(e.Fragment,null,e.createElement("h1",null,t),e.createElement("div",{className:"sb-docs-header"},e.createElement("style",null,`
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
  `),s&&e.createElement("a",{href:s,target:"_blank"},e.createElement("img",{src:"https://tech.skbkontur.ru/kontur-ui/favicon.svg",alt:""}),"Гайды"),a&&e.createElement("a",{href:a,target:"_blank"},e.createElement("img",{src:"https://static.figma.com/app/icon/1/favicon.svg",alt:""}),"Figma"),n&&t&&e.createElement("a",{href:`https://yt.skbkontur.ru/issues/IF?q=${t}`,target:"_blank"},e.createElement("img",{src:"https://yt.skbkontur.ru/static/favicon.ico",alt:""}),"YouTrack"),n&&t&&e.createElement("a",{href:`https://git.skbkontur.ru/ui/kontur-ui/-/tree/master/${u}/${t}`,target:"_blank"},e.createElement("img",{src:"https://git.skbkontur.ru/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png",alt:""}),"GitLab")))};d.__docgenInfo={description:"",methods:[],displayName:"Header"};const g=l(16,["M7.376 1.592a.776.776 0 0 1 .02.835 4.5 4.5 0 0 0 6.178 6.178.776.776 0 0 1 .834.02c.238.159.405.475.293.828A6.5 6.5 0 1 1 6.547 1.3a.727.727 0 0 1 .83.293zm-1.14.894a5.501 5.501 0 1 0 7.278 7.278 5.5 5.5 0 0 1-7.278-7.278z"]),f=l(16,["M8 .5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z","M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z","M12.803 12.803a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z","M4.318 4.318a.5.5 0 0 1-.707 0L2.197 2.904a.5.5 0 0 1 .707-.707L4.318 3.61a.5.5 0 0 1 0 .707z","M4 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z","M14.5 8a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z","M2.5 8a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z","M12.803 2.197a.5.5 0 0 1 0 .707L11.39 4.318a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z","M4.318 10.682a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z"]);let E="";const m=document.createElement("style");m.innerHTML=E;document.head.appendChild(m);const b=[{icon:e.createElement(f,null),caption:"Light",value:"LIGHT_THEME"},{icon:e.createElement(g,null),caption:"Dark",value:"DARK_THEME"}],k=({of:t})=>{const s=o.useContext(p);return t&&!s.componentStories().some(a=>a.title===t.default.title)&&s.referenceMeta(t,!0),o.useEffect(()=>{let a;try{if(a=new URL(window.parent.location.toString()),a.hash){const n=document.getElementById(decodeURIComponent(a.hash.substring(1)));n&&window.setTimeout(()=>{const i=n.getBoundingClientRect().top+window.scrollY+-65;window.scrollTo({top:i,behavior:"smooth"})},2e3)}}catch{}}),b.find(a=>a.value===s.store.userGlobals.globals.theme),e.createElement(e.Fragment,null)};k.__docgenInfo={description:"",methods:[],displayName:"Meta",props:{of:{required:!1,tsType:{name:"ModuleExports"},description:""}}};export{d as H,k as M};
