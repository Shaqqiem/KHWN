(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iv={exports:{}},Ll={},sv={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),oE=Symbol.for("react.portal"),aE=Symbol.for("react.fragment"),lE=Symbol.for("react.strict_mode"),uE=Symbol.for("react.profiler"),cE=Symbol.for("react.provider"),dE=Symbol.for("react.context"),hE=Symbol.for("react.forward_ref"),fE=Symbol.for("react.suspense"),pE=Symbol.for("react.memo"),mE=Symbol.for("react.lazy"),bp=Symbol.iterator;function gE(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},av=Object.assign,lv={};function Hi(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||ov}Hi.prototype.isReactComponent={};Hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uv(){}uv.prototype=Hi.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||ov}var $d=Bd.prototype=new uv;$d.constructor=Bd;av($d,Hi.prototype);$d.isPureReactComponent=!0;var Dp=Array.isArray,cv=Object.prototype.hasOwnProperty,Wd={current:null},dv={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cv.call(e,r)&&!dv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:t,key:s,ref:o,props:i,_owner:Wd.current}}function vE(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function yE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Op=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yE(""+t.key):e.toString(36)}function xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case oE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bu(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(Op,"$&/")+"/"),xa(i,e,n,"",function(d){return d})):i!=null&&(Hd(i)&&(i=vE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Op,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Bu(s,l);o+=xa(s,e,n,u,i)}else if(u=gE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Bu(s,l++),o+=xa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function na(t,e,n){if(t==null)return t;var r=[],i=0;return xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _E(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},ka={transition:null},wE={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:ka,ReactCurrentOwner:Wd};function fv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:na,forEach:function(t,e,n){na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return na(t,function(){e++}),e},toArray:function(t){return na(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Hi;te.Fragment=aE;te.Profiler=uE;te.PureComponent=Bd;te.StrictMode=lE;te.Suspense=fE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wE;te.act=fv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=av({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)cv.call(e,u)&&!dv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:wo,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:dE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cE,_context:t},t.Consumer=t};te.createElement=hv;te.createFactory=function(t){var e=hv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:hE,render:t}};te.isValidElement=Hd;te.lazy=function(t){return{$$typeof:mE,_payload:{_status:-1,_result:t},_init:_E}};te.memo=function(t,e){return{$$typeof:pE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};te.unstable_act=fv;te.useCallback=function(t,e){return dt.current.useCallback(t,e)};te.useContext=function(t){return dt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};te.useEffect=function(t,e){return dt.current.useEffect(t,e)};te.useId=function(){return dt.current.useId()};te.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return dt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};te.useRef=function(t){return dt.current.useRef(t)};te.useState=function(t){return dt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return dt.current.useTransition()};te.version="18.3.1";sv.exports=te;var z=sv.exports;const EE=sE(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TE=z,IE=Symbol.for("react.element"),SE=Symbol.for("react.fragment"),xE=Object.prototype.hasOwnProperty,kE=TE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AE={key:!0,ref:!0,__self:!0,__source:!0};function pv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xE.call(e,r)&&!AE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:IE,type:t,key:s,ref:o,props:i,_owner:kE.current}}Ll.Fragment=SE;Ll.jsx=pv;Ll.jsxs=pv;iv.exports=Ll;var h=iv.exports,kc={},mv={exports:{}},kt={},gv={exports:{}},vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,W){var J=M.length;M.push(W);e:for(;0<J;){var _e=J-1>>>1,de=M[_e];if(0<i(de,W))M[_e]=W,M[J]=de,J=_e;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var W=M[0],J=M.pop();if(J!==W){M[0]=J;e:for(var _e=0,de=M.length,ke=de>>>1;_e<ke;){var an=2*(_e+1)-1,ln=M[an],un=an+1,cn=M[un];if(0>i(ln,J))un<de&&0>i(cn,ln)?(M[_e]=cn,M[un]=J,_e=un):(M[_e]=ln,M[an]=J,_e=an);else if(un<de&&0>i(cn,J))M[_e]=cn,M[un]=J,_e=un;else break e}}return W}function i(M,W){var J=M.sortIndex-W.sortIndex;return J!==0?J:M.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,m=null,v=3,k=!1,A=!1,b=!1,V=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(M){for(var W=n(d);W!==null;){if(W.callback===null)r(d);else if(W.startTime<=M)r(d),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(d)}}function R(M){if(b=!1,S(M),!A)if(n(u)!==null)A=!0,$(L);else{var W=n(d);W!==null&&ee(R,W.startTime-M)}}function L(M,W){A=!1,b&&(b=!1,E(g),g=-1),k=!0;var J=v;try{for(S(W),m=n(u);m!==null&&(!(m.expirationTime>W)||M&&!C());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,v=m.priorityLevel;var de=_e(m.expirationTime<=W);W=t.unstable_now(),typeof de=="function"?m.callback=de:m===n(u)&&r(u),S(W)}else r(u);m=n(u)}if(m!==null)var ke=!0;else{var an=n(d);an!==null&&ee(R,an.startTime-W),ke=!1}return ke}finally{m=null,v=J,k=!1}}var D=!1,_=null,g=-1,w=5,x=-1;function C(){return!(t.unstable_now()-x<w)}function P(){if(_!==null){var M=t.unstable_now();x=M;var W=!0;try{W=_(!0,M)}finally{W?I():(D=!1,_=null)}}else D=!1}var I;if(typeof T=="function")I=function(){T(P)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,on=je.port2;je.port1.onmessage=P,I=function(){on.postMessage(null)}}else I=function(){V(P,0)};function $(M){_=M,D||(D=!0,I())}function ee(M,W){g=V(function(){M(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){A||k||(A=!0,$(L))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(M){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var J=v;v=W;try{return M()}finally{v=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var J=v;v=M;try{return W()}finally{v=J}},t.unstable_scheduleCallback=function(M,W,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,M){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=J+de,M={id:p++,callback:W,priorityLevel:M,startTime:J,expirationTime:de,sortIndex:-1},J>_e?(M.sortIndex=J,e(d,M),n(u)===null&&M===n(d)&&(b?(E(g),g=-1):b=!0,ee(R,J-_e))):(M.sortIndex=de,e(u,M),A||k||(A=!0,$(L))),M},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(M){var W=v;return function(){var J=v;v=W;try{return M.apply(this,arguments)}finally{v=J}}}})(vv);gv.exports=vv;var CE=gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE=z,xt=CE;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yv=new Set,qs={};function Qr(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(qs[t]=e,t=0;t<e.length;t++)yv.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=Object.prototype.hasOwnProperty,PE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},Lp={};function NE(t){return Ac.call(Lp,t)?!0:Ac.call(Vp,t)?!1:PE.test(t)?Lp[t]=!0:(Vp[t]=!0,!1)}function bE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DE(t,e,n,r){if(e===null||typeof e>"u"||bE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,Kd);Ke[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,Kd);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,Kd);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DE(e,n,i,r)&&(n=null),r||i===null?NE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=RE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),ai=Symbol.for("react.portal"),li=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),wv=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Rc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),Ev=Symbol.for("react.offscreen"),jp=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,$u;function Ts(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Wu=!1;function Hu(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function OE(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function Nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case li:return"Fragment";case ai:return"Portal";case Cc:return"Profiler";case Qd:return"StrictMode";case Rc:return"Suspense";case Pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wv:return(t.displayName||"Context")+".Consumer";case _v:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Nc(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return Nc(t(e))}catch{}}return null}function VE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nc(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LE(t){var e=Tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ia(t){t._valueTracker||(t._valueTracker=LE(t))}function Iv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Tv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bc(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sv(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function Dc(t,e){Sv(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oc(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oc(t,e,n){(e!=="number"||Ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function _i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Is(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function xv(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sa,Av=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jE=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(t){jE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bs[e]=bs[t]})});function Cv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bs.hasOwnProperty(t)&&bs[t]?(""+e).trim():e+"px"}function Rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ME=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jc(t,e){if(e){if(ME[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Mc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uc=null,wi=null,Ei=null;function Bp(t){if(t=Io(t)){if(typeof Uc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=zl(e),Uc(t.stateNode,t.type,e))}}function Pv(t){wi?Ei?Ei.push(t):Ei=[t]:wi=t}function Nv(){if(wi){var t=wi,e=Ei;if(Ei=wi=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function bv(t,e){return t(e)}function Dv(){}var qu=!1;function Ov(t,e,n){if(qu)return t(e,n);qu=!0;try{return bv(t,e,n)}finally{qu=!1,(wi!==null||Ei!==null)&&(Dv(),Nv())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var zc=!1;if(Sn)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){zc=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{zc=!1}function FE(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Ds=!1,Ga=null,Qa=!1,Bc=null,UE={onError:function(t){Ds=!0,Ga=t}};function zE(t,e,n,r,i,s,o,l,u){Ds=!1,Ga=null,FE.apply(UE,arguments)}function BE(t,e,n,r,i,s,o,l,u){if(zE.apply(this,arguments),Ds){if(Ds){var d=Ga;Ds=!1,Ga=null}else throw Error(U(198));Qa||(Qa=!0,Bc=d)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $p(t){if(Yr(t)!==t)throw Error(U(188))}function $E(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $p(i),t;if(s===r)return $p(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Lv(t){return t=$E(t),t!==null?jv(t):null}function jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jv(t);if(e!==null)return e;t=t.sibling}return null}var Mv=xt.unstable_scheduleCallback,Wp=xt.unstable_cancelCallback,WE=xt.unstable_shouldYield,HE=xt.unstable_requestPaint,Re=xt.unstable_now,qE=xt.unstable_getCurrentPriorityLevel,Zd=xt.unstable_ImmediatePriority,Fv=xt.unstable_UserBlockingPriority,Ya=xt.unstable_NormalPriority,KE=xt.unstable_LowPriority,Uv=xt.unstable_IdlePriority,jl=null,Jt=null;function GE(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:JE,QE=Math.log,YE=Math.LN2;function JE(t){return t>>>=0,t===0?32:31-(QE(t)/YE|0)|0}var oa=64,aa=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ss(l):(s&=o,s!==0&&(r=Ss(s)))}else o=n&~i,o!==0?r=Ss(o):s!==0&&(r=Ss(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function XE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=XE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zv(){var t=oa;return oa<<=1,!(oa&4194240)&&(oa=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function eT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function Bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $v,th,Wv,Hv,qv,Wc=!1,la=[],Zn=null,er=null,tr=null,Qs=new Map,Ys=new Map,Hn=[],tT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Io(e),e!==null&&th(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nT(t,e,n,r,i){switch(e){case"focusin":return Zn=ps(Zn,t,e,n,r,i),!0;case"dragenter":return er=ps(er,t,e,n,r,i),!0;case"mouseover":return tr=ps(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qs.set(s,ps(Qs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ys.set(s,ps(Ys.get(s)||null,t,e,n,r,i)),!0}return!1}function Kv(t){var e=Pr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Vv(n),e!==null){t.blockedOn=e,qv(t.priority,function(){Wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fc=r,n.target.dispatchEvent(r),Fc=null}else return e=Io(n),e!==null&&th(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){Aa(t)&&n.delete(e)}function rT(){Wc=!1,Zn!==null&&Aa(Zn)&&(Zn=null),er!==null&&Aa(er)&&(er=null),tr!==null&&Aa(tr)&&(tr=null),Qs.forEach(qp),Ys.forEach(qp)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Wc||(Wc=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,rT)))}function Js(t){function e(i){return ms(i,t)}if(0<la.length){ms(la[0],t);for(var n=1;n<la.length;n++){var r=la[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&ms(Zn,t),er!==null&&ms(er,t),tr!==null&&ms(tr,t),Qs.forEach(e),Ys.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Kv(n),n.blockedOn===null&&Hn.shift()}var Ti=Dn.ReactCurrentBatchConfig,Xa=!0;function iT(t,e,n,r){var i=ue,s=Ti.transition;Ti.transition=null;try{ue=1,nh(t,e,n,r)}finally{ue=i,Ti.transition=s}}function sT(t,e,n,r){var i=ue,s=Ti.transition;Ti.transition=null;try{ue=4,nh(t,e,n,r)}finally{ue=i,Ti.transition=s}}function nh(t,e,n,r){if(Xa){var i=Hc(t,e,n,r);if(i===null)rc(t,e,r,Za,n),Hp(t,r);else if(nT(i,t,e,n,r))r.stopPropagation();else if(Hp(t,r),e&4&&-1<tT.indexOf(t)){for(;i!==null;){var s=Io(i);if(s!==null&&$v(s),s=Hc(t,e,n,r),s===null&&rc(t,e,r,Za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rc(t,e,r,null,n)}}var Za=null;function Hc(t,e,n,r){if(Za=null,t=Xd(r),t=Pr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Za=t,null}function Gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qE()){case Zd:return 1;case Fv:return 4;case Ya:case KE:return 16;case Uv:return 536870912;default:return 16}default:return 16}}var Yn=null,rh=null,Ca=null;function Qv(){if(Ca)return Ca;var t,e=rh,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ca=i.slice(t,1<r?1-r:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function Kp(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ua:Kp,this.isPropagationStopped=Kp,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ih=At(qi),To=Te({},qi,{view:0,detail:0}),oT=At(To),Gu,Qu,gs,Ml=Te({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(Gu=t.screenX-gs.screenX,Qu=t.screenY-gs.screenY):Qu=Gu=0,gs=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Gp=At(Ml),aT=Te({},Ml,{dataTransfer:0}),lT=At(aT),uT=Te({},To,{relatedTarget:0}),Yu=At(uT),cT=Te({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),dT=At(cT),hT=Te({},qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fT=At(hT),pT=Te({},qi,{data:0}),Qp=At(pT),mT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vT[t])?!!e[t]:!1}function sh(){return yT}var _T=Te({},To,{key:function(t){if(t.key){var e=mT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sh,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wT=At(_T),ET=Te({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=At(ET),TT=Te({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sh}),IT=At(TT),ST=Te({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),xT=At(ST),kT=Te({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AT=At(kT),CT=[9,13,27,32],oh=Sn&&"CompositionEvent"in window,Os=null;Sn&&"documentMode"in document&&(Os=document.documentMode);var RT=Sn&&"TextEvent"in window&&!Os,Yv=Sn&&(!oh||Os&&8<Os&&11>=Os),Jp=" ",Xp=!1;function Jv(t,e){switch(t){case"keyup":return CT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function PT(t,e){switch(t){case"compositionend":return Xv(e);case"keypress":return e.which!==32?null:(Xp=!0,Jp);case"textInput":return t=e.data,t===Jp&&Xp?null:t;default:return null}}function NT(t,e){if(ui)return t==="compositionend"||!oh&&Jv(t,e)?(t=Qv(),Ca=rh=Yn=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yv&&e.locale!=="ko"?null:e.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bT[t.type]:e==="textarea"}function Zv(t,e,n,r){Pv(r),e=el(e,"onChange"),0<e.length&&(n=new ih("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vs=null,Xs=null;function DT(t){cy(t,0)}function Fl(t){var e=hi(t);if(Iv(e))return t}function OT(t,e){if(t==="change")return e}var ey=!1;if(Sn){var Ju;if(Sn){var Xu="oninput"in document;if(!Xu){var em=document.createElement("div");em.setAttribute("oninput","return;"),Xu=typeof em.oninput=="function"}Ju=Xu}else Ju=!1;ey=Ju&&(!document.documentMode||9<document.documentMode)}function tm(){Vs&&(Vs.detachEvent("onpropertychange",ty),Xs=Vs=null)}function ty(t){if(t.propertyName==="value"&&Fl(Xs)){var e=[];Zv(e,Xs,t,Xd(t)),Ov(DT,e)}}function VT(t,e,n){t==="focusin"?(tm(),Vs=e,Xs=n,Vs.attachEvent("onpropertychange",ty)):t==="focusout"&&tm()}function LT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Xs)}function jT(t,e){if(t==="click")return Fl(e)}function MT(t,e){if(t==="input"||t==="change")return Fl(e)}function FT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:FT;function Zs(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ac.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rm(t,e){var n=nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function ny(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ny(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ry(){for(var t=window,e=Ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ka(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UT(t){var e=ry(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ny(n.ownerDocument.documentElement,n)){if(r!==null&&ah(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rm(n,s);var o=rm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zT=Sn&&"documentMode"in document&&11>=document.documentMode,ci=null,qc=null,Ls=null,Kc=!1;function im(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kc||ci==null||ci!==Ka(r)||(r=ci,"selectionStart"in r&&ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ls&&Zs(Ls,r)||(Ls=r,r=el(qc,"onSelect"),0<r.length&&(e=new ih("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ci)))}function ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var di={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},Zu={},iy={};Sn&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Ul(t){if(Zu[t])return Zu[t];if(!di[t])return t;var e=di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iy)return Zu[t]=e[n];return t}var sy=Ul("animationend"),oy=Ul("animationiteration"),ay=Ul("animationstart"),ly=Ul("transitionend"),uy=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){uy.set(t,e),Qr(e,[t])}for(var ec=0;ec<sm.length;ec++){var tc=sm[ec],BT=tc.toLowerCase(),$T=tc[0].toUpperCase()+tc.slice(1);vr(BT,"on"+$T)}vr(sy,"onAnimationEnd");vr(oy,"onAnimationIteration");vr(ay,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(ly,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WT=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BE(r,e,void 0,t),t.currentTarget=null}function cy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;om(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;om(i,l,d),s=u}}}if(Qa)throw t=Bc,Qa=!1,Bc=null,t}function me(t,e){var n=e[Xc];n===void 0&&(n=e[Xc]=new Set);var r=t+"__bubble";n.has(r)||(dy(e,t,2,!1),n.add(r))}function nc(t,e,n){var r=0;e&&(r|=4),dy(n,t,r,e)}var da="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[da]){t[da]=!0,yv.forEach(function(n){n!=="selectionchange"&&(WT.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[da]||(e[da]=!0,nc("selectionchange",!1,e))}}function dy(t,e,n,r){switch(Gv(e)){case 1:var i=iT;break;case 4:i=sT;break;default:i=nh}n=i.bind(null,e,n,t),i=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ov(function(){var d=s,p=Xd(n),m=[];e:{var v=uy.get(t);if(v!==void 0){var k=ih,A=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":k=wT;break;case"focusin":A="focus",k=Yu;break;case"focusout":A="blur",k=Yu;break;case"beforeblur":case"afterblur":k=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=lT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=IT;break;case sy:case oy:case ay:k=dT;break;case ly:k=xT;break;case"scroll":k=oT;break;case"wheel":k=AT;break;case"copy":case"cut":case"paste":k=fT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Yp}var b=(e&4)!==0,V=!b&&t==="scroll",E=b?v!==null?v+"Capture":null:v;b=[];for(var T=d,S;T!==null;){S=T;var R=S.stateNode;if(S.tag===5&&R!==null&&(S=R,E!==null&&(R=Gs(T,E),R!=null&&b.push(to(T,R,S)))),V)break;T=T.return}0<b.length&&(v=new k(v,A,null,n,p),m.push({event:v,listeners:b}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==Fc&&(A=n.relatedTarget||n.fromElement)&&(Pr(A)||A[xn]))break e;if((k||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,k?(A=n.relatedTarget||n.toElement,k=d,A=A?Pr(A):null,A!==null&&(V=Yr(A),A!==V||A.tag!==5&&A.tag!==6)&&(A=null)):(k=null,A=d),k!==A)){if(b=Gp,R="onMouseLeave",E="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(b=Yp,R="onPointerLeave",E="onPointerEnter",T="pointer"),V=k==null?v:hi(k),S=A==null?v:hi(A),v=new b(R,T+"leave",k,n,p),v.target=V,v.relatedTarget=S,R=null,Pr(p)===d&&(b=new b(E,T+"enter",A,n,p),b.target=S,b.relatedTarget=V,R=b),V=R,k&&A)t:{for(b=k,E=A,T=0,S=b;S;S=ri(S))T++;for(S=0,R=E;R;R=ri(R))S++;for(;0<T-S;)b=ri(b),T--;for(;0<S-T;)E=ri(E),S--;for(;T--;){if(b===E||E!==null&&b===E.alternate)break t;b=ri(b),E=ri(E)}b=null}else b=null;k!==null&&am(m,v,k,b,!1),A!==null&&V!==null&&am(m,V,A,b,!0)}}e:{if(v=d?hi(d):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var L=OT;else if(Zp(v))if(ey)L=MT;else{L=LT;var D=VT}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(L=jT);if(L&&(L=L(t,d))){Zv(m,L,n,p);break e}D&&D(t,v,d),t==="focusout"&&(D=v._wrapperState)&&D.controlled&&v.type==="number"&&Oc(v,"number",v.value)}switch(D=d?hi(d):window,t){case"focusin":(Zp(D)||D.contentEditable==="true")&&(ci=D,qc=d,Ls=null);break;case"focusout":Ls=qc=ci=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,im(m,n,p);break;case"selectionchange":if(zT)break;case"keydown":case"keyup":im(m,n,p)}var _;if(oh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ui?Jv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Yv&&n.locale!=="ko"&&(ui||g!=="onCompositionStart"?g==="onCompositionEnd"&&ui&&(_=Qv()):(Yn=p,rh="value"in Yn?Yn.value:Yn.textContent,ui=!0)),D=el(d,g),0<D.length&&(g=new Qp(g,t,null,n,p),m.push({event:g,listeners:D}),_?g.data=_:(_=Xv(n),_!==null&&(g.data=_)))),(_=RT?PT(t,n):NT(t,n))&&(d=el(d,"onBeforeInput"),0<d.length&&(p=new Qp("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=_))}cy(m,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function el(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gs(t,n),s!=null&&r.unshift(to(t,s,i)),s=Gs(t,e),s!=null&&r.push(to(t,s,i))),t=t.return}return r}function ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Gs(n,s),u!=null&&o.unshift(to(n,u,l))):i||(u=Gs(n,s),u!=null&&o.push(to(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HT=/\r\n?/g,qT=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(HT,`
`).replace(qT,"")}function ha(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(U(425))}function tl(){}var Gc=null,Qc=null;function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,KT=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,GT=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(QT)}:Jc;function QT(t){setTimeout(function(){throw t})}function ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Js(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Js(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Ki,no="__reactProps$"+Ki,xn="__reactContainer$"+Ki,Xc="__reactEvents$"+Ki,YT="__reactListeners$"+Ki,JT="__reactHandles$"+Ki;function Pr(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cm(t);t!==null;){if(n=t[Yt])return n;t=cm(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Yt]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function zl(t){return t[no]||null}var Zc=[],fi=-1;function yr(t){return{current:t}}function ge(t){0>fi||(t.current=Zc[fi],Zc[fi]=null,fi--)}function fe(t,e){fi++,Zc[fi]=t.current,t.current=e}var fr={},it=yr(fr),gt=yr(!1),Mr=fr;function Pi(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function nl(){ge(gt),ge(it)}function dm(t,e,n){if(it.current!==fr)throw Error(U(168));fe(it,e),fe(gt,n)}function hy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,VE(t)||"Unknown",i));return Te({},n,r)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Mr=it.current,fe(it,t),fe(gt,gt.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=hy(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,ge(gt),ge(it),fe(it,t)):ge(gt),fe(gt,n)}var pn=null,Bl=!1,sc=!1;function fy(t){pn===null?pn=[t]:pn.push(t)}function XT(t){Bl=!0,fy(t)}function _r(){if(!sc&&pn!==null){sc=!0;var t=0,e=ue;try{var n=pn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,Bl=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),Mv(Zd,_r),i}finally{ue=e,sc=!1}}return null}var pi=[],mi=0,il=null,sl=0,Ct=[],Rt=0,Fr=null,gn=1,vn="";function kr(t,e){pi[mi++]=sl,pi[mi++]=il,il=t,sl=e}function py(t,e,n){Ct[Rt++]=gn,Ct[Rt++]=vn,Ct[Rt++]=Fr,Fr=t;var r=gn;t=vn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-$t(e)+i|n<<i|r,vn=s+t}else gn=1<<s|n<<i|r,vn=t}function lh(t){t.return!==null&&(kr(t,1),py(t,1,0))}function uh(t){for(;t===il;)il=pi[--mi],pi[mi]=null,sl=pi[--mi],pi[mi]=null;for(;t===Fr;)Fr=Ct[--Rt],Ct[Rt]=null,vn=Ct[--Rt],Ct[Rt]=null,gn=Ct[--Rt],Ct[Rt]=null}var St=null,Tt=null,ve=!1,Ut=null;function my(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Tt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:gn,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Tt=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(ve){var e=Tt;if(e){var n=e;if(!fm(t,e)){if(ed(t))throw Error(U(418));e=nr(n.nextSibling);var r=St;e&&fm(t,e)?my(r,n):(t.flags=t.flags&-4097|2,ve=!1,St=t)}}else{if(ed(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,St=t}}}function pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function fa(t){if(t!==St)return!1;if(!ve)return pm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yc(t.type,t.memoizedProps)),e&&(e=Tt)){if(ed(t))throw gy(),Error(U(418));for(;e;)my(t,e),e=nr(e.nextSibling)}if(pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=St?nr(t.stateNode.nextSibling):null;return!0}function gy(){for(var t=Tt;t;)t=nr(t.nextSibling)}function Ni(){Tt=St=null,ve=!1}function ch(t){Ut===null?Ut=[t]:Ut.push(t)}var ZT=Dn.ReactCurrentBatchConfig;function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function pa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mm(t){var e=t._init;return e(t._payload)}function vy(t){function e(E,T){if(t){var S=E.deletions;S===null?(E.deletions=[T],E.flags|=16):S.push(T)}}function n(E,T){if(!t)return null;for(;T!==null;)e(E,T),T=T.sibling;return null}function r(E,T){for(E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function i(E,T){return E=or(E,T),E.index=0,E.sibling=null,E}function s(E,T,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<T?(E.flags|=2,T):S):(E.flags|=2,T)):(E.flags|=1048576,T)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,T,S,R){return T===null||T.tag!==6?(T=hc(S,E.mode,R),T.return=E,T):(T=i(T,S),T.return=E,T)}function u(E,T,S,R){var L=S.type;return L===li?p(E,T,S.props.children,R,S.key):T!==null&&(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Bn&&mm(L)===T.type)?(R=i(T,S.props),R.ref=vs(E,T,S),R.return=E,R):(R=La(S.type,S.key,S.props,null,E.mode,R),R.ref=vs(E,T,S),R.return=E,R)}function d(E,T,S,R){return T===null||T.tag!==4||T.stateNode.containerInfo!==S.containerInfo||T.stateNode.implementation!==S.implementation?(T=fc(S,E.mode,R),T.return=E,T):(T=i(T,S.children||[]),T.return=E,T)}function p(E,T,S,R,L){return T===null||T.tag!==7?(T=Lr(S,E.mode,R,L),T.return=E,T):(T=i(T,S),T.return=E,T)}function m(E,T,S){if(typeof T=="string"&&T!==""||typeof T=="number")return T=hc(""+T,E.mode,S),T.return=E,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ra:return S=La(T.type,T.key,T.props,null,E.mode,S),S.ref=vs(E,null,T),S.return=E,S;case ai:return T=fc(T,E.mode,S),T.return=E,T;case Bn:var R=T._init;return m(E,R(T._payload),S)}if(Is(T)||hs(T))return T=Lr(T,E.mode,S,null),T.return=E,T;pa(E,T)}return null}function v(E,T,S,R){var L=T!==null?T.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return L!==null?null:l(E,T,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ra:return S.key===L?u(E,T,S,R):null;case ai:return S.key===L?d(E,T,S,R):null;case Bn:return L=S._init,v(E,T,L(S._payload),R)}if(Is(S)||hs(S))return L!==null?null:p(E,T,S,R,null);pa(E,S)}return null}function k(E,T,S,R,L){if(typeof R=="string"&&R!==""||typeof R=="number")return E=E.get(S)||null,l(T,E,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ra:return E=E.get(R.key===null?S:R.key)||null,u(T,E,R,L);case ai:return E=E.get(R.key===null?S:R.key)||null,d(T,E,R,L);case Bn:var D=R._init;return k(E,T,S,D(R._payload),L)}if(Is(R)||hs(R))return E=E.get(S)||null,p(T,E,R,L,null);pa(T,R)}return null}function A(E,T,S,R){for(var L=null,D=null,_=T,g=T=0,w=null;_!==null&&g<S.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var x=v(E,_,S[g],R);if(x===null){_===null&&(_=w);break}t&&_&&x.alternate===null&&e(E,_),T=s(x,T,g),D===null?L=x:D.sibling=x,D=x,_=w}if(g===S.length)return n(E,_),ve&&kr(E,g),L;if(_===null){for(;g<S.length;g++)_=m(E,S[g],R),_!==null&&(T=s(_,T,g),D===null?L=_:D.sibling=_,D=_);return ve&&kr(E,g),L}for(_=r(E,_);g<S.length;g++)w=k(_,E,g,S[g],R),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?g:w.key),T=s(w,T,g),D===null?L=w:D.sibling=w,D=w);return t&&_.forEach(function(C){return e(E,C)}),ve&&kr(E,g),L}function b(E,T,S,R){var L=hs(S);if(typeof L!="function")throw Error(U(150));if(S=L.call(S),S==null)throw Error(U(151));for(var D=L=null,_=T,g=T=0,w=null,x=S.next();_!==null&&!x.done;g++,x=S.next()){_.index>g?(w=_,_=null):w=_.sibling;var C=v(E,_,x.value,R);if(C===null){_===null&&(_=w);break}t&&_&&C.alternate===null&&e(E,_),T=s(C,T,g),D===null?L=C:D.sibling=C,D=C,_=w}if(x.done)return n(E,_),ve&&kr(E,g),L;if(_===null){for(;!x.done;g++,x=S.next())x=m(E,x.value,R),x!==null&&(T=s(x,T,g),D===null?L=x:D.sibling=x,D=x);return ve&&kr(E,g),L}for(_=r(E,_);!x.done;g++,x=S.next())x=k(_,E,g,x.value,R),x!==null&&(t&&x.alternate!==null&&_.delete(x.key===null?g:x.key),T=s(x,T,g),D===null?L=x:D.sibling=x,D=x);return t&&_.forEach(function(P){return e(E,P)}),ve&&kr(E,g),L}function V(E,T,S,R){if(typeof S=="object"&&S!==null&&S.type===li&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ra:e:{for(var L=S.key,D=T;D!==null;){if(D.key===L){if(L=S.type,L===li){if(D.tag===7){n(E,D.sibling),T=i(D,S.props.children),T.return=E,E=T;break e}}else if(D.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Bn&&mm(L)===D.type){n(E,D.sibling),T=i(D,S.props),T.ref=vs(E,D,S),T.return=E,E=T;break e}n(E,D);break}else e(E,D);D=D.sibling}S.type===li?(T=Lr(S.props.children,E.mode,R,S.key),T.return=E,E=T):(R=La(S.type,S.key,S.props,null,E.mode,R),R.ref=vs(E,T,S),R.return=E,E=R)}return o(E);case ai:e:{for(D=S.key;T!==null;){if(T.key===D)if(T.tag===4&&T.stateNode.containerInfo===S.containerInfo&&T.stateNode.implementation===S.implementation){n(E,T.sibling),T=i(T,S.children||[]),T.return=E,E=T;break e}else{n(E,T);break}else e(E,T);T=T.sibling}T=fc(S,E.mode,R),T.return=E,E=T}return o(E);case Bn:return D=S._init,V(E,T,D(S._payload),R)}if(Is(S))return A(E,T,S,R);if(hs(S))return b(E,T,S,R);pa(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,T!==null&&T.tag===6?(n(E,T.sibling),T=i(T,S),T.return=E,E=T):(n(E,T),T=hc(S,E.mode,R),T.return=E,E=T),o(E)):n(E,T)}return V}var bi=vy(!0),yy=vy(!1),ol=yr(null),al=null,gi=null,dh=null;function hh(){dh=gi=al=null}function fh(t){var e=ol.current;ge(ol),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ii(t,e){al=t,dh=gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(dh!==t)if(t={context:t,memoizedValue:e,next:null},gi===null){if(al===null)throw Error(U(308));gi=t,al.dependencies={lanes:0,firstContext:t}}else gi=gi.next=t;return e}var Nr=null;function ph(t){Nr===null?Nr=[t]:Nr.push(t)}function _y(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ph(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,ph(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function Pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,eh(t,n)}}function gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ll(t,e,n,r){var i=t.updateQueue;$n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=d=u=null,l=s;do{var v=l.lane,k=l.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,b=l;switch(v=e,k=n,b.tag){case 1:if(A=b.payload,typeof A=="function"){m=A.call(k,m,v);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=b.payload,v=typeof A=="function"?A.call(k,m,v):A,v==null)break e;m=Te({},m,v);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=k,u=m):p=p.next=k,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=m}}function vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var So={},Xt=yr(So),ro=yr(So),io=yr(So);function br(t){if(t===So)throw Error(U(174));return t}function gh(t,e){switch(fe(io,e),fe(ro,t),fe(Xt,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lc(e,t)}ge(Xt),fe(Xt,e)}function Di(){ge(Xt),ge(ro),ge(io)}function Ey(t){br(io.current);var e=br(Xt.current),n=Lc(e,t.type);e!==n&&(fe(ro,t),fe(Xt,n))}function vh(t){ro.current===t&&(ge(Xt),ge(ro))}var we=yr(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function yh(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Na=Dn.ReactCurrentDispatcher,ac=Dn.ReactCurrentBatchConfig,Ur=0,Ee=null,be=null,Fe=null,cl=!1,js=!1,so=0,eI=0;function Xe(){throw Error(U(321))}function _h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function wh(t,e,n,r,i,s){if(Ur=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?iI:sI,t=n(r,i),js){s=0;do{if(js=!1,so=0,25<=s)throw Error(U(301));s+=1,Fe=be=null,e.updateQueue=null,Na.current=oI,t=n(r,i)}while(js)}if(Na.current=dl,e=be!==null&&be.next!==null,Ur=0,Fe=be=Ee=null,cl=!1,e)throw Error(U(300));return t}function Eh(){var t=so!==0;return so=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Ot(){if(be===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Fe===null?Ee.memoizedState:Fe.next;if(e!==null)Fe=e,be=t;else{if(t===null)throw Error(U(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function oo(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var p=d.lane;if((Ur&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ee.lanes|=p,zr|=p}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ty(){}function Iy(t,e){var n=Ee,r=Ot(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,Th(ky.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,ao(9,xy.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(U(349));Ur&30||Sy(n,e,i)}return i}function Sy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,r){e.value=n,e.getSnapshot=r,Ay(e)&&Cy(t)}function ky(t,e,n){return n(function(){Ay(e)&&Cy(t)})}function Ay(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Cy(t){var e=kn(t,1);e!==null&&Wt(e,t,1,-1)}function ym(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=rI.bind(null,Ee,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ry(){return Ot().memoizedState}function ba(t,e,n,r){var i=Qt();Ee.flags|=t,i.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function $l(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&_h(r,o.deps)){i.memoizedState=ao(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=ao(1|e,n,s,r)}function _m(t,e){return ba(8390656,8,t,e)}function Th(t,e){return $l(2048,8,t,e)}function Py(t,e){return $l(4,2,t,e)}function Ny(t,e){return $l(4,4,t,e)}function by(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dy(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,by.bind(null,e,t),n)}function Ih(){}function Oy(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_h(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Vy(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_h(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ly(t,e,n){return Ur&21?(qt(n,e)||(n=zv(),Ee.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function tI(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=ac.transition;ac.transition={};try{t(!1),e()}finally{ue=n,ac.transition=r}}function jy(){return Ot().memoizedState}function nI(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},My(t))Fy(e,n);else if(n=_y(t,e,n,r),n!==null){var i=ut();Wt(n,t,r,i),Uy(n,e,r)}}function rI(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(My(t))Fy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,ph(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=_y(t,e,i,r),n!==null&&(i=ut(),Wt(n,t,r,i),Uy(n,e,r))}}function My(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function Fy(t,e){js=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Uy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,eh(t,n)}}var dl={readContext:Dt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},iI={readContext:Dt,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:_m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ba(4194308,4,by.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return ba(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nI.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:ym,useDebugValue:Ih,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=ym(!1),e=t[0];return t=tI.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Qt();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ue===null)throw Error(U(349));Ur&30||Sy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_m(ky.bind(null,r,s,t),[t]),r.flags|=2048,ao(9,xy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Ue.identifierPrefix;if(ve){var n=vn,r=gn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sI={readContext:Dt,useCallback:Oy,useContext:Dt,useEffect:Th,useImperativeHandle:Dy,useInsertionEffect:Py,useLayoutEffect:Ny,useMemo:Vy,useReducer:lc,useRef:Ry,useState:function(){return lc(oo)},useDebugValue:Ih,useDeferredValue:function(t){var e=Ot();return Ly(e,be.memoizedState,t)},useTransition:function(){var t=lc(oo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:Ty,useSyncExternalStore:Iy,useId:jy,unstable_isNewReconciler:!1},oI={readContext:Dt,useCallback:Oy,useContext:Dt,useEffect:Th,useImperativeHandle:Dy,useInsertionEffect:Py,useLayoutEffect:Ny,useMemo:Vy,useReducer:uc,useRef:Ry,useState:function(){return uc(oo)},useDebugValue:Ih,useDeferredValue:function(t){var e=Ot();return be===null?e.memoizedState=t:Ly(e,be.memoizedState,t)},useTransition:function(){var t=uc(oo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:Ty,useSyncExternalStore:Iy,useId:jy,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=sr(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Wt(e,t,i,r),Pa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=sr(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Wt(e,t,i,r),Pa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=sr(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(Wt(e,t,r,n),Pa(e,t,r))}};function wm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,s):!0}function zy(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=vt(e)?Mr:it.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Em(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function id(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=vt(e)?Mr:it.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wl.enqueueReplaceState(i,i.state,null),ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oi(t,e){try{var n="",r=e;do n+=OE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aI=typeof WeakMap=="function"?WeakMap:Map;function By(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fl||(fl=!0,md=r),sd(t,e)},n}function $y(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sd(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EI.bind(null,t,e,n),e.then(t,t))}function Im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var lI=Dn.ReactCurrentOwner,mt=!1;function lt(t,e,n,r){e.child=t===null?yy(e,null,n,r):bi(e,t.child,n,r)}function xm(t,e,n,r,i){n=n.render;var s=e.ref;return Ii(e,i),r=wh(t,e,n,r,s,i),n=Eh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ve&&n&&lh(e),e.flags|=1,lt(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wy(t,e,s,r,i)):(t=La(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function Wy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zs(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,An(t,e,i)}return od(t,e,n,r,i)}function Hy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(yi,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(yi,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(yi,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(yi,Et),Et|=r;return lt(t,e,i,n),e.child}function qy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,r,i){var s=vt(n)?Mr:it.current;return s=Pi(e,s),Ii(e,i),n=wh(t,e,n,r,s,i),r=Eh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ve&&r&&lh(e),e.flags|=1,lt(t,e,n,i),e.child)}function Am(t,e,n,r,i){if(vt(n)){var s=!0;rl(e)}else s=!1;if(Ii(e,i),e.stateNode===null)Da(t,e),zy(e,n,r),id(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Dt(d):(d=vt(n)?Mr:it.current,d=Pi(e,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Em(e,o,r,d),$n=!1;var v=e.memoizedState;o.state=v,ll(e,r,o,i),u=e.memoizedState,l!==r||v!==u||gt.current||$n?(typeof p=="function"&&(rd(e,n,p,r),u=e.memoizedState),(l=$n||wm(e,n,l,r,v,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,wy(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Mt(e.type,l),o.props=d,m=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=vt(n)?Mr:it.current,u=Pi(e,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||v!==u)&&Em(e,o,r,u),$n=!1,v=e.memoizedState,o.state=v,ll(e,r,o,i);var A=e.memoizedState;l!==m||v!==A||gt.current||$n?(typeof k=="function"&&(rd(e,n,k,r),A=e.memoizedState),(d=$n||wm(e,n,d,r,v,A,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return ad(t,e,n,r,s,i)}function ad(t,e,n,r,i,s){qy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),An(t,e,s);r=e.stateNode,lI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bi(e,t.child,null,s),e.child=bi(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function Ky(t){var e=t.stateNode;e.pendingContext?dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dm(t,e.context,!1),gh(t,e.containerInfo)}function Cm(t,e,n,r,i){return Ni(),ch(i),e.flags|=256,lt(t,e,n,r),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gy(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=ld,t):Sh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ld,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sh(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ma(t,e,n,r){return r!==null&&ch(r),bi(e,t.child,null,n),t=Sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cc(Error(U(422))),ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kl({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bi(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=ld,s);if(!(e.mode&1))return ma(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=cc(s,r,void 0),ma(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Wt(r,t,i,-1))}return Ph(),r=cc(Error(U(421))),ma(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tt=nr(i.nextSibling),St=e,ve=!0,Ut=null,t!==null&&(Ct[Rt++]=gn,Ct[Rt++]=vn,Ct[Rt++]=Fr,gn=t.id,vn=t.overflow,Fr=e),e=Sh(e,r.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nd(t.return,e,n)}function dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Qy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dc(e,!0,n,null,s);break;case"together":dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cI(t,e,n){switch(e.tag){case 3:Ky(e),Ni();break;case 5:Ey(e);break;case 1:vt(e.type)&&rl(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(ol,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?Gy(t,e,n):(fe(we,we.current&1),t=An(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Qy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,Hy(t,e,n)}return An(t,e,n)}var Yy,cd,Jy,Xy;Yy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};Jy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(Xt.current);var s=null;switch(n){case"input":i=bc(t,i),r=bc(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Vc(t,i),r=Vc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tl)}jc(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(qs.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(qs.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Xy=function(t,e,n,r){n!==r&&(e.flags|=4)};function ys(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dI(t,e,n){var r=e.pendingProps;switch(uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return vt(e.type)&&nl(),Ze(e),null;case 3:return r=e.stateNode,Di(),ge(gt),ge(it),yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(yd(Ut),Ut=null))),cd(t,e),Ze(e),null;case 5:vh(e);var i=br(io.current);if(n=e.type,t!==null&&e.stateNode!=null)Jy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ze(e),null}if(t=br(Xt.current),fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[no]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)me(xs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Mp(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Up(r,s),me("invalid",r)}jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ha(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ha(r.textContent,l,t),i=["children",""+l]):qs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":ia(r),Fp(r,s,!0);break;case"textarea":ia(r),zp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[no]=r,Yy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)me(xs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Mp(t,r),i=bc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":Up(t,r),i=Vc(t,r),me("invalid",t);break;default:i=r}jc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Rv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Av(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ks(t,u):typeof u=="number"&&Ks(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Gd(t,s,u,o))}switch(n){case"input":ia(t),Fp(t,r,!1);break;case"textarea":ia(t),zp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_i(t,!!r.multiple,s,!1):r.defaultValue!=null&&_i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)Xy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=br(io.current),br(Xt.current),fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:ha(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Ze(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Tt!==null&&e.mode&1&&!(e.flags&128))gy(),Ni(),e.flags|=98560,s=!1;else if(s=fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Yt]=e}else Ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Ut!==null&&(yd(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Oe===0&&(Oe=3):Ph())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Di(),cd(t,e),t===null&&eo(e.stateNode.containerInfo),Ze(e),null;case 10:return fh(e.type._context),Ze(e),null;case 17:return vt(e.type)&&nl(),Ze(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ys(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ul(t),o!==null){for(e.flags|=128,ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Vi&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ze(e),null}else 2*Re()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return Rh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function hI(t,e){switch(uh(e),e.tag){case 1:return vt(e.type)&&nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),ge(gt),ge(it),yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vh(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return Di(),null;case 10:return fh(e.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var ga=!1,nt=!1,fI=typeof WeakSet=="function"?WeakSet:Set,H=null;function vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function dd(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Pm=!1;function pI(t,e){if(Gc=Xa,t=ry(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,m=t,v=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(k=m.firstChild)!==null;)v=m,m=k;for(;;){if(m===t)break t;if(v===n&&++d===i&&(l=o),v===s&&++p===r&&(u=o),(k=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qc={focusedElem:t,selectionRange:n},Xa=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var b=A.memoizedProps,V=A.memoizedState,E=e.stateNode,T=E.getSnapshotBeforeUpdate(e.elementType===e.type?b:Mt(e.type,b),V);E.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(R){xe(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return A=Pm,Pm=!1,A}function Ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dd(e,n,s)}i=i.next}while(i!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zy(t){var e=t.alternate;e!==null&&(t.alternate=null,Zy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[no],delete e[Xc],delete e[YT],delete e[JT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e_(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tl));else if(r!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var Be=null,Ft=!1;function Un(t,e,n){for(n=n.child;n!==null;)t_(t,e,n),n=n.sibling}function t_(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:nt||vi(n,e);case 6:var r=Be,i=Ft;Be=null,Un(t,e,n),Be=r,Ft=i,Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?ic(t.parentNode,n):t.nodeType===1&&ic(t,n),Js(t)):ic(Be,n.stateNode));break;case 4:r=Be,i=Ft,Be=n.stateNode.containerInfo,Ft=!0,Un(t,e,n),Be=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dd(n,e,o),i=i.next}while(i!==r)}Un(t,e,n);break;case 1:if(!nt&&(vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Un(t,e,n),nt=r):Un(t,e,n);break;default:Un(t,e,n)}}function bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fI),e.forEach(function(r){var i=II.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ft=!1;break e;case 3:Be=l.stateNode.containerInfo,Ft=!0;break e;case 4:Be=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Be===null)throw Error(U(160));t_(s,o,i),Be=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){xe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n_(e,t),e=e.sibling}function n_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(e,t),Kt(t),r&4){try{Ms(3,t,t.return),Hl(3,t)}catch(b){xe(t,t.return,b)}try{Ms(5,t,t.return)}catch(b){xe(t,t.return,b)}}break;case 1:jt(e,t),Kt(t),r&512&&n!==null&&vi(n,n.return);break;case 5:if(jt(e,t),Kt(t),r&512&&n!==null&&vi(n,n.return),t.flags&32){var i=t.stateNode;try{Ks(i,"")}catch(b){xe(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sv(i,s),Mc(l,o);var d=Mc(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Rv(i,m):p==="dangerouslySetInnerHTML"?Av(i,m):p==="children"?Ks(i,m):Gd(i,p,m,d)}switch(l){case"input":Dc(i,s);break;case"textarea":xv(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?_i(i,!!s.multiple,k,!1):v!==!!s.multiple&&(s.defaultValue!=null?_i(i,!!s.multiple,s.defaultValue,!0):_i(i,!!s.multiple,s.multiple?[]:"",!1))}i[no]=s}catch(b){xe(t,t.return,b)}}break;case 6:if(jt(e,t),Kt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){xe(t,t.return,b)}}break;case 3:if(jt(e,t),Kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(b){xe(t,t.return,b)}break;case 4:jt(e,t),Kt(t);break;case 13:jt(e,t),Kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ah=Re())),r&4&&bm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(d=nt)||p,jt(e,t),nt=d):jt(e,t),Kt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(m=H=p;H!==null;){switch(v=H,k=v.child,v.tag){case 0:case 11:case 14:case 15:Ms(4,v,v.return);break;case 1:vi(v,v.return);var A=v.stateNode;if(typeof A.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(b){xe(r,n,b)}}break;case 5:vi(v,v.return);break;case 22:if(v.memoizedState!==null){Om(m);continue}}k!==null?(k.return=v,H=k):Om(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Cv("display",o))}catch(b){xe(t,t.return,b)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){xe(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:jt(e,t),Kt(t),r&4&&bm(t);break;case 21:break;default:jt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ks(i,""),r.flags&=-33);var s=Nm(t);pd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nm(t);fd(t,l,o);break;default:throw Error(U(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mI(t,e,n){H=t,r_(t)}function r_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ga;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=ga;var d=nt;if(ga=o,(nt=u)&&!d)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Vm(i):u!==null?(u.return=o,H=u):Vm(i);for(;s!==null;)H=s,r_(s),s=s.sibling;H=i,ga=l,nt=d}Dm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Dm(t)}}function Dm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Js(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}nt||e.flags&512&&hd(e)}catch(v){xe(e,e.return,v)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Om(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Vm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{hd(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{hd(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var gI=Math.ceil,hl=Dn.ReactCurrentDispatcher,xh=Dn.ReactCurrentOwner,Nt=Dn.ReactCurrentBatchConfig,se=0,Ue=null,Ne=null,He=0,Et=0,yi=yr(0),Oe=0,lo=null,zr=0,ql=0,kh=0,Fs=null,ft=null,Ah=0,Vi=1/0,fn=null,fl=!1,md=null,ir=null,va=!1,Jn=null,pl=0,Us=0,gd=null,Oa=-1,Va=0;function ut(){return se&6?Re():Oa!==-1?Oa:Oa=Re()}function sr(t){return t.mode&1?se&2&&He!==0?He&-He:ZT.transition!==null?(Va===0&&(Va=zv()),Va):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Gv(t.type)),t):1}function Wt(t,e,n,r){if(50<Us)throw Us=0,gd=null,Error(U(185));Eo(t,n,r),(!(se&2)||t!==Ue)&&(t===Ue&&(!(se&2)&&(ql|=n),Oe===4&&qn(t,He)),yt(t,r),n===1&&se===0&&!(e.mode&1)&&(Vi=Re()+500,Bl&&_r()))}function yt(t,e){var n=t.callbackNode;ZE(t,e);var r=Ja(t,t===Ue?He:0);if(r===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?XT(Lm.bind(null,t)):fy(Lm.bind(null,t)),GT(function(){!(se&6)&&_r()}),n=null;else{switch(Bv(r)){case 1:n=Zd;break;case 4:n=Fv;break;case 16:n=Ya;break;case 536870912:n=Uv;break;default:n=Ya}n=d_(n,i_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i_(t,e){if(Oa=-1,Va=0,se&6)throw Error(U(327));var n=t.callbackNode;if(Si()&&t.callbackNode!==n)return null;var r=Ja(t,t===Ue?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ml(t,r);else{e=r;var i=se;se|=2;var s=o_();(Ue!==t||He!==e)&&(fn=null,Vi=Re()+500,Vr(t,e));do try{_I();break}catch(l){s_(t,l)}while(!0);hh(),hl.current=s,se=i,Ne!==null?e=0:(Ue=null,He=0,e=Oe)}if(e!==0){if(e===2&&(i=$c(t),i!==0&&(r=i,e=vd(t,i))),e===1)throw n=lo,Vr(t,0),qn(t,r),yt(t,Re()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!vI(i)&&(e=ml(t,r),e===2&&(s=$c(t),s!==0&&(r=s,e=vd(t,s))),e===1))throw n=lo,Vr(t,0),qn(t,r),yt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ar(t,ft,fn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=Ah+500-Re(),10<e)){if(Ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jc(Ar.bind(null,t,ft,fn),e);break}Ar(t,ft,fn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gI(r/1960))-r,10<r){t.timeoutHandle=Jc(Ar.bind(null,t,ft,fn),r);break}Ar(t,ft,fn);break;case 5:Ar(t,ft,fn);break;default:throw Error(U(329))}}}return yt(t,Re()),t.callbackNode===n?i_.bind(null,t):null}function vd(t,e){var n=Fs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=ml(t,e),t!==2&&(e=ft,ft=n,e!==null&&yd(e)),t}function yd(t){ft===null?ft=t:ft.push.apply(ft,t)}function vI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~kh,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Lm(t){if(se&6)throw Error(U(327));Si();var e=Ja(t,0);if(!(e&1))return yt(t,Re()),null;var n=ml(t,e);if(t.tag!==0&&n===2){var r=$c(t);r!==0&&(e=r,n=vd(t,r))}if(n===1)throw n=lo,Vr(t,0),qn(t,e),yt(t,Re()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,ft,fn),yt(t,Re()),null}function Ch(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Vi=Re()+500,Bl&&_r())}}function Br(t){Jn!==null&&Jn.tag===0&&!(se&6)&&Si();var e=se;se|=1;var n=Nt.transition,r=ue;try{if(Nt.transition=null,ue=1,t)return t()}finally{ue=r,Nt.transition=n,se=e,!(se&6)&&_r()}}function Rh(){Et=yi.current,ge(yi)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KT(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(uh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:Di(),ge(gt),ge(it),yh();break;case 5:vh(r);break;case 4:Di();break;case 13:ge(we);break;case 19:ge(we);break;case 10:fh(r.type._context);break;case 22:case 23:Rh()}n=n.return}if(Ue=t,Ne=t=or(t.current,null),He=Et=e,Oe=0,lo=null,kh=ql=zr=0,ft=Fs=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function s_(t,e){do{var n=Ne;try{if(hh(),Na.current=dl,cl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cl=!1}if(Ur=0,Fe=be=Ee=null,js=!1,so=0,xh.current=null,n===null||n.return===null){Oe=1,lo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=Im(o);if(k!==null){k.flags&=-257,Sm(k,o,l,s,e),k.mode&1&&Tm(s,d,e),e=k,u=d;var A=e.updateQueue;if(A===null){var b=new Set;b.add(u),e.updateQueue=b}else A.add(u);break e}else{if(!(e&1)){Tm(s,d,e),Ph();break e}u=Error(U(426))}}else if(ve&&l.mode&1){var V=Im(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Sm(V,o,l,s,e),ch(Oi(u,l));break e}}s=u=Oi(u,l),Oe!==4&&(Oe=2),Fs===null?Fs=[s]:Fs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=By(s,u,e);gm(s,E);break e;case 1:l=u;var T=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ir===null||!ir.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var R=$y(s,l,e);gm(s,R);break e}}s=s.return}while(s!==null)}l_(n)}catch(L){e=L,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function o_(){var t=hl.current;return hl.current=dl,t===null?dl:t}function Ph(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ue===null||!(zr&268435455)&&!(ql&268435455)||qn(Ue,He)}function ml(t,e){var n=se;se|=2;var r=o_();(Ue!==t||He!==e)&&(fn=null,Vr(t,e));do try{yI();break}catch(i){s_(t,i)}while(!0);if(hh(),se=n,hl.current=r,Ne!==null)throw Error(U(261));return Ue=null,He=0,Oe}function yI(){for(;Ne!==null;)a_(Ne)}function _I(){for(;Ne!==null&&!WE();)a_(Ne)}function a_(t){var e=c_(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?l_(t):Ne=e,xh.current=null}function l_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hI(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Ne=null;return}}else if(n=dI(n,e,Et),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Oe===0&&(Oe=5)}function Ar(t,e,n){var r=ue,i=Nt.transition;try{Nt.transition=null,ue=1,wI(t,e,n,r)}finally{Nt.transition=i,ue=r}return null}function wI(t,e,n,r){do Si();while(Jn!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eT(t,s),t===Ue&&(Ne=Ue=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,d_(Ya,function(){return Si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ue;ue=1;var l=se;se|=4,xh.current=null,pI(t,n),n_(n,t),UT(Qc),Xa=!!Gc,Qc=Gc=null,t.current=n,mI(n),HE(),se=l,ue=o,Nt.transition=s}else t.current=n;if(va&&(va=!1,Jn=t,pl=i),s=t.pendingLanes,s===0&&(ir=null),GE(n.stateNode),yt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fl)throw fl=!1,t=md,md=null,t;return pl&1&&t.tag!==0&&Si(),s=t.pendingLanes,s&1?t===gd?Us++:(Us=0,gd=t):Us=0,_r(),null}function Si(){if(Jn!==null){var t=Bv(pl),e=Nt.transition,n=ue;try{if(Nt.transition=null,ue=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,pl=0,se&6)throw Error(U(331));var i=se;for(se|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(H=d;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:Ms(8,p,s)}var m=p.child;if(m!==null)m.return=p,H=m;else for(;H!==null;){p=H;var v=p.sibling,k=p.return;if(Zy(p),p===d){H=null;break}if(v!==null){v.return=k,H=v;break}H=k}}}var A=s.alternate;if(A!==null){var b=A.child;if(b!==null){A.child=null;do{var V=b.sibling;b.sibling=null,b=V}while(b!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ms(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=T;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(L){xe(l,l.return,L)}if(l===o){H=null;break e}var R=l.sibling;if(R!==null){R.return=l.return,H=R;break e}H=l.return}}if(se=i,_r(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(jl,t)}catch{}r=!0}return r}finally{ue=n,Nt.transition=e}}return!1}function jm(t,e,n){e=Oi(n,e),e=By(t,e,1),t=rr(t,e,1),e=ut(),t!==null&&(Eo(t,1,e),yt(t,e))}function xe(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Oi(n,t),t=$y(e,t,1),e=rr(e,t,1),t=ut(),e!==null&&(Eo(e,1,t),yt(e,t));break}}e=e.return}}function EI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(He&n)===n&&(Oe===4||Oe===3&&(He&130023424)===He&&500>Re()-Ah?Vr(t,0):kh|=n),yt(t,e)}function u_(t,e){e===0&&(t.mode&1?(e=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):e=1);var n=ut();t=kn(t,e),t!==null&&(Eo(t,e,n),yt(t,n))}function TI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),u_(t,n)}function II(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),u_(t,n)}var c_;c_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,cI(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ve&&e.flags&1048576&&py(e,sl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Da(t,e),t=e.pendingProps;var i=Pi(e,it.current);Ii(e,n),i=wh(null,e,r,t,i,n);var s=Eh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mh(e),i.updater=Wl,e.stateNode=i,i._reactInternals=e,id(e,r,t,n),e=ad(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&lh(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Da(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xI(r),t=Mt(r,t),i){case 0:e=od(null,e,r,t,n);break e;case 1:e=Am(null,e,r,t,n);break e;case 11:e=xm(null,e,r,t,n);break e;case 14:e=km(null,e,r,Mt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),od(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Am(t,e,r,i,n);case 3:e:{if(Ky(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,wy(t,e),ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oi(Error(U(423)),e),e=Cm(t,e,r,n,i);break e}else if(r!==i){i=Oi(Error(U(424)),e),e=Cm(t,e,r,n,i);break e}else for(Tt=nr(e.stateNode.containerInfo.firstChild),St=e,ve=!0,Ut=null,n=yy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){e=An(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return Ey(e),t===null&&td(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yc(r,i)?o=null:s!==null&&Yc(r,s)&&(e.flags|=32),qy(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&td(e),null;case 13:return Gy(t,e,n);case 4:return gh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),xm(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(ol,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!gt.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),nd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ii(e,n),i=Dt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),km(t,e,r,i,n);case 15:return Wy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Da(t,e),e.tag=1,vt(r)?(t=!0,rl(e)):t=!1,Ii(e,n),zy(e,r,i),id(e,r,i,n),ad(null,e,r,!0,t,n);case 19:return Qy(t,e,n);case 22:return Hy(t,e,n)}throw Error(U(156,e.tag))};function d_(t,e){return Mv(t,e)}function SI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new SI(t,e,n,r)}function Nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xI(t){if(typeof t=="function")return Nh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Jd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case li:return Lr(n.children,i,s,e);case Qd:o=8,i|=8;break;case Cc:return t=Pt(12,n,e,i|2),t.elementType=Cc,t.lanes=s,t;case Rc:return t=Pt(13,n,e,i),t.elementType=Rc,t.lanes=s,t;case Pc:return t=Pt(19,n,e,i),t.elementType=Pc,t.lanes=s,t;case Ev:return Kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _v:o=10;break e;case wv:o=9;break e;case Yd:o=11;break e;case Jd:o=14;break e;case Bn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Kl(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=Ev,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bh(t,e,n,r,i,s,o,l,u){return t=new kI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(s),t}function AI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function h_(t){if(!t)return fr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(vt(n))return hy(t,n,e)}return e}function f_(t,e,n,r,i,s,o,l,u){return t=bh(n,r,!0,t,i,s,o,l,u),t.context=h_(null),n=t.current,r=ut(),i=sr(n),s=En(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,Eo(t,i,r),yt(t,r),t}function Gl(t,e,n,r){var i=e.current,s=ut(),o=sr(i);return n=h_(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(Wt(t,i,o,s),Pa(t,i,o)),o}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dh(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function CI(){return null}var p_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Oh(t){this._internalRoot=t}Ql.prototype.render=Oh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Gl(t,e,null,null)};Ql.prototype.unmount=Oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Gl(null,t,null,null)}),e[xn]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&Kv(t)}};function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function RI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=gl(o);s.call(d)}}var o=f_(e,r,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[xn]=o.current,eo(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=gl(u);l.call(d)}}var u=bh(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=u,t[xn]=u.current,eo(t.nodeType===8?t.parentNode:t),Br(function(){Gl(e,u,n,r)}),u}function Jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=gl(o);l.call(u)}}Gl(e,o,t,i)}else o=RI(n,e,t,i,r);return gl(o)}$v=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(eh(e,n|1),yt(e,Re()),!(se&6)&&(Vi=Re()+500,_r()))}break;case 13:Br(function(){var r=kn(t,1);if(r!==null){var i=ut();Wt(r,t,1,i)}}),Dh(t,1)}};th=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ut();Wt(e,t,134217728,n)}Dh(t,134217728)}};Wv=function(t){if(t.tag===13){var e=sr(t),n=kn(t,e);if(n!==null){var r=ut();Wt(n,t,e,r)}Dh(t,e)}};Hv=function(){return ue};qv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Uc=function(t,e,n){switch(e){case"input":if(Dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zl(r);if(!i)throw Error(U(90));Iv(r),Dc(r,i)}}}break;case"textarea":xv(t,n);break;case"select":e=n.value,e!=null&&_i(t,!!n.multiple,e,!1)}};bv=Ch;Dv=Br;var PI={usingClientEntryPoint:!1,Events:[Io,hi,zl,Pv,Nv,Ch]},_s={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NI={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lv(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||CI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{jl=ya.inject(NI),Jt=ya}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PI;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(U(200));return AI(t,e,null,n)};kt.createRoot=function(t,e){if(!Vh(t))throw Error(U(299));var n=!1,r="",i=p_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bh(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,eo(t.nodeType===8?t.parentNode:t),new Oh(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Lv(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return Br(t)};kt.hydrate=function(t,e,n){if(!Yl(e))throw Error(U(200));return Jl(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Vh(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=p_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=f_(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ql(e)};kt.render=function(t,e,n){if(!Yl(e))throw Error(U(200));return Jl(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(U(40));return t._reactRootContainer?(Br(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};kt.unstable_batchedUpdates=Ch;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yl(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Jl(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function m_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m_)}catch(t){console.error(t)}}m_(),mv.exports=kt;var bI=mv.exports,Um=bI;kc.createRoot=Um.createRoot,kc.hydrateRoot=Um.hydrateRoot;var zm={};/**
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
 */const g_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},v_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,k=d&63;u||(k=64,o||(v=64)),r.push(n[p],n[m],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new OI;const v=s<<2|l>>4;if(r.push(v),d!==64){const k=l<<4&240|d>>2;if(r.push(k),m!==64){const A=d<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VI=function(t){const e=g_(t);return v_.encodeByteArray(e,!0)},vl=function(t){return VI(t).replace(/\./g,"")},y_=function(t){try{return v_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jI=()=>LI().__FIREBASE_DEFAULTS__,MI=()=>{if(typeof process>"u"||typeof zm>"u")return;const t=zm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&y_(t[1]);return e&&JSON.parse(e)},Xl=()=>{try{return jI()||MI()||FI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},__=t=>{var e,n;return(n=(e=Xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UI=t=>{const e=__(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},w_=()=>{var t;return(t=Xl())===null||t===void 0?void 0:t.config},E_=t=>{var e;return(e=Xl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function BI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function WI(){var t;const e=(t=Xl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GI(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QI(){return!WI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YI(){try{return typeof indexedDB=="object"}catch{return!1}}function JI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const XI="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XI,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ZI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new On(i,l,r)}}function ZI(t,e){return t.replace(eS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eS=/\{\$([^}]+)}/g;function tS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bm(s)&&Bm(o)){if(!yl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bm(t){return t!==null&&typeof t=="object"}/**
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
 */function ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function As(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nS(t,e){const n=new rS(t,e);return n.subscribe.bind(n)}class rS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pc),i.error===void 0&&(i.error=pc),i.complete===void 0&&(i.complete=pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cr="[DEFAULT]";/**
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
 */class sS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aS(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oS(t){return t===Cr?void 0:t}function aS(t){return t.instantiationMode==="EAGER"}/**
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
 */class lS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const uS={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},cS=re.INFO,dS={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},hS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lh{constructor(e){this.name=e,this._logLevel=cS,this._logHandler=hS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const fS=(t,e)=>e.some(n=>t instanceof n);let $m,Wm;function pS(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mS(){return Wm||(Wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const T_=new WeakMap,_d=new WeakMap,I_=new WeakMap,mc=new WeakMap,jh=new WeakMap;function gS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&T_.set(n,t)}).catch(()=>{}),jh.set(e,t),e}function vS(t){if(_d.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_d.set(t,e)}let wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||I_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yS(t){wd=t(wd)}function _S(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gc(this),e,...n);return I_.set(r,e.sort?e.sort():[e]),ar(r)}:mS().includes(t)?function(...e){return t.apply(gc(this),e),ar(T_.get(this))}:function(...e){return ar(t.apply(gc(this),e))}}function wS(t){return typeof t=="function"?_S(t):(t instanceof IDBTransaction&&vS(t),fS(t,pS())?new Proxy(t,wd):t)}function ar(t){if(t instanceof IDBRequest)return gS(t);if(mc.has(t))return mc.get(t);const e=wS(t);return e!==t&&(mc.set(t,e),jh.set(e,t)),e}const gc=t=>jh.get(t);function ES(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ar(o.result),u.oldVersion,u.newVersion,ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const TS=["get","getKey","getAll","getAllKeys","count"],IS=["put","add","delete","clear"],vc=new Map;function Hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return vc.set(e,s),s}yS(t=>({...t,get:(e,n,r)=>Hm(e,n)||t.get(e,n,r),has:(e,n)=>!!Hm(e,n)||t.has(e,n)}));/**
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
 */class SS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ed="@firebase/app",qm="0.10.13";/**
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
 */const Cn=new Lh("@firebase/app"),kS="@firebase/app-compat",AS="@firebase/analytics-compat",CS="@firebase/analytics",RS="@firebase/app-check-compat",PS="@firebase/app-check",NS="@firebase/auth",bS="@firebase/auth-compat",DS="@firebase/database",OS="@firebase/data-connect",VS="@firebase/database-compat",LS="@firebase/functions",jS="@firebase/functions-compat",MS="@firebase/installations",FS="@firebase/installations-compat",US="@firebase/messaging",zS="@firebase/messaging-compat",BS="@firebase/performance",$S="@firebase/performance-compat",WS="@firebase/remote-config",HS="@firebase/remote-config-compat",qS="@firebase/storage",KS="@firebase/storage-compat",GS="@firebase/firestore",QS="@firebase/vertexai-preview",YS="@firebase/firestore-compat",JS="firebase",XS="10.14.1";/**
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
 */const Td="[DEFAULT]",ZS={[Ed]:"fire-core",[kS]:"fire-core-compat",[CS]:"fire-analytics",[AS]:"fire-analytics-compat",[PS]:"fire-app-check",[RS]:"fire-app-check-compat",[NS]:"fire-auth",[bS]:"fire-auth-compat",[DS]:"fire-rtdb",[OS]:"fire-data-connect",[VS]:"fire-rtdb-compat",[LS]:"fire-fn",[jS]:"fire-fn-compat",[MS]:"fire-iid",[FS]:"fire-iid-compat",[US]:"fire-fcm",[zS]:"fire-fcm-compat",[BS]:"fire-perf",[$S]:"fire-perf-compat",[WS]:"fire-rc",[HS]:"fire-rc-compat",[qS]:"fire-gcs",[KS]:"fire-gcs-compat",[GS]:"fire-fst",[YS]:"fire-fst-compat",[QS]:"fire-vertex","fire-js":"fire-js",[JS]:"fire-js-all"};/**
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
 */const _l=new Map,e1=new Map,Id=new Map;function Km(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Li(t){const e=t.name;if(Id.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Id.set(e,t);for(const n of _l.values())Km(n,t);for(const n of e1.values())Km(n,t);return!0}function Mh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t.settings!==void 0}/**
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
 */const t1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new xo("app","Firebase",t1);/**
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
 */class n1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const Gi=XS;function S_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Td,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=w_()),!n)throw lr.create("no-options");const s=_l.get(i);if(s){if(yl(n,s.options)&&yl(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new lS(i);for(const u of Id.values())o.addComponent(u);const l=new n1(n,r,o);return _l.set(i,l),l}function x_(t=Td){const e=_l.get(t);if(!e&&t===Td&&w_())return S_();if(!e)throw lr.create("no-app",{appName:t});return e}function ur(t,e,n){var r;let i=(r=ZS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}Li(new $r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const r1="firebase-heartbeat-database",i1=1,uo="firebase-heartbeat-store";let yc=null;function k_(){return yc||(yc=ES(r1,i1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(uo)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),yc}async function s1(t){try{const n=(await k_()).transaction(uo),r=await n.objectStore(uo).get(A_(t));return await n.done,r}catch(e){if(e instanceof On)Cn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Gm(t,e){try{const r=(await k_()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,A_(t)),await r.done}catch(n){if(n instanceof On)Cn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function A_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const o1=1024,a1=30*24*60*60*1e3;class l1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new c1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=a1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qm(),{heartbeatsToSend:r,unsentEntries:i}=u1(this._heartbeatsCache.heartbeats),s=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function Qm(){return new Date().toISOString().substring(0,10)}function u1(t,e=o1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ym(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ym(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class c1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YI()?JI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await s1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ym(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function d1(t){Li(new $r("platform-logger",e=>new SS(e),"PRIVATE")),Li(new $r("heartbeat",e=>new l1(e),"PRIVATE")),ur(Ed,qm,t),ur(Ed,qm,"esm2017"),ur("fire-js","")}d1("");var h1="firebase",f1="10.14.1";/**
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
 */ur(h1,f1,"app");var Jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,C_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function w(){}w.prototype=g.prototype,_.D=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(x,C,P){for(var I=Array(arguments.length-2),je=2;je<arguments.length;je++)I[je-2]=arguments[je];return g.prototype[C].apply(x,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,w){w||(w=0);var x=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)x[C]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(C=0;16>C;++C)x[C]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],C=_.g[2];var P=_.g[3],I=g+(P^w&(C^P))+x[0]+3614090360&4294967295;g=w+(I<<7&4294967295|I>>>25),I=P+(C^g&(w^C))+x[1]+3905402710&4294967295,P=g+(I<<12&4294967295|I>>>20),I=C+(w^P&(g^w))+x[2]+606105819&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(g^C&(P^g))+x[3]+3250441966&4294967295,w=C+(I<<22&4294967295|I>>>10),I=g+(P^w&(C^P))+x[4]+4118548399&4294967295,g=w+(I<<7&4294967295|I>>>25),I=P+(C^g&(w^C))+x[5]+1200080426&4294967295,P=g+(I<<12&4294967295|I>>>20),I=C+(w^P&(g^w))+x[6]+2821735955&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(g^C&(P^g))+x[7]+4249261313&4294967295,w=C+(I<<22&4294967295|I>>>10),I=g+(P^w&(C^P))+x[8]+1770035416&4294967295,g=w+(I<<7&4294967295|I>>>25),I=P+(C^g&(w^C))+x[9]+2336552879&4294967295,P=g+(I<<12&4294967295|I>>>20),I=C+(w^P&(g^w))+x[10]+4294925233&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(g^C&(P^g))+x[11]+2304563134&4294967295,w=C+(I<<22&4294967295|I>>>10),I=g+(P^w&(C^P))+x[12]+1804603682&4294967295,g=w+(I<<7&4294967295|I>>>25),I=P+(C^g&(w^C))+x[13]+4254626195&4294967295,P=g+(I<<12&4294967295|I>>>20),I=C+(w^P&(g^w))+x[14]+2792965006&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(g^C&(P^g))+x[15]+1236535329&4294967295,w=C+(I<<22&4294967295|I>>>10),I=g+(C^P&(w^C))+x[1]+4129170786&4294967295,g=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(g^w))+x[6]+3225465664&4294967295,P=g+(I<<9&4294967295|I>>>23),I=C+(g^w&(P^g))+x[11]+643717713&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^g&(C^P))+x[0]+3921069994&4294967295,w=C+(I<<20&4294967295|I>>>12),I=g+(C^P&(w^C))+x[5]+3593408605&4294967295,g=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(g^w))+x[10]+38016083&4294967295,P=g+(I<<9&4294967295|I>>>23),I=C+(g^w&(P^g))+x[15]+3634488961&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^g&(C^P))+x[4]+3889429448&4294967295,w=C+(I<<20&4294967295|I>>>12),I=g+(C^P&(w^C))+x[9]+568446438&4294967295,g=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(g^w))+x[14]+3275163606&4294967295,P=g+(I<<9&4294967295|I>>>23),I=C+(g^w&(P^g))+x[3]+4107603335&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^g&(C^P))+x[8]+1163531501&4294967295,w=C+(I<<20&4294967295|I>>>12),I=g+(C^P&(w^C))+x[13]+2850285829&4294967295,g=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(g^w))+x[2]+4243563512&4294967295,P=g+(I<<9&4294967295|I>>>23),I=C+(g^w&(P^g))+x[7]+1735328473&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^g&(C^P))+x[12]+2368359562&4294967295,w=C+(I<<20&4294967295|I>>>12),I=g+(w^C^P)+x[5]+4294588738&4294967295,g=w+(I<<4&4294967295|I>>>28),I=P+(g^w^C)+x[8]+2272392833&4294967295,P=g+(I<<11&4294967295|I>>>21),I=C+(P^g^w)+x[11]+1839030562&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^g)+x[14]+4259657740&4294967295,w=C+(I<<23&4294967295|I>>>9),I=g+(w^C^P)+x[1]+2763975236&4294967295,g=w+(I<<4&4294967295|I>>>28),I=P+(g^w^C)+x[4]+1272893353&4294967295,P=g+(I<<11&4294967295|I>>>21),I=C+(P^g^w)+x[7]+4139469664&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^g)+x[10]+3200236656&4294967295,w=C+(I<<23&4294967295|I>>>9),I=g+(w^C^P)+x[13]+681279174&4294967295,g=w+(I<<4&4294967295|I>>>28),I=P+(g^w^C)+x[0]+3936430074&4294967295,P=g+(I<<11&4294967295|I>>>21),I=C+(P^g^w)+x[3]+3572445317&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^g)+x[6]+76029189&4294967295,w=C+(I<<23&4294967295|I>>>9),I=g+(w^C^P)+x[9]+3654602809&4294967295,g=w+(I<<4&4294967295|I>>>28),I=P+(g^w^C)+x[12]+3873151461&4294967295,P=g+(I<<11&4294967295|I>>>21),I=C+(P^g^w)+x[15]+530742520&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^g)+x[2]+3299628645&4294967295,w=C+(I<<23&4294967295|I>>>9),I=g+(C^(w|~P))+x[0]+4096336452&4294967295,g=w+(I<<6&4294967295|I>>>26),I=P+(w^(g|~C))+x[7]+1126891415&4294967295,P=g+(I<<10&4294967295|I>>>22),I=C+(g^(P|~w))+x[14]+2878612391&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~g))+x[5]+4237533241&4294967295,w=C+(I<<21&4294967295|I>>>11),I=g+(C^(w|~P))+x[12]+1700485571&4294967295,g=w+(I<<6&4294967295|I>>>26),I=P+(w^(g|~C))+x[3]+2399980690&4294967295,P=g+(I<<10&4294967295|I>>>22),I=C+(g^(P|~w))+x[10]+4293915773&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~g))+x[1]+2240044497&4294967295,w=C+(I<<21&4294967295|I>>>11),I=g+(C^(w|~P))+x[8]+1873313359&4294967295,g=w+(I<<6&4294967295|I>>>26),I=P+(w^(g|~C))+x[15]+4264355552&4294967295,P=g+(I<<10&4294967295|I>>>22),I=C+(g^(P|~w))+x[6]+2734768916&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~g))+x[13]+1309151649&4294967295,w=C+(I<<21&4294967295|I>>>11),I=g+(C^(w|~P))+x[4]+4149444226&4294967295,g=w+(I<<6&4294967295|I>>>26),I=P+(w^(g|~C))+x[11]+3174756917&4294967295,P=g+(I<<10&4294967295|I>>>22),I=C+(g^(P|~w))+x[2]+718787259&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~g))+x[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,_.g[2]=_.g[2]+C&4294967295,_.g[3]=_.g[3]+P&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var w=g-this.blockSize,x=this.B,C=this.h,P=0;P<g;){if(C==0)for(;P<=w;)i(this,_,P),P+=this.blockSize;if(typeof _=="string"){for(;P<g;)if(x[C++]=_.charCodeAt(P++),C==this.blockSize){i(this,x),C=0;break}}else for(;P<g;)if(x[C++]=_[P++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var w=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=w&255,w/=256;for(this.u(_),_=Array(16),g=w=0;4>g;++g)for(var x=0;32>x;x+=8)_[w++]=this.g[g]>>>x&255;return _};function s(_,g){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function o(_,g){this.h=g;for(var w=[],x=!0,C=_.length-1;0<=C;C--){var P=_[C]|0;x&&P==g||(w[C]=P,x=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(g){return new o([g|0],0>g?-1:0)}):new o([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return V(d(-_));for(var g=[],w=1,x=0;_>=w;x++)g[x]=_/w|0,w*=4294967296;return new o(g,0)}function p(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return V(p(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(g,8)),x=m,C=0;C<_.length;C+=8){var P=Math.min(8,_.length-C),I=parseInt(_.substring(C,C+P),g);8>P?(P=d(Math.pow(g,P)),x=x.j(P).add(d(I))):(x=x.j(w),x=x.add(d(I)))}return x}var m=u(0),v=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-V(this).m();for(var _=0,g=1,w=0;w<this.g.length;w++){var x=this.i(w);_+=(0<=x?x:4294967296+x)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A(this))return"0";if(b(this))return"-"+V(this).toString(_);for(var g=d(Math.pow(_,6)),w=this,x="";;){var C=R(w,g).g;w=E(w,C.j(g));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=C,A(w))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function A(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function b(_){return _.h==-1}t.l=function(_){return _=E(this,_),b(_)?-1:A(_)?0:1};function V(_){for(var g=_.g.length,w=[],x=0;x<g;x++)w[x]=~_.g[x];return new o(w,~_.h).add(v)}t.abs=function(){return b(this)?V(this):this},t.add=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],x=0,C=0;C<=g;C++){var P=x+(this.i(C)&65535)+(_.i(C)&65535),I=(P>>>16)+(this.i(C)>>>16)+(_.i(C)>>>16);x=I>>>16,P&=65535,I&=65535,w[C]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(_,g){return _.add(V(g))}t.j=function(_){if(A(this)||A(_))return m;if(b(this))return b(_)?V(this).j(V(_)):V(V(this).j(_));if(b(_))return V(this.j(V(_)));if(0>this.l(k)&&0>_.l(k))return d(this.m()*_.m());for(var g=this.g.length+_.g.length,w=[],x=0;x<2*g;x++)w[x]=0;for(x=0;x<this.g.length;x++)for(var C=0;C<_.g.length;C++){var P=this.i(x)>>>16,I=this.i(x)&65535,je=_.i(C)>>>16,on=_.i(C)&65535;w[2*x+2*C]+=I*on,T(w,2*x+2*C),w[2*x+2*C+1]+=P*on,T(w,2*x+2*C+1),w[2*x+2*C+1]+=I*je,T(w,2*x+2*C+1),w[2*x+2*C+2]+=P*je,T(w,2*x+2*C+2)}for(x=0;x<g;x++)w[x]=w[2*x+1]<<16|w[2*x];for(x=g;x<2*g;x++)w[x]=0;return new o(w,0)};function T(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function S(_,g){this.g=_,this.h=g}function R(_,g){if(A(g))throw Error("division by zero");if(A(_))return new S(m,m);if(b(_))return g=R(V(_),g),new S(V(g.g),V(g.h));if(b(g))return g=R(_,V(g)),new S(V(g.g),g.h);if(30<_.g.length){if(b(_)||b(g))throw Error("slowDivide_ only works with positive integers.");for(var w=v,x=g;0>=x.l(_);)w=L(w),x=L(x);var C=D(w,1),P=D(x,1);for(x=D(x,2),w=D(w,2);!A(x);){var I=P.add(x);0>=I.l(_)&&(C=C.add(w),P=I),x=D(x,1),w=D(w,1)}return g=E(_,C.j(g)),new S(C,g)}for(C=m;0<=_.l(g);){for(w=Math.max(1,Math.floor(_.m()/g.m())),x=Math.ceil(Math.log(w)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=d(w),I=P.j(g);b(I)||0<I.l(_);)w-=x,P=d(w),I=P.j(g);A(P)&&(P=v),C=C.add(P),_=E(_,I)}return new S(C,_)}t.A=function(_){return R(this,_).h},t.and=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],x=0;x<g;x++)w[x]=this.i(x)&_.i(x);return new o(w,this.h&_.h)},t.or=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],x=0;x<g;x++)w[x]=this.i(x)|_.i(x);return new o(w,this.h|_.h)},t.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],x=0;x<g;x++)w[x]=this.i(x)^_.i(x);return new o(w,this.h^_.h)};function L(_){for(var g=_.g.length+1,w=[],x=0;x<g;x++)w[x]=_.i(x)<<1|_.i(x-1)>>>31;return new o(w,_.h)}function D(_,g){var w=g>>5;g%=32;for(var x=_.g.length-w,C=[],P=0;P<x;P++)C[P]=0<g?_.i(P+w)>>>g|_.i(P+w+1)<<32-g:_.i(P+w);return new o(C,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,C_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,jr=o}).apply(typeof Jm<"u"?Jm:typeof self<"u"?self:typeof window<"u"?window:{});var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var R_,Cs,P_,ja,Sd,N_,b_,D_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _a=="object"&&_a];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in f))break e;f=f[N]}a=a[a.length-1],y=f[a],c=c(y),c!=y&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var f=0,y=!1,N={next:function(){if(!y&&f<a.length){var O=f++;return{value:c(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function v(a,c,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,v.apply(null,arguments)}function k(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function A(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,N,O){for(var B=Array(arguments.length-2),he=2;he<arguments.length;he++)B[he-2]=arguments[he];return c.prototype[N].apply(y,B)}}function b(a){const c=a.length;if(0<c){const f=Array(c);for(let y=0;y<c;y++)f[y]=a[y];return f}return[]}function V(a,c){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const N=a.length||0,O=y.length||0;a.length=N+O;for(let B=0;B<O;B++)a[N+B]=y[B]}else a.push(y)}}class E{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function T(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function R(a){return R[" "](a),a}R[" "]=function(){};var L=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function D(a,c,f){for(const y in a)c.call(f,a[y],y,a)}function _(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function g(a){const c={};for(const f in a)c[f]=a[f];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,c){let f,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(f in y)a[f]=y[f];for(let O=0;O<w.length;O++)f=w[O],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function C(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=W;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class je{constructor(){this.h=this.g=null}add(c,f){const y=on.get();y.set(c,f),this.h?this.h.next=y:this.g=y,this.h=y}}var on=new E(()=>new $,a=>a.reset());class ${constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,M=!1,W=new je,J=()=>{const a=l.Promise.resolve(void 0);ee=()=>{a.then(_e)}};var _e=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){P(f)}var c=on;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}M=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var an=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function ln(a,c){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(L){e:{try{R(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:un[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ln.aa.h.call(this)}}A(ln,ke);var un={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),Cw=0;function Rw(a,c,f,y,N){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!y,this.ha=N,this.key=++Cw,this.da=this.fa=!1}function Mo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fo(a){this.src=a,this.g={},this.h=0}Fo.prototype.add=function(a,c,f,y,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=wu(a,c,y,N);return-1<B?(c=a[B],f||(c.fa=!1)):(c=new Rw(c,this.src,O,!!y,N),c.fa=f,a.push(c)),c};function _u(a,c){var f=c.type;if(f in a.g){var y=a.g[f],N=Array.prototype.indexOf.call(y,c,void 0),O;(O=0<=N)&&Array.prototype.splice.call(y,N,1),O&&(Mo(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function wu(a,c,f,y){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==y)return N}return-1}var Eu="closure_lm_"+(1e6*Math.random()|0),Tu={};function Df(a,c,f,y,N){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Df(a,c[O],f,y,N);return null}return f=Lf(f),a&&a[cn]?a.K(c,f,d(y)?!!y.capture:!1,N):Pw(a,c,f,!1,y,N)}function Pw(a,c,f,y,N,O){if(!c)throw Error("Invalid event type");var B=d(N)?!!N.capture:!!N,he=Su(a);if(he||(a[Eu]=he=new Fo(a)),f=he.add(c,f,y,B,O),f.proxy)return f;if(y=Nw(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)an||(N=B),N===void 0&&(N=!1),a.addEventListener(c.toString(),y,N);else if(a.attachEvent)a.attachEvent(Vf(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Nw(){function a(f){return c.call(a.src,a.listener,f)}const c=bw;return a}function Of(a,c,f,y,N){if(Array.isArray(c))for(var O=0;O<c.length;O++)Of(a,c[O],f,y,N);else y=d(y)?!!y.capture:!!y,f=Lf(f),a&&a[cn]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],f=wu(O,f,y,N),-1<f&&(Mo(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Su(a))&&(c=a.g[c.toString()],a=-1,c&&(a=wu(c,f,y,N)),(f=-1<a?c[a]:null)&&Iu(f))}function Iu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[cn])_u(c.i,a);else{var f=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(f,y,a.capture):c.detachEvent?c.detachEvent(Vf(f),y):c.addListener&&c.removeListener&&c.removeListener(y),(f=Su(c))?(_u(f,a),f.h==0&&(f.src=null,c[Eu]=null)):Mo(a)}}}function Vf(a){return a in Tu?Tu[a]:Tu[a]="on"+a}function bw(a,c){if(a.da)a=!0;else{c=new ln(c,this);var f=a.listener,y=a.ha||a.src;a.fa&&Iu(a),a=f.call(y,c)}return a}function Su(a){return a=a[Eu],a instanceof Fo?a:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lf(a){return typeof a=="function"?a:(a[xu]||(a[xu]=function(c){return a.handleEvent(c)}),a[xu])}function Qe(){de.call(this),this.i=new Fo(this),this.M=this,this.F=null}A(Qe,de),Qe.prototype[cn]=!0,Qe.prototype.removeEventListener=function(a,c,f,y){Of(this,a,c,f,y)};function ot(a,c){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new ke(c,a);else if(c instanceof ke)c.target=c.target||a;else{var N=c;c=new ke(y,a),x(c,N)}if(N=!0,f)for(var O=f.length-1;0<=O;O--){var B=c.g=f[O];N=Uo(B,y,!0,c)&&N}if(B=c.g=a,N=Uo(B,y,!0,c)&&N,N=Uo(B,y,!1,c)&&N,f)for(O=0;O<f.length;O++)B=c.g=f[O],N=Uo(B,y,!1,c)&&N}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],y=0;y<f.length;y++)Mo(f[y]);delete a.g[c],a.h--}}this.F=null},Qe.prototype.K=function(a,c,f,y){return this.i.add(String(a),c,!1,f,y)},Qe.prototype.L=function(a,c,f,y){return this.i.add(String(a),c,!0,f,y)};function Uo(a,c,f,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,O=0;O<c.length;++O){var B=c[O];if(B&&!B.da&&B.capture==f){var he=B.listener,ze=B.ha||B.src;B.fa&&_u(a.i,B),N=he.call(ze,y)!==!1&&N}}return N&&!y.defaultPrevented}function jf(a,c,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Mf(a){a.g=jf(()=>{a.g=null,a.i&&(a.i=!1,Mf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Dw extends de{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Mf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(a){de.call(this),this.h=a,this.g={}}A(Zi,de);var Ff=[];function Uf(a){D(a.g,function(c,f){this.g.hasOwnProperty(f)&&Iu(c)},a),a.g={}}Zi.prototype.N=function(){Zi.aa.N.call(this),Uf(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ku=l.JSON.stringify,Ow=l.JSON.parse,Vw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Au(){}Au.prototype.h=null;function zf(a){return a.h||(a.h=a.i())}function Bf(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cu(){ke.call(this,"d")}A(Cu,ke);function Ru(){ke.call(this,"c")}A(Ru,ke);var Er={},$f=null;function zo(){return $f=$f||new Qe}Er.La="serverreachability";function Wf(a){ke.call(this,Er.La,a)}A(Wf,ke);function ts(a){const c=zo();ot(c,new Wf(c))}Er.STAT_EVENT="statevent";function Hf(a,c){ke.call(this,Er.STAT_EVENT,a),this.stat=c}A(Hf,ke);function at(a){const c=zo();ot(c,new Hf(c,a))}Er.Ma="timingevent";function qf(a,c){ke.call(this,Er.Ma,a),this.size=c}A(qf,ke);function ns(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function rs(){this.g=!0}rs.prototype.xa=function(){this.g=!1};function Lw(a,c,f,y,N,O){a.info(function(){if(a.g)if(O)for(var B="",he=O.split("&"),ze=0;ze<he.length;ze++){var oe=he[ze].split("=");if(1<oe.length){var Ye=oe[0];oe=oe[1];var Je=Ye.split("_");B=2<=Je.length&&Je[1]=="type"?B+(Ye+"="+oe+"&"):B+(Ye+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+c+`
`+f+`
`+B})}function jw(a,c,f,y,N,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+c+`
`+f+`
`+O+" "+B})}function Zr(a,c,f,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Fw(a,f)+(y?" "+y:"")})}function Mw(a,c){a.info(function(){return"TIMEOUT: "+c})}rs.prototype.info=function(){};function Fw(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return ku(f)}catch{return c}}var Bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pu;function $o(){}A($o,Au),$o.prototype.g=function(){return new XMLHttpRequest},$o.prototype.i=function(){return{}},Pu=new $o;function jn(a,c,f,y){this.j=a,this.i=c,this.l=f,this.R=y||1,this.U=new Zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gf}function Gf(){this.i=null,this.g="",this.h=!1}var Qf={},Nu={};function bu(a,c,f){a.L=1,a.v=Ko(dn(c)),a.m=f,a.P=!0,Yf(a,null)}function Yf(a,c){a.F=Date.now(),Wo(a),a.A=dn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),cp(f.i,"t",y),a.C=0,f=a.j.J,a.h=new Gf,a.g=Cp(a.j,f?c:null,!a.m),0<a.O&&(a.M=new Dw(v(a.Y,a,a.g),a.O)),c=a.U,f=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Ff[0]=N.toString()),N=Ff);for(var O=0;O<N.length;O++){var B=Df(f,N[O],y||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ts(),Lw(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const c=this.M;c&&hn(a)==3?c.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=hn(this.g);var c=this.g.Ba();const ni=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||vp(this.g)))){this.J||Je!=4||c==7||(c==8||0>=ni?ts(3):ts(2)),Du(this);var f=this.g.Z();this.X=f;t:if(Jf(this)){var y=vp(this.g);a="";var N=y.length,O=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),is(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(O&&c==N-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,jw(this.i,this.u,this.A,this.l,this.R,Je,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,ze=this.g;if((he=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(he)){var oe=he;break t}}oe=null}if(f=oe)Zr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ou(this,f);else{this.o=!1,this.s=3,at(12),Tr(this),is(this);break e}}if(this.P){f=!0;let Lt;for(;!this.J&&this.C<B.length;)if(Lt=Uw(this,B),Lt==Nu){Je==4&&(this.s=4,at(14),f=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Qf){this.s=4,at(15),Zr(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Zr(this.i,this.l,Lt,null),Ou(this,Lt);if(Jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||B.length!=0||this.h.h||(this.s=1,at(16),f=!1),this.o=this.o&&f,!f)Zr(this.i,this.l,B,"[Invalid Chunked Response]"),Tr(this),is(this);else if(0<B.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Uu(Ye),Ye.M=!0,at(11))}}else Zr(this.i,this.l,B,null),Ou(this,B);Je==4&&Tr(this),this.o&&!this.J&&(Je==4?Sp(this.j,this):(this.o=!1,Wo(this)))}else rE(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Tr(this),is(this)}}}catch{}finally{}};function Jf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Uw(a,c){var f=a.C,y=c.indexOf(`
`,f);return y==-1?Nu:(f=Number(c.substring(f,y)),isNaN(f)?Qf:(y+=1,y+f>c.length?Nu:(c=c.slice(y,y+f),a.C=y+f,c)))}jn.prototype.cancel=function(){this.J=!0,Tr(this)};function Wo(a){a.S=Date.now()+a.I,Xf(a,a.I)}function Xf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ns(v(a.ba,a),c)}function Du(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Mw(this.i,this.A),this.L!=2&&(ts(),at(17)),Tr(this),this.s=2,is(this)):Xf(this,this.S-a)};function is(a){a.j.G==0||a.J||Sp(a.j,a)}function Tr(a){Du(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Uf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ou(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||Vu(f.h,a))){if(!a.K&&Vu(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Zo(f),Jo(f);else break e;Fu(f),at(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=ns(v(f.Za,f),6e3));if(1>=tp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Sr(f,11)}else if((a.K||f.g==a)&&Zo(f),!T(c))for(N=f.Da.g.parse(c),c=0;c<N.length;c++){let oe=N[c];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Ye=oe[3];Ye!=null&&(f.la=Ye,f.j.info("VER="+f.la));const Je=oe[4];Je!=null&&(f.Aa=Je,f.j.info("SVER="+f.Aa));const ni=oe[5];ni!=null&&typeof ni=="number"&&0<ni&&(y=1.5*ni,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Lt=a.g;if(Lt){const ta=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ta){var O=y.h;O.g||ta.indexOf("spdy")==-1&&ta.indexOf("quic")==-1&&ta.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Lu(O,O.h),O.h=null))}if(y.D){const zu=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;zu&&(y.ya=zu,pe(y.I,y.D,zu))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var B=a;if(y.qa=Ap(y,y.J?y.ia:null,y.W),B.K){np(y.h,B);var he=B,ze=y.L;ze&&(he.I=ze),he.B&&(Du(he),Wo(he)),y.g=B}else Tp(y);0<f.i.length&&Xo(f)}else oe[0]!="stop"&&oe[0]!="close"||Sr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Sr(f,7):Mu(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}ts(4)}catch{}}var zw=class{constructor(a,c){this.g=a,this.map=c}};function Zf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ep(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tp(a){return a.h?1:a.g?a.g.size:0}function Vu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Lu(a,c){a.g?a.g.add(c):a.h=c}function np(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Zf.prototype.cancel=function(){if(this.i=rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return b(a.i)}function Bw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,y=0;y<f;y++)c.push(a[y]);return c}c=[],f=0;for(y in a)c[f++]=a[y];return c}function $w(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const y in a)c[f++]=y;return c}}}function ip(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=$w(a),y=Bw(a),N=y.length,O=0;O<N;O++)c.call(void 0,y[O],f&&f[O],a)}var sp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ww(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),N=null;if(0<=y){var O=a[f].substring(0,y);N=a[f].substring(y+1)}else O=a[f];c(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ir(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ir){this.h=a.h,Ho(this,a.j),this.o=a.o,this.g=a.g,qo(this,a.s),this.l=a.l;var c=a.i,f=new as;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),op(this,f),this.m=a.m}else a&&(c=String(a).match(sp))?(this.h=!1,Ho(this,c[1]||"",!0),this.o=ss(c[2]||""),this.g=ss(c[3]||"",!0),qo(this,c[4]),this.l=ss(c[5]||"",!0),op(this,c[6]||"",!0),this.m=ss(c[7]||"")):(this.h=!1,this.i=new as(null,this.h))}Ir.prototype.toString=function(){var a=[],c=this.j;c&&a.push(os(c,ap,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(os(c,ap,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(os(f,f.charAt(0)=="/"?Kw:qw,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",os(f,Qw)),a.join("")};function dn(a){return new Ir(a)}function Ho(a,c,f){a.j=f?ss(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function qo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function op(a,c,f){c instanceof as?(a.i=c,Yw(a.i,a.h)):(f||(c=os(c,Gw)),a.i=new as(c,a.h))}function pe(a,c,f){a.i.set(c,f)}function Ko(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ss(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function os(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,Hw),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ap=/[#\/\?@]/g,qw=/[#\?:]/g,Kw=/[#\?]/g,Gw=/[#\?@]/g,Qw=/#/g;function as(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ww(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=as.prototype,t.add=function(a,c){Mn(this),this.i=null,a=ei(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function lp(a,c){Mn(a),c=ei(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function up(a,c){return Mn(a),c=ei(a,c),a.g.has(c)}t.forEach=function(a,c){Mn(this),this.g.forEach(function(f,y){f.forEach(function(N){a.call(c,N,y,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let y=0;y<c.length;y++){const N=a[y];for(let O=0;O<N.length;O++)f.push(c[y])}return f},t.V=function(a){Mn(this);let c=[];if(typeof a=="string")up(this,a)&&(c=c.concat(this.g.get(ei(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Mn(this),this.i=null,a=ei(this,a),up(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function cp(a,c,f){lp(a,c),0<f.length&&(a.i=null,a.g.set(ei(a,c),b(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var y=c[f];const O=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var N=O;B[y]!==""&&(N+="="+encodeURIComponent(String(B[y]))),a.push(N)}}return this.i=a.join("&")};function ei(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Yw(a,c){c&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(f,y){var N=y.toLowerCase();y!=N&&(lp(this,y),cp(this,N,f))},a)),a.j=c}function Jw(a,c){const f=new rs;if(l.Image){const y=new Image;y.onload=k(Fn,f,"TestLoadImage: loaded",!0,c,y),y.onerror=k(Fn,f,"TestLoadImage: error",!1,c,y),y.onabort=k(Fn,f,"TestLoadImage: abort",!1,c,y),y.ontimeout=k(Fn,f,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function Xw(a,c){const f=new rs,y=new AbortController,N=setTimeout(()=>{y.abort(),Fn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(N),O.ok?Fn(f,"TestPingServer: ok",!0,c):Fn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Fn(f,"TestPingServer: error",!1,c)})}function Fn(a,c,f,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(f)}catch{}}function Zw(){this.g=new Vw}function eE(a,c,f){const y=f||"";try{ip(a,function(N,O){let B=N;d(N)&&(B=ku(N)),c.push(y+O+"="+encodeURIComponent(B))})}catch(N){throw c.push(y+"type="+encodeURIComponent("_badmap")),N}}function Go(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Go,Au),Go.prototype.g=function(){return new Qo(this.l,this.j)},Go.prototype.i=function(a){return function(){return a}}({});function Qo(a,c){Qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Qo,Qe),t=Qo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ls(this):us(this),this.readyState==3&&dp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ls(this))},t.Qa=function(a){this.g&&(this.response=a,ls(this))},t.ga=function(){this.g&&ls(this)};function ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,us(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hp(a){let c="";return D(a,function(f,y){c+=y,c+=":",c+=f,c+=`\r
`}),c}function ju(a,c,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=hp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):pe(a,c,f))}function Se(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Se,Qe);var tE=/^https?$/i,nE=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pu.g(),this.v=this.o?zf(this.o):zf(Pu),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){fp(this,O);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)f.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())f.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(nE,c,void 0))||y||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){fp(this,O)}};function fp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,pp(a),Yo(a)}function pp(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),Yo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yo(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?mp(this):this.bb())},t.bb=function(){mp(this)};function mp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||hn(a)!=4||a.Z()!=2)){if(a.u&&hn(a)==4)jf(a.Ea,0,a);else if(ot(a,"readystatechange"),hn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var y;if(y=B===0){var N=String(a.D).match(sp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!tE.test(N?N.toLowerCase():"")}f=y}if(f)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var O=2<hn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",pp(a)}}finally{Yo(a)}}}}function Yo(a,c){if(a.g){gp(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ot(a,"ready");try{f.onreadystatechange=y}catch{}}}function gp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ow(c)}};function vp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function rE(a){const c={};a=(a.g&&2<=hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(T(a[y]))continue;var f=C(a[y]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[N]||[];c[N]=O,O.push(f)}_(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function yp(a){this.Aa=0,this.i=[],this.j=new rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,a),this.cb=cs("retryDelaySeedMs",1e4,a),this.Wa=cs("forwardChannelMaxRetries",2,a),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Zf(a&&a.concurrentRequestLimit),this.Da=new Zw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yp.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,y){at(0),this.W=a,this.H=c||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Ap(this,null,this.W),Xo(this)};function Mu(a){if(_p(a),a.G==3){var c=a.U++,f=dn(a.I);if(pe(f,"SID",a.K),pe(f,"RID",c),pe(f,"TYPE","terminate"),ds(a,f),c=new jn(a,a.j,c),c.L=2,c.v=Ko(dn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Cp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Wo(c)}kp(a)}function Jo(a){a.g&&(Uu(a),a.g.cancel(),a.g=null)}function _p(a){Jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Zo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Xo(a){if(!ep(a.h)&&!a.s){a.s=!0;var c=a.Ga;ee||J(),M||(ee(),M=!0),W.add(c,a),a.B=0}}function iE(a,c){return tp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ns(v(a.Ga,a,c),xp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new jn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=g(O),x(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Ep(this,N,c),f=dn(this.I),pe(f,"RID",a),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),ds(this,f),O&&(this.O?c="headers="+encodeURIComponent(String(hp(O)))+"&"+c:this.m&&ju(f,this.m,O)),Lu(this.h,N),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",c),pe(f,"SID","null"),N.T=!0,bu(N,f,null)):bu(N,f,c),this.G=2}}else this.G==3&&(a?wp(this,a):this.i.length==0||ep(this.h)||wp(this))};function wp(a,c){var f;c?f=c.l:f=a.U++;const y=dn(a.I);pe(y,"SID",a.K),pe(y,"RID",f),pe(y,"AID",a.T),ds(a,y),a.m&&a.o&&ju(y,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Ep(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Lu(a.h,f),bu(f,y,c)}function ds(a,c){a.H&&D(a.H,function(f,y){pe(c,y,f)}),a.l&&ip({},function(f,y){pe(c,y,f)})}function Ep(a,c,f){f=Math.min(a.i.length,f);var y=a.l?v(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const B=["count="+f];O==-1?0<f?(O=N[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let he=!0;for(let ze=0;ze<f;ze++){let oe=N[ze].g;const Ye=N[ze].map;if(oe-=O,0>oe)O=Math.max(0,N[ze].g-100),he=!1;else try{eE(Ye,B,"req"+oe+"_")}catch{y&&y(Ye)}}if(he){y=B.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,y}function Tp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ee||J(),M||(ee(),M=!0),W.add(c,a),a.v=0}}function Fu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ns(v(a.Fa,a),xp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ip(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ns(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Jo(this),Ip(this))};function Uu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ip(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=dn(a.qa);pe(c,"RID","rpc"),pe(c,"SID",a.K),pe(c,"AID",a.T),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(c,"TO",a.ja),pe(c,"TYPE","xmlhttp"),ds(a,c),a.m&&a.o&&ju(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ko(dn(c)),f.m=null,f.P=!0,Yf(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Jo(this),Fu(this),at(19))};function Zo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Sp(a,c){var f=null;if(a.g==c){Zo(a),Uu(a),a.g=null;var y=2}else if(Vu(a.h,c))f=c.D,np(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;y=zo(),ot(y,new qf(y,f)),Xo(a)}else Tp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(y==1&&iE(a,c)||y==2&&Fu(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),N){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function xp(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Sr(a,c){if(a.j.info("Error code "+c),c==2){var f=v(a.fb,a),y=a.Xa;const N=!y;y=new Ir(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ho(y,"https"),Ko(y),N?Jw(y.toString(),f):Xw(y.toString(),f)}else at(2);a.G=0,a.l&&a.l.sa(c),kp(a),_p(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function kp(a){if(a.G=0,a.ka=[],a.l){const c=rp(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function Ap(a,c,f){var y=f instanceof Ir?dn(f):new Ir(f);if(y.g!="")c&&(y.g=c+"."+y.g),qo(y,y.s);else{var N=l.location;y=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var O=new Ir(null);y&&Ho(O,y),c&&(O.g=c),N&&qo(O,N),f&&(O.l=f),y=O}return f=a.D,c=a.ya,f&&c&&pe(y,f,c),pe(y,"VER",a.la),ds(a,y),y}function Cp(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Se(new Go({eb:f})):new Se(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rp(){}t=Rp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ea(){}ea.prototype.g=function(a,c){return new wt(a,c)};function wt(a,c){Qe.call(this),this.g=new yp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!T(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ti(this)}A(wt,Qe),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Mu(this.g)},wt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ku(a),a=f);c.i.push(new zw(c.Ya++,a)),c.G==3&&Xo(c)},wt.prototype.N=function(){this.g.l=null,delete this.j,Mu(this.g),delete this.g,wt.aa.N.call(this)};function Pp(a){Cu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}A(Pp,Cu);function Np(){Ru.call(this),this.status=1}A(Np,Ru);function ti(a){this.g=a}A(ti,Rp),ti.prototype.ua=function(){ot(this.g,"a")},ti.prototype.ta=function(a){ot(this.g,new Pp(a))},ti.prototype.sa=function(a){ot(this.g,new Np)},ti.prototype.ra=function(){ot(this.g,"b")},ea.prototype.createWebChannel=ea.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,D_=function(){return new ea},b_=function(){return zo()},N_=Er,Sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bo.NO_ERROR=0,Bo.TIMEOUT=8,Bo.HTTP_ERROR=6,ja=Bo,Kf.COMPLETE="complete",P_=Kf,Bf.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Cs=Bf,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,R_=Se}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});const Xm="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let Qi="10.14.0";/**
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
 */const Wr=new Lh("@firebase/firestore");function ws(){return Wr.logLevel}function q(t,...e){if(Wr.logLevel<=re.DEBUG){const n=e.map(Fh);Wr.debug(`Firestore (${Qi}): ${t}`,...n)}}function Rn(t,...e){if(Wr.logLevel<=re.ERROR){const n=e.map(Fh);Wr.error(`Firestore (${Qi}): ${t}`,...n)}}function ji(t,...e){if(Wr.logLevel<=re.WARN){const n=e.map(Fh);Wr.warn(`Firestore (${Qi}): ${t}`,...n)}}function Fh(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function ce(t,e){t||Y()}function Z(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class O_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class p1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class m1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class g1{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new O_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new tt(e)}}class v1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class y1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new v1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class w1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new _1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function E1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class V_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=E1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ve(0,0))}static max(){return new X(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class co{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends co{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const T1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends co{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return T1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ye.fromString(e))}static fromName(e){return new G(ye.fromString(e).popFirst(5))}static empty(){return new G(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ye(e.slice()))}}function I1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new pr(i,G.empty(),e)}function S1(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(X.min(),G.empty(),-1)}static max(){return new pr(X.max(),G.empty(),-1)}}function x1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const k1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ao(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==k1)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function C1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Co(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Uh.oe=-1;function Zl(t){return t==null}function wl(t){return t===0&&1/t==-1/0}function R1(t){return typeof t=="number"&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function L_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new eg(this.data.getIterator())}getIteratorFrom(e){return new eg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class eg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new It([])}unionWith(e){let n=new qe(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class j_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new j_("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const P1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=P1.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function zh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bh(t){const e=t.mapValue.fields.__previous_value__;return zh(e)?Bh(e):e}function ho(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class N1{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ea={mapValue:{}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zh(t)?4:D1(t)?9007199254740991:b1(t)?10:11:Y()}function nn(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ho(t).isEqual(ho(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),l=mr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Hr(i.bytesValue).isEqual(Hr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?wl(o)===wl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Mi(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Zm(o)!==Zm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!nn(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function po(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return tg(t.timestampValue,e.timestampValue);case 4:return tg(ho(t),ho(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Hr(s),u=Hr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=ae(l[d],u[d]);if(p!==0)return p}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ae(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ng(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,p;const m=s.fields||{},v=o.fields||{},k=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=(u=v.value)===null||u===void 0?void 0:u.arrayValue,b=ae(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((p=A==null?void 0:A.values)===null||p===void 0?void 0:p.length)||0);return b!==0?b:ng(k,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ea.mapValue&&o===Ea.mapValue)return 0;if(s===Ea.mapValue)return 1;if(o===Ea.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const v=ae(u[m],p[m]);if(v!==0)return v;const k=Fi(l[u[m]],d[p[m]]);if(k!==0)return k}return ae(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Y()}}function tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=mr(t),r=mr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function ng(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Fi(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Ui(t){return xd(t)}function xd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xd(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function kd(t){return!!t&&"integerValue"in t}function $h(t){return!!t&&"arrayValue"in t}function rg(t){return!!t&&"nullValue"in t}function ig(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ma(t){return!!t&&"mapValue"in t}function b1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function D1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=zs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(zs(this.value))}}function M_(t){const e=[];return Jr(t.fields,(n,r)=>{const i=new We([n]);if(Ma(r)){const s=M_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
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
 */class rt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,X.min(),X.min(),X.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,X.min(),X.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,X.min(),X.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class El{constructor(e,n){this.position=e,this.inclusive=n}}function sg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function og(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function O1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class F_{}class De extends F_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new L1(e,n,r):n==="array-contains"?new F1(e,r):n==="in"?new U1(e,r):n==="not-in"?new z1(e,r):n==="array-contains-any"?new B1(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new j1(e,r):new M1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fi(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends F_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return U_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function U_(t){return t.op==="and"}function z_(t){return V1(t)&&U_(t)}function V1(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Ad(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Ui(t.value);if(z_(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function B_(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&nn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&B_(o,i.filters[l]),!0):!1}(t,e):void Y()}function $_(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Ui(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map($_).join(" ,")+"}"}(t):"Filter"}class L1 extends De{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class j1 extends De{constructor(e,n){super(e,"in",n),this.keys=W_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class M1 extends De{constructor(e,n){super(e,"not-in",n),this.keys=W_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function W_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class F1 extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $h(n)&&po(n.arrayValue,this.value)}}class U1 extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&po(this.value.arrayValue,n)}}class z1 extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!po(this.value.arrayValue,n)}}class B1 extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$h(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>po(this.value.arrayValue,r))}}/**
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
 */class $1{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ag(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $1(t,e,n,r,i,s,o)}function Wh(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.ue=n}return e.ue}function Hh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!O1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!og(t.startAt,e.startAt)&&og(t.endAt,e.endAt)}function Cd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class eu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function W1(t,e,n,r,i,s,o,l){return new eu(t,e,n,r,i,s,o,l)}function tu(t){return new eu(t)}function lg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function H1(t){return t.collectionGroup!==null}function Bs(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Tl(s,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new Tl(We.keyField(),r))}return e.ce}function Zt(t){const e=Z(t);return e.le||(e.le=q1(e,Bs(t))),e.le}function q1(t,e){if(t.limitType==="F")return ag(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Tl(i.field,s)});const n=t.endAt?new El(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new El(t.startAt.position,t.startAt.inclusive):null;return ag(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rd(t,e,n){return new eu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nu(t,e){return Hh(Zt(t),Zt(e))&&t.limitType===e.limitType}function H_(t){return`${Wh(Zt(t))}|lt:${t.limitType}`}function ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$_(i)).join(", ")}]`),Zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ui(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ui(i)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function ru(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Bs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=sg(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Bs(r),i)||r.endAt&&!function(o,l,u){const d=sg(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Bs(r),i))}(t,e)}function K1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function q_(t){return(e,n)=>{let r=!1;for(const i of Bs(t)){const s=G1(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function G1(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Fi(u,d):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return L_(this.inner)}size(){return this.innerSize}}/**
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
 */const Q1=new Ie(G.comparator);function Pn(){return Q1}const K_=new Ie(G.comparator);function Rs(...t){let e=K_;for(const n of t)e=e.insert(n.key,n);return e}function G_(t){let e=K_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return $s()}function Q_(){return $s()}function $s(){return new Yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Y1=new Ie(G.comparator),J1=new qe(G.comparator);function ne(...t){let e=J1;for(const n of t)e=e.add(n);return e}const X1=new qe(ae);function Z1(){return X1}/**
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
 */function qh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function Y_(t){return{integerValue:""+t}}function ex(t,e){return R1(e)?Y_(e):qh(t,e)}/**
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
 */class iu{constructor(){this._=void 0}}function tx(t,e,n){return t instanceof Il?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zh(s)&&(s=Bh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof mo?X_(t,e):t instanceof go?Z_(t,e):function(i,s){const o=J_(i,s),l=ug(o)+ug(i.Pe);return kd(o)&&kd(i.Pe)?Y_(l):qh(i.serializer,l)}(t,e)}function nx(t,e,n){return t instanceof mo?X_(t,e):t instanceof go?Z_(t,e):n}function J_(t,e){return t instanceof Sl?function(r){return kd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Il extends iu{}class mo extends iu{constructor(e){super(),this.elements=e}}function X_(t,e){const n=e0(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class go extends iu{constructor(e){super(),this.elements=e}}function Z_(t,e){let n=e0(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class Sl extends iu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ug(t){return Ce(t.integerValue||t.doubleValue)}function e0(t){return $h(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof mo&&i instanceof mo||r instanceof go&&i instanceof go?Mi(r.elements,i.elements,nn):r instanceof Sl&&i instanceof Sl?nn(r.Pe,i.Pe):r instanceof Il&&i instanceof Il}(t.transform,e.transform)}class ix{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class su{}function t0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kh(t.key,bt.none()):new Ro(t.key,t.data,bt.none());{const n=t.data,r=pt.empty();let i=new qe(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wr(t.key,r,new It(i.toArray()),bt.none())}}function sx(t,e,n){t instanceof Ro?function(i,s,o){const l=i.value.clone(),u=dg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(i,s,o){if(!Fa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=dg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(n0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ws(t,e,n,r){return t instanceof Ro?function(s,o,l,u){if(!Fa(s.precondition,o))return l;const d=s.value.clone(),p=hg(s.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(s,o,l,u){if(!Fa(s.precondition,o))return l;const d=hg(s.fieldTransforms,u,o),p=o.data;return p.setAll(n0(s)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Fa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ox(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=J_(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function cg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mi(r,i,(s,o)=>rx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends su{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends su{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function n0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dg(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,nx(o,l,n[i]))}return r}function hg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tx(s,o,e))}return r}class Kh extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ax extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=t0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Mi(this.mutations,e.mutations,(n,r)=>cg(n,r))&&Mi(this.baseMutations,e.baseMutations,(n,r)=>cg(n,r))}}class Gh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return Y1}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gh(e,n,r,i)}}/**
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
 */class ux{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,ie;function dx(t){switch(t){default:return Y();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function r0(t){if(t===void 0)return Rn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Pe.OK:return j.OK;case Pe.CANCELLED:return j.CANCELLED;case Pe.UNKNOWN:return j.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return j.INTERNAL;case Pe.UNAVAILABLE:return j.UNAVAILABLE;case Pe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Pe.NOT_FOUND:return j.NOT_FOUND;case Pe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Pe.ABORTED:return j.ABORTED;case Pe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Pe.DATA_LOSS:return j.DATA_LOSS;default:return Y()}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hx(){return new TextEncoder}/**
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
 */const fx=new jr([4294967295,4294967295],0);function fg(t){const e=hx().encode(t),n=new C_;return n.update(e),new Uint8Array(n.digest())}function pg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new jr([n,r],0),new jr([i,s],0)]}class Qh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ps(`Invalid padding: ${n}`);if(r<0)throw new Ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=jr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(jr.fromNumber(r)));return i.compare(fx)===1&&(i=new jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=fg(e),[r,i]=pg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qh(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=fg(e),[r,i]=pg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ou{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ou(X.min(),i,new Ie(ae),Pn(),ne())}}class Po{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,ne(),ne(),ne())}}/**
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
 */class Ua{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class i0{constructor(e,n){this.targetId=e,this.me=n}}class s0{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class mg{constructor(){this.fe=0,this.ge=vg(),this.pe=Ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Po(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=vg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class px{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pn(),this.qe=gg(),this.Qe=new Ie(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Cd(s))if(r===0){const o=new G(s.path);this.Ue(n,o,rt.newNoDocument(o,X.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Hr(r).toUint8Array()}catch(u){if(u instanceof j_)return ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Qh(o,i,s)}catch(u){return ji(u instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Cd(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ou(e,n,this.Qe,this.ke,r);return this.ke=Pn(),this.qe=gg(),this.Qe=new Ie(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new mg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qe(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gg(){return new Ie(G.comparator)}function vg(){return new Ie(G.comparator)}const mx={asc:"ASCENDING",desc:"DESCENDING"},gx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vx={and:"AND",or:"OR"};class yx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pd(t,e){return t.useProto3Json||Zl(e)?e:{value:e}}function xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function o0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _x(t,e){return xl(t,e.toTimestamp())}function en(t){return ce(!!t),X.fromTimestamp(function(n){const r=mr(n);return new Ve(r.seconds,r.nanos)}(t))}function Yh(t,e){return Nd(t,e).canonicalString()}function Nd(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function a0(t){const e=ye.fromString(t);return ce(h0(e)),e}function bd(t,e){return Yh(t.databaseId,e.path)}function _c(t,e){const n=a0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(u0(n))}function l0(t,e){return Yh(t.databaseId,e)}function wx(t){const e=a0(t);return e.length===4?ye.emptyPath():u0(e)}function Dd(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function u0(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yg(t,e,n){return{name:bd(t,e),fields:n.value.mapValue.fields}}function Ex(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(ce(p===void 0||typeof p=="string"),Ge.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ge.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?j.UNKNOWN:r0(d.code);return new K(p,d.message||"")}(o);n=new s0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_c(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):X.min(),l=new pt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(i,s,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new Ua(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_c(t,r.document),s=r.readTime?en(r.readTime):X.min(),o=rt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ua([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_c(t,r.document),s=r.removedTargetIds||[];n=new Ua([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cx(i,s),l=r.targetId;n=new i0(l,o)}}return n}function Tx(t,e){let n;if(e instanceof Ro)n={update:yg(t,e.key,e.value)};else if(e instanceof Kh)n={delete:bd(t,e.key)};else if(e instanceof wr)n={update:yg(t,e.key,e.data),updateMask:Nx(e.fieldMask)};else{if(!(e instanceof ax))return Y();n={verify:bd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Il)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_x(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function Ix(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(X.min())&&(o=en(s)),new ix(o,i.transformResults||[])}(n,e))):[]}function Sx(t,e){return{documents:[l0(t,e.path)]}}function xx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=l0(t,i);const s=function(d){if(d.length!==0)return d0(rn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:si(v.field),direction:Cx(v.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Pd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function kx(t){let e=wx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const v=c0(m);return v instanceof rn&&z_(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(v=>function(A){return new Tl(oi(A.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(m){let v;return v=typeof m=="object"?m.value:m,Zl(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(m){const v=!!m.before,k=m.values||[];return new El(k,v)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const v=!m.before,k=m.values||[];return new El(k,v)}(n.endAt)),W1(e,i,o,s,l,"F",u,d)}function Ax(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function c0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=oi(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=oi(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=oi(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oi(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return De.create(oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>c0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function Cx(t){return mx[t]}function Rx(t){return gx[t]}function Px(t){return vx[t]}function si(t){return{fieldPath:t.canonicalString()}}function oi(t){return We.fromServerFormat(t.fieldPath)}function d0(t){return t instanceof De?function(n){if(n.op==="=="){if(ig(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(rg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ig(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(rg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:Rx(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>d0(i));return r.length===1?r[0]:{compositeFilter:{op:Px(n.op),filters:r}}}(t):Y()}function Nx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function h0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Xn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bx{constructor(e){this.ct=e}}function Dx(t){const e=kx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
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
 */class Ox{constructor(){this.un=new Vx}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(pr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Vx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(ye.comparator)).toArray()}}/**
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
 */class zi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new zi(0)}static kn(){return new zi(-1)}}/**
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
 */class Lx{constructor(){this.changes=new Yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Mx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ws(r.mutation,i,It.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Rs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Pn();const o=$s(),l=function(){return $s()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof wr)?s=s.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Ws(p.mutation,d,p.mutation.getFieldMask(),Ve.now())):o.set(d.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var m;return l.set(d,new jx(p,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=$s();let i=new Ie((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||It.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=Q_();p.forEach(v=>{if(!s.has(v)){const k=t0(n.get(v),r.get(v));k!==null&&m.set(v,k),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):H1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Dr());let l=-1,u=s;return o.next(d=>F.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?F.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ne())).next(p=>({batchId:l,changes:G_(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Rs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Rs();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const d=function(m,v){return new eu(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((m,v)=>{o=o.insert(m,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,rt.newInvalidDocument(p)))});let l=Rs();return o.forEach((u,d)=>{const p=s.get(u);p!==void 0&&Ws(p.mutation,d,It.empty(),Ve.now()),ru(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Fx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:en(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Dx(i.bundledQuery),readTime:en(i.readTime)}}(n)),F.resolve()}}/**
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
 */class Ux{constructor(){this.overlays=new Ie(G.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Dr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Dr(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Dr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ux(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class zx{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Jh{constructor(){this.Tr=new qe(Me.Er),this.dr=new qe(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new ye([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new ye([])),r=new Me(n,e),i=new Me(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class Bx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(Me.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ae);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Me(new G(s),0);let l=new qe(ae);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $x{constructor(e){this.Mr=e,this.docs=function(){return new Ie(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||x1(S1(p),r)<=0||(i.has(p.key)||ru(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Wx(this)}getSize(e){return F.resolve(this.size)}}class Wx extends Lx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Hx{constructor(e){this.persistence=e,this.Nr=new Yi(n=>Wh(n),Hh),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jh,this.targetCount=0,this.kr=zi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class qx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Uh(0),this.Kr=!1,this.Kr=!0,this.$r=new zx,this.referenceDelegate=e(this),this.Ur=new Hx(this),this.indexManager=new Ox,this.remoteDocumentCache=function(i){return new $x(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new bx(n),this.Gr=new Fx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ux,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Bx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Kx(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Kx extends A1{constructor(e){super(),this.currentSequenceNumber=e}}class Xh{constructor(e){this.persistence=e,this.Jr=new Jh,this.Yr=null}static Zr(e){return new Xh(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Zh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zh(e,n.fromCache,r,i)}}/**
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
 */class Gx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Qx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return QI()?8:C1(st())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Gx;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ws()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(ws()<=re.DEBUG&&q("QueryEngine","Query:",ii(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ws()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):F.resolve())}Yi(e,n){if(lg(n))return F.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rd(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Rd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return lg(n)||i.isEqual(X.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(ws()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ii(n)),this.rs(e,o,n,I1(i,-1)).next(l=>l))})}ts(e,n){let r=new qe(q_(e));return n.forEach((i,s)=>{ru(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ws()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ii(n)),this.Ji.getDocumentsMatchingQuery(e,n,pr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Yx{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(ae),this._s=new Yi(s=>Wh(s),Hh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Jx(t,e,n,r){return new Yx(t,e,n,r)}async function f0(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const d of i){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function Xx(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,v=m.keys();let k=F.resolve();return v.forEach(A=>{k=k.next(()=>p.getEntry(u,A)).next(b=>{const V=d.docVersions.get(A);ce(V!==null),b.version.compareTo(V)<0&&(m.applyToRemoteDocument(b,d),b.isValidDocument()&&(b.setReadTime(d.commitVersion),p.addEntry(b)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function p0(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Zx(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const v=i.get(m);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,m)));let k=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(Ge.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),i=i.insert(m,k),function(b,V,E){return b.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(v,k,p)&&l.push(n.Ur.updateTargetData(s,k))});let u=Pn(),d=ne();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(ek(s,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(X.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function ek(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function tk(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nk(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Od(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Co(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function _g(t,e,n){const r=Z(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const m=Z(u),v=m._s.get(p);return v!==void 0?F.resolve(m.os.get(v)):m.Ur.getTargetData(d,p)}(r,o,Zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(l=>(rk(r,K1(e),l),{documents:l,Ts:s})))}function rk(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class wg{constructor(){this.activeTargetIds=Z1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ik{constructor(){this.so=new wg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sk{_o(e){}shutdown(){}}/**
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
 */class Eg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ta=null;function wc(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
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
 */const ok={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ak{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const et="WebChannelConnection";class lk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=wc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(p=>(q("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw ji("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=ok[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=wc();return new Promise((o,l)=>{const u=new R_;u.setWithCredentials(!0),u.listenOnce(P_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ja.NO_ERROR:const p=u.getResponseJson();q(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case ja.TIMEOUT:q(et,`RPC '${e}' ${s} timed out`),l(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case ja.HTTP_ERROR:const m=u.getStatus();if(q(et,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const A=function(V){const E=V.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(E)>=0?E:j.UNKNOWN}(k.status);l(new K(A,k.message))}else l(new K(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(j.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{q(et,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);q(et,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=wc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=D_(),l=b_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");q(et,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);let v=!1,k=!1;const A=new ak({Io:V=>{k?q(et,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(v||(q(et,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),q(et,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},To:()=>m.close()}),b=(V,E,T)=>{V.listen(E,S=>{try{T(S)}catch(R){setTimeout(()=>{throw R},0)}})};return b(m,Cs.EventType.OPEN,()=>{k||(q(et,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),b(m,Cs.EventType.CLOSE,()=>{k||(k=!0,q(et,`RPC '${e}' stream ${i} transport closed`),A.So())}),b(m,Cs.EventType.ERROR,V=>{k||(k=!0,ji(et,`RPC '${e}' stream ${i} transport errored:`,V),A.So(new K(j.UNAVAILABLE,"The operation could not be completed")))}),b(m,Cs.EventType.MESSAGE,V=>{var E;if(!k){const T=V.data[0];ce(!!T);const S=T,R=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(R){q(et,`RPC '${e}' stream ${i} received error:`,R);const L=R.status;let D=function(w){const x=Pe[w];if(x!==void 0)return r0(x)}(L),_=R.message;D===void 0&&(D=j.INTERNAL,_="Unknown error status: "+L+" with message "+R.message),k=!0,A.So(new K(D,_)),m.close()}else q(et,`RPC '${e}' stream ${i} received:`,T),A.bo(T)}}),b(l,N_.STAT_EVENT,V=>{V.stat===Sd.PROXY?q(et,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Sd.NOPROXY&&q(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Ec(){return typeof document<"u"?document:null}/**
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
 */function au(t){return new yx(t,!0)}/**
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
 */class m0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class g0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new m0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uk extends g0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Ex(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?en(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Dd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Cd(u)?{documents:Sx(s,u)}:{query:xx(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=o0(s,o.resumeToken);const d=Pd(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=xl(s,o.snapshotVersion.toTimestamp());const d=Pd(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Ax(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Dd(this.serializer),n.removeTarget=e,this.a_(n)}}class ck extends g0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Ix(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Dd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tx(this.serializer,r))};this.a_(n)}}/**
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
 */class dk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Nd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Nd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class hk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class fk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=Z(u);d.L_.add(4),await No(d),d.q_.set("Unknown"),d.L_.delete(4),await lu(d)}(this))})}),this.q_=new hk(r,i)}}async function lu(t){if(Xr(t))for(const e of t.B_)await e(!0)}async function No(t){for(const e of t.B_)await e(!1)}function v0(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),rf(n)?nf(n):Ji(n).r_()&&tf(n,e))}function ef(t,e){const n=Z(t),r=Ji(n);n.N_.delete(e),r.r_()&&y0(n,e),n.N_.size===0&&(r.r_()?r.o_():Xr(n)&&n.q_.set("Unknown"))}function tf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ji(t).A_(e)}function y0(t,e){t.Q_.xe(e),Ji(t).R_(e)}function nf(t){t.Q_=new px({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ji(t).start(),t.q_.v_()}function rf(t){return Xr(t)&&!Ji(t).n_()&&t.N_.size>0}function Xr(t){return Z(t).L_.size===0}function _0(t){t.Q_=void 0}async function pk(t){t.q_.set("Online")}async function mk(t){t.N_.forEach((e,n)=>{tf(t,e)})}async function gk(t,e){_0(t),rf(t)?(t.q_.M_(e),nf(t)):t.q_.set("Unknown")}async function vk(t,e,n){if(t.q_.set("Online"),e instanceof s0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kl(t,r)}else if(e instanceof Ua?t.Q_.Ke(e):e instanceof i0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await p0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(d);p&&s.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(Ge.EMPTY_BYTE_STRING,p.snapshotVersion)),y0(s,u);const m=new Xn(p.target,u,d,p.sequenceNumber);tf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await kl(t,r)}}async function kl(t,e,n){if(!Co(e))throw e;t.L_.add(1),await No(t),t.q_.set("Offline"),n||(n=()=>p0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await lu(t)})}function w0(t,e){return e().catch(n=>kl(t,n,e))}async function uu(t){const e=Z(t),n=gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yk(e);)try{const i=await tk(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,_k(e,i)}catch(i){await kl(e,i)}E0(e)&&T0(e)}function yk(t){return Xr(t)&&t.O_.length<10}function _k(t,e){t.O_.push(e);const n=gr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function E0(t){return Xr(t)&&!gr(t).n_()&&t.O_.length>0}function T0(t){gr(t).start()}async function wk(t){gr(t).p_()}async function Ek(t){const e=gr(t);for(const n of t.O_)e.m_(n.mutations)}async function Tk(t,e,n){const r=t.O_.shift(),i=Gh.from(r,e,n);await w0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await uu(t)}async function Ik(t,e){e&&gr(t).V_&&await async function(r,i){if(function(o){return dx(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();gr(r).s_(),await w0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await uu(r)}}(t,e),E0(t)&&T0(t)}async function Tg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Xr(n);n.L_.add(3),await No(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await lu(n)}async function Sk(t,e){const n=Z(t);e?(n.L_.delete(2),await lu(n)):e||(n.L_.add(2),await No(n),n.q_.set("Unknown"))}function Ji(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new uk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:pk.bind(null,t),Ro:mk.bind(null,t),mo:gk.bind(null,t),d_:vk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),rf(t)?nf(t):t.q_.set("Unknown")):(await t.K_.stop(),_0(t))})),t.K_}function gr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new ck(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wk.bind(null,t),mo:Ik.bind(null,t),f_:Ek.bind(null,t),g_:Tk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await uu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new sf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function of(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),Co(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Rs(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ig{constructor(){this.W_=new Ie(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Bi(e,n,xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kk{constructor(){this.queries=Sg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Sg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function Sg(){return new Yi(t=>H_(t),nu)}async function af(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new xk,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=of(o,`Initialization of query '${ii(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&uf(n)}async function lf(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ak(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&uf(n)}function Ck(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function uf(t){t.Y_.forEach(e=>{e.next()})}var Vd,xg;(xg=Vd||(Vd={})).ea="default",xg.Cache="cache";class cf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Vd.Cache}}/**
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
 */class I0{constructor(e){this.key=e}}class S0{constructor(e){this.key=e}}class Rk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=q_(e),this.Ra=new xi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ig,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const v=i.get(p),k=ru(this.query,m)?m:null,A=!!v&&this.mutatedKeys.has(v.key),b=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let V=!1;v&&k?v.data.isEqual(k.data)?A!==b&&(r.track({type:3,doc:k}),V=!0):this.ga(v,k)||(r.track({type:2,doc:k}),V=!0,(u&&this.Aa(k,u)>0||d&&this.Aa(k,d)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),V=!0):v&&!k&&(r.track({type:1,doc:v}),V=!0,(u||d)&&(l=!0)),V&&(k?(o=o.add(k),s=b?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(k,A){const b=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return b(k)-b(A)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Bi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ig,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new S0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new I0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Bi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Pk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Nk{constructor(e){this.key=e,this.va=!1}}class bk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yi(l=>H_(l),nu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(G.comparator),this.Na=new Map,this.La=new Jh,this.Ba={},this.ka=new Map,this.qa=zi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Dk(t,e,n=!0){const r=P0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await x0(r,e,n,!0),i}async function Ok(t,e){const n=P0(t);await x0(n,e,!0,!1)}async function x0(t,e,n,r){const i=await nk(t.localStore,Zt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Vk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&v0(t.remoteStore,i),l}async function Vk(t,e,n,r,i){t.Ka=(m,v,k)=>async function(b,V,E,T){let S=V.view.ma(E);S.ns&&(S=await _g(b.localStore,V.query,!1).then(({documents:_})=>V.view.ma(_,S)));const R=T&&T.targetChanges.get(V.targetId),L=T&&T.targetMismatches.get(V.targetId)!=null,D=V.view.applyChanges(S,b.isPrimaryClient,R,L);return Ag(b,V.targetId,D.wa),D.snapshot}(t,m,v,k);const s=await _g(t.localStore,e,!0),o=new Rk(e,s.Ts),l=o.ma(s.documents),u=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);Ag(t,n,d.wa);const p=new Pk(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function Lk(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!nu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Od(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ef(r.remoteStore,i.targetId),Ld(r,i.targetId)}).catch(Ao)):(Ld(r,i.targetId),await Od(r.localStore,i.targetId,!0))}async function jk(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ef(n.remoteStore,r.targetId))}async function Mk(t,e,n){const r=Hk(t);try{const i=await function(o,l){const u=Z(o),d=Ve.now(),p=l.reduce((k,A)=>k.add(A.key),ne());let m,v;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let A=Pn(),b=ne();return u.cs.getEntries(k,p).next(V=>{A=V,A.forEach((E,T)=>{T.isValidDocument()||(b=b.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,A)).next(V=>{m=V;const E=[];for(const T of l){const S=ox(T,m.get(T.key).overlayedDocument);S!=null&&E.push(new wr(T.key,S,M_(S.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,d,E,l)}).next(V=>{v=V;const E=V.applyToLocalDocumentSet(m,b);return u.documentOverlayCache.saveOverlays(k,V.batchId,E)})}).then(()=>({batchId:v.batchId,changes:G_(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Ie(ae)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await bo(r,i.changes),await uu(r.remoteStore)}catch(i){const s=of(i,"Failed to persist write");n.reject(s)}}async function k0(t,e){const n=Z(t);try{const r=await Zx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await bo(n,r,e)}catch(r){await Ao(r)}}function kg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const v of m.j_)v.Z_(l)&&(d=!0)}),d&&uf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fk(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(G.comparator);o=o.insert(s,rt.newNoDocument(s,X.min()));const l=ne().add(s),u=new ou(X.min(),new Map,new Ie(ae),o,l);await k0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),df(r)}else await Od(r.localStore,e,!1).then(()=>Ld(r,e,n)).catch(Ao)}async function Uk(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await Xx(n.localStore,e);C0(n,r,null),A0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,i)}catch(i){await Ao(i)}}async function zk(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(ce(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);C0(r,e,n),A0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,i)}catch(i){await Ao(i)}}function A0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function C0(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||R0(t,r)})}function R0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ef(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),df(t))}function Ag(t,e,n){for(const r of n)r instanceof I0?(t.La.addReference(r.key,e),Bk(t,r)):r instanceof S0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||R0(t,r.key)):Y()}function Bk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),df(t))}function df(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(ye.fromString(e)),r=t.qa.next();t.Na.set(r,new Nk(n)),t.Oa=t.Oa.insert(n,r),v0(t.remoteStore,new Xn(Zt(tu(n.path)),r,"TargetPurposeLimboResolution",Uh.oe))}}async function bo(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Zh.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const p=Z(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(d,v=>F.forEach(v.$i,k=>p.persistence.referenceDelegate.addReference(m,v.targetId,k)).next(()=>F.forEach(v.Ui,k=>p.persistence.referenceDelegate.removeReference(m,v.targetId,k)))))}catch(m){if(!Co(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const v=m.targetId;if(!m.fromCache){const k=p.os.get(v),A=k.snapshotVersion,b=k.withLastLimboFreeSnapshotVersion(A);p.os=p.os.insert(v,b)}}}(r.localStore,s))}async function $k(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await f0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.hs)}}function Wk(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function P0(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fk.bind(null,e),e.Ca.d_=Ak.bind(null,e.eventManager),e.Ca.$a=Ck.bind(null,e.eventManager),e}function Hk(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zk.bind(null,e),e}class Al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=au(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Jx(this.persistence,new Qx,e.initialUser,this.serializer)}Ga(e){return new qx(Xh.Zr,this.serializer)}Wa(e){return new ik}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Al.provider={build:()=>new Al};class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$k.bind(null,this.syncEngine),await Sk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kk}()}createDatastore(e){const n=au(e.databaseInfo.databaseId),r=function(s){return new lk(s)}(e.databaseInfo);return function(s,o,l,u){return new dk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new fk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>kg(this.syncEngine,n,0),function(){return Eg.D()?new Eg:new sk}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,p){const m=new bk(i,s,o,l,u,d);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await No(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jd.provider={build:()=>new jd};/**
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
 */class hf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=V_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=of(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await f0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Kk(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Tg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Tg(e.remoteStore,i)),t._onlineComponents=e}async function Kk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ji("Error using user provided cache. Falling back to memory cache: "+n),await Tc(t,new Al)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Tc(t,new Al);return t._offlineComponents}async function N0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Cg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Cg(t,new jd))),t._onlineComponents}function Gk(t){return N0(t).then(e=>e.syncEngine)}async function Cl(t){const e=await N0(t),n=e.eventManager;return n.onListen=Dk.bind(null,e.syncEngine),n.onUnlisten=Lk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ok.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jk.bind(null,e.syncEngine),n}function Qk(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new hf({next:v=>{p.Za(),o.enqueueAndForget(()=>lf(s,m));const k=v.docs.has(l);!k&&v.fromCache?d.reject(new K(j.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&v.fromCache&&u&&u.source==="server"?d.reject(new K(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),m=new cf(tu(l.path),p,{includeMetadataChanges:!0,_a:!0});return af(s,m)}(await Cl(t),t.asyncQueue,e,n,r)),r.promise}function Yk(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new hf({next:v=>{p.Za(),o.enqueueAndForget(()=>lf(s,m)),v.fromCache&&u.source==="server"?d.reject(new K(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),m=new cf(l,p,{includeMetadataChanges:!0,_a:!0});return af(s,m)}(await Cl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function b0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Rg=new Map;/**
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
 */function D0(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jk(t,e,n,r){if(e===!0&&r===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pg(t){if(!G.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ng(t){if(G.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function _t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ff(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class bg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new p1;switch(r.type){case"firstParty":return new y1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Rg.get(n);r&&(q("ComponentProvider","Removing Datastore"),Rg.delete(n),r.terminate())}(this),Promise.resolve()}}function Xk(t,e,n,r={}){var i;const s=(t=_t(t,cu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=tt.MOCK_USER;else{l=BI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(d)}t._authCredentials=new m1(new O_(l,u))}}/**
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
 */class Do{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Do(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class cr extends Do{constructor(e,n,r){super(e,n,tu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new G(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function Gt(t,e,...n){if(t=Le(t),D0("collection","path",e),t instanceof cu){const r=ye.fromString(e,...n);return Ng(r),new cr(t,null,r)}{if(!(t instanceof ct||t instanceof cr))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Ng(r),new cr(t.firestore,null,r)}}function Ae(t,e,...n){if(t=Le(t),arguments.length===1&&(e=V_.newId()),D0("doc","path",e),t instanceof cu){const r=ye.fromString(e,...n);return Pg(r),new ct(t,null,new G(r))}{if(!(t instanceof ct||t instanceof cr))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Pg(r),new ct(t.firestore,t instanceof cr?t.converter:null,new G(r))}}/**
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
 */class Dg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new m0(this,"async_queue_retry"),this.Vu=()=>{const r=Ec();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Co(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=sf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Og(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Nn extends cu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Dg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dg(e),this._firestoreClient=void 0,await e}}}function Zk(t,e){const n=typeof t=="object"?t:x_(),r=typeof t=="string"?t:"(default)",i=Mh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=UI("firestore");s&&Xk(i,...s)}return i}function du(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eA(t),t._firestoreClient}function eA(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new N1(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,b0(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new qk(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class $i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $i(Ge.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $i(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pf{constructor(e){this._methodName=e}}/**
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
 */class mf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */class gf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const tA=/^__.*__$/;class nA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}class O0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function V0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class vf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(V0(this.Cu)&&tA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||au(e)}Qu(e,n,r,i=!1){return new vf({Cu:e,methodName:n,qu:r,path:We.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yf(t){const e=t._freezeSettings(),n=au(t._databaseId);return new rA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function L0(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);_f("Data must be an object, but it was:",o,r);const l=j0(r,o);let u,d;if(s.merge)u=new It(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const v=Md(e,m,n);if(!o.contains(v))throw new K(j.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);F0(p,v)||p.push(v)}u=new It(p),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new nA(new pt(l),u,d)}class fu extends pf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fu}}function iA(t,e,n,r){const i=t.Qu(1,e,n);_f("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();Jr(r,(u,d)=>{const p=wf(e,u,n);d=Le(d);const m=i.Nu(p);if(d instanceof fu)s.push(p);else{const v=pu(d,m);v!=null&&(s.push(p),o.set(p,v))}});const l=new It(s);return new O0(o,l,i.fieldTransforms)}function sA(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Md(e,r,n)],u=[i];if(s.length%2!=0)throw new K(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)l.push(Md(e,s[v])),u.push(s[v+1]);const d=[],p=pt.empty();for(let v=l.length-1;v>=0;--v)if(!F0(d,l[v])){const k=l[v];let A=u[v];A=Le(A);const b=o.Nu(k);if(A instanceof fu)d.push(k);else{const V=pu(A,b);V!=null&&(d.push(k),p.set(k,V))}}const m=new It(d);return new O0(p,m,o.fieldTransforms)}function pu(t,e){if(M0(t=Le(t)))return _f("Unsupported field value:",e,t),j0(t,e);if(t instanceof pf)return function(r,i){if(!V0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=pu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ex(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:xl(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xl(i.serializer,s)}}if(r instanceof mf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $i)return{bytesValue:o0(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yh(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return qh(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ff(r)}`)}(t,e)}function j0(t,e){const n={};return L_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,(r,i)=>{const s=pu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function M0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof mf||t instanceof $i||t instanceof ct||t instanceof pf||t instanceof gf)}function _f(t,e,n){if(!M0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ff(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Md(t,e,n){if((e=Le(e))instanceof hu)return e._internalPath;if(typeof e=="string")return wf(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const oA=new RegExp("[~\\*/\\[\\]]");function wf(t,e,n){if(e.search(oA)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hu(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(j.INVALID_ARGUMENT,l+t+u)}function F0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class U0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(z0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aA extends U0{data(){return super.data()}}function z0(t,e){return typeof e=="string"?wf(t,e):e instanceof hu?e._internalPath:e._delegate._internalPath}/**
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
 */function B0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lA{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new gf(s)}convertGeoPoint(e){return new mf(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ho(e));default:return null}}convertTimestamp(e){const n=mr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ce(h0(r));const i=new fo(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function $0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class W0 extends U0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(z0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class za extends W0{data(e={}){return super.data(e)}}class H0{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ns(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new za(this._firestore,this._userDataWriter,r.key,r,new Ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new za(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ns(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new za(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ns(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:uA(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function Es(t){t=_t(t,ct);const e=_t(t.firestore,Nn);return Qk(du(e),t._key).then(n=>q0(e,t,n))}class Ef extends lA{constructor(e){super(),this.firestore=e}convertBytes(e){return new $i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function cA(t){t=_t(t,Do);const e=_t(t.firestore,Nn),n=du(e),r=new Ef(e);return B0(t._query),Yk(n,t._query).then(i=>new H0(e,r,t,i))}function vo(t,e,n){t=_t(t,ct);const r=_t(t.firestore,Nn),i=$0(t.converter,e,n);return mu(r,[L0(yf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,bt.none())])}function dr(t,e,n,...r){t=_t(t,ct);const i=_t(t.firestore,Nn),s=yf(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof hu?sA(s,"updateDoc",t._key,e,n,r):iA(s,"updateDoc",t._key,e),mu(i,[o.toMutation(t._key,bt.exists(!0))])}function dA(t){return mu(_t(t.firestore,Nn),[new Kh(t._key,bt.none())])}function Ic(t,e){const n=_t(t.firestore,Nn),r=Ae(t),i=$0(t.converter,e);return mu(n,[L0(yf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function xr(t,...e){var n,r,i;t=Le(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Og(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Og(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,p;if(t instanceof ct)d=_t(t.firestore,Nn),p=tu(t._key.path),u={next:m=>{e[o]&&e[o](q0(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=_t(t,Do);d=_t(m.firestore,Nn),p=m._query;const v=new Ef(d);u={next:k=>{e[o]&&e[o](new H0(d,v,m,k))},error:e[o+1],complete:e[o+2]},B0(t._query)}return function(v,k,A,b){const V=new hf(b),E=new cf(k,V,A);return v.asyncQueue.enqueueAndForget(async()=>af(await Cl(v),E)),()=>{V.Za(),v.asyncQueue.enqueueAndForget(async()=>lf(await Cl(v),E))}}(du(d),p,l,u)}function mu(t,e){return function(r,i){const s=new Tn;return r.asyncQueue.enqueueAndForget(async()=>Mk(await Gk(r),i,s)),s.promise}(du(t),e)}function q0(t,e,n){const r=n.docs.get(e._key),i=new Ef(t);return new W0(t,i,e._key,r,new Ns(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Qi=i})(Gi),Li(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Nn(new g1(r.getProvider("auth-internal")),new w1(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fo(d.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ur(Xm,"4.7.3",e),ur(Xm,"4.7.3","esm2017")})();function Tf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function K0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hA=K0,G0=new xo("auth","Firebase",K0());/**
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
 */const Pl=new Lh("@firebase/auth");function fA(t,...e){Pl.logLevel<=re.WARN&&Pl.warn(`Auth (${Gi}): ${t}`,...e)}function Ba(t,...e){Pl.logLevel<=re.ERROR&&Pl.error(`Auth (${Gi}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw Sf(t,...e)}function Ht(t,...e){return Sf(t,...e)}function If(t,e,n){const r=Object.assign(Object.assign({},hA()),{[e]:n});return new xo("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return If(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vt(t,"argument-error"),If(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return G0.create(t,...e)}function Q(t,e,...n){if(!t)throw Sf(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ba(e),new Error(e)}function bn(t,e){t||yn(e)}/**
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
 */function Fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mA(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mA()||qI()||"connection"in navigator)?navigator.onLine:!0}function vA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=$I()||KI()}get(){return gA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xf(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Q0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _A=new Oo(3e4,6e4);function Vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sn(t,e,n,r,i={}){return Y0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ko(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return HI()||(d.referrerPolicy="no-referrer"),Q0.fetch()(J0(t,t.config.apiHost,n,l),d)})}async function Y0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yA),e);try{const i=new EA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ia(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw If(t,p,d);Vt(t,p)}}catch(i){if(i instanceof On)throw i;Vt(t,"network-request-failed",{message:String(i)})}}async function Vo(t,e,n,r,i={}){const s=await sn(t,e,n,r,i);return"mfaPendingCredential"in s&&Vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function J0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xf(t.config,i):`${t.config.apiScheme}://${i}`}function wA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),_A.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}function Lg(t){return t!==void 0&&t.enterprise!==void 0}class TA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function IA(t,e){return sn(t,"GET","/v2/recaptchaConfig",Vn(t,e))}/**
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
 */async function SA(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function X0(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=kf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(Sc(i.auth_time)),issuedAtTime:Hs(Sc(i.iat)),expirationTime:Hs(Sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function kf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=y_(n);return i?JSON.parse(i):(Ba("Failed to decode base64 JWT payload"),null)}catch(i){return Ba("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jg(t){const e=kf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&kA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class AA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wi(t,X0(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Z0(s.providerUserInfo):[],l=RA(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function CA(t){const e=Le(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Z0(t){return t.map(e=>{var{providerId:n}=e,r=Tf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function PA(t,e){const n=await Y0(t,{},async()=>{const r=ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=J0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Q0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NA(t,e){return sn(t,"POST","/v2/accounts:revokeToken",Vn(t,e))}/**
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
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=jg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ki;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function zn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Tf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ud(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xA(this,e)}reload(){return CA(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Wi(this,SA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(d=n.createdAt)!==null&&d!==void 0?d:void 0,T=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:S,emailVerified:R,isAnonymous:L,providerData:D,stsTokenManager:_}=n;Q(S&&_,e,"internal-error");const g=ki.fromJSON(this.name,_);Q(typeof S=="string",e,"internal-error"),zn(m,e.name),zn(v,e.name),Q(typeof R=="boolean",e,"internal-error"),Q(typeof L=="boolean",e,"internal-error"),zn(k,e.name),zn(A,e.name),zn(b,e.name),zn(V,e.name),zn(E,e.name),zn(T,e.name);const w=new _n({uid:S,auth:e,email:v,emailVerified:R,displayName:m,isAnonymous:L,photoURL:A,phoneNumber:k,tenantId:b,stsTokenManager:g,createdAt:E,lastLoginAt:T});return D&&Array.isArray(D)&&(w.providerData=D.map(x=>Object.assign({},x))),V&&(w._redirectEventId=V),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ki;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Z0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ki;l.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ud(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const Mg=new Map;function wn(t){bn(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
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
 */class ew{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ew.type="NONE";const Fg=ew;/**
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
 */function $a(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$a(this.userKey,i.apiKey,s),this.fullPersistenceKey=$a("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(wn(Fg),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||wn(Fg);const o=$a(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const m=_n._fromJSON(e,p);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ai(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Ai(s,e,r))}}/**
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
 */function Ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ow(e))return"Blackberry";if(aw(e))return"Webos";if(nw(e))return"Safari";if((e.includes("chrome/")||rw(e))&&!e.includes("edge/"))return"Chrome";if(sw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tw(t=st()){return/firefox\//i.test(t)}function nw(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rw(t=st()){return/crios\//i.test(t)}function iw(t=st()){return/iemobile/i.test(t)}function sw(t=st()){return/android/i.test(t)}function ow(t=st()){return/blackberry/i.test(t)}function aw(t=st()){return/webos/i.test(t)}function Af(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bA(t=st()){var e;return Af(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DA(){return GI()&&document.documentMode===10}function lw(t=st()){return Af(t)||sw(t)||aw(t)||ow(t)||/windows phone/i.test(t)||iw(t)}/**
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
 */function uw(t,e=[]){let n;switch(t){case"Browser":n=Ug(st());break;case"Worker":n=`${Ug(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gi}/${r}`}/**
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
 */class OA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VA(t,e={}){return sn(t,"GET","/v2/passwordPolicy",Vn(t,e))}/**
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
 */const LA=6;class jA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class MA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await X0(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(In(this));const n=e?Le(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VA(this),n=new jA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ln(t){return Le(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=nS(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FA(t){gu=t}function cw(t){return gu.loadJS(t)}function UA(){return gu.recaptchaEnterpriseScript}function zA(){return gu.gapiScript}function BA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $A="recaptcha-enterprise",WA="NO_RECAPTCHA";class HA{constructor(e){this.type=$A,this.auth=Ln(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{IA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new TA(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Lg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(WA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Lg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=UA();u.length!==0&&(u+=l),cw(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Bg(t,e,n,r=!1){const i=new HA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Bg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Bg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function qA(t,e){const n=Mh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yl(s,e??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function KA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GA(t,e,n){const r=Ln(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=dw(e),{host:o,port:l}=QA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),YA()}function dw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QA(t){const e=dw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$g(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$g(o)}}}function $g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function JA(t,e){return sn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function XA(t,e){return Vo(t,"POST","/v1/accounts:signInWithPassword",Vn(t,e))}async function ZA(t,e){return sn(t,"POST","/v1/accounts:sendOobCode",Vn(t,e))}async function eC(t,e){return ZA(t,e)}/**
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
 */async function tC(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}async function nC(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}/**
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
 */class yo extends Cf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bl(e,n,"signInWithPassword",XA);case"emailLink":return tC(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bl(e,r,"signUpPassword",JA);case"emailLink":return nC(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ci(t,e){return Vo(t,"POST","/v1/accounts:signInWithIdp",Vn(t,e))}/**
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
 */const rC="http://localhost";class Kr extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Tf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:rC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ko(n)}return e}}/**
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
 */function iC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sC(t){const e=ks(As(t)).link,n=e?ks(As(e)).deep_link_id:null,r=ks(As(t)).deep_link_id;return(r?ks(As(r)).link:null)||r||n||e||t}class Rf{constructor(e){var n,r,i,s,o,l;const u=ks(As(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=iC((i=u.mode)!==null&&i!==void 0?i:null);Q(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=sC(e);try{return new Rf(n)}catch{return null}}}/**
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
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,n){return yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rf.parseLink(n);return Q(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends Pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Lo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class mn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class Gn extends Lo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Lo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function oC(t,e){return Vo(t,"POST","/v1/accounts:signUp",Vn(t,e))}/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=Wg(r);return new Gr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wg(r);return new Gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Dl extends On{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dl(e,n,r,i)}}function hw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dl._fromErrorAndOperation(t,s,e,r):s})}async function aC(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function lC(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Wi(t,hw(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=kf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
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
 */async function fw(t,e,n=!1){if(zt(t.app))return Promise.reject(In(t));const r="signIn",i=await hw(t,r,e),s=await Gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uC(t,e){return fw(Ln(t),e)}/**
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
 */async function pw(t){const e=Ln(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cC(t,e,n){const r=Ln(t);await bl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",eC)}async function dC(t,e,n){if(zt(t.app))return Promise.reject(In(t));const r=Ln(t),o=await bl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pw(t),u}),l=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Hg(t,e,n){return zt(t.app)?Promise.reject(In(t)):uC(Le(t),Xi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pw(t),r})}/**
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
 */async function hC(t,e){return sn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function fC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Wi(r,hC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function pC(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function mC(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function gC(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function vC(t){return Le(t).signOut()}const Ol="__sak";/**
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
 */class mw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ol,"1"),this.storage.removeItem(Ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yC=1e3,_C=10;class gw extends mw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_C):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gw.type="LOCAL";const wC=gw;/**
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
 */class vw extends mw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vw.type="SESSION";const yw=vw;/**
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
 */function EC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await EC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
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
 */function Nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Nf("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const v=m;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function IC(t){tn().location.href=t}/**
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
 */function _w(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function SC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kC(){return _w()?self:null}/**
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
 */const ww="firebaseLocalStorageDb",AC=1,Vl="firebaseLocalStorage",Ew="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yu(t,e){return t.transaction([Vl],e?"readwrite":"readonly").objectStore(Vl)}function CC(){const t=indexedDB.deleteDatabase(ww);return new jo(t).toPromise()}function zd(){const t=indexedDB.open(ww,AC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vl,{keyPath:Ew})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vl)?e(r):(r.close(),await CC(),e(await zd()))})})}async function qg(t,e,n){const r=yu(t,!0).put({[Ew]:e,value:n});return new jo(r).toPromise()}async function RC(t,e){const n=yu(t,!1).get(e),r=await new jo(n).toPromise();return r===void 0?null:r.value}function Kg(t,e){const n=yu(t,!0).delete(e);return new jo(n).toPromise()}const PC=800,NC=3;class Tw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _w()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(kC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SC(),!this.activeServiceWorker)return;this.sender=new TC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zd();return await qg(e,Ol,"1"),await Kg(e,Ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yu(i,!1).getAll();return new jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tw.type="LOCAL";const bC=Tw;new Oo(3e4,6e4);/**
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
 */function Iw(t,e){return e?wn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bf extends Cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DC(t){return fw(t.auth,new bf(t),t.bypassAuthState)}function OC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),lC(n,new bf(t),t.bypassAuthState)}async function VC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),aC(n,new bf(t),t.bypassAuthState)}/**
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
 */class Sw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return OC;default:Vt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LC=new Oo(2e3,1e4);async function jC(t,e,n){if(zt(t.app))return Promise.reject(Ht(t,"operation-not-supported-in-this-environment"));const r=Ln(t);pA(t,e,Pf);const i=Iw(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}class Or extends Sw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LC.get())};e()}}Or.currentPopupAction=null;/**
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
 */const MC="pendingRedirect",Wa=new Map;class FC extends Sw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await UC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UC(t,e){const n=$C(e),r=BC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zC(t,e){Wa.set(t._key(),e)}function BC(t){return wn(t._redirectPersistence)}function $C(t){return $a(MC,t.config.apiKey,t.name)}async function WC(t,e,n=!1){if(zt(t.app))return Promise.reject(In(t));const r=Ln(t),i=Iw(r,e),o=await new FC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const HC=10*60*1e3;class qC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gg(e))}saveEventToCache(e){this.cachedEventUids.add(Gg(e)),this.lastProcessedEventTime=Date.now()}}function Gg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xw(t);default:return!1}}/**
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
 */async function GC(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
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
 */const QC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YC=/^https?/;async function JC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GC(t);for(const n of e)try{if(XC(n))return}catch{}Vt(t,"unauthorized-domain")}function XC(t){const e=Fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YC.test(n))return!1;if(QC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ZC=new Oo(3e4,6e4);function Qg(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eR(t){return new Promise((e,n)=>{var r,i,s;function o(){Qg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qg(),n(Ht(t,"network-request-failed"))},timeout:ZC.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=BA("iframefcb");return tn()[l]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},cw(`${zA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function tR(t){return Ha=Ha||eR(t),Ha}/**
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
 */const nR=new Oo(5e3,15e3),rR="__/auth/iframe",iR="emulator/auth/iframe",sR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aR(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xf(e,iR):`https://${t.config.authDomain}/${rR}`,r={apiKey:e.apiKey,appName:t.name,v:Gi},i=oR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ko(r).slice(1)}`}async function lR(t){const e=await tR(t),n=tn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:aR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},nR.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const uR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cR=500,dR=600,hR="_blank",fR="http://localhost";class Yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pR(t,e,n,r=cR,i=dR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},uR),{width:r.toString(),height:i.toString(),top:s,left:o}),d=st().toLowerCase();n&&(l=rw(d)?hR:n),tw(d)&&(e=e||fR,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[k,A])=>`${v}${k}=${A},`,"");if(bA(d)&&l!=="_self")return mR(e||"",l),new Yg(null);const m=window.open(e||"",l,p);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new Yg(m)}function mR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gR="__/auth/handler",vR="emulator/auth/handler",yR=encodeURIComponent("fac");async function Jg(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gi,eventId:i};if(e instanceof Pf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Lo){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${yR}=${encodeURIComponent(u)}`:"";return`${_R(t)}?${ko(l).slice(1)}${d}`}function _R({config:t}){return t.emulator?xf(t,vR):`https://${t.authDomain}/${gR}`}/**
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
 */const xc="webStorageSupport";class wR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yw,this._completeRedirectFn=WC,this._overrideRedirectResult=zC}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jg(e,n,r,Fd(),i);return pR(e,o,Nf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jg(e,n,r,Fd(),i);return IC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lR(e),r=new qC(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xc];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lw()||nw()||Af()}}const ER=wR;var Xg="@firebase/auth",Zg="1.7.9";/**
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
 */class TR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SR(t){Li(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uw(t)},d=new MA(r,i,s,u);return KA(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Li(new $r("auth-internal",e=>{const n=Ln(e.getProvider("auth").getImmediate());return(r=>new TR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(Xg,Zg,IR(t)),ur(Xg,Zg,"esm2017")}/**
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
 */const xR=5*60,kR=E_("authIdTokenMaxAge")||xR;let ev=null;const AR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kR)return;const i=n==null?void 0:n.token;ev!==i&&(ev=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CR(t=x_()){const e=Mh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qA(t,{popupRedirectResolver:ER,persistence:[bC,wC,yw]}),r=E_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=AR(s.toString());mC(n,o,()=>o(n.currentUser)),pC(n,l=>o(l))}}const i=__("auth");return i&&GA(n,`http://${i}`),n}function RR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SR("Browser");const PR={apiKey:"AIzaSyAA502qnoU0tIhpt13eZIDOhxDcIMCVCUI",authDomain:"kahwinapp-83e9a.firebaseapp.com",projectId:"kahwinapp-83e9a",storageBucket:"kahwinapp-83e9a.firebasestorage.app",messagingSenderId:"144754868373",appId:"1:144754868373:web:0b46b29c57b7502a409b9c"},kw=S_(PR),le=Zk(kw),Rr=CR(kw),NR=new mn;function Aw(t){return new Promise((e,n)=>{const r=new FileReader;r.onload=i=>{const s=new Image;s.onload=()=>{const o=document.createElement("canvas"),l=800;let u=s.width,d=s.height;u>l&&(d=d*l/u,u=l),d>l&&(u=u*l/d,d=l),o.width=u,o.height=d,o.getContext("2d").drawImage(s,0,0,u,d),e(o.toDataURL("image/jpeg",.75))},s.onerror=n,s.src=i.target.result},r.onerror=n,r.readAsDataURL(t)})}const Bt=(t,e="MYR")=>`${{MYR:"RM",SGD:"S$",USD:"$",GBP:"£"}[e]||e} ${(parseFloat(t)||0).toLocaleString("ms-MY",{minimumFractionDigits:2,maximumFractionDigits:2})}`,_o=t=>t?new Date(t).toLocaleDateString("ms-MY",{day:"numeric",month:"long",year:"numeric"}):"",bR=t=>{if(!t)return null;const e=new Date(t),n=new Date;return e.setHours(0,0,0,0),n.setHours(0,0,0,0),Math.ceil((e-n)/864e5)},tv={Dewan:"🏛️",Katering:"🍽️",Pakaian:"👗","Gambar/Video":"📷",Hantaran:"🎁",Hiasan:"🌸","Kad Jemputan":"💌",Pelamin:"👑",Transport:"🚗","Lain-lain":"💼"},nv={"auth/user-not-found":"Email tidak dijumpai.","auth/wrong-password":"Kata laluan salah.","auth/email-already-in-use":"Email sudah didaftarkan.","auth/weak-password":"Kata laluan min 6 aksara.","auth/invalid-email":"Format email tidak sah.","auth/invalid-credential":"Email atau kata laluan salah.","auth/popup-closed-by-user":"Log masuk Google dibatalkan."},rv={bg:"#FFF8F5",card:"#FFFFFF",border:"#F0E0E4",dark:"#2D2D2D",mid:"#6B6B6B",light:"#BDBDBD",rose:"#E8748A",rosePale:"#FDE8EC",roseLight:"#F2A0AE",roseBtn:"#F4B8C2",navBg:"#FFFFFF",headerBg:"#FFFFFF",inputBg:"#fffafc",sectionBg:"#F5EEF0",modalBg:"#FFFFFF"},Wn={bg:"#1A1A1A",card:"#2A2A2A",border:"#3D3030",dark:"#F0F0F0",mid:"#A0A0A0",light:"#666666",rose:"#F0889E",rosePale:"#3D2028",roseLight:"#8A3040",roseBtn:"#5A2030",navBg:"#222222",headerBg:"#222222",inputBg:"#333333",sectionBg:"#333333",modalBg:"#2A2A2A"};function DR(t){return`
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
  .err-msg{background:${t===Wn?"#3D1A20":"#FFF0F2"};border:1px solid ${t===Wn?"#6D2030":"#FFD0D8"};color:${t===Wn?"#FF8A9A":"#C0304A"};border-radius:10px;padding:10px 14px;font-size:13px;margin-bottom:14px;}
  .success-msg{background:${t===Wn?"#1A3020":"#E8F5E9"};border:1px solid ${t===Wn?"#2A6040":"#A5D6A7"};color:${t===Wn?"#6FCF97":"#2E7D32"};border-radius:10px;padding:10px 14px;font-size:13px;margin-bottom:14px;}

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
  `}let Sa=null;function qa(t){Sa||(Sa=document.createElement("style"),document.head.appendChild(Sa)),Sa.textContent=DR(t?Wn:rv),document.body.style.background=t?Wn.bg:rv.bg}const OR=["#1a1a1a","#2D3A4A","#3D2A3A","#2A3D2A","#3A2A1A","#1A2A3D","#4A2A2D","#2A1A3D"];function VR({onAuth:t,dark:e}){const[n,r]=z.useState("login"),[i,s]=z.useState(""),[o,l]=z.useState(""),[u,d]=z.useState(""),[p,m]=z.useState(!1),[v,k]=z.useState(""),[A,b]=z.useState(!1),V=async E=>{k(""),m(!0);try{const T=await E();t(T.user)}catch(T){k(nv[T.code]||T.message)}m(!1)};return h.jsxs("div",{className:"auth-wrap",children:[h.jsxs("div",{className:"auth-hero",children:[h.jsx("span",{className:"auth-logo",children:"💍"}),h.jsxs("h1",{className:"auth-title",children:["Kahwin",h.jsx("br",{}),"Planner"]}),h.jsx("p",{className:"auth-sub",children:"Rancang majlis impian bersama"})]}),h.jsxs("div",{className:"auth-card",children:[h.jsxs("div",{className:"auth-tabs",children:[h.jsx("button",{className:`auth-tab ${n==="login"?"active":""}`,onClick:()=>{r("login"),k(""),b(!1)},children:"Log Masuk"}),h.jsx("button",{className:`auth-tab ${n==="register"?"active":""}`,onClick:()=>{r("register"),k(""),b(!1)},children:"Daftar"})]}),v&&h.jsx("div",{className:"err-msg",children:v}),A&&h.jsx("div",{className:"success-msg",children:"✓ Email reset dihantar!"}),n==="register"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"field-label",children:"Nama Penuh"}),h.jsx("input",{className:"field-input",placeholder:"Nama kamu",value:i,onChange:E=>s(E.target.value)})]}),h.jsx("div",{className:"field-label",children:"Email"}),h.jsx("input",{className:"field-input",type:"email",placeholder:"email@contoh.com",value:o,onChange:E=>l(E.target.value)}),h.jsx("div",{className:"field-label",children:"Kata Laluan"}),h.jsx("input",{className:"field-input",type:"password",placeholder:"••••••••",value:u,onChange:E=>d(E.target.value),onKeyDown:E=>E.key==="Enter"&&V(()=>Hg(Rr,o,u))}),h.jsx("button",{className:"btn-primary",disabled:p||!o||!u||n==="register"&&!i,onClick:()=>V(n==="login"?()=>Hg(Rr,o,u):async()=>{const E=await dC(Rr,o,u);return await fC(E.user,{displayName:i}),E}),children:p?"Memuatkan...":n==="login"?"Log Masuk":"Daftar Sekarang"}),n==="login"&&h.jsx("div",{className:"forgot-link",onClick:async()=>{if(!o){k("Masukkan email dulu.");return}m(!0);try{await cC(Rr,o),b(!0),k("")}catch(E){k(nv[E.code]||E.message)}m(!1)},children:"Lupa kata laluan?"}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"atau"})}),h.jsxs("button",{className:"btn-google",disabled:p,onClick:()=>V(()=>jC(Rr,NR)),children:[h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[h.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),h.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),h.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),h.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Teruskan dengan Google"]})]})]})}function LR({user:t,onDone:e}){const[n,r]=z.useState(t.displayName||""),[i,s]=z.useState(""),[o,l]=z.useState(""),[u,d]=z.useState(!1);async function p(){if(!n||!i||!o)return;d(!0);const m={groom:n,bride:i,date:o,ownerId:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,team:[{uid:t.uid,email:t.email,name:t.displayName||t.email,role:"owner",joinedAt:new Date().toISOString()}],currency:"MYR",heroBg:"#1a1a1a",createdAt:new Date().toISOString()};await vo(Ae(le,"weddings",t.uid),m),await vo(Ae(le,"users",t.uid),{weddingId:t.uid,email:t.email,name:t.displayName||t.email},{merge:!0}),e({...m,id:t.uid}),d(!1)}return h.jsxs("div",{className:"setup-wrap",children:[h.jsx("div",{style:{fontSize:52,marginBottom:14},children:"💍"}),h.jsx("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:28,color:"var(--dark)",textAlign:"center",marginBottom:8},children:"Selamat Datang!"}),h.jsx("p",{style:{fontSize:14,color:"var(--mid)",marginBottom:28,textAlign:"center"},children:"Isi maklumat majlis kamu"}),h.jsxs("div",{className:"setup-card",children:[h.jsx("div",{className:"field-label",children:"Nama Pengantin Lelaki"}),h.jsx("input",{className:"field-input",placeholder:"Nama pengantin lelaki",value:n,onChange:m=>r(m.target.value)}),h.jsx("div",{className:"field-label",children:"Nama Pengantin Perempuan"}),h.jsx("input",{className:"field-input",placeholder:"Nama pengantin perempuan",value:i,onChange:m=>s(m.target.value)}),h.jsx("div",{className:"field-label",children:"Tarikh Majlis"}),h.jsx("input",{className:"field-input",type:"date",value:o,onChange:m=>l(m.target.value)}),h.jsx("button",{className:"btn-primary",onClick:p,disabled:!n||!i||!o||u,children:u?"Menyimpan...":"Mulakan Perancangan →"})]})]})}function jR({wedding:t,user:e,onClose:n}){const[r,i]=z.useState(""),[s,o]=z.useState(!1),[l,u]=z.useState(""),[d,p]=z.useState(!1);async function m(){if(r){o(!0),u("");try{await vo(Ae(le,"invites",r.replace(/\./g,"_")),{weddingId:t.id,fromUid:e.uid,fromEmail:e.email,fromName:e.displayName||e.email,toEmail:r,weddingGroom:t.groom,weddingBride:t.bride,createdAt:new Date().toISOString(),status:"pending"}),await dr(Ae(le,"weddings",t.id),{pendingPartner:r}),p(!0)}catch{u("Gagal hantar. Cuba lagi.")}o(!1)}}return h.jsx("div",{className:"modal-overlay",onClick:v=>v.target===v.currentTarget&&n(),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Jemput Pasangan 💑"}),d?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"success-msg",children:["✓ Jemputan disimpan untuk ",h.jsx("b",{children:r}),"!",h.jsx("br",{}),"Pasangan perlu daftar/login dengan email tersebut."]}),h.jsx("button",{className:"btn-primary",onClick:n,children:"Tutup"})]}):h.jsxs(h.Fragment,{children:[h.jsx("p",{style:{fontSize:14,color:"var(--mid)",marginBottom:16,lineHeight:1.6},children:"Masukkan email pasangan. Mereka perlu daftar akaun dengan email tersebut untuk join."}),l&&h.jsx("div",{className:"err-msg",children:l}),h.jsx("div",{className:"field-label",children:"Email Pasangan"}),h.jsx("input",{className:"field-input",type:"email",placeholder:"email@pasangan.com",value:r,onChange:v=>i(v.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:n,children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:m,disabled:!r||s,children:s?"...":"Hantar"})]})]})]})})}function MR({wedding:t,onClose:e,onSave:n}){const[r,i]=z.useState(t.heroBgType||"color"),[s,o]=z.useState(t.heroBg||"#1a1a1a"),[l,u]=z.useState(!1),[d,p]=z.useState(t.heroBgUrl||""),m=z.useRef();async function v(A){u(!0);try{const b=await Aw(A);p(b),await n({heroBgType:"image",heroBgUrl:b,heroBg:s}),e()}catch{alert("Gagal proses gambar. Cuba lagi.")}u(!1)}async function k(){await n({heroBgType:"color",heroBg:s}),e()}return h.jsx("div",{className:"modal-overlay",onClick:A=>A.target===A.currentTarget&&e(),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tukar Latar Hero 🎨"}),h.jsxs("div",{className:"radio-group",children:[h.jsx("div",{className:`radio-option ${r==="color"?"active":""}`,onClick:()=>i("color"),children:"🎨 Warna"}),h.jsx("div",{className:`radio-option ${r==="image"?"active":""}`,onClick:()=>i("image"),children:"🖼️ Gambar"})]}),r==="color"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"field-label",children:"Pilih Warna"}),h.jsx("div",{className:"color-swatches",children:OR.map(A=>h.jsx("div",{className:`color-swatch ${s===A?"active":""}`,style:{background:A},onClick:()=>o(A)},A))}),h.jsx("div",{className:"field-label",children:"Atau warna custom"}),h.jsx("input",{type:"color",value:s,onChange:A=>o(A.target.value),style:{width:"100%",height:44,border:"none",borderRadius:12,cursor:"pointer",background:"none",marginBottom:14}}),h.jsx("button",{className:"btn-primary",onClick:k,children:"Simpan"})]}),r==="image"&&h.jsxs(h.Fragment,{children:[h.jsx("p",{style:{fontSize:13,color:"var(--mid)",marginBottom:14,lineHeight:1.6},children:"Upload gambar untuk latar belakang. Gambar akan dikecilkan automatik."}),h.jsxs("label",{className:"img-upload-label",children:[h.jsx("input",{ref:m,type:"file",accept:"image/*",style:{display:"none"},onChange:A=>A.target.files[0]&&v(A.target.files[0])}),l?"Memproses gambar...":"📁 Pilih Gambar"]}),d&&h.jsx("img",{src:d,style:{width:"100%",borderRadius:12,marginBottom:14},alt:"preview"})]})]})})}function FR({wedding:t,onNav:e,expenses:n,checklist:r,guests:i,onUpdateWedding:s}){const[o,l]=z.useState(!1),u=bR(t.date),d=t.currency||"MYR",p=n.reduce((S,R)=>S+parseFloat(R.amount||0),0),m=n.filter(S=>S.status==="paid").reduce((S,R)=>S+parseFloat(R.amount||0),0),v=p>0?m/p*100:0,k=i.reduce((S,R)=>S+(R.type==="family"?1+(parseInt(R.familyCount)||0):1),0),A=i.filter(S=>S.rsvp==="hadir").reduce((S,R)=>S+(R.type==="family"?1+(parseInt(R.familyCount)||0):1),0),b=r.filter(S=>S.done).length,V=(t.team||[]).length>1,E=t.heroBgType==="image"&&t.heroBgUrl?{backgroundImage:`url(${t.heroBgUrl})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:t.heroBg||"#1a1a1a"};async function T(S){await dr(Ae(le,"weddings",t.id),S),s({...t,...S})}return h.jsxs("div",{children:[!V&&h.jsxs("div",{className:"invite-banner",children:[h.jsx("span",{style:{fontSize:28},children:"💑"}),h.jsxs("div",{children:[h.jsx("div",{style:{color:"white",fontSize:14,fontWeight:700},children:"Jemput Pasangan"}),h.jsx("div",{style:{color:"rgba(255,255,255,0.85)",fontSize:12},children:"Plan bersama-sama!"})]}),h.jsx("button",{className:"invite-banner-btn",onClick:()=>e("settings"),children:"Jemput"})]}),h.jsxs("div",{className:"hero-card",style:E,children:[h.jsx("div",{className:"hero-overlay"}),h.jsx("button",{className:"hero-edit-btn",onClick:()=>l(!0),children:"✏️ Tukar Latar"}),h.jsxs("div",{className:"hero-content",children:[h.jsx("div",{className:"hero-tag",children:"💒 Wedding"}),h.jsxs("div",{className:"hero-names",children:[h.jsx("h2",{children:t.groom}),h.jsx("div",{className:"amp",children:"&"}),h.jsx("h3",{children:t.bride})]}),h.jsxs("div",{className:"hero-date-row",children:[h.jsx("span",{className:"hero-date",children:_o(t.date)}),u!==null&&h.jsx("span",{className:"hero-days",children:u>0?`${u} hari lagi`:u===0?"Hari ini! 🎉":"Sudah berlalu"})]})]})]}),h.jsxs("div",{className:"section-grid",children:[h.jsxs("div",{className:"stat-card",onClick:()=>e("expenses"),children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[h.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--dark)"},children:"Perbelanjaan & Bajet"}),h.jsx("span",{style:{color:"var(--light)"},children:"›"})]}),h.jsx("span",{style:{fontSize:26,fontWeight:700,color:"var(--dark)"},children:Bt(m,d)}),h.jsxs("span",{style:{fontSize:15,color:"var(--mid)"},children:[" / ",Bt(p,d)]}),h.jsx("div",{className:"progress-bar-wrap",children:h.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(v,100)}%`}})}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:10},children:[h.jsxs("div",{children:[h.jsx("div",{style:{color:"var(--rose)",fontSize:13,fontWeight:600},children:Bt(m,d)}),h.jsx("div",{style:{fontSize:11,color:"var(--mid)"},children:"Sudah Bayar"})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontSize:13,fontWeight:600,color:"var(--dark)"},children:Bt(p-m,d)}),h.jsx("div",{style:{fontSize:11,color:"var(--mid)"},children:"Belum Bayar"})]})]})]}),h.jsxs("div",{className:"two-col",children:[h.jsxs("div",{className:"mini-stat",onClick:()=>e("checklist"),children:[h.jsxs("div",{style:{fontSize:13,fontWeight:600,color:"var(--dark)",display:"flex",justifyContent:"space-between"},children:["Checklist ",h.jsx("span",{children:"›"})]}),h.jsx("div",{style:{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"6px 0 2px"},children:b}),h.jsxs("div",{style:{fontSize:12,color:"var(--mid)"},children:["/ ",r.length," tugasan"]})]}),h.jsxs("div",{className:"mini-stat",onClick:()=>e("guests"),children:[h.jsxs("div",{style:{fontSize:13,fontWeight:600,color:"var(--dark)",display:"flex",justifyContent:"space-between"},children:["Tetamu ",h.jsx("span",{children:"›"})]}),h.jsx("div",{style:{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"6px 0 2px"},children:A}),h.jsxs("div",{style:{fontSize:12,color:"var(--mid)"},children:["/ ",k," jemputan"]})]})]})]}),h.jsx("div",{className:"section-title",children:"Alat Perancangan"}),h.jsx("div",{className:"feature-grid",children:[["💰","Perbelanjaan","expenses"],["✅","Checklist","checklist"],["👥","Tetamu","guests"],["🏦","Simpanan","savings"],["📅","Timeline","timeline"],["📝","Nota","notes"],["🖼️","Inspirasi","inspirasi"]].map(([S,R,L])=>h.jsxs("button",{className:"feature-btn",onClick:()=>e(L),children:[h.jsx("span",{className:"feature-icon",children:S}),h.jsx("span",{className:"feature-label",children:R})]},L))}),o&&h.jsx(MR,{wedding:t,onClose:()=>l(!1),onSave:T})]})}function UR({expenses:t,onAdd:e,onDelete:n,onToggle:r,currency:i}){const[s,o]=z.useState(!1),[l,u]=z.useState(""),[d,p]=z.useState(""),[m,v]=z.useState("Lain-lain"),[k,A]=z.useState("unpaid"),[b,V]=z.useState(!1),E=t.reduce((R,L)=>R+parseFloat(L.amount||0),0),T=t.filter(R=>R.status==="paid").reduce((R,L)=>R+parseFloat(L.amount||0),0);async function S(){!l||!d||(V(!0),await e({name:l,amount:parseFloat(d),category:m,status:k,createdAt:new Date().toISOString()}),u(""),p(""),v("Lain-lain"),A("unpaid"),V(!1),o(!1))}return h.jsxs("div",{children:[h.jsxs("div",{className:"expense-summary",children:[h.jsx("div",{style:{fontSize:12,color:"rgba(255,255,255,0.8)",fontWeight:500},children:"Jumlah Perbelanjaan"}),h.jsx("div",{style:{fontSize:32,fontWeight:700,color:"white",margin:"4px 0 14px"},children:Bt(E,i)}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:15,fontWeight:600,color:"white"},children:Bt(T,i)}),h.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.75)"},children:"Sudah Bayar"})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:15,fontWeight:600,color:"white"},children:Bt(E-T,i)}),h.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.75)"},children:"Belum Bayar"})]})]})]}),h.jsx("button",{className:"add-btn",onClick:()=>o(!0),children:"＋ Tambah Perbelanjaan"}),h.jsxs("div",{className:"list-section",children:[t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"💸"}),h.jsx("div",{className:"empty-title",children:"Tiada perbelanjaan lagi"})]}),t.map(R=>h.jsxs("div",{className:"list-item",children:[h.jsx("div",{className:"list-item-icon",children:tv[R.category]||"💼"}),h.jsxs("div",{className:"list-item-info",onClick:()=>r(R.id,R.status),style:{cursor:"pointer"},children:[h.jsx("div",{className:"list-item-name",children:R.name}),h.jsxs("div",{className:"list-item-sub",children:[R.category,R.addedBy?` · ${R.addedBy}`:""]})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:13,fontWeight:700,color:R.status==="paid"?"var(--rose)":"var(--mid)",textAlign:"right"},children:Bt(R.amount,i)}),h.jsx("div",{className:`badge ${R.status==="paid"?"badge-paid":"badge-unpaid"}`,children:R.status==="paid"?"✓ Bayar":"Belum"})]}),h.jsx("button",{className:"delete-btn",onClick:()=>n(R.id),children:"🗑"})]},R.id))]}),s&&h.jsx("div",{className:"modal-overlay",onClick:R=>R.target===R.currentTarget&&o(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tambah Perbelanjaan"}),h.jsx("div",{className:"field-label",children:"Nama"}),h.jsx("input",{className:"field-input",placeholder:"cth: Sewa Dewan",value:l,onChange:R=>u(R.target.value)}),h.jsxs("div",{className:"field-label",children:["Jumlah (",i,")"]}),h.jsx("input",{className:"field-input",type:"number",placeholder:"0.00",value:d,onChange:R=>p(R.target.value)}),h.jsx("div",{className:"field-label",children:"Kategori"}),h.jsx("select",{className:"field-input",value:m,onChange:R=>v(R.target.value),children:Object.keys(tv).map(R=>h.jsx("option",{children:R},R))}),h.jsx("div",{className:"field-label",children:"Status"}),h.jsx("div",{className:"radio-group",children:[["paid","✓ Sudah Bayar"],["unpaid","⏳ Belum Bayar"]].map(([R,L])=>h.jsx("div",{className:`radio-option ${k===R?"active":""}`,onClick:()=>A(R),children:L},R))}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>o(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:S,disabled:!l||!d||b,children:b?"...":"Simpan"})]})]})})]})}function zR({checklist:t,onAdd:e,onToggle:n,onDelete:r}){const[i,s]=z.useState(!1),[o,l]=z.useState(""),[u,d]=z.useState(!1),p=t.filter(v=>v.done).length;async function m(){o&&(d(!0),await e({task:o,done:!1,createdAt:new Date().toISOString()}),l(""),d(!1),s(!1))}return h.jsxs("div",{children:[h.jsxs("div",{style:{margin:16,background:"var(--card)",borderRadius:20,padding:20,boxShadow:"var(--shadow-sm)"},children:[h.jsx("div",{style:{fontSize:13,color:"var(--mid)",fontWeight:600},children:"Kemajuan Tugasan"}),h.jsxs("div",{style:{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"4px 0 10px"},children:[p," / ",t.length]}),h.jsx("div",{className:"progress-bar-wrap",children:h.jsx("div",{className:"progress-bar-fill",style:{width:t.length>0?`${p/t.length*100}%`:"0%"}})})]}),h.jsx("button",{className:"add-btn",onClick:()=>s(!0),children:"＋ Tambah Tugasan"}),h.jsxs("div",{className:"list-section",children:[t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"✅"}),h.jsx("div",{className:"empty-title",children:"Tiada tugasan lagi"})]}),t.map(v=>h.jsxs("div",{className:"checklist-item",children:[h.jsx("div",{className:`check-circle ${v.done?"done":""}`,onClick:()=>n(v.id,v.done),children:v.done&&h.jsx("span",{style:{color:"white",fontSize:13},children:"✓"})}),h.jsx("span",{className:`check-text ${v.done?"done":""}`,children:v.task}),v.addedBy&&h.jsx("span",{style:{fontSize:11,color:"var(--light)",flexShrink:0},children:v.addedBy}),h.jsx("button",{className:"delete-btn",onClick:()=>r(v.id),children:"🗑"})]},v.id))]}),i&&h.jsx("div",{className:"modal-overlay",onClick:v=>v.target===v.currentTarget&&s(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tambah Tugasan"}),h.jsx("div",{className:"field-label",children:"Nama Tugasan"}),h.jsx("input",{className:"field-input",placeholder:"cth: Tempah pelamin",value:o,onChange:v=>l(v.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>s(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:m,disabled:!o||u,children:u?"...":"Simpan"})]})]})})]})}function BR({guests:t,onAdd:e,onDelete:n,onRSVP:r}){const[i,s]=z.useState(!1),[o,l]=z.useState(""),[u,d]=z.useState(""),[p,m]=z.useState("belum"),[v,k]=z.useState("personal"),[A,b]=z.useState(""),[V,E]=z.useState(!1),T=t.reduce((D,_)=>D+(_.type==="family"?1+(parseInt(_.familyCount)||0):1),0),S=t.filter(D=>D.rsvp==="hadir").reduce((D,_)=>D+(_.type==="family"?1+(parseInt(_.familyCount)||0):1),0),R=t.filter(D=>D.rsvp==="tidak").length;async function L(){o&&(E(!0),await e({name:o,phone:u,rsvp:p,type:v,familyCount:v==="family"&&parseInt(A)||0,createdAt:new Date().toISOString()}),l(""),d(""),m("belum"),k("personal"),b(""),E(!1),s(!1))}return h.jsxs("div",{children:[h.jsx("div",{style:{margin:16,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10},children:[{l:"Jemputan",v:t.length,c:"var(--dark)"},{l:"Hadir (pax)",v:S,c:"#4CAF50"},{l:"Tidak Hadir",v:R,c:"#E05050"}].map(D=>h.jsxs("div",{style:{background:"var(--card)",borderRadius:16,padding:"14px 10px",textAlign:"center",boxShadow:"var(--shadow-sm)"},children:[h.jsx("div",{style:{fontSize:22,fontWeight:700,color:D.c},children:D.v}),h.jsx("div",{style:{fontSize:11,color:"var(--mid)",marginTop:2},children:D.l})]},D.l))}),h.jsxs("div",{style:{margin:"0 16px 12px",background:"var(--rose-pale)",borderRadius:12,padding:"10px 14px",fontSize:13,color:"var(--rose)",fontWeight:600},children:["Jumlah keseluruhan: ",T," pax"]}),h.jsx("button",{className:"add-btn",onClick:()=>s(!0),children:"＋ Tambah Tetamu"}),h.jsxs("div",{className:"list-section",children:[t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"👥"}),h.jsx("div",{className:"empty-title",children:"Tiada tetamu lagi"})]}),t.map(D=>{var g;const _=D.type==="family"?1+(parseInt(D.familyCount)||0):1;return h.jsxs("div",{className:"list-item",children:[h.jsx("div",{className:"guest-avatar",children:(g=D.name[0])==null?void 0:g.toUpperCase()}),h.jsxs("div",{style:{flex:1},children:[h.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--dark)"},children:D.name}),h.jsxs("div",{style:{fontSize:11,color:"var(--mid)",marginTop:2},children:[D.type==="family"?`👨‍👩‍👧‍👦 Berkeluarga · ${_} pax`:"👤 Personal",D.phone?` · ${D.phone}`:""]})]}),h.jsxs("select",{style:{fontSize:12,padding:"4px 8px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--input-bg)",color:"var(--dark)",cursor:"pointer",fontFamily:"DM Sans,sans-serif"},value:D.rsvp,onChange:w=>r(D.id,w.target.value),children:[h.jsx("option",{value:"belum",children:"⏳ Belum"}),h.jsx("option",{value:"hadir",children:"✅ Hadir"}),h.jsx("option",{value:"tidak",children:"❌ Tidak"})]}),h.jsx("button",{className:"delete-btn",onClick:()=>n(D.id),children:"🗑"})]},D.id)})]}),i&&h.jsx("div",{className:"modal-overlay",onClick:D=>D.target===D.currentTarget&&s(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tambah Tetamu"}),h.jsx("div",{className:"field-label",children:"Nama"}),h.jsx("input",{className:"field-input",placeholder:"Nama tetamu",value:o,onChange:D=>l(D.target.value)}),h.jsx("div",{className:"field-label",children:"No. Telefon (Pilihan)"}),h.jsx("input",{className:"field-input",placeholder:"012-3456789",value:u,onChange:D=>d(D.target.value)}),h.jsx("div",{className:"field-label",children:"Jenis Jemputan"}),h.jsxs("div",{className:"radio-group",children:[h.jsx("div",{className:`radio-option ${v==="personal"?"active":""}`,onClick:()=>k("personal"),children:"👤 Personal"}),h.jsx("div",{className:`radio-option ${v==="family"?"active":""}`,onClick:()=>k("family"),children:"👨‍👩‍👧‍👦 Berkeluarga"})]}),v==="family"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"field-label",children:"Bilangan Ahli Lain (selain ketua)"}),h.jsx("input",{className:"field-input",type:"number",placeholder:"cth: 3 (jadi jumlah = 4 pax)",value:A,onChange:D=>b(D.target.value)}),A&&h.jsxs("div",{style:{fontSize:12,color:"var(--rose)",marginBottom:14,marginTop:-8},children:["Jumlah pax: ",1+parseInt(A||0)," orang"]})]}),h.jsx("div",{className:"field-label",children:"RSVP"}),h.jsx("div",{className:"radio-group",children:[["belum","⏳ Belum"],["hadir","✅ Hadir"],["tidak","❌ Tidak"]].map(([D,_])=>h.jsx("div",{className:`radio-option ${p===D?"active":""}`,onClick:()=>m(D),children:_},D))}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>s(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:L,disabled:!o||V,children:V?"...":"Simpan"})]})]})})]})}function $R({savings:t,onAdd:e,onDelete:n,wedding:r}){const[i,s]=z.useState(!1),[o,l]=z.useState(""),[u,d]=z.useState(""),[p,m]=z.useState(!1),v=r.currency||"MYR",k=t.reduce((E,T)=>E+parseFloat(T.amount||0),0),A=parseFloat(r.savingsTarget)||0,b=A>0?Math.min(k/A*100,100):0;async function V(){!o||!u||(m(!0),await e({desc:o,amount:parseFloat(u),date:new Date().toISOString()}),l(""),d(""),m(!1),s(!1))}return h.jsxs("div",{children:[h.jsxs("div",{className:"savings-hero",children:[h.jsx("div",{style:{fontSize:12,opacity:.8},children:"Jumlah Simpanan"}),h.jsx("div",{style:{fontSize:34,fontWeight:700,margin:"4px 0 4px"},children:Bt(k,v)}),h.jsxs("div",{style:{fontSize:13,opacity:.8},children:["Sasaran: ",Bt(A,v)]}),h.jsx("div",{style:{background:"rgba(255,255,255,0.2)",borderRadius:4,height:8,marginTop:12,overflow:"hidden"},children:h.jsx("div",{style:{height:"100%",background:"white",borderRadius:4,width:`${b}%`,transition:"width 0.5s"}})}),h.jsxs("div",{style:{fontSize:13,marginTop:6,opacity:.9},children:[b.toFixed(0),"% tercapai"]})]}),h.jsxs("div",{style:{padding:"0 16px 12px"},children:[h.jsxs("div",{className:"field-label",style:{marginBottom:6},children:["Sasaran (",v,")"]}),h.jsx("input",{className:"field-input",type:"number",placeholder:"cth: 50000",defaultValue:r.savingsTarget,onBlur:E=>dr(Ae(le,"weddings",r.id),{savingsTarget:parseFloat(E.target.value)||0})})]}),h.jsx("button",{className:"add-btn",onClick:()=>s(!0),children:"＋ Tambah Simpanan"}),h.jsxs("div",{className:"list-section",children:[t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"🏦"}),h.jsx("div",{className:"empty-title",children:"Tiada rekod simpanan"})]}),t.map(E=>h.jsxs("div",{className:"list-item",children:[h.jsx("div",{className:"list-item-icon",children:"💰"}),h.jsxs("div",{className:"list-item-info",children:[h.jsx("div",{className:"list-item-name",children:E.desc}),h.jsx("div",{className:"list-item-sub",children:_o(E.date)})]}),h.jsx("div",{style:{fontSize:13,fontWeight:700,color:"var(--rose)"},children:Bt(E.amount,v)}),h.jsx("button",{className:"delete-btn",onClick:()=>n(E.id),children:"🗑"})]},E.id))]}),i&&h.jsx("div",{className:"modal-overlay",onClick:E=>E.target===E.currentTarget&&s(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Tambah Simpanan"}),h.jsx("div",{className:"field-label",children:"Keterangan"}),h.jsx("input",{className:"field-input",placeholder:"cth: Gaji Januari",value:o,onChange:E=>l(E.target.value)}),h.jsxs("div",{className:"field-label",children:["Jumlah (",v,")"]}),h.jsx("input",{className:"field-input",type:"number",placeholder:"0.00",value:u,onChange:E=>d(E.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>s(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:V,disabled:!o||!u||p,children:p?"...":"Simpan"})]})]})})]})}function WR({timeline:t,onAdd:e,onDelete:n,onEdit:r,wedding:i}){const[s,o]=z.useState(!1),[l,u]=z.useState(null),[d,p]=z.useState(""),[m,v]=z.useState("📌"),[k,A]=z.useState(""),[b,V]=z.useState(!1);function E(){u(null),p(""),v("📌"),A(""),o(!0)}function T(_){u(_),p(_.label),v(_.icon||"📌"),A(_.date||""),o(!0)}async function S(){!d||!k||(V(!0),l?await r(l.id,{label:d,icon:m,date:k}):await e({label:d,icon:m,date:k,createdAt:new Date().toISOString()}),V(!1),o(!1))}const R=new Date,L=[...t].sort((_,g)=>new Date(_.date)-new Date(g.date)),D=["📌","🏛️","👗","👑","💌","📷","📬","✂️","📋","💍","💒","🎉","🎂","🛍️","✈️","🏨","💐","🎵"];return h.jsxs("div",{children:[h.jsx("button",{className:"add-btn",onClick:E,children:"＋ Tambah Timeline"}),h.jsxs("div",{style:{padding:"0 16px"},children:[L.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"📅"}),h.jsx("div",{className:"empty-title",children:"Tiada timeline lagi"}),h.jsx("div",{className:"empty-sub",children:"Tambah milestone perkahwinan kamu"})]}),h.jsxs("div",{style:{position:"relative",paddingLeft:28},children:[L.length>0&&h.jsx("div",{style:{position:"absolute",left:10,top:0,bottom:0,width:2,background:"var(--border)",borderRadius:2}}),L.map((_,g)=>{const w=new Date(_.date)<R;return h.jsxs("div",{style:{display:"flex",gap:14,marginBottom:20,position:"relative"},children:[h.jsx("div",{style:{position:"absolute",left:-22,top:14,width:16,height:16,borderRadius:"50%",background:w?"var(--rose)":"var(--card)",border:"2px solid var(--rose)",display:"flex",alignItems:"center",justifyContent:"center"},children:w&&h.jsx("span",{style:{color:"white",fontSize:8,fontWeight:700},children:"✓"})}),h.jsxs("div",{className:"timeline-item",style:{opacity:w?.75:1},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{style:{fontSize:22},children:_.icon||"📌"}),h.jsxs("div",{style:{display:"flex",gap:6},children:[h.jsx("button",{className:"edit-btn",onClick:()=>T(_),children:"✏️"}),h.jsx("button",{className:"delete-btn",onClick:()=>n(_.id),children:"🗑"})]})]}),h.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--dark)",marginTop:8},children:_.label}),h.jsx("div",{style:{fontSize:12,color:w?"var(--rose)":"var(--mid)",marginTop:4,fontWeight:w?600:400},children:_o(_.date)})]})]},_.id)})]})]}),s&&h.jsx("div",{className:"modal-overlay",onClick:_=>_.target===_.currentTarget&&o(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsxs("div",{className:"modal-title",children:[l?"Edit":"Tambah"," Timeline"]}),h.jsx("div",{className:"field-label",children:"Nama Milestone"}),h.jsx("input",{className:"field-input",placeholder:"cth: Tempah dewan",value:d,onChange:_=>p(_.target.value)}),h.jsx("div",{className:"field-label",children:"Tarikh"}),h.jsx("input",{className:"field-input",type:"date",value:k,onChange:_=>A(_.target.value)}),h.jsx("div",{className:"field-label",children:"Ikon"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:14},children:D.map(_=>h.jsx("button",{onClick:()=>v(_),style:{fontSize:22,background:m===_?"var(--rose-pale)":"var(--section-bg)",border:m===_?"2px solid var(--rose)":"2px solid transparent",borderRadius:10,width:40,height:40,cursor:"pointer"},children:_},_))}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>o(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:S,disabled:!d||!k||b,children:b?"...":"Simpan"})]})]})})]})}function HR({inspirasi:t,onAdd:e,onDelete:n,onEdit:r,weddingId:i}){const[s,o]=z.useState(!1),[l,u]=z.useState(null),[d,p]=z.useState(""),[m,v]=z.useState(""),[k,A]=z.useState(!1),b=z.useRef();function V(){u(null),p(""),v(""),o(!0)}function E(D){u(D),p(D.nota||""),v(D.imgUrl||""),o(!0)}async function T(D){const _=D.target.files[0];if(!_)return;const g=await Aw(_);v(g)}async function S(){A(!0);const D=m||(l==null?void 0:l.imgUrl)||"";l?await r(l.id,{nota:d,imgUrl:D}):await e({nota:d,imgUrl:D,createdAt:new Date().toISOString()}),A(!1),o(!1)}const[R,L]=z.useState(null);return h.jsxs("div",{children:[h.jsx("button",{className:"add-btn",onClick:V,children:"＋ Tambah Inspirasi"}),t.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"🖼️"}),h.jsx("div",{className:"empty-title",children:"Tiada inspirasi lagi"}),h.jsx("div",{className:"empty-sub",children:"Simpan idea & inspirasi wedding kamu"})]}),h.jsx("div",{className:"inspi-grid",children:t.map(D=>h.jsxs("div",{className:"inspi-card",onClick:()=>L(D),children:[D.imgUrl?h.jsx("img",{src:D.imgUrl,className:"inspi-img",alt:"inspirasi"}):h.jsx("div",{className:"inspi-img-placeholder",children:"🖼️"}),D.nota&&h.jsx("div",{className:"inspi-note",children:h.jsx("div",{className:"inspi-note-text",children:D.nota})})]},D.id))}),R&&h.jsx("div",{className:"modal-overlay",onClick:D=>D.target===D.currentTarget&&L(null),children:h.jsxs("div",{className:"modal",style:{maxHeight:"90vh"},children:[h.jsx("div",{className:"modal-handle"}),R.imgUrl&&h.jsx("img",{src:R.imgUrl,style:{width:"100%",borderRadius:14,marginBottom:14},alt:"inspirasi"}),R.nota&&h.jsx("p",{style:{fontSize:14,color:"var(--dark)",lineHeight:1.6,marginBottom:16},children:R.nota}),h.jsxs("div",{style:{display:"flex",gap:10},children:[h.jsx("button",{className:"btn-cancel",style:{flex:1},onClick:()=>L(null),children:"Tutup"}),h.jsx("button",{className:"btn-save",style:{flex:1},onClick:()=>{L(null),E(R)},children:"✏️ Edit"}),h.jsx("button",{style:{flex:1,padding:13,background:"var(--rose-pale)",color:"#E05050",border:"none",borderRadius:"var(--radius-sm)",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"DM Sans,sans-serif"},onClick:()=>{n(R.id),L(null)},children:"🗑 Padam"})]})]})}),s&&h.jsx("div",{className:"modal-overlay",onClick:D=>D.target===D.currentTarget&&o(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsxs("div",{className:"modal-title",children:[l?"Edit":"Tambah"," Inspirasi 🖼️"]}),h.jsxs("label",{className:"img-upload-label",children:[h.jsx("input",{ref:b,type:"file",accept:"image/*",style:{display:"none"},onChange:T}),m?h.jsx("img",{src:m,style:{width:"100%",borderRadius:10},alt:"preview"}):"📁 Pilih Gambar (dikecilkan auto)"]}),h.jsx("div",{className:"field-label",children:"Nota / Keterangan"}),h.jsx("textarea",{className:"field-input",rows:3,placeholder:"Tulis nota untuk inspirasi ini...",value:d,onChange:D=>p(D.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>o(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:S,disabled:k,children:k?"Menyimpan...":"Simpan"})]})]})})]})}function qR({notes:t,onSave:e}){const[n,r]=z.useState(t||""),[i,s]=z.useState(!0);z.useEffect(()=>r(t||""),[t]);function o(l){r(l),s(!1),clearTimeout(window._nt),window._nt=setTimeout(async()=>{await e(l),s(!0)},1200)}return h.jsxs("div",{style:{padding:"0 16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0 12px"},children:[h.jsx("span",{style:{fontSize:13,color:"var(--mid)"},children:"Auto-save aktif"}),h.jsx("span",{style:{fontSize:12,color:i?"#4CAF50":"var(--rose)",fontWeight:600},children:i?"✓ Tersimpan":"Menyimpan..."})]}),h.jsx("textarea",{value:n,onChange:l=>o(l.target.value),placeholder:"Tulis nota perkahwinan kamu di sini...",style:{width:"100%",minHeight:"60vh",padding:16,border:"1.5px solid var(--border)",borderRadius:16,fontSize:15,fontFamily:"DM Sans,sans-serif",color:"var(--dark)",background:"var(--card)",outline:"none",resize:"none",lineHeight:1.7}})]})}function KR({wedding:t,user:e,onBack:n,onUpdate:r,onSignOut:i,dark:s,setDark:o}){const[l,u]=z.useState(!1),[d,p]=z.useState(!1),[m,v]=z.useState(t.groom),[k,A]=z.useState(t.bride),[b,V]=z.useState(t.date),[E,T]=z.useState(!1),[S,R]=z.useState(null),L=t.ownerId===e.uid;async function D(){T(!0),await dr(Ae(le,"weddings",t.id),{groom:m,bride:k,date:b}),r({...t,groom:m,bride:k,date:b}),T(!1),p(!1)}async function _(){const g=await cA(Gt(le,"weddings",t.id,"activityLog"));R(g.docs.map(w=>w.data()).sort((w,x)=>new Date(x.time)-new Date(w.time)))}return h.jsxs("div",{style:{paddingBottom:30},children:[h.jsxs("div",{style:{padding:"20px 20px 8px",display:"flex",alignItems:"center",gap:12},children:[h.jsx("button",{onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:24,color:"var(--mid)"},children:"‹"}),h.jsx("h2",{style:{fontFamily:"'Playfair Display',serif",fontSize:22,color:"var(--dark)"},children:"Profil & Tetapan"})]}),h.jsxs("div",{className:"settings-section",children:[h.jsxs("div",{className:"settings-row",onClick:()=>p(!0),children:[h.jsx("span",{className:"settings-row-icon",children:"💒"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Events"}),h.jsxs("div",{className:"settings-row-sub",children:[t.groom," & ",t.bride]})]}),h.jsx("span",{style:{color:"var(--light)",fontSize:18},children:"›"})]}),h.jsxs("div",{className:`settings-row ${L?"":"disabled"}`,onClick:()=>L&&u(!0),children:[h.jsx("span",{className:"settings-row-icon",children:"💑"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Jemput Pasangan"}),h.jsx("div",{className:"settings-row-sub",children:L?"Jemput pasangan untuk edit bersama":"Hanya pemilik boleh menjemput"})]}),h.jsx("span",{style:{color:"var(--light)",fontSize:18},children:"›"})]})]}),h.jsxs("div",{className:"settings-section",children:[h.jsx("div",{style:{padding:"14px 18px 6px"},children:h.jsx("div",{style:{fontSize:12,fontWeight:700,color:"var(--mid)",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Team"})}),(t.team||[]).map((g,w)=>h.jsxs("div",{className:"settings-row no-tap",children:[h.jsx("div",{className:"team-avatar",children:(g.name||g.email)[0].toUpperCase()}),h.jsxs("div",{className:"settings-row-info",children:[h.jsxs("div",{className:"settings-row-title",style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:4},children:[g.email," ",g.uid===e.uid&&h.jsx("span",{style:{fontSize:11,color:"var(--mid)"},children:"(kamu)"}),h.jsx("span",{className:"team-badge",children:g.role==="owner"?"Owner":"Partner"})]}),h.jsx("div",{className:"settings-row-sub",children:g.role==="owner"?"Pemilik akaun":`Joined ${_o(g.joinedAt)}`})]})]},w)),t.pendingPartner&&!(t.team||[]).find(g=>g.email===t.pendingPartner)&&h.jsxs("div",{className:"settings-row no-tap",style:{opacity:.55},children:[h.jsx("div",{className:"team-avatar",style:{background:"#FFF3E0",color:"#E65100"},children:"⏳"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:t.pendingPartner}),h.jsx("div",{className:"settings-row-sub",children:"Jemputan belum diterima"})]})]})]}),h.jsxs("div",{className:"settings-section",children:[h.jsxs("div",{className:"settings-row no-tap",children:[h.jsx("span",{className:"settings-row-icon",children:"💱"}),h.jsx("div",{className:"settings-row-info",children:h.jsx("div",{className:"settings-row-title",children:"Mata Wang"})}),h.jsx("select",{className:"currency-select",value:t.currency||"MYR",onChange:async g=>{await dr(Ae(le,"weddings",t.id),{currency:g.target.value}),r({...t,currency:g.target.value})},children:["MYR","SGD","USD","GBP"].map(g=>h.jsx("option",{children:g},g))})]}),h.jsxs("div",{className:"settings-row no-tap",style:{cursor:"default"},children:[h.jsx("span",{className:"settings-row-icon",children:s?"🌙":"☀️"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Dark Mode"}),h.jsx("div",{className:"settings-row-sub",children:s?"Gelap aktif":"Cerah aktif"})]}),h.jsx("div",{onClick:()=>o(g=>!g),style:{width:46,height:26,background:s?"var(--rose)":"var(--border)",borderRadius:13,position:"relative",cursor:"pointer",transition:"background 0.3s",flexShrink:0},children:h.jsx("div",{style:{position:"absolute",top:3,left:s?22:3,width:20,height:20,background:"white",borderRadius:"50%",transition:"left 0.3s",boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}})})]}),h.jsxs("div",{className:"settings-row",onClick:_,children:[h.jsx("span",{className:"settings-row-icon",children:"📋"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Activity Log"}),h.jsx("div",{className:"settings-row-sub",children:"Semua perubahan oleh kamu & pasangan"})]}),h.jsx("span",{style:{color:"var(--light)",fontSize:18},children:"›"})]}),h.jsxs("div",{className:"settings-row no-tap",children:[h.jsx("span",{className:"settings-row-icon",children:"👤"}),h.jsxs("div",{className:"settings-row-info",children:[h.jsx("div",{className:"settings-row-title",children:"Akaun"}),h.jsx("div",{className:"settings-row-sub",children:e.email})]})]})]}),h.jsx("button",{className:"logout-btn",onClick:i,children:"Log Keluar"}),h.jsx("div",{className:"info-text",children:"Ada masalah? support@kahwin-app.my"}),l&&h.jsx(jR,{wedding:t,user:e,onClose:()=>u(!1)}),d&&h.jsx("div",{className:"modal-overlay",onClick:g=>g.target===g.currentTarget&&p(!1),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Edit Maklumat Majlis"}),h.jsx("div",{className:"field-label",children:"Pengantin Lelaki"}),h.jsx("input",{className:"field-input",value:m,onChange:g=>v(g.target.value)}),h.jsx("div",{className:"field-label",children:"Pengantin Perempuan"}),h.jsx("input",{className:"field-input",value:k,onChange:g=>A(g.target.value)}),h.jsx("div",{className:"field-label",children:"Tarikh Majlis"}),h.jsx("input",{className:"field-input",type:"date",value:b,onChange:g=>V(g.target.value)}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn-cancel",onClick:()=>p(!1),children:"Batal"}),h.jsx("button",{className:"btn-save",onClick:D,disabled:E,children:E?"...":"Simpan"})]})]})}),S!==null&&h.jsx("div",{className:"modal-overlay",onClick:g=>g.target===g.currentTarget&&R(null),children:h.jsxs("div",{className:"modal",children:[h.jsx("div",{className:"modal-handle"}),h.jsx("div",{className:"modal-title",children:"Activity Log"}),S.length===0?h.jsxs("div",{className:"empty-state",children:[h.jsx("div",{className:"empty-icon",children:"📋"}),h.jsx("div",{className:"empty-title",children:"Tiada aktiviti"})]}):S.slice(0,40).map((g,w)=>h.jsxs("div",{style:{padding:"10px 0",borderBottom:"1px solid var(--border)"},children:[h.jsx("div",{style:{fontSize:13,fontWeight:600,color:"var(--dark)"},children:g.action}),h.jsxs("div",{style:{fontSize:11,color:"var(--mid)",marginTop:3},children:[g.byName," · ",_o(g.time)]})]},w)),h.jsx("button",{className:"btn-primary",style:{marginTop:16},onClick:()=>R(null),children:"Tutup"})]})})]})}function GR(){const[t,e]=z.useState(()=>localStorage.getItem("kahwin_dark")==="1"),[n,r]=z.useState("loading"),[i,s]=z.useState(null),[o,l]=z.useState(null),[u,d]=z.useState(null),[p,m]=z.useState("home"),[v,k]=z.useState([]),[A,b]=z.useState([]),[V,E]=z.useState([]),[T,S]=z.useState([]),[R,L]=z.useState(""),[D,_]=z.useState([]),[g,w]=z.useState([]);z.useEffect(()=>{qa(t),localStorage.setItem("kahwin_dark",t?"1":"0")},[t]),z.useEffect(()=>gC(Rr,async ee=>{if(!ee){r("unauth");return}s(ee);const M=await Es(Ae(le,"users",ee.uid));if(M.exists()&&M.data().weddingId){const J=await Es(Ae(le,"weddings",M.data().weddingId));if(J.exists()){l({id:M.data().weddingId,...J.data()}),r("app");return}}const W=await Es(Ae(le,"invites",ee.email.replace(/\./g,"_")));W.exists()&&W.data().status==="pending"&&d(W.data()),r("setup")}),[]),z.useEffect(()=>{if(!o)return;const $=`weddings/${o.id}`,ee=[xr(Ae(le,"weddings",o.id),M=>{M.exists()&&l(W=>({...W,...M.data()}))}),xr(Gt(le,$,"expenses"),M=>k(M.docs.map(W=>({id:W.id,...W.data()})))),xr(Gt(le,$,"checklist"),M=>b(M.docs.map(W=>({id:W.id,...W.data()})))),xr(Gt(le,$,"guests"),M=>E(M.docs.map(W=>({id:W.id,...W.data()})))),xr(Gt(le,$,"savings"),M=>S(M.docs.map(W=>({id:W.id,...W.data()})))),xr(Gt(le,$,"timeline"),M=>_(M.docs.map(W=>({id:W.id,...W.data()})))),xr(Gt(le,$,"inspirasi"),M=>w(M.docs.map(W=>({id:W.id,...W.data()}))))];return Es(Ae(le,$,"notes","main")).then(M=>M.exists()&&L(M.data().text||"")).catch(()=>{}),()=>ee.forEach(M=>M())},[o==null?void 0:o.id]);async function x(){const $=await Es(Ae(le,"weddings",u.weddingId));if(!$.exists())return;const ee={uid:i.uid,email:i.email,name:i.displayName||i.email,role:"partner",joinedAt:new Date().toISOString()};await dr(Ae(le,"weddings",u.weddingId),{team:[...$.data().team||[],ee]}),await vo(Ae(le,"users",i.uid),{weddingId:u.weddingId,email:i.email,name:i.displayName||i.email},{merge:!0}),await dr(Ae(le,"invites",i.email.replace(/\./g,"_")),{status:"accepted"}),await Ic(Gt(le,"weddings",u.weddingId,"activityLog"),{action:`${i.displayName||i.email} joined as partner`,byName:i.displayName||i.email,time:new Date().toISOString()}),l({id:u.weddingId,...$.data(),team:[...$.data().team||[],ee]}),d(null),r("app")}const C=z.useCallback(async $=>{o!=null&&o.id&&await Ic(Gt(le,"weddings",o.id,"activityLog"),{action:$,byName:i.displayName||i.email,byUid:i.uid,time:new Date().toISOString()})},[o==null?void 0:o.id,i]),P=z.useCallback(async($,ee)=>{const M=await Ic(Gt(le,"weddings",o.id,$),{...ee,addedBy:i.displayName||i.email,addedByUid:i.uid});return C(`Tambah ${$}: ${ee.name||ee.task||ee.desc||ee.label||""}`),M},[o==null?void 0:o.id,i,C]),I=z.useCallback(async($,ee)=>{await dA(Ae(le,"weddings",o.id,$,ee)),C(`Padam item dalam ${$}`)}),je=z.useCallback(async($,ee,M)=>{await dr(Ae(le,"weddings",o.id,$,ee),M)}),on={expenses:"Perbelanjaan & Bajet",checklist:"Checklist Tugasan",guests:"Senarai Tetamu",savings:"Tabung Kahwin",timeline:"Timeline",notes:"Nota",inspirasi:"Inspirasi"};return n==="loading"?h.jsxs("div",{className:"loading-wrap",children:[h.jsx("div",{className:"spinner"}),h.jsx("p",{style:{color:"var(--mid)",fontFamily:"DM Sans,sans-serif",fontSize:14},children:"Memuatkan..."})]}):n==="unauth"?h.jsx(VR,{onAuth:$=>{s($),r("loading")},dark:t}):n==="setup"&&u?h.jsxs("div",{className:"setup-wrap",children:[h.jsx("div",{style:{fontSize:52,marginBottom:14},children:"💑"}),h.jsx("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:26,color:"var(--dark)",textAlign:"center",marginBottom:8},children:"Jemputan Diterima!"}),h.jsx("p",{style:{fontSize:14,color:"var(--mid)",marginBottom:26,textAlign:"center"},children:"Kamu dijemput untuk join wedding planning"}),h.jsxs("div",{className:"setup-card",children:[h.jsxs("div",{style:{background:"var(--rose-pale)",borderRadius:14,padding:16,marginBottom:20,textAlign:"center"},children:[h.jsxs("div",{style:{fontSize:18,fontWeight:700,color:"var(--dark)",fontFamily:"Playfair Display,serif"},children:[u.weddingGroom," & ",u.weddingBride]}),h.jsxs("div",{style:{fontSize:13,color:"var(--mid)",marginTop:6},children:["Dijemput oleh ",u.fromName]})]}),h.jsx("button",{className:"btn-primary",onClick:x,children:"Terima Jemputan 💍"}),h.jsx("button",{style:{width:"100%",padding:12,background:"transparent",border:"none",color:"var(--mid)",fontSize:14,cursor:"pointer",marginTop:6,fontFamily:"DM Sans,sans-serif"},onClick:()=>d(null),children:"Buat wedding sendiri"})]})]}):n==="setup"?h.jsx(LR,{user:i,onDone:$=>{l($),r("app")}}):o?p==="settings"?h.jsx(KR,{wedding:o,user:i,onBack:()=>m("home"),onUpdate:l,dark:t,setDark:$=>{e($),qa($)},onSignOut:async()=>{await vC(Rr),l(null),s(null),r("unauth"),m("home")}}):h.jsxs("div",{className:"app-wrap",children:[h.jsxs("div",{className:"app-header",children:[p!=="home"?h.jsx("button",{onClick:()=>m("home"),style:{background:"none",border:"none",cursor:"pointer",fontSize:24,color:"var(--mid)",padding:"0 4px 0 0"},children:"‹"}):h.jsx("span",{className:"header-logo",children:"💍"}),h.jsxs("div",{className:"header-info",children:[h.jsx("h1",{style:{color:"var(--dark)"},children:p==="home"?"Kahwin":on[p]}),p==="home"&&h.jsxs("p",{children:[o.groom," & ",o.bride]})]}),h.jsxs("div",{className:"header-right",children:[(o.team||[]).length>1&&h.jsx("span",{title:"Joint aktif",style:{fontSize:18},children:"💑"}),h.jsx("button",{className:"dark-toggle",onClick:()=>{const $=!t;e($),qa($)},children:t?"☀️":"🌙"}),h.jsx("div",{className:"avatar-sm",onClick:()=>m("settings"),children:(i.displayName||i.email)[0].toUpperCase()})]})]}),h.jsxs("div",{className:"page-content",children:[p==="home"&&h.jsx(FR,{wedding:o,onNav:m,expenses:v,checklist:A,guests:V,onUpdateWedding:l}),p==="expenses"&&h.jsx(UR,{expenses:v,onAdd:$=>P("expenses",$),onDelete:$=>I("expenses",$),onToggle:($,ee)=>je("expenses",$,{status:ee==="paid"?"unpaid":"paid"}),currency:o.currency||"MYR"}),p==="checklist"&&h.jsx(zR,{checklist:A,onAdd:$=>P("checklist",$),onToggle:($,ee)=>je("checklist",$,{done:!ee}),onDelete:$=>I("checklist",$)}),p==="guests"&&h.jsx(BR,{guests:V,onAdd:$=>P("guests",$),onDelete:$=>I("guests",$),onRSVP:($,ee)=>je("guests",$,{rsvp:ee})}),p==="savings"&&h.jsx($R,{savings:T,onAdd:$=>P("savings",$),onDelete:$=>I("savings",$),wedding:o}),p==="timeline"&&h.jsx(WR,{timeline:D,onAdd:$=>P("timeline",$),onDelete:$=>I("timeline",$),onEdit:($,ee)=>je("timeline",$,ee),wedding:o}),p==="notes"&&h.jsx(qR,{notes:R,onSave:async $=>{await vo(Ae(le,"weddings",o.id,"notes","main"),{text:$}),L($)}}),p==="inspirasi"&&h.jsx(HR,{inspirasi:g,onAdd:$=>P("inspirasi",$),onDelete:$=>I("inspirasi",$),onEdit:($,ee)=>je("inspirasi",$,ee),weddingId:o.id})]}),h.jsxs("div",{className:"bottom-nav",children:[h.jsxs("button",{className:`nav-btn ${p==="checklist"?"active":""}`,onClick:()=>m("checklist"),children:[h.jsx("span",{className:"nav-icon",children:"✅"}),h.jsx("span",{className:"nav-label",children:"Checklist"})]}),h.jsxs("button",{className:`nav-btn ${p==="expenses"?"active":""}`,onClick:()=>m("expenses"),children:[h.jsx("span",{className:"nav-icon",children:"💸"}),h.jsx("span",{className:"nav-label",children:"Belanja"})]}),h.jsx("button",{className:"nav-home-btn",onClick:()=>m("home"),children:"🏠"}),h.jsxs("button",{className:`nav-btn ${p==="guests"?"active":""}`,onClick:()=>m("guests"),children:[h.jsx("span",{className:"nav-icon",children:"👥"}),h.jsx("span",{className:"nav-label",children:"Tetamu"})]}),h.jsxs("button",{className:`nav-btn ${p==="settings"?"active":""}`,onClick:()=>m("settings"),children:[h.jsx("span",{className:"nav-icon",children:"⚙️"}),h.jsx("span",{className:"nav-label",children:"Tetapan"})]})]})]}):h.jsx("div",{className:"loading-wrap",children:h.jsx("div",{className:"spinner"})})}qa(localStorage.getItem("kahwin_dark")==="1");kc.createRoot(document.getElementById("root")).render(h.jsx(EE.StrictMode,{children:h.jsx(GR,{})}));
