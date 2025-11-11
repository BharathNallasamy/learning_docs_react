(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const S of g.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&c(S)}).observe(document,{childList:!0,subtree:!0});function p(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(d){if(d.ep)return;d.ep=!0;const g=p(d);fetch(d.href,g)}})();var Mi={exports:{}},Bl={};var $m;function th(){if($m)return Bl;$m=1;var i=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function p(c,d,g){var S=null;if(g!==void 0&&(S=""+g),d.key!==void 0&&(S=""+d.key),"key"in d){g={};for(var T in d)T!=="key"&&(g[T]=d[T])}else g=d;return d=g.ref,{$$typeof:i,type:c,key:S,ref:d!==void 0?d:null,props:g}}return Bl.Fragment=m,Bl.jsx=p,Bl.jsxs=p,Bl}var ep;function ah(){return ep||(ep=1,Mi.exports=th()),Mi.exports}var n=ah(),Ui={exports:{}},$={};var tp;function nh(){if(tp)return $;tp=1;var i=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),S=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),H=Symbol.iterator;function F(b){return b===null||typeof b!="object"?null:(b=H&&b[H]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,z={};function q(b,U,_){this.props=b,this.context=U,this.refs=z,this.updater=_||G}q.prototype.isReactComponent={},q.prototype.setState=function(b,U){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,U,"setState")},q.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function J(){}J.prototype=q.prototype;function k(b,U,_){this.props=b,this.context=U,this.refs=z,this.updater=_||G}var X=k.prototype=new J;X.constructor=k,I(X,q.prototype),X.isPureReactComponent=!0;var pe=Array.isArray;function He(){}var ae={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function Te(b,U,_){var P=_.ref;return{$$typeof:i,type:b,key:U,ref:P!==void 0?P:null,props:_}}function rt(b,U){return Te(b.type,U,b.props)}function st(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function We(b){var U={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(_){return U[_]})}var Ua=/\/+/g;function It(b,U){return typeof b=="object"&&b!==null&&b.key!=null?We(""+b.key):U.toString(36)}function Tt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(He,He):(b.status="pending",b.then(function(U){b.status==="pending"&&(b.status="fulfilled",b.value=U)},function(U){b.status==="pending"&&(b.status="rejected",b.reason=U)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function L(b,U,_,P,ee){var le=typeof b;(le==="undefined"||le==="boolean")&&(b=null);var ge=!1;if(b===null)ge=!0;else switch(le){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(b.$$typeof){case i:case m:ge=!0;break;case R:return ge=b._init,L(ge(b._payload),U,_,P,ee)}}if(ge)return ee=ee(b),ge=P===""?"."+It(b,0):P,pe(ee)?(_="",ge!=null&&(_=ge.replace(Ua,"$&/")+"/"),L(ee,U,_,"",function(Yn){return Yn})):ee!=null&&(st(ee)&&(ee=rt(ee,_+(ee.key==null||b&&b.key===ee.key?"":(""+ee.key).replace(Ua,"$&/")+"/")+ge)),U.push(ee)),1;ge=0;var Qe=P===""?".":P+":";if(pe(b))for(var Le=0;Le<b.length;Le++)P=b[Le],le=Qe+It(P,Le),ge+=L(P,U,_,le,ee);else if(Le=F(b),typeof Le=="function")for(b=Le.call(b),Le=0;!(P=b.next()).done;)P=P.value,le=Qe+It(P,Le++),ge+=L(P,U,_,le,ee);else if(le==="object"){if(typeof b.then=="function")return L(Tt(b),U,_,P,ee);throw U=String(b),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ge}function B(b,U,_){if(b==null)return b;var P=[],ee=0;return L(b,P,"","",function(le){return U.call(_,le,ee++)}),P}function W(b){if(b._status===-1){var U=b._result;U=U(),U.then(function(_){(b._status===0||b._status===-1)&&(b._status=1,b._result=_)},function(_){(b._status===0||b._status===-1)&&(b._status=2,b._result=_)}),b._status===-1&&(b._status=0,b._result=U)}if(b._status===1)return b._result.default;throw b._result}var xe=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Se={map:B,forEach:function(b,U,_){B(b,function(){U.apply(this,arguments)},_)},count:function(b){var U=0;return B(b,function(){U++}),U},toArray:function(b){return B(b,function(U){return U})||[]},only:function(b){if(!st(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return $.Activity=O,$.Children=Se,$.Component=q,$.Fragment=p,$.Profiler=d,$.PureComponent=k,$.StrictMode=c,$.Suspense=v,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,$.__COMPILER_RUNTIME={__proto__:null,c:function(b){return ae.H.useMemoCache(b)}},$.cache=function(b){return function(){return b.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(b,U,_){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var P=I({},b.props),ee=b.key;if(U!=null)for(le in U.key!==void 0&&(ee=""+U.key),U)!_e.call(U,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&U.ref===void 0||(P[le]=U[le]);var le=arguments.length-2;if(le===1)P.children=_;else if(1<le){for(var ge=Array(le),Qe=0;Qe<le;Qe++)ge[Qe]=arguments[Qe+2];P.children=ge}return Te(b.type,ee,P)},$.createContext=function(b){return b={$$typeof:S,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:g,_context:b},b},$.createElement=function(b,U,_){var P,ee={},le=null;if(U!=null)for(P in U.key!==void 0&&(le=""+U.key),U)_e.call(U,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(ee[P]=U[P]);var ge=arguments.length-2;if(ge===1)ee.children=_;else if(1<ge){for(var Qe=Array(ge),Le=0;Le<ge;Le++)Qe[Le]=arguments[Le+2];ee.children=Qe}if(b&&b.defaultProps)for(P in ge=b.defaultProps,ge)ee[P]===void 0&&(ee[P]=ge[P]);return Te(b,le,ee)},$.createRef=function(){return{current:null}},$.forwardRef=function(b){return{$$typeof:T,render:b}},$.isValidElement=st,$.lazy=function(b){return{$$typeof:R,_payload:{_status:-1,_result:b},_init:W}},$.memo=function(b,U){return{$$typeof:h,type:b,compare:U===void 0?null:U}},$.startTransition=function(b){var U=ae.T,_={};ae.T=_;try{var P=b(),ee=ae.S;ee!==null&&ee(_,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(He,xe)}catch(le){xe(le)}finally{U!==null&&_.types!==null&&(U.types=_.types),ae.T=U}},$.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},$.use=function(b){return ae.H.use(b)},$.useActionState=function(b,U,_){return ae.H.useActionState(b,U,_)},$.useCallback=function(b,U){return ae.H.useCallback(b,U)},$.useContext=function(b){return ae.H.useContext(b)},$.useDebugValue=function(){},$.useDeferredValue=function(b,U){return ae.H.useDeferredValue(b,U)},$.useEffect=function(b,U){return ae.H.useEffect(b,U)},$.useEffectEvent=function(b){return ae.H.useEffectEvent(b)},$.useId=function(){return ae.H.useId()},$.useImperativeHandle=function(b,U,_){return ae.H.useImperativeHandle(b,U,_)},$.useInsertionEffect=function(b,U){return ae.H.useInsertionEffect(b,U)},$.useLayoutEffect=function(b,U){return ae.H.useLayoutEffect(b,U)},$.useMemo=function(b,U){return ae.H.useMemo(b,U)},$.useOptimistic=function(b,U){return ae.H.useOptimistic(b,U)},$.useReducer=function(b,U,_){return ae.H.useReducer(b,U,_)},$.useRef=function(b){return ae.H.useRef(b)},$.useState=function(b){return ae.H.useState(b)},$.useSyncExternalStore=function(b,U,_){return ae.H.useSyncExternalStore(b,U,_)},$.useTransition=function(){return ae.H.useTransition()},$.version="19.2.0",$}var ap;function Yi(){return ap||(ap=1,Ui.exports=nh()),Ui.exports}var w=Yi(),ki={exports:{}},Hl={},Bi={exports:{}},Hi={};var np;function lh(){return np||(np=1,(function(i){function m(L,B){var W=L.length;L.push(B);e:for(;0<W;){var xe=W-1>>>1,Se=L[xe];if(0<d(Se,B))L[xe]=B,L[W]=Se,W=xe;else break e}}function p(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var B=L[0],W=L.pop();if(W!==B){L[0]=W;e:for(var xe=0,Se=L.length,b=Se>>>1;xe<b;){var U=2*(xe+1)-1,_=L[U],P=U+1,ee=L[P];if(0>d(_,W))P<Se&&0>d(ee,_)?(L[xe]=ee,L[P]=W,xe=P):(L[xe]=_,L[U]=W,xe=U);else if(P<Se&&0>d(ee,W))L[xe]=ee,L[P]=W,xe=P;else break e}}return B}function d(L,B){var W=L.sortIndex-B.sortIndex;return W!==0?W:L.id-B.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;i.unstable_now=function(){return g.now()}}else{var S=Date,T=S.now();i.unstable_now=function(){return S.now()-T}}var v=[],h=[],R=1,O=null,H=3,F=!1,G=!1,I=!1,z=!1,q=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function X(L){for(var B=p(h);B!==null;){if(B.callback===null)c(h);else if(B.startTime<=L)c(h),B.sortIndex=B.expirationTime,m(v,B);else break;B=p(h)}}function pe(L){if(I=!1,X(L),!G)if(p(v)!==null)G=!0,He||(He=!0,We());else{var B=p(h);B!==null&&Tt(pe,B.startTime-L)}}var He=!1,ae=-1,_e=5,Te=-1;function rt(){return z?!0:!(i.unstable_now()-Te<_e)}function st(){if(z=!1,He){var L=i.unstable_now();Te=L;var B=!0;try{e:{G=!1,I&&(I=!1,J(ae),ae=-1),F=!0;var W=H;try{t:{for(X(L),O=p(v);O!==null&&!(O.expirationTime>L&&rt());){var xe=O.callback;if(typeof xe=="function"){O.callback=null,H=O.priorityLevel;var Se=xe(O.expirationTime<=L);if(L=i.unstable_now(),typeof Se=="function"){O.callback=Se,X(L),B=!0;break t}O===p(v)&&c(v),X(L)}else c(v);O=p(v)}if(O!==null)B=!0;else{var b=p(h);b!==null&&Tt(pe,b.startTime-L),B=!1}}break e}finally{O=null,H=W,F=!1}B=void 0}}finally{B?We():He=!1}}}var We;if(typeof k=="function")We=function(){k(st)};else if(typeof MessageChannel<"u"){var Ua=new MessageChannel,It=Ua.port2;Ua.port1.onmessage=st,We=function(){It.postMessage(null)}}else We=function(){q(st,0)};function Tt(L,B){ae=q(function(){L(i.unstable_now())},B)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return H},i.unstable_next=function(L){switch(H){case 1:case 2:case 3:var B=3;break;default:B=H}var W=H;H=B;try{return L()}finally{H=W}},i.unstable_requestPaint=function(){z=!0},i.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=H;H=L;try{return B()}finally{H=W}},i.unstable_scheduleCallback=function(L,B,W){var xe=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xe+W:xe):W=xe,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=W+Se,L={id:R++,callback:B,priorityLevel:L,startTime:W,expirationTime:Se,sortIndex:-1},W>xe?(L.sortIndex=W,m(h,L),p(v)===null&&L===p(h)&&(I?(J(ae),ae=-1):I=!0,Tt(pe,W-xe))):(L.sortIndex=Se,m(v,L),G||F||(G=!0,He||(He=!0,We()))),L},i.unstable_shouldYield=rt,i.unstable_wrapCallback=function(L){var B=H;return function(){var W=H;H=B;try{return L.apply(this,arguments)}finally{H=W}}}})(Hi)),Hi}var lp;function rh(){return lp||(lp=1,Bi.exports=lh()),Bi.exports}var _i={exports:{}},Ve={};var rp;function sh(){if(rp)return Ve;rp=1;var i=Yi();function m(v){var h="https://react.dev/errors/"+v;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)h+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+v+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var c={d:{f:p,r:function(){throw Error(m(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(v,h,R){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:v,containerInfo:h,implementation:R}}var S=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(v,h){if(v==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ve.createPortal=function(v,h){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(m(299));return g(v,h,null,R)},Ve.flushSync=function(v){var h=S.T,R=c.p;try{if(S.T=null,c.p=2,v)return v()}finally{S.T=h,c.p=R,c.d.f()}},Ve.preconnect=function(v,h){typeof v=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(v,h))},Ve.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Ve.preinit=function(v,h){if(typeof v=="string"&&h&&typeof h.as=="string"){var R=h.as,O=T(R,h.crossOrigin),H=typeof h.integrity=="string"?h.integrity:void 0,F=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;R==="style"?c.d.S(v,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:O,integrity:H,fetchPriority:F}):R==="script"&&c.d.X(v,{crossOrigin:O,integrity:H,fetchPriority:F,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ve.preinitModule=function(v,h){if(typeof v=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var R=T(h.as,h.crossOrigin);c.d.M(v,{crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(v)},Ve.preload=function(v,h){if(typeof v=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var R=h.as,O=T(R,h.crossOrigin);c.d.L(v,R,{crossOrigin:O,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ve.preloadModule=function(v,h){if(typeof v=="string")if(h){var R=T(h.as,h.crossOrigin);c.d.m(v,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(v)},Ve.requestFormReset=function(v){c.d.r(v)},Ve.unstable_batchedUpdates=function(v,h){return v(h)},Ve.useFormState=function(v,h,R){return S.H.useFormState(v,h,R)},Ve.useFormStatus=function(){return S.H.useHostTransitionStatus()},Ve.version="19.2.0",Ve}var sp;function oh(){if(sp)return _i.exports;sp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(m){console.error(m)}}return i(),_i.exports=sh(),_i.exports}var op;function ih(){if(op)return Hl;op=1;var i=rh(),m=Yi(),p=oh();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(g(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var r=a.return;if(r===null)break;var s=r.alternate;if(s===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===a)return v(r),e;if(s===l)return v(r),t;s=s.sibling}throw Error(c(188))}if(a.return!==l.return)a=r,l=s;else{for(var o=!1,u=r.child;u;){if(u===a){o=!0,a=r,l=s;break}if(u===l){o=!0,l=r,a=s;break}u=u.sibling}if(!o){for(u=s.child;u;){if(u===a){o=!0,a=s,l=r;break}if(u===l){o=!0,l=s,a=r;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,H=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),k=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),st=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=st&&e[st]||e["@@iterator"],typeof e=="function"?e:null)}var Ua=Symbol.for("react.client.reference");function It(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ua?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case q:return"Profiler";case z:return"StrictMode";case pe:return"Suspense";case He:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case k:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:It(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return It(e(t))}catch{}}return null}var Tt=Array.isArray,L=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},xe=[],Se=-1;function b(e){return{current:e}}function U(e){0>Se||(e.current=xe[Se],xe[Se]=null,Se--)}function _(e,t){Se++,xe[Se]=e.current,e.current=t}var P=b(null),ee=b(null),le=b(null),ge=b(null);function Qe(e,t){switch(_(le,t),_(ee,e),_(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nm(t),e=jm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(P),_(P,e)}function Le(){U(P),U(ee),U(le)}function Yn(e){e.memoizedState!==null&&_(ge,e);var t=P.current,a=jm(t,e.type);t!==a&&(_(ee,e),_(P,a))}function Yl(e){ee.current===e&&(U(P),U(ee)),ge.current===e&&(U(ge),Ol._currentValue=W)}var gs,Zi;function ka(e){if(gs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gs=t&&t[1]||"",Zi=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gs+e+Zi}var fs=!1;function hs(e,t){if(!e||fs)return"";fs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(C){var E=C}Reflect.construct(e,[],M)}else{try{M.call()}catch(C){E=C}e.call(M.prototype)}}else{try{throw Error()}catch(C){E=C}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(C){if(C&&E&&typeof C.stack=="string")return[C.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),o=s[0],u=s[1];if(o&&u){var f=o.split(`
`),j=u.split(`
`);for(r=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;r<j.length&&!j[r].includes("DetermineComponentFrameRoot");)r++;if(l===f.length||r===j.length)for(l=f.length-1,r=j.length-1;1<=l&&0<=r&&f[l]!==j[r];)r--;for(;1<=l&&0<=r;l--,r--)if(f[l]!==j[r]){if(l!==1||r!==1)do if(l--,r--,0>r||f[l]!==j[r]){var A=`
`+f[l].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=l&&0<=r);break}}}finally{fs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ka(a):""}function Dp(e,t){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return e.child!==t&&t!==null?ka("Suspense Fallback"):ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return hs(e.type,!1);case 11:return hs(e.type.render,!1);case 1:return hs(e.type,!0);case 31:return ka("Activity");default:return""}}function $i(e){try{var t="",a=null;do t+=Dp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var xs=Object.prototype.hasOwnProperty,bs=i.unstable_scheduleCallback,ys=i.unstable_cancelCallback,Op=i.unstable_shouldYield,Mp=i.unstable_requestPaint,ot=i.unstable_now,Up=i.unstable_getCurrentPriorityLevel,ec=i.unstable_ImmediatePriority,tc=i.unstable_UserBlockingPriority,Jl=i.unstable_NormalPriority,kp=i.unstable_LowPriority,ac=i.unstable_IdlePriority,Bp=i.log,Hp=i.unstable_setDisableYieldValue,Jn=null,it=null;function ia(e){if(typeof Bp=="function"&&Hp(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Jn,e)}catch{}}var ct=Math.clz32?Math.clz32:Ip,_p=Math.log,zp=Math.LN2;function Ip(e){return e>>>=0,e===0?32:31-(_p(e)/zp|0)|0}var Pl=256,Fl=262144,Vl=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ql(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~s,l!==0?r=Ba(l):(o&=u,o!==0?r=Ba(o):a||(a=u&~e,a!==0&&(r=Ba(a))))):(u=l&~s,u!==0?r=Ba(u):o!==0?r=Ba(o):a||(a=l&~e,a!==0&&(r=Ba(a)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:r}function Pn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nc(){var e=Vl;return Vl<<=1,(Vl&62914560)===0&&(Vl=4194304),e}function vs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Fn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gp(e,t,a,l,r,s){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,f=e.expirationTimes,j=e.hiddenUpdates;for(a=o&~a;0<a;){var A=31-ct(a),M=1<<A;u[A]=0,f[A]=-1;var E=j[A];if(E!==null)for(j[A]=null,A=0;A<E.length;A++){var C=E[A];C!==null&&(C.lane&=-536870913)}a&=~M}l!==0&&lc(e,l,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function lc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ct(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function rc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ct(a),r=1<<l;r&t|e[l]&t&&(e[l]|=t),a&=~r}}function sc(e,t){var a=t&-t;return a=(a&42)!==0?1:Ss(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ss(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oc(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Fm(e.type))}function ic(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var ca=Math.random().toString(36).slice(2),Ge="__reactFiber$"+ca,Ze="__reactProps$"+ca,en="__reactContainer$"+ca,js="__reactEvents$"+ca,Yp="__reactListeners$"+ca,Jp="__reactHandles$"+ca,cc="__reactResources$"+ca,Vn="__reactMarker$"+ca;function Es(e){delete e[Ge],delete e[Ze],delete e[js],delete e[Yp],delete e[Jp]}function tn(e){var t=e[Ge];if(t)return t;for(var a=e.parentNode;a;){if(t=a[en]||a[Ge]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Lm(e);e!==null;){if(a=e[Ge])return a;e=Lm(e)}return t}e=a,a=e.parentNode}return null}function an(e){if(e=e[Ge]||e[en]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function nn(e){var t=e[cc];return t||(t=e[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Vn]=!0}var uc=new Set,dc={};function Ha(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(dc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var Pp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},pc={};function Fp(e){return xs.call(pc,e)?!0:xs.call(mc,e)?!1:Pp.test(e)?pc[e]=!0:(mc[e]=!0,!1)}function Xl(e,t,a){if(Fp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Kl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ws(e){if(!e._valueTracker){var t=gc(e)?"checked":"value";e._valueTracker=Vp(e,t,""+e[t])}}function fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=gc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qp=/[\n"\\]/g;function bt(e){return e.replace(Qp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cs(e,t,a,l,r,s,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Ts(e,o,xt(t)):a!=null?Ts(e,o,xt(a)):l!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+xt(u):e.removeAttribute("name")}function hc(e,t,a,l,r,s,o,u){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ws(e);return}a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ws(e)}function Ts(e,t,a){t==="number"&&Wl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,t,a,l){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function xc(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function bc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Tt(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ws(e)}function sn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Xp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Xp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function vc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&a[r]!==l&&yc(e,r,l)}else for(var s in t)t.hasOwnProperty(s)&&yc(e,s,t[s])}function Rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(e){return Wp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var As=null;function Ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,cn=null;function Sc(e){var t=an(e);if(t&&(e=t.stateNode)){var a=e[Ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var r=l[Ze]||null;if(!r)throw Error(c(90));Cs(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&fc(l)}break e;case"textarea":xc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&rn(e,!!a.multiple,t,!1)}}}var Ds=!1;function Nc(e,t,a){if(Ds)return e(t,a);Ds=!0;try{var l=e(t);return l}finally{if(Ds=!1,(on!==null||cn!==null)&&(zr(),on&&(t=on,e=cn,cn=on=null,Sc(t),e)))for(t=0;t<e.length;t++)Sc(e[t])}}function Xn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ze]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=!1;if(Yt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Os=!1}var ua=null,Ms=null,$l=null;function jc(){if($l)return $l;var e,t=Ms,a=t.length,l,r="value"in ua?ua.value:ua.textContent,s=r.length;for(e=0;e<a&&t[e]===r[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===r[s-l];l++);return $l=r.slice(e,1<l?1-l:void 0)}function er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function Ec(){return!1}function $e(e){function t(a,l,r,s,o){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tr:Ec,this.isPropagationStopped=Ec,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ar=$e(_a),Wn=O({},_a,{view:0,detail:0}),Zp=$e(Wn),Us,ks,Zn,nr=O({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(Us=e.screenX-Zn.screenX,ks=e.screenY-Zn.screenY):ks=Us=0,Zn=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),wc=$e(nr),$p=O({},nr,{dataTransfer:0}),eg=$e($p),tg=O({},Wn,{relatedTarget:0}),Bs=$e(tg),ag=O({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=$e(ag),lg=O({},_a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rg=$e(lg),sg=O({},_a,{data:0}),Cc=$e(sg),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cg[e])?!!t[e]:!1}function Hs(){return ug}var dg=O({},Wn,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ig[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=$e(dg),pg=O({},nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=$e(pg),gg=O({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),fg=$e(gg),hg=O({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=$e(hg),bg=O({},nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=$e(bg),vg=O({},_a,{newState:0,oldState:0}),Sg=$e(vg),Ng=[9,13,27,32],_s=Yt&&"CompositionEvent"in window,$n=null;Yt&&"documentMode"in document&&($n=document.documentMode);var jg=Yt&&"TextEvent"in window&&!$n,Rc=Yt&&(!_s||$n&&8<$n&&11>=$n),Ac=" ",Lc=!1;function Dc(e,t){switch(e){case"keyup":return Ng.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function Eg(e,t){switch(e){case"compositionend":return Oc(t);case"keypress":return t.which!==32?null:(Lc=!0,Ac);case"textInput":return e=t.data,e===Ac&&Lc?null:e;default:return null}}function wg(e,t){if(un)return e==="compositionend"||!_s&&Dc(e,t)?(e=jc(),$l=Ms=ua=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cg[e.type]:t==="textarea"}function Uc(e,t,a,l){on?cn?cn.push(l):cn=[l]:on=l,t=Fr(t,"onChange"),0<t.length&&(a=new ar("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var el=null,tl=null;function Tg(e){hm(e,0)}function lr(e){var t=Qn(e);if(fc(t))return e}function kc(e,t){if(e==="change")return t}var Bc=!1;if(Yt){var zs;if(Yt){var Is="oninput"in document;if(!Is){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Is=typeof Hc.oninput=="function"}zs=Is}else zs=!1;Bc=zs&&(!document.documentMode||9<document.documentMode)}function _c(){el&&(el.detachEvent("onpropertychange",zc),tl=el=null)}function zc(e){if(e.propertyName==="value"&&lr(tl)){var t=[];Uc(t,tl,e,Ls(e)),Nc(Tg,t)}}function Rg(e,t,a){e==="focusin"?(_c(),el=t,tl=a,el.attachEvent("onpropertychange",zc)):e==="focusout"&&_c()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lr(tl)}function Lg(e,t){if(e==="click")return lr(t)}function Dg(e,t){if(e==="input"||e==="change")return lr(t)}function Og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Og;function al(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!xs.call(t,r)||!ut(e[r],t[r]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var a=Ic(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ic(a)}}function Gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wl(e.document)}return t}function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mg=Yt&&"documentMode"in document&&11>=document.documentMode,dn=null,Gs=null,nl=null,Ys=!1;function Jc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ys||dn==null||dn!==Wl(l)||(l=dn,"selectionStart"in l&&qs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),nl&&al(nl,l)||(nl=l,l=Fr(Gs,"onSelect"),0<l.length&&(t=new ar("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=dn)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var mn={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Js={},Pc={};Yt&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Ia(e){if(Js[e])return Js[e];if(!mn[e])return e;var t=mn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Pc)return Js[e]=t[a];return e}var Fc=Ia("animationend"),Vc=Ia("animationiteration"),Qc=Ia("animationstart"),Ug=Ia("transitionrun"),kg=Ia("transitionstart"),Bg=Ia("transitioncancel"),Xc=Ia("transitionend"),Kc=new Map,Ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ps.push("scrollEnd");function Rt(e,t){Kc.set(e,t),Ha(t,[e])}var rr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],pn=0,Fs=0;function sr(){for(var e=pn,t=Fs=pn=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var r=yt[t];yt[t++]=null;var s=yt[t];if(yt[t++]=null,l!==null&&r!==null){var o=l.pending;o===null?r.next=r:(r.next=o.next,o.next=r),l.pending=r}s!==0&&Wc(a,r,s)}}function or(e,t,a,l){yt[pn++]=e,yt[pn++]=t,yt[pn++]=a,yt[pn++]=l,Fs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Vs(e,t,a,l){return or(e,t,a,l),ir(e)}function qa(e,t){return or(e,null,null,t),ir(e)}function Wc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-ct(a),e=s.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=a|536870912),s):null}function ir(e){if(50<wl)throw wl=0,ni=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gn={};function Hg(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,l){return new Hg(e,t,a,l)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cr(e,t,a,l,r,s){var o=0;if(l=e,typeof e=="function")Qs(e)&&(o=1);else if(typeof e=="string")o=Yf(e,a,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=dt(31,a,t,r),e.elementType=Te,e.lanes=s,e;case I:return Ga(a.children,r,s,t);case z:o=8,r|=24;break;case q:return e=dt(12,a,t,r|2),e.elementType=q,e.lanes=s,e;case pe:return e=dt(13,a,t,r),e.elementType=pe,e.lanes=s,e;case He:return e=dt(19,a,t,r),e.elementType=He,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:o=10;break e;case J:o=9;break e;case X:o=11;break e;case ae:o=14;break e;case _e:o=16,l=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=dt(o,a,t,r),t.elementType=e,t.type=l,t.lanes=s,t}function Ga(e,t,a,l){return e=dt(7,e,l,t),e.lanes=a,e}function Xs(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function $c(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Ks(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var eu=new WeakMap;function vt(e,t){if(typeof e=="object"&&e!==null){var a=eu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$i(t)},eu.set(e,t),t)}return{value:e,source:t,stack:$i(t)}}var fn=[],hn=0,ur=null,ll=0,St=[],Nt=0,da=null,Mt=1,Ut="";function Pt(e,t){fn[hn++]=ll,fn[hn++]=ur,ur=e,ll=t}function tu(e,t,a){St[Nt++]=Mt,St[Nt++]=Ut,St[Nt++]=da,da=e;var l=Mt;e=Ut;var r=32-ct(l)-1;l&=~(1<<r),a+=1;var s=32-ct(t)+r;if(30<s){var o=r-r%5;s=(l&(1<<o)-1).toString(32),l>>=o,r-=o,Mt=1<<32-ct(t)+r|a<<r|l,Ut=s+e}else Mt=1<<s|a<<r|l,Ut=e}function Ws(e){e.return!==null&&(Pt(e,1),tu(e,1,0))}function Zs(e){for(;e===ur;)ur=fn[--hn],fn[hn]=null,ll=fn[--hn],fn[hn]=null;for(;e===da;)da=St[--Nt],St[Nt]=null,Ut=St[--Nt],St[Nt]=null,Mt=St[--Nt],St[Nt]=null}function au(e,t){St[Nt++]=Mt,St[Nt++]=Ut,St[Nt++]=da,Mt=t.id,Ut=t.overflow,da=e}var Ye=null,je=null,ce=!1,ma=null,jt=!1,$s=Error(c(519));function pa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(vt(t,e)),$s}function nu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ge]=e,t[Ze]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Tl.length;a++)se(Tl[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),hc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),bc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||vm(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||pa(e,!0)}function lu(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:Ye=Ye.return}}function xn(e){if(e!==Ye)return!1;if(!ce)return lu(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bi(e.type,e.memoizedProps)),a=!a),a&&je&&pa(e),lu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));je=Am(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));je=Am(e)}else t===27?(t=je,Ta(e.type)?(e=ji,ji=null,je=e):je=t):je=Ye?wt(e.stateNode.nextSibling):null;return!0}function Ya(){je=Ye=null,ce=!1}function eo(){var e=ma;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),ma=null),e}function rl(e){ma===null?ma=[e]:ma.push(e)}var to=b(null),Ja=null,Ft=null;function ga(e,t,a){_(to,t._currentValue),t._currentValue=a}function Vt(e){e._currentValue=to.current,U(to)}function ao(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function no(e,t,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var o=r.child;s=s.firstContext;e:for(;s!==null;){var u=s;s=r;for(var f=0;f<t.length;f++)if(u.context===t[f]){s.lanes|=a,u=s.alternate,u!==null&&(u.lanes|=a),ao(s.return,a,e),l||(o=null);break e}s=u.next}}else if(r.tag===18){if(o=r.return,o===null)throw Error(c(341));o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),ao(o,a,e),o=null}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}}function bn(e,t,a,l){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var o=r.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=r.type;ut(r.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(r===ge.current){if(o=r.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ol):e=[Ol])}r=r.return}e!==null&&no(t,e,a,l),t.flags|=262144}function dr(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ja=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return ru(Ja,e)}function mr(e,t){return Ja===null&&Pa(e),ru(e,t)}function ru(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ft===null){if(e===null)throw Error(c(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return a}var _g=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},zg=i.unstable_scheduleCallback,Ig=i.unstable_NormalPriority,Me={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lo(){return{controller:new _g,data:new Map,refCount:0}}function sl(e){e.refCount--,e.refCount===0&&zg(Ig,function(){e.controller.abort()})}var ol=null,ro=0,yn=0,vn=null;function qg(e,t){if(ol===null){var a=ol=[];ro=0,yn=ci(),vn={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ro++,t.then(su,su),t}function su(){if(--ro===0&&ol!==null){vn!==null&&(vn.status="fulfilled");var e=ol;ol=null,yn=0,vn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gg(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var ou=L.S;L.S=function(e,t){Jd=ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qg(e,t),ou!==null&&ou(e,t)};var Fa=b(null);function so(){var e=Fa.current;return e!==null?e:Ne.pooledCache}function pr(e,t){t===null?_(Fa,Fa.current):_(Fa,t.pool)}function iu(){var e=so();return e===null?null:{parent:Me._currentValue,pool:e}}var Sn=Error(c(460)),oo=Error(c(474)),gr=Error(c(542)),fr={then:function(){}};function cu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mu(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mu(e),e}throw Qa=t,Sn}}function Va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,Sn):a}}var Qa=null;function du(){if(Qa===null)throw Error(c(459));var e=Qa;return Qa=null,e}function mu(e){if(e===Sn||e===gr)throw Error(c(483))}var Nn=null,il=0;function hr(e){var t=il;return il+=1,Nn===null&&(Nn=[]),uu(Nn,e,t)}function cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xr(e,t){throw t.$$typeof===H?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function pu(e){function t(y,x){if(e){var N=y.deletions;N===null?(y.deletions=[x],y.flags|=16):N.push(x)}}function a(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function l(y){for(var x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function r(y,x){return y=Jt(y,x),y.index=0,y.sibling=null,y}function s(y,x,N){return y.index=N,e?(N=y.alternate,N!==null?(N=N.index,N<x?(y.flags|=67108866,x):N):(y.flags|=67108866,x)):(y.flags|=1048576,x)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function u(y,x,N,D){return x===null||x.tag!==6?(x=Xs(N,y.mode,D),x.return=y,x):(x=r(x,N),x.return=y,x)}function f(y,x,N,D){var Q=N.type;return Q===I?A(y,x,N.props.children,D,N.key):x!==null&&(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===_e&&Va(Q)===x.type)?(x=r(x,N.props),cl(x,N),x.return=y,x):(x=cr(N.type,N.key,N.props,null,y.mode,D),cl(x,N),x.return=y,x)}function j(y,x,N,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==N.containerInfo||x.stateNode.implementation!==N.implementation?(x=Ks(N,y.mode,D),x.return=y,x):(x=r(x,N.children||[]),x.return=y,x)}function A(y,x,N,D,Q){return x===null||x.tag!==7?(x=Ga(N,y.mode,D,Q),x.return=y,x):(x=r(x,N),x.return=y,x)}function M(y,x,N){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Xs(""+x,y.mode,N),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case F:return N=cr(x.type,x.key,x.props,null,y.mode,N),cl(N,x),N.return=y,N;case G:return x=Ks(x,y.mode,N),x.return=y,x;case _e:return x=Va(x),M(y,x,N)}if(Tt(x)||We(x))return x=Ga(x,y.mode,N,null),x.return=y,x;if(typeof x.then=="function")return M(y,hr(x),N);if(x.$$typeof===k)return M(y,mr(y,x),N);xr(y,x)}return null}function E(y,x,N,D){var Q=x!==null?x.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return Q!==null?null:u(y,x,""+N,D);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case F:return N.key===Q?f(y,x,N,D):null;case G:return N.key===Q?j(y,x,N,D):null;case _e:return N=Va(N),E(y,x,N,D)}if(Tt(N)||We(N))return Q!==null?null:A(y,x,N,D,null);if(typeof N.then=="function")return E(y,x,hr(N),D);if(N.$$typeof===k)return E(y,x,mr(y,N),D);xr(y,N)}return null}function C(y,x,N,D,Q){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return y=y.get(N)||null,u(x,y,""+D,Q);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case F:return y=y.get(D.key===null?N:D.key)||null,f(x,y,D,Q);case G:return y=y.get(D.key===null?N:D.key)||null,j(x,y,D,Q);case _e:return D=Va(D),C(y,x,N,D,Q)}if(Tt(D)||We(D))return y=y.get(N)||null,A(x,y,D,Q,null);if(typeof D.then=="function")return C(y,x,N,hr(D),Q);if(D.$$typeof===k)return C(y,x,N,mr(x,D),Q);xr(x,D)}return null}function Y(y,x,N,D){for(var Q=null,ue=null,V=x,ne=x=0,ie=null;V!==null&&ne<N.length;ne++){V.index>ne?(ie=V,V=null):ie=V.sibling;var de=E(y,V,N[ne],D);if(de===null){V===null&&(V=ie);break}e&&V&&de.alternate===null&&t(y,V),x=s(de,x,ne),ue===null?Q=de:ue.sibling=de,ue=de,V=ie}if(ne===N.length)return a(y,V),ce&&Pt(y,ne),Q;if(V===null){for(;ne<N.length;ne++)V=M(y,N[ne],D),V!==null&&(x=s(V,x,ne),ue===null?Q=V:ue.sibling=V,ue=V);return ce&&Pt(y,ne),Q}for(V=l(V);ne<N.length;ne++)ie=C(V,y,ne,N[ne],D),ie!==null&&(e&&ie.alternate!==null&&V.delete(ie.key===null?ne:ie.key),x=s(ie,x,ne),ue===null?Q=ie:ue.sibling=ie,ue=ie);return e&&V.forEach(function(Oa){return t(y,Oa)}),ce&&Pt(y,ne),Q}function K(y,x,N,D){if(N==null)throw Error(c(151));for(var Q=null,ue=null,V=x,ne=x=0,ie=null,de=N.next();V!==null&&!de.done;ne++,de=N.next()){V.index>ne?(ie=V,V=null):ie=V.sibling;var Oa=E(y,V,de.value,D);if(Oa===null){V===null&&(V=ie);break}e&&V&&Oa.alternate===null&&t(y,V),x=s(Oa,x,ne),ue===null?Q=Oa:ue.sibling=Oa,ue=Oa,V=ie}if(de.done)return a(y,V),ce&&Pt(y,ne),Q;if(V===null){for(;!de.done;ne++,de=N.next())de=M(y,de.value,D),de!==null&&(x=s(de,x,ne),ue===null?Q=de:ue.sibling=de,ue=de);return ce&&Pt(y,ne),Q}for(V=l(V);!de.done;ne++,de=N.next())de=C(V,y,ne,de.value,D),de!==null&&(e&&de.alternate!==null&&V.delete(de.key===null?ne:de.key),x=s(de,x,ne),ue===null?Q=de:ue.sibling=de,ue=de);return e&&V.forEach(function(eh){return t(y,eh)}),ce&&Pt(y,ne),Q}function ve(y,x,N,D){if(typeof N=="object"&&N!==null&&N.type===I&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case F:e:{for(var Q=N.key;x!==null;){if(x.key===Q){if(Q=N.type,Q===I){if(x.tag===7){a(y,x.sibling),D=r(x,N.props.children),D.return=y,y=D;break e}}else if(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===_e&&Va(Q)===x.type){a(y,x.sibling),D=r(x,N.props),cl(D,N),D.return=y,y=D;break e}a(y,x);break}else t(y,x);x=x.sibling}N.type===I?(D=Ga(N.props.children,y.mode,D,N.key),D.return=y,y=D):(D=cr(N.type,N.key,N.props,null,y.mode,D),cl(D,N),D.return=y,y=D)}return o(y);case G:e:{for(Q=N.key;x!==null;){if(x.key===Q)if(x.tag===4&&x.stateNode.containerInfo===N.containerInfo&&x.stateNode.implementation===N.implementation){a(y,x.sibling),D=r(x,N.children||[]),D.return=y,y=D;break e}else{a(y,x);break}else t(y,x);x=x.sibling}D=Ks(N,y.mode,D),D.return=y,y=D}return o(y);case _e:return N=Va(N),ve(y,x,N,D)}if(Tt(N))return Y(y,x,N,D);if(We(N)){if(Q=We(N),typeof Q!="function")throw Error(c(150));return N=Q.call(N),K(y,x,N,D)}if(typeof N.then=="function")return ve(y,x,hr(N),D);if(N.$$typeof===k)return ve(y,x,mr(y,N),D);xr(y,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,x!==null&&x.tag===6?(a(y,x.sibling),D=r(x,N),D.return=y,y=D):(a(y,x),D=Xs(N,y.mode,D),D.return=y,y=D),o(y)):a(y,x)}return function(y,x,N,D){try{il=0;var Q=ve(y,x,N,D);return Nn=null,Q}catch(V){if(V===Sn||V===gr)throw V;var ue=dt(29,V,null,y.mode);return ue.lanes=D,ue.return=y,ue}finally{}}}var Xa=pu(!0),gu=pu(!1),fa=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=ir(e),Wc(e,null,a),t}return or(e,l,t,a),ir(e)}function ul(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,rc(e,a)}}function uo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?r=s=o:s=s.next=o,a=a.next}while(a!==null);s===null?r=s=t:s=s.next=t}else r=s=t;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var mo=!1;function dl(){if(mo){var e=vn;if(e!==null)throw e}}function ml(e,t,a,l){mo=!1;var r=e.updateQueue;fa=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var f=u,j=f.next;f.next=null,o===null?s=j:o.next=j,o=f;var A=e.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==o&&(u===null?A.firstBaseUpdate=j:u.next=j,A.lastBaseUpdate=f))}if(s!==null){var M=r.baseState;o=0,A=j=f=null,u=s;do{var E=u.lane&-536870913,C=E!==u.lane;if(C?(oe&E)===E:(l&E)===E){E!==0&&E===yn&&(mo=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var Y=e,K=u;E=t;var ve=a;switch(K.tag){case 1:if(Y=K.payload,typeof Y=="function"){M=Y.call(ve,M,E);break e}M=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=K.payload,E=typeof Y=="function"?Y.call(ve,M,E):Y,E==null)break e;M=O({},M,E);break e;case 2:fa=!0}}E=u.callback,E!==null&&(e.flags|=64,C&&(e.flags|=8192),C=r.callbacks,C===null?r.callbacks=[E]:C.push(E))}else C={lane:E,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?(j=A=C,f=M):A=A.next=C,o|=E;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;C=u,u=C.next,C.next=null,r.lastBaseUpdate=C,r.shared.pending=null}}while(!0);A===null&&(f=M),r.baseState=f,r.firstBaseUpdate=j,r.lastBaseUpdate=A,s===null&&(r.shared.lanes=0),Na|=o,e.lanes=o,e.memoizedState=M}}function fu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function hu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fu(a[e],t)}var jn=b(null),br=b(0);function xu(e,t){e=aa,_(br,e),_(jn,t),aa=e|t.baseLanes}function po(){_(br,aa),_(jn,jn.current)}function go(){aa=br.current,U(jn),U(br)}var mt=b(null),Et=null;function ba(e){var t=e.alternate;_(De,De.current&1),_(mt,e),Et===null&&(t===null||jn.current!==null||t.memoizedState!==null)&&(Et=e)}function fo(e){_(De,De.current),_(mt,e),Et===null&&(Et=e)}function bu(e){e.tag===22?(_(De,De.current),_(mt,e),Et===null&&(Et=e)):ya()}function ya(){_(De,De.current),_(mt,mt.current)}function pt(e){U(mt),Et===e&&(Et=null),U(De)}var De=b(0);function yr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Si(a)||Ni(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,te=null,be=null,Ue=null,vr=!1,En=!1,Ka=!1,Sr=0,pl=0,wn=null,Yg=0;function Re(){throw Error(c(321))}function ho(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function xo(e,t,a,l,r,s){return Qt=s,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?td:Oo,Ka=!1,s=a(l,r),Ka=!1,En&&(s=vu(t,a,l,r)),yu(e),s}function yu(e){L.H=hl;var t=be!==null&&be.next!==null;if(Qt=0,Ue=be=te=null,vr=!1,pl=0,wn=null,t)throw Error(c(300));e===null||ke||(e=e.dependencies,e!==null&&dr(e)&&(ke=!0))}function vu(e,t,a,l){te=e;var r=0;do{if(En&&(wn=null),pl=0,En=!1,25<=r)throw Error(c(301));if(r+=1,Ue=be=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}L.H=ad,s=t(a,l)}while(En);return s}function Jg(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?gl(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(te.flags|=1024),t}function bo(){var e=Sr!==0;return Sr=0,e}function yo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function vo(e){if(vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vr=!1}Qt=0,Ue=be=te=null,En=!1,pl=Sr=0,wn=null}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?te.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Oe(){if(be===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ue===null?te.memoizedState:Ue.next;if(t!==null)Ue=t,be=e;else{if(e===null)throw te.alternate===null?Error(c(467)):Error(c(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?te.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var t=pl;return pl+=1,wn===null&&(wn=[]),e=uu(wn,e,t),t=te,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?td:Oo),e}function jr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===k)return Je(e)}throw Error(c(438,String(e)))}function So(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Nr(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=rt;return t.index++,a}function Xt(e,t){return typeof t=="function"?t(e):t}function Er(e){var t=Oe();return No(t,be,e)}function No(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var r=e.baseQueue,s=l.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}t.baseQueue=r=s,l.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var u=o=null,f=null,j=t,A=!1;do{var M=j.lane&-536870913;if(M!==j.lane?(oe&M)===M:(Qt&M)===M){var E=j.revertLane;if(E===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),M===yn&&(A=!0);else if((Qt&E)===E){j=j.next,E===yn&&(A=!0);continue}else M={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},f===null?(u=f=M,o=s):f=f.next=M,te.lanes|=E,Na|=E;M=j.action,Ka&&a(s,M),s=j.hasEagerState?j.eagerState:a(s,M)}else E={lane:M,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},f===null?(u=f=E,o=s):f=f.next=E,te.lanes|=M,Na|=M;j=j.next}while(j!==null&&j!==t);if(f===null?o=s:f.next=u,!ut(s,e.memoizedState)&&(ke=!0,A&&(a=vn,a!==null)))throw a;e.memoizedState=s,e.baseState=o,e.baseQueue=f,l.lastRenderedState=s}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function jo(e){var t=Oe(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,s=t.memoizedState;if(r!==null){a.pending=null;var o=r=r.next;do s=e(s,o.action),o=o.next;while(o!==r);ut(s,t.memoizedState)||(ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function Su(e,t,a){var l=te,r=Oe(),s=ce;if(s){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!ut((be||r).memoizedState,a);if(o&&(r.memoizedState=a,ke=!0),r=r.queue,Co(Eu.bind(null,l,r,e),[e]),r.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Cn(9,{destroy:void 0},ju.bind(null,l,r,a,t),null),Ne===null)throw Error(c(349));s||(Qt&127)!==0||Nu(l,t,a)}return a}function Nu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=Nr(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ju(e,t,a,l){t.value=a,t.getSnapshot=l,wu(t)&&Cu(e)}function Eu(e,t,a){return a(function(){wu(t)&&Cu(e)})}function wu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function Cu(e){var t=qa(e,2);t!==null&&lt(t,e,2)}function Eo(e){var t=Xe();if(typeof e=="function"){var a=e;if(e=a(),Ka){ia(!0);try{a()}finally{ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Tu(e,t,a,l){return e.baseState=a,No(e,be,typeof l=="function"?l:Xt)}function Pg(e,t,a,l,r){if(Tr(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};L.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,Ru(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Ru(e,t){var a=t.action,l=t.payload,r=e.state;if(t.isTransition){var s=L.T,o={};L.T=o;try{var u=a(r,l),f=L.S;f!==null&&f(o,u),Au(e,t,u)}catch(j){wo(e,t,j)}finally{s!==null&&o.types!==null&&(s.types=o.types),L.T=s}}else try{s=a(r,l),Au(e,t,s)}catch(j){wo(e,t,j)}}function Au(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Lu(e,t,l)},function(l){return wo(e,t,l)}):Lu(e,t,a)}function Lu(e,t,a){t.status="fulfilled",t.value=a,Du(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ru(e,a)))}function wo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Du(t),t=t.next;while(t!==l)}e.action=null}function Du(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ou(e,t){return t}function Mu(e,t){if(ce){var a=Ne.formState;if(a!==null){e:{var l=te;if(ce){if(je){t:{for(var r=je,s=jt;r.nodeType!==8;){if(!s){r=null;break t}if(r=wt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){je=wt(r.nextSibling),l=r.data==="F!";break e}}pa(l)}l=!1}l&&(t=a[0])}}return a=Xe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ou,lastRenderedState:t},a.queue=l,a=Zu.bind(null,te,l),l.dispatch=a,l=Eo(!1),s=Do.bind(null,te,!1,l.queue),l=Xe(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,a=Pg.bind(null,te,r,s,a),r.dispatch=a,l.memoizedState=e,[t,a,!1]}function Uu(e){var t=Oe();return ku(t,be,e)}function ku(e,t,a){if(t=No(e,t,Ou)[0],e=Er(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=gl(t)}catch(o){throw o===Sn?gr:o}else l=t;t=Oe();var r=t.queue,s=r.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Cn(9,{destroy:void 0},Fg.bind(null,r,a),null)),[l,s,e]}function Fg(e,t){e.action=t}function Bu(e){var t=Oe(),a=be;if(a!==null)return ku(t,a,e);Oe(),t=t.memoizedState,a=Oe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cn(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=Nr(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Hu(){return Oe().memoizedState}function wr(e,t,a,l){var r=Xe();te.flags|=e,r.memoizedState=Cn(1|t,{destroy:void 0},a,l===void 0?null:l)}function Cr(e,t,a,l){var r=Oe();l=l===void 0?null:l;var s=r.memoizedState.inst;be!==null&&l!==null&&ho(l,be.memoizedState.deps)?r.memoizedState=Cn(t,s,a,l):(te.flags|=e,r.memoizedState=Cn(1|t,s,a,l))}function _u(e,t){wr(8390656,8,e,t)}function Co(e,t){Cr(2048,8,e,t)}function Vg(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=Nr(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function zu(e){var t=Oe().memoizedState;return Vg({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Iu(e,t){return Cr(4,2,e,t)}function qu(e,t){return Cr(4,4,e,t)}function Gu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,a){a=a!=null?a.concat([e]):null,Cr(4,4,Gu.bind(null,t,e),a)}function To(){}function Ju(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ho(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Pu(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ho(t,l[1]))return l[0];if(l=e(),Ka){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[l,t],l}function Ro(e,t,a){return a===void 0||(Qt&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fd(),te.lanes|=e,Na|=e,a)}function Fu(e,t,a,l){return ut(a,t)?a:jn.current!==null?(e=Ro(e,a,l),ut(e,t)||(ke=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(oe&261930)===0?(ke=!0,e.memoizedState=a):(e=Fd(),te.lanes|=e,Na|=e,t)}function Vu(e,t,a,l,r){var s=B.p;B.p=s!==0&&8>s?s:8;var o=L.T,u={};L.T=u,Do(e,!1,t,a);try{var f=r(),j=L.S;if(j!==null&&j(u,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var A=Gg(f,l);fl(e,t,A,ht(e))}else fl(e,t,l,ht(e))}catch(M){fl(e,t,{then:function(){},status:"rejected",reason:M},ht())}finally{B.p=s,o!==null&&u.types!==null&&(o.types=u.types),L.T=o}}function Qg(){}function Ao(e,t,a,l){if(e.tag!==5)throw Error(c(476));var r=Qu(e).queue;Vu(e,r,t,W,a===null?Qg:function(){return Xu(e),a(l)})}function Qu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xu(e){var t=Qu(e);t.next===null&&(t=e.alternate.memoizedState),fl(e,t.next.queue,{},ht())}function Lo(){return Je(Ol)}function Ku(){return Oe().memoizedState}function Wu(){return Oe().memoizedState}function Xg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=ha(a);var l=xa(t,e,a);l!==null&&(lt(l,t,a),ul(l,t,a)),t={cache:lo()},e.payload=t;return}t=t.return}}function Kg(e,t,a){var l=ht();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tr(e)?$u(t,a):(a=Vs(e,t,a,l),a!==null&&(lt(a,e,l),ed(a,t,l)))}function Zu(e,t,a){var l=ht();fl(e,t,a,l)}function fl(e,t,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tr(e))$u(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,u=s(o,a);if(r.hasEagerState=!0,r.eagerState=u,ut(u,o))return or(e,t,r,0),Ne===null&&sr(),!1}catch{}finally{}if(a=Vs(e,t,r,l),a!==null)return lt(a,e,l),ed(a,t,l),!0}return!1}function Do(e,t,a,l){if(l={lane:2,revertLane:ci(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Tr(e)){if(t)throw Error(c(479))}else t=Vs(e,a,l,2),t!==null&&lt(t,e,2)}function Tr(e){var t=e.alternate;return e===te||t!==null&&t===te}function $u(e,t){En=vr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ed(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,rc(e,a)}}var hl={readContext:Je,use:jr,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};hl.useEffectEvent=Re;var td={readContext:Je,use:jr,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:_u,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wr(4194308,4,Gu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wr(4194308,4,e,t)},useInsertionEffect:function(e,t){wr(4,2,e,t)},useMemo:function(e,t){var a=Xe();t=t===void 0?null:t;var l=e();if(Ka){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Xe();if(a!==void 0){var r=a(t);if(Ka){ia(!0);try{a(t)}finally{ia(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Kg.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:function(e){e=Eo(e);var t=e.queue,a=Zu.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:To,useDeferredValue:function(e,t){var a=Xe();return Ro(a,e,t)},useTransition:function(){var e=Eo(!1);return e=Vu.bind(null,te,e.queue,!0,!1),Xe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,r=Xe();if(ce){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ne===null)throw Error(c(349));(oe&127)!==0||Nu(l,t,a)}r.memoizedState=a;var s={value:a,getSnapshot:t};return r.queue=s,_u(Eu.bind(null,l,s,e),[e]),l.flags|=2048,Cn(9,{destroy:void 0},ju.bind(null,l,s,a,t),null),a},useId:function(){var e=Xe(),t=Ne.identifierPrefix;if(ce){var a=Ut,l=Mt;a=(l&~(1<<32-ct(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Sr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Yg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lo,useFormState:Mu,useActionState:Mu,useOptimistic:function(e){var t=Xe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Do.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:So,useCacheRefresh:function(){return Xe().memoizedState=Xg.bind(null,te)},useEffectEvent:function(e){var t=Xe(),a={impl:e};return t.memoizedState=a,function(){if((me&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Oo={readContext:Je,use:jr,useCallback:Ju,useContext:Je,useEffect:Co,useImperativeHandle:Yu,useInsertionEffect:Iu,useLayoutEffect:qu,useMemo:Pu,useReducer:Er,useRef:Hu,useState:function(){return Er(Xt)},useDebugValue:To,useDeferredValue:function(e,t){var a=Oe();return Fu(a,be.memoizedState,e,t)},useTransition:function(){var e=Er(Xt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Su,useId:Ku,useHostTransitionStatus:Lo,useFormState:Uu,useActionState:Uu,useOptimistic:function(e,t){var a=Oe();return Tu(a,be,e,t)},useMemoCache:So,useCacheRefresh:Wu};Oo.useEffectEvent=zu;var ad={readContext:Je,use:jr,useCallback:Ju,useContext:Je,useEffect:Co,useImperativeHandle:Yu,useInsertionEffect:Iu,useLayoutEffect:qu,useMemo:Pu,useReducer:jo,useRef:Hu,useState:function(){return jo(Xt)},useDebugValue:To,useDeferredValue:function(e,t){var a=Oe();return be===null?Ro(a,e,t):Fu(a,be.memoizedState,e,t)},useTransition:function(){var e=jo(Xt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Su,useId:Ku,useHostTransitionStatus:Lo,useFormState:Bu,useActionState:Bu,useOptimistic:function(e,t){var a=Oe();return be!==null?Tu(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:So,useCacheRefresh:Wu};ad.useEffectEvent=zu;function Mo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:O({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ht(),r=ha(l);r.payload=t,a!=null&&(r.callback=a),t=xa(e,r,l),t!==null&&(lt(t,e,l),ul(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ht(),r=ha(l);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=xa(e,r,l),t!==null&&(lt(t,e,l),ul(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),l=ha(a);l.tag=2,t!=null&&(l.callback=t),t=xa(e,l,a),t!==null&&(lt(t,e,a),ul(t,e,a))}};function nd(e,t,a,l,r,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,o):t.prototype&&t.prototype.isPureReactComponent?!al(a,l)||!al(r,s):!0}function ld(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=O({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function rd(e){rr(e)}function sd(e){console.error(e)}function od(e){rr(e)}function Rr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function id(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ko(e,t,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Rr(e,t)},a}function cd(e){return e=ha(e),e.tag=3,e}function ud(e,t,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var s=l.value;e.payload=function(){return r(s)},e.callback=function(){id(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){id(t,a,l),typeof r!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Wg(e,t,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&bn(t,a,r,!0),a=mt.current,a!==null){switch(a.tag){case 31:case 13:return Et===null?Ir():a.alternate===null&&Ae===0&&(Ae=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===fr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),si(e,l,r)),!1;case 22:return a.flags|=65536,l===fr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),si(e,l,r)),!1}throw Error(c(435,a.tag))}return si(e,l,r),Ir(),!1}if(ce)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==$s&&(e=Error(c(422),{cause:l}),rl(vt(e,a)))):(l!==$s&&(t=Error(c(423),{cause:l}),rl(vt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=vt(l,a),r=ko(e.stateNode,l,r),uo(e,r),Ae!==4&&(Ae=2)),!1;var s=Error(c(520),{cause:l});if(s=vt(s,a),El===null?El=[s]:El.push(s),Ae!==4&&(Ae=2),t===null)return!0;l=vt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=ko(a.stateNode,l,e),uo(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ja===null||!ja.has(s))))return a.flags|=65536,r&=-r,a.lanes|=r,r=cd(r),ud(r,e,a,l),uo(a,r),!1}a=a.return}while(a!==null);return!1}var Bo=Error(c(461)),ke=!1;function Pe(e,t,a,l){t.child=e===null?gu(t,null,a,l):Xa(t,e.child,a,l)}function dd(e,t,a,l,r){a=a.render;var s=t.ref;if("ref"in l){var o={};for(var u in l)u!=="ref"&&(o[u]=l[u])}else o=l;return Pa(t),l=xo(e,t,a,o,s,r),u=bo(),e!==null&&!ke?(yo(e,t,r),Kt(e,t,r)):(ce&&u&&Ws(t),t.flags|=1,Pe(e,t,l,r),t.child)}function md(e,t,a,l,r){if(e===null){var s=a.type;return typeof s=="function"&&!Qs(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,pd(e,t,s,l,r)):(e=cr(a.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Jo(e,r)){var o=s.memoizedProps;if(a=a.compare,a=a!==null?a:al,a(o,l)&&e.ref===t.ref)return Kt(e,t,r)}return t.flags|=1,e=Jt(s,l),e.ref=t.ref,e.return=t,t.child=e}function pd(e,t,a,l,r){if(e!==null){var s=e.memoizedProps;if(al(s,l)&&e.ref===t.ref)if(ke=!1,t.pendingProps=l=s,Jo(e,r))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,Kt(e,t,r)}return Ho(e,t,a,l,r)}function gd(e,t,a,l){var r=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~s}else l=0,t.child=null;return fd(e,t,s,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pr(t,s!==null?s.cachePool:null),s!==null?xu(t,s):po(),bu(t);else return l=t.lanes=536870912,fd(e,t,s!==null?s.baseLanes|a:a,a,l)}else s!==null?(pr(t,s.cachePool),xu(t,s),ya(),t.memoizedState=null):(e!==null&&pr(t,null),po(),ya());return Pe(e,t,r,a),t.child}function xl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fd(e,t,a,l,r){var s=so();return s=s===null?null:{parent:Me._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&pr(t,null),po(),bu(t),e!==null&&bn(e,t,l,!0),t.childLanes=r,null}function Ar(e,t){return t=Dr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hd(e,t,a){return Xa(t,e.child,null,a),e=Ar(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function Zg(e,t,a){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=Ar(t,l),t.lanes=536870912,xl(null,e);if(fo(t),(e=je)?(e=Rm(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Mt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=$c(e),a.return=t,t.child=a,Ye=t,je=null)):e=null,e===null)throw pa(t);return t.lanes=536870912,null}return Ar(t,l)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(fo(t),r)if(t.flags&256)t.flags&=-257,t=hd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(ke||bn(e,t,a,!1),r=(a&e.childLanes)!==0,ke||r){if(l=Ne,l!==null&&(o=sc(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,qa(e,o),lt(l,e,o),Bo;Ir(),t=hd(e,t,a)}else e=s.treeContext,je=wt(o.nextSibling),Ye=t,ce=!0,ma=null,jt=!1,e!==null&&au(t,e),t=Ar(t,l),t.flags|=4096;return t}return e=Jt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ho(e,t,a,l,r){return Pa(t),a=xo(e,t,a,l,void 0,r),l=bo(),e!==null&&!ke?(yo(e,t,r),Kt(e,t,r)):(ce&&l&&Ws(t),t.flags|=1,Pe(e,t,a,r),t.child)}function xd(e,t,a,l,r,s){return Pa(t),t.updateQueue=null,a=vu(t,l,a,r),yu(e),l=bo(),e!==null&&!ke?(yo(e,t,s),Kt(e,t,s)):(ce&&l&&Ws(t),t.flags|=1,Pe(e,t,a,s),t.child)}function bd(e,t,a,l,r){if(Pa(t),t.stateNode===null){var s=gn,o=a.contextType;typeof o=="object"&&o!==null&&(s=Je(o)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Uo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},io(t),o=a.contextType,s.context=typeof o=="object"&&o!==null?Je(o):gn,s.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Mo(t,a,o,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&Uo.enqueueReplaceState(s,s.state,null),ml(t,l,s,r),dl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var u=t.memoizedProps,f=Wa(a,u);s.props=f;var j=s.context,A=a.contextType;o=gn,typeof A=="object"&&A!==null&&(o=Je(A));var M=a.getDerivedStateFromProps;A=typeof M=="function"||typeof s.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,A||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u||j!==o)&&ld(t,s,l,o),fa=!1;var E=t.memoizedState;s.state=E,ml(t,l,s,r),dl(),j=t.memoizedState,u||E!==j||fa?(typeof M=="function"&&(Mo(t,a,M,l),j=t.memoizedState),(f=fa||nd(t,a,f,l,E,j,o))?(A||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),s.props=l,s.state=j,s.context=o,l=f):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,co(e,t),o=t.memoizedProps,A=Wa(a,o),s.props=A,M=t.pendingProps,E=s.context,j=a.contextType,f=gn,typeof j=="object"&&j!==null&&(f=Je(j)),u=a.getDerivedStateFromProps,(j=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==M||E!==f)&&ld(t,s,l,f),fa=!1,E=t.memoizedState,s.state=E,ml(t,l,s,r),dl();var C=t.memoizedState;o!==M||E!==C||fa||e!==null&&e.dependencies!==null&&dr(e.dependencies)?(typeof u=="function"&&(Mo(t,a,u,l),C=t.memoizedState),(A=fa||nd(t,a,A,l,E,C,f)||e!==null&&e.dependencies!==null&&dr(e.dependencies))?(j||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,C,f),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,C,f)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=C),s.props=l,s.state=C,s.context=f,l=A):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,Lr(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=Xa(t,e.child,null,r),t.child=Xa(t,null,a,r)):Pe(e,t,a,r),t.memoizedState=s.state,e=t.child):e=Kt(e,t,r),e}function yd(e,t,a,l){return Ya(),t.flags|=256,Pe(e,t,a,l),t.child}var _o={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zo(e){return{baseLanes:e,cachePool:iu()}}function Io(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ft),e}function vd(e,t,a){var l=t.pendingProps,r=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),o&&(r=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(r?ba(t):ya(),(e=je)?(e=Rm(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Mt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=$c(e),a.return=t,t.child=a,Ye=t,je=null)):e=null,e===null)throw pa(t);return Ni(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,r?(ya(),r=t.mode,u=Dr({mode:"hidden",children:u},r),l=Ga(l,r,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=zo(a),l.childLanes=Io(e,o,a),t.memoizedState=_o,xl(null,l)):(ba(t),qo(t,u))}var f=e.memoizedState;if(f!==null&&(u=f.dehydrated,u!==null)){if(s)t.flags&256?(ba(t),t.flags&=-257,t=Go(e,t,a)):t.memoizedState!==null?(ya(),t.child=e.child,t.flags|=128,t=null):(ya(),u=l.fallback,r=t.mode,l=Dr({mode:"visible",children:l.children},r),u=Ga(u,r,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Xa(t,e.child,null,a),l=t.child,l.memoizedState=zo(a),l.childLanes=Io(e,o,a),t.memoizedState=_o,t=xl(null,l));else if(ba(t),Ni(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var j=o.dgst;o=j,l=Error(c(419)),l.stack="",l.digest=o,rl({value:l,source:null,stack:null}),t=Go(e,t,a)}else if(ke||bn(e,t,a,!1),o=(a&e.childLanes)!==0,ke||o){if(o=Ne,o!==null&&(l=sc(o,a),l!==0&&l!==f.retryLane))throw f.retryLane=l,qa(e,l),lt(o,e,l),Bo;Si(u)||Ir(),t=Go(e,t,a)}else Si(u)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,je=wt(u.nextSibling),Ye=t,ce=!0,ma=null,jt=!1,e!==null&&au(t,e),t=qo(t,l.children),t.flags|=4096);return t}return r?(ya(),u=l.fallback,r=t.mode,f=e.child,j=f.sibling,l=Jt(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,j!==null?u=Jt(j,u):(u=Ga(u,r,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,xl(null,l),l=t.child,u=e.child.memoizedState,u===null?u=zo(a):(r=u.cachePool,r!==null?(f=Me._currentValue,r=r.parent!==f?{parent:f,pool:f}:r):r=iu(),u={baseLanes:u.baseLanes|a,cachePool:r}),l.memoizedState=u,l.childLanes=Io(e,o,a),t.memoizedState=_o,xl(e.child,l)):(ba(t),a=e.child,e=a.sibling,a=Jt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function qo(e,t){return t=Dr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dr(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Go(e,t,a){return Xa(t,e.child,null,a),e=qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ao(e.return,t,a)}function Yo(e,t,a,l,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=r,o.treeForkCount=s)}function Nd(e,t,a){var l=t.pendingProps,r=l.revealOrder,s=l.tail;l=l.children;var o=De.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,_(De,o),Pe(e,t,l,a),l=ce?ll:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,a,t);else if(e.tag===19)Sd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&yr(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Yo(t,!1,r,a,s,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&yr(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Yo(t,!0,a,null,s,l);break;case"together":Yo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Kt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(bn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Jt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Jt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Jo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&dr(e)))}function $g(e,t,a){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),ga(t,Me,e.memoizedState.cache),Ya();break;case 27:case 5:Yn(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vd(e,t,a):(ba(t),e=Kt(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var r=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(bn(e,t,a,!1),l=(a&t.childLanes)!==0),r){if(l)return Nd(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_(De,De.current),l)break;return null;case 22:return t.lanes=0,gd(e,t,a,t.pendingProps);case 24:ga(t,Me,e.memoizedState.cache)}return Kt(e,t,a)}function jd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Jo(e,a)&&(t.flags&128)===0)return ke=!1,$g(e,t,a);ke=(e.flags&131072)!==0}else ke=!1,ce&&(t.flags&1048576)!==0&&tu(t,ll,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")Qs(e)?(l=Wa(e,l),t.tag=1,t=bd(null,t,e,l,a)):(t.tag=0,t=Ho(null,t,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===X){t.tag=11,t=dd(null,t,e,l,a);break e}else if(r===ae){t.tag=14,t=md(null,t,e,l,a);break e}}throw t=It(e)||e,Error(c(306,t,""))}}return t;case 0:return Ho(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,r=Wa(l,t.pendingProps),bd(e,t,l,r,a);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var s=t.memoizedState;r=s.element,co(e,t),ml(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ga(t,Me,l),l!==s.cache&&no(t,[Me],a,!0),dl(),l=o.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=yd(e,t,l,a);break e}else if(l!==r){r=vt(Error(c(424)),t),rl(r),t=yd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=wt(e.firstChild),Ye=t,ce=!0,ma=null,jt=!0,a=gu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ya(),l===r){t=Kt(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return Lr(e,t),e===null?(a=Um(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,l=Vr(le.current).createElement(a),l[Ge]=t,l[Ze]=e,Fe(l,a,e),Ie(l),t.stateNode=l):t.memoizedState=Um(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yn(t),e===null&&ce&&(l=t.stateNode=Dm(t.type,t.pendingProps,le.current),Ye=t,jt=!0,r=je,Ta(t.type)?(ji=r,je=wt(l.firstChild)):je=r),Pe(e,t,t.pendingProps.children,a),Lr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((r=l=je)&&(l=Lf(l,t.type,t.pendingProps,jt),l!==null?(t.stateNode=l,Ye=t,je=wt(l.firstChild),jt=!1,r=!0):r=!1),r||pa(t)),Yn(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,bi(r,s)?l=null:o!==null&&bi(r,o)&&(t.flags|=32),t.memoizedState!==null&&(r=xo(e,t,Jg,null,null,a),Ol._currentValue=r),Lr(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&ce&&((e=a=je)&&(a=Df(a,t.pendingProps,jt),a!==null?(t.stateNode=a,Ye=t,je=null,e=!0):e=!1),e||pa(t)),null;case 13:return vd(e,t,a);case 4:return Qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Xa(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return dd(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ga(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,Pa(t),r=Je(r),l=l(r),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return md(e,t,t.type,t.pendingProps,a);case 15:return pd(e,t,t.type,t.pendingProps,a);case 19:return Nd(e,t,a);case 31:return Zg(e,t,a);case 22:return gd(e,t,a,t.pendingProps);case 24:return Pa(t),l=Je(Me),e===null?(r=so(),r===null&&(r=Ne,s=lo(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=a),r=s),t.memoizedState={parent:l,cache:r},io(t),ga(t,Me,r)):((e.lanes&a)!==0&&(co(e,t),ml(t,null,null,a),dl()),r=e.memoizedState,s=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ga(t,Me,l)):(l=s.cache,ga(t,Me,l),l!==r.cache&&no(t,[Me],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Wt(e){e.flags|=4}function Po(e,t,a,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Kd())e.flags|=8192;else throw Qa=fr,oo}else e.flags&=-16777217}function Ed(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zm(t))if(Kd())e.flags|=8192;else throw Qa=fr,oo}function Or(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?nc():536870912,e.lanes|=t,Ln|=t)}function bl(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ef(e,t,a){var l=t.pendingProps;switch(Zs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Vt(Me),Le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xn(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,eo())),Ee(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Wt(t),s!==null?(Ee(t),Ed(t,s)):(Ee(t),Po(t,r,null,l,a))):s?s!==e.memoizedState?(Wt(t),Ee(t),Ed(t,s)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),Ee(t),Po(t,r,e,l,a)),null;case 27:if(Yl(t),a=le.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ee(t),null}e=P.current,xn(t)?nu(t):(e=Dm(r,l,a),t.stateNode=e,Wt(t))}return Ee(t),null;case 5:if(Yl(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ee(t),null}if(s=P.current,xn(t))nu(t);else{var o=Vr(le.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?o.createElement(r,{is:l.is}):o.createElement(r)}}s[Ge]=t,s[Ze]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=s;e:switch(Fe(s,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return Ee(t),Po(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,xn(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,r=Ye,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||vm(e.nodeValue,a)),e||pa(t,!0)}else e=Vr(e).createTextNode(l),e[Ge]=t,t.stateNode=e}return Ee(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=xn(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ge]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else a=eo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ee(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=xn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[Ge]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),r=!1}else r=eo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==r&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Or(t,t.updateQueue),Ee(t),null);case 4:return Le(),e===null&&pi(t.stateNode.containerInfo),Ee(t),null;case 10:return Vt(t.type),Ee(t),null;case 19:if(U(De),l=t.memoizedState,l===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)bl(l,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=yr(e),s!==null){for(t.flags|=128,bl(l,!1),e=s.updateQueue,t.updateQueue=e,Or(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Zc(a,e),a=a.sibling;return _(De,De.current&1|2),ce&&Pt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ot()>Hr&&(t.flags|=128,r=!0,bl(l,!1),t.lanes=4194304)}else{if(!r)if(e=yr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Or(t,e),bl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!ce)return Ee(t),null}else 2*ot()-l.renderingStartTime>Hr&&a!==536870912&&(t.flags|=128,r=!0,bl(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ot(),e.sibling=null,a=De.current,_(De,r?a&1|2:a&1),ce&&Pt(t,l.treeForkCount),e):(Ee(t),null);case 22:case 23:return pt(t),go(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&Or(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&U(Fa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Me),Ee(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function tf(e,t){switch(Zs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Me),Le(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Yl(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(De),null;case 4:return Le(),null;case 10:return Vt(t.type),null;case 22:case 23:return pt(t),go(),e!==null&&U(Fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Me),null;case 25:return null;default:return null}}function wd(e,t){switch(Zs(t),t.tag){case 3:Vt(Me),Le();break;case 26:case 27:case 5:Yl(t);break;case 4:Le();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:U(De);break;case 10:Vt(t.type);break;case 22:case 23:pt(t),go(),e!==null&&U(Fa);break;case 24:Vt(Me)}}function yl(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var s=a.create,o=a.inst;l=s(),o.destroy=l}a=a.next}while(a!==r)}}catch(u){he(t,t.return,u)}}function va(e,t,a){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var s=r.next;l=s;do{if((l.tag&e)===e){var o=l.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,r=t;var f=a,j=u;try{j()}catch(A){he(r,f,A)}}}l=l.next}while(l!==s)}}catch(A){he(t,t.return,A)}}function Cd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{hu(t,a)}catch(l){he(e,e.return,l)}}}function Td(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function vl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){he(e,t,r)}}function kt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){he(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){he(e,t,r)}else a.current=null}function Rd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){he(e,e.return,r)}}function Fo(e,t,a){try{var l=e.stateNode;Ef(l,e.type,a,t),l[Ze]=t}catch(r){he(e,e.return,r)}}function Ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Qo(e,t,a),e=e.sibling;e!==null;)Qo(e,t,a),e=e.sibling}function Mr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Mr(e,t,a),e=e.sibling;e!==null;)Mr(e,t,a),e=e.sibling}function Ld(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Fe(t,l,a),t[Ge]=e,t[Ze]=a}catch(s){he(e,e.return,s)}}var Zt=!1,Be=!1,Xo=!1,Dd=typeof WeakSet=="function"?WeakSet:Set,qe=null;function af(e,t){if(e=e.containerInfo,hi=es,e=Yc(e),qs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var o=0,u=-1,f=-1,j=0,A=0,M=e,E=null;t:for(;;){for(var C;M!==a||r!==0&&M.nodeType!==3||(u=o+r),M!==s||l!==0&&M.nodeType!==3||(f=o+l),M.nodeType===3&&(o+=M.nodeValue.length),(C=M.firstChild)!==null;)E=M,M=C;for(;;){if(M===e)break t;if(E===a&&++j===r&&(u=o),E===s&&++A===l&&(f=o),(C=M.nextSibling)!==null)break;M=E,E=M.parentNode}M=C}a=u===-1||f===-1?null:{start:u,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(xi={focusedElem:e,selectionRange:a},es=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,r=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var Y=Wa(a.type,r);e=l.getSnapshotBeforeUpdate(Y,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){he(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)vi(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vi(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Od(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),l&4&&yl(5,a);break;case 1:if(ea(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){he(a,a.return,o)}else{var r=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){he(a,a.return,o)}}l&64&&Cd(a),l&512&&vl(a,a.return);break;case 3:if(ea(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hu(e,t)}catch(o){he(a,a.return,o)}}break;case 27:t===null&&l&4&&Ld(a);case 26:case 5:ea(e,a),t===null&&l&4&&Rd(a),l&512&&vl(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),l&4&&kd(e,a);break;case 13:ea(e,a),l&4&&Bd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mf.bind(null,a),Of(e,a))));break;case 22:if(l=a.memoizedState!==null||Zt,!l){t=t!==null&&t.memoizedState!==null||Be,r=Zt;var s=Be;Zt=l,(Be=t)&&!s?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),Zt=r,Be=s}break;case 30:break;default:ea(e,a)}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Es(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,et=!1;function $t(e,t,a){for(a=a.child;a!==null;)Ud(e,t,a),a=a.sibling}function Ud(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Jn,a)}catch{}switch(a.tag){case 26:Be||kt(a,t),$t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||kt(a,t);var l=we,r=et;Ta(a.type)&&(we=a.stateNode,et=!1),$t(e,t,a),Al(a.stateNode),we=l,et=r;break;case 5:Be||kt(a,t);case 6:if(l=we,r=et,we=null,$t(e,t,a),we=l,et=r,we!==null)if(et)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(a.stateNode)}catch(s){he(a,t,s)}else try{we.removeChild(a.stateNode)}catch(s){he(a,t,s)}break;case 18:we!==null&&(et?(e=we,Cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_n(e)):Cm(we,a.stateNode));break;case 4:l=we,r=et,we=a.stateNode.containerInfo,et=!0,$t(e,t,a),we=l,et=r;break;case 0:case 11:case 14:case 15:va(2,a,t),Be||va(4,a,t),$t(e,t,a);break;case 1:Be||(kt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Td(a,t,l)),$t(e,t,a);break;case 21:$t(e,t,a);break;case 22:Be=(l=Be)||a.memoizedState!==null,$t(e,t,a),Be=l;break;default:$t(e,t,a)}}function kd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_n(e)}catch(a){he(t,t.return,a)}}}function Bd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_n(e)}catch(a){he(t,t.return,a)}}function nf(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dd),t;default:throw Error(c(435,e.tag))}}function Ur(e,t){var a=nf(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var r=pf.bind(null,e,l);l.then(r,r)}})}function tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],s=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(Ta(u.type)){we=u.stateNode,et=!1;break e}break;case 5:we=u.stateNode,et=!1;break e;case 3:case 4:we=u.stateNode.containerInfo,et=!0;break e}u=u.return}if(we===null)throw Error(c(160));Ud(s,o,r),we=null,et=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Hd(t,e),t=t.sibling}var At=null;function Hd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),at(e),l&4&&(va(3,e,e.return),yl(3,e),va(5,e,e.return));break;case 1:tt(t,e),at(e),l&512&&(Be||a===null||kt(a,a.return)),l&64&&Zt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=At;if(tt(t,e),at(e),l&512&&(Be||a===null||kt(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Vn]||s[Ge]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(l),r.head.insertBefore(s,r.querySelector("head > title"))),Fe(s,l,a),s[Ge]=e,Ie(s),l=s;break e;case"link":var o=Hm("link","href",r).get(l+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(s=o[u],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}s=r.createElement(l),Fe(s,l,a),r.head.appendChild(s);break;case"meta":if(o=Hm("meta","content",r).get(l+(a.content||""))){for(u=0;u<o.length;u++)if(s=o[u],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}s=r.createElement(l),Fe(s,l,a),r.head.appendChild(s);break;default:throw Error(c(468,l))}s[Ge]=e,Ie(s),l=s}e.stateNode=l}else _m(r,e.type,e.stateNode);else e.stateNode=Bm(r,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?_m(r,e.type,e.stateNode):Bm(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Fo(e,e.memoizedProps,a.memoizedProps)}break;case 27:tt(t,e),at(e),l&512&&(Be||a===null||kt(a,a.return)),a!==null&&l&4&&Fo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tt(t,e),at(e),l&512&&(Be||a===null||kt(a,a.return)),e.flags&32){r=e.stateNode;try{sn(r,"")}catch(Y){he(e,e.return,Y)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Fo(e,r,a!==null?a.memoizedProps:r)),l&1024&&(Xo=!0);break;case 6:if(tt(t,e),at(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Y){he(e,e.return,Y)}}break;case 3:if(Kr=null,r=At,At=Qr(t.containerInfo),tt(t,e),At=r,at(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(Y){he(e,e.return,Y)}Xo&&(Xo=!1,_d(e));break;case 4:l=At,At=Qr(e.stateNode.containerInfo),tt(t,e),at(e),At=l;break;case 12:tt(t,e),at(e);break;case 31:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 13:tt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Br=ot()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 22:r=e.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,j=Zt,A=Be;if(Zt=j||r,Be=A||f,tt(t,e),Be=A,Zt=j,at(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||f||Zt||Be||Za(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(s=f.stateNode,r)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=f.stateNode;var M=f.memoizedProps.style,E=M!=null&&M.hasOwnProperty("display")?M.display:null;u.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(Y){he(f,f.return,Y)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=r?"":f.memoizedProps}catch(Y){he(f,f.return,Y)}}}else if(t.tag===18){if(a===null){f=t;try{var C=f.stateNode;r?Tm(C,!0):Tm(f.stateNode,!1)}catch(Y){he(f,f.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ur(e,a))));break;case 19:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 30:break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ad(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var r=a.stateNode,s=Vo(e);Mr(e,s,r);break;case 5:var o=a.stateNode;a.flags&32&&(sn(o,""),a.flags&=-33);var u=Vo(e);Mr(e,u,o);break;case 3:case 4:var f=a.stateNode.containerInfo,j=Vo(e);Qo(e,j,f);break;default:throw Error(c(161))}}catch(A){he(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _d(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_d(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Od(e,t.alternate,t),t=t.sibling}function Za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),Za(t);break;case 1:kt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Td(t,t.return,a),Za(t);break;case 27:Al(t.stateNode);case 26:case 5:kt(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}e=e.sibling}}function ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:ta(r,s,a),yl(4,s);break;case 1:if(ta(r,s,a),l=s,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(j){he(l,l.return,j)}if(l=s,r=l.updateQueue,r!==null){var u=l.stateNode;try{var f=r.shared.hiddenCallbacks;if(f!==null)for(r.shared.hiddenCallbacks=null,r=0;r<f.length;r++)fu(f[r],u)}catch(j){he(l,l.return,j)}}a&&o&64&&Cd(s),vl(s,s.return);break;case 27:Ld(s);case 26:case 5:ta(r,s,a),a&&l===null&&o&4&&Rd(s),vl(s,s.return);break;case 12:ta(r,s,a);break;case 31:ta(r,s,a),a&&o&4&&kd(r,s);break;case 13:ta(r,s,a),a&&o&4&&Bd(r,s);break;case 22:s.memoizedState===null&&ta(r,s,a),vl(s,s.return);break;case 30:break;default:ta(r,s,a)}t=t.sibling}}function Ko(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sl(a))}function Wo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e))}function Lt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zd(e,t,a,l),t=t.sibling}function zd(e,t,a,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,l),r&2048&&yl(9,t);break;case 1:Lt(e,t,a,l);break;case 3:Lt(e,t,a,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e)));break;case 12:if(r&2048){Lt(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,u=s.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){he(t,t.return,f)}}else Lt(e,t,a,l);break;case 31:Lt(e,t,a,l);break;case 13:Lt(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?Lt(e,t,a,l):Sl(e,t):s._visibility&2?Lt(e,t,a,l):(s._visibility|=2,Tn(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Ko(o,t);break;case 24:Lt(e,t,a,l),r&2048&&Wo(t.alternate,t);break;default:Lt(e,t,a,l)}}function Tn(e,t,a,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,o=t,u=a,f=l,j=o.flags;switch(o.tag){case 0:case 11:case 15:Tn(s,o,u,f,r),yl(8,o);break;case 23:break;case 22:var A=o.stateNode;o.memoizedState!==null?A._visibility&2?Tn(s,o,u,f,r):Sl(s,o):(A._visibility|=2,Tn(s,o,u,f,r)),r&&j&2048&&Ko(o.alternate,o);break;case 24:Tn(s,o,u,f,r),r&&j&2048&&Wo(o.alternate,o);break;default:Tn(s,o,u,f,r)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,r=l.flags;switch(l.tag){case 22:Sl(a,l),r&2048&&Ko(l.alternate,l);break;case 24:Sl(a,l),r&2048&&Wo(l.alternate,l);break;default:Sl(a,l)}t=t.sibling}}var Nl=8192;function Rn(e,t,a){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)Id(e,t,a),e=e.sibling}function Id(e,t,a){switch(e.tag){case 26:Rn(e,t,a),e.flags&Nl&&e.memoizedState!==null&&Jf(a,At,e.memoizedState,e.memoizedProps);break;case 5:Rn(e,t,a);break;case 3:case 4:var l=At;At=Qr(e.stateNode.containerInfo),Rn(e,t,a),At=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Nl,Nl=16777216,Rn(e,t,a),Nl=l):Rn(e,t,a));break;default:Rn(e,t,a)}}function qd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Yd(l,e)}qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gd(e),e=e.sibling}function Gd(e){switch(e.tag){case 0:case 11:case 15:jl(e),e.flags&2048&&va(9,e,e.return);break;case 3:jl(e);break;case 12:jl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,kr(e)):jl(e);break;default:jl(e)}}function kr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Yd(l,e)}qd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),kr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,kr(t));break;default:kr(t)}e=e.sibling}}function Yd(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var r=l.sibling,s=l.return;if(Md(l),l===a){qe=null;break e}if(r!==null){r.return=s,qe=r;break e}qe=s}}}var lf={getCacheForType:function(e){var t=Je(Me),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Je(Me).controller.signal}},rf=typeof WeakMap=="function"?WeakMap:Map,me=0,Ne=null,re=null,oe=0,fe=0,gt=null,Sa=!1,An=!1,Zo=!1,aa=0,Ae=0,Na=0,$a=0,$o=0,ft=0,Ln=0,El=null,nt=null,ei=!1,Br=0,Jd=0,Hr=1/0,_r=null,ja=null,ze=0,Ea=null,Dn=null,na=0,ti=0,ai=null,Pd=null,wl=0,ni=null;function ht(){return(me&2)!==0&&oe!==0?oe&-oe:L.T!==null?ci():oc()}function Fd(){if(ft===0)if((oe&536870912)===0||ce){var e=Fl;Fl<<=1,(Fl&3932160)===0&&(Fl=262144),ft=e}else ft=536870912;return e=mt.current,e!==null&&(e.flags|=32),ft}function lt(e,t,a){(e===Ne&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(On(e,0),wa(e,oe,ft,!1)),Fn(e,a),((me&2)===0||e!==Ne)&&(e===Ne&&((me&2)===0&&($a|=a),Ae===4&&wa(e,oe,ft,!1)),Bt(e))}function Vd(e,t,a){if((me&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Pn(e,t),r=l?cf(e,t):ri(e,t,!0),s=l;do{if(r===0){An&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!sf(a)){r=ri(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;r=El;var f=u.current.memoizedState.isDehydrated;if(f&&(On(u,o).flags|=256),o=ri(u,o,!1),o!==2){if(Zo&&!f){u.errorRecoveryDisabledLanes|=s,$a|=s,r=4;break e}s=nt,nt=r,s!==null&&(nt===null?nt=s:nt.push.apply(nt,s))}r=o}if(s=!1,r!==2)continue}}if(r===1){On(e,0),wa(e,t,0,!0);break}e:{switch(l=e,s=r,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,ft,!Sa);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=Br+300-ot(),10<r)){if(wa(l,t,ft,!Sa),Ql(l,0,!0)!==0)break e;na=t,l.timeoutHandle=Em(Qd.bind(null,l,a,nt,_r,ei,t,ft,$a,Ln,Sa,s,"Throttled",-0,0),r);break e}Qd(l,a,nt,_r,ei,t,ft,$a,Ln,Sa,s,null,-0,0)}}break}while(!0);Bt(e)}function Qd(e,t,a,l,r,s,o,u,f,j,A,M,E,C){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Id(t,s,M);var Y=(s&62914560)===s?Br-ot():(s&4194048)===s?Jd-ot():0;if(Y=Pf(M,Y),Y!==null){na=s,e.cancelPendingCommit=Y(am.bind(null,e,t,s,a,l,r,o,u,f,A,M,null,E,C)),wa(e,s,o,!j);return}}am(e,t,s,a,l,r,o,u,f)}function sf(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],s=r.getSnapshot;r=r.value;try{if(!ut(s(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~$o,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var s=31-ct(r),o=1<<s;l[s]=-1,r&=~o}a!==0&&lc(e,a,t)}function zr(){return(me&6)===0?(Cl(0),!1):!0}function li(){if(re!==null){if(fe===0)var e=re.return;else e=re,Ft=Ja=null,vo(e),Nn=null,il=0,e=re;for(;e!==null;)wd(e.alternate,e),e=e.return;re=null}}function On(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Tf(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,li(),Ne=e,re=a=Jt(e.current,null),oe=t,fe=0,gt=null,Sa=!1,An=Pn(e,t),Zo=!1,Ln=ft=$o=$a=Na=Ae=0,nt=El=null,ei=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-ct(l),s=1<<r;t|=e[r],l&=~s}return aa=t,sr(),a}function Xd(e,t){te=null,L.H=hl,t===Sn||t===gr?(t=du(),fe=3):t===oo?(t=du(),fe=4):fe=t===Bo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,re===null&&(Ae=1,Rr(e,vt(t,e.current)))}function Kd(){var e=mt.current;return e===null?!0:(oe&4194048)===oe?Et===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Et:!1}function Wd(){var e=L.H;return L.H=hl,e===null?hl:e}function Zd(){var e=L.A;return L.A=lf,e}function Ir(){Ae=4,Sa||(oe&4194048)!==oe&&mt.current!==null||(An=!0),(Na&134217727)===0&&($a&134217727)===0||Ne===null||wa(Ne,oe,ft,!1)}function ri(e,t,a){var l=me;me|=2;var r=Wd(),s=Zd();(Ne!==e||oe!==t)&&(_r=null,On(e,t)),t=!1;var o=Ae;e:do try{if(fe!==0&&re!==null){var u=re,f=gt;switch(fe){case 8:li(),o=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var j=fe;if(fe=0,gt=null,Mn(e,u,f,j),a&&An){o=0;break e}break;default:j=fe,fe=0,gt=null,Mn(e,u,f,j)}}of(),o=Ae;break}catch(A){Xd(e,A)}while(!0);return t&&e.shellSuspendCounter++,Ft=Ja=null,me=l,L.H=r,L.A=s,re===null&&(Ne=null,oe=0,sr()),o}function of(){for(;re!==null;)$d(re)}function cf(e,t){var a=me;me|=2;var l=Wd(),r=Zd();Ne!==e||oe!==t?(_r=null,Hr=ot()+500,On(e,t)):An=Pn(e,t);e:do try{if(fe!==0&&re!==null){t=re;var s=gt;t:switch(fe){case 1:fe=0,gt=null,Mn(e,t,s,1);break;case 2:case 9:if(cu(s)){fe=0,gt=null,em(t);break}t=function(){fe!==2&&fe!==9||Ne!==e||(fe=7),Bt(e)},s.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:cu(s)?(fe=0,gt=null,em(t)):(fe=0,gt=null,Mn(e,t,s,7));break;case 5:var o=null;switch(re.tag){case 26:o=re.memoizedState;case 5:case 27:var u=re;if(o?zm(o):u.stateNode.complete){fe=0,gt=null;var f=u.sibling;if(f!==null)re=f;else{var j=u.return;j!==null?(re=j,qr(j)):re=null}break t}}fe=0,gt=null,Mn(e,t,s,5);break;case 6:fe=0,gt=null,Mn(e,t,s,6);break;case 8:li(),Ae=6;break e;default:throw Error(c(462))}}uf();break}catch(A){Xd(e,A)}while(!0);return Ft=Ja=null,L.H=l,L.A=r,me=a,re!==null?0:(Ne=null,oe=0,sr(),Ae)}function uf(){for(;re!==null&&!Op();)$d(re)}function $d(e){var t=jd(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?qr(e):re=t}function em(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=xd(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=xd(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:vo(t);default:wd(a,t),t=re=Zc(t,aa),t=jd(a,t,aa)}e.memoizedProps=e.pendingProps,t===null?qr(e):re=t}function Mn(e,t,a,l){Ft=Ja=null,vo(t),Nn=null,il=0;var r=t.return;try{if(Wg(e,r,t,a,oe)){Ae=1,Rr(e,vt(a,e.current)),re=null;return}}catch(s){if(r!==null)throw re=r,s;Ae=1,Rr(e,vt(a,e.current)),re=null;return}t.flags&32768?(ce||l===1?e=!0:An||(oe&536870912)!==0?e=!1:(Sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),tm(t,e)):qr(t)}function qr(e){var t=e;do{if((t.flags&32768)!==0){tm(t,Sa);return}e=t.return;var a=ef(t.alternate,t,aa);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ae===0&&(Ae=5)}function tm(e,t){do{var a=tf(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Ae=6,re=null}function am(e,t,a,l,r,s,o,u,f){e.cancelPendingCommit=null;do Gr();while(ze!==0);if((me&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Fs,Gp(e,a,s,o,u,f),e===Ne&&(re=Ne=null,oe=0),Dn=t,Ea=e,na=a,ti=s,ai=r,Pd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gf(Jl,function(){return om(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,r=B.p,B.p=2,o=me,me|=4;try{af(e,t,a)}finally{me=o,B.p=r,L.T=l}}ze=1,nm(),lm(),rm()}}function nm(){if(ze===1){ze=0;var e=Ea,t=Dn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var l=B.p;B.p=2;var r=me;me|=4;try{Hd(t,e);var s=xi,o=Yc(e.containerInfo),u=s.focusedElem,f=s.selectionRange;if(o!==u&&u&&u.ownerDocument&&Gc(u.ownerDocument.documentElement,u)){if(f!==null&&qs(u)){var j=f.start,A=f.end;if(A===void 0&&(A=j),"selectionStart"in u)u.selectionStart=j,u.selectionEnd=Math.min(A,u.value.length);else{var M=u.ownerDocument||document,E=M&&M.defaultView||window;if(E.getSelection){var C=E.getSelection(),Y=u.textContent.length,K=Math.min(f.start,Y),ve=f.end===void 0?K:Math.min(f.end,Y);!C.extend&&K>ve&&(o=ve,ve=K,K=o);var y=qc(u,K),x=qc(u,ve);if(y&&x&&(C.rangeCount!==1||C.anchorNode!==y.node||C.anchorOffset!==y.offset||C.focusNode!==x.node||C.focusOffset!==x.offset)){var N=M.createRange();N.setStart(y.node,y.offset),C.removeAllRanges(),K>ve?(C.addRange(N),C.extend(x.node,x.offset)):(N.setEnd(x.node,x.offset),C.addRange(N))}}}}for(M=[],C=u;C=C.parentNode;)C.nodeType===1&&M.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<M.length;u++){var D=M[u];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}es=!!hi,xi=hi=null}finally{me=r,B.p=l,L.T=a}}e.current=t,ze=2}}function lm(){if(ze===2){ze=0;var e=Ea,t=Dn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var l=B.p;B.p=2;var r=me;me|=4;try{Od(e,t.alternate,t)}finally{me=r,B.p=l,L.T=a}}ze=3}}function rm(){if(ze===4||ze===3){ze=0,Mp();var e=Ea,t=Dn,a=na,l=Pd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ze=5:(ze=0,Dn=Ea=null,sm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ja=null),Ns(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Jn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=L.T,r=B.p,B.p=2,L.T=null;try{for(var s=e.onRecoverableError,o=0;o<l.length;o++){var u=l[o];s(u.value,{componentStack:u.stack})}}finally{L.T=t,B.p=r}}(na&3)!==0&&Gr(),Bt(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===ni?wl++:(wl=0,ni=e):wl=0,Cl(0)}}function sm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sl(t)))}function Gr(){return nm(),lm(),rm(),om()}function om(){if(ze!==5)return!1;var e=Ea,t=ti;ti=0;var a=Ns(na),l=L.T,r=B.p;try{B.p=32>a?32:a,L.T=null,a=ai,ai=null;var s=Ea,o=na;if(ze=0,Dn=Ea=null,na=0,(me&6)!==0)throw Error(c(331));var u=me;if(me|=4,Gd(s.current),zd(s,s.current,o,a),me=u,Cl(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Jn,s)}catch{}return!0}finally{B.p=r,L.T=l,sm(e,t)}}function im(e,t,a){t=vt(a,t),t=ko(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(Fn(e,2),Bt(e))}function he(e,t,a){if(e.tag===3)im(e,e,a);else for(;t!==null;){if(t.tag===3){im(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){e=vt(a,e),a=cd(2),l=xa(t,a,2),l!==null&&(ud(a,l,t,e),Fn(l,2),Bt(l));break}}t=t.return}}function si(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new rf;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(a)||(Zo=!0,r.add(a),e=df.bind(null,e,t,a),t.then(e,e))}function df(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ne===e&&(oe&a)===a&&(Ae===4||Ae===3&&(oe&62914560)===oe&&300>ot()-Br?(me&2)===0&&On(e,0):$o|=a,Ln===oe&&(Ln=0)),Bt(e)}function cm(e,t){t===0&&(t=nc()),e=qa(e,t),e!==null&&(Fn(e,t),Bt(e))}function mf(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),cm(e,a)}function pf(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),cm(e,a)}function gf(e,t){return bs(e,t)}var Yr=null,Un=null,oi=!1,Jr=!1,ii=!1,Ca=0;function Bt(e){e!==Un&&e.next===null&&(Un===null?Yr=Un=e:Un=Un.next=e),Jr=!0,oi||(oi=!0,hf())}function Cl(e,t){if(!ii&&Jr){ii=!0;do for(var a=!1,l=Yr;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var s=0;else{var o=l.suspendedLanes,u=l.pingedLanes;s=(1<<31-ct(42|e)+1)-1,s&=r&~(o&~u),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,pm(l,s))}else s=oe,s=Ql(l,l===Ne?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Pn(l,s)||(a=!0,pm(l,s));l=l.next}while(a);ii=!1}}function ff(){um()}function um(){Jr=oi=!1;var e=0;Ca!==0&&Cf()&&(e=Ca);for(var t=ot(),a=null,l=Yr;l!==null;){var r=l.next,s=dm(l,t);s===0?(l.next=null,a===null?Yr=r:a.next=r,r===null&&(Un=a)):(a=l,(e!==0||(s&3)!==0)&&(Jr=!0)),l=r}ze!==0&&ze!==5||Cl(e),Ca!==0&&(Ca=0)}function dm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-ct(s),u=1<<o,f=r[o];f===-1?((u&a)===0||(u&l)!==0)&&(r[o]=qp(u,t)):f<=t&&(e.expiredLanes|=u),s&=~u}if(t=Ne,a=oe,a=Ql(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ys(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ys(l),Ns(a)){case 2:case 8:a=tc;break;case 32:a=Jl;break;case 268435456:a=ac;break;default:a=Jl}return l=mm.bind(null,e),a=bs(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ys(l),e.callbackPriority=2,e.callbackNode=null,2}function mm(e,t){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gr()&&e.callbackNode!==a)return null;var l=oe;return l=Ql(e,e===Ne?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vd(e,l,t),dm(e,ot()),e.callbackNode!=null&&e.callbackNode===a?mm.bind(null,e):null)}function pm(e,t){if(Gr())return null;Vd(e,t,!0)}function hf(){Rf(function(){(me&6)!==0?bs(ec,ff):um()})}function ci(){if(Ca===0){var e=yn;e===0&&(e=Pl,Pl<<=1,(Pl&261888)===0&&(Pl=256)),Ca=e}return Ca}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zl(""+e)}function fm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xf(e,t,a,l,r){if(t==="submit"&&a&&a.stateNode===r){var s=gm((r[Ze]||null).action),o=l.submitter;o&&(t=(t=o[Ze]||null)?gm(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var u=new ar("action","action",null,l,r);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var f=o?fm(r,o):new FormData(r);Ao(a,{pending:!0,data:f,method:r.method,action:s},null,f)}}else typeof s=="function"&&(u.preventDefault(),f=o?fm(r,o):new FormData(r),Ao(a,{pending:!0,data:f,method:r.method,action:s},s,f))},currentTarget:r}]})}}for(var ui=0;ui<Ps.length;ui++){var di=Ps[ui],bf=di.toLowerCase(),yf=di[0].toUpperCase()+di.slice(1);Rt(bf,"on"+yf)}Rt(Fc,"onAnimationEnd"),Rt(Vc,"onAnimationIteration"),Rt(Qc,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Ug,"onTransitionRun"),Rt(kg,"onTransitionStart"),Rt(Bg,"onTransitionCancel"),Rt(Xc,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function hm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var o=l.length-1;0<=o;o--){var u=l[o],f=u.instance,j=u.currentTarget;if(u=u.listener,f!==s&&r.isPropagationStopped())break e;s=u,r.currentTarget=j;try{s(r)}catch(A){rr(A)}r.currentTarget=null,s=f}else for(o=0;o<l.length;o++){if(u=l[o],f=u.instance,j=u.currentTarget,u=u.listener,f!==s&&r.isPropagationStopped())break e;s=u,r.currentTarget=j;try{s(r)}catch(A){rr(A)}r.currentTarget=null,s=f}}}}function se(e,t){var a=t[js];a===void 0&&(a=t[js]=new Set);var l=e+"__bubble";a.has(l)||(xm(t,e,2,!1),a.add(l))}function mi(e,t,a){var l=0;t&&(l|=4),xm(a,e,l,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[Pr]){e[Pr]=!0,uc.forEach(function(a){a!=="selectionchange"&&(vf.has(a)||mi(a,!1,e),mi(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,mi("selectionchange",!1,t))}}function xm(e,t,a,l){switch(Fm(t)){case 2:var r=Qf;break;case 8:r=Xf;break;default:r=Ri}a=r.bind(null,t,a,e),r=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function gi(e,t,a,l,r){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var u=l.stateNode.containerInfo;if(u===r)break;if(o===4)for(o=l.return;o!==null;){var f=o.tag;if((f===3||f===4)&&o.stateNode.containerInfo===r)return;o=o.return}for(;u!==null;){if(o=tn(u),o===null)return;if(f=o.tag,f===5||f===6||f===26||f===27){l=s=o;continue e}u=u.parentNode}}l=l.return}Nc(function(){var j=s,A=Ls(a),M=[];e:{var E=Kc.get(e);if(E!==void 0){var C=ar,Y=e;switch(e){case"keypress":if(er(a)===0)break e;case"keydown":case"keyup":C=mg;break;case"focusin":Y="focus",C=Bs;break;case"focusout":Y="blur",C=Bs;break;case"beforeblur":case"afterblur":C=Bs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=fg;break;case Fc:case Vc:case Qc:C=ng;break;case Xc:C=xg;break;case"scroll":case"scrollend":C=Zp;break;case"wheel":C=yg;break;case"copy":case"cut":case"paste":C=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Tc;break;case"toggle":case"beforetoggle":C=Sg}var K=(t&4)!==0,ve=!K&&(e==="scroll"||e==="scrollend"),y=K?E!==null?E+"Capture":null:E;K=[];for(var x=j,N;x!==null;){var D=x;if(N=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||N===null||y===null||(D=Xn(x,y),D!=null&&K.push(Rl(x,D,N))),ve)break;x=x.return}0<K.length&&(E=new C(E,Y,null,a,A),M.push({event:E,listeners:K}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",E&&a!==As&&(Y=a.relatedTarget||a.fromElement)&&(tn(Y)||Y[en]))break e;if((C||E)&&(E=A.window===A?A:(E=A.ownerDocument)?E.defaultView||E.parentWindow:window,C?(Y=a.relatedTarget||a.toElement,C=j,Y=Y?tn(Y):null,Y!==null&&(ve=g(Y),K=Y.tag,Y!==ve||K!==5&&K!==27&&K!==6)&&(Y=null)):(C=null,Y=j),C!==Y)){if(K=wc,D="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(K=Tc,D="onPointerLeave",y="onPointerEnter",x="pointer"),ve=C==null?E:Qn(C),N=Y==null?E:Qn(Y),E=new K(D,x+"leave",C,a,A),E.target=ve,E.relatedTarget=N,D=null,tn(A)===j&&(K=new K(y,x+"enter",Y,a,A),K.target=N,K.relatedTarget=ve,D=K),ve=D,C&&Y)t:{for(K=Sf,y=C,x=Y,N=0,D=y;D;D=K(D))N++;D=0;for(var Q=x;Q;Q=K(Q))D++;for(;0<N-D;)y=K(y),N--;for(;0<D-N;)x=K(x),D--;for(;N--;){if(y===x||x!==null&&y===x.alternate){K=y;break t}y=K(y),x=K(x)}K=null}else K=null;C!==null&&bm(M,E,C,K,!1),Y!==null&&ve!==null&&bm(M,ve,Y,K,!0)}}e:{if(E=j?Qn(j):window,C=E.nodeName&&E.nodeName.toLowerCase(),C==="select"||C==="input"&&E.type==="file")var ue=kc;else if(Mc(E))if(Bc)ue=Dg;else{ue=Ag;var V=Rg}else C=E.nodeName,!C||C.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?j&&Rs(j.elementType)&&(ue=kc):ue=Lg;if(ue&&(ue=ue(e,j))){Uc(M,ue,a,A);break e}V&&V(e,E,j),e==="focusout"&&j&&E.type==="number"&&j.memoizedProps.value!=null&&Ts(E,"number",E.value)}switch(V=j?Qn(j):window,e){case"focusin":(Mc(V)||V.contentEditable==="true")&&(dn=V,Gs=j,nl=null);break;case"focusout":nl=Gs=dn=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,Jc(M,a,A);break;case"selectionchange":if(Mg)break;case"keydown":case"keyup":Jc(M,a,A)}var ne;if(_s)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else un?Dc(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(Rc&&a.locale!=="ko"&&(un||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&un&&(ne=jc()):(ua=A,Ms="value"in ua?ua.value:ua.textContent,un=!0)),V=Fr(j,ie),0<V.length&&(ie=new Cc(ie,e,null,a,A),M.push({event:ie,listeners:V}),ne?ie.data=ne:(ne=Oc(a),ne!==null&&(ie.data=ne)))),(ne=jg?Eg(e,a):wg(e,a))&&(ie=Fr(j,"onBeforeInput"),0<ie.length&&(V=new Cc("onBeforeInput","beforeinput",null,a,A),M.push({event:V,listeners:ie}),V.data=ne)),xf(M,e,j,a,A)}hm(M,t)})}function Rl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Fr(e,t){for(var a=t+"Capture",l=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Xn(e,a),r!=null&&l.unshift(Rl(e,r,s)),r=Xn(e,t),r!=null&&l.push(Rl(e,r,s))),e.tag===3)return l;e=e.return}return[]}function Sf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bm(e,t,a,l,r){for(var s=t._reactName,o=[];a!==null&&a!==l;){var u=a,f=u.alternate,j=u.stateNode;if(u=u.tag,f!==null&&f===l)break;u!==5&&u!==26&&u!==27||j===null||(f=j,r?(j=Xn(a,s),j!=null&&o.unshift(Rl(a,j,f))):r||(j=Xn(a,s),j!=null&&o.push(Rl(a,j,f)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Nf=/\r\n?/g,jf=/\u0000|\uFFFD/g;function ym(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(jf,"")}function vm(e,t){return t=ym(t),ym(e)===t}function ye(e,t,a,l,r,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||sn(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&sn(e,""+l);break;case"className":Kl(e,"class",l);break;case"tabIndex":Kl(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(e,a,l);break;case"style":vc(e,l,s);break;case"data":if(t!=="object"){Kl(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",r.name,r,null),ye(e,t,"formEncType",r.formEncType,r,null),ye(e,t,"formMethod",r.formMethod,r,null),ye(e,t,"formTarget",r.formTarget,r,null)):(ye(e,t,"encType",r.encType,r,null),ye(e,t,"method",r.method,r,null),ye(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),Xl(e,"popover",l);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xl(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kp.get(a)||a,Xl(e,a,l))}}function fi(e,t,a,l,r,s){switch(a){case"style":vc(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?sn(e,l):(typeof l=="number"||typeof l=="bigint")&&sn(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),s=e[Ze]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xl(e,a,l)}}}function Fe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,r=!1,s;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];if(o!=null)switch(s){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,s,o,a,null)}}r&&ye(e,t,"srcSet",a.srcSet,a,null),l&&ye(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var u=s=o=r=null,f=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var A=a[l];if(A!=null)switch(l){case"name":r=A;break;case"type":o=A;break;case"checked":f=A;break;case"defaultChecked":j=A;break;case"value":s=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:ye(e,t,l,A,a,null)}}hc(e,s,u,f,j,o,r,!1);return;case"select":se("invalid",e),l=o=s=null;for(r in a)if(a.hasOwnProperty(r)&&(u=a[r],u!=null))switch(r){case"value":s=u;break;case"defaultValue":o=u;break;case"multiple":l=u;default:ye(e,t,r,u,a,null)}t=s,a=o,e.multiple=!!l,t!=null?rn(e,!!l,t,!1):a!=null&&rn(e,!!l,a,!0);return;case"textarea":se("invalid",e),s=r=l=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":l=u;break;case"defaultValue":r=u;break;case"children":s=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:ye(e,t,o,u,a,null)}bc(e,l,r,s);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(l=a[f],l!=null))switch(f){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ye(e,t,f,l,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<Tl.length;l++)se(Tl[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,j,l,a,null)}return;default:if(Rs(t)){for(A in a)a.hasOwnProperty(A)&&(l=a[A],l!==void 0&&fi(e,t,A,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&ye(e,t,u,l,a,null))}function Ef(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,o=null,u=null,f=null,j=null,A=null;for(C in a){var M=a[C];if(a.hasOwnProperty(C)&&M!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":f=M;default:l.hasOwnProperty(C)||ye(e,t,C,null,l,M)}}for(var E in l){var C=l[E];if(M=a[E],l.hasOwnProperty(E)&&(C!=null||M!=null))switch(E){case"type":s=C;break;case"name":r=C;break;case"checked":j=C;break;case"defaultChecked":A=C;break;case"value":o=C;break;case"defaultValue":u=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:C!==M&&ye(e,t,E,C,l,M)}}Cs(e,o,u,f,j,A,s,r);return;case"select":C=o=u=E=null;for(s in a)if(f=a[s],a.hasOwnProperty(s)&&f!=null)switch(s){case"value":break;case"multiple":C=f;default:l.hasOwnProperty(s)||ye(e,t,s,null,l,f)}for(r in l)if(s=l[r],f=a[r],l.hasOwnProperty(r)&&(s!=null||f!=null))switch(r){case"value":E=s;break;case"defaultValue":u=s;break;case"multiple":o=s;default:s!==f&&ye(e,t,r,s,l,f)}t=u,a=o,l=C,E!=null?rn(e,!!a,E,!1):!!l!=!!a&&(t!=null?rn(e,!!a,t,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":C=E=null;for(u in a)if(r=a[u],a.hasOwnProperty(u)&&r!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ye(e,t,u,null,l,r)}for(o in l)if(r=l[o],s=a[o],l.hasOwnProperty(o)&&(r!=null||s!=null))switch(o){case"value":E=r;break;case"defaultValue":C=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==s&&ye(e,t,o,r,l,s)}xc(e,E,C);return;case"option":for(var Y in a)if(E=a[Y],a.hasOwnProperty(Y)&&E!=null&&!l.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:ye(e,t,Y,null,l,E)}for(f in l)if(E=l[f],C=a[f],l.hasOwnProperty(f)&&E!==C&&(E!=null||C!=null))switch(f){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:ye(e,t,f,E,l,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)E=a[K],a.hasOwnProperty(K)&&E!=null&&!l.hasOwnProperty(K)&&ye(e,t,K,null,l,E);for(j in l)if(E=l[j],C=a[j],l.hasOwnProperty(j)&&E!==C&&(E!=null||C!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,t));break;default:ye(e,t,j,E,l,C)}return;default:if(Rs(t)){for(var ve in a)E=a[ve],a.hasOwnProperty(ve)&&E!==void 0&&!l.hasOwnProperty(ve)&&fi(e,t,ve,void 0,l,E);for(A in l)E=l[A],C=a[A],!l.hasOwnProperty(A)||E===C||E===void 0&&C===void 0||fi(e,t,A,E,l,C);return}}for(var y in a)E=a[y],a.hasOwnProperty(y)&&E!=null&&!l.hasOwnProperty(y)&&ye(e,t,y,null,l,E);for(M in l)E=l[M],C=a[M],!l.hasOwnProperty(M)||E===C||E==null&&C==null||ye(e,t,M,E,l,C)}function Sm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wf(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],s=r.transferSize,o=r.initiatorType,u=r.duration;if(s&&u&&Sm(o)){for(o=0,u=r.responseEnd,l+=1;l<a.length;l++){var f=a[l],j=f.startTime;if(j>u)break;var A=f.transferSize,M=f.initiatorType;A&&Sm(M)&&(f=f.responseEnd,o+=A*(f<u?1:(u-j)/(f-j)))}if(--l,t+=8*(s+o)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hi=null,xi=null;function Vr(e){return e.nodeType===9?e:e.ownerDocument}function Nm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=null;function Cf(){var e=window.event;return e&&e.type==="popstate"?e===yi?!1:(yi=e,!0):(yi=null,!1)}var Em=typeof setTimeout=="function"?setTimeout:void 0,Tf=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,Rf=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(e){return wm.resolve(null).then(e).catch(Af)}:Em;function Af(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Cm(e,t){var a=t,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),_n(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Al(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Al(a);for(var s=a.firstChild;s;){var o=s.nextSibling,u=s.nodeName;s[Vn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=o}}else a==="body"&&Al(e.ownerDocument.body);a=r}while(a);_n(t)}function Tm(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function vi(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vi(a),Es(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Lf(e,t,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Vn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function Df(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function Rm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wt(e.nextSibling),e===null))return null;return e}function Si(e){return e.data==="$?"||e.data==="$~"}function Ni(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Of(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ji=null;function Am(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Lm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Dm(e,t,a){switch(t=Vr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Al(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Es(e)}var Ct=new Map,Om=new Set;function Qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=B.d;B.d={f:Mf,r:Uf,D:kf,C:Bf,L:Hf,m:_f,X:If,S:zf,M:qf};function Mf(){var e=la.f(),t=zr();return e||t}function Uf(e){var t=an(e);t!==null&&t.tag===5&&t.type==="form"?Xu(t):la.r(e)}var kn=typeof document>"u"?null:document;function Mm(e,t,a){var l=kn;if(l&&typeof t=="string"&&t){var r=bt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Om.has(r)||(Om.add(r),e={rel:e,crossOrigin:a,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),Fe(t,"link",e),Ie(t),l.head.appendChild(t)))}}function kf(e){la.D(e),Mm("dns-prefetch",e,null)}function Bf(e,t){la.C(e,t),Mm("preconnect",e,t)}function Hf(e,t,a){la.L(e,t,a);var l=kn;if(l&&e&&t){var r='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+bt(a.imageSizes)+'"]')):r+='[href="'+bt(e)+'"]';var s=r;switch(t){case"style":s=Bn(e);break;case"script":s=Hn(e)}Ct.has(s)||(e=O({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(s,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(Ll(s))||t==="script"&&l.querySelector(Dl(s))||(t=l.createElement("link"),Fe(t,"link",e),Ie(t),l.head.appendChild(t)))}}function _f(e,t){la.m(e,t);var a=kn;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',s=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Hn(e)}if(!Ct.has(s)&&(e=O({rel:"modulepreload",href:e},t),Ct.set(s,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dl(s)))return}l=a.createElement("link"),Fe(l,"link",e),Ie(l),a.head.appendChild(l)}}}function zf(e,t,a){la.S(e,t,a);var l=kn;if(l&&e){var r=nn(l).hoistableStyles,s=Bn(e);t=t||"default";var o=r.get(s);if(!o){var u={loading:0,preload:null};if(o=l.querySelector(Ll(s)))u.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(s))&&Ei(e,a);var f=o=l.createElement("link");Ie(f),Fe(f,"link",e),f._p=new Promise(function(j,A){f.onload=j,f.onerror=A}),f.addEventListener("load",function(){u.loading|=1}),f.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Xr(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:u},r.set(s,o)}}}function If(e,t){la.X(e,t);var a=kn;if(a&&e){var l=nn(a).hoistableScripts,r=Hn(e),s=l.get(r);s||(s=a.querySelector(Dl(r)),s||(e=O({src:e,async:!0},t),(t=Ct.get(r))&&wi(e,t),s=a.createElement("script"),Ie(s),Fe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(r,s))}}function qf(e,t){la.M(e,t);var a=kn;if(a&&e){var l=nn(a).hoistableScripts,r=Hn(e),s=l.get(r);s||(s=a.querySelector(Dl(r)),s||(e=O({src:e,async:!0,type:"module"},t),(t=Ct.get(r))&&wi(e,t),s=a.createElement("script"),Ie(s),Fe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(r,s))}}function Um(e,t,a,l){var r=(r=le.current)?Qr(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Bn(a.href),a=nn(r).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Bn(a.href);var s=nn(r).hoistableStyles,o=s.get(e);if(o||(r=r.ownerDocument||r,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=r.querySelector(Ll(e)))&&!s._p&&(o.instance=s,o.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),s||Gf(r,e,a,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hn(a),a=nn(r).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Bn(e){return'href="'+bt(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function km(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Gf(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Fe(t,"link",a),Ie(t),e.head.appendChild(t))}function Hn(e){return'[src="'+bt(e)+'"]'}function Dl(e){return"script[async]"+e}function Bm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,Ie(l),l;var r=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ie(l),Fe(l,"style",r),Xr(l,a.precedence,e),t.instance=l;case"stylesheet":r=Bn(a.href);var s=e.querySelector(Ll(r));if(s)return t.state.loading|=4,t.instance=s,Ie(s),s;l=km(a),(r=Ct.get(r))&&Ei(l,r),s=(e.ownerDocument||e).createElement("link"),Ie(s);var o=s;return o._p=new Promise(function(u,f){o.onload=u,o.onerror=f}),Fe(s,"link",l),t.state.loading|=4,Xr(s,a.precedence,e),t.instance=s;case"script":return s=Hn(a.src),(r=e.querySelector(Dl(s)))?(t.instance=r,Ie(r),r):(l=a,(r=Ct.get(s))&&(l=O({},a),wi(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ie(r),Fe(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Xr(l,a.precedence,e));return t.instance}function Xr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,s=r,o=0;o<l.length;o++){var u=l[o];if(u.dataset.precedence===t)s=u;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ei(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wi(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Kr=null;function Hm(e,t,a){if(Kr===null){var l=new Map,r=Kr=new Map;r.set(a,l)}else r=Kr,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var s=a[r];if(!(s[Vn]||s[Ge]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var u=l.get(o);u?u.push(s):l.set(o,[s])}}return l}function _m(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Yf(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jf(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=Bn(l.href),s=t.querySelector(Ll(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Ie(s);return}s=t.ownerDocument||t,l=km(l),(r=Ct.get(r))&&Ei(l,r),s=s.createElement("link"),Ie(s);var o=s;o._p=new Promise(function(u,f){o.onload=u,o.onerror=f}),Fe(s,"link",l),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ci=0;function Pf(e,t){return e.stylesheets&&e.count===0&&$r(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&$r(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ci===0&&(Ci=62500*wf());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$r(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ci?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function Wr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$r(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zr=null;function $r(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zr=new Map,t.forEach(Ff,e),Zr=null,Wr.call(e))}function Ff(e,t){if(!(t.state.loading&4)){var a=Zr.get(e);if(a)var l=a.get(null);else{a=new Map,Zr.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var o=r[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}r=t.instance,o=r.getAttribute("data-precedence"),s=a.get(o)||l,s===l&&a.set(null,r),a.set(o,r),this.count++,l=Wr.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ol={$$typeof:k,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Vf(e,t,a,l,r,s,o,u,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vs(0),this.hiddenUpdates=vs(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Im(e,t,a,l,r,s,o,u,f,j,A,M){return e=new Vf(e,t,a,o,f,j,A,M,u),t=1,s===!0&&(t|=24),s=dt(3,null,null,t),e.current=s,s.stateNode=e,t=lo(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},io(s),e}function qm(e){return e?(e=gn,e):gn}function Gm(e,t,a,l,r,s){r=qm(r),l.context===null?l.context=r:l.pendingContext=r,l=ha(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=xa(e,l,t),a!==null&&(lt(a,e,t),ul(a,e,t))}function Ym(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ti(e,t){Ym(e,t),(e=e.alternate)&&Ym(e,t)}function Jm(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&lt(t,e,67108864),Ti(e,67108864)}}function Pm(e){if(e.tag===13||e.tag===31){var t=ht();t=Ss(t);var a=qa(e,t);a!==null&&lt(a,e,t),Ti(e,t)}}var es=!0;function Qf(e,t,a,l){var r=L.T;L.T=null;var s=B.p;try{B.p=2,Ri(e,t,a,l)}finally{B.p=s,L.T=r}}function Xf(e,t,a,l){var r=L.T;L.T=null;var s=B.p;try{B.p=8,Ri(e,t,a,l)}finally{B.p=s,L.T=r}}function Ri(e,t,a,l){if(es){var r=Ai(l);if(r===null)gi(e,t,l,ts,a),Vm(e,l);else if(Wf(r,e,t,a,l))l.stopPropagation();else if(Vm(e,l),t&4&&-1<Kf.indexOf(e)){for(;r!==null;){var s=an(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=Ba(s.pendingLanes);if(o!==0){var u=s;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var f=1<<31-ct(o);u.entanglements[1]|=f,o&=~f}Bt(s),(me&6)===0&&(Hr=ot()+500,Cl(0))}}break;case 31:case 13:u=qa(s,2),u!==null&&lt(u,s,2),zr(),Ti(s,2)}if(s=Ai(l),s===null&&gi(e,t,l,ts,a),s===r)break;r=s}r!==null&&l.stopPropagation()}else gi(e,t,l,null,a)}}function Ai(e){return e=Ls(e),Li(e)}var ts=null;function Li(e){if(ts=null,e=tn(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=S(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ts=e,null}function Fm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Up()){case ec:return 2;case tc:return 8;case Jl:case kp:return 32;case ac:return 268435456;default:return 32}default:return 32}}var Di=!1,Ra=null,Aa=null,La=null,Ml=new Map,Ul=new Map,Da=[],Kf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vm(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(t.pointerId)}}function kl(e,t,a,l,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[r]},t!==null&&(t=an(t),t!==null&&Jm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Wf(e,t,a,l,r){switch(t){case"focusin":return Ra=kl(Ra,e,t,a,l,r),!0;case"dragenter":return Aa=kl(Aa,e,t,a,l,r),!0;case"mouseover":return La=kl(La,e,t,a,l,r),!0;case"pointerover":var s=r.pointerId;return Ml.set(s,kl(Ml.get(s)||null,e,t,a,l,r)),!0;case"gotpointercapture":return s=r.pointerId,Ul.set(s,kl(Ul.get(s)||null,e,t,a,l,r)),!0}return!1}function Qm(e){var t=tn(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=S(a),t!==null){e.blockedOn=t,ic(e.priority,function(){Pm(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,ic(e.priority,function(){Pm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ai(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);As=l,a.target.dispatchEvent(l),As=null}else return t=an(a),t!==null&&Jm(t),e.blockedOn=a,!1;t.shift()}return!0}function Xm(e,t,a){as(e)&&a.delete(t)}function Zf(){Di=!1,Ra!==null&&as(Ra)&&(Ra=null),Aa!==null&&as(Aa)&&(Aa=null),La!==null&&as(La)&&(La=null),Ml.forEach(Xm),Ul.forEach(Xm)}function ns(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Zf)))}var ls=null;function Km(e){ls!==e&&(ls=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ls===e&&(ls=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(Li(l||a)===null)continue;break}var s=an(a);s!==null&&(e.splice(t,3),t-=3,Ao(s,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function _n(e){function t(f){return ns(f,e)}Ra!==null&&ns(Ra,e),Aa!==null&&ns(Aa,e),La!==null&&ns(La,e),Ml.forEach(t),Ul.forEach(t);for(var a=0;a<Da.length;a++){var l=Da[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Qm(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],s=a[l+1],o=r[Ze]||null;if(typeof s=="function")o||Km(a);else if(o){var u=null;if(s&&s.hasAttribute("formAction")){if(r=s,o=s[Ze]||null)u=o.formAction;else if(Li(r)!==null)continue}else u=o.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Km(a)}}}function Wm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return r=o})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Oi(e){this._internalRoot=e}rs.prototype.render=Oi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=ht();Gm(a,l,e,t,null,null)},rs.prototype.unmount=Oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gm(e.current,2,null,e,null,null),zr(),t[en]=null}};function rs(e){this._internalRoot=e}rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=oc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Da.length&&t!==0&&t<Da[a].priority;a++);Da.splice(a,0,e),a===0&&Qm(e)}};var Zm=m.version;if(Zm!=="19.2.0")throw Error(c(527,Zm,"19.2.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var $f={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{Jn=ss.inject($f),it=ss}catch{}}return Hl.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,l="",r=rd,s=sd,o=od;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Im(e,1,!1,null,null,a,l,null,r,s,o,Wm),e[en]=t.current,pi(e),new Oi(t)},Hl.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var l=!1,r="",s=rd,o=sd,u=od,f=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=Im(e,1,!0,t,a??null,l,r,f,s,o,u,Wm),t.context=qm(null),a=t.current,l=ht(),l=Ss(l),r=ha(l),r.callback=null,xa(a,r,l),a=l,t.current.lanes=a,Fn(t,a),Bt(t),e[en]=t.current,pi(e),new rs(t)},Hl.version="19.2.0",Hl}var ip;function ch(){if(ip)return ki.exports;ip=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(m){console.error(m)}}return i(),ki.exports=ih(),ki.exports}var uh=ch();var cp="popstate";function dh(i={}){function m(c,d){let{pathname:g,search:S,hash:T}=c.location;return qi("",{pathname:g,search:S,hash:T},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function p(c,d){return typeof d=="string"?d:Il(d)}return ph(m,p,null,i)}function Ce(i,m){if(i===!1||i===null||typeof i>"u")throw new Error(m)}function Dt(i,m){if(!i){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function mh(){return Math.random().toString(36).substring(2,10)}function up(i,m){return{usr:i.state,key:i.key,idx:m}}function qi(i,m,p=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof m=="string"?In(m):m,state:p,key:m&&m.key||c||mh()}}function Il({pathname:i="/",search:m="",hash:p=""}){return m&&m!=="?"&&(i+=m.charAt(0)==="?"?m:"?"+m),p&&p!=="#"&&(i+=p.charAt(0)==="#"?p:"#"+p),i}function In(i){let m={};if(i){let p=i.indexOf("#");p>=0&&(m.hash=i.substring(p),i=i.substring(0,p));let c=i.indexOf("?");c>=0&&(m.search=i.substring(c),i=i.substring(0,c)),i&&(m.pathname=i)}return m}function ph(i,m,p,c={}){let{window:d=document.defaultView,v5Compat:g=!1}=c,S=d.history,T="POP",v=null,h=R();h==null&&(h=0,S.replaceState({...S.state,idx:h},""));function R(){return(S.state||{idx:null}).idx}function O(){T="POP";let z=R(),q=z==null?null:z-h;h=z,v&&v({action:T,location:I.location,delta:q})}function H(z,q){T="PUSH";let J=qi(I.location,z,q);h=R()+1;let k=up(J,h),X=I.createHref(J);try{S.pushState(k,"",X)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;d.location.assign(X)}g&&v&&v({action:T,location:I.location,delta:1})}function F(z,q){T="REPLACE";let J=qi(I.location,z,q);h=R();let k=up(J,h),X=I.createHref(J);S.replaceState(k,"",X),g&&v&&v({action:T,location:I.location,delta:0})}function G(z){return gh(z)}let I={get action(){return T},get location(){return i(d,S)},listen(z){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(cp,O),v=z,()=>{d.removeEventListener(cp,O),v=null}},createHref(z){return m(d,z)},createURL:G,encodeLocation(z){let q=G(z);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:H,replace:F,go(z){return S.go(z)}};return I}function gh(i,m=!1){let p="http://localhost";typeof window<"u"&&(p=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(p,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:Il(i);return c=c.replace(/ $/,"%20"),!m&&c.startsWith("//")&&(c=p+c),new URL(c,p)}function hp(i,m,p="/"){return fh(i,m,p,!1)}function fh(i,m,p,c){let d=typeof m=="string"?In(m):m,g=oa(d.pathname||"/",p);if(g==null)return null;let S=xp(i);hh(S);let T=null;for(let v=0;T==null&&v<S.length;++v){let h=Th(g);T=wh(S[v],h,c)}return T}function xp(i,m=[],p=[],c="",d=!1){let g=(S,T,v=d,h)=>{let R={relativePath:h===void 0?S.path||"":h,caseSensitive:S.caseSensitive===!0,childrenIndex:T,route:S};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(c)&&v)return;Ce(R.relativePath.startsWith(c),`Absolute route path "${R.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(c.length)}let O=sa([c,R.relativePath]),H=p.concat(R);S.children&&S.children.length>0&&(Ce(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${O}".`),xp(S.children,m,H,O,v)),!(S.path==null&&!S.index)&&m.push({path:O,score:jh(O,S.index),routesMeta:H})};return i.forEach((S,T)=>{if(S.path===""||!S.path?.includes("?"))g(S,T);else for(let v of bp(S.path))g(S,T,!0,v)}),m}function bp(i){let m=i.split("/");if(m.length===0)return[];let[p,...c]=m,d=p.endsWith("?"),g=p.replace(/\?$/,"");if(c.length===0)return d?[g,""]:[g];let S=bp(c.join("/")),T=[];return T.push(...S.map(v=>v===""?g:[g,v].join("/"))),d&&T.push(...S),T.map(v=>i.startsWith("/")&&v===""?"/":v)}function hh(i){i.sort((m,p)=>m.score!==p.score?p.score-m.score:Eh(m.routesMeta.map(c=>c.childrenIndex),p.routesMeta.map(c=>c.childrenIndex)))}var xh=/^:[\w-]+$/,bh=3,yh=2,vh=1,Sh=10,Nh=-2,dp=i=>i==="*";function jh(i,m){let p=i.split("/"),c=p.length;return p.some(dp)&&(c+=Nh),m&&(c+=yh),p.filter(d=>!dp(d)).reduce((d,g)=>d+(xh.test(g)?bh:g===""?vh:Sh),c)}function Eh(i,m){return i.length===m.length&&i.slice(0,-1).every((c,d)=>c===m[d])?i[i.length-1]-m[m.length-1]:0}function wh(i,m,p=!1){let{routesMeta:c}=i,d={},g="/",S=[];for(let T=0;T<c.length;++T){let v=c[T],h=T===c.length-1,R=g==="/"?m:m.slice(g.length)||"/",O=us({path:v.relativePath,caseSensitive:v.caseSensitive,end:h},R),H=v.route;if(!O&&h&&p&&!c[c.length-1].route.index&&(O=us({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},R)),!O)return null;Object.assign(d,O.params),S.push({params:d,pathname:sa([g,O.pathname]),pathnameBase:Dh(sa([g,O.pathnameBase])),route:H}),O.pathnameBase!=="/"&&(g=sa([g,O.pathnameBase]))}return S}function us(i,m){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[p,c]=Ch(i.path,i.caseSensitive,i.end),d=m.match(p);if(!d)return null;let g=d[0],S=g.replace(/(.)\/+$/,"$1"),T=d.slice(1);return{params:c.reduce((h,{paramName:R,isOptional:O},H)=>{if(R==="*"){let G=T[H]||"";S=g.slice(0,g.length-G.length).replace(/(.)\/+$/,"$1")}const F=T[H];return O&&!F?h[R]=void 0:h[R]=(F||"").replace(/%2F/g,"/"),h},{}),pathname:g,pathnameBase:S,pattern:i}}function Ch(i,m=!1,p=!0){Dt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,T,v)=>(c.push({paramName:T,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(c.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):p?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,m?void 0:"i"),c]}function Th(i){try{return i.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return Dt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),i}}function oa(i,m){if(m==="/")return i;if(!i.toLowerCase().startsWith(m.toLowerCase()))return null;let p=m.endsWith("/")?m.length-1:m.length,c=i.charAt(p);return c&&c!=="/"?null:i.slice(p)||"/"}function Rh(i,m="/"){let{pathname:p,search:c="",hash:d=""}=typeof i=="string"?In(i):i;return{pathname:p?p.startsWith("/")?p:Ah(p,m):m,search:Oh(c),hash:Mh(d)}}function Ah(i,m){let p=m.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?p.length>1&&p.pop():d!=="."&&p.push(d)}),p.length>1?p.join("/"):"/"}function zi(i,m,p,c){return`Cannot include a '${i}' character in a manually specified \`to.${m}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${p}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Lh(i){return i.filter((m,p)=>p===0||m.route.path&&m.route.path.length>0)}function Ji(i){let m=Lh(i);return m.map((p,c)=>c===m.length-1?p.pathname:p.pathnameBase)}function Pi(i,m,p,c=!1){let d;typeof i=="string"?d=In(i):(d={...i},Ce(!d.pathname||!d.pathname.includes("?"),zi("?","pathname","search",d)),Ce(!d.pathname||!d.pathname.includes("#"),zi("#","pathname","hash",d)),Ce(!d.search||!d.search.includes("#"),zi("#","search","hash",d)));let g=i===""||d.pathname==="",S=g?"/":d.pathname,T;if(S==null)T=p;else{let O=m.length-1;if(!c&&S.startsWith("..")){let H=S.split("/");for(;H[0]==="..";)H.shift(),O-=1;d.pathname=H.join("/")}T=O>=0?m[O]:"/"}let v=Rh(d,T),h=S&&S!=="/"&&S.endsWith("/"),R=(g||S===".")&&p.endsWith("/");return!v.pathname.endsWith("/")&&(h||R)&&(v.pathname+="/"),v}var sa=i=>i.join("/").replace(/\/\/+/g,"/"),Dh=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Oh=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Mh=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Uh(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yp=["POST","PUT","PATCH","DELETE"];new Set(yp);var kh=["GET",...yp];new Set(kh);var qn=w.createContext(null);qn.displayName="DataRouter";var ds=w.createContext(null);ds.displayName="DataRouterState";w.createContext(!1);var vp=w.createContext({isTransitioning:!1});vp.displayName="ViewTransition";var Bh=w.createContext(new Map);Bh.displayName="Fetchers";var Hh=w.createContext(null);Hh.displayName="Await";var Ot=w.createContext(null);Ot.displayName="Navigation";var ql=w.createContext(null);ql.displayName="Location";var _t=w.createContext({outlet:null,matches:[],isDataRoute:!1});_t.displayName="Route";var Fi=w.createContext(null);Fi.displayName="RouteError";function _h(i,{relative:m}={}){Ce(Gn(),"useHref() may be used only in the context of a <Router> component.");let{basename:p,navigator:c}=w.useContext(Ot),{hash:d,pathname:g,search:S}=Gl(i,{relative:m}),T=g;return p!=="/"&&(T=g==="/"?p:sa([p,g])),c.createHref({pathname:T,search:S,hash:d})}function Gn(){return w.useContext(ql)!=null}function zt(){return Ce(Gn(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(ql).location}var Sp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Np(i){w.useContext(Ot).static||w.useLayoutEffect(i)}function ms(){let{isDataRoute:i}=w.useContext(_t);return i?Wh():zh()}function zh(){Ce(Gn(),"useNavigate() may be used only in the context of a <Router> component.");let i=w.useContext(qn),{basename:m,navigator:p}=w.useContext(Ot),{matches:c}=w.useContext(_t),{pathname:d}=zt(),g=JSON.stringify(Ji(c)),S=w.useRef(!1);return Np(()=>{S.current=!0}),w.useCallback((v,h={})=>{if(Dt(S.current,Sp),!S.current)return;if(typeof v=="number"){p.go(v);return}let R=Pi(v,JSON.parse(g),d,h.relative==="path");i==null&&m!=="/"&&(R.pathname=R.pathname==="/"?m:sa([m,R.pathname])),(h.replace?p.replace:p.push)(R,h.state,h)},[m,p,g,d,i])}w.createContext(null);function Gl(i,{relative:m}={}){let{matches:p}=w.useContext(_t),{pathname:c}=zt(),d=JSON.stringify(Ji(p));return w.useMemo(()=>Pi(i,JSON.parse(d),c,m==="path"),[i,d,c,m])}function Ih(i,m){return jp(i,m)}function jp(i,m,p,c,d){Ce(Gn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g}=w.useContext(Ot),{matches:S}=w.useContext(_t),T=S[S.length-1],v=T?T.params:{},h=T?T.pathname:"/",R=T?T.pathnameBase:"/",O=T&&T.route;{let J=O&&O.path||"";Ep(h,!O||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let H=zt(),F;if(m){let J=typeof m=="string"?In(m):m;Ce(R==="/"||J.pathname?.startsWith(R),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${J.pathname}" was given in the \`location\` prop.`),F=J}else F=H;let G=F.pathname||"/",I=G;if(R!=="/"){let J=R.replace(/^\//,"").split("/");I="/"+G.replace(/^\//,"").split("/").slice(J.length).join("/")}let z=hp(i,{pathname:I});Dt(O||z!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Dt(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Ph(z&&z.map(J=>Object.assign({},J,{params:Object.assign({},v,J.params),pathname:sa([R,g.encodeLocation?g.encodeLocation(J.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?R:sa([R,g.encodeLocation?g.encodeLocation(J.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathnameBase])})),S,p,c,d);return m&&q?w.createElement(ql.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},q):q}function qh(){let i=Kh(),m=Uh(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),p=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},g={padding:"2px 4px",backgroundColor:c},S=null;return console.error("Error handled by React Router default ErrorBoundary:",i),S=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:g},"ErrorBoundary")," or"," ",w.createElement("code",{style:g},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},m),p?w.createElement("pre",{style:d},p):null,S)}var Gh=w.createElement(qh,null),Yh=class extends w.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,m){return m.location!==i.location||m.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:m.error,location:m.location,revalidation:i.revalidation||m.revalidation}}componentDidCatch(i,m){this.props.unstable_onError?this.props.unstable_onError(i,m):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?w.createElement(_t.Provider,{value:this.props.routeContext},w.createElement(Fi.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Jh({routeContext:i,match:m,children:p}){let c=w.useContext(qn);return c&&c.static&&c.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=m.route.id),w.createElement(_t.Provider,{value:i},p)}function Ph(i,m=[],p=null,c=null,d=null){if(i==null){if(!p)return null;if(p.errors)i=p.matches;else if(m.length===0&&!p.initialized&&p.matches.length>0)i=p.matches;else return null}let g=i,S=p?.errors;if(S!=null){let h=g.findIndex(R=>R.route.id&&S?.[R.route.id]!==void 0);Ce(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(S).join(",")}`),g=g.slice(0,Math.min(g.length,h+1))}let T=!1,v=-1;if(p)for(let h=0;h<g.length;h++){let R=g[h];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(v=h),R.route.id){let{loaderData:O,errors:H}=p,F=R.route.loader&&!O.hasOwnProperty(R.route.id)&&(!H||H[R.route.id]===void 0);if(R.route.lazy||F){T=!0,v>=0?g=g.slice(0,v+1):g=[g[0]];break}}}return g.reduceRight((h,R,O)=>{let H,F=!1,G=null,I=null;p&&(H=S&&R.route.id?S[R.route.id]:void 0,G=R.route.errorElement||Gh,T&&(v<0&&O===0?(Ep("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,I=null):v===O&&(F=!0,I=R.route.hydrateFallbackElement||null)));let z=m.concat(g.slice(0,O+1)),q=()=>{let J;return H?J=G:F?J=I:R.route.Component?J=w.createElement(R.route.Component,null):R.route.element?J=R.route.element:J=h,w.createElement(Jh,{match:R,routeContext:{outlet:h,matches:z,isDataRoute:p!=null},children:J})};return p&&(R.route.ErrorBoundary||R.route.errorElement||O===0)?w.createElement(Yh,{location:p.location,revalidation:p.revalidation,component:G,error:H,children:q(),routeContext:{outlet:null,matches:z,isDataRoute:!0},unstable_onError:c}):q()},null)}function Vi(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fh(i){let m=w.useContext(qn);return Ce(m,Vi(i)),m}function Vh(i){let m=w.useContext(ds);return Ce(m,Vi(i)),m}function Qh(i){let m=w.useContext(_t);return Ce(m,Vi(i)),m}function Qi(i){let m=Qh(i),p=m.matches[m.matches.length-1];return Ce(p.route.id,`${i} can only be used on routes that contain a unique "id"`),p.route.id}function Xh(){return Qi("useRouteId")}function Kh(){let i=w.useContext(Fi),m=Vh("useRouteError"),p=Qi("useRouteError");return i!==void 0?i:m.errors?.[p]}function Wh(){let{router:i}=Fh("useNavigate"),m=Qi("useNavigate"),p=w.useRef(!1);return Np(()=>{p.current=!0}),w.useCallback(async(d,g={})=>{Dt(p.current,Sp),p.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:m,...g}))},[i,m])}var mp={};function Ep(i,m,p){!m&&!mp[i]&&(mp[i]=!0,Dt(!1,p))}w.memo(Zh);function Zh({routes:i,future:m,state:p,unstable_onError:c}){return jp(i,void 0,p,c,m)}function $h({to:i,replace:m,state:p,relative:c}){Ce(Gn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=w.useContext(Ot);Dt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=w.useContext(_t),{pathname:S}=zt(),T=ms(),v=Pi(i,Ji(g),S,c==="path"),h=JSON.stringify(v);return w.useEffect(()=>{T(JSON.parse(h),{replace:m,state:p,relative:c})},[T,h,c,m,p]),null}function Z(i){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ex({basename:i="/",children:m=null,location:p,navigationType:c="POP",navigator:d,static:g=!1}){Ce(!Gn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=i.replace(/^\/*/,"/"),T=w.useMemo(()=>({basename:S,navigator:d,static:g,future:{}}),[S,d,g]);typeof p=="string"&&(p=In(p));let{pathname:v="/",search:h="",hash:R="",state:O=null,key:H="default"}=p,F=w.useMemo(()=>{let G=oa(v,S);return G==null?null:{location:{pathname:G,search:h,hash:R,state:O,key:H},navigationType:c}},[S,v,h,R,O,H,c]);return Dt(F!=null,`<Router basename="${S}"> is not able to match the URL "${v}${h}${R}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:w.createElement(Ot.Provider,{value:T},w.createElement(ql.Provider,{children:m,value:F}))}function pp({children:i,location:m}){return Ih(Gi(i),m)}function Gi(i,m=[]){let p=[];return w.Children.forEach(i,(c,d)=>{if(!w.isValidElement(c))return;let g=[...m,d];if(c.type===w.Fragment){p.push.apply(p,Gi(c.props.children,g));return}Ce(c.type===Z,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!c.props.index||!c.props.children,"An index route cannot have child routes.");let S={id:c.props.id||g.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(S.children=Gi(c.props.children,g)),p.push(S)}),p}var is="get",cs="application/x-www-form-urlencoded";function ps(i){return i!=null&&typeof i.tagName=="string"}function tx(i){return ps(i)&&i.tagName.toLowerCase()==="button"}function ax(i){return ps(i)&&i.tagName.toLowerCase()==="form"}function nx(i){return ps(i)&&i.tagName.toLowerCase()==="input"}function lx(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function rx(i,m){return i.button===0&&(!m||m==="_self")&&!lx(i)}var os=null;function sx(){if(os===null)try{new FormData(document.createElement("form"),0),os=!1}catch{os=!0}return os}var ox=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ii(i){return i!=null&&!ox.has(i)?(Dt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cs}"`),null):i}function ix(i,m){let p,c,d,g,S;if(ax(i)){let T=i.getAttribute("action");c=T?oa(T,m):null,p=i.getAttribute("method")||is,d=Ii(i.getAttribute("enctype"))||cs,g=new FormData(i)}else if(tx(i)||nx(i)&&(i.type==="submit"||i.type==="image")){let T=i.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||T.getAttribute("action");if(c=v?oa(v,m):null,p=i.getAttribute("formmethod")||T.getAttribute("method")||is,d=Ii(i.getAttribute("formenctype"))||Ii(T.getAttribute("enctype"))||cs,g=new FormData(T,i),!sx()){let{name:h,type:R,value:O}=i;if(R==="image"){let H=h?`${h}.`:"";g.append(`${H}x`,"0"),g.append(`${H}y`,"0")}else h&&g.append(h,O)}}else{if(ps(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');p=is,c=null,d=cs,S=i}return g&&d==="text/plain"&&(S=g,g=void 0),{action:c,method:p.toLowerCase(),encType:d,formData:g,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xi(i,m){if(i===!1||i===null||typeof i>"u")throw new Error(m)}function cx(i,m,p){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${p}`:m&&oa(c.pathname,m)==="/"?c.pathname=`${m.replace(/\/$/,"")}/_root.${p}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${p}`,c}async function ux(i,m){if(i.id in m)return m[i.id];try{let p=await import(i.module);return m[i.id]=p,p}catch(p){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(p),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dx(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function mx(i,m,p){let c=await Promise.all(i.map(async d=>{let g=m.routes[d.route.id];if(g){let S=await ux(g,p);return S.links?S.links():[]}return[]}));return hx(c.flat(1).filter(dx).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function gp(i,m,p,c,d,g){let S=(v,h)=>p[h]?v.route.id!==p[h].route.id:!0,T=(v,h)=>p[h].pathname!==v.pathname||p[h].route.path?.endsWith("*")&&p[h].params["*"]!==v.params["*"];return g==="assets"?m.filter((v,h)=>S(v,h)||T(v,h)):g==="data"?m.filter((v,h)=>{let R=c.routes[v.route.id];if(!R||!R.hasLoader)return!1;if(S(v,h)||T(v,h))return!0;if(v.route.shouldRevalidate){let O=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:p[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function px(i,m,{includeHydrateFallback:p}={}){return gx(i.map(c=>{let d=m.routes[c.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),p&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function gx(i){return[...new Set(i)]}function fx(i){let m={},p=Object.keys(i).sort();for(let c of p)m[c]=i[c];return m}function hx(i,m){let p=new Set;return new Set(m),i.reduce((c,d)=>{let g=JSON.stringify(fx(d));return p.has(g)||(p.add(g),c.push({key:g,link:d})),c},[])}function wp(){let i=w.useContext(qn);return Xi(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function xx(){let i=w.useContext(ds);return Xi(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Ki=w.createContext(void 0);Ki.displayName="FrameworkContext";function Cp(){let i=w.useContext(Ki);return Xi(i,"You must render this element inside a <HydratedRouter> element"),i}function bx(i,m){let p=w.useContext(Ki),[c,d]=w.useState(!1),[g,S]=w.useState(!1),{onFocus:T,onBlur:v,onMouseEnter:h,onMouseLeave:R,onTouchStart:O}=m,H=w.useRef(null);w.useEffect(()=>{if(i==="render"&&S(!0),i==="viewport"){let I=q=>{q.forEach(J=>{S(J.isIntersecting)})},z=new IntersectionObserver(I,{threshold:.5});return H.current&&z.observe(H.current),()=>{z.disconnect()}}},[i]),w.useEffect(()=>{if(c){let I=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(I)}}},[c]);let F=()=>{d(!0)},G=()=>{d(!1),S(!1)};return p?i!=="intent"?[g,H,{}]:[g,H,{onFocus:_l(T,F),onBlur:_l(v,G),onMouseEnter:_l(h,F),onMouseLeave:_l(R,G),onTouchStart:_l(O,F)}]:[!1,H,{}]}function _l(i,m){return p=>{i&&i(p),p.defaultPrevented||m(p)}}function yx({page:i,...m}){let{router:p}=wp(),c=w.useMemo(()=>hp(p.routes,i,p.basename),[p.routes,i,p.basename]);return c?w.createElement(Sx,{page:i,matches:c,...m}):null}function vx(i){let{manifest:m,routeModules:p}=Cp(),[c,d]=w.useState([]);return w.useEffect(()=>{let g=!1;return mx(i,m,p).then(S=>{g||d(S)}),()=>{g=!0}},[i,m,p]),c}function Sx({page:i,matches:m,...p}){let c=zt(),{manifest:d,routeModules:g}=Cp(),{basename:S}=wp(),{loaderData:T,matches:v}=xx(),h=w.useMemo(()=>gp(i,m,v,d,c,"data"),[i,m,v,d,c]),R=w.useMemo(()=>gp(i,m,v,d,c,"assets"),[i,m,v,d,c]),O=w.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let G=new Set,I=!1;if(m.forEach(q=>{let J=d.routes[q.route.id];!J||!J.hasLoader||(!h.some(k=>k.route.id===q.route.id)&&q.route.id in T&&g[q.route.id]?.shouldRevalidate||J.hasClientLoader?I=!0:G.add(q.route.id))}),G.size===0)return[];let z=cx(i,S,"data");return I&&G.size>0&&z.searchParams.set("_routes",m.filter(q=>G.has(q.route.id)).map(q=>q.route.id).join(",")),[z.pathname+z.search]},[S,T,c,d,h,m,i,g]),H=w.useMemo(()=>px(R,d),[R,d]),F=vx(R);return w.createElement(w.Fragment,null,O.map(G=>w.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...p})),H.map(G=>w.createElement("link",{key:G,rel:"modulepreload",href:G,...p})),F.map(({key:G,link:I})=>w.createElement("link",{key:G,nonce:p.nonce,...I})))}function Nx(...i){return m=>{i.forEach(p=>{typeof p=="function"?p(m):p!=null&&(p.current=m)})}}var Tp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Tp&&(window.__reactRouterVersion="7.9.5")}catch{}function jx({basename:i,children:m,window:p}){let c=w.useRef();c.current==null&&(c.current=dh({window:p,v5Compat:!0}));let d=c.current,[g,S]=w.useState({action:d.action,location:d.location}),T=w.useCallback(v=>{w.startTransition(()=>S(v))},[S]);return w.useLayoutEffect(()=>d.listen(T),[d,T]),w.createElement(ex,{basename:i,children:m,location:g.location,navigationType:g.action,navigator:d})}var Rp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ke=w.forwardRef(function({onClick:m,discover:p="render",prefetch:c="none",relative:d,reloadDocument:g,replace:S,state:T,target:v,to:h,preventScrollReset:R,viewTransition:O,...H},F){let{basename:G}=w.useContext(Ot),I=typeof h=="string"&&Rp.test(h),z,q=!1;if(typeof h=="string"&&I&&(z=h,Tp))try{let Te=new URL(window.location.href),rt=h.startsWith("//")?new URL(Te.protocol+h):new URL(h),st=oa(rt.pathname,G);rt.origin===Te.origin&&st!=null?h=st+rt.search+rt.hash:q=!0}catch{Dt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=_h(h,{relative:d}),[k,X,pe]=bx(c,H),He=Tx(h,{replace:S,state:T,target:v,preventScrollReset:R,relative:d,viewTransition:O});function ae(Te){m&&m(Te),Te.defaultPrevented||He(Te)}let _e=w.createElement("a",{...H,...pe,href:z||J,onClick:q||g?m:ae,ref:Nx(F,X),target:v,"data-discover":!I&&p==="render"?"true":void 0});return k&&!I?w.createElement(w.Fragment,null,_e,w.createElement(yx,{page:J})):_e});Ke.displayName="Link";var Ex=w.forwardRef(function({"aria-current":m="page",caseSensitive:p=!1,className:c="",end:d=!1,style:g,to:S,viewTransition:T,children:v,...h},R){let O=Gl(S,{relative:h.relative}),H=zt(),F=w.useContext(ds),{navigator:G,basename:I}=w.useContext(Ot),z=F!=null&&Ox(O)&&T===!0,q=G.encodeLocation?G.encodeLocation(O).pathname:O.pathname,J=H.pathname,k=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;p||(J=J.toLowerCase(),k=k?k.toLowerCase():null,q=q.toLowerCase()),k&&I&&(k=oa(k,I)||k);const X=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let pe=J===q||!d&&J.startsWith(q)&&J.charAt(X)==="/",He=k!=null&&(k===q||!d&&k.startsWith(q)&&k.charAt(q.length)==="/"),ae={isActive:pe,isPending:He,isTransitioning:z},_e=pe?m:void 0,Te;typeof c=="function"?Te=c(ae):Te=[c,pe?"active":null,He?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let rt=typeof g=="function"?g(ae):g;return w.createElement(Ke,{...h,"aria-current":_e,className:Te,ref:R,style:rt,to:S,viewTransition:T},typeof v=="function"?v(ae):v)});Ex.displayName="NavLink";var wx=w.forwardRef(({discover:i="render",fetcherKey:m,navigate:p,reloadDocument:c,replace:d,state:g,method:S=is,action:T,onSubmit:v,relative:h,preventScrollReset:R,viewTransition:O,...H},F)=>{let G=Lx(),I=Dx(T,{relative:h}),z=S.toLowerCase()==="get"?"get":"post",q=typeof T=="string"&&Rp.test(T),J=k=>{if(v&&v(k),k.defaultPrevented)return;k.preventDefault();let X=k.nativeEvent.submitter,pe=X?.getAttribute("formmethod")||S;G(X||k.currentTarget,{fetcherKey:m,method:pe,navigate:p,replace:d,state:g,relative:h,preventScrollReset:R,viewTransition:O})};return w.createElement("form",{ref:F,method:z,action:I,onSubmit:c?v:J,...H,"data-discover":!q&&i==="render"?"true":void 0})});wx.displayName="Form";function Cx(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ap(i){let m=w.useContext(qn);return Ce(m,Cx(i)),m}function Tx(i,{target:m,replace:p,state:c,preventScrollReset:d,relative:g,viewTransition:S}={}){let T=ms(),v=zt(),h=Gl(i,{relative:g});return w.useCallback(R=>{if(rx(R,m)){R.preventDefault();let O=p!==void 0?p:Il(v)===Il(h);T(i,{replace:O,state:c,preventScrollReset:d,relative:g,viewTransition:S})}},[v,T,h,p,c,m,i,d,g,S])}var Rx=0,Ax=()=>`__${String(++Rx)}__`;function Lx(){let{router:i}=Ap("useSubmit"),{basename:m}=w.useContext(Ot),p=Xh();return w.useCallback(async(c,d={})=>{let{action:g,method:S,encType:T,formData:v,body:h}=ix(c,m);if(d.navigate===!1){let R=d.fetcherKey||Ax();await i.fetch(R,p,d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:h,formMethod:d.method||S,formEncType:d.encType||T,flushSync:d.flushSync})}else await i.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:h,formMethod:d.method||S,formEncType:d.encType||T,replace:d.replace,state:d.state,fromRouteId:p,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,m,p])}function Dx(i,{relative:m}={}){let{basename:p}=w.useContext(Ot),c=w.useContext(_t);Ce(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),g={...Gl(i||".",{relative:m})},S=zt();if(i==null){g.search=S.search;let T=new URLSearchParams(g.search),v=T.getAll("index");if(v.some(R=>R==="")){T.delete("index"),v.filter(O=>O).forEach(O=>T.append("index",O));let R=T.toString();g.search=R?`?${R}`:""}}return(!i||i===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),p!=="/"&&(g.pathname=g.pathname==="/"?p:sa([p,g.pathname])),Il(g)}function Ox(i,{relative:m}={}){let p=w.useContext(vp);Ce(p!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Ap("useViewTransitionState"),d=Gl(i,{relative:m});if(!p.isTransitioning)return!1;let g=oa(p.currentLocation.pathname,c)||p.currentLocation.pathname,S=oa(p.nextLocation.pathname,c)||p.nextLocation.pathname;return us(d.pathname,S)!=null||us(d.pathname,g)!=null}const Lp=w.createContext(void 0),Wi=()=>{const i=w.useContext(Lp);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},Mx=({children:i})=>{const[m,p]=w.useState(!1),[c,d]=w.useState(null);w.useEffect(()=>{const T=localStorage.getItem("user");if(T){const v=JSON.parse(T);d(v),p(!0)}},[]);const g=(T,v)=>{const h={email:T,name:v};d(h),p(!0),localStorage.setItem("user",JSON.stringify(h))},S=()=>{d(null),p(!1),localStorage.removeItem("user")};return n.jsx(Lp.Provider,{value:{isAuthenticated:m,user:c,login:g,logout:S},children:i})},Ux=({children:i})=>{const{isAuthenticated:m}=Wi(),p=zt();return m?i:n.jsx($h,{to:"/login",state:{from:p},replace:!0})},Ht={logo:{text:"LearnHub",href:"/"},navigation:[{id:1,label:"Basics of Web",href:"/learn",hasDropdown:!0,dropdownItems:[{id:1,label:"How Computers & Web Work",href:"/courses/computers-web",icon:"🖥️",hasNestedDropdown:!0,topics:[{id:1,name:"What is a Computer Program",href:"/courses/computers-web/program"},{id:2,name:"What is the Internet",href:"/courses/computers-web/internet"},{id:3,name:"Client vs Server",href:"/courses/computers-web/client-server"},{id:4,name:"Opening a Website",href:"/courses/computers-web/website"}]},{id:2,label:"HTML",href:"/courses/html",icon:"🌐",hasNestedDropdown:!0,topics:[{id:1,name:"HTML Basics",href:"/courses/html/basics"},{id:2,name:"HTML Forms",href:"/courses/html/forms"},{id:3,name:"HTML5 Features",href:"/courses/html/html5"},{id:4,name:"Semantic HTML",href:"/courses/html/semantic"},{id:5,name:"Accessibility",href:"/courses/html/accessibility"}]},{id:3,label:"CSS",href:"/courses/css",icon:"🎨",hasNestedDropdown:!0,topics:[{id:1,name:"CSS Basics",href:"/courses/css/basics"},{id:2,name:"Flexbox",href:"/courses/css/flexbox"},{id:3,name:"Grid Layout",href:"/courses/css/grid"},{id:4,name:"Animations",href:"/courses/css/animations"},{id:5,name:"Responsive Design",href:"/courses/css/responsive"},{id:6,name:"CSS Variables",href:"/courses/css/variables"},{id:7,name:"Sass/SCSS",href:"/courses/css/sass"}]},{id:4,label:"JavaScript",href:"/courses/javascript",icon:"⚡",hasNestedDropdown:!0,topics:[{id:1,name:"JS Fundamentals",href:"/courses/js/fundamentals"},{id:2,name:"ES6+ Features",href:"/courses/js/es6"},{id:3,name:"DOM Manipulation",href:"/courses/js/dom"},{id:4,name:"Async JavaScript",href:"/courses/js/async"},{id:5,name:"Promises & Async/Await",href:"/courses/js/promises"},{id:6,name:"OOP in JavaScript",href:"/courses/js/oop"},{id:7,name:"Modules",href:"/courses/js/modules"},{id:8,name:"Testing",href:"/courses/js/testing"}]}]},{id:2,label:"Technology",href:"/technology",hasDropdown:!0,dropdownItems:[{id:1,label:"Frontend",href:"/technology/frontend",icon:"💻",hasNestedDropdown:!0,topics:[{id:1,name:"React.js",href:"/courses/react"},{id:2,name:"Angular",href:"/courses/angular"},{id:5,name:"Next.js",href:"/courses/nextjs"},{id:6,name:"TypeScript",href:"/courses/typescript"}]},{id:2,label:"Backend",href:"/technology/backend",icon:"⚙️",hasNestedDropdown:!0,topics:[{id:1,name:"Node.js",href:"/courses/nodejs"},{id:2,name:"Express.js",href:"/courses/expressjs"},{id:3,name:"Java Spring",href:"/courses/java-spring"}]},{id:3,label:"Database",href:"/technology/database",icon:"🗄️",hasNestedDropdown:!0,topics:[{id:1,name:"MySQL",href:"/courses/mysql"},{id:2,name:"PostgreSQL",href:"/courses/postgresql"},{id:3,name:"MongoDB",href:"/courses/mongodb"},{id:6,name:"SQL Basics",href:"/courses/sql-basics"}]},{id:4,label:"DevOps",href:"/technology/devops",icon:"🚀",hasNestedDropdown:!0,topics:[{id:1,name:"Docker",href:"/technology/devops/docker"},{id:2,name:"Kubernetes",href:"/technology/devops/kubernetes"},{id:3,name:"Jenkins",href:"/technology/devops/jenkins"},{id:4,name:"GitHub Actions",href:"/technology/devops/github-actions"},{id:5,name:"AWS",href:"/technology/devops/aws"},{id:6,name:"Azure",href:"/technology/devops/azure"}]},{id:5,label:"Mobile",href:"/technology/mobile",icon:"📱",hasNestedDropdown:!0,topics:[{id:1,name:"React Native",href:"/technology/mobile/react-native"},{id:2,name:"Flutter",href:"/technology/mobile/flutter"}]}]},{id:3,label:"Roadmaps",href:"/roadmaps",hasDropdown:!0,dropdownItems:[{id:1,label:"Frontend Roadmap",href:"/roadmap/frontend",icon:"🎨",hasNestedDropdown:!0,topics:[{id:1,name:"HTML & CSS",href:"/roadmap/frontend/html-css"},{id:2,name:"JavaScript",href:"/roadmap/frontend/javascript"},{id:3,name:"React.js",href:"/roadmap/frontend/react"},{id:4,name:"Vue.js",href:"/roadmap/frontend/vue"},{id:5,name:"Angular",href:"/roadmap/frontend/angular"},{id:6,name:"TypeScript",href:"/roadmap/frontend/typescript"},{id:7,name:"Testing",href:"/roadmap/frontend/testing"}]},{id:2,label:"Backend Roadmap",href:"/roadmap/backend",icon:"⚙️",hasNestedDropdown:!0,topics:[{id:1,name:"Node.js",href:"/roadmap/backend/nodejs"},{id:2,name:"Python",href:"/roadmap/backend/python"},{id:3,name:"Java Spring",href:"/roadmap/backend/java-spring"},{id:4,name:"Databases",href:"/roadmap/backend/databases"},{id:5,name:"APIs & REST",href:"/roadmap/backend/apis"},{id:6,name:"Authentication",href:"/roadmap/backend/auth"},{id:7,name:"Microservices",href:"/roadmap/backend/microservices"}]},{id:3,label:"DevOps Roadmap",href:"/roadmap/devops",icon:"🚀",hasNestedDropdown:!0,topics:[{id:1,name:"Linux Basics",href:"/roadmap/devops/linux"},{id:2,name:"Git & GitHub",href:"/roadmap/devops/git"},{id:3,name:"Docker",href:"/roadmap/devops/docker"},{id:4,name:"Kubernetes",href:"/roadmap/devops/kubernetes"},{id:5,name:"CI/CD",href:"/roadmap/devops/cicd"},{id:6,name:"AWS/Azure/GCP",href:"/roadmap/devops/cloud"},{id:7,name:"Monitoring",href:"/roadmap/devops/monitoring"}]},{id:4,label:"Full Stack Roadmap",href:"/roadmap/fullstack",icon:"💼",hasNestedDropdown:!0,topics:[{id:1,name:"MERN Stack",href:"/roadmap/fullstack/mern"},{id:2,name:"MEAN Stack",href:"/roadmap/fullstack/mean"},{id:3,name:"Django Stack",href:"/roadmap/fullstack/django"},{id:4,name:"Java Full Stack",href:"/roadmap/fullstack/java"},{id:5,name:"Deployment",href:"/roadmap/fullstack/deployment"},{id:6,name:"Security",href:"/roadmap/fullstack/security"}]},{id:5,label:"Mobile Dev Roadmap",href:"/roadmap/mobile",icon:"📱",hasNestedDropdown:!0,topics:[{id:1,name:"React Native",href:"/roadmap/mobile/react-native"},{id:2,name:"Flutter",href:"/roadmap/mobile/flutter"},{id:3,name:"iOS Development",href:"/roadmap/mobile/ios"},{id:4,name:"Android Development",href:"/roadmap/mobile/android"},{id:5,name:"Mobile UI/UX",href:"/roadmap/mobile/ui-ux"},{id:6,name:"App Deployment",href:"/roadmap/mobile/deployment"}]},{id:6,label:"Data Science Roadmap",href:"/roadmap/data-science",icon:"📊",hasNestedDropdown:!0,topics:[{id:1,name:"Python for Data",href:"/roadmap/data-science/python"},{id:2,name:"Statistics",href:"/roadmap/data-science/statistics"},{id:3,name:"Machine Learning",href:"/roadmap/data-science/ml"},{id:4,name:"Deep Learning",href:"/roadmap/data-science/dl"},{id:5,name:"Data Visualization",href:"/roadmap/data-science/visualization"},{id:6,name:"Big Data",href:"/roadmap/data-science/big-data"}]}]}],searchPlaceholder:"Search courses, tutorials...",userActions:{login:"Login",signup:"Sign Up"}},kx=()=>{const i=ms(),{user:m,logout:p}=Wi(),[c,d]=w.useState(null),[g,S]=w.useState(null),[T,v]=w.useState(!1),[h,R]=w.useState(""),[O,H]=w.useState(!1),[F,G]=w.useState(!1);w.useEffect(()=>{const k=()=>{window.scrollY>10?H(!0):H(!1)};return window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k)},[]);const I=k=>{d(c===k?null:k),S(null)},z=k=>{S(g===k?null:k)},q=k=>{k.preventDefault(),console.log("Searching for:",h)},J=()=>{p(),i("/login")};return n.jsxs("header",{className:`bg-white sticky top-0 z-50 border-b transition-all duration-300 ${O?"shadow-xl border-gray-300":"shadow-md border-gray-200"}`,children:[n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"flex items-center justify-between h-16",children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx(Ke,{to:Ht.logo.href,className:"text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all",children:Ht.logo.text})}),n.jsx("nav",{className:"hidden lg:flex items-center space-x-1",children:Ht.navigation.map(k=>n.jsx("div",{className:"relative group",children:k.hasDropdown?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>I(k.id),onMouseEnter:()=>d(k.id),className:"px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer group",children:[k.label,n.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${c===k.id?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c===k.id&&k.dropdownItems&&n.jsx("div",{className:"absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 animate-fade-in",onMouseLeave:()=>{d(null),S(null)},children:k.dropdownItems.map(X=>n.jsx("div",{className:"relative group/nested",children:X.hasNestedDropdown&&X.topics?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onMouseEnter:()=>S(X.id),onClick:()=>z(X.id),className:"w-full flex items-center justify-between cursor-pointer px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all group/item",children:[n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-lg",children:X.icon}),n.jsx("span",{className:"font-medium text-left",children:X.label})]}),n.jsx("svg",{className:"w-4 h-4 opacity-60",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),g===X.id&&n.jsxs("div",{className:"absolute left-full top-0 ml-1 w-56 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 animate-fade-in",children:[n.jsx("div",{className:"px-3 py-2 border-b border-gray-100",children:n.jsxs("p",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:[X.label," Topics"]})}),X.topics.map(pe=>n.jsx(Ke,{to:pe.href,className:"block px-4 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all hover:pl-5",children:n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),pe.name]})},pe.id))]})]}):n.jsxs(Ke,{to:X.href,className:"flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all",children:[n.jsx("span",{className:"text-lg",children:X.icon}),n.jsx("span",{className:"font-medium",children:X.label})]})},X.id))})]}):n.jsx("a",{href:k.href,className:"px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all",children:k.label})},k.id))}),n.jsx("div",{className:"hidden lg:flex items-center",children:n.jsxs("form",{onSubmit:q,className:"relative",children:[n.jsx("input",{type:"text",value:h,onChange:k=>R(k.target.value),placeholder:Ht.searchPlaceholder,className:"w-72 px-4 py-2.5 pl-11 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"}),n.jsx("svg",{className:"absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}),n.jsx("div",{className:"hidden lg:flex items-center space-x-3",children:m?n.jsxs("div",{className:"relative",children:[n.jsxs("button",{onClick:()=>G(!F),className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all cursor-pointer",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm",children:m.name.charAt(0).toUpperCase()}),n.jsx("span",{className:"text-sm font-semibold text-gray-700",children:m.name}),n.jsx("svg",{className:`w-4 h-4 text-gray-600 transition-transform ${F?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),F&&n.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 animate-fade-in z-50",children:[n.jsx("div",{className:"px-4 py-3 border-b border-gray-100",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg",children:m.name.charAt(0).toUpperCase()}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold text-gray-900",children:m.name}),n.jsx("p",{className:"text-xs text-gray-500",children:m.email})]})]})}),n.jsxs("div",{className:"py-2",children:[n.jsxs("button",{onClick:()=>{i("/"),G(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all",children:[n.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),n.jsx("span",{className:"font-medium",children:"Dashboard"})]}),n.jsxs("button",{onClick:()=>{G(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all",children:[n.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),n.jsx("span",{className:"font-medium",children:"My Profile"})]}),n.jsxs("button",{onClick:()=>{G(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all",children:[n.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),n.jsx("span",{className:"font-medium",children:"My Courses"})]}),n.jsxs("button",{onClick:()=>{G(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all",children:[n.jsxs("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),n.jsx("span",{className:"font-medium",children:"Settings"})]})]}),n.jsx("div",{className:"pt-2 border-t border-gray-100",children:n.jsxs("button",{onClick:()=>{G(!1),J()},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-all font-medium",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),n.jsx("span",{children:"Logout"})]})})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("a",{href:"/login",className:"px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all",children:Ht.userActions.login}),n.jsx("a",{href:"/signup",className:"px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5",children:Ht.userActions.signup})]})}),n.jsx("div",{className:"lg:hidden",children:n.jsx("button",{onClick:()=>v(!T),className:"p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all",children:n.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:T?n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]}),T&&n.jsxs("div",{className:"lg:hidden py-4 border-t border-gray-200 animate-slide-down",children:[n.jsx("form",{onSubmit:q,className:"mb-4",children:n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"text",value:h,onChange:k=>R(k.target.value),placeholder:Ht.searchPlaceholder,className:"w-full px-4 py-2.5 pl-11 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),n.jsx("svg",{className:"absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}),n.jsx("nav",{className:"space-y-1 max-h-96 overflow-y-auto",children:Ht.navigation.map(k=>n.jsx("div",{children:k.hasDropdown?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>I(k.id),className:"w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all flex items-center justify-between",children:[k.label,n.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${c===k.id?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c===k.id&&k.dropdownItems&&n.jsx("div",{className:"pl-2 mt-1 space-y-1",children:k.dropdownItems.map(X=>n.jsx("div",{children:X.hasNestedDropdown&&X.topics?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>z(X.id),className:"w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all flex items-center justify-between",children:[n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("span",{children:X.icon}),n.jsx("span",{className:"font-medium",children:X.label})]}),n.jsx("svg",{className:`w-3.5 h-3.5 transition-transform ${g===X.id?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),g===X.id&&X.topics&&n.jsx("div",{className:"pl-8 mt-1 space-y-1 border-l-2 border-blue-200 ml-4",children:X.topics.map(pe=>n.jsx(Ke,{to:pe.href,className:"block px-3 py-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all",children:pe.name},pe.id))})]}):n.jsxs(Ke,{to:X.href,className:"flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all",children:[n.jsx("span",{children:X.icon}),n.jsx("span",{className:"font-medium",children:X.label})]})},X.id))})]}):n.jsx(Ke,{to:k.href,className:"block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all",children:k.label})},k.id))}),n.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200 space-y-2",children:m?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg",children:[n.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold",children:m.name.charAt(0).toUpperCase()}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold text-gray-700",children:m.name}),n.jsx("p",{className:"text-xs text-gray-500",children:m.email})]})]}),n.jsx("button",{onClick:J,className:"block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-lg transition-all shadow-md",children:"Logout"})]}):n.jsxs(n.Fragment,{children:[n.jsx("a",{href:"/login",className:"block w-full text-center px-4 py-2.5 text-sm font-semibold text-gray-700 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all",children:Ht.userActions.login}),n.jsx("a",{href:"/signup",className:"block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all shadow-md",children:Ht.userActions.signup})]})})]})]}),n.jsx("style",{children:`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `})]})},Bx=()=>{const[i,m]=w.useState(!0),[p,c]=w.useState({email:"",password:"",name:"",confirmPassword:""}),[d,g]=w.useState({email:"",password:"",name:"",confirmPassword:""}),S=ms(),T=zt(),{login:v}=Wi(),h=T.state?.from?.pathname||"/",R=G=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(G),O=G=>{const{name:I,value:z}=G.target;c(q=>({...q,[I]:z})),g(q=>({...q,[I]:""}))},H=G=>{G.preventDefault();let I=!1;const z={email:"",password:"",name:"",confirmPassword:""};if(p.email?R(p.email)||(z.email="Please enter a valid email",I=!0):(z.email="Email is required",I=!0),p.password?p.password.length<6&&(z.password="Password must be at least 6 characters",I=!0):(z.password="Password is required",I=!0),i||(p.name||(z.name="Name is required",I=!0),p.confirmPassword?p.password!==p.confirmPassword&&(z.confirmPassword="Passwords do not match",I=!0):(z.confirmPassword="Please confirm your password",I=!0)),I){g(z);return}i?(v(p.email,p.name||"User"),S(h,{replace:!0})):(v(p.email,p.name),S(h,{replace:!0}))},F=()=>{m(!i),c({email:"",password:"",name:"",confirmPassword:""}),g({email:"",password:"",name:"",confirmPassword:""})};return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-md w-full space-y-8",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-2",children:i?"Welcome Back!":"Create Account"}),n.jsx("p",{className:"text-gray-600",children:i?"Login to continue your learning journey":"Sign up to start learning today"})]}),n.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[n.jsxs("form",{onSubmit:H,className:"space-y-6",children:[!i&&n.jsxs("div",{children:[n.jsx("label",{htmlFor:"name",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Full Name"}),n.jsx("input",{id:"name",name:"name",type:"text",value:p.name,onChange:O,className:`w-full px-4 py-3 border ${d.name?"border-red-500":"border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`,placeholder:"Enter your full name"}),d.name&&n.jsx("p",{className:"mt-1 text-sm text-red-500",children:d.name})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Email Address"}),n.jsx("input",{id:"email",name:"email",type:"email",value:p.email,onChange:O,className:`w-full px-4 py-3 border ${d.email?"border-red-500":"border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`,placeholder:"Enter your email"}),d.email&&n.jsx("p",{className:"mt-1 text-sm text-red-500",children:d.email})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"password",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Password"}),n.jsx("input",{id:"password",name:"password",type:"password",value:p.password,onChange:O,className:`w-full px-4 py-3 border ${d.password?"border-red-500":"border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`,placeholder:"Enter your password"}),d.password&&n.jsx("p",{className:"mt-1 text-sm text-red-500",children:d.password})]}),!i&&n.jsxs("div",{children:[n.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Confirm Password"}),n.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:p.confirmPassword,onChange:O,className:`w-full px-4 py-3 border ${d.confirmPassword?"border-red-500":"border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`,placeholder:"Confirm your password"}),d.confirmPassword&&n.jsx("p",{className:"mt-1 text-sm text-red-500",children:d.confirmPassword})]}),n.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all hover:scale-[1.02] active:scale-[0.98]",children:i?"Sign In":"Create Account"})]}),n.jsx("div",{className:"mt-6 text-center",children:n.jsxs("p",{className:"text-gray-600",children:[i?"Don't have an account? ":"Already have an account? ",n.jsx("button",{onClick:F,className:"text-blue-600 font-semibold hover:text-blue-700 focus:outline-none",children:i?"Sign Up":"Sign In"})]})}),i&&n.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200",children:n.jsxs("p",{className:"text-sm text-blue-800 text-center",children:[n.jsx("strong",{children:"Demo:"})," Use any email and password (min 6 chars) to login"]})})]}),n.jsxs("div",{className:"mt-8 grid grid-cols-3 gap-4 text-center",children:[n.jsxs("div",{className:"bg-white rounded-lg p-4 shadow-md",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📚"}),n.jsx("p",{className:"text-xs text-gray-600 font-medium",children:"Comprehensive Courses"})]}),n.jsxs("div",{className:"bg-white rounded-lg p-4 shadow-md",children:[n.jsx("div",{className:"text-2xl mb-2",children:"🚀"}),n.jsx("p",{className:"text-xs text-gray-600 font-medium",children:"Learn at Your Pace"})]}),n.jsxs("div",{className:"bg-white rounded-lg p-4 shadow-md",children:[n.jsx("div",{className:"text-2xl mb-2",children:"🎯"}),n.jsx("p",{className:"text-xs text-gray-600 font-medium",children:"Track Progress"})]})]})]})})},fp=()=>n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-6xl font-bold mb-6",children:"Welcome to LearnHub"}),n.jsx("p",{className:"text-2xl opacity-90 max-w-3xl mx-auto mb-8",children:"Your comprehensive learning platform for mastering web development and programming technologies"}),n.jsxs("div",{className:"flex gap-4 justify-center flex-wrap",children:[n.jsx(Ke,{to:"/courses/computers-web",className:"px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1",children:"Start Learning"}),n.jsx(Ke,{to:"/courses/html",className:"px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all",children:"Explore Courses"})]})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[n.jsxs("div",{className:"text-center mb-12",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Popular Courses"}),n.jsx("p",{className:"text-xl text-gray-600",children:"Start your learning journey with our most popular courses"})]}),n.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",children:[n.jsxs(Ke,{to:"/courses/computers-web",className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🖥️"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"How Computers & Web Work"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Understand the fundamentals of computing and how the internet works."}),n.jsx("span",{className:"text-blue-600 font-semibold",children:"Start Course →"})]}),n.jsxs(Ke,{to:"/courses/html",className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🌐"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"HTML"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Learn the structure and building blocks of web pages."}),n.jsx("span",{className:"text-blue-600 font-semibold",children:"Start Course →"})]}),n.jsxs(Ke,{to:"/courses/css",className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎨"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"CSS"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Style and design beautiful, responsive web pages."}),n.jsx("span",{className:"text-blue-600 font-semibold",children:"Start Course →"})]}),n.jsxs(Ke,{to:"/courses/javascript",className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300",children:[n.jsx("div",{className:"text-5xl mb-4",children:"⚡"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"JavaScript"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Add interactivity and dynamic features to your websites."}),n.jsx("span",{className:"text-blue-600 font-semibold",children:"Start Course →"})]})]}),n.jsx("div",{className:"text-center mb-12",children:n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Why Choose LearnHub?"})}),n.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 text-center",children:[n.jsx("div",{className:"text-5xl mb-4",children:"📚"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Comprehensive Courses"}),n.jsx("p",{className:"text-gray-600",children:"From basics to advanced topics, we cover everything you need to become a proficient developer."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 text-center",children:[n.jsx("div",{className:"text-5xl mb-4",children:"💻"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Hands-on Practice"}),n.jsx("p",{className:"text-gray-600",children:"Learn by doing with interactive exercises and real-world projects."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 text-center",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🚀"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Career Ready"}),n.jsx("p",{className:"text-gray-600",children:"Build a portfolio and gain the skills employers are looking for."})]})]}),n.jsxs("div",{className:"mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white",children:[n.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Ready to Start Your Learning Journey?"}),n.jsx("p",{className:"text-xl mb-8 opacity-90",children:"Join thousands of students learning to code and build amazing projects."}),n.jsx(Ke,{to:"/courses/computers-web",className:"px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 inline-block",children:"Get Started Now"})]})]})]}),zn=()=>{const[i,m]=w.useState("foundations"),p=[{id:"foundations",label:"Foundations",icon:"🏛️"},{id:"text-content",label:"Text & Content",icon:"📝"},{id:"links-media",label:"Links & Media",icon:"🔗"},{id:"structure",label:"Page Structure",icon:"📦"},{id:"tables",label:"Tables",icon:"🔹"},{id:"forms",label:"Forms & Input",icon:"🧾"},{id:"css-integration",label:"CSS Integration",icon:"🎨"},{id:"metadata-seo",label:"Metadata & SEO",icon:"⚙️"},{id:"advanced",label:"Advanced Features",icon:"🧰"}],d={foundations:{title:"HTML Foundations",description:"Learn the foundational concepts of HTML and the structure of web pages.",sections:[{heading:"What is HTML?",text:"HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of web pages using elements and tags."},{heading:"HTML Document Structure",text:"Every HTML document follows a basic structure with DOCTYPE, html, head, and body elements.",code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first paragraph.</p>
</body>
</html>`},{heading:"Basic Tags",text:"Essential HTML tags for structuring content:",code:`<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Line breaks and horizontal rules -->
<p>First line<br>Second line</p>
<hr>`}]},"text-content":{title:"Text & Content Formatting",description:"Master text formatting, inline and block elements, and content organization.",sections:[{heading:"Inline & Block Elements",text:"Block elements start on a new line (div, p, h1-h6), while inline elements flow within text (span, a, strong)."},{heading:"Text Formatting Tags",code:`<!-- Bold and Strong -->
<b>Bold text</b>
<strong>Strong importance (semantic)</strong>

<!-- Italic and Emphasis -->
<i>Italic text</i>
<em>Emphasized text (semantic)</em>

<!-- Other formatting -->
<mark>Highlighted text</mark>
<small>Smaller text</small>
<sub>Subscript</sub>
<sup>Superscript</sup>
<del>Deleted text</del>
<ins>Inserted text</ins>`},{heading:"Lists",code:`<!-- Ordered List -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<!-- Unordered List -->
<ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
</ul>

<!-- Description List -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`}]},"links-media":{title:"Links & Media",description:"Learn to add hyperlinks, images, audio, video, and embedded content.",sections:[{heading:"Hyperlinks & Attributes",code:`<!-- Basic link -->
<a href="https://example.com">Visit Example</a>

<!-- Link attributes -->
<a href="https://example.com" target="_blank">Open in new tab</a>
<a href="#section-id">Internal link to section</a>
<a href="page.html">Relative link</a>
<a href="mailto:email@example.com">Email link</a>
<a href="tel:+1234567890">Phone link</a>`},{heading:"Images",code:`<!-- Basic image -->
<img src="image.jpg" alt="Description of image">

<!-- Responsive images with srcset -->
<img src="small.jpg"
     srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
     sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
     alt="Responsive image">

<!-- Image with dimensions -->
<img src="logo.png" alt="Logo" width="200" height="100">`},{heading:"Audio & Video",code:`<!-- Audio -->
<audio controls autoplay loop>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser doesn't support audio.
</audio>

<!-- Video -->
<video controls width="640" height="360" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser doesn't support video.
</video>`},{heading:"Embedding Content",code:`<!-- YouTube embed -->
<iframe width="560" height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope"
    allowfullscreen>
</iframe>

<!-- Google Maps embed -->
<iframe src="https://www.google.com/maps/embed?pb=..."
    width="600" height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy">
</iframe>`}]},structure:{title:"Page Structure & Layout",description:"Build well-structured, semantic HTML pages with proper layout elements.",sections:[{heading:"HTML5 Semantic Tags",text:"Semantic elements clearly describe their meaning to both browser and developer.",code:`<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <h2>Main Section</h2>
        <article>
            <h3>Article Title</h3>
            <p>Article content...</p>
        </article>
    </section>

    <aside>
        <h3>Sidebar</h3>
        <p>Related content...</p>
    </aside>
</main>

<footer>
    <p>&copy; 2025 LearnHub</p>
</footer>`},{heading:"Div & Span",code:`<!-- Div: Block-level container -->
<div class="container">
    <div class="row">
        <div class="column">Content</div>
    </div>
</div>

<!-- Span: Inline container -->
<p>This is <span style="color: red;">highlighted</span> text.</p>`},{heading:"Responsive Layout Basics",code:`<!-- Meta viewport tag for responsive design -->
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`}]},tables:{title:"HTML Tables",description:"Create and structure data tables with proper markup and attributes.",sections:[{heading:"Basic Table Structure",code:`<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
        <td>New York</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>30</td>
        <td>London</td>
    </tr>
</table>`},{heading:"Table Spanning & Styling",code:`<table border="1">
    <tr>
        <th colspan="2">Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td rowspan="2">25</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>Smith</td>
    </tr>
</table>`},{heading:"Table Sections",code:`<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laptop</td>
            <td>$999</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>$699</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>$1698</td>
        </tr>
    </tfoot>
</table>`}]},forms:{title:"Forms & User Input",description:"Master HTML forms to collect and validate user input effectively.",sections:[{heading:"Form Structure",code:`<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Submit</button>
</form>`},{heading:"Input Types",code:`<!-- Text inputs -->
<input type="text" placeholder="Enter text">
<input type="email" placeholder="email@example.com">
<input type="password" placeholder="Password">
<input type="number" min="1" max="100">
<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
<input type="url" placeholder="https://example.com">

<!-- Date and time -->
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">

<!-- Selection inputs -->
<input type="checkbox" id="agree">
<input type="radio" name="option" value="1">
<input type="range" min="0" max="100">
<input type="color">

<!-- File and actions -->
<input type="file" accept="image/*">
<input type="submit" value="Submit">
<input type="reset" value="Reset">
<input type="button" value="Click Me">`},{heading:"Form Controls",code:`<!-- Textarea -->
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>

<!-- Select dropdown -->
<label for="country">Country:</label>
<select id="country" name="country">
    <option value="">Select...</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
</select>

<!-- Multiple select -->
<select multiple>
    <option>Option 1</option>
    <option>Option 2</option>
</select>

<!-- Button -->
<button type="button">Click Me</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>`},{heading:"HTML5 Input Features & Validation",code:`<form>
    <!-- Placeholder -->
    <input type="text" placeholder="Enter your name">

    <!-- Required field -->
    <input type="email" required>

    <!-- Pattern validation -->
    <input type="text" pattern="[A-Za-z]{3,}"
           title="At least 3 letters">

    <!-- Min/Max -->
    <input type="number" min="1" max="100">
    <input type="date" min="2024-01-01" max="2024-12-31">

    <!-- Autocomplete -->
    <input type="email" autocomplete="email">

    <!-- Autofocus -->
    <input type="text" autofocus>

    <!-- Readonly and disabled -->
    <input type="text" value="readonly" readonly>
    <input type="text" disabled>
</form>`}]},"css-integration":{title:"HTML + CSS Integration",description:"Learn how to integrate CSS styling with HTML documents.",sections:[{heading:"Linking CSS",code:`<!-- External CSS (recommended) -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>

<!-- Internal CSS -->
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
        }
    </style>
</head>

<!-- Inline CSS -->
<p style="color: red; font-size: 16px;">Inline styled text</p>`},{heading:"Class vs ID Attributes",code:`<!-- Classes (reusable, multiple per element) -->
<div class="container main-content">
    <p class="text-large text-blue">Paragraph</p>
</div>

<!-- IDs (unique, one per page) -->
<div id="header">
    <h1 id="site-title">My Website</h1>
</div>

<!-- CSS for above -->
<style>
    .container { width: 1200px; }
    .text-large { font-size: 18px; }
    .text-blue { color: blue; }
    #header { background: #333; }
    #site-title { color: white; }
</style>`},{heading:"Style Attribute & Basic Styling",code:`<!-- Direct styling -->
<div style="
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
">
    <h2 style="color: #333; margin-bottom: 10px;">Styled Box</h2>
    <p style="line-height: 1.6;">Content with inline styles</p>
</div>`}]},"metadata-seo":{title:"Metadata & SEO Basics",description:"Optimize your HTML for search engines and social media sharing.",sections:[{heading:"Meta Tags",code:`<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">

    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Description for search engines -->
    <meta name="description" content="Learn HTML, CSS, and JavaScript">

    <!-- Keywords (less important now) -->
    <meta name="keywords" content="HTML, CSS, JavaScript, Web Development">

    <!-- Author -->
    <meta name="author" content="LearnHub">

    <!-- Refresh/Redirect -->
    <meta http-equiv="refresh" content="30">
</head>`},{heading:"Title Tag",code:`<head>
    <title>HTML Course - LearnHub | Learn Web Development</title>
</head>`},{heading:"Open Graph Tags (Social Sharing)",code:`<head>
    <!-- Facebook & LinkedIn -->
    <meta property="og:title" content="HTML Course - LearnHub">
    <meta property="og:description" content="Master HTML from basics to advanced">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/html-course">
    <meta property="og:type" content="website">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="HTML Course - LearnHub">
    <meta name="twitter:description" content="Master HTML from basics to advanced">
    <meta name="twitter:image" content="https://example.com/image.jpg">
</head>`},{heading:"Accessibility Basics",code:`<!-- ARIA roles and attributes -->
<nav role="navigation" aria-label="Main navigation">
    <ul>
        <li><a href="/">Home</a></li>
    </ul>
</nav>

<button aria-label="Close menu" aria-expanded="false">×</button>

<!-- Alt text for images -->
<img src="logo.png" alt="LearnHub company logo">

<!-- Proper heading hierarchy -->
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>

<!-- Labels for form inputs -->
<label for="email">Email:</label>
<input type="email" id="email" aria-required="true">`}]},advanced:{title:"Advanced HTML5 Features",description:"Explore advanced HTML5 capabilities for modern web applications.",sections:[{heading:"Canvas Basics",code:`<canvas id="myCanvas" width="400" height="200"></canvas>

<script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Draw rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 150, 100);

    // Draw circle
    ctx.beginPath();
    ctx.arc(300, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
<\/script>`},{heading:"SVG Graphics",code:`<!-- Inline SVG -->
<svg width="200" height="200">
    <circle cx="100" cy="100" r="80"
            fill="blue" stroke="black" stroke-width="2" />
    <rect x="50" y="150" width="100" height="30"
          fill="green" />
</svg>

<!-- SVG as image -->
<img src="graphic.svg" alt="SVG graphic">`},{heading:"Data Attributes",code:`<!-- Custom data attributes -->
<div class="product"
     data-product-id="12345"
     data-category="electronics"
     data-price="999.99">
    Laptop
</div>

<script>
    const product = document.querySelector('.product');
    console.log(product.dataset.productId);  // "12345"
    console.log(product.dataset.category);   // "electronics"
    console.log(product.dataset.price);      // "999.99"
<\/script>`},{heading:"Local Storage & Session Storage",code:`<script>
    // Local Storage (persists after browser close)
    localStorage.setItem('username', 'Alice');
    const user = localStorage.getItem('username');
    localStorage.removeItem('username');
    localStorage.clear();

    // Session Storage (cleared when tab closes)
    sessionStorage.setItem('token', 'abc123');
    const token = sessionStorage.getItem('token');
    sessionStorage.removeItem('token');
    sessionStorage.clear();

    // Store objects
    const userData = { name: 'Alice', age: 25 };
    localStorage.setItem('user', JSON.stringify(userData));
    const stored = JSON.parse(localStorage.getItem('user'));
<\/script>`},{heading:"File Paths & Organization",text:"Best practices for organizing HTML projects:",code:`<!-- Project Structure -->
project/
├── index.html
├── about.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── utils.js
├── images/
│   ├── logo.png
│   └── banner.jpg
└── assets/
    ├── fonts/
    └── icons/

<!-- Relative paths -->
<link rel="stylesheet" href="css/styles.css">
<script src="js/main.js"><\/script>
<img src="images/logo.png" alt="Logo">
<a href="about.html">About</a>

<!-- Absolute paths -->
<img src="/images/logo.png" alt="Logo">
<a href="https://example.com/page">External</a>`}]}}[i];return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("span",{className:"text-6xl mb-4 block",children:"🌐"}),n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"HTML Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-2xl mx-auto",children:"Master HTML - the foundation of web development. Learn to structure web pages and create amazing user experiences."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(g=>n.jsxs("button",{onClick:()=>m(g.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===g.id?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-xl",children:g.icon}),n.jsx("span",{children:g.label})]},g.id))})}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:d.title}),n.jsx("p",{className:"text-xl text-gray-600",children:d.description})]}),n.jsx("div",{className:"space-y-8",children:d.sections.map((g,S)=>n.jsxs("div",{className:"border-l-4 border-blue-500 pl-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:g.heading}),g.text&&n.jsx("p",{className:"text-gray-700 mb-4 leading-relaxed",children:g.text}),g.code&&n.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto",children:n.jsx("pre",{className:"text-sm",children:n.jsx("code",{children:g.code})})})]},S))}),n.jsxs("div",{className:"mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Ready to Start Learning?"}),n.jsx("p",{className:"text-gray-700 mb-6",children:"Practice these concepts with hands-on exercises and build real projects."}),n.jsxs("div",{className:"flex gap-4 justify-center",children:[n.jsx("button",{className:"px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all",children:"Start Exercises"}),n.jsx("button",{className:"px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-300",children:"View Examples"})]})]})]}),n.jsxs("div",{className:"mt-8 grid md:grid-cols-3 gap-6",children:[n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[n.jsx("div",{className:"text-3xl mb-3",children:"📚"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Documentation"}),n.jsx("p",{className:"text-gray-600",children:"Comprehensive HTML reference and guides for all skill levels."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[n.jsx("div",{className:"text-3xl mb-3",children:"💻"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Code Editor"}),n.jsx("p",{className:"text-gray-600",children:"Practice HTML with our interactive code editor and see results instantly."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎓"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Certification"}),n.jsx("p",{className:"text-gray-600",children:"Complete the course and earn a certificate to showcase your skills."})]})]})]})]})},zl=()=>{const[i,m]=w.useState("program"),p=[{id:"program",label:"Computer Program",icon:"💻"},{id:"internet",label:"The Internet",icon:"🌐"},{id:"client-server",label:"Client vs Server",icon:"🔄"},{id:"website",label:"Opening a Website",icon:"🚀"}],d={program:{title:"What is a Computer Program?",description:"Understanding the foundation of how software works and communicates with hardware.",sections:[{heading:"Definition",text:"A computer program is a set of instructions written in a programming language that tells a computer what to do. It's like a recipe that the computer follows step by step to perform specific tasks."},{heading:"How Programs Work",text:"Programs are written by developers in high-level programming languages (like JavaScript, Python, Java) and then converted into machine code (binary: 0s and 1s) that the computer's processor can understand and execute.",points:["Source Code: Human-readable instructions written by programmers","Compiler/Interpreter: Translates source code into machine code","Execution: CPU processes the machine code instructions","Output: Program produces results or performs actions"]},{heading:"Types of Programs",text:"Programs can be categorized into different types based on their purpose:",points:["System Software: Operating systems (Windows, macOS, Linux)","Application Software: Web browsers, word processors, games","Web Applications: Gmail, Facebook, online banking","Mobile Apps: Instagram, WhatsApp, mobile games"]},{heading:"Simple Program Example",code:`// JavaScript program that greets a user
function greetUser(name) {
    console.log("Hello, " + name + "!");
    console.log("Welcome to programming!");
}

// Execute the program
greetUser("Alice");

// Output:
// Hello, Alice!
// Welcome to programming!`},{heading:"Key Concepts",points:["Variables: Store data (like name, age, price)","Functions: Reusable blocks of code that perform specific tasks","Logic: Decision making (if/else statements)","Loops: Repeat actions multiple times","Input/Output: Getting data from users and showing results"]}]},internet:{title:"What is the Internet?",description:"Explore the global network that connects billions of devices worldwide.",sections:[{heading:"Definition",text:"The Internet is a global network of interconnected computers and devices that communicate using standardized protocols. It's essentially a massive network of networks spanning the entire world."},{heading:"How the Internet Works",text:"The Internet works by breaking data into small packets and sending them across networks using a system of protocols:",points:["Data Packets: Information is broken into small chunks","Routing: Packets travel through multiple routers and networks","Protocols: TCP/IP ensures packets arrive correctly","Reassembly: Packets are put back together at destination"]},{heading:"Key Components",text:"The Internet consists of several important components:",points:["ISP (Internet Service Provider): Companies that provide internet access (Comcast, AT&T, Verizon)","DNS (Domain Name System): Translates website names (google.com) into IP addresses (142.250.80.46)","Servers: Computers that store and serve websites and data","Routers: Direct data packets to their destination","Cables: Fiber optic and copper cables that physically connect networks"]},{heading:"IP Addresses",text:"Every device on the Internet has a unique IP address, like a postal address for data:",code:`// IPv4 Address Example
192.168.1.1

// IPv6 Address Example
2001:0db8:85a3:0000:0000:8a2e:0370:7334

// Domain to IP Translation
google.com → 142.250.80.46
facebook.com → 157.240.241.35`},{heading:"Protocols",points:["HTTP/HTTPS: Web page transfer (HTTPS is secure)","TCP/IP: Core protocols for data transmission","FTP: File transfer between computers","SMTP: Sending emails","DNS: Domain name resolution"]},{heading:"Internet vs World Wide Web",text:"Important distinction: The Internet is the infrastructure (cables, routers, servers), while the World Wide Web (WWW) is a service that runs on top of the Internet, consisting of websites and web pages accessed through browsers."}]},"client-server":{title:"Client vs Server",description:"Understanding the relationship between clients and servers in web communication.",sections:[{heading:"What is a Client?",text:"A client is a device or program that requests services or resources from a server. In web development, the client is typically your web browser (Chrome, Firefox, Safari) running on your computer or phone.",points:["Web Browsers: Chrome, Firefox, Safari, Edge","Mobile Apps: Instagram, Twitter, Gmail apps","Desktop Applications: Email clients, chat apps","IoT Devices: Smart home devices, wearables"]},{heading:"What is a Server?",text:"A server is a powerful computer that stores data and provides services to clients. When you visit a website, you're connecting to a web server that sends you the website's files.",points:["Web Servers: Apache, Nginx, IIS","Database Servers: MySQL, PostgreSQL, MongoDB","Application Servers: Node.js, Java servers","Cloud Servers: AWS, Google Cloud, Azure"]},{heading:"Client-Server Communication",text:"The client-server model follows a request-response pattern:",code:`// How Client-Server Communication Works

1. CLIENT REQUEST
   User types: www.example.com
   Browser sends: GET /index.html HTTP/1.1

2. SERVER PROCESSING
   Server receives request
   Processes the request
   Retrieves requested data

3. SERVER RESPONSE
   Server sends: HTTP/1.1 200 OK
   Content-Type: text/html
   <html>...</html>

4. CLIENT RENDERING
   Browser receives HTML
   Renders the webpage
   User sees the content`},{heading:"Request-Response Cycle",points:["1. Client sends HTTP request to server","2. Server processes the request","3. Server queries database if needed","4. Server sends HTTP response back to client","5. Client renders the response"]},{heading:"Types of Servers",text:"Different servers handle different types of requests:",points:["Web Server: Serves HTML, CSS, JavaScript files","API Server: Provides data in JSON/XML format","Database Server: Stores and retrieves data","File Server: Stores and shares files","Mail Server: Handles email communication"]},{heading:"Real-World Example",code:`// Ordering from a Restaurant (Client-Server Analogy)

CLIENT (You):
- Look at menu
- Place order: "I want a pizza"

SERVER (Kitchen):
- Receive order
- Prepare pizza
- Send pizza to customer

CLIENT (You):
- Receive pizza
- Enjoy the meal

// Same concept in web:
- Browser requests webpage
- Server processes request
- Server sends HTML/CSS/JS
- Browser displays webpage`}]},website:{title:"What Happens When You Open a Website?",description:"A detailed journey of what occurs behind the scenes when you visit a website.",sections:[{heading:"The Complete Journey",text:"When you type a URL and hit Enter, a complex series of events happens in milliseconds. Let's break down each step:"},{heading:"Step 1: URL Parsing",text:"Your browser breaks down the URL into components:",code:`https://www.example.com/page?query=value

Protocol: https://
Subdomain: www
Domain: example.com
Path: /page
Query: ?query=value

Browser identifies what needs to be fetched`},{heading:"Step 2: DNS Lookup",text:"The browser needs to convert the domain name into an IP address:",points:["1. Browser checks its cache for the IP address","2. If not found, asks the operating system","3. OS checks its cache","4. If not found, queries DNS server","5. DNS server returns IP address (e.g., 93.184.216.34)"],code:`// DNS Resolution Process
www.example.com
    ↓
Check Browser Cache
    ↓
Check OS Cache
    ↓
Query DNS Server
    ↓
IP Address: 93.184.216.34`},{heading:"Step 3: TCP Connection",text:"Browser establishes a connection with the server using TCP three-way handshake:",points:["1. SYN: Client sends synchronization request","2. SYN-ACK: Server acknowledges and sends its own SYN","3. ACK: Client acknowledges server's SYN","Connection established!"]},{heading:"Step 4: TLS/SSL Handshake (for HTTPS)",text:"If the website uses HTTPS, a secure connection is established:",points:["1. Client Hello: Browser sends supported encryption methods","2. Server Hello: Server chooses encryption method","3. Certificate: Server sends SSL certificate","4. Browser verifies certificate","5. Keys exchanged for secure communication"]},{heading:"Step 5: HTTP Request",text:"Browser sends an HTTP request to the server:",code:`GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml
Accept-Language: en-US,en;q=0.9
Accept-Encoding: gzip, deflate, br
Connection: keep-alive`},{heading:"Step 6: Server Processing",text:"The server receives and processes the request:",points:["1. Web server (Nginx/Apache) receives request","2. Routes request to appropriate handler","3. Application server processes business logic","4. Queries database if needed","5. Generates response (HTML/JSON)"]},{heading:"Step 7: HTTP Response",text:"Server sends response back to the browser:",code:`HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1234
Cache-Control: max-age=3600
Server: nginx/1.18.0

<!DOCTYPE html>
<html>
<head>
    <title>Example Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome!</h1>
    <script src="app.js"><\/script>
</body>
</html>`},{heading:"Step 8: Browser Rendering",text:"Browser processes and displays the content:",points:["1. Parse HTML and create DOM tree","2. Parse CSS and create CSSOM tree","3. Combine DOM + CSSOM = Render tree","4. Calculate layout (size and position)","5. Paint pixels on screen","6. Download and execute JavaScript","7. Load additional resources (images, fonts)"]},{heading:"Step 9: Additional Resources",text:"Browser makes additional requests for resources mentioned in HTML:",points:["CSS files (styles.css)","JavaScript files (app.js)","Images (logo.png, banner.jpg)","Fonts (custom-font.woff2)","API calls for dynamic data"]},{heading:"Timeline Visualization",code:`[User types URL and hits Enter]
    ↓ ~10ms
[DNS Lookup: domain → IP address]
    ↓ ~20-100ms
[TCP Connection: Three-way handshake]
    ↓ ~10-50ms
[TLS Handshake: Secure connection]
    ↓ ~20-100ms
[HTTP Request: GET /index.html]
    ↓ ~50-200ms
[Server Processing: Generate response]
    ↓ ~50-200ms
[HTTP Response: HTML content]
    ↓ ~10-50ms
[Browser Rendering: Display page]
    ↓ ~100-500ms
[Load Additional Resources]
    ↓ ~200-1000ms
[Page Fully Loaded & Interactive]

Total: ~500ms - 3000ms (typically)`},{heading:"Performance Optimization",text:"Ways to make websites load faster:",points:["Caching: Store frequently accessed data","CDN: Serve content from servers closer to users","Compression: Reduce file sizes (gzip, Brotli)","Minification: Remove unnecessary code","Lazy Loading: Load resources only when needed","HTTP/2 or HTTP/3: Faster protocols"]}]}}[i];return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("span",{className:"text-6xl mb-4 block",children:"🌐"}),n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"How Computers & the Web Work"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Understand the fundamental concepts of computing and web technology. Learn what happens behind the scenes when you browse the internet."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:p.map(g=>n.jsxs("button",{onClick:()=>m(g.id),className:`px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${i===g.id?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:g.icon}),n.jsx("span",{className:"text-center",children:g.label})]},g.id))})}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:d.title}),n.jsx("p",{className:"text-xl text-gray-600",children:d.description})]}),n.jsx("div",{className:"space-y-8",children:d.sections.map((g,S)=>n.jsxs("div",{className:"border-l-4 border-blue-500 pl-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:g.heading}),g.text&&n.jsx("p",{className:"text-gray-700 mb-4 leading-relaxed text-lg",children:g.text}),g.points&&n.jsx("ul",{className:"space-y-2 mb-4",children:g.points.map((T,v)=>n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-blue-600 mt-1",children:"▸"}),n.jsx("span",{className:"text-gray-700 text-lg",children:T})]},v))}),g.code&&n.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto mt-4",children:n.jsx("pre",{className:"text-sm leading-relaxed",children:n.jsx("code",{children:g.code})})})]},S))}),n.jsxs("div",{className:"mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-6 text-center",children:"Quick Reference"}),n.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md",children:[n.jsx("h4",{className:"font-bold text-lg text-gray-900 mb-3",children:"💡 Key Takeaways"}),n.jsxs("ul",{className:"space-y-2 text-gray-700",children:[n.jsx("li",{children:"• Programs are instructions for computers"}),n.jsx("li",{children:"• Internet is a global network of networks"}),n.jsx("li",{children:"• Clients request, servers respond"}),n.jsx("li",{children:"• Multiple steps happen when loading a website"})]})]}),n.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md",children:[n.jsx("h4",{className:"font-bold text-lg text-gray-900 mb-3",children:"⚡ Remember"}),n.jsxs("ul",{className:"space-y-2 text-gray-700",children:[n.jsx("li",{children:"• DNS translates domains to IP addresses"}),n.jsx("li",{children:"• HTTPS provides secure communication"}),n.jsx("li",{children:"• Browsers render HTML/CSS/JavaScript"}),n.jsx("li",{children:"• Speed depends on many factors"})]})]})]})]}),n.jsxs("div",{className:"mt-12 text-center",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Ready to Build for the Web?"}),n.jsx("p",{className:"text-gray-700 mb-6 text-lg",children:"Now that you understand how computers and the web work, start learning HTML, CSS, and JavaScript!"}),n.jsxs("div",{className:"flex gap-4 justify-center flex-wrap",children:[n.jsx("button",{className:"px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all",children:"Start HTML Course"}),n.jsx("button",{className:"px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-300",children:"Explore More Topics"})]})]})]}),n.jsxs("div",{className:"mt-8 grid md:grid-cols-3 gap-6",children:[n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📖"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Deep Dive Articles"}),n.jsx("p",{className:"text-gray-600",children:"Read in-depth articles about networking, protocols, and web architecture."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow",children:[n.jsx("div",{className:"text-4xl mb-3",children:"🎥"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Video Tutorials"}),n.jsx("p",{className:"text-gray-600",children:"Watch animated explanations of how the internet and web browsers work."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow",children:[n.jsx("div",{className:"text-4xl mb-3",children:"🔬"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Interactive Labs"}),n.jsx("p",{className:"text-gray-600",children:"Experiment with network requests and see data flow in real-time."})]})]})]})]})},Ma=()=>{const[i,m]=w.useState("basics"),p=[{id:"basics",label:"CSS Basics",icon:"✅"},{id:"selectors",label:"Selectors",icon:"🎯"},{id:"colors",label:"Colors & Backgrounds",icon:"💅"},{id:"box-model",label:"Box Model",icon:"🧱"},{id:"typography",label:"Typography",icon:"📝"},{id:"units",label:"Units",icon:"🔐"},{id:"display",label:"Display & Visibility",icon:"🧩"},{id:"positioning",label:"Positioning",icon:"🗂️"},{id:"flexbox",label:"Flexbox",icon:"🪟"},{id:"grid",label:"CSS Grid",icon:"🪟"},{id:"responsive",label:"Responsive Design",icon:"📱"},{id:"styling",label:"Styling Techniques",icon:"🎨"},{id:"pseudo",label:"Pseudo Classes",icon:"🎭"},{id:"variables",label:"CSS Variables",icon:"🧮"},{id:"functions",label:"CSS Functions",icon:"🧮"},{id:"sass",label:"SCSS / SASS",icon:"🧑‍💻"}],d={basics:{title:"CSS Basics",description:"Learn the foundational concepts of CSS and how to apply styles to your web pages.",sections:[{heading:"What is CSS & Why It's Used",text:"CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of HTML documents. It controls colors, fonts, layouts, spacing, and the overall visual appearance of web pages, separating content from design."},{heading:"Ways to Apply CSS",text:"There are three main ways to add CSS to your HTML:",points:["Inline CSS: Using the style attribute directly in HTML elements","Internal CSS: Using <style> tag in the HTML <head> section","External CSS: Linking separate .css files using <link> tag (recommended for maintainability)"],code:`<!-- Inline CSS -->
<p style="color: red; font-size: 16px;">This is red text</p>

<!-- Internal CSS -->
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>

<!-- External CSS (Recommended) -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>`},{heading:"CSS Syntax",text:"CSS consists of selectors and declaration blocks. The selector points to the HTML element, and declarations define the styling properties.",code:`/* Basic CSS Syntax */
selector {
  property: value;
}

/* Example */
h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}

p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 16px;
}`},{heading:"Comments in CSS",text:"Comments help document your code and are ignored by browsers.",code:`/* This is a single-line comment */

/*
  This is a
  multi-line comment
  explaining complex styles
*/

h1 {
  color: blue; /* Inline comment */
}`}]},selectors:{title:"CSS Selectors",description:"Master the different types of selectors to target HTML elements precisely.",sections:[{heading:"Type Selector (Element Selector)",text:"Targets all elements of a specific type.",code:`/* Selects all <p> elements */
p {
  color: blue;
}

/* Selects all <h1> elements */
h1 {
  font-size: 32px;
}`},{heading:"Class & ID Selectors",code:`/* Class selector - can be used multiple times */
.highlight {
  background-color: yellow;
}

.btn {
  padding: 10px 20px;
  border-radius: 4px;
}

/* ID selector - should be unique */
#header {
  background-color: navy;
}

#main-content {
  max-width: 1200px;
  margin: 0 auto;
}`},{heading:"Universal Selector (*)",text:"Selects all elements on the page. Often used for CSS resets.",code:`/* Reset all margins and paddings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`},{heading:"Grouping Selectors",text:"Apply the same styles to multiple selectors.",code:`/* Group multiple selectors */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Arial', sans-serif;
  font-weight: bold;
}

.btn-primary, .btn-secondary, .btn-danger {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}`},{heading:"Attribute Selectors",text:"Target elements based on their attributes.",code:`/* Elements with specific attribute */
a[target] {
  background-color: yellow;
}

/* Specific attribute value */
a[href="https://example.com"] {
  color: red;
}

/* Attribute value contains */
a[href*="google"] {
  color: blue;
}

/* Attribute value starts with */
a[href^="https"] {
  color: green;
}

/* Attribute value ends with */
a[href$=".pdf"] {
  color: orange;
}`},{heading:"Combinators",text:"Describe relationships between selectors.",code:`/* Descendant selector (div p) - all <p> inside <div> */
div p {
  color: blue;
}

/* Child selector (div > p) - direct children only */
div > p {
  color: red;
}

/* Adjacent sibling (div + p) - immediately after */
div + p {
  margin-top: 20px;
}

/* General sibling (div ~ p) - all siblings after */
div ~ p {
  color: gray;
}`}]},colors:{title:"Colors & Backgrounds",description:"Explore different color formats and background properties to enhance your designs.",sections:[{heading:"Color Formats",text:"CSS supports multiple color formats for maximum flexibility.",code:`/* Hexadecimal */
.hex {
  color: #3b82f6;
  background-color: #fff;
}

/* RGB (Red, Green, Blue) */
.rgb {
  color: rgb(59, 130, 246);
  background-color: rgb(255, 255, 255);
}

/* RGBA (with Alpha/transparency) */
.rgba {
  color: rgba(59, 130, 246, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
}

/* HSL (Hue, Saturation, Lightness) */
.hsl {
  color: hsl(217, 91%, 60%);
  background-color: hsl(0, 0%, 100%);
}

/* Named colors */
.named {
  color: blue;
  background-color: white;
}`},{heading:"Background Properties",code:`/* Background color */
.bg-color {
  background-color: #f0f0f0;
}

/* Background image */
.bg-image {
  background-image: url('image.jpg');
  background-size: cover; /* cover, contain, 100px, 50% */
  background-repeat: no-repeat; /* repeat, repeat-x, repeat-y */
  background-position: center; /* top, bottom, left, right, center */
  background-attachment: fixed; /* scroll, fixed, local */
}

/* Shorthand */
.bg-shorthand {
  background: #f0f0f0 url('image.jpg') no-repeat center/cover;
}

/* Multiple backgrounds */
.multi-bg {
  background-image: url('overlay.png'), url('background.jpg');
  background-position: center, top left;
  background-repeat: no-repeat, repeat;
}`},{heading:"Gradients",text:"Create smooth color transitions with linear and radial gradients.",code:`/* Linear gradient */
.linear-gradient {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  background: linear-gradient(45deg, red, blue);
  background: linear-gradient(to bottom, #fff 0%, #000 100%);
}

/* Multiple color stops */
.multi-gradient {
  background: linear-gradient(
    to right,
    red 0%,
    yellow 33%,
    green 66%,
    blue 100%
  );
}

/* Radial gradient */
.radial-gradient {
  background: radial-gradient(circle, #3b82f6, #8b5cf6);
  background: radial-gradient(ellipse at top, white, blue);
}

/* Repeating gradients */
.repeating {
  background: repeating-linear-gradient(
    45deg,
    #3b82f6,
    #3b82f6 10px,
    #8b5cf6 10px,
    #8b5cf6 20px
  );
}`}]},"box-model":{title:"The Box Model",description:"Understand how CSS treats every element as a box with content, padding, border, and margin.",sections:[{heading:"Understanding the Box Model",text:"Every HTML element is treated as a rectangular box consisting of content, padding, border, and margin areas.",code:`/* Box Model Breakdown */
.box {
  /* Content area */
  width: 300px;
  height: 200px;

  /* Padding (space inside the border) */
  padding: 20px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;

  /* Border */
  border: 2px solid #333;

  /* Margin (space outside the border) */
  margin: 10px;
  margin-top: 5px;
  margin-right: auto;
  margin-bottom: 5px;
  margin-left: auto;
}

/* Shorthand */
.shorthand {
  padding: 10px 20px; /* top/bottom left/right */
  margin: 10px 15px 20px 25px; /* top right bottom left */
}`},{heading:"box-sizing Property",text:"Controls how the total width and height of an element is calculated.",code:`/* content-box (default) - width/height applies to content only */
.content-box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total width: 300 + 40 (padding) + 10 (border) = 350px */
}

/* border-box - width/height includes padding and border */
.border-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total width: 300px (includes padding and border) */
}

/* Apply to all elements (recommended) */
* {
  box-sizing: border-box;
}`},{heading:"Border Styles, Radius, Outline",code:`/* Border styles */
.border-styles {
  border-style: solid; /* solid, dashed, dotted, double, groove, ridge */
  border-width: 2px;
  border-color: blue;

  /* Individual sides */
  border-top: 3px solid red;
  border-right: 2px dashed green;
  border-bottom: 1px dotted blue;
  border-left: 4px double orange;
}

/* Border radius (rounded corners) */
.rounded {
  border-radius: 8px;
  border-radius: 50%; /* circle */
  border-radius: 10px 20px 30px 40px; /* top-left, top-right, bottom-right, bottom-left */
  border-top-left-radius: 15px;
}

/* Outline (doesn't affect layout) */
.outline {
  outline: 2px solid red;
  outline-offset: 5px;
}`}]},typography:{title:"Typography & Text Styling",description:"Style text content with fonts, sizes, spacing, and text properties.",sections:[{heading:"Font Properties",code:`/* Font family */
.text {
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-family: 'Georgia', serif;
  font-family: 'Courier New', monospace;
}

/* Font size */
.sizes {
  font-size: 16px;
  font-size: 1.5rem;
  font-size: 120%;
}

/* Font weight */
.weight {
  font-weight: normal; /* 400 */
  font-weight: bold; /* 700 */
  font-weight: 300; /* light */
  font-weight: 600; /* semi-bold */
  font-weight: 900; /* extra-bold */
}

/* Font style */
.style {
  font-style: normal;
  font-style: italic;
  font-style: oblique;
}`},{heading:"Text Spacing & Height",code:`/* Line height */
.spacing {
  line-height: 1.6; /* 1.6 times the font size */
  line-height: 24px;
  line-height: 150%;
}

/* Letter spacing */
.letter {
  letter-spacing: 2px;
  letter-spacing: 0.1em;
  letter-spacing: -1px; /* tighter spacing */
}

/* Word spacing */
.word {
  word-spacing: 5px;
  word-spacing: 0.2em;
}`},{heading:"Text Decoration & Alignment",code:`/* Text decoration */
.decoration {
  text-decoration: underline;
  text-decoration: overline;
  text-decoration: line-through;
  text-decoration: none; /* remove default link underline */
  text-decoration: underline dotted red;
}

/* Text alignment */
.alignment {
  text-align: left;
  text-align: center;
  text-align: right;
  text-align: justify;
}

/* Text capitalization */
.transform {
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize; /* First Letter Of Each Word */
}`},{heading:"Web-Safe Fonts & Google Fonts",code:`/* Web-safe font stack */
.web-safe {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
               Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Import Google Fonts in HTML */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

/* Or in CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

/* Use Google Font */
.google-font {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}`}]},units:{title:"CSS Units",description:"Learn about absolute and relative units for sizing elements and text.",sections:[{heading:"Absolute Units",text:"Fixed units that don't change based on other elements.",code:`/* Pixels (most common absolute unit) */
.absolute {
  width: 300px;
  height: 200px;
  font-size: 16px;
  margin: 10px;
}

/* Other absolute units (rarely used) */
.other {
  width: 2in; /* inches */
  height: 5cm; /* centimeters */
  font-size: 12pt; /* points (1/72 of an inch) */
}`},{heading:"Relative Units",text:"Units that scale relative to other values, making designs more flexible and responsive.",code:`/* em - relative to parent element font-size */
.parent {
  font-size: 16px;
}
.em-child {
  font-size: 2em; /* 32px (2 × 16px) */
  padding: 1em; /* 32px (relative to own font-size) */
}

/* rem - relative to root element font-size */
html {
  font-size: 16px;
}
.rem-element {
  font-size: 1.5rem; /* 24px (1.5 × 16px) */
  margin: 2rem; /* 32px */
}

/* Percentage - relative to parent */
.parent-container {
  width: 1000px;
}
.percent-child {
  width: 50%; /* 500px */
}

/* Viewport units */
.viewport {
  width: 100vw; /* 100% of viewport width */
  height: 100vh; /* 100% of viewport height */
  font-size: 5vw; /* 5% of viewport width */
  padding: 2vh; /* 2% of viewport height */
}

/* vmin and vmax */
.responsive {
  font-size: 3vmin; /* 3% of smaller viewport dimension */
  width: 50vmax; /* 50% of larger viewport dimension */
}`}]},display:{title:"Display & Visibility",description:"Control how elements are displayed and their visibility on the page.",sections:[{heading:"Display Property",text:"Controls how an element is displayed in the document flow.",code:`/* Block - takes full width, starts on new line */
.block {
  display: block;
  /* Examples: div, p, h1-h6, section, header */
}

/* Inline - only takes necessary width, no line break */
.inline {
  display: inline;
  /* Examples: span, a, strong, em */
  /* Cannot set width/height on inline elements */
}

/* Inline-block - inline but can set width/height */
.inline-block {
  display: inline-block;
  width: 200px;
  height: 100px;
  /* Best of both worlds */
}

/* None - removes element from document flow */
.none {
  display: none;
  /* Element is completely hidden and takes no space */
}`},{heading:"Visibility & Opacity",code:`/* Visibility - hides element but keeps space */
.hidden {
  visibility: hidden;
  /* Element invisible but still takes up space */
}

.visible {
  visibility: visible;
}

/* Opacity - transparency level */
.transparent {
  opacity: 0; /* completely transparent */
  opacity: 0.5; /* 50% transparent */
  opacity: 1; /* fully opaque */
}

/* Difference between display: none and visibility: hidden */
.removed {
  display: none; /* Removes from layout, no space taken */
}

.invisible {
  visibility: hidden; /* Hidden but space is preserved */
}`},{heading:"Overflow",text:"Controls what happens when content overflows its container.",code:`/* Overflow options */
.overflow {
  width: 300px;
  height: 200px;

  overflow: visible; /* default - content shows outside */
  overflow: hidden; /* clips content */
  overflow: scroll; /* always shows scrollbars */
  overflow: auto; /* shows scrollbars only when needed */
}

/* Control x and y separately */
.overflow-xy {
  overflow-x: hidden; /* horizontal */
  overflow-y: scroll; /* vertical */
}

/* Text overflow with ellipsis */
.text-overflow {
  width: 200px;
  white-space: nowrap; /* prevent wrapping */
  overflow: hidden;
  text-overflow: ellipsis; /* show ... for clipped text */
}`}]},positioning:{title:"CSS Positioning",description:"Position elements precisely using different positioning schemes.",sections:[{heading:"Position Types",text:"CSS provides five positioning schemes to control element placement.",code:`/* Static (default) - normal document flow */
.static {
  position: static;
  /* top, right, bottom, left have no effect */
}

/* Relative - positioned relative to normal position */
.relative {
  position: relative;
  top: 20px; /* moves down 20px from normal position */
  left: 10px; /* moves right 10px from normal position */
}

/* Absolute - positioned relative to nearest positioned ancestor */
.parent {
  position: relative; /* becomes positioning context */
}
.absolute {
  position: absolute;
  top: 0;
  right: 0;
  /* Removed from normal document flow */
}

/* Fixed - positioned relative to viewport */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* Stays in place when scrolling */
}

/* Sticky - switches between relative and fixed */
.sticky {
  position: sticky;
  top: 0;
  /* Sticks when scrolling past threshold */
}`},{heading:"Position Properties",code:`/* Top, Right, Bottom, Left */
.positioned {
  position: absolute;
  top: 10px; /* distance from top */
  right: 20px; /* distance from right */
  bottom: 30px; /* distance from bottom */
  left: 40px; /* distance from left */
}

/* Centering with absolute positioning */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Full coverage */
.full-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Covers entire viewport */
}`},{heading:"Z-Index",text:"Controls stacking order of positioned elements (higher values appear on top).",code:`/* Z-index only works on positioned elements */
.layer-1 {
  position: relative;
  z-index: 1;
}

.layer-2 {
  position: absolute;
  z-index: 2; /* appears above layer-1 */
}

.layer-3 {
  position: fixed;
  z-index: 999; /* very high - appears on top */
}

/* Negative z-index */
.background {
  position: relative;
  z-index: -1; /* appears behind parent */
}`}]},flexbox:{title:"Flexbox Layout",description:"Create flexible, one-dimensional layouts with powerful alignment and distribution controls.",sections:[{heading:"Flexbox Container",text:"Enable flexbox by setting display: flex on the container. This creates a flex formatting context.",code:`/* Basic flex container */
.container {
  display: flex;
}

/* Flex direction */
.flex-row {
  flex-direction: row; /* default - horizontal left to right */
}
.flex-column {
  flex-direction: column; /* vertical top to bottom */
}
.flex-row-reverse {
  flex-direction: row-reverse; /* horizontal right to left */
}
.flex-column-reverse {
  flex-direction: column-reverse; /* vertical bottom to top */
}`},{heading:"Main Axis vs Cross Axis",text:"Understanding axes is crucial for flexbox. Main axis follows flex-direction, cross axis is perpendicular.",code:`/* Main axis alignment (justify-content) */
.justify {
  display: flex;
  justify-content: flex-start; /* default - start of main axis */
  justify-content: flex-end; /* end of main axis */
  justify-content: center; /* center of main axis */
  justify-content: space-between; /* equal space between items */
  justify-content: space-around; /* equal space around items */
  justify-content: space-evenly; /* equal space all around */
}

/* Cross axis alignment (align-items) */
.align {
  display: flex;
  align-items: stretch; /* default - stretch to container height */
  align-items: flex-start; /* start of cross axis */
  align-items: flex-end; /* end of cross axis */
  align-items: center; /* center of cross axis */
  align-items: baseline; /* align text baselines */
}`},{heading:"Flex Wrap & Gap",code:`/* Flex wrap */
.wrap {
  display: flex;
  flex-wrap: nowrap; /* default - single line */
  flex-wrap: wrap; /* wrap to multiple lines */
  flex-wrap: wrap-reverse; /* wrap in reverse order */
}

/* Gap between items */
.gap {
  display: flex;
  gap: 20px; /* gap between all items */
  row-gap: 10px; /* gap between rows */
  column-gap: 15px; /* gap between columns */
}

/* Align multiple lines (align-content) */
.multi-line {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-content: center;
  align-content: space-between;
}`},{heading:"Flex Items (flex-grow, flex-shrink, flex-basis)",code:`/* Flex-grow - how much item grows relative to others */
.grow {
  flex-grow: 1; /* grows to fill available space */
  flex-grow: 2; /* grows twice as much as flex-grow: 1 */
}

/* Flex-shrink - how much item shrinks */
.shrink {
  flex-shrink: 1; /* default - can shrink */
  flex-shrink: 0; /* won't shrink */
}

/* Flex-basis - initial size before growing/shrinking */
.basis {
  flex-basis: 200px; /* start at 200px */
  flex-basis: auto; /* based on content */
  flex-basis: 0; /* start at 0 */
}

/* Flex shorthand: flex-grow flex-shrink flex-basis */
.item-1 {
  flex: 1; /* flex: 1 1 0% */
}
.item-2 {
  flex: 0 0 200px; /* fixed width, no grow/shrink */
}
.item-3 {
  flex: 2 1 300px; /* grows 2x, shrinks, starts at 300px */
}`}]},grid:{title:"CSS Grid Layout",description:"Master CSS Grid for creating complex, two-dimensional layouts with rows and columns.",sections:[{heading:"Grid Container Basics",code:`/* Create a grid container */
.grid {
  display: grid;
}

/* Define columns */
.grid-cols {
  display: grid;
  grid-template-columns: 200px 300px 200px; /* 3 fixed columns */
  grid-template-columns: 1fr 2fr 1fr; /* fractional units */
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-columns: repeat(auto-fill, 200px); /* auto fill */
}

/* Define rows */
.grid-rows {
  display: grid;
  grid-template-rows: 100px 200px; /* 2 fixed rows */
  grid-template-rows: auto 1fr auto; /* header/content/footer */
}

/* Gap between grid items */
.grid-gap {
  display: grid;
  gap: 20px; /* row and column gap */
  row-gap: 10px; /* gap between rows */
  column-gap: 15px; /* gap between columns */
}`},{heading:"Grid Template Areas",text:"Name areas of your grid for intuitive layout creation.",code:`/* Define grid areas */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar content ads"
    "footer footer footer";
  gap: 20px;
}

/* Assign items to areas */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }`},{heading:"Grid Item Placement",code:`/* Place items using line numbers */
.item {
  grid-column-start: 1;
  grid-column-end: 3; /* spans columns 1-2 */
  grid-row-start: 2;
  grid-row-end: 4; /* spans rows 2-3 */
}

/* Shorthand */
.item-short {
  grid-column: 1 / 3; /* start / end */
  grid-row: 2 / 4;
}

/* Span syntax */
.span {
  grid-column: span 2; /* span 2 columns */
  grid-row: span 3; /* span 3 rows */
}

/* Grid area shorthand: row-start / col-start / row-end / col-end */
.area {
  grid-area: 1 / 1 / 3 / 4;
}`},{heading:"fr Units & Responsive Grids",code:`/* Fractional (fr) units - distribute available space */
.fr-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
  grid-template-columns: 200px 1fr; /* fixed + flexible */
}

/* Auto-fit and minmax for responsive grids */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* Creates as many columns as fit, min 250px, max 1fr */
  gap: 20px;
}

/* Auto-fill vs auto-fit */
.auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* Fills row with columns, even if empty */
}

.auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* Expands columns to fill space */
}`}]},responsive:{title:"Responsive Design",description:"Create websites that adapt beautifully to all screen sizes and devices.",sections:[{heading:"Meta Viewport Tag",text:"Essential for responsive design - tells browsers how to control page dimensions and scaling.",code:`<!-- Add to <head> of HTML -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Attributes -->
<!-- width=device-width: use device width -->
<!-- initial-scale=1.0: initial zoom level -->
<!-- maximum-scale: max zoom level -->
<!-- minimum-scale: min zoom level -->
<!-- user-scalable: allow user zoom -->`},{heading:"Media Queries",text:"Apply different styles based on device characteristics like screen width, height, orientation, etc.",code:`/* Basic media query syntax */
@media (max-width: 768px) {
  /* Styles for screens up to 768px */
  .container {
    width: 100%;
  }
}

/* Min-width (mobile-first approach) */
@media (min-width: 768px) {
  /* Styles for screens 768px and larger */
  .container {
    width: 750px;
  }
}

/* Range queries */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Styles for tablet screens */
}

/* Multiple conditions */
@media (min-width: 768px) and (orientation: landscape) {
  /* Tablet landscape */
}`},{heading:"Responsive Units (%, rem, vw)",code:`/* Percentage - relative to parent */
.percent {
  width: 80%; /* 80% of parent width */
  padding: 5%; /* 5% of parent width */
}

/* rem - relative to root font-size */
html {
  font-size: 16px;
}
.rem-element {
  font-size: 1.5rem; /* 24px */
  margin: 2rem; /* 32px */
}

/* Viewport units */
.viewport {
  width: 100vw; /* 100% of viewport width */
  height: 100vh; /* 100% of viewport height */
  font-size: 4vw; /* responsive font size */
}

/* Responsive typography */
.responsive-text {
  font-size: clamp(16px, 4vw, 32px);
  /* min: 16px, preferred: 4vw, max: 32px */
}`},{heading:"Mobile-First vs Desktop-First",code:`/* Mobile-First (recommended) - start with mobile styles */
.element {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    width: 1000px;
  }
}

/* Desktop-First - start with desktop styles */
.element {
  width: 1000px;
  padding: 30px;
}

/* Tablet */
@media (max-width: 1024px) {
  .element {
    width: 750px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .element {
    width: 100%;
    padding: 10px;
  }
}`}]},styling:{title:"CSS Styling Techniques",description:"Advanced styling techniques including shadows, transforms, transitions, and animations.",sections:[{heading:"Shadows (text-shadow, box-shadow)",code:`/* Text shadow: x y blur color */
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-shadow: 0 0 10px #fff, 0 0 20px #fff; /* glow effect */
}

/* Multiple text shadows */
.multi-text-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
}

/* Box shadow: x y blur spread color */
.box-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); /* depth */
}

/* Inset shadow */
.inset-shadow {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Multiple box shadows */
.multi-shadow {
  box-shadow:
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24);
}`},{heading:"Rounded Corners (border-radius)",code:`/* Equal radius on all corners */
.rounded {
  border-radius: 8px;
}

/* Circle */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* Individual corners */
.custom-radius {
  border-radius: 10px 20px 30px 40px;
  /* top-left, top-right, bottom-right, bottom-left */
}

/* Elliptical corners */
.ellipse {
  border-radius: 50px / 25px; /* horizontal / vertical */
}

/* Specific corners */
.corners {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}`},{heading:"Transitions",code:`/* Basic transition: property duration timing-function delay */
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: darkblue;
}

/* Multiple properties */
.box {
  transition: width 0.3s ease, height 0.3s ease, background-color 0.5s;
}

/* All properties */
.all {
  transition: all 0.3s ease-in-out;
}

/* Timing functions */
.timing {
  transition-timing-function: linear;
  transition-timing-function: ease; /* default */
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`},{heading:"Transforms (translate, scale, rotate)",code:`/* Translate (move) */
.translate {
  transform: translate(50px, 100px); /* x, y */
  transform: translateX(50px);
  transform: translateY(100px);
}

/* Scale */
.scale {
  transform: scale(1.5); /* 150% size */
  transform: scale(0.5); /* 50% size */
  transform: scale(2, 0.5); /* x, y separately */
}

/* Rotate */
.rotate {
  transform: rotate(45deg);
  transform: rotate(-90deg);
  transform: rotateX(45deg); /* 3D rotation */
  transform: rotateY(45deg);
}

/* Skew */
.skew {
  transform: skew(20deg, 10deg);
}

/* Multiple transforms */
.multi-transform {
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

/* Transform origin */
.origin {
  transform-origin: top left; /* rotation/scale origin */
  transform-origin: 50% 50%; /* center (default) */
}`},{heading:"Animations (@keyframes)",code:`/* Define animation with @keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Using percentages */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Apply animation */
.animated {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-iteration-count: 1; /* or infinite */
  animation-direction: normal; /* normal, reverse, alternate */
  animation-fill-mode: forwards; /* keeps final state */
}

/* Shorthand */
.animated-short {
  animation: fadeIn 1s ease-out 0.5s forwards;
}`}]},pseudo:{title:"Pseudo Classes & Elements",description:"Style elements based on their state or create virtual elements with pseudo-selectors.",sections:[{heading:"Pseudo Classes (:hover, :active, :focus)",code:`/* Hover - when mouse is over element */
a:hover {
  color: blue;
  text-decoration: underline;
}

/* Active - when element is being clicked */
button:active {
  transform: scale(0.95);
}

/* Focus - when element has keyboard focus */
input:focus {
  outline: 2px solid blue;
  border-color: blue;
}

/* Visited - for visited links */
a:visited {
  color: purple;
}

/* Disabled and enabled */
input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input:enabled {
  background-color: white;
}

/* Checked (for checkboxes/radio buttons) */
input:checked {
  accent-color: blue;
}`},{heading:"Structural Pseudo Classes",code:`/* First and last child */
li:first-child {
  font-weight: bold;
}

li:last-child {
  border-bottom: none;
}

/* nth-child */
li:nth-child(odd) {
  background-color: #f0f0f0;
}

li:nth-child(even) {
  background-color: white;
}

li:nth-child(3) {
  color: red; /* 3rd child */
}

li:nth-child(3n) {
  color: blue; /* every 3rd child */
}

li:nth-child(3n+1) {
  color: green; /* 1st, 4th, 7th... */
}

/* First/last of type */
p:first-of-type {
  margin-top: 0;
}

p:last-of-type {
  margin-bottom: 0;
}

/* Only child */
p:only-child {
  text-align: center;
}`},{heading:"Pseudo Elements (::before, ::after)",text:"Create virtual elements before or after element content. Requires 'content' property.",code:`/* ::before - insert content before element */
.label::before {
  content: "★ ";
  color: gold;
}

/* ::after - insert content after element */
.required::after {
  content: " *";
  color: red;
}

/* Decorative elements */
.quote::before {
  content: """;
  font-size: 3em;
  color: #ccc;
}

.quote::after {
  content: """;
  font-size: 3em;
  color: #ccc;
}

/* Empty content for shapes */
.icon::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  margin-right: 10px;
}`},{heading:"Other Useful Pseudo Elements",code:`/* ::placeholder - style input placeholders */
input::placeholder {
  color: #999;
  font-style: italic;
  opacity: 1;
}

/* ::selection - style selected text */
::selection {
  background-color: #3b82f6;
  color: white;
}

/* ::first-letter - style first letter */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: #3b82f6;
}

/* ::first-line - style first line */
p::first-line {
  font-weight: bold;
  color: #333;
}`}]},variables:{title:"CSS Variables (Custom Properties)",description:"Use CSS variables to create maintainable, reusable, and dynamic stylesheets.",sections:[{heading:"Declaring and Using Custom Properties",text:"CSS variables are defined with -- prefix and accessed with var() function.",code:`/* Declare variables in :root for global scope */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --text-color: #1f2937;
  --bg-color: #ffffff;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --font-size-base: 16px;
  --border-radius: 8px;
}

/* Use variables */
.button {
  background-color: var(--primary-color);
  color: var(--bg-color);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
}

/* Fallback value */
.element {
  color: var(--text-color, #000000);
  /* Uses #000000 if --text-color is not defined */
}`},{heading:"Scoped Variables",text:"Variables can be scoped to specific elements and cascade to their children.",code:`/* Global variables */
:root {
  --button-bg: blue;
  --button-text: white;
}

/* Scoped override */
.dark-theme {
  --button-bg: #1f2937;
  --button-text: #f9fafb;
}

.light-theme {
  --button-bg: #f9fafb;
  --button-text: #1f2937;
}

/* Use the variable */
.button {
  background-color: var(--button-bg);
  color: var(--button-text);
}

/* Scoped to specific component */
.card {
  --card-padding: 20px;
  --card-bg: white;

  padding: var(--card-padding);
  background-color: var(--card-bg);
}`},{heading:"Dynamic Variables with JavaScript",text:"Change CSS variables dynamically using JavaScript for themes, animations, etc.",code:`/* Change CSS variable value */
document.documentElement.style.setProperty(
  '--primary-color',
  '#ff0000'
);

/* Get CSS variable value */
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');

console.log(primaryColor); // '#3b82f6'

/* Dark mode toggle example */
function toggleDarkMode() {
  const root = document.documentElement;
  root.style.setProperty('--bg-color', '#1f2937');
  root.style.setProperty('--text-color', '#f9fafb');
  root.style.setProperty('--primary-color', '#60a5fa');
}

/* Theme switcher */
function setTheme(theme) {
  const themes = {
    blue: { primary: '#3b82f6', secondary: '#8b5cf6' },
    red: { primary: '#ef4444', secondary: '#f97316' },
    green: { primary: '#10b981', secondary: '#06b6d4' }
  };

  document.documentElement.style.setProperty(
    '--primary-color',
    themes[theme].primary
  );
}`}]},functions:{title:"CSS Functions",description:"Use CSS functions for dynamic calculations and responsive sizing.",sections:[{heading:"calc() Function",text:"Perform calculations to determine CSS property values. Supports +, -, *, /",code:`/* Basic calculations */
.element {
  width: calc(100% - 50px);
  height: calc(100vh - 100px);
  padding: calc(1rem + 5px);
  margin: calc(10px * 2);
}

/* Responsive layouts */
.sidebar {
  width: calc(25% - 20px);
}

.content {
  width: calc(75% - 20px);
}

/* Mixing units */
.box {
  width: calc(100vw - 2rem);
  font-size: calc(16px + 0.5vw);
}

/* Nested calculations */
.complex {
  width: calc(100% - calc(2rem + 10px));
  padding: calc(calc(100% / 12) - 20px);
}`},{heading:"min() Function",text:"Returns the smallest value from a list of comma-separated values.",code:`/* Responsive width with maximum */
.container {
  width: min(100%, 1200px);
  /* Never wider than 100% or 1200px */
}

/* Responsive padding */
.box {
  padding: min(5vw, 3rem);
  /* Uses smaller value: 5% of viewport or 3rem */
}

/* Font size with maximum */
.title {
  font-size: min(10vw, 48px);
  /* Responsive but never larger than 48px */
}`},{heading:"max() Function",text:"Returns the largest value from a list of comma-separated values.",code:`/* Responsive width with minimum */
.container {
  width: max(50%, 300px);
  /* Never narrower than 50% or 300px */
}

/* Minimum font size */
.text {
  font-size: max(16px, 1vw);
  /* At least 16px, grows with viewport */
}

/* Grid with minimum column size */
.grid {
  grid-template-columns: repeat(auto-fit, max(200px, 20%));
}`},{heading:"clamp() Function",text:"Clamps a value between minimum and maximum bounds. Syntax: clamp(min, preferred, max)",code:`/* Responsive font size with min and max */
.title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* Min: 1.5rem, Preferred: 5vw, Max: 3rem */
}

/* Responsive width */
.container {
  width: clamp(300px, 80%, 1200px);
  /* Min: 300px, Preferred: 80%, Max: 1200px */
}

/* Responsive padding */
.section {
  padding: clamp(1rem, 5%, 5rem);
}

/* Responsive line height */
p {
  line-height: clamp(1.4, 1.2 + 0.5vw, 2);
}

/* Fluid typography */
h1 {
  font-size: clamp(2rem, 1rem + 3vw, 5rem);
  /* Smoothly scales between 2rem and 5rem */
}`}]},sass:{title:"SCSS / SASS (Preprocessors)",description:"Supercharge your CSS with Sass features like variables, nesting, mixins, and functions.",sections:[{heading:"SCSS vs SASS Syntax",text:"SCSS uses CSS-like syntax with braces {}. SASS uses indentation (older syntax).",code:`/* SCSS Syntax (recommended - .scss files) */
.button {
  background-color: blue;
  &:hover {
    background-color: darkblue;
  }
}

/* SASS Syntax (.sass files) - no braces/semicolons */
.button
  background-color: blue
  &:hover
    background-color: darkblue

/* We'll use SCSS syntax in examples */`},{heading:"Variables in SCSS",text:"SCSS variables use $ prefix and are more powerful than CSS variables.",code:`/* Define variables */
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$font-stack: 'Helvetica', sans-serif;
$spacing: 16px;
$border-radius: 8px;

/* Use variables */
.button {
  background-color: $primary-color;
  font-family: $font-stack;
  padding: $spacing;
  border-radius: $border-radius;
}

/* Variables in calculations */
.box {
  padding: $spacing * 2; // 32px
  margin: $spacing / 2; // 8px
}

/* Default values */
$base-color: #333 !default;
/* Won't override if already defined */`},{heading:"Nesting",text:"Nest selectors to mirror HTML structure. Makes code more organized and readable.",code:`/* Without nesting (CSS) */
.nav { background-color: #333; }
.nav ul { list-style: none; }
.nav ul li { display: inline-block; }
.nav ul li a { color: white; }
.nav ul li a:hover { color: blue; }

/* With nesting (SCSS) */
.nav {
  background-color: #333;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        color: white;

        &:hover {
          color: blue;
        }
      }
    }
  }
}

/* & parent selector */
.button {
  background-color: blue;

  &:hover { background-color: darkblue; }
  &:active { transform: scale(0.95); }
  &.primary { background-color: green; }
  &-icon { margin-right: 8px; } // .button-icon
}`},{heading:"Mixins",text:"Reusable blocks of code that can accept parameters. Like functions for styles.",code:`/* Define mixin */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Use mixin */
.container {
  @include flex-center;
}

/* Mixin with parameters */
@mixin button-style($bg-color, $text-color, $padding: 12px) {
  background-color: $bg-color;
  color: $text-color;
  padding: $padding 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

/* Use with arguments */
.primary-btn {
  @include button-style(#3b82f6, white);
}

.secondary-btn {
  @include button-style(#8b5cf6, white, 16px);
}

/* Mixin for responsive breakpoints */
@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 767px) { @content; }
  } @else if $breakpoint == tablet {
    @media (min-width: 768px) and (max-width: 1023px) { @content; }
  } @else if $breakpoint == desktop {
    @media (min-width: 1024px) { @content; }
  }
}

.element {
  width: 100%;

  @include respond-to(tablet) {
    width: 750px;
  }

  @include respond-to(desktop) {
    width: 1200px;
  }
}`},{heading:"Functions & Operations",code:`/* Built-in functions */
$base-color: #3b82f6;

.box {
  background-color: lighten($base-color, 20%); // lighter
  border-color: darken($base-color, 10%); // darker
  color: mix($base-color, white, 50%); // blend colors
  opacity: opacity($base-color); // get opacity
}

/* Custom functions */
@function calculate-rem($px) {
  @return $px / 16px * 1rem;
}

.element {
  font-size: calculate-rem(24px); // 1.5rem
  padding: calculate-rem(32px); // 2rem
}

/* Math operations */
$base-size: 16px;

.title {
  font-size: $base-size * 2; // 32px
  margin: $base-size / 2; // 8px
  padding: $base-size + 4px; // 20px
}

/* Color manipulation */
.theme {
  background: complement($base-color); // opposite color
  border: 1px solid saturate($base-color, 20%); // more saturated
  box-shadow: 0 4px 8px fade-out($base-color, 0.5); // semi-transparent
}`},{heading:"Partials & Imports",text:"Organize code into multiple files. Partials start with _ and won't compile separately.",code:`/* _variables.scss */
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$spacing: 16px;

/* _mixins.scss */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button($bg) {
  background-color: $bg;
  padding: 12px 24px;
  border-radius: 4px;
}

/* _base.scss */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* main.scss - imports all partials */
@import 'variables';
@import 'mixins';
@import 'base';

.container {
  background-color: $primary-color;
  @include flex-center;
}

.button {
  @include button($secondary-color);
}

/* Modern @use (replaces @import) */
@use 'variables' as vars;
@use 'mixins';

.element {
  color: vars.$primary-color;
  @include mixins.flex-center;
}`}]}}[i];return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"🎨 CSS Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master CSS to design beautiful, responsive, and modern websites. From basics to advanced animations and preprocessors."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(g=>n.jsxs("button",{onClick:()=>m(g.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===g.id?"bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-xl",children:g.icon}),n.jsx("span",{className:"text-sm",children:g.label})]},g.id))})}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:d.title}),n.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:d.description})]}),n.jsx("div",{className:"space-y-8",children:d.sections.map((g,S)=>n.jsxs("div",{className:"border-l-4 border-pink-500 pl-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:g.heading}),g.text&&n.jsx("p",{className:"text-gray-700 mb-4 leading-relaxed",children:g.text}),g.points&&n.jsx("ul",{className:"space-y-2 mb-4",children:g.points.map((T,v)=>n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-pink-600 mt-1",children:"▸"}),n.jsx("span",{className:"text-gray-700",children:T})]},v))}),g.code&&n.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto",children:n.jsx("pre",{className:"text-sm",children:n.jsx("code",{children:g.code})})})]},S))}),n.jsxs("div",{className:"mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 text-center",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Ready to Style the Web? 🚀"}),n.jsx("p",{className:"text-gray-700 mb-6 max-w-2xl mx-auto",children:"Practice these CSS concepts and create beautiful, responsive designs that bring your web pages to life!"})]})]})]})]})},ra=()=>{const[i,m]=w.useState("basics"),p=[{id:"basics",label:"Basics & Fundamentals",icon:"✅"},{id:"variables",label:"Variables & Data Types",icon:"🔤"},{id:"operators",label:"Operators",icon:"➕"},{id:"control-flow",label:"Control Flow",icon:"🔁"},{id:"functions",label:"Functions",icon:"📦"},{id:"arrays",label:"Arrays",icon:"🧱"},{id:"objects",label:"Objects",icon:"🧱"},{id:"dom",label:"DOM",icon:"🌐"},{id:"events",label:"Events",icon:"🖱️"},{id:"timers",label:"Timers",icon:"⏱️"},{id:"storage",label:"Storage",icon:"💾"},{id:"async",label:"Asynchronous JS",icon:"🔄"},{id:"fetch",label:"Fetch API",icon:"🌍"},{id:"es6",label:"ES6+ Features",icon:"🧱"},{id:"errors",label:"Error Handling",icon:"🎨"},{id:"oop",label:"OOP",icon:"⚙️"},{id:"apis",label:"Browser APIs",icon:"🧠"},{id:"tools",label:"Tools & NPM",icon:"🤖"}],d={basics:{title:"Basics & Fundamentals",description:"Learn what JavaScript is and how it works in browsers to make web pages interactive.",sections:[{heading:"What is JavaScript & How It Works in Browsers",text:"JavaScript is a high-level, interpreted programming language that runs in web browsers. It enables interactive web pages by manipulating HTML and CSS, responding to user actions, and communicating with servers. JavaScript is executed by the browser's JavaScript engine (V8 in Chrome, SpiderMonkey in Firefox)."},{heading:"How to Add JavaScript",text:"There are three ways to add JavaScript to your web pages:",points:["Inline JavaScript: Using onclick and other event attributes directly in HTML elements","Internal JavaScript: Using <script> tags in the HTML document","External JavaScript: Linking separate .js files using <script src='...'> (recommended)"],code:`<!-- Inline JavaScript -->
<button onclick="alert('Hello!')">Click me</button>

<!-- Internal JavaScript -->
<script>
  console.log('Hello from internal script!');
<\/script>

<!-- External JavaScript (Recommended) -->
<script src="script.js"><\/script>
<script src="app.js" defer><\/script>`},{heading:"console.log() for Debugging",text:"console.log() is the most important tool for debugging. It prints values to the browser's developer console.",code:`// Basic logging
console.log('Hello, World!');
console.log(42);
console.log(true);

// Logging variables
const name = 'Alice';
const age = 25;
console.log('Name:', name, 'Age:', age);

// Logging objects
const person = { name: 'Bob', age: 30 };
console.log(person);

// Other console methods
console.error('This is an error');
console.warn('This is a warning');
console.table([1, 2, 3, 4]);
console.clear(); // Clear console`},{heading:"Comments in JavaScript",text:"Comments help document your code and are ignored by the JavaScript engine.",code:`// This is a single-line comment

/*
  This is a
  multi-line comment
  explaining complex logic
*/

let x = 5; // Inline comment

/**
 * JSDoc comment for documentation
 * @param {string} name - The user's name
 * @returns {string} A greeting message
 */
function greet(name) {
  return 'Hello, ' + name;
}`}]},variables:{title:"Variables & Data Types",description:"Understand how to store and work with different types of data in JavaScript.",sections:[{heading:"var, let, const",text:"JavaScript provides three ways to declare variables, each with different scoping rules.",code:`// var (old way - avoid using)
var oldWay = 'I have function scope';
var oldWay = 'Can be redeclared'; // Allowed but problematic

// let (modern - use for values that change)
let age = 25;
age = 26; // Can be reassigned
// let age = 30; // Error: Cannot redeclare

// const (modern - use for values that don't change)
const name = 'Alice';
// name = 'Bob'; // Error: Cannot reassign
const PI = 3.14159;

// Scope differences
{
  let blockScoped = 'Only inside this block';
  var functionScoped = 'Available outside block';
}
// console.log(blockScoped); // Error
console.log(functionScoped); // Works`},{heading:"Primitive Data Types",text:"JavaScript has 7 primitive data types that represent single values.",code:`// String - text data
let str = "Hello World";
let str2 = 'Single quotes work too';
let str3 = \`Template literal with \${str}\`;

// Number - integers and decimals
let integer = 42;
let decimal = 3.14;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;

// Boolean - true or false
let isActive = true;
let isCompleted = false;

// Null - intentional absence of value
let empty = null;

// Undefined - variable declared but not assigned
let notAssigned;
console.log(notAssigned); // undefined

// Symbol - unique identifier (ES6)
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false - always unique

// BigInt - large integers (ES2020)
let bigNumber = 9007199254740991n;
let anotherBig = BigInt(123456789);`},{heading:"Reference Data Types",text:"Reference types store collections of data or more complex entities.",code:`// Arrays - ordered list of values
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'two', true, null, { key: 'value' }];

// Objects - key-value pairs
let person = {
  name: 'Alice',
  age: 25,
  isStudent: true,
  hobbies: ['reading', 'coding']
};

// Functions - reusable blocks of code
function greet(name) {
  return 'Hello, ' + name;
}

// Checking types
console.log(typeof 'hello');        // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (JavaScript quirk)
console.log(typeof {});             // "object"
console.log(typeof []);             // "object"
console.log(typeof function(){});   // "function"
console.log(Array.isArray([]));     // true`}]},operators:{title:"Operators",description:"Learn about arithmetic, comparison, logical, and other operators in JavaScript.",sections:[{heading:"Arithmetic & Assignment Operators",code:`// Arithmetic operators
let a = 10;
let b = 3;

console.log(a + b);  // 13 - Addition
console.log(a - b);  // 7  - Subtraction
console.log(a * b);  // 30 - Multiplication
console.log(a / b);  // 3.333... - Division
console.log(a % b);  // 1  - Modulus (remainder)
console.log(a ** b); // 1000 - Exponentiation

// Increment and Decrement
let x = 5;
x++;      // x = 6 (post-increment)
++x;      // x = 7 (pre-increment)
x--;      // x = 6 (post-decrement)
--x;      // x = 5 (pre-decrement)

// Assignment operators
let num = 10;
num += 5;  // num = num + 5  →  15
num -= 3;  // num = num - 3  →  12
num *= 2;  // num = num * 2  →  24
num /= 4;  // num = num / 4  →  6
num %= 4;  // num = num % 4  →  2
num **= 3; // num = num ** 3 →  8`},{heading:"Comparison Operators",text:"Comparison operators return boolean values (true or false).",code:`// Equality operators
console.log(5 == '5');   // true  - loose equality (type coercion)
console.log(5 === '5');  // false - strict equality (no type coercion)
console.log(5 != '5');   // false - loose inequality
console.log(5 !== '5');  // true  - strict inequality

// ALWAYS use === and !== to avoid unexpected behavior

// Relational operators
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 5);    // false

// String comparison (alphabetical)
console.log('apple' < 'banana'); // true
console.log('Z' < 'a');          // true (uppercase comes first)`},{heading:"Logical Operators",text:"Logical operators are used to combine or invert boolean values.",code:`// AND (&&) - returns true if both are true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && false);  // false

// OR (||) - returns true if at least one is true
console.log(true || false);   // true
console.log(false || false);  // false

// NOT (!) - inverts boolean value
console.log(!true);           // false
console.log(!false);          // true

// Practical examples
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('Can drive');
}

const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log('No work today!');
}

// Short-circuit evaluation
const user = null;
const username = user && user.name; // undefined (doesn't error)
const defaultName = username || 'Guest'; // 'Guest'`},{heading:"Ternary Operator",text:"A shorthand for if-else statements. Syntax: condition ? valueIfTrue : valueIfFalse",code:`// Basic ternary
const age = 20;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // "Yes"

// Traditional if-else equivalent
let message;
if (age >= 18) {
  message = 'Adult';
} else {
  message = 'Minor';
}

// With ternary (cleaner)
const status = age >= 18 ? 'Adult' : 'Minor';

// Nested ternary (use sparingly - can be hard to read)
const score = 85;
const grade = score >= 90 ? 'A' :
              score >= 80 ? 'B' :
              score >= 70 ? 'C' :
              score >= 60 ? 'D' : 'F';

// Practical example
const isLoggedIn = true;
const greeting = isLoggedIn ? 'Welcome back!' : 'Please log in';
console.log(greeting);`}]},"control-flow":{title:"Control Flow",description:"Learn how to control the flow of your program with conditionals and loops.",sections:[{heading:"if, else if, else",code:`// Basic if statement
const age = 20;
if (age >= 18) {
  console.log('You are an adult');
}

// if-else
const temperature = 25;
if (temperature > 30) {
  console.log('It\\'s hot!');
} else {
  console.log('It\\'s not that hot');
}

// if-else if-else
const score = 85;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

// Multiple conditions
const hour = 14;
const isWeekend = false;

if (hour < 12 && !isWeekend) {
  console.log('Good morning, time to work!');
} else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good evening');
}`},{heading:"switch Statement",text:"Switch statements provide a cleaner way to handle multiple conditions based on a single value.",code:`// Basic switch
const day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Start of the work week');
    break;
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log('Midweek');
    break;
  case 'Friday':
    console.log('TGIF!');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
    break;
  default:
    console.log('Invalid day');
}

// Switch with return (in function)
function getSeasonMessage(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 'Winter';
    case 3:
    case 4:
    case 5:
      return 'Spring';
    case 6:
    case 7:
    case 8:
      return 'Summer';
    case 9:
    case 10:
    case 11:
      return 'Fall';
    default:
      return 'Invalid month';
  }
}`},{heading:"Loops: for, while, do...while",code:`// For loop
for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i);
}
// Output: 0, 1, 2, 3, 4

// Loop through array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loop - condition checked before execution
let count = 0;
while (count < 5) {
  console.log('Count:', count);
  count++;
}

// Do-while loop - executes at least once
let num = 0;
do {
  console.log('Number:', num);
  num++;
} while (num < 5);

// Loop control statements
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // Skip iteration when i is 3
  if (i === 7) break;     // Exit loop when i is 7
  console.log(i);         // Output: 0,1,2,4,5,6
}`},{heading:"Loop Helpers: forEach, for...in, for...of",code:`// forEach - iterate over array elements
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});

// for...in - iterate over object keys
const person = { name: 'Alice', age: 25, city: 'NYC' };
for (let key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// for...in with arrays (not recommended - use for...of)
const colors = ['red', 'green', 'blue'];
for (let index in colors) {
  console.log(\`\${index}: \${colors[index]}\`);
}

// for...of - iterate over iterable values (ES6)
for (let color of colors) {
  console.log(color);
}

// for...of with strings
const name = 'Alice';
for (let char of name) {
  console.log(char); // A, l, i, c, e
}

// for...of with Map
const map = new Map([['a', 1], ['b', 2]]);
for (let [key, value] of map) {
  console.log(\`\${key}: \${value}\`);
}`}]},functions:{title:"Functions",description:"Learn how to create reusable blocks of code with functions.",sections:[{heading:"Function Declaration vs Expression",code:`// Function Declaration (hoisted - can be called before definition)
console.log(greet('Alice')); // Works!

function greet(name) {
  return 'Hello, ' + name + '!';
}

// Function Expression (not hoisted)
// console.log(sayHi('Bob')); // Error: Cannot access before initialization

const sayHi = function(name) {
  return 'Hi, ' + name;
};

console.log(sayHi('Bob')); // Works!

// Named function expression
const multiply = function mult(a, b) {
  return a * b;
};

// Anonymous function (often used as callbacks)
setTimeout(function() {
  console.log('This runs after 1 second');
}, 1000);`},{heading:"Arrow Functions",text:"Arrow functions provide a shorter syntax and don't bind their own 'this'.",code:`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// Concise arrow function (implicit return)
const multiply = (a, b) => a * b;

// Single parameter (parentheses optional)
const square = x => x * x;
const greet = name => 'Hello, ' + name;

// No parameters
const sayHello = () => console.log('Hello!');

// Returning object literal (wrap in parentheses)
const makePerson = (name, age) => ({ name, age });

// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);`},{heading:"Parameters vs Arguments",text:"Parameters are variables in function definitions. Arguments are actual values passed to functions.",code:`// Parameters with default values
function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}

console.log(greet());                    // "Hello, Guest!"
console.log(greet('Alice'));             // "Hello, Alice!"
console.log(greet('Bob', 'Hi'));         // "Hi, Bob!"

// Rest parameters - collect remaining arguments into array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Mixing regular and rest parameters
function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]

// Arguments object (old way - use rest parameters instead)
function oldWay() {
  console.log(arguments); // array-like object
}`},{heading:"Return Values",code:`// Explicit return
function add(a, b) {
  return a + b;
  console.log('This never executes'); // Code after return is unreachable
}

// No return (returns undefined)
function sayHello(name) {
  console.log('Hello, ' + name);
  // implicit: return undefined;
}

const result = sayHello('Alice'); // Logs: "Hello, Alice"
console.log(result);               // undefined

// Early return (for validation)
function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

// Returning objects
function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      return 'Hello, I am ' + this.name;
    }
  };
}

// Returning functions (higher-order functions)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10`}]},arrays:{title:"Arrays",description:"Master array creation and essential array methods for manipulating lists of data.",sections:[{heading:"Creating Arrays",code:`// Array literal (most common)
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'two', true, null, { key: 'value' }, [1, 2]];

// Array constructor
const arr1 = new Array(3);           // [empty × 3]
const arr2 = new Array(1, 2, 3);     // [1, 2, 3]

// Array.from() - create from array-like or iterable
const str = 'hello';
const chars = Array.from(str);       // ['h', 'e', 'l', 'l', 'o']
const range = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]

// Array.of() - create from arguments
const arr3 = Array.of(7);            // [7]
const arr4 = Array.of(1, 2, 3);      // [1, 2, 3]

// Accessing elements
console.log(fruits[0]);              // "apple"
console.log(fruits[fruits.length - 1]); // "orange" (last element)
console.log(fruits.length);          // 3`},{heading:"Adding/Removing Elements: push, pop, shift, unshift",code:`const fruits = ['apple', 'banana'];

// push() - add to end (returns new length)
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// pop() - remove from end (returns removed element)
const last = fruits.pop();
console.log(last);   // 'orange'
console.log(fruits); // ['apple', 'banana']

// unshift() - add to beginning (returns new length)
fruits.unshift('mango');
console.log(fruits); // ['mango', 'apple', 'banana']

// shift() - remove from beginning (returns removed element)
const first = fruits.shift();
console.log(first);  // 'mango'
console.log(fruits); // ['apple', 'banana']

// splice() - add/remove at any position
const nums = [1, 2, 5, 6];
nums.splice(2, 0, 3, 4); // At index 2, remove 0, add 3, 4
console.log(nums); // [1, 2, 3, 4, 5, 6]

nums.splice(1, 2); // At index 1, remove 2 elements
console.log(nums); // [1, 4, 5, 6]`},{heading:"Array Methods: map, filter, reduce",code:`const numbers = [1, 2, 3, 4, 5];

// map() - transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const squares = numbers.map(n => n ** 2);
console.log(squares); // [1, 4, 9, 16, 25]

// filter() - keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

const greaterThan2 = numbers.filter(n => n > 2);
console.log(greaterThan2); // [3, 4, 5]

// reduce() - reduce array to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log(product); // 120

// Practical example: calculate average
const average = numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
console.log(average); // 3

// Chaining methods
const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4]
  .map(n => n * 3)           // [6, 12]
  .reduce((acc, n) => acc + n, 0); // 18
console.log(result);`},{heading:"Other Useful Methods: find, some, every, includes, indexOf",code:`const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];

// find() - returns first element that passes test
const found = numbers.find(n => n > 3);
console.log(found); // 4

// findIndex() - returns index of first match
const index = numbers.findIndex(n => n > 3);
console.log(index); // 3

// some() - returns true if at least one passes test
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

// every() - returns true if all pass test
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// includes() - check if array contains value
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape'));  // false
console.log(numbers.includes(3));       // true

// indexOf() - returns first index of value (-1 if not found)
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('grape'));  // -1

// lastIndexOf() - returns last index of value
const nums = [1, 2, 3, 2, 1];
console.log(nums.lastIndexOf(2)); // 3

// join() - create string from array
console.log(fruits.join(', ')); // "apple, banana, orange"

// reverse() - reverse array in place
fruits.reverse();
console.log(fruits); // ['orange', 'banana', 'apple']

// sort() - sort array in place
const sorted = [3, 1, 4, 1, 5].sort((a, b) => a - b);
console.log(sorted); // [1, 1, 3, 4, 5]`}]},objects:{title:"Objects",description:"Learn how to work with objects, JavaScript's fundamental data structure for storing key-value pairs.",sections:[{heading:"Object Literals",code:`// Creating objects
const person = {
  name: 'Alice',
  age: 25,
  city: 'New York',
  isStudent: true
};

// Nested objects
const user = {
  name: 'Bob',
  address: {
    street: '123 Main St',
    city: 'Boston',
    zipCode: '02101'
  },
  hobbies: ['reading', 'coding', 'gaming']
};

// Shorthand property names (ES6)
const name = 'Charlie';
const age = 30;
const personShorthand = { name, age }; // { name: 'Charlie', age: 30 }

// Computed property names
const key = 'favoriteColor';
const obj = {
  [key]: 'blue',
  ['user' + 'Name']: 'admin'
};
console.log(obj); // { favoriteColor: 'blue', userName: 'admin' }`},{heading:"Accessing Properties: Dot & Bracket Notation",code:`const person = {
  name: 'Alice',
  age: 25,
  'favorite color': 'blue', // Property with space
  job: 'developer'
};

// Dot notation (most common)
console.log(person.name);    // "Alice"
console.log(person.age);     // 25

// Bracket notation
console.log(person['name']); // "Alice"
console.log(person['favorite color']); // "blue" (required for spaces)

// Dynamic property access
const prop = 'job';
console.log(person[prop]);   // "developer"

// Accessing nested properties
const user = {
  name: 'Bob',
  address: {
    city: 'Boston'
  }
};

console.log(user.address.city);           // "Boston"
console.log(user['address']['city']);     // "Boston"

// Optional chaining (ES2020) - safe navigation
const value = user.address?.zipCode;      // undefined (no error)
const nested = user.contact?.email?.primary; // undefined

// Adding properties
person.email = 'alice@example.com';
person['phone'] = '555-1234';

// Modifying properties
person.age = 26;

// Deleting properties
delete person.job;`},{heading:"Object Methods",code:`// Methods - functions as object properties
const calculator = {
  add: function(a, b) {
    return a + b;
  },

  // Shorthand method syntax (ES6)
  subtract(a, b) {
    return a - b;
  },

  // Arrow function as method
  multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(3, 7));  // 21

// Object with state and methods
const counter = {
  count: 0,

  increment() {
    this.count++;
    return this.count;
  },

  decrement() {
    this.count--;
    return this.count;
  },

  reset() {
    this.count = 0;
  }
};

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset();     // count is now 0`},{heading:"this Keyword & JSON",code:`// 'this' refers to the object the method belongs to
const person = {
  name: 'Alice',
  age: 25,

  greet() {
    return 'Hello, I am ' + this.name;
  },

  getInfo() {
    return \`\${this.name} is \${this.age} years old\`;
  }
};

console.log(person.greet());    // "Hello, I am Alice"
console.log(person.getInfo());  // "Alice is 25 years old"

// JSON - JavaScript Object Notation
const user = {
  name: 'Bob',
  age: 30,
  hobbies: ['reading', 'coding']
};

// Convert object to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"Bob","age":30,"hobbies":["reading","coding"]}'

// Parse JSON string to object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "Bob"

// Pretty print JSON
const formatted = JSON.stringify(user, null, 2);
console.log(formatted);

// Object methods
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);      // ['a', 'b', 'c']
Object.values(obj);    // [1, 2, 3]
Object.entries(obj);   // [['a', 1], ['b', 2], ['c', 3]]

// Merge objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2 }`}]},dom:{title:"DOM (Document Object Model)",description:"Learn how to select and manipulate HTML elements dynamically with JavaScript.",sections:[{heading:"Selecting Elements: getElementById, querySelector, querySelectorAll",code:`// getElementById - select by ID
const header = document.getElementById('header');

// getElementsByClassName - returns HTMLCollection (live)
const buttons = document.getElementsByClassName('btn');

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName('p');

// querySelector - returns first match (CSS selector)
const firstButton = document.querySelector('.btn');
const mainDiv = document.querySelector('#main');
const firstP = document.querySelector('p');

// querySelectorAll - returns NodeList (static)
const allButtons = document.querySelectorAll('.btn');
const allDivs = document.querySelectorAll('div');

// Complex CSS selectors
const specific = document.querySelector('.container .item:first-child');
const inputs = document.querySelectorAll('input[type="text"]');

// Converting NodeList/HTMLCollection to Array
const buttonsArray = Array.from(buttons);
const divsArray = [...allDivs];

// Iterating over selections
allButtons.forEach(button => {
  console.log(button.textContent);
});`},{heading:"Changing Content & Styles: innerHTML, textContent, style",code:`const element = document.querySelector('#myElement');

// Change text content (safer - doesn't parse HTML)
element.textContent = 'New text content';

// Change HTML content (can parse HTML)
element.innerHTML = '<strong>Bold text</strong>';

// Security warning: Be careful with user input!
// Don't do: element.innerHTML = userInput; // XSS vulnerability

// Change inline styles
element.style.color = 'blue';
element.style.fontSize = '20px';
element.style.backgroundColor = '#f0f0f0';
element.style.border = '2px solid red';

// Change multiple styles
Object.assign(element.style, {
  color: 'white',
  backgroundColor: 'navy',
  padding: '10px',
  borderRadius: '5px'
});

// Get computed styles
const styles = window.getComputedStyle(element);
console.log(styles.color);
console.log(styles.fontSize);

// Change attributes
element.setAttribute('data-id', '123');
element.setAttribute('title', 'Hover text');
element.id = 'newId';
element.className = 'new-class';

// Get attributes
const id = element.getAttribute('data-id');
const title = element.getAttribute('title');`},{heading:"Adding/Removing Elements: createElement, append, remove",code:`// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div';
newDiv.className = 'box';
newDiv.id = 'myBox';

// Create and add multiple elements
const list = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
  const li = document.createElement('li');
  li.textContent = \`Item \${i}\`;
  list.appendChild(li);
}

// Adding elements to DOM
const container = document.querySelector('#container');

container.appendChild(newDiv);     // Add to end
container.append(list);            // Add to end (can add multiple)
container.prepend(newDiv);         // Add to beginning
container.before(newDiv);          // Add before container
container.after(newDiv);           // Add after container

// insertBefore (older method)
const referenceNode = container.firstChild;
container.insertBefore(newDiv, referenceNode);

// Removing elements
newDiv.remove();                   // Remove element
container.removeChild(newDiv);     // Remove child (older)

// Replace element
const newElement = document.createElement('p');
newElement.textContent = 'Replacement';
container.replaceChild(newElement, list);

// Clone element
const clone = newDiv.cloneNode(true); // true = deep clone (with children)
container.appendChild(clone);`},{heading:"Working with Classes: classList.add/remove/toggle",code:`const element = document.querySelector('.box');

// Add class
element.classList.add('active');
element.classList.add('highlight', 'featured'); // Add multiple

// Remove class
element.classList.remove('active');
element.classList.remove('highlight', 'featured');

// Toggle class (add if absent, remove if present)
element.classList.toggle('hidden');

// Toggle with condition
element.classList.toggle('active', true);  // Always add
element.classList.toggle('active', false); // Always remove

// Check if class exists
if (element.classList.contains('active')) {
  console.log('Element is active');
}

// Replace class
element.classList.replace('old-class', 'new-class');

// Get all classes as string
console.log(element.className); // "box active highlight"

// Iterate over classes
element.classList.forEach(cls => {
  console.log(cls);
});

// Practical example: toggle menu
const menuButton = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.classList.toggle('active');
});`}]},events:{title:"Events",description:"Learn how to respond to user interactions like clicks, keyboard input, and mouse movements.",sections:[{heading:"onclick & addEventListener",code:`// Method 1: Inline onclick (not recommended)
// <button onclick="handleClick()">Click me</button>

// Method 2: DOM property (can only assign one handler)
const button1 = document.querySelector('#btn1');
button1.onclick = function() {
  console.log('Button clicked!');
};

// Method 3: addEventListener (best practice - can add multiple)
const button2 = document.querySelector('#btn2');

button2.addEventListener('click', function() {
  console.log('First handler');
});

button2.addEventListener('click', function() {
  console.log('Second handler');
});

// Arrow function as handler
button2.addEventListener('click', () => {
  console.log('Arrow function handler');
});

// Remove event listener
function handleClick() {
  console.log('Clicked!');
}

button2.addEventListener('click', handleClick);
button2.removeEventListener('click', handleClick); // Must use same function reference`},{heading:"Keyboard & Mouse Events",code:`// Keyboard events
const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
  console.log('Key pressed:', e.key);
  console.log('Key code:', e.code);
});

input.addEventListener('keyup', (e) => {
  console.log('Key released:', e.key);
});

input.addEventListener('keypress', (e) => {
  console.log('Key press:', e.key); // Deprecated, use keydown
});

// Detect specific keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log('Enter pressed');
  }
  if (e.key === 'Escape') {
    console.log('Escape pressed');
  }
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('Ctrl+S pressed');
  }
});

// Mouse events
const box = document.querySelector('.box');

box.addEventListener('click', () => {
  console.log('Single click');
});

box.addEventListener('dblclick', () => {
  console.log('Double click');
});

box.addEventListener('mousedown', () => {
  console.log('Mouse button pressed');
});

box.addEventListener('mouseup', () => {
  console.log('Mouse button released');
});

box.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
});

box.addEventListener('mouseleave', () => {
  console.log('Mouse left');
});

box.addEventListener('mousemove', (e) => {
  console.log(\`Mouse position: \${e.clientX}, \${e.clientY}\`);
});

// Other useful events
input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input blurred'));
input.addEventListener('change', () => console.log('Input changed'));
input.addEventListener('input', () => console.log('Input value changing'));

window.addEventListener('scroll', () => console.log('Page scrolling'));
window.addEventListener('resize', () => console.log('Window resized'));`},{heading:"Event Object & event.target",code:`// Event object provides details about the event
button.addEventListener('click', function(event) {
  // Event properties
  console.log('Event type:', event.type);           // "click"
  console.log('Target element:', event.target);     // The clicked element
  console.log('Current target:', event.currentTarget); // Element with listener
  console.log('Timestamp:', event.timeStamp);

  // Mouse event properties
  console.log('Mouse X:', event.clientX);
  console.log('Mouse Y:', event.clientY);
  console.log('Mouse page X:', event.pageX);
  console.log('Mouse page Y:', event.pageY);

  // Keyboard modifiers
  console.log('Ctrl key:', event.ctrlKey);
  console.log('Shift key:', event.shiftKey);
  console.log('Alt key:', event.altKey);
});

// event.target - element that triggered event
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});

// Prevent default behavior
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
  e.preventDefault(); // Don't follow link
  console.log('Link clicked but not followed');
});

// Stop event propagation (bubbling)
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

child.addEventListener('click', (e) => {
  e.stopPropagation(); // Don't trigger parent's handler
  console.log('Child clicked');
});

parent.addEventListener('click', () => {
  console.log('Parent clicked'); // Won't fire if child is clicked
});

// Event delegation - attach listener to parent
document.querySelector('#list').addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    console.log('Item clicked:', e.target.textContent);
  }
});`}]},timers:{title:"Timers",description:"Learn how to execute code after a delay or repeatedly with setTimeout and setInterval.",sections:[{heading:"setTimeout - Execute Once After Delay",code:`// Basic setTimeout - executes once after delay
setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

// setTimeout with function reference
function greet() {
  console.log('Hello!');
}
setTimeout(greet, 1000);

// setTimeout with parameters
function sayHello(name, greeting) {
  console.log(\`\${greeting}, \${name}!\`);
}
setTimeout(sayHello, 1500, 'Alice', 'Hi');

// Storing timeout ID
const timeoutId = setTimeout(() => {
  console.log('This might not run');
}, 3000);

// Cancel timeout before it executes
clearTimeout(timeoutId);

// Practical example: delayed message
const showMessage = (message, delay) => {
  return setTimeout(() => {
    console.log(message);
  }, delay);
};

const msgTimeout = showMessage('Loading complete!', 2000);

// Cancel if needed
// clearTimeout(msgTimeout);`},{heading:"setInterval - Execute Repeatedly",code:`// Basic setInterval - executes repeatedly
const intervalId = setInterval(() => {
  console.log('This runs every 2 seconds');
}, 2000);

// Stop interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval stopped');
}, 10000);

// Countdown timer example
let count = 10;
const countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log('Countdown finished!');
  }
}, 1000);

// Clock example
function displayTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  console.log(time);
}

const clock = setInterval(displayTime, 1000);

// Stop clock after 30 seconds
setTimeout(() => clearInterval(clock), 30000);

// setInterval with parameters
const interval = setInterval((name) => {
  console.log(\`Hello, \${name}!\`);
}, 2000, 'Alice');`},{heading:"Clearing Timers & Best Practices",code:`// Store timer IDs for cleanup
const timers = [];

// Add timers to array
timers.push(setTimeout(() => console.log('Timer 1'), 1000));
timers.push(setTimeout(() => console.log('Timer 2'), 2000));
timers.push(setInterval(() => console.log('Interval'), 500));

// Clear all timers
function clearAllTimers() {
  timers.forEach(timer => {
    clearTimeout(timer);  // Works for both timeout and interval
    clearInterval(timer);
  });
  timers.length = 0; // Empty array
}

// Call when component unmounts or page unloads
window.addEventListener('beforeunload', clearAllTimers);

// Alternative: Use one timeout to schedule next execution
function recurringTask() {
  console.log('Task executed');

  // Schedule next execution
  setTimeout(recurringTask, 1000);
}

// Start the task
recurringTask();

// Best practices
// 1. Always store timer IDs if you need to cancel them
// 2. Clear timers when they're no longer needed
// 3. Be careful with setInterval - prefer setTimeout for complex tasks
// 4. Remember that timers are not guaranteed to execute exactly on time

// requestAnimationFrame (better for animations)
function animate() {
  // Animation code here
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);`}]},storage:{title:"Web Storage",description:"Learn how to store data in the browser using localStorage and sessionStorage.",sections:[{heading:"localStorage - Persistent Storage",text:"localStorage persists data even after closing the browser. Data has no expiration time.",code:`// Store data (string values only)
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');
localStorage.setItem('count', '42');

// Retrieve data
const username = localStorage.getItem('username');
console.log(username); // "Alice"

const theme = localStorage.getItem('theme');
console.log(theme); // "dark"

// Check if key exists
if (localStorage.getItem('username') !== null) {
  console.log('Username exists');
}

// Remove specific item
localStorage.removeItem('count');

// Clear all data
localStorage.clear();

// Get number of items
console.log(localStorage.length);

// Get key by index
const firstKey = localStorage.key(0);

// Iterate over all items
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(\`\${key}: \${value}\`);
}`},{heading:"sessionStorage - Temporary Storage",text:"sessionStorage persists only for the current session (tab). Data is cleared when tab is closed.",code:`// Same API as localStorage
sessionStorage.setItem('temp', 'data');
const tempData = sessionStorage.getItem('temp');
sessionStorage.removeItem('temp');
sessionStorage.clear();

// Practical example: form data persistence
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');

// Save on input
nameInput.addEventListener('input', () => {
  sessionStorage.setItem('formName', nameInput.value);
});

// Restore on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedName = sessionStorage.getItem('formName');
  if (savedName) {
    nameInput.value = savedName;
  }
});

// Clear on form submit
form.addEventListener('submit', () => {
  sessionStorage.removeItem('formName');
});`},{heading:"JSON.stringify() & JSON.parse() for Objects",text:"Storage APIs only accept strings. Use JSON to store objects and arrays.",code:`// Storing objects
const user = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'coding']
};

// Convert to JSON string before storing
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse back to object
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);    // "Alice"
console.log(storedUser.hobbies); // ['reading', 'coding']

// Storing arrays
const todos = [
  { id: 1, text: 'Learn JavaScript', done: false },
  { id: 2, text: 'Build a project', done: false }
];

localStorage.setItem('todos', JSON.stringify(todos));

// Retrieve array
const storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(storedTodos);

// Helper functions
const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  }
};

// Usage
storage.set('user', { name: 'Bob', age: 30 });
const userData = storage.get('user');
storage.remove('user');

// Practical example: Settings
const defaultSettings = {
  theme: 'light',
  fontSize: 16,
  notifications: true
};

function loadSettings() {
  const saved = localStorage.getItem('settings');
  return saved ? JSON.parse(saved) : defaultSettings;
}

function saveSettings(settings) {
  localStorage.setItem('settings', JSON.stringify(settings));
}

const settings = loadSettings();
console.log(settings.theme);`}]},async:{title:"Asynchronous JavaScript",description:"Understand callbacks, promises, and async/await for handling asynchronous operations.",sections:[{heading:"Callbacks",text:"A callback is a function passed as an argument to another function, to be executed later.",code:`// Simple callback example
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'Alice' };
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log('Data received:', result);
});

// Callback with error handling
function getData(callback) {
  setTimeout(() => {
    const error = null;
    const data = { user: 'Bob' };

    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  }, 1000);
}

getData((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success:', data);
  }
});

// Callback hell - nested callbacks (hard to read!)
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log('All data loaded');
    });
  });
});`},{heading:"Promises (.then, .catch)",text:"Promises provide a cleaner way to handle asynchronous operations.",code:`// Creating a promise
const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ id: 1, name: 'Alice' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
};

// Using promises with .then and .catch
fetchUserData()
  .then(data => {
    console.log('User data:', data);
    return data.id;
  })
  .then(id => {
    console.log('User ID:', id);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Promise completed');
  });

// Promise chaining
function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: 'Bob' }), 500);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' }
    ]), 500);
  });
}

getUser(1)
  .then(user => {
    console.log('User:', user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });`},{heading:"async / await",text:"Async/await makes asynchronous code look and behave more like synchronous code.",code:`// Async function - always returns a promise
async function getUserData() {
  return { id: 1, name: 'Alice' };
}

getUserData().then(data => console.log(data));

// Using await - pauses execution until promise resolves
async function fetchData() {
  try {
    const user = await fetchUserData();
    console.log('User:', user);

    const posts = await getPosts(user.id);
    console.log('Posts:', posts);

    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call async function
fetchData();

// Async arrow function
const getData = async () => {
  const data = await fetchUserData();
  return data;
};

// Multiple await calls
async function loadAllData() {
  const user = await getUser(1);
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);

  return { user, posts, comments };
}

// Parallel execution with Promise.all
async function loadDataParallel() {
  const [users, posts, comments] = await Promise.all([
    getUsers(),
    getPosts(),
    getComments()
  ]);

  return { users, posts, comments };
}

// Error handling with try-catch
async function safeDataFetch() {
  try {
    const data = await fetchUserData();
    return data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    return null;
  }
}

// Top-level await (modern browsers)
const data = await fetchUserData();
console.log(data);`}]},fetch:{title:"Fetch API & AJAX",description:"Learn how to make HTTP requests to APIs and display dynamic data on web pages.",sections:[{heading:"fetch() to Call APIs",code:`// Basic GET request
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log('Users:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// With async/await (cleaner)
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// POST request - sending data
async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage
createUser({ name: 'Alice', email: 'alice@example.com' });

// PUT request - update data
async function updateUser(id, updates) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  return response.json();
}

// DELETE request
async function deleteUser(id) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'DELETE'
  });
  return response.ok;
}`},{heading:"Handling Responses (JSON)",code:`// Check response status
async function fetchData() {
  const response = await fetch('https://api.example.com/data');

  if (!response.ok) {
    throw new Error(\`HTTP error! Status: \${response.status}\`);
  }

  const data = await response.json();
  return data;
}

// Different response types
async function handleResponse() {
  const response = await fetch('https://api.example.com/data');

  // JSON
  const json = await response.json();

  // Text
  const text = await response.text();

  // Blob (for files/images)
  const blob = await response.blob();

  // FormData
  const formData = await response.formData();
}

// Checking content type
async function smartFetch(url) {
  const response = await fetch(url);
  const contentType = response.headers.get('content-type');

  if (contentType.includes('application/json')) {
    return response.json();
  } else if (contentType.includes('text/')) {
    return response.text();
  } else {
    return response.blob();
  }
}

// Headers
const headers = new Headers();
headers.append('Authorization', 'Bearer token123');
headers.append('Content-Type', 'application/json');

fetch('https://api.example.com/protected', { headers });`},{heading:"Display Data Dynamically on Webpage",code:`// Fetch and display users
async function displayUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const container = document.querySelector('#users');

    users.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user-card';
      div.innerHTML = \`
        <h3>\${user.name}</h3>
        <p>Email: \${user.email}</p>
        <p>Phone: \${user.phone}</p>
      \`;
      container.appendChild(div);
    });
  } catch (error) {
    console.error('Error loading users:', error);
  }
}

// Call when page loads
displayUsers();

// Complete example: Todo list
async function loadTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  const list = document.querySelector('#todo-list');

  todos.slice(0, 10).forEach(todo => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = \`
      <input type="checkbox" \${todo.completed ? 'checked' : ''}>
      <span>\${todo.title}</span>
    \`;
    list.appendChild(li);
  });
}

// Search functionality
async function searchUsers(query) {
  const response = await fetch('https://api.example.com/users?q=' + query);
  const users = await response.json();

  displaySearchResults(users);
}

// Loading states
async function fetchWithLoading() {
  const loader = document.querySelector('#loader');
  const content = document.querySelector('#content');

  loader.style.display = 'block';
  content.style.display = 'none';

  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    content.innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    content.innerHTML = 'Error loading data';
  } finally {
    loader.style.display = 'none';
    content.style.display = 'block';
  }
}`}]},es6:{title:"ES6+ Modern Features",description:"Master modern JavaScript features introduced in ES6 and beyond.",sections:[{heading:"let, const, arrow functions",code:`// Already covered in variables and functions sections
// Quick recap:

// let - block-scoped, can reassign
let count = 0;
count = 1;

// const - block-scoped, cannot reassign
const name = 'Alice';
// name = 'Bob'; // Error

// Arrow functions - concise syntax
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => console.log('Hello!');`},{heading:"Destructuring (arrays & objects)",code:`// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Skip elements
const [r, , b] = colors;
console.log(r, b); // "red" "blue"

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Default values
const [a, b, c = 'default'] = ['first', 'second'];
console.log(c); // "default"

// Object destructuring
const person = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age } = person;
console.log(name, age); // "Alice" 25

// Rename variables
const { name: userName, age: userAge } = person;
console.log(userName); // "Alice"

// Default values
const { country = 'USA' } = person;
console.log(country); // "USA"

// Nested destructuring
const user = {
  id: 1,
  profile: {
    name: 'Bob',
    address: {
      city: 'Boston'
    }
  }
};

const { profile: { name: profileName, address: { city } } } = user;
console.log(profileName, city); // "Bob" "Boston"

// Function parameter destructuring
function greet({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}

greet({ name: 'Charlie', age: 30 });`},{heading:"Spread (...) & Rest parameters",code:`// Spread operator - expand arrays/objects

// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const original = [1, 2, 3];
const copy = [...original];

// Array to function arguments
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Copy object
const person = { name: 'Alice', age: 25 };
const clone = { ...person };

// Override properties
const updated = { ...person, age: 26 };
console.log(updated); // { name: 'Alice', age: 26 }

// Rest parameters - collect arguments into array
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Mix regular and rest parameters
function greet(greeting, ...names) {
  names.forEach(name => {
    console.log(\`\${greeting}, \${name}!\`);
  });
}

greet('Hello', 'Alice', 'Bob', 'Charlie');`},{heading:"Template Literals & Modules",code:`// Template literals - string interpolation
const name = 'Alice';
const age = 25;
const message = \`My name is \${name} and I am \${age} years old\`;

// Multi-line strings
const html = \`
  <div class="user">
    <h2>\${name}</h2>
    <p>Age: \${age}</p>
  </div>
\`;

// Expression interpolation
const price = 19.99;
const total = \`Total: $\${(price * 1.1).toFixed(2)}\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}

const user = 'Alice';
const highlighted = highlight\`Welcome, \${user}!\`;

// ES6 Modules (import/export)

// Exporting (math.js)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export default function multiply(a, b) {
  return a * b;
}

// Importing (app.js)
import multiply from './math.js';
import { add, subtract } from './math.js';
import * as math from './math.js';

// Use imports
console.log(add(5, 3));
console.log(multiply(4, 2));
console.log(math.subtract(10, 4));`}]},errors:{title:"Error Handling",description:"Learn how to handle errors gracefully with try-catch and throw custom errors.",sections:[{heading:"try, catch, finally",code:`// Basic try-catch
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}

// try-catch-finally
try {
  const data = JSON.parse(userInput);
  processData(data);
} catch (error) {
  console.error('Failed to parse:', error);
} finally {
  console.log('This always runs');
}

// Practical example: Safe JSON parsing
function safeJsonParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Invalid JSON:', error.message);
    return null;
  }
}

const data = safeJsonParse('{"name": "Alice"}');
console.log(data);

// Async error handling
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  } finally {
    console.log('Request completed');
  }
}

// Nested try-catch
try {
  try {
    throw new Error('Inner error');
  } catch (innerError) {
    console.log('Caught inner:', innerError.message);
    throw new Error('Outer error');
  }
} catch (outerError) {
  console.log('Caught outer:', outerError.message);
}`},{heading:"Throwing Custom Errors",code:`// Throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}

// Custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NetworkError extends Error {
  constructor(statusCode) {
    super(\`Network error: \${statusCode}\`);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

// Using custom errors
function validateUser(user) {
  if (!user.name) {
    throw new ValidationError('Name is required');
  }
  if (!user.email) {
    throw new ValidationError('Email is required');
  }
}

try {
  validateUser({ name: '' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation failed:', error.message);
  } else {
    console.log('Unexpected error:', error);
  }
}

// Error with data
class AppError extends Error {
  constructor(message, code, data) {
    super(message);
    this.code = code;
    this.data = data;
  }
}

function processPayment(amount) {
  if (amount < 0) {
    throw new AppError(
      'Invalid amount',
      'INVALID_AMOUNT',
      { amount, min: 0 }
    );
  }
}`}]},oop:{title:"OOP (Object Oriented Programming)",description:"Learn classes, constructors, inheritance, and encapsulation in JavaScript.",sections:[{heading:"Classes (class syntax)",code:`// ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, I'm \${this.name}\`;
  }

  getInfo() {
    return \`\${this.name} is \${this.age} years old\`;
  }
}

// Create instance
const person = new Person('Alice', 25);
console.log(person.greet());    // "Hello, I'm Alice"
console.log(person.getInfo());  // "Alice is 25 years old"

// Getters and Setters
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
}

const user = new User('John', 'Doe');
console.log(user.fullName);   // "John Doe"
user.fullName = 'Jane Smith';
console.log(user.firstName);  // "Jane"

// Static methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static PI = 3.14159;
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.PI);        // 3.14159`},{heading:"Constructor Functions (Old Way)",code:`// Constructor function (pre-ES6)
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    return 'Hello, I am ' + this.name;
  };
}

const person1 = new Person('Bob', 30);
console.log(person1.greet());

// Adding methods to prototype (more efficient)
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + ' makes a sound';
};

const dog = new Animal('Dog');
console.log(dog.speak()); // "Dog makes a sound"

// Check instance
console.log(person1 instanceof Person); // true
console.log(dog instanceof Animal);     // true`},{heading:"Inheritance (extends)",code:`// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Child class - extends parent
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  // Override parent method
  speak() {
    return \`\${this.name} barks\`;
  }

  // New method
  fetch() {
    return \`\${this.name} is fetching\`;
  }
}

const dog = new Dog('Max', 'Golden Retriever');
console.log(dog.speak());  // "Max barks"
console.log(dog.fetch());  // "Max is fetching"
console.log(dog.breed);    // "Golden Retriever"

// Multiple levels of inheritance
class Puppy extends Dog {
  constructor(name, breed, age) {
    super(name, breed);
    this.age = age;
  }

  speak() {
    return \`\${this.name} yips\`;
  }
}

const puppy = new Puppy('Buddy', 'Labrador', 1);
console.log(puppy.speak()); // "Buddy yips"`},{heading:"Encapsulation Basics (Private Fields)",code:`// Private fields with # (ES2022)
class BankAccount {
  #balance = 0;  // Private field

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }

  // Private method
  #calculateInterest() {
    return this.#balance * 0.05;
  }

  addInterest() {
    const interest = this.#calculateInterest();
    this.#balance += interest;
  }
}

const account = new BankAccount('Alice', 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance);  // Error: Private field

// Old way: using closures for privacy
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount());  // 1
// console.log(counter.count);    // undefined (private)`}]},apis:{title:"Important Browser APIs",description:"Explore useful browser APIs like Geolocation and Clipboard for enhanced functionality.",sections:[{heading:"DOM & Events APIs (Already Covered)",text:"DOM API and Events API were covered in previous sections. They allow you to manipulate HTML elements and respond to user interactions."},{heading:"Geolocation API",code:`// Check if geolocation is supported
if ('geolocation' in navigator) {
  console.log('Geolocation is available');
} else {
  console.log('Geolocation is not supported');
}

// Get current position (one-time)
navigator.geolocation.getCurrentPosition(
  // Success callback
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    console.log(\`Latitude: \${lat}\`);
    console.log(\`Longitude: \${lon}\`);
    console.log(\`Accuracy: \${accuracy} meters\`);
  },
  // Error callback
  (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log('User denied geolocation');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Position unavailable');
        break;
      case error.TIMEOUT:
        console.log('Request timeout');
        break;
    }
  },
  // Options
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
);

// Watch position (continuous updates)
const watchId = navigator.geolocation.watchPosition(
  (position) => {
    console.log('Position updated:', position.coords);
  },
  (error) => {
    console.error('Error:', error);
  }
);

// Stop watching
navigator.geolocation.clearWatch(watchId);

// Practical example: Show location on map
function showLocation() {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    const mapUrl = \`https://maps.google.com/?q=\${latitude},\${longitude}\`;
    window.open(mapUrl, '_blank');
  });
}`},{heading:"Clipboard API (copy/paste)",code:`// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied!');
  } catch (error) {
    console.error('Failed to copy:', error);
  }
}

// Usage
copyToClipboard('Hello, World!');

// Copy button example
const button = document.querySelector('#copy-btn');
const textInput = document.querySelector('#text-input');

button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textInput.value);
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 2000);
  } catch (error) {
    console.error('Copy failed:', error);
  }
});

// Read from clipboard
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Pasted text:', text);
    return text;
  } catch (error) {
    console.error('Failed to read clipboard:', error);
  }
}

// Paste button example
const pasteBtn = document.querySelector('#paste-btn');
const output = document.querySelector('#output');

pasteBtn.addEventListener('click', async () => {
  const text = await pasteFromClipboard();
  if (text) {
    output.textContent = text;
  }
});

// Fallback for older browsers
function copyTextFallback(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    console.log('Text copied (fallback)');
  } catch (error) {
    console.error('Copy failed:', error);
  }

  document.body.removeChild(textarea);
}`},{heading:"Other Useful APIs",code:`// Web Storage API (covered in Storage section)
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');

// Console API (covered in Basics section)
console.log(), console.error(), console.warn(), console.table()

// History API - navigate browser history
history.back();     // Go back
history.forward();  // Go forward
history.go(-2);     // Go back 2 pages

// Notification API
if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Hello!', {
        body: 'This is a notification',
        icon: '/icon.png'
      });
    }
  });
}

// IntersectionObserver - detect element visibility
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible');
    }
  });
});

observer.observe(document.querySelector('.element'));

// Page Visibility API
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
});`}]},tools:{title:"Useful Tools & Package Managers",description:"Learn about developer tools, npm, and modern JavaScript build tools.",sections:[{heading:"Console & Debugging in Browser DevTools",text:"Browser DevTools are essential for debugging JavaScript code.",points:["Console: View logs, errors, warnings and execute JavaScript","Debugger: Set breakpoints, step through code, inspect variables","Network: Monitor HTTP requests, responses, and timing","Elements: Inspect and modify DOM and CSS in real-time","Sources: View and debug source files","Performance: Analyze runtime performance","Application: View localStorage, sessionStorage, cookies, etc."],code:`// Console methods
console.log('Info message');
console.error('Error message');
console.warn('Warning message');
console.table([{a: 1, b: 2}, {a: 3, b: 4}]);
console.group('Group');
console.log('Item 1');
console.log('Item 2');
console.groupEnd();
console.time('timer');
// ... some code
console.timeEnd('timer');

// Debugger statement
function buggyFunction() {
  const x = 10;
  debugger; // Execution pauses here when DevTools is open
  const y = x * 2;
  return y;
}

// Breakpoints: Click line number in Sources tab

// Console commands:
// $0 - Currently selected element in Elements tab
// $_ - Result of last expression
// $$('selector') - querySelectorAll shorthand
// copy(object) - Copy to clipboard`},{heading:"npm (Node Package Manager)",text:"npm is the package manager for JavaScript, allowing you to install and manage dependencies.",code:`// Initialize new project
npm init
npm init -y  // Skip questions

// Install packages
npm install package-name        // Save to dependencies
npm install package-name --save-dev  // Save to devDependencies
npm install -g package-name     // Install globally

// Install from package.json
npm install

// Uninstall packages
npm uninstall package-name

// Update packages
npm update package-name
npm update  // Update all

// Run scripts from package.json
npm run script-name
npm start   // Runs "start" script
npm test    // Runs "test" script

// Check outdated packages
npm outdated

// List installed packages
npm list
npm list --depth=0  // Top-level only

// package.json example
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0",
    "jest": "^29.0.0"
  }
}`},{heading:"Bundlers (Webpack, Vite, Parcel)",text:"Modern build tools bundle and optimize JavaScript, CSS, and assets for production.",code:`// Vite (fastest, recommended for new projects)
// Create new project
npm create vite@latest my-app
cd my-app
npm install
npm run dev      // Development server
npm run build    // Production build

// vite.config.js
export default {
  root: './src',
  build: {
    outDir: '../dist'
  }
};

// Webpack (most popular, highly configurable)
// Install
npm install webpack webpack-cli --save-dev

// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

// Parcel (zero config)
npm install parcel --save-dev
npx parcel index.html  // Dev server
npx parcel build index.html  // Build

// Why use bundlers?
// - Module bundling (combine multiple files)
// - Code splitting (load code on demand)
// - Transpilation (ES6+ to ES5)
// - Minification (reduce file size)
// - Hot Module Replacement (update without refresh)
// - Asset optimization (images, fonts, etc.)`}]}}[i];return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"⚡ JavaScript Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master JavaScript from fundamentals to advanced concepts. Learn the language that powers the modern web."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(g=>n.jsxs("button",{onClick:()=>m(g.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===g.id?"bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-xl",children:g.icon}),n.jsx("span",{className:"text-sm",children:g.label})]},g.id))})}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:d.title}),n.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:d.description})]}),n.jsx("div",{className:"space-y-8",children:d.sections.map((g,S)=>n.jsxs("div",{className:"border-l-4 border-yellow-500 pl-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:g.heading}),g.text&&n.jsx("p",{className:"text-gray-700 mb-4 leading-relaxed",children:g.text}),g.points&&n.jsx("ul",{className:"space-y-2 mb-4",children:g.points.map((T,v)=>n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-yellow-600 mt-1",children:"▸"}),n.jsx("span",{className:"text-gray-700",children:T})]},v))}),g.code&&n.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto",children:n.jsx("pre",{className:"text-sm",children:n.jsx("code",{children:g.code})})})]},S))}),n.jsxs("div",{className:"mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 text-center",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Ready to Master JavaScript? 🚀"}),n.jsx("p",{className:"text-gray-700 mb-6 max-w-2xl mx-auto",children:"Practice these concepts, build projects, and become proficient in the language that powers the web!"})]})]})]})]})},Hx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"🚀"},{id:"setup",label:"Project Setup",icon:"📦"},{id:"jsx",label:"JSX",icon:"✨"},{id:"components",label:"Components",icon:"🧩"},{id:"useState",label:"useState",icon:"🎛️"},{id:"lifecycle",label:"Lifecycle & useEffect",icon:"🔄"},{id:"events",label:"Event Handling",icon:"🖱️"},{id:"conditional",label:"Conditional Rendering",icon:"🔀"},{id:"lists",label:"Lists & Keys",icon:"📝"},{id:"forms",label:"Forms",icon:"📋"},{id:"hooks",label:"All Hooks",icon:"🪝"},{id:"context",label:"Context API",icon:"🌍"},{id:"routing",label:"React Router",icon:"🛣️"},{id:"api",label:"API Calls",icon:"🌐"},{id:"state",label:"State Libraries",icon:"📚"},{id:"styling",label:"Styling",icon:"🎨"},{id:"performance",label:"Performance",icon:"⚡"},{id:"testing",label:"Testing",icon:"🧪"},{id:"deployment",label:"Deployment",icon:"🚀"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to React"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Meta and a community of developers. React makes it painless to create interactive UIs."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Choose React?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Component-Based Architecture"}),n.jsx("li",{children:"Virtual DOM for better performance"}),n.jsx("li",{children:"Declarative views make your code predictable"}),n.jsx("li",{children:"Large ecosystem and community support"}),n.jsx("li",{children:"Learn once, write anywhere (Web, Mobile, Desktop)"}),n.jsx("li",{children:"Backed by Meta (Facebook)"})]})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Your First React Component"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"JSX - JavaScript XML"}),n.jsx("p",{className:"text-gray-700 mb-3",children:"JSX is a syntax extension for JavaScript that looks similar to HTML. It describes what the UI should look like."}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const element = <h1>Hello, world!</h1>;

// JSX with expressions
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

// JSX with attributes
const element = <img src={user.avatarUrl} alt={user.name} />;`})]})]});case"setup":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Project Setup & Structure"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn how to set up a React project using modern tools and understand the project structure."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating React App with Vite (Recommended)"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`# Create a new React project with Vite
npm create vite@latest my-react-app -- --template react

# Navigate to project directory
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build`}),n.jsxs("p",{className:"text-gray-700 mt-3",children:[n.jsx("strong",{children:"Why Vite?"})," Lightning-fast HMR (Hot Module Replacement), faster build times, and modern development experience."]})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Create React App (CRA) - Legacy Method"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`# Create a new React project with CRA
npx create-react-app my-app

# Navigate to project directory
cd my-app

# Start development server
npm start

# Build for production
npm run build`}),n.jsx("p",{className:"text-gray-700 mt-3",children:"Note: CRA is no longer recommended by the React team. Use Vite or Next.js instead."})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Typical React Project Structure"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`my-react-app/
├── node_modules/          # Dependencies
├── public/                # Static assets
│   ├── index.html
│   └── favicon.ico
├── src/                   # Source code
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable components
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   └── Card.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── hooks/            # Custom hooks
│   │   └── useAuth.js
│   ├── context/          # Context providers
│   │   └── AuthContext.jsx
│   ├── utils/            # Utility functions
│   │   └── helpers.js
│   ├── services/         # API calls
│   │   └── api.js
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json          # Project configuration
└── vite.config.js        # Vite configuration`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Understanding package.json"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",              // Start dev server
    "build": "vite build",       // Build for production
    "preview": "vite preview"    // Preview production build
  },
  "dependencies": {
    "react": "^18.3.1",          // React library
    "react-dom": "^18.3.1"       // React DOM renderer
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0"
  }
}`})]})]});case"jsx":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"JSX - JavaScript XML"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"JSX Rules"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 mb-4",children:[n.jsx("li",{children:"Must return a single parent element"}),n.jsx("li",{children:"Use className instead of class"}),n.jsx("li",{children:"Use camelCase for attributes (onClick, onChange)"}),n.jsx("li",{children:"Close all tags (self-closing for empty elements)"}),n.jsx("li",{children:"Use curly braces for JavaScript expressions"})]}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// ❌ Wrong - Multiple parent elements
function Wrong() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Correct - Single parent element
function Correct() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Using Fragment (no extra DOM node)
function WithFragment() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Embedding JavaScript Expressions"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function App() {
  const name = "Alice";
  const age = 25;
  const isLoggedIn = true;
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* Variables */}
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>

      {/* Expressions */}
      <p>Next year you'll be {age + 1}</p>

      {/* Function calls */}
      <p>{name.toUpperCase()}</p>

      {/* Ternary operator */}
      <p>{isLoggedIn ? 'Welcome back!' : 'Please login'}</p>

      {/* Logical AND */}
      {isLoggedIn && <button>Logout</button>}

      {/* Arrays */}
      <ul>
        {numbers.map(num => <li key={num}>{num * 2}</li>)}
      </ul>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"JSX Attributes & Styling"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function StyledComponent() {
  const imageUrl = "https://example.com/image.jpg";
  const altText = "Description";

  // Inline styles as JavaScript objects
  const boxStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '16px'
  };

  return (
    <div>
      {/* className instead of class */}
      <div className="container">

        {/* Inline styles */}
        <div style={boxStyle}>
          Styled box
        </div>

        {/* Dynamic attributes */}
        <img src={imageUrl} alt={altText} />

        {/* Boolean attributes */}
        <input type="checkbox" checked disabled />

        {/* Self-closing tags */}
        <br />
        <hr />
        <input />
      </div>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"JSX Comments"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function ComponentWithComments() {
  return (
    <div>
      {/* This is a JSX comment */}

      {/*
        Multi-line
        JSX comment
      */}

      <h1>Hello World</h1>

      {
        // Single line JavaScript comment
        // (inside expression braces)
      }
    </div>
  );
}`})]})]});case"components":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Components & Props"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Components let you split the UI into independent, reusable pieces. Think of them as JavaScript functions that accept inputs (props) and return React elements."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Function Components"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Simple function component
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Arrow function component
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};

// Using components
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Button onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Props - Component Communication"}),n.jsx("p",{className:"text-gray-700 mb-3",children:"Props are read-only and flow down from parent to child components."}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Parent component
function UserProfile() {
  const user = {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: '/avatar.jpg'
  };

  return <UserCard user={user} isOnline={true} />;
}

// Child component
function UserCard({ user, isOnline }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {isOnline && <span className="status-online">Online</span>}
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Component Composition"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Container component
function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
function Dashboard() {
  return (
    <div>
      <Card title="Welcome">
        <p>Welcome to your dashboard!</p>
      </Card>
      <Card title="Stats">
        <ul>
          <li>Users: 1,234</li>
          <li>Revenue: $45,678</li>
        </ul>
      </Card>
    </div>
  );
}`})]})]});case"useState":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"useState Hook - State Management"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"useState is the most fundamental React Hook that lets you add state to functional components."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Basic useState Usage"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { useState } from 'react';

function Counter() {
  // Syntax: const [state, setState] = useState(initialValue);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Different data types
function StateExamples() {
  const [name, setName] = useState('');           // String
  const [age, setAge] = useState(0);              // Number
  const [isActive, setIsActive] = useState(false); // Boolean
  const [items, setItems] = useState([]);         // Array
  const [user, setUser] = useState({});           // Object

  return <div>State with different types</div>;
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"State vs Props"}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full text-left text-gray-700",children:[n.jsx("thead",{className:"bg-green-100",children:n.jsxs("tr",{children:[n.jsx("th",{className:"p-3 font-semibold",children:"Feature"}),n.jsx("th",{className:"p-3 font-semibold",children:"State"}),n.jsx("th",{className:"p-3 font-semibold",children:"Props"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{className:"border-t",children:[n.jsx("td",{className:"p-3 font-medium",children:"Definition"}),n.jsx("td",{className:"p-3",children:"Internal component data"}),n.jsx("td",{className:"p-3",children:"Data passed from parent"})]}),n.jsxs("tr",{className:"border-t",children:[n.jsx("td",{className:"p-3 font-medium",children:"Mutable"}),n.jsx("td",{className:"p-3",children:"Yes (via setState)"}),n.jsx("td",{className:"p-3",children:"No (read-only)"})]}),n.jsxs("tr",{className:"border-t",children:[n.jsx("td",{className:"p-3 font-medium",children:"Ownership"}),n.jsx("td",{className:"p-3",children:"Owned by component"}),n.jsx("td",{className:"p-3",children:"Owned by parent"})]}),n.jsxs("tr",{className:"border-t",children:[n.jsx("td",{className:"p-3 font-medium",children:"Changes"}),n.jsx("td",{className:"p-3",children:"Can be changed inside component"}),n.jsx("td",{className:"p-3",children:"Cannot be changed by component"})]})]})]})})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Updating State Correctly"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function UpdateStateExamples() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Alice', age: 25 });
  const [items, setItems] = useState([1, 2, 3]);

  // ✅ Updating primitive values
  const increment = () => {
    setCount(count + 1);
  };

  // ✅ Functional update (safer for async operations)
  const incrementSafe = () => {
    setCount(prevCount => prevCount + 1);
  };

  // ✅ Updating objects (must create new object)
  const updateUser = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  // ❌ Wrong - mutating state directly
  const wrongUpdate = () => {
    user.age = 26; // Don't do this!
    setUser(user);
  };

  // ✅ Updating arrays
  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return <div>State updates</div>;
}`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Multiple State Variables"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  // OR use a single state object
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: 0
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <form>
      <input
        value={formData.firstName}
        onChange={(e) => handleChange('firstName', e.target.value)}
      />
      {/* More inputs... */}
    </form>
  );
}`})]})]});case"lifecycle":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Component Lifecycle & useEffect"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Understanding component lifecycle and using useEffect to handle side effects in your React components."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Component Lifecycle Phases"}),n.jsxs("div",{className:"space-y-3 text-gray-700",children:[n.jsxs("div",{className:"p-3 bg-white rounded",children:[n.jsx("strong",{className:"text-blue-600",children:"1. Mounting:"})," Component is created and inserted into DOM"]}),n.jsxs("div",{className:"p-3 bg-white rounded",children:[n.jsx("strong",{className:"text-green-600",children:"2. Updating:"})," Component re-renders due to state/props changes"]}),n.jsxs("div",{className:"p-3 bg-white rounded",children:[n.jsx("strong",{className:"text-red-600",children:"3. Unmounting:"})," Component is removed from DOM"]})]})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"useEffect - Run on Mount"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  // Runs once when component mounts (empty dependency array)
  useEffect(() => {
    console.log('Component mounted!');

    // Fetch user data
    fetch('https://api.example.com/user/1')
      .then(res => res.json())
      .then(data => setUser(data));

    // Optional cleanup function
    return () => {
      console.log('Component will unmount!');
    };
  }, []); // Empty array = run once on mount

  if (!user) return <div>Loading...</div>;

  return <div>Welcome, {user.name}!</div>;
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"useEffect - Run on State Change"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Runs when searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      console.log('Searching for:', searchTerm);

      fetch(\`https://api.example.com/search?q=\${searchTerm}\`)
        .then(res => res.json())
        .then(data => setResults(data));
    }
  }, [searchTerm]); // Runs when searchTerm changes

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"useEffect - Cleanup Function"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Setup: Start interval
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup: Clear interval when component unmounts
    return () => {
      clearInterval(interval);
      console.log('Timer cleaned up!');
    };
  }, []);

  return <div>Seconds: {seconds}</div>;
}

// Common cleanup scenarios:
// - Clear intervals/timeouts
// - Cancel API requests
// - Remove event listeners
// - Close WebSocket connections`})]}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Common useEffect Patterns"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// 1. Run once on mount
useEffect(() => {
  // Initialize data, fetch, setup listeners
}, []);

// 2. Run on every render (usually avoid this)
useEffect(() => {
  // Runs after every render
});

// 3. Run when specific values change
useEffect(() => {
  // Runs when value1 or value2 changes
}, [value1, value2]);

// 4. Conditional effect
useEffect(() => {
  if (condition) {
    // Do something
  }
}, [condition]);

// 5. Async operations
useEffect(() => {
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }
  fetchData();
}, [url]);`})]})]});case"events":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Event Handling in React"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn how to handle user interactions like clicks, form submissions, keyboard inputs, and more in React."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Common Event Handlers"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function EventExamples() {
  // onClick - Button clicks
  const handleClick = () => {
    console.log('Button clicked!');
  };

  // onChange - Input changes
  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  // onSubmit - Form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted!');
  };

  // onKeyDown - Keyboard events
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed!');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <input onChange={handleChange} />

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <input onKeyDown={handleKeyDown} />
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Passing Arguments to Event Handlers"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' }
  ]);

  // Method 1: Arrow function in JSX
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}

          {/* Pass argument using arrow function */}
          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>

          {/* Alternative: bind method */}
          <button onClick={deleteTodo.bind(null, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Preventing Default Behavior"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function PreventDefaultExamples() {
  // Prevent form submission reload
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted without page reload');
  };

  // Prevent link navigation
  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log('Link clicked but navigation prevented');
  };

  // Stop event propagation
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Prevent parent from receiving event
    console.log('Child clicked');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>

      <a href="https://example.com" onClick={handleLinkClick}>
        Click me (won't navigate)
      </a>

      <div onClick={handleParentClick} style={{ padding: '20px', background: 'lightblue' }}>
        Parent
        <button onClick={handleChildClick}>
          Child (click won't trigger parent)
        </button>
      </div>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"All React Event Types"}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 text-gray-700",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Mouse Events:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[n.jsx("li",{children:"onClick"}),n.jsx("li",{children:"onDoubleClick"}),n.jsx("li",{children:"onMouseEnter"}),n.jsx("li",{children:"onMouseLeave"}),n.jsx("li",{children:"onMouseMove"}),n.jsx("li",{children:"onMouseDown"}),n.jsx("li",{children:"onMouseUp"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Keyboard Events:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[n.jsx("li",{children:"onKeyDown"}),n.jsx("li",{children:"onKeyUp"}),n.jsx("li",{children:"onKeyPress"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Form Events:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[n.jsx("li",{children:"onChange"}),n.jsx("li",{children:"onSubmit"}),n.jsx("li",{children:"onFocus"}),n.jsx("li",{children:"onBlur"}),n.jsx("li",{children:"onInput"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Other Events:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[n.jsx("li",{children:"onScroll"}),n.jsx("li",{children:"onCopy"}),n.jsx("li",{children:"onPaste"}),n.jsx("li",{children:"onDrag"}),n.jsx("li",{children:"onDrop"})]})]})]})]})]});case"conditional":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Conditional Rendering"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn different ways to conditionally render components and elements based on state or props."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"If/Else Statements"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function Greeting({ isLoggedIn, username }) {
  // Method 1: If/Else with early return
  if (isLoggedIn) {
    return <h1>Welcome back, {username}!</h1>;
  }
  return <h1>Please log in.</h1>;

  // Method 2: Variable assignment
  let greeting;
  if (isLoggedIn) {
    greeting = <h1>Welcome back, {username}!</h1>;
  } else {
    greeting = <h1>Please log in.</h1>;
  }
  return greeting;
}

// Multiple conditions
function UserStatus({ role }) {
  if (role === 'admin') {
    return <div>Admin Dashboard</div>;
  } else if (role === 'user') {
    return <div>User Dashboard</div>;
  } else {
    return <div>Guest View</div>;
  }
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Ternary Operator (Most Common)"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <div>
      {/* Simple ternary */}
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}

      {/* Inline text */}
      <p>Status: {isLoggedIn ? 'Online' : 'Offline'}</p>

      {/* Nested ternary (use sparingly) */}
      {isLoggedIn ? (
        hasNotifications ? (
          <div>You have new notifications</div>
        ) : (
          <div>No new notifications</div>
        )
      ) : (
        <div>Please log in to see notifications</div>
      )}

      {/* With expressions */}
      <span className={isLoggedIn ? 'active' : 'inactive'}>
        User Status
      </span>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Logical AND (&&) Operator"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function Notifications({ count, messages }) {
  return (
    <div>
      {/* Show element only if condition is true */}
      {count > 0 && <div>You have {count} notifications</div>}

      {/* Multiple conditions */}
      {count > 0 && messages.length > 0 && (
        <ul>
          {messages.map(msg => <li key={msg.id}>{msg.text}</li>)}
        </ul>
      )}

      {/* ⚠️ Be careful with falsy values */}
      {count && <div>Count: {count}</div>}
      {/* If count is 0, it will render "0" */}

      {/* ✅ Better: explicit comparison */}
      {count > 0 && <div>Count: {count}</div>}
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Rendering Fallback UIs"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function DataDisplay() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner">Loading...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="error-message">
        <h2>Error!</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  // Empty data state
  if (!data || data.length === 0) {
    return (
      <div className="empty-state">
        <p>No data available</p>
      </div>
    );
  }

  // Success state - render data
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Switch Case Pattern"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function StatusDisplay({ status }) {
  const renderStatus = () => {
    switch (status) {
      case 'loading':
        return <div>Loading...</div>;
      case 'success':
        return <div className="success">Success!</div>;
      case 'error':
        return <div className="error">Error occurred</div>;
      case 'idle':
        return <div>Ready to start</div>;
      default:
        return <div>Unknown status</div>;
    }
  };

  return <div>{renderStatus()}</div>;
}

// Alternative: Object mapping
function StatusDisplay({ status }) {
  const statusComponents = {
    loading: <div>Loading...</div>,
    success: <div className="success">Success!</div>,
    error: <div className="error">Error occurred</div>,
    idle: <div>Ready to start</div>
  };

  return statusComponents[status] || <div>Unknown status</div>;
}`})]})]});case"lists":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Lists & Keys"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn how to render lists of data in React and why keys are essential for performance and correctness."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Rendering Lists with map()"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy app', completed: true }
  ];

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Simple array
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>{number * 2}</li>
      ))}
    </ul>
  );
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Keys are Needed"}),n.jsxs("div",{className:"space-y-3 text-gray-700 mb-4",children:[n.jsx("p",{children:n.jsx("strong",{children:"Keys help React identify which items have changed, been added, or removed."})}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 ml-4",children:[n.jsx("li",{children:"Improves performance by minimizing DOM operations"}),n.jsx("li",{children:"Maintains component state correctly"}),n.jsx("li",{children:"Prevents rendering bugs in dynamic lists"}),n.jsx("li",{children:"Essential for animations and transitions"})]})]}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// ❌ Without keys (React will warn you)
{users.map(user => (
  <UserCard user={user} />
))}

// ✅ With keys
{users.map(user => (
  <UserCard key={user.id} user={user} />
))}

// ❌ Bad: Using array index as key (only if list never changes)
{users.map((user, index) => (
  <UserCard key={index} user={user} />
))}

// When to use index as key:
// 1. List is static (never reordered/filtered)
// 2. Items don't have stable IDs
// 3. List is never modified`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Unique Key Rules"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function UserList() {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];

  return (
    <div>
      {/* ✅ Good: Unique, stable ID */}
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      {/* ✅ Good: Composite key when no single unique field */}
      {users.map(user => (
        <div key={\`\${user.name}-\${user.email}\`}>
          {user.name}
        </div>
      ))}

      {/* ✅ Good: Generated unique ID */}
      {users.map(user => (
        <div key={crypto.randomUUID()}>
          {user.name}
        </div>
      ))}

      {/* ❌ Bad: Random key changes every render */}
      {users.map(user => (
        <div key={Math.random()}>
          {user.name}
        </div>
      ))}
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Advanced List Patterns"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function AdvancedLists() {
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Book', category: 'Books', price: 19 },
    { id: 3, name: 'Phone', category: 'Electronics', price: 699 }
  ];

  // Filtering lists
  const electronics = products.filter(p => p.category === 'Electronics');

  // Nested lists
  const categories = {
    'Electronics': [{ id: 1, name: 'Laptop' }],
    'Books': [{ id: 2, name: 'Book' }]
  };

  return (
    <div>
      {/* Filtered list */}
      <h2>Electronics</h2>
      {electronics.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}

      {/* Nested lists */}
      {Object.entries(categories).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Sorted list */}
      {[...products]
        .sort((a, b) => a.price - b.price)
        .map(product => (
          <div key={product.id}>
            {product.name} - \${product.price}
          </div>
        ))}

      {/* Empty list handling */}
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map(product => (
          <div key={product.id}>{product.name}</div>
        ))
      )}
    </div>
  );
}`})]})]});case"forms":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Forms & Controlled Inputs"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn how to handle forms in React, including controlled components, form validation, and multi-input forms."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Controlled vs Uncontrolled Components"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// ✅ Controlled Component (Recommended)
// React state controls the input value
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// Uncontrolled Component
// DOM controls the input value
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} defaultValue="initial" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Handling Different Input Types"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function FormInputs() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    textarea: '',
    select: '',
    checkbox: false,
    radio: '',
    number: 0,
    date: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <form>
      {/* Text input */}
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Enter text"
      />

      {/* Email input */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Password input */}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      {/* Textarea */}
      <textarea
        name="textarea"
        value={formData.textarea}
        onChange={handleChange}
      />

      {/* Select dropdown */}
      <select
        name="select"
        value={formData.select}
        onChange={handleChange}
      >
        <option value="">Choose...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
        />
        Accept terms
      </label>

      {/* Radio buttons */}
      <label>
        <input
          type="radio"
          name="radio"
          value="option1"
          checked={formData.radio === 'option1'}
          onChange={handleChange}
        />
        Option 1
      </label>

      {/* Number input */}
      <input
        type="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
      />

      {/* Date input */}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
    </form>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Complete Form Example with Validation"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit form data
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful!');
        // Reset form
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
}`})]})]});case"hooks":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"All React Hooks"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Comprehensive guide to all React Hooks - both built-in and custom hooks."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"useState Hook"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// Multiple state variables
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"useEffect Hook"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount

  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}

// Effect with cleanup
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Other Common Hooks"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { useContext, useRef, useMemo, useCallback } from 'react';

// useContext - Access context values
const theme = useContext(ThemeContext);

// useRef - Access DOM elements or store mutable values
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// useMemo - Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// useCallback - Memoize callback functions
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`})]})]});case"context":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Context API - Avoiding Prop Drilling"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Context API allows you to pass data through the component tree without having to pass props down manually at every level."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating and Using Context"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const UserContext = createContext();

// 2. Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom Hook to use Context
function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// 4. Usage in App
function App() {
  return (
    <UserProvider>
      <Header />
      <Dashboard />
    </UserProvider>
  );
}

// 5. Consuming Context
function Header() {
  const { user, logout } = useUser();

  return (
    <header>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please login</span>
      )}
    </header>
  );
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Problem: Prop Drilling"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// ❌ Without Context (Prop Drilling)
function App() {
  const [user, setUser] = useState(null);

  return <ParentComponent user={user} setUser={setUser} />;
}

function ParentComponent({ user, setUser }) {
  return <ChildComponent user={user} setUser={setUser} />;
}

function ChildComponent({ user, setUser }) {
  return <GrandchildComponent user={user} setUser={setUser} />;
}

function GrandchildComponent({ user, setUser }) {
  // Finally use the props here
  return <div>{user?.name}</div>;
}

// ✅ With Context (Clean)
function App() {
  return (
    <UserProvider>
      <ParentComponent />
    </UserProvider>
  );
}

function ParentComponent() {
  return <ChildComponent />;
}

function ChildComponent() {
  return <GrandchildComponent />;
}

function GrandchildComponent() {
  const { user } = useUser(); // Direct access!
  return <div>{user?.name}</div>;
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Multiple Contexts"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Language Context
const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Using Multiple Contexts
function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <MainApp />
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

// Consuming Multiple Contexts
function Component() {
  const { user } = useUser();
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return <div className={theme}>Hello in {language}</div>;
}`})]})]});case"api":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"API Calls & Data Fetching"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn how to fetch data from APIs using fetch, axios, and handle loading, error, and success states."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Using Fetch API"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GET request
    fetch('https://api.example.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

// POST request with Fetch
async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${token}\`
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) throw new Error('Failed to create user');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Using Axios"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import axios from 'axios';

// Create axios instance with defaults
const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (userData) => {
    try {
      const response = await api.post('/users', userData);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await api.put(\`/users/\${id}\`, userData);
      setUsers(users.map(u => u.id === id ? response.data : u));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(\`/users/\${id}\`);
      setUsers(users.filter(u => u.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Custom useFetch Hook"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Custom Hook for data fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: abortController.signal
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup: cancel request if component unmounts
    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`})]})]});case"state":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"State Management Libraries"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"For large applications, you might need dedicated state management libraries. Learn about the most popular options."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Context API"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { createContext, useContext, useState } from 'react';

// Create context
const UserContext = createContext();

// Provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use context
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// Usage in component
function Profile() {
  const { user, logout } = useUser();

  return (
    <div>
      <h2>{user?.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"useReducer Hook"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(
    counterReducer,
    { count: 0 }
  );

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Popular State Management Libraries"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Redux:"})," Predictable state container with time-travel debugging"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Zustand:"})," Lightweight and fast state management"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Jotai:"})," Primitive and flexible state management"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Recoil:"})," Facebook's experimental state management"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"MobX:"})," Simple, scalable state management with observables"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"React Query:"})," Powerful async state management for server data"]})]})]})]});case"routing":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"React Router"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"React Router is the standard routing library for React. It enables navigation between views in a React application."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Basic Setup"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Dynamic Routes & Parameters"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { useParams, useNavigate } from 'react-router-dom';

// Route definition
<Route path="/users/:userId" element={<UserProfile />} />
<Route path="/posts/:postId/comments/:commentId"
       element={<Comment />} />

// Using params in component
function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User Profile: {userId}</h1>
      <button onClick={() => navigate('/')}>
        Go Home
      </button>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Nested Routes & Protected Routes"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { Navigate, Outlet } from 'react-router-dom';

// Protected route component
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Nested routes
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

// Layout component with Outlet
function DashboardLayout() {
  return (
    <div>
      <nav>Dashboard Navigation</nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}`})]})]});case"performance":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Performance Optimization"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn techniques to make your React applications faster and more efficient."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"React.memo"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { memo } from 'react';

// Without memo - re-renders on every parent update
function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
}

// With memo - only re-renders when props change
const MemoizedComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering MemoizedComponent');
  return <div>{data}</div>;
});

// Custom comparison function
const MemoizedWithComparison = memo(
  ExpensiveComponent,
  (prevProps, nextProps) => {
    // Return true if props are equal (skip render)
    return prevProps.data.id === nextProps.data.id;
  }
);`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Code Splitting & Lazy Loading"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}

// Custom loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="spinner">Loading...</div>
  </div>
);

<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Performance Best Practices"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Use React.memo for expensive pure components"}),n.jsx("li",{children:"Implement useMemo and useCallback for expensive calculations"}),n.jsx("li",{children:"Use lazy loading and code splitting for large components"}),n.jsx("li",{children:"Avoid inline functions and objects in render"}),n.jsx("li",{children:"Use virtualization for long lists (react-window, react-virtualized)"}),n.jsx("li",{children:"Optimize images and assets"}),n.jsx("li",{children:"Use React DevTools Profiler to identify bottlenecks"}),n.jsx("li",{children:"Implement proper key props in lists"})]})]})]});case"ecosystem":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"React Ecosystem"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Explore the rich ecosystem of libraries and tools that complement React."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Popular React Frameworks"}),n.jsxs("ul",{className:"space-y-3 text-gray-700",children:[n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Next.js:"})," Full-stack React framework with SSR, SSG, and API routes"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Remix:"})," Full-stack web framework focused on web standards"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Gatsby:"})," React-based static site generator"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Vite:"})," Next-generation frontend tooling"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Create React App:"})," Official React starter template"]})]})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"UI Component Libraries"}),n.jsxs("ul",{className:"space-y-3 text-gray-700",children:[n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"Material-UI (MUI):"})," React components implementing Material Design"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"Ant Design:"})," Enterprise-level UI design system"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"Chakra UI:"})," Simple, modular component library"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"shadcn/ui:"})," Beautifully designed components built with Radix UI"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"Tailwind CSS:"})," Utility-first CSS framework"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"React Bootstrap:"})," Bootstrap components for React"]})]})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Essential Tools & Libraries"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"State Management:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[n.jsx("li",{children:"Redux / Redux Toolkit"}),n.jsx("li",{children:"Zustand"}),n.jsx("li",{children:"Jotai"}),n.jsx("li",{children:"Recoil"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Data Fetching:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[n.jsx("li",{children:"React Query (TanStack Query)"}),n.jsx("li",{children:"SWR"}),n.jsx("li",{children:"Apollo Client (GraphQL)"}),n.jsx("li",{children:"Axios"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Forms:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[n.jsx("li",{children:"React Hook Form"}),n.jsx("li",{children:"Formik"}),n.jsx("li",{children:"React Final Form"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Testing:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[n.jsx("li",{children:"Jest"}),n.jsx("li",{children:"React Testing Library"}),n.jsx("li",{children:"Vitest"}),n.jsx("li",{children:"Cypress / Playwright"})]})]})]})]})]});case"styling":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Styling in React"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn different approaches to styling React components, from CSS modules to CSS-in-JS solutions."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"CSS Modules"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`/* Button.module.css */
.button {
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  );
}

// Usage
<Button variant="primary">Click Me</Button>
<Button variant="secondary">Cancel</Button>`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Styled Components"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import styled from 'styled-components';

// Create styled components
const Button = styled.button\`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: \${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
\`;

const Card = styled.div\`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: white;
\`;

const Title = styled.h2\`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
\`;

// Usage
function App() {
  return (
    <Card>
      <Title>Hello World</Title>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </Card>
  );
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Tailwind CSS"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Installation
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Component with Tailwind
function Card({ title, content }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Read More
      </button>
    </div>
  );
}

// Conditional classes with clsx
import clsx from 'clsx';

function Button({ variant, size, children }) {
  return (
    <button
      className={clsx(
        'font-semibold rounded transition-colors',
        {
          'bg-blue-500 text-white': variant === 'primary',
          'bg-gray-500 text-white': variant === 'secondary',
          'px-2 py-1 text-sm': size === 'small',
          'px-4 py-2': size === 'medium',
          'px-6 py-3 text-lg': size === 'large'
        }
      )}
    >
      {children}
    </button>
  );
}`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Inline Styles & CSS-in-JS"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Inline styles
function InlineStyleExample() {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle}>Click Me</button>

      {/* Inline style object */}
      <div style={{
        background: 'linear-gradient(to right, #667eea, #764ba2)',
        padding: '40px',
        borderRadius: '8px'
      }}>
        Gradient Background
      </div>
    </div>
  );
}

// Emotion (CSS-in-JS)
import { css } from '@emotion/react';

function EmotionExample() {
  return (
    <div
      css={css\`
        padding: 20px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: white;
        }
      \`}
    >
      Hover to change color.
    </div>
  );
}`})]})]});case"testing":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Testing React Applications"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn how to write tests for your React components using Jest and React Testing Library."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Jest Setup & Basic Tests"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Installation
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

// Component to test
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Greeting.test.jsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders greeting with name', () => {
    render(<Greeting name="Alice" />);

    // Find element by text
    const heading = screen.getByText('Hello, Alice!');

    // Assert it's in the document
    expect(heading).toBeInTheDocument();
  });

  test('renders greeting with different name', () => {
    render(<Greeting name="Bob" />);
    expect(screen.getByText('Hello, Bob!')).toBeInTheDocument();
  });
});

// Run tests
npm test`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Testing User Interactions"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Counter component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Counter.test.jsx
describe('Counter Component', () => {
  test('increments count when button is clicked', () => {
    render(<Counter />);

    // Initial state
    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    // Click increment button
    const incrementBtn = screen.getByText('Increment');
    fireEvent.click(incrementBtn);

    // Check updated state
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('resets count when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    // Increment a few times
    const incrementBtn = screen.getByText('Increment');
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);

    expect(screen.getByText('Count: 3')).toBeInTheDocument();

    // Reset
    const resetBtn = screen.getByText('Reset');
    await user.click(resetBtn);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Testing Async Operations"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { render, screen, waitFor } from '@testing-library/react';

// Component that fetches data
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

// UserProfile.test.jsx
describe('UserProfile Component', () => {
  beforeEach(() => {
    // Mock fetch
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('displays loading state initially', () => {
    global.fetch.mockResolvedValue({
      json: async () => ({ name: 'Alice' })
    });

    render(<UserProfile userId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays user name after loading', async () => {
    const mockUser = { name: 'Alice', id: 1 };

    global.fetch.mockResolvedValue({
      json: async () => mockUser
    });

    render(<UserProfile userId={1} />);

    // Wait for async operation
    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
    });
  });

  test('handles fetch error', async () => {
    global.fetch.mockRejectedValue(new Error('Failed to fetch'));

    render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });
});`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Common Testing Patterns"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Query Methods
screen.getByText('Hello')          // Throws error if not found
screen.queryByText('Hello')        // Returns null if not found
screen.findByText('Hello')         // Async, waits for element

// Multiple elements
screen.getAllByRole('button')
screen.queryAllByRole('button')
screen.findAllByRole('button')

// Query by different attributes
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText('Email')
screen.getByPlaceholderText('Enter email')
screen.getByTestId('custom-element')
screen.getByAltText('Profile picture')

// User interactions
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
await user.click(button);
await user.type(input, 'hello');
await user.selectOptions(select, 'option1');
await user.upload(fileInput, file);

// Assertions
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toHaveTextContent('Hello');
expect(element).toHaveAttribute('disabled');
expect(element).toHaveClass('active');
expect(element).toHaveStyle({ color: 'red' });`})]})]});case"deployment":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Build & Deployment"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn how to build your React application for production and deploy it to various platforms."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Production Build"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`# Build with Vite
npm run build

# Build with Create React App
npm run build

# Preview production build locally
npm run preview  # Vite
npx serve -s build  # CRA

# Build optimizations:
# - Minification of code
# - Tree shaking (removing unused code)
# - Code splitting
# - Asset optimization
# - Environment variables

# Build output (Vite)
dist/
├── assets/
│   ├── index-abc123.js
│   ├── index-xyz456.css
│   └── logo-def789.svg
└── index.html

# Build output (CRA)
build/
├── static/
│   ├── js/
│   ├── css/
│   └── media/
└── index.html`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Deploy to Vercel"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod

# Or use GitHub integration:
# 1. Push code to GitHub
# 2. Connect repo to Vercel
# 3. Auto-deploy on every push

# vercel.json configuration
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Deploy to Netlify"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod

# Or use Git integration:
# 1. Connect GitHub repo to Netlify
# 2. Configure build settings
# 3. Auto-deploy on git push

# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"`})]}),n.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Deploy to GitHub Pages"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json
{
  "homepage": "https://username.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy

# For Vite, update vite.config.js
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()]
})

# Steps:
# 1. Build the project
# 2. Push dist folder to gh-pages branch
# 3. Enable GitHub Pages in repository settings
# 4. Select gh-pages branch as source`})]}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Environment Variables"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`# Vite - .env file
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-api-key-here

# Access in code
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

# CRA - .env file
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key-here

# Access in code
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

# Different environments
.env                 # Loaded in all cases
.env.local          # Loaded in all cases, ignored by git
.env.development    # Loaded in development
.env.production     # Loaded in production

# Important:
# - Never commit .env.local to git
# - Add to .gitignore
# - Use platform-specific env vars for secrets
# - Prefix variables (VITE_ or REACT_APP_)`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"React.js Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master React and build modern, interactive web applications with the most popular JavaScript library."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},_x=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"🚀"},{id:"components",label:"Components",icon:"🧩"},{id:"directives",label:"Directives",icon:"📝"},{id:"services",label:"Services & DI",icon:"🔧"},{id:"routing",label:"Routing",icon:"🛣️"},{id:"rxjs",label:"RxJS",icon:"🔄"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Angular"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, it provides a complete solution for enterprise applications."}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Key Features"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Component-based architecture"}),n.jsx("li",{children:"TypeScript by default"}),n.jsx("li",{children:"Powerful CLI for scaffolding and development"}),n.jsx("li",{children:"Two-way data binding"}),n.jsx("li",{children:"Dependency Injection"}),n.jsx("li",{children:"RxJS for reactive programming"}),n.jsx("li",{children:"Complete framework with routing, HTTP, forms"})]})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating Your First Angular App"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Install Angular CLI
npm install -g @angular/cli

// Create new project
ng new my-app

// Serve the application
cd my-app
ng serve

// Generate components
ng generate component user-profile
ng generate service data`})]})]});case"components":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Angular Components"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Components are the building blocks of Angular applications. Each component consists of a TypeScript class, HTML template, and CSS styles."}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Component Structure"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// user.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string = 'John Doe';
  age: number = 25;
  isActive: boolean = true;

  greet(): void {
    alert(\`Hello, \${this.name}!\`);
  }
}

// user.component.html
<div class="user-card">
  <h2>{{ name }}</h2>
  <p>Age: {{ age }}</p>
  <p *ngIf="isActive">Status: Active</p>
  <button (click)="greet()">Greet</button>
</div>`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Input and Output"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`
    <div>
      <h3>{{ title }}</h3>
      <button (click)="sendMessage()">Send Message</button>
    </div>
  \`
})
export class ChildComponent {
  @Input() title: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(): void {
    this.messageEvent.emit('Hello from child!');
  }
}

// parent.component.ts
@Component({
  selector: 'app-parent',
  template: \`
    <app-child
      [title]="parentTitle"
      (messageEvent)="receiveMessage($event)">
    </app-child>
  \`
})
export class ParentComponent {
  parentTitle = 'Child Component';

  receiveMessage(message: string): void {
    console.log(message);
  }
}`})]})]});case"directives":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Angular Directives"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Directives are classes that add behavior to elements in your Angular applications. Angular has three types: Component, Attribute, and Structural directives."}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Structural Directives"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// *ngIf - Conditional rendering
<div *ngIf="isLoggedIn">Welcome back!</div>
<div *ngIf="isLoggedIn; else loginBlock">Welcome!</div>
<ng-template #loginBlock>
  <div>Please login</div>
</ng-template>

// *ngFor - Loop through items
<ul>
  <li *ngFor="let item of items; let i = index">
    {{ i + 1 }}. {{ item.name }}
  </li>
</ul>

// *ngSwitch - Multiple conditions
<div [ngSwitch]="userRole">
  <p *ngSwitchCase="'admin'">Admin Dashboard</p>
  <p *ngSwitchCase="'user'">User Dashboard</p>
  <p *ngSwitchDefault>Guest View</p>
</div>`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Attribute Directives"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// ngClass - Dynamic classes
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
  Content
</div>

// ngStyle - Dynamic styles
<div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">
  Styled text
</div>

// Custom attribute directive
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}

// Usage: <p appHighlight>Hover me!</p>`})]})]});case"services":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Services & Dependency Injection"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Services are used to share data and logic across components. Angular's Dependency Injection system makes it easy to inject services into components."}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating a Service"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Available app-wide
})
export class DataService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(\`\${this.apiUrl}/users\`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(\`\${this.apiUrl}/users/\${id}\`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(\`\${this.apiUrl}/users\`, user);
  }
}`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Using Services in Components"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// user.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: any[] = [];
  loading = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.loading = false;
      }
    });
  }
}`})]})]});case"routing":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Angular Routing"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Angular Router enables navigation between different views in your application."}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Setting Up Routes"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', redirectTo: '' }  // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app.component.html
<nav>
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
</nav>
<router-outlet></router-outlet>`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Programmatic Navigation"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { Router, ActivatedRoute } from '@angular/router';

export class MyComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateToUser(id: number): void {
    this.router.navigate(['/user', id]);
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // Get route parameters
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('User ID:', id);
    });
  }
}`})]})]});case"rxjs":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"RxJS in Angular"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"RxJS (Reactive Extensions for JavaScript) is a library for composing asynchronous and event-based programs using observable sequences."}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Observables"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { Observable, of, from } from 'rxjs';

// Create observable from values
const numbers$ = of(1, 2, 3, 4, 5);

// Create observable from array
const fruits$ = from(['apple', 'banana', 'orange']);

// Subscribe to observable
numbers$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('Complete!')
});

// Unsubscribe to prevent memory leaks
const subscription = numbers$.subscribe(console.log);
subscription.unsubscribe();`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Common Operators"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { map, filter, debounceTime, switchMap } from 'rxjs/operators';

// Map - transform values
numbers$.pipe(
  map(x => x * 2)
).subscribe(console.log);

// Filter - filter values
numbers$.pipe(
  filter(x => x % 2 === 0)
).subscribe(console.log);

// debounceTime - wait for pause in events
searchInput$.pipe(
  debounceTime(300),
  switchMap(term => this.searchService.search(term))
).subscribe(results => this.results = results);

// Combining operators
this.http.get('/api/users').pipe(
  map(response => response.data),
  filter(users => users.length > 0),
  tap(users => console.log('Users:', users))
).subscribe(users => this.users = users);`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-red-600 to-pink-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Angular Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master Angular and build powerful, scalable enterprise applications with Google's complete framework."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},zx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"☕"},{id:"spring",label:"Spring Framework",icon:"🌱"},{id:"boot",label:"Spring Boot",icon:"🚀"},{id:"rest",label:"REST APIs",icon:"🔌"},{id:"database",label:"Database",icon:"🗄️"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Java for Backend Development"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Java is one of the most popular programming languages for building enterprise-grade backend applications."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Java for Backend?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Platform independent (Write Once, Run Anywhere)"}),n.jsx("li",{children:"Strong typing and OOP principles"}),n.jsx("li",{children:"Robust ecosystem and libraries"}),n.jsx("li",{children:"Excellent performance and scalability"}),n.jsx("li",{children:"Enterprise-ready frameworks"}),n.jsx("li",{children:"Large community and job market"})]})]})]});case"spring":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Spring Framework"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Spring is a comprehensive framework for enterprise Java development."}),n.jsx("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Spring Component
@Component
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
}`})})]});case"boot":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Spring Boot"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Spring Boot makes it easy to create stand-alone, production-grade Spring applications."}),n.jsx("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
}`})})]});case"rest":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Building REST APIs"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn to create RESTful web services with Spring Boot."}),n.jsx("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productService.save(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productService.update(id, product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.ok().build();
    }
}`})})]});case"database":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Database Integration"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Connect to databases using Spring Data JPA."}),n.jsx("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;

    // Getters and setters
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    List<User> findByEmailContaining(String email);
}`})})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-orange-600 to-red-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Java Spring Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Build enterprise-grade backend applications with Java and Spring Boot"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Ix=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"⚡"},{id:"routing",label:"Routing",icon:"🛣️"},{id:"ssr",label:"SSR & SSG",icon:"🔄"},{id:"api",label:"API Routes",icon:"🔌"},{id:"optimization",label:"Optimization",icon:"⚙️"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Next.js"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Next.js is a React framework that enables server-side rendering, static site generation, and more for building production-ready applications."}),n.jsxs("div",{className:"bg-black border-l-4 border-white p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Why Next.js?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300",children:[n.jsx("li",{children:"Server-Side Rendering (SSR) for better SEO"}),n.jsx("li",{children:"Static Site Generation (SSG) for performance"}),n.jsx("li",{children:"Built-in routing and code splitting"}),n.jsx("li",{children:"API routes for backend functionality"}),n.jsx("li",{children:"Image optimization out of the box"}),n.jsx("li",{children:"Fast Refresh for instant feedback"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Create Next.js app
npx create-next-app@latest my-app

// Start development server
cd my-app
npm run dev

// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}`})]})]});case"routing":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Next.js Routing"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Next.js has a file-system based router. Any file in the pages directory automatically becomes a route."}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"File-Based Routing"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// File structure
pages/
  index.js       → /
  about.js       → /about
  blog/
    index.js     → /blog
    [slug].js    → /blog/:slug
  user/
    [id].js      → /user/:id

// pages/blog/[slug].js
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Post: {slug}</h1>;
}`})]}),n.jsxs("div",{className:"bg-black border-l-4 border-white p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Navigation"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/hello-world">Blog Post</Link>

      <button onClick={() => router.push('/dashboard')}>
        Go to Dashboard
      </button>
    </nav>
  );
}`})]})]});case"ssr":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"SSR & SSG"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Next.js supports multiple rendering methods: Static Generation, Server-Side Rendering, and Incremental Static Regeneration."}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Static Generation (SSG)"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Pre-render at build time
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 60 // ISR - regenerate every 60 seconds
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-black border-l-4 border-white p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Server-Side Rendering (SSR)"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Render on each request
export async function getServerSideProps(context) {
  const { req, res, query } = context;

  const response = await fetch(\`https://api.example.com/user/\${query.id}\`);
  const user = await response.json();

  return {
    props: { user }
  };
}

export default function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`})]})]});case"api":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"API Routes"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Next.js allows you to create API endpoints as serverless functions inside the pages/api directory."}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating API Routes"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World' });
}

// pages/api/users/[id].js
export default async function handler(req, res) {
  const { id } = req.query;
  const { method } = req;

  switch (method) {
    case 'GET':
      // Fetch user
      res.status(200).json({ id, name: 'John' });
      break;
    case 'PUT':
      // Update user
      res.status(200).json({ id, updated: true });
      break;
    case 'DELETE':
      // Delete user
      res.status(204).end();
      break;
    default:
      res.status(405).end();
  }
}`})]}),n.jsxs("div",{className:"bg-black border-l-4 border-white p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Using API Routes"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Client-side fetch
export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data?.message}</div>;
}`})]})]});case"optimization":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Performance Optimization"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Next.js provides built-in optimizations for images, fonts, and more."}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Image Optimization"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <Image
        src="/hero.jpg"
        alt="Hero"
        width={1200}
        height={600}
        priority
        placeholder="blur"
      />
    </div>
  );
}`})]}),n.jsxs("div",{className:"bg-black border-l-4 border-white p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Performance Best Practices"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300",children:[n.jsx("li",{children:"Use Image component for automatic optimization"}),n.jsx("li",{children:"Implement code splitting with dynamic imports"}),n.jsx("li",{children:"Use SSG whenever possible for best performance"}),n.jsx("li",{children:"Optimize fonts with next/font"}),n.jsx("li",{children:"Enable compression and caching"}),n.jsx("li",{children:"Monitor performance with Next.js Analytics"})]})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900",children:[n.jsx("div",{className:"bg-gradient-to-r from-black to-gray-900 text-white py-16 border-b-4 border-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Next.js Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"The React Framework for Production - Build fast, scalable web applications"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-700",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-white text-black shadow-lg transform scale-105":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},qx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"📘"},{id:"types",label:"Types",icon:"🔤"},{id:"interfaces",label:"Interfaces",icon:"📋"},{id:"generics",label:"Generics",icon:"🔧"},{id:"advanced",label:"Advanced Types",icon:"⚡"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to TypeScript"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and class-based object-oriented programming."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why TypeScript?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Catch errors at compile time, not runtime"}),n.jsx("li",{children:"Better IDE support with autocomplete and IntelliSense"}),n.jsx("li",{children:"Improved code maintainability and refactoring"}),n.jsx("li",{children:"Self-documenting code with type annotations"}),n.jsx("li",{children:"Great for large-scale applications"}),n.jsx("li",{children:"Popular in modern frameworks (Angular, React, Vue)"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Install TypeScript
npm install -g typescript

// Create tsconfig.json
tsc --init

// Compile TypeScript
tsc index.ts

// Your first TypeScript code
let message: string = "Hello TypeScript!";
let count: number = 42;
let isActive: boolean = true;

console.log(message);`})]})]});case"types":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"TypeScript Types"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"TypeScript provides a rich type system including primitive types, arrays, tuples, enums, and more."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Basic Types"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Primitive types
let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple
let person: [string, number] = ["Alice", 25];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let color: Color = Color.Red;

// Any (avoid when possible)
let dynamic: any = "can be anything";

// Unknown (safer than any)
let uncertain: unknown = 4;`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Union and Literal Types"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Union types
let id: string | number;
id = "abc123";  // OK
id = 12345;     // OK

function printId(id: string | number) {
  console.log(\`ID: \${id}\`);
}

// Literal types
let direction: "up" | "down" | "left" | "right";
direction = "up";  // OK
// direction = "forward";  // Error

type Status = "pending" | "success" | "error";
let status: Status = "pending";`})]})]});case"interfaces":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Interfaces"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Interfaces define the structure of objects and can be used to ensure type safety."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Defining Interfaces"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // Optional property
  readonly createdAt: Date;  // Readonly
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date()
};

// Function types in interface
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Extending Interfaces"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: "Bob",
  age: 30,
  employeeId: 12345,
  department: "Engineering"
};

// Multiple inheritance
interface Printable {
  print(): void;
}

interface Document extends Person, Printable {
  content: string;
}`})]})]});case"generics":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Generics"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Generics allow you to write reusable, type-safe code that works with multiple types."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Generic Functions"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello");
let output2 = identity<number>(42);

// Generic with arrays
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]);  // number
const firstName = getFirstElement(["a", "b"]);    // string

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("hello", 42);  // [string, number]`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Generic Interfaces & Classes"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 42 };

// Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);`})]})]});case"advanced":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Advanced Types"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"TypeScript offers powerful advanced type features for complex scenarios."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Utility Types"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`interface User {
  id: number;
  name: string;
  email: string;
}

// Partial - makes all properties optional
type PartialUser = Partial<User>;

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - select specific properties
type UserPreview = Pick<User, "id" | "name">;

// Omit - exclude specific properties
type UserWithoutId = Omit<User, "id">;

// Record - construct object type
type UserRoles = Record<string, string[]>;`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Type Guards & Narrowing"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());  // string
  } else {
    console.log(value.toFixed(2));     // number
  }
}

// Discriminated unions
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"TypeScript Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"JavaScript that scales - Add type safety to your JavaScript applications"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Gx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"🚀"},{id:"modules",label:"Modules & NPM",icon:"📦"},{id:"async",label:"Async Programming",icon:"⚡"},{id:"fs",label:"File System",icon:"📁"},{id:"http",label:"HTTP Server",icon:"🌐"},{id:"streams",label:"Streams & Buffers",icon:"🌊"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Node.js"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server side."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Node.js?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Non-blocking I/O for high performance"}),n.jsx("li",{children:"Single programming language (JavaScript) for full stack"}),n.jsx("li",{children:"Large ecosystem with NPM packages"}),n.jsx("li",{children:"Event-driven architecture"}),n.jsx("li",{children:"Scalable for microservices"}),n.jsx("li",{children:"Active community and support"})]})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Your First Node.js Program"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// hello.js
console.log('Hello from Node.js!');

// Run with: node hello.js

// Using process object
console.log('Node version:', process.version);
console.log('Platform:', process.platform);

// Command line arguments
console.log('Arguments:', process.argv);`})]})]});case"modules":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Modules & NPM"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Node.js uses CommonJS module system for organizing code. NPM (Node Package Manager) helps manage dependencies."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating and Using Modules"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// math.js - Creating a module
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// app.js - Using the module
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(10, 4)); // 6

// ES6 modules (with "type": "module" in package.json)
export const multiply = (a, b) => a * b;
import { multiply } from './math.js';`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"NPM Package Management"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Initialize a new project
npm init -y

// Install packages
npm install express
npm install --save-dev nodemon

// Install globally
npm install -g typescript

// package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}`})]})]});case"async":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Async Programming in Node.js"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Node.js is built on asynchronous, non-blocking I/O operations for better performance."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Callbacks"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const fs = require('fs');

// Callback pattern
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Error-first callback convention
function fetchUser(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('Invalid ID'), null);
    } else {
      callback(null, { id, name: 'John' });
    }
  }, 1000);
}

fetchUser(1, (err, user) => {
  if (err) return console.error(err);
  console.log('User:', user);
});`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Promises & Async/Await"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const fs = require('fs').promises;

// Using Promises
fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log(data1, data2);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Promise.all for parallel operations
async function readMultipleFiles() {
  const [data1, data2, data3] = await Promise.all([
    fs.readFile('file1.txt', 'utf8'),
    fs.readFile('file2.txt', 'utf8'),
    fs.readFile('file3.txt', 'utf8')
  ]);
  return { data1, data2, data3 };
}`})]})]});case"fs":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"File System Operations"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Node.js provides comprehensive file system APIs for reading, writing, and managing files."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Reading and Writing Files"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const fs = require('fs').promises;

// Read file
async function readFile() {
  const data = await fs.readFile('input.txt', 'utf8');
  return data;
}

// Write file
async function writeFile() {
  await fs.writeFile('output.txt', 'Hello World!');
}

// Append to file
async function appendFile() {
  await fs.appendFile('log.txt', 'New log entry\\n');
}

// Copy file
async function copyFile() {
  await fs.copyFile('source.txt', 'destination.txt');
}

// Delete file
async function deleteFile() {
  await fs.unlink('temp.txt');
}

// Check if file exists
async function fileExists() {
  try {
    await fs.access('file.txt');
    return true;
  } catch {
    return false;
  }
}`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Directory Operations"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const fs = require('fs').promises;
const path = require('path');

// Create directory
await fs.mkdir('new-folder', { recursive: true });

// Read directory
const files = await fs.readdir('folder');
console.log('Files:', files);

// Get file stats
const stats = await fs.stat('file.txt');
console.log('Size:', stats.size);
console.log('Is file:', stats.isFile());
console.log('Is directory:', stats.isDirectory());

// Watch for file changes
fs.watch('folder', (eventType, filename) => {
  console.log(\`\${filename} changed: \${eventType}\`);
});`})]})]});case"http":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Creating HTTP Server"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Node.js has built-in HTTP module for creating web servers and handling requests."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Basic HTTP Server"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const http = require('http');

const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  // Send response
  res.end('<h1>Hello from Node.js Server!</h1>');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Handling Different Routes"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  res.setHeader('Content-Type', 'application/json');

  if (path === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Home page' }));
  } else if (path === '/api/users' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ users: ['Alice', 'Bob'] }));
  } else if (path === '/api/users' && method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const data = JSON.parse(body);
      res.statusCode = 201;
      res.end(JSON.stringify({ created: data }));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000);`})]})]});case"streams":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Streams & Buffers"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Streams allow processing data piece by piece without loading everything into memory."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Working with Streams"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const fs = require('fs');

// Read stream
const readStream = fs.createReadStream('large-file.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

// Write stream
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Line 1\\n');
writeStream.write('Line 2\\n');
writeStream.end('Final line');

// Pipe streams
const source = fs.createReadStream('input.txt');
const destination = fs.createWriteStream('output.txt');
source.pipe(destination);`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Buffers"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Create buffer
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.alloc(10); // 10 bytes

// Buffer operations
console.log(buf1.toString());        // 'Hello'
console.log(buf1.length);            // 5
console.log(buf1[0]);                // 72 (H in ASCII)

// Concatenate buffers
const buf3 = Buffer.concat([buf1, Buffer.from(' World')]);
console.log(buf3.toString());        // 'Hello World'

// Compare buffers
const isEqual = Buffer.compare(buf1, buf2);

// Convert to JSON
const json = buf1.toJSON();`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Node.js Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Build powerful backend applications with JavaScript using Node.js"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Yx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"🚂"},{id:"routing",label:"Routing",icon:"🛣️"},{id:"middleware",label:"Middleware",icon:"⚙️"},{id:"rest",label:"REST APIs",icon:"🔌"},{id:"validation",label:"Validation",icon:"✅"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Express.js"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Express.js is a fast, minimalist web framework for Node.js that simplifies building web applications and APIs."}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Basic Express Server"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`})]})]});case"routing":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Express Routing"}),n.jsx("div",{className:"bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// HTTP methods
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, updated: true });
});

app.delete('/users/:id', (req, res) => {
  res.status(204).send();
});

// Route parameters
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

// Query parameters
app.get('/search', (req, res) => {
  const { q, limit } = req.query;
  res.json({ query: q, limit });
});`})})]});case"middleware":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Middleware"}),n.jsx("div",{className:"bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Application-level middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Third-party middleware
const cors = require('cors');
const morgan = require('morgan');
app.use(cors());
app.use(morgan('dev'));`})})]});case"rest":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Building REST APIs"}),n.jsx("div",{className:"bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const express = require('express');
const router = express.Router();

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single user
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;`})})]});case"validation":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Input Validation"}),n.jsx("div",{className:"bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const { body, validationResult } = require('express-validator');

app.post('/users',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('name').trim().notEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Process valid data
    res.json({ message: 'User created' });
  }
);`})})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-gray-700 to-slate-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Express.js Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Fast, unopinionated, minimalist web framework for Node.js"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-gray-700 to-slate-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Jx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"🍃"},{id:"crud",label:"CRUD Operations",icon:"📝"},{id:"mongoose",label:"Mongoose ODM",icon:"🦫"},{id:"aggregation",label:"Aggregation",icon:"📊"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to MongoDB"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Connecting to MongoDB"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('myDatabase');
    return db;
  } catch (error) {
    console.error(error);
  }
}

connect();`})]})]});case"crud":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"CRUD Operations"}),n.jsx("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Insert
await collection.insertOne({ name: 'Alice', age: 25 });
await collection.insertMany([
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]);

// Find
const users = await collection.find({}).toArray();
const user = await collection.findOne({ name: 'Alice' });

// Update
await collection.updateOne(
  { name: 'Alice' },
  { $set: { age: 26 } }
);

await collection.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: 'young' } }
);

// Delete
await collection.deleteOne({ name: 'Bob' });
await collection.deleteMany({ age: { $gt: 40 } });`})})]});case"mongoose":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Mongoose ODM"}),n.jsx("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://localhost/mydb');

// Define Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

// Create Model
const User = mongoose.model('User', userSchema);

// CRUD Operations
const user = new User({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
});

await user.save();

const users = await User.find({ age: { $gte: 18 } });
await User.findByIdAndUpdate(id, { age: 26 });
await User.findByIdAndDelete(id);`})})]});case"aggregation":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Aggregation Pipeline"}),n.jsx("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Aggregation pipeline
const results = await collection.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: '$city', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
]).toArray();

// Common stages
// $match - filter documents
// $group - group by field
// $project - select fields
// $sort - sort results
// $limit - limit results
// $lookup - join collections`})})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-green-700 to-lime-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"MongoDB Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"NoSQL database for modern applications"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-green-700 to-lime-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Px=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"🌱"},{id:"core",label:"Spring Core",icon:"⚙️"},{id:"boot",label:"Spring Boot",icon:"🚀"},{id:"rest",label:"REST APIs",icon:"🔌"},{id:"jpa",label:"Spring Data JPA",icon:"🗄️"},{id:"security",label:"Spring Security",icon:"🔒"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Spring Framework"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Spring is the most popular Java framework for building enterprise applications. It provides comprehensive infrastructure support for developing Java applications."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Spring Framework?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Dependency Injection for loose coupling"}),n.jsx("li",{children:"Comprehensive infrastructure support"}),n.jsx("li",{children:"Enterprise-ready features"}),n.jsx("li",{children:"Simplified database access with Spring Data"}),n.jsx("li",{children:"Built-in security with Spring Security"}),n.jsx("li",{children:"Microservices support with Spring Cloud"}),n.jsx("li",{children:"Large ecosystem and community"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Spring Ecosystem"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`Spring Framework Components:

• Spring Core - Dependency Injection & IoC Container
• Spring Boot - Rapid application development
• Spring MVC - Web applications and REST APIs
• Spring Data - Database access and repositories
• Spring Security - Authentication and authorization
• Spring Cloud - Microservices and distributed systems
• Spring Batch - Batch processing
• Spring Integration - Enterprise integration patterns`})]})]});case"core":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Spring Core - IoC & Dependency Injection"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"The core of Spring Framework is the Inversion of Control (IoC) container that manages object lifecycle and dependencies."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Dependency Injection"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Component annotation
@Component
public class UserService {
    private final UserRepository userRepository;

    // Constructor injection (recommended)
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}

// Repository
@Repository
public class UserRepository {
    // Database operations
}

// Configuration
@Configuration
public class AppConfig {
    @Bean
    public EmailService emailService() {
        return new EmailServiceImpl();
    }
}`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Bean Scopes"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Singleton (default) - one instance per container
@Component
@Scope("singleton")
public class SingletonBean { }

// Prototype - new instance each time
@Component
@Scope("prototype")
public class PrototypeBean { }

// Request - one instance per HTTP request
@Component
@Scope("request")
public class RequestBean { }

// Session - one instance per HTTP session
@Component
@Scope("session")
public class SessionBean { }`})]})]});case"boot":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Spring Boot"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Spring Boot makes it easy to create stand-alone, production-grade Spring applications with minimal configuration."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started with Spring Boot"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Main Application Class
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// application.properties
server.port=8080
spring.application.name=my-app
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Auto-Configuration"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Spring Boot automatically configures:
// - Embedded server (Tomcat, Jetty)
// - Database connections
// - Template engines
// - Security defaults
// - Logging

// Custom configuration
@Configuration
public class CustomConfig {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}`})]})]});case"rest":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Building REST APIs"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Create RESTful web services with Spring Boot and Spring MVC."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"REST Controller"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    // GET all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    // GET user by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }

    // POST create user
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User savedUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    // PUT update user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody User user) {
        User updatedUser = userService.update(id, user);
        return ResponseEntity.ok(updatedUser);
    }

    // DELETE user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Request Validation & Exception Handling"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Entity with validation
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50)
    private String name;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email is required")
    private String email;

    @Min(value = 18, message = "Age must be at least 18")
    private Integer age;
}

// Global exception handler
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String field = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            errors.put(field, message);
        });
        return ResponseEntity.badRequest().body(errors);
    }
}`})]})]});case"jpa":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Spring Data JPA"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Simplify database access with Spring Data JPA repositories and query methods."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"JPA Entity & Repository"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Entity
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Getters, setters, constructors
}

// Repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Derived query methods
    Optional<User> findByUsername(String username);
    List<User> findByEmailContaining(String email);
    List<User> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);

    // Custom query
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain")
    List<User> findByEmailDomain(@Param("domain") String domain);

    // Native query
    @Query(value = "SELECT * FROM users WHERE active = true",
           nativeQuery = true)
    List<User> findActiveUsers();
}`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Relationships & Pagination"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// One-to-Many relationship
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private BigDecimal total;
}

// Pagination and sorting
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Page<User> getUsers(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(
            page,
            size,
            Sort.by(sortBy).descending()
        );
        return userRepository.findAll(pageable);
    }

    // Specification for dynamic queries
    public List<User> searchUsers(String name, String email) {
        Specification<User> spec = Specification
            .where(name != null ? hasName(name) : null)
            .and(email != null ? hasEmail(email) : null);
        return userRepository.findAll(spec);
    }
}`})]})]});case"security":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Spring Security"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Implement authentication and authorization in your Spring applications."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Security Configuration"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .httpBasic();

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"JWT Authentication"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// JWT Filter
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        String token = getJwtFromRequest(request);

        if (StringUtils.hasText(token) && tokenProvider.validateToken(token)) {
            String username = tokenProvider.getUsernameFromToken(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities()
                );

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }
}

// Auth Controller
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(),
                request.getPassword()
            )
        );

        String token = jwtTokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtResponse(token));
    }
}`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Java Spring Framework Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Build enterprise-grade backend applications with Spring Boot"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Fx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"🐬"},{id:"basics",label:"SQL Basics",icon:"📝"},{id:"queries",label:"Advanced Queries",icon:"🔍"},{id:"joins",label:"Joins",icon:"🔗"},{id:"indexes",label:"Indexes & Performance",icon:"⚡"},{id:"transactions",label:"Transactions",icon:"🔄"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to MySQL"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"MySQL is the world's most popular open-source relational database management system. It's widely used for web applications and is a central component of the LAMP stack."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why MySQL?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Open-source and free to use"}),n.jsx("li",{children:"High performance and reliability"}),n.jsx("li",{children:"Easy to use and learn"}),n.jsx("li",{children:"Excellent community support"}),n.jsx("li",{children:"Works on multiple platforms"}),n.jsx("li",{children:"Scalable for large applications"}),n.jsx("li",{children:"ACID compliant for data integrity"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Connect to MySQL
mysql -u root -p

-- Create a database
CREATE DATABASE myapp;

-- Use the database
USE myapp;

-- Show all databases
SHOW DATABASES;

-- Show all tables
SHOW TABLES;

-- Describe table structure
DESC users;`})]})]});case"basics":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"SQL Basics - CRUD Operations"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn the fundamental SQL operations: CREATE, READ, UPDATE, and DELETE."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating Tables"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Create a table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create table with foreign key
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"INSERT, SELECT, UPDATE, DELETE"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- INSERT - Add new records
INSERT INTO users (username, email, age)
VALUES ('john_doe', 'john@example.com', 25);

-- Multiple inserts
INSERT INTO users (username, email, age) VALUES
    ('alice', 'alice@example.com', 28),
    ('bob', 'bob@example.com', 32),
    ('charlie', 'charlie@example.com', 24);

-- SELECT - Read data
SELECT * FROM users;
SELECT username, email FROM users WHERE age > 25;
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;

-- UPDATE - Modify existing records
UPDATE users SET age = 26 WHERE username = 'john_doe';
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;

-- DELETE - Remove records
DELETE FROM users WHERE id = 5;
DELETE FROM users WHERE age < 18;`})]})]});case"queries":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Advanced Queries"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Master complex SQL queries with filtering, grouping, and aggregation."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"WHERE, LIKE, IN, BETWEEN"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- WHERE clause
SELECT * FROM users WHERE age >= 18 AND age <= 30;
SELECT * FROM users WHERE username = 'john_doe' OR email LIKE '%@gmail.com';

-- LIKE pattern matching
SELECT * FROM users WHERE email LIKE '%@gmail.com';
SELECT * FROM users WHERE username LIKE 'j%';  -- Starts with 'j'
SELECT * FROM users WHERE username LIKE '%_doe';  -- Ends with '_doe'

-- IN operator
SELECT * FROM users WHERE age IN (25, 30, 35);
SELECT * FROM users WHERE username IN ('alice', 'bob', 'charlie');

-- BETWEEN operator
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
SELECT * FROM orders WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31';

-- IS NULL / IS NOT NULL
SELECT * FROM users WHERE age IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"GROUP BY & Aggregate Functions"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Aggregate functions
SELECT COUNT(*) FROM users;
SELECT AVG(age) as average_age FROM users;
SELECT MIN(age), MAX(age) FROM users;
SELECT SUM(total) FROM orders;

-- GROUP BY
SELECT age, COUNT(*) as count
FROM users
GROUP BY age
ORDER BY count DESC;

-- GROUP BY with HAVING
SELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent
FROM orders
GROUP BY user_id
HAVING order_count > 5 AND total_spent > 1000;

-- Multiple grouping
SELECT status, DATE(created_at) as order_date, COUNT(*) as count
FROM orders
GROUP BY status, DATE(created_at);`})]})]});case"joins":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"SQL Joins"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Combine data from multiple tables using different types of joins."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"INNER JOIN & LEFT JOIN"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- INNER JOIN - Returns matching records from both tables
SELECT users.username, orders.total, orders.status
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN - Returns all records from left table
SELECT users.username, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Multiple joins
SELECT
    users.username,
    orders.id as order_id,
    products.name as product_name,
    order_items.quantity
FROM users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN order_items ON orders.id = order_items.order_id
INNER JOIN products ON order_items.product_id = products.id
WHERE users.id = 1;`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"RIGHT JOIN & Complex Joins"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- RIGHT JOIN - Returns all records from right table
SELECT users.username, orders.total
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

-- Self join
SELECT
    e1.name as employee,
    e2.name as manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;

-- Join with aggregation
SELECT
    users.username,
    COUNT(orders.id) as order_count,
    SUM(orders.total) as total_spent
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.username
HAVING order_count > 0
ORDER BY total_spent DESC;`})]})]});case"indexes":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Indexes & Performance"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Optimize database performance with proper indexing strategies."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating Indexes"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Create index on single column
CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);

-- Create unique index
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Create composite index (multiple columns)
CREATE INDEX idx_user_age ON users(username, age);

-- Create full-text index for text search
CREATE FULLTEXT INDEX idx_description ON products(description);

-- Show indexes on a table
SHOW INDEXES FROM users;

-- Drop an index
DROP INDEX idx_username ON users;`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Query Optimization"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Use EXPLAIN to analyze query performance
EXPLAIN SELECT * FROM users WHERE username = 'john_doe';

-- Optimize with covering index
CREATE INDEX idx_user_details ON users(username, email, age);

-- Avoid SELECT *
SELECT id, username, email FROM users WHERE age > 25;

-- Use LIMIT for pagination
SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 20;

-- Use EXISTS instead of IN for subqueries
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- Optimize JOIN queries
SELECT u.username, COUNT(o.id) as order_count
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.age > 25
GROUP BY u.id, u.username;`})]})]});case"transactions":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Transactions & ACID"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Ensure data integrity with transactions and understand ACID properties."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Transaction Basics"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Start a transaction
START TRANSACTION;

-- Perform operations
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Commit the transaction
COMMIT;

-- Or rollback if there's an error
ROLLBACK;

-- Transaction with error handling
START TRANSACTION;

UPDATE inventory SET quantity = quantity - 5 WHERE product_id = 101;

-- Check if enough inventory
SELECT quantity FROM inventory WHERE product_id = 101;

-- If quantity >= 0, commit; otherwise rollback
COMMIT;
-- or
ROLLBACK;`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"ACID Properties & Isolation Levels"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- ACID Properties:
-- A - Atomicity: All or nothing
-- C - Consistency: Data remains valid
-- I - Isolation: Transactions don't interfere
-- D - Durability: Committed data persists

-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Savepoints for partial rollback
START TRANSACTION;

INSERT INTO users (username, email) VALUES ('user1', 'user1@example.com');
SAVEPOINT sp1;

INSERT INTO orders (user_id, total) VALUES (1, 100.00);
SAVEPOINT sp2;

-- Rollback to savepoint
ROLLBACK TO sp1;

COMMIT;

-- Locking for concurrent access
SELECT * FROM products WHERE id = 1 FOR UPDATE;  -- Exclusive lock
SELECT * FROM products WHERE id = 1 LOCK IN SHARE MODE;  -- Shared lock`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"MySQL Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master the world's most popular open-source relational database"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Vx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"🐘"},{id:"basics",label:"SQL Basics",icon:"📝"},{id:"advanced",label:"Advanced Features",icon:"⚡"},{id:"json",label:"JSON Support",icon:"📦"},{id:"performance",label:"Performance",icon:"🚀"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to PostgreSQL"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance."}),n.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why PostgreSQL?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"ACID compliant and highly reliable"}),n.jsx("li",{children:"Advanced data types (JSON, Array, hstore)"}),n.jsx("li",{children:"Full-text search capabilities"}),n.jsx("li",{children:"Extensible with custom functions and types"}),n.jsx("li",{children:"Superior handling of concurrent users"}),n.jsx("li",{children:"Advanced indexing techniques"}),n.jsx("li",{children:"Support for complex queries and joins"}),n.jsx("li",{children:"Active development and community"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Connect to PostgreSQL
psql -U postgres

-- Create a database
CREATE DATABASE myapp;

-- Connect to database
\\c myapp

-- List all databases
\\l

-- List all tables
\\dt

-- Describe table
\\d users

-- Show table structure with details
\\d+ users`})]})]});case"basics":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"PostgreSQL SQL Basics"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Learn fundamental PostgreSQL operations with data types and constraints."}),n.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating Tables with Data Types"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Create table with various data types
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age >= 18),
    bio TEXT,
    is_active BOOLEAN DEFAULT true,
    metadata JSONB,
    tags TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table with UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    token TEXT NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Create ENUM type
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'completed', 'cancelled');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    status order_status DEFAULT 'pending',
    total NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"CRUD Operations"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- INSERT with RETURNING
INSERT INTO users (username, email, age, tags)
VALUES ('john_doe', 'john@example.com', 25, ARRAY['developer', 'blogger'])
RETURNING id, username, created_at;

-- INSERT multiple rows
INSERT INTO users (username, email, age) VALUES
    ('alice', 'alice@example.com', 28),
    ('bob', 'bob@example.com', 32),
    ('charlie', 'charlie@example.com', 24)
RETURNING *;

-- SELECT with advanced filtering
SELECT * FROM users WHERE age BETWEEN 25 AND 35;
SELECT * FROM users WHERE tags @> ARRAY['developer'];
SELECT * FROM users WHERE metadata->>'city' = 'New York';

-- UPDATE with RETURNING
UPDATE users
SET age = 26, updated_at = CURRENT_TIMESTAMP
WHERE username = 'john_doe'
RETURNING *;

-- UPSERT (INSERT ... ON CONFLICT)
INSERT INTO users (username, email, age)
VALUES ('john_doe', 'john@example.com', 26)
ON CONFLICT (username)
DO UPDATE SET age = EXCLUDED.age, email = EXCLUDED.email
RETURNING *;

-- DELETE with condition
DELETE FROM users WHERE age < 18 RETURNING *;`})]})]});case"advanced":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Advanced PostgreSQL Features"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Explore powerful PostgreSQL features like window functions, CTEs, and advanced queries."}),n.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Common Table Expressions (CTEs)"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Simple CTE
WITH active_users AS (
    SELECT * FROM users WHERE is_active = true
)
SELECT username, email FROM active_users WHERE age > 25;

-- Recursive CTE (hierarchical data)
WITH RECURSIVE employee_hierarchy AS (
    -- Base case
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case
    SELECT e.id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy ORDER BY level, name;

-- Multiple CTEs
WITH
    user_stats AS (
        SELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent
        FROM orders
        GROUP BY user_id
    ),
    high_value_users AS (
        SELECT * FROM user_stats WHERE total_spent > 1000
    )
SELECT u.username, us.order_count, us.total_spent
FROM users u
JOIN high_value_users us ON u.id = us.user_id;`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Window Functions"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- ROW_NUMBER, RANK, DENSE_RANK
SELECT
    username,
    total,
    ROW_NUMBER() OVER (ORDER BY total DESC) as row_num,
    RANK() OVER (ORDER BY total DESC) as rank,
    DENSE_RANK() OVER (ORDER BY total DESC) as dense_rank
FROM orders o
JOIN users u ON o.user_id = u.id;

-- Partition by category
SELECT
    product_name,
    category,
    price,
    AVG(price) OVER (PARTITION BY category) as avg_category_price,
    price - AVG(price) OVER (PARTITION BY category) as price_difference
FROM products;

-- Running totals
SELECT
    order_date,
    total,
    SUM(total) OVER (ORDER BY order_date) as running_total,
    AVG(total) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as moving_avg
FROM orders;

-- LAG and LEAD functions
SELECT
    order_date,
    total,
    LAG(total, 1) OVER (ORDER BY order_date) as previous_total,
    LEAD(total, 1) OVER (ORDER BY order_date) as next_total
FROM orders;`})]})]});case"json":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"JSON & JSONB Support"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"PostgreSQL provides excellent support for JSON data with powerful querying capabilities."}),n.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Working with JSONB"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Create table with JSONB
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    attributes JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert JSON data
INSERT INTO products (name, attributes) VALUES
    ('Laptop', '{"brand": "Dell", "specs": {"ram": "16GB", "storage": "512GB SSD"}, "price": 999.99}'),
    ('Phone', '{"brand": "Apple", "specs": {"storage": "128GB", "color": "black"}, "price": 799.99}');

-- Query JSON fields
SELECT name, attributes->>'brand' as brand
FROM products;

-- Query nested JSON
SELECT name, attributes->'specs'->>'ram' as ram
FROM products;

-- Query with JSON operators
SELECT * FROM products WHERE attributes @> '{"brand": "Dell"}';
SELECT * FROM products WHERE attributes->'specs' @> '{"ram": "16GB"}';
SELECT * FROM products WHERE attributes->>'price' > '500';

-- Update JSON fields
UPDATE products
SET attributes = jsonb_set(attributes, '{price}', '899.99')
WHERE name = 'Laptop';

-- Add new JSON field
UPDATE products
SET attributes = attributes || '{"warranty": "2 years"}'
WHERE name = 'Laptop';

-- Remove JSON field
UPDATE products
SET attributes = attributes - 'warranty'
WHERE name = 'Laptop';`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"JSON Functions & Indexing"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Extract JSON array elements
SELECT
    name,
    jsonb_array_elements(attributes->'tags') as tag
FROM products
WHERE attributes ? 'tags';

-- JSON aggregation
SELECT
    jsonb_object_agg(name, attributes->>'price') as product_prices
FROM products;

-- Create GIN index on JSONB for faster queries
CREATE INDEX idx_products_attributes ON products USING GIN (attributes);

-- Index specific JSON path
CREATE INDEX idx_products_brand ON products ((attributes->>'brand'));

-- Full-text search on JSON
SELECT * FROM products
WHERE attributes->>'description' @@ to_tsquery('laptop & fast');

-- JSON array operations
SELECT * FROM products
WHERE attributes->'tags' ? 'electronics';  -- Contains key

SELECT * FROM products
WHERE attributes->'tags' @> '["new", "sale"]';  -- Contains array elements`})]})]});case"performance":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Performance Optimization"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Optimize PostgreSQL performance with proper indexing, query planning, and configuration."}),n.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Indexes & Query Plans"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- B-tree index (default)
CREATE INDEX idx_users_username ON users(username);

-- Partial index (conditional)
CREATE INDEX idx_active_users ON users(username) WHERE is_active = true;

-- Multi-column index
CREATE INDEX idx_users_name_age ON users(username, age);

-- GIN index for full-text search
CREATE INDEX idx_users_bio_search ON users USING GIN (to_tsvector('english', bio));

-- GiST index for geometric data
CREATE INDEX idx_locations_point ON locations USING GIST (coordinates);

-- BRIN index for large tables with natural ordering
CREATE INDEX idx_orders_created_at ON orders USING BRIN (created_at);

-- Analyze query performance
EXPLAIN ANALYZE SELECT * FROM users WHERE username = 'john_doe';

-- Show index usage
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read
FROM pg_stat_user_indexes
ORDER BY idx_scan DESC;

-- Vacuum and analyze
VACUUM ANALYZE users;
ANALYZE users;`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Query Optimization Techniques"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Use LIMIT and OFFSET efficiently
SELECT * FROM users
ORDER BY created_at DESC
LIMIT 20 OFFSET 0;

-- Materialized views for complex queries
CREATE MATERIALIZED VIEW user_order_stats AS
SELECT
    u.id,
    u.username,
    COUNT(o.id) as order_count,
    SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW user_order_stats;

-- Concurrent refresh (non-blocking)
REFRESH MATERIALIZED VIEW CONCURRENTLY user_order_stats;

-- Prepared statements
PREPARE get_user (INTEGER) AS
    SELECT * FROM users WHERE id = $1;

EXECUTE get_user(1);

-- Connection pooling settings
-- Set in postgresql.conf
-- max_connections = 100
-- shared_buffers = 256MB
-- effective_cache_size = 1GB
-- maintenance_work_mem = 64MB
-- work_mem = 4MB

-- Monitor query performance
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY total_time DESC
LIMIT 10;`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"PostgreSQL Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master the world's most advanced open-source relational database"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Qx=()=>{const[i,m]=w.useState("intro"),p=[{id:"intro",label:"Introduction",icon:"📚"},{id:"ddl",label:"DDL Commands",icon:"🏗️"},{id:"dml",label:"DML Commands",icon:"✏️"},{id:"queries",label:"Queries",icon:"🔍"},{id:"constraints",label:"Constraints",icon:"🔒"},{id:"joins",label:"Joins",icon:"🔗"}],c=()=>{switch(i){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to SQL"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. It's used across all major database systems."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"What is SQL?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Standard language for relational databases"}),n.jsx("li",{children:"Used to create, read, update, and delete data"}),n.jsx("li",{children:"Declarative language (you specify what you want, not how)"}),n.jsx("li",{children:"Works with MySQL, PostgreSQL, SQL Server, Oracle, etc."}),n.jsx("li",{children:"Essential skill for backend developers and data analysts"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"SQL Categories"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`SQL is divided into several categories:

1. DDL (Data Definition Language)
   - CREATE, ALTER, DROP, TRUNCATE
   - Define database structure

2. DML (Data Manipulation Language)
   - INSERT, UPDATE, DELETE, SELECT
   - Manipulate data within tables

3. DCL (Data Control Language)
   - GRANT, REVOKE
   - Control access permissions

4. TCL (Transaction Control Language)
   - COMMIT, ROLLBACK, SAVEPOINT
   - Manage transactions

5. DQL (Data Query Language)
   - SELECT
   - Query and retrieve data`})]})]});case"ddl":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"DDL - Data Definition Language"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"DDL commands are used to define and modify database structure and schema."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"CREATE - Creating Database Objects"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Create a database
CREATE DATABASE school;

-- Use the database
USE school;

-- Create a table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    grade CHAR(1),
    enrollment_date DATE DEFAULT CURRENT_DATE
);

-- Create table with foreign key
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    credits INT NOT NULL,
    instructor VARCHAR(100)
);

CREATE TABLE enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"ALTER, DROP, TRUNCATE"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- ALTER - Modify table structure
-- Add column
ALTER TABLE students ADD COLUMN phone VARCHAR(15);

-- Modify column
ALTER TABLE students MODIFY COLUMN age INT NOT NULL;

-- Drop column
ALTER TABLE students DROP COLUMN phone;

-- Add constraint
ALTER TABLE students ADD CONSTRAINT check_age CHECK (age >= 5);

-- Rename table
ALTER TABLE students RENAME TO pupils;

-- DROP - Delete database objects
-- Drop table
DROP TABLE enrollments;

-- Drop database
DROP DATABASE school;

-- Drop with safety check
DROP TABLE IF EXISTS students;

-- TRUNCATE - Remove all rows (faster than DELETE)
TRUNCATE TABLE students;  -- Keeps structure, removes data`})]})]});case"dml":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"DML - Data Manipulation Language"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"DML commands are used to manipulate data within database tables."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"INSERT - Adding Data"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Insert single row
INSERT INTO students (first_name, last_name, email, age, grade)
VALUES ('John', 'Doe', 'john.doe@email.com', 20, 'A');

-- Insert multiple rows
INSERT INTO students (first_name, last_name, email, age, grade) VALUES
    ('Alice', 'Smith', 'alice@email.com', 19, 'B'),
    ('Bob', 'Johnson', 'bob@email.com', 21, 'A'),
    ('Charlie', 'Brown', 'charlie@email.com', 20, 'C');

-- Insert with specific columns
INSERT INTO students (first_name, last_name, age)
VALUES ('David', 'Wilson', 22);

-- Insert from another table
INSERT INTO archive_students
SELECT * FROM students WHERE enrollment_date < '2020-01-01';`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"UPDATE & DELETE"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- UPDATE - Modify existing data
-- Update single record
UPDATE students
SET email = 'john.newemail@email.com'
WHERE id = 1;

-- Update multiple columns
UPDATE students
SET grade = 'A', age = 21
WHERE last_name = 'Doe';

-- Update with calculation
UPDATE students
SET age = age + 1
WHERE enrollment_date < '2024-01-01';

-- Update all rows (use with caution!)
UPDATE students SET grade = 'B';

-- DELETE - Remove data
-- Delete specific records
DELETE FROM students WHERE id = 5;

-- Delete with condition
DELETE FROM students WHERE age < 18;

-- Delete all rows (use with caution!)
DELETE FROM students;

-- Delete with JOIN (some databases)
DELETE students
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
WHERE enrollments.course_id = 101;`})]})]});case"queries":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"SELECT Queries"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"The SELECT statement is used to query and retrieve data from database tables."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Basic SELECT"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT first_name, last_name, email FROM students;

-- Select with alias
SELECT
    first_name AS 'First Name',
    last_name AS 'Last Name',
    age AS 'Student Age'
FROM students;

-- Select distinct values
SELECT DISTINCT grade FROM students;

-- Select with calculations
SELECT
    first_name,
    last_name,
    age,
    age + 5 AS 'Age in 5 years'
FROM students;

-- Concatenate columns
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM students;`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Filtering & Sorting"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- WHERE clause
SELECT * FROM students WHERE age >= 20;
SELECT * FROM students WHERE grade = 'A' AND age < 25;
SELECT * FROM students WHERE grade = 'A' OR grade = 'B';

-- Comparison operators
SELECT * FROM students WHERE age BETWEEN 18 AND 22;
SELECT * FROM students WHERE grade IN ('A', 'B');
SELECT * FROM students WHERE email IS NOT NULL;
SELECT * FROM students WHERE email IS NULL;

-- Pattern matching with LIKE
SELECT * FROM students WHERE first_name LIKE 'J%';  -- Starts with J
SELECT * FROM students WHERE email LIKE '%@gmail.com';  -- Ends with
SELECT * FROM students WHERE last_name LIKE '%son%';  -- Contains

-- ORDER BY - Sorting
SELECT * FROM students ORDER BY age;  -- Ascending (default)
SELECT * FROM students ORDER BY age DESC;  -- Descending
SELECT * FROM students ORDER BY grade ASC, age DESC;  -- Multiple columns

-- LIMIT - Restrict results
SELECT * FROM students LIMIT 10;  -- First 10 rows
SELECT * FROM students ORDER BY age DESC LIMIT 5;  -- Top 5 oldest`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Aggregate Functions"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- COUNT, SUM, AVG, MIN, MAX
SELECT COUNT(*) FROM students;
SELECT COUNT(DISTINCT grade) FROM students;
SELECT AVG(age) AS average_age FROM students;
SELECT MIN(age) AS youngest, MAX(age) AS oldest FROM students;

-- GROUP BY
SELECT grade, COUNT(*) AS student_count
FROM students
GROUP BY grade;

SELECT grade, AVG(age) AS avg_age
FROM students
GROUP BY grade
ORDER BY avg_age DESC;

-- HAVING - Filter grouped results
SELECT grade, COUNT(*) AS count
FROM students
GROUP BY grade
HAVING count > 10;

SELECT course_id, COUNT(*) AS enrollments
FROM enrollments
GROUP BY course_id
HAVING enrollments >= 20
ORDER BY enrollments DESC;`})]})]});case"constraints":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"SQL Constraints"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Constraints are rules enforced on data columns to ensure data integrity and accuracy."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Common Constraints"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- PRIMARY KEY - Unique identifier
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Composite primary key
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- UNIQUE - Ensure unique values
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE
);

-- NOT NULL - Prevent null values
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT  -- Can be NULL
);

-- DEFAULT - Set default value
CREATE TABLE posts (
    id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    status VARCHAR(20) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"CHECK & FOREIGN KEY"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- CHECK - Validate data
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18 AND age <= 65),
    salary DECIMAL(10, 2) CHECK (salary > 0),
    email VARCHAR(100) CHECK (email LIKE '%@%.%')
);

-- FOREIGN KEY - Maintain referential integrity
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Foreign key with actions
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    total DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
        ON DELETE CASCADE  -- Delete orders when customer is deleted
        ON UPDATE CASCADE  -- Update orders when customer id changes
);

-- Add constraint to existing table
ALTER TABLE employees
ADD CONSTRAINT fk_department
FOREIGN KEY (department_id) REFERENCES departments(id);

-- Drop constraint
ALTER TABLE employees
DROP CONSTRAINT fk_department;`})]})]});case"joins":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"SQL Joins"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Joins are used to combine rows from two or more tables based on related columns."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"INNER JOIN"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- INNER JOIN - Returns matching records from both tables
SELECT
    students.first_name,
    students.last_name,
    courses.course_name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;

-- Using table aliases
SELECT
    s.first_name,
    s.last_name,
    c.course_name,
    e.enrollment_date
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id
WHERE s.grade = 'A';

-- Join with aggregation
SELECT
    c.course_name,
    COUNT(e.student_id) AS student_count
FROM courses c
INNER JOIN enrollments e ON c.id = e.course_id
GROUP BY c.id, c.course_name
HAVING student_count > 10;`})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"LEFT, RIGHT, FULL JOINS"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- LEFT JOIN - All records from left table + matching from right
SELECT
    s.first_name,
    s.last_name,
    c.course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id;

-- Find students with no enrollments
SELECT s.*
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
WHERE e.student_id IS NULL;

-- RIGHT JOIN - All records from right table + matching from left
SELECT
    c.course_name,
    COUNT(e.student_id) AS enrolled_count
FROM enrollments e
RIGHT JOIN courses c ON e.course_id = c.id
GROUP BY c.id, c.course_name;

-- FULL OUTER JOIN (not supported in MySQL, use UNION)
SELECT s.first_name, c.course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id
UNION
SELECT s.first_name, c.course_name
FROM students s
RIGHT JOIN enrollments e ON s.id = e.student_id
RIGHT JOIN courses c ON e.course_id = c.id;

-- CROSS JOIN - Cartesian product
SELECT s.first_name, c.course_name
FROM students s
CROSS JOIN courses c;`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"SQL Basics Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Learn the fundamentals of SQL - the language of databases"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:p.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${i===d.id?"bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})};function Xx(){return n.jsx(Mx,{children:n.jsx(jx,{children:n.jsxs(pp,{children:[n.jsx(Z,{path:"/login",element:n.jsx(Bx,{})}),n.jsx(Z,{path:"/*",element:n.jsx(Ux,{children:n.jsxs("div",{className:"min-h-screen",children:[n.jsx(kx,{}),n.jsxs(pp,{children:[n.jsx(Z,{path:"/",element:n.jsx(fp,{})}),n.jsx(Z,{path:"courses/computers-web",element:n.jsx(zl,{})}),n.jsx(Z,{path:"courses/html",element:n.jsx(zn,{})}),n.jsx(Z,{path:"courses/computers-web/program",element:n.jsx(zl,{})}),n.jsx(Z,{path:"courses/computers-web/internet",element:n.jsx(zl,{})}),n.jsx(Z,{path:"courses/computers-web/client-server",element:n.jsx(zl,{})}),n.jsx(Z,{path:"courses/computers-web/website",element:n.jsx(zl,{})}),n.jsx(Z,{path:"courses/html/basics",element:n.jsx(zn,{})}),n.jsx(Z,{path:"courses/html/forms",element:n.jsx(zn,{})}),n.jsx(Z,{path:"courses/html/html5",element:n.jsx(zn,{})}),n.jsx(Z,{path:"courses/html/semantic",element:n.jsx(zn,{})}),n.jsx(Z,{path:"courses/html/accessibility",element:n.jsx(zn,{})}),n.jsx(Z,{path:"courses/css",element:n.jsx(Ma,{})}),n.jsx(Z,{path:"courses/javascript",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/css/basics",element:n.jsx(Ma,{})}),n.jsx(Z,{path:"courses/css/flexbox",element:n.jsx(Ma,{})}),n.jsx(Z,{path:"courses/css/grid",element:n.jsx(Ma,{})}),n.jsx(Z,{path:"courses/css/animations",element:n.jsx(Ma,{})}),n.jsx(Z,{path:"courses/css/responsive",element:n.jsx(Ma,{})}),n.jsx(Z,{path:"courses/css/variables",element:n.jsx(Ma,{})}),n.jsx(Z,{path:"courses/css/sass",element:n.jsx(Ma,{})}),n.jsx(Z,{path:"courses/js/fundamentals",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/js/es6",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/js/dom",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/js/async",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/js/promises",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/js/oop",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/js/modules",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/js/testing",element:n.jsx(ra,{})}),n.jsx(Z,{path:"courses/react",element:n.jsx(Hx,{})}),n.jsx(Z,{path:"courses/angular",element:n.jsx(_x,{})}),n.jsx(Z,{path:"courses/nextjs",element:n.jsx(Ix,{})}),n.jsx(Z,{path:"courses/typescript",element:n.jsx(qx,{})}),n.jsx(Z,{path:"courses/java",element:n.jsx(zx,{})}),n.jsx(Z,{path:"courses/nodejs",element:n.jsx(Gx,{})}),n.jsx(Z,{path:"courses/expressjs",element:n.jsx(Yx,{})}),n.jsx(Z,{path:"courses/mongodb",element:n.jsx(Jx,{})}),n.jsx(Z,{path:"courses/java-spring",element:n.jsx(Px,{})}),n.jsx(Z,{path:"courses/mysql",element:n.jsx(Fx,{})}),n.jsx(Z,{path:"courses/postgresql",element:n.jsx(Vx,{})}),n.jsx(Z,{path:"courses/sql-basics",element:n.jsx(Qx,{})}),n.jsx(Z,{path:"*",element:n.jsx(fp,{})})]})]})})})]})})})}uh.createRoot(document.getElementById("root")).render(n.jsx(w.StrictMode,{children:n.jsx(Xx,{})}));
