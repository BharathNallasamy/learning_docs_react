(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const E of p.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&c(E)}).observe(document,{childList:!0,subtree:!0});function f(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=f(d);fetch(d.href,p)}})();var Do={exports:{}},Hn={};var $m;function tg(){if($m)return Hn;$m=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function f(c,d,p){var E=null;if(p!==void 0&&(E=""+p),d.key!==void 0&&(E=""+d.key),"key"in d){p={};for(var w in d)w!=="key"&&(p[w]=d[w])}else p=d;return d=p.ref,{$$typeof:o,type:c,key:E,ref:d!==void 0?d:null,props:p}}return Hn.Fragment=m,Hn.jsx=f,Hn.jsxs=f,Hn}var ef;function ag(){return ef||(ef=1,Do.exports=tg()),Do.exports}var n=ag(),Uo={exports:{}},$={};var tf;function lg(){if(tf)return $;tf=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),E=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),z=Symbol.iterator;function Q(b){return b===null||typeof b!="object"?null:(b=z&&b[z]||b["@@iterator"],typeof b=="function"?b:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,q={};function G(b,U,B){this.props=b,this.context=U,this.refs=q,this.updater=B||Y}G.prototype.isReactComponent={},G.prototype.setState=function(b,U){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,U,"setState")},G.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function J(){}J.prototype=G.prototype;function _(b,U,B){this.props=b,this.context=U,this.refs=q,this.updater=B||Y}var K=_.prototype=new J;K.constructor=_,k(K,G.prototype),K.isPureReactComponent=!0;var fe=Array.isArray;function ze(){}var ae={H:null,A:null,T:null,S:null},Be=Object.prototype.hasOwnProperty;function we(b,U,B){var V=B.ref;return{$$typeof:o,type:b,key:U,ref:V!==void 0?V:null,props:B}}function st(b,U){return we(b.type,U,b.props)}function rt(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function We(b){var U={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(B){return U[B]})}var Ua=/\/+/g;function kt(b,U){return typeof b=="object"&&b!==null&&b.key!=null?We(""+b.key):U.toString(36)}function wt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ze,ze):(b.status="pending",b.then(function(U){b.status==="pending"&&(b.status="fulfilled",b.value=U)},function(U){b.status==="pending"&&(b.status="rejected",b.reason=U)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function O(b,U,B,V,ee){var ne=typeof b;(ne==="undefined"||ne==="boolean")&&(b=null);var he=!1;if(b===null)he=!0;else switch(ne){case"bigint":case"string":case"number":he=!0;break;case"object":switch(b.$$typeof){case o:case m:he=!0;break;case C:return he=b._init,O(he(b._payload),U,B,V,ee)}}if(he)return ee=ee(b),he=V===""?"."+kt(b,0):V,fe(ee)?(B="",he!=null&&(B=he.replace(Ua,"$&/")+"/"),O(ee,U,B,"",function(Yl){return Yl})):ee!=null&&(rt(ee)&&(ee=st(ee,B+(ee.key==null||b&&b.key===ee.key?"":(""+ee.key).replace(Ua,"$&/")+"/")+he)),U.push(ee)),1;he=0;var Fe=V===""?".":V+":";if(fe(b))for(var Oe=0;Oe<b.length;Oe++)V=b[Oe],ne=Fe+kt(V,Oe),he+=O(V,U,B,ne,ee);else if(Oe=Q(b),typeof Oe=="function")for(b=Oe.call(b),Oe=0;!(V=b.next()).done;)V=V.value,ne=Fe+kt(V,Oe++),he+=O(V,U,B,ne,ee);else if(ne==="object"){if(typeof b.then=="function")return O(wt(b),U,B,V,ee);throw U=String(b),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return he}function H(b,U,B){if(b==null)return b;var V=[],ee=0;return O(b,V,"","",function(ne){return U.call(B,ne,ee++)}),V}function W(b){if(b._status===-1){var U=b._result;U=U(),U.then(function(B){(b._status===0||b._status===-1)&&(b._status=1,b._result=B)},function(B){(b._status===0||b._status===-1)&&(b._status=2,b._result=B)}),b._status===-1&&(b._status=0,b._result=U)}if(b._status===1)return b._result.default;throw b._result}var xe=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Ne={map:H,forEach:function(b,U,B){H(b,function(){U.apply(this,arguments)},B)},count:function(b){var U=0;return H(b,function(){U++}),U},toArray:function(b){return H(b,function(U){return U})||[]},only:function(b){if(!rt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return $.Activity=L,$.Children=Ne,$.Component=G,$.Fragment=f,$.Profiler=d,$.PureComponent=_,$.StrictMode=c,$.Suspense=v,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,$.__COMPILER_RUNTIME={__proto__:null,c:function(b){return ae.H.useMemoCache(b)}},$.cache=function(b){return function(){return b.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(b,U,B){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var V=k({},b.props),ee=b.key;if(U!=null)for(ne in U.key!==void 0&&(ee=""+U.key),U)!Be.call(U,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&U.ref===void 0||(V[ne]=U[ne]);var ne=arguments.length-2;if(ne===1)V.children=B;else if(1<ne){for(var he=Array(ne),Fe=0;Fe<ne;Fe++)he[Fe]=arguments[Fe+2];V.children=he}return we(b.type,ee,V)},$.createContext=function(b){return b={$$typeof:E,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:p,_context:b},b},$.createElement=function(b,U,B){var V,ee={},ne=null;if(U!=null)for(V in U.key!==void 0&&(ne=""+U.key),U)Be.call(U,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=U[V]);var he=arguments.length-2;if(he===1)ee.children=B;else if(1<he){for(var Fe=Array(he),Oe=0;Oe<he;Oe++)Fe[Oe]=arguments[Oe+2];ee.children=Fe}if(b&&b.defaultProps)for(V in he=b.defaultProps,he)ee[V]===void 0&&(ee[V]=he[V]);return we(b,ne,ee)},$.createRef=function(){return{current:null}},$.forwardRef=function(b){return{$$typeof:w,render:b}},$.isValidElement=rt,$.lazy=function(b){return{$$typeof:C,_payload:{_status:-1,_result:b},_init:W}},$.memo=function(b,U){return{$$typeof:g,type:b,compare:U===void 0?null:U}},$.startTransition=function(b){var U=ae.T,B={};ae.T=B;try{var V=b(),ee=ae.S;ee!==null&&ee(B,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ze,xe)}catch(ne){xe(ne)}finally{U!==null&&B.types!==null&&(U.types=B.types),ae.T=U}},$.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},$.use=function(b){return ae.H.use(b)},$.useActionState=function(b,U,B){return ae.H.useActionState(b,U,B)},$.useCallback=function(b,U){return ae.H.useCallback(b,U)},$.useContext=function(b){return ae.H.useContext(b)},$.useDebugValue=function(){},$.useDeferredValue=function(b,U){return ae.H.useDeferredValue(b,U)},$.useEffect=function(b,U){return ae.H.useEffect(b,U)},$.useEffectEvent=function(b){return ae.H.useEffectEvent(b)},$.useId=function(){return ae.H.useId()},$.useImperativeHandle=function(b,U,B){return ae.H.useImperativeHandle(b,U,B)},$.useInsertionEffect=function(b,U){return ae.H.useInsertionEffect(b,U)},$.useLayoutEffect=function(b,U){return ae.H.useLayoutEffect(b,U)},$.useMemo=function(b,U){return ae.H.useMemo(b,U)},$.useOptimistic=function(b,U){return ae.H.useOptimistic(b,U)},$.useReducer=function(b,U,B){return ae.H.useReducer(b,U,B)},$.useRef=function(b){return ae.H.useRef(b)},$.useState=function(b){return ae.H.useState(b)},$.useSyncExternalStore=function(b,U,B){return ae.H.useSyncExternalStore(b,U,B)},$.useTransition=function(){return ae.H.useTransition()},$.version="19.2.0",$}var af;function Io(){return af||(af=1,Uo.exports=lg()),Uo.exports}var T=Io(),_o={exports:{}},zn={},Ho={exports:{}},zo={};var lf;function ng(){return lf||(lf=1,(function(o){function m(O,H){var W=O.length;O.push(H);e:for(;0<W;){var xe=W-1>>>1,Ne=O[xe];if(0<d(Ne,H))O[xe]=H,O[W]=Ne,W=xe;else break e}}function f(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var H=O[0],W=O.pop();if(W!==H){O[0]=W;e:for(var xe=0,Ne=O.length,b=Ne>>>1;xe<b;){var U=2*(xe+1)-1,B=O[U],V=U+1,ee=O[V];if(0>d(B,W))V<Ne&&0>d(ee,B)?(O[xe]=ee,O[V]=W,xe=V):(O[xe]=B,O[U]=W,xe=U);else if(V<Ne&&0>d(ee,W))O[xe]=ee,O[V]=W,xe=V;else break e}}return H}function d(O,H){var W=O.sortIndex-H.sortIndex;return W!==0?W:O.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;o.unstable_now=function(){return p.now()}}else{var E=Date,w=E.now();o.unstable_now=function(){return E.now()-w}}var v=[],g=[],C=1,L=null,z=3,Q=!1,Y=!1,k=!1,q=!1,G=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function K(O){for(var H=f(g);H!==null;){if(H.callback===null)c(g);else if(H.startTime<=O)c(g),H.sortIndex=H.expirationTime,m(v,H);else break;H=f(g)}}function fe(O){if(k=!1,K(O),!Y)if(f(v)!==null)Y=!0,ze||(ze=!0,We());else{var H=f(g);H!==null&&wt(fe,H.startTime-O)}}var ze=!1,ae=-1,Be=5,we=-1;function st(){return q?!0:!(o.unstable_now()-we<Be)}function rt(){if(q=!1,ze){var O=o.unstable_now();we=O;var H=!0;try{e:{Y=!1,k&&(k=!1,J(ae),ae=-1),Q=!0;var W=z;try{t:{for(K(O),L=f(v);L!==null&&!(L.expirationTime>O&&st());){var xe=L.callback;if(typeof xe=="function"){L.callback=null,z=L.priorityLevel;var Ne=xe(L.expirationTime<=O);if(O=o.unstable_now(),typeof Ne=="function"){L.callback=Ne,K(O),H=!0;break t}L===f(v)&&c(v),K(O)}else c(v);L=f(v)}if(L!==null)H=!0;else{var b=f(g);b!==null&&wt(fe,b.startTime-O),H=!1}}break e}finally{L=null,z=W,Q=!1}H=void 0}}finally{H?We():ze=!1}}}var We;if(typeof _=="function")We=function(){_(rt)};else if(typeof MessageChannel<"u"){var Ua=new MessageChannel,kt=Ua.port2;Ua.port1.onmessage=rt,We=function(){kt.postMessage(null)}}else We=function(){G(rt,0)};function wt(O,H){ae=G(function(){O(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_next=function(O){switch(z){case 1:case 2:case 3:var H=3;break;default:H=z}var W=z;z=H;try{return O()}finally{z=W}},o.unstable_requestPaint=function(){q=!0},o.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=z;z=O;try{return H()}finally{z=W}},o.unstable_scheduleCallback=function(O,H,W){var xe=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xe+W:xe):W=xe,O){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=W+Ne,O={id:C++,callback:H,priorityLevel:O,startTime:W,expirationTime:Ne,sortIndex:-1},W>xe?(O.sortIndex=W,m(g,O),f(v)===null&&O===f(g)&&(k?(J(ae),ae=-1):k=!0,wt(fe,W-xe))):(O.sortIndex=Ne,m(v,O),Y||Q||(Y=!0,ze||(ze=!0,We()))),O},o.unstable_shouldYield=st,o.unstable_wrapCallback=function(O){var H=z;return function(){var W=z;z=H;try{return O.apply(this,arguments)}finally{z=W}}}})(zo)),zo}var nf;function sg(){return nf||(nf=1,Ho.exports=ng()),Ho.exports}var Bo={exports:{}},Xe={};var sf;function rg(){if(sf)return Xe;sf=1;var o=Io();function m(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)g+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(m(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(v,g,C){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:L==null?null:""+L,children:v,containerInfo:g,implementation:C}}var E=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Xe.createPortal=function(v,g){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(m(299));return p(v,g,null,C)},Xe.flushSync=function(v){var g=E.T,C=c.p;try{if(E.T=null,c.p=2,v)return v()}finally{E.T=g,c.p=C,c.d.f()}},Xe.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(v,g))},Xe.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Xe.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var C=g.as,L=w(C,g.crossOrigin),z=typeof g.integrity=="string"?g.integrity:void 0,Q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;C==="style"?c.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:L,integrity:z,fetchPriority:Q}):C==="script"&&c.d.X(v,{crossOrigin:L,integrity:z,fetchPriority:Q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Xe.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var C=w(g.as,g.crossOrigin);c.d.M(v,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(v)},Xe.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var C=g.as,L=w(C,g.crossOrigin);c.d.L(v,C,{crossOrigin:L,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Xe.preloadModule=function(v,g){if(typeof v=="string")if(g){var C=w(g.as,g.crossOrigin);c.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(v)},Xe.requestFormReset=function(v){c.d.r(v)},Xe.unstable_batchedUpdates=function(v,g){return v(g)},Xe.useFormState=function(v,g,C){return E.H.useFormState(v,g,C)},Xe.useFormStatus=function(){return E.H.useHostTransitionStatus()},Xe.version="19.2.0",Xe}var rf;function ig(){if(rf)return Bo.exports;rf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),Bo.exports=rg(),Bo.exports}var of;function og(){if(of)return zn;of=1;var o=sg(),m=Io(),f=ig();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(p(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var s=a.return;if(s===null)break;var r=s.alternate;if(r===null){if(l=s.return,l!==null){a=l;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===a)return v(s),e;if(r===l)return v(s),t;r=r.sibling}throw Error(c(188))}if(a.return!==l.return)a=s,l=r;else{for(var i=!1,u=s.child;u;){if(u===a){i=!0,a=s,l=r;break}if(u===l){i=!0,l=s,a=r;break}u=u.sibling}if(!i){for(u=r.child;u;){if(u===a){i=!0,a=r,l=s;break}if(u===l){i=!0,l=r,a=s;break}u=u.sibling}if(!i)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var L=Object.assign,z=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),_=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var Ua=Symbol.for("react.client.reference");function kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ua?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case G:return"Profiler";case q:return"StrictMode";case fe:return"Suspense";case ze:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case _:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:kt(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return kt(e(t))}catch{}}return null}var wt=Array.isArray,O=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},xe=[],Ne=-1;function b(e){return{current:e}}function U(e){0>Ne||(e.current=xe[Ne],xe[Ne]=null,Ne--)}function B(e,t){Ne++,xe[Ne]=e.current,e.current=t}var V=b(null),ee=b(null),ne=b(null),he=b(null);function Fe(e,t){switch(B(ne,t),B(ee,e),B(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sm(t),e=Em(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(V),B(V,e)}function Oe(){U(V),U(ee),U(ne)}function Yl(e){e.memoizedState!==null&&B(he,e);var t=V.current,a=Em(t,e.type);t!==a&&(B(ee,e),B(V,a))}function In(e){ee.current===e&&(U(V),U(ee)),he.current===e&&(U(he),Ln._currentValue=W)}var hr,Po;function _a(e){if(hr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);hr=t&&t[1]||"",Po=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hr+e+Po}var pr=!1;function gr(e,t){if(!e||pr)return"";pr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(R){var j=R}Reflect.construct(e,[],D)}else{try{D.call()}catch(R){j=R}e.call(D.prototype)}}else{try{throw Error()}catch(R){j=R}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(R){if(R&&j&&typeof R.stack=="string")return[R.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),i=r[0],u=r[1];if(i&&u){var h=i.split(`
`),S=u.split(`
`);for(s=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;if(l===h.length||s===S.length)for(l=h.length-1,s=S.length-1;1<=l&&0<=s&&h[l]!==S[s];)s--;for(;1<=l&&0<=s;l--,s--)if(h[l]!==S[s]){if(l!==1||s!==1)do if(l--,s--,0>s||h[l]!==S[s]){var A=`
`+h[l].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=l&&0<=s);break}}}finally{pr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_a(a):""}function Lf(e,t){switch(e.tag){case 26:case 27:case 5:return _a(e.type);case 16:return _a("Lazy");case 13:return e.child!==t&&t!==null?_a("Suspense Fallback"):_a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return gr(e.type,!1);case 11:return gr(e.type.render,!1);case 1:return gr(e.type,!0);case 31:return _a("Activity");default:return""}}function $o(e){try{var t="",a=null;do t+=Lf(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var xr=Object.prototype.hasOwnProperty,br=o.unstable_scheduleCallback,yr=o.unstable_cancelCallback,Df=o.unstable_shouldYield,Uf=o.unstable_requestPaint,it=o.unstable_now,_f=o.unstable_getCurrentPriorityLevel,ec=o.unstable_ImmediatePriority,tc=o.unstable_UserBlockingPriority,Jn=o.unstable_NormalPriority,Hf=o.unstable_LowPriority,ac=o.unstable_IdlePriority,zf=o.log,Bf=o.unstable_setDisableYieldValue,Il=null,ot=null;function oa(e){if(typeof zf=="function"&&Bf(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Il,e)}catch{}}var ct=Math.clz32?Math.clz32:Gf,qf=Math.log,kf=Math.LN2;function Gf(e){return e>>>=0,e===0?32:31-(qf(e)/kf|0)|0}var Vn=256,Qn=262144,Xn=4194304;function Ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~r,l!==0?s=Ha(l):(i&=u,i!==0?s=Ha(i):a||(a=u&~e,a!==0&&(s=Ha(a))))):(u=l&~r,u!==0?s=Ha(u):i!==0?s=Ha(i):a||(a=l&~e,a!==0&&(s=Ha(a)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:s}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Yf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(){var e=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),e}function vr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function If(e,t,a,l,s,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,S=e.hiddenUpdates;for(a=i&~a;0<a;){var A=31-ct(a),D=1<<A;u[A]=0,h[A]=-1;var j=S[A];if(j!==null)for(S[A]=null,A=0;A<j.length;A++){var R=j[A];R!==null&&(R.lane&=-536870913)}a&=~D}l!==0&&nc(e,l,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function nc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ct(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function sc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ct(a),s=1<<l;s&t|e[l]&t&&(e[l]|=t),a&=~s}}function rc(e,t){var a=t&-t;return a=(a&42)!==0?1:Nr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Nr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ic(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Qm(e.type))}function oc(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var ca=Math.random().toString(36).slice(2),Ye="__reactFiber$"+ca,Pe="__reactProps$"+ca,el="__reactContainer$"+ca,Er="__reactEvents$"+ca,Jf="__reactListeners$"+ca,Vf="__reactHandles$"+ca,cc="__reactResources$"+ca,Ql="__reactMarker$"+ca;function jr(e){delete e[Ye],delete e[Pe],delete e[Er],delete e[Jf],delete e[Vf]}function tl(e){var t=e[Ye];if(t)return t;for(var a=e.parentNode;a;){if(t=a[el]||a[Ye]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Om(e);e!==null;){if(a=e[Ye])return a;e=Om(e)}return t}e=a,a=e.parentNode}return null}function al(e){if(e=e[Ye]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ll(e){var t=e[cc];return t||(t=e[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[Ql]=!0}var uc=new Set,dc={};function za(e,t){nl(e,t),nl(e+"Capture",t)}function nl(e,t){for(dc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var Qf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},fc={};function Xf(e){return xr.call(fc,e)?!0:xr.call(mc,e)?!1:Qf.test(e)?fc[e]=!0:(mc[e]=!0,!1)}function Kn(e,t,a){if(Xf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ff(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){if(!e._valueTracker){var t=hc(e)?"checked":"value";e._valueTracker=Ff(e,t,""+e[t])}}function pc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=hc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kf=/[\n"\\]/g;function bt(e){return e.replace(Kf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Rr(e,t,a,l,s,r,i,u){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?wr(e,i,xt(t)):a!=null?wr(e,i,xt(a)):l!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+xt(u):e.removeAttribute("name")}function gc(e,t,a,l,s,r,i,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Tr(e);return}a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Tr(e)}function wr(e,t,a){t==="number"&&Wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sl(e,t,a,l){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function xc(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function bc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(wt(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Tr(e)}function rl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Zf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Zf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function vc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&a[s]!==l&&yc(e,s,l)}else for(var r in t)t.hasOwnProperty(r)&&yc(e,r,t[r])}function Cr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pn(e){return Pf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yt(){}var Ar=null;function Or(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,ol=null;function Nc(e){var t=al(e);if(t&&(e=t.stateNode)){var a=e[Pe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Rr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var s=l[Pe]||null;if(!s)throw Error(c(90));Rr(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&pc(l)}break e;case"textarea":xc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&sl(e,!!a.multiple,t,!1)}}}var Mr=!1;function Sc(e,t,a){if(Mr)return e(t,a);Mr=!0;try{var l=e(t);return l}finally{if(Mr=!1,(il!==null||ol!==null)&&(qs(),il&&(t=il,e=ol,ol=il=null,Nc(t),e)))for(t=0;t<e.length;t++)Nc(e[t])}}function Fl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Pe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lr=!1;if(It)try{var Kl={};Object.defineProperty(Kl,"passive",{get:function(){Lr=!0}}),window.addEventListener("test",Kl,Kl),window.removeEventListener("test",Kl,Kl)}catch{Lr=!1}var ua=null,Dr=null,$n=null;function Ec(){if($n)return $n;var e,t=Dr,a=t.length,l,s="value"in ua?ua.value:ua.textContent,r=s.length;for(e=0;e<a&&t[e]===s[e];e++);var i=a-e;for(l=1;l<=i&&t[a-l]===s[r-l];l++);return $n=s.slice(e,1<l?1-l:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function jc(){return!1}function $e(e){function t(a,l,s,r,i){this._reactName=a,this._targetInst=s,this.type=l,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ts:jc,this.isPropagationStopped=jc,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=$e(Ba),Zl=L({},Ba,{view:0,detail:0}),$f=$e(Zl),Ur,_r,Wl,ls=L({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wl&&(Wl&&e.type==="mousemove"?(Ur=e.screenX-Wl.screenX,_r=e.screenY-Wl.screenY):_r=Ur=0,Wl=e),Ur)},movementY:function(e){return"movementY"in e?e.movementY:_r}}),Tc=$e(ls),eh=L({},ls,{dataTransfer:0}),th=$e(eh),ah=L({},Zl,{relatedTarget:0}),Hr=$e(ah),lh=L({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=$e(lh),sh=L({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=$e(sh),ih=L({},Ba,{data:0}),Rc=$e(ih),oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uh[e])?!!t[e]:!1}function zr(){return dh}var mh=L({},Zl,{key:function(e){if(e.key){var t=oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zr,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fh=$e(mh),hh=L({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=$e(hh),ph=L({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zr}),gh=$e(ph),xh=L({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=$e(xh),yh=L({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=$e(yh),Nh=L({},Ba,{newState:0,oldState:0}),Sh=$e(Nh),Eh=[9,13,27,32],Br=It&&"CompositionEvent"in window,Pl=null;It&&"documentMode"in document&&(Pl=document.documentMode);var jh=It&&"TextEvent"in window&&!Pl,Cc=It&&(!Br||Pl&&8<Pl&&11>=Pl),Ac=" ",Oc=!1;function Mc(e,t){switch(e){case"keyup":return Eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cl=!1;function Th(e,t){switch(e){case"compositionend":return Lc(t);case"keypress":return t.which!==32?null:(Oc=!0,Ac);case"textInput":return e=t.data,e===Ac&&Oc?null:e;default:return null}}function Rh(e,t){if(cl)return e==="compositionend"||!Br&&Mc(e,t)?(e=Ec(),$n=Dr=ua=null,cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var wh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wh[e.type]:t==="textarea"}function Uc(e,t,a,l){il?ol?ol.push(l):ol=[l]:il=l,t=Qs(t,"onChange"),0<t.length&&(a=new as("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var $l=null,en=null;function Ch(e){gm(e,0)}function ns(e){var t=Xl(e);if(pc(t))return e}function _c(e,t){if(e==="change")return t}var Hc=!1;if(It){var qr;if(It){var kr="oninput"in document;if(!kr){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),kr=typeof zc.oninput=="function"}qr=kr}else qr=!1;Hc=qr&&(!document.documentMode||9<document.documentMode)}function Bc(){$l&&($l.detachEvent("onpropertychange",qc),en=$l=null)}function qc(e){if(e.propertyName==="value"&&ns(en)){var t=[];Uc(t,en,e,Or(e)),Sc(Ch,t)}}function Ah(e,t,a){e==="focusin"?(Bc(),$l=t,en=a,$l.attachEvent("onpropertychange",qc)):e==="focusout"&&Bc()}function Oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ns(en)}function Mh(e,t){if(e==="click")return ns(t)}function Lh(e,t){if(e==="input"||e==="change")return ns(t)}function Dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Dh;function tn(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var s=a[l];if(!xr.call(t,s)||!ut(e[s],t[s]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var a=kc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kc(a)}}function Yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ic(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wn(e.document)}return t}function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uh=It&&"documentMode"in document&&11>=document.documentMode,ul=null,Yr=null,an=null,Ir=!1;function Jc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ir||ul==null||ul!==Wn(l)||(l=ul,"selectionStart"in l&&Gr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),an&&tn(an,l)||(an=l,l=Qs(Yr,"onSelect"),0<l.length&&(t=new as("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ul)))}function qa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var dl={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Jr={},Vc={};It&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete dl.animationend.animation,delete dl.animationiteration.animation,delete dl.animationstart.animation),"TransitionEvent"in window||delete dl.transitionend.transition);function ka(e){if(Jr[e])return Jr[e];if(!dl[e])return e;var t=dl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Vc)return Jr[e]=t[a];return e}var Qc=ka("animationend"),Xc=ka("animationiteration"),Fc=ka("animationstart"),_h=ka("transitionrun"),Hh=ka("transitionstart"),zh=ka("transitioncancel"),Kc=ka("transitionend"),Zc=new Map,Vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vr.push("scrollEnd");function Ct(e,t){Zc.set(e,t),za(t,[e])}var ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],ml=0,Qr=0;function rs(){for(var e=ml,t=Qr=ml=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var s=yt[t];yt[t++]=null;var r=yt[t];if(yt[t++]=null,l!==null&&s!==null){var i=l.pending;i===null?s.next=s:(s.next=i.next,i.next=s),l.pending=s}r!==0&&Wc(a,s,r)}}function is(e,t,a,l){yt[ml++]=e,yt[ml++]=t,yt[ml++]=a,yt[ml++]=l,Qr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xr(e,t,a,l){return is(e,t,a,l),os(e)}function Ga(e,t){return is(e,null,null,t),os(e)}function Wc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var s=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-ct(a),e=r.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=a|536870912),r):null}function os(e){if(50<Tn)throw Tn=0,ao=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fl={};function Bh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,l){return new Bh(e,t,a,l)}function Fr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cs(e,t,a,l,s,r){var i=0;if(l=e,typeof e=="function")Fr(e)&&(i=1);else if(typeof e=="string")i=Ip(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=dt(31,a,t,s),e.elementType=we,e.lanes=r,e;case k:return Ya(a.children,s,r,t);case q:i=8,s|=24;break;case G:return e=dt(12,a,t,s|2),e.elementType=G,e.lanes=r,e;case fe:return e=dt(13,a,t,s),e.elementType=fe,e.lanes=r,e;case ze:return e=dt(19,a,t,s),e.elementType=ze,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:i=10;break e;case J:i=9;break e;case K:i=11;break e;case ae:i=14;break e;case Be:i=16,l=null;break e}i=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=dt(i,a,t,s),t.elementType=e,t.type=l,t.lanes=r,t}function Ya(e,t,a,l){return e=dt(7,e,l,t),e.lanes=a,e}function Kr(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function $c(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Zr(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var eu=new WeakMap;function vt(e,t){if(typeof e=="object"&&e!==null){var a=eu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$o(t)},eu.set(e,t),t)}return{value:e,source:t,stack:$o(t)}}var hl=[],pl=0,us=null,ln=0,Nt=[],St=0,da=null,Dt=1,Ut="";function Vt(e,t){hl[pl++]=ln,hl[pl++]=us,us=e,ln=t}function tu(e,t,a){Nt[St++]=Dt,Nt[St++]=Ut,Nt[St++]=da,da=e;var l=Dt;e=Ut;var s=32-ct(l)-1;l&=~(1<<s),a+=1;var r=32-ct(t)+s;if(30<r){var i=s-s%5;r=(l&(1<<i)-1).toString(32),l>>=i,s-=i,Dt=1<<32-ct(t)+s|a<<s|l,Ut=r+e}else Dt=1<<r|a<<s|l,Ut=e}function Wr(e){e.return!==null&&(Vt(e,1),tu(e,1,0))}function Pr(e){for(;e===us;)us=hl[--pl],hl[pl]=null,ln=hl[--pl],hl[pl]=null;for(;e===da;)da=Nt[--St],Nt[St]=null,Ut=Nt[--St],Nt[St]=null,Dt=Nt[--St],Nt[St]=null}function au(e,t){Nt[St++]=Dt,Nt[St++]=Ut,Nt[St++]=da,Dt=t.id,Ut=t.overflow,da=e}var Ie=null,Ee=null,ce=!1,ma=null,Et=!1,$r=Error(c(519));function fa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nn(vt(t,e)),$r}function lu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ye]=e,t[Pe]=l,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<wn.length;a++)re(wn[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),gc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),bc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||vm(t.textContent,a)?(l.popover!=null&&(re("beforetoggle",t),re("toggle",t)),l.onScroll!=null&&re("scroll",t),l.onScrollEnd!=null&&re("scrollend",t),l.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||fa(e,!0)}function nu(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ie=Ie.return}}function gl(e){if(e!==Ie)return!1;if(!ce)return nu(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bo(e.type,e.memoizedProps)),a=!a),a&&Ee&&fa(e),nu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Am(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Am(e)}else t===27?(t=Ee,wa(e.type)?(e=Eo,Eo=null,Ee=e):Ee=t):Ee=Ie?Tt(e.stateNode.nextSibling):null;return!0}function Ia(){Ee=Ie=null,ce=!1}function ei(){var e=ma;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),ma=null),e}function nn(e){ma===null?ma=[e]:ma.push(e)}var ti=b(null),Ja=null,Qt=null;function ha(e,t,a){B(ti,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=ti.current,U(ti)}function ai(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function li(e,t,a,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var i=s.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=s;for(var h=0;h<t.length;h++)if(u.context===t[h]){r.lanes|=a,u=r.alternate,u!==null&&(u.lanes|=a),ai(r.return,a,e),l||(i=null);break e}r=u.next}}else if(s.tag===18){if(i=s.return,i===null)throw Error(c(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),ai(i,a,e),i=null}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===e){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}}function xl(e,t,a,l){e=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var i=s.alternate;if(i===null)throw Error(c(387));if(i=i.memoizedProps,i!==null){var u=s.type;ut(s.pendingProps.value,i.value)||(e!==null?e.push(u):e=[u])}}else if(s===he.current){if(i=s.alternate,i===null)throw Error(c(387));i.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Ln):e=[Ln])}s=s.return}e!==null&&li(t,e,a,l),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Va(e){Ja=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return su(Ja,e)}function ms(e,t){return Ja===null&&Va(e),su(e,t)}function su(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(e===null)throw Error(c(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return a}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},kh=o.unstable_scheduleCallback,Gh=o.unstable_NormalPriority,De={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ni(){return{controller:new qh,data:new Map,refCount:0}}function sn(e){e.refCount--,e.refCount===0&&kh(Gh,function(){e.controller.abort()})}var rn=null,si=0,bl=0,yl=null;function Yh(e,t){if(rn===null){var a=rn=[];si=0,bl=oo(),yl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return si++,t.then(ru,ru),t}function ru(){if(--si===0&&rn!==null){yl!==null&&(yl.status="fulfilled");var e=rn;rn=null,bl=0,yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ih(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),l}var iu=O.S;O.S=function(e,t){Jd=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Yh(e,t),iu!==null&&iu(e,t)};var Qa=b(null);function ri(){var e=Qa.current;return e!==null?e:Se.pooledCache}function fs(e,t){t===null?B(Qa,Qa.current):B(Qa,t.pool)}function ou(){var e=ri();return e===null?null:{parent:De._currentValue,pool:e}}var vl=Error(c(460)),ii=Error(c(474)),hs=Error(c(542)),ps={then:function(){}};function cu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Yt,Yt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mu(e),e;default:if(typeof t.status=="string")t.then(Yt,Yt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mu(e),e}throw Fa=t,vl}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fa=a,vl):a}}var Fa=null;function du(){if(Fa===null)throw Error(c(459));var e=Fa;return Fa=null,e}function mu(e){if(e===vl||e===hs)throw Error(c(483))}var Nl=null,on=0;function gs(e){var t=on;return on+=1,Nl===null&&(Nl=[]),uu(Nl,e,t)}function cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xs(e,t){throw t.$$typeof===z?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fu(e){function t(y,x){if(e){var N=y.deletions;N===null?(y.deletions=[x],y.flags|=16):N.push(x)}}function a(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function l(y){for(var x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function s(y,x){return y=Jt(y,x),y.index=0,y.sibling=null,y}function r(y,x,N){return y.index=N,e?(N=y.alternate,N!==null?(N=N.index,N<x?(y.flags|=67108866,x):N):(y.flags|=67108866,x)):(y.flags|=1048576,x)}function i(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function u(y,x,N,M){return x===null||x.tag!==6?(x=Kr(N,y.mode,M),x.return=y,x):(x=s(x,N),x.return=y,x)}function h(y,x,N,M){var F=N.type;return F===k?A(y,x,N.props.children,M,N.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Be&&Xa(F)===x.type)?(x=s(x,N.props),cn(x,N),x.return=y,x):(x=cs(N.type,N.key,N.props,null,y.mode,M),cn(x,N),x.return=y,x)}function S(y,x,N,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==N.containerInfo||x.stateNode.implementation!==N.implementation?(x=Zr(N,y.mode,M),x.return=y,x):(x=s(x,N.children||[]),x.return=y,x)}function A(y,x,N,M,F){return x===null||x.tag!==7?(x=Ya(N,y.mode,M,F),x.return=y,x):(x=s(x,N),x.return=y,x)}function D(y,x,N){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Kr(""+x,y.mode,N),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Q:return N=cs(x.type,x.key,x.props,null,y.mode,N),cn(N,x),N.return=y,N;case Y:return x=Zr(x,y.mode,N),x.return=y,x;case Be:return x=Xa(x),D(y,x,N)}if(wt(x)||We(x))return x=Ya(x,y.mode,N,null),x.return=y,x;if(typeof x.then=="function")return D(y,gs(x),N);if(x.$$typeof===_)return D(y,ms(y,x),N);xs(y,x)}return null}function j(y,x,N,M){var F=x!==null?x.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return F!==null?null:u(y,x,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Q:return N.key===F?h(y,x,N,M):null;case Y:return N.key===F?S(y,x,N,M):null;case Be:return N=Xa(N),j(y,x,N,M)}if(wt(N)||We(N))return F!==null?null:A(y,x,N,M,null);if(typeof N.then=="function")return j(y,x,gs(N),M);if(N.$$typeof===_)return j(y,x,ms(y,N),M);xs(y,N)}return null}function R(y,x,N,M,F){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return y=y.get(N)||null,u(x,y,""+M,F);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Q:return y=y.get(M.key===null?N:M.key)||null,h(x,y,M,F);case Y:return y=y.get(M.key===null?N:M.key)||null,S(x,y,M,F);case Be:return M=Xa(M),R(y,x,N,M,F)}if(wt(M)||We(M))return y=y.get(N)||null,A(x,y,M,F,null);if(typeof M.then=="function")return R(y,x,N,gs(M),F);if(M.$$typeof===_)return R(y,x,N,ms(x,M),F);xs(x,M)}return null}function I(y,x,N,M){for(var F=null,ue=null,X=x,le=x=0,oe=null;X!==null&&le<N.length;le++){X.index>le?(oe=X,X=null):oe=X.sibling;var de=j(y,X,N[le],M);if(de===null){X===null&&(X=oe);break}e&&X&&de.alternate===null&&t(y,X),x=r(de,x,le),ue===null?F=de:ue.sibling=de,ue=de,X=oe}if(le===N.length)return a(y,X),ce&&Vt(y,le),F;if(X===null){for(;le<N.length;le++)X=D(y,N[le],M),X!==null&&(x=r(X,x,le),ue===null?F=X:ue.sibling=X,ue=X);return ce&&Vt(y,le),F}for(X=l(X);le<N.length;le++)oe=R(X,y,le,N[le],M),oe!==null&&(e&&oe.alternate!==null&&X.delete(oe.key===null?le:oe.key),x=r(oe,x,le),ue===null?F=oe:ue.sibling=oe,ue=oe);return e&&X.forEach(function(La){return t(y,La)}),ce&&Vt(y,le),F}function Z(y,x,N,M){if(N==null)throw Error(c(151));for(var F=null,ue=null,X=x,le=x=0,oe=null,de=N.next();X!==null&&!de.done;le++,de=N.next()){X.index>le?(oe=X,X=null):oe=X.sibling;var La=j(y,X,de.value,M);if(La===null){X===null&&(X=oe);break}e&&X&&La.alternate===null&&t(y,X),x=r(La,x,le),ue===null?F=La:ue.sibling=La,ue=La,X=oe}if(de.done)return a(y,X),ce&&Vt(y,le),F;if(X===null){for(;!de.done;le++,de=N.next())de=D(y,de.value,M),de!==null&&(x=r(de,x,le),ue===null?F=de:ue.sibling=de,ue=de);return ce&&Vt(y,le),F}for(X=l(X);!de.done;le++,de=N.next())de=R(X,y,le,de.value,M),de!==null&&(e&&de.alternate!==null&&X.delete(de.key===null?le:de.key),x=r(de,x,le),ue===null?F=de:ue.sibling=de,ue=de);return e&&X.forEach(function(eg){return t(y,eg)}),ce&&Vt(y,le),F}function ve(y,x,N,M){if(typeof N=="object"&&N!==null&&N.type===k&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Q:e:{for(var F=N.key;x!==null;){if(x.key===F){if(F=N.type,F===k){if(x.tag===7){a(y,x.sibling),M=s(x,N.props.children),M.return=y,y=M;break e}}else if(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Be&&Xa(F)===x.type){a(y,x.sibling),M=s(x,N.props),cn(M,N),M.return=y,y=M;break e}a(y,x);break}else t(y,x);x=x.sibling}N.type===k?(M=Ya(N.props.children,y.mode,M,N.key),M.return=y,y=M):(M=cs(N.type,N.key,N.props,null,y.mode,M),cn(M,N),M.return=y,y=M)}return i(y);case Y:e:{for(F=N.key;x!==null;){if(x.key===F)if(x.tag===4&&x.stateNode.containerInfo===N.containerInfo&&x.stateNode.implementation===N.implementation){a(y,x.sibling),M=s(x,N.children||[]),M.return=y,y=M;break e}else{a(y,x);break}else t(y,x);x=x.sibling}M=Zr(N,y.mode,M),M.return=y,y=M}return i(y);case Be:return N=Xa(N),ve(y,x,N,M)}if(wt(N))return I(y,x,N,M);if(We(N)){if(F=We(N),typeof F!="function")throw Error(c(150));return N=F.call(N),Z(y,x,N,M)}if(typeof N.then=="function")return ve(y,x,gs(N),M);if(N.$$typeof===_)return ve(y,x,ms(y,N),M);xs(y,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,x!==null&&x.tag===6?(a(y,x.sibling),M=s(x,N),M.return=y,y=M):(a(y,x),M=Kr(N,y.mode,M),M.return=y,y=M),i(y)):a(y,x)}return function(y,x,N,M){try{on=0;var F=ve(y,x,N,M);return Nl=null,F}catch(X){if(X===vl||X===hs)throw X;var ue=dt(29,X,null,y.mode);return ue.lanes=M,ue.return=y,ue}finally{}}}var Ka=fu(!0),hu=fu(!1),pa=!1;function oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ci(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=os(e),Wc(e,null,a),t}return is(e,l,t,a),os(e)}function un(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,sc(e,a)}}function ui(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var s=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?s=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?s=r=t:r=r.next=t}else s=r=t;a={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var di=!1;function dn(){if(di){var e=yl;if(e!==null)throw e}}function mn(e,t,a,l){di=!1;var s=e.updateQueue;pa=!1;var r=s.firstBaseUpdate,i=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var h=u,S=h.next;h.next=null,i===null?r=S:i.next=S,i=h;var A=e.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==i&&(u===null?A.firstBaseUpdate=S:u.next=S,A.lastBaseUpdate=h))}if(r!==null){var D=s.baseState;i=0,A=S=h=null,u=r;do{var j=u.lane&-536870913,R=j!==u.lane;if(R?(ie&j)===j:(l&j)===j){j!==0&&j===bl&&(di=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var I=e,Z=u;j=t;var ve=a;switch(Z.tag){case 1:if(I=Z.payload,typeof I=="function"){D=I.call(ve,D,j);break e}D=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=Z.payload,j=typeof I=="function"?I.call(ve,D,j):I,j==null)break e;D=L({},D,j);break e;case 2:pa=!0}}j=u.callback,j!==null&&(e.flags|=64,R&&(e.flags|=8192),R=s.callbacks,R===null?s.callbacks=[j]:R.push(j))}else R={lane:j,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?(S=A=R,h=D):A=A.next=R,i|=j;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;R=u,u=R.next,R.next=null,s.lastBaseUpdate=R,s.shared.pending=null}}while(!0);A===null&&(h=D),s.baseState=h,s.firstBaseUpdate=S,s.lastBaseUpdate=A,r===null&&(s.shared.lanes=0),Sa|=i,e.lanes=i,e.memoizedState=D}}function pu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function gu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)pu(a[e],t)}var Sl=b(null),bs=b(0);function xu(e,t){e=aa,B(bs,e),B(Sl,t),aa=e|t.baseLanes}function mi(){B(bs,aa),B(Sl,Sl.current)}function fi(){aa=bs.current,U(Sl),U(bs)}var mt=b(null),jt=null;function ba(e){var t=e.alternate;B(Me,Me.current&1),B(mt,e),jt===null&&(t===null||Sl.current!==null||t.memoizedState!==null)&&(jt=e)}function hi(e){B(Me,Me.current),B(mt,e),jt===null&&(jt=e)}function bu(e){e.tag===22?(B(Me,Me.current),B(mt,e),jt===null&&(jt=e)):ya()}function ya(){B(Me,Me.current),B(mt,mt.current)}function ft(e){U(mt),jt===e&&(jt=null),U(Me)}var Me=b(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||No(a)||So(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,te=null,be=null,Ue=null,vs=!1,El=!1,Za=!1,Ns=0,fn=0,jl=null,Jh=0;function Ce(){throw Error(c(321))}function pi(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function gi(e,t,a,l,s,r){return Ft=r,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?td:Mi,Za=!1,r=a(l,s),Za=!1,El&&(r=vu(t,a,l,s)),yu(e),r}function yu(e){O.H=gn;var t=be!==null&&be.next!==null;if(Ft=0,Ue=be=te=null,vs=!1,fn=0,jl=null,t)throw Error(c(300));e===null||_e||(e=e.dependencies,e!==null&&ds(e)&&(_e=!0))}function vu(e,t,a,l){te=e;var s=0;do{if(El&&(jl=null),fn=0,El=!1,25<=s)throw Error(c(301));if(s+=1,Ue=be=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}O.H=ad,r=t(a,l)}while(El);return r}function Vh(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?hn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(te.flags|=1024),t}function xi(){var e=Ns!==0;return Ns=0,e}function bi(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function yi(e){if(vs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vs=!1}Ft=0,Ue=be=te=null,El=!1,fn=Ns=0,jl=null}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?te.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Le(){if(be===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ue===null?te.memoizedState:Ue.next;if(t!==null)Ue=t,be=e;else{if(e===null)throw te.alternate===null?Error(c(467)):Error(c(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?te.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(e){var t=fn;return fn+=1,jl===null&&(jl=[]),e=uu(jl,e,t),t=te,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?td:Mi),e}function Es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hn(e);if(e.$$typeof===_)return Je(e)}throw Error(c(438,String(e)))}function vi(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ss(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=st;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function js(e){var t=Le();return Ni(t,be,e)}function Ni(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var s=e.baseQueue,r=l.pending;if(r!==null){if(s!==null){var i=s.next;s.next=r.next,r.next=i}t.baseQueue=s=r,l.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var u=i=null,h=null,S=t,A=!1;do{var D=S.lane&-536870913;if(D!==S.lane?(ie&D)===D:(Ft&D)===D){var j=S.revertLane;if(j===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),D===bl&&(A=!0);else if((Ft&j)===j){S=S.next,j===bl&&(A=!0);continue}else D={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(u=h=D,i=r):h=h.next=D,te.lanes|=j,Sa|=j;D=S.action,Za&&a(r,D),r=S.hasEagerState?S.eagerState:a(r,D)}else j={lane:D,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(u=h=j,i=r):h=h.next=j,te.lanes|=D,Sa|=D;S=S.next}while(S!==null&&S!==t);if(h===null?i=r:h.next=u,!ut(r,e.memoizedState)&&(_e=!0,A&&(a=yl,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=h,l.lastRenderedState=r}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Si(e){var t=Le(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,s=a.pending,r=t.memoizedState;if(s!==null){a.pending=null;var i=s=s.next;do r=e(r,i.action),i=i.next;while(i!==s);ut(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function Nu(e,t,a){var l=te,s=Le(),r=ce;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var i=!ut((be||s).memoizedState,a);if(i&&(s.memoizedState=a,_e=!0),s=s.queue,Ti(ju.bind(null,l,s,e),[e]),s.getSnapshot!==t||i||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Tl(9,{destroy:void 0},Eu.bind(null,l,s,a,t),null),Se===null)throw Error(c(349));r||(Ft&127)!==0||Su(l,t,a)}return a}function Su(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=Ss(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Eu(e,t,a,l){t.value=a,t.getSnapshot=l,Tu(t)&&Ru(e)}function ju(e,t,a){return a(function(){Tu(t)&&Ru(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function Ru(e){var t=Ga(e,2);t!==null&&nt(t,e,2)}function Ei(e){var t=Ke();if(typeof e=="function"){var a=e;if(e=a(),Za){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function wu(e,t,a,l){return e.baseState=a,Ni(e,be,typeof l=="function"?l:Kt)}function Qh(e,t,a,l,s){if(ws(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};O.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,Cu(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Cu(e,t){var a=t.action,l=t.payload,s=e.state;if(t.isTransition){var r=O.T,i={};O.T=i;try{var u=a(s,l),h=O.S;h!==null&&h(i,u),Au(e,t,u)}catch(S){ji(e,t,S)}finally{r!==null&&i.types!==null&&(r.types=i.types),O.T=r}}else try{r=a(s,l),Au(e,t,r)}catch(S){ji(e,t,S)}}function Au(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ou(e,t,l)},function(l){return ji(e,t,l)}):Ou(e,t,a)}function Ou(e,t,a){t.status="fulfilled",t.value=a,Mu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Cu(e,a)))}function ji(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Mu(t),t=t.next;while(t!==l)}e.action=null}function Mu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Lu(e,t){return t}function Du(e,t){if(ce){var a=Se.formState;if(a!==null){e:{var l=te;if(ce){if(Ee){t:{for(var s=Ee,r=Et;s.nodeType!==8;){if(!r){s=null;break t}if(s=Tt(s.nextSibling),s===null){s=null;break t}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Ee=Tt(s.nextSibling),l=s.data==="F!";break e}}fa(l)}l=!1}l&&(t=a[0])}}return a=Ke(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:t},a.queue=l,a=Pu.bind(null,te,l),l.dispatch=a,l=Ei(!1),r=Oi.bind(null,te,!1,l.queue),l=Ke(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,a=Qh.bind(null,te,s,r,a),s.dispatch=a,l.memoizedState=e,[t,a,!1]}function Uu(e){var t=Le();return _u(t,be,e)}function _u(e,t,a){if(t=Ni(e,t,Lu)[0],e=js(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=hn(t)}catch(i){throw i===vl?hs:i}else l=t;t=Le();var s=t.queue,r=s.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Tl(9,{destroy:void 0},Xh.bind(null,s,a),null)),[l,r,e]}function Xh(e,t){e.action=t}function Hu(e){var t=Le(),a=be;if(a!==null)return _u(t,a,e);Le(),t=t.memoizedState,a=Le();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Tl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=Ss(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function zu(){return Le().memoizedState}function Ts(e,t,a,l){var s=Ke();te.flags|=e,s.memoizedState=Tl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Rs(e,t,a,l){var s=Le();l=l===void 0?null:l;var r=s.memoizedState.inst;be!==null&&l!==null&&pi(l,be.memoizedState.deps)?s.memoizedState=Tl(t,r,a,l):(te.flags|=e,s.memoizedState=Tl(1|t,r,a,l))}function Bu(e,t){Ts(8390656,8,e,t)}function Ti(e,t){Rs(2048,8,e,t)}function Fh(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=Ss(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function qu(e){var t=Le().memoizedState;return Fh({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function ku(e,t){return Rs(4,2,e,t)}function Gu(e,t){return Rs(4,4,e,t)}function Yu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iu(e,t,a){a=a!=null?a.concat([e]):null,Rs(4,4,Yu.bind(null,t,e),a)}function Ri(){}function Ju(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&pi(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Vu(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&pi(t,l[1]))return l[0];if(l=e(),Za){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l}function wi(e,t,a){return a===void 0||(Ft&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Qd(),te.lanes|=e,Sa|=e,a)}function Qu(e,t,a,l){return ut(a,t)?a:Sl.current!==null?(e=wi(e,a,l),ut(e,t)||(_e=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(ie&261930)===0?(_e=!0,e.memoizedState=a):(e=Qd(),te.lanes|=e,Sa|=e,t)}function Xu(e,t,a,l,s){var r=H.p;H.p=r!==0&&8>r?r:8;var i=O.T,u={};O.T=u,Oi(e,!1,t,a);try{var h=s(),S=O.S;if(S!==null&&S(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var A=Ih(h,l);pn(e,t,A,gt(e))}else pn(e,t,l,gt(e))}catch(D){pn(e,t,{then:function(){},status:"rejected",reason:D},gt())}finally{H.p=r,i!==null&&u.types!==null&&(i.types=u.types),O.T=i}}function Kh(){}function Ci(e,t,a,l){if(e.tag!==5)throw Error(c(476));var s=Fu(e).queue;Xu(e,s,t,W,a===null?Kh:function(){return Ku(e),a(l)})}function Fu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ku(e){var t=Fu(e);t.next===null&&(t=e.alternate.memoizedState),pn(e,t.next.queue,{},gt())}function Ai(){return Je(Ln)}function Zu(){return Le().memoizedState}function Wu(){return Le().memoizedState}function Zh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=ga(a);var l=xa(t,e,a);l!==null&&(nt(l,t,a),un(l,t,a)),t={cache:ni()},e.payload=t;return}t=t.return}}function Wh(e,t,a){var l=gt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ws(e)?$u(t,a):(a=Xr(e,t,a,l),a!==null&&(nt(a,e,l),ed(a,t,l)))}function Pu(e,t,a){var l=gt();pn(e,t,a,l)}function pn(e,t,a,l){var s={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ws(e))$u(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,u=r(i,a);if(s.hasEagerState=!0,s.eagerState=u,ut(u,i))return is(e,t,s,0),Se===null&&rs(),!1}catch{}finally{}if(a=Xr(e,t,s,l),a!==null)return nt(a,e,l),ed(a,t,l),!0}return!1}function Oi(e,t,a,l){if(l={lane:2,revertLane:oo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ws(e)){if(t)throw Error(c(479))}else t=Xr(e,a,l,2),t!==null&&nt(t,e,2)}function ws(e){var t=e.alternate;return e===te||t!==null&&t===te}function $u(e,t){El=vs=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ed(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,sc(e,a)}}var gn={readContext:Je,use:Es,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};gn.useEffectEvent=Ce;var td={readContext:Je,use:Es,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Bu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ts(4194308,4,Yu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){Ts(4,2,e,t)},useMemo:function(e,t){var a=Ke();t=t===void 0?null:t;var l=e();if(Za){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ke();if(a!==void 0){var s=a(t);if(Za){oa(!0);try{a(t)}finally{oa(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=Wh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:function(e){e=Ei(e);var t=e.queue,a=Pu.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ri,useDeferredValue:function(e,t){var a=Ke();return wi(a,e,t)},useTransition:function(){var e=Ei(!1);return e=Xu.bind(null,te,e.queue,!0,!1),Ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,s=Ke();if(ce){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Se===null)throw Error(c(349));(ie&127)!==0||Su(l,t,a)}s.memoizedState=a;var r={value:a,getSnapshot:t};return s.queue=r,Bu(ju.bind(null,l,r,e),[e]),l.flags|=2048,Tl(9,{destroy:void 0},Eu.bind(null,l,r,a,t),null),a},useId:function(){var e=Ke(),t=Se.identifierPrefix;if(ce){var a=Ut,l=Dt;a=(l&~(1<<32-ct(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ns++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Jh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ai,useFormState:Du,useActionState:Du,useOptimistic:function(e){var t=Ke();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Oi.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:vi,useCacheRefresh:function(){return Ke().memoizedState=Zh.bind(null,te)},useEffectEvent:function(e){var t=Ke(),a={impl:e};return t.memoizedState=a,function(){if((me&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Mi={readContext:Je,use:Es,useCallback:Ju,useContext:Je,useEffect:Ti,useImperativeHandle:Iu,useInsertionEffect:ku,useLayoutEffect:Gu,useMemo:Vu,useReducer:js,useRef:zu,useState:function(){return js(Kt)},useDebugValue:Ri,useDeferredValue:function(e,t){var a=Le();return Qu(a,be.memoizedState,e,t)},useTransition:function(){var e=js(Kt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:hn(e),t]},useSyncExternalStore:Nu,useId:Zu,useHostTransitionStatus:Ai,useFormState:Uu,useActionState:Uu,useOptimistic:function(e,t){var a=Le();return wu(a,be,e,t)},useMemoCache:vi,useCacheRefresh:Wu};Mi.useEffectEvent=qu;var ad={readContext:Je,use:Es,useCallback:Ju,useContext:Je,useEffect:Ti,useImperativeHandle:Iu,useInsertionEffect:ku,useLayoutEffect:Gu,useMemo:Vu,useReducer:Si,useRef:zu,useState:function(){return Si(Kt)},useDebugValue:Ri,useDeferredValue:function(e,t){var a=Le();return be===null?wi(a,e,t):Qu(a,be.memoizedState,e,t)},useTransition:function(){var e=Si(Kt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:hn(e),t]},useSyncExternalStore:Nu,useId:Zu,useHostTransitionStatus:Ai,useFormState:Hu,useActionState:Hu,useOptimistic:function(e,t){var a=Le();return be!==null?wu(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vi,useCacheRefresh:Wu};ad.useEffectEvent=qu;function Li(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:L({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Di={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=gt(),s=ga(l);s.payload=t,a!=null&&(s.callback=a),t=xa(e,s,l),t!==null&&(nt(t,e,l),un(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=gt(),s=ga(l);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=xa(e,s,l),t!==null&&(nt(t,e,l),un(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),l=ga(a);l.tag=2,t!=null&&(l.callback=t),t=xa(e,l,a),t!==null&&(nt(t,e,a),un(t,e,a))}};function ld(e,t,a,l,s,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,i):t.prototype&&t.prototype.isPureReactComponent?!tn(a,l)||!tn(s,r):!0}function nd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Di.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=L({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function sd(e){ss(e)}function rd(e){console.error(e)}function id(e){ss(e)}function Cs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function od(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ui(e,t,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Cs(e,t)},a}function cd(e){return e=ga(e),e.tag=3,e}function ud(e,t,a,l){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var r=l.value;e.payload=function(){return s(r)},e.callback=function(){od(t,a,l)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){od(t,a,l),typeof s!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Ph(e,t,a,l,s){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,s,!0),a=mt.current,a!==null){switch(a.tag){case 31:case 13:return jt===null?ks():a.alternate===null&&Ae===0&&(Ae=3),a.flags&=-257,a.flags|=65536,a.lanes=s,l===ps?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),so(e,l,s)),!1;case 22:return a.flags|=65536,l===ps?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),so(e,l,s)),!1}throw Error(c(435,a.tag))}return so(e,l,s),ks(),!1}if(ce)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==$r&&(e=Error(c(422),{cause:l}),nn(vt(e,a)))):(l!==$r&&(t=Error(c(423),{cause:l}),nn(vt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=vt(l,a),s=Ui(e.stateNode,l,s),ui(e,s),Ae!==4&&(Ae=2)),!1;var r=Error(c(520),{cause:l});if(r=vt(r,a),jn===null?jn=[r]:jn.push(r),Ae!==4&&(Ae=2),t===null)return!0;l=vt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Ui(a.stateNode,l,e),ui(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))))return a.flags|=65536,s&=-s,a.lanes|=s,s=cd(s),ud(s,e,a,l),ui(a,s),!1}a=a.return}while(a!==null);return!1}var _i=Error(c(461)),_e=!1;function Ve(e,t,a,l){t.child=e===null?hu(t,null,a,l):Ka(t,e.child,a,l)}function dd(e,t,a,l,s){a=a.render;var r=t.ref;if("ref"in l){var i={};for(var u in l)u!=="ref"&&(i[u]=l[u])}else i=l;return Va(t),l=gi(e,t,a,i,r,s),u=xi(),e!==null&&!_e?(bi(e,t,s),Zt(e,t,s)):(ce&&u&&Wr(t),t.flags|=1,Ve(e,t,l,s),t.child)}function md(e,t,a,l,s){if(e===null){var r=a.type;return typeof r=="function"&&!Fr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,fd(e,t,r,l,s)):(e=cs(a.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ii(e,s)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:tn,a(i,l)&&e.ref===t.ref)return Zt(e,t,s)}return t.flags|=1,e=Jt(r,l),e.ref=t.ref,e.return=t,t.child=e}function fd(e,t,a,l,s){if(e!==null){var r=e.memoizedProps;if(tn(r,l)&&e.ref===t.ref)if(_e=!1,t.pendingProps=l=r,Ii(e,s))(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,Zt(e,t,s)}return Hi(e,t,a,l,s)}function hd(e,t,a,l){var s=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~r}else l=0,t.child=null;return pd(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fs(t,r!==null?r.cachePool:null),r!==null?xu(t,r):mi(),bu(t);else return l=t.lanes=536870912,pd(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(fs(t,r.cachePool),xu(t,r),ya(),t.memoizedState=null):(e!==null&&fs(t,null),mi(),ya());return Ve(e,t,s,a),t.child}function xn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pd(e,t,a,l,s){var r=ri();return r=r===null?null:{parent:De._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&fs(t,null),mi(),bu(t),e!==null&&xl(e,t,l,!0),t.childLanes=s,null}function As(e,t){return t=Ms({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gd(e,t,a){return Ka(t,e.child,null,a),e=As(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function $h(e,t,a){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=As(t,l),t.lanes=536870912,xn(null,e);if(hi(t),(e=Ee)?(e=Cm(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Dt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=$c(e),a.return=t,t.child=a,Ie=t,Ee=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return As(t,l)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(hi(t),s)if(t.flags&256)t.flags&=-257,t=gd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(_e||xl(e,t,a,!1),s=(a&e.childLanes)!==0,_e||s){if(l=Se,l!==null&&(i=rc(l,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Ga(e,i),nt(l,e,i),_i;ks(),t=gd(e,t,a)}else e=r.treeContext,Ee=Tt(i.nextSibling),Ie=t,ce=!0,ma=null,Et=!1,e!==null&&au(t,e),t=As(t,l),t.flags|=4096;return t}return e=Jt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Os(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Hi(e,t,a,l,s){return Va(t),a=gi(e,t,a,l,void 0,s),l=xi(),e!==null&&!_e?(bi(e,t,s),Zt(e,t,s)):(ce&&l&&Wr(t),t.flags|=1,Ve(e,t,a,s),t.child)}function xd(e,t,a,l,s,r){return Va(t),t.updateQueue=null,a=vu(t,l,a,s),yu(e),l=xi(),e!==null&&!_e?(bi(e,t,r),Zt(e,t,r)):(ce&&l&&Wr(t),t.flags|=1,Ve(e,t,a,r),t.child)}function bd(e,t,a,l,s){if(Va(t),t.stateNode===null){var r=fl,i=a.contextType;typeof i=="object"&&i!==null&&(r=Je(i)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Di,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},oi(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?Je(i):fl,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(Li(t,a,i,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&Di.enqueueReplaceState(r,r.state,null),mn(t,l,r,s),dn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var u=t.memoizedProps,h=Wa(a,u);r.props=h;var S=r.context,A=a.contextType;i=fl,typeof A=="object"&&A!==null&&(i=Je(A));var D=a.getDerivedStateFromProps;A=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,A||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||S!==i)&&nd(t,r,l,i),pa=!1;var j=t.memoizedState;r.state=j,mn(t,l,r,s),dn(),S=t.memoizedState,u||j!==S||pa?(typeof D=="function"&&(Li(t,a,D,l),S=t.memoizedState),(h=pa||ld(t,a,h,l,j,S,i))?(A||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),r.props=l,r.state=S,r.context=i,l=h):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,ci(e,t),i=t.memoizedProps,A=Wa(a,i),r.props=A,D=t.pendingProps,j=r.context,S=a.contextType,h=fl,typeof S=="object"&&S!==null&&(h=Je(S)),u=a.getDerivedStateFromProps,(S=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==D||j!==h)&&nd(t,r,l,h),pa=!1,j=t.memoizedState,r.state=j,mn(t,l,r,s),dn();var R=t.memoizedState;i!==D||j!==R||pa||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof u=="function"&&(Li(t,a,u,l),R=t.memoizedState),(A=pa||ld(t,a,A,l,j,R,h)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,R,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,R,h)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=R),r.props=l,r.state=R,r.context=h,l=A):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Os(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ka(t,e.child,null,s),t.child=Ka(t,null,a,s)):Ve(e,t,a,s),t.memoizedState=r.state,e=t.child):e=Zt(e,t,s),e}function yd(e,t,a,l){return Ia(),t.flags|=256,Ve(e,t,a,l),t.child}var zi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bi(e){return{baseLanes:e,cachePool:ou()}}function qi(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=pt),e}function vd(e,t,a){var l=t.pendingProps,s=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),i&&(s=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(s?ba(t):ya(),(e=Ee)?(e=Cm(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Dt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=$c(e),a.return=t,t.child=a,Ie=t,Ee=null)):e=null,e===null)throw fa(t);return So(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,s?(ya(),s=t.mode,u=Ms({mode:"hidden",children:u},s),l=Ya(l,s,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=Bi(a),l.childLanes=qi(e,i,a),t.memoizedState=zi,xn(null,l)):(ba(t),ki(t,u))}var h=e.memoizedState;if(h!==null&&(u=h.dehydrated,u!==null)){if(r)t.flags&256?(ba(t),t.flags&=-257,t=Gi(e,t,a)):t.memoizedState!==null?(ya(),t.child=e.child,t.flags|=128,t=null):(ya(),u=l.fallback,s=t.mode,l=Ms({mode:"visible",children:l.children},s),u=Ya(u,s,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Ka(t,e.child,null,a),l=t.child,l.memoizedState=Bi(a),l.childLanes=qi(e,i,a),t.memoizedState=zi,t=xn(null,l));else if(ba(t),So(u)){if(i=u.nextSibling&&u.nextSibling.dataset,i)var S=i.dgst;i=S,l=Error(c(419)),l.stack="",l.digest=i,nn({value:l,source:null,stack:null}),t=Gi(e,t,a)}else if(_e||xl(e,t,a,!1),i=(a&e.childLanes)!==0,_e||i){if(i=Se,i!==null&&(l=rc(i,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,Ga(e,l),nt(i,e,l),_i;No(u)||ks(),t=Gi(e,t,a)}else No(u)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ee=Tt(u.nextSibling),Ie=t,ce=!0,ma=null,Et=!1,e!==null&&au(t,e),t=ki(t,l.children),t.flags|=4096);return t}return s?(ya(),u=l.fallback,s=t.mode,h=e.child,S=h.sibling,l=Jt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,S!==null?u=Jt(S,u):(u=Ya(u,s,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,xn(null,l),l=t.child,u=e.child.memoizedState,u===null?u=Bi(a):(s=u.cachePool,s!==null?(h=De._currentValue,s=s.parent!==h?{parent:h,pool:h}:s):s=ou(),u={baseLanes:u.baseLanes|a,cachePool:s}),l.memoizedState=u,l.childLanes=qi(e,i,a),t.memoizedState=zi,xn(e.child,l)):(ba(t),a=e.child,e=a.sibling,a=Jt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function ki(e,t){return t=Ms({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ms(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Gi(e,t,a){return Ka(t,e.child,null,a),e=ki(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ai(e.return,t,a)}function Yi(e,t,a,l,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:s,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=s,i.treeForkCount=r)}function Sd(e,t,a){var l=t.pendingProps,s=l.revealOrder,r=l.tail;l=l.children;var i=Me.current,u=(i&2)!==0;if(u?(i=i&1|2,t.flags|=128):i&=1,B(Me,i),Ve(e,t,l,a),l=ce?ln:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,a,t);else if(e.tag===19)Nd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&ys(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),Yi(t,!1,s,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ys(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}Yi(t,!0,a,null,r,l);break;case"together":Yi(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Zt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Jt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Jt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ii(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function ep(e,t,a){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),ha(t,De,e.memoizedState.cache),Ia();break;case 27:case 5:Yl(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hi(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vd(e,t,a):(ba(t),e=Zt(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var s=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),s){if(l)return Sd(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),B(Me,Me.current),l)break;return null;case 22:return t.lanes=0,hd(e,t,a,t.pendingProps);case 24:ha(t,De,e.memoizedState.cache)}return Zt(e,t,a)}function Ed(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)_e=!0;else{if(!Ii(e,a)&&(t.flags&128)===0)return _e=!1,ep(e,t,a);_e=(e.flags&131072)!==0}else _e=!1,ce&&(t.flags&1048576)!==0&&tu(t,ln,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Fr(e)?(l=Wa(e,l),t.tag=1,t=bd(null,t,e,l,a)):(t.tag=0,t=Hi(null,t,e,l,a));else{if(e!=null){var s=e.$$typeof;if(s===K){t.tag=11,t=dd(null,t,e,l,a);break e}else if(s===ae){t.tag=14,t=md(null,t,e,l,a);break e}}throw t=kt(e)||e,Error(c(306,t,""))}}return t;case 0:return Hi(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,s=Wa(l,t.pendingProps),bd(e,t,l,s,a);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var r=t.memoizedState;s=r.element,ci(e,t),mn(t,l,null,a);var i=t.memoizedState;if(l=i.cache,ha(t,De,l),l!==r.cache&&li(t,[De],a,!0),dn(),l=i.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=yd(e,t,l,a);break e}else if(l!==s){s=vt(Error(c(424)),t),nn(s),t=yd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=Tt(e.firstChild),Ie=t,ce=!0,ma=null,Et=!0,a=hu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ia(),l===s){t=Zt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return Os(e,t),e===null?(a=Um(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,l=Xs(ne.current).createElement(a),l[Ye]=t,l[Pe]=e,Qe(l,a,e),ke(l),t.stateNode=l):t.memoizedState=Um(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yl(t),e===null&&ce&&(l=t.stateNode=Mm(t.type,t.pendingProps,ne.current),Ie=t,Et=!0,s=Ee,wa(t.type)?(Eo=s,Ee=Tt(l.firstChild)):Ee=s),Ve(e,t,t.pendingProps.children,a),Os(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((s=l=Ee)&&(l=Op(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ie=t,Ee=Tt(l.firstChild),Et=!1,s=!0):s=!1),s||fa(t)),Yl(t),s=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,l=r.children,bo(s,r)?l=null:i!==null&&bo(s,i)&&(t.flags|=32),t.memoizedState!==null&&(s=gi(e,t,Vh,null,null,a),Ln._currentValue=s),Os(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&ce&&((e=a=Ee)&&(a=Mp(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ie=t,Ee=null,e=!0):e=!1),e||fa(t)),null;case 13:return vd(e,t,a);case 4:return Fe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ka(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return dd(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ha(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,Va(t),s=Je(s),l=l(s),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return md(e,t,t.type,t.pendingProps,a);case 15:return fd(e,t,t.type,t.pendingProps,a);case 19:return Sd(e,t,a);case 31:return $h(e,t,a);case 22:return hd(e,t,a,t.pendingProps);case 24:return Va(t),l=Je(De),e===null?(s=ri(),s===null&&(s=Se,r=ni(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=a),s=r),t.memoizedState={parent:l,cache:s},oi(t),ha(t,De,s)):((e.lanes&a)!==0&&(ci(e,t),mn(t,null,null,a),dn()),s=e.memoizedState,r=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ha(t,De,l)):(l=r.cache,ha(t,De,l),l!==s.cache&&li(t,[De],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Wt(e){e.flags|=4}function Ji(e,t,a,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Zd())e.flags|=8192;else throw Fa=ps,ii}else e.flags&=-16777217}function jd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qm(t))if(Zd())e.flags|=8192;else throw Fa=ps,ii}function Ls(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lc():536870912,e.lanes|=t,Al|=t)}function bn(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function tp(e,t,a){var l=t.pendingProps;switch(Pr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Xt(De),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gl(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ei())),je(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(Wt(t),r!==null?(je(t),jd(t,r)):(je(t),Ji(t,s,null,l,a))):r?r!==e.memoizedState?(Wt(t),je(t),jd(t,r)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),je(t),Ji(t,s,e,l,a)),null;case 27:if(In(t),a=ne.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return je(t),null}e=V.current,gl(t)?lu(t):(e=Mm(s,l,a),t.stateNode=e,Wt(t))}return je(t),null;case 5:if(In(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return je(t),null}if(r=V.current,gl(t))lu(t);else{var i=Xs(ne.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?i.createElement(s,{is:l.is}):i.createElement(s)}}r[Ye]=t,r[Pe]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(Qe(r,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return je(t),Ji(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ne.current,gl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,s=Ie,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[Ye]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||vm(e.nodeValue,a)),e||fa(t,!0)}else e=Xs(e).createTextNode(l),e[Ye]=t,t.stateNode=e}return je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=gl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ye]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else a=ei(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(c(558))}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=gl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Ye]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),s=!1}else s=ei(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==s&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ls(t,t.updateQueue),je(t),null);case 4:return Oe(),e===null&&fo(t.stateNode.containerInfo),je(t),null;case 10:return Xt(t.type),je(t),null;case 19:if(U(Me),l=t.memoizedState,l===null)return je(t),null;if(s=(t.flags&128)!==0,r=l.rendering,r===null)if(s)bn(l,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=ys(e),r!==null){for(t.flags|=128,bn(l,!1),e=r.updateQueue,t.updateQueue=e,Ls(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Pc(a,e),a=a.sibling;return B(Me,Me.current&1|2),ce&&Vt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>zs&&(t.flags|=128,s=!0,bn(l,!1),t.lanes=4194304)}else{if(!s)if(e=ys(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Ls(t,e),bn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ce)return je(t),null}else 2*it()-l.renderingStartTime>zs&&a!==536870912&&(t.flags|=128,s=!0,bn(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Me.current,B(Me,s?a&1|2:a&1),ce&&Vt(t,l.treeForkCount),e):(je(t),null);case 22:case 23:return ft(t),fi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ls(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&U(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(De),je(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ap(e,t){switch(Pr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(De),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return In(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(c(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Me),null;case 4:return Oe(),null;case 10:return Xt(t.type),null;case 22:case 23:return ft(t),fi(),e!==null&&U(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(De),null;case 25:return null;default:return null}}function Td(e,t){switch(Pr(t),t.tag){case 3:Xt(De),Oe();break;case 26:case 27:case 5:In(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:U(Me);break;case 10:Xt(t.type);break;case 22:case 23:ft(t),fi(),e!==null&&U(Qa);break;case 24:Xt(De)}}function yn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){l=void 0;var r=a.create,i=a.inst;l=r(),i.destroy=l}a=a.next}while(a!==s)}}catch(u){ge(t,t.return,u)}}function va(e,t,a){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var r=s.next;l=r;do{if((l.tag&e)===e){var i=l.inst,u=i.destroy;if(u!==void 0){i.destroy=void 0,s=t;var h=a,S=u;try{S()}catch(A){ge(s,h,A)}}}l=l.next}while(l!==r)}}catch(A){ge(t,t.return,A)}}function Rd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{gu(t,a)}catch(l){ge(e,e.return,l)}}}function wd(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function vn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(s){ge(e,t,s)}}function _t(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(s){ge(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){ge(e,t,s)}else a.current=null}function Cd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(s){ge(e,e.return,s)}}function Vi(e,t,a){try{var l=e.stateNode;jp(l,e.type,a,t),l[Pe]=t}catch(s){ge(e,e.return,s)}}function Ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Qi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Yt));else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Xi(e,t,a),e=e.sibling;e!==null;)Xi(e,t,a),e=e.sibling}function Ds(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ds(e,t,a),e=e.sibling;e!==null;)Ds(e,t,a),e=e.sibling}function Od(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Qe(t,l,a),t[Ye]=e,t[Pe]=a}catch(r){ge(e,e.return,r)}}var Pt=!1,He=!1,Fi=!1,Md=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function lp(e,t){if(e=e.containerInfo,go=er,e=Ic(e),Gr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var s=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,u=-1,h=-1,S=0,A=0,D=e,j=null;t:for(;;){for(var R;D!==a||s!==0&&D.nodeType!==3||(u=i+s),D!==r||l!==0&&D.nodeType!==3||(h=i+l),D.nodeType===3&&(i+=D.nodeValue.length),(R=D.firstChild)!==null;)j=D,D=R;for(;;){if(D===e)break t;if(j===a&&++S===s&&(u=i),j===r&&++A===l&&(h=i),(R=D.nextSibling)!==null)break;D=j,j=D.parentNode}D=R}a=u===-1||h===-1?null:{start:u,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(xo={focusedElem:e,selectionRange:a},er=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,s=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var I=Wa(a.type,s);e=l.getSnapshotBeforeUpdate(I,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ge(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)vo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Ld(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),l&4&&yn(5,a);break;case 1:if(ea(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){ge(a,a.return,i)}else{var s=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ge(a,a.return,i)}}l&64&&Rd(a),l&512&&vn(a,a.return);break;case 3:if(ea(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{gu(e,t)}catch(i){ge(a,a.return,i)}}break;case 27:t===null&&l&4&&Od(a);case 26:case 5:ea(e,a),t===null&&l&4&&Cd(a),l&512&&vn(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),l&4&&_d(e,a);break;case 13:ea(e,a),l&4&&Hd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mp.bind(null,a),Lp(e,a))));break;case 22:if(l=a.memoizedState!==null||Pt,!l){t=t!==null&&t.memoizedState!==null||He,s=Pt;var r=He;Pt=l,(He=t)&&!r?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),Pt=s,He=r}break;case 30:break;default:ea(e,a)}}function Dd(e){var t=e.alternate;t!==null&&(e.alternate=null,Dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&jr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,et=!1;function $t(e,t,a){for(a=a.child;a!==null;)Ud(e,t,a),a=a.sibling}function Ud(e,t,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Il,a)}catch{}switch(a.tag){case 26:He||_t(a,t),$t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||_t(a,t);var l=Te,s=et;wa(a.type)&&(Te=a.stateNode,et=!1),$t(e,t,a),An(a.stateNode),Te=l,et=s;break;case 5:He||_t(a,t);case 6:if(l=Te,s=et,Te=null,$t(e,t,a),Te=l,et=s,Te!==null)if(et)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(a.stateNode)}catch(r){ge(a,t,r)}else try{Te.removeChild(a.stateNode)}catch(r){ge(a,t,r)}break;case 18:Te!==null&&(et?(e=Te,Rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zl(e)):Rm(Te,a.stateNode));break;case 4:l=Te,s=et,Te=a.stateNode.containerInfo,et=!0,$t(e,t,a),Te=l,et=s;break;case 0:case 11:case 14:case 15:va(2,a,t),He||va(4,a,t),$t(e,t,a);break;case 1:He||(_t(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wd(a,t,l)),$t(e,t,a);break;case 21:$t(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,$t(e,t,a),He=l;break;default:$t(e,t,a)}}function _d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zl(e)}catch(a){ge(t,t.return,a)}}}function Hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zl(e)}catch(a){ge(t,t.return,a)}}function np(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Md),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Md),t;default:throw Error(c(435,e.tag))}}function Us(e,t){var a=np(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var s=fp.bind(null,e,l);l.then(s,s)}})}function tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var s=a[l],r=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 27:if(wa(u.type)){Te=u.stateNode,et=!1;break e}break;case 5:Te=u.stateNode,et=!1;break e;case 3:case 4:Te=u.stateNode.containerInfo,et=!0;break e}u=u.return}if(Te===null)throw Error(c(160));Ud(r,i,s),Te=null,et=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zd(t,e),t=t.sibling}var At=null;function zd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),at(e),l&4&&(va(3,e,e.return),yn(3,e),va(5,e,e.return));break;case 1:tt(t,e),at(e),l&512&&(He||a===null||_t(a,a.return)),l&64&&Pt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var s=At;if(tt(t,e),at(e),l&512&&(He||a===null||_t(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Ql]||r[Ye]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(l),s.head.insertBefore(r,s.querySelector("head > title"))),Qe(r,l,a),r[Ye]=e,ke(r),l=r;break e;case"link":var i=zm("link","href",s).get(l+(a.href||""));if(i){for(var u=0;u<i.length;u++)if(r=i[u],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(u,1);break t}}r=s.createElement(l),Qe(r,l,a),s.head.appendChild(r);break;case"meta":if(i=zm("meta","content",s).get(l+(a.content||""))){for(u=0;u<i.length;u++)if(r=i[u],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(u,1);break t}}r=s.createElement(l),Qe(r,l,a),s.head.appendChild(r);break;default:throw Error(c(468,l))}r[Ye]=e,ke(r),l=r}e.stateNode=l}else Bm(s,e.type,e.stateNode);else e.stateNode=Hm(s,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?Bm(s,e.type,e.stateNode):Hm(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Vi(e,e.memoizedProps,a.memoizedProps)}break;case 27:tt(t,e),at(e),l&512&&(He||a===null||_t(a,a.return)),a!==null&&l&4&&Vi(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tt(t,e),at(e),l&512&&(He||a===null||_t(a,a.return)),e.flags&32){s=e.stateNode;try{rl(s,"")}catch(I){ge(e,e.return,I)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,Vi(e,s,a!==null?a.memoizedProps:s)),l&1024&&(Fi=!0);break;case 6:if(tt(t,e),at(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(I){ge(e,e.return,I)}}break;case 3:if(Zs=null,s=At,At=Fs(t.containerInfo),tt(t,e),At=s,at(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zl(t.containerInfo)}catch(I){ge(e,e.return,I)}Fi&&(Fi=!1,Bd(e));break;case 4:l=At,At=Fs(e.stateNode.containerInfo),tt(t,e),at(e),At=l;break;case 12:tt(t,e),at(e);break;case 31:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Us(e,l)));break;case 13:tt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hs=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Us(e,l)));break;case 22:s=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,S=Pt,A=He;if(Pt=S||s,He=A||h,tt(t,e),He=A,Pt=S,at(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||h||Pt||He||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(r=h.stateNode,s)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=h.stateNode;var D=h.memoizedProps.style,j=D!=null&&D.hasOwnProperty("display")?D.display:null;u.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(I){ge(h,h.return,I)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=s?"":h.memoizedProps}catch(I){ge(h,h.return,I)}}}else if(t.tag===18){if(a===null){h=t;try{var R=h.stateNode;s?wm(R,!0):wm(h.stateNode,!1)}catch(I){ge(h,h.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Us(e,a))));break;case 19:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Us(e,l)));break;case 30:break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ad(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var s=a.stateNode,r=Qi(e);Ds(e,r,s);break;case 5:var i=a.stateNode;a.flags&32&&(rl(i,""),a.flags&=-33);var u=Qi(e);Ds(e,u,i);break;case 3:case 4:var h=a.stateNode.containerInfo,S=Qi(e);Xi(e,S,h);break;default:throw Error(c(161))}}catch(A){ge(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ld(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),Pa(t);break;case 1:_t(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wd(t,t.return,a),Pa(t);break;case 27:An(t.stateNode);case 26:case 5:_t(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:ta(s,r,a),yn(4,r);break;case 1:if(ta(s,r,a),l=r,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(S){ge(l,l.return,S)}if(l=r,s=l.updateQueue,s!==null){var u=l.stateNode;try{var h=s.shared.hiddenCallbacks;if(h!==null)for(s.shared.hiddenCallbacks=null,s=0;s<h.length;s++)pu(h[s],u)}catch(S){ge(l,l.return,S)}}a&&i&64&&Rd(r),vn(r,r.return);break;case 27:Od(r);case 26:case 5:ta(s,r,a),a&&l===null&&i&4&&Cd(r),vn(r,r.return);break;case 12:ta(s,r,a);break;case 31:ta(s,r,a),a&&i&4&&_d(s,r);break;case 13:ta(s,r,a),a&&i&4&&Hd(s,r);break;case 22:r.memoizedState===null&&ta(s,r,a),vn(r,r.return);break;case 30:break;default:ta(s,r,a)}t=t.sibling}}function Ki(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sn(a))}function Zi(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e))}function Ot(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qd(e,t,a,l),t=t.sibling}function qd(e,t,a,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,a,l),s&2048&&yn(9,t);break;case 1:Ot(e,t,a,l);break;case 3:Ot(e,t,a,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e)));break;case 12:if(s&2048){Ot(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,u=r.onPostCommit;typeof u=="function"&&u(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else Ot(e,t,a,l);break;case 31:Ot(e,t,a,l);break;case 13:Ot(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?Ot(e,t,a,l):Nn(e,t):r._visibility&2?Ot(e,t,a,l):(r._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Ki(i,t);break;case 24:Ot(e,t,a,l),s&2048&&Zi(t.alternate,t);break;default:Ot(e,t,a,l)}}function Rl(e,t,a,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,u=a,h=l,S=i.flags;switch(i.tag){case 0:case 11:case 15:Rl(r,i,u,h,s),yn(8,i);break;case 23:break;case 22:var A=i.stateNode;i.memoizedState!==null?A._visibility&2?Rl(r,i,u,h,s):Nn(r,i):(A._visibility|=2,Rl(r,i,u,h,s)),s&&S&2048&&Ki(i.alternate,i);break;case 24:Rl(r,i,u,h,s),s&&S&2048&&Zi(i.alternate,i);break;default:Rl(r,i,u,h,s)}t=t.sibling}}function Nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,s=l.flags;switch(l.tag){case 22:Nn(a,l),s&2048&&Ki(l.alternate,l);break;case 24:Nn(a,l),s&2048&&Zi(l.alternate,l);break;default:Nn(a,l)}t=t.sibling}}var Sn=8192;function wl(e,t,a){if(e.subtreeFlags&Sn)for(e=e.child;e!==null;)kd(e,t,a),e=e.sibling}function kd(e,t,a){switch(e.tag){case 26:wl(e,t,a),e.flags&Sn&&e.memoizedState!==null&&Jp(a,At,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,a);break;case 3:case 4:var l=At;At=Fs(e.stateNode.containerInfo),wl(e,t,a),At=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Sn,Sn=16777216,wl(e,t,a),Sn=l):wl(e,t,a));break;default:wl(e,t,a)}}function Gd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function En(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Id(l,e)}Gd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(e),e=e.sibling}function Yd(e){switch(e.tag){case 0:case 11:case 15:En(e),e.flags&2048&&va(9,e,e.return);break;case 3:En(e);break;case 12:En(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_s(e)):En(e);break;default:En(e)}}function _s(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Id(l,e)}Gd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),_s(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,_s(t));break;default:_s(t)}e=e.sibling}}function Id(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var s=l.sibling,r=l.return;if(Dd(l),l===a){Ge=null;break e}if(s!==null){s.return=r,Ge=s;break e}Ge=r}}}var sp={getCacheForType:function(e){var t=Je(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Je(De).controller.signal}},rp=typeof WeakMap=="function"?WeakMap:Map,me=0,Se=null,se=null,ie=0,pe=0,ht=null,Na=!1,Cl=!1,Wi=!1,aa=0,Ae=0,Sa=0,$a=0,Pi=0,pt=0,Al=0,jn=null,lt=null,$i=!1,Hs=0,Jd=0,zs=1/0,Bs=null,Ea=null,qe=0,ja=null,Ol=null,la=0,eo=0,to=null,Vd=null,Tn=0,ao=null;function gt(){return(me&2)!==0&&ie!==0?ie&-ie:O.T!==null?oo():ic()}function Qd(){if(pt===0)if((ie&536870912)===0||ce){var e=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),pt=e}else pt=536870912;return e=mt.current,e!==null&&(e.flags|=32),pt}function nt(e,t,a){(e===Se&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ml(e,0),Ta(e,ie,pt,!1)),Vl(e,a),((me&2)===0||e!==Se)&&(e===Se&&((me&2)===0&&($a|=a),Ae===4&&Ta(e,ie,pt,!1)),Ht(e))}function Xd(e,t,a){if((me&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),s=l?cp(e,t):no(e,t,!0),r=l;do{if(s===0){Cl&&!l&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!ip(a)){s=no(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var u=e;s=jn;var h=u.current.memoizedState.isDehydrated;if(h&&(Ml(u,i).flags|=256),i=no(u,i,!1),i!==2){if(Wi&&!h){u.errorRecoveryDisabledLanes|=r,$a|=r,s=4;break e}r=lt,lt=s,r!==null&&(lt===null?lt=r:lt.push.apply(lt,r))}s=i}if(r=!1,s!==2)continue}}if(s===1){Ml(e,0),Ta(e,t,0,!0);break}e:{switch(l=e,r=s,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ta(l,t,pt,!Na);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(s=Hs+300-it(),10<s)){if(Ta(l,t,pt,!Na),Fn(l,0,!0)!==0)break e;la=t,l.timeoutHandle=jm(Fd.bind(null,l,a,lt,Bs,$i,t,pt,$a,Al,Na,r,"Throttled",-0,0),s);break e}Fd(l,a,lt,Bs,$i,t,pt,$a,Al,Na,r,null,-0,0)}}break}while(!0);Ht(e)}function Fd(e,t,a,l,s,r,i,u,h,S,A,D,j,R){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},kd(t,r,D);var I=(r&62914560)===r?Hs-it():(r&4194048)===r?Jd-it():0;if(I=Vp(D,I),I!==null){la=r,e.cancelPendingCommit=I(am.bind(null,e,t,r,a,l,s,i,u,h,A,D,null,j,R)),Ta(e,r,i,!S);return}}am(e,t,r,a,l,s,i,u,h)}function ip(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var s=a[l],r=s.getSnapshot;s=s.value;try{if(!ut(r(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,l){t&=~Pi,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var r=31-ct(s),i=1<<r;l[r]=-1,s&=~i}a!==0&&nc(e,a,t)}function qs(){return(me&6)===0?(Rn(0),!1):!0}function lo(){if(se!==null){if(pe===0)var e=se.return;else e=se,Qt=Ja=null,yi(e),Nl=null,on=0,e=se;for(;e!==null;)Td(e.alternate,e),e=e.return;se=null}}function Ml(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,wp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,lo(),Se=e,se=a=Jt(e.current,null),ie=t,pe=0,ht=null,Na=!1,Cl=Jl(e,t),Wi=!1,Al=pt=Pi=$a=Sa=Ae=0,lt=jn=null,$i=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-ct(l),r=1<<s;t|=e[s],l&=~r}return aa=t,rs(),a}function Kd(e,t){te=null,O.H=gn,t===vl||t===hs?(t=du(),pe=3):t===ii?(t=du(),pe=4):pe=t===_i?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,se===null&&(Ae=1,Cs(e,vt(t,e.current)))}function Zd(){var e=mt.current;return e===null?!0:(ie&4194048)===ie?jt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===jt:!1}function Wd(){var e=O.H;return O.H=gn,e===null?gn:e}function Pd(){var e=O.A;return O.A=sp,e}function ks(){Ae=4,Na||(ie&4194048)!==ie&&mt.current!==null||(Cl=!0),(Sa&134217727)===0&&($a&134217727)===0||Se===null||Ta(Se,ie,pt,!1)}function no(e,t,a){var l=me;me|=2;var s=Wd(),r=Pd();(Se!==e||ie!==t)&&(Bs=null,Ml(e,t)),t=!1;var i=Ae;e:do try{if(pe!==0&&se!==null){var u=se,h=ht;switch(pe){case 8:lo(),i=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var S=pe;if(pe=0,ht=null,Ll(e,u,h,S),a&&Cl){i=0;break e}break;default:S=pe,pe=0,ht=null,Ll(e,u,h,S)}}op(),i=Ae;break}catch(A){Kd(e,A)}while(!0);return t&&e.shellSuspendCounter++,Qt=Ja=null,me=l,O.H=s,O.A=r,se===null&&(Se=null,ie=0,rs()),i}function op(){for(;se!==null;)$d(se)}function cp(e,t){var a=me;me|=2;var l=Wd(),s=Pd();Se!==e||ie!==t?(Bs=null,zs=it()+500,Ml(e,t)):Cl=Jl(e,t);e:do try{if(pe!==0&&se!==null){t=se;var r=ht;t:switch(pe){case 1:pe=0,ht=null,Ll(e,t,r,1);break;case 2:case 9:if(cu(r)){pe=0,ht=null,em(t);break}t=function(){pe!==2&&pe!==9||Se!==e||(pe=7),Ht(e)},r.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:cu(r)?(pe=0,ht=null,em(t)):(pe=0,ht=null,Ll(e,t,r,7));break;case 5:var i=null;switch(se.tag){case 26:i=se.memoizedState;case 5:case 27:var u=se;if(i?qm(i):u.stateNode.complete){pe=0,ht=null;var h=u.sibling;if(h!==null)se=h;else{var S=u.return;S!==null?(se=S,Gs(S)):se=null}break t}}pe=0,ht=null,Ll(e,t,r,5);break;case 6:pe=0,ht=null,Ll(e,t,r,6);break;case 8:lo(),Ae=6;break e;default:throw Error(c(462))}}up();break}catch(A){Kd(e,A)}while(!0);return Qt=Ja=null,O.H=l,O.A=s,me=a,se!==null?0:(Se=null,ie=0,rs(),Ae)}function up(){for(;se!==null&&!Df();)$d(se)}function $d(e){var t=Ed(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Gs(e):se=t}function em(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=xd(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=xd(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:yi(t);default:Td(a,t),t=se=Pc(t,aa),t=Ed(a,t,aa)}e.memoizedProps=e.pendingProps,t===null?Gs(e):se=t}function Ll(e,t,a,l){Qt=Ja=null,yi(t),Nl=null,on=0;var s=t.return;try{if(Ph(e,s,t,a,ie)){Ae=1,Cs(e,vt(a,e.current)),se=null;return}}catch(r){if(s!==null)throw se=s,r;Ae=1,Cs(e,vt(a,e.current)),se=null;return}t.flags&32768?(ce||l===1?e=!0:Cl||(ie&536870912)!==0?e=!1:(Na=e=!0,(l===2||l===9||l===3||l===6)&&(l=mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),tm(t,e)):Gs(t)}function Gs(e){var t=e;do{if((t.flags&32768)!==0){tm(t,Na);return}e=t.return;var a=tp(t.alternate,t,aa);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ae===0&&(Ae=5)}function tm(e,t){do{var a=ap(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Ae=6,se=null}function am(e,t,a,l,s,r,i,u,h){e.cancelPendingCommit=null;do Ys();while(qe!==0);if((me&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Qr,If(e,a,r,i,u,h),e===Se&&(se=Se=null,ie=0),Ol=t,ja=e,la=a,eo=r,to=s,Vd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hp(Jn,function(){return im(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,s=H.p,H.p=2,i=me,me|=4;try{lp(e,t,a)}finally{me=i,H.p=s,O.T=l}}qe=1,lm(),nm(),sm()}}function lm(){if(qe===1){qe=0;var e=ja,t=Ol,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var l=H.p;H.p=2;var s=me;me|=4;try{zd(t,e);var r=xo,i=Ic(e.containerInfo),u=r.focusedElem,h=r.selectionRange;if(i!==u&&u&&u.ownerDocument&&Yc(u.ownerDocument.documentElement,u)){if(h!==null&&Gr(u)){var S=h.start,A=h.end;if(A===void 0&&(A=S),"selectionStart"in u)u.selectionStart=S,u.selectionEnd=Math.min(A,u.value.length);else{var D=u.ownerDocument||document,j=D&&D.defaultView||window;if(j.getSelection){var R=j.getSelection(),I=u.textContent.length,Z=Math.min(h.start,I),ve=h.end===void 0?Z:Math.min(h.end,I);!R.extend&&Z>ve&&(i=ve,ve=Z,Z=i);var y=Gc(u,Z),x=Gc(u,ve);if(y&&x&&(R.rangeCount!==1||R.anchorNode!==y.node||R.anchorOffset!==y.offset||R.focusNode!==x.node||R.focusOffset!==x.offset)){var N=D.createRange();N.setStart(y.node,y.offset),R.removeAllRanges(),Z>ve?(R.addRange(N),R.extend(x.node,x.offset)):(N.setEnd(x.node,x.offset),R.addRange(N))}}}}for(D=[],R=u;R=R.parentNode;)R.nodeType===1&&D.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<D.length;u++){var M=D[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}er=!!go,xo=go=null}finally{me=s,H.p=l,O.T=a}}e.current=t,qe=2}}function nm(){if(qe===2){qe=0;var e=ja,t=Ol,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var l=H.p;H.p=2;var s=me;me|=4;try{Ld(e,t.alternate,t)}finally{me=s,H.p=l,O.T=a}}qe=3}}function sm(){if(qe===4||qe===3){qe=0,Uf();var e=ja,t=Ol,a=la,l=Vd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ol=ja=null,rm(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ea=null),Sr(a),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=O.T,s=H.p,H.p=2,O.T=null;try{for(var r=e.onRecoverableError,i=0;i<l.length;i++){var u=l[i];r(u.value,{componentStack:u.stack})}}finally{O.T=t,H.p=s}}(la&3)!==0&&Ys(),Ht(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===ao?Tn++:(Tn=0,ao=e):Tn=0,Rn(0)}}function rm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sn(t)))}function Ys(){return lm(),nm(),sm(),im()}function im(){if(qe!==5)return!1;var e=ja,t=eo;eo=0;var a=Sr(la),l=O.T,s=H.p;try{H.p=32>a?32:a,O.T=null,a=to,to=null;var r=ja,i=la;if(qe=0,Ol=ja=null,la=0,(me&6)!==0)throw Error(c(331));var u=me;if(me|=4,Yd(r.current),qd(r,r.current,i,a),me=u,Rn(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Il,r)}catch{}return!0}finally{H.p=s,O.T=l,rm(e,t)}}function om(e,t,a){t=vt(a,t),t=Ui(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(Vl(e,2),Ht(e))}function ge(e,t,a){if(e.tag===3)om(e,e,a);else for(;t!==null;){if(t.tag===3){om(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ea===null||!Ea.has(l))){e=vt(a,e),a=cd(2),l=xa(t,a,2),l!==null&&(ud(a,l,t,e),Vl(l,2),Ht(l));break}}t=t.return}}function so(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new rp;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(a)||(Wi=!0,s.add(a),e=dp.bind(null,e,t,a),t.then(e,e))}function dp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(ie&a)===a&&(Ae===4||Ae===3&&(ie&62914560)===ie&&300>it()-Hs?(me&2)===0&&Ml(e,0):Pi|=a,Al===ie&&(Al=0)),Ht(e)}function cm(e,t){t===0&&(t=lc()),e=Ga(e,t),e!==null&&(Vl(e,t),Ht(e))}function mp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),cm(e,a)}function fp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),cm(e,a)}function hp(e,t){return br(e,t)}var Is=null,Dl=null,ro=!1,Js=!1,io=!1,Ra=0;function Ht(e){e!==Dl&&e.next===null&&(Dl===null?Is=Dl=e:Dl=Dl.next=e),Js=!0,ro||(ro=!0,gp())}function Rn(e,t){if(!io&&Js){io=!0;do for(var a=!1,l=Is;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var r=0;else{var i=l.suspendedLanes,u=l.pingedLanes;r=(1<<31-ct(42|e)+1)-1,r&=s&~(i&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,fm(l,r))}else r=ie,r=Fn(l,l===Se?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Jl(l,r)||(a=!0,fm(l,r));l=l.next}while(a);io=!1}}function pp(){um()}function um(){Js=ro=!1;var e=0;Ra!==0&&Rp()&&(e=Ra);for(var t=it(),a=null,l=Is;l!==null;){var s=l.next,r=dm(l,t);r===0?(l.next=null,a===null?Is=s:a.next=s,s===null&&(Dl=a)):(a=l,(e!==0||(r&3)!==0)&&(Js=!0)),l=s}qe!==0&&qe!==5||Rn(e),Ra!==0&&(Ra=0)}function dm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-ct(r),u=1<<i,h=s[i];h===-1?((u&a)===0||(u&l)!==0)&&(s[i]=Yf(u,t)):h<=t&&(e.expiredLanes|=u),r&=~u}if(t=Se,a=ie,a=Fn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&yr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&yr(l),Sr(a)){case 2:case 8:a=tc;break;case 32:a=Jn;break;case 268435456:a=ac;break;default:a=Jn}return l=mm.bind(null,e),a=br(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&yr(l),e.callbackPriority=2,e.callbackNode=null,2}function mm(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ys()&&e.callbackNode!==a)return null;var l=ie;return l=Fn(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Xd(e,l,t),dm(e,it()),e.callbackNode!=null&&e.callbackNode===a?mm.bind(null,e):null)}function fm(e,t){if(Ys())return null;Xd(e,t,!0)}function gp(){Cp(function(){(me&6)!==0?br(ec,pp):um()})}function oo(){if(Ra===0){var e=bl;e===0&&(e=Vn,Vn<<=1,(Vn&261888)===0&&(Vn=256)),Ra=e}return Ra}function hm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pn(""+e)}function pm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xp(e,t,a,l,s){if(t==="submit"&&a&&a.stateNode===s){var r=hm((s[Pe]||null).action),i=l.submitter;i&&(t=(t=i[Pe]||null)?hm(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var u=new as("action","action",null,l,s);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ra!==0){var h=i?pm(s,i):new FormData(s);Ci(a,{pending:!0,data:h,method:s.method,action:r},null,h)}}else typeof r=="function"&&(u.preventDefault(),h=i?pm(s,i):new FormData(s),Ci(a,{pending:!0,data:h,method:s.method,action:r},r,h))},currentTarget:s}]})}}for(var co=0;co<Vr.length;co++){var uo=Vr[co],bp=uo.toLowerCase(),yp=uo[0].toUpperCase()+uo.slice(1);Ct(bp,"on"+yp)}Ct(Qc,"onAnimationEnd"),Ct(Xc,"onAnimationIteration"),Ct(Fc,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(_h,"onTransitionRun"),Ct(Hh,"onTransitionStart"),Ct(zh,"onTransitionCancel"),Ct(Kc,"onTransitionEnd"),nl("onMouseEnter",["mouseout","mouseover"]),nl("onMouseLeave",["mouseout","mouseover"]),nl("onPointerEnter",["pointerout","pointerover"]),nl("onPointerLeave",["pointerout","pointerover"]),za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),za("onBeforeInput",["compositionend","keypress","textInput","paste"]),za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wn));function gm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],s=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var i=l.length-1;0<=i;i--){var u=l[i],h=u.instance,S=u.currentTarget;if(u=u.listener,h!==r&&s.isPropagationStopped())break e;r=u,s.currentTarget=S;try{r(s)}catch(A){ss(A)}s.currentTarget=null,r=h}else for(i=0;i<l.length;i++){if(u=l[i],h=u.instance,S=u.currentTarget,u=u.listener,h!==r&&s.isPropagationStopped())break e;r=u,s.currentTarget=S;try{r(s)}catch(A){ss(A)}s.currentTarget=null,r=h}}}}function re(e,t){var a=t[Er];a===void 0&&(a=t[Er]=new Set);var l=e+"__bubble";a.has(l)||(xm(t,e,2,!1),a.add(l))}function mo(e,t,a){var l=0;t&&(l|=4),xm(a,e,l,t)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function fo(e){if(!e[Vs]){e[Vs]=!0,uc.forEach(function(a){a!=="selectionchange"&&(vp.has(a)||mo(a,!1,e),mo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vs]||(t[Vs]=!0,mo("selectionchange",!1,t))}}function xm(e,t,a,l){switch(Qm(t)){case 2:var s=Fp;break;case 8:s=Kp;break;default:s=Co}a=s.bind(null,t,a,e),s=void 0,!Lr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function ho(e,t,a,l,s){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var u=l.stateNode.containerInfo;if(u===s)break;if(i===4)for(i=l.return;i!==null;){var h=i.tag;if((h===3||h===4)&&i.stateNode.containerInfo===s)return;i=i.return}for(;u!==null;){if(i=tl(u),i===null)return;if(h=i.tag,h===5||h===6||h===26||h===27){l=r=i;continue e}u=u.parentNode}}l=l.return}Sc(function(){var S=r,A=Or(a),D=[];e:{var j=Zc.get(e);if(j!==void 0){var R=as,I=e;switch(e){case"keypress":if(es(a)===0)break e;case"keydown":case"keyup":R=fh;break;case"focusin":I="focus",R=Hr;break;case"focusout":I="blur",R=Hr;break;case"beforeblur":case"afterblur":R=Hr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=gh;break;case Qc:case Xc:case Fc:R=nh;break;case Kc:R=bh;break;case"scroll":case"scrollend":R=$f;break;case"wheel":R=vh;break;case"copy":case"cut":case"paste":R=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=wc;break;case"toggle":case"beforetoggle":R=Sh}var Z=(t&4)!==0,ve=!Z&&(e==="scroll"||e==="scrollend"),y=Z?j!==null?j+"Capture":null:j;Z=[];for(var x=S,N;x!==null;){var M=x;if(N=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||N===null||y===null||(M=Fl(x,y),M!=null&&Z.push(Cn(x,M,N))),ve)break;x=x.return}0<Z.length&&(j=new R(j,I,null,a,A),D.push({event:j,listeners:Z}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",j&&a!==Ar&&(I=a.relatedTarget||a.fromElement)&&(tl(I)||I[el]))break e;if((R||j)&&(j=A.window===A?A:(j=A.ownerDocument)?j.defaultView||j.parentWindow:window,R?(I=a.relatedTarget||a.toElement,R=S,I=I?tl(I):null,I!==null&&(ve=p(I),Z=I.tag,I!==ve||Z!==5&&Z!==27&&Z!==6)&&(I=null)):(R=null,I=S),R!==I)){if(Z=Tc,M="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(Z=wc,M="onPointerLeave",y="onPointerEnter",x="pointer"),ve=R==null?j:Xl(R),N=I==null?j:Xl(I),j=new Z(M,x+"leave",R,a,A),j.target=ve,j.relatedTarget=N,M=null,tl(A)===S&&(Z=new Z(y,x+"enter",I,a,A),Z.target=N,Z.relatedTarget=ve,M=Z),ve=M,R&&I)t:{for(Z=Np,y=R,x=I,N=0,M=y;M;M=Z(M))N++;M=0;for(var F=x;F;F=Z(F))M++;for(;0<N-M;)y=Z(y),N--;for(;0<M-N;)x=Z(x),M--;for(;N--;){if(y===x||x!==null&&y===x.alternate){Z=y;break t}y=Z(y),x=Z(x)}Z=null}else Z=null;R!==null&&bm(D,j,R,Z,!1),I!==null&&ve!==null&&bm(D,ve,I,Z,!0)}}e:{if(j=S?Xl(S):window,R=j.nodeName&&j.nodeName.toLowerCase(),R==="select"||R==="input"&&j.type==="file")var ue=_c;else if(Dc(j))if(Hc)ue=Lh;else{ue=Oh;var X=Ah}else R=j.nodeName,!R||R.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?S&&Cr(S.elementType)&&(ue=_c):ue=Mh;if(ue&&(ue=ue(e,S))){Uc(D,ue,a,A);break e}X&&X(e,j,S),e==="focusout"&&S&&j.type==="number"&&S.memoizedProps.value!=null&&wr(j,"number",j.value)}switch(X=S?Xl(S):window,e){case"focusin":(Dc(X)||X.contentEditable==="true")&&(ul=X,Yr=S,an=null);break;case"focusout":an=Yr=ul=null;break;case"mousedown":Ir=!0;break;case"contextmenu":case"mouseup":case"dragend":Ir=!1,Jc(D,a,A);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":Jc(D,a,A)}var le;if(Br)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else cl?Mc(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Cc&&a.locale!=="ko"&&(cl||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&cl&&(le=Ec()):(ua=A,Dr="value"in ua?ua.value:ua.textContent,cl=!0)),X=Qs(S,oe),0<X.length&&(oe=new Rc(oe,e,null,a,A),D.push({event:oe,listeners:X}),le?oe.data=le:(le=Lc(a),le!==null&&(oe.data=le)))),(le=jh?Th(e,a):Rh(e,a))&&(oe=Qs(S,"onBeforeInput"),0<oe.length&&(X=new Rc("onBeforeInput","beforeinput",null,a,A),D.push({event:X,listeners:oe}),X.data=le)),xp(D,e,S,a,A)}gm(D,t)})}function Cn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Qs(e,t){for(var a=t+"Capture",l=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Fl(e,a),s!=null&&l.unshift(Cn(e,s,r)),s=Fl(e,t),s!=null&&l.push(Cn(e,s,r))),e.tag===3)return l;e=e.return}return[]}function Np(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bm(e,t,a,l,s){for(var r=t._reactName,i=[];a!==null&&a!==l;){var u=a,h=u.alternate,S=u.stateNode;if(u=u.tag,h!==null&&h===l)break;u!==5&&u!==26&&u!==27||S===null||(h=S,s?(S=Fl(a,r),S!=null&&i.unshift(Cn(a,S,h))):s||(S=Fl(a,r),S!=null&&i.push(Cn(a,S,h)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var Sp=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function ym(e){return(typeof e=="string"?e:""+e).replace(Sp,`
`).replace(Ep,"")}function vm(e,t){return t=ym(t),ym(e)===t}function ye(e,t,a,l,s,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||rl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&rl(e,""+l);break;case"className":Zn(e,"class",l);break;case"tabIndex":Zn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,l);break;case"style":vc(e,l,r);break;case"data":if(t!=="object"){Zn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Pn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",s.name,s,null),ye(e,t,"formEncType",s.formEncType,s,null),ye(e,t,"formMethod",s.formMethod,s,null),ye(e,t,"formTarget",s.formTarget,s,null)):(ye(e,t,"encType",s.encType,s,null),ye(e,t,"method",s.method,s,null),ye(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Pn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Pn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":re("beforetoggle",e),re("toggle",e),Kn(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wf.get(a)||a,Kn(e,a,l))}}function po(e,t,a,l,s,r){switch(a){case"style":vc(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?rl(e,l):(typeof l=="number"||typeof l=="bigint")&&rl(e,""+l);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),r=e[Pe]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,s);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Kn(e,a,l)}}}function Qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var l=!1,s=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,r,i,a,null)}}s&&ye(e,t,"srcSet",a.srcSet,a,null),l&&ye(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var u=r=i=s=null,h=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var A=a[l];if(A!=null)switch(l){case"name":s=A;break;case"type":i=A;break;case"checked":h=A;break;case"defaultChecked":S=A;break;case"value":r=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:ye(e,t,l,A,a,null)}}gc(e,r,u,h,S,i,s,!1);return;case"select":re("invalid",e),l=i=r=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":r=u;break;case"defaultValue":i=u;break;case"multiple":l=u;default:ye(e,t,s,u,a,null)}t=r,a=i,e.multiple=!!l,t!=null?sl(e,!!l,t,!1):a!=null&&sl(e,!!l,a,!0);return;case"textarea":re("invalid",e),r=s=l=null;for(i in a)if(a.hasOwnProperty(i)&&(u=a[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":s=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:ye(e,t,i,u,a,null)}bc(e,l,s,r);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ye(e,t,h,l,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(l=0;l<wn.length;l++)re(wn[l],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,S,l,a,null)}return;default:if(Cr(t)){for(A in a)a.hasOwnProperty(A)&&(l=a[A],l!==void 0&&po(e,t,A,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&ye(e,t,u,l,a,null))}function jp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,i=null,u=null,h=null,S=null,A=null;for(R in a){var D=a[R];if(a.hasOwnProperty(R)&&D!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":h=D;default:l.hasOwnProperty(R)||ye(e,t,R,null,l,D)}}for(var j in l){var R=l[j];if(D=a[j],l.hasOwnProperty(j)&&(R!=null||D!=null))switch(j){case"type":r=R;break;case"name":s=R;break;case"checked":S=R;break;case"defaultChecked":A=R;break;case"value":i=R;break;case"defaultValue":u=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==D&&ye(e,t,j,R,l,D)}}Rr(e,i,u,h,S,A,r,s);return;case"select":R=i=u=j=null;for(r in a)if(h=a[r],a.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":R=h;default:l.hasOwnProperty(r)||ye(e,t,r,null,l,h)}for(s in l)if(r=l[s],h=a[s],l.hasOwnProperty(s)&&(r!=null||h!=null))switch(s){case"value":j=r;break;case"defaultValue":u=r;break;case"multiple":i=r;default:r!==h&&ye(e,t,s,r,l,h)}t=u,a=i,l=R,j!=null?sl(e,!!a,j,!1):!!l!=!!a&&(t!=null?sl(e,!!a,t,!0):sl(e,!!a,a?[]:"",!1));return;case"textarea":R=j=null;for(u in a)if(s=a[u],a.hasOwnProperty(u)&&s!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ye(e,t,u,null,l,s)}for(i in l)if(s=l[i],r=a[i],l.hasOwnProperty(i)&&(s!=null||r!=null))switch(i){case"value":j=s;break;case"defaultValue":R=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==r&&ye(e,t,i,s,l,r)}xc(e,j,R);return;case"option":for(var I in a)if(j=a[I],a.hasOwnProperty(I)&&j!=null&&!l.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:ye(e,t,I,null,l,j)}for(h in l)if(j=l[h],R=a[h],l.hasOwnProperty(h)&&j!==R&&(j!=null||R!=null))switch(h){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:ye(e,t,h,j,l,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)j=a[Z],a.hasOwnProperty(Z)&&j!=null&&!l.hasOwnProperty(Z)&&ye(e,t,Z,null,l,j);for(S in l)if(j=l[S],R=a[S],l.hasOwnProperty(S)&&j!==R&&(j!=null||R!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:ye(e,t,S,j,l,R)}return;default:if(Cr(t)){for(var ve in a)j=a[ve],a.hasOwnProperty(ve)&&j!==void 0&&!l.hasOwnProperty(ve)&&po(e,t,ve,void 0,l,j);for(A in l)j=l[A],R=a[A],!l.hasOwnProperty(A)||j===R||j===void 0&&R===void 0||po(e,t,A,j,l,R);return}}for(var y in a)j=a[y],a.hasOwnProperty(y)&&j!=null&&!l.hasOwnProperty(y)&&ye(e,t,y,null,l,j);for(D in l)j=l[D],R=a[D],!l.hasOwnProperty(D)||j===R||j==null&&R==null||ye(e,t,D,j,l,R)}function Nm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Tp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var s=a[l],r=s.transferSize,i=s.initiatorType,u=s.duration;if(r&&u&&Nm(i)){for(i=0,u=s.responseEnd,l+=1;l<a.length;l++){var h=a[l],S=h.startTime;if(S>u)break;var A=h.transferSize,D=h.initiatorType;A&&Nm(D)&&(h=h.responseEnd,i+=A*(h<u?1:(u-S)/(h-S)))}if(--l,t+=8*(r+i)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var go=null,xo=null;function Xs(e){return e.nodeType===9?e:e.ownerDocument}function Sm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Em(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=null;function Rp(){var e=window.event;return e&&e.type==="popstate"?e===yo?!1:(yo=e,!0):(yo=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(e){return Tm.resolve(null).then(e).catch(Ap)}:jm;function Ap(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Rm(e,t){var a=t,l=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(s),zl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")An(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,An(a);for(var r=a.firstChild;r;){var i=r.nextSibling,u=r.nodeName;r[Ql]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&An(e.ownerDocument.body);a=s}while(a);zl(t)}function wm(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vo(a),jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Op(e,t,a,l){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function Mp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function Cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function No(e){return e.data==="$?"||e.data==="$~"}function So(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Eo=null;function Am(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Mm(e,t,a){switch(t=Xs(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function An(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);jr(e)}var Rt=new Map,Lm=new Set;function Fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=H.d;H.d={f:Dp,r:Up,D:_p,C:Hp,L:zp,m:Bp,X:kp,S:qp,M:Gp};function Dp(){var e=na.f(),t=qs();return e||t}function Up(e){var t=al(e);t!==null&&t.tag===5&&t.type==="form"?Ku(t):na.r(e)}var Ul=typeof document>"u"?null:document;function Dm(e,t,a){var l=Ul;if(l&&typeof t=="string"&&t){var s=bt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),Lm.has(s)||(Lm.add(s),e={rel:e,crossOrigin:a,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),Qe(t,"link",e),ke(t),l.head.appendChild(t)))}}function _p(e){na.D(e),Dm("dns-prefetch",e,null)}function Hp(e,t){na.C(e,t),Dm("preconnect",e,t)}function zp(e,t,a){na.L(e,t,a);var l=Ul;if(l&&e&&t){var s='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+bt(a.imageSizes)+'"]')):s+='[href="'+bt(e)+'"]';var r=s;switch(t){case"style":r=_l(e);break;case"script":r=Hl(e)}Rt.has(r)||(e=L({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Rt.set(r,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(On(r))||t==="script"&&l.querySelector(Mn(r))||(t=l.createElement("link"),Qe(t,"link",e),ke(t),l.head.appendChild(t)))}}function Bp(e,t){na.m(e,t);var a=Ul;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',r=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Hl(e)}if(!Rt.has(r)&&(e=L({rel:"modulepreload",href:e},t),Rt.set(r,e),a.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mn(r)))return}l=a.createElement("link"),Qe(l,"link",e),ke(l),a.head.appendChild(l)}}}function qp(e,t,a){na.S(e,t,a);var l=Ul;if(l&&e){var s=ll(l).hoistableStyles,r=_l(e);t=t||"default";var i=s.get(r);if(!i){var u={loading:0,preload:null};if(i=l.querySelector(On(r)))u.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Rt.get(r))&&jo(e,a);var h=i=l.createElement("link");ke(h),Qe(h,"link",e),h._p=new Promise(function(S,A){h.onload=S,h.onerror=A}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ks(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:u},s.set(r,i)}}}function kp(e,t){na.X(e,t);var a=Ul;if(a&&e){var l=ll(a).hoistableScripts,s=Hl(e),r=l.get(s);r||(r=a.querySelector(Mn(s)),r||(e=L({src:e,async:!0},t),(t=Rt.get(s))&&To(e,t),r=a.createElement("script"),ke(r),Qe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(s,r))}}function Gp(e,t){na.M(e,t);var a=Ul;if(a&&e){var l=ll(a).hoistableScripts,s=Hl(e),r=l.get(s);r||(r=a.querySelector(Mn(s)),r||(e=L({src:e,async:!0,type:"module"},t),(t=Rt.get(s))&&To(e,t),r=a.createElement("script"),ke(r),Qe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(s,r))}}function Um(e,t,a,l){var s=(s=ne.current)?Fs(s):null;if(!s)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_l(a.href),a=ll(s).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_l(a.href);var r=ll(s).hoistableStyles,i=r.get(e);if(i||(s=s.ownerDocument||s,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=s.querySelector(On(e)))&&!r._p&&(i.instance=r,i.state.loading=5),Rt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Rt.set(e,a),r||Yp(s,e,a,i.state))),t&&l===null)throw Error(c(528,""));return i}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hl(a),a=ll(s).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function _l(e){return'href="'+bt(e)+'"'}function On(e){return'link[rel="stylesheet"]['+e+"]"}function _m(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function Yp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Qe(t,"link",a),ke(t),e.head.appendChild(t))}function Hl(e){return'[src="'+bt(e)+'"]'}function Mn(e){return"script[async]"+e}function Hm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,ke(l),l;var s=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ke(l),Qe(l,"style",s),Ks(l,a.precedence,e),t.instance=l;case"stylesheet":s=_l(a.href);var r=e.querySelector(On(s));if(r)return t.state.loading|=4,t.instance=r,ke(r),r;l=_m(a),(s=Rt.get(s))&&jo(l,s),r=(e.ownerDocument||e).createElement("link"),ke(r);var i=r;return i._p=new Promise(function(u,h){i.onload=u,i.onerror=h}),Qe(r,"link",l),t.state.loading|=4,Ks(r,a.precedence,e),t.instance=r;case"script":return r=Hl(a.src),(s=e.querySelector(Mn(r)))?(t.instance=s,ke(s),s):(l=a,(s=Rt.get(r))&&(l=L({},a),To(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),ke(s),Qe(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ks(l,a.precedence,e));return t.instance}function Ks(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,r=s,i=0;i<l.length;i++){var u=l[i];if(u.dataset.precedence===t)r=u;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function To(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zs=null;function zm(e,t,a){if(Zs===null){var l=new Map,s=Zs=new Map;s.set(a,l)}else s=Zs,l=s.get(a),l||(l=new Map,s.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var r=a[s];if(!(r[Ql]||r[Ye]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var u=l.get(i);u?u.push(r):l.set(i,[r])}}return l}function Bm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ip(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=_l(l.href),r=t.querySelector(On(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ws.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ke(r);return}r=t.ownerDocument||t,l=_m(l),(s=Rt.get(s))&&jo(l,s),r=r.createElement("link"),ke(r);var i=r;i._p=new Promise(function(u,h){i.onload=u,i.onerror=h}),Qe(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ws.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ro=0;function Vp(e,t){return e.stylesheets&&e.count===0&&$s(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&$s(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ro===0&&(Ro=62500*Tp());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$s(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ro?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Ws(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$s(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ps=null;function $s(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ps=new Map,t.forEach(Qp,e),Ps=null,Ws.call(e))}function Qp(e,t){if(!(t.state.loading&4)){var a=Ps.get(e);if(a)var l=a.get(null);else{a=new Map,Ps.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var i=s[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),l=i)}l&&a.set(null,l)}s=t.instance,i=s.getAttribute("data-precedence"),r=a.get(i)||l,r===l&&a.set(null,s),a.set(i,s),this.count++,l=Ws.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Ln={$$typeof:_,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Xp(e,t,a,l,s,r,i,u,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vr(0),this.hiddenUpdates=vr(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function km(e,t,a,l,s,r,i,u,h,S,A,D){return e=new Xp(e,t,a,i,h,S,A,D,u),t=1,r===!0&&(t|=24),r=dt(3,null,null,t),e.current=r,r.stateNode=e,t=ni(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},oi(r),e}function Gm(e){return e?(e=fl,e):fl}function Ym(e,t,a,l,s,r){s=Gm(s),l.context===null?l.context=s:l.pendingContext=s,l=ga(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=xa(e,l,t),a!==null&&(nt(a,e,t),un(a,e,t))}function Im(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function wo(e,t){Im(e,t),(e=e.alternate)&&Im(e,t)}function Jm(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&nt(t,e,67108864),wo(e,67108864)}}function Vm(e){if(e.tag===13||e.tag===31){var t=gt();t=Nr(t);var a=Ga(e,t);a!==null&&nt(a,e,t),wo(e,t)}}var er=!0;function Fp(e,t,a,l){var s=O.T;O.T=null;var r=H.p;try{H.p=2,Co(e,t,a,l)}finally{H.p=r,O.T=s}}function Kp(e,t,a,l){var s=O.T;O.T=null;var r=H.p;try{H.p=8,Co(e,t,a,l)}finally{H.p=r,O.T=s}}function Co(e,t,a,l){if(er){var s=Ao(l);if(s===null)ho(e,t,l,tr,a),Xm(e,l);else if(Wp(s,e,t,a,l))l.stopPropagation();else if(Xm(e,l),t&4&&-1<Zp.indexOf(e)){for(;s!==null;){var r=al(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Ha(r.pendingLanes);if(i!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;i;){var h=1<<31-ct(i);u.entanglements[1]|=h,i&=~h}Ht(r),(me&6)===0&&(zs=it()+500,Rn(0))}}break;case 31:case 13:u=Ga(r,2),u!==null&&nt(u,r,2),qs(),wo(r,2)}if(r=Ao(l),r===null&&ho(e,t,l,tr,a),r===s)break;s=r}s!==null&&l.stopPropagation()}else ho(e,t,l,null,a)}}function Ao(e){return e=Or(e),Oo(e)}var tr=null;function Oo(e){if(tr=null,e=tl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=E(t),e!==null)return e;e=null}else if(a===31){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function Qm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_f()){case ec:return 2;case tc:return 8;case Jn:case Hf:return 32;case ac:return 268435456;default:return 32}default:return 32}}var Mo=!1,Ca=null,Aa=null,Oa=null,Dn=new Map,Un=new Map,Ma=[],Zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xm(e,t){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function _n(e,t,a,l,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[s]},t!==null&&(t=al(t),t!==null&&Jm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Wp(e,t,a,l,s){switch(t){case"focusin":return Ca=_n(Ca,e,t,a,l,s),!0;case"dragenter":return Aa=_n(Aa,e,t,a,l,s),!0;case"mouseover":return Oa=_n(Oa,e,t,a,l,s),!0;case"pointerover":var r=s.pointerId;return Dn.set(r,_n(Dn.get(r)||null,e,t,a,l,s)),!0;case"gotpointercapture":return r=s.pointerId,Un.set(r,_n(Un.get(r)||null,e,t,a,l,s)),!0}return!1}function Fm(e){var t=tl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=E(a),t!==null){e.blockedOn=t,oc(e.priority,function(){Vm(a)});return}}else if(t===31){if(t=w(a),t!==null){e.blockedOn=t,oc(e.priority,function(){Vm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ao(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ar=l,a.target.dispatchEvent(l),Ar=null}else return t=al(a),t!==null&&Jm(t),e.blockedOn=a,!1;t.shift()}return!0}function Km(e,t,a){ar(e)&&a.delete(t)}function Pp(){Mo=!1,Ca!==null&&ar(Ca)&&(Ca=null),Aa!==null&&ar(Aa)&&(Aa=null),Oa!==null&&ar(Oa)&&(Oa=null),Dn.forEach(Km),Un.forEach(Km)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mo||(Mo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Pp)))}var nr=null;function Zm(e){nr!==e&&(nr=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nr===e&&(nr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Oo(l||a)===null)continue;break}var r=al(a);r!==null&&(e.splice(t,3),t-=3,Ci(r,{pending:!0,data:s,method:a.method,action:l},l,s))}}))}function zl(e){function t(h){return lr(h,e)}Ca!==null&&lr(Ca,e),Aa!==null&&lr(Aa,e),Oa!==null&&lr(Oa,e),Dn.forEach(t),Un.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Fm(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var s=a[l],r=a[l+1],i=s[Pe]||null;if(typeof r=="function")i||Zm(a);else if(i){var u=null;if(r&&r.hasAttribute("formAction")){if(s=r,i=r[Pe]||null)u=i.formAction;else if(Oo(s)!==null)continue}else u=i.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Zm(a)}}}function Wm(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return s=i})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Lo(e){this._internalRoot=e}sr.prototype.render=Lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=gt();Ym(a,l,e,t,null,null)},sr.prototype.unmount=Lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ym(e.current,2,null,e,null,null),qs(),t[el]=null}};function sr(e){this._internalRoot=e}sr.prototype.unstable_scheduleHydration=function(e){if(e){var t=ic();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Fm(e)}};var Pm=m.version;if(Pm!=="19.2.0")throw Error(c(527,Pm,"19.2.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var $p={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rr.isDisabled&&rr.supportsFiber)try{Il=rr.inject($p),ot=rr}catch{}}return zn.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,l="",s=sd,r=rd,i=id;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=km(e,1,!1,null,null,a,l,null,s,r,i,Wm),e[el]=t.current,fo(e),new Lo(t)},zn.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var l=!1,s="",r=sd,i=rd,u=id,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=km(e,1,!0,t,a??null,l,s,h,r,i,u,Wm),t.context=Gm(null),a=t.current,l=gt(),l=Nr(l),s=ga(l),s.callback=null,xa(a,s,l),a=l,t.current.lanes=a,Vl(t,a),Ht(t),e[el]=t.current,fo(e),new sr(t)},zn.version="19.2.0",zn}var cf;function cg(){if(cf)return _o.exports;cf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),_o.exports=og(),_o.exports}var ug=cg();var uf="popstate";function dg(o={}){function m(c,d){let{pathname:p,search:E,hash:w}=c.location;return Go("",{pathname:p,search:E,hash:w},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function f(c,d){return typeof d=="string"?d:kn(d)}return fg(m,f,null,o)}function Re(o,m){if(o===!1||o===null||typeof o>"u")throw new Error(m)}function Mt(o,m){if(!o){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function mg(){return Math.random().toString(36).substring(2,10)}function df(o,m){return{usr:o.state,key:o.key,idx:m}}function Go(o,m,f=null,c){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof m=="string"?ql(m):m,state:f,key:m&&m.key||c||mg()}}function kn({pathname:o="/",search:m="",hash:f=""}){return m&&m!=="?"&&(o+=m.charAt(0)==="?"?m:"?"+m),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function ql(o){let m={};if(o){let f=o.indexOf("#");f>=0&&(m.hash=o.substring(f),o=o.substring(0,f));let c=o.indexOf("?");c>=0&&(m.search=o.substring(c),o=o.substring(0,c)),o&&(m.pathname=o)}return m}function fg(o,m,f,c={}){let{window:d=document.defaultView,v5Compat:p=!1}=c,E=d.history,w="POP",v=null,g=C();g==null&&(g=0,E.replaceState({...E.state,idx:g},""));function C(){return(E.state||{idx:null}).idx}function L(){w="POP";let q=C(),G=q==null?null:q-g;g=q,v&&v({action:w,location:k.location,delta:G})}function z(q,G){w="PUSH";let J=Go(k.location,q,G);g=C()+1;let _=df(J,g),K=k.createHref(J);try{E.pushState(_,"",K)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;d.location.assign(K)}p&&v&&v({action:w,location:k.location,delta:1})}function Q(q,G){w="REPLACE";let J=Go(k.location,q,G);g=C();let _=df(J,g),K=k.createHref(J);E.replaceState(_,"",K),p&&v&&v({action:w,location:k.location,delta:0})}function Y(q){return hg(q)}let k={get action(){return w},get location(){return o(d,E)},listen(q){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(uf,L),v=q,()=>{d.removeEventListener(uf,L),v=null}},createHref(q){return m(d,q)},createURL:Y,encodeLocation(q){let G=Y(q);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:z,replace:Q,go(q){return E.go(q)}};return k}function hg(o,m=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Re(f,"No window.location.(origin|href) available to create URL");let c=typeof o=="string"?o:kn(o);return c=c.replace(/ $/,"%20"),!m&&c.startsWith("//")&&(c=f+c),new URL(c,f)}function xf(o,m,f="/"){return pg(o,m,f,!1)}function pg(o,m,f,c){let d=typeof m=="string"?ql(m):m,p=ia(d.pathname||"/",f);if(p==null)return null;let E=bf(o);gg(E);let w=null;for(let v=0;w==null&&v<E.length;++v){let g=wg(p);w=Tg(E[v],g,c)}return w}function bf(o,m=[],f=[],c="",d=!1){let p=(E,w,v=d,g)=>{let C={relativePath:g===void 0?E.path||"":g,caseSensitive:E.caseSensitive===!0,childrenIndex:w,route:E};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(c)&&v)return;Re(C.relativePath.startsWith(c),`Absolute route path "${C.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(c.length)}let L=ra([c,C.relativePath]),z=f.concat(C);E.children&&E.children.length>0&&(Re(E.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${L}".`),bf(E.children,m,z,L,v)),!(E.path==null&&!E.index)&&m.push({path:L,score:Eg(L,E.index),routesMeta:z})};return o.forEach((E,w)=>{if(E.path===""||!E.path?.includes("?"))p(E,w);else for(let v of yf(E.path))p(E,w,!0,v)}),m}function yf(o){let m=o.split("/");if(m.length===0)return[];let[f,...c]=m,d=f.endsWith("?"),p=f.replace(/\?$/,"");if(c.length===0)return d?[p,""]:[p];let E=yf(c.join("/")),w=[];return w.push(...E.map(v=>v===""?p:[p,v].join("/"))),d&&w.push(...E),w.map(v=>o.startsWith("/")&&v===""?"/":v)}function gg(o){o.sort((m,f)=>m.score!==f.score?f.score-m.score:jg(m.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var xg=/^:[\w-]+$/,bg=3,yg=2,vg=1,Ng=10,Sg=-2,mf=o=>o==="*";function Eg(o,m){let f=o.split("/"),c=f.length;return f.some(mf)&&(c+=Sg),m&&(c+=yg),f.filter(d=>!mf(d)).reduce((d,p)=>d+(xg.test(p)?bg:p===""?vg:Ng),c)}function jg(o,m){return o.length===m.length&&o.slice(0,-1).every((c,d)=>c===m[d])?o[o.length-1]-m[m.length-1]:0}function Tg(o,m,f=!1){let{routesMeta:c}=o,d={},p="/",E=[];for(let w=0;w<c.length;++w){let v=c[w],g=w===c.length-1,C=p==="/"?m:m.slice(p.length)||"/",L=ur({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},C),z=v.route;if(!L&&g&&f&&!c[c.length-1].route.index&&(L=ur({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},C)),!L)return null;Object.assign(d,L.params),E.push({params:d,pathname:ra([p,L.pathname]),pathnameBase:Mg(ra([p,L.pathnameBase])),route:z}),L.pathnameBase!=="/"&&(p=ra([p,L.pathnameBase]))}return E}function ur(o,m){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,c]=Rg(o.path,o.caseSensitive,o.end),d=m.match(f);if(!d)return null;let p=d[0],E=p.replace(/(.)\/+$/,"$1"),w=d.slice(1);return{params:c.reduce((g,{paramName:C,isOptional:L},z)=>{if(C==="*"){let Y=w[z]||"";E=p.slice(0,p.length-Y.length).replace(/(.)\/+$/,"$1")}const Q=w[z];return L&&!Q?g[C]=void 0:g[C]=(Q||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:E,pattern:o}}function Rg(o,m=!1,f=!0){Mt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let c=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,w,v)=>(c.push({paramName:w,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(c.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,m?void 0:"i"),c]}function wg(o){try{return o.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return Mt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),o}}function ia(o,m){if(m==="/")return o;if(!o.toLowerCase().startsWith(m.toLowerCase()))return null;let f=m.endsWith("/")?m.length-1:m.length,c=o.charAt(f);return c&&c!=="/"?null:o.slice(f)||"/"}function Cg(o,m="/"){let{pathname:f,search:c="",hash:d=""}=typeof o=="string"?ql(o):o;return{pathname:f?f.startsWith("/")?f:Ag(f,m):m,search:Lg(c),hash:Dg(d)}}function Ag(o,m){let f=m.replace(/\/+$/,"").split("/");return o.split("/").forEach(d=>{d===".."?f.length>1&&f.pop():d!=="."&&f.push(d)}),f.length>1?f.join("/"):"/"}function qo(o,m,f,c){return`Cannot include a '${o}' character in a manually specified \`to.${m}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Og(o){return o.filter((m,f)=>f===0||m.route.path&&m.route.path.length>0)}function Jo(o){let m=Og(o);return m.map((f,c)=>c===m.length-1?f.pathname:f.pathnameBase)}function Vo(o,m,f,c=!1){let d;typeof o=="string"?d=ql(o):(d={...o},Re(!d.pathname||!d.pathname.includes("?"),qo("?","pathname","search",d)),Re(!d.pathname||!d.pathname.includes("#"),qo("#","pathname","hash",d)),Re(!d.search||!d.search.includes("#"),qo("#","search","hash",d)));let p=o===""||d.pathname==="",E=p?"/":d.pathname,w;if(E==null)w=f;else{let L=m.length-1;if(!c&&E.startsWith("..")){let z=E.split("/");for(;z[0]==="..";)z.shift(),L-=1;d.pathname=z.join("/")}w=L>=0?m[L]:"/"}let v=Cg(d,w),g=E&&E!=="/"&&E.endsWith("/"),C=(p||E===".")&&f.endsWith("/");return!v.pathname.endsWith("/")&&(g||C)&&(v.pathname+="/"),v}var ra=o=>o.join("/").replace(/\/\/+/g,"/"),Mg=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Lg=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Dg=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Ug(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vf=["POST","PUT","PATCH","DELETE"];new Set(vf);var _g=["GET",...vf];new Set(_g);var kl=T.createContext(null);kl.displayName="DataRouter";var dr=T.createContext(null);dr.displayName="DataRouterState";T.createContext(!1);var Nf=T.createContext({isTransitioning:!1});Nf.displayName="ViewTransition";var Hg=T.createContext(new Map);Hg.displayName="Fetchers";var zg=T.createContext(null);zg.displayName="Await";var Lt=T.createContext(null);Lt.displayName="Navigation";var Gn=T.createContext(null);Gn.displayName="Location";var Bt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var Qo=T.createContext(null);Qo.displayName="RouteError";function Bg(o,{relative:m}={}){Re(Gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=T.useContext(Lt),{hash:d,pathname:p,search:E}=Yn(o,{relative:m}),w=p;return f!=="/"&&(w=p==="/"?f:ra([f,p])),c.createHref({pathname:w,search:E,hash:d})}function Gl(){return T.useContext(Gn)!=null}function qt(){return Re(Gl(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Gn).location}var Sf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ef(o){T.useContext(Lt).static||T.useLayoutEffect(o)}function mr(){let{isDataRoute:o}=T.useContext(Bt);return o?Wg():qg()}function qg(){Re(Gl(),"useNavigate() may be used only in the context of a <Router> component.");let o=T.useContext(kl),{basename:m,navigator:f}=T.useContext(Lt),{matches:c}=T.useContext(Bt),{pathname:d}=qt(),p=JSON.stringify(Jo(c)),E=T.useRef(!1);return Ef(()=>{E.current=!0}),T.useCallback((v,g={})=>{if(Mt(E.current,Sf),!E.current)return;if(typeof v=="number"){f.go(v);return}let C=Vo(v,JSON.parse(p),d,g.relative==="path");o==null&&m!=="/"&&(C.pathname=C.pathname==="/"?m:ra([m,C.pathname])),(g.replace?f.replace:f.push)(C,g.state,g)},[m,f,p,d,o])}T.createContext(null);function Yn(o,{relative:m}={}){let{matches:f}=T.useContext(Bt),{pathname:c}=qt(),d=JSON.stringify(Jo(f));return T.useMemo(()=>Vo(o,JSON.parse(d),c,m==="path"),[o,d,c,m])}function kg(o,m){return jf(o,m)}function jf(o,m,f,c,d){Re(Gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=T.useContext(Lt),{matches:E}=T.useContext(Bt),w=E[E.length-1],v=w?w.params:{},g=w?w.pathname:"/",C=w?w.pathnameBase:"/",L=w&&w.route;{let J=L&&L.path||"";Tf(g,!L||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let z=qt(),Q;if(m){let J=typeof m=="string"?ql(m):m;Re(C==="/"||J.pathname?.startsWith(C),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${J.pathname}" was given in the \`location\` prop.`),Q=J}else Q=z;let Y=Q.pathname||"/",k=Y;if(C!=="/"){let J=C.replace(/^\//,"").split("/");k="/"+Y.replace(/^\//,"").split("/").slice(J.length).join("/")}let q=xf(o,{pathname:k});Mt(L||q!=null,`No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `),Mt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Vg(q&&q.map(J=>Object.assign({},J,{params:Object.assign({},v,J.params),pathname:ra([C,p.encodeLocation?p.encodeLocation(J.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?C:ra([C,p.encodeLocation?p.encodeLocation(J.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathnameBase])})),E,f,c,d);return m&&G?T.createElement(Gn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Q},navigationType:"POP"}},G):G}function Gg(){let o=Zg(),m=Ug(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},E=null;return console.error("Error handled by React Router default ErrorBoundary:",o),E=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:p},"ErrorBoundary")," or"," ",T.createElement("code",{style:p},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},m),f?T.createElement("pre",{style:d},f):null,E)}var Yg=T.createElement(Gg,null),Ig=class extends T.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,m){return m.location!==o.location||m.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:m.error,location:m.location,revalidation:o.revalidation||m.revalidation}}componentDidCatch(o,m){this.props.unstable_onError?this.props.unstable_onError(o,m):console.error("React Router caught the following error during render",o)}render(){return this.state.error!==void 0?T.createElement(Bt.Provider,{value:this.props.routeContext},T.createElement(Qo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Jg({routeContext:o,match:m,children:f}){let c=T.useContext(kl);return c&&c.static&&c.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=m.route.id),T.createElement(Bt.Provider,{value:o},f)}function Vg(o,m=[],f=null,c=null,d=null){if(o==null){if(!f)return null;if(f.errors)o=f.matches;else if(m.length===0&&!f.initialized&&f.matches.length>0)o=f.matches;else return null}let p=o,E=f?.errors;if(E!=null){let g=p.findIndex(C=>C.route.id&&E?.[C.route.id]!==void 0);Re(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(E).join(",")}`),p=p.slice(0,Math.min(p.length,g+1))}let w=!1,v=-1;if(f)for(let g=0;g<p.length;g++){let C=p[g];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(v=g),C.route.id){let{loaderData:L,errors:z}=f,Q=C.route.loader&&!L.hasOwnProperty(C.route.id)&&(!z||z[C.route.id]===void 0);if(C.route.lazy||Q){w=!0,v>=0?p=p.slice(0,v+1):p=[p[0]];break}}}return p.reduceRight((g,C,L)=>{let z,Q=!1,Y=null,k=null;f&&(z=E&&C.route.id?E[C.route.id]:void 0,Y=C.route.errorElement||Yg,w&&(v<0&&L===0?(Tf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,k=null):v===L&&(Q=!0,k=C.route.hydrateFallbackElement||null)));let q=m.concat(p.slice(0,L+1)),G=()=>{let J;return z?J=Y:Q?J=k:C.route.Component?J=T.createElement(C.route.Component,null):C.route.element?J=C.route.element:J=g,T.createElement(Jg,{match:C,routeContext:{outlet:g,matches:q,isDataRoute:f!=null},children:J})};return f&&(C.route.ErrorBoundary||C.route.errorElement||L===0)?T.createElement(Ig,{location:f.location,revalidation:f.revalidation,component:Y,error:z,children:G(),routeContext:{outlet:null,matches:q,isDataRoute:!0},unstable_onError:c}):G()},null)}function Xo(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qg(o){let m=T.useContext(kl);return Re(m,Xo(o)),m}function Xg(o){let m=T.useContext(dr);return Re(m,Xo(o)),m}function Fg(o){let m=T.useContext(Bt);return Re(m,Xo(o)),m}function Fo(o){let m=Fg(o),f=m.matches[m.matches.length-1];return Re(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function Kg(){return Fo("useRouteId")}function Zg(){let o=T.useContext(Qo),m=Xg("useRouteError"),f=Fo("useRouteError");return o!==void 0?o:m.errors?.[f]}function Wg(){let{router:o}=Qg("useNavigate"),m=Fo("useNavigate"),f=T.useRef(!1);return Ef(()=>{f.current=!0}),T.useCallback(async(d,p={})=>{Mt(f.current,Sf),f.current&&(typeof d=="number"?o.navigate(d):await o.navigate(d,{fromRouteId:m,...p}))},[o,m])}var ff={};function Tf(o,m,f){!m&&!ff[o]&&(ff[o]=!0,Mt(!1,f))}T.memo(Pg);function Pg({routes:o,future:m,state:f,unstable_onError:c}){return jf(o,void 0,f,c,m)}function $g({to:o,replace:m,state:f,relative:c}){Re(Gl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=T.useContext(Lt);Mt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=T.useContext(Bt),{pathname:E}=qt(),w=mr(),v=Vo(o,Jo(p),E,c==="path"),g=JSON.stringify(v);return T.useEffect(()=>{w(JSON.parse(g),{replace:m,state:f,relative:c})},[w,g,c,m,f]),null}function P(o){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ex({basename:o="/",children:m=null,location:f,navigationType:c="POP",navigator:d,static:p=!1}){Re(!Gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=o.replace(/^\/*/,"/"),w=T.useMemo(()=>({basename:E,navigator:d,static:p,future:{}}),[E,d,p]);typeof f=="string"&&(f=ql(f));let{pathname:v="/",search:g="",hash:C="",state:L=null,key:z="default"}=f,Q=T.useMemo(()=>{let Y=ia(v,E);return Y==null?null:{location:{pathname:Y,search:g,hash:C,state:L,key:z},navigationType:c}},[E,v,g,C,L,z,c]);return Mt(Q!=null,`<Router basename="${E}"> is not able to match the URL "${v}${g}${C}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:T.createElement(Lt.Provider,{value:w},T.createElement(Gn.Provider,{children:m,value:Q}))}function hf({children:o,location:m}){return kg(Yo(o),m)}function Yo(o,m=[]){let f=[];return T.Children.forEach(o,(c,d)=>{if(!T.isValidElement(c))return;let p=[...m,d];if(c.type===T.Fragment){f.push.apply(f,Yo(c.props.children,p));return}Re(c.type===P,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!c.props.index||!c.props.children,"An index route cannot have child routes.");let E={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(E.children=Yo(c.props.children,p)),f.push(E)}),f}var or="get",cr="application/x-www-form-urlencoded";function fr(o){return o!=null&&typeof o.tagName=="string"}function tx(o){return fr(o)&&o.tagName.toLowerCase()==="button"}function ax(o){return fr(o)&&o.tagName.toLowerCase()==="form"}function lx(o){return fr(o)&&o.tagName.toLowerCase()==="input"}function nx(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function sx(o,m){return o.button===0&&(!m||m==="_self")&&!nx(o)}var ir=null;function rx(){if(ir===null)try{new FormData(document.createElement("form"),0),ir=!1}catch{ir=!0}return ir}var ix=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ko(o){return o!=null&&!ix.has(o)?(Mt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cr}"`),null):o}function ox(o,m){let f,c,d,p,E;if(ax(o)){let w=o.getAttribute("action");c=w?ia(w,m):null,f=o.getAttribute("method")||or,d=ko(o.getAttribute("enctype"))||cr,p=new FormData(o)}else if(tx(o)||lx(o)&&(o.type==="submit"||o.type==="image")){let w=o.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=o.getAttribute("formaction")||w.getAttribute("action");if(c=v?ia(v,m):null,f=o.getAttribute("formmethod")||w.getAttribute("method")||or,d=ko(o.getAttribute("formenctype"))||ko(w.getAttribute("enctype"))||cr,p=new FormData(w,o),!rx()){let{name:g,type:C,value:L}=o;if(C==="image"){let z=g?`${g}.`:"";p.append(`${z}x`,"0"),p.append(`${z}y`,"0")}else g&&p.append(g,L)}}else{if(fr(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=or,c=null,d=cr,E=o}return p&&d==="text/plain"&&(E=p,p=void 0),{action:c,method:f.toLowerCase(),encType:d,formData:p,body:E}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ko(o,m){if(o===!1||o===null||typeof o>"u")throw new Error(m)}function cx(o,m,f){let c=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return c.pathname==="/"?c.pathname=`_root.${f}`:m&&ia(c.pathname,m)==="/"?c.pathname=`${m.replace(/\/$/,"")}/_root.${f}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${f}`,c}async function ux(o,m){if(o.id in m)return m[o.id];try{let f=await import(o.module);return m[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dx(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function mx(o,m,f){let c=await Promise.all(o.map(async d=>{let p=m.routes[d.route.id];if(p){let E=await ux(p,f);return E.links?E.links():[]}return[]}));return gx(c.flat(1).filter(dx).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function pf(o,m,f,c,d,p){let E=(v,g)=>f[g]?v.route.id!==f[g].route.id:!0,w=(v,g)=>f[g].pathname!==v.pathname||f[g].route.path?.endsWith("*")&&f[g].params["*"]!==v.params["*"];return p==="assets"?m.filter((v,g)=>E(v,g)||w(v,g)):p==="data"?m.filter((v,g)=>{let C=c.routes[v.route.id];if(!C||!C.hasLoader)return!1;if(E(v,g)||w(v,g))return!0;if(v.route.shouldRevalidate){let L=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof L=="boolean")return L}return!0}):[]}function fx(o,m,{includeHydrateFallback:f}={}){return hx(o.map(c=>{let d=m.routes[c.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),f&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function hx(o){return[...new Set(o)]}function px(o){let m={},f=Object.keys(o).sort();for(let c of f)m[c]=o[c];return m}function gx(o,m){let f=new Set;return new Set(m),o.reduce((c,d)=>{let p=JSON.stringify(px(d));return f.has(p)||(f.add(p),c.push({key:p,link:d})),c},[])}function Rf(){let o=T.useContext(kl);return Ko(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function xx(){let o=T.useContext(dr);return Ko(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Zo=T.createContext(void 0);Zo.displayName="FrameworkContext";function wf(){let o=T.useContext(Zo);return Ko(o,"You must render this element inside a <HydratedRouter> element"),o}function bx(o,m){let f=T.useContext(Zo),[c,d]=T.useState(!1),[p,E]=T.useState(!1),{onFocus:w,onBlur:v,onMouseEnter:g,onMouseLeave:C,onTouchStart:L}=m,z=T.useRef(null);T.useEffect(()=>{if(o==="render"&&E(!0),o==="viewport"){let k=G=>{G.forEach(J=>{E(J.isIntersecting)})},q=new IntersectionObserver(k,{threshold:.5});return z.current&&q.observe(z.current),()=>{q.disconnect()}}},[o]),T.useEffect(()=>{if(c){let k=setTimeout(()=>{E(!0)},100);return()=>{clearTimeout(k)}}},[c]);let Q=()=>{d(!0)},Y=()=>{d(!1),E(!1)};return f?o!=="intent"?[p,z,{}]:[p,z,{onFocus:Bn(w,Q),onBlur:Bn(v,Y),onMouseEnter:Bn(g,Q),onMouseLeave:Bn(C,Y),onTouchStart:Bn(L,Q)}]:[!1,z,{}]}function Bn(o,m){return f=>{o&&o(f),f.defaultPrevented||m(f)}}function yx({page:o,...m}){let{router:f}=Rf(),c=T.useMemo(()=>xf(f.routes,o,f.basename),[f.routes,o,f.basename]);return c?T.createElement(Nx,{page:o,matches:c,...m}):null}function vx(o){let{manifest:m,routeModules:f}=wf(),[c,d]=T.useState([]);return T.useEffect(()=>{let p=!1;return mx(o,m,f).then(E=>{p||d(E)}),()=>{p=!0}},[o,m,f]),c}function Nx({page:o,matches:m,...f}){let c=qt(),{manifest:d,routeModules:p}=wf(),{basename:E}=Rf(),{loaderData:w,matches:v}=xx(),g=T.useMemo(()=>pf(o,m,v,d,c,"data"),[o,m,v,d,c]),C=T.useMemo(()=>pf(o,m,v,d,c,"assets"),[o,m,v,d,c]),L=T.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let Y=new Set,k=!1;if(m.forEach(G=>{let J=d.routes[G.route.id];!J||!J.hasLoader||(!g.some(_=>_.route.id===G.route.id)&&G.route.id in w&&p[G.route.id]?.shouldRevalidate||J.hasClientLoader?k=!0:Y.add(G.route.id))}),Y.size===0)return[];let q=cx(o,E,"data");return k&&Y.size>0&&q.searchParams.set("_routes",m.filter(G=>Y.has(G.route.id)).map(G=>G.route.id).join(",")),[q.pathname+q.search]},[E,w,c,d,g,m,o,p]),z=T.useMemo(()=>fx(C,d),[C,d]),Q=vx(C);return T.createElement(T.Fragment,null,L.map(Y=>T.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...f})),z.map(Y=>T.createElement("link",{key:Y,rel:"modulepreload",href:Y,...f})),Q.map(({key:Y,link:k})=>T.createElement("link",{key:Y,nonce:f.nonce,...k})))}function Sx(...o){return m=>{o.forEach(f=>{typeof f=="function"?f(m):f!=null&&(f.current=m)})}}var Cf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cf&&(window.__reactRouterVersion="7.9.5")}catch{}function Ex({basename:o,children:m,window:f}){let c=T.useRef();c.current==null&&(c.current=dg({window:f,v5Compat:!0}));let d=c.current,[p,E]=T.useState({action:d.action,location:d.location}),w=T.useCallback(v=>{T.startTransition(()=>E(v))},[E]);return T.useLayoutEffect(()=>d.listen(w),[d,w]),T.createElement(ex,{basename:o,children:m,location:p.location,navigationType:p.action,navigator:d})}var Af=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=T.forwardRef(function({onClick:m,discover:f="render",prefetch:c="none",relative:d,reloadDocument:p,replace:E,state:w,target:v,to:g,preventScrollReset:C,viewTransition:L,...z},Q){let{basename:Y}=T.useContext(Lt),k=typeof g=="string"&&Af.test(g),q,G=!1;if(typeof g=="string"&&k&&(q=g,Cf))try{let we=new URL(window.location.href),st=g.startsWith("//")?new URL(we.protocol+g):new URL(g),rt=ia(st.pathname,Y);st.origin===we.origin&&rt!=null?g=rt+st.search+st.hash:G=!0}catch{Mt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=Bg(g,{relative:d}),[_,K,fe]=bx(c,z),ze=wx(g,{replace:E,state:w,target:v,preventScrollReset:C,relative:d,viewTransition:L});function ae(we){m&&m(we),we.defaultPrevented||ze(we)}let Be=T.createElement("a",{...z,...fe,href:q||J,onClick:G||p?m:ae,ref:Sx(Q,K),target:v,"data-discover":!k&&f==="render"?"true":void 0});return _&&!k?T.createElement(T.Fragment,null,Be,T.createElement(yx,{page:J})):Be});Ze.displayName="Link";var jx=T.forwardRef(function({"aria-current":m="page",caseSensitive:f=!1,className:c="",end:d=!1,style:p,to:E,viewTransition:w,children:v,...g},C){let L=Yn(E,{relative:g.relative}),z=qt(),Q=T.useContext(dr),{navigator:Y,basename:k}=T.useContext(Lt),q=Q!=null&&Lx(L)&&w===!0,G=Y.encodeLocation?Y.encodeLocation(L).pathname:L.pathname,J=z.pathname,_=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;f||(J=J.toLowerCase(),_=_?_.toLowerCase():null,G=G.toLowerCase()),_&&k&&(_=ia(_,k)||_);const K=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let fe=J===G||!d&&J.startsWith(G)&&J.charAt(K)==="/",ze=_!=null&&(_===G||!d&&_.startsWith(G)&&_.charAt(G.length)==="/"),ae={isActive:fe,isPending:ze,isTransitioning:q},Be=fe?m:void 0,we;typeof c=="function"?we=c(ae):we=[c,fe?"active":null,ze?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let st=typeof p=="function"?p(ae):p;return T.createElement(Ze,{...g,"aria-current":Be,className:we,ref:C,style:st,to:E,viewTransition:w},typeof v=="function"?v(ae):v)});jx.displayName="NavLink";var Tx=T.forwardRef(({discover:o="render",fetcherKey:m,navigate:f,reloadDocument:c,replace:d,state:p,method:E=or,action:w,onSubmit:v,relative:g,preventScrollReset:C,viewTransition:L,...z},Q)=>{let Y=Ox(),k=Mx(w,{relative:g}),q=E.toLowerCase()==="get"?"get":"post",G=typeof w=="string"&&Af.test(w),J=_=>{if(v&&v(_),_.defaultPrevented)return;_.preventDefault();let K=_.nativeEvent.submitter,fe=K?.getAttribute("formmethod")||E;Y(K||_.currentTarget,{fetcherKey:m,method:fe,navigate:f,replace:d,state:p,relative:g,preventScrollReset:C,viewTransition:L})};return T.createElement("form",{ref:Q,method:q,action:k,onSubmit:c?v:J,...z,"data-discover":!G&&o==="render"?"true":void 0})});Tx.displayName="Form";function Rx(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Of(o){let m=T.useContext(kl);return Re(m,Rx(o)),m}function wx(o,{target:m,replace:f,state:c,preventScrollReset:d,relative:p,viewTransition:E}={}){let w=mr(),v=qt(),g=Yn(o,{relative:p});return T.useCallback(C=>{if(sx(C,m)){C.preventDefault();let L=f!==void 0?f:kn(v)===kn(g);w(o,{replace:L,state:c,preventScrollReset:d,relative:p,viewTransition:E})}},[v,w,g,f,c,m,o,d,p,E])}var Cx=0,Ax=()=>`__${String(++Cx)}__`;function Ox(){let{router:o}=Of("useSubmit"),{basename:m}=T.useContext(Lt),f=Kg();return T.useCallback(async(c,d={})=>{let{action:p,method:E,encType:w,formData:v,body:g}=ox(c,m);if(d.navigate===!1){let C=d.fetcherKey||Ax();await o.fetch(C,f,d.action||p,{preventScrollReset:d.preventScrollReset,formData:v,body:g,formMethod:d.method||E,formEncType:d.encType||w,flushSync:d.flushSync})}else await o.navigate(d.action||p,{preventScrollReset:d.preventScrollReset,formData:v,body:g,formMethod:d.method||E,formEncType:d.encType||w,replace:d.replace,state:d.state,fromRouteId:f,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,m,f])}function Mx(o,{relative:m}={}){let{basename:f}=T.useContext(Lt),c=T.useContext(Bt);Re(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),p={...Yn(o||".",{relative:m})},E=qt();if(o==null){p.search=E.search;let w=new URLSearchParams(p.search),v=w.getAll("index");if(v.some(C=>C==="")){w.delete("index"),v.filter(L=>L).forEach(L=>w.append("index",L));let C=w.toString();p.search=C?`?${C}`:""}}return(!o||o===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:ra([f,p.pathname])),kn(p)}function Lx(o,{relative:m}={}){let f=T.useContext(Nf);Re(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Of("useViewTransitionState"),d=Yn(o,{relative:m});if(!f.isTransitioning)return!1;let p=ia(f.currentLocation.pathname,c)||f.currentLocation.pathname,E=ia(f.nextLocation.pathname,c)||f.nextLocation.pathname;return ur(d.pathname,E)!=null||ur(d.pathname,p)!=null}const Mf=T.createContext(void 0),Wo=()=>{const o=T.useContext(Mf);if(!o)throw new Error("useAuth must be used within an AuthProvider");return o},Dx=({children:o})=>{const[m,f]=T.useState(!1),[c,d]=T.useState(null);T.useEffect(()=>{const w=localStorage.getItem("user");if(w){const v=JSON.parse(w);d(v),f(!0)}},[]);const p=(w,v)=>{const g={email:w,name:v};d(g),f(!0),localStorage.setItem("user",JSON.stringify(g))},E=()=>{d(null),f(!1),localStorage.removeItem("user")};return n.jsx(Mf.Provider,{value:{isAuthenticated:m,user:c,login:p,logout:E},children:o})},Ux=({children:o})=>{const{isAuthenticated:m}=Wo(),f=qt();return m?o:n.jsx($g,{to:"/login",state:{from:f},replace:!0})},zt={logo:{text:"LearnHub",href:"/"},navigation:[{id:1,label:"Basics of Web",href:"/learn",hasDropdown:!0,dropdownItems:[{id:1,label:"How Computers & Web Work",href:"/courses/computers-web",icon:"🖥️",hasNestedDropdown:!0,topics:[{id:1,name:"What is a Computer Program",href:"/courses/computers-web/program"},{id:2,name:"What is the Internet",href:"/courses/computers-web/internet"},{id:3,name:"Client vs Server",href:"/courses/computers-web/client-server"},{id:4,name:"Opening a Website",href:"/courses/computers-web/website"}]},{id:2,label:"HTML",href:"/courses/html",icon:"🌐",hasNestedDropdown:!0,topics:[{id:1,name:"HTML Basics",href:"/courses/html/basics"},{id:2,name:"HTML Forms",href:"/courses/html/forms"},{id:3,name:"HTML5 Features",href:"/courses/html/html5"},{id:4,name:"Semantic HTML",href:"/courses/html/semantic"},{id:5,name:"Accessibility",href:"/courses/html/accessibility"}]},{id:3,label:"CSS",href:"/courses/css",icon:"🎨",hasNestedDropdown:!0,topics:[{id:1,name:"CSS Basics",href:"/courses/css/basics"},{id:2,name:"Flexbox",href:"/courses/css/flexbox"},{id:3,name:"Grid Layout",href:"/courses/css/grid"},{id:4,name:"Animations",href:"/courses/css/animations"},{id:5,name:"Responsive Design",href:"/courses/css/responsive"},{id:6,name:"CSS Variables",href:"/courses/css/variables"},{id:7,name:"Sass/SCSS",href:"/courses/css/sass"}]},{id:4,label:"JavaScript",href:"/courses/javascript",icon:"⚡",hasNestedDropdown:!0,topics:[{id:1,name:"JS Fundamentals",href:"/courses/js/fundamentals"},{id:2,name:"ES6+ Features",href:"/courses/js/es6"},{id:3,name:"DOM Manipulation",href:"/courses/js/dom"},{id:4,name:"Async JavaScript",href:"/courses/js/async"},{id:5,name:"Promises & Async/Await",href:"/courses/js/promises"},{id:6,name:"OOP in JavaScript",href:"/courses/js/oop"},{id:7,name:"Modules",href:"/courses/js/modules"},{id:8,name:"Testing",href:"/courses/js/testing"}]}]},{id:2,label:"Technology",href:"/technology",hasDropdown:!0,dropdownItems:[{id:1,label:"Frontend",href:"/technology/frontend",icon:"💻",hasNestedDropdown:!0,topics:[{id:1,name:"React.js",href:"/courses/react"},{id:2,name:"Angular",href:"/courses/angular"},{id:5,name:"Next.js",href:"/courses/nextjs"},{id:6,name:"TypeScript",href:"/courses/typescript"}]},{id:2,label:"Backend",href:"/technology/backend",icon:"⚙️",hasNestedDropdown:!0,topics:[{id:1,name:"Node.js",href:"/courses/nodejs"},{id:2,name:"Express.js",href:"/courses/expressjs"},{id:3,name:"Java Spring",href:"/courses/java-spring"}]},{id:3,label:"Database",href:"/technology/database",icon:"🗄️",hasNestedDropdown:!0,topics:[{id:1,name:"MySQL",href:"/courses/mysql"},{id:2,name:"PostgreSQL",href:"/courses/postgresql"},{id:3,name:"MongoDB",href:"/courses/mongodb"},{id:6,name:"SQL Basics",href:"/courses/sql-basics"}]},{id:4,label:"DevOps",href:"/technology/devops",icon:"🚀",hasNestedDropdown:!0,topics:[{id:1,name:"Docker",href:"/technology/devops/docker"},{id:2,name:"Kubernetes",href:"/technology/devops/kubernetes"},{id:3,name:"Jenkins",href:"/technology/devops/jenkins"},{id:4,name:"GitHub Actions",href:"/technology/devops/github-actions"},{id:5,name:"AWS",href:"/technology/devops/aws"},{id:6,name:"Azure",href:"/technology/devops/azure"}]},{id:5,label:"Mobile",href:"/technology/mobile",icon:"📱",hasNestedDropdown:!0,topics:[{id:1,name:"React Native",href:"/technology/mobile/react-native"},{id:2,name:"Flutter",href:"/technology/mobile/flutter"}]}]},{id:3,label:"Roadmaps",href:"/roadmaps",hasDropdown:!0,dropdownItems:[{id:1,label:"Frontend Roadmap",href:"/roadmap/frontend",icon:"🎨",hasNestedDropdown:!0,topics:[{id:1,name:"HTML & CSS",href:"/roadmap/frontend/html-css"},{id:2,name:"JavaScript",href:"/roadmap/frontend/javascript"},{id:3,name:"React.js",href:"/roadmap/frontend/react"},{id:4,name:"Vue.js",href:"/roadmap/frontend/vue"},{id:5,name:"Angular",href:"/roadmap/frontend/angular"},{id:6,name:"TypeScript",href:"/roadmap/frontend/typescript"},{id:7,name:"Testing",href:"/roadmap/frontend/testing"}]},{id:2,label:"Backend Roadmap",href:"/roadmap/backend",icon:"⚙️",hasNestedDropdown:!0,topics:[{id:1,name:"Node.js",href:"/roadmap/backend/nodejs"},{id:2,name:"Python",href:"/roadmap/backend/python"},{id:3,name:"Java Spring",href:"/roadmap/backend/java-spring"},{id:4,name:"Databases",href:"/roadmap/backend/databases"},{id:5,name:"APIs & REST",href:"/roadmap/backend/apis"},{id:6,name:"Authentication",href:"/roadmap/backend/auth"},{id:7,name:"Microservices",href:"/roadmap/backend/microservices"}]},{id:3,label:"DevOps Roadmap",href:"/roadmap/devops",icon:"🚀",hasNestedDropdown:!0,topics:[{id:1,name:"Linux Basics",href:"/roadmap/devops/linux"},{id:2,name:"Git & GitHub",href:"/roadmap/devops/git"},{id:3,name:"Docker",href:"/roadmap/devops/docker"},{id:4,name:"Kubernetes",href:"/roadmap/devops/kubernetes"},{id:5,name:"CI/CD",href:"/roadmap/devops/cicd"},{id:6,name:"AWS/Azure/GCP",href:"/roadmap/devops/cloud"},{id:7,name:"Monitoring",href:"/roadmap/devops/monitoring"}]},{id:4,label:"Full Stack Roadmap",href:"/roadmap/fullstack",icon:"💼",hasNestedDropdown:!0,topics:[{id:1,name:"MERN Stack",href:"/roadmap/fullstack/mern"},{id:2,name:"MEAN Stack",href:"/roadmap/fullstack/mean"},{id:3,name:"Django Stack",href:"/roadmap/fullstack/django"},{id:4,name:"Java Full Stack",href:"/roadmap/fullstack/java"},{id:5,name:"Deployment",href:"/roadmap/fullstack/deployment"},{id:6,name:"Security",href:"/roadmap/fullstack/security"}]},{id:5,label:"Mobile Dev Roadmap",href:"/roadmap/mobile",icon:"📱",hasNestedDropdown:!0,topics:[{id:1,name:"React Native",href:"/roadmap/mobile/react-native"},{id:2,name:"Flutter",href:"/roadmap/mobile/flutter"},{id:3,name:"iOS Development",href:"/roadmap/mobile/ios"},{id:4,name:"Android Development",href:"/roadmap/mobile/android"},{id:5,name:"Mobile UI/UX",href:"/roadmap/mobile/ui-ux"},{id:6,name:"App Deployment",href:"/roadmap/mobile/deployment"}]},{id:6,label:"Data Science Roadmap",href:"/roadmap/data-science",icon:"📊",hasNestedDropdown:!0,topics:[{id:1,name:"Python for Data",href:"/roadmap/data-science/python"},{id:2,name:"Statistics",href:"/roadmap/data-science/statistics"},{id:3,name:"Machine Learning",href:"/roadmap/data-science/ml"},{id:4,name:"Deep Learning",href:"/roadmap/data-science/dl"},{id:5,name:"Data Visualization",href:"/roadmap/data-science/visualization"},{id:6,name:"Big Data",href:"/roadmap/data-science/big-data"}]}]}],searchPlaceholder:"Search courses, tutorials...",userActions:{login:"Login",signup:"Sign Up"}},_x=()=>{const o=mr(),{user:m,logout:f}=Wo(),[c,d]=T.useState(null),[p,E]=T.useState(null),[w,v]=T.useState(!1),[g,C]=T.useState(""),[L,z]=T.useState(!1),[Q,Y]=T.useState(!1);T.useEffect(()=>{const _=()=>{window.scrollY>10?z(!0):z(!1)};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[]);const k=_=>{d(c===_?null:_),E(null)},q=_=>{E(p===_?null:_)},G=_=>{_.preventDefault(),console.log("Searching for:",g)},J=()=>{f(),o("/login")};return n.jsxs("header",{className:`bg-white sticky top-0 z-50 border-b transition-all duration-300 ${L?"shadow-xl border-gray-300":"shadow-md border-gray-200"}`,children:[n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"flex items-center justify-between h-16",children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx(Ze,{to:zt.logo.href,className:"text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all",children:zt.logo.text})}),n.jsx("nav",{className:"hidden lg:flex items-center space-x-1",children:zt.navigation.map(_=>n.jsx("div",{className:"relative group",children:_.hasDropdown?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>k(_.id),onMouseEnter:()=>d(_.id),className:"px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer group",children:[_.label,n.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${c===_.id?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c===_.id&&_.dropdownItems&&n.jsx("div",{className:"absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 animate-fade-in",onMouseLeave:()=>{d(null),E(null)},children:_.dropdownItems.map(K=>n.jsx("div",{className:"relative group/nested",children:K.hasNestedDropdown&&K.topics?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onMouseEnter:()=>E(K.id),onClick:()=>q(K.id),className:"w-full flex items-center justify-between cursor-pointer px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all group/item",children:[n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-lg",children:K.icon}),n.jsx("span",{className:"font-medium text-left",children:K.label})]}),n.jsx("svg",{className:"w-4 h-4 opacity-60",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),p===K.id&&n.jsxs("div",{className:"absolute left-full top-0 ml-1 w-56 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 animate-fade-in",children:[n.jsx("div",{className:"px-3 py-2 border-b border-gray-100",children:n.jsxs("p",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:[K.label," Topics"]})}),K.topics.map(fe=>n.jsx(Ze,{to:fe.href,className:"block px-4 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all hover:pl-5",children:n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),fe.name]})},fe.id))]})]}):n.jsxs(Ze,{to:K.href,className:"flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all",children:[n.jsx("span",{className:"text-lg",children:K.icon}),n.jsx("span",{className:"font-medium",children:K.label})]})},K.id))})]}):n.jsx("a",{href:_.href,className:"px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all",children:_.label})},_.id))}),n.jsx("div",{className:"hidden lg:flex items-center",children:n.jsxs("form",{onSubmit:G,className:"relative",children:[n.jsx("input",{type:"text",value:g,onChange:_=>C(_.target.value),placeholder:zt.searchPlaceholder,className:"w-72 px-4 py-2.5 pl-11 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"}),n.jsx("svg",{className:"absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}),n.jsx("div",{className:"hidden lg:flex items-center space-x-3",children:m?n.jsxs("div",{className:"relative",children:[n.jsxs("button",{onClick:()=>Y(!Q),className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all cursor-pointer",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm",children:m.name.charAt(0).toUpperCase()}),n.jsx("span",{className:"text-sm font-semibold text-gray-700",children:m.name}),n.jsx("svg",{className:`w-4 h-4 text-gray-600 transition-transform ${Q?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),Q&&n.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 animate-fade-in z-50",children:[n.jsx("div",{className:"px-4 py-3 border-b border-gray-100",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg",children:m.name.charAt(0).toUpperCase()}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold text-gray-900",children:m.name}),n.jsx("p",{className:"text-xs text-gray-500",children:m.email})]})]})}),n.jsxs("div",{className:"py-2",children:[n.jsxs("button",{onClick:()=>{o("/"),Y(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all",children:[n.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),n.jsx("span",{className:"font-medium",children:"Dashboard"})]}),n.jsxs("button",{onClick:()=>{Y(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all",children:[n.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),n.jsx("span",{className:"font-medium",children:"My Profile"})]}),n.jsxs("button",{onClick:()=>{Y(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all",children:[n.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),n.jsx("span",{className:"font-medium",children:"My Courses"})]}),n.jsxs("button",{onClick:()=>{Y(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all",children:[n.jsxs("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),n.jsx("span",{className:"font-medium",children:"Settings"})]})]}),n.jsx("div",{className:"pt-2 border-t border-gray-100",children:n.jsxs("button",{onClick:()=>{Y(!1),J()},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-all font-medium",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),n.jsx("span",{children:"Logout"})]})})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("a",{href:"/login",className:"px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all",children:zt.userActions.login}),n.jsx("a",{href:"/signup",className:"px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5",children:zt.userActions.signup})]})}),n.jsx("div",{className:"lg:hidden",children:n.jsx("button",{onClick:()=>v(!w),className:"p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all",children:n.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:w?n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]}),w&&n.jsxs("div",{className:"lg:hidden py-4 border-t border-gray-200 animate-slide-down",children:[n.jsx("form",{onSubmit:G,className:"mb-4",children:n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"text",value:g,onChange:_=>C(_.target.value),placeholder:zt.searchPlaceholder,className:"w-full px-4 py-2.5 pl-11 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),n.jsx("svg",{className:"absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}),n.jsx("nav",{className:"space-y-1 max-h-96 overflow-y-auto",children:zt.navigation.map(_=>n.jsx("div",{children:_.hasDropdown?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>k(_.id),className:"w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all flex items-center justify-between",children:[_.label,n.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${c===_.id?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c===_.id&&_.dropdownItems&&n.jsx("div",{className:"pl-2 mt-1 space-y-1",children:_.dropdownItems.map(K=>n.jsx("div",{children:K.hasNestedDropdown&&K.topics?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>q(K.id),className:"w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all flex items-center justify-between",children:[n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("span",{children:K.icon}),n.jsx("span",{className:"font-medium",children:K.label})]}),n.jsx("svg",{className:`w-3.5 h-3.5 transition-transform ${p===K.id?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),p===K.id&&K.topics&&n.jsx("div",{className:"pl-8 mt-1 space-y-1 border-l-2 border-blue-200 ml-4",children:K.topics.map(fe=>n.jsx(Ze,{to:fe.href,className:"block px-3 py-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all",children:fe.name},fe.id))})]}):n.jsxs(Ze,{to:K.href,className:"flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all",children:[n.jsx("span",{children:K.icon}),n.jsx("span",{className:"font-medium",children:K.label})]})},K.id))})]}):n.jsx(Ze,{to:_.href,className:"block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all",children:_.label})},_.id))}),n.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200 space-y-2",children:m?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg",children:[n.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold",children:m.name.charAt(0).toUpperCase()}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold text-gray-700",children:m.name}),n.jsx("p",{className:"text-xs text-gray-500",children:m.email})]})]}),n.jsx("button",{onClick:J,className:"block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-lg transition-all shadow-md",children:"Logout"})]}):n.jsxs(n.Fragment,{children:[n.jsx("a",{href:"/login",className:"block w-full text-center px-4 py-2.5 text-sm font-semibold text-gray-700 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all",children:zt.userActions.login}),n.jsx("a",{href:"/signup",className:"block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all shadow-md",children:zt.userActions.signup})]})})]})]}),n.jsx("style",{children:`
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
      `})]})},Hx=()=>{const[o,m]=T.useState(!0),[f,c]=T.useState({email:"",password:"",name:"",confirmPassword:""}),[d,p]=T.useState({email:"",password:"",name:"",confirmPassword:""}),E=mr(),w=qt(),{login:v}=Wo(),g=w.state?.from?.pathname||"/",C=Y=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Y),L=Y=>{const{name:k,value:q}=Y.target;c(G=>({...G,[k]:q})),p(G=>({...G,[k]:""}))},z=Y=>{Y.preventDefault();let k=!1;const q={email:"",password:"",name:"",confirmPassword:""};if(f.email?C(f.email)||(q.email="Please enter a valid email",k=!0):(q.email="Email is required",k=!0),f.password?f.password.length<6&&(q.password="Password must be at least 6 characters",k=!0):(q.password="Password is required",k=!0),o||(f.name||(q.name="Name is required",k=!0),f.confirmPassword?f.password!==f.confirmPassword&&(q.confirmPassword="Passwords do not match",k=!0):(q.confirmPassword="Please confirm your password",k=!0)),k){p(q);return}o?(v(f.email,f.name||"User"),E(g,{replace:!0})):(v(f.email,f.name),E(g,{replace:!0}))},Q=()=>{m(!o),c({email:"",password:"",name:"",confirmPassword:""}),p({email:"",password:"",name:"",confirmPassword:""})};return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-md w-full space-y-8",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-2",children:o?"Welcome Back!":"Create Account"}),n.jsx("p",{className:"text-gray-600",children:o?"Login to continue your learning journey":"Sign up to start learning today"})]}),n.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[n.jsxs("form",{onSubmit:z,className:"space-y-6",children:[!o&&n.jsxs("div",{children:[n.jsx("label",{htmlFor:"name",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Full Name"}),n.jsx("input",{id:"name",name:"name",type:"text",value:f.name,onChange:L,className:`w-full px-4 py-3 border ${d.name?"border-red-500":"border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`,placeholder:"Enter your full name"}),d.name&&n.jsx("p",{className:"mt-1 text-sm text-red-500",children:d.name})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Email Address"}),n.jsx("input",{id:"email",name:"email",type:"email",value:f.email,onChange:L,className:`w-full px-4 py-3 border ${d.email?"border-red-500":"border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`,placeholder:"Enter your email"}),d.email&&n.jsx("p",{className:"mt-1 text-sm text-red-500",children:d.email})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"password",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Password"}),n.jsx("input",{id:"password",name:"password",type:"password",value:f.password,onChange:L,className:`w-full px-4 py-3 border ${d.password?"border-red-500":"border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`,placeholder:"Enter your password"}),d.password&&n.jsx("p",{className:"mt-1 text-sm text-red-500",children:d.password})]}),!o&&n.jsxs("div",{children:[n.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Confirm Password"}),n.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:f.confirmPassword,onChange:L,className:`w-full px-4 py-3 border ${d.confirmPassword?"border-red-500":"border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`,placeholder:"Confirm your password"}),d.confirmPassword&&n.jsx("p",{className:"mt-1 text-sm text-red-500",children:d.confirmPassword})]}),n.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all hover:scale-[1.02] active:scale-[0.98]",children:o?"Sign In":"Create Account"})]}),n.jsx("div",{className:"mt-6 text-center",children:n.jsxs("p",{className:"text-gray-600",children:[o?"Don't have an account? ":"Already have an account? ",n.jsx("button",{onClick:Q,className:"text-blue-600 font-semibold hover:text-blue-700 focus:outline-none",children:o?"Sign Up":"Sign In"})]})}),o&&n.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200",children:n.jsxs("p",{className:"text-sm text-blue-800 text-center",children:[n.jsx("strong",{children:"Demo:"})," Use any email and password (min 6 chars) to login"]})})]}),n.jsxs("div",{className:"mt-8 grid grid-cols-3 gap-4 text-center",children:[n.jsxs("div",{className:"bg-white rounded-lg p-4 shadow-md",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📚"}),n.jsx("p",{className:"text-xs text-gray-600 font-medium",children:"Comprehensive Courses"})]}),n.jsxs("div",{className:"bg-white rounded-lg p-4 shadow-md",children:[n.jsx("div",{className:"text-2xl mb-2",children:"🚀"}),n.jsx("p",{className:"text-xs text-gray-600 font-medium",children:"Learn at Your Pace"})]}),n.jsxs("div",{className:"bg-white rounded-lg p-4 shadow-md",children:[n.jsx("div",{className:"text-2xl mb-2",children:"🎯"}),n.jsx("p",{className:"text-xs text-gray-600 font-medium",children:"Track Progress"})]})]})]})})},gf=()=>n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-6xl font-bold mb-6",children:"Welcome to LearnHub"}),n.jsx("p",{className:"text-2xl opacity-90 max-w-3xl mx-auto mb-8",children:"Your comprehensive learning platform for mastering web development and programming technologies"}),n.jsxs("div",{className:"flex gap-4 justify-center flex-wrap",children:[n.jsx(Ze,{to:"/courses/computers-web",className:"px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1",children:"Start Learning"}),n.jsx(Ze,{to:"/courses/html",className:"px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all",children:"Explore Courses"})]})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[n.jsxs("div",{className:"text-center mb-12",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Popular Courses"}),n.jsx("p",{className:"text-xl text-gray-600",children:"Start your learning journey with our most popular courses"})]}),n.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",children:[n.jsxs(Ze,{to:"/courses/computers-web",className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🖥️"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"How Computers & Web Work"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Understand the fundamentals of computing and how the internet works."}),n.jsx("span",{className:"text-blue-600 font-semibold",children:"Start Course →"})]}),n.jsxs(Ze,{to:"/courses/html",className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🌐"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"HTML"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Learn the structure and building blocks of web pages."}),n.jsx("span",{className:"text-blue-600 font-semibold",children:"Start Course →"})]}),n.jsxs(Ze,{to:"/courses/css",className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎨"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"CSS"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Style and design beautiful, responsive web pages."}),n.jsx("span",{className:"text-blue-600 font-semibold",children:"Start Course →"})]}),n.jsxs(Ze,{to:"/courses/javascript",className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300",children:[n.jsx("div",{className:"text-5xl mb-4",children:"⚡"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"JavaScript"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Add interactivity and dynamic features to your websites."}),n.jsx("span",{className:"text-blue-600 font-semibold",children:"Start Course →"})]})]}),n.jsx("div",{className:"text-center mb-12",children:n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Why Choose LearnHub?"})}),n.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 text-center",children:[n.jsx("div",{className:"text-5xl mb-4",children:"📚"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Comprehensive Courses"}),n.jsx("p",{className:"text-gray-600",children:"From basics to advanced topics, we cover everything you need to become a proficient developer."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 text-center",children:[n.jsx("div",{className:"text-5xl mb-4",children:"💻"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Hands-on Practice"}),n.jsx("p",{className:"text-gray-600",children:"Learn by doing with interactive exercises and real-world projects."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 text-center",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🚀"}),n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Career Ready"}),n.jsx("p",{className:"text-gray-600",children:"Build a portfolio and gain the skills employers are looking for."})]})]}),n.jsxs("div",{className:"mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white",children:[n.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Ready to Start Your Learning Journey?"}),n.jsx("p",{className:"text-xl mb-8 opacity-90",children:"Join thousands of students learning to code and build amazing projects."}),n.jsx(Ze,{to:"/courses/computers-web",className:"px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 inline-block",children:"Get Started Now"})]})]})]}),Bl=()=>{const[o,m]=T.useState("basics"),f=[{id:"basics",label:"HTML Basics",icon:"📝"},{id:"forms",label:"HTML Forms",icon:"📋"},{id:"html5",label:"HTML5 Features",icon:"🎯"},{id:"semantic",label:"Semantic HTML",icon:"🏗️"},{id:"accessibility",label:"Accessibility",icon:"♿"}],d={basics:{title:"HTML Basics",description:"Learn the foundational concepts of HTML - the building blocks of web development.",sections:[{heading:"What is HTML?",text:"HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags."},{heading:"Basic Structure",text:"Every HTML document follows a basic structure with DOCTYPE, html, head, and body elements.",code:`<!DOCTYPE html>
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
</html>`},{heading:"Common HTML Tags",text:"Headings (h1-h6), Paragraphs (p), Links (a), Images (img), Lists (ul, ol, li), Divisions (div), Spans (span)"}]},forms:{title:"HTML Forms",description:"Master HTML forms to collect user input and create interactive web experiences.",sections:[{heading:"Form Elements",text:"Forms allow users to enter data that is sent to a server for processing. The main form elements include input, textarea, select, button, and label."},{heading:"Basic Form Example",code:`<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>

    <button type="submit">Submit</button>
</form>`},{heading:"Input Types",text:"text, email, password, number, date, checkbox, radio, file, submit, button, and more."}]},html5:{title:"HTML5 Features",description:"Explore modern HTML5 features that enhance web functionality and user experience.",sections:[{heading:"Semantic Elements",text:"HTML5 introduced semantic elements like header, nav, main, article, section, aside, and footer for better structure."},{heading:"Multimedia Support",text:"Native support for audio and video elements without plugins.",code:`<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    Your browser doesn't support video.
</video>

<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser doesn't support audio.
</audio>`},{heading:"Canvas and SVG",text:"Draw graphics on the fly with Canvas API and create scalable vector graphics with SVG."}]},semantic:{title:"Semantic HTML",description:"Write meaningful HTML that improves accessibility, SEO, and code maintainability.",sections:[{heading:"Why Semantic HTML?",text:"Semantic HTML uses elements that clearly describe their meaning to both the browser and developer, improving accessibility and SEO."},{heading:"Semantic Structure",code:`<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Article Title</h1>
        <section>
            <h2>Section Heading</h2>
            <p>Content goes here...</p>
        </section>
    </article>

    <aside>
        <h3>Related Links</h3>
    </aside>
</main>

<footer>
    <p>&copy; 2025 LearnHub</p>
</footer>`}]},accessibility:{title:"Accessibility",description:"Create inclusive web experiences that work for everyone, including people with disabilities.",sections:[{heading:"ARIA Attributes",text:"Accessible Rich Internet Applications (ARIA) attributes help make web content more accessible to people with disabilities."},{heading:"Best Practices",text:"Use semantic HTML, provide alt text for images, ensure proper heading hierarchy, use descriptive link text, and make forms accessible with labels.",code:`<!-- Good accessibility -->
<img src="logo.png" alt="Company Logo">

<label for="username">Username:</label>
<input type="text" id="username" name="username" aria-required="true">

<button aria-label="Close menu">×</button>

<nav aria-label="Main navigation">
    <ul>
        <li><a href="/">Home</a></li>
    </ul>
</nav>`},{heading:"Keyboard Navigation",text:"Ensure all interactive elements are keyboard accessible using proper focus management and tabindex."}]}}[o];return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("span",{className:"text-6xl mb-4 block",children:"🌐"}),n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"HTML Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-2xl mx-auto",children:"Master HTML - the foundation of web development. Learn to structure web pages and create amazing user experiences."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3",children:f.map(p=>n.jsxs("button",{onClick:()=>m(p.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===p.id?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-xl",children:p.icon}),n.jsx("span",{children:p.label})]},p.id))})}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:d.title}),n.jsx("p",{className:"text-xl text-gray-600",children:d.description})]}),n.jsx("div",{className:"space-y-8",children:d.sections.map((p,E)=>n.jsxs("div",{className:"border-l-4 border-blue-500 pl-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:p.heading}),n.jsx("p",{className:"text-gray-700 mb-4 leading-relaxed",children:p.text}),p.code&&n.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto",children:n.jsx("pre",{className:"text-sm",children:n.jsx("code",{children:p.code})})})]},E))}),n.jsxs("div",{className:"mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Ready to Start Learning?"}),n.jsx("p",{className:"text-gray-700 mb-6",children:"Practice these concepts with hands-on exercises and build real projects."}),n.jsxs("div",{className:"flex gap-4 justify-center",children:[n.jsx("button",{className:"px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all",children:"Start Exercises"}),n.jsx("button",{className:"px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-300",children:"View Examples"})]})]})]}),n.jsxs("div",{className:"mt-8 grid md:grid-cols-3 gap-6",children:[n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[n.jsx("div",{className:"text-3xl mb-3",children:"📚"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Documentation"}),n.jsx("p",{className:"text-gray-600",children:"Comprehensive HTML reference and guides for all skill levels."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[n.jsx("div",{className:"text-3xl mb-3",children:"💻"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Code Editor"}),n.jsx("p",{className:"text-gray-600",children:"Practice HTML with our interactive code editor and see results instantly."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎓"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Certification"}),n.jsx("p",{className:"text-gray-600",children:"Complete the course and earn a certificate to showcase your skills."})]})]})]})]})},qn=()=>{const[o,m]=T.useState("program"),f=[{id:"program",label:"Computer Program",icon:"💻"},{id:"internet",label:"The Internet",icon:"🌐"},{id:"client-server",label:"Client vs Server",icon:"🔄"},{id:"website",label:"Opening a Website",icon:"🚀"}],d={program:{title:"What is a Computer Program?",description:"Understanding the foundation of how software works and communicates with hardware.",sections:[{heading:"Definition",text:"A computer program is a set of instructions written in a programming language that tells a computer what to do. It's like a recipe that the computer follows step by step to perform specific tasks."},{heading:"How Programs Work",text:"Programs are written by developers in high-level programming languages (like JavaScript, Python, Java) and then converted into machine code (binary: 0s and 1s) that the computer's processor can understand and execute.",points:["Source Code: Human-readable instructions written by programmers","Compiler/Interpreter: Translates source code into machine code","Execution: CPU processes the machine code instructions","Output: Program produces results or performs actions"]},{heading:"Types of Programs",text:"Programs can be categorized into different types based on their purpose:",points:["System Software: Operating systems (Windows, macOS, Linux)","Application Software: Web browsers, word processors, games","Web Applications: Gmail, Facebook, online banking","Mobile Apps: Instagram, WhatsApp, mobile games"]},{heading:"Simple Program Example",code:`// JavaScript program that greets a user
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

Total: ~500ms - 3000ms (typically)`},{heading:"Performance Optimization",text:"Ways to make websites load faster:",points:["Caching: Store frequently accessed data","CDN: Serve content from servers closer to users","Compression: Reduce file sizes (gzip, Brotli)","Minification: Remove unnecessary code","Lazy Loading: Load resources only when needed","HTTP/2 or HTTP/3: Faster protocols"]}]}}[o];return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("span",{className:"text-6xl mb-4 block",children:"🌐"}),n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"How Computers & the Web Work"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Understand the fundamental concepts of computing and web technology. Learn what happens behind the scenes when you browse the internet."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:f.map(p=>n.jsxs("button",{onClick:()=>m(p.id),className:`px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${o===p.id?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:p.icon}),n.jsx("span",{className:"text-center",children:p.label})]},p.id))})}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:d.title}),n.jsx("p",{className:"text-xl text-gray-600",children:d.description})]}),n.jsx("div",{className:"space-y-8",children:d.sections.map((p,E)=>n.jsxs("div",{className:"border-l-4 border-blue-500 pl-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:p.heading}),p.text&&n.jsx("p",{className:"text-gray-700 mb-4 leading-relaxed text-lg",children:p.text}),p.points&&n.jsx("ul",{className:"space-y-2 mb-4",children:p.points.map((w,v)=>n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-blue-600 mt-1",children:"▸"}),n.jsx("span",{className:"text-gray-700 text-lg",children:w})]},v))}),p.code&&n.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto mt-4",children:n.jsx("pre",{className:"text-sm leading-relaxed",children:n.jsx("code",{children:p.code})})})]},E))}),n.jsxs("div",{className:"mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-6 text-center",children:"Quick Reference"}),n.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md",children:[n.jsx("h4",{className:"font-bold text-lg text-gray-900 mb-3",children:"💡 Key Takeaways"}),n.jsxs("ul",{className:"space-y-2 text-gray-700",children:[n.jsx("li",{children:"• Programs are instructions for computers"}),n.jsx("li",{children:"• Internet is a global network of networks"}),n.jsx("li",{children:"• Clients request, servers respond"}),n.jsx("li",{children:"• Multiple steps happen when loading a website"})]})]}),n.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md",children:[n.jsx("h4",{className:"font-bold text-lg text-gray-900 mb-3",children:"⚡ Remember"}),n.jsxs("ul",{className:"space-y-2 text-gray-700",children:[n.jsx("li",{children:"• DNS translates domains to IP addresses"}),n.jsx("li",{children:"• HTTPS provides secure communication"}),n.jsx("li",{children:"• Browsers render HTML/CSS/JavaScript"}),n.jsx("li",{children:"• Speed depends on many factors"})]})]})]})]}),n.jsxs("div",{className:"mt-12 text-center",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Ready to Build for the Web?"}),n.jsx("p",{className:"text-gray-700 mb-6 text-lg",children:"Now that you understand how computers and the web work, start learning HTML, CSS, and JavaScript!"}),n.jsxs("div",{className:"flex gap-4 justify-center flex-wrap",children:[n.jsx("button",{className:"px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all",children:"Start HTML Course"}),n.jsx("button",{className:"px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-300",children:"Explore More Topics"})]})]})]}),n.jsxs("div",{className:"mt-8 grid md:grid-cols-3 gap-6",children:[n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📖"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Deep Dive Articles"}),n.jsx("p",{className:"text-gray-600",children:"Read in-depth articles about networking, protocols, and web architecture."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow",children:[n.jsx("div",{className:"text-4xl mb-3",children:"🎥"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Video Tutorials"}),n.jsx("p",{className:"text-gray-600",children:"Watch animated explanations of how the internet and web browsers work."})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow",children:[n.jsx("div",{className:"text-4xl mb-3",children:"🔬"}),n.jsx("h4",{className:"text-xl font-bold text-gray-900 mb-2",children:"Interactive Labs"}),n.jsx("p",{className:"text-gray-600",children:"Experiment with network requests and see data flow in real-time."})]})]})]})]})},Da=()=>{const[o,m]=T.useState("basics"),f=[{id:"basics",label:"CSS Basics",icon:"📝"},{id:"flexbox",label:"Flexbox",icon:"📦"},{id:"grid",label:"Grid Layout",icon:"⚡"},{id:"animations",label:"Animations",icon:"🎬"},{id:"responsive",label:"Responsive Design",icon:"📱"},{id:"variables",label:"CSS Variables",icon:"🎨"},{id:"sass",label:"Sass/SCSS",icon:"💎"}],d={basics:{title:"CSS Basics",description:"Learn the fundamentals of Cascading Style Sheets to style and design beautiful web pages.",sections:[{heading:"What is CSS?",text:"CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of HTML documents. It controls colors, fonts, layouts, spacing, and the overall visual appearance of web pages."},{heading:"CSS Syntax",text:"CSS consists of selectors and declaration blocks. Selectors target HTML elements, and declarations define the styling properties.",code:`/* Basic CSS Syntax */
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
}`},{heading:"Ways to Add CSS",points:["Inline CSS: Using the style attribute directly in HTML elements","Internal CSS: Using <style> tag in the HTML <head> section","External CSS: Linking separate .css files using <link> tag (recommended)"],code:`<!-- External CSS (Recommended) -->
<link rel="stylesheet" href="styles.css">

<!-- Internal CSS -->
<style>
    body { background-color: #f0f0f0; }
</style>

<!-- Inline CSS -->
<p style="color: red;">This is red text</p>`},{heading:"CSS Selectors",points:["Element Selector: Targets HTML elements (p, div, h1)","Class Selector: Targets elements with specific class (.classname)","ID Selector: Targets element with specific ID (#idname)","Attribute Selector: Targets elements with specific attributes","Pseudo-classes: Targets specific states (:hover, :focus, :active)"]},{heading:"Box Model",text:"Every HTML element is treated as a box with content, padding, border, and margin.",code:`/* Box Model Example */
.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 2px solid #333;
    margin: 10px;
    background-color: #f0f0f0;
}`}]},flexbox:{title:"Flexbox",description:"Master Flexbox layout to create flexible, responsive layouts with ease.",sections:[{heading:"What is Flexbox?",text:"Flexbox is a one-dimensional layout method for arranging items in rows or columns. It provides an efficient way to align, distribute space, and order elements."},{heading:"Flex Container Properties",code:`.container {
    display: flex;
    flex-direction: row; /* row, column, row-reverse, column-reverse */
    justify-content: center; /* flex-start, flex-end, center, space-between, space-around */
    align-items: center; /* flex-start, flex-end, center, stretch, baseline */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
    gap: 16px;
}`},{heading:"Flex Item Properties",code:`.item {
    flex-grow: 1; /* How much item will grow */
    flex-shrink: 1; /* How much item will shrink */
    flex-basis: 200px; /* Initial size */
    align-self: center; /* Override container's align-items */
    order: 2; /* Change visual order */
}

/* Shorthand */
.item {
    flex: 1 1 200px; /* grow shrink basis */
}`},{heading:"Common Flexbox Patterns",code:`/* Center Everything */
.center-all {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Card Layout */
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}`}]},grid:{title:"Grid Layout",description:"Create complex, two-dimensional layouts with CSS Grid - the most powerful layout system.",sections:[{heading:"What is CSS Grid?",text:"CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns simultaneously."},{heading:"Grid Container Properties",code:`.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
    grid-template-rows: 100px 200px auto;
    gap: 20px;
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
}`},{heading:"Grid Item Properties",code:`.grid-item {
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
    grid-row: 1 / 2;
    grid-area: header; /* Use named area */
}

/* Shorthand */
.item {
    grid-area: 2 / 1 / 3 / 4; /* row-start / col-start / row-end / col-end */
}`},{heading:"Responsive Grid",code:`/* Auto-fit and minmax for responsive grids */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Media queries for different layouts */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}`}]},animations:{title:"Animations",description:"Bring your designs to life with CSS transitions and keyframe animations.",sections:[{heading:"CSS Transitions",text:"Transitions allow property changes to occur smoothly over a specified duration.",code:`.button {
    background-color: blue;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
    background-color: darkblue;
    transform: scale(1.1);
}

/* All properties */
.box {
    transition: all 0.5s ease-in-out;
}`},{heading:"CSS Keyframe Animations",code:`/* Define animation */
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

/* Apply animation */
.element {
    animation: fadeIn 1s ease-out;
}`},{heading:"Animation Properties",code:`.animated {
    animation-name: slideIn;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
}

/* Shorthand */
.animated {
    animation: slideIn 2s ease-in-out 0.5s infinite alternate forwards;
}`},{heading:"Common Animations",code:`/* Fade In */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide In */
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

/* Bounce */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* Rotate */
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`}]},responsive:{title:"Responsive Design",description:"Create websites that look great on all devices using responsive design techniques.",sections:[{heading:"What is Responsive Design?",text:"Responsive design ensures websites adapt and look good on all devices and screen sizes - from mobile phones to large desktop monitors."},{heading:"Media Queries",code:`/* Mobile First Approach */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}

/* Large Desktop */
@media (min-width: 1440px) {
    .container {
        width: 1200px;
    }
}`},{heading:"Viewport and Units",code:`/* Viewport Meta Tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Relative Units */
.responsive {
    width: 80vw; /* 80% of viewport width */
    height: 50vh; /* 50% of viewport height */
    font-size: 2rem; /* Relative to root font-size */
    padding: 5%; /* Percentage of parent width */
}`},{heading:"Responsive Images",code:`/* Responsive Image */
img {
    max-width: 100%;
    height: auto;
}

/* Picture Element */
<picture>
    <source media="(min-width: 1024px)" srcset="large.jpg">
    <source media="(min-width: 768px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Description">
</picture>`},{heading:"Container Queries",code:`/* Modern approach - Container Queries */
.card-container {
    container-type: inline-size;
}

@container (min-width: 500px) {
    .card {
        display: flex;
        gap: 20px;
    }
}`}]},variables:{title:"CSS Variables",description:"Use CSS custom properties (variables) to create maintainable and dynamic stylesheets.",sections:[{heading:"What are CSS Variables?",text:"CSS Variables (Custom Properties) allow you to store values that can be reused throughout your stylesheet, making it easier to maintain consistent designs."},{heading:"Defining CSS Variables",code:`:root {
    /* Colors */
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --text-color: #1f2937;
    --bg-color: #ffffff;

    /* Spacing */
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 32px;

    /* Typography */
    --font-family: 'Arial', sans-serif;
    --font-size-base: 16px;
    --font-size-lg: 24px;
}`},{heading:"Using CSS Variables",code:`.button {
    background-color: var(--primary-color);
    color: var(--bg-color);
    padding: var(--spacing-md);
    font-family: var(--font-family);
}

/* With fallback value */
.element {
    color: var(--text-color, #000000);
}`},{heading:"Dynamic Variables with JavaScript",code:`// Change CSS variable value
document.documentElement.style.setProperty('--primary-color', '#ff0000');

// Get CSS variable value
const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color');

// Dark mode toggle
function toggleDarkMode() {
    document.documentElement.style.setProperty('--bg-color', '#1f2937');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
}`},{heading:"Scoped Variables",code:`:root {
    --button-color: blue;
}

.card {
    --button-color: green; /* Override for this scope */
}

.card button {
    background-color: var(--button-color); /* Will be green */
}`}]},sass:{title:"Sass/SCSS",description:"Supercharge your CSS with Sass - a powerful CSS preprocessor with variables, nesting, and more.",sections:[{heading:"What is Sass?",text:"Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds features like variables, nesting, mixins, and functions to make CSS more maintainable and powerful."},{heading:"Variables",code:`// Sass Variables
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$font-stack: 'Helvetica', sans-serif;
$spacing: 16px;

.button {
    background-color: $primary-color;
    font-family: $font-stack;
    padding: $spacing;
}`},{heading:"Nesting",code:`// Sass Nesting
.nav {
    background-color: #333;

    ul {
        list-style: none;
        padding: 0;

        li {
            display: inline-block;
            margin: 0 10px;

            a {
                color: white;
                text-decoration: none;

                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
}`},{heading:"Mixins",code:`// Define Mixin
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin button-style($bg-color, $text-color) {
    background-color: $bg-color;
    color: $text-color;
    padding: 12px 24px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

// Use Mixin
.container {
    @include flex-center;
}

.primary-btn {
    @include button-style($primary-color, white);
}`},{heading:"Functions and Operations",code:`// Operations
$base-size: 16px;
.title {
    font-size: $base-size * 2; // 32px
}

// Built-in Functions
.box {
    background-color: lighten($primary-color, 20%);
    border-color: darken($primary-color, 10%);
    color: mix($primary-color, $secondary-color, 50%);
}

// Custom Function
@function calculate-rem($px) {
    @return $px / 16px * 1rem;
}

.element {
    font-size: calculate-rem(24px); // 1.5rem
}`},{heading:"Partials and Import",code:`// _variables.scss
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;

// _mixins.scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

// main.scss
@import 'variables';
@import 'mixins';

.container {
    background-color: $primary-color;
    @include flex-center;
}`}]}}[o];return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("span",{className:"text-6xl mb-4 block",children:"🎨"}),n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"CSS Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-2xl mx-auto",children:"Master CSS to design beautiful, responsive, and modern websites. From basics to advanced animations and layouts."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3",children:f.map(p=>n.jsxs("button",{onClick:()=>m(p.id),className:`px-4 py-3 rounded-lg font-semibold transition-all flex flex-col items-center justify-center gap-2 ${o===p.id?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:p.icon}),n.jsx("span",{className:"text-xs text-center",children:p.label})]},p.id))})}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:d.title}),n.jsx("p",{className:"text-xl text-gray-600",children:d.description})]}),n.jsx("div",{className:"space-y-8",children:d.sections.map((p,E)=>n.jsxs("div",{className:"border-l-4 border-blue-500 pl-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:p.heading}),p.text&&n.jsx("p",{className:"text-gray-700 mb-4 leading-relaxed",children:p.text}),p.points&&n.jsx("ul",{className:"space-y-2 mb-4",children:p.points.map((w,v)=>n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-blue-600 mt-1",children:"▸"}),n.jsx("span",{className:"text-gray-700",children:w})]},v))}),p.code&&n.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto",children:n.jsx("pre",{className:"text-sm",children:n.jsx("code",{children:p.code})})})]},E))}),n.jsxs("div",{className:"mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Ready to Style the Web?"}),n.jsx("p",{className:"text-gray-700 mb-6",children:"Practice these CSS concepts and create beautiful, responsive designs!"}),n.jsxs("div",{className:"flex gap-4 justify-center",children:[n.jsx("button",{className:"px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all",children:"Start Exercises"}),n.jsx("button",{className:"px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-300",children:"View Examples"})]})]})]})]})]})},sa=()=>{const[o,m]=T.useState("fundamentals"),f=[{id:"fundamentals",label:"JS Fundamentals",icon:"📚"},{id:"es6",label:"ES6+ Features",icon:"✨"},{id:"dom",label:"DOM Manipulation",icon:"🎯"},{id:"async",label:"Async JavaScript",icon:"⏱️"},{id:"promises",label:"Promises & Async/Await",icon:"🔄"},{id:"oop",label:"OOP in JavaScript",icon:"🏗️"},{id:"modules",label:"Modules",icon:"📦"},{id:"testing",label:"Testing",icon:"🧪"}],c=()=>{switch(o){case"fundamentals":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"JavaScript Fundamentals"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's an essential part of web development alongside HTML and CSS."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Variables and Data Types"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Variable declarations
let name = "John";        // String
const age = 25;          // Number
var isStudent = true;    // Boolean
let hobbies = ["reading", "coding"];  // Array
let person = { name: "Alice", age: 30 };  // Object

// Data types
let str = "Hello World";
let num = 42;
let bool = true;
let nothing = null;
let notDefined = undefined;
let sym = Symbol("unique");`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Functions"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Example usage
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(add(5, 3));        // 8
console.log(multiply(4, 2));   // 8`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Control Flow"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// If-else statement
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Switch statement
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Regular day");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

hobbies.forEach(hobby => {
  console.log(hobby);
});`})]})]});case"es6":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"ES6+ Features"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"ECMAScript 6 (ES6) and later versions introduced many powerful features that make JavaScript more expressive and easier to work with."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Destructuring"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

// Object destructuring
const person = { name: "Alice", age: 30, city: "NYC" };
const { name, age } = person;

// Function parameter destructuring
function printUser({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}

printUser(person);  // "Alice is 30 years old"`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Spread and Rest Operators"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Spread operator (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // 10`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Template Literals and Arrow Functions"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Template literals
const name = "Alice";
const age = 30;
const message = \`My name is \${name} and I am \${age} years old\`;

// Multi-line strings
const multiLine = \`
  This is a
  multi-line
  string
\`;

// Arrow functions
const square = x => x * x;
const greet = name => \`Hello, \${name}!\`;

// Array methods with arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);`})]})]});case"dom":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"DOM Manipulation"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"The Document Object Model (DOM) is a programming interface for web documents. It represents the page structure as a tree of objects that can be manipulated with JavaScript."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Selecting Elements"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Select by ID
const element = document.getElementById("myId");

