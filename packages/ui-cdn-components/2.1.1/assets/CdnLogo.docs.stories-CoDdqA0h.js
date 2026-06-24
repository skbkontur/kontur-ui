import{j as h}from"./jsx-runtime-F1iDwNaf.js";import{r as y,R as d,g as ga}from"./index-YTOF1_EJ.js";import{_ as ja,C as ae,c as o,a as l,i as La,m as Sa,p as za,r as _a,w as Ta,b as Oa,k as W,T as wa,d as S,e as Aa,f as Da,g as Ma,h as Pa,B as Ea,j as ma,l as fa,n as Ia,o as Fa,G as A}from"./Gapped-WvmOyBbz.js";function Ha(a){var e=a.disabled,r=a.onFocus,n=a.onBlur,t=a.onBlurWhenDisabled,i=y.useState(!1),s=i[0],u=i[1];y.useEffect(function(){e&&s&&t&&t()},[e,s]);var p=function(w){u(!0),r==null||r(w)},v=function(w){u(!1),n==null||n(w)};return{handleFocus:p,handleBlur:v}}var Na=["disabled","children","onBlurWhenDisabled"];function re(a){var e=a.disabled,r=a.children,n=a.onBlurWhenDisabled,t=ja(a,Na),i=r&&y.isValidElement(r),s=Ha({disabled:e??(i?r.props.disabled:void 0),onFocus:i?r.props.onFocus:void 0,onBlur:i?r.props.onBlur:void 0,onBlurWhenDisabled:n}),u=s.handleFocus,p=s.handleBlur;return i?d.createElement(ae,t,d.Children.only(y.cloneElement(r,{onFocus:u,onBlur:p}))):null}re.__KONTUR_REACT_UI__="FocusControlWrapper";re.displayName="FocusControlWrapper";var R={exports:{}},U,ie;function Wa(){if(ie)return U;ie=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return U=a,U}var G,oe;function Ra(){if(oe)return G;oe=1;var a=Wa();function e(){}function r(){}return r.resetWarningCache=e,G=function(){function n(s,u,p,v,g,w){if(w!==a){var L=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw L.name="Invariant Violation",L}}n.isRequired=n;function t(){return n}var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:e};return i.PropTypes=i,i},G}var le;function Ua(){return le||(le=1,R.exports=Ra()()),R.exports}var Ga=Ua();const X=ga(Ga);var ee=function(a,e){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])},ee(a,e)};function te(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ee(a,e);function r(){this.constructor=a}a.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var P=function(){return P=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},P.apply(this,arguments)};function m(a,e){return Object.defineProperty?Object.defineProperty(a,"raw",{value:e}):a.raw=e,a}var ce,se,de,pe,he,ue,$=function(e,r,n){return o(ce||(ce=l([`
    line-height: `,`;
    font-size: `,`;

    &::before {
      width: `,`;
    }
  `])),r,e,n)},q=function(e,r,n,t,i,s){var u=parseInt(e),p=parseInt(r),v=p<=16&&La?-u:0;return o(se||(se=l([`
    height: `,`;
    width: `,`;
    flex: 1 0 `,`;

    border-radius: `,`;
    line-height: `,`;

    margin-top: calc(`," + ",`px);
  `])),n,t,t,i,n,s,v)},Y=function(e,r){return o(de||(de=l([`
    line-height: `,`;
    font-size: `,`;
  `])),r,e)},K=function(e,r){return o(pe||(pe=l([`
    border-radius: `,`;
    height: `,`;
    width: `,`;
  `])),r,e,e)},V=function(e){return o(he||(he=l([`
    border-radius: `,`;
  `])),e)},Z=function(e,r){var n=e,t=parseInt(e);return o(ue||(ue=l([`
    &:checked ~ .`," .",` {
      border-radius: `,"px 0 0 ",`px;
    }
    &:checked ~ .`,` {
      transform: translateX(`,") translateX(-",`);
    }
  `])),k.containerDisabled,k.background,t*.5,t*.5,k.handle,r,n)},ke,ve,ge,we,me,fe,be,xe,ye,Ce,Be,je,Le,Se,ze,_e,Te,Oe,Ae,De,Me,Pe,Ee,Ie,Fe,He,Ne,We,Re,Ue,Ge,Xe,$e,qe,Ye,k=za("toggle")({handle:"handle",container:"container",disabled:"disabled",containerDisabled:"container-disabled",containerLoading:"container-loading",background:"background"}),c=Sa({root:function(e){return o(ke||(ke=l([`
      display: inline-flex;
      cursor: pointer;
      align-items: baseline;
      position: relative;

      &::before {
        // non-breaking space.
        // makes a correct space for absolutely positioned button,
        // and also height and baseline for toggle without caption.
        content: '\\00A0';
        display: inline-block;
        flex: 0 0 auto;
      }

      &:hover .`,` {
        background: `,`;
      }
    `],[`
      display: inline-flex;
      cursor: pointer;
      align-items: baseline;
      position: relative;

      &::before {
        // non-breaking space.
        // makes a correct space for absolutely positioned button,
        // and also height and baseline for toggle without caption.
        content: '\\\\00A0';
        display: inline-block;
        flex: 0 0 auto;
      }

      &:hover .`,` {
        background: `,`;
      }
    `])),k.handle,e.toggleBgHover)},rootSmall:function(e){return o(ve||(ve=l([`
      `,`;
    `])),$(e.toggleFontSizeSmall,e.toggleHeightSmall,e.toggleWidthSmall))},rootMedium:function(e){return o(ge||(ge=l([`
      `,`;
    `])),$(e.toggleFontSizeMedium,e.toggleHeightMedium,e.toggleWidthMedium))},rootLarge:function(e){return o(we||(we=l([`
      `,`;
    `])),$(e.toggleFontSizeLarge,e.toggleHeightLarge,e.toggleWidthLarge))},disableAnimation:function(){return o(me||(me=l([`
      &,
      * {
        transition: none !important;
      }
    `])))},handle:function(e){return o(fe||(fe=l([`
      bottom: `,`;
      left: `,`;
      position: absolute;
      top: `,`;
    `])),e.toggleBorderWidth,e.toggleHandleLeft,e.toggleHandleTop)},handleSmall:function(e){return o(be||(be=l([`
      `,`;
    `])),K(e.toggleHandleSizeSmall,e.toggleHandleBorderRadiusSmall))},handleMedium:function(e){return o(xe||(xe=l([`
      `,`;
    `])),K(e.toggleHandleSizeMedium,e.toggleHandleBorderRadiusMedium))},handleLarge:function(e){return o(ye||(ye=l([`
      `,`;
    `])),K(e.toggleHandleSizeLarge,e.toggleHandleBorderRadiusLarge))},handleDisabled:function(e){return o(Ce||(Ce=l([`
      background: `,` !important; // override root hover/active styles
    `])),e.toggleDisabledHandleBg)},input:function(e){return o(Be||(Be=l([`
      position: absolute;
      opacity: 0;

      &:enabled {
        ~ .`,", ~ .",` {
          transition: 0.2s ease-in;
        }
        :not(:checked) {
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
        }
        :checked {
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
        }
      }
      &:enabled:hover {
        :not(:checked) {
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
        }
        :checked {
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
        }
      }
      &:disabled {
        :not(:checked) {
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
          ~ .`,` {
            background: `,` !important;
            box-shadow: `,`;
          }
        }
        :checked {
          ~ .`,` {
            background: `,`;
            box-shadow: `,`;
          }
          ~ .`,` {
            background: `,` !important;
            box-shadow: `,`;
          }
        }
      }
    `])),k.container,k.handle,k.container,e.toggleContainerBg,e.toggleContainerBoxShadow,k.handle,e.toggleHandleBg,e.toggleHandleBoxShadow,k.container,e.toggleContainerBgChecked,e.toggleContainerBoxShadowChecked,k.handle,e.toggleHandleBgChecked,e.toggleHandleBoxShadowChecked,k.container,e.toggleContainerBgHover,e.toggleContainerBoxShadowHover,k.handle,e.toggleHandleBgHover,e.toggleHandleBoxShadowHover,k.container,e.toggleContainerBgCheckedHover,e.toggleContainerBoxShadowCheckedHover,k.handle,e.toggleHandleBgCheckedHover,e.toggleHandleBoxShadowCheckedHover,k.container,e.toggleContainerBgDisabled,e.toggleContainerBoxShadowDisabled,k.handle,e.toggleHandleBgDisabled,e.toggleHandleBoxShadowDisabled,k.container,e.toggleContainerBgDisabledChecked,e.toggleContainerBoxShadowDisabledChecked,k.handle,e.toggleHandleBgDisabledChecked,e.toggleHandleBoxShadowDisabledChecked)},inputSmall:function(e){return o(je||(je=l([`
      `,`;
    `])),Z(e.toggleHeightSmall,e.toggleWidthSmall))},inputMedium:function(e){return o(Le||(Le=l([`
      `,`;
    `])),Z(e.toggleHeightMedium,e.toggleWidthMedium))},inputLarge:function(e){return o(Se||(Se=l([`
      `,`;
    `])),Z(e.toggleHeightLarge,e.toggleWidthLarge))},container:function(e){return o(ze||(ze=l([`
      box-shadow: inset 0 0 0 `," ",`;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      /* fixes overflow issue in Safari: https://bugs.webkit.org/show_bug.cgi?id=98538 */
      z-index: 0;
    `])),e.toggleBorderWidth,e.toggleBorderColor)},containerSmall:function(e){return o(_e||(_e=l([`
      `,`;
    `])),V(e.toggleBorderRadiusSmall))},containerMedium:function(e){return o(Te||(Te=l([`
      `,`;
    `])),V(e.toggleBorderRadiusMedium))},containerLarge:function(e){return o(Oe||(Oe=l([`
      `,`;
    `])),V(e.toggleBorderRadiusLarge))},containerDisabled:function(e){return o(Ae||(Ae=l([`
      background: `,`;
      box-shadow: inset 0 0 0 1px `,`;
    `])),e.toggleBgDisabled,e.toggleBorderColorDisabled)},focused:function(e){return o(De||(De=l([`
      box-shadow:
        0 0 0 1px `,`,
        0 0 0 `," ",`;
    `])),e.toggleOutlineColorFocus,e.toggleOutlineWidth,e.toggleFocusShadowColor)},isWarning:function(e){return o(Me||(Me=l([`
      box-shadow:
        0 0 0 1px `,`,
        0 0 0 `," ",`;
    `])),e.toggleOutlineColorFocus,e.toggleOutlineWidth,e.toggleShadowColorWarning)},isError:function(e){return o(Pe||(Pe=l([`
      box-shadow:
        0 0 0 1px `,`,
        0 0 0 `," ",`;
    `])),e.toggleOutlineColorFocus,e.toggleOutlineWidth,e.toggleShadowColorError)},button:function(e){return o(Ee||(Ee=l([`
      position: absolute;
      left: 0;
      top: 0;
      background: `,`;
      line-height: `,`;
    `])),e.toggleBaseBg,e.toggleHeightSmall)},buttonSmall:function(e){return o(Ie||(Ie=l([`
      `,`;
    `])),q(e.labGrotesqueBaselineCompensation,e.toggleFontSizeSmall,e.toggleHeightSmall,e.toggleWidthSmall,e.toggleBorderRadiusSmall,e.toggleButtonOffsetY))},buttonMedium:function(e){return o(Fe||(Fe=l([`
      `,`;
    `])),q(e.labGrotesqueBaselineCompensation,e.toggleFontSizeMedium,e.toggleHeightMedium,e.toggleWidthMedium,e.toggleBorderRadiusMedium,e.toggleButtonOffsetY))},buttonLarge:function(e){return o(He||(He=l([`
      `,`;
    `])),q(e.labGrotesqueBaselineCompensation,e.toggleFontSizeLarge,e.toggleHeightLarge,e.toggleWidthLarge,e.toggleBorderRadiusLarge,e.toggleButtonOffsetY))},buttonRight:function(){return o(Ne||(Ne=l([`
      right: 0;
      left: auto;
    `])))},disabled:function(){return o(We||(We=l([`
      cursor: default;
    `])))},rootLeft:function(){return o(Re||(Re=l([`
      flex-direction: row-reverse;
    `])))},caption:function(e){return o(Ue||(Ue=l([`
      color: `,`;
      padding: 0 0 0 `,`;
    `])),e.toggleTextColor,e.toggleCaptionGap)},captionSmall:function(e){return o(Ge||(Ge=l([`
      `,`;
    `])),Y(e.toggleFontSizeSmall,e.toggleHeightSmall))},captionMedium:function(e){return o(Xe||(Xe=l([`
      `,`;
    `])),Y(e.toggleFontSizeMedium,e.toggleHeightMedium))},captionLarge:function(e){return o($e||($e=l([`
      `,`;
    `])),Y(e.toggleFontSizeLarge,e.toggleHeightLarge))},disabledCaption:function(e){return o(qe||(qe=l([`
      color: `,`;
    `])),e.textColorDisabled)},captionLeft:function(e){return o(Ye||(Ye=l([`
      color: `,`;
      padding: 0 `,` 0 0;
    `])),e.toggleTextColor,e.toggleCaptionGap)}}),M,O,Xa={root:"Toggle__root"},$a=_a(M=Ta(M=(O=(function(a){function e(n){var t;return t=a.call(this,n)||this,t.getProps=Ma(e.defaultProps),t.input=null,t.focus=function(){t.input&&(W.isTabPressed=!0,t.input.focus())},t.inputRef=function(i){t.input=i},t.handleChange=function(i){t.props.onValueChange&&t.props.onValueChange(i.target.checked),t.isUncontrolled()&&t.setState({checked:i.target.checked}),t.props.onChange&&t.props.onChange(i)},t.handleFocus=function(i){t.props.onFocus&&t.props.onFocus(i),W.isTabPressed&&t.setState({focusByTab:!0})},t.resetFocus=function(){return t.setState({focusByTab:!1})},t.handleBlur=function(i){t.resetFocus(),t.props.onBlur==null||t.props.onBlur(i)},t.state={focusByTab:!1,checked:n.defaultChecked},t}Oa(e,a);var r=e.prototype;return r.componentDidMount=function(){this.props.autoFocus&&(W.isTabPressed=!0,this.focus())},r.render=function(){var t=this;return d.createElement(wa.Consumer,null,function(i){return t.theme=i,t.renderMain()})},r.getContainerSizeClassName=function(){switch(this.size){case"large":return c.containerLarge(this.theme);case"medium":return c.containerMedium(this.theme);case"small":default:return c.containerSmall(this.theme)}},r.getHandleSizeClassName=function(){switch(this.size){case"large":return c.handleLarge(this.theme);case"medium":return c.handleMedium(this.theme);case"small":default:return c.handleSmall(this.theme)}},r.getButtonSizeClassName=function(){switch(this.size){case"large":return c.buttonLarge(this.theme);case"medium":return c.buttonMedium(this.theme);case"small":default:return c.buttonSmall(this.theme)}},r.getRootSizeClassName=function(){switch(this.size){case"large":return c.rootLarge(this.theme);case"medium":return c.rootMedium(this.theme);case"small":default:return c.rootSmall(this.theme)}},r.getInputSizeClassName=function(){switch(this.size){case"large":return c.inputLarge(this.theme);case"medium":return c.inputMedium(this.theme);case"small":default:return c.inputSmall(this.theme)}},r.getCaptionSizeClassName=function(){switch(this.size){case"large":return c.captionLarge(this.theme);case"medium":return c.captionMedium(this.theme);case"small":default:return c.captionSmall(this.theme)}},r.renderMain=function(){var t,i,s,u,p=this.props,v=p.children,g=p.warning,w=p.error,L=p.id,I=p.name,F=p["aria-describedby"],H=p["aria-label"],z=this.getProps(),D=z.loading,_=z.captionPosition,N=z.disableAnimations,x=this.getProps().disabled||D,xa=this.isUncontrolled()?this.state.checked:this.props.checked,ya=S(this.getContainerSizeClassName(),(t={},t[c.container(this.theme)]=!0,t[c.containerDisabled(this.theme)]=!!x,t[k.container]=!0,t[k.containerDisabled]=!!x,t[k.containerLoading]=D,t)),Ca=S(this.getRootSizeClassName(),(i={},i[c.root(this.theme)]=!0,i[c.rootLeft()]=_==="left",i[c.disabled()]=!!x,i[k.disabled]=!!x,i[c.disableAnimation()]=N,i)),ne=null;if(v){var T,Ba=S(this.getCaptionSizeClassName(),(T={},T[c.caption(this.theme)]=!0,T[c.captionLeft(this.theme)]=_==="left",T[c.disabledCaption(this.theme)]=!!x,T));ne=d.createElement("span",{className:Ba},v)}return d.createElement(ae,Aa({rootNodeRef:this.setRootNode},this.props),d.createElement("label",{"data-tid":Xa.root,className:Ca},d.createElement("div",{className:S(this.getButtonSizeClassName(),(s={},s[c.button(this.theme)]=!0,s[c.buttonRight()]=_==="left",s[c.isWarning(this.theme)]=!!g,s[c.isError(this.theme)]=!!w,s[c.focused(this.theme)]=!x&&!!this.state.focusByTab,s))},d.createElement(re,{onBlurWhenDisabled:this.resetFocus},d.createElement("input",{type:"checkbox",checked:xa,onChange:this.handleChange,className:S(this.getInputSizeClassName(),c.input(this.theme)),onFocus:this.handleFocus,onBlur:this.handleBlur,ref:this.inputRef,disabled:x,id:L,name:I,role:"switch","aria-label":H,"aria-describedby":F})),d.createElement("div",{className:ya}),d.createElement("div",{className:S(this.getHandleSizeClassName(),k.handle,(u={},u[c.handle(this.theme)]=!0,u[c.handleDisabled(this.theme)]=x,u))})),ne))},r.isUncontrolled=function(){return this.props.checked===void 0},e})(d.Component),O.__KONTUR_REACT_UI__="Toggle",O.displayName="Toggle",O.defaultProps={disabled:!1,loading:!1,captionPosition:"right",disableAnimations:Da},O))||M)||M;const E={accounting:{p:"accounting/accounting-28",w:212,h:28},"accounting-dark":{p:"accounting/accounting-28-dark",w:212,h:28},"accounting-vertical":{p:"accounting/accounting-28-vertical",w:128,h:51},"accounting-vertical-dark":{p:"accounting/accounting-28-vertical-dark",w:128,h:51},adaptation:{p:"adaptation/adaptation-28",w:203,h:28},"adaptation-dark":{p:"adaptation/adaptation-28-dark",w:203,h:28},"adaptation-vertical":{p:"adaptation/adaptation-28-vertical",w:119,h:51},"adaptation-vertical-dark":{p:"adaptation/adaptation-28-vertical-dark",w:119,h:51},admin:{p:"admin/admin-28",w:158,h:28},"admin-dark":{p:"admin/admin-28-dark",w:158,h:28},"admin-vertical":{p:"admin/admin-28-vertical",w:85,h:51},"admin-vertical-dark":{p:"admin/admin-28-vertical-dark",w:85,h:51},aegis:{p:"aegis/aegis-28",w:152,h:28},"aegis-dark":{p:"aegis/aegis-28-dark",w:152,h:28},"aegis-en":{p:"aegis/aegis-en-28",w:137,h:28},"aegis-en-dark":{p:"aegis/aegis-en-28-dark",w:137,h:28},"aegis-en-vertical":{p:"aegis/aegis-en-28-vertical",w:77,h:53},"aegis-en-vertical-dark":{p:"aegis/aegis-en-28-vertical-dark",w:77,h:53},"aegis-vertical":{p:"aegis/aegis-28-vertical",w:85,h:51},"aegis-vertical-dark":{p:"aegis/aegis-28-vertical-dark",w:85,h:51},"aegis-x-staffcop":{p:"aegis-x-staffcop/aegis-x-staffcop-28",w:299,h:28},"aegis-x-staffcop-dark":{p:"aegis-x-staffcop/aegis-x-staffcop-28-dark",w:299,h:28},ai:{p:"ai/ai-28",w:120,h:28},"ai-dark":{p:"ai/ai-28-dark",w:120,h:28},"ai-en":{p:"ai/ai-en-28",w:99,h:28},"ai-en-dark":{p:"ai/ai-en-28-dark",w:99,h:28},"ai-en-vertical":{p:"ai/ai-en-28-vertical",w:77,h:51},"ai-en-vertical-dark":{p:"ai/ai-en-28-vertical-dark",w:77,h:51},"ai-vertical":{p:"ai/ai-28-vertical",w:85,h:51},"ai-vertical-dark":{p:"ai/ai-28-vertical-dark",w:85,h:51},api:{p:"api/api-28",w:122,h:28},"api-dark":{p:"api/api-28-dark",w:122,h:28},"api-vertical":{p:"api/api-28-vertical",w:85,h:51},"api-vertical-dark":{p:"api/api-28-vertical-dark",w:85,h:51},archidoc:{p:"archidoc/archidoc-28",w:180,h:28},"archidoc-dark":{p:"archidoc/archidoc-28-dark",w:180,h:28},"archidoc-en":{p:"archidoc/archidoc-en-28",w:174,h:28},"archidoc-en-dark":{p:"archidoc/archidoc-en-28-dark",w:174,h:28},"archidoc-en-vertical":{p:"archidoc/archidoc-en-28-vertical",w:98,h:51},"archidoc-en-vertical-dark":{p:"archidoc/archidoc-en-28-vertical-dark",w:98,h:51},"archidoc-vertical":{p:"archidoc/archidoc-28-vertical",w:96,h:53},"archidoc-vertical-dark":{p:"archidoc/archidoc-28-vertical-dark",w:96,h:53},atlant:{p:"atlant/atlant-28",w:161,h:28},"atlant-dark":{p:"atlant/atlant-28-dark",w:161,h:28},"atlant-en":{p:"atlant/atlant-en-28",w:140,h:28},"atlant-en-dark":{p:"atlant/atlant-en-28-dark",w:140,h:28},"atlant-en-vertical":{p:"atlant/atlant-en-28-vertical",w:77,h:51},"atlant-en-vertical-dark":{p:"atlant/atlant-en-28-vertical-dark",w:77,h:51},"atlant-vertical":{p:"atlant/atlant-28-vertical",w:85,h:51},"atlant-vertical-dark":{p:"atlant/atlant-28-vertical-dark",w:85,h:51},ats:{p:"ats/ats-28",w:131,h:28},"ats-dark":{p:"ats/ats-28-dark",w:131,h:28},"ats-vertical":{p:"ats/ats-28-vertical",w:85,h:51},"ats-vertical-dark":{p:"ats/ats-28-vertical-dark",w:85,h:51},auditor:{p:"auditor/auditor-28",w:179,h:28},"auditor-dark":{p:"auditor/auditor-28-dark",w:179,h:28},"auditor-vertical":{p:"auditor/auditor-28-vertical",w:95,h:53},"auditor-vertical-dark":{p:"auditor/auditor-28-vertical-dark",w:95,h:53},autotransport:{p:"autotransport/autotransport-28",w:253,h:28},"autotransport-dark":{p:"autotransport/autotransport-28-dark",w:253,h:28},"autotransport-vertical":{p:"autotransport/autotransport-28-vertical",w:169,h:53},"autotransport-vertical-dark":{p:"autotransport/autotransport-28-vertical-dark",w:169,h:53},bank:{p:"bank/bank-28",w:139,h:28},"bank-dark":{p:"bank/bank-28-dark",w:139,h:28},"bank-vertical":{p:"bank/bank-28-vertical",w:85,h:51},"bank-vertical-dark":{p:"bank/bank-28-vertical-dark",w:85,h:51},billing:{p:"billing/billing-28",w:177,h:28},"billing-ab":{p:"billing-ab/billing-ab-28",w:211,h:28},"billing-ab-dark":{p:"billing-ab/billing-ab-28-dark",w:211,h:28},"billing-ab-vertical":{p:"billing-ab/billing-ab-28-vertical",w:127,h:51},"billing-ab-vertical-dark":{p:"billing-ab/billing-ab-28-vertical-dark",w:127,h:51},"billing-dark":{p:"billing/billing-28-dark",w:177,h:28},"billing-vertical":{p:"billing/billing-28-vertical",w:93,h:51},"billing-vertical-dark":{p:"billing/billing-28-vertical-dark",w:93,h:51},bokrug:{p:"bokrug/bokrug-28",w:163,h:28},"bokrug-dark":{p:"bokrug/bokrug-28-dark",w:163,h:28},"bokrug-en":{p:"bokrug/bokrug-en-28",w:155,h:28},"bokrug-en-dark":{p:"bokrug/bokrug-en-28-dark",w:155,h:28},"bokrug-en-vertical":{p:"bokrug/bokrug-en-28-vertical",w:79,h:53},"bokrug-en-vertical-dark":{p:"bokrug/bokrug-en-28-vertical-dark",w:79,h:53},"bokrug-vertical":{p:"bokrug/bokrug-28-vertical",w:85,h:53},"bokrug-vertical-dark":{p:"bokrug/bokrug-28-vertical-dark",w:85,h:53},bonus:{p:"bonus/bonus-28",w:151,h:28},"bonus-dark":{p:"bonus/bonus-28-dark",w:151,h:28},"bonus-vertical":{p:"bonus/bonus-28-vertical",w:85,h:53},"bonus-vertical-dark":{p:"bonus/bonus-28-vertical-dark",w:85,h:53},bootcamp:{p:"bootcamp/bootcamp-28",w:177,h:28},"bootcamp-dark":{p:"bootcamp/bootcamp-28-dark",w:177,h:28},"bootcamp-vertical":{p:"bootcamp/bootcamp-28-vertical",w:93,h:53},"bootcamp-vertical-dark":{p:"bootcamp/bootcamp-28-vertical-dark",w:93,h:53},brandbook:{p:"brandbook/brandbook-28",w:193,h:28},"brandbook-dark":{p:"brandbook/brandbook-28-dark",w:193,h:28},"brandbook-vertical":{p:"brandbook/brandbook-28-vertical",w:109,h:53},"brandbook-vertical-dark":{p:"brandbook/brandbook-28-vertical-dark",w:109,h:53},"buhgalteria-activ":{p:"buhgalteria-activ/buhgalteria-activ-28",w:291,h:28},"buhgalteria-activ-dark":{p:"buhgalteria-activ/buhgalteria-activ-28-dark",w:291,h:28},"buhgalteria-activ-vertical":{p:"buhgalteria-activ/buhgalteria-activ-28-vertical",w:138,h:73},"buhgalteria-activ-vertical-dark":{p:"buhgalteria-activ/buhgalteria-activ-28-vertical-dark",w:138,h:73},"buhgalteria-budjet":{p:"buhgalteria-budjet/buhgalteria-budjet-28",w:314,h:28},"buhgalteria-budjet-dark":{p:"buhgalteria-budjet/buhgalteria-budjet-28-dark",w:314,h:28},"buhgalteria-budjet-vertical":{p:"buhgalteria-budjet/buhgalteria-budjet-28-vertical",w:138,h:73},"buhgalteria-budjet-vertical-dark":{p:"buhgalteria-budjet/buhgalteria-budjet-28-vertical-dark",w:138,h:73},ca:{p:"ca/ca-28",w:347,h:28},"ca-dark":{p:"ca/ca-28-dark",w:347,h:28},"ca-vertical":{p:"ca/ca-28-vertical",w:194,h:75},"ca-vertical-dark":{p:"ca/ca-28-vertical-dark",w:194,h:75},cafe:{p:"cafe/cafe-28",w:143,h:28},"cafe-dark":{p:"cafe/cafe-28-dark",w:143,h:28},"cafe-vertical":{p:"cafe/cafe-28-vertical",w:85,h:53},"cafe-vertical-dark":{p:"cafe/cafe-28-vertical-dark",w:85,h:53},callider:{p:"callider/callider-28",w:165,h:28},"callider-dark":{p:"callider/callider-28-dark",w:165,h:28},"callider-vertical":{p:"callider/callider-28-vertical",w:85,h:51},"callider-vertical-dark":{p:"callider/callider-28-vertical-dark",w:85,h:51},career:{p:"career/career-28",w:180,h:28},"career-dark":{p:"career/career-28-dark",w:180,h:28},"career-vertical":{p:"career/career-28-vertical",w:96,h:53},"career-vertical-dark":{p:"career/career-28-vertical-dark",w:96,h:53},"cargo-news-en":{p:"cargo-news/cargo-news-en-28",w:201,h:28},"cargo-news-en-dark":{p:"cargo-news/cargo-news-en-28-dark",w:201,h:28},"cargo-news-en-vertical":{p:"cargo-news/cargo-news-en-28-vertical",w:125,h:53},"cargo-news-en-vertical-dark":{p:"cargo-news/cargo-news-en-28-vertical-dark",w:125,h:53},cerberus:{p:"cerberus/cerberus-28",w:172,h:28},"cerberus-dark":{p:"cerberus/cerberus-28-dark",w:172,h:28},"cerberus-vertical":{p:"cerberus/cerberus-28-vertical",w:88,h:53},"cerberus-vertical-dark":{p:"cerberus/cerberus-28-vertical-dark",w:88,h:53},"client-cabinet":{p:"client-cabinet/client-cabinet-28",w:270,h:28},"client-cabinet-dark":{p:"client-cabinet/client-cabinet-28-dark",w:270,h:28},"client-cabinet-vertical":{p:"client-cabinet/client-cabinet-28-vertical",w:186,h:51},"client-cabinet-vertical-dark":{p:"client-cabinet/client-cabinet-28-vertical-dark",w:186,h:51},connect:{p:"connect/connect-28",w:176,h:28},"connect-dark":{p:"connect/connect-28-dark",w:176,h:28},"connect-en":{p:"connect/connect-en-28",w:168,h:28},"connect-en-dark":{p:"connect/connect-en-28-dark",w:168,h:28},"connect-en-vertical":{p:"connect/connect-en-28-vertical",w:92,h:51},"connect-en-vertical-dark":{p:"connect/connect-en-28-vertical-dark",w:92,h:51},"connect-vertical":{p:"connect/connect-28-vertical",w:92,h:51},"connect-vertical-dark":{p:"connect/connect-28-vertical-dark",w:92,h:51},"corp-monitor":{p:"corp-monitor/corp-monitor-28",w:398,h:28},"corp-monitor-dark":{p:"corp-monitor/corp-monitor-28-dark",w:398,h:28},"corp-monitor-vertical":{p:"corp-monitor/corp-monitor-28-vertical",w:178,h:75},"corp-monitor-vertical-dark":{p:"corp-monitor/corp-monitor-28-vertical-dark",w:178,h:75},"crm-en":{p:"crm/crm-en-28",w:130,h:28},"crm-en-dark":{p:"crm/crm-en-28-dark",w:130,h:28},"crm-en-vertical":{p:"crm/crm-en-28-vertical",w:77,h:51},"crm-en-vertical-dark":{p:"crm/crm-en-28-vertical-dark",w:77,h:51},crypto:{p:"crypto/crypto-28",w:166,h:28},"crypto-dark":{p:"crypto/crypto-28-dark",w:166,h:28},"crypto-vertical":{p:"crypto/crypto-28-vertical",w:85,h:53},"crypto-vertical-dark":{p:"crypto/crypto-28-vertical-dark",w:85,h:53},cthulhu:{p:"cthulhu/cthulhu-28",w:168,h:28},"cthulhu-dark":{p:"cthulhu/cthulhu-28-dark",w:168,h:28},"cthulhu-en":{p:"cthulhu/cthulhu-en-28",w:160,h:28},"cthulhu-en-dark":{p:"cthulhu/cthulhu-en-28-dark",w:160,h:28},"cthulhu-en-vertical":{p:"cthulhu/cthulhu-en-28-vertical",w:84,h:51},"cthulhu-en-vertical-dark":{p:"cthulhu/cthulhu-en-28-vertical-dark",w:84,h:51},"cthulhu-vertical":{p:"cthulhu/cthulhu-28-vertical",w:85,h:51},"cthulhu-vertical-dark":{p:"cthulhu/cthulhu-28-vertical-dark",w:85,h:51},"data-core":{p:"data-core/data-core-28",w:179,h:28},"data-core-dark":{p:"data-core/data-core-28-dark",w:179,h:28},"data-core-en":{p:"data-core/data-core-en-28",w:180,h:28},"data-core-en-dark":{p:"data-core/data-core-en-28-dark",w:180,h:28},"data-core-en-vertical":{p:"data-core/data-core-en-28-vertical",w:104,h:51},"data-core-en-vertical-dark":{p:"data-core/data-core-en-28-vertical-dark",w:104,h:51},"data-core-vertical":{p:"data-core/data-core-28-vertical",w:95,h:53},"data-core-vertical-dark":{p:"data-core/data-core-28-vertical-dark",w:95,h:53},declarant:{p:"declarant/declarant-28",w:206,h:28},"declarant-dark":{p:"declarant/declarant-28-dark",w:206,h:28},"declarant-vertical":{p:"declarant/declarant-28-vertical",w:122,h:53},"declarant-vertical-dark":{p:"declarant/declarant-28-vertical-dark",w:122,h:53},diadoc:{p:"diadoc/diadoc-28",w:169,h:28},"diadoc-dark":{p:"diadoc/diadoc-28-dark",w:169,h:28},"diadoc-en":{p:"diadoc/diadoc-en-28",w:153,h:28},"diadoc-en-dark":{p:"diadoc/diadoc-en-28-dark",w:153,h:28},"diadoc-en-vertical":{p:"diadoc/diadoc-en-28-vertical",w:77,h:51},"diadoc-en-vertical-dark":{p:"diadoc/diadoc-en-28-vertical-dark",w:77,h:51},"diadoc-vertical":{p:"diadoc/diadoc-28-vertical",w:85,h:52},"diadoc-vertical-dark":{p:"diadoc/diadoc-28-vertical-dark",w:85,h:52},diagnostics:{p:"diagnostics/diagnostics-28",w:228,h:28},"diagnostics-dark":{p:"diagnostics/diagnostics-28-dark",w:228,h:28},"diagnostics-vertical":{p:"diagnostics/diagnostics-28-vertical",w:144,h:52},"diagnostics-vertical-dark":{p:"diagnostics/diagnostics-28-vertical-dark",w:144,h:52},"dialog-core":{p:"dialog-core/dialog-core-28",w:206,h:28},"dialog-core-dark":{p:"dialog-core/dialog-core-28-dark",w:206,h:28},"dialog-core-en":{p:"dialog-core/dialog-core-en-28",w:197,h:28},"dialog-core-en-dark":{p:"dialog-core/dialog-core-en-28-dark",w:197,h:28},"dialog-core-en-vertical":{p:"dialog-core/dialog-core-en-28-vertical",w:121,h:53},"dialog-core-en-vertical-dark":{p:"dialog-core/dialog-core-en-28-vertical-dark",w:121,h:53},"dialog-core-vertical":{p:"dialog-core/dialog-core-28-vertical",w:122,h:53},"dialog-core-vertical-dark":{p:"dialog-core/dialog-core-28-vertical-dark",w:122,h:53},discount:{p:"discount/discount-28",w:179,h:28},"discount-dark":{p:"discount/discount-28-dark",w:179,h:28},"discount-vertical":{p:"discount/discount-28-vertical",w:95,h:52},"discount-vertical-dark":{p:"discount/discount-28-vertical-dark",w:95,h:52},disk:{p:"disk/disk-28",w:142,h:28},"disk-dark":{p:"disk/disk-28-dark",w:142,h:28},"disk-vertical":{p:"disk/disk-28-vertical",w:85,h:52},"disk-vertical-dark":{p:"disk/disk-28-vertical-dark",w:85,h:52},docrobot:{p:"docrobot/docrobot-28",w:106,h:28},"docrobot-dark":{p:"docrobot/docrobot-28-dark",w:106,h:28},"docrobot-en":{p:"docrobot/docrobot-en-28",w:106,h:28},"docrobot-en-dark":{p:"docrobot/docrobot-en-28-dark",w:106,h:28},docs:{p:"docs/docs-28",w:211,h:28},"docs-dark":{p:"docs/docs-28-dark",w:211,h:28},"docs-vertical":{p:"docs/docs-28-vertical",w:127,h:53},"docs-vertical-dark":{p:"docs/docs-28-vertical-dark",w:127,h:53},docsi:{p:"docsi/docsi-28",w:155,h:28},"docsi-dark":{p:"docsi/docsi-28-dark",w:155,h:28},"docsi-vertical":{p:"docsi/docsi-28-vertical",w:85,h:52},"docsi-vertical-dark":{p:"docsi/docsi-28-vertical-dark",w:85,h:52},documentation:{p:"documentation/documentation-28",w:246,h:28},"documentation-dark":{p:"documentation/documentation-28-dark",w:246,h:28},"documentation-en":{p:"documentation/documentation-en-28",w:242,h:28},"documentation-en-dark":{p:"documentation/documentation-en-28-dark",w:242,h:28},"documentation-en-vertical":{p:"documentation/documentation-en-28-vertical",w:166,h:51},"documentation-en-vertical-dark":{p:"documentation/documentation-en-28-vertical-dark",w:166,h:51},"documentation-vertical":{p:"documentation/documentation-28-vertical",w:162,h:53},"documentation-vertical-dark":{p:"documentation/documentation-28-vertical-dark",w:162,h:53},dostup:{p:"dostup/dostup-28",w:165,h:28},"dostup-dark":{p:"dostup/dostup-28-dark",w:165,h:28},"dostup-vertical":{p:"dostup/dostup-28-vertical",w:85,h:53},"dostup-vertical-dark":{p:"dostup/dostup-28-vertical-dark",w:85,h:53},ebisu:{p:"ebisu/ebisu-28",w:153,h:28},"ebisu-dark":{p:"ebisu/ebisu-28-dark",w:153,h:28},"ebisu-en":{p:"ebisu/ebisu-en-28",w:136,h:28},"ebisu-en-dark":{p:"ebisu/ebisu-en-28-dark",w:136,h:28},"ebisu-en-vertical":{p:"ebisu/ebisu-en-28-vertical",w:77,h:51},"ebisu-en-vertical-dark":{p:"ebisu/ebisu-en-28-vertical-dark",w:77,h:51},"ebisu-vertical":{p:"ebisu/ebisu-28-vertical",w:85,h:53},"ebisu-vertical-dark":{p:"ebisu/ebisu-28-vertical-dark",w:85,h:53},edi:{p:"edi/edi-28",w:123,h:28},"edi-dark":{p:"edi/edi-28-dark",w:123,h:28},"edi-vertical":{p:"edi/edi-28-vertical",w:85,h:51},"edi-vertical-dark":{p:"edi/edi-28-vertical-dark",w:85,h:51},"edu-portal":{p:"edu-portal/edu-portal-28",w:262,h:28},"edu-portal-dark":{p:"edu-portal/edu-portal-28-dark",w:262,h:28},"edu-portal-vertical":{p:"edu-portal/edu-portal-28-vertical",w:178,h:53},"edu-portal-vertical-dark":{p:"edu-portal/edu-portal-28-vertical-dark",w:178,h:53},egais:{p:"egais/egais-28",w:162,h:28},"egais-dark":{p:"egais/egais-28-dark",w:162,h:28},"egais-vertical":{p:"egais/egais-28-vertical",w:85,h:51},"egais-vertical-dark":{p:"egais/egais-28-vertical-dark",w:85,h:51},elba:{p:"elba/elba-28",w:153,h:28},"elba-dark":{p:"elba/elba-28-dark",w:153,h:28},"elba-vertical":{p:"elba/elba-28-vertical",w:85,h:51},"elba-vertical-dark":{p:"elba/elba-28-vertical-dark",w:85,h:51},"employes-cabinet":{p:"employes-cabinet/employes-cabinet-28",w:310,h:28},"employes-cabinet-dark":{p:"employes-cabinet/employes-cabinet-28-dark",w:310,h:28},"employes-cabinet-vertical":{p:"employes-cabinet/employes-cabinet-28-vertical",w:226,h:53},"employes-cabinet-vertical-dark":{p:"employes-cabinet/employes-cabinet-28-vertical-dark",w:226,h:53},enigma:{p:"enigma/enigma-28",w:167,h:28},"enigma-dark":{p:"enigma/enigma-28-dark",w:167,h:28},"enigma-vertical":{p:"enigma/enigma-28-vertical",w:85,h:51},"enigma-vertical-dark":{p:"enigma/enigma-28-vertical-dark",w:85,h:51},epsilon:{p:"epsilon/epsilon-28",w:181,h:28},"epsilon-dark":{p:"epsilon/epsilon-28-dark",w:181,h:28},"epsilon-vertical":{p:"epsilon/epsilon-28-vertical",w:97,h:51},"epsilon-vertical-dark":{p:"epsilon/epsilon-28-vertical-dark",w:97,h:51},erp:{p:"erp/erp-28",w:130,h:28},"erp-crypto":{p:"erp-crypto/erp-crypto-28",w:215,h:28},"erp-crypto-dark":{p:"erp-crypto/erp-crypto-28-dark",w:215,h:28},"erp-crypto-vertical":{p:"erp-crypto/erp-crypto-28-vertical",w:131,h:53},"erp-crypto-vertical-dark":{p:"erp-crypto/erp-crypto-28-vertical-dark",w:131,h:53},"erp-dark":{p:"erp/erp-28-dark",w:130,h:28},"erp-diadoc":{p:"erp-diadoc/erp-diadoc-28",w:218,h:28},"erp-diadoc-dark":{p:"erp-diadoc/erp-diadoc-28-dark",w:218,h:28},"erp-diadoc-vertical":{p:"erp-diadoc/erp-diadoc-28-vertical",w:134,h:52},"erp-diadoc-vertical-dark":{p:"erp-diadoc/erp-diadoc-28-vertical-dark",w:134,h:52},"erp-extern-fns":{p:"erp-extern-fns/erp-extern-fns-28",w:283,h:28},"erp-extern-fns-dark":{p:"erp-extern-fns/erp-extern-fns-28-dark",w:283,h:28},"erp-extern-fns-vertical":{p:"erp-extern-fns/erp-extern-fns-28-vertical",w:199,h:53},"erp-extern-fns-vertical-dark":{p:"erp-extern-fns/erp-extern-fns-28-vertical-dark",w:199,h:53},"erp-extern-fss":{p:"erp-extern-fss/erp-extern-fss-28",w:282,h:28},"erp-extern-fss-dark":{p:"erp-extern-fss/erp-extern-fss-28-dark",w:282,h:28},"erp-extern-fss-vertical":{p:"erp-extern-fss/erp-extern-fss-28-vertical",w:198,h:53},"erp-extern-fss-vertical-dark":{p:"erp-extern-fss/erp-extern-fss-28-vertical-dark",w:198,h:53},"erp-focus":{p:"erp-focus/erp-focus-28",w:205,h:28},"erp-focus-dark":{p:"erp-focus/erp-focus-28-dark",w:205,h:28},"erp-focus-vertical":{p:"erp-focus/erp-focus-28-vertical",w:121,h:53},"erp-focus-vertical-dark":{p:"erp-focus/erp-focus-28-vertical-dark",w:121,h:53},"erp-vertical":{p:"erp/erp-28-vertical",w:85,h:51},"erp-vertical-dark":{p:"erp/erp-28-vertical-dark",w:85,h:51},estafeta:{p:"estafeta/estafeta-28",w:190,h:28},"estafeta-dark":{p:"estafeta/estafeta-28-dark",w:190,h:28},"estafeta-vertical":{p:"estafeta/estafeta-28-vertical",w:106,h:53},"estafeta-vertical-dark":{p:"estafeta/estafeta-28-vertical-dark",w:106,h:53},experiments:{p:"experiments/experiments-28",w:250,h:28},"experiments-dark":{p:"experiments/experiments-28-dark",w:250,h:28},"experiments-en":{p:"experiments/experiments-en-28",w:209,h:28},"experiments-en-dark":{p:"experiments/experiments-en-28-dark",w:209,h:28},"experiments-en-vertical":{p:"experiments/experiments-en-28-vertical",w:133,h:53},"experiments-en-vertical-dark":{p:"experiments/experiments-en-28-vertical-dark",w:133,h:53},"experiments-vertical":{p:"experiments/experiments-28-vertical",w:166,h:53},"experiments-vertical-dark":{p:"experiments/experiments-28-vertical-dark",w:166,h:53},expert:{p:"expert/expert-28",w:177,h:28},"expert-dark":{p:"expert/expert-28-dark",w:177,h:28},"expert-vertical":{p:"expert/expert-28-vertical",w:93,h:53},"expert-vertical-dark":{p:"expert/expert-28-vertical-dark",w:93,h:53},extern:{p:"extern/extern-28",w:177,h:28},"extern-dark":{p:"extern/extern-28-dark",w:177,h:28},"extern-vertical":{p:"extern/extern-28-vertical",w:93,h:53},"extern-vertical-dark":{p:"extern/extern-28-vertical-dark",w:93,h:53},factoring:{p:"factoring/factoring-28",w:207,h:28},"factoring-dark":{p:"factoring/factoring-28-dark",w:207,h:28},"factoring-vertical":{p:"factoring/factoring-28-vertical",w:123,h:53},"factoring-vertical-dark":{p:"factoring/factoring-28-vertical-dark",w:123,h:53},femida:{p:"femida/femida-28",w:176,h:28},"femida-dark":{p:"femida/femida-28-dark",w:176,h:28},"femida-vertical":{p:"femida/femida-28-vertical",w:92,h:51},"femida-vertical-dark":{p:"femida/femida-28-vertical-dark",w:92,h:51},finance:{p:"finance/finance-28",w:187,h:28},"finance-dark":{p:"finance/finance-28-dark",w:187,h:28},"finance-vertical":{p:"finance/finance-28-vertical",w:103,h:51},"finance-vertical-dark":{p:"finance/finance-28-vertical-dark",w:103,h:51},fms:{p:"fms/fms-28",w:143,h:28},"fms-dark":{p:"fms/fms-28-dark",w:143,h:28},"fms-vertical":{p:"fms/fms-28-vertical",w:85,h:51},"fms-vertical-dark":{p:"fms/fms-28-vertical-dark",w:85,h:51},focus:{p:"focus/focus-28",w:156,h:28},"focus-dark":{p:"focus/focus-28-dark",w:156,h:28},"focus-en":{p:"focus/focus-en-28",w:143,h:28},"focus-en-dark":{p:"focus/focus-en-28-dark",w:143,h:28},"focus-en-vertical":{p:"focus/focus-en-28-vertical",w:77,h:51},"focus-en-vertical-dark":{p:"focus/focus-en-28-vertical-dark",w:77,h:51},"focus-poisk-klientov":{p:"focus-poisk-klientov/focus-poisk-klientov-28",w:260,h:28},"focus-poisk-klientov-dark":{p:"focus-poisk-klientov/focus-poisk-klientov-28-dark",w:260,h:28},"focus-poisk-klientov-vertical":{p:"focus-poisk-klientov/focus-poisk-klientov-28-vertical",w:176,h:51},"focus-poisk-klientov-vertical-dark":{p:"focus-poisk-klientov/focus-poisk-klientov-28-vertical-dark",w:176,h:51},"focus-vertical":{p:"focus/focus-28-vertical",w:85,h:53},"focus-vertical-dark":{p:"focus/focus-28-vertical-dark",w:85,h:53},freelance:{p:"freelance/freelance-28",w:185,h:28},"freelance-dark":{p:"freelance/freelance-28-dark",w:185,h:28},"freelance-vertical":{p:"freelance/freelance-28-vertical",w:101,h:53},"freelance-vertical-dark":{p:"freelance/freelance-28-vertical-dark",w:101,h:53},"freeze-calendar":{p:"freeze-calendar/freeze-calendar-28",w:333,h:28},"freeze-calendar-dark":{p:"freeze-calendar/freeze-calendar-28-dark",w:333,h:28},"freeze-calendar-vertical":{p:"freeze-calendar/freeze-calendar-28-vertical",w:249,h:53},"freeze-calendar-vertical-dark":{p:"freeze-calendar/freeze-calendar-28-vertical-dark",w:249,h:53},gosoblako:{p:"gosoblako/gosoblako-28",w:201,h:28},"gosoblako-dark":{p:"gosoblako/gosoblako-28-dark",w:201,h:28},"gosoblako-en":{p:"gosoblako/gosoblako-en-28",w:193,h:28},"gosoblako-en-dark":{p:"gosoblako/gosoblako-en-28-dark",w:193,h:28},"gosoblako-en-vertical":{p:"gosoblako/gosoblako-en-28-vertical",w:117,h:51},"gosoblako-en-vertical-dark":{p:"gosoblako/gosoblako-en-28-vertical-dark",w:117,h:51},"gosoblako-vertical":{p:"gosoblako/gosoblako-28-vertical",w:117,h:51},"gosoblako-vertical-dark":{p:"gosoblako/gosoblako-28-vertical-dark",w:117,h:51},grant:{p:"grant/grant-28",w:148,h:28},"grant-dark":{p:"grant/grant-28-dark",w:148,h:28},"grant-vertical":{p:"grant/grant-28-vertical",w:85,h:53},"grant-vertical-dark":{p:"grant/grant-28-vertical-dark",w:85,h:53},guides:{p:"guides/guides-28",w:153,h:28},"guides-dark":{p:"guides/guides-28-dark",w:153,h:28},"guides-vertical":{p:"guides/guides-28-vertical",w:85,h:51},"guides-vertical-dark":{p:"guides/guides-28-vertical-dark",w:85,h:51},help:{p:"help/help-28",w:177,h:28},"help-dark":{p:"help/help-28-dark",w:177,h:28},"help-vertical":{p:"help/help-28-vertical",w:93,h:51},"help-vertical-dark":{p:"help/help-28-vertical-dark",w:93,h:51},hotel:{p:"hotel/hotel-28",w:153,h:28},"hotel-dark":{p:"hotel/hotel-28-dark",w:153,h:28},"hotel-en":{p:"hotel/hotel-en-28",w:135,h:28},"hotel-en-dark":{p:"hotel/hotel-en-28-dark",w:135,h:28},"hotel-en-vertical":{p:"hotel/hotel-en-28-vertical",w:77,h:51},"hotel-en-vertical-dark":{p:"hotel/hotel-en-28-vertical-dark",w:77,h:51},"hotel-vertical":{p:"hotel/hotel-28-vertical",w:85,h:51},"hotel-vertical-dark":{p:"hotel/hotel-28-vertical-dark",w:85,h:51},"hr-exit":{p:"hr-exit/hr-exit-28",w:124,h:28},"hr-exit-dark":{p:"hr-exit/hr-exit-28-dark",w:124,h:28},"hr-exit-vertical":{p:"hr-exit/hr-exit-28-vertical",w:85,h:51},"hr-exit-vertical-dark":{p:"hr-exit/hr-exit-28-vertical-dark",w:85,h:51},ia:{p:"ia/ia-28",w:118,h:28},"ia-dark":{p:"ia/ia-28-dark",w:118,h:28},"ia-en":{p:"ia/ia-en-28",w:99,h:28},"ia-en-dark":{p:"ia/ia-en-28-dark",w:99,h:28},"ia-en-vertical":{p:"ia/ia-en-28-vertical",w:77,h:51},"ia-en-vertical-dark":{p:"ia/ia-en-28-vertical-dark",w:77,h:51},"ia-vertical":{p:"ia/ia-28-vertical",w:85,h:51},"ia-vertical-dark":{p:"ia/ia-28-vertical-dark",w:85,h:51},id:{p:"id/id-28",w:109,h:28},"id-dark":{p:"id/id-28-dark",w:109,h:28},"id-vertical":{p:"id/id-28-vertical",w:85,h:51},"id-vertical-dark":{p:"id/id-28-vertical-dark",w:85,h:51},implementation:{p:"implementation/implementation-28",w:208,h:28},"implementation-dark":{p:"implementation/implementation-28-dark",w:208,h:28},"implementation-vertical":{p:"implementation/implementation-28-vertical",w:124,h:53},"implementation-vertical-dark":{p:"implementation/implementation-28-vertical-dark",w:124,h:53},info:{p:"info/info-28",w:146,h:28},"info-dark":{p:"info/info-28-dark",w:146,h:28},"info-vertical":{p:"info/info-28-vertical",w:85,h:53},"info-vertical-dark":{p:"info/info-28-vertical-dark",w:85,h:53},insight:{p:"insight/insight-28",w:165,h:28},"insight-dark":{p:"insight/insight-28-dark",w:165,h:28},"insight-vertical":{p:"insight/insight-28-vertical",w:85,h:51},"insight-vertical-dark":{p:"insight/insight-28-vertical-dark",w:85,h:51},install:{p:"install/install-28",w:298,h:28},"install-dark":{p:"install/install-28-dark",w:298,h:28},"install-vertical":{p:"install/install-28-vertical",w:157,h:73},"install-vertical-dark":{p:"install/install-28-vertical-dark",w:157,h:73},integrator:{p:"integrator/integrator-28",w:215,h:28},"integrator-dark":{p:"integrator/integrator-28-dark",w:215,h:28},"integrator-en":{p:"integrator/integrator-en-28",w:184,h:28},"integrator-en-dark":{p:"integrator/integrator-en-28-dark",w:184,h:28},"integrator-en-vertical":{p:"integrator/integrator-en-28-vertical",w:108,h:53},"integrator-en-vertical-dark":{p:"integrator/integrator-en-28-vertical-dark",w:108,h:53},"integrator-vertical":{p:"integrator/integrator-28-vertical",w:131,h:53},"integrator-vertical-dark":{p:"integrator/integrator-28-vertical-dark",w:131,h:53},invitations:{p:"invitations/invitations-28",w:235,h:28},"invitations-dark":{p:"invitations/invitations-28-dark",w:235,h:28},"invitations-vertical":{p:"invitations/invitations-28-vertical",w:151,h:53},"invitations-vertical-dark":{p:"invitations/invitations-28-vertical-dark",w:151,h:53},jkh:{p:"jkh/jkh-28",w:139,h:28},"jkh-dark":{p:"jkh/jkh-28-dark",w:139,h:28},"jkh-vertical":{p:"jkh/jkh-28-vertical",w:85,h:51},"jkh-vertical-dark":{p:"jkh/jkh-28-vertical-dark",w:85,h:51},kcr:{p:"kcr/kcr-28",w:134,h:28},"kcr-dark":{p:"kcr/kcr-28-dark",w:134,h:28},"kcr-full":{p:"kcr-full/kcr-full-28",w:477,h:28},"kcr-full-dark":{p:"kcr-full/kcr-full-28-dark",w:477,h:28},"kcr-full-vertical":{p:"kcr-full/kcr-full-28-vertical",w:181,h:98},"kcr-full-vertical-dark":{p:"kcr-full/kcr-full-28-vertical-dark",w:181,h:98},"kcr-vertical":{p:"kcr/kcr-28-vertical",w:85,h:52},"kcr-vertical-dark":{p:"kcr/kcr-28-vertical-dark",w:85,h:52},keadmin:{p:"keadmin/keadmin-28",w:179,h:28},"keadmin-dark":{p:"keadmin/keadmin-28-dark",w:179,h:28},"keadmin-vertical":{p:"keadmin/keadmin-28-vertical",w:95,h:51},"keadmin-vertical-dark":{p:"keadmin/keadmin-28-vertical-dark",w:95,h:51},khajiit:{p:"khajiit/khajiit-28",w:170,h:28},"khajiit-dark":{p:"khajiit/khajiit-28-dark",w:170,h:28},"khajiit-en":{p:"khajiit/khajiit-en-28",w:142,h:28},"khajiit-en-dark":{p:"khajiit/khajiit-en-28-dark",w:142,h:28},"khajiit-en-vertical":{p:"khajiit/khajiit-en-28-vertical",w:77,h:53},"khajiit-en-vertical-dark":{p:"khajiit/khajiit-en-28-vertical-dark",w:77,h:53},"khajiit-vertical":{p:"khajiit/khajiit-28-vertical",w:86,h:51},"khajiit-vertical-dark":{p:"khajiit/khajiit-28-vertical-dark",w:86,h:51},kontur:{p:"kontur/kontur-28",w:81,h:28},"kontur-bigbusiness":{p:"kontur-bigbusiness/kontur-bigbusiness-28",w:279,h:28},"kontur-bigbusiness-dark":{p:"kontur-bigbusiness/kontur-bigbusiness-28-dark",w:279,h:28},"kontur-dark":{p:"kontur/kontur-28-dark",w:81,h:28},"kontur-en":{p:"kontur/kontur-en-28",w:74,h:28},"kontur-en-dark":{p:"kontur/kontur-en-28-dark",w:74,h:28},"kontur-journal":{p:"kontur-journal/kontur-journal-28",w:180,h:28},"kontur-journal-dark":{p:"kontur-journal/kontur-journal-28-dark",w:180,h:28},"kontur-newbusiness":{p:"kontur-newbusiness/kontur-newbusiness-28",w:267,h:28},"kontur-newbusiness-dark":{p:"kontur-newbusiness/kontur-newbusiness-28-dark",w:267,h:28},"kontur-partnership":{p:"kontur-partnership/kontur-partnership-28",w:228,h:28},"kontur-partnership-dark":{p:"kontur-partnership/kontur-partnership-28-dark",w:228,h:28},"kontur-retail-suppliers":{p:"kontur-retail-suppliers/kontur-retail-suppliers-28",w:372,h:28},"kontur-retail-suppliers-dark":{p:"kontur-retail-suppliers/kontur-retail-suppliers-28-dark",w:372,h:28},"kontur-tech-partnership":{p:"kontur-tech-partnership/kontur-tech-partnership-28",w:391,h:28},"kontur-tech-partnership-dark":{p:"kontur-tech-partnership/kontur-tech-partnership-28-dark",w:391,h:28},"kontur-work":{p:"kontur-work/kontur-work-28",w:223,h:28},"kontur-work-dark":{p:"kontur-work/kontur-work-28-dark",w:223,h:28},kpi:{p:"kpi/kpi-28",w:122,h:28},"kpi-dark":{p:"kpi/kpi-28-dark",w:122,h:28},"kpi-en":{p:"kpi/kpi-en-28",w:114,h:28},"kpi-en-dark":{p:"kpi/kpi-en-28-dark",w:114,h:28},"kpi-en-vertical":{p:"kpi/kpi-en-28-vertical",w:77,h:51},"kpi-en-vertical-dark":{p:"kpi/kpi-en-28-vertical-dark",w:77,h:51},"kpi-vertical":{p:"kpi/kpi-28-vertical",w:85,h:51},"kpi-vertical-dark":{p:"kpi/kpi-28-vertical-dark",w:85,h:51},"livechat-admin":{p:"livechat-admin/livechat-admin-28",w:248,h:28},"livechat-admin-dark":{p:"livechat-admin/livechat-admin-28-dark",w:248,h:28},"livechat-admin-vertical":{p:"livechat-admin/livechat-admin-28-vertical",w:164,h:51},"livechat-admin-vertical-dark":{p:"livechat-admin/livechat-admin-28-vertical-dark",w:164,h:51},"livechat-monitoring":{p:"livechat-monitoring/livechat-monitoring-28",w:287,h:28},"livechat-monitoring-dark":{p:"livechat-monitoring/livechat-monitoring-28-dark",w:287,h:28},"livechat-monitoring-vertical":{p:"livechat-monitoring/livechat-monitoring-28-vertical",w:203,h:53},"livechat-monitoring-vertical-dark":{p:"livechat-monitoring/livechat-monitoring-28-vertical-dark",w:203,h:53},m4d:{p:"m4d/m4d-28",w:246,h:28},"m4d-dark":{p:"m4d/m4d-28-dark",w:246,h:28},"m4d-vertical":{p:"m4d/m4d-28-vertical",w:162,h:53},"m4d-vertical-dark":{p:"m4d/m4d-28-vertical-dark",w:162,h:53},market:{p:"market/market-28",w:168,h:28},"market-dark":{p:"market/market-28-dark",w:168,h:28},"market-en":{p:"market/market-en-28",w:152,h:28},"market-en-dark":{p:"market/market-en-28-dark",w:152,h:28},"market-en-vertical":{p:"market/market-en-28-vertical",w:77,h:51},"market-en-vertical-dark":{p:"market/market-en-28-vertical-dark",w:77,h:51},"market-vertical":{p:"market/market-28-vertical",w:85,h:53},"market-vertical-dark":{p:"market/market-28-vertical-dark",w:85,h:53},"marking-fns":{p:"marking-fns/marking-fns-28",w:280,h:28},"marking-fns-dark":{p:"marking-fns/marking-fns-28-dark",w:280,h:28},"marking-fns-en":{p:"marking-fns/marking-fns-en-28",w:163,h:28},"marking-fns-en-dark":{p:"marking-fns/marking-fns-en-28-dark",w:163,h:28},"marking-fns-en-vertical":{p:"marking-fns/marking-fns-en-28-vertical",w:87,h:53},"marking-fns-en-vertical-dark":{p:"marking-fns/marking-fns-en-28-vertical-dark",w:87,h:53},"marking-fns-vertical":{p:"marking-fns/marking-fns-28-vertical",w:196,h:53},"marking-fns-vertical-dark":{p:"marking-fns/marking-fns-28-vertical-dark",w:196,h:53},markirovka:{p:"markirovka/markirovka-28",w:224,h:28},"markirovka-dark":{p:"markirovka/markirovka-28-dark",w:224,h:28},"markirovka-en":{p:"markirovka/markirovka-en-28",w:163,h:28},"markirovka-en-dark":{p:"markirovka/markirovka-en-28-dark",w:163,h:28},"markirovka-en-vertical":{p:"markirovka/markirovka-en-28-vertical",w:87,h:53},"markirovka-en-vertical-dark":{p:"markirovka/markirovka-en-28-vertical-dark",w:87,h:53},"markirovka-vertical":{p:"markirovka/markirovka-28-vertical",w:140,h:53},"markirovka-vertical-dark":{p:"markirovka/markirovka-28-vertical-dark",w:140,h:53},matrix:{p:"matrix/matrix-28",w:183,h:28},"matrix-dark":{p:"matrix/matrix-28-dark",w:183,h:28},"matrix-vertical":{p:"matrix/matrix-28-vertical",w:99,h:53},"matrix-vertical-dark":{p:"matrix/matrix-28-vertical-dark",w:99,h:53},mercury:{p:"mercury/mercury-28",w:198,h:28},"mercury-dark":{p:"mercury/mercury-28-dark",w:198,h:28},"mercury-vertical":{p:"mercury/mercury-28-vertical",w:114,h:53},"mercury-vertical-dark":{p:"mercury/mercury-28-vertical-dark",w:114,h:53},"nds-plus":{p:"nds-plus/nds-plus-28",w:151,h:28},"nds-plus-dark":{p:"nds-plus/nds-plus-28-dark",w:151,h:28},"nds-plus-vertical":{p:"nds-plus/nds-plus-28-vertical",w:85,h:52},"nds-plus-vertical-dark":{p:"nds-plus/nds-plus-28-vertical-dark",w:85,h:52},"neuro-core":{p:"neuro-core/neuro-core-28",w:197,h:28},"neuro-core-dark":{p:"neuro-core/neuro-core-28-dark",w:197,h:28},"neuro-core-en":{p:"neuro-core/neuro-core-en-28",w:195,h:28},"neuro-core-en-dark":{p:"neuro-core/neuro-core-en-28-dark",w:195,h:28},"neuro-core-en-vertical":{p:"neuro-core/neuro-core-en-28-vertical",w:119,h:51},"neuro-core-en-vertical-dark":{p:"neuro-core/neuro-core-en-28-vertical-dark",w:119,h:51},"neuro-core-vertical":{p:"neuro-core/neuro-core-28-vertical",w:113,h:53},"neuro-core-vertical-dark":{p:"neuro-core/neuro-core-28-vertical-dark",w:113,h:53},normativ:{p:"normativ/normativ-28",w:197,h:28},"normativ-dark":{p:"normativ/normativ-28-dark",w:197,h:28},"normativ-vertical":{p:"normativ/normativ-28-vertical",w:113,h:53},"normativ-vertical-dark":{p:"normativ/normativ-28-vertical-dark",w:113,h:53},"nuget-en":{p:"nuget/nuget-en-28",w:143,h:28},"nuget-en-dark":{p:"nuget/nuget-en-28-dark",w:143,h:28},"nuget-en-vertical":{p:"nuget/nuget-en-28-vertical",w:77,h:53},"nuget-en-vertical-dark":{p:"nuget/nuget-en-28-vertical-dark",w:77,h:53},ofd:{p:"ofd/ofd-28",w:142,h:28},"ofd-dark":{p:"ofd/ofd-28-dark",w:142,h:28},"ofd-vertical":{p:"ofd/ofd-28-vertical",w:85,h:52},"ofd-vertical-dark":{p:"ofd/ofd-28-vertical-dark",w:85,h:52},option:{p:"option/option-28",w:172,h:28},"option-dark":{p:"option/option-28-dark",w:172,h:28},"option-vertical":{p:"option/option-28-vertical",w:88,h:51},"option-vertical-dark":{p:"option/option-28-vertical-dark",w:88,h:51},oracle:{p:"oracle/oracle-28",w:168,h:28},"oracle-dark":{p:"oracle/oracle-28-dark",w:168,h:28},"oracle-vertical":{p:"oracle/oracle-28-vertical",w:85,h:53},"oracle-vertical-dark":{p:"oracle/oracle-28-vertical-dark",w:85,h:53},order:{p:"order/order-28",w:166,h:28},"order-dark":{p:"order/order-28-dark",w:166,h:28},"order-vertical":{p:"order/order-28-vertical",w:85,h:51},"order-vertical-dark":{p:"order/order-28-vertical-dark",w:85,h:51},organizator:{p:"organizator/organizator-28",w:231,h:28},"organizator-dark":{p:"organizator/organizator-28-dark",w:231,h:28},"organizator-vertical":{p:"organizator/organizator-28-vertical",w:147,h:53},"organizator-vertical-dark":{p:"organizator/organizator-28-vertical-dark",w:147,h:53},osis:{p:"osis/osis-28",w:154,h:28},"osis-dark":{p:"osis/osis-28-dark",w:154,h:28},"osis-vertical":{p:"osis/osis-28-vertical",w:85,h:51},"osis-vertical-dark":{p:"osis/osis-28-vertical-dark",w:85,h:51},otchetru:{p:"otchetru/otchetru-28",w:182,h:28},"otchetru-dark":{p:"otchetru/otchetru-28-dark",w:182,h:28},"otchetru-vertical":{p:"otchetru/otchetru-28-vertical",w:98,h:53},"otchetru-vertical-dark":{p:"otchetru/otchetru-28-vertical-dark",w:98,h:53},palantir:{p:"palantir/palantir-28",w:192,h:28},"palantir-dark":{p:"palantir/palantir-28-dark",w:192,h:28},"palantir-vertical":{p:"palantir/palantir-28-vertical",w:108,h:53},"palantir-vertical-dark":{p:"palantir/palantir-28-vertical-dark",w:108,h:53},pam:{p:"pam/pam-28",w:135,h:28},"pam-dark":{p:"pam/pam-28-dark",w:135,h:28},"pam-vertical":{p:"pam/pam-28-vertical",w:85,h:51},"pam-vertical-dark":{p:"pam/pam-28-vertical-dark",w:85,h:51},panda:{p:"panda/panda-28",w:154,h:28},"panda-dark":{p:"panda/panda-28-dark",w:154,h:28},"panda-vertical":{p:"panda/panda-28-vertical",w:85,h:51},"panda-vertical-dark":{p:"panda/panda-28-vertical-dark",w:85,h:51},personal:{p:"personal/personal-28",w:195,h:28},"personal-dark":{p:"personal/personal-28-dark",w:195,h:28},"personal-vertical":{p:"personal/personal-28-vertical",w:111,h:53},"personal-vertical-dark":{p:"personal/personal-28-vertical-dark",w:111,h:53},"pf-otchet-plus":{p:"pf-otchet-plus/pf-otchet-plus-28",w:258,h:28},"pf-otchet-plus-dark":{p:"pf-otchet-plus/pf-otchet-plus-28-dark",w:258,h:28},"pf-otchet-plus-vertical":{p:"pf-otchet-plus/pf-otchet-plus-28-vertical",w:174,h:51},"pf-otchet-plus-vertical-dark":{p:"pf-otchet-plus/pf-otchet-plus-28-vertical-dark",w:174,h:51},podbor:{p:"podbor/podbor-28",w:172,h:28},"podbor-dark":{p:"podbor/podbor-28-dark",w:172,h:28},"podbor-vertical":{p:"podbor/podbor-28-vertical",w:88,h:53},"podbor-vertical-dark":{p:"podbor/podbor-28-vertical-dark",w:88,h:53},postavki:{p:"postavki/postavki-28",w:190,h:28},"postavki-dark":{p:"postavki/postavki-28-dark",w:190,h:28},"postavki-vertical":{p:"postavki/postavki-28-vertical",w:106,h:51},"postavki-vertical-dark":{p:"postavki/postavki-28-vertical-dark",w:106,h:51},product:{p:"product/product-28",w:178,h:28},"product-dark":{p:"product/product-28-dark",w:178,h:28},"product-en":{p:"product/product-en-28",w:164,h:28},"product-en-dark":{p:"product/product-en-28-dark",w:164,h:28},"product-en-vertical":{p:"product/product-en-28-vertical",w:88,h:51},"product-en-vertical-dark":{p:"product/product-en-28-vertical-dark",w:88,h:51},"product-vertical":{p:"product/product-28-vertical",w:94,h:53},"product-vertical-dark":{p:"product/product-28-vertical-dark",w:94,h:53},pulse:{p:"pulse/pulse-28",w:151,h:28},"pulse-dark":{p:"pulse/pulse-28-dark",w:151,h:28},"pulse-en":{p:"pulse/pulse-en-28",w:135,h:28},"pulse-en-dark":{p:"pulse/pulse-en-28-dark",w:135,h:28},"pulse-en-vertical":{p:"pulse/pulse-en-28-vertical",w:77,h:51},"pulse-en-vertical-dark":{p:"pulse/pulse-en-28-vertical-dark",w:77,h:51},"pulse-vertical":{p:"pulse/pulse-28-vertical",w:85,h:53},"pulse-vertical-dark":{p:"pulse/pulse-28-vertical-dark",w:85,h:53},"real-estate":{p:"real-estate/real-estate-28",w:253,h:28},"real-estate-admin":{p:"real-estate-admin/real-estate-admin-28",w:355,h:28},"real-estate-admin-dark":{p:"real-estate-admin/real-estate-admin-28-dark",w:355,h:28},"real-estate-admin-vertical":{p:"real-estate-admin/real-estate-admin-28-vertical",w:271,h:51},"real-estate-admin-vertical-dark":{p:"real-estate-admin/real-estate-admin-28-vertical-dark",w:271,h:51},"real-estate-dark":{p:"real-estate/real-estate-28-dark",w:253,h:28},"real-estate-vertical":{p:"real-estate/real-estate-28-vertical",w:169,h:51},"real-estate-vertical-dark":{p:"real-estate/real-estate-28-vertical-dark",w:169,h:51},reestro:{p:"reestro/reestro-28",w:178,h:28},"reestro-admin":{p:"reestro-admin/reestro-admin-28",w:280,h:28},"reestro-admin-dark":{p:"reestro-admin/reestro-admin-28-dark",w:280,h:28},"reestro-admin-vertical":{p:"reestro-admin/reestro-admin-28-vertical",w:196,h:53},"reestro-admin-vertical-dark":{p:"reestro-admin/reestro-admin-28-vertical-dark",w:196,h:53},"reestro-dark":{p:"reestro/reestro-28-dark",w:178,h:28},"reestro-vertical":{p:"reestro/reestro-28-vertical",w:94,h:53},"reestro-vertical-dark":{p:"reestro/reestro-28-vertical-dark",w:94,h:53},reformator:{p:"reformator/reformator-28",w:226,h:28},"reformator-dark":{p:"reformator/reformator-28-dark",w:226,h:28},"reformator-vertical":{p:"reformator/reformator-28-vertical",w:142,h:53},"reformator-vertical-dark":{p:"reformator/reformator-28-vertical-dark",w:142,h:53},registrator:{p:"registrator/registrator-28",w:226,h:28},"registrator-dark":{p:"registrator/registrator-28-dark",w:226,h:28},"registrator-en":{p:"registrator/registrator-en-28",w:196,h:28},"registrator-en-dark":{p:"registrator/registrator-en-28-dark",w:196,h:28},"registrator-en-vertical":{p:"registrator/registrator-en-28-vertical",w:120,h:53},"registrator-en-vertical-dark":{p:"registrator/registrator-en-28-vertical-dark",w:120,h:53},"registrator-vertical":{p:"registrator/registrator-28-vertical",w:142,h:53},"registrator-vertical-dark":{p:"registrator/registrator-28-vertical-dark",w:142,h:53},reseller:{p:"reseller/reseller-28",w:170,h:28},"reseller-dark":{p:"reseller/reseller-28-dark",w:170,h:28},"reseller-en":{p:"reseller/reseller-en-28",w:162,h:28},"reseller-en-dark":{p:"reseller/reseller-en-28-dark",w:162,h:28},"reseller-en-vertical":{p:"reseller/reseller-en-28-vertical",w:86,h:51},"reseller-en-vertical-dark":{p:"reseller/reseller-en-28-vertical-dark",w:86,h:51},"reseller-vertical":{p:"reseller/reseller-28-vertical",w:86,h:51},"reseller-vertical-dark":{p:"reseller/reseller-28-vertical-dark",w:86,h:51},roadmaps:{p:"roadmaps/roadmaps-28",w:200,h:28},"roadmaps-dark":{p:"roadmaps/roadmaps-28-dark",w:200,h:28},"roadmaps-vertical":{p:"roadmaps/roadmaps-28-vertical",w:116,h:53},"roadmaps-vertical-dark":{p:"roadmaps/roadmaps-28-vertical-dark",w:116,h:53},sales:{p:"sales/sales-28",w:188,h:28},"sales-dark":{p:"sales/sales-28-dark",w:188,h:28},"sales-vertical":{p:"sales/sales-28-vertical",w:104,h:53},"sales-vertical-dark":{p:"sales/sales-28-vertical-dark",w:104,h:53},sara:{p:"sara/sara-28",w:141,h:28},"sara-dark":{p:"sara/sara-28-dark",w:141,h:28},"sara-vertical":{p:"sara/sara-28-vertical",w:85,h:53},"sara-vertical-dark":{p:"sara/sara-28-vertical-dark",w:85,h:53},scanner:{p:"scanner/scanner-28",w:167,h:28},"scanner-dark":{p:"scanner/scanner-28-dark",w:167,h:28},"scanner-vertical":{p:"scanner/scanner-28-vertical",w:85,h:53},"scanner-vertical-dark":{p:"scanner/scanner-28-vertical-dark",w:85,h:53},school:{p:"school/school-28",w:160,h:28},"school-academy":{p:"school-academy/school-academy-28",w:194,h:28},"school-academy-dark":{p:"school-academy/school-academy-28-dark",w:194,h:28},"school-academy-vertical":{p:"school-academy/school-academy-28-vertical",w:110,h:51},"school-academy-vertical-dark":{p:"school-academy/school-academy-28-vertical-dark",w:110,h:51},"school-dark":{p:"school/school-28-dark",w:160,h:28},"school-vertical":{p:"school/school-28-vertical",w:85,h:51},"school-vertical-dark":{p:"school/school-28-vertical-dark",w:85,h:51},security:{p:"security/security-28",w:239,h:28},"security-dark":{p:"security/security-28-dark",w:239,h:28},"security-vertical":{p:"security/security-28-vertical",w:155,h:51},"security-vertical-dark":{p:"security/security-28-vertical-dark",w:155,h:51},segmentplus:{p:"segmentplus/segmentplus-28",w:193,h:28},"segmentplus-dark":{p:"segmentplus/segmentplus-28-dark",w:193,h:28},"segmentplus-en":{p:"segmentplus/segmentplus-en-28",w:187,h:28},"segmentplus-en-dark":{p:"segmentplus/segmentplus-en-28-dark",w:187,h:28},"segmentplus-en-vertical":{p:"segmentplus/segmentplus-en-28-vertical",w:111,h:53},"segmentplus-en-vertical-dark":{p:"segmentplus/segmentplus-en-28-vertical-dark",w:111,h:53},"segmentplus-vertical":{p:"segmentplus/segmentplus-28-vertical",w:109,h:51},"segmentplus-vertical-dark":{p:"segmentplus/segmentplus-28-vertical-dark",w:109,h:51},sentinel:{p:"sentinel/sentinel-28",w:202,h:28},"sentinel-dark":{p:"sentinel/sentinel-28-dark",w:202,h:28},"sentinel-vertical":{p:"sentinel/sentinel-28-vertical",w:118,h:53},"sentinel-vertical-dark":{p:"sentinel/sentinel-28-vertical-dark",w:118,h:53},"shantak-en":{p:"shantak/shantak-en-28",w:164,h:28},"shantak-en-dark":{p:"shantak/shantak-en-28-dark",w:164,h:28},"shantak-en-vertical":{p:"shantak/shantak-en-28-vertical",w:88,h:51},"shantak-en-vertical-dark":{p:"shantak/shantak-en-28-vertical-dark",w:88,h:51},showcase:{p:"showcase/showcase-28",w:179,h:28},"showcase-dark":{p:"showcase/showcase-28-dark",w:179,h:28},"showcase-vertical":{p:"showcase/showcase-28-vertical",w:95,h:53},"showcase-vertical-dark":{p:"showcase/showcase-28-vertical-dark",w:95,h:53},sirena:{p:"sirena/sirena-28",w:168,h:28},"sirena-dark":{p:"sirena/sirena-28-dark",w:168,h:28},"sirena-en":{p:"sirena/sirena-en-28",w:144,h:28},"sirena-en-dark":{p:"sirena/sirena-en-28-dark",w:144,h:28},"sirena-en-vertical":{p:"sirena/sirena-en-28-vertical",w:77,h:51},"sirena-en-vertical-dark":{p:"sirena/sirena-en-28-vertical-dark",w:77,h:51},"sirena-vertical":{p:"sirena/sirena-28-vertical",w:85,h:53},"sirena-vertical-dark":{p:"sirena/sirena-28-vertical-dark",w:85,h:53},skbkontur:{p:"skbkontur/skbkontur-28",w:172,h:28},"skbkontur-dark":{p:"skbkontur/skbkontur-28-dark",w:172,h:28},"skbkontur-en":{p:"skbkontur/skbkontur-en-28",w:143,h:28},"skbkontur-en-dark":{p:"skbkontur/skbkontur-en-28-dark",w:143,h:28},slomon:{p:"slomon/slomon-28",w:166,h:28},"slomon-dark":{p:"slomon/slomon-28-dark",w:166,h:28},"slomon-vertical":{p:"slomon/slomon-28-vertical",w:85,h:51},"slomon-vertical-dark":{p:"slomon/slomon-28-vertical-dark",w:85,h:51},smev:{p:"smev/smev-28",w:154,h:28},"smev-dark":{p:"smev/smev-28-dark",w:154,h:28},"smev-vertical":{p:"smev/smev-28-vertical",w:85,h:51},"smev-vertical-dark":{p:"smev/smev-28-vertical-dark",w:85,h:51},snab:{p:"snab/snab-28",w:142,h:28},"snab-dark":{p:"snab/snab-28-dark",w:142,h:28},"snab-vertical":{p:"snab/snab-28-vertical",w:85,h:51},"snab-vertical-dark":{p:"snab/snab-28-vertical-dark",w:85,h:51},soczaschita:{p:"soczaschita/soczaschita-28",w:209,h:28},"soczaschita-dark":{p:"soczaschita/soczaschita-28-dark",w:209,h:28},"soczaschita-vertical":{p:"soczaschita/soczaschita-28-vertical",w:125,h:51},"soczaschita-vertical-dark":{p:"soczaschita/soczaschita-28-vertical-dark",w:125,h:51},"space-core":{p:"space-core/space-core-28",w:193,h:28},"space-core-dark":{p:"space-core/space-core-28-dark",w:193,h:28},"space-core-en":{p:"space-core/space-core-en-28",w:196,h:28},"space-core-en-dark":{p:"space-core/space-core-en-28-dark",w:196,h:28},"space-core-en-vertical":{p:"space-core/space-core-en-28-vertical",w:120,h:53},"space-core-en-vertical-dark":{p:"space-core/space-core-en-28-vertical-dark",w:120,h:53},"space-core-vertical":{p:"space-core/space-core-28-vertical",w:109,h:53},"space-core-vertical-dark":{p:"space-core/space-core-28-vertical-dark",w:109,h:53},"speech-core":{p:"speech-core/speech-core-28",w:180,h:28},"speech-core-dark":{p:"speech-core/speech-core-28-dark",w:180,h:28},"speech-core-en":{p:"speech-core/speech-core-en-28",w:210,h:28},"speech-core-en-dark":{p:"speech-core/speech-core-en-28-dark",w:210,h:28},"speech-core-en-vertical":{p:"speech-core/speech-core-en-28-vertical",w:134,h:53},"speech-core-en-vertical-dark":{p:"speech-core/speech-core-en-28-vertical-dark",w:134,h:53},"speech-core-vertical":{p:"speech-core/speech-core-28-vertical",w:96,h:53},"speech-core-vertical-dark":{p:"speech-core/speech-core-28-vertical-dark",w:96,h:53},ssanta:{p:"ssanta/ssanta-28",w:232,h:28},"ssanta-dark":{p:"ssanta/ssanta-28-dark",w:232,h:28},"ssanta-vertical":{p:"ssanta/ssanta-28-vertical",w:150,h:51},"ssanta-vertical-dark":{p:"ssanta/ssanta-28-vertical-dark",w:150,h:51},staff:{p:"staff/staff-28",w:158,h:28},"staff-dark":{p:"staff/staff-28-dark",w:158,h:28},"staff-vertical":{p:"staff/staff-28-vertical",w:85,h:53},"staff-vertical-dark":{p:"staff/staff-28-vertical-dark",w:85,h:53},staffcop:{p:"staffcop/staffcop-28",w:99,h:28},"staffcop-dark":{p:"staffcop/staffcop-28-dark",w:99,h:28},"staffcop-en":{p:"staffcop/staffcop-en-28",w:99,h:28},"staffcop-en-dark":{p:"staffcop/staffcop-en-28-dark",w:99,h:28},start:{p:"start/start-28",w:150,h:28},"start-dark":{p:"start/start-28-dark",w:150,h:28},"start-vertical":{p:"start/start-28-vertical",w:85,h:53},"start-vertical-dark":{p:"start/start-28-vertical-dark",w:85,h:53},statuspage:{p:"statuspage/statuspage-28",w:209,h:28},"statuspage-dark":{p:"statuspage/statuspage-28-dark",w:209,h:28},"statuspage-vertical":{p:"statuspage/statuspage-28-vertical",w:125,h:53},"statuspage-vertical-dark":{p:"statuspage/statuspage-28-vertical-dark",w:125,h:53},stream:{p:"stream/stream-28",w:157,h:28},"stream-dark":{p:"stream/stream-28-dark",w:157,h:28},"stream-vertical":{p:"stream/stream-28-vertical",w:85,h:53},"stream-vertical-dark":{p:"stream/stream-28-vertical-dark",w:85,h:53},"support-center":{p:"support-center/support-center-28",w:283,h:28},"support-center-dark":{p:"support-center/support-center-28-dark",w:283,h:28},"support-center-vertical":{p:"support-center/support-center-28-vertical",w:199,h:53},"support-center-vertical-dark":{p:"support-center/support-center-28-vertical-dark",w:199,h:53},"support-trades":{p:"support-trades/support-trades-28",w:346,h:28},"support-trades-dark":{p:"support-trades/support-trades-28-dark",w:346,h:28},"support-trades-vertical":{p:"support-trades/support-trades-28-vertical",w:183,h:75},"support-trades-vertical-dark":{p:"support-trades/support-trades-28-vertical-dark",w:183,h:75},svetofor:{p:"svetofor/svetofor-28",w:197,h:28},"svetofor-dark":{p:"svetofor/svetofor-28-dark",w:197,h:28},"svetofor-vertical":{p:"svetofor/svetofor-28-vertical",w:113,h:53},"svetofor-vertical-dark":{p:"svetofor/svetofor-28-vertical-dark",w:113,h:53},talk:{p:"talk/talk-28",w:134,h:28},"talk-dark":{p:"talk/talk-28-dark",w:134,h:28},"talk-en":{p:"talk/talk-en-28",w:117,h:28},"talk-en-dark":{p:"talk/talk-en-28-dark",w:117,h:28},"talk-en-vertical":{p:"talk/talk-en-28-vertical",w:77,h:51},"talk-en-vertical-dark":{p:"talk/talk-en-28-vertical-dark",w:77,h:51},"talk-vertical":{p:"talk/talk-28-vertical",w:85,h:51},"talk-vertical-dark":{p:"talk/talk-28-vertical-dark",w:85,h:51},"tax-monitor":{p:"tax-monitor/tax-monitor-28",w:344,h:28},"tax-monitor-dark":{p:"tax-monitor/tax-monitor-28-dark",w:344,h:28},"tax-monitor-vertical":{p:"tax-monitor/tax-monitor-28-vertical",w:134,h:75},"tax-monitor-vertical-dark":{p:"tax-monitor/tax-monitor-28-vertical-dark",w:134,h:75},template:{p:"template/template-28",w:176,h:28},"template-dark":{p:"template/template-28-dark",w:176,h:28},"template-en":{p:"template/template-en-28",w:174,h:28},"template-en-dark":{p:"template/template-en-28-dark",w:174,h:28},"template-en-vertical":{p:"template/template-en-28-vertical",w:100,h:53},"template-en-vertical-dark":{p:"template/template-en-28-vertical-dark",w:100,h:53},"template-vertical":{p:"template/template-28-vertical",w:92,h:51},"template-vertical-dark":{p:"template/template-28-vertical-dark",w:92,h:51},thor:{p:"thor/thor-28",w:124,h:28},"thor-dark":{p:"thor/thor-28-dark",w:124,h:28},"thor-en":{p:"thor/thor-en-28",w:125,h:28},"thor-en-dark":{p:"thor/thor-en-28-dark",w:125,h:28},"thor-en-vertical":{p:"thor/thor-en-28-vertical",w:77,h:51},"thor-en-vertical-dark":{p:"thor/thor-en-28-vertical-dark",w:77,h:51},"thor-vertical":{p:"thor/thor-28-vertical",w:85,h:53},"thor-vertical-dark":{p:"thor/thor-28-vertical-dark",w:85,h:53},transcript:{p:"transcript/transcript-28",w:213,h:28},"transcript-dark":{p:"transcript/transcript-28-dark",w:213,h:28},"transcript-vertical":{p:"transcript/transcript-28-vertical",w:131,h:53},"transcript-vertical-dark":{p:"transcript/transcript-28-vertical-dark",w:131,h:53},trip:{p:"trip/trip-28",w:250,h:28},"trip-dark":{p:"trip/trip-28-dark",w:250,h:28},"trip-vertical":{p:"trip/trip-28-vertical",w:166,h:53},"trip-vertical-dark":{p:"trip/trip-28-vertical-dark",w:166,h:53},"uchet-tmc":{p:"uchet-tmc/uchet-tmc-28",w:190,h:28},"uchet-tmc-dark":{p:"uchet-tmc/uchet-tmc-28-dark",w:190,h:28},"uchet-tmc-vertical":{p:"uchet-tmc/uchet-tmc-28-vertical",w:106,h:52},"uchet-tmc-vertical-dark":{p:"uchet-tmc/uchet-tmc-28-vertical-dark",w:106,h:52},"ui-en":{p:"ui/ui-en-28",w:100,h:28},"ui-en-dark":{p:"ui/ui-en-28-dark",w:100,h:28},"ui-en-vertical":{p:"ui/ui-en-28-vertical",w:77,h:51},"ui-en-vertical-dark":{p:"ui/ui-en-28-vertical-dark",w:77,h:51},urv:{p:"urv/urv-28",w:131,h:28},"urv-dark":{p:"urv/urv-28-dark",w:131,h:28},"urv-vertical":{p:"urv/urv-28-vertical",w:85,h:51},"urv-vertical-dark":{p:"urv/urv-28-vertical-dark",w:85,h:51},vacations:{p:"vacations/vacations-28",w:178,h:28},"vacations-dark":{p:"vacations/vacations-28-dark",w:178,h:28},"vacations-vertical":{p:"vacations/vacations-28-vertical",w:94,h:53},"vacations-vertical-dark":{p:"vacations/vacations-28-vertical-dark",w:94,h:53},vitrina:{p:"vitrina/vitrina-28",w:179,h:28},"vitrina-dark":{p:"vitrina/vitrina-28-dark",w:179,h:28},"vitrina-vertical":{p:"vitrina/vitrina-28-vertical",w:95,h:53},"vitrina-vertical-dark":{p:"vitrina/vitrina-28-vertical-dark",w:95,h:53},"voronkanaima-beta":{p:"voronkanaima-beta/voronkanaima-beta-28",w:252,h:28},"voronkanaima-beta-dark":{p:"voronkanaima-beta/voronkanaima-beta-28-dark",w:252,h:28},"voronkanaima-beta-vertical":{p:"voronkanaima-beta/voronkanaima-beta-28-vertical",w:168,h:53},"voronkanaima-beta-vertical-dark":{p:"voronkanaima-beta/voronkanaima-beta-28-vertical-dark",w:168,h:53},waybills:{p:"waybills/waybills-28",w:249,h:28},"waybills-dark":{p:"waybills/waybills-28-dark",w:249,h:28},"waybills-vertical":{p:"waybills/waybills-28-vertical",w:165,h:53},"waybills-vertical-dark":{p:"waybills/waybills-28-vertical-dark",w:165,h:53},wic:{p:"wic/wic-28",w:130,h:28},"wic-dark":{p:"wic/wic-28-dark",w:130,h:28},"wic-vertical":{p:"wic/wic-28-vertical",w:85,h:51},"wic-vertical-dark":{p:"wic/wic-28-vertical-dark",w:85,h:51},yggdrasil:{p:"yggdrasil/yggdrasil-28",w:214,h:28},"yggdrasil-dark":{p:"yggdrasil/yggdrasil-28-dark",w:214,h:28},"yggdrasil-vertical":{p:"yggdrasil/yggdrasil-28-vertical",w:130,h:53},"yggdrasil-vertical-dark":{p:"yggdrasil/yggdrasil-28-vertical-dark",w:130,h:53},zakupki:{p:"zakupki/zakupki-28",w:175,h:28},"zakupki-dark":{p:"zakupki/zakupki-28-dark",w:175,h:28},"zakupki-en":{p:"zakupki/zakupki-en-28",w:188,h:28},"zakupki-en-dark":{p:"zakupki/zakupki-en-28-dark",w:188,h:28},"zakupki-en-vertical":{p:"zakupki/zakupki-en-28-vertical",w:112,h:51},"zakupki-en-vertical-dark":{p:"zakupki/zakupki-en-28-vertical-dark",w:112,h:51},"zakupki-vertical":{p:"zakupki/zakupki-28-vertical",w:91,h:53},"zakupki-vertical-dark":{p:"zakupki/zakupki-28-vertical-dark",w:91,h:53},zarplata:{p:"zarplata/zarplata-28",w:189,h:28},"zarplata-dark":{p:"zarplata/zarplata-28-dark",w:189,h:28},"zarplata-vertical":{p:"zarplata/zarplata-28-vertical",w:105,h:53},"zarplata-vertical-dark":{p:"zarplata/zarplata-28-vertical-dark",w:105,h:53}},qa="https://s.kontur.ru/common-v2/logos/v2",Ya=a=>{const e=E[a];return e?`${qa}/${e.p}.svg`:""},Ka=y.createContext(Ya),Va=()=>y.useContext(Ka),Za={root:"CdnLogo__root"},Ja=(a,e)=>{if(!e||a.endsWith("-dark"))return a;const r=`${a}-dark`;return r in E?r:a},b=y.forwardRef(({logo:a,style:e,color:r,name:n,useDarkThemeColors:t,size:i,...s},u)=>{const p=Va(),v=Ja(a,t),g=E[v]??{w:28,h:28},w={flexShrink:0,...e};return h.jsx("img",{"data-tid":Za.root,...s,"aria-hidden":!n,alt:n,ref:u,style:w,src:p(v),width:i?Math.round(i/g.h*g.w):g.w,height:i||g.h})});b.displayName="CdnLogo";b.__docgenInfo={description:"",methods:[],displayName:"CdnLogo"};var J={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/var Ke;function Qa(){return Ke||(Ke=1,(function(a){(function(){var e={}.hasOwnProperty;function r(){for(var n=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var s=typeof i;if(s==="string"||s==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var u=r.apply(null,i);u&&n.push(u)}}else if(s==="object")if(i.toString===Object.prototype.toString)for(var p in i)e.call(i,p)&&i[p]&&n.push(p);else n.push(i.toString())}}return n.join(" ")}a.exports?(r.default=r,a.exports=r):window.classNames=r})()})(J)),J.exports}var er=Qa();const Ve=ga(er);var ar=Pa("ToolPencilIcon16Light",function(a,e){return d.createElement(Ea,P({ref:e},a),d.createElement("path",{d:"M13.027 5.466a.75.75 0 0 1 .007 1.06L9.24 10.37a1.75 1.75 0 0 1-2.483.008L2.97 6.59a.75.75 0 0 1 1.06-1.06L7.82 9.316a.25.25 0 0 0 .354-.002l3.793-3.842a.75.75 0 0 1 1.06-.007Z"}))}),rr=function(a){var e=new WeakMap;return function(r){return e.has(r)||e.set(r,a(r)),e.get(r)}},tr=(function(a){te(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return Object.defineProperty(e,"addonsTopBarTextColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarBg",{get:function(){return this.bgDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarItemHeight",{get:function(){return this.addonsTopBarHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarItemLineHeight",{get:function(){return this.addonsTopBarItemHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarAvatarItemHeight",{get:function(){return"calc(".concat(this.addonsUserAvatarSize," + 2 * ").concat(this.addonsTopBarAvatarItemOutline,")")},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarAvatarItemPaddingY",{get:function(){return this.addonsTopBarAvatarItemOutline},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarAvatarItemPaddingX",{get:function(){return this.addonsTopBarAvatarItemOutline},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarAvatarItemMarginY",{get:function(){return"-".concat(this.addonsTopBarAvatarItemOutline)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarAvatarItemMarginX",{get:function(){return"calc(-".concat(this.addonsTopBarAvatarItemOutline," + ").concat(this.addonsTopBarAvatarItemGap,")")},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsLogoBorderColorFocus",{get:function(){return this.borderColorFocus},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsLogoDividerBg",{get:function(){return this.addonsTopBarDividerBg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsLogoButtonHeight",{get:function(){return this.addonsLogoButtonSize},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsLogoButtonWidth",{get:function(){return this.addonsLogoButtonSize},enumerable:!1,configurable:!0}),e.addonsTopBarShadow="",e.addonsTopBarDividerBg="#dfdfdf",e.addonsTopBarDividerHeight="24px",e.addonsTopBarDividerMarginX="8px",e.addonsTopBarHeight="32px",e.addonsTopBarItemPaddingY="0px",e.addonsTopBarItemPaddingX="8px",e.addonsTopBarItemMarginY="0px",e.addonsTopBarItemMarginX="0px",e.addonsTopBarAvatarItemOutline="4px",e.addonsTopBarAvatarItemGap="8px",e.addonsTopBarPaddingX="8px",e.addonsTopBarPaddingY="16px",e.addonsTopBarMarginBottom="0",e.addonsTopBarItemIconGap="8px",e.addonsTopBarIconColor="#222",e.addonsTopBarItemBorderRadius="5px",e.addonsTopBarItemActionBackground="rgba(240, 240, 240, 1)",e.addonsTopBarOrganizationsArrowWidth="32px",e.addonsTopBarMenuSeparatorMarginX="12px",e.addonsTopBarMenuSeparatorMarginY="4px",e.addonsTopBarMenuSeparatorColor="rgba(240, 240, 240, 1)",e.addonsTopBarMenuItemHoverBg="rgba(240, 240, 240, 1)",e.addonsTopBarMenuItemHoverColor="rgba(34, 34, 34, 1)",e.addonsTopBarMenuItemCommentColorHover="#3C3C3C",e.addonsTopBarMenuItemPaddingX="12px",e.addonsLogoColor="#000",e.addonsLogoHoverColor="#000",e.addonsLogoDividerHeight="24px",e.addonsLogoDividerWidth="0px",e.addonsLogoDividerMarginX="0",e.addonsLogoWidgetPaddingX="0px",e.addonsLogoButtonSize="24px",e.addonsLogoButtonMarginLeft="4px",e.addonsLogoButtonActionBorderRadius="50%",e.addonsLogoButtonActionBackground="none",e.addonsLogoButtonColor="#aaa",e.addonsLogoButtonActionColor="#222",e.addonsUserAvatarSize="32px",e.addonsUserAvatarBorderRadius="100%",e.addonsUserAvatarBorderColor="#222222",e.addonsUserAvatarBackground="transparent",e.addonsUserAvatarHoverBackground="#222",e.addonsUserAvatarActiveBackground="#222",e.addonsUserAvatarColor="#222",e.addonsUserAvatarHoverColor="#fff",e.addonsUserAvatarActiveColor="#fff",e})((function(){function a(){}return a})()),ba="__IS_REACT_UI_ADDONS_THEME__",nr=function(a){var e;return Object.create(a,(e={},e[ba]={value:!0,writable:!1,enumerable:!1,configurable:!1},e))},ir=function(a){return a[ba]===!0},or=ma(tr),lr=(function(a){te(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return Object.defineProperty(e,"addonsTopBarIconColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarMenuItemHoverBg",{get:function(){return this.bgActive},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarMenuItemHoverColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsTopBarMenuItemCommentColorHover",{get:function(){return this.textColorDisabledContrast},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsLogoColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsLogoButtonActionColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsUserAvatarColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsUserAvatarHoverColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsUserAvatarActiveColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),Object.defineProperty(e,"addonsUserAvatarBorderColor",{get:function(){return this.textColorDefault},enumerable:!1,configurable:!0}),e.addonsTopBarDividerBg="rgba(255, 255, 255, 0.08)",e.addonsTopBarItemActionBackground="#313131",e.addonsTopBarMenuSeparatorColor="rgba(255, 255, 255, 0.08)",e.addonsLogoButtonActionBackground="#1F1F1F",e.addonsUserAvatarBackground="transparent",e.addonsUserAvatarHoverBackground="#1F1F1F",e.addonsUserAvatarActiveBackground="#1F1F1F",e})((function(){function a(){}return a})()),cr=ma(lr),sr=function(a){if(ir(a))return a;for(var e=Object.create(a,Object.assign(Object.getOwnPropertyDescriptors(or),fa(a)?Object.getOwnPropertyDescriptors(cr):{})),r=function(s){var u=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(e,s,{get:function(){if(u){var p=u.get,v=u.value;return a[s]||(Ia(p)?p.call(this):v)}}})},n=0,t=Object.keys(e);n<t.length;n++){var i=t[n];r(i)}return nr(e)},dr=rr(function(a){return sr(a)});function pr(a){return a.length===0}var hr=function(a){if(pr(a)){var e=!1,r;return function(){return e||(e=!0,r=a()),r}}var n=new WeakMap;return function(t){return n.has(t)||n.set(t,a(t)),n.get(t)}},ur=function(a){return Object.keys(a).forEach(function(e){return a[e]=hr(a[e])}),a},kr={root:function(a){return o(Ze||(Ze=m([`
      display: inline-flex;
      font-weight: 400;
      text-decoration: none;
      position: relative;
      outline: none;
      user-select: none;
      border-radius: 2px;
      &:focus-visible {
        box-shadow: 0 0 0 2px `,`;
      }
    `],[`
      display: inline-flex;
      font-weight: 400;
      text-decoration: none;
      position: relative;
      outline: none;
      user-select: none;
      border-radius: 2px;
      &:focus-visible {
        box-shadow: 0 0 0 2px `,`;
      }
    `])),a.addonsLogoBorderColorFocus)},divider:function(a){return o(Je||(Je=m([`
      position: relative;
      height: `,`;
      margin-left: `,`;
      width: `,`;
      display: flex;
      align-items: center;
      overflow: hidden;

      &:before {
        content: '';
        display: block;
        height: 60%;
        min-height: 24px;
        width: 1px;
        left: 0;
        background-color: `,`;
      }
    `],[`
      position: relative;
      height: `,`;
      margin-left: `,`;
      width: `,`;
      display: flex;
      align-items: center;
      overflow: hidden;

      &:before {
        content: '';
        display: block;
        height: 60%;
        min-height: 24px;
        width: 1px;
        left: 0;
        background-color: `,`;
      }
    `])),a.addonsLogoDividerHeight,a.addonsLogoDividerMarginX,a.addonsLogoDividerWidth,a.addonsTopBarDividerBg)},dropdown:function(){return o(Qe||(Qe=m([`
      height: 100%;
      display: inline-flex;
      flex-wrap: nowrap;
      align-items: center;
    `],[`
      height: 100%;
      display: inline-flex;
      flex-wrap: nowrap;
      align-items: center;
    `])))},inline:function(){return o(ea||(ea=m([`
      display: inline-flex;
    `],[`
      display: inline-flex;
    `])))},widgetWrapper:function(){return o(aa||(aa=m([`
      display: flex;
      cursor: pointer;
      align-items: center;
    `],[`
      display: flex;
      cursor: pointer;
      align-items: center;
    `])))},button:function(a){return o(ra||(ra=m([`
      height: `,`;
      width: `,`;
      box-sizing: content-box;
      display: inline-block;
      align-items: center;
      cursor: pointer;
      outline: 0;
      padding: 0 `,`;
      margin-left: `,`;
      position: relative;
      background: none;
      border: none;
      border-radius: `,`;
      transition: background 200ms;
      color: `,`;

      &:hover,
      &:focus {
        color: `,`;
        background: `,`;
      }
      &:focus-visible {
        box-shadow: 0 0 0 2px `,`;
      }
    `],[`
      height: `,`;
      width: `,`;
      box-sizing: content-box;
      display: inline-block;
      align-items: center;
      cursor: pointer;
      outline: 0;
      padding: 0 `,`;
      margin-left: `,`;
      position: relative;
      background: none;
      border: none;
      border-radius: `,`;
      transition: background 200ms;
      color: `,`;

      &:hover,
      &:focus {
        color: `,`;
        background: `,`;
      }
      &:focus-visible {
        box-shadow: 0 0 0 2px `,`;
      }
    `])),a.addonsLogoButtonHeight,a.addonsLogoButtonWidth,a.addonsLogoWidgetPaddingX,a.addonsLogoButtonMarginLeft,a.addonsLogoButtonActionBorderRadius,a.addonsLogoButtonColor,a.addonsLogoButtonActionColor,a.addonsLogoButtonActionBackground,a.addonsLogoBorderColorFocus)},buttonIE11Fallback:function(){return o(ta||(ta=m([`
      align-items: baseline;
    `],[`
      align-items: baseline;
    `])))},konturLogo:function(){return o(na||(na=m([`
      display: inline-flex;
      vertical-align: baseline;
      margin-right: 2px;
    `],[`
      display: inline-flex;
      vertical-align: baseline;
      margin-right: 2px;
    `])))},productLogo:function(){return o(ia||(ia=m([`
      display: inline-flex;
      vertical-align: baseline;
    `],[`
      display: inline-flex;
      vertical-align: baseline;
    `])))}},f=ur(kr),Ze,Je,Qe,ea,aa,ra,ta,na,ia,oa={isLoaded:!1,init:function(){this.isLoaded?this.reInit():this.load()},reInit:function(){var a,e,r,n,t,i;(r=(e=(a=window.Kontur)===null||a===void 0?void 0:a.ProductWidgetLoader)===null||e===void 0?void 0:e.reInit)===null||r===void 0||r.call(e),(i=(t=(n=window.Kontur)===null||n===void 0?void 0:n.ProductWidget)===null||t===void 0?void 0:t.reInit)===null||i===void 0||i.call(t)},close:function(){var a,e,r;(r=(e=(a=window.Kontur)===null||a===void 0?void 0:a.ProductWidget)===null||e===void 0?void 0:e.swpClosed)===null||r===void 0||r.call(e)},load:function(){if(!this.isLoaded){this.isLoaded=!0;var a=document.createElement("script");a.src="https://widget-product.kontur.ru/widget/loader?product=&type=service",setTimeout(function(){return document.getElementsByTagName("head")[0].appendChild(a)})}},reset:function(){this.isLoaded=!1}},vr=24,Q=(function(a){te(e,a);function e(){var r=a!==null&&a.apply(this,arguments)||this;return r.logotypeRef=null,r.getSize=function(){var n;return(n=r.props.size)!==null&&n!==void 0?n:vr},r.renderLogo=function(){var n=r.props,t=n.konturLogo,i=n.productLogo,s=r.getSize(),u=fa(r.theme);return d.createElement(d.Fragment,null,t&&d.createElement("span",{className:f.konturLogo()},d.cloneElement(t,{size:s,useDarkThemeColors:u})),i&&d.createElement("span",{className:f.productLogo()},d.cloneElement(i,{size:s,useDarkThemeColors:u})))},r.initWidget=function(){oa.init()},r}return e.prototype.componentDidMount=function(){this.props.withWidget&&this.initWidget()},e.prototype.componentDidUpdate=function(r){!r.withWidget&&this.props.withWidget&&this.initWidget()},e.prototype.componentWillUnmount=function(){oa.close()},e.prototype.render=function(){var r=this;return d.createElement(wa.Consumer,null,function(n){return r.theme=dr(n),r.renderMain()})},e.prototype.renderMain=function(){var r,n,t=this,i=this.props,s=i.component,u=i.href,p=i.withWidget,v=i.onArrowClick,g=i.onClick,w=this.getSize(),L=f.root(this.theme),I=f.divider(this.theme),F=Ve(f.button(this.theme),(r={},r[f.buttonIE11Fallback()]=Fa,r)),H={height:w},z=this.renderLogo(),D=Ve(f.dropdown(),(n={},n[f.inline()]=!p,n)),_=d.createElement(s,{href:u,onClick:g,className:L,style:H,"data-logotype-component":!0,"aria-label":this.props["aria-label"]},z);return d.createElement(ae,P({},this.props),d.createElement("div",{id:"spwDropdown",className:D,ref:function(N){return t.logotypeRef=N}},d.createElement("span",{className:f.widgetWrapper()},_,p&&d.createElement("span",{className:I})),p&&d.createElement("button",{id:"spwClicker",className:F,onClick:v,"aria-label":"Открыть выпадающий список выбора продуктов"},d.createElement(ar,null))))},e.__KONTUR_REACT_UI__="Logotype",e.displayName="Logotype",e.propTypes={href:X.string,size:X.number,withWidget:X.bool},e.defaultProps={component:"a",href:"/",konturLogo:null,productLogo:null,"aria-label":"Переход к продукту"},e})(d.Component);const gr=Object.keys(E).filter(a=>!a.endsWith("-dark")),wr={title:"UI CDN Components/CdnLogo",parameters:{creevey:{skip:!0}}},C=()=>h.jsxs(A,{vertical:!0,gap:8,style:{position:"relative"},children:[h.jsx("div",{style:{position:"absolute",width:1,height:"100%",background:"green",marginLeft:-1}}),h.jsx(Q,{productLogo:h.jsx(b,{logo:"kontur"})}),h.jsx(Q,{size:30,productLogo:h.jsx(b,{logo:"kontur"})}),h.jsx(Q,{size:38,productLogo:h.jsx(b,{logo:"school-academy"})}),"Lorem.",h.jsx("span",{style:{fontSize:28},children:"Lorem."})]});C.storyName="Пример логотипа с разными размерами";const B=()=>{const a={verticalAlign:"middle"};return h.jsxs(A,{gap:8,style:{position:"relative"},children:[h.jsx("div",{style:{position:"absolute",width:"100%",height:1,background:"green"}}),h.jsx(b,{logo:"kontur",size:30,style:a}),"Lorem.",h.jsx("span",{children:"Lorem ipsum."}),h.jsx("span",{children:h.jsx(b,{logo:"kontur",size:20,style:a})}),"Lorem ipsum dolor.",h.jsx(b,{logo:"kontur",size:38,style:a})]})};B.storyName="Пример Baseline";const j=()=>{const a=({logo:i,darkTheme:s})=>h.jsxs(A,{verticalAlign:"middle",gap:8,children:[h.jsx("span",{style:{width:450,display:"inline-block"},children:h.jsx("span",{style:{height:24,padding:"8px 12px",display:"inline-block",color:"#ADADAD"},children:h.jsx(b,{logo:i,...s!==void 0?{useDarkThemeColors:s}:{}})})}),h.jsx("span",{style:{width:150,display:"inline-block"},children:i}),h.jsx("code",{children:`<CdnLogo logo="${i}" />`})]}),[e,r]=y.useState(!1),n=e?"#292929":"#fff",t=e?"rgba(255, 255, 255, 0.87)":"#222";return h.jsxs(A,{vertical:!0,gap:16,children:[h.jsx($a,{onValueChange:r,children:"useDarkThemeColors"}),h.jsx(A,{vertical:!0,gap:8,style:{background:n,color:t},children:gr.map(i=>h.jsx(a,{logo:i,darkTheme:e},i))})]})};j.storyName="Полный список доступных логотипов";C.__docgenInfo={description:"",methods:[],displayName:"WithLogoAndSizeStory"};B.__docgenInfo={description:"",methods:[],displayName:"BaselineStory"};j.__docgenInfo={description:"",methods:[],displayName:"AllLogos"};var la,ca,sa;C.parameters={...C.parameters,docs:{...(la=C.parameters)==null?void 0:la.docs,source:{originalSource:`() => {
  return <Gapped vertical gap={8} style={{
    position: "relative"
  }}>
      <div style={{
      position: "absolute",
      width: 1,
      height: "100%",
      background: "green",
      marginLeft: -1
    }} />
      <Logotype productLogo={<CdnLogo logo="kontur" />} />
      <Logotype size={30} productLogo={<CdnLogo logo="kontur" />} />
      <Logotype size={38} productLogo={<CdnLogo logo="school-academy" />} />
      Lorem.
      <span style={{
      fontSize: 28
    }}>Lorem.</span>
    </Gapped>;
}`,...(sa=(ca=C.parameters)==null?void 0:ca.docs)==null?void 0:sa.source}}};var da,pa,ha;B.parameters={...B.parameters,docs:{...(da=B.parameters)==null?void 0:da.docs,source:{originalSource:`() => {
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
}`,...(ha=(pa=B.parameters)==null?void 0:pa.docs)==null?void 0:ha.source}}};var ua,ka,va;j.parameters={...j.parameters,docs:{...(ua=j.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
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
  return <Gapped vertical gap={16}>
      <Toggle onValueChange={setIsDarkTheme}>useDarkThemeColors</Toggle>
      <Gapped vertical gap={8} style={{
      background,
      color
    }}>
        {logoKeys.map(logo => <Row key={logo} logo={logo} darkTheme={isDarkTheme} />)}
      </Gapped>
    </Gapped>;
}`,...(va=(ka=j.parameters)==null?void 0:ka.docs)==null?void 0:va.source}}};const mr=["WithLogoAndSizeStory","BaselineStory","AllLogos"],yr=Object.freeze(Object.defineProperty({__proto__:null,AllLogos:j,BaselineStory:B,WithLogoAndSizeStory:C,__namedExportsOrder:mr,default:wr},Symbol.toStringTag,{value:"Module"}));export{yr as C};
