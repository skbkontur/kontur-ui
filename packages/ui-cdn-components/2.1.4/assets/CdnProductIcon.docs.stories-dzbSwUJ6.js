import{j as e}from"./jsx-runtime-wTqLqomF.js";import{C as a,a as I}from"./CdnProductIcon-DNg4cawY.js";const P={title:"CdnProductIcon",parameters:{creevey:{skip:!0}}},r=()=>e.jsx(a,{product:"adaptation",size:128});r.storyName="Базовое использование";const t=()=>{const i=[16,24,32,36,48,64,82,128,256,512];return e.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:i.map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{product:"adaptation",size:n}),e.jsxs("div",{style:{marginTop:"8px",fontSize:"12px"},children:[n,"px"]})]},n))})};t.storyName="Размеры";const s=()=>{const i=[16,24,32,36,48,64];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px"},children:"Symbol icons:"}),e.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:i.map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{product:"adaptation",size:n,symbol:!0}),e.jsxs("div",{style:{marginTop:"8px",fontSize:"12px"},children:[n,"px"]})]},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px"},children:"Regular icons:"}),e.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:i.map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{product:"adaptation",size:n}),e.jsxs("div",{style:{marginTop:"8px",fontSize:"12px"},children:[n,"px"]})]},n))})]})]})};s.storyName="Symbol и regular";const o=()=>{const i=(n,h)=>`https://s.kontur.ru/common-v2/icons-products/${n}/${n}-${h}.svg`;return e.jsx(I,{value:{getProductIconUrl:i},children:e.jsx(a,{product:"adaptation",size:128})})};o.storyName="CdnProductIconProvider";r.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"};t.__docgenInfo={description:"",methods:[],displayName:"DifferentSizes"};s.__docgenInfo={description:"",methods:[],displayName:"SymbolVsRegular"};o.__docgenInfo={description:"",methods:[],displayName:"ProviderCase"};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:'() => <CdnProductIcon product="adaptation" size={128} />',...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,x,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const sizes = [16, 24, 32, 36, 48, 64, 82, 128, 256, 512] as const;
  return <div style={{
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap"
  }}>
      {sizes.map(size => <div key={size} style={{
      textAlign: "center"
    }}>
          <CdnProductIcon product="adaptation" size={size} />
          <div style={{
        marginTop: "8px",
        fontSize: "12px"
      }}>{size}px</div>
        </div>)}
    </div>;
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var m,y,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const sizes = [16, 24, 32, 36, 48, 64] as const;
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>
      <div>
        <h3 style={{
        margin: "0 0 10px"
      }}>Symbol icons:</h3>
        <div style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
          {sizes.map(size => <div key={size} style={{
          textAlign: "center"
        }}>
              <CdnProductIcon product="adaptation" size={size} symbol />
              <div style={{
            marginTop: "8px",
            fontSize: "12px"
          }}>{size}px</div>
            </div>)}
        </div>
      </div>
      <div>
        <h3 style={{
        margin: "0 0 10px"
      }}>Regular icons:</h3>
        <div style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
          {sizes.map(size => <div key={size} style={{
          textAlign: "center"
        }}>
              <CdnProductIcon product="adaptation" size={size} />
              <div style={{
            marginTop: "8px",
            fontSize: "12px"
          }}>{size}px</div>
            </div>)}
        </div>
      </div>
    </div>;
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,f,z;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const getProductIconUrl: CdnProductIconContextType = (product: string, size: number) => {
    return \`https://s.kontur.ru/common-v2/icons-products/\${product}/\${product}-\${size}.svg\`;
  };
  return <CdnProductIconProvider value={{
    getProductIconUrl
  }}>
      <CdnProductIcon product="adaptation" size={128} />
    </CdnProductIconProvider>;
}`,...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};const S=["DefaultStory","DifferentSizes","SymbolVsRegular","ProviderCase"],_=Object.freeze(Object.defineProperty({__proto__:null,DefaultStory:r,DifferentSizes:t,ProviderCase:o,SymbolVsRegular:s,__namedExportsOrder:S,default:P},Symbol.toStringTag,{value:"Module"}));export{_ as C};