// Select by class name
const elements = document.getElementsByClassName("myClass");

// Select by tag name
const paragraphs = document.getElementsByTagName("p");

// Query selector (CSS selector)
const firstDiv = document.querySelector("div");
const allDivs = document.querySelectorAll("div");

// Modern approach
const button = document.querySelector(".btn-primary");
const allButtons = document.querySelectorAll("button");`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Modifying Elements"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Change text content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Change attributes
element.setAttribute("data-id", "123");
element.id = "newId";
element.className = "new-class";

// Change styles
element.style.color = "blue";
element.style.fontSize = "20px";

// Add/remove classes
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("visible");`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Event Handling"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Add event listener
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Arrow function event handler
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Event:", e.target);
});

// Multiple event types
input.addEventListener("input", (e) => {
  console.log("Value:", e.target.value);
});

input.addEventListener("focus", () => {
  console.log("Input focused");
});

// Remove event listener
const handler = () => console.log("Click");
button.addEventListener("click", handler);
button.removeEventListener("click", handler);`})]})]});case"async":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Async JavaScript"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"JavaScript is single-threaded, but asynchronous programming allows code to run without blocking the main thread, enabling responsive applications."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Callbacks"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Callback function
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Alice" };
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log("Data received:", result);
});

// Callback hell (avoid this!)
getData((a) => {
  getMoreData(a, (b) => {
    getEvenMoreData(b, (c) => {
      console.log("Done!");
    });
  });
});`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"SetTimeout and SetInterval"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// setTimeout - execute once after delay
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// setInterval - execute repeatedly
const intervalId = setInterval(() => {
  console.log("Executed every 3 seconds");
}, 3000);

