import{j as o}from"./jsx-runtime-wTqLqomF.js";import{L as R,C as e,a as s,b as U}from"./Logotype-BRwH9JR8.js";import{r as $}from"./index-Bk3ZmH4I.js";import{T as W}from"./Toggle-DRvRUm_k.js";import{G as g}from"./Gapped-uHYrem14.js";const B={title:"CdnLogo",parameters:{creevey:{skip:!0}}},r=()=>o.jsxs(g,{vertical:!0,gap:8,children:[o.jsx("div",{style:{width:1,height:"100%",background:"green",marginLeft:-1}}),o.jsx(s,{productLogo:o.jsx(e,{logo:"dostup"})}),o.jsx("span",{style:{display:"inline-flex",width:140,height:30,alignItems:"center",justifyContent:"center",background:"#1f1f1f"},children:o.jsx(s,{productLogo:o.jsx(e,{logo:"dostup-dark"})})}),o.jsx(s,{productLogo:o.jsx(e,{logo:"dostup-vertical"})}),o.jsx(s,{productLogo:o.jsx(e,{logo:"focus"})}),o.jsx(s,{productLogo:o.jsx(e,{logo:"focus-en"})})]});r.storyName="Базовые варианты";const t=()=>o.jsxs(g,{vertical:!0,gap:8,children:[o.jsx("div",{style:{width:1,height:"100%",background:"green",marginLeft:-1}}),o.jsx(s,{productLogo:o.jsx(e,{logo:"talk"})}),o.jsx(s,{size:30,productLogo:o.jsx(e,{logo:"talk"})}),o.jsx(s,{size:38,productLogo:o.jsx(e,{logo:"talk"})})]});t.storyName="Размер";const l=()=>{const d={verticalAlign:"middle"};return o.jsxs(g,{gap:8,style:{position:"relative"},children:[o.jsx("div",{style:{position:"absolute",width:"100%",height:1,background:"green"}}),o.jsx(e,{logo:"kontur",size:30,style:d}),"Lorem.",o.jsx("span",{children:"Lorem ipsum."}),o.jsx("span",{children:o.jsx(e,{logo:"kontur",size:20,style:d})}),"Lorem ipsum dolor.",o.jsx(e,{logo:"kontur",size:38,style:d})]})};l.storyName="Baseline";const a=()=>{const d=p=>`https://s.kontur.ru/common-v2/logos/v2/${p}/${p}-28.svg`;return o.jsx(U,{value:{getLogosUrl:d},children:o.jsx(e,{logo:"dostup"})})};a.storyName="Переопределение URL";const i=()=>{const d=({logo:n,darkTheme:c})=>o.jsxs(g,{verticalAlign:"middle",gap:8,children:[o.jsx("span",{style:{width:450,display:"inline-block"},children:o.jsx("span",{style:{height:24,padding:"8px 12px",display:"inline-block",color:"#ADADAD"},children:o.jsx(e,{logo:n,...c!==void 0?{useDarkThemeColors:c}:{}})})}),o.jsx("span",{style:{width:150,display:"inline-block"},children:n}),o.jsx("code",{children:`<CdnLogo logo="${n}" />`})]}),[p,N]=$.useState(!1),I=p?"#292929":"#fff",P=p?"rgba(255, 255, 255, 0.87)":"#222",O=Object.keys(R).filter(n=>!n.endsWith("-dark"));return o.jsxs(g,{vertical:!0,gap:16,children:[o.jsx(W,{onValueChange:N,children:"useDarkThemeColors"}),o.jsx(g,{vertical:!0,gap:8,style:{background:I,color:P},children:O.map(n=>o.jsx(d,{logo:n,darkTheme:p},n))})]})};i.storyName="Полный список доступных логотипов";r.__docgenInfo={description:"В пропе `logo` указывается название логотипа без размера.\n\nДоступные варианты на примере логотипов dostup и focus:\n- базовый: `dostup`\n- тёмная тема: `dostup-dark` или проп `useDarkThemeColors`\n- вертикальный: `dostup-vertical`, `dostup-vertical-dark`\n- английская версия: `focus-en`, `diadoc-en`. Есть не у всех логотипов.\n\nПолный список значений — в типе `LogosType`.",methods:[],displayName:"ExampleLogo"};t.__docgenInfo={description:"Проп `size` задаёт размер логотипа.",methods:[],displayName:"ExampleWithLogoAndSizeStory"};l.__docgenInfo={description:"",methods:[],displayName:"ExampleBaselineStory"};a.__docgenInfo={description:"Компонент `<CdnLogoProvider>` позволяет переопределить URL для получения логотипа (тестовые стенды, кастомный CDN).",methods:[],displayName:"ExampleProviderCase"};i.__docgenInfo={description:"",methods:[],displayName:"ExampleAllLogos"};var u,m,y,L,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Gapped vertical gap={8}>
      <div style={{
      width: 1,
      height: "100%",
      background: "green",
      marginLeft: -1
    }} />
      <Logotype productLogo={<CdnLogo logo="dostup" />} />
      <span style={{
      display: "inline-flex",
      width: 140,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      background: "#1f1f1f"
    }}>
        <Logotype productLogo={<CdnLogo logo="dostup-dark" />} />
      </span>
      <Logotype productLogo={<CdnLogo logo="dostup-vertical" />} />
      <Logotype productLogo={<CdnLogo logo="focus" />} />
      <Logotype productLogo={<CdnLogo logo="focus-en" />} />
    </Gapped>;
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source},description:{story:"В пропе `logo` указывается название логотипа без размера.\n\nДоступные варианты на примере логотипов dostup и focus:\n- базовый: `dostup`\n- тёмная тема: `dostup-dark` или проп `useDarkThemeColors`\n- вертикальный: `dostup-vertical`, `dostup-vertical-dark`\n- английская версия: `focus-en`, `diadoc-en`. Есть не у всех логотипов.\n\nПолный список значений — в типе `LogosType`.",...(h=(L=r.parameters)==null?void 0:L.docs)==null?void 0:h.description}}};var x,k,j,f,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Gapped vertical gap={8}>
      <div style={{
      width: 1,
      height: "100%",
      background: "green",
      marginLeft: -1
    }} />
      <Logotype productLogo={<CdnLogo logo="talk" />} />
      <Logotype size={30} productLogo={<CdnLogo logo="talk" />} />
      <Logotype size={38} productLogo={<CdnLogo logo="talk" />} />
    </Gapped>;
}`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source},description:{story:"Проп `size` задаёт размер логотипа.",...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var C,b,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const logoStyle = {
    verticalAlign: "middle"
  } as const;
  return <Gapped gap={8} style={{
    position: "relative"
  }}>
      <div style={{
      position: "absolute",
      width: "100%",
      height: 1,
      background: "green"
    }} />
      <CdnLogo logo="kontur" size={30} style={logoStyle} />
      Lorem.
      <span>Lorem ipsum.</span>
      <span>
        <CdnLogo logo="kontur" size={20} style={logoStyle} />
      </span>
      Lorem ipsum dolor.
      <CdnLogo logo="kontur" size={38} style={logoStyle} />
    </Gapped>;
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var S,D,E,_,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const getLogosUrl: CdnLogoContextType = logo => {
    return \`https://s.kontur.ru/common-v2/logos/v2/\${logo}/\${logo}-28.svg\`;
  };
  return <CdnLogoProvider value={{
    getLogosUrl
  }}>
      <CdnLogo logo="dostup" />
    </CdnLogoProvider>;
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"Компонент `<CdnLogoProvider>` позволяет переопределить URL для получения логотипа (тестовые стенды, кастомный CDN).",...(z=(_=a.parameters)==null?void 0:_.docs)==null?void 0:z.description}}};var A,w,G;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const Row = ({
    logo,
    darkTheme
  }: {
    logo: LogosType;
    darkTheme?: boolean;
  }) => <Gapped verticalAlign="middle" gap={8}>
      <span style={{
      width: 450,
      display: "inline-block"
    }}>
        <span style={{
        height: 24,
        padding: "8px 12px",
        display: "inline-block",
        color: "#ADADAD"
      }}>
          <CdnLogo logo={logo} {...darkTheme !== undefined ? {
          useDarkThemeColors: darkTheme
        } : {}} />
        </span>
      </span>
      <span style={{
      width: 150,
      display: "inline-block"
    }}>{logo}</span>
      <code>{\`<CdnLogo logo="\${logo}" />\`}</code>
    </Gapped>;
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const background = isDarkTheme ? "#292929" : "#fff";
  const color = isDarkTheme ? "rgba(255, 255, 255, 0.87)" : "#222";
  const logoKeys = Object.keys(LogosObject).filter(key => !key.endsWith("-dark")) as LogosType[];
  return <Gapped vertical gap={16}>
      <Toggle onValueChange={setIsDarkTheme}>useDarkThemeColors</Toggle>
      <Gapped vertical gap={8} style={{
      background,
      color
    }}>
        {logoKeys.map(logo => <Row key={logo} logo={logo} darkTheme={isDarkTheme} />)}
      </Gapped>
    </Gapped>;
}`,...(G=(w=i.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};const K=["ExampleLogo","ExampleWithLogoAndSizeStory","ExampleBaselineStory","ExampleProviderCase","ExampleAllLogos"],J=Object.freeze(Object.defineProperty({__proto__:null,ExampleAllLogos:i,ExampleBaselineStory:l,ExampleLogo:r,ExampleProviderCase:a,ExampleWithLogoAndSizeStory:t,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{J as C};
