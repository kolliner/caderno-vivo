(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function x3(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wd={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function M3(){if(Sg)return Go;Sg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Go.Fragment=e,Go.jsx=n,Go.jsxs=n,Go}var yg;function S3(){return yg||(yg=1,wd.exports=M3()),wd.exports}var k=S3(),Ld={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function y3(){if(Eg)return vt;Eg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,E={};function S(U,ie,ve){this.props=U,this.context=ie,this.refs=E,this.updater=ve||A}S.prototype.isReactComponent={},S.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=S.prototype;function I(U,ie,ve){this.props=U,this.context=ie,this.refs=E,this.updater=ve||A}var R=I.prototype=new F;R.constructor=I,D(R,S.prototype),R.isPureReactComponent=!0;var P=Array.isArray;function O(){}var L={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function N(U,ie,ve){var Oe=ve.ref;return{$$typeof:s,type:U,key:ie,ref:Oe!==void 0?Oe:null,props:ve}}function V(U,ie){return N(U.type,ie,U.props)}function q(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function K(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return ie[ve]})}var ae=/\/+/g;function W(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?K(""+U.key):ie.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(O,O):(U.status="pending",U.then(function(ie){U.status==="pending"&&(U.status="fulfilled",U.value=ie)},function(ie){U.status==="pending"&&(U.status="rejected",U.reason=ie)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function B(U,ie,ve,Oe,Ue){var ke=typeof U;(ke==="undefined"||ke==="boolean")&&(U=null);var se=!1;if(U===null)se=!0;else switch(ke){case"bigint":case"string":case"number":se=!0;break;case"object":switch(U.$$typeof){case s:case e:se=!0;break;case g:return se=U._init,B(se(U._payload),ie,ve,Oe,Ue)}}if(se)return Ue=Ue(U),se=Oe===""?"."+W(U,0):Oe,P(Ue)?(ve="",se!=null&&(ve=se.replace(ae,"$&/")+"/"),B(Ue,ie,ve,"",function(ot){return ot})):Ue!=null&&(q(Ue)&&(Ue=V(Ue,ve+(Ue.key==null||U&&U.key===Ue.key?"":(""+Ue.key).replace(ae,"$&/")+"/")+se)),ie.push(Ue)),1;se=0;var _e=Oe===""?".":Oe+":";if(P(U))for(var Ne=0;Ne<U.length;Ne++)Oe=U[Ne],ke=_e+W(Oe,Ne),se+=B(Oe,ie,ve,ke,Ue);else if(Ne=M(U),typeof Ne=="function")for(U=Ne.call(U),Ne=0;!(Oe=U.next()).done;)Oe=Oe.value,ke=_e+W(Oe,Ne++),se+=B(Oe,ie,ve,ke,Ue);else if(ke==="object"){if(typeof U.then=="function")return B(J(U),ie,ve,Oe,Ue);throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return se}function G(U,ie,ve){if(U==null)return U;var Oe=[],Ue=0;return B(U,Oe,"","",function(ke){return ie.call(ve,ke,Ue++)}),Oe}function oe(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var re=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},pe={map:G,forEach:function(U,ie,ve){G(U,function(){ie.apply(this,arguments)},ve)},count:function(U){var ie=0;return G(U,function(){ie++}),ie},toArray:function(U){return G(U,function(ie){return ie})||[]},only:function(U){if(!q(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return vt.Activity=x,vt.Children=pe,vt.Component=S,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=I,vt.StrictMode=a,vt.Suspense=p,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,vt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},vt.cache=function(U){return function(){return U.apply(null,arguments)}},vt.cacheSignal=function(){return null},vt.cloneElement=function(U,ie,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Oe=D({},U.props),Ue=U.key;if(ie!=null)for(ke in ie.key!==void 0&&(Ue=""+ie.key),ie)!b.call(ie,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&ie.ref===void 0||(Oe[ke]=ie[ke]);var ke=arguments.length-2;if(ke===1)Oe.children=ve;else if(1<ke){for(var se=Array(ke),_e=0;_e<ke;_e++)se[_e]=arguments[_e+2];Oe.children=se}return N(U.type,Ue,Oe)},vt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},vt.createElement=function(U,ie,ve){var Oe,Ue={},ke=null;if(ie!=null)for(Oe in ie.key!==void 0&&(ke=""+ie.key),ie)b.call(ie,Oe)&&Oe!=="key"&&Oe!=="__self"&&Oe!=="__source"&&(Ue[Oe]=ie[Oe]);var se=arguments.length-2;if(se===1)Ue.children=ve;else if(1<se){for(var _e=Array(se),Ne=0;Ne<se;Ne++)_e[Ne]=arguments[Ne+2];Ue.children=_e}if(U&&U.defaultProps)for(Oe in se=U.defaultProps,se)Ue[Oe]===void 0&&(Ue[Oe]=se[Oe]);return N(U,ke,Ue)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(U){return{$$typeof:h,render:U}},vt.isValidElement=q,vt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:oe}},vt.memo=function(U,ie){return{$$typeof:m,type:U,compare:ie===void 0?null:ie}},vt.startTransition=function(U){var ie=L.T,ve={};L.T=ve;try{var Oe=U(),Ue=L.S;Ue!==null&&Ue(ve,Oe),typeof Oe=="object"&&Oe!==null&&typeof Oe.then=="function"&&Oe.then(O,re)}catch(ke){re(ke)}finally{ie!==null&&ve.types!==null&&(ie.types=ve.types),L.T=ie}},vt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},vt.use=function(U){return L.H.use(U)},vt.useActionState=function(U,ie,ve){return L.H.useActionState(U,ie,ve)},vt.useCallback=function(U,ie){return L.H.useCallback(U,ie)},vt.useContext=function(U){return L.H.useContext(U)},vt.useDebugValue=function(){},vt.useDeferredValue=function(U,ie){return L.H.useDeferredValue(U,ie)},vt.useEffect=function(U,ie){return L.H.useEffect(U,ie)},vt.useEffectEvent=function(U){return L.H.useEffectEvent(U)},vt.useId=function(){return L.H.useId()},vt.useImperativeHandle=function(U,ie,ve){return L.H.useImperativeHandle(U,ie,ve)},vt.useInsertionEffect=function(U,ie){return L.H.useInsertionEffect(U,ie)},vt.useLayoutEffect=function(U,ie){return L.H.useLayoutEffect(U,ie)},vt.useMemo=function(U,ie){return L.H.useMemo(U,ie)},vt.useOptimistic=function(U,ie){return L.H.useOptimistic(U,ie)},vt.useReducer=function(U,ie,ve){return L.H.useReducer(U,ie,ve)},vt.useRef=function(U){return L.H.useRef(U)},vt.useState=function(U){return L.H.useState(U)},vt.useSyncExternalStore=function(U,ie,ve){return L.H.useSyncExternalStore(U,ie,ve)},vt.useTransition=function(){return L.H.useTransition()},vt.version="19.2.0",vt}var bg;function p0(){return bg||(bg=1,Ld.exports=y3()),Ld.exports}var _=p0();const E3=x3(_);var Dd={exports:{}},Zo={},Nd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function b3(){return Ag||(Ag=1,(function(s){function e(B,G){var oe=B.length;B.push(G);e:for(;0<oe;){var re=oe-1>>>1,pe=B[re];if(0<o(pe,G))B[re]=G,B[oe]=pe,oe=re;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var G=B[0],oe=B.pop();if(oe!==G){B[0]=oe;e:for(var re=0,pe=B.length,U=pe>>>1;re<U;){var ie=2*(re+1)-1,ve=B[ie],Oe=ie+1,Ue=B[Oe];if(0>o(ve,oe))Oe<pe&&0>o(Ue,ve)?(B[re]=Ue,B[Oe]=oe,re=Oe):(B[re]=ve,B[ie]=oe,re=ie);else if(Oe<pe&&0>o(Ue,oe))B[re]=Ue,B[Oe]=oe,re=Oe;else break e}}return G}function o(B,G){var oe=B.sortIndex-G.sortIndex;return oe!==0?oe:B.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var p=[],m=[],g=1,x=null,v=3,M=!1,A=!1,D=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function R(B){for(var G=n(m);G!==null;){if(G.callback===null)a(m);else if(G.startTime<=B)a(m),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(m)}}function P(B){if(D=!1,R(B),!A)if(n(p)!==null)A=!0,O||(O=!0,K());else{var G=n(m);G!==null&&J(P,G.startTime-B)}}var O=!1,L=-1,b=5,N=-1;function V(){return E?!0:!(s.unstable_now()-N<b)}function q(){if(E=!1,O){var B=s.unstable_now();N=B;var G=!0;try{e:{A=!1,D&&(D=!1,F(L),L=-1),M=!0;var oe=v;try{t:{for(R(B),x=n(p);x!==null&&!(x.expirationTime>B&&V());){var re=x.callback;if(typeof re=="function"){x.callback=null,v=x.priorityLevel;var pe=re(x.expirationTime<=B);if(B=s.unstable_now(),typeof pe=="function"){x.callback=pe,R(B),G=!0;break t}x===n(p)&&a(p),R(B)}else a(p);x=n(p)}if(x!==null)G=!0;else{var U=n(m);U!==null&&J(P,U.startTime-B),G=!1}}break e}finally{x=null,v=oe,M=!1}G=void 0}}finally{G?K():O=!1}}}var K;if(typeof I=="function")K=function(){I(q)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,W=ae.port2;ae.port1.onmessage=q,K=function(){W.postMessage(null)}}else K=function(){S(q,0)};function J(B,G){L=S(function(){B(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var oe=v;v=G;try{return B()}finally{v=oe}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=v;v=B;try{return G()}finally{v=oe}},s.unstable_scheduleCallback=function(B,G,oe){var re=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?re+oe:re):oe=re,B){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=oe+pe,B={id:g++,callback:G,priorityLevel:B,startTime:oe,expirationTime:pe,sortIndex:-1},oe>re?(B.sortIndex=oe,e(m,B),n(p)===null&&B===n(m)&&(D?(F(L),L=-1):D=!0,J(P,oe-re))):(B.sortIndex=pe,e(p,B),A||M||(A=!0,O||(O=!0,K()))),B},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(B){var G=v;return function(){var oe=v;v=G;try{return B.apply(this,arguments)}finally{v=oe}}}})(Ud)),Ud}var Tg;function A3(){return Tg||(Tg=1,Nd.exports=b3()),Nd.exports}var Od={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function T3(){if(Rg)return Fn;Rg=1;var s=p0();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Fn.flushSync=function(p){var m=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=m,a.p=g,a.d.f()}},Fn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Fn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Fn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Fn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Fn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Fn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Fn.requestFormReset=function(p){a.d.r(p)},Fn.unstable_batchedUpdates=function(p,m){return p(m)},Fn.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},Fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Fn.version="19.2.0",Fn}var Cg;function R3(){if(Cg)return Od.exports;Cg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Od.exports=T3(),Od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function C3(){if(wg)return Zo;wg=1;var s=A3(),e=p0(),n=R3();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return p(f),t;if(d===l)return p(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var y=!1,w=f.child;w;){if(w===r){y=!0,r=f,l=d;break}if(w===l){y=!0,l=f,r=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===r){y=!0,r=d,l=f;break}if(w===l){y=!0,l=d,r=f;break}w=w.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),I=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function W(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case I:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case R:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return i=t.displayName||null,i!==null?i:W(t.type)||"Memo";case b:i=t._payload,t=t._init;try{return W(t(i))}catch{}}return null}var J=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},re=[],pe=-1;function U(t){return{current:t}}function ie(t){0>pe||(t.current=re[pe],re[pe]=null,pe--)}function ve(t,i){pe++,re[pe]=t.current,t.current=i}var Oe=U(null),Ue=U(null),ke=U(null),se=U(null);function _e(t,i){switch(ve(ke,i),ve(Ue,t),ve(Oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?q1(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=q1(i),t=k1(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Oe),ve(Oe,t)}function Ne(){ie(Oe),ie(Ue),ie(ke)}function ot(t){t.memoizedState!==null&&ve(se,t);var i=Oe.current,r=k1(i,t.type);i!==r&&(ve(Ue,t),ve(Oe,r))}function qe(t){Ue.current===t&&(ie(Oe),ie(Ue)),se.current===t&&(ie(se),Io._currentValue=oe)}var ut,Ct;function be(t){if(ut===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);ut=i&&i[1]||"",Ct=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+Ct}var Le=!1;function Pe(t,i){if(!t||Le)return"";Le=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(Me){var me=Me}Reflect.construct(t,[],we)}else{try{we.call()}catch(Me){me=Me}t.call(we.prototype)}}else{try{throw Error()}catch(Me){me=Me}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(Me){if(Me&&me&&typeof Me.stack=="string")return[Me.stack,me.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],w=d[1];if(y&&w){var Z=y.split(`
`),he=w.split(`
`);for(f=l=0;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;for(;f<he.length&&!he[f].includes("DetermineComponentFrameRoot");)f++;if(l===Z.length||f===he.length)for(l=Z.length-1,f=he.length-1;1<=l&&0<=f&&Z[l]!==he[f];)f--;for(;1<=l&&0<=f;l--,f--)if(Z[l]!==he[f]){if(l!==1||f!==1)do if(l--,f--,0>f||Z[l]!==he[f]){var Ae=`
`+Z[l].replace(" at new "," at ");return t.displayName&&Ae.includes("<anonymous>")&&(Ae=Ae.replace("<anonymous>",t.displayName)),Ae}while(1<=l&&0<=f);break}}}finally{Le=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?be(r):""}function ze(t,i){switch(t.tag){case 26:case 27:case 5:return be(t.type);case 16:return be("Lazy");case 13:return t.child!==i&&i!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Pe(t.type,!1);case 11:return Pe(t.type.render,!1);case 1:return Pe(t.type,!0);case 31:return be("Activity");default:return""}}function ee(t){try{var i="",r=null;do i+=ze(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fe=Object.prototype.hasOwnProperty,nt=s.unstable_scheduleCallback,ct=s.unstable_cancelCallback,ht=s.unstable_shouldYield,X=s.unstable_requestPaint,ft=s.unstable_now,gt=s.unstable_getCurrentPriorityLevel,z=s.unstable_ImmediatePriority,T=s.unstable_UserBlockingPriority,te=s.unstable_NormalPriority,fe=s.unstable_LowPriority,ye=s.unstable_IdlePriority,He=s.log,Ve=s.unstable_setDisableYieldValue,Se=null,Ee=null;function Be(t){if(typeof He=="function"&&Ve(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Se,t)}catch{}}var Xe=Math.clz32?Math.clz32:st,Ge=Math.log,Ze=Math.LN2;function st(t){return t>>>=0,t===0?32:31-(Ge(t)/Ze|0)|0}var $=256,De=262144,H=4194304;function Te(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ue(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?f=Te(l):(y&=w,y!==0?f=Te(y):r||(r=w&~t,r!==0&&(f=Te(r))))):(w=l&~d,w!==0?f=Te(w):y!==0?f=Te(y):r||(r=l&~t,r!==0&&(f=Te(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function Ce(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ie(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xe(){var t=H;return H<<=1,(H&62914560)===0&&(H=4194304),t}function je(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function it(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bt(t,i,r,l,f,d){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,Z=t.expirationTimes,he=t.hiddenUpdates;for(r=y&~r;0<r;){var Ae=31-Xe(r),we=1<<Ae;w[Ae]=0,Z[Ae]=-1;var me=he[Ae];if(me!==null)for(he[Ae]=null,Ae=0;Ae<me.length;Ae++){var Me=me[Ae];Me!==null&&(Me.lane&=-536870913)}r&=~we}l!==0&&Dt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~i))}function Dt(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Xe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function Wn(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-Xe(r),f=1<<l;f&i|t[l]&i&&(t[l]|=i),r&=~f}}function ni(t,i){var r=i&-i;return r=(r&42)!==0?1:Ks(r),(r&(t.suspendedLanes|i))!==0?0:r}function Ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Js(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qs(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:mg(t.type))}function qr(t,i){var r=G.p;try{return G.p=t,i()}finally{G.p=r}}var Bi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Bi,Ln="__reactProps$"+Bi,Yn="__reactContainer$"+Bi,fr="__reactEvents$"+Bi,_l="__reactListeners$"+Bi,xl="__reactHandles$"+Bi,dr="__reactResources$"+Bi,wa="__reactMarker$"+Bi;function La(t){delete t[mn],delete t[Ln],delete t[fr],delete t[_l],delete t[xl]}function na(t){var i=t[mn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[Yn]||r[mn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=Q1(t);t!==null;){if(r=t[mn])return r;t=Q1(t)}return i}t=r,r=t.parentNode}return null}function ia(t){if(t=t[mn]||t[Yn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function hr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Da(t){var i=t[dr];return i||(i=t[dr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function pn(t){t[wa]=!0}var Ml=new Set,$s={};function C(t,i){Y(t,i),Y(t+"Capture",i)}function Y(t,i){for($s[t]=i,t=0;t<i.length;t++)Ml.add(i[t])}var ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},ce={};function Ke(t){return Fe.call(ce,t)?!0:Fe.call(le,t)?!1:ge.test(t)?ce[t]=!0:(le[t]=!0,!1)}function et(t,i,r){if(Ke(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function We(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Qe(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function At(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){r=""+y,d.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function at(t){if(!t._valueTracker){var i=xt(t)?"checked":"value";t._valueTracker=At(t,i,""+t[i])}}function Ft(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=xt(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function en(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jt=/[\n"\\]/g;function yt(t){return t.replace(Jt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function gn(t,i,r,l,f,d,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+$e(i)):t.value!==""+$e(i)&&(t.value=""+$e(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?yn(t,y,$e(i)):r!=null?yn(t,y,$e(r)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+$e(w):t.removeAttribute("name")}function tt(t,i,r,l,f,d,y,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){at(t);return}r=r!=null?""+$e(r):"",i=i!=null?""+$e(i):r,w||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),at(t)}function yn(t,i,r){i==="number"&&en(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Et(t,i,r,l){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&l&&(t[r].defaultSelected=!0)}else{for(r=""+$e(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Vn(t,i,r){if(i!=null&&(i=""+$e(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+$e(r):""}function ii(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(J(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=$e(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),at(t)}function Gn(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Na=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vt(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||Na.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function rn(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&Vt(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Vt(t,d,i[d])}function gi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(t){return Vi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function vi(){}var Au=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function Z0(t){var i=ia(t);if(i&&(t=i.stateNode)){var r=t[Ln]||null;e:switch(t=i.stateNode,i.type){case"input":if(gn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+yt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var f=l[Ln]||null;if(!f)throw Error(a(90));gn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&Ft(l)}break e;case"textarea":Vn(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Et(t,!!r.multiple,i,!1)}}}var Ru=!1;function q0(t,i,r){if(Ru)return t(i,r);Ru=!0;try{var l=t(i);return l}finally{if(Ru=!1,(kr!==null||Xr!==null)&&(oc(),kr&&(i=kr,t=Xr,Xr=kr=null,Z0(i),t)))for(i=0;i<t.length;i++)Z0(t[i])}}function eo(t,i){var r=t.stateNode;if(r===null)return null;var l=r[Ln]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(aa)try{var to={};Object.defineProperty(to,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Cu=!1}var Ua=null,wu=null,Sl=null;function k0(){if(Sl)return Sl;var t,i=wu,r=i.length,l,f="value"in Ua?Ua.value:Ua.textContent,d=f.length;for(t=0;t<r&&i[t]===f[t];t++);var y=r-t;for(l=1;l<=y&&i[r-l]===f[d-l];l++);return Sl=f.slice(t,1<l?1-l:void 0)}function yl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function X0(){return!1}function jn(t){function i(r,l,f,d,y){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?El:X0,this.isPropagationStopped=X0,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),i}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=jn(mr),no=x({},mr,{view:0,detail:0}),v_=jn(no),Lu,Du,io,Al=x({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Lu=t.screenX-io.screenX,Du=t.screenY-io.screenY):Du=Lu=0,io=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),W0=jn(Al),__=x({},Al,{dataTransfer:0}),x_=jn(__),M_=x({},no,{relatedTarget:0}),Nu=jn(M_),S_=x({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),y_=jn(S_),E_=x({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b_=jn(E_),A_=x({},mr,{data:0}),Y0=jn(A_),T_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=C_[t])?!!i[t]:!1}function Uu(){return w_}var L_=x({},no,{key:function(t){if(t.key){var i=T_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D_=jn(L_),N_=x({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j0=jn(N_),U_=x({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),O_=jn(U_),P_=x({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),z_=jn(P_),F_=x({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I_=jn(F_),H_=x({},mr,{newState:0,oldState:0}),B_=jn(H_),V_=[9,13,27,32],Ou=aa&&"CompositionEvent"in window,ao=null;aa&&"documentMode"in document&&(ao=document.documentMode);var G_=aa&&"TextEvent"in window&&!ao,K0=aa&&(!Ou||ao&&8<ao&&11>=ao),J0=" ",Q0=!1;function $0(t,i){switch(t){case"keyup":return V_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Z_(t,i){switch(t){case"compositionend":return em(i);case"keypress":return i.which!==32?null:(Q0=!0,J0);case"textInput":return t=i.data,t===J0&&Q0?null:t;default:return null}}function q_(t,i){if(Wr)return t==="compositionend"||!Ou&&$0(t,i)?(t=k0(),Sl=wu=Ua=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return K0&&i.locale!=="ko"?null:i.data;default:return null}}var k_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!k_[t.type]:i==="textarea"}function nm(t,i,r,l){kr?Xr?Xr.push(l):Xr=[l]:kr=l,i=mc(i,"onChange"),0<i.length&&(r=new bl("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var ro=null,so=null;function X_(t){I1(t,0)}function Tl(t){var i=hr(t);if(Ft(i))return t}function im(t,i){if(t==="change")return i}var am=!1;if(aa){var Pu;if(aa){var zu="oninput"in document;if(!zu){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),zu=typeof rm.oninput=="function"}Pu=zu}else Pu=!1;am=Pu&&(!document.documentMode||9<document.documentMode)}function sm(){ro&&(ro.detachEvent("onpropertychange",om),so=ro=null)}function om(t){if(t.propertyName==="value"&&Tl(so)){var i=[];nm(i,so,t,Tu(t)),q0(X_,i)}}function W_(t,i,r){t==="focusin"?(sm(),ro=i,so=r,ro.attachEvent("onpropertychange",om)):t==="focusout"&&sm()}function Y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(so)}function j_(t,i){if(t==="click")return Tl(i)}function K_(t,i){if(t==="input"||t==="change")return Tl(i)}function J_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ai=typeof Object.is=="function"?Object.is:J_;function oo(t,i){if(ai(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!Fe.call(i,f)||!ai(t[f],i[f]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,i){var r=lm(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=lm(r)}}function um(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?um(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=en(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=en(t.document)}return i}function Fu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Q_=aa&&"documentMode"in document&&11>=document.documentMode,Yr=null,Iu=null,lo=null,Hu=!1;function dm(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Hu||Yr==null||Yr!==en(l)||(l=Yr,"selectionStart"in l&&Fu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&oo(lo,l)||(lo=l,l=mc(Iu,"onSelect"),0<l.length&&(i=new bl("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=Yr)))}function pr(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var jr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},Bu={},hm={};aa&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function gr(t){if(Bu[t])return Bu[t];if(!jr[t])return t;var i=jr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in hm)return Bu[t]=i[r];return t}var mm=gr("animationend"),pm=gr("animationiteration"),gm=gr("animationstart"),$_=gr("transitionrun"),ex=gr("transitionstart"),tx=gr("transitioncancel"),vm=gr("transitionend"),_m=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function Ci(t,i){_m.set(t,i),C(i,[t])}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],Kr=0,Gu=0;function Cl(){for(var t=Kr,i=Gu=Kr=0;i<t;){var r=_i[i];_i[i++]=null;var l=_i[i];_i[i++]=null;var f=_i[i];_i[i++]=null;var d=_i[i];if(_i[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}d!==0&&xm(r,f,d)}}function wl(t,i,r,l){_i[Kr++]=t,_i[Kr++]=i,_i[Kr++]=r,_i[Kr++]=l,Gu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Zu(t,i,r,l){return wl(t,i,r,l),Ll(t)}function vr(t,i){return wl(t,null,null,i),Ll(t)}function xm(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=t.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Xe(r),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function Ll(t){if(50<Do)throw Do=0,$f=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Jr={};function nx(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,i,r,l){return new nx(t,i,r,l)}function qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,i){var r=t.alternate;return r===null?(r=ri(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Mm(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Dl(t,i,r,l,f,d){var y=0;if(l=t,typeof t=="function")qu(t)&&(y=1);else if(typeof t=="string")y=o3(t,r,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ri(31,r,i,f),t.elementType=N,t.lanes=d,t;case D:return _r(r.children,f,d,i);case E:y=8,f|=24;break;case S:return t=ri(12,r,i,f|2),t.elementType=S,t.lanes=d,t;case P:return t=ri(13,r,i,f),t.elementType=P,t.lanes=d,t;case O:return t=ri(19,r,i,f),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:y=10;break e;case F:y=9;break e;case R:y=11;break e;case L:y=14;break e;case b:y=16,l=null;break e}y=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ri(y,r,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function _r(t,i,r,l){return t=ri(7,t,l,i),t.lanes=r,t}function ku(t,i,r){return t=ri(6,t,null,i),t.lanes=r,t}function Sm(t){var i=ri(18,null,null,0);return i.stateNode=t,i}function Xu(t,i,r){return i=ri(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ym=new WeakMap;function xi(t,i){if(typeof t=="object"&&t!==null){var r=ym.get(t);return r!==void 0?r:(i={value:t,source:i,stack:ee(i)},ym.set(t,i),i)}return{value:t,source:i,stack:ee(i)}}var Qr=[],$r=0,Nl=null,co=0,Mi=[],Si=0,Oa=null,Gi=1,Zi="";function sa(t,i){Qr[$r++]=co,Qr[$r++]=Nl,Nl=t,co=i}function Em(t,i,r){Mi[Si++]=Gi,Mi[Si++]=Zi,Mi[Si++]=Oa,Oa=t;var l=Gi;t=Zi;var f=32-Xe(l)-1;l&=~(1<<f),r+=1;var d=32-Xe(i)+f;if(30<d){var y=f-f%5;d=(l&(1<<y)-1).toString(32),l>>=y,f-=y,Gi=1<<32-Xe(i)+f|r<<f|l,Zi=d+t}else Gi=1<<d|r<<f|l,Zi=t}function Wu(t){t.return!==null&&(sa(t,1),Em(t,1,0))}function Yu(t){for(;t===Nl;)Nl=Qr[--$r],Qr[$r]=null,co=Qr[--$r],Qr[$r]=null;for(;t===Oa;)Oa=Mi[--Si],Mi[Si]=null,Zi=Mi[--Si],Mi[Si]=null,Gi=Mi[--Si],Mi[Si]=null}function bm(t,i){Mi[Si++]=Gi,Mi[Si++]=Zi,Mi[Si++]=Oa,Gi=i.id,Zi=i.overflow,Oa=t}var Dn=null,tn=null,Ot=!1,Pa=null,yi=!1,ju=Error(a(519));function za(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(xi(i,t)),ju}function Am(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[mn]=t,i[Ln]=l,r){case"dialog":Lt("cancel",i),Lt("close",i);break;case"iframe":case"object":case"embed":Lt("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)Lt(Uo[r],i);break;case"source":Lt("error",i);break;case"img":case"image":case"link":Lt("error",i),Lt("load",i);break;case"details":Lt("toggle",i);break;case"input":Lt("invalid",i),tt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Lt("invalid",i);break;case"textarea":Lt("invalid",i),ii(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||G1(i.textContent,r)?(l.popover!=null&&(Lt("beforetoggle",i),Lt("toggle",i)),l.onScroll!=null&&Lt("scroll",i),l.onScrollEnd!=null&&Lt("scrollend",i),l.onClick!=null&&(i.onclick=vi),i=!0):i=!1,i||za(t,!0)}function Tm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Dn=Dn.return}}function es(t){if(t!==Dn)return!1;if(!Ot)return Tm(t),Ot=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||md(t.type,t.memoizedProps)),r=!r),r&&tn&&za(t),Tm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));tn=J1(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));tn=J1(t)}else i===27?(i=tn,Ka(t.type)?(t=xd,xd=null,tn=t):tn=i):tn=Dn?bi(t.stateNode.nextSibling):null;return!0}function xr(){tn=Dn=null,Ot=!1}function Ku(){var t=Pa;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Pa=null),t}function uo(t){Pa===null?Pa=[t]:Pa.push(t)}var Ju=U(null),Mr=null,oa=null;function Fa(t,i,r){ve(Ju,i._currentValue),i._currentValue=r}function la(t){t._currentValue=Ju.current,ie(Ju)}function Qu(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function $u(t,i,r,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var y=f.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=f;for(var Z=0;Z<i.length;Z++)if(w.context===i[Z]){d.lanes|=r,w=d.alternate,w!==null&&(w.lanes|=r),Qu(d.return,r,t),l||(y=null);break e}d=w.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=r,d=y.alternate,d!==null&&(d.lanes|=r),Qu(y,r,t),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function ts(t,i,r,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var w=f.type;ai(f.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(f===se.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}f=f.return}t!==null&&$u(i,t,r,l),i.flags|=262144}function Ul(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){Mr=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Rm(Mr,t)}function Ol(t,i){return Mr===null&&Sr(t),Rm(t,i)}function Rm(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},oa===null){if(t===null)throw Error(a(308));oa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else oa=oa.next=i;return r}var ix=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},ax=s.unstable_scheduleCallback,rx=s.unstable_NormalPriority,vn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new ix,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&ax(rx,function(){t.controller.abort()})}var ho=null,tf=0,ns=0,is=null;function sx(t,i){if(ho===null){var r=ho=[];tf=0,ns=rd(),is={status:"pending",value:void 0,then:function(l){r.push(l)}}}return tf++,i.then(Cm,Cm),i}function Cm(){if(--tf===0&&ho!==null){is!==null&&(is.status="fulfilled");var t=ho;ho=null,ns=0,is=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ox(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var wm=B.S;B.S=function(t,i){d1=ft(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&sx(t,i),wm!==null&&wm(t,i)};var yr=U(null);function nf(){var t=yr.current;return t!==null?t:Qt.pooledCache}function Pl(t,i){i===null?ve(yr,yr.current):ve(yr,i.pool)}function Lm(){var t=nf();return t===null?null:{parent:vn._currentValue,pool:t}}var as=Error(a(460)),af=Error(a(474)),zl=Error(a(542)),Fl={then:function(){}};function Dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(vi,vi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Om(t),t;default:if(typeof i.status=="string")i.then(vi,vi);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Om(t),t}throw br=i,as}}function Er(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(br=r,as):r}}var br=null;function Um(){if(br===null)throw Error(a(459));var t=br;return br=null,t}function Om(t){if(t===as||t===zl)throw Error(a(483))}var rs=null,mo=0;function Il(t){var i=mo;return mo+=1,rs===null&&(rs=[]),Nm(rs,t,i)}function po(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Hl(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Pm(t){function i(ne,j){if(t){var de=ne.deletions;de===null?(ne.deletions=[j],ne.flags|=16):de.push(j)}}function r(ne,j){if(!t)return null;for(;j!==null;)i(ne,j),j=j.sibling;return null}function l(ne){for(var j=new Map;ne!==null;)ne.key!==null?j.set(ne.key,ne):j.set(ne.index,ne),ne=ne.sibling;return j}function f(ne,j){return ne=ra(ne,j),ne.index=0,ne.sibling=null,ne}function d(ne,j,de){return ne.index=de,t?(de=ne.alternate,de!==null?(de=de.index,de<j?(ne.flags|=67108866,j):de):(ne.flags|=67108866,j)):(ne.flags|=1048576,j)}function y(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function w(ne,j,de,Re){return j===null||j.tag!==6?(j=ku(de,ne.mode,Re),j.return=ne,j):(j=f(j,de),j.return=ne,j)}function Z(ne,j,de,Re){var dt=de.type;return dt===D?Ae(ne,j,de.props.children,Re,de.key):j!==null&&(j.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===b&&Er(dt)===j.type)?(j=f(j,de.props),po(j,de),j.return=ne,j):(j=Dl(de.type,de.key,de.props,null,ne.mode,Re),po(j,de),j.return=ne,j)}function he(ne,j,de,Re){return j===null||j.tag!==4||j.stateNode.containerInfo!==de.containerInfo||j.stateNode.implementation!==de.implementation?(j=Xu(de,ne.mode,Re),j.return=ne,j):(j=f(j,de.children||[]),j.return=ne,j)}function Ae(ne,j,de,Re,dt){return j===null||j.tag!==7?(j=_r(de,ne.mode,Re,dt),j.return=ne,j):(j=f(j,de),j.return=ne,j)}function we(ne,j,de){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ku(""+j,ne.mode,de),j.return=ne,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return de=Dl(j.type,j.key,j.props,null,ne.mode,de),po(de,j),de.return=ne,de;case A:return j=Xu(j,ne.mode,de),j.return=ne,j;case b:return j=Er(j),we(ne,j,de)}if(J(j)||K(j))return j=_r(j,ne.mode,de,null),j.return=ne,j;if(typeof j.then=="function")return we(ne,Il(j),de);if(j.$$typeof===I)return we(ne,Ol(ne,j),de);Hl(ne,j)}return null}function me(ne,j,de,Re){var dt=j!==null?j.key:null;if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return dt!==null?null:w(ne,j,""+de,Re);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case M:return de.key===dt?Z(ne,j,de,Re):null;case A:return de.key===dt?he(ne,j,de,Re):null;case b:return de=Er(de),me(ne,j,de,Re)}if(J(de)||K(de))return dt!==null?null:Ae(ne,j,de,Re,null);if(typeof de.then=="function")return me(ne,j,Il(de),Re);if(de.$$typeof===I)return me(ne,j,Ol(ne,de),Re);Hl(ne,de)}return null}function Me(ne,j,de,Re,dt){if(typeof Re=="string"&&Re!==""||typeof Re=="number"||typeof Re=="bigint")return ne=ne.get(de)||null,w(j,ne,""+Re,dt);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case M:return ne=ne.get(Re.key===null?de:Re.key)||null,Z(j,ne,Re,dt);case A:return ne=ne.get(Re.key===null?de:Re.key)||null,he(j,ne,Re,dt);case b:return Re=Er(Re),Me(ne,j,de,Re,dt)}if(J(Re)||K(Re))return ne=ne.get(de)||null,Ae(j,ne,Re,dt,null);if(typeof Re.then=="function")return Me(ne,j,de,Il(Re),dt);if(Re.$$typeof===I)return Me(ne,j,de,Ol(j,Re),dt);Hl(j,Re)}return null}function rt(ne,j,de,Re){for(var dt=null,It=null,lt=j,St=j=0,Ut=null;lt!==null&&St<de.length;St++){lt.index>St?(Ut=lt,lt=null):Ut=lt.sibling;var Ht=me(ne,lt,de[St],Re);if(Ht===null){lt===null&&(lt=Ut);break}t&&lt&&Ht.alternate===null&&i(ne,lt),j=d(Ht,j,St),It===null?dt=Ht:It.sibling=Ht,It=Ht,lt=Ut}if(St===de.length)return r(ne,lt),Ot&&sa(ne,St),dt;if(lt===null){for(;St<de.length;St++)lt=we(ne,de[St],Re),lt!==null&&(j=d(lt,j,St),It===null?dt=lt:It.sibling=lt,It=lt);return Ot&&sa(ne,St),dt}for(lt=l(lt);St<de.length;St++)Ut=Me(lt,ne,St,de[St],Re),Ut!==null&&(t&&Ut.alternate!==null&&lt.delete(Ut.key===null?St:Ut.key),j=d(Ut,j,St),It===null?dt=Ut:It.sibling=Ut,It=Ut);return t&&lt.forEach(function(tr){return i(ne,tr)}),Ot&&sa(ne,St),dt}function mt(ne,j,de,Re){if(de==null)throw Error(a(151));for(var dt=null,It=null,lt=j,St=j=0,Ut=null,Ht=de.next();lt!==null&&!Ht.done;St++,Ht=de.next()){lt.index>St?(Ut=lt,lt=null):Ut=lt.sibling;var tr=me(ne,lt,Ht.value,Re);if(tr===null){lt===null&&(lt=Ut);break}t&&lt&&tr.alternate===null&&i(ne,lt),j=d(tr,j,St),It===null?dt=tr:It.sibling=tr,It=tr,lt=Ut}if(Ht.done)return r(ne,lt),Ot&&sa(ne,St),dt;if(lt===null){for(;!Ht.done;St++,Ht=de.next())Ht=we(ne,Ht.value,Re),Ht!==null&&(j=d(Ht,j,St),It===null?dt=Ht:It.sibling=Ht,It=Ht);return Ot&&sa(ne,St),dt}for(lt=l(lt);!Ht.done;St++,Ht=de.next())Ht=Me(lt,ne,St,Ht.value,Re),Ht!==null&&(t&&Ht.alternate!==null&&lt.delete(Ht.key===null?St:Ht.key),j=d(Ht,j,St),It===null?dt=Ht:It.sibling=Ht,It=Ht);return t&&lt.forEach(function(_3){return i(ne,_3)}),Ot&&sa(ne,St),dt}function Kt(ne,j,de,Re){if(typeof de=="object"&&de!==null&&de.type===D&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case M:e:{for(var dt=de.key;j!==null;){if(j.key===dt){if(dt=de.type,dt===D){if(j.tag===7){r(ne,j.sibling),Re=f(j,de.props.children),Re.return=ne,ne=Re;break e}}else if(j.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===b&&Er(dt)===j.type){r(ne,j.sibling),Re=f(j,de.props),po(Re,de),Re.return=ne,ne=Re;break e}r(ne,j);break}else i(ne,j);j=j.sibling}de.type===D?(Re=_r(de.props.children,ne.mode,Re,de.key),Re.return=ne,ne=Re):(Re=Dl(de.type,de.key,de.props,null,ne.mode,Re),po(Re,de),Re.return=ne,ne=Re)}return y(ne);case A:e:{for(dt=de.key;j!==null;){if(j.key===dt)if(j.tag===4&&j.stateNode.containerInfo===de.containerInfo&&j.stateNode.implementation===de.implementation){r(ne,j.sibling),Re=f(j,de.children||[]),Re.return=ne,ne=Re;break e}else{r(ne,j);break}else i(ne,j);j=j.sibling}Re=Xu(de,ne.mode,Re),Re.return=ne,ne=Re}return y(ne);case b:return de=Er(de),Kt(ne,j,de,Re)}if(J(de))return rt(ne,j,de,Re);if(K(de)){if(dt=K(de),typeof dt!="function")throw Error(a(150));return de=dt.call(de),mt(ne,j,de,Re)}if(typeof de.then=="function")return Kt(ne,j,Il(de),Re);if(de.$$typeof===I)return Kt(ne,j,Ol(ne,de),Re);Hl(ne,de)}return typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint"?(de=""+de,j!==null&&j.tag===6?(r(ne,j.sibling),Re=f(j,de),Re.return=ne,ne=Re):(r(ne,j),Re=ku(de,ne.mode,Re),Re.return=ne,ne=Re),y(ne)):r(ne,j)}return function(ne,j,de,Re){try{mo=0;var dt=Kt(ne,j,de,Re);return rs=null,dt}catch(lt){if(lt===as||lt===zl)throw lt;var It=ri(29,lt,null,ne.mode);return It.lanes=Re,It.return=ne,It}finally{}}}var Ar=Pm(!0),zm=Pm(!1),Ia=!1;function rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ll(t),xm(t,null,r),i}return wl(t,l,i,r),Ll(t)}function go(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,Wn(t,r)}}function of(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=y:d=d.next=y,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var lf=!1;function vo(){if(lf){var t=is;if(t!==null)throw t}}function _o(t,i,r,l){lf=!1;var f=t.updateQueue;Ia=!1;var d=f.firstBaseUpdate,y=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var Z=w,he=Z.next;Z.next=null,y===null?d=he:y.next=he,y=Z;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,w=Ae.lastBaseUpdate,w!==y&&(w===null?Ae.firstBaseUpdate=he:w.next=he,Ae.lastBaseUpdate=Z))}if(d!==null){var we=f.baseState;y=0,Ae=he=Z=null,w=d;do{var me=w.lane&-536870913,Me=me!==w.lane;if(Me?(Nt&me)===me:(l&me)===me){me!==0&&me===ns&&(lf=!0),Ae!==null&&(Ae=Ae.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var rt=t,mt=w;me=i;var Kt=r;switch(mt.tag){case 1:if(rt=mt.payload,typeof rt=="function"){we=rt.call(Kt,we,me);break e}we=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=mt.payload,me=typeof rt=="function"?rt.call(Kt,we,me):rt,me==null)break e;we=x({},we,me);break e;case 2:Ia=!0}}me=w.callback,me!==null&&(t.flags|=64,Me&&(t.flags|=8192),Me=f.callbacks,Me===null?f.callbacks=[me]:Me.push(me))}else Me={lane:me,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Ae===null?(he=Ae=Me,Z=we):Ae=Ae.next=Me,y|=me;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;Me=w,w=Me.next,Me.next=null,f.lastBaseUpdate=Me,f.shared.pending=null}}while(!0);Ae===null&&(Z=we),f.baseState=Z,f.firstBaseUpdate=he,f.lastBaseUpdate=Ae,d===null&&(f.shared.lanes=0),ka|=y,t.lanes=y,t.memoizedState=we}}function Fm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Im(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Fm(r[t],i)}var ss=U(null),Bl=U(0);function Hm(t,i){t=va,ve(Bl,t),ve(ss,i),va=t|i.baseLanes}function cf(){ve(Bl,va),ve(ss,ss.current)}function uf(){va=Bl.current,ie(ss),ie(Bl)}var si=U(null),Ei=null;function Va(t){var i=t.alternate;ve(dn,dn.current&1),ve(si,t),Ei===null&&(i===null||ss.current!==null||i.memoizedState!==null)&&(Ei=t)}function ff(t){ve(dn,dn.current),ve(si,t),Ei===null&&(Ei=t)}function Bm(t){t.tag===22?(ve(dn,dn.current),ve(si,t),Ei===null&&(Ei=t)):Ga()}function Ga(){ve(dn,dn.current),ve(si,si.current)}function oi(t){ie(si),Ei===t&&(Ei=null),ie(dn)}var dn=U(0);function Vl(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||vd(r)||_d(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ca=0,Mt=null,Yt=null,_n=null,Gl=!1,os=!1,Tr=!1,Zl=0,xo=0,ls=null,lx=0;function un(){throw Error(a(321))}function df(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!ai(t[r],i[r]))return!1;return!0}function hf(t,i,r,l,f,d){return ca=d,Mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?Ep:Cf,Tr=!1,d=r(l,f),Tr=!1,os&&(d=Gm(i,r,l,f)),Vm(t),d}function Vm(t){B.H=yo;var i=Yt!==null&&Yt.next!==null;if(ca=0,_n=Yt=Mt=null,Gl=!1,xo=0,ls=null,i)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&Ul(t)&&(xn=!0))}function Gm(t,i,r,l){Mt=t;var f=0;do{if(os&&(ls=null),xo=0,os=!1,25<=f)throw Error(a(301));if(f+=1,_n=Yt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=bp,d=i(r,l)}while(os);return d}function cx(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Mo(i):i,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(Mt.flags|=1024),i}function mf(){var t=Zl!==0;return Zl=0,t}function pf(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function gf(t){if(Gl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Gl=!1}ca=0,_n=Yt=Mt=null,os=!1,xo=Zl=0,ls=null}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Mt.memoizedState=_n=t:_n=_n.next=t,_n}function hn(){if(Yt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=_n===null?Mt.memoizedState:_n.next;if(i!==null)_n=i,Yt=t;else{if(t===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},_n===null?Mt.memoizedState=_n=t:_n=_n.next=t}return _n}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var i=xo;return xo+=1,ls===null&&(ls=[]),t=Nm(ls,t,i),i=Mt,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Ep:Cf),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===I)return Nn(t)}throw Error(a(438,String(t)))}function vf(t){var i=null,r=Mt.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=ql(),Mt.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=V;return i.index++,r}function ua(t,i){return typeof i=="function"?i(t):i}function Xl(t){var i=hn();return _f(i,Yt,t)}function _f(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var y=f.next;f.next=d.next,d.next=y}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var w=y=null,Z=null,he=i,Ae=!1;do{var we=he.lane&-536870913;if(we!==he.lane?(Nt&we)===we:(ca&we)===we){var me=he.revertLane;if(me===0)Z!==null&&(Z=Z.next={lane:0,revertLane:0,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),we===ns&&(Ae=!0);else if((ca&me)===me){he=he.next,me===ns&&(Ae=!0);continue}else we={lane:0,revertLane:he.revertLane,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},Z===null?(w=Z=we,y=d):Z=Z.next=we,Mt.lanes|=me,ka|=me;we=he.action,Tr&&r(d,we),d=he.hasEagerState?he.eagerState:r(d,we)}else me={lane:we,revertLane:he.revertLane,gesture:he.gesture,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},Z===null?(w=Z=me,y=d):Z=Z.next=me,Mt.lanes|=we,ka|=we;he=he.next}while(he!==null&&he!==i);if(Z===null?y=d:Z.next=w,!ai(d,t.memoizedState)&&(xn=!0,Ae&&(r=is,r!==null)))throw r;t.memoizedState=d,t.baseState=y,t.baseQueue=Z,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function xf(t){var i=hn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var y=f=f.next;do d=t(d,y.action),y=y.next;while(y!==f);ai(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function Zm(t,i,r){var l=Mt,f=hn(),d=Ot;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var y=!ai((Yt||f).memoizedState,r);if(y&&(f.memoizedState=r,xn=!0),f=f.queue,yf(Xm.bind(null,l,f,t),[t]),f.getSnapshot!==i||y||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,cs(9,{destroy:void 0},km.bind(null,l,f,r,i),null),Qt===null)throw Error(a(349));d||(ca&127)!==0||qm(l,i,r)}return r}function qm(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=Mt.updateQueue,i===null?(i=ql(),Mt.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function km(t,i,r,l){i.value=r,i.getSnapshot=l,Wm(i)&&Ym(t)}function Xm(t,i,r){return r(function(){Wm(i)&&Ym(t)})}function Wm(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!ai(t,r)}catch{return!0}}function Ym(t){var i=vr(t,2);i!==null&&ei(i,t,2)}function Mf(t){var i=Zn();if(typeof t=="function"){var r=t;if(t=r(),Tr){Be(!0);try{r()}finally{Be(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},i}function jm(t,i,r,l){return t.baseState=r,_f(t,Yt,typeof l=="function"?l:ua)}function ux(t,i,r,l,f){if(jl(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,Km(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Km(t,i){var r=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=B.T,y={};B.T=y;try{var w=r(f,l),Z=B.S;Z!==null&&Z(y,w),Jm(t,i,w)}catch(he){Sf(t,i,he)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=r(f,l),Jm(t,i,d)}catch(he){Sf(t,i,he)}}function Jm(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Qm(t,i,l)},function(l){return Sf(t,i,l)}):Qm(t,i,r)}function Qm(t,i,r){i.status="fulfilled",i.value=r,$m(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,Km(t,r)))}function Sf(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,$m(i),i=i.next;while(i!==l)}t.action=null}function $m(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ep(t,i){return i}function tp(t,i){if(Ot){var r=Qt.formState;if(r!==null){e:{var l=Mt;if(Ot){if(tn){t:{for(var f=tn,d=yi;f.nodeType!==8;){if(!d){f=null;break t}if(f=bi(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){tn=bi(f.nextSibling),l=f.data==="F!";break e}}za(l)}l=!1}l&&(i=r[0])}}return r=Zn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ep,lastRenderedState:i},r.queue=l,r=Mp.bind(null,Mt,l),l.dispatch=r,l=Mf(!1),d=Rf.bind(null,Mt,!1,l.queue),l=Zn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,r=ux.bind(null,Mt,f,d,r),f.dispatch=r,l.memoizedState=t,[i,r,!1]}function np(t){var i=hn();return ip(i,Yt,t)}function ip(t,i,r){if(i=_f(t,i,ep)[0],t=Xl(ua)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Mo(i)}catch(y){throw y===as?zl:y}else l=i;i=hn();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(Mt.flags|=2048,cs(9,{destroy:void 0},fx.bind(null,f,r),null)),[l,d,t]}function fx(t,i){t.action=i}function ap(t){var i=hn(),r=Yt;if(r!==null)return ip(i,r,t);hn(),i=i.memoizedState,r=hn();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function cs(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=Mt.updateQueue,i===null&&(i=ql(),Mt.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function rp(){return hn().memoizedState}function Wl(t,i,r,l){var f=Zn();Mt.flags|=t,f.memoizedState=cs(1|i,{destroy:void 0},r,l===void 0?null:l)}function Yl(t,i,r,l){var f=hn();l=l===void 0?null:l;var d=f.memoizedState.inst;Yt!==null&&l!==null&&df(l,Yt.memoizedState.deps)?f.memoizedState=cs(i,d,r,l):(Mt.flags|=t,f.memoizedState=cs(1|i,d,r,l))}function sp(t,i){Wl(8390656,8,t,i)}function yf(t,i){Yl(2048,8,t,i)}function dx(t){Mt.flags|=4;var i=Mt.updateQueue;if(i===null)i=ql(),Mt.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function op(t){var i=hn().memoizedState;return dx({ref:i,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function lp(t,i){return Yl(4,2,t,i)}function cp(t,i){return Yl(4,4,t,i)}function up(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function fp(t,i,r){r=r!=null?r.concat([t]):null,Yl(4,4,up.bind(null,i,t),r)}function Ef(){}function dp(t,i){var r=hn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&df(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function hp(t,i){var r=hn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&df(i,l[1]))return l[0];if(l=t(),Tr){Be(!0);try{t()}finally{Be(!1)}}return r.memoizedState=[l,i],l}function bf(t,i,r){return r===void 0||(ca&1073741824)!==0&&(Nt&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=m1(),Mt.lanes|=t,ka|=t,r)}function mp(t,i,r,l){return ai(r,i)?r:ss.current!==null?(t=bf(t,r,l),ai(t,i)||(xn=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(Nt&261930)===0?(xn=!0,t.memoizedState=r):(t=m1(),Mt.lanes|=t,ka|=t,i)}function pp(t,i,r,l,f){var d=G.p;G.p=d!==0&&8>d?d:8;var y=B.T,w={};B.T=w,Rf(t,!1,i,r);try{var Z=f(),he=B.S;if(he!==null&&he(w,Z),Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var Ae=ox(Z,l);So(t,i,Ae,ui(t))}else So(t,i,l,ui(t))}catch(we){So(t,i,{then:function(){},status:"rejected",reason:we},ui())}finally{G.p=d,y!==null&&w.types!==null&&(y.types=w.types),B.T=y}}function hx(){}function Af(t,i,r,l){if(t.tag!==5)throw Error(a(476));var f=gp(t).queue;pp(t,f,i,oe,r===null?hx:function(){return vp(t),r(l)})}function gp(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:oe},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function vp(t){var i=gp(t);i.next===null&&(i=t.alternate.memoizedState),So(t,i.next.queue,{},ui())}function Tf(){return Nn(Io)}function _p(){return hn().memoizedState}function xp(){return hn().memoizedState}function mx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=ui();t=Ha(r);var l=Ba(i,t,r);l!==null&&(ei(l,i,r),go(l,i,r)),i={cache:ef()},t.payload=i;return}i=i.return}}function px(t,i,r){var l=ui();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},jl(t)?Sp(i,r):(r=Zu(t,i,r,l),r!==null&&(ei(r,t,l),yp(r,i,l)))}function Mp(t,i,r){var l=ui();So(t,i,r,l)}function So(t,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(jl(t))Sp(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,w=d(y,r);if(f.hasEagerState=!0,f.eagerState=w,ai(w,y))return wl(t,i,f,0),Qt===null&&Cl(),!1}catch{}finally{}if(r=Zu(t,i,f,l),r!==null)return ei(r,t,l),yp(r,i,l),!0}return!1}function Rf(t,i,r,l){if(l={lane:2,revertLane:rd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(i)throw Error(a(479))}else i=Zu(t,r,l,2),i!==null&&ei(i,t,2)}function jl(t){var i=t.alternate;return t===Mt||i!==null&&i===Mt}function Sp(t,i){os=Gl=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function yp(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,Wn(t,r)}}var yo={readContext:Nn,use:kl,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};yo.useEffectEvent=un;var Ep={readContext:Nn,use:kl,useCallback:function(t,i){return Zn().memoizedState=[t,i===void 0?null:i],t},useContext:Nn,useEffect:sp,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Wl(4194308,4,up.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Wl(4194308,4,t,i)},useInsertionEffect:function(t,i){Wl(4,2,t,i)},useMemo:function(t,i){var r=Zn();i=i===void 0?null:i;var l=t();if(Tr){Be(!0);try{t()}finally{Be(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=Zn();if(r!==void 0){var f=r(i);if(Tr){Be(!0);try{r(i)}finally{Be(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=px.bind(null,Mt,t),[l.memoizedState,t]},useRef:function(t){var i=Zn();return t={current:t},i.memoizedState=t},useState:function(t){t=Mf(t);var i=t.queue,r=Mp.bind(null,Mt,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Ef,useDeferredValue:function(t,i){var r=Zn();return bf(r,t,i)},useTransition:function(){var t=Mf(!1);return t=pp.bind(null,Mt,t.queue,!0,!1),Zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=Mt,f=Zn();if(Ot){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Qt===null)throw Error(a(349));(Nt&127)!==0||qm(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,sp(Xm.bind(null,l,d,t),[t]),l.flags|=2048,cs(9,{destroy:void 0},km.bind(null,l,d,r,i),null),r},useId:function(){var t=Zn(),i=Qt.identifierPrefix;if(Ot){var r=Zi,l=Gi;r=(l&~(1<<32-Xe(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Zl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=lx++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Tf,useFormState:tp,useActionState:tp,useOptimistic:function(t){var i=Zn();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Rf.bind(null,Mt,!0,r),r.dispatch=i,[t,i]},useMemoCache:vf,useCacheRefresh:function(){return Zn().memoizedState=mx.bind(null,Mt)},useEffectEvent:function(t){var i=Zn(),r={impl:t};return i.memoizedState=r,function(){if((Gt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Cf={readContext:Nn,use:kl,useCallback:dp,useContext:Nn,useEffect:yf,useImperativeHandle:fp,useInsertionEffect:lp,useLayoutEffect:cp,useMemo:hp,useReducer:Xl,useRef:rp,useState:function(){return Xl(ua)},useDebugValue:Ef,useDeferredValue:function(t,i){var r=hn();return mp(r,Yt.memoizedState,t,i)},useTransition:function(){var t=Xl(ua)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:Mo(t),i]},useSyncExternalStore:Zm,useId:_p,useHostTransitionStatus:Tf,useFormState:np,useActionState:np,useOptimistic:function(t,i){var r=hn();return jm(r,Yt,t,i)},useMemoCache:vf,useCacheRefresh:xp};Cf.useEffectEvent=op;var bp={readContext:Nn,use:kl,useCallback:dp,useContext:Nn,useEffect:yf,useImperativeHandle:fp,useInsertionEffect:lp,useLayoutEffect:cp,useMemo:hp,useReducer:xf,useRef:rp,useState:function(){return xf(ua)},useDebugValue:Ef,useDeferredValue:function(t,i){var r=hn();return Yt===null?bf(r,t,i):mp(r,Yt.memoizedState,t,i)},useTransition:function(){var t=xf(ua)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:Mo(t),i]},useSyncExternalStore:Zm,useId:_p,useHostTransitionStatus:Tf,useFormState:ap,useActionState:ap,useOptimistic:function(t,i){var r=hn();return Yt!==null?jm(r,Yt,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:vf,useCacheRefresh:xp};bp.useEffectEvent=op;function wf(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:x({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Lf={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=ui(),f=Ha(l);f.payload=i,r!=null&&(f.callback=r),i=Ba(t,f,l),i!==null&&(ei(i,t,l),go(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=ui(),f=Ha(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Ba(t,f,l),i!==null&&(ei(i,t,l),go(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=ui(),l=Ha(r);l.tag=2,i!=null&&(l.callback=i),i=Ba(t,l,r),i!==null&&(ei(i,t,r),go(i,t,r))}};function Ap(t,i,r,l,f,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!oo(r,l)||!oo(f,d):!0}function Tp(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&Lf.enqueueReplaceState(i,i.state,null)}function Rr(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=x({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function Rp(t){Rl(t)}function Cp(t){console.error(t)}function wp(t){Rl(t)}function Kl(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Lp(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Df(t,i,r){return r=Ha(r),r.tag=3,r.payload={element:null},r.callback=function(){Kl(t,i)},r}function Dp(t){return t=Ha(t),t.tag=3,t}function Np(t,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){Lp(i,r,l)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Lp(i,r,l),typeof f!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function gx(t,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&ts(i,r,f,!0),r=si.current,r!==null){switch(r.tag){case 31:case 13:return Ei===null?lc():r.alternate===null&&fn===0&&(fn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Fl?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),nd(t,l,f)),!1;case 22:return r.flags|=65536,l===Fl?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),nd(t,l,f)),!1}throw Error(a(435,r.tag))}return nd(t,l,f),lc(),!1}if(Ot)return i=si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==ju&&(t=Error(a(422),{cause:l}),uo(xi(t,r)))):(l!==ju&&(i=Error(a(423),{cause:l}),uo(xi(i,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=xi(l,r),f=Df(t.stateNode,l,f),of(t,f),fn!==4&&(fn=2)),!1;var d=Error(a(520),{cause:l});if(d=xi(d,r),Lo===null?Lo=[d]:Lo.push(d),fn!==4&&(fn=2),i===null)return!0;l=xi(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=Df(r.stateNode,l,t),of(r,t),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Dp(f),Np(f,t,r,l),of(r,f),!1}r=r.return}while(r!==null);return!1}var Nf=Error(a(461)),xn=!1;function Un(t,i,r,l){i.child=t===null?zm(i,null,r,l):Ar(i,t.child,r,l)}function Up(t,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var y={};for(var w in l)w!=="ref"&&(y[w]=l[w])}else y=l;return Sr(i),l=hf(t,i,r,y,d,f),w=mf(),t!==null&&!xn?(pf(t,i,f),fa(t,i,f)):(Ot&&w&&Wu(i),i.flags|=1,Un(t,i,l,f),i.child)}function Op(t,i,r,l,f){if(t===null){var d=r.type;return typeof d=="function"&&!qu(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Pp(t,i,d,l,f)):(t=Dl(r.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Bf(t,f)){var y=d.memoizedProps;if(r=r.compare,r=r!==null?r:oo,r(y,l)&&t.ref===i.ref)return fa(t,i,f)}return i.flags|=1,t=ra(d,l),t.ref=i.ref,t.return=i,i.child=t}function Pp(t,i,r,l,f){if(t!==null){var d=t.memoizedProps;if(oo(d,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=d,Bf(t,f))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,fa(t,i,f)}return Uf(t,i,r,l,f)}function zp(t,i,r,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Fp(t,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(i,d!==null?d.cachePool:null),d!==null?Hm(i,d):cf(),Bm(i);else return l=i.lanes=536870912,Fp(t,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(Pl(i,d.cachePool),Hm(i,d),Ga(),i.memoizedState=null):(t!==null&&Pl(i,null),cf(),Ga());return Un(t,i,f,r),i.child}function Eo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Fp(t,i,r,l,f){var d=nf();return d=d===null?null:{parent:vn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},t!==null&&Pl(i,null),cf(),Bm(i),t!==null&&ts(t,i,l,!0),i.childLanes=f,null}function Jl(t,i){return i=$l({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Ip(t,i,r){return Ar(i,t.child,null,r),t=Jl(i,i.pendingProps),t.flags|=2,oi(i),i.memoizedState=null,t}function vx(t,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ot){if(l.mode==="hidden")return t=Jl(i,l),i.lanes=536870912,Eo(null,t);if(ff(i),(t=tn)?(t=K1(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Gi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},r=Sm(t),r.return=i,i.child=r,Dn=i,tn=null)):t=null,t===null)throw za(i);return i.lanes=536870912,null}return Jl(i,l)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(ff(i),f)if(i.flags&256)i.flags&=-257,i=Ip(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(xn||ts(t,i,r,!1),f=(r&t.childLanes)!==0,xn||f){if(l=Qt,l!==null&&(y=ni(l,r),y!==0&&y!==d.retryLane))throw d.retryLane=y,vr(t,y),ei(l,t,y),Nf;lc(),i=Ip(t,i,r)}else t=d.treeContext,tn=bi(y.nextSibling),Dn=i,Ot=!0,Pa=null,yi=!1,t!==null&&bm(i,t),i=Jl(i,l),i.flags|=4096;return i}return t=ra(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Ql(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Uf(t,i,r,l,f){return Sr(i),r=hf(t,i,r,l,void 0,f),l=mf(),t!==null&&!xn?(pf(t,i,f),fa(t,i,f)):(Ot&&l&&Wu(i),i.flags|=1,Un(t,i,r,f),i.child)}function Hp(t,i,r,l,f,d){return Sr(i),i.updateQueue=null,r=Gm(i,l,r,f),Vm(t),l=mf(),t!==null&&!xn?(pf(t,i,d),fa(t,i,d)):(Ot&&l&&Wu(i),i.flags|=1,Un(t,i,r,d),i.child)}function Bp(t,i,r,l,f){if(Sr(i),i.stateNode===null){var d=Jr,y=r.contextType;typeof y=="object"&&y!==null&&(d=Nn(y)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Lf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},rf(i),y=r.contextType,d.context=typeof y=="object"&&y!==null?Nn(y):Jr,d.state=i.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(wf(i,r,y,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Lf.enqueueReplaceState(d,d.state,null),_o(i,l,d,f),vo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var w=i.memoizedProps,Z=Rr(r,w);d.props=Z;var he=d.context,Ae=r.contextType;y=Jr,typeof Ae=="object"&&Ae!==null&&(y=Nn(Ae));var we=r.getDerivedStateFromProps;Ae=typeof we=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,Ae||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||he!==y)&&Tp(i,d,l,y),Ia=!1;var me=i.memoizedState;d.state=me,_o(i,l,d,f),vo(),he=i.memoizedState,w||me!==he||Ia?(typeof we=="function"&&(wf(i,r,we,l),he=i.memoizedState),(Z=Ia||Ap(i,r,Z,l,me,he,y))?(Ae||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=he),d.props=l,d.state=he,d.context=y,l=Z):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,sf(t,i),y=i.memoizedProps,Ae=Rr(r,y),d.props=Ae,we=i.pendingProps,me=d.context,he=r.contextType,Z=Jr,typeof he=="object"&&he!==null&&(Z=Nn(he)),w=r.getDerivedStateFromProps,(he=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==we||me!==Z)&&Tp(i,d,l,Z),Ia=!1,me=i.memoizedState,d.state=me,_o(i,l,d,f),vo();var Me=i.memoizedState;y!==we||me!==Me||Ia||t!==null&&t.dependencies!==null&&Ul(t.dependencies)?(typeof w=="function"&&(wf(i,r,w,l),Me=i.memoizedState),(Ae=Ia||Ap(i,r,Ae,l,me,Me,Z)||t!==null&&t.dependencies!==null&&Ul(t.dependencies))?(he||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Me,Z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Me,Z)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Me),d.props=l,d.state=Me,d.context=Z,l=Ae):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ql(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Ar(i,t.child,null,f),i.child=Ar(i,null,r,f)):Un(t,i,r,f),i.memoizedState=d.state,t=i.child):t=fa(t,i,f),t}function Vp(t,i,r,l){return xr(),i.flags|=256,Un(t,i,r,l),i.child}var Of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pf(t){return{baseLanes:t,cachePool:Lm()}}function zf(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=ci),t}function Gp(t,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ot){if(f?Va(i):Ga(),(t=tn)?(t=K1(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Gi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},r=Sm(t),r.return=i,i.child=r,Dn=i,tn=null)):t=null,t===null)throw za(i);return _d(t)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ga(),f=i.mode,w=$l({mode:"hidden",children:w},f),l=_r(l,f,r,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=Pf(r),l.childLanes=zf(t,y,r),i.memoizedState=Of,Eo(null,l)):(Va(i),Ff(i,w))}var Z=t.memoizedState;if(Z!==null&&(w=Z.dehydrated,w!==null)){if(d)i.flags&256?(Va(i),i.flags&=-257,i=If(t,i,r)):i.memoizedState!==null?(Ga(),i.child=t.child,i.flags|=128,i=null):(Ga(),w=l.fallback,f=i.mode,l=$l({mode:"visible",children:l.children},f),w=_r(w,f,r,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,Ar(i,t.child,null,r),l=i.child,l.memoizedState=Pf(r),l.childLanes=zf(t,y,r),i.memoizedState=Of,i=Eo(null,l));else if(Va(i),_d(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var he=y.dgst;y=he,l=Error(a(419)),l.stack="",l.digest=y,uo({value:l,source:null,stack:null}),i=If(t,i,r)}else if(xn||ts(t,i,r,!1),y=(r&t.childLanes)!==0,xn||y){if(y=Qt,y!==null&&(l=ni(y,r),l!==0&&l!==Z.retryLane))throw Z.retryLane=l,vr(t,l),ei(y,t,l),Nf;vd(w)||lc(),i=If(t,i,r)}else vd(w)?(i.flags|=192,i.child=t.child,i=null):(t=Z.treeContext,tn=bi(w.nextSibling),Dn=i,Ot=!0,Pa=null,yi=!1,t!==null&&bm(i,t),i=Ff(i,l.children),i.flags|=4096);return i}return f?(Ga(),w=l.fallback,f=i.mode,Z=t.child,he=Z.sibling,l=ra(Z,{mode:"hidden",children:l.children}),l.subtreeFlags=Z.subtreeFlags&65011712,he!==null?w=ra(he,w):(w=_r(w,f,r,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Eo(null,l),l=i.child,w=t.child.memoizedState,w===null?w=Pf(r):(f=w.cachePool,f!==null?(Z=vn._currentValue,f=f.parent!==Z?{parent:Z,pool:Z}:f):f=Lm(),w={baseLanes:w.baseLanes|r,cachePool:f}),l.memoizedState=w,l.childLanes=zf(t,y,r),i.memoizedState=Of,Eo(t.child,l)):(Va(i),r=t.child,t=r.sibling,r=ra(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=r,i.memoizedState=null,r)}function Ff(t,i){return i=$l({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function $l(t,i){return t=ri(22,t,null,i),t.lanes=0,t}function If(t,i,r){return Ar(i,t.child,null,r),t=Ff(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Zp(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Qu(t.return,i,r)}function Hf(t,i,r,l,f,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=r,y.tailMode=f,y.treeForkCount=d)}function qp(t,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var y=dn.current,w=(y&2)!==0;if(w?(y=y&1|2,i.flags|=128):y&=1,ve(dn,y),Un(t,i,l,r),l=Ot?co:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,r,i);else if(t.tag===19)Zp(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&Vl(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),Hf(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Vl(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}Hf(i,!0,r,null,d,l);break;case"together":Hf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function fa(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),ka|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(ts(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=ra(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=ra(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Bf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ul(t)))}function _x(t,i,r){switch(i.tag){case 3:_e(i,i.stateNode.containerInfo),Fa(i,vn,t.memoizedState.cache),xr();break;case 27:case 5:ot(i);break;case 4:_e(i,i.stateNode.containerInfo);break;case 10:Fa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ff(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Va(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Gp(t,i,r):(Va(i),t=fa(t,i,r),t!==null?t.sibling:null);Va(i);break;case 19:var f=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(ts(t,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return qp(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ve(dn,dn.current),l)break;return null;case 22:return i.lanes=0,zp(t,i,r,i.pendingProps);case 24:Fa(i,vn,t.memoizedState.cache)}return fa(t,i,r)}function kp(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!Bf(t,r)&&(i.flags&128)===0)return xn=!1,_x(t,i,r);xn=(t.flags&131072)!==0}else xn=!1,Ot&&(i.flags&1048576)!==0&&Em(i,co,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Er(i.elementType),i.type=t,typeof t=="function")qu(t)?(l=Rr(t,l),i.tag=1,i=Bp(null,i,t,l,r)):(i.tag=0,i=Uf(null,i,t,l,r));else{if(t!=null){var f=t.$$typeof;if(f===R){i.tag=11,i=Up(null,i,t,l,r);break e}else if(f===L){i.tag=14,i=Op(null,i,t,l,r);break e}}throw i=W(t)||t,Error(a(306,i,""))}}return i;case 0:return Uf(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=Rr(l,i.pendingProps),Bp(t,i,l,f,r);case 3:e:{if(_e(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,sf(t,i),_o(i,l,null,r);var y=i.memoizedState;if(l=y.cache,Fa(i,vn,l),l!==d.cache&&$u(i,[vn],r,!0),vo(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Vp(t,i,l,r);break e}else if(l!==f){f=xi(Error(a(424)),i),uo(f),i=Vp(t,i,l,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=bi(t.firstChild),Dn=i,Ot=!0,Pa=null,yi=!0,r=zm(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(xr(),l===f){i=fa(t,i,r);break e}Un(t,i,l,r)}i=i.child}return i;case 26:return Ql(t,i),t===null?(r=ng(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ot||(r=i.type,t=i.pendingProps,l=pc(ke.current).createElement(r),l[mn]=i,l[Ln]=t,On(l,r,t),pn(l),i.stateNode=l):i.memoizedState=ng(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ot(i),t===null&&Ot&&(l=i.stateNode=$1(i.type,i.pendingProps,ke.current),Dn=i,yi=!0,f=tn,Ka(i.type)?(xd=f,tn=bi(l.firstChild)):tn=f),Un(t,i,i.pendingProps.children,r),Ql(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ot&&((f=l=tn)&&(l=Yx(l,i.type,i.pendingProps,yi),l!==null?(i.stateNode=l,Dn=i,tn=bi(l.firstChild),yi=!1,f=!0):f=!1),f||za(i)),ot(i),f=i.type,d=i.pendingProps,y=t!==null?t.memoizedProps:null,l=d.children,md(f,d)?l=null:y!==null&&md(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=hf(t,i,cx,null,null,r),Io._currentValue=f),Ql(t,i),Un(t,i,l,r),i.child;case 6:return t===null&&Ot&&((t=r=tn)&&(r=jx(r,i.pendingProps,yi),r!==null?(i.stateNode=r,Dn=i,tn=null,t=!0):t=!1),t||za(i)),null;case 13:return Gp(t,i,r);case 4:return _e(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ar(i,null,l,r):Un(t,i,l,r),i.child;case 11:return Up(t,i,i.type,i.pendingProps,r);case 7:return Un(t,i,i.pendingProps,r),i.child;case 8:return Un(t,i,i.pendingProps.children,r),i.child;case 12:return Un(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Fa(i,i.type,l.value),Un(t,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Sr(i),f=Nn(f),l=l(f),i.flags|=1,Un(t,i,l,r),i.child;case 14:return Op(t,i,i.type,i.pendingProps,r);case 15:return Pp(t,i,i.type,i.pendingProps,r);case 19:return qp(t,i,r);case 31:return vx(t,i,r);case 22:return zp(t,i,r,i.pendingProps);case 24:return Sr(i),l=Nn(vn),t===null?(f=nf(),f===null&&(f=Qt,d=ef(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},rf(i),Fa(i,vn,f)):((t.lanes&r)!==0&&(sf(t,i),_o(i,null,null,r),vo()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Fa(i,vn,l)):(l=d.cache,Fa(i,vn,l),l!==f.cache&&$u(i,[vn],r,!0))),Un(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function da(t){t.flags|=4}function Vf(t,i,r,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(_1())t.flags|=8192;else throw br=Fl,af}else t.flags&=-16777217}function Xp(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!og(i))if(_1())t.flags|=8192;else throw br=Fl,af}function ec(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?xe():536870912,t.lanes|=i,hs|=i)}function bo(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function xx(t,i,r){var l=i.pendingProps;switch(Yu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(i),null;case 1:return nn(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),la(vn),Ne(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(es(i)?da(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ku())),nn(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(da(i),d!==null?(nn(i),Xp(i,d)):(nn(i),Vf(i,f,null,l,r))):d?d!==t.memoizedState?(da(i),nn(i),Xp(i,d)):(nn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&da(i),nn(i),Vf(i,f,t,l,r)),null;case 27:if(qe(i),r=ke.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return nn(i),null}t=Oe.current,es(i)?Am(i):(t=$1(f,l,r),i.stateNode=t,da(i))}return nn(i),null;case 5:if(qe(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return nn(i),null}if(d=Oe.current,es(i))Am(i);else{var y=pc(ke.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}d[mn]=i,d[Ln]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;e:switch(On(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&da(i)}}return nn(i),Vf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ke.current,es(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[mn]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||G1(t.nodeValue,r)),t||za(i,!0)}else t=pc(t).createTextNode(l),t[mn]=i,i.stateNode=t}return nn(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=es(i),r!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[mn]=i}else xr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),t=!1}else r=Ku(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(oi(i),i):(oi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return nn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=es(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[mn]=i}else xr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),f=!1}else f=Ku(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(oi(i),i):(oi(i),null)}return oi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),ec(i,i.updateQueue),nn(i),null);case 4:return Ne(),t===null&&cd(i.stateNode.containerInfo),nn(i),null;case 10:return la(i.type),nn(i),null;case 19:if(ie(dn),l=i.memoizedState,l===null)return nn(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)bo(l,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Vl(t),d!==null){for(i.flags|=128,bo(l,!1),t=d.updateQueue,i.updateQueue=t,ec(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Mm(r,t),r=r.sibling;return ve(dn,dn.current&1|2),Ot&&sa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&ft()>rc&&(i.flags|=128,f=!0,bo(l,!1),i.lanes=4194304)}else{if(!f)if(t=Vl(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,ec(i,t),bo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ot)return nn(i),null}else 2*ft()-l.renderingStartTime>rc&&r!==536870912&&(i.flags|=128,f=!0,bo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ft(),t.sibling=null,r=dn.current,ve(dn,f?r&1|2:r&1),Ot&&sa(i,l.treeForkCount),t):(nn(i),null);case 22:case 23:return oi(i),uf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(nn(i),i.subtreeFlags&6&&(i.flags|=8192)):nn(i),r=i.updateQueue,r!==null&&ec(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&ie(yr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),la(vn),nn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Mx(t,i){switch(Yu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return la(vn),Ne(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return qe(i),null;case 31:if(i.memoizedState!==null){if(oi(i),i.alternate===null)throw Error(a(340));xr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(oi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));xr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(dn),null;case 4:return Ne(),null;case 10:return la(i.type),null;case 22:case 23:return oi(i),uf(),t!==null&&ie(yr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return la(vn),null;case 25:return null;default:return null}}function Wp(t,i){switch(Yu(i),i.tag){case 3:la(vn),Ne();break;case 26:case 27:case 5:qe(i);break;case 4:Ne();break;case 31:i.memoizedState!==null&&oi(i);break;case 13:oi(i);break;case 19:ie(dn);break;case 10:la(i.type);break;case 22:case 23:oi(i),uf(),t!==null&&ie(yr);break;case 24:la(vn)}}function Ao(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&t)===t){l=void 0;var d=r.create,y=r.inst;l=d(),y.destroy=l}r=r.next}while(r!==f)}}catch(w){qt(i,i.return,w)}}function Za(t,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var y=l.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,f=i;var Z=r,he=w;try{he()}catch(Ae){qt(f,Z,Ae)}}}l=l.next}while(l!==d)}}catch(Ae){qt(i,i.return,Ae)}}function Yp(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{Im(i,r)}catch(l){qt(t,t.return,l)}}}function jp(t,i,r){r.props=Rr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){qt(t,i,l)}}function To(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(f){qt(t,i,f)}}function qi(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){qt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){qt(t,i,f)}else r.current=null}function Kp(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){qt(t,t.return,f)}}function Gf(t,i,r){try{var l=t.stateNode;Gx(l,t.type,r,i),l[Ln]=i}catch(f){qt(t,t.return,f)}}function Jp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function Zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=vi));else if(l!==4&&(l===27&&Ka(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(qf(t,i,r),t=t.sibling;t!==null;)qf(t,i,r),t=t.sibling}function tc(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&Ka(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(tc(t,i,r),t=t.sibling;t!==null;)tc(t,i,r),t=t.sibling}function Qp(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);On(i,l,r),i[mn]=t,i[Ln]=r}catch(d){qt(t,t.return,d)}}var ha=!1,Mn=!1,kf=!1,$p=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function Sx(t,i){if(t=t.containerInfo,dd=yc,t=fm(t),Fu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var y=0,w=-1,Z=-1,he=0,Ae=0,we=t,me=null;t:for(;;){for(var Me;we!==r||f!==0&&we.nodeType!==3||(w=y+f),we!==d||l!==0&&we.nodeType!==3||(Z=y+l),we.nodeType===3&&(y+=we.nodeValue.length),(Me=we.firstChild)!==null;)me=we,we=Me;for(;;){if(we===t)break t;if(me===r&&++he===f&&(w=y),me===d&&++Ae===l&&(Z=y),(Me=we.nextSibling)!==null)break;we=me,me=we.parentNode}we=Me}r=w===-1||Z===-1?null:{start:w,end:Z}}else r=null}r=r||{start:0,end:0}}else r=null;for(hd={focusedElem:t,selectionRange:r},yc=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var rt=Rr(r.type,f);t=l.getSnapshotBeforeUpdate(rt,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(mt){qt(r,r.return,mt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)gd(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function e1(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:pa(t,r),l&4&&Ao(5,r);break;case 1:if(pa(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(y){qt(r,r.return,y)}else{var f=Rr(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){qt(r,r.return,y)}}l&64&&Yp(r),l&512&&To(r,r.return);break;case 3:if(pa(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Im(t,i)}catch(y){qt(r,r.return,y)}}break;case 27:i===null&&l&4&&Qp(r);case 26:case 5:pa(t,r),i===null&&l&4&&Kp(r),l&512&&To(r,r.return);break;case 12:pa(t,r);break;case 31:pa(t,r),l&4&&i1(t,r);break;case 13:pa(t,r),l&4&&a1(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Lx.bind(null,r),Kx(t,r))));break;case 22:if(l=r.memoizedState!==null||ha,!l){i=i!==null&&i.memoizedState!==null||Mn,f=ha;var d=Mn;ha=l,(Mn=i)&&!d?ga(t,r,(r.subtreeFlags&8772)!==0):pa(t,r),ha=f,Mn=d}break;case 30:break;default:pa(t,r)}}function t1(t){var i=t.alternate;i!==null&&(t.alternate=null,t1(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&La(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,Kn=!1;function ma(t,i,r){for(r=r.child;r!==null;)n1(t,i,r),r=r.sibling}function n1(t,i,r){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Se,r)}catch{}switch(r.tag){case 26:Mn||qi(r,i),ma(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Mn||qi(r,i);var l=sn,f=Kn;Ka(r.type)&&(sn=r.stateNode,Kn=!1),ma(t,i,r),Po(r.stateNode),sn=l,Kn=f;break;case 5:Mn||qi(r,i);case 6:if(l=sn,f=Kn,sn=null,ma(t,i,r),sn=l,Kn=f,sn!==null)if(Kn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(r.stateNode)}catch(d){qt(r,i,d)}else try{sn.removeChild(r.stateNode)}catch(d){qt(r,i,d)}break;case 18:sn!==null&&(Kn?(t=sn,Y1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ss(t)):Y1(sn,r.stateNode));break;case 4:l=sn,f=Kn,sn=r.stateNode.containerInfo,Kn=!0,ma(t,i,r),sn=l,Kn=f;break;case 0:case 11:case 14:case 15:Za(2,r,i),Mn||Za(4,r,i),ma(t,i,r);break;case 1:Mn||(qi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&jp(r,i,l)),ma(t,i,r);break;case 21:ma(t,i,r);break;case 22:Mn=(l=Mn)||r.memoizedState!==null,ma(t,i,r),Mn=l;break;default:ma(t,i,r)}}function i1(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ss(t)}catch(r){qt(i,i.return,r)}}}function a1(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ss(t)}catch(r){qt(i,i.return,r)}}function yx(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new $p),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new $p),i;default:throw Error(a(435,t.tag))}}function nc(t,i){var r=yx(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=Dx.bind(null,t,l);l.then(f,f)}})}function Jn(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=t,y=i,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Ka(w.type)){sn=w.stateNode,Kn=!1;break e}break;case 5:sn=w.stateNode,Kn=!1;break e;case 3:case 4:sn=w.stateNode.containerInfo,Kn=!0;break e}w=w.return}if(sn===null)throw Error(a(160));n1(d,y,f),sn=null,Kn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)r1(i,t),i=i.sibling}var wi=null;function r1(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(i,t),Qn(t),l&4&&(Za(3,t,t.return),Ao(3,t),Za(5,t,t.return));break;case 1:Jn(i,t),Qn(t),l&512&&(Mn||r===null||qi(r,r.return)),l&64&&ha&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=wi;if(Jn(i,t),Qn(t),l&512&&(Mn||r===null||qi(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[wa]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),On(d,l,r),d[mn]=t,pn(d),l=d;break e;case"link":var y=rg("link","href",f).get(l+(r.href||""));if(y){for(var w=0;w<y.length;w++)if(d=y[w],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(w,1);break t}}d=f.createElement(l),On(d,l,r),f.head.appendChild(d);break;case"meta":if(y=rg("meta","content",f).get(l+(r.content||""))){for(w=0;w<y.length;w++)if(d=y[w],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(w,1);break t}}d=f.createElement(l),On(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[mn]=t,pn(d),l=d}t.stateNode=l}else sg(f,t.type,t.stateNode);else t.stateNode=ag(f,l,t.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?sg(f,t.type,t.stateNode):ag(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Gf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Jn(i,t),Qn(t),l&512&&(Mn||r===null||qi(r,r.return)),r!==null&&l&4&&Gf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Jn(i,t),Qn(t),l&512&&(Mn||r===null||qi(r,r.return)),t.flags&32){f=t.stateNode;try{Gn(f,"")}catch(rt){qt(t,t.return,rt)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Gf(t,f,r!==null?r.memoizedProps:f)),l&1024&&(kf=!0);break;case 6:if(Jn(i,t),Qn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(rt){qt(t,t.return,rt)}}break;case 3:if(_c=null,f=wi,wi=gc(i.containerInfo),Jn(i,t),wi=f,Qn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ss(i.containerInfo)}catch(rt){qt(t,t.return,rt)}kf&&(kf=!1,s1(t));break;case 4:l=wi,wi=gc(t.stateNode.containerInfo),Jn(i,t),Qn(t),wi=l;break;case 12:Jn(i,t),Qn(t);break;case 31:Jn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 13:Jn(i,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ac=ft()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 22:f=t.memoizedState!==null;var Z=r!==null&&r.memoizedState!==null,he=ha,Ae=Mn;if(ha=he||f,Mn=Ae||Z,Jn(i,t),Mn=Ae,ha=he,Qn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||Z||ha||Mn||Cr(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){Z=r=i;try{if(d=Z.stateNode,f)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=Z.stateNode;var we=Z.memoizedProps.style,me=we!=null&&we.hasOwnProperty("display")?we.display:null;w.style.display=me==null||typeof me=="boolean"?"":(""+me).trim()}}catch(rt){qt(Z,Z.return,rt)}}}else if(i.tag===6){if(r===null){Z=i;try{Z.stateNode.nodeValue=f?"":Z.memoizedProps}catch(rt){qt(Z,Z.return,rt)}}}else if(i.tag===18){if(r===null){Z=i;try{var Me=Z.stateNode;f?j1(Me,!0):j1(Z.stateNode,!1)}catch(rt){qt(Z,Z.return,rt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,nc(t,r))));break;case 19:Jn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 30:break;case 21:break;default:Jn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(Jp(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=Zf(t);tc(t,d,f);break;case 5:var y=r.stateNode;r.flags&32&&(Gn(y,""),r.flags&=-33);var w=Zf(t);tc(t,w,y);break;case 3:case 4:var Z=r.stateNode.containerInfo,he=Zf(t);qf(t,he,Z);break;default:throw Error(a(161))}}catch(Ae){qt(t,t.return,Ae)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function s1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;s1(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function pa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)e1(t,i.alternate,i),i=i.sibling}function Cr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Cr(i);break;case 1:qi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&jp(i,i.return,r),Cr(i);break;case 27:Po(i.stateNode);case 26:case 5:qi(i,i.return),Cr(i);break;case 22:i.memoizedState===null&&Cr(i);break;case 30:Cr(i);break;default:Cr(i)}t=t.sibling}}function ga(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:ga(f,d,r),Ao(4,d);break;case 1:if(ga(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(he){qt(l,l.return,he)}if(l=d,f=l.updateQueue,f!==null){var w=l.stateNode;try{var Z=f.shared.hiddenCallbacks;if(Z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Z.length;f++)Fm(Z[f],w)}catch(he){qt(l,l.return,he)}}r&&y&64&&Yp(d),To(d,d.return);break;case 27:Qp(d);case 26:case 5:ga(f,d,r),r&&l===null&&y&4&&Kp(d),To(d,d.return);break;case 12:ga(f,d,r);break;case 31:ga(f,d,r),r&&y&4&&i1(f,d);break;case 13:ga(f,d,r),r&&y&4&&a1(f,d);break;case 22:d.memoizedState===null&&ga(f,d,r),To(d,d.return);break;case 30:break;default:ga(f,d,r)}i=i.sibling}}function Xf(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&fo(r))}function Wf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fo(t))}function Li(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)o1(t,i,r,l),i=i.sibling}function o1(t,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Li(t,i,r,l),f&2048&&Ao(9,i);break;case 1:Li(t,i,r,l);break;case 3:Li(t,i,r,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fo(t)));break;case 12:if(f&2048){Li(t,i,r,l),t=i.stateNode;try{var d=i.memoizedProps,y=d.id,w=d.onPostCommit;typeof w=="function"&&w(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Z){qt(i,i.return,Z)}}else Li(t,i,r,l);break;case 31:Li(t,i,r,l);break;case 13:Li(t,i,r,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Li(t,i,r,l):Ro(t,i):d._visibility&2?Li(t,i,r,l):(d._visibility|=2,us(t,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Xf(y,i);break;case 24:Li(t,i,r,l),f&2048&&Wf(i.alternate,i);break;default:Li(t,i,r,l)}}function us(t,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,y=i,w=r,Z=l,he=y.flags;switch(y.tag){case 0:case 11:case 15:us(d,y,w,Z,f),Ao(8,y);break;case 23:break;case 22:var Ae=y.stateNode;y.memoizedState!==null?Ae._visibility&2?us(d,y,w,Z,f):Ro(d,y):(Ae._visibility|=2,us(d,y,w,Z,f)),f&&he&2048&&Xf(y.alternate,y);break;case 24:us(d,y,w,Z,f),f&&he&2048&&Wf(y.alternate,y);break;default:us(d,y,w,Z,f)}i=i.sibling}}function Ro(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,f=l.flags;switch(l.tag){case 22:Ro(r,l),f&2048&&Xf(l.alternate,l);break;case 24:Ro(r,l),f&2048&&Wf(l.alternate,l);break;default:Ro(r,l)}i=i.sibling}}var Co=8192;function fs(t,i,r){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)l1(t,i,r),t=t.sibling}function l1(t,i,r){switch(t.tag){case 26:fs(t,i,r),t.flags&Co&&t.memoizedState!==null&&l3(r,wi,t.memoizedState,t.memoizedProps);break;case 5:fs(t,i,r);break;case 3:case 4:var l=wi;wi=gc(t.stateNode.containerInfo),fs(t,i,r),wi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Co,Co=16777216,fs(t,i,r),Co=l):fs(t,i,r));break;default:fs(t,i,r)}}function c1(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function wo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Rn=l,f1(l,t)}c1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)u1(t),t=t.sibling}function u1(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ic(t)):wo(t);break;default:wo(t)}}function ic(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Rn=l,f1(l,t)}c1(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Za(8,i,i.return),ic(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,ic(i));break;default:ic(i)}t=t.sibling}}function f1(t,i){for(;Rn!==null;){var r=Rn;switch(r.tag){case 0:case 11:case 15:Za(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Rn=l;else e:for(r=t;Rn!==null;){l=Rn;var f=l.sibling,d=l.return;if(t1(l),l===r){Rn=null;break e}if(f!==null){f.return=d,Rn=f;break e}Rn=d}}}var Ex={getCacheForType:function(t){var i=Nn(vn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return Nn(vn).controller.signal}},bx=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Qt=null,wt=null,Nt=0,Zt=0,li=null,qa=!1,ds=!1,Yf=!1,va=0,fn=0,ka=0,wr=0,jf=0,ci=0,hs=0,Lo=null,$n=null,Kf=!1,ac=0,d1=0,rc=1/0,sc=null,Xa=null,En=0,Wa=null,ms=null,_a=0,Jf=0,Qf=null,h1=null,Do=0,$f=null;function ui(){return(Gt&2)!==0&&Nt!==0?Nt&-Nt:B.T!==null?rd():Qs()}function m1(){if(ci===0)if((Nt&536870912)===0||Ot){var t=De;De<<=1,(De&3932160)===0&&(De=262144),ci=t}else ci=536870912;return t=si.current,t!==null&&(t.flags|=32),ci}function ei(t,i,r){(t===Qt&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)&&(ps(t,0),Ya(t,Nt,ci,!1)),it(t,r),((Gt&2)===0||t!==Qt)&&(t===Qt&&((Gt&2)===0&&(wr|=r),fn===4&&Ya(t,Nt,ci,!1)),ki(t))}function p1(t,i,r){if((Gt&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Ce(t,i),f=l?Rx(t,i):td(t,i,!0),d=l;do{if(f===0){ds&&!l&&Ya(t,i,0,!1);break}else{if(r=t.current.alternate,d&&!Ax(r)){f=td(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var w=t;f=Lo;var Z=w.current.memoizedState.isDehydrated;if(Z&&(ps(w,y).flags|=256),y=td(w,y,!1),y!==2){if(Yf&&!Z){w.errorRecoveryDisabledLanes|=d,wr|=d,f=4;break e}d=$n,$n=f,d!==null&&($n===null?$n=d:$n.push.apply($n,d))}f=y}if(d=!1,f!==2)continue}}if(f===1){ps(t,0),Ya(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ya(l,i,ci,!qa);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=ac+300-ft(),10<f)){if(Ya(l,i,ci,!qa),ue(l,0,!0)!==0)break e;_a=i,l.timeoutHandle=X1(g1.bind(null,l,r,$n,sc,Kf,i,ci,wr,hs,qa,d,"Throttled",-0,0),f);break e}g1(l,r,$n,sc,Kf,i,ci,wr,hs,qa,d,null,-0,0)}}break}while(!0);ki(t)}function g1(t,i,r,l,f,d,y,w,Z,he,Ae,we,me,Me){if(t.timeoutHandle=-1,we=i.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vi},l1(i,d,we);var rt=(d&62914560)===d?ac-ft():(d&4194048)===d?d1-ft():0;if(rt=c3(we,rt),rt!==null){_a=d,t.cancelPendingCommit=rt(b1.bind(null,t,i,d,r,l,f,y,w,Z,Ae,we,null,me,Me)),Ya(t,d,y,!he);return}}b1(t,i,d,r,l,f,y,w,Z)}function Ax(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!ai(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ya(t,i,r,l){i&=~jf,i&=~wr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Xe(f),y=1<<d;l[d]=-1,f&=~y}r!==0&&Dt(t,r,i)}function oc(){return(Gt&6)===0?(No(0),!1):!0}function ed(){if(wt!==null){if(Zt===0)var t=wt.return;else t=wt,oa=Mr=null,gf(t),rs=null,mo=0,t=wt;for(;t!==null;)Wp(t.alternate,t),t=t.return;wt=null}}function ps(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,kx(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),_a=0,ed(),Qt=t,wt=r=ra(t.current,null),Nt=i,Zt=0,li=null,qa=!1,ds=Ce(t,i),Yf=!1,hs=ci=jf=wr=ka=fn=0,$n=Lo=null,Kf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Xe(l),d=1<<f;i|=t[f],l&=~d}return va=i,Cl(),r}function v1(t,i){Mt=null,B.H=yo,i===as||i===zl?(i=Um(),Zt=3):i===af?(i=Um(),Zt=4):Zt=i===Nf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,li=i,wt===null&&(fn=1,Kl(t,xi(i,t.current)))}function _1(){var t=si.current;return t===null?!0:(Nt&4194048)===Nt?Ei===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?t===Ei:!1}function x1(){var t=B.H;return B.H=yo,t===null?yo:t}function M1(){var t=B.A;return B.A=Ex,t}function lc(){fn=4,qa||(Nt&4194048)!==Nt&&si.current!==null||(ds=!0),(ka&134217727)===0&&(wr&134217727)===0||Qt===null||Ya(Qt,Nt,ci,!1)}function td(t,i,r){var l=Gt;Gt|=2;var f=x1(),d=M1();(Qt!==t||Nt!==i)&&(sc=null,ps(t,i)),i=!1;var y=fn;e:do try{if(Zt!==0&&wt!==null){var w=wt,Z=li;switch(Zt){case 8:ed(),y=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(i=!0);var he=Zt;if(Zt=0,li=null,gs(t,w,Z,he),r&&ds){y=0;break e}break;default:he=Zt,Zt=0,li=null,gs(t,w,Z,he)}}Tx(),y=fn;break}catch(Ae){v1(t,Ae)}while(!0);return i&&t.shellSuspendCounter++,oa=Mr=null,Gt=l,B.H=f,B.A=d,wt===null&&(Qt=null,Nt=0,Cl()),y}function Tx(){for(;wt!==null;)S1(wt)}function Rx(t,i){var r=Gt;Gt|=2;var l=x1(),f=M1();Qt!==t||Nt!==i?(sc=null,rc=ft()+500,ps(t,i)):ds=Ce(t,i);e:do try{if(Zt!==0&&wt!==null){i=wt;var d=li;t:switch(Zt){case 1:Zt=0,li=null,gs(t,i,d,1);break;case 2:case 9:if(Dm(d)){Zt=0,li=null,y1(i);break}i=function(){Zt!==2&&Zt!==9||Qt!==t||(Zt=7),ki(t)},d.then(i,i);break e;case 3:Zt=7;break e;case 4:Zt=5;break e;case 7:Dm(d)?(Zt=0,li=null,y1(i)):(Zt=0,li=null,gs(t,i,d,7));break;case 5:var y=null;switch(wt.tag){case 26:y=wt.memoizedState;case 5:case 27:var w=wt;if(y?og(y):w.stateNode.complete){Zt=0,li=null;var Z=w.sibling;if(Z!==null)wt=Z;else{var he=w.return;he!==null?(wt=he,cc(he)):wt=null}break t}}Zt=0,li=null,gs(t,i,d,5);break;case 6:Zt=0,li=null,gs(t,i,d,6);break;case 8:ed(),fn=6;break e;default:throw Error(a(462))}}Cx();break}catch(Ae){v1(t,Ae)}while(!0);return oa=Mr=null,B.H=l,B.A=f,Gt=r,wt!==null?0:(Qt=null,Nt=0,Cl(),fn)}function Cx(){for(;wt!==null&&!ht();)S1(wt)}function S1(t){var i=kp(t.alternate,t,va);t.memoizedProps=t.pendingProps,i===null?cc(t):wt=i}function y1(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=Hp(r,i,i.pendingProps,i.type,void 0,Nt);break;case 11:i=Hp(r,i,i.pendingProps,i.type.render,i.ref,Nt);break;case 5:gf(i);default:Wp(r,i),i=wt=Mm(i,va),i=kp(r,i,va)}t.memoizedProps=t.pendingProps,i===null?cc(t):wt=i}function gs(t,i,r,l){oa=Mr=null,gf(i),rs=null,mo=0;var f=i.return;try{if(gx(t,f,i,r,Nt)){fn=1,Kl(t,xi(r,t.current)),wt=null;return}}catch(d){if(f!==null)throw wt=f,d;fn=1,Kl(t,xi(r,t.current)),wt=null;return}i.flags&32768?(Ot||l===1?t=!0:ds||(Nt&536870912)!==0?t=!1:(qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=si.current,l!==null&&l.tag===13&&(l.flags|=16384))),E1(i,t)):cc(i)}function cc(t){var i=t;do{if((i.flags&32768)!==0){E1(i,qa);return}t=i.return;var r=xx(i.alternate,i,va);if(r!==null){wt=r;return}if(i=i.sibling,i!==null){wt=i;return}wt=i=t}while(i!==null);fn===0&&(fn=5)}function E1(t,i){do{var r=Mx(t.alternate,t);if(r!==null){r.flags&=32767,wt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){wt=t;return}wt=t=r}while(t!==null);fn=6,wt=null}function b1(t,i,r,l,f,d,y,w,Z){t.cancelPendingCommit=null;do uc();while(En!==0);if((Gt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Gu,Bt(t,r,d,y,w,Z),t===Qt&&(wt=Qt=null,Nt=0),ms=i,Wa=t,_a=r,Jf=d,Qf=f,h1=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Nx(te,function(){return w1(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=G.p,G.p=2,y=Gt,Gt|=4;try{Sx(t,i,r)}finally{Gt=y,G.p=f,B.T=l}}En=1,A1(),T1(),R1()}}function A1(){if(En===1){En=0;var t=Wa,i=ms,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=G.p;G.p=2;var f=Gt;Gt|=4;try{r1(i,t);var d=hd,y=fm(t.containerInfo),w=d.focusedElem,Z=d.selectionRange;if(y!==w&&w&&w.ownerDocument&&um(w.ownerDocument.documentElement,w)){if(Z!==null&&Fu(w)){var he=Z.start,Ae=Z.end;if(Ae===void 0&&(Ae=he),"selectionStart"in w)w.selectionStart=he,w.selectionEnd=Math.min(Ae,w.value.length);else{var we=w.ownerDocument||document,me=we&&we.defaultView||window;if(me.getSelection){var Me=me.getSelection(),rt=w.textContent.length,mt=Math.min(Z.start,rt),Kt=Z.end===void 0?mt:Math.min(Z.end,rt);!Me.extend&&mt>Kt&&(y=Kt,Kt=mt,mt=y);var ne=cm(w,mt),j=cm(w,Kt);if(ne&&j&&(Me.rangeCount!==1||Me.anchorNode!==ne.node||Me.anchorOffset!==ne.offset||Me.focusNode!==j.node||Me.focusOffset!==j.offset)){var de=we.createRange();de.setStart(ne.node,ne.offset),Me.removeAllRanges(),mt>Kt?(Me.addRange(de),Me.extend(j.node,j.offset)):(de.setEnd(j.node,j.offset),Me.addRange(de))}}}}for(we=[],Me=w;Me=Me.parentNode;)Me.nodeType===1&&we.push({element:Me,left:Me.scrollLeft,top:Me.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<we.length;w++){var Re=we[w];Re.element.scrollLeft=Re.left,Re.element.scrollTop=Re.top}}yc=!!dd,hd=dd=null}finally{Gt=f,G.p=l,B.T=r}}t.current=i,En=2}}function T1(){if(En===2){En=0;var t=Wa,i=ms,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=G.p;G.p=2;var f=Gt;Gt|=4;try{e1(t,i.alternate,i)}finally{Gt=f,G.p=l,B.T=r}}En=3}}function R1(){if(En===4||En===3){En=0,X();var t=Wa,i=ms,r=_a,l=h1;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,ms=Wa=null,C1(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Xa=null),Js(r),i=i.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Se,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=G.p,G.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<l.length;y++){var w=l[y];d(w.value,{componentStack:w.stack})}}finally{B.T=i,G.p=f}}(_a&3)!==0&&uc(),ki(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===$f?Do++:(Do=0,$f=t):Do=0,No(0)}}function C1(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,fo(i)))}function uc(){return A1(),T1(),R1(),w1()}function w1(){if(En!==5)return!1;var t=Wa,i=Jf;Jf=0;var r=Js(_a),l=B.T,f=G.p;try{G.p=32>r?32:r,B.T=null,r=Qf,Qf=null;var d=Wa,y=_a;if(En=0,ms=Wa=null,_a=0,(Gt&6)!==0)throw Error(a(331));var w=Gt;if(Gt|=4,u1(d.current),o1(d,d.current,y,r),Gt=w,No(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Se,d)}catch{}return!0}finally{G.p=f,B.T=l,C1(t,i)}}function L1(t,i,r){i=xi(r,i),i=Df(t.stateNode,i,2),t=Ba(t,i,2),t!==null&&(it(t,2),ki(t))}function qt(t,i,r){if(t.tag===3)L1(t,t,r);else for(;i!==null;){if(i.tag===3){L1(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))){t=xi(r,t),r=Dp(2),l=Ba(i,r,2),l!==null&&(Np(r,l,i,t),it(l,2),ki(l));break}}i=i.return}}function nd(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new bx;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Yf=!0,f.add(r),t=wx.bind(null,t,i,r),i.then(t,t))}function wx(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Qt===t&&(Nt&r)===r&&(fn===4||fn===3&&(Nt&62914560)===Nt&&300>ft()-ac?(Gt&2)===0&&ps(t,0):jf|=r,hs===Nt&&(hs=0)),ki(t)}function D1(t,i){i===0&&(i=xe()),t=vr(t,i),t!==null&&(it(t,i),ki(t))}function Lx(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),D1(t,r)}function Dx(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),D1(t,r)}function Nx(t,i){return nt(t,i)}var fc=null,vs=null,id=!1,dc=!1,ad=!1,ja=0;function ki(t){t!==vs&&t.next===null&&(vs===null?fc=vs=t:vs=vs.next=t),dc=!0,id||(id=!0,Ox())}function No(t,i){if(!ad&&dc){ad=!0;do for(var r=!1,l=fc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var y=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-Xe(42|t)+1)-1,d&=f&~(y&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,P1(l,d))}else d=Nt,d=ue(l,l===Qt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ce(l,d)||(r=!0,P1(l,d));l=l.next}while(r);ad=!1}}function Ux(){N1()}function N1(){dc=id=!1;var t=0;ja!==0&&qx()&&(t=ja);for(var i=ft(),r=null,l=fc;l!==null;){var f=l.next,d=U1(l,i);d===0?(l.next=null,r===null?fc=f:r.next=f,f===null&&(vs=r)):(r=l,(t!==0||(d&3)!==0)&&(dc=!0)),l=f}En!==0&&En!==5||No(t),ja!==0&&(ja=0)}function U1(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Xe(d),w=1<<y,Z=f[y];Z===-1?((w&r)===0||(w&l)!==0)&&(f[y]=Ie(w,i)):Z<=i&&(t.expiredLanes|=w),d&=~w}if(i=Qt,r=Nt,r=ue(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ct(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ce(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&ct(l),Js(r)){case 2:case 8:r=T;break;case 32:r=te;break;case 268435456:r=ye;break;default:r=te}return l=O1.bind(null,t),r=nt(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&ct(l),t.callbackPriority=2,t.callbackNode=null,2}function O1(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(uc()&&t.callbackNode!==r)return null;var l=Nt;return l=ue(t,t===Qt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(p1(t,l,i),U1(t,ft()),t.callbackNode!=null&&t.callbackNode===r?O1.bind(null,t):null)}function P1(t,i){if(uc())return null;p1(t,i,!0)}function Ox(){Xx(function(){(Gt&6)!==0?nt(z,Ux):N1()})}function rd(){if(ja===0){var t=ns;t===0&&(t=$,$<<=1,($&261888)===0&&($=256)),ja=t}return ja}function z1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ri(""+t)}function F1(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function Px(t,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=z1((f[Ln]||null).action),y=l.submitter;y&&(i=(i=y[Ln]||null)?z1(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var w=new bl("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ja!==0){var Z=y?F1(f,y):new FormData(f);Af(r,{pending:!0,data:Z,method:f.method,action:d},null,Z)}}else typeof d=="function"&&(w.preventDefault(),Z=y?F1(f,y):new FormData(f),Af(r,{pending:!0,data:Z,method:f.method,action:d},d,Z))},currentTarget:f}]})}}for(var sd=0;sd<Vu.length;sd++){var od=Vu[sd],zx=od.toLowerCase(),Fx=od[0].toUpperCase()+od.slice(1);Ci(zx,"on"+Fx)}Ci(mm,"onAnimationEnd"),Ci(pm,"onAnimationIteration"),Ci(gm,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci($_,"onTransitionRun"),Ci(ex,"onTransitionStart"),Ci(tx,"onTransitionCancel"),Ci(vm,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function I1(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var w=l[y],Z=w.instance,he=w.currentTarget;if(w=w.listener,Z!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=he;try{d(f)}catch(Ae){Rl(Ae)}f.currentTarget=null,d=Z}else for(y=0;y<l.length;y++){if(w=l[y],Z=w.instance,he=w.currentTarget,w=w.listener,Z!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=he;try{d(f)}catch(Ae){Rl(Ae)}f.currentTarget=null,d=Z}}}}function Lt(t,i){var r=i[fr];r===void 0&&(r=i[fr]=new Set);var l=t+"__bubble";r.has(l)||(H1(i,t,2,!1),r.add(l))}function ld(t,i,r){var l=0;i&&(l|=4),H1(r,t,l,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function cd(t){if(!t[hc]){t[hc]=!0,Ml.forEach(function(r){r!=="selectionchange"&&(Ix.has(r)||ld(r,!1,t),ld(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[hc]||(i[hc]=!0,ld("selectionchange",!1,i))}}function H1(t,i,r,l){switch(mg(i)){case 2:var f=d3;break;case 8:f=h3;break;default:f=bd}r=f.bind(null,i,r,t),f=void 0,!Cu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function ud(t,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var w=l.stateNode.containerInfo;if(w===f)break;if(y===4)for(y=l.return;y!==null;){var Z=y.tag;if((Z===3||Z===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;w!==null;){if(y=na(w),y===null)return;if(Z=y.tag,Z===5||Z===6||Z===26||Z===27){l=d=y;continue e}w=w.parentNode}}l=l.return}q0(function(){var he=d,Ae=Tu(r),we=[];e:{var me=_m.get(t);if(me!==void 0){var Me=bl,rt=t;switch(t){case"keypress":if(yl(r)===0)break e;case"keydown":case"keyup":Me=D_;break;case"focusin":rt="focus",Me=Nu;break;case"focusout":rt="blur",Me=Nu;break;case"beforeblur":case"afterblur":Me=Nu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Me=W0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Me=x_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Me=O_;break;case mm:case pm:case gm:Me=y_;break;case vm:Me=z_;break;case"scroll":case"scrollend":Me=v_;break;case"wheel":Me=I_;break;case"copy":case"cut":case"paste":Me=b_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Me=j0;break;case"toggle":case"beforetoggle":Me=B_}var mt=(i&4)!==0,Kt=!mt&&(t==="scroll"||t==="scrollend"),ne=mt?me!==null?me+"Capture":null:me;mt=[];for(var j=he,de;j!==null;){var Re=j;if(de=Re.stateNode,Re=Re.tag,Re!==5&&Re!==26&&Re!==27||de===null||ne===null||(Re=eo(j,ne),Re!=null&&mt.push(Oo(j,Re,de))),Kt)break;j=j.return}0<mt.length&&(me=new Me(me,rt,null,r,Ae),we.push({event:me,listeners:mt}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Me=t==="mouseout"||t==="pointerout",me&&r!==Au&&(rt=r.relatedTarget||r.fromElement)&&(na(rt)||rt[Yn]))break e;if((Me||me)&&(me=Ae.window===Ae?Ae:(me=Ae.ownerDocument)?me.defaultView||me.parentWindow:window,Me?(rt=r.relatedTarget||r.toElement,Me=he,rt=rt?na(rt):null,rt!==null&&(Kt=c(rt),mt=rt.tag,rt!==Kt||mt!==5&&mt!==27&&mt!==6)&&(rt=null)):(Me=null,rt=he),Me!==rt)){if(mt=W0,Re="onMouseLeave",ne="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(mt=j0,Re="onPointerLeave",ne="onPointerEnter",j="pointer"),Kt=Me==null?me:hr(Me),de=rt==null?me:hr(rt),me=new mt(Re,j+"leave",Me,r,Ae),me.target=Kt,me.relatedTarget=de,Re=null,na(Ae)===he&&(mt=new mt(ne,j+"enter",rt,r,Ae),mt.target=de,mt.relatedTarget=Kt,Re=mt),Kt=Re,Me&&rt)t:{for(mt=Hx,ne=Me,j=rt,de=0,Re=ne;Re;Re=mt(Re))de++;Re=0;for(var dt=j;dt;dt=mt(dt))Re++;for(;0<de-Re;)ne=mt(ne),de--;for(;0<Re-de;)j=mt(j),Re--;for(;de--;){if(ne===j||j!==null&&ne===j.alternate){mt=ne;break t}ne=mt(ne),j=mt(j)}mt=null}else mt=null;Me!==null&&B1(we,me,Me,mt,!1),rt!==null&&Kt!==null&&B1(we,Kt,rt,mt,!0)}}e:{if(me=he?hr(he):window,Me=me.nodeName&&me.nodeName.toLowerCase(),Me==="select"||Me==="input"&&me.type==="file")var It=im;else if(tm(me))if(am)It=K_;else{It=Y_;var lt=W_}else Me=me.nodeName,!Me||Me.toLowerCase()!=="input"||me.type!=="checkbox"&&me.type!=="radio"?he&&gi(he.elementType)&&(It=im):It=j_;if(It&&(It=It(t,he))){nm(we,It,r,Ae);break e}lt&&lt(t,me,he),t==="focusout"&&he&&me.type==="number"&&he.memoizedProps.value!=null&&yn(me,"number",me.value)}switch(lt=he?hr(he):window,t){case"focusin":(tm(lt)||lt.contentEditable==="true")&&(Yr=lt,Iu=he,lo=null);break;case"focusout":lo=Iu=Yr=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,dm(we,r,Ae);break;case"selectionchange":if(Q_)break;case"keydown":case"keyup":dm(we,r,Ae)}var St;if(Ou)e:{switch(t){case"compositionstart":var Ut="onCompositionStart";break e;case"compositionend":Ut="onCompositionEnd";break e;case"compositionupdate":Ut="onCompositionUpdate";break e}Ut=void 0}else Wr?$0(t,r)&&(Ut="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Ut="onCompositionStart");Ut&&(K0&&r.locale!=="ko"&&(Wr||Ut!=="onCompositionStart"?Ut==="onCompositionEnd"&&Wr&&(St=k0()):(Ua=Ae,wu="value"in Ua?Ua.value:Ua.textContent,Wr=!0)),lt=mc(he,Ut),0<lt.length&&(Ut=new Y0(Ut,t,null,r,Ae),we.push({event:Ut,listeners:lt}),St?Ut.data=St:(St=em(r),St!==null&&(Ut.data=St)))),(St=G_?Z_(t,r):q_(t,r))&&(Ut=mc(he,"onBeforeInput"),0<Ut.length&&(lt=new Y0("onBeforeInput","beforeinput",null,r,Ae),we.push({event:lt,listeners:Ut}),lt.data=St)),Px(we,t,he,r,Ae)}I1(we,i)})}function Oo(t,i,r){return{instance:t,listener:i,currentTarget:r}}function mc(t,i){for(var r=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=eo(t,r),f!=null&&l.unshift(Oo(t,f,d)),f=eo(t,i),f!=null&&l.push(Oo(t,f,d))),t.tag===3)return l;t=t.return}return[]}function Hx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function B1(t,i,r,l,f){for(var d=i._reactName,y=[];r!==null&&r!==l;){var w=r,Z=w.alternate,he=w.stateNode;if(w=w.tag,Z!==null&&Z===l)break;w!==5&&w!==26&&w!==27||he===null||(Z=he,f?(he=eo(r,d),he!=null&&y.unshift(Oo(r,he,Z))):f||(he=eo(r,d),he!=null&&y.push(Oo(r,he,Z)))),r=r.return}y.length!==0&&t.push({event:i,listeners:y})}var Bx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function V1(t){return(typeof t=="string"?t:""+t).replace(Bx,`
`).replace(Vx,"")}function G1(t,i){return i=V1(i),V1(t)===i}function jt(t,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Gn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Gn(t,""+l);break;case"className":We(t,"class",l);break;case"tabIndex":We(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,r,l);break;case"style":rn(t,l,d);break;case"data":if(i!=="object"){We(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Ri(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&jt(t,i,"name",f.name,f,null),jt(t,i,"formEncType",f.formEncType,f,null),jt(t,i,"formMethod",f.formMethod,f,null),jt(t,i,"formTarget",f.formTarget,f,null)):(jt(t,i,"encType",f.encType,f,null),jt(t,i,"method",f.method,f,null),jt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Ri(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=vi);break;case"onScroll":l!=null&&Lt("scroll",t);break;case"onScrollEnd":l!=null&&Lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Ri(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":Lt("beforetoggle",t),Lt("toggle",t),et(t,"popover",l);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":et(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Wt.get(r)||r,et(t,r,l))}}function fd(t,i,r,l,f,d){switch(r){case"style":rn(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?Gn(t,l):(typeof l=="number"||typeof l=="bigint")&&Gn(t,""+l);break;case"onScroll":l!=null&&Lt("scroll",t);break;case"onScrollEnd":l!=null&&Lt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$s.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=t[Ln]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,f);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):et(t,r,l)}}}function On(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",t),Lt("load",t);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var y=r[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:jt(t,i,d,y,r,null)}}f&&jt(t,i,"srcSet",r.srcSet,r,null),l&&jt(t,i,"src",r.src,r,null);return;case"input":Lt("invalid",t);var w=d=y=f=null,Z=null,he=null;for(l in r)if(r.hasOwnProperty(l)){var Ae=r[l];if(Ae!=null)switch(l){case"name":f=Ae;break;case"type":y=Ae;break;case"checked":Z=Ae;break;case"defaultChecked":he=Ae;break;case"value":d=Ae;break;case"defaultValue":w=Ae;break;case"children":case"dangerouslySetInnerHTML":if(Ae!=null)throw Error(a(137,i));break;default:jt(t,i,l,Ae,r,null)}}tt(t,d,w,Z,he,y,f,!1);return;case"select":Lt("invalid",t),l=y=d=null;for(f in r)if(r.hasOwnProperty(f)&&(w=r[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":y=w;break;case"multiple":l=w;default:jt(t,i,f,w,r,null)}i=d,r=y,t.multiple=!!l,i!=null?Et(t,!!l,i,!1):r!=null&&Et(t,!!l,r,!0);return;case"textarea":Lt("invalid",t),d=f=l=null;for(y in r)if(r.hasOwnProperty(y)&&(w=r[y],w!=null))switch(y){case"value":l=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:jt(t,i,y,w,r,null)}ii(t,l,f,d);return;case"option":for(Z in r)if(r.hasOwnProperty(Z)&&(l=r[Z],l!=null))switch(Z){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:jt(t,i,Z,l,r,null)}return;case"dialog":Lt("beforetoggle",t),Lt("toggle",t),Lt("cancel",t),Lt("close",t);break;case"iframe":case"object":Lt("load",t);break;case"video":case"audio":for(l=0;l<Uo.length;l++)Lt(Uo[l],t);break;case"image":Lt("error",t),Lt("load",t);break;case"details":Lt("toggle",t);break;case"embed":case"source":case"link":Lt("error",t),Lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(he in r)if(r.hasOwnProperty(he)&&(l=r[he],l!=null))switch(he){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:jt(t,i,he,l,r,null)}return;default:if(gi(i)){for(Ae in r)r.hasOwnProperty(Ae)&&(l=r[Ae],l!==void 0&&fd(t,i,Ae,l,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(l=r[w],l!=null&&jt(t,i,w,l,r,null))}function Gx(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,y=null,w=null,Z=null,he=null,Ae=null;for(Me in r){var we=r[Me];if(r.hasOwnProperty(Me)&&we!=null)switch(Me){case"checked":break;case"value":break;case"defaultValue":Z=we;default:l.hasOwnProperty(Me)||jt(t,i,Me,null,l,we)}}for(var me in l){var Me=l[me];if(we=r[me],l.hasOwnProperty(me)&&(Me!=null||we!=null))switch(me){case"type":d=Me;break;case"name":f=Me;break;case"checked":he=Me;break;case"defaultChecked":Ae=Me;break;case"value":y=Me;break;case"defaultValue":w=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(a(137,i));break;default:Me!==we&&jt(t,i,me,Me,l,we)}}gn(t,y,w,Z,he,Ae,d,f);return;case"select":Me=y=w=me=null;for(d in r)if(Z=r[d],r.hasOwnProperty(d)&&Z!=null)switch(d){case"value":break;case"multiple":Me=Z;default:l.hasOwnProperty(d)||jt(t,i,d,null,l,Z)}for(f in l)if(d=l[f],Z=r[f],l.hasOwnProperty(f)&&(d!=null||Z!=null))switch(f){case"value":me=d;break;case"defaultValue":w=d;break;case"multiple":y=d;default:d!==Z&&jt(t,i,f,d,l,Z)}i=w,r=y,l=Me,me!=null?Et(t,!!r,me,!1):!!l!=!!r&&(i!=null?Et(t,!!r,i,!0):Et(t,!!r,r?[]:"",!1));return;case"textarea":Me=me=null;for(w in r)if(f=r[w],r.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:jt(t,i,w,null,l,f)}for(y in l)if(f=l[y],d=r[y],l.hasOwnProperty(y)&&(f!=null||d!=null))switch(y){case"value":me=f;break;case"defaultValue":Me=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&jt(t,i,y,f,l,d)}Vn(t,me,Me);return;case"option":for(var rt in r)if(me=r[rt],r.hasOwnProperty(rt)&&me!=null&&!l.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:jt(t,i,rt,null,l,me)}for(Z in l)if(me=l[Z],Me=r[Z],l.hasOwnProperty(Z)&&me!==Me&&(me!=null||Me!=null))switch(Z){case"selected":t.selected=me&&typeof me!="function"&&typeof me!="symbol";break;default:jt(t,i,Z,me,l,Me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in r)me=r[mt],r.hasOwnProperty(mt)&&me!=null&&!l.hasOwnProperty(mt)&&jt(t,i,mt,null,l,me);for(he in l)if(me=l[he],Me=r[he],l.hasOwnProperty(he)&&me!==Me&&(me!=null||Me!=null))switch(he){case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:jt(t,i,he,me,l,Me)}return;default:if(gi(i)){for(var Kt in r)me=r[Kt],r.hasOwnProperty(Kt)&&me!==void 0&&!l.hasOwnProperty(Kt)&&fd(t,i,Kt,void 0,l,me);for(Ae in l)me=l[Ae],Me=r[Ae],!l.hasOwnProperty(Ae)||me===Me||me===void 0&&Me===void 0||fd(t,i,Ae,me,l,Me);return}}for(var ne in r)me=r[ne],r.hasOwnProperty(ne)&&me!=null&&!l.hasOwnProperty(ne)&&jt(t,i,ne,null,l,me);for(we in l)me=l[we],Me=r[we],!l.hasOwnProperty(we)||me===Me||me==null&&Me==null||jt(t,i,we,me,l,Me)}function Z1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,y=f.initiatorType,w=f.duration;if(d&&w&&Z1(y)){for(y=0,w=f.responseEnd,l+=1;l<r.length;l++){var Z=r[l],he=Z.startTime;if(he>w)break;var Ae=Z.transferSize,we=Z.initiatorType;Ae&&Z1(we)&&(Z=Z.responseEnd,y+=Ae*(Z<w?1:(w-he)/(Z-he)))}if(--l,i+=8*(d+y)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var dd=null,hd=null;function pc(t){return t.nodeType===9?t:t.ownerDocument}function q1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k1(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function md(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pd=null;function qx(){var t=window.event;return t&&t.type==="popstate"?t===pd?!1:(pd=t,!0):(pd=null,!1)}var X1=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,W1=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof W1<"u"?function(t){return W1.resolve(null).then(t).catch(Wx)}:X1;function Wx(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function Y1(t,i){var r=i,l=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(f),Ss(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Po(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Po(r);for(var d=r.firstChild;d;){var y=d.nextSibling,w=d.nodeName;d[wa]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=y}}else r==="body"&&Po(t.ownerDocument.body);r=f}while(r);Ss(i)}function j1(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function gd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":gd(r),La(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Yx(t,i,r,l){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[wa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function jx(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=bi(t.nextSibling),t===null))return null;return t}function K1(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=bi(t.nextSibling),t===null))return null;return t}function vd(t){return t.data==="$?"||t.data==="$~"}function _d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Kx(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function bi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var xd=null;function J1(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return bi(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function Q1(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function $1(t,i,r){switch(i=pc(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Po(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);La(t)}var Ai=new Map,eg=new Set;function gc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=G.d;G.d={f:Jx,r:Qx,D:$x,C:e3,L:t3,m:n3,X:a3,S:i3,M:r3};function Jx(){var t=xa.f(),i=oc();return t||i}function Qx(t){var i=ia(t);i!==null&&i.tag===5&&i.type==="form"?vp(i):xa.r(t)}var _s=typeof document>"u"?null:document;function tg(t,i,r){var l=_s;if(l&&typeof i=="string"&&i){var f=yt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),eg.has(f)||(eg.add(f),t={rel:t,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),On(i,"link",t),pn(i),l.head.appendChild(i)))}}function $x(t){xa.D(t),tg("dns-prefetch",t,null)}function e3(t,i){xa.C(t,i),tg("preconnect",t,i)}function t3(t,i,r){xa.L(t,i,r);var l=_s;if(l&&t&&i){var f='link[rel="preload"][as="'+yt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+yt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+yt(r.imageSizes)+'"]')):f+='[href="'+yt(t)+'"]';var d=f;switch(i){case"style":d=xs(t);break;case"script":d=Ms(t)}Ai.has(d)||(t=x({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),Ai.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(zo(d))||i==="script"&&l.querySelector(Fo(d))||(i=l.createElement("link"),On(i,"link",t),pn(i),l.head.appendChild(i)))}}function n3(t,i){xa.m(t,i);var r=_s;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ms(t)}if(!Ai.has(d)&&(t=x({rel:"modulepreload",href:t},i),Ai.set(d,t),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Fo(d)))return}l=r.createElement("link"),On(l,"link",t),pn(l),r.head.appendChild(l)}}}function i3(t,i,r){xa.S(t,i,r);var l=_s;if(l&&t){var f=Da(l).hoistableStyles,d=xs(t);i=i||"default";var y=f.get(d);if(!y){var w={loading:0,preload:null};if(y=l.querySelector(zo(d)))w.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},r),(r=Ai.get(d))&&Md(t,r);var Z=y=l.createElement("link");pn(Z),On(Z,"link",t),Z._p=new Promise(function(he,Ae){Z.onload=he,Z.onerror=Ae}),Z.addEventListener("load",function(){w.loading|=1}),Z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,vc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:w},f.set(d,y)}}}function a3(t,i){xa.X(t,i);var r=_s;if(r&&t){var l=Da(r).hoistableScripts,f=Ms(t),d=l.get(f);d||(d=r.querySelector(Fo(f)),d||(t=x({src:t,async:!0},i),(i=Ai.get(f))&&Sd(t,i),d=r.createElement("script"),pn(d),On(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function r3(t,i){xa.M(t,i);var r=_s;if(r&&t){var l=Da(r).hoistableScripts,f=Ms(t),d=l.get(f);d||(d=r.querySelector(Fo(f)),d||(t=x({src:t,async:!0,type:"module"},i),(i=Ai.get(f))&&Sd(t,i),d=r.createElement("script"),pn(d),On(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function ng(t,i,r,l){var f=(f=ke.current)?gc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=xs(r.href),r=Da(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=xs(r.href);var d=Da(f).hoistableStyles,y=d.get(t);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=f.querySelector(zo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Ai.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ai.set(t,r),d||s3(f,t,r,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ms(r),r=Da(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function xs(t){return'href="'+yt(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function ig(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function s3(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),On(i,"link",r),pn(i),t.head.appendChild(i))}function Ms(t){return'[src="'+yt(t)+'"]'}function Fo(t){return"script[async]"+t}function ag(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+yt(r.href)+'"]');if(l)return i.instance=l,pn(l),l;var f=x({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pn(l),On(l,"style",f),vc(l,r.precedence,t),i.instance=l;case"stylesheet":f=xs(r.href);var d=t.querySelector(zo(f));if(d)return i.state.loading|=4,i.instance=d,pn(d),d;l=ig(r),(f=Ai.get(f))&&Md(l,f),d=(t.ownerDocument||t).createElement("link"),pn(d);var y=d;return y._p=new Promise(function(w,Z){y.onload=w,y.onerror=Z}),On(d,"link",l),i.state.loading|=4,vc(d,r.precedence,t),i.instance=d;case"script":return d=Ms(r.src),(f=t.querySelector(Fo(d)))?(i.instance=f,pn(f),f):(l=r,(f=Ai.get(d))&&(l=x({},r),Sd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),pn(f),On(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,vc(l,r.precedence,t));return i.instance}function vc(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,y=0;y<l.length;y++){var w=l[y];if(w.dataset.precedence===i)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Md(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Sd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var _c=null;function rg(t,i,r){if(_c===null){var l=new Map,f=_c=new Map;f.set(r,l)}else f=_c,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var d=r[f];if(!(d[wa]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=t+y;var w=l.get(y);w?w.push(d):l.set(y,[d])}}return l}function sg(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function o3(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function og(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function l3(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=xs(l.href),d=i.querySelector(zo(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=xc.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=d,pn(d);return}d=i.ownerDocument||i,l=ig(l),(f=Ai.get(f))&&Md(l,f),d=d.createElement("link"),pn(d);var y=d;y._p=new Promise(function(w,Z){y.onload=w,y.onerror=Z}),On(d,"link",l),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=xc.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var yd=0;function c3(t,i){return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&yd===0&&(yd=62500*Zx());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>yd?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mc=null;function Sc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mc=new Map,i.forEach(u3,t),Mc=null,xc.call(t))}function u3(t,i){if(!(i.state.loading&4)){var r=Mc.get(t);if(r)var l=r.get(null);else{r=new Map,Mc.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var y=f[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),l=y)}l&&r.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),d=r.get(y)||l,d===l&&r.set(null,f),r.set(y,f),this.count++,l=xc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Io={$$typeof:I,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function f3(t,i,r,l,f,d,y,w,Z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Z,this.incompleteTransitions=new Map}function lg(t,i,r,l,f,d,y,w,Z,he,Ae,we){return t=new f3(t,i,r,y,Z,he,Ae,we,w),i=1,d===!0&&(i|=24),d=ri(3,null,null,i),t.current=d,d.stateNode=t,i=ef(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},rf(d),t}function cg(t){return t?(t=Jr,t):Jr}function ug(t,i,r,l,f,d){f=cg(f),l.context===null?l.context=f:l.pendingContext=f,l=Ha(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Ba(t,l,i),r!==null&&(ei(r,t,i),go(r,t,i))}function fg(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Ed(t,i){fg(t,i),(t=t.alternate)&&fg(t,i)}function dg(t){if(t.tag===13||t.tag===31){var i=vr(t,67108864);i!==null&&ei(i,t,67108864),Ed(t,67108864)}}function hg(t){if(t.tag===13||t.tag===31){var i=ui();i=Ks(i);var r=vr(t,i);r!==null&&ei(r,t,i),Ed(t,i)}}var yc=!0;function d3(t,i,r,l){var f=B.T;B.T=null;var d=G.p;try{G.p=2,bd(t,i,r,l)}finally{G.p=d,B.T=f}}function h3(t,i,r,l){var f=B.T;B.T=null;var d=G.p;try{G.p=8,bd(t,i,r,l)}finally{G.p=d,B.T=f}}function bd(t,i,r,l){if(yc){var f=Ad(l);if(f===null)ud(t,i,l,Ec,r),pg(t,l);else if(p3(f,t,i,r,l))l.stopPropagation();else if(pg(t,l),i&4&&-1<m3.indexOf(t)){for(;f!==null;){var d=ia(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Te(d.pendingLanes);if(y!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var Z=1<<31-Xe(y);w.entanglements[1]|=Z,y&=~Z}ki(d),(Gt&6)===0&&(rc=ft()+500,No(0))}}break;case 31:case 13:w=vr(d,2),w!==null&&ei(w,d,2),oc(),Ed(d,2)}if(d=Ad(l),d===null&&ud(t,i,l,Ec,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else ud(t,i,l,null,r)}}function Ad(t){return t=Tu(t),Td(t)}var Ec=null;function Td(t){if(Ec=null,t=na(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=h(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ec=t,null}function mg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case z:return 2;case T:return 8;case te:case fe:return 32;case ye:return 268435456;default:return 32}default:return 32}}var Rd=!1,Ja=null,Qa=null,$a=null,Ho=new Map,Bo=new Map,er=[],m3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(t,i){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Ho.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(i.pointerId)}}function Vo(t,i,r,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=ia(i),i!==null&&dg(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function p3(t,i,r,l,f){switch(i){case"focusin":return Ja=Vo(Ja,t,i,r,l,f),!0;case"dragenter":return Qa=Vo(Qa,t,i,r,l,f),!0;case"mouseover":return $a=Vo($a,t,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return Ho.set(d,Vo(Ho.get(d)||null,t,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Bo.set(d,Vo(Bo.get(d)||null,t,i,r,l,f)),!0}return!1}function gg(t){var i=na(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,qr(t.priority,function(){hg(r)});return}}else if(i===31){if(i=h(r),i!==null){t.blockedOn=i,qr(t.priority,function(){hg(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Ad(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Au=l,r.target.dispatchEvent(l),Au=null}else return i=ia(r),i!==null&&dg(i),t.blockedOn=r,!1;i.shift()}return!0}function vg(t,i,r){bc(t)&&r.delete(i)}function g3(){Rd=!1,Ja!==null&&bc(Ja)&&(Ja=null),Qa!==null&&bc(Qa)&&(Qa=null),$a!==null&&bc($a)&&($a=null),Ho.forEach(vg),Bo.forEach(vg)}function Ac(t,i){t.blockedOn===i&&(t.blockedOn=null,Rd||(Rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,g3)))}var Tc=null;function _g(t){Tc!==t&&(Tc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Tc===t&&(Tc=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Td(l||r)===null)continue;break}var d=ia(r);d!==null&&(t.splice(i,3),i-=3,Af(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function Ss(t){function i(Z){return Ac(Z,t)}Ja!==null&&Ac(Ja,t),Qa!==null&&Ac(Qa,t),$a!==null&&Ac($a,t),Ho.forEach(i),Bo.forEach(i);for(var r=0;r<er.length;r++){var l=er[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<er.length&&(r=er[0],r.blockedOn===null);)gg(r),r.blockedOn===null&&er.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],y=f[Ln]||null;if(typeof d=="function")y||_g(r);else if(y){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,y=d[Ln]||null)w=y.formAction;else if(Td(f)!==null)continue}else w=y.action;typeof w=="function"?r[l+1]=w:(r.splice(l,3),l-=3),_g(r)}}}function xg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Cd(t){this._internalRoot=t}Rc.prototype.render=Cd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=ui();ug(r,l,t,i,null,null)},Rc.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ug(t.current,2,null,t,null,null),oc(),i[Yn]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Qs();t={blockedOn:null,target:t,priority:i};for(var r=0;r<er.length&&i!==0&&i<er[r].priority;r++);er.splice(r,0,t),r===0&&gg(t)}};var Mg=e.version;if(Mg!=="19.2.0")throw Error(a(527,Mg,"19.2.0"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var v3={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{Se=Cc.inject(v3),Ee=Cc}catch{}}return Zo.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,l="",f=Rp,d=Cp,y=wp;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=lg(t,1,!1,null,null,r,l,null,f,d,y,xg),t[Yn]=i.current,cd(t),new Cd(i)},Zo.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var l=!1,f="",d=Rp,y=Cp,w=wp,Z=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(Z=r.formState)),i=lg(t,1,!0,i,r??null,l,f,Z,d,y,w,xg),i.context=cg(null),r=i.current,l=ui(),l=Ks(l),f=Ha(l),f.callback=null,Ba(r,f,l),r=l,i.current.lanes=r,it(i,r),ki(i),t[Yn]=i.current,cd(t),new Rc(i)},Zo.version="19.2.0",Zo}var Lg;function w3(){if(Lg)return Dd.exports;Lg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Dd.exports=C3(),Dd.exports}var L3=w3();const D3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228,128a100,100,0,0,1-98.66,100H128a99.39,99.39,0,0,1-68.62-27.29,12,12,0,0,1,16.48-17.45,76,76,0,1,0-1.57-109c-.13.13-.25.25-.39.37L54.89,92H72a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V56a12,12,0,0,1,24,0V76.72L57.48,57.06A100,100,0,0,1,228,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),_.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M222,128a94,94,0,0,1-92.74,94H128a93.43,93.43,0,0,1-64.5-25.65,6,6,0,1,1,8.24-8.72A82,82,0,1,0,70,70l-.19.19L39.44,98H72a6,6,0,0,1,0,12H24a6,6,0,0,1-6-6V56a6,6,0,0,1,12,0V90.34L61.63,61.4A94,94,0,0,1,222,128Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,128a92,92,0,0,1-90.77,92H128a91.47,91.47,0,0,1-63.13-25.1,4,4,0,1,1,5.5-5.82A84,84,0,1,0,68.6,68.57l-.13.12L34.3,100H72a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V56a4,4,0,0,1,8,0V94.89l35-32A92,92,0,0,1,220,128Z"}))]]),N3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),_.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),U3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),_.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),O3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M184,80V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H176A8,8,0,0,1,184,80Z",opacity:"0.2"}),_.createElement("path",{d:"M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M222,104a6,6,0,0,1-12,0V54.49l-69.75,69.75a6,6,0,0,1-8.48-8.48L201.51,46H152a6,6,0,0,1,0-12h64a6,6,0,0,1,6,6Zm-38,26a6,6,0,0,0-6,6v72a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h72a6,6,0,0,0,0-12H48A14,14,0,0,0,34,80V208a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V136A6,6,0,0,0,184,130Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,104a4,4,0,0,1-8,0V49.66l-73.16,73.17a4,4,0,0,1-5.66-5.66L206.34,44H152a4,4,0,0,1,0-8h64a4,4,0,0,1,4,4Zm-36,28a4,4,0,0,0-4,4v72a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h72a4,4,0,0,0,0-8H48A12,12,0,0,0,36,80V208a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V136A4,4,0,0,0,184,132Z"}))]]),P3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,48V96a12,12,0,0,1-24,0V77l-35.51,35.52a12,12,0,0,1-17-17L179,60H160a12,12,0,0,1,0-24h48A12,12,0,0,1,220,48ZM95.51,143.51,60,179V160a12,12,0,0,0-24,0v48a12,12,0,0,0,12,12H96a12,12,0,0,0,0-24H77l35.52-35.51a12,12,0,0,0-17-17ZM208,148a12,12,0,0,0-12,12v19l-35.51-35.52a12,12,0,0,0-17,17L179,196H160a12,12,0,0,0,0,24h48a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM77,60H96a12,12,0,0,0,0-24H48A12,12,0,0,0,36,48V96a12,12,0,0,0,24,0V77l35.51,35.52a12,12,0,0,0,17-17Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,48V208H48V48Z",opacity:"0.2"}),_.createElement("path",{d:"M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M109.66,146.34a8,8,0,0,1,0,11.32L83.31,184l18.35,18.34A8,8,0,0,1,96,216H48a8,8,0,0,1-8-8V160a8,8,0,0,1,13.66-5.66L72,172.69l26.34-26.35A8,8,0,0,1,109.66,146.34ZM83.31,72l18.35-18.34A8,8,0,0,0,96,40H48a8,8,0,0,0-8,8V96a8,8,0,0,0,13.66,5.66L72,83.31l26.34,26.35a8,8,0,0,0,11.32-11.32ZM208,40H160a8,8,0,0,0-5.66,13.66L172.69,72,146.34,98.34a8,8,0,0,0,11.32,11.32L184,83.31l18.34,18.35A8,8,0,0,0,216,96V48A8,8,0,0,0,208,40Zm3.06,112.61a8,8,0,0,0-8.72,1.73L184,172.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L172.69,184l-18.35,18.34A8,8,0,0,0,160,216h48a8,8,0,0,0,8-8V160A8,8,0,0,0,211.06,152.61Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M214,48V96a6,6,0,0,1-12,0V62.48l-45.76,45.76a6,6,0,0,1-8.48-8.48L193.52,54H160a6,6,0,0,1,0-12h48A6,6,0,0,1,214,48ZM99.76,147.76,54,193.52V160a6,6,0,0,0-12,0v48a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12H62.48l45.76-45.76a6,6,0,0,0-8.48-8.48ZM208,154a6,6,0,0,0-6,6v33.52l-45.76-45.76a6,6,0,0,0-8.48,8.48L193.52,202H160a6,6,0,0,0,0,12h48a6,6,0,0,0,6-6V160A6,6,0,0,0,208,154ZM62.48,54H96a6,6,0,0,0,0-12H48a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l45.76,45.76a6,6,0,0,0,8.48-8.48Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M212,48V96a4,4,0,0,1-8,0V57.66l-49.17,49.17a4,4,0,0,1-5.66-5.66L198.34,52H160a4,4,0,0,1,0-8h48A4,4,0,0,1,212,48ZM101.17,149.17,52,198.34V160a4,4,0,0,0-8,0v48a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8H57.66l49.17-49.17a4,4,0,0,0-5.66-5.66ZM208,156a4,4,0,0,0-4,4v38.34l-49.17-49.17a4,4,0,0,0-5.66,5.66L198.34,204H160a4,4,0,0,0,0,8h48a4,4,0,0,0,4-4V160A4,4,0,0,0,208,156ZM57.66,52H96a4,4,0,0,0,0-8H48a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l49.17,49.17a4,4,0,0,0,5.66-5.66Z"}))]]),z3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M219.23,159.2a196.66,196.66,0,0,0-18-31.2,196.66,196.66,0,0,0,18-31.2c11.84-26.31,11.69-47.48-.43-59.6s-33.29-12.27-59.6-.43a196.66,196.66,0,0,0-31.2,18,196.66,196.66,0,0,0-31.2-18c-26.31-11.84-47.48-11.69-59.6.43s-12.27,33.29-.43,59.6a196.66,196.66,0,0,0,18,31.2,196.66,196.66,0,0,0-18,31.2c-11.84,26.31-11.69,47.48.43,59.6h0C43.33,224.93,51.78,228,62,228c10,0,21.77-2.92,34.76-8.77a196.66,196.66,0,0,0,31.2-18,196.66,196.66,0,0,0,31.2,18c13,5.85,24.74,8.77,34.76,8.77,10.26,0,18.71-3.07,24.84-9.2h0C230.92,206.68,231.07,185.51,219.23,159.2Zm-17.41-105c5.25,5.26,1.79,26-16,53.78-5.61-6.66-11.65-13.25-18.07-19.67S154.7,75.83,148,70.22C175.82,52.39,196.56,48.93,201.82,54.18ZM171.24,128a288.6,288.6,0,0,1-20.51,22.73A288.6,288.6,0,0,1,128,171.24a288.6,288.6,0,0,1-22.73-20.51A288.6,288.6,0,0,1,84.76,128,298.55,298.55,0,0,1,128,84.76a286.83,286.83,0,0,1,22.73,20.51A286.83,286.83,0,0,1,171.24,128ZM54.18,54.18c1.46-1.45,4.1-2.24,7.75-2.24,9.53,0,25.94,5.39,46,18.28-6.66,5.61-13.25,11.65-19.67,18.07S75.83,101.3,70.22,108C52.39,80.18,48.93,59.44,54.18,54.18Zm0,147.64c-5.25-5.26-1.79-26,16-53.78,5.61,6.66,11.65,13.25,18.07,19.67s13,12.46,19.67,18.07C80.18,203.61,59.44,207.07,54.18,201.82Zm147.64,0c-5.26,5.25-26,1.79-53.78-16,6.66-5.61,13.25-11.65,19.67-18.07s12.46-13,18.07-19.67C203.61,175.82,207.07,196.56,201.82,201.82ZM144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M210.26,210.26c-17.23,17.23-68-5.63-113.46-51.06S28.51,63,45.74,45.74s68,5.63,113.46,51.06S227.49,193,210.26,210.26Z",opacity:"0.2"}),_.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.47,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A302.47,302.47,0,0,0,141.27,70C172.15,49,196.91,43.81,204.55,51.45Zm-153.1,0c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.19,51.45,204.55ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm76.55,64.56c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M193.83,128a195.73,195.73,0,0,0,19.9-33.65c10.74-23.88,11-42.66.8-52.88s-29-9.94-52.88.8A195.73,195.73,0,0,0,128,62.17a195.73,195.73,0,0,0-33.65-19.9c-23.88-10.74-42.66-11-52.88-.8s-9.94,29,.8,52.88A195.73,195.73,0,0,0,62.17,128a195.73,195.73,0,0,0-19.9,33.65c-10.74,23.88-11,42.66-.8,52.88h0c5,5,12,7.47,20.63,7.47,9.1,0,20-2.76,32.25-8.27A195.73,195.73,0,0,0,128,193.83a195.73,195.73,0,0,0,33.65,19.9C173.9,219.24,184.8,222,193.9,222c8.64,0,15.65-2.49,20.63-7.47h0c10.23-10.22,9.94-29-.8-52.88A195.73,195.73,0,0,0,193.83,128ZM206,50c9.28,9.28,2.36,36.29-19.8,68a306.2,306.2,0,0,0-22.78-25.45A306.2,306.2,0,0,0,138,69.76C169.75,47.61,196.77,40.68,206,50Zm-27.19,78A289.17,289.17,0,0,1,155,155a289.17,289.17,0,0,1-27,23.88A289.17,289.17,0,0,1,101,155a290.62,290.62,0,0,1-23.88-27A297.06,297.06,0,0,1,128,77.14,290.74,290.74,0,0,1,155,101,289.17,289.17,0,0,1,178.85,128ZM50,50c2.68-2.69,6.84-4,12.17-4,13.11,0,33.3,8,55.87,23.81A302.94,302.94,0,0,0,92.54,92.54,306.2,306.2,0,0,0,69.76,118C47.6,86.25,40.68,59.24,50,50ZM50,206h0c-9.28-9.28-2.35-36.29,19.8-68a306.2,306.2,0,0,0,22.78,25.45A306.2,306.2,0,0,0,118,186.24C86.25,208.4,59.24,215.32,50,206ZM206,206c-9.28,9.28-36.29,2.35-68-19.81a304.26,304.26,0,0,0,25.45-22.77A306.2,306.2,0,0,0,186.24,138C208.4,169.75,215.32,196.76,206,206Zm-68-78a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M211.89,162.47A195.58,195.58,0,0,0,191.36,128a195.58,195.58,0,0,0,20.53-34.47c10.38-23.06,10.81-41,1.21-50.63s-27.57-9.17-50.63,1.21A195.58,195.58,0,0,0,128,64.64,195.58,195.58,0,0,0,93.53,44.11C70.47,33.73,52.49,33.3,42.9,42.9s-9.17,27.57,1.21,50.63A195.58,195.58,0,0,0,64.64,128a195.58,195.58,0,0,0-20.53,34.47c-10.38,23.06-10.81,41-1.21,50.63h0C47.5,217.7,54,220,62.12,220c8.78,0,19.41-2.71,31.41-8.11A195.58,195.58,0,0,0,128,191.36a195.58,195.58,0,0,0,34.47,20.53c12,5.4,22.63,8.11,31.41,8.11,8.09,0,14.62-2.3,19.22-6.9h0C222.7,203.51,222.27,185.53,211.89,162.47ZM207.45,48.55c10.27,10.28,3.14,39.05-21.1,72.84A301,301,0,0,0,162,94a301,301,0,0,0-27.43-24.31C168.4,45.4,197.17,38.27,207.45,48.55Zm-26,79.45a293.16,293.16,0,0,1-25,28.38,291.82,291.82,0,0,1-28.38,25,291.82,291.82,0,0,1-28.38-25,293.16,293.16,0,0,1-25-28.38A302.36,302.36,0,0,1,128,74.58a295.83,295.83,0,0,1,28.37,25A293.16,293.16,0,0,1,181.41,128ZM48.55,48.55c3.05-3,7.71-4.55,13.64-4.55,14.11,0,35.41,8.59,59.19,25.65a304.89,304.89,0,0,0-51.73,51.74C45.41,87.6,38.28,58.83,48.55,48.55Zm0,158.9c-10.27-10.28-3.14-39,21.1-72.84A301,301,0,0,0,94,162a301,301,0,0,0,27.43,24.31C87.6,210.59,58.83,217.72,48.55,207.45Zm158.9,0c-10.28,10.27-39,3.14-72.84-21.1A301,301,0,0,0,162,162a301,301,0,0,0,24.31-27.43C210.59,168.4,217.72,197.17,207.45,207.45ZM136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"}))]]),F3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M235.57,193.73,202.38,35.93a20,20,0,0,0-23.76-15.48L131.81,30.51a19.82,19.82,0,0,0-11,6.65A20,20,0,0,0,104,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V90.25l25.62,121.82A20,20,0,0,0,169.15,228a20.27,20.27,0,0,0,4.23-.45l46.81-10.06A20.1,20.1,0,0,0,235.57,193.73ZM148.19,88.65l39-8.38,2.53,12-39,8.38Zm7.46,35.5,39-8.38,9.16,43.58-39,8.38Zm24.06-79.39,2.53,12-39,8.38-2.53-12ZM60,88h40v80H60Zm40-36V64H60V52ZM60,204V192h40v12Zm112.29-.76-2.53-12,39-8.38,2.53,12Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M48,72h64V184H48ZM190.64,38.39a8,8,0,0,0-9.5-6.21l-46.81,10a8.07,8.07,0,0,0-6.15,9.57L139.79,107l62.46-13.42Z",opacity:"0.2"}),_.createElement("path",{d:"M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm10,47.38-3.35-15.9,46.82-10.06,3.34,15.9Zm70,100.41-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm48,160H56V192h48v16Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M104,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V48A14,14,0,0,0,104,34ZM54,78h52V178H54Zm2-32h48a2,2,0,0,1,2,2V66H54V48A2,2,0,0,1,56,46Zm48,164H56a2,2,0,0,1-2-2V190h52v18A2,2,0,0,1,104,210Zm125.7-15L196.51,37.16a14,14,0,0,0-16.63-10.85L133.07,36.37A14.09,14.09,0,0,0,122.3,53l33.19,157.81a14,14,0,0,0,6.1,8.9,13.85,13.85,0,0,0,7.57,2.26,13.55,13.55,0,0,0,3-.32l46.81-10.05A14.09,14.09,0,0,0,229.7,195Zm-82.81-83.32,50.73-10.9,14.12,67.16L161,178.81Zm-6.63-31.56L191,69.19,195.15,89l-50.73,10.9Zm-4.66-32,46.8-10.05a2.18,2.18,0,0,1,.42,0,1.89,1.89,0,0,1,1.05.32,2,2,0,0,1,.89,1.31l3.75,17.82L137.79,68.34l-3.74-17.78A2.07,2.07,0,0,1,135.6,48.1Zm80.81,151.8L169.6,210a1.92,1.92,0,0,1-1.47-.27,2,2,0,0,1-.89-1.31l-3.75-17.82,50.72-10.9L218,197.43A2.07,2.07,0,0,1,216.41,199.9Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M104,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V48A12,12,0,0,0,104,36ZM52,76h56V180H52Zm4-32h48a4,4,0,0,1,4,4V68H52V48A4,4,0,0,1,56,44Zm48,168H56a4,4,0,0,1-4-4V188h56v20A4,4,0,0,1,104,212Zm123.74-16.62L194.55,37.57a12,12,0,0,0-14.25-9.3L133.49,38.32a12.1,12.1,0,0,0-9.23,14.3l33.19,157.81a12,12,0,0,0,14.25,9.3l46.81-10.06h0A12.08,12.08,0,0,0,227.74,195.38Zm-83.21-85.27,54.63-11.73,15,71.07-54.63,11.74Zm-6.64-31.56,54.64-11.74,5,23.74-54.64,11.73Zm-2.71-32.4L182,36.09a4,4,0,0,1,.84-.09,3.94,3.94,0,0,1,2.14.64,4,4,0,0,1,1.76,2.58L190.88,59,136.24,70.72,132.09,51A4.07,4.07,0,0,1,135.18,46.15Zm81.65,155.7L170,211.91a4,4,0,0,1-3-.55,4,4,0,0,1-1.76-2.58L161.12,189l54.64-11.73L219.91,197A4.07,4.07,0,0,1,216.83,201.85Z"}))]]),I3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),_.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]),H3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),_.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),B3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM163.27,77l-56,24a12,12,0,0,0-6.3,6.3l-24,56A12,12,0,0,0,92.73,179l56-24a12,12,0,0,0,6.3-6.3l24-56A12,12,0,0,0,163.27,77Zm-28.41,57.89-24,10.29,10.29-24,24-10.29Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z",opacity:"0.2"}),_.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm51.58,57.79-32,64a4.08,4.08,0,0,1-1.79,1.79l-64,32a4,4,0,0,1-5.37-5.37l32-64a4.08,4.08,0,0,1,1.79-1.79l64-32A4,4,0,0,1,179.58,81.79Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM173.32,74.63l-64,32a6,6,0,0,0-2.69,2.69l-32,64A6,6,0,0,0,80,182a6.06,6.06,0,0,0,2.68-.63l64-32a6,6,0,0,0,2.69-2.69l32-64a6,6,0,0,0-8.05-8.05Zm-33.79,64.9L93.42,162.58l23-46.11,46.11-23Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM174.21,76.42l-64,32a4.08,4.08,0,0,0-1.79,1.79l-32,64A4,4,0,0,0,80,180a4.05,4.05,0,0,0,1.79-.42l64-32a4.08,4.08,0,0,0,1.79-1.79l32-64a4,4,0,0,0-5.37-5.37ZM141,141l-52.08,26L115,115l52.08-26Z"}))]]),V3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224.15,179.17l-46.83-46.82,37.93-13.51.76-.3a20,20,0,0,0-1.76-37.27L54.16,29A20,20,0,0,0,29,54.16L81.27,214.24A20,20,0,0,0,118.54,216c.11-.25.21-.5.3-.76l13.51-37.92,46.83,46.82a20,20,0,0,0,28.28,0l16.69-16.68A20,20,0,0,0,224.15,179.17Zm-30.83,25.17-48.48-48.48A20,20,0,0,0,130.7,150a20.66,20.66,0,0,0-3.74.35A20,20,0,0,0,112.35,162c-.11.25-.21.5-.3.76L100.4,195.5,54.29,54.29l141.21,46.1-32.71,11.66c-.26.09-.51.19-.76.3a20,20,0,0,0-6.17,32.48h0l48.49,48.48Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M213.66,201,201,213.66a8,8,0,0,1-11.31,0l-51.31-51.31a8,8,0,0,0-13,2.46l-17.82,46.41a8,8,0,0,1-14.85-.71L40.41,50.44a8,8,0,0,1,10-10L210.51,92.68a8,8,0,0,1,.71,14.85l-46.41,17.82a8,8,0,0,0-2.46,13l51.31,51.31A8,8,0,0,1,213.66,201Z",opacity:"0.2"}),_.createElement("path",{d:"M168,132.69,214.08,115l.33-.13A16,16,0,0,0,213,85.07L52.92,32.8A15.95,15.95,0,0,0,32.8,52.92L85.07,213a15.82,15.82,0,0,0,14.41,11l.78,0a15.84,15.84,0,0,0,14.61-9.59l.13-.33L132.69,168,184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63ZM195.31,208,144,156.69a16,16,0,0,0-26,4.93c0,.11-.09.22-.13.32l-17.65,46L48,48l159.85,52.2-45.95,17.64-.32.13a16,16,0,0,0-4.93,26h0L208,195.31Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220.49,207.8,207.8,220.49a12,12,0,0,1-17,0l-56.57-56.57L115,214.08l-.13.33A15.84,15.84,0,0,1,100.26,224l-.78,0a15.82,15.82,0,0,1-14.41-11L32.8,52.92A15.95,15.95,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.33.13-50.16,19.27,56.57,56.56A12,12,0,0,1,220.49,207.8Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M166.59,134.1a1.91,1.91,0,0,1-.55-1.79,2,2,0,0,1,1.08-1.42l46.25-17.76.24-.1A14,14,0,0,0,212.38,87L52.29,34.7A13.95,13.95,0,0,0,34.7,52.29L87,212.38a13.82,13.82,0,0,0,12.6,9.6c.23,0,.46,0,.69,0A13.84,13.84,0,0,0,113,213.61a2.44,2.44,0,0,0,.1-.24l17.76-46.25a2,2,0,0,1,3.21-.53l51.31,51.31a14,14,0,0,0,19.8,0l12.69-12.69a14,14,0,0,0,0-19.8Zm42.82,62.63-12.68,12.68a2,2,0,0,1-2.83,0L142.59,158.1a14,14,0,0,0-22.74,4.32,2.44,2.44,0,0,0-.1.24L102,208.91a2,2,0,0,1-3.61-.26L46.11,48.57a1.87,1.87,0,0,1,.47-2A1.92,1.92,0,0,1,47.93,46a2.22,2.22,0,0,1,.64.1L208.65,98.38a2,2,0,0,1,.26,3.61l-46.25,17.76-.24.1a14,14,0,0,0-4.32,22.74h0l51.31,51.31A2,2,0,0,1,209.41,196.73Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M168,132.69,214.08,115l.33-.13A16,16,0,0,0,213,85.07L52.92,32.8A15.95,15.95,0,0,0,32.8,52.92L85.07,213a15.82,15.82,0,0,0,14.41,11l.78,0a15.84,15.84,0,0,0,14.61-9.59l.13-.33L132.69,168,184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63ZM195.31,208,144,156.69a16,16,0,0,0-26,4.93c0,.11-.09.22-.13.32l-17.65,46L48,48l159.85,52.2-45.95,17.64-.32.13a16,16,0,0,0-4.93,26h0L208,195.31Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M165.17,135.51a4,4,0,0,1,1.17-6.46l46.31-17.79.16-.06a12,12,0,0,0-1.05-22.33L51.67,36.6A12,12,0,0,0,36.6,51.67L88.87,211.76A11.86,11.86,0,0,0,99.67,220h.58a11.86,11.86,0,0,0,11-7.19l.06-.16,17.79-46.31a4,4,0,0,1,6.47-1.17l51.31,51.32a12,12,0,0,0,17,0l12.69-12.69a12,12,0,0,0,0-17Zm45.66,62.63-12.69,12.69a4,4,0,0,1-5.66,0l-51.31-51.31a12,12,0,0,0-8.48-3.52,12.13,12.13,0,0,0-2.24.21,12,12,0,0,0-8.77,7l-.06.16-17.79,46.31a4,4,0,0,1-7.36-.42L44.2,49.19a4,4,0,0,1,5-5L209.27,96.47a4,4,0,0,1,.42,7.36l-46.31,17.78-.16.07a12,12,0,0,0-3.71,19.49l51.32,51.31A4,4,0,0,1,210.83,198.14Z"}))]]),G3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),_.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z"}))]]),Z3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M134.88,6.17a12,12,0,0,0-13.76,0,259,259,0,0,0-42.18,39C50.85,77.43,36,111.62,36,144a92,92,0,0,0,184,0C220,66.64,138.36,8.6,134.88,6.17ZM128,212a68.07,68.07,0,0,1-68-68c0-33.31,20-63.37,36.7-82.71A249.35,249.35,0,0,1,128,31.11a249.35,249.35,0,0,1,31.3,30.18C176,80.63,196,110.69,196,144A68.07,68.07,0,0,1,128,212Zm49.62-52.4a52,52,0,0,1-34,34,12.2,12.2,0,0,1-3.6.55,12,12,0,0,1-3.6-23.45,28,28,0,0,0,18.32-18.32,12,12,0,0,1,22.9,7.2Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,144a80,80,0,0,1-160,0c0-72,80-128,80-128S208,72,208,144Z",opacity:"0.2"}),_.createElement("path",{d:"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Zm9.85,105.59a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M172.53,49.06a252.86,252.86,0,0,0-41.09-38,6,6,0,0,0-6.88,0,252.86,252.86,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM128,218a74.09,74.09,0,0,1-74-74c0-59.62,59-108.93,74-120.51C143,35.07,202,84.38,202,144A74.09,74.09,0,0,1,128,218Zm53.92-65A55.58,55.58,0,0,1,137,197.92a7,7,0,0,1-1,.08,6,6,0,0,1-1-11.92c17.38-2.92,32.13-17.68,35.08-35.08a6,6,0,1,1,11.84,2Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M171,50.38a250,250,0,0,0-40.73-37.66,4,4,0,0,0-4.58,0A250,250,0,0,0,85,50.38C58.17,81.21,44,113.58,44,144a84,84,0,0,0,168,0C212,113.58,197.83,81.21,171,50.38ZM128,220a76.08,76.08,0,0,1-76-76c0-35.9,21.15-67.8,38.9-88.24A255,255,0,0,1,128,21a255,255,0,0,1,37.1,34.8C182.85,76.2,204,108.1,204,144A76.08,76.08,0,0,1,128,220Zm51.94-67.33a53.51,53.51,0,0,1-43.28,43.27,3.68,3.68,0,0,1-.66.06,4,4,0,0,1-.66-7.94c18.18-3.06,33.63-18.51,36.72-36.73a4,4,0,0,1,7.88,1.34Z"}))]]),q3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,88H152V32Z",opacity:"0.2"}),_.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z"}))]]),k3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M222.14,69.17,186.83,33.86A19.86,19.86,0,0,0,172.69,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V83.31A19.86,19.86,0,0,0,222.14,69.17ZM164,204H92V160h72Zm40,0H188V156a20,20,0,0,0-20-20H88a20,20,0,0,0-20,20v48H52V52H171l33,33ZM164,84a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h56A12,12,0,0,1,164,84Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,83.31V208a8,8,0,0,1-8,8H176V152a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v64H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H172.69a8,8,0,0,1,5.65,2.34l35.32,35.32A8,8,0,0,1,216,83.31Z",opacity:"0.2"}),_.createElement("path",{d:"M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM208,208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M217.9,73.42,182.58,38.1a13.9,13.9,0,0,0-9.89-4.1H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V83.31A13.9,13.9,0,0,0,217.9,73.42ZM170,210H86V152a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2Zm40-2a2,2,0,0,1-2,2H182V152a14,14,0,0,0-14-14H88a14,14,0,0,0-14,14v58H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H172.69a2,2,0,0,1,1.41.58L209.42,81.9a2,2,0,0,1,.58,1.41ZM158,72a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h56A6,6,0,0,1,158,72Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216.49,74.83,181.17,39.51A11.93,11.93,0,0,0,172.69,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V83.31A11.93,11.93,0,0,0,216.49,74.83ZM172,212H84V152a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4Zm40-4a4,4,0,0,1-4,4H180V152a12,12,0,0,0-12-12H88a12,12,0,0,0-12,12v60H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H172.69a4,4,0,0,1,2.82,1.17l35.32,35.32A4,4,0,0,1,212,83.31ZM156,72a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h56A4,4,0,0,1,156,72Z"}))]]),X3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M87.5,151.52l64-64a12,12,0,0,1,17,17l-64,64a12,12,0,0,1-17-17Zm131-114a60.08,60.08,0,0,0-84.87,0L103.51,67.61a12,12,0,0,0,17,17l30.07-30.06a36,36,0,0,1,50.93,50.92L171.4,135.52a12,12,0,1,0,17,17l30.08-30.06A60.09,60.09,0,0,0,218.45,37.55ZM135.52,171.4l-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z",opacity:"0.2"}),_.createElement("path",{d:"M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144.56,173.66l-21.45,21.45a44,44,0,0,1-62.22-62.22l21.45-21.46a8,8,0,0,1,11.32,11.31L72.2,144.2a28,28,0,0,0,39.6,39.6l21.45-21.46a8,8,0,0,1,11.31,11.32Zm-34.9-16a8,8,0,0,1-11.32-11.32l48-48a8,8,0,0,1,11.32,11.32Zm85.45-34.55-21.45,21.45a8,8,0,0,1-11.32-11.31L183.8,111.8a28,28,0,0,0-39.6-39.6L122.74,93.66a8,8,0,0,1-11.31-11.32l21.46-21.45a44,44,0,0,1,62.22,62.22Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M164.25,91.75a6,6,0,0,1,0,8.49l-64,64a6,6,0,0,1-8.49-8.48l64-64A6,6,0,0,1,164.25,91.75ZM214.2,41.8a54.07,54.07,0,0,0-76.38,0L107.75,71.85a6,6,0,0,0,8.49,8.49l30.07-30.06a42,42,0,0,1,59.41,59.41l-30.08,30.07a6,6,0,1,0,8.49,8.49l30.07-30.07A54,54,0,0,0,214.2,41.8ZM139.76,175.64l-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M162.84,93.16a4,4,0,0,1,0,5.66l-64,64a4,4,0,0,1-5.66-5.66l64-64A4,4,0,0,1,162.84,93.16Zm49.95-49.95a52.07,52.07,0,0,0-73.56,0L109.17,73.27a4,4,0,0,0,5.65,5.66l30.07-30.06a44,44,0,0,1,62.24,62.24l-30.07,30.06a4,4,0,0,0,5.66,5.66l30.07-30.06A52.07,52.07,0,0,0,212.79,43.21ZM141.17,177.06l-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z"}))]]),W3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),_.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"}))]]),Y3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),_.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),j3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",opacity:"0.2"}),_.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z"}))]]),K3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M108,108a12,12,0,0,1,12-12h56a12,12,0,0,1,0,24H120A12,12,0,0,1,108,108Zm68,28H120a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm52-88V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204H68V52H52ZM204,52H92V204H204Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M80,40V216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z",opacity:"0.2"}),_.createElement("path",{d:"M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M182,112a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h64A6,6,0,0,1,182,112Zm-6,26H112a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm46-90V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H74V46H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210ZM210,48a2,2,0,0,0-2-2H86V210H208a2,2,0,0,0,2-2Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M180,112a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h64A4,4,0,0,1,180,112Zm-4,28H112a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm44-92V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H76V44H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212ZM212,48a4,4,0,0,0-4-4H84V212H208a4,4,0,0,0,4-4Z"}))]]),J3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",opacity:"0.2"}),_.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"}))]]),Q3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",opacity:"0.2"}),_.createElement("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"}))]]),$3=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),_.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),eM=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M234.36,170A12,12,0,0,1,230,186.37l-96,56a12,12,0,0,1-12.1,0l-96-56a12,12,0,0,1,12.09-20.74l90,52.48L218,165.63A12,12,0,0,1,234.36,170ZM218,117.63,128,170.11,38.05,117.63A12,12,0,0,0,26,138.37l96,56a12,12,0,0,0,12.1,0l96-56A12,12,0,0,0,218,117.63ZM20,80a12,12,0,0,1,6-10.37l96-56a12.06,12.06,0,0,1,12.1,0l96,56a12,12,0,0,1,0,20.74l-96,56a12,12,0,0,1-12.1,0l-96-56A12,12,0,0,1,20,80Zm35.82,0L128,122.11,200.18,80,128,37.89Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,80l-96,56L32,80l96-56Z",opacity:"0.2"}),_.createElement("path",{d:"M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z"}),_.createElement("path",{d:"M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z"}),_.createElement("path",{d:"M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M229.18,173a6,6,0,0,1-2.16,8.2l-96,56a6,6,0,0,1-6,0l-96-56a6,6,0,0,1,6-10.36l93,54.23,93-54.23A6,6,0,0,1,229.18,173ZM221,122.82l-93,54.23L35,122.82a6,6,0,0,0-6,10.36l96,56a6,6,0,0,0,6,0l96-56a6,6,0,0,0-6-10.36ZM26,80a6,6,0,0,1,3-5.18l96-56a6,6,0,0,1,6,0l96,56a6,6,0,0,1,0,10.36l-96,56a6,6,0,0,1-6,0l-96-56A6,6,0,0,1,26,80Zm17.91,0L128,129.05,212.09,80,128,31Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M227.45,174a4,4,0,0,1-1.44,5.48l-96,56a4,4,0,0,1-4,0l-96-56a4,4,0,0,1,4-6.92l94,54.83,94-54.83A4,4,0,0,1,227.45,174ZM222,124.54l-94,54.83L34,124.54a4,4,0,0,0-4,6.92l96,56a4,4,0,0,0,4,0l96-56a4,4,0,0,0-4-6.92ZM28,80a4,4,0,0,1,2-3.46l96-56a4,4,0,0,1,4,0l96,56a4,4,0,0,1,0,6.92l-96,56a4,4,0,0,1-4,0l-96-56A4,4,0,0,1,28,80Zm11.94,0L128,131.37,216.06,80,128,28.63Z"}))]]),tM=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),_.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),nM=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),_.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),iM=_.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),$t=_.forwardRef((s,e)=>{const{alt:n,color:a,size:o,weight:c,mirrored:u,children:h,weights:p,...m}=s,{color:g="currentColor",size:x,weight:v="regular",mirrored:M=!1,...A}=_.useContext(iM);return _.createElement("svg",{ref:e,xmlns:"http://www.w3.org/2000/svg",width:o??x,height:o??x,fill:a??g,viewBox:"0 0 256 256",transform:u||M?"scale(-1, 1)":void 0,...A,...m},!!n&&_.createElement("title",null,n),h,p.get(c??v))});$t.displayName="IconBase";const j2=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:D3}));j2.displayName="ArrowCounterClockwiseIcon";const aM=j2,K2=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:N3}));K2.displayName="ArrowLeftIcon";const rM=K2,J2=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:U3}));J2.displayName="ArrowRightIcon";const iu=J2,Q2=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:O3}));Q2.displayName="ArrowSquareOutIcon";const sM=Q2,$2=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:P3}));$2.displayName="ArrowsOutIcon";const oM=$2,ev=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:z3}));ev.displayName="AtomIcon";const Dg=ev,tv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:F3}));tv.displayName="BooksIcon";const vh=tv,nv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:I3}));nv.displayName="CaretRightIcon";const _h=nv,iv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:H3}));iv.displayName="CheckIcon";const lM=iv,av=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:B3}));av.displayName="CompassIcon";const cM=av,rv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:V3}));rv.displayName="CursorIcon";const uM=rv,sv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:G3}));sv.displayName="DownloadSimpleIcon";const fM=sv,ov=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:Z3}));ov.displayName="DropIcon";const Ng=ov,lv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:q3}));lv.displayName="FileTextIcon";const xh=lv,cv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:k3}));cv.displayName="FloppyDiskIcon";const dM=cv,uv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:X3}));uv.displayName="LinkSimpleIcon";const fv=uv,dv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:W3}));dv.displayName="LockSimpleIcon";const Ug=dv,hv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:Y3}));hv.displayName="MagnifyingGlassIcon";const hM=hv,mv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:j3}));mv.displayName="MoonIcon";const mM=mv,pv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:K3}));pv.displayName="NotebookIcon";const Og=pv,gv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:J3}));gv.displayName="PauseIcon";const pM=gv,vv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:Q3}));vv.displayName="PlayIcon";const gM=vv,_v=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:$3}));_v.displayName="PlusIcon";const Jo=_v,xv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:eM}));xv.displayName="StackIcon";const wc=xv,Mv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:tM}));Mv.displayName="SunIcon";const vM=Mv,Sv=_.forwardRef((s,e)=>_.createElement($t,{ref:e,...s,weights:nM}));Sv.displayName="XIcon";const _M=Sv;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const g0="186",xM=0,Pg=1,MM=2,au=1,SM=2,Qo=3,Ir=0,ti=1,Pi=2,Ta=0,tl=1,zg=2,Fg=3,Ig=4,yM=5,Ps=100,EM=101,bM=102,AM=103,TM=104,RM=200,CM=201,wM=202,LM=203,yv=204,Ev=205,DM=206,NM=207,UM=208,OM=209,PM=210,zM=211,FM=212,IM=213,HM=214,Mh=0,Sh=1,yh=2,ol=3,Eh=4,bh=5,Ah=6,Th=7,bv=0,BM=1,VM=2,Ji=0,Av=1,Tv=2,Rv=3,v0=4,Cv=5,wv=6,Lv=7,Dv=300,Hr=301,qs=302,Pd=303,zd=304,Mu=306,Rh=1e3,Aa=1001,Ch=1002,Pn=1003,GM=1004,Lc=1005,Bn=1006,Fd=1007,zr=1008,pi=1009,Nv=1010,Uv=1011,ll=1012,_0=1013,Qi=1014,ji=1015,$i=1016,x0=1017,M0=1018,cl=1020,Ov=35902,Pv=35899,zv=1021,Fv=1022,Fi=1023,Ca=1026,Fr=1027,Iv=1028,S0=1029,Br=1030,y0=1031,E0=1033,ru=33776,su=33777,ou=33778,lu=33779,wh=35840,Lh=35841,Dh=35842,Nh=35843,Uh=36196,Oh=37492,Ph=37496,zh=37488,Fh=37489,uu=37490,Ih=37491,Hh=37808,Bh=37809,Vh=37810,Gh=37811,Zh=37812,qh=37813,kh=37814,Xh=37815,Wh=37816,Yh=37817,jh=37818,Kh=37819,Jh=37820,Qh=37821,$h=36492,e0=36494,t0=36495,n0=36283,i0=36284,fu=36285,a0=36286,ZM=3200,r0=0,qM=1,cr="",hi="srgb",du="srgb-linear",hu="linear",Xt="srgb",Id=7680,kM=519,XM=512,WM=513,YM=514,b0=515,jM=516,KM=517,A0=518,JM=519,QM=35044,Hg="300 es",Ki=2e3,ul=2001;function $M(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eS(){const s=mu("canvas");return s.style.display="block",s}const Bg={};function Vg(...s){const e="THREE."+s.shift();console.log(e,...s)}function Hv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function pt(...s){s=Hv(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function zt(...s){s=Hv(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Vs(...s){const e=s.join(" ");e in Bg||(Bg[e]=!0,pt(...s))}function tS(s,e,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const nS={[Mh]:Sh,[yh]:Ah,[Eh]:Th,[ol]:bh,[Sh]:Mh,[Ah]:yh,[Th]:Eh,[bh]:ol};class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gg=1234567;const nl=Math.PI/180,fl=180/Math.PI;function Zr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function Tt(s,e,n){return Math.max(e,Math.min(n,s))}function T0(s,e){return(s%e+e)%e}function iS(s,e,n,a,o){return a+(s-e)*(o-a)/(n-e)}function aS(s,e,n){return s!==e?(n-s)/(e-s):0}function il(s,e,n){return(1-n)*s+n*e}function rS(s,e,n,a){return il(s,e,1-Math.exp(-n*a))}function sS(s,e=1){return e-Math.abs(T0(s,e*2)-e)}function oS(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function lS(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function cS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function uS(s,e){return s+Math.random()*(e-s)}function fS(s){return s*(.5-Math.random())}function dS(s){s!==void 0&&(Gg=s);let e=Gg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hS(s){return s*nl}function mS(s){return s*fl}function pS(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function gS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _S(s,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),m=c((e+a)/2),g=u((e+a)/2),x=c((e-a)/2),v=u((e-a)/2),M=c((a-e)/2),A=u((a-e)/2);switch(o){case"XYX":s.set(h*g,p*x,p*v,h*m);break;case"YZY":s.set(p*v,h*g,p*x,h*m);break;case"ZXZ":s.set(p*x,p*v,h*g,h*m);break;case"XZX":s.set(h*g,p*A,p*M,h*m);break;case"YXY":s.set(p*M,h*g,p*A,h*m);break;case"ZYZ":s.set(p*A,p*M,h*g,h*m);break;default:pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function zs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fs={DEG2RAD:nl,RAD2DEG:fl,generateUUID:Zr,clamp:Tt,euclideanModulo:T0,mapLinear:iS,inverseLerp:aS,lerp:il,damp:rS,pingpong:sS,smoothstep:oS,smootherstep:lS,randInt:cS,randFloat:uS,randFloatSpread:fS,seededRandom:dS,degToRad:hS,radToDeg:mS,isPowerOfTwo:pS,ceilPowerOfTwo:gS,floorPowerOfTwo:vS,setQuaternionFromProperEuler:_S,normalize:qn,denormalize:zs},I0=class I0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};I0.prototype.isVector2=!0;let Ye=I0;class Ws{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let p=a[o+0],m=a[o+1],g=a[o+2],x=a[o+3],v=c[u+0],M=c[u+1],A=c[u+2],D=c[u+3];if(x!==D||p!==v||m!==M||g!==A){let E=p*v+m*M+g*A+x*D;E<0&&(v=-v,M=-M,A=-A,D=-D,E=-E);let S=1-h;if(E<.9995){const F=Math.acos(E),I=Math.sin(F);S=Math.sin(S*F)/I,h=Math.sin(h*F)/I,p=p*S+v*h,m=m*S+M*h,g=g*S+A*h,x=x*S+D*h}else{p=p*S+v*h,m=m*S+M*h,g=g*S+A*h,x=x*S+D*h;const F=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=F,m*=F,g*=F,x*=F}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],p=a[o+1],m=a[o+2],g=a[o+3],x=c[u],v=c[u+1],M=c[u+2],A=c[u+3];return e[n]=h*A+g*x+p*M-m*v,e[n+1]=p*A+g*v+m*x-h*M,e[n+2]=m*A+g*M+h*v-p*x,e[n+3]=g*A-h*x-p*v-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(o/2),x=h(c/2),v=p(a/2),M=p(o/2),A=p(c/2);switch(u){case"XYZ":this._x=v*g*x+m*M*A,this._y=m*M*x-v*g*A,this._z=m*g*A+v*M*x,this._w=m*g*x-v*M*A;break;case"YXZ":this._x=v*g*x+m*M*A,this._y=m*M*x-v*g*A,this._z=m*g*A-v*M*x,this._w=m*g*x+v*M*A;break;case"ZXY":this._x=v*g*x-m*M*A,this._y=m*M*x+v*g*A,this._z=m*g*A+v*M*x,this._w=m*g*x-v*M*A;break;case"ZYX":this._x=v*g*x-m*M*A,this._y=m*M*x+v*g*A,this._z=m*g*A-v*M*x,this._w=m*g*x+v*M*A;break;case"YZX":this._x=v*g*x+m*M*A,this._y=m*M*x+v*g*A,this._z=m*g*A-v*M*x,this._w=m*g*x-v*M*A;break;case"XZY":this._x=v*g*x-m*M*A,this._y=m*M*x-v*g*A,this._z=m*g*A+v*M*x,this._w=m*g*x+v*M*A;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],m=n[2],g=n[6],x=n[10],v=a+h+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(u-o)*M}else if(a>h&&a>x){const M=2*Math.sqrt(1+a-h-x);this._w=(g-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+m)/M}else if(h>x){const M=2*Math.sqrt(1+h-a-x);this._w=(c-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-a-h);this._w=(u-o)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=a*g+u*h+o*m-c*p,this._y=o*g+u*p+c*h-a*m,this._z=c*g+u*m+a*p-o*h,this._w=u*g-a*h-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const m=Math.acos(h),g=Math.sin(m);p=Math.sin(p*m)/g,n=Math.sin(n*m)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const H0=class H0{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,p=e.w,m=2*(u*o-h*a),g=2*(h*n-c*o),x=2*(c*a-u*n);return this.x=n+p*m+u*x-h*g,this.y=a+p*g+h*m-c*x,this.z=o+p*x+c*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this.z=Tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this.z=Tt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};H0.prototype.isVector3=!0;let Q=H0;const Hd=new Q,Zg=new Ws,B0=class B0{constructor(e,n,a,o,c,u,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,m)}set(e,n,a,o,c,u,h,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],m=a[1],g=a[4],x=a[7],v=a[2],M=a[5],A=a[8],D=o[0],E=o[3],S=o[6],F=o[1],I=o[4],R=o[7],P=o[2],O=o[5],L=o[8];return c[0]=u*D+h*F+p*P,c[3]=u*E+h*I+p*O,c[6]=u*S+h*R+p*L,c[1]=m*D+g*F+x*P,c[4]=m*E+g*I+x*O,c[7]=m*S+g*R+x*L,c[2]=v*D+M*F+A*P,c[5]=v*E+M*I+A*O,c[8]=v*S+M*R+A*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return n*u*g-n*h*m-a*c*g+a*h*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],g=e[8],x=g*u-h*m,v=h*p-g*c,M=m*c-u*p,A=n*x+a*v+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=x*D,e[1]=(o*m-g*a)*D,e[2]=(h*a-o*u)*D,e[3]=v*D,e[4]=(g*n-o*p)*D,e[5]=(o*c-h*n)*D,e[6]=M*D,e[7]=(a*p-m*n)*D,e[8]=(u*n-a*c)*D,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*u+m*h)+u+e,-o*m,o*p,-o*(-m*u+p*h)+h+n,0,0,1),this}scale(e,n){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bd.makeScale(e,n)),this}rotate(e){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bd.makeRotation(-e)),this}translate(e,n){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};B0.prototype.isMatrix3=!0;let _t=B0;const Bd=new _t,qg=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xS(){const s={enabled:!0,workingColorSpace:du,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xt&&(o.r=Ra(o.r),o.g=Ra(o.g),o.b=Ra(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xt&&(o.r=Gs(o.r),o.g=Gs(o.g),o.b=Gs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cr?hu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[du]:{primaries:e,whitePoint:a,transfer:hu,toXYZ:qg,fromXYZ:kg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:a,transfer:Xt,toXYZ:qg,fromXYZ:kg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Pt=xS();function Ra(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class MS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ys===void 0&&(ys=mu("canvas")),ys.width=e.width,ys.height=e.height;const o=ys.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=ys}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=mu("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ra(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ra(n[a]/255)*255):n[a]=Ra(n[a]);return{data:n,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SS=0;class R0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Vd(o[u].image)):c.push(Vd(o[u]))}else c=Vd(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?MS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let yS=0;const Gd=new Q;class Xn extends Gr{constructor(e=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,a=Aa,o=Aa,c=Bn,u=zr,h=Fi,p=pi,m=Xn.DEFAULT_ANISOTROPY,g=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Zr(),this.name="",this.source=new R0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){pt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case Aa:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case Aa:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Dv;Xn.DEFAULT_ANISOTROPY=1;const V0=class V0{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const p=e.elements,m=p[0],g=p[4],x=p[8],v=p[1],M=p[5],A=p[9],D=p[2],E=p[6],S=p[10];if(Math.abs(g-v)<.01&&Math.abs(x-D)<.01&&Math.abs(A-E)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+D)<.1&&Math.abs(A+E)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(m+1)/2,R=(M+1)/2,P=(S+1)/2,O=(g+v)/4,L=(x+D)/4,b=(A+E)/4;return I>R&&I>P?I<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(I),o=O/a,c=L/a):R>P?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=O/o,c=b/o):P<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),a=L/c,o=b/c),this.set(a,o,c,n),this}let F=Math.sqrt((E-A)*(E-A)+(x-D)*(x-D)+(v-g)*(v-g));return Math.abs(F)<.001&&(F=1),this.x=(E-A)/F,this.y=(x-D)/F,this.z=(v-g)/F,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this.z=Tt(this.z,e.z,n.z),this.w=Tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this.z=Tt(this.z,e,n),this.w=Tt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};V0.prototype.isVector4=!0;let on=V0;class ES extends Gr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Xn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new R0(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends ES{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Bv extends Xn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bS extends Xn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const xu=class xu{constructor(e,n,a,o,c,u,h,p,m,g,x,v,M,A,D,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,m,g,x,v,M,A,D,E)}set(e,n,a,o,c,u,h,p,m,g,x,v,M,A,D,E){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=h,S[13]=p,S[2]=m,S[6]=g,S[10]=x,S[14]=v,S[3]=M,S[7]=A,S[11]=D,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Es.setFromMatrixColumn(e,0).length(),c=1/Es.setFromMatrixColumn(e,1).length(),u=1/Es.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=u*g,M=u*x,A=h*g,D=h*x;n[0]=p*g,n[4]=-p*x,n[8]=m,n[1]=M+A*m,n[5]=v-D*m,n[9]=-h*p,n[2]=D-v*m,n[6]=A+M*m,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,M=p*x,A=m*g,D=m*x;n[0]=v+D*h,n[4]=A*h-M,n[8]=u*m,n[1]=u*x,n[5]=u*g,n[9]=-h,n[2]=M*h-A,n[6]=D+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,M=p*x,A=m*g,D=m*x;n[0]=v-D*h,n[4]=-u*x,n[8]=A+M*h,n[1]=M+A*h,n[5]=u*g,n[9]=D-v*h,n[2]=-u*m,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,M=u*x,A=h*g,D=h*x;n[0]=p*g,n[4]=A*m-M,n[8]=v*m+D,n[1]=p*x,n[5]=D*m+v,n[9]=M*m-A,n[2]=-m,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,M=u*m,A=h*p,D=h*m;n[0]=p*g,n[4]=D-v*x,n[8]=A*x+M,n[1]=x,n[5]=u*g,n[9]=-h*g,n[2]=-m*g,n[6]=M*x+A,n[10]=v-D*x}else if(e.order==="XZY"){const v=u*p,M=u*m,A=h*p,D=h*m;n[0]=p*g,n[4]=-x,n[8]=m*g,n[1]=v*x+D,n[5]=u*g,n[9]=M*x-A,n[2]=A*x-M,n[6]=h*g,n[10]=D*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,TS)}lookAt(e,n,a){const o=this.elements;return fi.subVectors(e,n),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),nr.crossVectors(a,fi),nr.lengthSq()===0&&(Math.abs(a.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),nr.crossVectors(a,fi)),nr.normalize(),Dc.crossVectors(fi,nr),o[0]=nr.x,o[4]=Dc.x,o[8]=fi.x,o[1]=nr.y,o[5]=Dc.y,o[9]=fi.y,o[2]=nr.z,o[6]=Dc.z,o[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],m=a[12],g=a[1],x=a[5],v=a[9],M=a[13],A=a[2],D=a[6],E=a[10],S=a[14],F=a[3],I=a[7],R=a[11],P=a[15],O=o[0],L=o[4],b=o[8],N=o[12],V=o[1],q=o[5],K=o[9],ae=o[13],W=o[2],J=o[6],B=o[10],G=o[14],oe=o[3],re=o[7],pe=o[11],U=o[15];return c[0]=u*O+h*V+p*W+m*oe,c[4]=u*L+h*q+p*J+m*re,c[8]=u*b+h*K+p*B+m*pe,c[12]=u*N+h*ae+p*G+m*U,c[1]=g*O+x*V+v*W+M*oe,c[5]=g*L+x*q+v*J+M*re,c[9]=g*b+x*K+v*B+M*pe,c[13]=g*N+x*ae+v*G+M*U,c[2]=A*O+D*V+E*W+S*oe,c[6]=A*L+D*q+E*J+S*re,c[10]=A*b+D*K+E*B+S*pe,c[14]=A*N+D*ae+E*G+S*U,c[3]=F*O+I*V+R*W+P*oe,c[7]=F*L+I*q+R*J+P*re,c[11]=F*b+I*K+R*B+P*pe,c[15]=F*N+I*ae+R*G+P*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],p=e[9],m=e[13],g=e[2],x=e[6],v=e[10],M=e[14],A=e[3],D=e[7],E=e[11],S=e[15],F=p*M-m*v,I=h*M-m*x,R=h*v-p*x,P=u*M-m*g,O=u*v-p*g,L=u*x-h*g;return n*(D*F-E*I+S*R)-a*(A*F-E*P+S*O)+o*(A*I-D*P+S*L)-c*(A*R-D*O+E*L)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[1],u=e[5],h=e[9],p=e[2],m=e[6],g=e[10];return n*(u*g-h*m)-a*(c*g-h*p)+o*(c*m-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],g=e[8],x=e[9],v=e[10],M=e[11],A=e[12],D=e[13],E=e[14],S=e[15],F=n*h-a*u,I=n*p-o*u,R=n*m-c*u,P=a*p-o*h,O=a*m-c*h,L=o*m-c*p,b=g*D-x*A,N=g*E-v*A,V=g*S-M*A,q=x*E-v*D,K=x*S-M*D,ae=v*S-M*E,W=F*ae-I*K+R*q+P*V-O*N+L*b;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/W;return e[0]=(h*ae-p*K+m*q)*J,e[1]=(o*K-a*ae-c*q)*J,e[2]=(D*L-E*O+S*P)*J,e[3]=(v*O-x*L-M*P)*J,e[4]=(p*V-u*ae-m*N)*J,e[5]=(n*ae-o*V+c*N)*J,e[6]=(E*R-A*L-S*I)*J,e[7]=(g*L-v*R+M*I)*J,e[8]=(u*K-h*V+m*b)*J,e[9]=(a*V-n*K-c*b)*J,e[10]=(A*O-D*R+S*F)*J,e[11]=(x*R-g*O-M*F)*J,e[12]=(h*N-u*q-p*b)*J,e[13]=(n*q-a*N+o*b)*J,e[14]=(D*I-A*P-E*F)*J,e[15]=(g*P-x*I+v*F)*J,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,m=c*u,g=c*h;return this.set(m*u+a,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+a,g*p-o*u,0,m*p-o*h,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,m=c+c,g=u+u,x=h+h,v=c*m,M=c*g,A=c*x,D=u*g,E=u*x,S=h*x,F=p*m,I=p*g,R=p*x,P=a.x,O=a.y,L=a.z;return o[0]=(1-(D+S))*P,o[1]=(M+R)*P,o[2]=(A-I)*P,o[3]=0,o[4]=(M-R)*O,o[5]=(1-(v+S))*O,o[6]=(E+F)*O,o[7]=0,o[8]=(A+I)*L,o[9]=(E-F)*L,o[10]=(1-(v+D))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Es.set(o[0],o[1],o[2]).length();const h=Es.set(o[4],o[5],o[6]).length(),p=Es.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Di.copy(this);const m=1/u,g=1/h,x=1/p;return Di.elements[0]*=m,Di.elements[1]*=m,Di.elements[2]*=m,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=x,Di.elements[9]*=x,Di.elements[10]*=x,n.setFromRotationMatrix(Di),a.x=u,a.y=h,a.z=p,this}makePerspective(e,n,a,o,c,u,h=Ki,p=!1){const m=this.elements,g=2*c/(n-e),x=2*c/(a-o),v=(n+e)/(n-e),M=(a+o)/(a-o);let A,D;if(p)A=c/(u-c),D=u*c/(u-c);else if(h===Ki)A=-(u+c)/(u-c),D=-2*u*c/(u-c);else if(h===ul)A=-u/(u-c),D=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=D,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=Ki,p=!1){const m=this.elements,g=2/(n-e),x=2/(a-o),v=-(n+e)/(n-e),M=-(a+o)/(a-o);let A,D;if(p)A=1/(u-c),D=u/(u-c);else if(h===Ki)A=-2/(u-c),D=-(u+c)/(u-c);else if(h===ul)A=-1/(u-c),D=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=D,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};xu.prototype.isMatrix4=!0;let an=xu;const Es=new Q,Di=new an,AS=new Q(0,0,0),TS=new Q(1,1,1),nr=new Q,Dc=new Q,fi=new Q,Xg=new an,Wg=new Ws;class ur{constructor(e=0,n=0,a=0,o=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],p=o[1],m=o[5],g=o[9],x=o[2],v=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xg,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wg.setFromEuler(this),this.setFromQuaternion(Wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class C0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RS=0;const Yg=new Q,bs=new Ws,Ma=new an,Nc=new Q,qo=new Q,CS=new Q,wS=new Ws,jg=new Q(1,0,0),Kg=new Q(0,1,0),Jg=new Q(0,0,1),Qg={type:"added"},LS={type:"removed"},As={type:"childadded",child:null},Zd={type:"childremoved",child:null};class wn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new Q,n=new ur,a=new Ws,o=new Q(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new _t}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(jg,e)}rotateY(e){return this.rotateOnAxis(Kg,e)}rotateZ(e){return this.rotateOnAxis(Jg,e)}translateOnAxis(e,n){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jg,e)}translateY(e){return this.translateOnAxis(Kg,e)}translateZ(e){return this.translateOnAxis(Jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Nc.copy(e):Nc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(qo,Nc,this.up):Ma.lookAt(Nc,qo,this.up),this.quaternion.setFromRotationMatrix(Ma),o&&(Ma.extractRotation(o.matrixWorld),bs.setFromRotationMatrix(Ma),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qg),As.child=e,this.dispatchEvent(As),As.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LS),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qg),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,wS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),m=u(e.textures),g=u(e.images),x=u(e.shapes),v=u(e.skeletons),M=u(e.animations),A=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),x.length>0&&(a.shapes=x),v.length>0&&(a.skeletons=v),M.length>0&&(a.animations=M),A.length>0&&(a.nodes=A)}return a.object=o,a;function u(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wn.DEFAULT_UP=new Q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Is extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const D of e.hand.values()){const E=n.getJointPose(D,a),S=this._getHandJoint(m,D);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,A=.005;m.inputState.pinching&&v>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Is;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function kd(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Pt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Pt.workingColorSpace){if(e=T0(e,1),n=Tt(n,0,1),a=Tt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=kd(u,c,e+1/3),this.g=kd(u,c,e),this.b=kd(u,c,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,n=hi){function a(c){c!==void 0&&parseFloat(c)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hi){const a=Vv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Pt.workingToColorSpace(Hn.copy(this),e),Math.round(Tt(Hn.r*255,0,255))*65536+Math.round(Tt(Hn.g*255,0,255))*256+Math.round(Tt(Hn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.workingToColorSpace(Hn.copy(this),n);const a=Hn.r,o=Hn.g,c=Hn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,m;const g=(h+u)/2;if(h===u)p=0,m=0;else{const x=u-h;switch(m=g<=.5?x/(u+h):x/(2-u-h),u){case a:p=(o-c)/x+(o<c?6:0);break;case o:p=(c-a)/x+2;break;case c:p=(a-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Pt.workingColorSpace){return Pt.workingToColorSpace(Hn.copy(this),n),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=hi){Pt.workingToColorSpace(Hn.copy(this),e);const n=Hn.r,a=Hn.g,o=Hn.b;return e!==hi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(Uc);const a=il(ir.h,Uc.h,n),o=il(ir.s,Uc.s,n),c=il(ir.l,Uc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Rt;Rt.NAMES=Vv;class NS extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ni=new Q,Sa=new Q,Xd=new Q,ya=new Q,Ts=new Q,Rs=new Q,$g=new Q,Wd=new Q,Yd=new Q,jd=new Q,Kd=new on,Jd=new on,Qd=new on;class zi{constructor(e=new Q,n=new Q,a=new Q){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Ni.subVectors(e,n),o.cross(Ni);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Ni.subVectors(o,n),Sa.subVectors(a,n),Xd.subVectors(e,n);const u=Ni.dot(Ni),h=Ni.dot(Sa),p=Ni.dot(Xd),m=Sa.dot(Sa),g=Sa.dot(Xd),x=u*m-h*h;if(x===0)return c.set(0,0,0),null;const v=1/x,M=(m*p-h*g)*v,A=(u*g-h*p)*v;return c.set(1-M-A,A,M)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,n,a,o,c,u,h,p){return this.getBarycoord(e,n,a,o,ya)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ya.x),p.addScaledVector(u,ya.y),p.addScaledVector(h,ya.z),p)}static getInterpolatedAttribute(e,n,a,o,c,u){return Kd.setScalar(0),Jd.setScalar(0),Qd.setScalar(0),Kd.fromBufferAttribute(e,n),Jd.fromBufferAttribute(e,a),Qd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Kd,c.x),u.addScaledVector(Jd,c.y),u.addScaledVector(Qd,c.z),u}static isFrontFacing(e,n,a,o){return Ni.subVectors(a,n),Sa.subVectors(e,n),Ni.cross(Sa).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Ni.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return zi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;Ts.subVectors(o,a),Rs.subVectors(c,a),Wd.subVectors(e,a);const p=Ts.dot(Wd),m=Rs.dot(Wd);if(p<=0&&m<=0)return n.copy(a);Yd.subVectors(e,o);const g=Ts.dot(Yd),x=Rs.dot(Yd);if(g>=0&&x<=g)return n.copy(o);const v=p*x-g*m;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Ts,u);jd.subVectors(e,c);const M=Ts.dot(jd),A=Rs.dot(jd);if(A>=0&&M<=A)return n.copy(c);const D=M*m-p*A;if(D<=0&&m>=0&&A<=0)return h=m/(m-A),n.copy(a).addScaledVector(Rs,h);const E=g*A-M*x;if(E<=0&&x-g>=0&&M-A>=0)return $g.subVectors(c,o),h=(x-g)/(x-g+(M-A)),n.copy(o).addScaledVector($g,h);const S=1/(E+D+v);return u=D*S,h=v*S,n.copy(a).addScaledVector(Ts,u).addScaledVector(Rs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gl{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ui):Ui.fromBufferAttribute(c,u),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Oc.copy(a.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Pc.subVectors(this.max,ko),Cs.subVectors(e.a,ko),ws.subVectors(e.b,ko),Ls.subVectors(e.c,ko),ar.subVectors(ws,Cs),rr.subVectors(Ls,ws),Lr.subVectors(Cs,Ls);let n=[0,-ar.z,ar.y,0,-rr.z,rr.y,0,-Lr.z,Lr.y,ar.z,0,-ar.x,rr.z,0,-rr.x,Lr.z,0,-Lr.x,-ar.y,ar.x,0,-rr.y,rr.x,0,-Lr.y,Lr.x,0];return!$d(n,Cs,ws,Ls,Pc)||(n=[1,0,0,0,1,0,0,0,1],!$d(n,Cs,ws,Ls,Pc))?!1:(zc.crossVectors(ar,rr),n=[zc.x,zc.y,zc.z],$d(n,Cs,ws,Ls,Pc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ui=new Q,Oc=new gl,Cs=new Q,ws=new Q,Ls=new Q,ar=new Q,rr=new Q,Lr=new Q,ko=new Q,Pc=new Q,zc=new Q,Dr=new Q;function $d(s,e,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Dr.fromArray(s,c);const h=o.x*Math.abs(Dr.x)+o.y*Math.abs(Dr.y)+o.z*Math.abs(Dr.z),p=e.dot(Dr),m=n.dot(Dr),g=a.dot(Dr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const Sn=new Q,Fc=new Ye;let US=0;class Hi extends Gr{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:US++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=QM,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Fc.fromBufferAttribute(this,n),Fc.applyMatrix3(e),this.setXY(n,Fc.x,Fc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=zs(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),a=qn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),a=qn(a,this.array),o=qn(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),a=qn(a,this.array),o=qn(o,this.array),c=qn(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gv extends Hi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Zv extends Hi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class cn extends Hi{constructor(e,n,a){super(new Float32Array(e),n,a)}}const OS=new gl,Xo=new Q,eh=new Q;class Su{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):OS.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Xo,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(eh)),this.expandByPoint(Xo.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PS=0;const Ti=new an,th=new wn,Ds=new Q,di=new gl,Wo=new gl,Cn=new Q;class zn extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($M(e)?Zv:Gv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _t().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,n,a){return Ti.makeTranslation(e,n,a),this.applyMatrix4(Ti),this}scale(e,n,a){return Ti.makeScale(e,n,a),this.applyMatrix4(Ti),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cn(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];di.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const a=this.boundingSphere.center;if(di.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(di.min,Wo.min),di.expandByPoint(Cn),Cn.addVectors(di.max,Wo.max),di.expandByPoint(Cn)):(di.expandByPoint(Wo.min),di.expandByPoint(Wo.max))}di.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Cn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Cn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Cn.fromBufferAttribute(h,m),p&&(Ds.fromBufferAttribute(e,m),Cn.add(Ds)),o=Math.max(o,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Hi(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const h=[],p=[];for(let b=0;b<a.count;b++)h[b]=new Q,p[b]=new Q;const m=new Q,g=new Q,x=new Q,v=new Ye,M=new Ye,A=new Ye,D=new Q,E=new Q;function S(b,N,V){m.fromBufferAttribute(a,b),g.fromBufferAttribute(a,N),x.fromBufferAttribute(a,V),v.fromBufferAttribute(c,b),M.fromBufferAttribute(c,N),A.fromBufferAttribute(c,V),g.sub(m),x.sub(m),M.sub(v),A.sub(v);const q=1/(M.x*A.y-A.x*M.y);isFinite(q)&&(D.copy(g).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(q),E.copy(x).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(q),h[b].add(D),h[N].add(D),h[V].add(D),p[b].add(E),p[N].add(E),p[V].add(E))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let b=0,N=F.length;b<N;++b){const V=F[b],q=V.start,K=V.count;for(let ae=q,W=q+K;ae<W;ae+=3)S(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const I=new Q,R=new Q,P=new Q,O=new Q;function L(b){P.fromBufferAttribute(o,b),O.copy(P);const N=h[b];I.copy(N),I.sub(P.multiplyScalar(P.dot(N))).normalize(),R.crossVectors(O,N);const q=R.dot(p[b])<0?-1:1;u.setXYZW(b,I.x,I.y,I.z,q)}for(let b=0,N=F.length;b<N;++b){const V=F[b],q=V.start,K=V.count;for(let ae=q,W=q+K;ae<W;ae+=3)L(e.getX(ae+0)),L(e.getX(ae+1)),L(e.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,M=a.count;v<M;v++)a.setXYZ(v,0,0,0);const o=new Q,c=new Q,u=new Q,h=new Q,p=new Q,m=new Q,g=new Q,x=new Q;if(e)for(let v=0,M=e.count;v<M;v+=3){const A=e.getX(v+0),D=e.getX(v+1),E=e.getX(v+2);o.fromBufferAttribute(n,A),c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),h.fromBufferAttribute(a,A),p.fromBufferAttribute(a,D),m.fromBufferAttribute(a,E),h.add(g),p.add(g),m.add(g),a.setXYZ(A,h.x,h.y,h.z),a.setXYZ(D,p.x,p.y,p.z),a.setXYZ(E,m.x,m.y,m.z)}else for(let v=0,M=n.count;v<M;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Cn.fromBufferAttribute(e,n),Cn.normalize(),e.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,x=h.normalized,v=new m.constructor(p.length*g);let M=0,A=0;for(let D=0,E=p.length;D<E;D++){h.isInterleavedBufferAttribute?M=p[D]*h.data.stride+h.offset:M=p[D]*g;for(let S=0;S<g;S++)v[A++]=m[M++]}return new Hi(v,g,x)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,a);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,x=m.length;g<x;g++){const v=m[g],M=e(v,a);p.push(M)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,v=m.length;x<v;x++){const M=m[x];g.push(M.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],x=c[m];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new Q,zS=new Q,FS=new _t;class lr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=nh.subVectors(a,n).cross(zS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(nh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||FS.getNormalMatrix(e),o=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let IS=0;class Ys extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=tl,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yv,this.blendDst=Ev,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Id,this.stencilZFail=Id,this.stencilZPass=Id,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){pt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new lr().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Ye().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ba=new Q,ih=new Q,Ic=new Q,Hc=new Q;class w0{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ba.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,n),ba.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){ih.copy(e).add(n).multiplyScalar(.5),Ic.copy(n).sub(e).normalize(),Hc.copy(this.origin).sub(ih);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Ic),h=Hc.dot(this.direction),p=-Hc.dot(Ic),m=Hc.lengthSq(),g=Math.abs(1-u*u);let x,v,M,A;if(g>0)if(x=u*p-h,v=u*h-p,A=c*g,x>=0)if(v>=-A)if(v<=A){const D=1/g;x*=D,v*=D,M=x*(x+u*v+2*h)+v*(u*x+v+2*p)+m}else v=c,x=Math.max(0,-(u*v+h)),M=-x*x+v*(v+2*p)+m;else v=-c,x=Math.max(0,-(u*v+h)),M=-x*x+v*(v+2*p)+m;else v<=-A?(x=Math.max(0,-(-u*c+h)),v=x>0?-c:Math.min(Math.max(-c,-p),c),M=-x*x+v*(v+2*p)+m):v<=A?(x=0,v=Math.min(Math.max(-c,-p),c),M=v*(v+2*p)+m):(x=Math.max(0,-(u*c+h)),v=x>0?c:Math.min(Math.max(-c,-p),c),M=-x*x+v*(v+2*p)+m);else v=u>0?-c:c,x=Math.max(0,-(u*v+h)),M=-x*x+v*(v+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(ih).addScaledVector(Ic,v),M}intersectSphere(e,n){if(e.radius<0)return null;ba.subVectors(e.center,this.origin);const a=ba.dot(this.direction),o=ba.dot(ba)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(a=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(a=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),x>=0?(h=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(h=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,n,a,o,c){const u=this.origin,h=this.direction,p=h.x,m=h.y,g=h.z,x=e.x-u.x,v=e.y-u.y,M=e.z-u.z,A=n.x-u.x,D=n.y-u.y,E=n.z-u.z,S=a.x-u.x,F=a.y-u.y,I=a.z-u.z,R=Math.abs(p),P=Math.abs(m),O=Math.abs(g);let L,b,N,V,q,K,ae,W,J,B,G,oe;if(R>=P&&R>=O?(N=p,K=x,J=A,oe=S,p>=0?(L=m,b=g,V=v,q=M,ae=D,W=E,B=F,G=I):(L=g,b=m,V=M,q=v,ae=E,W=D,B=I,G=F)):P>=O?(N=m,K=v,J=D,oe=F,m>=0?(L=g,b=p,V=M,q=x,ae=E,W=A,B=I,G=S):(L=p,b=g,V=x,q=M,ae=A,W=E,B=S,G=I)):(N=g,K=M,J=E,oe=I,g>=0?(L=p,b=m,V=x,q=v,ae=A,W=D,B=S,G=F):(L=m,b=p,V=v,q=x,ae=D,W=A,B=F,G=S)),N===0)return null;const re=L/N,pe=b/N,U=1/N,ie=V-re*K,ve=q-pe*K,Oe=ae-re*J,Ue=W-pe*J,ke=B-re*oe,se=G-pe*oe,_e=ke*Ue-se*Oe,Ne=ie*se-ve*ke,ot=Oe*ve-Ue*ie;if(o){if(_e<0||Ne<0||ot<0)return null}else if((_e<0||Ne<0||ot<0)&&(_e>0||Ne>0||ot>0))return null;const qe=_e+Ne+ot;if(qe===0)return null;const ut=U*(_e*K+Ne*J+ot*oe);return(qe>0?ut<0:ut>0)?null:this.at(ut/qe,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pu extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const e2=new an,Nr=new w0,Bc=new Su,t2=new Q,Vc=new Q,Gc=new Q,Zc=new Q,ah=new Q,qc=new Q,n2=new Q,kc=new Q;class bn extends wn{constructor(e=new zn,n=new pu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){qc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],x=c[p];g!==0&&(ah.fromBufferAttribute(x,e),u?qc.addScaledVector(ah,g):qc.addScaledVector(ah.sub(n),g))}n.add(qc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(c),Nr.copy(e.ray).recast(e.near),!(Bc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Bc,t2)===null||Nr.origin.distanceToSquared(t2)>(e.far-e.near)**2))&&(e2.copy(c).invert(),Nr.copy(e.ray).applyMatrix4(e2),!(a.boundingBox!==null&&Nr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(u))for(let A=0,D=v.length;A<D;A++){const E=v[A],S=u[E.materialIndex],F=Math.max(E.start,M.start),I=Math.min(h.count,Math.min(E.start+E.count,M.start+M.count));for(let R=F,P=I;R<P;R+=3){const O=h.getX(R),L=h.getX(R+1),b=h.getX(R+2);o=Xc(this,S,e,a,m,g,x,O,L,b),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=E.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let E=A,S=D;E<S;E+=3){const F=h.getX(E),I=h.getX(E+1),R=h.getX(E+2);o=Xc(this,u,e,a,m,g,x,F,I,R),o&&(o.faceIndex=Math.floor(E/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,D=v.length;A<D;A++){const E=v[A],S=u[E.materialIndex],F=Math.max(E.start,M.start),I=Math.min(p.count,Math.min(E.start+E.count,M.start+M.count));for(let R=F,P=I;R<P;R+=3){const O=R,L=R+1,b=R+2;o=Xc(this,S,e,a,m,g,x,O,L,b),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=E.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),D=Math.min(p.count,M.start+M.count);for(let E=A,S=D;E<S;E+=3){const F=E,I=E+1,R=E+2;o=Xc(this,u,e,a,m,g,x,F,I,R),o&&(o.faceIndex=Math.floor(E/3),n.push(o))}}}}function HS(s,e,n,a,o,c,u,h){let p;if(e.side===ti?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,e.side===Ir,h),p===null)return null;kc.copy(h),kc.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(kc);return m<n.near||m>n.far?null:{distance:m,point:kc.clone(),object:s}}function Xc(s,e,n,a,o,c,u,h,p,m){s.getVertexPosition(h,Vc),s.getVertexPosition(p,Gc),s.getVertexPosition(m,Zc);const g=HS(s,e,n,a,Vc,Gc,Zc,n2);if(g){const x=new Q;zi.getBarycoord(n2,Vc,Gc,Zc,x),o&&(g.uv=zi.getInterpolatedAttribute(o,h,p,m,x,new Ye)),c&&(g.uv1=zi.getInterpolatedAttribute(c,h,p,m,x,new Ye)),u&&(g.normal=zi.getInterpolatedAttribute(u,h,p,m,x,new Q),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Q,materialIndex:0};zi.getNormal(Vc,Gc,Zc,v.normal),g.face=v,g.barycoord=x}return g}class BS extends Xn{constructor(e=null,n=1,a=1,o,c,u,h,p,m=Pn,g=Pn,x,v){super(null,u,h,p,m,g,o,c,x,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ur=new Su,VS=new Ye(.5,.5),Wc=new Q;class L0{constructor(e=new lr,n=new lr,a=new lr,o=new lr,c=new lr,u=new lr){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Ki,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],m=c[3],g=c[4],x=c[5],v=c[6],M=c[7],A=c[8],D=c[9],E=c[10],S=c[11],F=c[12],I=c[13],R=c[14],P=c[15];if(o[0].setComponents(m-u,M-g,S-A,P-F).normalize(),o[1].setComponents(m+u,M+g,S+A,P+F).normalize(),o[2].setComponents(m+h,M+x,S+D,P+I).normalize(),o[3].setComponents(m-h,M-x,S-D,P-I).normalize(),a)o[4].setComponents(p,v,E,R).normalize(),o[5].setComponents(m-p,M-v,S-E,P-R).normalize();else if(o[4].setComponents(m-p,M-v,S-E,P-R).normalize(),n===Ki)o[5].setComponents(m+p,M+v,S+E,P+R).normalize();else if(n===ul)o[5].setComponents(p,v,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const n=VS.distanceTo(e.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Wc.x=o.normal.x>0?e.max.x:e.min.x,Wc.y=o.normal.y>0?e.max.y:e.min.y,Wc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qv extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const i2=new an,s0=new w0,Yc=new Su,jc=new Q;class GS extends wn{constructor(e=new zn,n=new qv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Yc.copy(a.boundingSphere),Yc.applyMatrix4(o),Yc.radius+=c,e.ray.intersectsSphere(Yc)===!1)return;i2.copy(o).invert(),s0.copy(e.ray).applyMatrix4(i2);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=a.index,x=a.attributes.position;if(m!==null){const v=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let A=v,D=M;A<D;A++){const E=m.getX(A);jc.fromBufferAttribute(x,E),a2(jc,E,p,o,e,n,this)}}else{const v=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let A=v,D=M;A<D;A++)jc.fromBufferAttribute(x,A),a2(jc,A,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function a2(s,e,n,a,o,c,u){const h=s0.distanceSqToPoint(s);if(h<n){const p=new Q;s0.closestPointToPoint(s,p),p.applyMatrix4(a);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class kv extends Xn{constructor(e=[],n=Hr,a,o,c,u,h,p,m,g){super(e,n,a,o,c,u,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dl extends Xn{constructor(e,n,a=Qi,o,c,u,h=Pn,p=Pn,m,g=Ca,x=1){if(g!==Ca&&g!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:x};super(v,o,c,u,h,p,g,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new R0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class ZS extends dl{constructor(e,n=Qi,a=Hr,o,c,u=Pn,h=Pn,p,m=Ca){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,n,a,o,c,u,h,p,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xv extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends zn{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],g=[],x=[];let v=0,M=0;A("z","y","x",-1,-1,a,n,e,u,c,0),A("z","y","x",1,-1,a,n,-e,u,c,1),A("x","z","y",1,1,e,a,n,o,u,2),A("x","z","y",1,-1,e,a,-n,o,u,3),A("x","y","z",1,-1,e,n,a,o,c,4),A("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(x,2));function A(D,E,S,F,I,R,P,O,L,b,N){const V=R/L,q=P/b,K=R/2,ae=P/2,W=O/2,J=L+1,B=b+1;let G=0,oe=0;const re=new Q;for(let pe=0;pe<B;pe++){const U=pe*q-ae;for(let ie=0;ie<J;ie++){const ve=ie*V-K;re[D]=ve*F,re[E]=U*I,re[S]=W,m.push(re.x,re.y,re.z),re[D]=0,re[E]=0,re[S]=O>0?1:-1,g.push(re.x,re.y,re.z),x.push(ie/L),x.push(1-pe/b),G+=1}}for(let pe=0;pe<b;pe++)for(let U=0;U<L;U++){const ie=v+U+J*pe,ve=v+U+J*(pe+1),Oe=v+(U+1)+J*(pe+1),Ue=v+(U+1)+J*pe;p.push(ie,ve,Ue),p.push(ve,Oe,Ue),oe+=6}h.addGroup(M,oe,N),M+=oe,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gu extends zn{constructor(e=1,n=1,a=1,o=32,c=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const g=[],x=[],v=[],M=[];let A=0;const D=[],E=a/2;let S=0;F(),u===!1&&(e>0&&I(!0),n>0&&I(!1)),this.setIndex(g),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(M,2));function F(){const R=new Q,P=new Q;let O=0;const L=(n-e)/a;for(let b=0;b<=c;b++){const N=[],V=b/c,q=V*(n-e)+e;for(let K=0;K<=o;K++){const ae=K/o,W=ae*p+h,J=Math.sin(W),B=Math.cos(W);P.x=q*J,P.y=-V*a+E,P.z=q*B,x.push(P.x,P.y,P.z),R.set(J,L,B).normalize(),v.push(R.x,R.y,R.z),M.push(ae,1-V),N.push(A++)}D.push(N)}for(let b=0;b<o;b++)for(let N=0;N<c;N++){const V=D[N][b],q=D[N+1][b],K=D[N+1][b+1],ae=D[N][b+1];(e>0||N!==0)&&(g.push(V,q,ae),O+=3),(n>0||N!==c-1)&&(g.push(q,K,ae),O+=3)}m.addGroup(S,O,0),S+=O}function I(R){const P=A,O=new Ye,L=new Q;let b=0;const N=R===!0?e:n,V=R===!0?1:-1;for(let K=1;K<=o;K++)x.push(0,E*V,0),v.push(0,V,0),M.push(.5,.5),A++;const q=A;for(let K=0;K<=o;K++){const W=K/o*p+h,J=Math.cos(W),B=Math.sin(W);L.x=N*B,L.y=E*V,L.z=N*J,x.push(L.x,L.y,L.z),v.push(0,V,0),O.x=J*.5+.5,O.y=B*.5*V+.5,M.push(O.x,O.y),A++}for(let K=0;K<o;K++){const ae=P+K,W=q+K;R===!0?g.push(W,W+1,ae):g.push(W+1,W,ae),b+=3}m.addGroup(S,b,R===!0?1:2),S+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ta{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pt("Curve: .getPoint() not implemented.")}getPointAt(e,n){const a=this.getUtoTmapping(e);return this.getPoint(a,n)}getPoints(e=5){const n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return n}getSpacedPoints(e=5){const n=[];for(let a=0;a<=e;a++)n.push(this.getPointAt(a/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=e;u++)a=this.getPoint(u/e),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=e*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=a[o]-u,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,a[o]===u)return o/(c-1);const g=a[o],v=a[o+1]-g,M=(u-g)/v;return(o+M)/(c-1)}getTangent(e,n){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),p=n||(u.isVector2?new Ye:new Q);return p.copy(h).sub(u).normalize(),p}getTangentAt(e,n){const a=this.getUtoTmapping(e);return this.getTangent(a,n)}computeFrenetFrames(e,n=!1){const a=new Q,o=[],c=[],u=[],h=new Q,p=new an;for(let M=0;M<=e;M++){const A=M/e;o[M]=this.getTangentAt(A,new Q)}c[0]=new Q,u[0]=new Q;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=m&&(m=g,a.set(1,0,0)),x<=m&&(m=x,a.set(0,1,0)),v<=m&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let M=1;M<=e;M++){if(c[M]=c[M-1].clone(),u[M]=u[M-1].clone(),h.crossVectors(o[M-1],o[M]),h.length()>Number.EPSILON){h.normalize();const A=Math.acos(Tt(o[M-1].dot(o[M]),-1,1));c[M].applyMatrix4(p.makeRotationAxis(h,A))}u[M].crossVectors(o[M],c[M])}if(n===!0){let M=Math.acos(Tt(c[0].dot(c[e]),-1,1));M/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(M=-M);for(let A=1;A<=e;A++)c[A].applyMatrix4(p.makeRotationAxis(o[A],M*A)),u[A].crossVectors(o[A],c[A])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class D0 extends ta{constructor(e=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=p}getPoint(e,n=new Ye){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),x=Math.sin(this.aRotation),v=p-this.aX,M=m-this.aY;p=v*g-M*x+this.aX,m=v*x+M*g+this.aY}return a.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qS extends D0{constructor(e,n,a,o,c,u){super(e,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function N0(){let s=0,e=0,n=0,a=0;function o(c,u,h,p){s=c,e=h,n=-3*c+3*u-2*h-p,a=2*c-2*u+h+p}return{initCatmullRom:function(c,u,h,p,m){o(u,h,m*(h-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,h,p,m,g,x){let v=(u-c)/m-(h-c)/(m+g)+(h-u)/g,M=(h-u)/g-(p-u)/(g+x)+(p-h)/x;v*=g,M*=g,o(u,h,v,M)},calc:function(c){const u=c*c,h=u*c;return s+e*c+n*u+a*h}}}const r2=new Q,s2=new Q,rh=new N0,sh=new N0,oh=new N0;class Wv extends ta{constructor(e=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=a,this.tension=o}getPoint(e,n=new Q){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),p=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=o[(h-1)%c]:(s2.subVectors(o[0],o[1]).add(o[0]),m=s2);const x=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(r2.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=r2),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let A=Math.pow(m.distanceToSquared(x),M),D=Math.pow(x.distanceToSquared(v),M),E=Math.pow(v.distanceToSquared(g),M);D<1e-4&&(D=1),A<1e-4&&(A=D),E<1e-4&&(E=D),rh.initNonuniformCatmullRom(m.x,x.x,v.x,g.x,A,D,E),sh.initNonuniformCatmullRom(m.y,x.y,v.y,g.y,A,D,E),oh.initNonuniformCatmullRom(m.z,x.z,v.z,g.z,A,D,E)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(m.x,x.x,v.x,g.x,this.tension),sh.initCatmullRom(m.y,x.y,v.y,g.y,this.tension),oh.initCatmullRom(m.z,x.z,v.z,g.z,this.tension));return a.set(rh.calc(p),sh.calc(p),oh.calc(p)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(new Q().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function o2(s,e,n,a,o){const c=(a-e)*.5,u=(o-n)*.5,h=s*s,p=s*h;return(2*n-2*a+c+u)*p+(-3*n+3*a-2*c-u)*h+c*s+n}function kS(s,e){const n=1-s;return n*n*e}function XS(s,e){return 2*(1-s)*s*e}function WS(s,e){return s*s*e}function al(s,e,n,a){return kS(s,e)+XS(s,n)+WS(s,a)}function YS(s,e){const n=1-s;return n*n*n*e}function jS(s,e){const n=1-s;return 3*n*n*s*e}function KS(s,e){return 3*(1-s)*s*s*e}function JS(s,e){return s*s*s*e}function rl(s,e,n,a,o){return YS(s,e)+jS(s,n)+KS(s,a)+JS(s,o)}class Yv extends ta{constructor(e=new Ye,n=new Ye,a=new Ye,o=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=a,this.v3=o}getPoint(e,n=new Ye){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(rl(e,o.x,c.x,u.x,h.x),rl(e,o.y,c.y,u.y,h.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QS extends ta{constructor(e=new Q,n=new Q,a=new Q,o=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=a,this.v3=o}getPoint(e,n=new Q){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(rl(e,o.x,c.x,u.x,h.x),rl(e,o.y,c.y,u.y,h.y),rl(e,o.z,c.z,u.z,h.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jv extends ta{constructor(e=new Ye,n=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ye){const a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $S extends ta{constructor(e=new Q,n=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new Q){const a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Q){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kv extends ta{constructor(e=new Ye,n=new Ye,a=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new Ye){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(al(e,o.x,c.x,u.x),al(e,o.y,c.y,u.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jv extends ta{constructor(e=new Q,n=new Q,a=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new Q){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(al(e,o.x,c.x,u.x),al(e,o.y,c.y,u.y),al(e,o.z,c.z,u.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qv extends ta{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ye){const a=n,o=this.points,c=(o.length-1)*e,u=Math.floor(c),h=c-u,p=o[u===0?u:u-1],m=o[u],g=o[u>o.length-2?o.length-1:u+1],x=o[u>o.length-3?o.length-1:u+2];return a.set(o2(h,p.x,m.x,g.x,x.x),o2(h,p.y,m.y,g.y,x.y)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(new Ye().fromArray(o))}return this}}var vu=Object.freeze({__proto__:null,ArcCurve:qS,CatmullRomCurve3:Wv,CubicBezierCurve:Yv,CubicBezierCurve3:QS,EllipseCurve:D0,LineCurve:jv,LineCurve3:$S,QuadraticBezierCurve:Kv,QuadraticBezierCurve3:Jv,SplineCurve:Qv});class ey extends ta{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const a=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vu[a](n,e))}return this}getPoint(e,n){const a=e*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,h=this.curves[c],p=h.getLength(),m=p===0?0:1-u/p;return h.getPointAt(m,n)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],h=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,p=u.getPoints(h);for(let m=0;m<p.length;m++){const g=p[m];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,a=e.curves.length;n<a;n++){const o=e.curves[n];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,a=e.curves.length;n<a;n++){const o=e.curves[n];this.curves.push(new vu[o.type]().fromJSON(o))}return this}}class l2 extends ey{constructor(e){super(),this.type="Path",this.currentPoint=new Ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,a=e.length;n<a;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const a=new jv(this.currentPoint.clone(),new Ye(e,n));return this.curves.push(a),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,a,o){const c=new Kv(this.currentPoint.clone(),new Ye(e,n),new Ye(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(e,n,a,o,c,u){const h=new Yv(this.currentPoint.clone(),new Ye(e,n),new Ye(a,o),new Ye(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),a=new Qv(n);return this.curves.push(a),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,a,o,c,u){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+h,n+p,a,o,c,u),this}absarc(e,n,a,o,c,u){return this.absellipse(e,n,a,a,o,c,u),this}ellipse(e,n,a,o,c,u,h,p){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+m,n+g,a,o,c,u,h,p),this}absellipse(e,n,a,o,c,u,h,p){const m=new D0(e,n,a,o,c,u,h,p);if(this.curves.length>0){const x=m.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $v extends l2{constructor(e){super(e),this.uuid=Zr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,a=e.holes.length;n<a;n++){const o=e.holes[n];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,a=e.holes.length;n<a;n++){const o=e.holes[n];this.holes.push(new l2().fromJSON(o))}return this}}function ty(s,e,n=2){const a=e&&e.length,o=a?e[0]*n:s.length;let c=e_(s,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,p,m;if(a&&(c=sy(s,e,c,n)),s.length>80*n){h=s[0],p=s[1];let g=h,x=p;for(let v=n;v<o;v+=n){const M=s[v],A=s[v+1];M<h&&(h=M),A<p&&(p=A),M>g&&(g=M),A>x&&(x=A)}m=Math.max(g-h,x-p),m=m!==0?32767/m:0}return hl(c,u,n,h,p,m,0),u}function e_(s,e,n,a,o){let c;if(o===vy(s,e,n,a)>0)for(let u=e;u<n;u+=a)c=c2(u/a|0,s[u],s[u+1],c);else for(let u=n-a;u>=e;u-=a)c=c2(u/a|0,s[u],s[u+1],c);return c&&ks(c,c.next)&&(pl(c),c=c.next),c}function Vr(s,e){if(!s)return s;e||(e=s);let n=s,a;do if(a=!1,!n.steiner&&(ks(n,n.next)||ln(n.prev,n,n.next)===0)){if(pl(n),n=e=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==e);return e}function hl(s,e,n,a,o,c,u){if(!s)return;!u&&c&&fy(s,a,o,c);let h=s;for(;s.prev!==s.next;){const p=s.prev,m=s.next;if(c?iy(s,a,o,c):ny(s)){e.push(p.i,s.i,m.i),pl(s),s=m.next,h=m.next;continue}if(s=m,s===h){u?u===1?(s=ay(Vr(s),e),hl(s,e,n,a,o,c,2)):u===2&&ry(s,e,n,a,o,c):hl(Vr(s),e,n,a,o,c,1);break}}}function ny(s){const e=s.prev,n=s,a=s.next;if(ln(e,n,a)>=0)return!1;const o=e.x,c=n.x,u=a.x,h=e.y,p=n.y,m=a.y,g=Math.min(o,c,u),x=Math.min(h,p,m),v=Math.max(o,c,u),M=Math.max(h,p,m);let A=a.next;for(;A!==e;){if(A.x>=g&&A.x<=v&&A.y>=x&&A.y<=M&&$o(o,h,c,p,u,m,A.x,A.y)&&ln(A.prev,A,A.next)>=0)return!1;A=A.next}return!0}function iy(s,e,n,a){const o=s.prev,c=s,u=s.next;if(ln(o,c,u)>=0)return!1;const h=o.x,p=c.x,m=u.x,g=o.y,x=c.y,v=u.y,M=Math.min(h,p,m),A=Math.min(g,x,v),D=Math.max(h,p,m),E=Math.max(g,x,v),S=o0(M,A,e,n,a),F=o0(D,E,e,n,a);let I=s.prevZ,R=s.nextZ;for(;I&&I.z>=S&&R&&R.z<=F;){if(I.x>=M&&I.x<=D&&I.y>=A&&I.y<=E&&I!==o&&I!==u&&$o(h,g,p,x,m,v,I.x,I.y)&&ln(I.prev,I,I.next)>=0||(I=I.prevZ,R.x>=M&&R.x<=D&&R.y>=A&&R.y<=E&&R!==o&&R!==u&&$o(h,g,p,x,m,v,R.x,R.y)&&ln(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;I&&I.z>=S;){if(I.x>=M&&I.x<=D&&I.y>=A&&I.y<=E&&I!==o&&I!==u&&$o(h,g,p,x,m,v,I.x,I.y)&&ln(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;R&&R.z<=F;){if(R.x>=M&&R.x<=D&&R.y>=A&&R.y<=E&&R!==o&&R!==u&&$o(h,g,p,x,m,v,R.x,R.y)&&ln(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function ay(s,e){let n=s;do{const a=n.prev,o=n.next.next;!ks(a,o)&&n_(a,n,n.next,o)&&ml(a,o)&&ml(o,a)&&(e.push(a.i,n.i,o.i),pl(n),pl(n.next),n=s=o),n=n.next}while(n!==s);return Vr(n)}function ry(s,e,n,a,o,c){let u=s;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&my(u,h)){let p=i_(u,h);u=Vr(u,u.next),p=Vr(p,p.next),hl(u,e,n,a,o,c,0),hl(p,e,n,a,o,c,0);return}h=h.next}u=u.next}while(u!==s)}function sy(s,e,n,a){const o=[];for(let c=0,u=e.length;c<u;c++){const h=e[c]*a,p=c<u-1?e[c+1]*a:s.length,m=e_(s,h,p,a,!1);m===m.next&&(m.steiner=!0),o.push(hy(m))}o.sort(oy);for(let c=0;c<o.length;c++)n=ly(o[c],n);return n}function oy(s,e){let n=s.x-e.x;if(n===0&&(n=s.y-e.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);n=a-o}return n}function ly(s,e){const n=cy(s,e);if(!n)return e;const a=i_(n,s);return Vr(a,a.next),Vr(n,n.next)}function cy(s,e){let n=e;const a=s.x,o=s.y;let c=-1/0,u;if(ks(s,n))return n;do{if(ks(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const x=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(x<=a&&x>c&&(c=x,u=n.x<n.next.x?n:n.next,x===a))return u}n=n.next}while(n!==e);if(!u)return null;const h=u,p=u.x,m=u.y;let g=1/0;n=u;do{if(a>=n.x&&n.x>=p&&a!==n.x&&t_(o<m?a:c,o,p,m,o<m?c:a,o,n.x,n.y)){const x=Math.abs(o-n.y)/(a-n.x);ml(n,s)&&(x<g||x===g&&(n.x>u.x||n.x===u.x&&uy(u,n)))&&(u=n,g=x)}n=n.next}while(n!==h);return u}function uy(s,e){return ln(s.prev,s,e.prev)<0&&ln(e.next,s,s.next)<0}function fy(s,e,n,a){let o=s;do o.z===0&&(o.z=o0(o.x,o.y,e,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,dy(o)}function dy(s){let e,n=1;do{let a=s,o;s=null;let c=null;for(e=0;a;){e++;let u=a,h=0;for(let m=0;m<n&&(h++,u=u.nextZ,!!u);m++);let p=n;for(;h>0||p>0&&u;)h!==0&&(p===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,h--):(o=u,u=u.nextZ,p--),c?c.nextZ=o:s=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(e>1);return s}function o0(s,e,n,a,o){return s=(s-n)*o|0,e=(e-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function hy(s){let e=s,n=s;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==s);return n}function t_(s,e,n,a,o,c,u,h){return(o-u)*(e-h)>=(s-u)*(c-h)&&(s-u)*(a-h)>=(n-u)*(e-h)&&(n-u)*(c-h)>=(o-u)*(a-h)}function $o(s,e,n,a,o,c,u,h){return!(s===u&&e===h)&&t_(s,e,n,a,o,c,u,h)}function my(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!py(s,e)&&(ml(s,e)&&ml(e,s)&&gy(s,e)&&(ln(s.prev,s,e.prev)||ln(s,e.prev,e))||ks(s,e)&&ln(s.prev,s,s.next)>0&&ln(e.prev,e,e.next)>0)}function ln(s,e,n){return(e.y-s.y)*(n.x-e.x)-(e.x-s.x)*(n.y-e.y)}function ks(s,e){return s.x===e.x&&s.y===e.y}function n_(s,e,n,a){const o=Jc(ln(s,e,n)),c=Jc(ln(s,e,a)),u=Jc(ln(n,a,s)),h=Jc(ln(n,a,e));return!!(o!==c&&u!==h||o===0&&Kc(s,n,e)||c===0&&Kc(s,a,e)||u===0&&Kc(n,s,a)||h===0&&Kc(n,e,a))}function Kc(s,e,n){return e.x<=Math.max(s.x,n.x)&&e.x>=Math.min(s.x,n.x)&&e.y<=Math.max(s.y,n.y)&&e.y>=Math.min(s.y,n.y)}function Jc(s){return s>0?1:s<0?-1:0}function py(s,e){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==e.i&&n.next.i!==e.i&&n_(n,n.next,s,e))return!0;n=n.next}while(n!==s);return!1}function ml(s,e){return ln(s.prev,s,s.next)<0?ln(s,e,s.next)>=0&&ln(s,s.prev,e)>=0:ln(s,e,s.prev)<0||ln(s,s.next,e)<0}function gy(s,e){let n=s,a=!1;const o=(s.x+e.x)/2,c=(s.y+e.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function i_(s,e){const n=l0(s.i,s.x,s.y),a=l0(e.i,e.x,e.y),o=s.next,c=e.prev;return s.next=e,e.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function c2(s,e,n,a){const o=l0(s,e,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function pl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function l0(s,e,n){return{i:s,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vy(s,e,n,a){let o=0;for(let c=e,u=n-a;c<n;c+=a)o+=(s[u]-s[c])*(s[c+1]+s[u+1]),u=c;return o}class _y{static triangulate(e,n,a=2){return ty(e,n,a)}}class Hs{static area(e){const n=e.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=e[o].x*e[c].y-e[c].x*e[o].y;return a*.5}static isClockWise(e){return Hs.area(e)<0}static triangulateShape(e,n){const a=[],o=[],c=[];u2(e),f2(a,e);let u=e.length;n.forEach(u2);for(let p=0;p<n.length;p++)o.push(u),u+=n[p].length,f2(a,n[p]);const h=_y.triangulate(a,o);for(let p=0;p<h.length;p+=3)c.push(h.slice(p,p+3));return c}}function u2(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function f2(s,e){for(let n=0;n<e.length;n++)s.push(e[n].x),s.push(e[n].y)}class U0 extends zn{constructor(e=new $v([new Ye(.5,.5),new Ye(-.5,.5),new Ye(-.5,-.5),new Ye(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const a=this,o=[],c=[];for(let h=0,p=e.length;h<p;h++){const m=e[h];u(m)}this.setAttribute("position",new cn(o,3)),this.setAttribute("uv",new cn(c,2)),this.computeVertexNormals();function u(h){const p=[],m=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,x=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,M=n.bevelThickness!==void 0?n.bevelThickness:.2,A=n.bevelSize!==void 0?n.bevelSize:M-.1,D=n.bevelOffset!==void 0?n.bevelOffset:0,E=n.bevelSegments!==void 0?n.bevelSegments:3;const S=n.extrudePath,F=n.UVGenerator!==void 0?n.UVGenerator:xy;let I,R=!1,P,O,L,b;if(S){I=S.getSpacedPoints(g),R=!0,v=!1;const be=S.isCatmullRomCurve3?S.closed:!1;P=S.computeFrenetFrames(g,be),O=new Q,L=new Q,b=new Q}v||(E=0,M=0,A=0,D=0);const N=h.extractPoints(m);let V=N.shape;const q=N.holes;if(!Hs.isClockWise(V)){V=V.reverse();for(let be=0,Le=q.length;be<Le;be++){const Pe=q[be];Hs.isClockWise(Pe)&&(q[be]=Pe.reverse())}}function ae(be){const Pe=10000000000000001e-36;let ze=be[0];for(let ee=1;ee<=be.length;ee++){const Fe=ee%be.length,nt=be[Fe],ct=nt.x-ze.x,ht=nt.y-ze.y,X=ct*ct+ht*ht,ft=Math.max(Math.abs(nt.x),Math.abs(nt.y),Math.abs(ze.x),Math.abs(ze.y)),gt=Pe*ft*ft;if(X<=gt){be.splice(Fe,1),ee--;continue}ze=nt}}ae(V),q.forEach(ae);const W=q.length,J=V;for(let be=0;be<W;be++){const Le=q[be];V=V.concat(Le)}function B(be,Le,Pe){return Le||zt("ExtrudeGeometry: vec does not exist"),be.clone().addScaledVector(Le,Pe)}const G=V.length;function oe(be,Le,Pe){let ze,ee,Fe;const nt=be.x-Le.x,ct=be.y-Le.y,ht=Pe.x-be.x,X=Pe.y-be.y,ft=nt*nt+ct*ct,gt=nt*X-ct*ht;if(Math.abs(gt)>Number.EPSILON){const z=Math.sqrt(ft),T=Math.sqrt(ht*ht+X*X),te=Le.x-ct/z,fe=Le.y+nt/z,ye=Pe.x-X/T,He=Pe.y+ht/T,Ve=((ye-te)*X-(He-fe)*ht)/(nt*X-ct*ht);ze=te+nt*Ve-be.x,ee=fe+ct*Ve-be.y;const Se=ze*ze+ee*ee;if(Se<=2)return new Ye(ze,ee);Fe=Math.sqrt(Se/2)}else{let z=!1;nt>Number.EPSILON?ht>Number.EPSILON&&(z=!0):nt<-Number.EPSILON?ht<-Number.EPSILON&&(z=!0):Math.sign(ct)===Math.sign(X)&&(z=!0),z?(ze=-ct,ee=nt,Fe=Math.sqrt(ft)):(ze=nt,ee=ct,Fe=Math.sqrt(ft/2))}return new Ye(ze/Fe,ee/Fe)}const re=[];for(let be=0,Le=J.length,Pe=Le-1,ze=be+1;be<Le;be++,Pe++,ze++)Pe===Le&&(Pe=0),ze===Le&&(ze=0),re[be]=oe(J[be],J[Pe],J[ze]);const pe=[];let U,ie=re.concat();for(let be=0,Le=W;be<Le;be++){const Pe=q[be];U=[];for(let ze=0,ee=Pe.length,Fe=ee-1,nt=ze+1;ze<ee;ze++,Fe++,nt++)Fe===ee&&(Fe=0),nt===ee&&(nt=0),U[ze]=oe(Pe[ze],Pe[Fe],Pe[nt]);pe.push(U),ie=ie.concat(U)}let ve;if(E===0)ve=Hs.triangulateShape(J,q);else{const be=[],Le=[];for(let Pe=0;Pe<E;Pe++){const ze=Pe/E,ee=M*Math.cos(ze*Math.PI/2),Fe=A*Math.sin(ze*Math.PI/2)+D;for(let nt=0,ct=J.length;nt<ct;nt++){const ht=B(J[nt],re[nt],Fe);Ne(ht.x,ht.y,-ee),ze===0&&be.push(ht)}for(let nt=0,ct=W;nt<ct;nt++){const ht=q[nt];U=pe[nt];const X=[];for(let ft=0,gt=ht.length;ft<gt;ft++){const z=B(ht[ft],U[ft],Fe);Ne(z.x,z.y,-ee),ze===0&&X.push(z)}ze===0&&Le.push(X)}}ve=Hs.triangulateShape(be,Le)}const Oe=ve.length,Ue=A+D;for(let be=0;be<G;be++){const Le=v?B(V[be],ie[be],Ue):V[be];R?(L.copy(P.normals[0]).multiplyScalar(Le.x),O.copy(P.binormals[0]).multiplyScalar(Le.y),b.copy(I[0]).add(L).add(O),Ne(b.x,b.y,b.z)):Ne(Le.x,Le.y,0)}for(let be=1;be<=g;be++)for(let Le=0;Le<G;Le++){const Pe=v?B(V[Le],ie[Le],Ue):V[Le];R?(L.copy(P.normals[be]).multiplyScalar(Pe.x),O.copy(P.binormals[be]).multiplyScalar(Pe.y),b.copy(I[be]).add(L).add(O),Ne(b.x,b.y,b.z)):Ne(Pe.x,Pe.y,x/g*be)}for(let be=E-1;be>=0;be--){const Le=be/E,Pe=M*Math.cos(Le*Math.PI/2),ze=A*Math.sin(Le*Math.PI/2)+D;for(let ee=0,Fe=J.length;ee<Fe;ee++){const nt=B(J[ee],re[ee],ze);Ne(nt.x,nt.y,x+Pe)}for(let ee=0,Fe=q.length;ee<Fe;ee++){const nt=q[ee];U=pe[ee];for(let ct=0,ht=nt.length;ct<ht;ct++){const X=B(nt[ct],U[ct],ze);R?Ne(X.x,X.y+I[g-1].y,I[g-1].x+Pe):Ne(X.x,X.y,x+Pe)}}}ke(),se();function ke(){const be=o.length/3;if(v){let Le=0,Pe=G*Le;for(let ze=0;ze<Oe;ze++){const ee=ve[ze];ot(ee[2]+Pe,ee[1]+Pe,ee[0]+Pe)}Le=g+E*2,Pe=G*Le;for(let ze=0;ze<Oe;ze++){const ee=ve[ze];ot(ee[0]+Pe,ee[1]+Pe,ee[2]+Pe)}}else{for(let Le=0;Le<Oe;Le++){const Pe=ve[Le];ot(Pe[2],Pe[1],Pe[0])}for(let Le=0;Le<Oe;Le++){const Pe=ve[Le];ot(Pe[0]+G*g,Pe[1]+G*g,Pe[2]+G*g)}}a.addGroup(be,o.length/3-be,0)}function se(){const be=o.length/3;let Le=0;_e(J,Le),Le+=J.length;for(let Pe=0,ze=q.length;Pe<ze;Pe++){const ee=q[Pe];_e(ee,Le),Le+=ee.length}a.addGroup(be,o.length/3-be,1)}function _e(be,Le){let Pe=be.length;for(;--Pe>=0;){const ze=Pe;let ee=Pe-1;ee<0&&(ee=be.length-1);for(let Fe=0,nt=g+E*2;Fe<nt;Fe++){const ct=G*Fe,ht=G*(Fe+1),X=Le+ze+ct,ft=Le+ee+ct,gt=Le+ee+ht,z=Le+ze+ht;qe(X,ft,gt,z)}}}function Ne(be,Le,Pe){p.push(be),p.push(Le),p.push(Pe)}function ot(be,Le,Pe){ut(be),ut(Le),ut(Pe);const ze=o.length/3,ee=F.generateTopUV(a,o,ze-3,ze-2,ze-1);Ct(ee[0]),Ct(ee[1]),Ct(ee[2])}function qe(be,Le,Pe,ze){ut(be),ut(Le),ut(ze),ut(Le),ut(Pe),ut(ze);const ee=o.length/3,Fe=F.generateSideWallUV(a,o,ee-6,ee-3,ee-2,ee-1);Ct(Fe[0]),Ct(Fe[1]),Ct(Fe[3]),Ct(Fe[1]),Ct(Fe[2]),Ct(Fe[3])}function ut(be){o.push(p[be*3+0]),o.push(p[be*3+1]),o.push(p[be*3+2])}function Ct(be){c.push(be.x),c.push(be.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return My(n,a,e)}static fromJSON(e,n){const a=[];for(let c=0,u=e.shapes.length;c<u;c++){const h=n[e.shapes[c]];a.push(h)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new vu[o.type]().fromJSON(o)),new U0(a,e.options)}}const xy={generateTopUV:function(s,e,n,a,o){const c=e[n*3],u=e[n*3+1],h=e[a*3],p=e[a*3+1],m=e[o*3],g=e[o*3+1];return[new Ye(c,u),new Ye(h,p),new Ye(m,g)]},generateSideWallUV:function(s,e,n,a,o,c){const u=e[n*3],h=e[n*3+1],p=e[n*3+2],m=e[a*3],g=e[a*3+1],x=e[a*3+2],v=e[o*3],M=e[o*3+1],A=e[o*3+2],D=e[c*3],E=e[c*3+1],S=e[c*3+2];return Math.abs(h-g)<Math.abs(u-m)?[new Ye(u,1-p),new Ye(m,1-x),new Ye(v,1-A),new Ye(D,1-S)]:[new Ye(h,1-p),new Ye(g,1-x),new Ye(M,1-A),new Ye(E,1-S)]}};function My(s,e,n){if(n.shapes=[],Array.isArray(s))for(let a=0,o=s.length;a<o;a++){const c=s[a];n.shapes.push(c.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class yu extends zn{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(o),m=h+1,g=p+1,x=e/h,v=n/p,M=[],A=[],D=[],E=[];for(let S=0;S<g;S++){const F=S*v-u;for(let I=0;I<m;I++){const R=I*x-c;A.push(R,-F,0),D.push(0,0,1),E.push(I/h),E.push(1-S/p)}}for(let S=0;S<p;S++)for(let F=0;F<h;F++){const I=F+m*S,R=F+m*(S+1),P=F+1+m*(S+1),O=F+1+m*S;M.push(I,R,O),M.push(R,P,O)}this.setIndex(M),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(D,3)),this.setAttribute("uv",new cn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.widthSegments,e.heightSegments)}}class _u extends zn{constructor(e=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+h,Math.PI);let m=0;const g=[],x=new Q,v=new Q,M=[],A=[],D=[],E=[];for(let S=0;S<=a;S++){const F=[],I=S/a,R=u+I*h,P=e*Math.cos(R),O=Math.sqrt(e*e-P*P);let L=0;S===0&&u===0?L=.5/n:S===a&&p===Math.PI&&(L=-.5/n);for(let b=0;b<=n;b++){const N=b/n,V=o+N*c;x.x=-O*Math.cos(V),x.y=P,x.z=O*Math.sin(V),A.push(x.x,x.y,x.z),v.copy(x).normalize(),D.push(v.x,v.y,v.z),E.push(N+L,1-I),F.push(m++)}g.push(F)}for(let S=0;S<a;S++)for(let F=0;F<n;F++){const I=g[S][F+1],R=g[S][F],P=g[S+1][F],O=g[S+1][F+1];(S!==0||u>0)&&M.push(I,R,O),(S!==a-1||p<Math.PI)&&M.push(R,P,O)}this.setIndex(M),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(D,3)),this.setAttribute("uv",new cn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sl extends zn{constructor(e=1,n=.4,a=12,o=48,c=Math.PI*2,u=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:a,tubularSegments:o,arc:c,thetaStart:u,thetaLength:h},a=Math.floor(a),o=Math.floor(o);const p=[],m=[],g=[],x=[],v=new Q,M=new Q,A=new Q;for(let D=0;D<=a;D++){const E=u+D/a*h;for(let S=0;S<=o;S++){const F=S/o*c;M.x=(e+n*Math.cos(E))*Math.cos(F),M.y=(e+n*Math.cos(E))*Math.sin(F),M.z=n*Math.sin(E),m.push(M.x,M.y,M.z),v.x=e*Math.cos(F),v.y=e*Math.sin(F),A.subVectors(M,v).normalize(),g.push(A.x,A.y,A.z),x.push(S/o),x.push(D/a)}}for(let D=1;D<=a;D++)for(let E=1;E<=o;E++){const S=(o+1)*D+E-1,F=(o+1)*(D-1)+E-1,I=(o+1)*(D-1)+E,R=(o+1)*D+E;p.push(S,F,R),p.push(F,I,R)}this.setIndex(p),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class O0 extends zn{constructor(e=new Jv(new Q(-1,-1,0),new Q(-1,1,0),new Q(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=e.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new Q,p=new Q,m=new Ye;let g=new Q;const x=[],v=[],M=[],A=[];D(),this.setIndex(A),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(M,2));function D(){for(let I=0;I<n;I++)E(I);E(c===!1?n:0),F(),S()}function E(I){g=e.getPointAt(I/n,g);const R=u.normals[I],P=u.binormals[I];for(let O=0;O<=o;O++){const L=O/o*Math.PI*2,b=Math.sin(L),N=-Math.cos(L);p.x=N*R.x+b*P.x,p.y=N*R.y+b*P.y,p.z=N*R.z+b*P.z,p.normalize(),v.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,x.push(h.x,h.y,h.z)}}function S(){for(let I=1;I<=n;I++)for(let R=1;R<=o;R++){const P=(o+1)*(I-1)+(R-1),O=(o+1)*I+(R-1),L=(o+1)*I+R,b=(o+1)*(I-1)+R;A.push(P,O,b),A.push(O,L,b)}}function F(){for(let I=0;I<=n;I++)for(let R=0;R<=o;R++)m.x=I/n,m.y=R/o,M.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new O0(new vu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];if(d2(o))o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(d2(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function kn(s){const e={};for(let n=0;n<s.length;n++){const a=Xs(s[n]);for(const o in a)e[o]=a[o]}return e}function d2(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Sy(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function a_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const yy={clone:Xs,merge:kn};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[a].value=new Ye().fromArray(o.value);break;case"v3":this.uniforms[a].value=new Q().fromArray(o.value);break;case"v4":this.uniforms[a].value=new on().fromArray(o.value);break;case"m3":this.uniforms[a].value=new _t().fromArray(o.value);break;case"m4":this.uniforms[a].value=new an().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ay extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class or extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=r0,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ty extends or{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ry extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class P0 extends wn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class wy extends P0{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const lh=new an,h2=new Q,m2=new Q;class r_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new L0,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;h2.setFromMatrixPosition(e.matrixWorld),n.position.copy(h2),m2.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(m2),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,a,o){lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(lh,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,u=o?o.z/c.x:1,h=o?o.w/c.y:1,p=o?o.x/c.x:0,m=o?o.y/c.y:0;e.coordinateSystem===ul||e.reversedDepth?n.set(.5*u,0,0,.5*u+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),n.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qc=new Q,$c=new Ws,Xi=new Q;class s_ extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qc,$c,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,$c,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Qc,$c,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,$c,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new Q,p2=new Ye,g2=new Ye;class mi extends s_{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,p2,g2),n.subVectors(g2,p2)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/m,o*=u.width/p,a*=u.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ly extends r_{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}class Dy extends P0{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new Ly}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class z0 extends s_{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ny extends r_{constructor(){super(new z0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v2 extends P0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Ny}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Ns=-90,Us=1;class Uy extends wn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(Ns,Us,e,n);o.layers=this.layers,this.add(o);const c=new mi(Ns,Us,e,n);c.layers=this.layers,this.add(c);const u=new mi(Ns,Us,e,n);u.layers=this.layers,this.add(u);const h=new mi(Ns,Us,e,n);h.layers=this.layers,this.add(h);const p=new mi(Ns,Us,e,n);p.layers=this.layers,this.add(p);const m=new mi(Ns,Us,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const m of n)this.remove(m);if(e===Ki)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ul)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,m,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),a.texture.generateMipmaps=D,e.setRenderTarget(a,5,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(x,v,M),e.xr.enabled=A,a.texture.needsPMREMUpdate=!0}}class Oy extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const _2=new an;class Py{constructor(e,n,a=0,o=1/0){this.ray=new w0(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new C0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):zt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return _2.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_2),this}intersectObject(e,n=!0,a=[]){return c0(e,this,a,n),a.sort(x2),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)c0(e[o],this,a,n);return a.sort(x2),a}}function x2(s,e){return s.distance-e.distance}function c0(s,e,n,a){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,h=c.length;u<h;u++)c0(c[u],e,n,!0)}}const G0=class G0{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};G0.prototype.isMatrix2=!0;let M2=G0;function S2(s,e,n,a){const o=zy(a);switch(n){case zv:return s*e;case Iv:return s*e/o.components*o.byteLength;case S0:return s*e/o.components*o.byteLength;case Br:return s*e*2/o.components*o.byteLength;case y0:return s*e*2/o.components*o.byteLength;case Fv:return s*e*3/o.components*o.byteLength;case Fi:return s*e*4/o.components*o.byteLength;case E0:return s*e*4/o.components*o.byteLength;case ru:case su:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ou:case lu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Nh:return Math.max(s,16)*Math.max(e,8)/4;case wh:case Dh:return Math.max(s,8)*Math.max(e,8)/2;case Uh:case Oh:case zh:case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ph:case uu:case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $h:case e0:case t0:return Math.ceil(s/4)*Math.ceil(e/4)*16;case n0:case i0:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fu:case a0:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zy(s){switch(s){case pi:case Nv:return{byteLength:1,components:1};case ll:case Uv:case $i:return{byteLength:2,components:1};case x0:case M0:return{byteLength:2,components:4};case Qi:case _0:case ji:return{byteLength:4,components:1};case Ov:case Pv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:g0}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=g0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o_(){let s=null,e=!1,n=null,a=null;function o(c,u){a=s.requestAnimationFrame(o),n(c,u)}return{start:function(){e!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Fy(s){const e=new WeakMap;function n(h,p){const m=h.array,g=h.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,p,m){const g=p.array,x=p.updateRanges;if(s.bindBuffer(m,h),x.length===0)s.bufferSubData(m,0,g);else{x.sort((M,A)=>M.start-A.start);let v=0;for(let M=1;M<x.length;M++){const A=x[v],D=x[M];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++v,x[v]=D)}x.length=v+1;for(let M=0,A=x.length;M<A;M++){const D=x[M];s.bufferSubData(m,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:u}}var Iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,By=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e6=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t6=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n6=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i6=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a6=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r6=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s6=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,o6=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l6=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c6=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,u6=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f6=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d6=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h6=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m6="gl_FragColor = linearToOutputTexel( gl_FragColor );",p6=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g6=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,v6=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_6=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x6=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M6=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S6=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y6=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E6=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b6=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A6=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T6=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R6=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C6=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w6=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,L6=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,D6=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N6=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U6=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O6=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P6=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z6=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F6=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I6=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H6=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B6=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V6=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G6=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z6=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q6=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k6=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X6=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W6=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y6=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j6=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K6=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J6=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q6=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$6=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e8=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t8=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n8=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i8=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a8=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r8=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s8=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o8=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l8=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c8=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u8=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f8=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d8=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h8=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,m8=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p8=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g8=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v8=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_8=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x8=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M8=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,S8=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y8=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E8=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b8=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A8=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T8=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R8=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C8=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w8=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L8=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D8=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N8=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U8=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O8=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P8=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z8=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F8=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I8=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H8=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V8=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z8=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q8=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k8=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X8=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W8=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j8=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K8=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J8=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q8=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$8=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bt={alphahash_fragment:Iy,alphahash_pars_fragment:Hy,alphamap_fragment:By,alphamap_pars_fragment:Vy,alphatest_fragment:Gy,alphatest_pars_fragment:Zy,aomap_fragment:qy,aomap_pars_fragment:ky,batching_pars_vertex:Xy,batching_vertex:Wy,begin_vertex:Yy,beginnormal_vertex:jy,bsdfs:Ky,iridescence_fragment:Jy,bumpmap_pars_fragment:Qy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:e6,clipping_planes_pars_vertex:t6,clipping_planes_vertex:n6,color_fragment:i6,color_pars_fragment:a6,color_pars_vertex:r6,color_vertex:s6,common:o6,cube_uv_reflection_fragment:l6,defaultnormal_vertex:c6,displacementmap_pars_vertex:u6,displacementmap_vertex:f6,emissivemap_fragment:d6,emissivemap_pars_fragment:h6,colorspace_fragment:m6,colorspace_pars_fragment:p6,envmap_fragment:g6,envmap_common_pars_fragment:v6,envmap_pars_fragment:_6,envmap_pars_vertex:x6,envmap_physical_pars_fragment:L6,envmap_vertex:M6,fog_vertex:S6,fog_pars_vertex:y6,fog_fragment:E6,fog_pars_fragment:b6,gradientmap_pars_fragment:A6,lightmap_pars_fragment:T6,lights_lambert_fragment:R6,lights_lambert_pars_fragment:C6,lights_pars_begin:w6,lights_toon_fragment:D6,lights_toon_pars_fragment:N6,lights_phong_fragment:U6,lights_phong_pars_fragment:O6,lights_physical_fragment:P6,lights_physical_pars_fragment:z6,lights_fragment_begin:F6,lights_fragment_maps:I6,lights_fragment_end:H6,lightprobes_pars_fragment:B6,logdepthbuf_fragment:V6,logdepthbuf_pars_fragment:G6,logdepthbuf_pars_vertex:Z6,logdepthbuf_vertex:q6,map_fragment:k6,map_pars_fragment:X6,map_particle_fragment:W6,map_particle_pars_fragment:Y6,metalnessmap_fragment:j6,metalnessmap_pars_fragment:K6,morphinstance_vertex:J6,morphcolor_vertex:Q6,morphnormal_vertex:$6,morphtarget_pars_vertex:e8,morphtarget_vertex:t8,normal_fragment_begin:n8,normal_fragment_maps:i8,normal_pars_fragment:a8,normal_pars_vertex:r8,normal_vertex:s8,normalmap_pars_fragment:o8,clearcoat_normal_fragment_begin:l8,clearcoat_normal_fragment_maps:c8,clearcoat_pars_fragment:u8,iridescence_pars_fragment:f8,opaque_fragment:d8,packing:h8,premultiplied_alpha_fragment:m8,project_vertex:p8,dithering_fragment:g8,dithering_pars_fragment:v8,roughnessmap_fragment:_8,roughnessmap_pars_fragment:x8,shadowmap_pars_fragment:M8,shadowmap_pars_vertex:S8,shadowmap_vertex:y8,shadowmask_pars_fragment:E8,skinbase_vertex:b8,skinning_pars_vertex:A8,skinning_vertex:T8,skinnormal_vertex:R8,specularmap_fragment:C8,specularmap_pars_fragment:w8,tonemapping_fragment:L8,tonemapping_pars_fragment:D8,transmission_fragment:N8,transmission_pars_fragment:U8,uv_pars_fragment:O8,uv_pars_vertex:P8,uv_vertex:z8,worldpos_vertex:F8,background_vert:I8,background_frag:H8,backgroundCube_vert:B8,backgroundCube_frag:V8,cube_vert:G8,cube_frag:Z8,depth_vert:q8,depth_frag:k8,distance_vert:X8,distance_frag:W8,equirect_vert:Y8,equirect_frag:j8,linedashed_vert:K8,linedashed_frag:J8,meshbasic_vert:Q8,meshbasic_frag:$8,meshlambert_vert:e4,meshlambert_frag:t4,meshmatcap_vert:n4,meshmatcap_frag:i4,meshnormal_vert:a4,meshnormal_frag:r4,meshphong_vert:s4,meshphong_frag:o4,meshphysical_vert:l4,meshphysical_frag:c4,meshtoon_vert:u4,meshtoon_frag:f4,points_vert:d4,points_frag:h4,shadow_vert:m4,shadow_frag:p4,sprite_vert:g4,sprite_frag:v4},Je={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Yi={basic:{uniforms:kn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:kn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:kn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:kn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:kn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Rt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:kn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:kn([Je.points,Je.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:kn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:kn([Je.common,Je.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:kn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:kn([Je.sprite,Je.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:kn([Je.common,Je.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:kn([Je.lights,Je.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Yi.physical={uniforms:kn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const eu={r:0,b:0,g:0},_4=new an,l_=new _t;l_.set(-1,0,0,0,1,0,0,0,1);function x4(s,e,n,a,o,c){const u=new Rt(0);let h=o===!0?0:1,p,m,g=null,x=0,v=null;function M(F){let I=F.isScene===!0?F.background:null;if(I&&I.isTexture){const R=F.backgroundBlurriness>0;I=e.get(I,R)}return I}function A(F){let I=!1;const R=M(F);R===null?E(u,h):R&&R.isColor&&(E(R,1),I=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(F,I){const R=M(I);R&&(R.isCubeTexture||R.mapping===Mu)?(m===void 0&&(m=new bn(new vl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Xs(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,O,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(_4.makeRotationFromEuler(I.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(l_),m.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Xt,(g!==R||x!==R.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,g=R,x=R.version,v=s.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new bn(new yu(2,2),new ea({name:"BackgroundMaterial",uniforms:Xs(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Xt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=R,x=R.version,v=s.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function E(F,I){F.getRGB(eu,a_(s)),n.buffers.color.setClear(eu.r,eu.g,eu.b,I,c)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(F,I=1){u.set(F),h=I,E(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,E(u,h)},render:A,addToRenderList:D,dispose:S}}function M4(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(q,K,ae,W,J){let B=!1;const G=x(q,W,ae,K);c!==G&&(c=G,m(c.object)),B=M(q,W,ae,J),B&&A(q,W,ae,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,R(q,K,ae,W),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return s.createVertexArray()}function m(q){return s.bindVertexArray(q)}function g(q){return s.deleteVertexArray(q)}function x(q,K,ae,W){const J=W.wireframe===!0;let B=a[K.id];B===void 0&&(B={},a[K.id]=B);const G=q.isInstancedMesh===!0?q.id:0;let oe=B[G];oe===void 0&&(oe={},B[G]=oe);let re=oe[ae.id];re===void 0&&(re={},oe[ae.id]=re);let pe=re[J];return pe===void 0&&(pe=v(p()),re[J]=pe),pe}function v(q){const K=[],ae=[],W=[];for(let J=0;J<n;J++)K[J]=0,ae[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ae,attributeDivisors:W,object:q,attributes:{},index:null}}function M(q,K,ae,W){const J=c.attributes,B=K.attributes;let G=0;const oe=ae.getAttributes();for(const re in oe)if(oe[re].location>=0){const U=J[re];let ie=B[re];if(ie===void 0&&(re==="instanceMatrix"&&q.instanceMatrix&&(ie=q.instanceMatrix),re==="instanceColor"&&q.instanceColor&&(ie=q.instanceColor)),U===void 0||U.attribute!==ie||ie&&U.data!==ie.data)return!0;G++}return c.attributesNum!==G||c.index!==W}function A(q,K,ae,W){const J={},B=K.attributes;let G=0;const oe=ae.getAttributes();for(const re in oe)if(oe[re].location>=0){let U=B[re];U===void 0&&(re==="instanceMatrix"&&q.instanceMatrix&&(U=q.instanceMatrix),re==="instanceColor"&&q.instanceColor&&(U=q.instanceColor));const ie={};ie.attribute=U,U&&U.data&&(ie.data=U.data),J[re]=ie,G++}c.attributes=J,c.attributesNum=G,c.index=W}function D(){const q=c.newAttributes;for(let K=0,ae=q.length;K<ae;K++)q[K]=0}function E(q){S(q,0)}function S(q,K){const ae=c.newAttributes,W=c.enabledAttributes,J=c.attributeDivisors;ae[q]=1,W[q]===0&&(s.enableVertexAttribArray(q),W[q]=1),J[q]!==K&&(s.vertexAttribDivisor(q,K),J[q]=K)}function F(){const q=c.newAttributes,K=c.enabledAttributes;for(let ae=0,W=K.length;ae<W;ae++)K[ae]!==q[ae]&&(s.disableVertexAttribArray(ae),K[ae]=0)}function I(q,K,ae,W,J,B,G){G===!0?s.vertexAttribIPointer(q,K,ae,J,B):s.vertexAttribPointer(q,K,ae,W,J,B)}function R(q,K,ae,W){D();const J=W.attributes,B=ae.getAttributes(),G=K.defaultAttributeValues;for(const oe in B){const re=B[oe];if(re.location>=0){let pe=J[oe];if(pe===void 0&&(oe==="instanceMatrix"&&q.instanceMatrix&&(pe=q.instanceMatrix),oe==="instanceColor"&&q.instanceColor&&(pe=q.instanceColor)),pe!==void 0){const U=pe.normalized,ie=pe.itemSize,ve=e.get(pe);if(ve===void 0)continue;const Oe=ve.buffer,Ue=ve.type,ke=ve.bytesPerElement,se=Ue===s.INT||Ue===s.UNSIGNED_INT||pe.gpuType===_0;if(pe.isInterleavedBufferAttribute){const _e=pe.data,Ne=_e.stride,ot=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let qe=0;qe<re.locationSize;qe++)S(re.location+qe,_e.meshPerAttribute);q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let qe=0;qe<re.locationSize;qe++)E(re.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let qe=0;qe<re.locationSize;qe++)I(re.location+qe,ie/re.locationSize,Ue,U,Ne*ke,(ot+ie/re.locationSize*qe)*ke,se)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<re.locationSize;_e++)S(re.location+_e,pe.meshPerAttribute);q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<re.locationSize;_e++)E(re.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let _e=0;_e<re.locationSize;_e++)I(re.location+_e,ie/re.locationSize,Ue,U,ie*ke,ie/re.locationSize*_e*ke,se)}}else if(G!==void 0){const U=G[oe];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(re.location,U);break;case 3:s.vertexAttrib3fv(re.location,U);break;case 4:s.vertexAttrib4fv(re.location,U);break;default:s.vertexAttrib1fv(re.location,U)}}}}F()}function P(){N();for(const q in a){const K=a[q];for(const ae in K){const W=K[ae];for(const J in W){const B=W[J];for(const G in B)g(B[G].object),delete B[G];delete W[J]}}delete a[q]}}function O(q){if(a[q.id]===void 0)return;const K=a[q.id];for(const ae in K){const W=K[ae];for(const J in W){const B=W[J];for(const G in B)g(B[G].object),delete B[G];delete W[J]}}delete a[q.id]}function L(q){for(const K in a){const ae=a[K];for(const W in ae){const J=ae[W];if(J[q.id]===void 0)continue;const B=J[q.id];for(const G in B)g(B[G].object),delete B[G];delete J[q.id]}}}function b(q){for(const K in a){const ae=a[K],W=q.isInstancedMesh===!0?q.id:0,J=ae[W];if(J!==void 0){for(const B in J){const G=J[B];for(const oe in G)g(G[oe].object),delete G[oe];delete J[B]}delete ae[W],Object.keys(ae).length===0&&delete a[K]}}}function N(){V(),u=!0,c!==o&&(c=o,m(c.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfObject:b,releaseStatesOfProgram:L,initAttributes:D,enableAttribute:E,disableUnusedAttributes:F}}function S4(s,e,n){let a;function o(p){a=p}function c(p,m){s.drawArrays(a,p,m),n.update(m,a,1)}function u(p,m,g){g!==0&&(s.drawArraysInstanced(a,p,m,g),n.update(m,a,g))}function h(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,m,0,g);let v=0;for(let M=0;M<g;M++)v+=m[M];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function y4(s,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(L){return!(L!==Fi&&a.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const b=L===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==pi&&L!==ji&&!b&&a.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(pt("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:F,maxVaryings:I,maxFragmentUniforms:R,maxSamples:P,samples:O}}function E4(s){const e=this;let n=null,a=0,o=!1,c=!1;const u=new lr,h=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||a!==0||o;return o=v,a=x.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){n=g(x,v,0)},this.setState=function(x,v,M){const A=x.clippingPlanes,D=x.clipIntersection,E=x.clipShadows,S=s.get(x);if(!o||A===null||A.length===0||c&&!E)c?g(null):m();else{const F=c?0:a,I=F*4;let R=S.clippingState||null;p.value=R,R=g(A,v,I,M);for(let P=0;P!==I;++P)R[P]=n[P];S.clippingState=R,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(x,v,M,A){const D=x!==null?x.length:0;let E=null;if(D!==0){if(E=p.value,A!==!0||E===null){const S=M+D*4,F=v.matrixWorldInverse;h.getNormalMatrix(F),(E===null||E.length<S)&&(E=new Float32Array(S));for(let I=0,R=M;I!==D;++I,R+=4)u.copy(x[I]).applyMatrix4(F,h),u.normal.toArray(E,R),E[R+3]=u.constant}p.value=E,p.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,E}}const Bs=4,b4=6,A4=20,T4=256,Yo=new z0,y2=new Rt;let ch=null,uh=0,fh=0,dh=!1;const R4=new Q,Or=new Q;class E2{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=R4}=c;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,uh,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:$i,format:Fi,colorSpace:du,depthBuffer:!1},o=b2(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b2(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=C4(c)),this._blurMaterial=L4(c,e,n),this._ggxMaterial=w4(c,e,n)}return o}_compileMaterial(e){const n=new bn(new zn,e);this._renderer.compile(n,Yo)}_sceneToCubeUV(e,n,a,o,c){const p=new mi(90,1,n,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(y2),x.toneMapping=Ji,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new vl,new pu({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,E=D.material;let S=!1;const F=e.background;F?F.isColor&&(E.color.copy(F),e.background=null,S=!0):(E.color.copy(y2),S=!0);for(let I=0;I<6;I++){const R=I%3;R===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[I],c.y,c.z)):R===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[I]));const P=this._cubeSize;Os(o,R*P,I>2?P:0,P,P),x.setRenderTarget(o),S&&x.render(D,p),x.render(e,p)}x.toneMapping=M,x.autoClear=v,e.background=F}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Hr||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=T2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A2());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Os(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Yo)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,m=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),x=Math.sqrt(m*m-g*g),v=m*1.25,M=x*v,{_lodMax:A}=this,D=this._sizeLods[a],E=3*D*(a>A-Bs?a-A+Bs:0),S=4*(this._cubeSize-D);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=A-n,Os(c,E,S,3*D,2*D),o.setRenderTarget(c),o.render(h,Yo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=A-a,Os(e,E,S,3*D,2*D),o.setRenderTarget(e),o.render(h,Yo)}_blur(e,n,a,o){const c=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,c,n,a,u),this._blurPass(c,e,a,a,u)}_blurPass(e,n,a,o,c){const u=this._renderer,h=this._blurMaterial,p=this._lodMeshes[o];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-a;const g=this._sizeLods[o],x=3*g*(o>this._lodMax-Bs?o-this._lodMax+Bs:0),v=4*(this._cubeSize-g);Os(n,x,v,3*g,2*g),u.setRenderTarget(n),u.render(p,Yo)}}function C4(s){const e=[],n=[];let a=s;const o=s-Bs+1+b4;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,v=6,M=3,A=new Float32Array(M*v*x),D=new Float32Array(M*v*x);for(let S=0;S<x;S++){const F=S%3*2/3-1,I=S>2?0:-1,R=[F,I,0,F+2/3,I,0,F+2/3,I+1,0,F,I,0,F+2/3,I+1,0,F,I+1,0];A.set(R,M*v*S);for(let P=0;P<v;P++){const O=g[P*2]*2-1,L=g[P*2+1]*2-1;S===0?Or.set(1,L,O):S===1?Or.set(-O,1,-L):S===2?Or.set(-O,L,1):S===3?Or.set(-1,L,-O):S===4?Or.set(-O,-1,L):Or.set(O,L,-1),Or.toArray(D,(S*v+P)*M)}}const E=new zn;E.setAttribute("position",new Hi(A,M)),E.setAttribute("outputDirection",new Hi(D,M)),n.push(new bn(E,null)),a>Bs&&a--}return{lodMeshes:n,sizeLods:e}}function b2(s,e,n){const a=new Ii(s,e,n);return a.texture.mapping=Mu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Os(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function w4(s,e,n){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function L4(s,e,n){return new ea({name:"SphericalGaussianBlur",defines:{SAMPLES:A4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function A2(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function T2(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class c_ extends Ii{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new kv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new vl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Xs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Ta});c.uniforms.tEquirect.value=n;const u=new bn(o,c),h=n.minFilter;return n.minFilter===zr&&(n.minFilter=Bn),new Uy(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function D4(s){let e=new WeakMap,n=new WeakMap,a=null;function o(v,M=!1){return v==null?null:M?u(v):c(v)}function c(v){if(v&&v.isTexture){const M=v.mapping;if(M===Pd||M===zd)if(e.has(v)){const A=e.get(v).texture;return h(A,v.mapping)}else{const A=v.image;if(A&&A.height>0){const D=new c_(A.height);return D.fromEquirectangularTexture(s,v),e.set(v,D),v.addEventListener("dispose",m),h(D.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const M=v.mapping,A=M===Pd||M===zd,D=M===Hr||M===qs;if(A||D){let E=n.get(v);const S=E!==void 0?E.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return a===null&&(a=new E2(s)),E=A?a.fromEquirectangular(v,E):a.fromCubemap(v,E),E.texture.pmremVersion=v.pmremVersion,n.set(v,E),E.texture;if(E!==void 0)return E.texture;{const F=v.image;return A&&F&&F.height>0||D&&F&&p(F)?(a===null&&(a=new E2(s)),E=A?a.fromEquirectangular(v):a.fromCubemap(v),E.texture.pmremVersion=v.pmremVersion,n.set(v,E),v.addEventListener("dispose",g),E.texture):null}}}return v}function h(v,M){return M===Pd?v.mapping=Hr:M===zd&&(v.mapping=qs),v}function p(v){let M=0;const A=6;for(let D=0;D<A;D++)v[D]!==void 0&&M++;return M===A}function m(v){const M=v.target;M.removeEventListener("dispose",m);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function g(v){const M=v.target;M.removeEventListener("dispose",g);const A=n.get(M);A!==void 0&&(n.delete(M),A.dispose())}function x(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:x}}function N4(s){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=s.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Vs("WebGLRenderer: "+a+" extension not supported."),o}}}function U4(s,e,n,a){const o={},c=new WeakMap;function u(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const A in v.attributes)e.remove(v.attributes[A]);v.removeEventListener("dispose",u),delete o[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(x,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(x){const v=x.attributes;for(const M in v)e.update(v[M],s.ARRAY_BUFFER)}function m(x){const v=[],M=x.index,A=x.attributes.position;let D=0;if(A===void 0)return;if(M!==null){const F=M.array;D=M.version;for(let I=0,R=F.length;I<R;I+=3){const P=F[I+0],O=F[I+1],L=F[I+2];v.push(P,O,O,L,L,P)}}else{const F=A.array;D=A.version;for(let I=0,R=F.length/3-1;I<R;I+=3){const P=I+0,O=I+1,L=I+2;v.push(P,O,O,L,L,P)}}const E=new(A.count>=65535?Zv:Gv)(v,1);E.version=D;const S=c.get(x);S&&e.remove(S),c.set(x,E)}function g(x){const v=c.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:p,getWireframeAttribute:g}}function O4(s,e,n){let a;function o(x){a=x}let c,u;function h(x){c=x.type,u=x.bytesPerElement}function p(x,v){s.drawElements(a,v,c,x*u),n.update(v,a,1)}function m(x,v,M){M!==0&&(s.drawElementsInstanced(a,v,c,x*u,M),n.update(v,a,M))}function g(x,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,x,0,M);let D=0;for(let E=0;E<M;E++)D+=v[E];n.update(D,a,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function P4(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:zt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function z4(s,e,n){const a=new WeakMap,o=new on;function c(u,h,p){const m=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==x){let V=function(){b.dispose(),a.delete(h),h.removeEventListener("dispose",V)};var M=V;v!==void 0&&v.texture.dispose();const A=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let R=0;A===!0&&(R=1),D===!0&&(R=2),E===!0&&(R=3);let P=h.attributes.position.count*R,O=1;P>e.maxTextureSize&&(O=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*O*4*x),b=new Bv(L,P,O,x);b.type=ji,b.needsUpdate=!0;const N=R*4;for(let q=0;q<x;q++){const K=S[q],ae=F[q],W=I[q],J=P*O*4*q;for(let B=0;B<K.count;B++){const G=B*N;A===!0&&(o.fromBufferAttribute(K,B),L[J+G+0]=o.x,L[J+G+1]=o.y,L[J+G+2]=o.z,L[J+G+3]=0),D===!0&&(o.fromBufferAttribute(ae,B),L[J+G+4]=o.x,L[J+G+5]=o.y,L[J+G+6]=o.z,L[J+G+7]=0),E===!0&&(o.fromBufferAttribute(W,B),L[J+G+8]=o.x,L[J+G+9]=o.y,L[J+G+10]=o.z,L[J+G+11]=W.itemSize===4?o.w:1)}}v={count:x,texture:b,size:new Ye(P,O)},a.set(h,v),h.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let A=0;for(let E=0;E<m.length;E++)A+=m[E];const D=h.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",D),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function F4(s,e,n,a,o){let c=new WeakMap;function u(m){const g=o.render.frame,x=m.geometry,v=e.get(m,x);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==g&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,g))),m.isSkinnedMesh){const M=m.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return v}function h(){c=new WeakMap}function p(m){const g=m.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const I4={[Av]:"LINEAR_TONE_MAPPING",[Tv]:"REINHARD_TONE_MAPPING",[Rv]:"CINEON_TONE_MAPPING",[v0]:"ACES_FILMIC_TONE_MAPPING",[wv]:"AGX_TONE_MAPPING",[Lv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function H4(s,e,n,a,o,c){const u=new Ii(e,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new zn;m.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new cn([0,2,0,0,2,0],2));const g=new Ay({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new bn(m,g),v=new z0(-1,1,1,-1,0,1);let M=null,A=null,D=!1,E,S=null,F=[],I=!1;this.setSize=function(R,P){u.setSize(R,P),h!==null&&h.setSize(R,P),p!==null&&p.setSize(R,P);for(let O=0;O<F.length;O++){const L=F[O];L.setSize&&L.setSize(R,P)}},this.setEffects=function(R){F=R,I=F.length>0&&F[0].isRenderPass===!0;const P=u.width,O=u.height;F.length>0&&h===null&&(h=new Ii(P,O,{type:$i,depthBuffer:!1,stencilBuffer:!1}),p=new Ii(P,O,{type:$i,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<F.length;L++){const b=F[L];b.setSize&&b.setSize(P,O)}},this.begin=function(R,P){if(D||R.toneMapping===Ji&&F.length===0)return!1;if(S=P,P!==null){const O=P.width,L=P.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return I===!1&&R.setRenderTarget(u),E=R.toneMapping,R.toneMapping=Ji,!0},this.hasRenderPass=function(){return I},this.end=function(R,P){R.toneMapping=E,D=!0;let O=u,L=h;for(let b=0;b<F.length;b++){const N=F[b];N.enabled!==!1&&(N.render(R,L,O,P),N.needsSwap!==!1&&(O=L,L=L===h?p:h))}if(M!==R.outputColorSpace||A!==R.toneMapping){M=R.outputColorSpace,A=R.toneMapping,g.defines={},Pt.getTransfer(M)===Xt&&(g.defines.SRGB_TRANSFER="");const b=I4[A];b&&(g.defines[b]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(S),R.render(x,v),S=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){u.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),g.dispose()}}const u_=new Xn,u0=new dl(1,1),f_=new Bv,d_=new bS,h_=new kv,R2=[],C2=[],w2=new Float32Array(16),L2=new Float32Array(9),D2=new Float32Array(4);function js(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let c=R2[o];if(c===void 0&&(c=new Float32Array(o),R2[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,s[u].toArray(c,h)}return c}function An(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function Tn(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function bu(s,e){let n=C2[e];n===void 0&&(n=new Int32Array(e),C2[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function B4(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function V4(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;s.uniform2fv(this.addr,e),Tn(n,e)}}function G4(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;s.uniform3fv(this.addr,e),Tn(n,e)}}function Z4(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;s.uniform4fv(this.addr,e),Tn(n,e)}}function q4(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(An(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tn(n,e)}else{if(An(n,a))return;D2.set(a),s.uniformMatrix2fv(this.addr,!1,D2),Tn(n,a)}}function k4(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(An(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tn(n,e)}else{if(An(n,a))return;L2.set(a),s.uniformMatrix3fv(this.addr,!1,L2),Tn(n,a)}}function X4(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(An(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tn(n,e)}else{if(An(n,a))return;w2.set(a),s.uniformMatrix4fv(this.addr,!1,w2),Tn(n,a)}}function W4(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Y4(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;s.uniform2iv(this.addr,e),Tn(n,e)}}function j4(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;s.uniform3iv(this.addr,e),Tn(n,e)}}function K4(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;s.uniform4iv(this.addr,e),Tn(n,e)}}function J4(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Q4(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;s.uniform2uiv(this.addr,e),Tn(n,e)}}function $4(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;s.uniform3uiv(this.addr,e),Tn(n,e)}}function eE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;s.uniform4uiv(this.addr,e),Tn(n,e)}}function tE(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(u0.compareFunction=n.isReversedDepthBuffer()?A0:b0,c=u0):c=u_,n.setTexture2D(e||c,o)}function nE(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||d_,o)}function iE(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||h_,o)}function aE(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||f_,o)}function rE(s){switch(s){case 5126:return B4;case 35664:return V4;case 35665:return G4;case 35666:return Z4;case 35674:return q4;case 35675:return k4;case 35676:return X4;case 5124:case 35670:return W4;case 35667:case 35671:return Y4;case 35668:case 35672:return j4;case 35669:case 35673:return K4;case 5125:return J4;case 36294:return Q4;case 36295:return $4;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return aE}}function sE(s,e){s.uniform1fv(this.addr,e)}function oE(s,e){const n=js(e,this.size,2);s.uniform2fv(this.addr,n)}function lE(s,e){const n=js(e,this.size,3);s.uniform3fv(this.addr,n)}function cE(s,e){const n=js(e,this.size,4);s.uniform4fv(this.addr,n)}function uE(s,e){const n=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function fE(s,e){const n=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function dE(s,e){const n=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function hE(s,e){s.uniform1iv(this.addr,e)}function mE(s,e){s.uniform2iv(this.addr,e)}function pE(s,e){s.uniform3iv(this.addr,e)}function gE(s,e){s.uniform4iv(this.addr,e)}function vE(s,e){s.uniform1uiv(this.addr,e)}function _E(s,e){s.uniform2uiv(this.addr,e)}function xE(s,e){s.uniform3uiv(this.addr,e)}function ME(s,e){s.uniform4uiv(this.addr,e)}function SE(s,e,n){const a=this.cache,o=e.length,c=bu(n,o);An(a,c)||(s.uniform1iv(this.addr,c),Tn(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=u0:u=u_;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function yE(s,e,n){const a=this.cache,o=e.length,c=bu(n,o);An(a,c)||(s.uniform1iv(this.addr,c),Tn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||d_,c[u])}function EE(s,e,n){const a=this.cache,o=e.length,c=bu(n,o);An(a,c)||(s.uniform1iv(this.addr,c),Tn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||h_,c[u])}function bE(s,e,n){const a=this.cache,o=e.length,c=bu(n,o);An(a,c)||(s.uniform1iv(this.addr,c),Tn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||f_,c[u])}function AE(s){switch(s){case 5126:return sE;case 35664:return oE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return fE;case 35676:return dE;case 5124:case 35670:return hE;case 35667:case 35671:return mE;case 35668:case 35672:return pE;case 35669:case 35673:return gE;case 5125:return vE;case 36294:return _E;case 36295:return xE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return yE;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return bE}}class TE{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=rE(n.type)}}class RE{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AE(n.type)}}class CE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function N2(s,e){s.seq.push(e),s.map[e.id]=e}function wE(s,e,n){const a=s.name,o=a.length;for(hh.lastIndex=0;;){const c=hh.exec(a),u=hh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&u+2===o){N2(n,m===void 0?new TE(h,s,e):new RE(h,s,e));break}else{let x=n.map[h];x===void 0&&(x=new CE(h),N2(n,x)),n=x}}}class cu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),p=e.getUniformLocation(n,h.name);wE(h,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function U2(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const LE=37297;let DE=0;function NE(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const O2=new _t;function UE(s){Pt._getMatrix(O2,Pt.workingColorSpace,s);const e=`mat3( ${O2.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(s)){case hu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function P2(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+NE(s.getShaderSource(e),h)}else return c}function OE(s,e){const n=UE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const PE={[Av]:"Linear",[Tv]:"Reinhard",[Rv]:"Cineon",[v0]:"ACESFilmic",[wv]:"AgX",[Lv]:"Neutral",[Cv]:"Custom"};function zE(s,e){const n=PE[e];return n===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tu=new Q;function FE(){Pt.getLuminanceCoefficients(tu);const s=tu.x.toFixed(4),e=tu.y.toFixed(4),n=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function HE(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function BE(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(e,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:h}}return n}function el(s){return s!==""}function z2(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function F2(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VE=/^[ \t]*#include +<([\w\d./]+)>/gm;function f0(s){return s.replace(VE,ZE)}const GE=new Map;function ZE(s,e){let n=bt[e];if(n===void 0){const a=GE.get(e);if(a!==void 0)n=bt[a],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return f0(n)}const qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I2(s){return s.replace(qE,kE)}function kE(s,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function H2(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const XE={[au]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function WE(s){return XE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YE={[Hr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Mu]:"ENVMAP_TYPE_CUBE_UV"};function jE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":YE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const KE={[qs]:"ENVMAP_MODE_REFRACTION"};function JE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":KE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QE={[bv]:"ENVMAP_BLENDING_MULTIPLY",[BM]:"ENVMAP_BLENDING_MIX",[VM]:"ENVMAP_BLENDING_ADD"};function $E(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":QE[s.combine]||"ENVMAP_BLENDING_NONE"}function eb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function tb(s,e,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=WE(n),m=jE(n),g=JE(n),x=$E(n),v=eb(n),M=IE(n),A=HE(c),D=o.createProgram();let E,S,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(el).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(el).join(`
`),S.length>0&&(S+=`
`)):(E=[H2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),S=[H2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?bt.tonemapping_pars_fragment:"",n.toneMapping!==Ji?zE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,OE("linearToOutputTexel",n.outputColorSpace),FE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(el).join(`
`)),u=f0(u),u=z2(u,n),u=F2(u,n),h=f0(h),h=z2(h,n),h=F2(h,n),u=I2(u),h=I2(h),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",n.glslVersion===Hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=F+E+u,R=F+S+h,P=U2(o,o.VERTEX_SHADER,I),O=U2(o,o.FRAGMENT_SHADER,R);o.attachShader(D,P),o.attachShader(D,O),n.index0AttributeName!==void 0?o.bindAttribLocation(D,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function L(q){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(D)||"",ae=o.getShaderInfoLog(P)||"",W=o.getShaderInfoLog(O)||"",J=K.trim(),B=ae.trim(),G=W.trim();let oe=!0,re=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,D,P,O);else{const pe=P2(o,P,"vertex"),U=P2(o,O,"fragment");zt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+J+`
`+pe+`
`+U)}else J!==""?pt("WebGLProgram: Program Info Log:",J):(B===""||G==="")&&(re=!1);re&&(q.diagnostics={runnable:oe,programLog:J,vertexShader:{log:B,prefix:E},fragmentShader:{log:G,prefix:S}})}o.deleteShader(P),o.deleteShader(O),b=new cu(o,D),N=BE(o,D)}let b;this.getUniforms=function(){return b===void 0&&L(this),b};let N;this.getAttributes=function(){return N===void 0&&L(this),N};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(D,LE)),V},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DE++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=P,this.fragmentShader=O,this}let nb=0;class ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new ab(e),n.set(e,a)),a}}class ab{constructor(e){this.id=nb++,this.code=e,this.usedTimes=0}}function rb(s){return s===Br||s===uu||s===fu}function sb(s,e,n,a,o,c){const u=new C0,h=new ib,p=new Set,m=[],g=new Map,x=a.logarithmicDepthBuffer;let v=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return p.add(b),b===0?"uv":`uv${b}`}function D(b,N,V,q,K,ae){const W=q.fog,J=K.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,oe=e.get(b.envMap||B,G),re=oe&&oe.mapping===Mu?oe.image.height:null,pe=M[b.type];b.precision!==null&&(v=a.getMaxPrecision(b.precision),v!==b.precision&&pt("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ie=U!==void 0?U.length:0;let ve=0;J.morphAttributes.position!==void 0&&(ve=1),J.morphAttributes.normal!==void 0&&(ve=2),J.morphAttributes.color!==void 0&&(ve=3);let Oe,Ue,ke,se;if(pe){const Bt=Yi[pe];Oe=Bt.vertexShader,Ue=Bt.fragmentShader}else{Oe=b.vertexShader,Ue=b.fragmentShader;const Bt=h.getVertexShaderStage(b),Dt=h.getFragmentShaderStage(b);h.update(b,Bt,Dt),ke=Bt.id,se=Dt.id}const _e=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),ot=K.isInstancedMesh===!0,qe=K.isBatchedMesh===!0,ut=!!b.map,Ct=!!b.matcap,be=!!oe,Le=!!b.aoMap,Pe=!!b.lightMap,ze=!!b.bumpMap&&b.wireframe===!1,ee=!!b.normalMap,Fe=!!b.displacementMap,nt=!!b.emissiveMap,ct=!!b.metalnessMap,ht=!!b.roughnessMap,X=b.anisotropy>0,ft=b.clearcoat>0,gt=b.dispersion>0,z=b.retroreflectivity>0,T=b.iridescence>0,te=b.sheen>0,fe=b.transmission>0,ye=X&&!!b.anisotropyMap,He=ft&&!!b.clearcoatMap,Ve=ft&&!!b.clearcoatNormalMap,Se=ft&&!!b.clearcoatRoughnessMap,Ee=T&&!!b.iridescenceMap,Be=T&&!!b.iridescenceThicknessMap,Xe=te&&!!b.sheenColorMap,Ge=te&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,st=!!b.specularColorMap,$=!!b.specularIntensityMap,De=fe&&!!b.transmissionMap,H=fe&&!!b.thicknessMap,Te=!!b.gradientMap,ue=!!b.alphaMap,Ce=b.alphaTest>0,Ie=!!b.alphaHash,xe=!!b.extensions;let je=Ji;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(je=s.toneMapping);const it={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:Ue,defines:b.defines,customVertexShaderID:ke,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:qe,batchingColor:qe&&K._colorsTexture!==null,instancing:ot,instancingColor:ot&&K.instanceColor!==null,instancingMorph:ot&&K.morphTexture!==null,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:Ct,envMap:be,envMapMode:be&&oe.mapping,envMapCubeUVHeight:re,aoMap:Le,lightMap:Pe,bumpMap:ze,normalMap:ee,displacementMap:Fe,emissiveMap:nt,normalMapObjectSpace:ee&&b.normalMapType===qM,normalMapTangentSpace:ee&&b.normalMapType===r0,packedNormalMap:ee&&b.normalMapType===r0&&rb(b.normalMap.format),metalnessMap:ct,roughnessMap:ht,anisotropy:X,anisotropyMap:ye,clearcoat:ft,clearcoatMap:He,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Se,dispersion:gt,retroreflection:z,iridescence:T,iridescenceMap:Ee,iridescenceThicknessMap:Be,sheen:te,sheenColorMap:Xe,sheenRoughnessMap:Ge,specularMap:Ze,specularColorMap:st,specularIntensityMap:$,transmission:fe,transmissionMap:De,thicknessMap:H,gradientMap:Te,opaque:b.transparent===!1&&b.blending===tl&&b.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ce,alphaHash:Ie,combine:b.combine,mapUv:ut&&A(b.map.channel),aoMapUv:Le&&A(b.aoMap.channel),lightMapUv:Pe&&A(b.lightMap.channel),bumpMapUv:ze&&A(b.bumpMap.channel),normalMapUv:ee&&A(b.normalMap.channel),displacementMapUv:Fe&&A(b.displacementMap.channel),emissiveMapUv:nt&&A(b.emissiveMap.channel),metalnessMapUv:ct&&A(b.metalnessMap.channel),roughnessMapUv:ht&&A(b.roughnessMap.channel),anisotropyMapUv:ye&&A(b.anisotropyMap.channel),clearcoatMapUv:He&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&A(b.sheenRoughnessMap.channel),specularMapUv:Ze&&A(b.specularMap.channel),specularColorMapUv:st&&A(b.specularColorMap.channel),specularIntensityMapUv:$&&A(b.specularIntensityMap.channel),transmissionMapUv:De&&A(b.transmissionMap.channel),thicknessMapUv:H&&A(b.thicknessMap.channel),alphaMapUv:ue&&A(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ee||X),vertexNormals:!!J.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!J.attributes.uv&&(ut||ue),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&ee===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ne,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ve,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:je,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:nt&&b.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pi,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&b.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return it.vertexUv1s=p.has(1),it.vertexUv2s=p.has(2),it.vertexUv3s=p.has(3),p.clear(),it}function E(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)N.push(V),N.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(S(N,b),F(N,b),N.push(s.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function S(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numSunLights),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numSunLightShadows),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function F(b,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.retroreflection&&u.enable(24),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function I(b){const N=M[b.type];let V;if(N){const q=Yi[N];V=yy.clone(q.uniforms)}else V=b.uniforms;return V}function R(b,N){let V=g.get(N);return V!==void 0?++V.usedTimes:(V=new tb(s,N,b,o),m.push(V),g.set(N,V)),V}function P(b){if(--b.usedTimes===0){const N=m.indexOf(b);m[N]=m[m.length-1],m.pop(),g.delete(b.cacheKey),b.destroy()}}function O(b){h.remove(b)}function L(){h.dispose()}return{getParameters:D,getProgramCacheKey:E,getUniforms:I,acquireProgram:R,releaseProgram:P,releaseShaderCache:O,programs:m,dispose:L}}function ob(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,p){s.get(u)[h]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function lb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function B2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function V2(){const s=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function h(v,M,A,D,E,S){let F=s[e];return F===void 0?(F={id:v.id,object:v,geometry:M,material:A,materialVariant:u(v),groupOrder:D,renderOrder:v.renderOrder,z:E,group:S},s[e]=F):(F.id=v.id,F.object=v,F.geometry=M,F.material=A,F.materialVariant=u(v),F.groupOrder=D,F.renderOrder=v.renderOrder,F.z=E,F.group=S),e++,F}function p(v,M,A,D,E,S,F){F.reversedDepth===!0&&(E=-E);const I=h(v,M,A,D,E,S);A.transmission>0?a.push(I):A.transparent===!0?o.push(I):n.push(I)}function m(v,M,A,D,E,S){const F=h(v,M,A,D,E,S);A.transmission>0?a.unshift(F):A.transparent===!0?o.unshift(F):n.unshift(F)}function g(v,M){n.length>1&&n.sort(v||lb),a.length>1&&a.sort(M||B2),o.length>1&&o.sort(M||B2)}function x(){for(let v=e,M=s.length;v<M;v++){const A=s[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:m,finish:x,sort:g}}function cb(){let s=new WeakMap;function e(a,o){const c=s.get(a);let u;return c===void 0?(u=new V2,s.set(a,[u])):o>=c.length?(u=new V2,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function ub(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new Q,color:new Rt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function fb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let db=0;function hb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mb(s){const e=new ub,n=fb(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new Q);const o=new Q,c=new an,u=new an;function h(m){let g=0,x=0,v=0;for(let K=0;K<9;K++)a.probe[K].set(0,0,0);let M=0,A=0,D=0,E=0,S=0,F=0,I=0,R=0,P=0,O=0,L=0,b=0,N=0,V=0;m.sort(hb);for(let K=0,ae=m.length;K<ae;K++){const W=m[K],J=W.color,B=W.intensity,G=W.distance;let oe=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Br?oe=W.shadow.map.texture:oe=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)g+=J.r*B,x+=J.g*B,v+=J.b*B;else if(W.isLightProbe){for(let re=0;re<9;re++)a.probe[re].addScaledVector(W.sh.coefficients[re],B);V++}else if(W.isSunLight){const re=e.get(W);if(re.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const pe=W.shadow,U=n.get(W);U.shadowIntensity=pe.intensity,U.shadowBias=pe.bias,U.shadowNormalBias=pe.normalBias,U.shadowRadius=pe.radius,U.shadowMapSize.copy(pe.mapSize).multiply(pe.getFrameExtents()),a.sunShadow[A]=U,a.sunShadowMap[A]=oe;const ie=pe.getViewportCount();for(let ve=0;ve<ie;ve++)a.sunShadowMatrix[D+ve]=pe.getMatrix(ve),a.sunShadowCascade[D+ve]=pe._cascadeData[ve];D+=ie,A++}a.sun[M]=re,M++}else if(W.isDirectionalLight){const re=e.get(W);if(re.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const pe=W.shadow,U=n.get(W);U.shadowIntensity=pe.intensity,U.shadowBias=pe.bias,U.shadowNormalBias=pe.normalBias,U.shadowRadius=pe.radius,U.shadowMapSize=pe.mapSize,a.directionalShadow[E]=U,a.directionalShadowMap[E]=oe,a.directionalShadowMatrix[E]=W.shadow.matrix,P++}a.directional[E]=re,E++}else if(W.isSpotLight){const re=e.get(W);re.position.setFromMatrixPosition(W.matrixWorld),re.color.copy(J).multiplyScalar(B),re.distance=G,re.coneCos=Math.cos(W.angle),re.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),re.decay=W.decay,a.spot[F]=re;const pe=W.shadow;if(W.map&&(a.spotLightMap[b]=W.map,b++,pe.updateMatrices(W),W.castShadow&&N++),a.spotLightMatrix[F]=pe.matrix,W.castShadow){const U=n.get(W);U.shadowIntensity=pe.intensity,U.shadowBias=pe.bias,U.shadowNormalBias=pe.normalBias,U.shadowRadius=pe.radius,U.shadowMapSize=pe.mapSize,a.spotShadow[F]=U,a.spotShadowMap[F]=oe,L++}F++}else if(W.isRectAreaLight){const re=e.get(W);re.color.copy(J).multiplyScalar(B),re.halfWidth.set(W.width*.5,0,0),re.halfHeight.set(0,W.height*.5,0),a.rectArea[I]=re,I++}else if(W.isPointLight){const re=e.get(W);if(re.color.copy(W.color).multiplyScalar(W.intensity),re.distance=W.distance,re.decay=W.decay,W.castShadow){const pe=W.shadow,U=n.get(W);U.shadowIntensity=pe.intensity,U.shadowBias=pe.bias,U.shadowNormalBias=pe.normalBias,U.shadowRadius=pe.radius,U.shadowMapSize=pe.mapSize,U.shadowCameraNear=pe.camera.near,U.shadowCameraFar=pe.camera.far,a.pointShadow[S]=U,a.pointShadowMap[S]=oe,a.pointShadowMatrix[S]=W.shadow.matrix,O++}a.point[S]=re,S++}else if(W.isHemisphereLight){const re=e.get(W);re.skyColor.copy(W.color).multiplyScalar(B),re.groundColor.copy(W.groundColor).multiplyScalar(B),a.hemi[R]=re,R++}}I>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Je.LTC_FLOAT_1,a.rectAreaLTC2=Je.LTC_FLOAT_2):(a.rectAreaLTC1=Je.LTC_HALF_1,a.rectAreaLTC2=Je.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=x,a.ambient[2]=v;const q=a.hash;(q.sunLength!==M||q.directionalLength!==E||q.pointLength!==S||q.spotLength!==F||q.rectAreaLength!==I||q.hemiLength!==R||q.numSunShadows!==A||q.numDirectionalShadows!==P||q.numPointShadows!==O||q.numSpotShadows!==L||q.numSpotMaps!==b||q.numLightProbes!==V)&&(a.sun.length=M,a.directional.length=E,a.spot.length=F,a.rectArea.length=I,a.point.length=S,a.hemi.length=R,a.sunShadow.length=A,a.sunShadowMap.length=A,a.sunShadowMatrix.length=D,a.sunShadowCascade.length=D,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.directionalShadowMatrix.length=P,a.pointShadow.length=O,a.pointShadowMap.length=O,a.pointShadowMatrix.length=O,a.spotShadow.length=L,a.spotShadowMap.length=L,a.spotLightMatrix.length=L+b-N,a.spotLightMap.length=b,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=V,q.sunLength=M,q.directionalLength=E,q.pointLength=S,q.spotLength=F,q.rectAreaLength=I,q.hemiLength=R,q.numSunShadows=A,q.numDirectionalShadows=P,q.numPointShadows=O,q.numSpotShadows=L,q.numSpotMaps=b,q.numLightProbes=V,a.version=db++)}function p(m,g){let x=0,v=0,M=0,A=0,D=0,E=0;const S=g.matrixWorldInverse;for(let F=0,I=m.length;F<I;F++){const R=m[F];if(R.isSunLight){const P=a.sun[x];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(S),x++}else if(R.isDirectionalLight){const P=a.directional[v];P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),v++}else if(R.isSpotLight){const P=a.spot[A];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),A++}else if(R.isRectAreaLight){const P=a.rectArea[D];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(S),u.identity(),c.copy(R.matrixWorld),c.premultiply(S),u.extractRotation(c),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),D++}else if(R.isPointLight){const P=a.point[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(S),M++}else if(R.isHemisphereLight){const P=a.hemi[E];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(S),E++}}}return{setup:h,setupView:p,state:a}}function G2(s){const e=new mb(s),n=[],a=[],o=[];function c(v){x.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function h(v){a.push(v)}function p(v){o.push(v)}function m(){e.setup(n)}function g(v){e.setupView(n,v)}const x={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:m,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function pb(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new G2(s),e.set(o,[h])):c>=u.length?(h=new G2(s),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_b=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],xb=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Z2=new an,jo=new Q,mh=new Q;function Mb(s,e,n){let a=new L0;const o=new Ye,c=new Ye,u=new on,h=new Ry,p=new Cy,m={},g=n.maxTextureSize,x={[Ir]:ti,[ti]:Ir,[Pi]:Pi},v=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:gb,fragmentShader:vb}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const A=new zn;A.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new bn(A,v),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let S=this.type;this.render=function(O,L,b){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||O.length===0)return;this.type===SM&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=au);const N=s.getRenderTarget(),V=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Ta),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ae=S!==this.type;ae&&L.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(J=>J.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,J=O.length;W<J;W++){const B=O[W],G=B.shadow;if(G===void 0){pt("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const oe=G.getFrameExtents();o.multiply(oe),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/oe.x),o.x=c.x*oe.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/oe.y),o.y=c.y*oe.y,G.mapSize.y=c.y));const re=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=re,G.map===null||ae===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Qo){if(B.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ii(o.x,o.y,{format:Br,type:$i,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new dl(o.x,o.y,ji),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ca,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn}else B.isPointLight?(G.map=new c_(o.x),G.map.depthTexture=new ZS(o.x,Qi)):(G.map=new Ii(o.x,o.y),G.map.depthTexture=new dl(o.x,o.y,Qi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ca,this.type===au?(G.map.depthTexture.compareFunction=re?A0:b0,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==o.x||G.map.height!==o.y)&&G.map.setSize(o.x,o.y);const pe=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();B.isPointLight!==!0&&G.updateMatrices(B,b);for(let U=0;U<pe;U++){const ie=G.getCamera(U);if(B.isPointLight){const ve=G.camera,Oe=G.matrix,Ue=B.distance||ve.far;Ue!==ve.far&&(ve.far=Ue,ve.updateProjectionMatrix()),jo.setFromMatrixPosition(B.matrixWorld),ve.position.copy(jo),mh.copy(ve.position),mh.add(_b[U]),ve.up.copy(xb[U]),ve.lookAt(mh),ve.updateMatrixWorld(),Oe.makeTranslation(-jo.x,-jo.y,-jo.z),Z2.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Z2,ve.coordinateSystem,ve.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,U),s.clear();else{U===0&&(s.setRenderTarget(G.map),s.clear());const ve=G.getViewport(U);u.set(c.x*ve.x,c.y*ve.y,c.x*ve.z,c.y*ve.w),K.viewport(u)}a=G.getFrustum(U),R(L,b,ie,B,this.type)}G.isPointLightShadow!==!0&&this.type===Qo&&F(G,b),G.needsUpdate=!1}S=this.type,E.needsUpdate=!1,s.setRenderTarget(N,V,q)};function F(O,L){const b=e.update(D);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null?O.mapPass=new Ii(o.x,o.y,{format:Br,type:$i}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),v.uniforms.shadow_pass.value=O.map.depthTexture,v.uniforms.resolution.value.set(O.map.width,O.map.height),v.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(L,null,b,v,D,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value.set(O.map.width,O.map.height),M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(L,null,b,M,D,null)}function I(O,L,b,N){let V=null;const q=b.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(q!==void 0)V=q;else if(V=b.isPointLight===!0?p:h,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const K=V.uuid,ae=L.uuid;let W=m[K];W===void 0&&(W={},m[K]=W);let J=W[ae];J===void 0&&(J=V.clone(),W[ae]=J,L.addEventListener("dispose",P)),V=J}if(V.visible=L.visible,V.wireframe=L.wireframe,N===Qo?V.side=L.shadowSide!==null?L.shadowSide:L.side:V.side=L.shadowSide!==null?L.shadowSide:x[L.side],V.alphaMap=L.alphaMap,V.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,V.map=L.map,V.clipShadows=L.clipShadows,V.clippingPlanes=L.clippingPlanes,V.clipIntersection=L.clipIntersection,V.displacementMap=L.displacementMap,V.displacementScale=L.displacementScale,V.displacementBias=L.displacementBias,V.wireframeLinewidth=L.wireframeLinewidth,V.linewidth=L.linewidth,b.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const K=s.properties.get(V);K.light=b}return V}function R(O,L,b,N,V){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&V===Qo)&&(!O.frustumCulled||O.intersectsFrustum(a))){O.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,O.matrixWorld);const ae=e.update(O),W=O.material;if(Array.isArray(W)){const J=ae.groups;for(let B=0,G=J.length;B<G;B++){const oe=J[B],re=W[oe.materialIndex];if(re&&re.visible){const pe=I(O,re,N,V);O.onBeforeShadow(s,O,L,b,ae,pe,oe),s.renderBufferDirect(b,null,ae,pe,O,oe),O.onAfterShadow(s,O,L,b,ae,pe,oe)}}}else if(W.visible){const J=I(O,W,N,V);O.onBeforeShadow(s,O,L,b,ae,J,null),s.renderBufferDirect(b,null,ae,J,O,null),O.onAfterShadow(s,O,L,b,ae,J,null)}}const K=O.children;for(let ae=0,W=K.length;ae<W;ae++)R(K[ae],L,b,N,V)}function P(O){O.target.removeEventListener("dispose",P);for(const b in m){const N=m[b],V=O.target.uuid;V in N&&(N[V].dispose(),delete N[V])}}}function Sb(s,e){function n(){let H=!1;const Te=new on;let ue=null;const Ce=new on(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!H&&(s.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,xe,je,it,Bt){Bt===!0&&(Ie*=it,xe*=it,je*=it),Te.set(Ie,xe,je,it),Ce.equals(Te)===!1&&(s.clearColor(Ie,xe,je,it),Ce.copy(Te))},reset:function(){H=!1,ue=null,Ce.set(-1,0,0,0)}}}function a(){let H=!1,Te=!1,ue=null,Ce=null,Ie=null;return{setReversed:function(xe){if(Te!==xe){const je=e.get("EXT_clip_control");xe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Te=xe;const it=Ie;Ie=null,this.setClear(it)}},getReversed:function(){return Te},setTest:function(xe){xe?_e(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(xe){ue!==xe&&!H&&(s.depthMask(xe),ue=xe)},setFunc:function(xe){if(Te&&(xe=nS[xe]),Ce!==xe){switch(xe){case Mh:s.depthFunc(s.NEVER);break;case Sh:s.depthFunc(s.ALWAYS);break;case yh:s.depthFunc(s.LESS);break;case ol:s.depthFunc(s.LEQUAL);break;case Eh:s.depthFunc(s.EQUAL);break;case bh:s.depthFunc(s.GEQUAL);break;case Ah:s.depthFunc(s.GREATER);break;case Th:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=xe}},setLocked:function(xe){H=xe},setClear:function(xe){Ie!==xe&&(Ie=xe,Te&&(xe=1-xe),s.clearDepth(xe))},reset:function(){H=!1,ue=null,Ce=null,Ie=null,Te=!1}}}function o(){let H=!1,Te=null,ue=null,Ce=null,Ie=null,xe=null,je=null,it=null,Bt=null;return{setTest:function(Dt){H||(Dt?_e(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Dt){Te!==Dt&&!H&&(s.stencilMask(Dt),Te=Dt)},setFunc:function(Dt,Wn,ni){(ue!==Dt||Ce!==Wn||Ie!==ni)&&(s.stencilFunc(Dt,Wn,ni),ue=Dt,Ce=Wn,Ie=ni)},setOp:function(Dt,Wn,ni){(xe!==Dt||je!==Wn||it!==ni)&&(s.stencilOp(Dt,Wn,ni),xe=Dt,je=Wn,it=ni)},setLocked:function(Dt){H=Dt},setClear:function(Dt){Bt!==Dt&&(s.clearStencil(Dt),Bt=Dt)},reset:function(){H=!1,Te=null,ue=null,Ce=null,Ie=null,xe=null,je=null,it=null,Bt=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,m=new WeakMap;let g={},x={},v={},M=new WeakMap,A=[],D=null,E=!1,S=null,F=null,I=null,R=null,P=null,O=null,L=null,b=new Rt(0,0,0),N=0,V=!1,q=null,K=null,ae=null,W=null,J=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,oe=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(re)[1]),G=oe>=1):re.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),G=oe>=2);let pe=null,U={};const ie=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Oe=new on().fromArray(ie),Ue=new on().fromArray(ve);function ke(H,Te,ue,Ce){const Ie=new Uint8Array(4),xe=s.createTexture();s.bindTexture(H,xe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<ue;je++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Te+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return xe}const se={};se[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),_e(s.DEPTH_TEST),u.setFunc(ol),ze(!1),ee(Pg),_e(s.CULL_FACE),Le(Ta);function _e(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function Ne(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function ot(H,Te){return v[H]!==Te?(s.bindFramebuffer(H,Te),v[H]=Te,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Te),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function qe(H,Te){let ue=A,Ce=!1;if(H){ue=M.get(Te),ue===void 0&&(ue=[],M.set(Te,ue));const Ie=H.textures;if(ue.length!==Ie.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,je=Ie.length;xe<je;xe++)ue[xe]=s.COLOR_ATTACHMENT0+xe;ue.length=Ie.length,Ce=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(ue)}function ut(H){return D!==H?(s.useProgram(H),D=H,!0):!1}const Ct={[Ps]:s.FUNC_ADD,[EM]:s.FUNC_SUBTRACT,[bM]:s.FUNC_REVERSE_SUBTRACT};Ct[AM]=s.MIN,Ct[TM]=s.MAX;const be={[RM]:s.ZERO,[CM]:s.ONE,[wM]:s.SRC_COLOR,[yv]:s.SRC_ALPHA,[PM]:s.SRC_ALPHA_SATURATE,[UM]:s.DST_COLOR,[DM]:s.DST_ALPHA,[LM]:s.ONE_MINUS_SRC_COLOR,[Ev]:s.ONE_MINUS_SRC_ALPHA,[OM]:s.ONE_MINUS_DST_COLOR,[NM]:s.ONE_MINUS_DST_ALPHA,[zM]:s.CONSTANT_COLOR,[FM]:s.ONE_MINUS_CONSTANT_COLOR,[IM]:s.CONSTANT_ALPHA,[HM]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(H,Te,ue,Ce,Ie,xe,je,it,Bt,Dt){if(H===Ta){E===!0&&(Ne(s.BLEND),E=!1);return}if(E===!1&&(_e(s.BLEND),E=!0),H!==yM){if(H!==S||Dt!==V){if((F!==Ps||P!==Ps)&&(s.blendEquation(s.FUNC_ADD),F=Ps,P=Ps),Dt)switch(H){case tl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zg:s.blendFunc(s.ONE,s.ONE);break;case Fg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ig:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:zt("WebGLState: Invalid blending: ",H);break}else switch(H){case tl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fg:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ig:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",H);break}I=null,R=null,O=null,L=null,b.set(0,0,0),N=0,S=H,V=Dt}return}Ie=Ie||Te,xe=xe||ue,je=je||Ce,(Te!==F||Ie!==P)&&(s.blendEquationSeparate(Ct[Te],Ct[Ie]),F=Te,P=Ie),(ue!==I||Ce!==R||xe!==O||je!==L)&&(s.blendFuncSeparate(be[ue],be[Ce],be[xe],be[je]),I=ue,R=Ce,O=xe,L=je),(it.equals(b)===!1||Bt!==N)&&(s.blendColor(it.r,it.g,it.b,Bt),b.copy(it),N=Bt),S=H,V=!1}function Pe(H,Te){H.side===Pi?Ne(s.CULL_FACE):_e(s.CULL_FACE);let ue=H.side===ti;Te&&(ue=!ue),ze(ue),H.blending===tl&&H.transparent===!1?Le(Ta):Le(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ce=H.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),nt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(H){q!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),q=H)}function ee(H){H!==xM?(_e(s.CULL_FACE),H!==K&&(H===Pg?s.cullFace(s.BACK):H===MM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),K=H}function Fe(H){H!==ae&&(G&&s.lineWidth(H),ae=H)}function nt(H,Te,ue){H?(_e(s.POLYGON_OFFSET_FILL),(W!==Te||J!==ue)&&(W=Te,J=ue,u.getReversed()&&(Te=-Te),s.polygonOffset(Te,ue))):Ne(s.POLYGON_OFFSET_FILL)}function ct(H){H?_e(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function ht(H){H===void 0&&(H=s.TEXTURE0+B-1),pe!==H&&(s.activeTexture(H),pe=H)}function X(H,Te,ue){ue===void 0&&(pe===null?ue=s.TEXTURE0+B-1:ue=pe);let Ce=U[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},U[ue]=Ce),(Ce.type!==H||Ce.texture!==Te)&&(pe!==ue&&(s.activeTexture(ue),pe=ue),s.bindTexture(H,Te||se[H]),Ce.type=H,Ce.texture=Te)}function ft(){const H=U[pe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function T(){try{s.texSubImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function te(){try{s.texSubImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function He(){try{s.texStorage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function Ve(){try{s.texStorage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function Se(){try{s.texImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function Ee(){try{s.texImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function Be(H){return x[H]!==void 0?x[H]:s.getParameter(H)}function Xe(H,Te){x[H]!==Te&&(s.pixelStorei(H,Te),x[H]=Te)}function Ge(H){Oe.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Oe.copy(H))}function Ze(H){Ue.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Ue.copy(H))}function st(H,Te){let ue=m.get(Te);ue===void 0&&(ue=new WeakMap,m.set(Te,ue));let Ce=ue.get(H);Ce===void 0&&(Ce=s.getUniformBlockIndex(Te,H.name),ue.set(H,Ce))}function $(H,Te){const Ce=m.get(Te).get(H);p.get(Te)!==Ce&&(s.uniformBlockBinding(Te,Ce,H.__bindingPointIndex),p.set(Te,Ce))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},x={},pe=null,U={},v={},M=new WeakMap,A=[],D=null,E=!1,S=null,F=null,I=null,R=null,P=null,O=null,L=null,b=new Rt(0,0,0),N=0,V=!1,q=null,K=null,ae=null,W=null,J=null,Oe.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:_e,disable:Ne,bindFramebuffer:ot,drawBuffers:qe,useProgram:ut,setBlending:Le,setMaterial:Pe,setFlipSided:ze,setCullFace:ee,setLineWidth:Fe,setPolygonOffset:nt,setScissorTest:ct,activeTexture:ht,bindTexture:X,unbindTexture:ft,compressedTexImage2D:gt,compressedTexImage3D:z,texImage2D:Se,texImage3D:Ee,pixelStorei:Xe,getParameter:Be,updateUBOMapping:st,uniformBlockBinding:$,texStorage2D:He,texStorage3D:Ve,texSubImage2D:T,texSubImage3D:te,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Ge,viewport:Ze,reset:De}}function yb(s,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ye,g=new WeakMap,x=new Set;let v;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(z,T){return A?new OffscreenCanvas(z,T):mu("canvas")}function E(z,T,te){let fe=1;const ye=gt(z);if((ye.width>te||ye.height>te)&&(fe=te/Math.max(ye.width,ye.height)),fe<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const He=Math.floor(fe*ye.width),Ve=Math.floor(fe*ye.height);v===void 0&&(v=D(He,Ve));const Se=T?D(He,Ve):v;return Se.width=He,Se.height=Ve,Se.getContext("2d").drawImage(z,0,0,He,Ve),pt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+He+"x"+Ve+")."),Se}else return"data"in z&&pt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),z;return z}function S(z){return z.generateMipmaps}function F(z){s.generateMipmap(z)}function I(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(z,T,te,fe,ye,He=!1){if(z!==null){if(s[z]!==void 0)return s[z];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ve;fe&&(Ve=e.get("EXT_texture_norm16"),Ve||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=T;if(T===s.RED&&(te===s.FLOAT&&(Se=s.R32F),te===s.HALF_FLOAT&&(Se=s.R16F),te===s.UNSIGNED_BYTE&&(Se=s.R8),te===s.UNSIGNED_SHORT&&Ve&&(Se=Ve.R16_EXT),te===s.SHORT&&Ve&&(Se=Ve.R16_SNORM_EXT)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(Se=s.R8UI),te===s.UNSIGNED_SHORT&&(Se=s.R16UI),te===s.UNSIGNED_INT&&(Se=s.R32UI),te===s.BYTE&&(Se=s.R8I),te===s.SHORT&&(Se=s.R16I),te===s.INT&&(Se=s.R32I)),T===s.RG&&(te===s.FLOAT&&(Se=s.RG32F),te===s.HALF_FLOAT&&(Se=s.RG16F),te===s.UNSIGNED_BYTE&&(Se=s.RG8),te===s.UNSIGNED_SHORT&&Ve&&(Se=Ve.RG16_EXT),te===s.SHORT&&Ve&&(Se=Ve.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(Se=s.RG8UI),te===s.UNSIGNED_SHORT&&(Se=s.RG16UI),te===s.UNSIGNED_INT&&(Se=s.RG32UI),te===s.BYTE&&(Se=s.RG8I),te===s.SHORT&&(Se=s.RG16I),te===s.INT&&(Se=s.RG32I)),T===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(Se=s.RGB8UI),te===s.UNSIGNED_SHORT&&(Se=s.RGB16UI),te===s.UNSIGNED_INT&&(Se=s.RGB32UI),te===s.BYTE&&(Se=s.RGB8I),te===s.SHORT&&(Se=s.RGB16I),te===s.INT&&(Se=s.RGB32I)),T===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(Se=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(Se=s.RGBA16UI),te===s.UNSIGNED_INT&&(Se=s.RGBA32UI),te===s.BYTE&&(Se=s.RGBA8I),te===s.SHORT&&(Se=s.RGBA16I),te===s.INT&&(Se=s.RGBA32I)),T===s.RGB&&(te===s.UNSIGNED_SHORT&&Ve&&(Se=Ve.RGB16_EXT),te===s.SHORT&&Ve&&(Se=Ve.RGB16_SNORM_EXT),te===s.UNSIGNED_INT_5_9_9_9_REV&&(Se=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(Se=s.R11F_G11F_B10F)),T===s.RGBA){const Ee=He?hu:Pt.getTransfer(ye);te===s.FLOAT&&(Se=s.RGBA32F),te===s.HALF_FLOAT&&(Se=s.RGBA16F),te===s.UNSIGNED_BYTE&&(Se=Ee===Xt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT&&Ve&&(Se=Ve.RGBA16_EXT),te===s.SHORT&&Ve&&(Se=Ve.RGBA16_SNORM_EXT),te===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)}return(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function P(z,T){let te;return z?T===null||T===Qi||T===cl?te=s.DEPTH24_STENCIL8:T===ji?te=s.DEPTH32F_STENCIL8:T===ll&&(te=s.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qi||T===cl?te=s.DEPTH_COMPONENT24:T===ji?te=s.DEPTH_COMPONENT32F:T===ll&&(te=s.DEPTH_COMPONENT16),te}function O(z,T){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Pn&&z.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function L(z){const T=z.target;T.removeEventListener("dispose",L),N(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&x.delete(T)}function b(z){const T=z.target;T.removeEventListener("dispose",b),q(T)}function N(z){const T=a.get(z);if(T.__webglInit===void 0)return;const te=z.source,fe=M.get(te);if(fe){const ye=fe[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&V(z),Object.keys(fe).length===0&&M.delete(te)}a.remove(z)}function V(z){const T=a.get(z);s.deleteTexture(T.__webglTexture);const te=z.source,fe=M.get(te);delete fe[T.__cacheKey],u.memory.textures--}function q(z){const T=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let ye=0;ye<T.__webglFramebuffer[fe].length;ye++)s.deleteFramebuffer(T.__webglFramebuffer[fe][ye]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=z.textures;for(let fe=0,ye=te.length;fe<ye;fe++){const He=a.get(te[fe]);He.__webglTexture&&(s.deleteTexture(He.__webglTexture),u.memory.textures--),a.remove(te[fe])}a.remove(z)}let K=0;function ae(){K=0}function W(){return K}function J(z){K=z}function B(){const z=K;return z>=o.maxTextures&&pt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+o.maxTextures),K+=1,z}function G(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function oe(z,T){const te=a.get(z);if(z.isVideoTexture&&X(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&te.__version!==z.version){const fe=z.image;if(fe===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(te,z,T);return}}else z.isExternalTexture&&(te.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function re(z,T){const te=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&te.__version!==z.version){Ne(te,z,T);return}else z.isExternalTexture&&(te.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function pe(z,T){const te=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&te.__version!==z.version){Ne(te,z,T);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function U(z,T){const te=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&te.__version!==z.version){ot(te,z,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const ie={[Rh]:s.REPEAT,[Aa]:s.CLAMP_TO_EDGE,[Ch]:s.MIRRORED_REPEAT},ve={[Pn]:s.NEAREST,[GM]:s.NEAREST_MIPMAP_NEAREST,[Lc]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Fd]:s.LINEAR_MIPMAP_NEAREST,[zr]:s.LINEAR_MIPMAP_LINEAR},Oe={[XM]:s.NEVER,[JM]:s.ALWAYS,[WM]:s.LESS,[b0]:s.LEQUAL,[YM]:s.EQUAL,[A0]:s.GEQUAL,[jM]:s.GREATER,[KM]:s.NOTEQUAL};function Ue(z,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===Fd||T.magFilter===Lc||T.magFilter===zr||T.minFilter===Bn||T.minFilter===Fd||T.minFilter===Lc||T.minFilter===zr)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,ie[T.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,ie[T.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,ie[T.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,ve[T.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,ve[T.minFilter]),T.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,Oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==Lc&&T.minFilter!==zr||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function ke(z,T){let te=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",L));const fe=T.source;let ye=M.get(fe);ye===void 0&&(ye={},M.set(fe,ye));const He=G(T);if(He!==z.__cacheKey){ye[He]===void 0&&(ye[He]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),ye[He].usedTimes++;const Ve=ye[z.__cacheKey];Ve!==void 0&&(ye[z.__cacheKey].usedTimes--,Ve.usedTimes===0&&V(T)),z.__cacheKey=He,z.__webglTexture=ye[He].texture}return te}function se(z,T,te){return Math.floor(Math.floor(z/te)/T)}function _e(z,T,te,fe){const He=z.updateRanges;if(He.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,te,fe,T.data);else{He.sort((Xe,Ge)=>Xe.start-Ge.start);let Ve=0;for(let Xe=1;Xe<He.length;Xe++){const Ge=He[Ve],Ze=He[Xe],st=Ge.start+Ge.count,$=se(Ze.start,T.width,4),De=se(Ge.start,T.width,4);Ze.start<=st+1&&$===De&&se(Ze.start+Ze.count-1,T.width,4)===$?Ge.count=Math.max(Ge.count,Ze.start+Ze.count-Ge.start):(++Ve,He[Ve]=Ze)}He.length=Ve+1;const Se=n.getParameter(s.UNPACK_ROW_LENGTH),Ee=n.getParameter(s.UNPACK_SKIP_PIXELS),Be=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Xe=0,Ge=He.length;Xe<Ge;Xe++){const Ze=He[Xe],st=Math.floor(Ze.start/4),$=Math.ceil(Ze.count/4),De=st%T.width,H=Math.floor(st/T.width),Te=$,ue=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,De),n.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,De,H,Te,ue,te,fe,T.data)}z.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,Se),n.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(s.UNPACK_SKIP_ROWS,Be)}}function Ne(z,T,te){let fe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=s.TEXTURE_3D);const ye=ke(z,T),He=T.source;n.bindTexture(fe,z.__webglTexture,s.TEXTURE0+te);const Ve=a.get(He);if(He.version!==Ve.__version||ye===!0){if(n.activeTexture(s.TEXTURE0+te),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ue=Pt.getPrimaries(Pt.workingColorSpace),Ce=T.colorSpace===cr?null:Pt.getPrimaries(T.colorSpace),Ie=T.colorSpace===cr||ue===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let Ee=E(T.image,!1,o.maxTextureSize);Ee=ft(T,Ee);const Be=c.convert(T.format,T.colorSpace),Xe=c.convert(T.type);let Ge=R(T.internalFormat,Be,Xe,T.normalized,T.colorSpace,T.isVideoTexture);Ue(fe,T);let Ze;const st=T.mipmaps,$=T.isVideoTexture!==!0,De=Ve.__version===void 0||ye===!0,H=He.dataReady,Te=O(T,Ee);if(T.isDepthTexture)Ge=P(T.format===Fr,T.type),De&&($?n.texStorage2D(s.TEXTURE_2D,1,Ge,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,Ge,Ee.width,Ee.height,0,Be,Xe,null));else if(T.isDataTexture)if(st.length>0){$&&De&&n.texStorage2D(s.TEXTURE_2D,Te,Ge,st[0].width,st[0].height);for(let ue=0,Ce=st.length;ue<Ce;ue++)Ze=st[ue],$?H&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ze.width,Ze.height,Be,Xe,Ze.data):n.texImage2D(s.TEXTURE_2D,ue,Ge,Ze.width,Ze.height,0,Be,Xe,Ze.data);T.generateMipmaps=!1}else $?(De&&n.texStorage2D(s.TEXTURE_2D,Te,Ge,Ee.width,Ee.height),H&&_e(T,Ee,Be,Xe)):n.texImage2D(s.TEXTURE_2D,0,Ge,Ee.width,Ee.height,0,Be,Xe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$&&De&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ge,st[0].width,st[0].height,Ee.depth);for(let ue=0,Ce=st.length;ue<Ce;ue++)if(Ze=st[ue],T.format!==Fi)if(Be!==null)if($){if(H)if(T.layerUpdates.size>0){const Ie=S2(Ze.width,Ze.height,T.format,T.type);for(const xe of T.layerUpdates){const je=Ze.data.subarray(xe*Ie/Ze.data.BYTES_PER_ELEMENT,(xe+1)*Ie/Ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,xe,Ze.width,Ze.height,1,Be,je)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Ze.width,Ze.height,Ee.depth,Be,Ze.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,Ge,Ze.width,Ze.height,Ee.depth,0,Ze.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Ze.width,Ze.height,Ee.depth,Be,Xe,Ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ue,Ge,Ze.width,Ze.height,Ee.depth,0,Be,Xe,Ze.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{$&&De&&n.texStorage2D(s.TEXTURE_2D,Te,Ge,st[0].width,st[0].height);for(let ue=0,Ce=st.length;ue<Ce;ue++)Ze=st[ue],T.format!==Fi?Be!==null?$?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,Ze.width,Ze.height,Be,Ze.data):n.compressedTexImage2D(s.TEXTURE_2D,ue,Ge,Ze.width,Ze.height,0,Ze.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?H&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ze.width,Ze.height,Be,Xe,Ze.data):n.texImage2D(s.TEXTURE_2D,ue,Ge,Ze.width,Ze.height,0,Be,Xe,Ze.data)}else if(T.isDataArrayTexture)if($){if(De&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ge,Ee.width,Ee.height,Ee.depth),H)if(T.layerUpdates.size>0){const ue=S2(Ee.width,Ee.height,T.format,T.type);for(const Ce of T.layerUpdates){const Ie=Ee.data.subarray(Ce*ue/Ee.data.BYTES_PER_ELEMENT,(Ce+1)*ue/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,Ee.width,Ee.height,1,Be,Xe,Ie)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Xe,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,Ee.width,Ee.height,Ee.depth,0,Be,Xe,Ee.data);else if(T.isData3DTexture)$?(De&&n.texStorage3D(s.TEXTURE_3D,Te,Ge,Ee.width,Ee.height,Ee.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Xe,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,Ge,Ee.width,Ee.height,Ee.depth,0,Be,Xe,Ee.data);else if(T.isFramebufferTexture){if(De)if($)n.texStorage2D(s.TEXTURE_2D,Te,Ge,Ee.width,Ee.height);else{let ue=Ee.width,Ce=Ee.height;for(let Ie=0;Ie<Te;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,Ge,ue,Ce,0,Be,Xe,null),ue>>=1,Ce>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const ue=s.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),Ee.parentNode!==ue){ue.appendChild(Ee),x.add(T),ue.onpaint=Ce=>{const Ie=Ce.changedElements;for(const xe of x)Ie.includes(xe.image)&&(xe.needsUpdate=!0)},ue.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Ee);else{const Ie=s.RGBA,xe=s.RGBA,je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,xe,je,Ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(st.length>0){if($&&De){const ue=gt(st[0]);n.texStorage2D(s.TEXTURE_2D,Te,Ge,ue.width,ue.height)}for(let ue=0,Ce=st.length;ue<Ce;ue++)Ze=st[ue],$?H&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,Be,Xe,Ze):n.texImage2D(s.TEXTURE_2D,ue,Ge,Be,Xe,Ze);T.generateMipmaps=!1}else if($){if(De){const ue=gt(Ee);n.texStorage2D(s.TEXTURE_2D,Te,Ge,ue.width,ue.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Xe,Ee)}else n.texImage2D(s.TEXTURE_2D,0,Ge,Be,Xe,Ee);S(T)&&F(fe),Ve.__version=He.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function ot(z,T,te){if(T.image.length!==6)return;const fe=ke(z,T),ye=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+te);const He=a.get(ye);if(ye.version!==He.__version||fe===!0){n.activeTexture(s.TEXTURE0+te);const Ve=Pt.getPrimaries(Pt.workingColorSpace),Se=T.colorSpace===cr?null:Pt.getPrimaries(T.colorSpace),Ee=T.colorSpace===cr||Ve===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Be=T.isCompressedTexture||T.image[0].isCompressedTexture,Xe=T.image[0]&&T.image[0].isDataTexture,Ge=[];for(let xe=0;xe<6;xe++)!Be&&!Xe?Ge[xe]=E(T.image[xe],!0,o.maxCubemapSize):Ge[xe]=Xe?T.image[xe].image:T.image[xe],Ge[xe]=ft(T,Ge[xe]);const Ze=Ge[0],st=c.convert(T.format,T.colorSpace),$=c.convert(T.type),De=R(T.internalFormat,st,$,T.normalized,T.colorSpace),H=T.isVideoTexture!==!0,Te=He.__version===void 0||fe===!0,ue=ye.dataReady;let Ce=O(T,Ze);Ue(s.TEXTURE_CUBE_MAP,T);let Ie;if(Be){H&&Te&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,De,Ze.width,Ze.height);for(let xe=0;xe<6;xe++){Ie=Ge[xe].mipmaps;for(let je=0;je<Ie.length;je++){const it=Ie[je];T.format!==Fi?st!==null?H?ue&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,0,0,it.width,it.height,st,it.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,De,it.width,it.height,0,it.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,0,0,it.width,it.height,st,$,it.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,De,it.width,it.height,0,st,$,it.data)}}}else{if(Ie=T.mipmaps,H&&Te){Ie.length>0&&Ce++;const xe=gt(Ge[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,De,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Xe){H?ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ge[xe].width,Ge[xe].height,st,$,Ge[xe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,De,Ge[xe].width,Ge[xe].height,0,st,$,Ge[xe].data);for(let je=0;je<Ie.length;je++){const Bt=Ie[je].image[xe].image;H?ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,0,0,Bt.width,Bt.height,st,$,Bt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,De,Bt.width,Bt.height,0,st,$,Bt.data)}}else{H?ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,st,$,Ge[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,De,st,$,Ge[xe]);for(let je=0;je<Ie.length;je++){const it=Ie[je];H?ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,0,0,st,$,it.image[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,De,st,$,it.image[xe])}}}S(T)&&F(s.TEXTURE_CUBE_MAP),He.__version=ye.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function qe(z,T,te,fe,ye,He){const Ve=c.convert(te.format,te.colorSpace),Se=c.convert(te.type),Ee=R(te.internalFormat,Ve,Se,te.normalized,te.colorSpace),Be=a.get(T),Xe=a.get(te);if(Xe.__renderTarget=T,!Be.__hasExternalTextures){const Ge=Math.max(1,T.width>>He),Ze=Math.max(1,T.height>>He);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,He,Ee,Ge,Ze,T.depth,0,Ve,Se,null):n.texImage2D(ye,He,Ee,Ge,Ze,0,Ve,Se,null)}n.bindFramebuffer(s.FRAMEBUFFER,z),ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ye,Xe.__webglTexture,0,ct(T)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ye,Xe.__webglTexture,He),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(z,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,z),T.depthBuffer){const fe=T.depthTexture,ye=fe&&fe.isDepthTexture?fe.type:null,He=P(T.stencilBuffer,ye),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ht(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(T),He,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(T),He,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,He,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,z)}else{const fe=T.textures;for(let ye=0;ye<fe.length;ye++){const He=fe[ye],Ve=c.convert(He.format,He.colorSpace),Se=c.convert(He.type),Ee=R(He.internalFormat,Ve,Se,He.normalized,He.colorSpace);ht(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(T),Ee,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(T),Ee,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(z,T,te){const fe=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ye=a.get(T.depthTexture);if(ye.__renderTarget=T,(!ye.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,T.depthTexture.addEventListener("dispose",L)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,T.depthTexture);const Be=c.convert(T.depthTexture.format),Xe=c.convert(T.depthTexture.type);let Ge;T.depthTexture.format===Ca?Ge=s.DEPTH_COMPONENT24:T.depthTexture.format===Fr&&(Ge=s.DEPTH24_STENCIL8);for(let Ze=0;Ze<6;Ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,Ge,T.width,T.height,0,Be,Xe,null)}}else oe(T.depthTexture,0);const He=ye.__webglTexture,Ve=ct(T),Se=fe?s.TEXTURE_CUBE_MAP_POSITIVE_X+te:s.TEXTURE_2D,Ee=T.depthTexture.format===Fr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ca)ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,Se,He,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,Se,He,0);else if(T.depthTexture.format===Fr)ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,Se,He,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,Se,He,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(z){const T=a.get(z),te=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const fe=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",ye)};fe.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=fe}if(z.depthTexture&&!T.__autoAllocateDepthBuffer)if(te)for(let fe=0;fe<6;fe++)Ct(T.__webglFramebuffer[fe],z,fe);else{const fe=z.texture.mipmaps;fe&&fe.length>0?Ct(T.__webglFramebuffer[0],z,0):Ct(T.__webglFramebuffer,z,0)}else if(te){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=s.createRenderbuffer(),ut(T.__webglDepthbuffer[fe],z,!1);else{const ye=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=T.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,He),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,He)}}else{const fe=z.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ut(T.__webglDepthbuffer,z,!1);else{const ye=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,He),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,He)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(z,T,te){const fe=a.get(z);T!==void 0&&qe(fe.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&be(z)}function Pe(z){const T=z.texture,te=a.get(z),fe=a.get(T);z.addEventListener("dispose",b);const ye=z.textures,He=z.isWebGLCubeRenderTarget===!0,Ve=ye.length>1;if(Ve||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=T.version,u.memory.textures++),He){te.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Se]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)te.__webglFramebuffer[Se][Ee]=s.createFramebuffer()}else te.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Se=0;Se<T.mipmaps.length;Se++)te.__webglFramebuffer[Se]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Se=0,Ee=ye.length;Se<Ee;Se++){const Be=a.get(ye[Se]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),u.memory.textures++)}if(z.samples>0&&ht(z)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Se=0;Se<ye.length;Se++){const Ee=ye[Se];te.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Se]);const Be=c.convert(Ee.format,Ee.colorSpace),Xe=c.convert(Ee.type),Ge=R(Ee.internalFormat,Be,Xe,Ee.normalized,Ee.colorSpace,z.isXRRenderTarget===!0),Ze=ct(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Ge,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,te.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(te.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(He){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,T);for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)qe(te.__webglFramebuffer[Se][Ee],z,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee);else qe(te.__webglFramebuffer[Se],z,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);S(T)&&F(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Se=0,Ee=ye.length;Se<Ee;Se++){const Be=ye[Se],Xe=a.get(Be);let Ge=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ge=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ge,Xe.__webglTexture),Ue(Ge,Be),qe(te.__webglFramebuffer,z,Be,s.COLOR_ATTACHMENT0+Se,Ge,0),S(Be)&&F(Ge)}n.unbindTexture()}else{let Se=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Se=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Se,fe.__webglTexture),Ue(Se,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)qe(te.__webglFramebuffer[Ee],z,T,s.COLOR_ATTACHMENT0,Se,Ee);else qe(te.__webglFramebuffer,z,T,s.COLOR_ATTACHMENT0,Se,0);S(T)&&F(Se),n.unbindTexture()}z.depthBuffer&&be(z)}function ze(z){const T=z.textures;for(let te=0,fe=T.length;te<fe;te++){const ye=T[te];if(S(ye)){const He=I(z),Ve=a.get(ye).__webglTexture;n.bindTexture(He,Ve),F(He),n.unbindTexture()}}}const ee=[],Fe=[];function nt(z){if(z.samples>0){if(ht(z)===!1){const T=z.textures,te=z.width,fe=z.height;let ye=s.COLOR_BUFFER_BIT;const He=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=a.get(z),Se=T.length>1;if(Se)for(let Be=0;Be<T.length;Be++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Ee=z.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Be=0;Be<T.length;Be++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);const Xe=a.get(T[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,te,fe,0,0,te,fe,ye,s.NEAREST),p===!0&&(ee.length=0,Fe.length=0,ee.push(s.COLOR_ATTACHMENT0+Be),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(ee.push(He),Fe.push(He),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Fe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Be=0;Be<T.length;Be++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);const Xe=a.get(T[Be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,Xe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&p){const T=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ct(z){return Math.min(o.maxSamples,z.samples)}function ht(z){const T=a.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function X(z){const T=u.render.frame;g.get(z)!==T&&(g.set(z,T),z.update())}function ft(z,T){const te=z.colorSpace,fe=z.format,ye=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||te!==du&&te!==cr&&(Pt.getTransfer(te)===Xt?(fe!==Fi||ye!==pi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",te)),T}function gt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=B,this.resetTextureUnits=ae,this.getTextureUnits=W,this.setTextureUnits=J,this.setTexture2D=oe,this.setTexture2DArray=re,this.setTexture3D=pe,this.setTextureCube=U,this.rebindTextures=Le,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Eb(s,e){function n(a,o=cr){let c;const u=Pt.getTransfer(o);if(a===pi)return s.UNSIGNED_BYTE;if(a===x0)return s.UNSIGNED_SHORT_4_4_4_4;if(a===M0)return s.UNSIGNED_SHORT_5_5_5_1;if(a===Ov)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===Pv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===Nv)return s.BYTE;if(a===Uv)return s.SHORT;if(a===ll)return s.UNSIGNED_SHORT;if(a===_0)return s.INT;if(a===Qi)return s.UNSIGNED_INT;if(a===ji)return s.FLOAT;if(a===$i)return s.HALF_FLOAT;if(a===zv)return s.ALPHA;if(a===Fv)return s.RGB;if(a===Fi)return s.RGBA;if(a===Ca)return s.DEPTH_COMPONENT;if(a===Fr)return s.DEPTH_STENCIL;if(a===Iv)return s.RED;if(a===S0)return s.RED_INTEGER;if(a===Br)return s.RG;if(a===y0)return s.RG_INTEGER;if(a===E0)return s.RGBA_INTEGER;if(a===ru||a===su||a===ou||a===lu)if(u===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ou)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===lu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wh||a===Lh||a===Dh||a===Nh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Lh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Uh||a===Oh||a===Ph||a===zh||a===Fh||a===uu||a===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Uh||a===Oh)return u===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Ph)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===zh)return c.COMPRESSED_R11_EAC;if(a===Fh)return c.COMPRESSED_SIGNED_R11_EAC;if(a===uu)return c.COMPRESSED_RG11_EAC;if(a===Ih)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Hh||a===Bh||a===Vh||a===Gh||a===Zh||a===qh||a===kh||a===Xh||a===Wh||a===Yh||a===jh||a===Kh||a===Jh||a===Qh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Hh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Bh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Vh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Gh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===kh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Xh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Wh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Yh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===jh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Kh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Jh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Qh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===$h||a===e0||a===t0)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===$h)return u===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===e0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===t0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===n0||a===i0||a===fu||a===a0)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===n0)return c.COMPRESSED_RED_RGTC1_EXT;if(a===i0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===fu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===a0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===cl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Xv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ea({vertexShader:bb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new yu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rb extends Gr{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,m=null,g=null,x=null,v=null,M=null,A=null;const D=typeof XRWebGLBinding<"u",E=new Tb,S={},F=n.getContextAttributes();let I=null,R=null;const P=[],O=[],L=new Ye;let b=null,N=null;const V=new mi;V.viewport=new on;const q=new mi;q.viewport=new on;const K=[V,q],ae=new Oy;let W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let _e=P[se];return _e===void 0&&(_e=new qd,P[se]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(se){let _e=P[se];return _e===void 0&&(_e=new qd,P[se]=_e),_e.getGripSpace()},this.getHand=function(se){let _e=P[se];return _e===void 0&&(_e=new qd,P[se]=_e),_e.getHandSpace()};function B(se){const _e=O.indexOf(se.inputSource);if(_e===-1)return;const Ne=P[_e];Ne!==void 0&&(Ne.update(se.inputSource,se.frame,m||u),Ne.dispatchEvent({type:se.type,data:se.inputSource}))}function G(){o.removeEventListener("select",B),o.removeEventListener("selectstart",B),o.removeEventListener("selectend",B),o.removeEventListener("squeeze",B),o.removeEventListener("squeezestart",B),o.removeEventListener("squeezeend",B),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",oe);for(let se=0;se<P.length;se++){const _e=O[se];_e!==null&&(O[se]=null,P[se].disconnect(_e))}W=null,J=null,E.reset();for(const se in S)delete S[se];if(e.setRenderTarget(I),M=null,v=null,x=null,o=null,R=null,ke.stop(),a.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),N!==null){const se=N.camera;se.fov=N.fov,se.zoom=N.zoom,se.updateProjectionMatrix(),N=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,a.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,a.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(se){m=se},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",B),o.addEventListener("selectstart",B),o.addEventListener("selectend",B),o.addEventListener("squeeze",B),o.addEventListener("squeezestart",B),o.addEventListener("squeezeend",B),o.addEventListener("end",G),o.addEventListener("inputsourceschange",oe),F.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,ot=null,qe=null;F.depth&&(qe=F.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ne=F.stencil?Fr:Ca,ot=F.stencil?cl:Qi);const ut={colorFormat:n.RGBA8,depthFormat:qe,scaleFactor:c};x=this.getBinding(),v=x.createProjectionLayer(ut),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new Ii(v.textureWidth,v.textureHeight,{format:Fi,type:pi,depthTexture:new dl(v.textureWidth,v.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ne={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,Ne),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Ii(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(h),ke.setContext(o),ke.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function oe(se){for(let _e=0;_e<se.removed.length;_e++){const Ne=se.removed[_e],ot=O.indexOf(Ne);ot>=0&&(O[ot]=null,P[ot].disconnect(Ne))}for(let _e=0;_e<se.added.length;_e++){const Ne=se.added[_e];let ot=O.indexOf(Ne);if(ot===-1){for(let ut=0;ut<P.length;ut++)if(ut>=O.length){O.push(Ne),ot=ut;break}else if(O[ut]===null){O[ut]=Ne,ot=ut;break}if(ot===-1)break}const qe=P[ot];qe&&qe.connect(Ne)}}const re=new Q,pe=new Q;function U(se,_e,Ne){re.setFromMatrixPosition(_e.matrixWorld),pe.setFromMatrixPosition(Ne.matrixWorld);const ot=re.distanceTo(pe),qe=_e.projectionMatrix.elements,ut=Ne.projectionMatrix.elements,Ct=qe[14]/(qe[10]-1),be=qe[14]/(qe[10]+1),Le=(qe[9]+1)/qe[5],Pe=(qe[9]-1)/qe[5],ze=(qe[8]-1)/qe[0],ee=(ut[8]+1)/ut[0],Fe=Ct*ze,nt=Ct*ee,ct=ot/(-ze+ee),ht=ct*-ze;if(_e.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ht),se.translateZ(ct),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),qe[10]===-1)se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const X=Ct+ct,ft=be+ct,gt=Fe-ht,z=nt+(ot-ht),T=Le*be/ft*X,te=Pe*be/ft*X;se.projectionMatrix.makePerspective(gt,z,T,te,X,ft),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ie(se,_e){_e===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(_e.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let _e=se.near,Ne=se.far;E.texture!==null&&(E.depthNear>0&&(_e=E.depthNear),E.depthFar>0&&(Ne=E.depthFar)),ae.near=q.near=V.near=_e,ae.far=q.far=V.far=Ne,(W!==ae.near||J!==ae.far)&&(o.updateRenderState({depthNear:ae.near,depthFar:ae.far}),W=ae.near,J=ae.far),ae.layers.mask=se.layers.mask|6,V.layers.mask=ae.layers.mask&-5,q.layers.mask=ae.layers.mask&-3;const ot=se.parent,qe=ae.cameras;ie(ae,ot);for(let ut=0;ut<qe.length;ut++)ie(qe[ut],ot);qe.length===2?U(ae,V,q):ae.projectionMatrix.copy(V.projectionMatrix),N===null&&se.isPerspectiveCamera&&(N={camera:se,fov:se.fov,zoom:se.zoom}),ve(se,ae,ot)};function ve(se,_e,Ne){Ne===null?se.matrix.copy(_e.matrixWorld):(se.matrix.copy(Ne.matrixWorld),se.matrix.invert(),se.matrix.multiply(_e.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=fl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(se){p=se,v!==null&&(v.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(ae)},this.getCameraTexture=function(se){return S[se]};let Oe=null;function Ue(se,_e){if(g=_e.getViewerPose(m||u),A=_e,g!==null){const Ne=g.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let ot=!1;Ne.length!==ae.cameras.length&&(ae.cameras.length=0,ot=!0);for(let be=0;be<Ne.length;be++){const Le=Ne[be];let Pe=null;if(M!==null)Pe=M.getViewport(Le);else{const ee=x.getViewSubImage(v,Le);Pe=ee.viewport,be===0&&(e.setRenderTargetTextures(R,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(R))}let ze=K[be];ze===void 0&&(ze=new mi,ze.layers.enable(be),ze.viewport=new on,K[be]=ze),ze.matrix.fromArray(Le.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Le.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),be===0&&(ae.matrix.copy(ze.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),ot===!0&&ae.cameras.push(ze)}const qe=o.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){x=a.getBinding();const be=x.getDepthInformation(Ne[0]);be&&be.isValid&&be.texture&&E.init(be,o.renderState)}if(qe&&qe.includes("camera-access")&&D){e.state.unbindTexture(),x=a.getBinding();for(let be=0;be<Ne.length;be++){const Le=Ne[be].camera;if(Le){let Pe=S[Le];Pe||(Pe=new Xv,S[Le]=Pe);const ze=x.getCameraImage(Le);Pe.sourceTexture=ze}}}}for(let Ne=0;Ne<P.length;Ne++){const ot=O[Ne],qe=P[Ne];ot!==null&&qe!==void 0&&qe.update(ot,_e,m||u)}Oe&&Oe(se,_e),_e.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_e}),A=null}const ke=new o_;ke.setAnimationLoop(Ue),this.setAnimationLoop=function(se){Oe=se},this.dispose=function(){}}}const Cb=new an,m_=new _t;m_.set(-1,0,0,0,1,0,0,0,1);function wb(s,e){function n(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function a(E,S){S.color.getRGB(E.fogColor.value,a_(s)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function o(E,S,F,I,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(E,S):S.isMeshLambertMaterial?(c(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(E,S),x(E,S)):S.isMeshPhongMaterial?(c(E,S),g(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(E,S),v(E,S),S.isMeshPhysicalMaterial&&M(E,S,R)):S.isMeshMatcapMaterial?(c(E,S),A(E,S)):S.isMeshDepthMaterial?c(E,S):S.isMeshDistanceMaterial?(c(E,S),D(E,S)):S.isMeshNormalMaterial?c(E,S):S.isLineBasicMaterial?(u(E,S),S.isLineDashedMaterial&&h(E,S)):S.isPointsMaterial?p(E,S,F,I):S.isSpriteMaterial?m(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,n(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,n(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,n(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===ti&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,n(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===ti&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,n(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,n(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const F=e.get(S),I=F.envMap,R=F.envMapRotation;I&&(E.envMap.value=I,E.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(R)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(m_),E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,E.aoMapTransform))}function u(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,n(S.map,E.mapTransform))}function h(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function p(E,S,F,I){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*F,E.scale.value=I*.5,S.map&&(E.map.value=S.map,n(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,n(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function m(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,n(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,n(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function g(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function x(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function v(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function M(E,S,F){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.retroreflectivity>0&&(E.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=F.texture,E.transmissionSamplerSize.value.set(F.width,F.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,S){S.matcap&&(E.matcap.value=S.matcap)}function D(E,S){const F=e.get(S).light;E.referencePosition.value.setFromMatrixPosition(F.matrixWorld),E.nearDistance.value=F.shadow.camera.near,E.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Lb(s,e,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,P){const O=P.program;a.uniformBlockBinding(R,O)}function m(R,P){let O=o[R.id];O===void 0&&(E(R),O=g(R),o[R.id]=O,R.addEventListener("dispose",F));const L=P.program;a.updateUBOMapping(R,L);const b=e.render.frame;c[R.id]!==b&&(v(R),c[R.id]=b)}function g(R){const P=x();R.__bindingPointIndex=P;const O=s.createBuffer(),L=R.__size,b=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,L,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,O),O}function x(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const P=o[R.id],O=R.uniforms,L=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let b=0,N=O.length;b<N;b++){const V=O[b];if(Array.isArray(V))for(let q=0,K=V.length;q<K;q++)M(V[q],b,q,L);else M(V,b,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,P,O,L){if(D(R,P,O,L)===!0){const b=R.__offset,N=R.value;if(Array.isArray(N)){let V=0;for(let q=0;q<N.length;q++){const K=N[q],ae=S(K);A(K,R.__data,V),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(V+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(N,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,R.__data)}}function A(R,P,O){typeof R=="number"||typeof R=="boolean"?P[0]=R:R.isMatrix3?(P[0]=R.elements[0],P[1]=R.elements[1],P[2]=R.elements[2],P[3]=0,P[4]=R.elements[3],P[5]=R.elements[4],P[6]=R.elements[5],P[7]=0,P[8]=R.elements[6],P[9]=R.elements[7],P[10]=R.elements[8],P[11]=0):ArrayBuffer.isView(R)?P.set(new R.constructor(R.buffer,R.byteOffset,P.length)):R.toArray(P,O)}function D(R,P,O,L){const b=R.value,N=P+"_"+O;if(L[N]===void 0)return typeof b=="number"||typeof b=="boolean"?L[N]=b:ArrayBuffer.isView(b)?L[N]=b.slice():L[N]=b.clone(),!0;{const V=L[N];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return L[N]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(V.equals(b)===!1)return V.copy(b),!0}}return!1}function E(R){const P=R.uniforms;let O=0;const L=16;for(let N=0,V=P.length;N<V;N++){const q=Array.isArray(P[N])?P[N]:[P[N]];for(let K=0,ae=q.length;K<ae;K++){const W=q[K],J=Array.isArray(W.value)?W.value:[W.value];for(let B=0,G=J.length;B<G;B++){const oe=J[B],re=S(oe),pe=O%L,U=pe%re.boundary,ie=pe+U;O+=U,ie!==0&&L-ie<re.storage&&(O+=L-ie),W.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=O,O+=re.storage}}}const b=O%L;return b>0&&(O+=L-b),R.__size=O,R.__cache={},this}function S(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",R),P}function F(R){const P=R.target;P.removeEventListener("dispose",F);const O=u.indexOf(P.__bindingPointIndex);u.splice(O,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function I(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:p,update:m,dispose:I}}const Db=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function Nb(){return Wi===null&&(Wi=new BS(Db,16,16,Br,$i),Wi.name="DFG_LUT",Wi.minFilter=Bn,Wi.magFilter=Bn,Wi.wrapS=Aa,Wi.wrapT=Aa,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class Ub{constructor(e={}){const{canvas:n=eS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1,outputBufferType:M=pi}=e;this.isWebGLRenderer=!0;let A;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=a.getContextAttributes().alpha}else A=u;const D=M,E=new Set([E0,y0,S0]),S=new Set([pi,Qi,ll,cl,x0,M0]),F=new Uint32Array(4),I=new Int32Array(4),R=new Q;let P=null,O=null;const L=[],b=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let q=!1,K=null,ae=null,W=null,J=null;this._outputColorSpace=hi;let B=0,G=0,oe=null,re=-1,pe=null;const U=new on,ie=new on;let ve=null;const Oe=new Rt(0);let Ue=0,ke=n.width,se=n.height,_e=1,Ne=null,ot=null;const qe=new on(0,0,ke,se),ut=new on(0,0,ke,se);let Ct=!1;const be=new L0;let Le=!1,Pe=!1;const ze=new an,ee=new Q,Fe=new on,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function ht(){return oe===null?_e:1}let X=a;function ft(C,Y){return n.getContext(C,Y)}let gt,z,T,te,fe,ye,He,Ve,Se,Ee,Be,Xe,Ge,Ze,st,$,De,H,Te,ue,Ce,Ie,xe;try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${g0}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",Dt,!1),n.addEventListener("webglcontextcreationerror",Wn,!1),X===null){const Y="webgl2";if(X=ft(Y,C),X===null)throw ft(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(C){throw n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",Dt,!1),n.removeEventListener("webglcontextcreationerror",Wn,!1),zt("WebGLRenderer: "+C.message),C}function je(){gt=new N4(X),gt.init(),Ce=new Eb(X,gt),z=new y4(X,gt,e,Ce),T=new Sb(X,gt),z.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),ae=X.createFramebuffer(),W=X.createFramebuffer(),J=X.createFramebuffer(),te=new P4(X),fe=new ob,ye=new yb(X,gt,T,fe,z,Ce,te),He=new D4(V),Ve=new Fy(X),Ie=new M4(X,Ve),Se=new U4(X,Ve,te,Ie),Ee=new F4(X,Se,Ve,Ie,te),H=new z4(X,z,ye),st=new E4(fe),Be=new sb(V,He,gt,z,Ie,st),Xe=new wb(V,fe),Ge=new cb,Ze=new pb(gt),De=new x4(V,He,T,Ee,A,p),$=new Mb(V,Ee,z),xe=new Lb(X,te,z,T),Te=new S4(X,gt,te),ue=new O4(X,gt,te),te.programs=Be.programs,V.capabilities=z,V.extensions=gt,V.properties=fe,V.renderLists=Ge,V.shadowMap=$,V.state=T,V.info=te}D!==pi&&(N=new H4(D,n.width,n.height,h,o,c));const it=new Rb(V,X);this.xr=it,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(ke,se,!1))},this.getSize=function(C){return C.set(ke,se)},this.setSize=function(C,Y,ge=!0){if(it.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=C,se=Y,n.width=Math.floor(C*_e),n.height=Math.floor(Y*_e),ge===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(ke*_e,se*_e).floor()},this.setDrawingBufferSize=function(C,Y,ge){ke=C,se=Y,_e=ge,n.width=Math.floor(C*ge),n.height=Math.floor(Y*ge),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(D===pi){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(qe)},this.setViewport=function(C,Y,ge,le){C.isVector4?qe.set(C.x,C.y,C.z,C.w):qe.set(C,Y,ge,le),T.viewport(U.copy(qe).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(ut)},this.setScissor=function(C,Y,ge,le){C.isVector4?ut.set(C.x,C.y,C.z,C.w):ut.set(C,Y,ge,le),T.scissor(ie.copy(ut).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(C){T.setScissorTest(Ct=C)},this.setOpaqueSort=function(C){Ne=C},this.setTransparentSort=function(C){ot=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ge=!0){let le=0;if(C){let ce=!1;if(oe!==null){const Ke=oe.texture.format;ce=E.has(Ke)}if(ce){const Ke=oe.texture.type,et=S.has(Ke),We=De.getClearColor(),Qe=De.getClearAlpha(),$e=We.r,xt=We.g,At=We.b;et?(F[0]=$e,F[1]=xt,F[2]=At,F[3]=Qe,X.clearBufferuiv(X.COLOR,0,F)):(I[0]=$e,I[1]=xt,I[2]=At,I[3]=Qe,X.clearBufferiv(X.COLOR,0,I))}else le|=X.COLOR_BUFFER_BIT}Y&&(le|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ge&&(le|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&X.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),K=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",Dt,!1),n.removeEventListener("webglcontextcreationerror",Wn,!1),De.dispose(),Ge.dispose(),Ze.dispose(),fe.dispose(),He.dispose(),Ee.dispose(),Ie.dispose(),xe.dispose(),Be.dispose(),it.dispose(),it.removeEventListener("sessionstart",mn),it.removeEventListener("sessionend",Ln),Yn.stop()};function Bt(C){C.preventDefault(),Vg("WebGLRenderer: Context Lost."),q=!0}function Dt(){Vg("WebGLRenderer: Context Restored."),q=!1;const C=te.autoReset,Y=$.enabled,ge=$.autoUpdate,le=$.needsUpdate,ce=$.type;je(),te.autoReset=C,$.enabled=Y,$.autoUpdate=ge,$.needsUpdate=le,$.type=ce}function Wn(C){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ni(C){const Y=C.target;Y.removeEventListener("dispose",ni),Ks(Y)}function Ks(C){Js(C),fe.remove(C)}function Js(C){const Y=fe.get(C).programs;Y!==void 0&&(Y.forEach(function(ge){Be.releaseProgram(ge)}),C.isShaderMaterial&&Be.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ge,le,ce,Ke){Y===null&&(Y=nt);const et=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,We=Da(C,Y,ge,le,ce);T.setMaterial(le,et);let Qe=ge.index,$e=1;if(le.wireframe===!0){if(Qe=Se.getWireframeAttribute(ge),Qe===void 0)return;$e=2}const xt=ge.drawRange,At=ge.attributes.position;let at=xt.start*$e,Ft=(xt.start+xt.count)*$e;Ke!==null&&(at=Math.max(at,Ke.start*$e),Ft=Math.min(Ft,(Ke.start+Ke.count)*$e)),Qe!==null?(at=Math.max(at,0),Ft=Math.min(Ft,Qe.count)):At!=null&&(at=Math.max(at,0),Ft=Math.min(Ft,At.count));const en=Ft-at;if(en<0||en===1/0)return;Ie.setup(ce,le,We,ge,Qe);let Jt,yt=Te;if(Qe!==null&&(Jt=Ve.get(Qe),yt=ue,yt.setIndex(Jt)),ce.isMesh)le.wireframe===!0?(T.setLineWidth(le.wireframeLinewidth*ht()),yt.setMode(X.LINES)):yt.setMode(X.TRIANGLES);else if(ce.isLine){let gn=le.linewidth;gn===void 0&&(gn=1),T.setLineWidth(gn*ht()),ce.isLineSegments?yt.setMode(X.LINES):ce.isLineLoop?yt.setMode(X.LINE_LOOP):yt.setMode(X.LINE_STRIP)}else ce.isPoints?yt.setMode(X.POINTS):ce.isSprite&&yt.setMode(X.TRIANGLES);if(ce.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))yt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const gn=ce._multiDrawStarts,tt=ce._multiDrawCounts,yn=ce._multiDrawCount,Et=Qe?Ve.get(Qe).bytesPerElement:1,Vn=fe.get(le).currentProgram.getUniforms();for(let ii=0;ii<yn;ii++)Vn.setValue(X,"_gl_DrawID",ii),yt.render(gn[ii]/Et,tt[ii])}else if(ce.isInstancedMesh)yt.renderInstances(at,en,ce.count);else if(ge.isInstancedBufferGeometry){const gn=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,tt=Math.min(ge.instanceCount,gn);yt.renderInstances(at,en,tt)}else yt.render(at,en)};function Qs(C,Y,ge,le){K!==null&&C.isNodeMaterial&&K.setObject(le,C),Le===!0&&st.setState(C,ge,!1),C.transparent===!0&&C.side===Pi&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,La(C,Y,le),C.side=Ir,C.needsUpdate=!0,La(C,Y,le),C.side=Pi):La(C,Y,le)}this.compile=function(C,Y,ge=null){ge===null&&(ge=C),K!==null&&K.renderStart(C,Y,ge),O=Ze.get(ge),O.init(Y),b.push(O),ge.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Y.layers)&&(O.pushLight(ce),ce.castShadow&&O.pushShadow(ce))}),C!==ge&&C.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Y.layers)&&(O.pushLight(ce),ce.castShadow&&O.pushShadow(ce))}),O.setupLights(),K!==null&&K.updateLights(O.state.lightsArray),Pe=this.localClippingEnabled,Le=st.init(this.clippingPlanes,Pe),Le===!0&&st.setGlobalState(this.clippingPlanes,Y),K!==null&&$.render(O.state.shadowsArray,ge,Y);const le=new Set;return C.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Ke=ce.material;if(Ke)if(Array.isArray(Ke))for(let et=0;et<Ke.length;et++){const We=Ke[et];Qs(We,ge,Y,ce),le.add(We)}else Qs(Ke,ge,Y,ce),le.add(Ke)}),O=b.pop(),K!==null&&K.renderEnd(),le},this.compileAsync=function(C,Y,ge=null){const le=this.compile(C,Y,ge);return new Promise(ce=>{function Ke(){if(le.forEach(function(et){const Qe=fe.get(et).currentProgram;(Qe===void 0||Qe.isReady())&&le.delete(et)}),le.size===0){ce(C);return}setTimeout(Ke,10)}gt.get("KHR_parallel_shader_compile")!==null?Ke():setTimeout(Ke,10)})};let qr=null;function Bi(C){qr&&qr(C)}function mn(){Yn.stop()}function Ln(){Yn.start()}const Yn=new o_;Yn.setAnimationLoop(Bi),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(C){qr=C,it.setAnimationLoop(C),C===null?Yn.stop():Yn.start()},it.addEventListener("sessionstart",mn),it.addEventListener("sessionend",Ln),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;K!==null&&K.renderStart(C,Y);const ge=it.enabled===!0&&it.isPresenting===!0,le=N!==null&&(oe===null||ge)&&N.begin(V,oe);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(Y),Y=it.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,Y,oe),O=Ze.get(C,b.length),O.init(Y),O.state.textureUnits=ye.getTextureUnits(),b.push(O),ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),be.setFromProjectionMatrix(ze,Ki,Y.reversedDepth),Pe=this.localClippingEnabled,Le=st.init(this.clippingPlanes,Pe),P=Ge.get(C,L.length),P.init(),L.push(P),it.enabled===!0&&it.isPresenting===!0){const et=V.xr.getDepthSensingMesh();et!==null&&fr(et,Y,-1/0,V.sortObjects)}fr(C,Y,0,V.sortObjects),P.finish(),K!==null&&K.updateLights(O.state.lightsArray),V.sortObjects===!0&&P.sort(Ne,ot),ct=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ct&&De.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&st.beginShadows();const ce=O.state.shadowsArray;if($.render(ce,C,Y),Le===!0&&st.endShadows(),(le&&N.hasRenderPass())===!1){const et=P.opaque,We=P.transmissive;if(O.setupLights(),Y.isArrayCamera){const Qe=Y.cameras;if(We.length>0)for(let $e=0,xt=Qe.length;$e<xt;$e++){const At=Qe[$e];xl(et,We,C,At)}ct&&De.render(C);for(let $e=0,xt=Qe.length;$e<xt;$e++){const At=Qe[$e];_l(P,C,At,At.viewport)}}else We.length>0&&xl(et,We,C,Y),ct&&De.render(C),_l(P,C,Y)}oe!==null&&G===0&&(ye.updateMultisampleRenderTarget(oe),ye.updateRenderTargetMipmap(oe)),le&&N.end(V),C.isScene===!0&&C.onAfterRender(V,C,Y),Ie.resetDefaultState(),re=-1,pe=null,b.pop(),b.length>0?(O=b[b.length-1],ye.setTextureUnits(O.state.textureUnits),Le===!0&&st.setGlobalState(V.clippingPlanes,O.state.camera)):O=null,L.pop(),L.length>0?P=L[L.length-1]:P=null,K!==null&&K.renderEnd()};function fr(C,Y,ge,le){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ge=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(be)){le&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ze);const et=Ee.update(C),We=C.material;We.visible&&P.push(C,et,We,ge,Fe.z,null,Y)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(be))){const et=Ee.update(C),We=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),Fe.copy(et.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(ze)),Array.isArray(We)){const Qe=et.groups;for(let $e=0,xt=Qe.length;$e<xt;$e++){const At=Qe[$e],at=We[At.materialIndex];at&&at.visible&&P.push(C,et,at,ge,Fe.z,At,Y)}}else We.visible&&P.push(C,et,We,ge,Fe.z,null,Y)}}const Ke=C.children;for(let et=0,We=Ke.length;et<We;et++)fr(Ke[et],Y,ge,le)}function _l(C,Y,ge,le){const{opaque:ce,transmissive:Ke,transparent:et}=C;O.setupLightsView(ge),Le===!0&&st.setGlobalState(V.clippingPlanes,ge),le&&T.viewport(U.copy(le)),ce.length>0&&dr(ce,Y,ge),Ke.length>0&&dr(Ke,Y,ge),et.length>0&&dr(et,Y,ge),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function xl(C,Y,ge,le){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[le.id]===void 0){const at=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[le.id]=new Ii(1,1,{generateMipmaps:!0,type:at?$i:pi,minFilter:zr,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Ke=O.state.transmissionRenderTarget[le.id],et=le.viewport||U;Ke.setSize(et.z*V.transmissionResolutionScale,et.w*V.transmissionResolutionScale);const We=V.getRenderTarget(),Qe=V.getActiveCubeFace(),$e=V.getActiveMipmapLevel();V.setRenderTarget(Ke),V.getClearColor(Oe),Ue=V.getClearAlpha(),Ue<1&&V.setClearColor(16777215,.5),V.clear(),ct&&De.render(ge);const xt=V.toneMapping;V.toneMapping=Ji;const At=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),O.setupLightsView(le),Le===!0&&st.setGlobalState(V.clippingPlanes,le),dr(C,ge,le),ye.updateMultisampleRenderTarget(Ke),ye.updateRenderTargetMipmap(Ke),gt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ft=0,en=Y.length;Ft<en;Ft++){const Jt=Y[Ft],{object:yt,geometry:gn,material:tt,group:yn}=Jt;if(tt.side===Pi&&yt.layers.test(le.layers)){const Et=tt.side;tt.side=ti,tt.needsUpdate=!0,wa(yt,ge,le,gn,tt,yn),tt.side=Et,tt.needsUpdate=!0,at=!0}}at===!0&&(ye.updateMultisampleRenderTarget(Ke),ye.updateRenderTargetMipmap(Ke))}V.setRenderTarget(We,Qe,$e),V.setClearColor(Oe,Ue),At!==void 0&&(le.viewport=At),V.toneMapping=xt}function dr(C,Y,ge){const le=Y.isScene===!0?Y.overrideMaterial:null;for(let ce=0,Ke=C.length;ce<Ke;ce++){const et=C[ce],{object:We,geometry:Qe,group:$e}=et;let xt=et.material;xt.allowOverride===!0&&le!==null&&(xt=le),We.layers.test(ge.layers)&&wa(We,Y,ge,Qe,xt,$e)}}function wa(C,Y,ge,le,ce,Ke){K!==null&&ce.isNodeMaterial&&K.setObject(C,ce),C.onBeforeRender(V,Y,ge,le,ce,Ke),C.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ce.onBeforeRender(V,Y,ge,le,C,Ke),ce.transparent===!0&&ce.side===Pi&&ce.forceSinglePass===!1?(ce.side=ti,ce.needsUpdate=!0,V.renderBufferDirect(ge,Y,le,ce,C,Ke),ce.side=Ir,ce.needsUpdate=!0,V.renderBufferDirect(ge,Y,le,ce,C,Ke),ce.side=Pi):V.renderBufferDirect(ge,Y,le,ce,C,Ke),C.onAfterRender(V,Y,ge,le,ce,Ke)}function La(C,Y,ge){Y.isScene!==!0&&(Y=nt);const le=fe.get(C),ce=O.state.lights,Ke=O.state.shadowsArray,et=ce.state.version,We=Be.getParameters(C,ce.state,Ke,Y,ge,O.state.lightProbeGridArray),Qe=Be.getProgramCacheKey(We);let $e=le.programs;le.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,le.fog=Y.fog;const xt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;le.envMap=He.get(C.envMap||le.environment,xt),le.envMapRotation=le.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",ni),$e=new Map,le.programs=$e);let At=$e.get(Qe);if(At!==void 0){if(le.currentProgram===At&&le.lightsStateVersion===et)return ia(C,We),At}else We.uniforms=Be.getUniforms(C),K!==null&&C.isNodeMaterial&&K.build(C,ge,We),C.onBeforeCompile(We,V),At=Be.acquireProgram(We,Qe),$e.set(Qe,At),le.uniforms=We.uniforms;const at=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(at.clippingPlanes=st.uniform),ia(C,We),le.needsLights=Ml(C),le.lightsStateVersion=et,le.needsLights&&(at.ambientLightColor.value=ce.state.ambient,at.lightProbe.value=ce.state.probe,at.sunLights.value=ce.state.sun,at.sunLightShadows.value=ce.state.sunShadow,at.directionalLights.value=ce.state.directional,at.directionalLightShadows.value=ce.state.directionalShadow,at.spotLights.value=ce.state.spot,at.spotLightShadows.value=ce.state.spotShadow,at.rectAreaLights.value=ce.state.rectArea,at.ltc_1.value=ce.state.rectAreaLTC1,at.ltc_2.value=ce.state.rectAreaLTC2,at.pointLights.value=ce.state.point,at.pointLightShadows.value=ce.state.pointShadow,at.hemisphereLights.value=ce.state.hemi,at.sunShadowMatrix.value=ce.state.sunShadowMatrix,at.sunShadowCascade.value=ce.state.sunShadowCascade,at.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,at.spotLightMatrix.value=ce.state.spotLightMatrix,at.spotLightMap.value=ce.state.spotLightMap,at.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=O.state.lightProbeGridArray.length>0,le.currentProgram=At,le.uniformsList=null,At}function na(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=cu.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ia(C,Y){const ge=fe.get(C);ge.outputColorSpace=Y.outputColorSpace,ge.batching=Y.batching,ge.batchingColor=Y.batchingColor,ge.instancing=Y.instancing,ge.instancingColor=Y.instancingColor,ge.instancingMorph=Y.instancingMorph,ge.skinning=Y.skinning,ge.morphTargets=Y.morphTargets,ge.morphNormals=Y.morphNormals,ge.morphColors=Y.morphColors,ge.morphTargetsCount=Y.morphTargetsCount,ge.numClippingPlanes=Y.numClippingPlanes,ge.numIntersection=Y.numClipIntersection,ge.vertexAlphas=Y.vertexAlphas,ge.vertexTangents=Y.vertexTangents,ge.toneMapping=Y.toneMapping}function hr(C,Y){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(Y.matrixWorld);for(let ge=0,le=C.length;ge<le;ge++){const ce=C[ge];if(ce.texture!==null&&ce.boundingBox.containsPoint(R))return ce}return null}function Da(C,Y,ge,le,ce){Y.isScene!==!0&&(Y=nt),ye.resetTextureUnits();const Ke=Y.fog,et=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Y.environment:null,We=oe===null?V.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Pt.workingColorSpace,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,$e=He.get(le.envMap||et,Qe),xt=le.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,At=!!ge.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),at=!!ge.morphAttributes.position,Ft=!!ge.morphAttributes.normal,en=!!ge.morphAttributes.color;let Jt=Ji;le.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Jt=V.toneMapping);const yt=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,gn=yt!==void 0?yt.length:0,tt=fe.get(le),yn=O.state.lights;if(Le===!0&&(Pe===!0||C!==pe)){const Wt=C===pe&&le.id===re;st.setState(le,C,Wt)}let Et=!1;le.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==yn.state.version||tt.outputColorSpace!==We||ce.isBatchedMesh&&tt.batching===!1||!ce.isBatchedMesh&&tt.batching===!0||ce.isBatchedMesh&&tt.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&tt.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&tt.instancing===!1||!ce.isInstancedMesh&&tt.instancing===!0||ce.isSkinnedMesh&&tt.skinning===!1||!ce.isSkinnedMesh&&tt.skinning===!0||ce.isInstancedMesh&&tt.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&tt.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&tt.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&tt.instancingMorph===!1&&ce.morphTexture!==null||tt.envMap!==$e||le.fog===!0&&tt.fog!==Ke||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==st.numPlanes||tt.numIntersection!==st.numIntersection)||tt.vertexAlphas!==xt||tt.vertexTangents!==At||tt.morphTargets!==at||tt.morphNormals!==Ft||tt.morphColors!==en||tt.toneMapping!==Jt||tt.morphTargetsCount!==gn||!!tt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,tt.__version=le.version);let Vn=tt.currentProgram;Et===!0&&(Vn=La(le,Y,ce),K&&le.isNodeMaterial&&K.onUpdateProgram(le,Vn,tt));let ii=!1,Gn=!1,Na=!1;const Vt=Vn.getUniforms(),rn=tt.uniforms;if(T.useProgram(Vn.program)&&(ii=!0,Gn=!0,Na=!0),le.id!==re&&(re=le.id,Gn=!0),tt.needsLights){const Wt=hr(O.state.lightProbeGridArray,ce);tt.lightProbeGrid!==Wt&&(tt.lightProbeGrid=Wt,Gn=!0)}if(ii||pe!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Vt.setValue(X,"projectionMatrix",C.projectionMatrix),Vt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Vi=Vt.map.cameraPosition;Vi!==void 0&&Vi.setValue(X,ee.setFromMatrixPosition(C.matrixWorld)),z.logarithmicDepthBuffer&&Vt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Vt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),pe!==C&&(pe=C,Gn=!0,Na=!0)}if(tt.needsLights&&(yn.state.sunShadowMap.length>0&&Vt.setValue(X,"sunShadowMap",yn.state.sunShadowMap,ye),yn.state.directionalShadowMap.length>0&&Vt.setValue(X,"directionalShadowMap",yn.state.directionalShadowMap,ye),yn.state.spotShadowMap.length>0&&Vt.setValue(X,"spotShadowMap",yn.state.spotShadowMap,ye),yn.state.pointShadowMap.length>0&&Vt.setValue(X,"pointShadowMap",yn.state.pointShadowMap,ye)),ce.isSkinnedMesh){Vt.setOptional(X,ce,"bindMatrix"),Vt.setOptional(X,ce,"bindMatrixInverse");const Wt=ce.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Vt.setValue(X,"boneTexture",Wt.boneTexture,ye))}ce.isBatchedMesh&&(Vt.setOptional(X,ce,"batchingTexture"),Vt.setValue(X,"batchingTexture",ce._matricesTexture,ye),Vt.setOptional(X,ce,"batchingIdTexture"),Vt.setValue(X,"batchingIdTexture",ce._indirectTexture,ye),Vt.setOptional(X,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Vt.setValue(X,"batchingColorTexture",ce._colorsTexture,ye));const gi=ge.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&H.update(ce,ge,Vn),(Gn||tt.receiveShadow!==ce.receiveShadow)&&(tt.receiveShadow=ce.receiveShadow,Vt.setValue(X,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Y.environment!==null&&(rn.envMapIntensity.value=Y.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Nb()),Gn){if(Vt.setValue(X,"toneMappingExposure",V.toneMappingExposure),tt.needsLights&&pn(rn,Na),Ke&&le.fog===!0&&Xe.refreshFogUniforms(rn,Ke),Xe.refreshMaterialUniforms(rn,le,_e,se,O.state.transmissionRenderTarget[C.id]),tt.needsLights&&tt.lightProbeGrid){const Wt=tt.lightProbeGrid;rn.probesSH.value=Wt.texture,rn.probesMin.value.copy(Wt.boundingBox.min),rn.probesMax.value.copy(Wt.boundingBox.max),rn.probesResolution.value.copy(Wt.resolution)}cu.upload(X,na(tt),rn,ye)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(cu.upload(X,na(tt),rn,ye),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Vt.setValue(X,"center",ce.center),Vt.setValue(X,"modelViewMatrix",ce.modelViewMatrix),Vt.setValue(X,"normalMatrix",ce.normalMatrix),Vt.setValue(X,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const Wt=le.uniformsGroups;for(let Vi=0,Ri=Wt.length;Vi<Ri;Vi++){const vi=Wt[Vi];xe.update(vi,Vn),xe.bind(vi,Vn)}}return Vn}function pn(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.sunLights.needsUpdate=Y,C.sunLightShadows.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ml(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(C,Y,ge){const le=fe.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),fe.get(C.texture).__webglTexture=Y,fe.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ge,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ge=fe.get(C);ge.__webglFramebuffer=Y,ge.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ge=0){oe=C,B=Y,G=ge;let le=null,ce=!1,Ke=!1;if(C){const We=fe.get(C);if(We.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(X.FRAMEBUFFER,We.__webglFramebuffer),U.copy(C.viewport),ie.copy(C.scissor),ve=C.scissorTest,T.viewport(U),T.scissor(ie),T.setScissorTest(ve),re=-1;return}else if(We.__webglFramebuffer===void 0)ye.setupRenderTarget(C);else if(We.__hasExternalTextures)ye.rebindTextures(C,fe.get(C.texture).__webglTexture,fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const xt=C.depthTexture;if(We.__boundDepthTexture!==xt){if(xt!==null&&fe.has(xt)&&(C.width!==xt.image.width||C.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(C)}}const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ke=!0);const $e=fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[Y])?le=$e[Y][ge]:le=$e[Y],ce=!0):C.samples>0&&ye.useMultisampledRTT(C)===!1?le=fe.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?le=$e[ge]:le=$e,U.copy(C.viewport),ie.copy(C.scissor),ve=C.scissorTest}else U.copy(qe).multiplyScalar(_e).floor(),ie.copy(ut).multiplyScalar(_e).floor(),ve=Ct;if(ge!==0&&(le=ae),T.bindFramebuffer(X.FRAMEBUFFER,le)&&T.drawBuffers(C,le),T.viewport(U),T.scissor(ie),T.setScissorTest(ve),ce){const We=fe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,We.__webglTexture,ge)}else if(Ke){const We=Y;for(let Qe=0;Qe<C.textures.length;Qe++){const $e=fe.get(C.textures[Qe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Qe,$e.__webglTexture,ge,We)}}else if(C!==null&&ge!==0){const We=fe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,We.__webglTexture,ge)}re=-1};function $s(C){const Y=fe.get(C);return(Y.__readFormat!==C.format||Y.__readType!==C.type)&&(Y.__readFormat=C.format,Y.__readType=C.type,Y.__formatReadable=z.textureFormatReadable(C.format),Y.__typeReadable=z.textureTypeReadable(C.type)),Y}this.readRenderTargetPixels=function(C,Y,ge,le,ce,Ke,et,We=0){if(!(C&&C.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(Qe=Qe[et]),Qe){T.bindFramebuffer(X.FRAMEBUFFER,Qe);try{const $e=C.textures[We],xt=$e.format,At=$e.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+We);const at=$s($e);if(at.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(at.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-le&&ge>=0&&ge<=C.height-ce&&X.readPixels(Y,ge,le,ce,Ce.convert(xt),Ce.convert(At),Ke)}finally{const $e=oe!==null?fe.get(oe).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ge,le,ce,Ke,et,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(Qe=Qe[et]),Qe)if(Y>=0&&Y<=C.width-le&&ge>=0&&ge<=C.height-ce){T.bindFramebuffer(X.FRAMEBUFFER,Qe);const $e=C.textures[We],xt=$e.format,At=$e.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+We);const at=$s($e);if(at.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(at.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ft),X.bufferData(X.PIXEL_PACK_BUFFER,Ke.byteLength,X.STREAM_READ),X.readPixels(Y,ge,le,ce,Ce.convert(xt),Ce.convert(At),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const en=oe!==null?fe.get(oe).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,en);const Jt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tS(X,Jt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ft),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ke),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ft),X.deleteSync(Jt),Ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ge=0){const le=Math.pow(2,-ge),ce=Math.floor(C.image.width*le),Ke=Math.floor(C.image.height*le),et=Y!==null?Y.x:0,We=Y!==null?Y.y:0;ye.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ge,0,0,et,We,ce,Ke),T.unbindTexture()},this.copyTextureToTexture=function(C,Y,ge=null,le=null,ce=0,Ke=0){let et,We,Qe,$e,xt,At,at,Ft,en;const Jt=C.isCompressedTexture?C.mipmaps[Ke]:C.image;if(ge!==null)et=ge.max.x-ge.min.x,We=ge.max.y-ge.min.y,Qe=ge.isBox3?ge.max.z-ge.min.z:1,$e=ge.min.x,xt=ge.min.y,At=ge.isBox3?ge.min.z:0;else{const rn=Math.pow(2,-ce);et=Math.floor(Jt.width*rn),We=Math.floor(Jt.height*rn),C.isDataArrayTexture?Qe=Jt.depth:C.isData3DTexture?Qe=Math.floor(Jt.depth*rn):Qe=1,$e=0,xt=0,At=0}le!==null?(at=le.x,Ft=le.y,en=le.z):(at=0,Ft=0,en=0);const yt=Ce.convert(Y.format),gn=Ce.convert(Y.type);let tt;Y.isData3DTexture?(ye.setTexture3D(Y,0),tt=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ye.setTexture2DArray(Y,0),tt=X.TEXTURE_2D_ARRAY):(ye.setTexture2D(Y,0),tt=X.TEXTURE_2D),T.activeTexture(X.TEXTURE0),T.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),T.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),T.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const yn=T.getParameter(X.UNPACK_ROW_LENGTH),Et=T.getParameter(X.UNPACK_IMAGE_HEIGHT),Vn=T.getParameter(X.UNPACK_SKIP_PIXELS),ii=T.getParameter(X.UNPACK_SKIP_ROWS),Gn=T.getParameter(X.UNPACK_SKIP_IMAGES);T.pixelStorei(X.UNPACK_ROW_LENGTH,Jt.width),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Jt.height),T.pixelStorei(X.UNPACK_SKIP_PIXELS,$e),T.pixelStorei(X.UNPACK_SKIP_ROWS,xt),T.pixelStorei(X.UNPACK_SKIP_IMAGES,At);const Na=C.isDataArrayTexture||C.isData3DTexture,Vt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const rn=fe.get(C),gi=fe.get(Y),Wt=fe.get(rn.__renderTarget),Vi=fe.get(gi.__renderTarget);T.bindFramebuffer(X.READ_FRAMEBUFFER,Wt.__webglFramebuffer),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Ri=0;Ri<Qe;Ri++)Na&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,fe.get(C).__webglTexture,ce,At+Ri),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,fe.get(Y).__webglTexture,Ke,en+Ri)),X.blitFramebuffer($e,xt,et,We,at,Ft,et,We,X.DEPTH_BUFFER_BIT,X.NEAREST);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ce!==0||C.isRenderTargetTexture||fe.has(C)){const rn=fe.get(C),gi=fe.get(Y);T.bindFramebuffer(X.READ_FRAMEBUFFER,W),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,J);for(let Wt=0;Wt<Qe;Wt++)Na?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rn.__webglTexture,ce,At+Wt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,rn.__webglTexture,ce),Vt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,gi.__webglTexture,Ke,en+Wt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,gi.__webglTexture,Ke),ce!==0?X.blitFramebuffer($e,xt,et,We,at,Ft,et,We,X.COLOR_BUFFER_BIT,X.NEAREST):Vt?X.copyTexSubImage3D(tt,Ke,at,Ft,en+Wt,$e,xt,et,We):X.copyTexSubImage2D(tt,Ke,at,Ft,$e,xt,et,We);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Vt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(tt,Ke,at,Ft,en,et,We,Qe,yt,gn,Jt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(tt,Ke,at,Ft,en,et,We,Qe,yt,Jt.data):X.texSubImage3D(tt,Ke,at,Ft,en,et,We,Qe,yt,gn,Jt):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ke,at,Ft,et,We,yt,gn,Jt.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ke,at,Ft,Jt.width,Jt.height,yt,Jt.data):X.texSubImage2D(X.TEXTURE_2D,Ke,at,Ft,et,We,yt,gn,Jt);T.pixelStorei(X.UNPACK_ROW_LENGTH,yn),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et),T.pixelStorei(X.UNPACK_SKIP_PIXELS,Vn),T.pixelStorei(X.UNPACK_SKIP_ROWS,ii),T.pixelStorei(X.UNPACK_SKIP_IMAGES,Gn),Ke===0&&Y.generateMipmaps&&X.generateMipmap(tt),T.unbindTexture()},this.initRenderTarget=function(C){fe.get(C).__webglFramebuffer===void 0&&ye.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ye.setTextureCube(C,0):C.isData3DTexture?ye.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ye.setTexture2DArray(C,0):ye.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){B=0,G=0,oe=null,T.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}function q2(s,e=!1){const n=s[0].index!==null,a=new Set(Object.keys(s[0].attributes)),o=new Set(Object.keys(s[0].morphAttributes)),c={},u={},h=s[0].morphTargetsRelative,p=new zn;let m=0;for(let g=0;g<s.length;++g){const x=s[g];let v=0;if(n!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const M in x.attributes){if(!a.has(M))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+M+'" attribute exists among all geometries, or in none of them.'),null;c[M]===void 0&&(c[M]=[]),c[M].push(x.attributes[M]),v++}if(v!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const M in x.morphAttributes){if(!o.has(M))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;u[M]===void 0&&(u[M]=[]),u[M].push(x.morphAttributes[M])}if(e){let M;if(n)M=x.index.count;else if(x.attributes.position!==void 0)M=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;p.addGroup(m,M,g),m+=M}}if(n){let g=0;const x=[];for(let v=0;v<s.length;++v){const M=s[v].index;for(let A=0;A<M.count;++A)x.push(M.getX(A)+g);g+=s[v].attributes.position.count}p.setIndex(x)}for(const g in c){const x=k2(c[g]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;p.setAttribute(g,x)}for(const g in u){const x=u[g][0].length;if(x!==0){p.morphAttributes=p.morphAttributes||{},p.morphAttributes[g]=[];for(let v=0;v<x;++v){const M=[];for(let D=0;D<u[g].length;++D)M.push(u[g][D][v]);const A=k2(M);if(!A)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;p.morphAttributes[g].push(A)}}}return p}function k2(s){let e,n,a,o=-1,c=0;for(let m=0;m<s.length;++m){const g=s[m];if(e===void 0&&(e=g.array.constructor),e!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=g.gpuType),o!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const u=new e(c),h=new Hi(u,n,a);let p=0;for(let m=0;m<s.length;++m){const g=s[m];if(g.isInterleavedBufferAttribute){const x=p/n;for(let v=0,M=g.count;v<M;v++)for(let A=0;A<n;A++){const D=g.getComponent(v,A);h.setComponent(v+x,A,D)}}else u.set(g.array,p);p+=g.count*n}return o!==void 0&&(h.gpuType=o),h}const Oi=.16,Ob=[{x:0,z:8*Oi},{x:0,z:-16*Oi}];function Pb(s){return()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296)}function F0(s){return 12.4+1.6*Math.sin(3*s+.6)+1*Math.cos(5*s-1)+.45*Math.sin(9*s)}function zb(s){const e=s.z/.88;return Math.hypot(s.x,e)<F0(Math.atan2(e,s.x))}function X2(s,e,n,a){const o=a[s],c=a[e],u=a[n],h=2*(o.x*(c.z-u.z)+c.x*(u.z-o.z)+u.x*(o.z-c.z));if(Math.abs(h)<1e-9)return null;const p=o.x*o.x+o.z*o.z,m=c.x*c.x+c.z*c.z,g=u.x*u.x+u.z*u.z,x=(p*(c.z-u.z)+m*(u.z-o.z)+g*(o.z-c.z))/h,v=(p*(u.x-c.x)+m*(o.x-u.x)+g*(c.x-o.x))/h;return{a:s,b:e,c:n,x,z:v,r2:(x-o.x)**2+(v-o.z)**2}}function Fb(s){const e=s.length,n=[...s,{x:-100,z:-80},{x:100,z:-80},{x:0,z:100}];let a=[X2(e,e+1,e+2,n)];for(let o=0;o<e;o++){const c=n[o],u=new Map,h=[];for(const p of a)if((p.x-c.x)**2+(p.z-c.z)**2<p.r2)for(const[m,g]of[[p.a,p.b],[p.b,p.c],[p.c,p.a]]){const x=m<g?`${m},${g}`:`${g},${m}`;u.has(x)?u.delete(x):u.set(x,[m,g])}else h.push(p);for(const[p,m]of u.values()){const g=X2(p,m,o,n);g&&h.push(g)}a=h}return a.filter(o=>o.a<e&&o.b<e&&o.c<e)}function Ib(s=719){const e=Pb(s),n=[];for(let L=0;L<22e3&&n.length<1700;L++){const b=(e()-.5)*34,N=(e()-.5)*32,V=.26+.46*(.5+.5*Math.sin(b*.55)*Math.cos(N*.63));n.every(q=>(q.x-b)**2+(q.z-N)**2>V*V)&&n.push({x:b,z:N})}const a=Fb(n),o=[],c=new Map;a.forEach((L,b)=>{zb(L)&&(c.set(b,o.length),o.push({x:L.x,z:L.z}))});const u=new Map,h=[];a.forEach((L,b)=>{for(const[N,V]of[[L.a,L.b],[L.b,L.c],[L.c,L.a]]){const q=N<V?`${N},${V}`:`${V},${N}`;if(u.has(q)){const K=c.get(u.get(q)),ae=c.get(b);K!==void 0&&ae!==void 0&&Math.hypot(o[K].x-o[ae].x,o[K].z-o[ae].z)>.035&&h.push({a:K,b:ae})}else u.set(q,b)}});const p=o.map(()=>[]);h.forEach(L=>{p[L.a].push(L.b),p[L.b].push(L.a)});const m=new Set;let g=[];for(let L=0;L<o.length;L++){if(m.has(L))continue;const b=[L];m.add(L);for(let N=0;N<b.length;N++)for(const V of p[b[N]])m.has(V)||(m.add(V),b.push(V));b.length>g.length&&(g=b)}const x=new Map(g.map((L,b)=>[L,b])),v=g.map(L=>o[L]),M=h.filter(L=>x.has(L.a)&&x.has(L.b)).map(L=>({a:x.get(L.a),b:x.get(L.b)})),A=Ob.map(L=>{const b=v.map((V,q)=>({i:q,d:Math.hypot(L.x-V.x,L.z-V.z)})).sort((V,q)=>V.d-q.d).slice(0,3),N=v.length;return v.push({...L}),b.forEach(V=>M.push({a:N,b:V.i,junction:!0})),N});M.push({a:A[0],b:A[1],explorable:!0});const D=v.map(()=>[]);M.forEach((L,b)=>{L.length=Math.hypot(v[L.a].x-v[L.b].x,v[L.a].z-v[L.b].z),D[L.a].push({to:L.b,edge:b}),D[L.b].push({to:L.a,edge:b})});const E=v.map(()=>1/0),S=v.map(()=>-1),F=v.map(()=>!1);E[A[1]]=0;for(let L=0;L<v.length;L++){let b=-1;for(let N=0;N<v.length;N++)!F[N]&&(b<0||E[N]<E[b])&&(b=N);if(b<0||!Number.isFinite(E[b]))break;F[b]=!0;for(const N of D[b]){const V=E[b]+M[N.edge].length;V<E[N.to]&&(E[N.to]=V,S[N.to]=N.edge)}}const I=v.map(()=>1),R=M.map(()=>0),P=v.map((L,b)=>b).sort((L,b)=>E[b]-E[L]);for(const L of P){const b=S[L];if(b<0)continue;R[b]=I[L];const N=M[b];I[N.a===L?N.b:N.a]+=I[L]}M.forEach((L,b)=>{L.radius=L.explorable?.72*Oi:Math.min(.16,.014+.01*Math.sqrt(R[b])+.006*e()),L.junction&&(L.radius=Math.max(.065,L.radius)),L.bend=(e()-.5)*.16});const O=[.22,1.35,2.9,4.1,5.4].map((L,b)=>{const N=F0(L)-.75;return{x:Math.cos(L)*N,z:Math.sin(L)*N*.88,angle:L,width:1+b%3*.3,length:1.35+b%2*.3}});return{nodes:v,edges:M,ports:A,fronts:O}}const ph=[0,.29,.56,.88],gh=s=>s<.16?0:s<.43?1:s<.7?2:3,Ko=Fs.clamp,kt=(s,e,n)=>new Q(s,e,n);function Hb(s,e){let n=!1,a,o=0,c=0,u=-1,h=-1,p=0,m=0,g=null,x=0,v=0,M=!1,A=!1,D=!1,E=performance.now(),S=0;const F=new NS;F.background=new Rt("#12181a");const I=new mi(47,1,.0015,180),R=new Ub({antialias:!0,alpha:!1,powerPreference:"high-performance"});R.setPixelRatio(Math.min(window.devicePixelRatio,1.6)),R.outputColorSpace=hi,R.toneMapping=v0,R.toneMappingExposure=.92,R.domElement.setAttribute("aria-label","Modelo 3D interativo de Physarum"),s.appendChild(R.domElement);const P=new wy(15201519,4731413,1.25);F.add(P);const O=new v2(16769953,3);O.position.set(-8,18,12),F.add(O);const L=new v2(8907235,1.3);L.position.set(16,8,-10),F.add(L);const b=new Dy(16768633,0,10*Oi,1.3);F.add(b);let N=719;const V=()=>(N=Math.imul(N,1664525)+1013904223>>>0,N/4294967296);function q($,De=12){return $.onBeforeCompile=H=>{H.vertexShader=`varying vec3 vOrganic;
`+H.vertexShader,H.vertexShader=H.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOrganic = position;`),H.fragmentShader=`varying vec3 vOrganic;
`+H.fragmentShader,H.fragmentShader=H.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        vec3 q = vOrganic * ${De.toFixed(1)};
        float n = sin(q.x+sin(q.z*.71))*sin(q.y*.83+cos(q.z*.65));
        float fine = sin(q.x*8.3+q.z*7.9)*sin(q.y*9.1-q.z*6.7);
        diffuseColor.rgb *= .72 + n*.22 + fine*.12;
      `)},$}const K=q(new or({color:14858543,roughness:.48,metalness:.12}),9),ae=q(new or({color:11240481,roughness:.53,metalness:.16,side:Pi}),24),W=new Is;F.add(W);const J=[];function B($,De,H=12){return new O0(new Wv($),H,De,5,!1)}const G=Ib(),oe=G.nodes.map(()=>0);for(const $ of G.edges){if($.explorable)continue;const De=G.nodes[$.a],H=G.nodes[$.b],Te=H.x-De.x,ue=H.z-De.z;J.push(B([kt(De.x,.12,De.z),kt((De.x+H.x)/2-ue*$.bend,.13+$.radius*.08,(De.z+H.z)/2+Te*$.bend),kt(H.x,.12,H.z)],$.radius,6)),oe[$.a]=Math.max(oe[$.a],$.radius),oe[$.b]=Math.max(oe[$.b],$.radius)}G.nodes.forEach(($,De)=>{const H=new _u(oe[De]*.96,8,6);H.translate($.x,.12,$.z),J.push(H)});function re($,De,H,Te,ue,Ce){const Ie=$+Math.cos(H)*Te,xe=De+Math.sin(H)*Te;Math.hypot(Ie,xe)>17||(J.push(B([kt($,.12,De),kt(($+Ie)/2,.14,(De+xe)/2),kt(Ie,.12,xe)],ue,4)),Ce>0&&(re(Ie,xe,H+.3+V()*.25,Te*.62,ue*.62,Ce-1),re(Ie,xe,H-.3-V()*.25,Te*.67,ue*.62,Ce-1)))}for(const $ of G.nodes){const De=Math.atan2($.z/.88,$.x);Math.hypot($.x,$.z/.88)/F0(De)>.84&&V()<.32&&re($.x,$.z,De+(V()-.5)*.9,.35+V()*.6,.024,3)}const pe=[];for(const $ of G.fronts){const De=new $v;De.moveTo(-.85,0);const H=[];for(let xe=0;xe<=48;xe++){const je=-Math.PI/2+xe/48*Math.PI,it=$.length*(1+.065*Math.sin(je*17)+.035*Math.cos(je*29)),Bt=Math.cos(je)*it,Dt=Math.sin(je)*$.width;De.lineTo(Bt,Dt),H.push({x:Bt,z:Dt})}De.closePath();const Te=new U0(De,{depth:.028,bevelEnabled:!0,bevelSize:.035,bevelThickness:.018,bevelSegments:2,steps:1});Te.rotateX(-Math.PI/2),Te.rotateY(-$.angle),Te.translate($.x,.065,$.z);const ue=new bn(Te,q(new or({color:14006595,roughness:.66,metalness:.03,side:Pi}),13));ue.userData.structure="Frente de expansão",ue.userData.frontIndex=pe.length,W.add(ue),pe.push(ue);const Ce=(xe,je)=>kt($.x+xe*Math.cos($.angle)-je*Math.sin($.angle),.13,$.z+xe*Math.sin($.angle)+je*Math.cos($.angle));for(let xe=0;xe<H.length;xe+=2){const je=H[xe];J.push(B([Ce(-.7,0),Ce(je.x*.55,je.z*.46),Ce(je.x*.93,je.z*.93)],.012+V()*.013,8))}const Ie=G.nodes.map(xe=>({p:xe,d:Math.hypot(xe.x-$.x,xe.z-$.z)})).sort((xe,je)=>xe.d-je.d).slice(0,3);for(const{p:xe}of Ie)J.push(B([kt(xe.x,.12,xe.z),Ce(-.7,0),Ce(.1,0)],.045,7))}const U=q2(J);J.forEach($=>$.dispose());const ie=new bn(U,K);ie.userData.structure="Rede tubular",W.add(ie);const ve=new bn(new gu(18,18,.32,96),new or({color:1449763,roughness:.4,metalness:.5}));ve.position.y=-.56,W.add(ve);const Oe=new bn(new sl(18,.14,10,100),new or({color:5333606,metalness:.75,roughness:.3}));Oe.rotation.x=Math.PI/2,Oe.position.y=-.34,W.add(Oe);const Ue=new Is;Ue.scale.setScalar(Oi),Ue.position.y=.12,F.add(Ue);const ke=new gu(.72,.72,24,64,90,!0);ke.rotateX(Math.PI/2),ke.translate(0,0,-4);const se=ke.attributes.position;for(let $=0;$<se.count;$++){const De=se.getX($),H=se.getY($),Te=se.getZ($),ue=Math.atan2(H,De),Ce=1+.095*Math.sin(Te*2+ue*5)+.037*Math.cos(Te*6-ue*4);se.setXYZ($,De*Ce,H*Ce,Te)}ke.computeVertexNormals();const _e=new bn(ke,ae);_e.userData.structure="Tubo plasmodial",Ue.add(_e),N=2041;const Ne=[];for(let $=0;$<96;$++){const De=[],H=$/96*Math.PI*2;for(let Te=0;Te<=60;Te++){const ue=8-Te*.4,Ce=H+Math.sin(ue*1.3+$)*.22+Math.cos(ue*.43+$*2)*.12,Ie=.66+.065*Math.sin(ue*2+Ce*5);De.push(kt(Math.cos(Ce)*Ie,Math.sin(Ce)*Ie,ue))}Ne.push(B(De,.004+V()*.009,120))}for(let $=0;$<80;$++){const De=[],H=7.7-$*.29,Te=V()*6.28;for(let ue=0;ue<=36;ue++){let Ce=ue/36*Math.PI*2,Ie=.655+.06*Math.sin(Ce*5+H*2);De.push(kt(Math.cos(Ce)*Ie,Math.sin(Ce)*Ie,H+.18*Math.sin(Ce*4+Te)))}Ne.push(B(De,.003+V()*.005,72))}const ot=new bn(q2(Ne),q(new or({color:14923337,roughness:.42,metalness:.23}),36));Ne.forEach($=>$.dispose()),Ue.add(ot);const qe=[],ut=q(new Ty({color:15844424,roughness:.35,metalness:.14,clearcoat:.7}),32),Ct=new _u(1,22,16);for(let $=0;$<22;$++){const De=new bn(Ct,ut),H=V()*Math.PI*2,Te=.12+V()*.28;De.position.set(Math.cos(H)*Te,Math.sin(H)*Te,6.3-$*.87),De.scale.setScalar(.055+V()*.055),De.userData={structure:"Núcleo",baseZ:De.position.z,phase:V()*Math.PI*2};const ue=new bn(Ct,new or({color:7885078,roughness:.7}));ue.scale.setScalar(.27),ue.position.set(.14,.2,.12),De.add(ue),Ue.add(De),qe.push(De)}const be=new zn,Le=new Float32Array(1800);for(let $=0;$<600;$++){const De=V()*Math.PI*2,H=Math.sqrt(V())*.64;Le[$*3]=Math.cos(De)*H,Le[$*3+1]=Math.sin(De)*H,Le[$*3+2]=8-V()*24}be.setAttribute("position",new Hi(Le,3));const Pe=new qv({color:16770465,size:.011*Oi,transparent:!0,opacity:.4});Pe.onBeforeCompile=$=>{$.fragmentShader=$.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (length(gl_PointCoord - vec2(.5)) > .5) discard;`)};const ze=new GS(be,Pe);Ue.add(ze);const ee=new bn(new sl(.77,.012,8,64),new pu({color:7136478}));ee.position.z=8,Ue.add(ee);const Fe=$=>$.multiplyScalar(Oi).add(kt(0,.12,0)),nt=[kt(23,29,32),kt(3,5,9),Fe(kt(.2,1.5,11.5)),Fe(kt(0,.02,5)),Fe(kt(0,.015,-3.5))],ct=[kt(0,0,0),kt(0,.12,.4),Fe(kt(0,0,5)),Fe(kt(0,0,-2)),Fe(kt(0,0,-10))],ht=[0,.29,.56,.77,1],X=new Py;let ft=null,gt=null;const z=new bn(new sl(.13,.002,6,48),new pu({color:7731171,depthTest:!1}));z.scale.setScalar(Oi),z.visible=!1,z.renderOrder=10,F.add(z);const T=$=>{ft={x:$.clientX,y:$.clientY,lastX:$.clientX,lastY:$.clientY,id:$.pointerId},s.setPointerCapture($.pointerId)},te=$=>{ft&&(p-=($.clientX-ft.lastX)*.004,m=Ko(m+($.clientY-ft.lastY)*.004,-.7,.7),ft.lastX=$.clientX,ft.lastY=$.clientY)};function fe($=0,De){v=De??(v+$+pe.length)%pe.length;const H=G.fronts[v];g={x:H.x,z:H.z},e.onSelect("Frente de expansão")}const ye=$=>{if(ft&&Math.hypot($.clientX-ft.x,$.clientY-ft.y)<5){const De=s.getBoundingClientRect();X.setFromCamera(new Ye(($.clientX-De.left)/De.width*2-1,-($.clientY-De.top)/De.height*2+1),I);const H=o<.7?[_e,ie,...pe]:[_e,...qe];let Te=X.intersectObjects(H.filter(Ce=>{var Ie;return(Ie=Ce.parent)==null?void 0:Ie.visible}),!1);const ue=Te.find(Ce=>Ce.object.userData.structure==="Frente de expansão");if(ue&&(!Te[0]||ue.distance-Te[0].distance<.25)&&(Te=[ue]),Te.length){const Ce=Te[0].object.userData.structure;e.onSelect(Ce),Ce==="Frente de expansão"?fe(0,Te[0].object.userData.frontIndex):g=null,gt=Ce==="Núcleo"?Te[0].object:null,Ce==="Tubo plasmodial"&&o<.43&&(g=null,c=.56)}}ft=null},He=$=>{$.preventDefault(),g&&e.onSelect(""),g=null,c=Ko(c+Ko($.deltaY,-110,110)*65e-5,0,1)},Ve=()=>ft=null;s.addEventListener("pointerdown",T),s.addEventListener("pointermove",te),s.addEventListener("pointerup",ye),s.addEventListener("pointercancel",Ve),s.addEventListener("wheel",He,{passive:!1});const Se=()=>{const $=s.clientWidth,De=s.clientHeight;!$||!De||(R.setSize($,De),I.aspect=$/De,I.updateProjectionMatrix())},Ee=new ResizeObserver(Se);Ee.observe(s),Se();const Be=kt(0,0,0),Xe=kt(0,0,0),Ge=kt(0,0,0),Ze=kt(0,0,0);function st($){if(n)return;const De=Math.min(($-E)/1e3,.05);if(E=$,!s.clientWidth||!s.clientHeight){a=requestAnimationFrame(st);return}M||(S+=De),o=Fs.damp(o,c,6,De);let H=0;for(;H<3&&o>ht[H+1];)H++;const Te=Fs.smoothstep(o,ht[H],ht[H+1]);Be.lerpVectors(nt[H],nt[H+1],Te),Xe.lerpVectors(ct[H],ct[H+1],Te);const ue=Fs.smoothstep(o,.64,.78);if(Ge.copy(Be).sub(Xe),Ge.applyAxisAngle(kt(0,1,0),p*(1-ue)),Ge.y+=m*Ge.length()*(1-ue),I.position.copy(Xe).add(Ge),Xe.x+=Math.sin(p)*3*ue*Oi,Xe.y+=m*3*ue*Oi,x=Fs.damp(x,g?1:0,6,De),g&&Ze.copy(kt(g.x,.12,g.z)),x>.001){const xe=kt(3,5,4).applyAxisAngle(kt(0,1,0),p);xe.y+=m*3,I.position.lerp(Ze.clone().add(xe),x),Xe.lerp(Ze,x)}I.lookAt(Xe),ae.emissive.setHex(16764756),ae.emissiveIntensity=(1-Fs.smoothstep(o,.43,.68))*.95,b.position.copy(I.position),b.intensity=ue*1.9*Math.pow(Oi,1.3),W.visible=o<.78&&!A,ot.scale.set(1+(D?.3:0),1+(D?.3:0),1),_e.material.transparent=D,_e.material.opacity=D?.18:1;for(const xe of qe)xe.position.z=xe.userData.baseZ+Math.sin(S*.8+xe.userData.phase)*.45;z.visible=!!gt&&o>.65,z.visible&&(gt.getWorldPosition(z.position),z.quaternion.copy(I.quaternion)),ze.position.z=Math.sin(S*.8)*.3;const Ce=gh(o);Ce!==u&&(u=Ce,e.onStage(Ce));const Ie=Math.round(o*100);Ie!==h&&(h=Ie,e.onDepth(Ie)),R.render(F,I),a=requestAnimationFrame(st)}return a=requestAnimationFrame(st),{focusFront:fe,snapshot(){return{progress:o,yaw:p,pitch:m,elapsed:S,focusPoint:g,frontIndex:v,stage:gh(o)}},restore($){$&&(g=$.focusPoint||null,v=$.frontIndex||0,x=g?1:0,o=c=Ko($.progress,0,1),p=$.yaw,m=$.pitch,S=$.elapsed,u=gh(o),h=-1,gt=null)},go($){g=null,c=Ko($,0,1),p=0,m=0,gt=null},pause($){M=$},isolate($){A=$},separate($){D=$},theme($){F.background.set($?"#dce3df":"#12181a")},dispose(){n=!0,cancelAnimationFrame(a),Ee.disconnect(),s.removeEventListener("pointerdown",T),s.removeEventListener("pointermove",te),s.removeEventListener("pointerup",ye),s.removeEventListener("pointercancel",Ve),s.removeEventListener("wheel",He);const $=new Set,De=new Set;F.traverse(H=>{H.geometry&&$.add(H.geometry),H.material&&De.add(H.material)}),$.forEach(H=>H.dispose()),De.forEach(H=>H.dispose()),R.dispose(),R.domElement.remove()}}}const p_=`# Physarum polycephalum: biologia, genômica, fisiologia, métodos experimentais e fronteiras de pesquisa

## Resumo executivo

**Nota nomenclatural essencial.** O organismo universalmente conhecido na literatura experimental como *Physarum polycephalum* Schwein. 1822 foi transferido, com base em filogenia molecular, para **_*Badhamia polycephala*_ (Schwein.) J.M. García-Martín, J.C. Zamora & Lado, 2023**. Species Fungorum e NCBI já adotam *Badhamia polycephala* como nome corrente, mantendo *Physarum polycephalum* como basiônimo/sinônimo; o NCBI preserva o Taxonomy ID **5791**. Como praticamente toda a literatura clássica e grande parte da literatura atual continuam usando *Physarum polycephalum*, este informe emprega **P. polycephalum** como nome experimental convencional e **B. polycephala** quando a precisão taxonômica é importante. citeturn22view0turn22view1

*P. polycephalum* é um amoebozoário mixogástrio, não um fungo, cuja fase plasmodial é uma **única célula multinucleada macroscópica**, frequentemente amarela, organizada como uma rede dinâmica de tubos. Seu interesse científico é excepcional porque combina escala macroscópica, citoplasma contínuo, fluxo citoplasmático oscilatório, milhares a bilhões de núcleos dependendo do tamanho, regeneração, transições de desenvolvimento, resposta a luz e substâncias químicas e remodelação adaptativa da própria geometria. A mesma espécie permite investigar fenômenos que normalmente pertencem a campos separados: ciclo celular, mecânica ativa, sistemas de transporte, transdução de sinais, decisão sem sistema nervoso, genética de protistas, edição de RNA mitocondrial e computação morfológica. citeturn21view1turn24view3

O ciclo sexual canônico alterna **amoebas haploides → fusão → zigoto diploide → plasmódio multinucleado diploide → esporulação com meiose → esporos haploides**. Existem, porém, linhagens apogâmicas capazes de produzir plasmódios haploides sem fusão sexual, razão pela qual afirmações do tipo “o plasmódio é diploide” devem sempre ser condicionadas à linhagem. Outro aspecto incomum é que a mitose é aberta em amoebas, mas fechada no plasmódio. citeturn21view1turn10search5

O genoma nuclear de referência é grande para um protista modelo, rico em repetições e introns, com cerca de **31 mil loci gênicos** sustentados por transcriptômica; a montagem publicada está na série GenBank **ATCM00000000**, e a montagem NCBI encontra-se associada à série **GCA_000413255.x**. Uma característica quase única é a extraordinária abundância de introns do spliceossomo menor U12: foram relatados **mais de 20 mil**, cerca de 25 vezes mais que em outros genomas então conhecidos. O genoma também combina sistemas de sinalização que costumam ser associados a diferentes ramos eucarióticos, incluindo histidina-quinases de dois componentes, tirosina-quinases, GPCRs e fotossensores do tipo fitocromo, criptocromo e fototropina. citeturn21view1turn25search5turn0search11

O genoma mitocondrial, por sua vez, é circular, com **62.862 bp** na sequência clássica, e exibe uma das formas mais extraordinárias de processamento de RNA conhecidas: edição insercional cotranscricional, sobretudo adição de citidinas, mas também outras inserções. Estudos posteriores expandiram a anotação do transcriptoma mitocondrial e uma revisão de 2023 descreve, dependendo da linhagem e de elementos plasmidiais, até cerca de 81 genes/ORFs associados ao sistema mitocondrial. citeturn25search0turn25search2turn10search1

A motilidade emerge de um sistema mecanocímico. Contrações de actomiosina no córtex alteram os raios dos tubos e geram gradientes de pressão; estes produzem **shuttle streaming**, um fluxo endoplasmático que inverte periodicamente. O fluxo não é simplesmente consequência do movimento: ele transporta nutrientes, sinais e até núcleos, acoplando partes distantes da célula. Experimentos recentes mostram uma população de núcleos alternando entre estados aprisionados no córtex poroso e estados móveis advectados pelo fluxo; modelagem indica que esse mecanismo pode transportar informação muito mais rapidamente que difusão simples. citeturn2search0turn4search18turn24view3

Quimiotaxia, fototaxia e mecanossensibilidade são igualmente integradas à mecânica. Açúcares e aminoácidos podem atuar como atratores em contextos específicos; sais, alta osmolaridade e outros compostos podem ser repelentes. Cálcio e nucleotídeos cíclicos participam da transdução. A resposta luminosa é especialmente contextual: plasmodia alimentados geralmente evitam luz intensa, enquanto plasmódios previamente famintos usam luz como sinal de diferenciação e esporulação, com participação de um sistema semelhante a fitocromo e de receptores azul/UV. citeturn2search23turn2search16turn2search17turn2search22turn2search1

No laboratório, a espécie oferece dois regimes complementares. Para ensino, biofísica e redes, a cultura em **ágar não nutritivo + flocos de aveia**, no escuro e em alta umidade, é extremamente robusta. Para bioquímica, transcriptômica e genética, é preferível cultura axênica em meio solúvel; o ATCC recomenda Medium 1288 N Plus C, pH 4,6, hemina e 24–26 °C. O ATCC classifica a linhagem M3CVII como **Biosafety Level 1**. citeturn3search0turn17view0turn16view0

O ferramental molecular é desigual. **RNAi por injeção de dsRNA/siRNA está demonstrado**, assim como substituição gênica por recombinação homóloga; bulk RNA-seq, transcriptômica espacial e single-nucleus RNA-seq são factíveis e já produziram resultados importantes. Em contraste, minha busca até **19 de agosto de 2026** não encontrou uma publicação revisada por pares demonstrando um protocolo CRISPR/Cas funcional e reproduzível especificamente em *B. polycephala/P. polycephalum*. Existem projetos de desenvolvimento de transgenia/CRISPR e CRISPR já é praticável em outros amoebozoários, mas isso não deve ser confundido com uma plataforma estabelecida em *Physarum*. citeturn4search1turn4search0turn13search6turn5search16turn5search2

As afirmações populares de que o organismo “resolve labirintos”, “aprende” ou “tem memória” correspondem a fenômenos experimentais reais, mas exigem linguagem rigorosa. Ele poda redes até manter conexões eficientes, exibe habituação sob certos paradigmas e pode registrar história de nutrientes na hierarquia de diâmetros de seus tubos. Um estudo de 2026 encontrou alternância espontânea compatível com memória espacial apenas em uma escala curta de labirinto e advertiu explicitamente que efeitos topográficos ainda podem explicar o resultado. Portanto, “cognição” é um enquadramento operacional útil; **consciência, representação simbólica ou pensamento semelhante ao animal não são demonstrados**. citeturn6search0turn6search2turn6search3turn24view4

**Hipóteses adotadas para este informe:** onde o pedido não especificou linhagem, orçamento, equipamento, escala, jurisdição ou objetivo aplicado, assumi **“sem restrição”**. Protocolos abaixo são, portanto, pontos de partida de pesquisa e devem ser qualificados por linhagem, estado nutricional, ploidia, temperatura, fase da oscilação contrátil e microbiota associada. Em especial, não se deve tratar pedaços do mesmo plasmódio como réplicas biológicas independentes: eles compartilham história, citoplasma e estado fisiológico sincronizado. citeturn21view1


## Identidade biológica, taxonomia, morfologia e ciclo de vida

**Posição taxonômica.** A classificação varia ligeiramente entre bases quanto aos nomes e níveis intermediários. O NCBI situa o organismo em Eukaryota → Amoebozoa → Evosea → Eumycetozoa → Myxogastria → Myxogastromycetidae → Physariida → Physaraceae → *Badhamia*; Species Fungorum apresenta a combinação *Badhamia polycephala* e registra *Physarum polycephalum* como basiônimo. Essa transferência é suficientemente recente para que pipelines, artigos, coleções e metadados continuem misturando os dois nomes. Pesquisas bibliográficas e ômicas devem sempre usar ambos. citeturn22view0turn22view1

| Nível/atributo | Estado recomendado em 2026 | Observação prática |
|---|---|---|
| Domínio | Eukaryota | Eucarionte |
| Supergrupo | Amoebozoa | Não é fungo nem animal |
| Grupo | Eumycetozoa / Myxogastria | “Slime molds” plasmodiais |
| Ordem | Physariida/Physarales, conforme esquema | A nomenclatura de níveis intermediários não é totalmente uniforme |
| Família | Physaraceae | NCBI |
| Gênero corrente | *Badhamia* | Transferência publicada em 2023 |
| Espécie corrente | *Badhamia polycephala* | Nome aceito por Species Fungorum e NCBI |
| Basiônimo experimental | *Physarum polycephalum* Schwein., 1822 | Continua indispensável para busca bibliográfica |
| NCBI Taxonomy | 5791 | O identificador permaneceu associado à espécie após a renomeação |

Fontes taxonômicas: Species Fungorum e NCBI Taxonomy. citeturn22view0turn22view1

**Plasmódio.** É a forma mais estudada: um sincício/coenócito macroscópico delimitado por uma única membrana plasmática contínua e contendo grande número de núcleos. O corpo organiza-se em uma frente em lâmina/fan e numa rede posterior de tubos. Funcionalmente, pode-se distinguir um córtex/ectoplasma mais estrutural e contrátil e um endoplasma mais fluido, no qual ocorre grande parte do shuttle streaming. O raio dos tubos é dinâmico e constitui simultaneamente uma variável mecânica, hidráulica e informacional. citeturn2search0turn13search17turn24view3

A noção clássica de que todos os núcleos do plasmódio são equivalentes foi refinada. Transcriptômica espacial e de núcleo único demonstrou **heterogeneidade transcricional regional**, e trabalhos de 2025 mostraram que os próprios núcleos alternam entre subpopulações mecanicamente distintas — imóveis ou aprisionadas no córtex e móveis no fluxo. Assim, o plasmódio não deve ser modelado como um “saco perfeitamente misturado”. citeturn13search6turn13search18turn24view3

**Amoebas e flagelados.** Esporos germinam em células mononucleadas haploides. Em substrato úmido, as formas ameboides proliferam por mitose aberta e alimentam-se de microrganismos; em ambiente aquoso podem converter-se reversivelmente em formas flageladas, acompanhadas de grande reorganização do citoesqueleto. A existência dessas formas torna *Physarum* particularmente útil para comparar diferentes organizações de actina, microtúbulos e mecanismos mitóticos dentro do mesmo genoma. citeturn21view1

**Plasmódio versus ameba: mitose.** No plasmódio, a divisão nuclear ocorre sem citocinese, aumentando o número de núcleos enquanto a célula permanece contínua. A mitose é fechada, isto é, o envelope nuclear permanece; na ameba, a mitose é aberta. Em culturas bem alimentadas, divisões nucleares plasmodiais podem mostrar extraordinária sincronização, um dos motivos históricos para a adoção do organismo como modelo de ciclo celular. citeturn21view1

**Ploidia.** No ciclo heterotálico clássico, amoebas são **n**, a fusão entre tipos compatíveis gera um zigoto **2n**, e o plasmódio que se desenvolve desse zigoto é 2n. Durante a diferenciação em estruturas frutificantes ocorre meiose, restaurando esporos haploides. Entretanto, mutações/variantes em sistemas de mating type permitem desenvolvimento **apogâmico**, em que uma ameba forma plasmódio sem fusão; nesses casos, plasmódios podem ser haploides. Estudos citológicos clássicos também relataram aproximadamente 35–40 cromossomos em determinadas linhagens, mas essas contagens históricas não devem ser universalizadas sem reavaliação citogenômica moderna. citeturn21view1turn10search5

**Dormência.** Sob privação nutricional no escuro, o plasmódio pode entrar no estado de **esclerócio**, uma estrutura seca e resistente formada por numerosas unidades celulares/esferulares, capaz de retornar ao crescimento após reidratação. Um trabalho de 2026 investigou se a passagem pelo esclerócio impõe um estado transcricional persistente após reativação e encontrou evidências contra uma grande “memória molecular” estável desse episódio, destacando que dormência e memória comportamental são problemas distintos. citeturn3search21turn23search15

**Esporulação.** Um plasmódio nutricionalmente competente não frutifica simplesmente porque recebe luz. O modelo clássico envolve primeiro vários dias de inanição, criando competência para diferenciação, e então sinal luminoso. Protocolos modernos reproduzem alta eficiência com cerca de três dias de privação seguidos de iluminação em linhagens adequadas; transcriptômica demonstra uma ampla reprogramação de expressão durante essa transição. citeturn23search13turn14search20turn3search1

O ciclo pode ser resumido assim:

\`\`\`mermaid
flowchart TD
    S[Esporo haploide n] --> A[Ameba haploide n]
    A <--> F[Forma flagelada n]
    A -->|condições adversas| C[Cisto/dormência ameboide]
    C --> A
    A -->|mating types compatíveis| Z[Zigoto diploide 2n]
    Z --> P[Plasmódio multinucleado 2n]
    A -. linhagens apogâmicas .-> PH[Plasmódio haploide n]
    P -->|alimentação| G[Crescimento + mitoses fechadas sincronizáveis]
    G --> P
    P -->|inanição + escuro/desidratação| SC[Esclerócio]
    SC -->|reidratação + nutrientes| P
    P -->|inanição → competência → luz| SP[Sporângios]
    SP -->|meiose| S
\`\`\`

Esse diagrama representa o ciclo geral; a via apogâmica e detalhes de mating type são dependentes da linhagem. citeturn21view1turn23search13

Uma linha do tempo útil para orientar a literatura é:

\`\`\`mermaid
timeline
    title Marcos experimentais em Physarum polycephalum
    1822 : descrição como Physarum polycephalum
    1960s : cultura axênica e ciclo celular plasmodial tornam-se sistemas clássicos
    1970s : quimiotaxia, bioeletricidade e contração são quantificadas
    1990s : recombinação homóloga e fotossinalização do desenvolvimento
    2000 : demonstração de seleção de caminho em labirinto
    2010 : redes inspiradas no sistema ferroviário de Tóquio
    2016 : publicação do genoma nuclear
    2021 : memória ambiental codificada na arquitetura tubular
    2022 : transcriptômica espacial e de núcleo único
    2023 : transferência taxonômica para Badhamia polycephala
    2025 : transcriptômica de estresse salino e dinâmica de núcleos em fluxo
    2026 : navegação por resistência hidráulica e novos testes de memória espacial
\`\`\`

Os marcos recentes correspondem à revisão taxonômica, ao genoma, aos estudos de redes/memória e aos trabalhos de 2025–2026 discutidos abaixo. citeturn21view1turn22view0turn24view0turn24view3turn21view0turn24view4


## Genética, genoma e bioquímica

**Genoma nuclear e recursos de sequência.** Schaap e colaboradores publicaram a análise do genoma em 2015/2016. A montagem é rica em repetições simples e complexas; introns têm comprimento médio de aproximadamente 100 bases, e a integração de genoma e transcriptoma permitiu definir cerca de **31.000 loci gênicos**. A sequência draft foi depositada como **ATCM00000000.3**, e o transcriptoma de referência como **GDRG00000000/GDRG01000000**. Como o NCBI vem atualizando tanto a versão da montagem quanto a taxonomia, análises reprodutíveis devem registrar accession **e versão**, não apenas “genoma de Physarum”. citeturn21view1turn25search5

Estimativas do tamanho do assembly em diferentes recursos históricos ficam aproximadamente na ordem de **~190–200 Mb**. A pequena discrepância entre números publicados não deve ser interpretada automaticamente como variação biológica: montagem, remoção de duplicações, tratamento de repetições e versão do assembly alteram o valor. citeturn12search1turn0search22

Um problema bioinformático particularmente importante são os **introns U12**. *P. polycephalum* contém mais de 20 mil introns do spliceossomo menor, número extraordinariamente elevado. Pipelines de anotação treinados principalmente em animais/fungos/planta-modelo podem, portanto, produzir erros de exonização, retenção de intron ou previsão de ORF se não tratarem adequadamente sinais U12; isso é especialmente relevante para desenho de guias, primers e peptídeos proteotípicos. citeturn0search11turn4search7

**Splicing e transcriptoma.** Estudos anteriores ao genoma já revelavam splicing alternativo substancial, e experimentos modernos demonstram remodelação extensa da expressão durante desenvolvimento, estresse e em diferentes regiões do plasmódio. Em 2025, exposição a 50 mM NaCl produziu **2.236 transcritos diferencialmente expressos** segundo os critérios do estudo — 1.027 aumentados e 1.209 reduzidos — juntamente com mudanças de arquitetura e pulsação da rede. citeturn23search3turn24view0

**Principais sistemas gênicos e moleculares.**

| Sistema/gene ou família | Evidência e função conhecida | Relevância experimental |
|---|---|---|
| **Actinas \`ard\`** | Estudos genéticos clássicos identificaram múltiplos loci não ligados de actina; organização e expressão variam com estágio | Motilidade, citoesqueleto, diferenciação; excelentes alvos para genética funcional citeturn25search1turn25search9 |
| **Fragmin + actin-fragmin kinase** | Fragmin regula microfilamentos; a quinase fosforila actina associada a fragmin em Thr | Controle de polimerização, esclerotização e organização de actina citeturn14search24turn25search17 |
| **Histidina-quinases/TCS** | Expansão incomum de sistemas de dois componentes; literatura genômica descreve dezenas de HKs | Sensing ambiental e desenvolvimento; grande espaço de descoberta funcional citeturn21view1turn14search1 |
| **Tirosina-quinases** | Família amplamente representada para um amoebozoário | Evidência sobre evolução antiga de sinalização Tyr em Amorphea citeturn21view1 |
| **GPCRs** | Diversidade ampla, incluindo grande grupo de receptores rhodopsin-like | Candidatos para quimiorrecepção; ligantes de muitos permanecem desconhecidos citeturn21view1 |
| **Fitocromo-like** | Fotoconversão red/far-red e controle de esporulação demonstrados | Desenvolvimento induzido por luz citeturn2search1turn2search10 |
| **Criptocromo/fototropina** | Homólogos identificados no genoma | Candidatos para UV/azul, porém mapa receptor→fenótipo ainda incompleto citeturn21view1 |
| **\`lig1\`/homólogo de \`hus1\`** | Expressão associada à transição fotomorfogenética | Liga sinal luminoso, checkpoint e desenvolvimento citeturn20search20 |
| **NOS** | Atividade/expressão de nitric-oxide synthase aumenta na esporulação; inibição precoce perturba diferenciação | NO como sinal de diferenciação citeturn3search18 |
| **Cdk/ciclinas, Cdc25, Wee1, APC, E2F/DP, Rb** | Conjunto de controle de ciclo celular relativamente elaborado preservado no genoma | Grande valor comparativo para evolução do ciclo eucariótico citeturn21view1 |
| **PPR proteins** | Família de pentatricopeptide-repeat proteins fortemente expandida | Provável importância em organelas/processamento de RNA citeturn10search0turn21view1 |
| **Glom** | Proteína de empacotamento do DNA mitocondrial | Organização de nucleoides mitocondriais citeturn25search6 |

**Genoma mitocondrial.** A sequência completa clássica é um DNA circular de **62.862 bp**, com forte viés A+T. Sua anotação é difícil porque muitas regiões codificantes não produzem RNAs funcionais diretamente a partir da sequência genômica: elas dependem de edição insercional. citeturn25search0turn25search12

O fenômeno é chamado atualmente de **mitochondrial insertional cotranscriptional RNA editing in myxomycetes**, ou MICOTREM em revisões recentes. Citidinas inseridas são o evento predominante, mas não exclusivo. O transcriptoma mitocondrial completo revelou dezenas de RNAs editados e mostrou que alguns ORFs anotados não são detectavelmente transcritos na fase plasmodial de crescimento, reforçando que “ORF no mtDNA” não equivale necessariamente a “gene expresso”. citeturn25search2turn10search1

O resultado tem uma implicação prática rara: **predizer proteína diretamente do DNA mitocondrial pode produzir uma sequência errada**. Para estudos funcionais, deve-se consultar simultaneamente DNA, RNA editado e, quando possível, evidência proteômica. citeturn25search2turn25search12

**Metabolismo.** Plasmódios axênicos crescem em meios ricos em glicose/dextrose, triptona, extrato de levedura, íons e hemina, mostrando um metabolismo heterotrófico robusto. Em vida livre, o sistema é fagotrófico/microbívoro. Respiração, glicólise, metabolismo de aminoácidos e transporte iônico são fortemente acoplados à demanda energética de crescimento e do aparato actomiosínico. A resposta transcricional a sal demonstra que homeostase iônica, proteínas de membrana, metabolismo degradativo e citoesqueleto são remodelados em conjunto. citeturn3search19turn17view0turn24view0

**β-poli(L-malato), PMLA.** Uma peculiaridade bioquímica importante é o acúmulo plasmodial de **β-poly(L-malate)**, um poliânion/poliéster que praticamente caracteriza essa fase do ciclo. O polímero acumula-se em núcleos, interage com proteínas ligantes de ácidos nucleicos, pode modular DNA-polymerase-α/primase e é posteriormente secretado/degradado. Culturas de microplasmódios foram usadas para produção de PMLA, que mais tarde se tornou uma plataforma estudada para nanoconjugados biodegradáveis. citeturn20search3turn20search14turn20search0turn20search10

**Sinalização por Ca²⁺.** A atividade do córtex de actomiosina é modulada por cálcio. Experimentos quimiotáticos clássicos mostraram que manipular Ca²⁺ pode inclusive inverter respostas comportamentais a estímulos químicos, e técnicas de microinjeção com indicadores fluorescentes permitiram visualizar dinâmica de Ca²⁺ no plasmódio. Trabalhos recentes continuam apoiando Ca²⁺ como componente central do acoplamento sinal–contração, embora uma única “via mestre” não explique todos os estímulos. citeturn2search17turn13search9turn2search14

**Nucleotídeos cíclicos.** Tanto cAMP quanto cGMP mudam em resposta a quimioestímulos; microinjeções clássicas mostraram que ambos podem provocar contração, sendo cGMP mais potente nas condições testadas. Esses resultados, juntamente com Ca²⁺ e fosforilação, indicam uma arquitetura sensorial distribuída que converte sinais externos em estado mecânico. citeturn2search16

**Fosforilação não convencional.** Estudos bioquímicos históricos de *Physarum* também chamaram atenção para fosfo-histidina e para fosforilação de actina. A fosfo-histidina é quimicamente lábil e os números quantitativos históricos devem ser reinterpretados à luz das técnicas atuais, mas o genoma confirma que sinalização por histidina não é uma curiosidade isolada: constitui uma família molecular importante do organismo. citeturn14search1turn21view1


## Fisiologia, comportamento e integração de sinais

**A unidade funcional central é o oscilador mecanohidráulico.** O córtex contém actina e miosina capazes de gerar tensão. Contrações locais alteram diâmetro e pressão nos tubos, bombeando endoplasma. Como o corpo forma uma rede interconectada, contrações de regiões separadas acoplam-se hidraulicamente e podem sincronizar ou estabelecer ondas peristálticas. citeturn2search9turn2search0turn4search18

O fluxo muda periodicamente de direção, daí o nome **shuttle streaming**. A oscilação exata depende de linhagem, temperatura, geometria, alimentação e estado fisiológico; um período da ordem de aproximadamente um a poucos minutos é típico dos experimentos clássicos e modernos, mas não deve ser usado como constante universal. No estudo de 2025 sobre movimento nuclear, por exemplo, um ciclo analisado tinha cerca de 120 s. citeturn24view3turn2search0

O movimento global é consequência de assimetria espaço-temporal. Uma onda contrátil perfeitamente simétrica deslocaria fluido para frente e para trás sem produzir avanço líquido significativo; no organismo em migração, padrões de contração, expansão da frente, adesão, fluxo e remodelação do córtex quebram essa simetria e produzem deslocamento. Medidas de forças de tração demonstram pulsos mecânicos periódicos consistentes com esse quadro. citeturn13search17turn19search8

**Transporte e comunicação de longa distância.** O mesmo fluxo que movimenta massa transporta metabólitos e sinais. Em 2025, Tong e colaboradores adicionaram um mecanismo especialmente interessante: núcleos móveis funcionariam como “mensageiros” entre populações de núcleos temporariamente aprisionadas no córtex. O modelo e os parâmetros medidos sugerem que esse sistema de “pigeon post” pode superar mecanismos puramente difusivos, em determinadas condições, por até cerca de uma ordem de grandeza e no máximo ~20 vezes nas comparações realizadas. Isso oferece uma solução física para coordenar uma célula que pode ter dimensões de centímetros. citeturn24view3

**Quimiotaxia.** Experimentos quantitativos clássicos mostraram atração por compostos como glicose, galactose, fosfatos, ATP e cAMP em determinadas condições. Outros estudos encontraram atração por aminoácidos como alanina, aspartato, asparagina, glutamato, glicina, leucina, serina e treonina, enquanto triptofano produziu resposta negativa no ensaio correspondente. Entretanto, “atrator” não é uma propriedade absoluta da molécula: concentração, osmolaridade, substrato e estado nutricional podem transformar a resposta. citeturn2search23turn2search26

Há acoplamento mensurável entre estímulo químico e tensão contrátil. Em experimentos clássicos, alguns atratores reduziram a amplitude da tensão isométrica, ao passo que repelentes e condições hiperosmóticas alteraram a contração na direção oposta. Variações de Ca²⁺ podem inverter o sinal da resposta. Portanto, um ensaio moderno de quimiotaxia não deveria medir apenas “qual braço foi escolhido”: velocidade, dinâmica de contração, osmolaridade e concentração local são variáveis mecanísticas essenciais. citeturn2search11turn2search17

**Fototaxia versus fotomorfogênese.** O comportamento diante de luz não é binário. Ensaios clássicos mostraram que baixa irradiância pode produzir orientação diferente daquela obtida em alta irradiância; UV/azul exerce influência particularmente forte sobre motilidade. Ao mesmo tempo, plasmódios famintos usam luz como gatilho para diferenciação reprodutiva. A literatura genética e espectroscópica sustenta um fotossistema complexo que inclui um receptor semelhante a fitocromo e, pelo genoma, criptocromo e fototropina. citeturn19search1turn2search22turn2search1turn2search10turn21view1

**Mecanossensibilidade e confinamento.** Um resultado de grande importância em 2026 veio de dispositivos microfluídicos bifurcados. Quando comprimento geométrico e resistência hidráulica foram dissociados, *Physarum* preferiu consistentemente o caminho de **menor resistência hidráulica**, mesmo quando esse caminho era geometricamente mais longo. Além disso, maior confinamento alterou o regime locomotor de crescimento sustentado para um padrão intermitente semelhante a “run-and-tumble”. Isso desafia a interpretação simplista de que o organismo “procura sempre o caminho mais curto”: o custo hidráulico é uma variável física independente. citeturn21view0

**Estresse osmótico/salino.** Em 2025 foram testados 0, 25, 50 e 75 mM NaCl. O aumento de sal alterou crescimento, diâmetro dos tubos e frequência de pulsação; RNA-seq a 50 mM revelou mais de dois mil DEGs, incluindo aumento de componentes de transporte iônico, membrana e defesa e redução de vários processos degradativos. Esse experimento é um bom exemplo de integração multiescala: ambiente → expressão gênica → córtex/membrana → fluxo → arquitetura. citeturn24view0

**“Memória”.** Existem pelo menos três conceitos experimentais diferentes que frequentemente são misturados. Primeiro, Boisseau e colaboradores demonstraram **habituação**: resposta reduzida a um estímulo aversivo após exposições repetidas, com recuperação posterior. Segundo, Kramar e Alim mostraram que a presença passada de nutrientes pode ficar codificada transitoriamente na **hierarquia de diâmetros dos tubos**; o corpo é, nesse caso, o suporte da memória. Terceiro, estudos de navegação investigam memória espacial, um fenômeno ainda menos estabelecido. citeturn6search2turn6search3

O experimento de 2026 com 1.274 plasmódios clonais é particularmente instrutivo: alternância espontânea significativa apareceu no labirinto com distância curta de 3 mm, mas não nas distâncias de 7 ou 14 mm nem no desenho de duas curvas após correção estatística. Os próprios autores ressaltam que ainda não está resolvido se o resultado reflete memória propriamente dita ou efeitos da topografia. É, portanto, um contraexemplo útil à tendência de superinterpretar todo comportamento adaptativo como cognição complexa. citeturn24view4


## Ecologia, cultivo e protocolos laboratoriais

Na natureza, mixogástrios ocupam principalmente microhabitats úmidos ricos em matéria orgânica, incluindo madeira em decomposição, casca e serapilheira, onde formas ameboides e plasmodiais interagem com bactérias e outros microrganismos. Registros ecológicos baseados em corpos frutíferos subestimam as fases vegetativas invisíveis; portanto, mapas de “ocorrência da espécie” são também mapas da detectabilidade da esporulação. Revisões ecológicas recentes destacam possíveis contribuições de mixomicetos às redes microbianas e à decomposição de detritos. citeturn15search0turn15search8turn15search31

A amplitude ecológica pode ser maior que a caricatura “toco úmido de floresta”. Em 2025 foi publicado um registro de *B. polycephala* desenvolvendo-se sobre biofilmes bacterianos em um sistema doméstico de drenagem, demonstrando que microhabitats antropogênicos úmidos também podem sustentar a espécie. citeturn15search1turn23search6

**Comparação prática de sistemas de cultura:**

| Sistema | Formulação/condição | Temperatura | Vantagens | Limitações |
|---|---|---:|---|---|
| Ágar + aveia, protocolo didático | Ágar 1%; flocos de aveia; alta umidade; escuro | ~22 °C | Simples, barato, ótimo para comportamento e imagem | Não axênico; composição nutricional variável citeturn3search0 |
| Ágar + aveia, variante experimental | Ágar não nutritivo 2%; 200–400 mg de aveia/dia | 28 ± 2 °C | Crescimento rápido; usado em ensaios aplicados | Temperatura e regime nutricional diferentes dificultam comparação entre laboratórios citeturn3search17 |
| ATCC 1288 N Plus C | Meio definido abaixo + hemina; ágar opcional | 24–26 °C | Cultura axênica, bioquímica e ômicas | Mais trabalhoso; requer controle de esterilidade citeturn17view0turn16view0 |
| Meio Daniel–Rusch clássico | ~1% triptona, 1% glicose, 0,15% extrato de levedura, CaCO₃/sais e suplementos da formulação original | Dependente do protocolo | Histórico para macro- e microplasmódios | Algumas formulações antigas usavam suplementos hoje inconvenientes citeturn3search19 |
| Suspensão de microplasmódios | Meio axênico líquido, aeróbio | ~24–26 °C como ponto inicial | Biomassa homogênea, bioquímica, extração, PMLA | Sensível a aeração/agitação e estado fisiológico citeturn0search10turn20search0 |

**Protocolo de rotina: plasmódio em ágar e aveia.** O protocolo abaixo segue de perto métodos publicados para cultivo robusto em laboratório. citeturn3search0

1. Prepare placas com **ágar 1% em água**, sem nutrientes adicionais. Esterilize e deixe solidificar.
2. Inocule aproximadamente **1 cm²** de um plasmódio saudável ou fragmento de cultura ativa.
3. Disponha inicialmente alguns flocos de aveia esterilizados/comercialmente limpos a pequena distância da inoculação. Em cultura de rotina, uma recomendação publicada é manter cerca de **10–12 flocos** disponíveis.
4. Incube a aproximadamente **22 °C**, no **escuro**, com umidade relativa próxima de **90%**. Evite condensação em gotas diretamente sobre o plasmódio.
5. Após aproximadamente **dois dias**, confirme colonização dos flocos e expansão radial.
6. Reponha aveia fresca aproximadamente a cada **dois dias**. Uma placa pode ficar amplamente colonizada em torno de **cinco dias**, dependendo da área, quantidade de alimento e condição do inóculo.
7. Para manutenção, recorte ~1 cm² da **frente ativa**, não uma região velha e vacuolizada, e transfira para placa nova.
8. Mantenha linhagens-mãe separadas das placas experimentais. Um experimento comportamental deve começar a partir de plasmodia com idade nutricional padronizada.

Os valores de temperatura não são universais: outros laboratórios utilizam 28 ± 2 °C e ágar 2%. A recomendação para um novo programa é escolher um regime e **não misturar dados obtidos em 22 °C e 28 °C sem tratá-los como condições experimentais diferentes**. citeturn3search0turn3search17

**Protocolo axênico ATCC Medium 1288 N Plus C.** A formulação oficial por litro é: ácido cítrico monoidratado 4,04 g; FeCl₃·4H₂O 0,06 g; MgSO₄·7H₂O 0,60 g; CaCl₂·2H₂O 0,60 g; ZnSO₄·7H₂O 0,034 g; Bacto Tryptone 10,0 g; dextrose 10,0 g; extrato de levedura 1,5 g; KH₂PO₄ 2,0 g; água deionizada até 1 L; para meio sólido, ágar 15,0 g/L. Ajusta-se para **pH 4,6 com KOH** e autoclavagem a **121 °C por 15 min**. citeturn17view0turn18view0

Prepare separadamente solução de hemina contendo **250 mg hemina + 1,0 g NaOH em 100 mL de água deionizada**, também autoclavada a 121 °C/15 min. Antes da inoculação, adicione **0,1 mL dessa solução de hemina por 100 mL de meio**. A cultura ATCC é mantida aerobiamente a **24–26 °C**; a página da linhagem informa 24 °C como ótimo de crescimento. citeturn17view0turn16view0

Para recuperar material criopreservado ATCC, a orientação da coleção é descongelamento rápido em aproximadamente **55 °C por ~1,5 min**, sem agitação agressiva, limpeza externa do recipiente com etanol 70% e inoculação de pelo menos ~50 μL — ou alguns fragmentos de material, dependendo da apresentação — no meio recomendado. Crescimento visível pode levar **6–10 dias** durante recuperação. Esses parâmetros são específicos da apresentação ATCC e não devem ser generalizados automaticamente para criopreservação desenvolvida localmente. citeturn16view0

**Protocolo para indução de esporulação.**

1. Expanda um plasmódio saudável até possuir biomassa suficiente.
2. Remova/cesse a oferta de alimento e transfira para condição não nutritiva padronizada.
3. Mantenha aproximadamente **três dias em privação**, tempo usado com alta eficiência em protocolos modernos de *P. polycephalum*.
4. Após a aquisição de competência, aplique o estímulo luminoso do protocolo escolhido; luz visível pode atuar como gatilho de comprometimento com a esporulação.
5. Mantenha um controle igualmente faminto que não receba o estímulo luminoso.
6. Registre tempo até mudança morfológica, produção de esporângios e fração efetivamente esporulada.
7. Para transcriptômica, colete pontos antes da fome, durante aquisição de competência, imediatamente após o sinal e durante diferenciação; não compare apenas “vegetativo” contra “esporulado”, pois isso mistura diversas transições. citeturn23search13turn14search20turn20search7

O requisito “fome + luz” é fortemente estabelecido para *P. polycephalum*, mas não é universal entre mixogástrios. Um estudo de 2025 mostrou perda desse gatilho em espécies relacionadas, o que torna o sistema valioso para evolução comparativa de fotomorfogênese. citeturn23search13

**Protocolo conceitual para esclerotização.** Retire alimento, mantenha o plasmódio no escuro e permita progressiva redução de água até formação de unidades secas de esclerócio. Para reativar, reidrate em ágar úmido e forneça alimento fresco. Como tempo, umidade final e velocidade de secagem variam muito entre linhagens e laboratórios, esses parâmetros devem ser tratados como variáveis experimentais e não como “receita universal”. Para estudos epigenéticos ou de memória, inclua controles pareados que passaram o mesmo tempo em cultura sem atravessar o estado de esclerócio. citeturn3search21turn23search15

**Controle de qualidade de uma cultura de pesquisa.** Uma cultura operacional deve ter: identificação de linhagem e origem; registro do regime de ploidia/apogamia; temperatura e meio fixos; número aproximado de passagens; histórico de dormência; ausência de contaminantes visíveis em cultura axênica; e um “master stock” separado das linhas submetidas continuamente a seleção experimental. Para experimentos de longa duração, deriva fenotípica por seleção de laboratório deve ser considerada uma variável, não ruído.

**Biossegurança.** A linhagem M3CVII do ATCC está classificada como **BSL-1**, consistente com uso de bancada de baixo risco. Isso não torna qualquer amostra ambiental equivalente a uma cultura BSL-1 pura: isolados silvestres podem carregar bactérias, fungos, ácaros ou outros organismos. Culturas ambientais devem ser tratadas inicialmente como consórcios desconhecidos até caracterização. citeturn16view0

Em um programa institucional, use jaleco/luvas conforme procedimento local, técnica asséptica para axênicos e ciclos de autoclave validados para descarte biológico. Não libere linhagens cultivadas, selecionadas ou geneticamente modificadas no ambiente. O risco ético direto para animais/humanos é baixo no trabalho convencional, mas há questões de **biossegurança ambiental**, coleta legal de amostras, rastreabilidade de material biológico e comunicação responsável de resultados de “cognição”.


## Técnicas experimentais e desenho de um programa de pesquisa

A característica que torna *Physarum* extraordinário — ser uma célula enorme e multinucleada — também invalida algumas convenções experimentais. O primeiro princípio é definir **qual unidade é uma réplica**. Fragmentos cortados do mesmo plasmódio mantêm propriedades sincronizadas e história compartilhada; são excelentes controles internos, mas não substituem replicação biológica independente. citeturn21view1

| Técnica | Estado em *P. polycephalum* | Medida principal | Ponto crítico |
|---|---|---|---|
| Bright-field/phase contrast time-lapse | Muito madura | Área, frente, tubos, velocidade | Luz de aquisição pode ser estímulo |
| PIV/velocimetria | Madura | Campo de fluxo endoplasmático | Separar fluxo de movimento do tubo |
| Fluorescência de actina | Demonstrada | Citoesqueleto | Introdução de sonda pode perturbar mecânica citeturn13search29 |
| Ca²⁺ imaging | Demonstrada | Ondas/dinâmica de Ca²⁺ | Calibração e fototoxicidade citeturn13search9 |
| Traction-force microscopy | Demonstrada | Força sobre substrato | Rigidez do substrato muda comportamento citeturn13search17 |
| Microfluídica | Em forte expansão | Confinamento, escolha, hidráulica | A resistência, não só comprimento, é variável causal citeturn21view0 |
| Impedance tomography | Prova de conceito | Propriedades elétricas espaciais | Reconstrução inversa/regularização citeturn19search6 |
| RNAi | Estabelecido por microinjeção | Knock-down funcional | Doses e duração são alvo-específicos citeturn4search1 |
| Recombinação homóloga | Demonstrada | Substituição gênica | Trabalho e seleção maiores que em modelos genéticos modernos citeturn4search0 |
| CRISPR/Cas | **Não estabelecido em publicação revisada por pares encontrada até 19/08/2026** | — | Não assumir transferência direta de *Dictyostelium* citeturn5search16turn5search2 |
| Bulk RNA-seq | Madura | Expressão média | Mistura regiões/núcleos heterogêneos citeturn23search3turn24view0 |
| Spatial/snRNA-seq | Demonstrada | Heterogeneidade nuclear/regional | Isolamento e anotação de estados citeturn13search6turn13search18 |
| LC-MS/MS proteômica | Tecnicamente viável, menos padronizada | Proteínas/PTMs | Annotation e U12/editing complicam busca |
| Metabolômica | Demonstrada em estudos específicos | Metabólitos/resposta | Forte dependência de meio e estado |

**Microscopia de campo claro — protocolo mínimo recomendado.**

1. Transfira um fragmento de frente ativa para uma placa fina de ágar sem nutrientes com uma fonte de alimento padronizada.
2. Deixe adaptar até que uma frente nova esteja claramente estabelecida.
3. Use iluminação mínima necessária; mantenha espectro, intensidade e duty cycle idênticos entre condições, porque a luz é biologicamente ativa.
4. Para morfologia/migração, imagens a cada **1–5 min** são um ponto de partida razoável. Para capturar oscilações contráteis de ~1–3 min, adquira muito mais rapidamente, por exemplo a cada **1–10 s**, ajustando à hipótese.
5. Extraia máscaras binárias, área, perímetro, velocidade da frente, comprimento total de rede, distribuição de diâmetro, graus dos nós e ciclos.
6. Registre simultaneamente temperatura. Uma variação térmica aparentemente pequena pode alterar cinética e período oscilatório.
7. Antes de estímulo, adquira pelo menos vários ciclos de contração como baseline.

Os intervalos de aquisição acima são recomendações de desenho experimental derivadas da escala temporal conhecida do sistema, não “valores fisiológicos universais”. Estudos recentes de fluxo chegam a acompanhar a rede inteira e mostram que medir apenas um único tubo pode perder modos globais. citeturn23search26turn24view3

**Fluxo citoplasmático.** Para PIV, capture partículas/estruturas endoplasmáticas rastreáveis ou introduza traçadores previamente demonstrados como inertes para seu ensaio. Obtenha velocidade longitudinal e perfil transversal; sincronize isso com medida de raio do tubo. Em tubos suficientemente regulares, o perfil pode aproximar fluxo de pressão do tipo Poiseuille, mas a parede não é um tubo rígido: é ativa, porosa e contrátil. No trabalho de 2025 com núcleos, os dados foram melhor descritos incluindo velocidade de slip na interface entre região fluida e córtex poroso. citeturn24view3turn2search0

**Ca²⁺ e citoesqueleto.** Indicadores fluorescentes conjugados a dextrano foram introduzidos por microinjeção e empregados para visualizar dinâmica de cálcio. A estratégia é preferível a simplesmente adicionar corante ao meio quando permeabilidade é incerta. Idealmente, registre simultaneamente fluorescência, diâmetro tubular e fluxo, pois a interpretação mecanística exige estabelecer defasagem entre Ca²⁺ e contração. citeturn13search9turn2search14

**Microfluídica.** Para novos trabalhos, não construa apenas um labirinto “curto versus longo”. O resultado de 2026 mostra que comprimento, seção transversal e resistência hidráulica precisam ser manipulados independentemente. Um desenho ideal usa bifurcações em que um ramo é mais longo porém hidraulicamente menos resistivo e outro mais curto porém mais resistivo; assim é possível discriminar geometria visual de custo de transporte. citeturn21view0

Um programa microfluídico rigoroso deve registrar pelo menos largura/altura do canal, comprimento, material, molhabilidade, geometria de entrada, disponibilidade de alimento, gradiente químico, pressão/umidade e resistência hidráulica calculada. Use chips sem estímulo químico assimétrico como controle e troque aleatoriamente esquerda/direita para excluir viés de fabricação.

**RNAi.** Haindl e Holler exploraram uma vantagem singular da célula gigante: dsRNA ou siRNA pode ser **injetado diretamente no plasmódio multinucleado**, permitindo silenciamento sem precisar transfectar individualmente milhões de células. citeturn4search1turn20search23

Um workflow moderno seria:

1. selecione uma região do mRNA sem homologia significativa com outros loci;
2. produza pelo menos dois reagentes independentes para o mesmo gene;
3. inclua dsRNA/siRNA scrambled e injeção sham;
4. injete em plasmódios fisiologicamente comparáveis;
5. faça uma curva piloto de quantidade, pois **não existe dose universal** para todos os alvos;
6. quantifique knock-down por RT-qPCR e, preferencialmente, proteína;
7. meça fenótipo em série temporal;
8. faça rescue quando geneticamente possível ou use um segundo reagente independente para reforçar causalidade;
9. para fenótipos mecânicos, registre fase da contração antes e depois da injeção.

**Recombinação homóloga.** Substituição gênica homóloga está demonstrada desde os anos 1990 e foi capaz de produzir alterações estáveis através de crescimento, desenvolvimento e meiose. Isso prova que engenharia dirigida do genoma é biologicamente possível; a limitação atual é principalmente ferramental e de eficiência, não um princípio de inviabilidade. citeturn4search0

**CRISPR/Cas: recomendação para um programa de desenvolvimento.** Como não encontrei até a data de corte um método publicado e validado especificamente para *Physarum*, um laboratório que deseje estabelecê-lo deveria tratar o projeto como desenvolvimento de tecnologia. A sequência lógica seria primeiro demonstrar expressão nuclear de uma proteína repórter, depois entrega/localização nuclear de Cas, expressão ou entrega de sgRNA, ensaio de corte num locus dispensável e só então otimizar HDR/NHEJ. Sistemas de outros amoebozoários podem orientar o desenho, mas não constituem validação. citeturn5search16turn5search2

O maior desafio conceitual para edição do plasmódio é a **multinucleação**: editar alguns núcleos não significa converter a célula inteira em uma população nuclear geneticamente homogênea. Portanto, enriquecimento/seleção e passagem por estágios unicelulares ou genética de amoebas provavelmente serão centrais num pipeline robusto.

**Bulk RNA-seq.** Para desenvolvimento ou estresse, use no mínimo estados fisiológicos rigorosamente definidos, replicação biológica independente, coleta no mesmo intervalo do ciclo de crescimento e extração rápida. Evite interpretar cada transcript como gene independente sem reconciliação com loci e splicing, devido à complexidade intrônica. O estudo de estresse salino de 2025 é um bom modelo de integração fenótipo–transcriptoma. citeturn24view0turn21view1

**Single-nucleus e transcriptômica espacial.** Essa é provavelmente uma das direções metodológicas de maior retorno. O plasmódio é uma célula, mas seus núcleos não são transcricionalmente idênticos. Portanto, um bulk RNA-seq de uma rede inteira responde “qual é a média?”, enquanto snRNA-seq responde “quais estados nucleares coexistem?” e amostragem espacial responde “onde estão?”. citeturn13search6turn13search18

Um desenho particularmente poderoso seria combinar: vídeo de fluxo → mapa de tubos → fixação/congelamento rápido → microdissecção por regiões → RNA-seq espacial/snRNA-seq → reconstrução de estado mecânico prévio. Isso permitiria testar diretamente se história de fluxo e posição geram estados transcricionais locais.

**Proteômica.** O caminho recomendável é LC-MS/MS shotgun com banco de busca construído a partir da versão exata do genoma mais transcriptos confirmados. Inclua isoformas relevantes e, para proteínas mitocondriais, sequências **após edição de RNA**. Faça FDR em nível de PSM/peptídeo/proteína e priorize quantificação label-free ou TMT conforme escala. Dada a riqueza de fosforilação e o papel de actomiosina, fosfoproteômica — incluindo estratégias compatíveis com fosfo-histidina se esse for o alvo — é uma fronteira particularmente interessante. A própria publicação do genoma foi apresentada como base para análises proteômicas quantitativas mais robustas. citeturn21view1turn25search2

**Desenho de um “core” experimental de alto nível.** Para iniciar um programa, eu priorizaria uma plataforma única que registre simultaneamente morfologia, fluxo e estado molecular. O conjunto mínimo de infraestrutura seria microscopia time-lapse automatizada com controle ambiental, bancada de cultivo axênico, microinjeção, fabricação ou acesso a microfluídica, RNA-seq terceirizado ou interno, RT-qPCR e análise computacional de imagens/redes. Proteômica e single-nucleus podem ser inicialmente colaborativas.


## Aplicações, modelos e resultados notáveis

O resultado que tornou *Physarum* mundialmente conhecido foi o experimento de Nakagaki e colaboradores em 2000. Ao ocupar inicialmente um labirinto e receber alimento em posições determinadas, o plasmódio retirou biomassa de trajetórias redundantes até manter uma conexão eficiente entre os recursos. A formulação popular “o slime mold resolve o labirinto” é aceitável como abreviação, mas biologicamente o processo é **crescimento distribuído + fluxo + reforço/pruning de tubos**, não execução simbólica de um algoritmo de busca. citeturn6search0turn6search12

Em 2010, Tero e colaboradores compararam redes produzidas pelo organismo em uma configuração espacial inspirada na região metropolitana de Tóquio com a rede ferroviária real. As redes biológicas mostraram compromissos entre eficiência de transporte, custo e tolerância a falhas, e o estudo derivou regras adaptativas suficientemente gerais para inspirar design de redes artificiais. citeturn6search5turn21view1

**Modelo de Tero.** Uma abstração padrão trata cada tubo \\(ij\\) como uma aresta de comprimento \\(L_{ij}\\), condutância efetiva \\(D_{ij}\\) e fluxo

\\[
Q_{ij}=\\frac{D_{ij}}{L_{ij}}(p_i-p_j),
\\]

sujeito à conservação de fluxo nos nós. A adaptação pode ser escrita genericamente como

\\[
\\frac{dD_{ij}}{dt}=f(|Q_{ij}|)-\\mu D_{ij},
\\]

isto é, fluxo elevado reforça uma aresta e ausência de fluxo permite sua regressão. A função exata \\(f\\), interpretação de \\(D\\) e parâmetros variam entre versões; o valor conceitual é transformar uma rede inicialmente redundante em rede eficiente por **feedback local fluxo–condutância**. citeturn6search17

Esse modelo é excelente para otimização, mas não é uma descrição completa do organismo. Em um tubo real, raio, elasticidade, contração ativa, Ca²⁺, viscosidade, adesão e metabolismo estão acoplados; além disso, o fluxo é oscilatório. Modelos mecanísticos modernos precisam incorporar essa dinâmica ativa. citeturn2search0turn4search18

Uma classe mais física pode ser esquematizada por conservação de massa e transporte advectivo-difusivo de um sinal \\(c\\):

\\[
\\partial_t c+\\mathbf u\\cdot\\nabla c
=D_c\\nabla^2c+R(c,\\mathrm{Ca}^{2+},\\ldots),
\\]

com \\(\\mathbf u\\) produzido por gradientes de pressão e contração ativa. Se o sinal aumenta localmente a contratilidade e o fluxo transporta o próprio sinal, obtém-se um laço de feedback que pode coordenar redes extensas. Experimentos de fluxo e sinalização sustentam esse tipo de interpretação. citeturn7search16turn2search0

**Computação morfológica.** A ideia mais profunda não é que o plasmódio “simule um computador”, mas que a própria geometria física armazena e processa informação. O diâmetro de cada tubo contém informação sobre fluxo passado; essa geometria altera fluxos futuros; os fluxos alteram crescimento; o crescimento altera geometria. Em 2021, foi demonstrado experimentalmente que encontros anteriores com nutrientes deixam um traço na arquitetura tubular que influencia comportamento posterior. citeturn6search3

| Aplicação | Base biológica | Estado real | Limitação dominante |
|---|---|---|---|
| Labirintos/path finding | Pruning e reforço hidráulico | Demonstração robusta | Lento e dependente da geometria citeturn6search0 |
| Otimização de redes | Feedback fluxo–condutância | Forte como inspiração algorítmica | Modelo abstrato ≠ organismo completo citeturn6search5turn6search17 |
| Lógica biológica | Crescimento, fluxo, estímulo mecânico/químico | Provas de conceito XOR/NOR e outras | Velocidade, variabilidade, integração citeturn19search1turn19search9 |
| Sensoriamento químico | Quimiotaxia/bioeletricidade | Provas de conceito | Especificidade e calibração citeturn15search30turn23search32 |
| Microfluídica ativa | Tubos como rede de transporte | Área experimental ativa | Escala e controle de fronteiras citeturn21view0 |
| Robótica bioinspirada | Regras descentralizadas de adaptação | Algoritmos modernos funcionais | Geralmente não contém tecido vivo citeturn23search17 |
| Robótica bio-híbrida | Oscilações/sinais do plasmódio | Provas de conceito | Robustez, interface eletrônica, manutenção |
| Materiais/PMLA | β-poly(L-malate) biossintético | Plataforma polimérica/nanomedicina experimental | Purificação, escala, consistência citeturn20search0turn20search10 |
| Educação | Crescimento visível, baixo risco | Muito madura | Contaminação e excesso de antropomorfismo citeturn3search0turn16view0 |

**Lógica e computação não convencional.** Tubos plasmodiais foram usados como elementos de portas lógicas baseadas em fluxo e estímulo mecânico, incluindo implementações experimentais de XOR e NOR; revisões de computação com slime mold catalogam circuitos, sensores e processadores experimentais. Isso demonstra computação física, mas ainda está muito distante de competir com eletrônica convencional em velocidade, densidade ou reprodutibilidade. citeturn19search1turn19search9

**Robótica.** A área deve ser dividida em duas categorias. Sistemas **bio-híbridos** conectam o organismo vivo diretamente a sensores/atuadores; sistemas **bioinspirados** apenas transferem regras de *Physarum* para software. Um trabalho recente sobre redes mesh descentralizadas multi-robô mostrou ganhos de desempenho com algoritmo inspirado em *Physarum*, mas o “slime mold” nessa aplicação é a regra matemática, não o substrato computacional físico. citeturn23search17

**Materiais.** A contribuição material mais concreta é o PMLA. O polímero produzido e secretado por microplasmódios pode ser isolado e funcionalizado quimicamente. Trabalhos biomédicos exploraram seus grupos carboxila como plataforma de conjugação para moléculas de targeting, oligonucleotídeos e outros módulos. Isso é uma aplicação de um produto bioquímico de *Physarum*, não uma “estrutura viva auto-reparável” no sentido usado por parte da literatura especulativa de materiais vivos. citeturn20search0turn20search10turn20search13

**Educação.** Poucos organismos mostram, a olho nu e em poucos dias, quimiotaxia, dinâmica de rede, oscilação, otimização, crescimento e diferenciação. Protocolos modernos de ensino usam ágar e aveia e permitem converter uma experiência acessível em treinamento quantitativo de image analysis, desenho experimental e estatística. O principal cuidado pedagógico é separar observação — “a rede se reorganizou” — de inferência antropomórfica — “ele pensou”. citeturn3search0

**Resultado de 2026: resistência hidráulica.** A descoberta de que *Physarum* pode escolher um caminho geometricamente mais longo se ele oferecer menor resistência hidráulica é especialmente importante para computação bioinspirada: sugere que a função objetivo biologicamente relevante não é simplesmente distância euclidiana, mas custo de transporte sob restrições físicas. citeturn21view0

**Resultado de 2025: coordenação nuclear.** A descoberta das populações nuclear móvel e aprisionada acrescenta uma camada que modelos puramente geométricos ignoram. A célula não só “calcula” através dos tubos; elementos que controlam sua expressão gênica são fisicamente transportados pela mesma rede. Isso liga mecânica, transporte e genômica em um único sistema. citeturn24view3

**Resultado de 2025: resposta transcricional à mecânica ambiental.** O experimento de sal demonstrou que alterar condições externas muda simultaneamente arquitetura tubular, pulsação e milhares de transcritos. Essa observação enfraquece modelos em que adaptação de rede é tratada como pura hidráulica passiva: o organismo modifica ativamente sua fisiologia molecular. citeturn24view0


## Controvérsias, lacunas, futuro, plano de estudo e bibliografia

**A taxonomia ainda “quebrou” a literatura.** A transferência para *Badhamia polycephala* é recente, enquanto seis décadas de biologia experimental usam *Physarum*. NCBI e Species Fungorum já fizeram a mudança, mas muitos artigos novos ainda usam o nome antigo por continuidade. Um programa sério deve manter um thesaurus que associe \`Badhamia polycephala\`, \`Physarum polycephalum\`, TaxID 5791 e os accessions históricos. citeturn22view0turn22view1

**O genoma de referência não é um “genoma terminado” no sentido dos modelos mais maduros.** A montagem histórica é draft, altamente repetitiva, a anotação enfrenta dezenas de milhares de introns U12 e a literatura de genética clássica usa nomenclaturas de loci anteriores à genômica moderna. Um **assembly cromossômico telômero-a-telômero com long reads + Hi-C**, complementado por Iso-Seq e proteômica, provavelmente teria retorno científico excepcional. citeturn21view1turn0search11turn25search5

**Ploidia e heterogeneidade precisam voltar ao centro.** O paradigma “plasmódio diploide, núcleos sincronizados” continua útil, mas esconde linhagens apogâmicas, heterogeneidade transcricional e estados nucleares mecanicamente distintos. Uma das maiores oportunidades é fazer genotipagem single-nucleus e transcriptômica single-nucleus ao longo do ciclo, perguntando se núcleos individuais divergem geneticamente, epigeneticamente ou apenas transcricionalmente. citeturn21view1turn13search6turn24view3

**CRISPR é uma lacuna metodológica de primeira ordem.** RNAi e recombinação homóloga provaram que genética funcional é possível; o que falta é um sistema rotineiro, eficiente, multiplexável e bem documentado. Uma plataforma CRISPR teria impacto imediato sobre fotossensoriamento, histidina-quinases, controle do fluxo, ciclo celular, edição mitocondrial e desenvolvimento. Até a data de corte deste informe, não encontrei demonstração revisada por pares de CRISPR funcional em *P. polycephalum/B. polycephala*. citeturn4search0turn4search1turn5search16

**O receptor de muitos estímulos continua desconhecido.** A fisiologia clássica descreve quimiotaxia com enorme riqueza, e o genoma contém muitos receptores candidatos, mas para grande parte dos ligantes ainda não existe cadeia causal receptor → segundo mensageiro → Ca²⁺/córtex → fluxo → orientação. A combinação de RNAi/edição futura, microfluídica quantitativa e calcium imaging é uma estratégia direta para fechar essa lacuna. citeturn2search23turn21view1turn13search9

**A mecânica precisa ser ligada diretamente à expressão gênica.** O trabalho de estresse salino mostra correlação multiescala, e a transcriptômica espacial mostra heterogeneidade; o próximo passo é perturbar tensão/fluxo sem alterar diretamente química e medir, no mesmo indivíduo, consequência transcriptômica local. citeturn24view0turn13search6

**O mecanismo da “memória” não é único.** Habituação, memória estrutural dos tubos e alternância espacial provavelmente não são manifestações de um mesmo mecanismo molecular. O erro conceitual seria procurar “o gene da memória de Physarum”. Uma agenda mais produtiva é perguntar qual variável física ou molecular armazena informação em cada paradigma e qual seu tempo de relaxamento. citeturn6search2turn6search3turn24view4

**“Inteligência” é uma controvérsia principalmente semântica e mecanística.** Há comportamento adaptativo real, integração distribuída e memória operacional em paradigmas específicos. Não há evidência de neurônios, cérebro ou representações simbólicas equivalentes às de animais. A interpretação mais conservadora é **cognição basal/morfológica** como linguagem operacional, não uma afirmação sobre consciência. O resultado negativo/parcial do ensaio de memória espacial de 2026 ilustra por que controles físicos precisam acompanhar a terminologia cognitiva. citeturn24view4turn6search14

**Questões abertas de alta prioridade:**

1. Qual é o assembly nuclear cromossômico verdadeiro e quanta variação estrutural existe entre linhagens de laboratório?
2. Quantos estados nucleares estáveis existem dentro de um único plasmódio, e eles correspondem a posições, idades, fluxo ou destinos celulares?
3. Como Ca²⁺, nucleotídeos cíclicos, actomiosina e pressão formam o oscilador contrátil completo?
4. Quais GPCRs/sensores reconhecem cada quimioatrator ou repelente clássico?
5. Como os sinais de luz azul/UV e vermelho/vermelho-distante convergem para a decisão irreversível de esporulação?
6. Qual maquinaria molecular determina os pontos e nucleotídeos da edição insercional mitocondrial?
7. Como núcleos móveis e aprisionados trocam informação e expressão ao longo de muitas horas?
8. É possível estabelecer CRISPR multiplex e gerar populações nucleares homogeneamente editadas?
9. Até que ponto a memória arquitetural de tubos explica habituação e outros paradigmas comportamentais?
10. Qual função objetivo física o organismo realmente otimiza: dissipação, eficiência hidráulica, risco, cobertura, aquisição de nutrientes ou uma combinação variável? O resultado de 2026 mostra que “menor distância” isoladamente é insuficiente. citeturn21view0turn24view3turn6search3

**Prioridades para um novo programa de pesquisa.** Eu atribuiria prioridade máxima a quatro frentes integradas: genoma cromossômico/epigenoma; plataforma de perturbação genética; imageamento simultâneo de Ca²⁺–fluxo–força; e transcriptômica espacial/single-nucleus. Elas transformariam o campo de uma coleção de fenômenos fascinantes numa biologia causal multiescala.

**Plano de formação de aproximadamente seis meses.**

| Período | Objetivo | Produto mínimo |
|---|---|---|
| Semanas 1–2 | Taxonomia, ciclo, literatura clássica | Mapa conceitual do ciclo; thesaurus *Physarum/Badhamia* |
| Semanas 3–4 | Cultivo em aveia e cultura axênica | Linhagem estável, SOP de manutenção |
| Semanas 5–6 | Time-lapse e análise de rede | Pipeline reprodutível de segmentação |
| Semanas 7–8 | Fluxo e contração | PIV + série temporal de diâmetro |
| Semanas 9–10 | Quimiotaxia e fototaxia | Ensaios dose–resposta controlados |
| Semanas 11–12 | Desenvolvimento | Esporulação e esclerotização reproduzíveis |
| Semanas 13–14 | Genoma/transcriptoma | Ambiente bioinformático com assembly e RNA-seq |
| Semanas 15–16 | RNAi | Knock-down de alvo positivo/controle |
| Semanas 17–18 | Microfluídica | Bifurcação distância × resistência |
| Semanas 19–20 | Mecânica/Ca²⁺ | Dataset sincronizado fluxo–contração–sinal |
| Semanas 21–22 | Ômicas espaciais | Piloto de regiões ou núcleos |
| Semanas 23–24 | Projeto independente | Pergunta causal, pré-registro e pipeline completo |

As primeiras leituras deveriam ser o artigo de genoma de Schaap et al.; a literatura de fluxo/biomecânica de Alim e colaboradores; a revisão/modelagem de redes de Tero; os trabalhos de habituação e memória arquitetural; a transcriptômica espacial; e os estudos de 2025–2026 sobre núcleos, sal e confinamento. citeturn21view1turn2search0turn6search17turn6search2turn6search3turn24view3turn24view0turn21view0

**Bibliografia essencial e bases de dados.** A seleção abaixo prioriza trabalhos primários e recursos que servem como pontos de entrada para montar um programa de pesquisa.

- **Taxonomia corrente:** Species Fungorum, *Badhamia polycephala*. [Species Fungorum record 846262](https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=846262). NCBI Taxonomy: [TaxID 5791](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=5791). citeturn22view0turn22view1
- **Schaap P. et al.** *The Physarum polycephalum Genome Reveals Extensive Use of Prokaryotic Two-Component and Metazoan-Type Tyrosine Kinase Signaling*. Genome Biology and Evolution 8:109–125. DOI [10.1093/gbe/evv237](https://doi.org/10.1093/gbe/evv237). GenBank nuclear: **ATCM00000000.3**; transcriptoma: **GDRG01000000**. citeturn21view1turn25search5
- **NCBI Genome/Datasets:** [busca por TaxID 5791](https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=5791). A montagem encontra-se na série **GCA_000413255.x**; registrar a versão usada em cada análise. citeturn22view2turn25search13
- **Takano H. et al.** *The complete DNA sequence of the mitochondrial genome of Physarum polycephalum*. Molecular Genetics and Genomics 264:539–545. Genoma mitocondrial de 62.862 bp; sequência histórica associada a **AB027295**. [PubMed](https://pubmed.ncbi.nlm.nih.gov/11212908/). citeturn25search0turn25search10
- **Bundschuh R. et al.** *Complete characterization of the edited transcriptome of the mitochondrion of Physarum polycephalum*. Nucleic Acids Research 39:6044–6055. [Artigo](https://academic.oup.com/nar/article/39/14/6044/1377140). citeturn25search2
- **Glöckner G. et al.** *Transcriptome reprogramming during developmental switching in Physarum polycephalum*. Scientific Reports, 2017. [Artigo](https://www.nature.com/articles/s41598-017-12250-5). citeturn23search3
- **Barrantes I. et al.** *Transcriptomic changes arising during light-induced sporulation in Physarum polycephalum*. BMC Genomics 11:115. [DOI/full text](https://doi.org/10.1186/1471-2164-11-115). citeturn20search7turn25search9
- **Gerber T. et al.**, estudo de transcriptômica espacial/single-nucleus em plasmódios, eLife, 2022; demonstrou heterogeneidade regional e nuclear. citeturn13search6turn13search18
- **Haindl M., Holler E.** *Use of the giant multinucleate plasmodium of Physarum polycephalum to study RNA interference*. 2005. [PubMed](https://pubmed.ncbi.nlm.nih.gov/15922285/). citeturn20search23
- **Gene replacement por recombinação homóloga**, trabalho de 1995, demonstra alteração estável de locus em *Physarum*. citeturn4search0
- **Nakagaki T., Yamada H., Tóth Á.** *Intelligence: Maze-solving by an amoeboid organism*. Nature 407, 470, 2000. Referência fundadora da literatura de path finding. citeturn6search0
- **Tero A. et al.** *Rules for Biologically Inspired Adaptive Network Design*. Science 327:439–442, 2010. Referência central para redes adaptativas. citeturn6search5
- **Tero A., Kobayashi R., Nakagaki T.** Modelo matemático de adaptação de rede, Journal of Theoretical Biology, 2007. Referência para a dinâmica \\(dD/dt=f(Q)-\\mu D\\). citeturn6search17
- **Alim K. et al.** *Random network peristalsis in Physarum polycephalum organizes fluid flows across an individual*. PNAS, 2013. Base moderna da visão hidráulica/peristáltica. citeturn2search0
- **Oettmeier C., Brix K., Döbereiner H.-G.** revisão de *Physarum* como sistema de mecânica celular e fluxo, J. Phys. D, 2017. citeturn4search18
- **Boisseau R.P., Vogel D., Dussutour A.** estudo de habituação em *P. polycephalum*, Proceedings of the Royal Society B, 2016. citeturn6search2
- **Kramar M., Alim K.** estudo de memória codificada na arquitetura de tubos, PNAS, 2021. citeturn6search3
- **Tong J. et al.** *Coexistence of trapped and flow-transported nuclei enables fast pigeon post communication across multinucleated cell*. PNAS 122:e2411101122, 2025. DOI [10.1073/pnas.2411101122](https://doi.org/10.1073/pnas.2411101122). citeturn24view3
- **Sánchez-Parra B. et al.** *Salt affects structure, function and transcriptome in the giant cells of slime molds*. Scientific Reports, 2025. DOI [10.1038/s41598-025-29951-x](https://doi.org/10.1038/s41598-025-29951-x). citeturn24view0
- **Kharal S.P. et al.** *Confinement and hydraulic resistance appear to separately govern motility and path selection in Physarum polycephalum*. Journal of the Royal Society Interface 23:20250873, 2026. DOI [10.1098/rsif.2025.0873](https://doi.org/10.1098/rsif.2025.0873). citeturn21view0
- **Kuttner L., Freiberg J.** *Inducing chirality in slime mold—spontaneous alternation behavior may reveal spatial memory in Physarum polycephalum*. Protist 181:126156, 2026. DOI [10.1016/j.protis.2026.126156](https://doi.org/10.1016/j.protis.2026.126156). citeturn24view4
- **ATCC Medium 1288 N Plus C:** formula oficial de cultura axênica. [ATCC PDF](https://www.atcc.org/-/media/product-assets/documents/microbial-media-formulations/1/2/8/8/atcc-medium-1288.pdf). citeturn17view0
- **PMLA:** Lee et al., *Beta-poly(L-malate) production by non-growing microplasmodia of Physarum polycephalum*, 2000; e literatura de nanoconjugados baseada no polímero. [PubMed](https://pubmed.ncbi.nlm.nih.gov/11094281/). citeturn20search0turn20search10
- **UniProt:** taxon atualizado sob [*Badhamia polycephala*, TaxID 5791](https://www.uniprot.org/taxonomy/5791), útil para reconciliar nomes e proteínas históricas. citeturn20search12
- **PubMed:** para monitoramento contínuo, a consulta deve combinar \`"Physarum polycephalum" OR "Badhamia polycephala"\`; a diferença nomenclatural é suficientemente recente para que uma busca com apenas um dos nomes perca literatura relevante. A necessidade dessa consulta dupla decorre da mudança de nome já implementada nas bases taxonômicas. citeturn22view0turn22view1

O quadro atual é, portanto, incomum: *P. polycephalum* é simultaneamente um **modelo clássico**, com literatura fisiológica de mais de meio século, e um **modelo molecular subdesenvolvido** em comparação com levedura, *Dictyostelium*, *Drosophila* ou *C. elegans*. É precisamente essa combinação que o torna estrategicamente atraente em 2026. Os fenômenos de maior interesse — fluxo ativo, multicompartmentalização sem membranas internas entre regiões, transporte de núcleos, memória morfológica e diferenciação coordenada — já são experimentalmente acessíveis; o que ainda falta é ligar esses fenômenos de forma causal a genes, proteínas, segundos mensageiros e estados nucleares. Um programa que combine genômica moderna, edição genética, microfluídica e física quantitativa teria espaço real para descobertas fundamentais. citeturn21view1turn24view3turn21view0`,d0=[{id:"morphology-alim-2013",title:"Alim et al. (2013) — Random network peristalsis in Physarum polycephalum organizes fluid flows across an individual",shortTitle:"Alim et al. · 2013",topic:"Rede tubular e contrações",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3746869/",kind:"Artigo científico",status:"Consulta parcial ao original",origin:"Consulta direta · introdução e legenda da Fig. 1",summaryLabel:"Síntese da consulta",excerpt:"O estudo descreve redes tubulares com conexões fechadas e fluxo citoplasmático oscilatório. Orienta a presença de ciclos na malha representativa. A geometria gerada não reproduz um espécime do artigo nem seu modelo de escoamento.",checkedAt:"2026-09-14"},{id:"morphology-guy-2011",title:"Guy, Nakagaki e Wright (2011) — Flow-induced channel formation in the cytoplasm of motile cells",shortTitle:"Guy et al. · 2011",topic:"Frente em lâmina e ramificações",url:"https://doi.org/10.1103/PhysRevE.84.016310",kind:"Artigo científico",status:"Consulta parcial ao original",origin:"Manuscrito aceito do editor · introdução e legenda da Fig. 1; contexto de composição e fluxo consultado para a frente",summaryLabel:"Síntese da consulta",excerpt:"Descreve a frente em lâmina, a rede tubular e as fases fluida e filamentosa do citoplasma. A introdução relaciona contração, pressão e formação de canais. O modelo matemático do artigo não foi implementado nesta visualização; os leques são ilustrativos.",checkedAt:"2026-09-14"}],Bb={"Rede tubular":"Uma malha com caminhos conectados e ciclos. As espessuras variam para facilitar a leitura da organização; não representam medições de uma amostra.","Frente de expansão":"Região em lâmina representada nos leques da borda. A distinção entre frente e rede se apoia na literatura; o contorno mostrado é ilustrativo.","Tubo plasmodial":"Trecho integrado à malha. O acesso ao interior usa um corte didático: não representa uma abertura natural do organismo.",Endoplasma:"Região interna representada pelo movimento das partículas. A animação é qualitativa e não calcula velocidades ou transporte experimental.","Córtex contrátil":"Camada periférica mostrada pelas fibras. O arranjo, as cores e as proporções são esquemáticos, não uma reconstrução de microscopia.",Núcleo:"Núcleo selecionado. Consulte as referências e registre perguntas sobre o que está observando. A exploração interna do núcleo será a próxima escala."};function Vb({stage:s,selected:e,detail:n,structures:a,suggested:o,notes:c,onSelect:u,onFront:h,onNextFront:p,onBackToNetwork:m,onReader:g,onNotebook:x,onNote:v,report:M}){return k.jsxs("aside",{className:"study-panel",children:[k.jsxs("div",{className:"panel-content",children:[k.jsx("span",{className:"eyebrow",children:"CONTEXTO DE ESTUDO"}),k.jsx("h2",{children:e||n.title}),k.jsx("p",{className:"description",children:Bb[e]||n.description}),e==="Frente de expansão"&&k.jsxs("section",{className:"panel-section structure-guide","aria-label":"Estudo da frente de expansão",children:[k.jsxs("div",{className:"guide-actions",children:[k.jsx("button",{className:"secondary",onClick:h,children:"Aproximar frente"}),k.jsx("button",{className:"secondary",onClick:p,children:"Outra frente"}),k.jsx("button",{className:"secondary",onClick:m,children:"Voltar à rede"})]}),k.jsx("h3",{children:"O que é?"}),k.jsx("p",{children:"Região frontal em lâmina do plasmódio, ligada à rede de tubos. Os leques representam essa região de uma mesma célula."}),k.jsx("h3",{children:"Do que é composta?"}),k.jsx("p",{children:"Citoplasma com uma fase fluida (endoplasma) e uma rede de filamentos de actina (ectoplasma). A contração envolve actina e miosina."}),k.jsx("h3",{children:"Como se comporta?"}),k.jsx("p",{children:"Contrações geram diferenças de pressão e movimentam o citoplasma. Na região frontal, canais de fluxo podem se formar e dar origem a tubos. O artigo investiga esse processo com observações e um modelo matemático."}),k.jsx("button",{className:"guide-source",onClick:()=>g(d0[1]),children:"Guy et al. · 2011 — introdução e Fig. 1 ↗"}),k.jsx("p",{className:"guide-limit",children:"Aqui você pode aproximar e percorrer os leques. A formação de canais não está animada e o interior da frente ainda não foi modelado."})]}),k.jsxs("div",{className:"panel-section",children:[k.jsxs("h3",{children:["Estruturas ",s===3?"visíveis":"para explorar"]}),k.jsx("div",{className:"structure-list",children:a.map(([A,D,E])=>k.jsxs("button",{className:e===D?"selected":"",onClick:()=>u(D),children:[k.jsx("span",{className:"structure-icon",children:k.jsx(A,{size:24,weight:"duotone"})}),k.jsxs("span",{children:[k.jsx("strong",{children:D}),k.jsx("small",{children:E})]}),k.jsx(_h,{size:15})]},D))})]}),k.jsxs("div",{className:"panel-section",children:[k.jsx("h3",{children:"Fontes relacionadas"}),k.jsx("p",{className:"section-note",children:"Abra a fonte para ver a procedência e o escopo da consulta."}),o.map(A=>k.jsxs("button",{className:"evidence-row",onClick:()=>g(A),children:[k.jsx(xh,{size:22}),k.jsxs("span",{children:[k.jsx("strong",{children:A.shortTitle||A.title.replace(/\*/g,"").split(". ")[0]}),k.jsx("small",{children:A.topic||(/Tong/.test(A.title)?"Núcleos e transporte":/Schaap/.test(A.title)?"Genoma e sinalização":"Genoma mitocondrial")})]}),k.jsx(_h,{size:15})]},A.id))]}),k.jsxs("div",{className:"panel-section personal",children:[k.jsx("h3",{children:"Seu caderno neste contexto"}),k.jsxs("p",{children:[c.filter(A=>A.context===(e||n.title)).length," registros relacionados"]}),k.jsxs("button",{className:"text-button",onClick:x,children:["Abrir caderno ",k.jsx(iu,{size:15})]})]})]}),k.jsxs("div",{className:"panel-footer",children:[k.jsxs("button",{className:"primary",onClick:()=>g(M),children:[k.jsx(vh,{size:19}),"Ler relatório-base"]}),k.jsxs("button",{className:"secondary",onClick:v,children:[k.jsx(Jo,{size:20}),"Registrar uma ideia"]})]})]})}const g_=["Nota","Pergunta","Insight","Hipótese","Observação de laboratório","Síntese"],Gb=["Organismo","Rede","Tubo","Interior"],Zb=[{title:"Physarum polycephalum",eyebrow:"PLASMÓDIO · VISÃO GERAL",description:"Uma rede viva para explorar. Aproxime-se de um tubo e atravesse suas estruturas para estudar o organismo por dentro."},{title:"Rede tubular",eyebrow:"ORGANIZAÇÃO · CONEXÕES",description:"Observe a malha, gire o organismo e selecione o tubo em destaque. Continue aproximando para alcançar sua superfície."},{title:"Tubo plasmodial",eyebrow:"ESTRUTURA · SUPERFÍCIE",description:"Continue aproximando para entrar no trecho selecionado. Um corte didático dá acesso ao interior; a estrutura permanece conectada à rede."},{title:"Interior do tubo plasmodial",eyebrow:"EXPLORAÇÃO · INTERIOR",description:"Você está dentro do tubo. Mude a direção do olhar, observe as estruturas e selecione um núcleo para abrir seu contexto de estudo."}],h0=s=>s.replace(/[^]*/g,"").replace(/\*\*/g,"").trim(),Zs=[];for(const s of p_.split(`
`))if(s.startsWith("- **"))for(const e of s.matchAll(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g))Zs.some(n=>n.url===e[2])||Zs.push({id:`ref-${Zs.length}`,title:h0(s.slice(2).split("[")[0]).replace(/[.;:]\s*$/,""),url:e[2],kind:"Referência extraída",status:"Aguardando conferência",origin:"Deep Research · Physarum",excerpt:h0(s.slice(2))});const W2={id:"report",title:"Biologia e funcionamento do Physarum",kind:"Relatório de Deep Research",status:"Documento secundário",origin:"Arquivo fornecido por você"};function Y2(s){try{const e=JSON.parse(localStorage.getItem(s));return Array.isArray(e)?e:[]}catch{return[]}}const nu=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();function Pr({title:s,children:e,...n}){return k.jsx("button",{className:"icon-button",title:s,"aria-label":s,...n,children:e})}function m0({title:s,children:e,onClose:n,wide:a=!1}){const o=_.useRef();return _.useEffect(()=>{const c=document.activeElement;return o.current.showModal(),()=>c==null?void 0:c.focus()},[]),k.jsxs("dialog",{ref:o,className:`modal ${a?"wide":""}`,onCancel:c=>{c.preventDefault(),n()},onClick:c=>{c.target===o.current&&n()},children:[k.jsxs("header",{children:[k.jsx("h2",{children:s}),k.jsx(Pr,{title:"Fechar",onClick:n,children:k.jsx(_M,{size:22})})]}),e]})}function qb({context:s,initial:e,onSave:n,onClose:a}){const[o,c]=_.useState((e==null?void 0:e.kind)||"Nota"),[u,h]=_.useState((e==null?void 0:e.body)||"");return k.jsx(m0,{title:e?"Editar registro":"Registrar no caderno",onClose:a,children:k.jsxs("form",{onSubmit:p=>{p.preventDefault(),u.trim()&&n({id:(e==null?void 0:e.id)||crypto.randomUUID(),kind:o,body:u.trim(),context:(e==null?void 0:e.context)||s,date:(e==null?void 0:e.date)||new Date().toISOString(),updated:new Date().toISOString()})},children:[k.jsxs("label",{children:["Tipo de entrada",k.jsx("select",{value:o,onChange:p=>c(p.target.value),children:g_.map(p=>k.jsx("option",{children:p},p))})]}),k.jsxs("label",{children:["O que você está pensando?",k.jsx("textarea",{required:!0,autoFocus:!0,rows:7,value:u,onChange:p=>h(p.target.value),placeholder:"Uma leitura, uma conexão, uma pergunta…"})]}),k.jsxs("p",{className:"context-line",children:[k.jsx(fv,{size:16}),"Physarum / ",(e==null?void 0:e.context)||s]}),k.jsxs("footer",{children:[k.jsx("span",{children:"Salvo neste navegador"}),k.jsxs("button",{className:"primary",children:[k.jsx(dM,{size:18}),"Salvar registro"]})]})]})})}function kb(){const[s,e]=_.useState(!1),[n,a]=_.useState(!1),[o,c]=_.useState("Explorar"),[u,h]=_.useState(0),[p,m]=_.useState(0),[g,x]=_.useState(""),[v,M]=_.useState(!1),[A,D]=_.useState(!1),[E,S]=_.useState(!1),[F,I]=_.useState(!1),[R,P]=_.useState(""),[O,L]=_.useState(()=>Y2("caderno-vivo.notes.v1")),[b,N]=_.useState(()=>Y2("caderno-vivo.sources.v1")),[V,q]=_.useState(""),[K,ae]=_.useState("Todos"),[W,J]=_.useState(!1),[B,G]=_.useState(null),[oe,re]=_.useState(null),[pe,U]=_.useState(!1),[ie,ve]=_.useState(""),Oe=_.useRef(),Ue=_.useRef(),ke=_.useRef(),se=Zb[u],_e=ee=>{ve(ee),clearTimeout(ke.current),ke.current=setTimeout(()=>ve(""),3500)};_.useEffect(()=>{try{Ue.current=Hb(Oe.current,{onStage:ee=>{h(ee),x("")},onDepth:m,onSelect:x})}catch(ee){P("Não foi possível iniciar a cena 3D. Confira a aceleração gráfica do navegador."),console.error(ee)}return()=>{var ee;(ee=Ue.current)==null||ee.dispose(),clearTimeout(ke.current)}},[]),_.useEffect(()=>{var ee;(ee=Ue.current)==null||ee.pause(v||n||o!=="Explorar")},[v,o,n]);const Ne=ee=>{var Fe;(Fe=Ue.current)==null||Fe.go(ee),x("")},ot=ee=>{c(ee),q(""),ae("Todos")},qe=()=>{G(null),J(!0)},ut=ee=>{const Fe=O.some(nt=>nt.id===ee.id)?O.map(nt=>nt.id===ee.id?ee:nt):[ee,...O];try{localStorage.setItem("caderno-vivo.notes.v1",JSON.stringify(Fe)),L(Fe),J(!1),_e("Registro salvo no seu caderno.")}catch{_e("Não foi possível salvar. Confira o armazenamento do navegador.")}},Ct=()=>{const ee=URL.createObjectURL(new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),notes:O,sources:b},null,2)],{type:"application/json"})),Fe=document.createElement("a");Fe.href=ee,Fe.download=`caderno-vivo-${new Date().toISOString().slice(0,10)}.json`,Fe.click(),setTimeout(()=>URL.revokeObjectURL(ee),1e3)},be=O.filter(ee=>(K==="Todos"||ee.kind===K)&&nu(`${ee.body} ${ee.context}`).includes(nu(V))),Le=[W2,...d0,...b,...Zs].filter(ee=>nu(`${ee.title} ${ee.kind}`).includes(nu(V))),Pe=g==="Núcleo"?Zs.filter(ee=>/Tong|Schaap|Takano/.test(ee.title)).slice(0,3):[...d0,...u===3?Zs.filter(ee=>/Tong/.test(ee.title)).slice(0,1):[]],ze=u<2?[[wc,"Rede tubular","Conexões e organização espacial"],[Ng,"Tubo plasmodial","Caminho para o interior"],[wc,"Frente de expansão","Regiões em lâmina na borda"]]:[[Ng,"Endoplasma","Fluxo ilustrativo no interior"],[Dg,"Núcleo","Selecione na cena ou aqui"],[wc,"Córtex contrátil","Fibras periféricas esquemáticas"]];return k.jsxs("div",{className:`app ${F?"light":""}`,children:[k.jsxs("header",{className:"topbar",children:[k.jsxs("div",{className:"brand",children:[k.jsx(Dg,{size:28,weight:"duotone"}),k.jsxs("span",{children:["Caderno Vivo",k.jsx("span",{className:"brand-detail",children:" / Physarum"})]})]}),k.jsxs("div",{className:"top-right",children:[!1,k.jsxs("span",{className:"privacy",children:[k.jsx(Ug,{size:13}),"Acervo local"]}),k.jsx(Pr,{title:F?"Ativar modo escuro":"Ativar modo claro",onClick:()=>{var ee;I(!F),(ee=Ue.current)==null||ee.theme(!F)},children:F?k.jsx(mM,{size:20}):k.jsx(vM,{size:20})})]})]}),k.jsxs("nav",{className:"rail","aria-label":"Navegação principal",children:[[[cM,"Explorar"],[Og,"Caderno"],[vh,"Fontes"]].map(([ee,Fe])=>k.jsxs("button",{className:o===Fe?"active":"",onClick:()=>ot(Fe),"aria-current":o===Fe?"page":void 0,children:[k.jsx(ee,{size:27,weight:o===Fe?"duotone":"regular"}),k.jsx("span",{children:Fe})]},Fe)),k.jsxs("button",{className:"rail-bottom",onClick:Ct,title:"Exportar caderno e fontes",children:[k.jsx(fM,{size:24}),k.jsx("span",{children:"Exportar"})]})]}),k.jsxs("main",{className:`explorer ${o!=="Explorar"?"hidden":""}`,children:[k.jsxs("section",{className:`viewport ${s?"controls-hidden":""}`,"aria-label":"Exploração biológica",children:[k.jsx("div",{className:"scene",ref:Oe}),R&&k.jsx("div",{className:"scene-message",children:R}),k.jsx("button",{className:"controls-toggle","aria-pressed":s,onClick:()=>e(!s),children:s?"Mostrar controles":"Ocultar controles"}),k.jsxs("div",{className:"scene-top",children:[k.jsx("nav",{className:"breadcrumbs","aria-label":"Profundidade biológica",children:Gb.map((ee,Fe)=>k.jsxs("span",{children:[Fe>0&&k.jsx(_h,{size:12}),k.jsx("button",{className:u===Fe?"current":"",onClick:()=>Ne(ph[Fe]),children:ee})]},ee))}),k.jsx(Pr,{title:"Voltar uma escala",disabled:u===0,onClick:()=>Ne(ph[Math.max(0,u-1)]),children:k.jsx(rM,{size:20})})]}),k.jsxs("div",{className:"scene-title",children:[k.jsx("span",{className:"eyebrow",children:g==="Frente de expansão"?"MORFOLOGIA · FRENTE":se.eyebrow}),k.jsx("h1",{children:g==="Frente de expansão"?"Frente de expansão":u===0?k.jsxs(k.Fragment,{children:[k.jsx("em",{children:"Physarum"}),k.jsx("br",{}),k.jsx("em",{children:"polycephalum"})]}):u===3?"Por dentro da rede.":se.title}),k.jsx("p",{children:g==="Frente de expansão"?"Arraste para observar. Percorra os leques pelo painel.":u===0?"Explore uma rede de possibilidades.":u===3?"Aproxime. Observe. Conecte.":"Continue aproximando para entrar."})]}),k.jsx("div",{className:"model-note",children:"Modelo esquemático · Escalas ilustrativas"}),k.jsxs("div",{className:"scene-controls",children:[k.jsxs("div",{className:"camera-actions",children:[k.jsx(Pr,{title:"Restaurar visão",onClick:()=>{var ee,Fe;Ne(0),D(!1),S(!1),(ee=Ue.current)==null||ee.isolate(!1),(Fe=Ue.current)==null||Fe.separate(!1)},children:k.jsx(aM,{size:20})}),k.jsx(Pr,{title:"Isolar tubo","aria-pressed":A,onClick:()=>{var ee;D(!A),(ee=Ue.current)==null||ee.isolate(!A)},children:k.jsx(oM,{size:20})}),k.jsx(Pr,{title:"Separar camadas","aria-pressed":E,onClick:()=>{var ee;S(!E),(ee=Ue.current)==null||ee.separate(!E)},children:k.jsx(wc,{size:20})}),k.jsx(Pr,{title:v?"Retomar fluxo":"Pausar fluxo","aria-pressed":v,onClick:()=>M(!v),children:v?k.jsx(gM,{size:19}):k.jsx(pM,{size:19})})]}),k.jsx("span",{className:"flow-label",children:v?"Fluxo pausado":"Fluxo ilustrativo"})]}),k.jsxs("div",{className:"depth-control",children:[k.jsxs("div",{children:[k.jsx("span",{children:"SUPERFÍCIE"}),k.jsxs("label",{htmlFor:"depth",children:["Profundidade ",k.jsxs("strong",{children:[p,"%"]})]}),k.jsx("span",{children:"INTERIOR"})]}),k.jsx("input",{id:"depth","aria-label":"Profundidade da exploração",type:"range",min:"0",max:"100",value:p,onChange:ee=>Ne(Number(ee.target.value)/100)})]}),k.jsxs("div",{className:"scene-bottom",children:[k.jsxs("span",{children:[k.jsx(uM,{size:20}),k.jsxs("span",{children:[k.jsx("strong",{children:"Role para atravessar as escalas"}),k.jsx("small",{children:"Arraste para olhar. Clique para selecionar."})]})]}),k.jsxs("button",{className:"enter-button",onClick:()=>Ne(g==="Frente de expansão"?.22:ph[Math.min(u+1,3)]),disabled:u===3,children:[g==="Frente de expansão"?"Retomar percurso":u===2?"Entrar no tubo":u===3?"Você está no interior":"Aprofundar",k.jsx(iu,{size:17})]})]})]}),k.jsx(Vb,{stage:u,selected:g,detail:se,structures:ze,suggested:Pe,notes:O,onFront:()=>{var ee;return(ee=Ue.current)==null?void 0:ee.focusFront()},onNextFront:()=>{var ee;return(ee=Ue.current)==null?void 0:ee.focusFront(1)},onBackToNetwork:()=>Ne(.22),onSelect:ee=>{var Fe;x(ee),ee==="Frente de expansão"&&((Fe=Ue.current)==null||Fe.focusFront()),ee==="Tubo plasmodial"&&u<2&&Ne(.56)},onReader:re,onNotebook:()=>ot("Caderno"),onNote:qe,report:W2})]}),o!=="Explorar"&&k.jsxs("main",{className:"workspace-page",children:[k.jsxs("div",{className:"page-heading",children:[k.jsxs("div",{children:[k.jsx("span",{className:"eyebrow",children:"PHYSARUM · ACERVO PESSOAL"}),k.jsx("h1",{children:o==="Caderno"?"Pensamentos em movimento.":"Uma biblioteca de conexões."}),k.jsx("p",{children:o==="Caderno"?"Guarde perguntas, observações e ideias. Retome cada uma no seu contexto.":"Seu relatório, suas referências e novos caminhos de leitura."})]}),k.jsxs("button",{className:"primary",onClick:()=>o==="Caderno"?qe():U(!0),children:[k.jsx(Jo,{size:19}),o==="Caderno"?"Novo registro":"Adicionar fonte"]})]}),k.jsxs("div",{className:"collection-tools",children:[k.jsxs("label",{className:"search",children:[k.jsx(hM,{size:20}),k.jsx("input",{"aria-label":"Buscar no acervo",placeholder:o==="Caderno"?"Buscar nos seus registros…":"Buscar títulos, assuntos ou tipos…",value:V,onChange:ee=>q(ee.target.value)})]}),k.jsxs("span",{children:[o==="Caderno"?be.length:Le.length," ",o==="Caderno"?"registros":"fontes"]})]}),o==="Caderno"?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"filters",children:["Todos",...g_].map(ee=>k.jsx("button",{className:K===ee?"active":"",onClick:()=>ae(ee),children:ee},ee))}),be.length===0?k.jsxs("div",{className:"empty",children:[k.jsx(Og,{size:46,weight:"thin"}),k.jsx("h2",{children:O.length?"Nenhum registro encontrado":"O próximo insight começa aqui."}),k.jsx("p",{children:O.length?"Tente outro termo ou tipo de entrada.":"Anote uma pergunta, uma leitura ou uma observação. Seu contexto de exploração acompanha o registro."}),k.jsxs("button",{className:"secondary",onClick:qe,children:["Criar um registro ",k.jsx(Jo,{size:18})]})]}):k.jsx("div",{className:"notes-list",children:be.map(ee=>k.jsxs("button",{className:"note-card",onClick:()=>{G(ee),J(!0)},children:[k.jsxs("div",{children:[k.jsx("span",{className:"badge",children:ee.kind}),k.jsx("time",{children:new Date(ee.updated||ee.date).toLocaleDateString("pt-BR")})]}),k.jsx("p",{children:ee.body}),k.jsxs("footer",{children:[k.jsx(fv,{size:14}),ee.context,k.jsxs("span",{children:["Editar ",k.jsx(iu,{size:14})]})]})]},ee.id))}),k.jsxs("p",{className:"storage-note",children:[k.jsx(Ug,{size:14}),"Registros salvos neste navegador. Use Exportar para manter uma cópia."]})]}):k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"source-origin",children:[k.jsx(xh,{size:20}),k.jsxs("p",{children:[k.jsx("strong",{children:"Fontes com procedência."})," O acervo reúne referências do relatório, links pessoais e artigos consultados para o modelo. Cada entrada informa sua procedência e o que foi conferido."]})]}),k.jsxs("div",{className:"sources-list",children:[Le.map(ee=>k.jsxs("button",{className:"source-row",onClick:()=>re(ee),children:[k.jsx("div",{className:"source-icon",children:ee.id==="report"?k.jsx(vh,{size:28}):k.jsx(xh,{size:25})}),k.jsxs("div",{children:[k.jsx("span",{className:"eyebrow",children:ee.kind}),k.jsx("h3",{children:ee.title.replace(/\*/g,"")}),k.jsx("p",{children:ee.origin}),k.jsx("span",{className:"source-status",children:ee.status})]}),k.jsx(iu,{size:21})]},ee.id)),!Le.length&&k.jsxs("div",{className:"empty",children:[k.jsx("h2",{children:"Nenhuma fonte encontrada."}),k.jsx("p",{children:"Tente outro termo de busca."})]})]})]})]}),W&&k.jsx(qb,{context:g||se.title,initial:B,onSave:ut,onClose:()=>J(!1)}),oe&&k.jsxs(m0,{title:oe.id==="report"?"Relatório-base":"Detalhes da fonte",wide:!0,onClose:()=>re(null),children:[k.jsxs("div",{className:"reader-meta",children:[k.jsx("span",{className:"badge",children:oe.status}),k.jsx("h2",{children:oe.title.replace(/\*/g,"")}),k.jsxs("p",{children:["Procedência: ",oe.origin]}),oe.url&&k.jsxs("a",{className:"primary",href:oe.url,target:"_blank",rel:"noreferrer",children:["Abrir fonte original ",k.jsx(sM,{size:18})]}),k.jsxs("button",{className:"secondary",onClick:()=>{x(oe.title.replace(/\*/g,"")),re(null),qe()},children:[k.jsx(Jo,{size:17}),"Anotar sobre esta leitura"]})]}),oe.id==="report"?k.jsx("article",{className:"report-text",children:p_.split(`
`).map((ee,Fe)=>(ee=h0(ee),ee?ee.startsWith("#")?k.jsx("h3",{children:ee.replace(/^#+\s*/,"")},Fe):k.jsx("p",{children:ee},Fe):null))}):k.jsxs("div",{className:"source-details",children:[k.jsx("h3",{children:oe.summaryLabel||"Trecho de origem"}),k.jsx("p",{children:oe.excerpt||"Fonte adicionada manualmente ao acervo."}),k.jsx("p",{className:"muted",children:"Esta entrada não significa que o conteúdo foi verificado. A conferência deve ser feita na fonte original."})]})]}),pe&&k.jsx(m0,{title:"Adicionar fonte ao acervo",onClose:()=>U(!1),children:k.jsxs("form",{onSubmit:ee=>{ee.preventDefault();const Fe=new FormData(ee.currentTarget),nt=Fe.get("url").trim();if(!/^https?:\/\//i.test(nt)){_e("Use um endereço iniciado por https:// ou http://.");return}const ct={id:crypto.randomUUID(),title:Fe.get("title").trim(),url:nt,kind:"Link",status:"Adicionada manualmente",origin:"Seu acervo"};try{const ht=[ct,...b];localStorage.setItem("caderno-vivo.sources.v1",JSON.stringify(ht)),N(ht),U(!1),_e("Fonte adicionada ao acervo.")}catch{_e("Não foi possível salvar esta fonte.")}},children:[k.jsxs("label",{children:["Título",k.jsx("input",{name:"title",required:!0,placeholder:"Título do artigo, vídeo ou documento"})]}),k.jsxs("label",{children:["Endereço da fonte",k.jsx("input",{type:"url",name:"url",required:!0,placeholder:"https://…"})]}),k.jsx("p",{className:"muted",children:"Nesta etapa, a entrada é manual por link. Importação de PDFs e catalogação assistida serão adicionadas posteriormente."}),k.jsxs("footer",{children:[k.jsx("span",{children:"Associada ao Physarum"}),k.jsxs("button",{className:"primary",children:[k.jsx(Jo,{size:18}),"Adicionar fonte"]})]})]})}),ie&&k.jsxs("div",{className:"toast",role:"status",children:[k.jsx(lM,{size:18}),ie]})]})}L3.createRoot(document.getElementById("root")).render(k.jsx(E3.StrictMode,{children:k.jsx(kb,{})}));