// Clear interval
clearInterval(intervalId);

// Clear timeout
const timeoutId = setTimeout(() => {
  console.log("This won't execute");
}, 5000);
clearTimeout(timeoutId);`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Event Loop"}),n.jsx("p",{className:"text-gray-700 mb-3",children:"JavaScript uses an event loop to handle asynchronous operations:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Call Stack: Executes synchronous code"}),n.jsx("li",{children:"Callback Queue: Holds callback functions"}),n.jsx("li",{children:"Event Loop: Moves callbacks from queue to stack when stack is empty"}),n.jsx("li",{children:"Web APIs: Handle async operations (setTimeout, fetch, etc.)"})]})]})]});case"promises":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Promises & Async/Await"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Promises provide a cleaner way to handle asynchronous operations, and async/await makes asynchronous code look synchronous."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating and Using Promises"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Creating a promise
const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "Alice" });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
};

// Using promises
fetchUserData()
  .then(data => {
    console.log("User data:", data);
    return data.id;
  })
  .then(id => {
    console.log("User ID:", id);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promise completed");
  });`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Async/Await"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Async function
async function getUserData() {
  try {
    const user = await fetchUserData();
    console.log("User:", user);

    const posts = await fetchUserPosts(user.id);
    console.log("Posts:", posts);

    return { user, posts };
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call async function
getUserData().then(result => {
  console.log("Result:", result);
});

// Async arrow function
const getData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Promise Methods"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Promise.all - wait for all promises
const promises = [
  fetch("/api/users"),
  fetch("/api/posts"),
  fetch("/api/comments")
];

Promise.all(promises)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(data => console.log("All data:", data));

// Promise.race - first to complete
Promise.race(promises)
  .then(first => console.log("First response:", first));

// Promise.allSettled - wait for all regardless of outcome
Promise.allSettled(promises)
  .then(results => console.log("Results:", results));`})]})]});case"oop":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Object-Oriented Programming in JavaScript"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"JavaScript supports OOP concepts including classes, inheritance, encapsulation, and polymorphism."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Classes and Objects"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, I'm \${this.name}\`;
  }

  // Getter
  get info() {
    return \`\${this.name} is \${this.age} years old\`;
  }

  // Setter
  set age(value) {
    if (value < 0) throw new Error("Age must be positive");
    this._age = value;
  }

  // Static method
  static species() {
    return "Homo sapiens";
  }
}

// Create instance
const person = new Person("Alice", 30);
console.log(person.greet());
console.log(Person.species());`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Inheritance"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent constructor
    this.breed = breed;
  }

  speak() {
    return \`\${this.name} barks\`;
  }

  fetch() {
    return \`\${this.name} is fetching the ball\`;
  }
}

const dog = new Dog("Max", "Golden Retriever");
console.log(dog.speak());   // "Max barks"
console.log(dog.fetch());   // "Max is fetching the ball"`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Encapsulation (Private Fields)"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Private fields with #
class BankAccount {
  #balance = 0;  // Private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }

  #calculateInterest() {
    return this.#balance * 0.05;
  }
}

const account = new BankAccount("Alice");
account.deposit(1000);
console.log(account.getBalance());  // 1000
// console.log(account.#balance);   // Error: Private field`})]})]});case"modules":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"JavaScript Modules"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Modules allow you to organize code into separate files and import/export functionality between them, making code more maintainable and reusable."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Export and Import"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// math.js - Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export function multiply(a, b) {
  return a * b;
}

