import{j as e}from"./jsx-runtime-wTqLqomF.js";import{r as $}from"./index-Bk3ZmH4I.js";import{C as i,a as O,P as R}from"./CdnProductIcon-BfxDGI8P.js";import{G as l}from"./Gapped-uHYrem14.js";import{T as U}from"./Toggle-DRvRUm_k.js";const W={title:"CdnProductIcon",parameters:{creevey:{skip:!0}}},a=()=>e.jsx(i,{product:"adaptation",size:128});a.storyName="Базовый пример";const s=()=>{const t=[16,24,32,36,48,64,82,128,256,512];return e.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:t.map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{product:"adaptation",size:n}),e.jsxs("div",{style:{marginTop:"8px",fontSize:"12px"},children:[n,"px"]})]},n))})};s.storyName="Размер";const o=()=>{const t=[16,24,32,36,48,64];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 10px"},children:"Символьная иконка:"}),e.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:t.map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{product:"adaptation",size:n,symbol:!0}),e.jsxs("div",{style:{marginTop:"8px",fontSize:"12px"},children:[n,"px"]})]},n))})]})};o.storyName="Символьная иконка";const r=()=>{const t=(n,p)=>`https://s.kontur.ru/common-v2/icons-products/${n}/${n}-${p}.svg`;return e.jsx(O,{value:{getProductIconUrl:t},children:e.jsx(i,{product:"adaptation",size:128})})};r.storyName="Переопределение URL";const c=()=>{const t=({product:d,symbol:G})=>e.jsxs(l,{verticalAlign:"middle",gap:8,children:[e.jsx("span",{style:{width:64,display:"inline-block"},children:e.jsx("span",{style:{height:32,padding:"8px 12px",display:"inline-block"},children:e.jsx(i,{product:d,size:32,...G?{symbol:!0}:{}})})}),e.jsx("span",{style:{width:200,display:"inline-block"},children:d}),e.jsx("code",{children:`<CdnProductIcon product="${d}" size={32} />`})]}),[n,p]=$.useState(!1),A=Object.keys(R);return e.jsxs(l,{vertical:!0,gap:16,children:[e.jsx(U,{onValueChange:p,children:"symbol"}),e.jsx(l,{vertical:!0,gap:8,children:A.map(d=>e.jsx(t,{product:d,symbol:n},d))})]})};c.storyName="Полный список доступных иконок";a.__docgenInfo={description:"",methods:[],displayName:"ExampleBasic"};s.__docgenInfo={description:"Проп `size` задаёт размер продуктовой иконки. Доступные размеры: `16`, `24`, `32`, `36`, `48`, `64`, `82`, `128`, `256`, `512`.",methods:[],displayName:"ExampleSizes"};o.__docgenInfo={description:"Проп `symbol` отображает символьную иконку. Символьная иконка — упрощённая версия продуктовой иконки без цветной плашки. Доступные размеры: `16`–`64`.",methods:[],displayName:"ExampleSymbol"};r.__docgenInfo={description:"Компонент `<CdnProductIconProvider>` позволяет переопределить URL для получения иконки.",methods:[],displayName:"ExampleProviderCase"};c.__docgenInfo={description:"",methods:[],displayName:"ExampleAllProductIcons"};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:'() => <CdnProductIcon product="adaptation" size={128} />',...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,g,v,I,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"Проп `size` задаёт размер продуктовой иконки. Доступные размеры: `16`, `24`, `32`, `36`, `48`, `64`, `82`, `128`, `256`, `512`.",...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.description}}};var h,P,z,f,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const sizes = [16, 24, 32, 36, 48, 64] as const;
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>
      <h3 style={{
      margin: "0 0 10px"
    }}>Символьная иконка:</h3>
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
    </div>;
}`,...(z=(P=o.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Проп `symbol` отображает символьную иконку. Символьная иконка — упрощённая версия продуктовой иконки без цветной плашки. Доступные размеры: `16`–`64`.",...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var S,C,E,_,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const getProductIconUrl: CdnProductIconContextType = (product: string, size: number) => {
    return \`https://s.kontur.ru/common-v2/icons-products/\${product}/\${product}-\${size}.svg\`;
  };
  return <CdnProductIconProvider value={{
    getProductIconUrl
  }}>
      <CdnProductIcon product="adaptation" size={128} />
    </CdnProductIconProvider>;
}`,...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:"Компонент `<CdnProductIconProvider>` позволяет переопределить URL для получения иконки.",...(k=(_=r.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};var T,w,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const Row = ({
    product,
    symbol
  }: {
    product: ProductIconsType;
    symbol?: boolean;
  }) => <Gapped verticalAlign="middle" gap={8}>
      <span style={{
      width: 64,
      display: "inline-block"
    }}>
        <span style={{
        height: 32,
        padding: "8px 12px",
        display: "inline-block"
      }}>
          <CdnProductIcon product={product} size={32} {...symbol ? {
          symbol: true
        } : {}} />
        </span>
      </span>
      <span style={{
      width: 200,
      display: "inline-block"
    }}>{product}</span>
      <code>{\`<CdnProductIcon product="\${product}" size={32} />\`}</code>
    </Gapped>;
  const [isSymbol, setIsSymbol] = useState(false);
  const productKeys = Object.keys(ProductIconsObject) as ProductIconsType[];
  return <Gapped vertical gap={16}>
      <Toggle onValueChange={setIsSymbol}>symbol</Toggle>
      <Gapped vertical gap={8}>
        {productKeys.map(product => <Row key={product} product={product} symbol={isSymbol} />)}
      </Gapped>
    </Gapped>;
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const B=["ExampleBasic","ExampleSizes","ExampleSymbol","ExampleProviderCase","ExampleAllProductIcons"],q=Object.freeze(Object.defineProperty({__proto__:null,ExampleAllProductIcons:c,ExampleBasic:a,ExampleProviderCase:r,ExampleSizes:s,ExampleSymbol:o,__namedExportsOrder:B,default:W},Symbol.toStringTag,{value:"Module"}));export{q as C};
