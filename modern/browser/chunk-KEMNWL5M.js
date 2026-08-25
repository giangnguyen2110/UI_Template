import{a as Ot,b as Ft,c as Ut}from"./chunk-FRXXLCOC.js";import{a as oi}from"./chunk-RMZY6QC2.js";import{d as at,f as fe}from"./chunk-CJPLD6EO.js";import{a as ai}from"./chunk-7JPQIJPT.js";import{a as ei,b as Ue,c as ti}from"./chunk-HCZGTNVA.js";import{a as Kt,b as Zt}from"./chunk-5BQAWLQG.js";import{a as ze,b as ni}from"./chunk-H7HESALV.js";import{a as Be,b as Gt}from"./chunk-7JBK5TXW.js";import{a as re,b as ii}from"./chunk-RPHFLIPT.js";import{a as $t,b as Qt,c as Jt,d as Xt}from"./chunk-AYRFYPUR.js";import{P as li,a as jt,b as Lt,c as Nt,d as Bt,e as qt,f as Pt,g as Rt,h as Vt,i as Wt,n as D}from"./chunk-LZNHL6NC.js";import{a as je,b as Le,c as Ne,d as Ht,e as qe,f as Pe,g as Re,h as Ve,i as We,j as Oe,k as Fe,l as Yt}from"./chunk-FI33STS7.js";import{B as Dt,K as Ie,M as Me,Q as De,e as Ae,f as _t,ga as zt,i as Ct,q as Tt,r as nt,t as At,x as It,z as Mt}from"./chunk-VBFGN525.js";import{$a as ne,$b as R,Ca as ye,Eb as _,Fa as me,Fb as ft,I as mt,Ia as bt,Ic as Et,Jb as c,Kb as St,Lb as M,Mb as be,Nb as ge,Oa as ue,Pb as wt,Qb as et,Ra as m,Rb as tt,Sa as gt,Tc as he,Ua as ke,Vb as y,Xa as vt,Xb as ve,Ya as K,Yb as H,Zb as e,Zc as yt,_a as C,_b as Z,_c as Te,ab as _e,d as xe,dc as G,eb as h,ec as Y,fa as ct,fc as $,ga as pe,gc as Q,ha as ie,hc as le,ic as Ce,jb as ae,ka as ee,lb as J,mb as X,nb as F,pa as x,pb as U,pd as kt,qa as f,qb as z,rb as p,rd as it,sb as t,ta as pt,tb as i,ua as ut,ub as n,vb as ht,vc as q,wa as oe,wb as xt,xa as Ee}from"./chunk-T7BAFERX.js";import{a as st,e as se,g as $i}from"./chunk-UDPOFCFO.js";var lt=se((ci,He)=>{"use strict";(function(l,u){typeof define=="function"&&define.amd?define(u):typeof He=="object"&&He.exports?He.exports=u():l.EvEmitter=u()})(typeof window<"u"?window:ci,function(){"use strict";function l(){}var u=l.prototype;return u.on=function(r,s){if(!(!r||!s)){var a=this._events=this._events||{},d=a[r]=a[r]||[];return d.indexOf(s)==-1&&d.push(s),this}},u.once=function(r,s){if(!(!r||!s)){this.on(r,s);var a=this._onceEvents=this._onceEvents||{},d=a[r]=a[r]||{};return d[s]=!0,this}},u.off=function(r,s){var a=this._events&&this._events[r];if(!(!a||!a.length)){var d=a.indexOf(s);return d!=-1&&a.splice(d,1),this}},u.emitEvent=function(r,s){var a=this._events&&this._events[r];if(!(!a||!a.length)){a=a.slice(0),s=s||[];for(var d=this._onceEvents&&this._onceEvents[r],o=0;o<a.length;o++){var b=a[o],A=d&&d[b];A&&(this.off(r,b),delete d[b]),b.apply(this,s)}return this}},u.allOff=function(){delete this._events,delete this._onceEvents},l})});var Ye=se((nr,Ge)=>{"use strict";(function(l,u){typeof define=="function"&&define.amd?define(u):typeof Ge=="object"&&Ge.exports?Ge.exports=u():l.getSize=u()})(window,function(){"use strict";function u(E){var B=parseFloat(E),I=E.indexOf("%")==-1&&!isNaN(B);return I&&B}function r(){}var s=typeof console>"u"?r:function(E){console.error(E)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],d=a.length;function o(){for(var E={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},B=0;B<d;B++){var I=a[B];E[I]=0}return E}function b(E){var B=getComputedStyle(E);return B||s("Style returned "+B+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),B}var A=!1,L;function k(){if(!A){A=!0;var E=document.createElement("div");E.style.width="200px",E.style.padding="1px 2px 3px 4px",E.style.borderStyle="solid",E.style.borderWidth="1px 2px 3px 4px",E.style.boxSizing="border-box";var B=document.body||document.documentElement;B.appendChild(E);var I=b(E);L=Math.round(u(I.width))==200,N.isBoxSizeOuter=L,B.removeChild(E)}}function N(E){if(k(),typeof E=="string"&&(E=document.querySelector(E)),!(!E||typeof E!="object"||!E.nodeType)){var B=b(E);if(B.display=="none")return o();var I={};I.width=E.offsetWidth,I.height=E.offsetHeight;for(var S=I.isBorderBox=B.boxSizing=="border-box",g=0;g<d;g++){var v=a[g],w=B[v],T=parseFloat(w);I[v]=isNaN(T)?0:T}var j=I.paddingLeft+I.paddingRight,W=I.paddingTop+I.paddingBottom,O=I.marginLeft+I.marginRight,de=I.marginTop+I.marginBottom,ce=I.borderLeftWidth+I.borderRightWidth,Se=I.borderTopWidth+I.borderBottomWidth,we=S&&L,rt=u(B.width);rt!==!1&&(I.width=rt+(we?0:j+ce));var dt=u(B.height);return dt!==!1&&(I.height=dt+(we?0:W+Se)),I.innerWidth=I.width-(j+ce),I.innerHeight=I.height-(W+Se),I.outerWidth=I.width+O,I.outerHeight=I.height+de,I}}return N})});var pi=se((ar,$e)=>{"use strict";(function(l,u){"use strict";typeof define=="function"&&define.amd?define(u):typeof $e=="object"&&$e.exports?$e.exports=u():l.matchesSelector=u()})(window,function(){"use strict";var u=(function(){var r=window.Element.prototype;if(r.matches)return"matches";if(r.matchesSelector)return"matchesSelector";for(var s=["webkit","moz","ms","o"],a=0;a<s.length;a++){var d=s[a],o=d+"MatchesSelector";if(r[o])return o}})();return function(s,a){return s[u](a)}})});var ui=se((lr,Qe)=>{"use strict";(function(l,u){typeof define=="function"&&define.amd?define(["desandro-matches-selector/matches-selector"],function(r){return u(l,r)}):typeof Qe=="object"&&Qe.exports?Qe.exports=u(l,pi()):l.fizzyUIUtils=u(l,l.matchesSelector)})(window,function(u,r){"use strict";var s={};s.extend=function(o,b){for(var A in b)o[A]=b[A];return o},s.modulo=function(o,b){return(o%b+b)%b};var a=Array.prototype.slice;s.makeArray=function(o){if(Array.isArray(o))return o;if(o==null)return[];var b=typeof o=="object"&&typeof o.length=="number";return b?a.call(o):[o]},s.removeFrom=function(o,b){var A=o.indexOf(b);A!=-1&&o.splice(A,1)},s.getParent=function(o,b){for(;o.parentNode&&o!=document.body;)if(o=o.parentNode,r(o,b))return o},s.getQueryElement=function(o){return typeof o=="string"?document.querySelector(o):o},s.handleEvent=function(o){var b="on"+o.type;this[b]&&this[b](o)},s.filterFindElements=function(o,b){o=s.makeArray(o);var A=[];return o.forEach(function(L){if(L instanceof HTMLElement){if(!b){A.push(L);return}r(L,b)&&A.push(L);for(var k=L.querySelectorAll(b),N=0;N<k.length;N++)A.push(k[N])}}),A},s.debounceMethod=function(o,b,A){A=A||100;var L=o.prototype[b],k=b+"Timeout";o.prototype[b]=function(){var N=this[k];clearTimeout(N);var E=arguments,B=this;this[k]=setTimeout(function(){L.apply(B,E),delete B[k]},A)}},s.docReady=function(o){var b=document.readyState;b=="complete"||b=="interactive"?setTimeout(o):document.addEventListener("DOMContentLoaded",o)},s.toDashed=function(o){return o.replace(/(.)([A-Z])/g,function(b,A,L){return A+"-"+L}).toLowerCase()};var d=u.console;return s.htmlInit=function(o,b){s.docReady(function(){var A=s.toDashed(b),L="data-"+A,k=document.querySelectorAll("["+L+"]"),N=document.querySelectorAll(".js-"+A),E=s.makeArray(k).concat(s.makeArray(N)),B=L+"-options",I=u.jQuery;E.forEach(function(S){var g=S.getAttribute(L)||S.getAttribute(B),v;try{v=g&&JSON.parse(g)}catch(T){d&&d.error("Error parsing "+L+" on "+S.className+": "+T);return}var w=new o(S,v);I&&I.data(S,b,w)})})},s})});var bi=se((or,Je)=>{"use strict";(function(l,u){typeof define=="function"&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size"],u):typeof Je=="object"&&Je.exports?Je.exports=u(lt(),Ye()):(l.Outlayer={},l.Outlayer.Item=u(l.EvEmitter,l.getSize))})(window,function(u,r){"use strict";function s(S){for(var g in S)return!1;return g=null,!0}var a=document.documentElement.style,d=typeof a.transition=="string"?"transition":"WebkitTransition",o=typeof a.transform=="string"?"transform":"WebkitTransform",b={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[d],A={transform:o,transition:d,transitionDuration:d+"Duration",transitionProperty:d+"Property",transitionDelay:d+"Delay"};function L(S,g){S&&(this.element=S,this.layout=g,this.position={x:0,y:0},this._create())}var k=L.prototype=Object.create(u.prototype);k.constructor=L,k._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},k.handleEvent=function(S){var g="on"+S.type;this[g]&&this[g](S)},k.getSize=function(){this.size=r(this.element)},k.css=function(S){var g=this.element.style;for(var v in S){var w=A[v]||v;g[w]=S[v]}},k.getPosition=function(){var S=getComputedStyle(this.element),g=this.layout._getOption("originLeft"),v=this.layout._getOption("originTop"),w=S[g?"left":"right"],T=S[v?"top":"bottom"],j=parseFloat(w),W=parseFloat(T),O=this.layout.size;w.indexOf("%")!=-1&&(j=j/100*O.width),T.indexOf("%")!=-1&&(W=W/100*O.height),j=isNaN(j)?0:j,W=isNaN(W)?0:W,j-=g?O.paddingLeft:O.paddingRight,W-=v?O.paddingTop:O.paddingBottom,this.position.x=j,this.position.y=W},k.layoutPosition=function(){var S=this.layout.size,g={},v=this.layout._getOption("originLeft"),w=this.layout._getOption("originTop"),T=v?"paddingLeft":"paddingRight",j=v?"left":"right",W=v?"right":"left",O=this.position.x+S[T];g[j]=this.getXValue(O),g[W]="";var de=w?"paddingTop":"paddingBottom",ce=w?"top":"bottom",Se=w?"bottom":"top",we=this.position.y+S[de];g[ce]=this.getYValue(we),g[Se]="",this.css(g),this.emitEvent("layout",[this])},k.getXValue=function(S){var g=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!g?S/this.layout.size.width*100+"%":S+"px"},k.getYValue=function(S){var g=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&g?S/this.layout.size.height*100+"%":S+"px"},k._transitionTo=function(S,g){this.getPosition();var v=this.position.x,w=this.position.y,T=S==this.position.x&&g==this.position.y;if(this.setPosition(S,g),T&&!this.isTransitioning){this.layoutPosition();return}var j=S-v,W=g-w,O={};O.transform=this.getTranslate(j,W),this.transition({to:O,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},k.getTranslate=function(S,g){var v=this.layout._getOption("originLeft"),w=this.layout._getOption("originTop");return S=v?S:-S,g=w?g:-g,"translate3d("+S+"px, "+g+"px, 0)"},k.goTo=function(S,g){this.setPosition(S,g),this.layoutPosition()},k.moveTo=k._transitionTo,k.setPosition=function(S,g){this.position.x=parseFloat(S),this.position.y=parseFloat(g)},k._nonTransition=function(S){this.css(S.to),S.isCleaning&&this._removeStyles(S.to);for(var g in S.onTransitionEnd)S.onTransitionEnd[g].call(this)},k.transition=function(S){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(S);return}var g=this._transn;for(var v in S.onTransitionEnd)g.onEnd[v]=S.onTransitionEnd[v];for(v in S.to)g.ingProperties[v]=!0,S.isCleaning&&(g.clean[v]=!0);if(S.from){this.css(S.from);var w=this.element.offsetHeight;w=null}this.enableTransition(S.to),this.css(S.to),this.isTransitioning=!0};function N(S){return S.replace(/([A-Z])/g,function(g){return"-"+g.toLowerCase()})}var E="opacity,"+N(o);k.enableTransition=function(){if(!this.isTransitioning){var S=this.layout.options.transitionDuration;S=typeof S=="number"?S+"ms":S,this.css({transitionProperty:E,transitionDuration:S,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(b,this,!1)}},k.onwebkitTransitionEnd=function(S){this.ontransitionend(S)},k.onotransitionend=function(S){this.ontransitionend(S)};var B={"-webkit-transform":"transform"};k.ontransitionend=function(S){if(S.target===this.element){var g=this._transn,v=B[S.propertyName]||S.propertyName;if(delete g.ingProperties[v],s(g.ingProperties)&&this.disableTransition(),v in g.clean&&(this.element.style[S.propertyName]="",delete g.clean[v]),v in g.onEnd){var w=g.onEnd[v];w.call(this),delete g.onEnd[v]}this.emitEvent("transitionEnd",[this])}},k.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(b,this,!1),this.isTransitioning=!1},k._removeStyles=function(S){var g={};for(var v in S)g[v]="";this.css(g)};var I={transitionProperty:"",transitionDuration:"",transitionDelay:""};return k.removeTransitionStyles=function(){this.css(I)},k.stagger=function(S){S=isNaN(S)?0:S,this.staggerDelay=S+"ms"},k.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},k.remove=function(){if(!d||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},k.reveal=function(){delete this.isHidden,this.css({display:""});var S=this.layout.options,g={},v=this.getHideRevealTransitionEndProperty("visibleStyle");g[v]=this.onRevealTransitionEnd,this.transition({from:S.hiddenStyle,to:S.visibleStyle,isCleaning:!0,onTransitionEnd:g})},k.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},k.getHideRevealTransitionEndProperty=function(S){var g=this.layout.options[S];if(g.opacity)return"opacity";for(var v in g)return v},k.hide=function(){this.isHidden=!0,this.css({display:""});var S=this.layout.options,g={},v=this.getHideRevealTransitionEndProperty("hiddenStyle");g[v]=this.onHideTransitionEnd,this.transition({from:S.visibleStyle,to:S.hiddenStyle,isCleaning:!0,onTransitionEnd:g})},k.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},k.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},L})});var gi=se((rr,Xe)=>{"use strict";(function(l,u){"use strict";typeof define=="function"&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(r,s,a,d){return u(l,r,s,a,d)}):typeof Xe=="object"&&Xe.exports?Xe.exports=u(l,lt(),Ye(),ui(),bi()):l.Outlayer=u(l,l.EvEmitter,l.getSize,l.fizzyUIUtils,l.Outlayer.Item)})(window,function(u,r,s,a,d){"use strict";var o=u.console,b=u.jQuery,A=function(){},L=0,k={};function N(g,v){var w=a.getQueryElement(g);if(!w){o&&o.error("Bad element for "+this.constructor.namespace+": "+(w||g));return}this.element=w,b&&(this.$element=b(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(v);var T=++L;this.element.outlayerGUID=T,k[T]=this,this._create();var j=this._getOption("initLayout");j&&this.layout()}N.namespace="outlayer",N.Item=d,N.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var E=N.prototype;a.extend(E,r.prototype),E.option=function(g){a.extend(this.options,g)},E._getOption=function(g){var v=this.constructor.compatOptions[g];return v&&this.options[v]!==void 0?this.options[v]:this.options[g]},N.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},E._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),a.extend(this.element.style,this.options.containerStyle);var g=this._getOption("resize");g&&this.bindResize()},E.reloadItems=function(){this.items=this._itemize(this.element.children)},E._itemize=function(g){for(var v=this._filterFindItemElements(g),w=this.constructor.Item,T=[],j=0;j<v.length;j++){var W=v[j],O=new w(W,this);T.push(O)}return T},E._filterFindItemElements=function(g){return a.filterFindElements(g,this.options.itemSelector)},E.getItemElements=function(){return this.items.map(function(g){return g.element})},E.layout=function(){this._resetLayout(),this._manageStamps();var g=this._getOption("layoutInstant"),v=g!==void 0?g:!this._isLayoutInited;this.layoutItems(this.items,v),this._isLayoutInited=!0},E._init=E.layout,E._resetLayout=function(){this.getSize()},E.getSize=function(){this.size=s(this.element)},E._getMeasurement=function(g,v){var w=this.options[g],T;w?(typeof w=="string"?T=this.element.querySelector(w):w instanceof HTMLElement&&(T=w),this[g]=T?s(T)[v]:w):this[g]=0},E.layoutItems=function(g,v){g=this._getItemsForLayout(g),this._layoutItems(g,v),this._postLayout()},E._getItemsForLayout=function(g){return g.filter(function(v){return!v.isIgnored})},E._layoutItems=function(g,v){if(this._emitCompleteOnItems("layout",g),!(!g||!g.length)){var w=[];g.forEach(function(T){var j=this._getItemLayoutPosition(T);j.item=T,j.isInstant=v||T.isLayoutInstant,w.push(j)},this),this._processLayoutQueue(w)}},E._getItemLayoutPosition=function(){return{x:0,y:0}},E._processLayoutQueue=function(g){this.updateStagger(),g.forEach(function(v,w){this._positionItem(v.item,v.x,v.y,v.isInstant,w)},this)},E.updateStagger=function(){var g=this.options.stagger;if(g==null){this.stagger=0;return}return this.stagger=S(g),this.stagger},E._positionItem=function(g,v,w,T,j){T?g.goTo(v,w):(g.stagger(j*this.stagger),g.moveTo(v,w))},E._postLayout=function(){this.resizeContainer()},E.resizeContainer=function(){var g=this._getOption("resizeContainer");if(g){var v=this._getContainerSize();v&&(this._setContainerMeasure(v.width,!0),this._setContainerMeasure(v.height,!1))}},E._getContainerSize=A,E._setContainerMeasure=function(g,v){if(g!==void 0){var w=this.size;w.isBorderBox&&(g+=v?w.paddingLeft+w.paddingRight+w.borderLeftWidth+w.borderRightWidth:w.paddingBottom+w.paddingTop+w.borderTopWidth+w.borderBottomWidth),g=Math.max(g,0),this.element.style[v?"width":"height"]=g+"px"}},E._emitCompleteOnItems=function(g,v){var w=this;function T(){w.dispatchEvent(g+"Complete",null,[v])}var j=v.length;if(!v||!j){T();return}var W=0;function O(){W++,W==j&&T()}v.forEach(function(de){de.once(g,O)})},E.dispatchEvent=function(g,v,w){var T=v?[v].concat(w):w;if(this.emitEvent(g,T),b)if(this.$element=this.$element||b(this.element),v){var j=b.Event(v);j.type=g,this.$element.trigger(j,w)}else this.$element.trigger(g,w)},E.ignore=function(g){var v=this.getItem(g);v&&(v.isIgnored=!0)},E.unignore=function(g){var v=this.getItem(g);v&&delete v.isIgnored},E.stamp=function(g){g=this._find(g),g&&(this.stamps=this.stamps.concat(g),g.forEach(this.ignore,this))},E.unstamp=function(g){g=this._find(g),g&&g.forEach(function(v){a.removeFrom(this.stamps,v),this.unignore(v)},this)},E._find=function(g){if(g)return typeof g=="string"&&(g=this.element.querySelectorAll(g)),g=a.makeArray(g),g},E._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},E._getBoundingRect=function(){var g=this.element.getBoundingClientRect(),v=this.size;this._boundingRect={left:g.left+v.paddingLeft+v.borderLeftWidth,top:g.top+v.paddingTop+v.borderTopWidth,right:g.right-(v.paddingRight+v.borderRightWidth),bottom:g.bottom-(v.paddingBottom+v.borderBottomWidth)}},E._manageStamp=A,E._getElementOffset=function(g){var v=g.getBoundingClientRect(),w=this._boundingRect,T=s(g),j={left:v.left-w.left-T.marginLeft,top:v.top-w.top-T.marginTop,right:w.right-v.right-T.marginRight,bottom:w.bottom-v.bottom-T.marginBottom};return j},E.handleEvent=a.handleEvent,E.bindResize=function(){u.addEventListener("resize",this),this.isResizeBound=!0},E.unbindResize=function(){u.removeEventListener("resize",this),this.isResizeBound=!1},E.onresize=function(){this.resize()},a.debounceMethod(N,"onresize",100),E.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},E.needsResizeLayout=function(){var g=s(this.element),v=this.size&&g;return v&&g.innerWidth!==this.size.innerWidth},E.addItems=function(g){var v=this._itemize(g);return v.length&&(this.items=this.items.concat(v)),v},E.appended=function(g){var v=this.addItems(g);v.length&&(this.layoutItems(v,!0),this.reveal(v))},E.prepended=function(g){var v=this._itemize(g);if(v.length){var w=this.items.slice(0);this.items=v.concat(w),this._resetLayout(),this._manageStamps(),this.layoutItems(v,!0),this.reveal(v),this.layoutItems(w)}},E.reveal=function(g){if(this._emitCompleteOnItems("reveal",g),!(!g||!g.length)){var v=this.updateStagger();g.forEach(function(w,T){w.stagger(T*v),w.reveal()})}},E.hide=function(g){if(this._emitCompleteOnItems("hide",g),!(!g||!g.length)){var v=this.updateStagger();g.forEach(function(w,T){w.stagger(T*v),w.hide()})}},E.revealItemElements=function(g){var v=this.getItems(g);this.reveal(v)},E.hideItemElements=function(g){var v=this.getItems(g);this.hide(v)},E.getItem=function(g){for(var v=0;v<this.items.length;v++){var w=this.items[v];if(w.element==g)return w}},E.getItems=function(g){g=a.makeArray(g);var v=[];return g.forEach(function(w){var T=this.getItem(w);T&&v.push(T)},this),v},E.remove=function(g){var v=this.getItems(g);this._emitCompleteOnItems("remove",v),!(!v||!v.length)&&v.forEach(function(w){w.remove(),a.removeFrom(this.items,w)},this)},E.destroy=function(){var g=this.element.style;g.height="",g.position="",g.width="",this.items.forEach(function(w){w.destroy()}),this.unbindResize();var v=this.element.outlayerGUID;delete k[v],delete this.element.outlayerGUID,b&&b.removeData(this.element,this.constructor.namespace)},N.data=function(g){g=a.getQueryElement(g);var v=g&&g.outlayerGUID;return v&&k[v]},N.create=function(g,v){var w=B(N);return w.defaults=a.extend({},N.defaults),a.extend(w.defaults,v),w.compatOptions=a.extend({},N.compatOptions),w.namespace=g,w.data=N.data,w.Item=B(d),a.htmlInit(w,g),b&&b.bridget&&b.bridget(g,w),w};function B(g){function v(){g.apply(this,arguments)}return v.prototype=Object.create(g.prototype),v.prototype.constructor=v,v}var I={ms:1,s:1e3};function S(g){if(typeof g=="number")return g;var v=g.match(/(^\d*\.?\d*)(\w*)/),w=v&&v[1],T=v&&v[2];if(!w.length)return 0;w=parseFloat(w);var j=I[T]||1;return w*j}return N.Item=d,N})});var vi=se((dr,Ke)=>{"use strict";(function(l,u){typeof define=="function"&&define.amd?define(["outlayer/outlayer","get-size/get-size"],u):typeof Ke=="object"&&Ke.exports?Ke.exports=u(gi(),Ye()):l.Masonry=u(l.Outlayer,l.getSize)})(window,function(u,r){"use strict";var s=u.create("masonry");s.compatOptions.fitWidth="isFitWidth";var a=s.prototype;return a._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var d=0;d<this.cols;d++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},a.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var d=this.items[0],o=d&&d.element;this.columnWidth=o&&r(o).outerWidth||this.containerWidth}var b=this.columnWidth+=this.gutter,A=this.containerWidth+this.gutter,L=A/b,k=b-A%b,N=k&&k<1?"round":"floor";L=Math[N](L),this.cols=Math.max(L,1)},a.getContainerWidth=function(){var d=this._getOption("fitWidth"),o=d?this.element.parentNode:this.element,b=r(o);this.containerWidth=b&&b.innerWidth},a._getItemLayoutPosition=function(d){d.getSize();var o=d.size.outerWidth%this.columnWidth,b=o&&o<1?"round":"ceil",A=Math[b](d.size.outerWidth/this.columnWidth);A=Math.min(A,this.cols);for(var L=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",k=this[L](A,d),N={x:this.columnWidth*k.col,y:k.y},E=k.y+d.size.outerHeight,B=A+k.col,I=k.col;I<B;I++)this.colYs[I]=E;return N},a._getTopColPosition=function(d){var o=this._getTopColGroup(d),b=Math.min.apply(Math,o);return{col:o.indexOf(b),y:b}},a._getTopColGroup=function(d){if(d<2)return this.colYs;for(var o=[],b=this.cols+1-d,A=0;A<b;A++)o[A]=this._getColGroupY(A,d);return o},a._getColGroupY=function(d,o){if(o<2)return this.colYs[d];var b=this.colYs.slice(d,d+o);return Math.max.apply(Math,b)},a._getHorizontalColPosition=function(d,o){var b=this.horizontalColIndex%this.cols,A=d>1&&b+d>this.cols;b=A?0:b;var L=o.size.outerWidth&&o.size.outerHeight;return this.horizontalColIndex=L?b+d:this.horizontalColIndex,{col:b,y:this._getColGroupY(b,d)}},a._manageStamp=function(d){var o=r(d),b=this._getElementOffset(d),A=this._getOption("originLeft"),L=A?b.left:b.right,k=L+o.outerWidth,N=Math.floor(L/this.columnWidth);N=Math.max(0,N);var E=Math.floor(k/this.columnWidth);E-=k%this.columnWidth?0:1,E=Math.min(this.cols-1,E);for(var B=this._getOption("originTop"),I=(B?b.top:b.bottom)+o.outerHeight,S=N;S<=E;S++)this.colYs[S]=Math.max(I,this.colYs[S])},a._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var d={height:this.maxY};return this._getOption("fitWidth")&&(d.width=this._getContainerFitWidth()),d},a._getContainerFitWidth=function(){for(var d=0,o=this.cols;--o&&this.colYs[o]===0;)d++;return(this.cols-d)*this.columnWidth-this.gutter},a.needsResizeLayout=function(){var d=this.containerWidth;return this.getContainerWidth(),d!=this.containerWidth},s})});var Qi=["*"];function Ji(l,u){if(l&1){let r=_();ht(0,"button",1),St("click",function(){x(r);let a=M();return f(a.close())}),xt()}}var Xi=(()=>{class l{constructor(){this._ngbConfig=ee(Ae),this.dismissible=!0,this.type="warning"}get animation(){return this._animation??this._ngbConfig.animation}set animation(r){this._animation=r}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275prov=pe({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})(),Ki=({classList:l})=>{l.remove("show")},ri=(()=>{class l{constructor(){this._config=ee(Xi),this._elementRef=ee(me),this._zone=ee(Ee),this.animation=this._config.animation,this.dismissible=this._config.dismissible,this.type=this._config.type,this.closed=new oe}close(){let r=Tt(this._zone,this._elementRef.nativeElement,Ki,{animation:this.animation,runningTransition:"continue"});return r.subscribe(()=>this.closed.emit()),r}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["ngb-alert"]],hostAttrs:["role","alert"],hostVars:6,hostBindings:function(s,a){s&2&&(H("alert show"+(a.type?" alert-"+a.type:"")),ve("fade",a.animation)("alert-dismissible",a.dismissible))},inputs:{animation:"animation",dismissible:"dismissible",type:"type"},outputs:{closed:"closed"},exportAs:["ngbAlert"],ngContentSelectors:Qi,decls:2,vars:1,consts:()=>{let r;return r=$localize`:@@ngb.alert.close:Close`,[["type","button","aria-label",r,1,"btn-close"],["type","button","aria-label",r,1,"btn-close",3,"click"]]},template:function(s,a){s&1&&(be(),ge(0),J(1,Ji,1,0,"button",0)),s&2&&(m(),X(a.dismissible?1:-1))},styles:[`ngb-alert{display:block}
`],encapsulation:2,changeDetection:0})}}return l})(),di=(()=>{class l{static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275mod=ne({type:l})}static{this.\u0275inj=ie({})}}return l})();var Zi=["*"];function en(l,u){if(l&1&&e(0),l&2){let r=M(2);Z(r.title)}}function tn(l,u){}function nn(l,u){if(l&1&&(t(0,"h3",2),h(1,en,1,1,"ng-template",null,0,q)(3,tn,0,0,"ng-template",4),i()),l&2){let r=y(2),s=M();m(3),p("ngTemplateOutlet",s.isTitleTemplate()?s.title:r)("ngTemplateOutletContext",s.context)}}var an=(()=>{class l{constructor(){this._ngbConfig=ee(Ae),this.autoClose=!0,this.placement="auto",this.popperOptions=r=>r,this.triggers="click",this.disablePopover=!1,this.openDelay=0,this.closeDelay=0}get animation(){return this._animation??this._ngbConfig.animation}set animation(r){this._animation=r}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275prov=pe({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})(),ln=0,on=(()=>{class l{isTitleTemplate(){return this.title instanceof ke}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["ngb-popover-window"]],hostAttrs:["role","tooltip",2,"position","absolute"],hostVars:5,hostBindings:function(s,a){s&1&&c("mouseenter",function(){return a.onMouseEnter()})("mouseleave",function(){return a.onMouseLeave()}),s&2&&(ft("id",a.id),H("popover"+(a.popoverClass?" "+a.popoverClass:"")),ve("fade",a.animation))},inputs:{animation:"animation",title:"title",id:"id",popoverClass:"popoverClass",context:"context",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave"},ngContentSelectors:Zi,decls:4,vars:1,consts:[["simpleTitle",""],["data-popper-arrow","",1,"popover-arrow"],[1,"popover-header"],[1,"popover-body"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(s,a){s&1&&(be(),n(0,"div",1),J(1,nn,4,2,"h3",2),t(2,"div",3),ge(3),i()),s&2&&(m(),X(a.title?1:-1))},dependencies:[he],encapsulation:2,changeDetection:0})}}return l})(),si=(()=>{class l{constructor(){this._config=ee(an),this.animation=this._config.animation,this.autoClose=this._config.autoClose,this.placement=this._config.placement,this.popperOptions=this._config.popperOptions,this.triggers=this._config.triggers,this.container=this._config.container,this.disablePopover=this._config.disablePopover,this.popoverClass=this._config.popoverClass,this.openDelay=this._config.openDelay,this.closeDelay=this._config.closeDelay,this.shown=new oe,this.hidden=new oe,this._nativeElement=ee(me).nativeElement,this._ngZone=ee(Ee),this._document=ee(ut),this._changeDetector=ee(Et),this._injector=ee(pt),this._ngbPopoverWindowId=`ngb-popover-${ln++}`,this._popupService=new Mt(on),this._windowRef=null,this._positioning=_t(),this._mouseEnterPopover=new xe,this._mouseLeavePopover=new xe,this._opening=!0,this._transitioning=!1}open(r){if(!this._opening&&this._transitioning&&(this._transitioning=!1,nt(this._windowRef.location.nativeElement)),!this._windowRef&&!this._isDisabled()){let{windowRef:s,transition$:a}=this._popupService.open(this.ngbPopover,r??this.popoverContext,this.animation);this._opening=!0,this._transitioning=!0,this._windowRef=s,this._windowRef.setInput("animation",this.animation),this._windowRef.setInput("title",this.popoverTitle),this._windowRef.setInput("context",r??this.popoverContext),this._windowRef.setInput("popoverClass",this.popoverClass),this._windowRef.setInput("id",this._ngbPopoverWindowId),this._windowRef.setInput("onMouseEnter",()=>this._mouseEnterPopover.next()),this._windowRef.setInput("onMouseLeave",()=>this._mouseLeavePopover.next()),this._getPositionTargetElement().setAttribute("aria-describedby",this._ngbPopoverWindowId),this.container==="body"&&this._document.body.appendChild(this._windowRef.location.nativeElement),this._windowRef.changeDetectorRef.detectChanges(),this._windowRef.changeDetectorRef.markForCheck(),this._ngZone.runOutsideAngular(()=>{this._positioning.createPopper({hostElement:this._getPositionTargetElement(),targetElement:this._windowRef.location.nativeElement,placement:this.placement,baseClass:"bs-popover",updatePopperOptions:d=>this.popperOptions(It([0,8])(d))}),Promise.resolve().then(()=>{this._positioning.update()}),this._afterRenderRef=gt({mixedReadWrite:()=>{this._positioning.update()}},{injector:this._injector})}),At(this._ngZone,this._document,this.autoClose,()=>this.close(),this.hidden,[this._windowRef.location.nativeElement]),a.subscribe(()=>{this._transitioning&&(this._transitioning=!1,this.shown.emit())})}}close(r=this.animation){this._opening&&this._transitioning&&(this._transitioning=!1,nt(this._windowRef.location.nativeElement)),this._windowRef&&(this._getPositionTargetElement().removeAttribute("aria-describedby"),this._opening=!1,this._transitioning=!0,this._popupService.close(r).subscribe(()=>{this._windowRef=null,this._positioning.destroy(),this._afterRenderRef?.destroy(),this._transitioning&&(this._transitioning=!1,this.hidden.emit()),this._changeDetector.markForCheck()}))}toggle(){this._windowRef?this.close():this.open()}isOpen(){return this._windowRef!=null}ngOnInit(){this._unregisterListenersFn=Dt(this._nativeElement,this.triggers,this.isOpen.bind(this),this.open.bind(this),this.close.bind(this),+this.openDelay,+this.closeDelay,this._mouseEnterPopover,this._mouseLeavePopover)}ngOnChanges({ngbPopover:r,popoverTitle:s,disablePopover:a,popoverClass:d}){d&&this.isOpen()&&this._windowRef.setInput("popoverClass",d.currentValue),(r||s||a)&&this._isDisabled()&&this.close()}ngOnDestroy(){this.close(!1),this._unregisterListenersFn?.()}_isDisabled(){return this.disablePopover?!0:!this.ngbPopover&&!this.popoverTitle}_getPositionTargetElement(){return(Ct(this.positionTarget)?this._document.querySelector(this.positionTarget):this.positionTarget)||this._nativeElement}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275dir=_e({type:l,selectors:[["","ngbPopover",""]],inputs:{animation:"animation",autoClose:"autoClose",ngbPopover:"ngbPopover",popoverTitle:"popoverTitle",placement:"placement",popperOptions:"popperOptions",triggers:"triggers",positionTarget:"positionTarget",container:"container",disablePopover:"disablePopover",popoverClass:"popoverClass",popoverContext:"popoverContext",openDelay:"openDelay",closeDelay:"closeDelay"},outputs:{shown:"shown",hidden:"hidden"},exportAs:["ngbPopover"],features:[ye]})}}return l})(),mi=(()=>{class l{static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275mod=ne({type:l})}static{this.\u0275inj=ie({})}}return l})();var hi=$i(vi(),1);var rn=["ngx-masonry",""],dn=["*"],ot=(()=>{class l{constructor(r,s){this.platformId=r,this._element=s,this.updateLayout=!1,this.ordered=!1,this.layoutComplete=new oe,this.removeComplete=new oe,this.itemsLoaded=new oe,this.pendingItems=[]}ngOnInit(){this.options||(this.options={}),this.options.itemSelector||(this.options.itemSelector="[ngxMasonryItem], ngxMasonryItem"),this.options.transitionDuration="0s",Te(this.platformId)&&(this.masonryInstance=new hi.default(this._element.nativeElement,this.options),this.masonryInstance.on("layoutComplete",r=>{this.layoutComplete.emit(r)}),this.masonryInstance.on("removeComplete",r=>{this.removeComplete.emit(r)}),this.masonryInstance.items=[])}ngOnChanges(r){r.updateLayout&&(r.updateLayout.firstChange||this.layout())}ngOnDestroy(){this.masonryInstance&&this.masonryInstance.destroy()}layout(){setTimeout(()=>{this.masonryInstance.layout()})}reloadItems(){setTimeout(()=>{this.masonryInstance.reloadItems()})}addPendingItem(r){this.pendingItems.push(r)}add(r){if(this.ordered){for(let[s,a]of this.pendingItems.entries())if(a)if(a.images&&a.images.size===0)this.pendingItems[s]=void 0,this.itemLoaded(a),s+1===this.pendingItems.length&&(this.itemsLoaded.emit(this.pendingItems.length),this.pendingItems=[]);else return}else this.itemLoaded(r)}itemLoaded(r){Te(this.platformId)&&(r.prepend?this.masonryInstance.prepended(r.element.nativeElement):this.masonryInstance.appended(r.element.nativeElement),this.masonryInstance.items.length===1&&this.masonryInstance.layout(),r.playAnimation(!0))}remove(r){Te(this.platformId)&&(this.masonryInstance.remove(r),this.layout())}}return l.\u0275fac=function(r){return new(r||l)(K(bt),K(me))},l.\u0275cmp=C({type:l,selectors:[["","ngx-masonry",""],["ngx-masonry"]],inputs:{options:"options",updateLayout:"updateLayout",ordered:"ordered"},outputs:{layoutComplete:"layoutComplete",removeComplete:"removeComplete",itemsLoaded:"itemsLoaded"},standalone:!1,features:[ye],attrs:rn,ngContentSelectors:dn,decls:1,vars:0,template:function(r,s){r&1&&(be(),ge(0))},styles:["[_nghost-%COMP%]{display:block}"]}),l})(),xi=(()=>{class l{constructor(r,s,a,d){this.element=r,this.builder=s,this.parent=a,this.renderer=d,this.prepend=!1,this.animations={show:[fe({opacity:0}),at("400ms ease-in",fe({opacity:1}))],hide:[fe({opacity:"*"}),at("400ms ease-in",fe({opacity:0}))]}}ngOnInit(){this.parent.options.animations!==void 0&&(this.animations=this.parent.options.animations),this.renderer.setStyle(this.element.nativeElement,"position","fixed"),this.renderer.setStyle(this.element.nativeElement,"right","-150vw"),this.parent.addPendingItem(this)}ngAfterViewInit(){let r=Array.from(this.element.nativeElement.getElementsByTagName("img"));if(this.images=new Set(r),r.length===0)setTimeout(()=>{this.parent.add(this)});else for(let s of r)s.hasAttribute("masonryLazy")?this.imageLoaded(s):(this.renderer.listen(s,"load",a=>{this.imageLoaded(s)}),this.renderer.listen(s,"error",a=>{this.imageLoaded(s)}))}ngOnDestroy(){this.images&&this.images.size===0&&this.element.nativeElement.parentNode&&(this.playAnimation(!1),this.parent.remove(this.element.nativeElement))}imageLoaded(r){this.images.delete(r),this.images.size===0&&this.parent.add(this)}playAnimation(r){let s=r?this.animations.show:this.animations.hide;s&&this.builder.build(s).create(this.element.nativeElement).play()}}return l.\u0275fac=function(r){return new(r||l)(K(me),K(oi),K(ct(()=>ot)),K(vt))},l.\u0275dir=_e({type:l,selectors:[["","ngxMasonryItem",""],["ngxMasonryItem"]],inputs:{prepend:"prepend"},standalone:!1}),l})(),fi=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=ne({type:l}),l.\u0275inj=ie({}),l})();var Si=[{color:"primary",icon:"ri-user-smile-line",text:"white"},{color:"secondary",icon:"ri-check-double-line",text:"white"},{color:"success",icon:"ri-notification-off-line",text:"white"},{color:"danger",icon:"ri-error-warning-line",text:"white"}],wi=[{color:"warning",icon:"ri-alert-line",text:"white"},{color:"info",icon:"ri-airplay-line",text:"white"},{color:"light",icon:"ri-airplay-line",text:"body"},{color:"dark",icon:"ri-refresh-line",text:"white"}];var mn=["staticAlert"],cn=["selfClosingAlert"];function pn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",72),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),e(4),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),R(" A simple ",r.color," alert\u2014check it out! ")}}function un(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",72),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),t(4,"strong"),e(5,"Hi!"),i(),e(6," A simple "),t(7,"b"),e(8),i(),e(9," \u2014check it out! "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(5),R("Dismissible ",r.color," alert")}}function bn(l,u){if(l&1){let r=_();t(0,"ngb-alert",73,0),c("closed",function(){x(r);let a=M();return f(a.successMessage="")}),e(2),i()}if(l&2){let r=M();m(2),Z(r.successMessage)}}function gn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",74),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),t(4,"strong"),e(5," Hi! "),i(),e(6," - Outline "),t(7,"b"),e(8),i(),e(9," example "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(5),R("",r.color," alert")}}function vn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",74),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),t(4,"strong"),e(5," Hi! "),i(),e(6," - Outline "),t(7,"b"),e(8),i(),e(9," example "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(5),R("",r.color," alert")}}function hn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",75),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Left border alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),H(le("",r.icon," me-3 align-middle fs-16")),m(2),Z(r.color)}}function xn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",75),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Left border alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),H(le("",r.icon," me-3 align-middle fs-16")),m(2),Z(r.color)}}function fn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",76),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Left border alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),H(Ce("alert-dismissible material-shadow bg-",r.color,"  text-",r.text," alert-label-icon fade show custom-alert")),p("type",Q(r.color)),m(),H(le("",r.icon," label-icon")),m(2),Z(r.color)}}function Sn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",76),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Left border alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),H(Ce("alert-dismissible material-shadow bg-",r.color," text-",r.text," alert-label-icon fade show custom-alert")),p("type",Q(r.color)),m(),H(le("",r.icon," label-icon")),m(2),Z(r.color)}}function wn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",77),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),t(4,"div",78)(5,"div",79)(6,"div",80),n(7,"i",81),i(),t(8,"div",82)(9,"h5",83),e(10,"Yey! Everything worked!"),i(),t(11,"p",84),e(12,"This alert needs your attention, but it's not super important."),i()()()(),t(13,"div",85)(14,"p",84),e(15,"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),i()()()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color))}}function En(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",77),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),t(4,"div",78)(5,"div",79)(6,"div",80),n(7,"i",81),i(),t(8,"div",82)(9,"h5",83),e(10,"Yey! Everything worked!"),i(),t(11,"p",84),e(12,"This alert needs your attention, but it's not super important."),i()()()(),t(13,"div",85)(14,"p",84),e(15,"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),i()()()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color))}}function yn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",86),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Top border alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),H(Ce("",r.icon," me-3 align-middle fs-16 text-",r.color)),m(2),Z(r.color)}}function kn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",86),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Top border alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),H(le("",r.icon," me-3 align-middle fs-16 text-warning")),m(2),Z(r.color)}}function _n(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",87),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Label icon arrow alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),H(le("",r.icon," label-icon")),m(2),Z(r.color)}}function Cn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",87),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Label icon arrow alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),H(le("",r.icon," label-icon")),m(2),Z(r.color)}}function Tn(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",88),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Rounded label alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),H(le("",r.icon," label-icon")),m(2),Z(r.color)}}function An(l,u){if(l&1){let r=_();t(0,"div")(1,"h6"),e(2),i(),t(3,"ngb-alert",88),c("close",function(){let a=x(r).$implicit,d=M();return f(d.close(a,d.defaultData))}),n(4,"i"),t(5,"strong"),e(6),i(),e(7," - Rounded label alert "),i()()}if(l&2){let r=u.$implicit;m(2),R("",r.color," Alert"),m(),p("type",Q(r.color)),m(),H(le("",r.icon," label-icon")),m(2),Z(r.color)}}var Ei=(()=>{class l{constructor(){this.defaultData=[],this.dismissingData=[],this.alertData=[],this._success=new xe,this.staticAlertClosed=!1,this.successMessage=""}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Alerts",active:!0}],this._success.subscribe(r=>this.successMessage=r),this._success.pipe(mt(5e3)).subscribe(()=>{this.selfClosingAlert&&this.selfClosingAlert.close()}),this._fetchData()}_fetchData(){this.defaultData=Si,this.dismissingData=wi}close(r,s){s.splice(s.indexOf(r),1)}changeSuccessMessage(){this._success.next("Nice, you triggered this alert message!")}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-alerts"]],viewQuery:function(s,a){if(s&1&&wt(mn,5)(cn,5),s&2){let d;et(d=tt())&&(a.staticAlert=d.first),et(d=tt())&&(a.selfClosingAlert=d.first)}},standalone:!1,decls:879,vars:34,consts:[["selfClosingAlert",""],["title","Alerts",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","default",1,"form-label","text-muted"],["type","checkbox","id","default",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"col-xl-6"],["type","primary",1,"material-shadow",3,"dismissible"],["type","secondary",1,"material-shadow",3,"dismissible"],["type","success",1,"material-shadow",3,"dismissible"],["type","danger",1,"mb-xl-0",3,"dismissible"],["type","warning",1,"material-shadow",3,"dismissible"],["type","info",1,"material-shadow",3,"dismissible"],["type","light",1,"material-shadow",3,"dismissible"],["type","dark",1,"mb-0",3,"dismissible"],[1,"d-none","code-view"],[1,"language-markup",2,"height","352px"],["for","borderless-alerts",1,"form-label","text-muted"],["type","checkbox","id","borderless-alerts",1,"form-check-input","code-switcher",3,"click"],["type","primary",1,"border-0","material-shadow",3,"dismissible"],["type","secondary",1,"border-0","material-shadow",3,"dismissible"],["type","success",1,"border-0","material-shadow",3,"dismissible"],["type","danger",1,"border-0","mb-xl-0",3,"dismissible"],["type","warning",1,"border-0","material-shadow",3,"dismissible"],["type","info",1,"border-0","material-shadow",3,"dismissible"],["type","light",1,"border-0","material-shadow",3,"dismissible"],["type","dark",1,"border-0","mb-0","material-shadow",3,"dismissible"],["for","1",1,"form-label","text-muted"],["type","checkbox","id","1",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","flex-column","gap-3"],["for","2",1,"form-label","text-muted"],["type","checkbox","id","2",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0);",1,"alert-link"],["type","dark",1,"mb-xl-0",3,"dismissible"],[1,"language-markup",2,"max-height","260px"],["for","3",1,"form-label","text-muted"],["type","checkbox","id","3",1,"form-check-input","code-switcher",3,"click"],["id","liveAlertPlaceholder",1,"custom-alert"],["type","success"],["type","button","id","liveAlertBtn",1,"btn","btn-primary",3,"click"],["for","4",1,"form-label","text-muted"],["type","checkbox","id","4",1,"form-check-input","code-switcher",3,"click"],["for","5",1,"form-label","text-muted"],["type","checkbox","id","5",1,"form-check-input","code-switcher",3,"click"],["for","6",1,"form-label","text-muted"],["type","checkbox","id","6",1,"form-check-input","code-switcher",3,"click"],["for","7",1,"form-label","text-muted"],["type","checkbox","id","7",1,"form-check-input","code-switcher",3,"click"],["for","8",1,"form-label","text-muted"],["type","checkbox","id","8",1,"form-check-input","code-switcher",3,"click"],["for","9",1,"form-label","text-muted"],["type","checkbox","id","9",1,"form-check-input","code-switcher",3,"click"],["for","10",1,"form-label","text-muted"],["type","checkbox","id","10",1,"form-check-input","code-switcher",3,"click"],["for","solid-alerts-code",1,"form-label","text-muted"],["type","checkbox","id","solid-alerts-code",1,"form-check-input","code-switcher",3,"click"],["type","primary",1,"bg-primary","border-primary","material-shadow","text-white",3,"dismissible"],["type","secondary",1,"bg-secondary","border-secondary","material-shadow","text-white",3,"dismissible"],["type","success",1,"bg-success","border-success","material-shadow","text-white",3,"dismissible"],["type","danger",1,"bg-danger","border-danger","material-shadow","text-white","mb-xl-0",3,"dismissible"],["type","warning",1,"bg-warning","border-warning","material-shadow","text-white",3,"dismissible"],["type","info",1,"bg-info","border-info","material-shadow","text-white",3,"dismissible"],["type","light",1,"bg-light","border-light","material-shadow","text-body",3,"dismissible"],["type","dark",1,"bg-dark","border-dark","material-shadow","text-white","mb-0",3,"dismissible"],[1,"custom-alert","material-shadow",3,"close","type"],["type","success",3,"closed"],[1,"alert-dismissible","border-2","bg-body-secondary","fade","show","custom-alert","material-shadow","mb-0",3,"close","type"],[1,"alert","alert-primary","alert-border-left","alert-dismissible","fade","show","material-shadow","custom-alert",3,"close","type"],[3,"close","type"],[1,"alert-dismissible","material-shadow","alert-additional","fade","show","custom-alert",3,"close","type"],[1,"alert-body"],[1,"d-flex"],[1,"flex-shrink-0","me-3"],[1,"ri-notification-off-line","fs-16","align-middle"],[1,"flex-grow-1"],[1,"alert-heading"],[1,"mb-0"],[1,"alert-content"],[1,"alert-top-border","material-shadow","alert-dismissible","fade","show","custom-alert",3,"close","type"],[1,"alert-dismissible","material-shadow","alert-label-icon","label-arrow","fade","show","custom-alert",3,"close","type"],[1,"alert-dismissible","material-shadow","alert-label-icon","rounded-label","fade","show","custom-alert",3,"close","type"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",1),t(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h4",6),e(6,"Default Alerts"),i(),t(7,"div",7)(8,"div",8)(9,"label",9),e(10,"Show Code"),i(),t(11,"input",10),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",11)(13,"p",12),e(14,"Use the "),t(15,"code"),e(16,"alert "),i(),e(17,"class to show a default alert."),i(),t(18,"div",13)(19,"div",2)(20,"div",14)(21,"h6"),e(22,"Primary Alert"),i(),t(23,"ngb-alert",15)(24,"strong"),e(25," Hi! "),i(),e(26," A simple "),t(27,"b"),e(28,"Primary alert"),i(),e(29," \u2014check it out! "),i(),t(30,"h6"),e(31,"Secondary Alert"),i(),t(32,"ngb-alert",16)(33,"strong"),e(34," How are you! "),i(),e(35," A simple "),t(36,"b"),e(37,"secondary alert"),i(),e(38," \u2014check it out! "),i(),t(39,"h6"),e(40,"Success Alert"),i(),t(41,"ngb-alert",17)(42,"strong"),e(43," Yey! Everything worked! "),i(),e(44," A simple "),t(45,"b"),e(46,"success alert"),i(),e(47," \u2014check it out! "),i(),t(48,"h6"),e(49,"Danger Alert"),i(),t(50,"ngb-alert",18)(51,"strong"),e(52," Something is very wrong! "),i(),e(53," A simple "),t(54,"b"),e(55,"danger alert"),i(),e(56," \u2014check it out! "),i()(),t(57,"div",14)(58,"h6"),e(59,"Warning Alert"),i(),t(60,"ngb-alert",19)(61,"strong"),e(62," Uh oh, something went wrong "),i(),e(63," A simple "),t(64,"b"),e(65,"warning alert"),i(),e(66," \u2014check it out! "),i(),t(67,"h6"),e(68,"Info Alert"),i(),t(69,"ngb-alert",20)(70,"strong"),e(71,"Don't forget' it !"),i(),e(72," A simple "),t(73,"b"),e(74,"info alert"),i(),e(75," \u2014check it out! "),i(),t(76,"h6"),e(77,"Light Alert"),i(),t(78,"ngb-alert",21)(79,"strong"),e(80,"Mind Your Step!"),i(),e(81," A simple "),t(82,"b"),e(83,"light alert"),i(),e(84," \u2014check it out! "),i(),t(85,"h6"),e(86,"Dark Alert"),i(),t(87,"ngb-alert",22)(88,"strong"),e(89,"Did you know?"),i(),e(90," A simple "),t(91,"b"),e(92,"dark alert"),i(),e(93," \u2014check it out! "),i()()()(),t(94,"div",23)(95,"pre",24)(96,"code"),e(97,`<!-- Primary Alert -->
<div class="alert alert-primary material-shadow" role="alert">
<strong> Hi! </strong> A simple <b>Primary alert</b> \u2014check it out!
</div>
`),i(),e(98,`
`),t(99,"code"),e(100,`<!-- Secondary Alert -->
<div class="alert alert-secondary material-shadow" role="alert">
<strong> How are you! </strong> A simple <b>secondary alert</b> \u2014check it out!
</div>
`),i(),e(101,`
`),t(102,"code"),e(103,`<!-- success Alert -->
<div class="alert alert-success material-shadow" role="alert">
<strong> Yey! Everything worked! </strong> A simple <b>success alert</b> \u2014check it out!
</div>
`),i(),e(104,`
`),t(105,"code"),e(106,`<!-- danger Alert -->
<div class="alert alert-danger material-shadow" role="alert">
<strong> Something is very wrong! </strong> A simple <b>danger alert</b> \u2014check it out!
</div>
`),i(),e(107,`
`),t(108,"code"),e(109,`<!-- warning Alert -->
<div class="alert alert-warning material-shadow" role="alert">
<strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> \u2014check it out!
</div>
`),i(),e(110,`
`),t(111,"code"),e(112,`<!-- Info Alert -->
<div class="alert alert-info material-shadow" role="alert">
<strong> Don't forget' it ! </strong> A simple <b>info alert</b> \u2014check it out!
</div>
`),i(),e(113,`
`),t(114,"code"),e(115,`<!-- Light Alert -->
<div class="alert alert-light material-shadow" role="alert">
<strong> Mind Your Step! </strong> A simple <b>light alert</b> \u2014check it out!
</div>
`),i(),e(116,`
`),t(117,"code"),e(118,`<!-- Dark Alert -->
<div class="alert alert-dark material-shadow" role="alert">
<strong> Did you know? </strong> A simple <b>dark alert</b> \u2014check it out!
</div>
`),i()()()()()()(),t(119,"div",2)(120,"div",3)(121,"div",4)(122,"div",5)(123,"h4",6),e(124,"Borderless Alerts"),i(),t(125,"div",7)(126,"div",8)(127,"label",25),e(128,"Show Code"),i(),t(129,"input",26),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(130,"div",11)(131,"p",12),e(132,"Use the "),t(133,"code"),e(134,"border-0"),i(),e(135," class to set alert without border."),i(),t(136,"div",13)(137,"div",2)(138,"div",14)(139,"h6"),e(140,"Primary Alert"),i(),t(141,"ngb-alert",27)(142,"strong"),e(143," Hi! "),i(),e(144," A simple "),t(145,"b"),e(146,"Primary alert"),i(),e(147," \u2014check it out! "),i(),t(148,"h6"),e(149,"Secondary Alert"),i(),t(150,"ngb-alert",28)(151,"strong"),e(152,"How are you! "),i(),e(153," A simple "),t(154,"b"),e(155,"Secondary alert"),i(),e(156," \u2014check it out! "),i(),t(157,"h6"),e(158,"Success Alert"),i(),t(159,"ngb-alert",29)(160,"strong"),e(161," Yey! Everything worked! "),i(),e(162," A simple "),t(163,"b"),e(164,"success alert"),i(),e(165," \u2014check it out! "),i(),t(166,"h6"),e(167,"Danger Alert"),i(),t(168,"ngb-alert",30)(169,"strong"),e(170," Something is very wrong! "),i(),e(171," A simple danger alert\u2014check it out! "),i()(),t(172,"div",14)(173,"h6"),e(174,"Warning Alert"),i(),t(175,"ngb-alert",31)(176,"strong"),e(177," Uh oh, something went wrong "),i(),e(178," A simple "),t(179,"b"),e(180,"warning alert"),i(),e(181," \u2014check it out! "),i(),t(182,"h6"),e(183,"Info Alert"),i(),t(184,"ngb-alert",32)(185,"strong"),e(186,"Don't forget' it !"),i(),e(187," A simple "),t(188,"b"),e(189,"info alert"),i(),e(190," \u2014check it out! "),i(),t(191,"h6"),e(192,"Light Alert"),i(),t(193,"ngb-alert",33)(194,"strong"),e(195,"Mind Your Step!"),i(),e(196," A simple "),t(197,"b"),e(198,"light alert"),i(),e(199," \u2014check it out! "),i(),t(200,"h6"),e(201,"Dark Alert"),i(),t(202,"ngb-alert",34)(203,"strong"),e(204,"Did you know?"),i(),e(205," A simple "),t(206,"b"),e(207,"light alert"),i(),e(208," \u2014check it out! "),i()()()(),t(209,"div",23)(210,"pre",24)(211,"code"),e(212,`<!-- Primary Alert -->
<div class="alert border-0 alert-primary material-shadow" role="alert">
<strong> Hi! </strong> A simple <b>Primary alert</b> \u2014check it out!
</div>
`),i(),e(213,`
`),t(214,"code"),e(215,`<!-- Secondary Alert -->
<div class="alert border-0 alert-secondary material-shadow" role="alert">
<strong> How are you! </strong> A simple <b>secondary alert</b> \u2014check it out!
</div>
`),i(),e(216,`
`),t(217,"code"),e(218,`<!-- Success Alert -->
<div class="alert border-0 alert-success material-shadow" role="alert">
<strong> Yey! Everything worked! </strong> A simple <b>success alert</b> \u2014check it out!
</div>
`),i(),e(219,`
`),t(220,"code"),e(221,`<!-- Danger Alert -->
<div class="alert border-0 alert-danger material-shadow" role="alert">
<strong> Something is very wrong! </strong> A simple <b>danger alert</b> \u2014check it out!
</div>
`),i(),e(222,`
`),t(223,"code"),e(224,`<!-- Warning Alert -->
<div class="alert border-0 alert-warning material-shadow" role="alert">
<strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> \u2014check it out!
</div>
`),i(),e(225,`
`),t(226,"code"),e(227,`<!-- Info Alert -->
<div class="alert border-0 alert-info material-shadow" role="alert">
<strong> Don't forget' it ! </strong> A simple <b>info alert</b> \u2014check it out!
</div>
`),i(),e(228,`
`),t(229,"code"),e(230,`<!-- Light Alert -->
<div class="alert border-0 alert-light material-shadow" role="alert">
<strong> Mind Your Step! </strong> A simple <b>light alert</b> \u2014check it out!
</div>
`),i(),e(231,`
`),t(232,"code"),e(233,`<!-- Dark Alert -->
<div class="alert border-0 alert-dark material-shadow mb-0" role="alert">
<strong> Did you know? </strong> A simple <b>dark alert</b> \u2014check it out!
</div>
`),i()()()()()()(),t(234,"div",2)(235,"div",3)(236,"div",4)(237,"div",5)(238,"h4",6),e(239,"Dismissing Alerts"),i(),t(240,"div",7)(241,"div",8)(242,"label",35),e(243,"Show Code"),i(),t(244,"input",36),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(245,"div",11)(246,"p",12),e(247,"Use the "),t(248,"code"),e(249,"alert-dismissible"),i(),e(250," class to add dismissing button to the alert. "),i(),t(251,"div",13)(252,"div",2)(253,"div",14)(254,"div",37),U(255,pn,5,4,"div",null,F),i()(),t(257,"div",14)(258,"div",37),U(259,un,10,4,"div",null,F),i()()()(),t(261,"div",23)(262,"pre",24)(263,"code"),e(264,`<!-- Primary Alert -->
<div class="alert alert-primary alert-dismissible material-shadow fade show" role="alert">
<strong> Hi! </strong> A simple <b>Dismissible primary Alert </b> \u2014 check it out!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(265,`
`),t(266,"code"),e(267,`<!-- Secondary Alert -->
<div class="alert alert-secondary material-shadow alert-dismissible fade show" role="alert">
<strong> How are you! </strong> A simple <b>Dismissible secondary Alert </b> \u2014 check it out!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(268,`
`),t(269,"code"),e(270,`<!-- Success Alert -->
<div class="alert alert-success material-shadow alert-dismissible fade show" role="alert">
<strong> Yey! Everything worked! </strong> A simple <b>Dismissible success Alert </b> \u2014 check it out!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(271,`
`),t(272,"code"),e(273,`<!-- Danger Alert -->
<div class="alert alert-danger material-shadow alert-dismissible fade show" role="alert">
<strong> Something is very wrong! </strong> A simple <b>Dismissible danger Alert </b> \u2014 check it out!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(274,`
`),t(275,"code"),e(276,`<!-- Warning Alert -->
<div class="alert alert-warning material-shadow alert-dismissible fade show" role="alert">
<strong> Welcome Back! </strong> A simple <b>Dismissible warning Alert </b> \u2014 check it out!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(277,`
`),t(278,"code"),e(279,`<!-- Info Alert -->
<div class="alert alert-info material-shadow alert-dismissible fade show" role="alert">
<strong> Don't forget' it ! </strong> A simple <b>Dismissible info Alert </b> \u2014 check it out!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(280,`
`),t(281,"code"),e(282,`<!-- Light Alert -->
<div class="alert alert-light material-shadow alert-dismissible fade show" role="alert">
<strong> Mind Your Step! </strong> A simple <b>Dismissible light Alert </b> \u2014 check it out!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(283,`
`),t(284,"code"),e(285,`<!-- Dark Alert -->
<div class="alert alert-dark material-shadow alert-dismissible fade show" role="alert">
<strong> Did you know? </strong> A simple <b>Dismissible dark Alert </b> \u2014 check it out!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i()()()()()()(),t(286,"div",2)(287,"div",3)(288,"div",4)(289,"div",5)(290,"h4",6),e(291,"Link Color Alerts"),i(),t(292,"div",7)(293,"div",8)(294,"label",38),e(295,"Show Code"),i(),t(296,"input",39),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(297,"div",11)(298,"p",12),e(299,"Use the "),t(300,"code"),e(301,"alert-link"),i(),e(302," class at <a> tag to show matching colored links within the given alert."),i(),t(303,"div",13)(304,"div",2)(305,"div",14)(306,"h6"),e(307,"Primary Alert"),i(),t(308,"ngb-alert",15),e(309," A simple Primary alert with "),t(310,"a",40),e(311,"an example link"),i(),e(312,". Give it a click if you like. "),i(),t(313,"h6"),e(314,"Secondary Alert"),i(),t(315,"ngb-alert",16),e(316," A simple Secondary alert with "),t(317,"a",40),e(318,"an example link"),i(),e(319,". Give it a click if you like. "),i(),t(320,"h6"),e(321,"Success Alert"),i(),t(322,"ngb-alert",17),e(323," A simple Success alert with "),t(324,"a",40),e(325,"an example link"),i(),e(326,". Give it a click if you like. "),i(),t(327,"h6"),e(328,"Danger Alert"),i(),t(329,"ngb-alert",18),e(330," A simple Danger alert with "),t(331,"a",40),e(332,"an example link"),i(),e(333,". Give it a click if you like. "),i()(),t(334,"div",14)(335,"h6"),e(336,"Warning Alert"),i(),t(337,"ngb-alert",19),e(338," A simple Warning alert with "),t(339,"a",40),e(340,"an example link"),i(),e(341,". Give it a click if you like. "),i(),t(342,"h6"),e(343,"Info Alert"),i(),t(344,"ngb-alert",20),e(345," A simple Info alert with "),t(346,"a",40),e(347,"an example link"),i(),e(348,". Give it a click if you like. "),i(),t(349,"h6"),e(350,"Light Alert"),i(),t(351,"ngb-alert",21),e(352," A simple Info alert with "),t(353,"a",40),e(354,"an example link"),i(),e(355,". Give it a click if you like. "),i(),t(356,"h6"),e(357,"Dark Alert"),i(),t(358,"ngb-alert",41),e(359," A simple Dark alert with "),t(360,"a",40),e(361,"an example link"),i(),e(362,". Give it a click if you like. "),i()()()(),t(363,"div",23)(364,"pre",42)(365,"code"),e(366,`<!-- Primary Alert -->
<div class="alert alert-primary material-shadow" role="alert">
A simple <b>Primary alert</b> with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
`),i(),e(367,`
`),t(368,"code"),e(369,`<!-- Secondary Alert -->
<div class="alert alert-secondary material-shadow" role="alert">
A simple <b>Secondary alert</b> with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
`),i(),e(370,`
`),t(371,"code"),e(372,`<!-- Success Alert -->
<div class="alert alert-success material-shadow" role="alert">
A simple <b>Success alert</b> with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
`),i(),e(373,`
`),t(374,"code"),e(375,`<!-- Danger Alert -->
<div class="alert alert-danger material-shadow" role="alert">
A simple <b>Danger alert</b> with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
`),i(),e(376,`
`),t(377,"code"),e(378,`<!-- Warning Alert -->
<div class="alert alert-warning material-shadow" role="alert">
A simple <b>Warning alert</b> with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
`),i(),e(379,`
`),t(380,"code"),e(381,`<!-- Info Alert -->
<div class="alert alert-info material-shadow" role="alert">
A simple <b>Info alert</b> with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
`),i(),e(382,`
`),t(383,"code"),e(384,`<!-- Light Alert -->
<div class="alert alert-light material-shadow" role="alert">
A simple <b>Light alert</b> with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
`),i(),e(385,`
`),t(386,"code"),e(387,`<!-- Dark Alert -->
<div class="alert alert-dark material-shadow" role="alert">
A simple <b>Dark alert</b> with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
`),i()()()()()()(),t(388,"div",2)(389,"div",3)(390,"div",4)(391,"div",5)(392,"h4",6),e(393,"Live Alert Example"),i(),t(394,"div",7)(395,"div",8)(396,"label",43),e(397,"Show Code"),i(),t(398,"input",44),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(399,"div",11)(400,"div",45),J(401,bn,3,1,"ngb-alert",46),i(),t(402,"button",47),c("click",function(){return a.changeSuccessMessage()}),e(403,"Show live alert"),i(),t(404,"div",23)(405,"pre",42)(406,"code"),e(407,`<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
`),i()()()()()()(),t(408,"div",2)(409,"div",3)(410,"div",4)(411,"div",5)(412,"h4",6),e(413,"Outline Alerts"),i(),t(414,"div",7)(415,"div",8)(416,"label",48),e(417,"Show Code"),i(),t(418,"input",49),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(419,"div",11)(420,"p",12),e(421,"Use the "),t(422,"code"),e(423,"border-2 bg-body-secondary"),i(),e(424," class to set an alert with outline."),i(),t(425,"div",13)(426,"div",2)(427,"div",14)(428,"div",37),e(429,"+ "),U(430,gn,10,4,"div",null,F),i()(),t(432,"div",14)(433,"div",37),U(434,vn,10,4,"div",null,F),i()()()(),t(436,"div",23)(437,"pre",42)(438,"code"),e(439,`<!-- Primary Alert -->
<div class="alert alert-primary alert-dismissible border-2 bg-body-secondary material-shadow fade show" role="alert">
<strong> Hi! </strong> - Outline <b>primary alert</b> example
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(440,`
`),t(441,"code"),e(442,`<!-- Secondary Alert -->
<div class="alert alert-secondary alert-dismissible border-2 bg-body-secondary material-shadow fade show" role="alert">
<strong> How are you! </strong> - Outline <b>secondary alert</b> example
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(443,`
`),t(444,"code"),e(445,`<!-- Success Alert -->
<div class="alert alert-success alert-dismissible border-2 bg-body-secondary material-shadow fade show" role="alert">
<strong> Yey! Everything worked! </strong> - Outline <b>success alert</b> example
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(446,`
`),t(447,"code"),e(448,`<!-- Danger Alert -->
<div class="alert alert-danger alert-dismissible border-2 bg-body-secondary material-shadow fade show" role="alert">
<strong> Something is very wrong! </strong> - Outline <b>danger alert</b> example
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(449,`
`),t(450,"code"),e(451,`<!-- Warning Alert -->
<div class="alert alert-warning alert-dismissible border-2 bg-body-secondary material-shadow fade show" role="alert">
<strong> Uh oh, something went wrong! </strong> - Outline <b>warning alert</b> example
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(452,`
`),t(453,"code"),e(454,`<!-- Info Alert -->
<div class="alert alert-info alert-dismissible border-2 bg-body-secondary material-shadow fade show" role="alert">
<strong> Don't forget' it ! </strong> - Outline <b>info alert</b> example
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(455,`
`),t(456,"code"),e(457,`<!-- Dark Alert -->
<div class="alert alert-dark alert-dismissible border-2 bg-body-secondary material-shadow fade show" role="alert">
<strong> Did you know? </strong> - Outline <b>dark alert</b> example
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i()()()()()()(),t(458,"div",2)(459,"div",3)(460,"div",4)(461,"div",5)(462,"h4",6),e(463,"Left Border Alerts"),i(),t(464,"div",7)(465,"div",8)(466,"label",50),e(467,"Show Code"),i(),t(468,"input",51),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(469,"div",11)(470,"p",12),e(471,"Use the "),t(472,"code"),e(473,"alert-border-left "),i(),e(474," class to set an alert with the left border & outline."),i(),t(475,"div",13)(476,"div",2)(477,"div",14)(478,"div",37),U(479,hn,8,7,"div",null,F),i()(),t(481,"div",14)(482,"div",37),U(483,xn,8,7,"div",null,F),i()()()(),t(485,"div",23)(486,"pre",42)(487,"code"),e(488,`<!-- Primary Alert -->
<div class="alert alert-primary alert-border-left alert-dismissible material-shadow fade show" role="alert">
<i class="ri-user-smile-line me-3 align-middle"></i> <strong>Primary</strong> - Left border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(489,`
`),t(490,"code"),e(491,`<!-- Secondary Alert -->
<div class="alert alert-secondary alert-border-left alert-dismissible material-shadow fade show" role="alert">
<i class="ri-check-double-line me-3 align-middle"></i> <strong>Secondary</strong> - Left border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(492,`
`),t(493,"code"),e(494,`<!-- Success Alert -->
<div class="alert alert-success alert-border-left alert-dismissible material-shadow fade show" role="alert">
<i class="ri-notification-off-line me-3 align-middle"></i> <strong>Success</strong> - Left border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(495,`
`),t(496,"code"),e(497,`<!-- Danger Alert -->
<div class="alert alert-danger alert-border-left alert-dismissible material-shadow fade show" role="alert">
<i class="ri-error-warning-line me-3 align-middle"></i> <strong>Danger</strong> - Left border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(498,`
`),t(499,"code"),e(500,`<!-- Warning Alert -->
<div class="alert alert-warning alert-border-left alert-dismissible material-shadow fade show" role="alert">
<i class="ri-alert-line me-3 align-middle"></i> <strong>Warning</strong> - Left border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(501,`
`),t(502,"code"),e(503,`<!-- Info Alert -->
<div class="alert alert-info alert-border-left alert-dismissible material-shadow fade show" role="alert">
<i class="ri-airplay-line me-3 align-middle"></i> <strong>Info</strong> - Left border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(504,`
`),t(505,"code"),e(506,`<!-- Light Alert -->
<div class="alert alert-light alert-border-left alert-dismissible material-shadow fade show" role="alert">
<i class="ri-mail-line me-3 align-middle"></i> <strong>Light</strong> - Left border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(507,`
`),t(508,"code"),e(509,`<!-- Dark Alert -->
<div class="alert alert-dark alert-border-left alert-dismissible material-shadow fade show" role="alert">
<i class="ri-refresh-line me-3 align-middle"></i> <strong>Dark</strong> - Left border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i()()()()()()(),t(510,"div",2)(511,"div",3)(512,"div",4)(513,"div",5)(514,"h4",6),e(515,"Label Icon Alerts"),i(),t(516,"div",7)(517,"div",8)(518,"label",52),e(519,"Show Code"),i(),t(520,"input",53),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(521,"div",11)(522,"p",12),e(523,"Use the "),t(524,"code"),e(525,"alert-label-icon"),i(),e(526," class to set an alert with a label icon."),i(),t(527,"div",13)(528,"div",2)(529,"div",14)(530,"div",37),U(531,fn,8,11,"div",null,F),i()(),t(533,"div",14)(534,"div",37),U(535,Sn,8,11,"div",null,F),i()()()(),t(537,"div",23)(538,"pre",42)(539,"code"),e(540,`<!-- Primary Alert -->
<div class="alert alert-primary alert-dismissible bg-primary material-shadow  text-white alert-label-icon fade show" role="alert">
<i class="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Label icon alert
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(541,`
`),t(542,"code"),e(543,`<!-- Secondary Alert -->
<div class="alert alert-secondary alert-dismissible bg-secondary material-shadow text-white alert-label-icon fade show" role="alert">
<i class="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon alert
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(544,`
`),t(545,"code"),e(546,`<!-- Success Alert -->
<div class="alert alert-success alert-dismissible bg-successs material-shadow text-white alert-label-icon fade show" role="alert">
<i class="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon alert
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(547,`
`),t(548,"code"),e(549,`<!-- Danger Alert -->
<div class="alert alert-danger alert-dismissible bg-danger material-shadow text-white alert-label-icon fade show" role="alert">
<i class="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon alert
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(550,`
`),t(551,"code"),e(552,`<!-- Warning Alert -->
<div class="alert alert-warning alert-dismissible bg-warning material-shadow text-white alert-label-icon fade show" role="alert">
<i class="ri-alert-line label-icon"></i><strong>Warning</strong> - Label icon alert
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(553,`
`),t(554,"code"),e(555,`<!-- Info Alert -->
<div class="alert alert-info alert-dismissible bg-info material-shadow text-white alert-label-icon fade show" role="alert">
<i class="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon alert
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(556,`
`),t(557,"code"),e(558,`<!-- Light Alert -->
<div class="alert alert-light alert-dismissible bg-light material-shadow text-white alert-label-icon fade show" role="alert">
<i class="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon alert
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(559,`
`),t(560,"code"),e(561,`<!-- Dark Alert -->
<div class="alert alert-dark alert-dismissible bg-body material-shadow text-white alert-label-icon fade show mb-0" role="alert">
<i class="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon alert
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i()()()()()()(),t(562,"div",2)(563,"div",3)(564,"div",4)(565,"div",5)(566,"h4",6),e(567,"Additional Content Alerts"),i(),t(568,"div",7)(569,"div",8)(570,"label",54),e(571,"Show Code"),i(),t(572,"input",55),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(573,"div",11)(574,"p",12),e(575,"Use the "),t(576,"code"),e(577,"alert-additional"),i(),e(578," class and Use the "),t(579,"code"),e(580,"alert-"),i(),e(581," class to HTML elements like headings, paragraphs, dividers etc."),i(),t(582,"div",13)(583,"div",2)(584,"div",14)(585,"div",37),U(586,wn,16,3,"div",null,F),i()(),t(588,"div",14)(589,"div",37),U(590,En,16,3,"div",null,F),i()()()(),t(592,"div",23)(593,"pre",42)(594,"code"),e(595,`<!-- Primary Alert -->
<div class="alert alert-primary alert-dismissible material-shadow alert-additional fade show" role="alert">
<div class="alert-body">
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
<div class="d-flex">
<div class="flex-shrink-0 me-3">
<i class="ri-user-smile-line fs-16 align-middle"></i>
</div>
<div class="flex-grow-1">
<h5 class="alert-heading">Well done !</h5>
<p class="mb-0">Aww yeah, you successfully read this important alert message. </p>
</div>
</div>
</div>
<div class="alert-content">
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</div>`),i(),e(596,`

`),t(597,"code"),e(598,`<!-- Danger Alert -->
<div class="alert alert-danger alert-dismissible material-shadow alert-additional fade show" role="alert">
<div class="alert-body">
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
<div class="d-flex">
<div class="flex-shrink-0 me-3">
<i class="ri-error-warning-line fs-16 align-middle"></i>
</div>
<div class="flex-grow-1">
<h5 class="alert-heading">Something is very wrong!</h5>
<p class="mb-0">Change a few things up and try submitting again. </p>
</div>
</div>
</div>
<div class="alert-content">
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</div>`),i(),e(599,`

`),t(600,"code"),e(601,`<!-- Success Alert -->
<div class="alert alert-success alert-dismissible material-shadow alert-additional fade show" role="alert">
<div class="alert-body">
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
<div class="d-flex">
<div class="flex-shrink-0 me-3">
<i class="ri-notification-off-line fs-16 align-middle"></i>
</div>
<div class="flex-grow-1">
<h5 class="alert-heading">Yey! Everything worked!</h5>
<p class="mb-0">This alert needs your attention, but it's not super important. </p>
</div>
</div>
</div>
<div class="alert-content">
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</div>`),i(),e(602,`

`),t(603,"code"),e(604,`<!-- Warning Alert -->
<div class="alert alert-warning alert-dismissible material-shadow alert-additional fade show mb-0" role="alert">
<div class="alert-body">
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
<div class="d-flex">
<div class="flex-shrink-0 me-3">
<i class="ri-alert-line fs-16 align-middle"></i>
</div>
<div class="flex-grow-1">
<h5 class="alert-heading">Uh oh, something went wrong!</h5>
<p class="mb-0">Better check yourself, you're not looking too good. </p>
</div>
</div>
</div>
<div class="alert-content">
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</div>`),i()()()()()()(),t(605,"div",2)(606,"div",3)(607,"div",4)(608,"div",5)(609,"h4",6),e(610,"Top Border with Outline Alerts"),i(),t(611,"div",7)(612,"div",8)(613,"label",56),e(614,"Show Code"),i(),t(615,"input",57),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(616,"div",11)(617,"p",12),e(618,"Use the "),t(619,"code"),e(620,"alert-top-border"),i(),e(621," class to set an alert with the top border and outline."),i(),t(622,"div",13)(623,"div",2)(624,"div",14)(625,"div",37),U(626,yn,8,8,"div",null,F),i()(),t(628,"div",14)(629,"div",37),U(630,kn,8,7,"div",null,F),i()()()(),t(632,"div",23)(633,"pre",42)(634,"code"),e(635,`<!-- Primary Alert -->
<div class="alert alert-primary alert-top-border alert-dismissible material-shadow fade show" role="alert">
<i class="ri-user-smile-line me-3 align-middle fs-16 text-primary"></i><strong>Primary</strong> - Top border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(636,`
`),t(637,"code"),e(638,`<!-- Secondary Alert -->
<div class="alert alert-secondary alert-top-border alert-dismissible material-shadow fade show" role="alert">
<i class="ri-check-double-line me-3 align-middle fs-16 text-secondary"></i><strong>Secondary</strong> - Top border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(639,`
`),t(640,"code"),e(641,`<!-- Success Alert -->
<div class="alert alert-success alert-top-border alert-dismissible material-shadow fade show" role="alert">
<i class="ri-notification-off-line me-3 align-middle fs-16 text-success"></i><strong>Success</strong> - Top border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(642,`
`),t(643,"code"),e(644,`<!-- Danger Alert -->
<div class="alert alert-danger alert-top-border alert-dismissible material-shadow fade show" role="alert">
<i class="ri-error-warning-line me-3 align-middle fs-16 text-danger"></i><strong>Danger</strong> - Top border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(645,`
`),t(646,"code"),e(647,`<!-- Warning Alert -->
<div class="alert alert-warning alert-top-border alert-dismissible material-shadow fade show" role="alert">
<i class="ri-alert-line me-3 align-middle fs-16 text-warning"></i><strong>Warning</strong> - Top border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(648,`
`),t(649,"code"),e(650,`<!-- Info Alert -->
<div class="alert alert-info alert-top-border alert-dismissible material-shadow fade show" role="alert">
<i class="ri-airplay-line me-3 align-middle fs-16 text-info"></i><strong>Info</strong> - Top border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(651,`
`),t(652,"code"),e(653,`<!-- Light Alert -->
<div class="alert alert-light alert-top-border alert-dismissible material-shadow fade show" role="alert">
<i class="ri-mail-line me-3 align-middle fs-16 text-body"></i><strong>Light</strong> - Top border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(654,`
`),t(655,"code"),e(656,`<!-- Dark Alert -->
<div class="alert alert-dark alert-top-border alert-dismissible material-shadow fade show mb-0" role="alert">
<i class="ri-refresh-line me-3 align-middle fs-16 text-body"></i><strong>Dark</strong> - Top border alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i()()()()()()(),t(657,"div",2)(658,"div",3)(659,"div",4)(660,"div",5)(661,"h4",6),e(662,"Label Icon Arrow Alerts"),i(),t(663,"div",7)(664,"div",8)(665,"label",58),e(666,"Show Code"),i(),t(667,"input",59),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(668,"div",11)(669,"p",12),e(670,"Use the "),t(671,"code"),e(672,"alert-label-icon label-arrow"),i(),e(673," class to show an alert with label icon and arrow."),i(),t(674,"div",13)(675,"div",2)(676,"div",14)(677,"div",37),U(678,_n,8,7,"div",null,F),i()(),t(680,"div",14)(681,"div",37),U(682,Cn,8,7,"div",null,F),i()()()(),t(684,"div",23)(685,"pre",42)(686,"code"),e(687,`<!-- Primary Alert -->
<div class="alert alert-primary alert-dismissible material-shadow alert-label-icon label-arrow fade show" role="alert">
<i class="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Label icon arrow  alert
<button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
</div>
`),i(),e(688,`
`),t(689,"code"),e(690,`<!-- Secondary Alert -->
<div class="alert alert-secondary alert-dismissible material-shadow alert-label-icon label-arrow fade show" role="alert">
<i class="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon arrow  alert
<button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
</div>
`),i(),e(691,`
`),t(692,"code"),e(693,`<!-- Success Alert -->
<div class="alert alert-success alert-dismissible material-shadow alert-label-icon label-arrow fade show" role="alert">
<i class="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon arrow  alert
<button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
</div>
`),i(),e(694,`
`),t(695,"code"),e(696,`<!-- Danger Alert -->
<div class="alert alert-danger alert-dismissible material-shadow alert-label-icon label-arrow fade show" role="alert">
<i class="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon arrow  alert
<button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
</div>
`),i(),e(697,`
`),t(698,"code"),e(699,`<!-- Warning Alert -->
<div class="alert alert-warning alert-dismissible material-shadow alert-label-icon label-arrow fade show" role="alert">
<i class="ri-alert-line label-icon"></i><strong>Warning</strong> - Label icon arrow  alert
<button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
</div>
`),i(),e(700,`
`),t(701,"code"),e(702,`<!-- Info Alert -->
<div class="alert alert-info alert-dismissible material-shadow alert-label-icon label-arrow fade show" role="alert">
<i class="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon arrow  alert
<button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
</div>
`),i(),e(703,`
`),t(704,"code"),e(705,`<!-- Light Alert -->
<div class="alert alert-light alert-dismissible material-shadow alert-label-icon label-arrow fade show" role="alert">
<i class="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon arrow  alert
<button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
</div>
`),i(),e(706,`
`),t(707,"code"),e(708,`<!-- Dark Alert -->
<div class="alert alert-dark alert-dismissible material-shadow alert-label-icon label-arrow fade show mb-0" role="alert">
<i class="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon arrow  alert
<button type="button" class="btn-close" data-bs-dismiss=" alert" aria-label="Close"></button>
</div>
`),i()()()()()()(),t(709,"div",2)(710,"div",3)(711,"div",4)(712,"div",5)(713,"h4",6),e(714,"Rounded Label Icon Alerts"),i(),t(715,"div",7)(716,"div",8)(717,"label",60),e(718,"Show Code"),i(),t(719,"input",61),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(720,"div",11)(721,"p",12),e(722,"Use the "),t(723,"code"),e(724,"alert-label-icon rounded-label"),i(),e(725," class to set an alert with a rounded label icon."),i(),t(726,"div",13)(727,"div",2)(728,"div",14)(729,"div",37),U(730,Tn,8,7,"div",null,F),i()(),t(732,"div",14)(733,"div",37),U(734,An,8,7,"div",null,F),i()()()(),t(736,"div",23)(737,"pre",42)(738,"code"),e(739,`<!-- Primary Alert -->
<div class="alert alert-primary alert-dismissible material-shadow alert-label-icon rounded-label fade show" role="alert">
<i class="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Rounded label alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(740,`
`),t(741,"code"),e(742,`<!-- Secondary Alert -->
<div class="alert alert-secondary alert-dismissible material-shadow alert-label-icon rounded-label fade show" role="alert">
<i class="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Rounded label alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(743,`
`),t(744,"code"),e(745,`<!-- Success Alert -->
<div class="alert alert-success alert-dismissible material-shadow alert-label-icon rounded-label fade show" role="alert">
<i class="ri-notification-off-line label-icon"></i><strong>Success</strong> - Rounded label alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(746,`
`),t(747,"code"),e(748,`<!-- Danger Alert -->
<div class="alert alert-danger alert-dismissible material-shadow alert-label-icon rounded-label fade show" role="alert">
<i class="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Rounded label alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(749,`
`),t(750,"code"),e(751,`<!-- Warning Alert -->
<div class="alert alert-warning alert-dismissible material-shadow alert-label-icon rounded-label fade show" role="alert">
<i class="ri-alert-line label-icon"></i><strong>Warning</strong> - Rounded label alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(752,`
`),t(753,"code"),e(754,`<!-- Info Alert -->
<div class="alert alert-info alert-dismissible material-shadow alert-label-icon rounded-label fade show" role="alert">
<i class="ri-airplay-line label-icon"></i><strong>Info</strong> - Rounded label alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(755,`
`),t(756,"code"),e(757,`<!-- Light Alert -->
<div class="alert alert-light alert-dismissible material-shadow alert-label-icon rounded-label fade show" role="alert">
<i class="ri-mail-line label-icon"></i><strong>Light</strong> - Rounded label alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i(),e(758,`
`),t(759,"code"),e(760,`<!-- Dark Alert -->
<div class="alert alert-dark alert-dismissible material-shadow alert-label-icon rounded-label fade show" role="alert">
<i class="ri-refresh-line label-icon"></i><strong>Dark</strong> - Rounded label alert
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`),i()()()()()()(),t(761,"div",2)(762,"div",3)(763,"div",4)(764,"div",5)(765,"h4",6),e(766,"Solid Alerts"),i(),t(767,"div",7)(768,"div",8)(769,"label",62),e(770,"Show Code"),i(),t(771,"input",63),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(772,"div",11)(773,"p",12),e(774,"Use the "),t(775,"code"),e(776,"bg-*, border-* & text-white "),i(),e(777," class to set an alert with solid style. "),i(),t(778,"div",13)(779,"div",2)(780,"div",14)(781,"h6"),e(782,"Primary Solid Alert"),i(),t(783,"ngb-alert",64)(784,"strong"),e(785,"Hi!"),i(),e(786," - Solid "),t(787,"b"),e(788,"primary alert"),i(),e(789," example "),i(),t(790,"h6"),e(791,"Secondary Solid Alert"),i(),t(792,"ngb-alert",65)(793,"strong"),e(794,"How are you!"),i(),e(795," - Solid "),t(796,"b"),e(797,"secondary alert"),i(),e(798," example "),i(),t(799,"h6"),e(800,"Success Solid Alert"),i(),t(801,"ngb-alert",66)(802,"strong"),e(803,"Yey! Everything worked! "),i(),e(804," - Solid "),t(805,"b"),e(806,"success alert"),i(),e(807," example "),i(),t(808,"h6"),e(809,"Danger Solid Alert"),i(),t(810,"ngb-alert",67)(811,"strong"),e(812,"Something is very wrong!"),i(),e(813," - Solid "),t(814,"b"),e(815,"danger alert"),i(),e(816," example "),i()(),t(817,"div",14)(818,"h6"),e(819,"Warning Solid Alert"),i(),t(820,"ngb-alert",68)(821,"strong"),e(822,"Uh oh, something went wrong!"),i(),e(823," - Solid "),t(824,"b"),e(825,"warning alert"),i(),e(826," example "),i(),t(827,"h6"),e(828,"Info Solid Alert"),i(),t(829,"ngb-alert",69)(830,"strong"),e(831,"Don't forget' it !"),i(),e(832," - Solid "),t(833,"b"),e(834,"info alert"),i(),e(835," example "),i(),t(836,"h6"),e(837,"Light Solid Alert"),i(),t(838,"ngb-alert",70)(839,"strong"),e(840,"Mind Your Step!"),i(),e(841," - Solid "),t(842,"b"),e(843,"light alert"),i(),e(844," example "),i(),t(845,"h6"),e(846,"Dark Solid Alert"),i(),t(847,"ngb-alert",71)(848,"strong"),e(849,"Did you know?"),i(),e(850," - Solid "),t(851,"b"),e(852,"dark alert"),i(),e(853," example "),i()()()(),t(854,"div",23)(855,"pre",42)(856,"code"),e(857,`<!-- Primary Alert -->
<div class="alert alert-primary bg-primary, border-primary material-shadow & text-white" role="alert">
<strong>Hi!</strong> - Solid <b>primary alert</b> example
</div>
`),i(),e(858,`
`),t(859,"code"),e(860,`<!-- Secondary Alert -->
<div class="alert alert-secondary bg-secondary material-shadow, border-secondary" role="alert">
<strong>How are you!</strong> - Solid <b>secondary alert</b> example
</div>
`),i(),e(861,`
`),t(862,"code"),e(863,`<!-- Success Alert -->
<div class="alert alert-success bg-success material-shadow, border-success" role="alert">
<strong>Yey! Everything worked!</strong> - Solid <b>success alert</b> example
</div>
`),i(),e(864,`
`),t(865,"code"),e(866,`<!-- Danger Alert -->
<div class="alert alert-danger bg-danger, border-danger" role="alert">
<strong>Something is very wrong!</strong> - Solid <b>danger alert</b> example
</div>
`),i(),e(867,`
`),t(868,"code"),e(869,`<!-- Warning Alert -->
<div class="alert alert-warning alert-solid" role="alert">
<strong>Uh oh, something went w rong!</strong> - Solid <b>warning alert</b> example
</div>
`),i(),e(870,`
`),t(871,"code"),e(872,`<!-- Info Alert -->
<div class="alert alert-info alert-solid" role="alert">
<strong>Don't forget' it !</strong> - Solid <b>info alert</b> example
</div>
`),i(),e(873,`
`),t(874,"code"),e(875,`<!-- Light Alert -->
<div class="alert alert bg-light border-light text-body" role="alert">
<strong>Mind Your Step!</strong> - Solid <b>light alert</b> example
</div>
`),i(),e(876,`
`),t(877,"code"),e(878,`<!-- Dark Alert -->
<div class="alert alert-dark alert-solid mb-0" role="alert">
<strong>Did you know?</strong> - Solid <b>dark alert</b> example
</div>
`),i()()()()()()()),s&2&&(p("breadcrumbItems",a.breadCrumbItems),m(23),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(10),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(54),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(7),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(53),z(a.defaultData),m(4),z(a.dismissingData),m(49),p("dismissible",!1),m(7),p("dismissible",!1),m(7),p("dismissible",!1),m(7),p("dismissible",!1),m(8),p("dismissible",!1),m(7),p("dismissible",!1),m(7),p("dismissible",!1),m(7),p("dismissible",!1),m(43),X(a.successMessage?401:-1),m(29),z(a.defaultData),m(4),z(a.dismissingData),m(45),z(a.defaultData),m(4),z(a.dismissingData),m(48),z(a.defaultData),m(4),z(a.dismissingData),m(51),z(a.defaultData),m(4),z(a.dismissingData),m(36),z(a.defaultData),m(4),z(a.dismissingData),m(48),z(a.defaultData),m(4),z(a.defaultData),m(48),z(a.defaultData),m(4),z(a.dismissingData),m(49),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(10),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1),m(9),p("dismissible",!1))},dependencies:[D,ri],encapsulation:2})}}return l})();var yi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Badges",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-badges"]],standalone:!1,decls:694,vars:1,consts:[["title","Badges",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","default",1,"form-label","text-muted"],["type","checkbox","id","default",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"d-flex","flex-wrap","gap-2"],[1,"badge","bg-primary"],[1,"badge","bg-secondary"],[1,"badge","bg-success"],[1,"badge","bg-info"],[1,"badge","bg-warning"],[1,"badge","bg-danger"],[1,"badge","bg-body"],[1,"badge","bg-light","text-body"],[1,"d-none","code-view"],[1,"language-markup",2,"height","200px"],["for","soft-badges",1,"form-label","text-muted"],["type","checkbox","id","soft-badges",1,"form-check-input","code-switcher",3,"click"],[1,"badge","bg-primary-subtle","text-primary"],[1,"badge","bg-secondary-subtle","text-secondary"],[1,"badge","bg-success-subtle","text-success"],[1,"badge","bg-info-subtle","text-info"],[1,"badge","bg-warning-subtle","text-warning"],[1,"badge","bg-danger-subtle","text-danger"],[1,"badge","bg-body-subtle","text-body"],[1,"badge","bg-light-subtle","text-body","text-body"],["for","outline-badges",1,"form-label","text-muted"],["type","checkbox","id","outline-badges",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0);",1,"badge","border","border-primary","text-primary"],[1,"badge","border","border-secondary","text-secondary"],[1,"badge","border","border-success","text-success"],[1,"badge","border","border-info","text-info"],[1,"badge","border","border-warning","text-warning"],[1,"badge","border","border-danger","text-danger"],[1,"badge","border","border-dark","text-body"],[1,"badge","border","border-light","text-body","text-body"],["for","pill-badges",1,"form-label","text-muted"],["type","checkbox","id","pill-badges",1,"form-check-input","code-switcher",3,"click"],[1,"badge","rounded-pill","text-bg-primary"],[1,"badge","rounded-pill","text-bg-secondary"],[1,"badge","rounded-pill","text-bg-success"],[1,"badge","rounded-pill","text-bg-info"],[1,"badge","rounded-pill","text-bg-warning"],[1,"badge","rounded-pill","text-bg-danger"],[1,"badge","rounded-pill","text-bg-body"],[1,"badge","rounded-pill","text-bg-light","text-body"],["for","rounded-pill-badges",1,"form-label","text-muted"],["type","checkbox","id","rounded-pill-badges",1,"form-check-input","code-switcher",3,"click"],[1,"badge","rounded-pill","bg-primary-subtle","text-primary"],[1,"badge","rounded-pill","bg-secondary-subtle","text-secondary"],[1,"badge","rounded-pill","bg-success-subtle","text-success"],[1,"badge","rounded-pill","bg-info-subtle","text-info"],[1,"badge","rounded-pill","bg-warning-subtle","text-warning"],[1,"badge","rounded-pill","bg-danger-subtle","text-danger"],[1,"badge","rounded-pill","bg-body-subtle","text-body"],[1,"badge","rounded-pill","bg-light-subtle","text-body","text-body"],["for","badges-soft-border",1,"form-label","text-muted"],["type","checkbox","id","badges-soft-border",1,"form-check-input","code-switcher",3,"click"],[1,"badge","bg-primary-subtle","text-primary","badge-border"],[1,"badge","bg-secondary-subtle","text-secondary","badge-border"],[1,"badge","bg-success-subtle","text-success","badge-border"],[1,"badge","bg-danger-subtle","text-danger","badge-border"],[1,"badge","bg-warning-subtle","text-warning","badge-border"],[1,"badge","bg-info-subtle","text-info","badge-border"],[1,"badge","bg-body-subtle","text-body","badge-border"],[1,"badge","bg-light-subtle","text-body","badge-border","text-body"],["for","outline-pill-badges",1,"form-label","text-muted"],["type","checkbox","id","outline-pill-badges",1,"form-check-input","code-switcher",3,"click"],[1,"badge","rounded-pill","border","border-primary","text-primary"],[1,"badge","rounded-pill","border","border-secondary","text-secondary"],[1,"badge","rounded-pill","border","border-success","text-success"],[1,"badge","rounded-pill","border","border-info","text-info"],[1,"badge","rounded-pill","border","border-warning","text-warning"],[1,"badge","rounded-pill","border","border-danger","text-danger"],[1,"badge","rounded-pill","border","border-dark","text-body"],[1,"badge","rounded-pill","border","border-light","text-body","text-body"],["for","badges-label",1,"form-label","text-muted"],["type","checkbox","id","badges-label",1,"form-check-input","code-switcher",3,"click"],[1,"badge","badge-label","bg-primary"],[1,"mdi","mdi-circle-medium"],[1,"badge","badge-label","bg-secondary"],[1,"badge","badge-label","bg-success"],[1,"badge","badge-label","bg-danger"],[1,"badge","badge-label","bg-warning"],[1,"badge","badge-label","bg-info"],[1,"badge","badge-label","bg-body"],[1,"badge","badge-label","bg-light","text-body"],[1,"col-xxl-12"],["for","badges-gradient",1,"form-label","text-muted"],["type","checkbox","id","badges-gradient",1,"form-check-input","code-switcher",3,"click"],[1,"badge","badge-gradient-primary"],[1,"badge","badge-gradient-secondary"],[1,"badge","badge-gradient-success"],[1,"badge","badge-gradient-danger"],[1,"badge","badge-gradient-warning"],[1,"badge","badge-gradient-info"],[1,"badge","badge-gradient-dark"],["for","button-position-badges",1,"form-label","text-muted"],["type","checkbox","id","button-position-badges",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","flex-wrap","gap-3"],["type","button",1,"btn","btn-primary","position-relative"],[1,"position-absolute","top-0","start-100","translate-middle","badge","rounded-pill","bg-success"],[1,"visually-hidden"],["type","button",1,"btn","btn-light","position-relative"],[1,"position-absolute","top-0","start-100","translate-middle","badge","border","border-light","rounded-circle","bg-danger","p-1"],["type","button",1,"btn","btn-primary","position-relative","p-0","avatar-xs","rounded"],[1,"avatar-title","bg-transparent"],[1,"bx","bxs-envelope"],["type","button",1,"btn","btn-light","position-relative","p-0","avatar-xs","rounded-circle"],[1,"avatar-title","bg-transparent","text-reset"],[1,"bx","bxs-bell"],[1,"bx","bx-menu"],[1,"position-absolute","top-0","start-100","translate-middle","badge","border","border-light","rounded-circle","bg-success","p-1"],["for","button-badge",1,"form-label","text-muted"],["type","checkbox","id","button-badge",1,"form-check-input","code-switcher",3,"click"],["type","button",1,"btn","btn-primary"],[1,"badge","bg-success","ms-1"],["type","button",1,"btn","btn-success"],[1,"badge","bg-danger","ms-1"],["type","button",1,"btn","btn-outline-secondary"],[1,"language-markup"],["for","heading-badges",1,"form-label","text-muted"],["type","checkbox","id","heading-badges",1,"form-check-input","code-switcher",3,"click"],[1,"badge","text-bg-secondary"],[1,"mb-0"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Default Badges"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"Use the "),t(15,"code"),e(16,"badge"),i(),e(17," class to set a default badge."),i(),t(18,"div",12)(19,"div",13)(20,"span",14),e(21,"Primary"),i(),t(22,"span",15),e(23,"Secondary"),i(),t(24,"span",16),e(25,"Success"),i(),t(26,"span",17),e(27,"Info"),i(),t(28,"span",18),e(29,"Warning"),i(),t(30,"span",19),e(31,"Danger"),i(),t(32,"span",20),e(33,"Dark"),i(),t(34,"span",21),e(35,"Light"),i()()(),t(36,"div",22)(37,"pre",23)(38,"code"),e(39,'<span class="badge bg-primary">Primary</span>'),i(),e(40,`

`),t(41,"code"),e(42,'<span class="badge bg-secondary">Secondary</span>'),i(),e(43,`

`),t(44,"code"),e(45,'<span class="badge bg-success">Success</span>'),i(),e(46,`

`),t(47,"code"),e(48,'<span class="badge bg-info">Info</span>'),i(),e(49,`

`),t(50,"code"),e(51,'<span class="badge bg-warning">Warning</span>'),i(),e(52,`

`),t(53,"code"),e(54,'<span class="badge bg-danger">Danger</span>'),i(),e(55,`

`),t(56,"code"),e(57,'<span class="badge bg-body">Dark</span>'),i(),e(58,`

`),t(59,"code"),e(60,'<span class="badge bg-light">Light</span>'),i()()()()()(),t(61,"div",2)(62,"div",3)(63,"div",4)(64,"h4",5),e(65,"Soft Badges "),i(),t(66,"div",6)(67,"div",7)(68,"label",24),e(69,"Show Code"),i(),t(70,"input",25),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(71,"div",10)(72,"p",11),e(73,"Use the "),t(74,"code"),e(75,"badge-soft-"),i(),e(76," class with the below-mentioned variation to create a softer badge. "),i(),t(77,"div",12)(78,"div",13)(79,"span",26),e(80,"Primary"),i(),t(81,"span",27),e(82,"Secondary"),i(),t(83,"span",28),e(84,"Success"),i(),t(85,"span",29),e(86,"Info"),i(),t(87,"span",30),e(88,"Warning"),i(),t(89,"span",31),e(90,"Danger"),i(),t(91,"span",32),e(92,"Dark"),i(),t(93,"span",33),e(94,"Light"),i()()(),t(95,"div",22)(96,"pre",23)(97,"code"),e(98,'<span class="badge bg-primary-subtle text-primary">Primary</span>'),i(),e(99,`

`),t(100,"code"),e(101,'<span class="badge bg-secondary-subtle text-secondary">Secondary</span>'),i(),e(102,`

`),t(103,"code"),e(104,'<span class="badge bg-success-subtle text-success">Success</span>'),i(),e(105,`

`),t(106,"code"),e(107,'<span class="badge bg-info-subtle text-info">Info</span>'),i(),e(108,`

`),t(109,"code"),e(110,'<span class="badge bg-warning-subtle text-warning">Warning</span>'),i(),e(111,`

`),t(112,"code"),e(113,'<span class="badge bg-danger-subtle text-danger">Danger</span>'),i(),e(114,`

`),t(115,"code"),e(116,'<span class="badge bg-body-subtle text-body">Dark</span>'),i(),e(117,`

`),t(118,"code"),e(119,'<span class="badge bg-light-subtle text-body">Light</span>'),i()()()()()()(),t(120,"div",1)(121,"div",2)(122,"div",3)(123,"div",4)(124,"h4",5),e(125,"Outline Badges "),i(),t(126,"div",6)(127,"div",7)(128,"label",34),e(129,"Show Code"),i(),t(130,"input",35),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(131,"div",10)(132,"p",11),e(133,"Use the "),t(134,"code"),e(135,"badge-outline-"),i(),e(136," class with the below-mentioned variation to create a badge with the outline. "),i(),t(137,"div",12)(138,"div",13)(139,"a",36),e(140,"Primary"),i(),t(141,"span",37),e(142,"Secondary"),i(),t(143,"span",38),e(144,"Success"),i(),t(145,"span",39),e(146,"Info"),i(),t(147,"span",40),e(148,"Warning"),i(),t(149,"span",41),e(150,"Danger"),i(),t(151,"span",42),e(152,"Dark"),i(),t(153,"span",43),e(154,"Light"),i()()(),t(155,"div",22)(156,"pre",23)(157,"code"),e(158,'<span class="badge border border-primary text-primary">Primary</span>'),i(),e(159,`

`),t(160,"code"),e(161,'<span class="badge border border-secondary text-secondary">Secondary</span>'),i(),e(162,`

`),t(163,"code"),e(164,'<span class="badge border border-success text-success">Success</span>'),i(),e(165,`

`),t(166,"code"),e(167,'<span class="badge border border-info text-info">Info</span>'),i(),e(168,`

`),t(169,"code"),e(170,'<span class="badge border border-warning text-warning">Warning</span>'),i(),e(171,`

`),t(172,"code"),e(173,'<span class="badge border border-danger text-danger">Danger</span>'),i(),e(174,`

`),t(175,"code"),e(176,'<span class="badge border border-dark text-body">Dark</span>'),i(),e(177,`

`),t(178,"code"),e(179,'<span class="badge border border-light text-body">Light</span>'),i()()()()()(),t(180,"div",2)(181,"div",3)(182,"div",4)(183,"h4",5),e(184,"Rounded Pill Badges "),i(),t(185,"div",6)(186,"div",7)(187,"label",44),e(188,"Show Code"),i(),t(189,"input",45),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(190,"div",10)(191,"p",11),e(192,"Use the "),t(193,"code"),e(194,"rounded-pill"),i(),e(195," class to make badges more rounded with a larger border-radius."),i(),t(196,"div",12)(197,"div",13)(198,"span",46),e(199,"Primary"),i(),t(200,"span",47),e(201,"Secondary"),i(),t(202,"span",48),e(203,"Success"),i(),t(204,"span",49),e(205,"Info"),i(),t(206,"span",50),e(207,"Warning"),i(),t(208,"span",51),e(209,"Danger"),i(),t(210,"span",52),e(211,"Dark"),i(),t(212,"span",53),e(213,"Light"),i()()(),t(214,"div",22)(215,"pre",23)(216,"code"),e(217,'<span class="badge rounded-pill text-bg-primary">Primary</span>'),i(),e(218,`

`),t(219,"code"),e(220,'<span class="badge rounded-pill text-bg-secondary">Secondary</span>'),i(),e(221,`

`),t(222,"code"),e(223,'<span class="badge rounded-pill text-bg-success">Success</span>'),i(),e(224,`

`),t(225,"code"),e(226,'<span class="badge rounded-pill text-bg-info">Info</span>'),i(),e(227,`

`),t(228,"code"),e(229,'<span class="badge rounded-pill text-bg-warning">Warning</span>'),i(),e(230,`

`),t(231,"code"),e(232,'<span class="badge rounded-pill text-bg-danger">Danger</span>'),i(),e(233,`

`),t(234,"code"),e(235,'<span class="badge rounded-pill text-bg-body">Dark</span>'),i(),e(236,`

`),t(237,"code"),e(238,'<span class="badge rounded-pill text-bg-light">Light</span>'),i()()()()()()(),t(239,"div",1)(240,"div",2)(241,"div",3)(242,"div",4)(243,"h4",5),e(244,"Rounded Pill Badges with soft effect "),i(),t(245,"div",6)(246,"div",7)(247,"label",54),e(248,"Show Code"),i(),t(249,"input",55),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(250,"div",10)(251,"p",11),e(252,"Use the "),t(253,"code"),e(254,"rounded-pill badge-soft-"),i(),e(255," class with the below-mentioned variation to create a badge more rounded with a soft background."),i(),t(256,"div",12)(257,"div",13)(258,"span",56),e(259,"Primary"),i(),t(260,"span",57),e(261,"Secondary"),i(),t(262,"span",58),e(263,"Success"),i(),t(264,"span",59),e(265,"Info"),i(),t(266,"span",60),e(267,"Warning"),i(),t(268,"span",61),e(269,"Danger"),i(),t(270,"span",62),e(271,"Dark"),i(),t(272,"span",63),e(273,"Light"),i()()(),t(274,"div",22)(275,"pre",23)(276,"code"),e(277,'<span class="badge rounded-pill bg-primary-subtle text-primary">Primary</span>'),i(),e(278,`

`),t(279,"code"),e(280,'<span class="badge rounded-pill bg-secondary-subtle text-secondary">Secondary</span>'),i(),e(281,`

`),t(282,"code"),e(283,'<span class="badge rounded-pill bg-success-subtle text-success">Success</span>'),i(),e(284,`

`),t(285,"code"),e(286,'<span class="badge rounded-pill bg-info-subtle text-info">Info</span>'),i(),e(287,`

`),t(288,"code"),e(289,'<span class="badge rounded-pill bg-warning-subtle text-warning">Warning</span>'),i(),e(290,`

`),t(291,"code"),e(292,'<span class="badge rounded-pill bg-danger-subtle text-danger">Danger</span>'),i(),e(293,`

`),t(294,"code"),e(295,'<span class="badge rounded-pill bg-body-subtle text-body">Dark</span>'),i(),e(296,`

`),t(297,"code"),e(298,'<span class="badge rounded-pill bg-light-subtle text-body">Light</span>'),i()()()()()(),t(299,"div",2)(300,"div",3)(301,"div",4)(302,"h4",5),e(303,"Soft Border Badges"),i(),t(304,"div",6)(305,"div",7)(306,"label",64),e(307,"Show Code"),i(),t(308,"input",65),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(309,"div",10)(310,"p",11),e(311," Use the "),t(312,"code"),e(313,"badge-border"),i(),e(314," and "),t(315,"code"),e(316,"badge-soft-"),i(),e(317," with below mentioned modifier classes to make badges with border & soft backgorund. "),i(),t(318,"div",12)(319,"div",13)(320,"span",66),e(321,"Primary"),i(),t(322,"span",67),e(323,"Secondary"),i(),t(324,"span",68),e(325,"Success"),i(),t(326,"span",69),e(327,"Danger"),i(),t(328,"span",70),e(329,"Warning"),i(),t(330,"span",71),e(331,"Info"),i(),t(332,"span",72),e(333,"Dark"),i(),t(334,"span",73),e(335,"Light"),i()()(),t(336,"div",22)(337,"pre",23)(338,"code"),e(339,'<span class="badge bg-primary-subtle text-primary badge-border">Primary</span>'),i(),e(340,`

`),t(341,"code"),e(342,'<span class="badge bg-secondary-subtle text-secondary badge-border">Secondary</span>'),i(),e(343,`

`),t(344,"code"),e(345,'<span class="badge bg-success-subtle text-success badge-border">Success</span>'),i(),e(346,`

`),t(347,"code"),e(348,'<span class="badge bg-info-subtle text-info badge-border">Info</span>'),i(),e(349,`

`),t(350,"code"),e(351,'<span class="badge bg-warning-subtle text-warning badge-border">Warning</span>'),i(),e(352,`

`),t(353,"code"),e(354,'<span class="badge bg-danger-subtle text-danger badge-border">Danger</span>'),i(),e(355,`

`),t(356,"code"),e(357,'<span class="badge bg-body-subtle text-body badge-border">Dark</span>'),i(),e(358,`

`),t(359,"code"),e(360,'<span class="badge bg-light-subtle text-body badge-border">Light</span>'),i()()()()()()(),t(361,"div",1)(362,"div",2)(363,"div",3)(364,"div",4)(365,"h4",5),e(366,"Outline Pill Badges "),i(),t(367,"div",6)(368,"div",7)(369,"label",74),e(370,"Show Code"),i(),t(371,"input",75),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(372,"div",10)(373,"p",11),e(374," Use the "),t(375,"code"),e(376,"rounded-pill badge-outline-"),i(),e(377," class with the below-mentioned variation to create a outline Pill badge. "),i(),t(378,"div",12)(379,"div",13)(380,"span",76),e(381,"Primary"),i(),t(382,"span",77),e(383,"Secondary"),i(),t(384,"span",78),e(385,"Success"),i(),t(386,"span",79),e(387,"Info"),i(),t(388,"span",80),e(389,"Warning"),i(),t(390,"span",81),e(391,"Danger"),i(),t(392,"span",82),e(393,"Dark"),i(),t(394,"span",83),e(395,"Light"),i()()(),t(396,"div",22)(397,"pre",23)(398,"code"),e(399,'<span class="badge rounded-pill border border-primary text-primary">Primary</span>'),i(),e(400,`

`),t(401,"code"),e(402,'<span class="badge rounded-pill border border-secondary text-secondary">Secondary</span>'),i(),e(403,`

`),t(404,"code"),e(405,'<span class="badge rounded-pill border border-success text-success">Success</span>'),i(),e(406,`

`),t(407,"code"),e(408,'<span class="badge rounded-pill border border-info text-info">Info</span>'),i(),e(409,`

`),t(410,"code"),e(411,'<span class="badge rounded-pill border border-warning text-warning">Warning</span>'),i(),e(412,`

`),t(413,"code"),e(414,'<span class="badge rounded-pill border border-danger text-danger">Danger</span>'),i(),e(415,`

`),t(416,"code"),e(417,'<span class="badge rounded-pill border border-dark text-body">Dark</span>'),i(),e(418,`

`),t(419,"code"),e(420,'<span class="badge rounded-pill border border-light text-body">Light</span>'),i()()()()()(),t(421,"div",2)(422,"div",3)(423,"div",4)(424,"h4",5),e(425,"Label Badges "),i(),t(426,"div",6)(427,"div",7)(428,"label",84),e(429,"Show Code"),i(),t(430,"input",85),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(431,"div",10)(432,"p",11),e(433," Use the "),t(434,"code"),e(435,"badge-label"),i(),e(436," class to create a badge with the label. "),i(),t(437,"div",12)(438,"div",13)(439,"span",86),n(440,"i",87),e(441," Primary"),i(),t(442,"span",88),n(443,"i",87),e(444," Secondary"),i(),t(445,"span",89),n(446,"i",87),e(447," Success"),i(),t(448,"span",90),n(449,"i",87),e(450," Danger"),i(),t(451,"span",91),n(452,"i",87),e(453," Warning"),i(),t(454,"span",92),n(455,"i",87),e(456," Info"),i(),t(457,"span",93),n(458,"i",87),e(459," Dark"),i(),t(460,"span",94),n(461,"i",87),e(462," Light"),i()()(),t(463,"div",22)(464,"pre",23)(465,"code"),e(466,'<span class="badge badge-label bg-primary"><i class="mdi mdi-circle-medium"></i> Primary</span>'),i(),e(467,`

`),t(468,"code"),e(469,'<span class="badge badge-label bg-secondary"><i class="mdi mdi-circle-medium"></i> Secondary</span>'),i(),e(470,`

`),t(471,"code"),e(472,'<span class="badge badge-label bg-success"><i class="mdi mdi-circle-medium"></i> Success</span>'),i(),e(473,`

`),t(474,"code"),e(475,'<span class="badge badge-label bg-danger"><i class="mdi mdi-circle-medium"></i> Danger</span>'),i(),e(476,`

`),t(477,"code"),e(478,'<span class="badge badge-label bg-warning"><i class="mdi mdi-circle-medium"></i> Warning</span>'),i(),e(479,`

`),t(480,"code"),e(481,'<span class="badge badge-label bg-info"><i class="mdi mdi-circle-medium"></i> Info</span>'),i(),e(482,`

`),t(483,"code"),e(484,'<span class="badge badge-label bg-body"><i class="mdi mdi-circle-medium"></i> Dark</span>'),i(),e(485,`\\

`),t(486,"code"),e(487,'<span class="badge badge-label bg-light"><i class="mdi mdi-circle-medium"></i> Light</span>'),i()()()()()()(),t(488,"div",1)(489,"div",95)(490,"div",3)(491,"div",4)(492,"h4",5),e(493,"Gradient Badges"),i(),t(494,"div",6)(495,"div",7)(496,"label",96),e(497,"Show Code"),i(),t(498,"input",97),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(499,"div",10)(500,"p",11),e(501," Use the "),t(502,"code"),e(503,"badge-gradient-*"),i(),e(504," class to create a gradient styled badge. "),i(),t(505,"div",12)(506,"div",13)(507,"span",98),e(508,"Primary"),i(),t(509,"span",99),e(510,"Secondary"),i(),t(511,"span",100),e(512,"Success"),i(),t(513,"span",101),e(514,"Danger"),i(),t(515,"span",102),e(516,"Warning"),i(),t(517,"span",103),e(518,"Info"),i(),t(519,"span",104),e(520,"Dark"),i()()(),t(521,"div",22)(522,"pre",23)(523,"code"),e(524,'<span class="badge badge-gradient-primary">Primary</span>'),i(),e(525,`

`),t(526,"code"),e(527,'<span class="badge badge-gradient-secondary">Secondary</span>'),i(),e(528,`

`),t(529,"code"),e(530,'<span class="badge badge-gradient-success">Success</span>'),i(),e(531,`

`),t(532,"code"),e(533,'<span class="badge badge-gradient-danger">Danger</span>'),i(),e(534,`

`),t(535,"code"),e(536,'<span class="badge badge-gradient-warning">Warning</span>'),i(),e(537,`

`),t(538,"code"),e(539,'<span class="badge badge-gradient-info">Info</span>'),i(),e(540,`

`),t(541,"code"),e(542,'<span class="badge badge-gradient-dark">Dark</span>'),i()()()()()()(),t(543,"div",1)(544,"div",2)(545,"div",3)(546,"div",4)(547,"h4",5),e(548,"Button Position Badges"),i(),t(549,"div",6)(550,"div",7)(551,"label",105),e(552,"Show Code"),i(),t(553,"input",106),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(554,"div",10)(555,"p",11),e(556,"Use the below utilities to modify a badge and position it in the corner of a link or button."),i(),t(557,"div",12)(558,"div",107)(559,"button",108),e(560," Mails "),t(561,"span",109),e(562,"+99 "),t(563,"span",110),e(564,"unread messages"),i()()(),t(565,"button",111),e(566," Alerts "),t(567,"span",112)(568,"span",110),e(569,"unread messages"),i()()(),t(570,"button",113)(571,"span",114),n(572,"i",115),i(),t(573,"span",112)(574,"span",110),e(575,"unread messages"),i()()(),t(576,"button",116)(577,"span",117),n(578,"i",118),i()(),t(579,"button",116)(580,"span",117),n(581,"i",119),i(),t(582,"span",120)(583,"span",110),e(584,"unread messages"),i()()()()(),t(585,"div",22)(586,"pre",23)(587,"code"),e(588,`<button type="button" class="btn btn-primary position-relative">
Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">+99 <span class="visually-hidden">unread messages</span></span>
</button>`),i(),e(589,`

`),t(590,"code"),e(591,`<button type="button" class="btn btn-light position-relative">
Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
</button>`),i(),e(592,`

`),t(593,"code"),e(594,`<button type="button" class="btn btn-primary position-relative p-0 avatar-xs rounded">
<span class="avatar-title bg-transparent">
<i class="bx bxs-envelope"></i>
</span>
<span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
</button>`),i(),e(595,`

`),t(596,"code"),e(597,`<button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle">
<span class="avatar-title bg-transparent text-reset">
<i class="bx bxs-bell"></i>
</span>
</button>`),i(),e(598,`

`),t(599,"code"),e(600,`<button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle">
<span class="avatar-title bg-transparent text-reset">
<i class="bx bx-menu"></i>
</span>
<span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
</button>`),i()()()()(),t(601,"div",3)(602,"div",4)(603,"h4",5),e(604,"Badges With Button"),i(),t(605,"div",6)(606,"div",7)(607,"label",121),e(608,"Show Code"),i(),t(609,"input",122),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(610,"div",10)(611,"p",11),e(612,"Badges can be used as part of buttons to provide a counter."),i(),t(613,"div",12)(614,"div",13)(615,"button",123),e(616," Notifications "),t(617,"span",124),e(618,"4"),i()(),t(619,"button",125),e(620," Messages "),t(621,"span",126),e(622,"2"),i()(),t(623,"button",127),e(624," Draft "),t(625,"span",124),e(626,"2"),i()()()(),t(627,"div",22)(628,"pre",128)(629,"code"),e(630,`<button type="button" class="btn btn-primary">
Notifications <span class="badge bg-success ms-1">4</span>
</button>`),i(),e(631,`

`),t(632,"code"),e(633,`<button type="button" class="btn btn-success">
Messages <span class="badge bg-danger ms-1">2</span>
</button>`),i(),e(634,`

`),t(635,"code"),e(636,`<button type="button" class="btn btn-outline-secondary">
Draft <span class="badge bg-success ms-1">2</span>
</button>
`),i()()()()()(),t(637,"div",2)(638,"div",3)(639,"div",4)(640,"h4",5),e(641,"Badges with Heading"),i(),t(642,"div",6)(643,"div",7)(644,"label",129),e(645,"Show Code"),i(),t(646,"input",130),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(647,"div",10)(648,"p",11),e(649,"Example of the badge used in the HTML Heading."),i(),t(650,"div",12)(651,"h1"),e(652,"Example heading "),t(653,"span",131),e(654,"New"),i()(),t(655,"h2"),e(656,"Example heading "),t(657,"span",131),e(658,"New"),i()(),t(659,"h3"),e(660,"Example heading "),t(661,"span",131),e(662,"New"),i()(),t(663,"h4"),e(664,"Example heading "),t(665,"span",131),e(666,"New"),i()(),t(667,"h5"),e(668,"Example heading "),t(669,"span",131),e(670,"New"),i()(),t(671,"h6",132),e(672,"Example heading "),t(673,"span",131),e(674,"New"),i()()(),t(675,"div",22)(676,"pre",128)(677,"code"),e(678,'<h1>Example heading <span class="badge text-bg-secondary">New</span></h1>'),i(),e(679,`

`),t(680,"code"),e(681,'<h2>Example heading <span class="badge text-bg-secondary">New</span></h2>'),i(),e(682,`

`),t(683,"code"),e(684,'<h3>Example heading <span class="badge text-bg-secondary">New</span></h3>'),i(),e(685,`

`),t(686,"code"),e(687,'<h4>Example heading <span class="badge text-bg-secondary">New</span></h4>'),i(),e(688,`

`),t(689,"code"),e(690,'<h5>Example heading <span class="badge text-bg-secondary">New</span></h5>'),i(),e(691,`

`),t(692,"code"),e(693,'<h6>Example heading <span class="badge text-bg-secondary">New</span></h6>'),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var ki=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Buttons",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-buttons"]],standalone:!1,decls:1407,vars:1,consts:[["title","Buttons",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","default",1,"form-label","text-muted"],["type","checkbox","id","default",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"d-flex","flex-wrap","gap-2"],["type","button",1,"btn","btn-primary","waves-effect","waves-light"],["type","button",1,"btn","btn-secondary","waves-effect","waves-light"],["type","button",1,"btn","btn-success","waves-effect","waves-light"],["type","button",1,"btn","btn-info","waves-effect","waves-light"],["type","button",1,"btn","btn-warning","waves-effect","waves-light"],["type","button",1,"btn","btn-danger","waves-effect","waves-light"],["type","button",1,"btn","btn-dark","waves-effect","waves-light"],["type","button",1,"btn","btn-link","waves-effect"],["type","button",1,"btn","btn-light","waves-effect"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","outline-button",1,"form-label","text-muted"],["type","checkbox","id","outline-button",1,"form-check-input","code-switcher",3,"click"],["type","button",1,"btn","btn-outline-primary","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-outline-secondary","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-outline-success","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-outline-info","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-outline-warning","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-outline-danger","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-outline-dark","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-outline-light","waves-effect","material-shadow-none"],[1,"col-lg-21"],["for","rounded-button",1,"form-label","text-muted"],["type","checkbox","id","rounded-button",1,"form-check-input","code-switcher",3,"click"],["type","button",1,"btn","rounded-pill","btn-primary","waves-effect","waves-light"],["type","button",1,"btn","rounded-pill","btn-secondary","waves-effect"],["type","button",1,"btn","rounded-pill","btn-success","waves-effect","waves-light"],["type","button",1,"btn","rounded-pill","btn-info","waves-effect","waves-light"],["type","button",1,"btn","rounded-pill","btn-warning","waves-effect","waves-light"],["type","button",1,"btn","rounded-pill","btn-danger","waves-effect","waves-light"],["type","button",1,"btn","rounded-pill","btn-dark","waves-effect","waves-light"],["type","button",1,"btn","rounded-pill","btn-light","waves-effect"],["for","soft-button",1,"form-label","text-muted"],["type","checkbox","id","soft-button",1,"form-check-input","code-switcher",3,"click"],["type","button",1,"btn","btn-soft-primary","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-soft-secondary","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-soft-success","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-soft-info","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-soft-warning","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-soft-danger","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-soft-dark","waves-effect","waves-light","material-shadow-none"],["for","ghost-button",1,"form-label","text-muted"],["type","checkbox","id","ghost-button",1,"form-check-input","code-switcher",3,"click"],["type","button",1,"btn","btn-ghost-primary","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-ghost-secondary","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-ghost-success","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-ghost-info","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-ghost-warning","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-ghost-danger","waves-effect","waves-light","material-shadow-none"],["type","button",1,"btn","btn-ghost-dark","waves-effect","waves-light","material-shadow-none"],["for","gradient-button",1,"form-label","text-muted"],["type","checkbox","id","gradient-button",1,"form-check-input","code-switcher",3,"click"],["type","button",1,"btn","btn-primary","bg-gradient","waves-effect","waves-light"],["type","button",1,"btn","btn-secondary","bg-gradient","waves-effect","waves-light"],["type","button",1,"btn","btn-success","bg-gradient","waves-effect","waves-light"],["type","button",1,"btn","btn-info","bg-gradient","waves-effect","waves-light"],["type","button",1,"btn","btn-warning","bg-gradient","waves-effect","waves-light"],["type","button",1,"btn","btn-danger","bg-gradient","waves-effect","waves-light"],["type","button",1,"btn","btn-dark","bg-gradient","waves-effect","waves-light"],["type","button",1,"btn","btn-light","bg-gradient","waves-effect","waves-light"],[1,"language-markup"],["for","animation-button",1,"form-label","text-muted"],["type","checkbox","id","animation-button",1,"form-check-input","code-switcher",3,"click"],["type","button","data-text","Primary",1,"btn","btn-primary","btn-animation","waves-effect","waves-light"],["type","button","data-text","Secondary",1,"btn","btn-secondary","btn-animation","waves-effect","waves-light"],["type","button","data-text","Success",1,"btn","btn-success","btn-animation","waves-effect","waves-light"],["type","button","data-text","Info",1,"btn","btn-info","btn-animation","waves-effect","waves-light"],["type","button","data-text","Warning",1,"btn","btn-warning","btn-animation","waves-effect","waves-light"],["type","button","data-text","Danger",1,"btn","btn-danger","btn-animation","waves-effect","waves-light"],["type","button","data-text","Dark",1,"btn","btn-dark","btn-animation","waves-effect","waves-light"],["for","label-button",1,"form-label","text-muted"],["type","checkbox","id","label-button",1,"form-check-input","code-switcher",3,"click"],[1,"col-lg-4"],[1,"d-flex","flex-wrap","gap-2","mb-3","mb-lg-0"],["href","javascript:void(0);",1,"btn","btn-primary","btn-label"],[1,"d-flex"],[1,"ri-user-smile-line","label-icon","align-middle","fs-16","me-2"],[1,"flex-grow-1"],["type","button",1,"btn","btn-success","btn-label"],[1,"ri-check-double-line","label-icon","align-middle","fs-16","me-2"],["type","button",1,"btn","btn-warning","btn-label"],[1,"ri-error-warning-line","label-icon","align-middle","fs-16","me-2"],["type","button",1,"btn","btn-primary","btn-label","rounded-pill"],[1,"ri-user-smile-line","label-icon","align-middle","rounded-pill","fs-16","me-2"],["type","button",1,"btn","btn-success","btn-label","rounded-pill"],[1,"ri-check-double-line","label-icon","align-middle","rounded-pill","fs-16","me-2"],["type","button",1,"btn","btn-warning","btn-label","rounded-pill"],[1,"ri-error-warning-line","label-icon","align-middle","rounded-pill","fs-16","me-2"],["type","button",1,"btn","btn-primary","btn-label","right"],[1,"ri-user-smile-line","label-icon","align-middle","fs-16","ms-2"],["type","button",1,"btn","btn-success","btn-label","right","rounded-pill"],[1,"ri-check-double-line","label-icon","align-middle","rounded-pill","fs-16","ms-2"],["for","load-button",1,"form-label","text-muted"],["type","checkbox","id","load-button",1,"form-check-input","code-switcher",3,"click"],[1,"col-lg-6"],[1,"hstack","flex-wrap","gap-2","mb-3","mb-lg-0"],[1,"btn","btn-outline-primary","btn-load"],[1,"d-flex","align-items-center"],["role","status",1,"spinner-border","flex-shrink-0"],[1,"visually-hidden"],[1,"flex-grow-1","ms-2"],["type","button",1,"btn","btn-success","btn-load"],["type","button",1,"btn","btn-outline-secondary","btn-load"],["role","status",1,"spinner-grow","flex-shrink-0"],["type","button",1,"btn","btn-danger","btn-load"],[1,"flex-grow-1","me-2"],["type","button",1,"btn","btn-outline-warning","btn-load"],["type","button",1,"btn","btn-info","btn-load"],["for","border-button",1,"form-label","text-muted"],["type","checkbox","id","border-button",1,"form-check-input","code-switcher",3,"click"],[1,"btn","btn-primary","btn-border"],[1,"btn","btn-secondary","btn-border"],[1,"btn","btn-success","btn-border"],[1,"btn","btn-warning","btn-border"],[1,"btn","btn-danger","btn-border"],[1,"btn","btn-outline-primary","btn-border"],[1,"btn","btn-outline-secondary","btn-border"],[1,"btn","btn-outline-success","btn-border"],[1,"btn","btn-soft-warning","btn-border"],[1,"btn","btn-soft-danger","btn-border"],[1,"btn","btn-soft-dark","btn-border"],["for","custom-toggle-button",1,"form-label","text-muted"],["type","checkbox","id","custom-toggle-button",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","flex-wrap","align-items-center","gap-2"],["type","button","data-bs-toggle","button",1,"btn","btn-primary","custom-toggle","active"],[1,"icon-on"],[1,"ri-alarm-line","align-bottom"],[1,"icon-off"],["type","button","data-bs-toggle","button",1,"btn","btn-secondary","custom-toggle","active"],[1,"ri-user-add-line","align-bottom","me-1"],[1,"ri-check-fill","align-bottom","me-1"],["type","button","data-bs-toggle","button",1,"btn","btn-success","custom-toggle"],[1,"ri-thumb-up-line","align-bottom","me-1"],[1,"ri-thumb-down-line","align-bottom","me-1"],["type","button","data-bs-toggle","button",1,"btn","btn-warning","custom-toggle","active"],[1,"ri-add-line","align-bottom","me-1"],[1,"ri-user-unfollow-line","align-bottom","me-1"],["type","button","data-bs-toggle","button",1,"btn","btn-danger","custom-toggle"],["type","button","data-bs-toggle","button",1,"btn","btn-dark","custom-toggle"],[1,"ri-bookmark-line","align-bottom","me-1"],[1,"ri-bookmark-3-fill","align-bottom","me-1"],["type","button","data-bs-toggle","button",1,"btn","btn-outline-primary","custom-toggle"],["type","button","data-bs-toggle","button",1,"btn","btn-outline-secondary","custom-toggle"],["type","button","data-bs-toggle","button",1,"btn","btn-outline-success","custom-toggle","active"],["type","button","data-bs-toggle","button",1,"btn","btn-soft-warning","custom-toggle","active"],["type","button","data-bs-toggle","button",1,"btn","btn-soft-danger","custom-toggle"],["type","button","data-bs-toggle","button",1,"btn","btn-dark","custom-toggle","active"],[1,"ri-bookmark-line","align-bottom"],[1,"ri-bookmark-3-fill","align-bottom"],["for","size-button",1,"form-label","text-muted"],["type","checkbox","id","size-button",1,"form-check-input","code-switcher",3,"click"],["type","button",1,"btn","btn-primary","btn-lg"],["type","button",1,"btn","btn-light","btn-lg"],["type","button",1,"btn","btn-primary","btn-sm"],["type","button",1,"btn","btn-light","btn-sm"],["for","width-button",1,"form-label","text-muted"],["type","checkbox","id","width-button",1,"form-check-input","code-switcher",3,"click"],["type","button",1,"btn","btn-primary","w-xs","waves-effect","waves-light"],["type","button",1,"btn","btn-danger","w-sm","waves-effect","waves-light"],["type","button",1,"btn","btn-warning","w-md","waves-effect","waves-light"],["type","button",1,"btn","btn-success","w-lg","waves-effect","waves-light"],["for","tag-button",1,"form-label","text-muted"],["type","checkbox","id","tag-button",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0);","role","button",1,"btn","btn-primary","waves-effect","waves-light"],["type","submit",1,"btn","btn-success","waves-effect","waves-light"],["type","button","value","Input",1,"btn","btn-info"],["type","submit","value","Submit",1,"btn","btn-danger"],["type","reset","value","Reset",1,"btn","btn-warning"],["for","base-class",1,"form-label","text-muted"],["type","checkbox","id","base-class",1,"form-check-input","code-switcher"],["type","button",1,"btn"],["for","custom-sizing-variables",1,"form-label","text-muted"],["type","checkbox","id","custom-sizing-variables",1,"form-check-input","code-switcher"],["type","button",1,"btn","btn-primary",2,"--tb-btn-padding-y",".25rem","--tb-btn-padding-x",".5rem","--tb-btn-font-size",".75rem"],["for","toggle-button",1,"form-label","text-muted"],["type","checkbox","id","toggle-button",1,"form-check-input","code-switcher",3,"click"],["type","button","data-bs-toggle","button","aria-pressed","false",1,"btn","btn-primary","waves-effect","waves-light"],["for","grid-button",1,"form-label","text-muted"],["type","checkbox","id","grid-button",1,"form-check-input","code-switcher",3,"click"],[1,"d-grid","gap-2"],["type","button",1,"btn","btn-primary"],["for","checkbox-button",1,"form-label","text-muted"],["type","checkbox","id","checkbox-button",1,"form-check-input","code-switcher",3,"click"],["href","https://getbootstrap.com/docs/5.1/forms/checks-radios/"],["role","group","aria-label","Basic checkbox toggle button group",1,"btn-group"],["type","checkbox","id","btncheck1","checked","",1,"btn-check"],["for","btncheck1",1,"btn","btn-primary","material-shadow-none","mb-0"],["type","checkbox","id","btncheck2",1,"btn-check"],["for","btncheck2",1,"btn","btn-primary","material-shadow-none","mb-0"],["type","checkbox","id","btncheck3",1,"btn-check"],["for","btncheck3",1,"btn","btn-primary","material-shadow-none","mb-0"],["role","group","aria-label","Basic radio toggle button group",1,"btn-group"],["type","radio","name","btnradio","id","btnradio1","checked","",1,"btn-check"],["for","btnradio1",1,"btn","btn-outline-secondary","material-shadow-none","mb-0"],["type","radio","name","btnradio","id","btnradio2",1,"btn-check"],["for","btnradio2",1,"btn","btn-outline-secondary","material-shadow-none","mb-0"],["type","radio","name","btnradio","id","btnradio3",1,"btn-check"],["for","btnradio3",1,"btn","btn-outline-secondary","material-shadow-none","mb-0"],["for","group-button",1,"form-label","text-muted"],["type","checkbox","id","group-button",1,"form-check-input","code-switcher",3,"click"],[1,"col-sm-6"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button",1,"btn","btn-primary","material-shadow-none"],["role","group","aria-label","Basic example",1,"btn-group","mt-4","mt-sm-0"],["type","button",1,"btn","btn-light","btn-icon","material-shadow-none"],[1,"ri-align-right"],[1,"ri-align-center"],[1,"ri-align-left"],["for","icon-button",1,"form-label","text-muted"],["type","checkbox","id","icon-button",1,"form-check-input","code-switcher",3,"click"],[1,"hstack","gap-2"],["type","button",1,"btn","btn-primary","btn-icon","waves-effect","waves-light"],[1,"ri-map-pin-line"],["type","button",1,"btn","btn-danger","btn-icon","waves-effect","waves-light"],[1,"ri-delete-bin-5-line"],["type","button",1,"btn","btn-success","btn-icon","waves-effect","waves-light"],[1,"ri-check-double-line"],["type","button",1,"btn","btn-light","btn-icon","waves-effect"],[1,"ri-brush-2-fill"],[1,"hstack","gap-2","mt-4","mt-sm-0"],["type","button",1,"btn","btn-outline-primary","btn-icon","waves-effect","waves-light","material-shadow-none"],[1,"ri-24-hours-fill"],["type","button",1,"btn","btn-outline-danger","btn-icon","waves-effect","waves-light","material-shadow-none"],[1,"ri-customer-service-2-line"],["type","button",1,"btn","btn-outline-success","btn-icon","waves-effect","waves-light","material-shadow-none"],[1,"ri-mail-send-line"],["type","button",1,"btn","btn-outline-warning","btn-icon","waves-effect","waves-light","material-shadow-none"],[1,"ri-menu-2-line"],["for","toolbar-button",1,"form-label","text-muted"],["type","checkbox","id","toolbar-button",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","flex-wrap","gap-3"],["role","toolbar","aria-label","Toolbar with button groups",1,"btn-toolbar","material-shadow"],["role","group","aria-label","First group",1,"btn-group","me-2"],["type","button",1,"btn","btn-light","material-shadow-none"],["role","group","aria-label","Second group",1,"btn-group","material-shadow","me-2"],["role","group","aria-label","Third group",1,"btn-group","material-shadow"],["for","group-size-button",1,"form-label","text-muted"],["type","checkbox","id","group-size-button",1,"form-check-input","code-switcher",3,"click"],["role","group","aria-label","Basic example",1,"btn-group","btn-group-lg","material-shadow"],["role","group","aria-label","Basic example",1,"btn-group","mt-2","material-shadow"],["role","group","aria-label","Basic example",1,"btn-group","btn-group-sm","mt-2","material-shadow"],["type","button",1,"btn","btn-secondary","material-shadow-none"],["for","vertical-variation",1,"form-label","text-muted"],["type","checkbox","id","vertical-variation",1,"form-check-input","code-switcher",3,"click"],[1,"col-auto"],["role","group","aria-label","Button group with nested dropdown",1,"btn-group","material-shadow"],["role","group","ngbDropdown","",1,"btn-group"],["id","btnGroupDrop1","type","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-primary","dropdown-toggle","material-shadow-none","arrow-none"],[1,"mdi","mdi-chevron-down"],["aria-labelledby","btnGroupDrop1","ngbDropdownMenu","",1,"dropdown-menu"],["href","javascript:void(0);",1,"dropdown-item"],["role","group","aria-label","Vertical button group",1,"btn-group-vertical"],["type","button",1,"btn","btn-light"],["role","group","ngbDropdown","",1,"btn-group","material-shadow"],["id","btnGroupVerticalDrop1","type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-light","dropdown-toggle","material-shadow-none"],["aria-labelledby","btnGroupVerticalDrop1","ngbDropdownMenu","",1,"dropdown-menu"],["role","group","aria-label","Vertical radio toggle button group",1,"btn-group-vertical","material-shadow"],["type","radio","name","vbtn","id","vbtn-radio1","checked","",1,"btn-check"],["for","vbtn-radio1",1,"btn","btn-outline-secondary","material-shadow-none"],["type","radio","name","vbtn","id","vbtn-radio2",1,"btn-check"],["for","vbtn-radio2",1,"btn","btn-outline-secondary","material-shadow-none"],["type","radio","name","vbtn","id","vbtn-radio3",1,"btn-check"],["for","vbtn-radio3",1,"btn","btn-outline-secondary","material-shadow-none"],["for","focus-ring",1,"form-label","text-muted"],["type","checkbox","id","focus-ring",1,"form-check-input","code-switcher"],[1,"d-flex","gap-3"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","py-1","px-2","text-decoration-none","border","rounded-2"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","py-1","px-2","text-decoration-none","border","rounded-2",2,"--vz-focus-ring-color","rgba(118, 93, 255, .25)"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","py-1","px-2","text-decoration-none","border","rounded-2",2,"--vz-focus-ring-x","10px","--vz-focus-ring-y","10px","--vz-focus-ring-blur","4px"],["for","focus-ring-utilities",1,"form-label","text-muted"],["type","checkbox","id","focus-ring-utilities",1,"form-check-input","code-switcher"],["href","ui-colors.html"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","focus-ring-primary","py-1","px-2","text-decoration-none","border","rounded-2"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","focus-ring-secondary","py-1","px-2","text-decoration-none","border","rounded-2"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","focus-ring-success","py-1","px-2","text-decoration-none","border","rounded-2"],[1,"mb-lg-0"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","focus-ring-danger","py-1","px-2","text-decoration-none","border","rounded-2"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","focus-ring-warning","py-1","px-2","text-decoration-none","border","rounded-2"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","focus-ring-info","py-1","px-2","text-decoration-none","border","rounded-2"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","focus-ring-light","py-1","px-2","text-decoration-none","border","rounded-2"],[1,"mb-0"],["href","javascript:void(0);",1,"d-inline-flex","focus-ring","focus-ring-dark","py-1","px-2","text-decoration-none","border","rounded-2"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Default Buttons"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"Use the"),t(15,"code"),e(16," btn"),i(),e(17," class to show the default button style."),i(),t(18,"div",12)(19,"div",13)(20,"button",14),e(21,"Primary"),i(),t(22,"button",15),e(23,"Secondary"),i(),t(24,"button",16),e(25,"Success"),i(),t(26,"button",17),e(27,"Info"),i(),t(28,"button",18),e(29,"Warning"),i(),t(30,"button",19),e(31,"Danger"),i(),t(32,"button",20),e(33,"Dark"),i(),t(34,"button",21),e(35,"Link"),i(),t(36,"button",22),e(37,"Light"),i()()(),t(38,"div",23)(39,"pre",24)(40,"code"),e(41,`<!-- Base Buttons -->
<button type="button" class="btn btn-primary waves-effect waves-light">Primary</button>`),i(),e(42,`

`),t(43,"code"),e(44,'<button type="button" class="btn btn-secondary waves-effect waves-light">Secondary</button>'),i(),e(45,`

`),t(46,"code"),e(47,'<button type="button" class="btn btn-success waves-effect waves-light">Success</button>'),i(),e(48,`

`),t(49,"code"),e(50,'<button type="button" class="btn btn-info waves-effect waves-light">Info</button>'),i(),e(51,`

`),t(52,"code"),e(53,'<button type="button" class="btn btn-warning waves-effect waves-light">Warning</button>'),i(),e(54,`

`),t(55,"code"),e(56,'<button type="button" class="btn btn-danger waves-effect waves-light">Danger</button>'),i(),e(57,`

`),t(58,"code"),e(59,'<button type="button" class="btn btn-dark waves-effect waves-light">Dark</button>'),i(),e(60,`

`),t(61,"code"),e(62,'<button type="button" class="btn btn-light waves-effect">Light</button>'),i()()()()()()(),t(63,"div",1)(64,"div",2)(65,"div",3)(66,"div",4)(67,"h4",5),e(68,"Outline Buttons"),i(),t(69,"div",6)(70,"div",7)(71,"label",25),e(72,"Show Code"),i(),t(73,"input",26),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(74,"div",10)(75,"p",11),e(76,"Use "),t(77,"code"),e(78,"btn-outline-"),i(),e(79," class with the below-mentioned variation to create a button with the outline."),i(),t(80,"div",12)(81,"div",13)(82,"button",27),e(83,"Primary"),i(),t(84,"button",28),e(85,"Secondary"),i(),t(86,"button",29),e(87,"Success"),i(),t(88,"button",30),e(89,"Info"),i(),t(90,"button",31),e(91,"Warning"),i(),t(92,"button",32),e(93,"Danger"),i(),t(94,"button",33),e(95,"Dark"),i(),t(96,"button",34),e(97,"Light"),i()()(),t(98,"div",23)(99,"pre",24)(100,"code"),e(101,`<!-- Outline Buttons -->
<button type="button" class="btn btn-primary waves-effect waves-light material-shadow-none">Primary</button>`),i(),e(102,`

`),t(103,"code"),e(104,'<button type="button" class="btn btn-outline-secondary waves-effect waves-light material-shadow-none">Secondary</button>'),i(),e(105,`

`),t(106,"code"),e(107,'<button type="button" class="btn btn-outline-success waves-effect waves-light material-shadow-none">Success</button>'),i(),e(108,`

`),t(109,"code"),e(110,'<button type="button" class="btn btn-outline-info waves-effect waves-light material-shadow-none">Info</button>'),i(),e(111,`

`),t(112,"code"),e(113,'<button type="button" class="btn btn-outline-warning waves-effect waves-light material-shadow-none">Warning</button>'),i(),e(114,`

`),t(115,"code"),e(116,'<button type="button" class="btn btn-outline-danger waves-effect waves-light material-shadow-none">Danger</button>'),i(),e(117,`

`),t(118,"code"),e(119,'<button type="button" class="btn btn-outline-dark waves-effect waves-light material-shadow-none">Dark</button>'),i(),e(120,`

`),t(121,"code"),e(122,'<button type="button" class="btn btn-outline-light waves-effect material-shadow-none">Light</button>'),i()()()()()()(),t(123,"div",1)(124,"div",35)(125,"div",3)(126,"div",4)(127,"h4",5),e(128,"Rounded Buttons"),i(),t(129,"div",6)(130,"div",7)(131,"label",36),e(132,"Show Code"),i(),t(133,"input",37),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(134,"div",10)(135,"p",11),e(136,"Use the "),t(137,"code"),e(138,"rounded-pill "),i(),e(139,"class to make a rounded button."),i(),t(140,"div",12)(141,"div",13)(142,"button",38),e(143,"Primary"),i(),t(144,"button",39),e(145,"Secondary"),i(),t(146,"button",40),e(147,"Success"),i(),t(148,"button",41),e(149,"Info"),i(),t(150,"button",42),e(151,"Warning"),i(),t(152,"button",43),e(153,"Danger"),i(),t(154,"button",44),e(155,"Dark"),i(),t(156,"button",45),e(157,"Light"),i()()(),t(158,"div",23)(159,"pre",24)(160,"code"),e(161,`<!-- Rounded Buttons -->
<button type="button" class="btn rounded-pill btn-primary waves-effect waves-light">Primary</button>`),i(),e(162,`

`),t(163,"code"),e(164,'<button type="button" class="btn rounded-pill btn-secondary waves-effect waves-light">Secondary</button>'),i(),e(165,`

`),t(166,"code"),e(167,'<button type="button" class="btn rounded-pill btn-success waves-effect waves-light">Success</button>'),i(),e(168,`

`),t(169,"code"),e(170,'<button type="button" class="btn rounded-pill btn-info waves-effect waves-light">Info</button>'),i(),e(171,`

`),t(172,"code"),e(173,'<button type="button" class="btn rounded-pill btn-warning waves-effect waves-light">Warning</button>'),i(),e(174,`

`),t(175,"code"),e(176,'<button type="button" class="btn rounded-pill btn-danger waves-effect waves-light">Danger</button>'),i(),e(177,`

`),t(178,"code"),e(179,'<button type="button" class="btn rounded-pill btn-dark waves-effect waves-light">Dark</button>'),i(),e(180,`

`),t(181,"code"),e(182,'<button type="button" class="btn rounded-pill btn-light waves-effect">Light</button>'),i()()()()()()(),t(183,"div",1)(184,"div",2)(185,"div",3)(186,"div",4)(187,"h4",5),e(188,"Soft Buttons"),i(),t(189,"div",6)(190,"div",7)(191,"label",46),e(192,"Show Code"),i(),t(193,"input",47),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(194,"div",10)(195,"p",11),e(196,"Use "),t(197,"code"),e(198,"btn-soft-"),i(),e(199," class with the below-mentioned variation to create a button with the soft background."),i(),t(200,"div",12)(201,"div",13)(202,"button",48),e(203,"Primary"),i(),t(204,"button",49),e(205,"Secondary"),i(),t(206,"button",50),e(207,"Success"),i(),t(208,"button",51),e(209,"Info"),i(),t(210,"button",52),e(211,"Warning"),i(),t(212,"button",53),e(213,"Danger"),i(),t(214,"button",54),e(215,"Dark"),i()()(),t(216,"div",23)(217,"pre",24)(218,"code"),e(219,`<!-- Soft Buttons -->
<button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none">Primary</button>`),i(),e(220,`

`),t(221,"code"),e(222,'<button type="button" class="btn btn-soft-secondary waves-effect material-shadow-none">secondary</button>'),i(),e(223,`

`),t(224,"code"),e(225,'<button type="button" class="btn btn-soft-success waves-effect waves-light material-shadow-none">Success</button>'),i(),e(226,`

`),t(227,"code"),e(228,'<button type="button" class="btn btn-soft-info waves-effect waves-light material-shadow-none">Info</button>'),i(),e(229,`

`),t(230,"code"),e(231,'<button type="button" class="btn btn-soft-warning waves-effect waves-light material-shadow-none">Warning</button>'),i(),e(232,`

`),t(233,"code"),e(234,'<button type="button" class="btn btn-soft-danger waves-effect waves-light material-shadow-none">Danger</button>'),i(),e(235,`

`),t(236,"code"),e(237,'<button type="button" class="btn btn-soft-dark waves-effect waves-light material-shadow-none">Dark</button>'),i()()()()()()(),t(238,"div",1)(239,"div",2)(240,"div",3)(241,"div",4)(242,"h4",5),e(243,"Ghost Buttons"),i(),t(244,"div",6)(245,"div",7)(246,"label",55),e(247,"Show Code"),i(),t(248,"input",56),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(249,"div",10)(250,"p",11),e(251,"Use "),t(252,"code"),e(253,"btn-ghost-"),i(),e(254," class with the below-mentioned variation to create a button with the transparent background."),i(),t(255,"div",12)(256,"div",13)(257,"button",57),e(258,"Primary"),i(),t(259,"button",58),e(260,"Secondary"),i(),t(261,"button",59),e(262,"Success"),i(),t(263,"button",60),e(264,"Info"),i(),t(265,"button",61),e(266,"Warning"),i(),t(267,"button",62),e(268,"Danger"),i(),t(269,"button",63),e(270,"Dark"),i()()(),t(271,"div",23)(272,"pre",24)(273,"code"),e(274,`<!-- ghost Buttons -->
<button type="button" class="btn btn-ghost-primary waves-effect waves-light material-shadow-none">Primary</button>`),i(),e(275,`

`),t(276,"code"),e(277,'<button type="button" class="btn btn-ghost-secondary waves-effect material-shadow-none">secondary</button>'),i(),e(278,`

`),t(279,"code"),e(280,'<button type="button" class="btn btn-ghost-success waves-effect waves-light material-shadow-none">Success</button>'),i(),e(281,`

`),t(282,"code"),e(283,'<button type="button" class="btn btn-ghost-info waves-effect waves-light material-shadow-none">Info</button>'),i(),e(284,`

`),t(285,"code"),e(286,'<button type="button" class="btn btn-ghost-warning waves-effect waves-light material-shadow-none">Warning</button>'),i(),e(287,`

`),t(288,"code"),e(289,'<button type="button" class="btn btn-ghost-danger waves-effect waves-light material-shadow-none">Danger</button>'),i(),e(290,`

`),t(291,"code"),e(292,'<button type="button" class="btn btn-ghost-dark waves-effect waves-light material-shadow-none">Dark</button>'),i()()()()()()(),t(293,"div",1)(294,"div",2)(295,"div",3)(296,"div",4)(297,"h4",5),e(298,"Gradient Buttons"),i(),t(299,"div",6)(300,"div",7)(301,"label",64),e(302,"Show Code"),i(),t(303,"input",65),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(304,"div",10)(305,"p",11),e(306,"Use "),t(307,"code"),e(308,"bg-gradient "),i(),e(309,"class to create a gradient button."),i(),t(310,"div",12)(311,"div",13)(312,"button",66),e(313,"Primary"),i(),t(314,"button",67),e(315,"Secondary"),i(),t(316,"button",68),e(317,"Success"),i(),t(318,"button",69),e(319,"Info"),i(),t(320,"button",70),e(321,"Warning"),i(),t(322,"button",71),e(323,"Danger"),i(),t(324,"button",72),e(325,"Dark"),i(),t(326,"button",73),e(327,"Light"),i()()(),t(328,"div",23)(329,"pre",74)(330,"code"),e(331,`<!-- Gradient Buttons -->
<button type="button" class="btn btn-primary bg-gradient waves-effect waves-light">Primary</button>`),i(),e(332,`

`),t(333,"code"),e(334,'<button type="button" class="btn btn-secondary bg-gradient waves-effect waves-light">Secondary</button>'),i(),e(335,`

`),t(336,"code"),e(337,'<button type="button" class="btn btn-success bg-gradient waves-effect waves-light">Success</button>'),i(),e(338,`

`),t(339,"code"),e(340,'<button type="button" class="btn btn-info bg-gradient waves-effect waves-light">Info</button>'),i(),e(341,`

`),t(342,"code"),e(343,'<button type="button" class="btn btn-warning bg-gradient waves-effect waves-light">Warning</button>'),i(),e(344,`

`),t(345,"code"),e(346,'<button type="button" class="btn btn-danger bg-gradient waves-effect waves-light">Danger</button>'),i(),e(347,`

`),t(348,"code"),e(349,'<button type="button" class="btn btn-dark bg-gradient waves-effect waves-light">Dark</button>'),i(),e(350,`

`),t(351,"code"),e(352,'<button type="button" class="btn btn-light bg-gradient waves-effect waves-light">Light</button>'),i()()()()()()(),t(353,"div",1)(354,"div",2)(355,"div",3)(356,"div",4)(357,"h4",5),e(358,"Animation Buttons"),i(),t(359,"div",6)(360,"div",7)(361,"label",75),e(362,"Show Code"),i(),t(363,"input",76),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(364,"div",10)(365,"p",11),e(366,"Use "),t(367,"code"),e(368,"bg-animation "),i(),e(369,"class to create an animated button."),i(),t(370,"div",12)(371,"div",13)(372,"button",77)(373,"span"),e(374,"Primary"),i()(),t(375,"button",78)(376,"span"),e(377,"Secondary"),i()(),t(378,"button",79)(379,"span"),e(380,"Success"),i()(),t(381,"button",80)(382,"span"),e(383,"Info"),i()(),t(384,"button",81)(385,"span"),e(386,"Warning"),i()(),t(387,"button",82)(388,"span"),e(389,"Danger"),i()(),t(390,"button",83)(391,"span"),e(392,"Dark"),i()()()(),t(393,"div",23)(394,"pre",74)(395,"code"),e(396,`<!-- Animation Buttons -->
<button type="button" class="btn btn-primary btn-animation waves-effect waves-light" data-text="Primary"><span>Primary</span></button>`),i(),e(397,`

`),t(398,"code"),e(399,'<button type="button" class="btn btn-secondary btn-animation waves-effect waves-light" data-text="Secondary"><span>Secondary</span></button>'),i(),e(400,`

`),t(401,"code"),e(402,'<button type="button" class="btn btn-success btn-animation waves-effect waves-light" data-text="Success"><span>Success</span></button>'),i(),e(403,`

`),t(404,"code"),e(405,'<button type="button" class="btn btn-info btn-animation waves-effect waves-light" data-text="Info"><span>Info</span></button>'),i(),e(406,`

`),t(407,"code"),e(408,'<button type="button" class="btn btn-warning btn-animation waves-effect waves-light" data-text="Warning"><span>Warning</span></button>'),i(),e(409,`

`),t(410,"code"),e(411,'<button type="button" class="btn btn-danger btn-animation waves-effect waves-light" data-text="Danger"><span>Danger</span></button>'),i(),e(412,`

`),t(413,"code"),e(414,'<button type="button" class="btn btn-dark btn-animation waves-effect waves-light" data-text="Dark"><span>Dark</span></button>'),i()()()()()()(),t(415,"div",1)(416,"div",2)(417,"div",3)(418,"div",4)(419,"h4",5),e(420,"Buttons with Label"),i(),t(421,"div",6)(422,"div",7)(423,"label",84),e(424,"Show Code"),i(),t(425,"input",85),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(426,"div",10)(427,"p",11),e(428,"Use "),t(429,"code"),e(430,"btn-label "),i(),e(431,"class to create a button with the label."),i(),t(432,"div",12)(433,"div",1)(434,"div",86)(435,"div",87)(436,"a",88)(437,"div",89)(438,"div",6),n(439,"i",90),i(),t(440,"div",91),e(441," Primary "),i()()(),t(442,"button",92),n(443,"i",93),e(444," Success"),i(),t(445,"button",94),n(446,"i",95),e(447," Warning"),i()()(),t(448,"div",86)(449,"div",87)(450,"button",96),n(451,"i",97),e(452," Primary"),i(),t(453,"button",98),n(454,"i",99),e(455," Success"),i(),t(456,"button",100),n(457,"i",101),e(458," Warning"),i()()(),t(459,"div",86)(460,"div",13)(461,"button",102),n(462,"i",103),e(463," Primary"),i(),t(464,"button",104),n(465,"i",105),e(466," Success"),i()()()()(),t(467,"div",23)(468,"pre",24)(469,"code"),e(470,`<!-- Buttons with Label -->
<button type="button" class="btn btn-primary btn-label waves-effect waves-light"><i class="ri-user-smile-line label-icon align-middle fs-16 me-2"></i> Primary</button>`),i(),e(471,`

`),t(472,"code"),e(473,'<button type="button" class="btn btn-success btn-label waves-effect waves-light"><i class="ri-check-double-line label-icon align-middle fs-16 me-2"></i> Success</button>'),i(),e(474,`

`),t(475,"code"),e(476,'<button type="button" class="btn btn-warning btn-label waves-effect waves-light"><i class="ri-error-warning-line label-icon align-middle fs-16 me-2"></i> Warning</button>'),i(),e(477,`

`),t(478,"code"),e(479,`<!-- Rounded with Label -->
<button type="button" class="btn btn-primary btn-label waves-effect waves-light rounded-pill"><i class="ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2"></i> Primary</button>`),i(),e(480,`

`),t(481,"code"),e(482,'<button type="button" class="btn btn-success btn-label waves-effect waves-light rounded-pill"><i class="ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2"></i> Success</button>'),i(),e(483,`

`),t(484,"code"),e(485,'<button type="button" class="btn btn-warning btn-label waves-effect waves-light rounded-pill"><i class="ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2"></i> Warning</button>'),i(),e(486,`

`),t(487,"code"),e(488,`<!-- Buttons with Label Right -->
<button type="button" class="btn btn-primary btn-label waves-effect right waves-light"><i class="ri-user-smile-line label-icon align-middle fs-16 ms-2"></i> Primary</button>`),i(),e(489,`

`),t(490,"code"),e(491,'<button type="button" class="btn btn-success btn-label waves-effect right waves-light rounded-pill"><i class="ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"></i> Success</button>'),i()()()()()()(),t(492,"div",1)(493,"div",2)(494,"div",3)(495,"div",4)(496,"h4",5),e(497,"Load More Buttons"),i(),t(498,"div",6)(499,"div",7)(500,"label",106),e(501,"Show Code"),i(),t(502,"input",107),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(503,"div",10)(504,"p",11),e(505,"Example of loading buttons."),i(),t(506,"div",12)(507,"div",1)(508,"div",108)(509,"div",109)(510,"button",110)(511,"span",111)(512,"span",112)(513,"span",113),e(514,"Loading..."),i()(),t(515,"span",114),e(516," Loading... "),i()()(),t(517,"button",115)(518,"span",111)(519,"span",112)(520,"span",113),e(521,"Loading..."),i()(),t(522,"span",114),e(523," Loading... "),i()()(),t(524,"button",116)(525,"span",111)(526,"span",117)(527,"span",113),e(528,"Loading..."),i()(),t(529,"span",114),e(530," Loading... "),i()()(),t(531,"button",118)(532,"span",111)(533,"span",117)(534,"span",113),e(535,"Loading..."),i()(),t(536,"span",114),e(537," Loading... "),i()()()()(),t(538,"div",108)(539,"div",87)(540,"button",110)(541,"span",111)(542,"span",119),e(543," Loading... "),i(),t(544,"span",112)(545,"span",113),e(546,"Loading..."),i()()()(),t(547,"button",115)(548,"span",111)(549,"span",119),e(550," Loading... "),i(),t(551,"span",112)(552,"span",113),e(553,"Loading..."),i()()()(),t(554,"button",120)(555,"span",111)(556,"span",119),e(557," Loading... "),i(),t(558,"span",117)(559,"span",113),e(560,"Loading..."),i()()()(),t(561,"button",121)(562,"span",111)(563,"span",119),e(564," Loading... "),i(),t(565,"span",117)(566,"span",113),e(567,"Loading..."),i()()()()()()()(),t(568,"div",23)(569,"pre",24)(570,"code"),e(571,`<!-- Load More Buttons -->
<div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
<button class="btn btn-outline-primary btn-load">
<span class="d-flex align-items-center">
<span class="spinner-border flex-shrink-0" role="status">
<span class="visually-hidden">Loading...</span>
</span>
<span class="flex-grow-1 ms-2">
Loading...
</span>
</span>
</button>
<button type="button" class="btn btn-success btn-load">
<span class="d-flex align-items-center">
<span class="spinner-border flex-shrink-0" role="status">
<span class="visually-hidden">Loading...</span>
</span>
<span class="flex-grow-1 ms-2">
Loading...
</span>
</span>
</button>
<button type="button" class="btn btn-outline-secondary btn-load">
<span class="d-flex align-items-center">
<span class="spinner-grow flex-shrink-0" role="status">
<span class="visually-hidden">Loading...</span>
</span>
<span class="flex-grow-1 ms-2">
Loading...
</span>
</span>
</button>
<button type="button" class="btn btn-danger btn-load">
<span class="d-flex align-items-center">
<span class="spinner-grow flex-shrink-0" role="status">
<span class="visually-hidden">Loading...</span>
</span>
<span class="flex-grow-1 ms-2">
Loading...
</span>
</span>
</button>
</div>`),i(),e(572,`

`),t(573,"code"),e(574,`<div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
<button class="btn btn-outline-primary btn-load">
<span class="d-flex align-items-center">
<span class="flex-grow-1 me-2">
Loading...
</span>
<span class="spinner-border flex-shrink-0" role="status">
<span class="visually-hidden">Loading...</span>
</span>
</span>
</button>
<button type="button" class="btn btn-success btn-load">
<span class="d-flex align-items-center">
<span class="flex-grow-1 me-2">
Loading...
</span>
<span class="spinner-border flex-shrink-0" role="status">
<span class="visually-hidden">Loading...</span>
</span>
</span>
</button>
<button type="button" class="btn btn-outline-warning btn-load">
<span class="d-flex align-items-center">
<span class="flex-grow-1 me-2">
Loading...
</span>
<span class="spinner-grow flex-shrink-0" role="status">
<span class="visually-hidden">Loading...</span>
</span>
</span>
</button>
<button type="button" class="btn btn-info btn-load">
<span class="d-flex align-items-center">
<span class="flex-grow-1 me-2">
Loading...
</span>
<span class="spinner-grow flex-shrink-0" role="status">
<span class="visually-hidden">Loading...</span>
</span>
</span>
</button>
</div>`),i()()()()()()(),t(575,"div",1)(576,"div",2)(577,"div",3)(578,"div",4)(579,"h4",5),e(580,"Border Buttons"),i(),t(581,"div",6)(582,"div",7)(583,"label",122),e(584,"Show Code"),i(),t(585,"input",123),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(586,"div",10)(587,"p",11),e(588,"Example of simple bottom borderd buttons."),i(),t(589,"div",12)(590,"div",1)(591,"div",108)(592,"div",109)(593,"button",124),e(594,"Primary"),i(),t(595,"button",125),e(596,"Secondary"),i(),t(597,"button",126),e(598,"Success"),i(),t(599,"button",127),e(600,"Warning"),i(),t(601,"button",128),e(602,"Danger"),i()()(),t(603,"div",108)(604,"div",109)(605,"button",129),e(606,"Primary"),i(),t(607,"button",130),e(608,"Secondary"),i(),t(609,"button",131),e(610,"Success"),i(),t(611,"button",132),e(612,"Warning"),i(),t(613,"button",133),e(614,"Danger"),i(),t(615,"button",134),e(616,"Dark"),i()()()()(),t(617,"div",23)(618,"pre",24)(619,"code"),e(620,`<!-- Border Buttons -->
<div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
<button class="btn btn-primary btn-border">Primary</button>
<button class="btn btn-secondary btn-border">Secondary</button>
<button class="btn btn-success btn-border">Success</button>
<button class="btn btn-warning btn-border">Warning</button>
<button class="btn btn-danger btn-border">Danger</button>
</div>`),i(),e(621,`

`),t(622,"code"),e(623,`<div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
<button class="btn btn-outline-primary btn-border">Primary</button>
<button class="btn btn-outline-secondary btn-border">Secondary</button>
<button class="btn btn-outline-success btn-border">Success</button>
<button class="btn btn-soft-warning btn-border">Warning</button>
<button class="btn btn-soft-danger btn-border">Danger</button>
<button class="btn btn-soft-dark btn-border">Dark</button>
</div>`),i()()()()()()(),t(624,"div",1)(625,"div",2)(626,"div",3)(627,"div",4)(628,"h4",5),e(629,"Custom Toggle Buttons"),i(),t(630,"div",6)(631,"div",7)(632,"label",135),e(633,"Show Code"),i(),t(634,"input",136),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(635,"div",10)(636,"p",11),e(637,"Example of toggle buttons."),i(),t(638,"div",12)(639,"div",1)(640,"div",108)(641,"div",137)(642,"button",138)(643,"span",139),n(644,"i",140),e(645," Active"),i(),t(646,"span",141),e(647,"Unactive"),i()(),t(648,"button",142)(649,"span",139),n(650,"i",143),e(651," Connect"),i(),t(652,"span",141),n(653,"i",144),e(654," Unconnect"),i()(),t(655,"button",145)(656,"span",139),n(657,"i",146),e(658," Yes"),i(),t(659,"span",141),n(660,"i",147),e(661," No"),i()(),t(662,"button",148)(663,"span",139),n(664,"i",149),e(665," Follow"),i(),t(666,"span",141),n(667,"i",150),e(668," Unfollow"),i()(),t(669,"button",151)(670,"span",139),e(671,"On"),i(),t(672,"span",141),e(673,"Off"),i()(),t(674,"button",152)(675,"span",139),n(676,"i",153),e(677," Bookmark"),i(),t(678,"span",141),n(679,"i",154),e(680," Unbookmark"),i()()()(),t(681,"div",108)(682,"div",137)(683,"button",155)(684,"span",139),e(685,"Active"),i(),t(686,"span",141),e(687,"Unactive"),i()(),t(688,"button",156)(689,"span",139),n(690,"i",149),e(691," Follow"),i(),t(692,"span",141),n(693,"i",150),e(694," Unfollow"),i()(),t(695,"button",157)(696,"span",139),e(697,"On"),i(),t(698,"span",141),e(699,"Off"),i()(),t(700,"button",158)(701,"span",139),e(702,"Follow"),i(),t(703,"span",141),e(704,"Unfollow"),i()(),t(705,"button",159)(706,"span",139),e(707,"On"),i(),t(708,"span",141),e(709,"Off"),i()(),t(710,"button",160)(711,"span",139),n(712,"i",161),i(),t(713,"span",141),n(714,"i",162),i()()()()()(),t(715,"div",23)(716,"pre",24)(717,"code"),e(718,`<!-- Custom Toggle Buttons -->
<button type="button" class="btn btn-primary custom-toggle active" data-bs-toggle="button">
<span class="icon-on"><i class="ri-alarm-line align-bottom"></i> Active</span>
<span class="icon-off">Unactive</span>
</button>`),i(),e(719,`

`),t(720,"code"),e(721,`<button type="button" class="btn btn-secondary custom-toggle active" data-bs-toggle="button">
<span class="icon-on"><i class="ri-user-add-line align-bottom me-1"></i> Connect</span>
<span class="icon-off"><i class="ri-check-fill align-bottom me-1"></i> Unconnect</span>
</button>`),i(),e(722,`

`),t(723,"code"),e(724,`<button type="button" class="btn btn-success custom-toggle" data-bs-toggle="button">
<span class="icon-on"><i class="ri-thumb-up-line align-bottom me-1"></i> Yes</span>
<span class="icon-off"><i class="ri-thumb-down-line align-bottom me-1"></i> No</span>
</button>`),i(),e(725,`

`),t(726,"code"),e(727,`<button type="button" class="btn btn-warning custom-toggle active" data-bs-toggle="button">
<span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
<span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
</button>`),i(),e(728,`

`),t(729,"code"),e(730,`<button type="button" class="btn btn-danger custom-toggle" data-bs-toggle="button">
<span class="icon-on">On</span>
<span class="icon-off">Off</span>
</button>`),i(),e(731,`

`),t(732,"code"),e(733,`<button type="button" class="btn btn-dark custom-toggle" data-bs-toggle="button">
<span class="icon-on"><i class="ri-bookmark-line align-bottom me-1"></i> Bookmark</span>
<span class="icon-off"><i class="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
</button>`),i(),e(734,`

`),t(735,"code"),e(736,`<button type="button" class="btn btn-outline-primary custom-toggle" data-bs-toggle="button">
<span class="icon-on">Active</span>
<span class="icon-off">Unactive</span>
</button>`),i(),e(737,`

`),t(738,"code"),e(739,`<button type="button" class="btn btn-outline-secondary custom-toggle" data-bs-toggle="button">
<span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
<span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
</button>`),i(),e(740,`

`),t(741,"code"),e(742,`<button type="button" class="btn btn-outline-success custom-toggle active" data-bs-toggle="button">
<span class="icon-on">On</span>
<span class="icon-off">Off</span>
</button>`),i(),e(743,`

`),t(744,"code"),e(745,`<button type="button" class="btn btn-soft-warning custom-toggle active" data-bs-toggle="button">
<span class="icon-on">Follow</span>
<span class="icon-off">Unfollow</span>
</button>`),i(),e(746,`

`),t(747,"code"),e(748,`<button type="button" class="btn btn-soft-danger custom-toggle" data-bs-toggle="button">
<span class="icon-on">On</span>
<span class="icon-off">Off</span>
</button>`),i(),e(749,`

`),t(750,"code"),e(751,`<button type="button" class="btn btn-dark custom-toggle active" data-bs-toggle="button">
<span class="icon-on"><i class="ri-bookmark-line align-bottom"></i></span>
<span class="icon-off"><i class="ri-bookmark-3-fill align-bottom"></i></span>
</button>`),i()()()()()()(),t(752,"div",1)(753,"div",2)(754,"div",3)(755,"div",4)(756,"h4",5),e(757,"Buttons Sizes"),i(),t(758,"div",6)(759,"div",7)(760,"label",163),e(761,"Show Code"),i(),t(762,"input",164),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(763,"div",10)(764,"p",11),e(765,"Use "),t(766,"code"),e(767,"btn-lg"),i(),e(768," class to create a large size button and "),t(769,"code"),e(770,"btn-sm"),i(),e(771," class to create a small size button. "),i(),t(772,"div",12)(773,"div",137)(774,"button",165),e(775,"Large button"),i(),t(776,"button",166),e(777,"Large button"),i(),t(778,"button",167),e(779,"Small button"),i(),t(780,"button",168),e(781,"Small button"),i()()(),t(782,"div",23)(783,"pre",74)(784,"code"),e(785,`<!-- Large Button -->
<button type="button" class="btn btn-primary btn-lg">Large button</button>`),i(),e(786,`

`),t(787,"code"),e(788,'<button type="button" class="btn btn-light btn-lg">Large button</button>'),i(),e(789,`

`),t(790,"code"),e(791,`<!-- Small Button -->
<button type="button" class="btn btn-primary btn-sm">Small button</button>`),i(),e(792,`

`),t(793,"code"),e(794,'<button type="button" class="btn btn-light btn-sm">Small button</button>'),i()()()()()()(),t(795,"div",1)(796,"div",2)(797,"div",3)(798,"div",4)(799,"h4",5),e(800,"Buttons Width"),i(),t(801,"div",6)(802,"div",7)(803,"label",169),e(804,"Show Code"),i(),t(805,"input",170),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(806,"div",10)(807,"p",11),e(808," Use "),t(809,"code"),e(810,"w-xs,w-sm,w-md,w-lg"),i(),e(811," class to make different sized buttons respectively. "),i(),t(812,"div",12)(813,"div",13)(814,"button",171),e(815,"Xs"),i(),t(816,"button",172),e(817,"Small"),i(),t(818,"button",173),e(819,"Medium"),i(),t(820,"button",174),e(821,"Large"),i()()(),t(822,"div",23)(823,"pre",74)(824,"code"),e(825,`<!-- Width Button -->
<button type="button" class="btn btn-primary w-xs waves-effect waves-light">Xs</button>`),i(),e(826,`

`),t(827,"code"),e(828,'<button type="button" class="btn btn-danger w-sm waves-effect waves-light">Small</button>'),i(),e(829,`

`),t(830,"code"),e(831,'<button type="button" class="btn btn-warning w-md waves-effect waves-light">Medium</button>'),i(),e(832,`

`),t(833,"code"),e(834,'<button type="button" class="btn btn-success w-lg waves-effect waves-light">Large</button>'),i()()()()()()(),t(835,"div",1)(836,"div",2)(837,"div",3)(838,"div",4)(839,"h4",5),e(840,"Buttons Tag"),i(),t(841,"div",6)(842,"div",7)(843,"label",175),e(844,"Show Code"),i(),t(845,"input",176),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(846,"div",10)(847,"p",11),e(848," Use "),t(849,"code"),e(850,"btn"),i(),e(851," class with different HTML elements. (though some browsers may apply a slightly different rendering) "),i(),t(852,"div",12)(853,"div",13)(854,"a",177),e(855,"Link"),i(),t(856,"button",178),e(857,"Button"),i(),n(858,"input",179)(859,"input",180)(860,"input",181),i()(),t(861,"div",23)(862,"pre",74)(863,"code"),e(864,`<!-- Tag Button -->
<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Link</a>`),i(),e(865,`

`),t(866,"code"),e(867,'<button class="btn btn-success waves-effect waves-light" type="submit">Button</button>'),i(),e(868,`

`),t(869,"code"),e(870,'<input class="btn btn-info" type="button" value="Input">'),i(),e(871,`

`),t(872,"code"),e(873,'<input class="btn btn-danger" type="submit" value="Submit">'),i(),e(874,`

`),t(875,"code"),e(876,'<input class="btn btn-warning" type="reset" value="Reset">'),i()()()()()()(),t(877,"div",1)(878,"div",108)(879,"div",3)(880,"div",4)(881,"h4",5),e(882,"Base class"),i(),t(883,"div",6)(884,"div",7)(885,"label",182),e(886,"Show Code"),i(),n(887,"input",183),i()()(),t(888,"div",10)(889,"p",11),e(890," Bootstrap has a base "),t(891,"code"),e(892,".btn"),i(),e(893," class that sets up basic styles such as padding and content alignment. By default, "),t(894,"code"),e(895,".btn"),i(),e(896," controls have a transparent border and background color, and lack any explicit focus and hover styles. "),i(),t(897,"div",12)(898,"div",13)(899,"button",184),e(900,"Base class"),i()()(),t(901,"div",23)(902,"pre",74)(903,"code"),e(904,'<button type="button" class="btn">Base class</button>'),i()()()()()(),t(905,"div",108)(906,"div",3)(907,"div",4)(908,"h4",5),e(909,"Custom sizing with CSS variables"),i(),t(910,"div",6)(911,"div",7)(912,"label",185),e(913,"Show Code"),i(),n(914,"input",186),i()()(),t(915,"div",10)(916,"p",11),e(917," You can even roll your own custom sizing with CSS variables: "),i(),t(918,"div",12)(919,"button",187),e(920," Custom button "),i()(),t(921,"div",23)(922,"pre",74)(923,"code"),e(924,`<button type="button" class="btn btn-primary" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
Custom button
</button>`),i()()()()()()(),t(925,"div",1)(926,"div",2)(927,"div",3)(928,"div",4)(929,"h4",5),e(930,"Buttons Toggle Status"),i(),t(931,"div",6)(932,"div",7)(933,"label",188),e(934,"Show Code"),i(),t(935,"input",189),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(936,"div",10)(937,"p",11),e(938," Use "),t(939,"code"),e(940,'data-bs-toggle="button"'),i(),e(941," to toggle a button\xE2\u20AC\u2122s active state. "),i(),t(942,"div",12)(943,"div",13)(944,"button",190),e(945," Single toggle "),i()()(),t(946,"div",23)(947,"pre",74)(948,"code"),e(949,`<!-- Toggle Button Status -->
<button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="button" aria-pressed="false">
Single toggle
</button>`),i()()()()()()(),t(950,"div",1)(951,"div",2)(952,"div",3)(953,"div",4)(954,"h4",5),e(955,"Buttons Grid"),i(),t(956,"div",6)(957,"div",7)(958,"label",191),e(959,"Show Code"),i(),t(960,"input",192),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(961,"div",10)(962,"p",11),e(963," Use "),t(964,"code"),e(965,"d-grid"),i(),e(966," class to create a full-width block button. "),i(),t(967,"div",12)(968,"div",193)(969,"button",194),e(970,"Button"),i(),t(971,"button",194),e(972,"Button"),i()()(),t(973,"div",23)(974,"pre",74)(975,"code"),e(976,`<!-- Buttons Grid -->
<div class="d-grid gap-2" >
<button class="btn btn-primary" type="button">Button</button>
<button class="btn btn-primary" type="button">Button</button>
</div>`),i()()()()()()(),t(977,"div",1)(978,"div",2)(979,"div",3)(980,"div",4)(981,"h4",5),e(982,"Checkbox & Radio Buttons"),i(),t(983,"div",6)(984,"div",7)(985,"label",195),e(986,"Show Code"),i(),t(987,"input",196),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(988,"div",10)(989,"p",11),e(990," Combine button-like "),t(991,"code"),e(992,"checkbox and radio"),i(),t(993,"a",197),e(994,"toggle buttons"),i(),e(995," into a seamless looking button group. "),i(),t(996,"div",12)(997,"div",137)(998,"div",198),n(999,"input",199),t(1e3,"label",200),e(1001,"Checkbox 1"),i(),n(1002,"input",201),t(1003,"label",202),e(1004,"Checkbox 2"),i(),n(1005,"input",203),t(1006,"label",204),e(1007,"Checkbox 3"),i()(),t(1008,"div",205),n(1009,"input",206),t(1010,"label",207),e(1011,"Radio 1"),i(),n(1012,"input",208),t(1013,"label",209),e(1014,"Radio 2"),i(),n(1015,"input",210),t(1016,"label",211),e(1017,"Radio 3"),i()()()(),t(1018,"div",23)(1019,"pre",24)(1020,"code"),e(1021,`<!-- Checkbox Buttons -->
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
<input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked="">
<label class="btn btn-primary material-shadow-none" for="btncheck1">Checkbox 1</label>

<input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
<label class="btn btn-primary material-shadow-none" for="btncheck2">Checkbox 2</label>

<input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
<label class="btn btn-primary material-shadow-none" for="btncheck3">Checkbox 3</label>
</div>`),i(),e(1022,`

`),t(1023,"code"),e(1024,`<!-- Radio Buttons -->
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked="">
<label class="btn btn-outline-secondary material-shadow-none" for="btnradio1">Radio 1</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
<label class="btn btn-outline-secondary material-shadow-none" for="btnradio2">Radio 2</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
<label class="btn btn-outline-secondary material-shadow-none" for="btnradio3">Radio 3</label>
</div>`),i()()()()()()(),t(1025,"div",1)(1026,"div",108)(1027,"div",3)(1028,"div",4)(1029,"h4",5),e(1030,"Buttons Group"),i(),t(1031,"div",6)(1032,"div",7)(1033,"label",212),e(1034,"Show Code"),i(),t(1035,"input",213),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(1036,"div",10)(1037,"p",11),e(1038,"Use the "),t(1039,"code"),e(1040,"btn-group "),i(),e(1041," class in the parent class to wrap a series of buttons."),i(),t(1042,"div",12)(1043,"div",1)(1044,"div",214)(1045,"div",215)(1046,"button",216),e(1047,"Left"),i(),t(1048,"button",216),e(1049,"Middle"),i(),t(1050,"button",216),e(1051,"Right"),i()()(),t(1052,"div",214)(1053,"div",217)(1054,"button",218),n(1055,"i",219),i(),t(1056,"button",218),n(1057,"i",220),i(),t(1058,"button",218),n(1059,"i",221),i()()()()(),t(1060,"div",23)(1061,"pre",74)(1062,"code"),e(1063,`<!-- Buttons Group -->
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="btn btn-primary material-shadow-none">Left</button>
<button type="button" class="btn btn-primary material-shadow-none">Middle</button>
<button type="button" class="btn btn-primary material-shadow-none">Right</button>
</div>`),i(),e(1064,`

`),t(1065,"code"),e(1066,`<div class="btn-group mt-4 mt-md-0" role="group" aria-label="Basic example">
<button type="button" class="btn btn-light material-shadow-none"><i class="ri-align-right"></i></button>
<button type="button" class="btn btn-light material-shadow-none"><i class="ri-align-center"></i></button>
<button type="button" class="btn btn-light material-shadow-none"><i class="ri-align-left"></i></button>
</div>`),i()()()()()(),t(1067,"div",108)(1068,"div",3)(1069,"div",4)(1070,"h4",5),e(1071,"Icon Buttons"),i(),t(1072,"div",6)(1073,"div",7)(1074,"label",222),e(1075,"Show Code"),i(),t(1076,"input",223),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(1077,"div",10)(1078,"p",11),e(1079,"Use "),t(1080,"code"),e(1081,"btn-icon"),i(),e(1082," class to wrap icon in button"),i(),t(1083,"div",12)(1084,"div",1)(1085,"div",214)(1086,"div",224)(1087,"button",225),n(1088,"i",226),i(),t(1089,"button",227),n(1090,"i",228),i(),t(1091,"button",229),n(1092,"i",230),i(),t(1093,"button",231),n(1094,"i",232),i()()(),t(1095,"div",214)(1096,"div",233)(1097,"button",234),n(1098,"i",235),i(),t(1099,"button",236),n(1100,"i",237),i(),t(1101,"button",238),n(1102,"i",239),i(),t(1103,"button",240),n(1104,"i",241),i()()()()(),t(1105,"div",23)(1106,"pre",74)(1107,"code"),e(1108,`<!-- Buttons Group -->
<button type="button" class="btn btn-primary waves-effect waves-light"><i class="ri-map-pin-line"></i></button>`),i(),e(1109,`
`),t(1110,"code"),e(1111,'<button type="button" class="btn btn-danger btn-icon waves-effect waves-light"><i class="ri-delete-bin-5-line"></i></button>'),i(),e(1112,`
`),t(1113,"code"),e(1114,'<button type="button" class="btn btn-success btn-icon waves-effect waves-light"><i class="ri-check-double-line"></i></button>'),i(),e(1115,`
`),t(1116,"code"),e(1117,'<button type="button" class="btn btn-light btn-icon waves-effect"><i class="ri-brush-2-fill"></i></button>'),i(),e(1118,`

`),t(1119,"code"),e(1120,'<button type="button" class="btn btn-outline-primary btn-icon waves-effect waves-light material-shadow-none"><i class="ri-24-hours-fill"></i></button>'),i(),e(1121,`
`),t(1122,"code"),e(1123,'<button type="button" class="btn btn-outline-danger btn-icon waves-effect waves-light material-shadow-none"><i class="ri-customer-service-2-line"></i></button>'),i(),e(1124,`
`),t(1125,"code"),e(1126,'<button type="button" class="btn btn-outline-success btn-icon waves-effect waves-light material-shadow-none"><i class="ri-mail-send-line"></i></button>'),i(),e(1127,`
`),t(1128,"code"),e(1129,'<button type="button" class="btn btn-outline-warning btn-icon waves-effect waves-light material-shadow-none"><i class="ri-menu-2-line"></i></button>'),i()()()()()()(),t(1130,"div",1)(1131,"div",2)(1132,"div",3)(1133,"div",4)(1134,"h4",5),e(1135,"Buttons Toolbar"),i(),t(1136,"div",6)(1137,"div",7)(1138,"label",242),e(1139,"Show Code"),i(),t(1140,"input",243),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(1141,"div",10)(1142,"p",11),e(1143,"Use "),t(1144,"code"),e(1145,"btn-toolbar"),i(),e(1146," class to combine sets of button groups into more complex components."),i(),t(1147,"div",12)(1148,"div",244)(1149,"div",245)(1150,"div",246)(1151,"button",247),e(1152,"1"),i(),t(1153,"button",247),e(1154,"2"),i(),t(1155,"button",247),e(1156,"3"),i(),t(1157,"button",247),e(1158,"4"),i()(),t(1159,"div",248)(1160,"button",247),e(1161,"5"),i(),t(1162,"button",247),e(1163,"6"),i(),t(1164,"button",247),e(1165,"7"),i()(),t(1166,"div",249)(1167,"button",247),e(1168,"8"),i()()()()(),t(1169,"div",23)(1170,"pre",74)(1171,"code"),e(1172,`<!-- Buttons Toolbar -->
<div class="btn-toolbar material-shadow" role="toolbar" aria-label="Toolbar with button groups">
<div class="btn-group me-2" role="group" aria-label="First group">
<button type="button" class="btn btn-light material-shadow-none">1</button>
<button type="button" class="btn btn-light material-shadow-none">2</button>
<button type="button" class="btn btn-light material-shadow-none">3</button>
<button type="button" class="btn btn-light material-shadow-none">4</button>
</div>
<div class="btn-group material-shadow me-2" role="group" aria-label="Second group">
<button type="button" class="btn btn-light material-shadow-none">5</button>
<button type="button" class="btn btn-light material-shadow-none">6</button>
<button type="button" class="btn btn-light material-shadow-none">7</button>
</div>
<div class="btn-group material-shadow" role="group" aria-label="Third group">
<button type="button" class="btn btn-light material-shadow-none">8</button>
</div>
</div>`),i()()()()()()(),t(1173,"div",1)(1174,"div",2)(1175,"div",3)(1176,"div",4)(1177,"h4",5),e(1178,"Button Group Sizing"),i(),t(1179,"div",6)(1180,"div",7)(1181,"label",250),e(1182,"Show Code"),i(),t(1183,"input",251),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(1184,"div",10)(1185,"p",11),e(1186,"Use "),t(1187,"code"),e(1188,"btn-group-"),i(),e(1189," class with the below-mentioned variation to set the different sizes of button groups."),i(),t(1190,"div",12)(1191,"div",137)(1192,"div",252)(1193,"button",216),e(1194,"Left"),i(),t(1195,"button",216),e(1196,"Middle"),i(),t(1197,"button",216),e(1198,"Right"),i()(),t(1199,"div",253)(1200,"button",247),e(1201,"Left"),i(),t(1202,"button",247),e(1203,"Middle"),i(),t(1204,"button",247),e(1205,"Right"),i()(),t(1206,"div",254)(1207,"button",255),e(1208,"Left"),i(),t(1209,"button",255),e(1210,"Middle"),i(),t(1211,"button",255),e(1212,"Right"),i()()()(),t(1213,"div",23)(1214,"pre",24)(1215,"code"),e(1216,`<!-- Group Buttons Sizing -->
<div class="btn-group material-shadow btn-group-lg" role="group" aria-label="Basic example">
<button type="button" class="btn btn-primary material-shadow-none">Left</button>
<button type="button" class="btn btn-primary material-shadow-none">Middle</button>
<button type="button" class="btn btn-primary material-shadow-none">Right</button>
</div>`),i(),e(1217,`

`),t(1218,"code"),e(1219,`<div class="btn-group material-shadow mt-2" role="group" aria-label="Basic example">
<button type="button" class="btn btn-light material-shadow-none">Left</button>
<button type="button" class="btn btn-light material-shadow-none">Middle</button>
<button type="button" class="btn btn-light material-shadow-none">Right</button>
</div>`),i(),e(1220,`

`),t(1221,"code"),e(1222,`<div class="btn-group material-shadow btn-group-sm mt-2" role="group" aria-label="Basic example">
<button type="button" class="btn btn-secondary material-shadow-none">Left</button>
<button type="button" class="btn btn-secondary material-shadow-none">Middle</button>
<button type="button" class="btn btn-secondary material-shadow-none">Right</button>
</div>`),i()()()()()()(),t(1223,"div",1)(1224,"div",2)(1225,"div",3)(1226,"div",4)(1227,"h4",5),e(1228,"Vertical Variation"),i(),t(1229,"div",6)(1230,"div",7)(1231,"label",256),e(1232,"Show Code"),i(),t(1233,"input",257),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(1234,"div",10)(1235,"p",11),e(1236,"Make a set of buttons appear "),t(1237,"code"),e(1238,"vertically"),i(),e(1239," stacked .Split button dropdowns are not supported here."),i(),t(1240,"div",12)(1241,"div",1)(1242,"div",258)(1243,"div",259)(1244,"button",216),e(1245,"1"),i(),t(1246,"button",216),e(1247,"2"),i(),t(1248,"div",260)(1249,"button",261),e(1250," Dropdown "),n(1251,"i",262),i(),t(1252,"ul",263)(1253,"li")(1254,"a",264),e(1255,"Dropdown link"),i()(),t(1256,"li")(1257,"a",264),e(1258,"Dropdown link"),i()()()()()(),t(1259,"div",258)(1260,"div",265)(1261,"button",266),e(1262,"Button"),i(),t(1263,"div",267)(1264,"button",268),e(1265," Dropdown "),i(),t(1266,"div",269)(1267,"a",264),e(1268,"Dropdown link"),i(),t(1269,"a",264),e(1270,"Dropdown link"),i()()(),t(1271,"button",247),e(1272,"Button"),i(),t(1273,"button",247),e(1274,"Button"),i()()(),t(1275,"div",258)(1276,"div",270),n(1277,"input",271),t(1278,"label",272),e(1279,"Radio 1"),i(),n(1280,"input",273),t(1281,"label",274),e(1282,"Radio 2"),i(),n(1283,"input",275),t(1284,"label",276),e(1285,"Radio 3"),i()()()()(),t(1286,"div",23)(1287,"pre",24)(1288,"code"),e(1289,`<!-- Vertical Variation -->
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
<button type="button" class="btn btn-primary  material-shadow-none">1</button>
<button type="button" class="btn btn-primary material-shadow-none">2</button>
<div class="btn-group" role="group">
<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown
</button>
<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
<li><a class="dropdown-item" href="#">Dropdown link</a></li>
<li><a class="dropdown-item" href="#">Dropdown link</a></li>
</ul>
</div>
</div>`),i(),e(1290,`

`),t(1291,"code"),e(1292,`<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
<button type="button" class="btn btn-light material-shadow-none">Button</button>
<div class="btn-group" role="group">
<button id="btnGroupVerticalDrop1" type="button" class="btn btn-light material-shadow-none dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown
</button>
<div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
<a class="dropdown-item" href="#">Dropdown link</a>
<a class="dropdown-item" href="#">Dropdown link</a>
</div>
</div>
<button type="button" class="btn btn-light material-shadow-none">Button</button>
<button type="button" class="btn btn-light material-shadow-none">Button</button>
</div>`),i(),e(1293,`

`),t(1294,"code"),e(1295,`<div class="btn-group-vertical material-shadow" role="group" aria-label="Vertical radio toggle button group">
<input type="radio" class="btn-check" name="vbtn" id="vbtn-radio1" checked="">
<label class="btn btn-outline-secondary material-shadow-none" for="vbtn-radio1">Radio 1</label>
<input type="radio" class="btn-check" name="vbtn" id="vbtn-radio2">
<label class="btn btn-outline-secondary material-shadow-none" for="vbtn-radio2">Radio 2</label>
<input type="radio" class="btn-check" name="vbtn" id="vbtn-radio3">
<label class="btn btn-outline-secondary material-shadow-none" for="vbtn-radio3">Radio 3</label>
</div>`),i()()()()()()(),t(1296,"div",1)(1297,"div",2)(1298,"div",3)(1299,"div",4)(1300,"h4",5),e(1301,"Focus Ring"),i(),t(1302,"div",6)(1303,"div",7)(1304,"label",277),e(1305,"Show Code"),i(),n(1306,"input",278),i()()(),t(1307,"div",10)(1308,"p",11),e(1309,"Click directly on the link below to see the focus ring in action, or into the example below and then press "),t(1310,"kbd"),e(1311,"Tab"),i(),e(1312,"."),i(),t(1313,"div",12)(1314,"div",279)(1315,"a",280),e(1316," Focus ring "),i(),t(1317,"a",281),e(1318," Custom focus ring "),i(),t(1319,"a",282),e(1320," Blurry offset focus ring "),i()()(),t(1321,"div",23)(1322,"pre",24)(1323,"code"),e(1324,`<a href="javascript:void(0);" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
Focus ring
</a>`),i(),e(1325,`

`),t(1326,"code"),e(1327,`<!--custom focus ring color-->
<a href="javascript:void(0);" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--vz-focus-ring-color: rgba(118, 93, 255, .25)">
Custom focus ring
</a>`),i(),e(1328,`

`),t(1329,"code"),e(1330,`<!---custom blurry offset focus ring-->
<a href="javascript:void(0);" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--vz-focus-ring-x: 10px; --vz-focus-ring-y: 10px; --vz-focus-ring-blur: 4px">
Blurry offset focus ring
</a>`),i()()()()()()(),t(1331,"div",1)(1332,"div",2)(1333,"div",3)(1334,"div",4)(1335,"h4",5),e(1336,"Focus Ring Utilities"),i(),t(1337,"div",6)(1338,"div",7)(1339,"label",283),e(1340,"Show Code"),i(),n(1341,"input",284),i()()(),t(1342,"div",10)(1343,"p",11),e(1344,"In addition to "),t(1345,"code"),e(1346,".focus-ring"),i(),e(1347,", we have several "),t(1348,"code"),e(1349,".focus-ring-*"),i(),e(1350," utilities to modify the helper class defaults. Modify the color with any of our "),t(1351,"a",285),e(1352,"theme colors"),i(),e(1353,". Note that the light and dark variants may not be visible on all background colors given current color mode support. "),i(),t(1354,"div",12)(1355,"div",1)(1356,"div",108)(1357,"p")(1358,"a",286),e(1359,"Primary focus"),i()(),t(1360,"p")(1361,"a",287),e(1362,"Secondary focus"),i()(),t(1363,"p")(1364,"a",288),e(1365,"Success focus"),i()(),t(1366,"p",289)(1367,"a",290),e(1368,"Danger focus"),i()()(),t(1369,"div",108)(1370,"p")(1371,"a",291),e(1372,"Warning focus"),i()(),t(1373,"p")(1374,"a",292),e(1375,"Info focus"),i()(),t(1376,"p")(1377,"a",293),e(1378,"Light focus"),i()(),t(1379,"p",294)(1380,"a",295),e(1381,"Dark focus"),i()()()()(),t(1382,"div",23)(1383,"pre",24)(1384,"code"),e(1385,'<p><a href="#" class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary focus</a></p>'),i(),e(1386,`

`),t(1387,"code"),e(1388,'<p><a href="#" class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary focus</a></p>'),i(),e(1389,`

`),t(1390,"code"),e(1391,'<p><a href="#" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success focus</a></p>'),i(),e(1392,`

`),t(1393,"code"),e(1394,'<p><a href="#" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger focus</a></p>'),i(),e(1395,`

`),t(1396,"code"),e(1397,'<p><a href="#" class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning focus</a></p>'),i(),e(1398,`

`),t(1399,"code"),e(1400,'<p><a href="#" class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info focus</a></p>'),i(),e(1401,`

`),t(1402,"code"),e(1403,'<p><a href="#" class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light focus</a></p>'),i(),e(1404,`

`),t(1405,"code"),e(1406,'<p><a href="#" class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark focus</a></p>'),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D,Ne,Le,je],encapsulation:2})}}return l})();var _i=(()=>{class l{constructor(){this.myOptions={horizontalOrder:!0}}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Cards",active:!0}]}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-cards"]],standalone:!1,decls:1135,vars:2,consts:[["title","Cards",3,"breadcrumbItems"],[1,"row"],[1,"col-sm-6","col-xl-3"],[1,"card"],["src","assets/images/small/img-1.jpg","alt","Card image cap",1,"card-img-top","img-fluid"],[1,"card-body"],[1,"card-title","mb-2"],[1,"card-text"],[1,"text-end"],["href","javascript:void(0);",1,"btn","btn-primary"],["src","assets/images/small/img-2.jpg","alt","Card image cap",1,"card-img-top","img-fluid"],[1,"card-text","mb-0"],[1,"card-footer"],["href","javascript:void(0);",1,"card-link","link-secondary"],[1,"ri-arrow-right-s-line","ms-1","align-middle","lh-1"],["href","javascript:void(0);",1,"card-link","link-success"],[1,"ri-bookmark-line","align-middle","ms-1","lh-1"],["src","assets/images/small/img-3.jpg","alt","Card image cap",1,"card-img-top","img-fluid"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-subtitle","font-14","text-muted"],["src","assets/images/small/img-4.jpg","alt","Card image cap",1,"img-fluid"],[1,"col-12"],[1,"justify-content-between","d-flex","align-items-center","mt-3","mb-4"],[1,"mb-0","pb-1","text-decoration-underline"],[1,"row","row-cols-xxl-5","row-cols-lg-3","row-cols-1"],[1,"col"],[1,"card","card-body"],[1,"d-flex","mb-4","align-items-center"],[1,"flex-shrink-0"],["src","assets/images/users/avatar-1.jpg","alt","",1,"avatar-sm","rounded-circle"],[1,"flex-grow-1","ms-2"],[1,"card-title","mb-1"],[1,"text-muted","mb-0"],[1,"mb-1"],[1,"card-text","text-muted"],["href","javascript:void(0)",1,"btn","btn-primary","btn-sm"],["src","assets/images/users/avatar-4.jpg","alt","",1,"avatar-sm","rounded-circle"],["src","assets/images/users/avatar-3.jpg","alt","",1,"avatar-sm","rounded-circle"],["src","assets/images/users/avatar-5.jpg","alt","",1,"avatar-sm","rounded-circle"],["src","assets/images/users/avatar-6.jpg","alt","",1,"avatar-sm","rounded-circle"],[1,"col-xxl-4","col-lg-6"],[1,"avatar-sm","mb-3"],[1,"avatar-title","bg-success-subtle","text-success","fs-17","rounded"],[1,"ri-smartphone-line"],[1,"card-title"],["href","javascript:void(0);",1,"btn","btn-success"],[1,"card","card-body","text-center"],[1,"avatar-sm","mx-auto","mb-3"],[1,"ri-add-line"],[1,"card","card-body","text-end"],[1,"avatar-sm","ms-auto","mb-3"],[1,"ri-gift-fill"],[1,"card-header"],["type","button","aria-label","Close",1,"btn-close","float-end","fs-11"],[1,"card-title","mb-0"],[1,"card-text","text-muted","mb-0"],["href","javascript:void(0);",1,"link-success","float-end"],[1,"ri-arrow-right-s-line","align-middle","ms-1","lh-1"],[1,"text-secondary"],[1,"card-blockquote","mb-0"],[1,"text-muted","mb-2"],[1,"mb-0"],[1,"blockquote"],[1,"lead"],[1,"blockquote-footer","fs-13","text-end","mb-0"],["title","Source Title",1,"text-primary","fw-semibold"],[1,"col-xl-4"],[1,"card-title","mb-3"],[1,"ri-user-3-fill","align-middle","me-1","text-muted"],[1,"text-muted"],[1,"card-footer","text-center"],["href","javascript:void(0);",1,"link-secondary"],[1,"float-end","text-secondary"],[1,"card-subtitle","text-muted","mb-0"],["href","javascript:void(0);",1,"text-decoration-underline"],[1,"ri-gift-line","align-middle","me-1","lh-1"],[1,"hstack","gap-2","justify-content-end"],["href","javascript:void(0)",1,"btn","btn-link","btn-sm","link-success"],[1,"ri-close-line","align-middle","lh-1"],["href","javascript:void(0);",1,"btn","btn-primary","btn-sm"],[1,"card-body","p-4","text-center"],[1,"mx-auto","avatar-md","mb-3"],["src","assets/images/users/avatar-8.jpg","alt","",1,"img-fluid","rounded-circle"],[1,"list-inline","mb-0"],[1,"list-inline-item"],["href","javascript:void(0);",1,"lh-1","align-middle","link-secondary"],[1,"ri-facebook-fill"],["href","javascript:void(0);",1,"lh-1","align-middle","link-success"],[1,"ri-whatsapp-line"],["href","javascript:void(0);",1,"lh-1","align-middle","link-primary"],[1,"ri-linkedin-fill"],["href","javascript:void(0);",1,"lh-1","align-middle","link-danger"],[1,"ri-slack-fill"],["src","assets/images/users/avatar-5.jpg","alt","",1,"img-fluid","rounded-circle"],["src","assets/images/users/avatar-3.jpg","alt","",1,"img-fluid","rounded-circle"],["id","card-none1",1,"col-xl-4"],[1,"d-flex","align-items-center"],[1,"flex-grow-1"],[1,"list-inline","card-toolbar-menu","d-flex","align-items-center","mb-0"],["data-toggle","reload","href","javascript:void(0);",1,"align-middle"],[1,"mdi","mdi-refresh","align-middle"],["data-bs-toggle","collapse","href","javascript:void(0);","role","button","aria-expanded","false","aria-controls","collapseExample2",1,"align-middle","minimize-card"],[1,"mdi","mdi-plus","align-middle","plus"],[1,"mdi","mdi-minus","align-middle","minus"],["type","button","onclick","delthis('card-none1')",1,"btn-close","fs-10","align-middle"],["id","collapseexample1",1,"card-body","collapse","show"],[1,"d-flex"],[1,"ri-checkbox-circle-fill","text-success"],[1,"flex-grow-1","ms-2","text-muted"],[1,"d-flex","mt-2"],["id","card-none2",1,"col-xl-4"],["href","javascript:void(0);","data-toggle","growing-reload",1,"align-middle"],["type","button","onclick","delthis('card-none2')",1,"btn-close","fs-10","align-middle"],["id","collapseExample2",1,"card-body","collapse","show"],["id","card-none3",1,"col-xl-4"],["href","javascript:void(0);","data-toggle","customer-loader",1,"align-middle"],["type","button","onclick","delthis('card-none3')",1,"btn-close","fs-10","align-middle"],["id","collapseExample3",1,"card-body","collapse","show"],[1,"mb-0","text-decoration-underline"],[1,"card","card-overlay"],["src","assets/images/small/img-12.jpg","alt","Card image",1,"card-img","img-fluid"],[1,"card-img-overlay","p-0","d-flex","flex-column"],[1,"card-header","bg-transparent"],[1,"card-title","text-white","mb-0"],[1,"card-text","text-white","mb-2"],[1,"text-white"],[1,"card-footer","bg-transparent","text-center"],["href","javascript:void(0);",1,"link-light"],["src","assets/images/small/img-1.jpg","alt","Card image",1,"card-img","img-fluid"],[1,"card-img-overlay","p-0"],["src","assets/images/small/img-5.jpg","alt","Card image",1,"card-img","img-fluid"],[1,"card-img-overlay","p-0",2,"top","auto"],[1,"card-footer","bg-transparent"],["src","assets/images/small/img-6.jpg","alt","Card image cap",1,"card-img-top","img-fluid"],["src","assets/images/small/img-7.jpg","alt","Card image cap",1,"card-img-bottom","img-fluid"],["src","assets/images/small/img-8.jpg","alt","Card image cap",1,"card-img","rounded-0","img-fluid"],["src","assets/images/small/img-10.jpg","alt","Card image cap",1,"card-img","rounded-0","img-fluid"],["src","assets/images/small/img-11.jpg","alt","Card image cap",1,"card-img-top","img-fluid"],["src","assets/images/small/img-11.jpg","alt","Card image cap",1,"card-img-bottom","img-fluid"],[1,"col-xxl-6"],[1,"row","g-0"],[1,"col-md-4"],["src","assets/images/small/img-12.jpg","alt","Card image",1,"rounded-start","img-fluid","h-100","object-fit-cover"],[1,"col-md-8"],[1,"card-text","mb-2"],["src","assets/images/small/img-4.jpg","alt","Card image",1,"rounded-end","img-fluid","h-100","object-fit-cover"],["src","assets/images/small/img-9.jpg","alt","Card image",1,"rounded-start","img-fluid","h-100","object-fit-cover"],["src","assets/images/small/img-2.jpg","alt","Card image",1,"rounded-end","img-fluid","h-100","object-fit-cover"],[1,"col-xxl-4"],[1,"card","card-primary"],[1,"flex-grow-1","ms-3"],[1,"fw-medium"],[1,"text-center"],[1,"ri-arrow-right-s-line","align-middle","lh-1"],[1,"card","card-success"],["src","assets/images/users/avatar-2.jpg","alt","",1,"avatar-sm","rounded-circle"],[1,"card","card-info"],[1,"card","card-warning"],[1,"card","card-danger"],[1,"card","card-dark"],[1,"card","card-secondary"],["src","assets/images/users/avatar-7.jpg","alt","",1,"avatar-sm","rounded-circle"],[1,"card","card-light"],["src","assets/images/users/avatar-8.jpg","alt","",1,"avatar-sm","rounded-circle"],["href","javascript:void(0);",1,"text-body"],[1,"card","border","card-border-primary"],[1,"float-end"],[1,"badge","bg-danger","align-middle","fs-10"],["href","javascript:void(0);",1,"link-primary","fw-medium"],[1,"ri-arrow-right-line","align-middle"],[1,"card","border","card-border-success"],[1,"badge","bg-success","align-middle","fs-10"],["href","javascript:void(0);",1,"link-success","fw-medium"],[1,"card","border","card-border-info"],[1,"badge","bg-info","align-middle","fs-10"],["href","javascript:void(0);",1,"link-info","fw-medium"],[1,"card","border","card-border-warning"],[1,"badge","bg-warning","align-middle","fs-10"],["href","javascript:void(0);",1,"link-warning","fw-medium"],[1,"card","border","card-border-danger"],["href","javascript:void(0);",1,"link-danger","fw-medium"],[1,"card","border","card-border-dark"],["href","javascript:void(0);",1,"text-body","fw-medium"],[1,"card","border","card-border-secondary"],["href","javascript:void(0);",1,"link-secondary","fw-medium"],[1,"card","border","card-border-light"],[1,"card-group"],[1,"card","mb-4"],["src","assets/images/small/img-4.jpg","alt","Card image cap",1,"card-img-top","img-fluid"],["src","assets/images/small/img-5.jpg","alt","Card image cap",1,"card-img-top","img-fluid"],[1,"row","g-3"],[1,"col-xxl","col-6"],[1,"card","h-100"],["src","assets/images/small/img-11.jpg","alt","Card image cap",1,"img-fluid"],["src","assets/images/small/img-10.jpg","alt","Card image cap",1,"card-img-top","img-fluid"],[1,"col-sm-12"],[1,"justify-content-between","d-flex","align-items-center","mt-5","mb-4"],[1,"row",3,"options"],["ngxMasonryItem","",1,"col-sm-6","col-lg-4"],["src","assets/images/small/img-3.jpg","alt","...",1,"card-img-top"],["src","assets/images/small/img-7.jpg","alt","...",1,"card-img"],[1,"card","p-3"],[1,"fs-15","mb-0"],[1,"card","bg-primary","text-white","text-center","p-3"],[1,"card-blockquote","m-0"],[1,"blockquote-footer","text-white","font-size-12","mt-0","mb-0"],["title","Source Title"],[1,"card","text-center"],["href","javascript:void(0);",1,"btn","btn-primary","stretched-link"],[1,"col-xl-8"],[1,"d-flex","position-relative"],["src","assets/images/users/avatar-3.jpg","alt","...",1,"flex-shrink-0","me-3","avatar-xl","rounded"],[1,"mt-0"],["href","javascript:void(0);",1,"stretched-link"],[1,"row","g-0","bg-light","position-relative"],[1,"col-md-5"],["src","assets/images/small/img-4.jpg","alt","...",1,"rounded-start","img-fluid"],[1,"col-md-7","p-4"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3),n(4,"img",4),t(5,"div",5)(6,"h4",6),e(7,"Web Developer"),i(),t(8,"p",7),e(9,"At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called."),i(),t(10,"div",8)(11,"a",9),e(12,"Submit"),i()()()()(),t(13,"div",2)(14,"div",3),n(15,"img",10),t(16,"div",5)(17,"h4",6),e(18,"How apps is changing the IT world"),i(),t(19,"p",11),e(20,"Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs."),i()(),t(21,"div",12)(22,"a",13),e(23,"Read More "),n(24,"i",14),i(),t(25,"a",15),e(26,"Bookmark "),n(27,"i",16),i()()()(),t(28,"div",2)(29,"div",3),n(30,"img",17),t(31,"div",5)(32,"p",7),e(33,"We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all making mistakes."),i()(),t(34,"ul",18)(35,"li",19),e(36,"An item"),i(),t(37,"li",19),e(38,"A second item"),i(),t(39,"li",19),e(40,"A third item"),i()()()(),t(41,"div",2)(42,"div",3)(43,"div",5)(44,"h4",6),e(45,"What planning process needs ?"),i(),t(46,"h6",20),e(47,"Development"),i()(),n(48,"img",21),t(49,"div",5)(50,"p",7),e(51,"Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services."),i()(),t(52,"div",12)(53,"a",13),e(54,"Read More "),n(55,"i",14),i(),t(56,"a",15),e(57,"Bookmark "),n(58,"i",16),i()()()()(),t(59,"div",1)(60,"div",22)(61,"div",23)(62,"h5",24),e(63,"Using Grid Markup"),i()(),t(64,"div",25)(65,"div",26)(66,"div",27)(67,"div",28)(68,"div",29),n(69,"img",30),i(),t(70,"div",31)(71,"h5",32),e(72,"Oliver Phillips"),i(),t(73,"p",33),e(74,"Digital Marketing"),i()()(),t(75,"h6",34),e(76,"$15,548"),i(),t(77,"p",35),e(78,"Expense Account"),i(),t(79,"a",36),e(80,"See Details"),i()()(),t(81,"div",26)(82,"div",27)(83,"div",28)(84,"div",29),n(85,"img",37),i(),t(86,"div",31)(87,"h5",32),e(88,"Natasha Carey"),i(),t(89,"p",33),e(90,"Manager"),i()()(),t(91,"h6",34),e(92,"$8,785"),i(),t(93,"p",35),e(94,"Expense Account"),i(),t(95,"a",36),e(96,"See Details"),i()()(),t(97,"div",26)(98,"div",27)(99,"div",28)(100,"div",29),n(101,"img",38),i(),t(102,"div",31)(103,"h5",32),e(104,"Bethany Johnson"),i(),t(105,"p",33),e(106,"Development"),i()()(),t(107,"h6",34),e(108,"$1,542"),i(),t(109,"p",35),e(110,"Expense Account"),i(),t(111,"a",36),e(112,"See Details"),i()()(),t(113,"div",26)(114,"div",27)(115,"div",28)(116,"div",29),n(117,"img",39),i(),t(118,"div",31)(119,"h5",32),e(120,"Erica Kernan"),i(),t(121,"p",33),e(122,"Fashion Designer"),i()()(),t(123,"h6",34),e(124,"$798"),i(),t(125,"p",35),e(126,"Expense Account"),i(),t(127,"a",36),e(128,"See Details"),i()()(),t(129,"div",26)(130,"div",27)(131,"div",28)(132,"div",29),n(133,"img",40),i(),t(134,"div",31)(135,"h5",32),e(136,"Lewis Pratt"),i(),t(137,"p",33),e(138,"Design"),i()()(),t(139,"h6",34),e(140,"$2,856"),i(),t(141,"p",35),e(142,"Expense Account"),i(),t(143,"a",36),e(144,"See Details"),i()()()()()(),t(145,"div",1)(146,"div",22)(147,"div",23)(148,"h5",24),e(149,"Card Text Alignment"),i()(),t(150,"div",1)(151,"div",41)(152,"div",27)(153,"div",42)(154,"div",43),n(155,"i",44),i()(),t(156,"h4",45),e(157,"Text Application"),i(),t(158,"p",35),e(159,"Send a link to apply on mobile device. Appropriately communicate one-to-one technology."),i(),t(160,"a",46),e(161,"Apply Now"),i()()(),t(162,"div",41)(163,"div",47)(164,"div",48)(165,"div",43),n(166,"i",49),i()(),t(167,"h4",45),e(168,"Add New Application"),i(),t(169,"p",35),e(170,"Send a link to apply on mobile device. Appropriately communicate one-to-one technology."),i(),t(171,"a",46),e(172,"Add New"),i()()(),t(173,"div",41)(174,"div",50)(175,"div",51)(176,"div",43),n(177,"i",52),i()(),t(178,"h4",45),e(179,"Text Application"),i(),t(180,"p",35),e(181,"Send a link to apply on mobile device. Appropriately communicate one-to-one technology."),i(),t(182,"a",46),e(183,"Add New"),i()()()()()(),t(184,"div",1)(185,"div",22)(186,"div",23)(187,"h5",24),e(188,"Card Header and Footer"),i()(),t(189,"div",1)(190,"div",41)(191,"div",3)(192,"div",53),n(193,"button",54),t(194,"h6",55),e(195,"Hi, Erica Kernan"),i()(),t(196,"div",5)(197,"h6",45),e(198,"How to get creative in your work ?"),i(),t(199,"p",56),e(200,"A business consulting agency is involved in the planning, implementation, and education of businesses. Miss told ham dull knew see she spot near can. Spirit her entire her called."),i()(),t(201,"div",12)(202,"a",57),e(203,"Read More "),n(204,"i",58),i(),t(205,"p",33),e(206,"1 days Ago"),i()()()(),t(207,"div",41)(208,"div",3)(209,"div",53),n(210,"button",54),t(211,"h6",55),e(212,"Invoice"),t(213,"span",59),e(214,"#45155468"),i()()(),t(215,"div",5)(216,"h6",45),e(217,"What planning process needs ?"),i(),t(218,"p",56),e(219,"Intrinsically incubate intuitive opportunities and real-time potentialities for change for interoperable meta-services itself or distract the viewer's attention from the layout."),i()(),t(220,"div",12)(221,"a",57),e(222,"Payment Now "),n(223,"i",58),i(),t(224,"p",33),e(225,"5 days Left"),i()()()(),t(226,"div",41)(227,"div",3)(228,"div",53)(229,"h6",55),e(230,"Creative Agency Quote"),i()(),t(231,"div",5)(232,"blockquote",60)(233,"p",61),e(234,"There are many variations of passages of Lorem Ipsum available."),i(),t(235,"figure",62)(236,"blockquote",63)(237,"p",64),e(238,'"A business consulting agency is involved in the planning, implementation, and education of businesses."'),i()(),t(239,"figcaption",65),e(240," Creative Agency"),t(241,"cite",66),e(242," Alice Mellor"),i()()()()()()()()()(),t(243,"div",1)(244,"div",67)(245,"div",3)(246,"div",5)(247,"h4",68),n(248,"i",69),e(249," Natasha Carey"),i(),t(250,"p",70),e(251,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible."),i(),t(252,"p",33),e(253,"This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism."),i()(),t(254,"div",71)(255,"a",72),e(256,"View All Notification (2) "),n(257,"i",58),i()()()(),t(258,"div",67)(259,"div",3)(260,"div",53)(261,"span",73),e(262,"Overview"),i(),t(263,"h6",45),e(264,"Give your text a good structure"),i(),t(265,"p",74),e(266,"Fantastic Design"),i()(),t(267,"div",5)(268,"p",70),e(269," Contrary to popular belief, you don\u2019t have to work endless nights and hours to create a "),t(270,"a",75)(271,"b"),e(272,"Fantastic Design"),i()(),e(273," by using complicated 3D elements. Flat design is your friend. Remember that. And the great thing about flat design is that it has become more and more popular over the years. "),i(),t(274,"p",33),e(275,"In some designs, you might adjust your tracking to create a certain artistic effect."),i()()()(),t(276,"div",67)(277,"div",3)(278,"div",53)(279,"h6",55),n(280,"i",76),e(281," You've made it!"),i()(),t(282,"div",5)(283,"p",70),e(284,"After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing. Each design is a new, unique piece of art birthed into this world."),i(),t(285,"p",33),e(286,"Art party locavore wolf cliche high life echo park Austin."),i()(),t(287,"div",12)(288,"div",77)(289,"a",78),n(290,"i",79),e(291," Close"),i(),t(292,"a",80),e(293,"Read More"),i()()()()()(),t(294,"div",1)(295,"div",67)(296,"div",3)(297,"div",53),n(298,"button",54),t(299,"h6",55),e(300,"Employee Card"),i()(),t(301,"div",81)(302,"div",82),n(303,"img",83),i(),t(304,"h5",32),e(305,"Gabriel Palmer"),i(),t(306,"p",33),e(307,"Graphic Designer"),i()(),t(308,"div",71)(309,"ul",84)(310,"li",85)(311,"a",86),n(312,"i",87),i()(),t(313,"li",85)(314,"a",88),n(315,"i",89),i()(),t(316,"li",85)(317,"a",90),n(318,"i",91),i()(),t(319,"li",85)(320,"a",92),n(321,"i",93),i()()()()()(),t(322,"div",67)(323,"div",3)(324,"div",53),n(325,"button",54),t(326,"h6",55),e(327,"Employee Card"),i()(),t(328,"div",81)(329,"div",82),n(330,"img",94),i(),t(331,"h5",32),e(332,"Amelie Townsend"),i(),t(333,"p",33),e(334,"Project Manager"),i()(),t(335,"div",71)(336,"ul",84)(337,"li",85)(338,"a",86),n(339,"i",87),i()(),t(340,"li",85)(341,"a",88),n(342,"i",89),i()(),t(343,"li",85)(344,"a",90),n(345,"i",91),i()(),t(346,"li",85)(347,"a",92),n(348,"i",93),i()()()()()(),t(349,"div",67)(350,"div",3)(351,"div",53),n(352,"button",54),t(353,"h6",55),e(354,"Employee Card"),i()(),t(355,"div",81)(356,"div",82),n(357,"img",95),i(),t(358,"h5",32),e(359,"Jeffrey Montgomery"),i(),t(360,"p",33),e(361,"UI/UX Designer"),i()(),t(362,"div",71)(363,"ul",84)(364,"li",85)(365,"a",86),n(366,"i",87),i()(),t(367,"li",85)(368,"a",88),n(369,"i",89),i()(),t(370,"li",85)(371,"a",90),n(372,"i",91),i()(),t(373,"li",85)(374,"a",92),n(375,"i",93),i()()()()()()(),t(376,"div",1)(377,"div",96)(378,"div",3)(379,"div",53)(380,"div",97)(381,"div",98)(382,"h6",55),e(383,"Card with Spinner Loader"),i()(),t(384,"div",29)(385,"ul",99)(386,"li",85)(387,"a",100),n(388,"i",101),i()(),t(389,"li",85)(390,"a",102),n(391,"i",103)(392,"i",104),i()(),t(393,"li",85),n(394,"button",105),i()()()()(),t(395,"div",106)(396,"div",107)(397,"div",29),n(398,"i",108),i(),t(399,"div",109),e(400," Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates. "),i()(),t(401,"div",110)(402,"div",29),n(403,"i",108),i(),t(404,"div",109),e(405," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()(),t(406,"div",110)(407,"div",29),n(408,"i",108),i(),t(409,"div",109),e(410," This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard. "),i()()()()(),t(411,"div",111)(412,"div",3)(413,"div",53)(414,"div",97)(415,"div",98)(416,"h6",55),e(417,"Card with Growing Spinner Loader"),i()(),t(418,"div",29)(419,"ul",99)(420,"li",85)(421,"a",112),n(422,"i",101),i()(),t(423,"li",85)(424,"a",102),n(425,"i",103)(426,"i",104),i()(),t(427,"li",85),n(428,"button",113),i()()()()(),t(429,"div",114)(430,"div",107)(431,"div",29),n(432,"i",108),i(),t(433,"div",109),e(434," Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates. "),i()(),t(435,"div",110)(436,"div",29),n(437,"i",108),i(),t(438,"div",109),e(439," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()(),t(440,"div",110)(441,"div",29),n(442,"i",108),i(),t(443,"div",109),e(444," This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard. "),i()()()()(),t(445,"div",115)(446,"div",3)(447,"div",53)(448,"div",97)(449,"div",98)(450,"h6",55),e(451,"Card with Custom Loader"),i()(),t(452,"div",29)(453,"ul",99)(454,"li",85)(455,"a",116),n(456,"i",101),i()(),t(457,"li",85)(458,"a",102),n(459,"i",103)(460,"i",104),i()(),t(461,"li",85),n(462,"button",117),i()()()()(),t(463,"div",118)(464,"div",107)(465,"div",29),n(466,"i",108),i(),t(467,"div",109),e(468," Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates. "),i()(),t(469,"div",110)(470,"div",29),n(471,"i",108),i(),t(472,"div",109),e(473," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()(),t(474,"div",110)(475,"div",29),n(476,"i",108),i(),t(477,"div",109),e(478," This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard. "),i()()()()()(),t(479,"div",1)(480,"div",22)(481,"div",23)(482,"h5",119),e(483,"Card Image Caps & Overlays"),i()(),t(484,"div",1)(485,"div",41)(486,"div",120),n(487,"img",121),t(488,"div",122)(489,"div",123)(490,"h4",124),e(491,"Design your apps in your own way"),i()(),t(492,"div",5)(493,"p",125),e(494,"Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your unpleasant for the reader. "),i(),t(495,"p",7)(496,"small",126),e(497,"Last updated 3 mins ago"),i()()(),t(498,"div",127)(499,"a",128),e(500,"Read More "),n(501,"i",58),i()()()()(),t(502,"div",41)(503,"div",120),n(504,"img",129),t(505,"div",130)(506,"div",123)(507,"h4",124),e(508,"Design your apps in your own way"),i()(),t(509,"div",5)(510,"p",125),e(511,"Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your unpleasant for the reader. "),i(),t(512,"p",7)(513,"small",126),e(514,"Last updated 3 mins ago"),i()()()()()(),t(515,"div",41)(516,"div",120),n(517,"img",131),t(518,"div",132)(519,"div",5)(520,"p",125),e(521,"Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your unpleasant for the reader. "),i(),t(522,"p",7)(523,"small",126),e(524,"Last updated 3 mins ago"),i()()(),t(525,"div",133)(526,"h4",124),e(527,"Design your apps in your own way"),i()()()()()(),t(528,"div",1)(529,"div",41)(530,"div",3),n(531,"img",134),t(532,"div",5)(533,"h4",6),e(534,"A day in the of a professional fashion designer"),i(),t(535,"p",35),e(536," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco."),i(),t(537,"p",7),e(538," Last updated 3 mins ago "),i()()()(),t(539,"div",41)(540,"div",3)(541,"div",5)(542,"h4",6),e(543,"A day in the of a professional fashion designer"),i(),t(544,"p",35),e(545," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco."),i(),t(546,"p",7),e(547," Last updated 3 mins ago "),i()(),n(548,"img",135),i()(),t(549,"div",41)(550,"div",3)(551,"div",5)(552,"h4",6),e(553,"A day in the of a professional fashion designer"),i(),t(554,"p",35),e(555," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."),i()(),n(556,"img",136),t(557,"div",12)(558,"p",11),e(559," Last updated 3 mins ago "),i()()()(),t(560,"div",41)(561,"div",3)(562,"div",53)(563,"h4",55),e(564,"A day in the of a professional fashion designer"),i()(),t(565,"div",5)(566,"p",35),e(567," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."),i()(),n(568,"img",137),t(569,"div",12)(570,"p",11),e(571," Last updated 3 mins ago "),i()()()(),t(572,"div",41)(573,"div",3),n(574,"img",138),t(575,"div",53)(576,"h4",55),e(577,"A day in the of a professional fashion designer"),i()(),t(578,"div",5)(579,"p",35),e(580," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."),i()(),t(581,"div",12)(582,"p",11),e(583," Last updated 3 mins ago "),i()()()(),t(584,"div",41)(585,"div",3)(586,"div",53)(587,"h4",55),e(588,"A day in the of a professional fashion designer"),i()(),t(589,"div",5)(590,"p",35),e(591," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. ommodo enim craft beer mlkshk aliquip jean shorts ullamco."),i(),t(592,"p",11),e(593," Last updated 3 mins ago "),i()(),n(594,"img",139),i()()()()(),t(595,"div",1)(596,"div",22)(597,"div",23)(598,"h5",24),e(599,"Horizontal Card"),i()(),t(600,"div",1)(601,"div",140)(602,"div",3)(603,"div",141)(604,"div",142),n(605,"img",143),i(),t(606,"div",144)(607,"div",53)(608,"h5",55),e(609,"Give your text a good structure"),i()(),t(610,"div",5)(611,"p",145),e(612,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i(),t(613,"p",7)(614,"small",70),e(615,"Last updated 3 mins ago"),i()()()()()()(),t(616,"div",140)(617,"div",3)(618,"div",141)(619,"div",144)(620,"div",53)(621,"h5",55),e(622,"Manage white space in responsive layouts ?"),i()(),t(623,"div",5)(624,"p",145),e(625,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i(),t(626,"p",7)(627,"small",70),e(628,"Last updated 3 mins ago"),i()()()(),t(629,"div",142),n(630,"img",146),i()()()(),t(631,"div",140)(632,"div",3)(633,"div",141)(634,"div",142),n(635,"img",147),i(),t(636,"div",144)(637,"div",5)(638,"h5",6),e(639,"Give your text a good structure"),i(),t(640,"p",56),e(641,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()(),t(642,"div",12)(643,"p",7)(644,"small",70),e(645,"Last updated 3 mins ago"),i()()()()()()(),t(646,"div",140)(647,"div",3)(648,"div",141)(649,"div",144)(650,"div",5)(651,"h5",6),e(652,"Manage white space in responsive layouts ?"),i(),t(653,"p",56),e(654,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()(),t(655,"div",12)(656,"p",7)(657,"small",70),e(658,"Last updated 3 mins ago"),i()()()(),t(659,"div",142),n(660,"img",148),i()()()()()()(),t(661,"div",1)(662,"div",22)(663,"div",23)(664,"h5",24),e(665,"Card Background Color"),i()(),t(666,"div",1)(667,"div",149)(668,"div",150)(669,"div",5)(670,"div",97)(671,"div",29),n(672,"img",30),i(),t(673,"div",151)(674,"p",7)(675,"span",152),e(676,"Jeffrey Montgomery"),i(),e(677," (Graphic Designer) started a new conversation."),i()()()(),t(678,"div",12)(679,"div",153)(680,"a",128),e(681,"Connect Now "),n(682,"i",154),i()()()()(),t(683,"div",149)(684,"div",155)(685,"div",5)(686,"div",97)(687,"div",29),n(688,"img",156),i(),t(689,"div",151)(690,"p",7)(691,"span",152),e(692,"Charles Dickens"),i(),e(693," (Financial Analyst) started a new conversation."),i()()()(),t(694,"div",12)(695,"div",153)(696,"a",128),e(697,"Connect Now "),n(698,"i",154),i()()()()(),t(699,"div",149)(700,"div",157)(701,"div",5)(702,"div",97)(703,"div",29),n(704,"img",38),i(),t(705,"div",151)(706,"p",7)(707,"span",152),e(708,"Oliver Phillips"),i(),e(709," (UI/UX Designer) started a new conversation."),i()()()(),t(710,"div",12)(711,"div",153)(712,"a",128),e(713,"Connect Now "),n(714,"i",154),i()()()()()()()(),t(715,"div",1)(716,"div",149)(717,"div",158)(718,"div",5)(719,"div",97)(720,"div",29),n(721,"img",37),i(),t(722,"div",151)(723,"p",7)(724,"span",152),e(725,"Rebecca Swartz"),i(),e(726," (Graphic Designer) started a new conversation."),i()()()(),t(727,"div",12)(728,"div",153)(729,"a",128),e(730,"Connect Now "),n(731,"i",154),i()()()()(),t(732,"div",149)(733,"div",159)(734,"div",5)(735,"div",97)(736,"div",29),n(737,"img",40),i(),t(738,"div",151)(739,"p",7)(740,"span",152),e(741,"Betty Richards"),i(),e(742," (Back End Developer) started a new conversation."),i()()()(),t(743,"div",12)(744,"div",153)(745,"a",128),e(746,"Connect Now "),n(747,"i",154),i()()()()(),t(748,"div",149)(749,"div",160)(750,"div",5)(751,"div",97)(752,"div",29),n(753,"img",39),i(),t(754,"div",151)(755,"p",7)(756,"span",152),e(757,"Brooke Hayes"),i(),e(758," (Founder & CEO) started a new conversation."),i()()()(),t(759,"div",12)(760,"div",153)(761,"a",128),e(762,"Connect Now "),n(763,"i",154),i()()()()()(),t(764,"div",1)(765,"div",149)(766,"div",161)(767,"div",5)(768,"div",97)(769,"div",29),n(770,"img",162),i(),t(771,"div",151)(772,"p",7)(773,"span",152),e(774,"Bethany Johnson"),i(),e(775," (Team Leader) started a new conversation."),i()()()(),t(776,"div",12)(777,"div",153)(778,"a",128),e(779,"Connect Now "),n(780,"i",154),i()()()()(),t(781,"div",149)(782,"div",163)(783,"div",5)(784,"div",97)(785,"div",29),n(786,"img",164),i(),t(787,"div",151)(788,"p",7)(789,"span",152),e(790,"Amelie Townsend"),i(),e(791," (UI/UX Designer) started a new conversation."),i()()()(),t(792,"div",12)(793,"div",153)(794,"a",165),e(795,"Connect Now "),n(796,"i",154),i()()()()()(),t(797,"div",1)(798,"div",22)(799,"div",23)(800,"h5",24),e(801,"Card Border Color"),i()(),t(802,"div",1)(803,"div",149)(804,"div",166)(805,"div",53)(806,"span",167),e(807,"75%"),i(),t(808,"h6",55),e(809,"Handle to Forcast "),t(810,"span",168),e(811,"Poor"),i()()(),t(812,"div",5)(813,"p",7),e(814,"Whether article spirits new her covered hastily sitting her. Money witty books nor son add build on the card Chicken age had evening believe but proceed pretend mrs."),i(),t(815,"div",8)(816,"a",169),e(817,"Read More "),n(818,"i",170),i()()()()(),t(819,"div",149)(820,"div",171)(821,"div",53)(822,"span",167),e(823,"100%"),i(),t(824,"h6",55),e(825,"Quality Forcast "),t(826,"span",172),e(827,"Excellent"),i()()(),t(828,"div",5)(829,"p",7),e(830,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i(),t(831,"div",8)(832,"a",173),e(833,"Read More "),n(834,"i",170),i()()()()(),t(835,"div",149)(836,"div",174)(837,"div",53)(838,"h6",55),e(839,"Check your E-mails "),t(840,"span",175),e(841,"In Process"),i()()(),t(842,"div",5)(843,"p",7),e(844,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i(),t(845,"div",8)(846,"a",176),e(847,"Read More "),n(848,"i",170),i()()()()()()()(),t(849,"div",1)(850,"div",149)(851,"div",177)(852,"div",53)(853,"h6",55),e(854,"Check your Payment "),t(855,"span",178),e(856,"Pending"),i()()(),t(857,"div",5)(858,"p",7),e(859,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i(),t(860,"div",8)(861,"a",179),e(862,"Read More "),n(863,"i",170),i()()()()(),t(864,"div",149)(865,"div",180)(866,"div",53)(867,"h6",55),e(868,"Your Ordered Cancel "),t(869,"span",168),e(870,"Cancel"),i()()(),t(871,"div",5)(872,"p",7),e(873,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i(),t(874,"div",8)(875,"a",181),e(876,"Read More "),n(877,"i",170),i()()()()(),t(878,"div",149)(879,"div",182)(880,"div",53)(881,"h6",55),e(882,"Handle to Forcast"),i()(),t(883,"div",5)(884,"p",7),e(885,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i(),t(886,"div",8)(887,"a",183),e(888,"Read More "),n(889,"i",170),i()()()()()(),t(890,"div",1)(891,"div",149)(892,"div",184)(893,"div",53)(894,"h6",55),e(895,"Quality Forcast "),i()(),t(896,"div",5)(897,"p",7),e(898,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i(),t(899,"div",8)(900,"a",185),e(901,"Read More "),n(902,"i",170),i()()()()(),t(903,"div",149)(904,"div",186)(905,"div",53)(906,"h6",55),e(907,"Check your E-mails"),i()(),t(908,"div",5)(909,"p",7),e(910,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i(),t(911,"div",8)(912,"a",183),e(913,"Read More "),n(914,"i",170),i()()()()()(),t(915,"div",1)(916,"div",22)(917,"div",23)(918,"h5",24),e(919,"Card Groups"),i()(),t(920,"div",187)(921,"div",188),n(922,"img",189),t(923,"div",5)(924,"h4",45),e(925,"A day in the of a professional fashion designer"),i(),t(926,"p",7),e(927,"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),i()(),t(928,"div",12)(929,"p",7)(930,"small",70),e(931,"Last updated 3 mins ago"),i()()()(),t(932,"div",188),n(933,"img",190),t(934,"div",5)(935,"h4",45),e(936,"Manage white space in responsive layouts ?"),i(),t(937,"p",7),e(938,"This card has supporting text below as a natural lead-in to additional content."),i()(),t(939,"div",12)(940,"p",7)(941,"small",70),e(942,"Last updated 3 mins ago"),i()()()(),t(943,"div",188),n(944,"img",134),t(945,"div",5)(946,"h4",45),e(947,"Give your text a good structure?"),i(),t(948,"p",7),e(949,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."),i()(),t(950,"div",12)(951,"p",7)(952,"small",70),e(953,"Last updated 3 mins ago"),i()()()()()()(),t(954,"div",191)(955,"div",23)(956,"h5",24),e(957,"Grid Card Groups"),i()(),t(958,"div",192)(959,"div",193)(960,"div",53)(961,"h4",55),e(962,"A day in the of a professional fashion designer"),i()(),n(963,"img",194),t(964,"div",5)(965,"p",7),e(966,"This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard."),i()(),t(967,"div",12)(968,"p",7)(969,"small",70),e(970,"Last updated 3 mins ago"),i()()()()(),t(971,"div",192)(972,"div",193),n(973,"img",195),t(974,"div",5)(975,"h4",45),e(976,"Give your text a good structure?"),i(),t(977,"p",7),e(978,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."),i()(),t(979,"div",12)(980,"p",7)(981,"small",70),e(982,"Last updated 3 mins ago"),i()()()()(),t(983,"div",192)(984,"div",193),n(985,"img",190),t(986,"div",5)(987,"h4",45),e(988,"Manage white space in responsive layouts ?"),i(),t(989,"p",7),e(990,"Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. ommodo enim craft beer mlkshk aliquip jean shorts ullamco."),i()(),t(991,"div",12)(992,"p",7)(993,"small",70),e(994,"Last updated 3 mins ago"),i()()()()()(),t(995,"div",1)(996,"div",196)(997,"div",197)(998,"h5",24),e(999,"Cards Masonry"),i()(),t(1e3,"ngx-masonry",198)(1001,"div",199)(1002,"div",3),n(1003,"img",200),t(1004,"div",5)(1005,"h5",32),e(1006,"Card title that wraps to a new line"),i(),t(1007,"p",7),e(1008,"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),i()()()(),t(1009,"div",199)(1010,"div",3)(1011,"div",5)(1012,"h4",6),e(1013,"A day in the of a professional fashion designer"),i(),t(1014,"p",35),e(1015," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."),i()(),n(1016,"img",136),t(1017,"div",12)(1018,"p",11),e(1019," Last updated 3 mins ago "),i()()()(),t(1020,"div",199)(1021,"div",3),n(1022,"img",201),i()(),t(1023,"div",199)(1024,"div",202)(1025,"figure",62)(1026,"blockquote",63)(1027,"p",64),e(1028,'"A business consulting agency is involved in the planning, implementation, and education of businesses."'),i()(),t(1029,"figcaption",65),e(1030," Creative Agency"),t(1031,"cite",66),e(1032," Alice Mellor"),i()()()()(),t(1033,"div",199)(1034,"div",3)(1035,"div",53),n(1036,"button",54),t(1037,"h6",203),e(1038,"Hi, Erica Kernan"),i()(),t(1039,"div",5)(1040,"h6",45),e(1041,"How to get creative in your work ?"),i(),t(1042,"p",56),e(1043,"A business consulting agency is involved in the planning, implementation, and education of businesses. Miss told ham dull knew see she spot near can. Spirit her entire her called."),i()(),t(1044,"div",12)(1045,"a",57),e(1046,"Read More "),n(1047,"i",58),i(),t(1048,"p",33),e(1049,"1 days Ago"),i()()()(),t(1050,"div",199)(1051,"div",204)(1052,"blockquote",205)(1053,"p"),e(1054,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat."),i(),t(1055,"footer",206),e(1056," Someone famous in "),t(1057,"cite",207),e(1058,"Source Title"),i()()()()(),t(1059,"div",199)(1060,"div",155)(1061,"div",5)(1062,"div",97)(1063,"div",29),n(1064,"img",156),i(),t(1065,"div",151)(1066,"p",7)(1067,"span",152),e(1068,"Charles Dickens"),i(),e(1069," (Financial Analyst) started a new conversation."),i()()()(),t(1070,"div",12)(1071,"div",153)(1072,"a",128),e(1073,"Connect Now "),n(1074,"i",154),i()()()()(),t(1075,"div",199)(1076,"div",3)(1077,"div",5)(1078,"h5",32),e(1079,"Card title"),i(),t(1080,"p",7),e(1081,"This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall."),i(),t(1082,"p",7)(1083,"small",70),e(1084,"Last updated 3 mins ago"),i()()()()(),t(1085,"div",199)(1086,"div",208)(1087,"div",5)(1088,"h5",32),e(1089,"Card title"),i(),t(1090,"p",7),e(1091,"This card has a regular title and short paragraphy of text below it."),i(),t(1092,"p",7)(1093,"small",70),e(1094,"Last updated 3 mins ago"),i()()()()()()()(),t(1095,"div",1)(1096,"div",22)(1097,"div",23)(1098,"h5",24),e(1099,"Stretched Link"),i()(),t(1100,"div",1)(1101,"div",67)(1102,"div",3),n(1103,"img",200),t(1104,"div",5)(1105,"h5",45),e(1106,"Card with stretched link"),i(),t(1107,"p",7),e(1108,"Some quick example text to build on the card title and make up the bulk of the card's content."),i(),t(1109,"a",209),e(1110,"Go somewhere"),i()()()(),t(1111,"div",210)(1112,"div",3)(1113,"div",5)(1114,"div",211),n(1115,"img",212),t(1116,"div")(1117,"h5",213),e(1118,"Custom component with stretched link"),i(),t(1119,"p"),e(1120,"This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size."),i(),t(1121,"a",214),e(1122,"Go somewhere"),i()()()()(),t(1123,"div",3)(1124,"div",5)(1125,"div",215)(1126,"div",216),n(1127,"img",217),i(),t(1128,"div",218)(1129,"h5",213),e(1130,"Columns with stretched link"),i(),t(1131,"p"),e(1132,"Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size."),i(),t(1133,"a",214),e(1134,"Go somewhere"),i()()()()()()()()()),s&2&&(p("breadcrumbItems",a.breadCrumbItems),m(1e3),p("options",a.myOptions))},dependencies:[D,ot,xi],encapsulation:2})}}return l})();function In(l,u){l&1&&n(0,"img",11)}function Mn(l,u){l&1&&n(0,"img",12)}function Dn(l,u){l&1&&n(0,"img",13)}function jn(l,u){l&1&&n(0,"img",14)}function Ln(l,u){l&1&&n(0,"img",15)}function Nn(l,u){l&1&&n(0,"img",16)}function Bn(l,u){l&1&&n(0,"img",17)}function qn(l,u){l&1&&n(0,"img",18)}function Pn(l,u){l&1&&n(0,"img",19)}function Rn(l,u){l&1&&(n(0,"img",20),t(1,"div",21)(2,"h5",22),e(3,"First slide label"),i(),t(4,"p"),e(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),i()())}function Vn(l,u){l&1&&(n(0,"img",23),t(1,"div",21)(2,"h5",22),e(3,"Second slide label"),i(),t(4,"p"),e(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),i()())}function Wn(l,u){l&1&&(n(0,"img",24),t(1,"div",21)(2,"h5",22),e(3,"Third slide label"),i(),t(4,"p"),e(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),i()())}function On(l,u){l&1&&n(0,"img",25)}function Fn(l,u){l&1&&n(0,"img",26)}function Un(l,u){l&1&&n(0,"img",27)}var Ci=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Carousel",active:!0}]}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-carousel"]],standalone:!1,decls:74,vars:6,consts:[["title","Carousel",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-title-desc"],[3,"showNavigationArrows","showNavigationIndicators"],["ngbSlide",""],[3,"showNavigationIndicators"],[1,"card-sub-title"],["src","assets/images/small/img-1.jpg","alt","Random first slide",1,"d-block","img-fluid"],["src","assets/images/small/img-2.jpg","alt","Random second slide",1,"d-block","img-fluid"],["src","assets/images/small/img-3.jpg","alt","Random third slide",1,"d-block","img-fluid"],["src","assets/images/small/img-4.jpg","alt","first slide",1,"d-block","img-fluid"],["src","assets/images/small/img-5.jpg","alt","second slide",1,"d-block","img-fluid"],["src","assets/images/small/img-6.jpg","alt","third slide",1,"d-block","img-fluid"],["src","assets/images/small/img-3.jpg","alt","first slide",1,"d-block","img-fluid"],["src","assets/images/small/img-2.jpg","alt","second slide",1,"d-block","img-fluid"],["src","assets/images/small/img-1.jpg","alt","third slide",1,"d-block","img-fluid"],["src","assets/images/small/img-5.jpg","alt","first slide",1,"d-block","img-fluid"],[1,"carousel-caption","d-none","d-md-block"],[1,"text-white"],["src","assets/images/small/img-3.jpg","alt","second slide",1,"d-block","img-fluid"],["src","assets/images/small/img-2.jpg","alt","third slide",1,"d-block","img-fluid"],["src","assets/images/small/img-1.jpg","alt","first slide",1,"animated","fadeIn","d-block","img-fluid"],["src","assets/images/small/img-2.jpg","alt","second slide",1,"animated","fadeIn","d-block","img-fluid"],["src","assets/images/small/img-3.jpg","alt","third slide",1,"animated","fadeIn","d-block","img-fluid"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Slides only"),i(),t(7,"p",6),e(8,"Here\u2019s a carousel with slides only. Note the presence of the "),t(9,"code"),e(10,".d-block"),i(),e(11," and "),t(12,"code"),e(13,".img-fluid"),i(),e(14," on carousel images to prevent browser default image alignment."),i(),t(15,"ngb-carousel",7),h(16,In,1,0,"ng-template",8)(17,Mn,1,0,"ng-template",8)(18,Dn,1,0,"ng-template",8),i()()()(),t(19,"div",2)(20,"div",3)(21,"div",4)(22,"h4",5),e(23,"With controls"),i(),t(24,"p",6),e(25,"Adding in the previous and next controls:"),i(),t(26,"ngb-carousel",9),h(27,jn,1,0,"ng-template",8)(28,Ln,1,0,"ng-template",8)(29,Nn,1,0,"ng-template",8),i()()()()(),t(30,"div",1)(31,"div",2)(32,"div",3)(33,"div",4)(34,"h4",5),e(35,"With indicators"),i(),t(36,"p",6),e(37,"You can also add the indicators to the carousel, alongside the controls, too."),i(),t(38,"ngb-carousel",9),h(39,Bn,1,0,"ng-template",8)(40,qn,1,0,"ng-template",8)(41,Pn,1,0,"ng-template",8),i()()()(),t(42,"div",2)(43,"div",3)(44,"div",4)(45,"h4",5),e(46,"With captions"),i(),t(47,"p",10),e(48,"Add captions to your slides easily with the "),t(49,"code"),e(50,".carousel-caption"),i(),e(51," element within any "),t(52,"code"),e(53,".carousel-item"),i(),e(54,"."),i(),t(55,"ngb-carousel"),h(56,Rn,6,0,"ng-template",8)(57,Vn,6,0,"ng-template",8)(58,Wn,6,0,"ng-template",8),i()()()()(),t(59,"div",1)(60,"div",2)(61,"div",3)(62,"div",4)(63,"h4",5),e(64,"Crossfade"),i(),t(65,"p",10),e(66,"Add "),t(67,"code"),e(68,".carousel-fade"),i(),e(69," to your carousel to animate slides with a fade transition instead of a slide."),i(),t(70,"ngb-carousel",9),h(71,On,1,0,"ng-template",8)(72,Fn,1,0,"ng-template",8)(73,Un,1,0,"ng-template",8),i()()()()()),s&2&&(p("breadcrumbItems",a.breadCrumbItems),m(15),p("showNavigationArrows",a.showNavigationArrows)("showNavigationIndicators",a.showNavigationIndicators),m(11),p("showNavigationIndicators",a.showNavigationIndicators),m(12),p("showNavigationIndicators",!a.showNavigationIndicators),m(32),p("showNavigationIndicators",a.showNavigationIndicators))},dependencies:[D,Ft,Ot],encapsulation:2})}}return l})();function Gn(l,u){l&1&&(t(0,"ngx-simplebar",170)(1,"div",171)(2,"div",172)(3,"div",173)(4,"span",174),n(5,"i",175),i()(),t(6,"div",176)(7,"h6",177),e(8,"Your "),t(9,"b"),e(10,"Elite"),i(),e(11," author Graphic Optimization "),t(12,"span",178),e(13,"reward"),i(),e(14," is ready!"),i(),t(15,"p",179)(16,"span"),n(17,"i",180),e(18," Just 30 sec ago"),i()()(),t(19,"div",181),n(20,"input",182),i()()(),t(21,"div",171)(22,"div",172),n(23,"img",183),t(24,"div",176)(25,"a",184)(26,"h6",185),e(27,"Angela Bernier"),i()(),t(28,"div",186)(29,"p",187),e(30,"Answered to your comment on the cash flow forecast's graph \u{1F514}."),i()(),t(31,"p",179)(32,"span"),n(33,"i",180),e(34," 48 min ago"),i()()(),t(35,"div",181),n(36,"input",182),i()()(),t(37,"div",171)(38,"div",172)(39,"div",173)(40,"span",188),n(41,"i",189),i()(),t(42,"div",176)(43,"h6",190),e(44,"You have received "),t(45,"b",191),e(46,"20"),i(),e(47," new messages in the conversation"),i(),t(48,"p",179)(49,"span"),n(50,"i",180),e(51," 2 hrs ago"),i()()(),t(52,"div",181),n(53,"input",182),i()()(),t(54,"div",171)(55,"div",172),n(56,"img",192),t(57,"div",176)(58,"a",184)(59,"h6",185),e(60,"Maureen Gibson"),i()(),t(61,"div",186)(62,"p",187),e(63,"We talked about a project on linkedin."),i()(),t(64,"p",179)(65,"span"),n(66,"i",180),e(67," 4 hrs ago"),i()()(),t(68,"div",181),n(69,"input",182),i()()(),t(70,"div",193)(71,"button",194),e(72,"View All Notifications "),n(73,"i",195),i()()())}function Yn(l,u){l&1&&(t(0,"ngx-simplebar",170)(1,"div",171)(2,"div",172),n(3,"img",196),t(4,"div",176)(5,"a",184)(6,"h6",185),e(7,"James Lemire"),i()(),t(8,"div",186)(9,"p",187),e(10,"We talked about a project on linkedin."),i()(),t(11,"p",179)(12,"span"),n(13,"i",180),e(14," 30 min ago"),i()()(),t(15,"div",181),n(16,"input",182),i()()(),t(17,"div",171)(18,"div",172),n(19,"img",183),t(20,"div",176)(21,"a",184)(22,"h6",185),e(23,"Angela Bernier"),i()(),t(24,"div",186)(25,"p",187),e(26,"Answered to your comment on the cash flow forecast's graph \u{1F514}."),i()(),t(27,"p",179)(28,"span"),n(29,"i",180),e(30," 2 hrs ago"),i()()(),t(31,"div",181),n(32,"input",182),i()()(),t(33,"div",171)(34,"div",172),n(35,"img",197),t(36,"div",176)(37,"a",184)(38,"h6",185),e(39,"Kenneth Brown"),i()(),t(40,"div",186)(41,"p",187),e(42,"Mentionned you in his comment on \u{1F4C3} invoice #12501."),i()(),t(43,"p",179)(44,"span"),n(45,"i",180),e(46," 10 hrs ago"),i()()(),t(47,"div",181),n(48,"input",182),i()()(),t(49,"div",171)(50,"div",172),n(51,"img",192),t(52,"div",176)(53,"a",184)(54,"h6",185),e(55,"Maureen Gibson"),i()(),t(56,"div",186)(57,"p",187),e(58,"We talked about a project on linkedin."),i()(),t(59,"p",179)(60,"span"),n(61,"i",180),e(62," 3 days ago"),i()()(),t(63,"div",181),n(64,"input",182),i()()(),t(65,"div",193)(66,"button",194),e(67,"View All Messages "),n(68,"i",195),i()()())}function $n(l,u){l&1&&(t(0,"div",198),n(1,"img",199),i(),t(2,"div",200)(3,"h6",201),e(4,"Hey! You have no any notifications "),i()())}function Qn(l,u){l&1&&(t(0,"ngx-simplebar",170)(1,"div",171)(2,"div",172)(3,"div",173)(4,"span",174),n(5,"i",175),i()(),t(6,"div",176)(7,"h6",177),e(8,"Your "),t(9,"b"),e(10,"Elite"),i(),e(11," author Graphic Optimization "),t(12,"span",178),e(13,"reward"),i(),e(14," is ready!"),i(),t(15,"p",179)(16,"span"),n(17,"i",180),e(18," Just 30 sec ago"),i()()(),t(19,"div",181),n(20,"input",182),i()()(),t(21,"div",171)(22,"div",172),n(23,"img",183),t(24,"div",176)(25,"a",184)(26,"h6",185),e(27,"Angela Bernier"),i()(),t(28,"div",186)(29,"p",187),e(30,"Answered to your comment on the cash flow forecast's graph \u{1F514}."),i()(),t(31,"p",179)(32,"span"),n(33,"i",180),e(34," 48 min ago"),i()()(),t(35,"div",181),n(36,"input",182),i()()(),t(37,"div",171)(38,"div",172)(39,"div",173)(40,"span",188),n(41,"i",189),i()(),t(42,"div",176)(43,"h6",190),e(44,"You have received "),t(45,"b",191),e(46,"20"),i(),e(47," new messages in the conversation"),i(),t(48,"p",179)(49,"span"),n(50,"i",180),e(51," 2 hrs ago"),i()()(),t(52,"div",181),n(53,"input",182),i()()(),t(54,"div",171)(55,"div",172),n(56,"img",192),t(57,"div",176)(58,"a",184)(59,"h6",185),e(60,"Maureen Gibson"),i()(),t(61,"div",186)(62,"p",187),e(63,"We talked about a project on linkedin."),i()(),t(64,"p",179)(65,"span"),n(66,"i",180),e(67," 4 hrs ago"),i()()(),t(68,"div",181),n(69,"input",182),i()()(),t(70,"div",193)(71,"button",194),e(72,"View All Notifications "),n(73,"i",195),i()()())}function Jn(l,u){l&1&&(t(0,"ngx-simplebar",170)(1,"div",171)(2,"div",172),n(3,"img",196),t(4,"div",176)(5,"a",184)(6,"h6",185),e(7,"James Lemire"),i()(),t(8,"div",186)(9,"p",187),e(10,"We talked about a project on linkedin."),i()(),t(11,"p",179)(12,"span"),n(13,"i",180),e(14," 30 min ago"),i()()(),t(15,"div",181),n(16,"input",182),i()()(),t(17,"div",171)(18,"div",172),n(19,"img",183),t(20,"div",176)(21,"a",184)(22,"h6",185),e(23,"Angela Bernier"),i()(),t(24,"div",186)(25,"p",187),e(26,"Answered to your comment on the cash flow forecast's graph \u{1F514}."),i()(),t(27,"p",179)(28,"span"),n(29,"i",180),e(30," 2 hrs ago"),i()()(),t(31,"div",181),n(32,"input",182),i()()(),t(33,"div",171)(34,"div",172),n(35,"img",197),t(36,"div",176)(37,"a",184)(38,"h6",185),e(39,"Kenneth Brown"),i()(),t(40,"div",186)(41,"p",187),e(42,"Mentionned you in his comment on \u{1F4C3} invoice #12501."),i()(),t(43,"p",179)(44,"span"),n(45,"i",180),e(46," 10 hrs ago"),i()()(),t(47,"div",181),n(48,"input",182),i()()(),t(49,"div",171)(50,"div",172),n(51,"img",192),t(52,"div",176)(53,"a",184)(54,"h6",185),e(55,"Maureen Gibson"),i()(),t(56,"div",186)(57,"p",187),e(58,"We talked about a project on linkedin."),i()(),t(59,"p",179)(60,"span"),n(61,"i",180),e(62," 3 days ago"),i()()(),t(63,"div",181),n(64,"input",182),i()()(),t(65,"div",193)(66,"button",194),e(67,"View All Messages "),n(68,"i",195),i()()())}function Xn(l,u){l&1&&(t(0,"div",198),n(1,"img",199),i(),t(2,"div",200)(3,"h6",201),e(4,"Hey! You have no any notifications "),i()())}function Kn(l,u){l&1&&(t(0,"ngx-simplebar",170)(1,"div",171)(2,"div",172)(3,"div",173)(4,"span",174),n(5,"i",175),i()(),t(6,"div",176)(7,"h6",177),e(8,"Your "),t(9,"b"),e(10,"Elite"),i(),e(11," author Graphic Optimization "),t(12,"span",178),e(13,"reward"),i(),e(14," is ready!"),i(),t(15,"p",179)(16,"span"),n(17,"i",180),e(18," Just 30 sec ago"),i()()(),t(19,"div",181),n(20,"input",182),i()()(),t(21,"div",171)(22,"div",172),n(23,"img",183),t(24,"div",176)(25,"a",184)(26,"h6",185),e(27,"Angela Bernier"),i()(),t(28,"div",186)(29,"p",187),e(30,"Answered to your comment on the cash flow forecast's graph \u{1F514}."),i()(),t(31,"p",179)(32,"span"),n(33,"i",180),e(34," 48 min ago"),i()()(),t(35,"div",181),n(36,"input",182),i()()(),t(37,"div",171)(38,"div",172)(39,"div",173)(40,"span",188),n(41,"i",189),i()(),t(42,"div",176)(43,"h6",190),e(44,"You have received "),t(45,"b",191),e(46,"20"),i(),e(47," new messages in the conversation"),i(),t(48,"p",179)(49,"span"),n(50,"i",180),e(51," 2 hrs ago"),i()()(),t(52,"div",181),n(53,"input",182),i()()(),t(54,"div",171)(55,"div",172),n(56,"img",192),t(57,"div",176)(58,"a",184)(59,"h6",185),e(60,"Maureen Gibson"),i()(),t(61,"div",186)(62,"p",187),e(63,"We talked about a project on linkedin."),i()(),t(64,"p",179)(65,"span"),n(66,"i",180),e(67," 4 hrs ago"),i()()(),t(68,"div",181),n(69,"input",182),i()()(),t(70,"div",193)(71,"button",194),e(72,"View All Notifications "),n(73,"i",195),i()()())}function Zn(l,u){l&1&&(t(0,"ngx-simplebar",170)(1,"div",171)(2,"div",172),n(3,"img",196),t(4,"div",176)(5,"a",184)(6,"h6",185),e(7,"James Lemire"),i()(),t(8,"div",186)(9,"p",187),e(10,"We talked about a project on linkedin."),i()(),t(11,"p",179)(12,"span"),n(13,"i",180),e(14," 30 min ago"),i()()(),t(15,"div",181),n(16,"input",182),i()()(),t(17,"div",171)(18,"div",172),n(19,"img",183),t(20,"div",176)(21,"a",184)(22,"h6",185),e(23,"Angela Bernier"),i()(),t(24,"div",186)(25,"p",187),e(26,"Answered to your comment on the cash flow forecast's graph \u{1F514}."),i()(),t(27,"p",179)(28,"span"),n(29,"i",180),e(30," 2 hrs ago"),i()()(),t(31,"div",181),n(32,"input",182),i()()(),t(33,"div",171)(34,"div",172),n(35,"img",197),t(36,"div",176)(37,"a",184)(38,"h6",185),e(39,"Kenneth Brown"),i()(),t(40,"div",186)(41,"p",187),e(42,"Mentionned you in his comment on \u{1F4C3} invoice #12501."),i()(),t(43,"p",179)(44,"span"),n(45,"i",180),e(46," 10 hrs ago"),i()()(),t(47,"div",181),n(48,"input",182),i()()(),t(49,"div",171)(50,"div",172),n(51,"img",192),t(52,"div",176)(53,"a",184)(54,"h6",185),e(55,"Maureen Gibson"),i()(),t(56,"div",186)(57,"p",187),e(58,"We talked about a project on linkedin."),i()(),t(59,"p",179)(60,"span"),n(61,"i",180),e(62," 3 days ago"),i()()(),t(63,"div",181),n(64,"input",182),i()()(),t(65,"div",193)(66,"button",194),e(67,"View All Messages "),n(68,"i",195),i()()())}function ea(l,u){l&1&&(t(0,"div",198),n(1,"img",199),i(),t(2,"div",200)(3,"h6",201),e(4,"Hey! You have no any notifications "),i()())}var Ti=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Dropdowns",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-dropdowns"]],standalone:!1,decls:1094,vars:16,consts:[["nav1","ngbNav"],["nav2","ngbNav"],["nav3","ngbNav"],["title","Dropdowns",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","dropdown-base-example",1,"form-label","text-muted"],["type","checkbox","id","dropdown-base-example",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"d-flex","flex-wrap","gap-3"],["ngbDropdown","",1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1","ngbDropdownMenu","",1,"dropdown-menu"],["href","javascript: void(0);",1,"dropdown-item"],["href","javascript: void(0);","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu"],[1,"d-none","code-view"],[1,"language-markup",2,"height","375px"],["for","dropdown-variant",1,"form-label","text-muted"],["type","checkbox","id","dropdown-variant",1,"form-check-input","code-switcher",3,"click"],["ngbDropdown","",1,"btn-group","material-shadow"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-primary","dropdown-toggle","material-shadow-none"],[1,"dropdown-divider"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-success","dropdown-toggle","material-shadow-none"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-light","dropdown-toggle","material-shadow-none"],["type","button ","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-info","dropdown-toggle","material-shadow-none"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle","material-shadow-none"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-warning","dropdown-toggle","material-shadow-none"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-danger","dropdown-toggle","material-shadow-none"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-dark","dropdown-toggle","material-shadow-none"],["for","spilt-button-dropdown",1,"form-label","text-muted"],["type","checkbox","id","spilt-button-dropdown",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","flex-wrap","gap-3","btn-radius"],["type","button",1,"btn","btn-primary"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-primary","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["type","button",1,"btn","btn-success"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-success","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["type","button",1,"btn","btn-light"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-light","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["type","button",1,"btn","btn-info"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-info","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["type","button",1,"btn","btn-secondary"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["type","button",1,"btn","btn-warning"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-warning","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["type","button",1,"btn","btn-danger"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-danger","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["type","button",1,"btn","btn-dark"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-dark","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["for","dropdown-size",1,"form-label","text-muted"],["type","checkbox","id","dropdown-size",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","flex-wrap","gap-3","align-items-center"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-primary","btn-lg","dropdown-toggle","material-shadow-none"],["type","button",1,"btn","btn-light","btn-lg"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-lg","btn-light","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-primary","btn-sm","dropdown-toggle","material-shadow-none"],["type","button",1,"btn","btn-light","btn-sm"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-sm","btn-light","dropdown-toggle","dropdown-toggle-split","material-shadow-none"],["for","dark-dropdowns",1,"form-label","text-muted"],["type","checkbox","id","dark-dropdowns",1,"form-check-input","code-switcher",3,"click"],["type","button","id","dropdownMenuButton2","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","dropdownMenuButton2","ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-dark"],["href","javascript: void(0);",1,"dropdown-item","active"],[1,"language-markup",2,"height","200px"],["for","alignment-options",1,"form-label","text-muted"],["type","checkbox","id","alignment-options",1,"form-check-input","code-switcher",3,"click"],["ngbDropdown","",1,"btn-group"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","dropdownMenuButton","ngbDropdownMenu","",1,"dropdown-menu"],["type","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-end"],["type","button","data-bs-toggle","dropdown","data-bs-display","static","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-lg-end"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-end","dropdown-menu-lg-start"],["ngbDropdown","",1,"btn-group","dropstart"],["ngbDropdown","",1,"btn-group","dropend"],["ngbDropdown","",1,"btn-group","dropup"],[1,"language-markup",2,"height","275px"],["for","dropdown-options",1,"form-label","text-muted"],["type","checkbox","id","dropdown-options",1,"form-check-input","code-switcher",3,"click"],["ngbDropdown","",1,"dropdown","me-1"],["type","button","id","dropdownMenuOffset","data-bs-toggle","dropdown","aria-expanded","false","data-bs-offset","10,20","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","dropdownMenuOffset","ngbDropdownMenu","",1,"dropdown-menu"],["type","button","id","dropdownMenuReference","data-bs-toggle","dropdown","aria-expanded","false","data-bs-reference","parent","ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle","dropdown-toggle-split"],[1,"visually-hidden"],["aria-labelledby","dropdownMenuReference","ngbDropdownMenu","",1,"dropdown-menu"],["for","auto-close-behavior",1,"form-label","text-muted"],["type","checkbox","id","auto-close-behavior",1,"form-check-input","code-switcher",3,"click"],["type","button","id","defaultDropdown","data-bs-toggle","dropdown","data-bs-auto-close","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-light","dropdown-toggle"],["ngbDropdownMenu","","aria-labelledby","defaultDropdown",1,"dropdown-menu"],["href","javascript:void(0);",1,"dropdown-item"],["type","button","id","dropdownMenuClickableOutside","data-bs-toggle","dropdown","data-bs-auto-close","inside","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-light","dropdown-toggle"],["ngbDropdownMenu","","aria-labelledby","dropdownMenuClickableOutside",1,"dropdown-menu"],["type","button","id","dropdownMenuClickableInside","data-bs-toggle","dropdown","data-bs-auto-close","outside","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-light","dropdown-toggle"],["ngbDropdownMenu","","aria-labelledby","dropdownMenuClickableInside",1,"dropdown-menu"],["type","button","id","dropdownMenuClickable","data-bs-toggle","dropdown","data-bs-auto-close","false","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-light","dropdown-toggle"],["ngbDropdownMenu","","aria-labelledby","dropdownMenuClickable",1,"dropdown-menu"],["for","dropdown-menu-item-color",1,"form-label","text-muted"],["type","checkbox","id","dropdown-menu-item-color",1,"form-check-input","code-switcher",3,"click"],[1,"col-xxl-3"],[1,"font-size-13","mb-3"],[1,"clearfix"],[1,"dropdown-menu","d-inline-block","position-relative","dropdownmenu-success",2,"z-index","1"],[1,"col-lg-9"],[1,"mt-lg-0","mt-3"],[1,"font-size-13","mb-0"],[1,"col-lg-4","col-sm-6"],[1,"mt-3"],[1,"font-size-13","mb-2"],["type","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-primary","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdownmenu-primary"],["ngbDropdownMenu","",1,"dropdown-menu","dropdownmenu-secondary"],["type","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-success","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdownmenu-success"],["type","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-warning","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdownmenu-warning"],["type","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-info","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdownmenu-info"],["type","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-danger","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdownmenu-danger"],["for","menu-content",1,"form-label","text-muted"],["type","checkbox","id","menu-content",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","flex-wrap","gap-2"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-primary","dropdown-toggle"],[1,"dropdown-header","noti-title"],[1,"font-size-13","text-muted","text-truncate","mb-0"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-success","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-md","p-3"],[1,"mb-0"],["type","button","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false","ngbDropdownToggle","",1,"btn","btn-light","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-md","p-4"],[1,"mb-2"],["for","exampleDropdownFormEmail",1,"form-label"],["type","email","id","exampleDropdownFormEmail","placeholder","email@example.com",1,"form-control"],["for","exampleDropdownFormPassword",1,"form-label"],["type","password","id","exampleDropdownFormPassword","placeholder","Password",1,"form-control"],[1,"form-check","custom-checkbox"],["type","checkbox","id","rememberdropdownCheck",1,"form-check-input"],["for","rememberdropdownCheck",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],["for","default",1,"form-label","text-muted"],["type","checkbox","id","default",1,"form-check-input","code-switcher",3,"click"],[1,"row","g-3"],[1,"col-xxl-3","col-lg-5","col-md-6"],["aria-labelledby","page-header-notifications-dropdown",1,"dropdown-menu","dropdown-menu-lg","dropdown-menu-end","p-0","d-inline-block","position-relative","w-100",2,"z-index","1"],[1,"dropdown-head","bg-primary","bg-pattern","rounded-top"],[1,"p-3"],[1,"row","align-items-center"],[1,"col"],[1,"m-0","fs-16","fw-semibold","text-white"],[1,"col-auto","dropdown-tabs"],["data-key","t-view-all",1,"badge","bg-light","text-body","fs-13"],[1,"px-2","pt-2"],["ngbNav","",1,"nav","nav-tabs","dropdown-tabs","nav-tabs-custom",3,"activeId"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],["id","notificationItemsTabContent4",1,"tab-content"],[3,"ngbNavOutlet"],[1,"dropdown-head","bg-success","bg-pattern","rounded-top"],["id","notificationItemsTabContent1",1,"tab-content"],[1,"dropdown-head","bg-secondary","bg-pattern","rounded-top"],["id","notificationItemsTabContent3",1,"tab-content"],[1,"pe-2",2,"max-height","300px"],[1,"text-reset","notification-item","d-block","dropdown-item"],[1,"d-flex"],[1,"flex-shrink-0","avatar-xs","me-3"],[1,"avatar-title","bg-info-subtle","text-info","rounded-circle","fs-16"],[1,"bx","bx-badge-check"],[1,"flex-grow-1"],[1,"mt-0","mb-2","lh-base"],[1,"text-secondary"],[1,"mb-0","fs-11","fw-medium","text-uppercase","text-muted"],[1,"mdi","mdi-clock-outline"],[1,"px-2","fs-16"],["type","checkbox",1,"form-check-input"],["src","assets/images/users/avatar-2.jpg","alt","user-pic",1,"me-3","rounded-circle","avatar-xs"],["href","javascript:void(0);"],[1,"mt-0","mb-1","fs-13","fw-semibold"],[1,"fs-13","text-muted"],[1,"mb-1"],[1,"avatar-title","bg-danger-subtle","text-danger","rounded-circle","fs-16"],[1,"bx","bx-message-square-dots"],[1,"mt-0","mb-2","fs-13","lh-base"],[1,"text-success"],["src","assets/images/users/avatar-8.jpg","alt","user-pic",1,"me-3","rounded-circle","avatar-xs"],[1,"my-3","text-center"],["type","button",1,"btn","btn-soft-success","waves-effect","waves-light"],[1,"ri-arrow-right-line","align-middle"],["src","assets/images/users/avatar-3.jpg","alt","user-pic",1,"me-3","rounded-circle","avatar-xs"],["src","assets/images/users/avatar-6.jpg","alt","user-pic",1,"me-3","rounded-circle","avatar-xs"],[1,"w-25","pt-3","mx-auto"],["src","assets/images/svg/bell.svg","alt","user-pic",1,"img-fluid"],[1,"text-center","pb-5","mt-2"],[1,"fs-18","fw-semibold","lh-base"]],template:function(s,a){if(s&1&&(n(0,"app-breadcrumbs",3),t(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"h4",8),e(6,"Single Button Dropdown"),i(),t(7,"div",9)(8,"div",10)(9,"label",11),e(10,"Show Code"),i(),t(11,"input",12),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",13)(13,"p",14),e(14,"Use "),t(15,"code"),e(16,"btn"),i(),e(17," class at to create a dropdown toggle with <button> element. "),i(),t(18,"div",15)(19,"div",16)(20,"div",17)(21,"button",18),e(22," Dropdown button "),i(),t(23,"div",19)(24,"a",20),e(25,"Action"),i(),t(26,"a",20),e(27,"Another action"),i(),t(28,"a",20),e(29,"Something else here"),i()()(),t(30,"div",17)(31,"a",21),e(32," Dropdown link "),i(),t(33,"div",22)(34,"a",20),e(35,"Action"),i(),t(36,"a",20),e(37,"Another action"),i(),t(38,"a",20),e(39,"Something else here"),i()()()()(),t(40,"div",23)(41,"pre",24)(42,"code"),e(43,`<!-- Single Button Dropdown -->
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown button
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>`),i(),e(44,`

`),t(45,"code"),e(46,`<div class="dropdown">
<a href="#" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown link
</a>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>`),i()()()()()()(),t(47,"div",4)(48,"div",5)(49,"div",6)(50,"div",7)(51,"h4",8),e(52,"Dropdown Color Variant"),i(),t(53,"div",9)(54,"div",10)(55,"label",25),e(56,"Show Code"),i(),t(57,"input",26),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(58,"div",13)(59,"p",14),e(60,"Use "),t(61,"code"),e(62,"btn-"),i(),e(63," class with below mentioned variation to color dropdown toggle."),i(),t(64,"div",15)(65,"div",16)(66,"div",27)(67,"button",28),e(68,"Primary"),i(),t(69,"div",22)(70,"a",20),e(71,"Action"),i(),t(72,"a",20),e(73,"Another action"),i(),t(74,"a",20),e(75,"Something else here"),i(),n(76,"div",29),t(77,"a",20),e(78,"Separated link"),i()()(),t(79,"div",27)(80,"button",30),e(81,"Success"),i(),t(82,"div",22)(83,"a",20),e(84,"Action"),i(),t(85,"a",20),e(86,"Another action"),i(),t(87,"a",20),e(88,"Something else here"),i(),n(89,"div",29),t(90,"a",20),e(91,"Separated link"),i()()(),t(92,"div",27)(93,"button",31),e(94,"Light"),i(),t(95,"div",22)(96,"a",20),e(97,"Action"),i(),t(98,"a",20),e(99,"Another action"),i(),t(100,"a",20),e(101,"Something else here"),i(),n(102,"div",29),t(103,"a",20),e(104,"Separated link"),i()()(),t(105,"div",27)(106,"button",32),e(107,"Info"),i(),t(108,"div",22)(109,"a",20),e(110,"Action"),i(),t(111,"a",20),e(112,"Another action"),i(),t(113,"a",20),e(114,"Something else here"),i(),n(115,"div",29),t(116,"a",20),e(117,"Separated link"),i()()(),t(118,"div",27)(119,"button",33),e(120,"Secondary"),i(),t(121,"div",22)(122,"a",20),e(123,"Action"),i(),t(124,"a",20),e(125,"Another action"),i(),t(126,"a",20),e(127,"Something else here"),i(),n(128,"div",29),t(129,"a",20),e(130,"Separated link"),i()()(),t(131,"div",27)(132,"button",34),e(133,"Warning"),i(),t(134,"div",22)(135,"a",20),e(136,"Action"),i(),t(137,"a",20),e(138,"Another action"),i(),t(139,"a",20),e(140,"Something else here"),i(),n(141,"div",29),t(142,"a",20),e(143,"Separated link"),i()()(),t(144,"div",27)(145,"button",35),e(146,"Danger"),i(),t(147,"div",22)(148,"a",20),e(149,"Action"),i(),t(150,"a",20),e(151,"Another action"),i(),t(152,"a",20),e(153,"Something else here"),i(),n(154,"div",29),t(155,"a",20),e(156,"Separated link"),i()()(),t(157,"div",27)(158,"button",36),e(159,"Dark"),i(),t(160,"div",22)(161,"a",20),e(162,"Action"),i(),t(163,"a",20),e(164,"Another action"),i(),t(165,"a",20),e(166,"Something else here"),i(),n(167,"div",29),t(168,"a",20),e(169,"Separated link"),i()()()()(),t(170,"div",23)(171,"pre",24)(172,"code"),e(173,`<!-- Dropdown Variant -->
<div class="btn-group material-shadow">
<button type="button" class="btn btn-primary dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(174,`

`),t(175,"code"),e(176,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-success dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(177,`

`),t(178,"code"),e(179,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-light dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Light</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(180,`

`),t(181,"code"),e(182,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-info dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(183,`

`),t(184,"code"),e(185,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-secondary dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(186,`

`),t(187,"code"),e(188,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-warning dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(189,`

`),t(190,"code"),e(191,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-danger dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(192,`

`),t(193,"code"),e(194,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-dark dropdown-toggle material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dark</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i()()()()()()(),t(195,"div",4)(196,"div",5)(197,"div",6)(198,"div",7)(199,"h4",8),e(200,"Split Button Dropdown"),i(),t(201,"div",9)(202,"div",10)(203,"label",37),e(204,"Show Code"),i(),t(205,"input",38),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(206,"div",13)(207,"p",14),e(208,"Use "),t(209,"code"),e(210,"dropdown-toggle-split"),i(),e(211," to create split button dropdowns as a single button dropdown. "),i(),t(212,"div",15)(213,"div",39)(214,"div",27)(215,"button",40),e(216,"Primary"),i(),n(217,"button",41),t(218,"div",22)(219,"a",20),e(220,"Action"),i(),t(221,"a",20),e(222,"Another action"),i(),t(223,"a",20),e(224,"Something else here"),i(),n(225,"div",29),t(226,"a",20),e(227,"Separated link"),i()()(),t(228,"div",27)(229,"button",42),e(230,"Success"),i(),n(231,"button",43),t(232,"div",22)(233,"a",20),e(234,"Action"),i(),t(235,"a",20),e(236,"Another action"),i(),t(237,"a",20),e(238,"Something else here"),i(),n(239,"div",29),t(240,"a",20),e(241,"Separated link"),i()()(),t(242,"div",27)(243,"button",44),e(244,"Light"),i(),n(245,"button",45),t(246,"div",22)(247,"a",20),e(248,"Action"),i(),t(249,"a",20),e(250,"Another action"),i(),t(251,"a",20),e(252,"Something else here"),i(),n(253,"div",29),t(254,"a",20),e(255,"Separated link"),i()()(),t(256,"div",27)(257,"button",46),e(258,"Info"),i(),n(259,"button",47),t(260,"div",22)(261,"a",20),e(262,"Action"),i(),t(263,"a",20),e(264,"Another action"),i(),t(265,"a",20),e(266,"Something else here"),i(),n(267,"div",29),t(268,"a",20),e(269,"Separated link"),i()()(),t(270,"div",27)(271,"button",48),e(272,"Secondary"),i(),n(273,"button",49),t(274,"div",22)(275,"a",20),e(276,"Action"),i(),t(277,"a",20),e(278,"Another action"),i(),t(279,"a",20),e(280,"Something else here"),i(),n(281,"div",29),t(282,"a",20),e(283,"Separated link"),i()()(),t(284,"div",27)(285,"button",50),e(286,"Warning"),i(),n(287,"button",51),t(288,"div",22)(289,"a",20),e(290,"Action"),i(),t(291,"a",20),e(292,"Another action"),i(),t(293,"a",20),e(294,"Something else here"),i(),n(295,"div",29),t(296,"a",20),e(297,"Separated link"),i()()(),t(298,"div",27)(299,"button",52),e(300,"Danger"),i(),n(301,"button",53),t(302,"div",22)(303,"a",20),e(304,"Action"),i(),t(305,"a",20),e(306,"Another action"),i(),t(307,"a",20),e(308,"Something else here"),i(),n(309,"div",29),t(310,"a",20),e(311,"Separated link"),i()()(),t(312,"div",27)(313,"button",54),e(314,"Dark"),i(),n(315,"button",55),t(316,"div",22)(317,"a",20),e(318,"Action"),i(),t(319,"a",20),e(320,"Another action"),i(),t(321,"a",20),e(322,"Something else here"),i(),n(323,"div",29),t(324,"a",20),e(325,"Separated link"),i()()()()(),t(326,"div",23)(327,"pre",24)(328,"code"),e(329,`<!-- Split Button Dropdown -->
<div class="btn-group material-shadow">
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(330,`

`),t(331,"code"),e(332,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(333,`

`),t(334,"code"),e(335,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(336,`

`),t(337,"code"),e(338,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(339,`


`),t(340,"code"),e(341,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(342,`

`),t(343,"code"),e(344,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(345,`

`),t(346,"code"),e(347,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i(),e(348,`

`),t(349,"code"),e(350,`<div class="btn-group material-shadow">
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- /btn-group -->`),i()()()()()()(),t(351,"div",4)(352,"div",5)(353,"div",6)(354,"div",7)(355,"h4",8),e(356,"Dropdown Sizing"),i(),t(357,"div",9)(358,"div",10)(359,"label",56),e(360,"Show Code"),i(),t(361,"input",57),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(362,"div",13)(363,"p",14),e(364,"Use "),t(365,"code"),e(366,"btn-lg"),i(),e(367," class to create a large size dropdown button and "),t(368,"code"),e(369,"btn-sm"),i(),e(370," to create a small size dropdown button. "),i(),t(371,"div",15)(372,"div",58)(373,"div",27)(374,"button",59),e(375," Large button "),i(),t(376,"div",22)(377,"a",20),e(378,"Action"),i(),t(379,"a",20),e(380,"Another action"),i(),t(381,"a",20),e(382,"Something else here"),i(),n(383,"div",29),t(384,"a",20),e(385,"Separated link"),i()()(),t(386,"div",27)(387,"button",60),e(388," Large split button "),i(),n(389,"button",61),t(390,"div",22)(391,"a",20),e(392,"Action"),i(),t(393,"a",20),e(394,"Another action"),i(),t(395,"a",20),e(396,"Something else here"),i(),n(397,"div",29),t(398,"a",20),e(399,"Separated link"),i()()(),t(400,"div",27)(401,"button",62),e(402," Small button "),i(),t(403,"div",22)(404,"a",20),e(405,"Action"),i(),t(406,"a",20),e(407,"Another action"),i(),t(408,"a",20),e(409,"Something else here"),i(),n(410,"div",29),t(411,"a",20),e(412,"Separated link"),i()()(),t(413,"div",27)(414,"button",63),e(415," Small split button "),i(),n(416,"button",64),t(417,"div",22)(418,"a",20),e(419,"Action"),i(),t(420,"a",20),e(421,"Another action"),i(),t(422,"a",20),e(423,"Something else here"),i(),n(424,"div",29),t(425,"a",20),e(426,"Separated link"),i()()()()(),t(427,"div",23)(428,"pre",24)(429,"code"),e(430,`<!-- Dropdown Sizing -->
<div class="btn-group material-shadow">
<button class="btn btn-primary btn-lg dropdown-toggle material-shadow-none" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Large button
</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div>`),i(),e(431,`

`),t(432,"code"),e(433,`<div class="btn-group material-shadow">
<button class="btn btn-light btn-lg" type="button">
Large split button
</button>
<button type="button" class="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div>`),i(),e(434,`

`),t(435,"code"),e(436,`<div class="btn-group material-shadow">
<button class="btn btn-primary btn-sm dropdown-toggle material-shadow-none" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Small button
</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div>`),i(),e(437,`

`),t(438,"code"),e(439,`<div class="btn-group material-shadow">
<button class="btn btn-light btn-sm" type="button">
Small split button
</button>
<button type="button" class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split material-shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div>`),i()()()()()()(),t(440,"div",4)(441,"div",5)(442,"div",6)(443,"div",7)(444,"h4",8),e(445,"Dark Dropdowns"),i(),t(446,"div",9)(447,"div",10)(448,"label",65),e(449,"Show Code"),i(),t(450,"input",66),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(451,"div",13)(452,"p",14),e(453,"Use "),t(454,"code"),e(455,"dropdown-menu-dark"),i(),e(456," class onto an existing dropdown-menu to create dropdown items dark."),i(),t(457,"div",15)(458,"div",17)(459,"button",67),e(460," Dropdown button "),i(),t(461,"ul",68)(462,"li")(463,"a",69),e(464,"Action"),i()(),t(465,"li")(466,"a",20),e(467,"Another action"),i()(),t(468,"li")(469,"a",20),e(470,"Something else here"),i()(),t(471,"li"),n(472,"hr",29),i(),t(473,"li")(474,"a",20),e(475,"Separated link"),i()()()()(),t(476,"div",23)(477,"pre",70)(478,"code"),e(479,`<!-- Dark Dropdowns -->
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"
aria-expanded="false">
Dropdown button
</button>
<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
<li><a class="dropdown-item active" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Another action</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li>
<li>
<hr class="dropdown-divider">
</li>
<li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
</div>`),i()()()()()()(),t(480,"div",4)(481,"div",5)(482,"div",6)(483,"div",7)(484,"h4",8),e(485,"Alignment options"),i(),t(486,"div",9)(487,"div",10)(488,"label",71),e(489,"Show Code"),i(),t(490,"input",72),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(491,"div",13)(492,"p",14),e(493,"Dropdown demo with various "),t(494,"code"),e(495,"dropdown alignment"),i(),e(496," options."),i(),t(497,"div",15)(498,"div",16)(499,"div",73)(500,"button",74),e(501," Dropdown "),i(),t(502,"ul",75)(503,"li")(504,"a",20),e(505,"Menu item"),i()(),t(506,"li")(507,"a",20),e(508,"Menu item"),i()(),t(509,"li")(510,"a",20),e(511,"Menu item"),i()()()(),t(512,"div",73)(513,"button",76),e(514," Right-aligned menu "),i(),t(515,"ul",77)(516,"li")(517,"a",20),e(518,"Menu item"),i()(),t(519,"li")(520,"a",20),e(521,"Menu item"),i()(),t(522,"li")(523,"a",20),e(524,"Menu item"),i()()()(),t(525,"div",73)(526,"button",78),e(527," Left-aligned, right-aligned lg "),i(),t(528,"ul",79)(529,"li")(530,"a",20),e(531,"Menu item"),i()(),t(532,"li")(533,"a",20),e(534,"Menu item"),i()(),t(535,"li")(536,"a",20),e(537,"Menu item"),i()()()(),t(538,"div",73)(539,"button",78),e(540," Right-aligned, left-aligned lg "),i(),t(541,"ul",80)(542,"li")(543,"a",20),e(544,"Menu item"),i()(),t(545,"li")(546,"a",20),e(547,"Menu item"),i()(),t(548,"li")(549,"a",20),e(550,"Menu item"),i()()()(),t(551,"div",81)(552,"button",76),e(553," Dropstart "),i(),t(554,"ul",22)(555,"li")(556,"a",20),e(557,"Menu item"),i()(),t(558,"li")(559,"a",20),e(560,"Menu item"),i()(),t(561,"li")(562,"a",20),e(563,"Menu item"),i()()()(),t(564,"div",82)(565,"button",76),e(566," Dropend "),i(),t(567,"ul",22)(568,"li")(569,"a",20),e(570,"Menu item"),i()(),t(571,"li")(572,"a",20),e(573,"Menu item"),i()(),t(574,"li")(575,"a",20),e(576,"Menu item"),i()()()(),t(577,"div",83)(578,"button",76),e(579," Dropup "),i(),t(580,"ul",22)(581,"li")(582,"a",20),e(583,"Menu item"),i()(),t(584,"li")(585,"a",20),e(586,"Menu item"),i()(),t(587,"li")(588,"a",20),e(589,"Menu item"),i()()()()()(),t(590,"div",23)(591,"pre",84)(592,"code"),e(593,`<!-- Alignment options -->
<div class="btn-group">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>`),i(),e(594,`

`),t(595,"code"),e(596,`<div class="btn-group">
<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Right-aligned menu
</button>
<ul class="dropdown-menu dropdown-menu-end">
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>`),i(),e(597,`

`),t(598,"code"),e(599,`<div class="btn-group">
<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static"
aria-expanded="false">
Left-aligned, right-aligned lg
</button>
<ul class="dropdown-menu dropdown-menu-lg-end">
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>`),i(),e(600,`

`),t(601,"code"),e(602,`<div class="btn-group">
<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static"
aria-expanded="false">
Right-aligned, left-aligned lg
</button>
<ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>`),i(),e(603,`

`),t(604,"code"),e(605,`<div class="btn-group dropstart">
<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Dropstart
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>`),i(),e(606,`

`),t(607,"code"),e(608,`<div class="btn-group dropend">
<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Dropend
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>`),i(),e(609,`

`),t(610,"code"),e(611,`<div class="btn-group dropup">
<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Dropup
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
<li><a class="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>`),i()()()()()()(),t(612,"div",4)(613,"div",5)(614,"div",6)(615,"div",7)(616,"h4",8),e(617,"Dropdown Options"),i(),t(618,"div",9)(619,"div",10)(620,"label",85),e(621,"Show Code"),i(),t(622,"input",86),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(623,"div",13)(624,"p",14),e(625,"Use "),t(626,"code"),e(627,"data-bs-offset"),i(),e(628," or "),t(629,"code"),e(630,"data-bs-reference"),i(),e(631," to change the position of the dropdown."),i(),t(632,"div",15)(633,"div",39)(634,"div",87)(635,"button",88),e(636," Offset "),i(),t(637,"ul",89)(638,"li")(639,"a",20),e(640,"Action"),i()(),t(641,"li")(642,"a",20),e(643,"Another action"),i()(),t(644,"li")(645,"a",20),e(646,"Something else here"),i()()()(),t(647,"div",73)(648,"button",48),e(649,"Reference"),i(),t(650,"button",90)(651,"span",91),e(652,"Toggle Dropdown"),i()(),t(653,"ul",92)(654,"li")(655,"a",20),e(656,"Action"),i()(),t(657,"li")(658,"a",20),e(659,"Another action"),i()(),t(660,"li")(661,"a",20),e(662,"Something else here"),i()(),t(663,"li"),n(664,"hr",29),i(),t(665,"li")(666,"a",20),e(667,"Separated link"),i()()()()()(),t(668,"div",23)(669,"pre",84)(670,"code"),e(671,`<!-- Dropdown Options -->
<div class="dropdown">
<button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset"
data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
Offset
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
<li><a class="dropdown-item" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Another action</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div>`),i(),e(672,`

`),t(673,"code"),e(674,`<div class="btn-group">
<button type="button" class="btn btn-secondary">Reference</button>
<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference"
data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
<span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
<li><a class="dropdown-item" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Another action</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li>
<li>
<hr class="dropdown-divider">
</li>
<li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
</div>`),i()()()()()()(),t(675,"div",4)(676,"div",5)(677,"div",6)(678,"div",7)(679,"h4",8),e(680,"Auto Close Behavior"),i(),t(681,"div",9)(682,"div",10)(683,"label",93),e(684,"Show Code"),i(),t(685,"input",94),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(686,"div",13)(687,"p",14),e(688,"By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the "),t(689,"code"),e(690,"autoClose"),i(),e(691," option to change this behavior of the dropdown."),i(),t(692,"div",15)(693,"div",16)(694,"div",73)(695,"button",95),e(696," Default dropdown "),i(),t(697,"ul",96)(698,"li")(699,"a",97),e(700,"Menu item"),i()(),t(701,"li")(702,"a",97),e(703,"Menu item"),i()(),t(704,"li")(705,"a",97),e(706,"Menu item"),i()()()(),t(707,"div",73)(708,"button",98),e(709," Clickable outside "),i(),t(710,"ul",99)(711,"li")(712,"a",97),e(713,"Menu item"),i()(),t(714,"li")(715,"a",97),e(716,"Menu item"),i()(),t(717,"li")(718,"a",97),e(719,"Menu item"),i()()()(),t(720,"div",73)(721,"button",100),e(722," Clickable inside "),i(),t(723,"ul",101)(724,"li")(725,"a",97),e(726,"Menu item"),i()(),t(727,"li")(728,"a",97),e(729,"Menu item"),i()(),t(730,"li")(731,"a",97),e(732,"Menu item"),i()()()(),t(733,"div",73)(734,"button",102),e(735," Manual close "),i(),t(736,"ul",103)(737,"li")(738,"a",97),e(739,"Menu item"),i()(),t(740,"li")(741,"a",97),e(742,"Menu item"),i()(),t(743,"li")(744,"a",97),e(745,"Menu item"),i()()()()()(),t(746,"div",23)(747,"pre",84)(748,"code"),e(749,`<!-- Default dropdown -->
<div class="btn-group">
<button class="btn btn-light dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
Default dropdown
</button>
<ul class="dropdown-menu" aria-labelledby="defaultDropdown">
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
</ul>
</div>`),i(),e(750,`

`),t(751,"code"),e(752,`<!-- Clickable outside dropdown -->
<div class="btn-group">
<button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
Clickable outside
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
</ul>
</div>`),i(),e(753,`

`),t(754,"code"),e(755,`<!-- Clickable inside dropdown -->
<div class="btn-group">
<button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
Clickable inside
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
</ul>
</div>`),i(),e(756,`

`),t(757,"code"),e(758,`<!-- Clickable inside dropdown -->
<div class="btn-group">
<button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
Manual close
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
<li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
</ul>
</div>`),i()()()()()()(),t(759,"div",4)(760,"div",5)(761,"div",6)(762,"div",7)(763,"h4",8),e(764,"Dropdown Menu Item Color"),i(),t(765,"div",9)(766,"div",10)(767,"label",104),e(768,"Show Code"),i(),t(769,"input",105),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(770,"div",13)(771,"p",14),e(772,"Example of dropdown menu and dropdown item color."),i(),t(773,"div",15)(774,"div",4)(775,"div",106)(776,"div")(777,"h6",107),e(778,"Dropdown Menu Success link example"),i(),t(779,"div",108)(780,"div",109)(781,"a",20),e(782,"Action"),i(),t(783,"a",20),e(784,"Another action"),i(),t(785,"a",69),e(786,"Something else here"),i(),n(787,"div",29),t(788,"a",20),e(789,"Separated link"),i()()()()(),t(790,"div",110)(791,"div",111)(792,"h6",112),e(793,"Dropdown Menu link Color example"),i(),t(794,"div")(795,"div",4)(796,"div",113)(797,"div",114)(798,"p",115),e(799,"Dropdown menu Primary link"),i(),t(800,"div",73)(801,"button",116),e(802,"Primary"),i(),t(803,"div",117)(804,"a",20),e(805,"Action"),i(),t(806,"a",20),e(807,"Another action"),i(),t(808,"a",20),e(809,"Something else here"),i(),n(810,"div",29),t(811,"a",20),e(812,"Separated link"),i()()()()(),t(813,"div",113)(814,"div",114)(815,"p",115),e(816,"Dropdown menu Secondary link"),i(),t(817,"div",73)(818,"button",76),e(819,"Secondary"),i(),t(820,"div",118)(821,"a",20),e(822,"Action"),i(),t(823,"a",20),e(824,"Another action"),i(),t(825,"a",20),e(826,"Something else here"),i(),n(827,"div",29),t(828,"a",20),e(829,"Separated link"),i()()()()(),t(830,"div",113)(831,"div",114)(832,"p",115),e(833,"Dropdown menu Success link"),i(),t(834,"div",73)(835,"button",119),e(836,"Success"),i(),t(837,"div",120)(838,"a",20),e(839,"Action"),i(),t(840,"a",20),e(841,"Another action"),i(),t(842,"a",20),e(843,"Something else here"),i(),n(844,"div",29),t(845,"a",20),e(846,"Separated link"),i()()()()(),t(847,"div",113)(848,"div",114)(849,"p",115),e(850,"Dropdown menu Warning link"),i(),t(851,"div",73)(852,"button",121),e(853,"Warning"),i(),t(854,"div",122)(855,"a",20),e(856,"Action"),i(),t(857,"a",20),e(858,"Another action"),i(),t(859,"a",20),e(860,"Something else here"),i(),n(861,"div",29),t(862,"a",20),e(863,"Separated link"),i()()()()(),t(864,"div",113)(865,"div",114)(866,"p",115),e(867,"Dropdown menu Info link"),i(),t(868,"div",73)(869,"button",123),e(870,"Info"),i(),t(871,"div",124)(872,"a",20),e(873,"Action"),i(),t(874,"a",20),e(875,"Another action"),i(),t(876,"a",20),e(877,"Something else here"),i(),n(878,"div",29),t(879,"a",20),e(880,"Separated link"),i()()()()(),t(881,"div",113)(882,"div",114)(883,"p",115),e(884,"Dropdown menu Danger link"),i(),t(885,"div",73)(886,"button",125),e(887,"Danger"),i(),t(888,"div",126)(889,"a",20),e(890,"Action"),i(),t(891,"a",20),e(892,"Another action"),i(),t(893,"a",20),e(894,"Something else here"),i(),n(895,"div",29),t(896,"a",20),e(897,"Separated link"),i()()()()()()()()()()(),t(898,"div",23)(899,"pre",84)(900,"code"),e(901,`<!-- Dropdown Menu Item Color -->
<div class="btn-group">
<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
<div class="dropdown-menu dropdownmenu-primary">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- btn-group -->`),i(),e(902,`

`),t(903,"code"),e(904,`<div class="btn-group">
<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
<div class="dropdown-menu dropdownmenu-secondary">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- btn-group -->`),i(),e(905,`

`),t(906,"code"),e(907,`<div class="btn-group">
<button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
<div class="dropdown-menu dropdownmenu-success">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- btn-group -->`),i(),e(908,`

`),t(909,"code"),e(910,`<div class="btn-group">
<button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
<div class="dropdown-menu dropdownmenu-warning">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- btn-group -->`),i(),e(911,`

`),t(912,"code"),e(913,`<div class="btn-group">
<button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
<div class="dropdown-menu dropdownmenu-info">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- btn-group -->`),i(),e(914,`

`),t(915,"code"),e(916,`<div class="btn-group">
<button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
<div class="dropdown-menu dropdownmenu-danger">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div><!-- btn-group -->`),i()()()()()()(),t(917,"div",4)(918,"div",5)(919,"div",6)(920,"div",7)(921,"h4",8),e(922,"Menu Content"),i(),t(923,"div",9)(924,"div",10)(925,"label",127),e(926,"Show Code"),i(),t(927,"input",128),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(928,"div",13)(929,"p",14),e(930,"Example of dropdown menu containing "),t(931,"code"),e(932,"Headers, Text and Forms"),i(),e(933," content. "),i(),t(934,"div",15)(935,"div",129)(936,"div",73)(937,"button",130),e(938," Header "),i(),t(939,"div",22)(940,"div",131)(941,"h5",132),e(942,"Welcome Jessie!"),i()(),t(943,"a",20),e(944,"Action"),i(),t(945,"a",20),e(946,"Another action"),i(),t(947,"a",20),e(948,"Something else here"),i(),n(949,"div",29),t(950,"a",20),e(951,"Separated link"),i()()(),t(952,"div",73)(953,"button",133),e(954," Text "),i(),t(955,"div",134)(956,"p"),e(957," Some example text that's free-flowing within the dropdown menu. "),i(),t(958,"p",135),e(959," And this is more example text. "),i()()(),t(960,"div",73)(961,"button",136),e(962," Forms "),i(),t(963,"div",137)(964,"form")(965,"div",138)(966,"label",139),e(967,"Email address"),i(),n(968,"input",140),i(),t(969,"div",138)(970,"label",141),e(971,"Password"),i(),n(972,"input",142),i(),t(973,"div",138)(974,"div",143),n(975,"input",144),t(976,"label",145),e(977,"Remember me"),i()()(),t(978,"button",146),e(979,"Sign in"),i()()()()()(),t(980,"div",23)(981,"pre",84)(982,"code"),e(983,`<!-- Menu Content -->
<div class="btn-group">
<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Header
</button>
<div class="dropdown-menu">
<div class="dropdown-header noti-title">
<h5 class="font-size-13 text-muted text-truncate mn-0">Welcome Jessie!</h5>
</div>
<!-- item-->
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
</div>
</div>`),i(),e(984,`

`),t(985,"code"),e(986,`<!-- text Content -->
<div class="btn-group">
<button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Text
</button>
<div class="dropdown-menu dropdown-menu-md p-3">
<p>
Some example text that's free-flowing within the dropdown menu.
</p>
<p class="mb-0">
And this is more example text.
</p>
</div>
</div>`),i(),e(987,`

`),t(988,"code"),e(989,`<!-- Forms Content -->
<div class="btn-group">
<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Forms
</button>
<div class="dropdown-menu dropdown-menu-md p-4">
<form>
<div class="mb-2">
<label class="form-label" for="exampleDropdownFormEmail">Email address</label>
<input type="email" class="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com">
</div>
<div class="mb-2">
<label class="form-label" for="exampleDropdownFormPassword">Password</label>
<input type="password" class="form-control" id="exampleDropdownFormPassword" placeholder="Password">
</div>
<div class="mb-2">
<div class="form-check custom-checkbox">
<input type="checkbox" class="form-check-input" id="rememberdropdownCheck">
<label class="form-check-label" for="rememberdropdownCheck">Remember me</label>
</div>
</div>
<button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>
</div>`),i()()()()()()(),t(990,"div",4)(991,"div",5)(992,"div",6)(993,"div",7)(994,"h4",8),e(995,"Notifications"),i(),t(996,"div",9)(997,"div",10)(998,"label",147),e(999,"Show Code"),i(),t(1e3,"input",148),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(1001,"div",13)(1002,"p",14),e(1003,"Dropdown with notification containing multiple tabs."),i(),t(1004,"div",15)(1005,"div",149)(1006,"div",150)(1007,"div",151)(1008,"div",152)(1009,"div",153)(1010,"div",154)(1011,"div",155)(1012,"h6",156),e(1013," Notifications "),i()(),t(1014,"div",157)(1015,"span",158),e(1016," 4 New"),i()()()(),t(1017,"div",159)(1018,"ul",160,0)(1020,"li",161)(1021,"a",162),e(1022," All (4) "),i(),h(1023,Gn,74,0,"ng-template",163),i(),t(1024,"li",161)(1025,"a",162),e(1026," Messages "),i(),h(1027,Yn,69,0,"ng-template",163),i(),t(1028,"li",161)(1029,"a",162),e(1030," Alerts "),i(),h(1031,$n,5,0,"ng-template",163),i()()()(),t(1032,"div",164),n(1033,"div",165),i()()(),t(1034,"div",150)(1035,"div",151)(1036,"div",166)(1037,"div",153)(1038,"div",154)(1039,"div",155)(1040,"h6",156),e(1041," Notifications "),i()(),t(1042,"div",157)(1043,"span",158),e(1044," 4 New"),i()()()(),t(1045,"div",159)(1046,"ul",160,1)(1048,"li",161)(1049,"a",162),e(1050," All (4) "),i(),h(1051,Qn,74,0,"ng-template",163),i(),t(1052,"li",161)(1053,"a",162),e(1054," Messages "),i(),h(1055,Jn,69,0,"ng-template",163),i(),t(1056,"li",161)(1057,"a",162),e(1058," Alerts "),i(),h(1059,Xn,5,0,"ng-template",163),i()()()(),t(1060,"div",167),n(1061,"div",165),i()()(),t(1062,"div",150)(1063,"div",151)(1064,"div",168)(1065,"div",153)(1066,"div",154)(1067,"div",155)(1068,"h6",156),e(1069," Notifications "),i()(),t(1070,"div",157)(1071,"span",158),e(1072," 4 New"),i()()()(),t(1073,"div",159)(1074,"ul",160,2)(1076,"li",161)(1077,"a",162),e(1078," All (4) "),i(),h(1079,Kn,74,0,"ng-template",163),i(),t(1080,"li",161)(1081,"a",162),e(1082," Messages "),i(),h(1083,Zn,69,0,"ng-template",163),i(),t(1084,"li",161)(1085,"a",162),e(1086," Alerts "),i(),h(1087,ea,5,0,"ng-template",163),i()()()(),t(1088,"div",169),n(1089,"div",165),i()()()()(),t(1090,"div",23)(1091,"pre",84)(1092,"code"),e(1093,`<!-- Notifications -->
<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative" aria-labelledby="page-header-notifications-dropdown" style="z-index: 1;">
<div class="dropdown-head bg-primary bg-pattern rounded-top">
<div class="p-3">
<div class="row align-items-center">
<div class="col">
<h6 class="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
</div>
<div class="col-auto dropdown-tabs">
<span class="badge bg-light text-body fs-13" data-key="t-view-all"> 4 New</span>
</div>
</div>
</div>

<div class="px-2 pt-2">
<ul class="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true" id="notificationItemsTab" role="tablist">
<li class="nav-item waves-effect waves-light">
<a class="nav-link active" data-bs-toggle="tab" href="#all-noti-tab1" role="tab" aria-selected="true">
All (4)
</a>
</li>
<li class="nav-item waves-effect waves-light">
<a class="nav-link" data-bs-toggle="tab" href="#messages-tab1" role="tab" aria-selected="false">
Messages
</a>
</li>
<li class="nav-item waves-effect waves-light">
<a class="nav-link" data-bs-toggle="tab" href="#alerts-tab1" role="tab" aria-selected="false">
Alerts
</a>
</li>
</ul>
</div>
</div>

<div class="tab-content" id="notificationItemsTabContent">
<div class="tab-pane fade show active py-2 ps-2" id="all-noti-tab1" role="tabpanel" aria-labelledby="updates-tab">
<div data-simplebar style="max-height: 300px;" class="pe-2">
<a href="#!" class="text-reset notification-item d-block dropdown-item">
<div class="d-flex">
<div class="avatar-xs me-3">
  <span class="avatar-title bg-info-subtle text-info rounded-circle fs-16">
      <i class="bx bx-badge-check"></i>
  </span>
</div>
<div class="flex-grow-1">
  <h6 class="mt-0 mb-2 lh-base">Your <b>Elite</b> author Graphic Optimization <span class="text-secondary">reward</span> is ready!</h6>
  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
      <span><i class="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
  </p>
</div>
<div class="px-2 fs-16">
  <input class="form-check-input" type="checkbox">
</div>
</div>
</a>

<a href="#!" class="text-reset notification-item d-block dropdown-item">
<div class="d-flex">
<img src="assets/images/users/avatar-2.jpg"
  class="me-3 rounded-circle avatar-xs" alt="user-pic">
<div class="flex-grow-1">
  <h6 class="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
  <div class="fs-13 text-muted">
      <p class="mb-1">Answered to your comment on the cash flow forecast's graph \u{1F514}.</p>
  </div>
  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
      <span><i class="mdi mdi-clock-outline"></i> 48 min ago</span>
  </p>
</div>
<div class="px-2 fs-16">
  <input class="form-check-input" type="checkbox">
</div>
</div>
</a>

<a href="#!" class="text-reset notification-item d-block dropdown-item">
<div class="d-flex">
<div class="avatar-xs me-3">
  <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
      <i class='bx bx-message-square-dots' ></i>
  </span>
</div>
<div class="flex-grow-1">
  <h6 class="mt-0 mb-2 fs-13 lh-base">You have received <b class="text-success">20</b> new messages in the conversation</h6>
  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
      <span><i class="mdi mdi-clock-outline"></i> 2 hrs ago</span>
  </p>
</div>
<div class="px-2 fs-16">
  <input class="form-check-input" type="checkbox">
</div>
</div>
</a>

<a href="#!" class="text-reset notification-item d-block dropdown-item">
<div class="d-flex">
<img src="assets/images/users/avatar-8.jpg"
  class="me-3 rounded-circle avatar-xs" alt="user-pic">
<div class="flex-grow-1">
  <h6 class="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
  <div class="fs-13 text-muted">
      <p class="mb-1">We talked about a project on linkedin.</p>
  </div>
  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
      <span><i class="mdi mdi-clock-outline"></i> 4 hrs ago</span>
  </p>
</div>
<div class="px-2 fs-16">
  <input class="form-check-input" type="checkbox">
</div>
</div>
</a>

<div class="my-3 text-center">
<button type="button" class="btn btn-soft-success waves-effect waves-light">View All Notifications <i class="ri-arrow-right-line align-middle"></i></button>
</div>
</div>

</div>

<div class="tab-pane fade py-2 ps-2" id="messages-tab1" role="tabpanel" aria-labelledby="messages-tab">
<div data-simplebar style="max-height: 300px;" class="pe-2">
<a href="#!" class="text-reset notification-item d-block dropdown-item">
<div class="d-flex">
<img src="assets/images/users/avatar-3.jpg"
  class="me-3 rounded-circle avatar-xs" alt="user-pic">
<div class="flex-grow-1">
  <h6 class="mt-0 mb-1 fs-13 fw-semibold">James Lemire</h6>
  <div class="fs-13 text-muted">
      <p class="mb-1">We talked about a project on linkedin.</p>
  </div>
  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
      <span><i class="mdi mdi-clock-outline"></i> 30 min ago</span>
  </p>
</div>
<div class="px-2 fs-16">
  <input class="form-check-input" type="checkbox">
</div>
</div>
</a>

<a href="#!" class="text-reset notification-item d-block dropdown-item">
<div class="d-flex">
<img src="assets/images/users/avatar-2.jpg"
  class="me-3 rounded-circle avatar-xs" alt="user-pic">
<div class="flex-grow-1">
  <h6 class="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
  <div class="fs-13 text-muted">
      <p class="mb-1">Answered to your comment on the cash flow forecast's graph \u{1F514}.</p>
  </div>
  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
      <span><i class="mdi mdi-clock-outline"></i> 2 hrs ago</span>
  </p>
</div>
<div class="px-2 fs-16">
  <input class="form-check-input" type="checkbox">
</div>
</div>
</a>

<a href="#!" class="text-reset notification-item d-block dropdown-item">
<div class="d-flex">
<img src="assets/images/users/avatar-6.jpg"
  class="me-3 rounded-circle avatar-xs" alt="user-pic">
<div class="flex-grow-1">
  <h6 class="mt-0 mb-1 fs-13 fw-semibold">Kenneth Brown</h6>
  <div class="fs-13 text-muted">
      <p class="mb-1">Mentionned you in his comment on \u{1F4C3} invoice #12501.</p>
  </div>
  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
      <span><i class="mdi mdi-clock-outline"></i> 10 hrs ago</span>
  </p>
</div>
<div class="px-2 fs-16">
  <input class="form-check-input" type="checkbox">
</div>
</div>
</a>

<a href="#!" class="text-reset notification-item d-block dropdown-item">
<div class="d-flex">
<img src="assets/images/users/avatar-8.jpg"
  class="me-3 rounded-circle avatar-xs" alt="user-pic">
<div class="flex-grow-1">
  <h6 class="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
  <div class="fs-13 text-muted">
      <p class="mb-1">We talked about a project on linkedin.</p>
  </div>
  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
      <span><i class="mdi mdi-clock-outline"></i> 3 days ago</span>
  </p>
</div>
<div class="px-2 fs-16">
  <input class="form-check-input" type="checkbox">
</div>
</div>
</a>

<div class="my-3 text-center">
<button type="button" class="btn btn-soft-success waves-effect waves-light">View All Messages <i class="ri-arrow-right-line align-middle"></i></button>
</div>
</div>
</div>
<div class="tab-pane fade p-4" id="alerts-tab1" role="tabpanel" aria-labelledby="alerts-tab">
<div class="w-25 pt-3 mx-auto">
<img src="assets/images/svg/bell.svg" class="img-fluid" alt="user-pic">
</div>
<div class="text-center pb-5 mt-2">
<h6 class="fs-18 fw-semibold lh-base">Hey! You have no any notifications </h6>
</div>
</div>
</div>
</div>`),i()()()()()()()),s&2){let d=y(1019),o=y(1047),b=y(1075);p("breadcrumbItems",a.breadCrumbItems),m(1018),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(5),p("ngbNavOutlet",d),m(13),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(5),p("ngbNavOutlet",o),m(13),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(5),p("ngbNavOutlet",b)}},dependencies:[D,De,Ie,Me,Ne,Le,je,qe,Ve,Re,Pe,Oe,We,Fe,ze],encapsulation:2})}}return l})();var Ai=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Grid",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-grid"]],standalone:!1,decls:304,vars:1,consts:[["title","Grid",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-title","mb-0"],[1,"card-body"],[1,"text-muted"],[1,"table-responsive"],[1,"table","table-bordered","table-nowrap","mb-0"],["scope","col"],["scope","col",1,"text-center"],[1,"fw-normal"],["scope","row",1,"text-nowrap"],["colspan","5"],["colspan","6"],[1,"col-lg-12"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","verticl-align-start",1,"form-label","text-muted"],["type","checkbox","id","verticl-align-start",1,"form-check-input","code-switcher",3,"click"],[1,"live-preview"],[1,"bg-light","p-3","text-center"],[1,"row","align-items-start",2,"min-height","6rem"],[1,"col-sm-4"],[1,"bg-primary-subtle","text-primary","rounded","p-2"],[1,"bg-primary-subtle","text-primary","rounded","p-2","mt-2","mt-sm-0"],[1,"d-none","code-view"],[1,"language-markup"],["for","verticl-align-center",1,"form-label","text-muted"],["type","checkbox","id","verticl-align-center",1,"form-check-input","code-switcher",3,"click"],[1,"row","align-items-center",2,"min-height","6rem"],["for","default",1,"form-label","text-muted"],["type","checkbox","id","default",1,"form-check-input","code-switcher",3,"click"],[1,"row","align-items-end",2,"min-height","6rem"],["for","align-self",1,"form-label","text-muted"],["type","checkbox","id","align-self",1,"form-check-input","code-switcher",3,"click"],[1,"row","g-2",2,"min-height","9rem"],[1,"col-sm-4","align-self-start"],[1,"col-sm-4","align-self-center"],[1,"col-sm-4","align-self-end"],["for","horizontal-align",1,"form-label","text-muted"],["type","checkbox","id","horizontal-align",1,"form-check-input","code-switcher",3,"click"],[1,"row","justify-content-start"],[1,"row","justify-content-center"],[1,"row","justify-content-end"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Grid Options"),i()(),t(7,"div",6)(8,"p",7),e(9,"See how aspects of the Bootstrap grid system work across multiple devices with a handy table."),i(),t(10,"div",8)(11,"table",9)(12,"thead")(13,"tr"),n(14,"th",10),t(15,"th",11),e(16," xs"),n(17,"br"),t(18,"span",12),e(19,"<576px"),i()(),t(20,"th",11),e(21," sm"),n(22,"br"),t(23,"span",12),e(24,"\u2265576px"),i()(),t(25,"th",11),e(26," md"),n(27,"br"),t(28,"span",12),e(29,"\u2265768px"),i()(),t(30,"th",11),e(31," lg"),n(32,"br"),t(33,"span",12),e(34,"\u2265992px"),i()(),t(35,"th",11),e(36," xl"),n(37,"br"),t(38,"span",12),e(39,"\u22651200px"),i()(),t(40,"th",11),e(41," xxl"),n(42,"br"),t(43,"span",12),e(44,"\u22651400px"),i()()()(),t(45,"tbody")(46,"tr")(47,"th",13),e(48,"Grid behavior"),i(),t(49,"td"),e(50,"Horizontal at all times"),i(),t(51,"td",14),e(52,"Collapsed to start, horizontal above breakpoints"),i()(),t(53,"tr")(54,"th",13),e(55,"Max container width"),i(),t(56,"td"),e(57,"None (auto)"),i(),t(58,"td"),e(59,"540px"),i(),t(60,"td"),e(61,"720px"),i(),t(62,"td"),e(63,"960px"),i(),t(64,"td"),e(65,"1140px"),i(),t(66,"td"),e(67,"1320px"),i()(),t(68,"tr")(69,"th",13),e(70,"Class prefix"),i(),t(71,"td")(72,"code"),e(73,"col-"),i()(),t(74,"td")(75,"code"),e(76,"col-sm-"),i()(),t(77,"td")(78,"code"),e(79,"col-md-"),i()(),t(80,"td")(81,"code"),e(82,"col-lg-"),i()(),t(83,"td")(84,"code"),e(85,"col-xl-"),i()(),t(86,"td")(87,"code"),e(88,"col-xxl-"),i()()(),t(89,"tr")(90,"th",13),e(91,"# of columns"),i(),t(92,"td",15),e(93,"12"),i()(),t(94,"tr")(95,"th",13),e(96,"Gutter width"),i(),t(97,"td",15),e(98,"1.5rem (0.75rem on each side of a column)"),i()(),t(99,"tr")(100,"th",13),e(101,"Custom gutters"),i(),t(102,"td",15),e(103,"Yes"),i()(),t(104,"tr")(105,"th",13),e(106,"Nestable"),i(),t(107,"td",15),e(108,"Yes"),i()(),t(109,"tr")(110,"th",13),e(111,"Offsets"),i(),t(112,"td",15),e(113,"Yes"),i()(),t(114,"tr")(115,"th",13),e(116,"Column ordering"),i(),t(117,"td",15),e(118,"Yes"),i()()()()()()()()(),t(119,"div",1)(120,"div",16)(121,"div",3)(122,"div",17)(123,"h4",18),e(124,"Vertical alignment (align-items-start)"),i(),t(125,"div",19)(126,"div",20)(127,"label",21),e(128,"Show Code"),i(),t(129,"input",22),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(130,"div",6)(131,"p",7),e(132,"Use "),t(133,"code"),e(134,"align-items-start"),i(),e(135," class to vertically align-items at the start. "),i(),t(136,"div",23)(137,"div",24)(138,"div",25)(139,"div",26)(140,"div",27),e(141," col-sm-4 "),i()(),t(142,"div",26)(143,"div",28),e(144," col-sm-4 "),i()(),t(145,"div",26)(146,"div",28),e(147," col-sm-4 "),i()()()()(),t(148,"div",29)(149,"pre",30)(150,"code"),e(151,`<!-- Vertical alignment (align-items-start) -->
<div class="row align-items-start">
<div class="col-sm-4">
...
</div>
<div class="col-sm-4">
...
</div>
<div class="col-sm-4">
...
</div>
</div>`),i()()()()()()(),t(152,"div",1)(153,"div",16)(154,"div",3)(155,"div",17)(156,"h4",18),e(157,"Vertical alignment (align-items-center)"),i(),t(158,"div",19)(159,"div",20)(160,"label",31),e(161,"Show Code"),i(),t(162,"input",32),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(163,"div",6)(164,"p",7),e(165,"Use "),t(166,"code"),e(167,"align-items-center"),i(),e(168," class to vertically align-items at the center. "),i(),t(169,"div",23)(170,"div",24)(171,"div",33)(172,"div",26)(173,"div",27),e(174," col-sm-4 "),i()(),t(175,"div",26)(176,"div",28),e(177," col-sm-4 "),i()(),t(178,"div",26)(179,"div",28),e(180," col-sm-4 "),i()()()()(),t(181,"div",29)(182,"pre",30)(183,"code"),e(184,`<!-- Vertical alignment (align-items-center) -->
<div class="row align-items-center">
<div class="col-sm-4">
...
</div>
<div class="col-sm-4">
...
</div>
<div class="col-sm-4">
...
</div>
</div>`),i()()()()()()(),t(185,"div",1)(186,"div",16)(187,"div",3)(188,"div",17)(189,"h4",18),e(190,"Vertical alignment (align-items-end)"),i(),t(191,"div",19)(192,"div",20)(193,"label",34),e(194,"Show Code"),i(),t(195,"input",35),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(196,"div",6)(197,"p",7),e(198,"Use "),t(199,"code"),e(200,"align-items-end"),i(),e(201," class to vertically align-items at the end."),i(),t(202,"div",23)(203,"div",24)(204,"div",36)(205,"div",26)(206,"div",27),e(207," col-sm-4 "),i()(),t(208,"div",26)(209,"div",28),e(210," col-sm-4 "),i()(),t(211,"div",26)(212,"div",28),e(213," col-sm-4 "),i()()()()(),t(214,"div",29)(215,"pre",30)(216,"code"),e(217,`<!-- Vertical alignment (align-items-end) -->
<div class="row align-items-end">
<div class="col-sm-4">
...
</div>
<div class="col-sm-4">
...
</div>
<div class="col-sm-4">
...
</div>
</div>`),i()()()()()()(),t(218,"div",1)(219,"div",16)(220,"div",3)(221,"div",17)(222,"h4",18),e(223,"Align Self"),i(),t(224,"div",19)(225,"div",20)(226,"label",37),e(227,"Show Code"),i(),t(228,"input",38),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(229,"div",6)(230,"p",7),e(231,"Use the "),t(232,"code"),e(233,"align-self-start"),i(),e(234,","),t(235,"code"),e(236,"align-self-center"),i(),e(237,", or "),t(238,"code"),e(239,"align-self-end"),i(),e(240," class respectively to vertically align items with a different position. "),i(),t(241,"div",23)(242,"div",24)(243,"div",39)(244,"div",40)(245,"div",27),e(246," align-self-start "),i()(),t(247,"div",41)(248,"div",27),e(249," align-self-center "),i()(),t(250,"div",42)(251,"div",27),e(252," align-self-end "),i()()()()(),t(253,"div",29)(254,"pre",30)(255,"code"),e(256,`<!-- Align Self -->
<div class="row">
<div class="col-sm-4 align-self-start">
...
</div>
<div class="col-sm-4 align-self-center">
...
</div>
<div class="col-sm-4 align-self-end">
...
</div>
</div>`),i()()()()()()(),t(257,"div",1)(258,"div",16)(259,"div",3)(260,"div",17)(261,"h4",18),e(262,"Horizontal Alignment"),i(),t(263,"div",19)(264,"div",20)(265,"label",43),e(266,"Show Code"),i(),t(267,"input",44),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(268,"div",6)(269,"p",7),e(270,"Use the "),t(271,"code"),e(272,"justify-content-start"),i(),e(273,","),t(274,"code"),e(275,"justify-content-center"),i(),e(276,", or "),t(277,"code"),e(278,"justify-content-end"),i(),e(279," class respectively to horizontally align items with a different position."),i(),t(280,"div",23)(281,"div",24)(282,"div",45)(283,"div",26)(284,"div",27),e(285," justify-content-start "),i()()(),t(286,"div",46)(287,"div",26)(288,"div",28),e(289," justify-content-center "),i()()(),t(290,"div",47)(291,"div",26)(292,"div",28),e(293," justify-content-end "),i()()()()(),t(294,"div",29)(295,"pre",30)(296,"code"),e(297,`<!-- Horizontal Alignment -->
<div class="row justify-content-start">
<div class="col-sm-4">
...
</div>
</div>`),i(),e(298,`
`),t(299,"code"),e(300,`<div class="row justify-content-center">
<div class="col-sm-4">
...
</div>
</div>`),i(),e(301,`
`),t(302,"code"),e(303,`<div class="row justify-content-end">
<div class="col-sm-4">
...
</div>
</div>`),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var Ii=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Images",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-images"]],standalone:!1,decls:408,vars:1,consts:[["title","Images",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","rounded-circle-image",1,"form-label","text-muted"],["type","checkbox","id","rounded-circle-image",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"row","align-items-center"],[1,"col-sm-6"],["alt","200x200","width","200","src","assets/images/small/img-4.jpg","data-holder-rendered","true",1,"rounded","material-shadow"],[1,"mt-4","mt-sm-0"],["alt","200x200","src","assets/images/users/avatar-4.jpg","data-holder-rendered","true",1,"rounded-circle","avatar-xl","material-shadow"],[1,"d-none","code-view"],[1,"language-markup"],["for","thumbnails-image",1,"form-label","text-muted"],["type","checkbox","id","thumbnails-image",1,"form-check-input","code-switcher",3,"click"],[1,"col-6"],["alt","200x200","width","200","src","assets/images/small/img-3.jpg","data-holder-rendered","true",1,"img-thumbnail"],[1,"mt-4","mt-md-0"],["alt","200x200","src","assets/images/users/avatar-3.jpg","data-holder-rendered","true",1,"img-thumbnail","rounded-circle","avatar-xl"],[1,"col-lg-12"],["for","image-size",1,"form-label","text-muted"],["type","checkbox","id","image-size",1,"form-check-input","code-switcher",3,"click"],[1,"text-muted","mb-4"],[1,"col-md-12"],[1,"row","g-3"],[1,"col-xxl-2","col-md-4","col-6"],["src","assets/images/users/avatar-2.jpg","alt","",1,"rounded","avatar-xxs","material-shadow"],[1,"mt-2","mb-lg-0"],["src","assets/images/users/avatar-10.jpg","alt","",1,"rounded","avatar-xs","material-shadow"],["src","assets/images/users/avatar-3.jpg","alt","",1,"rounded","avatar-sm","material-shadow"],["src","assets/images/users/avatar-4.jpg","alt","",1,"rounded","avatar-md","material-shadow"],["src","assets/images/users/avatar-5.jpg","alt","",1,"rounded","avatar-lg","material-shadow"],["src","assets/images/users/avatar-8.jpg","alt","",1,"rounded","avatar-xl","material-shadow"],[1,"row","g-3","mt-5"],["src","assets/images/users/avatar-2.jpg","alt","",1,"rounded-circle","avatar-xxs","material-shadow"],["src","assets/images/users/avatar-10.jpg","alt","",1,"rounded-circle","avatar-xs","material-shadow"],["src","assets/images/users/avatar-3.jpg","alt","",1,"rounded-circle","avatar-sm","material-shadow"],["src","assets/images/users/avatar-4.jpg","alt","",1,"rounded-circle","avatar-md","material-shadow"],["src","assets/images/users/avatar-5.jpg","alt","",1,"rounded-circle","avatar-lg","material-shadow"],["src","assets/images/users/avatar-8.jpg","alt","",1,"rounded-circle","avatar-xl","material-shadow"],[1,"language-markup",2,"height","275px"],["for","avatar-content",1,"form-label","text-muted"],["type","checkbox","id","avatar-content",1,"form-check-input","code-switcher",3,"click"],[1,"avatar-xxs","mt-3"],[1,"avatar-title","rounded","bg-primary-subtle","text-primary","fs-10","material-shadow"],[1,"avatar-xs","mt-3"],[1,"avatar-title","rounded","bg-secondary-subtle","text-secondary","material-shadow"],[1,"avatar-sm","mt-3"],[1,"avatar-title","rounded","bg-success-subtle","text-success","fs-14","material-shadow"],[1,"avatar-md","mt-3"],[1,"avatar-title","rounded","bg-info-subtle","text-info","fs-16","material-shadow"],[1,"avatar-lg","mt-3"],[1,"avatar-title","rounded","bg-warning-subtle","text-warning","fs-20","material-shadow"],[1,"avatar-xl","mt-3"],[1,"avatar-title","rounded","bg-danger-subtle","text-danger","fs-22","material-shadow"],[1,"language-markup",2,"height","200px"],["for","avatar-group",1,"form-label","text-muted"],["type","checkbox","id","avatar-group",1,"form-check-input","code-switcher",3,"click"],[1,"col-lg-6"],[1,"mt-lg-0","mt-3"],[1,"avatar-group"],[1,"avatar-group-item","material-shadow"],["src","assets/images/users/avatar-4.jpg","alt","",1,"rounded-circle","avatar-sm"],["src","assets/images/users/avatar-5.jpg","alt","",1,"rounded-circle","avatar-sm"],[1,"avatar-sm"],[1,"avatar-title","rounded-circle","bg-light","text-primary"],["src","assets/images/users/avatar-2.jpg","alt","",1,"rounded-circle","avatar-sm"],["href","javascript: void(0);","ngbTooltip","Christi","placement","top","data-bs-toggle","tooltip","data-bs-placement","top","title","Christi",1,"avatar-group-item","material-shadow"],["href","javascript: void(0);","ngbTooltip","Frank Hook","placement","top","data-bs-toggle","tooltip","data-bs-placement","top","title","Frank Hook",1,"avatar-group-item","material-shadow"],["src","assets/images/users/avatar-3.jpg","alt","",1,"rounded-circle","avatar-sm"],["href","javascript: void(0);","ngbTooltip","MORE","placement","top","data-bs-toggle","tooltip","data-bs-placement","top","title","mORE",1,"avatar-group-item","material-shadow"],[1,"avatar-title","rounded-circle"],[1,"col-xl-8"],["for","Figures-image",1,"form-label","text-muted"],["type","checkbox","id","Figures-image",1,"form-check-input","code-switcher",3,"click"],[1,"card-title-desc","text-muted"],[1,"figure","mb-0"],["src","assets/images/small/img-4.jpg","alt","...",1,"figure-img","img-fluid","rounded"],[1,"figure-caption"],["src","assets/images/small/img-5.jpg","alt","...",1,"figure-img","img-fluid","rounded"],[1,"figure-caption","text-end"],[1,"col-xl-4"],["for","responsive-image",1,"form-label","text-muted"],["type","checkbox","id","responsive-image",1,"form-check-input","code-switcher",3,"click"],["src","assets/images/small/img-2.jpg","alt","Responsive image",1,"img-fluid"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Image Rounded & Circle"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"Use "),t(15,"code"),e(16,"rounded"),i(),e(17," class and "),t(18,"code"),e(19,"rounded-circle"),i(),e(20," class to show an image with a round border and rounded shape respectively. "),i(),t(21,"div",12)(22,"div",13)(23,"div",14),n(24,"img",15),i(),t(25,"div",14)(26,"div",16),n(27,"img",17),i()()()(),t(28,"div",18)(29,"pre",19)(30,"code"),e(31,`<!-- Rounded Image -->
<img class="rounded material-shadow" alt="200x200" width="200" src="assets/images/small/img-4.jpg">`),i(),e(32,`

`),t(33,"code"),e(34,`<!-- Rounded-circle Image -->
<img class="rounded-circle avatar-xl material-shadow" alt="200x200" src="assets/images/users/avatar-4.jpg">`),i()()()()()(),t(35,"div",2)(36,"div",3)(37,"div",4)(38,"h4",5),e(39,"Image Thumbnails"),i(),t(40,"div",6)(41,"div",7)(42,"label",20),e(43,"Show Code"),i(),t(44,"input",21),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(45,"div",10)(46,"p",11),e(47,"Use "),t(48,"code"),e(49,"img-thumbnail"),i(),e(50," class to give an image rounded 1px border appearance."),i(),t(51,"div",12)(52,"div",1)(53,"div",22),n(54,"img",23),i(),t(55,"div",22)(56,"div",24),n(57,"img",25),i()()()(),t(58,"div",18)(59,"pre",19)(60,"code"),e(61,`<!-- Thumbnails Images -->
<img class="img-thumbnail" alt="200x200" width="200" src="assets/images/small/img-3.jpg">`),i(),e(62,`

`),t(63,"code"),e(64,'<img class="img-thumbnail rounded-circle avatar-xl" alt="200x200" src="assets/images/users/avatar-3.jpg">'),i()()()()()()(),t(65,"div",1)(66,"div",26)(67,"div",3)(68,"div",4)(69,"h4",5),e(70,"Image Sizes"),i(),t(71,"div",6)(72,"div",7)(73,"label",27),e(74,"Show Code"),i(),t(75,"input",28),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(76,"div",10)(77,"p",29),e(78,"Use "),t(79,"code"),e(80,"avatar-xxs"),i(),e(81,", "),t(82,"code"),e(83,"avatar-xs"),i(),e(84,", "),t(85,"code"),e(86,"avatar-sm"),i(),e(87,", "),t(88,"code"),e(89,"avatar-md"),i(),e(90,", "),t(91,"code"),e(92,"avatar-lg"),i(),e(93,", "),t(94,"code"),e(95,"avatar-xl"),i(),e(96," class for different image sizes."),i(),t(97,"div",12)(98,"div",1)(99,"div",30)(100,"div",31)(101,"div",32)(102,"div"),n(103,"img",33),t(104,"p",34)(105,"code"),e(106,"avatar-xxs"),i()()()(),t(107,"div",32)(108,"div"),n(109,"img",35),t(110,"p",34)(111,"code"),e(112,"avatar-xs"),i()()()(),t(113,"div",32)(114,"div"),n(115,"img",36),t(116,"p",34)(117,"code"),e(118,"avatar-sm"),i()()()(),t(119,"div",32)(120,"div"),n(121,"img",37),t(122,"p",34)(123,"code"),e(124,"avatar-md"),i()()()(),t(125,"div",32)(126,"div"),n(127,"img",38),t(128,"p",34)(129,"code"),e(130,"avatar-lg"),i()()()(),t(131,"div",32)(132,"div"),n(133,"img",39),t(134,"p",34)(135,"code"),e(136,"avatar-xl"),i()()()()()(),t(137,"div",30)(138,"div",40)(139,"div",32)(140,"div"),n(141,"img",41),t(142,"p",34)(143,"code"),e(144,"avatar-xxs"),i()()()(),t(145,"div",32)(146,"div"),n(147,"img",42),t(148,"p",34)(149,"code"),e(150,"avatar-xs"),i()()()(),t(151,"div",32)(152,"div"),n(153,"img",43),t(154,"p",34)(155,"code"),e(156,"avatar-sm"),i()()()(),t(157,"div",32)(158,"div"),n(159,"img",44),t(160,"p",34)(161,"code"),e(162,"avatar-md"),i()()()(),t(163,"div",32)(164,"div"),n(165,"img",45),t(166,"p",34)(167,"code"),e(168,"avatar-lg"),i()()()(),t(169,"div",32)(170,"div"),n(171,"img",46),t(172,"p",34)(173,"code"),e(174,"avatar-xl"),i()()()()()()()(),t(175,"div",18)(176,"pre",47)(177,"code"),e(178,`<!-- Image Sizes -->
<img src="assets/images/users/avatar-2.jpg" alt="" class="rounded avatar-xxs material-shadow">`),i(),e(179,`

`),t(180,"code"),e(181,'<img src="assets/images/users/avatar-10.jpg" alt="" class="rounded avatar-xs material-shadow">'),i(),e(182,`

`),t(183,"code"),e(184,'<img src="assets/images/users/avatar-3.jpg" alt="" class="rounded avatar-sm material-shadow">'),i(),e(185,`

`),t(186,"code"),e(187,'<img src="assets/images/users/avatar-4.jpg" alt="" class="rounded avatar-md material-shadow">'),i(),e(188,`

`),t(189,"code"),e(190,'<img src="assets/images/users/avatar-5.jpg" alt="" class="rounded avatar-lg material-shadow">'),i(),e(191,`

`),t(192,"code"),e(193,'<img src="assets/images/users/avatar-8.jpg" alt="" class="rounded avatar-xl material-shadow">'),i(),e(194,`

`),t(195,"code"),e(196,'<img src="assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xxs material-shadow">'),i(),e(197,`

`),t(198,"code"),e(199,'<img src="assets/images/users/avatar-10.jpg" alt="" class="rounded-circle avatar-xs material-shadow">'),i(),e(200,`

`),t(201,"code"),e(202,'<img src="assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-sm material-shadow">'),i(),e(203,`

`),t(204,"code"),e(205,'<img src="assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-md material-shadow">'),i(),e(206,`

`),t(207,"code"),e(208,'<img src="assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-lg material-shadow">'),i(),e(209,`

`),t(210,"code"),e(211,'<img src="assets/images/users/avatar-8.jpg" alt="" class="rounded-circle avatar-xl material-shadow">'),i()()()()()()(),t(212,"div",1)(213,"div",26)(214,"div",3)(215,"div",4)(216,"h4",5),e(217,"Avatar With Content"),i(),t(218,"div",6)(219,"div",7)(220,"label",48),e(221,"Show Code"),i(),t(222,"input",49),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(223,"div",10)(224,"p",11),e(225,"Use "),t(226,"code"),e(227,"avatar-xxs, avatar-xs,avatar-sm,avatar-md,avatar-lg,avatar-xl"),i(),e(228," class to set different avatar content."),i(),t(229,"div",12)(230,"div",31)(231,"div",32)(232,"div",50)(233,"div",51),e(234," XXS "),i()()(),t(235,"div",32)(236,"div",52)(237,"div",53),e(238," XS "),i()()(),t(239,"div",32)(240,"div",54)(241,"div",55),e(242," SM "),i()()(),t(243,"div",32)(244,"div",56)(245,"div",57),e(246," MD "),i()()(),t(247,"div",32)(248,"div",58)(249,"div",59),e(250," LG "),i()()(),t(251,"div",32)(252,"div",60)(253,"div",61),e(254," XL "),i()()()()(),t(255,"div",18)(256,"pre",62)(257,"code"),e(258,`<!-- Avatar With Content -->
<div class="avatar-xxs">
<div class="avatar-title rounded bg-primary-subtle text-primary material-shadow">
XXS
</div>
</div>`),i(),e(259,`

`),t(260,"code"),e(261,`<div class="avatar-xs">
<div class="avatar-title rounded bg-secondary-subtle text-secondary material-shadow">
XS
</div>
</div>`),i(),e(262,`

`),t(263,"code"),e(264,`<div class="avatar-sm">
<div class="avatar-title rounded bg-success-subtle text-success material-shadow">
Sm
</div>
</div>`),i(),e(265,`

`),t(266,"code"),e(267,`<div class="avatar-md">
<div class="avatar-title rounded bg-info-subtle text-info material-shadow">
Md
</div>
</div>`),i(),e(268,`

`),t(269,"code"),e(270,`<div class="avatar-lg">
<div class="avatar-title rounded bg-warning-subtle text-warning material-shadow">
Lg
</div>
</div>`),i(),e(271,`

`),t(272,"code"),e(273,`<div class="avatar-xl">
<div class="avatar-title rounded bg-danger-subtle text-danger material-shadow">
Xl
</div>
</div>`),i()()()()()()(),t(274,"div",1)(275,"div",26)(276,"div",3)(277,"div",4)(278,"h4",5),e(279,"Avatar Group"),i(),t(280,"div",6)(281,"div",7)(282,"label",63),e(283,"Show Code"),i(),t(284,"input",64),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(285,"div",10),n(286,"p"),t(287,"div",12)(288,"div",1)(289,"div",65)(290,"div",66)(291,"p",11),e(292,"Use "),t(293,"code"),e(294,"avatar-group"),i(),e(295," class to show avatar images with the group."),i(),t(296,"div",67)(297,"div",68),n(298,"img",69),i(),t(299,"div",68),n(300,"img",70),i(),t(301,"div",68)(302,"div",71)(303,"div",72),e(304," A "),i()()(),t(305,"div",68),n(306,"img",73),i()()()(),t(307,"div",65)(308,"div",66)(309,"p",11),e(310,"Use "),t(311,"code"),e(312,"avatar-group"),i(),e(313," class with "),t(314,"code"),e(315,'data-bs-toggle="tooltip"'),i(),e(316," to show avatar group images with tooltip."),i(),t(317,"div",67)(318,"a",74),n(319,"img",69),i(),t(320,"a",75),n(321,"img",76),i(),t(322,"a",74)(323,"div",71)(324,"div",72),e(325," C "),i()()(),t(326,"a",77)(327,"div",71)(328,"div",78),e(329," 2+ "),i()()()()()()()(),t(330,"div",18)(331,"pre",47)(332,"code"),e(333,`<!-- Simple Group -->
<div class="avatar-group">
<div class="avatar-group-item material-shadow">
<img src="assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-sm">
</div>
<div class="avatar-group-item material-shadow">
<img src="assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-sm">
</div>
<div class="avatar-group-item material-shadow">
<div class="avatar-sm">
<div class="avatar-title rounded-circle bg-light text-primary">
A
</div>
</div>
</div>
<div class="avatar-group-item material-shadow">
<img src="assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-sm">
</div>
</div>`),i(),e(334,`

`),t(335,"code"),e(336,`<!-- Avatar Group with Tooltip -->
<div class="avatar-group">
<a href="javascript: void(0);" class="avatar-group-item material-shadow" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
<img src="assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-sm">
</a>
<a href="javascript: void(0);" class="avatar-group-item material-shadow" data-bs-toggle="tooltip" data-bs-placement="top" title="Frank Hook">
<img src="assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-sm">
</a>
<a href="javascript: void(0);" class="avatar-group-item material-shadow" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
<div class="avatar-sm">
<div class="avatar-title rounded-circle bg-light text-primary">
C
</div>
</div>
</a>
<a href="javascript: void(0);" class="avatar-group-item material-shadow" data-bs-toggle="tooltip" data-bs-placement="top" title="more">
<div class="avatar-sm">
<div class="avatar-title rounded-circle">
2+
</div>
</div>
</a>
</div>`),i()()()()()()(),t(337,"div",1)(338,"div",79)(339,"div",3)(340,"div",4)(341,"h4",5),e(342,"Figures"),i(),t(343,"div",6)(344,"div",7)(345,"label",80),e(346,"Show Code"),i(),t(347,"input",81),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(348,"div",10)(349,"p",82),e(350,"Use the included "),t(351,"code"),e(352,"figure"),i(),e(353,", "),t(354,"code"),e(355,"figure-img"),i(),e(356," and "),t(357,"code"),e(358,"figure-caption"),i(),e(359," classes to provide some baseline styles for the HTML5 "),t(360,"code"),e(361,"<figure>"),i(),e(362," and "),t(363,"code"),e(364,"<figcaption>"),i(),e(365," elements."),i(),t(366,"div",12)(367,"div",31)(368,"div",14)(369,"figure",83),n(370,"img",84),t(371,"figcaption",85),e(372,"A caption for the above image."),i()()(),t(373,"div",14)(374,"figure",83),n(375,"img",86),t(376,"figcaption",87),e(377,"A caption for the above image."),i()()()()(),t(378,"div",18)(379,"pre",19)(380,"code"),e(381,`<!-- figures Images -->
<figure class="figure">
<img src="assets/images/small/img-4.jpg" class="figure-img img-fluid rounded" alt="...">
<figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>`),i(),e(382,`

`),t(383,"code"),e(384,`<figure class="figure mb-0">
<img src="assets/images/small/img-5.jpg" class="figure-img img-fluid rounded" alt="...">
<figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>`),i()()()()()(),t(385,"div",88)(386,"div",3)(387,"div",4)(388,"h4",5),e(389,"Responsive Images"),i(),t(390,"div",6)(391,"div",7)(392,"label",89),e(393,"Show Code"),i(),t(394,"input",90),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(395,"div",10)(396,"p",82),e(397,"Responsive Images with "),t(398,"code"),e(399,"img-fluid,max-width: 100%; and height: auto;"),i(),e(400," to the image so that it scales with the parent width."),i(),t(401,"div",12)(402,"div"),n(403,"img",91),i()(),t(404,"div",18)(405,"pre",19)(406,"code"),e(407,`<!-- Responsive Images -->
<img src="assets/images/small/img-2.jpg" class="img-fluid" alt="Responsive image">`),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D,re],encapsulation:2})}}return l})();var Mi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Colors",active:!0}]}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-colors"]],standalone:!1,decls:772,vars:1,consts:[["title","Colors",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"mb-0","text-muted"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-bordered","table-striped","table-nowrap","align-middle","mb-0"],["scope","col"],["scope","col","colspan","2",1,"text-center"],["scope","row",1,""],[2,"width","100px"],[2,"width","180px"],[1,"bg-primary","bg-gradient","p-2"],[1,"bg-primary","p-2"],[1,"bg-primary-subtle","p-2"],[1,"border","border-primary","p-2"],[1,"text-primary"],[1,"bg-secondary","bg-gradient","p-2"],[1,"bg-secondary","p-2"],[1,"bg-secondary-subtle","p-2"],[1,"border","border-secondary","p-2"],[1,"text-secondary"],[1,"bg-success","bg-gradient","p-2","align-self-center"],[1,"bg-success","p-2"],[1,"bg-success-subtle","p-2"],[1,"border","border-success","p-2"],[1,"text-success"],[1,"bg-info","bg-gradient","p-2"],[1,"bg-info","p-2"],[1,"bg-info-subtle","p-2"],[1,"border","border-info","p-2"],[1,"text-info"],[1,"bg-warning","bg-gradient","p-2"],[1,"bg-warning","p-2"],[1,"bg-warning-subtle","p-2"],[1,"border","border-warning","p-2"],[1,"text-warning"],[1,"bg-danger","bg-gradient","p-2"],[1,"bg-danger","p-2"],[1,"bg-danger-subtle","p-2"],[1,"border","border-danger","p-2"],[1,"text-danger"],[1,"bg-body","bg-gradient","p-2"],[1,"bg-body","p-2"],[1,"bg-dark-subtle","p-2"],[1,"border","border-dark","p-2"],[1,"text-body"],[1,"bg-light","bg-gradient","p-2"],[1,"bg-light","p-2"],[1,"bg-light-subtle","p-2"],[1,"border","border-light","p-2"],[1,"text-body","bg-body"],[1,"text-center"],[1,"bg-body-secondary","border","p-2"],[1,"text-body-secondary"],[1,"bg-body-tertiary","p-2"],[1,"text-body-tertiary"],[1,"text-body-emphasis"],[1,"text-muted"],[1,"text-white","bg-dark"],[1,"text-white-50","bg-dark"],[1,"text-black-50"],[1,"bg-primary","bg-opacity-10","p-2"],[1,"border","border-primary","border-opacity-10","p-2"],[1,"bg-primary","opacity-25","p-2"],[1,"bg-primary","bg-opacity-25","p-2"],[1,"border","border-primary","border-opacity-25","p-2"],[1,"text-opacity-25","text-primary"],[1,"bg-primary","opacity-50","p-2"],[1,"bg-primary","bg-opacity-50","p-2"],[1,"border","border-primary","border-opacity-50","p-2"],[1,"text-opacity-50","text-primary"],[1,"bg-primary","opacity-75","p-2"],[1,"bg-primary","bg-opacity-75","p-2"],[1,"border","border-primary","border-opacity-75","p-2"],[1,"text-opacity-75","text-primary"],[1,"bg-primary","opacity-100","p-2"],[1,"bg-primary","bg-opacity-100","p-2"],[1,"border","border-primary","border-opacity-100","p-2"],[1,"text-opacity-100","text-primary"],[1,"card-title","mb-0"],[1,"row","g-3"],[1,"col-lg-6"],[1,"table","table-bordered","align-middle","mb-0"],[1,"text-primary-emphasis"],[1,"text-secondary-emphasis"],[1,"text-success-emphasis"],[1,"text-info-emphasis"],[1,"text-warning-emphasis"],[1,"text-danger-emphasis"],[1,"text-dark-emphasis"],[1,"text-light-emphasis"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Colors Options"),i(),t(7,"p",6),e(8,"Use different "),t(9,"code"),e(10,"color style"),i(),e(11," to color your element with a given table."),i()(),t(12,"div",7)(13,"div",8)(14,"table",9)(15,"thead")(16,"tr")(17,"th",10),e(18," Colors "),i(),t(19,"th",11),e(20," Background "),n(21,"br"),e(22," Gradient "),i(),t(23,"th",11),e(24," Background "),n(25,"br"),e(26," Color "),i(),t(27,"th",11),e(28," Background "),n(29,"br"),e(30," Soft "),i(),t(31,"th",11),e(32," Border "),n(33,"br"),e(34," Colors "),i(),t(35,"th",11),e(36," Text "),n(37,"br"),e(38," Colors "),i()()(),t(39,"tbody")(40,"tr")(41,"th",12),e(42," Primary "),i(),t(43,"td",13)(44,"code"),e(45,".bg-gradient"),i()(),t(46,"td",14),n(47,"div",15),i(),t(48,"td",13)(49,"code"),e(50,".bg-primary"),i()(),t(51,"td",14),n(52,"div",16),i(),t(53,"td",13)(54,"code"),e(55,".bg-primary-subtle"),i()(),t(56,"td",14),n(57,"div",17),i(),t(58,"td",13)(59,"code"),e(60,".border-primary"),i()(),t(61,"td",14),n(62,"div",18),i(),t(63,"td",13)(64,"code"),e(65,".text-primary"),i()(),t(66,"td",13)(67,"div",19),e(68,"text-primary"),i()()(),t(69,"tr")(70,"th",12),e(71," Secondary "),i(),t(72,"td")(73,"code"),e(74,".bg-gradient"),i()(),t(75,"td"),n(76,"div",20),i(),t(77,"td")(78,"code"),e(79,".bg-secondary"),i()(),t(80,"td"),n(81,"div",21),i(),t(82,"td")(83,"code"),e(84,".bg-secondary-subtle"),i()(),t(85,"td"),n(86,"div",22),i(),t(87,"td")(88,"code"),e(89,".border-secondary"),i()(),t(90,"td"),n(91,"div",23),i(),t(92,"td")(93,"code"),e(94,".text-secondary"),i()(),t(95,"td")(96,"div",24),e(97,"text-secondary"),i()()(),t(98,"tr")(99,"th",12),e(100," Success "),i(),t(101,"td")(102,"code"),e(103,".bg-gradient"),i()(),t(104,"td"),n(105,"div",25),i(),t(106,"td")(107,"code"),e(108,".bg-success"),i()(),t(109,"td"),n(110,"div",26),i(),t(111,"td")(112,"code"),e(113,".bg-success-subtle"),i()(),t(114,"td"),n(115,"div",27),i(),t(116,"td")(117,"code"),e(118,".border-success"),i()(),t(119,"td"),n(120,"div",28),i(),t(121,"td")(122,"code"),e(123,".text-success"),i()(),t(124,"td")(125,"div",29),e(126,"text-success"),i()()(),t(127,"tr")(128,"th",12),e(129," Info "),i(),t(130,"td")(131,"code"),e(132,".bg-gradient"),i()(),t(133,"td"),n(134,"div",30),i(),t(135,"td")(136,"code"),e(137,".bg-info"),i()(),t(138,"td"),n(139,"div",31),i(),t(140,"td")(141,"code"),e(142,".bg-info-subtle"),i()(),t(143,"td"),n(144,"div",32),i(),t(145,"td")(146,"code"),e(147,".border-info"),i()(),t(148,"td"),n(149,"div",33),i(),t(150,"td")(151,"code"),e(152,".text-info"),i()(),t(153,"td")(154,"div",34),e(155,"text-info"),i()()(),t(156,"tr")(157,"th",12),e(158," Warning "),i(),t(159,"td")(160,"code"),e(161,".bg-gradient"),i()(),t(162,"td"),n(163,"div",35),i(),t(164,"td")(165,"code"),e(166,".bg-warning"),i()(),t(167,"td"),n(168,"div",36),i(),t(169,"td")(170,"code"),e(171,".bg-warning-subtle"),i()(),t(172,"td"),n(173,"div",37),i(),t(174,"td")(175,"code"),e(176,".border-warning"),i()(),t(177,"td"),n(178,"div",38),i(),t(179,"td")(180,"code"),e(181,".text-warning"),i()(),t(182,"td")(183,"div",39),e(184,"text-warning"),i()()(),t(185,"tr")(186,"th",12),e(187," Danger "),i(),t(188,"td")(189,"code"),e(190,".bg-gradient"),i()(),t(191,"td"),n(192,"div",40),i(),t(193,"td")(194,"code"),e(195,".bg-danger"),i()(),t(196,"td"),n(197,"div",41),i(),t(198,"td")(199,"code"),e(200,".bg-danger-subtle"),i()(),t(201,"td"),n(202,"div",42),i(),t(203,"td")(204,"code"),e(205,".border-danger"),i()(),t(206,"td"),n(207,"div",43),i(),t(208,"td")(209,"code"),e(210,".text-danger"),i()(),t(211,"td")(212,"div",44),e(213,"text-danger"),i()()(),t(214,"tr")(215,"th",12),e(216," Dark "),i(),t(217,"td")(218,"code"),e(219,".bg-gradient"),i()(),t(220,"td"),n(221,"div",45),i(),t(222,"td")(223,"code"),e(224,".bg-body"),i()(),t(225,"td"),n(226,"div",46),i(),t(227,"td")(228,"code"),e(229,".bg-dark-subtle"),i()(),t(230,"td"),n(231,"div",47),i(),t(232,"td")(233,"code"),e(234,".border-dark"),i()(),t(235,"td"),n(236,"div",48),i(),t(237,"td")(238,"code"),e(239,".text-body"),i()(),t(240,"td")(241,"div",49),e(242,"text-body"),i()()(),t(243,"tr")(244,"th",12),e(245," Light "),i(),t(246,"td")(247,"code"),e(248,".bg-gradient"),i()(),t(249,"td"),n(250,"div",50),i(),t(251,"td")(252,"code"),e(253,".bg-light"),i()(),t(254,"td"),n(255,"div",51),i(),t(256,"td")(257,"code"),e(258,".bg-light-subtle"),i()(),t(259,"td"),n(260,"div",52),i(),t(261,"td")(262,"code"),e(263,".border-light"),i()(),t(264,"td"),n(265,"div",53),i(),t(266,"td")(267,"code"),e(268,".text-body"),i()(),t(269,"td")(270,"div",54),e(271,"text-body"),i()()(),t(272,"tr")(273,"th",12),e(274," Body "),i(),t(275,"td")(276,"div",55),e(277,"-"),i()(),t(278,"td")(279,"div",55),e(280,"-"),i()(),t(281,"td")(282,"code"),e(283,".bg-body"),i()(),t(284,"td"),n(285,"div",46),i(),t(286,"td")(287,"div",55),e(288,"-"),i()(),t(289,"td")(290,"div",55),e(291,"-"),i()(),t(292,"td")(293,"div",55),e(294,"-"),i()(),t(295,"td")(296,"div",55),e(297,"-"),i()(),t(298,"td")(299,"code"),e(300,".text-body"),i()(),t(301,"td")(302,"div",49),e(303,"text-body"),i()()(),t(304,"tr")(305,"th",12),e(306," Body Secondary "),i(),t(307,"td")(308,"div",55),e(309,"-"),i()(),t(310,"td")(311,"div",55),e(312,"-"),i()(),t(313,"td")(314,"code"),e(315,".bg-body-secondary"),i()(),t(316,"td"),n(317,"div",56),i(),t(318,"td")(319,"div",55),e(320,"-"),i()(),t(321,"td")(322,"div",55),e(323,"-"),i()(),t(324,"td")(325,"div",55),e(326,"-"),i()(),t(327,"td")(328,"div",55),e(329,"-"),i()(),t(330,"td")(331,"code"),e(332,".text-body-secondary"),i()(),t(333,"td")(334,"div",57),e(335,"text-body-secondary"),i()()(),t(336,"tr")(337,"th",12),e(338," Body Tertiary "),i(),t(339,"td")(340,"div",55),e(341,"-"),i()(),t(342,"td")(343,"div",55),e(344,"-"),i()(),t(345,"td")(346,"code"),e(347,".bg-body-tertiary"),i()(),t(348,"td"),n(349,"div",58),i(),t(350,"td")(351,"div",55),e(352,"-"),i()(),t(353,"td")(354,"div",55),e(355,"-"),i()(),t(356,"td")(357,"div",55),e(358,"-"),i()(),t(359,"td")(360,"div",55),e(361,"-"),i()(),t(362,"td")(363,"code"),e(364,".text-body-tertiary"),i()(),t(365,"td")(366,"div",59),e(367,"text-body-tertiary"),i()()(),t(368,"tr")(369,"th",12),e(370," Body Emphasis "),i(),t(371,"td")(372,"div",55),e(373,"-"),i()(),t(374,"td")(375,"div",55),e(376,"-"),i()(),t(377,"td")(378,"div",55),e(379,"-"),i()(),t(380,"td")(381,"div",55),e(382,"-"),i()(),t(383,"td")(384,"div",55),e(385,"-"),i()(),t(386,"td")(387,"div",55),e(388,"-"),i()(),t(389,"td")(390,"div",55),e(391,"-"),i()(),t(392,"td")(393,"div",55),e(394,"-"),i()(),t(395,"td")(396,"code"),e(397,".text-body-emphasis"),i()(),t(398,"td")(399,"div",60),e(400,"text-body-emphasis"),i()()(),t(401,"tr")(402,"th",12),e(403," Muted "),i(),t(404,"td")(405,"div",55),e(406,"-"),i()(),t(407,"td")(408,"div",55),e(409,"-"),i()(),t(410,"td")(411,"div",55),e(412,"-"),i()(),t(413,"td")(414,"div",55),e(415,"-"),i()(),t(416,"td")(417,"div",55),e(418,"-"),i()(),t(419,"td")(420,"div",55),e(421,"-"),i()(),t(422,"td")(423,"div",55),e(424,"-"),i()(),t(425,"td")(426,"div",55),e(427,"-"),i()(),t(428,"td")(429,"code"),e(430,".text-muted"),i()(),t(431,"td")(432,"div",61),e(433,"text-muted"),i()()(),t(434,"tr")(435,"th",12),e(436," White "),i(),t(437,"td")(438,"div",55),e(439,"-"),i()(),t(440,"td")(441,"div",55),e(442,"-"),i()(),t(443,"td")(444,"div",55),e(445,"-"),i()(),t(446,"td")(447,"div",55),e(448,"-"),i()(),t(449,"td")(450,"div",55),e(451,"-"),i()(),t(452,"td")(453,"div",55),e(454,"-"),i()(),t(455,"td")(456,"div",55),e(457,"-"),i()(),t(458,"td")(459,"div",55),e(460,"-"),i()(),t(461,"td")(462,"code"),e(463,".text-white"),i()(),t(464,"td")(465,"div",62),e(466,"text-white"),i()()(),t(467,"tr")(468,"th",12),e(469," White-50 "),i(),t(470,"td")(471,"div",55),e(472,"-"),i()(),t(473,"td")(474,"div",55),e(475,"-"),i()(),t(476,"td")(477,"div",55),e(478,"-"),i()(),t(479,"td")(480,"div",55),e(481,"-"),i()(),t(482,"td")(483,"div",55),e(484,"-"),i()(),t(485,"td")(486,"div",55),e(487,"-"),i()(),t(488,"td")(489,"div",55),e(490,"-"),i()(),t(491,"td")(492,"div",55),e(493,"-"),i()(),t(494,"td")(495,"code"),e(496,".text-white-50"),i()(),t(497,"td")(498,"div",63),e(499,"text-white-50"),i()()(),t(500,"tr")(501,"th",12),e(502," Black-50 "),i(),t(503,"td")(504,"div",55),e(505,"-"),i()(),t(506,"td")(507,"div",55),e(508,"-"),i()(),t(509,"td")(510,"div",55),e(511,"-"),i()(),t(512,"td")(513,"div",55),e(514,"-"),i()(),t(515,"td")(516,"div",55),e(517,"-"),i()(),t(518,"td")(519,"div",55),e(520,"-"),i()(),t(521,"td")(522,"div",55),e(523,"-"),i()(),t(524,"td")(525,"div",55),e(526,"-"),i()(),t(527,"td")(528,"code"),e(529,".text-black-50"),i()(),t(530,"td")(531,"div",64),e(532,"text-black-50"),i()()(),t(533,"tr")(534,"th",12),e(535," Opacity-10 "),i(),t(536,"td")(537,"div",55),e(538,"-"),i()(),t(539,"td")(540,"div",55),e(541,"-"),i()(),t(542,"td")(543,"div",55)(544,"code"),e(545,".bg-opacity-10"),i()()(),t(546,"td")(547,"div",55),n(548,"div",65),i()(),t(549,"td")(550,"div",55),e(551,"-"),i()(),t(552,"td")(553,"div",55),e(554,"-"),i()(),t(555,"td")(556,"code"),e(557,".border-opacity-10"),i()(),t(558,"td"),n(559,"div",66),i(),t(560,"td")(561,"div",55),e(562,"-"),i()(),t(563,"td")(564,"div",55),e(565,"-"),i()()(),t(566,"tr")(567,"th",12),e(568," Opacity-25 "),i(),t(569,"td")(570,"div",55)(571,"code"),e(572,".opacity-25"),i()()(),t(573,"td")(574,"div",55),n(575,"div",67),i()(),t(576,"td")(577,"div",55)(578,"code"),e(579,".bg-opacity-25"),i()()(),t(580,"td")(581,"div",55),n(582,"div",68),i()(),t(583,"td")(584,"div",55),e(585,"-"),i()(),t(586,"td")(587,"div",55),e(588,"-"),i()(),t(589,"td")(590,"code"),e(591,".border-opacity-25"),i()(),t(592,"td"),n(593,"div",69),i(),t(594,"td")(595,"code"),e(596,".text-opacity-25"),i()(),t(597,"td")(598,"div",70),e(599,"text-opacity-25"),i()()(),t(600,"tr")(601,"th",12),e(602," Opacity-50 "),i(),t(603,"td")(604,"div",55)(605,"code"),e(606,".opacity-50"),i()()(),t(607,"td")(608,"div",55),n(609,"div",71),i()(),t(610,"td")(611,"div",55)(612,"code"),e(613,".bg-opacity-50"),i()()(),t(614,"td")(615,"div",55),n(616,"div",72),i()(),t(617,"td")(618,"div",55),e(619,"-"),i()(),t(620,"td")(621,"div",55),e(622,"-"),i()(),t(623,"td")(624,"code"),e(625,".border-opacity-50"),i()(),t(626,"td"),n(627,"div",73),i(),t(628,"td")(629,"code"),e(630,".text-opacity-50"),i()(),t(631,"td")(632,"div",74),e(633,"text-opacity-50"),i()()(),t(634,"tr")(635,"th",12),e(636," Opacity-75 "),i(),t(637,"td")(638,"div",55)(639,"code"),e(640,".opacity-75"),i()()(),t(641,"td")(642,"div",55),n(643,"div",75),i()(),t(644,"td")(645,"div",55)(646,"code"),e(647,".bg-opacity-75"),i()()(),t(648,"td")(649,"div",55),n(650,"div",76),i()(),t(651,"td")(652,"div",55),e(653,"-"),i()(),t(654,"td")(655,"div",55),e(656,"-"),i()(),t(657,"td")(658,"code"),e(659,".border-opacity-75"),i()(),t(660,"td"),n(661,"div",77),i(),t(662,"td")(663,"code"),e(664,".text-opacity-75"),i()(),t(665,"td")(666,"div",78),e(667,"text-opacity-75"),i()()(),t(668,"tr")(669,"th",12),e(670," Opacity-100 "),i(),t(671,"td")(672,"div",55)(673,"code"),e(674,".opacity-100"),i()()(),t(675,"td")(676,"div",55),n(677,"div",79),i()(),t(678,"td")(679,"div",55)(680,"code"),e(681,".bg-opacity-100"),i()()(),t(682,"td")(683,"div",55),n(684,"div",80),i()(),t(685,"td")(686,"div",55),e(687,"-"),i()(),t(688,"td")(689,"div",55),e(690,"-"),i()(),t(691,"td")(692,"code"),e(693,".border-opacity-100"),i()(),t(694,"td"),n(695,"div",81),i(),t(696,"td")(697,"code"),e(698,".text-opacity-100"),i()(),t(699,"td")(700,"div",82),e(701,"text-opacity-100"),i()()()()()()()()()(),t(702,"div",3)(703,"div",4)(704,"h4",83),e(705,"Colors Emphasis"),i()(),t(706,"div",7)(707,"div",84)(708,"div",85)(709,"div",8)(710,"table",86)(711,"tbody")(712,"tr")(713,"td",13)(714,"code"),e(715,".text-primary-emphasis"),i()(),t(716,"td",13)(717,"div",87),e(718,"text-primary-emphasis"),i()()(),t(719,"tr")(720,"td",13)(721,"code"),e(722,".text-secondary-emphasis"),i()(),t(723,"td",13)(724,"div",88),e(725,"text-secondary-emphasis"),i()()(),t(726,"tr")(727,"td",13)(728,"code"),e(729,".text-success-emphasis"),i()(),t(730,"td",13)(731,"div",89),e(732,"text-success-emphasis"),i()()(),t(733,"tr")(734,"td",13)(735,"code"),e(736,".text-info-emphasis"),i()(),t(737,"td",13)(738,"div",90),e(739,"text-info-emphasis"),i()()()()()()(),t(740,"div",85)(741,"div",8)(742,"table",86)(743,"tbody")(744,"tr")(745,"td",13)(746,"code"),e(747,".text-warning-emphasis"),i()(),t(748,"td",13)(749,"div",91),e(750,"text-warning-emphasis"),i()()(),t(751,"tr")(752,"td",13)(753,"code"),e(754,".text-danger-emphasis"),i()(),t(755,"td",13)(756,"div",92),e(757,"text-danger-emphasis"),i()()(),t(758,"tr")(759,"td",13)(760,"code"),e(761,".text-dark-emphasis"),i()(),t(762,"td",13)(763,"div",93),e(764,"text-dark-emphasis"),i()()(),t(765,"tr")(766,"td",13)(767,"code"),e(768,".text-light-emphasis"),i()(),t(769,"td",13)(770,"div",94),e(771,"text-light-emphasis"),i()()()()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();function ia(l,u){}function na(l,u){if(l&1&&h(0,ia,0,0,"ng-template",97),l&2){M();let r=y(630);p("ngTemplateOutlet",r)}}function aa(l,u){}function la(l,u){if(l&1&&h(0,aa,0,0,"ng-template",97),l&2){M();let r=y(632);p("ngTemplateOutlet",r)}}function oa(l,u){}function ra(l,u){if(l&1&&h(0,oa,0,0,"ng-template",97),l&2){M();let r=y(634);p("ngTemplateOutlet",r)}}function da(l,u){}function sa(l,u){if(l&1&&h(0,da,0,0,"ng-template",97),l&2){M();let r=y(636);p("ngTemplateOutlet",r)}}function ma(l,u){}function ca(l,u){if(l&1&&h(0,ma,0,0,"ng-template",97),l&2){M();let r=y(630);p("ngTemplateOutlet",r)}}function pa(l,u){}function ua(l,u){if(l&1&&h(0,pa,0,0,"ng-template",97),l&2){M();let r=y(632);p("ngTemplateOutlet",r)}}function ba(l,u){}function ga(l,u){if(l&1&&h(0,ba,0,0,"ng-template",97),l&2){M();let r=y(634);p("ngTemplateOutlet",r)}}function va(l,u){}function ha(l,u){if(l&1&&h(0,va,0,0,"ng-template",97),l&2){M();let r=y(636);p("ngTemplateOutlet",r)}}function xa(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()())}function fa(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "),i()())}function Sa(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()())}function wa(l,u){l&1&&(t(0,"div",101)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing. "),i()())}function Ea(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()())}function ya(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "),i()())}function ka(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()())}function _a(l,u){l&1&&(t(0,"div",101)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing. "),i()())}function Ca(l,u){l&1&&(t(0,"div",102)(1,"div",59),n(2,"img",103),i(),t(3,"div",104)(4,"p",105),e(5,"You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you\u2019re working with reputable font websites."),i()()(),t(6,"p",105),e(7," This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard. "),i())}function Ta(l,u){l&1&&(t(0,"div",102)(1,"div",59),n(2,"img",106),i(),t(3,"div",104)(4,"p",105),e(5," I also decreased the transparency in the text so that the mountains come through the text, bringing the quote truly to life. Make sure that the placement of your text is pleasing to look at, and you try to achieve symmetry for this effect."),i()()(),t(6,"p",105),e(7," You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary. You can always play around with the text that is overlaid on an image. "),i())}function Aa(l,u){l&1&&(t(0,"div",102)(1,"div",59),n(2,"img",107),i(),t(3,"div",104)(4,"p",105),e(5,"In this image, you can see that the line height has been reduced significantly, and the size was brought up exponentially. Experiment and play around with the fonts that you already have in the software you\u2019re working with reputable font websites."),i()()(),t(6,"p",105),e(7," They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard This may be the most commonly encountered tip I received from the designers I spoke with. "),i())}function Ia(l,u){l&1&&(t(0,"div",102)(1,"div",59),n(2,"img",108),i(),t(3,"div",104)(4,"p",105),e(5,"When designing, the goal is to draw someone\u2019s attention and portray to them what you\u2019re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive."),i()()(),t(6,"p",105),e(7," If you\u2019re using multiple elements, make sure that your principal object is larger than the others, as the eye of your viewer will automatically be drawn to the larger of the two objects. "),i())}function Ma(l,u){l&1&&(t(0,"p",109),n(1,"img",110),e(2," Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. If you\u2019re using multiple elements, make sure that your principal object is larger than assumenda. "),i())}function Da(l,u){l&1&&(t(0,"p",111),n(1,"img",112),e(2," Experiment and play around with the fonts that you already have in the software you\u2019re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus Scale all elements of your design: text, elements, buttons, everything. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each. "),i())}function ja(l,u){l&1&&(t(0,"p",113),n(1,"img",114),e(2,"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna delectus Scale all elements of your design: text, elements, buttons, everything.Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each. "),i())}function La(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",115),i(),t(3,"div",100),e(4," Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR. "),t(5,"div",116)(6,"a",117),e(7,"Read More "),n(8,"i",118),i()()()())}function Na(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",115),i(),t(3,"div",100),e(4," When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown. "),t(5,"div",116)(6,"a",117),e(7,"Read More "),n(8,"i",118),i()()()())}function Ba(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",115),i(),t(3,"div",100),e(4," Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. "),t(5,"div",116)(6,"a",117),e(7,"Read More "),n(8,"i",118),i()()()())}function qa(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",115),i(),t(3,"div",100),e(4," when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the. "),t(5,"div",116)(6,"a",117),e(7,"Read More "),n(8,"i",118),i()()()())}function Pa(l,u){l&1&&(t(0,"h6"),e(1,"Give your text a good structure"),i(),t(2,"p",105),e(3," Contrary to popular belief, you don\u2019t have to work endless nights and hours to create a "),t(4,"a",119)(5,"b"),e(6,"Fantastic Design"),i()(),e(7," by using complicated 3D elements. Flat design is your friend. Remember that. And the great thing about flat design is that it has become more and more popular over the years, which is excellent news to the beginner and advanced designer. "),i())}function Ra(l,u){l&1&&(t(0,"h6"),e(1,"Use a color palette"),i(),t(2,"p",105),e(3," Opposites attract, and that\u2019s a fact. It\u2019s in our nature to be interested in the unusual, and that\u2019s why using contrasting colors in "),t(4,"a",119)(5,"b"),e(6,"Graphic Design"),i()(),e(7," is a must. It\u2019s eye-catching, it makes a statement, it\u2019s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. "),i())}function Va(l,u){l&1&&(t(0,"h6"),e(1,"Contact"),i(),t(2,"p",105),e(3," Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people\u2019s interest is that it has become more and more popular over the years, which is excellent news to the beginner and advanced "),t(4,"a",119)(5,"b"),e(6,"Contact Designer"),i()(),e(7,". "),i())}function Wa(l,u){l&1&&(t(0,"div",25)(1,"div",120)(2,"div",98)(3,"div",59),n(4,"img",121),i(),t(5,"div",104)(6,"h6",122),e(7,"Dominic Charlton"),i(),t(8,"p",105),e(9,"520 Followers"),i()()(),t(10,"div",123)(11,"div",59),n(12,"img",124),i(),t(13,"div",104)(14,"h6",122),e(15,"Charlie Pritchard"),i(),t(16,"p",105),e(17,"45.2K Followers"),i()()(),t(18,"div",123)(19,"div",59),n(20,"img",125),i(),t(21,"div",104)(22,"h6",122),e(23,"Harvey Wells"),i(),t(24,"p",105),e(25,"1025 Followers"),i()()()(),t(26,"div",120)(27,"div",126)(28,"div",59),n(29,"img",127),i(),t(30,"div",104)(31,"h6",122),e(32,"Amelie Townsend"),i(),t(33,"p",105),e(34,"6584 Followers"),i()()(),t(35,"div",123)(36,"div",59),n(37,"img",128),i(),t(38,"div",104)(39,"h6",122),e(40,"Emily Slater"),i(),t(41,"p",105),e(42,"24.8K Followers"),i()()(),t(43,"div",123)(44,"div",59),n(45,"img",129),i(),t(46,"div",104)(47,"h6",122),e(48,"Declan Long"),i(),t(49,"p",105),e(50,"1.5K Followers"),i()()()()())}function Oa(l,u){l&1&&(t(0,"div",25)(1,"div",120)(2,"div",98)(3,"div",59),n(4,"img",130),i(),t(5,"div",104)(6,"h6",122),e(7,"Luke Brown"),i(),t(8,"p",105),e(9,"654 Followers"),i()()(),t(10,"div",123)(11,"div",59),n(12,"img",131),i(),t(13,"div",104)(14,"h6",122),e(15,"Matilda Walker"),i(),t(16,"p",105),e(17,"270 Followers"),i()()(),t(18,"div",123)(19,"div",59),n(20,"img",129),i(),t(21,"div",104)(22,"h6",122),e(23,"Leo Stokes"),i(),t(24,"p",105),e(25,"4120 Followers"),i()()()(),t(26,"div",120)(27,"div",126)(28,"div",59),n(29,"img",128),i(),t(30,"div",104)(31,"h6",122),e(32,"Chelsea Preston"),i(),t(33,"p",105),e(34,"9854 Followers"),i()()(),t(35,"div",123)(36,"div",59),n(37,"img",127),i(),t(38,"div",104)(39,"h6",122),e(40,"Jennifer Barker"),i(),t(41,"p",105),e(42,"15.8K Followers"),i()()(),t(43,"div",123)(44,"div",59),n(45,"img",125),i(),t(46,"div",104)(47,"h6",122),e(48,"Callum Murray"),i(),t(49,"p",105),e(50,"2K Followers"),i()()()()())}function Fa(l,u){l&1&&(t(0,"div",25)(1,"div",120)(2,"div",98)(3,"div",59),n(4,"img",124),i(),t(5,"div",104)(6,"h6",122),e(7,"Dominic Charlton"),i(),t(8,"p",105),e(9,"784 Followers"),i()()(),t(10,"div",123)(11,"div",59),n(12,"img",121),i(),t(13,"div",104)(14,"h6",122),e(15,"Matilda Walker"),i(),t(16,"p",105),e(17,"6549 Followers"),i()()(),t(18,"div",123)(19,"div",59),n(20,"img",128),i(),t(21,"div",104)(22,"h6",122),e(23,"Jennifer Barker"),i(),t(24,"p",105),e(25,"2100 Followers"),i()()()(),t(26,"div",120)(27,"div",126)(28,"div",59),n(29,"img",127),i(),t(30,"div",104)(31,"h6",122),e(32,"Amelie Townsend"),i(),t(33,"p",105),e(34,"4565 Followers"),i()()(),t(35,"div",123)(36,"div",59),n(37,"img",130),i(),t(38,"div",104)(39,"h6",122),e(40,"Emily Slater"),i(),t(41,"p",105),e(42,"8K Followers"),i()()(),t(43,"div",123)(44,"div",59),n(45,"img",131),i(),t(46,"div",104)(47,"h6",122),e(48,"Declan Long"),i(),t(49,"p",105),e(50,"9800 Followers"),i()()()()())}function Ua(l,u){l&1&&(t(0,"h5"),n(1,"i",132),e(2," Home"),i(),t(3,"p",133),e(4," On the note of consistency, color consistency is a MUST. If you\u2019re not trying to create crazy contrast in your design, then a great idea would be for you to use a color palette throughout your entire design. It will subconsciously interest viewers and also is very pleasing to look at. "),i(),t(5,"p",105),e(6," Any bypasser will stop to see what you have to see, even if your design has nothing to do with them, for the simple fact that it is beautiful to look at. "),i())}function za(l,u){l&1&&(t(0,"h5"),n(1,"i",134),e(2," Profile"),i(),t(3,"p",133),e(4," Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand the text, and sometimes that means applying a gaussian readable. "),i(),t(5,"p",105),e(6," A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves. "),i())}function Ha(l,u){l&1&&(t(0,"h5"),n(1,"i",135),e(2," Messages"),i(),t(3,"p",133),e(4,` Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard\u2019s job is to vex chumps quickly in fog. Watch "Jeopardy! ", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him. `),i(),t(5,"p",105),e(6," Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. "),i())}function Ga(l,u){l&1&&(t(0,"h6"),e(1,"Customer Details"),i(),t(2,"div",136)(3,"table",137)(4,"thead")(5,"tr")(6,"th",138),e(7,"#"),i(),t(8,"th",138),e(9,"Name"),i(),t(10,"th",138),e(11,"Address"),i(),t(12,"th",138),e(13,"Country"),i(),t(14,"th",138),e(15,"Pincode"),i()()(),t(16,"tbody")(17,"tr")(18,"th",139),e(19,"1"),i(),t(20,"td"),e(21,"Ruby Butcher"),i(),t(22,"td"),e(23,"412 Rosewood Lane"),i(),t(24,"td"),e(25,"New York"),i(),t(26,"td"),e(27,"10019"),i()(),t(28,"tr")(29,"th",139),e(30,"2"),i(),t(31,"td"),e(32,"Martha T Goldberg"),i(),t(33,"td"),e(34,"2760 Clarksburg Park Road"),i(),t(35,"td"),e(36,"Arizona"),i(),t(37,"td"),e(38,"86038"),i()()()()())}function Ya(l,u){l&1&&(t(0,"h6"),e(1,"Description"),i(),t(2,"div",136)(3,"table",137)(4,"thead")(5,"tr")(6,"th",138),e(7,"Title"),i(),t(8,"th",138),e(9,"Categories"),i(),t(10,"th",138),e(11,"Author"),i()()(),t(12,"tbody")(13,"tr")(14,"td"),e(15,"Building Web Apps With Wordpress"),i(),t(16,"td"),e(17,"Web, Wordpress, Design"),i(),t(18,"td"),e(19,"Lucia Victor"),i()(),t(20,"tr")(21,"th"),e(22,"Information Technology"),i(),t(23,"td"),e(24,"Management, Manager, Design"),i(),t(25,"td"),e(26,"Arora Sumita"),i()()()()())}function $a(l,u){l&1&&(t(0,"h6"),e(1,"Customer Reviews"),i(),t(2,"div",136)(3,"table",137)(4,"thead")(5,"tr")(6,"th",138),e(7,"Name"),i(),t(8,"th",138),e(9,"Location"),i(),t(10,"th",138),e(11,"Amount"),i(),t(12,"th",138),e(13,"Ratings"),i()()(),t(14,"tbody")(15,"tr")(16,"td"),e(17,"Luke Brown"),i(),t(18,"td"),e(19,"New York"),i(),t(20,"td"),e(21,"$745"),i(),t(22,"td"),e(23,"4.4 "),n(24,"i",140),i()(),t(25,"tr")(26,"td"),e(27,"Matilda Walker"),i(),t(28,"td"),e(29,"USA"),i(),t(30,"td"),e(31,"$87.125"),i(),t(32,"td"),e(33,"2.7 "),n(34,"i",140),i()()()()())}function Qa(l,u){l&1&&(t(0,"div",141)(1,"div",59),n(2,"img",103),i(),t(3,"div",104)(4,"p",105),e(5,"Experiment and play around with the fonts that you already have in the software you\u2019re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus."),i()()(),t(6,"div",98)(7,"div",142)(8,"p",105),e(9,"Always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you\u2019re working with reputable font websites."),i()(),t(10,"div",59),n(11,"img",106),i()())}function Ja(l,u){l&1&&(t(0,"div",141)(1,"div",59),n(2,"img",143),i(),t(3,"div",104)(4,"p",105),e(5,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."),i()()(),t(6,"div",98)(7,"div",142)(8,"p",105),e(9,"Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. For that very reason, I went on a quest and spoke to many different professional graphic designers."),i()(),t(10,"div",59),n(11,"img",107),i()())}function Xa(l,u){l&1&&(t(0,"div",141)(1,"div",59),n(2,"img",108),i(),t(3,"div",104)(4,"p",105),e(5,"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR."),i()()(),t(6,"div",98)(7,"div",142)(8,"p",105),e(9,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i()(),t(10,"div",59),n(11,"img",144),i()())}function Ka(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()())}function Za(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "),i()())}function el(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()())}function tl(l,u){l&1&&(t(0,"div",101)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing. "),i()())}function il(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()())}function nl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "),i()())}function al(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()())}function ll(l,u){l&1&&(t(0,"div",101)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing. "),i()())}function ol(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",145),i(),t(3,"div",100),e(4," Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR. "),t(5,"div",116)(6,"a",146),e(7,"Read More "),n(8,"i",118),i()()()())}function rl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",145),i(),t(3,"div",100),e(4," When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown. "),t(5,"div",116)(6,"a",146),e(7,"Read More "),n(8,"i",118),i()()()())}function dl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",145),i(),t(3,"div",100),e(4," Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. "),t(5,"div",116)(6,"a",146),e(7,"Read More "),n(8,"i",118),i()()()())}function sl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",145),i(),t(3,"div",100),e(4," when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the. "),t(5,"div",116)(6,"a",146),e(7,"Read More "),n(8,"i",118),i()()()())}function ml(l,u){l&1&&(t(0,"h6"),e(1,"Give your text a good structure"),i(),t(2,"p",105),e(3," Contrary to popular belief, you don\u2019t have to work endless nights and hours to create a "),t(4,"a",119)(5,"b"),e(6,"Fantastic Design"),i()(),e(7," by using complicated 3D elements. Flat design is your friend. Remember that. And the great thing about flat design is that it has become more and more popular over the years, which is excellent news to the beginner and advanced designer. "),i())}function cl(l,u){l&1&&(t(0,"h6"),e(1,"Use a color palette"),i(),t(2,"p",105),e(3," Opposites attract, and that\u2019s a fact. It\u2019s in our nature to be interested in the unusual, and that\u2019s why using contrasting colors in "),t(4,"a",119)(5,"b"),e(6,"Graphic Design"),i()(),e(7," is a must. It\u2019s eye-catching, it makes a statement, it\u2019s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. "),i())}function pl(l,u){l&1&&(t(0,"h6"),e(1,"Message"),i(),t(2,"p",105),e(3," Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people\u2019s interest is that it has become more and more popular over the years, which is excellent news to the beginner and advanced "),t(4,"a",119)(5,"b"),e(6,"Contact Designer"),i()(),e(7,". "),i())}function ul(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()())}function bl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "),i()())}function gl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()())}function vl(l,u){l&1&&(t(0,"div",101)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing. "),i()())}function hl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()())}function xl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "),i()())}function fl(l,u){l&1&&(t(0,"div",98)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()())}function Sl(l,u){l&1&&(t(0,"div",101)(1,"div",59),n(2,"i",99),i(),t(3,"div",100),e(4," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. "),i()(),t(5,"div",101)(6,"div",59),n(7,"i",99),i(),t(8,"div",100),e(9," After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing. "),i()())}function wl(l,u){l&1&&(t(0,"div",147)(1,"div",59),n(2,"img",148),i(),t(3,"div",104),e(4," Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco. "),i()(),t(5,"div",98)(6,"div",142),e(7," For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. "),i(),t(8,"div",59),n(9,"img",149),i()())}function El(l,u){l&1&&(t(0,"div",147)(1,"div",59),n(2,"img",150),i(),t(3,"div",104),e(4," Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each. next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco. "),i()(),t(5,"div",98)(6,"div",142),e(7," Experiment and play around with the fonts that you already have in the software you\u2019re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic. "),i(),t(8,"div",59),n(9,"img",151),i()())}function yl(l,u){l&1&&(t(0,"div",147)(1,"div",59),n(2,"img",150),i(),t(3,"div",104),e(4," Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. "),i()(),t(5,"div",98)(6,"div",142),e(7," Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.. "),i(),t(8,"div",59),n(9,"img",151),i()())}function kl(l,u){l&1&&(t(0,"div",152)(1,"div",142),e(2," Experiment and play around with the fonts that you already have in the software you\u2019re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. pposites attract, and that\u2019s a fact. It\u2019s in our nature to be interested in the unusual, and that\u2019s why using contrasting. "),i(),t(3,"div",59),n(4,"img",103),i()(),t(5,"p",105),e(6," Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco."),i())}function _l(l,u){l&1&&(t(0,"div",152)(1,"div",142),e(2," Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand the text, and sometimes that means applying a gaussian readable Any bypasser will stop to see what you have to see, even if your design has nothing to do with them. "),i(),t(3,"div",59),n(4,"img",106),i()(),t(5,"p",105),e(6,"It makes a statement, it\u2019s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco."),i())}function Cl(l,u){l&1&&(t(0,"div",152)(1,"div",142),e(2," Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin On the note of consistency, color consistency is a MUST. If you\u2019re not trying to create crazy contrast in your design. "),i(),t(3,"div",59),n(4,"img",106),i()(),t(5,"p",105),e(6,"Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything."),i())}function Tl(l,u){l&1&&(t(0,"h6"),e(1,"Graphic Design"),i(),t(2,"p",105),e(3," They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid. "),i())}function Al(l,u){l&1&&(t(0,"h6"),e(1,"Product"),i(),t(2,"p",105),e(3," You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. "),i())}function Il(l,u){l&1&&(t(0,"h6"),e(1,"Messages"),i(),t(2,"p",105),e(3," Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. "),i())}function Ml(l,u){l&1&&(t(0,"h6"),e(1,"Settings"),i(),t(2,"p",105),e(3," Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS. "),i())}var Di=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Tabs",active:!0}]}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-tabs"]],standalone:!1,decls:637,vars:112,consts:[["nav","ngbNav"],["Justify","ngbNav"],["Pills","ngbNav"],["PillsJustified","ngbNav"],["verticalNav","ngbNav"],["HeaderTabs","ngbNav"],["Bordered","ngbNav"],["Arrow","ngbNav"],["Header","ngbNav"],["BottomCard","ngbNav"],["CustomHover","ngbNav"],["CustomVertical","ngbNav"],["Animation","ngbNav"],["Badge","ngbNav"],["Border","ngbNav"],["BorderTop","ngbNav"],["Modifier","ngbNav"],["ModifierCustom","ngbNav"],["Colored","ngbNav"],["Light","ngbNav"],["TabContent",""],["TabContent1",""],["TabContent2",""],["TabContent3",""],["title","Tabs",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-6"],[1,"mb-3"],[1,"card"],[1,"card-body"],[1,"text-muted"],["ngbNav","",1,"nav","nav-tabs","mb-3",3,"activeId"],[3,"ngbNavItem"],["ngbNavLink",""],[1,"d-sm-block"],["ngbNavContent",""],[1,"tab-content","text-muted"],[3,"ngbNavOutlet"],["ngbNav","",1,"nav","nav-tabs","mb-3","nav-justified",3,"activeId"],["ngbNav","",1,"nav","nav-pills","nav-success","mb-3",3,"activeId"],[1,"nav-item","waves-effect","waves-light",3,"ngbNavItem"],["ngbNav","",1,"nav","nav-pills","nav-justified","mb-3",3,"activeId"],[1,"col-md-3"],["ngbNav","",1,"nav","flex-column","nav-pills","text-center",3,"activeId"],["ngbNavLink","",1,"mb-2"],[1,"col-md-9"],[1,"card-header","align-items-center","d-flex"],[1,"flex-grow-1","oveflow-hidden"],[1,"text-muted","text-truncates","mb-0"],[1,"flex-shrink-0","ms-2"],["ngbNav","",1,"nav","justify-content-end","nav-tabs-custom","rounded","card-header-tabs","border-bottom-0",3,"activeId"],["ngbNav","",1,"nav","nav-tabs","nav-tabs-custom","nav-success","nav-justified","mb-3",3,"activeId"],["ngbNav","",1,"nav","nav-pills","arrow-navtabs","nav-success","bg-light","mb-3",3,"activeId"],[1,"d-block","d-sm-none"],[1,"mdi","mdi-home-variant"],[1,"mdi","mdi-account"],[1,"mdi","mdi-email"],[1,"card-header","align-items-xl-center","d-xl-flex"],[1,"text-muted","flex-grow-1","mb-xl-0"],[1,"flex-shrink-0"],["ngbNav","",1,"nav","nav-pills","card-header-pills",3,"activeId"],[1,"card-footer","bg-transparent","border-top"],["ngbNav","",1,"nav","nav-pills","nav-justified","card-footer-tabs","fs-17",3,"activeId"],["ngbNavLink","","placement","top","ngbTooltip","Home"],[1,"ri-home-3-line"],["ngbNavLink","","placement","top","ngbTooltip","Profile"],[1,"ri-user-2-line"],["ngbNavLink","","placement","top","ngbTooltip","Message"],[1,"ri-mail-line"],[1,"border"],["ngbNav","",1,"nav","nav-pills","custom-hover-nav-tabs",3,"activeId"],[1,"ri-user-fill","nav-icon","nav-tab-position"],[1,"nav-titl","nav-tab-position","m-0"],[1,"ri-file-text-line","nav-icon","nav-tab-position"],[1,"ri-star-half-line","nav-icon","nav-tab-position"],[1,"col-lg-3"],["role","tablist","aria-orientation","vertical",1,""],["ngbNav","",1,"nav","nav-pills","flex-column","nav-pills-tab","custom-verti-nav-pills","text-center",3,"activeId"],[1,"ri-home-4-line","d-block","fs-20","mb-1"],[1,"ri-user-2-line","d-block","fs-20","mb-1"],[1,"ri-mail-line","d-block","fs-20","mb-1"],[1,"col-lg-9"],[1,"tab-content","text-muted","mt-3","mt-lg-0"],["ngbNav","",1,"nav","nav-pills","animation-nav","nav-justified","gap-2","mb-3",3,"activeId"],["ngbNav","",1,"nav","nav-tabs","nav-justified","mb-3",3,"activeId"],[1,"badge","bg-success"],[1,"badge","bg-danger","rounded-circle"],["ngbNav","",1,"nav","nav-tabs","nav-border-top","nav-border-top-primary","mb-3",3,"activeId"],["ngbNav","",1,"nav","nav-tabs","nav-justified","nav-border-top","nav-border-top-success","mb-3",3,"activeId"],[1,"ri-home-5-line","align-middle","me-1"],[1,"ri-user-line","me-1","align-middle"],[1,"ri-question-answer-line","align-middle","me-1"],["ngbNav","",1,"nav","nav-pills","nav-custom-outline","nav-primary","mb-3",3,"activeId"],["ngbNavLink","",1,"nav-link"],["ngbNav","",1,"nav","nav-pills","nav-customs","nav-danger","mb-3",3,"activeId"],["ngbNav","",1,"nav","nav-pills","nav-custom","nav-custom-success","mb-3",3,"activeId"],["ngbNav","",1,"nav","nav-pills","nav-custom","nav-custom-light","mb-3",3,"activeId"],[3,"ngTemplateOutlet"],[1,"d-flex"],[1,"ri-checkbox-circle-fill","text-success"],[1,"flex-grow-1","ms-2"],[1,"d-flex","mt-2"],[1,"d-flex","mb-2"],["src","assets/images/small/img-4.jpg","alt","","width","150",1,"rounded"],[1,"flex-grow-1","ms-3"],[1,"mb-0"],["src","assets/images/small/img-5.jpg","alt","","width","150",1,"rounded"],["src","assets/images/small/img-6.jpg","alt","","width","150",1,"rounded"],["src","assets/images/small/img-7.jpg","alt","","width","150",1,"rounded"],[1,"flex-grow-1","mb-0"],["src","assets/images/users/avatar-2.jpg","alt","",1,"avatar-lg","rounded","float-start","me-3"],[1,"me-3","mb-0"],["src","assets/images/users/avatar-3.jpg","alt","",1,"avatar-lg","rounded","float-end","ms-3"],[1,"ms-3","mb-0"],["src","assets/images/users/avatar-5.jpg","alt","",1,"avatar-lg","rounded","float-start","me-3"],[1,"ri-checkbox-multiple-blank-fill","text-success"],[1,"mt-2"],["href","javascript:void(0);",1,"btn","btn-sm","btn-soft-primary","material-shadow-none"],[1,"ri-arrow-right-line","ms-1","align-middle"],["href","javascript:void(0);",1,"text-decoration-underline"],[1,"col-sm-6"],["src","assets/images/users/avatar-8.jpg","alt","",1,"avatar-sm","rounded"],[1,"mb-1","fs-14"],[1,"d-flex","mt-3"],["src","assets/images/users/avatar-7.jpg","alt","",1,"avatar-sm","rounded"],["src","assets/images/users/avatar-6.jpg","alt","",1,"avatar-sm","rounded"],[1,"d-flex","mt-3","mt-sm-0"],["src","assets/images/users/avatar-5.jpg","alt","",1,"avatar-sm","rounded"],["src","assets/images/users/avatar-4.jpg","alt","",1,"avatar-sm","rounded"],["src","assets/images/users/avatar-3.jpg","alt","",1,"avatar-sm","rounded"],["src","assets/images/users/avatar-1.jpg","alt","",1,"avatar-sm","rounded"],["src","assets/images/users/avatar-2.jpg","alt","",1,"avatar-sm","rounded"],[1,"ri-home-3-line","align-bottom","me-1"],[1,"mb-2"],[1,"ri-user-2-line","align-bottom","me-1"],[1,"ri-mail-line","align-bottom","me-1"],[1,"table-responsive"],[1,"table","mb-0"],["scope","col"],["scope","row"],[1,"ri-star-s-fill","ms-1","text-warning","align-middle"],[1,"d-flex","mb-4"],[1,"flex-grow-1","me-3"],["src","assets/images/small/img-3.jpg","alt","","width","150",1,"rounded"],["src","assets/images/small/img-8.jpg","alt","","width","150",1,"rounded"],[1,"ri-checkbox-circle-line","text-success"],["href","javascript:void(0);",1,"btn","btn-link"],[1,"d-flex","mb-3"],["src","assets/images/users/avatar-2.jpg","alt","",1,"avatar-md","rounded"],["src","assets/images/users/avatar-3.jpg","alt","",1,"avatar-md","rounded"],["src","assets/images/users/avatar-4.jpg","alt","",1,"avatar-md","rounded"],["src","assets/images/users/avatar-1.jpg","alt","",1,"avatar-md","rounded"],[1,"d-flex","mb-1"]],template:function(s,a){if(s&1&&(n(0,"app-breadcrumbs",24),t(1,"div",25)(2,"div",26)(3,"h5",27),e(4,"Default Tabs"),i(),t(5,"div",28)(6,"div",29)(7,"p",30),e(8,"Use "),t(9,"code"),e(10,"nav-tabs"),i(),e(11," class to generate a default tabbed interface."),i(),t(12,"ul",31,0)(14,"li",32)(15,"a",33)(16,"span",34),e(17,"Home"),i()(),h(18,na,1,1,"ng-template",35),i(),t(19,"li",32)(20,"a",33)(21,"span",34),e(22,"Profile"),i()(),h(23,la,1,1,"ng-template",35),i(),t(24,"li",32)(25,"a",33)(26,"span",34),e(27,"Messages"),i()(),h(28,ra,1,1,"ng-template",35),i(),t(29,"li",32)(30,"a",33)(31,"span",34),e(32,"Settings"),i()(),h(33,sa,1,1,"ng-template",35),i()(),t(34,"div",36),n(35,"div",37),i()()()(),t(36,"div",26)(37,"h5",27),e(38,"Justify Tabs"),i(),t(39,"div",28)(40,"div",29)(41,"p",30),e(42,"Use "),t(43,"code"),e(44,"nav-justified"),i(),e(45," class to generate equal-width elements with all horizontal space will be occupied by nav links."),i(),t(46,"ul",38,1)(48,"li",32)(49,"a",33)(50,"span",34),e(51,"Home"),i()(),h(52,ca,1,1,"ng-template",35),i(),t(53,"li",32)(54,"a",33)(55,"span",34),e(56,"Profile"),i()(),h(57,ua,1,1,"ng-template",35),i(),t(58,"li",32)(59,"a",33)(60,"span",34),e(61,"Messages"),i()(),h(62,ga,1,1,"ng-template",35),i(),t(63,"li",32)(64,"a",33)(65,"span",34),e(66,"Settings"),i()(),h(67,ha,1,1,"ng-template",35),i()(),t(68,"div",36),n(69,"div",37),i()()()()(),t(70,"div",25)(71,"div",26)(72,"h5",27),e(73,"Pills Tabs"),i(),t(74,"div",28)(75,"div",29)(76,"p",30),e(77,"Use "),t(78,"code"),e(79,"nav-pills"),i(),e(80," class to generate particular selected nav links without borders."),i(),t(81,"ul",39,2)(83,"li",40)(84,"a",33),e(85," Home "),i(),h(86,xa,10,0,"ng-template",35),i(),t(87,"li",40)(88,"a",33)(89,"span",34),e(90,"Profile"),i()(),h(91,fa,10,0,"ng-template",35),i(),t(92,"li",40)(93,"a",33)(94,"span",34),e(95,"Messages"),i()(),h(96,Sa,10,0,"ng-template",35),i(),t(97,"li",40)(98,"a",33)(99,"span",34),e(100,"Settings"),i()(),h(101,wa,10,0,"ng-template",35),i()(),t(102,"div",36),n(103,"div",37),i()()()(),t(104,"div",26)(105,"h5",27),e(106,"Pills Justified Tabs"),i(),t(107,"div",28)(108,"div",29)(109,"p",30),e(110,"Use "),t(111,"code"),e(112,"nav-pills nav-justified"),i(),e(113," class to generate equal-width elements without borders, all horizontal space will be occupied by nav links."),i(),t(114,"ul",41,3)(116,"li",40)(117,"a",33),e(118," Home "),i(),h(119,Ea,10,0,"ng-template",35),i(),t(120,"li",40)(121,"a",33)(122,"span",34),e(123,"Profile"),i()(),h(124,ya,10,0,"ng-template",35),i(),t(125,"li",40)(126,"a",33)(127,"span",34),e(128,"Messages"),i()(),h(129,ka,10,0,"ng-template",35),i(),t(130,"li",40)(131,"a",33)(132,"span",34),e(133,"Settings"),i()(),h(134,_a,10,0,"ng-template",35),i()(),t(135,"div",36),n(136,"div",37),i()()()()(),t(137,"div",25)(138,"div",26)(139,"h5",27),e(140,"Vertical Nav Tabs"),i(),t(141,"div",28)(142,"div",29)(143,"p",30),e(144,"Use "),t(145,"code"),e(146,"flex-column"),i(),e(147," class to create Vertical nav tabs."),i(),t(148,"div",25)(149,"div",42)(150,"ul",43,4)(152,"li",32)(153,"a",44)(154,"span",34),e(155,"Home"),i()(),h(156,Ca,8,0,"ng-template",35),i(),t(157,"li",32)(158,"a",44)(159,"span",34),e(160,"Profile"),i()(),h(161,Ta,8,0,"ng-template",35),i(),t(162,"li",32)(163,"a",44)(164,"span",34),e(165,"Messages"),i()(),h(166,Aa,8,0,"ng-template",35),i(),t(167,"li",32)(168,"a",44)(169,"span",34),e(170,"Settings"),i()(),h(171,Ia,8,0,"ng-template",35),i()()(),t(172,"div",45),n(173,"div",37),i()()()()(),t(174,"div",26)(175,"h5",27),e(176,"Card Header Tabs"),i(),t(177,"div",28)(178,"div",46)(179,"div",47)(180,"p",48),e(181,"Use "),t(182,"code"),e(183,"card-header-tabs"),i(),e(184," class to create card header tabs."),i()(),t(185,"div",49)(186,"ul",50,5)(188,"li",32)(189,"a",33),e(190," Home "),i(),h(191,Ma,3,0,"ng-template",35),i(),t(192,"li",32)(193,"a",33),e(194," Profile "),i(),h(195,Da,3,0,"ng-template",35),i(),t(196,"li",32)(197,"a",33),e(198," Messages "),i(),h(199,ja,3,0,"ng-template",35),i()()()(),t(200,"div",29)(201,"div",36),n(202,"div",37),i()()()()(),t(203,"div",25)(204,"div",26)(205,"h5",27),e(206,"Custom Tabs Bordered"),i(),t(207,"div",28)(208,"div",29)(209,"p",30),e(210,"Use "),t(211,"code"),e(212,"nav-tabs-custom"),i(),e(213," class to create custom tabs with borders."),i(),t(214,"ul",51,6)(216,"li",32)(217,"a",33),e(218," Home "),i(),h(219,La,9,0,"ng-template",35),i(),t(220,"li",32)(221,"a",33),e(222," Profile "),i(),h(223,Na,9,0,"ng-template",35),i(),t(224,"li",32)(225,"a",33),e(226," Messages "),i(),h(227,Ba,9,0,"ng-template",35),i(),t(228,"li",32)(229,"a",33),e(230," Settings "),i(),h(231,qa,9,0,"ng-template",35),i()(),t(232,"div",36),n(233,"div",37),i()()()(),t(234,"div",26)(235,"h5",27),e(236,"Arrow Nav tabs"),i(),t(237,"div",28)(238,"div",29)(239,"p",30),e(240,"Use "),t(241,"code"),e(242,"arrow-navtabs "),i(),e(243,"class to create arrow nav tabs."),i(),t(244,"ul",52,7)(246,"li",32)(247,"a",33)(248,"span",53),n(249,"i",54),i(),t(250,"span",34),e(251,"Overview"),i()(),h(252,Pa,8,0,"ng-template",35),i(),t(253,"li",32)(254,"a",33)(255,"span",53),n(256,"i",55),i(),t(257,"span",34),e(258,"Profile"),i()(),h(259,Ra,8,0,"ng-template",35),i(),t(260,"li",32)(261,"a",33)(262,"span",53),n(263,"i",56),i(),t(264,"span",34),e(265,"Contact"),i()(),h(266,Va,8,0,"ng-template",35),i()(),t(267,"div",36),n(268,"div",37),i()()()()(),t(269,"div",25)(270,"div",26)(271,"h5",27),e(272,"Header Justify Tabs"),i(),t(273,"div",28)(274,"div",57)(275,"p",58),e(276,"Use "),t(277,"code"),e(278,"card-header-pills"),i(),e(279," class to create header justify tab."),i(),t(280,"div",59)(281,"ul",60,8)(283,"li",32)(284,"a",33),e(285," Developers "),i(),h(286,Wa,51,0,"ng-template",35),i(),t(287,"li",32)(288,"a",33),e(289," Designers "),i(),h(290,Oa,51,0,"ng-template",35),i(),t(291,"li",32)(292,"a",33),e(293," Managers "),i(),h(294,Fa,51,0,"ng-template",35),i()()()(),t(295,"div",29)(296,"div",36),n(297,"div",37),i()()()(),t(298,"div",26)(299,"h5",27),e(300,"Bottom Card Nav Tabs"),i(),t(301,"div",28)(302,"div",29)(303,"p",30),e(304,"Use "),t(305,"code"),e(306,"card-footer-tabs"),i(),e(307," class to create the bottom card nav justify tab."),i(),t(308,"div",36),n(309,"div",37),i()(),t(310,"div",61)(311,"ul",62,9)(313,"li",32)(314,"a",63),n(315,"i",64),i(),h(316,Ua,7,0,"ng-template",35),i(),t(317,"li",32)(318,"a",65),n(319,"i",66),i(),h(320,za,7,0,"ng-template",35),i(),t(321,"li",32)(322,"a",67),n(323,"i",68),i(),h(324,Ha,7,0,"ng-template",35),i()()()()()(),t(325,"div",25)(326,"div",26)(327,"h5",27),e(328,"Custom Hover Tabs"),i(),t(329,"div",28)(330,"div",29)(331,"p",30),e(332,"Use "),t(333,"code"),e(334,"custom-hover-nav-tabs"),i(),e(335," class to create custom hover tabs."),i()(),t(336,"div",69)(337,"ul",70,10)(339,"li",32)(340,"a",33),n(341,"i",71),t(342,"h5",72),e(343,"Customer"),i()(),h(344,Ga,39,0,"ng-template",35),i(),t(345,"li",32)(346,"a",33),n(347,"i",73),t(348,"h5",72),e(349,"Description"),i()(),h(350,Ya,27,0,"ng-template",35),i(),t(351,"li",32)(352,"a",33),n(353,"i",74),t(354,"h5",72),e(355,"Reviews"),i()(),h(356,$a,35,0,"ng-template",35),i()()(),t(357,"div",29)(358,"div",36),n(359,"div",37),i()()()(),t(360,"div",26)(361,"h5",27),e(362,"Custom Vertical Tabs"),i(),t(363,"div",28)(364,"div",29)(365,"p",30),e(366,"Use "),t(367,"code"),e(368,"custom-verti-nav-pills"),i(),e(369," class to create custom vertical tabs."),i(),t(370,"div",25)(371,"div",75)(372,"div",76)(373,"ul",77,11)(375,"li",32)(376,"a",33),n(377,"i",78),e(378," Home "),i(),h(379,Qa,12,0,"ng-template",35),i(),t(380,"li",32)(381,"a",33),n(382,"i",79),e(383," Profile "),i(),h(384,Ja,12,0,"ng-template",35),i(),t(385,"li",32)(386,"a",33),n(387,"i",80),e(388," Messages "),i(),h(389,Xa,12,0,"ng-template",35),i()()()(),t(390,"div",81)(391,"div",82),n(392,"div",37),i()()()()()()(),t(393,"div",25)(394,"div",26)(395,"h5",27),e(396,"Animation Nav"),i(),t(397,"div",28)(398,"div",29)(399,"p",30),e(400,"Use "),t(401,"code"),e(402,"animation-nav"),i(),e(403," class to create animated tabs."),i(),t(404,"ul",83,12)(406,"li",32)(407,"a",33),e(408," Home "),i(),h(409,Ka,10,0,"ng-template",35),i(),t(410,"li",32)(411,"a",33),e(412," Profile "),i(),h(413,Za,10,0,"ng-template",35),i(),t(414,"li",32)(415,"a",33),e(416," Messages "),i(),h(417,el,10,0,"ng-template",35),i(),t(418,"li",32)(419,"a",33),e(420," Settings "),i(),h(421,tl,10,0,"ng-template",35),i()(),t(422,"div",36),n(423,"div",37),i()()()(),t(424,"div",26)(425,"h5",27),e(426,"Nav with Badge"),i(),t(427,"div",28)(428,"div",29)(429,"p",30),e(430,"Example of nav tabs with badge wrapped in nav item."),i(),t(431,"ul",84,13)(433,"li",32)(434,"a",33),e(435," Explore "),i(),h(436,il,10,0,"ng-template",35),i(),t(437,"li",32)(438,"a",33),e(439," Profile "),t(440,"span",85),e(441,"Done"),i()(),h(442,nl,10,0,"ng-template",35),i(),t(443,"li",32)(444,"a",33),e(445," Messages "),t(446,"span",86),e(447,"5"),i()(),h(448,al,10,0,"ng-template",35),i(),t(449,"li",32)(450,"a",33),e(451," Settings "),i(),h(452,ll,10,0,"ng-template",35),i()(),t(453,"div",36),n(454,"div",37),i()()()()(),t(455,"div",25)(456,"div",26)(457,"h5",27),e(458,"Border Top Nav"),i(),t(459,"div",28)(460,"div",29)(461,"p",30),e(462,"Use "),t(463,"code"),e(464,"nav-border-top"),i(),e(465," class to create nav tabs with border at top."),i(),t(466,"ul",87,14)(468,"li",32)(469,"a",33),e(470," Home "),i(),h(471,ol,9,0,"ng-template",35),i(),t(472,"li",32)(473,"a",33),e(474," Profile "),i(),h(475,rl,9,0,"ng-template",35),i(),t(476,"li",32)(477,"a",33),e(478," Messages "),i(),h(479,dl,9,0,"ng-template",35),i(),t(480,"li",32)(481,"a",33),e(482," Settings "),i(),h(483,sl,9,0,"ng-template",35),i()(),t(484,"div",36),n(485,"div",37),i()()()(),t(486,"div",26)(487,"h5",27),e(488,"Border Top Nav Justified Tabs"),i(),t(489,"div",28)(490,"div",29)(491,"p",30),e(492,"Use "),t(493,"code"),e(494,"nav-border-top nav-justified"),i(),e(495," class to create nav tabs with border at top with justified tabs position."),i(),t(496,"ul",88,15)(498,"li",32)(499,"a",33),n(500,"i",89),e(501," Home "),i(),h(502,ml,8,0,"ng-template",35),i(),t(503,"li",32)(504,"a",33),n(505,"i",90),e(506," Profile "),i(),h(507,cl,8,0,"ng-template",35),i(),t(508,"li",32)(509,"a",33),n(510,"i",91),e(511,"Messages "),i(),h(512,pl,8,0,"ng-template",35),i()(),t(513,"div",36),n(514,"div",37),i()()()()(),t(515,"div",25)(516,"div",26)(517,"h5",27),e(518,"Outline Border Nav"),i(),t(519,"div",28)(520,"div",29)(521,"p",30),e(522,"*Use "),t(523,"code"),e(524,"nav-custom-"),i(),e(525," class with modifier class to color tabs."),i(),t(526,"ul",92,16)(528,"li",32)(529,"a",93),e(530," Home "),i(),h(531,ul,10,0,"ng-template",35),i(),t(532,"li",32)(533,"a",93),e(534," Profile "),i(),h(535,bl,10,0,"ng-template",35),i(),t(536,"li",32)(537,"a",93),e(538," Messages "),i(),h(539,gl,10,0,"ng-template",35),i(),t(540,"li",32)(541,"a",93),e(542," Settings "),i(),h(543,vl,10,0,"ng-template",35),i()(),t(544,"div",36),n(545,"div",37),i()()()(),t(546,"div",26)(547,"h5",27),e(548,"Custom Nav"),i(),t(549,"div",28)(550,"div",29)(551,"p",30),e(552,"*Use "),t(553,"code"),e(554,"nav-custom-"),i(),e(555," class with modifier class to color tabs."),i(),t(556,"ul",94,17)(558,"li",32)(559,"a",93),e(560," Home "),i(),h(561,hl,10,0,"ng-template",35),i(),t(562,"li",32)(563,"a",93),e(564," Profile "),i(),h(565,xl,10,0,"ng-template",35),i(),t(566,"li",32)(567,"a",93),e(568," Messages "),i(),h(569,fl,10,0,"ng-template",35),i(),t(570,"li",32)(571,"a",93),e(572," Settings "),i(),h(573,Sl,10,0,"ng-template",35),i()(),t(574,"div",36),n(575,"div",37),i()()()()(),t(576,"div",25)(577,"div",26)(578,"h5",27),e(579,"Colored Nav"),i(),t(580,"div",28)(581,"div",29)(582,"p",30),e(583,"Use "),t(584,"code"),e(585,"nav-custom-"),i(),e(586," class with modifier class to color tabs."),i(),t(587,"ul",95,18)(589,"li",32)(590,"a",33),e(591," Home "),i(),h(592,wl,10,0,"ng-template",35),i(),t(593,"li",32)(594,"a",33),e(595," Profile "),i(),h(596,El,10,0,"ng-template",35),i(),t(597,"li",32)(598,"a",33),e(599," Messages "),i(),h(600,yl,10,0,"ng-template",35),i()(),t(601,"div",36),n(602,"div",37),i()()()(),t(603,"div",26)(604,"h5",27),e(605,"Light Nav"),i(),t(606,"div",28)(607,"div",29)(608,"p",30),e(609,"Use "),t(610,"code"),e(611,"nav-custom-light"),i(),e(612," class to lighten the nav tabs area."),i(),t(613,"ul",96,19)(615,"li",32)(616,"a",33),e(617," Home "),i(),h(618,kl,7,0,"ng-template",35),i(),t(619,"li",32)(620,"a",33),e(621," Profile "),i(),h(622,_l,7,0,"ng-template",35),i(),t(623,"li",32)(624,"a",33),e(625," Messages "),i(),h(626,Cl,7,0,"ng-template",35),i()(),t(627,"div",36),n(628,"div",37),i()()()()(),h(629,Tl,4,0,"ng-template",null,20,q)(631,Al,4,0,"ng-template",null,21,q)(633,Il,4,0,"ng-template",null,22,q)(635,Ml,4,0,"ng-template",null,23,q)),s&2){let d=y(13),o=y(47),b=y(82),A=y(115),L=y(151),k=y(187),N=y(215),E=y(245),B=y(282),I=y(312),S=y(338),g=y(374),v=y(405),w=y(432),T=y(467),j=y(497),W=y(527),O=y(557),de=y(588),ce=y(614);p("breadcrumbItems",a.breadCrumbItems),m(12),p("activeId",1),m(2),p("ngbNavItem",1),m(5),p("ngbNavItem",2),m(5),p("ngbNavItem",3),m(5),p("ngbNavItem",4),m(6),p("ngbNavOutlet",d),m(11),p("activeId",1),m(2),p("ngbNavItem",1),m(5),p("ngbNavItem",2),m(5),p("ngbNavItem",3),m(5),p("ngbNavItem",4),m(6),p("ngbNavOutlet",o),m(12),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(5),p("ngbNavItem",3),m(5),p("ngbNavItem",4),m(6),p("ngbNavOutlet",b),m(11),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(5),p("ngbNavItem",3),m(5),p("ngbNavItem",4),m(6),p("ngbNavOutlet",A),m(14),p("activeId",1),m(2),p("ngbNavItem",1),m(5),p("ngbNavItem",2),m(5),p("ngbNavItem",3),m(5),p("ngbNavItem",4),m(6),p("ngbNavOutlet",L),m(13),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(6),p("ngbNavOutlet",k),m(12),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(4),p("ngbNavItem",4),m(5),p("ngbNavOutlet",N),m(11),p("activeId",1),m(2),p("ngbNavItem",1),m(7),p("ngbNavItem",2),m(7),p("ngbNavItem",3),m(8),p("ngbNavOutlet",E),m(13),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(6),p("ngbNavOutlet",B),m(12),p("ngbNavOutlet",I),m(2),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(16),p("activeId",1),m(2),p("ngbNavItem",1),m(6),p("ngbNavItem",2),m(6),p("ngbNavItem",3),m(8),p("ngbNavOutlet",S),m(14),p("activeId",1),m(2),p("ngbNavItem",1),m(5),p("ngbNavItem",2),m(5),p("ngbNavItem",3),m(7),p("ngbNavOutlet",g),m(12),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(4),p("ngbNavItem",4),m(5),p("ngbNavOutlet",v),m(8),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(6),p("ngbNavItem",3),m(6),p("ngbNavItem",4),m(5),p("ngbNavOutlet",w),m(12),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(4),p("ngbNavItem",4),m(5),p("ngbNavOutlet",T),m(11),p("activeId",1),m(2),p("ngbNavItem",1),m(5),p("ngbNavItem",2),m(5),p("ngbNavItem",3),m(6),p("ngbNavOutlet",j),m(12),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(4),p("ngbNavItem",4),m(5),p("ngbNavOutlet",W),m(11),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(4),p("ngbNavItem",4),m(5),p("ngbNavOutlet",O),m(12),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(5),p("ngbNavOutlet",de),m(11),p("activeId",1),m(2),p("ngbNavItem",1),m(4),p("ngbNavItem",2),m(4),p("ngbNavItem",3),m(5),p("ngbNavOutlet",ce)}},dependencies:[he,D,re,qe,Ve,Re,Pe,Oe,We,Fe],encapsulation:2})}}return l})();var ji=(()=>{class l{constructor(){this.Collapsed=!1,this.HCollapsed=!1,this.DownCollapsed=!1,this.FilterCollapsed=!1,this.InlineCollapsed=!1,this.BlockCollapsed=!1,this.firstColleaps=!1,this.secondColleaps=!1,this.bothColleaps=!1}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Accordions",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-accordions"]],standalone:!1,decls:352,vars:25,consts:[["collapse","ngbCollapse"],["HCollapse","ngbCollapse"],["DownCollapse","ngbCollapse"],["FilterCollapse","ngbCollapse"],["BlockCollapse","ngbCollapse"],["InlineCollapse","ngbCollapse"],["bothcollapse","ngbCollapse"],["firstcollapse","ngbCollapse"],["secondcollapse","ngbCollapse"],["title","Accordions",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","default-base-showcode",1,"form-label","text-muted"],["type","checkbox","id","default-base-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],["ngbAccordion","","activeIds","static-1",3,"closeOthers"],["ngbAccordionItem","","id","static-1",1,"material-shadow"],["ngbAccordionHeader","",1,"accordion-header","border-0","bg-transparent"],["ngbAccordionButton",""],["ngbAccordionCollapse",""],["ngbAccordionBody",""],["ngbAccordionItem","","id","static-2",1,"material-shadow"],["ngbAccordionItem","","id","static-3",1,"material-shadow"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","accordion-flush",1,"form-label","text-muted"],["type","checkbox","id","accordion-flush",1,"form-check-input","code-switcher",3,"click"],[1,"live-preview","flush_accordion"],[1,"col-xl-12"],["for","accordion-nesting-showcode",1,"form-label","text-muted"],["type","checkbox","id","accordion-nesting-showcode",1,"form-check-input","code-switcher",3,"click"],["ngbAccordion","","activeIds","static-1",1,"custom-accordionwithicon","accordion-border-box",3,"closeOthers"],["id","accordionnesting2",1,"accordion","nesting2-accordion","custom-accordionwithicon","accordion-border-box","mt-3"],["ngbAccordion","",1,"custom-accordionwithicon","accordion-border-box",3,"closeOthers"],["ngbAccordionItem","","id","static-5",1,"material-shadow"],["ngbAccordionItem","","id","static-6",1,"material-shadow"],["ngbAccordionItem","","id","static-11",1,"material-shadow"],["for","collapse-showcode",1,"form-label","text-muted"],["type","checkbox","id","collapse-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","gap-2","flex-wrap","mb-3"],["data-bs-toggle","collapse","aria-expanded","false","aria-controls","collapseExample",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseExample","aria-expanded","false","aria-controls","collapseExample",1,"btn","btn-primary",3,"click"],["id","collapseExample",1,"collapse","show",3,"ngbCollapseChange","ngbCollapse"],[1,"card","border","shadow-none","card-body","text-muted","mb-0"],["for","horizontal-collapse-showcode",1,"form-label","text-muted"],["type","checkbox","id","horizontal-collapse-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"mb-3"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseWidthExample","aria-expanded","true","aria-controls","collapseWidthExample",1,"btn","btn-primary",3,"click"],["id","collapseWidthExample",1,"collapse","collapse-horizontal","show",3,"ngbCollapseChange","ngbCollapse"],[1,"card","card-body","mb-0",2,"max-width","300px"],["for","collapse-icon-showcode",1,"form-label","text-muted"],["type","checkbox","id","collapse-icon-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"hstack","gap-3","mb-3"],["data-bs-toggle","collapse","href","javascript:void(0);","role","button","aria-expanded","true","aria-controls","collapseWithicon",1,"link-success",3,"click"],[1,"ri-arrow-down-circle-line","fs-16"],["type","button","data-bs-toggle","collapse","data-bs-target","javascript:void(0);","aria-expanded","false","aria-controls","collapseWithicon2",1,"btn","btn-light",3,"click"],[1,"ri-filter-2-line"],["id","collapseWithicon",1,"collapse","show",3,"ngbCollapseChange","ngbCollapse"],[1,"card","mb-0"],["id","collapseWithicon2",1,"collapse",3,"ngbCollapseChange","ngbCollapse"],[1,"card","mb-0","mt-3"],["for","inline-block-collapse-showcode",1,"form-label","text-muted"],["type","checkbox","id","inline-block-collapse-showcode",1,"form-check-input","code-switcher",3,"click"],["data-bs-toggle","collapse","data-bs-target","#collapseblock","aria-expanded","true","aria-controls","collapseblock",1,"text-primary",3,"click"],["role","button","data-bs-toggle","collapse","data-bs-target","#collapseinline","aria-expanded","true","aria-controls","collapseinline",1,"text-primary","fw-medium",3,"click"],[1,"row","g-2"],[1,"col-auto"],["id","collapseblock",1,"collapse","collapse-horizontal","show",3,"ngbCollapseChange","ngbCollapse"],["id","collapseinline",1,"collapse","collapse-horizontal","show",3,"ngbCollapseChange","ngbCollapse"],[1,"col-lg-12"],["for","multiple-collapse-showcode",1,"form-label","text-muted"],["type","checkbox","id","multiple-collapse-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"hstack","gap-2","flex-wrap","mb-3"],["data-bs-toggle","collapse","href","javascript:void(0);","role","button","aria-expanded","false","aria-controls","multiCollapseExample1",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","collapse","data-bs-target","#multiCollapseExample2","aria-expanded","false","aria-controls","multiCollapseExample2",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","collapse","data-bs-target",".multi-collapse","aria-expanded","false","aria-controls","multiCollapseExample1 multiCollapseExample2",1,"btn","btn-primary",3,"click"],[1,"row",3,"ngbCollapseChange","ngbCollapse"],[1,"col"],["id","multiCollapseExample1",1,"collapse","multi-collapse","show",3,"ngbCollapseChange","ngbCollapse"],[1,"card","card-body","mb-0"],["id","multiCollapseExample2",1,"collapse","multi-collapse","show",3,"ngbCollapseChange","ngbCollapse"]],template:function(s,a){if(s&1){let d=_();n(0,"app-breadcrumbs",9),t(1,"div",10)(2,"div",11)(3,"div",12)(4,"div",13)(5,"h4",14),e(6,"Default Accordion"),i(),t(7,"div",15)(8,"div",16)(9,"label",17),e(10,"Show Code"),i(),t(11,"input",18),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(12,"div",19)(13,"p",20),e(14,"Use the "),t(15,"code"),e(16,"accordion"),i(),e(17," class to expand/collapse the accordion content."),i(),t(18,"div",21)(19,"div",22)(20,"div",23)(21,"div",24)(22,"button",25),e(23," How to create a group booking ? "),i()(),t(24,"div",26)(25,"div",27),e(26," Although you probably won\u2019t get into any legal trouble if you do it just once, why risk it? If you made your subscribers a promise, you should honor that. If not, you run the risk of a drastic increase in opt outs, which will only hurt you in the long run. "),i()()(),t(27,"div",28)(28,"div",24)(29,"button",25),e(30," Why do we use it ? "),i()(),t(31,"div",26)(32,"div",27),e(33,' No charges are put in place by SlickText when subscribers join your text list. This does not mean however that charges 100% will not occur. Charges that may occur fall under part of the compliance statement stating "Message and Data rates may apply." '),i()()(),t(34,"div",29)(35,"div",24)(36,"button",25),e(37," Where does it come from ? "),i()(),t(38,"div",26)(39,"div",27),e(40," Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade. "),i()()()()(),t(41,"div",30)(42,"pre",31)(43,"code"),e(44,`<!-- Base Example -->
<div class="accordion" id="default-accordion-example">
<div class="accordion-item class="material-shadow"">
<h2 class="accordion-header" id="headingOne">
<button class="border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
How to create a group booking ?
</button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#default-accordion-example">
<div class="accordion-body">
Although you probably won\u2019t get into any legal trouble if you do it just once, why risk it? If you made your subscribers a promise, you should honor that. If not, you run the risk of a drastic increase in opt outs, which will only hurt you in the long run.
</div>
</div>
</div>
<div class="accordion-item class="material-shadow"">
<h2 class="accordion-header" id="headingTwo">
<button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Why do we use it ?
</button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#default-accordion-example">
<div class="accordion-body">
No charges are put in place by SlickText when subscribers join your text list. This does not mean however that charges 100% will not occur. Charges that may occur fall under part of the compliance statement stating "Message and Data rates may apply."
</div>
</div>
</div>
<div class="accordion-item class="material-shadow"">
<h2 class="accordion-header" id="headingThree">
<button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Where does it come from ?
</button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#default-accordion-example">
<div class="accordion-body">
Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade.
</div>
</div>
</div>
</div>`),i()()()()()(),t(45,"div",11)(46,"div",12)(47,"div",13)(48,"h4",14),e(49,"Accordion Flush "),i(),t(50,"div",15)(51,"div",16)(52,"label",32),e(53,"Show Code"),i(),t(54,"input",33),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(55,"div",19)(56,"p",20),e(57,"Use "),t(58,"code"),e(59,"accordion-flush"),i(),e(60," class to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container."),i(),t(61,"div",34)(62,"div",22)(63,"div",23)(64,"div",24)(65,"button",25),e(66," How do I set up my profile ? "),i()(),t(67,"div",26)(68,"div",27),e(69," The renewal of your SlickText service happens on the anniversary of your original paid sign up date. Upgrading in the middle of your billing period will not change the billing date. Upgrading does however force an immediate, pro-rated charge to take place on your account. "),i()()(),t(70,"div",28)(71,"div",24)(72,"button",25),e(73," What can I do with my project ? "),i()(),t(74,"div",26)(75,"div",27),e(76," If you had signed up on a free account with Slicktext, then upgraded to a paid plan at a later date, your bill will renew based on the date you had upgraded to a paid plan. All invoices are able to be viewed under your plan options in your SlickText account. "),i()()(),t(77,"div",29)(78,"div",24)(79,"button",25),e(80," Where can I go to edit voice settings "),i()(),t(81,"div",26)(82,"div",27),e(83," No, we cannot provide this information. Opting out from a list is an anonymous, private act. This prevents further harassment. Providing this information is considered bad practice, and further communication after they opt out would be considered against compliance. "),i()()()()(),t(84,"div",30)(85,"pre",31)(86,"code"),e(87,`<!-- Accordion Flush Example -->
<div class="accordion accordion-flush" id="accordionFlushExample">
<div class="accordion-item material-shadow">
<h2 class="accordion-header" id="flush-headingOne">
<button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
How do I set up my profile ?
</button>
</h2>
<div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne"
data-bs-parent="#accordionFlushExample">
<div class="accordion-body">The renewal of your SlickText service happens on the anniversary of your original paid sign up date. Upgrading in the middle of your billing period will not change the billing date. Upgrading does however force an immediate, pro-rated charge to take place on your account.</div>
</div>
</div>
<div class="accordion-item material-shadow">
<h2 class="accordion-header" id="flush-headingTwo">
<button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
What can I do with my project ?
</button>
</h2>
<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
data-bs-parent="#accordionFlushExample">
<div class="accordion-body">If you had signed up on a free account with Slicktext, then upgraded to a paid plan at a later date, your bill will renew based on the date you had upgraded to a paid plan. All invoices are able to be viewed under your plan options in your SlickText account.</div>
</div>
</div>
<div class="accordion-item material-shadow">
<h2 class="accordion-header" id="flush-headingThree">
<button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
Where can I go to edit voice settings
</button>
</h2>
<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
data-bs-parent="#accordionFlushExample">
<div class="accordion-body">No, we cannot provide this information. Opting out from a list is an anonymous, private act. This prevents further harassment. Providing this information is considered bad practice, and further communication after they opt out would be considered against compliance.</div>
</div>
</div>
</div>`),i()()()()()()(),t(88,"div",10)(89,"div",35)(90,"div",12)(91,"div",13)(92,"h4",14),e(93,"Nesting Accordions"),i(),t(94,"div",15)(95,"div",16)(96,"label",36),e(97,"Show Code"),i(),t(98,"input",37),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(99,"div",19)(100,"p",20),e(101,"Use "),t(102,"code"),e(103,"nesting-accordion"),i(),e(104," class to create a nesting accordion."),i(),t(105,"div",21)(106,"div",38)(107,"div",23)(108,"div",24)(109,"button",25),e(110," How Do I Add Contacts/Subscribers? "),i()(),t(111,"div",26)(112,"div",27),e(113," This opt in method is perfect for those looking to integrate a different software such Shopify or Hubspot with Slicktext. For example, upon cashing out online, a subscriber may submit to have their mobile number to receive marketing messages. The API will pass this information from said software over to Slicktext via API integration. "),t(114,"div",39)(115,"div",40)(116,"div",41)(117,"div",24)(118,"button",25),e(119," How Do I Search For Contacts? "),i()(),t(120,"div",26)(121,"div",27),e(122," When you are in need of finding a specific subscriber, you will want to use the help of SlickText's search navigation tool, located under the Contacts tab of your Slicktext account. Once here, you will have options to sort by, filter, and search your contacts. "),t(123,"div",39)(124,"div",40)(125,"div",41)(126,"div",24)(127,"button",25),e(128," How do I reset my digital tide watch ? "),i()(),t(129,"div",26)(130,"div",27),e(131,' Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply. '),i()()()()()()()(),t(132,"div",42)(133,"div",24)(134,"button",25),e(135," How Do I Delete a Contact From My List? "),i()(),t(136,"div",26)(137,"div",27),e(138,' Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply. '),i()()()()()()()(),t(139,"div",28)(140,"div",24)(141,"button",25),e(142," How Does Personalization Work? "),i()(),t(143,"div",26)(144,"div",27),e(145," Personalization allows you to provide a personal touch to your outbound text marketing campaigns. SlickText uses merge tags as placeholders that are replaced with contact-specific information when a text message is sent. These merge tags may also be known as personalization fields. "),t(146,"div",40)(147,"div",43)(148,"div",24)(149,"button",25),e(150," Howe does temperature impact my watch? "),i()(),t(151,"div",26)(152,"div",27),e(153,' Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply. '),i()()()()()()(),t(154,"div",29)(155,"div",24)(156,"button",25),e(157," What Happens When I Run Out of Messages? "),i()(),t(158,"div",26)(159,"div",27),e(160," When you run out of messages, you will not be able to send any outbound campaigns. This would include any scheduled messages, drip campaigns, and birthday messages. However, we will continue to deliver your auto-reply messages to allow your subscriber list to continue to grow. "),i()()()()(),t(161,"div",30)(162,"pre",31)(163,"code"),e(164,`<!-- Nesting Accordions -->
<div class="accordion nesting-accordion custom-accordionwithicon accordion-border-box" id="accordionnesting">
<div class="accordion-item material-shadow">
<h2 class="accordion-header" id="accordionnestingExample1">
<button class="border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#accor_nestingExamplecollapse1" aria-expanded="true" aria-controls="accor_nestingExamplecollapse1">
How Do I Add Contacts/Subscribers?
</button>
</h2>
<div id="accor_nestingExamplecollapse1" class="accordion-collapse collapse show" aria-labelledby="accordionnestingExample1" data-bs-parent="#accordionnesting">
<div class="accordion-body">
This opt in method is perfect for those looking to integrate a different software such Shopify or Hubspot with Slicktext. For example, upon cashing out online, a subscriber may submit to have their mobile number to receive marketing messages. The API will pass this information from said software over to Slicktext via API integration.
<div class="accordion nesting2-accordion custom-accordionwithicon accordion-border-box mt-3" id="accordionnesting2">
<div class="accordion-item material-shadow">
<h2 class="accordion-header" id="accordionnesting2Example1">
  <button class="border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#accor_nesting2Examplecollapse1" aria-expanded="true" aria-controls="accor_nesting2Examplecollapse1">
      How Do I Search For Contacts?
  </button>
</h2>
<div id="accor_nesting2Examplecollapse1" class="accordion-collapse collapse show" aria-labelledby="accordionnesting2Example1" data-bs-parent="#accordionnesting2">
  <div class="accordion-body">
      When you are in need of finding a specific subscriber, you will want to use the help of SlickText's search navigation tool, located under the Contacts tab of your Slicktext account. Once here, you will have options to sort by, filter, and search your contacts.
      <div class="accordion nesting4-accordion custom-accordionwithicon accordion-border-box mt-3" id="accordionnesting4">
          <div class="accordion-item material-shadow">
              <h2 class="accordion-header" id="accordionnesting4Example2">
                  <button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor_nesting4Examplecollapse2" aria-expanded="false" aria-controls="accor_nesting4Examplecollapse2">
                      How do I reset my digital tide watch ?
                  </button>
              </h2>
              <div id="accor_nesting4Examplecollapse2" class="accordion-collapse collapse" aria-labelledby="accordionnesting4Example2" data-bs-parent="#accordionnesting4">
                  <div class="accordion-body">
                      Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
<div class="accordion-item material-shadow">
<h2 class="accordion-header" id="accordionnesting2Example2">
  <button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor_nesting2Examplecollapse2" aria-expanded="false" aria-controls="accor_nesting2Examplecollapse2">
      How Do I Delete a Contact From My List?
  </button>
</h2>
<div id="accor_nesting2Examplecollapse2" class="accordion-collapse collapse" aria-labelledby="accordionnesting2Example2" data-bs-parent="#accordionnesting2">
  <div class="accordion-body">
      Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="accordion-item material-shadow">
<h2 class="accordion-header" id="accordionnestingExample2">
<button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor_nestingExamplecollapse2" aria-expanded="false" aria-controls="accor_nestingExamplecollapse2">
How Does Personalization Work?
</button>
</h2>
<div id="accor_nestingExamplecollapse2" class="accordion-collapse collapse" aria-labelledby="accordionnestingExample2" data-bs-parent="#accordionnesting">
<div class="accordion-body">
Personalization allows you to provide a personal touch to your outbound text marketing campaigns. SlickText uses merge tags as placeholders that are replaced with contact-specific information when a text message is sent. These merge tags may also be known as personalization fields.
<div class="accordion nesting3-accordion custom-accordionwithicon accordion-border-box mt-3" id="accordionnesting3">
<div class="accordion-item material-shadow mt-2">
<h2 class="accordion-header" id="accordionnesting3Example2">
  <button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor_nesting3Examplecollapse2" aria-expanded="false" aria-controls="accor_nesting3Examplecollapse2">
      Howe does temperature impact my watch?
  </button>
</h2>
<div id="accor_nesting3Examplecollapse2" class="accordion-collapse collapse" aria-labelledby="accordionnesting3Example2" data-bs-parent="#accordionnesting3">
  <div class="accordion-body">
      Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="accordion-item material-shadow">
<h2 class="accordion-header" id="accordionnestingExample3">
<button class="border-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor_nestingExamplecollapse3" aria-expanded="false" aria-controls="accor_nestingExamplecollapse3">
What Happens When I Run Out of Messages?
</button>
</h2>
<div id="accor_nestingExamplecollapse3" class="accordion-collapse collapse" aria-labelledby="accordionnestingExample3" data-bs-parent="#accordionnesting">
<div class="accordion-body">
When you run out of messages, you will not be able to send any outbound campaigns. This would include any scheduled messages, drip campaigns, and birthday messages. However, we will continue to deliver your auto-reply messages to allow your subscriber list to continue to grow.
</div>
</div>
</div>
</div>`),i()()()()()()(),t(165,"div",10)(166,"div",11)(167,"div",12)(168,"div",13)(169,"h4",14),e(170,"Collapse Example"),i(),t(171,"div",15)(172,"div",16)(173,"label",44),e(174,"Show Code"),i(),t(175,"input",45),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(176,"div",19),n(177,"p"),t(178,"div",21)(179,"div",46)(180,"a",47),c("click",function(){x(d);let b=y(185);return f(b.toggle())}),e(181," Link with href "),i(),t(182,"button",48),c("click",function(){x(d);let b=y(185);return f(b.toggle())}),e(183," Button with data-target "),i()(),t(184,"div",49,0),$("ngbCollapseChange",function(b){return x(d),Y(a.Collapsed,b)||(a.Collapsed=b),f(b)}),t(186,"div",50),e(187," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. "),i()()(),t(188,"div",30)(189,"pre",31)(190,"code"),e(191,`<!-- Collapse Example -->
<div class="hstack gap-2 flex-wrap mb-3">
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
Button with data-bs-target
</button>
</div>

<div class="collapse show" id="collapseExample">
<div class="card mb-0">
<div class="card-body">
When designing, the goal is to draw someone\u2019s attention and portray to them what you\u2019re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.
</div>
</div>
</div>`),i()()()()()(),t(192,"div",11)(193,"div",12)(194,"div",13)(195,"h4",14),e(196,"Horizontal Collapse"),i(),t(197,"div",15)(198,"div",16)(199,"label",51),e(200,"Show Code"),i(),t(201,"input",52),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(202,"div",19)(203,"p",20),e(204,"Use the "),t(205,"code"),e(206,"collapse-horizontal"),i(),e(207," class to transition the "),t(208,"code"),e(209,"width"),i(),e(210," instead of "),t(211,"code"),e(212,"height"),i(),e(213," and set a "),t(214,"code"),e(215,"width"),i(),e(216," on the immediate child element for horizontal collapse. "),i(),t(217,"div",21)(218,"div",53)(219,"button",54),c("click",function(){x(d);let b=y(223);return f(b.toggle())}),e(220," Toggle Width Collapse "),i()(),t(221,"div")(222,"div",55,1),$("ngbCollapseChange",function(b){return x(d),Y(a.HCollapsed,b)||(a.HCollapsed=b),f(b)}),t(224,"div",56),e(225," This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered. "),i()()()(),t(226,"div",30)(227,"pre",31)(228,"code"),e(229,`<!-- Horizontal Collapse -->
<div class="mb-3">
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="true" aria-controls="collapseWidthExample">
Toggle width collapse
</button>
</div>

<div>
<div class="collapse collapse-horizontal show" id="collapseWidthExample">
<div class="card card-body mb-0" style="max-width: 300px;">
This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
</div>
</div>
</div>`),i()()()()()()(),t(230,"div",10)(231,"div",11)(232,"div",12)(233,"div",13)(234,"h4",14),e(235,"Collapse with Icon"),i(),t(236,"div",15)(237,"div",16)(238,"label",57),e(239,"Show Code"),i(),t(240,"input",58),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(241,"div",19)(242,"p",20),e(243," Here is the example of collapse in which the icon is wrapped within the button collapse toggle. "),i(),t(244,"div",21)(245,"div",59)(246,"a",60),c("click",function(){x(d);let b=y(251);return f(b.toggle())}),n(247,"i",61),i(),t(248,"button",62),c("click",function(){x(d);let b=y(256);return f(b.toggle())}),n(249,"i",63),i()(),t(250,"div",64,2),$("ngbCollapseChange",function(b){return x(d),Y(a.DownCollapsed,b)||(a.DownCollapsed=b),f(b)}),t(252,"div",65)(253,"div",19),e(254," If you enter text including symbols in the search criteria, the search criteria is interpreted exactly as you entered it, and the search is case sensitive as a case insensitive search that contains certain text but does also provide a lot of search criteria options. "),i()()(),t(255,"div",66,3),$("ngbCollapseChange",function(b){return x(d),Y(a.FilterCollapsed,b)||(a.FilterCollapsed=b),f(b)}),t(257,"div",67)(258,"div",19),e(259," When you want to search for data, such as customer names, addresses, or product groups, you enter criteria. In search criteria you can use all the numbers and letters that you normally use in the specific field. In addition, you can use special symbols to further filter the results. "),i()()()(),t(260,"div",30)(261,"pre",31)(262,"code"),e(263,`<!-- Collapse with Icon -->
<div class="hstack gap-3 mb-3">
<a class="link-success" data-bs-toggle="collapse" href="#collapseWithicon" role="button" aria-expanded="true" aria-controls="collapseWithicon">
<i class="ri-arrow-down-circle-line fs-16"></i>
</a>
<button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWithicon2" aria-expanded="false" aria-controls="collapseWithicon2">
<i class="ri-filter-2-line"></i>
</button>
</div>
<div class="collapse show" id="collapseWithicon">
<div class="card mb-0">
<div class="card-body">
If you enter text including symbols in the search criteria, the search criteria is interpreted exactly as you entered it, and the search is case sensitive as a case insensitive search that contains certain text but does also provide a lot of search criteria options.
</div>
</div>
</div>
<div class="collapse" id="collapseWithicon2">
<div class="card mb-0">
<div class="card-body">
When you want to search for data, such as customer names, addresses, or product groups, you enter criteria. In search criteria you can use all the numbers and letters that you normally use in the specific field. In addition, you can use special symbols to further filter the results.
</div>
</div>
</div>`),i()()()()()(),t(264,"div",11)(265,"div",12)(266,"div",13)(267,"h4",14),e(268,"Inline & Block Element Collapse"),i(),t(269,"div",15)(270,"div",16)(271,"label",68),e(272,"Show Code"),i(),t(273,"input",69),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(274,"div",19)(275,"p",20),e(276,"Inline element collapse takes all horizontal space hence you can activate the collapse within by clicking on full-width horizontal space. Block element collapse can be activated by clicking on collapse toggle only."),i(),t(277,"div",21)(278,"div",53)(279,"h6",70),c("click",function(){x(d);let b=y(295);return f(b.toggle())}),t(280,"code"),e(281,"<h6>"),i(),e(282," Inline Element Collapse "),i(),t(283,"span",71),c("click",function(){x(d);let b=y(290);return f(b.toggle())}),t(284,"code"),e(285,"<span>"),i(),e(286," Block Element Collapse "),i()(),t(287,"div",72)(288,"div",73)(289,"div",74,4),$("ngbCollapseChange",function(b){return x(d),Y(a.BlockCollapsed,b)||(a.BlockCollapsed=b),f(b)}),t(291,"div",56),e(292," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring heart. "),i()()(),t(293,"div",73)(294,"div",75,5),$("ngbCollapseChange",function(b){return x(d),Y(a.InlineCollapsed,b)||(a.InlineCollapsed=b),f(b)}),t(296,"div",56),e(297," When you have created a new account schedule and set up the rows, you must set up columns. "),i()()()()(),t(298,"div",30)(299,"pre",31)(300,"code"),e(301,`<!-- Inline & Block Element Collapse -->
<div class="mb-3">
<h6 class="text-primary" data-bs-toggle="collapse" data-bs-target="#collapseblock" aria-expanded="true" aria-controls="collapseblock">
<h6> Inline Element Collapse
</h6>
<span class="text-primary fw-medium" data-bs-toggle="collapse" data-bs-target="#collapseinline" aria-expanded="true" aria-controls="collapseinline">
<span> Block Element Collapse
</span>
</div>
<div class="row">
<div class="col-lg-6">
<div class="collapse collapse-horizontal show" id="collapseblock">
<div class="card card-body mb-0" style="width: 300px;">
A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring heart.
</div>
</div>
</div>
<div class="col-lg-6">
<div class="collapse collapse-horizontal show" id="collapseinline">
<div class="card card-body mb-0" style="width: 300px;">
When you have created a new account schedule and set up the rows, you must set up columns.
</div>
</div>
</div>
</div>`),i()()()()()()(),t(302,"div",10)(303,"div",76)(304,"div",12)(305,"div",13)(306,"h4",14),e(307,"Multiple Targets Collapse"),i(),t(308,"div",15)(309,"div",16)(310,"label",77),e(311,"Show Code"),i(),t(312,"input",78),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(313,"div",19)(314,"p",20),e(315," A "),t(316,"code"),e(317,"<button>"),i(),e(318," or "),t(319,"code"),e(320,"<a>"),i(),e(321," can show and hide multiple elements by referencing them with a selector in its href or data-bs-target attribute. Multiple "),t(322,"code"),e(323,"<button>"),i(),e(324," or "),t(325,"code"),e(326,"<a>"),i(),e(327," can show and hide an element if they each reference it with their href or data-bs-target attribute. "),i(),t(328,"div",21)(329,"div",79)(330,"a",80),c("click",function(){x(d);let b=y(340);return f(b.toggle())}),e(331,"Toggle First Element"),i(),t(332,"button",81),c("click",function(){x(d);let b=y(345);return f(b.toggle())}),e(333,"Toggle Second Element"),i(),t(334,"button",82),c("click",function(){x(d);let b=y(337);return f(b.toggle())}),e(335,"Toggle Both Elements"),i()(),t(336,"div",83,6),$("ngbCollapseChange",function(b){return x(d),Y(a.bothColleaps,b)||(a.bothColleaps=b),f(b)}),t(338,"div",84)(339,"div",85,7),$("ngbCollapseChange",function(b){return x(d),Y(a.firstColleaps,b)||(a.firstColleaps=b),f(b)}),t(341,"div",86),e(342," Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. "),i()()(),t(343,"div",84)(344,"div",87,8),$("ngbCollapseChange",function(b){return x(d),Y(a.secondColleaps,b)||(a.secondColleaps=b),f(b)}),t(346,"div",86),e(347," Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. "),i()()()()(),t(348,"div",30)(349,"pre",31)(350,"code"),e(351,`<!-- Multiple Targets Example -->
<div class="hstack gap-2 flex-wrap mb-3">
<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</div>

<div class="row">
<div class="col">
<div class="collapse multi-collapse show" id="multiCollapseExample1">
<div class="card card-body mb-0">
Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
</div>
</div>
</div>
<div class="col">
<div class="collapse multi-collapse show" id="multiCollapseExample2">
<div class="card card-body mb-0">
Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
</div>
</div>
</div>
</div>`),i()()()()()()()}s&2&&(p("breadcrumbItems",a.breadCrumbItems),m(19),p("closeOthers",!0),m(43),p("closeOthers",!0),m(44),p("closeOthers",!0),m(9),p("closeOthers",!0),m(9),p("closeOthers",!0),m(22),p("closeOthers",!0),m(34),ae("aria-expanded",!a.Collapsed),m(4),G("ngbCollapse",a.Collapsed),m(35),ae("aria-expanded",!a.HCollapsed),m(3),G("ngbCollapse",a.HCollapsed),m(24),ae("aria-expanded",!a.DownCollapsed),m(2),ae("aria-expanded",!a.FilterCollapsed),m(2),G("ngbCollapse",a.DownCollapsed),m(5),G("ngbCollapse",a.FilterCollapsed),m(24),ae("aria-expanded",!a.InlineCollapsed),m(4),ae("aria-expanded",!a.BlockCollapsed),m(6),G("ngbCollapse",a.BlockCollapsed),m(5),G("ngbCollapse",a.InlineCollapsed),m(36),ae("aria-expanded",!a.firstColleaps),m(2),ae("aria-expanded",!a.secondColleaps),m(2),ae("aria-expanded",!a.secondColleaps),m(2),G("ngbCollapse",a.bothColleaps),m(3),G("ngbCollapse",a.firstColleaps),m(5),G("ngbCollapse",a.secondColleaps))},dependencies:[D,qt,Vt,Rt,Pt,Nt,Bt,jt],encapsulation:2})}}return l})();function Dl(l,u){if(l&1){let r=_();t(0,"div",62)(1,"h5",117),e(2,"Modal Heading"),i(),t(3,"button",118),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(4,"div",65)(5,"h5"),e(6,"Overflowing text to show scroll behavior"),i(),t(7,"p",42),e(8,"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."),i(),t(9,"p",42),e(10,`The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.`),i(),t(11,"p",42),e(12,"It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls."),i()(),t(13,"div",70)(14,"button",119),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(15,"Close"),i(),t(16,"button",120),e(17,"Save changes"),i()()}}function jl(l,u){if(l&1){let r=_();t(0,"div",121),n(1,"lord-icon",122),t(2,"div",123)(3,"h4",124),e(4,"Oops something went wrong!"),i(),t(5,"p",125),e(6," The transfer was not successfully received by us. the email of the recipient wasn't correct."),i(),t(7,"div",126)(8,"button",127),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(9,"Close"),i(),t(10,"a",128),e(11,"Try Again"),i()()()()}}function Ll(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",129),e(3,"Grid Modals"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(5,"div",65)(6,"form",131)(7,"div",132)(8,"div",26)(9,"div")(10,"label",133),e(11,"First Name"),i(),n(12,"input",134),i()(),t(13,"div",26)(14,"div")(15,"label",135),e(16,"Last Name"),i(),n(17,"input",136),i()(),t(18,"div",83)(19,"label",137),e(20,"Gender"),i(),t(21,"div")(22,"div",138),n(23,"input",139),t(24,"label",140),e(25,"Male"),i()(),t(26,"div",138),n(27,"input",141),t(28,"label",142),e(29,"Female"),i()(),t(30,"div",138),n(31,"input",143),t(32,"label",144),e(33,"Others"),i()()()(),t(34,"div",26)(35,"label",145),e(36,"Email"),i(),n(37,"input",146),i(),t(38,"div",26)(39,"label",147),e(40,"Password"),i(),n(41,"input",148),i(),t(42,"div",83)(43,"div",149)(44,"button",127),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(45,"Close"),i(),t(46,"button",150),e(47,"Submit"),i()()()()()()()}}function Nl(l,u){if(l&1){let r=_();t(0,"div",121),n(1,"lord-icon",151),t(2,"div",123)(3,"h4",124),e(4,"You've made it!"),i(),t(5,"p",125),e(6," The transfer was not successfully received by us. the email of the recipient wasn't correct."),i(),t(7,"div",126)(8,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(9,"i",153),e(10," Close"),i(),t(11,"a",154),e(12,"Completed"),i()()()()}}function Bl(l,u){if(l&1){let r=_();t(0,"div",121),n(1,"lord-icon",155),t(2,"div",156)(3,"h4"),e(4,"Uh oh, something went wrong!"),i(),t(5,"p",42),e(6," The transfer was not successfully received by us. the email of the recipient wasn't correct."),i(),t(7,"button",157),c("click",function(){x(r);let a=M(),d=y(412);return f(a.secondModal(d))})("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(8," Continue "),i()()()}}function ql(l,u){if(l&1){let r=_();t(0,"div",121),n(1,"lord-icon",158),t(2,"div",159)(3,"h4",124),e(4,"Follow-Up Email"),i(),t(5,"p",125),e(6,"Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email."),i(),t(7,"div",126)(8,"button",160),c("click",function(){x(r);let a=M(),d=y(410);return f(a.toggleModal(d))})("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(9,"Back to First "),i(),t(10,"button",127),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(11,"Close"),i()()()()}}function Pl(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",63),e(3,"Tooltips and Popovers Modal"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(5,"div",65)(6,"h5",66),e(7,"Popover in a Modal"),i(),t(8,"p",42),e(9,"You only need to know a little to make a big "),t(10,"a",161),e(11,"Popover on Click "),i(),e(12," you do every day. So let's get started. First, some common types of fonts and what you need to know about them triggers a popover on click."),i(),t(13,"h5",66),e(14,"Tooltips in a Modal"),i(),t(15,"p",42),e(16,"Opposites attract, and that\u2019s a fact. It\u2019s in our "),t(17,"a",162),e(18,"design"),i(),e(19," contrasting colors in Graphic Design is a must."),i()(),t(20,"div",70)(21,"div",71)(22,"a",163),e(23,"Read More "),n(24,"i",73),i()()()()}}function Rl(l,u){if(l&1){let r=_();t(0,"div",62)(1,"h5",164),e(2,"Scrollable Modal"),i(),t(3,"button",118),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(4,"div",65)(5,"h6",165),e(6,"Give your text a good structure"),i(),t(7,"div",166)(8,"div",30),n(9,"i",167),i(),t(10,"div",168)(11,"p",169),e(12,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(13,"div",170)(14,"div",30),n(15,"i",167),i(),t(16,"div",168)(17,"p",169),e(18,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(19,"div",170)(20,"div",30),n(21,"i",167),i(),t(22,"div",168)(23,"p",169),e(24,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()(),t(25,"div",170)(26,"div",30),n(27,"i",167),i(),t(28,"div",168)(29,"p",169),e(30,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()()(),t(31,"div",170)(32,"div",30),n(33,"i",167),i(),t(34,"div",168)(35,"p",169),e(36,"You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR."),i()()(),t(37,"div",170)(38,"div",30),n(39,"i",167),i(),t(40,"div",168)(41,"p",169),e(42,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()()(),t(43,"h6",171),e(44,"Graphic Design"),i(),t(45,"div",170)(46,"div",30),n(47,"i",167),i(),t(48,"div",168)(49,"p",169),e(50,"Opposites attract, and that\u2019s a fact. It\u2019s in our nature to be interested in the unusual, and that\u2019s why using contrasting colors in Graphic Design is a must. It\u2019s eye-catching, it makes a statement, it\u2019s impressive graphic design. Increase or decrease the letter spacing depending."),i()()(),t(51,"div",170)(52,"div",30),n(53,"i",167),i(),t(54,"div",168)(55,"p",169),e(56,"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater."),i()()(),t(57,"div",170)(58,"div",30),n(59,"i",167),i(),t(60,"div",168)(61,"p",169),e(62,"Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand."),i()()(),t(63,"div",170)(64,"div",30),n(65,"i",167),i(),t(66,"div",168)(67,"p",169),e(68,"Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater."),i()()()(),t(69,"div",70)(70,"button",172),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(71,"Close"),i(),t(72,"button",120),e(73,"Save changes"),i()()}}function Vl(l,u){if(l&1){let r=_();t(0,"div",62)(1,"h5",173),e(2,"New message"),i(),t(3,"button",118),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(4,"div",65)(5,"form")(6,"div",124)(7,"label",174),e(8,"Customer Name:"),i(),n(9,"input",175),i(),t(10,"div",124)(11,"label",176),e(12,"Message:"),i(),n(13,"textarea",177),i()()(),t(14,"div",70)(15,"button",119),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(16,"Back"),i(),t(17,"button",120),e(18,"Send message"),i()()}}function Wl(l,u){if(l&1){let r=_();t(0,"div",62)(1,"h5",173),e(2,"New message"),i(),t(3,"button",118),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(4,"div",65)(5,"form")(6,"div",124)(7,"label",174),e(8,"Customer Name:"),i(),n(9,"input",178),i(),t(10,"div",124)(11,"label",176),e(12,"Message:"),i(),n(13,"textarea",177),i()()(),t(14,"div",70)(15,"button",119),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(16,"Back"),i(),t(17,"button",120),e(18,"Send message"),i()()}}function Ol(l,u){if(l&1){let r=_();t(0,"div",62)(1,"h5",173),e(2,"New message"),i(),t(3,"button",118),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(4,"div",65)(5,"form")(6,"div",124)(7,"label",174),e(8,"Customer Name:"),i(),n(9,"input",179),i(),t(10,"div",124)(11,"label",176),e(12,"Message:"),i(),n(13,"textarea",177),i()()(),t(14,"div",70)(15,"button",172),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),e(16,"Back"),i(),t(17,"button",120),e(18,"Send message"),i()()}}function Fl(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",180),e(3,"Fullscreen Modal Heading"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Close click"))}),i()(),t(5,"div",65)(6,"h6",165),e(7,"Give your text a good structure"),i(),t(8,"div",166)(9,"div",30),n(10,"i",167),i(),t(11,"div",168)(12,"p",169),e(13,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(14,"div",170)(15,"div",30),n(16,"i",167),i(),t(17,"div",168)(18,"p",169),e(19,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(20,"div",170)(21,"div",30),n(22,"i",167),i(),t(23,"div",168)(24,"p",169),e(25,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()(),t(26,"div",170)(27,"div",30),n(28,"i",167),i(),t(29,"div",168)(30,"p",169),e(31,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()()(),t(32,"div",170)(33,"div",30),n(34,"i",167),i(),t(35,"div",168)(36,"p",169),e(37,"You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR."),i()()(),t(38,"div",170)(39,"div",30),n(40,"i",167),i(),t(41,"div",168)(42,"p",169),e(43,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()()(),t(44,"h6",171),e(45,"Graphic Design"),i(),t(46,"div",170)(47,"div",30),n(48,"i",167),i(),t(49,"div",168)(50,"p",169),e(51,"Opposites attract, and that\u2019s a fact. It\u2019s in our nature to be interested in the unusual, and that\u2019s why using contrasting colors in Graphic Design is a must. It\u2019s eye-catching, it makes a statement, it\u2019s impressive graphic design. Increase or decrease the letter spacing depending."),i()()(),t(52,"div",170)(53,"div",30),n(54,"i",167),i(),t(55,"div",168)(56,"p",169),e(57,"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater."),i()()(),t(58,"div",170)(59,"div",30),n(60,"i",167),i(),t(61,"div",168)(62,"p",169),e(63,"Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand."),i()()(),t(64,"div",170)(65,"div",30),n(66,"i",167),i(),t(67,"div",168)(68,"p",169),e(69,"Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater."),i()()()(),t(70,"div",70)(71,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(72,"i",153),e(73," Close"),i(),t(74,"button",120),e(75,"Save changes"),i()()()}}function Ul(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",181),e(3,"Extra large modal"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Close click"))}),i()(),t(5,"div",65)(6,"h6",165),e(7,"Give your text a good structure"),i(),t(8,"div",166)(9,"div",30),n(10,"i",167),i(),t(11,"div",168)(12,"p",169),e(13,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(14,"div",170)(15,"div",30),n(16,"i",167),i(),t(17,"div",168)(18,"p",169),e(19,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(20,"div",170)(21,"div",30),n(22,"i",167),i(),t(23,"div",168)(24,"p",169),e(25,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()(),t(26,"div",170)(27,"div",30),n(28,"i",167),i(),t(29,"div",168)(30,"p",169),e(31,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()()(),t(32,"div",170)(33,"div",30),n(34,"i",167),i(),t(35,"div",168)(36,"p",169),e(37,"You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR."),i()()(),t(38,"div",170)(39,"div",30),n(40,"i",167),i(),t(41,"div",168)(42,"p",169),e(43,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()()(),t(44,"h6",171),e(45,"Graphic Design"),i(),t(46,"div",170)(47,"div",30),n(48,"i",167),i(),t(49,"div",168)(50,"p",169),e(51,"Opposites attract, and that\u2019s a fact. It\u2019s in our nature to be interested in the unusual, and that\u2019s why using contrasting colors in Graphic Design is a must. It\u2019s eye-catching, it makes a statement, it\u2019s impressive graphic design. Increase or decrease the letter spacing depending."),i()()(),t(52,"div",170)(53,"div",30),n(54,"i",167),i(),t(55,"div",168)(56,"p",169),e(57,"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater."),i()()(),t(58,"div",170)(59,"div",30),n(60,"i",167),i(),t(61,"div",168)(62,"p",169),e(63,"Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand."),i()()(),t(64,"div",170)(65,"div",30),n(66,"i",167),i(),t(67,"div",168)(68,"p",169),e(69,"Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater."),i()()()(),t(70,"div",70)(71,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(72,"i",153),e(73," Close"),i(),t(74,"button",120),e(75,"Save changes"),i()()()}}function zl(l,u){if(l&1){let r=_();t(0,"div",62)(1,"h5",182),e(2,"Large modal"),i(),t(3,"button",118),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(4,"div",65)(5,"h6",165),e(6,"Give your text a good structure"),i(),t(7,"div",166)(8,"div",30),n(9,"i",167),i(),t(10,"div",168)(11,"p",169),e(12,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(13,"div",170)(14,"div",30),n(15,"i",167),i(),t(16,"div",168)(17,"p",169),e(18,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(19,"div",170)(20,"div",30),n(21,"i",167),i(),t(22,"div",168)(23,"p",169),e(24,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()(),t(25,"div",170)(26,"div",30),n(27,"i",167),i(),t(28,"div",168)(29,"p",169),e(30,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()()(),t(31,"div",170)(32,"div",30),n(33,"i",167),i(),t(34,"div",168)(35,"p",169),e(36,"You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR."),i()()(),t(37,"div",170)(38,"div",30),n(39,"i",167),i(),t(40,"div",168)(41,"p",169),e(42,"For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live."),i()()(),t(43,"h6",171),e(44,"Graphic Design"),i(),t(45,"div",170)(46,"div",30),n(47,"i",167),i(),t(48,"div",168)(49,"p",169),e(50,"Opposites attract, and that\u2019s a fact. It\u2019s in our nature to be interested in the unusual, and that\u2019s why using contrasting colors in Graphic Design is a must. It\u2019s eye-catching, it makes a statement, it\u2019s impressive graphic design. Increase or decrease the letter spacing depending."),i()()(),t(51,"div",170)(52,"div",30),n(53,"i",167),i(),t(54,"div",168)(55,"p",169),e(56,"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater."),i()()(),t(57,"div",170)(58,"div",30),n(59,"i",167),i(),t(60,"div",168)(61,"p",169),e(62,"Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand."),i()()(),t(63,"div",170)(64,"div",30),n(65,"i",167),i(),t(66,"div",168)(67,"p",169),e(68,"Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater."),i()()()(),t(69,"div",70)(70,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(71,"i",153),e(72," Close"),i(),t(73,"button",120),e(74,"Save changes"),i()()}}function Hl(l,u){if(l&1){let r=_();t(0,"div",62)(1,"h5",183),e(2,"Small modal"),i(),t(3,"button",118),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(4,"div",65)(5,"h6",165),e(6,"Give your text a good structure"),i(),t(7,"div",166)(8,"div",30),n(9,"i",167),i(),t(10,"div",168)(11,"p",169),e(12,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(13,"div",170)(14,"div",30),n(15,"i",167),i(),t(16,"div",168)(17,"p",169),e(18,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(19,"div",170)(20,"div",30),n(21,"i",167),i(),t(22,"div",168)(23,"p",169),e(24,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()()(),t(25,"div",70)(26,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(27,"i",153),e(28," Close"),i(),t(29,"button",120),e(30,"Save changes"),i()()}}function Gl(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",184),e(3,"Full screen below sm"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(5,"div",65)(6,"h6",165),e(7,"Give your text a good structure"),i(),t(8,"div",166)(9,"div",30),n(10,"i",167),i(),t(11,"div",168)(12,"p",169),e(13,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(14,"div",170)(15,"div",30),n(16,"i",167),i(),t(17,"div",168)(18,"p",169),e(19,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(20,"div",170)(21,"div",30),n(22,"i",167),i(),t(23,"div",168)(24,"p",169),e(25,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()()(),t(26,"div",70)(27,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(28,"i",153),e(29," Close"),i(),t(30,"button",120),e(31,"Save changes"),i()()()}}function Yl(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",185),e(3,"Full screen below md"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(5,"div",65)(6,"h6",165),e(7,"Give your text a good structure"),i(),t(8,"div",166)(9,"div",30),n(10,"i",167),i(),t(11,"div",168)(12,"p",169),e(13,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(14,"div",170)(15,"div",30),n(16,"i",167),i(),t(17,"div",168)(18,"p",169),e(19,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(20,"div",170)(21,"div",30),n(22,"i",167),i(),t(23,"div",168)(24,"p",169),e(25,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()()(),t(26,"div",70)(27,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(28,"i",153),e(29," Close"),i(),t(30,"button",120),e(31,"Save changes"),i()()()}}function $l(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",186),e(3,"Full screen below lg"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(5,"div",65)(6,"h6",165),e(7,"Give your text a good structure"),i(),t(8,"div",166)(9,"div",30),n(10,"i",167),i(),t(11,"div",168)(12,"p",169),e(13,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(14,"div",170)(15,"div",30),n(16,"i",167),i(),t(17,"div",168)(18,"p",169),e(19,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(20,"div",170)(21,"div",30),n(22,"i",167),i(),t(23,"div",168)(24,"p",169),e(25,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()()(),t(26,"div",70)(27,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(28,"i",153),e(29," Close"),i(),t(30,"button",120),e(31,"Save changes"),i()()()}}function Ql(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",187),e(3,"Full screen below xl"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(5,"div",65)(6,"h6",165),e(7,"Give your text a good structure"),i(),t(8,"div",166)(9,"div",30),n(10,"i",167),i(),t(11,"div",168)(12,"p",169),e(13,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(14,"div",170)(15,"div",30),n(16,"i",167),i(),t(17,"div",168)(18,"p",169),e(19,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(20,"div",170)(21,"div",30),n(22,"i",167),i(),t(23,"div",168)(24,"p",169),e(25,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()()(),t(26,"div",70)(27,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(28,"i",153),e(29," Close"),i(),t(30,"button",120),e(31,"Save changes"),i()()()}}function Jl(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",62)(2,"h5",188),e(3,"Full screen below xxl"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(5,"div",65)(6,"h6",165),e(7,"Give your text a good structure"),i(),t(8,"div",166)(9,"div",30),n(10,"i",167),i(),t(11,"div",168)(12,"p",169),e(13,"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."),i()()(),t(14,"div",170)(15,"div",30),n(16,"i",167),i(),t(17,"div",168)(18,"p",169),e(19,"Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. "),i()()(),t(20,"div",170)(21,"div",30),n(22,"i",167),i(),t(23,"div",168)(24,"p",169),e(25,"In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with."),i()()()(),t(26,"div",70)(27,"a",152),c("click",function(){let a=x(r).$implicit;return f(a.close("Close click"))}),n(28,"i",153),e(29," Close"),i(),t(30,"button",120),e(31,"Save changes"),i()()()}}function Xl(l,u){if(l&1){let r=_();t(0,"div",61)(1,"div",121)(2,"div",189)(3,"button",190),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(4,"div",191),n(5,"lord-icon",192),t(6,"h4",193),e(7,"Your Transaction is Successfull !"),i(),t(8,"p",194),e(9,"Successful transaction is the status of operation whose result is the payment of the amount paid by the customer in favor of the merchant."),i(),t(10,"div",126)(11,"button",195),e(12,"New transaction"),i(),t(13,"button",196),n(14,"i",197),e(15," Copy tracking link"),i()()()(),t(16,"div",198)(17,"p",199),e(18,"You like our service? "),t(19,"a",200),e(20,"Invite Friends"),i()()()()}}function Kl(l,u){l&1&&(t(0,"div",201)(1,"div",202)(2,"h5",203),e(3,"Login"),i(),t(4,"p",204),e(5,"Don't have an account? "),t(6,"a",205),e(7,"Sign Up."),i()(),t(8,"div",206)(9,"button",207),n(10,"i",208),e(11," Google"),i(),t(12,"button",209),n(13,"i",210),e(14," Facebook"),i()()(),t(15,"div",211)(16,"h5",124),e(17,"Login with Email"),i(),t(18,"form")(19,"div",212),n(20,"input",213),i(),t(21,"div",124),n(22,"input",214),t(23,"div",215)(24,"a",216),e(25,"Forgot password ?"),i()()(),t(26,"button",217),e(27,"Submit"),i()()()())}function Zl(l,u){l&1&&(t(0,"div",201)(1,"div",218)(2,"div",219)(3,"div",211)(4,"h2",220),e(5,"Subscribe now today to get "),t(6,"span",221),e(7,"20% off"),i(),e(8," experiences! "),i(),t(9,"p",125),e(10,"A free bet is a bet which is provided by a betting site for a customer to place and then benefit from the winnings. Free bets are commonly used as welcome offers."),i(),t(11,"div",222),n(12,"input",223),t(13,"button",224),e(14,"Subscript Now"),i()(),t(15,"div",225),n(16,"input",226),t(17,"label",227),e(18,"By subscribing to a particular channel or user on YouTube, you can receive instant updates."),i()()()(),t(19,"div",228)(20,"div",229),n(21,"img",230),i()()()())}function eo(l,u){if(l&1){let r=_();t(0,"div",201)(1,"div",231)(2,"h4",232),e(3,"Sign Up"),i(),t(4,"button",130),c("click",function(){let a=x(r).$implicit;return f(a.dismiss("Cross click"))}),i()(),t(5,"div",233)(6,"p",234),e(7,"Up to "),t(8,"span",235),e(9,"50% OFF"),i(),e(10,", Hurry up before the stock ends"),i()(),t(11,"div",65)(12,"form")(13,"div",124)(14,"label",236),e(15,"Full Name"),i(),n(16,"input",237),i(),t(17,"div",124)(18,"label",145),e(19,"Email address"),i(),n(20,"input",146),i(),t(21,"div",124)(22,"label",238),e(23,"Password"),i(),n(24,"input",214),i(),t(25,"div",239),n(26,"input",240),t(27,"label",241),e(28,"I agree to the "),t(29,"span",235),e(30,"Terms of Service"),i(),e(31," and Privacy Policy"),i()(),t(32,"div",189)(33,"button",150),e(34,"Sign Up Now"),i()()()()()}}var Li=(()=>{class l{constructor(r){this.modalService=r}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Modals",active:!0}]}openModal(r){this.modalService.open(r)}centerModal(r){this.modalService.open(r,{centered:!0})}LunchModal(r){this.modalService.open(r)}StaticModal(r){this.modalService.open(r,{centered:!0})}toggleModal(r){this.modalService.open(r,{centered:!0})}secondModal(r){this.modalService.open(r,{centered:!0})}LunchDemoModal(r){this.modalService.open(r)}scrollModal(r){this.modalService.open(r,{scrollable:!0})}MaryModal(r){this.modalService.open(r)}fullModal(r){this.modalService.open(r,{size:"fullscreen",windowClass:"modal-holder"})}extraLarge(r){this.modalService.open(r,{size:"xl",centered:!0})}largeModal(r){this.modalService.open(r,{size:"lg",centered:!0})}smallModal(r){this.modalService.open(r,{size:"sm",centered:!0})}fullSMModal(r){this.modalService.open(r,{size:"sm",centered:!0})}fullMDModal(r){this.modalService.open(r,{size:"md",centered:!0})}fullLGModal(r){this.modalService.open(r,{size:"lg",centered:!0})}fullXLModal(r){this.modalService.open(r,{size:"xl",centered:!0})}fullXXLModal(r){this.modalService.open(r,{size:"xxl",centered:!0})}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}successModal(r){this.modalService.open(r,{centered:!0})}loginModal(r){this.modalService.open(r,{centered:!0})}subscribeModal(r){this.modalService.open(r,{size:"lg",centered:!0})}signupModal(r){this.modalService.open(r,{centered:!0})}static{this.\u0275fac=function(s){return new(s||l)(K(Be))}}static{this.\u0275cmp=C({type:l,selectors:[["app-modals"]],standalone:!1,decls:449,vars:1,consts:[["content",""],["centerDataModal",""],["LunchDataModal",""],["StaticDataModal",""],["toggleFirstModal",""],["toggleSecondModal",""],["LunchDemoDataModal",""],["scrollDataModal",""],["MaryDataModal",""],["JenniferDataModal",""],["RoderickDataModal",""],["fullDataModal",""],["exlargeModal",""],["largeDataModal",""],["smallDataModal",""],["fullSmDataModal",""],["fullMdDataModal",""],["fullLgDataModal",""],["fullXlDataModal",""],["fullXxlDataModal",""],["successDataModal",""],["loginDataModal",""],["subscribeDataModal",""],["signupDataModal",""],["title","Modals",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","default-modal",1,"form-label","text-muted"],["type","checkbox","id","default-modal",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted","text-muted"],[1,"live-preview"],["type","button","data-bs-toggle","modal","data-bs-target","#myModal",1,"btn","btn-primary",3,"click"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","vertically-centered",1,"form-label","text-muted"],["type","checkbox","id","vertically-centered",1,"form-check-input","code-switcher",3,"click"],[1,"text-muted"],["type","button","data-bs-toggle","modal","data-bs-target",".bs-example-modal-center",1,"btn","btn-primary",3,"click"],[1,"language-markup"],["for","grid-modal-showcode",1,"form-label","text-muted"],["type","checkbox","id","grid-modal-showcode",1,"form-check-input","code-switcher",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalgrid",1,"btn","btn-primary",3,"click"],["for","static-backdrop",1,"form-label","text-muted"],["type","checkbox","id","static-backdrop",1,"form-check-input","code-switcher",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"btn","btn-primary",3,"click"],["for","toggle-betweeen-modals",1,"form-label","text-muted"],["type","checkbox","id","toggle-betweeen-modals",1,"form-check-input","code-switcher",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#firstmodal",1,"btn","btn-primary",3,"click"],["for","tooltip-popover-modal",1,"form-label","text-muted"],["type","checkbox","id","tooltip-popover-modal",1,"form-check-input","code-switcher",3,"click"],["href","https://getbootstrap.com/docs/5.1/components/tooltips/"],["href","https://getbootstrap.com/docs/5.1/components/popovers/"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalPopovers",1,"btn","btn-primary",3,"click"],["id","exampleModalPopovers","tabindex","-1","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"fs-16"],["href","javascript:void(0);","data-bs-toggle","popover","title","Common Types of Fonts","data-bs-content","They're a good choice for more traditional projects.","data-bs-container","body","data-bs-placement","bottom","data-bs-original-title","Popover Title",1,"popover-test","fw-medium","text-decoration-underline","link-success"],["href","javascript:void(0);","title","Morton Bayer","data-bs-container","#exampleModalPopovers","data-bs-toggle","tooltip","data-bs-original-title","Tooltip title",1,"tooltip-test","text-decoration-underline","fw-medium"],["href","javascript:void(0);","title","Web Developers","data-bs-toggle","tooltip","data-bs-container","#exampleModalPopovers","data-bs-original-title","Tooltip title",1,"tooltip-test","text-decoration-underline"],[1,"modal-footer"],[1,"mx-auto"],["href","javascript:void(0);",1,"btn","btn-link","fw-medium","material-shadow-none"],[1,"ri-arrow-right-line","ms-1","align-middle"],["for","scrollable-modal",1,"form-label","text-muted"],["type","checkbox","id","scrollable-modal",1,"form-check-input","code-switcher",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable",1,"btn","btn-primary",3,"click"],["for","varying-modal-showcode",1,"form-label","text-muted"],["type","checkbox","id","varying-modal-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"hstack","gap-2","flex-wrap"],["type","button","data-bs-toggle","modal","data-bs-target","#varyingcontentModal","data-bs-whatever","Mary",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#varyingcontentModal","data-bs-whatever","Jennifer",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#varyingcontentModal","data-bs-whatever","Roderick",1,"btn","btn-primary",3,"click"],[1,"col-lg-12"],["for","optional-sizes",1,"form-label","text-muted"],["type","checkbox","id","optional-sizes",1,"form-check-input","code-switcher",3,"click"],[1,"hstack","flex-wrap","gap-2"],["type","button","data-bs-toggle","modal","data-bs-target",".exampleModalFullscreen",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target",".bs-example-modal-xl",1,"btn","btn-info",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target",".bs-example-modal-lg",1,"btn","btn-success",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target",".bs-example-modal-sm",1,"btn","btn-danger",3,"click"],["for","fullscreen-modal",1,"form-label","text-muted"],["type","checkbox","id","fullscreen-modal",1,"form-check-input","code-switcher",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#fullscreeexampleModal",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenSm",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenMd",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenLg",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenXl",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenXxl",1,"btn","btn-primary",3,"click"],[1,"row","mt-2"],[1,"justify-content-between","d-flex","align-items-center","mb-3"],[1,"mb-0","pb-1","text-decoration-underline"],[1,"col-xl-4","col-md-6"],[1,"card","text-center","border"],[1,"card-body","p-4","pb-0"],[1,"mb-4"],["type","button","data-bs-toggle","modal","data-bs-target","#success-Payment",1,"btn","btn-primary",3,"click"],[1,"row","justify-content-center","mt-2"],[1,"col-lg-10"],["src","assets/images/modals/success-payment.png","alt","Mac Image",1,"img-fluid"],["type","button","data-bs-toggle","modal","data-bs-target","#loginModals",1,"btn","btn-primary",3,"click"],["src","assets/images/modals/login.png","alt","Mac Image",1,"img-fluid"],["type","button","data-bs-toggle","modal","data-bs-target","#subscribeModals",1,"btn","btn-primary",3,"click"],["src","assets/images/modals/subscribe.png","alt","Mac Image",1,"img-fluid"],["type","button","data-bs-toggle","modal","data-bs-target","#signupModals",1,"btn","btn-primary",3,"click"],["src","assets/images/modals/signup.png","alt","Mac Image",1,"img-fluid"],["role","document"],[1,"modal-title","mt-0"],["type","button","aria-hidden","true",1,"btn-close",3,"click"],["type","button",1,"btn","btn-light",3,"click"],["type","button",1,"btn","btn-primary"],[1,"modal-body","text-center","p-5"],["src","https://cdn.lordicon.com/hrqwmuhr.json","trigger","loop","colors","primary:#121331,secondary:#08a88a",2,"width","120px","height","120px"],[1,"mt-4"],[1,"mb-3"],[1,"text-muted","mb-4"],[1,"hstack","gap-2","justify-content-center"],["type","button","data-bs-dismiss","modal",1,"btn","btn-light",3,"click"],["href","javascript:void(0);",1,"btn","btn-danger"],["id","exampleModalgridLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],["action","javascript:void(0);"],[1,"row","g-3"],["for","firstName",1,"form-label"],["type","text","id","firstName","placeholder","Enter firstname",1,"form-control"],["for","lastName",1,"form-label"],["type","text","id","lastName","placeholder","Enter lastname",1,"form-control"],[1,"form-label"],[1,"form-check","form-check-inline"],["type","radio","name","inlineRadioOptions","id","inlineRadio1","value","option1",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio2","value","option2",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio3","value","option3",1,"form-check-input"],["for","inlineRadio3",1,"form-check-label"],["for","emailInput",1,"form-label"],["type","email","id","emailInput","placeholder","Enter your email",1,"form-control"],["for","passwordInput",1,"form-label"],["type","password","id","passwordInput","value","451326546","placeholder","Enter password",1,"form-control"],[1,"hstack","gap-2","justify-content-end"],["type","submit",1,"btn","btn-primary"],["src","https://cdn.lordicon.com/lupuorrc.json","trigger","loop","colors","primary:#121331,secondary:#08a88a",2,"width","120px","height","120px"],["href","javascript:void(0);","data-bs-dismiss","modal",1,"btn","btn-link","link-success","fw-medium","material-shadow-none",3,"click"],[1,"ri-close-line","me-1","align-middle"],["href","javascript:void(0);",1,"btn","btn-success"],["src","https://cdn.lordicon.com/tdrtiskw.json","trigger","loop","colors","primary:#f7b84b,secondary:#405189",2,"width","130px","height","130px"],[1,"mt-4","pt-4"],["data-bs-target","#secondmodal","data-bs-toggle","modal","data-bs-dismiss","modal",1,"btn","btn-warning",3,"click"],["src","https://cdn.lordicon.com/zpxybbhl.json","trigger","loop","colors","primary:#405189,secondary:#0ab39c",2,"width","150px","height","150px"],[1,"mt-4","pt-3"],["data-bs-target","#firstmodal","data-bs-toggle","modal","data-bs-dismiss","modal",1,"btn","btn-soft-danger",3,"click"],["href","javascript: void(0);","ngbTooltip","Common Types of Fonts","placement","top","data-bs-content","They're a good choice for more traditional projects.","data-bs-container","body","data-bs-placement","bottom","data-bs-original-title","Popover Title",1,"popover-test","fw-medium","text-decoration-underline","link-success"],["href","javascript: void(0);","ngbTooltip","Morton Bayer","placement","top",1,"tooltip-test","text-decoration-underline","fw-medium"],["href","javascript:void(0);",1,"btn","btn-link","fw-medium"],["id","exampleModalScrollableTitle",1,"modal-title"],[1,"fs-15"],[1,"d-flex"],[1,"ri-checkbox-circle-fill","text-success"],[1,"flex-grow-1","ms-2"],[1,"text-muted","mb-0"],[1,"d-flex","mt-2"],[1,"fs-16","my-3"],["type","button",1,"btn","btn-light","material-shadow-none",3,"click"],["id","varyingcontentModalLabel",1,"modal-title"],["for","customer-name",1,"col-form-label"],["type","text","id","customer-name","value","Mary",1,"form-control"],["for","message-text",1,"col-form-label"],["id","message-text","rows","4",1,"form-control"],["type","text","id","customer-name","value","Jennifer",1,"form-control"],["type","text","id","customer-name","value","Roderick",1,"form-control"],["id","exampleModalFullscreenLabel",1,"modal-title"],["id","myExtraLargeModalLabel",1,"modal-title"],["id","myLargeModalLabel",1,"modal-title"],["id","mySmallModalLabel",1,"modal-title"],["id","exampleModalFullscreenSmLabel",1,"modal-title"],["id","exampleModalFullscreenMdLabel",1,"modal-title"],["id","exampleModalFullscreenLgLabel",1,"modal-title"],["id","exampleModalFullscreenXlLabel",1,"modal-title"],["id","exampleModalFullscreenXxlLabel",1,"modal-title"],[1,"text-end"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close","text-end",3,"click"],[1,"mt-2"],["src","https://cdn.lordicon.com/tqywkdcz.json","trigger","hover",2,"width","150px","height","150px"],[1,"mb-3","mt-4"],[1,"text-muted","fs-15","mb-4"],[1,"btn","btn-primary"],[1,"btn","btn-soft-success"],[1,"ri-links-line","align-bottom"],[1,"modal-footer","bg-light","p-3","justify-content-center"],[1,"mb-0","text-muted"],["href","javascript:void(0)",1,"link-secondary","fw-semibold"],[1,"modal-content","border-0","overflow-hidden"],[1,"modal-body","login-modal","p-5"],[1,"text-white","fs-20"],[1,"text-white-50","mb-4"],["href","javascript:void(0);",1,"text-white"],[1,"vstack","gap-2","justify-content-center"],[1,"btn","btn-light"],[1,"ri-google-fill","align-bottom","text-danger"],[1,"btn","btn-info"],[1,"ri-facebook-fill","align-bottom"],[1,"modal-body","p-5"],[1,"mb-2"],["type","email","id","exampleInputEmail1","placeholder","Enter your email/username",1,"form-control"],["type","password","id","exampleInputPassword1","placeholder","Enter your password",1,"form-control"],[1,"mt-1","text-end"],["routerLink","/auth/pass-reset/basic"],["type","submit",1,"btn","btn-primary","w-100"],[1,"row","g-0"],[1,"col-lg-7"],[1,"lh-base"],[1,"text-danger"],[1,"input-group","mb-3"],["type","text","placeholder","Enter your email","aria-label","Example text with button addon","aria-describedby","button-addon1",1,"form-control"],["type","button","id","button-addon1",1,"btn","btn-primary"],[1,"form-check"],["type","checkbox","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],[1,"col-lg-5"],[1,"subscribe-modals-cover","h-100"],["src","assets/images/auth-one-bg.jpg","alt","",1,"h-100","w-100","object-fit-cover",2,"clip-path","polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"],[1,"modal-header","p-3"],[1,"card-title","mb-0"],[1,"alert","alert-success","rounded-0","mb-0"],[1,"mb-0"],[1,"fw-semibold"],["for","fullName",1,"form-label"],["type","text","id","fullName","placeholder","Enter your name",1,"form-control"],["for","exampleInputPassword1",1,"form-label"],[1,"mb-3","form-check"],["type","checkbox","id","checkTerms",1,"form-check-input"],["for","checkTerms",1,"form-check-label"]],template:function(s,a){if(s&1){let d=_();n(0,"app-breadcrumbs",24),t(1,"div",25)(2,"div",26)(3,"div",27)(4,"div",28)(5,"h4",29),e(6,"Default Modal"),i(),t(7,"div",30)(8,"div",31)(9,"label",32),e(10,"Show Code"),i(),t(11,"input",33),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(12,"div",34)(13,"p",35),e(14,"Use "),t(15,"code"),e(16,"modal-dialog"),i(),e(17," class to show default modal."),i(),t(18,"div",36)(19,"div")(20,"button",37),c("click",function(){x(d);let b=y(402);return f(a.openModal(b))}),e(21,"Standard Modal"),i()()(),t(22,"div",38)(23,"pre",39)(24,"code"),e(25,`<!-- Default Modals -->
<button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#myModal">Standard Modal</button>
<div id="myModal" class="modal fade" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
</div>
<div class="modal-body">
<h5 class="fs-15">
Overflowing text to show scroll behavior
</h5>
<p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
<p class="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
<p class="text-muted">It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary ">Save Changes</button>
</div>

</div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div><!-- /.modal -->`),i()()()()()(),t(26,"div",26)(27,"div",27)(28,"div",28)(29,"h4",29),e(30,"Vertically Centered Modal"),i(),t(31,"div",30)(32,"div",31)(33,"label",40),e(34,"Show Code"),i(),t(35,"input",41),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(36,"div",34)(37,"p",42),e(38,"Use "),t(39,"code"),e(40,"modal-dialog-centered"),i(),e(41," class to show vertically center the modal. "),i(),t(42,"div",36)(43,"div")(44,"button",43),c("click",function(){x(d);let b=y(404);return f(a.centerModal(b))}),e(45,"Center Modal"),i()()(),t(46,"div",38)(47,"pre",44)(48,"code"),e(49,`<!-- Vertically Centered -->
<div class="modal-dialog modal-dialog-centered">
...
</div>`),i()()()()()()(),t(50,"div",25)(51,"div",26)(52,"div",27)(53,"div",28)(54,"h4",29),e(55,"Grids in Modals"),i(),t(56,"div",30)(57,"div",31)(58,"label",45),e(59,"Show Code"),i(),t(60,"input",46),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(61,"div",34)(62,"p",42),e(63,"Use "),t(64,"code"),e(65,"container-fluid"),i(),e(66," class within the modal-body to utilize the Bootstrap grid system within a modal by nesting."),i(),t(67,"div",36)(68,"button",47),c("click",function(){x(d);let b=y(406);return f(a.LunchModal(b))}),e(69," Launch Demo Modal "),i()(),t(70,"div",38)(71,"pre",39)(72,"code"),e(73,`<!-- Grids in modals -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalgrid">
Launch Demo Modal
</button>
<div class="modal fade" id="exampleModalgrid" tabindex="-1" aria-labelledby="exampleModalgridLabel" aria-modal="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalgridLabel">Grid Modals</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<form action="javascript:void(0);">
<div class="row g-3">
<div class="col-xxl-6">
  <div>
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="Enter firstname">
  </div>
</div><!--end col-->
<div class="col-xxl-6">
  <div>
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lastName" placeholder="Enter lastname">
  </div>
</div><!--end col-->
<div class="col-lg-12">
  <label for="genderInput" class="form-label">Gender</label>
  <div>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
          <label class="form-check-label" for="inlineRadio1">Male</label>
      </div>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
          <label class="form-check-label" for="inlineRadio2">Female</label>
      </div>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
          <label class="form-check-label" for="inlineRadio3">Others</label>
      </div>
  </div>
</div><!--end col-->
<div class="col-xxl-6">
  <div>
      <label for="emailInput" class="form-label">Email</label>
      <input type="email" class="form-control" id="emailInput" placeholder="Enter your email">
  </div>
</div><!--end col-->
<div class="col-xxl-6">
  <div>
      <label for="passwordInput" class="form-label">Password</label>
      <input type="password" class="form-control" id="passwordInput" value="451326546">
  </div>
</div><!--end col-->
<div class="col-lg-12">
  <div class="hstack gap-2 justify-content-end">
      <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</div><!--end col-->
</div><!--end row-->
</form>
</div>
</div>
</div>
</div>`),i()()()()()(),t(74,"div",26)(75,"div",27)(76,"div",28)(77,"h4",29),e(78,"Static Backdrop Modal"),i(),t(79,"div",30)(80,"div",31)(81,"label",48),e(82,"Show Code"),i(),t(83,"input",49),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(84,"div",34)(85,"p",42),e(86,"Use "),t(87,"code"),e(88,'data-bs-backdrop="static"'),i(),e(89," to modal not to close when clicking outside the modal."),i(),t(90,"div",36)(91,"div")(92,"button",50),c("click",function(){x(d);let b=y(408);return f(a.StaticModal(b))}),e(93," Static Backdrop Modal "),i()()(),t(94,"div",38)(95,"pre",39)(96,"code"),e(97,`<!-- Static Backdrop -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Static Backdrop Modal
</button>
<!-- staticBackdrop Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<div class="modal-body text-center p-5">
<lord-icon
src="https://cdn.lordicon.com/lupuorrc.json"
trigger="loop"
colors="primary:#121331,secondary:#08a88a"
style="width:120px;height:120px">
</lord-icon>

<div class="mt-4">
<h4 class="mb-3">You've made it!</h4>
<p class="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
<div class="hstack gap-2 justify-content-center">
<a href="javascript:void(0);" class="btn btn-link link-success fw-medium material-shadow-none" data-bs-dismiss="modal"><i class="ri-close-line me-1 align-middle"></i> Close</a>
<a href="javascript:void(0);" class="btn btn-success">Completed</a>
</div>
</div>
</div>
</div>
</div>
</div>`),i()()()()()()(),t(98,"div",25)(99,"div",26)(100,"div",27)(101,"div",28)(102,"h4",29),e(103,"Toggle Between Modal"),i(),t(104,"div",30)(105,"div",31)(106,"label",51),e(107,"Show Code"),i(),t(108,"input",52),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(109,"div",34)(110,"p",42),e(111,"Toggle between multiple modals with some clever placement of the "),t(112,"code"),e(113,"data-bs-target"),i(),e(114," and "),t(115,"code"),e(116,"data-bs-toggle"),i(),e(117," attributes. Please note multiple modals cannot be open at the same time. this method simply toggles between two separate modals. "),i(),t(118,"div",36)(119,"div")(120,"button",53),c("click",function(){x(d);let b=y(410);return f(a.toggleModal(b))}),e(121,"Open First Modal"),i()()(),t(122,"div",38)(123,"pre",39)(124,"code"),e(125,`<!-- Toggle Between Modals -->
<button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#firstmodal">Open First Modal</button>
<!-- First modal dialog -->
<div class="modal fade" id="firstmodal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-body text-center p-5">
<lord-icon
src="https://cdn.lordicon.com/tdrtiskw.json"
trigger="loop"
colors="primary:#f7b84b,secondary:#405189"
style="width:130px;height:130px">
</lord-icon>
<div class="mt-4 pt-4">
<h4>Uh oh, something went wrong!</h4>
<p class="text-muted"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
<!-- Toogle to second dialog -->
<button class="btn btn-warning" data-bs-target="#secondmodal" data-bs-toggle="modal" data-bs-dismiss="modal">
Continue
</button>
</div>
</div>
</div>
</div>
</div>
<!-- Second modal dialog -->
<div class="modal fade" id="secondmodal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-body text-center p-5">
<lord-icon
src="https://cdn.lordicon.com/zpxybbhl.json"
trigger="loop"
colors="primary:#405189,secondary:#0ab39c"
style="width:150px;height:150px">
</lord-icon>
<div class="mt-4 pt-3">
<h4 class="mb-3">Follow-Up Email</h4>
<p class="text-muted mb-4">Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email.</p>
<div class="hstack gap-2 justify-content-center">
<!-- Toogle to first dialog, \`data-bs-dismiss\` attribute can be omitted - clicking on link will close dialog anyway -->
<button class="btn btn-soft-danger" data-bs-target="#firstmodal" data-bs-toggle="modal" data-bs-dismiss="modal">Back to
  First
</button>
<button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
</div>
</div>`),i()()()()()(),t(126,"div",26)(127,"div",27)(128,"div",28)(129,"h4",29),e(130,"Tooltips and Popovers "),i(),t(131,"div",30)(132,"div",31)(133,"label",54),e(134,"Show Code"),i(),t(135,"input",55),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(136,"div",34)(137,"p",42)(138,"a",56),e(139,"Tooltips"),i(),e(140," and "),t(141,"a",57),e(142,"Popovers"),i(),e(143," can be placed within modals as needed.When modals are closed, any tooltips and popovers within are also automatically dismissed. "),i(),t(144,"div",36)(145,"button",58),c("click",function(){x(d);let b=y(414);return f(a.LunchDemoModal(b))}),e(146," Launch Demo Modal "),i(),t(147,"div",59)(148,"div",60)(149,"div",61)(150,"div",62)(151,"h5",63),e(152,"Tooltips and Popovers Modal"),i(),n(153,"button",64),i(),t(154,"div",65)(155,"h5",66),e(156,"Popover in a Modal"),i(),t(157,"p",42),e(158,"You only need to know a little to make a big "),t(159,"a",67),e(160,"Popover on Click "),i(),e(161," you do every day. So let's get started. First, some common types of fonts and what you need to know about them triggers a popover on click."),i(),t(162,"h5",66),e(163,"Tooltips in a Modal"),i(),t(164,"p",42),e(165,"Opposites attract, and that\u2019s a fact. It\u2019s in our "),t(166,"a",68),e(167,"graphic design"),i(),e(168," to be interested in the unusual, and that\u2019s why using "),t(169,"a",69),e(170,"design"),i(),e(171," contrasting colors in Graphic Design is a must."),i()(),t(172,"div",70)(173,"div",71)(174,"a",72),e(175,"Read More "),n(176,"i",73),i()()()()()()(),t(177,"div",38)(178,"pre",39)(179,"code"),e(180,`<!-- Tooltips and Popovers -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPopovers">
Launch demo modal
</button>

<!-- tooltips and popovers modal -->
<div class="modal fade" id="exampleModalPopovers" tabindex="-1" aria-labelledby="exampleModalPopoversLabel" aria-modal="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalPopoversLabel">Modal title</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<h5>Popover in a modal</h5>
<p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="" data-bs-toggle="popover" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-container="body" data-bs-original-title="Popover Title">button</a> triggers a popover on click.
</p>
<hr>
<h5>Tooltips in a modal</h5>
<p><a href="#" class="tooltip-test text-decoration-underline" title="" data-bs-container="#exampleModalPopovers" data-bs-toggle="tooltip" data-bs-original-title="Tooltip title">This
link</a> and <a href="#" class="tooltip-test text-decoration-underline" title="" data-bs-toggle="tooltip" data-bs-container="#exampleModalPopovers" data-bs-original-title="Tooltip title">that link</a> have tooltips on
hover.</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Save changes</button>
</div>
</div>
</div>
</div>`),i()()()()()()(),t(181,"div",25)(182,"div",26)(183,"div",27)(184,"div",28)(185,"h4",29),e(186,"Scrollable Modal"),i(),t(187,"div",30)(188,"div",31)(189,"label",74),e(190,"Show Code"),i(),t(191,"input",75),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(192,"div",34)(193,"p",42),e(194,"Use"),t(195,"code"),e(196," modal-dialog-scrollable"),i(),e(197," class to create a modal scrollable."),i(),t(198,"div",36)(199,"div")(200,"button",76),c("click",function(){x(d);let b=y(416);return f(a.scrollModal(b))}),e(201,"Scrollable Modal"),i()()(),t(202,"div",38)(203,"pre",44)(204,"code"),e(205,`<!-- Scrollable Modal -->
<div class="modal-dialog modal-dialog-scrollable">
...
</div>`),i()()()()()(),t(206,"div",26)(207,"div",27)(208,"div",28)(209,"h4",29),e(210,"Varying Modal Content"),i(),t(211,"div",30)(212,"div",31)(213,"label",77),e(214,"Show Code"),i(),t(215,"input",78),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(216,"div",34)(217,"p",42),e(218,"Use "),t(219,"code"),e(220,"event.relatedTarget"),i(),e(221," and HTML "),t(222,"code"),e(223,"data-bs-*"),i(),e(224," attributes to vary the contents of the modal depending on which button was clicked."),i(),t(225,"div",36)(226,"div")(227,"div",79)(228,"button",80),c("click",function(){x(d);let b=y(418);return f(a.MaryModal(b))}),e(229,"Open Modal for Mary"),i(),t(230,"button",81),c("click",function(){x(d);let b=y(420);return f(a.MaryModal(b))}),e(231,"Open Modal for Jennifer"),i(),t(232,"button",82),c("click",function(){x(d);let b=y(422);return f(a.MaryModal(b))}),e(233,"Open Modal for Roderick"),i()()()(),t(234,"div",38)(235,"pre",39)(236,"code"),e(237,`<!-- Varying Modal Content -->
<div class="hstack gap-2 flex-wrap">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#varyingcontentModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#varyingcontentModal" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#varyingcontentModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>
</div>`),i(),e(238,`

`),t(239,"code"),e(240,`<!-- Varying modal content -->
<div class="modal fade" id="varyingcontentModal" tabindex="-1" aria-labelledby="varyingcontentModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="varyingcontentModalLabel">New message</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<form>
<div class="mb-3">
<label for="recipient-name" class="col-form-label">Recipient:</label>
<input type="text" class="form-control" id="recipient-name">
</div>
<div class="mb-3">
<label for="message-text" class="col-form-label">Message:</label>
<textarea class="form-control" id="message-text"></textarea>
</div>
</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Send message</button>
</div>
</div>
</div>
</div>`),i()()()()()()(),t(241,"div",25)(242,"div",83)(243,"div",27)(244,"div",28)(245,"h4",29),e(246,"Optional Sizes"),i(),t(247,"div",30)(248,"div",31)(249,"label",84),e(250,"Show Code"),i(),t(251,"input",85),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(252,"div",34)(253,"p",42),e(254,"Use "),t(255,"code"),e(256,"modal-fullscreen"),i(),e(257,", "),t(258,"code"),e(259,"modal-xl"),i(),e(260,", "),t(261,"code"),e(262,"modal-lg"),i(),e(263,", or "),t(264,"code"),e(265,"modal-sm"),i(),e(266," class to modal-dialog class to set different size modal respectively."),i(),t(267,"div",36)(268,"div")(269,"div",86)(270,"button",87),c("click",function(){x(d);let b=y(424);return f(a.fullModal(b))}),e(271,"Fullscreen Modal"),i(),t(272,"button",88),c("click",function(){x(d);let b=y(426);return f(a.extraLarge(b))}),e(273,"Extra large Modal"),i(),t(274,"button",89),c("click",function(){x(d);let b=y(428);return f(a.largeModal(b))}),e(275,"Large Modal"),i(),t(276,"button",90),c("click",function(){x(d);let b=y(430);return f(a.smallModal(b))}),e(277,"Small Modal"),i()()()(),t(278,"div",38)(279,"pre",44)(280,"code"),e(281,`<!-- Optional Modal Sizes -->
<div class="modal-dialog modal-fullscreen">...</div>`),i(),e(282,`

`),t(283,"code"),e(284,'<div class="modal-dialog modal-xl">...</div>'),i(),e(285,`

`),t(286,"code"),e(287,'<div class="modal-dialog modal-lg">...</div>'),i(),e(288,`

`),t(289,"code"),e(290,'<div class="modal-dialog modal-sm">...</div>'),i()()()()()()(),t(291,"div",25)(292,"div",83)(293,"div",27)(294,"div",28)(295,"h4",29),e(296,"Fullscreen Responsive Modals"),i(),t(297,"div",30)(298,"div",31)(299,"label",91),e(300,"Show Code"),i(),t(301,"input",92),c("click",function(b){return a.ShowCode(b)}),i()()()(),t(302,"div",34)(303,"p",35),e(304,"Below mentioned modifier classes are used to show fullscreen modal as per minimum screen requirement."),i(),t(305,"div",36)(306,"div")(307,"div",79)(308,"button",93),c("click",function(){x(d);let b=y(424);return f(a.fullModal(b))}),e(309," Fullscreen modal "),i(),t(310,"button",94),c("click",function(){x(d);let b=y(432);return f(a.fullSMModal(b))}),e(311,"Full Screen Below sm"),i(),t(312,"button",95),c("click",function(){x(d);let b=y(434);return f(a.fullMDModal(b))}),e(313,"Full Screen Below md"),i(),t(314,"button",96),c("click",function(){x(d);let b=y(436);return f(a.fullLGModal(b))}),e(315,"Full Screen Below lg"),i(),t(316,"button",97),c("click",function(){x(d);let b=y(438);return f(a.fullXLModal(b))}),e(317,"Full Screen Below xl"),i(),t(318,"button",98),c("click",function(){x(d);let b=y(440);return f(a.fullXXLModal(b))}),e(319,"Full Screen Below xxl"),i()()()(),t(320,"div",38)(321,"pre",44)(322,"code"),e(323,`<!-- Fullscreen Modals -->
<div class="modal-dialog modal-fullscreen">...</div>`),i(),e(324,`

`),t(325,"code"),e(326,'<div class="modal-dialog modal-fullscreen-sm-down">...</div>'),i(),e(327,`

`),t(328,"code"),e(329,'<div class="modal-dialog modal-fullscreen-md-down">...</div>'),i(),e(330,`

`),t(331,"code"),e(332,'<div class="modal-dialog modal-fullscreen-lg-down">...</div>'),i(),e(333,`

`),t(334,"code"),e(335,'<div class="modal-dialog modal-fullscreen-xl-down">...</div>'),i(),e(336,`

`),t(337,"code"),e(338,'<div class="modal-dialog modal-fullscreen-xxl-down">...</div>'),i()()()()()()(),t(339,"div",99)(340,"div",83)(341,"div",100)(342,"h5",101),e(343,"Custom Modals Example"),i()(),t(344,"div",25)(345,"div",102)(346,"div",103)(347,"div",104)(348,"h5",105),e(349,"Success Message"),i(),t(350,"p",42),e(351,"Here is an example of a sweet alert with a success message."),i(),t(352,"div")(353,"button",106),c("click",function(){x(d);let b=y(442);return f(a.successModal(b))}),e(354,"Click me"),i()(),t(355,"div",107)(356,"div",108)(357,"div"),n(358,"img",109),i()()()()()(),t(359,"div",102)(360,"div",103)(361,"div",104)(362,"h5",105),e(363,"Login Modals"),i(),t(364,"p",42),e(365,"Here is an example of a sweet alert with a error message."),i(),t(366,"div")(367,"button",110),c("click",function(){x(d);let b=y(444);return f(a.loginModal(b))}),e(368,"Click me"),i()(),t(369,"div",107)(370,"div",108)(371,"div"),n(372,"img",111),i()()()()()(),t(373,"div",102)(374,"div",103)(375,"div",104)(376,"h5",105),e(377,"Subscribe Modals"),i(),t(378,"p",42),e(379,"Here is an example of a sweet alert with a warning message."),i(),t(380,"div")(381,"button",112),c("click",function(){x(d);let b=y(446);return f(a.subscribeModal(b))}),e(382,"Click me"),i()(),t(383,"div",107)(384,"div",108)(385,"div"),n(386,"img",113),i()()()()()(),t(387,"div",102)(388,"div",103)(389,"div",104)(390,"h5",105),e(391,"Sign Up Modals"),i(),t(392,"p",42),e(393,"Here is an example of a sweet alert with a community registration field. "),i(),t(394,"div")(395,"button",114),c("click",function(){x(d);let b=y(448);return f(a.signupModal(b))}),e(396,"Click me"),i()(),t(397,"div",107)(398,"div",108)(399,"div"),n(400,"img",115),i()()()()()()()()(),h(401,Dl,18,0,"ng-template",116,0,q)(403,jl,12,0,"ng-template",null,1,q)(405,Ll,48,0,"ng-template",null,2,q)(407,Nl,13,0,"ng-template",null,3,q)(409,Bl,9,0,"ng-template",null,4,q)(411,ql,12,0,"ng-template",null,5,q)(413,Pl,25,0,"ng-template",null,6,q)(415,Rl,74,0,"ng-template",116,7,q)(417,Vl,19,0,"ng-template",116,8,q)(419,Wl,19,0,"ng-template",116,9,q)(421,Ol,19,0,"ng-template",116,10,q)(423,Fl,76,0,"ng-template",null,11,q)(425,Ul,76,0,"ng-template",null,12,q)(427,zl,75,0,"ng-template",null,13,q)(429,Hl,31,0,"ng-template",null,14,q)(431,Gl,32,0,"ng-template",null,15,q)(433,Yl,32,0,"ng-template",null,16,q)(435,$l,32,0,"ng-template",null,17,q)(437,Ql,32,0,"ng-template",null,18,q)(439,Jl,32,0,"ng-template",null,19,q)(441,Xl,21,0,"ng-template",null,20,q)(443,Kl,28,0,"ng-template",null,21,q)(445,Zl,22,0,"ng-template",null,22,q)(447,eo,35,0,"ng-template",null,23,q)}s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[kt,D,De,Ie,Me,re],encapsulation:2})}}return l})();var Ni=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Placeholders",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-placeholder"]],standalone:!1,decls:187,vars:1,consts:[["title","Placeholders",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","baseexample-showcode",1,"form-label","text-muted"],["type","checkbox","id","baseexample-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"row","justify-content-center"],[1,"col-xl-7"],[1,"row","justify-content-between"],[1,"col-lg-5","col-sm-6"],["src","assets/images/small/img-1.jpg","alt","card img",1,"card-img-top"],[1,"card-title"],[1,"card-text"],["href","javascript: void(0);",1,"btn","btn-primary"],["aria-hidden","true",1,"card"],["src","assets/images/small/img-2.jpg","alt","card dummy img",1,"card-img-top"],[1,"card-title","placeholder-glow"],[1,"placeholder","col-6"],[1,"card-text","placeholder-glow"],[1,"placeholder","col-7"],[1,"placeholder","col-4"],["href","javascript: void(0);","tabindex","-1",1,"btn","btn-primary","disabled","placeholder","col-6"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],[1,"col-xxl-6"],["for","width-showcode",1,"form-label","text-muted"],["type","checkbox","id","width-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"placeholder","w-50"],[1,"placeholder","w-75"],[1,"placeholder","w-25"],[1,"placeholder","w-100"],[1,"language-markup"],["for","sizing-showcode",1,"form-label","text-muted"],["type","checkbox","id","sizing-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"row","gap-0"],[1,"col-12"],[1,"placeholder","placeholder-lg","w-100"],[1,"placeholder","placeholder-sm","w-100"],[1,"placeholder","placeholder-xs","w-100"],["for","color-showcode",1,"form-label","text-muted"],["type","checkbox","id","color-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"row","g-2"],[1,"placeholder","bg-primary","w-100"],[1,"placeholder","bg-secondary","w-100"],[1,"placeholder","bg-success","w-100"],[1,"placeholder","bg-danger","w-100"],[1,"placeholder","bg-warning","w-100"],[1,"placeholder","bg-info","w-100"],[1,"placeholder","bg-light","w-100"],[1,"placeholder","bg-body","w-100"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Default Placeholder"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"In the example below, we take a typical card component and recreate it with placeholders applied to create a \u201Cloading card\u201D."),i(),t(15,"div",12)(16,"div",13)(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",3),n(21,"img",17),t(22,"div",10)(23,"h5",18),e(24,"Card title"),i(),t(25,"p",19),e(26,"Some quick example text to build on the card title and make up the bulk of the card's content."),i(),t(27,"a",20),e(28,"Go somewhere"),i()()()(),t(29,"div",16)(30,"div",21),n(31,"img",22),t(32,"div",10)(33,"h5",23),n(34,"span",24),i(),t(35,"p",25),n(36,"span",26)(37,"span",27)(38,"span",27)(39,"span",24),i(),n(40,"a",28),i()()()()()()(),t(41,"div",29)(42,"pre",30)(43,"code"),e(44,`<!-- Base Examples -->
<div class="card">
<img src="assets/images/small/img-1.jpg" class="card-img-top" alt="card img">

<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`),i(),e(45,`

`),t(46,"code"),e(47,`<div class="card" aria-hidden="true">
<img src="assets/images/small/img-2.jpg" class="card-img-top" alt="card dummy img">
<div class="card-body">
<h5 class="card-title placeholder-glow">
<span class="placeholder col-6"></span>
</h5>
<p class="card-text placeholder-glow">
<span class="placeholder col-7"></span>
<span class="placeholder col-4"></span>
<span class="placeholder col-4"></span>
<span class="placeholder col-6"></span>
</p>
<a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
</div>
</div>`),i()()()()()()(),t(48,"div",1)(49,"div",31)(50,"div",3)(51,"div",4)(52,"h4",5),e(53,"Width"),i(),t(54,"div",6)(55,"div",7)(56,"label",32),e(57,"Show Code"),i(),t(58,"input",33),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(59,"div",10)(60,"p",11),e(61,"Use "),t(62,"code"),e(63,"w-25,w-50,w-75"),i(),e(64," or "),t(65,"code"),e(66,"w-100"),i(),e(67," class to placeholder class to set different widths to the placeholder."),i(),t(68,"div",12),n(69,"span",34)(70,"span",35)(71,"span",36)(72,"span",37),i(),t(73,"div",29)(74,"pre",38)(75,"code"),e(76,`<!-- Width Sizing-->
<div class="live-preview">
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
</div>`),i()()()()()(),t(77,"div",31)(78,"div",3)(79,"div",4)(80,"h4",5),e(81,"Sizing"),i(),t(82,"div",6)(83,"div",7)(84,"label",39),e(85,"Show Code"),i(),t(86,"input",40),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(87,"div",10)(88,"p",11),e(89,"Use "),t(90,"code"),e(91,"placeholder-lg"),i(),e(92,", "),t(93,"code"),e(94,"placeholder-sm"),i(),e(95,", or "),t(96,"code"),e(97,"placeholder-xs"),i(),e(98," class to placeholder class to set different size placeholder."),i(),t(99,"div",12)(100,"div",41)(101,"div",42),n(102,"span",43),i(),t(103,"div",42),n(104,"span",37),i(),t(105,"div",42),n(106,"span",44),i(),t(107,"div",42),n(108,"span",45),i()()(),t(109,"div",29)(110,"pre",38)(111,"code"),e(112,`<!-- Sizing -->
<span class="placeholder col-12 placeholder-lg"></span>`),i(),e(113,`

`),t(114,"code"),e(115,'<span class="placeholder col-12"></span>'),i(),e(116,`

`),t(117,"code"),e(118,'<span class="placeholder col-12 placeholder-sm"></span>'),i(),e(119,`

`),t(120,"code"),e(121,'<span class="placeholder col-12 placeholder-xs"></span>'),i()()()()()()(),t(122,"div",1)(123,"div",2)(124,"div",3)(125,"div",4)(126,"h4",5),e(127,"Color"),i(),t(128,"div",6)(129,"div",7)(130,"label",46),e(131,"Show Code"),i(),t(132,"input",47),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(133,"div",10)(134,"p",11),e(135,"Use "),t(136,"code"),e(137,"bg-"),i(),e(138," class with the below-mentioned color variation to set a custom color."),i(),t(139,"div",12)(140,"div",48)(141,"div",42),n(142,"span",37),i(),t(143,"div",42),n(144,"span",49),i(),t(145,"div",42),n(146,"span",50),i(),t(147,"div",42),n(148,"span",51),i(),t(149,"div",42),n(150,"span",52),i(),t(151,"div",42),n(152,"span",53),i(),t(153,"div",42),n(154,"span",54),i(),t(155,"div",42),n(156,"span",55),i(),t(157,"div",42),n(158,"span",56),i()()(),t(159,"div",29)(160,"pre",30)(161,"code"),e(162,`<!-- Color -->
<span class="placeholder col-12 mb-3"></span>`),i(),e(163,`

`),t(164,"code"),e(165,'<span class="placeholder col-12 mb-3 bg-primary"></span>'),i(),e(166,`

`),t(167,"code"),e(168,'<span class="placeholder col-12 mb-3 bg-secondary"></span>'),i(),e(169,`

`),t(170,"code"),e(171,'<span class="placeholder col-12 mb-3 bg-success"></span>'),i(),e(172,`

`),t(173,"code"),e(174,'<span class="placeholder col-12 mb-3 bg-danger"></span>'),i(),e(175,`

`),t(176,"code"),e(177,'<span class="placeholder col-12 mb-3 bg-warning"></span>'),i(),e(178,`

`),t(179,"code"),e(180,'<span class="placeholder col-12 mb-3 bg-info"></span>'),i(),e(181,`

`),t(182,"code"),e(183,'<span class="placeholder col-12 mb-3 bg-light"></span>'),i(),e(184,`

`),t(185,"code"),e(186,'<span class="placeholder col-12 mb-3 bg-body"></span>'),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var Bi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Progress",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-progress"]],standalone:!1,decls:507,vars:29,consts:[["title","Progress",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","default",1,"form-label","text-muted"],["type","checkbox","id","default",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"mb-4"],[3,"value"],[1,""],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","background-show-code",1,"form-label","text-muted"],["type","checkbox","id","background-show-code",1,"form-check-input","code-switcher",3,"click"],["type","primary",3,"value"],["type","success",3,"value"],["type","info",3,"value"],["type","warning",3,"value"],["type","danger",3,"value"],["for","labelprogress-showcode",1,"form-label","text-muted"],["type","checkbox","id","labelprogress-showcode",1,"form-check-input","code-switcher",3,"click"],["textType","white",3,"value","showValue"],[1,"language-markup"],["for","multibarprogress-showcode",1,"form-label","text-muted"],["type","checkbox","id","multibarprogress-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"progress"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","15%"],["role","progressbar","aria-valuenow","30","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","30%"],["role","progressbar","aria-valuenow","20","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","20%"],["for","heightprogress-showcode",1,"form-label","text-muted"],["type","checkbox","id","heightprogress-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"fs-13"],[1,"progress-sm",3,"value"],["type","success",1,"progress-md",3,"value"],["type","warning",1,"progress-lg",3,"value"],["type","danger",1,"progress-xl",3,"value"],["for","stripesprogress-showcode",1,"form-label","text-muted"],["type","checkbox","id","stripesprogress-showcode",1,"form-check-input","code-switcher",3,"click"],[3,"value","striped"],["type","success",3,"value","striped"],["for","animationstripesprogress-showcode",1,"form-label","text-muted"],["type","checkbox","id","animationstripesprogress-showcode",1,"form-check-input","code-switcher",3,"click"],[3,"value","striped","animated"],["for","gradientprogress-showcode",1,"form-label","text-muted"],["type","checkbox","id","gradientprogress-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"progress","mb-4"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-primary","bg-gradient",2,"width","15%"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success","bg-gradient",2,"width","25%"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info","bg-gradient",2,"width","50%"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning","bg-gradient",2,"width","75%"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger","bg-gradient",2,"width","100%"],["for","animatedprogress-showcode",1,"form-label","text-muted"],["type","checkbox","id","animatedprogress-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"animated-progess","mb-4"],[1,"animated-progess"],["for","customprogress-showcode",1,"form-label","text-muted"],["type","checkbox","id","customprogress-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"progress","animated-progess","custom-progress","mb-4"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-primary",2,"width","15%"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","25%"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","50%"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","75%"],[1,"progress","animated-progess","custom-progress"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","100%"],["for","customprogresslabel-showcode",1,"form-label","text-muted"],["type","checkbox","id","customprogresslabel-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","align-items-center","pb-2","mt-4"],[1,"flex-shrink-0","me-3"],[1,"avatar-xs"],[1,"avatar-title","bg-light","rounded-circle","text-muted","fs-16"],[1,"mdi","mdi-facebook"],[1,"flex-grow-1"],[1,"progress","animated-progess","custom-progress","progress-label"],[1,"label"],[1,"d-flex","align-items-center","py-2"],[1,"mdi","mdi-twitter"],[1,"mdi","mdi-github"],["for","bsprogrescontent-showcode",1,"form-label","text-muted"],["type","checkbox","id","bsprogrescontent-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"text-muted","pb-2"],[1,"card","bg-light","overflow-hidden","shadow-none"],[1,"d-flex"],[1,"mb-0"],[1,"text-secondary"],[1,"progress","bg-secondary-subtle","rounded-0"],["role","progressbar","aria-valuenow","30","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-secondary",2,"width","30%"],[1,"text-success"],[1,"progress","bg-success-subtle","rounded-0"],["role","progressbar","aria-valuenow","60","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","60%"],[1,"text-danger"],[1,"progress","bg-danger-subtle","rounded-0"],["role","progressbar","aria-valuenow","82","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","82%"],["for","bsprogressexample-showcode",1,"form-label","text-muted"],["type","checkbox","id","bsprogressexample-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"position-relative","m-4"],[1,"progress",2,"height","1px"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","50%"],["type","button",1,"position-absolute","top-0","start-0","translate-middle","btn","btn-sm","btn-primary","rounded-pill",2,"width","2rem","height","2rem"],["type","button",1,"position-absolute","top-0","start-50","translate-middle","btn","btn-sm","btn-primary","rounded-pill",2,"width","2rem","height","2rem"],["type","button",1,"position-absolute","top-0","start-100","translate-middle","btn","btn-sm","btn-light","rounded-pill",2,"width","2rem","height","2rem"],["for","stepprogressexample-showcode",1,"form-label","text-muted"],["type","checkbox","id","stepprogressexample-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"progress","progress-step-arrow","progress-info"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","100%"],["role","progressbar","aria-valuenow","30","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","100%"],["role","progressbar","aria-valuenow","20","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-light","text-body",2,"width","100%"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Default Progress"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"Use "),t(15,"code"),e(16,"progress"),i(),e(17," class to show default progress."),i(),t(18,"div",12)(19,"div",13),n(20,"ngb-progressbar",14),i(),t(21,"div",13),n(22,"ngb-progressbar",14),i(),t(23,"div",13),n(24,"ngb-progressbar",14),i(),t(25,"div",13),n(26,"ngb-progressbar",14),i(),t(27,"div",15),n(28,"ngb-progressbar",14),i()(),t(29,"div",16)(30,"pre",17)(31,"code"),e(32,`<!-- Base Examples -->
<div class="progress mb-4">
<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(33,`

`),t(34,"code"),e(35,`<div class="progress mb-4">
<div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(36,`

`),t(37,"code"),e(38,`<div class="progress mb-4">
<div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(39,`

`),t(40,"code"),e(41,`<div class="progress mb-4">
<div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(42,`

`),t(43,"code"),e(44,`<div class="progress">
<div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i()()()()()(),t(45,"div",2)(46,"div",3)(47,"div",4)(48,"h4",5),e(49,"Progress with background color"),i(),t(50,"div",6)(51,"div",7)(52,"label",18),e(53,"Show Code"),i(),t(54,"input",19),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(55,"div",10)(56,"p",11),e(57,"Use "),t(58,"code"),e(59,"bg-"),i(),e(60," class to progress bar class with the below-mentioned color variation to set the background color progress bar."),i(),t(61,"div",12)(62,"div",13),n(63,"ngb-progressbar",20),i(),t(64,"div",13),n(65,"ngb-progressbar",21),i(),t(66,"div",13),n(67,"ngb-progressbar",22),i(),t(68,"div",13),n(69,"ngb-progressbar",23),i(),t(70,"div",15),n(71,"ngb-progressbar",24),i()(),t(72,"div",16)(73,"pre",17)(74,"code"),e(75,`<!-- Backgrounds -->
<div class="progress mb-4">
<div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(76,`

`),t(77,"code"),e(78,`<div class="progress mb-4">
<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(79,`

`),t(80,"code"),e(81,`<div class="progress mb-4">
<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(82,`

`),t(83,"code"),e(84,`<div class="progress mb-4">
<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(85,`

`),t(86,"code"),e(87,`<div class="progress">
<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i()()()()()()(),t(88,"div",1)(89,"div",2)(90,"div",3)(91,"div",4)(92,"h4",5),e(93,"Progress with Label"),i(),t(94,"div",6)(95,"div",7)(96,"label",25),e(97,"Show Code"),i(),t(98,"input",26),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(99,"div",10)(100,"p",11),e(101,"Add labels to your progress bars by placing text within the progress-bar."),i(),t(102,"div",12),n(103,"ngb-progressbar",27),i(),t(104,"div",16)(105,"pre",28)(106,"code"),e(107,`<!-- Labels Example -->
<div class="progress">
<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>`),i()()()()()(),t(108,"div",2)(109,"div",3)(110,"div",4)(111,"h4",5),e(112,"Multiple Bars"),i(),t(113,"div",6)(114,"div",7)(115,"label",29),e(116,"Show Code"),i(),t(117,"input",30),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(118,"div",10)(119,"p",11),e(120,"Use "),t(121,"code"),e(122,"bg-"),i(),e(123," class to progress bar class with the below-mentioned color to change the appearance of individual progress bars."),i(),t(124,"div",12)(125,"div",31),n(126,"div",32)(127,"div",33)(128,"div",34),i()(),t(129,"div",16)(130,"pre",28)(131,"code"),e(132,`<!-- Multiple Bars -->
<div class="progress">
<div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i()()()()()()(),t(133,"div",1)(134,"div",2)(135,"div",3)(136,"div",4)(137,"h4",5),e(138,"Height"),i(),t(139,"div",6)(140,"div",7)(141,"label",35),e(142,"Show Code"),i(),t(143,"input",36),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(144,"div",10)(145,"p",11),e(146,"Use "),t(147,"code"),e(148,"progress-sm"),i(),e(149,", "),t(150,"code"),e(151,"progress-lg"),i(),e(152,", or "),t(153,"code"),e(154,"progress-xl"),i(),e(155," class to set the different heights of progress."),i(),t(156,"div",12)(157,"div",13)(158,"h5",37),e(159,"Small Progress"),i(),n(160,"ngb-progressbar",38),i(),t(161,"div",13)(162,"h5",37),e(163,"Default Progress "),i(),n(164,"ngb-progressbar",39),i(),t(165,"div",13)(166,"h5",37),e(167,"Large Progress"),i(),t(168,"div",15),n(169,"ngb-progressbar",40),i()(),t(170,"div")(171,"h5",37),e(172,"Extra Large Progress"),i(),t(173,"div",15),n(174,"ngb-progressbar",41),i()()(),t(175,"div",16)(176,"pre",17)(177,"code"),e(178,`<!-- Prgress sm -->
<div class="progress progress-sm">
<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(179,`

`),t(180,"code"),e(181,`<!-- Prgress Default -->
<div class="progress">
<div class="progress-bar bg-success" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(182,`

`),t(183,"code"),e(184,`<!-- Prgress lg -->
<div class="progress progress-lg">
<div class="progress-bar bg-warning" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(185,`

`),t(186,"code"),e(187,`<!-- Prgress xl -->
<div class="progress progress-xl">
<div class="progress-bar bg-danger" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i()()()()()(),t(188,"div",2)(189,"div",3)(190,"div",4)(191,"h4",5),e(192,"Striped Progress"),i(),t(193,"div",6)(194,"div",7)(195,"label",42),e(196,"Show Code"),i(),t(197,"input",43),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(198,"div",10)(199,"p",11),e(200,"Use "),t(201,"code"),e(202,"progress-bar-striped"),i(),e(203," class to add strip to the progress."),i(),t(204,"div",12)(205,"div",13),n(206,"ngb-progressbar",44),i(),t(207,"div",15),n(208,"ngb-progressbar",45),i()(),t(209,"div",16)(210,"pre",28)(211,"code"),e(212,`<!-- Striped Prgress -->
<div class="progress">
<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i(),e(213,`

`),t(214,"code"),e(215,`<div class="progress">
<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i()()()()(),t(216,"div",3)(217,"div",4)(218,"h4",5),e(219,"Animated Striped Progress"),i(),t(220,"div",6)(221,"div",7)(222,"label",46),e(223,"Show Code"),i(),t(224,"input",47),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(225,"div",10)(226,"p",11),e(227,"Use "),t(228,"code"),e(229,"progress-bar-striped progress-bar-animated"),i(),e(230," class to add strip with animation to the progress."),i(),t(231,"div",12),n(232,"ngb-progressbar",48),i(),t(233,"div",16)(234,"pre",28)(235,"code"),e(236,`<div class="progress">
<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>`),i()()()()()()(),t(237,"div",1)(238,"div",2)(239,"div",3)(240,"div",4)(241,"h4",5),e(242,"Gradient Progress"),i(),t(243,"div",6)(244,"div",7)(245,"label",49),e(246,"Show Code"),i(),t(247,"input",50),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(248,"div",10)(249,"p",11),e(250,"Use "),t(251,"code"),e(252,"bg-gradient"),i(),e(253," class to show gradient progress bar."),i(),t(254,"div",12)(255,"div",51),n(256,"div",52),i(),t(257,"div",51),n(258,"div",53),i(),t(259,"div",51),n(260,"div",54),i(),t(261,"div",51),n(262,"div",55),i(),t(263,"div",31),n(264,"div",56),i()(),t(265,"div",16)(266,"pre",28)(267,"code"),e(268,`<div class="progress">
<div class="progress-bar bg-primary bg-gradient" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
<div class="progress-bar bg-success bg-gradient" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
<div class="progress-bar bg-info bg-gradient" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
<div class="progress-bar bg-warning bg-gradient" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
<div class="progress-bar bg-danger bg-gradient" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i()()()()()(),t(269,"div",2)(270,"div",3)(271,"div",4)(272,"h4",5),e(273,"Animated Progress"),i(),t(274,"div",6)(275,"div",7)(276,"label",57),e(277,"Show Code"),i(),t(278,"input",58),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(279,"div",10)(280,"p",11),e(281,"Use "),t(282,"code"),e(283,"animated-progess"),i(),e(284," class to show progress with animation."),i(),t(285,"div",12)(286,"div",59),n(287,"ngb-progressbar",14),i(),t(288,"div",59),n(289,"ngb-progressbar",21),i(),t(290,"div",59),n(291,"ngb-progressbar",22),i(),t(292,"div",59),n(293,"ngb-progressbar",23),i(),t(294,"div",60),n(295,"ngb-progressbar",24),i()(),t(296,"div",16)(297,"pre",28)(298,"code"),e(299,`<div class="progress animated-progess">
<div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress animated-progess">
<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress animated-progess">
<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress animated-progess">
<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress animated-progess">
<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i()()()()()()(),t(300,"div",1)(301,"div",2)(302,"div",3)(303,"div",4)(304,"h4",5),e(305,"Custom Progress"),i(),t(306,"div",6)(307,"div",7)(308,"label",61),e(309,"Show Code"),i(),t(310,"input",62),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(311,"div",10)(312,"p",11),e(313,"Use "),t(314,"code"),e(315,"animated-progess custom-progess "),i(),e(316," class to show custom progress with animation."),i(),t(317,"div",12)(318,"div",63),n(319,"div",64),i(),t(320,"div",63),n(321,"div",65),i(),t(322,"div",63),n(323,"div",66),i(),t(324,"div",63),n(325,"div",67),i(),t(326,"div",68),n(327,"div",69),i()(),t(328,"div",16)(329,"pre",28)(330,"code"),e(331,`<div class="progress animated-progess custom-progress mb-4">
<div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress animated-progess custom-progress mb-4">
<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress animated-progess custom-progress mb-4">
<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress animated-progess custom-progress mb-4">
<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress animated-progess custom-progress">
<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`),i()()()()()(),t(332,"div",2)(333,"div",3)(334,"div",4)(335,"h4",5),e(336,"Custom Progress with Label"),i(),t(337,"div",6)(338,"div",7)(339,"label",70),e(340,"Show Code"),i(),t(341,"input",71),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(342,"div",10)(343,"p",11),e(344,"Use "),t(345,"code"),e(346,"animated-progess custom-progess progress-label"),i(),e(347," class to show custom progress with animation and label."),i(),t(348,"div",12)(349,"div",72)(350,"div",73)(351,"div",74)(352,"div",75),n(353,"i",76),i()()(),t(354,"div",77)(355,"div",78)(356,"div",64)(357,"div",79),e(358,"15%"),i()()()()(),t(359,"div",80)(360,"div",73)(361,"div",74)(362,"div",75),n(363,"i",81),i()()(),t(364,"div",77)(365,"div",78)(366,"div",65)(367,"div",79),e(368,"25%"),i()()()()(),t(369,"div",80)(370,"div",73)(371,"div",74)(372,"div",75),n(373,"i",82),i()()(),t(374,"div",77)(375,"div",78)(376,"div",66)(377,"div",79),e(378,"30%"),i()()()()()(),t(379,"div",16)(380,"pre",17)(381,"code"),e(382,`<div class="d-flex align-items-center pb-2">
<div class="flex-shrink-0 me-3">
<div class="avatar-xs">
<div class="avatar-title bg-light rounded-circle text-muted fs-16">
<i class="mdi mdi-facebook"></i>
</div>
</div>
</div>
<div class="flex-grow-1">
<div class="progress animated-progess custom-progress progress-label">
<div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"><div class="label">15%</div></div>
</div>
</div>
</div>`),i(),e(383,`

`),t(384,"code"),e(385,`<div class="d-flex align-items-center py-2">
<div class="flex-shrink-0 me-3">
<div class="avatar-xs">
<div class="avatar-title bg-light rounded-circle text-muted fs-16">
<i class="mdi mdi-twitter"></i>
</div>
</div>
</div>
<div class="flex-grow-1">
<div class="progress animated-progess custom-progress progress-label">
<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div class="label">25%</div></div>
</div>
</div>
</div>`),i(),e(386,`

`),t(387,"code"),e(388,`<div class="d-flex align-items-center py-2">
<div class="flex-shrink-0 me-3">
<div class="avatar-xs">
<div class="avatar-title bg-light rounded-circle text-muted fs-16">
<i class="mdi mdi-github"></i>
</div>
</div>
</div>
<div class="flex-grow-1">
<div class="progress animated-progess custom-progress progress-label">
<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><div class="label">30%</div></div>
</div>
</div>
</div>`),i()()()()()()(),t(389,"div",1)(390,"div",2)(391,"div",3)(392,"div",4)(393,"h4",5),e(394,"Content Progress"),i(),t(395,"div",6)(396,"div",7)(397,"label",83),e(398,"Show Code"),i(),t(399,"input",84),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(400,"div",10)(401,"p",85),e(402,"Example of progress with content wrapped in progress."),i(),t(403,"div",12)(404,"div",86)(405,"div",10)(406,"div",87)(407,"div",77)(408,"h6",88)(409,"b",89),e(410,"30%"),i(),e(411," Update in progress..."),i()(),t(412,"div",6)(413,"h6",88),e(414,"1 min left"),i()()()(),t(415,"div",90),n(416,"div",91),i()(),t(417,"div",86)(418,"div",10)(419,"div",87)(420,"div",77)(421,"h6",88)(422,"b",92),e(423,"60%"),i(),e(424," Update in progress..."),i()(),t(425,"div",6)(426,"h6",88),e(427,"45s left"),i()()()(),t(428,"div",93),n(429,"div",94),i()(),t(430,"div",86)(431,"div",10)(432,"div",87)(433,"div",77)(434,"h6",88)(435,"b",95),e(436,"82%"),i(),e(437," Update in progress..."),i()(),t(438,"div",6)(439,"h6",88),e(440,"25s left"),i()()()(),t(441,"div",96),n(442,"div",97),i()()(),t(443,"div",16)(444,"pre",17)(445,"code"),e(446,`<div class="card bg-light overflow-hidden">
<div class="card-body">
<div class="d-flex">
<div class="flex-grow-1">
<h6 class="mb-0"><b class="text-secondary">30%</b> Update in progress...</h6>
</div>
<div class="flex-shrink-0">
<h6 class="mb-0">1 min left</h6>
</div>
</div>
</div>
<div class="progress bg-secondary-subtle rounded-0">
<div class="progress-bar bg-secondary" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>`),i(),e(447,`

`),t(448,"code"),e(449,`<div class="card bg-light overflow-hidden">
<div class="card-body">
<div class="d-flex">
<div class="flex-grow-1">
<h6 class="mb-0"><b class="text-success">60%</b> Update in progress...</h6>
</div>
<div class="flex-shrink-0">
<h6 class="mb-0">45s left</h6>
</div>
</div>
</div>
<div class="progress bg-success-subtle rounded-0">
<div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>`),i(),e(450,`

`),t(451,"code"),e(452,`<div class="card bg-light overflow-hidden">
<div class="card-body">
<div class="d-flex">
<div class="flex-grow-1">
<h6 class="mb-0"><b class="text-danger">82%</b> Update in progress...</h6>
</div>
<div class="flex-shrink-0">
<h6 class="mb-0">25s left</h6>
</div>
</div>
</div>
<div class="progress bg-danger-subtle rounded-0">
<div class="progress-bar bg-danger" role="progressbar" style="width: 82%" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>`),i()()()()()(),t(453,"div",2)(454,"div",3)(455,"div",4)(456,"h4",5),e(457,"Progress with Steps"),i(),t(458,"div",6)(459,"div",7)(460,"label",98),e(461,"Show Code"),i(),t(462,"input",99),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(463,"div",10)(464,"p",85),e(465,"Here is the example of progress which is represented by steps completion."),i(),t(466,"div",12)(467,"div",100)(468,"div",101),n(469,"div",102),i(),t(470,"button",103),e(471,"1"),i(),t(472,"button",104),e(473,"2"),i(),t(474,"button",105),e(475,"3"),i()()(),t(476,"div",16)(477,"pre",28)(478,"code"),e(479,`<div class="position-relative m-4">
<div class="progress" style="height: 1px;">
<div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
<button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
<button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-light rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>`),i()()()()(),t(480,"div",3)(481,"div",4)(482,"h4",5),e(483,"Step Progress with Arrow"),i(),t(484,"div",6)(485,"div",7)(486,"label",106),e(487,"Show Code"),i(),t(488,"input",107),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(489,"div",10)(490,"p",85),e(491,"Use "),t(492,"code"),e(493,"progress-step-arrow "),i(),e(494,"class to create step progress with an arrow."),i(),t(495,"div",12)(496,"div",108)(497,"div",109),e(498,"Step 1"),i(),t(499,"div",110),e(500," Step 2"),i(),t(501,"div",111),e(502," Step 3"),i()()(),t(503,"div",16)(504,"pre",28)(505,"code"),e(506,`<div class="progress progress-step-arrow progress-info">
<a href="javascript:void(0);" class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Step 1</a>
<a href="javascript:void(0);" class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"> Step 2</a>
<a href="javascript:void(0);" class="progress-bar bg-light text-body" role="progressbar" style="width: 100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> Step 3</a>
</div>;`),i()()()()()()()),s&2&&(p("breadcrumbItems",a.breadCrumbItems),m(20),p("value",0),m(2),p("value",25),m(2),p("value",50),m(2),p("value",75),m(2),p("value",100),m(35),p("value",15),m(2),p("value",25),m(2),p("value",50),m(2),p("value",75),m(2),p("value",100),m(32),p("value",25)("showValue",!0),m(57),p("value",25),m(4),p("value",40),m(5),p("value",50),m(5),p("value",70),m(32),p("value",25)("striped",!0),m(2),p("value",40)("striped",!0),m(24),p("value",75)("striped",!0)("animated",!0),m(55),p("value",15),m(2),p("value",25),m(2),p("value",50),m(2),p("value",75),m(2),p("value",100))},dependencies:[D,Kt],encapsulation:2})}}return l})();var Ze=(()=>{class l{constructor(){this.toasts=[]}show(r,s={}){this.toasts.push(st({textOrTpl:r},s))}remove(r){this.toasts=this.toasts.filter(s=>s!==r)}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275prov=pe({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();function to(l,u){}function io(l,u){if(l&1&&h(0,to,0,0,"ng-template",2),l&2){let r=M().$implicit;p("ngTemplateOutlet",r.textOrTpl)}}function no(l,u){if(l&1&&e(0),l&2){let r=M().$implicit;R(" ",r.textOrTpl," ")}}function ao(l,u){if(l&1){let r=_();t(0,"ngb-toast",1),c("hidden",function(){let a=x(r).$implicit,d=M();return f(d.toastService.remove(a))}),J(1,io,1,1,null,2)(2,no,1,1),i()}if(l&2){let r=u.$implicit,s=M();H(r.classname),p("autohide",!0)("delay",r.delay||5e3),m(),X(s.isTemplate(r)?1:2)}}var Pi=(()=>{class l{constructor(r){this.toastService=r}isTemplate(r){return r.textOrTpl instanceof ke}static{this.\u0275fac=function(s){return new(s||l)(K(Ze))}}static{this.\u0275cmp=C({type:l,selectors:[["app-toasts"]],hostVars:2,hostBindings:function(s,a){s&2&&ve("ngb-toasts",!0)},standalone:!1,decls:2,vars:0,consts:[[3,"class","autohide","delay"],[3,"hidden","autohide","delay"],[3,"ngTemplateOutlet"]],template:function(s,a){s&1&&U(0,ao,3,5,"ngb-toast",0,F),s&2&&z(a.toastService.toasts)},dependencies:[he,Ue],encapsulation:2})}}return l})();function oo(l,u){l&1&&(n(0,"img",36),t(1,"span",37),e(2,"Velzon"),i(),t(3,"small"),e(4,"06 mins ago"),i())}function ro(l,u){if(l&1){let r=_();t(0,"ngb-toast",34),c("hidden",function(){x(r);let a=M();return f(a.show=!1)}),h(1,oo,5,0,"ng-template",35),e(2," Hello, world! This is a toast message. "),i()}l&2&&p("autohide",!1)}function so(l,u){l&1&&(n(0,"img",36),t(1,"span",37),e(2,"Velzon"),i(),t(3,"small"),e(4,"11 mins ago"),i())}function mo(l,u){if(l&1){let r=_();t(0,"ngb-toast",34),c("hidden",function(){x(r);let a=M();return f(a.translucent=!1)}),h(1,so,5,0,"ng-template",35),e(2," Hello, world! This is a toast message. "),i()}l&2&&p("autohide",!1)}function co(l,u){l&1&&(n(0,"img",38),t(1,"span",37),e(2,"Velzon"),i(),t(3,"small"),e(4,"Just now"),i())}function po(l,u){if(l&1){let r=_();t(0,"ngb-toast",34),c("hidden",function(){x(r);let a=M();return f(a.stacking=!1)}),h(1,co,5,0,"ng-template",35),e(2," See? Just like this. "),i()}l&2&&p("autohide",!1)}function uo(l,u){l&1&&(n(0,"img",38),t(1,"span",37),e(2,"Velzon"),i(),t(3,"small"),e(4,"2 seconds ago"),i())}function bo(l,u){if(l&1){let r=_();t(0,"ngb-toast",34),c("hidden",function(){x(r);let a=M();return f(a.stackingsecond=!1)}),h(1,uo,5,0,"ng-template",35),e(2," Heads up, toasts will stack automatically "),i()}l&2&&p("autohide",!1)}function go(l,u){l&1&&(n(0,"img",38),t(1,"span",37),e(2,"Velzon"),i(),t(3,"small"),e(4,"06 mins ago"),i())}function vo(l,u){if(l&1){let r=_();t(0,"ngb-toast",34),c("hidden",function(){x(r);let a=M();return f(a.placement=!1)}),h(1,go,5,0,"ng-template",35),e(2," Hello, world! This is a toast message. "),i()}l&2&&p("autohide",!1)}function ho(l,u){l&1&&(n(0,"img",38),t(1,"span",37),e(2,"Velzon"),i(),t(3,"small"),e(4,"06 mins ago"),i())}function xo(l,u){if(l&1){let r=_();t(0,"ngb-toast",34),c("hidden",function(){x(r);let a=M();return f(a.placementSec=!1)}),h(1,ho,5,0,"ng-template",35),e(2," Hello, world! This is a toast message. "),i()}l&2&&p("autohide",!1)}var Ri=(()=>{class l{constructor(r,s){this.toastService=r,this.modalService=s,this.show=!0,this.translucent=!0,this.stacking=!0,this.stackingsecond=!0,this.placement=!0,this.placementSec=!0}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Notifications",active:!0}]}showStandard(){this.toastService.show("Welcome Back! This is a Toast Notification",{classname:"bg-primary text-center text-white",delay:1e4})}showSuccess(){this.toastService.show("Your application was successfully sent",{classname:"bg-success text-center text-white",delay:1e4})}showDanger(){this.toastService.show("Error ! An error occurred.",{classname:"bg-danger text-center text-white",delay:1e4})}showWarning(){this.toastService.show("Warning ! Something went wrong try again",{classname:"bg-warning text-center text-white",delay:1e4})}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)(K(Ze),K(Be))}}static{this.\u0275cmp=C({type:l,selectors:[["app-notifications"]],standalone:!1,decls:135,vars:7,consts:[["title","Notifications",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","bootstraptoast-showcode",1,"form-label","text-muted"],["type","checkbox","id","bootstraptoast-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"live-preview"],[1,"row","g-3"],[1,"col-xxl-6"],[1,"fs-14","mb-3"],[1,"text-muted"],[3,"autohide"],[1,"mt-4"],[1,"fs-14"],[1,"p-3","bg-light"],[1,"mt-5"],["aria-live","polite","aria-atomic","true",1,"bg-light",2,"position","relative","min-height","200px"],["role","alert","aria-live","assertive","aria-atomic","true","data-bs-toggle","toast",1,"toast","fade","show",2,"position","absolute","top","16px","right","16px"],["aria-live","polite","aria-atomic","true",1,"bg-light","d-flex","justify-content-center","align-items-center",2,"height","200px"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","toastify-showcode",1,"form-label","text-muted"],["type","checkbox","id","toastify-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"hstack","flex-wrap","gap-2"],["type","button","data-toast","","data-toast-text","Welcome Back! This is a Toast Notification","data-toast-gravity","top","data-toast-position","right","data-toast-className","primary","data-toast-duration","3000","data-toast-close","close","data-toast-style","style",1,"btn","btn-light","w-xs",3,"click"],["type","button","data-toast","","data-toast-text","Your application was successfully sent","data-toast-gravity","top","data-toast-position","center","data-toast-className","success","data-toast-duration","3000",1,"btn","btn-light","w-xs",3,"click"],["type","button","data-toast","","data-toast-text","Warning ! Something went wrong try again","data-toast-gravity","top","data-toast-position","center","data-toast-className","warning","data-toast-duration","3000",1,"btn","btn-light","w-xs",3,"click"],["type","button","data-toast","","data-toast-text","Error ! An error occurred.","data-toast-gravity","top","data-toast-position","center","data-toast-className","danger","data-toast-duration","3000",1,"btn","btn-light","w-xs",3,"click"],["aria-live","polite","aria-atomic","true"],[3,"hidden","autohide"],["ngbToastHeader",""],["src","assets/images/logo-sm.png","alt","","height","18",1,"me-2"],[1,"fw-semibold","me-auto"],["src","assets/images/logo-sm.png","alt","...","height","20",1,"rounded","me-2"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Bootstrap Toasts"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10),n(13,"p"),t(14,"div",11)(15,"div",12)(16,"div",13)(17,"h5",14),e(18,"Default Toast"),i(),t(19,"p",15),e(20,"Use "),t(21,"code"),e(22,"toast"),i(),e(23," class to set a default toast."),i(),J(24,ro,3,1,"ngb-toast",16),t(25,"div",17)(26,"h5",18),e(27,"Translucent"),i(),t(28,"p",15),e(29,"Toasts are slightly translucent, too, so they blend over whatever they might appear over."),i(),t(30,"div",19),J(31,mo,3,1,"ngb-toast",16),i()()(),t(32,"div",13)(33,"div")(34,"h5",18),e(35,"Stacking"),i(),t(36,"p",15),e(37,"When you have multiple toasts, we default to vertically stacking them in a readable manner."),i(),t(38,"div",19),J(39,po,3,1,"ngb-toast",16),J(40,bo,3,1,"ngb-toast",16),i()()()(),t(41,"div",20)(42,"h5",18),e(43,"Placement"),i(),t(44,"div",12)(45,"div",13)(46,"div")(47,"p",15),e(48,"Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you\u2019re only ever going to show one toast at a time, put the positioning styles right on the "),t(49,"code"),e(50,".toast"),i(),e(51,"."),i(),t(52,"div",21)(53,"div",22),J(54,vo,3,1,"ngb-toast",16),i()()()(),t(55,"div",13)(56,"div")(57,"p",15),e(58,"You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically."),i(),t(59,"div",23),J(60,xo,3,1,"ngb-toast",16),i()()()()()(),t(61,"div",24)(62,"pre",25)(63,"code"),e(64,`<!-- Default Toast -->
<div class="toast fade show" role="alert" aria-live="assertive"
data-bs-autohide="false" aria-atomic="true">
<div class="toast-header">
<img src="assets/images/logo-sm.png" class="rounded me-2"
alt="..." height="20">
<span class="fw-semibold me-auto">Velzon</span>
<small>06 mins ago</small>
<button type="button" class="btn-close"
data-bs-dismiss="toast" aria-label="Close"></button>
</div>
<div class="toast-body">
Hello, world! This is a toast message.
</div>
</div>`),i(),e(65,`

`),t(66,"code"),e(67,`<!-- Translucent Toast -->
<div class="p-3 bg-light">
<div class="toast fade show" role="alert" aria-live="assertive"
data-bs-autohide="false" aria-atomic="true">
<div class="toast-header">
<img src="assets/images/logo-sm.png" class="rounded me-2"
alt="..." height="20">
<span class="fw-semibold me-auto">Velzon</span>
<small>11 mins ago</small>
<button type="button" class="btn-close"
data-bs-dismiss="toast" aria-label="Close"></button>
</div>
<div class="toast-body">
Hello, world! This is a toast message.
</div>
</div>
</div>`),i(),e(68,`

`),t(69,"code"),e(70,`<!-- Stacking Toast -->
<div class="toast fade show" role="alert" aria-live="assertive"
data-bs-autohide="false" aria-atomic="true">
<div class="toast-header">
<img src="assets/images/logo-sm.png" class="rounded me-2"
alt="..." height="20">
<span class="fw-semibold me-auto">Velzon</span>
<small>Just now</small>
<button type="button" class="btn-close"
data-bs-dismiss="toast" aria-label="Close"></button>
</div>
<div class="toast-body">
See? Just like this.
</div>
</div>`),i(),e(71,`

`),t(72,"code"),e(73,`<!-- Placement Toast -->
<div class="bg-light" aria-live="polite" aria-atomic="true"
style="position: relative; min-height: 200px;">
<div class="toast fade show" role="alert" aria-live="assertive"
aria-atomic="true" data-bs-toggle="toast"
style="position: absolute; top: 16px; right: 16px;">
<div class="toast-header">
<img src="assets/images/logo-sm.png"
class="rounded me-2" alt="..." height="20">
<span class="fw-semibold me-auto">Velzon</span>
<small>06 mins ago</small>
<button type="button" class="btn-close"
data-bs-dismiss="toast" aria-label="Close"></button>
</div>
<div class="toast-body">
Hello, world! This is a toast message.
</div>
</div>
</div>`),i(),e(74,`

`),t(75,"code"),e(76,` <!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true"
class="bg-light d-flex justify-content-center align-items-center"
style="height: 200px;">
<div class="toast fade show" role="alert" aria-live="assertive"
data-bs-autohide="false" aria-atomic="true">
<div class="toast-header">
<img src="assets/images/logo-sm.png"
class="rounded me-2" alt="..." height="20">
<span class="fw-semibold me-auto">Velzon</span>
<small>11 mins ago</small>
<button type="button" class="btn-close"
data-bs-dismiss="toast" aria-label="Close"></button>
</div>
<div class="toast-body">
Hello, world! This is a toast message.
</div>
</div>
</div>`),i()()()()()()(),t(77,"div",1)(78,"div",2)(79,"div",3)(80,"div",4)(81,"h4",5),e(82,"Toastify JS"),i(),t(83,"div",6)(84,"div",7)(85,"label",26),e(86,"Show Code"),i(),t(87,"input",27),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(88,"div",10)(89,"p",15),e(90,"Use "),t(91,"code"),e(92,"data-toast"),i(),t(93,"code"),e(94,'data-toast-text=""'),i(),t(95,"code"),e(96,'data-toast-gravity=""'),i(),t(97,"code"),e(98,'data-toast-position=""'),i(),t(99,"code"),e(100,'data-toast-className=""'),i(),t(101,"code"),e(102,'data-toast-duration=""'),i(),t(103,"code"),e(104,'data-toast-close="close"'),i(),t(105,"code"),e(106,'data-toast-style="style"'),i(),e(107," as per your toast requirement."),i(),t(108,"div",11)(109,"div",28)(110,"button",29),c("click",function(){return a.showStandard()}),e(111,"Default"),i(),t(112,"button",30),c("click",function(){return a.showSuccess()}),e(113,"Success"),i(),t(114,"button",31),c("click",function(){return a.showWarning()}),e(115,"Warning"),i(),t(116,"button",32),c("click",function(){return a.showDanger()}),e(117,"Error"),i()(),n(118,"app-toasts",33),i(),t(119,"div",24)(120,"pre",25)(121,"code"),e(122,`<!-- Toast -->
<div class="hstack flex-wrap gap-2">
<button type="button" data-toast data-toast-text="Welcome Back! This is a Toast Notification" data-toast-gravity="top" data-toast-position="right" data-toast-className="primary" data-toast-duration="3000" data-toast-close="close" data-toast-style="style" class="btn btn-light w-xs ">Default</button>
<button type="button" data-toast data-toast-text="Your application was successfully sent" data-toast-gravity="top" data-toast-position="center" data-toast-className="success" data-toast-duration="3000" class="btn btn-light w-xs">Success</button>
<button type="button" data-toast data-toast-text="Warning ! Something went wrong try again" data-toast-gravity="top" data-toast-position="center" data-toast-className="warning" data-toast-duration="3000" class="btn btn-light w-xs">Warning</button>
<button type="button" data-toast data-toast-text="Error ! An error occurred." data-toast-gravity="top" data-toast-position="center" data-toast-className="danger" data-toast-duration="3000" class="btn btn-light w-xs">Error</button>
</div>`),i(),e(123,`

`),t(124,"code"),e(125,`<!-- Display Position -->
<div class="hstack flex-wrap gap-2">
<button type="button" data-toast data-toast-text="Welcome Back ! This is a Toast Notification" data-toast-gravity="top" data-toast-position="left" data-toast-duration="3000" data-toast-close="close" class="btn btn-light w-xs">Top Left</button>
<button type="button" data-toast data-toast-text="Welcome Back ! This is a Toast Notification" data-toast-gravity="top" data-toast-position="center" data-toast-duration="3000" data-toast-close="close" class="btn btn-light w-xs">Top Center</button>
<button type="button" data-toast data-toast-text="Welcome Back ! This is a Toast Notification" data-toast-gravity="top" data-toast-position="right" data-toast-duration="3000" data-toast-close="close"  class="btn btn-light w-xs">Top Right</button>
<button type="button" data-toast data-toast-text="Welcome Back ! This is a Toast Notification" data-toast-gravity="bottom" data-toast-position="left" data-toast-duration="3000" data-toast-close="close" class="btn btn-light w-xs">Bottom Left</button>
<button type="button" data-toast data-toast-text="Welcome Back ! This is a Toast Notification" data-toast-gravity="bottom" data-toast-position="center" data-toast-duration="3000" data-toast-close="close" class="btn btn-light w-xs">Bottom Center</button>
<button type="button" data-toast data-toast-text="Welcome Back ! This is a Toast Notification" data-toast-gravity="bottom" data-toast-position="right" data-toast-duration="3000" data-toast-close="close" class="btn btn-light w-xs">Bottom Right</button>
</div>`),i(),e(126,`

`),t(127,"code"),e(128,`<!-- Offset Position -->
<button type="button" data-toast data-toast-text="Welcome Back ! This is a Toast Notification" data-toast-gravity="top" data-toast-position="right" data-toast-duration="3000" data-toast-offset data-toast-close="close" class="btn btn-light w-xs">Click Me</button>;`),i(),e(129,`

`),t(130,"code"),e(131,`<!-- Close icon Display -->
<button type="button" data-toast data-toast-text="Welcome Back ! This is a Toast Notification" data-toast-position="right" data-toast-duration="3000" data-toast-close="close" class="btn btn-light w-xs">Click Me</button>`),i(),e(132,`

`),t(133,"code"),e(134,`<!-- Duration -->
<button type="button" data-toast data-toast-text="Toast Duration 5s" data-toast-gravity="top" data-toast-position="right" data-toast-duration="5000" class="btn btn-light w-xs">Click Me</button>`),i()()()()()()()),s&2&&(p("breadcrumbItems",a.breadCrumbItems),m(24),X(a.show?24:-1),m(7),X(a.translucent?31:-1),m(8),X(a.stacking?39:-1),m(),X(a.stackingsecond?40:-1),m(14),X(a.placement?54:-1),m(6),X(a.placementSec?60:-1))},dependencies:[D,Ue,ei,Pi],encapsulation:2})}}return l})();var Vi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Media Object",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-media"]],standalone:!1,decls:150,vars:1,consts:[["title","Media Object",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","default",1,"form-label","text-muted"],["type","checkbox","id","default",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted","mb-4"],[1,"live-preview"],[1,"d-flex","align-items-start","text-muted","mb-4"],[1,"flex-shrink-0","me-3"],["src","assets/images/users/avatar-2.jpg","alt","...",1,"avatar-sm","rounded"],[1,"flex-grow-1"],[1,"fs-14"],[1,"flex-shrink-0","ms-3"],["src","assets/images/users/avatar-3.jpg","alt","...",1,"avatar-sm","rounded"],[1,"d-flex","align-items-start","text-muted"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","nestingmedia-showcode",1,"form-label","text-muted"],["type","checkbox","id","nestingmedia-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","align-items-start","text-muted","mt-3"],["src","assets/images/users/avatar-4.jpg","alt","...",1,"avatar-sm","rounded"],[1,"col-lg-12"],["for","media-alignment-showcode",1,"form-label","text-muted"],["type","checkbox","id","media-alignment-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"mb-1"],[1,"mb-0"],[1,"d-flex","align-items-center","text-muted","mb-4"],["src","assets/images/users/avatar-6.jpg","alt","...",1,"avatar-sm","rounded"],[1,"d-flex","align-items-end","text-muted"],["src","assets/images/users/avatar-8.jpg","alt","...",1,"avatar-sm","rounded"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Examples"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"Use few flex utilities that allow even more flexibility and customization than before."),i(),t(15,"div",12)(16,"div",13)(17,"div",14),n(18,"img",15),i(),t(19,"div",16)(20,"h5",17),e(21,"Media heading"),i(),e(22," This is some content from a media component. You can replace this with any content and adjust it as needed. "),i()(),t(23,"div",13)(24,"div",16)(25,"h5",17),e(26,"Media heading"),i(),e(27," This is some content from a media component. You can replace this with any content and adjust it as needed. "),i(),t(28,"div",18),n(29,"img",19),i()(),t(30,"div",20)(31,"div",14),n(32,"img",15),i(),t(33,"div",16)(34,"h5",17),e(35,"Media heading"),i(),e(36," This is some content from a media component. You can replace this with any content and adjust it as needed. "),i()()(),t(37,"div",21)(38,"pre",22)(39,"code"),e(40,`<div class="d-flex align-items-start text-muted mb-4">
<div class="flex-shrink-0 me-3">
<img src="assets/images/users/avatar-2.jpg" class="avatar-sm rounded" alt="...">
</div>

<div class="flex-grow-1">
<h5 class="fs-14">Media heading</h5>
This is some content from a media component. You can replace this with any content and adjust it as needed.
</div>
</div>`),i(),e(41,`

`),t(42,"code"),e(43,`<div class="d-flex align-items-start text-muted mb-4">
<div class="flex-grow-1">
<h5 class="fs-14">Media heading</h5>
This is some content from a media component. You can replace this with any content and adjust it as needed.
</div>
<div class="flex-shrink-0 ms-3">
<img src="assets/images/users/avatar-3.jpg" class="avatar-sm rounded" alt="...">
</div>
</div>`),i(),e(44,`

`),t(45,"code"),e(46,`<div class="d-flex align-items-start text-muted">
<div class="flex-shrink-0 me-3">
<img src="assets/images/users/avatar-2.jpg" class="avatar-sm rounded" alt="...">
</div>
<div class="flex-grow-1">
<h5 class="fs-14">Media heading</h5>
This is some content from a media component. You can replace this with any content and adjust it as needed.
</div>
</div>`),i()()()()()(),t(47,"div",2)(48,"div",3)(49,"div",4)(50,"h4",5),e(51,"Nesting Example"),i(),t(52,"div",6)(53,"div",7)(54,"label",23),e(55,"Show Code"),i(),t(56,"input",24),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(57,"div",10)(58,"p",11),e(59,"Media objects can be infinitely nested, though we suggest you stop at some point. Place nested "),t(60,"code"),e(61,"d-flex align-items-start"),i(),e(62," within the "),t(63,"code"),e(64,"flex-grow-1"),i(),e(65," of a parent media object."),i(),t(66,"div",12)(67,"div",13)(68,"div",14),n(69,"img",15),i(),t(70,"div",16)(71,"h5",17),e(72,"Media heading"),i(),e(73," This is some content from a media component. You can replace this with any content and adjust it as needed. "),t(74,"div",25)(75,"div",14),n(76,"img",19),i(),t(77,"div",16)(78,"h5",17),e(79,"Media heading"),i(),e(80," This is some content from a media component. You can replace this with any content and adjust it as needed. "),i()()()(),t(81,"div",20)(82,"div",14),n(83,"img",26),i(),t(84,"div",16)(85,"h5",17),e(86,"Media heading"),i(),e(87," This is some content from a media component. You can replace this with any content and adjust it as needed. "),i()()(),t(88,"div",21)(89,"pre",22)(90,"code"),e(91,`<!-- Nesting Example -->
<div class="d-flex align-items-start text-muted mb-4">
<div class="flex-shrink-0 me-3">
<img src="assets/images/users/avatar-2.jpg" class="avatar-sm rounded" alt="...">
</div>
<div class="flex-grow-1">
<h5 class="fs-14">Media heading</h5>
This is some content from a media component. You can replace this with any content and adjust it as needed.
<div class="d-flex align-items-start text-muted mt-3">
<div class="flex-shrink-0 me-3">
<img src="assets/images/users/avatar-3.jpg" class="avatar-sm rounded" alt="...">
</div>
<div class="flex-grow-1">
<h5 class="fs-14">Media heading</h5>
This is some content from a media component. You can replace this with any content and adjust it as needed.
</div>
</div>
</div>
</div>`),i(),e(92,`

`),t(93,"code"),e(94,`<div class="d-flex align-items-start text-muted">
<div class="flex-shrink-0 me-3">
<img src="assets/images/users/avatar-4.jpg" class="avatar-sm rounded" alt="...">
</div>
<div class="flex-grow-1">
<h5 class="fs-14">Media heading</h5>
This is some content from a media component. You can replace this with any content and adjust it as needed.
</div>
</div>`),i()()()()()()(),t(95,"div",1)(96,"div",27)(97,"div",3)(98,"div",4)(99,"h4",5),e(100,"Media Alignment"),i(),t(101,"div",6)(102,"div",7)(103,"label",28),e(104,"Show Code"),i(),t(105,"input",29),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(106,"div",10)(107,"p",11),e(108,"The images or other media can be aligned top, middle, or bottom. The default is top aligned."),i(),t(109,"div",12)(110,"div",13)(111,"div",14),n(112,"img",15),i(),t(113,"div",16)(114,"h5",17),e(115,"Top Aligned media"),i(),t(116,"p",30),e(117,"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."),i(),t(118,"p",31),e(119,"Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."),i()()(),t(120,"div",32)(121,"div",14),n(122,"img",33),i(),t(123,"div",16)(124,"h5",17),e(125,"Center Aligned media"),i(),t(126,"p",30),e(127,"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."),i(),t(128,"p",31),e(129,"Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."),i()()(),t(130,"div",34)(131,"div",14),n(132,"img",35),i(),t(133,"div",16)(134,"h5",17),e(135,"Bottom Aligned media"),i(),t(136,"p",30),e(137,"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."),i(),t(138,"p",31),e(139,"Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."),i()()()(),t(140,"div",21)(141,"pre",22)(142,"code"),e(143,`<!-- Media Alignment -->
<div class="d-flex align-items-start text-muted mb-4">
<div class="flex-shrink-0 me-3">
<img src="assets/images/users/avatar-2.jpg" class="avatar-sm rounded" alt="...">
</div>
<div class="flex-grow-1">
<h5 class="fs-14">Top Aligned media</h5>
<p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
<p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</div>
</div>`),i(),e(144,`

`),t(145,"code"),e(146,`<div class="d-flex align-items-center text-muted mb-4">
<div class="flex-shrink-0 me-3">
<img src="assets/images/users/avatar-6.jpg" class="avatar-sm rounded" alt="...">
</div>
<div class="flex-grow-1">
<h5 class="fs-14">Center Aligned media</h5>
<p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
<p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</div>
</div>`),i(),e(147,`

`),t(148,"code"),e(149,`<div class="d-flex align-items-end text-muted">
<div class="flex-shrink-0 me-3">
<img src="assets/images/users/avatar-8.jpg" class="avatar-sm rounded" alt="...">
</div>
<div class="flex-grow-1">
<h5 class="fs-14">Bottom Aligned media</h5>
<p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
<p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</div>
</div>`),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var Wi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Embed Video",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-video"]],standalone:!1,decls:117,vars:1,consts:[["title","Embed Video",3,"breadcrumbItems"],[1,"row"],[1,"col-xl-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","ratiovideo1-showcode",1,"form-label","text-muted"],["type","checkbox","id","ratiovideo1-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"ratio","ratio-16x9"],["src",ue`https://www.youtube.com/embed/1y_kfWUCFDQ`,"title","YouTube video","allowfullscreen","",1,"rounded"],[1,"d-none","code-view"],[1,"language-markup"],["for","ratiovideo3-showcode",1,"form-label","text-muted"],["type","checkbox","id","ratiovideo3-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"ratio","ratio-4x3"],["src",ue`https://www.youtube.com/embed/PHcgN1GTjdU`,"title","YouTube video","allowfullscreen","",1,"rounded"],["for","ratiovideocustom-showcode",1,"form-label","text-muted"],["type","checkbox","id","ratiovideocustom-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"ratio",2,"--vz-aspect-ratio","50%"],["src",ue`https://www.youtube.com/embed/2RZQN_ko0iU`,"title","YouTube video","allowfullscreen","",1,"rounded"],["for","ratiovideo2-showcode",1,"form-label","text-muted"],["type","checkbox","id","ratiovideo2-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"ratio","ratio-21x9"],["src",ue`https://www.youtube.com/embed/Z-fV2lGKnnU`,"title","YouTube video","allowfullscreen","",1,"rounded"],["for","ratiovideo4-showcode",1,"form-label","text-muted"],["type","checkbox","id","ratiovideo4-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"ratio","ratio-1x1"],["src",ue`https://www.youtube.com/embed/GfSZtaoc5bw`,"title","YouTube video","allowfullscreen","",1,"rounded"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Ratio Video 16:9"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"Wrap any embed in"),t(15,"code"),e(16,"<iframe>"),i(),e(17," tag, in a parent element, use "),t(18,"code"),e(19,"ratio-16x9"),i(),e(20," class to set aspect ratio 16:9. "),i(),t(21,"div",12)(22,"div",13),n(23,"iframe",14),i()(),t(24,"div",15)(25,"pre",16)(26,"code"),e(27,`<!-- Ratio Video 16:9 -->
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen></iframe>
</div>`),i()()()()(),t(28,"div",3)(29,"div",4)(30,"h4",5),e(31,"Ratio Video 4:3"),i(),t(32,"div",6)(33,"div",7)(34,"label",17),e(35,"Show Code"),i(),t(36,"input",18),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(37,"div",10)(38,"p",11),e(39,"Use "),t(40,"code"),e(41,"ratio-4x3"),i(),e(42," class to set aspect ratio 4:3."),i(),t(43,"div",12)(44,"div",19),n(45,"iframe",20),i()(),t(46,"div",15)(47,"pre",16)(48,"code"),e(49,`<!-- Ratio Video 4:3 -->
<div class="ratio ratio-4x3">
<iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen></iframe>
</div>`),i()()()()(),t(50,"div",3)(51,"div",4)(52,"h4",5),e(53,"Custom Ratios"),i(),t(54,"div",6)(55,"div",7)(56,"label",21),e(57,"Show Code"),i(),t(58,"input",22),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(59,"div",10)(60,"p",11),e(61,"Use "),t(62,"code"),e(63,"--vz-aspect-ratio: 50%"),i(),e(64," to style element to set aspect ratio 2:1."),i(),t(65,"div",12)(66,"div",23),n(67,"iframe",24),i()(),t(68,"div",15)(69,"pre",16)(70,"code"),e(71,`<!-- Custom Ratio Video -->
<div class="ratio" style="--vz-aspect-ratio: 50%;">
<iframe src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video" allowfullscreen></iframe>
</div>`),i()()()()()(),t(72,"div",2)(73,"div",3)(74,"div",4)(75,"h4",5),e(76,"Ratio Video 21:9"),i(),t(77,"div",6)(78,"div",7)(79,"label",25),e(80,"Show Code"),i(),t(81,"input",26),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(82,"div",10)(83,"p",11),e(84,"Use "),t(85,"code"),e(86,"ratio-21x9"),i(),e(87," class to set aspect ratio 21:9."),i(),t(88,"div",12)(89,"div",27),n(90,"iframe",28),i()(),t(91,"div",15)(92,"pre",16)(93,"code"),e(94,`<!-- Ratio Video 21:9 -->
<div class="ratio ratio-21x9">
<iframe src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video" allowfullscreen></iframe>
</div>`),i()()()()(),t(95,"div",3)(96,"div",4)(97,"h4",5),e(98,"Ratio Video 1:1"),i(),t(99,"div",6)(100,"div",7)(101,"label",29),e(102,"Show Code"),i(),t(103,"input",30),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(104,"div",10)(105,"p",11),e(106,"Use "),t(107,"code"),e(108,"ratio-1x1"),i(),e(109," class to set aspect ratio 1:1."),i(),t(110,"div",12)(111,"div",31),n(112,"iframe",32),i()(),t(113,"div",15)(114,"pre",16)(115,"code"),e(116,`<!-- Ratio Video 1:1 -->
<div class="ratio ratio-1x1">
<iframe src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video" allowfullscreen></iframe>
</div>`),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var Oi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Typography",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-typography"]],standalone:!1,decls:960,vars:1,consts:[["title","Typography",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-6"],[1,"card"],[1,"card-header"],[1,"card-title","mb-0"],[1,"card-body"],[1,"live-preview"],[1,"col-sm-6"],[1,"text-muted"],[1,"display-4","text-body","fw-medium"],[1,"mb-2"],[1,"mb-0"],[1,"text-muted","mt-4","mt-sm-0"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","heading-showcode",1,"form-label","text-muted"],["type","checkbox","id","heading-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"mb-3"],[1,"mb-1"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","displayheading-showcode",1,"form-label","text-muted"],["type","checkbox","id","displayheading-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"display-1","mb-4"],[1,"display-2","mb-4"],[1,"display-3","mb-4"],[1,"display-4","mb-4"],[1,"display-5","mb-4"],[1,"display-6","mb-0"],[1,"language-markup"],[1,"col-lg-12"],["for","blockquotes-showcode",1,"form-label","text-muted"],["type","checkbox","id","blockquotes-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"blockquote","fs-14","mb-0"],[1,"blockquote-footer","mt-0"],["title","Source Title"],[1,"mt-4","mt-lg-0"],[1,"blockquote","blockquote-reverse","fs-14","mb-0"],["for","blockquotes-bgcolor-showcode",1,"form-label","text-muted"],["type","checkbox","id","blockquotes-bgcolor-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"text-muted","text-muted"],[1,"row","gy-4"],[1,"col-xl-4","col-md-6"],[1,"blockquote","custom-blockquote","blockquote-primary","rounded","mb-0","material-shadow"],[1,"text-body","mb-2"],[1,"blockquote","custom-blockquote","blockquote-secondary","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-success","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-info","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-danger","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-warning","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-dark","rounded","mb-0","material-shadow"],["for","blockquotes-bordercolor-showcode",1,"form-label","text-muted"],["type","checkbox","id","blockquotes-bordercolor-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"blockquote","custom-blockquote","blockquote-outline","blockquote-primary","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-outline","blockquote-secondary","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-outline","blockquote-success","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-outline","blockquote-info","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-outline","blockquote-danger","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-outline","blockquote-warning","rounded","mb-0","material-shadow"],[1,"blockquote","custom-blockquote","blockquote-outline","blockquote-dark","rounded","mb-0","material-shadow"],["for","inlinetext-elements-showcode",1,"form-label","text-muted"],["type","checkbox","id","inlinetext-elements-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"lead"],["for","unstyledlist-showcode",1,"form-label","text-muted"],["type","checkbox","id","unstyledlist-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"list-unstyled","mb-0"],[1,"ul-padd"],[1,"language-markup",2,"height","200px"],["for","inlinelist-elements-showcode",1,"form-label","text-muted"],["type","checkbox","id","inlinelist-elements-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"list-inline","mb-0"],[1,"list-inline-item"],[1,"col-xl-12"],["for","desclist-alignment-showcode",1,"form-label","text-muted"],["type","checkbox","id","desclist-alignment-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body","Description-list"],[1,"row","mb-0"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-9","offset-sm-3"],[1,"col-sm-3","text-truncate"],[1,"col-sm-9","mb-0"],[1,"col-sm-4"],[1,"col-sm-8"],["for","textwrap-showcode",1,"form-label","text-muted"],["type","checkbox","id","textwrap-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"badge","bg-primary","text-wrap",2,"width","6rem"],[1,"mt-4"],[1,"text-nowrap","border","bg-light","mt-3",2,"width","8rem"],["for","wordbreak-showcode",1,"form-label","text-muted"],["type","checkbox","id","wordbreak-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"text-break","mb-0"],["for","fontsize-showcode",1,"form-label","text-muted"],["type","checkbox","id","fontsize-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"fs-1"],[1,"fs-2"],[1,"fs-3"],[1,"fs-4"],[1,"fs-5"],[1,"fs-6"],["for","fontweight-showcode",1,"form-label","text-muted"],["type","checkbox","id","fontweight-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"fw-bold"],[1,"fw-bolder"],[1,"fw-semibold"],[1,"fw-normal"],[1,"fw-light"],[1,"fw-lighter"],[1,"fst-italic"],[1,"fst-normal","mb-0"],["for","lineheight-showcode",1,"form-label","text-muted"],["type","checkbox","id","lineheight-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"lh-1"],[1,"lh-sm"],[1,"lh-base"],[1,"lh-lg","mb-0"],["for","texttransform-showcode",1,"form-label","text-muted"],["type","checkbox","id","texttransform-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"text-lowercase"],[1,"text-uppercase"],[1,"text-capitalize","mb-0"],["for","textdecoration-showcode",1,"form-label","text-muted"],["type","checkbox","id","textdecoration-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"text-decoration-underline"],[1,"text-decoration-line-through"],["href","javascript:void(0);",1,"text-decoration-none"],["for","texttruncation-showcode",1,"form-label","text-muted"],["type","checkbox","id","texttruncation-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"col-2","text-truncate"],[1,"d-inline-block","text-truncate",2,"max-width","150px"],["for","visibility-showcode",1,"form-label","text-muted"],["type","checkbox","id","visibility-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"visible"],[1,"invisible"],["for","clearfix-showcode",1,"form-label","text-muted"],["type","checkbox","id","clearfix-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"bg-light","clearfix","p-3"],["type","button",1,"btn","btn-secondary","float-start"],["type","button",1,"btn","btn-success","float-end"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Font Family"),i()(),t(7,"div",6)(8,"div",7)(9,"div",1)(10,"div",8)(11,"div",9)(12,"p"),e(13,"Body Font Family"),i(),t(14,"div")(15,"p",10),e(16,"Aa"),i()(),t(17,"div")(18,"p",11),e(19,"Font Family"),i(),t(20,"h5",12),e(21,'"Poppins", sans-serif'),i()()()(),t(22,"div",8)(23,"div",13)(24,"p"),e(25,"Heading Font Family"),i(),t(26,"div")(27,"h1",10),e(28,"Aa"),i()(),t(29,"div")(30,"p",11),e(31,"Font Family"),i(),t(32,"h5",12),e(33,'"Poppins", sans-serif'),i()()()()()()()(),t(34,"div",3)(35,"div",14)(36,"h4",15),e(37,"Headings"),i(),t(38,"div",16)(39,"div",17)(40,"label",18),e(41,"Show Code"),i(),t(42,"input",19),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(43,"div",6)(44,"p",9),e(45,"All HTML headings, "),t(46,"code"),e(47,"<h1>"),i(),e(48," through "),t(49,"code"),e(50,"<h6>"),i(),e(51,", are available."),i(),t(52,"div",7)(53,"h1",20),e(54,"h1. Bootstrap heading "),t(55,"small",9),e(56,"Semibold 2.03125rem (32.5px)"),i()(),t(57,"h2",20),e(58,"h2. Bootstrap heading "),t(59,"small",9),e(60,"Semibold 1.625rem (26px)"),i()(),t(61,"h3",20),e(62,"h3. Bootstrap heading "),t(63,"small",9),e(64,"Semibold 1.42188rem (22.8px)"),i()(),t(65,"h4",20),e(66,"h4. Bootstrap heading "),t(67,"small",9),e(68,"Semibold 1.21875rem (19.5px)"),i()(),t(69,"h5",20),e(70,"h5. Bootstrap heading "),t(71,"small",9),e(72,"Semibold 1.01563rem (16.25px)"),i()(),t(73,"h6",21),e(74,"h6. Bootstrap heading "),t(75,"small",9),e(76,"Semibold 0.8125rem (13px)"),i()()(),t(77,"div",22)(78,"pre",23)(79,"code"),e(80,`<!-- Headings -->
<h1 class="mb-3">h1. Bootstrap heading <small class="text-muted">Semibold 2.03125rem (32.5px)</small></h1>`),i(),e(81,`

`),t(82,"code"),e(83,'<h2 class="mb-3">h2. Bootstrap heading <small class="text-muted">Semibold 1.625rem (26px)</small></h2>'),i(),e(84,`

`),t(85,"code"),e(86,'<h3 class="mb-3">h3. Bootstrap heading <small class="text-muted">Semibold 1.42188rem (22.8px)</small></h3>'),i(),e(87,`

`),t(88,"code"),e(89,'<h4 class="mb-3">h4. Bootstrap heading <small class="text-muted">Semibold 1.21875rem (19.5px)</small></h4>'),i(),e(90,`

`),t(91,"code"),e(92,'<h5 class="mb-3">h5. Bootstrap heading <small class="text-muted">Semibold 1.01563rem (16.25px)</small></h5>'),i(),e(93,`

`),t(94,"code"),e(95,'<h6 class="mb-1">h6. Bootstrap heading <small class="text-muted">Semibold 0.8125rem (13px)</small></h6>'),i()()()()()(),t(96,"div",2)(97,"div",3)(98,"div",14)(99,"h4",15),e(100,"Display Headings"),i(),t(101,"div",16)(102,"div",17)(103,"label",24),e(104,"Show Code"),i(),t(105,"input",25),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(106,"div",6)(107,"p",9),e(108,"Traditional heading elements are designed to work best in the meat of your page content."),i(),t(109,"div",7)(110,"h1",26),e(111,"Display 1"),i(),t(112,"h1",27),e(113,"Display 2"),i(),t(114,"h1",28),e(115,"Display 3"),i(),t(116,"h1",29),e(117,"Display 4"),i(),t(118,"h1",30),e(119,"Display 5"),i(),t(120,"h1",31),e(121,"Display 6"),i()(),t(122,"div",22)(123,"pre",32)(124,"code"),e(125,`<!-- Display Headings -->
<h1 class="display-1">Display 1</h1>`),i(),e(126,`

`),t(127,"code"),e(128,'<h1 class="display-2">Display 2</h1>'),i(),e(129,`

`),t(130,"code"),e(131,'<h1 class="display-3">Display 3</h1>'),i(),e(132,`

`),t(133,"code"),e(134,'<h1 class="display-4">Display 4</h1>'),i(),e(135,`

`),t(136,"code"),e(137,'<h1 class="display-5">Display 5</h1>'),i(),e(138,`

`),t(139,"code"),e(140,'<h1 class="display-6">Display 6</h1>'),i()()()()()()(),t(141,"div",1)(142,"div",33)(143,"div",3)(144,"div",14)(145,"h4",15),e(146,"Blockquotes"),i(),t(147,"div",16)(148,"div",17)(149,"label",34),e(150,"Show Code"),i(),t(151,"input",35),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(152,"div",6)(153,"p",9),e(154,"Use "),t(155,"code"),e(156,'<blockquote class="blockquote">'),i(),e(157," class for quoting blocks of content from another source within your document ."),i(),t(158,"div",7)(159,"div",1)(160,"div",2)(161,"div")(162,"blockquote",36)(163,"p"),e(164,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),i(),t(165,"footer",37),e(166,"Someone famous in "),t(167,"cite",38),e(168,"Source Title"),i()()()()(),t(169,"div",2)(170,"div",39)(171,"blockquote",40)(172,"p"),e(173,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),i(),t(174,"footer",37),e(175,"Someone famous in "),t(176,"cite",38),e(177,"Source Title"),i()()()()()()(),t(178,"div",22)(179,"pre",32)(180,"code"),e(181,`<!-- Blockquotes -->
<blockquote class="blockquote fs-14">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<footer class="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`),i(),e(182,`

`),t(183,"code"),e(184,`<blockquote class="blockquote blockquote-reverse fs-14">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<footer class="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`),i()()()()()()(),t(185,"div",1)(186,"div",33)(187,"div",3)(188,"div",14)(189,"h4",15),e(190,"Blockquote Background Color"),i(),t(191,"div",16)(192,"div",17)(193,"label",41),e(194,"Show Code"),i(),t(195,"input",42),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(196,"div",6)(197,"p",43),e(198,"Use "),t(199,"code"),e(200,"blockquote-"),i(),e(201," class with the below-mentioned color variation to set the blockquote background color."),i(),t(202,"div",7)(203,"div",44)(204,"div",45)(205,"blockquote",46)(206,"p",47),e(207,"Custom Blockquote Primary Example"),i(),t(208,"footer",37),e(209,"Angie Burt "),t(210,"cite",38),e(211,"Designer"),i()()()(),t(212,"div",45)(213,"blockquote",48)(214,"p",47),e(215,"Custom Blockquote Secondary Example"),i(),t(216,"footer",37),e(217,"Angie Burt "),t(218,"cite",38),e(219,"Designer"),i()()()(),t(220,"div",45)(221,"blockquote",49)(222,"p",47),e(223,"Custom Blockquote Success Example"),i(),t(224,"footer",37),e(225,"Angie Burt "),t(226,"cite",38),e(227,"Designer"),i()()()(),t(228,"div",45)(229,"blockquote",50)(230,"p",47),e(231,"Custom Blockquote Info Example"),i(),t(232,"footer",37),e(233,"Angie Burt "),t(234,"cite",38),e(235,"Designer"),i()()()(),t(236,"div",45)(237,"blockquote",51)(238,"p",47),e(239,"Custom Blockquote Danger Example"),i(),t(240,"footer",37),e(241,"Angie Burt "),t(242,"cite",38),e(243,"Designer"),i()()()(),t(244,"div",45)(245,"blockquote",52)(246,"p",47),e(247,"Custom Blockquote Warning Example"),i(),t(248,"footer",37),e(249,"Angie Burt "),t(250,"cite",38),e(251,"Designer"),i()()()(),t(252,"div",45)(253,"blockquote",53)(254,"p",47),e(255,"Custom Blockquote Dark Example"),i(),t(256,"footer",37),e(257,"Angie Burt "),t(258,"cite",38),e(259,"Designer"),i()()()()()(),t(260,"div",22)(261,"pre",23)(262,"code"),e(263,`<!-- Blockquote Background Color -->
<blockquote class="blockquote custom-blockquote blockquote-primary rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Primary Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(264,`

`),t(265,"code"),e(266,`<blockquote class="blockquote custom-blockquote blockquote-secondary rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Secondary Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(267,`

`),t(268,"code"),e(269,`<blockquote class="blockquote custom-blockquote blockquote-success rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Success Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(270,`

`),t(271,"code"),e(272,`<blockquote class="blockquote custom-blockquote blockquote-info rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Info Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(273,`

`),t(274,"code"),e(275,`<blockquote class="blockquote custom-blockquote blockquote-danger rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Danger Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(276,`

`),t(277,"code"),e(278,`<blockquote class="blockquote custom-blockquote blockquote-warning rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Warning Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(279,`

`),t(280,"code"),e(281,`<blockquote class="blockquote custom-blockquote blockquote-dark rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Dark Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i()()()()()()(),t(282,"div",1)(283,"div",33)(284,"div",3)(285,"div",14)(286,"h4",15),e(287,"Blockquote Border Color"),i(),t(288,"div",16)(289,"div",17)(290,"label",54),e(291,"Show Code"),i(),t(292,"input",55),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(293,"div",6)(294,"p",43),e(295,"Use "),t(296,"code"),e(297,"blockquote-outline"),i(),e(298," class to set blockquote border color."),i(),t(299,"div",7)(300,"div",44)(301,"div",45)(302,"blockquote",56)(303,"p",47),e(304,"Custom Blockquote Outline Primary Example"),i(),t(305,"footer",37),e(306,"Angie Burt "),t(307,"cite",38),e(308,"Designer"),i()()()(),t(309,"div",45)(310,"blockquote",57)(311,"p",47),e(312,"Custom Blockquote Outline Secondary Example"),i(),t(313,"footer",37),e(314,"Angie Burt "),t(315,"cite",38),e(316,"Designer"),i()()()(),t(317,"div",45)(318,"blockquote",58)(319,"p",47),e(320,"Custom Blockquote Outline Success Example"),i(),t(321,"footer",37),e(322,"Angie Burt "),t(323,"cite",38),e(324,"Designer"),i()()()(),t(325,"div",45)(326,"blockquote",59)(327,"p",47),e(328,"Custom Blockquote Outline Info Example"),i(),t(329,"footer",37),e(330,"Angie Burt "),t(331,"cite",38),e(332,"Designer"),i()()()(),t(333,"div",45)(334,"blockquote",60)(335,"p",47),e(336,"Custom Blockquote Outline Danger Example"),i(),t(337,"footer",37),e(338,"Angie Burt "),t(339,"cite",38),e(340,"Designer"),i()()()(),t(341,"div",45)(342,"blockquote",61)(343,"p",47),e(344,"Custom Blockquote Outline Warning Example"),i(),t(345,"footer",37),e(346,"Angie Burt "),t(347,"cite",38),e(348,"Designer"),i()()()(),t(349,"div",45)(350,"blockquote",62)(351,"p",47),e(352,"Custom Blockquote Outline Dark Example"),i(),t(353,"footer",37),e(354,"Angie Burt "),t(355,"cite",38),e(356,"Designer"),i()()()()()(),t(357,"div",22)(358,"pre",23)(359,"code"),e(360,`<!-- Blockquote Border Color -->
<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-primary rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Outline Primary Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(361,`

`),t(362,"code"),e(363,`<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-secondary rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Outline Secondary Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(364,`

`),t(365,"code"),e(366,`<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Outline Success Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(367,`

`),t(368,"code"),e(369,`<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-info rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Outline Info Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(370,`

`),t(371,"code"),e(372,`<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-danger rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Outline Danger Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(373,`

`),t(374,"code"),e(375,`<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-warning rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Outline Warning Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i(),e(376,`

`),t(377,"code"),e(378,`<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-dark rounded mb-0 material-shadow">
<p class="text-body mb-2">Custom Blockquote Outline Dark Example</p>
<footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>`),i()()()()()()(),t(379,"div",1)(380,"div",2)(381,"div",3)(382,"div",14)(383,"h4",15),e(384,"Inline Text Elements"),i(),t(385,"div",16)(386,"div",17)(387,"label",63),e(388,"Show Code"),i(),t(389,"input",64),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(390,"div",6)(391,"p",9),e(392,"Styling for inline HTML5 elements."),i(),t(393,"div",7)(394,"p",65),e(395," Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. "),i(),t(396,"p"),e(397,"You can use the mark tag to "),t(398,"mark"),e(399,"highlight"),i(),e(400," text."),i(),t(401,"p")(402,"del"),e(403,"This line of text is meant to be treated as deleted text."),i()(),t(404,"p")(405,"s"),e(406,"This line of text is meant to be treated as no longer accurate."),i()(),t(407,"p")(408,"ins"),e(409,"This line of text is meant to be treated as an addition to the document."),i()(),t(410,"p")(411,"u"),e(412,"This line of text will render as underlined"),i()(),t(413,"p")(414,"small"),e(415,"This line of text is meant to be treated as fine print."),i()(),t(416,"p")(417,"strong"),e(418,"This line rendered as bold text."),i()(),t(419,"p",12)(420,"em"),e(421,"This line rendered as italicized text."),i()()(),t(422,"div",22)(423,"pre",32)(424,"code"),e(425,'<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>'),i(),e(426,`

`),t(427,"code"),e(428,"<p>You can use the mark tag to <mark>highlight</mark> text.</p>"),i(),e(429,`

`),t(430,"code"),e(431,"<p><del>This line of text is meant to be treated as deleted text.</del></p>"),i(),e(432,`

`),t(433,"code"),e(434,"<p><s>This line of text is meant to be treated as no longer accurate.</s></p>"),i(),e(435,`

`),t(436,"code"),e(437,"<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>"),i(),e(438,`

`),t(439,"code"),e(440,"<p><u>This line of text will render as underlined</u></p>"),i(),e(441,`

`),t(442,"code"),e(443,"<p><small>This line of text is meant to be treated as fine print.</small></p>"),i(),e(444,`

`),t(445,"code"),e(446,"<p><strong>This line rendered as bold text.</strong></p>"),i(),e(447,`

`),t(448,"code"),e(449,"<p><em>This line rendered as italicized text.</em></p>"),i()()()()()(),t(450,"div",2)(451,"div",3)(452,"div",14)(453,"h4",15),e(454,"Unstyled List"),i(),t(455,"div",16)(456,"div",17)(457,"label",66),e(458,"Show Code"),i(),t(459,"input",67),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(460,"div",6)(461,"p",9),e(462,"Use "),t(463,"code"),e(464,"list-unstyled"),i(),e(465," class Remove the default list-style and left margin on list items (immediate children only). "),t(466,"strong"),e(467,"This only applies to immediate children list items"),i(),e(468,", meaning you will need to add the class for any nested lists."),i(),t(469,"div",7)(470,"ul",68)(471,"li"),e(472,"Integer molestie lorem at massa"),i(),t(473,"li"),e(474,"Nulla volutpat aliquam velit "),t(475,"ul",69)(476,"li"),e(477,"Phasellus iaculis neque"),i(),t(478,"li"),e(479,"Purus sodales ultricies"),i(),t(480,"li"),e(481,"Vestibulum laoreet porttitor sem"),i()()(),t(482,"li"),e(483,"Faucibus porta lacus fringilla vel"),i()()(),t(484,"div",22)(485,"pre",70)(486,"code"),e(487,`<ul class="list-unstyled">
<li>Integer molestie lorem at massa</li>
<li>Nulla volutpat aliquam velit
<ul>
<li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li>
<li>Vestibulum laoreet porttitor sem</li>
</ul>
</li>
<li>Faucibus porta lacus fringilla vel</li>
</ul>`),i()()()()(),t(488,"div",3)(489,"div",14)(490,"h4",15),e(491,"Inline List"),i(),t(492,"div",16)(493,"div",17)(494,"label",71),e(495,"Show Code"),i(),t(496,"input",72),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(497,"div",6)(498,"p",9),e(499,"Use "),t(500,"code"),e(501,"list-inline"),i(),e(502," and "),t(503,"code"),e(504,"list-inline-item"),i(),e(505," class combination to remove a list\u2019s bullets and apply some light margin. "),i(),t(506,"div",7)(507,"ul",73)(508,"li",74),e(509,"Lorem ipsum"),i(),t(510,"li",74),e(511,"Phasellus iaculis"),i(),t(512,"li",74),e(513,"Nulla volutpat"),i()()(),t(514,"div",22)(515,"pre",32)(516,"code"),e(517,`<ul class="list-inline">
<li class="list-inline-item">Lorem ipsum</li>
<li class="list-inline-item">Phasellus iaculis</li>
<li class="list-inline-item">Nulla volutpat</li>
</ul>`),i()()()()()()(),t(518,"div",1)(519,"div",75)(520,"div",3)(521,"div",14)(522,"h4",15),e(523,"Description List Alignment"),i(),t(524,"div",16)(525,"div",17)(526,"label",76),e(527,"Show Code"),i(),t(528,"input",77),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(529,"div",78)(530,"p",9),e(531,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),t(532,"code"),e(533,".text-truncate"),i(),e(534," class to truncate the text with an ellipsis."),i(),t(535,"div",7)(536,"dl",79)(537,"dt",80),e(538,"Description lists"),i(),t(539,"dd",81),e(540,"A description list is perfect for defining terms."),i(),t(541,"dt",80),e(542,"Euismod"),i(),t(543,"dd",81),e(544,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),i(),t(545,"dd",82),e(546,"Donec id elit non mi porta gravida at eget metus."),i(),t(547,"dt",80),e(548,"Malesuada porta"),i(),t(549,"dd",81),e(550,"Etiam porta sem malesuada magna mollis euismod."),i(),t(551,"dt",83),e(552,"Truncated term is truncated"),i(),t(553,"dd",81),e(554,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),i(),t(555,"dt",80),e(556,"Nesting"),i(),t(557,"dd",84)(558,"dl",79)(559,"dt",85),e(560,"Nested definition list"),i(),t(561,"dd",86),e(562,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc. "),i()()()()(),t(563,"div",22)(564,"pre",23)(565,"code"),e(566,`<dl class="row mb-0">
<dt class="col-sm-3">Description lists</dt>
<dd class="col-sm-9">A description list is perfect for defining terms.</dd>

<dt class="col-sm-3">Euismod</dt>
<dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
<dd class="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

<dt class="col-sm-3">Malesuada porta</dt>
<dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

<dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
<dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

<dt class="col-sm-3">Nesting</dt>
<dd class="col-sm-9 mb-0">
<dl class="row mb-0">
<dt class="col-sm-4">Nested definition list</dt>
<dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
</dl>
</dd>
</dl>`),i()()()()()()(),t(567,"div",1)(568,"div",2)(569,"div",3)(570,"div",14)(571,"h4",15),e(572,"Text Wrapping and Overflow"),i(),t(573,"div",16)(574,"div",17)(575,"label",87),e(576,"Show Code"),i(),t(577,"input",88),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(578,"div",6),n(579,"p"),t(580,"div",7)(581,"div")(582,"p",9),e(583,"Use "),t(584,"code"),e(585,"text-wrap"),i(),e(586," class to wrap the text."),i(),t(587,"div",89),e(588," This text should wrap. "),i()(),t(589,"div",90)(590,"p",9),e(591,"Use "),t(592,"code"),e(593,"text-nowrap"),i(),e(594," class to prevent text from wrapping."),i(),t(595,"div",91),e(596," This text should overflow the parent. "),i()()(),t(597,"div",22)(598,"pre",32)(599,"code"),e(600,`<!-- Text Wrap -->
<div class="badge bg-primary text-wrap" style="width: 6rem;">
This text should wrap.
</div>`),i(),e(601,`

`),t(602,"code"),e(603,`<!-- Text nowrap -->
<div class="text-nowrap border bg-light mt-3" style="width: 8rem;">
This text should overflow the parent.
</div>`),i()()()()(),t(604,"div",3)(605,"div",14)(606,"h4",15),e(607,"Word Break"),i(),t(608,"div",16)(609,"div",17)(610,"label",92),e(611,"Show Code"),i(),t(612,"input",93),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(613,"div",6)(614,"p",9),e(615,"Use "),t(616,"code"),e(617,"text-break"),i(),e(618," class to prevent long strings of text from breaking your components' layout."),i(),t(619,"div",7)(620,"div")(621,"p",94),e(622," mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm "),i()()(),t(623,"div",22)(624,"pre",32)(625,"code"),e(626,'<p class="text-break mb-0">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>;'),i()()()()()(),t(627,"div",2)(628,"div",3)(629,"div",14)(630,"h4",15),e(631,"Font size"),i(),t(632,"div",16)(633,"div",17)(634,"label",95),e(635,"Show Code"),i(),t(636,"input",96),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(637,"div",6)(638,"p",9),e(639,"Use "),t(640,"code"),e(641,"fs-1"),i(),e(642,", "),t(643,"code"),e(644,"fs-2"),i(),e(645,", "),t(646,"code"),e(647,"fs-3"),i(),e(648,", "),t(649,"code"),e(650,"fs-4"),i(),e(651,", "),t(652,"code"),e(653,"fs-5"),i(),e(654,", or "),t(655,"code"),e(656,"fs-6"),i(),e(657,", class to change the font-size respectively. "),i(),t(658,"div",7)(659,"p",97),e(660,".fs-1 text"),i(),t(661,"p",98),e(662,".fs-2 text"),i(),t(663,"p",99),e(664,".fs-3 text"),i(),t(665,"p",100),e(666,".fs-4 text"),i(),t(667,"p",101),e(668,".fs-5 text"),i(),t(669,"p",102),e(670,".fs-6 text"),i()(),t(671,"div",22)(672,"pre",32)(673,"code"),e(674,'<p class="fs-1">.fs-1 text</p>'),i(),e(675,`

`),t(676,"code"),e(677,'<p class="fs-2">.fs-2 text</p>'),i(),e(678,`

`),t(679,"code"),e(680,'<p class="fs-3">.fs-3 text</p>'),i(),e(681,`

`),t(682,"code"),e(683,'<p class="fs-4">.fs-4 text</p>'),i(),e(684,`

`),t(685,"code"),e(686,'<p class="fs-5">.fs-5 text</p>'),i(),e(687,`

`),t(688,"code"),e(689,'<p class="fs-6">.fs-6 text</p>'),i()()()()()()(),t(690,"div",1)(691,"div",2)(692,"div",3)(693,"div",14)(694,"h4",15),e(695,"Font weight and italics"),i(),t(696,"div",16)(697,"div",17)(698,"label",103),e(699,"Show Code"),i(),t(700,"input",104),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(701,"div",6)(702,"p",9),e(703,"Use "),t(704,"code"),e(705,"fst-"),i(),e(706,"with modifier class to change font-style and Use "),t(707,"code"),e(708,"fw-"),i(),e(709,"with modifier class to change font-weight. "),i(),t(710,"div",7)(711,"p",105),e(712,"Bold text."),i(),t(713,"p",106),e(714,"Bolder weight text (relative to the parent element)."),i(),t(715,"p",107),e(716,"Semibold weight text."),i(),t(717,"p",108),e(718,"Normal weight text."),i(),t(719,"p",109),e(720,"Light weight text."),i(),t(721,"p",110),e(722,"Lighter weight text (relative to the parent element)."),i(),t(723,"p",111),e(724,"Italic text."),i(),t(725,"p",112),e(726,"Text with normal font style"),i()(),t(727,"div",22)(728,"pre",32)(729,"code"),e(730,'<p class="fw-bold">Bold text.</p>'),i(),e(731,`

`),t(732,"code"),e(733,'<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>'),i(),e(734,`

`),t(735,"code"),e(736,'<p class="fw-normal">Normal weight text.</p>'),i(),e(737,`

`),t(738,"code"),e(739,'<p class="fw-light">Light weight text.</p>'),i(),e(740,`

`),t(741,"code"),e(742,'<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>'),i(),e(743,`

`),t(744,"code"),e(745,'<p class="fst-italic">Italic text.</p>'),i(),e(746,`

`),t(747,"code"),e(748,'<p class="fst-normal mb-0">Text with normal font style</p>'),i()()()()()(),t(749,"div",2)(750,"div",3)(751,"div",14)(752,"h4",15),e(753,"Line height"),i(),t(754,"div",16)(755,"div",17)(756,"label",113),e(757,"Show Code"),i(),t(758,"input",114),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(759,"div",6)(760,"p",9),e(761,"Use "),t(762,"code"),e(763,"lh-"),i(),e(764," with modifier class to change the line height of an element. "),i(),t(765,"div",7)(766,"p",115),e(767,"This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API."),i(),t(768,"p",116),e(769,"This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API."),i(),t(770,"p",117),e(771,"This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element."),i(),t(772,"p",118),e(773,"This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element."),i()(),t(774,"div",22)(775,"pre",32)(776,"code"),e(777,'<p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>'),i(),e(778,`

`),t(779,"code"),e(780,'<p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>'),i(),e(781,`

`),t(782,"code"),e(783,'<p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.</p>'),i(),e(784,`

`),t(785,"code"),e(786,'<p class="lh-lg mb-0">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.</p>'),i()()()()()()(),t(787,"div",1)(788,"div",2)(789,"div",3)(790,"div",14)(791,"h4",15),e(792,"Text Transform"),i(),t(793,"div",16)(794,"div",17)(795,"label",119),e(796,"Show Code"),i(),t(797,"input",120),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(798,"div",6)(799,"p",9),e(800,"Use "),t(801,"code"),e(802,"text-lowercase"),i(),e(803,", "),t(804,"code"),e(805,"text-uppercase"),i(),e(806,", or "),t(807,"code"),e(808,"text-capitalize"),i(),e(809," to transform the text. "),i(),t(810,"div",7)(811,"p",121),e(812,"Lowercased text."),i(),t(813,"p",122),e(814,"Uppercased text."),i(),t(815,"p",123),e(816,"CapiTaliZed text."),i()(),t(817,"div",22)(818,"pre",32)(819,"code"),e(820,'<p class="text-lowercase">Lowercased text.</p>'),i(),e(821,`

`),t(822,"code"),e(823,'<p class="text-uppercase">Uppercased text.</p>'),i(),e(824,`

`),t(825,"code"),e(826,'<p class="text-capitalize mb-0">CapiTaliZed text.</p>'),i()()()()()(),t(827,"div",2)(828,"div",3)(829,"div",14)(830,"h4",15),e(831,"Text Decoration"),i(),t(832,"div",16)(833,"div",17)(834,"label",124),e(835,"Show Code"),i(),t(836,"input",125),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(837,"div",6)(838,"p",9),e(839,"Use "),t(840,"code"),e(841,"text-decoration-underline"),i(),e(842,", "),t(843,"code"),e(844,"text-decoration-line-through"),i(),e(845,", or "),t(846,"code"),e(847,"text-decoration-none"),i(),e(848," class to decorate text in components respectively. "),i(),t(849,"div",7)(850,"p",126),e(851,"This text has a line underneath it."),i(),t(852,"p",127),e(853,"This text has a line going through it."),i(),t(854,"a",128),e(855,"This link has its text decoration removed"),i()(),t(856,"div",22)(857,"pre",32)(858,"code"),e(859,'<p class="text-decoration-underline">This text has a line underneath it.</p>'),i(),e(860,`

`),t(861,"code"),e(862,'<p class="text-decoration-line-through">This text has a line going through it.</p>'),i(),e(863,`

`),t(864,"code"),e(865,'<a href="#" class="text-decoration-none">This link has its text decoration removed</a>'),i()()()()()()(),t(866,"div",1)(867,"div",2)(868,"div",3)(869,"div",14)(870,"h4",15),e(871,"Text Truncation"),i(),t(872,"div",16)(873,"div",17)(874,"label",129),e(875,"Show Code"),i(),t(876,"input",130),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(877,"div",6)(878,"p",9),e(879,"Use "),t(880,"code"),e(881,"text-truncate"),i(),e(882," class to truncate the text with an ellipsis. Requires "),t(883,"code"),e(884,"display: inline-block"),i(),e(885," or "),t(886,"code"),e(887,"display: block"),i(),e(888,"."),i(),t(889,"div",7)(890,"div",1)(891,"div",131),e(892," This text is quite long, and will be truncated once displayed. "),i()(),t(893,"span",132),e(894," This text is quite long, and will be truncated once displayed. "),i()(),t(895,"div",22)(896,"pre",32)(897,"code"),e(898,`<!-- Block level -->
<div class="row">
<div class="col-2 text-truncate">
This text is quite long, and will be truncated once displayed.
</div>
</div>`),i(),e(899,`

`),t(900,"code"),e(901,`<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
This text is quite long, and will be truncated once displayed.
</span>`),i()()()()()(),t(902,"div",2)(903,"div",3)(904,"div",14)(905,"h4",15),e(906,"Visibility"),i(),t(907,"div",16)(908,"div",17)(909,"label",133),e(910,"Show Code"),i(),t(911,"input",134),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(912,"div",6)(913,"p",9),e(914,"Use "),t(915,"code"),e(916,"visible"),i(),e(917," or "),t(918,"code"),e(919,"invisible"),i(),e(920," class to show or to hide elements respectively."),i(),t(921,"div",7)(922,"div",135),e(923,"text visible Lorem ipsum dolor sit amet"),i(),t(924,"div",136),e(925,"text invisible Lorem ipsum dolor sit amet"),i()(),t(926,"div",22)(927,"pre",32)(928,"code"),e(929,'<div class="visible">text visible Lorem ipsum dolor sit amet</div>'),i(),e(930,`

`),t(931,"code"),e(932,'<div class="invisible">text invisible Lorem ipsum dolor sit amet</div>'),i()()()()()()(),t(933,"div",1)(934,"div",33)(935,"div",3)(936,"div",14)(937,"h4",15),e(938,"Clearfix"),i(),t(939,"div",16)(940,"div",17)(941,"label",137),e(942,"Show Code"),i(),t(943,"input",138),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(944,"div",6)(945,"p",9),e(946,"Use "),t(947,"code"),e(948,"clearfix"),i(),e(949," class to clear/set floated content within a container. "),i(),t(950,"div",7)(951,"div",139)(952,"button",140),e(953,"Example Button floated left"),i(),t(954,"button",141),e(955,"Example Button floated right"),i()()(),t(956,"div",22)(957,"pre",32)(958,"code"),e(959,`<div class="bg-light clearfix">
<button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
<button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
</div>`),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var Fi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Lists",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-list"]],standalone:!1,decls:757,vars:1,consts:[["title","Lists",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-4","col-xl-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","basiclist-showcode",1,"form-label","text-muted"],["type","checkbox","id","basiclist-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"list-group"],[1,"list-group-item"],[1,"ri-bill-line","align-middle","me-2","float-start"],[1,"ri-file-copy-2-line","align-middle","me-2","float-start"],[1,"ri-question-answer-line","align-middle","me-2","float-start"],[1,"ri-secure-payment-line","align-middle","me-2","float-start"],[1,"d-none","code-view"],[1,"language-markup"],["for","listactive-showcode",1,"form-label","text-muted"],["type","checkbox","id","listactive-showcode",1,"form-check-input","code-switcher",3,"click"],["aria-current","true",1,"list-group-item","active"],["for","listdisabled-showcode",1,"form-label","text-muted"],["type","checkbox","id","listdisabled-showcode",1,"form-check-input","code-switcher",3,"click"],["aria-disabled","true",1,"list-group-item","disabled"],[1,"d-flex","align-items-center"],["src","assets/images/users/avatar-1.jpg","alt","",1,"avatar-xs","rounded-circle"],[1,"flex-grow-1","ms-2"],["src","assets/images/users/avatar-2.jpg","alt","",1,"avatar-xs","rounded-circle"],["src","assets/images/users/avatar-3.jpg","alt","",1,"avatar-xs","rounded-circle"],[1,"language-markup",2,"height","215px"],["for","listlink-showcode",1,"form-label","text-muted"],["type","checkbox","id","listlink-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"list-group","list-group-fill-success"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","active"],[1,"ri-download-2-fill","align-middle","me-2","float-start"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action"],[1,"ri-shield-check-line","align-middle","me-2","float-start"],[1,"ri-database-2-line","align-middle","me-2","float-start"],[1,"ri-notification-3-line","align-middle","me-2","float-start"],["href","javascript:void(0);","tabindex","-1",1,"list-group-item","list-group-item-action","disabled"],[1,"ri-moon-fill","align-middle","me-2","float-start"],["for","listbutton-showcode",1,"form-label","text-muted"],["type","checkbox","id","listbutton-showcode",1,"form-check-input","code-switcher",3,"click"],["type","button","aria-current","true",1,"list-group-item","list-group-item-action","active"],[1,"ri-reply-fill","align-middle","me-2","float-start"],["type","button",1,"list-group-item","list-group-item-action"],[1,"ri-share-forward-fill","align-middle","me-2","float-start"],[1,"ri-equalizer-line","align-middle","me-2","float-start"],[1,"ri-delete-bin-5-line","align-middle","me-2","float-start"],["type","button","disabled","",1,"list-group-item","list-group-item-action"],[1,"ri-forbid-line","align-middle","me-2","float-start"],["for","flushlist-showcode",1,"form-label","text-muted"],["type","checkbox","id","flushlist-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"list-group","list-group-flush"],[1,"col-xl-12"],["for","horilist-showcode",1,"form-label","text-muted"],["type","checkbox","id","horilist-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"list-group","list-group-horizontal-md","mb-3"],[1,"list-group","list-group-horizontal-md","justify-content-center","mb-3"],[1,"list-group","list-group-horizontal-md","justify-content-end"],[1,"language-markup",2,"height","275px"],["for","contextuallist-showcode",1,"form-label","text-muted"],["type","checkbox","id","contextuallist-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"list-group-item","list-group-item-primary"],[1,"list-group-item","list-group-item-secondary"],[1,"list-group-item","list-group-item-success"],[1,"list-group-item","list-group-item-danger"],[1,"list-group-item","list-group-item-warning"],[1,"list-group-item","list-group-item-info"],[1,"list-group-item","list-group-item-light"],[1,"list-group-item","list-group-item-dark"],["for","contextuallist-withlink-showcode",1,"form-label","text-muted"],["type","checkbox","id","contextuallist-withlink-showcode",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","list-group-item-primary"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","list-group-item-secondary"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","list-group-item-success"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","list-group-item-danger"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","list-group-item-warning"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","list-group-item-info"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","list-group-item-light"],["href","javascript:void(0);",1,"list-group-item","list-group-item-action","list-group-item-dark"],["for","colored-list-showcode",1,"form-label","text-muted"],["type","checkbox","id","colored-list-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"list-group-item","list-group-fill-primary"],[1,"list-group-item","list-group-fill-secondary"],[1,"list-group-item","list-group-fill-success"],[1,"list-group-item","list-group-fill-danger"],[1,"list-group-item","list-group-fill-warning"],[1,"list-group-item","list-group-fill-info"],[1,"list-group-item","list-group-fill-light"],[1,"list-group-item","list-group-fill-dark"],["for","customcontent-showcode",1,"form-label","text-muted"],["type","checkbox","id","customcontent-showcode",1,"form-check-input","code-switcher",3,"click"],["href","https://getbootstrap.com/docs/5.1/utilities/flex/"],[1,"float-end"],[1,"d-flex","mb-2","align-items-center"],["src","assets/images/users/avatar-1.jpg","alt","",1,"avatar-sm","rounded-circle"],[1,"flex-grow-1","ms-3"],[1,"list-title","fs-15","mb-1"],[1,"list-text","mb-0","fs-12"],[1,"list-text","mb-0"],["src","assets/images/users/avatar-2.jpg","alt","",1,"avatar-sm","rounded-circle"],["src","assets/images/users/avatar-3.jpg","alt","",1,"avatar-sm","rounded-circle"],["src","assets/images/users/avatar-4.jpg","alt","",1,"avatar-sm","rounded-circle"],[1,"language-markup",2,"height","300px"],["for","withbadgeslist-showcode",1,"form-label","text-muted"],["type","checkbox","id","withbadgeslist-showcode",1,"form-check-input","code-switcher",3,"click"],["href","https://getbootstrap.com/docs/5.1/utilities/"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","bg-success"],[1,"badge","bg-danger"],[1,"badge","bg-secondary"],[1,"language-markup",2,"height","200px"],["for","withcheckboxs-showcode",1,"form-label","text-muted"],["type","checkbox","id","withcheckboxs-showcode",1,"form-check-input","code-switcher",3,"click"],["type","checkbox","value","",1,"form-check-input","me-1"],["type","checkbox","value","","checked","",1,"form-check-input","me-1"],["for","withradios-showcode",1,"form-label","text-muted"],["type","checkbox","id","withradios-showcode",1,"form-check-input","code-switcher",3,"click"],["name","exampleRadios","type","radio","value","",1,"form-check-input","fs-14","mt-0","align-middle","me-1"],["name","exampleRadios","type","radio","value","","checked","",1,"form-check-input","fs-14","mt-0","align-middle","me-1"],["for","withbadgeslist2-showcode",1,"form-label","text-muted"],["type","checkbox","id","withbadgeslist2-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"mdi","mdi-check-bold","align-middle","lh-1","me-2"],["for","withnumbered-showcode",1,"form-label","text-muted"],["type","checkbox","id","withnumbered-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"list-group","list-group-numbered"],["for","withcustomcontent-list-showcode",1,"form-label","text-muted"],["type","checkbox","id","withcustomcontent-list-showcode",1,"form-check-input","code-switcher",3,"click"],[2,"max-height","215px"],[1,"list-group","mb-1"],[1,"flex-grow-1"],[1,"d-flex"],[1,"flex-shrink-0","avatar-xs"],[1,"avatar-title","bg-danger-subtle","text-danger","rounded"],[1,"ri-netflix-fill"],[1,"flex-shrink-0","ms-2"],[1,"fs-14","mb-0"],[1,"text-danger"],[1,"avatar-title","bg-success-subtle","text-success","rounded"],[1,"ri-spotify-fill"],[1,"text-success"],["src","assets/images/users/avatar-2.jpg","alt","",1,"avatar-xs","rounded"],[1,"avatar-title","bg-secondary-subtle","text-secondary","rounded"],[1,"ri-paypal-fill"],["src","assets/images/users/avatar-3.jpg","alt","",1,"avatar-xs","rounded"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Default List"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"Use "),t(15,"code"),e(16,"list-group"),i(),e(17," class in an unordered list and "),t(18,"code"),e(19,"list-group-item"),i(),e(20," class to create a default list group. "),i(),t(21,"div",12)(22,"ul",13)(23,"li",14),n(24,"i",15),e(25," Send the billing agreement"),i(),t(26,"li",14),n(27,"i",16),e(28,"Send over all the documentation."),i(),t(29,"li",14),n(30,"i",17),e(31,"Meeting with daron to review the intake form"),i(),t(32,"li",14),n(33,"i",18),e(34,"Check uikings theme and give customer support"),i()()(),t(35,"div",19)(36,"pre",20)(37,"code"),e(38,`<ul class="list-group">
<li class="list-group-item"><i class="ri-bill-line align-middle me-2"></i> Send the billing agreement</li>
<li class="list-group-item"><i class="ri-file-copy-2-line align-middle me-2"></i>Send over all the documentation.</li>
<li class="list-group-item"><i class="ri-question-answer-line align-middle me-2"></i>Meeting with daron to review the intake form</li>
<li class="list-group-item"><i class="ri-secure-payment-line align-middle me-2"></i>Check uikings theme and give customer support</li>
</ul>`),i()()()()()(),t(39,"div",2)(40,"div",3)(41,"div",4)(42,"h4",5),e(43,"Active Item"),i(),t(44,"div",6)(45,"div",7)(46,"label",21),e(47,"Show Code"),i(),t(48,"input",22),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(49,"div",10)(50,"p",11),e(51,"Use "),t(52,"code"),e(53,"active"),i(),e(54," class to "),t(55,"code"),e(56,"list-group-item"),i(),e(57," to indicate the current active selection."),i(),t(58,"div",12)(59,"ul",13)(60,"li",23),e(61,"Send the billing agreement"),i(),t(62,"li",14),e(63,"Send over all the documentation."),i(),t(64,"li",14),e(65,"Meeting with daron to review the intake form"),i(),t(66,"li",14),e(67,"Check uikings theme and give customer support"),i(),t(68,"li",14),e(69,"Start making a presentation"),i()()(),t(70,"div",19)(71,"pre",20)(72,"code"),e(73,`<ul class="list-group">
<li class="list-group-item active" aria-current="true">Send the billing agreement</li>
<li class="list-group-item">Send over all the documentation.</li>
<li class="list-group-item">Meeting with daron to review the intake form</li>
<li class="list-group-item">Check uikings theme and give customer support</li>
<li class="list-group-item">Start making a presentation</li>
</ul>`),i()()()()()(),t(74,"div",2)(75,"div",3)(76,"div",4)(77,"h4",5),e(78,"Disabled Items"),i(),t(79,"div",6)(80,"div",7)(81,"label",24),e(82,"Show Code"),i(),t(83,"input",25),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(84,"div",10)(85,"p",11),e(86,"Use "),t(87,"code"),e(88,"disabled"),i(),e(89," class to "),t(90,"code"),e(91,"list-group-item"),i(),e(92," to make it "),t(93,"em"),e(94,"appear"),i(),e(95," disabled. "),i(),t(96,"div",12)(97,"ul",13)(98,"li",26)(99,"div",27)(100,"div",6),n(101,"img",28),i(),t(102,"div",29),e(103," James Ballard "),i()()(),t(104,"li",14)(105,"div",27)(106,"div",6),n(107,"img",30),i(),t(108,"div",29),e(109," Nancy Martino "),i()()(),t(110,"li",14)(111,"div",27)(112,"div",6),n(113,"img",31),i(),t(114,"div",29),e(115," Henry Baird "),i()()(),t(116,"li",14)(117,"div",27)(118,"div",6),n(119,"img",31),i(),t(120,"div",29),e(121," Erica Kernan "),i()()()()(),t(122,"div",19)(123,"pre",32)(124,"code"),e(125,`<ul class="list-group">
<li class="list-group-item disabled" aria-disabled="true">
<div class="d-flex align-items-center">
<div class="flex-shrink-0">
<img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle">
</div>
<div class="flex-grow-1 ms-2">
James Ballard
</div>
</div>
</li>
<li class="list-group-item">
<div class="d-flex align-items-center">
<div class="flex-shrink-0">
<img src="assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle">
</div>
<div class="flex-grow-1 ms-2">
Nancy Martino
</div>
</div>
</li>
<li class="list-group-item">
<div class="d-flex align-items-center">
<div class="flex-shrink-0">
<img src="assets/images/users/avatar-3.jpg" alt="" class="avatar-xs rounded-circle">
</div>
<div class="flex-grow-1 ms-2">
Henry Baird
</div>
</div>
</li>
<li class="list-group-item">
<div class="d-flex align-items-center">
<div class="flex-shrink-0">
<img src="assets/images/users/avatar-3.jpg" alt="" class="avatar-xs rounded-circle">
</div>
<div class="flex-grow-1 ms-2">
Erica Kernan
</div>
</div>
</li>
</ul>`),i()()()()()(),t(126,"div",2)(127,"div",3)(128,"div",4)(129,"h4",5),e(130,"List with Link"),i(),t(131,"div",6)(132,"div",7)(133,"label",33),e(134,"Show Code"),i(),t(135,"input",34),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(136,"div",10)(137,"p",11),e(138,"Use "),t(139,"code"),e(140,"<a>"),i(),e(141," tag to create actionable list group items with hover, disabled, and active states by adding list-group-item-action."),i(),t(142,"div",12)(143,"div",35)(144,"a",36),n(145,"i",37),e(146,"Category Download"),i(),t(147,"a",38),n(148,"i",39),e(149,"Security Access"),i(),t(150,"a",38),n(151,"i",40),e(152,"Storage folder"),i(),t(153,"a",38),n(154,"i",41),e(155,"Push Notification"),i(),t(156,"a",42),n(157,"i",43),e(158,"Dark Mode"),i()()(),t(159,"div",19)(160,"pre",20)(161,"code"),e(162,`<div class="list-group list-group-fill-success">
<a href="#" class="list-group-item list-group-item-action active"><i class="ri-download-2-fill align-middle me-2"></i>Category Download</a>
<a href="#" class="list-group-item list-group-item-action"><i class="ri-shield-check-line align-middle me-2"></i>Security Access</a>
<a href="#" class="list-group-item list-group-item-action"><i class="ri-database-2-line align-middle me-2"></i>Storage folder</a>
<a href="#" class="list-group-item list-group-item-action"><i class="ri-notification-3-line align-middle me-2"></i>Push Notification</a>
<a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true"><i class="ri-moon-fill align-middle me-2"></i>Dark Mode</a>
</div>`),i()()()()()(),t(163,"div",2)(164,"div",3)(165,"div",4)(166,"h4",5),e(167,"List with Button"),i(),t(168,"div",6)(169,"div",7)(170,"label",44),e(171,"Show Code"),i(),t(172,"input",45),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(173,"div",10)(174,"p",11),e(175,"Use "),t(176,"code"),e(177,"<button>"),i(),e(178," tag to create actionable list group items with hover, disabled, and active states by adding list-group-item-action."),i(),t(179,"div",12)(180,"div",13)(181,"button",46),n(182,"i",47),e(183,"Reply"),i(),t(184,"button",48),n(185,"i",49),e(186,"Forward Message"),i(),t(187,"button",48),n(188,"i",50),e(189,"Filter Message"),i(),t(190,"button",48),n(191,"i",51),e(192,"Delete Message"),i(),t(193,"button",52),n(194,"i",53),e(195,'Block "Mark Spencer'),i()()(),t(196,"div",19)(197,"pre",20)(198,"code"),e(199,`<div class="list-group">
<button type="button" class="list-group-item list-group-item-action active" aria-current="true"><i class="ri-reply-fill align-middle me-2"></i>Reply</button>
<button type="button" class="list-group-item list-group-item-action"><i class="ri-share-forward-fill align-middle me-2"></i>Forward Message</button>
<button type="button" class="list-group-item list-group-item-action"><i class="ri-equalizer-line align-middle me-2"></i>Filter Message</button>
<button type="button" class="list-group-item list-group-item-action"><i class="ri-delete-bin-5-line align-middle me-2"></i>Delete Message</button>
<button type="button" class="list-group-item list-group-item-action" disabled><i class="ri-forbid-line align-middle me-2"></i>Block "Mark Spencer</button>
</div>`),i()()()()()(),t(200,"div",2)(201,"div",3)(202,"div",4)(203,"h4",5),e(204,"Flush List"),i(),t(205,"div",6)(206,"div",7)(207,"label",54),e(208,"Show Code"),i(),t(209,"input",55),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(210,"div",10)(211,"p",11),e(212,"Use "),t(213,"code"),e(214,"list-group-flush"),i(),e(215," class to remove some borders and rounded corners to render list group items."),i(),t(216,"div",12)(217,"ul",56)(218,"li",14),e(219,"Send the billing agreement"),i(),t(220,"li",14),e(221,"Send over all the documentation."),i(),t(222,"li",14),e(223,"Meeting with daron to review the intake form"),i(),t(224,"li",14),e(225,"Check uikings theme and give customer support"),i(),t(226,"li",14),e(227,"Start making a presentation"),i()()(),t(228,"div",19)(229,"pre",20)(230,"code"),e(231,`<ul class="list-group list-group-flush">
<li class="list-group-item">Send the billing agreement</li>
<li class="list-group-item">Send over all the documentation.</li>
<li class="list-group-item">Meeting with daron to review the intake form</li>
<li class="list-group-item">Check uikings theme and give customer support</li>
<li class="list-group-item">Start making a presentation</li>
</ul>`),i()()()()()()(),t(232,"div",1)(233,"div",57)(234,"div",3)(235,"div",4)(236,"h4",5),e(237,"Horizontal List"),i(),t(238,"div",6)(239,"div",7)(240,"label",58),e(241,"Show Code"),i(),t(242,"input",59),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(243,"div",10)(244,"p",11),e(245,"Use "),t(246,"code"),e(247,"list-group-horizontal"),i(),e(248," class to change the layout of list group items from vertical to horizontal across all breakpoints."),i(),t(249,"div",12)(250,"ul",60)(251,"li",14),e(252,"Inbox"),i(),t(253,"li",14),e(254,"Work"),i(),t(255,"li",14),e(256,"Shopping"),i()(),t(257,"ul",61)(258,"li",14),e(259,"Inbox"),i(),t(260,"li",14),e(261,"Work"),i(),t(262,"li",14),e(263,"Shopping"),i()(),t(264,"ul",62)(265,"li",14),e(266,"Inbox"),i(),t(267,"li",14),e(268,"Work"),i(),t(269,"li",14),e(270,"Shopping"),i()()(),t(271,"div",19)(272,"pre",63)(273,"code"),e(274,`<!-- Start Alignment -->
<ul class="list-group list-group-horizontal-md">
<li class="list-group-item">Inbox</li>
<li class="list-group-item">Work</li>
<li class="list-group-item">Shopping</li>
</ul>`),i(),e(275,`

`),t(276,"code"),e(277,`<!-- Center Alignment -->
<ul class="list-group list-group-horizontal-md justify-content-center">
<li class="list-group-item">Inbox</li>
<li class="list-group-item">Work</li>
<li class="list-group-item">Shopping</li>
</ul>`),i(),e(278,`

`),t(279,"code"),e(280,`<!-- Right Alignment -->
<ul class="list-group list-group-horizontal-md justify-content-end">
<li class="list-group-item">Inbox</li>
<li class="list-group-item">Work</li>
<li class="list-group-item">Shopping</li>
</ul>`),i()()()()()()(),t(281,"div",1)(282,"div",2)(283,"div",3)(284,"div",4)(285,"h4",5),e(286,"Contextual Classes"),i(),t(287,"div",6)(288,"div",7)(289,"label",64),e(290,"Show Code"),i(),t(291,"input",65),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(292,"div",10)(293,"p",11),e(294,"Use contextual classes to style list items with a stateful background and color. "),i(),t(295,"div",12)(296,"ul",13)(297,"li",14),e(298,"Dapibus ac facilisis in"),i(),t(299,"li",66),e(300,"A simple primary list group item"),i(),t(301,"li",67),e(302,"A simple secondary list group item"),i(),t(303,"li",68),e(304,"A simple success list group item"),i(),t(305,"li",69),e(306,"A simple danger list group item"),i(),t(307,"li",70),e(308,"A simple warning list group item"),i(),t(309,"li",71),e(310,"A simple info list group item"),i(),t(311,"li",72),e(312,"A simple light list group item"),i(),t(313,"li",73),e(314,"A simple dark list group item"),i()()(),t(315,"div",19)(316,"pre",20)(317,"code"),e(318,`<ul class="list-group">
<li class="list-group-item">Dapibus ac facilisis in</li>
<li class="list-group-item list-group-item-primary">A simple primary list group item</li>
<li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
<li class="list-group-item list-group-item-success">A simple success list group item</li>
<li class="list-group-item list-group-item-danger">A simple danger list group item</li>
<li class="list-group-item list-group-item-warning">A simple warning list group item</li>
<li class="list-group-item list-group-item-info">A simple info list group item</li>
<li class="list-group-item list-group-item-light">A simple light list group item</li>
<li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>`),i()()()()()(),t(319,"div",2)(320,"div",3)(321,"div",4)(322,"h4",5),e(323,"Contextual Classes with Link"),i(),t(324,"div",6)(325,"div",7)(326,"label",74),e(327,"Show Code"),i(),t(328,"input",75),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(329,"div",10)(330,"p",11),e(331,"Contextual classes also work with "),t(332,"code"),e(333,".list-group-item-action"),i(),e(334,". Note the addition of the hover styles here not present in the previous example."),i(),t(335,"div",12)(336,"div",13)(337,"a",38),e(338,"A simple default list group item"),i(),t(339,"a",76),e(340,"A simple primary list group item"),i(),t(341,"a",77),e(342,"A simple secondary list group item"),i(),t(343,"a",78),e(344,"A simple success list group item"),i(),t(345,"a",79),e(346,"A simple danger list group item"),i(),t(347,"a",80),e(348,"A simple warning list group item"),i(),t(349,"a",81),e(350,"A simple info list group item"),i(),t(351,"a",82),e(352,"A simple light list group item"),i(),t(353,"a",83),e(354,"A simple dark list group item"),i()()(),t(355,"div",19)(356,"pre",20)(357,"code"),e(358,`<div class="list-group">
<a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
</div>`),i()()()()()(),t(359,"div",2)(360,"div",3)(361,"div",4)(362,"h4",5),e(363,"Colored Lists"),i(),t(364,"div",6)(365,"div",7)(366,"label",84),e(367,"Show Code"),i(),t(368,"input",85),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(369,"div",10)(370,"p",11),e(371,"Use "),t(372,"code"),e(373,"list-group-fill-"),i(),e(374," with modifier class to style list items with a stateful background and color."),i(),t(375,"div",12)(376,"ul",13)(377,"li",14),e(378,"Dapibus ac facilisis in"),i(),t(379,"li",86),e(380,"A simple primary list group item"),i(),t(381,"li",87),e(382,"A simple secondary list group item"),i(),t(383,"li",88),e(384,"A simple success list group item"),i(),t(385,"li",89),e(386,"A simple danger list group item"),i(),t(387,"li",90),e(388,"A simple warning list group item"),i(),t(389,"li",91),e(390,"A simple info list group item"),i(),t(391,"li",92),e(392,"A simple light list group item"),i(),t(393,"li",93),e(394,"A simple dark list group item"),i()()(),t(395,"div",19)(396,"pre",20)(397,"code"),e(398,`<ul class="list-group">
<li class="list-group-item">Dapibus ac facilisis in</li>
<li class="list-group-item list-group-fill-primary">A simple primary list group item</li>
<li class="list-group-item list-group-fill-secondary">A simple secondary list group item</li>
<li class="list-group-item list-group-fill-success">A simple success list group item</li>
<li class="list-group-item list-group-fill-danger">A simple danger list group item</li>
<li class="list-group-item list-group-fill-warning">A simple warning list group item</li>
<li class="list-group-item list-group-fill-info">A simple info list group item</li>
<li class="list-group-item list-group-fill-light">A simple light list group item</li>
<li class="list-group-item list-group-fill-dark">A simple dark list group item</li>
</ul>`),i()()()()()()(),t(399,"div",1)(400,"div",57)(401,"div",3)(402,"div",4)(403,"h4",5),e(404,"Custom Content"),i(),t(405,"div",6)(406,"div",7)(407,"label",94),e(408,"Show Code"),i(),t(409,"input",95),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(410,"div",10)(411,"p",11),e(412,"Add nearly any HTML within, even for linked list groups like the one below, with the help of "),t(413,"a",96),e(414,"flexbox utilities"),i(),e(415,"."),i(),t(416,"div",12)(417,"div",13)(418,"a",36)(419,"div",97),e(420," Pending "),i(),t(421,"div",98)(422,"div",6),n(423,"img",99),i(),t(424,"div",100)(425,"h5",101),e(426,"Charlie Pritchard"),i(),t(427,"p",102),e(428,"12 min Ago"),i()()(),t(429,"p",103),e(430,"They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid."),i()(),t(431,"a",38)(432,"div",97),e(433," Pending "),i(),t(434,"div",98)(435,"div",6),n(436,"img",104),i(),t(437,"div",100)(438,"h5",101),e(439,"Dominic Charlton"),i(),t(440,"p",102),e(441,"12 min Ago"),i()()(),t(442,"p",103),e(443,"Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin."),i()(),t(444,"a",38)(445,"div",97),e(446," Rejected "),i(),t(447,"div",98)(448,"div",6),n(449,"img",105),i(),t(450,"div",100)(451,"h5",101),e(452,"Declan Long"),i(),t(453,"p",102),e(454,"12 min Ago"),i()()(),t(455,"p",103),e(456,"Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything."),i()(),t(457,"a",38)(458,"div",97),e(459," Successful "),i(),t(460,"div",98)(461,"div",6),n(462,"img",106),i(),t(463,"div",100)(464,"h5",101),e(465,"Angela Bernier"),i(),t(466,"p",102),e(467,"5 days Ago"),i()()(),t(468,"p",103),e(469,"Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand the text, and sometimes that means applying a gaussian readable."),i()()()(),t(470,"div",19)(471,"pre",107)(472,"code"),e(473,`<div class="list-group">
<a href="javascript:void(0);" class="list-group-item list-group-item-action active">
<div class="float-end">
Pending
</div>
<div class="d-flex mb-2 align-items-center">
<div class="flex-shrink-0">
<img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle" />
</div>
<div class="flex-grow-1 ms-3">
<h5 class="list-title fs-15 mb-1">Charlie Pritchard</h5>
<p class="list-text mb-0 fs-12">12 min Ago</p>
</div>
</div>
<p class="list-text mb-0">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
</a>`),i(),e(474,`
`),t(475,"code"),e(476,`<a href="javascript:void(0);" class="list-group-item list-group-item-action">
<div class="float-end">
Pending
</div>
<div class="d-flex mb-2 align-items-center">
<div class="flex-shrink-0">
<img src="assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-circle" />
</div>
<div class="flex-grow-1 ms-3">
<h5 class="list-title fs-15 mb-1">Dominic Charlton</h5>
<p class="list-text mb-0 fs-12">12 min Ago</p>
</div>
</div>
<p class="list-text mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.</p>
</a>`),i(),e(477,`
`),t(478,"code"),e(479,`<a href="javascript:void(0);" class="list-group-item list-group-item-action">
<div class="float-end">
Rejected
</div>
<div class="d-flex mb-2 align-items-center">
<div class="flex-shrink-0">
<img src="assets/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded-circle" />
</div>
<div class="flex-grow-1 ms-3">
<h5 class="list-title fs-15 mb-1">Declan Long</h5>
<p class="list-text mb-0 fs-12">12 min Ago</p>
</div>
</div>
<p class="list-text mb-0">Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
</a>`),i(),e(480,`
`),t(481,"code"),e(482,`<a href="javascript:void(0);" class="list-group-item list-group-item-action">
<div class="float-end">
Successful
</div>
<div class="d-flex mb-2 align-items-center">
<div class="flex-shrink-0">
<img src="assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle" />
</div>
<div class="flex-grow-1 ms-3">
<h5 class="list-title fs-15 mb-1">Angela Bernier</h5>
<p class="list-text mb-0 fs-12">5 days Ago</p>
</div>
</div>
<p class="list-text mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand the text, and sometimes that means applying a gaussian readable.</p>
</a>
</div>`),i()()()()()()(),t(483,"div",1)(484,"div",2)(485,"div",3)(486,"div",4)(487,"h4",5),e(488,"List with Badges"),i(),t(489,"div",6)(490,"div",7)(491,"label",108),e(492,"Show Code"),i(),t(493,"input",109),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(494,"div",10)(495,"p",11),e(496,"Use badges to any list group item to show unread counts, activity, and more with the help of some "),t(497,"a",110),e(498,"utilities"),i(),e(499,"."),i(),t(500,"div",12)(501,"ul",13)(502,"li",111),e(503," Send the billing agreement "),t(504,"span",112),e(505,"High"),i()(),t(506,"li",111),e(507," Send over all the documentation "),i(),t(508,"li",111),e(509," Meeting with daron to review the intake form "),t(510,"span",113),e(511,"Low"),i()(),t(512,"li",111),e(513," Check uikings theme and give customer support "),t(514,"span",114),e(515,"Medium"),i()(),t(516,"li",111),e(517," Start making a presentation "),t(518,"span",112),e(519,"High"),i()()()(),t(520,"div",19)(521,"pre",115)(522,"code"),e(523,`<ul class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
Send the billing agreement <span class="badge bg-success">High</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
Send over all the documentation
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
Meeting with daron to review the intake form <span class="badge bg-danger">Low</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
Check uikings theme and give customer support <span class="badge bg-secondary">Medium</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
Start making a presentation <span class="badge bg-success">High</span>
</li>
</ul>`),i()()()()()(),t(524,"div",2)(525,"div",3)(526,"div",4)(527,"h4",5),e(528,"List with Checkboxs"),i(),t(529,"div",6)(530,"div",7)(531,"label",116),e(532,"Show Code"),i(),t(533,"input",117),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(534,"div",10)(535,"p",11),e(536,"Use Bootstrap\u2019s checkboxes within list group items and customize as needed. "),i(),t(537,"div",12)(538,"div",13)(539,"label",14),n(540,"input",118),e(541," Declined Payment "),i(),t(542,"label",14),n(543,"input",119),e(544," Delivery Error "),i(),t(545,"label",14),n(546,"input",119),e(547," Wrong Amount "),i(),t(548,"label",14),n(549,"input",118),e(550," Wrong Address "),i(),t(551,"label",14),n(552,"input",118),e(553," Wrong UX/UI Solution "),i()()(),t(554,"div",19)(555,"pre",63)(556,"code"),e(557,`<div class="list-group">
<label class="list-group-item">
<input class="form-check-input me-1" type="checkbox" value="">
Declined Payment
</label>
<label class="list-group-item">
<input class="form-check-input me-1" type="checkbox" value="" checked>
Delivery Error
</label>
<label class="list-group-item">
<input class="form-check-input me-1" type="checkbox" value="" checked>
Wrong Amount
</label>
<label class="list-group-item">
<input class="form-check-input me-1" type="checkbox" value="">
Wrong Address
</label>
<label class="list-group-item">
<input class="form-check-input me-1" type="checkbox" value="">
Wrong UX/UI Solution
</label>
</div>`),i()()()()()(),t(558,"div",2)(559,"div",3)(560,"div",4)(561,"h4",5),e(562,"List with Radios"),i(),t(563,"div",6)(564,"div",7)(565,"label",120),e(566,"Show Code"),i(),t(567,"input",121),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(568,"div",10)(569,"p",11),e(570,"Use Bootstrap\u2019s radios within list group items and customize as needed. "),i(),t(571,"div",12)(572,"div",13)(573,"label",14),n(574,"input",122),e(575," Declined Payment "),i(),t(576,"label",14),n(577,"input",123),e(578," Delivery Error "),i(),t(579,"label",14),n(580,"input",122),e(581," Wrong Amount "),i(),t(582,"label",14),n(583,"input",122),e(584," Wrong Address "),i(),t(585,"label",14),n(586,"input",122),e(587," Wrong UX/UI Solution "),i()()(),t(588,"div",19)(589,"pre",63)(590,"code"),e(591,`<div class="list-group">
<label class="list-group-item">
<input class="form-check-input me-1" name="exampleRadios" type="radio" value="">
Declined Payment
</label>
<label class="list-group-item">
<input class="form-check-input me-1" name="exampleRadios" type="radio" value="" checked>
Delivery Error
</label>
<label class="list-group-item">
<input class="form-check-input me-1" name="exampleRadios" type="radio" value="">
Wrong Amount
</label>
<label class="list-group-item">
<input class="form-check-input me-1" name="exampleRadios" type="radio" value="">
Wrong Address
</label>
<label class="list-group-item">
<input class="form-check-input me-1" name="exampleRadios" type="radio" value="">
Wrong UX/UI Solution
</label>
</div>`),i()()()()()(),t(592,"div",2)(593,"div",3)(594,"div",4)(595,"h4",5),e(596,"List with Icon"),i(),t(597,"div",6)(598,"div",7)(599,"label",124),e(600,"Show Code"),i(),t(601,"input",125),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(602,"div",10)(603,"p",11),e(604,"Use icons to any list group item to show icons to list group items."),i(),t(605,"div",12)(606,"ul",13)(607,"li",14),n(608,"i",126),e(609," Send the billing agreement"),i(),t(610,"li",14),n(611,"i",126),e(612," Send over all the documentation."),i(),t(613,"li",14),n(614,"i",126),e(615," Meeting with daron to review the intake form"),i(),t(616,"li",14),n(617,"i",126),e(618," Check uikings theme and give customer support"),i(),t(619,"li",14),n(620,"i",126),e(621," Start making a presentation"),i()()(),t(622,"div",19)(623,"pre",20)(624,"code"),e(625,`<ul class="list-group">
<li class="list-group-item"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send the billing agreement</li>
<li class="list-group-item"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send over all the documentation.</li>
<li class="list-group-item"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Meeting with daron to review the intake form</li>
<li class="list-group-item"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Check uikings theme and give customer support</li>
<li class="list-group-item"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Start making a presentation</li>
</ul>`),i()()()()()(),t(626,"div",2)(627,"div",3)(628,"div",4)(629,"h4",5),e(630,"List with Numbered"),i(),t(631,"div",6)(632,"div",7)(633,"label",127),e(634,"Show Code"),i(),t(635,"input",128),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(636,"div",10)(637,"p",11),e(638,"Use "),t(639,"code"),e(640,"list-group-numbered"),i(),e(641," class (optionally use an "),t(642,"code"),e(643,"<ol>"),i(),e(644," element) to show numbered list group items. "),i(),t(645,"div",12)(646,"ol",129)(647,"li",14),e(648,"Send the billing agreement"),i(),t(649,"li",14),e(650,"Send over all the documentation."),i(),t(651,"li",14),e(652,"Meeting with daron to review the intake form"),i(),t(653,"li",14),e(654,"Check uikings theme and give customer support"),i(),t(655,"li",14),e(656,"Start making a presentation"),i()()(),t(657,"div",19)(658,"pre",20)(659,"code"),e(660,`<ol class="list-group list-group-numbered">
<li class="list-group-item">Send the billing agreement</li>
<li class="list-group-item">Send over all the documentation.</li>
<li class="list-group-item">Meeting with daron to review the intake form</li>
<li class="list-group-item">Check uikings theme and give customer support</li>
<li class="list-group-item">Start making a presentation</li>
</ol>`),i()()()()()(),t(661,"div",2)(662,"div",3)(663,"div",4)(664,"h4",5),e(665,"Custom Content Lists"),i(),t(666,"div",6)(667,"div",7)(668,"label",130),e(669,"Show Code"),i(),t(670,"input",131),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(671,"div",10)(672,"p"),e(673,"Add nearly any HTML within, even for linked list groups like the one below, with the help of "),t(674,"a",96),e(675,"flexbox utilities"),i(),e(676,"."),i(),t(677,"div",12)(678,"ngx-simplebar",132)(679,"ul",133)(680,"li",14)(681,"div",27)(682,"div",134)(683,"div",135)(684,"div",136)(685,"div",137),n(686,"i",138),i()(),t(687,"div",139)(688,"h6",140),e(689,"Netfilx"),i(),t(690,"small",11),e(691,"2 min Ago"),i()()()(),t(692,"div",6)(693,"span",141),e(694,"-$25.50"),i()()()(),t(695,"li",14)(696,"div",27)(697,"div",134)(698,"div",135)(699,"div",136)(700,"div",142),n(701,"i",143),i()(),t(702,"div",139)(703,"h6",140),e(704,"Spotify"),i(),t(705,"small",11),e(706,"5 days Ago"),i()()()(),t(707,"div",6)(708,"span",144),e(709,"$48.25"),i()()()(),t(710,"li",14)(711,"div",27)(712,"div",134)(713,"div",135)(714,"div",6),n(715,"img",145),i(),t(716,"div",139)(717,"h6",140),e(718,"Emily Slater"),i(),t(719,"small",11),e(720,"8 days Ago"),i()()()(),t(721,"div",6)(722,"span",144),e(723,"$354.90"),i()()()(),t(724,"li",14)(725,"div",27)(726,"div",134)(727,"div",135)(728,"div",136)(729,"div",146),n(730,"i",147),i()(),t(731,"div",139)(732,"h6",140),e(733,"Paypal"),i(),t(734,"small",11),e(735,"1 month Ago"),i()()()(),t(736,"div",6)(737,"span",141),e(738,"-$12.22"),i()()()(),t(739,"li",14)(740,"div",27)(741,"div",134)(742,"div",135)(743,"div",6),n(744,"img",148),i(),t(745,"div",139)(746,"h6",140),e(747,"Harvey Wells"),i(),t(748,"small",11),e(749,"4 month Ago"),i()()()(),t(750,"div",6)(751,"span",144),e(752,"-$459.78"),i()()()()()()(),t(753,"div",19)(754,"pre",32)(755,"code"),e(756,`<div data-simplebar style="max-height: 215px;">
<ul class="list-group">
<li class="list-group-item">
<div class="d-flex align-items-center">
<div class="flex-grow-1">
<div class="d-flex">
<div class="flex-shrink-0 avatar-xs">
  <div class="avatar-title bg-danger-subtle text-danger rounded">
      <i class="ri-netflix-fill"></i>
  </div>
</div>
<div class="flex-shrink-0 ms-2">
  <h6 class="fs-14 mb-0">Netfilx</h6>
  <small class="text-muted">2 min Ago</small>
</div>
</div>
</div>
<div class="flex-shrink-0">
<span class="text-danger">-$25.50</span>
</div>
</div>
</li>
<li class="list-group-item">
<div class="d-flex align-items-center">
<div class="flex-grow-1">
<div class="d-flex">
<div class="flex-shrink-0 avatar-xs">
  <div class="avatar-title bg-success-subtle text-success rounded">
      <i class="ri-spotify-fill"></i>
  </div>
</div>
<div class="flex-shrink-0 ms-2">
  <h6 class="fs-14 mb-0">Spotify</h6>
  <small class="text-muted">5 days Ago</small>
</div>
</div>
</div>
<div class="flex-shrink-0">
<span class="text-success">$48.25</span>
</div>
</div>
</li>
<li class="list-group-item">
<div class="d-flex align-items-center">
<div class="flex-grow-1">
<div class="d-flex">
<div class="flex-shrink-0">
  <img src="assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded" />
</div>
<div class="flex-shrink-0 ms-2">
  <h6 class="fs-14 mb-0">Emily Slater</h6>
  <small class="text-muted">8 days Ago</small>
</div>
</div>
</div>
<div class="flex-shrink-0">
<span class="text-success">$354.90</span>
</div>
</div>
</li>
<li class="list-group-item">
<div class="d-flex align-items-center">
<div class="flex-grow-1">
<div class="d-flex">
<div class="flex-shrink-0 avatar-xs">
  <div class="avatar-title bg-secondary-subtle text-secondary rounded">
      <i class="ri-paypal-fill"></i>
  </div>
</div>
<div class="flex-shrink-0 ms-2">
  <h6 class="fs-14 mb-0">Paypal</h6>
  <small class="text-muted">1 month Ago</small>
</div>
</div>
</div>
<div class="flex-shrink-0">
<span class="text-danger">-$12.22</span>
</div>
</div>
</li>
<li class="list-group-item">
<div class="d-flex align-items-center">
<div class="flex-grow-1">
<div class="d-flex">
<div class="flex-shrink-0">
  <img src="assets/images/users/avatar-3.jpg" alt="" class="avatar-xs rounded" />
</div>
<div class="flex-shrink-0 ms-2">
  <h6 class="fs-14 mb-0">Harvey Wells</h6>
  <small class="text-muted">4 month Ago</small>
</div>
</div>
</div>
<div class="flex-shrink-0">
<span class="text-success">-$459.78</span>
</div>
</div>
</li>
</ul>
</div>`),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D,ze],encapsulation:2})}}return l})();function fo(l,u){l&1&&e(0,"Previous")}function So(l,u){l&1&&e(0,"Next")}function wo(l,u){l&1&&e(0,"Previous")}function Eo(l,u){l&1&&e(0,"Next")}function yo(l,u){l&1&&e(0,"Previous")}function ko(l,u){l&1&&e(0,"Next")}function _o(l,u){l&1&&e(0,"Previous")}function Co(l,u){l&1&&e(0,"Next")}function To(l,u){l&1&&e(0,"Previous")}function Ao(l,u){l&1&&e(0,"Next")}function Io(l,u){l&1&&e(0,"Previous")}function Mo(l,u){l&1&&e(0,"Next")}var Ui=(()=>{class l{constructor(){this.page=1,this.pages=2,this.Disable=1,this.Disabled=1,this.largepage=1,this.smallpage=2,this.alignpage1=1,this.alignpage2=2}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"General",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-general"]],standalone:!1,decls:312,vars:23,consts:[["title","General",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","popover-showcode",1,"form-label","text-muted"],["type","checkbox","id","popover-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"hstack","flex-wrap","gap-2"],["type","button","placement","top","ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-light"],["type","button","data-bs-container","body","data-bs-toggle","popover","placement","right","title","Right Popover","ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-light"],["type","button","data-bs-container","body","data-bs-toggle","popover","placement","bottom","title","Bottom Popover","ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-light"],["type","button","data-bs-container","body","data-bs-toggle","popover","placement","left","title","Left Popover","ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-light"],["tabindex","0","data-bs-toggle","popover","data-bs-trigger","focus","title","Dismissible popover","placement","right","ngbPopover","And here's some amazing content. It's very engaging. Right?",1,"btn","btn-success"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","tooltips-showcode",1,"form-label","text-muted"],["type","checkbox","id","tooltips-showcode",1,"form-check-input","code-switcher",3,"click"],["type","button","ngbTooltip","Tooltip on top","placement","top",1,"btn","btn-light"],["type","button","data-bs-toggle","tooltip","placement","right","ngbTooltip","Tooltip on right",1,"btn","btn-light"],["type","button","data-bs-toggle","tooltip","placement","bottom","ngbTooltip","Tooltip on bottom",1,"btn","btn-light"],["type","button","data-bs-toggle","tooltip","placement","left","ngbTooltip","Tooltip on left",1,"btn","btn-light"],["type","button","data-bs-toggle","tooltip","data-bs-html","true","placement","top","ngbTooltip","Tooltip with HTML",1,"btn","btn-primary"],["for","breadcrumb-showcode",1,"form-label","text-muted"],["type","checkbox","id","breadcrumb-showcode",1,"form-check-input","code-switcher",3,"click"],["aria-label","breadcrumb"],[1,"breadcrumb","p-3","py-2","bg-light"],["aria-current","page",1,"breadcrumb-item","active"],[1,"breadcrumb-item"],["href","javascript:void(0);"],[1,"breadcrumb","p-3","py-2","bg-light","mb-0"],[1,"ri-home-5-fill"],["for","pagination-showcode",1,"form-label","text-muted"],["type","checkbox","id","pagination-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"col-lg-6"],[1,"fs-15"],["aria-label","Custom pagination",3,"pageChange","collectionSize","page"],["ngbPaginationPrevious",""],["ngbPaginationNext",""],[3,"pageChange","collectionSize","page","rotate","ellipses","boundaryLinks"],[1,"mt-4","mt-lg-0"],[1,"mt-4"],["aria-label","Custom pagination",1,"pagination","pagination-lg",3,"pageChange","collectionSize","page"],[1,"pagination","pagination-sm","mb-0",3,"pageChange","collectionSize","page"],["aria-label","Custom pagination",1,"pagination","justify-content-center",3,"pageChange","collectionSize","page"],["aria-label","Custom pagination",1,"pagination","justify-content-end","mb-0",3,"pageChange","collectionSize","page"],["for","spinners-showcode",1,"form-label","text-muted"],["type","checkbox","id","spinners-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"d-flex","flex-wrap","gap-3","mb-2"],["role","status",1,"spinner-border","text-primary"],[1,"sr-only"],["role","status",1,"spinner-border","text-secondary"],["role","status",1,"spinner-border","text-success"],["role","status",1,"spinner-border","text-info"],["role","status",1,"spinner-border","text-warning"],["role","status",1,"spinner-border","text-danger"],["role","status",1,"spinner-border","text-body"],["role","status",1,"spinner-grow","text-primary"],["role","status",1,"spinner-grow","text-secondary"],["role","status",1,"spinner-grow","text-success"],["role","status",1,"spinner-grow","text-info"],["role","status",1,"spinner-grow","text-warning"],["role","status",1,"spinner-grow","text-danger"],["role","status",1,"spinner-grow","text-body"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Popovers"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"Popovers example are available with follwing options , Directions are mirrored when using Bootstrap in RTL."),i(),t(15,"div",12)(16,"div",13)(17,"button",14),e(18," Popover on top "),i(),t(19,"button",15),e(20," Popover on right "),i(),t(21,"button",16),e(22," Popover on bottom "),i(),t(23,"button",17),e(24," Popover on left "),i(),t(25,"button",18),e(26,"Dismissible popover"),i()()(),t(27,"div",19)(28,"pre",20)(29,"code"),e(30,`<div class="hstack flex-wrap gap-2">
<button type="button" class="btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on top
</button>
<button type="button" class="btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on right
</button>
<button type="button" class="btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on bottom
</button>
<button type="button" class="btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on left
</button>
<button tabindex="0" class="btn  btn-success" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</button>
</div>`),i()()()()()()(),t(31,"div",1)(32,"div",2)(33,"div",3)(34,"div",4)(35,"h4",5),e(36,"Tooltips"),i(),t(37,"div",6)(38,"div",7)(39,"label",21),e(40,"Show Code"),i(),t(41,"input",22),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(42,"div",10)(43,"p",11),e(44,"Tooltip example are available with follwing options, Directions are mirrored when using Bootstrap in RTL."),i(),t(45,"div",12)(46,"div",13)(47,"button",23),e(48," Tooltip on top "),i(),t(49,"button",24),e(50," Tooltip on right "),i(),t(51,"button",25),e(52," Tooltip on bottom "),i(),t(53,"button",26),e(54," Tooltip on left "),i(),t(55,"button",27),e(56," Tooltip with HTML "),i()()(),t(57,"div",19)(58,"pre",20)(59,"code"),e(60,`<!-- Tooltips -->
<div class="hstack flex-wrap gap-2">
<button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
Tooltip on top
</button>
<button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
Tooltip on right
</button>
<button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
Tooltip on bottom
</button>
<button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
Tooltip on left
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
Tooltip with HTML
</button>
</div>`),i()()()()()()(),t(61,"div",1)(62,"div",2)(63,"div",3)(64,"div",4)(65,"h4",5),e(66,"Breadcrumb"),i(),t(67,"div",6)(68,"div",7)(69,"label",28),e(70,"Show Code"),i(),t(71,"input",29),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(72,"div",10)(73,"p",11),e(74,"Indicate the current page\u2019s location within a navigational hierarchy"),i(),t(75,"div",12)(76,"nav",30)(77,"ol",31)(78,"li",32),e(79,"Home"),i()()(),t(80,"nav",30)(81,"ol",31)(82,"li",33)(83,"a",34),e(84,"Home"),i()(),t(85,"li",32),e(86,"Library"),i()()(),t(87,"nav",30)(88,"ol",31)(89,"li",33)(90,"a",34),e(91,"Home"),i()(),t(92,"li",33)(93,"a",34),e(94,"Base UI"),i()(),t(95,"li",32),e(96,"General"),i()()(),t(97,"nav",30)(98,"ol",35)(99,"li",33)(100,"a",34),n(101,"i",36),i()(),t(102,"li",33)(103,"a",34),e(104,"Base UI"),i()(),t(105,"li",32),e(106,"General"),i()()()(),t(107,"div",19)(108,"pre",20)(109,"code"),e(110,`<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item active" aria-current="page">Home</li>
</ol>
</nav>

<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>

<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li class="breadcrumb-item"><a href="#">Base UI</a></li>
<li class="breadcrumb-item active" aria-current="page">General</li>
</ol>
</nav>

<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="#"><i class="ri-home-5-fill"></i></a></li>
<li class="breadcrumb-item"><a href="#">Base UI</a></li>
<li class="breadcrumb-item active" aria-current="page">General</li>
</ol>
</nav>`),i()()()()()()(),t(111,"div",1)(112,"div",2)(113,"div",3)(114,"div",4)(115,"h4",5),e(116,"Pagination"),i(),t(117,"div",6)(118,"div",7)(119,"label",37),e(120,"Show Code"),i(),t(121,"input",38),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(122,"div",10),n(123,"p"),t(124,"div",12)(125,"div",1)(126,"div",39)(127,"h5",40),e(128,"Default Pagination"),i(),t(129,"p",11),e(130,"Use "),t(131,"code"),e(132,"pagination"),i(),e(133," class to ul element to indicate a series of related content exists across multiple pages."),i(),t(134,"ngb-pagination",41),$("pageChange",function(o){return Y(a.page,o)||(a.page=o),o}),h(135,fo,1,0,"ng-template",42)(136,So,1,0,"ng-template",43),i(),t(137,"ngb-pagination",44),$("pageChange",function(o){return Y(a.pages,o)||(a.pages=o),o}),i()(),t(138,"div",39)(139,"div",45)(140,"h5",40),e(141,"Disabled and Active states"),i(),t(142,"p",11),e(143,"Use "),t(144,"code"),e(145,"disabled"),i(),e(146," class to links that appear un-clickable and "),t(147,"code"),e(148,"active"),i(),e(149," class to indicate the current page."),i(),t(150,"ngb-pagination",41),$("pageChange",function(o){return Y(a.Disable,o)||(a.Disable=o),o}),h(151,wo,1,0,"ng-template",42)(152,Eo,1,0,"ng-template",43),i(),t(153,"ngb-pagination",44),$("pageChange",function(o){return Y(a.Disabled,o)||(a.Disabled=o),o}),i()()()(),t(154,"div",1)(155,"div",39)(156,"div",46)(157,"h5",40),e(158,"Sizing"),i(),t(159,"p",11),e(160,"Use "),t(161,"code"),e(162,"pagination-lg"),i(),e(163," or "),t(164,"code"),e(165,"pagination-sm"),i(),e(166," to set different pagination sizes."),i(),t(167,"ngb-pagination",47),$("pageChange",function(o){return Y(a.largepage,o)||(a.largepage=o),o}),h(168,yo,1,0,"ng-template",42)(169,ko,1,0,"ng-template",43),i(),t(170,"ngb-pagination",48),$("pageChange",function(o){return Y(a.smallpage,o)||(a.smallpage=o),o}),h(171,_o,1,0,"ng-template",42)(172,Co,1,0,"ng-template",43),i()()(),t(173,"div",39)(174,"div",46)(175,"h5",40),e(176,"Alignment"),i(),t(177,"p",11),e(178,"Use "),t(179,"code"),e(180,"justify-content-start"),i(),e(181,", "),t(182,"code"),e(183,"justify-content-start"),i(),e(184,", or "),t(185,"code"),e(186,"justify-content-start"),i(),e(187,", class to pagination class to change the alignment of pagination respectively."),i(),t(188,"ngb-pagination",49),$("pageChange",function(o){return Y(a.alignpage1,o)||(a.alignpage1=o),o}),h(189,To,1,0,"ng-template",42)(190,Ao,1,0,"ng-template",43),i(),t(191,"ngb-pagination",50),$("pageChange",function(o){return Y(a.alignpage2,o)||(a.alignpage2=o),o}),h(192,Io,1,0,"ng-template",42)(193,Mo,1,0,"ng-template",43),i()()()()(),t(194,"div",19)(195,"pre",20)(196,"code"),e(197,`<nav aria-label="Page navigation example">
<ul class="pagination">
<li class="page-item"><a class="page-link" href="#">Previous</a></li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</nav>`),i(),e(198,`

`),t(199,"code"),e(200,`<nav aria-label="Page navigation example">
<ul class="pagination">
<li class="page-item">
<a class="page-link" href="#" aria-label="Previous">
<i class="mdi mdi-chevron-left"></i>
</a>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
<a class="page-link" href="#" aria-label="Next">
<i class="mdi mdi-chevron-right"></i>
</a>
</li>
</ul>
</nav>`),i(),e(201,`


`),t(202,"code"),e(203,`<!-- Pagination Disabled & Active -->
<nav aria-label="...">
<ul class="pagination">
<li class="page-item disabled">
<a class="page-link" href="#" tabindex="-1">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item active">
<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
</li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
<a class="page-link" href="#">Next</a>
</li>
</ul>
</nav>`),i(),e(204,`

`),t(205,"code"),e(206,`<nav aria-label="...">
<ul class="pagination">
<li class="page-item disabled">
<span class="page-link"><i class="mdi mdi-chevron-left"></i></span>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item active">
<span class="page-link">
2
<span class="sr-only">(current)</span>
</span>
</li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
<a class="page-link" href="#"><i class="mdi mdi-chevron-right"></i></a>
</li>
</ul>
</nav>`),i(),e(207,`


`),t(208,"code"),e(209,`<!-- Pagination sizing -->

<!-- Pagination Large -->
<nav aria-label="...">
<ul class="pagination pagination-lg">
<li class="page-item disabled">
<a class="page-link" href="#" tabindex="-1">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
<a class="page-link" href="#">Next</a>
</li>
</ul>
</nav>`),i(),e(210,`

`),t(211,"code"),e(212,`<!-- Pagination Small -->
<nav aria-label="...">
<ul class="pagination pagination-sm">
<li class="page-item disabled">
<a class="page-link" href="#" tabindex="-1">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
<a class="page-link" href="#">Next</a>
</li>
</ul>
</nav>`),i(),e(213,`


`),t(214,"code"),e(215,`<!-- Pagination Alignment -->

<!-- Center Alignment -->
<nav aria-label="Page navigation example">
<ul class="pagination justify-content-center">
<li class="page-item disabled">
<a class="page-link" href="#" tabindex="-1">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
<a class="page-link" href="#">Next</a>
</li>
</ul>
</nav>`),i(),e(216,`

`),t(217,"code"),e(218,`<!-- Right Alignment -->
<nav aria-label="Page navigation example">
<ul class="pagination justify-content-end">
<li class="page-item disabled">
<a class="page-link" href="#" tabindex="-1">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
<a class="page-link" href="#">Next</a>
</li>
</ul>
</nav>`),i(),e(219,`


`),t(220,"code"),e(221,`<!-- Pagination Rounded -->
<ul class="pagination pagination-rounded">
<li class="page-item disabled">
<a href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></a>
</li>
<li class="page-item">
<a href="#" class="page-link">1</a>
</li>
<li class="page-item active">
<a href="#" class="page-link">2</a>
</li>
<li class="page-item">
<a href="#" class="page-link">3</a>
</li>
<li class="page-item">
<a href="#" class="page-link">4</a>
</li>
<li class="page-item">
<a href="#" class="page-link">5</a>
</li>
<li class="page-item">
<a href="#" class="page-link"><i class="mdi mdi-chevron-right"></i></a>
</li>
</ul>`),i()()()()()()(),t(222,"div",1)(223,"div",2)(224,"div",3)(225,"div",4)(226,"h4",5),e(227,"Spinners"),i(),t(228,"div",6)(229,"div",7)(230,"label",51),e(231,"Show Code"),i(),t(232,"input",52),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(233,"div",10),n(234,"p"),t(235,"div",12)(236,"div",1)(237,"div",39)(238,"div")(239,"h5",40),e(240,"Border spinner"),i(),t(241,"p",11),e(242,"Use "),t(243,"code"),e(244,"spinner-border"),i(),e(245," class for a lightweight loading indicator."),i(),t(246,"div",53)(247,"div",54)(248,"span",55),e(249,"Loading..."),i()(),t(250,"div",56)(251,"span",55),e(252,"Loading..."),i()(),t(253,"div",57)(254,"span",55),e(255,"Loading..."),i()(),t(256,"div",58)(257,"span",55),e(258,"Loading..."),i()(),t(259,"div",59)(260,"span",55),e(261,"Loading..."),i()(),t(262,"div",60)(263,"span",55),e(264,"Loading..."),i()(),t(265,"div",61)(266,"span",55),e(267,"Loading..."),i()(),t(268,"div",61)(269,"span",55),e(270,"Loading..."),i()()()()(),t(271,"div",39)(272,"div")(273,"h5",40),e(274,"Growing spinner"),i(),t(275,"p",11),e(276,"Use "),t(277,"code"),e(278,"spinner-grow"),i(),e(279," class for a lightweight spinner with growing effect."),i(),t(280,"div",53)(281,"div",62)(282,"span",55),e(283,"Loading..."),i()(),t(284,"div",63)(285,"span",55),e(286,"Loading..."),i()(),t(287,"div",64)(288,"span",55),e(289,"Loading..."),i()(),t(290,"div",65)(291,"span",55),e(292,"Loading..."),i()(),t(293,"div",66)(294,"span",55),e(295,"Loading..."),i()(),t(296,"div",67)(297,"span",55),e(298,"Loading..."),i()(),t(299,"div",68)(300,"span",55),e(301,"Loading..."),i()(),t(302,"div",68)(303,"span",55),e(304,"Loading..."),i()()()()()()(),t(305,"div",19)(306,"pre",20)(307,"code"),e(308,`<!-- Border spinner -->
<div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-body" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-body" role="status">
<span class="sr-only">Loading...</span>
</div>`),i(),e(309,`

`),t(310,"code"),e(311,`<!-- Growing spinner -->
<div class="spinner-grow text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-body" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-body" role="status">
<span class="sr-only">Loading...</span>
</div>`),i()()()()()()()),s&2&&(p("breadcrumbItems",a.breadCrumbItems),m(134),p("collectionSize",30),G("page",a.page),m(3),p("collectionSize",30),G("page",a.pages),p("rotate",!0)("ellipses",!1)("boundaryLinks",!0),m(13),p("collectionSize",30),G("page",a.Disable),m(3),p("collectionSize",30),G("page",a.Disabled),p("rotate",!0)("ellipses",!1)("boundaryLinks",!0),m(14),p("collectionSize",30),G("page",a.largepage),m(3),p("collectionSize",30),G("page",a.smallpage),m(18),p("collectionSize",30),G("page",a.alignpage1),m(3),p("collectionSize",30),G("page",a.alignpage2))},dependencies:[D,re,si,Jt,$t,Qt],encapsulation:2})}}return l})();var zi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Ribbons",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-ribbons"]],standalone:!1,decls:370,vars:1,consts:[["title","Ribbons",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","rounded-ribbon-showcode",1,"form-label","text-muted"],["type","checkbox","id","rounded-ribbon-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"live-preview"],[1,"row","g-3"],[1,"text-muted"],[1,"col-xxl-4"],[1,"card","ribbon-box","border","shadow-none","mb-lg-0","material-shadow"],[1,"ribbon","ribbon-primary","round-shape"],[1,"fs-14","text-end"],[1,"ribbon-content","mt-4","text-muted"],[1,"mb-0"],[1,"ribbon","ribbon-success","round-shape"],[1,"card","ribbon-box","border","shadow-none","right","mb-lg-0","material-shadow"],[1,"ribbon","ribbon-info","round-shape"],[1,"fs-14","text-start"],[1,"d-none","code-view"],[1,"language-markup",2,"height","275px"],["for","shape-ribbon-showcode",1,"form-label","text-muted"],["type","checkbox","id","shape-ribbon-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"ribbon","ribbon-primary","ribbon-shape"],[1,"ribbon-content","text-muted","mt-4"],[1,"ribbon","ribbon-success","ribbon-shape"],[1,"card","ribbon-box","border","shadow-none","mb-lg-0","right","material-shadow"],[1,"ribbon","ribbon-info","ribbon-shape"],["for","ribbons01-showcode",1,"form-label","text-muted"],["type","checkbox","id","ribbons01-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card","ribbon-box","border","ribbon-fill","shadow-none","mb-lg-0","material-shadow"],[1,"ribbon","ribbon-primary"],[1,"ribbon-content","mt-3","text-muted"],[1,"ribbon","ribbon-success"],[1,"card","ribbon-box","border","ribbon-fill","shadow-none","right","mb-lg-0","material-shadow"],[1,"ribbon","ribbon-info"],["for","ribbon-example-showcode",1,"form-label","text-muted"],["type","checkbox","id","ribbon-example-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body","text-muted"],[1,"ribbon-two","ribbon-two-primary"],[1,"fs-14","text-end","mb-3"],[1,"ribbon-two","ribbon-two-success"],[1,"ribbon-two","ribbon-two-info"],[1,"fs-14","mb-3"],["for","ribbon-three-showcode",1,"form-label","text-muted"],["type","checkbox","id","ribbon-three-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"ribbon-three","ribbon-three-primary"],[1,"ribbon-three","ribbon-three-success"],[1,"ribbon-three","ribbon-three-info"],["for","ribbon-hover-showcode",1,"form-label","text-muted"],["type","checkbox","id","ribbon-hover-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card","ribbon-box","border","shadow-none","overflow-hidden","mb-lg-0","material-shadow"],[1,"ribbon","ribbon-info","ribbon-shape","trending-ribbon"],[1,"trending-ribbon-text"],[1,"ri-flashlight-fill","text-white","align-bottom","float-end","ms-1"],[1,"card","ribbon-box","right","border","shadow-none","overflow-hidden","mb-lg-0","material-shadow"],[1,"ri-flashlight-fill","text-white","align-bottom","float-start","me-1"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Rounded Ribbon"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10),n(13,"p"),t(14,"div",11)(15,"div",12)(16,"p",13),e(17,"Use "),t(18,"code"),e(19,"round-shape"),i(),e(20," class to show round-shaped ribbon."),i(),t(21,"div",14)(22,"div",15)(23,"div",10)(24,"div",16),e(25,"Primary"),i(),t(26,"h5",17),e(27,"Rounded Ribbon"),i(),t(28,"div",18)(29,"p",19),e(30,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()(),t(31,"div",14)(32,"div",15)(33,"div",10)(34,"div",20),e(35,"Success"),i(),t(36,"h5",17),e(37,"Rounded Ribbon"),i(),t(38,"div",18)(39,"p",19),e(40,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()(),t(41,"div",14)(42,"div",21)(43,"div",10)(44,"div",22),e(45,"Info"),i(),t(46,"h5",23),e(47,"Rounded Ribbon Right"),i(),t(48,"div",18)(49,"p",19),e(50,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()()()(),t(51,"div",24)(52,"pre",25)(53,"code"),e(54,`<!-- Rounded Ribbon -->
<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body">
<div class="ribbon ribbon-primary round-shape">Primary</div>
<h5 class="fs-14 text-end">Rounded Ribbon</h5>
<div class="ribbon-content mt-4 text-muted">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i(),e(55,`

`),t(56,"code"),e(57,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body">
<div class="ribbon ribbon-success round-shape">Success</div>
<h5 class="fs-14 text-end">Rounded Ribbon</h5>
<div class="ribbon-content mt-4 text-muted">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i(),e(58,`

`),t(59,"code"),e(60,`<!-- Right Ribbon -->
<div class="card ribbon-box border shadow-none right mb-lg-0 material-shadow">
<div class="card-body">
<div class="ribbon ribbon-info round-shape">Info</div>
<h5 class="fs-14 text-start">Rounded Ribbon Right</h5>
<div class="ribbon-content mt-4 text-muted">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i()()()()()()(),t(61,"div",1)(62,"div",2)(63,"div",3)(64,"div",4)(65,"h4",5),e(66,"Ribbon Shape"),i(),t(67,"div",6)(68,"div",7)(69,"label",26),e(70,"Show Code"),i(),t(71,"input",27),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(72,"div",10),n(73,"p"),t(74,"div",11)(75,"div",12)(76,"p",13),e(77,"Use "),t(78,"code"),e(79,"ribbon-shape"),i(),e(80," class to show ribbon shaped ribbon."),i(),t(81,"div",14)(82,"div",15)(83,"div",10)(84,"div",28),e(85,"Primary"),i(),t(86,"h5",17),e(87,"Ribbon Shape"),i(),t(88,"div",29)(89,"p",19),e(90,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()(),t(91,"div",14)(92,"div",15)(93,"div",10)(94,"div",30),e(95,"Success"),i(),t(96,"h5",17),e(97,"Ribbon Shape"),i(),t(98,"div",29)(99,"p",19),e(100,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()(),t(101,"div",14)(102,"div",31)(103,"div",10)(104,"div",32),e(105,"Info"),i(),t(106,"h5",23),e(107,"Ribbon Shape Right"),i(),t(108,"div",29)(109,"p",19),e(110,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()()()(),t(111,"div",24)(112,"pre",25)(113,"code"),e(114,`<!-- Ribbon Shape -->
<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body">
<div class="ribbon ribbon-primary ribbon-shape">Primary</div>
<h5 class="fs-14 text-end">Ribbon Shape</h5>
<div class="ribbon-content text-muted mt-4">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i(),e(115,`

`),t(116,"code"),e(117,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body">
<div class="ribbon ribbon-success ribbon-shape">Success</div>
<h5 class="fs-14 text-end">Ribbon Shape</h5>
<div class="ribbon-content text-muted mt-4">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i(),e(118,`

`),t(119,"code"),e(120,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow right">
<div class="card-body">
<div class="ribbon ribbon-info ribbon-shape">Info</div>
<h5 class="fs-14 text-start">Ribbon Shape Right</h5>
<div class="ribbon-content text-muted mt-4">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i()()()()()()(),t(121,"div",1)(122,"div",2)(123,"div",3)(124,"div",4)(125,"h4",5),e(126,"Filled Ribbons"),i(),t(127,"div",6)(128,"div",7)(129,"label",33),e(130,"Show Code"),i(),t(131,"input",34),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(132,"div",10),n(133,"p"),t(134,"div",11)(135,"div",12)(136,"p",13),e(137,"Use "),t(138,"code"),e(139,"ribbon-fill"),i(),e(140," class to show fill-shaped ribbon."),i(),t(141,"div",14)(142,"div",35)(143,"div",10)(144,"div",36),e(145,"New"),i(),t(146,"h5",17),e(147,"Fill Ribbon"),i(),t(148,"div",37)(149,"p",19),e(150,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()(),t(151,"div",14)(152,"div",35)(153,"div",10)(154,"div",38),e(155,"Sale"),i(),t(156,"h5",17),e(157,"Fill Ribbon"),i(),t(158,"div",37)(159,"p",19),e(160,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()(),t(161,"div",14)(162,"div",39)(163,"div",10)(164,"div",40),e(165,"New"),i(),t(166,"h5",23),e(167,"Fill Ribbon Right"),i(),t(168,"div",37)(169,"p",19),e(170,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio."),i()()()()()()(),t(171,"div",24)(172,"pre",25)(173,"code"),e(174,`<div class="card ribbon-box border ribbon-fill shadow-none mb-lg-0 material-shadow">
<div class="card-body">
<div class="ribbon ribbon-primary">- 10 %</div>
<h5 class="fs-14 text-end">Fill Ribbon</h5>
<div class="ribbon-content mt-5 text-muted">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i(),e(175,`

`),t(176,"code"),e(177,`<div class="card ribbon-box border ribbon-fill shadow-none mb-lg-0 material-shadow">
<div class="card-body">
<div class="ribbon ribbon-success">- 20 %</div>
<h5 class="fs-14 text-end">Fill Ribbon</h5>
<div class="ribbon-content mt-5 text-muted">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i(),e(178,`

`),t(179,"code"),e(180,`<!-- Right Ribbon -->
<div class="card ribbon-box border ribbon-fill shadow-none right mb-lg-0 material-shadow">
<div class="card-body">
<div class="ribbon ribbon-info">- 30 %</div>
<h5 class="fs-14 text-start">Fill Ribbon Right</h5>
<div class="ribbon-content mt-5 text-muted">
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
</div>
</div>
</div>`),i()()()()()()(),t(181,"div",1)(182,"div",2)(183,"div",3)(184,"div",4)(185,"h4",5),e(186,"Boxed Ribbons"),i(),t(187,"div",6)(188,"div",7)(189,"label",41),e(190,"Show Code"),i(),t(191,"input",42),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(192,"div",10),n(193,"p"),t(194,"div",11)(195,"div",12)(196,"p",13),e(197,"Use "),t(198,"code"),e(199,"ribbon-box"),i(),e(200," class with "),t(201,"code"),e(202,"ribbon-two"),i(),e(203," class at child element to show below-mentioned shaped ribbon."),i(),t(204,"div",14)(205,"div",15)(206,"div",43)(207,"div",44)(208,"span"),e(209,"Basic"),i()(),t(210,"h5",45),e(211,"Box Ribbon"),i(),t(212,"p",19),e(213,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus."),i()()()(),t(214,"div",14)(215,"div",15)(216,"div",43)(217,"div",46)(218,"span"),e(219,"Standard"),i()(),t(220,"h5",45),e(221,"Box Ribbon"),i(),t(222,"p",19),e(223,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus."),i()()()(),t(224,"div",14)(225,"div",31)(226,"div",43)(227,"div",47)(228,"span"),e(229,"Premium"),i()(),t(230,"h5",48),e(231,"Box Ribbon Right"),i(),t(232,"p",19),e(233,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum ornare."),i()()()()()(),t(234,"div",24)(235,"pre",25)(236,"code"),e(237,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body text-muted">
<div class="ribbon-two ribbon-two-primary"><span>Primary</span></div>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i(),e(238,`

`),t(239,"code"),e(240,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body text-muted">
<div class="ribbon-two ribbon-two-success"><span>Success</span></div>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i(),e(241,`

`),t(242,"code"),e(243,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body text-muted">
<div class="ribbon-two ribbon-two-success"><span>Success</span></div>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i()()()()()()(),t(244,"div",1)(245,"div",2)(246,"div",3)(247,"div",4)(248,"h4",5),e(249,"Ribbons"),i(),t(250,"div",6)(251,"div",7)(252,"label",49),e(253,"Show Code"),i(),t(254,"input",50),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(255,"div",10),n(256,"p"),t(257,"div",11)(258,"div",12)(259,"p",13),e(260,"Use "),t(261,"code"),e(262,"ribbon-box"),i(),e(263," class with "),t(264,"code"),e(265,"ribbon-three"),i(),e(266," class at child element to show below-mentioned shaped ribbon."),i(),t(267,"div",14)(268,"div",15)(269,"div",43)(270,"span",51)(271,"span"),e(272,"Featured"),i()(),t(273,"h5",45),e(274,"Ribbon Shape"),i(),t(275,"p",19),e(276,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus."),i()()()(),t(277,"div",14)(278,"div",15)(279,"div",43)(280,"span",52)(281,"span"),e(282,"Featured"),i()(),t(283,"h5",45),e(284,"Ribbon Shape"),i(),t(285,"p",19),e(286,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus."),i()()()(),t(287,"div",14)(288,"div",31)(289,"div",43)(290,"span",53)(291,"span"),e(292,"Featured"),i()(),t(293,"h5",48),e(294,"Ribbon Right Shape"),i(),t(295,"p",19),e(296,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus."),i()()()()()(),t(297,"div",24)(298,"pre",25)(299,"code"),e(300,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body text-muted">
<span class="ribbon-three ribbon-three-primary "><span>Primary</span></span>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i(),e(301,`

`),t(302,"code"),e(303,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body text-muted">
<div class="ribbon-three ribbon-three-success"><span>Success</span></div>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i(),e(304,`

`),t(305,"code"),e(306,`<div class="card ribbon-box border shadow-none mb-lg-0 material-shadow">
<div class="card-body text-muted">
<div class="ribbon-three ribbon-three-info"><span>Success</span></div>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i()()()()()()(),t(307,"div",1)(308,"div",2)(309,"div",3)(310,"div",4)(311,"h4",5),e(312,"Ribbons Hover"),i(),t(313,"div",6)(314,"div",7)(315,"label",54),e(316,"Show Code"),i(),t(317,"input",55),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(318,"div",10),n(319,"p"),t(320,"div",11)(321,"div",12)(322,"p",13),e(323,"Use "),t(324,"code"),e(325,"trending-ribbon"),i(),e(326," class to show ribbon with hovering effect."),i(),t(327,"div",14)(328,"div",56)(329,"div",43)(330,"div",57)(331,"span",58),e(332,"Trending"),i(),n(333,"i",59),i(),t(334,"h5",45),e(335,"Ribbon Shape"),i(),t(336,"p",19),e(337,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus."),i()()()(),t(338,"div",14)(339,"div",56)(340,"div",43)(341,"div",57)(342,"span",58),e(343,"Trending"),i(),n(344,"i",59),i(),t(345,"h5",45),e(346,"Ribbon Shape"),i(),t(347,"p",19),e(348,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus."),i()()()(),t(349,"div",14)(350,"div",60)(351,"div",43)(352,"div",57),n(353,"i",61),t(354,"span",58),e(355,"Trending"),i()(),t(356,"h5",48),e(357,"Ribbon Right Shape"),i(),t(358,"p",19),e(359,"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus."),i()()()()()(),t(360,"div",24)(361,"pre",25)(362,"code"),e(363,`<div class="card ribbon-box border shadow-none overflow-hidden material-shadow">
<div class="card-body text-muted">
<div class="ribbon ribbon-info ribbon-shape trending-ribbon">
<span class="trending-ribbon-text">Trending</span> <i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
</div>
<h5 class="fs-14 text-end mb-3">Ribbon Shape</h5>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i(),e(364,`

`),t(365,"code"),e(366,`<div class="card ribbon-box border shadow-none overflow-hidden material-shadow">
<div class="card-body text-muted">
<div class="ribbon ribbon-info ribbon-shape trending-ribbon">
<span class="trending-ribbon-text">Trending</span> <i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
</div>
<h5 class="fs-14 text-end mb-3">Ribbon Shape</h5>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i(),e(367,`

`),t(368,"code"),e(369,`<div class="card ribbon-box right border shadow-none overflow-hidden material-shadow">
<div class="card-body text-muted">
<div class="ribbon ribbon-info ribbon-shape trending-ribbon">
<i class="ri-flashlight-fill text-white align-bottom float-start me-1"></i> <span class="trending-ribbon-text">Trending</span>
</div>
<h5 class="fs-14 mb-3">Ribbon Right Shape</h5>
<p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
</div>
</div>`),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var Hi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Utilities",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-utilities"]],standalone:!1,decls:1129,vars:1,consts:[["title","Utilities",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-title","mb-0"],[1,"card-body"],[1,"text-muted"],[1,"live-preview"],[1,"fs-13","mb-3"],[1,"d-flex","align-items-start","flex-wrap","gap-4"],[1,"text-center"],[1,"border","border-1","border-light","avatar-md","bg-transparent","mx-auto","mb-1"],[1,"border","border-2","border-light","avatar-md","bg-transparent","mx-auto","mb-1"],[1,"border","border-3","border-light","avatar-md","bg-transparent","mx-auto","mb-1"],[1,"border","border-4","border-light","avatar-md","bg-transparent","mx-auto","mb-1"],[1,"border","border-5","border-light","avatar-md","bg-transparent","mx-auto","mb-1"],[1,"row","mt-4"],[1,"col-lg-6"],[1,"col-xl-2","col-sm-4","col"],[1,"border","avatar-md","border-success","bg-light","mx-auto","mb-1"],[1,"border-top","avatar-md","border-success","bg-light","mx-auto","mb-1"],[1,"border-end","avatar-md","border-success","bg-light","mx-auto","mb-1"],[1,"border-bottom","avatar-md","border-success","bg-light","mx-auto","mb-1"],[1,"border-start","avatar-md","border-success","bg-light","mx-auto","mb-1"],[1,"border-0","border-success","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-top-0","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-end-0","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-bottom-0","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-start-0","border-success","avatar-md","bg-light","mx-auto","mb-1"],[1,"mt-4"],[1,"border","border-primary","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-secondary","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-info","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-warning","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-danger","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-dark","avatar-md","bg-light","mx-auto","mb-1"],[1,"col-xxl-6"],[1,"border","border-primary","border-dotted","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-secondary","border-dashed","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-groove","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-info","border-outset","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-warning","border-ridge","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-danger","border-inset","avatar-md","bg-light","mx-auto","mb-1"],[1,"col-sm-3","col-"],[1,"border-start","border-start-dashed","border-success","avatar-md","bg-light","mx-auto","mb-1"],[1,"border-top","border-top-dashed","border-success","avatar-md","bg-light","mx-auto","mb-1"],[1,"border-end","border-end-dashed","border-success","avatar-md","bg-light","mx-auto","mb-1"],[1,"border-bottom","border-bottom-dashed","border-success","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-opacity-10","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-opacity-25","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-opacity-50","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-opacity-75","avatar-md","bg-light","mx-auto","mb-1"],[1,"border","border-success","border-opacity-100","avatar-md","bg-light","mx-auto","mb-1"],["src","assets/images/users/avatar-2.jpg","alt","rounded",1,"avatar-md","rounded","material-shadow"],["src","assets/images/users/avatar-2.jpg","alt","rounded-top",1,"avatar-md","rounded-top","material-shadow"],["src","assets/images/users/avatar-2.jpg","alt","rounded-end",1,"avatar-md","rounded-end","material-shadow"],["src","assets/images/users/avatar-2.jpg","alt","rounded-bottom",1,"avatar-md","rounded-bottom","material-shadow"],["src","assets/images/users/avatar-2.jpg","alt","rounded-start",1,"avatar-md","rounded-start","material-shadow"],["src","assets/images/users/avatar-2.jpg","alt","rounded-circle",1,"avatar-md","rounded-circle","material-shadow"],["src","assets/images/small/img-2.jpg","alt","rounded-pill",1,"avatar-md","w-auto","rounded-pill","material-shadow"],["src","assets/images/users/avatar-1.jpg","alt","rounded-0",1,"avatar-md","rounded-0","material-shadow"],["src","assets/images/users/avatar-1.jpg","alt","rounded-1",1,"avatar-md","rounded-1","material-shadow"],["src","assets/images/users/avatar-1.jpg","alt","rounded-2",1,"avatar-md","rounded-2","material-shadow"],["src","assets/images/users/avatar-1.jpg","alt","rounded-3",1,"avatar-md","rounded-3","material-shadow"],["src","assets/images/users/avatar-1.jpg","alt","rounded-4",1,"avatar-md","rounded-4","material-shadow"],["src","assets/images/users/avatar-1.jpg","alt","rounded-5",1,"avatar-md","rounded-5","material-shadow"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"table-light"],["scope","col",2,"width","40%"],["scope","col"],[1,"fs-13"],[1,"ps-4","mb-0"],[1,"py-1"],[1,"table","table-bordered","mb-0"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","stacksvertical-showcode",1,"form-label","text-muted"],["type","checkbox","id","stacksvertical-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"text-muted","mb-3"],[1,"vstack","gap-3"],[1,"bg-light","border","p-1","px-2","material-shadow"],[1,"mt-5"],[1,"fs-14","mb-3"],[1,"vstack","gap-2","col-md-5","mx-auto"],["type","button",1,"btn","btn-primary"],["type","button",1,"btn","btn-outline-secondary","material-shadow-none"],[1,"d-none","code-view"],[1,"language-markup"],["for","stackshorizontal-showcode",1,"form-label","text-muted"],["type","checkbox","id","stackshorizontal-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"hstack","gap-3"],[1,"bg-light","border","p-1","material-shadow","px-2"],[1,"bg-light","border","material-shadow","p-1","px-2"],[1,"bg-light","border","material-shadow","p-1","px-2","ms-auto"],[1,"hstack","gap-3","mt-3"],[1,"vr"],["type","text","placeholder","Add your item here...",1,"form-control","me-auto"],["type","button",1,"btn","btn-outline-secondary","material-shadow"],[1,"language-markup",2,"height","275px"],["for","textselection-showcode",1,"form-label","text-muted"],["type","checkbox","id","textselection-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"user-select-all"],[1,"user-select-auto"],[1,"user-select-none","mb-0"],["for","pointnerevents-showcode",1,"form-label","text-muted"],["type","checkbox","id","pointnerevents-showcode",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0);","tabindex","-1",1,"text-success","pe-none"],["href","javascript:void(0);",1,"text-success","pe-auto"],[1,"pe-none","mb-0"],["href","javascript:void(0);","tabindex","-1",1,"text-success"],["href","javascript:void(0);",1,"pe-auto"],["for","overflow-showcode",1,"form-label","text-muted"],["type","checkbox","id","overflow-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"col-xl-3","col-sm-6"],[1,"mt-4","mt-xl-0"],[1,"d-md-flex","bg-light"],[1,"overflow-auto","p-3","mb-0","bg-light",2,"height","100px"],[1,"overflow-hidden","p-3","mb-0","bg-light",2,"height","100px"],[1,"overflow-visible","p-3","mb-0","bg-light",2,"height","100px"],[1,"overflow-scroll","p-3","mb-0","bg-light",2,"height","100px"],["for","position-showcode",1,"form-label","text-muted"],["type","checkbox","id","position-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"col-xl-4","col-sm-6"],[1,"position-relative","p-5","bg-light","m-3","border","rounded",2,"height","180px"],[1,"position-absolute","top-0","start-0","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-0","end-0","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-50","start-50","avatar-xs","bg-body","rounded"],[1,"position-absolute","bottom-50","end-50","avatar-xs","bg-body","rounded"],[1,"position-absolute","bottom-0","start-0","avatar-xs","bg-body","rounded"],[1,"position-absolute","bottom-0","end-0","avatar-xs","bg-body","rounded"],[1,"mt-4","mt-sm-0"],[1,"fs-13","mb-4"],[1,"position-relative","m-3","bg-light","border","rounded",2,"height","180px"],[1,"position-absolute","top-0","start-0","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-0","start-50","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-0","start-100","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-50","start-0","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-50","start-50","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-50","start-100","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-100","start-0","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-100","start-50","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-100","start-100","translate-middle","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-0","start-50","translate-middle-x","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-50","start-0","translate-middle-y","avatar-xs","bg-body","rounded"],[1,"position-absolute","top-50","end-0","translate-middle-y","avatar-xs","bg-body","rounded"],[1,"position-absolute","bottom-0","start-50","translate-middle-x","avatar-xs","bg-body","rounded"],["for","shadow-showcode",1,"form-label","text-muted"],["type","checkbox","id","shadow-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"row","gy-3"],[1,"col-md-6"],[1,"shadow-none","p-3","bg-light","rounded"],[1,"shadow-sm","p-3","bg-light","rounded"],[1,"shadow","p-3","bg-light","rounded"],[1,"shadow-lg","p-3","bg-light","rounded"],["for","width-showcode",1,"form-label","text-muted"],["type","checkbox","id","width-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"w-25","p-3","bg-light"],[1,"w-50","p-3","bg-light"],[1,"w-75","p-3","bg-light"],[1,"w-100","p-3","bg-light"],[1,"w-auto","p-3","bg-light"],["for","height-showcode",1,"form-label","text-muted"],["type","checkbox","id","height-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"row","text-center",2,"height","255px"],[1,"col"],[1,"h-25","p-3","bg-light"],[1,"h-50","p-3","bg-light"],[1,"h-75","p-3","bg-light"],[1,"h-100","p-3","bg-light"],[1,"h-auto","p-3","bg-light"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Borders"),i()(),t(7,"div",6)(8,"p",7),e(9,"Use border utilities to add or remove an element\u2019s borders. Choose from all borders or one at a time."),i(),t(10,"div",8)(11,"div")(12,"div")(13,"h5",9),e(14,"Border width"),i(),t(15,"div",10)(16,"div",11),n(17,"div",12),t(18,"p")(19,"code"),e(20,".border.border-1"),i()()(),t(21,"div",11),n(22,"div",13),t(23,"p")(24,"code"),e(25,".border.border-2"),i()()(),t(26,"div",11),n(27,"div",14),t(28,"p")(29,"code"),e(30,".border.border-3"),i()()(),t(31,"div",11),n(32,"div",15),t(33,"p")(34,"code"),e(35,".border.border-4"),i()()(),t(36,"div",11),n(37,"div",16),t(38,"p")(39,"code"),e(40,".border.border-5"),i()()()()(),t(41,"div",17)(42,"div",18)(43,"div")(44,"h5",9),e(45,"Additive"),i(),t(46,"div",1)(47,"div",19)(48,"div",11),n(49,"div",20),t(50,"p")(51,"code"),e(52,".border"),i()()()(),t(53,"div",19)(54,"div",11),n(55,"div",21),t(56,"p")(57,"code"),e(58,".border-top"),i()()()(),t(59,"div",19)(60,"div",11),n(61,"div",22),t(62,"p")(63,"code"),e(64,".border-end"),i()()()(),t(65,"div",19)(66,"div",11),n(67,"div",23),t(68,"p")(69,"code"),e(70,".border-bottom"),i()()()(),t(71,"div",19)(72,"div",11),n(73,"div",24),t(74,"p")(75,"code"),e(76,".border-start"),i()()()()()()(),t(77,"div",18)(78,"div")(79,"h5",9),e(80,"Subtractive"),i(),t(81,"div",1)(82,"div",19)(83,"div",11),n(84,"div",25),t(85,"p")(86,"code"),e(87,".border-0"),i()()()(),t(88,"div",19)(89,"div",11),n(90,"div",26),t(91,"p")(92,"code"),e(93,".border-top-0"),i()()()(),t(94,"div",19)(95,"div",11),n(96,"div",27),t(97,"p")(98,"code"),e(99,".border-end-0"),i()()()(),t(100,"div",19)(101,"div",11),n(102,"div",28),t(103,"p")(104,"code"),e(105,".border-bottom-0"),i()()()(),t(106,"div",19)(107,"div",11),n(108,"div",29),t(109,"p")(110,"code"),e(111,".border-start-0"),i()()()()()()()(),t(112,"div",30)(113,"h5",9),e(114,"Border Color"),i(),t(115,"div",10)(116,"div",11),n(117,"div",31),t(118,"p")(119,"code"),e(120,".border-primary"),i()()(),t(121,"div",11),n(122,"div",32),t(123,"p")(124,"code"),e(125,".border-secondary"),i()()(),t(126,"div",11),n(127,"div",33),t(128,"p")(129,"code"),e(130,".border-success"),i()()(),t(131,"div",11),n(132,"div",34),t(133,"p")(134,"code"),e(135,".border-info"),i()()(),t(136,"div",11),n(137,"div",35),t(138,"p")(139,"code"),e(140,".border-warning"),i()()(),t(141,"div",11),n(142,"div",36),t(143,"p")(144,"code"),e(145,".border-danger"),i()()(),t(146,"div",11),n(147,"div",37),t(148,"p")(149,"code"),e(150,".border-dark"),i()()()()(),t(151,"div",17)(152,"div",38)(153,"div")(154,"h5",9),e(155,"Border Style"),i(),t(156,"div",10)(157,"div",11),n(158,"div",39),t(159,"p")(160,"code"),e(161,".border-dotted"),i()()(),t(162,"div",11),n(163,"div",40),t(164,"p")(165,"code"),e(166,".border-dashed"),i()()(),t(167,"div",11),n(168,"div",41),t(169,"p")(170,"code"),e(171,".border-groove"),i()()(),t(172,"div",11),n(173,"div",42),t(174,"p")(175,"code"),e(176,".border-outset"),i()()(),t(177,"div",11),n(178,"div",43),t(179,"p")(180,"code"),e(181,".border-ridge"),i()()(),t(182,"div",11),n(183,"div",44),t(184,"p")(185,"code"),e(186,".border-inset"),i()()()()()(),t(187,"div",38)(188,"div")(189,"h5",9),e(190,"Additive"),i(),t(191,"div",1)(192,"div",45)(193,"div",11),n(194,"div",46),t(195,"p")(196,"code"),e(197,".border-start-dashed"),i()()()(),t(198,"div",45)(199,"div",11),n(200,"div",47),t(201,"p")(202,"code"),e(203,".border-top-dashed"),i()()()(),t(204,"div",45)(205,"div",11),n(206,"div",48),t(207,"p")(208,"code"),e(209,".border-end-dashed"),i()()()(),t(210,"div",45)(211,"div",11),n(212,"div",49),t(213,"p")(214,"code"),e(215,".border-bottom-dashed"),i()()()()()()()(),t(216,"div",30)(217,"h5",9),e(218,"Border Opacity"),i(),t(219,"div",10)(220,"div",11),n(221,"div",50),t(222,"p")(223,"code"),e(224,".border-opacity-10"),i()()(),t(225,"div",11),n(226,"div",51),t(227,"p")(228,"code"),e(229,".border-opacity-25"),i()()(),t(230,"div",11),n(231,"div",52),t(232,"p")(233,"code"),e(234,".border-opacity-50"),i()()(),t(235,"div",11),n(236,"div",53),t(237,"p")(238,"code"),e(239,".border-opacity-75"),i()()(),t(240,"div",11),n(241,"div",54),t(242,"p")(243,"code"),e(244,".border-opacity-100"),i()()()()()()()()()()(),t(245,"div",1)(246,"div",2)(247,"div",3)(248,"div",4)(249,"h4",5),e(250,"Border Radius"),i()(),t(251,"div",6)(252,"p",7),e(253,"Use below-mentioned class to an element to easily round its corners."),i(),t(254,"div",8)(255,"div")(256,"div")(257,"div",10)(258,"div",11),n(259,"img",55),t(260,"p")(261,"code"),e(262,".rounded"),i()()(),t(263,"div",11),n(264,"img",56),t(265,"p")(266,"code"),e(267,".rounded-top"),i()()(),t(268,"div",11),n(269,"img",57),t(270,"p")(271,"code"),e(272,".rounded-end"),i()()(),t(273,"div",11),n(274,"img",58),t(275,"p")(276,"code"),e(277,".rounded-bottom"),i()()(),t(278,"div",11),n(279,"img",59),t(280,"p")(281,"code"),e(282,".rounded-start"),i()()(),t(283,"div",11),n(284,"img",60),t(285,"p")(286,"code"),e(287,".rounded-circle"),i()()(),t(288,"div",11),n(289,"img",56),t(290,"p")(291,"code"),e(292,".rounded-top"),i()()(),t(293,"div",11),n(294,"img",61),t(295,"p")(296,"code"),e(297,".rounded-pill"),i()()()()(),t(298,"div")(299,"h5",9),e(300,"Sizes"),i(),t(301,"div",10)(302,"div",11),n(303,"img",62),t(304,"p")(305,"code"),e(306,".rounded-0"),i()()(),t(307,"div",11),n(308,"img",63),t(309,"p")(310,"code"),e(311,".rounded-1"),i()()(),t(312,"div",11),n(313,"img",64),t(314,"p")(315,"code"),e(316,".rounded-2"),i()()(),t(317,"div",11),n(318,"img",65),t(319,"p")(320,"code"),e(321,".rounded-3"),i()()(),t(322,"div",11),n(323,"img",66),t(324,"p")(325,"code"),e(326,".rounded-4"),i()()(),t(327,"div",11),n(328,"img",67),t(329,"p")(330,"code"),e(331,".rounded-5"),i()()()()()()()()()()(),t(332,"div",1)(333,"div",2)(334,"div",3)(335,"div",4)(336,"h4",5),e(337,"Display Property"),i()(),t(338,"div",6)(339,"p",7),e(340,"Use below-mentioned class to an element to display the value of components and more with our display utilities."),i(),t(341,"div",8)(342,"div")(343,"div",1)(344,"div",18)(345,"div")(346,"h5",9),e(347,"Display classes"),i(),t(348,"div",68)(349,"table",69)(350,"thead",70)(351,"tr")(352,"th",71),e(353,"Display Property"),i(),t(354,"th",72),e(355,"Class"),i()()(),t(356,"tbody")(357,"tr")(358,"td"),e(359,"Display : none"),i(),t(360,"td")(361,"code"),e(362,".d-none"),i()()(),t(363,"tr")(364,"td"),e(365,"Display : inline"),i(),t(366,"td")(367,"code"),e(368,".d-inline"),i()()(),t(369,"tr")(370,"td"),e(371,"Display : inline-block"),i(),t(372,"td")(373,"code"),e(374,".d-inline-block"),i()()(),t(375,"tr")(376,"td"),e(377,"Display : block"),i(),t(378,"td")(379,"code"),e(380,".d-block"),i()()(),t(381,"tr")(382,"td"),e(383,"Display : table"),i(),t(384,"td")(385,"code"),e(386,".d-table"),i()()(),t(387,"tr")(388,"td"),e(389,"Display : table-cell"),i(),t(390,"td")(391,"code"),e(392,".d-table-cell"),i()()(),t(393,"tr")(394,"td"),e(395,"Display : table-row"),i(),t(396,"td")(397,"code"),e(398,".d-table-row"),i()()(),t(399,"tr")(400,"td"),e(401,"Display : flex"),i(),t(402,"td")(403,"code"),e(404,".d-flex"),i()()(),t(405,"tr")(406,"td"),e(407,"Display : inline-flex"),i(),t(408,"td")(409,"code"),e(410,".d-inline-flex"),i()()()()()()()(),t(411,"div",18)(412,"div")(413,"h5",9),e(414,"Hiding elements"),i(),t(415,"div",68)(416,"table",69)(417,"thead",70)(418,"tr")(419,"th",72),e(420,"Screen Size"),i(),t(421,"th",72),e(422,"Class"),i()()(),t(423,"tbody")(424,"tr")(425,"td"),e(426,"Hidden on all"),i(),t(427,"td")(428,"code"),e(429,".d-none"),i()()(),t(430,"tr")(431,"td"),e(432,"Hidden only on xs"),i(),t(433,"td")(434,"code"),e(435,".d-none .d-sm-block"),i()()(),t(436,"tr")(437,"td"),e(438,"Hidden only on sm"),i(),t(439,"td")(440,"code"),e(441,".d-sm-none .d-md-block"),i()()(),t(442,"tr")(443,"td"),e(444,"Hidden only on md"),i(),t(445,"td")(446,"code"),e(447,".d-md-none .d-lg-block"),i()()(),t(448,"tr")(449,"td"),e(450,"Hidden only on lg"),i(),t(451,"td")(452,"code"),e(453,".d-lg-none .d-xl-block"),i()()(),t(454,"tr")(455,"td"),e(456,"Hidden only on xl"),i(),t(457,"td")(458,"code"),e(459,".d-xl-none"),i()()(),t(460,"tr")(461,"td"),e(462,"Visible on all"),i(),t(463,"td")(464,"code"),e(465,".d-block"),i()()(),t(466,"tr")(467,"td"),e(468,"Visible only on xs"),i(),t(469,"td")(470,"code"),e(471,".d-block .d-sm-none"),i()()(),t(472,"tr")(473,"td"),e(474,"Visible only on sm"),i(),t(475,"td")(476,"code"),e(477,".d-none .d-sm-block .d-md-none"),i()()(),t(478,"tr")(479,"td"),e(480,"Visible only on md"),i(),t(481,"td")(482,"code"),e(483,".d-none .d-md-block .d-lg-none"),i()()(),t(484,"tr")(485,"td"),e(486,"Visible only on lg"),i(),t(487,"td")(488,"code"),e(489,".d-none .d-lg-block .d-xl-none"),i()()(),t(490,"tr")(491,"td"),e(492,"Visible only on xl"),i(),t(493,"td")(494,"code"),e(495,".d-none .d-xl-block"),i()()()()()()()()()(),t(496,"div",30)(497,"h5",73),e(498,"Display in print"),i(),t(499,"p",7),e(500,"Change the display value of elements when printing with our print display utility classes."),i(),t(501,"ul",74)(502,"li",75)(503,"code"),e(504,".d-print-none"),i()(),t(505,"li",75)(506,"code"),e(507,".d-print-inline"),i()(),t(508,"li",75)(509,"code"),e(510,".d-print-inline-block"),i()(),t(511,"li",75)(512,"code"),e(513,".d-print-block"),i()(),t(514,"li",75)(515,"code"),e(516,".d-print-table"),i()(),t(517,"li",75)(518,"code"),e(519,".d-print-table-row"),i()(),t(520,"li",75)(521,"code"),e(522,".d-print-table-cell"),i()(),t(523,"li",75)(524,"code"),e(525,".d-print-flex"),i()(),t(526,"li",75)(527,"code"),e(528,".d-print-inline-flex"),i()()()()()()()()(),t(529,"div",1)(530,"div",2)(531,"div",3)(532,"div",4)(533,"h4",5),e(534,"Custom Class"),i()(),t(535,"div",6)(536,"p",7),e(537,"Use the below-mentioned class to an element to custom display the value of components and more with our display utilities."),i(),t(538,"div",8)(539,"div")(540,"div",68)(541,"table",76)(542,"thead",70)(543,"tr")(544,"th",71),e(545,"Property"),i(),t(546,"th",72),e(547,"Class"),i()()(),t(548,"tbody")(549,"tr")(550,"td"),e(551,"font-family: 'Poppins', sans-serif;"),i(),t(552,"td")(553,"code"),e(554,".ff-base"),i()()(),t(555,"tr")(556,"td"),e(557,"font-family: 'hkgrotesk', sans-serif;"),i(),t(558,"td")(559,"code"),e(560,".ff-secondary"),i()()(),t(561,"tr")(562,"td"),e(563,"min-width: 80px;"),i(),t(564,"td")(565,"code"),e(566,".w-xs"),i()()(),t(567,"tr")(568,"td"),e(569,"min-width: 95px;"),i(),t(570,"td")(571,"code"),e(572,".w-sm"),i()()(),t(573,"tr")(574,"td"),e(575,"min-width: 110px;"),i(),t(576,"td")(577,"code"),e(578,".w-md"),i()()(),t(579,"tr")(580,"td"),e(581,"min-width: 140px;"),i(),t(582,"td")(583,"code"),e(584,".w-lg"),i()()(),t(585,"tr")(586,"td"),e(587,"min-width: 160px;"),i(),t(588,"td")(589,"code"),e(590,".w-xl"),i()()()()()()()()()()()(),t(591,"div",1)(592,"div",38)(593,"div",3)(594,"div",77)(595,"h4",78),e(596,"Stacks - Vertical"),i(),t(597,"div",79)(598,"div",80)(599,"label",81),e(600,"Show Code"),i(),t(601,"input",82),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(602,"div",6)(603,"p",83),e(604,"Use "),t(605,"code"),e(606,"vstack"),i(),e(607," class to create vertical layouts. Stacked items are full-width by default. Use "),t(608,"code"),e(609,"gap-"),i(),e(610," class with variation to add space between items."),i(),t(611,"div",8)(612,"div",84)(613,"div",85),e(614,"First item"),i(),t(615,"div",85),e(616,"Second item"),i(),t(617,"div",85),e(618,"Third item"),i()(),t(619,"div",86)(620,"h5",87),e(621,"Vertical Stacks Examples"),i(),t(622,"div",88)(623,"button",89),e(624,"Save changes"),i(),t(625,"button",90),e(626,"Cancel"),i()()()(),t(627,"div",91)(628,"pre",92)(629,"code"),e(630,`<!-- Stacks - Vertical -->
<div class="vstack gap-3">
<div class="bg-light border p-1 px-2 material-shadow">First item</div>
<div class="bg-light border p-1 px-2 material-shadow">Second item</div>
<div class="bg-light border p-1 px-2 material-shadow">Third item</div>
</div>`),i(),e(631,`

`),t(632,"code"),e(633,`<div class="vstack gap-2">
<button type="button" class="btn btn-primary">Save changes</button>
<button type="button" class="btn btn-outline-secondary material-shadow-none">Cancel</button>
</div>`),i()()()()()(),t(634,"div",38)(635,"div",3)(636,"div",77)(637,"h4",78),e(638,"Stacks - Horizontal"),i(),t(639,"div",79)(640,"div",80)(641,"label",93),e(642,"Show Code"),i(),t(643,"input",94),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(644,"div",6)(645,"p",83),e(646,"Use "),t(647,"code"),e(648,"hstack"),i(),e(649," class to create horizontal layouts. Stacked items are full-width by default. Use "),t(650,"code"),e(651,"gap-"),i(),e(652," class with variation to add space between items."),i(),t(653,"div",8)(654,"div",95)(655,"div",96),e(656,"First item"),i(),t(657,"div",96),e(658,"Second item"),i(),t(659,"div",96),e(660,"Third item"),i()(),t(661,"div",30)(662,"p",83),e(663,"Using horizontal margin utilities like "),t(664,"code"),e(665,"ms-auto"),i(),e(666," as spacers:"),i(),t(667,"div",95)(668,"div",97),e(669,"First item"),i(),t(670,"div",98),e(671,"Second item"),i(),t(672,"div",97),e(673,"Third item"),i()(),t(674,"div",99)(675,"div",97),e(676,"First item"),i(),n(677,"div",100),t(678,"div",97),e(679,"Second item"),i(),t(680,"div",98),e(681,"Third item"),i()()(),t(682,"div",86)(683,"h5",9),e(684,"Horizontal Stacks Examples"),i(),t(685,"div",95),n(686,"input",101),t(687,"button",89),e(688,"Submit"),i(),n(689,"div",100),t(690,"button",102),e(691,"Reset"),i()()()(),t(692,"div",91)(693,"pre",103)(694,"code"),e(695,`<!-- Stacks - Horizontal -->
<div class="hstack gap-3">
<div class="bg-light border material-shadow p-1 px-2">First item</div>
<div class="bg-light border material-shadow p-1 px-2">Second item</div>
<div class="bg-light border material-shadow p-1 px-2">Third item</div>
</div>`),i(),e(696,`

`),t(697,"code"),e(698,`<div class="hstack gap-3">
<div class="bg-light border material-shadow p-1 px-2">First item</div>
<div class="bg-light border material-shadow p-1 px-2 ms-auto">Second item</div>
<div class="bg-light border material-shadow p-1 px-2">Third item</div>
</div>

<div class="hstack gap-3">
<div class="bg-light border material-shadow p-1 px-2">First item</div>
<div class="vr"></div>
<div class="bg-light border material-shadow p-1 px-2">Second item</div>

<div class="bg-light border material-shadow p-1 px-2 ms-auto">Third item</div>
</div>`),i(),e(699,`

`),t(700,"code"),e(701,`<div class="hstack gap-3">
<input class="form-control me-auto" type="text" placeholder="Add your item here...">
<button type="button" class="btn btn-primary">Submit</button>
<div class="vr"></div>
<button type="button" class="btn btn-outline-secondary material-shadow">Reset</button>
</div>`),i()()()()()()(),t(702,"div",1)(703,"div",38)(704,"div",3)(705,"div",77)(706,"h4",78),e(707,"Text Selection"),i(),t(708,"div",79)(709,"div",80)(710,"label",104),e(711,"Show Code"),i(),t(712,"input",105),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(713,"div",6)(714,"p",83),e(715,"Use "),t(716,"code"),e(717,"user-select-all"),i(),e(718,", "),t(719,"code"),e(720,"user-select-auto"),i(),e(721,", or "),t(722,"code"),e(723,"user-select-none"),i(),e(724," class to the content which is selected when the user interacts with it."),i(),t(725,"div",8)(726,"div")(727,"p",106),e(728,"This paragraph will be entirely selected when clicked by the user. "),i(),t(729,"p",107),e(730,"This paragraph has default select behavior."),i(),t(731,"p",108),e(732,"This paragraph will not be selectable when clicked by the user. "),i()()(),t(733,"div",91)(734,"pre",92)(735,"code"),e(736,`<!-- Text Selection -->
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>`),i(),e(737,`

`),t(738,"code"),e(739,'<p class="user-select-auto">This paragraph has default select behavior.</p>'),i(),e(740,`

`),t(741,"code"),e(742,'<p class="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>'),i()()()()()(),t(743,"div",38)(744,"div",3)(745,"div",77)(746,"h4",78),e(747,"Pointer Events"),i(),t(748,"div",79)(749,"div",80)(750,"label",109),e(751,"Show Code"),i(),t(752,"input",110),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(753,"div",6)(754,"p",83),e(755,"Use "),t(756,"code"),e(757,"pe-none"),i(),e(758," class to prevent and "),t(759,"code"),e(760,"pe-auto"),i(),e(761," class to add element interactions respectively."),i(),t(762,"div",8)(763,"div")(764,"p")(765,"a",111),e(766,"This link"),i(),e(767," can not be clicked."),i(),t(768,"p")(769,"a",112),e(770,"This link"),i(),e(771," can be clicked (this is default behavior)."),i(),t(772,"p",113)(773,"a",114),e(774,"This link"),i(),e(775," can not be clicked because the "),t(776,"code"),e(777,"pointer-events"),i(),e(778," property is inherited from its parent. However, "),t(779,"a",115),e(780,"this link"),i(),e(781," has a "),t(782,"code"),e(783,"pe-auto"),i(),e(784," class and can be clicked."),i()()(),t(785,"div",91)(786,"pre",92)(787,"code"),e(788,`<!-- Pointer events -->
<p><a href="#" class="text-success pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>`),i(),e(789,`

`),t(790,"code"),e(791,'<p><a href="#" class="text-success pe-auto">This link</a> can be clicked (this is default behavior).</p>'),i(),e(792,`

`),t(793,"code"),e(794,'<p class="pe-none mb-0"><a href="#" class="text-success" tabindex="-1" aria-disabled="true">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#" class="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>'),i()()()()()()(),t(795,"div",1)(796,"div",2)(797,"div",3)(798,"div",77)(799,"h4",78),e(800,"Overflow"),i(),t(801,"div",79)(802,"div",80)(803,"label",116),e(804,"Show Code"),i(),t(805,"input",117),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(806,"div",6)(807,"p",7),e(808,"Use "),t(809,"code"),e(810,"overflow"),i(),e(811," property on the fly with four default values and classes."),i(),t(812,"div",8)(813,"div")(814,"div",1)(815,"div",118)(816,"div",119)(817,"h5",73),e(818,"Overflow Auto"),i(),t(819,"div",120)(820,"div",121),e(821," This is an example of using "),t(822,"code"),e(823,".overflow-auto"),i(),e(824," on an element with set width and height dimensions. By design, this content will vertically scroll. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et "),i()()()(),t(825,"div",118)(826,"div",119)(827,"h5",73),e(828,"Overflow Hidden"),i(),t(829,"div",120)(830,"div",122),e(831," This is an example of using "),t(832,"code"),e(833,".overflow-hidden"),i(),e(834," on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),i()()()(),t(835,"div",118)(836,"div",119)(837,"h5",73),e(838,"Overflow Visible"),i(),t(839,"div",120)(840,"div",123),e(841," This is an example of using "),t(842,"code"),e(843,".overflow-visible"),i(),e(844," on an element with set width and height dimensions.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),i()()()(),t(845,"div",118)(846,"div",119)(847,"h5",73),e(848,"Overflow Scroll"),i(),t(849,"div",120)(850,"div",124),e(851," This is an example of using "),t(852,"code"),e(853,".overflow-scroll"),i(),e(854," on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),i()()()()()()(),t(855,"div",91)(856,"pre",92)(857,"code"),e(858,`<!-- Overflow -->
<div class="overflow-hidden p-3 mb-0 bg-light" style="height: 100px;">
This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>`),i(),e(859,`

`),t(860,"code"),e(861,`<div class="overflow-visible p-3 mb-0 bg-light" style="height: 100px;">
This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>`),i(),e(862,`

`),t(863,"code"),e(864,`<div class="overflow-scroll p-3 mb-0 bg-light" style="height: 100px;">
This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>`),i()()()()()()(),t(865,"div",1)(866,"div",2)(867,"div",3)(868,"div",77)(869,"h4",78),e(870,"Position"),i(),t(871,"div",79)(872,"div",80)(873,"label",125),e(874,"Show Code"),i(),t(875,"input",126),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(876,"div",6)(877,"p",7),e(878,"Use below mentioned classes to arrange elements easily with the edge positioning utilities.The format is [property]-[position]."),i(),t(879,"div",8)(880,"div")(881,"div",1)(882,"div",127)(883,"div")(884,"h5",73),e(885,"Arrange elements"),i(),t(886,"div",128),n(887,"div",129)(888,"div",130)(889,"div",131)(890,"div",132)(891,"div",133)(892,"div",134),i()()(),t(893,"div",127)(894,"div",135)(895,"h5",136),e(896,"Center elements"),i(),t(897,"div",137),n(898,"div",138)(899,"div",139)(900,"div",140)(901,"div",141)(902,"div",142)(903,"div",143)(904,"div",144)(905,"div",145)(906,"div",146),i()()(),t(907,"div",127)(908,"div",135)(909,"h5",73),e(910,"Center elements"),i(),t(911,"div",137),n(912,"div",129)(913,"div",147)(914,"div",130)(915,"div",148)(916,"div",142)(917,"div",149)(918,"div",133)(919,"div",150)(920,"div",134),i()()()()()(),t(921,"div",91)(922,"pre",103)(923,"code"),e(924,`<!-- Arrange elements -->
<div class="position-relative p-5 bg-light m-3 border rounded" style="height: 180px;">
<div class="position-absolute top-0 start-0 avatar-xs bg-body rounded"></div>
<div class="position-absolute top-0 end-0 avatar-xs bg-body rounded"></div>
<div class="position-absolute top-50 start-50 avatar-xs bg-body rounded"></div>
<div class="position-absolute bottom-50 end-50 avatar-xs bg-body rounded"></div>
<div class="position-absolute bottom-0 start-0 avatar-xs bg-body rounded"></div>
<div class="position-absolute bottom-0 end-0 avatar-xs bg-body rounded"></div>
</div>`),i(),e(925,`

`),t(926,"code"),e(927,`<!-- Center elements -->
<div class="position-relative m-3 bg-light border rounded" style="height: 180px;">
<div class="position-absolute top-0 start-0 translate-middle avatar-xs bg-body rounded"></div>
<div class="position-absolute top-0 start-50 translate-middle avatar-xs bg-body rounded"></div>
<div class="position-absolute top-0 start-100 translate-middle avatar-xs bg-body rounded"></div>

<div class="position-absolute top-50 start-0 translate-middle avatar-xs bg-body rounded"></div>
<div class="position-absolute top-50 start-50 translate-middle avatar-xs bg-body rounded"></div>
<div class="position-absolute top-50 start-100 translate-middle avatar-xs bg-body rounded"></div>

<div class="position-absolute top-100 start-0 translate-middle avatar-xs bg-body rounded"></div>
<div class="position-absolute top-100 start-50 translate-middle avatar-xs bg-body rounded"></div>
<div class="position-absolute top-100 start-100 translate-middle avatar-xs bg-body rounded"></div>
</div>`),i(),e(928,`

`),t(929,"code"),e(930,`<!-- Center elements -->
<div class="position-relative m-3 bg-light border rounded" style="height: 180px;">
<div class="position-absolute top-0 start-0 avatar-xs bg-body rounded "></div>
<div class="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-body rounded"></div>
<div class="position-absolute top-0 end-0 avatar-xs bg-body rounded"></div>

<div class="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-body rounded"></div>
<div class="position-absolute top-50 start-50 translate-middle avatar-xs bg-body rounded"></div>
<div class="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-body rounded"></div>

<div class="position-absolute bottom-0 start-0 avatar-xs bg-body rounded"></div>
<div class="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-body rounded"></div>
<div class="position-absolute bottom-0 end-0 avatar-xs bg-body rounded"></div>
</div>`),i()()()()()()(),t(931,"div",1)(932,"div",2)(933,"div",3)(934,"div",77)(935,"h4",78),e(936,"Shadows"),i(),t(937,"div",79)(938,"div",80)(939,"label",151),e(940,"Show Code"),i(),t(941,"input",152),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(942,"div",6)(943,"p",7),e(944,"While shadows on components are disabled by default in Bootstrap and can be enabled via "),t(945,"code"),e(946,"$enable-shadows"),i(),e(947,", you can also quickly add or remove a shadow with our "),t(948,"code"),e(949,"box-shadow"),i(),e(950," utility classes. Includes support for "),t(951,"code"),e(952,".shadow-none"),i(),e(953," and three default sizes (which have associated variables to match)."),i(),t(954,"div",8)(955,"div",153)(956,"div",154)(957,"div",155),e(958,"No shadow"),i()(),t(959,"div",154)(960,"div",156),e(961,"Small shadow"),i()(),t(962,"div",154)(963,"div",157),e(964,"Regular shadow"),i()(),t(965,"div",154)(966,"div",158),e(967,"Larger shadow"),i()()()(),t(968,"div",91)(969,"pre",92)(970,"code"),e(971,`<!-- Shadows -->
<div class="shadow-none p-3 bg-light rounded">No shadow</div>`),i(),e(972,`

`),t(973,"code"),e(974,'<div class="shadow-sm p-3 bg-light rounded">Small shadow</div>'),i(),e(975,`

`),t(976,"code"),e(977,'<div class="shadow p-3 bg-light rounded">Regular shadow</div>'),i(),e(978,`

`),t(979,"code"),e(980,'<div class="shadow-lg p-3 bg-light rounded">Larger shadow</div>'),i()()()()()()(),t(981,"div",1)(982,"div",38)(983,"div",3)(984,"div",77)(985,"h4",78),e(986,"Width"),i(),t(987,"div",79)(988,"div",80)(989,"label",159),e(990,"Show Code"),i(),t(991,"input",160),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(992,"div",6)(993,"p",7),e(994,"Use "),t(995,"code"),e(996,"w-25"),i(),e(997,","),t(998,"code"),e(999,"w-50"),i(),e(1e3,","),t(1001,"code"),e(1002,"w-75"),i(),e(1003,","),t(1004,"code"),e(1005,"w-100"),i(),e(1006," or "),t(1007,"code"),e(1008,"w-auto"),i(),e(1009," class to set width "),t(1010,"code"),e(1011,"25%"),i(),e(1012,", "),t(1013,"code"),e(1014,"50%"),i(),e(1015,", "),t(1016,"code"),e(1017,"75%"),i(),e(1018,", "),t(1019,"code"),e(1020,"100%"),i(),e(1021,", or "),t(1022,"code"),e(1023,"auto"),i(),e(1024," by default respectively."),i(),t(1025,"div",8)(1026,"div")(1027,"div",161),e(1028,"Width 25%"),i(),t(1029,"div",162),e(1030,"Width 50%"),i(),t(1031,"div",163),e(1032,"Width 75%"),i(),t(1033,"div",164),e(1034,"Width 100%"),i(),t(1035,"div",165),e(1036,"Width auto"),i()()(),t(1037,"div",91)(1038,"pre",92)(1039,"code"),e(1040,`<!-- Width -->
<div class="w-25 p-3 bg-light">Width 25%</div>`),i(),e(1041,`

`),t(1042,"code"),e(1043,'<div class="w-50 p-3 bg-light">Width 50%</div>'),i(),e(1044,`

`),t(1045,"code"),e(1046,'<div class="w-75 p-3 bg-light">Width 75%</div>'),i(),e(1047,`

`),t(1048,"code"),e(1049,'<div class="w-100 p-3 bg-light">Width 100%</div>'),i(),e(1050,`

`),t(1051,"code"),e(1052,'<div class="w-auto p-3 bg-light">Width auto</div>'),i()()()()()(),t(1053,"div",38)(1054,"div",3)(1055,"div",77)(1056,"h4",78),e(1057,"Height"),i(),t(1058,"div",79)(1059,"div",80)(1060,"label",166),e(1061,"Show Code"),i(),t(1062,"input",167),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(1063,"div",6)(1064,"p",7),e(1065,"Use "),t(1066,"code"),e(1067,"h-25"),i(),e(1068,","),t(1069,"code"),e(1070,"h-50"),i(),e(1071,","),t(1072,"code"),e(1073,"h-75"),i(),e(1074,","),t(1075,"code"),e(1076,"h-100"),i(),e(1077," or "),t(1078,"code"),e(1079,"h-auto"),i(),e(1080," class to set height "),t(1081,"code"),e(1082,"25%"),i(),e(1083,", "),t(1084,"code"),e(1085,"50%"),i(),e(1086,", "),t(1087,"code"),e(1088,"75%"),i(),e(1089,", "),t(1090,"code"),e(1091,"100%"),i(),e(1092,", or "),t(1093,"code"),e(1094,"auto"),i(),e(1095," by default respectively."),i(),t(1096,"div",8)(1097,"div",168)(1098,"div",169)(1099,"div",170),e(1100,"Height25%"),i()(),t(1101,"div",169)(1102,"div",171),e(1103,"Height 50%"),i()(),t(1104,"div",169)(1105,"div",172),e(1106,"Height 75%"),i()(),t(1107,"div",169)(1108,"div",173),e(1109,"Height 100%"),i()(),t(1110,"div",169)(1111,"div",174),e(1112,"Height auto"),i()()()(),t(1113,"div",91)(1114,"pre",92)(1115,"code"),e(1116,`<!-- Height -->
<div class="h-25 p-3 bg-light">Height25%</div>`),i(),e(1117,`

`),t(1118,"code"),e(1119,'<div class="h-50 p-3 bg-light">Height50%</div>'),i(),e(1120,`

`),t(1121,"code"),e(1122,'<div class="h-75 p-3 bg-light">Height75%</div>'),i(),e(1123,`

`),t(1124,"code"),e(1125,'<div class="h-100 p-3 bg-light">Height100%</div>'),i(),e(1126,`

`),t(1127,"code"),e(1128,'<div class="h-auto p-3 bg-light">Height auto</div>'),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var Gi=(()=>{class l{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Base UI"},{label:"Colored Links",active:!0}]}ShowCode(r){let s=r.target.closest(".card"),a=s.children[1].children[1],d=s.children[1].children[2];d?.classList.toggle("d-none"),a?.classList.toggle("d-none")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=C({type:l,selectors:[["app-links"]],standalone:!1,decls:425,vars:1,consts:[["title","Colored Links",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-6"],[1,"card"],[1,"card-header","align-items-center","d-flex"],[1,"card-title","mb-0","flex-grow-1"],[1,"flex-shrink-0"],[1,"form-check","form-switch","form-switch-right","form-switch-md"],["for","link-colors-showcode",1,"form-label","text-muted"],["type","checkbox","id","link-colors-showcode",1,"form-check-input","code-switcher",3,"click"],[1,"card-body"],[1,"text-muted"],["href","ui-colors.html"],[1,"live-preview"],["href","javascript:void(0)",1,"link-primary"],["href","javascript:void(0)",1,"link-secondary"],["href","javascript:void(0)",1,"link-success"],["href","javascript:void(0)",1,"link-danger"],["href","javascript:void(0)",1,"link-warning"],["href","javascript:void(0)",1,"link-info"],["href","javascript:void(0)",1,"link-light"],["href","javascript:void(0)",1,"text-body"],["href","javascript:void(0)",1,"link-body-emphasis","mb-0"],[1,"d-none","code-view"],[1,"language-markup",2,"height","280px"],["for","link-utilities-showcode",1,"form-label","text-muted"],["type","checkbox","id","link-utilities-showcode",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0)",1,"link-primary","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-100-hover"],["href","javascript:void(0)",1,"link-secondary","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-100-hover"],["href","javascript:void(0)",1,"link-success","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-100-hover"],["href","javascript:void(0)",1,"link-danger","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-100-hover"],["href","javascript:void(0)",1,"link-warning","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-100-hover"],["href","javascript:void(0)",1,"link-info","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-100-hover"],["href","javascript:void(0)",1,"link-light","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-100-hover"],["href","javascript:void(0)",1,"text-body","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-100-hover"],["href","javascript:void(0)",1,"link-body-emphasis","link-offset-2","text-decoration-underline","link-underline-opacity-25","link-underline-opacity-75-hover","mb-0"],["for","link-opacity-showcode",1,"form-label","text-muted"],["type","checkbox","id","link-opacity-showcode",1,"form-check-input","code-switcher",3,"click"],["href","https://getbootstrap.com/docs/5.3/getting-started/accessibility/javascript:void(0)color-contrast","target","_blank"],["href","javascript:void(0)",1,"link-opacity-10"],["href","javascript:void(0)",1,"link-opacity-25"],["href","javascript:void(0)",1,"link-opacity-50"],["href","javascript:void(0)",1,"link-opacity-75"],[1,"mb-0"],["href","javascript:void(0)",1,"link-opacity-100"],[1,"language-markup"],["for","link-hover-opacity-showcode",1,"form-label","text-muted"],["type","checkbox","id","link-hover-opacity-showcode",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0)",1,"link-opacity-10-hover"],["href","javascript:void(0)",1,"link-opacity-25-hover"],["href","javascript:void(0)",1,"link-opacity-50-hover"],["href","javascript:void(0)",1,"link-opacity-75-hover"],["href","javascript:void(0)",1,"link-opacity-100-hover"],[1,"language-markup",2,"height","195px"],[1,"col-xxl-4"],["for","underline-color-showcode",1,"form-label","text-muted"],["type","checkbox","id","underline-color-showcode",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0)",1,"text-decoration-underline","link-underline-primary"],["href","javascript:void(0)",1,"text-decoration-underline","link-underline-secondary"],["href","javascript:void(0)",1,"text-decoration-underline","link-underline-success"],["href","javascript:void(0)",1,"text-decoration-underline","link-underline-danger"],["href","javascript:void(0)",1,"text-decoration-underline","link-underline-warning"],["href","javascript:void(0)",1,"text-decoration-underline","link-underline-info"],["href","javascript:void(0)",1,"text-decoration-underline","link-underline-light"],["href","javascript:void(0)",1,"text-decoration-underline","link-underline-dark"],["for","underline-opacity-showcode",1,"form-label","text-muted"],["type","checkbox","id","underline-opacity-showcode",1,"form-check-input","code-switcher"],["href","javascript:void(0)",1,"link-offset-2","text-decoration-underline","link-underline","link-underline-opacity-0"],["href","javascript:void(0)",1,"link-offset-2","text-decoration-underline","link-underline","link-underline-opacity-10"],["href","javascript:void(0)",1,"link-offset-2","text-decoration-underline","link-underline","link-underline-opacity-25"],["href","javascript:void(0)",1,"link-offset-2","text-decoration-underline","link-underline","link-underline-opacity-50"],["href","javascript:void(0)",1,"link-offset-2","text-decoration-underline","link-underline","link-underline-opacity-75"],["href","javascript:void(0)",1,"link-offset-2","text-decoration-underline","link-underline","link-underline-opacity-100"],["for","underline-offset-showcode",1,"form-label","text-muted"],["type","checkbox","id","underline-offset-showcode",1,"form-check-input","code-switcher",3,"click"],["href","javascript:void(0)"],["href","javascript:void(0)",1,"text-decoration-underline","link-offset-1"],["href","javascript:void(0)",1,"text-decoration-underline","link-offset-2"],["href","javascript:void(0)",1,"text-decoration-underline","link-offset-3"]],template:function(s,a){s&1&&(n(0,"app-breadcrumbs",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e(6,"Link colors"),i(),t(7,"div",6)(8,"div",7)(9,"label",8),e(10,"Show Code"),i(),t(11,"input",9),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(12,"div",10)(13,"p",11),e(14,"You can use the "),t(15,"code"),e(16,".link-*"),i(),e(17," classes to colorize links. Unlike the "),t(18,"a",12)(19,"code"),e(20,".text-*"),i(),e(21," classes"),i(),e(22,", these classes have a "),t(23,"code"),e(24,":hover"),i(),e(25," and "),t(26,"code"),e(27,":focus"),i(),e(28," state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast."),i(),t(29,"div",13)(30,"p")(31,"a",14),e(32,"Primary link"),i()(),t(33,"p")(34,"a",15),e(35,"Secondary link"),i()(),t(36,"p")(37,"a",16),e(38,"Success link"),i()(),t(39,"p")(40,"a",17),e(41,"Danger link"),i()(),t(42,"p")(43,"a",18),e(44,"Warning link"),i()(),t(45,"p")(46,"a",19),e(47,"Info link"),i()(),t(48,"p")(49,"a",20),e(50,"Light link"),i()(),t(51,"p")(52,"a",21),e(53,"Dark link"),i()(),t(54,"p")(55,"a",22),e(56,"Emphasis link"),i()()(),t(57,"div",23)(58,"pre",24)(59,"code"),e(60,'<p><a href="javascript:void(0)" class="link-primary">Primary link</a></p>'),i(),e(61,`

`),t(62,"code"),e(63,'<p><a href="javascript:void(0)" class="link-secondary">Secondary link</a></p>'),i(),e(64,`

`),t(65,"code"),e(66,'<p><a href="javascript:void(0)" class="link-success">Success link</a></p>'),i(),e(67,`

`),t(68,"code"),e(69,'<p><a href="javascript:void(0)" class="link-danger">Danger link</a></p>'),i(),e(70,`

`),t(71,"code"),e(72,'<p><a href="javascript:void(0)" class="link-warning">Warning link</a></p>'),i(),e(73,`

`),t(74,"code"),e(75,'<p><a href="javascript:void(0)" class="link-info">Info link</a></p>'),i(),e(76,`

`),t(77,"code"),e(78,'<p><a href="javascript:void(0)" class="link-light">Light link</a></p>'),i(),e(79,`

`),t(80,"code"),e(81,'<p><a href="javascript:void(0)" class="text-body">Dark link</a></p>'),i(),e(82,`

`),t(83,"code"),e(84,'<p><a href="javascript:void(0)" class="link-body-emphasis mb-0">Emphasis link</a></p>'),i()()()()()(),t(85,"div",2)(86,"div",3)(87,"div",4)(88,"h4",5),e(89,"Link utilities"),i(),t(90,"div",6)(91,"div",7)(92,"label",25),e(93,"Show Code"),i(),t(94,"input",26),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(95,"div",10)(96,"p",11),e(97,"Colored links can also be modified by our link utilities."),i(),t(98,"div",13)(99,"p")(100,"a",27),e(101,"Primary link"),i()(),t(102,"p")(103,"a",28),e(104,"Secondary link"),i()(),t(105,"p")(106,"a",29),e(107,"Success link"),i()(),t(108,"p")(109,"a",30),e(110,"Danger link"),i()(),t(111,"p")(112,"a",31),e(113,"Warning link"),i()(),t(114,"p")(115,"a",32),e(116,"Info link"),i()(),t(117,"p")(118,"a",33),e(119,"Light link"),i()(),t(120,"p")(121,"a",34),e(122,"Dark link"),i()(),t(123,"p")(124,"a",35),e(125,"Emphasis link"),i()()(),t(126,"div",23)(127,"pre",24)(128,"code"),e(129,'<p><a href="javascript:void(0)" class="link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</a></p>'),i(),e(130,`

`),t(131,"code"),e(132,'<p><a href="javascript:void(0)" class="link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</a></p>'),i(),e(133,`

`),t(134,"code"),e(135,'<p><a href="javascript:void(0)" class="link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Success link</a></p>'),i(),e(136,`

`),t(137,"Code"),e(138,'<p><a href="javascript:void(0)" class="link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</a></p>'),i(),e(139,`

`),t(140,"code"),e(141,'<p><a href="javascript:void(0)" class="link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</a></p>'),i(),e(142,`

`),t(143,"code"),e(144,'<p><a href="javascript:void(0)" class="link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Info link</a></p>'),i(),e(145,`

`),t(146,"code"),e(147,'<p><a href="javascript:void(0)" class="link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Light link</a></p>'),i(),e(148,`

`),t(149,"code"),e(150,'<p><a href="javascript:void(0)" class="text-body link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</a></p>'),i(),e(151,`

`),t(152,"code"),e(153,'<p><a href="javascript:void(0)" class="link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0">Emphasis link</a></p>'),i()()()()()()(),t(154,"div",1)(155,"div",2)(156,"div",3)(157,"div",4)(158,"h4",5),e(159,"Link Opacity"),i(),t(160,"div",6)(161,"div",7)(162,"label",36),e(163,"Show Code"),i(),t(164,"input",37),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(165,"div",10)(166,"p",11),e(167,"Change the alpha opacity of the link "),t(168,"code"),e(169,"rgba()"),i(),e(170," color value with utilities. Please be aware that changes to a color\u2019s opacity can lead to links with "),t(171,"a",38)(172,"em"),e(173,"insufficient"),i(),e(174," contrast"),i(),e(175,"."),i(),t(176,"div",13)(177,"p")(178,"a",39),e(179,"Link opacity 10"),i()(),t(180,"p")(181,"a",40),e(182,"Link opacity 25"),i()(),t(183,"p")(184,"a",41),e(185,"Link opacity 50"),i()(),t(186,"p")(187,"a",42),e(188,"Link opacity 75"),i()(),t(189,"p",43)(190,"a",44),e(191,"Link opacity 100"),i()()(),t(192,"div",23)(193,"pre",45)(194,"code"),e(195,'<p><a class="link-opacity-10" href="javascript:void(0)">Link opacity 10</a></p>'),i(),e(196,`

`),t(197,"code"),e(198,'<p><a class="link-opacity-25" href="javascript:void(0)">Link opacity 25</a></p>'),i(),e(199,`

`),t(200,"code"),e(201,'<p><a class="link-opacity-50" href="javascript:void(0)">Link opacity 50</a></p>'),i(),e(202,`

`),t(203,"code"),e(204,'<p><a class="link-opacity-75" href="javascript:void(0)">Link opacity 75</a></p>'),i(),e(205,`

`),t(206,"code"),e(207,'<p><a class="link-opacity-100" href="javascript:void(0)">Link opacity 100</a></p>'),i()()()()()(),t(208,"div",2)(209,"div",3)(210,"div",4)(211,"h4",5),e(212,"Link Opacity Hover"),i(),t(213,"div",6)(214,"div",7)(215,"label",46),e(216,"Show Code"),i(),t(217,"input",47),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(218,"div",10)(219,"p",11),e(220,"You can even change the opacity level on hover."),i(),t(221,"div",13)(222,"p")(223,"a",48),e(224,"Link hover opacity 10"),i()(),t(225,"p")(226,"a",49),e(227,"Link hover opacity 25"),i()(),t(228,"p")(229,"a",50),e(230,"Link hover opacity 50"),i()(),t(231,"p")(232,"a",51),e(233,"Link hover opacity 75"),i()(),t(234,"p",43)(235,"a",52),e(236,"Link hover opacity 100"),i()()(),t(237,"div",23)(238,"pre",53)(239,"code"),e(240,'<p><a class="link-opacity-10-hover" href="javascript:void(0)">Link hover opacity 10</a></p>'),i(),e(241,`

`),t(242,"code"),e(243,'<p><a class="link-opacity-25-hover" href="javascript:void(0)">Link hover opacity 25</a></p>'),i(),e(244,`

`),t(245,"code"),e(246,'<p><a class="link-opacity-50-hover" href="javascript:void(0)">Link hover opacity 50</a></p>'),i(),e(247,`

`),t(248,"code"),e(249,'<p><a class="link-opacity-75-hover" href="javascript:void(0)">Link hover opacity 75</a></p>'),i(),e(250,`

`),t(251,"code"),e(252,'<p><a class="link-opacity-100-hover" href="javascript:void(0)">Link hover opacity 100</a></p>'),i()()()()()()(),t(253,"div",1)(254,"div",54)(255,"div",3)(256,"div",4)(257,"h4",5),e(258,"Underline color"),i(),t(259,"div",6)(260,"div",7)(261,"label",55),e(262,"Show Code"),i(),t(263,"input",56),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(264,"div",10)(265,"p",11),e(266,"Change the underline\u2019s color independent of the link text color."),i(),t(267,"div",13)(268,"p")(269,"a",57),e(270,"Primary underline"),i()(),t(271,"p")(272,"a",58),e(273,"Secondary underline"),i()(),t(274,"p")(275,"a",59),e(276,"Success underline"),i()(),t(277,"p")(278,"a",60),e(279,"Danger underline"),i()(),t(280,"p")(281,"a",61),e(282,"Warning underline"),i()(),t(283,"p")(284,"a",62),e(285,"Info underline"),i()(),t(286,"p")(287,"a",63),e(288,"Light underline"),i()(),t(289,"p",43)(290,"a",64),e(291,"Dark underline"),i()()(),t(292,"div",23)(293,"pre",45)(294,"code"),e(295,'<p><a href="javascript:void(0)" class="text-decoration-underline link-underline-primary">Primary underline</a></p>'),i(),e(296,`

`),t(297,"code"),e(298,'<p><a href="javascript:void(0)" class="text-decoration-underline link-underline-secondary">Secondary underline</a></p>'),i(),e(299,`

`),t(300,"code"),e(301,'<p><a href="javascript:void(0)" class="text-decoration-underline link-underline-success">Success underline</a></p>'),i(),e(302,`

`),t(303,"code"),e(304,'<p><a href="javascript:void(0)" class="text-decoration-underline link-underline-danger">Danger underline</a></p>'),i(),e(305,`

`),t(306,"code"),e(307,'<p><a href="javascript:void(0)" class="text-decoration-underline link-underline-warning">Warning underline</a></p>'),i(),e(308,`

`),t(309,"code"),e(310,'<p><a href="javascript:void(0)" class="text-decoration-underline link-underline-info">Info underline</a></p>'),i(),e(311,`

`),t(312,"code"),e(313,'<p><a href="javascript:void(0)" class="text-decoration-underline link-underline-light">Light underline</a></p>'),i(),e(314,`

`),t(315,"code"),e(316,'<p class="mb-0"><a href="javascript:void(0)" class="text-decoration-underline link-underline-dark">Dark underline</a></p>'),i()()()()()(),t(317,"div",54)(318,"div",3)(319,"div",4)(320,"h4",5),e(321,"Underline opacity"),i(),t(322,"div",6)(323,"div",7)(324,"label",65),e(325,"Show Code"),i(),n(326,"input",66),i()()(),t(327,"div",10)(328,"p",11),e(329,"Change the underline\u2019s opacity. Requires adding "),t(330,"code"),e(331,".link-underline"),i(),e(332," to first set an "),t(333,"code"),e(334,"rgba()"),i(),e(335," color we use to then modify the alpha opacity."),i(),t(336,"div",13)(337,"p")(338,"a",67),e(339,"Underline opacity 0"),i()(),t(340,"p")(341,"a",68),e(342,"Underline opacity 10"),i()(),t(343,"p")(344,"a",69),e(345,"Underline opacity 25"),i()(),t(346,"p")(347,"a",70),e(348,"Underline opacity 50"),i()(),t(349,"p")(350,"a",71),e(351,"Underline opacity 75"),i()(),t(352,"p",43)(353,"a",72),e(354,"Underline opacity 100"),i()()(),t(355,"div",23)(356,"pre",45)(357,"code"),e(358,'<p><a class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-0" href="javascript:void(0)">Underline opacity 0</a></p>'),i(),e(359,`

`),t(360,"code"),e(361,'<p><a class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-10" href="javascript:void(0)">Underline opacity 10</a></p>'),i(),e(362,`

`),t(363,"code"),e(364,'<p><a class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-25" href="javascript:void(0)">Underline opacity 25</a></p>'),i(),e(365,`

`),t(366,"code"),e(367,'<p><a class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-50" href="javascript:void(0)">Underline opacity 50</a></p>'),i(),e(368,`

`),t(369,"code"),e(370,'<p><a class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-75" href="javascript:void(0)">Underline opacity 75</a></p>'),i(),e(371,`

`),t(372,"code"),e(373,'<p class="mb-0"><a class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-100" href="javascript:void(0)">Underline opacity 100</a></p>'),i()()()()()(),t(374,"div",54)(375,"div",3)(376,"div",4)(377,"h4",5),e(378,"Underline offset"),i(),t(379,"div",6)(380,"div",7)(381,"label",73),e(382,"Show Code"),i(),t(383,"input",74),c("click",function(o){return a.ShowCode(o)}),i()()()(),t(384,"div",10)(385,"p",11),e(386,"Change the underline\u2019s distance from your text. Offset is set in "),t(387,"code"),e(388,"em"),i(),e(389," units to automatically scale with the element\u2019s current "),t(390,"code"),e(391,"font-size"),i(),e(392,"."),i(),t(393,"div",13)(394,"p")(395,"a",75),e(396,"Default link"),i()(),t(397,"p")(398,"a",76),e(399,"Offset 1 link"),i()(),t(400,"p")(401,"a",77),e(402,"Offset 2 link"),i()(),t(403,"p",43)(404,"a",78),e(405,"Offset 3 link"),i()()(),t(406,"div",23)(407,"pre",45)(408,"code"),e(409,'<p><a class="link-offset-2 link-underline link-underline-opacity-0" href="javascript:void(0)">Underline opacity 0</a></p>'),i(),e(410,`

`),t(411,"code"),e(412,'<p><a class="link-offset-2 link-underline link-underline-opacity-10" href="javascript:void(0)">Underline opacity 10</a></p>'),i(),e(413,`

`),t(414,"code"),e(415,'<p><a class="link-offset-2 link-underline link-underline-opacity-25" href="javascript:void(0)">Underline opacity 25</a></p>'),i(),e(416,`

`),t(417,"code"),e(418,'<p><a class="link-offset-2 link-underline link-underline-opacity-50" href="javascript:void(0)">Underline opacity 50</a></p>'),i(),e(419,`

`),t(420,"code"),e(421,'<p><a class="link-offset-2 link-underline link-underline-opacity-75" href="javascript:void(0)">Underline opacity 75</a></p>'),i(),e(422,`

`),t(423,"code"),e(424,'<p><a class="link-offset-2 link-underline link-underline-opacity-100" href="javascript:void(0)">Underline opacity 100</a></p>'),i()()()()()()()),s&2&&p("breadcrumbItems",a.breadCrumbItems)},dependencies:[D],encapsulation:2})}}return l})();var Do=[{path:"alerts",component:Ei},{path:"badges",component:yi},{path:"buttons",component:ki},{path:"cards",component:_i},{path:"carousel",component:Ci},{path:"dropdowns",component:Ti},{path:"grid",component:Ai},{path:"images",component:Ii},{path:"tabs",component:Di},{path:"colors",component:Mi},{path:"accordions",component:ji},{path:"modals",component:Li},{path:"placeholder",component:Ni},{path:"progress",component:Bi},{path:"notifications",component:Ri},{path:"media",component:Vi},{path:"video",component:Wi},{path:"typography",component:Oi},{path:"list",component:Fi},{path:"general",component:Ui},{path:"ribbons",component:zi},{path:"utilities",component:Hi},{path:"links",component:Gi}],Yi=(()=>{class l{static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275mod=ne({type:l})}static{this.\u0275inj=ie({imports:[it.forChild(Do),it]})}}return l})();var ys=(()=>{class l{constructor(){ai()}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275mod=ne({type:l})}static{this.\u0275inj=ie({imports:[yt,Yi,li,zt,di,Ut,Ht,Gt,Zt,ii,mi,Xt,Yt,Wt,Lt,ti,ni,fi]})}}return l})();export{ys as UiModule};
