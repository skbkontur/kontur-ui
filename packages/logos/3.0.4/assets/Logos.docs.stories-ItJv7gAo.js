import{G as a,T as D,L as v,K as r,a as p,S as z}from"./index-sa0rRjVA.js";import{r as A,R as e}from"./index-Bk3ZmH4I.js";const C={title:"Logos",parameters:{creevey:{skip:!0}}},o=()=>e.createElement(a,{vertical:!0},e.createElement("div",{style:{position:"absolute",width:1,height:"100%",background:"green",marginLeft:-1}}),e.createElement(p,{konturLogo:e.createElement(r,null)}),e.createElement(p,{size:30,konturLogo:e.createElement(r,null)}),e.createElement(p,{size:38,konturLogo:e.createElement(r,null),productLogo:e.createElement(z,null)}),"Lorem.",e.createElement("span",{style:{fontSize:28}},"Lorem."));o.storyName="Пример логотипа с разными размерами";const n=()=>e.createElement(a,{gap:8,style:{position:"relative"}},e.createElement("div",{style:{position:"absolute",width:"100%",height:1,background:"green"}}),e.createElement(r,{size:30}),"Lorem.",e.createElement("span",null,"Lorem ipsum."),e.createElement("span",null,e.createElement(r,{size:20})),"Lorem ipsum dolor.",e.createElement(r,{size:38}));n.storyName="Пример Baseline";const t=()=>{const b=({LogoComponent:s,product:l,darkTheme:c})=>e.createElement(a,{verticalAlign:"middle",gap:8},e.createElement("span",{style:{width:350,display:"inline-block"}},e.createElement("span",{style:{height:24,padding:"8px 12px",display:"inline-block",color:"#ADADAD"}},e.createElement(s,{...c!==void 0?{useDarkThemeColors:c}:{}}))),e.createElement("span",{style:{width:150,display:"inline-block"}},l),e.createElement("code",null,`<${l} />`)),[i,T]=A.useState(!1),f=i?"#292929":"#fff",S=i?"rgba(255, 255, 255, 0.87)":"#222";return e.createElement(a,{vertical:!0,gap:16},e.createElement(D,{onValueChange:T},"useDarkThemeColors"),e.createElement(a,{vertical:!0,gap:8,style:{background:f,color:S}},Object.entries(v).map(([s,l])=>e.createElement(b,{key:s,LogoComponent:l,product:s,darkTheme:i}))))};t.storyName="Полный список доступных логотипов";o.__docgenInfo={description:"",methods:[],displayName:"WithLogoAndSizeStory"};n.__docgenInfo={description:"",methods:[],displayName:"BaselineStory"};t.__docgenInfo={description:"",methods:[],displayName:"AllLogos"};var m,d,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Gapped vertical>
      <div style={{
      position: "absolute",
      width: 1,
      height: "100%",
      background: "green",
      marginLeft: -1
    }} />
      <Logotype konturLogo={<Logos.Kontur />} />
      <Logotype size={30} konturLogo={<Logos.Kontur />} />
      <Logotype size={38} konturLogo={<Logos.Kontur />} productLogo={<Logos.SchoolAcademy />} />
      Lorem.
      <span style={{
      fontSize: 28
    }}>Lorem.</span>
    </Gapped>;
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,L,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Gapped gap={8} style={{
    position: "relative"
  }}>
      <div style={{
      position: "absolute",
      width: "100%",
      height: 1,
      background: "green"
    }} />
      <Logos.Kontur size={30} />
      Lorem.
      <span>Lorem ipsum.</span>
      <span>
        <Logos.Kontur size={20} />
      </span>
      Lorem ipsum dolor.
      <Logos.Kontur size={38} />
    </Gapped>;
}`,...(h=(L=n.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var y,k,E;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const Row = ({
    LogoComponent,
    product,
    darkTheme
  }: {
    LogoComponent: ForwardRefExoticComponent<{
      size?: number;
      color?: string;
      separatorColor?: string;
      useDarkThemeColors?: boolean;
    } & RefAttributes<HTMLSpanElement>>;
    product: string;
    darkTheme?: boolean;
  }) => <Gapped verticalAlign="middle" gap={8}>
      <span style={{
      width: 350,
      display: "inline-block"
    }}>
        <span style={{
        height: 24,
        padding: "8px 12px",
        display: "inline-block",
        color: "#ADADAD"
      }}>
          <LogoComponent {...darkTheme !== undefined ? {
          useDarkThemeColors: darkTheme
        } : {}} />
        </span>
      </span>
      <span style={{
      width: 150,
      display: "inline-block"
    }}>{product}</span>
      <code>{\`<\${product} />\`}</code>
    </Gapped>;
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const background = isDarkTheme ? "#292929" : "#fff";
  const color = isDarkTheme ? "rgba(255, 255, 255, 0.87)" : "#222";
  return <Gapped vertical gap={16}>
      <Toggle onValueChange={setIsDarkTheme}>useDarkThemeColors</Toggle>
      <Gapped vertical gap={8} style={{
      background,
      color
    }}>
        {Object.entries(Logos).map(([logoName, LogoComponent]) => <Row key={logoName} LogoComponent={LogoComponent} product={logoName} darkTheme={isDarkTheme} />)}
      </Gapped>
    </Gapped>;
}`,...(E=(k=t.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const _=["WithLogoAndSizeStory","BaselineStory","AllLogos"],x=Object.freeze(Object.defineProperty({__proto__:null,AllLogos:t,BaselineStory:n,WithLogoAndSizeStory:o,__namedExportsOrder:_,default:C},Symbol.toStringTag,{value:"Module"}));export{x as L};
