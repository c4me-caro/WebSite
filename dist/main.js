(()=>{"use strict";var e={227:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a='<div class="content error404"> <div class="container"> <h1>Error 404 Página no encontrada</h1> <p>Es posible que la página a la que usted está intentando acceder no esté disponible o se halla cambiado</p> </div> </div>'},143:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(91),i=n.n(a),o=new URL(n(930),n.b);const r='<div class="container"> <div class="content"> <img src="'+i()(o)+'"> </div> </div>'},612:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(91),i=n.n(a),o=new URL(n(338),n.b);const r='<div class="content"> <div class="nav" id="nav"> <nav class="navigation"> <ul class="nav-brand"> <li> <img src="'+i()(o)+'"/> </li> </ul> <ul class="nav-menu"> <li> <a href="#">Mision y Vision</a> </li> <li> <a href="#">Salud</a> </li> <li> <a href="#">Tienda</a> </li> <li> <a href="#">Noticias</a> </li> <li> <a href="#">Biblioteca</a> </li> <li> <a href="#">Blog</a> </li> <li> <a href="#">contacto</a> </li> </ul> </nav> </div> </div>'},91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},338:(e,t,n)=>{e.exports=n.p+"3f37a81a7e7e23c7db08.png"},930:(e,t,n)=>{e.exports=n.p+"2963e84075fd89484d24.png"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(612),t=n(227),a=n(143),i=document.getElementById("app");i.innerHTML="";var o=[{path:"#/",view:a}];const r=function(n){var a=o.find((function(e){return e.path===n}));i.innerHTML=a?e.default+a.view.default:t.default};window.addEventListener("load",(function(){window.location.hash?r(window.location.hash):window.location.hash="#/"})),window.addEventListener("hashchange",(function(e){e.preventDefault();var t=window.location.hash;"#"!==t&&""!==t||(window.location.hash="#/"),r(window.location.hash)}))})()})();