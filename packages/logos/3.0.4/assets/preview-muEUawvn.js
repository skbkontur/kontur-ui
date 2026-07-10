import{R as p,r as w}from"./index-Bk3ZmH4I.js";import{a as on,Y as cn,L as ln}from"./Example-Cvbd5UKs.js";import{c as i,_ as n,f as sn,C as dn,g as f,m as re,i as ee,b as pn,d as P,e as j,k as le,r as Se,h as Ne,j as De,l as Oe,n as Te,o as un,p as hn,q as xe,s as kn,Z as vn,t as _a,u as te,B as ae,w as gn,v as mn,x as fe,y as $e,L as wn,T as bn,a as fn,G as Mn}from"./index-sa0rRjVA.js";import"./index-Nwkb1jlR.js";import{j as O}from"./index-DSU5k4bI.js";import{a as he,_ as y}from"./toPropertyKey-B36dj_7n.js";import"./iframe-7eGPDqS8.js";import"./index-J3bWmEqI.js";var Ye,Qe,Ba=function(){return i(Ye||(Ye=n([`
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
  `])))},In=function(){return i(Qe||(Qe=n([`
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
  `])))},Pa={small:16,medium:20,large:24},Ge="small",jn=["size"],yn=function(e){return typeof e=="string"&&Object.keys(Pa).includes(e)},xn=function(e){return Object.entries(Pa).sort(function(o,t){var a=o[1],l=t[1];return Math.abs(e-a)>Math.abs(e-l)?1:-1})[0][0]},Ce=function(e,o){return sn(o,function(t,a){var l=t.size,s=l===void 0?Ge:l,c=he(t,jn),d=Ge;s!==d&&yn(s)?d=s:typeof s=="number"&&(d=xn(s));var h=e[d]();return p.cloneElement(h,y({ref:a},c))})},Ln=function(e,o){var t=this;this.interval=null,this.start=function(){t.animations.forEach(function(a){return a.start()}),t.interval=zn(function(){t.animations.forEach(function(a){return a.step()})},t.FPS)},this.stop=function(){t.interval&&(t.interval.clear(),t.animations.forEach(function(a){return a.finish()}))},this.animations=e,this.FPS=o,this.start()},zn=function(e,o){var t=0,a=!1,l=0,s=function c(){if(!a){var d=new Date().getTime();t||(t=d),d-t>o&&(e(),t=d),f.globalObject.requestAnimationFrame&&(l=f.globalObject.requestAnimationFrame(c))}};return s(),{clear:function(){a=!0,f.globalObject.cancelAnimationFrame==null||f.globalObject.cancelAnimationFrame(l)}}},ke=function(e,o,t){var a=this;this.startTime=0,this.isFinished=!1,this.step=function(){if(!a.isFinished){var l=new Date().getTime();a.startTime||(a.startTime=l);var s=(l-a.startTime)/a.duration;a.onProgress(s),s>=1&&a.finish()}},this.reset=function(){a.startTime=0,a.isFinished=!1},this.finish=function(){a.isFinished=!0,a.onFinish&&a.onFinish(a)},this.start=function(){a.isFinished||a.step()},this.duration=e,this.onProgress=o,this.onFinish=t},Sn=function(e,o,t,a,l){return new ke(t,function(s){var c=e+(o-e)*s;a("stroke-dashoffset",""+c+l)},function(s){s.reset()})},Nn=function(e,o,t,a,l){var s=!1;return new ke(t,function(c){var d=s?1-c:c,h=[e[0]+(o[0]-e[0])*d,e[1]+(o[1]-e[1])*d];a("stroke-dasharray",""+h[0]+l+" "+h[1]+l)},function(c){s=!s,c.reset()})},Dn=function(e,o,t){var a=e.map(function(c){return dn.create(c).rgb}),l=0,s=1;return new ke(o,function(c){var d=a[l],h=a[s];if(d&&h){var k=[Math.round(d[0]+(h[0]-d[0])*c),Math.round(d[1]+(h[1]-d[1])*c),Math.round(d[2]+(h[2]-d[2])*c)];t("stroke","rgb("+k+")")}},function(c){c.reset(),l=s,s=(s+1)%e.length})},On=function(e,o,t,a,l){return l===void 0&&(l="deg"),new ke(t,function(s){var c=Math.round(e+(o-e)*s);a("transform","rotate("+c+l+")")},function(s){s.reset()})},Ze,Ve,qe,Xe,de=re({root:function(){return i(Ze||(Ze=n([`
      display: inline-block;
      margin-left: -1px;
      margin-right: -1px;
    `])))},rootInline:function(){return i(Ve||(Ve=n([`
      margin-left: -0.0714285714285714em;
      margin-right: -0.0714285714285714em;
    `])))},icon:function(){return i(qe||(qe=n([`
      margin-bottom: -3px;
      border-radius: 50%;
      overflow: visible;
    `])))},iconInline:function(){return i(Xe||(Xe=n([`
      height: 1.1428571428571428em;
      width: 1.1428571428571428em;
      margin-bottom: -0.2428571428571428em;
      stroke-width: 0.10714285714285714em;
    `])))}}),Le={big:{size:96,width:4,radius:32},normal:{size:48,width:2,radius:16},mini:{size:16,width:1.5,radius:6}},Tn=function(e){return typeof e=="string"&&e in Le},Wa=function(e){var o,t,a=e.size,l=e.className,s=e.dimmed,c=e.inline,d=e.width,h=e.color,k=Tn(a)?Le[a]:a,v=c?Le.mini:k,L=p.useRef(null);if(ee&&!pn){var g=p.useRef(null),m=p.useContext(P),b=m.red,N=m.yellow,M=m.green,x=m.brand;p.useEffect(function(){var C=L.current,D=function(){if(C){var F;(F=C.style).setProperty.apply(F,arguments)}};return g.current=new Ln([Sn(0,-230,1e3,D,"%"),Nn([62,168],[187,43],2e3,D,"%"),On(0,360,2e3,D)].concat(s?[]:[Dn([b,N,M,x],1500,D)]),1e3/60),function(){var S=g.current;S&&S.stop(),C&&C.removeAttribute("style")}},[s,b,N,M,x])}return p.createElement("span",{className:j(de.root(),(o={},o[de.rootInline()]=c,o))},p.createElement("svg",{viewBox:"0 0 "+v.size+" "+v.size,className:j(de.icon(),l,(t={},t[de.iconInline()]=c,t)),width:v.size,height:v.size,fill:"none",stroke:h,strokeDasharray:10*v.radius/6+", "+27*v.radius/6,strokeDashoffset:"0",strokeWidth:d||v.width,ref:L,focusable:"false","aria-hidden":"true"},p.createElement("circle",{cx:v.size/2,cy:v.size/2,r:v.radius})))},Je,Ke,er,rr,Q={spinnerCircleOffset:function(){return le(Je||(Je=n([`
        0% { stroke-dashoffset: 231.25%; }
        100% { stroke-dashoffset: 0%; }
      `])))},spinnerCircleLength:function(){return le(Ke||(Ke=n([`
        0% { stroke-dasharray: 62.5%, 168.75%; }
        50% {  stroke-dasharray: 187.5%, 43.75%; }
        100% { stroke-dasharray: 62.5%, 168.75%; }
      `])))},spinnerCircleRotate:function(){return le(er||(er=n([`
        100% { transform: rotate(360deg); }
      `])))},spinnerColor:function(e){return le(rr||(rr=n([`
        100%, 0% { stroke: `,`; }
        40% { stroke: `,`; }
        66% { stroke: `,`; }
        80%, 90% { stroke: `,`; }
      `])),e.red,e.yellow,e.green,e.brand)}},tr,ar,nr,ir,or,cr,lr,sr,dr,pr,ur,hr,kr,B=re({circle:function(e){return i(tr||(tr=n([`
      stroke: `,`;

      `,`
    `])),e.spinnerColor,!ee&&`
          animation: `+Q.spinnerCircleOffset()+` 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,
            `+Q.spinnerCircleLength()+` 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite,
            `+Q.spinnerCircleRotate()+` 2s linear infinite,
            `+Q.spinnerColor(e)+` 6s ease-in-out infinite;
        `)},circleDimmedColor:function(e){return i(ar||(ar=n([`
      stroke: `,`;
    `])),e.spinnerDimmedColor)},circleWithoutColorAnimation:function(){return i(nr||(nr=n([`
      `,`
    `])),!ee&&`
          animation: `+Q.spinnerCircleOffset()+` 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,
          `+Q.spinnerCircleLength()+` 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite,
          `+Q.spinnerCircleRotate()+` 2s linear infinite;
        `)},captionColor:function(e){return i(ir||(ir=n([`
      color: `,`;
    `])),e.spinnerCaptionColor)},inline:function(){return i(or||(or=n([`
      font-size: inherit;
      line-height: inherit;
    `])))},mini:function(e){return i(cr||(cr=n([`
      margin-left: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),e.spinnerCaptionGapSmall,e.spinnerFontSizeSmall,e.spinnerLineHeightSmall)},small:function(e){return i(lr||(lr=n([`
      margin: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),e.spinnerCaptionMarginSmall,e.spinnerFontSizeSmall,e.spinnerLineHeightSmall)},normal:function(e){return i(sr||(sr=n([`
      display: block;
      font-size: `,`;
      line-height: `,`;
      margin-top: `,`;
    `])),e.spinnerFontSizeMedium,e.spinnerLineHeightMedium,e.spinnerCaptionGapMedium)},medium:function(e){return i(dr||(dr=n([`
      margin: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),e.spinnerCaptionMarginMedium,e.spinnerFontSizeMedium,e.spinnerLineHeightMedium)},big:function(e){return i(pr||(pr=n([`
      display: block;
      font-size: `,`;
      line-height: `,`;
      margin-top: `,`;
    `])),e.spinnerFontSizeLarge,e.spinnerLineHeightLarge,e.spinnerCaptionGapLarge)},large:function(e){return i(ur||(ur=n([`
      font-size: `,`;
      line-height: `,`;
      margin: `,`;
    `])),e.spinnerFontSizeLarge,e.spinnerLineHeightLarge,e.spinnerCaptionMarginLarge)},spinner:function(){return i(hr||(hr=n([`
      display: inline-block;
      text-align: center;
      line-height: normal;
    `])))},inner:function(){return i(kr||(kr=n([`
      display: inline-block;
    `])))}}),vr,J,Cn=["big","mini","normal"],An={root:"Spinner__root"},En=Se(vr=(J=(function(r){function e(){for(var t,a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return t=r.call.apply(r,[this].concat(l))||this,t.getProps=Oe(e.defaultProps),t.renderSpinner=function(c,d,h){var k;return p.createElement(Wa,{size:c,className:j((k={},k[B.circle(t.theme)]=!d&&!t.props.color,k[B.circleDimmedColor(t.theme)]=d,k[B.circleWithoutColorAnimation()]=d||!!t.props.color,k)),dimmed:d,width:t.props.width,color:t.props.color,inline:h})},t.renderCaption=function(c,d){return p.createElement("span",{className:j(B[c](t.theme),B.captionColor(t.theme))},d)},t}Ne(e,r);var o=e.prototype;return o.render=function(){var a=this;return p.createElement(P.Consumer,null,function(l){return a.theme=l,a.renderMain()})},o.renderMain=function(){var a=this.props,l=a.caption,s=l===void 0?null:l,c=a.dimmed,d=a.inline,h=this.getProps().type;return p.createElement(De,y({rootNodeRef:this.setRootNode},this.props),p.createElement("div",{"data-tid":An.root,className:B.spinner()},p.createElement("span",{className:B.inner()},this.renderSpinner(h,c,d)),s&&this.renderCaption(h,s)))},e})(p.Component),J.__KONTUR_REACT_UI__="Spinner",J.displayName="Spinner",J.defaultProps={type:"normal"},J.Types=Object.assign.apply(Object,[{}].concat(Cn.map(function(r){var e;return e={},e[r]=r,e}))),J))||vr,_n=function(){return`
    box-shadow: none;
    cursor: default;
  `},pe=function(e,o,t){return`
    color: `+e+`;

    &:hover {
      color: `+o+`;
    }

    &:active {
      color: `+t+`;
    }
  `},gr,mr,wr,br,fr,Mr,Ir,jr,yr,xr,Lr,zr,Sr,Nr,Dr,Or,Tr,Cr,Ar,Er,_r,Br,Bn=le(gr||(gr=n([`
  0% {
    text-decoration-color: inherit;
  }
  100% {
    text-decoration-color: transparent;
  }
`]))),Pn=function(e){var o=parseFloat(e.linkTextUnderlineOpacity)-1;return i(mr||(mr=n([`
    animation: `,` 1s linear !important; // override creevey
    animation-play-state: paused !important;
    animation-delay: `,`s !important;
    animation-fill-mode: forwards !important;
  `])),Bn,o)},I=re({root:function(e){return i(wr||(wr=n([`
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
    `])),e.linkTextDecoration,e.linkTextDecorationStyle,e.linkTextUnderlineOffset,e.linkTextDecorationThickness,e.transitionDuration,e.transitionTimingFunction,e.linkTextDecorationColor,e.linkTextDecorationColor,e.linkHoverTextDecorationStyle,e.linkTextDecorationColor,Pn(e),e.linkHoverTextDecorationStyle)},lineFocus:function(e){return i(br||(br=n([`
      color: `,`;
    `])),e.linkHoverColor)},lineFocusSuccess:function(e){return i(fr||(fr=n([`
      color: `,` !important;
    `])),e.linkSuccessHoverColor)},lineFocusDanger:function(e){return i(Mr||(Mr=n([`
      color: `,` !important;
    `])),e.linkDangerHoverColor)},lineFocusGrayed:function(e){return i(Ir||(Ir=n([`
      color: `,` !important;
    `])),e.linkGrayedHoverColor)},button:function(e){return i(jr||(jr=n([`
      display: inline-block;
      line-height: `,`;
      padding-left: `,`;
      padding-right: `,`;
    `])),e.linkButtonLineHeight,e.linkButtonPaddingX,e.linkButtonPaddingX)},buttonOpened:function(e){return i(yr||(yr=n([`
      background: `,`;
    `])),e.btnDefaultActiveBg)},arrow:function(){return i(xr||(xr=n([`
      border: 4px solid transparent;
      border-bottom-width: 0;
      border-top-color: #a0a0a0;
      display: inline-block;
      margin-bottom: 3px;
      margin-left: 3px;
      vertical-align: middle;
    `])))},default:function(e){return i(Lr||(Lr=n([`
      `,`;
    `])),pe(e.linkColor,e.linkHoverColor,e.linkActiveColor))},success:function(e){return i(zr||(zr=n([`
      `,`;
    `])),pe(e.linkSuccessColor,e.linkSuccessHoverColor,e.linkSuccessActiveColor))},danger:function(e){return i(Sr||(Sr=n([`
      `,`;
    `])),pe(e.linkDangerColor,e.linkDangerHoverColor,e.linkDangerActiveColor))},grayed:function(e){return i(Nr||(Nr=n([`
      `,`;
    `])),pe(e.linkGrayedColor,e.linkGrayedHoverColor,e.linkGrayedActiveColor))},useGrayedFocus:function(e){return i(Dr||(Dr=n([`
      color: `,`;
    `])),e.linkDisabledColor)},focus:function(e){return i(Or||(Or=n([`
      text-decoration: `,`;
      outline: `,`;
    `])),e.linkHoverTextDecoration,e.linkFocusOutline)},disabled:function(e){return i(Tr||(Tr=n([`
      `,`;

      color: `,` !important; // override root color

      &:hover {
        color: `,`;
        text-decoration-color: `,`;
      }
    `])),_n(),e.linkDisabledColor,e.linkDisabledColor,e.linkTextDecorationColor)},icon:function(){return i(Cr||(Cr=n([`
      display: inline-block;
    `])))},iconLeft:function(e){return i(Ar||(Ar=n([`
      margin-right: `,`;
    `])),e.linkIconMarginRight)},iconRight:function(e){return i(Er||(Er=n([`
      margin-left: `,`;
    `])),e.linkIconMarginLeft)},warning:function(e){return i(_r||(_r=n([`
      background-color: `,`;
      box-shadow: 0 0 0 2px `,`;
    `])),e.btnWarningSecondary,e.btnWarningSecondary)},error:function(e){return i(Br||(Br=n([`
      background-color: `,`;
      box-shadow: 0 0 0 2px `,`;
    `])),e.btnErrorSecondary,e.btnErrorSecondary)}}),Pr=function(e){var o=e.icon,t=e.loading,a=e.hasBothIcons,l=e.position,s=w.useContext(P);return p.createElement("span",{className:j(I.icon(),l==="left"&&I.iconLeft(s),l==="right"&&I.iconRight(s))},t&&!a?p.createElement(En,{caption:null,dimmed:!0,inline:!0}):o)},Wn=["disabled","icon","rightIcon","use","loading","_button","_buttonOpened","component","focused","error","warning","tabIndex","theme"],Wr,ce,Rn="a",Un={root:"Link__root"},Fn=Se(Wr=(ce=(function(r){function e(){for(var t,a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return t=r.call.apply(r,[this].concat(l))||this,t.getProps=Oe(e.defaultProps),t.state={focusedByTab:!1},t.getTabIndex=function(c){var d=c.nonInteractive,h=c.tabIndex,k=h===void 0?0:h;return d?-1:k},t.getRel=function(){if(Hn(t.props)){var c=t.props,d=c.rel,h=c.href;return!d&&h?"noopener"+(un(h)?" noreferrer":""):d}},t.renderMain=function(c){var d,h=c.disabled,k=c.icon,v=c.rightIcon,L=c.use,g=c.loading,m=c._button,b=c._buttonOpened,N=c.component,M=c.focused,x=M===void 0?!1:M,C=c.error,D=c.warning,S=c.tabIndex;c.theme;var F=he(c,Wn),q=null;m&&(q=p.createElement("span",{className:I.arrow()}));var X=!h&&(t.state.focusedByTab||x),ne=k&&p.createElement(Pr,{icon:k,loading:g,position:"left"}),z=v&&p.createElement(Pr,{hasBothIcons:!!k&&!!v,icon:v,loading:g,position:"right"}),T=h||g,E=function(){switch(L){case"default":return I.default(t.theme);case"danger":return I.danger(t.theme);case"success":return I.success(t.theme);case"grayed":return I.grayed(t.theme)}},ge=function(){switch(L){case"default":return I.lineFocus(t.theme);case"danger":return I.lineFocusDanger(t.theme);case"success":return I.lineFocusSuccess(t.theme);case"grayed":return I.lineFocusGrayed(t.theme)}},ie=y({},F,{className:j((d={},d[I.root(t.theme)]=!0,d[Ba()]=N==="button",d[I.focus(t.theme)]=X,d[I.disabled(t.theme)]=h||g,d[E()]=!0,d[I.useGrayedFocus(t.theme)]=L==="grayed"&&x,d[I.button(t.theme)]=!!m,d[I.buttonOpened(t.theme)]=!!b,d[I.warning(t.theme)]=D,d[I.error(t.theme)]=C,d[ge()]=X,d)),onClick:t.handleClick,onFocus:t.handleFocus,onBlur:t.handleBlur,tabIndex:t.getTabIndex({nonInteractive:T,tabIndex:S}),rel:t.getRel()}),W=N==="button"?{disabled:T}:{};return p.createElement(N,y({"data-tid":Un.root},ie,W,hn({disabled:h})),ne,t.props.children,z,q)},t.handleFocus=function(){t.props.disabled||f.globalObject.requestAnimationFrame==null||f.globalObject.requestAnimationFrame(function(){xe.isTabPressed&&t.setState({focusedByTab:!0})})},t.handleBlur=function(){t.setState({focusedByTab:!1})},t.handleClick=function(c){var d=t.props,h=d.onClick,k=d.disabled,v=d.loading;k&&(c.preventDefault(),c.stopPropagation()),h&&!k&&!v&&h(c)},t}Ne(e,r);var o=e.prototype;return o.render=function(){var a=this;return p.createElement(P.Consumer,null,function(l){return a.theme=a.props.theme?Te.create(a.props.theme,l):l,p.createElement(De,y({rootNodeRef:a.setRootNode},a.getProps()),a.renderMain)})},e})(p.Component),ce.__KONTUR_REACT_UI__="Link",ce.displayName="Link",ce.defaultProps={use:"default",component:Rn},ce))||Wr,Hn=function(e){return e.component==="a"},Rr,Ur,Fr,Hr,$r,Ra=function(e,o){return e+" "+o+" "+e},G=function(e,o,t,a,l,s){var c=o!==t;return i(Rr||(Rr=n([`
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
  `])),c?"initial":e,c?"linear-gradient("+o+", "+t+")":"none",a,s,l,_.arrow,a)},Z=function(e,o,t,a,l,s){var c=o!==t;return i(Ur||(Ur=n([`
    background-color: `,`;
    background-image: `,`;
    box-shadow: 0 0 0 `," ",`;
    color: `,`;
  `])),c?"initial":e,c?"linear-gradient("+o+", "+t+")":"none",s,l,a)},V=function(e,o,t,a){return i(Fr||(Fr=n([`
    &,
    &:hover {
      background-image: none !important; // override :hover styles
      background-color: `,` !important; // override :hover styles
      box-shadow: 0 0 0 `," ",` !important; // override :hover styles

      .`,` {
        box-shadow: `,`;
      }
    }
  `])),e,a,t,_.innerShadow,o)},Me=function(e,o,t,a){return i(Hr||(Hr=n([`
    font-size: `,`;
    box-sizing: border-box;
    padding: `,`;
    line-height: `,`;
  `])),e,Ra(a,t),o)},Ie=function(e,o){return i($r||($r=n([`
    padding: `,`;
    line-height: normal;
  `])),Ra(o,e))},Yr,Qr,Gr,Zr,Vr,qr,Xr,Jr,Kr,et,rt,tt,at,nt,it,ot,ct,lt,st,dt,pt,ut,ht,kt,vt,gt,mt,wt,bt,ft,Mt,It,jt,yt,xt,Lt,zt,St,Nt,Dt,Ot,Tt,Ct,At,Et,_t,Bt,Pt,Wt,Rt,Ut,Ft,Ht,$t,Yt,Qt,Gt,Zt,Vt,qt,Xt,Jt,Kt,ea,ra,ta,aa,na,ia,oa,ca,la,sa,da,pa,ua,ha,ka,va,_=kn("button")({root:"root",arrow:"arrow",caption:"caption",text:"text",innerShadow:"inner-shadow",disabled:"disabled"}),u=re({root:function(e){return i(Yr||(Yr=n([`
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
    `])),Ba(),In(),e.transitionDuration,e.transitionTimingFunction,e.btnBorderColorTransition?", "+e.btnBorderColorTransition:"",e.btnBackgroundClip,_.innerShadow,e.btnIconHoverColor,_.disabled,e.btnIconDisabledColor,e.btnIconColor)},withArrowIconRightSmall:function(e){return i(Qr||(Qr=n([`
      padding-right: calc(`," + "," + ",`);
    `])),e.btnIconSizeSmall,e.btnWithIconPaddingSmall,e.btnWithIconPaddingSmall)},withArrowIconRightMedium:function(e){return i(Gr||(Gr=n([`
      padding-right: calc(`," + "," + ",`);
    `])),e.btnIconSizeMedium,e.btnWithIconPaddingMedium,e.btnWithIconPaddingMedium)},withArrowIconRightLarge:function(e){return i(Zr||(Zr=n([`
      padding-right: calc(`," + "," + ",`);
    `])),e.btnIconSizeLarge,e.btnWithIconPaddingLarge,e.btnWithIconPaddingLarge)},withArrowIconLeftSmall:function(e){return i(Vr||(Vr=n([`
      padding-left: calc(`," + "," + ",`);
    `])),e.btnIconSizeSmall,e.btnWithIconPaddingSmall,e.btnWithIconPaddingSmall)},withArrowIconLeftMedium:function(e){return i(qr||(qr=n([`
      padding-left: calc(`," + "," + ",`);
    `])),e.btnIconSizeMedium,e.btnWithIconPaddingMedium,e.btnWithIconPaddingMedium)},withArrowIconLeftLarge:function(e){return i(Xr||(Xr=n([`
      padding-left: calc(`," + "," + ",`);
    `])),e.btnIconSizeLarge,e.btnWithIconPaddingLarge,e.btnWithIconPaddingLarge)},simulatedPress:function(){return i(Jr||(Jr=n([`
      &:active .`,` {
        transform: translateY(1px);
      }
    `])),_.caption)},outline:function(){return i(Kr||(Kr=n([`
      border-radius: inherit;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `])))},outlineWarning:function(e){return i(et||(et=n([`
      box-shadow:
        0 0 0 `," ",`,
        inset 0 0 0 `," ",`;
    `])),e.btnOutlineWidth,e.btnBorderColorWarning,e.btnInsetWidth,e.btnInsetColor)},outlineError:function(e){return i(rt||(rt=n([`
      box-shadow:
        0 0 0 `," ",`,
        inset 0 0 0 `," ",`;
    `])),e.btnOutlineWidth,e.btnBorderColorError,e.btnInsetWidth,e.btnInsetColor)},outlineLink:function(){return i(tt||(tt=n([`
      cursor: default;
      box-shadow: none;
      left: -2px;
      right: -2px;
      bottom: -2px;
      top: -2px;
    `])))},outlineLinkWarning:function(e){return i(at||(at=n([`
      background-color: `,`;
    `])),e.btnWarningSecondary)},outlineLinkError:function(e){return i(nt||(nt=n([`
      background-color: `,`;
    `])),e.btnErrorSecondary)},sizeSmall:function(e){return i(it||(it=n([`
      border-radius: `,`;

      `,`;
    `])),e.btnBorderRadiusSmall,Me(e.btnFontSizeSmall,e.btnLineHeightSmall,e.btnPaddingXSmall,e.btnPaddingYSmall))},sizeSmallIE11:function(e){return i(ot||(ot=n([`
      `,`;
    `])),Ie(e.btnPaddingXSmall,e.btnPaddingYSmall))},sizeMedium:function(e){return i(ct||(ct=n([`
      border-radius: `,`;

      `,`;
    `])),e.btnBorderRadiusMedium,Me(e.btnFontSizeMedium,e.btnLineHeightMedium,e.btnPaddingXMedium,e.btnPaddingYMedium))},sizeMediumIE11:function(e){return i(lt||(lt=n([`
      `,`;
    `])),Ie(e.btnPaddingXMedium,e.btnPaddingYMedium))},sizeLarge:function(e){return i(st||(st=n([`
      border-radius: `,`;

      `,`;
    `])),e.btnBorderRadiusLarge,Me(e.btnFontSizeLarge,e.btnLineHeightLarge,e.btnPaddingXLarge,e.btnPaddingYLarge))},sizeLargeIE11:function(e){return i(dt||(dt=n([`
      `,`;
    `])),Ie(e.btnPaddingXLarge,e.btnPaddingYLarge))},sizeSmallWithIcon:function(e){return i(pt||(pt=n([`
      padding-left: `,`;
    `])),e.btnWithIconPaddingSmall)},sizeMediumWithIcon:function(e){return i(ut||(ut=n([`
      padding-left: `,`;
    `])),e.btnWithIconPaddingMedium)},sizeLargeWithIcon:function(e){return i(ht||(ht=n([`
      padding-left: `,`;
    `])),e.btnWithIconPaddingLarge)},sizeSmallWithRightIcon:function(e){return i(kt||(kt=n([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingSmall)},sizeMediumWithRightIcon:function(e){return i(vt||(vt=n([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingMedium)},sizeLargeWithRightIcon:function(e){return i(gt||(gt=n([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingLarge)},sizeSmallWithIconWithoutText:function(e){return i(mt||(mt=n([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingSmall)},sizeMediumWithIconWithoutText:function(e){return i(wt||(wt=n([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingMedium)},sizeLargeWithIconWithoutText:function(e){return i(bt||(bt=n([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingLarge)},sizeSmallWithIconWithoutText5_3:function(e){return i(ft||(ft=n([`
      padding-left: `,`;
      padding-right: `,`;
    `])),e.btnWithIconPaddingSmall,e.btnWithIconPaddingSmall)},sizeMediumWithIconWithoutText5_3:function(e){return i(Mt||(Mt=n([`
      padding-left: `,`;
      padding-right: `,`;
    `])),e.btnWithIconPaddingMedium,e.btnWithIconPaddingMedium)},sizeLargeWithIconWithoutText5_3:function(e){return i(It||(It=n([`
      padding-left: `,`;
      padding-right: `,`;
    `])),e.btnWithIconPaddingLarge,e.btnWithIconPaddingLarge)},link:function(e){return i(jt||(jt=n([`
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
    `])),e.btnLinkBorderRadius,e.btnLinkColor,e.btnLinkHoverColor,e.btnLinkHoverTextDecoration,U.link(e))},linkLineHeight:function(){return i(yt||(yt=n([`
      line-height: inherit !important; // override size mixin
    `])))},linkLineHeightSafariFallback:function(){return i(xt||(xt=n([`
      /* Safari overrides 'underline' and 'border' if 'line-height' is used */
      margin: -1px 0 -2px;
    `])))},linkFocus:function(e){return i(Lt||(Lt=n([`
      & {
        color: `,`;
        text-decoration: `,`;
      }
    `])),e.btnLinkColor,e.btnLinkHoverTextDecoration)},linkDisabled:function(e){return i(zt||(zt=n([`
      cursor: default;

      &,
      &:hover:enabled,
      &:active:enabled {
        color: `,`;
      }
    `])),e.btnLinkDisabledColor)},focus:function(e){return i(St||(St=n([`
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
    `])),e.btnInsetWidth,e.btnOutlineColorFocus,e.btnFocusShadowWidth,e.btnBorderColorFocus)},disabled:function(e){return i(Nt||(Nt=n([`
      cursor: default;
      pointer-events: none;
      box-shadow: 0 0 0 `," ",`;

      background-image: none;
      background-color: `,`;
      color: `,`;
    `])),e.btnBorderWidth,e.btnDisabledBorderColor,e.btnDisabledBg,e.btnDisabledTextColor)},disabledWithoutOutline:function(e){return i(Dt||(Dt=n([`
      box-shadow: 0 0 0 `," ",`;
    `])),e.btnBorderWidth,e.btnDisabledBg)},arrowIconRoot:function(){return i(Ot||(Ot=n([`
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: content-box;
    `])))},arrowIconRootSmall:function(e){return i(Tt||(Tt=n([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),e.btnWithIconPaddingSmall,e.btnWithIconPaddingSmall,e.btnIconSizeSmall)},arrowIconRootMedium:function(e){return i(Ct||(Ct=n([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),e.btnWithIconPaddingMedium,e.btnWithIconPaddingMedium,e.btnIconSizeMedium)},arrowIconRootLarge:function(e){return i(At||(At=n([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),e.btnWithIconPaddingLarge,e.btnWithIconPaddingLarge,e.btnIconSizeLarge)},arrowIconLeft:function(){return i(Et||(Et=n([`
      left: 0;
    `])))},default:function(e){return i(_t||(_t=n([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`;
      }
    `])),G(e.btnDefaultBg,e.btnDefaultBgStart,e.btnDefaultBgEnd,e.btnDefaultTextColor,e.btnDefaultBorderColor,e.btnBorderWidth),Z(e.btnDefaultHoverBg,e.btnDefaultHoverBgStart,e.btnDefaultHoverBgEnd,e.btnDefaultHoverTextColor,e.btnDefaultHoverBorderColor,e.btnBorderWidth),U.default(e))},primary:function(e){return i(Bt||(Bt=n([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),G(e.btnPrimaryBg,e.btnPrimaryBgStart,e.btnPrimaryBgEnd,e.btnPrimaryTextColor,e.btnPrimaryBorderColor,e.btnBorderWidth),Z(e.btnPrimaryHoverBg,e.btnPrimaryHoverBgStart,e.btnPrimaryHoverBgEnd,e.btnPrimaryHoverTextColor,e.btnPrimaryHoverBorderColor,e.btnBorderWidth),U.primary(e))},success:function(e){return i(Pt||(Pt=n([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),G(e.btnSuccessBg,e.btnSuccessBgStart,e.btnSuccessBgEnd,e.btnSuccessTextColor,e.btnSuccessBorderColor,e.btnBorderWidth),Z(e.btnSuccessHoverBg,e.btnSuccessHoverBgStart,e.btnSuccessHoverBgEnd,e.btnSuccessHoverTextColor,e.btnSuccessHoverBorderColor,e.btnBorderWidth),U.success(e))},danger:function(e){return i(Wt||(Wt=n([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),G(e.btnDangerBg,e.btnDangerBgStart,e.btnDangerBgEnd,e.btnDangerTextColor,e.btnDangerBorderColor,e.btnBorderWidth),Z(e.btnDangerHoverBg,e.btnDangerHoverBgStart,e.btnDangerHoverBgEnd,e.btnDangerHoverTextColor,e.btnDangerHoverBorderColor,e.btnBorderWidth),U.danger(e))},pay:function(e){return i(Rt||(Rt=n([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),G(e.btnPayBg,e.btnPayBgStart,e.btnPayBgEnd,e.btnPayTextColor,e.btnPayBorderColor,e.btnBorderWidth),Z(e.btnPayHoverBg,e.btnPayHoverBgStart,e.btnPayHoverBgEnd,e.btnPayHoverTextColor,e.btnPayHoverBorderColor,e.btnBorderWidth),U.pay(e))},text:function(e){return i(Ut||(Ut=n([`
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
    `])),G(e.btnTextBg,"","",e.btnTextTextColor,e.btnTextBorderColor,e.btnBorderWidth),Z(e.btnTextHoverBg,"","",e.btnTextHoverTextColor,e.btnTextHoverBorderColor,e.btnBorderWidth),U.text(e))},backless:function(e){return i(Ft||(Ft=n([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),G(e.btnBacklessBg,"","",e.btnBacklessTextColor,e.btnBacklessBorderColor,e.btnBorderWidth),Z(e.btnBacklessHoverBg,"","",e.btnBacklessHoverTextColor,e.btnBacklessHoverBorderColor,e.btnBorderWidth),U.backless(e))},checked:function(e){var o=`
      background-image: none;
      box-shadow: 0 0 0 `+e.btnBorderWidth+" "+e.btnDefaultCheckedBorderColor+` !important;
      background-color: `+e.btnCheckedBg+` !important;
      color: `+e.btnCheckedTextColor+` !important;

      .`+_.innerShadow+` {
        box-shadow: `+e.btnCheckedShadow+`;
      }

      :enabled svg {
        color: `+e.btnCheckedTextColor+` !important;
      }
      :hover:enabled svg {
        color: `+e.btnCheckedTextColor+` !important;
      }
    `;return i(Ht||(Ht=n([`
      `,`

      &:hover:enabled,
      &:active:enabled,
      &:hover:active:enabled {
        `,`
      }
    `])),o,o)},checkedFocused:function(e){return i($t||($t=n([`
      &:hover:enabled,
      &:hover:active:enabled {
        box-shadow:
          inset 0 0 0 `," ",`,
          0 0 0 `," ",` !important;
        border-color: `,` !important;
      }
    `])),e.btnInsetWidth,e.btnOutlineColorFocus,e.btnFocusShadowWidth,e.btnBorderColorFocus,e.btnBorderColorFocus)},checkedDisabled:function(e){return i(Yt||(Yt=n([`
      box-shadow: 0 0 0 `," ",`;
      background-color: `,`;
      color: `,`;

      .`,` {
        box-shadow: `,`;
      }

      svg {
        color: `,` !important;
      }
    `])),e.btnBorderWidth,e.btnCheckedDisabledBorderColor,e.btnCheckedDisabledBg,e.btnCheckedDisabledColor,_.innerShadow,e.btnCheckedDisabledShadow,e.btnCheckedDisabledColor)},caption:function(){return i(Qt||(Qt=n([`
      position: relative;
      white-space: nowrap;
      display: inline-block;
      width: 100%;
      vertical-align: top;
    `])))},captionLink:function(){return i(Gt||(Gt=n([`
      display: inline;
      transform: none !important; // override root:active style
    `])))},captionDisabled:function(){return i(Zt||(Zt=n([`
      transform: none !important; // override root:active style
    `])))},wrap:function(e){return i(Vt||(Vt=n([`
      box-sizing: border-box;
      display: inline-block;
      line-height: normal;
      padding: `,`;
    `])),e.btnBorderWidth)},wrapSmall:function(e){return i(qt||(qt=n([`
      height: `,`;
    `])),e.btnHeightSmall)},wrapMedium:function(e){return i(Xt||(Xt=n([`
      height: `,`;
    `])),e.btnHeightMedium)},wrapLarge:function(e){return i(Jt||(Jt=n([`
      height: `,`;
    `])),e.btnHeightLarge)},narrow:function(){return i(Kt||(Kt=n([`
      padding-left: 5px;
      padding-right: 5px;
    `])))},noPadding:function(){return i(ea||(ea=n([`
      padding-left: 0;
      padding-right: 0;
    `])))},noRightPadding:function(){return i(ra||(ra=n([`
      padding-right: 0;
    `])))},wrapLink:function(){return i(ta||(ta=n([`
      padding: 0;
    `])))},borderless:function(){return i(aa||(aa=n([`
      &,
      &:active:hover,
      &:hover {
        box-shadow: none !important; // override root:hover style
      }
    `])))},backlessDisabled:function(e){return i(na||(na=n([`
      box-shadow: 0 0 0 1px `,`;
      background-color: transparent;
    `])),e.btnBacklessDisabledBorderColor)},textDisabled:function(){return i(ia||(ia=n([`
      background-color: transparent;
    `])))},loading:function(){return i(oa||(oa=n([`
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
    `])))},visibilityHidden:function(){return i(ca||(ca=n([`
      visibility: hidden;
    `])))}}),U=re({default:function(e){return i(la||(la=n([`
      & {
        `,`;
      }
    `])),V(e.btnDefaultActiveBg,e.btnDefaultActiveShadow,e.btnDefaultActiveBorderColor,e.btnBorderWidth))},primary:function(e){return i(sa||(sa=n([`
      & {
        `,`;
      }
    `])),V(e.btnPrimaryActiveBg,e.btnPrimaryActiveShadow,e.btnPrimaryActiveBorderColor,e.btnBorderWidth))},success:function(e){return i(da||(da=n([`
      & {
        `,`;
      }
    `])),V(e.btnSuccessActiveBg,e.btnSuccessActiveShadow,e.btnSuccessActiveBorderColor,e.btnBorderWidth))},danger:function(e){return i(pa||(pa=n([`
      & {
        `,`;
      }
    `])),V(e.btnDangerActiveBg,e.btnDangerActiveShadow,e.btnDangerActiveBorderColor,e.btnBorderWidth))},pay:function(e){return i(ua||(ua=n([`
      & {
        `,`;
      }
    `])),V(e.btnPayActiveBg,e.btnPayActiveShadow,e.btnPayActiveBorderColor,e.btnBorderWidth))},link:function(e){return i(ha||(ha=n([`
      & {
        color: `,`;
      }
    `])),e.btnLinkActiveColor)},text:function(e){return i(ka||(ka=n([`
      & {
        `,`;
      }
    `])),V(e.btnTextActiveBg,"",e.btnTextActiveBg,e.btnBorderWidth))},backless:function(e){return i(va||(va=n([`
      & {
        `,`
      }
    `])),V(e.btnBacklessActiveBg,"",e.btnBacklessActiveBorderColor,e.btnBorderWidth))}}),ga,ma,wa,ba,fa,Ma,Ia,ja,ya,xa,La,za,Sa,A=re({icon:function(){var e="'"+vn+"'";return i(ga||(ga=n([`
      display: inline-block;

      &::before {
        content: `,`;
      }
    `])),e)},iconSmall:function(e){return i(ma||(ma=n([`
      width: `,`;
    `])),e.btnIconSizeSmall)},iconSmallLeft:function(e){return i(wa||(wa=n([`
      margin-right: `,`;
    `])),e.btnIconGapSmallLeft)},iconSmallRight:function(e){return i(ba||(ba=n([`
      margin-left: `,`;
    `])),e.btnIconGapSmallRight)},iconMedium:function(e){return i(fa||(fa=n([`
      width: `,`;
    `])),e.btnIconSizeMedium)},iconMediumLeft:function(e){return i(Ma||(Ma=n([`
      margin-right: `,`;
    `])),e.btnIconGapMediumRight)},iconMediumRight:function(e){return i(Ia||(Ia=n([`
      margin-left: `,`;
    `])),e.btnIconGapMediumRight)},iconLarge:function(e){return i(ja||(ja=n([`
      width: `,`;
    `])),e.btnIconSizeLarge)},iconLargeLeft:function(e){return i(ya||(ya=n([`
      margin-right: `,`;
    `])),e.btnIconGapLargeLeft)},iconLargeRight:function(e){return i(xa||(xa=n([`
      margin-left: `,`;
    `])),e.btnIconGapLargeRight)},iconLeftLink:function(e){return i(La||(La=n([`
      margin-right: `,`;
    `])),e.btnLinkIconMarginRight)},iconRightLink:function(e){return i(za||(za=n([`
      margin-left: `,`;
    `])),e.btnLinkIconMarginLeft)},iconNoMargin:function(){return i(Sa||(Sa=n([`
      margin-right: 0;
      margin-left: 0;
    `])))}}),je=function(e){var o=p.useContext(P);return p.createElement(Wa,y({dimmed:!0,className:j(B.circle(o),B.circleDimmedColor(o),B.circleWithoutColorAnimation())},e))},$n=Ce({small:function(){return p.createElement(je,{size:"mini"})},medium:function(){return p.createElement(je,{size:{size:20,width:1,radius:6}})},large:function(){return p.createElement(je,{size:{size:24,width:1.5,radius:8}})}},"LoadingIcon"),Ua=function(e){var o=e.size,t=e.isCentered,a=t===void 0?!0:t;return p.createElement("div",{"data-tid":ze.spinner,className:a?u.loading():void 0},p.createElement($n,{size:o}))},Fa=function(e){return{small:parseInt(e.btnIconSizeSmall),medium:parseInt(e.btnIconSizeMedium),large:parseInt(e.btnIconSizeLarge)}},Yn=function(e,o){var t=w.useContext(P);if(e&&_a(e)){var a,l=Fa(t);return p.cloneElement(e,{size:(a=e.props.size)!=null?a:l[o]})}return e},Na=function(e){var o,t=e.icon,a=e.use,l=e.position,s=e.hasChildren,c=e.loading,d=c===void 0?!1:c,h=e.hasBothIcons,k=h===void 0?!1:h,v=e.size,L=v===void 0?"small":v,g=w.useContext(P),m=a==="link",b=function(){switch(L){case"large":return[A.iconLarge(g),l==="left"?A.iconLargeLeft(g):A.iconLargeRight(g)];case"medium":return[A.iconMedium(g),l==="left"?A.iconMediumLeft(g):A.iconMediumRight(g)];case"small":default:return[A.iconSmall(g),l==="left"?A.iconSmallLeft(g):A.iconSmallRight(g)]}},N={display:"inline-flex",alignItems:"center"},M=Yn(t,L);return p.createElement("span",{style:N,className:j(A.icon(),b(),(o={},o[A.iconNoMargin()]=!s,o[A.iconLeftLink(g)]=m&&l==="left",o[A.iconRightLink(g)]=m&&l==="right",o))},d&&!k?p.createElement(Ua,{isCentered:!1,size:L}):M)},Qn=te("ArrowARightIcon16Light",function(r,e){return p.createElement(ae,y({ref:e},r),p.createElement("path",{d:"M8.73 2.854a.5.5 0 1 1 .708-.708l4.006 4.006a1.906 1.906 0 0 1 0 2.696l-4.006 4.006a.5.5 0 0 1-.707-.708l4.005-4.005A.914.914 0 0 0 12.852 8H2.5a.5.5 0 0 1 0-1h10.352a.914.914 0 0 0-.116-.14L8.732 2.853Z"}))}),Gn=te("ArrowARightIcon20Light",function(r,e){return p.createElement(ae,y({ref:e,viewBoxSize:20},r),p.createElement("path",{d:"M11.365 3.291a.5.5 0 1 1 .707-.707l5.237 5.237a2.375 2.375 0 0 1 0 3.358l-5.237 5.237a.5.5 0 1 1-.707-.707l5.237-5.237c.139-.139.242-.3.309-.472H2.5a.5.5 0 1 1 0-1h14.41a1.37 1.37 0 0 0-.308-.472L11.365 3.29Z"}))}),Zn=te("ArrowARightIcon24Regular",function(r,e){return p.createElement(ae,y({ref:e,viewBoxSize:24},r),p.createElement("path",{d:"M13.444 4.744a.875.875 0 0 1 1.237-1.238l6.284 6.284a3.125 3.125 0 0 1 0 4.42l-6.284 6.284a.875.875 0 1 1-1.237-1.238l6.284-6.284c.031-.031.06-.063.088-.097H3a.875.875 0 0 1 0-1.75h16.816a1.415 1.415 0 0 0-.088-.097l-6.284-6.284Z"}))}),Vn=Ce({small:function(){return p.createElement(Qn,null)},medium:function(){return p.createElement(Gn,null)},large:function(){return p.createElement(Zn,null)}},"ArrowRightIcon"),qn=te("ArrowALeftIcon16Light",function(r,e){return p.createElement(ae,y({ref:e},r),p.createElement("path",{d:"M7.27 12.146a.5.5 0 1 1-.708.707L2.556 8.849a1.906 1.906 0 0 1 0-2.696l4.006-4.006a.5.5 0 1 1 .707.707L3.263 6.86a.91.91 0 0 0-.115.14H13.5a.5.5 0 0 1 0 1H3.148a.91.91 0 0 0 .115.142l4.006 4.005Z"}))}),Xn=te("ArrowALeftIcon20Light",function(r,e){return p.createElement(ae,y({ref:e,viewBoxSize:20},r),p.createElement("path",{d:"M8.635 15.709a.5.5 0 1 1-.707.707L2.69 11.179a2.375 2.375 0 0 1 0-3.358l5.237-5.237a.5.5 0 0 1 .707.707L3.398 8.528A1.37 1.37 0 0 0 3.09 9H17.5a.5.5 0 0 1 0 1H3.09c.066.172.17.333.308.472l5.237 5.237Z"}))}),Jn=te("ArrowALeftIcon24Regular",function(r,e){return p.createElement(ae,y({ref:e,viewBoxSize:24},r),p.createElement("path",{d:"M10.556 19.256a.875.875 0 1 1-1.237 1.238L3.035 14.21a3.125 3.125 0 0 1 0-4.42l6.284-6.284a.875.875 0 0 1 1.237 1.238l-6.284 6.284c-.031.031-.06.064-.088.097H21a.875.875 0 1 1 0 1.75H4.184c.028.034.057.066.088.097l6.284 6.284Z"}))}),Kn=Ce({small:function(){return p.createElement(qn,null)},medium:function(){return p.createElement(Xn,null)},large:function(){return p.createElement(Jn,null)}},"ArrowLeftIcon"),ei=function(e){var o=e.arrow,t=e.size,a=w.useContext(P),l=function(){var v;return j(u.arrowIconRoot(),_.arrow,(v={},v[u.arrowIconRootSmall(a)]=t==="small",v[u.arrowIconRootMedium(a)]=t==="medium",v[u.arrowIconRootLarge(a)]=t==="large",v[u.arrowIconLeft()]=o==="left",v))},s={right:Vn,left:Kn},c=o==="left"?"left":"right",d=s[c],h=p.createElement("div",{className:l()},p.createElement(d,{size:t}));return h};function ri(r,e){var o=r.arrow,t=r.size,a=r.use,l=a!=="link"&&(o===!0||o==="left"),s=l?j(o===!0&&t==="small"&&u.withArrowIconRightSmall(e),o===!0&&t==="medium"&&u.withArrowIconRightMedium(e),o===!0&&t==="large"&&u.withArrowIconRightLarge(e),o==="left"&&t==="small"&&u.withArrowIconLeftSmall(e),o==="left"&&t==="medium"&&u.withArrowIconLeftMedium(e),o==="left"&&t==="large"&&u.withArrowIconLeftLarge(e)):"",c=l?p.createElement(ei,r):null;return[s,c]}var ti=function(e){return Te.create({linkTextDecorationStyle:e.btnLinkTextDecorationStyle,linkTextUnderlineOffset:e.btnLinkTextUnderlineOffset,linkHoverTextDecorationStyle:e.btnLinkHoverTextDecorationStyle,linkTextUnderlineOpacity:e.btnLinkTextUnderlineOpacity,linkTextDecorationColor:e.btnLinkTextDecorationColor,linkTextDecorationThickness:e.btnLinkTextDecorationThickness,linkDisabledColor:e.btnLinkDisabledColor,linkColor:e.btnLinkColor,linkHoverColor:e.btnLinkHoverColor,linkActiveColor:e.btnLinkActiveColor,linkHoverTextDecoration:e.btnLinkHoverTextDecoration,linkIconMarginRight:e.btnLinkIconMarginRight},e)},ue,K,ai=["children"],ni=["corners","active","disabled","borderless","checked","error","warning","loading","narrow","arrow","icon","rightIcon","_noPadding","_noRightPadding","visuallyFocused","align","disableFocus","width","tabIndex","component","use","theme"],ii="button",ze={rootElement:"Button__rootElement",root:"Button__root",spinner:"Button__spinner"},oi=function(e){var o=e.children,t=he(e,ai);return p.createElement("span",t,o)},ci=gn(ue=Se(ue=(K=(function(r){function e(){for(var t,a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return t=r.call.apply(r,[this].concat(l))||this,t.getProps=Oe(e.defaultProps),t.state={focusedByTab:!1},t.node=null,t.renderMain=function(c){var d,h,k,v=c.corners,L=c.active,g=c.disabled,m=c.borderless,b=c.checked,N=c.error,M=c.warning,x=c.loading,C=c.narrow;c.arrow;var D=c.icon,S=c.rightIcon,F=c._noPadding,q=c._noRightPadding,X=c.visuallyFocused,ne=c.align,z=c.disableFocus,T=c.width,E=c.tabIndex;c.component,c.use,c.theme;var ge=he(c,ni),ie=t.getProps(),W=ie.use,se=ie.component,me=ie.children,Pe=t.getSizeClassName(),H=t.state.focusedByTab||X,$=W==="link",We=ri(y({},t.props,{isFocused:!!H,size:t.size}),t.theme),Va=We[0],qa=We[1],Xa=!["default","backless"].includes(W),oe=g||x,Ja=j.apply(void 0,[u.root(t.theme),u[W](t.theme),Pe,C&&u.narrow(),F&&u.noPadding(),q&&u.noRightPadding(),Va].concat(oe?[u.disabled(t.theme),Xa&&u.disabledWithoutOutline(t.theme),b&&u.checkedDisabled(t.theme),m&&u.borderless(),W==="backless"&&u.backlessDisabled(t.theme),W==="text"&&u.textDisabled(),_.disabled]:[L&&!b&&U[W](t.theme),H&&u.focus(t.theme),b&&u.checked(t.theme),b&&H&&u.checkedFocused(t.theme),m&&!b&&!H&&u.borderless()])),we=y({},ge,{className:Ja,style:y({textAlign:ne},v),onFocus:t.handleFocus,onBlur:t.handleBlur,tabIndex:t.getTabIndex({disableFocus:z,disabled:oe,tabIndex:E})}),be={className:j(_.root,(d={},d[u.wrap(t.theme)]=!0,d[t.getSizeWrapClassName()]=!0,d)),style:{width:T}},Ka=se==="button"?{disabled:oe}:{},en=null,Re=null;if((!H||$)&&!oe){var Y;Re=p.createElement("div",{className:j(u.outline(),(Y={},Y[u.outlineWarning(t.theme)]=M,Y[u.outlineError(t.theme)]=N,Y[u.outlineLink()]=$,Y[u.outlineLinkWarning(t.theme)]=$&&M,Y[u.outlineLinkError(t.theme)]=$&&N,Y))})}var Ue={use:W,size:t.size,hasChildren:!!me,loading:x||!1},rn=D&&p.createElement(Na,y({},Ue,{position:"left",icon:D})),tn=S&&p.createElement(Na,y({},Ue,{hasBothIcons:!!D&&!!S,position:"right",icon:S}));if($){var R;we.className=j((R={},R[u.root(t.theme)]=!0,R[Pe]=!0,R[u.link(t.theme)]=!0,R[u.linkLineHeight()]=!$e,R[u.linkLineHeightSafariFallback()]=$e,R[u.linkFocus(t.theme)]=H,R[u.linkDisabled(t.theme)]=oe,R)),Object.assign(be,{className:j(u.wrap(t.theme),u.wrapLink()),style:{width:be.style.width}}),we.style.textAlign=void 0}var Fe=x&&!D&&!S,an=Fe&&p.createElement(Ua,{size:t.size}),He=p.createElement("div",{className:j(u.caption(),_.caption,(h={},h[u.captionLink()]=$,h[u.captionDisabled()]=!b&&g,h))},an,rn,p.createElement("span",{className:j(_.text,(k={},k[u.visibilityHidden()]=Fe,k))},me),tn);$&&!x&&(He=p.createElement(P.Provider,{value:ti(t.theme)},p.createElement(Fn,{focused:H,disabled:g,icon:t.renderIcon2022(D),rightIcon:t.renderIcon2022(S),tabIndex:-1,component:oi},me)));var nn=se;return p.createElement("span",y({},be,{"data-tid":ze.root}),p.createElement(nn,y({"data-tid":ze.rootElement,ref:t._ref},we,Ka),en,Re,qa,He))},t.handleFocus=function(c){!t.props.disabled&&!t.props.disableFocus&&(f.globalObject.requestAnimationFrame==null||f.globalObject.requestAnimationFrame(function(){xe.isTabPressed&&t.setState({focusedByTab:!0})}),t.props.onFocus==null||t.props.onFocus(c))},t.handleBlur=function(c){t.setState({focusedByTab:!1}),!t.props.disabled&&!t.props.disableFocus&&(t.props.onBlur==null||t.props.onBlur(c))},t._ref=function(c){t.node=c},t}Ne(e,r);var o=e.prototype;return o.componentDidMount=function(){this.props.autoFocus&&(xe.isTabPressed=!0,this.focus())},e.getDerivedStateFromProps=function(a){return a.loading||a.disabled?{focusedByTab:!1}:null},o.focus=function(){var a;(a=this.node)==null||a.focus()},o.blur=function(){var a;(a=this.node)==null||a.blur()},o.render=function(){var a=this;return p.createElement(P.Consumer,null,function(l){return a.theme=a.props.theme?Te.create(a.props.theme,l):l,p.createElement(De,y({rootNodeRef:a.setRootNode},a.props),a.renderMain)})},o.getTabIndex=function(a){var l=a.disableFocus,s=a.disabled,c=a.tabIndex,d=c===void 0?0:c;return l||s?-1:d},o.renderIcon2022=function(a){if(a&&_a(a)){var l,s=Fa(this.theme);return p.cloneElement(a,{size:(l=a.props.size)!=null?l:s[this.size]})}return a},o.getSizeClassName=function(){var a=this.getProps(),l=a.icon,s=a.rightIcon,c=a.children,d=mn(this.theme,"5.3");switch(this.size){case"large":{var h,k,v=(h={},h[u.sizeLargeIE11(this.theme)]=ee||fe,h[u.sizeLargeWithIcon(this.theme)]=!!l,h[u.sizeLargeWithIconWithoutText(this.theme)]=!!l&&!c,h),L=(k={},k[u.sizeLargeWithRightIcon(this.theme)]=!!s,k[u.sizeLargeWithIconWithoutText5_3(this.theme)]=(!!l||!!s)&&!c,k);return j(u.sizeLarge(this.theme),v,d&&L)}case"medium":{var g,m,b=(g={},g[u.sizeMediumIE11(this.theme)]=ee||fe,g[u.sizeMediumWithIcon(this.theme)]=!!l,g[u.sizeMediumWithIconWithoutText(this.theme)]=!!l&&!c,g),N=(m={},m[u.sizeMediumWithRightIcon(this.theme)]=!!s,m[u.sizeMediumWithIconWithoutText5_3(this.theme)]=(!!l||!!s)&&!c,m);return j(u.sizeMedium(this.theme),b,d&&N)}case"small":default:{var M,x,C=(M={},M[u.sizeSmallIE11(this.theme)]=ee||fe,M[u.sizeSmallWithIcon(this.theme)]=!!l,M[u.sizeSmallWithIconWithoutText(this.theme)]=!!l&&!c,M),D=(x={},x[u.sizeSmallWithRightIcon(this.theme)]=!!s,x[u.sizeSmallWithIconWithoutText5_3(this.theme)]=(!!l||!!s)&&!c,x);return j(u.sizeSmall(this.theme),C,d&&D)}}},o.getSizeWrapClassName=function(){switch(this.size){case"large":return u.wrapLarge(this.theme);case"medium":return u.wrapMedium(this.theme);case"small":default:return u.wrapSmall(this.theme)}},e})(p.Component),K.__KONTUR_REACT_UI__="Button",K.displayName="Button",K.__BUTTON__=!0,K.defaultProps={use:"default",type:"button",component:ii},K))||ue)||ue;function li(r){return Array.isArray(r)&&r.length===4}const si=(r,e)=>{const o=r.createElement("span");return o.style.display="none",r.body.append(o),t=>{o.style.color="",o.style.color=t;let a=/^rgba?\(/.test(o.style.color)?o.style.color:e(o).color;if(o.remove(),!/^rgba?\(/.test(a))return t;a.startsWith("rgb(")&&(a=a.replace(/rgb\((.*)\)$/,"rgba($1, 1)"));const l=(a.match(/[\d.]+/g)||[]).map(Number);return li(l)?l:t}},di="​",Ha="-0.1875em",pi=()=>{var r;return!f.isBrowser(f.globalObject)||!((r=f.globalObject.crypto)!=null&&r.getRandomValues)?Date.now().toString(16):("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,e=>(e^f.globalObject.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))};function ui(r,e){const t=new RegExp(`${e}\\s*=\\s*["']([^"']*)["']`,"g").exec(r);return t?t[1]:null}function hi(r,e,o){const t=new RegExp(`(${e}\\s*=\\s*['"])[^'"]*(['"])`,"g");return r.replace(t,`$1${o}$2`)}const ki=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8.37512C7 7.06344 8.06332 6.00012 9.375 6.00012C10.6867 6.00012 11.75 7.06344 11.75 8.37512C11.75 9.68679 10.6867 10.7501 9.375 10.7501C8.06332 10.7501 7 9.68679 7 8.37512ZM9.375 7.50012C8.89175 7.50012 8.5 7.89187 8.5 8.37512C8.5 8.85837 8.89175 9.25012 9.375 9.25012C9.85824 9.25012 10.25 8.85837 10.25 8.37512C10.25 7.89187 9.85824 7.50012 9.375 7.50012Z" fill="#222222"/>
                      <path d="M12.6599 13.2563C13.0993 12.8169 13.8116 12.8169 14.2509 13.2563L16.0631 15.0684C16.356 15.3613 16.8309 15.3613 17.1237 15.0684C17.4166 14.7755 17.4166 14.3007 17.1237 14.0078L15.3116 12.1956C14.2865 11.1705 12.6244 11.1705 11.5993 12.1956L7.21967 16.5752C6.92677 16.8681 6.92677 17.343 7.21967 17.6359C7.51256 17.9288 7.98743 17.9288 8.28033 17.6359L12.6599 13.2563Z" fill="#222222"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 6C4.25 3.92893 5.92893 2.25 8 2.25H13.2564C13.9858 2.25 14.6853 2.53973 15.201 3.05546L18.9445 6.79902C19.4603 7.31475 19.75 8.01422 19.75 8.74357V18C19.75 20.0711 18.0711 21.75 16 21.75H8C5.92893 21.75 4.25 20.0711 4.25 18V6ZM8 3.75C6.75736 3.75 5.75 4.75736 5.75 6V18C5.75 19.2426 6.75736 20.25 8 20.25H16C17.2426 20.25 18.25 19.2426 18.25 18V8.74357C18.25 8.41205 18.1183 8.0941 17.8839 7.85968L14.1403 4.11612C13.9059 3.8817 13.588 3.75 13.2564 3.75H8Z" fill="#222222"/>
                    </svg>`,vi=typeof window<"u"?w.useLayoutEffect:w.useEffect,Ae=({url:r,align:e,color:o,size:t,viewBoxSize:a,fetcher:l=window.fetch,onLoad:s,onError:c})=>{const[d,h]=w.useState(),[k,v]=w.useState();if(vi(()=>{function g(m){v(ui(m,"viewBox"));const b=m.split(`
`).filter(Boolean).slice(1,-1).join(`
`);h(hi(b,"fill",o||"currentColor"))}l(r).then(m=>{if(m.ok)return m.text();throw Error(`Failed to fetch image: ${r}`)}).then(m=>{g(m),s==null||s()}).catch(()=>{g(ki),c==null||c()})},[l,r,o]),!d)return null;const L={display:"block",flexShrink:0,marginBottom:e==="none"||e==="center"?void 0:Ha};return O.jsx("svg",{style:L,width:t,height:t,viewBox:k??`0 0 ${a} ${a}`,xmlns:"http://www.w3.org/2000/svg",dangerouslySetInnerHTML:{__html:d}})};Ae.displayName="IconSVGEmbed";Ae.__docgenInfo={description:"",methods:[],displayName:"IconSVGEmbed",props:{url:{required:!0,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"number"},description:""},align:{required:!0,tsType:{name:"union",raw:'"center" | "baseline" | "none"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"baseline"'},{name:"literal",value:'"none"'}]},description:""},viewBoxSize:{required:!0,tsType:{name:"number"},description:""},color:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fetcher:{required:!1,tsType:{name:'unknown["fetch"]',raw:'(typeof window)["fetch"]'},description:"",defaultValue:{value:"window.fetch",computed:!0}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function gi(r){const[e,o,t,a]=r;return`
0 0 0 0 ${e/255}
0 0 0 0 ${o/255}
0 0 0 0 ${t/255}
0 0 0 ${a} 0`}const ye={16:{light:!0,regular:!0,solid:!0},20:{light:!0,regular:!0,solid:!0},24:{light:!1,regular:!0,solid:!0},32:{light:!1,regular:!0,solid:!1},64:{light:!1,regular:!0,solid:!1}};function $a(r,e){var l;const o=mi(e);if((l=ye[r])!=null&&l[o])return[r,o];function t(){var c;const s=Object.keys(ye).map(Number).sort((d,h)=>h-d);for(const d of s)if((c=ye[d])!=null&&c[o])return d;return s[s.length-1]}return[t(),o]}function mi(r){switch(r){case"light":case"regular":case"solid":return r;default:return"regular"}}const wi=(r,e,o)=>{const[t,a]=$a(e,o);return`https://s.kontur.ru/common-v2/icons-ui/black/${r}/${r}-${t}-${a}.svg`},Ya=w.createContext(wi),bi=()=>w.useContext(Ya),Qa=({children:r,value:e})=>O.jsx(Ya.Provider,{value:e.getIconUrl,children:r});Qa.__docgenInfo={description:"",methods:[],displayName:"CdnIconProvider",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  getIconUrl: CdnIconContextType;
}`,signature:{properties:[{key:"getIconUrl",value:{name:"signature",type:"function",raw:"(icon: string, size: number, type: string) => string",signature:{arguments:[{type:{name:"string"},name:"icon"},{type:{name:"number"},name:"size"},{type:{name:"string"},name:"type"}],return:{name:"string"}},required:!0}}]}},description:""}}};const fi="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4NCiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDguMzc1MTJDNyA3LjA2MzQ0IDguMDYzMzIgNi4wMDAxMiA5LjM3NSA2LjAwMDEyQzEwLjY4NjcgNi4wMDAxMiAxMS43NSA3LjA2MzQ0IDExLjc1IDguMzc1MTJDMTEuNzUgOS42ODY3OSAxMC42ODY3IDEwLjc1MDEgOS4zNzUgMTAuNzUwMUM4LjA2MzMyIDEwLjc1MDEgNyA5LjY4Njc5IDcgOC4zNzUxMlpNOS4zNzUgNy41MDAxMkM4Ljg5MTc1IDcuNTAwMTIgOC41IDcuODkxODcgOC41IDguMzc1MTJDOC41IDguODU4MzcgOC44OTE3NSA5LjI1MDEyIDkuMzc1IDkuMjUwMTJDOS44NTgyNCA5LjI1MDEyIDEwLjI1IDguODU4MzcgMTAuMjUgOC4zNzUxMkMxMC4yNSA3Ljg5MTg3IDkuODU4MjQgNy41MDAxMiA5LjM3NSA3LjUwMDEyWiIgZmlsbD0iIzIyMjIyMiIvPg0KICA8cGF0aCBkPSJNMTIuNjU5OSAxMy4yNTYzQzEzLjA5OTMgMTIuODE2OSAxMy44MTE2IDEyLjgxNjkgMTQuMjUwOSAxMy4yNTYzTDE2LjA2MzEgMTUuMDY4NEMxNi4zNTYgMTUuMzYxMyAxNi44MzA5IDE1LjM2MTMgMTcuMTIzNyAxNS4wNjg0QzE3LjQxNjYgMTQuNzc1NSAxNy40MTY2IDE0LjMwMDcgMTcuMTIzNyAxNC4wMDc4TDE1LjMxMTYgMTIuMTk1NkMxNC4yODY1IDExLjE3MDUgMTIuNjI0NCAxMS4xNzA1IDExLjU5OTMgMTIuMTk1Nkw3LjIxOTY3IDE2LjU3NTJDNi45MjY3NyAxNi44NjgxIDYuOTI2NzcgMTcuMzQzIDcuMjE5NjcgMTcuNjM1OUM3LjUxMjU2IDE3LjkyODggNy45ODc0MyAxNy45Mjg4IDguMjgwMzMgMTcuNjM1OUwxMi42NTk5IDEzLjI1NjNaIiBmaWxsPSIjMjIyMjIyIi8+DQogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4yNSA2QzQuMjUgMy45Mjg5MyA1LjkyODkzIDIuMjUgOCAyLjI1SDEzLjI1NjRDMTMuOTg1OCAyLjI1IDE0LjY4NTMgMi41Mzk3MyAxNS4yMDEgMy4wNTU0NkwxOC45NDQ1IDYuNzk5MDJDMTkuNDYwMyA3LjMxNDc1IDE5Ljc1IDguMDE0MjIgMTkuNzUgOC43NDM1N1YxOEMxOS43NSAyMC4wNzExIDE4LjA3MTEgMjEuNzUgMTYgMjEuNzVIOEM1LjkyODkzIDIxLjc1IDQuMjUgMjAuMDcxMSA0LjI1IDE4VjZaTTggMy43NUM2Ljc1NzM2IDMuNzUgNS43NSA0Ljc1NzM2IDUuNzUgNlYxOEM1Ljc1IDE5LjI0MjYgNi43NTczNiAyMC4yNSA4IDIwLjI1SDE2QzE3LjI0MjYgMjAuMjUgMTguMjUgMTkuMjQyNiAxOC4yNSAxOFY4Ljc0MzU3QzE4LjI1IDguNDEyMDUgMTguMTE4MyA4LjA5NDEgMTcuODgzOSA3Ljg1OTY4TDE0LjE0MDMgNC4xMTYxMkMxMy45MDU5IDMuODgxNyAxMy41ODggMy43NSAxMy4yNTY0IDMuNzVIOFoiIGZpbGw9IiMyMjIyMjIiLz4NCjwvc3ZnPg==",Mi=16,Ii="regular",ji={root:"CdnIcon__root"},Da="#000",Oa=typeof window<"u"?w.useLayoutEffect:w.useEffect,Ee=w.forwardRef(({style:r,icon:e,url:o,size:t=Mi,weight:a=Ii,color:l,align:s="center",embed:c,lazy:d,alt:h="",onLoad:k,onError:v,...L},g)=>{const m=w.useRef(null),b=w.useRef(null),[N,M]=w.useState(l??Da),[x,C]=w.useState(null),D=bi();Oa(()=>{const z=m.current;if(!z||!z.attachShadow)return;const T=z.ownerDocument.createElement("span");z.append(T);try{const E=T.attachShadow({mode:"closed"});E.textContent=di}catch(E){console.error(E)}return()=>T.remove()},[]),w.useLayoutEffect(()=>{if(!f.isBrowser(f.globalObject)||!b.current)return;const z=si(f.globalObject.document,f.globalObject.getComputedStyle);if(l)M(z(l));else if(b.current&&f.isBrowser(f.globalObject)){const T=()=>b.current&&f.isBrowser(f.globalObject)?f.globalObject.getComputedStyle(b.current).color:Da,E=T();E?M(z(E)):setTimeout(()=>M(z(T())))}},[l]),Oa(()=>{x&&C(null)},[o,e]),o&&e&&console.warn("need set only one of prop: icon or url");let S;o?S=o:e?S=D(e,t,a):(S="",console.warn("need set one of prop: icon or url"));const F={display:s==="center"?"inline-flex":"inline-block",alignItems:s,...r},q=z=>{C(fi),v==null||v(z)},X=z=>{k==null||k(z)};return O.jsxs("span",{"data-tid":ji.root,ref:g,style:F,...L,children:[s==="center"&&O.jsx("span",{ref:m}),c?O.jsx(Ae,{url:S,color:l,size:t,align:s,viewBoxSize:$a(t,a)[0],onLoad:()=>k==null?void 0:k(),onError:()=>v==null?void 0:v()}):ne(x??S)]});function ne(z){const T=pi(),E={display:"block",width:t,height:t,flexShrink:0,marginBottom:s!=="none"&&s!=="center"?Ha:void 0,objectFit:"cover",filter:`url(#${T})`,userSelect:"none",pointerEvents:"none"};return O.jsxs(O.Fragment,{children:[O.jsx("img",{width:t,height:t,style:E,src:z,loading:d?"lazy":void 0,onLoad:X,onError:q,alt:h}),O.jsx("span",{ref:b,"aria-hidden":"true",style:{position:"fixed",width:0,height:0},children:typeof N!="string"&&O.jsx("svg",{width:0,height:0,children:O.jsx("defs",{children:O.jsx("filter",{id:T,children:O.jsx("feColorMatrix",{type:"matrix",in:"SourceGraphic",colorInterpolationFilters:"sRGB",values:`${gi(N)}`})})})})})]})}});Ee.displayName="CdnIcon";Ee.__docgenInfo={description:"",methods:[],displayName:"CdnIcon",props:{size:{defaultValue:{value:"16",computed:!1},required:!1},weight:{defaultValue:{value:'"regular"',computed:!1},required:!1},align:{defaultValue:{value:'"center"',computed:!1},required:!1},alt:{defaultValue:{value:'""',computed:!1},required:!1}}};const ve={accounting:{p:"accounting/accounting-28",w:212,h:28},"accounting-dark":{p:"accounting/accounting-28-dark",w:212,h:28},"accounting-vertical":{p:"accounting/accounting-28-vertical",w:128,h:51},"accounting-vertical-dark":{p:"accounting/accounting-28-vertical-dark",w:128,h:51},adaptation:{p:"adaptation/adaptation-28",w:203,h:28},"adaptation-dark":{p:"adaptation/adaptation-28-dark",w:203,h:28},"adaptation-vertical":{p:"adaptation/adaptation-28-vertical",w:119,h:51},"adaptation-vertical-dark":{p:"adaptation/adaptation-28-vertical-dark",w:119,h:51},admin:{p:"admin/admin-28",w:158,h:28},"admin-dark":{p:"admin/admin-28-dark",w:158,h:28},"admin-vertical":{p:"admin/admin-28-vertical",w:85,h:51},"admin-vertical-dark":{p:"admin/admin-28-vertical-dark",w:85,h:51},aegis:{p:"aegis/aegis-28",w:152,h:28},"aegis-dark":{p:"aegis/aegis-28-dark",w:152,h:28},"aegis-en":{p:"aegis/aegis-en-28",w:137,h:28},"aegis-en-dark":{p:"aegis/aegis-en-28-dark",w:137,h:28},"aegis-en-vertical":{p:"aegis/aegis-en-28-vertical",w:77,h:53},"aegis-en-vertical-dark":{p:"aegis/aegis-en-28-vertical-dark",w:77,h:53},"aegis-vertical":{p:"aegis/aegis-28-vertical",w:85,h:51},"aegis-vertical-dark":{p:"aegis/aegis-28-vertical-dark",w:85,h:51},"aegis-x-staffcop":{p:"aegis-x-staffcop/aegis-x-staffcop-28",w:299,h:28},"aegis-x-staffcop-dark":{p:"aegis-x-staffcop/aegis-x-staffcop-28-dark",w:299,h:28},ai:{p:"ai/ai-28",w:120,h:28},"ai-dark":{p:"ai/ai-28-dark",w:120,h:28},"ai-en":{p:"ai/ai-en-28",w:99,h:28},"ai-en-dark":{p:"ai/ai-en-28-dark",w:99,h:28},"ai-en-vertical":{p:"ai/ai-en-28-vertical",w:77,h:51},"ai-en-vertical-dark":{p:"ai/ai-en-28-vertical-dark",w:77,h:51},"ai-vertical":{p:"ai/ai-28-vertical",w:85,h:51},"ai-vertical-dark":{p:"ai/ai-28-vertical-dark",w:85,h:51},api:{p:"api/api-28",w:122,h:28},"api-dark":{p:"api/api-28-dark",w:122,h:28},"api-vertical":{p:"api/api-28-vertical",w:85,h:51},"api-vertical-dark":{p:"api/api-28-vertical-dark",w:85,h:51},archidoc:{p:"archidoc/archidoc-28",w:180,h:28},"archidoc-dark":{p:"archidoc/archidoc-28-dark",w:180,h:28},"archidoc-en":{p:"archidoc/archidoc-en-28",w:174,h:28},"archidoc-en-dark":{p:"archidoc/archidoc-en-28-dark",w:174,h:28},"archidoc-en-vertical":{p:"archidoc/archidoc-en-28-vertical",w:98,h:51},"archidoc-en-vertical-dark":{p:"archidoc/archidoc-en-28-vertical-dark",w:98,h:51},"archidoc-vertical":{p:"archidoc/archidoc-28-vertical",w:96,h:53},"archidoc-vertical-dark":{p:"archidoc/archidoc-28-vertical-dark",w:96,h:53},atlant:{p:"atlant/atlant-28",w:161,h:28},"atlant-dark":{p:"atlant/atlant-28-dark",w:161,h:28},"atlant-en":{p:"atlant/atlant-en-28",w:140,h:28},"atlant-en-dark":{p:"atlant/atlant-en-28-dark",w:140,h:28},"atlant-en-vertical":{p:"atlant/atlant-en-28-vertical",w:77,h:51},"atlant-en-vertical-dark":{p:"atlant/atlant-en-28-vertical-dark",w:77,h:51},"atlant-vertical":{p:"atlant/atlant-28-vertical",w:85,h:51},"atlant-vertical-dark":{p:"atlant/atlant-28-vertical-dark",w:85,h:51},ats:{p:"ats/ats-28",w:131,h:28},"ats-dark":{p:"ats/ats-28-dark",w:131,h:28},"ats-vertical":{p:"ats/ats-28-vertical",w:85,h:51},"ats-vertical-dark":{p:"ats/ats-28-vertical-dark",w:85,h:51},auditor:{p:"auditor/auditor-28",w:179,h:28},"auditor-dark":{p:"auditor/auditor-28-dark",w:179,h:28},"auditor-vertical":{p:"auditor/auditor-28-vertical",w:95,h:53},"auditor-vertical-dark":{p:"auditor/auditor-28-vertical-dark",w:95,h:53},autotransport:{p:"autotransport/autotransport-28",w:253,h:28},"autotransport-dark":{p:"autotransport/autotransport-28-dark",w:253,h:28},"autotransport-vertical":{p:"autotransport/autotransport-28-vertical",w:169,h:53},"autotransport-vertical-dark":{p:"autotransport/autotransport-28-vertical-dark",w:169,h:53},bank:{p:"bank/bank-28",w:139,h:28},"bank-dark":{p:"bank/bank-28-dark",w:139,h:28},"bank-vertical":{p:"bank/bank-28-vertical",w:85,h:51},"bank-vertical-dark":{p:"bank/bank-28-vertical-dark",w:85,h:51},billing:{p:"billing/billing-28",w:177,h:28},"billing-ab":{p:"billing-ab/billing-ab-28",w:211,h:28},"billing-ab-dark":{p:"billing-ab/billing-ab-28-dark",w:211,h:28},"billing-ab-vertical":{p:"billing-ab/billing-ab-28-vertical",w:127,h:51},"billing-ab-vertical-dark":{p:"billing-ab/billing-ab-28-vertical-dark",w:127,h:51},"billing-dark":{p:"billing/billing-28-dark",w:177,h:28},"billing-vertical":{p:"billing/billing-28-vertical",w:93,h:51},"billing-vertical-dark":{p:"billing/billing-28-vertical-dark",w:93,h:51},bokrug:{p:"bokrug/bokrug-28",w:163,h:28},"bokrug-dark":{p:"bokrug/bokrug-28-dark",w:163,h:28},"bokrug-en":{p:"bokrug/bokrug-en-28",w:155,h:28},"bokrug-en-dark":{p:"bokrug/bokrug-en-28-dark",w:155,h:28},"bokrug-en-vertical":{p:"bokrug/bokrug-en-28-vertical",w:79,h:53},"bokrug-en-vertical-dark":{p:"bokrug/bokrug-en-28-vertical-dark",w:79,h:53},"bokrug-vertical":{p:"bokrug/bokrug-28-vertical",w:85,h:53},"bokrug-vertical-dark":{p:"bokrug/bokrug-28-vertical-dark",w:85,h:53},bonus:{p:"bonus/bonus-28",w:151,h:28},"bonus-dark":{p:"bonus/bonus-28-dark",w:151,h:28},"bonus-vertical":{p:"bonus/bonus-28-vertical",w:85,h:53},"bonus-vertical-dark":{p:"bonus/bonus-28-vertical-dark",w:85,h:53},bootcamp:{p:"bootcamp/bootcamp-28",w:177,h:28},"bootcamp-dark":{p:"bootcamp/bootcamp-28-dark",w:177,h:28},"bootcamp-vertical":{p:"bootcamp/bootcamp-28-vertical",w:93,h:53},"bootcamp-vertical-dark":{p:"bootcamp/bootcamp-28-vertical-dark",w:93,h:53},brandbook:{p:"brandbook/brandbook-28",w:193,h:28},"brandbook-dark":{p:"brandbook/brandbook-28-dark",w:193,h:28},"brandbook-vertical":{p:"brandbook/brandbook-28-vertical",w:109,h:53},"brandbook-vertical-dark":{p:"brandbook/brandbook-28-vertical-dark",w:109,h:53},"buhgalteria-activ":{p:"buhgalteria-activ/buhgalteria-activ-28",w:291,h:28},"buhgalteria-activ-dark":{p:"buhgalteria-activ/buhgalteria-activ-28-dark",w:291,h:28},"buhgalteria-activ-vertical":{p:"buhgalteria-activ/buhgalteria-activ-28-vertical",w:138,h:73},"buhgalteria-activ-vertical-dark":{p:"buhgalteria-activ/buhgalteria-activ-28-vertical-dark",w:138,h:73},"buhgalteria-budjet":{p:"buhgalteria-budjet/buhgalteria-budjet-28",w:314,h:28},"buhgalteria-budjet-dark":{p:"buhgalteria-budjet/buhgalteria-budjet-28-dark",w:314,h:28},"buhgalteria-budjet-vertical":{p:"buhgalteria-budjet/buhgalteria-budjet-28-vertical",w:138,h:73},"buhgalteria-budjet-vertical-dark":{p:"buhgalteria-budjet/buhgalteria-budjet-28-vertical-dark",w:138,h:73},ca:{p:"ca/ca-28",w:347,h:28},"ca-dark":{p:"ca/ca-28-dark",w:347,h:28},"ca-vertical":{p:"ca/ca-28-vertical",w:194,h:75},"ca-vertical-dark":{p:"ca/ca-28-vertical-dark",w:194,h:75},cafe:{p:"cafe/cafe-28",w:143,h:28},"cafe-dark":{p:"cafe/cafe-28-dark",w:143,h:28},"cafe-vertical":{p:"cafe/cafe-28-vertical",w:85,h:53},"cafe-vertical-dark":{p:"cafe/cafe-28-vertical-dark",w:85,h:53},callider:{p:"callider/callider-28",w:165,h:28},"callider-dark":{p:"callider/callider-28-dark",w:165,h:28},"callider-vertical":{p:"callider/callider-28-vertical",w:85,h:51},"callider-vertical-dark":{p:"callider/callider-28-vertical-dark",w:85,h:51},career:{p:"career/career-28",w:180,h:28},"career-dark":{p:"career/career-28-dark",w:180,h:28},"career-vertical":{p:"career/career-28-vertical",w:96,h:53},"career-vertical-dark":{p:"career/career-28-vertical-dark",w:96,h:53},"cargo-news-en":{p:"cargo-news/cargo-news-en-28",w:201,h:28},"cargo-news-en-dark":{p:"cargo-news/cargo-news-en-28-dark",w:201,h:28},"cargo-news-en-vertical":{p:"cargo-news/cargo-news-en-28-vertical",w:125,h:53},"cargo-news-en-vertical-dark":{p:"cargo-news/cargo-news-en-28-vertical-dark",w:125,h:53},cerberus:{p:"cerberus/cerberus-28",w:172,h:28},"cerberus-dark":{p:"cerberus/cerberus-28-dark",w:172,h:28},"cerberus-vertical":{p:"cerberus/cerberus-28-vertical",w:88,h:53},"cerberus-vertical-dark":{p:"cerberus/cerberus-28-vertical-dark",w:88,h:53},"client-cabinet":{p:"client-cabinet/client-cabinet-28",w:270,h:28},"client-cabinet-dark":{p:"client-cabinet/client-cabinet-28-dark",w:270,h:28},"client-cabinet-vertical":{p:"client-cabinet/client-cabinet-28-vertical",w:186,h:51},"client-cabinet-vertical-dark":{p:"client-cabinet/client-cabinet-28-vertical-dark",w:186,h:51},connect:{p:"connect/connect-28",w:176,h:28},"connect-dark":{p:"connect/connect-28-dark",w:176,h:28},"connect-en":{p:"connect/connect-en-28",w:168,h:28},"connect-en-dark":{p:"connect/connect-en-28-dark",w:168,h:28},"connect-en-vertical":{p:"connect/connect-en-28-vertical",w:92,h:51},"connect-en-vertical-dark":{p:"connect/connect-en-28-vertical-dark",w:92,h:51},"connect-vertical":{p:"connect/connect-28-vertical",w:92,h:51},"connect-vertical-dark":{p:"connect/connect-28-vertical-dark",w:92,h:51},"corp-monitor":{p:"corp-monitor/corp-monitor-28",w:398,h:28},"corp-monitor-dark":{p:"corp-monitor/corp-monitor-28-dark",w:398,h:28},"corp-monitor-vertical":{p:"corp-monitor/corp-monitor-28-vertical",w:178,h:75},"corp-monitor-vertical-dark":{p:"corp-monitor/corp-monitor-28-vertical-dark",w:178,h:75},"crm-en":{p:"crm/crm-en-28",w:130,h:28},"crm-en-dark":{p:"crm/crm-en-28-dark",w:130,h:28},"crm-en-vertical":{p:"crm/crm-en-28-vertical",w:77,h:51},"crm-en-vertical-dark":{p:"crm/crm-en-28-vertical-dark",w:77,h:51},crypto:{p:"crypto/crypto-28",w:166,h:28},"crypto-dark":{p:"crypto/crypto-28-dark",w:166,h:28},"crypto-vertical":{p:"crypto/crypto-28-vertical",w:85,h:53},"crypto-vertical-dark":{p:"crypto/crypto-28-vertical-dark",w:85,h:53},cthulhu:{p:"cthulhu/cthulhu-28",w:168,h:28},"cthulhu-dark":{p:"cthulhu/cthulhu-28-dark",w:168,h:28},"cthulhu-en":{p:"cthulhu/cthulhu-en-28",w:160,h:28},"cthulhu-en-dark":{p:"cthulhu/cthulhu-en-28-dark",w:160,h:28},"cthulhu-en-vertical":{p:"cthulhu/cthulhu-en-28-vertical",w:84,h:51},"cthulhu-en-vertical-dark":{p:"cthulhu/cthulhu-en-28-vertical-dark",w:84,h:51},"cthulhu-vertical":{p:"cthulhu/cthulhu-28-vertical",w:85,h:51},"cthulhu-vertical-dark":{p:"cthulhu/cthulhu-28-vertical-dark",w:85,h:51},"data-core":{p:"data-core/data-core-28",w:179,h:28},"data-core-dark":{p:"data-core/data-core-28-dark",w:179,h:28},"data-core-en":{p:"data-core/data-core-en-28",w:180,h:28},"data-core-en-dark":{p:"data-core/data-core-en-28-dark",w:180,h:28},"data-core-en-vertical":{p:"data-core/data-core-en-28-vertical",w:104,h:51},"data-core-en-vertical-dark":{p:"data-core/data-core-en-28-vertical-dark",w:104,h:51},"data-core-vertical":{p:"data-core/data-core-28-vertical",w:95,h:53},"data-core-vertical-dark":{p:"data-core/data-core-28-vertical-dark",w:95,h:53},declarant:{p:"declarant/declarant-28",w:206,h:28},"declarant-dark":{p:"declarant/declarant-28-dark",w:206,h:28},"declarant-vertical":{p:"declarant/declarant-28-vertical",w:122,h:53},"declarant-vertical-dark":{p:"declarant/declarant-28-vertical-dark",w:122,h:53},diadoc:{p:"diadoc/diadoc-28",w:169,h:28},"diadoc-dark":{p:"diadoc/diadoc-28-dark",w:169,h:28},"diadoc-en":{p:"diadoc/diadoc-en-28",w:153,h:28},"diadoc-en-dark":{p:"diadoc/diadoc-en-28-dark",w:153,h:28},"diadoc-en-vertical":{p:"diadoc/diadoc-en-28-vertical",w:77,h:51},"diadoc-en-vertical-dark":{p:"diadoc/diadoc-en-28-vertical-dark",w:77,h:51},"diadoc-vertical":{p:"diadoc/diadoc-28-vertical",w:85,h:52},"diadoc-vertical-dark":{p:"diadoc/diadoc-28-vertical-dark",w:85,h:52},diagnostics:{p:"diagnostics/diagnostics-28",w:228,h:28},"diagnostics-dark":{p:"diagnostics/diagnostics-28-dark",w:228,h:28},"diagnostics-vertical":{p:"diagnostics/diagnostics-28-vertical",w:144,h:52},"diagnostics-vertical-dark":{p:"diagnostics/diagnostics-28-vertical-dark",w:144,h:52},"dialog-core":{p:"dialog-core/dialog-core-28",w:206,h:28},"dialog-core-dark":{p:"dialog-core/dialog-core-28-dark",w:206,h:28},"dialog-core-en":{p:"dialog-core/dialog-core-en-28",w:197,h:28},"dialog-core-en-dark":{p:"dialog-core/dialog-core-en-28-dark",w:197,h:28},"dialog-core-en-vertical":{p:"dialog-core/dialog-core-en-28-vertical",w:121,h:53},"dialog-core-en-vertical-dark":{p:"dialog-core/dialog-core-en-28-vertical-dark",w:121,h:53},"dialog-core-vertical":{p:"dialog-core/dialog-core-28-vertical",w:122,h:53},"dialog-core-vertical-dark":{p:"dialog-core/dialog-core-28-vertical-dark",w:122,h:53},discount:{p:"discount/discount-28",w:179,h:28},"discount-dark":{p:"discount/discount-28-dark",w:179,h:28},"discount-vertical":{p:"discount/discount-28-vertical",w:95,h:52},"discount-vertical-dark":{p:"discount/discount-28-vertical-dark",w:95,h:52},disk:{p:"disk/disk-28",w:142,h:28},"disk-dark":{p:"disk/disk-28-dark",w:142,h:28},"disk-vertical":{p:"disk/disk-28-vertical",w:85,h:52},"disk-vertical-dark":{p:"disk/disk-28-vertical-dark",w:85,h:52},docrobot:{p:"docrobot/docrobot-28",w:106,h:28},"docrobot-dark":{p:"docrobot/docrobot-28-dark",w:106,h:28},"docrobot-en":{p:"docrobot/docrobot-en-28",w:106,h:28},"docrobot-en-dark":{p:"docrobot/docrobot-en-28-dark",w:106,h:28},docs:{p:"docs/docs-28",w:211,h:28},"docs-dark":{p:"docs/docs-28-dark",w:211,h:28},"docs-vertical":{p:"docs/docs-28-vertical",w:127,h:53},"docs-vertical-dark":{p:"docs/docs-28-vertical-dark",w:127,h:53},docsi:{p:"docsi/docsi-28",w:155,h:28},"docsi-dark":{p:"docsi/docsi-28-dark",w:155,h:28},"docsi-vertical":{p:"docsi/docsi-28-vertical",w:85,h:52},"docsi-vertical-dark":{p:"docsi/docsi-28-vertical-dark",w:85,h:52},documentation:{p:"documentation/documentation-28",w:246,h:28},"documentation-dark":{p:"documentation/documentation-28-dark",w:246,h:28},"documentation-en":{p:"documentation/documentation-en-28",w:242,h:28},"documentation-en-dark":{p:"documentation/documentation-en-28-dark",w:242,h:28},"documentation-en-vertical":{p:"documentation/documentation-en-28-vertical",w:166,h:51},"documentation-en-vertical-dark":{p:"documentation/documentation-en-28-vertical-dark",w:166,h:51},"documentation-vertical":{p:"documentation/documentation-28-vertical",w:162,h:53},"documentation-vertical-dark":{p:"documentation/documentation-28-vertical-dark",w:162,h:53},dostup:{p:"dostup/dostup-28",w:165,h:28},"dostup-dark":{p:"dostup/dostup-28-dark",w:165,h:28},"dostup-vertical":{p:"dostup/dostup-28-vertical",w:85,h:53},"dostup-vertical-dark":{p:"dostup/dostup-28-vertical-dark",w:85,h:53},ebisu:{p:"ebisu/ebisu-28",w:153,h:28},"ebisu-dark":{p:"ebisu/ebisu-28-dark",w:153,h:28},"ebisu-en":{p:"ebisu/ebisu-en-28",w:136,h:28},"ebisu-en-dark":{p:"ebisu/ebisu-en-28-dark",w:136,h:28},"ebisu-en-vertical":{p:"ebisu/ebisu-en-28-vertical",w:77,h:51},"ebisu-en-vertical-dark":{p:"ebisu/ebisu-en-28-vertical-dark",w:77,h:51},"ebisu-vertical":{p:"ebisu/ebisu-28-vertical",w:85,h:53},"ebisu-vertical-dark":{p:"ebisu/ebisu-28-vertical-dark",w:85,h:53},edi:{p:"edi/edi-28",w:123,h:28},"edi-dark":{p:"edi/edi-28-dark",w:123,h:28},"edi-vertical":{p:"edi/edi-28-vertical",w:85,h:51},"edi-vertical-dark":{p:"edi/edi-28-vertical-dark",w:85,h:51},"edu-portal":{p:"edu-portal/edu-portal-28",w:262,h:28},"edu-portal-dark":{p:"edu-portal/edu-portal-28-dark",w:262,h:28},"edu-portal-vertical":{p:"edu-portal/edu-portal-28-vertical",w:178,h:53},"edu-portal-vertical-dark":{p:"edu-portal/edu-portal-28-vertical-dark",w:178,h:53},egais:{p:"egais/egais-28",w:162,h:28},"egais-dark":{p:"egais/egais-28-dark",w:162,h:28},"egais-vertical":{p:"egais/egais-28-vertical",w:85,h:51},"egais-vertical-dark":{p:"egais/egais-28-vertical-dark",w:85,h:51},elba:{p:"elba/elba-28",w:153,h:28},"elba-dark":{p:"elba/elba-28-dark",w:153,h:28},"elba-vertical":{p:"elba/elba-28-vertical",w:85,h:51},"elba-vertical-dark":{p:"elba/elba-28-vertical-dark",w:85,h:51},"employes-cabinet":{p:"employes-cabinet/employes-cabinet-28",w:310,h:28},"employes-cabinet-dark":{p:"employes-cabinet/employes-cabinet-28-dark",w:310,h:28},"employes-cabinet-vertical":{p:"employes-cabinet/employes-cabinet-28-vertical",w:226,h:53},"employes-cabinet-vertical-dark":{p:"employes-cabinet/employes-cabinet-28-vertical-dark",w:226,h:53},enigma:{p:"enigma/enigma-28",w:167,h:28},"enigma-dark":{p:"enigma/enigma-28-dark",w:167,h:28},"enigma-vertical":{p:"enigma/enigma-28-vertical",w:85,h:51},"enigma-vertical-dark":{p:"enigma/enigma-28-vertical-dark",w:85,h:51},epsilon:{p:"epsilon/epsilon-28",w:181,h:28},"epsilon-dark":{p:"epsilon/epsilon-28-dark",w:181,h:28},"epsilon-vertical":{p:"epsilon/epsilon-28-vertical",w:97,h:51},"epsilon-vertical-dark":{p:"epsilon/epsilon-28-vertical-dark",w:97,h:51},erp:{p:"erp/erp-28",w:130,h:28},"erp-crypto":{p:"erp-crypto/erp-crypto-28",w:215,h:28},"erp-crypto-dark":{p:"erp-crypto/erp-crypto-28-dark",w:215,h:28},"erp-crypto-vertical":{p:"erp-crypto/erp-crypto-28-vertical",w:131,h:53},"erp-crypto-vertical-dark":{p:"erp-crypto/erp-crypto-28-vertical-dark",w:131,h:53},"erp-dark":{p:"erp/erp-28-dark",w:130,h:28},"erp-diadoc":{p:"erp-diadoc/erp-diadoc-28",w:218,h:28},"erp-diadoc-dark":{p:"erp-diadoc/erp-diadoc-28-dark",w:218,h:28},"erp-diadoc-vertical":{p:"erp-diadoc/erp-diadoc-28-vertical",w:134,h:52},"erp-diadoc-vertical-dark":{p:"erp-diadoc/erp-diadoc-28-vertical-dark",w:134,h:52},"erp-extern-fns":{p:"erp-extern-fns/erp-extern-fns-28",w:283,h:28},"erp-extern-fns-dark":{p:"erp-extern-fns/erp-extern-fns-28-dark",w:283,h:28},"erp-extern-fns-vertical":{p:"erp-extern-fns/erp-extern-fns-28-vertical",w:199,h:53},"erp-extern-fns-vertical-dark":{p:"erp-extern-fns/erp-extern-fns-28-vertical-dark",w:199,h:53},"erp-extern-fss":{p:"erp-extern-fss/erp-extern-fss-28",w:282,h:28},"erp-extern-fss-dark":{p:"erp-extern-fss/erp-extern-fss-28-dark",w:282,h:28},"erp-extern-fss-vertical":{p:"erp-extern-fss/erp-extern-fss-28-vertical",w:198,h:53},"erp-extern-fss-vertical-dark":{p:"erp-extern-fss/erp-extern-fss-28-vertical-dark",w:198,h:53},"erp-focus":{p:"erp-focus/erp-focus-28",w:205,h:28},"erp-focus-dark":{p:"erp-focus/erp-focus-28-dark",w:205,h:28},"erp-focus-vertical":{p:"erp-focus/erp-focus-28-vertical",w:121,h:53},"erp-focus-vertical-dark":{p:"erp-focus/erp-focus-28-vertical-dark",w:121,h:53},"erp-vertical":{p:"erp/erp-28-vertical",w:85,h:51},"erp-vertical-dark":{p:"erp/erp-28-vertical-dark",w:85,h:51},estafeta:{p:"estafeta/estafeta-28",w:190,h:28},"estafeta-dark":{p:"estafeta/estafeta-28-dark",w:190,h:28},"estafeta-vertical":{p:"estafeta/estafeta-28-vertical",w:106,h:53},"estafeta-vertical-dark":{p:"estafeta/estafeta-28-vertical-dark",w:106,h:53},experiments:{p:"experiments/experiments-28",w:250,h:28},"experiments-dark":{p:"experiments/experiments-28-dark",w:250,h:28},"experiments-en":{p:"experiments/experiments-en-28",w:209,h:28},"experiments-en-dark":{p:"experiments/experiments-en-28-dark",w:209,h:28},"experiments-en-vertical":{p:"experiments/experiments-en-28-vertical",w:133,h:53},"experiments-en-vertical-dark":{p:"experiments/experiments-en-28-vertical-dark",w:133,h:53},"experiments-vertical":{p:"experiments/experiments-28-vertical",w:166,h:53},"experiments-vertical-dark":{p:"experiments/experiments-28-vertical-dark",w:166,h:53},expert:{p:"expert/expert-28",w:177,h:28},"expert-dark":{p:"expert/expert-28-dark",w:177,h:28},"expert-vertical":{p:"expert/expert-28-vertical",w:93,h:53},"expert-vertical-dark":{p:"expert/expert-28-vertical-dark",w:93,h:53},extern:{p:"extern/extern-28",w:177,h:28},"extern-dark":{p:"extern/extern-28-dark",w:177,h:28},"extern-vertical":{p:"extern/extern-28-vertical",w:93,h:53},"extern-vertical-dark":{p:"extern/extern-28-vertical-dark",w:93,h:53},factoring:{p:"factoring/factoring-28",w:207,h:28},"factoring-dark":{p:"factoring/factoring-28-dark",w:207,h:28},"factoring-vertical":{p:"factoring/factoring-28-vertical",w:123,h:53},"factoring-vertical-dark":{p:"factoring/factoring-28-vertical-dark",w:123,h:53},femida:{p:"femida/femida-28",w:176,h:28},"femida-dark":{p:"femida/femida-28-dark",w:176,h:28},"femida-vertical":{p:"femida/femida-28-vertical",w:92,h:51},"femida-vertical-dark":{p:"femida/femida-28-vertical-dark",w:92,h:51},finance:{p:"finance/finance-28",w:187,h:28},"finance-dark":{p:"finance/finance-28-dark",w:187,h:28},"finance-vertical":{p:"finance/finance-28-vertical",w:103,h:51},"finance-vertical-dark":{p:"finance/finance-28-vertical-dark",w:103,h:51},fms:{p:"fms/fms-28",w:143,h:28},"fms-dark":{p:"fms/fms-28-dark",w:143,h:28},"fms-vertical":{p:"fms/fms-28-vertical",w:85,h:51},"fms-vertical-dark":{p:"fms/fms-28-vertical-dark",w:85,h:51},focus:{p:"focus/focus-28",w:156,h:28},"focus-dark":{p:"focus/focus-28-dark",w:156,h:28},"focus-en":{p:"focus/focus-en-28",w:143,h:28},"focus-en-dark":{p:"focus/focus-en-28-dark",w:143,h:28},"focus-en-vertical":{p:"focus/focus-en-28-vertical",w:77,h:51},"focus-en-vertical-dark":{p:"focus/focus-en-28-vertical-dark",w:77,h:51},"focus-poisk-klientov":{p:"focus-poisk-klientov/focus-poisk-klientov-28",w:260,h:28},"focus-poisk-klientov-dark":{p:"focus-poisk-klientov/focus-poisk-klientov-28-dark",w:260,h:28},"focus-poisk-klientov-vertical":{p:"focus-poisk-klientov/focus-poisk-klientov-28-vertical",w:176,h:51},"focus-poisk-klientov-vertical-dark":{p:"focus-poisk-klientov/focus-poisk-klientov-28-vertical-dark",w:176,h:51},"focus-vertical":{p:"focus/focus-28-vertical",w:85,h:53},"focus-vertical-dark":{p:"focus/focus-28-vertical-dark",w:85,h:53},freelance:{p:"freelance/freelance-28",w:185,h:28},"freelance-dark":{p:"freelance/freelance-28-dark",w:185,h:28},"freelance-vertical":{p:"freelance/freelance-28-vertical",w:101,h:53},"freelance-vertical-dark":{p:"freelance/freelance-28-vertical-dark",w:101,h:53},"freeze-calendar":{p:"freeze-calendar/freeze-calendar-28",w:333,h:28},"freeze-calendar-dark":{p:"freeze-calendar/freeze-calendar-28-dark",w:333,h:28},"freeze-calendar-vertical":{p:"freeze-calendar/freeze-calendar-28-vertical",w:249,h:53},"freeze-calendar-vertical-dark":{p:"freeze-calendar/freeze-calendar-28-vertical-dark",w:249,h:53},gosoblako:{p:"gosoblako/gosoblako-28",w:201,h:28},"gosoblako-dark":{p:"gosoblako/gosoblako-28-dark",w:201,h:28},"gosoblako-en":{p:"gosoblako/gosoblako-en-28",w:193,h:28},"gosoblako-en-dark":{p:"gosoblako/gosoblako-en-28-dark",w:193,h:28},"gosoblako-en-vertical":{p:"gosoblako/gosoblako-en-28-vertical",w:117,h:51},"gosoblako-en-vertical-dark":{p:"gosoblako/gosoblako-en-28-vertical-dark",w:117,h:51},"gosoblako-vertical":{p:"gosoblako/gosoblako-28-vertical",w:117,h:51},"gosoblako-vertical-dark":{p:"gosoblako/gosoblako-28-vertical-dark",w:117,h:51},grant:{p:"grant/grant-28",w:148,h:28},"grant-dark":{p:"grant/grant-28-dark",w:148,h:28},"grant-vertical":{p:"grant/grant-28-vertical",w:85,h:53},"grant-vertical-dark":{p:"grant/grant-28-vertical-dark",w:85,h:53},guides:{p:"guides/guides-28",w:153,h:28},"guides-dark":{p:"guides/guides-28-dark",w:153,h:28},"guides-vertical":{p:"guides/guides-28-vertical",w:85,h:51},"guides-vertical-dark":{p:"guides/guides-28-vertical-dark",w:85,h:51},help:{p:"help/help-28",w:177,h:28},"help-dark":{p:"help/help-28-dark",w:177,h:28},"help-vertical":{p:"help/help-28-vertical",w:93,h:51},"help-vertical-dark":{p:"help/help-28-vertical-dark",w:93,h:51},hotel:{p:"hotel/hotel-28",w:153,h:28},"hotel-dark":{p:"hotel/hotel-28-dark",w:153,h:28},"hotel-en":{p:"hotel/hotel-en-28",w:135,h:28},"hotel-en-dark":{p:"hotel/hotel-en-28-dark",w:135,h:28},"hotel-en-vertical":{p:"hotel/hotel-en-28-vertical",w:77,h:51},"hotel-en-vertical-dark":{p:"hotel/hotel-en-28-vertical-dark",w:77,h:51},"hotel-vertical":{p:"hotel/hotel-28-vertical",w:85,h:51},"hotel-vertical-dark":{p:"hotel/hotel-28-vertical-dark",w:85,h:51},"hr-exit":{p:"hr-exit/hr-exit-28",w:124,h:28},"hr-exit-dark":{p:"hr-exit/hr-exit-28-dark",w:124,h:28},"hr-exit-vertical":{p:"hr-exit/hr-exit-28-vertical",w:85,h:51},"hr-exit-vertical-dark":{p:"hr-exit/hr-exit-28-vertical-dark",w:85,h:51},ia:{p:"ia/ia-28",w:118,h:28},"ia-dark":{p:"ia/ia-28-dark",w:118,h:28},"ia-en":{p:"ia/ia-en-28",w:99,h:28},"ia-en-dark":{p:"ia/ia-en-28-dark",w:99,h:28},"ia-en-vertical":{p:"ia/ia-en-28-vertical",w:77,h:51},"ia-en-vertical-dark":{p:"ia/ia-en-28-vertical-dark",w:77,h:51},"ia-vertical":{p:"ia/ia-28-vertical",w:85,h:51},"ia-vertical-dark":{p:"ia/ia-28-vertical-dark",w:85,h:51},id:{p:"id/id-28",w:109,h:28},"id-dark":{p:"id/id-28-dark",w:109,h:28},"id-vertical":{p:"id/id-28-vertical",w:85,h:51},"id-vertical-dark":{p:"id/id-28-vertical-dark",w:85,h:51},implementation:{p:"implementation/implementation-28",w:208,h:28},"implementation-dark":{p:"implementation/implementation-28-dark",w:208,h:28},"implementation-vertical":{p:"implementation/implementation-28-vertical",w:124,h:53},"implementation-vertical-dark":{p:"implementation/implementation-28-vertical-dark",w:124,h:53},info:{p:"info/info-28",w:146,h:28},"info-dark":{p:"info/info-28-dark",w:146,h:28},"info-vertical":{p:"info/info-28-vertical",w:85,h:53},"info-vertical-dark":{p:"info/info-28-vertical-dark",w:85,h:53},insight:{p:"insight/insight-28",w:165,h:28},"insight-dark":{p:"insight/insight-28-dark",w:165,h:28},"insight-vertical":{p:"insight/insight-28-vertical",w:85,h:51},"insight-vertical-dark":{p:"insight/insight-28-vertical-dark",w:85,h:51},install:{p:"install/install-28",w:298,h:28},"install-dark":{p:"install/install-28-dark",w:298,h:28},"install-vertical":{p:"install/install-28-vertical",w:157,h:73},"install-vertical-dark":{p:"install/install-28-vertical-dark",w:157,h:73},integrator:{p:"integrator/integrator-28",w:215,h:28},"integrator-dark":{p:"integrator/integrator-28-dark",w:215,h:28},"integrator-en":{p:"integrator/integrator-en-28",w:184,h:28},"integrator-en-dark":{p:"integrator/integrator-en-28-dark",w:184,h:28},"integrator-en-vertical":{p:"integrator/integrator-en-28-vertical",w:108,h:53},"integrator-en-vertical-dark":{p:"integrator/integrator-en-28-vertical-dark",w:108,h:53},"integrator-vertical":{p:"integrator/integrator-28-vertical",w:131,h:53},"integrator-vertical-dark":{p:"integrator/integrator-28-vertical-dark",w:131,h:53},invitations:{p:"invitations/invitations-28",w:235,h:28},"invitations-dark":{p:"invitations/invitations-28-dark",w:235,h:28},"invitations-vertical":{p:"invitations/invitations-28-vertical",w:151,h:53},"invitations-vertical-dark":{p:"invitations/invitations-28-vertical-dark",w:151,h:53},jkh:{p:"jkh/jkh-28",w:139,h:28},"jkh-dark":{p:"jkh/jkh-28-dark",w:139,h:28},"jkh-vertical":{p:"jkh/jkh-28-vertical",w:85,h:51},"jkh-vertical-dark":{p:"jkh/jkh-28-vertical-dark",w:85,h:51},kcr:{p:"kcr/kcr-28",w:134,h:28},"kcr-dark":{p:"kcr/kcr-28-dark",w:134,h:28},"kcr-full":{p:"kcr-full/kcr-full-28",w:477,h:28},"kcr-full-dark":{p:"kcr-full/kcr-full-28-dark",w:477,h:28},"kcr-full-vertical":{p:"kcr-full/kcr-full-28-vertical",w:181,h:98},"kcr-full-vertical-dark":{p:"kcr-full/kcr-full-28-vertical-dark",w:181,h:98},"kcr-vertical":{p:"kcr/kcr-28-vertical",w:85,h:52},"kcr-vertical-dark":{p:"kcr/kcr-28-vertical-dark",w:85,h:52},keadmin:{p:"keadmin/keadmin-28",w:179,h:28},"keadmin-dark":{p:"keadmin/keadmin-28-dark",w:179,h:28},"keadmin-vertical":{p:"keadmin/keadmin-28-vertical",w:95,h:51},"keadmin-vertical-dark":{p:"keadmin/keadmin-28-vertical-dark",w:95,h:51},khajiit:{p:"khajiit/khajiit-28",w:170,h:28},"khajiit-dark":{p:"khajiit/khajiit-28-dark",w:170,h:28},"khajiit-en":{p:"khajiit/khajiit-en-28",w:142,h:28},"khajiit-en-dark":{p:"khajiit/khajiit-en-28-dark",w:142,h:28},"khajiit-en-vertical":{p:"khajiit/khajiit-en-28-vertical",w:77,h:53},"khajiit-en-vertical-dark":{p:"khajiit/khajiit-en-28-vertical-dark",w:77,h:53},"khajiit-vertical":{p:"khajiit/khajiit-28-vertical",w:86,h:51},"khajiit-vertical-dark":{p:"khajiit/khajiit-28-vertical-dark",w:86,h:51},kontur:{p:"kontur/kontur-28",w:81,h:28},"kontur-bigbusiness":{p:"kontur-bigbusiness/kontur-bigbusiness-28",w:279,h:28},"kontur-bigbusiness-dark":{p:"kontur-bigbusiness/kontur-bigbusiness-28-dark",w:279,h:28},"kontur-dark":{p:"kontur/kontur-28-dark",w:81,h:28},"kontur-en":{p:"kontur/kontur-en-28",w:74,h:28},"kontur-en-dark":{p:"kontur/kontur-en-28-dark",w:74,h:28},"kontur-journal":{p:"kontur-journal/kontur-journal-28",w:180,h:28},"kontur-journal-dark":{p:"kontur-journal/kontur-journal-28-dark",w:180,h:28},"kontur-newbusiness":{p:"kontur-newbusiness/kontur-newbusiness-28",w:267,h:28},"kontur-newbusiness-dark":{p:"kontur-newbusiness/kontur-newbusiness-28-dark",w:267,h:28},"kontur-partnership":{p:"kontur-partnership/kontur-partnership-28",w:228,h:28},"kontur-partnership-dark":{p:"kontur-partnership/kontur-partnership-28-dark",w:228,h:28},"kontur-retail-suppliers":{p:"kontur-retail-suppliers/kontur-retail-suppliers-28",w:372,h:28},"kontur-retail-suppliers-dark":{p:"kontur-retail-suppliers/kontur-retail-suppliers-28-dark",w:372,h:28},"kontur-tech-partnership":{p:"kontur-tech-partnership/kontur-tech-partnership-28",w:391,h:28},"kontur-tech-partnership-dark":{p:"kontur-tech-partnership/kontur-tech-partnership-28-dark",w:391,h:28},"kontur-work":{p:"kontur-work/kontur-work-28",w:223,h:28},"kontur-work-dark":{p:"kontur-work/kontur-work-28-dark",w:223,h:28},kpi:{p:"kpi/kpi-28",w:122,h:28},"kpi-dark":{p:"kpi/kpi-28-dark",w:122,h:28},"kpi-en":{p:"kpi/kpi-en-28",w:114,h:28},"kpi-en-dark":{p:"kpi/kpi-en-28-dark",w:114,h:28},"kpi-en-vertical":{p:"kpi/kpi-en-28-vertical",w:77,h:51},"kpi-en-vertical-dark":{p:"kpi/kpi-en-28-vertical-dark",w:77,h:51},"kpi-vertical":{p:"kpi/kpi-28-vertical",w:85,h:51},"kpi-vertical-dark":{p:"kpi/kpi-28-vertical-dark",w:85,h:51},"livechat-admin":{p:"livechat-admin/livechat-admin-28",w:248,h:28},"livechat-admin-dark":{p:"livechat-admin/livechat-admin-28-dark",w:248,h:28},"livechat-admin-vertical":{p:"livechat-admin/livechat-admin-28-vertical",w:164,h:51},"livechat-admin-vertical-dark":{p:"livechat-admin/livechat-admin-28-vertical-dark",w:164,h:51},"livechat-monitoring":{p:"livechat-monitoring/livechat-monitoring-28",w:287,h:28},"livechat-monitoring-dark":{p:"livechat-monitoring/livechat-monitoring-28-dark",w:287,h:28},"livechat-monitoring-vertical":{p:"livechat-monitoring/livechat-monitoring-28-vertical",w:203,h:53},"livechat-monitoring-vertical-dark":{p:"livechat-monitoring/livechat-monitoring-28-vertical-dark",w:203,h:53},m4d:{p:"m4d/m4d-28",w:246,h:28},"m4d-dark":{p:"m4d/m4d-28-dark",w:246,h:28},"m4d-vertical":{p:"m4d/m4d-28-vertical",w:162,h:53},"m4d-vertical-dark":{p:"m4d/m4d-28-vertical-dark",w:162,h:53},market:{p:"market/market-28",w:168,h:28},"market-dark":{p:"market/market-28-dark",w:168,h:28},"market-en":{p:"market/market-en-28",w:152,h:28},"market-en-dark":{p:"market/market-en-28-dark",w:152,h:28},"market-en-vertical":{p:"market/market-en-28-vertical",w:77,h:51},"market-en-vertical-dark":{p:"market/market-en-28-vertical-dark",w:77,h:51},"market-vertical":{p:"market/market-28-vertical",w:85,h:53},"market-vertical-dark":{p:"market/market-28-vertical-dark",w:85,h:53},"marking-fns":{p:"marking-fns/marking-fns-28",w:280,h:28},"marking-fns-dark":{p:"marking-fns/marking-fns-28-dark",w:280,h:28},"marking-fns-en":{p:"marking-fns/marking-fns-en-28",w:163,h:28},"marking-fns-en-dark":{p:"marking-fns/marking-fns-en-28-dark",w:163,h:28},"marking-fns-en-vertical":{p:"marking-fns/marking-fns-en-28-vertical",w:87,h:53},"marking-fns-en-vertical-dark":{p:"marking-fns/marking-fns-en-28-vertical-dark",w:87,h:53},"marking-fns-vertical":{p:"marking-fns/marking-fns-28-vertical",w:196,h:53},"marking-fns-vertical-dark":{p:"marking-fns/marking-fns-28-vertical-dark",w:196,h:53},markirovka:{p:"markirovka/markirovka-28",w:224,h:28},"markirovka-dark":{p:"markirovka/markirovka-28-dark",w:224,h:28},"markirovka-en":{p:"markirovka/markirovka-en-28",w:163,h:28},"markirovka-en-dark":{p:"markirovka/markirovka-en-28-dark",w:163,h:28},"markirovka-en-vertical":{p:"markirovka/markirovka-en-28-vertical",w:87,h:53},"markirovka-en-vertical-dark":{p:"markirovka/markirovka-en-28-vertical-dark",w:87,h:53},"markirovka-vertical":{p:"markirovka/markirovka-28-vertical",w:140,h:53},"markirovka-vertical-dark":{p:"markirovka/markirovka-28-vertical-dark",w:140,h:53},matrix:{p:"matrix/matrix-28",w:183,h:28},"matrix-dark":{p:"matrix/matrix-28-dark",w:183,h:28},"matrix-vertical":{p:"matrix/matrix-28-vertical",w:99,h:53},"matrix-vertical-dark":{p:"matrix/matrix-28-vertical-dark",w:99,h:53},mercury:{p:"mercury/mercury-28",w:198,h:28},"mercury-dark":{p:"mercury/mercury-28-dark",w:198,h:28},"mercury-vertical":{p:"mercury/mercury-28-vertical",w:114,h:53},"mercury-vertical-dark":{p:"mercury/mercury-28-vertical-dark",w:114,h:53},"nds-plus":{p:"nds-plus/nds-plus-28",w:151,h:28},"nds-plus-dark":{p:"nds-plus/nds-plus-28-dark",w:151,h:28},"nds-plus-vertical":{p:"nds-plus/nds-plus-28-vertical",w:85,h:52},"nds-plus-vertical-dark":{p:"nds-plus/nds-plus-28-vertical-dark",w:85,h:52},"neuro-core":{p:"neuro-core/neuro-core-28",w:197,h:28},"neuro-core-dark":{p:"neuro-core/neuro-core-28-dark",w:197,h:28},"neuro-core-en":{p:"neuro-core/neuro-core-en-28",w:195,h:28},"neuro-core-en-dark":{p:"neuro-core/neuro-core-en-28-dark",w:195,h:28},"neuro-core-en-vertical":{p:"neuro-core/neuro-core-en-28-vertical",w:119,h:51},"neuro-core-en-vertical-dark":{p:"neuro-core/neuro-core-en-28-vertical-dark",w:119,h:51},"neuro-core-vertical":{p:"neuro-core/neuro-core-28-vertical",w:113,h:53},"neuro-core-vertical-dark":{p:"neuro-core/neuro-core-28-vertical-dark",w:113,h:53},normativ:{p:"normativ/normativ-28",w:197,h:28},"normativ-dark":{p:"normativ/normativ-28-dark",w:197,h:28},"normativ-vertical":{p:"normativ/normativ-28-vertical",w:113,h:53},"normativ-vertical-dark":{p:"normativ/normativ-28-vertical-dark",w:113,h:53},"nuget-en":{p:"nuget/nuget-en-28",w:143,h:28},"nuget-en-dark":{p:"nuget/nuget-en-28-dark",w:143,h:28},"nuget-en-vertical":{p:"nuget/nuget-en-28-vertical",w:77,h:53},"nuget-en-vertical-dark":{p:"nuget/nuget-en-28-vertical-dark",w:77,h:53},ofd:{p:"ofd/ofd-28",w:142,h:28},"ofd-dark":{p:"ofd/ofd-28-dark",w:142,h:28},"ofd-vertical":{p:"ofd/ofd-28-vertical",w:85,h:52},"ofd-vertical-dark":{p:"ofd/ofd-28-vertical-dark",w:85,h:52},option:{p:"option/option-28",w:172,h:28},"option-dark":{p:"option/option-28-dark",w:172,h:28},"option-vertical":{p:"option/option-28-vertical",w:88,h:51},"option-vertical-dark":{p:"option/option-28-vertical-dark",w:88,h:51},oracle:{p:"oracle/oracle-28",w:168,h:28},"oracle-dark":{p:"oracle/oracle-28-dark",w:168,h:28},"oracle-vertical":{p:"oracle/oracle-28-vertical",w:85,h:53},"oracle-vertical-dark":{p:"oracle/oracle-28-vertical-dark",w:85,h:53},order:{p:"order/order-28",w:166,h:28},"order-dark":{p:"order/order-28-dark",w:166,h:28},"order-vertical":{p:"order/order-28-vertical",w:85,h:51},"order-vertical-dark":{p:"order/order-28-vertical-dark",w:85,h:51},organizator:{p:"organizator/organizator-28",w:231,h:28},"organizator-dark":{p:"organizator/organizator-28-dark",w:231,h:28},"organizator-vertical":{p:"organizator/organizator-28-vertical",w:147,h:53},"organizator-vertical-dark":{p:"organizator/organizator-28-vertical-dark",w:147,h:53},osis:{p:"osis/osis-28",w:154,h:28},"osis-dark":{p:"osis/osis-28-dark",w:154,h:28},"osis-vertical":{p:"osis/osis-28-vertical",w:85,h:51},"osis-vertical-dark":{p:"osis/osis-28-vertical-dark",w:85,h:51},otchetru:{p:"otchetru/otchetru-28",w:182,h:28},"otchetru-dark":{p:"otchetru/otchetru-28-dark",w:182,h:28},"otchetru-vertical":{p:"otchetru/otchetru-28-vertical",w:98,h:53},"otchetru-vertical-dark":{p:"otchetru/otchetru-28-vertical-dark",w:98,h:53},palantir:{p:"palantir/palantir-28",w:192,h:28},"palantir-dark":{p:"palantir/palantir-28-dark",w:192,h:28},"palantir-vertical":{p:"palantir/palantir-28-vertical",w:108,h:53},"palantir-vertical-dark":{p:"palantir/palantir-28-vertical-dark",w:108,h:53},pam:{p:"pam/pam-28",w:135,h:28},"pam-dark":{p:"pam/pam-28-dark",w:135,h:28},"pam-vertical":{p:"pam/pam-28-vertical",w:85,h:51},"pam-vertical-dark":{p:"pam/pam-28-vertical-dark",w:85,h:51},panda:{p:"panda/panda-28",w:154,h:28},"panda-dark":{p:"panda/panda-28-dark",w:154,h:28},"panda-vertical":{p:"panda/panda-28-vertical",w:85,h:51},"panda-vertical-dark":{p:"panda/panda-28-vertical-dark",w:85,h:51},personal:{p:"personal/personal-28",w:195,h:28},"personal-dark":{p:"personal/personal-28-dark",w:195,h:28},"personal-vertical":{p:"personal/personal-28-vertical",w:111,h:53},"personal-vertical-dark":{p:"personal/personal-28-vertical-dark",w:111,h:53},"pf-otchet-plus":{p:"pf-otchet-plus/pf-otchet-plus-28",w:258,h:28},"pf-otchet-plus-dark":{p:"pf-otchet-plus/pf-otchet-plus-28-dark",w:258,h:28},"pf-otchet-plus-vertical":{p:"pf-otchet-plus/pf-otchet-plus-28-vertical",w:174,h:51},"pf-otchet-plus-vertical-dark":{p:"pf-otchet-plus/pf-otchet-plus-28-vertical-dark",w:174,h:51},podbor:{p:"podbor/podbor-28",w:172,h:28},"podbor-dark":{p:"podbor/podbor-28-dark",w:172,h:28},"podbor-vertical":{p:"podbor/podbor-28-vertical",w:88,h:53},"podbor-vertical-dark":{p:"podbor/podbor-28-vertical-dark",w:88,h:53},postavki:{p:"postavki/postavki-28",w:190,h:28},"postavki-dark":{p:"postavki/postavki-28-dark",w:190,h:28},"postavki-vertical":{p:"postavki/postavki-28-vertical",w:106,h:51},"postavki-vertical-dark":{p:"postavki/postavki-28-vertical-dark",w:106,h:51},product:{p:"product/product-28",w:178,h:28},"product-dark":{p:"product/product-28-dark",w:178,h:28},"product-en":{p:"product/product-en-28",w:164,h:28},"product-en-dark":{p:"product/product-en-28-dark",w:164,h:28},"product-en-vertical":{p:"product/product-en-28-vertical",w:88,h:51},"product-en-vertical-dark":{p:"product/product-en-28-vertical-dark",w:88,h:51},"product-vertical":{p:"product/product-28-vertical",w:94,h:53},"product-vertical-dark":{p:"product/product-28-vertical-dark",w:94,h:53},pulse:{p:"pulse/pulse-28",w:151,h:28},"pulse-dark":{p:"pulse/pulse-28-dark",w:151,h:28},"pulse-en":{p:"pulse/pulse-en-28",w:135,h:28},"pulse-en-dark":{p:"pulse/pulse-en-28-dark",w:135,h:28},"pulse-en-vertical":{p:"pulse/pulse-en-28-vertical",w:77,h:51},"pulse-en-vertical-dark":{p:"pulse/pulse-en-28-vertical-dark",w:77,h:51},"pulse-vertical":{p:"pulse/pulse-28-vertical",w:85,h:53},"pulse-vertical-dark":{p:"pulse/pulse-28-vertical-dark",w:85,h:53},"real-estate":{p:"real-estate/real-estate-28",w:253,h:28},"real-estate-admin":{p:"real-estate-admin/real-estate-admin-28",w:355,h:28},"real-estate-admin-dark":{p:"real-estate-admin/real-estate-admin-28-dark",w:355,h:28},"real-estate-admin-vertical":{p:"real-estate-admin/real-estate-admin-28-vertical",w:271,h:51},"real-estate-admin-vertical-dark":{p:"real-estate-admin/real-estate-admin-28-vertical-dark",w:271,h:51},"real-estate-dark":{p:"real-estate/real-estate-28-dark",w:253,h:28},"real-estate-vertical":{p:"real-estate/real-estate-28-vertical",w:169,h:51},"real-estate-vertical-dark":{p:"real-estate/real-estate-28-vertical-dark",w:169,h:51},reestro:{p:"reestro/reestro-28",w:178,h:28},"reestro-admin":{p:"reestro-admin/reestro-admin-28",w:280,h:28},"reestro-admin-dark":{p:"reestro-admin/reestro-admin-28-dark",w:280,h:28},"reestro-admin-vertical":{p:"reestro-admin/reestro-admin-28-vertical",w:196,h:53},"reestro-admin-vertical-dark":{p:"reestro-admin/reestro-admin-28-vertical-dark",w:196,h:53},"reestro-dark":{p:"reestro/reestro-28-dark",w:178,h:28},"reestro-vertical":{p:"reestro/reestro-28-vertical",w:94,h:53},"reestro-vertical-dark":{p:"reestro/reestro-28-vertical-dark",w:94,h:53},reformator:{p:"reformator/reformator-28",w:226,h:28},"reformator-dark":{p:"reformator/reformator-28-dark",w:226,h:28},"reformator-vertical":{p:"reformator/reformator-28-vertical",w:142,h:53},"reformator-vertical-dark":{p:"reformator/reformator-28-vertical-dark",w:142,h:53},registrator:{p:"registrator/registrator-28",w:226,h:28},"registrator-dark":{p:"registrator/registrator-28-dark",w:226,h:28},"registrator-en":{p:"registrator/registrator-en-28",w:196,h:28},"registrator-en-dark":{p:"registrator/registrator-en-28-dark",w:196,h:28},"registrator-en-vertical":{p:"registrator/registrator-en-28-vertical",w:120,h:53},"registrator-en-vertical-dark":{p:"registrator/registrator-en-28-vertical-dark",w:120,h:53},"registrator-vertical":{p:"registrator/registrator-28-vertical",w:142,h:53},"registrator-vertical-dark":{p:"registrator/registrator-28-vertical-dark",w:142,h:53},reseller:{p:"reseller/reseller-28",w:170,h:28},"reseller-dark":{p:"reseller/reseller-28-dark",w:170,h:28},"reseller-en":{p:"reseller/reseller-en-28",w:162,h:28},"reseller-en-dark":{p:"reseller/reseller-en-28-dark",w:162,h:28},"reseller-en-vertical":{p:"reseller/reseller-en-28-vertical",w:86,h:51},"reseller-en-vertical-dark":{p:"reseller/reseller-en-28-vertical-dark",w:86,h:51},"reseller-vertical":{p:"reseller/reseller-28-vertical",w:86,h:51},"reseller-vertical-dark":{p:"reseller/reseller-28-vertical-dark",w:86,h:51},roadmaps:{p:"roadmaps/roadmaps-28",w:200,h:28},"roadmaps-dark":{p:"roadmaps/roadmaps-28-dark",w:200,h:28},"roadmaps-vertical":{p:"roadmaps/roadmaps-28-vertical",w:116,h:53},"roadmaps-vertical-dark":{p:"roadmaps/roadmaps-28-vertical-dark",w:116,h:53},sales:{p:"sales/sales-28",w:188,h:28},"sales-dark":{p:"sales/sales-28-dark",w:188,h:28},"sales-vertical":{p:"sales/sales-28-vertical",w:104,h:53},"sales-vertical-dark":{p:"sales/sales-28-vertical-dark",w:104,h:53},sara:{p:"sara/sara-28",w:141,h:28},"sara-dark":{p:"sara/sara-28-dark",w:141,h:28},"sara-vertical":{p:"sara/sara-28-vertical",w:85,h:53},"sara-vertical-dark":{p:"sara/sara-28-vertical-dark",w:85,h:53},scanner:{p:"scanner/scanner-28",w:167,h:28},"scanner-dark":{p:"scanner/scanner-28-dark",w:167,h:28},"scanner-vertical":{p:"scanner/scanner-28-vertical",w:85,h:53},"scanner-vertical-dark":{p:"scanner/scanner-28-vertical-dark",w:85,h:53},school:{p:"school/school-28",w:160,h:28},"school-academy":{p:"school-academy/school-academy-28",w:194,h:28},"school-academy-dark":{p:"school-academy/school-academy-28-dark",w:194,h:28},"school-academy-vertical":{p:"school-academy/school-academy-28-vertical",w:110,h:51},"school-academy-vertical-dark":{p:"school-academy/school-academy-28-vertical-dark",w:110,h:51},"school-dark":{p:"school/school-28-dark",w:160,h:28},"school-vertical":{p:"school/school-28-vertical",w:85,h:51},"school-vertical-dark":{p:"school/school-28-vertical-dark",w:85,h:51},security:{p:"security/security-28",w:239,h:28},"security-dark":{p:"security/security-28-dark",w:239,h:28},"security-vertical":{p:"security/security-28-vertical",w:155,h:51},"security-vertical-dark":{p:"security/security-28-vertical-dark",w:155,h:51},segmentplus:{p:"segmentplus/segmentplus-28",w:193,h:28},"segmentplus-dark":{p:"segmentplus/segmentplus-28-dark",w:193,h:28},"segmentplus-en":{p:"segmentplus/segmentplus-en-28",w:187,h:28},"segmentplus-en-dark":{p:"segmentplus/segmentplus-en-28-dark",w:187,h:28},"segmentplus-en-vertical":{p:"segmentplus/segmentplus-en-28-vertical",w:111,h:53},"segmentplus-en-vertical-dark":{p:"segmentplus/segmentplus-en-28-vertical-dark",w:111,h:53},"segmentplus-vertical":{p:"segmentplus/segmentplus-28-vertical",w:109,h:51},"segmentplus-vertical-dark":{p:"segmentplus/segmentplus-28-vertical-dark",w:109,h:51},sentinel:{p:"sentinel/sentinel-28",w:202,h:28},"sentinel-dark":{p:"sentinel/sentinel-28-dark",w:202,h:28},"sentinel-vertical":{p:"sentinel/sentinel-28-vertical",w:118,h:53},"sentinel-vertical-dark":{p:"sentinel/sentinel-28-vertical-dark",w:118,h:53},"shantak-en":{p:"shantak/shantak-en-28",w:164,h:28},"shantak-en-dark":{p:"shantak/shantak-en-28-dark",w:164,h:28},"shantak-en-vertical":{p:"shantak/shantak-en-28-vertical",w:88,h:51},"shantak-en-vertical-dark":{p:"shantak/shantak-en-28-vertical-dark",w:88,h:51},showcase:{p:"showcase/showcase-28",w:179,h:28},"showcase-dark":{p:"showcase/showcase-28-dark",w:179,h:28},"showcase-vertical":{p:"showcase/showcase-28-vertical",w:95,h:53},"showcase-vertical-dark":{p:"showcase/showcase-28-vertical-dark",w:95,h:53},sirena:{p:"sirena/sirena-28",w:168,h:28},"sirena-dark":{p:"sirena/sirena-28-dark",w:168,h:28},"sirena-en":{p:"sirena/sirena-en-28",w:144,h:28},"sirena-en-dark":{p:"sirena/sirena-en-28-dark",w:144,h:28},"sirena-en-vertical":{p:"sirena/sirena-en-28-vertical",w:77,h:51},"sirena-en-vertical-dark":{p:"sirena/sirena-en-28-vertical-dark",w:77,h:51},"sirena-vertical":{p:"sirena/sirena-28-vertical",w:85,h:53},"sirena-vertical-dark":{p:"sirena/sirena-28-vertical-dark",w:85,h:53},skbkontur:{p:"skbkontur/skbkontur-28",w:172,h:28},"skbkontur-dark":{p:"skbkontur/skbkontur-28-dark",w:172,h:28},"skbkontur-en":{p:"skbkontur/skbkontur-en-28",w:143,h:28},"skbkontur-en-dark":{p:"skbkontur/skbkontur-en-28-dark",w:143,h:28},slomon:{p:"slomon/slomon-28",w:166,h:28},"slomon-dark":{p:"slomon/slomon-28-dark",w:166,h:28},"slomon-vertical":{p:"slomon/slomon-28-vertical",w:85,h:51},"slomon-vertical-dark":{p:"slomon/slomon-28-vertical-dark",w:85,h:51},smev:{p:"smev/smev-28",w:154,h:28},"smev-dark":{p:"smev/smev-28-dark",w:154,h:28},"smev-vertical":{p:"smev/smev-28-vertical",w:85,h:51},"smev-vertical-dark":{p:"smev/smev-28-vertical-dark",w:85,h:51},snab:{p:"snab/snab-28",w:142,h:28},"snab-dark":{p:"snab/snab-28-dark",w:142,h:28},"snab-vertical":{p:"snab/snab-28-vertical",w:85,h:51},"snab-vertical-dark":{p:"snab/snab-28-vertical-dark",w:85,h:51},soczaschita:{p:"soczaschita/soczaschita-28",w:209,h:28},"soczaschita-dark":{p:"soczaschita/soczaschita-28-dark",w:209,h:28},"soczaschita-vertical":{p:"soczaschita/soczaschita-28-vertical",w:125,h:51},"soczaschita-vertical-dark":{p:"soczaschita/soczaschita-28-vertical-dark",w:125,h:51},"space-core":{p:"space-core/space-core-28",w:193,h:28},"space-core-dark":{p:"space-core/space-core-28-dark",w:193,h:28},"space-core-en":{p:"space-core/space-core-en-28",w:196,h:28},"space-core-en-dark":{p:"space-core/space-core-en-28-dark",w:196,h:28},"space-core-en-vertical":{p:"space-core/space-core-en-28-vertical",w:120,h:53},"space-core-en-vertical-dark":{p:"space-core/space-core-en-28-vertical-dark",w:120,h:53},"space-core-vertical":{p:"space-core/space-core-28-vertical",w:109,h:53},"space-core-vertical-dark":{p:"space-core/space-core-28-vertical-dark",w:109,h:53},"speech-core":{p:"speech-core/speech-core-28",w:180,h:28},"speech-core-dark":{p:"speech-core/speech-core-28-dark",w:180,h:28},"speech-core-en":{p:"speech-core/speech-core-en-28",w:210,h:28},"speech-core-en-dark":{p:"speech-core/speech-core-en-28-dark",w:210,h:28},"speech-core-en-vertical":{p:"speech-core/speech-core-en-28-vertical",w:134,h:53},"speech-core-en-vertical-dark":{p:"speech-core/speech-core-en-28-vertical-dark",w:134,h:53},"speech-core-vertical":{p:"speech-core/speech-core-28-vertical",w:96,h:53},"speech-core-vertical-dark":{p:"speech-core/speech-core-28-vertical-dark",w:96,h:53},ssanta:{p:"ssanta/ssanta-28",w:232,h:28},"ssanta-dark":{p:"ssanta/ssanta-28-dark",w:232,h:28},"ssanta-vertical":{p:"ssanta/ssanta-28-vertical",w:150,h:51},"ssanta-vertical-dark":{p:"ssanta/ssanta-28-vertical-dark",w:150,h:51},staff:{p:"staff/staff-28",w:158,h:28},"staff-dark":{p:"staff/staff-28-dark",w:158,h:28},"staff-vertical":{p:"staff/staff-28-vertical",w:85,h:53},"staff-vertical-dark":{p:"staff/staff-28-vertical-dark",w:85,h:53},staffcop:{p:"staffcop/staffcop-28",w:99,h:28},"staffcop-dark":{p:"staffcop/staffcop-28-dark",w:99,h:28},"staffcop-en":{p:"staffcop/staffcop-en-28",w:99,h:28},"staffcop-en-dark":{p:"staffcop/staffcop-en-28-dark",w:99,h:28},start:{p:"start/start-28",w:150,h:28},"start-dark":{p:"start/start-28-dark",w:150,h:28},"start-vertical":{p:"start/start-28-vertical",w:85,h:53},"start-vertical-dark":{p:"start/start-28-vertical-dark",w:85,h:53},statuspage:{p:"statuspage/statuspage-28",w:209,h:28},"statuspage-dark":{p:"statuspage/statuspage-28-dark",w:209,h:28},"statuspage-vertical":{p:"statuspage/statuspage-28-vertical",w:125,h:53},"statuspage-vertical-dark":{p:"statuspage/statuspage-28-vertical-dark",w:125,h:53},stream:{p:"stream/stream-28",w:157,h:28},"stream-dark":{p:"stream/stream-28-dark",w:157,h:28},"stream-vertical":{p:"stream/stream-28-vertical",w:85,h:53},"stream-vertical-dark":{p:"stream/stream-28-vertical-dark",w:85,h:53},"support-center":{p:"support-center/support-center-28",w:283,h:28},"support-center-dark":{p:"support-center/support-center-28-dark",w:283,h:28},"support-center-vertical":{p:"support-center/support-center-28-vertical",w:199,h:53},"support-center-vertical-dark":{p:"support-center/support-center-28-vertical-dark",w:199,h:53},"support-trades":{p:"support-trades/support-trades-28",w:346,h:28},"support-trades-dark":{p:"support-trades/support-trades-28-dark",w:346,h:28},"support-trades-vertical":{p:"support-trades/support-trades-28-vertical",w:183,h:75},"support-trades-vertical-dark":{p:"support-trades/support-trades-28-vertical-dark",w:183,h:75},svetofor:{p:"svetofor/svetofor-28",w:197,h:28},"svetofor-dark":{p:"svetofor/svetofor-28-dark",w:197,h:28},"svetofor-vertical":{p:"svetofor/svetofor-28-vertical",w:113,h:53},"svetofor-vertical-dark":{p:"svetofor/svetofor-28-vertical-dark",w:113,h:53},talk:{p:"talk/talk-28",w:134,h:28},"talk-dark":{p:"talk/talk-28-dark",w:134,h:28},"talk-en":{p:"talk/talk-en-28",w:117,h:28},"talk-en-dark":{p:"talk/talk-en-28-dark",w:117,h:28},"talk-en-vertical":{p:"talk/talk-en-28-vertical",w:77,h:51},"talk-en-vertical-dark":{p:"talk/talk-en-28-vertical-dark",w:77,h:51},"talk-vertical":{p:"talk/talk-28-vertical",w:85,h:51},"talk-vertical-dark":{p:"talk/talk-28-vertical-dark",w:85,h:51},"tax-monitor":{p:"tax-monitor/tax-monitor-28",w:344,h:28},"tax-monitor-dark":{p:"tax-monitor/tax-monitor-28-dark",w:344,h:28},"tax-monitor-vertical":{p:"tax-monitor/tax-monitor-28-vertical",w:134,h:75},"tax-monitor-vertical-dark":{p:"tax-monitor/tax-monitor-28-vertical-dark",w:134,h:75},template:{p:"template/template-28",w:176,h:28},"template-dark":{p:"template/template-28-dark",w:176,h:28},"template-en":{p:"template/template-en-28",w:174,h:28},"template-en-dark":{p:"template/template-en-28-dark",w:174,h:28},"template-en-vertical":{p:"template/template-en-28-vertical",w:100,h:53},"template-en-vertical-dark":{p:"template/template-en-28-vertical-dark",w:100,h:53},"template-vertical":{p:"template/template-28-vertical",w:92,h:51},"template-vertical-dark":{p:"template/template-28-vertical-dark",w:92,h:51},thor:{p:"thor/thor-28",w:124,h:28},"thor-dark":{p:"thor/thor-28-dark",w:124,h:28},"thor-en":{p:"thor/thor-en-28",w:125,h:28},"thor-en-dark":{p:"thor/thor-en-28-dark",w:125,h:28},"thor-en-vertical":{p:"thor/thor-en-28-vertical",w:77,h:51},"thor-en-vertical-dark":{p:"thor/thor-en-28-vertical-dark",w:77,h:51},"thor-vertical":{p:"thor/thor-28-vertical",w:85,h:53},"thor-vertical-dark":{p:"thor/thor-28-vertical-dark",w:85,h:53},transcript:{p:"transcript/transcript-28",w:213,h:28},"transcript-dark":{p:"transcript/transcript-28-dark",w:213,h:28},"transcript-vertical":{p:"transcript/transcript-28-vertical",w:131,h:53},"transcript-vertical-dark":{p:"transcript/transcript-28-vertical-dark",w:131,h:53},trip:{p:"trip/trip-28",w:250,h:28},"trip-dark":{p:"trip/trip-28-dark",w:250,h:28},"trip-vertical":{p:"trip/trip-28-vertical",w:166,h:53},"trip-vertical-dark":{p:"trip/trip-28-vertical-dark",w:166,h:53},"uchet-tmc":{p:"uchet-tmc/uchet-tmc-28",w:190,h:28},"uchet-tmc-dark":{p:"uchet-tmc/uchet-tmc-28-dark",w:190,h:28},"uchet-tmc-vertical":{p:"uchet-tmc/uchet-tmc-28-vertical",w:106,h:52},"uchet-tmc-vertical-dark":{p:"uchet-tmc/uchet-tmc-28-vertical-dark",w:106,h:52},"ui-en":{p:"ui/ui-en-28",w:100,h:28},"ui-en-dark":{p:"ui/ui-en-28-dark",w:100,h:28},"ui-en-vertical":{p:"ui/ui-en-28-vertical",w:77,h:51},"ui-en-vertical-dark":{p:"ui/ui-en-28-vertical-dark",w:77,h:51},urv:{p:"urv/urv-28",w:131,h:28},"urv-dark":{p:"urv/urv-28-dark",w:131,h:28},"urv-vertical":{p:"urv/urv-28-vertical",w:85,h:51},"urv-vertical-dark":{p:"urv/urv-28-vertical-dark",w:85,h:51},vacations:{p:"vacations/vacations-28",w:178,h:28},"vacations-dark":{p:"vacations/vacations-28-dark",w:178,h:28},"vacations-vertical":{p:"vacations/vacations-28-vertical",w:94,h:53},"vacations-vertical-dark":{p:"vacations/vacations-28-vertical-dark",w:94,h:53},vitrina:{p:"vitrina/vitrina-28",w:179,h:28},"vitrina-dark":{p:"vitrina/vitrina-28-dark",w:179,h:28},"vitrina-vertical":{p:"vitrina/vitrina-28-vertical",w:95,h:53},"vitrina-vertical-dark":{p:"vitrina/vitrina-28-vertical-dark",w:95,h:53},"voronkanaima-beta":{p:"voronkanaima-beta/voronkanaima-beta-28",w:252,h:28},"voronkanaima-beta-dark":{p:"voronkanaima-beta/voronkanaima-beta-28-dark",w:252,h:28},"voronkanaima-beta-vertical":{p:"voronkanaima-beta/voronkanaima-beta-28-vertical",w:168,h:53},"voronkanaima-beta-vertical-dark":{p:"voronkanaima-beta/voronkanaima-beta-28-vertical-dark",w:168,h:53},waybills:{p:"waybills/waybills-28",w:249,h:28},"waybills-dark":{p:"waybills/waybills-28-dark",w:249,h:28},"waybills-vertical":{p:"waybills/waybills-28-vertical",w:165,h:53},"waybills-vertical-dark":{p:"waybills/waybills-28-vertical-dark",w:165,h:53},wic:{p:"wic/wic-28",w:130,h:28},"wic-dark":{p:"wic/wic-28-dark",w:130,h:28},"wic-vertical":{p:"wic/wic-28-vertical",w:85,h:51},"wic-vertical-dark":{p:"wic/wic-28-vertical-dark",w:85,h:51},yggdrasil:{p:"yggdrasil/yggdrasil-28",w:214,h:28},"yggdrasil-dark":{p:"yggdrasil/yggdrasil-28-dark",w:214,h:28},"yggdrasil-vertical":{p:"yggdrasil/yggdrasil-28-vertical",w:130,h:53},"yggdrasil-vertical-dark":{p:"yggdrasil/yggdrasil-28-vertical-dark",w:130,h:53},zakupki:{p:"zakupki/zakupki-28",w:175,h:28},"zakupki-dark":{p:"zakupki/zakupki-28-dark",w:175,h:28},"zakupki-en":{p:"zakupki/zakupki-en-28",w:188,h:28},"zakupki-en-dark":{p:"zakupki/zakupki-en-28-dark",w:188,h:28},"zakupki-en-vertical":{p:"zakupki/zakupki-en-28-vertical",w:112,h:51},"zakupki-en-vertical-dark":{p:"zakupki/zakupki-en-28-vertical-dark",w:112,h:51},"zakupki-vertical":{p:"zakupki/zakupki-28-vertical",w:91,h:53},"zakupki-vertical-dark":{p:"zakupki/zakupki-28-vertical-dark",w:91,h:53},zarplata:{p:"zarplata/zarplata-28",w:189,h:28},"zarplata-dark":{p:"zarplata/zarplata-28-dark",w:189,h:28},"zarplata-vertical":{p:"zarplata/zarplata-28-vertical",w:105,h:53},"zarplata-vertical-dark":{p:"zarplata/zarplata-28-vertical-dark",w:105,h:53}},yi="https://s.kontur.ru/common-v2/logos/v2",xi=r=>{const e=ve[r];return e?`${yi}/${e.p}.svg`:""},Li=w.createContext(xi),zi=()=>w.useContext(Li),Si={root:"CdnLogo__root"},Ni=(r,e)=>{if(!e||r.endsWith("-dark"))return r;const o=`${r}-dark`;return o in ve?o:r},_e=w.forwardRef(({logo:r,style:e,color:o,name:t,useDarkThemeColors:a,size:l,...s},c)=>{const d=zi(),h=Ni(r,a),k=ve[h]??{w:28,h:28},v={flexShrink:0,...e};return O.jsx("img",{"data-tid":Si.root,...s,"aria-hidden":!t,alt:t,ref:c,style:v,src:d(h),width:l?Math.round(l/k.h*k.w):k.w,height:l||k.h})});_e.displayName="CdnLogo";_e.__docgenInfo={description:"",methods:[],displayName:"CdnLogo"};const Ta=(r,e)=>{const o=r.filter(t=>t>=e);return o.length>0?Math.min(...o):Math.max(...r)},Ca=[16,24,32,36,48,64,82,128,256,512],Aa=[16,24,32,36,48,64],Di=(r,e)=>e?Aa.includes(r)?r:Ta(Aa,r):Ca.includes(r)?r:Ta(Ca,r),Oi=(r,e,o)=>{const t=Di(e,o),a=o?`symbol/${r}-symbol`:r;return`https://s.kontur.ru/common-v2/icons-products/${r}/${a}-${t}.svg`},Ga=w.createContext(Oi),Ti=()=>w.useContext(Ga),Za=({children:r,value:e})=>O.jsx(Ga.Provider,{value:e.getProductIconUrl,children:r});Za.__docgenInfo={description:"",methods:[],displayName:"CdnProductIconProvider",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  getProductIconUrl: CdnProductIconContextType;
}`,signature:{properties:[{key:"getProductIconUrl",value:{name:"signature",type:"function",raw:`(
  product: string,
  size: ProductIconSize,
  symbol?: boolean,
) => string`,signature:{arguments:[{type:{name:"string"},name:"product"},{type:{name:"union",raw:"16 | 24 | 32 | 36 | 48 | 64 | 82 | 128 | 256 | 512",elements:[{name:"literal",value:"16"},{name:"literal",value:"24"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"48"},{name:"literal",value:"64"},{name:"literal",value:"82"},{name:"literal",value:"128"},{name:"literal",value:"256"},{name:"literal",value:"512"}]},name:"size"},{type:{name:"boolean"},name:"symbol"}],return:{name:"string"}},required:!0}}]}},description:""}}};const Ci={root:"CdnProductIcon__root"},Be=w.forwardRef(({product:r,size:e,style:o,name:t,symbol:a,...l},s)=>{const c=Ti(),[d,h]=w.useState(!1),k={flexShrink:0,width:e,height:e,...o};return O.jsx("img",{"data-tid":Ci.root,...l,"aria-hidden":!t,alt:t,ref:s,style:k,width:e,height:e,src:c(d?"kontur":r,e,a),onError:()=>h(!0)})});Be.displayName="CdnProductIcon";Be.__docgenInfo={description:"",methods:[],displayName:"CdnProductIcon"};module&&module.hot&&module.hot.decline&&module.hot.decline();const Ea=on({base:"light",appBorderRadius:2,appBg:"rgba(255, 255, 255, 0.87)",brandTitle:"Kontur UI",fontBase:'"Lab Grotesque", "Helvetica Neue", Roboto, Arial, sans-serif',fontCode:"monospace",brandImage:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzAiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2IpIj48ZyBjbGlwLXBhdGg9InVybCgjYykiPjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzNEM0QzRCIgcng9IjYiLz48L2c+PHBhdGggZmlsbD0iI0ZFQ0E0MiIgZD0ibTkuNDQyIDQtLjc2MyA5LjEyOGgyLjM1NmwtLjQ2NyA3LjYyMiA1LjU1Ni0xMC42OGgtMi41MTJsMS4zNTQtNS4zMTZMOS40NDIgNFoiLz48L2c+PC9nPjxwYXRoIGZpbGw9IiMyMjIiIGQ9Ik04Mi4zNDkgMjAuMDA5YTguNDY3IDguNDY3IDAgMCAxLTIuNTU2LjQwMmMtMS4xOTkgMC0yLjA3NC0uMjYtMi42MjYtLjc4LS41MDUtLjU1My0uNzU3LTEuMzczLS43NTctMi40NjF2LTYuNzloLTIuMTUzVjguMjczaDIuMTUzdi0zLjgxaDIuODE1djMuODFoMi45MzR2Mi4xMDVoLTIuOTM0djYuMzE4YzAgLjQ0MS4xMDMuNzY1LjMwOC45Ny4yMzYuMTg5LjU2LjI4NC45Ny4yODQuNTM2IDAgMS4wMzMtLjA3MiAxLjQ5LS4yMTNsLjM1NiAyLjI3Wm0tMzMuODEtOS4yNzVjLjUzNi0uOTE1IDEuMzMyLTEuNjE3IDIuMzg5LTIuMTA2Ljk3OC0uNTA0IDIuMDY2LS43NTcgMy4yNjUtLjc1NyAxLjE2NyAwIDIuMjQuMjM3IDMuMjE4LjcxIDEuMDU3LjUzNiAxLjg2OSAxLjI3OCAyLjQzNyAyLjIyNC41NjguOTQ3Ljg1MiAyLjA2Ni44NTIgMy4zNiAwIDEuMzEtLjI5MiAyLjQ0NS0uODc2IDMuNDA3LS41NjguOTQ2LTEuMzcyIDEuNjgtMi40MTMgMi4yLS45NjIuNTM3LTIuMDM1LjgwNS0zLjIxOC44MDUtMS4wODggMC0yLjE3Ny0uMjUzLTMuMjY1LS43NTctMS4wNTctLjUzNy0xLjg3Ny0xLjI4Ni0yLjQ2LTIuMjQ4LS41NjktLjk3OC0uODUyLTIuMTE0LS44NTItMy40MDcgMC0xLjM3Mi4zMDctMi41MTYuOTIyLTMuNDNabTIxLjQ4MyA5LjQ4OHYtNy40NTNjMC0uODM2LS4yMDUtMS40NjctLjYxNi0xLjg5My0uNDEtLjQyNi0uOTkzLS42MzktMS43NS0uNjM5LS40NzQgMC0uOTE1LjExLTEuMzI1LjMzMmEyLjUyIDIuNTIgMCAwIDAtLjkyMy45NDZjLS4yMDUuMzYzLS4zMDguODEyLS4zMDggMS4zNDl2Ny4zNThoLTIuODE1VjguMjc0aDIuNjAydjEuMzk1Yy43NzMtMS4xOTggMi4wMDQtMS43OTggMy42OTEtMS43OTggMS4zMSAwIDIuMzQzLjM2MyAzLjEgMS4wODkuNzczLjcyNSAxLjE2IDEuNzI3IDEuMTYgMy4wMDRsLS4wNDggOC4yMzQtMi43NjguMDI0Wm0zMy44ODEtOS4zMjJjLS42NjMtLjE5LTEuMTgzLS4yODQtMS41NjItLjI4NC0uNzczIDAtMS40MDQuMzIzLTEuODkzLjk3LS40ODkuNjMtLjczMyAxLjQ5LS43MzMgMi41Nzl2Ni4wNTdoLTIuODE2VjguMjc0aDIuNjI3djEuNzAzYy4yODQtLjYzLjY3OC0xLjExMiAxLjE4My0xLjQ0My41Mi0uMzQ3IDEuMTI3LS41MiAxLjgyMS0uNTIuNDg5IDAgMS4xMzYuMTI1IDEuOTQxLjM3OGwtLjU2OCAyLjUwOFptLTkuNTU5IDkuMzIyaC0yLjYwMnYtMS40OWMtLjMzMi41NTEtLjgwNSAxLjAwOS0xLjQyIDEuMzcyLS43MjYuMzE1LTEuNDI4LjQ3My0yLjEwNi40NzNhNS4yNjggNS4yNjggMCAwIDEtMS44NDUtLjMwOGMtLjU1Mi0uMTktMS4wMDItLjQ1Ny0xLjM0OS0uODA0LS42OTQtLjY5NC0xLjA0MS0xLjY0OS0xLjA0MS0yLjg2M1Y4LjI3NGgyLjgxNnY3LjU5NGMwIC43NTcuMTg5IDEuMzAyLjU2NyAxLjYzMy4zNzkuMzc4LjkxNS41NjggMS42MS41NjguNzcyIDAgMS4zODctLjIzNyAxLjg0NS0uNzEuNDczLS40ODkuNzEtMS4xNTIuNzEtMS45ODhWOC4yNzRoMi44MTV2MTEuOTQ4Wm0tNDIuODQ4LTMuMWMuNi42OTQgMS40NzUgMS4wNDEgMi42MjYgMS4wNDEgMS4xNTIgMCAyLjAyNy0uMzQ3IDIuNjI2LTEuMDQuNjQ3LS42NzkuOTctMS42NjUuOTctMi45NTggMC0xLjI3OC0uMzE1LTIuMjQ4LS45NDYtMi45MS0uNjE1LS42NjMtMS40OTgtLjk5NC0yLjY1LS45OTQtMS4xMzYgMC0yLjAyNy4zMjMtMi42NzMuOTctLjYuNjk0LS45IDEuNjcyLS45IDIuOTM0IDAgMS4yOTMuMzE2IDIuMjguOTQ3IDIuOTU3Wm0tMi45NTggMy4xaC0zLjQzbC01LjI3Ni03LjU0OEgzNy4zdjcuNTQ4SDM0LjI3VjYuMjYySDMybDEuNTE0LTIuODM5SDM3LjN2Ni42NDloMi41MzJsNS4wMzktNi42NDloMy4zODNsLTUuODQ0IDcuOTUgNi4xMjggOC44NDlaTTEyMy4wMyAxNC44NzVjMCAxLjg0NS0uNTM2IDMuMjU3LTEuNjA5IDQuMjM1LTEuMDU2Ljk3OC0yLjYzNCAxLjQ2Ny00LjczMiAxLjQ2Ny0yLjA4MiAwLTMuNjU5LS40OS00LjczMi0xLjQ2Ny0xLjA1Ni0uOTc4LTEuNTg1LTIuMzktMS41ODUtNC4yMzVWMy40MjNoMi4xNzd2MTEuMzMzYzAgMS4yNzguMzQ3IDIuMjQ4IDEuMDQxIDIuOTEuNzEuNjYzIDEuNzQzLjk5NCAzLjA5OS45OTQgMS4zNTcgMCAyLjM4Mi0uMzMxIDMuMDc2LS45OTMuNzEtLjY2MyAxLjA2NS0xLjYzMyAxLjA2NS0yLjkxVjMuNDIyaDIuMnYxMS40NTJaTTEyNy4xODIgMy40MjNoMi4xNzd2MTYuNzk5aC0yLjE3N1YzLjQyM1oiLz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+"});cn.setConfig({[ln]:{scope:{CdnIcon:Ee,CdnProductIcon:Be,CdnIconProvider:Qa,CdnProductIconProvider:Za,CdnLogo:_e,Gapped:Mn,Button:ci,Logotype:fn,Toggle:bn,useState:w.useState,Logos:wn,LogosObject:ve}}});const Fi={parameters:{theme:Ea,docs:{theme:Ea}}};export{Fi as default};
