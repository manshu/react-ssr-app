(()=>{"use strict";var e={572:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(689)),u=r(661),a=l(r(637));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement("div",null,n.default.createElement(u.Route,{exact:!0,path:"/",component:a.default}))}},637:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n,u=(n=r(689))&&n.__esModule?n:{default:n};t.default=function(){return u.default.createElement("div",{className:"h-screen container mx-auto"},u.default.createElement("div",{className:"flex justify-center items-center"},u.default.createElement("h1",{className:"text-2xl text-red-500"},"Coming Soon 2023")))}},538:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(689)),u=r(684),a=r(661),l=o(r(572));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return'\n        <html>\n        <head>\n        <link rel="stylesheet" href="css/app.css">\n        </head>\n        <body>\n            <div id="root">'+(0,u.renderToString)(n.default.createElement(a.StaticRouter,{location:e.path,context:{}},n.default.createElement(l.default,null)))+'</div>\n            <script src="js/bundle.js"><\/script>\n        </body>\n        </html>\n    '}},860:e=>{e.exports=require("express")},689:e=>{e.exports=require("react")},684:e=>{e.exports=require("react-dom/server")},661:e=>{e.exports=require("react-router-dom")}},t={};function r(n){var u=t[n];if(void 0!==u)return u.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{var e=n(r(860)),t=n(r(538));function n(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.default)();u.use(e.default.static("public")),u.get("*",(function(e,r){r.send((0,t.default)(e))})),u.listen(3e3,(function(){console.log("Listeing on port 3000")}))})()})();