// user.js - Default export
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// app.js - Importing
import User from './user.js';
import { add, subtract } from './math.js';
import * as math from './math.js';

const user = new User("Alice");
console.log(add(5, 3));
console.log(math.multiply(4, 2));`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Import Variations"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Import with alias
import { add as sum } from './math.js';

// Import everything
import * as MathUtils from './math.js';

// Import default and named
import User, { validateUser, formatUser } from './user.js';

// Dynamic import
const loadModule = async () => {
  const module = await import('./math.js');
  console.log(module.add(1, 2));
};

// Re-export
export { add, subtract } from './math.js';
export { default as User } from './user.js';`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Module Best Practices"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Use named exports for multiple utilities from a module"}),n.jsx("li",{children:"Use default export for the main functionality of a module"}),n.jsx("li",{children:"Keep modules focused on a single responsibility"}),n.jsx("li",{children:"Avoid circular dependencies between modules"}),n.jsx("li",{children:"Use dynamic imports for code splitting and lazy loading"}),n.jsx("li",{children:"Group related exports in barrel files (index.js)"})]})]})]});case"testing":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"JavaScript Testing"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Testing ensures your code works as expected and helps prevent bugs. Learn about different testing approaches and popular testing frameworks."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Unit Testing with Jest"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// math.test.js
import { add, subtract } from './math';

