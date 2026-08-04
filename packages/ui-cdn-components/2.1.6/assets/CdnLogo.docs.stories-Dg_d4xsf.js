import{j as e}from"./jsx-runtime-wTqLqomF.js";import{L as T,T as C,C as t,a as d}from"./Logotype-CG_nvSz5.js";import{r as v}from"./index-Bk3ZmH4I.js";import{G as l}from"./Gapped-BXpVHwpM.js";const D={title:"CdnLogo",parameters:{creevey:{skip:!0}}},n=()=>e.jsxs(l,{vertical:!0,gap:8,children:[e.jsx("div",{style:{width:1,height:"100%",background:"green",marginLeft:-1}}),e.jsx(d,{productLogo:e.jsx(t,{logo:"talk"})}),e.jsx(d,{size:30,productLogo:e.jsx(t,{logo:"talk"})}),e.jsx(d,{size:38,productLogo:e.jsx(t,{logo:"talk"})}),"Lorem.",e.jsx("span",{style:{fontSize:28},children:"Lorem."})]});n.storyName="Пример логотипа с разными размерами";const s=()=>{const a={verticalAlign:"middle"};return e.jsxs(l,{gap:8,style:{position:"relative"},children:[e.jsx("div",{style:{position:"absolute",width:"100%",height:1,background:"green"}}),e.jsx(t,{logo:"kontur",size:30,style:a}),"Lorem.",e.jsx("span",{children:"Lorem ipsum."}),e.jsx("span",{children:e.jsx(t,{logo:"kontur",size:20,style:a})}),"Lorem ipsum dolor.",e.jsx(t,{logo:"kontur",size:38,style:a})]})};s.storyName="Пример Baseline";const r=()=>{const a=({logo:o,darkTheme:g})=>e.jsxs(l,{verticalAlign:"middle",gap:8,children:[e.jsx("span",{style:{width:450,display:"inline-block"},children:e.jsx("span",{style:{height:24,padding:"8px 12px",display:"inline-block",color:"#ADADAD"},children:e.jsx(t,{logo:o,...g!==void 0?{useDarkThemeColors:g}:{}})})}),e.jsx("span",{style:{width:150,display:"inline-block"},children:o}),e.jsx("code",{children:`<CdnLogo logo="${o}" />`})]}),[i,j]=v.useState(!1),b=i?"#292929":"#fff",f=i?"rgba(255, 255, 255, 0.87)":"#222",S=Object.keys(T).filter(o=>!o.endsWith("-dark"));return e.jsxs(l,{vertical:!0,gap:16,children:[e.jsx(C,{onValueChange:j,children:"useDarkThemeColors"}),e.jsx(l,{vertical:!0,gap:8,style:{background:b,color:f},children:S.map(o=>e.jsx(a,{logo:o,darkTheme:i},o))})]})};r.storyName="Полный список доступных логотипов";n.__docgenInfo={description:"",methods:[],displayName:"WithLogoAndSizeStory"};s.__docgenInfo={description:"",methods:[],displayName:"BaselineStory"};r.__docgenInfo={description:"",methods:[],displayName:"AllLogos"};var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
      Lorem.
      <span style={{
      fontSize: 28
    }}>Lorem.</span>
    </Gapped>;
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var y,h,u;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var k,L,x;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(x=(L=r.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const z=["WithLogoAndSizeStory","BaselineStory","AllLogos"],O=Object.freeze(Object.defineProperty({__proto__:null,AllLogos:r,BaselineStory:s,WithLogoAndSizeStory:n,__namedExportsOrder:z,default:D},Symbol.toStringTag,{value:"Module"}));export{O as C};
