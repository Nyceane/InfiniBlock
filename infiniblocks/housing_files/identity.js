/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){var g=a.fbq;g.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var r=a.postMessage||function(){};if(!g){r({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");if("error"in console)console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return false}return true}())return;"use strict";var h=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof r};if(!g.__fbeventsModules){g.__fbeventsModules={};g.__fbeventsResolvedModules={};g.getFbeventsModules=function(r){if(!g.__fbeventsResolvedModules[r])g.__fbeventsResolvedModules[r]=g.__fbeventsModules[r]();return g.__fbeventsResolvedModules[r]};g.fbIsModuleLoaded=function(r){return!!g.__fbeventsModules[r]};g.ensureModuleRegistered=function(r,e){if(!g.fbIsModuleLoaded(r))g.__fbeventsModules[r]=e}}g.ensureModuleRegistered("SignalsFBEventsLogging",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var r=g.getFbeventsModules("SignalsFBEventsUtils"),s=r.sendPOST,t=g.getFbeventsModules("SignalsParamList"),u=false;function v(){u=true}var w="console",x="warn",y=a[w]?a[w][x].bind(a[w]):function(){},z=false;function A(){z=true}function B(J){if(z)return;y("[Facebook Pixel] - "+J)}var C="Facebook Pixel Error",D=a.postMessage?a.postMessage.bind(a):function(){},E={};function F(J){switch(J.type){case"FBQ_NO_METHOD_NAME":return"You must provide an argument to fbq().";case"INVALID_PIXEL_ID":var K=J.pixelID;return"Invalid PixelID: "+K+".";case"DUPLICATE_PIXEL_ID":var L=J.pixelID;return"Duplicate Pixel ID: "+L+".";case"SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":var M=J.metadataValue,N=J.pixelID;return"Trying to set argument "+M+" for uninitialized Pixel ID "+N+".";case"CONFLICTING_VERSIONS":return"Multiple pixels with conflicting versions were detected on this page.";case"MULTIPLE_PIXELS":return"Multiple pixels were detected on this page.";case"UNSUPPORTED_METADATA_ARGUMENT":var O=J.metadata;return"Unsupported metadata argument: "+O+".";case"REQUIRED_PARAM_MISSING":var P=J.param,Q=J.eventName;return"Required parameter '"+P+"' is missing for event '"+Q+"'.";case"INVALID_PARAM":var R=J.param,S=J.eventName;return"Parameter '"+R+"' is invalid for event '"+S+"'.";case"NONSTANDARD_EVENT":var T=J.eventName;return"You are sending a non-standard event '"+T+"'. The preferred way to send these events is using trackCustom. See 'https://www.facebookmarketingdevelopers.com/pixels/up#sec-custom' for more information.";case"NEGATIVE_EVENT_PARAM":var U=J.param,V=J.eventName;return"Parameter '"+U+"' is negative for event '"+V+"'.";case"PII_INVALID_TYPE":var W=J.key_type,X=J.key_val;return"An invalid "+W+" was specified for '"+X+"'. This data will not be sent with any events for this Pixel.";default:H(new Error("INVALID_USER_ERROR - "+J.type+" - "+JSON.stringify(J)));return"Invalid User Error."}}function G(J,K){try{var L=Math.random();if(L<.01){var M=new t(null);M.append("p","pixel");M.append("v",a.fbq&&a.fbq.version?a.fbq.version:"unknown");M.append("e",J.toString());if(J instanceof Error){M.append("f",J.fileName);M.append("s",J.stackTrace||J.stack)}M.append("ue",K?"1":"0");s(M,"https://connect.facebook.net/log/error")}}catch(N){}}function j(J){var K=JSON.stringify(J);if(!Object.prototype.hasOwnProperty.call(E,K))E[K]=true;else return;var L=F(J);B(L);D({action:"FB_LOG",logType:C,logMessage:L},"*");G(new Error(L),true)}function H(J){G(J,false);if(u)B(J.toString())}var I={logError:H,logUserError:j,enableVerboseDebugLogging:v,disableAllLogging:A};e.exports=I})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsPlugin",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";function k(q){this.plugin=q;this.__fbEventsPlugin=1;return this}e.exports=k})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsProxyState",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var r=false;e.exports={getShouldProxy:function s(){return r},setShouldProxy:function s(t){r=t}}})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsUtils",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var r=g.getFbeventsModules("SignalsParamList"),s=g.getFbeventsModules("SignalsFBEventsProxyState"),t=Object.prototype.toString,u=!("addEventListener"in b);function v(N){return Array.isArray?Array.isArray(N):t.call(N)==="[object Array]"}function w(N){return typeof N==="number"||typeof N==="string"&&/^\d+$/.test(N)}function x(N,O,P){O=u?"on"+O:O;var Q=u?N.attachEvent:N.addEventListener,R=u?N.detachEvent:N.removeEventListener,S=function S(){if(R)R.call(N,O,S,false);P()};if(Q)Q.call(N,O,S,false)}var y=Object.prototype.hasOwnProperty,z=!{toString:null}.propertyIsEnumerable("toString"),A=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],B=A.length;function C(N){if(Object.keys)return Object.keys(N);if((typeof N==="undefined"?"undefined":h(N))!=="object"&&(typeof N!=="function"||N===null))throw new TypeError("Object.keys called on non-object");var O=[];for(var P in N)if(y.call(N,P))O.push(P);if(z)for(var Q=0;Q<B;Q++)if(y.call(N,A[Q]))O.push(A[Q]);return O}function D(N,O){if(Array.prototype.map)return Array.prototype.map.call(N,O);var P=void 0,Q=void 0;if(N==null)throw new TypeError(" array is null or not defined");var R=Object(N),S=R.length>>>0;if(typeof O!=="function")throw new TypeError(O+" is not a function");P=new Array(S);Q=0;while(Q<S){var T,U;if(Q in R){T=R[Q];U=O.call(null,T,Q,R);P[Q]=U}Q++}return P}function E(N){if(this==null)throw new TypeError("Array.prototype.some called on null or undefined");if(typeof N!=="function")throw new TypeError();var O=Object(this),P=O.length>>>0,Q=arguments.length>=2?arguments[1]:void 0;for(var R=0;R<P;R++)if(R in O&&N.call(Q,O[R],R,O))return true;return false}function F(N){return C(N).length===0}function G(N){if(this===void 0||this===null)throw new TypeError();var O=Object(this),P=O.length>>>0;if(typeof N!=="function")throw new TypeError();var Q=[],R=arguments.length>=2?arguments[1]:void 0;for(var S=0;S<P;S++)if(S in O){var T=O[S];if(N.call(R,T,S,O))Q.push(T)}return Q}function H(N){this.items=N==null?[]:N}H.prototype.has=function(N){return E.call(this.items,function(O){return O===N})};H.prototype.add=function(N){this.items.push(N)};function I(N,O){return O&&s.getShouldProxy()?O:N}function J(N,O,P){var Q=N.toQueryString(),R=I(O,P)+"?"+Q;if(R.length<2048){var S=new Image();if(P){var T=s.getShouldProxy();S.onerror=function(){s.setShouldProxy(true);if(!T)J(N,O,P)}}S.src=R;return true}return false}function K(N,O,P){var Q="fb"+Math.random().toString().replace(".",""),R=b.createElement("form");R.method="post";R.action=I(O,P);R.target=Q;R.acceptCharset="utf-8";R.style.display="none";var S=!!(a.attachEvent&&!a.addEventListener),T=S?'<iframe name="'+Q+'">':"iframe",U=b.createElement(T);U.src="about:blank";U.id=Q;U.name=Q;R.appendChild(U);x(U,"load",function(){N.each(function(Q,W){var X=b.createElement("input");X.name=Q;X.value=W;R.appendChild(X)});x(U,"load",function(){if(R.parentNode)R.parentNode.removeChild(R)});R.submit()});if(P){var V=s.getShouldProxy();U.onerror=function(){s.setShouldProxy(true);if(!V)K(N,O,P)}}b.body.appendChild(R);return true}function L(N,O,P){if(a.navigator&&a.navigator.sendBeacon){var Q=a.navigator.sendBeacon(I(O,P),N.toFormData());if(P&&!Q){var R=s.getShouldProxy();s.setShouldProxy(true);if(!R)L(N,O,P)}return true}return false}var M={isArray:v,isEmptyObject:F,isNumber:w,keys:C,listenOnce:x,map:D,sendGET:J,sendPOST:K,sendBeacon:L,FBSet:H,each:function N(O,P){D.call(this,O,P)},some:function N(O,P){return E.call(O,P)},filter:function N(O,P){return G.call(O,P)}};e.exports=M})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsParamList",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var r="deep",s="shallow";function t(w){if(typeof JSON==="undefined"||JSON===null||!JSON.stringify)return Object.prototype.toString.call(w);else return JSON.stringify(w)}function u(w){if(w===null||w===undefined)return true;var x=typeof w==="undefined"?"undefined":h(w);return x==="number"||x==="boolean"||x==="string"}function v(w){this._params=[];this._piiTranslator=w}v.prototype.addRange=function(w){var x=this;w.each(function(y,z){return x.append(y,z)})};v.prototype.containsKey=function(w){for(var x=0;x<this._params.length;x++)if(this._params[x].name===w)return true;return false};v.prototype.get=function(w){var x=w;for(var y=0;y<this._params.length;y++)if(this._params[y].name===x)return this._params[y].value;return null};v.prototype.getAllParams=function(){return this._params};v.prototype.append=function(w,x,y){this._append(encodeURIComponent(w),x,r,y);return this};v.prototype.appendHash=function(w,x){for(var y in w)if(Object.prototype.hasOwnProperty.call(w,y))this._append(y,w[y],r,x);return this};v.fromHash=function(w,x){return new v(x).appendHash(w)};v.prototype._append=function(w,x,y,z){if(u(x))this._appendPrimitive(w,x,z);else if(y===r)this._appendObject(w,x,z);else this._appendPrimitive(w,t(x),z)};v.prototype._translateValue=function(w,x,y){if(typeof x==="boolean")return x?"true":"false";if(!y)return""+x;if(!this._piiTranslator)throw new Error();return this._piiTranslator(w,""+x)};v.prototype._appendPrimitive=function(w,x,y){if(x!=null){var z=this._translateValue(w,x,y);if(z!=null)this._params.push({name:w,value:z})}};v.prototype._appendObject=function(w,x,y){var z=null;for(var A in x)if(Object.prototype.hasOwnProperty.call(x,A)){var B=w+"["+encodeURIComponent(A)+"]";try{this._append(B,x[A],s,y)}catch(C){if(z==null)z=C}}if(z!=null)throw z};v.prototype.each=function(w){for(var x=0;x<this._params.length;x++){var y=this._params[x],z=y.name,A=y.value;w(z,A)}};v.prototype.toQueryString=function(){var w=[];this.each(function(x,y){w.push(x+"="+encodeURIComponent(y))});return w.join("&")};v.prototype.toFormData=function(){var w=new FormData();this.each(function(x,y){w.append(x,y)});return w};e.exports=v})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("sha256_with_dependencies_new",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){var r=function P(Q){var R="",S,T;for(var U=0;U<Q.length;U++){S=Q.charCodeAt(U);T=U+1<Q.length?Q.charCodeAt(U+1):0;if(55296<=S&&S<=56319&&56320<=T&&T<=57343){S=65536+((S&1023)<<10)+(T&1023);U++}if(S<=127)R+=String.fromCharCode(S);else if(S<=2047)R+=String.fromCharCode(192|S>>>6&31,128|S&63);else if(S<=65535)R+=String.fromCharCode(224|S>>>12&15,128|S>>>6&63,128|S&63);else if(S<=2097151)R+=String.fromCharCode(240|S>>>18&7,128|S>>>12&63,128|S>>>6&63,128|S&63)}return R};function s(P,Q){return Q>>>P|Q<<32-P}function t(P,Q,R){return P&Q^~P&R}function u(P,Q,R){return P&Q^P&R^Q&R}function v(P){return s(2,P)^s(13,P)^s(22,P)}function w(P){return s(6,P)^s(11,P)^s(25,P)}function x(P){return s(7,P)^s(18,P)^P>>>3}function y(P){return s(17,P)^s(19,P)^P>>>10}function z(E,P){return E[P&15]+=y(E[P+14&15])+E[P+9&15]+x(E[P+1&15])}var A=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),B=new Array(8),C=new Array(2),D=new Array(64),E=new Array(16),F="0123456789abcdef";function G(P,Q){var R=(P&65535)+(Q&65535),S=(P>>16)+(Q>>16)+(R>>16);return S<<16|R&65535}function H(){C[0]=C[1]=0;B[0]=1779033703;B[1]=3144134277;B[2]=1013904242;B[3]=2773480762;B[4]=1359893119;B[5]=2600822924;B[6]=528734635;B[7]=1541459225}function I(){var P,Q,R,S,T,U,V,W,X,Y;P=B[0];Q=B[1];R=B[2];S=B[3];T=B[4];U=B[5];V=B[6];W=B[7];for(var Z=0;Z<16;Z++)E[Z]=D[(Z<<2)+3]|D[(Z<<2)+2]<<8|D[(Z<<2)+1]<<16|D[Z<<2]<<24;for(var $=0;$<64;$++){X=W+w(T)+t(T,U,V)+A[$];if($<16)X+=E[$];else X+=z(E,$);Y=v(P)+u(P,Q,R);W=V;V=U;U=T;T=G(S,X);S=R;R=Q;Q=P;P=G(X,Y)}B[0]+=P;B[1]+=Q;B[2]+=R;B[3]+=S;B[4]+=T;B[5]+=U;B[6]+=V;B[7]+=W}function J(P,Q){var R,S,T=0;S=C[0]>>3&63;var U=Q&63;if((C[0]+=Q<<3)<Q<<3)C[1]++;C[1]+=Q>>29;for(R=0;R+63<Q;R+=64){for(var V=S;V<64;V++)D[V]=P.charCodeAt(T++);I();S=0}for(var V=0;V<U;V++)D[V]=P.charCodeAt(T++)}function K(){var P=C[0]>>3&63;D[P++]=128;if(P<=56)for(var Q=P;Q<56;Q++)D[Q]=0;else{for(var Q=P;Q<64;Q++)D[Q]=0;I();for(var Q=0;Q<56;Q++)D[Q]=0}D[56]=C[1]>>>24&255;D[57]=C[1]>>>16&255;D[58]=C[1]>>>8&255;D[59]=C[1]&255;D[60]=C[0]>>>24&255;D[61]=C[0]>>>16&255;D[62]=C[0]>>>8&255;D[63]=C[0]&255;I()}function L(){var P=0,Q=new Array(32);for(var R=0;R<8;R++){Q[P++]=B[R]>>>24&255;Q[P++]=B[R]>>>16&255;Q[P++]=B[R]>>>8&255;Q[P++]=B[R]&255}return Q}function M(){var P=new String();for(var Q=0;Q<8;Q++)for(var R=28;R>=0;R-=4)P+=F.charAt(B[Q]>>>R&15);return P}function N(D){var P=0;for(var Q=0;Q<8;Q++)for(var R=28;R>=0;R-=4)D[P++]=F.charCodeAt(B[Q]>>>R&15)}function O(P,D){H();J(P,P.length);K();if(D)N(D);else return M()}function l(P,Q,D){if(P===null||P===undefined)return null;Q=typeof Q=="undefined"?true:Q;if(Q)P=r(P);return O(P,D)}e.exports=l})();return e.exports}(a,b,c,d)});"use strict";var i=g.getFbeventsModules("SignalsFBEventsLogging"),j=i.logUserError,k=g.getFbeventsModules("SignalsFBEventsPlugin"),l=g.getFbeventsModules("sha256_with_dependencies_new"),m=/^[A-Fa-f0-9]{64}$|^[A-Fa-f0-9]{32}$/,n=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i,o=/^\s+|\s+$/g,aa=Object.prototype.hasOwnProperty;function ba(r){return!!r&&n.test(r)}function ca(r){return r.replace(o,"")}function da(r){return r.toLowerCase()}function ea(r,s){if(r==="ud[em]"||r==="ud[email]"){var t=typeof s==="string"?ca(da(s)):"";if(t==null||t=="")return null;if(!ba(t)){var u=/ud\[(em|email)\]/.exec(r)[1];j({type:"PII_INVALID_TYPE",key_type:"email address",key_val:u});throw new Error()}return t}return s}function p(r,s){if(s!=null)if(m.test(s))return s.toLowerCase();else{s=ea(r,s);if(s!=null)return l(s)}return null}var q=new k(function(g){g.piiTranslator=p});q.piiTranslator=p;e.exports=q;if(g.registerPlugin)g.registerPlugin("fbevents.plugins.identity",e.exports);g.ensureModuleRegistered("fbevents.plugins.identity",function(){return e.exports})})()})(window,document,location,history);