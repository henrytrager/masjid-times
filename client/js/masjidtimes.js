/**
 * Creates a new masjidTimes Object
 * @param  {Object} config The configuration object
 * @param  {Object} my     Used for inheritance
 * @return {Object}        The masjid times object
 */
var newMasjidTimes = function (config, my) {

                                      /*--------------------*
                                            Properties
                                      /*--------------------*/
  var my = my || {};

  var ref = this;


  if(!jQuery){
    /*! jQuery v2.0.1 -sizzle,-wrap,-css,-event-alias,-effects,-offset,-dimensions,-deprecated | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license*/
    (function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,a=o.documentElement,s=e.jQuery,c=e.$,u={},l=[],p="2.0.1 -sizzle,-wrap,-css,-event-alias,-effects,-offset,-dimensions,-deprecated",f=l.concat,h=l.push,d=l.slice,g=l.indexOf,m=u.toString,y=u.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,w=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,j=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,C=/^-ms-/,k=/-([\da-z])/gi,S=function(e,t){return t.toUpperCase()},N=function(){o.removeEventListener("DOMContentLoaded",N,!1),e.removeEventListener("load",N,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:w.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),j.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,c=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[1]||{},s=2),"object"==typeof a||x.isFunction(a)||(a={}),c===s&&(a=this,--s);c>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(u&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},a[t]=x.extend(u,o,r)):r!==undefined&&(a[t]=r));return a},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=c),t&&e.jQuery===x&&(e.jQuery=s),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=j.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(C,"ms-").replace(k,S)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=D(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(D(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=D(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,a){var s=0,c=e.length,u=null==n;if("object"===x.type(n)){i=!0;for(s in n)x.access(e,t,s,n[s],!0,o,a)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(x(e),n)})),t))for(;c>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):c?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",N,!1),e.addEventListener("load",N,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});function D(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o);var A,E=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector,L=function(e,t){if(e===t)return A=!0,0;var n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return n?1&n?e===o||x.contains(o,e)?-1:t===o||x.contains(o,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1};x.extend({find:function(e,t,n,r){var i,a,s=0;if(n=n||[],t=t||o,!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(r)while(i=r[s++])x.find.matchesSelector(i,e)&&n.push(i);else x.merge(n,t.querySelectorAll(e));return n},unique:function(e){var t,n=[],r=0,i=0;if(A=!1,e.sort(L),A){while(t=e[r++])t===e[r]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i)return e.textContent;if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=x.text(t);return n},contains:function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!n.contains(r))},isXMLDoc:function(e){return"HTML"!==(e.ownerDocument||e).documentElement.nodeName},expr:{attrHandle:{},match:{bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),x.extend(x.find,{matches:function(e,t){return x.find(e,null,null,t)},matchesSelector:function(e,t){return E.call(e,t)},attr:function(e,t){return e.getAttribute(t)}});var H={};function O(e){var t=H[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?H[e]||O(e):x.extend({},e);var t,n,r,i,o,a,s=[],c=!e.once&&[],u=function(p){for(t=e.memory&&p,n=!0,a=i||0,i=0,o=s.length,r=!0;s&&o>a;a++)if(s[a].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,s&&(c?c.length&&u(c.shift()):t?s=[]:l.disable())},l={add:function(){if(s){var n=s.length;(function a(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&l.has(n)||s.push(n):n&&n.length&&"string"!==r&&a(n)})})(arguments),r?o=s.length:t&&(i=n,u(t))}return this},remove:function(){return s&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,s,n))>-1)s.splice(n,1),r&&(o>=n&&o--,a>=n&&a--)}),this},has:function(e){return e?x.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],o=0,this},disable:function(){return s=c=t=undefined,this},disabled:function(){return!s},lock:function(){return c=undefined,t||l.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!s||n&&!c||(r?c.push(t):u(t)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!n}};return l},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,c,u;if(r>1)for(s=Array(r),c=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,c,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),a=o.createElement("select"),s=a.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=s.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,a.disabled=!0,t.optDisabled=!s.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,a="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",s=o.getElementsByTagName("body")[0];s&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(s,null!=s.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=a,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),s.removeChild(n))}),t):t}({});var q,F,M=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}R.uid=1,R.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},R.prototype={key:function(e){if(!R.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=R.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(T)||[])),n=r.length;while(n--)delete a[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},q=new R,F=new R,x.extend({acceptData:R.accepts,hasData:function(e){return q.hasData(e)||F.hasData(e)},data:function(e,t,n){return q.access(e,t,n)},removeData:function(e,t){q.remove(e,t)},_data:function(e,t,n){return F.access(e,t,n)},_removeData:function(e,t){F.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,a=null;if(e===undefined){if(this.length&&(a=q.get(i),1===i.nodeType&&!F.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),W(i,r,a[r]));F.set(i,"hasDataAttrs",!0)}return a}return"object"==typeof e?this.each(function(){q.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=q.get(i,e),n!==undefined)return n;if(n=q.get(i,r),n!==undefined)return n;if(n=W(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=q.get(this,r);q.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&q.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){q.remove(this,e)})}});function W(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(P,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:M.test(n)?JSON.parse(n):n}catch(i){}q.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=F.get(e,t),n&&(!r||x.isArray(n)?r=F.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return F.get(e,n)||F.access(e,n,{empty:x.Callbacks("once memory").add(function(){F.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(a--)n=F.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var $,_,X=/[\t\r\n\f]/g,z=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,c="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(c)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,c=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(c)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),c=t,u=e.match(T)||[];while(o=u[a++])c=i?c:!s.hasClass(o),s[c?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&F.set(this,"__className__",this.className),this.className=this.className||e===!1?"":F.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace(z,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,c=0>i?s:o?i:0;for(;s>c;c++)if(n=r[c],!(!n.selected&&c!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===r?x.prop(e,t,n):(1===a&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?_:$)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),_={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,U=/^(?:mouse|contextmenu)|click/,V=/^(?:focusinfocus|focusoutblur)$/,J=/^([^.]*)(?:\.(.+)|)$/;function Q(){return!0}function Y(){return!1}function G(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var a,s,c,u,l,p,f,h,d,g,m,y=F.get(e);if(y){n.handler&&(a=n,n=a.handler,o=a.selector),n.guid||(n.guid=x.guid++),(u=y.events)||(u=y.events={}),(s=y.handle)||(s=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(s.elem,arguments)},s.elem=e),t=(t||"").match(T)||[""],l=t.length;while(l--)c=J.exec(t[l])||[],d=m=c[1],g=(c[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},a),(h=u[d])||(h=u[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,s)!==!1||e.addEventListener&&e.addEventListener(d,s,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,c,u,l,p,f,h,d,g,m=F.hasData(e)&&F.get(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=J.exec(t[u])||[],h=g=s[1],d=(s[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=c[h]||[],s=s[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=f.length;while(o--)l=f[o],!i&&g!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(f.splice(o,1),l.selector&&f.delegateCount--,p.remove&&p.remove.call(e,l));a&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete c[h])}else for(h in c)x.event.remove(e,h+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,F.remove(e,"events"))}},trigger:function(t,n,r,i){var a,s,c,u,l,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(s=c=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!V.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),l=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(u=f.delegateType||d,V.test(u+d)||(s=s.parentNode);s;s=s.parentNode)h.push(s),c=s;c===(r.ownerDocument||o)&&h.push(c.defaultView||c.parentWindow||e)}a=0;while((s=h[a++])&&!t.isPropagationStopped())t.type=a>1?u:f.bindType||d,p=(F.get(s,"events")||{})[t.type]&&F.get(s,"handle"),p&&p.apply(s,n),p=l&&s[l],p&&x.acceptData(s)&&p.apply&&p.apply(s,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||l&&x.isFunction(r[d])&&!x.isWindow(r)&&(c=r[l],c&&(r[l]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,c&&(r[l]=c)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,a=[],s=d.call(arguments),c=(F.get(this,"events")||{})[e.type]||[],u=x.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){a=x.event.handlers.call(this,e,c),t=0;while((i=a[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,c=e.target;if(s&&c.nodeType&&(!e.button||"click"!==e.type))for(;c!==this;c=c.parentNode||this)if(c.disabled!==!0||"click"!==e.type){for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(c)>=0:x.find(i,this,null,[c]).length),r[i]&&r.push(o);r.length&&a.push({elem:c,handlers:r})}return t.length>s&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,a=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||a===undefined||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=U.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,a):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==G()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===G()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?Q:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Q,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Q,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Q,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(a in e)this.on(a,t,n,e[a],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var K=/^.[^:#\[\.,]*$/,Z=/^(?:parents|prev(?:Until|All))/,et=x.expr.match.needsContext,tt={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(rt(this,e||[],!0))},filter:function(e){return this.pushStack(rt(this,e||[],!1))},is:function(e){return!!rt(this,"string"==typeof e&&et.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=et.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function nt(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null
    },parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return nt(e,"nextSibling")},prev:function(e){return nt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(tt[e]||x.unique(i),Z.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function rt(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(K.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var it=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ot=/<([\w:]+)/,at=/<|&#?\w+;/,st=/<(?:script|style|link)/i,ct=/^(?:checkbox|radio)$/i,ut=/checked\s*(?:[^=]|=\s*.checked.)/i,lt=/^$|\/(?:java|ecma)script/i,pt=/^true\/(.*)/,ft=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ht={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ht.optgroup=ht.option,ht.tbody=ht.tfoot=ht.colgroup=ht.caption=ht.thead,ht.th=ht.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=dt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=dt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(xt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&yt(xt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(xt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!st.test(e)&&!ht[(ot.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(it,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(xt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,a,s,c,u=0,l=this.length,p=this,h=l-1,d=e[0],g=x.isFunction(d);if(g||!(1>=l||"string"!=typeof d||x.support.checkClone)&&ut.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(l&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(xt(r,"script"),gt),a=o.length;l>u;u++)s=r,u!==h&&(s=x.clone(s,!0,!0),a&&x.merge(o,xt(s,"script"))),t.call(this[u],s,u);if(a)for(c=o[o.length-1].ownerDocument,x.map(o,mt),u=0;a>u;u++)s=o[u],lt.test(s.type||"")&&!F.access(s,"globalEval")&&x.contains(c,s)&&(s.src?x._evalUrl(s.src):x.globalEval(s.textContent.replace(ft,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,a=0;for(;o>=a;a++)n=a===o?this:this.clone(!0),x(i[a])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),c=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(a=xt(s),o=xt(e),r=0,i=o.length;i>r;r++)bt(o[r],a[r]);if(t)if(n)for(o=o||xt(e),a=a||xt(s),r=0,i=o.length;i>r;r++)vt(o[r],a[r]);else vt(e,s);return a=xt(s,"script"),a.length>0&&yt(a,!c&&xt(e,"script")),s},buildFragment:function(e,t,n,r){var i,o,a,s,c,u,l=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>l;l++)if(i=e[l],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(at.test(i)){o=o||f.appendChild(t.createElement("div")),a=(ot.exec(i)||["",""])[1].toLowerCase(),s=ht[a]||ht._default,o.innerHTML=s[1]+i.replace(it,"<$1></$2>")+s[2],u=s[0];while(u--)o=o.firstChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",l=0;while(i=h[l++])if((!r||-1===x.inArray(i,r))&&(c=x.contains(i.ownerDocument,i),o=xt(f.appendChild(i),"script"),c&&yt(o),n)){u=0;while(i=o[u++])lt.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,a,s=x.event.special,c=0;for(;(n=e[c])!==undefined;c++){if(R.accepts(n)&&(o=n[F.expando],o&&(t=F.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(a=0;(i=r[a])!==undefined;a++)s[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);F.cache[o]&&delete F.cache[o]}delete q.cache[n[q.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function dt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function gt(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function mt(e){var t=pt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function yt(e,t){var n=e.length,r=0;for(;n>r;r++)F.set(e[r],"globalEval",!t||F.get(t[r],"globalEval"))}function vt(e,t){var n,r,i,o,a,s,c,u;if(1===t.nodeType){if(F.hasData(e)&&(o=F.access(e),a=F.set(t,o),u=o.events)){delete a.handle,a.events={};for(i in u)for(n=0,r=u[i].length;r>n;n++)x.event.add(t,i,u[i][n])}q.hasData(e)&&(s=q.access(e),c=x.extend({},s),q.set(t,c))}}function xt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function bt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ct.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}var Tt=/%20/g,wt=/\[\]$/,jt=/\r?\n/g,Ct=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&kt.test(this.nodeName)&&!Ct.test(e)&&(this.checked||!ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(jt,"\r\n")}}):{name:t.name,value:n.replace(jt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)St(n,e[n],t,i);return r.join("&").replace(Tt,"+")};function St(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||wt.test(e)?r(e,i):St(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)St(e+"["+i+"]",t[i],n,r)}var Nt,Dt,At=x.now(),Et=/\?/,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ft=/^(?:GET|HEAD)$/,Mt=/^\/\//,Pt=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Rt=x.fn.load,Wt={},$t={},_t="*/".concat("*");try{Dt=i.href}catch(Xt){Dt=o.createElement("a"),Dt.href="",Dt=Dt.href}Nt=Pt.exec(Dt.toLowerCase())||[];function zt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Bt(e,t,n,r){var i={},o=e===$t;function a(s){var c;return i[s]=!0,x.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||o||i[u]?o?!(c=u):undefined:(t.dataTypes.unshift(u),a(u),!1)}),c}return a(t.dataTypes[0])||!i["*"]&&a("*")}function It(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&Rt)return Rt.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=e.slice(s),e=e.slice(0,s)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),a.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dt,type:"GET",isLocal:qt.test(Nt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?It(It(e,x.ajaxSettings),t):It(x.ajaxSettings,e)},ajaxPrefilter:zt(Wt),ajaxTransport:zt($t),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,a,s,c,u,l=x.ajaxSetup({},t),p=l.context||l,f=l.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=l.statusCode||{},m={},y={},v=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Ot.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(l.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),C(0,t),this}};if(h.promise(w).complete=d.add,w.success=w.done,w.error=w.fail,l.url=((e||l.url||Dt)+"").replace(Lt,"").replace(Mt,Nt[1]+"//"),l.type=t.method||t.type||l.method||l.type,l.dataTypes=x.trim(l.dataType||"*").toLowerCase().match(T)||[""],null==l.crossDomain&&(s=Pt.exec(l.url.toLowerCase()),l.crossDomain=!(!s||s[1]===Nt[1]&&s[2]===Nt[2]&&(s[3]||("http:"===s[1]?"80":"443"))===(Nt[3]||("http:"===Nt[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=x.param(l.data,l.traditional)),Bt(Wt,l,t,w),2===v)return w;c=l.global,c&&0===x.active++&&x.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Ft.test(l.type),r=l.url,l.hasContent||(l.data&&(r=l.url+=(Et.test(r)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ht.test(r)?r.replace(Ht,"$1_="+At++):r+(Et.test(r)?"&":"?")+"_="+At++)),l.ifModified&&(x.lastModified[r]&&w.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&w.setRequestHeader("If-None-Match",x.etag[r])),(l.data&&l.hasContent&&l.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+_t+"; q=0.01":""):l.accepts["*"]);for(u in l.headers)w.setRequestHeader(u,l.headers[u]);if(l.beforeSend&&(l.beforeSend.call(p,w,l)===!1||2===v))return w.abort();b="abort";for(u in{success:1,error:1,complete:1})w[u](l[u]);if(n=Bt($t,l,t,w)){w.readyState=1,c&&f.trigger("ajaxSend",[w,l]),l.async&&l.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},l.timeout));try{v=1,n.send(m,C)}catch(j){if(!(2>v))throw j;C(-1,j)}}else C(-1,"No Transport");function C(e,t,o,s){var u,m,y,b,T,j=t;2!==v&&(v=2,a&&clearTimeout(a),n=undefined,i=s||"",w.readyState=e>0?4:0,u=e>=200&&300>e||304===e,o&&(b=Ut(l,w,o)),b=Vt(l,b,w,u),u?(l.ifModified&&(T=w.getResponseHeader("Last-Modified"),T&&(x.lastModified[r]=T),T=w.getResponseHeader("etag"),T&&(x.etag[r]=T)),204===e||"HEAD"===l.type?j="nocontent":304===e?j="notmodified":(j=b.state,m=b.data,y=b.error,u=!y)):(y=j,(e||!j)&&(j="error",0>e&&(e=0))),w.status=e,w.statusText=(t||j)+"",u?h.resolveWith(p,[m,j,w]):h.rejectWith(p,[w,j,y]),w.statusCode(g),g=undefined,c&&f.trigger(u?"ajaxSuccess":"ajaxError",[w,l,u?m:y]),d.fireWith(p,[w,j]),c&&(f.trigger("ajaxComplete",[w,l]),--x.active||x.event.trigger("ajaxStop")))}return w},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function Ut(e,t,n){var r,i,o,a,s=e.contents,c=e.dataTypes;while("*"===c[0])c.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){c.unshift(i);break}if(c[0]in n)o=c[0];else{for(i in n){if(!c[0]||e.converters[i+" "+c[0]]){o=i;break}a||(a=i)}o=o||a}return o?(o!==c[0]&&c.unshift(o),n[o]):undefined}function Vt(e,t,n,r){var i,o,a,s,c,u={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=l.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=l.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(a=u[c+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[c+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],l.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Jt=[],Qt=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Jt.pop()||x.expando+"_"+At++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(Qt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):t.jsonp!==!1&&(t.url+=(Et.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||x.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Jt.push(i)),a&&x.isFunction(o)&&o(a[0]),a=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Yt=x.ajaxSettings.xhr(),Gt={0:200,1223:204},Kt=0,Zt={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in Zt)Zt[e]();Zt=undefined}),x.support.cors=!!Yt&&"withCredentials"in Yt,x.support.ajax=Yt=!!Yt,x.ajaxTransport(function(e){var t;return x.support.cors||Yt&&!e.crossDomain?{send:function(n,r){var i,o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)a[i]=e.xhrFields[i];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)a.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete Zt[o],t=a.onload=a.onerror=null,"abort"===e?a.abort():"error"===e?r(a.status||404,a.statusText):r(Gt[a.status]||a.status,a.statusText,"string"==typeof a.responseText?{text:a.responseText}:undefined,a.getAllResponseHeaders()))}},a.onload=t(),a.onerror=t("error"),t=Zt[o=Kt++]=t("abort"),a.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined}),"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
  }

  // Callbacks
  var Callbacks = (jQuery && jQuery.Callbacks) ?jQuery.Callbacks:function(e){e=typeof e==="string"?optionsCache[e]||createOptions(e):jQuery.extend({},e);var t,n,r,i,s,o,u=[],a=!e.once&&[],f=function(c){t=e.memory&&c;n=true;o=i||0;i=0;s=u.length;r=true;for(;u&&o<s;o++){if(u[o].apply(c[0],c[1])===false&&e.stopOnFalse){t=false;break}}r=false;if(u){if(a){if(a.length){f(a.shift())}}else if(t){u=[]}else{l.disable()}}},l={add:function(){if(u){var n=u.length;(function o(t){jQuery.each(t,function(t,n){var r=jQuery.type(n);if(r==="function"){if(!e.unique||!l.has(n)){u.push(n)}}else if(n&&n.length&&r!=="string"){o(n)}})})(arguments);if(r){s=u.length}else if(t){i=n;f(t)}}return this},remove:function(){if(u){jQuery.each(arguments,function(e,t){var n;while((n=jQuery.inArray(t,u,n))>-1){u.splice(n,1);if(r){if(n<=s){s--}if(n<=o){o--}}}})}return this},has:function(e){return e?jQuery.inArray(e,u)>-1:!!(u&&u.length)},empty:function(){u=[];s=0;return this},disable:function(){u=a=t=undefined;return this},disabled:function(){return!u},lock:function(){a=undefined;if(!t){l.disable()}return this},locked:function(){return!a},fireWith:function(e,t){t=t||[];t=[e,t.slice?t.slice():t];if(u&&(!n||a)){if(r){a.push(t)}else{f(t)}}return this},fire:function(){l.fireWith(this,arguments);return this},fired:function(){return!!n}};return l}

  // Extend
  var extend = (jQuery && jQuery.extend)?jQuery.extend:function(){var e,t,n,r,i,s,o=arguments[0]||{},u=1,a=arguments.length,f=false;if(typeof o==="boolean"){f=o;o=arguments[1]||{};u=2}if(typeof o!=="object"&&!jQuery.isFunction(o)){o={}}if(a===u){o=this;--u}for(;u<a;u++){if((e=arguments[u])!=null){for(t in e){n=o[t];r=e[t];if(o===r){continue}if(f&&r&&(jQuery.isPlainObject(r)||(i=jQuery.isArray(r)))){if(i){i=false;s=n&&jQuery.isArray(n)?n:[]}else{s=n&&jQuery.isPlainObject(n)?n:{}}o[t]=jQuery.extend(f,s,r)}else if(r!==undefined){o[t]=r}}}}return o};

  // Each
  var each = (jQuery && jQuery.each)?jQuery.each:function(e,t,n){var r,i=0,s=e.length,o=isArraylike(e);if(n){if(o){for(;i<s;i++){r=t.apply(e[i],n);if(r===false){break}}}else{for(i in e){r=t.apply(e[i],n);if(r===false){break}}}}else{if(o){for(;i<s;i++){r=t.call(e[i],i,e[i]);if(r===false){break}}}else{for(i in e){r=t.call(e[i],i,e[i]);if(r===false){break}}}}return e};


  // If there is a storage methods, check and augment, otherwise use our own
  if(config.storage != undefined && config.storage.get != undefined && config.storage.set != undefined && config.storage.remove != undefined){
    // Use config's storage methods
    if(config.storage.setKey == undefined){
      // Augment it so that we can setKey
      config.storage.setKey = function(key, value, cb){
        var o = {};
        o[key] = value;
        config.storage.set(o, cb);
      };
    }
  } else {
    // JSON
    var JSON;if(!JSON){JSON={}}(function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i}if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1){if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;if(typeof JSON.stringify!=="function"){JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();

    // jStorage
    if(!(jQuery&&jQuery.jStorage))(function(){function v(){var e=false;if("localStorage"in window){try{window.localStorage.setItem("_tmptest","tmpval");e=true;window.localStorage.removeItem("_tmptest")}catch(t){}}if(e){try{if(window.localStorage){i=window.localStorage;u="localStorage";l=i.jStorage_update}}catch(n){}}else if("globalStorage"in window){try{if(window.globalStorage){i=window.globalStorage[window.location.hostname];u="globalStorage";l=i.jStorage_update}}catch(r){}}else{s=document.createElement("link");if(s.addBehavior){s.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(s);try{s.load("jStorage")}catch(o){s.setAttribute("jStorage","{}");s.save("jStorage");s.load("jStorage")}var a="{}";try{a=s.getAttribute("jStorage")}catch(f){}try{l=s.getAttribute("jStorage_update")}catch(c){}i.jStorage=a;u="userDataBehavior"}else{s=null;return}}S();N();g();C();if("addEventListener"in window){window.addEventListener("pageshow",function(e){if(e.persisted){y()}},false)}}function m(){var e="{}";if(u=="userDataBehavior"){s.load("jStorage");try{e=s.getAttribute("jStorage")}catch(t){}try{l=s.getAttribute("jStorage_update")}catch(n){}i.jStorage=e}S();N();C()}function g(){if(u=="localStorage"||u=="globalStorage"){if("addEventListener"in window){window.addEventListener("storage",y,false)}else{document.attachEvent("onstorage",y)}}else if(u=="userDataBehavior"){setInterval(y,1e3)}}function y(){var e;clearTimeout(f);f=setTimeout(function(){if(u=="localStorage"||u=="globalStorage"){e=i.jStorage_update}else if(u=="userDataBehavior"){s.load("jStorage");try{e=s.getAttribute("jStorage_update")}catch(t){}}if(e&&e!=l){l=e;b()}},25)}function b(){var e=n.parse(n.stringify(r.__jstorage_meta.CRC32)),t;m();t=n.parse(n.stringify(r.__jstorage_meta.CRC32));var i,s=[],o=[];for(i in e){if(e.hasOwnProperty(i)){if(!t[i]){o.push(i);continue}if(e[i]!=t[i]&&String(e[i]).substr(0,2)=="2."){s.push(i)}}}for(i in t){if(t.hasOwnProperty(i)){if(!e[i]){s.push(i)}}}w(s,"updated");w(o,"deleted")}function w(e,t){e=[].concat(e||[]);if(t=="flushed"){e=[];for(var n in a){if(a.hasOwnProperty(n)){e.push(n)}}t="deleted"}for(var r=0,i=e.length;r<i;r++){if(a[e[r]]){for(var s=0,o=a[e[r]].length;s<o;s++){a[e[r]][s](e[r],t)}}if(a["*"]){for(var s=0,o=a["*"].length;s<o;s++){a["*"][s](e[r],t)}}}}function E(){var e=(+(new Date)).toString();if(u=="localStorage"||u=="globalStorage"){i.jStorage_update=e}else if(u=="userDataBehavior"){s.setAttribute("jStorage_update",e);s.save("jStorage")}y()}function S(){if(i.jStorage){try{r=n.parse(String(i.jStorage))}catch(e){i.jStorage="{}"}}else{i.jStorage="{}"}o=i.jStorage?String(i.jStorage).length:0;if(!r.__jstorage_meta){r.__jstorage_meta={}}if(!r.__jstorage_meta.CRC32){r.__jstorage_meta.CRC32={}}}function x(){L();try{i.jStorage=n.stringify(r);if(s){s.setAttribute("jStorage",i.jStorage);s.save("jStorage")}o=i.jStorage?String(i.jStorage).length:0}catch(e){}}function T(e){if(!e||typeof e!="string"&&typeof e!="number"){throw new TypeError("Key name must be string or numeric")}if(e=="__jstorage_meta"){throw new TypeError("Reserved key name")}return true}function N(){var e,t,n,i,s=Infinity,o=false,u=[];clearTimeout(p);if(!r.__jstorage_meta||typeof r.__jstorage_meta.TTL!="object"){return}e=+(new Date);n=r.__jstorage_meta.TTL;i=r.__jstorage_meta.CRC32;for(t in n){if(n.hasOwnProperty(t)){if(n[t]<=e){delete n[t];delete i[t];delete r[t];o=true;u.push(t)}else if(n[t]<s){s=n[t]}}}if(s!=Infinity){p=setTimeout(N,s-e)}if(o){x();E();w(u,"deleted")}}function C(){var e,t;if(!r.__jstorage_meta.PubSub){return}var n,i=h;for(e=t=r.__jstorage_meta.PubSub.length-1;e>=0;e--){n=r.__jstorage_meta.PubSub[e];if(n[0]>h){i=n[0];k(n[1],n[2])}}h=i}function k(e,t){if(c[e]){for(var r=0,i=c[e].length;r<i;r++){c[e][r](e,n.parse(n.stringify(t)))}}}function L(){if(!r.__jstorage_meta.PubSub){return}var e=+(new Date)-2e3;for(var t=0,n=r.__jstorage_meta.PubSub.length;t<n;t++){if(r.__jstorage_meta.PubSub[t][0]<=e){r.__jstorage_meta.PubSub.splice(t,r.__jstorage_meta.PubSub.length-t);break}}if(!r.__jstorage_meta.PubSub.length){delete r.__jstorage_meta.PubSub}}function A(e,t){if(!r.__jstorage_meta){r.__jstorage_meta={}}if(!r.__jstorage_meta.PubSub){r.__jstorage_meta.PubSub=[]}r.__jstorage_meta.PubSub.unshift([+(new Date),e,t]);x();E()}function O(e,t){var n=e.length,r=t^n,i=0,s;while(n>=4){s=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24;s=(s&65535)*1540483477+(((s>>>16)*1540483477&65535)<<16);s^=s>>>24;s=(s&65535)*1540483477+(((s>>>16)*1540483477&65535)<<16);r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^s;n-=4;++i}switch(n){case 3:r^=(e.charCodeAt(i+2)&255)<<16;case 2:r^=(e.charCodeAt(i+1)&255)<<8;case 1:r^=e.charCodeAt(i)&255;r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}r^=r>>>13;r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16);r^=r>>>15;return r>>>0}var e="0.4.3",t=window.jQuery||window.$||(window.$={}),n={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(e){return String(e).evalJSON()}||t.parseJSON||t.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||t.toJSON};if(!n.parse||!n.stringify){throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page")}var r={__jstorage_meta:{CRC32:{}}},i={jStorage:"{}"},s=null,o=0,u=false,a={},f=false,l=0,c={},h=+(new Date),p,d={isXML:function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":false},encode:function(e){if(!this.isXML(e)){return false}try{return(new XMLSerializer).serializeToString(e)}catch(t){try{return e.xml}catch(n){}}return false},decode:function(e){var t="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(e){var t=new ActiveXObject("Microsoft.XMLDOM");t.async="false";t.loadXML(e);return t},n;if(!t){return false}n=t.call("DOMParser"in window&&new DOMParser||window,e,"text/xml");return this.isXML(n)?n:false}};t.jStorage={version:e,set:function(e,t,i){T(e);i=i||{};if(typeof t=="undefined"){this.deleteKey(e);return t}if(d.isXML(t)){t={_is_xml:true,xml:d.encode(t)}}else if(typeof t=="function"){return undefined}else if(t&&typeof t=="object"){t=n.parse(n.stringify(t))}r[e]=t;r.__jstorage_meta.CRC32[e]="2."+O(n.stringify(t),2538058380);this.setTTL(e,i.TTL||0);w(e,"updated");return t},get:function(e,t){T(e);if(e in r){if(r[e]&&typeof r[e]=="object"&&r[e]._is_xml){return d.decode(r[e].xml)}else{return r[e]}}return typeof t=="undefined"?null:t},deleteKey:function(e){T(e);if(e in r){delete r[e];if(typeof r.__jstorage_meta.TTL=="object"&&e in r.__jstorage_meta.TTL){delete r.__jstorage_meta.TTL[e]}delete r.__jstorage_meta.CRC32[e];x();E();w(e,"deleted");return true}return false},setTTL:function(e,t){var n=+(new Date);T(e);t=Number(t)||0;if(e in r){if(!r.__jstorage_meta.TTL){r.__jstorage_meta.TTL={}}if(t>0){r.__jstorage_meta.TTL[e]=n+t}else{delete r.__jstorage_meta.TTL[e]}x();N();E();return true}return false},getTTL:function(e){var t=+(new Date),n;T(e);if(e in r&&r.__jstorage_meta.TTL&&r.__jstorage_meta.TTL[e]){n=r.__jstorage_meta.TTL[e]-t;return n||0}return 0},flush:function(){r={__jstorage_meta:{CRC32:{}}};x();E();w(null,"flushed");return true},storageObj:function(){function e(){}e.prototype=r;return new e},index:function(){var e=[],t;for(t in r){if(r.hasOwnProperty(t)&&t!="__jstorage_meta"){e.push(t)}}return e},storageSize:function(){return o},currentBackend:function(){return u},storageAvailable:function(){return!!u},listenKeyChange:function(e,t){T(e);if(!a[e]){a[e]=[]}a[e].push(t)},stopListening:function(e,t){T(e);if(!a[e]){return}if(!t){delete a[e];return}for(var n=a[e].length-1;n>=0;n--){if(a[e][n]==t){a[e].splice(n,1)}}},subscribe:function(e,t){e=(e||"").toString();if(!e){throw new TypeError("Channel not defined")}if(!c[e]){c[e]=[]}c[e].push(t)},publish:function(e,t){e=(e||"").toString();if(!e){throw new TypeError("Channel not defined")}A(e,t)},reInit:function(){m()}};v()})();

    // jStorage/chrome.storage API wrapper
    var storage = {
      /**
       * Get an item from storage
       * @param key
       * @param cb
       */
      get: function(key, cb){
        cb($.jStorage.get(key));
      },

      /**
       * Augment the storage with an object
       * @param object
       * @param [cb]
       */
      set: function(object, cb){
        for (var prop in object) {
          if( object.hasOwnProperty( prop ) ) {
            $.jStorage.set(prop, object[prop]);
          }
        }
        if(typeof cb == 'function') cb();
      },

      /**
       * Add an item using a key to the storage
       * @param key
       * @param value
       * @param [cb]
       */
      setKey: function(key, value, cb){
        var o = {};
        o[key] = value;
        this.set(o, cb);
      },

      /**
       * Remove an item with a given key from storage
       * @param key
       * @param [cb]
       */
      remove: function(key, cb){
        $.jStorage.deleteKey(key);
        if(typeof cb == 'function') cb();
      }
    };
  }


  /**
   * Everything everyone outside this function will see.
   * @type {Object}
   */
  var that;


  /**
   * A list of all prayers
   * @type {Array}
   */
  var prayers = ['fajr', 'shuruq', 'duhr', 'asr', 'maghrib', 'isha'];

  /**
   * A namespace which has all the prayer names.
   * Can be used as an enum
   * @type {Object}
   */
  var PRAYER = {
    fajr: 0,
    shuruq: 1,
    duhr: 2,
    asr: 3,
    maghrib: 4,
    isha: 5
  };

  /**
   * Gets a date object with some augmented properties.
   * @param [options]   Will be passed into the Date constructor. If this is a date object, then that object will be used.
   * @returns {Date}  The date object with some augmented properties e.g. date.day
   */
  var getDate = function(options){
    var date;
    if(options == undefined){
      if(times.tick == undefined){
        date = new Date();
      } else {
        date = times.tick;
      }
    } else if(options == 'forced'){
      date = new Date();
    } else if($.type(options) == 'date'){
      date = new Date(options.getTime());
    } else {
      date = new Date(options);
    }
    date.day = date.getDate();
    date.month = date.getMonth()+1;
    return date;
  };


  /**
   * This object is basically a namespace for all the localStorage objects
   * used by MasjidTimes.
   * @type {Object}
   * @property {string} prayerTimes    A year of prayer times
   * @property {string} mosque         The mosque we are using
   */
  var l = {
    prayer: 'prayerTimes',
    mosque: 'nearestMosque',
    coords: 'coords'
  };

  /**
   * The mosque we are using
   * @type {Object}
   * @property {Object} mosque The mosque we are using
   * @property {Object} times  The prayer times we are using
   */
  var using = {};

  /**
   * Whether or not masjidTimes has been initialised (i.e. whether or not 'ready' has been fired)
   * @type {boolean}
   */
  var initialised = false;

  /**
   * If we're waiting for a mosque to be selected
   * @type {boolean}
   */
  var triggeredMosqueSelection = false;



  /**
   * These define the masjid times events.
   * Each item in this object is a jQuery Callbacks object, which is basically
   * a list of functions that get executed when the event gets fired.
   *
   * See http://api.jquery.com/category/callbacks-object/ for details.
   * @type {Object}
   */
  var events = {
    ready: Callbacks(),       // Got prayer data and mosque data
    prayer: Callbacks(),      // A prayer has passed
    fajr: Callbacks(),        // Fajr has passed
    shuruq: Callbacks(),      // Shuruq has passed
    duhr: Callbacks(),        // Duhr has passed
    asr: Callbacks(),         // Asr has passed
    asr2: Callbacks(),        // Asr (hanafi) has passed
    maghrib: Callbacks(),     // Maghrib has passed
    isha: Callbacks(),        // Isha has passed
    mosques: Callbacks(),     // Got nearest mosques
    mosque: Callbacks(),      // Mosque has been chosen
    prayertimes: Callbacks(), // Got prayer times
    debug: Callbacks(),       // Event that is used for debugging what events got fired etc.
    tick: Callbacks(),        // Time tick
    day: Callbacks()          // We've just reached the end of the day.
  };



                                                /*--------------------*
                                                       Methods
                                                /*--------------------*/
  /**
   * Provides asynchronous server request functionalities specific to the prayertimes api.
   * @type {Object}
   */
  var ajax = {};

  /**
   * Performs a get request on the server.
   * @param {string}   url      The url to call (e.g. 'mosque/')
   * @param {Object}   data     The data to send to the server
   * @param {function} callback The function to call on success
   * @param {function} [errorCallback] Called when there was an error. Optional
   */
  ajax.get = function (url, data, callback, errorCallback) {
    var req = prepareData(data);
    var reqUrl = config.url + url;
    $.ajax({url: reqUrl, data: req, type: 'GET', cache: true, dataType: 'jsonp'}).done(function (responseData) {
      responseData = toJSON(responseData);
      callback(extend(responseData, {_request: req}));
    }).error(function (errorData) {
          if (errorCallback == undefined) {
            console.error({url: reqUrl, request:req, response: "AJAX Error: "+errorData.statusText+" ("+errorData.status+") : "+errorData.responseText});
          } else {
            errorCallback(errorData);
          }
        });
  };

  /**
   * Requests array of nearest mosques
   * @param {{lat:Number, lng:Number, [range]:Number}} options The options of the function.
   * @param {Function} callback Function called once request completed
   */
  ajax.nearestMosques = function (options, callback) {
    ajax.get('mosque/', options, callback);
  };

  /**
   * Requests the mosque with a given mosque id
   * @param {Number}   id        The id of the mosque
   * @param {Function} callback  Function called once request completed
   */
  ajax.mosqueById = function (id, callback) {
    ajax.get('mosque/' + id, {}, callback);
  };

  /**
   * Requests the prayer times. Result depends on options given.
   * If only the id is provided, gets prayer times for the whole year. Otherwise for that month/day/prayer.
   * @param {{id:Number, [month]:Number, [day]:Number, [prayer]:string}} options
   * @param {Function} callback
   */
  ajax.prayerTimesById = function (options, callback) {
    ajax.get('table/', options, callback);
  };


  /**
   * Takes care of timing events etc.
   * @type {{start, stop, id}}
   */
  var ticker = {};
  ticker.start = function(){
    ticker.stop();
    ticker.id = setInterval(function(){
      fire('tick', times.getNext());
    }, 1000);
  };

  ticker.stop = function(){
    clearInterval(ticker.id);
  };

  /**
   * Clears all local storage stored by masjidTimes
   */
  var clearLocalStorage = function () {
    for (var k in l) {
      if (l.hasOwnProperty(k)) storage.remove(l[k]);
    }
  };


  /**
   * Takes in some string|json and turns it into json if it isn't already.
   * @param  {string|Object}  data
   * @return {Object}         The data in JSON form
   */
  var toJSON = function (data) {
    return (typeof data) == 'string' ? JSON.parse(data) : data;
  };

  /**
   * Augments the data with metadata.
   * The metadata right now is just debug info, but it could also be
   * other stuff like authentication if we want to.
   * @param  {Object} data The data we are going to send
   * @return {Object}      The date we are going to send, augmented with metadata.
   */
  var prepareData = function (data) {
    data.debug = config.debug ? '1' : undefined;
    data.next = config.debug ? 'isha' : undefined;
    return data;
  };



                                              /*--------------------*
                                                 App logic / public
                                              /*--------------------*/

  /**
   * Adds a callback to an event
   * @param  {string}   event       The event name
   * @param  {Function} newCallback The callback to add
   * @return {Object}               The MasjidTimes object.
   */
  var on = function (event, newCallback) {
    //Get the callbacks object
    var callback = events[event];
    if (callback) {
      // Add callback to the queue
      if (typeof callback.fire == 'function') {
        callback.add(newCallback);
      }
    }
    return that;
  };


  var fire = function (event, args) {
    var callback = events[event];
    if (callback) {
      callback.fire(args);
      events.debug.fire({event: event, args: args});
    }
    return that;
  };


  on('debug', function(data){
    if(data.event != 'tick') console.debug({Event : data.event, args: data.args});
  });

  on('mosque', function(mosque){
    // Someone has chosen a mosque.
    using.mosque = mosque;

    storage.setKey(l.mosque, mosque, function(){
      if(!initialised){
        checkInit();
      }
    });
  });

  on('prayertimes', function(prayerTimes){
    // We have got the prayer times.
    using.prayer = prayerTimes;
    storage.setKey(l.prayer, prayerTimes, function(){
      if(!initialised){
        checkInit();
      }
    });
  });

  on('ready', function(){
    initialised = true;
    ticker.start();
    // Start ticker
  });

  on('tick', function(nextTimes){
    var newTick = getDate('forced');
    if(times.tick != undefined && (times.tick.day != newTick.day || times.tick.month != newTick.month)){
      // We're on a different day than before.
      fire('day', times.getDay(newTick));
    }

    if(nextTimes.remaining <= 1000){
      fire('prayer', nextTimes);
    }

    // From now on, we can treat tick as the current date/time.
    times.tick = newTick;
  });

  on('prayer', function(nextTimes){
    fire(nextTimes.prayer, nextTimes);
  });


  /**
   * Same as on('ready')
   * @param {Function} callback
   */
  var ready = function(callback){
    on('ready', callback);
  };




  /**
   * Tells masjidTimes to use the mosque provided
   * @param {Object} mosque  A mosque object
   */
  var useMosque = function(mosque){
    // Fire the mosque event
    fire('mosque', mosque);
  };

  /**
   * Checks if masjidTimes has loaded stuff into memory yet
   * @returns {boolean} True if everything's loaded up
   */
  var isUsingReady = function(){
    return using != undefined && using.mosque != undefined && using.prayer != undefined;
  };

  /**
   * Checks if everything that needs to be stored in local storage has been stored or not.
   */
  var isStorageReady = function(readyCB, notReadyCB){
    storage.get(l.mosque, function(mosque){
      storage.get(l.prayer, function(prayer){
        if(mosque != undefined && prayer != undefined){
          readyCB(mosque, prayer);
        } else {
          notReadyCB(mosque, prayer);
        }
      });
    });
  };

  /**
   * Gets data from local storage and puts it into using.
   */
  var loadFromStorage = function(cb, mosque, prayer){
    if(mosque!=undefined && prayer != undefined){
      using.mosque = mosque;
      using.prayer = prayer;
      cb()
    } else {
      storage.get(l.mosque, function(mosque){
        using.mosque = mosque;
        storage.get(l.prayer, function(prayer){
          using.prayer = prayer;
          cb();
        });
      });
    }

  };

  /**
   * Gets data from using and puts it into local storage.
   */
  var putToStorage = function(cb){
    storage.setKey(l.mosque, using.mosque, function(){
      storage.setKey(l.prayer, using.prayer, function(){
        cb()
      })
    });
  };


  var checkInit = function(forced){
    if(forced){
      clearLocalStorage();
    }
    isStorageReady(function (mosque, prayer) {
      // We have the stuff in storage!
      loadFromStorage(function () {
        fire('ready');
      }, mosque, prayer);
    }, function () {
      // We don't have the stuff in storage!
      if (isUsingReady()) {
        // We have the stuff in memory!
        putToStorage(function () {
          fire('ready');
        });
      } else {
        // We don't have the stuff in memory!
        // Nothing is ready.
        // Here we need to request from server if we haven't already.
        if (using.mosque == undefined && !triggeredMosqueSelection) {
          // We don't have a mosque chosen yet.
          ajax.nearestMosques(using.coords, function (nearestMosques) {
            fire('mosques', nearestMosques);
            triggeredMosqueSelection = true;
          });
        }
        if (using.prayer == undefined && using.mosque != undefined) {
          // TODO: Match the mosque's prayer times id with the using.prayer id in this if check
          // We have a mosque chosen but don't have its prayer times yet.
          ajax.prayerTimesById({id: using.mosque.prayertimes_id}, function (prayerTimes) {
            fire('prayertimes', prayerTimes);
          });
        }
      }
    });
  };
  /**
   * Loads stuff from local storage. If forced, then does a new request.
   * @param {{longitude:Number, latitude:Number}} [coords] The user's location
   * @param {boolean} [forced] If true, empties local storage and requests new thing from server.
   * @returns {Object}
   */
  var init = function(coords, forced) {
    if(coords == undefined){
      // Check cache
      storage.get(l.coords, function(cachedCoords){
        if(cachedCoords == undefined){
          throw "MasjidTimes failed to initialise. Coordinates not defined";
        } else {
          using.coords = {lat: cachedCoords.latitude, long:cachedCoords.longitude};
          checkInit(forced);
        }
      });
    } else {
      // Set using to coords
      using.coords = {lat: coords.latitude, long:coords.longitude};
      storage.setKey(l.coords, coords, function(){
        checkInit(forced);
      });
    }
  };

  var initFromCoords = function(nonCachedCb, cachedCallback){
    storage.get(l.coords, function(cachedCoords){
      if(cachedCoords != undefined){
        init(cachedCoords);
        if(typeof cachedCallback == 'function') cachedCallback(cachedCoords);
      } else {
        nonCachedCb(function(coords){
          init(coords);
        });
      }
    });
  };

  /**
   * A set of properties and methods to do with prayer times.
   * @type {{getDay, getToday, today, getNext, getDifference, stringToHoursMinutes, stringToDate, prayerPassed}}
   */
  var times = {};

  /**
   * Gets the prayer times for a specific date.
   * @param {{month:Number, day:Number}|Date} date
   */
  times.getDay = function(date){
    date = getDate(date);
    // TODO: Create new version of grep which has indexing (e.g. skip a month if wrong month)
    return $.grep(using.prayer, function(element, index){return element.month == date.month && element.day == date.day;})[0];
  };

  /**
   * Gets the prayer times for today
   * @returns {*}
   */
  times.getToday = function(){
    if(initialised){
      // Search the prayer times for todays date.
      var realToday = getDate();
      if(times.today !== undefined && realToday.day == times.today.day && realToday.month == times.today.month){
        //console.debug("Cache hit");
        return times.today;
      } else {
        //console.debug("Cache miss");
        return times.today = times.getDay(realToday);
      }
    } else{
      throw "MasjidTimes is not initialised.";
    }
  };

  /**
   * Gets the prayer times for tomorrow. Uses today's object.
   * @returns {*}
   */
  times.getTomorrow = function(){
    if(initialised){
      return times.getDay(new Date(getDate().getTime() + 24 * 60 * 60 * 1000));
    } else{
      throw "MasjidTimes is not initialised.";
    }
  };

  /**
   * Gets the next prayer from now.
   * Prayer could be the following day's fajr. Remaining is number of milliseconds till next prayer
   * @returns {{prayer: string, remaining: Number, date: Date}}
   */

  times.getNext = function(){
    var today = times.getToday();

    // Cache check
    var now = getDate();
    if(times.next != undefined && times.next.date > now){
      // Cache hit; now just change remaining time.
      times.next.remaining = times.next.date - now;
      return times.next;
    }

    var nextPrayer, nextPrayerDifference, nextPrayerDate, prayerDateTime = undefined;
    var counter = 0;

    while(nextPrayer == undefined){
      // The next date to check:
      // Get the prayer times for the date of (today's date + counter * 1 day)
      // The nextPrayerDate is normalised, meaning that hours, minutes, seconds are 0.
      var nextPrayerDateTime = getDate(getDate().getTime() + counter * 86400000);
      nextPrayerDate = times.normaliseDate(nextPrayerDateTime);
      if(counter == 1){
        nextPrayerDateTime = nextPrayerDate;
      }

      var nextPrayerTimes = times.getDay(nextPrayerDate);
      each(prayers, function(index, prayer){
        // For each prayer (e.g. 'fajr'), find out what that prayers difference is.
        var difference = (prayerDateTime = times.stringToDate(nextPrayerTimes[prayer], nextPrayerDateTime)) - (counter == 0 ? nextPrayerDateTime : getDate());
        if(difference > 0){
          // This is the next prayer
          nextPrayer = prayer;
          nextPrayerDifference = difference;
          return false; //Break out of the loop
        }
      });
      counter++;
    }

    return times.next = {prayer: nextPrayer, remaining: nextPrayerDifference, date: prayerDateTime};
  };


  /**
   * Turns a datetime object into one which only has the date set and everything else set to zero.
   * e.g. 24 March 12:32 => 24 March 00:00
   * @param date
   * @returns {Date}
   */
  times.normaliseDate = function(date){
    date = getDate(date);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return getDate(date);
  };

  /**
   * Turns a time string of the form "hours:minutes" into an object
   * with properties hours and minutes
   * @param  {String} timeString The time string e.g. 04:00
   * @return {{hours:Number, minutes:Number}}    Object literal with properties hours, minutes
   */
  times.stringToHoursMinutes = function (timeString) {
    var split = timeString.split(":");
    return {hours: parseInt(split[0]), minutes: parseInt(split[1])};
  };

  /**
   * Turns a time string of the form "hours:minutes" into a date object
   * @param  {String} timeString The string to convert
   * @param  {Date}  [date]      The date to match. If not set, gets today's date
   * @return {Date}              Today's date at that time.
   */
  times.stringToDate = function (timeString, date) {
    var split, now, newDate;
    split = times.stringToHoursMinutes(timeString);
    now = getDate(date);
    return new Date(now.getFullYear(), now.getMonth(), now.day, split.hours, split.minutes, 0, 0);
  };

  /**
   * Has the given prayer passed yet?
   * @param  {string} prayer The prayer in question e.g. 'fajr'
   * @return {boolean}       True if the prayer has passed the current time (e.g. true if fajr was in the past)
   */
  times.prayerPassed = function (prayer) {
    return getDate() >= times.stringToDate(today[prayer]);
  };





  that = using;
  that.times = times;
  that.prayers = prayers;
  that.ready = ready;
  that.ajax = ajax;
  that.clearLocalStorage = clearLocalStorage;
  that.useMosque = useMosque;
  that.init = init;
  that.initFromCoords = initFromCoords;
  that.fire = fire;
  that.on = on;





  //Constructor
  return that;
};
