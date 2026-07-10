import{R as t,r as o}from"./index-Bk3ZmH4I.js";import{j as m}from"./jsx-runtime-wTqLqomF.js";import{c as I}from"./index-DmIGjz0l.js";const C=()=>new Promise(e=>{fetch("https://ui.gitlab-pages.kontur.host/docs/storybook/versions.json",{method:"HEAD"}).then(n=>{n.ok?e(!0):e(!1)}).catch(()=>{e(!1)})}),N="packages/react-ui/components",S=({component:e,guides:n,figma:a}={})=>{const[r,c]=t.useState(!1);return o.useEffect(()=>{C().then(u=>{c(u)}).catch(u=>console.log("Error checking access: ",u))},[]),t.createElement(t.Fragment,null,t.createElement("h1",null,e),t.createElement("div",{className:"sb-docs-header"},t.createElement("style",null,`
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
  `),n&&t.createElement("a",{href:n,target:"_blank"},t.createElement("img",{src:"https://tech.skbkontur.ru/kontur-ui/favicon.svg",alt:""}),"Гайды"),a&&t.createElement("a",{href:a,target:"_blank"},t.createElement("img",{src:"https://static.figma.com/app/icon/1/favicon.svg",alt:""}),"Figma"),r&&e&&t.createElement("a",{href:`https://yt.skbkontur.ru/issues/IF?q=${e}`,target:"_blank"},t.createElement("img",{src:"https://yt.skbkontur.ru/static/favicon.ico",alt:""}),"YouTrack"),r&&e&&t.createElement("a",{href:`https://git.skbkontur.ru/ui/kontur-ui/-/tree/master/${N}/${e}`,target:"_blank"},t.createElement("img",{src:"https://git.skbkontur.ru/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png",alt:""}),"GitLab")))};S.__docgenInfo={description:"",methods:[],displayName:"Header"};const L=typeof window<"u"?o.useLayoutEffect:o.useEffect,O="​";function z(e){return e.nodeType===Node.DOCUMENT_NODE}function D(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"adoptedStyleSheets"in e}const x=o.forwardRef(({color:e,size:n,style:a,"aria-hidden":r=!0,viewBoxSize:c=16,align:l="center",children:u,tabIndex:_,onKeyUp:f,onBlur:h,paths:w=[],...y},M)=>{const p=o.useRef(null),[d,E]=o.useState(!1);L(()=>{const s=p.current;if(!s||!s.attachShadow)return;const i=s.ownerDocument.createElement("span");s.append(i);try{const g=i.attachShadow({mode:"closed"});g.textContent=O}catch(g){console.error(g)}return()=>i.remove()},[p.current]);const T=o.useCallback(s=>{const i=s.currentTarget.getRootNode();!d&&s.key==="Tab"&&(z(i)||D(i))&&i.activeElement===s.currentTarget&&E(!0),f==null||f(s)},[d,f]),R=o.useCallback(s=>{d&&E(!1),h==null||h(s)},[d,h]),b=m.jsx("svg",{role:"img","aria-label":"ui-icons","data-tid":"Icon__root",ref:M,width:n||c,height:n||c,style:{fill:e??"currentColor",marginBottom:l==="none"||l==="center"?0:"-0.1875em",flexShrink:0,outline:d?void 0:"none",...l!=="center"?a:{}},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${c} ${c}`,"aria-hidden":r,tabIndex:_,onKeyUp:T,onBlur:R,...y,children:w.map((s,i)=>m.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:s},i.toString()))});return l==="center"?m.jsxs("span",{"aria-hidden":r,style:{display:"inline-flex",alignItems:"center",...a},children:[m.jsx("span",{ref:p}),b]}):b});x.__docgenInfo={description:"",methods:[],displayName:"BaseIcon",props:{"aria-hidden":{defaultValue:{value:"true",computed:!1},required:!1},viewBoxSize:{defaultValue:{value:"16",computed:!1},required:!1},align:{defaultValue:{value:'"center"',computed:!1},required:!1},paths:{defaultValue:{value:"[]",computed:!1},required:!1}}};const k=(e,n)=>{const a=o.forwardRef((r,c)=>o.createElement(x,{paths:n,viewBoxSize:e,ref:c,...r}));return a.__KONTUR_ICON__=!0,a},H=k(16,["M7.376 1.592a.776.776 0 0 1 .02.835 4.5 4.5 0 0 0 6.178 6.178.776.776 0 0 1 .834.02c.238.159.405.475.293.828A6.5 6.5 0 1 1 6.547 1.3a.727.727 0 0 1 .83.293zm-1.14.894a5.501 5.501 0 1 0 7.278 7.278 5.5 5.5 0 0 1-7.278-7.278z"]),A=k(16,["M8 .5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z","M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z","M12.803 12.803a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z","M4.318 4.318a.5.5 0 0 1-.707 0L2.197 2.904a.5.5 0 0 1 .707-.707L4.318 3.61a.5.5 0 0 1 0 .707z","M4 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z","M14.5 8a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z","M2.5 8a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z","M12.803 2.197a.5.5 0 0 1 0 .707L11.39 4.318a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z","M4.318 10.682a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z"]);let F="";const v=document.createElement("style");v.innerHTML=F;document.head.appendChild(v);const V=[{icon:t.createElement(A,null),caption:"Light",value:"LIGHT_THEME"},{icon:t.createElement(H,null),caption:"Dark",value:"DARK_THEME"}],j=({of:e})=>{const n=o.useContext(I);return e&&!n.componentStories().some(a=>a.title===e.default.title)&&n.referenceMeta(e,!0),o.useEffect(()=>{let a;try{if(a=new URL(window.parent.location.toString()),a.hash){const r=document.getElementById(decodeURIComponent(a.hash.substring(1)));r&&window.setTimeout(()=>{const l=r.getBoundingClientRect().top+window.scrollY+-65;window.scrollTo({top:l,behavior:"smooth"})},2e3)}}catch{}}),V.find(a=>a.value===n.store.userGlobals.globals.theme),t.createElement(t.Fragment,null)};j.__docgenInfo={description:"",methods:[],displayName:"Meta",props:{of:{required:!1,tsType:{name:"ModuleExports"},description:""}}};export{S as H,j as M};
