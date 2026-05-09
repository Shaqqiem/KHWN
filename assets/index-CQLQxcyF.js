(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function JE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ny={exports:{}},Gl={},by={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),ZE=Symbol.for("react.portal"),eT=Symbol.for("react.fragment"),tT=Symbol.for("react.strict_mode"),nT=Symbol.for("react.profiler"),rT=Symbol.for("react.provider"),iT=Symbol.for("react.context"),sT=Symbol.for("react.forward_ref"),oT=Symbol.for("react.suspense"),aT=Symbol.for("react.memo"),lT=Symbol.for("react.lazy"),em=Symbol.iterator;function uT(t){return t===null||typeof t!="object"?null:(t=em&&t[em]||t["@@iterator"],typeof t=="function"?t:null)}var Dy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oy=Object.assign,Vy={};function es(t,e,n){this.props=t,this.context=e,this.refs=Vy,this.updater=n||Dy}es.prototype.isReactComponent={};es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ly(){}Ly.prototype=es.prototype;function ih(t,e,n){this.props=t,this.context=e,this.refs=Vy,this.updater=n||Dy}var sh=ih.prototype=new Ly;sh.constructor=ih;Oy(sh,es.prototype);sh.isPureReactComponent=!0;var tm=Array.isArray,jy=Object.prototype.hasOwnProperty,oh={current:null},My={key:!0,ref:!0,__self:!0,__source:!0};function Fy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jy.call(e,r)&&!My.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Po,type:t,key:s,ref:o,props:i,_owner:oh.current}}function cT(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function dT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nm=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dT(""+t.key):e.toString(36)}function ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case ZE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tc(o,0):r,tm(i)?(n="",t!=null&&(n=t.replace(nm,"$&/")+"/"),ja(i,e,n,"",function(d){return d})):i!=null&&(ah(i)&&(i=cT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+tc(s,l);o+=ja(s,e,n,u,i)}else if(u=uT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+tc(s,l++),o+=ja(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(t,e,n){if(t==null)return t;var r=[],i=0;return ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Ma={transition:null},fT={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Ma,ReactCurrentOwner:oh};function Uy(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ha,forEach:function(t,e,n){ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ha(t,function(){e++}),e},toArray:function(t){return ha(t,function(e){return e})||[]},only:function(t){if(!ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=es;te.Fragment=eT;te.Profiler=nT;te.PureComponent=ih;te.StrictMode=tT;te.Suspense=oT;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fT;te.act=Uy;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Oy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=oh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)jy.call(e,u)&&!My.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Po,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:iT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rT,_context:t},t.Consumer=t};te.createElement=Fy;te.createFactory=function(t){var e=Fy.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:sT,render:t}};te.isValidElement=ah;te.lazy=function(t){return{$$typeof:lT,_payload:{_status:-1,_result:t},_init:hT}};te.memo=function(t,e){return{$$typeof:aT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ma.transition;Ma.transition={};try{t()}finally{Ma.transition=e}};te.unstable_act=Uy;te.useCallback=function(t,e){return pt.current.useCallback(t,e)};te.useContext=function(t){return pt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};te.useEffect=function(t,e){return pt.current.useEffect(t,e)};te.useId=function(){return pt.current.useId()};te.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return pt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};te.useRef=function(t){return pt.current.useRef(t)};te.useState=function(t){return pt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return pt.current.useTransition()};te.version="18.3.1";by.exports=te;var B=by.exports;const pT=JE(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mT=B,gT=Symbol.for("react.element"),yT=Symbol.for("react.fragment"),vT=Object.prototype.hasOwnProperty,_T=mT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wT={key:!0,ref:!0,__self:!0,__source:!0};function By(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vT.call(e,r)&&!wT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gT,type:t,key:s,ref:o,props:i,_owner:_T.current}}Gl.Fragment=yT;Gl.jsx=By;Gl.jsxs=By;Ny.exports=Gl;var h=Ny.exports,Bc={},zy={exports:{}},Pt={},$y={exports:{}},Wy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,W){var X=M.length;M.push(W);e:for(;0<X;){var _e=X-1>>>1,de=M[_e];if(0<i(de,W))M[_e]=W,M[X]=de,X=_e;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var W=M[0],X=M.pop();if(X!==W){M[0]=X;e:for(var _e=0,de=M.length,Ce=de>>>1;_e<Ce;){var pn=2*(_e+1)-1,mn=M[pn],gn=pn+1,yn=M[gn];if(0>i(mn,X))gn<de&&0>i(yn,mn)?(M[_e]=yn,M[gn]=X,_e=gn):(M[_e]=mn,M[pn]=X,_e=pn);else if(gn<de&&0>i(yn,X))M[_e]=yn,M[gn]=X,_e=gn;else break e}}return W}function i(M,W){var X=M.sortIndex-W.sortIndex;return X!==0?X:M.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,g=null,y=3,S=!1,R=!1,b=!1,D=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(M){for(var W=n(d);W!==null;){if(W.callback===null)r(d);else if(W.startTime<=M)r(d),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(d)}}function A(M){if(b=!1,I(M),!R)if(n(u)!==null)R=!0,$(L);else{var W=n(d);W!==null&&ee(A,W.startTime-M)}}function L(M,W){R=!1,b&&(b=!1,E(m),m=-1),S=!0;var X=y;try{for(I(W),g=n(u);g!==null&&(!(g.expirationTime>W)||M&&!C());){var _e=g.callback;if(typeof _e=="function"){g.callback=null,y=g.priorityLevel;var de=_e(g.expirationTime<=W);W=t.unstable_now(),typeof de=="function"?g.callback=de:g===n(u)&&r(u),I(W)}else r(u);g=n(u)}if(g!==null)var Ce=!0;else{var pn=n(d);pn!==null&&ee(A,pn.startTime-W),Ce=!1}return Ce}finally{g=null,y=X,S=!1}}var O=!1,_=null,m=-1,w=5,x=-1;function C(){return!(t.unstable_now()-x<w)}function P(){if(_!==null){var M=t.unstable_now();x=M;var W=!0;try{W=_(!0,M)}finally{W?k():(O=!1,_=null)}}else O=!1}var k;if(typeof T=="function")k=function(){T(P)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,fn=Fe.port2;Fe.port1.onmessage=P,k=function(){fn.postMessage(null)}}else k=function(){D(P,0)};function $(M){_=M,O||(O=!0,k())}function ee(M,W){m=D(function(){M(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,$(L))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(M){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var X=y;y=W;try{return M()}finally{y=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var X=y;y=M;try{return W()}finally{y=X}},t.unstable_scheduleCallback=function(M,W,X){var _e=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_e+X:_e):X=_e,M){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=X+de,M={id:p++,callback:W,priorityLevel:M,startTime:X,expirationTime:de,sortIndex:-1},X>_e?(M.sortIndex=X,e(d,M),n(u)===null&&M===n(d)&&(b?(E(m),m=-1):b=!0,ee(A,X-_e))):(M.sortIndex=de,e(u,M),R||S||(R=!0,$(L))),M},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(M){var W=y;return function(){var X=y;y=W;try{return M.apply(this,arguments)}finally{y=X}}}})(Wy);$y.exports=Wy;var ET=$y.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT=B,Ct=ET;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hy=new Set,no={};function ii(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(no[t]=e,t=0;t<e.length;t++)Hy.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,IT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},im={};function ST(t){return zc.call(im,t)?!0:zc.call(rm,t)?!1:IT.test(t)?im[t]=!0:(rm[t]=!0,!1)}function kT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xT(t,e,n,r){if(e===null||typeof e>"u"||kT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lh,uh);Qe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lh,uh);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lh,uh);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ch(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xT(e,n,i,r)&&(n=null),r||i===null?ST(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=TT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),yi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),qy=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),fh=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),Gy=Symbol.for("react.offscreen"),sm=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,nc;function Ns(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var rc=!1;function ic(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ns(t):""}function AT(t){switch(t.tag){case 5:return Ns(t.type);case 16:return Ns("Lazy");case 13:return Ns("Suspense");case 19:return Ns("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case yi:return"Portal";case $c:return"Profiler";case dh:return"StrictMode";case Wc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ky:return(t.displayName||"Context")+".Consumer";case qy:return(t._context.displayName||"Context")+".Provider";case hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fh:return e=t.displayName||null,e!==null?e:qc(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return qc(t(e))}catch{}}return null}function RT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(e);case 8:return e===dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CT(t){var e=Qy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=CT(t))}function Yy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kc(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xy(t,e){e=e.checked,e!=null&&ch(t,"checked",e,!1)}function Gc(t,e){Xy(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qc(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qc(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bs=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(bs(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function Jy(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,ev=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PT=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){PT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var NT=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(NT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,Pi=null,Ni=null;function cm(t){if(t=Do(t)){if(typeof td!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Zl(e),td(t.stateNode,t.type,e))}}function rv(t){Pi?Ni?Ni.push(t):Ni=[t]:Pi=t}function iv(){if(Pi){var t=Pi,e=Ni;if(Ni=Pi=null,cm(t),e)for(t=0;t<e.length;t++)cm(e[t])}}function sv(t,e){return t(e)}function ov(){}var sc=!1;function av(t,e,n){if(sc)return t(e,n);sc=!0;try{return sv(t,e,n)}finally{sc=!1,(Pi!==null||Ni!==null)&&(ov(),iv())}}function io(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var nd=!1;if(Nn)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){nd=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{nd=!1}function bT(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var zs=!1,ol=null,al=!1,rd=null,DT={onError:function(t){zs=!0,ol=t}};function OT(t,e,n,r,i,s,o,l,u){zs=!1,ol=null,bT.apply(DT,arguments)}function VT(t,e,n,r,i,s,o,l,u){if(OT.apply(this,arguments),zs){if(zs){var d=ol;zs=!1,ol=null}else throw Error(U(198));al||(al=!0,rd=d)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dm(t){if(si(t)!==t)throw Error(U(188))}function LT(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dm(i),t;if(s===r)return dm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function uv(t){return t=LT(t),t!==null?cv(t):null}function cv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cv(t);if(e!==null)return e;t=t.sibling}return null}var dv=Ct.unstable_scheduleCallback,hm=Ct.unstable_cancelCallback,jT=Ct.unstable_shouldYield,MT=Ct.unstable_requestPaint,be=Ct.unstable_now,FT=Ct.unstable_getCurrentPriorityLevel,mh=Ct.unstable_ImmediatePriority,hv=Ct.unstable_UserBlockingPriority,ll=Ct.unstable_NormalPriority,UT=Ct.unstable_LowPriority,fv=Ct.unstable_IdlePriority,Ql=null,nn=null;function BT(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:WT,zT=Math.log,$T=Math.LN2;function WT(t){return t>>>=0,t===0?32:31-(zT(t)/$T|0)|0}var ga=64,ya=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ds(l):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function HT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=HT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pv(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function KT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function mv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gv,yh,yv,vv,_v,sd=!1,va=[],or=null,ar=null,lr=null,so=new Map,oo=new Map,Xn=[],GT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fm(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Do(e),e!==null&&yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QT(t,e,n,r,i){switch(e){case"focusin":return or=Ts(or,t,e,n,r,i),!0;case"dragenter":return ar=Ts(ar,t,e,n,r,i),!0;case"mouseover":return lr=Ts(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return so.set(s,Ts(so.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oo.set(s,Ts(oo.get(s)||null,t,e,n,r,i)),!0}return!1}function wv(t){var e=jr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=lv(n),e!==null){t.blockedOn=e,_v(t.priority,function(){yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ed=r,n.target.dispatchEvent(r),ed=null}else return e=Do(n),e!==null&&yh(e),t.blockedOn=n,!1;e.shift()}return!0}function pm(t,e,n){Fa(t)&&n.delete(e)}function YT(){sd=!1,or!==null&&Fa(or)&&(or=null),ar!==null&&Fa(ar)&&(ar=null),lr!==null&&Fa(lr)&&(lr=null),so.forEach(pm),oo.forEach(pm)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,sd||(sd=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,YT)))}function ao(t){function e(i){return Is(i,t)}if(0<va.length){Is(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Is(or,t),ar!==null&&Is(ar,t),lr!==null&&Is(lr,t),so.forEach(e),oo.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)wv(n),n.blockedOn===null&&Xn.shift()}var bi=Un.ReactCurrentBatchConfig,cl=!0;function XT(t,e,n,r){var i=ue,s=bi.transition;bi.transition=null;try{ue=1,vh(t,e,n,r)}finally{ue=i,bi.transition=s}}function JT(t,e,n,r){var i=ue,s=bi.transition;bi.transition=null;try{ue=4,vh(t,e,n,r)}finally{ue=i,bi.transition=s}}function vh(t,e,n,r){if(cl){var i=od(t,e,n,r);if(i===null)gc(t,e,r,dl,n),fm(t,r);else if(QT(i,t,e,n,r))r.stopPropagation();else if(fm(t,r),e&4&&-1<GT.indexOf(t)){for(;i!==null;){var s=Do(i);if(s!==null&&gv(s),s=od(t,e,n,r),s===null&&gc(t,e,r,dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gc(t,e,r,null,n)}}var dl=null;function od(t,e,n,r){if(dl=null,t=ph(r),t=jr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function Ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FT()){case mh:return 1;case hv:return 4;case ll:case UT:return 16;case fv:return 536870912;default:return 16}default:return 16}}var rr=null,_h=null,Ua=null;function Tv(){if(Ua)return Ua;var t,e=_h,n=e.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ua=i.slice(t,1<r?1-r:void 0)}function Ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function mm(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:mm,this.isPropagationStopped=mm,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wh=Nt(ts),bo=Te({},ts,{view:0,detail:0}),ZT=Nt(bo),ac,lc,Ss,Yl=Te({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(ac=t.screenX-Ss.screenX,lc=t.screenY-Ss.screenY):lc=ac=0,Ss=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),gm=Nt(Yl),eI=Te({},Yl,{dataTransfer:0}),tI=Nt(eI),nI=Te({},bo,{relatedTarget:0}),uc=Nt(nI),rI=Te({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),iI=Nt(rI),sI=Te({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oI=Nt(sI),aI=Te({},ts,{data:0}),ym=Nt(aI),lI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cI[t])?!!e[t]:!1}function Eh(){return dI}var hI=Te({},bo,{key:function(t){if(t.key){var e=lI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eh,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fI=Nt(hI),pI=Te({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Nt(pI),mI=Te({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eh}),gI=Nt(mI),yI=Te({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),vI=Nt(yI),_I=Te({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wI=Nt(_I),EI=[9,13,27,32],Th=Nn&&"CompositionEvent"in window,$s=null;Nn&&"documentMode"in document&&($s=document.documentMode);var TI=Nn&&"TextEvent"in window&&!$s,Iv=Nn&&(!Th||$s&&8<$s&&11>=$s),_m=" ",wm=!1;function Sv(t,e){switch(t){case"keyup":return EI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _i=!1;function II(t,e){switch(t){case"compositionend":return kv(e);case"keypress":return e.which!==32?null:(wm=!0,_m);case"textInput":return t=e.data,t===_m&&wm?null:t;default:return null}}function SI(t,e){if(_i)return t==="compositionend"||!Th&&Sv(t,e)?(t=Tv(),Ua=_h=rr=null,_i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iv&&e.locale!=="ko"?null:e.data;default:return null}}var kI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kI[t.type]:e==="textarea"}function xv(t,e,n,r){rv(r),e=hl(e,"onChange"),0<e.length&&(n=new wh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ws=null,lo=null;function xI(t){jv(t,0)}function Xl(t){var e=Ti(t);if(Yy(e))return t}function AI(t,e){if(t==="change")return e}var Av=!1;if(Nn){var cc;if(Nn){var dc="oninput"in document;if(!dc){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),dc=typeof Tm.oninput=="function"}cc=dc}else cc=!1;Av=cc&&(!document.documentMode||9<document.documentMode)}function Im(){Ws&&(Ws.detachEvent("onpropertychange",Rv),lo=Ws=null)}function Rv(t){if(t.propertyName==="value"&&Xl(lo)){var e=[];xv(e,lo,t,ph(t)),av(xI,e)}}function RI(t,e,n){t==="focusin"?(Im(),Ws=e,lo=n,Ws.attachEvent("onpropertychange",Rv)):t==="focusout"&&Im()}function CI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(lo)}function PI(t,e){if(t==="click")return Xl(e)}function NI(t,e){if(t==="input"||t==="change")return Xl(e)}function bI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:bI;function uo(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zc.call(e,i)||!Yt(t[i],e[i]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function km(t,e){var n=Sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function Cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pv(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DI(t){var e=Pv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cv(n.ownerDocument.documentElement,n)){if(r!==null&&Ih(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=km(n,s);var o=km(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OI=Nn&&"documentMode"in document&&11>=document.documentMode,wi=null,ad=null,Hs=null,ld=!1;function xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||wi==null||wi!==sl(r)||(r=wi,"selectionStart"in r&&Ih(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&uo(Hs,r)||(Hs=r,r=hl(ad,"onSelect"),0<r.length&&(e=new wh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},hc={},Nv={};Nn&&(Nv=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function Jl(t){if(hc[t])return hc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nv)return hc[t]=e[n];return t}var bv=Jl("animationend"),Dv=Jl("animationiteration"),Ov=Jl("animationstart"),Vv=Jl("transitionend"),Lv=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){Lv.set(t,e),ii(e,[t])}for(var fc=0;fc<Am.length;fc++){var pc=Am[fc],VI=pc.toLowerCase(),LI=pc[0].toUpperCase()+pc.slice(1);Sr(VI,"on"+LI)}Sr(bv,"onAnimationEnd");Sr(Dv,"onAnimationIteration");Sr(Ov,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(Vv,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Rm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VT(r,e,void 0,t),t.currentTarget=null}function jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Rm(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Rm(i,l,d),s=u}}}if(al)throw t=rd,al=!1,rd=null,t}function me(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var r=t+"__bubble";n.has(r)||(Mv(e,t,2,!1),n.add(r))}function mc(t,e,n){var r=0;e&&(r|=4),Mv(n,t,r,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Ea]){t[Ea]=!0,Hy.forEach(function(n){n!=="selectionchange"&&(jI.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,mc("selectionchange",!1,e))}}function Mv(t,e,n,r){switch(Ev(e)){case 1:var i=XT;break;case 4:i=JT;break;default:i=vh}n=i.bind(null,e,n,t),i=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}av(function(){var d=s,p=ph(n),g=[];e:{var y=Lv.get(t);if(y!==void 0){var S=wh,R=t;switch(t){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":S=fI;break;case"focusin":R="focus",S=uc;break;case"focusout":R="blur",S=uc;break;case"beforeblur":case"afterblur":S=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=tI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=gI;break;case bv:case Dv:case Ov:S=iI;break;case Vv:S=vI;break;case"scroll":S=ZT;break;case"wheel":S=wI;break;case"copy":case"cut":case"paste":S=oI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=vm}var b=(e&4)!==0,D=!b&&t==="scroll",E=b?y!==null?y+"Capture":null:y;b=[];for(var T=d,I;T!==null;){I=T;var A=I.stateNode;if(I.tag===5&&A!==null&&(I=A,E!==null&&(A=io(T,E),A!=null&&b.push(ho(T,A,I)))),D)break;T=T.return}0<b.length&&(y=new S(y,R,null,n,p),g.push({event:y,listeners:b}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&n!==ed&&(R=n.relatedTarget||n.fromElement)&&(jr(R)||R[bn]))break e;if((S||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=d,R=R?jr(R):null,R!==null&&(D=si(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=d),S!==R)){if(b=gm,A="onMouseLeave",E="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(b=vm,A="onPointerLeave",E="onPointerEnter",T="pointer"),D=S==null?y:Ti(S),I=R==null?y:Ti(R),y=new b(A,T+"leave",S,n,p),y.target=D,y.relatedTarget=I,A=null,jr(p)===d&&(b=new b(E,T+"enter",R,n,p),b.target=I,b.relatedTarget=D,A=b),D=A,S&&R)t:{for(b=S,E=R,T=0,I=b;I;I=fi(I))T++;for(I=0,A=E;A;A=fi(A))I++;for(;0<T-I;)b=fi(b),T--;for(;0<I-T;)E=fi(E),I--;for(;T--;){if(b===E||E!==null&&b===E.alternate)break t;b=fi(b),E=fi(E)}b=null}else b=null;S!==null&&Cm(g,y,S,b,!1),R!==null&&D!==null&&Cm(g,D,R,b,!0)}}e:{if(y=d?Ti(d):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var L=AI;else if(Em(y))if(Av)L=NI;else{L=CI;var O=RI}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(L=PI);if(L&&(L=L(t,d))){xv(g,L,n,p);break e}O&&O(t,y,d),t==="focusout"&&(O=y._wrapperState)&&O.controlled&&y.type==="number"&&Qc(y,"number",y.value)}switch(O=d?Ti(d):window,t){case"focusin":(Em(O)||O.contentEditable==="true")&&(wi=O,ad=d,Hs=null);break;case"focusout":Hs=ad=wi=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,xm(g,n,p);break;case"selectionchange":if(OI)break;case"keydown":case"keyup":xm(g,n,p)}var _;if(Th)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else _i?Sv(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Iv&&n.locale!=="ko"&&(_i||m!=="onCompositionStart"?m==="onCompositionEnd"&&_i&&(_=Tv()):(rr=p,_h="value"in rr?rr.value:rr.textContent,_i=!0)),O=hl(d,m),0<O.length&&(m=new ym(m,t,null,n,p),g.push({event:m,listeners:O}),_?m.data=_:(_=kv(n),_!==null&&(m.data=_)))),(_=TI?II(t,n):SI(t,n))&&(d=hl(d,"onBeforeInput"),0<d.length&&(p=new ym("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=_))}jv(g,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=io(t,n),s!=null&&r.unshift(ho(t,s,i)),s=io(t,e),s!=null&&r.push(ho(t,s,i))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=io(n,s),u!=null&&o.unshift(ho(n,u,l))):i||(u=io(n,s),u!=null&&o.push(ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MI=/\r\n?/g,FI=/\u0000|\uFFFD/g;function Pm(t){return(typeof t=="string"?t:""+t).replace(MI,`
`).replace(FI,"")}function Ta(t,e,n){if(e=Pm(e),Pm(t)!==e&&n)throw Error(U(425))}function fl(){}var ud=null,cd=null;function dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,UI=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,BI=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(zI)}:hd;function zI(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ao(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),en="__reactFiber$"+ns,fo="__reactProps$"+ns,bn="__reactContainer$"+ns,fd="__reactEvents$"+ns,$I="__reactListeners$"+ns,WI="__reactHandles$"+ns;function jr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bm(t);t!==null;){if(n=t[en])return n;t=bm(t)}return e}t=n,n=t.parentNode}return null}function Do(t){return t=t[en]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Zl(t){return t[fo]||null}var pd=[],Ii=-1;function kr(t){return{current:t}}function ge(t){0>Ii||(t.current=pd[Ii],pd[Ii]=null,Ii--)}function fe(t,e){Ii++,pd[Ii]=t.current,t.current=e}var _r={},ot=kr(_r),_t=kr(!1),qr=_r;function Ui(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function pl(){ge(_t),ge(ot)}function Dm(t,e,n){if(ot.current!==_r)throw Error(U(168));fe(ot,e),fe(_t,n)}function Fv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,RT(t)||"Unknown",i));return Te({},n,r)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,qr=ot.current,fe(ot,t),fe(_t,_t.current),!0}function Om(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Fv(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,ge(_t),ge(ot),fe(ot,t)):ge(_t),fe(_t,n)}var En=null,eu=!1,vc=!1;function Uv(t){En===null?En=[t]:En.push(t)}function HI(t){eu=!0,Uv(t)}function xr(){if(!vc&&En!==null){vc=!0;var t=0,e=ue;try{var n=En;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,eu=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),dv(mh,xr),i}finally{ue=e,vc=!1}}return null}var Si=[],ki=0,gl=null,yl=0,bt=[],Dt=0,Kr=null,In=1,Sn="";function Dr(t,e){Si[ki++]=yl,Si[ki++]=gl,gl=t,yl=e}function Bv(t,e,n){bt[Dt++]=In,bt[Dt++]=Sn,bt[Dt++]=Kr,Kr=t;var r=In;t=Sn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-Kt(e)+i|n<<i|r,Sn=s+t}else In=1<<s|n<<i|r,Sn=t}function Sh(t){t.return!==null&&(Dr(t,1),Bv(t,1,0))}function kh(t){for(;t===gl;)gl=Si[--ki],Si[ki]=null,yl=Si[--ki],Si[ki]=null;for(;t===Kr;)Kr=bt[--Dt],bt[Dt]=null,Sn=bt[--Dt],bt[Dt]=null,In=bt[--Dt],bt[Dt]=null}var Rt=null,kt=null,ye=!1,Wt=null;function zv(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,kt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:In,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,kt=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(ye){var e=kt;if(e){var n=e;if(!Vm(t,e)){if(md(t))throw Error(U(418));e=ur(n.nextSibling);var r=Rt;e&&Vm(t,e)?zv(r,n):(t.flags=t.flags&-4097|2,ye=!1,Rt=t)}}else{if(md(t))throw Error(U(418));t.flags=t.flags&-4097|2,ye=!1,Rt=t}}}function Lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function Ia(t){if(t!==Rt)return!1;if(!ye)return Lm(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dd(t.type,t.memoizedProps)),e&&(e=kt)){if(md(t))throw $v(),Error(U(418));for(;e;)zv(t,e),e=ur(e.nextSibling)}if(Lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Rt?ur(t.stateNode.nextSibling):null;return!0}function $v(){for(var t=kt;t;)t=ur(t.nextSibling)}function Bi(){kt=Rt=null,ye=!1}function xh(t){Wt===null?Wt=[t]:Wt.push(t)}var qI=Un.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jm(t){var e=t._init;return e(t._payload)}function Wv(t){function e(E,T){if(t){var I=E.deletions;I===null?(E.deletions=[T],E.flags|=16):I.push(T)}}function n(E,T){if(!t)return null;for(;T!==null;)e(E,T),T=T.sibling;return null}function r(E,T){for(E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function i(E,T){return E=fr(E,T),E.index=0,E.sibling=null,E}function s(E,T,I){return E.index=I,t?(I=E.alternate,I!==null?(I=I.index,I<T?(E.flags|=2,T):I):(E.flags|=2,T)):(E.flags|=1048576,T)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,T,I,A){return T===null||T.tag!==6?(T=kc(I,E.mode,A),T.return=E,T):(T=i(T,I),T.return=E,T)}function u(E,T,I,A){var L=I.type;return L===vi?p(E,T,I.props.children,A,I.key):T!==null&&(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Gn&&jm(L)===T.type)?(A=i(T,I.props),A.ref=ks(E,T,I),A.return=E,A):(A=Ga(I.type,I.key,I.props,null,E.mode,A),A.ref=ks(E,T,I),A.return=E,A)}function d(E,T,I,A){return T===null||T.tag!==4||T.stateNode.containerInfo!==I.containerInfo||T.stateNode.implementation!==I.implementation?(T=xc(I,E.mode,A),T.return=E,T):(T=i(T,I.children||[]),T.return=E,T)}function p(E,T,I,A,L){return T===null||T.tag!==7?(T=$r(I,E.mode,A,L),T.return=E,T):(T=i(T,I),T.return=E,T)}function g(E,T,I){if(typeof T=="string"&&T!==""||typeof T=="number")return T=kc(""+T,E.mode,I),T.return=E,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case fa:return I=Ga(T.type,T.key,T.props,null,E.mode,I),I.ref=ks(E,null,T),I.return=E,I;case yi:return T=xc(T,E.mode,I),T.return=E,T;case Gn:var A=T._init;return g(E,A(T._payload),I)}if(bs(T)||ws(T))return T=$r(T,E.mode,I,null),T.return=E,T;Sa(E,T)}return null}function y(E,T,I,A){var L=T!==null?T.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(E,T,""+I,A);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case fa:return I.key===L?u(E,T,I,A):null;case yi:return I.key===L?d(E,T,I,A):null;case Gn:return L=I._init,y(E,T,L(I._payload),A)}if(bs(I)||ws(I))return L!==null?null:p(E,T,I,A,null);Sa(E,I)}return null}function S(E,T,I,A,L){if(typeof A=="string"&&A!==""||typeof A=="number")return E=E.get(I)||null,l(T,E,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case fa:return E=E.get(A.key===null?I:A.key)||null,u(T,E,A,L);case yi:return E=E.get(A.key===null?I:A.key)||null,d(T,E,A,L);case Gn:var O=A._init;return S(E,T,I,O(A._payload),L)}if(bs(A)||ws(A))return E=E.get(I)||null,p(T,E,A,L,null);Sa(T,A)}return null}function R(E,T,I,A){for(var L=null,O=null,_=T,m=T=0,w=null;_!==null&&m<I.length;m++){_.index>m?(w=_,_=null):w=_.sibling;var x=y(E,_,I[m],A);if(x===null){_===null&&(_=w);break}t&&_&&x.alternate===null&&e(E,_),T=s(x,T,m),O===null?L=x:O.sibling=x,O=x,_=w}if(m===I.length)return n(E,_),ye&&Dr(E,m),L;if(_===null){for(;m<I.length;m++)_=g(E,I[m],A),_!==null&&(T=s(_,T,m),O===null?L=_:O.sibling=_,O=_);return ye&&Dr(E,m),L}for(_=r(E,_);m<I.length;m++)w=S(_,E,m,I[m],A),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?m:w.key),T=s(w,T,m),O===null?L=w:O.sibling=w,O=w);return t&&_.forEach(function(C){return e(E,C)}),ye&&Dr(E,m),L}function b(E,T,I,A){var L=ws(I);if(typeof L!="function")throw Error(U(150));if(I=L.call(I),I==null)throw Error(U(151));for(var O=L=null,_=T,m=T=0,w=null,x=I.next();_!==null&&!x.done;m++,x=I.next()){_.index>m?(w=_,_=null):w=_.sibling;var C=y(E,_,x.value,A);if(C===null){_===null&&(_=w);break}t&&_&&C.alternate===null&&e(E,_),T=s(C,T,m),O===null?L=C:O.sibling=C,O=C,_=w}if(x.done)return n(E,_),ye&&Dr(E,m),L;if(_===null){for(;!x.done;m++,x=I.next())x=g(E,x.value,A),x!==null&&(T=s(x,T,m),O===null?L=x:O.sibling=x,O=x);return ye&&Dr(E,m),L}for(_=r(E,_);!x.done;m++,x=I.next())x=S(_,E,m,x.value,A),x!==null&&(t&&x.alternate!==null&&_.delete(x.key===null?m:x.key),T=s(x,T,m),O===null?L=x:O.sibling=x,O=x);return t&&_.forEach(function(P){return e(E,P)}),ye&&Dr(E,m),L}function D(E,T,I,A){if(typeof I=="object"&&I!==null&&I.type===vi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case fa:e:{for(var L=I.key,O=T;O!==null;){if(O.key===L){if(L=I.type,L===vi){if(O.tag===7){n(E,O.sibling),T=i(O,I.props.children),T.return=E,E=T;break e}}else if(O.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Gn&&jm(L)===O.type){n(E,O.sibling),T=i(O,I.props),T.ref=ks(E,O,I),T.return=E,E=T;break e}n(E,O);break}else e(E,O);O=O.sibling}I.type===vi?(T=$r(I.props.children,E.mode,A,I.key),T.return=E,E=T):(A=Ga(I.type,I.key,I.props,null,E.mode,A),A.ref=ks(E,T,I),A.return=E,E=A)}return o(E);case yi:e:{for(O=I.key;T!==null;){if(T.key===O)if(T.tag===4&&T.stateNode.containerInfo===I.containerInfo&&T.stateNode.implementation===I.implementation){n(E,T.sibling),T=i(T,I.children||[]),T.return=E,E=T;break e}else{n(E,T);break}else e(E,T);T=T.sibling}T=xc(I,E.mode,A),T.return=E,E=T}return o(E);case Gn:return O=I._init,D(E,T,O(I._payload),A)}if(bs(I))return R(E,T,I,A);if(ws(I))return b(E,T,I,A);Sa(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,T!==null&&T.tag===6?(n(E,T.sibling),T=i(T,I),T.return=E,E=T):(n(E,T),T=kc(I,E.mode,A),T.return=E,E=T),o(E)):n(E,T)}return D}var zi=Wv(!0),Hv=Wv(!1),vl=kr(null),_l=null,xi=null,Ah=null;function Rh(){Ah=xi=_l=null}function Ch(t){var e=vl.current;ge(vl),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){_l=t,Ah=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Ah!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(_l===null)throw Error(U(308));xi=t,_l.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Mr=null;function Ph(t){Mr===null?Mr=[t]:Mr.push(t)}function qv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ph(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ph(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}function Mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,p=d=u=null,l=s;do{var y=l.lane,S=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,b=l;switch(y=e,S=n,b.tag){case 1:if(R=b.payload,typeof R=="function"){g=R.call(S,g,y);break e}g=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=b.payload,y=typeof R=="function"?R.call(S,g,y):R,y==null)break e;g=Te({},g,y);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else S={eventTime:S,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=S,u=g):p=p.next=S,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(p===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=g}}function Fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Oo={},rn=kr(Oo),po=kr(Oo),mo=kr(Oo);function Fr(t){if(t===Oo)throw Error(U(174));return t}function bh(t,e){switch(fe(mo,e),fe(po,t),fe(rn,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xc(e,t)}ge(rn),fe(rn,e)}function $i(){ge(rn),ge(po),ge(mo)}function Gv(t){Fr(mo.current);var e=Fr(rn.current),n=Xc(e,t.type);e!==n&&(fe(po,t),fe(rn,n))}function Dh(t){po.current===t&&(ge(rn),ge(po))}var we=kr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Oh(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var $a=Un.ReactCurrentDispatcher,wc=Un.ReactCurrentBatchConfig,Gr=0,Ee=null,Ve=null,Be=null,Tl=!1,qs=!1,go=0,KI=0;function et(){throw Error(U(321))}function Vh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function Lh(t,e,n,r,i,s){if(Gr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?XI:JI,t=n(r,i),qs){s=0;do{if(qs=!1,go=0,25<=s)throw Error(U(301));s+=1,Be=Ve=null,e.updateQueue=null,$a.current=ZI,t=n(r,i)}while(qs)}if($a.current=Il,e=Ve!==null&&Ve.next!==null,Gr=0,Be=Ve=Ee=null,Tl=!1,e)throw Error(U(300));return t}function jh(){var t=go!==0;return go=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ee.memoizedState=Be=t:Be=Be.next=t,Be}function Mt(){if(Ve===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Be===null?Ee.memoizedState:Be.next;if(e!==null)Be=e,Ve=t;else{if(t===null)throw Error(U(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Be===null?Ee.memoizedState=Be=t:Be=Be.next=t}return Be}function yo(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=Mt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var p=d.lane;if((Gr&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ee.lanes|=p,Qr|=p}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yt(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Qv(){}function Yv(t,e){var n=Ee,r=Mt(),i=e(),s=!Yt(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Mh(Zv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,vo(9,Jv.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(U(349));Gr&30||Xv(n,e,i)}return i}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jv(t,e,n,r){e.value=n,e.getSnapshot=r,e_(e)&&t_(t)}function Zv(t,e,n){return n(function(){e_(e)&&t_(t)})}function e_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function t_(t){var e=Dn(t,1);e!==null&&Gt(e,t,1,-1)}function Um(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=YI.bind(null,Ee,t),[e.memoizedState,t]}function vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function n_(){return Mt().memoizedState}function Wa(t,e,n,r){var i=Zt();Ee.flags|=t,i.memoizedState=vo(1|e,n,void 0,r===void 0?null:r)}function tu(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Vh(r,o.deps)){i.memoizedState=vo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=vo(1|e,n,s,r)}function Bm(t,e){return Wa(8390656,8,t,e)}function Mh(t,e){return tu(2048,8,t,e)}function r_(t,e){return tu(4,2,t,e)}function i_(t,e){return tu(4,4,t,e)}function s_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function o_(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,s_.bind(null,e,t),n)}function Fh(){}function a_(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function l_(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function u_(t,e,n){return Gr&21?(Yt(n,e)||(n=pv(),Ee.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function GI(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=wc.transition;wc.transition={};try{t(!1),e()}finally{ue=n,wc.transition=r}}function c_(){return Mt().memoizedState}function QI(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d_(t))h_(e,n);else if(n=qv(t,e,n,r),n!==null){var i=ht();Gt(n,t,r,i),f_(n,e,r)}}function YI(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d_(t))h_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(i.next=i,Ph(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=qv(t,e,i,r),n!==null&&(i=ht(),Gt(n,t,r,i),f_(n,e,r))}}function d_(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function h_(t,e){qs=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}var Il={readContext:jt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},XI={readContext:jt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4194308,4,s_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QI.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Um,useDebugValue:Fh,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Um(!1),e=t[0];return t=GI.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Zt();if(ye){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ze===null)throw Error(U(349));Gr&30||Xv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bm(Zv.bind(null,r,s,t),[t]),r.flags|=2048,vo(9,Jv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=ze.identifierPrefix;if(ye){var n=Sn,r=In;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JI={readContext:jt,useCallback:a_,useContext:jt,useEffect:Mh,useImperativeHandle:o_,useInsertionEffect:r_,useLayoutEffect:i_,useMemo:l_,useReducer:Ec,useRef:n_,useState:function(){return Ec(yo)},useDebugValue:Fh,useDeferredValue:function(t){var e=Mt();return u_(e,Ve.memoizedState,t)},useTransition:function(){var t=Ec(yo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:Qv,useSyncExternalStore:Yv,useId:c_,unstable_isNewReconciler:!1},ZI={readContext:jt,useCallback:a_,useContext:jt,useEffect:Mh,useImperativeHandle:o_,useInsertionEffect:r_,useLayoutEffect:i_,useMemo:l_,useReducer:Tc,useRef:n_,useState:function(){return Tc(yo)},useDebugValue:Fh,useDeferredValue:function(t){var e=Mt();return Ve===null?e.memoizedState=t:u_(e,Ve.memoizedState,t)},useTransition:function(){var t=Tc(yo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:Qv,useSyncExternalStore:Yv,useId:c_,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=hr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Gt(e,t,i,r),za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=hr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Gt(e,t,i,r),za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=hr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(Gt(e,t,r,n),za(e,t,r))}};function zm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,r)||!uo(i,s):!0}function p_(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=wt(e)?qr:ot.current,r=e.contextTypes,s=(r=r!=null)?Ui(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function _d(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Nh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=wt(e)?qr:ot.current,i.context=Ui(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nu.enqueueReplaceState(i,i.state,null),wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=AT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function m_(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kl||(kl=!0,Pd=r),wd(t,e)},n}function g_(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wd(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pS.bind(null,t,e,n),e.then(t,t))}function Hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var tS=Un.ReactCurrentOwner,vt=!1;function dt(t,e,n,r){e.child=t===null?Hv(e,null,n,r):zi(e,t.child,n,r)}function Km(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=Lh(t,e,n,r,s,i),n=jh(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(ye&&n&&Sh(e),e.flags|=1,dt(t,e,r,i),e.child)}function Gm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,y_(t,e,s,r,i)):(t=Ga(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function y_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(uo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,On(t,e,i)}return Ed(t,e,n,r,i)}function v_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ri,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ri,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Ri,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Ri,St),St|=r;return dt(t,e,i,n),e.child}function __(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,r,i){var s=wt(n)?qr:ot.current;return s=Ui(e,s),Di(e,i),n=Lh(t,e,n,r,s,i),r=jh(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(ye&&r&&Sh(e),e.flags|=1,dt(t,e,n,i),e.child)}function Qm(t,e,n,r,i){if(wt(n)){var s=!0;ml(e)}else s=!1;if(Di(e,i),e.stateNode===null)Ha(t,e),p_(e,n,r),_d(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=jt(d):(d=wt(n)?qr:ot.current,d=Ui(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&$m(e,o,r,d),Qn=!1;var y=e.memoizedState;o.state=y,wl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||_t.current||Qn?(typeof p=="function"&&(vd(e,n,p,r),u=e.memoizedState),(l=Qn||zm(e,n,l,r,y,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kv(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:zt(e.type,l),o.props=d,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=wt(n)?qr:ot.current,u=Ui(e,u));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&$m(e,o,r,u),Qn=!1,y=e.memoizedState,o.state=y,wl(e,r,o,i);var R=e.memoizedState;l!==g||y!==R||_t.current||Qn?(typeof S=="function"&&(vd(e,n,S,r),R=e.memoizedState),(d=Qn||zm(e,n,d,r,y,R,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Td(t,e,n,r,s,i)}function Td(t,e,n,r,i,s){__(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Om(e,n,!1),On(t,e,s);r=e.stateNode,tS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,s),e.child=zi(e,null,l,s)):dt(t,e,l,s),e.memoizedState=r.state,i&&Om(e,n,!0),e.child}function w_(t){var e=t.stateNode;e.pendingContext?Dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dm(t,e.context,!1),bh(t,e.containerInfo)}function Ym(t,e,n,r,i){return Bi(),xh(i),e.flags|=256,dt(t,e,n,r),e.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function E_(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,r,0,null),t=$r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sd(n),e.memoizedState=Id,t):Uh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Id,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Uh(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,r){return r!==null&&xh(r),zi(e,t.child,null,n),t=Uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ic(Error(U(422))),ka(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=su({mode:"visible",children:r.children},i,0,null),s=$r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=Id,s);if(!(e.mode&1))return ka(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Ic(s,r,void 0),ka(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),Gt(r,t,i,-1))}return qh(),r=Ic(Error(U(421))),ka(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=ur(i.nextSibling),Rt=e,ye=!0,Wt=null,t!==null&&(bt[Dt++]=In,bt[Dt++]=Sn,bt[Dt++]=Kr,In=t.id,Sn=t.overflow,Kr=e),e=Uh(e,r.children),e.flags|=4096,e)}function Xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yd(t.return,e,n)}function Sc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function T_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,n,e);else if(t.tag===19)Xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&El(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rS(t,e,n){switch(e.tag){case 3:w_(e),Bi();break;case 5:Gv(e);break;case 1:wt(e.type)&&ml(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?E_(t,e,n):(fe(we,we.current&1),t=On(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return T_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,v_(t,e,n)}return On(t,e,n)}var I_,kd,S_,k_;I_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};S_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(rn.current);var s=null;switch(n){case"input":i=Kc(t,i),r=Kc(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Yc(t,i),r=Yc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}Jc(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(no.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(no.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};k_=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iS(t,e,n){var r=e.pendingProps;switch(kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return wt(e.type)&&pl(),tt(e),null;case 3:return r=e.stateNode,$i(),ge(_t),ge(ot),Oh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(Dd(Wt),Wt=null))),kd(t,e),tt(e),null;case 5:Dh(e);var i=Fr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)S_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return tt(e),null}if(t=Fr(rn.current),Ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[fo]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Os.length;i++)me(Os[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":om(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":lm(r,s),me("invalid",r)}Jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,l,t),i=["children",""+l]):no.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":pa(r),am(r,s,!0);break;case"textarea":pa(r),um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[fo]=r,I_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Os.length;i++)me(Os[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":om(t,r),i=Kc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":lm(t,r),i=Yc(t,r),me("invalid",t);break;default:i=r}Jc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?nv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ev(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ro(t,u):typeof u=="number"&&ro(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&ch(t,s,u,o))}switch(n){case"input":pa(t),am(t,r,!1);break;case"textarea":pa(t),um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)k_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Fr(mo.current),Fr(rn.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return tt(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&kt!==null&&e.mode&1&&!(e.flags&128))$v(),Bi(),e.flags|=98560,s=!1;else if(s=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[en]=e}else Bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Wt!==null&&(Dd(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?je===0&&(je=3):qh())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return $i(),kd(t,e),t===null&&co(e.stateNode.containerInfo),tt(e),null;case 10:return Ch(e.type._context),tt(e),null;case 17:return wt(e.type)&&pl(),tt(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xs(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=128,xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Hi&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=El(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return tt(e),null}else 2*be()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Hh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function sS(t,e){switch(kh(e),e.tag){case 1:return wt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),ge(_t),ge(ot),Oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dh(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return $i(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var xa=!1,it=!1,oS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function xd(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Jm=!1;function aS(t,e){if(ud=cl,t=Pv(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,g=t,y=null;t:for(;;){for(var S;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(S=g.firstChild)!==null;)y=g,g=S;for(;;){if(g===t)break t;if(y===n&&++d===i&&(l=o),y===s&&++p===r&&(u=o),(S=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},cl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var b=R.memoizedProps,D=R.memoizedState,E=e.stateNode,T=E.getSnapshotBeforeUpdate(e.elementType===e.type?b:zt(e.type,b),D);E.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(A){xe(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=Jm,Jm=!1,R}function Ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xd(e,n,s)}i=i.next}while(i!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x_(t){var e=t.alternate;e!==null&&(t.alternate=null,x_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[fo],delete e[fd],delete e[$I],delete e[WI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function A_(t){return t.tag===5||t.tag===3||t.tag===4}function Zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}function Cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}var We=null,$t=!1;function qn(t,e,n){for(n=n.child;n!==null;)R_(t,e,n),n=n.sibling}function R_(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:it||Ai(n,e);case 6:var r=We,i=$t;We=null,qn(t,e,n),We=r,$t=i,We!==null&&($t?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&($t?(t=We,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),ao(t)):yc(We,n.stateNode));break;case 4:r=We,i=$t,We=n.stateNode.containerInfo,$t=!0,qn(t,e,n),We=r,$t=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!it&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,qn(t,e,n),it=r):qn(t,e,n);break;default:qn(t,e,n)}}function eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oS),e.forEach(function(r){var i=gS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,$t=!1;break e;case 3:We=l.stateNode.containerInfo,$t=!0;break e;case 4:We=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(We===null)throw Error(U(160));R_(s,o,i),We=null,$t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){xe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C_(e,t),e=e.sibling}function C_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),Xt(t),r&4){try{Ks(3,t,t.return),ru(3,t)}catch(b){xe(t,t.return,b)}try{Ks(5,t,t.return)}catch(b){xe(t,t.return,b)}}break;case 1:Bt(e,t),Xt(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Bt(e,t),Xt(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var i=t.stateNode;try{ro(i,"")}catch(b){xe(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Xy(i,s),Zc(l,o);var d=Zc(l,s);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?nv(i,g):p==="dangerouslySetInnerHTML"?ev(i,g):p==="children"?ro(i,g):ch(i,p,g,d)}switch(l){case"input":Gc(i,s);break;case"textarea":Jy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Ci(i,!!s.multiple,S,!1):y!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[fo]=s}catch(b){xe(t,t.return,b)}}break;case 6:if(Bt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){xe(t,t.return,b)}}break;case 3:if(Bt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(b){xe(t,t.return,b)}break;case 4:Bt(e,t),Xt(t);break;case 13:Bt(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($h=be())),r&4&&eg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(it=(d=it)||p,Bt(e,t),it=d):Bt(e,t),Xt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(g=H=p;H!==null;){switch(y=H,S=y.child,y.tag){case 0:case 11:case 14:case 15:Ks(4,y,y.return);break;case 1:Ai(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(b){xe(r,n,b)}}break;case 5:Ai(y,y.return);break;case 22:if(y.memoizedState!==null){ng(g);continue}}S!==null?(S.return=y,H=S):ng(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=tv("display",o))}catch(b){xe(t,t.return,b)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(b){xe(t,t.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Bt(e,t),Xt(t),r&4&&eg(t);break;case 21:break;default:Bt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(A_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ro(i,""),r.flags&=-33);var s=Zm(t);Cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zm(t);Rd(t,l,o);break;default:throw Error(U(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lS(t,e,n){H=t,P_(t)}function P_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||it;l=xa;var d=it;if(xa=o,(it=u)&&!d)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?rg(i):u!==null?(u.return=o,H=u):rg(i);for(;s!==null;)H=s,P_(s),s=s.sibling;H=i,xa=l,it=d}tg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):tg(t)}}function tg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&ao(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}it||e.flags&512&&Ad(e)}catch(y){xe(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function ng(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function rg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{Ad(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{Ad(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var uS=Math.ceil,Sl=Un.ReactCurrentDispatcher,Bh=Un.ReactCurrentOwner,Vt=Un.ReactCurrentBatchConfig,se=0,ze=null,Oe=null,Ke=0,St=0,Ri=kr(0),je=0,_o=null,Qr=0,iu=0,zh=0,Gs=null,gt=null,$h=0,Hi=1/0,wn=null,kl=!1,Pd=null,dr=null,Aa=!1,ir=null,xl=0,Qs=0,Nd=null,qa=-1,Ka=0;function ht(){return se&6?be():qa!==-1?qa:qa=be()}function hr(t){return t.mode&1?se&2&&Ke!==0?Ke&-Ke:qI.transition!==null?(Ka===0&&(Ka=pv()),Ka):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Ev(t.type)),t):1}function Gt(t,e,n,r){if(50<Qs)throw Qs=0,Nd=null,Error(U(185));No(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(iu|=n),je===4&&Jn(t,Ke)),Et(t,r),n===1&&se===0&&!(e.mode&1)&&(Hi=be()+500,eu&&xr()))}function Et(t,e){var n=t.callbackNode;qT(t,e);var r=ul(t,t===ze?Ke:0);if(r===0)n!==null&&hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hm(n),e===1)t.tag===0?HI(ig.bind(null,t)):Uv(ig.bind(null,t)),BI(function(){!(se&6)&&xr()}),n=null;else{switch(mv(r)){case 1:n=mh;break;case 4:n=hv;break;case 16:n=ll;break;case 536870912:n=fv;break;default:n=ll}n=M_(n,N_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N_(t,e){if(qa=-1,Ka=0,se&6)throw Error(U(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=ul(t,t===ze?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Al(t,r);else{e=r;var i=se;se|=2;var s=D_();(ze!==t||Ke!==e)&&(wn=null,Hi=be()+500,zr(t,e));do try{hS();break}catch(l){b_(t,l)}while(!0);Rh(),Sl.current=s,se=i,Oe!==null?e=0:(ze=null,Ke=0,e=je)}if(e!==0){if(e===2&&(i=id(t),i!==0&&(r=i,e=bd(t,i))),e===1)throw n=_o,zr(t,0),Jn(t,r),Et(t,be()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!cS(i)&&(e=Al(t,r),e===2&&(s=id(t),s!==0&&(r=s,e=bd(t,s))),e===1))throw n=_o,zr(t,0),Jn(t,r),Et(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Or(t,gt,wn);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=$h+500-be(),10<e)){if(ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hd(Or.bind(null,t,gt,wn),e);break}Or(t,gt,wn);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uS(r/1960))-r,10<r){t.timeoutHandle=hd(Or.bind(null,t,gt,wn),r);break}Or(t,gt,wn);break;case 5:Or(t,gt,wn);break;default:throw Error(U(329))}}}return Et(t,be()),t.callbackNode===n?N_.bind(null,t):null}function bd(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=gt,gt=n,e!==null&&Dd(e)),t}function Dd(t){gt===null?gt=t:gt.push.apply(gt,t)}function cS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~zh,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function ig(t){if(se&6)throw Error(U(327));Oi();var e=ul(t,0);if(!(e&1))return Et(t,be()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var r=id(t);r!==0&&(e=r,n=bd(t,r))}if(n===1)throw n=_o,zr(t,0),Jn(t,e),Et(t,be()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,gt,wn),Et(t,be()),null}function Wh(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Hi=be()+500,eu&&xr())}}function Yr(t){ir!==null&&ir.tag===0&&!(se&6)&&Oi();var e=se;se|=1;var n=Vt.transition,r=ue;try{if(Vt.transition=null,ue=1,t)return t()}finally{ue=r,Vt.transition=n,se=e,!(se&6)&&xr()}}function Hh(){St=Ri.current,ge(Ri)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UI(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(kh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:$i(),ge(_t),ge(ot),Oh();break;case 5:Dh(r);break;case 4:$i();break;case 13:ge(we);break;case 19:ge(we);break;case 10:Ch(r.type._context);break;case 22:case 23:Hh()}n=n.return}if(ze=t,Oe=t=fr(t.current,null),Ke=St=e,je=0,_o=null,zh=iu=Qr=0,gt=Gs=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Mr=null}return t}function b_(t,e){do{var n=Oe;try{if(Rh(),$a.current=Il,Tl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tl=!1}if(Gr=0,Be=Ve=Ee=null,qs=!1,go=0,Bh.current=null,n===null||n.return===null){je=1,_o=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=Hm(o);if(S!==null){S.flags&=-257,qm(S,o,l,s,e),S.mode&1&&Wm(s,d,e),e=S,u=d;var R=e.updateQueue;if(R===null){var b=new Set;b.add(u),e.updateQueue=b}else R.add(u);break e}else{if(!(e&1)){Wm(s,d,e),qh();break e}u=Error(U(426))}}else if(ye&&l.mode&1){var D=Hm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),qm(D,o,l,s,e),xh(Wi(u,l));break e}}s=u=Wi(u,l),je!==4&&(je=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=m_(s,u,e);Mm(s,E);break e;case 1:l=u;var T=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(dr===null||!dr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=g_(s,l,e);Mm(s,A);break e}}s=s.return}while(s!==null)}V_(n)}catch(L){e=L,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function D_(){var t=Sl.current;return Sl.current=Il,t===null?Il:t}function qh(){(je===0||je===3||je===2)&&(je=4),ze===null||!(Qr&268435455)&&!(iu&268435455)||Jn(ze,Ke)}function Al(t,e){var n=se;se|=2;var r=D_();(ze!==t||Ke!==e)&&(wn=null,zr(t,e));do try{dS();break}catch(i){b_(t,i)}while(!0);if(Rh(),se=n,Sl.current=r,Oe!==null)throw Error(U(261));return ze=null,Ke=0,je}function dS(){for(;Oe!==null;)O_(Oe)}function hS(){for(;Oe!==null&&!jT();)O_(Oe)}function O_(t){var e=j_(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?V_(t):Oe=e,Bh.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sS(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=iS(n,e,St),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function Or(t,e,n){var r=ue,i=Vt.transition;try{Vt.transition=null,ue=1,fS(t,e,n,r)}finally{Vt.transition=i,ue=r}return null}function fS(t,e,n,r){do Oi();while(ir!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KT(t,s),t===ze&&(Oe=ze=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,M_(ll,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=ue;ue=1;var l=se;se|=4,Bh.current=null,aS(t,n),C_(n,t),DI(cd),cl=!!ud,cd=ud=null,t.current=n,lS(n),MT(),se=l,ue=o,Vt.transition=s}else t.current=n;if(Aa&&(Aa=!1,ir=t,xl=i),s=t.pendingLanes,s===0&&(dr=null),BT(n.stateNode),Et(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,t=Pd,Pd=null,t;return xl&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===Nd?Qs++:(Qs=0,Nd=t):Qs=0,xr(),null}function Oi(){if(ir!==null){var t=mv(xl),e=Vt.transition,n=ue;try{if(Vt.transition=null,ue=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,xl=0,se&6)throw Error(U(331));var i=se;for(se|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(H=d;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:Ks(8,p,s)}var g=p.child;if(g!==null)g.return=p,H=g;else for(;H!==null;){p=H;var y=p.sibling,S=p.return;if(x_(p),p===d){H=null;break}if(y!==null){y.return=S,H=y;break}H=S}}}var R=s.alternate;if(R!==null){var b=R.child;if(b!==null){R.child=null;do{var D=b.sibling;b.sibling=null,b=D}while(b!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=T;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ru(9,l)}}catch(L){xe(l,l.return,L)}if(l===o){H=null;break e}var A=l.sibling;if(A!==null){A.return=l.return,H=A;break e}H=l.return}}if(se=i,xr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ql,t)}catch{}r=!0}return r}finally{ue=n,Vt.transition=e}}return!1}function sg(t,e,n){e=Wi(n,e),e=m_(t,e,1),t=cr(t,e,1),e=ht(),t!==null&&(No(t,1,e),Et(t,e))}function xe(t,e,n){if(t.tag===3)sg(t,t,n);else for(;e!==null;){if(e.tag===3){sg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=Wi(n,t),t=g_(e,t,1),e=cr(e,t,1),t=ht(),e!==null&&(No(e,1,t),Et(e,t));break}}e=e.return}}function pS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ke&n)===n&&(je===4||je===3&&(Ke&130023424)===Ke&&500>be()-$h?zr(t,0):zh|=n),Et(t,e)}function L_(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=ht();t=Dn(t,e),t!==null&&(No(t,e,n),Et(t,n))}function mS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L_(t,n)}function gS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),L_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,rS(t,e,n);vt=!!(t.flags&131072)}else vt=!1,ye&&e.flags&1048576&&Bv(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ha(t,e),t=e.pendingProps;var i=Ui(e,ot.current);Di(e,n),i=Lh(null,e,r,t,i,n);var s=jh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nh(e),i.updater=nu,e.stateNode=i,i._reactInternals=e,_d(e,r,t,n),e=Td(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Sh(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ha(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vS(r),t=zt(r,t),i){case 0:e=Ed(null,e,r,t,n);break e;case 1:e=Qm(null,e,r,t,n);break e;case 11:e=Km(null,e,r,t,n);break e;case 14:e=Gm(null,e,r,zt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Qm(t,e,r,i,n);case 3:e:{if(w_(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kv(t,e),wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(U(423)),e),e=Ym(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(U(424)),e),e=Ym(t,e,r,n,i);break e}else for(kt=ur(e.stateNode.containerInfo.firstChild),Rt=e,ye=!0,Wt=null,n=Hv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){e=On(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return Gv(e),t===null&&gd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dd(r,i)?o=null:s!==null&&dd(r,s)&&(e.flags|=32),__(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&gd(e),null;case 13:return E_(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Km(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(vl,r._currentValue),r._currentValue=o,s!==null)if(Yt(s.value,o)){if(s.children===i.children&&!_t.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Rn(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=jt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Gm(t,e,r,i,n);case 15:return y_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Ha(t,e),e.tag=1,wt(r)?(t=!0,ml(e)):t=!1,Di(e,n),p_(e,r,i),_d(e,r,i,n),Td(null,e,r,!0,t,n);case 19:return T_(t,e,n);case 22:return v_(t,e,n)}throw Error(U(156,e.tag))};function M_(t,e){return dv(t,e)}function yS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new yS(t,e,n,r)}function Kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vS(t){if(typeof t=="function")return Kh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hh)return 11;if(t===fh)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return $r(n.children,i,s,e);case dh:o=8,i|=8;break;case $c:return t=Ot(12,n,e,i|2),t.elementType=$c,t.lanes=s,t;case Wc:return t=Ot(13,n,e,i),t.elementType=Wc,t.lanes=s,t;case Hc:return t=Ot(19,n,e,i),t.elementType=Hc,t.lanes=s,t;case Gy:return su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qy:o=10;break e;case Ky:o=9;break e;case hh:o=11;break e;case fh:o=14;break e;case Gn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $r(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function su(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=Gy,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function xc(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _S(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,r,i,s,o,l,u){return t=new _S(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(s),t}function wS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function F_(t){if(!t)return _r;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(wt(n))return Fv(t,n,e)}return e}function U_(t,e,n,r,i,s,o,l,u){return t=Gh(n,r,!0,t,i,s,o,l,u),t.context=F_(null),n=t.current,r=ht(),i=hr(n),s=Rn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,No(t,i,r),Et(t,r),t}function ou(t,e,n,r){var i=e.current,s=ht(),o=hr(i);return n=F_(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(Gt(t,i,o,s),za(t,i,o)),o}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qh(t,e){og(t,e),(t=t.alternate)&&og(t,e)}function ES(){return null}var B_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}au.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ou(t,e,null,null)};au.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){ou(null,t,null,null)}),e[bn]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&wv(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ag(){}function TS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Rl(o);s.call(d)}}var o=U_(e,r,t,0,null,!1,!1,"",ag);return t._reactRootContainer=o,t[bn]=o.current,co(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Rl(u);l.call(d)}}var u=Gh(t,0,!1,null,null,!1,!1,"",ag);return t._reactRootContainer=u,t[bn]=u.current,co(t.nodeType===8?t.parentNode:t),Yr(function(){ou(e,u,n,r)}),u}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Rl(o);l.call(u)}}ou(e,o,t,i)}else o=TS(n,e,t,i,r);return Rl(o)}gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(gh(e,n|1),Et(e,be()),!(se&6)&&(Hi=be()+500,xr()))}break;case 13:Yr(function(){var r=Dn(t,1);if(r!==null){var i=ht();Gt(r,t,1,i)}}),Qh(t,1)}};yh=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=ht();Gt(e,t,134217728,n)}Qh(t,134217728)}};yv=function(t){if(t.tag===13){var e=hr(t),n=Dn(t,e);if(n!==null){var r=ht();Gt(n,t,e,r)}Qh(t,e)}};vv=function(){return ue};_v=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};td=function(t,e,n){switch(e){case"input":if(Gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zl(r);if(!i)throw Error(U(90));Yy(r),Gc(r,i)}}}break;case"textarea":Jy(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};sv=Wh;ov=Yr;var IS={usingClientEntryPoint:!1,Events:[Do,Ti,Zl,rv,iv,Wh]},As={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SS={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uv(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{Ql=Ra.inject(SS),nn=Ra}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IS;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(U(200));return wS(t,e,null,n)};Pt.createRoot=function(t,e){if(!Xh(t))throw Error(U(299));var n=!1,r="",i=B_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,co(t.nodeType===8?t.parentNode:t),new Yh(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=uv(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Yr(t)};Pt.hydrate=function(t,e,n){if(!lu(e))throw Error(U(200));return uu(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=B_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=U_(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new au(e)};Pt.render=function(t,e,n){if(!lu(e))throw Error(U(200));return uu(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!lu(t))throw Error(U(40));return t._reactRootContainer?(Yr(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Wh;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return uu(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z_)}catch(t){console.error(t)}}z_(),zy.exports=Pt;var kS=zy.exports,lg=kS;Bc.createRoot=lg.createRoot,Bc.hydrateRoot=lg.hydrateRoot;var ug={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},W_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,S=d&63;u||(S=64,o||(y=64)),r.push(n[p],n[g],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new AS;const y=s<<2|l>>4;if(r.push(y),d!==64){const S=l<<4&240|d>>2;if(r.push(S),g!==64){const R=d<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RS=function(t){const e=$_(t);return W_.encodeByteArray(e,!0)},Cl=function(t){return RS(t).replace(/\./g,"")},H_=function(t){try{return W_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=()=>CS().__FIREBASE_DEFAULTS__,NS=()=>{if(typeof process>"u"||typeof ug>"u")return;const t=ug.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&H_(t[1]);return e&&JSON.parse(e)},cu=()=>{try{return PS()||NS()||bS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},q_=t=>{var e,n;return(n=(e=cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},K_=t=>{const e=q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},G_=()=>{var t;return(t=cu())===null||t===void 0?void 0:t.config},Q_=t=>{var e;return(e=cu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cl(JSON.stringify(n)),Cl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function VS(){var t;const e=(t=cu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FS(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function US(){return!VS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BS(){try{return typeof indexedDB=="object"}catch{return!1}}function zS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$S,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new dn(i,l,r)}}function WS(t,e){return t.replace(HS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HS=/\{\$([^}]+)}/g;function qS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cg(s)&&cg(o)){if(!Pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function KS(t,e){const n=new GS(t,e);return n.subscribe.bind(n)}class GS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ac),i.error===void 0&&(i.error=Ac),i.complete===void 0&&(i.complete=Ac);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ac(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JS(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XS(t){return t===Vr?void 0:t}function JS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const ek={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},tk=re.INFO,nk={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jh{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const ik=(t,e)=>e.some(n=>t instanceof n);let dg,hg;function sk(){return dg||(dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ok(){return hg||(hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X_=new WeakMap,Od=new WeakMap,J_=new WeakMap,Rc=new WeakMap,Zh=new WeakMap;function ak(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&X_.set(n,t)}).catch(()=>{}),Zh.set(e,t),e}function lk(t){if(Od.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Od.set(t,e)}let Vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uk(t){Vd=t(Vd)}function ck(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return J_.set(r,e.sort?e.sort():[e]),pr(r)}:ok().includes(t)?function(...e){return t.apply(Cc(this),e),pr(X_.get(this))}:function(...e){return pr(t.apply(Cc(this),e))}}function dk(t){return typeof t=="function"?ck(t):(t instanceof IDBTransaction&&lk(t),ik(t,sk())?new Proxy(t,Vd):t)}function pr(t){if(t instanceof IDBRequest)return ak(t);if(Rc.has(t))return Rc.get(t);const e=dk(t);return e!==t&&(Rc.set(t,e),Zh.set(e,t)),e}const Cc=t=>Zh.get(t);function hk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const fk=["get","getKey","getAll","getAllKeys","count"],pk=["put","add","delete","clear"],Pc=new Map;function fg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Pc.set(e,s),s}uk(t=>({...t,get:(e,n,r)=>fg(e,n)||t.get(e,n,r),has:(e,n)=>!!fg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ld="@firebase/app",pg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Jh("@firebase/app"),yk="@firebase/app-compat",vk="@firebase/analytics-compat",_k="@firebase/analytics",wk="@firebase/app-check-compat",Ek="@firebase/app-check",Tk="@firebase/auth",Ik="@firebase/auth-compat",Sk="@firebase/database",kk="@firebase/data-connect",xk="@firebase/database-compat",Ak="@firebase/functions",Rk="@firebase/functions-compat",Ck="@firebase/installations",Pk="@firebase/installations-compat",Nk="@firebase/messaging",bk="@firebase/messaging-compat",Dk="@firebase/performance",Ok="@firebase/performance-compat",Vk="@firebase/remote-config",Lk="@firebase/remote-config-compat",jk="@firebase/storage",Mk="@firebase/storage-compat",Fk="@firebase/firestore",Uk="@firebase/vertexai-preview",Bk="@firebase/firestore-compat",zk="firebase",$k="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="[DEFAULT]",Wk={[Ld]:"fire-core",[yk]:"fire-core-compat",[_k]:"fire-analytics",[vk]:"fire-analytics-compat",[Ek]:"fire-app-check",[wk]:"fire-app-check-compat",[Tk]:"fire-auth",[Ik]:"fire-auth-compat",[Sk]:"fire-rtdb",[kk]:"fire-data-connect",[xk]:"fire-rtdb-compat",[Ak]:"fire-fn",[Rk]:"fire-fn-compat",[Ck]:"fire-iid",[Pk]:"fire-iid-compat",[Nk]:"fire-fcm",[bk]:"fire-fcm-compat",[Dk]:"fire-perf",[Ok]:"fire-perf-compat",[Vk]:"fire-rc",[Lk]:"fire-rc-compat",[jk]:"fire-gcs",[Mk]:"fire-gcs-compat",[Fk]:"fire-fst",[Bk]:"fire-fst-compat",[Uk]:"fire-vertex","fire-js":"fire-js",[zk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Map,Hk=new Map,Md=new Map;function mg(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(Md.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Md.set(e,t);for(const n of Nl.values())mg(n,t);for(const n of Hk.values())mg(n,t);return!0}function du(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Vo("app","Firebase",qk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=$k;function Z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=G_()),!n)throw mr.create("no-options");const s=Nl.get(i);if(s){if(Pl(n,s.options)&&Pl(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new ZS(i);for(const u of Md.values())o.addComponent(u);const l=new Kk(n,r,o);return Nl.set(i,l),l}function ef(t=jd){const e=Nl.get(t);if(!e&&t===jd&&G_())return Z_();if(!e)throw mr.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let i=(r=Wk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}Xr(new wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="firebase-heartbeat-database",Qk=1,wo="firebase-heartbeat-store";let Nc=null;function e0(){return Nc||(Nc=hk(Gk,Qk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function Yk(t){try{const n=(await e0()).transaction(wo),r=await n.objectStore(wo).get(t0(t));return await n.done,r}catch(e){if(e instanceof dn)Vn.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function gg(t,e){try{const r=(await e0()).transaction(wo,"readwrite");await r.objectStore(wo).put(e,t0(t)),await r.done}catch(n){if(n instanceof dn)Vn.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=1024,Jk=30*24*60*60*1e3;class Zk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Jk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yg(),{heartbeatsToSend:r,unsentEntries:i}=ex(this._heartbeatsCache.heartbeats),s=Cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function yg(){return new Date().toISOString().substring(0,10)}function ex(t,e=Xk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BS()?zS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vg(t){return Cl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){Xr(new wr("platform-logger",e=>new mk(e),"PRIVATE")),Xr(new wr("heartbeat",e=>new Zk(e),"PRIVATE")),sn(Ld,pg,t),sn(Ld,pg,"esm2017"),sn("fire-js","")}nx("");var rx="firebase",ix="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(rx,ix,"app");var _g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,n0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function w(){}w.prototype=m.prototype,_.D=m.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(x,C,P){for(var k=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)k[Fe-2]=arguments[Fe];return m.prototype[C].apply(x,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,w){w||(w=0);var x=Array(16);if(typeof m=="string")for(var C=0;16>C;++C)x[C]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(C=0;16>C;++C)x[C]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=_.g[0],w=_.g[1],C=_.g[2];var P=_.g[3],k=m+(P^w&(C^P))+x[0]+3614090360&4294967295;m=w+(k<<7&4294967295|k>>>25),k=P+(C^m&(w^C))+x[1]+3905402710&4294967295,P=m+(k<<12&4294967295|k>>>20),k=C+(w^P&(m^w))+x[2]+606105819&4294967295,C=P+(k<<17&4294967295|k>>>15),k=w+(m^C&(P^m))+x[3]+3250441966&4294967295,w=C+(k<<22&4294967295|k>>>10),k=m+(P^w&(C^P))+x[4]+4118548399&4294967295,m=w+(k<<7&4294967295|k>>>25),k=P+(C^m&(w^C))+x[5]+1200080426&4294967295,P=m+(k<<12&4294967295|k>>>20),k=C+(w^P&(m^w))+x[6]+2821735955&4294967295,C=P+(k<<17&4294967295|k>>>15),k=w+(m^C&(P^m))+x[7]+4249261313&4294967295,w=C+(k<<22&4294967295|k>>>10),k=m+(P^w&(C^P))+x[8]+1770035416&4294967295,m=w+(k<<7&4294967295|k>>>25),k=P+(C^m&(w^C))+x[9]+2336552879&4294967295,P=m+(k<<12&4294967295|k>>>20),k=C+(w^P&(m^w))+x[10]+4294925233&4294967295,C=P+(k<<17&4294967295|k>>>15),k=w+(m^C&(P^m))+x[11]+2304563134&4294967295,w=C+(k<<22&4294967295|k>>>10),k=m+(P^w&(C^P))+x[12]+1804603682&4294967295,m=w+(k<<7&4294967295|k>>>25),k=P+(C^m&(w^C))+x[13]+4254626195&4294967295,P=m+(k<<12&4294967295|k>>>20),k=C+(w^P&(m^w))+x[14]+2792965006&4294967295,C=P+(k<<17&4294967295|k>>>15),k=w+(m^C&(P^m))+x[15]+1236535329&4294967295,w=C+(k<<22&4294967295|k>>>10),k=m+(C^P&(w^C))+x[1]+4129170786&4294967295,m=w+(k<<5&4294967295|k>>>27),k=P+(w^C&(m^w))+x[6]+3225465664&4294967295,P=m+(k<<9&4294967295|k>>>23),k=C+(m^w&(P^m))+x[11]+643717713&4294967295,C=P+(k<<14&4294967295|k>>>18),k=w+(P^m&(C^P))+x[0]+3921069994&4294967295,w=C+(k<<20&4294967295|k>>>12),k=m+(C^P&(w^C))+x[5]+3593408605&4294967295,m=w+(k<<5&4294967295|k>>>27),k=P+(w^C&(m^w))+x[10]+38016083&4294967295,P=m+(k<<9&4294967295|k>>>23),k=C+(m^w&(P^m))+x[15]+3634488961&4294967295,C=P+(k<<14&4294967295|k>>>18),k=w+(P^m&(C^P))+x[4]+3889429448&4294967295,w=C+(k<<20&4294967295|k>>>12),k=m+(C^P&(w^C))+x[9]+568446438&4294967295,m=w+(k<<5&4294967295|k>>>27),k=P+(w^C&(m^w))+x[14]+3275163606&4294967295,P=m+(k<<9&4294967295|k>>>23),k=C+(m^w&(P^m))+x[3]+4107603335&4294967295,C=P+(k<<14&4294967295|k>>>18),k=w+(P^m&(C^P))+x[8]+1163531501&4294967295,w=C+(k<<20&4294967295|k>>>12),k=m+(C^P&(w^C))+x[13]+2850285829&4294967295,m=w+(k<<5&4294967295|k>>>27),k=P+(w^C&(m^w))+x[2]+4243563512&4294967295,P=m+(k<<9&4294967295|k>>>23),k=C+(m^w&(P^m))+x[7]+1735328473&4294967295,C=P+(k<<14&4294967295|k>>>18),k=w+(P^m&(C^P))+x[12]+2368359562&4294967295,w=C+(k<<20&4294967295|k>>>12),k=m+(w^C^P)+x[5]+4294588738&4294967295,m=w+(k<<4&4294967295|k>>>28),k=P+(m^w^C)+x[8]+2272392833&4294967295,P=m+(k<<11&4294967295|k>>>21),k=C+(P^m^w)+x[11]+1839030562&4294967295,C=P+(k<<16&4294967295|k>>>16),k=w+(C^P^m)+x[14]+4259657740&4294967295,w=C+(k<<23&4294967295|k>>>9),k=m+(w^C^P)+x[1]+2763975236&4294967295,m=w+(k<<4&4294967295|k>>>28),k=P+(m^w^C)+x[4]+1272893353&4294967295,P=m+(k<<11&4294967295|k>>>21),k=C+(P^m^w)+x[7]+4139469664&4294967295,C=P+(k<<16&4294967295|k>>>16),k=w+(C^P^m)+x[10]+3200236656&4294967295,w=C+(k<<23&4294967295|k>>>9),k=m+(w^C^P)+x[13]+681279174&4294967295,m=w+(k<<4&4294967295|k>>>28),k=P+(m^w^C)+x[0]+3936430074&4294967295,P=m+(k<<11&4294967295|k>>>21),k=C+(P^m^w)+x[3]+3572445317&4294967295,C=P+(k<<16&4294967295|k>>>16),k=w+(C^P^m)+x[6]+76029189&4294967295,w=C+(k<<23&4294967295|k>>>9),k=m+(w^C^P)+x[9]+3654602809&4294967295,m=w+(k<<4&4294967295|k>>>28),k=P+(m^w^C)+x[12]+3873151461&4294967295,P=m+(k<<11&4294967295|k>>>21),k=C+(P^m^w)+x[15]+530742520&4294967295,C=P+(k<<16&4294967295|k>>>16),k=w+(C^P^m)+x[2]+3299628645&4294967295,w=C+(k<<23&4294967295|k>>>9),k=m+(C^(w|~P))+x[0]+4096336452&4294967295,m=w+(k<<6&4294967295|k>>>26),k=P+(w^(m|~C))+x[7]+1126891415&4294967295,P=m+(k<<10&4294967295|k>>>22),k=C+(m^(P|~w))+x[14]+2878612391&4294967295,C=P+(k<<15&4294967295|k>>>17),k=w+(P^(C|~m))+x[5]+4237533241&4294967295,w=C+(k<<21&4294967295|k>>>11),k=m+(C^(w|~P))+x[12]+1700485571&4294967295,m=w+(k<<6&4294967295|k>>>26),k=P+(w^(m|~C))+x[3]+2399980690&4294967295,P=m+(k<<10&4294967295|k>>>22),k=C+(m^(P|~w))+x[10]+4293915773&4294967295,C=P+(k<<15&4294967295|k>>>17),k=w+(P^(C|~m))+x[1]+2240044497&4294967295,w=C+(k<<21&4294967295|k>>>11),k=m+(C^(w|~P))+x[8]+1873313359&4294967295,m=w+(k<<6&4294967295|k>>>26),k=P+(w^(m|~C))+x[15]+4264355552&4294967295,P=m+(k<<10&4294967295|k>>>22),k=C+(m^(P|~w))+x[6]+2734768916&4294967295,C=P+(k<<15&4294967295|k>>>17),k=w+(P^(C|~m))+x[13]+1309151649&4294967295,w=C+(k<<21&4294967295|k>>>11),k=m+(C^(w|~P))+x[4]+4149444226&4294967295,m=w+(k<<6&4294967295|k>>>26),k=P+(w^(m|~C))+x[11]+3174756917&4294967295,P=m+(k<<10&4294967295|k>>>22),k=C+(m^(P|~w))+x[2]+718787259&4294967295,C=P+(k<<15&4294967295|k>>>17),k=w+(P^(C|~m))+x[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,_.g[2]=_.g[2]+C&4294967295,_.g[3]=_.g[3]+P&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var w=m-this.blockSize,x=this.B,C=this.h,P=0;P<m;){if(C==0)for(;P<=w;)i(this,_,P),P+=this.blockSize;if(typeof _=="string"){for(;P<m;)if(x[C++]=_.charCodeAt(P++),C==this.blockSize){i(this,x),C=0;break}}else for(;P<m;)if(x[C++]=_[P++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var w=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=w&255,w/=256;for(this.u(_),_=Array(16),m=w=0;4>m;++m)for(var x=0;32>x;x+=8)_[w++]=this.g[m]>>>x&255;return _};function s(_,m){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=m(_)}function o(_,m){this.h=m;for(var w=[],x=!0,C=_.length-1;0<=C;C--){var P=_[C]|0;x&&P==m||(w[C]=P,x=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(m){return new o([m|0],0>m?-1:0)}):new o([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return D(d(-_));for(var m=[],w=1,x=0;_>=w;x++)m[x]=_/w|0,w*=4294967296;return new o(m,0)}function p(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return D(p(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(m,8)),x=g,C=0;C<_.length;C+=8){var P=Math.min(8,_.length-C),k=parseInt(_.substring(C,C+P),m);8>P?(P=d(Math.pow(m,P)),x=x.j(P).add(d(k))):(x=x.j(w),x=x.add(d(k)))}return x}var g=u(0),y=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-D(this).m();for(var _=0,m=1,w=0;w<this.g.length;w++){var x=this.i(w);_+=(0<=x?x:4294967296+x)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(b(this))return"-"+D(this).toString(_);for(var m=d(Math.pow(_,6)),w=this,x="";;){var C=A(w,m).g;w=E(w,C.j(m));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=C,R(w))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function b(_){return _.h==-1}t.l=function(_){return _=E(this,_),b(_)?-1:R(_)?0:1};function D(_){for(var m=_.g.length,w=[],x=0;x<m;x++)w[x]=~_.g[x];return new o(w,~_.h).add(y)}t.abs=function(){return b(this)?D(this):this},t.add=function(_){for(var m=Math.max(this.g.length,_.g.length),w=[],x=0,C=0;C<=m;C++){var P=x+(this.i(C)&65535)+(_.i(C)&65535),k=(P>>>16)+(this.i(C)>>>16)+(_.i(C)>>>16);x=k>>>16,P&=65535,k&=65535,w[C]=k<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(_,m){return _.add(D(m))}t.j=function(_){if(R(this)||R(_))return g;if(b(this))return b(_)?D(this).j(D(_)):D(D(this).j(_));if(b(_))return D(this.j(D(_)));if(0>this.l(S)&&0>_.l(S))return d(this.m()*_.m());for(var m=this.g.length+_.g.length,w=[],x=0;x<2*m;x++)w[x]=0;for(x=0;x<this.g.length;x++)for(var C=0;C<_.g.length;C++){var P=this.i(x)>>>16,k=this.i(x)&65535,Fe=_.i(C)>>>16,fn=_.i(C)&65535;w[2*x+2*C]+=k*fn,T(w,2*x+2*C),w[2*x+2*C+1]+=P*fn,T(w,2*x+2*C+1),w[2*x+2*C+1]+=k*Fe,T(w,2*x+2*C+1),w[2*x+2*C+2]+=P*Fe,T(w,2*x+2*C+2)}for(x=0;x<m;x++)w[x]=w[2*x+1]<<16|w[2*x];for(x=m;x<2*m;x++)w[x]=0;return new o(w,0)};function T(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function I(_,m){this.g=_,this.h=m}function A(_,m){if(R(m))throw Error("division by zero");if(R(_))return new I(g,g);if(b(_))return m=A(D(_),m),new I(D(m.g),D(m.h));if(b(m))return m=A(_,D(m)),new I(D(m.g),m.h);if(30<_.g.length){if(b(_)||b(m))throw Error("slowDivide_ only works with positive integers.");for(var w=y,x=m;0>=x.l(_);)w=L(w),x=L(x);var C=O(w,1),P=O(x,1);for(x=O(x,2),w=O(w,2);!R(x);){var k=P.add(x);0>=k.l(_)&&(C=C.add(w),P=k),x=O(x,1),w=O(w,1)}return m=E(_,C.j(m)),new I(C,m)}for(C=g;0<=_.l(m);){for(w=Math.max(1,Math.floor(_.m()/m.m())),x=Math.ceil(Math.log(w)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=d(w),k=P.j(m);b(k)||0<k.l(_);)w-=x,P=d(w),k=P.j(m);R(P)&&(P=y),C=C.add(P),_=E(_,k)}return new I(C,_)}t.A=function(_){return A(this,_).h},t.and=function(_){for(var m=Math.max(this.g.length,_.g.length),w=[],x=0;x<m;x++)w[x]=this.i(x)&_.i(x);return new o(w,this.h&_.h)},t.or=function(_){for(var m=Math.max(this.g.length,_.g.length),w=[],x=0;x<m;x++)w[x]=this.i(x)|_.i(x);return new o(w,this.h|_.h)},t.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),w=[],x=0;x<m;x++)w[x]=this.i(x)^_.i(x);return new o(w,this.h^_.h)};function L(_){for(var m=_.g.length+1,w=[],x=0;x<m;x++)w[x]=_.i(x)<<1|_.i(x-1)>>>31;return new o(w,_.h)}function O(_,m){var w=m>>5;m%=32;for(var x=_.g.length-w,C=[],P=0;P<x;P++)C[P]=0<m?_.i(P+w)>>>m|_.i(P+w+1)<<32-m:_.i(P+w);return new o(C,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,n0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,Wr=o}).apply(typeof _g<"u"?_g:typeof self<"u"?self:typeof window<"u"?window:{});var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var r0,js,i0,Qa,Fd,s0,o0,a0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ca=="object"&&Ca];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var N=a[v];if(!(N in f))break e;f=f[N]}a=a[a.length-1],v=f[a],c=c(v),c!=v&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var f=0,v=!1,N={next:function(){if(!v&&f<a.length){var V=f++;return{value:c(V,a[V]),done:!1}}return v=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function g(a,c,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,v),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function y(a,c,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,y.apply(null,arguments)}function S(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function R(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,N,V){for(var z=Array(arguments.length-2),he=2;he<arguments.length;he++)z[he-2]=arguments[he];return c.prototype[N].apply(v,z)}}function b(a){const c=a.length;if(0<c){const f=Array(c);for(let v=0;v<c;v++)f[v]=a[v];return f}return[]}function D(a,c){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(u(v)){const N=a.length||0,V=v.length||0;a.length=N+V;for(let z=0;z<V;z++)a[N+z]=v[z]}else a.push(v)}}class E{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function T(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function A(a){return A[" "](a),a}A[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function O(a,c,f){for(const v in a)c.call(f,a[v],v,a)}function _(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function m(a){const c={};for(const f in a)c[f]=a[f];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,c){let f,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(f in v)a[f]=v[f];for(let V=0;V<w.length;V++)f=w[V],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function C(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function k(){var a=W;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Fe{constructor(){this.h=this.g=null}add(c,f){const v=fn.get();v.set(c,f),this.h?this.h.next=v:this.g=v,this.h=v}}var fn=new E(()=>new $,a=>a.reset());class ${constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,M=!1,W=new Fe,X=()=>{const a=l.Promise.resolve(void 0);ee=()=>{a.then(_e)}};var _e=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(f){P(f)}var c=fn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}M=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var pn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function mn(a,c){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(L){e:{try{A(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mn.aa.h.call(this)}}R(mn,Ce);var gn={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),EE=0;function TE(a,c,f,v,N){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!v,this.ha=N,this.key=++EE,this.da=this.fa=!1}function Go(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Qo(a){this.src=a,this.g={},this.h=0}Qo.prototype.add=function(a,c,f,v,N){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=Du(a,c,v,N);return-1<z?(c=a[z],f||(c.fa=!1)):(c=new TE(c,this.src,V,!!v,N),c.fa=f,a.push(c)),c};function bu(a,c){var f=c.type;if(f in a.g){var v=a.g[f],N=Array.prototype.indexOf.call(v,c,void 0),V;(V=0<=N)&&Array.prototype.splice.call(v,N,1),V&&(Go(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Du(a,c,f,v){for(var N=0;N<a.length;++N){var V=a[N];if(!V.da&&V.listener==c&&V.capture==!!f&&V.ha==v)return N}return-1}var Ou="closure_lm_"+(1e6*Math.random()|0),Vu={};function tp(a,c,f,v,N){if(Array.isArray(c)){for(var V=0;V<c.length;V++)tp(a,c[V],f,v,N);return null}return f=ip(f),a&&a[yn]?a.K(c,f,d(v)?!!v.capture:!1,N):IE(a,c,f,!1,v,N)}function IE(a,c,f,v,N,V){if(!c)throw Error("Invalid event type");var z=d(N)?!!N.capture:!!N,he=ju(a);if(he||(a[Ou]=he=new Qo(a)),f=he.add(c,f,v,z,V),f.proxy)return f;if(v=SE(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)pn||(N=z),N===void 0&&(N=!1),a.addEventListener(c.toString(),v,N);else if(a.attachEvent)a.attachEvent(rp(c.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function SE(){function a(f){return c.call(a.src,a.listener,f)}const c=kE;return a}function np(a,c,f,v,N){if(Array.isArray(c))for(var V=0;V<c.length;V++)np(a,c[V],f,v,N);else v=d(v)?!!v.capture:!!v,f=ip(f),a&&a[yn]?(a=a.i,c=String(c).toString(),c in a.g&&(V=a.g[c],f=Du(V,f,v,N),-1<f&&(Go(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[c],a.h--)))):a&&(a=ju(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Du(c,f,v,N)),(f=-1<a?c[a]:null)&&Lu(f))}function Lu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[yn])bu(c.i,a);else{var f=a.type,v=a.proxy;c.removeEventListener?c.removeEventListener(f,v,a.capture):c.detachEvent?c.detachEvent(rp(f),v):c.addListener&&c.removeListener&&c.removeListener(v),(f=ju(c))?(bu(f,a),f.h==0&&(f.src=null,c[Ou]=null)):Go(a)}}}function rp(a){return a in Vu?Vu[a]:Vu[a]="on"+a}function kE(a,c){if(a.da)a=!0;else{c=new mn(c,this);var f=a.listener,v=a.ha||a.src;a.fa&&Lu(a),a=f.call(v,c)}return a}function ju(a){return a=a[Ou],a instanceof Qo?a:null}var Mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ip(a){return typeof a=="function"?a:(a[Mu]||(a[Mu]=function(c){return a.handleEvent(c)}),a[Mu])}function Xe(){de.call(this),this.i=new Qo(this),this.M=this,this.F=null}R(Xe,de),Xe.prototype[yn]=!0,Xe.prototype.removeEventListener=function(a,c,f,v){np(this,a,c,f,v)};function lt(a,c){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=c.type||c,typeof c=="string")c=new Ce(c,a);else if(c instanceof Ce)c.target=c.target||a;else{var N=c;c=new Ce(v,a),x(c,N)}if(N=!0,f)for(var V=f.length-1;0<=V;V--){var z=c.g=f[V];N=Yo(z,v,!0,c)&&N}if(z=c.g=a,N=Yo(z,v,!0,c)&&N,N=Yo(z,v,!1,c)&&N,f)for(V=0;V<f.length;V++)z=c.g=f[V],N=Yo(z,v,!1,c)&&N}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],v=0;v<f.length;v++)Go(f[v]);delete a.g[c],a.h--}}this.F=null},Xe.prototype.K=function(a,c,f,v){return this.i.add(String(a),c,!1,f,v)},Xe.prototype.L=function(a,c,f,v){return this.i.add(String(a),c,!0,f,v)};function Yo(a,c,f,v){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,V=0;V<c.length;++V){var z=c[V];if(z&&!z.da&&z.capture==f){var he=z.listener,$e=z.ha||z.src;z.fa&&bu(a.i,z),N=he.call($e,v)!==!1&&N}}return N&&!v.defaultPrevented}function sp(a,c,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function op(a){a.g=sp(()=>{a.g=null,a.i&&(a.i=!1,op(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class xE extends de{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:op(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(a){de.call(this),this.h=a,this.g={}}R(as,de);var ap=[];function lp(a){O(a.g,function(c,f){this.g.hasOwnProperty(f)&&Lu(c)},a),a.g={}}as.prototype.N=function(){as.aa.N.call(this),lp(this)},as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fu=l.JSON.stringify,AE=l.JSON.parse,RE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Uu(){}Uu.prototype.h=null;function up(a){return a.h||(a.h=a.i())}function cp(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bu(){Ce.call(this,"d")}R(Bu,Ce);function zu(){Ce.call(this,"c")}R(zu,Ce);var Rr={},dp=null;function Xo(){return dp=dp||new Xe}Rr.La="serverreachability";function hp(a){Ce.call(this,Rr.La,a)}R(hp,Ce);function us(a){const c=Xo();lt(c,new hp(c))}Rr.STAT_EVENT="statevent";function fp(a,c){Ce.call(this,Rr.STAT_EVENT,a),this.stat=c}R(fp,Ce);function ut(a){const c=Xo();lt(c,new fp(c,a))}Rr.Ma="timingevent";function pp(a,c){Ce.call(this,Rr.Ma,a),this.size=c}R(pp,Ce);function cs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function CE(a,c,f,v,N,V){a.info(function(){if(a.g)if(V)for(var z="",he=V.split("&"),$e=0;$e<he.length;$e++){var oe=he[$e].split("=");if(1<oe.length){var Je=oe[0];oe=oe[1];var Ze=Je.split("_");z=2<=Ze.length&&Ze[1]=="type"?z+(Je+"="+oe+"&"):z+(Je+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+c+`
`+f+`
`+z})}function PE(a,c,f,v,N,V,z){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+c+`
`+f+`
`+V+" "+z})}function ui(a,c,f,v){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+bE(a,f)+(v?" "+v:"")})}function NE(a,c){a.info(function(){return"TIMEOUT: "+c})}ds.prototype.info=function(){};function bE(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var N=v[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return Fu(f)}catch{return c}}var Jo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$u;function Zo(){}R(Zo,Uu),Zo.prototype.g=function(){return new XMLHttpRequest},Zo.prototype.i=function(){return{}},$u=new Zo;function $n(a,c,f,v){this.j=a,this.i=c,this.l=f,this.R=v||1,this.U=new as(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gp}function gp(){this.i=null,this.g="",this.h=!1}var yp={},Wu={};function Hu(a,c,f){a.L=1,a.v=ra(vn(c)),a.m=f,a.P=!0,vp(a,null)}function vp(a,c){a.F=Date.now(),ea(a),a.A=vn(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),bp(f.i,"t",v),a.C=0,f=a.j.J,a.h=new gp,a.g=Yp(a.j,f?c:null,!a.m),0<a.O&&(a.M=new xE(y(a.Y,a,a.g),a.O)),c=a.U,f=a.g,v=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(ap[0]=N.toString()),N=ap);for(var V=0;V<N.length;V++){var z=tp(f,N[V],v||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),us(),CE(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const c=this.M;c&&_n(a)==3?c.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=_n(this.g);var c=this.g.Ba();const hi=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Fp(this.g)))){this.J||Ze!=4||c==7||(c==8||0>=hi?us(3):us(2)),qu(this);var f=this.g.Z();this.X=f;t:if(_p(this)){var v=Fp(this.g);a="";var N=v.length,V=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),hs(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(v[c],{stream:!(V&&c==N-1)});v.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,PE(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,$e=this.g;if((he=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(he)){var oe=he;break t}}oe=null}if(f=oe)ui(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ku(this,f);else{this.o=!1,this.s=3,ut(12),Cr(this),hs(this);break e}}if(this.P){f=!0;let Ut;for(;!this.J&&this.C<z.length;)if(Ut=DE(this,z),Ut==Wu){Ze==4&&(this.s=4,ut(14),f=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==yp){this.s=4,ut(15),ui(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else ui(this.i,this.l,Ut,null),Ku(this,Ut);if(_p(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||z.length!=0||this.h.h||(this.s=1,ut(16),f=!1),this.o=this.o&&f,!f)ui(this.i,this.l,z,"[Invalid Chunked Response]"),Cr(this),hs(this);else if(0<z.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Zu(Je),Je.M=!0,ut(11))}}else ui(this.i,this.l,z,null),Ku(this,z);Ze==4&&Cr(this),this.o&&!this.J&&(Ze==4?qp(this.j,this):(this.o=!1,ea(this)))}else YE(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Cr(this),hs(this)}}}catch{}finally{}};function _p(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function DE(a,c){var f=a.C,v=c.indexOf(`
`,f);return v==-1?Wu:(f=Number(c.substring(f,v)),isNaN(f)?yp:(v+=1,v+f>c.length?Wu:(c=c.slice(v,v+f),a.C=v+f,c)))}$n.prototype.cancel=function(){this.J=!0,Cr(this)};function ea(a){a.S=Date.now()+a.I,wp(a,a.I)}function wp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=cs(y(a.ba,a),c)}function qu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(NE(this.i,this.A),this.L!=2&&(us(),ut(17)),Cr(this),this.s=2,hs(this)):wp(this,this.S-a)};function hs(a){a.j.G==0||a.J||qp(a.j,a)}function Cr(a){qu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,lp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ku(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||Gu(f.h,a))){if(!a.K&&Gu(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(c)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ua(f),aa(f);else break e;Ju(f),ut(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=cs(y(f.Za,f),6e3));if(1>=Ip(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Nr(f,11)}else if((a.K||f.g==a)&&ua(f),!T(c))for(N=f.Da.g.parse(c),c=0;c<N.length;c++){let oe=N[c];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Je=oe[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Ze=oe[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const hi=oe[5];hi!=null&&typeof hi=="number"&&0<hi&&(v=1.5*hi,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Ut=a.g;if(Ut){const da=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var V=v.h;V.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Qu(V,V.h),V.h=null))}if(v.D){const ec=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(v.ya=ec,pe(v.I,v.D,ec))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var z=a;if(v.qa=Qp(v,v.J?v.ia:null,v.W),z.K){Sp(v.h,z);var he=z,$e=v.L;$e&&(he.I=$e),he.B&&(qu(he),ea(he)),v.g=z}else Wp(v);0<f.i.length&&la(f)}else oe[0]!="stop"&&oe[0]!="close"||Nr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Nr(f,7):Xu(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}us(4)}catch{}}var OE=class{constructor(a,c){this.g=a,this.map=c}};function Ep(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ip(a){return a.h?1:a.g?a.g.size:0}function Gu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Qu(a,c){a.g?a.g.add(c):a.h=c}function Sp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ep.prototype.cancel=function(){if(this.i=kp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return b(a.i)}function VE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,v=0;v<f;v++)c.push(a[v]);return c}c=[],f=0;for(v in a)c[f++]=a[v];return c}function LE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const v in a)c[f++]=v;return c}}}function xp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=LE(a),v=VE(a),N=v.length,V=0;V<N;V++)c.call(void 0,v[V],f&&f[V],a)}var Ap=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jE(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),N=null;if(0<=v){var V=a[f].substring(0,v);N=a[f].substring(v+1)}else V=a[f];c(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pr){this.h=a.h,ta(this,a.j),this.o=a.o,this.g=a.g,na(this,a.s),this.l=a.l;var c=a.i,f=new ms;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Rp(this,f),this.m=a.m}else a&&(c=String(a).match(Ap))?(this.h=!1,ta(this,c[1]||"",!0),this.o=fs(c[2]||""),this.g=fs(c[3]||"",!0),na(this,c[4]),this.l=fs(c[5]||"",!0),Rp(this,c[6]||"",!0),this.m=fs(c[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Pr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ps(c,Cp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ps(c,Cp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ps(f,f.charAt(0)=="/"?UE:FE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ps(f,zE)),a.join("")};function vn(a){return new Pr(a)}function ta(a,c,f){a.j=f?fs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function na(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Rp(a,c,f){c instanceof ms?(a.i=c,$E(a.i,a.h)):(f||(c=ps(c,BE)),a.i=new ms(c,a.h))}function pe(a,c,f){a.i.set(c,f)}function ra(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ps(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,ME),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ME(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cp=/[#\/\?@]/g,FE=/[#\?:]/g,UE=/[#\?]/g,BE=/[#\?@]/g,zE=/#/g;function ms(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&jE(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=ms.prototype,t.add=function(a,c){Wn(this),this.i=null,a=ci(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Pp(a,c){Wn(a),c=ci(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Np(a,c){return Wn(a),c=ci(a,c),a.g.has(c)}t.forEach=function(a,c){Wn(this),this.g.forEach(function(f,v){f.forEach(function(N){a.call(c,N,v,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let v=0;v<c.length;v++){const N=a[v];for(let V=0;V<N.length;V++)f.push(c[v])}return f},t.V=function(a){Wn(this);let c=[];if(typeof a=="string")Np(this,a)&&(c=c.concat(this.g.get(ci(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Wn(this),this.i=null,a=ci(this,a),Np(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function bp(a,c,f){Pp(a,c),0<f.length&&(a.i=null,a.g.set(ci(a,c),b(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var v=c[f];const V=encodeURIComponent(String(v)),z=this.V(v);for(v=0;v<z.length;v++){var N=V;z[v]!==""&&(N+="="+encodeURIComponent(String(z[v]))),a.push(N)}}return this.i=a.join("&")};function ci(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function $E(a,c){c&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(f,v){var N=v.toLowerCase();v!=N&&(Pp(this,v),bp(this,N,f))},a)),a.j=c}function WE(a,c){const f=new ds;if(l.Image){const v=new Image;v.onload=S(Hn,f,"TestLoadImage: loaded",!0,c,v),v.onerror=S(Hn,f,"TestLoadImage: error",!1,c,v),v.onabort=S(Hn,f,"TestLoadImage: abort",!1,c,v),v.ontimeout=S(Hn,f,"TestLoadImage: timeout",!1,c,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else c(!1)}function HE(a,c){const f=new ds,v=new AbortController,N=setTimeout(()=>{v.abort(),Hn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:v.signal}).then(V=>{clearTimeout(N),V.ok?Hn(f,"TestPingServer: ok",!0,c):Hn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Hn(f,"TestPingServer: error",!1,c)})}function Hn(a,c,f,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(f)}catch{}}function qE(){this.g=new RE}function KE(a,c,f){const v=f||"";try{xp(a,function(N,V){let z=N;d(N)&&(z=Fu(N)),c.push(v+V+"="+encodeURIComponent(z))})}catch(N){throw c.push(v+"type="+encodeURIComponent("_badmap")),N}}function ia(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ia,Uu),ia.prototype.g=function(){return new sa(this.l,this.j)},ia.prototype.i=function(a){return function(){return a}}({});function sa(a,c){Xe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(sa,Xe),t=sa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?gs(this):ys(this),this.readyState==3&&Dp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,gs(this))},t.Qa=function(a){this.g&&(this.response=a,gs(this))},t.ga=function(){this.g&&gs(this)};function gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ys(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Op(a){let c="";return O(a,function(f,v){c+=v,c+=":",c+=f,c+=`\r
`}),c}function Yu(a,c,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Op(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):pe(a,c,f))}function ke(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ke,Xe);var GE=/^https?$/i,QE=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$u.g(),this.v=this.o?up(this.o):up($u),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){Vp(this,V);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)f.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const V of v.keys())f.set(V,v.get(V));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(QE,c,void 0))||v||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mp(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Vp(this,V)}};function Vp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Lp(a),oa(a)}function Lp(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oa(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jp(this):this.bb())},t.bb=function(){jp(this)};function jp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)sp(a.Ea,0,a);else if(lt(a,"readystatechange"),_n(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var v;if(v=z===0){var N=String(a.D).match(Ap)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),v=!GE.test(N?N.toLowerCase():"")}f=v}if(f)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var V=2<_n(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Lp(a)}}finally{oa(a)}}}}function oa(a,c){if(a.g){Mp(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||lt(a,"ready");try{f.onreadystatechange=v}catch{}}}function Mp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),AE(c)}};function Fp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function YE(a){const c={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(T(a[v]))continue;var f=C(a[v]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=c[N]||[];c[N]=V,V.push(f)}_(c,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function Up(a){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,a),this.cb=vs("retryDelaySeedMs",1e4,a),this.Wa=vs("forwardChannelMaxRetries",2,a),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ep(a&&a.concurrentRequestLimit),this.Da=new qE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Up.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,v){ut(0),this.W=a,this.H=c||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=Qp(this,null,this.W),la(this)};function Xu(a){if(Bp(a),a.G==3){var c=a.U++,f=vn(a.I);if(pe(f,"SID",a.K),pe(f,"RID",c),pe(f,"TYPE","terminate"),_s(a,f),c=new $n(a,a.j,c),c.L=2,c.v=ra(vn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Yp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ea(c)}Gp(a)}function aa(a){a.g&&(Zu(a),a.g.cancel(),a.g=null)}function Bp(a){aa(a),a.u&&(l.clearTimeout(a.u),a.u=null),ua(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function la(a){if(!Tp(a.h)&&!a.s){a.s=!0;var c=a.Ga;ee||X(),M||(ee(),M=!0),W.add(c,a),a.B=0}}function XE(a,c){return Ip(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=cs(y(a.Ga,a,c),Kp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new $n(this,this.j,a);let V=this.o;if(this.S&&(V?(V=m(V),x(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(c+=v,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=$p(this,N,c),f=vn(this.I),pe(f,"RID",a),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),_s(this,f),V&&(this.O?c="headers="+encodeURIComponent(String(Op(V)))+"&"+c:this.m&&Yu(f,this.m,V)),Qu(this.h,N),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",c),pe(f,"SID","null"),N.T=!0,Hu(N,f,null)):Hu(N,f,c),this.G=2}}else this.G==3&&(a?zp(this,a):this.i.length==0||Tp(this.h)||zp(this))};function zp(a,c){var f;c?f=c.l:f=a.U++;const v=vn(a.I);pe(v,"SID",a.K),pe(v,"RID",f),pe(v,"AID",a.T),_s(a,v),a.m&&a.o&&Yu(v,a.m,a.o),f=new $n(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=$p(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qu(a.h,f),Hu(f,v,c)}function _s(a,c){a.H&&O(a.H,function(f,v){pe(c,v,f)}),a.l&&xp({},function(f,v){pe(c,v,f)})}function $p(a,c,f){f=Math.min(a.i.length,f);var v=a.l?y(a.l.Na,a.l,a):null;e:{var N=a.i;let V=-1;for(;;){const z=["count="+f];V==-1?0<f?(V=N[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let he=!0;for(let $e=0;$e<f;$e++){let oe=N[$e].g;const Je=N[$e].map;if(oe-=V,0>oe)V=Math.max(0,N[$e].g-100),he=!1;else try{KE(Je,z,"req"+oe+"_")}catch{v&&v(Je)}}if(he){v=z.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,v}function Wp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ee||X(),M||(ee(),M=!0),W.add(c,a),a.v=0}}function Ju(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=cs(y(a.Fa,a),Kp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Hp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=cs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),aa(this),Hp(this))};function Zu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Hp(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=vn(a.qa);pe(c,"RID","rpc"),pe(c,"SID",a.K),pe(c,"AID",a.T),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(c,"TO",a.ja),pe(c,"TYPE","xmlhttp"),_s(a,c),a.m&&a.o&&Yu(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ra(vn(c)),f.m=null,f.P=!0,vp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,aa(this),Ju(this),ut(19))};function ua(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qp(a,c){var f=null;if(a.g==c){ua(a),Zu(a),a.g=null;var v=2}else if(Gu(a.h,c))f=c.D,Sp(a.h,c),v=1;else return;if(a.G!=0){if(c.o)if(v==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;v=Xo(),lt(v,new pp(v,f)),la(a)}else Wp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(v==1&&XE(a,c)||v==2&&Ju(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),N){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function Kp(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Nr(a,c){if(a.j.info("Error code "+c),c==2){var f=y(a.fb,a),v=a.Xa;const N=!v;v=new Pr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ta(v,"https"),ra(v),N?WE(v.toString(),f):HE(v.toString(),f)}else ut(2);a.G=0,a.l&&a.l.sa(c),Gp(a),Bp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Gp(a){if(a.G=0,a.ka=[],a.l){const c=kp(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function Qp(a,c,f){var v=f instanceof Pr?vn(f):new Pr(f);if(v.g!="")c&&(v.g=c+"."+v.g),na(v,v.s);else{var N=l.location;v=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var V=new Pr(null);v&&ta(V,v),c&&(V.g=c),N&&na(V,N),f&&(V.l=f),v=V}return f=a.D,c=a.ya,f&&c&&pe(v,f,c),pe(v,"VER",a.la),_s(a,v),v}function Yp(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new ia({eb:f})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xp(){}t=Xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ca(){}ca.prototype.g=function(a,c){return new It(a,c)};function It(a,c){Xe.call(this),this.g=new Up(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!T(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new di(this)}R(It,Xe),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Xu(this.g)},It.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Fu(a),a=f);c.i.push(new OE(c.Ya++,a)),c.G==3&&la(c)},It.prototype.N=function(){this.g.l=null,delete this.j,Xu(this.g),delete this.g,It.aa.N.call(this)};function Jp(a){Bu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Jp,Bu);function Zp(){zu.call(this),this.status=1}R(Zp,zu);function di(a){this.g=a}R(di,Xp),di.prototype.ua=function(){lt(this.g,"a")},di.prototype.ta=function(a){lt(this.g,new Jp(a))},di.prototype.sa=function(a){lt(this.g,new Zp)},di.prototype.ra=function(){lt(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,a0=function(){return new ca},o0=function(){return Xo()},s0=Rr,Fd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jo.NO_ERROR=0,Jo.TIMEOUT=8,Jo.HTTP_ERROR=6,Qa=Jo,mp.COMPLETE="complete",i0=mp,cp.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,js=cp,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,r0=ke}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});const wg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Jh("@firebase/firestore");function Rs(){return Jr.logLevel}function q(t,...e){if(Jr.logLevel<=re.DEBUG){const n=e.map(tf);Jr.debug(`Firestore (${rs}): ${t}`,...n)}}function Ln(t,...e){if(Jr.logLevel<=re.ERROR){const n=e.map(tf);Jr.error(`Firestore (${rs}): ${t}`,...n)}}function qi(t,...e){if(Jr.logLevel<=re.WARN){const n=e.map(tf);Jr.warn(`Firestore (${rs}): ${t}`,...n)}}function tf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function ce(t,e){t||Y()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class ox{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ax{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new l0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new rt(e)}}class lx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ux{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new cx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Me(0,0))}static max(){return new J(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Eo{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const fx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Eo{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return fx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ve.fromString(e))}static fromName(e){return new G(ve.fromString(e).popFirst(5))}static empty(){return new G(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ve(e.slice()))}}function px(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Er(i,G.empty(),e)}function mx(t){return new Er(t.readTime,t.key,-1)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(J.min(),G.empty(),-1)}static max(){return new Er(J.max(),G.empty(),-1)}}function gx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==yx)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _x(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}nf.oe=-1;function hu(t){return t==null}function bl(t){return t===0&&1/t==-1/0}function wx(t){return typeof t=="number"&&Number.isInteger(t)&&!bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tg(this.data.getIterator())}getIteratorFrom(e){return new Tg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Tg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Ge(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new d0("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const Ex=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=Ex.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sf(t){const e=t.mapValue.fields.__previous_value__;return rf(e)?sf(e):e}function To(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na={mapValue:{}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rf(t)?4:Sx(t)?9007199254740991:Ix(t)?10:11:Y()}function un(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Tr(i.timestampValue),l=Tr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zr(i.bytesValue).isEqual(Zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),l=Ne(s.doubleValue);return o===l?bl(o)===bl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Eg(o)!==Eg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function So(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=ei(t),r=ei(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ig(t.timestampValue,e.timestampValue);case 4:return Ig(To(t),To(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Zr(s),u=Zr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=ae(l[d],u[d]);if(p!==0)return p}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Ne(s.latitude),Ne(o.latitude));return l!==0?l:ae(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,p;const g=s.fields||{},y=o.fields||{},S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,R=(u=y.value)===null||u===void 0?void 0:u.arrayValue,b=ae(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=R==null?void 0:R.values)===null||p===void 0?void 0:p.length)||0);return b!==0?b:Sg(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Na.mapValue&&o===Na.mapValue)return 0;if(s===Na.mapValue)return 1;if(o===Na.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const y=ae(u[g],p[g]);if(y!==0)return y;const S=Gi(l[u[g]],d[p[g]]);if(S!==0)return S}return ae(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Ig(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Tr(t),r=Tr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Sg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Gi(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Qi(t){return Ud(t)}function Ud(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ud(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ud(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Bd(t){return!!t&&"integerValue"in t}function of(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ya(t){return!!t&&"mapValue"in t}function Ix(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ai(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ys(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ya(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ai(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(Ys(this.value))}}function h0(t){const e=[];return ai(t.fields,(n,r)=>{const i=new qe([n]);if(Ya(r)){const s=h0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,J.min(),J.min(),J.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,J.min(),J.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,J.min(),J.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.position=e,this.inclusive=n}}function Ag(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n="asc"){this.field=e,this.dir=n}}function kx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{}class Le extends f0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ax(e,n,r):n==="array-contains"?new Px(e,r):n==="in"?new Nx(e,r):n==="not-in"?new bx(e,r):n==="array-contains-any"?new Dx(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Rx(e,r):new Cx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gi(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends f0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return p0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function p0(t){return t.op==="and"}function m0(t){return xx(t)&&p0(t)}function xx(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function zd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(m0(t))return t.filters.map(e=>zd(e)).join(",");{const e=t.filters.map(n=>zd(n)).join(",");return`${t.op}(${e})`}}function g0(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(t,e):t instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&g0(o,i.filters[l]),!0):!1}(t,e):void Y()}function y0(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Qi(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(y0).join(" ,")+"}"}(t):"Filter"}class Ax extends Le{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class Rx extends Le{constructor(e,n){super(e,"in",n),this.keys=v0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Cx extends Le{constructor(e,n){super(e,"not-in",n),this.keys=v0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function v0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class Px extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&So(n.arrayValue,this.value)}}class Nx extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class bx extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!So(this.value.arrayValue,n)}}class Dx extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Cg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ox(t,e,n,r,i,s,o)}function af(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),hu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qi(r)).join(",")),e.ue=n}return e.ue}function lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!g0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rg(t.startAt,e.startAt)&&Rg(t.endAt,e.endAt)}function $d(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Vx(t,e,n,r,i,s,o,l){return new fu(t,e,n,r,i,s,o,l)}function pu(t){return new fu(t)}function Pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Lx(t){return t.collectionGroup!==null}function Xs(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ol(s,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new Ol(qe.keyField(),r))}return e.ce}function on(t){const e=Z(t);return e.le||(e.le=jx(e,Xs(t))),e.le}function jx(t,e){if(t.limitType==="F")return Cg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ol(i.field,s)});const n=t.endAt?new Dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dl(t.startAt.position,t.startAt.inclusive):null;return Cg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wd(t,e,n){return new fu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mu(t,e){return lf(on(t),on(e))&&t.limitType===e.limitType}function _0(t){return`${af(on(t))}|lt:${t.limitType}`}function pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>y0(i)).join(", ")}]`),hu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qi(i)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function gu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=Ag(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Xs(r),i)||r.endAt&&!function(o,l,u){const d=Ag(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Xs(r),i))}(t,e)}function Mx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function w0(t){return(e,n)=>{let r=!1;for(const i of Xs(t)){const s=Fx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Fx(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Gi(u,d):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ai(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return c0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new Se(G.comparator);function jn(){return Ux}const E0=new Se(G.comparator);function Ms(...t){let e=E0;for(const n of t)e=e.insert(n.key,n);return e}function T0(t){let e=E0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return Js()}function I0(){return Js()}function Js(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bx=new Se(G.comparator),zx=new Ge(G.comparator);function ne(...t){let e=zx;for(const n of t)e=e.add(n);return e}const $x=new Ge(ae);function Wx(){return $x}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bl(e)?"-0":e}}function S0(t){return{integerValue:""+t}}function Hx(t,e){return wx(e)?S0(e):uf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this._=void 0}}function qx(t,e,n){return t instanceof Vl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rf(s)&&(s=sf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ko?x0(t,e):t instanceof xo?A0(t,e):function(i,s){const o=k0(i,s),l=Ng(o)+Ng(i.Pe);return Bd(o)&&Bd(i.Pe)?S0(l):uf(i.serializer,l)}(t,e)}function Kx(t,e,n){return t instanceof ko?x0(t,e):t instanceof xo?A0(t,e):n}function k0(t,e){return t instanceof Ll?function(r){return Bd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vl extends yu{}class ko extends yu{constructor(e){super(),this.elements=e}}function x0(t,e){const n=R0(e);for(const r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class xo extends yu{constructor(e){super(),this.elements=e}}function A0(t,e){let n=R0(e);for(const r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class Ll extends yu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ng(t){return Ne(t.integerValue||t.doubleValue)}function R0(t){return of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ko&&i instanceof ko||r instanceof xo&&i instanceof xo?Ki(r.elements,i.elements,un):r instanceof Ll&&i instanceof Ll?un(r.Pe,i.Pe):r instanceof Vl&&i instanceof Vl}(t.transform,e.transform)}class Qx{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vu{}function C0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cf(t.key,Lt.none()):new Fo(t.key,t.data,Lt.none());{const n=t.data,r=yt.empty();let i=new Ge(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new xt(i.toArray()),Lt.none())}}function Yx(t,e,n){t instanceof Fo?function(i,s,o){const l=i.value.clone(),u=Dg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(i,s,o){if(!Xa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Dg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(P0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof Fo?function(s,o,l,u){if(!Xa(s.precondition,o))return l;const d=s.value.clone(),p=Og(s.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(s,o,l,u){if(!Xa(s.precondition,o))return l;const d=Og(s.fieldTransforms,u,o),p=o.data;return p.setAll(P0(s)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Xa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Xx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=k0(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function bg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ki(r,i,(s,o)=>Gx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends vu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends vu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function P0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dg(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Kx(o,l,n[i]))}return r}function Og(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qx(s,o,e))}return r}class cf extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jx extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Yx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=C0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>bg(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>bg(n,r))}}class df{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return Bx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new df(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function n1(t){switch(t){default:return Y();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function N0(t){if(t===void 0)return Ln("GRPC error has no .code"),j.UNKNOWN;switch(t){case De.OK:return j.OK;case De.CANCELLED:return j.CANCELLED;case De.UNKNOWN:return j.UNKNOWN;case De.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case De.INTERNAL:return j.INTERNAL;case De.UNAVAILABLE:return j.UNAVAILABLE;case De.UNAUTHENTICATED:return j.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case De.NOT_FOUND:return j.NOT_FOUND;case De.ALREADY_EXISTS:return j.ALREADY_EXISTS;case De.PERMISSION_DENIED:return j.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case De.ABORTED:return j.ABORTED;case De.OUT_OF_RANGE:return j.OUT_OF_RANGE;case De.UNIMPLEMENTED:return j.UNIMPLEMENTED;case De.DATA_LOSS:return j.DATA_LOSS;default:return Y()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new Wr([4294967295,4294967295],0);function Vg(t){const e=r1().encode(t),n=new n0;return n.update(e),new Uint8Array(n.digest())}function Lg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Wr.fromNumber(r)));return i.compare(i1)===1&&(i=new Wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Vg(e),[r,i]=Lg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Vg(e),[r,i]=Lg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _u(J.min(),i,new Se(ae),jn(),ne())}}class Uo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class b0{constructor(e,n){this.targetId=e,this.me=n}}class D0{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jg{constructor(){this.fe=0,this.ge=Fg(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Fg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class s1{constructor(e){this.Le=e,this.Be=new Map,this.ke=jn(),this.qe=Mg(),this.Qe=new Se(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if($d(s))if(r===0){const o=new G(s.path);this.Ue(n,o,st.newNoDocument(o,J.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Zr(r).toUint8Array()}catch(u){if(u instanceof d0)return qi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hf(o,i,s)}catch(u){return qi(u instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&$d(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,st.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new _u(e,n,this.Qe,this.ke,r);return this.ke=jn(),this.qe=Mg(),this.Qe=new Se(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Mg(){return new Se(G.comparator)}function Fg(){return new Se(G.comparator)}const o1={asc:"ASCENDING",desc:"DESCENDING"},a1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l1={and:"AND",or:"OR"};class u1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hd(t,e){return t.useProto3Json||hu(e)?e:{value:e}}function jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function c1(t,e){return jl(t,e.toTimestamp())}function an(t){return ce(!!t),J.fromTimestamp(function(n){const r=Tr(n);return new Me(r.seconds,r.nanos)}(t))}function ff(t,e){return qd(t,e).canonicalString()}function qd(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function V0(t){const e=ve.fromString(t);return ce(U0(e)),e}function Kd(t,e){return ff(t.databaseId,e.path)}function bc(t,e){const n=V0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(j0(n))}function L0(t,e){return ff(t.databaseId,e)}function d1(t){const e=V0(t);return e.length===4?ve.emptyPath():j0(e)}function Gd(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j0(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ug(t,e,n){return{name:Kd(t,e),fields:n.value.mapValue.fields}}function h1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(ce(p===void 0||typeof p=="string"),Ye.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ye.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?j.UNKNOWN:N0(d.code);return new K(p,d.message||"")}(o);n=new D0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bc(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):J.min(),l=new yt({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new Ja(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bc(t,r.document),s=r.readTime?an(r.readTime):J.min(),o=st.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ja([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bc(t,r.document),s=r.removedTargetIds||[];n=new Ja([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new t1(i,s),l=r.targetId;n=new b0(l,o)}}return n}function f1(t,e){let n;if(e instanceof Fo)n={update:Ug(t,e.key,e.value)};else if(e instanceof cf)n={delete:Kd(t,e.key)};else if(e instanceof Ar)n={update:Ug(t,e.key,e.data),updateMask:T1(e.fieldMask)};else{if(!(e instanceof Jx))return Y();n={verify:Kd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:c1(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function p1(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(J.min())&&(o=an(s)),new Qx(o,i.transformResults||[])}(n,e))):[]}function m1(t,e){return{documents:[L0(t,e.path)]}}function g1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=L0(t,i);const s=function(d){if(d.length!==0)return F0(cn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(p=>function(y){return{field:mi(y.field),direction:_1(y.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Hd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function y1(t){let e=d1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const y=M0(g);return y instanceof cn&&m0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(R){return new Ol(gi(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,hu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,S=g.values||[];return new Dl(S,y)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const y=!g.before,S=g.values||[];return new Dl(S,y)}(n.endAt)),Vx(e,i,o,s,l,"F",u,d)}function v1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function M0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(gi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>M0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function _1(t){return o1[t]}function w1(t){return a1[t]}function E1(t){return l1[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return qe.fromServerFormat(t.fieldPath)}function F0(t){return t instanceof Le?function(n){if(n.op==="=="){if(xg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(kg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(kg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:w1(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(i=>F0(i));return r.length===1?r[0]:{compositeFilter:{op:E1(n.op),filters:r}}}(t):Y()}function T1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.ct=e}}function S1(t){const e=y1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.un=new x1}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Er.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class x1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Yi(0)}static kn(){return new Yi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zs(r.mutation,i,xt.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ms();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=jn();const o=Js(),l=function(){return Js()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ar)?s=s.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Zs(p.mutation,d,p.mutation.getFieldMask(),Me.now())):o.set(d.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var g;return l.set(d,new R1(p,(g=o.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Js();let i=new Se((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||xt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const g=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,g=I0();p.forEach(y=>{if(!s.has(y)){const S=C0(n.get(y),r.get(y));S!==null&&g.set(y,S),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Ur());let l=-1,u=s;return o.next(d=>F.forEach(d,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(p)?F.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{u=u.insert(p,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ne())).next(p=>({batchId:l,changes:T0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Ms();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ms();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const d=function(g,y){return new fu(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,st.newInvalidDocument(p)))});let l=Ms();return o.forEach((u,d)=>{const p=s.get(u);p!==void 0&&Zs(p.mutation,d,xt.empty(),Me.now()),gu(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:S1(i.bundledQuery),readTime:an(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.overlays=new Se(G.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Ur(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Ur(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Ur(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new e1(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.Tr=new Ge(Ue.Er),this.dr=new Ge(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new ve([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new ve([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ge(Ue.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ae);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new G(s),0);let l=new Ge(ae);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.Mr=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||gx(mx(p),r)<=0||(i.has(p.key)||gu(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new V1(this)}getSize(e){return F.resolve(this.size)}}class V1 extends A1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.persistence=e,this.Nr=new is(n=>af(n),lf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pf,this.targetCount=0,this.kr=Yi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new nf(0),this.Kr=!1,this.Kr=!0,this.$r=new b1,this.referenceDelegate=e(this),this.Ur=new L1(this),this.indexManager=new k1,this.remoteDocumentCache=function(i){return new O1(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new I1(n),this.Gr=new P1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new N1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new D1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new M1(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class M1 extends vx{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Jr=new pf,this.Yr=null}static Zr(e){return new mf(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return US()?8:_x(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new F1;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Rs()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Rs()<=re.DEBUG&&q("QueryEngine","Query:",pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Rs()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):F.resolve())}Yi(e,n){if(Pg(n))return F.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wd(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Wd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return Pg(n)||i.isEqual(J.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Rs()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pi(n)),this.rs(e,o,n,px(i,-1)).next(l=>l))})}ts(e,n){let r=new Ge(w0(e));return n.forEach((i,s)=>{gu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Rs()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",pi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Er.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(ae),this._s=new is(s=>af(s),lf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new C1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function z1(t,e,n,r){return new B1(t,e,n,r)}async function B0(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const d of i){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function $1(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const g=d.batch,y=g.keys();let S=F.resolve();return y.forEach(R=>{S=S.next(()=>p.getEntry(u,R)).next(b=>{const D=d.docVersions.get(R);ce(D!==null),b.version.compareTo(D)<0&&(g.applyToRemoteDocument(b,d),b.isValidDocument()&&(b.setReadTime(d.commitVersion),p.addEntry(b)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function z0(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function W1(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,g)));let S=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Ye.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(g,S),function(b,D,E){return b.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(y,S,p)&&l.push(n.Ur.updateTargetData(s,S))});let u=jn(),d=ne();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(H1(s,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(J.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function H1(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function q1(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function K1(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Qd(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Bg(t,e,n){const r=Z(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const g=Z(u),y=g._s.get(p);return y!==void 0?F.resolve(g.os.get(y)):g.Ur.getTargetData(d,p)}(r,o,on(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(l=>(G1(r,Mx(e),l),{documents:l,Ts:s})))}function G1(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class zg{constructor(){this.activeTargetIds=Wx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q1{constructor(){this.so=new zg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new zg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba=null;function Dc(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class Z1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Dc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(p=>(q("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw qi("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=X1[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Dc();return new Promise((o,l)=>{const u=new r0;u.setWithCredentials(!0),u.listenOnce(i0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Qa.NO_ERROR:const p=u.getResponseJson();q(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case Qa.TIMEOUT:q(nt,`RPC '${e}' ${s} timed out`),l(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const g=u.getStatus();if(q(nt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const R=function(D){const E=D.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(E)>=0?E:j.UNKNOWN}(S.status);l(new K(R,S.message))}else l(new K(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(j.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{q(nt,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);q(nt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Dc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=a0(),l=o0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");q(nt,`Creating RPC '${e}' stream ${i}: ${p}`,u);const g=o.createWebChannel(p,u);let y=!1,S=!1;const R=new J1({Io:D=>{S?q(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(y||(q(nt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),q(nt,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},To:()=>g.close()}),b=(D,E,T)=>{D.listen(E,I=>{try{T(I)}catch(A){setTimeout(()=>{throw A},0)}})};return b(g,js.EventType.OPEN,()=>{S||(q(nt,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),b(g,js.EventType.CLOSE,()=>{S||(S=!0,q(nt,`RPC '${e}' stream ${i} transport closed`),R.So())}),b(g,js.EventType.ERROR,D=>{S||(S=!0,qi(nt,`RPC '${e}' stream ${i} transport errored:`,D),R.So(new K(j.UNAVAILABLE,"The operation could not be completed")))}),b(g,js.EventType.MESSAGE,D=>{var E;if(!S){const T=D.data[0];ce(!!T);const I=T,A=I.error||((E=I[0])===null||E===void 0?void 0:E.error);if(A){q(nt,`RPC '${e}' stream ${i} received error:`,A);const L=A.status;let O=function(w){const x=De[w];if(x!==void 0)return N0(x)}(L),_=A.message;O===void 0&&(O=j.INTERNAL,_="Unknown error status: "+L+" with message "+A.message),S=!0,R.So(new K(O,_)),g.close()}else q(nt,`RPC '${e}' stream ${i} received:`,T),R.bo(T)}}),b(l,s0.STAT_EVENT,D=>{D.stat===Fd.PROXY?q(nt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Fd.NOPROXY&&q(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){return new u1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eA extends W0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=h1(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?an(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Gd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=$d(u)?{documents:m1(s,u)}:{query:g1(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=O0(s,o.resumeToken);const d=Hd(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=jl(s,o.snapshotVersion.toTimestamp());const d=Hd(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=v1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Gd(this.serializer),n.removeTarget=e,this.a_(n)}}class tA extends W0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=p1(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Gd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>f1(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,qd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ln(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{li(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=Z(u);d.L_.add(4),await Bo(d),d.q_.set("Unknown"),d.L_.delete(4),await Eu(d)}(this))})}),this.q_=new rA(r,i)}}async function Eu(t){if(li(t))for(const e of t.B_)await e(!0)}async function Bo(t){for(const e of t.B_)await e(!1)}function H0(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),wf(n)?_f(n):ss(n).r_()&&vf(n,e))}function yf(t,e){const n=Z(t),r=ss(n);n.N_.delete(e),r.r_()&&q0(n,e),n.N_.size===0&&(r.r_()?r.o_():li(n)&&n.q_.set("Unknown"))}function vf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).A_(e)}function q0(t,e){t.Q_.xe(e),ss(t).R_(e)}function _f(t){t.Q_=new s1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.q_.v_()}function wf(t){return li(t)&&!ss(t).n_()&&t.N_.size>0}function li(t){return Z(t).L_.size===0}function K0(t){t.Q_=void 0}async function sA(t){t.q_.set("Online")}async function oA(t){t.N_.forEach((e,n)=>{vf(t,e)})}async function aA(t,e){K0(t),wf(t)?(t.q_.M_(e),_f(t)):t.q_.set("Unknown")}async function lA(t,e,n){if(t.q_.set("Online"),e instanceof D0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ml(t,r)}else if(e instanceof Ja?t.Q_.Ke(e):e instanceof b0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await z0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(d);p&&s.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(Ye.EMPTY_BYTE_STRING,p.snapshotVersion)),q0(s,u);const g=new sr(p.target,u,d,p.sequenceNumber);vf(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Ml(t,r)}}async function Ml(t,e,n){if(!Mo(e))throw e;t.L_.add(1),await Bo(t),t.q_.set("Offline"),n||(n=()=>z0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Eu(t)})}function G0(t,e){return e().catch(n=>Ml(t,n,e))}async function Tu(t){const e=Z(t),n=Ir(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;uA(e);)try{const i=await q1(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,cA(e,i)}catch(i){await Ml(e,i)}Q0(e)&&Y0(e)}function uA(t){return li(t)&&t.O_.length<10}function cA(t,e){t.O_.push(e);const n=Ir(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Q0(t){return li(t)&&!Ir(t).n_()&&t.O_.length>0}function Y0(t){Ir(t).start()}async function dA(t){Ir(t).p_()}async function hA(t){const e=Ir(t);for(const n of t.O_)e.m_(n.mutations)}async function fA(t,e,n){const r=t.O_.shift(),i=df.from(r,e,n);await G0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Tu(t)}async function pA(t,e){e&&Ir(t).V_&&await async function(r,i){if(function(o){return n1(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Ir(r).s_(),await G0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Tu(r)}}(t,e),Q0(t)&&Y0(t)}async function Wg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=li(n);n.L_.add(3),await Bo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Eu(n)}async function mA(t,e){const n=Z(t);e?(n.L_.delete(2),await Eu(n)):e||(n.L_.add(2),await Bo(n),n.q_.set("Unknown"))}function ss(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new eA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:sA.bind(null,t),Ro:oA.bind(null,t),mo:aA.bind(null,t),d_:lA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),wf(t)?_f(t):t.q_.set("Unknown")):(await t.K_.stop(),K0(t))})),t.K_}function Ir(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new tA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:dA.bind(null,t),mo:pA.bind(null,t),f_:hA.bind(null,t),g_:fA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Tu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ef(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Mo(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Ms(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.W_=new Se(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xi{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Xi(e,n,Vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yA{constructor(){this.queries=qg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=qg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function qg(){return new is(t=>_0(t),mu)}async function If(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new gA,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tf(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&kf(n)}async function Sf(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vA(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&kf(n)}function _A(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function kf(t){t.Y_.forEach(e=>{e.next()})}var Yd,Kg;(Kg=Yd||(Yd={})).ea="default",Kg.Cache="cache";class xf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Yd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.key=e}}class J0{constructor(e){this.key=e}}class wA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=w0(e),this.Ra=new Vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Hg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const y=i.get(p),S=gu(this.query,g)?g:null,R=!!y&&this.mutatedKeys.has(y.key),b=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;y&&S?y.data.isEqual(S.data)?R!==b&&(r.track({type:3,doc:S}),D=!0):this.ga(y,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(l=!0)):!y&&S?(r.track({type:0,doc:S}),D=!0):y&&!S&&(r.track({type:1,doc:y}),D=!0,(u||d)&&(l=!0)),D&&(S?(o=o.add(S),s=b?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,g)=>function(S,R){const b=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return b(S)-b(R)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Xi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Hg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new J0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new X0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Xi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class EA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TA{constructor(e){this.key=e,this.va=!1}}class IA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new is(l=>_0(l),mu),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(G.comparator),this.Na=new Map,this.La=new pf,this.Ba={},this.ka=new Map,this.qa=Yi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function SA(t,e,n=!0){const r=iw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Z0(r,e,n,!0),i}async function kA(t,e){const n=iw(t);await Z0(n,e,!0,!1)}async function Z0(t,e,n,r){const i=await K1(t.localStore,on(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await xA(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&H0(t.remoteStore,i),l}async function xA(t,e,n,r,i){t.Ka=(g,y,S)=>async function(b,D,E,T){let I=D.view.ma(E);I.ns&&(I=await Bg(b.localStore,D.query,!1).then(({documents:_})=>D.view.ma(_,I)));const A=T&&T.targetChanges.get(D.targetId),L=T&&T.targetMismatches.get(D.targetId)!=null,O=D.view.applyChanges(I,b.isPrimaryClient,A,L);return Qg(b,D.targetId,O.wa),O.snapshot}(t,g,y,S);const s=await Bg(t.localStore,e,!0),o=new wA(e,s.Ts),l=o.ma(s.documents),u=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);Qg(t,n,d.wa);const p=new EA(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function AA(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!mu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yf(r.remoteStore,i.targetId),Xd(r,i.targetId)}).catch(jo)):(Xd(r,i.targetId),await Qd(r.localStore,i.targetId,!0))}async function RA(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yf(n.remoteStore,r.targetId))}async function CA(t,e,n){const r=LA(t);try{const i=await function(o,l){const u=Z(o),d=Me.now(),p=l.reduce((S,R)=>S.add(R.key),ne());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=jn(),b=ne();return u.cs.getEntries(S,p).next(D=>{R=D,R.forEach((E,T)=>{T.isValidDocument()||(b=b.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(D=>{g=D;const E=[];for(const T of l){const I=Xx(T,g.get(T.key).overlayedDocument);I!=null&&E.push(new Ar(T.key,I,h0(I.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,E,l)}).next(D=>{y=D;const E=D.applyToLocalDocumentSet(g,b);return u.documentOverlayCache.saveOverlays(S,D.batchId,E)})}).then(()=>({batchId:y.batchId,changes:T0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Se(ae)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await zo(r,i.changes),await Tu(r.remoteStore)}catch(i){const s=Tf(i,"Failed to persist write");n.reject(s)}}async function ew(t,e){const n=Z(t);try{const r=await W1(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await zo(n,r,e)}catch(r){await jo(r)}}function Gg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let d=!1;u.queries.forEach((p,g)=>{for(const y of g.j_)y.Z_(l)&&(d=!0)}),d&&kf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PA(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Se(G.comparator);o=o.insert(s,st.newNoDocument(s,J.min()));const l=ne().add(s),u=new _u(J.min(),new Map,new Se(ae),o,l);await ew(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Af(r)}else await Qd(r.localStore,e,!1).then(()=>Xd(r,e,n)).catch(jo)}async function NA(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await $1(n.localStore,e);nw(n,r,null),tw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await jo(i)}}async function bA(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(ce(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);nw(r,e,n),tw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await jo(i)}}function tw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function nw(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Xd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||rw(t,r)})}function rw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Af(t))}function Qg(t,e,n){for(const r of n)r instanceof X0?(t.La.addReference(r.key,e),DA(t,r)):r instanceof J0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||rw(t,r.key)):Y()}function DA(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Af(t))}function Af(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new TA(n)),t.Oa=t.Oa.insert(n,r),H0(t.remoteStore,new sr(on(pu(n.path)),r,"TargetPurposeLimboResolution",nf.oe))}}async function zo(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=gf.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const p=Z(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>F.forEach(d,y=>F.forEach(y.$i,S=>p.persistence.referenceDelegate.addReference(g,y.targetId,S)).next(()=>F.forEach(y.Ui,S=>p.persistence.referenceDelegate.removeReference(g,y.targetId,S)))))}catch(g){if(!Mo(g))throw g;q("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const y=g.targetId;if(!g.fromCache){const S=p.os.get(y),R=S.snapshotVersion,b=S.withLastLimboFreeSnapshotVersion(R);p.os=p.os.insert(y,b)}}}(r.localStore,s))}async function OA(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await B0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.hs)}}function VA(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function iw(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ew.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PA.bind(null,e),e.Ca.d_=vA.bind(null,e.eventManager),e.Ca.$a=_A.bind(null,e.eventManager),e}function LA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bA.bind(null,e),e}class Fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return z1(this.persistence,new U1,e.initialUser,this.serializer)}Ga(e){return new j1(mf.Zr,this.serializer)}Wa(e){return new Q1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fl.provider={build:()=>new Fl};class Jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OA.bind(null,this.syncEngine),await mA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yA}()}createDatastore(e){const n=wu(e.databaseInfo.databaseId),r=function(s){return new Z1(s)}(e.databaseInfo);return function(s,o,l,u){return new nA(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new iA(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Gg(this.syncEngine,n,0),function(){return $g.D()?new $g:new Y1}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,p){const g=new IA(i,s,o,l,u,d);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Bo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jd.provider={build:()=>new Jd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=u0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await B0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MA(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Wg(e.remoteStore,i)),t._onlineComponents=e}async function MA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;qi("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new Fl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Vc(t,new Fl);return t._offlineComponents}async function sw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Yg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Yg(t,new Jd))),t._onlineComponents}function FA(t){return sw(t).then(e=>e.syncEngine)}async function Ul(t){const e=await sw(t),n=e.eventManager;return n.onListen=SA.bind(null,e.syncEngine),n.onUnlisten=AA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RA.bind(null,e.syncEngine),n}function UA(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new Rf({next:y=>{p.Za(),o.enqueueAndForget(()=>Sf(s,g));const S=y.docs.has(l);!S&&y.fromCache?d.reject(new K(j.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&u&&u.source==="server"?d.reject(new K(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new xf(pu(l.path),p,{includeMetadataChanges:!0,_a:!0});return If(s,g)}(await Ul(t),t.asyncQueue,e,n,r)),r.promise}function BA(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new Rf({next:y=>{p.Za(),o.enqueueAndForget(()=>Sf(s,g)),y.fromCache&&u.source==="server"?d.reject(new K(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new xf(l,p,{includeMetadataChanges:!0,_a:!0});return If(s,g)}(await Ul(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zA(t,e,n,r){if(e===!0&&r===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jg(t){if(!G.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zg(t){if(G.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cf(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ow((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ey({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ey(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sx;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xg.get(n);r&&(q("ComponentProvider","Removing Datastore"),Xg.delete(n),r.terminate())}(this),Promise.resolve()}}function $A(t,e,n,r={}){var i;const s=(t=Tt(t,Iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=rt.MOCK_USER;else{l=Y_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(d)}t._authCredentials=new ox(new l0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $o(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class gr extends $o{constructor(e,n,r){super(e,n,pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new G(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Jt(t,e,...n){if(t=Ie(t),aw("collection","path",e),t instanceof Iu){const r=ve.fromString(e,...n);return Zg(r),new gr(t,null,r)}{if(!(t instanceof ft||t instanceof gr))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Zg(r),new gr(t.firestore,null,r)}}function Pe(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=u0.newId()),aw("doc","path",e),t instanceof Iu){const r=ve.fromString(e,...n);return Jg(r),new ft(t,null,new G(r))}{if(!(t instanceof ft||t instanceof gr))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Jg(r),new ft(t.firestore,t instanceof gr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $0(this,"async_queue_retry"),this.Vu=()=>{const r=Oc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Cn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Mo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ef.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ny(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Mn extends Iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ty,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ty(e),this._firestoreClient=void 0,await e}}}function WA(t,e){const n=typeof t=="object"?t:ef(),r=typeof t=="string"?t:"(default)",i=du(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=K_("firestore");s&&$A(i,...s)}return i}function Su(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HA(t),t._firestoreClient}function HA(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new Tx(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,ow(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new jA(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ji(Ye.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ji(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=/^__.*__$/;class KA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}class lw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Df{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Df(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(uw(this.Cu)&&qA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class GA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wu(e)}Qu(e,n,r,i=!1){return new Df({Cu:e,methodName:n,qu:r,path:qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Of(t){const e=t._freezeSettings(),n=wu(t._databaseId);return new GA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cw(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Vf("Data must be an object, but it was:",o,r);const l=dw(r,o);let u,d;if(s.merge)u=new xt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const y=Zd(e,g,n);if(!o.contains(y))throw new K(j.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);fw(p,y)||p.push(y)}u=new xt(p),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new KA(new yt(l),u,d)}class xu extends Pf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xu}}function QA(t,e,n,r){const i=t.Qu(1,e,n);Vf("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();ai(r,(u,d)=>{const p=Lf(e,u,n);d=Ie(d);const g=i.Nu(p);if(d instanceof xu)s.push(p);else{const y=Au(d,g);y!=null&&(s.push(p),o.set(p,y))}});const l=new xt(s);return new lw(o,l,i.fieldTransforms)}function YA(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Zd(e,r,n)],u=[i];if(s.length%2!=0)throw new K(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Zd(e,s[y])),u.push(s[y+1]);const d=[],p=yt.empty();for(let y=l.length-1;y>=0;--y)if(!fw(d,l[y])){const S=l[y];let R=u[y];R=Ie(R);const b=o.Nu(S);if(R instanceof xu)d.push(S);else{const D=Au(R,b);D!=null&&(d.push(S),p.set(S,D))}}const g=new xt(d);return new lw(p,g,o.fieldTransforms)}function Au(t,e){if(hw(t=Ie(t)))return Vf("Unsupported field value:",e,t),dw(t,e);if(t instanceof Pf)return function(r,i){if(!uw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Au(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:jl(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jl(i.serializer,s)}}if(r instanceof Nf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ji)return{bytesValue:O0(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ff(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return uf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Cf(r)}`)}(t,e)}function dw(t,e){const n={};return c0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ai(t,(r,i)=>{const s=Au(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Nf||t instanceof Ji||t instanceof ft||t instanceof Pf||t instanceof bf)}function Vf(t,e,n){if(!hw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Cf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Zd(t,e,n){if((e=Ie(e))instanceof ku)return e._internalPath;if(typeof e=="string")return Lf(t,e);throw Bl("Field path arguments must be of type string or ",t,!1,void 0,n)}const XA=new RegExp("[~\\*/\\[\\]]");function Lf(t,e,n){if(e.search(XA)>=0)throw Bl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ku(...e.split("."))._internalPath}catch{throw Bl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(j.INVALID_ARGUMENT,l+t+u)}function fw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JA extends pw{data(){return super.data()}}function mw(t,e){return typeof e=="string"?Lf(t,e):e instanceof ku?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ZA{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ai(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new bf(s)}convertGeoPoint(e){return new Nf(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);ce(U0(r));const i=new Io(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vw extends pw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Za extends vw{data(e={}){return super.data(e)}}class _w{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Za(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Za(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Us(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Za(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Us(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:eR(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){t=Tt(t,ft);const e=Tt(t.firestore,Mn);return UA(Su(e),t._key).then(n=>ww(e,t,n))}class jf extends ZA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function tR(t){t=Tt(t,$o);const e=Tt(t.firestore,Mn),n=Su(e),r=new jf(e);return gw(t._query),BA(n,t._query).then(i=>new _w(e,r,t,i))}function Ao(t,e,n){t=Tt(t,ft);const r=Tt(t.firestore,Mn),i=yw(t.converter,e,n);return Ru(r,[cw(Of(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Lt.none())])}function yr(t,e,n,...r){t=Tt(t,ft);const i=Tt(t.firestore,Mn),s=Of(i);let o;return o=typeof(e=Ie(e))=="string"||e instanceof ku?YA(s,"updateDoc",t._key,e,n,r):QA(s,"updateDoc",t._key,e),Ru(i,[o.toMutation(t._key,Lt.exists(!0))])}function nR(t){return Ru(Tt(t.firestore,Mn),[new cf(t._key,Lt.none())])}function Lc(t,e){const n=Tt(t.firestore,Mn),r=Pe(t),i=yw(t.converter,e);return Ru(n,[cw(Of(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function br(t,...e){var n,r,i;t=Ie(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ny(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ny(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,d,p;if(t instanceof ft)d=Tt(t.firestore,Mn),p=pu(t._key.path),u={next:g=>{e[o]&&e[o](ww(d,t,g))},error:e[o+1],complete:e[o+2]};else{const g=Tt(t,$o);d=Tt(g.firestore,Mn),p=g._query;const y=new jf(d);u={next:S=>{e[o]&&e[o](new _w(d,y,g,S))},error:e[o+1],complete:e[o+2]},gw(t._query)}return function(y,S,R,b){const D=new Rf(b),E=new xf(S,D,R);return y.asyncQueue.enqueueAndForget(async()=>If(await Ul(y),E)),()=>{D.Za(),y.asyncQueue.enqueueAndForget(async()=>Sf(await Ul(y),E))}}(Su(d),p,l,u)}function Ru(t,e){return function(r,i){const s=new Cn;return r.asyncQueue.enqueueAndForget(async()=>CA(await FA(r),i,s)),s.promise}(Su(t),e)}function ww(t,e,n){const r=n.docs.get(e._key),i=new jf(t);return new vw(t,i,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){rs=i})(oi),Xr(new wr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Mn(new ax(r.getProvider("auth-internal")),new dx(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(d.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),sn(wg,"4.7.3",e),sn(wg,"4.7.3","esm2017")})();function Mf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rR=Ew,Tw=new Vo("auth","Firebase",Ew());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Jh("@firebase/auth");function iR(t,...e){zl.logLevel<=re.WARN&&zl.warn(`Auth (${oi}): ${t}`,...e)}function el(t,...e){zl.logLevel<=re.ERROR&&zl.error(`Auth (${oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw Uf(t,...e)}function Qt(t,...e){return Uf(t,...e)}function Ff(t,e,n){const r=Object.assign(Object.assign({},rR()),{[e]:n});return new Vo("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return Ff(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ft(t,"argument-error"),Ff(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tw.create(t,...e)}function Q(t,e,...n){if(!t)throw Uf(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw el(e),new Error(e)}function Fn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oR(){return ry()==="http:"||ry()==="https:"}function ry(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oR()||jS()||"connection"in navigator)?navigator.onLine:!0}function lR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=OS()||MS()}get(){return aR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new Wo(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hn(t,e,n,r,i={}){return Sw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return LS()||(d.referrerPolicy="no-referrer"),Iw.fetch()(kw(t,t.config.apiHost,n,l),d)})}async function Sw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uR),e);try{const i=new hR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Da(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ff(t,p,d);Ft(t,p)}}catch(i){if(i instanceof dn)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function Ho(t,e,n,r,i={}){const s=await hn(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bf(t.config,i):`${t.config.apiScheme}://${i}`}function dR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),cR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}function iy(t){return t!==void 0&&t.enterprise!==void 0}class fR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pR(t,e){return hn(t,"GET","/v2/recaptchaConfig",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e){return hn(t,"POST","/v1/accounts:delete",e)}async function xw(t,e){return hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gR(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=zf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:eo(jc(i.auth_time)),issuedAtTime:eo(jc(i.iat)),expirationTime:eo(jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jc(t){return Number(t)*1e3}function zf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return el("JWT malformed, contained fewer than 3 sections"),null;try{const i=H_(n);return i?JSON.parse(i):(el("Failed to decode base64 JWT payload"),null)}catch(i){return el("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sy(t){const e=zf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&yR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zi(t,xw(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Aw(s.providerUserInfo):[],l=wR(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new th(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function _R(t){const e=Ie(t);await $l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Aw(t){return t.map(e=>{var{providerId:n}=e,r=Mf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){const n=await Sw(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Iw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TR(t,e){return hn(t,"POST","/v2/accounts:revokeToken",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ER(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Li;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new th(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gR(this,e)}reload(){return _R(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Zi(this,mR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(d=n.createdAt)!==null&&d!==void 0?d:void 0,T=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:I,emailVerified:A,isAnonymous:L,providerData:O,stsTokenManager:_}=n;Q(I&&_,e,"internal-error");const m=Li.fromJSON(this.name,_);Q(typeof I=="string",e,"internal-error"),Kn(g,e.name),Kn(y,e.name),Q(typeof A=="boolean",e,"internal-error"),Q(typeof L=="boolean",e,"internal-error"),Kn(S,e.name),Kn(R,e.name),Kn(b,e.name),Kn(D,e.name),Kn(E,e.name),Kn(T,e.name);const w=new xn({uid:I,auth:e,email:y,emailVerified:A,displayName:g,isAnonymous:L,photoURL:R,phoneNumber:S,tenantId:b,stsTokenManager:m,createdAt:E,lastLoginAt:T});return O&&Array.isArray(O)&&(w.providerData=O.map(x=>Object.assign({},x))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const s=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $l(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Aw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Li;l.updateFromIdToken(r);const u=new xn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new th(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;function An(t){Fn(t instanceof Function,"Expected a class definition");let e=oy.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rw.type="NONE";const ay=Rw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(An(ay),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||An(ay);const o=tl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const g=xn._fromJSON(e,p);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ji(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new ji(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ow(e))return"Blackberry";if(Vw(e))return"Webos";if(Pw(e))return"Safari";if((e.includes("chrome/")||Nw(e))&&!e.includes("edge/"))return"Chrome";if(Dw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cw(t=at()){return/firefox\//i.test(t)}function Pw(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nw(t=at()){return/crios\//i.test(t)}function bw(t=at()){return/iemobile/i.test(t)}function Dw(t=at()){return/android/i.test(t)}function Ow(t=at()){return/blackberry/i.test(t)}function Vw(t=at()){return/webos/i.test(t)}function $f(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IR(t=at()){var e;return $f(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SR(){return FS()&&document.documentMode===10}function Lw(t=at()){return $f(t)||Dw(t)||Vw(t)||Ow(t)||/windows phone/i.test(t)||bw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t,e=[]){let n;switch(t){case"Browser":n=ly(at());break;case"Worker":n=`${ly(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e={}){return hn(t,"GET","/v2/passwordPolicy",Bn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=6;class RR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uy(this),this.idTokenSubscription=new uy(this),this.beforeStateQueue=new kR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xw(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Pn(this));const n=e?Ie(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xR(this),n=new RR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await TR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zn(t){return Ie(t)}class uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=KS(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PR(t){Cu=t}function Mw(t){return Cu.loadJS(t)}function NR(){return Cu.recaptchaEnterpriseScript}function bR(){return Cu.gapiScript}function DR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const OR="recaptcha-enterprise",VR="NO_RECAPTCHA";class LR{constructor(e){this.type=OR,this.auth=zn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{pR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new fR(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;iy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(VR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&iy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=NR();u.length!==0&&(u+=l),Mw(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function cy(t,e,n,r=!1){const i=new LR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t,e){const n=du(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pl(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function MR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FR(t,e,n){const r=zn(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Fw(e),{host:o,port:l}=UR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),BR()}function Fw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UR(t){const e=Fw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dy(o)}}}function dy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function zR(t,e){return hn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}async function WR(t,e){return hn(t,"POST","/v1/accounts:sendOobCode",Bn(t,e))}async function HR(t,e){return WR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function KR(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Wf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wl(e,n,"signInWithPassword",$R);case"emailLink":return qR(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wl(e,r,"signUpPassword",zR);case"emailLink":return KR(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="http://localhost";class ti extends Wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:GR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YR(t){const e=Vs(Ls(t)).link,n=e?Vs(Ls(e)).deep_link_id:null,r=Vs(Ls(t)).deep_link_id;return(r?Vs(Ls(r)).link:null)||r||n||e||t}class Hf{constructor(e){var n,r,i,s,o,l;const u=Vs(Ls(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=QR((i=u.mode)!==null&&i!==void 0?i:null);Q(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=YR(e);try{return new Hf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,n){return Ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hf.parseLink(n);return Q(r,"argument-error"),Ro._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends qf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends qo{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ti._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends qo{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends qo{constructor(){super("twitter.com")}static credential(e,n){return ti._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e){return Ho(t,"POST","/v1/accounts:signUp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xn._fromIdTokenResponse(e,r,i),o=hy(r);return new ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hy(r);return new ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hl(e,n,r,i)}}function Uw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hl._fromErrorAndOperation(t,s,e,r):s})}async function JR(t,e,n=!1){const r=await Zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ni._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const s=await Zi(t,Uw(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=zf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e,n=!1){if(Ht(t.app))return Promise.reject(Pn(t));const r="signIn",i=await Uw(t,r,e),s=await ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eC(t,e){return Bw(zn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t){const e=zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tC(t,e,n){const r=zn(t);await Wl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",HR)}async function nC(t,e,n){if(Ht(t.app))return Promise.reject(Pn(t));const r=zn(t),o=await Wl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&zw(t),u}),l=await ni._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function fy(t,e,n){return Ht(t.app)?Promise.reject(Pn(t)):eC(Ie(t),os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e){return hn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ie(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Zi(r,rC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sC(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function oC(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function aC(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function lC(t){return Ie(t).signOut()}const ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=1e3,cC=10;class Ww extends $w{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ww.type="LOCAL";const dC=Ww;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw extends $w{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hw.type="SESSION";const qw=Hw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await hC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Kf("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function pC(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function mC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yC(){return Kw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="firebaseLocalStorageDb",vC=1,Kl="firebaseLocalStorage",Qw="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function _C(){const t=indexedDB.deleteDatabase(Gw);return new Ko(t).toPromise()}function nh(){const t=indexedDB.open(Gw,vC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:Qw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await _C(),e(await nh()))})})}async function py(t,e,n){const r=Nu(t,!0).put({[Qw]:e,value:n});return new Ko(r).toPromise()}async function wC(t,e){const n=Nu(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function my(t,e){const n=Nu(t,!0).delete(e);return new Ko(n).toPromise()}const EC=800,TC=3;class Yw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pu._getInstance(yC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mC(),!this.activeServiceWorker)return;this.sender=new fC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nh();return await py(e,ql,"1"),await my(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>py(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>my(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nu(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yw.type="LOCAL";const IC=Yw;new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){return e?An(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends Wf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SC(t){return Bw(t.auth,new Gf(t),t.bypassAuthState)}function kC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),ZR(n,new Gf(t),t.bypassAuthState)}async function xC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),JR(n,new Gf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SC;case"linkViaPopup":case"linkViaRedirect":return xC;case"reauthViaPopup":case"reauthViaRedirect":return kC;default:Ft(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new Wo(2e3,1e4);async function RC(t,e,n){if(Ht(t.app))return Promise.reject(Qt(t,"operation-not-supported-in-this-environment"));const r=zn(t);sR(t,e,qf);const i=Xw(r,n);return new Br(r,"signInViaPopup",e,i).executeNotNull()}class Br extends Jw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AC.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="pendingRedirect",nl=new Map;class PC extends Jw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nl.get(this.auth._key());if(!e){try{const r=await NC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nl.set(this.auth._key(),e)}return this.bypassAuthState||nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NC(t,e){const n=OC(e),r=DC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bC(t,e){nl.set(t._key(),e)}function DC(t){return An(t._redirectPersistence)}function OC(t){return tl(CC,t.config.apiKey,t.name)}async function VC(t,e,n=!1){if(Ht(t.app))return Promise.reject(Pn(t));const r=zn(t),i=Xw(r,e),o=await new PC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=10*60*1e3;class jC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LC&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}}function gy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e={}){return hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BC=/^https?/;async function zC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FC(t);for(const n of e)try{if($C(n))return}catch{}Ft(t,"unauthorized-domain")}function $C(t){const e=eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BC.test(n))return!1;if(UC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new Wo(3e4,6e4);function yy(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HC(t){return new Promise((e,n)=>{var r,i,s;function o(){yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yy(),n(Qt(t,"network-request-failed"))},timeout:WC.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const l=DR("iframefcb");return ln()[l]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},Mw(`${bR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw rl=null,e})}let rl=null;function qC(t){return rl=rl||HC(t),rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new Wo(5e3,15e3),GC="__/auth/iframe",QC="emulator/auth/iframe",YC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JC(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bf(e,QC):`https://${t.config.authDomain}/${GC}`,r={apiKey:e.apiKey,appName:t.name,v:oi},i=XC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Lo(r).slice(1)}`}async function ZC(t){const e=await qC(t),n=ln().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:JC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),l=ln().setTimeout(()=>{s(o)},KC.get());function u(){ln().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tP=500,nP=600,rP="_blank",iP="http://localhost";class vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sP(t,e,n,r=tP,i=nP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},eP),{width:r.toString(),height:i.toString(),top:s,left:o}),d=at().toLowerCase();n&&(l=Nw(d)?rP:n),Cw(d)&&(e=e||iP,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[S,R])=>`${y}${S}=${R},`,"");if(IR(d)&&l!=="_self")return oP(e||"",l),new vy(null);const g=window.open(e||"",l,p);Q(g,t,"popup-blocked");try{g.focus()}catch{}return new vy(g)}function oP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="__/auth/handler",lP="emulator/auth/handler",uP=encodeURIComponent("fac");async function _y(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oi,eventId:i};if(e instanceof qf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof qo){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${uP}=${encodeURIComponent(u)}`:"";return`${cP(t)}?${Lo(l).slice(1)}${d}`}function cP({config:t}){return t.emulator?Bf(t,lP):`https://${t.authDomain}/${aP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="webStorageSupport";class dP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qw,this._completeRedirectFn=VC,this._overrideRedirectResult=bC}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _y(e,n,r,eh(),i);return sP(e,o,Kf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _y(e,n,r,eh(),i);return pC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZC(e),r=new jC(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mc];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lw()||Pw()||$f()}}const hP=dP;var wy="@firebase/auth",Ey="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mP(t){Xr(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jw(t)},d=new CR(r,i,s,u);return MR(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new wr("auth-internal",e=>{const n=zn(e.getProvider("auth").getImmediate());return(r=>new fP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(wy,Ey,pP(t)),sn(wy,Ey,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=5*60,yP=Q_("authIdTokenMaxAge")||gP;let Ty=null;const vP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yP)return;const i=n==null?void 0:n.token;Ty!==i&&(Ty=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _P(t=ef()){const e=du(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jR(t,{popupRedirectResolver:hP,persistence:[IC,dC,qw]}),r=Q_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=vP(s.toString());oC(n,o,()=>o(n.currentUser)),sC(n,l=>o(l))}}const i=q_("auth");return i&&FR(n,`http://${i}`),n}function wP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mP("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="firebasestorage.googleapis.com",tE="storageBucket",EP=2*60*1e3,TP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends dn{constructor(e,n,r=0){super(Fc(e),`Firebase Storage: ${n} (${Fc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function Fc(t){return"storage/"+t}function Qf(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(Ae.UNKNOWN,t)}function IP(t){return new Re(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function SP(t){return new Re(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(Ae.UNAUTHENTICATED,t)}function xP(){return new Re(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AP(t){return new Re(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function RP(){return new Re(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CP(){return new Re(Ae.CANCELED,"User canceled the upload/download.")}function PP(t){return new Re(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function NP(t){return new Re(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bP(){return new Re(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tE+"' property when initializing the app?")}function DP(){return new Re(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OP(){return new Re(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VP(t){return new Re(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function rh(t){return new Re(Ae.INVALID_ARGUMENT,t)}function nE(){return new Re(Ae.APP_DELETED,"The Firebase app was deleted.")}function LP(t){return new Re(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function to(t,e){return new Re(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ps(t){throw new Re(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw NP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(A){A.path_=decodeURIComponent(A.path)}const p="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${p}/b/${i}/o${y}`,"i"),R={bucket:1,path:3},b=n===eE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",E=new RegExp(`^https?://${b}/${i}/${D}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:S,indices:R,postModify:d},{regex:E,indices:{bucket:1,path:2},postModify:d}];for(let A=0;A<I.length;A++){const L=I[A],O=L.regex.exec(e);if(O){const _=O[L.indices.bucket];let m=O[L.indices.path];m||(m=""),r=new At(_,m),L.postModify(r);break}}if(r==null)throw PP(e);return r}}class jP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function p(...D){d||(d=!0,e.apply(null,D))}function g(D){i=setTimeout(()=>{i=null,t(S,u())},D)}function y(){s&&clearTimeout(s)}function S(D,...E){if(d){y();return}if(D){y(),p.call(null,D,...E);return}if(u()||o){y(),p.call(null,D,...E);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,g(I)}let R=!1;function b(D){R||(R=!0,y(),!d&&(i!==null?(D||(l=2),clearTimeout(i),g(0)):D||(l=1)))}return g(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function FP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){return t!==void 0}function BP(t){return typeof t=="object"&&!Array.isArray(t)}function Yf(t){return typeof t=="string"||t instanceof String}function Iy(t){return Xf()&&t instanceof Blob}function Xf(){return typeof Blob<"u"}function Sy(t,e,n,r){if(r<e)throw rh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw rh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function rE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hr||(Hr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n,r,i,s,o,l,u,d,p,g,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=g,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,R)=>{this.resolve_=S,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Oa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Hr.NO_ERROR,u=s.getStatus();if(!l||zP(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===Hr.ABORT;r(!1,new Oa(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Oa(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());UP(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Qf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?nE():CP();o(u)}else{const u=RP();o(u)}};this.canceled_?n(!1,new Oa(!1,null,!0)):this.backoffId_=MP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Oa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function WP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function KP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function GP(t,e,n,r,i,s,o=!0){const l=rE(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return qP(d,e),WP(d,n),HP(d,s),KP(d,r),new $P(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function YP(...t){const e=QP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xf())return new Blob(t);throw new Re(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function XP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){if(typeof atob>"u")throw VP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uc{constructor(e,n){this.data=e,this.contentType=n||null}}function ZP(t,e){switch(t){case tn.RAW:return new Uc(iE(e));case tn.BASE64:case tn.BASE64URL:return new Uc(sE(t,e));case tn.DATA_URL:return new Uc(tN(e),nN(e))}throw Qf()}function iE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function eN(t){let e;try{e=decodeURIComponent(t)}catch{throw to(tn.DATA_URL,"Malformed data URL.")}return iE(e)}function sE(t,e){switch(t){case tn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw to(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw to(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=JP(e)}catch(i){throw i.message.includes("polyfill")?i:to(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class oE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw to(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=rN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tN(t){const e=new oE(t);return e.base64?sE(tn.BASE64,e.rest):eN(e.rest)}function nN(t){return new oE(t).contentType}function rN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){let r=0,i="";Iy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Iy(this.data_)){const r=this.data_,i=XP(r,e,n);return i===null?null:new nr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new nr(r,!0)}}static getBlob(...e){if(Xf()){const n=e.map(r=>r instanceof nr?r.data_:r);return new nr(YP.apply(null,n))}else{const n=e.map(o=>Yf(o)?ZP(tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new nr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){let e;try{e=JSON.parse(t)}catch{return null}return BP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function sN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function lE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t,e){return e}class ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||oN}}let Va=null;function aN(t){return!Yf(t)||t.length<2?t:lE(t)}function uE(){if(Va)return Va;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(s,o){return aN(o)}const n=new ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ct("size");return i.xform=r,t.push(i),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),Va=t,Va}function lN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new At(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function uN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return lN(r,t),r}function cE(t,e,n){const r=aE(e);return r===null?null:uN(t,r,n)}function cN(t,e,n,r){const i=aE(e);if(i===null||!Yf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(d=>{const p=t.bucket,g=t.fullPath,y="/b/"+o(p)+"/o/"+o(g),S=Jf(y,n,r),R=rE({alt:"media",token:d});return S+R})[0]}function dN(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class dE{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t){if(!t)throw Qf()}function hN(t,e){function n(r,i){const s=cE(t,i,e);return hE(s!==null),s}return n}function fN(t,e){function n(r,i){const s=cE(t,i,e);return hE(s!==null),cN(s,i,t.host,t._protocol)}return n}function fE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=xP():i=kP():n.getStatus()===402?i=SP(t.bucket):n.getStatus()===403?i=AP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function pN(t){const e=fE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=IP(t.path)),s.serverResponse=i.serverResponse,s}return n}function mN(t,e,n){const r=e.fullServerUrl(),i=Jf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new dE(i,s,fN(t,n),o);return l.errorHandler=pN(e),l}function gN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=gN(null,e)),r}function vN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let I="";for(let A=0;A<2;A++)I=I+Math.random().toString().slice(2);return I}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const d=yN(e,r,i),p=dN(d,n),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,y=`\r
--`+u+"--",S=nr.getBlob(g,r,y);if(S===null)throw DP();const R={name:d.fullPath},b=Jf(s,t.host,t._protocol),D="POST",E=t.maxUploadRetryTime,T=new dE(b,D,hN(t,n),E);return T.urlParams=R,T.headers=o,T.body=S.uploadData(),T.errorHandler=fE(e),T}class _N{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ps("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ps("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ps("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ps("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ps("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wN extends _N{initXhr(){this.xhr_.responseType="text"}}function pE(){return new wN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ri(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lE(this._location.path)}get storage(){return this._service}get parent(){const e=iN(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LP(e)}}function EN(t,e,n){t._throwIfRoot("uploadBytes");const r=vN(t.storage,t._location,uE(),new nr(e,!0),n);return t.storage.makeRequestWithTokens(r,pE).then(i=>({metadata:i,ref:t}))}function TN(t){t._throwIfRoot("getDownloadURL");const e=mN(t.storage,t._location,uE());return t.storage.makeRequestWithTokens(e,pE).then(n=>{if(n===null)throw OP();return n})}function IN(t,e){const n=sN(t._location.path,e),r=new At(t._location.bucket,n);return new ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t){return/^[A-Za-z]+:\/\//.test(t)}function kN(t,e){return new ri(t,e)}function mE(t,e){if(t instanceof Zf){const n=t;if(n._bucket==null)throw bP();const r=new ri(n,n._bucket);return e!=null?mE(r,e):r}else return e!==void 0?IN(t,e):t}function xN(t,e){if(e&&SN(e)){if(t instanceof Zf)return kN(t,e);throw rh("To use ref(service, url), the first argument must be a Storage instance.")}else return mE(t,e)}function ky(t,e){const n=e==null?void 0:e[tE];return n==null?null:At.makeFromBucketSpec(n,t)}function AN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Y_(i,t.app.options.projectId))}class Zf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=eE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=EP,this._maxUploadRetryTime=TP,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=ky(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=ky(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new jP(nE());{const o=GP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const xy="@firebase/storage",Ay="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="storage";function yE(t,e,n){return t=Ie(t),EN(t,e,n)}function vE(t){return t=Ie(t),TN(t)}function _E(t,e){return t=Ie(t),xN(t,e)}function RN(t=ef(),e){t=Ie(t);const r=du(t,gE).getImmediate({identifier:e}),i=K_("storage");return i&&CN(r,...i),r}function CN(t,e,n,r={}){AN(t,e,n,r)}function PN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Zf(n,r,i,e,oi)}function NN(){Xr(new wr(gE,PN,"PUBLIC").setMultipleInstances(!0)),sn(xy,Ay,""),sn(xy,Ay,"esm2017")}NN();const bN={apiKey:"AIzaSyAA502qnoU0tIhpt13eZlD0hxDclMCVCUI",authDomain:"kahwinapp-83e9a.firebaseapp.com",projectId:"kahwinapp-83e9a",storageBucket:"kahwinapp-83e9a.firebasestorage.app",messagingSenderId:"144754868373",appId:"1:144754868373:web:0b46b29c57b7502a409b9c"},ep=Z_(bN),le=WA(ep),Lr=_P(ep),wE=RN(ep),DN=new Tn,qt=(t,e="MYR")=>`${{MYR:"RM",SGD:"S$",USD:"$",GBP:"£"}[e]||e} ${(parseFloat(t)||0).toLocaleString("ms-MY",{minimumFractionDigits:2,maximumFractionDigits:2})}`,Co=t=>t?new Date(t).toLocaleDateString("ms-MY",{day:"numeric",month:"long",year:"numeric"}):"",ON=t=>{if(!t)return null;const e=new Date(t),n=new Date;return e.setHours(0,0,0,0),n.setHours(0,0,0,0),Math.ceil((e-n)/864e5)},Ry={Dewan:"🏛️",Katering:"🍽️",Pakaian:"👗","Gambar/Video":"📷",Hantaran:"🎁",Hiasan:"🌸","Kad Jemputan":"💌",Pelamin:"👑",Transport:"🚗","Lain-lain":"💼"},Cy={"auth/user-not-found":"Email tidak dijumpai.","auth/wrong-password":"Kata laluan salah.","auth/email-already-in-use":"Email sudah didaftarkan.","auth/weak-password":"Kata laluan min 6 aksara.","auth/invalid-email":"Format email tidak sah.","auth/invalid-credential":"Email atau kata laluan salah.","auth/popup-closed-by-user":"Log masuk Google dibatalkan."},Py={bg:"#FFF8F5",card:"#FFFFFF",border:"#F0E0E4",dark:"#2D2D2D",mid:"#6B6B6B",light:"#BDBDBD",rose:"#E8748A",rosePale:"#FDE8EC",roseLight:"#F2A0AE",roseBtn:"#F4B8C2",navBg:"#FFFFFF",headerBg:"#FFFFFF",inputBg:"#fffafc",sectionBg:"#F5EEF0",modalBg:"#FFFFFF"},Yn={bg:"#1A1A1A",card:"#2A2A2A",border:"#3D3030",dark:"#F0F0F0",mid:"#A0A0A0",light:"#666666",rose:"#F0889E",rosePale:"#3D2028",roseLight:"#8A3040",roseBtn:"#5A2030",navBg:"#222222",headerBg:"#222222",inputBg:"#333333",sectionBg:"#333333",modalBg:"#2A2A2A"};function VN(t){return`
  :root {
    --bg:${t.bg};--card:${t.card};--border:${t.border};
    --dark:${t.dark};--mid:${t.mid};--light:${t.light};
    --rose:${t.rose};--rose-pale:${t.rosePale};--rose-light:${t.roseLight};--rose-btn:${t.roseBtn};
    --nav-bg:${t.navBg};--header-bg:${t.headerBg};--input-bg:${t.inputBg};
    --section-bg:${t.sectionBg};--modal-bg:${t.modalBg};
    --shadow:0 4px 20px rgba(0,0,0,0.15);--shadow-sm:0 2px 8px rgba(0,0,0,0.10);
    --radius:20px;--radius-sm:12px;
    font-family:'DM Sans',sans-serif;
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--bg);min-height:100vh;transition:background 0.3s;}
  #root{max-width:480px;margin:0 auto;min-height:100vh;background:var(--bg);}

  /* AUTH */
  .auth-wrap{min-height:100vh;display:flex;flex-direction:column;background:linear-gradient(160deg,${t.bg} 0%,${t.rosePale} 60%,${t.bg} 100%);}
  .auth-hero{padding:60px 32px 28px;text-align:center;}
  .auth-logo{font-size:52px;display:block;margin-bottom:12px;}
  .auth-title{font-family:'Playfair Display',serif;font-size:32px;color:var(--dark);line-height:1.1;}
  .auth-sub{font-size:14px;color:var(--mid);margin-top:8px;}
  .auth-card{flex:1;background:var(--modal-bg);border-radius:28px 28px 0 0;padding:28px 24px 40px;box-shadow:0 -4px 30px rgba(0,0,0,0.15);}
  .auth-tabs{display:flex;background:var(--section-bg);border-radius:12px;padding:4px;margin-bottom:22px;}
  .auth-tab{flex:1;padding:10px;text-align:center;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;border:none;background:transparent;color:var(--mid);font-family:'DM Sans',sans-serif;transition:all 0.2s;}
  .auth-tab.active{background:var(--card);color:var(--rose);box-shadow:0 2px 8px rgba(0,0,0,0.1);}

  .field-label{font-size:12px;font-weight:600;color:var(--mid);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;}
  .field-input{width:100%;padding:13px 16px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:'DM Sans',sans-serif;color:var(--dark);background:var(--input-bg);outline:none;transition:border 0.2s;margin-bottom:14px;}
  .field-input:focus{border-color:var(--rose);}
  .field-input option{background:var(--card);color:var(--dark);}
  textarea.field-input{resize:none;}
  .btn-primary{width:100%;padding:14px;background:var(--rose);color:white;border:none;border-radius:var(--radius-sm);font-size:15px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity 0.2s,transform 0.1s;margin-bottom:12px;}
  .btn-primary:hover{opacity:0.9;}
  .btn-primary:active{transform:scale(0.98);}
  .btn-primary:disabled{opacity:0.5;cursor:not-allowed;}
  .btn-google{width:100%;padding:13px;background:var(--card);color:var(--dark);border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:10px;transition:background 0.2s;}
  .btn-google:hover{opacity:0.9;}
  .divider{display:flex;align-items:center;gap:12px;margin:14px 0;}
  .divider::before,.divider::after{content:'';flex:1;height:1px;background:var(--border);}
  .divider span{font-size:12px;color:var(--light);}
  .forgot-link{text-align:center;font-size:13px;color:var(--rose);cursor:pointer;margin-top:6px;}
  .err-msg{background:${t===Yn?"#3D1A20":"#FFF0F2"};border:1px solid ${t===Yn?"#6D2030":"#FFD0D8"};color:${t===Yn?"#FF8A9A":"#C0304A"};border-radius:10px;padding:10px 14px;font-size:13px;margin-bottom:14px;}
  .success-msg{background:${t===Yn?"#1A3020":"#E8F5E9"};border:1px solid ${t===Yn?"#2A6040":"#A5D6A7"};color:${t===Yn?"#6FCF97":"#2E7D32"};border-radius:10px;padding:10px 14px;font-size:13px;margin-bottom:14px;}

  /* SETUP */
  .setup-wrap{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;background:var(--bg);}
  .setup-card{background:var(--card);border-radius:var(--radius);padding:28px 24px;width:100%;max-width:380px;box-shadow:var(--shadow);}

  /* APP */
  .app-wrap{display:flex;flex-direction:column;min-height:100vh;}
  .bottom-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:480px;background:var(--nav-bg);border-top:1px solid var(--border);display:flex;justify-content:space-around;padding:10px 0 20px;z-index:100;}
  .nav-btn{display:flex;flex-direction:column;align-items:center;gap:4px;background:none;border:none;cursor:pointer;color:var(--light);transition:color 0.2s;}
  .nav-btn.active{color:var(--rose);}
  .nav-btn .nav-icon{font-size:22px;}
  .nav-btn .nav-label{font-size:10px;font-weight:500;font-family:'DM Sans',sans-serif;}
  .nav-home-btn{width:54px;height:54px;border-radius:50%;background:var(--dark);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:22px;margin-top:-18px;box-shadow:0 4px 16px rgba(0,0,0,0.3);transition:transform 0.15s;}
  .nav-home-btn:active{transform:scale(0.95);}
  .page-content{flex:1;padding-bottom:90px;overflow-y:auto;}

  .app-header{background:var(--header-bg);padding:16px 20px 12px;display:flex;align-items:center;gap:14px;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:50;}
  .header-logo{font-size:30px;}
  .header-info h1{font-size:20px;font-weight:700;color:var(--dark);font-family:'Playfair Display',serif;}
  .header-info p{font-size:12px;color:var(--mid);}
  .header-right{margin-left:auto;display:flex;align-items:center;gap:10px;}
  .avatar-sm{width:34px;height:34px;border-radius:50%;background:var(--rose-pale);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--rose);cursor:pointer;border:2px solid var(--rose-light);}
  .dark-toggle{background:none;border:none;cursor:pointer;font-size:20px;padding:4px;}

  /* HERO */
  .hero-card{margin:16px;border-radius:var(--radius);overflow:hidden;position:relative;min-height:195px;}
  .hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.65) 100%);}
  .hero-content{position:relative;z-index:2;padding:20px;text-align:center;}
  .hero-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:4px 12px;font-size:11px;color:white;font-weight:500;margin-bottom:14px;}
  .hero-names{font-family:'Playfair Display',serif;color:white;}
  .hero-names h2{font-size:26px;font-weight:600;}
  .hero-names .amp{font-size:15px;opacity:0.8;margin:2px 0;}
  .hero-names h3{font-size:26px;font-weight:600;}
  .hero-date-row{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:14px;}
  .hero-date{color:rgba(255,255,255,0.9);font-size:13px;font-weight:500;}
  .hero-days{background:rgba(255,255,255,0.2);border-radius:20px;padding:4px 12px;color:white;font-size:12px;font-weight:600;}
  .hero-edit-btn{position:absolute;top:12px;right:12px;z-index:3;background:rgba(255,255,255,0.2);border:none;border-radius:10px;padding:6px 10px;color:white;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;backdrop-filter:blur(4px);}

  /* STATS */
  .section-grid{padding:0 16px;display:flex;flex-direction:column;gap:14px;}
  .stat-card{background:var(--card);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow-sm);cursor:pointer;transition:transform 0.15s;}
  .stat-card:hover{transform:translateY(-1px);}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .mini-stat{background:var(--card);border-radius:var(--radius);padding:18px;box-shadow:var(--shadow-sm);cursor:pointer;transition:transform 0.15s;}
  .mini-stat:hover{transform:translateY(-1px);}
  .progress-bar-wrap{background:var(--section-bg);border-radius:4px;height:6px;margin-top:12px;overflow:hidden;}
  .progress-bar-fill{height:100%;background:var(--rose);border-radius:4px;transition:width 0.4s;}

  /* FEATURE GRID */
  .feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:0 16px 16px;}
  .feature-btn{background:var(--rose-btn);border-radius:var(--radius-sm);padding:20px 10px 14px;display:flex;flex-direction:column;align-items:center;gap:10px;cursor:pointer;border:none;transition:transform 0.15s,opacity 0.15s;font-family:'DM Sans',sans-serif;}
  .feature-btn:hover{opacity:0.85;transform:translateY(-2px);}
  .feature-icon{font-size:26px;}
  .feature-label{font-size:12px;font-weight:500;color:var(--dark);text-align:center;}
  .section-title{font-size:13px;font-weight:700;color:var(--mid);text-transform:uppercase;letter-spacing:0.8px;margin:16px 16px 10px;}

  /* LISTS */
  .list-section{padding:0 16px;}
  .list-item{background:var(--card);border-radius:var(--radius-sm);padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px;box-shadow:var(--shadow-sm);}
  .list-item-icon{width:42px;height:42px;background:var(--rose-pale);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
  .list-item-info{flex:1;}
  .list-item-name{font-size:14px;font-weight:600;color:var(--dark);}
  .list-item-sub{font-size:11px;color:var(--mid);margin-top:2px;}
  .badge{font-size:10px;padding:2px 8px;border-radius:10px;font-weight:600;margin-top:3px;display:inline-block;}
  .badge-paid{background:var(--rose-pale);color:var(--rose);}
  .badge-unpaid{background:var(--section-bg);color:var(--mid);}
  .delete-btn{background:none;border:none;cursor:pointer;font-size:17px;color:var(--light);padding:4px;transition:color 0.2s;}
  .delete-btn:hover{color:#E05050;}
  .edit-btn{background:none;border:none;cursor:pointer;font-size:16px;color:var(--light);padding:4px;transition:color 0.2s;}
  .edit-btn:hover{color:var(--rose);}
  .add-btn{margin:0 16px 12px;width:calc(100% - 32px);padding:13px;background:var(--rose);color:white;border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:8px;transition:opacity 0.2s;}
  .add-btn:hover{opacity:0.9;}

  /* MODAL */
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:200;display:flex;align-items:flex-end;justify-content:center;}
  .modal{background:var(--modal-bg);border-radius:24px 24px 0 0;padding:24px;width:100%;max-width:480px;max-height:88vh;overflow-y:auto;animation:slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1);}
  @keyframes slideUp{from{transform:translateY(100%);opacity:0;}to{transform:translateY(0);opacity:1;}}
  .modal-handle{width:40px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 20px;}
  .modal-title{font-family:'Playfair Display',serif;font-size:20px;color:var(--dark);margin-bottom:18px;}
  .modal-footer{display:flex;gap:10px;margin-top:18px;}
  .btn-cancel{flex:1;padding:13px;background:var(--section-bg);color:var(--mid);border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .btn-save{flex:2;padding:13px;background:var(--rose);color:white;border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .radio-group{display:flex;gap:10px;margin-bottom:14px;}
  .radio-option{flex:1;padding:10px 6px;border:1.5px solid var(--border);border-radius:var(--radius-sm);text-align:center;cursor:pointer;font-size:12px;font-weight:500;color:var(--mid);transition:all 0.2s;}
  .radio-option.active{border-color:var(--rose);background:var(--rose-pale);color:var(--rose);}

  /* SETTINGS */
  .settings-section{background:var(--card);border-radius:var(--radius);margin:0 16px 14px;overflow:hidden;box-shadow:var(--shadow-sm);}
  .settings-row{display:flex;align-items:center;padding:15px 18px;border-bottom:1px solid var(--border);cursor:pointer;transition:background 0.15s;}
  .settings-row:last-child{border-bottom:none;}
  .settings-row:hover{background:var(--section-bg);}
  .settings-row.no-tap{cursor:default;}
  .settings-row.no-tap:hover{background:transparent;}
  .settings-row.disabled{opacity:0.45;cursor:default;}
  .settings-row.disabled:hover{background:transparent;}
  .settings-row-icon{font-size:20px;margin-right:14px;width:26px;text-align:center;}
  .settings-row-info{flex:1;}
  .settings-row-title{font-size:14px;font-weight:600;color:var(--dark);}
  .settings-row-sub{font-size:12px;color:var(--mid);margin-top:2px;}
  .team-avatar{width:36px;height:36px;border-radius:50%;background:var(--rose-pale);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--rose);margin-right:12px;flex-shrink:0;}
  .team-badge{font-size:10px;padding:2px 7px;border-radius:8px;font-weight:600;background:var(--rose-pale);color:var(--rose);margin-left:6px;}
  .currency-select{padding:6px 12px;border:1.5px solid var(--rose-light);border-radius:20px;background:var(--rose-pale);color:var(--rose);font-weight:600;font-family:'DM Sans',sans-serif;font-size:13px;cursor:pointer;outline:none;}
  .logout-btn{margin:4px 16px 8px;width:calc(100% - 32px);padding:14px;background:transparent;border:1.5px solid var(--border);border-radius:var(--radius-sm);color:#E05050;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;}
  .logout-btn:hover{background:var(--rose-pale);}

  /* INVITE BANNER */
  .invite-banner{margin:16px;background:linear-gradient(135deg,#FF8C42 0%,#FF6B6B 100%);border-radius:var(--radius);padding:16px 18px;display:flex;align-items:center;gap:12px;}
  .invite-banner-btn{margin-left:auto;background:white;border:none;border-radius:10px;padding:7px 14px;font-size:13px;font-weight:600;color:#FF6B6B;cursor:pointer;flex-shrink:0;font-family:'DM Sans',sans-serif;}

  /* EXPENSE */
  .expense-summary{margin:16px;background:linear-gradient(135deg,var(--rose) 0%,#D4607A 100%);border-radius:var(--radius);padding:20px;}

  /* CHECKLIST */
  .checklist-item{background:var(--card);border-radius:var(--radius-sm);padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px;box-shadow:var(--shadow-sm);}
  .check-circle{width:24px;height:24px;border-radius:50%;border:2px solid var(--rose-light);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.2s;}
  .check-circle.done{background:var(--rose);border-color:var(--rose);}
  .check-text{flex:1;font-size:14px;font-weight:500;color:var(--dark);}
  .check-text.done{text-decoration:line-through;color:var(--light);}

  /* GUESTS */
  .guest-avatar{width:42px;height:42px;border-radius:50%;background:var(--rose-pale);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:var(--rose);flex-shrink:0;}

  /* SAVINGS */
  .savings-hero{margin:16px;background:linear-gradient(135deg,#5B4FCF 0%,#3D35A6 100%);border-radius:var(--radius);padding:22px;color:white;}

  /* TIMELINE */
  .timeline-item{background:var(--card);border-radius:14px;padding:12px 16px;box-shadow:var(--shadow-sm);flex:1;}

  /* INSPIRASI */
  .inspi-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 16px;}
  .inspi-card{background:var(--card);border-radius:var(--radius-sm);overflow:hidden;box-shadow:var(--shadow-sm);cursor:pointer;transition:transform 0.15s;}
  .inspi-card:hover{transform:translateY(-2px);}
  .inspi-img{width:100%;height:140px;object-fit:cover;display:block;background:var(--section-bg);}
  .inspi-img-placeholder{width:100%;height:140px;background:var(--section-bg);display:flex;align-items:center;justify-content:center;font-size:32px;}
  .inspi-note{padding:10px 12px;}
  .inspi-note-text{font-size:12px;color:var(--mid);line-height:1.5;}

  /* COLOR PICKER */
  .color-swatches{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px;}
  .color-swatch{width:36px;height:36px;border-radius:50%;cursor:pointer;border:3px solid transparent;transition:transform 0.15s;}
  .color-swatch.active{border-color:var(--rose);transform:scale(1.15);}

  /* EMPTY */
  .empty-state{text-align:center;padding:48px 24px;}
  .empty-icon{font-size:46px;margin-bottom:12px;}
  .empty-title{font-size:15px;font-weight:600;color:var(--mid);}
  .empty-sub{font-size:13px;color:var(--light);margin-top:4px;}

  .loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:14px;}
  .spinner{width:38px;height:38px;border:3px solid var(--rose-pale);border-top-color:var(--rose);border-radius:50%;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
  .info-text{font-size:13px;color:var(--light);text-align:center;padding:12px 20px 24px;}

  /* IMAGE UPLOAD */
  .img-upload-label{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;border:2px dashed var(--border);border-radius:var(--radius-sm);cursor:pointer;color:var(--mid);font-size:14px;margin-bottom:14px;transition:border-color 0.2s;}
  .img-upload-label:hover{border-color:var(--rose);color:var(--rose);}
  `}let La=null;function il(t){La||(La=document.createElement("style"),document.head.appendChild(La)),La.textContent=VN(t?Yn:Py),document.body.style.background=t?Yn.bg:Py.bg}const LN=["#1a1a1a","#2D3A4A","#3D2A3A","#2A3D2A","#3A2A1A","#1A2A3D","#4A2A2D","#2A1A3D"];function jN({onAuth:t,dark:e}){const[n,r]=B.useState("login"),[i,s]=B.useState(""),[o,l]=B.useState(""),[u,d]=B.useState(""),[p,g]=B.useState(!1),[y,S]=B.useState(""),[R,b]=B.useState(!1),D=async E=>{S(""),g(!0);try{const T=await E();t(T.user)}catch(T){S(Cy[T.code]||T.message)}g(!1)};return h.jsxs("div",{className:"auth-wrap",children:[h.jsxs("div",{className:"auth-hero",children:[h.jsx("span",{className:"auth-logo",children:"💍"}),h.jsxs("h1",{className:"auth-title",children:["Kahwin",h.jsx("br",{}),"Planner"]}),h.jsx("p",{className:"auth-sub",children:"Rancang majlis impian bersama"})]}),h.jsxs("div",{className:"auth-card",children:[h.jsxs("div",{className:"auth-tabs",children:[h.jsx("button",{className:`auth-tab ${n==="login"?"active":""}`,onClick:()=>{r("login"),S(""),b(!1)},children:"Log Masuk"}),h.jsx("button",{className:`auth-tab ${n==="register"?"active":""}`,onClick:()=>{r("register"),S(""),b(!1)},children:"Daftar"})]}),y&&h.jsx("div",{className:"err-msg",children:y}),R&&h.jsx("div",{className:"success-msg",children:"✓ Email reset dihantar!"}),n==="register"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"field-label",children:"Nama Penuh"}),h.jsx("input",{className:"field-input",placeholder:"Nama kamu",value:i,onChange:E=>s(E.target.value)})]}),h.jsx("div",{className:"field-label",children:"Email"}),h.jsx("input",{className:"field-input",type:"email",placeholder:"email@contoh.com",value:o,onChange:E=>l(E.target.value)}),h.jsx("div",{className:"field-label",children:"Kata Laluan"}),h.jsx("input",{className:"field-input",type:"password",placeholder:"••••••••",value:u,onChange:E=>d(E.target.value),onKeyDown:E=>E.key==="Enter"&&D(()=>fy(Lr,o,u))}),h.jsx("button",{className:"btn-primary",disabled:p||!o||!u||n==="register"&&!i,onClick:()=>D(n==="login"?()=>fy(Lr,o,u):async()=>{const E=await nC(Lr,o,u);return await iC(E.user,{displayName:i}),E}),children:p?"Memuatkan...":n==="login"?"Log Masuk":"Daftar Sekarang"}),n==="login"&&h.jsx("div",{className:"forgot-link",onClick:async()=>{if(!o){S("Masukkan email dulu.");return}g(!0);try{await tC(Lr,o),b(!0),S("")}catch(E){S(Cy[E.code]||E.message)}g(!1)},children:"Lupa kata laluan?"}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"atau"})}),h.jsxs("button",{className:"btn-google",disabled:p,onClick:()=>D(()=>RC(Lr,DN)),children:[h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[h.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),h.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),h.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),h.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Teruskan dengan Google"]})]})]})}function MN({user:t,onDone:e}){const[n,r]=B.useState(t.displayName||""),[i,s]=B.useState(""),[o,l]=B.useState(""),[u,d]=B.useState(!1);async function p(){if(!n||!i||!o)return;d(!0);const g={groom:n,bride:i,date:o,ownerId:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,team:[{uid:t.uid,email:t.email,name:t.displayName||t.email,role:"owner",joinedAt:new Date().toISOString()}],currency:"MYR",heroBg:"#1a1a1a",createdAt:new Date().toISOString()};await Ao(Pe(le,"weddings",t.uid),g),await Ao(Pe(le,"users",t.uid),{weddingId:t.uid,email:t.email,name:t.displayName||t.email},{merge:!0}),e({...g,id:t.uid}),d(!1)}return h.jsxs("div",{className:"setup-wrap",children:[h.jsx("div",{style:{fontSize:52,marginBottom:14},children:"💍"}),h.jsx("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:28,color:"var(--dark)",textAlign:"center",marginBottom:8},children:"Selamat Datang!"}),h.jsx("p",{style:{fontSize:14,color:"var(--mid)",marginBottom:28,textAlign:"center"},children:"Isi maklumat majlis kamu"}),h.jsxs("div",{className:"setup-card",children:[h.jsx("div",{className:"field-label",children:"Nama Pengantin Lelaki"}),h.jsx("input",{className:"field-input",placeholder:"Nama pengantin lelaki",value:n,onChange:g=>r(g.target.value)}),h.jsx("div",{className:"field-label",children:"Nama Pengantin Perempuan"}),h.jsx("input",{className:"field-input",placeholder:"Nama pengantin perempuan",value:i,onChange:g=>s(g.target.value)}),h.jsx("div",{className:"field-label",children:"Tarikh Majlis"}),h.jsx("input",{className:"field-input",type:"date",value:o,onChange:g=>l(g.target.value)}),h.jsx("button",{className:"btn-primary",onClick:p,disabled:!n||!i||!o||u,children:u?"Menyimpan...":"Mulakan Perancangan →"})]})]})}function FN({wedding:t,user:e,onClose:n}){const[r,i]=B.useState(""),[s,o]=B.useState(!1),[l,u]=B.useState(""),[d,p]=B.useState(!1);async function g(){if(r){o(!0),u("");try{await Ao(Pe(le,"invites",r.replace(/\./g,"_")),{weddingId:t.id,fromUid:e.uid,fromEmail:e.email,fromName:e.displayName||e.email,toEmail:r,weddingGroom:t.groom,weddingBride:t.bride,createdAt:new Date().toISOString(),status:"pending"}),await yr(Pe(le,"weddings",t.id),{pendingPartner:r}),p(!0)}catch{u("Gagal hantar. Cuba lagi.")}o(!1)}}return h.jsx("div",{className:"modal-overlay",onClick:y=>y.target===y.currentTarget&&n(),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Jemput Pasangan 💑"}),d?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"success-msg",children:["✓ Jemputan disimpan untuk ",h.jsx("b",{children:r}),"!",h.jsx("br",{}),"Pasangan perlu daftar/login dengan email tersebut."]}),h.jsx("button",{className:"btn-primary",onClick:n,children:"Tutup"})]}):h.jsxs(h.Fragment,{children:[h.jsx("p",{style:{fontSize:14,color:"var(--mid)",marginBottom:16,lineHeight:1.6},children:"Masukkan email pasangan. Mereka perlu daftar akaun dengan email tersebut untuk join."}),l&&h.jsx("div",{className:"err-msg",children:l}),h.jsx("div",{className:"field-label",children:"Email Pasangan"}),h.jsx("input",{className:"field-input",type:"email",placeholder:"email@pasangan.com",value:r,onChange:y=>i(y.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:n,children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:g,disabled:!r||s,children:s?"...":"Hantar"})]})]})]})})}function UN({wedding:t,onClose:e,onSave:n}){const[r,i]=B.useState(t.heroBgType||"color"),[s,o]=B.useState(t.heroBg||"#1a1a1a"),[l,u]=B.useState(!1),d=B.useRef();async function p(y){u(!0);try{const S=_E(wE,`weddings/${t.id}/hero_bg`);await yE(S,y);const R=await vE(S);await n({heroBgType:"image",heroBgUrl:R,heroBg:s}),e()}catch{alert("Gagal upload. Pastikan Firebase Storage diaktifkan.")}u(!1)}async function g(){await n({heroBgType:"color",heroBg:s}),e()}return h.jsx("div",{className:"modal-overlay",onClick:y=>y.target===y.currentTarget&&e(),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tukar Latar Hero 🎨"}),h.jsxs("div",{className:"radio-group",children:[h.jsx("div",{className:`radio-option ${r==="color"?"active":""}`,onClick:()=>i("color"),children:"🎨 Warna"}),h.jsx("div",{className:`radio-option ${r==="image"?"active":""}`,onClick:()=>i("image"),children:"🖼️ Gambar"})]}),r==="color"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"field-label",children:"Pilih Warna"}),h.jsx("div",{className:"color-swatches",children:LN.map(y=>h.jsx("div",{className:`color-swatch ${s===y?"active":""}`,style:{background:y},onClick:()=>o(y)},y))}),h.jsx("div",{className:"field-label",children:"Atau warna custom"}),h.jsx("input",{type:"color",value:s,onChange:y=>o(y.target.value),style:{width:"100%",height:44,border:"none",borderRadius:12,cursor:"pointer",background:"none",marginBottom:14}}),h.jsx("button",{className:"btn-primary",onClick:g,children:"Simpan"})]}),r==="image"&&h.jsxs(h.Fragment,{children:[h.jsx("p",{style:{fontSize:13,color:"var(--mid)",marginBottom:14,lineHeight:1.6},children:"Upload gambar untuk dijadikan latar belakang kad nama pengantin."}),h.jsxs("label",{className:"img-upload-label",children:[h.jsx("input",{ref:d,type:"file",accept:"image/*",style:{display:"none"},onChange:y=>y.target.files[0]&&p(y.target.files[0])}),l?"Uploading...":"📁 Pilih Gambar"]}),t.heroBgUrl&&h.jsx("img",{src:t.heroBgUrl,style:{width:"100%",borderRadius:12,marginBottom:14},alt:"preview"})]})]})})}function BN({wedding:t,onNav:e,expenses:n,checklist:r,guests:i,onUpdateWedding:s}){const[o,l]=B.useState(!1),u=ON(t.date),d=t.currency||"MYR",p=n.reduce((I,A)=>I+parseFloat(A.amount||0),0),g=n.filter(I=>I.status==="paid").reduce((I,A)=>I+parseFloat(A.amount||0),0),y=p>0?g/p*100:0,S=i.reduce((I,A)=>I+(A.type==="family"?1+(parseInt(A.familyCount)||0):1),0),R=i.filter(I=>I.rsvp==="hadir").reduce((I,A)=>I+(A.type==="family"?1+(parseInt(A.familyCount)||0):1),0),b=r.filter(I=>I.done).length,D=(t.team||[]).length>1,E=t.heroBgType==="image"&&t.heroBgUrl?{backgroundImage:`url(${t.heroBgUrl})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:t.heroBg||"#1a1a1a"};async function T(I){await yr(Pe(le,"weddings",t.id),I),s({...t,...I})}return h.jsxs("div",{children:[!D&&h.jsxs("div",{className:"invite-banner",children:[h.jsx("span",{style:{fontSize:28},children:"💑"}),h.jsxs("div",{children:[h.jsx("div",{style:{color:"white",fontSize:14,fontWeight:700},children:"Jemput Pasangan"}),h.jsx("div",{style:{color:"rgba(255,255,255,0.85)",fontSize:12},children:"Plan bersama-sama!"})]}),h.jsx("button",{className:"invite-banner-btn",onClick:()=>e("settings"),children:"Jemput"})]}),h.jsxs("div",{className:"hero-card",style:E,children:[h.jsx("div",{className:"hero-overlay"}),h.jsx("button",{className:"hero-edit-btn",onClick:()=>l(!0),children:"✏️ Tukar Latar"}),h.jsxs("div",{className:"hero-content",children:[h.jsx("div",{className:"hero-tag",children:"💒 Wedding"}),h.jsxs("div",{className:"hero-names",children:[h.jsx("h2",{children:t.groom}),h.jsx("div",{className:"amp",children:"&"}),h.jsx("h3",{children:t.bride})]}),h.jsxs("div",{className:"hero-date-row",children:[h.jsx("span",{className:"hero-date",children:Co(t.date)}),u!==null&&h.jsx("span",{className:"hero-days",children:u>0?`${u} hari lagi`:u===0?"Hari ini! 🎉":"Sudah berlalu"})]})]})]}),h.jsxs("div",{className:"section-grid",children:[h.jsxs("div",{className:"stat-card",onClick:()=>e("expenses"),children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[h.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--dark)"},children:"Perbelanjaan & Bajet"}),h.jsx("span",{style:{color:"var(--light)"},children:"›"})]}),h.jsx("span",{style:{fontSize:26,fontWeight:700,color:"var(--dark)"},children:qt(g,d)}),h.jsxs("span",{style:{fontSize:15,color:"var(--mid)"},children:[" / ",qt(p,d)]}),h.jsx("div",{className:"progress-bar-wrap",children:h.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(y,100)}%`}})}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:10},children:[h.jsxs("div",{children:[h.jsx("div",{style:{color:"var(--rose)",fontSize:13,fontWeight:600},children:qt(g,d)}),h.jsx("div",{style:{fontSize:11,color:"var(--mid)"},children:"Sudah Bayar"})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontSize:13,fontWeight:600,color:"var(--dark)"},children:qt(p-g,d)}),h.jsx("div",{style:{fontSize:11,color:"var(--mid)"},children:"Belum Bayar"})]})]})]}),h.jsxs("div",{className:"two-col",children:[h.jsxs("div",{className:"mini-stat",onClick:()=>e("checklist"),children:[h.jsxs("div",{style:{fontSize:13,fontWeight:600,color:"var(--dark)",display:"flex",justifyContent:"space-between"},children:["Checklist ",h.jsx("span",{children:"›"})]}),h.jsx("div",{style:{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"6px 0 2px"},children:b}),h.jsxs("div",{style:{fontSize:12,color:"var(--mid)"},children:["/ ",r.length," tugasan"]})]}),h.jsxs("div",{className:"mini-stat",onClick:()=>e("guests"),children:[h.jsxs("div",{style:{fontSize:13,fontWeight:600,color:"var(--dark)",display:"flex",justifyContent:"space-between"},children:["Tetamu ",h.jsx("span",{children:"›"})]}),h.jsx("div",{style:{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"6px 0 2px"},children:R}),h.jsxs("div",{style:{fontSize:12,color:"var(--mid)"},children:["/ ",S," jemputan"]})]})]})]}),h.jsx("div",{className:"section-title",children:"Alat Perancangan"}),h.jsx("div",{className:"feature-grid",children:[["💰","Perbelanjaan","expenses"],["✅","Checklist","checklist"],["👥","Tetamu","guests"],["🏦","Simpanan","savings"],["📅","Timeline","timeline"],["📝","Nota","notes"],["🖼️","Inspirasi","inspirasi"]].map(([I,A,L])=>h.jsxs("button",{className:"feature-btn",onClick:()=>e(L),children:[h.jsx("span",{className:"feature-icon",children:I}),h.jsx("span",{className:"feature-label",children:A})]},L))}),o&&h.jsx(UN,{wedding:t,onClose:()=>l(!1),onSave:T})]})}function zN({expenses:t,onAdd:e,onDelete:n,onToggle:r,currency:i}){const[s,o]=B.useState(!1),[l,u]=B.useState(""),[d,p]=B.useState(""),[g,y]=B.useState("Lain-lain"),[S,R]=B.useState("unpaid"),[b,D]=B.useState(!1),E=t.reduce((A,L)=>A+parseFloat(L.amount||0),0),T=t.filter(A=>A.status==="paid").reduce((A,L)=>A+parseFloat(L.amount||0),0);async function I(){!l||!d||(D(!0),await e({name:l,amount:parseFloat(d),category:g,status:S,createdAt:new Date().toISOString()}),u(""),p(""),y("Lain-lain"),R("unpaid"),D(!1),o(!1))}return h.jsxs("div",{children:[h.jsxs("div",{className:"expense-summary",children:[h.jsx("div",{style:{fontSize:12,color:"rgba(255,255,255,0.8)",fontWeight:500},children:"Jumlah Perbelanjaan"}),h.jsx("div",{style:{fontSize:32,fontWeight:700,color:"white",margin:"4px 0 14px"},children:qt(E,i)}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:15,fontWeight:600,color:"white"},children:qt(T,i)}),h.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.75)"},children:"Sudah Bayar"})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:15,fontWeight:600,color:"white"},children:qt(E-T,i)}),h.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.75)"},children:"Belum Bayar"})]})]})]}),h.jsx("button",{className:"add-btn",onClick:()=>o(!0),children:"＋ Tambah Perbelanjaan"}),h.jsxs("div",{className:"list-section",children:[t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"💸"}),h.jsx("div",{className:"empty-title",children:"Tiada perbelanjaan lagi"})]}),t.map(A=>h.jsxs("div",{className:"list-item",children:[h.jsx("div",{className:"list-item-icon",children:Ry[A.category]||"💼"}),h.jsxs("div",{className:"list-item-info",onClick:()=>r(A.id,A.status),style:{cursor:"pointer"},children:[h.jsx("div",{className:"list-item-name",children:A.name}),h.jsxs("div",{className:"list-item-sub",children:[A.category,A.addedBy?` · ${A.addedBy}`:""]})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:13,fontWeight:700,color:A.status==="paid"?"var(--rose)":"var(--mid)",textAlign:"right"},children:qt(A.amount,i)}),h.jsx("div",{className:`badge ${A.status==="paid"?"badge-paid":"badge-unpaid"}`,children:A.status==="paid"?"✓ Bayar":"Belum"})]}),h.jsx("button",{className:"delete-btn",onClick:()=>n(A.id),children:"🗑"})]},A.id))]}),s&&h.jsx("div",{className:"modal-overlay",onClick:A=>A.target===A.currentTarget&&o(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tambah Perbelanjaan"}),h.jsx("div",{className:"field-label",children:"Nama"}),h.jsx("input",{className:"field-input",placeholder:"cth: Sewa Dewan",value:l,onChange:A=>u(A.target.value)}),h.jsxs("div",{className:"field-label",children:["Jumlah (",i,")"]}),h.jsx("input",{className:"field-input",type:"number",placeholder:"0.00",value:d,onChange:A=>p(A.target.value)}),h.jsx("div",{className:"field-label",children:"Kategori"}),h.jsx("select",{className:"field-input",value:g,onChange:A=>y(A.target.value),children:Object.keys(Ry).map(A=>h.jsx("option",{children:A},A))}),h.jsx("div",{className:"field-label",children:"Status"}),h.jsx("div",{className:"radio-group",children:[["paid","✓ Sudah Bayar"],["unpaid","⏳ Belum Bayar"]].map(([A,L])=>h.jsx("div",{className:`radio-option ${S===A?"active":""}`,onClick:()=>R(A),children:L},A))}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>o(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:I,disabled:!l||!d||b,children:b?"...":"Simpan"})]})]})})]})}function $N({checklist:t,onAdd:e,onToggle:n,onDelete:r}){const[i,s]=B.useState(!1),[o,l]=B.useState(""),[u,d]=B.useState(!1),p=t.filter(y=>y.done).length;async function g(){o&&(d(!0),await e({task:o,done:!1,createdAt:new Date().toISOString()}),l(""),d(!1),s(!1))}return h.jsxs("div",{children:[h.jsxs("div",{style:{margin:16,background:"var(--card)",borderRadius:20,padding:20,boxShadow:"var(--shadow-sm)"},children:[h.jsx("div",{style:{fontSize:13,color:"var(--mid)",fontWeight:600},children:"Kemajuan Tugasan"}),h.jsxs("div",{style:{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"4px 0 10px"},children:[p," / ",t.length]}),h.jsx("div",{className:"progress-bar-wrap",children:h.jsx("div",{className:"progress-bar-fill",style:{width:t.length>0?`${p/t.length*100}%`:"0%"}})})]}),h.jsx("button",{className:"add-btn",onClick:()=>s(!0),children:"＋ Tambah Tugasan"}),h.jsxs("div",{className:"list-section",children:[t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"✅"}),h.jsx("div",{className:"empty-title",children:"Tiada tugasan lagi"})]}),t.map(y=>h.jsxs("div",{className:"checklist-item",children:[h.jsx("div",{className:`check-circle ${y.done?"done":""}`,onClick:()=>n(y.id,y.done),children:y.done&&h.jsx("span",{style:{color:"white",fontSize:13},children:"✓"})}),h.jsx("span",{className:`check-text ${y.done?"done":""}`,children:y.task}),y.addedBy&&h.jsx("span",{style:{fontSize:11,color:"var(--light)",flexShrink:0},children:y.addedBy}),h.jsx("button",{className:"delete-btn",onClick:()=>r(y.id),children:"🗑"})]},y.id))]}),i&&h.jsx("div",{className:"modal-overlay",onClick:y=>y.target===y.currentTarget&&s(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tambah Tugasan"}),h.jsx("div",{className:"field-label",children:"Nama Tugasan"}),h.jsx("input",{className:"field-input",placeholder:"cth: Tempah pelamin",value:o,onChange:y=>l(y.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>s(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:g,disabled:!o||u,children:u?"...":"Simpan"})]})]})})]})}function WN({guests:t,onAdd:e,onDelete:n,onRSVP:r}){const[i,s]=B.useState(!1),[o,l]=B.useState(""),[u,d]=B.useState(""),[p,g]=B.useState("belum"),[y,S]=B.useState("personal"),[R,b]=B.useState(""),[D,E]=B.useState(!1),T=t.reduce((O,_)=>O+(_.type==="family"?1+(parseInt(_.familyCount)||0):1),0),I=t.filter(O=>O.rsvp==="hadir").reduce((O,_)=>O+(_.type==="family"?1+(parseInt(_.familyCount)||0):1),0),A=t.filter(O=>O.rsvp==="tidak").length;async function L(){o&&(E(!0),await e({name:o,phone:u,rsvp:p,type:y,familyCount:y==="family"&&parseInt(R)||0,createdAt:new Date().toISOString()}),l(""),d(""),g("belum"),S("personal"),b(""),E(!1),s(!1))}return h.jsxs("div",{children:[h.jsx("div",{style:{margin:16,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10},children:[{l:"Jemputan",v:t.length,c:"var(--dark)"},{l:"Hadir (pax)",v:I,c:"#4CAF50"},{l:"Tidak Hadir",v:A,c:"#E05050"}].map(O=>h.jsxs("div",{style:{background:"var(--card)",borderRadius:16,padding:"14px 10px",textAlign:"center",boxShadow:"var(--shadow-sm)"},children:[h.jsx("div",{style:{fontSize:22,fontWeight:700,color:O.c},children:O.v}),h.jsx("div",{style:{fontSize:11,color:"var(--mid)",marginTop:2},children:O.l})]},O.l))}),h.jsxs("div",{style:{margin:"0 16px 12px",background:"var(--rose-pale)",borderRadius:12,padding:"10px 14px",fontSize:13,color:"var(--rose)",fontWeight:600},children:["Jumlah keseluruhan: ",T," pax"]}),h.jsx("button",{className:"add-btn",onClick:()=>s(!0),children:"＋ Tambah Tetamu"}),h.jsxs("div",{className:"list-section",children:[t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"👥"}),h.jsx("div",{className:"empty-title",children:"Tiada tetamu lagi"})]}),t.map(O=>{var m;const _=O.type==="family"?1+(parseInt(O.familyCount)||0):1;return h.jsxs("div",{className:"list-item",children:[h.jsx("div",{className:"guest-avatar",children:(m=O.name[0])==null?void 0:m.toUpperCase()}),h.jsxs("div",{style:{flex:1},children:[h.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--dark)"},children:O.name}),h.jsxs("div",{style:{fontSize:11,color:"var(--mid)",marginTop:2},children:[O.type==="family"?`👨‍👩‍👧‍👦 Berkeluarga · ${_} pax`:"👤 Personal",O.phone?` · ${O.phone}`:""]})]}),h.jsxs("select",{style:{fontSize:12,padding:"4px 8px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--input-bg)",color:"var(--dark)",cursor:"pointer",fontFamily:"DM Sans,sans-serif"},value:O.rsvp,onChange:w=>r(O.id,w.target.value),children:[h.jsx("option",{value:"belum",children:"⏳ Belum"}),h.jsx("option",{value:"hadir",children:"✅ Hadir"}),h.jsx("option",{value:"tidak",children:"❌ Tidak"})]}),h.jsx("button",{className:"delete-btn",onClick:()=>n(O.id),children:"🗑"})]},O.id)})]}),i&&h.jsx("div",{className:"modal-overlay",onClick:O=>O.target===O.currentTarget&&s(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tambah Tetamu"}),h.jsx("div",{className:"field-label",children:"Nama"}),h.jsx("input",{className:"field-input",placeholder:"Nama tetamu",value:o,onChange:O=>l(O.target.value)}),h.jsx("div",{className:"field-label",children:"No. Telefon (Pilihan)"}),h.jsx("input",{className:"field-input",placeholder:"012-3456789",value:u,onChange:O=>d(O.target.value)}),h.jsx("div",{className:"field-label",children:"Jenis Jemputan"}),h.jsxs("div",{className:"radio-group",children:[h.jsx("div",{className:`radio-option ${y==="personal"?"active":""}`,onClick:()=>S("personal"),children:"👤 Personal"}),h.jsx("div",{className:`radio-option ${y==="family"?"active":""}`,onClick:()=>S("family"),children:"👨‍👩‍👧‍👦 Berkeluarga"})]}),y==="family"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"field-label",children:"Bilangan Ahli Lain (selain ketua)"}),h.jsx("input",{className:"field-input",type:"number",placeholder:"cth: 3 (jadi jumlah = 4 pax)",value:R,onChange:O=>b(O.target.value)}),R&&h.jsxs("div",{style:{fontSize:12,color:"var(--rose)",marginBottom:14,marginTop:-8},children:["Jumlah pax: ",1+parseInt(R||0)," orang"]})]}),h.jsx("div",{className:"field-label",children:"RSVP"}),h.jsx("div",{className:"radio-group",children:[["belum","⏳ Belum"],["hadir","✅ Hadir"],["tidak","❌ Tidak"]].map(([O,_])=>h.jsx("div",{className:`radio-option ${p===O?"active":""}`,onClick:()=>g(O),children:_},O))}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>s(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:L,disabled:!o||D,children:D?"...":"Simpan"})]})]})})]})}function HN({savings:t,onAdd:e,onDelete:n,wedding:r}){const[i,s]=B.useState(!1),[o,l]=B.useState(""),[u,d]=B.useState(""),[p,g]=B.useState(!1),y=r.currency||"MYR",S=t.reduce((E,T)=>E+parseFloat(T.amount||0),0),R=parseFloat(r.savingsTarget)||0,b=R>0?Math.min(S/R*100,100):0;async function D(){!o||!u||(g(!0),await e({desc:o,amount:parseFloat(u),date:new Date().toISOString()}),l(""),d(""),g(!1),s(!1))}return h.jsxs("div",{children:[h.jsxs("div",{className:"savings-hero",children:[h.jsx("div",{style:{fontSize:12,opacity:.8},children:"Jumlah Simpanan"}),h.jsx("div",{style:{fontSize:34,fontWeight:700,margin:"4px 0 4px"},children:qt(S,y)}),h.jsxs("div",{style:{fontSize:13,opacity:.8},children:["Sasaran: ",qt(R,y)]}),h.jsx("div",{style:{background:"rgba(255,255,255,0.2)",borderRadius:4,height:8,marginTop:12,overflow:"hidden"},children:h.jsx("div",{style:{height:"100%",background:"white",borderRadius:4,width:`${b}%`,transition:"width 0.5s"}})}),h.jsxs("div",{style:{fontSize:13,marginTop:6,opacity:.9},children:[b.toFixed(0),"% tercapai"]})]}),h.jsxs("div",{style:{padding:"0 16px 12px"},children:[h.jsxs("div",{className:"field-label",style:{marginBottom:6},children:["Sasaran (",y,")"]}),h.jsx("input",{className:"field-input",type:"number",placeholder:"cth: 50000",defaultValue:r.savingsTarget,onBlur:E=>yr(Pe(le,"weddings",r.id),{savingsTarget:parseFloat(E.target.value)||0})})]}),h.jsx("button",{className:"add-btn",onClick:()=>s(!0),children:"＋ Tambah Simpanan"}),h.jsxs("div",{className:"list-section",children:[t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"🏦"}),h.jsx("div",{className:"empty-title",children:"Tiada rekod simpanan"})]}),t.map(E=>h.jsxs("div",{className:"list-item",children:[h.jsx("div",{className:"list-item-icon",children:"💰"}),h.jsxs("div",{className:"list-item-info",children:[h.jsx("div",{className:"list-item-name",children:E.desc}),h.jsx("div",{className:"list-item-sub",children:Co(E.date)})]}),h.jsx("div",{style:{fontSize:13,fontWeight:700,color:"var(--rose)"},children:qt(E.amount,y)}),h.jsx("button",{className:"delete-btn",onClick:()=>n(E.id),children:"🗑"})]},E.id))]}),i&&h.jsx("div",{className:"modal-overlay",onClick:E=>E.target===E.currentTarget&&s(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tambah Simpanan"}),h.jsx("div",{className:"field-label",children:"Keterangan"}),h.jsx("input",{className:"field-input",placeholder:"cth: Gaji Januari",value:o,onChange:E=>l(E.target.value)}),h.jsxs("div",{className:"field-label",children:["Jumlah (",y,")"]}),h.jsx("input",{className:"field-input",type:"number",placeholder:"0.00",value:u,onChange:E=>d(E.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>s(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:D,disabled:!o||!u||p,children:p?"...":"Simpan"})]})]})})]})}function qN({timeline:t,onAdd:e,onDelete:n,onEdit:r,wedding:i}){const[s,o]=B.useState(!1),[l,u]=B.useState(null),[d,p]=B.useState(""),[g,y]=B.useState("📌"),[S,R]=B.useState(""),[b,D]=B.useState(!1);function E(){u(null),p(""),y("📌"),R(""),o(!0)}function T(_){u(_),p(_.label),y(_.icon||"📌"),R(_.date||""),o(!0)}async function I(){!d||!S||(D(!0),l?await r(l.id,{label:d,icon:g,date:S}):await e({label:d,icon:g,date:S,createdAt:new Date().toISOString()}),D(!1),o(!1))}const A=new Date,L=[...t].sort((_,m)=>new Date(_.date)-new Date(m.date)),O=["📌","🏛️","👗","👑","💌","📷","📬","✂️","📋","💍","💒","🎉","🎂","🛍️","✈️","🏨","💐","🎵"];return h.jsxs("div",{children:[h.jsx("button",{className:"add-btn",onClick:E,children:"＋ Tambah Timeline"}),h.jsxs("div",{style:{padding:"0 16px"},children:[L.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"📅"}),h.jsx("div",{className:"empty-title",children:"Tiada timeline lagi"}),h.jsx("div",{className:"empty-sub",children:"Tambah milestone perkahwinan kamu"})]}),h.jsxs("div",{style:{position:"relative",paddingLeft:28},children:[L.length>0&&h.jsx("div",{style:{position:"absolute",left:10,top:0,bottom:0,width:2,background:"var(--border)",borderRadius:2}}),L.map((_,m)=>{const w=new Date(_.date)<A;return h.jsxs("div",{style:{display:"flex",gap:14,marginBottom:20,position:"relative"},children:[h.jsx("div",{style:{position:"absolute",left:-22,top:14,width:16,height:16,borderRadius:"50%",background:w?"var(--rose)":"var(--card)",border:"2px solid var(--rose)",display:"flex",alignItems:"center",justifyContent:"center"},children:w&&h.jsx("span",{style:{color:"white",fontSize:8,fontWeight:700},children:"✓"})}),h.jsxs("div",{className:"timeline-item",style:{opacity:w?.75:1},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{style:{fontSize:22},children:_.icon||"📌"}),h.jsxs("div",{style:{display:"flex",gap:6},children:[h.jsx("button",{className:"edit-btn",onClick:()=>T(_),children:"✏️"}),h.jsx("button",{className:"delete-btn",onClick:()=>n(_.id),children:"🗑"})]})]}),h.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--dark)",marginTop:8},children:_.label}),h.jsx("div",{style:{fontSize:12,color:w?"var(--rose)":"var(--mid)",marginTop:4,fontWeight:w?600:400},children:Co(_.date)})]})]},_.id)})]})]}),s&&h.jsx("div",{className:"modal-overlay",onClick:_=>_.target===_.currentTarget&&o(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsxs("div",{className:"modal-title",children:[l?"Edit":"Tambah"," Timeline"]}),h.jsx("div",{className:"field-label",children:"Nama Milestone"}),h.jsx("input",{className:"field-input",placeholder:"cth: Tempah dewan",value:d,onChange:_=>p(_.target.value)}),h.jsx("div",{className:"field-label",children:"Tarikh"}),h.jsx("input",{className:"field-input",type:"date",value:S,onChange:_=>R(_.target.value)}),h.jsx("div",{className:"field-label",children:"Ikon"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:14},children:O.map(_=>h.jsx("button",{onClick:()=>y(_),style:{fontSize:22,background:g===_?"var(--rose-pale)":"var(--section-bg)",border:g===_?"2px solid var(--rose)":"2px solid transparent",borderRadius:10,width:40,height:40,cursor:"pointer"},children:_},_))}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>o(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:I,disabled:!d||!S||b,children:b?"...":"Simpan"})]})]})})]})}function KN({inspirasi:t,onAdd:e,onDelete:n,onEdit:r,weddingId:i}){const[s,o]=B.useState(!1),[l,u]=B.useState(null),[d,p]=B.useState(""),[g,y]=B.useState(null),[S,R]=B.useState(""),[b,D]=B.useState(!1),E=B.useRef();function T(){u(null),p(""),y(null),R(""),o(!0)}function I(m){u(m),p(m.nota||""),y(null),R(m.imgUrl||""),o(!0)}function A(m){const w=m.target.files[0];w&&(y(w),R(URL.createObjectURL(w)))}async function L(){D(!0);let m=(l==null?void 0:l.imgUrl)||"";if(g){const w=_E(wE,`weddings/${i}/inspirasi/${Date.now()}`);await yE(w,g),m=await vE(w)}l?await r(l.id,{nota:d,imgUrl:m}):await e({nota:d,imgUrl:m,createdAt:new Date().toISOString()}),D(!1),o(!1)}const[O,_]=B.useState(null);return h.jsxs("div",{children:[h.jsx("button",{className:"add-btn",onClick:T,children:"＋ Tambah Inspirasi"}),t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"🖼️"}),h.jsx("div",{className:"empty-title",children:"Tiada inspirasi lagi"}),h.jsx("div",{className:"empty-sub",children:"Simpan idea & inspirasi wedding kamu"})]}),h.jsx("div",{className:"inspi-grid",children:t.map(m=>h.jsxs("div",{className:"inspi-card",onClick:()=>_(m),children:[m.imgUrl?h.jsx("img",{src:m.imgUrl,className:"inspi-img",alt:"inspirasi"}):h.jsx("div",{className:"inspi-img-placeholder",children:"🖼️"}),m.nota&&h.jsx("div",{className:"inspi-note",children:h.jsx("div",{className:"inspi-note-text",children:m.nota})})]},m.id))}),O&&h.jsx("div",{className:"modal-overlay",onClick:m=>m.target===m.currentTarget&&_(null),children:h.jsxs("div",{className:"modal",style:{maxHeight:"90vh"},children:[h.jsx("div",{className:"modal-handle"}),O.imgUrl&&h.jsx("img",{src:O.imgUrl,style:{width:"100%",borderRadius:14,marginBottom:14},alt:"inspirasi"}),O.nota&&h.jsx("p",{style:{fontSize:14,color:"var(--dark)",lineHeight:1.6,marginBottom:16},children:O.nota}),h.jsxs("div",{style:{display:"flex",gap:10},children:[h.jsx("button",{className:"btn-cancel",style:{flex:1},onClick:()=>_(null),children:"Tutup"}),h.jsx("button",{className:"btn-save",style:{flex:1},onClick:()=>{_(null),I(O)},children:"✏️ Edit"}),h.jsx("button",{style:{flex:1,padding:13,background:"#FFE8EC",color:"#E05050",border:"none",borderRadius:"var(--radius-sm)",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"DM Sans,sans-serif"},onClick:()=>{n(O.id),_(null)},children:"🗑 Padam"})]})]})}),s&&h.jsx("div",{className:"modal-overlay",onClick:m=>m.target===m.currentTarget&&o(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsxs("div",{className:"modal-title",children:[l?"Edit":"Tambah"," Inspirasi 🖼️"]}),h.jsxs("label",{className:"img-upload-label",children:[h.jsx("input",{ref:E,type:"file",accept:"image/*",style:{display:"none"},onChange:A}),S?h.jsx("img",{src:S,style:{width:"100%",borderRadius:10},alt:"preview"}):"📁 Pilih Gambar"]}),h.jsx("div",{className:"field-label",children:"Nota / Keterangan"}),h.jsx("textarea",{className:"field-input",rows:3,placeholder:"Tulis nota untuk inspirasi ini...",value:d,onChange:m=>p(m.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>o(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:L,disabled:b,children:b?"Uploading...":"Simpan"})]})]})})]})}function GN({notes:t,onSave:e}){const[n,r]=B.useState(t||""),[i,s]=B.useState(!0);B.useEffect(()=>r(t||""),[t]);function o(l){r(l),s(!1),clearTimeout(window._nt),window._nt=setTimeout(async()=>{await e(l),s(!0)},1200)}return h.jsxs("div",{style:{padding:"0 16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0 12px"},children:[h.jsx("span",{style:{fontSize:13,color:"var(--mid)"},children:"Auto-save aktif"}),h.jsx("span",{style:{fontSize:12,color:i?"#4CAF50":"var(--rose)",fontWeight:600},children:i?"✓ Tersimpan":"Menyimpan..."})]}),h.jsx("textarea",{value:n,onChange:l=>o(l.target.value),placeholder:"Tulis nota perkahwinan kamu di sini...",style:{width:"100%",minHeight:"60vh",padding:16,border:"1.5px solid var(--border)",borderRadius:16,fontSize:15,fontFamily:"DM Sans,sans-serif",color:"var(--dark)",background:"var(--card)",outline:"none",resize:"none",lineHeight:1.7}})]})}function QN({wedding:t,user:e,onBack:n,onUpdate:r,onSignOut:i,dark:s,setDark:o}){const[l,u]=B.useState(!1),[d,p]=B.useState(!1),[g,y]=B.useState(t.groom),[S,R]=B.useState(t.bride),[b,D]=B.useState(t.date),[E,T]=B.useState(!1),[I,A]=B.useState(null),L=t.ownerId===e.uid;async function O(){T(!0),await yr(Pe(le,"weddings",t.id),{groom:g,bride:S,date:b}),r({...t,groom:g,bride:S,date:b}),T(!1),p(!1)}async function _(){const m=await tR(Jt(le,"weddings",t.id,"activityLog"));A(m.docs.map(w=>w.data()).sort((w,x)=>new Date(x.time)-new Date(w.time)))}return h.jsxs("div",{style:{paddingBottom:30},children:[h.jsxs("div",{style:{padding:"20px 20px 8px",display:"flex",alignItems:"center",gap:12},children:[h.jsx("button",{onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:24,color:"var(--mid)"},children:"‹"}),h.jsx("h2",{style:{fontFamily:"'Playfair Display',serif",fontSize:22,color:"var(--dark)"},children:"Profil & Tetapan"})]}),h.jsxs("div",{className:"settings-section",children:[h.jsxs("div",{className:"settings-row",onClick:()=>p(!0),children:[h.jsx("span",{className:"settings-row-icon",children:"💒"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Events"}),h.jsxs("div",{className:"settings-row-sub",children:[t.groom," & ",t.bride]})]}),h.jsx("span",{style:{color:"var(--light)",fontSize:18},children:"›"})]}),h.jsxs("div",{className:`settings-row ${L?"":"disabled"}`,onClick:()=>L&&u(!0),children:[h.jsx("span",{className:"settings-row-icon",children:"💑"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Jemput Pasangan"}),h.jsx("div",{className:"settings-row-sub",children:L?"Jemput pasangan untuk edit bersama":"Hanya pemilik boleh menjemput"})]}),h.jsx("span",{style:{color:"var(--light)",fontSize:18},children:"›"})]})]}),h.jsxs("div",{className:"settings-section",children:[h.jsx("div",{style:{padding:"14px 18px 6px"},children:h.jsx("div",{style:{fontSize:12,fontWeight:700,color:"var(--mid)",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Team"})}),(t.team||[]).map((m,w)=>h.jsxs("div",{className:"settings-row no-tap",children:[h.jsx("div",{className:"team-avatar",children:(m.name||m.email)[0].toUpperCase()}),h.jsxs("div",{className:"settings-row-info",children:[h.jsxs("div",{className:"settings-row-title",style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:4},children:[m.email," ",m.uid===e.uid&&h.jsx("span",{style:{fontSize:11,color:"var(--mid)"},children:"(kamu)"}),h.jsx("span",{className:"team-badge",children:m.role==="owner"?"Owner":"Partner"})]}),h.jsx("div",{className:"settings-row-sub",children:m.role==="owner"?"Pemilik akaun":`Joined ${Co(m.joinedAt)}`})]})]},w)),t.pendingPartner&&!(t.team||[]).find(m=>m.email===t.pendingPartner)&&h.jsxs("div",{className:"settings-row no-tap",style:{opacity:.55},children:[h.jsx("div",{className:"team-avatar",style:{background:"#FFF3E0",color:"#E65100"},children:"⏳"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:t.pendingPartner}),h.jsx("div",{className:"settings-row-sub",children:"Jemputan belum diterima"})]})]})]}),h.jsxs("div",{className:"settings-section",children:[h.jsxs("div",{className:"settings-row no-tap",children:[h.jsx("span",{className:"settings-row-icon",children:"💱"}),h.jsx("div",{className:"settings-row-info",children:h.jsx("div",{className:"settings-row-title",children:"Mata Wang"})}),h.jsx("select",{className:"currency-select",value:t.currency||"MYR",onChange:async m=>{await yr(Pe(le,"weddings",t.id),{currency:m.target.value}),r({...t,currency:m.target.value})},children:["MYR","SGD","USD","GBP"].map(m=>h.jsx("option",{children:m},m))})]}),h.jsxs("div",{className:"settings-row no-tap",style:{cursor:"default"},children:[h.jsx("span",{className:"settings-row-icon",children:s?"🌙":"☀️"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Dark Mode"}),h.jsx("div",{className:"settings-row-sub",children:s?"Gelap aktif":"Cerah aktif"})]}),h.jsx("div",{onClick:()=>o(m=>!m),style:{width:46,height:26,background:s?"var(--rose)":"var(--border)",borderRadius:13,position:"relative",cursor:"pointer",transition:"background 0.3s",flexShrink:0},children:h.jsx("div",{style:{position:"absolute",top:3,left:s?22:3,width:20,height:20,background:"white",borderRadius:"50%",transition:"left 0.3s",boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}})})]}),h.jsxs("div",{className:"settings-row",onClick:_,children:[h.jsx("span",{className:"settings-row-icon",children:"📋"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Activity Log"}),h.jsx("div",{className:"settings-row-sub",children:"Semua perubahan oleh kamu & pasangan"})]}),h.jsx("span",{style:{color:"var(--light)",fontSize:18},children:"›"})]}),h.jsxs("div",{className:"settings-row no-tap",children:[h.jsx("span",{className:"settings-row-icon",children:"👤"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Akaun"}),h.jsx("div",{className:"settings-row-sub",children:e.email})]})]})]}),h.jsx("button",{className:"logout-btn",onClick:i,children:"Log Keluar"}),h.jsx("div",{className:"info-text",children:"Ada masalah? support@kahwin-app.my"}),l&&h.jsx(FN,{wedding:t,user:e,onClose:()=>u(!1)}),d&&h.jsx("div",{className:"modal-overlay",onClick:m=>m.target===m.currentTarget&&p(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Edit Maklumat Majlis"}),h.jsx("div",{className:"field-label",children:"Pengantin Lelaki"}),h.jsx("input",{className:"field-input",value:g,onChange:m=>y(m.target.value)}),h.jsx("div",{className:"field-label",children:"Pengantin Perempuan"}),h.jsx("input",{className:"field-input",value:S,onChange:m=>R(m.target.value)}),h.jsx("div",{className:"field-label",children:"Tarikh Majlis"}),h.jsx("input",{className:"field-input",type:"date",value:b,onChange:m=>D(m.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>p(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:O,disabled:E,children:E?"...":"Simpan"})]})]})}),I!==null&&h.jsx("div",{className:"modal-overlay",onClick:m=>m.target===m.currentTarget&&A(null),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Activity Log"}),I.length===0?h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"📋"}),h.jsx("div",{className:"empty-title",children:"Tiada aktiviti"})]}):I.slice(0,40).map((m,w)=>h.jsxs("div",{style:{padding:"10px 0",borderBottom:"1px solid var(--border)"},children:[h.jsx("div",{style:{fontSize:13,fontWeight:600,color:"var(--dark)"},children:m.action}),h.jsxs("div",{style:{fontSize:11,color:"var(--mid)",marginTop:3},children:[m.byName," · ",Co(m.time)]})]},w)),h.jsx("button",{className:"btn-primary",style:{marginTop:16},onClick:()=>A(null),children:"Tutup"})]})})]})}function YN(){const[t,e]=B.useState(()=>localStorage.getItem("kahwin_dark")==="1"),[n,r]=B.useState("loading"),[i,s]=B.useState(null),[o,l]=B.useState(null),[u,d]=B.useState(null),[p,g]=B.useState("home"),[y,S]=B.useState([]),[R,b]=B.useState([]),[D,E]=B.useState([]),[T,I]=B.useState([]),[A,L]=B.useState(""),[O,_]=B.useState([]),[m,w]=B.useState([]);B.useEffect(()=>{il(t),localStorage.setItem("kahwin_dark",t?"1":"0")},[t]),B.useEffect(()=>aC(Lr,async ee=>{if(!ee){r("unauth");return}s(ee);const M=await Cs(Pe(le,"users",ee.uid));if(M.exists()&&M.data().weddingId){const X=await Cs(Pe(le,"weddings",M.data().weddingId));if(X.exists()){l({id:M.data().weddingId,...X.data()}),r("app");return}}const W=await Cs(Pe(le,"invites",ee.email.replace(/\./g,"_")));W.exists()&&W.data().status==="pending"&&d(W.data()),r("setup")}),[]),B.useEffect(()=>{if(!o)return;const $=`weddings/${o.id}`,ee=[br(Pe(le,"weddings",o.id),M=>{M.exists()&&l(W=>({...W,...M.data()}))}),br(Jt(le,$,"expenses"),M=>S(M.docs.map(W=>({id:W.id,...W.data()})))),br(Jt(le,$,"checklist"),M=>b(M.docs.map(W=>({id:W.id,...W.data()})))),br(Jt(le,$,"guests"),M=>E(M.docs.map(W=>({id:W.id,...W.data()})))),br(Jt(le,$,"savings"),M=>I(M.docs.map(W=>({id:W.id,...W.data()})))),br(Jt(le,$,"timeline"),M=>_(M.docs.map(W=>({id:W.id,...W.data()})))),br(Jt(le,$,"inspirasi"),M=>w(M.docs.map(W=>({id:W.id,...W.data()}))))];return Cs(Pe(le,$,"notes","main")).then(M=>M.exists()&&L(M.data().text||"")).catch(()=>{}),()=>ee.forEach(M=>M())},[o==null?void 0:o.id]);async function x(){const $=await Cs(Pe(le,"weddings",u.weddingId));if(!$.exists())return;const ee={uid:i.uid,email:i.email,name:i.displayName||i.email,role:"partner",joinedAt:new Date().toISOString()};await yr(Pe(le,"weddings",u.weddingId),{team:[...$.data().team||[],ee]}),await Ao(Pe(le,"users",i.uid),{weddingId:u.weddingId,email:i.email,name:i.displayName||i.email},{merge:!0}),await yr(Pe(le,"invites",i.email.replace(/\./g,"_")),{status:"accepted"}),await Lc(Jt(le,"weddings",u.weddingId,"activityLog"),{action:`${i.displayName||i.email} joined as partner`,byName:i.displayName||i.email,time:new Date().toISOString()}),l({id:u.weddingId,...$.data(),team:[...$.data().team||[],ee]}),d(null),r("app")}const C=B.useCallback(async $=>{o!=null&&o.id&&await Lc(Jt(le,"weddings",o.id,"activityLog"),{action:$,byName:i.displayName||i.email,byUid:i.uid,time:new Date().toISOString()})},[o==null?void 0:o.id,i]),P=B.useCallback(async($,ee)=>{const M=await Lc(Jt(le,"weddings",o.id,$),{...ee,addedBy:i.displayName||i.email,addedByUid:i.uid});return C(`Tambah ${$}: ${ee.name||ee.task||ee.desc||ee.label||""}`),M},[o==null?void 0:o.id,i,C]),k=B.useCallback(async($,ee)=>{await nR(Pe(le,"weddings",o.id,$,ee)),C(`Padam item dalam ${$}`)}),Fe=B.useCallback(async($,ee,M)=>{await yr(Pe(le,"weddings",o.id,$,ee),M)}),fn={expenses:"Perbelanjaan & Bajet",checklist:"Checklist Tugasan",guests:"Senarai Tetamu",savings:"Tabung Kahwin",timeline:"Timeline",notes:"Nota",inspirasi:"Inspirasi"};return n==="loading"?h.jsxs("div",{className:"loading-wrap",children:[h.jsx("div",{className:"spinner"}),h.jsx("p",{style:{color:"var(--mid)",fontFamily:"DM Sans,sans-serif",fontSize:14},children:"Memuatkan..."})]}):n==="unauth"?h.jsx(jN,{onAuth:$=>{s($),r("loading")},dark:t}):n==="setup"&&u?h.jsxs("div",{className:"setup-wrap",children:[h.jsx("div",{style:{fontSize:52,marginBottom:14},children:"💑"}),h.jsx("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:26,color:"var(--dark)",textAlign:"center",marginBottom:8},children:"Jemputan Diterima!"}),h.jsx("p",{style:{fontSize:14,color:"var(--mid)",marginBottom:26,textAlign:"center"},children:"Kamu dijemput untuk join wedding planning"}),h.jsxs("div",{className:"setup-card",children:[h.jsxs("div",{style:{background:"var(--rose-pale)",borderRadius:14,padding:16,marginBottom:20,textAlign:"center"},children:[h.jsxs("div",{style:{fontSize:18,fontWeight:700,color:"var(--dark)",fontFamily:"Playfair Display,serif"},children:[u.weddingGroom," & ",u.weddingBride]}),h.jsxs("div",{style:{fontSize:13,color:"var(--mid)",marginTop:6},children:["Dijemput oleh ",u.fromName]})]}),h.jsx("button",{className:"btn-primary",onClick:x,children:"Terima Jemputan 💍"}),h.jsx("button",{style:{width:"100%",padding:12,background:"transparent",border:"none",color:"var(--mid)",fontSize:14,cursor:"pointer",marginTop:6,fontFamily:"DM Sans,sans-serif"},onClick:()=>d(null),children:"Buat wedding sendiri"})]})]}):n==="setup"?h.jsx(MN,{user:i,onDone:$=>{l($),r("app")}}):o?p==="settings"?h.jsx(QN,{wedding:o,user:i,onBack:()=>g("home"),onUpdate:l,dark:t,setDark:$=>{e($),il($)},onSignOut:async()=>{await lC(Lr),l(null),s(null),r("unauth"),g("home")}}):h.jsxs("div",{className:"app-wrap",children:[h.jsxs("div",{className:"app-header",children:[p!=="home"?h.jsx("button",{onClick:()=>g("home"),style:{background:"none",border:"none",cursor:"pointer",fontSize:24,color:"var(--mid)",padding:"0 4px 0 0"},children:"‹"}):h.jsx("span",{className:"header-logo",children:"💍"}),h.jsxs("div",{className:"header-info",children:[h.jsx("h1",{style:{color:"var(--dark)"},children:p==="home"?"Kahwin":fn[p]}),p==="home"&&h.jsxs("p",{children:[o.groom," & ",o.bride]})]}),h.jsxs("div",{className:"header-right",children:[(o.team||[]).length>1&&h.jsx("span",{title:"Joint aktif",style:{fontSize:18},children:"💑"}),h.jsx("button",{className:"dark-toggle",onClick:()=>{const $=!t;e($),il($)},children:t?"☀️":"🌙"}),h.jsx("div",{className:"avatar-sm",onClick:()=>g("settings"),children:(i.displayName||i.email)[0].toUpperCase()})]})]}),h.jsxs("div",{className:"page-content",children:[p==="home"&&h.jsx(BN,{wedding:o,onNav:g,expenses:y,checklist:R,guests:D,onUpdateWedding:l}),p==="expenses"&&h.jsx(zN,{expenses:y,onAdd:$=>P("expenses",$),onDelete:$=>k("expenses",$),onToggle:($,ee)=>Fe("expenses",$,{status:ee==="paid"?"unpaid":"paid"}),currency:o.currency||"MYR"}),p==="checklist"&&h.jsx($N,{checklist:R,onAdd:$=>P("checklist",$),onToggle:($,ee)=>Fe("checklist",$,{done:!ee}),onDelete:$=>k("checklist",$)}),p==="guests"&&h.jsx(WN,{guests:D,onAdd:$=>P("guests",$),onDelete:$=>k("guests",$),onRSVP:($,ee)=>Fe("guests",$,{rsvp:ee})}),p==="savings"&&h.jsx(HN,{savings:T,onAdd:$=>P("savings",$),onDelete:$=>k("savings",$),wedding:o}),p==="timeline"&&h.jsx(qN,{timeline:O,onAdd:$=>P("timeline",$),onDelete:$=>k("timeline",$),onEdit:($,ee)=>Fe("timeline",$,ee),wedding:o}),p==="notes"&&h.jsx(GN,{notes:A,onSave:async $=>{await Ao(Pe(le,"weddings",o.id,"notes","main"),{text:$}),L($)}}),p==="inspirasi"&&h.jsx(KN,{inspirasi:m,onAdd:$=>P("inspirasi",$),onDelete:$=>k("inspirasi",$),onEdit:($,ee)=>Fe("inspirasi",$,ee),weddingId:o.id})]}),h.jsxs("div",{className:"bottom-nav",children:[h.jsxs("button",{className:`nav-btn ${p==="checklist"?"active":""}`,onClick:()=>g("checklist"),children:[h.jsx("span",{className:"nav-icon",children:"✅"}),h.jsx("span",{className:"nav-label",children:"Checklist"})]}),h.jsxs("button",{className:`nav-btn ${p==="expenses"?"active":""}`,onClick:()=>g("expenses"),children:[h.jsx("span",{className:"nav-icon",children:"💸"}),h.jsx("span",{className:"nav-label",children:"Belanja"})]}),h.jsx("button",{className:"nav-home-btn",onClick:()=>g("home"),children:"🏠"}),h.jsxs("button",{className:`nav-btn ${p==="guests"?"active":""}`,onClick:()=>g("guests"),children:[h.jsx("span",{className:"nav-icon",children:"👥"}),h.jsx("span",{className:"nav-label",children:"Tetamu"})]}),h.jsxs("button",{className:`nav-btn ${p==="settings"?"active":""}`,onClick:()=>g("settings"),children:[h.jsx("span",{className:"nav-icon",children:"⚙️"}),h.jsx("span",{className:"nav-label",children:"Tetapan"})]})]})]}):h.jsx("div",{className:"loading-wrap",children:h.jsx("div",{className:"spinner"})})}il(localStorage.getItem("kahwin_dark")==="1");Bc.createRoot(document.getElementById("root")).render(h.jsx(pT.StrictMode,{children:h.jsx(YN,{})}));