describe('Math operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});`})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Testing Async Code"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// api.js
export async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}

// api.test.js
import { fetchUser } from './api';

describe('API calls', () => {
  test('fetches user successfully', async () => {
    const user = await fetchUser(1);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
  });

  test('handles errors', async () => {
    await expect(fetchUser(-1)).rejects.toThrow();
  });
});

// Mocking
jest.mock('./api');
fetchUser.mockResolvedValue({ id: 1, name: 'Alice' });`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Testing Best Practices"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Write tests before or alongside your code (TDD)"}),n.jsx("li",{children:"Keep tests simple, focused, and independent"}),n.jsx("li",{children:"Use descriptive test names that explain what is being tested"}),n.jsx("li",{children:"Test edge cases and error conditions"}),n.jsx("li",{children:"Mock external dependencies (APIs, databases, etc.)"}),n.jsx("li",{children:"Aim for high code coverage but focus on critical paths"}),n.jsx("li",{children:"Run tests automatically in CI/CD pipelines"})]}),n.jsxs("div",{className:"mt-4",children:[n.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Popular Testing Frameworks:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[n.jsx("li",{children:"Jest - Full-featured testing framework"}),n.jsx("li",{children:"Mocha - Flexible testing framework"}),n.jsx("li",{children:"Vitest - Fast unit test framework for Vite"}),n.jsx("li",{children:"Cypress - End-to-end testing"}),n.jsx("li",{children:"Playwright - Browser automation and testing"})]})]})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"JavaScript Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master JavaScript from fundamentals to advanced concepts. Learn the language that powers the modern web."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},zx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"🚀"},{id:"components",label:"Components & Props",icon:"🧩"},{id:"hooks",label:"React Hooks",icon:"🪝"},{id:"state",label:"State Management",icon:"🔄"},{id:"routing",label:"React Router",icon:"🛣️"},{id:"performance",label:"Performance",icon:"⚡"},{id:"ecosystem",label:"Ecosystem",icon:"🌐"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to React"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Meta and a community of developers. React makes it painless to create interactive UIs."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Choose React?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Component-Based Architecture"}),n.jsx("li",{children:"Virtual DOM for better performance"}),n.jsx("li",{children:"Declarative views make your code predictable"}),n.jsx("li",{children:"Large ecosystem and community support"}),n.jsx("li",{children:"Learn once, write anywhere (Web, Mobile, Desktop)"}),n.jsx("li",{children:"Backed by Meta (Facebook)"})]})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Your First React Component"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import React from 'react';

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
const element = <img src={user.avatarUrl} alt={user.name} />;`})]})]});case"components":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Components & Props"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Components let you split the UI into independent, reusable pieces. Think of them as JavaScript functions that accept inputs (props) and return React elements."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Function Components"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Simple function component
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
}`})]})]});case"hooks":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"React Hooks"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Hooks let you use state and other React features in function components. They were introduced in React 16.8."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"useState Hook"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { useState } from 'react';

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
}, [a, b]);`})]})]});case"state":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"State Management"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"As your React application grows, managing state becomes more complex. Learn different approaches to handle state in React applications."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Context API"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`import { createContext, useContext, useState } from 'react';

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
</Suspense>`})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Performance Best Practices"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Use React.memo for expensive pure components"}),n.jsx("li",{children:"Implement useMemo and useCallback for expensive calculations"}),n.jsx("li",{children:"Use lazy loading and code splitting for large components"}),n.jsx("li",{children:"Avoid inline functions and objects in render"}),n.jsx("li",{children:"Use virtualization for long lists (react-window, react-virtualized)"}),n.jsx("li",{children:"Optimize images and assets"}),n.jsx("li",{children:"Use React DevTools Profiler to identify bottlenecks"}),n.jsx("li",{children:"Implement proper key props in lists"})]})]})]});case"ecosystem":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"React Ecosystem"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Explore the rich ecosystem of libraries and tools that complement React."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Popular React Frameworks"}),n.jsxs("ul",{className:"space-y-3 text-gray-700",children:[n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Next.js:"})," Full-stack React framework with SSR, SSG, and API routes"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Remix:"})," Full-stack web framework focused on web standards"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Gatsby:"})," React-based static site generator"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Vite:"})," Next-generation frontend tooling"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-blue-600",children:"Create React App:"})," Official React starter template"]})]})]}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"UI Component Libraries"}),n.jsxs("ul",{className:"space-y-3 text-gray-700",children:[n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"Material-UI (MUI):"})," React components implementing Material Design"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"Ant Design:"})," Enterprise-level UI design system"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"Chakra UI:"})," Simple, modular component library"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"shadcn/ui:"})," Beautifully designed components built with Radix UI"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"Tailwind CSS:"})," Utility-first CSS framework"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-green-600",children:"React Bootstrap:"})," Bootstrap components for React"]})]})]}),n.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Essential Tools & Libraries"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"State Management:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[n.jsx("li",{children:"Redux / Redux Toolkit"}),n.jsx("li",{children:"Zustand"}),n.jsx("li",{children:"Jotai"}),n.jsx("li",{children:"Recoil"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Data Fetching:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[n.jsx("li",{children:"React Query (TanStack Query)"}),n.jsx("li",{children:"SWR"}),n.jsx("li",{children:"Apollo Client (GraphQL)"}),n.jsx("li",{children:"Axios"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Forms:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[n.jsx("li",{children:"React Hook Form"}),n.jsx("li",{children:"Formik"}),n.jsx("li",{children:"React Final Form"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold mb-2",children:"Testing:"}),n.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[n.jsx("li",{children:"Jest"}),n.jsx("li",{children:"React Testing Library"}),n.jsx("li",{children:"Vitest"}),n.jsx("li",{children:"Cypress / Playwright"})]})]})]})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"React.js Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master React and build modern, interactive web applications with the most popular JavaScript library."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Bx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"🚀"},{id:"components",label:"Components",icon:"🧩"},{id:"directives",label:"Directives",icon:"📝"},{id:"services",label:"Services & DI",icon:"🔧"},{id:"routing",label:"Routing",icon:"🛣️"},{id:"rxjs",label:"RxJS",icon:"🔄"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Angular"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, it provides a complete solution for enterprise applications."}),n.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Key Features"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Component-based architecture"}),n.jsx("li",{children:"TypeScript by default"}),n.jsx("li",{children:"Powerful CLI for scaffolding and development"}),n.jsx("li",{children:"Two-way data binding"}),n.jsx("li",{children:"Dependency Injection"}),n.jsx("li",{children:"RxJS for reactive programming"}),n.jsx("li",{children:"Complete framework with routing, HTTP, forms"})]})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Creating Your First Angular App"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Install Angular CLI
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
).subscribe(users => this.users = users);`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-red-600 to-pink-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Angular Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master Angular and build powerful, scalable enterprise applications with Google's complete framework."})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},qx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"☕"},{id:"spring",label:"Spring Framework",icon:"🌱"},{id:"boot",label:"Spring Boot",icon:"🚀"},{id:"rest",label:"REST APIs",icon:"🔌"},{id:"database",label:"Database",icon:"🗄️"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Java for Backend Development"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Java is one of the most popular programming languages for building enterprise-grade backend applications."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Java for Backend?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Platform independent (Write Once, Run Anywhere)"}),n.jsx("li",{children:"Strong typing and OOP principles"}),n.jsx("li",{children:"Robust ecosystem and libraries"}),n.jsx("li",{children:"Excellent performance and scalability"}),n.jsx("li",{children:"Enterprise-ready frameworks"}),n.jsx("li",{children:"Large community and job market"})]})]})]});case"spring":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Spring Framework"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Spring is a comprehensive framework for enterprise Java development."}),n.jsx("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Spring Component
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
}`})})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-orange-600 to-red-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Java Spring Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Build enterprise-grade backend applications with Java and Spring Boot"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},kx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"⚡"},{id:"routing",label:"Routing",icon:"🛣️"},{id:"ssr",label:"SSR & SSG",icon:"🔄"},{id:"api",label:"API Routes",icon:"🔌"},{id:"optimization",label:"Optimization",icon:"⚙️"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Next.js"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Next.js is a React framework that enables server-side rendering, static site generation, and more for building production-ready applications."}),n.jsxs("div",{className:"bg-black border-l-4 border-white p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Why Next.js?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300",children:[n.jsx("li",{children:"Server-Side Rendering (SSR) for better SEO"}),n.jsx("li",{children:"Static Site Generation (SSG) for performance"}),n.jsx("li",{children:"Built-in routing and code splitting"}),n.jsx("li",{children:"API routes for backend functionality"}),n.jsx("li",{children:"Image optimization out of the box"}),n.jsx("li",{children:"Fast Refresh for instant feedback"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Create Next.js app
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
}`})]}),n.jsxs("div",{className:"bg-black border-l-4 border-white p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Performance Best Practices"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300",children:[n.jsx("li",{children:"Use Image component for automatic optimization"}),n.jsx("li",{children:"Implement code splitting with dynamic imports"}),n.jsx("li",{children:"Use SSG whenever possible for best performance"}),n.jsx("li",{children:"Optimize fonts with next/font"}),n.jsx("li",{children:"Enable compression and caching"}),n.jsx("li",{children:"Monitor performance with Next.js Analytics"})]})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900",children:[n.jsx("div",{className:"bg-gradient-to-r from-black to-gray-900 text-white py-16 border-b-4 border-white",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Next.js Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"The React Framework for Production - Build fast, scalable web applications"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-700",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-white text-black shadow-lg transform scale-105":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Gx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"📘"},{id:"types",label:"Types",icon:"🔤"},{id:"interfaces",label:"Interfaces",icon:"📋"},{id:"generics",label:"Generics",icon:"🔧"},{id:"advanced",label:"Advanced Types",icon:"⚡"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to TypeScript"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and class-based object-oriented programming."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why TypeScript?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Catch errors at compile time, not runtime"}),n.jsx("li",{children:"Better IDE support with autocomplete and IntelliSense"}),n.jsx("li",{children:"Improved code maintainability and refactoring"}),n.jsx("li",{children:"Self-documenting code with type annotations"}),n.jsx("li",{children:"Great for large-scale applications"}),n.jsx("li",{children:"Popular in modern frameworks (Angular, React, Vue)"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// Install TypeScript
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
}`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"TypeScript Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"JavaScript that scales - Add type safety to your JavaScript applications"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Yx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"🚀"},{id:"modules",label:"Modules & NPM",icon:"📦"},{id:"async",label:"Async Programming",icon:"⚡"},{id:"fs",label:"File System",icon:"📁"},{id:"http",label:"HTTP Server",icon:"🌐"},{id:"streams",label:"Streams & Buffers",icon:"🌊"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Node.js"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server side."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Node.js?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Non-blocking I/O for high performance"}),n.jsx("li",{children:"Single programming language (JavaScript) for full stack"}),n.jsx("li",{children:"Large ecosystem with NPM packages"}),n.jsx("li",{children:"Event-driven architecture"}),n.jsx("li",{children:"Scalable for microservices"}),n.jsx("li",{children:"Active community and support"})]})]}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Your First Node.js Program"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`// hello.js
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
const json = buf1.toJSON();`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Node.js Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Build powerful backend applications with JavaScript using Node.js"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Ix=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"🚂"},{id:"routing",label:"Routing",icon:"🛣️"},{id:"middleware",label:"Middleware",icon:"⚙️"},{id:"rest",label:"REST APIs",icon:"🔌"},{id:"validation",label:"Validation",icon:"✅"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Express.js"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Express.js is a fast, minimalist web framework for Node.js that simplifies building web applications and APIs."}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Basic Express Server"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const express = require('express');
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
);`})})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-gray-700 to-slate-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Express.js Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Fast, unopinionated, minimalist web framework for Node.js"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-gray-700 to-slate-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Jx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"🍃"},{id:"crud",label:"CRUD Operations",icon:"📝"},{id:"mongoose",label:"Mongoose ODM",icon:"🦫"},{id:"aggregation",label:"Aggregation",icon:"📊"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to MongoDB"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Connecting to MongoDB"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`const { MongoClient } = require('mongodb');

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
// $lookup - join collections`})})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-green-700 to-lime-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"MongoDB Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"NoSQL database for modern applications"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-green-700 to-lime-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Vx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"🌱"},{id:"core",label:"Spring Core",icon:"⚙️"},{id:"boot",label:"Spring Boot",icon:"🚀"},{id:"rest",label:"REST APIs",icon:"🔌"},{id:"jpa",label:"Spring Data JPA",icon:"🗄️"},{id:"security",label:"Spring Security",icon:"🔒"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to Spring Framework"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"Spring is the most popular Java framework for building enterprise applications. It provides comprehensive infrastructure support for developing Java applications."}),n.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why Spring Framework?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Dependency Injection for loose coupling"}),n.jsx("li",{children:"Comprehensive infrastructure support"}),n.jsx("li",{children:"Enterprise-ready features"}),n.jsx("li",{children:"Simplified database access with Spring Data"}),n.jsx("li",{children:"Built-in security with Spring Security"}),n.jsx("li",{children:"Microservices support with Spring Cloud"}),n.jsx("li",{children:"Large ecosystem and community"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Spring Ecosystem"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`Spring Framework Components:

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
}`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Java Spring Framework Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Build enterprise-grade backend applications with Spring Boot"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Qx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"🐬"},{id:"basics",label:"SQL Basics",icon:"📝"},{id:"queries",label:"Advanced Queries",icon:"🔍"},{id:"joins",label:"Joins",icon:"🔗"},{id:"indexes",label:"Indexes & Performance",icon:"⚡"},{id:"transactions",label:"Transactions",icon:"🔄"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to MySQL"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"MySQL is the world's most popular open-source relational database management system. It's widely used for web applications and is a central component of the LAMP stack."}),n.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why MySQL?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Open-source and free to use"}),n.jsx("li",{children:"High performance and reliability"}),n.jsx("li",{children:"Easy to use and learn"}),n.jsx("li",{children:"Excellent community support"}),n.jsx("li",{children:"Works on multiple platforms"}),n.jsx("li",{children:"Scalable for large applications"}),n.jsx("li",{children:"ACID compliant for data integrity"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Connect to MySQL
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
SELECT * FROM products WHERE id = 1 LOCK IN SHARE MODE;  -- Shared lock`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"MySQL Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master the world's most popular open-source relational database"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Xx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"🐘"},{id:"basics",label:"SQL Basics",icon:"📝"},{id:"advanced",label:"Advanced Features",icon:"⚡"},{id:"json",label:"JSON Support",icon:"📦"},{id:"performance",label:"Performance",icon:"🚀"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to PostgreSQL"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance."}),n.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Why PostgreSQL?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"ACID compliant and highly reliable"}),n.jsx("li",{children:"Advanced data types (JSON, Array, hstore)"}),n.jsx("li",{children:"Full-text search capabilities"}),n.jsx("li",{children:"Extensible with custom functions and types"}),n.jsx("li",{children:"Superior handling of concurrent users"}),n.jsx("li",{children:"Advanced indexing techniques"}),n.jsx("li",{children:"Support for complex queries and joins"}),n.jsx("li",{children:"Active development and community"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Getting Started"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`-- Connect to PostgreSQL
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
LIMIT 10;`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"PostgreSQL Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Master the world's most advanced open-source relational database"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})},Fx=()=>{const[o,m]=T.useState("intro"),f=[{id:"intro",label:"Introduction",icon:"📚"},{id:"ddl",label:"DDL Commands",icon:"🏗️"},{id:"dml",label:"DML Commands",icon:"✏️"},{id:"queries",label:"Queries",icon:"🔍"},{id:"constraints",label:"Constraints",icon:"🔒"},{id:"joins",label:"Joins",icon:"🔗"}],c=()=>{switch(o){case"intro":return n.jsxs("div",{className:"space-y-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Introduction to SQL"}),n.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:"SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. It's used across all major database systems."}),n.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"What is SQL?"}),n.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[n.jsx("li",{children:"Standard language for relational databases"}),n.jsx("li",{children:"Used to create, read, update, and delete data"}),n.jsx("li",{children:"Declarative language (you specify what you want, not how)"}),n.jsx("li",{children:"Works with MySQL, PostgreSQL, SQL Server, Oracle, etc."}),n.jsx("li",{children:"Essential skill for backend developers and data analysts"})]})]}),n.jsxs("div",{className:"bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg",children:[n.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"SQL Categories"}),n.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:`SQL is divided into several categories:

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
CROSS JOIN courses c;`})]})]});default:return null}};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50",children:[n.jsx("div",{className:"bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-5xl font-bold mb-4",children:"SQL Basics Course"}),n.jsx("p",{className:"text-xl opacity-90 max-w-3xl mx-auto",children:"Learn the fundamentals of SQL - the language of databases"})]})})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:n.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:f.map(d=>n.jsxs("button",{onClick:()=>m(d.id),className:`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${o===d.id?"bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[n.jsx("span",{className:"text-2xl",children:d.icon}),n.jsx("span",{children:d.label})]},d.id))})}),n.jsx("div",{className:"bg-white rounded-xl shadow-lg p-8",children:c()})]})]})};function Kx(){return n.jsx(Dx,{children:n.jsx(Ex,{children:n.jsxs(hf,{children:[n.jsx(P,{path:"/login",element:n.jsx(Hx,{})}),n.jsx(P,{path:"/*",element:n.jsx(Ux,{children:n.jsxs("div",{className:"min-h-screen",children:[n.jsx(_x,{}),n.jsxs(hf,{children:[n.jsx(P,{path:"/",element:n.jsx(gf,{})}),n.jsx(P,{path:"courses/computers-web",element:n.jsx(qn,{})}),n.jsx(P,{path:"courses/html",element:n.jsx(Bl,{})}),n.jsx(P,{path:"courses/computers-web/program",element:n.jsx(qn,{})}),n.jsx(P,{path:"courses/computers-web/internet",element:n.jsx(qn,{})}),n.jsx(P,{path:"courses/computers-web/client-server",element:n.jsx(qn,{})}),n.jsx(P,{path:"courses/computers-web/website",element:n.jsx(qn,{})}),n.jsx(P,{path:"courses/html/basics",element:n.jsx(Bl,{})}),n.jsx(P,{path:"courses/html/forms",element:n.jsx(Bl,{})}),n.jsx(P,{path:"courses/html/html5",element:n.jsx(Bl,{})}),n.jsx(P,{path:"courses/html/semantic",element:n.jsx(Bl,{})}),n.jsx(P,{path:"courses/html/accessibility",element:n.jsx(Bl,{})}),n.jsx(P,{path:"courses/css",element:n.jsx(Da,{})}),n.jsx(P,{path:"courses/javascript",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/css/basics",element:n.jsx(Da,{})}),n.jsx(P,{path:"courses/css/flexbox",element:n.jsx(Da,{})}),n.jsx(P,{path:"courses/css/grid",element:n.jsx(Da,{})}),n.jsx(P,{path:"courses/css/animations",element:n.jsx(Da,{})}),n.jsx(P,{path:"courses/css/responsive",element:n.jsx(Da,{})}),n.jsx(P,{path:"courses/css/variables",element:n.jsx(Da,{})}),n.jsx(P,{path:"courses/css/sass",element:n.jsx(Da,{})}),n.jsx(P,{path:"courses/js/fundamentals",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/js/es6",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/js/dom",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/js/async",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/js/promises",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/js/oop",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/js/modules",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/js/testing",element:n.jsx(sa,{})}),n.jsx(P,{path:"courses/react",element:n.jsx(zx,{})}),n.jsx(P,{path:"courses/angular",element:n.jsx(Bx,{})}),n.jsx(P,{path:"courses/nextjs",element:n.jsx(kx,{})}),n.jsx(P,{path:"courses/typescript",element:n.jsx(Gx,{})}),n.jsx(P,{path:"courses/java",element:n.jsx(qx,{})}),n.jsx(P,{path:"courses/nodejs",element:n.jsx(Yx,{})}),n.jsx(P,{path:"courses/expressjs",element:n.jsx(Ix,{})}),n.jsx(P,{path:"courses/mongodb",element:n.jsx(Jx,{})}),n.jsx(P,{path:"courses/java-spring",element:n.jsx(Vx,{})}),n.jsx(P,{path:"courses/mysql",element:n.jsx(Qx,{})}),n.jsx(P,{path:"courses/postgresql",element:n.jsx(Xx,{})}),n.jsx(P,{path:"courses/sql-basics",element:n.jsx(Fx,{})}),n.jsx(P,{path:"*",element:n.jsx(gf,{})})]})]})})})]})})})}ug.createRoot(document.getElementById("root")).render(n.jsx(T.StrictMode,{children:n.jsx(Kx,{})}));
