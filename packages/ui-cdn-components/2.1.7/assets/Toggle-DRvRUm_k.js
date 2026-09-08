import{_ as Fe,a as Ne}from"./toPropertyKey-D-GQYuxn.js";import{C as _e,c as o,_ as a,i as De,m as We,p as Te,r as Re,w as ye,a as Ee,k as w,T as Pe,b as p,d as Ae,e as Ie}from"./Gapped-uHYrem14.js";import{r as x,R as g}from"./index-Bk3ZmH4I.js";function Ue(n){var e=n.disabled,r=n.onFocus,s=n.onBlur,t=n.onBlurWhenDisabled,l=x.useState(!1),u=l[0],h=l[1];x.useEffect(function(){e&&u&&t&&t()},[e,u]);var c=function(f){h(!0),r==null||r(f)},b=function(f){h(!1),s==null||s(f)};return{handleFocus:c,handleBlur:b}}var Ge=["disabled","children","onBlurWhenDisabled"];function F(n){var e=n.disabled,r=n.children,s=n.onBlurWhenDisabled,t=Fe(n,Ge),l=r&&x.isValidElement(r),u=Ue({disabled:e??(l?r.props.disabled:void 0),onFocus:l?r.props.onFocus:void 0,onBlur:l?r.props.onBlur:void 0,onBlurWhenDisabled:s}),h=u.handleFocus,c=u.handleBlur;return l?g.createElement(_e,t,g.Children.only(x.cloneElement(r,{onFocus:h,onBlur:c}))):null}F.__KONTUR_REACT_UI__="FocusControlWrapper";F.displayName="FocusControlWrapper";var W,T,R,y,E,P,O=function(e,r,s){return o(W||(W=a([`
    line-height: `,`;
    font-size: `,`;

    &::before {
      width: `,`;
    }
  `])),r,e,s)},z=function(e,r,s,t,l,u){var h=parseInt(e),c=parseInt(r),b=c<=16&&De?-h:0;return o(T||(T=a([`
    height: `,`;
    width: `,`;
    flex: 1 0 `,`;

    border-radius: `,`;
    line-height: `,`;

    margin-top: calc(`," + ",`px);
  `])),s,t,t,l,s,u,b)},M=function(e,r){return o(R||(R=a([`
    line-height: `,`;
    font-size: `,`;
  `])),r,e)},L=function(e,r){return o(y||(y=a([`
    border-radius: `,`;
    height: `,`;
    width: `,`;
  `])),r,e,e)},H=function(e){return o(E||(E=a([`
    border-radius: `,`;
  `])),e)},j=function(e,r){var s=e,t=parseInt(e);return o(P||(P=a([`
    &:checked ~ .`," .",` {
      border-radius: `,"px 0 0 ",`px;
    }
    &:checked ~ .`,` {
      transform: translateX(`,") translateX(-",`);
    }
  `])),d.containerDisabled,d.background,t*.5,t*.5,d.handle,r,s)},A,I,U,G,$,q,V,Y,K,X,J,Q,Z,ee,ne,te,oe,ae,ie,re,le,se,de,ue,ce,ge,he,me,be,pe,fe,Se,Ce,Be,xe,d=Te("toggle")({handle:"handle",container:"container",disabled:"disabled",containerDisabled:"container-disabled",containerLoading:"container-loading",background:"background"}),i=We({root:function(e){return o(A||(A=a([`
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
    `])),d.handle,e.toggleBgHover)},rootSmall:function(e){return o(I||(I=a([`
      `,`;
    `])),O(e.toggleFontSizeSmall,e.toggleHeightSmall,e.toggleWidthSmall))},rootMedium:function(e){return o(U||(U=a([`
      `,`;
    `])),O(e.toggleFontSizeMedium,e.toggleHeightMedium,e.toggleWidthMedium))},rootLarge:function(e){return o(G||(G=a([`
      `,`;
    `])),O(e.toggleFontSizeLarge,e.toggleHeightLarge,e.toggleWidthLarge))},disableAnimation:function(){return o($||($=a([`
      &,
      * {
        transition: none !important;
      }
    `])))},handle:function(e){return o(q||(q=a([`
      bottom: `,`;
      left: `,`;
      position: absolute;
      top: `,`;
    `])),e.toggleBorderWidth,e.toggleHandleLeft,e.toggleHandleTop)},handleSmall:function(e){return o(V||(V=a([`
      `,`;
    `])),L(e.toggleHandleSizeSmall,e.toggleHandleBorderRadiusSmall))},handleMedium:function(e){return o(Y||(Y=a([`
      `,`;
    `])),L(e.toggleHandleSizeMedium,e.toggleHandleBorderRadiusMedium))},handleLarge:function(e){return o(K||(K=a([`
      `,`;
    `])),L(e.toggleHandleSizeLarge,e.toggleHandleBorderRadiusLarge))},handleDisabled:function(e){return o(X||(X=a([`
      background: `,` !important; // override root hover/active styles
    `])),e.toggleDisabledHandleBg)},input:function(e){return o(J||(J=a([`
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
    `])),d.container,d.handle,d.container,e.toggleContainerBg,e.toggleContainerBoxShadow,d.handle,e.toggleHandleBg,e.toggleHandleBoxShadow,d.container,e.toggleContainerBgChecked,e.toggleContainerBoxShadowChecked,d.handle,e.toggleHandleBgChecked,e.toggleHandleBoxShadowChecked,d.container,e.toggleContainerBgHover,e.toggleContainerBoxShadowHover,d.handle,e.toggleHandleBgHover,e.toggleHandleBoxShadowHover,d.container,e.toggleContainerBgCheckedHover,e.toggleContainerBoxShadowCheckedHover,d.handle,e.toggleHandleBgCheckedHover,e.toggleHandleBoxShadowCheckedHover,d.container,e.toggleContainerBgDisabled,e.toggleContainerBoxShadowDisabled,d.handle,e.toggleHandleBgDisabled,e.toggleHandleBoxShadowDisabled,d.container,e.toggleContainerBgDisabledChecked,e.toggleContainerBoxShadowDisabledChecked,d.handle,e.toggleHandleBgDisabledChecked,e.toggleHandleBoxShadowDisabledChecked)},inputSmall:function(e){return o(Q||(Q=a([`
      `,`;
    `])),j(e.toggleHeightSmall,e.toggleWidthSmall))},inputMedium:function(e){return o(Z||(Z=a([`
      `,`;
    `])),j(e.toggleHeightMedium,e.toggleWidthMedium))},inputLarge:function(e){return o(ee||(ee=a([`
      `,`;
    `])),j(e.toggleHeightLarge,e.toggleWidthLarge))},container:function(e){return o(ne||(ne=a([`
      box-shadow: inset 0 0 0 `," ",`;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      /* fixes overflow issue in Safari: https://bugs.webkit.org/show_bug.cgi?id=98538 */
      z-index: 0;
    `])),e.toggleBorderWidth,e.toggleBorderColor)},containerSmall:function(e){return o(te||(te=a([`
      `,`;
    `])),H(e.toggleBorderRadiusSmall))},containerMedium:function(e){return o(oe||(oe=a([`
      `,`;
    `])),H(e.toggleBorderRadiusMedium))},containerLarge:function(e){return o(ae||(ae=a([`
      `,`;
    `])),H(e.toggleBorderRadiusLarge))},containerDisabled:function(e){return o(ie||(ie=a([`
      background: `,`;
      box-shadow: inset 0 0 0 1px `,`;
    `])),e.toggleBgDisabled,e.toggleBorderColorDisabled)},focused:function(e){return o(re||(re=a([`
      box-shadow:
        0 0 0 1px `,`,
        0 0 0 `," ",`;
    `])),e.toggleOutlineColorFocus,e.toggleOutlineWidth,e.toggleFocusShadowColor)},isWarning:function(e){return o(le||(le=a([`
      box-shadow:
        0 0 0 1px `,`,
        0 0 0 `," ",`;
    `])),e.toggleOutlineColorFocus,e.toggleOutlineWidth,e.toggleShadowColorWarning)},isError:function(e){return o(se||(se=a([`
      box-shadow:
        0 0 0 1px `,`,
        0 0 0 `," ",`;
    `])),e.toggleOutlineColorFocus,e.toggleOutlineWidth,e.toggleShadowColorError)},button:function(e){return o(de||(de=a([`
      position: absolute;
      left: 0;
      top: 0;
      background: `,`;
      line-height: `,`;
    `])),e.toggleBaseBg,e.toggleHeightSmall)},buttonSmall:function(e){return o(ue||(ue=a([`
      `,`;
    `])),z(e.labGrotesqueBaselineCompensation,e.toggleFontSizeSmall,e.toggleHeightSmall,e.toggleWidthSmall,e.toggleBorderRadiusSmall,e.toggleButtonOffsetY))},buttonMedium:function(e){return o(ce||(ce=a([`
      `,`;
    `])),z(e.labGrotesqueBaselineCompensation,e.toggleFontSizeMedium,e.toggleHeightMedium,e.toggleWidthMedium,e.toggleBorderRadiusMedium,e.toggleButtonOffsetY))},buttonLarge:function(e){return o(ge||(ge=a([`
      `,`;
    `])),z(e.labGrotesqueBaselineCompensation,e.toggleFontSizeLarge,e.toggleHeightLarge,e.toggleWidthLarge,e.toggleBorderRadiusLarge,e.toggleButtonOffsetY))},buttonRight:function(){return o(he||(he=a([`
      right: 0;
      left: auto;
    `])))},disabled:function(){return o(me||(me=a([`
      cursor: default;
    `])))},rootLeft:function(){return o(be||(be=a([`
      flex-direction: row-reverse;
    `])))},caption:function(e){return o(pe||(pe=a([`
      color: `,`;
      padding: 0 0 0 `,`;
    `])),e.toggleTextColor,e.toggleCaptionGap)},captionSmall:function(e){return o(fe||(fe=a([`
      `,`;
    `])),M(e.toggleFontSizeSmall,e.toggleHeightSmall))},captionMedium:function(e){return o(Se||(Se=a([`
      `,`;
    `])),M(e.toggleFontSizeMedium,e.toggleHeightMedium))},captionLarge:function(e){return o(Ce||(Ce=a([`
      `,`;
    `])),M(e.toggleFontSizeLarge,e.toggleHeightLarge))},disabledCaption:function(e){return o(Be||(Be=a([`
      color: `,`;
    `])),e.textColorDisabled)},captionLeft:function(e){return o(xe||(xe=a([`
      color: `,`;
      padding: 0 `,` 0 0;
    `])),e.toggleTextColor,e.toggleCaptionGap)}}),B,C,$e={root:"Toggle__root"},Ke=Re(B=ye(B=(C=(function(n){function e(s){var t;return t=n.call(this,s)||this,t.getProps=Ie(e.defaultProps),t.input=null,t.focus=function(){t.input&&(w.isTabPressed=!0,t.input.focus())},t.inputRef=function(l){t.input=l},t.handleChange=function(l){t.props.onValueChange&&t.props.onValueChange(l.target.checked),t.isUncontrolled()&&t.setState({checked:l.target.checked}),t.props.onChange&&t.props.onChange(l)},t.handleFocus=function(l){t.props.onFocus&&t.props.onFocus(l),w.isTabPressed&&t.setState({focusByTab:!0})},t.resetFocus=function(){return t.setState({focusByTab:!1})},t.handleBlur=function(l){t.resetFocus(),t.props.onBlur==null||t.props.onBlur(l)},t.state={focusByTab:!1,checked:s.defaultChecked},t}Ee(e,n);var r=e.prototype;return r.componentDidMount=function(){this.props.autoFocus&&(w.isTabPressed=!0,this.focus())},r.render=function(){var t=this;return g.createElement(Pe.Consumer,null,function(l){return t.theme=l,t.renderMain()})},r.getContainerSizeClassName=function(){switch(this.size){case"large":return i.containerLarge(this.theme);case"medium":return i.containerMedium(this.theme);case"small":default:return i.containerSmall(this.theme)}},r.getHandleSizeClassName=function(){switch(this.size){case"large":return i.handleLarge(this.theme);case"medium":return i.handleMedium(this.theme);case"small":default:return i.handleSmall(this.theme)}},r.getButtonSizeClassName=function(){switch(this.size){case"large":return i.buttonLarge(this.theme);case"medium":return i.buttonMedium(this.theme);case"small":default:return i.buttonSmall(this.theme)}},r.getRootSizeClassName=function(){switch(this.size){case"large":return i.rootLarge(this.theme);case"medium":return i.rootMedium(this.theme);case"small":default:return i.rootSmall(this.theme)}},r.getInputSizeClassName=function(){switch(this.size){case"large":return i.inputLarge(this.theme);case"medium":return i.inputMedium(this.theme);case"small":default:return i.inputSmall(this.theme)}},r.getCaptionSizeClassName=function(){switch(this.size){case"large":return i.captionLarge(this.theme);case"medium":return i.captionMedium(this.theme);case"small":default:return i.captionSmall(this.theme)}},r.renderMain=function(){var t,l,u,h,c=this.props,b=c.children,_=c.warning,f=c.error,ve=c.id,ke=c.name,we=c["aria-describedby"],Oe=c["aria-label"],v=this.getProps(),N=v.loading,k=v.captionPosition,ze=v.disableAnimations,m=this.getProps().disabled||N,Me=this.isUncontrolled()?this.state.checked:this.props.checked,Le=p(this.getContainerSizeClassName(),(t={},t[i.container(this.theme)]=!0,t[i.containerDisabled(this.theme)]=!!m,t[d.container]=!0,t[d.containerDisabled]=!!m,t[d.containerLoading]=N,t)),He=p(this.getRootSizeClassName(),(l={},l[i.root(this.theme)]=!0,l[i.rootLeft()]=k==="left",l[i.disabled()]=!!m,l[d.disabled]=!!m,l[i.disableAnimation()]=ze,l)),D=null;if(b){var S,je=p(this.getCaptionSizeClassName(),(S={},S[i.caption(this.theme)]=!0,S[i.captionLeft(this.theme)]=k==="left",S[i.disabledCaption(this.theme)]=!!m,S));D=g.createElement("span",{className:je},b)}return g.createElement(_e,Ne({rootNodeRef:this.setRootNode},this.props),g.createElement("label",{"data-tid":$e.root,className:He},g.createElement("div",{className:p(this.getButtonSizeClassName(),(u={},u[i.button(this.theme)]=!0,u[i.buttonRight()]=k==="left",u[i.isWarning(this.theme)]=!!_,u[i.isError(this.theme)]=!!f,u[i.focused(this.theme)]=!m&&!!this.state.focusByTab,u))},g.createElement(F,{onBlurWhenDisabled:this.resetFocus},g.createElement("input",{type:"checkbox",checked:Me,onChange:this.handleChange,className:p(this.getInputSizeClassName(),i.input(this.theme)),onFocus:this.handleFocus,onBlur:this.handleBlur,ref:this.inputRef,disabled:m,id:ve,name:ke,role:"switch","aria-label":Oe,"aria-describedby":we})),g.createElement("div",{className:Le}),g.createElement("div",{className:p(this.getHandleSizeClassName(),d.handle,(h={},h[i.handle(this.theme)]=!0,h[i.handleDisabled(this.theme)]=m,h))})),D))},r.isUncontrolled=function(){return this.props.checked===void 0},e})(g.Component),C.__KONTUR_REACT_UI__="Toggle",C.displayName="Toggle",C.defaultProps={disabled:!1,loading:!1,captionPosition:"right",disableAnimations:Ae},C))||B)||B;export{Ke as T};
