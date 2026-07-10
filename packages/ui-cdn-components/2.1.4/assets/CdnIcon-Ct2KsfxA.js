import{a as bn,_ as y}from"./toPropertyKey-B36dj_7n.js";import{c as i,_ as r,n as Qr,o as Jr,q as I,m as en,l as nn,d as Xr,T as W,b as M,s as sn,r as Cn,a as On,C as zn,e as Dn,t as Tn,u as Kr,v as ni,k as Ln,p as ei,Z as ti,x as Or,f as tn,B as rn,w as ri,y as ii,z as xn,A as Fn}from"./Gapped-BXpVHwpM.js";import{R as d,r as k}from"./index-Bk3ZmH4I.js";import{j as _}from"./jsx-runtime-wTqLqomF.js";var Hn,$n,zr=function(){return i(Hn||(Hn=r([`
    outline: none;
    border: none;
    margin: 0; /* Need for Safari. */
    padding: 0;
    width: auto;
    overflow: visible; /* On IE it's hidden by default. */
    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable 'input' types in iOS */
    -webkit-appearance: none;
    text-align: inherit;

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `])))},oi=function(){return i($n||($n=r([`
    letter-spacing: normal;
    line-height: normal;
    font-family: inherit;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    font-stretch: normal;

    /* ie11 doesnt support 'initial' */
    text-align: left;
    text-align: initial;
    text-transform: none;
    text-shadow: none;
  `])))},Dr={small:16,medium:20,large:24},Un="small",ai=["size"],li=function(n){return typeof n=="string"&&Object.keys(Dr).includes(n)},ci=function(n){return Object.entries(Dr).sort(function(l,t){var o=l[1],c=t[1];return Math.abs(n-o)>Math.abs(n-c)?1:-1})[0][0]},An=function(n,l){return Qr(l,function(t,o){var c=t.size,s=c===void 0?Un:c,a=bn(t,ai),u=Un;s!==u&&li(s)?u=s:typeof s=="number"&&(u=ci(s));var m=n[u]();return d.cloneElement(m,y({ref:o},a))})},si=function(n,l){var t=this;this.interval=null,this.start=function(){t.animations.forEach(function(o){return o.start()}),t.interval=ui(function(){t.animations.forEach(function(o){return o.step()})},t.FPS)},this.stop=function(){t.interval&&(t.interval.clear(),t.animations.forEach(function(o){return o.finish()}))},this.animations=n,this.FPS=l,this.start()},ui=function(n,l){var t=0,o=!1,c=0,s=function a(){if(!o){var u=new Date().getTime();t||(t=u),u-t>l&&(n(),t=u),I.globalObject.requestAnimationFrame&&(c=I.globalObject.requestAnimationFrame(a))}};return s(),{clear:function(){o=!0,I.globalObject.cancelAnimationFrame==null||I.globalObject.cancelAnimationFrame(c)}}},hn=function(n,l,t){var o=this;this.startTime=0,this.isFinished=!1,this.step=function(){if(!o.isFinished){var c=new Date().getTime();o.startTime||(o.startTime=c);var s=(c-o.startTime)/o.duration;o.onProgress(s),s>=1&&o.finish()}},this.reset=function(){o.startTime=0,o.isFinished=!1},this.finish=function(){o.isFinished=!0,o.onFinish&&o.onFinish(o)},this.start=function(){o.isFinished||o.step()},this.duration=n,this.onProgress=l,this.onFinish=t},di=function(n,l,t,o,c){return new hn(t,function(s){var a=n+(l-n)*s;o("stroke-dashoffset",""+a+c)},function(s){s.reset()})},gi=function(n,l,t,o,c){var s=!1;return new hn(t,function(a){var u=s?1-a:a,m=[n[0]+(l[0]-n[0])*u,n[1]+(l[1]-n[1])*u];o("stroke-dasharray",""+m[0]+c+" "+m[1]+c)},function(a){s=!s,a.reset()})},mi=function(n,l,t){var o=n.map(function(a){return Jr.create(a).rgb}),c=0,s=1;return new hn(l,function(a){var u=o[c],m=o[s];if(u&&m){var b=[Math.round(u[0]+(m[0]-u[0])*a),Math.round(u[1]+(m[1]-u[1])*a),Math.round(u[2]+(m[2]-u[2])*a)];t("stroke","rgb("+b+")")}},function(a){a.reset(),c=s,s=(s+1)%n.length})},bi=function(n,l,t,o,c){return c===void 0&&(c="deg"),new hn(t,function(s){var a=Math.round(n+(l-n)*s);o("transform","rotate("+a+c+")")},function(s){s.reset()})},Gn,Yn,Zn,Vn,dn=en({root:function(){return i(Gn||(Gn=r([`
      display: inline-block;
      margin-left: -1px;
      margin-right: -1px;
    `])))},rootInline:function(){return i(Yn||(Yn=r([`
      margin-left: -0.0714285714285714em;
      margin-right: -0.0714285714285714em;
    `])))},icon:function(){return i(Zn||(Zn=r([`
      margin-bottom: -3px;
      border-radius: 50%;
      overflow: visible;
    `])))},iconInline:function(){return i(Vn||(Vn=r([`
      height: 1.1428571428571428em;
      width: 1.1428571428571428em;
      margin-bottom: -0.2428571428571428em;
      stroke-width: 0.10714285714285714em;
    `])))}}),jn={big:{size:96,width:4,radius:32},normal:{size:48,width:2,radius:16},mini:{size:16,width:1.5,radius:6}},hi=function(n){return typeof n=="string"&&n in jn},Tr=function(n){var l,t,o=n.size,c=n.className,s=n.dimmed,a=n.inline,u=n.width,m=n.color,b=hi(o)?jn[o]:o,h=a?jn.mini:b,L=d.useRef(null);if(nn&&!Xr){var f=d.useRef(null),p=d.useContext(W),v=p.red,O=p.yellow,x=p.green,S=p.brand;d.useEffect(function(){var T=L.current,z=function(){if(T){var H;(H=T.style).setProperty.apply(H,arguments)}};return f.current=new si([di(0,-230,1e3,z,"%"),gi([62,168],[187,43],2e3,z,"%"),bi(0,360,2e3,z)].concat(s?[]:[mi([v,O,x,S],1500,z)]),1e3/60),function(){var C=f.current;C&&C.stop(),T&&T.removeAttribute("style")}},[s,v,O,x,S])}return d.createElement("span",{className:M(dn.root(),(l={},l[dn.rootInline()]=a,l))},d.createElement("svg",{viewBox:"0 0 "+h.size+" "+h.size,className:M(dn.icon(),c,(t={},t[dn.iconInline()]=a,t)),width:h.size,height:h.size,fill:"none",stroke:m,strokeDasharray:10*h.radius/6+", "+27*h.radius/6,strokeDashoffset:"0",strokeWidth:u||h.width,ref:L,focusable:"false","aria-hidden":"true"},d.createElement("circle",{cx:h.size/2,cy:h.size/2,r:h.radius})))},qn,Qn,Jn,Xn,Y={spinnerCircleOffset:function(){return sn(qn||(qn=r([`
        0% { stroke-dashoffset: 231.25%; }
        100% { stroke-dashoffset: 0%; }
      `])))},spinnerCircleLength:function(){return sn(Qn||(Qn=r([`
        0% { stroke-dasharray: 62.5%, 168.75%; }
        50% {  stroke-dasharray: 187.5%, 43.75%; }
        100% { stroke-dasharray: 62.5%, 168.75%; }
      `])))},spinnerCircleRotate:function(){return sn(Jn||(Jn=r([`
        100% { transform: rotate(360deg); }
      `])))},spinnerColor:function(n){return sn(Xn||(Xn=r([`
        100%, 0% { stroke: `,`; }
        40% { stroke: `,`; }
        66% { stroke: `,`; }
        80%, 90% { stroke: `,`; }
      `])),n.red,n.yellow,n.green,n.brand)}},Kn,ne,ee,te,re,ie,oe,ae,le,ce,se,ue,de,N=en({circle:function(n){return i(Kn||(Kn=r([`
      stroke: `,`;

      `,`
    `])),n.spinnerColor,!nn&&`
          animation: `+Y.spinnerCircleOffset()+` 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,
            `+Y.spinnerCircleLength()+` 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite,
            `+Y.spinnerCircleRotate()+` 2s linear infinite,
            `+Y.spinnerColor(n)+` 6s ease-in-out infinite;
        `)},circleDimmedColor:function(n){return i(ne||(ne=r([`
      stroke: `,`;
    `])),n.spinnerDimmedColor)},circleWithoutColorAnimation:function(){return i(ee||(ee=r([`
      `,`
    `])),!nn&&`
          animation: `+Y.spinnerCircleOffset()+` 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,
          `+Y.spinnerCircleLength()+` 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite,
          `+Y.spinnerCircleRotate()+` 2s linear infinite;
        `)},captionColor:function(n){return i(te||(te=r([`
      color: `,`;
    `])),n.spinnerCaptionColor)},inline:function(){return i(re||(re=r([`
      font-size: inherit;
      line-height: inherit;
    `])))},mini:function(n){return i(ie||(ie=r([`
      margin-left: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),n.spinnerCaptionGapSmall,n.spinnerFontSizeSmall,n.spinnerLineHeightSmall)},small:function(n){return i(oe||(oe=r([`
      margin: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),n.spinnerCaptionMarginSmall,n.spinnerFontSizeSmall,n.spinnerLineHeightSmall)},normal:function(n){return i(ae||(ae=r([`
      display: block;
      font-size: `,`;
      line-height: `,`;
      margin-top: `,`;
    `])),n.spinnerFontSizeMedium,n.spinnerLineHeightMedium,n.spinnerCaptionGapMedium)},medium:function(n){return i(le||(le=r([`
      margin: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),n.spinnerCaptionMarginMedium,n.spinnerFontSizeMedium,n.spinnerLineHeightMedium)},big:function(n){return i(ce||(ce=r([`
      display: block;
      font-size: `,`;
      line-height: `,`;
      margin-top: `,`;
    `])),n.spinnerFontSizeLarge,n.spinnerLineHeightLarge,n.spinnerCaptionGapLarge)},large:function(n){return i(se||(se=r([`
      font-size: `,`;
      line-height: `,`;
      margin: `,`;
    `])),n.spinnerFontSizeLarge,n.spinnerLineHeightLarge,n.spinnerCaptionMarginLarge)},spinner:function(){return i(ue||(ue=r([`
      display: inline-block;
      text-align: center;
      line-height: normal;
    `])))},inner:function(){return i(de||(de=r([`
      display: inline-block;
    `])))}}),ge,X,fi=["big","mini","normal"],pi={root:"Spinner__root"},vi=Cn(ge=(X=(function(e){function n(){for(var t,o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return t=e.call.apply(e,[this].concat(c))||this,t.getProps=Dn(n.defaultProps),t.renderSpinner=function(a,u,m){var b;return d.createElement(Tr,{size:a,className:M((b={},b[N.circle(t.theme)]=!u&&!t.props.color,b[N.circleDimmedColor(t.theme)]=u,b[N.circleWithoutColorAnimation()]=u||!!t.props.color,b)),dimmed:u,width:t.props.width,color:t.props.color,inline:m})},t.renderCaption=function(a,u){return d.createElement("span",{className:M(N[a](t.theme),N.captionColor(t.theme))},u)},t}On(n,e);var l=n.prototype;return l.render=function(){var o=this;return d.createElement(W.Consumer,null,function(c){return o.theme=c,o.renderMain()})},l.renderMain=function(){var o=this.props,c=o.caption,s=c===void 0?null:c,a=o.dimmed,u=o.inline,m=this.getProps().type;return d.createElement(zn,y({rootNodeRef:this.setRootNode},this.props),d.createElement("div",{"data-tid":pi.root,className:N.spinner()},d.createElement("span",{className:N.inner()},this.renderSpinner(m,a,u)),s&&this.renderCaption(m,s)))},n})(d.Component),X.__KONTUR_REACT_UI__="Spinner",X.displayName="Spinner",X.defaultProps={type:"normal"},X.Types=Object.assign.apply(Object,[{}].concat(fi.map(function(e){var n;return n={},n[e]=e,n}))),X))||ge,Ii=function(){return`
    box-shadow: none;
    cursor: default;
  `},gn=function(n,l,t){return`
    color: `+n+`;

    &:hover {
      color: `+l+`;
    }

    &:active {
      color: `+t+`;
    }
  `},me,be,he,fe,pe,ve,Ie,xe,we,Me,ye,Se,Le,je,ke,Ce,Oe,ze,De,Te,Ae,_e,xi=sn(me||(me=r([`
  0% {
    text-decoration-color: inherit;
  }
  100% {
    text-decoration-color: transparent;
  }
`]))),wi=function(n){var l=parseFloat(n.linkTextUnderlineOpacity)-1;return i(be||(be=r([`
    animation: `,` 1s linear !important; // override creevey
    animation-play-state: paused !important;
    animation-delay: `,`s !important;
    animation-fill-mode: forwards !important;
  `])),xi,l)},w=en({root:function(n){return i(he||(he=r([`
      cursor: pointer;
      position: relative;

      border-radius: 1px;
      text-decoration: `,`;
      text-decoration-style: `,`;
      text-underline-offset: `,`;
      text-decoration-thickness: `,`;
      transition: text-decoration-color `," ",`;
      @supports (text-decoration-color: `,`) {
        text-decoration-color: `,`;
        &:hover {
          text-decoration-color: currentColor;
          text-decoration-style: `,`;
        }
      }
      @supports not (text-decoration-color: `,`) {
        `,`;
        &:hover {
          text-decoration-style: `,`;
          animation: none !important;
        }
      }
    `])),n.linkTextDecoration,n.linkTextDecorationStyle,n.linkTextUnderlineOffset,n.linkTextDecorationThickness,n.transitionDuration,n.transitionTimingFunction,n.linkTextDecorationColor,n.linkTextDecorationColor,n.linkHoverTextDecorationStyle,n.linkTextDecorationColor,wi(n),n.linkHoverTextDecorationStyle)},lineFocus:function(n){return i(fe||(fe=r([`
      color: `,`;
    `])),n.linkHoverColor)},lineFocusSuccess:function(n){return i(pe||(pe=r([`
      color: `,` !important;
    `])),n.linkSuccessHoverColor)},lineFocusDanger:function(n){return i(ve||(ve=r([`
      color: `,` !important;
    `])),n.linkDangerHoverColor)},lineFocusGrayed:function(n){return i(Ie||(Ie=r([`
      color: `,` !important;
    `])),n.linkGrayedHoverColor)},button:function(n){return i(xe||(xe=r([`
      display: inline-block;
      line-height: `,`;
      padding-left: `,`;
      padding-right: `,`;
    `])),n.linkButtonLineHeight,n.linkButtonPaddingX,n.linkButtonPaddingX)},buttonOpened:function(n){return i(we||(we=r([`
      background: `,`;
    `])),n.btnDefaultActiveBg)},arrow:function(){return i(Me||(Me=r([`
      border: 4px solid transparent;
      border-bottom-width: 0;
      border-top-color: #a0a0a0;
      display: inline-block;
      margin-bottom: 3px;
      margin-left: 3px;
      vertical-align: middle;
    `])))},default:function(n){return i(ye||(ye=r([`
      `,`;
    `])),gn(n.linkColor,n.linkHoverColor,n.linkActiveColor))},success:function(n){return i(Se||(Se=r([`
      `,`;
    `])),gn(n.linkSuccessColor,n.linkSuccessHoverColor,n.linkSuccessActiveColor))},danger:function(n){return i(Le||(Le=r([`
      `,`;
    `])),gn(n.linkDangerColor,n.linkDangerHoverColor,n.linkDangerActiveColor))},grayed:function(n){return i(je||(je=r([`
      `,`;
    `])),gn(n.linkGrayedColor,n.linkGrayedHoverColor,n.linkGrayedActiveColor))},useGrayedFocus:function(n){return i(ke||(ke=r([`
      color: `,`;
    `])),n.linkDisabledColor)},focus:function(n){return i(Ce||(Ce=r([`
      text-decoration: `,`;
      outline: `,`;
    `])),n.linkHoverTextDecoration,n.linkFocusOutline)},disabled:function(n){return i(Oe||(Oe=r([`
      `,`;

      color: `,` !important; // override root color

      &:hover {
        color: `,`;
        text-decoration-color: `,`;
      }
    `])),Ii(),n.linkDisabledColor,n.linkDisabledColor,n.linkTextDecorationColor)},icon:function(){return i(ze||(ze=r([`
      display: inline-block;
    `])))},iconLeft:function(n){return i(De||(De=r([`
      margin-right: `,`;
    `])),n.linkIconMarginRight)},iconRight:function(n){return i(Te||(Te=r([`
      margin-left: `,`;
    `])),n.linkIconMarginLeft)},warning:function(n){return i(Ae||(Ae=r([`
      background-color: `,`;
      box-shadow: 0 0 0 2px `,`;
    `])),n.btnWarningSecondary,n.btnWarningSecondary)},error:function(n){return i(_e||(_e=r([`
      background-color: `,`;
      box-shadow: 0 0 0 2px `,`;
    `])),n.btnErrorSecondary,n.btnErrorSecondary)}}),Be=function(n){var l=n.icon,t=n.loading,o=n.hasBothIcons,c=n.position,s=k.useContext(W);return d.createElement("span",{className:M(w.icon(),c==="left"&&w.iconLeft(s),c==="right"&&w.iconRight(s))},t&&!o?d.createElement(vi,{caption:null,dimmed:!0,inline:!0}):l)},Mi=["disabled","icon","rightIcon","use","loading","_button","_buttonOpened","component","focused","error","warning","tabIndex","theme"],Ee,cn,yi="a",Si={root:"Link__root"},Li=Cn(Ee=(cn=(function(e){function n(){for(var t,o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return t=e.call.apply(e,[this].concat(c))||this,t.getProps=Dn(n.defaultProps),t.state={focusedByTab:!1},t.getTabIndex=function(a){var u=a.nonInteractive,m=a.tabIndex,b=m===void 0?0:m;return u?-1:b},t.getRel=function(){if(ji(t.props)){var a=t.props,u=a.rel,m=a.href;return!u&&m?"noopener"+(Kr(m)?" noreferrer":""):u}},t.renderMain=function(a){var u,m=a.disabled,b=a.icon,h=a.rightIcon,L=a.use,f=a.loading,p=a._button,v=a._buttonOpened,O=a.component,x=a.focused,S=x===void 0?!1:x,T=a.error,z=a.warning,C=a.tabIndex;a.theme;var H=bn(a,Mi),Q=null;p&&(Q=d.createElement("span",{className:w.arrow()}));var J=!m&&(t.state.focusedByTab||S),on=b&&d.createElement(Be,{icon:b,loading:f,position:"left"}),j=h&&d.createElement(Be,{hasBothIcons:!!b&&!!h,icon:h,loading:f,position:"right"}),D=m||f,B=function(){switch(L){case"default":return w.default(t.theme);case"danger":return w.danger(t.theme);case"success":return w.success(t.theme);case"grayed":return w.grayed(t.theme)}},fn=function(){switch(L){case"default":return w.lineFocus(t.theme);case"danger":return w.lineFocusDanger(t.theme);case"success":return w.lineFocusSuccess(t.theme);case"grayed":return w.lineFocusGrayed(t.theme)}},an=y({},H,{className:M((u={},u[w.root(t.theme)]=!0,u[zr()]=O==="button",u[w.focus(t.theme)]=J,u[w.disabled(t.theme)]=m||f,u[B()]=!0,u[w.useGrayedFocus(t.theme)]=L==="grayed"&&S,u[w.button(t.theme)]=!!p,u[w.buttonOpened(t.theme)]=!!v,u[w.warning(t.theme)]=z,u[w.error(t.theme)]=T,u[fn()]=J,u)),onClick:t.handleClick,onFocus:t.handleFocus,onBlur:t.handleBlur,tabIndex:t.getTabIndex({nonInteractive:D,tabIndex:C}),rel:t.getRel()}),P=O==="button"?{disabled:D}:{};return d.createElement(O,y({"data-tid":Si.root},an,P,ni({disabled:m})),on,t.props.children,j,Q)},t.handleFocus=function(){t.props.disabled||I.globalObject.requestAnimationFrame==null||I.globalObject.requestAnimationFrame(function(){Ln.isTabPressed&&t.setState({focusedByTab:!0})})},t.handleBlur=function(){t.setState({focusedByTab:!1})},t.handleClick=function(a){var u=t.props,m=u.onClick,b=u.disabled,h=u.loading;b&&(a.preventDefault(),a.stopPropagation()),m&&!b&&!h&&m(a)},t}On(n,e);var l=n.prototype;return l.render=function(){var o=this;return d.createElement(W.Consumer,null,function(c){return o.theme=o.props.theme?Tn.create(o.props.theme,c):c,d.createElement(zn,y({rootNodeRef:o.setRootNode},o.getProps()),o.renderMain)})},n})(d.Component),cn.__KONTUR_REACT_UI__="Link",cn.displayName="Link",cn.defaultProps={use:"default",component:yi},cn))||Ee,ji=function(n){return n.component==="a"},Ne,We,Pe,Re,Fe,Ar=function(n,l){return n+" "+l+" "+n},Z=function(n,l,t,o,c,s){var a=l!==t;return i(Ne||(Ne=r([`
    background-color: `,`;
    background-image: `,`;
    color: `,`;
    box-shadow: 0 0 0 `," ",`;

    :enabled:hover,
    :enabled {
      .`,` svg {
        color: `,`;
      }
    }
  `])),a?"initial":n,a?"linear-gradient("+l+", "+t+")":"none",o,s,c,E.arrow,o)},V=function(n,l,t,o,c,s){var a=l!==t;return i(We||(We=r([`
    background-color: `,`;
    background-image: `,`;
    box-shadow: 0 0 0 `," ",`;
    color: `,`;
  `])),a?"initial":n,a?"linear-gradient("+l+", "+t+")":"none",s,c,o)},q=function(n,l,t,o){return i(Pe||(Pe=r([`
    &,
    &:hover {
      background-image: none !important; // override :hover styles
      background-color: `,` !important; // override :hover styles
      box-shadow: 0 0 0 `," ",` !important; // override :hover styles

      .`,` {
        box-shadow: `,`;
      }
    }
  `])),n,o,t,E.innerShadow,l)},wn=function(n,l,t,o){return i(Re||(Re=r([`
    font-size: `,`;
    box-sizing: border-box;
    padding: `,`;
    line-height: `,`;
  `])),n,Ar(o,t),l)},Mn=function(n,l){return i(Fe||(Fe=r([`
    padding: `,`;
    line-height: normal;
  `])),Ar(l,n))},He,$e,Ue,Ge,Ye,Ze,Ve,qe,Qe,Je,Xe,Ke,nt,et,tt,rt,it,ot,at,lt,ct,st,ut,dt,gt,mt,bt,ht,ft,pt,vt,It,xt,wt,Mt,yt,St,Lt,jt,kt,Ct,Ot,zt,Dt,Tt,At,_t,Bt,Et,Nt,Wt,Pt,Rt,Ft,Ht,$t,Ut,Gt,Yt,Zt,Vt,qt,Qt,Jt,Xt,Kt,nr,er,tr,rr,ir,or,ar,lr,cr,sr,ur,dr,gr,E=ei("button")({root:"root",arrow:"arrow",caption:"caption",text:"text",innerShadow:"inner-shadow",disabled:"disabled"}),g=en({root:function(n){return i(He||(He=r([`
      `,`;
      `,`;

      transition: background-color `," ",`
        `,`;

      background-clip: `,`;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
      display: inline-block;
      position: relative;
      text-align: center;
      width: 100%;
      height: 100%; // fix height in ie11

      .`,` {
        content: '';
        border-radius: inherit;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      &::after {
        content: '';
        display: inline-block;
        vertical-align: baseline;
        width: 0;
      }

      &:hover svg {
        color: `,`;
      }
      &.`,` svg {
        color: `,`;
      }
      & svg {
        color: `,`;
      }
    `])),zr(),oi(),n.transitionDuration,n.transitionTimingFunction,n.btnBorderColorTransition?", "+n.btnBorderColorTransition:"",n.btnBackgroundClip,E.innerShadow,n.btnIconHoverColor,E.disabled,n.btnIconDisabledColor,n.btnIconColor)},withArrowIconRightSmall:function(n){return i($e||($e=r([`
      padding-right: calc(`," + "," + ",`);
    `])),n.btnIconSizeSmall,n.btnWithIconPaddingSmall,n.btnWithIconPaddingSmall)},withArrowIconRightMedium:function(n){return i(Ue||(Ue=r([`
      padding-right: calc(`," + "," + ",`);
    `])),n.btnIconSizeMedium,n.btnWithIconPaddingMedium,n.btnWithIconPaddingMedium)},withArrowIconRightLarge:function(n){return i(Ge||(Ge=r([`
      padding-right: calc(`," + "," + ",`);
    `])),n.btnIconSizeLarge,n.btnWithIconPaddingLarge,n.btnWithIconPaddingLarge)},withArrowIconLeftSmall:function(n){return i(Ye||(Ye=r([`
      padding-left: calc(`," + "," + ",`);
    `])),n.btnIconSizeSmall,n.btnWithIconPaddingSmall,n.btnWithIconPaddingSmall)},withArrowIconLeftMedium:function(n){return i(Ze||(Ze=r([`
      padding-left: calc(`," + "," + ",`);
    `])),n.btnIconSizeMedium,n.btnWithIconPaddingMedium,n.btnWithIconPaddingMedium)},withArrowIconLeftLarge:function(n){return i(Ve||(Ve=r([`
      padding-left: calc(`," + "," + ",`);
    `])),n.btnIconSizeLarge,n.btnWithIconPaddingLarge,n.btnWithIconPaddingLarge)},simulatedPress:function(){return i(qe||(qe=r([`
      &:active .`,` {
        transform: translateY(1px);
      }
    `])),E.caption)},outline:function(){return i(Qe||(Qe=r([`
      border-radius: inherit;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `])))},outlineWarning:function(n){return i(Je||(Je=r([`
      box-shadow:
        0 0 0 `," ",`,
        inset 0 0 0 `," ",`;
    `])),n.btnOutlineWidth,n.btnBorderColorWarning,n.btnInsetWidth,n.btnInsetColor)},outlineError:function(n){return i(Xe||(Xe=r([`
      box-shadow:
        0 0 0 `," ",`,
        inset 0 0 0 `," ",`;
    `])),n.btnOutlineWidth,n.btnBorderColorError,n.btnInsetWidth,n.btnInsetColor)},outlineLink:function(){return i(Ke||(Ke=r([`
      cursor: default;
      box-shadow: none;
      left: -2px;
      right: -2px;
      bottom: -2px;
      top: -2px;
    `])))},outlineLinkWarning:function(n){return i(nt||(nt=r([`
      background-color: `,`;
    `])),n.btnWarningSecondary)},outlineLinkError:function(n){return i(et||(et=r([`
      background-color: `,`;
    `])),n.btnErrorSecondary)},sizeSmall:function(n){return i(tt||(tt=r([`
      border-radius: `,`;

      `,`;
    `])),n.btnBorderRadiusSmall,wn(n.btnFontSizeSmall,n.btnLineHeightSmall,n.btnPaddingXSmall,n.btnPaddingYSmall))},sizeSmallIE11:function(n){return i(rt||(rt=r([`
      `,`;
    `])),Mn(n.btnPaddingXSmall,n.btnPaddingYSmall))},sizeMedium:function(n){return i(it||(it=r([`
      border-radius: `,`;

      `,`;
    `])),n.btnBorderRadiusMedium,wn(n.btnFontSizeMedium,n.btnLineHeightMedium,n.btnPaddingXMedium,n.btnPaddingYMedium))},sizeMediumIE11:function(n){return i(ot||(ot=r([`
      `,`;
    `])),Mn(n.btnPaddingXMedium,n.btnPaddingYMedium))},sizeLarge:function(n){return i(at||(at=r([`
      border-radius: `,`;

      `,`;
    `])),n.btnBorderRadiusLarge,wn(n.btnFontSizeLarge,n.btnLineHeightLarge,n.btnPaddingXLarge,n.btnPaddingYLarge))},sizeLargeIE11:function(n){return i(lt||(lt=r([`
      `,`;
    `])),Mn(n.btnPaddingXLarge,n.btnPaddingYLarge))},sizeSmallWithIcon:function(n){return i(ct||(ct=r([`
      padding-left: `,`;
    `])),n.btnWithIconPaddingSmall)},sizeMediumWithIcon:function(n){return i(st||(st=r([`
      padding-left: `,`;
    `])),n.btnWithIconPaddingMedium)},sizeLargeWithIcon:function(n){return i(ut||(ut=r([`
      padding-left: `,`;
    `])),n.btnWithIconPaddingLarge)},sizeSmallWithRightIcon:function(n){return i(dt||(dt=r([`
      padding-right: `,`;
    `])),n.btnWithIconPaddingSmall)},sizeMediumWithRightIcon:function(n){return i(gt||(gt=r([`
      padding-right: `,`;
    `])),n.btnWithIconPaddingMedium)},sizeLargeWithRightIcon:function(n){return i(mt||(mt=r([`
      padding-right: `,`;
    `])),n.btnWithIconPaddingLarge)},sizeSmallWithIconWithoutText:function(n){return i(bt||(bt=r([`
      padding-right: `,`;
    `])),n.btnWithIconPaddingSmall)},sizeMediumWithIconWithoutText:function(n){return i(ht||(ht=r([`
      padding-right: `,`;
    `])),n.btnWithIconPaddingMedium)},sizeLargeWithIconWithoutText:function(n){return i(ft||(ft=r([`
      padding-right: `,`;
    `])),n.btnWithIconPaddingLarge)},sizeSmallWithIconWithoutText5_3:function(n){return i(pt||(pt=r([`
      padding-left: `,`;
      padding-right: `,`;
    `])),n.btnWithIconPaddingSmall,n.btnWithIconPaddingSmall)},sizeMediumWithIconWithoutText5_3:function(n){return i(vt||(vt=r([`
      padding-left: `,`;
      padding-right: `,`;
    `])),n.btnWithIconPaddingMedium,n.btnWithIconPaddingMedium)},sizeLargeWithIconWithoutText5_3:function(n){return i(It||(It=r([`
      padding-left: `,`;
      padding-right: `,`;
    `])),n.btnWithIconPaddingLarge,n.btnWithIconPaddingLarge)},link:function(n){return i(xt||(xt=r([`
      background: none;
      border-radius: `,`;
      border: none;
      box-shadow: none;
      white-space: nowrap;
      color: `,`;
      display: inline;
      margin: 0;
      padding: 0 !important; // override size mixin
      height: auto !important; // override size mixin

      &:hover:enabled,
      &:active:enabled {
        color: `,`;
        text-decoration: `,`;
      }

      &:active:enabled {
        `,`
      }
    `])),n.btnLinkBorderRadius,n.btnLinkColor,n.btnLinkHoverColor,n.btnLinkHoverTextDecoration,F.link(n))},linkLineHeight:function(){return i(wt||(wt=r([`
      line-height: inherit !important; // override size mixin
    `])))},linkLineHeightSafariFallback:function(){return i(Mt||(Mt=r([`
      /* Safari overrides 'underline' and 'border' if 'line-height' is used */
      margin: -1px 0 -2px;
    `])))},linkFocus:function(n){return i(yt||(yt=r([`
      & {
        color: `,`;
        text-decoration: `,`;
      }
    `])),n.btnLinkColor,n.btnLinkHoverTextDecoration)},linkDisabled:function(n){return i(St||(St=r([`
      cursor: default;

      &,
      &:hover:enabled,
      &:active:enabled {
        color: `,`;
      }
    `])),n.btnLinkDisabledColor)},focus:function(n){return i(Lt||(Lt=r([`
      position: relative;
      z-index: 2;

      &,
      &:hover:enabled,
      &:active:enabled,
      &:active:hover:enabled {
        box-shadow:
          inset 0 0 0 `," ",`,
          0 0 0 `," ",` !important; // override root:hover style
      }
    `])),n.btnInsetWidth,n.btnOutlineColorFocus,n.btnFocusShadowWidth,n.btnBorderColorFocus)},disabled:function(n){return i(jt||(jt=r([`
      cursor: default;
      pointer-events: none;
      box-shadow: 0 0 0 `," ",`;

      background-image: none;
      background-color: `,`;
      color: `,`;
    `])),n.btnBorderWidth,n.btnDisabledBorderColor,n.btnDisabledBg,n.btnDisabledTextColor)},disabledWithoutOutline:function(n){return i(kt||(kt=r([`
      box-shadow: 0 0 0 `," ",`;
    `])),n.btnBorderWidth,n.btnDisabledBg)},arrowIconRoot:function(){return i(Ct||(Ct=r([`
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: content-box;
    `])))},arrowIconRootSmall:function(n){return i(Ot||(Ot=r([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),n.btnWithIconPaddingSmall,n.btnWithIconPaddingSmall,n.btnIconSizeSmall)},arrowIconRootMedium:function(n){return i(zt||(zt=r([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),n.btnWithIconPaddingMedium,n.btnWithIconPaddingMedium,n.btnIconSizeMedium)},arrowIconRootLarge:function(n){return i(Dt||(Dt=r([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),n.btnWithIconPaddingLarge,n.btnWithIconPaddingLarge,n.btnIconSizeLarge)},arrowIconLeft:function(){return i(Tt||(Tt=r([`
      left: 0;
    `])))},default:function(n){return i(At||(At=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`;
      }
    `])),Z(n.btnDefaultBg,n.btnDefaultBgStart,n.btnDefaultBgEnd,n.btnDefaultTextColor,n.btnDefaultBorderColor,n.btnBorderWidth),V(n.btnDefaultHoverBg,n.btnDefaultHoverBgStart,n.btnDefaultHoverBgEnd,n.btnDefaultHoverTextColor,n.btnDefaultHoverBorderColor,n.btnBorderWidth),F.default(n))},primary:function(n){return i(_t||(_t=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),Z(n.btnPrimaryBg,n.btnPrimaryBgStart,n.btnPrimaryBgEnd,n.btnPrimaryTextColor,n.btnPrimaryBorderColor,n.btnBorderWidth),V(n.btnPrimaryHoverBg,n.btnPrimaryHoverBgStart,n.btnPrimaryHoverBgEnd,n.btnPrimaryHoverTextColor,n.btnPrimaryHoverBorderColor,n.btnBorderWidth),F.primary(n))},success:function(n){return i(Bt||(Bt=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),Z(n.btnSuccessBg,n.btnSuccessBgStart,n.btnSuccessBgEnd,n.btnSuccessTextColor,n.btnSuccessBorderColor,n.btnBorderWidth),V(n.btnSuccessHoverBg,n.btnSuccessHoverBgStart,n.btnSuccessHoverBgEnd,n.btnSuccessHoverTextColor,n.btnSuccessHoverBorderColor,n.btnBorderWidth),F.success(n))},danger:function(n){return i(Et||(Et=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),Z(n.btnDangerBg,n.btnDangerBgStart,n.btnDangerBgEnd,n.btnDangerTextColor,n.btnDangerBorderColor,n.btnBorderWidth),V(n.btnDangerHoverBg,n.btnDangerHoverBgStart,n.btnDangerHoverBgEnd,n.btnDangerHoverTextColor,n.btnDangerHoverBorderColor,n.btnBorderWidth),F.danger(n))},pay:function(n){return i(Nt||(Nt=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),Z(n.btnPayBg,n.btnPayBgStart,n.btnPayBgEnd,n.btnPayTextColor,n.btnPayBorderColor,n.btnBorderWidth),V(n.btnPayHoverBg,n.btnPayHoverBgStart,n.btnPayHoverBgEnd,n.btnPayHoverTextColor,n.btnPayHoverBorderColor,n.btnBorderWidth),F.pay(n))},text:function(n){return i(Wt||(Wt=r([`
      &,
      &:enabled,
      &:hover {
        box-shadow: none;
      }

      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),Z(n.btnTextBg,"","",n.btnTextTextColor,n.btnTextBorderColor,n.btnBorderWidth),V(n.btnTextHoverBg,"","",n.btnTextHoverTextColor,n.btnTextHoverBorderColor,n.btnBorderWidth),F.text(n))},backless:function(n){return i(Pt||(Pt=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),Z(n.btnBacklessBg,"","",n.btnBacklessTextColor,n.btnBacklessBorderColor,n.btnBorderWidth),V(n.btnBacklessHoverBg,"","",n.btnBacklessHoverTextColor,n.btnBacklessHoverBorderColor,n.btnBorderWidth),F.backless(n))},checked:function(n){var l=`
      background-image: none;
      box-shadow: 0 0 0 `+n.btnBorderWidth+" "+n.btnDefaultCheckedBorderColor+` !important;
      background-color: `+n.btnCheckedBg+` !important;
      color: `+n.btnCheckedTextColor+` !important;

      .`+E.innerShadow+` {
        box-shadow: `+n.btnCheckedShadow+`;
      }

      :enabled svg {
        color: `+n.btnCheckedTextColor+` !important;
      }
      :hover:enabled svg {
        color: `+n.btnCheckedTextColor+` !important;
      }
    `;return i(Rt||(Rt=r([`
      `,`

      &:hover:enabled,
      &:active:enabled,
      &:hover:active:enabled {
        `,`
      }
    `])),l,l)},checkedFocused:function(n){return i(Ft||(Ft=r([`
      &:hover:enabled,
      &:hover:active:enabled {
        box-shadow:
          inset 0 0 0 `," ",`,
          0 0 0 `," ",` !important;
        border-color: `,` !important;
      }
    `])),n.btnInsetWidth,n.btnOutlineColorFocus,n.btnFocusShadowWidth,n.btnBorderColorFocus,n.btnBorderColorFocus)},checkedDisabled:function(n){return i(Ht||(Ht=r([`
      box-shadow: 0 0 0 `," ",`;
      background-color: `,`;
      color: `,`;

      .`,` {
        box-shadow: `,`;
      }

      svg {
        color: `,` !important;
      }
    `])),n.btnBorderWidth,n.btnCheckedDisabledBorderColor,n.btnCheckedDisabledBg,n.btnCheckedDisabledColor,E.innerShadow,n.btnCheckedDisabledShadow,n.btnCheckedDisabledColor)},caption:function(){return i($t||($t=r([`
      position: relative;
      white-space: nowrap;
      display: inline-block;
      width: 100%;
      vertical-align: top;
    `])))},captionLink:function(){return i(Ut||(Ut=r([`
      display: inline;
      transform: none !important; // override root:active style
    `])))},captionDisabled:function(){return i(Gt||(Gt=r([`
      transform: none !important; // override root:active style
    `])))},wrap:function(n){return i(Yt||(Yt=r([`
      box-sizing: border-box;
      display: inline-block;
      line-height: normal;
      padding: `,`;
    `])),n.btnBorderWidth)},wrapSmall:function(n){return i(Zt||(Zt=r([`
      height: `,`;
    `])),n.btnHeightSmall)},wrapMedium:function(n){return i(Vt||(Vt=r([`
      height: `,`;
    `])),n.btnHeightMedium)},wrapLarge:function(n){return i(qt||(qt=r([`
      height: `,`;
    `])),n.btnHeightLarge)},narrow:function(){return i(Qt||(Qt=r([`
      padding-left: 5px;
      padding-right: 5px;
    `])))},noPadding:function(){return i(Jt||(Jt=r([`
      padding-left: 0;
      padding-right: 0;
    `])))},noRightPadding:function(){return i(Xt||(Xt=r([`
      padding-right: 0;
    `])))},wrapLink:function(){return i(Kt||(Kt=r([`
      padding: 0;
    `])))},borderless:function(){return i(nr||(nr=r([`
      &,
      &:active:hover,
      &:hover {
        box-shadow: none !important; // override root:hover style
      }
    `])))},backlessDisabled:function(n){return i(er||(er=r([`
      box-shadow: 0 0 0 1px `,`;
      background-color: transparent;
    `])),n.btnBacklessDisabledBorderColor)},textDisabled:function(){return i(tr||(tr=r([`
      background-color: transparent;
    `])))},loading:function(){return i(rr||(rr=r([`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    `])))},visibilityHidden:function(){return i(ir||(ir=r([`
      visibility: hidden;
    `])))}}),F=en({default:function(n){return i(or||(or=r([`
      & {
        `,`;
      }
    `])),q(n.btnDefaultActiveBg,n.btnDefaultActiveShadow,n.btnDefaultActiveBorderColor,n.btnBorderWidth))},primary:function(n){return i(ar||(ar=r([`
      & {
        `,`;
      }
    `])),q(n.btnPrimaryActiveBg,n.btnPrimaryActiveShadow,n.btnPrimaryActiveBorderColor,n.btnBorderWidth))},success:function(n){return i(lr||(lr=r([`
      & {
        `,`;
      }
    `])),q(n.btnSuccessActiveBg,n.btnSuccessActiveShadow,n.btnSuccessActiveBorderColor,n.btnBorderWidth))},danger:function(n){return i(cr||(cr=r([`
      & {
        `,`;
      }
    `])),q(n.btnDangerActiveBg,n.btnDangerActiveShadow,n.btnDangerActiveBorderColor,n.btnBorderWidth))},pay:function(n){return i(sr||(sr=r([`
      & {
        `,`;
      }
    `])),q(n.btnPayActiveBg,n.btnPayActiveShadow,n.btnPayActiveBorderColor,n.btnBorderWidth))},link:function(n){return i(ur||(ur=r([`
      & {
        color: `,`;
      }
    `])),n.btnLinkActiveColor)},text:function(n){return i(dr||(dr=r([`
      & {
        `,`;
      }
    `])),q(n.btnTextActiveBg,"",n.btnTextActiveBg,n.btnBorderWidth))},backless:function(n){return i(gr||(gr=r([`
      & {
        `,`
      }
    `])),q(n.btnBacklessActiveBg,"",n.btnBacklessActiveBorderColor,n.btnBorderWidth))}}),mr,br,hr,fr,pr,vr,Ir,xr,wr,Mr,yr,Sr,Lr,A=en({icon:function(){var n="'"+ti+"'";return i(mr||(mr=r([`
      display: inline-block;

      &::before {
        content: `,`;
      }
    `])),n)},iconSmall:function(n){return i(br||(br=r([`
      width: `,`;
    `])),n.btnIconSizeSmall)},iconSmallLeft:function(n){return i(hr||(hr=r([`
      margin-right: `,`;
    `])),n.btnIconGapSmallLeft)},iconSmallRight:function(n){return i(fr||(fr=r([`
      margin-left: `,`;
    `])),n.btnIconGapSmallRight)},iconMedium:function(n){return i(pr||(pr=r([`
      width: `,`;
    `])),n.btnIconSizeMedium)},iconMediumLeft:function(n){return i(vr||(vr=r([`
      margin-right: `,`;
    `])),n.btnIconGapMediumRight)},iconMediumRight:function(n){return i(Ir||(Ir=r([`
      margin-left: `,`;
    `])),n.btnIconGapMediumRight)},iconLarge:function(n){return i(xr||(xr=r([`
      width: `,`;
    `])),n.btnIconSizeLarge)},iconLargeLeft:function(n){return i(wr||(wr=r([`
      margin-right: `,`;
    `])),n.btnIconGapLargeLeft)},iconLargeRight:function(n){return i(Mr||(Mr=r([`
      margin-left: `,`;
    `])),n.btnIconGapLargeRight)},iconLeftLink:function(n){return i(yr||(yr=r([`
      margin-right: `,`;
    `])),n.btnLinkIconMarginRight)},iconRightLink:function(n){return i(Sr||(Sr=r([`
      margin-left: `,`;
    `])),n.btnLinkIconMarginLeft)},iconNoMargin:function(){return i(Lr||(Lr=r([`
      margin-right: 0;
      margin-left: 0;
    `])))}}),yn=function(n){var l=d.useContext(W);return d.createElement(Tr,y({dimmed:!0,className:M(N.circle(l),N.circleDimmedColor(l),N.circleWithoutColorAnimation())},n))},ki=An({small:function(){return d.createElement(yn,{size:"mini"})},medium:function(){return d.createElement(yn,{size:{size:20,width:1,radius:6}})},large:function(){return d.createElement(yn,{size:{size:24,width:1.5,radius:8}})}},"LoadingIcon"),_r=function(n){var l=n.size,t=n.isCentered,o=t===void 0?!0:t;return d.createElement("div",{"data-tid":kn.spinner,className:o?g.loading():void 0},d.createElement(ki,{size:l}))},Br=function(n){return{small:parseInt(n.btnIconSizeSmall),medium:parseInt(n.btnIconSizeMedium),large:parseInt(n.btnIconSizeLarge)}},Ci=function(n,l){var t=k.useContext(W);if(n&&Or(n)){var o,c=Br(t);return d.cloneElement(n,{size:(o=n.props.size)!=null?o:c[l]})}return n},jr=function(n){var l,t=n.icon,o=n.use,c=n.position,s=n.hasChildren,a=n.loading,u=a===void 0?!1:a,m=n.hasBothIcons,b=m===void 0?!1:m,h=n.size,L=h===void 0?"small":h,f=k.useContext(W),p=o==="link",v=function(){switch(L){case"large":return[A.iconLarge(f),c==="left"?A.iconLargeLeft(f):A.iconLargeRight(f)];case"medium":return[A.iconMedium(f),c==="left"?A.iconMediumLeft(f):A.iconMediumRight(f)];case"small":default:return[A.iconSmall(f),c==="left"?A.iconSmallLeft(f):A.iconSmallRight(f)]}},O={display:"inline-flex",alignItems:"center"},x=Ci(t,L);return d.createElement("span",{style:O,className:M(A.icon(),v(),(l={},l[A.iconNoMargin()]=!s,l[A.iconLeftLink(f)]=p&&c==="left",l[A.iconRightLink(f)]=p&&c==="right",l))},u&&!b?d.createElement(_r,{isCentered:!1,size:L}):x)},Oi=tn("ArrowARightIcon16Light",function(e,n){return d.createElement(rn,y({ref:n},e),d.createElement("path",{d:"M8.73 2.854a.5.5 0 1 1 .708-.708l4.006 4.006a1.906 1.906 0 0 1 0 2.696l-4.006 4.006a.5.5 0 0 1-.707-.708l4.005-4.005A.914.914 0 0 0 12.852 8H2.5a.5.5 0 0 1 0-1h10.352a.914.914 0 0 0-.116-.14L8.732 2.853Z"}))}),zi=tn("ArrowARightIcon20Light",function(e,n){return d.createElement(rn,y({ref:n,viewBoxSize:20},e),d.createElement("path",{d:"M11.365 3.291a.5.5 0 1 1 .707-.707l5.237 5.237a2.375 2.375 0 0 1 0 3.358l-5.237 5.237a.5.5 0 1 1-.707-.707l5.237-5.237c.139-.139.242-.3.309-.472H2.5a.5.5 0 1 1 0-1h14.41a1.37 1.37 0 0 0-.308-.472L11.365 3.29Z"}))}),Di=tn("ArrowARightIcon24Regular",function(e,n){return d.createElement(rn,y({ref:n,viewBoxSize:24},e),d.createElement("path",{d:"M13.444 4.744a.875.875 0 0 1 1.237-1.238l6.284 6.284a3.125 3.125 0 0 1 0 4.42l-6.284 6.284a.875.875 0 1 1-1.237-1.238l6.284-6.284c.031-.031.06-.063.088-.097H3a.875.875 0 0 1 0-1.75h16.816a1.415 1.415 0 0 0-.088-.097l-6.284-6.284Z"}))}),Ti=An({small:function(){return d.createElement(Oi,null)},medium:function(){return d.createElement(zi,null)},large:function(){return d.createElement(Di,null)}},"ArrowRightIcon"),Ai=tn("ArrowALeftIcon16Light",function(e,n){return d.createElement(rn,y({ref:n},e),d.createElement("path",{d:"M7.27 12.146a.5.5 0 1 1-.708.707L2.556 8.849a1.906 1.906 0 0 1 0-2.696l4.006-4.006a.5.5 0 1 1 .707.707L3.263 6.86a.91.91 0 0 0-.115.14H13.5a.5.5 0 0 1 0 1H3.148a.91.91 0 0 0 .115.142l4.006 4.005Z"}))}),_i=tn("ArrowALeftIcon20Light",function(e,n){return d.createElement(rn,y({ref:n,viewBoxSize:20},e),d.createElement("path",{d:"M8.635 15.709a.5.5 0 1 1-.707.707L2.69 11.179a2.375 2.375 0 0 1 0-3.358l5.237-5.237a.5.5 0 0 1 .707.707L3.398 8.528A1.37 1.37 0 0 0 3.09 9H17.5a.5.5 0 0 1 0 1H3.09c.066.172.17.333.308.472l5.237 5.237Z"}))}),Bi=tn("ArrowALeftIcon24Regular",function(e,n){return d.createElement(rn,y({ref:n,viewBoxSize:24},e),d.createElement("path",{d:"M10.556 19.256a.875.875 0 1 1-1.237 1.238L3.035 14.21a3.125 3.125 0 0 1 0-4.42l6.284-6.284a.875.875 0 0 1 1.237 1.238l-6.284 6.284c-.031.031-.06.064-.088.097H21a.875.875 0 1 1 0 1.75H4.184c.028.034.057.066.088.097l6.284 6.284Z"}))}),Ei=An({small:function(){return d.createElement(Ai,null)},medium:function(){return d.createElement(_i,null)},large:function(){return d.createElement(Bi,null)}},"ArrowLeftIcon"),Ni=function(n){var l=n.arrow,t=n.size,o=k.useContext(W),c=function(){var h;return M(g.arrowIconRoot(),E.arrow,(h={},h[g.arrowIconRootSmall(o)]=t==="small",h[g.arrowIconRootMedium(o)]=t==="medium",h[g.arrowIconRootLarge(o)]=t==="large",h[g.arrowIconLeft()]=l==="left",h))},s={right:Ti,left:Ei},a=l==="left"?"left":"right",u=s[a],m=d.createElement("div",{className:c()},d.createElement(u,{size:t}));return m};function Wi(e,n){var l=e.arrow,t=e.size,o=e.use,c=o!=="link"&&(l===!0||l==="left"),s=c?M(l===!0&&t==="small"&&g.withArrowIconRightSmall(n),l===!0&&t==="medium"&&g.withArrowIconRightMedium(n),l===!0&&t==="large"&&g.withArrowIconRightLarge(n),l==="left"&&t==="small"&&g.withArrowIconLeftSmall(n),l==="left"&&t==="medium"&&g.withArrowIconLeftMedium(n),l==="left"&&t==="large"&&g.withArrowIconLeftLarge(n)):"",a=c?d.createElement(Ni,e):null;return[s,a]}var Pi=function(n){return Tn.create({linkTextDecorationStyle:n.btnLinkTextDecorationStyle,linkTextUnderlineOffset:n.btnLinkTextUnderlineOffset,linkHoverTextDecorationStyle:n.btnLinkHoverTextDecorationStyle,linkTextUnderlineOpacity:n.btnLinkTextUnderlineOpacity,linkTextDecorationColor:n.btnLinkTextDecorationColor,linkTextDecorationThickness:n.btnLinkTextDecorationThickness,linkDisabledColor:n.btnLinkDisabledColor,linkColor:n.btnLinkColor,linkHoverColor:n.btnLinkHoverColor,linkActiveColor:n.btnLinkActiveColor,linkHoverTextDecoration:n.btnLinkHoverTextDecoration,linkIconMarginRight:n.btnLinkIconMarginRight},n)},mn,K,Ri=["children"],Fi=["corners","active","disabled","borderless","checked","error","warning","loading","narrow","arrow","icon","rightIcon","_noPadding","_noRightPadding","visuallyFocused","align","disableFocus","width","tabIndex","component","use","theme"],Hi="button",kn={rootElement:"Button__rootElement",root:"Button__root",spinner:"Button__spinner"},$i=function(n){var l=n.children,t=bn(n,Ri);return d.createElement("span",t,l)},go=ri(mn=Cn(mn=(K=(function(e){function n(){for(var t,o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return t=e.call.apply(e,[this].concat(c))||this,t.getProps=Dn(n.defaultProps),t.state={focusedByTab:!1},t.node=null,t.renderMain=function(a){var u,m,b,h=a.corners,L=a.active,f=a.disabled,p=a.borderless,v=a.checked,O=a.error,x=a.warning,S=a.loading,T=a.narrow;a.arrow;var z=a.icon,C=a.rightIcon,H=a._noPadding,Q=a._noRightPadding,J=a.visuallyFocused,on=a.align,j=a.disableFocus,D=a.width,B=a.tabIndex;a.component,a.use,a.theme;var fn=bn(a,Fi),an=t.getProps(),P=an.use,un=an.component,pn=an.children,Bn=t.getSizeClassName(),$=t.state.focusedByTab||J,U=P==="link",En=Wi(y({},t.props,{isFocused:!!$,size:t.size}),t.theme),Rr=En[0],Fr=En[1],Hr=!["default","backless"].includes(P),ln=f||S,$r=M.apply(void 0,[g.root(t.theme),g[P](t.theme),Bn,T&&g.narrow(),H&&g.noPadding(),Q&&g.noRightPadding(),Rr].concat(ln?[g.disabled(t.theme),Hr&&g.disabledWithoutOutline(t.theme),v&&g.checkedDisabled(t.theme),p&&g.borderless(),P==="backless"&&g.backlessDisabled(t.theme),P==="text"&&g.textDisabled(),E.disabled]:[L&&!v&&F[P](t.theme),$&&g.focus(t.theme),v&&g.checked(t.theme),v&&$&&g.checkedFocused(t.theme),p&&!v&&!$&&g.borderless()])),vn=y({},fn,{className:$r,style:y({textAlign:on},h),onFocus:t.handleFocus,onBlur:t.handleBlur,tabIndex:t.getTabIndex({disableFocus:j,disabled:ln,tabIndex:B})}),In={className:M(E.root,(u={},u[g.wrap(t.theme)]=!0,u[t.getSizeWrapClassName()]=!0,u)),style:{width:D}},Ur=un==="button"?{disabled:ln}:{},Gr=null,Nn=null;if((!$||U)&&!ln){var G;Nn=d.createElement("div",{className:M(g.outline(),(G={},G[g.outlineWarning(t.theme)]=x,G[g.outlineError(t.theme)]=O,G[g.outlineLink()]=U,G[g.outlineLinkWarning(t.theme)]=U&&x,G[g.outlineLinkError(t.theme)]=U&&O,G))})}var Wn={use:P,size:t.size,hasChildren:!!pn,loading:S||!1},Yr=z&&d.createElement(jr,y({},Wn,{position:"left",icon:z})),Zr=C&&d.createElement(jr,y({},Wn,{hasBothIcons:!!z&&!!C,position:"right",icon:C}));if(U){var R;vn.className=M((R={},R[g.root(t.theme)]=!0,R[Bn]=!0,R[g.link(t.theme)]=!0,R[g.linkLineHeight()]=!Fn,R[g.linkLineHeightSafariFallback()]=Fn,R[g.linkFocus(t.theme)]=$,R[g.linkDisabled(t.theme)]=ln,R)),Object.assign(In,{className:M(g.wrap(t.theme),g.wrapLink()),style:{width:In.style.width}}),vn.style.textAlign=void 0}var Pn=S&&!z&&!C,Vr=Pn&&d.createElement(_r,{size:t.size}),Rn=d.createElement("div",{className:M(g.caption(),E.caption,(m={},m[g.captionLink()]=U,m[g.captionDisabled()]=!v&&f,m))},Vr,Yr,d.createElement("span",{className:M(E.text,(b={},b[g.visibilityHidden()]=Pn,b))},pn),Zr);U&&!S&&(Rn=d.createElement(W.Provider,{value:Pi(t.theme)},d.createElement(Li,{focused:$,disabled:f,icon:t.renderIcon2022(z),rightIcon:t.renderIcon2022(C),tabIndex:-1,component:$i},pn)));var qr=un;return d.createElement("span",y({},In,{"data-tid":kn.root}),d.createElement(qr,y({"data-tid":kn.rootElement,ref:t._ref},vn,Ur),Gr,Nn,Fr,Rn))},t.handleFocus=function(a){!t.props.disabled&&!t.props.disableFocus&&(I.globalObject.requestAnimationFrame==null||I.globalObject.requestAnimationFrame(function(){Ln.isTabPressed&&t.setState({focusedByTab:!0})}),t.props.onFocus==null||t.props.onFocus(a))},t.handleBlur=function(a){t.setState({focusedByTab:!1}),!t.props.disabled&&!t.props.disableFocus&&(t.props.onBlur==null||t.props.onBlur(a))},t._ref=function(a){t.node=a},t}On(n,e);var l=n.prototype;return l.componentDidMount=function(){this.props.autoFocus&&(Ln.isTabPressed=!0,this.focus())},n.getDerivedStateFromProps=function(o){return o.loading||o.disabled?{focusedByTab:!1}:null},l.focus=function(){var o;(o=this.node)==null||o.focus()},l.blur=function(){var o;(o=this.node)==null||o.blur()},l.render=function(){var o=this;return d.createElement(W.Consumer,null,function(c){return o.theme=o.props.theme?Tn.create(o.props.theme,c):c,d.createElement(zn,y({rootNodeRef:o.setRootNode},o.props),o.renderMain)})},l.getTabIndex=function(o){var c=o.disableFocus,s=o.disabled,a=o.tabIndex,u=a===void 0?0:a;return c||s?-1:u},l.renderIcon2022=function(o){if(o&&Or(o)){var c,s=Br(this.theme);return d.cloneElement(o,{size:(c=o.props.size)!=null?c:s[this.size]})}return o},l.getSizeClassName=function(){var o=this.getProps(),c=o.icon,s=o.rightIcon,a=o.children,u=ii(this.theme,"5.3");switch(this.size){case"large":{var m,b,h=(m={},m[g.sizeLargeIE11(this.theme)]=nn||xn,m[g.sizeLargeWithIcon(this.theme)]=!!c,m[g.sizeLargeWithIconWithoutText(this.theme)]=!!c&&!a,m),L=(b={},b[g.sizeLargeWithRightIcon(this.theme)]=!!s,b[g.sizeLargeWithIconWithoutText5_3(this.theme)]=(!!c||!!s)&&!a,b);return M(g.sizeLarge(this.theme),h,u&&L)}case"medium":{var f,p,v=(f={},f[g.sizeMediumIE11(this.theme)]=nn||xn,f[g.sizeMediumWithIcon(this.theme)]=!!c,f[g.sizeMediumWithIconWithoutText(this.theme)]=!!c&&!a,f),O=(p={},p[g.sizeMediumWithRightIcon(this.theme)]=!!s,p[g.sizeMediumWithIconWithoutText5_3(this.theme)]=(!!c||!!s)&&!a,p);return M(g.sizeMedium(this.theme),v,u&&O)}case"small":default:{var x,S,T=(x={},x[g.sizeSmallIE11(this.theme)]=nn||xn,x[g.sizeSmallWithIcon(this.theme)]=!!c,x[g.sizeSmallWithIconWithoutText(this.theme)]=!!c&&!a,x),z=(S={},S[g.sizeSmallWithRightIcon(this.theme)]=!!s,S[g.sizeSmallWithIconWithoutText5_3(this.theme)]=(!!c||!!s)&&!a,S);return M(g.sizeSmall(this.theme),T,u&&z)}}},l.getSizeWrapClassName=function(){switch(this.size){case"large":return g.wrapLarge(this.theme);case"medium":return g.wrapMedium(this.theme);case"small":default:return g.wrapSmall(this.theme)}},n})(d.Component),K.__KONTUR_REACT_UI__="Button",K.displayName="Button",K.__BUTTON__=!0,K.defaultProps={use:"default",type:"button",component:Hi},K))||mn)||mn;function Ui(e){return Array.isArray(e)&&e.length===4}const Gi=(e,n)=>{const l=e.createElement("span");return l.style.display="none",e.body.append(l),t=>{l.style.color="",l.style.color=t;let o=/^rgba?\(/.test(l.style.color)?l.style.color:n(l).color;if(l.remove(),!/^rgba?\(/.test(o))return t;o.startsWith("rgb(")&&(o=o.replace(/rgb\((.*)\)$/,"rgba($1, 1)"));const c=(o.match(/[\d.]+/g)||[]).map(Number);return Ui(c)?c:t}},Yi="​",Er="-0.1875em",Zi=()=>{var e;return!I.isBrowser(I.globalObject)||!((e=I.globalObject.crypto)!=null&&e.getRandomValues)?Date.now().toString(16):("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,n=>(n^I.globalObject.crypto.getRandomValues(new Uint8Array(1))[0]&15>>n/4).toString(16))};function Vi(e,n){const t=new RegExp(`${n}\\s*=\\s*["']([^"']*)["']`,"g").exec(e);return t?t[1]:null}function qi(e,n,l){const t=new RegExp(`(${n}\\s*=\\s*['"])[^'"]*(['"])`,"g");return e.replace(t,`$1${l}$2`)}const Qi=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8.37512C7 7.06344 8.06332 6.00012 9.375 6.00012C10.6867 6.00012 11.75 7.06344 11.75 8.37512C11.75 9.68679 10.6867 10.7501 9.375 10.7501C8.06332 10.7501 7 9.68679 7 8.37512ZM9.375 7.50012C8.89175 7.50012 8.5 7.89187 8.5 8.37512C8.5 8.85837 8.89175 9.25012 9.375 9.25012C9.85824 9.25012 10.25 8.85837 10.25 8.37512C10.25 7.89187 9.85824 7.50012 9.375 7.50012Z" fill="#222222"/>
                      <path d="M12.6599 13.2563C13.0993 12.8169 13.8116 12.8169 14.2509 13.2563L16.0631 15.0684C16.356 15.3613 16.8309 15.3613 17.1237 15.0684C17.4166 14.7755 17.4166 14.3007 17.1237 14.0078L15.3116 12.1956C14.2865 11.1705 12.6244 11.1705 11.5993 12.1956L7.21967 16.5752C6.92677 16.8681 6.92677 17.343 7.21967 17.6359C7.51256 17.9288 7.98743 17.9288 8.28033 17.6359L12.6599 13.2563Z" fill="#222222"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 6C4.25 3.92893 5.92893 2.25 8 2.25H13.2564C13.9858 2.25 14.6853 2.53973 15.201 3.05546L18.9445 6.79902C19.4603 7.31475 19.75 8.01422 19.75 8.74357V18C19.75 20.0711 18.0711 21.75 16 21.75H8C5.92893 21.75 4.25 20.0711 4.25 18V6ZM8 3.75C6.75736 3.75 5.75 4.75736 5.75 6V18C5.75 19.2426 6.75736 20.25 8 20.25H16C17.2426 20.25 18.25 19.2426 18.25 18V8.74357C18.25 8.41205 18.1183 8.0941 17.8839 7.85968L14.1403 4.11612C13.9059 3.8817 13.588 3.75 13.2564 3.75H8Z" fill="#222222"/>
                    </svg>`,Ji=typeof window<"u"?k.useLayoutEffect:k.useEffect,_n=({url:e,align:n,color:l,size:t,viewBoxSize:o,fetcher:c=window.fetch,onLoad:s,onError:a})=>{const[u,m]=k.useState(),[b,h]=k.useState();if(Ji(()=>{function f(p){h(Vi(p,"viewBox"));const v=p.split(`
`).filter(Boolean).slice(1,-1).join(`
`);m(qi(v,"fill",l||"currentColor"))}c(e).then(p=>{if(p.ok)return p.text();throw Error(`Failed to fetch image: ${e}`)}).then(p=>{f(p),s==null||s()}).catch(()=>{f(Qi),a==null||a()})},[c,e,l]),!u)return null;const L={display:"block",flexShrink:0,marginBottom:n==="none"||n==="center"?void 0:Er};return _.jsx("svg",{style:L,width:t,height:t,viewBox:b??`0 0 ${o} ${o}`,xmlns:"http://www.w3.org/2000/svg",dangerouslySetInnerHTML:{__html:u}})};_n.displayName="IconSVGEmbed";_n.__docgenInfo={description:"",methods:[],displayName:"IconSVGEmbed",props:{url:{required:!0,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"number"},description:""},align:{required:!0,tsType:{name:"union",raw:'"center" | "baseline" | "none"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"baseline"'},{name:"literal",value:'"none"'}]},description:""},viewBoxSize:{required:!0,tsType:{name:"number"},description:""},color:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fetcher:{required:!1,tsType:{name:'unknown["fetch"]',raw:'(typeof window)["fetch"]'},description:"",defaultValue:{value:"window.fetch",computed:!0}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function Xi(e){const[n,l,t,o]=e;return`
0 0 0 0 ${n/255}
0 0 0 0 ${l/255}
0 0 0 0 ${t/255}
0 0 0 ${o} 0`}const Sn={16:{light:!0,regular:!0,solid:!0},20:{light:!0,regular:!0,solid:!0},24:{light:!1,regular:!0,solid:!0},32:{light:!1,regular:!0,solid:!1},64:{light:!1,regular:!0,solid:!1}};function Nr(e,n){var c;const l=Ki(n);if((c=Sn[e])!=null&&c[l])return[e,l];function t(){var a;const s=Object.keys(Sn).map(Number).sort((u,m)=>m-u);for(const u of s)if((a=Sn[u])!=null&&a[l])return u;return s[s.length-1]}return[t(),l]}function Ki(e){switch(e){case"light":case"regular":case"solid":return e;default:return"regular"}}const no=(e,n,l)=>{const[t,o]=Nr(n,l);return`https://s.kontur.ru/common-v2/icons-ui/black/${e}/${e}-${t}-${o}.svg`},Wr=k.createContext(no),eo=()=>k.useContext(Wr),to=({children:e,value:n})=>_.jsx(Wr.Provider,{value:n.getIconUrl,children:e});to.__docgenInfo={description:"",methods:[],displayName:"CdnIconProvider",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  getIconUrl: CdnIconContextType;
}`,signature:{properties:[{key:"getIconUrl",value:{name:"signature",type:"function",raw:"(icon: string, size: number, type: string) => string",signature:{arguments:[{type:{name:"string"},name:"icon"},{type:{name:"number"},name:"size"},{type:{name:"string"},name:"type"}],return:{name:"string"}},required:!0}}]}},description:""}}};const ro="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4NCiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDguMzc1MTJDNyA3LjA2MzQ0IDguMDYzMzIgNi4wMDAxMiA5LjM3NSA2LjAwMDEyQzEwLjY4NjcgNi4wMDAxMiAxMS43NSA3LjA2MzQ0IDExLjc1IDguMzc1MTJDMTEuNzUgOS42ODY3OSAxMC42ODY3IDEwLjc1MDEgOS4zNzUgMTAuNzUwMUM4LjA2MzMyIDEwLjc1MDEgNyA5LjY4Njc5IDcgOC4zNzUxMlpNOS4zNzUgNy41MDAxMkM4Ljg5MTc1IDcuNTAwMTIgOC41IDcuODkxODcgOC41IDguMzc1MTJDOC41IDguODU4MzcgOC44OTE3NSA5LjI1MDEyIDkuMzc1IDkuMjUwMTJDOS44NTgyNCA5LjI1MDEyIDEwLjI1IDguODU4MzcgMTAuMjUgOC4zNzUxMkMxMC4yNSA3Ljg5MTg3IDkuODU4MjQgNy41MDAxMiA5LjM3NSA3LjUwMDEyWiIgZmlsbD0iIzIyMjIyMiIvPg0KICA8cGF0aCBkPSJNMTIuNjU5OSAxMy4yNTYzQzEzLjA5OTMgMTIuODE2OSAxMy44MTE2IDEyLjgxNjkgMTQuMjUwOSAxMy4yNTYzTDE2LjA2MzEgMTUuMDY4NEMxNi4zNTYgMTUuMzYxMyAxNi44MzA5IDE1LjM2MTMgMTcuMTIzNyAxNS4wNjg0QzE3LjQxNjYgMTQuNzc1NSAxNy40MTY2IDE0LjMwMDcgMTcuMTIzNyAxNC4wMDc4TDE1LjMxMTYgMTIuMTk1NkMxNC4yODY1IDExLjE3MDUgMTIuNjI0NCAxMS4xNzA1IDExLjU5OTMgMTIuMTk1Nkw3LjIxOTY3IDE2LjU3NTJDNi45MjY3NyAxNi44NjgxIDYuOTI2NzcgMTcuMzQzIDcuMjE5NjcgMTcuNjM1OUM3LjUxMjU2IDE3LjkyODggNy45ODc0MyAxNy45Mjg4IDguMjgwMzMgMTcuNjM1OUwxMi42NTk5IDEzLjI1NjNaIiBmaWxsPSIjMjIyMjIyIi8+DQogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4yNSA2QzQuMjUgMy45Mjg5MyA1LjkyODkzIDIuMjUgOCAyLjI1SDEzLjI1NjRDMTMuOTg1OCAyLjI1IDE0LjY4NTMgMi41Mzk3MyAxNS4yMDEgMy4wNTU0NkwxOC45NDQ1IDYuNzk5MDJDMTkuNDYwMyA3LjMxNDc1IDE5Ljc1IDguMDE0MjIgMTkuNzUgOC43NDM1N1YxOEMxOS43NSAyMC4wNzExIDE4LjA3MTEgMjEuNzUgMTYgMjEuNzVIOEM1LjkyODkzIDIxLjc1IDQuMjUgMjAuMDcxMSA0LjI1IDE4VjZaTTggMy43NUM2Ljc1NzM2IDMuNzUgNS43NSA0Ljc1NzM2IDUuNzUgNlYxOEM1Ljc1IDE5LjI0MjYgNi43NTczNiAyMC4yNSA4IDIwLjI1SDE2QzE3LjI0MjYgMjAuMjUgMTguMjUgMTkuMjQyNiAxOC4yNSAxOFY4Ljc0MzU3QzE4LjI1IDguNDEyMDUgMTguMTE4MyA4LjA5NDEgMTcuODgzOSA3Ljg1OTY4TDE0LjE0MDMgNC4xMTYxMkMxMy45MDU5IDMuODgxNyAxMy41ODggMy43NSAxMy4yNTY0IDMuNzVIOFoiIGZpbGw9IiMyMjIyMjIiLz4NCjwvc3ZnPg==",io=16,oo="regular",ao={root:"CdnIcon__root"},kr="#000",Cr=typeof window<"u"?k.useLayoutEffect:k.useEffect,Pr=k.forwardRef(({style:e,icon:n,url:l,size:t=io,weight:o=oo,color:c,align:s="center",embed:a,lazy:u,alt:m="",onLoad:b,onError:h,...L},f)=>{const p=k.useRef(null),v=k.useRef(null),[O,x]=k.useState(c??kr),[S,T]=k.useState(null),z=eo();Cr(()=>{const j=p.current;if(!j||!j.attachShadow)return;const D=j.ownerDocument.createElement("span");j.append(D);try{const B=D.attachShadow({mode:"closed"});B.textContent=Yi}catch(B){console.error(B)}return()=>D.remove()},[]),k.useLayoutEffect(()=>{if(!I.isBrowser(I.globalObject)||!v.current)return;const j=Gi(I.globalObject.document,I.globalObject.getComputedStyle);if(c)x(j(c));else if(v.current&&I.isBrowser(I.globalObject)){const D=()=>v.current&&I.isBrowser(I.globalObject)?I.globalObject.getComputedStyle(v.current).color:kr,B=D();B?x(j(B)):setTimeout(()=>x(j(D())))}},[c]),Cr(()=>{S&&T(null)},[l,n]),l&&n&&console.warn("need set only one of prop: icon or url");let C;l?C=l:n?C=z(n,t,o):(C="",console.warn("need set one of prop: icon or url"));const H={display:s==="center"?"inline-flex":"inline-block",alignItems:s,...e},Q=j=>{T(ro),h==null||h(j)},J=j=>{b==null||b(j)};return _.jsxs("span",{"data-tid":ao.root,ref:f,style:H,...L,children:[s==="center"&&_.jsx("span",{ref:p}),a?_.jsx(_n,{url:C,color:c,size:t,align:s,viewBoxSize:Nr(t,o)[0],onLoad:()=>b==null?void 0:b(),onError:()=>h==null?void 0:h()}):on(S??C)]});function on(j){const D=Zi(),B={display:"block",width:t,height:t,flexShrink:0,marginBottom:s!=="none"&&s!=="center"?Er:void 0,objectFit:"cover",filter:`url(#${D})`,userSelect:"none",pointerEvents:"none"};return _.jsxs(_.Fragment,{children:[_.jsx("img",{width:t,height:t,style:B,src:j,loading:u?"lazy":void 0,onLoad:J,onError:Q,alt:m}),_.jsx("span",{ref:v,"aria-hidden":"true",style:{position:"fixed",width:0,height:0},children:typeof O!="string"&&_.jsx("svg",{width:0,height:0,children:_.jsx("defs",{children:_.jsx("filter",{id:D,children:_.jsx("feColorMatrix",{type:"matrix",in:"SourceGraphic",colorInterpolationFilters:"sRGB",values:`${Xi(O)}`})})})})})]})}});Pr.displayName="CdnIcon";Pr.__docgenInfo={description:"",methods:[],displayName:"CdnIcon",props:{size:{defaultValue:{value:"16",computed:!1},required:!1},weight:{defaultValue:{value:'"regular"',computed:!1},required:!1},align:{defaultValue:{value:'"center"',computed:!1},required:!1},alt:{defaultValue:{value:'""',computed:!1},required:!1}}};export{go as B,Pr as C,to as a};
