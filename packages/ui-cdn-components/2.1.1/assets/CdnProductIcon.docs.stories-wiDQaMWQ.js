import{j as t}from"./jsx-runtime-F1iDwNaf.js";import{r as p}from"./index-YTOF1_EJ.js";const m=(n,e)=>{const r=n.filter(c=>c>=e);return r.length>0?Math.min(...r):Math.max(...n)},x=[16,24,32,36,48,64,82,128,256,512],g=[16,24,32,36,48,64],R=(n,e)=>e?g.includes(n)?n:m(g,n):x.includes(n)?n:m(x,n),A=(n,e,r)=>{const c=R(e,r),l=r?`symbol/${n}-symbol`:n;return`https://s.kontur.ru/common-v2/icons-products/${n}/${l}-${c}.svg`},N=p.createContext(A),W=()=>p.useContext(N),w=({children:n,value:e})=>t.jsx(N.Provider,{value:e.getProductIconUrl,children:n});w.__docgenInfo={description:"",methods:[],displayName:"CdnProductIconProvider",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  getProductIconUrl: CdnProductIconContextType;
}`,signature:{properties:[{key:"getProductIconUrl",value:{name:"signature",type:"function",raw:`(
  product: string,
  size: ProductIconSize,
  symbol?: boolean,
) => string`,signature:{arguments:[{type:{name:"string"},name:"product"},{type:{name:"union",raw:"16 | 24 | 32 | 36 | 48 | 64 | 82 | 128 | 256 | 512",elements:[{name:"literal",value:"16"},{name:"literal",value:"24"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"48"},{name:"literal",value:"64"},{name:"literal",value:"82"},{name:"literal",value:"128"},{name:"literal",value:"256"},{name:"literal",value:"512"}]},name:"size"},{type:{name:"boolean"},name:"symbol"}],return:{name:"string"}},required:!0}}]}},description:""}}};const E={root:"CdnProductIcon__root"},d=p.forwardRef(({product:n,size:e,style:r,name:c,symbol:l,...T},k)=>{const u=W(),[D,$]=p.useState(!1),U={flexShrink:0,width:e,height:e,...r};return t.jsx("img",{"data-tid":E.root,...T,"aria-hidden":!c,alt:c,ref:k,style:U,width:e,height:e,src:u(D?"kontur":n,e,l),onError:()=>$(!0)})});d.displayName="CdnProductIcon";d.__docgenInfo={description:"",methods:[],displayName:"CdnProductIcon"};const M={title:"UI CDN Components/CdnProductIcon",parameters:{creevey:{skip:!0}}},o=()=>t.jsx(d,{product:"adaptation",size:128});o.storyName="Базовое использование";const s=()=>{const n=[16,24,32,36,48,64,82,128,256,512];return t.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:n.map(e=>t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx(d,{product:"adaptation",size:e}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px"},children:[e,"px"]})]},e))})};s.storyName="Размеры";const a=()=>{const n=[16,24,32,36,48,64];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{margin:"0 0 10px"},children:"Symbol icons:"}),t.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:n.map(e=>t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx(d,{product:"adaptation",size:e,symbol:!0}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px"},children:[e,"px"]})]},e))})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{margin:"0 0 10px"},children:"Regular icons:"}),t.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:n.map(e=>t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx(d,{product:"adaptation",size:e}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px"},children:[e,"px"]})]},e))})]})]})};a.storyName="Symbol и regular";const i=()=>{const n=(e,r)=>`https://s.kontur.ru/common-v2/icons-products/${e}/${e}-${r}.svg`;return t.jsx(w,{value:{getProductIconUrl:n},children:t.jsx(d,{product:"adaptation",size:128})})};i.storyName="CdnProductIconProvider";o.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"};s.__docgenInfo={description:"",methods:[],displayName:"DifferentSizes"};a.__docgenInfo={description:"",methods:[],displayName:"SymbolVsRegular"};i.__docgenInfo={description:"",methods:[],displayName:"ProviderCase"};var y,v,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:'() => <CdnProductIcon product="adaptation" size={128} />',...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,h,P;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(P=(h=s.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var S,C,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(z=(C=a.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var j,_,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const getProductIconUrl: CdnProductIconContextType = (product: string, size: number) => {
    return \`https://s.kontur.ru/common-v2/icons-products/\${product}/\${product}-\${size}.svg\`;
  };
  return <CdnProductIconProvider value={{
    getProductIconUrl
  }}>
      <CdnProductIcon product="adaptation" size={128} />
    </CdnProductIconProvider>;
}`,...(b=(_=i.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const O=["DefaultStory","DifferentSizes","SymbolVsRegular","ProviderCase"],B=Object.freeze(Object.defineProperty({__proto__:null,DefaultStory:o,DifferentSizes:s,ProviderCase:i,SymbolVsRegular:a,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{B as C};
