import{j as p}from"./jsx-runtime-F1iDwNaf.js";import{c as i,a as r,q as hi,_ as ve,e as j,s as bi,t as x,m as ae,o as oe,f as pi,T as P,d as S,u as me,r as Te,b as Ae,C as _e,g as Be,v as Ne,x as fi,y as vi,k as ze,p as Ii,Z as xi,z as Zr,h as le,B as ce,w as yi,A as wi,D as je,E as Ye,G as Si}from"./Gapped-WvmOyBbz.js";import{R as u,r as L}from"./index-YTOF1_EJ.js";var Ze,Ve,Vr=function(){return i(Ze||(Ze=r([`
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
  `])))},ji=function(){return i(Ve||(Ve=r([`
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
  `])))},qr={small:16,medium:20,large:24},qe="small",Mi=["size"],Ci=function(e){return typeof e=="string"&&Object.keys(qr).includes(e)},ki=function(e){return Object.entries(qr).sort(function(l,t){var o=l[1],c=t[1];return Math.abs(e-o)>Math.abs(e-c)?1:-1})[0][0]},Ee=function(e,l){return hi(l,function(t,o){var c=t.size,s=c===void 0?qe:c,a=ve(t,Mi),d=qe;s!==d&&Ci(s)?d=s:typeof s=="number"&&(d=ki(s));var m=e[d]();return u.cloneElement(m,j({ref:o},a))})},Li=function(e,l){var t=this;this.interval=null,this.start=function(){t.animations.forEach(function(o){return o.start()}),t.interval=zi(function(){t.animations.forEach(function(o){return o.step()})},t.FPS)},this.stop=function(){t.interval&&(t.interval.clear(),t.animations.forEach(function(o){return o.finish()}))},this.animations=e,this.FPS=l,this.start()},zi=function(e,l){var t=0,o=!1,c=0,s=function a(){if(!o){var d=new Date().getTime();t||(t=d),d-t>l&&(e(),t=d),x.globalObject.requestAnimationFrame&&(c=x.globalObject.requestAnimationFrame(a))}};return s(),{clear:function(){o=!0,x.globalObject.cancelAnimationFrame==null||x.globalObject.cancelAnimationFrame(c)}}},Ie=function(e,l,t){var o=this;this.startTime=0,this.isFinished=!1,this.step=function(){if(!o.isFinished){var c=new Date().getTime();o.startTime||(o.startTime=c);var s=(c-o.startTime)/o.duration;o.onProgress(s),s>=1&&o.finish()}},this.reset=function(){o.startTime=0,o.isFinished=!1},this.finish=function(){o.isFinished=!0,o.onFinish&&o.onFinish(o)},this.start=function(){o.isFinished||o.step()},this.duration=e,this.onProgress=l,this.onFinish=t},Oi=function(e,l,t,o,c){return new Ie(t,function(s){var a=e+(l-e)*s;o("stroke-dashoffset",""+a+c)},function(s){s.reset()})},Di=function(e,l,t,o,c){var s=!1;return new Ie(t,function(a){var d=s?1-a:a,m=[e[0]+(l[0]-e[0])*d,e[1]+(l[1]-e[1])*d];o("stroke-dasharray",""+m[0]+c+" "+m[1]+c)},function(a){s=!s,a.reset()})},Ti=function(e,l,t){var o=e.map(function(a){return bi.create(a).rgb}),c=0,s=1;return new Ie(l,function(a){var d=o[c],m=o[s];if(d&&m){var h=[Math.round(d[0]+(m[0]-d[0])*a),Math.round(d[1]+(m[1]-d[1])*a),Math.round(d[2]+(m[2]-d[2])*a)];t("stroke","rgb("+h+")")}},function(a){a.reset(),c=s,s=(s+1)%e.length})},Ai=function(e,l,t,o,c){return c===void 0&&(c="deg"),new Ie(t,function(s){var a=Math.round(e+(l-e)*s);o("transform","rotate("+a+c+")")},function(s){s.reset()})},Qe,Je,Xe,Ke,be=ae({root:function(){return i(Qe||(Qe=r([`
      display: inline-block;
      margin-left: -1px;
      margin-right: -1px;
    `])))},rootInline:function(){return i(Je||(Je=r([`
      margin-left: -0.0714285714285714em;
      margin-right: -0.0714285714285714em;
    `])))},icon:function(){return i(Xe||(Xe=r([`
      margin-bottom: -3px;
      border-radius: 50%;
      overflow: visible;
    `])))},iconInline:function(){return i(Ke||(Ke=r([`
      height: 1.1428571428571428em;
      width: 1.1428571428571428em;
      margin-bottom: -0.2428571428571428em;
      stroke-width: 0.10714285714285714em;
    `])))}}),Oe={big:{size:96,width:4,radius:32},normal:{size:48,width:2,radius:16},mini:{size:16,width:1.5,radius:6}},_i=function(e){return typeof e=="string"&&e in Oe},Qr=function(e){var l,t,o=e.size,c=e.className,s=e.dimmed,a=e.inline,d=e.width,m=e.color,h=_i(o)?Oe[o]:o,b=a?Oe.mini:h,C=u.useRef(null);if(oe&&!pi){var f=u.useRef(null),v=u.useContext(P),I=v.red,O=v.yellow,y=v.green,M=v.brand;u.useEffect(function(){var A=C.current,D=function(){if(A){var H;(H=A.style).setProperty.apply(H,arguments)}};return f.current=new Li([Oi(0,-230,1e3,D,"%"),Di([62,168],[187,43],2e3,D,"%"),Ai(0,360,2e3,D)].concat(s?[]:[Ti([I,O,y,M],1500,D)]),1e3/60),function(){var z=f.current;z&&z.stop(),A&&A.removeAttribute("style")}},[s,I,O,y,M])}return u.createElement("span",{className:S(be.root(),(l={},l[be.rootInline()]=a,l))},u.createElement("svg",{viewBox:"0 0 "+b.size+" "+b.size,className:S(be.icon(),c,(t={},t[be.iconInline()]=a,t)),width:b.size,height:b.size,fill:"none",stroke:m,strokeDasharray:10*b.radius/6+", "+27*b.radius/6,strokeDashoffset:"0",strokeWidth:d||b.width,ref:C,focusable:"false","aria-hidden":"true"},u.createElement("circle",{cx:b.size/2,cy:b.size/2,r:b.radius})))},en,nn,tn,rn,Z={spinnerCircleOffset:function(){return me(en||(en=r([`
        0% { stroke-dashoffset: 231.25%; }
        100% { stroke-dashoffset: 0%; }
      `])))},spinnerCircleLength:function(){return me(nn||(nn=r([`
        0% { stroke-dasharray: 62.5%, 168.75%; }
        50% {  stroke-dasharray: 187.5%, 43.75%; }
        100% { stroke-dasharray: 62.5%, 168.75%; }
      `])))},spinnerCircleRotate:function(){return me(tn||(tn=r([`
        100% { transform: rotate(360deg); }
      `])))},spinnerColor:function(e){return me(rn||(rn=r([`
        100%, 0% { stroke: `,`; }
        40% { stroke: `,`; }
        66% { stroke: `,`; }
        80%, 90% { stroke: `,`; }
      `])),e.red,e.yellow,e.green,e.brand)}},on,an,ln,cn,sn,dn,un,gn,mn,hn,bn,pn,fn,W=ae({circle:function(e){return i(on||(on=r([`
      stroke: `,`;

      `,`
    `])),e.spinnerColor,!oe&&`
          animation: `+Z.spinnerCircleOffset()+` 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,
            `+Z.spinnerCircleLength()+` 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite,
            `+Z.spinnerCircleRotate()+` 2s linear infinite,
            `+Z.spinnerColor(e)+` 6s ease-in-out infinite;
        `)},circleDimmedColor:function(e){return i(an||(an=r([`
      stroke: `,`;
    `])),e.spinnerDimmedColor)},circleWithoutColorAnimation:function(){return i(ln||(ln=r([`
      `,`
    `])),!oe&&`
          animation: `+Z.spinnerCircleOffset()+` 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,
          `+Z.spinnerCircleLength()+` 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite,
          `+Z.spinnerCircleRotate()+` 2s linear infinite;
        `)},captionColor:function(e){return i(cn||(cn=r([`
      color: `,`;
    `])),e.spinnerCaptionColor)},inline:function(){return i(sn||(sn=r([`
      font-size: inherit;
      line-height: inherit;
    `])))},mini:function(e){return i(dn||(dn=r([`
      margin-left: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),e.spinnerCaptionGapSmall,e.spinnerFontSizeSmall,e.spinnerLineHeightSmall)},small:function(e){return i(un||(un=r([`
      margin: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),e.spinnerCaptionMarginSmall,e.spinnerFontSizeSmall,e.spinnerLineHeightSmall)},normal:function(e){return i(gn||(gn=r([`
      display: block;
      font-size: `,`;
      line-height: `,`;
      margin-top: `,`;
    `])),e.spinnerFontSizeMedium,e.spinnerLineHeightMedium,e.spinnerCaptionGapMedium)},medium:function(e){return i(mn||(mn=r([`
      margin: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),e.spinnerCaptionMarginMedium,e.spinnerFontSizeMedium,e.spinnerLineHeightMedium)},big:function(e){return i(hn||(hn=r([`
      display: block;
      font-size: `,`;
      line-height: `,`;
      margin-top: `,`;
    `])),e.spinnerFontSizeLarge,e.spinnerLineHeightLarge,e.spinnerCaptionGapLarge)},large:function(e){return i(bn||(bn=r([`
      font-size: `,`;
      line-height: `,`;
      margin: `,`;
    `])),e.spinnerFontSizeLarge,e.spinnerLineHeightLarge,e.spinnerCaptionMarginLarge)},spinner:function(){return i(pn||(pn=r([`
      display: inline-block;
      text-align: center;
      line-height: normal;
    `])))},inner:function(){return i(fn||(fn=r([`
      display: inline-block;
    `])))}}),vn,re,Bi=["big","mini","normal"],Ni={root:"Spinner__root"},Ei=Te(vn=(re=(function(n){function e(){for(var t,o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return t=n.call.apply(n,[this].concat(c))||this,t.getProps=Be(e.defaultProps),t.renderSpinner=function(a,d,m){var h;return u.createElement(Qr,{size:a,className:S((h={},h[W.circle(t.theme)]=!d&&!t.props.color,h[W.circleDimmedColor(t.theme)]=d,h[W.circleWithoutColorAnimation()]=d||!!t.props.color,h)),dimmed:d,width:t.props.width,color:t.props.color,inline:m})},t.renderCaption=function(a,d){return u.createElement("span",{className:S(W[a](t.theme),W.captionColor(t.theme))},d)},t}Ae(e,n);var l=e.prototype;return l.render=function(){var o=this;return u.createElement(P.Consumer,null,function(c){return o.theme=c,o.renderMain()})},l.renderMain=function(){var o=this.props,c=o.caption,s=c===void 0?null:c,a=o.dimmed,d=o.inline,m=this.getProps().type;return u.createElement(_e,j({rootNodeRef:this.setRootNode},this.props),u.createElement("div",{"data-tid":Ni.root,className:W.spinner()},u.createElement("span",{className:W.inner()},this.renderSpinner(m,a,d)),s&&this.renderCaption(m,s)))},e})(u.Component),re.__KONTUR_REACT_UI__="Spinner",re.displayName="Spinner",re.defaultProps={type:"normal"},re.Types=Object.assign.apply(Object,[{}].concat(Bi.map(function(n){var e;return e={},e[n]=n,e}))),re))||vn,Wi=function(){return`
    box-shadow: none;
    cursor: default;
  `},pe=function(e,l,t){return`
    color: `+e+`;

    &:hover {
      color: `+l+`;
    }

    &:active {
      color: `+t+`;
    }
  `},In,xn,yn,wn,Sn,jn,Mn,Cn,kn,Ln,zn,On,Dn,Tn,An,_n,Bn,Nn,En,Wn,Pn,Rn,Pi=me(In||(In=r([`
  0% {
    text-decoration-color: inherit;
  }
  100% {
    text-decoration-color: transparent;
  }
`]))),Ri=function(e){var l=parseFloat(e.linkTextUnderlineOpacity)-1;return i(xn||(xn=r([`
    animation: `,` 1s linear !important; // override creevey
    animation-play-state: paused !important;
    animation-delay: `,`s !important;
    animation-fill-mode: forwards !important;
  `])),Pi,l)},w=ae({root:function(e){return i(yn||(yn=r([`
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
    `])),e.linkTextDecoration,e.linkTextDecorationStyle,e.linkTextUnderlineOffset,e.linkTextDecorationThickness,e.transitionDuration,e.transitionTimingFunction,e.linkTextDecorationColor,e.linkTextDecorationColor,e.linkHoverTextDecorationStyle,e.linkTextDecorationColor,Ri(e),e.linkHoverTextDecorationStyle)},lineFocus:function(e){return i(wn||(wn=r([`
      color: `,`;
    `])),e.linkHoverColor)},lineFocusSuccess:function(e){return i(Sn||(Sn=r([`
      color: `,` !important;
    `])),e.linkSuccessHoverColor)},lineFocusDanger:function(e){return i(jn||(jn=r([`
      color: `,` !important;
    `])),e.linkDangerHoverColor)},lineFocusGrayed:function(e){return i(Mn||(Mn=r([`
      color: `,` !important;
    `])),e.linkGrayedHoverColor)},button:function(e){return i(Cn||(Cn=r([`
      display: inline-block;
      line-height: `,`;
      padding-left: `,`;
      padding-right: `,`;
    `])),e.linkButtonLineHeight,e.linkButtonPaddingX,e.linkButtonPaddingX)},buttonOpened:function(e){return i(kn||(kn=r([`
      background: `,`;
    `])),e.btnDefaultActiveBg)},arrow:function(){return i(Ln||(Ln=r([`
      border: 4px solid transparent;
      border-bottom-width: 0;
      border-top-color: #a0a0a0;
      display: inline-block;
      margin-bottom: 3px;
      margin-left: 3px;
      vertical-align: middle;
    `])))},default:function(e){return i(zn||(zn=r([`
      `,`;
    `])),pe(e.linkColor,e.linkHoverColor,e.linkActiveColor))},success:function(e){return i(On||(On=r([`
      `,`;
    `])),pe(e.linkSuccessColor,e.linkSuccessHoverColor,e.linkSuccessActiveColor))},danger:function(e){return i(Dn||(Dn=r([`
      `,`;
    `])),pe(e.linkDangerColor,e.linkDangerHoverColor,e.linkDangerActiveColor))},grayed:function(e){return i(Tn||(Tn=r([`
      `,`;
    `])),pe(e.linkGrayedColor,e.linkGrayedHoverColor,e.linkGrayedActiveColor))},useGrayedFocus:function(e){return i(An||(An=r([`
      color: `,`;
    `])),e.linkDisabledColor)},focus:function(e){return i(_n||(_n=r([`
      text-decoration: `,`;
      outline: `,`;
    `])),e.linkHoverTextDecoration,e.linkFocusOutline)},disabled:function(e){return i(Bn||(Bn=r([`
      `,`;

      color: `,` !important; // override root color

      &:hover {
        color: `,`;
        text-decoration-color: `,`;
      }
    `])),Wi(),e.linkDisabledColor,e.linkDisabledColor,e.linkTextDecorationColor)},icon:function(){return i(Nn||(Nn=r([`
      display: inline-block;
    `])))},iconLeft:function(e){return i(En||(En=r([`
      margin-right: `,`;
    `])),e.linkIconMarginRight)},iconRight:function(e){return i(Wn||(Wn=r([`
      margin-left: `,`;
    `])),e.linkIconMarginLeft)},warning:function(e){return i(Pn||(Pn=r([`
      background-color: `,`;
      box-shadow: 0 0 0 2px `,`;
    `])),e.btnWarningSecondary,e.btnWarningSecondary)},error:function(e){return i(Rn||(Rn=r([`
      background-color: `,`;
      box-shadow: 0 0 0 2px `,`;
    `])),e.btnErrorSecondary,e.btnErrorSecondary)}}),Fn=function(e){var l=e.icon,t=e.loading,o=e.hasBothIcons,c=e.position,s=L.useContext(P);return u.createElement("span",{className:S(w.icon(),c==="left"&&w.iconLeft(s),c==="right"&&w.iconRight(s))},t&&!o?u.createElement(Ei,{caption:null,dimmed:!0,inline:!0}):l)},Fi=["disabled","icon","rightIcon","use","loading","_button","_buttonOpened","component","focused","error","warning","tabIndex","theme"],$n,ge,$i="a",Hi={root:"Link__root"},Ui=Te($n=(ge=(function(n){function e(){for(var t,o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return t=n.call.apply(n,[this].concat(c))||this,t.getProps=Be(e.defaultProps),t.state={focusedByTab:!1},t.getTabIndex=function(a){var d=a.nonInteractive,m=a.tabIndex,h=m===void 0?0:m;return d?-1:h},t.getRel=function(){if(Gi(t.props)){var a=t.props,d=a.rel,m=a.href;return!d&&m?"noopener"+(fi(m)?" noreferrer":""):d}},t.renderMain=function(a){var d,m=a.disabled,h=a.icon,b=a.rightIcon,C=a.use,f=a.loading,v=a._button,I=a._buttonOpened,O=a.component,y=a.focused,M=y===void 0?!1:y,A=a.error,D=a.warning,z=a.tabIndex;a.theme;var H=ve(a,Fi),ne=null;v&&(ne=u.createElement("span",{className:w.arrow()}));var te=!m&&(t.state.focusedByTab||M),se=h&&u.createElement(Fn,{icon:h,loading:f,position:"left"}),k=b&&u.createElement(Fn,{hasBothIcons:!!h&&!!b,icon:b,loading:f,position:"right"}),T=m||f,B=function(){switch(C){case"default":return w.default(t.theme);case"danger":return w.danger(t.theme);case"success":return w.success(t.theme);case"grayed":return w.grayed(t.theme)}},xe=function(){switch(C){case"default":return w.lineFocus(t.theme);case"danger":return w.lineFocusDanger(t.theme);case"success":return w.lineFocusSuccess(t.theme);case"grayed":return w.lineFocusGrayed(t.theme)}},de=j({},H,{className:S((d={},d[w.root(t.theme)]=!0,d[Vr()]=O==="button",d[w.focus(t.theme)]=te,d[w.disabled(t.theme)]=m||f,d[B()]=!0,d[w.useGrayedFocus(t.theme)]=C==="grayed"&&M,d[w.button(t.theme)]=!!v,d[w.buttonOpened(t.theme)]=!!I,d[w.warning(t.theme)]=D,d[w.error(t.theme)]=A,d[xe()]=te,d)),onClick:t.handleClick,onFocus:t.handleFocus,onBlur:t.handleBlur,tabIndex:t.getTabIndex({nonInteractive:T,tabIndex:z}),rel:t.getRel()}),R=O==="button"?{disabled:T}:{};return u.createElement(O,j({"data-tid":Hi.root},de,R,vi({disabled:m})),se,t.props.children,k,ne)},t.handleFocus=function(){t.props.disabled||x.globalObject.requestAnimationFrame==null||x.globalObject.requestAnimationFrame(function(){ze.isTabPressed&&t.setState({focusedByTab:!0})})},t.handleBlur=function(){t.setState({focusedByTab:!1})},t.handleClick=function(a){var d=t.props,m=d.onClick,h=d.disabled,b=d.loading;h&&(a.preventDefault(),a.stopPropagation()),m&&!h&&!b&&m(a)},t}Ae(e,n);var l=e.prototype;return l.render=function(){var o=this;return u.createElement(P.Consumer,null,function(c){return o.theme=o.props.theme?Ne.create(o.props.theme,c):c,u.createElement(_e,j({rootNodeRef:o.setRootNode},o.getProps()),o.renderMain)})},e})(u.Component),ge.__KONTUR_REACT_UI__="Link",ge.displayName="Link",ge.defaultProps={use:"default",component:$i},ge))||$n,Gi=function(e){return e.component==="a"},Hn,Un,Gn,Yn,Zn,Jr=function(e,l){return e+" "+l+" "+e},V=function(e,l,t,o,c,s){var a=l!==t;return i(Hn||(Hn=r([`
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
  `])),a?"initial":e,a?"linear-gradient("+l+", "+t+")":"none",o,s,c,N.arrow,o)},q=function(e,l,t,o,c,s){var a=l!==t;return i(Un||(Un=r([`
    background-color: `,`;
    background-image: `,`;
    box-shadow: 0 0 0 `," ",`;
    color: `,`;
  `])),a?"initial":e,a?"linear-gradient("+l+", "+t+")":"none",s,c,o)},Q=function(e,l,t,o){return i(Gn||(Gn=r([`
    &,
    &:hover {
      background-image: none !important; // override :hover styles
      background-color: `,` !important; // override :hover styles
      box-shadow: 0 0 0 `," ",` !important; // override :hover styles

      .`,` {
        box-shadow: `,`;
      }
    }
  `])),e,o,t,N.innerShadow,l)},Me=function(e,l,t,o){return i(Yn||(Yn=r([`
    font-size: `,`;
    box-sizing: border-box;
    padding: `,`;
    line-height: `,`;
  `])),e,Jr(o,t),l)},Ce=function(e,l){return i(Zn||(Zn=r([`
    padding: `,`;
    line-height: normal;
  `])),Jr(l,e))},Vn,qn,Qn,Jn,Xn,Kn,et,nt,tt,rt,it,ot,at,lt,ct,st,dt,ut,gt,mt,ht,bt,pt,ft,vt,It,xt,yt,wt,St,jt,Mt,Ct,kt,Lt,zt,Ot,Dt,Tt,At,_t,Bt,Nt,Et,Wt,Pt,Rt,Ft,$t,Ht,Ut,Gt,Yt,Zt,Vt,qt,Qt,Jt,Xt,Kt,er,nr,tr,rr,ir,or,ar,lr,cr,sr,dr,ur,gr,mr,hr,br,pr,fr,vr,N=Ii("button")({root:"root",arrow:"arrow",caption:"caption",text:"text",innerShadow:"inner-shadow",disabled:"disabled"}),g=ae({root:function(e){return i(Vn||(Vn=r([`
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
    `])),Vr(),ji(),e.transitionDuration,e.transitionTimingFunction,e.btnBorderColorTransition?", "+e.btnBorderColorTransition:"",e.btnBackgroundClip,N.innerShadow,e.btnIconHoverColor,N.disabled,e.btnIconDisabledColor,e.btnIconColor)},withArrowIconRightSmall:function(e){return i(qn||(qn=r([`
      padding-right: calc(`," + "," + ",`);
    `])),e.btnIconSizeSmall,e.btnWithIconPaddingSmall,e.btnWithIconPaddingSmall)},withArrowIconRightMedium:function(e){return i(Qn||(Qn=r([`
      padding-right: calc(`," + "," + ",`);
    `])),e.btnIconSizeMedium,e.btnWithIconPaddingMedium,e.btnWithIconPaddingMedium)},withArrowIconRightLarge:function(e){return i(Jn||(Jn=r([`
      padding-right: calc(`," + "," + ",`);
    `])),e.btnIconSizeLarge,e.btnWithIconPaddingLarge,e.btnWithIconPaddingLarge)},withArrowIconLeftSmall:function(e){return i(Xn||(Xn=r([`
      padding-left: calc(`," + "," + ",`);
    `])),e.btnIconSizeSmall,e.btnWithIconPaddingSmall,e.btnWithIconPaddingSmall)},withArrowIconLeftMedium:function(e){return i(Kn||(Kn=r([`
      padding-left: calc(`," + "," + ",`);
    `])),e.btnIconSizeMedium,e.btnWithIconPaddingMedium,e.btnWithIconPaddingMedium)},withArrowIconLeftLarge:function(e){return i(et||(et=r([`
      padding-left: calc(`," + "," + ",`);
    `])),e.btnIconSizeLarge,e.btnWithIconPaddingLarge,e.btnWithIconPaddingLarge)},simulatedPress:function(){return i(nt||(nt=r([`
      &:active .`,` {
        transform: translateY(1px);
      }
    `])),N.caption)},outline:function(){return i(tt||(tt=r([`
      border-radius: inherit;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `])))},outlineWarning:function(e){return i(rt||(rt=r([`
      box-shadow:
        0 0 0 `," ",`,
        inset 0 0 0 `," ",`;
    `])),e.btnOutlineWidth,e.btnBorderColorWarning,e.btnInsetWidth,e.btnInsetColor)},outlineError:function(e){return i(it||(it=r([`
      box-shadow:
        0 0 0 `," ",`,
        inset 0 0 0 `," ",`;
    `])),e.btnOutlineWidth,e.btnBorderColorError,e.btnInsetWidth,e.btnInsetColor)},outlineLink:function(){return i(ot||(ot=r([`
      cursor: default;
      box-shadow: none;
      left: -2px;
      right: -2px;
      bottom: -2px;
      top: -2px;
    `])))},outlineLinkWarning:function(e){return i(at||(at=r([`
      background-color: `,`;
    `])),e.btnWarningSecondary)},outlineLinkError:function(e){return i(lt||(lt=r([`
      background-color: `,`;
    `])),e.btnErrorSecondary)},sizeSmall:function(e){return i(ct||(ct=r([`
      border-radius: `,`;

      `,`;
    `])),e.btnBorderRadiusSmall,Me(e.btnFontSizeSmall,e.btnLineHeightSmall,e.btnPaddingXSmall,e.btnPaddingYSmall))},sizeSmallIE11:function(e){return i(st||(st=r([`
      `,`;
    `])),Ce(e.btnPaddingXSmall,e.btnPaddingYSmall))},sizeMedium:function(e){return i(dt||(dt=r([`
      border-radius: `,`;

      `,`;
    `])),e.btnBorderRadiusMedium,Me(e.btnFontSizeMedium,e.btnLineHeightMedium,e.btnPaddingXMedium,e.btnPaddingYMedium))},sizeMediumIE11:function(e){return i(ut||(ut=r([`
      `,`;
    `])),Ce(e.btnPaddingXMedium,e.btnPaddingYMedium))},sizeLarge:function(e){return i(gt||(gt=r([`
      border-radius: `,`;

      `,`;
    `])),e.btnBorderRadiusLarge,Me(e.btnFontSizeLarge,e.btnLineHeightLarge,e.btnPaddingXLarge,e.btnPaddingYLarge))},sizeLargeIE11:function(e){return i(mt||(mt=r([`
      `,`;
    `])),Ce(e.btnPaddingXLarge,e.btnPaddingYLarge))},sizeSmallWithIcon:function(e){return i(ht||(ht=r([`
      padding-left: `,`;
    `])),e.btnWithIconPaddingSmall)},sizeMediumWithIcon:function(e){return i(bt||(bt=r([`
      padding-left: `,`;
    `])),e.btnWithIconPaddingMedium)},sizeLargeWithIcon:function(e){return i(pt||(pt=r([`
      padding-left: `,`;
    `])),e.btnWithIconPaddingLarge)},sizeSmallWithRightIcon:function(e){return i(ft||(ft=r([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingSmall)},sizeMediumWithRightIcon:function(e){return i(vt||(vt=r([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingMedium)},sizeLargeWithRightIcon:function(e){return i(It||(It=r([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingLarge)},sizeSmallWithIconWithoutText:function(e){return i(xt||(xt=r([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingSmall)},sizeMediumWithIconWithoutText:function(e){return i(yt||(yt=r([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingMedium)},sizeLargeWithIconWithoutText:function(e){return i(wt||(wt=r([`
      padding-right: `,`;
    `])),e.btnWithIconPaddingLarge)},sizeSmallWithIconWithoutText5_3:function(e){return i(St||(St=r([`
      padding-left: `,`;
      padding-right: `,`;
    `])),e.btnWithIconPaddingSmall,e.btnWithIconPaddingSmall)},sizeMediumWithIconWithoutText5_3:function(e){return i(jt||(jt=r([`
      padding-left: `,`;
      padding-right: `,`;
    `])),e.btnWithIconPaddingMedium,e.btnWithIconPaddingMedium)},sizeLargeWithIconWithoutText5_3:function(e){return i(Mt||(Mt=r([`
      padding-left: `,`;
      padding-right: `,`;
    `])),e.btnWithIconPaddingLarge,e.btnWithIconPaddingLarge)},link:function(e){return i(Ct||(Ct=r([`
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
    `])),e.btnLinkBorderRadius,e.btnLinkColor,e.btnLinkHoverColor,e.btnLinkHoverTextDecoration,$.link(e))},linkLineHeight:function(){return i(kt||(kt=r([`
      line-height: inherit !important; // override size mixin
    `])))},linkLineHeightSafariFallback:function(){return i(Lt||(Lt=r([`
      /* Safari overrides 'underline' and 'border' if 'line-height' is used */
      margin: -1px 0 -2px;
    `])))},linkFocus:function(e){return i(zt||(zt=r([`
      & {
        color: `,`;
        text-decoration: `,`;
      }
    `])),e.btnLinkColor,e.btnLinkHoverTextDecoration)},linkDisabled:function(e){return i(Ot||(Ot=r([`
      cursor: default;

      &,
      &:hover:enabled,
      &:active:enabled {
        color: `,`;
      }
    `])),e.btnLinkDisabledColor)},focus:function(e){return i(Dt||(Dt=r([`
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
    `])),e.btnInsetWidth,e.btnOutlineColorFocus,e.btnFocusShadowWidth,e.btnBorderColorFocus)},disabled:function(e){return i(Tt||(Tt=r([`
      cursor: default;
      pointer-events: none;
      box-shadow: 0 0 0 `," ",`;

      background-image: none;
      background-color: `,`;
      color: `,`;
    `])),e.btnBorderWidth,e.btnDisabledBorderColor,e.btnDisabledBg,e.btnDisabledTextColor)},disabledWithoutOutline:function(e){return i(At||(At=r([`
      box-shadow: 0 0 0 `," ",`;
    `])),e.btnBorderWidth,e.btnDisabledBg)},arrowIconRoot:function(){return i(_t||(_t=r([`
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: content-box;
    `])))},arrowIconRootSmall:function(e){return i(Bt||(Bt=r([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),e.btnWithIconPaddingSmall,e.btnWithIconPaddingSmall,e.btnIconSizeSmall)},arrowIconRootMedium:function(e){return i(Nt||(Nt=r([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),e.btnWithIconPaddingMedium,e.btnWithIconPaddingMedium,e.btnIconSizeMedium)},arrowIconRootLarge:function(e){return i(Et||(Et=r([`
      padding: 0 `," 0 ",`;
      width: `,`;
    `])),e.btnWithIconPaddingLarge,e.btnWithIconPaddingLarge,e.btnIconSizeLarge)},arrowIconLeft:function(){return i(Wt||(Wt=r([`
      left: 0;
    `])))},default:function(e){return i(Pt||(Pt=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`;
      }
    `])),V(e.btnDefaultBg,e.btnDefaultBgStart,e.btnDefaultBgEnd,e.btnDefaultTextColor,e.btnDefaultBorderColor,e.btnBorderWidth),q(e.btnDefaultHoverBg,e.btnDefaultHoverBgStart,e.btnDefaultHoverBgEnd,e.btnDefaultHoverTextColor,e.btnDefaultHoverBorderColor,e.btnBorderWidth),$.default(e))},primary:function(e){return i(Rt||(Rt=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),V(e.btnPrimaryBg,e.btnPrimaryBgStart,e.btnPrimaryBgEnd,e.btnPrimaryTextColor,e.btnPrimaryBorderColor,e.btnBorderWidth),q(e.btnPrimaryHoverBg,e.btnPrimaryHoverBgStart,e.btnPrimaryHoverBgEnd,e.btnPrimaryHoverTextColor,e.btnPrimaryHoverBorderColor,e.btnBorderWidth),$.primary(e))},success:function(e){return i(Ft||(Ft=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),V(e.btnSuccessBg,e.btnSuccessBgStart,e.btnSuccessBgEnd,e.btnSuccessTextColor,e.btnSuccessBorderColor,e.btnBorderWidth),q(e.btnSuccessHoverBg,e.btnSuccessHoverBgStart,e.btnSuccessHoverBgEnd,e.btnSuccessHoverTextColor,e.btnSuccessHoverBorderColor,e.btnBorderWidth),$.success(e))},danger:function(e){return i($t||($t=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),V(e.btnDangerBg,e.btnDangerBgStart,e.btnDangerBgEnd,e.btnDangerTextColor,e.btnDangerBorderColor,e.btnBorderWidth),q(e.btnDangerHoverBg,e.btnDangerHoverBgStart,e.btnDangerHoverBgEnd,e.btnDangerHoverTextColor,e.btnDangerHoverBorderColor,e.btnBorderWidth),$.danger(e))},pay:function(e){return i(Ht||(Ht=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),V(e.btnPayBg,e.btnPayBgStart,e.btnPayBgEnd,e.btnPayTextColor,e.btnPayBorderColor,e.btnBorderWidth),q(e.btnPayHoverBg,e.btnPayHoverBgStart,e.btnPayHoverBgEnd,e.btnPayHoverTextColor,e.btnPayHoverBorderColor,e.btnBorderWidth),$.pay(e))},text:function(e){return i(Ut||(Ut=r([`
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
    `])),V(e.btnTextBg,"","",e.btnTextTextColor,e.btnTextBorderColor,e.btnBorderWidth),q(e.btnTextHoverBg,"","",e.btnTextHoverTextColor,e.btnTextHoverBorderColor,e.btnBorderWidth),$.text(e))},backless:function(e){return i(Gt||(Gt=r([`
      `,`;

      &:hover {
        `,`;
      }

      &:active {
        `,`
      }
    `])),V(e.btnBacklessBg,"","",e.btnBacklessTextColor,e.btnBacklessBorderColor,e.btnBorderWidth),q(e.btnBacklessHoverBg,"","",e.btnBacklessHoverTextColor,e.btnBacklessHoverBorderColor,e.btnBorderWidth),$.backless(e))},checked:function(e){var l=`
      background-image: none;
      box-shadow: 0 0 0 `+e.btnBorderWidth+" "+e.btnDefaultCheckedBorderColor+` !important;
      background-color: `+e.btnCheckedBg+` !important;
      color: `+e.btnCheckedTextColor+` !important;

      .`+N.innerShadow+` {
        box-shadow: `+e.btnCheckedShadow+`;
      }

      :enabled svg {
        color: `+e.btnCheckedTextColor+` !important;
      }
      :hover:enabled svg {
        color: `+e.btnCheckedTextColor+` !important;
      }
    `;return i(Yt||(Yt=r([`
      `,`

      &:hover:enabled,
      &:active:enabled,
      &:hover:active:enabled {
        `,`
      }
    `])),l,l)},checkedFocused:function(e){return i(Zt||(Zt=r([`
      &:hover:enabled,
      &:hover:active:enabled {
        box-shadow:
          inset 0 0 0 `," ",`,
          0 0 0 `," ",` !important;
        border-color: `,` !important;
      }
    `])),e.btnInsetWidth,e.btnOutlineColorFocus,e.btnFocusShadowWidth,e.btnBorderColorFocus,e.btnBorderColorFocus)},checkedDisabled:function(e){return i(Vt||(Vt=r([`
      box-shadow: 0 0 0 `," ",`;
      background-color: `,`;
      color: `,`;

      .`,` {
        box-shadow: `,`;
      }

      svg {
        color: `,` !important;
      }
    `])),e.btnBorderWidth,e.btnCheckedDisabledBorderColor,e.btnCheckedDisabledBg,e.btnCheckedDisabledColor,N.innerShadow,e.btnCheckedDisabledShadow,e.btnCheckedDisabledColor)},caption:function(){return i(qt||(qt=r([`
      position: relative;
      white-space: nowrap;
      display: inline-block;
      width: 100%;
      vertical-align: top;
    `])))},captionLink:function(){return i(Qt||(Qt=r([`
      display: inline;
      transform: none !important; // override root:active style
    `])))},captionDisabled:function(){return i(Jt||(Jt=r([`
      transform: none !important; // override root:active style
    `])))},wrap:function(e){return i(Xt||(Xt=r([`
      box-sizing: border-box;
      display: inline-block;
      line-height: normal;
      padding: `,`;
    `])),e.btnBorderWidth)},wrapSmall:function(e){return i(Kt||(Kt=r([`
      height: `,`;
    `])),e.btnHeightSmall)},wrapMedium:function(e){return i(er||(er=r([`
      height: `,`;
    `])),e.btnHeightMedium)},wrapLarge:function(e){return i(nr||(nr=r([`
      height: `,`;
    `])),e.btnHeightLarge)},narrow:function(){return i(tr||(tr=r([`
      padding-left: 5px;
      padding-right: 5px;
    `])))},noPadding:function(){return i(rr||(rr=r([`
      padding-left: 0;
      padding-right: 0;
    `])))},noRightPadding:function(){return i(ir||(ir=r([`
      padding-right: 0;
    `])))},wrapLink:function(){return i(or||(or=r([`
      padding: 0;
    `])))},borderless:function(){return i(ar||(ar=r([`
      &,
      &:active:hover,
      &:hover {
        box-shadow: none !important; // override root:hover style
      }
    `])))},backlessDisabled:function(e){return i(lr||(lr=r([`
      box-shadow: 0 0 0 1px `,`;
      background-color: transparent;
    `])),e.btnBacklessDisabledBorderColor)},textDisabled:function(){return i(cr||(cr=r([`
      background-color: transparent;
    `])))},loading:function(){return i(sr||(sr=r([`
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
    `])))},visibilityHidden:function(){return i(dr||(dr=r([`
      visibility: hidden;
    `])))}}),$=ae({default:function(e){return i(ur||(ur=r([`
      & {
        `,`;
      }
    `])),Q(e.btnDefaultActiveBg,e.btnDefaultActiveShadow,e.btnDefaultActiveBorderColor,e.btnBorderWidth))},primary:function(e){return i(gr||(gr=r([`
      & {
        `,`;
      }
    `])),Q(e.btnPrimaryActiveBg,e.btnPrimaryActiveShadow,e.btnPrimaryActiveBorderColor,e.btnBorderWidth))},success:function(e){return i(mr||(mr=r([`
      & {
        `,`;
      }
    `])),Q(e.btnSuccessActiveBg,e.btnSuccessActiveShadow,e.btnSuccessActiveBorderColor,e.btnBorderWidth))},danger:function(e){return i(hr||(hr=r([`
      & {
        `,`;
      }
    `])),Q(e.btnDangerActiveBg,e.btnDangerActiveShadow,e.btnDangerActiveBorderColor,e.btnBorderWidth))},pay:function(e){return i(br||(br=r([`
      & {
        `,`;
      }
    `])),Q(e.btnPayActiveBg,e.btnPayActiveShadow,e.btnPayActiveBorderColor,e.btnBorderWidth))},link:function(e){return i(pr||(pr=r([`
      & {
        color: `,`;
      }
    `])),e.btnLinkActiveColor)},text:function(e){return i(fr||(fr=r([`
      & {
        `,`;
      }
    `])),Q(e.btnTextActiveBg,"",e.btnTextActiveBg,e.btnBorderWidth))},backless:function(e){return i(vr||(vr=r([`
      & {
        `,`
      }
    `])),Q(e.btnBacklessActiveBg,"",e.btnBacklessActiveBorderColor,e.btnBorderWidth))}}),Ir,xr,yr,wr,Sr,jr,Mr,Cr,kr,Lr,zr,Or,Dr,_=ae({icon:function(){var e="'"+xi+"'";return i(Ir||(Ir=r([`
      display: inline-block;

      &::before {
        content: `,`;
      }
    `])),e)},iconSmall:function(e){return i(xr||(xr=r([`
      width: `,`;
    `])),e.btnIconSizeSmall)},iconSmallLeft:function(e){return i(yr||(yr=r([`
      margin-right: `,`;
    `])),e.btnIconGapSmallLeft)},iconSmallRight:function(e){return i(wr||(wr=r([`
      margin-left: `,`;
    `])),e.btnIconGapSmallRight)},iconMedium:function(e){return i(Sr||(Sr=r([`
      width: `,`;
    `])),e.btnIconSizeMedium)},iconMediumLeft:function(e){return i(jr||(jr=r([`
      margin-right: `,`;
    `])),e.btnIconGapMediumRight)},iconMediumRight:function(e){return i(Mr||(Mr=r([`
      margin-left: `,`;
    `])),e.btnIconGapMediumRight)},iconLarge:function(e){return i(Cr||(Cr=r([`
      width: `,`;
    `])),e.btnIconSizeLarge)},iconLargeLeft:function(e){return i(kr||(kr=r([`
      margin-right: `,`;
    `])),e.btnIconGapLargeLeft)},iconLargeRight:function(e){return i(Lr||(Lr=r([`
      margin-left: `,`;
    `])),e.btnIconGapLargeRight)},iconLeftLink:function(e){return i(zr||(zr=r([`
      margin-right: `,`;
    `])),e.btnLinkIconMarginRight)},iconRightLink:function(e){return i(Or||(Or=r([`
      margin-left: `,`;
    `])),e.btnLinkIconMarginLeft)},iconNoMargin:function(){return i(Dr||(Dr=r([`
      margin-right: 0;
      margin-left: 0;
    `])))}}),ke=function(e){var l=u.useContext(P);return u.createElement(Qr,j({dimmed:!0,className:S(W.circle(l),W.circleDimmedColor(l),W.circleWithoutColorAnimation())},e))},Yi=Ee({small:function(){return u.createElement(ke,{size:"mini"})},medium:function(){return u.createElement(ke,{size:{size:20,width:1,radius:6}})},large:function(){return u.createElement(ke,{size:{size:24,width:1.5,radius:8}})}},"LoadingIcon"),Xr=function(e){var l=e.size,t=e.isCentered,o=t===void 0?!0:t;return u.createElement("div",{"data-tid":De.spinner,className:o?g.loading():void 0},u.createElement(Yi,{size:l}))},Kr=function(e){return{small:parseInt(e.btnIconSizeSmall),medium:parseInt(e.btnIconSizeMedium),large:parseInt(e.btnIconSizeLarge)}},Zi=function(e,l){var t=L.useContext(P);if(e&&Zr(e)){var o,c=Kr(t);return u.cloneElement(e,{size:(o=e.props.size)!=null?o:c[l]})}return e},Tr=function(e){var l,t=e.icon,o=e.use,c=e.position,s=e.hasChildren,a=e.loading,d=a===void 0?!1:a,m=e.hasBothIcons,h=m===void 0?!1:m,b=e.size,C=b===void 0?"small":b,f=L.useContext(P),v=o==="link",I=function(){switch(C){case"large":return[_.iconLarge(f),c==="left"?_.iconLargeLeft(f):_.iconLargeRight(f)];case"medium":return[_.iconMedium(f),c==="left"?_.iconMediumLeft(f):_.iconMediumRight(f)];case"small":default:return[_.iconSmall(f),c==="left"?_.iconSmallLeft(f):_.iconSmallRight(f)]}},O={display:"inline-flex",alignItems:"center"},y=Zi(t,C);return u.createElement("span",{style:O,className:S(_.icon(),I(),(l={},l[_.iconNoMargin()]=!s,l[_.iconLeftLink(f)]=v&&c==="left",l[_.iconRightLink(f)]=v&&c==="right",l))},d&&!h?u.createElement(Xr,{isCentered:!1,size:C}):y)},Vi=le("ArrowARightIcon16Light",function(n,e){return u.createElement(ce,j({ref:e},n),u.createElement("path",{d:"M8.73 2.854a.5.5 0 1 1 .708-.708l4.006 4.006a1.906 1.906 0 0 1 0 2.696l-4.006 4.006a.5.5 0 0 1-.707-.708l4.005-4.005A.914.914 0 0 0 12.852 8H2.5a.5.5 0 0 1 0-1h10.352a.914.914 0 0 0-.116-.14L8.732 2.853Z"}))}),qi=le("ArrowARightIcon20Light",function(n,e){return u.createElement(ce,j({ref:e,viewBoxSize:20},n),u.createElement("path",{d:"M11.365 3.291a.5.5 0 1 1 .707-.707l5.237 5.237a2.375 2.375 0 0 1 0 3.358l-5.237 5.237a.5.5 0 1 1-.707-.707l5.237-5.237c.139-.139.242-.3.309-.472H2.5a.5.5 0 1 1 0-1h14.41a1.37 1.37 0 0 0-.308-.472L11.365 3.29Z"}))}),Qi=le("ArrowARightIcon24Regular",function(n,e){return u.createElement(ce,j({ref:e,viewBoxSize:24},n),u.createElement("path",{d:"M13.444 4.744a.875.875 0 0 1 1.237-1.238l6.284 6.284a3.125 3.125 0 0 1 0 4.42l-6.284 6.284a.875.875 0 1 1-1.237-1.238l6.284-6.284c.031-.031.06-.063.088-.097H3a.875.875 0 0 1 0-1.75h16.816a1.415 1.415 0 0 0-.088-.097l-6.284-6.284Z"}))}),Ji=Ee({small:function(){return u.createElement(Vi,null)},medium:function(){return u.createElement(qi,null)},large:function(){return u.createElement(Qi,null)}},"ArrowRightIcon"),Xi=le("ArrowALeftIcon16Light",function(n,e){return u.createElement(ce,j({ref:e},n),u.createElement("path",{d:"M7.27 12.146a.5.5 0 1 1-.708.707L2.556 8.849a1.906 1.906 0 0 1 0-2.696l4.006-4.006a.5.5 0 1 1 .707.707L3.263 6.86a.91.91 0 0 0-.115.14H13.5a.5.5 0 0 1 0 1H3.148a.91.91 0 0 0 .115.142l4.006 4.005Z"}))}),Ki=le("ArrowALeftIcon20Light",function(n,e){return u.createElement(ce,j({ref:e,viewBoxSize:20},n),u.createElement("path",{d:"M8.635 15.709a.5.5 0 1 1-.707.707L2.69 11.179a2.375 2.375 0 0 1 0-3.358l5.237-5.237a.5.5 0 0 1 .707.707L3.398 8.528A1.37 1.37 0 0 0 3.09 9H17.5a.5.5 0 0 1 0 1H3.09c.066.172.17.333.308.472l5.237 5.237Z"}))}),eo=le("ArrowALeftIcon24Regular",function(n,e){return u.createElement(ce,j({ref:e,viewBoxSize:24},n),u.createElement("path",{d:"M10.556 19.256a.875.875 0 1 1-1.237 1.238L3.035 14.21a3.125 3.125 0 0 1 0-4.42l6.284-6.284a.875.875 0 0 1 1.237 1.238l-6.284 6.284c-.031.031-.06.064-.088.097H21a.875.875 0 1 1 0 1.75H4.184c.028.034.057.066.088.097l6.284 6.284Z"}))}),no=Ee({small:function(){return u.createElement(Xi,null)},medium:function(){return u.createElement(Ki,null)},large:function(){return u.createElement(eo,null)}},"ArrowLeftIcon"),to=function(e){var l=e.arrow,t=e.size,o=L.useContext(P),c=function(){var b;return S(g.arrowIconRoot(),N.arrow,(b={},b[g.arrowIconRootSmall(o)]=t==="small",b[g.arrowIconRootMedium(o)]=t==="medium",b[g.arrowIconRootLarge(o)]=t==="large",b[g.arrowIconLeft()]=l==="left",b))},s={right:Ji,left:no},a=l==="left"?"left":"right",d=s[a],m=u.createElement("div",{className:c()},u.createElement(d,{size:t}));return m};function ro(n,e){var l=n.arrow,t=n.size,o=n.use,c=o!=="link"&&(l===!0||l==="left"),s=c?S(l===!0&&t==="small"&&g.withArrowIconRightSmall(e),l===!0&&t==="medium"&&g.withArrowIconRightMedium(e),l===!0&&t==="large"&&g.withArrowIconRightLarge(e),l==="left"&&t==="small"&&g.withArrowIconLeftSmall(e),l==="left"&&t==="medium"&&g.withArrowIconLeftMedium(e),l==="left"&&t==="large"&&g.withArrowIconLeftLarge(e)):"",a=c?u.createElement(to,n):null;return[s,a]}var io=function(e){return Ne.create({linkTextDecorationStyle:e.btnLinkTextDecorationStyle,linkTextUnderlineOffset:e.btnLinkTextUnderlineOffset,linkHoverTextDecorationStyle:e.btnLinkHoverTextDecorationStyle,linkTextUnderlineOpacity:e.btnLinkTextUnderlineOpacity,linkTextDecorationColor:e.btnLinkTextDecorationColor,linkTextDecorationThickness:e.btnLinkTextDecorationThickness,linkDisabledColor:e.btnLinkDisabledColor,linkColor:e.btnLinkColor,linkHoverColor:e.btnLinkHoverColor,linkActiveColor:e.btnLinkActiveColor,linkHoverTextDecoration:e.btnLinkHoverTextDecoration,linkIconMarginRight:e.btnLinkIconMarginRight},e)},fe,ie,oo=["children"],ao=["corners","active","disabled","borderless","checked","error","warning","loading","narrow","arrow","icon","rightIcon","_noPadding","_noRightPadding","visuallyFocused","align","disableFocus","width","tabIndex","component","use","theme"],lo="button",De={rootElement:"Button__rootElement",root:"Button__root",spinner:"Button__spinner"},co=function(e){var l=e.children,t=ve(e,oo);return u.createElement("span",t,l)},so=yi(fe=Te(fe=(ie=(function(n){function e(){for(var t,o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return t=n.call.apply(n,[this].concat(c))||this,t.getProps=Be(e.defaultProps),t.state={focusedByTab:!1},t.node=null,t.renderMain=function(a){var d,m,h,b=a.corners,C=a.active,f=a.disabled,v=a.borderless,I=a.checked,O=a.error,y=a.warning,M=a.loading,A=a.narrow;a.arrow;var D=a.icon,z=a.rightIcon,H=a._noPadding,ne=a._noRightPadding,te=a.visuallyFocused,se=a.align,k=a.disableFocus,T=a.width,B=a.tabIndex;a.component,a.use,a.theme;var xe=ve(a,ao),de=t.getProps(),R=de.use,he=de.component,ye=de.children,Re=t.getSizeClassName(),U=t.state.focusedByTab||te,G=R==="link",Fe=ro(j({},t.props,{isFocused:!!U,size:t.size}),t.theme),ii=Fe[0],oi=Fe[1],ai=!["default","backless"].includes(R),ue=f||M,li=S.apply(void 0,[g.root(t.theme),g[R](t.theme),Re,A&&g.narrow(),H&&g.noPadding(),ne&&g.noRightPadding(),ii].concat(ue?[g.disabled(t.theme),ai&&g.disabledWithoutOutline(t.theme),I&&g.checkedDisabled(t.theme),v&&g.borderless(),R==="backless"&&g.backlessDisabled(t.theme),R==="text"&&g.textDisabled(),N.disabled]:[C&&!I&&$[R](t.theme),U&&g.focus(t.theme),I&&g.checked(t.theme),I&&U&&g.checkedFocused(t.theme),v&&!I&&!U&&g.borderless()])),we=j({},xe,{className:li,style:j({textAlign:se},b),onFocus:t.handleFocus,onBlur:t.handleBlur,tabIndex:t.getTabIndex({disableFocus:k,disabled:ue,tabIndex:B})}),Se={className:S(N.root,(d={},d[g.wrap(t.theme)]=!0,d[t.getSizeWrapClassName()]=!0,d)),style:{width:T}},ci=he==="button"?{disabled:ue}:{},si=null,$e=null;if((!U||G)&&!ue){var Y;$e=u.createElement("div",{className:S(g.outline(),(Y={},Y[g.outlineWarning(t.theme)]=y,Y[g.outlineError(t.theme)]=O,Y[g.outlineLink()]=G,Y[g.outlineLinkWarning(t.theme)]=G&&y,Y[g.outlineLinkError(t.theme)]=G&&O,Y))})}var He={use:R,size:t.size,hasChildren:!!ye,loading:M||!1},di=D&&u.createElement(Tr,j({},He,{position:"left",icon:D})),ui=z&&u.createElement(Tr,j({},He,{hasBothIcons:!!D&&!!z,position:"right",icon:z}));if(G){var F;we.className=S((F={},F[g.root(t.theme)]=!0,F[Re]=!0,F[g.link(t.theme)]=!0,F[g.linkLineHeight()]=!Ye,F[g.linkLineHeightSafariFallback()]=Ye,F[g.linkFocus(t.theme)]=U,F[g.linkDisabled(t.theme)]=ue,F)),Object.assign(Se,{className:S(g.wrap(t.theme),g.wrapLink()),style:{width:Se.style.width}}),we.style.textAlign=void 0}var Ue=M&&!D&&!z,gi=Ue&&u.createElement(Xr,{size:t.size}),Ge=u.createElement("div",{className:S(g.caption(),N.caption,(m={},m[g.captionLink()]=G,m[g.captionDisabled()]=!I&&f,m))},gi,di,u.createElement("span",{className:S(N.text,(h={},h[g.visibilityHidden()]=Ue,h))},ye),ui);G&&!M&&(Ge=u.createElement(P.Provider,{value:io(t.theme)},u.createElement(Ui,{focused:U,disabled:f,icon:t.renderIcon2022(D),rightIcon:t.renderIcon2022(z),tabIndex:-1,component:co},ye)));var mi=he;return u.createElement("span",j({},Se,{"data-tid":De.root}),u.createElement(mi,j({"data-tid":De.rootElement,ref:t._ref},we,ci),si,$e,oi,Ge))},t.handleFocus=function(a){!t.props.disabled&&!t.props.disableFocus&&(x.globalObject.requestAnimationFrame==null||x.globalObject.requestAnimationFrame(function(){ze.isTabPressed&&t.setState({focusedByTab:!0})}),t.props.onFocus==null||t.props.onFocus(a))},t.handleBlur=function(a){t.setState({focusedByTab:!1}),!t.props.disabled&&!t.props.disableFocus&&(t.props.onBlur==null||t.props.onBlur(a))},t._ref=function(a){t.node=a},t}Ae(e,n);var l=e.prototype;return l.componentDidMount=function(){this.props.autoFocus&&(ze.isTabPressed=!0,this.focus())},e.getDerivedStateFromProps=function(o){return o.loading||o.disabled?{focusedByTab:!1}:null},l.focus=function(){var o;(o=this.node)==null||o.focus()},l.blur=function(){var o;(o=this.node)==null||o.blur()},l.render=function(){var o=this;return u.createElement(P.Consumer,null,function(c){return o.theme=o.props.theme?Ne.create(o.props.theme,c):c,u.createElement(_e,j({rootNodeRef:o.setRootNode},o.props),o.renderMain)})},l.getTabIndex=function(o){var c=o.disableFocus,s=o.disabled,a=o.tabIndex,d=a===void 0?0:a;return c||s?-1:d},l.renderIcon2022=function(o){if(o&&Zr(o)){var c,s=Kr(this.theme);return u.cloneElement(o,{size:(c=o.props.size)!=null?c:s[this.size]})}return o},l.getSizeClassName=function(){var o=this.getProps(),c=o.icon,s=o.rightIcon,a=o.children,d=wi(this.theme,"5.3");switch(this.size){case"large":{var m,h,b=(m={},m[g.sizeLargeIE11(this.theme)]=oe||je,m[g.sizeLargeWithIcon(this.theme)]=!!c,m[g.sizeLargeWithIconWithoutText(this.theme)]=!!c&&!a,m),C=(h={},h[g.sizeLargeWithRightIcon(this.theme)]=!!s,h[g.sizeLargeWithIconWithoutText5_3(this.theme)]=(!!c||!!s)&&!a,h);return S(g.sizeLarge(this.theme),b,d&&C)}case"medium":{var f,v,I=(f={},f[g.sizeMediumIE11(this.theme)]=oe||je,f[g.sizeMediumWithIcon(this.theme)]=!!c,f[g.sizeMediumWithIconWithoutText(this.theme)]=!!c&&!a,f),O=(v={},v[g.sizeMediumWithRightIcon(this.theme)]=!!s,v[g.sizeMediumWithIconWithoutText5_3(this.theme)]=(!!c||!!s)&&!a,v);return S(g.sizeMedium(this.theme),I,d&&O)}case"small":default:{var y,M,A=(y={},y[g.sizeSmallIE11(this.theme)]=oe||je,y[g.sizeSmallWithIcon(this.theme)]=!!c,y[g.sizeSmallWithIconWithoutText(this.theme)]=!!c&&!a,y),D=(M={},M[g.sizeSmallWithRightIcon(this.theme)]=!!s,M[g.sizeSmallWithIconWithoutText5_3(this.theme)]=(!!c||!!s)&&!a,M);return S(g.sizeSmall(this.theme),A,d&&D)}}},l.getSizeWrapClassName=function(){switch(this.size){case"large":return g.wrapLarge(this.theme);case"medium":return g.wrapMedium(this.theme);case"small":default:return g.wrapSmall(this.theme)}},e})(u.Component),ie.__KONTUR_REACT_UI__="Button",ie.displayName="Button",ie.__BUTTON__=!0,ie.defaultProps={use:"default",type:"button",component:lo},ie))||fe)||fe;function uo(n){return Array.isArray(n)&&n.length===4}const go=(n,e)=>{const l=n.createElement("span");return l.style.display="none",n.body.append(l),t=>{l.style.color="",l.style.color=t;let o=/^rgba?\(/.test(l.style.color)?l.style.color:e(l).color;if(l.remove(),!/^rgba?\(/.test(o))return t;o.startsWith("rgb(")&&(o=o.replace(/rgb\((.*)\)$/,"rgba($1, 1)"));const c=(o.match(/[\d.]+/g)||[]).map(Number);return uo(c)?c:t}},mo="​",ei="-0.1875em",ho=()=>{var n;return!x.isBrowser(x.globalObject)||!((n=x.globalObject.crypto)!=null&&n.getRandomValues)?Date.now().toString(16):("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,e=>(e^x.globalObject.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))};function bo(n,e){const t=new RegExp(`${e}\\s*=\\s*["']([^"']*)["']`,"g").exec(n);return t?t[1]:null}function po(n,e,l){const t=new RegExp(`(${e}\\s*=\\s*['"])[^'"]*(['"])`,"g");return n.replace(t,`$1${l}$2`)}const fo=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8.37512C7 7.06344 8.06332 6.00012 9.375 6.00012C10.6867 6.00012 11.75 7.06344 11.75 8.37512C11.75 9.68679 10.6867 10.7501 9.375 10.7501C8.06332 10.7501 7 9.68679 7 8.37512ZM9.375 7.50012C8.89175 7.50012 8.5 7.89187 8.5 8.37512C8.5 8.85837 8.89175 9.25012 9.375 9.25012C9.85824 9.25012 10.25 8.85837 10.25 8.37512C10.25 7.89187 9.85824 7.50012 9.375 7.50012Z" fill="#222222"/>
                      <path d="M12.6599 13.2563C13.0993 12.8169 13.8116 12.8169 14.2509 13.2563L16.0631 15.0684C16.356 15.3613 16.8309 15.3613 17.1237 15.0684C17.4166 14.7755 17.4166 14.3007 17.1237 14.0078L15.3116 12.1956C14.2865 11.1705 12.6244 11.1705 11.5993 12.1956L7.21967 16.5752C6.92677 16.8681 6.92677 17.343 7.21967 17.6359C7.51256 17.9288 7.98743 17.9288 8.28033 17.6359L12.6599 13.2563Z" fill="#222222"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 6C4.25 3.92893 5.92893 2.25 8 2.25H13.2564C13.9858 2.25 14.6853 2.53973 15.201 3.05546L18.9445 6.79902C19.4603 7.31475 19.75 8.01422 19.75 8.74357V18C19.75 20.0711 18.0711 21.75 16 21.75H8C5.92893 21.75 4.25 20.0711 4.25 18V6ZM8 3.75C6.75736 3.75 5.75 4.75736 5.75 6V18C5.75 19.2426 6.75736 20.25 8 20.25H16C17.2426 20.25 18.25 19.2426 18.25 18V8.74357C18.25 8.41205 18.1183 8.0941 17.8839 7.85968L14.1403 4.11612C13.9059 3.8817 13.588 3.75 13.2564 3.75H8Z" fill="#222222"/>
                    </svg>`,vo=typeof window<"u"?L.useLayoutEffect:L.useEffect,We=({url:n,align:e,color:l,size:t,viewBoxSize:o,fetcher:c=window.fetch,onLoad:s,onError:a})=>{const[d,m]=L.useState(),[h,b]=L.useState();if(vo(()=>{function f(v){b(bo(v,"viewBox"));const I=v.split(`
`).filter(Boolean).slice(1,-1).join(`
`);m(po(I,"fill",l||"currentColor"))}c(n).then(v=>{if(v.ok)return v.text();throw Error(`Failed to fetch image: ${n}`)}).then(v=>{f(v),s==null||s()}).catch(()=>{f(fo),a==null||a()})},[c,n,l]),!d)return null;const C={display:"block",flexShrink:0,marginBottom:e==="none"||e==="center"?void 0:ei};return p.jsx("svg",{style:C,width:t,height:t,viewBox:h??`0 0 ${o} ${o}`,xmlns:"http://www.w3.org/2000/svg",dangerouslySetInnerHTML:{__html:d}})};We.displayName="IconSVGEmbed";We.__docgenInfo={description:"",methods:[],displayName:"IconSVGEmbed",props:{url:{required:!0,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"number"},description:""},align:{required:!0,tsType:{name:"union",raw:'"center" | "baseline" | "none"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"baseline"'},{name:"literal",value:'"none"'}]},description:""},viewBoxSize:{required:!0,tsType:{name:"number"},description:""},color:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fetcher:{required:!1,tsType:{name:'unknown["fetch"]',raw:'(typeof window)["fetch"]'},description:"",defaultValue:{value:"window.fetch",computed:!0}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function Io(n){const[e,l,t,o]=n;return`
0 0 0 0 ${e/255}
0 0 0 0 ${l/255}
0 0 0 0 ${t/255}
0 0 0 ${o} 0`}const Le={16:{light:!0,regular:!0,solid:!0},20:{light:!0,regular:!0,solid:!0},24:{light:!1,regular:!0,solid:!0},32:{light:!1,regular:!0,solid:!1},64:{light:!1,regular:!0,solid:!1}};function ni(n,e){var c;const l=xo(e);if((c=Le[n])!=null&&c[l])return[n,l];function t(){var a;const s=Object.keys(Le).map(Number).sort((d,m)=>m-d);for(const d of s)if((a=Le[d])!=null&&a[l])return d;return s[s.length-1]}return[t(),l]}function xo(n){switch(n){case"light":case"regular":case"solid":return n;default:return"regular"}}const yo=(n,e,l)=>{const[t,o]=ni(e,l);return`https://s.kontur.ru/common-v2/icons-ui/black/${n}/${n}-${t}-${o}.svg`},ti=L.createContext(yo),wo=()=>L.useContext(ti),ri=({children:n,value:e})=>p.jsx(ti.Provider,{value:e.getIconUrl,children:n});ri.__docgenInfo={description:"",methods:[],displayName:"CdnIconProvider",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  getIconUrl: CdnIconContextType;
}`,signature:{properties:[{key:"getIconUrl",value:{name:"signature",type:"function",raw:"(icon: string, size: number, type: string) => string",signature:{arguments:[{type:{name:"string"},name:"icon"},{type:{name:"number"},name:"size"},{type:{name:"string"},name:"type"}],return:{name:"string"}},required:!0}}]}},description:""}}};const So="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4NCiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDguMzc1MTJDNyA3LjA2MzQ0IDguMDYzMzIgNi4wMDAxMiA5LjM3NSA2LjAwMDEyQzEwLjY4NjcgNi4wMDAxMiAxMS43NSA3LjA2MzQ0IDExLjc1IDguMzc1MTJDMTEuNzUgOS42ODY3OSAxMC42ODY3IDEwLjc1MDEgOS4zNzUgMTAuNzUwMUM4LjA2MzMyIDEwLjc1MDEgNyA5LjY4Njc5IDcgOC4zNzUxMlpNOS4zNzUgNy41MDAxMkM4Ljg5MTc1IDcuNTAwMTIgOC41IDcuODkxODcgOC41IDguMzc1MTJDOC41IDguODU4MzcgOC44OTE3NSA5LjI1MDEyIDkuMzc1IDkuMjUwMTJDOS44NTgyNCA5LjI1MDEyIDEwLjI1IDguODU4MzcgMTAuMjUgOC4zNzUxMkMxMC4yNSA3Ljg5MTg3IDkuODU4MjQgNy41MDAxMiA5LjM3NSA3LjUwMDEyWiIgZmlsbD0iIzIyMjIyMiIvPg0KICA8cGF0aCBkPSJNMTIuNjU5OSAxMy4yNTYzQzEzLjA5OTMgMTIuODE2OSAxMy44MTE2IDEyLjgxNjkgMTQuMjUwOSAxMy4yNTYzTDE2LjA2MzEgMTUuMDY4NEMxNi4zNTYgMTUuMzYxMyAxNi44MzA5IDE1LjM2MTMgMTcuMTIzNyAxNS4wNjg0QzE3LjQxNjYgMTQuNzc1NSAxNy40MTY2IDE0LjMwMDcgMTcuMTIzNyAxNC4wMDc4TDE1LjMxMTYgMTIuMTk1NkMxNC4yODY1IDExLjE3MDUgMTIuNjI0NCAxMS4xNzA1IDExLjU5OTMgMTIuMTk1Nkw3LjIxOTY3IDE2LjU3NTJDNi45MjY3NyAxNi44NjgxIDYuOTI2NzcgMTcuMzQzIDcuMjE5NjcgMTcuNjM1OUM3LjUxMjU2IDE3LjkyODggNy45ODc0MyAxNy45Mjg4IDguMjgwMzMgMTcuNjM1OUwxMi42NTk5IDEzLjI1NjNaIiBmaWxsPSIjMjIyMjIyIi8+DQogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4yNSA2QzQuMjUgMy45Mjg5MyA1LjkyODkzIDIuMjUgOCAyLjI1SDEzLjI1NjRDMTMuOTg1OCAyLjI1IDE0LjY4NTMgMi41Mzk3MyAxNS4yMDEgMy4wNTU0NkwxOC45NDQ1IDYuNzk5MDJDMTkuNDYwMyA3LjMxNDc1IDE5Ljc1IDguMDE0MjIgMTkuNzUgOC43NDM1N1YxOEMxOS43NSAyMC4wNzExIDE4LjA3MTEgMjEuNzUgMTYgMjEuNzVIOEM1LjkyODkzIDIxLjc1IDQuMjUgMjAuMDcxMSA0LjI1IDE4VjZaTTggMy43NUM2Ljc1NzM2IDMuNzUgNS43NSA0Ljc1NzM2IDUuNzUgNlYxOEM1Ljc1IDE5LjI0MjYgNi43NTczNiAyMC4yNSA4IDIwLjI1SDE2QzE3LjI0MjYgMjAuMjUgMTguMjUgMTkuMjQyNiAxOC4yNSAxOFY4Ljc0MzU3QzE4LjI1IDguNDEyMDUgMTguMTE4MyA4LjA5NDEgMTcuODgzOSA3Ljg1OTY4TDE0LjE0MDMgNC4xMTYxMkMxMy45MDU5IDMuODgxNyAxMy41ODggMy43NSAxMy4yNTY0IDMuNzVIOFoiIGZpbGw9IiMyMjIyMjIiLz4NCjwvc3ZnPg==",jo=16,Mo="regular",Co={root:"CdnIcon__root"},Ar="#000",_r=typeof window<"u"?L.useLayoutEffect:L.useEffect,E=L.forwardRef(({style:n,icon:e,url:l,size:t=jo,weight:o=Mo,color:c,align:s="center",embed:a,lazy:d,alt:m="",onLoad:h,onError:b,...C},f)=>{const v=L.useRef(null),I=L.useRef(null),[O,y]=L.useState(c??Ar),[M,A]=L.useState(null),D=wo();_r(()=>{const k=v.current;if(!k||!k.attachShadow)return;const T=k.ownerDocument.createElement("span");k.append(T);try{const B=T.attachShadow({mode:"closed"});B.textContent=mo}catch(B){console.error(B)}return()=>T.remove()},[]),L.useLayoutEffect(()=>{if(!x.isBrowser(x.globalObject)||!I.current)return;const k=go(x.globalObject.document,x.globalObject.getComputedStyle);if(c)y(k(c));else if(I.current&&x.isBrowser(x.globalObject)){const T=()=>I.current&&x.isBrowser(x.globalObject)?x.globalObject.getComputedStyle(I.current).color:Ar,B=T();B?y(k(B)):setTimeout(()=>y(k(T())))}},[c]),_r(()=>{M&&A(null)},[l,e]),l&&e&&console.warn("need set only one of prop: icon or url");let z;l?z=l:e?z=D(e,t,o):(z="",console.warn("need set one of prop: icon or url"));const H={display:s==="center"?"inline-flex":"inline-block",alignItems:s,...n},ne=k=>{A(So),b==null||b(k)},te=k=>{h==null||h(k)};return p.jsxs("span",{"data-tid":Co.root,ref:f,style:H,...C,children:[s==="center"&&p.jsx("span",{ref:v}),a?p.jsx(We,{url:z,color:c,size:t,align:s,viewBoxSize:ni(t,o)[0],onLoad:()=>h==null?void 0:h(),onError:()=>b==null?void 0:b()}):se(M??z)]});function se(k){const T=ho(),B={display:"block",width:t,height:t,flexShrink:0,marginBottom:s!=="none"&&s!=="center"?ei:void 0,objectFit:"cover",filter:`url(#${T})`,userSelect:"none",pointerEvents:"none"};return p.jsxs(p.Fragment,{children:[p.jsx("img",{width:t,height:t,style:B,src:k,loading:d?"lazy":void 0,onLoad:te,onError:ne,alt:m}),p.jsx("span",{ref:I,"aria-hidden":"true",style:{position:"fixed",width:0,height:0},children:typeof O!="string"&&p.jsx("svg",{width:0,height:0,children:p.jsx("defs",{children:p.jsx("filter",{id:T,children:p.jsx("feColorMatrix",{type:"matrix",in:"SourceGraphic",colorInterpolationFilters:"sRGB",values:`${Io(O)}`})})})})})]})}});E.displayName="CdnIcon";E.__docgenInfo={description:"",methods:[],displayName:"CdnIcon",props:{size:{defaultValue:{value:"16",computed:!1},required:!1},weight:{defaultValue:{value:'"regular"',computed:!1},required:!1},align:{defaultValue:{value:'"center"',computed:!1},required:!1},alt:{defaultValue:{value:'""',computed:!1},required:!1}}};const ko={title:"UI CDN Components/CdnIcon",parameters:{creevey:{skip:!0}}},Pe=({children:n})=>p.jsx("div",{style:{display:"flex",gap:"16px",flexDirection:"column"},children:n}),J=()=>p.jsxs(Si,{vertical:!0,gap:16,children:[p.jsxs("div",{children:["Я иконка в тексте ",p.jsx(E,{icon:"animal-paw"}),". Привет!"]}),p.jsx(so,{size:"small",icon:p.jsx(E,{icon:"animal-paw",size:16}),children:"Я кнопка"})]});J.storyName="Иконка в тексте и кнопке";const X=()=>{const n=[14,16,20,24,32,64];return p.jsxs(Pe,{children:[p.jsx("div",{children:n.map(e=>p.jsx(E,{icon:"doc",size:e,weight:"light"},e))}),p.jsx("div",{children:n.map(e=>p.jsx(E,{icon:"doc",size:e,weight:"regular"},e))}),p.jsx("div",{children:n.map(e=>p.jsx(E,{icon:"doc",size:e,weight:"solid"},e))})]})};X.storyName="Размеры и начертания";const K=()=>{const n={boxShadow:"inset 0 0 0 1px cyan"},e={boxShadow:"inset 0 0 0 1px cyan",display:"inline-block",width:150,height:70,textAlign:"center"};return p.jsxs(Pe,{children:[p.jsxs("div",{style:e,children:[p.jsx("span",{children:"none"}),p.jsx(E,{style:n,icon:"doc",size:32,align:"none"})]}),p.jsxs("div",{style:e,children:[p.jsx("span",{children:"baseline"}),p.jsx(E,{style:n,icon:"doc",size:32,align:"baseline"})]}),p.jsxs("div",{style:e,children:[p.jsx("span",{children:"center"}),p.jsx(E,{style:n,icon:"doc",size:32,align:"center"})]})]})};K.storyName="Выравнивание";const ee=()=>{const n=(e,l,t)=>`https://s.kontur.ru/common-v2/icons-ui/black/${e}/${e}-${l}-${t}.svg`;return p.jsx(Pe,{children:p.jsx(ri,{value:{getIconUrl:n},children:p.jsx(E,{icon:"doc",color:"red",embed:!0})})})};ee.storyName="CdnIconProvider";J.__docgenInfo={description:"",methods:[],displayName:"InTextStory"};X.__docgenInfo={description:"",methods:[],displayName:"SizeCases"};K.__docgenInfo={description:"",methods:[],displayName:"AlignCases"};ee.__docgenInfo={description:"",methods:[],displayName:"ProviderCase"};var Br,Nr,Er;J.parameters={...J.parameters,docs:{...(Br=J.parameters)==null?void 0:Br.docs,source:{originalSource:`() => <Gapped vertical gap={16}>
    <div>
      Я иконка в тексте <CdnIcon icon="animal-paw" />. Привет!
    </div>
    <Button size="small" icon={<CdnIcon icon="animal-paw" size={16} />}>
      Я кнопка
    </Button>
  </Gapped>`,...(Er=(Nr=J.parameters)==null?void 0:Nr.docs)==null?void 0:Er.source}}};var Wr,Pr,Rr;X.parameters={...X.parameters,docs:{...(Wr=X.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  const sizes = [14, 16, 20, 24, 32, 64];
  return <Decorator>
      <div>
        {sizes.map(size => <CdnIcon key={size} icon="doc" size={size} weight="light" />)}
      </div>
      <div>
        {sizes.map(size => <CdnIcon key={size} icon="doc" size={size} weight="regular" />)}
      </div>
      <div>
        {sizes.map(size => <CdnIcon key={size} icon="doc" size={size} weight="solid" />)}
      </div>
    </Decorator>;
}`,...(Rr=(Pr=X.parameters)==null?void 0:Pr.docs)==null?void 0:Rr.source}}};var Fr,$r,Hr;K.parameters={...K.parameters,docs:{...(Fr=K.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  const styleIcon: CSSProperties = {
    boxShadow: "inset 0 0 0 1px cyan"
  };
  const styleWrapper: CSSProperties = {
    boxShadow: "inset 0 0 0 1px cyan",
    display: "inline-block",
    width: 150,
    height: 70,
    textAlign: "center"
  };
  return <Decorator>
      <div style={styleWrapper}>
        <span>none</span>
        <CdnIcon style={styleIcon} icon="doc" size={32} align="none" />
      </div>
      <div style={styleWrapper}>
        <span>baseline</span>
        <CdnIcon style={styleIcon} icon="doc" size={32} align="baseline" />
      </div>
      <div style={styleWrapper}>
        <span>center</span>
        <CdnIcon style={styleIcon} icon="doc" size={32} align="center" />
      </div>
    </Decorator>;
}`,...(Hr=($r=K.parameters)==null?void 0:$r.docs)==null?void 0:Hr.source}}};var Ur,Gr,Yr;ee.parameters={...ee.parameters,docs:{...(Ur=ee.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  const getIconUrl: CdnIconContextType = (icon, size, type) => {
    return \`https://s.kontur.ru/common-v2/icons-ui/black/\${icon}/\${icon}-\${size}-\${type}.svg\`;
  };
  return <Decorator>
      <CdnIconProvider value={{
      getIconUrl
    }}>
        <CdnIcon icon={"doc" as IconsType} color="red" embed />
      </CdnIconProvider>
    </Decorator>;
}`,...(Yr=(Gr=ee.parameters)==null?void 0:Gr.docs)==null?void 0:Yr.source}}};const Lo=["InTextStory","SizeCases","AlignCases","ProviderCase"],To=Object.freeze(Object.defineProperty({__proto__:null,AlignCases:K,InTextStory:J,ProviderCase:ee,SizeCases:X,__namedExportsOrder:Lo,default:ko},Symbol.toStringTag,{value:"Module"}));export{To as C};
