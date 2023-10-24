"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,title:"\u591a\u9879\u76ee\u5206\u5305\u6253\u901a"},a=void 0,l={unversionedId:"miniprogram/plugins/multiIntegrate",id:"miniprogram/plugins/multiIntegrate",title:"\u591a\u9879\u76ee\u5206\u5305\u6253\u901a",description:"\u7b80\u4ecb\uff08gioMultiIntegrate\uff09",source:"@site/docs/miniprogram/plugins/multiIntegrate.md",sourceDirName:"miniprogram/plugins",slug:"/miniprogram/plugins/multiIntegrate",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/plugins/multiIntegrate",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/miniprogram/plugins/multiIntegrate.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u591a\u9879\u76ee\u5206\u5305\u6253\u901a"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/plugins/compress"},next:{title:"\u6027\u80fd\u76d1\u63a7",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/plugins/performance"}},p={},s=[{value:"\u7b80\u4ecb\uff08gioMultiIntegrate\uff09",id:"\u7b80\u4ecbgiomultiintegrate",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165",id:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165",level:4},{value:"npm \u96c6\u6210\u5f15\u5165",id:"npm-\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3},{value:"3\u3001\u5206\u5305\u4fee\u6539\u521d\u59cb\u5316\u914d\u7f6e\u9879",id:"3\u5206\u5305\u4fee\u6539\u521d\u59cb\u5316\u914d\u7f6e\u9879",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],u={toc:s};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7b80\u4ecbgiomultiintegrate"},"\u7b80\u4ecb\uff08gioMultiIntegrate\uff09"),(0,i.kt)("p",null,"\u5f53\u4e14\u4ec5\u5f53\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\u4f7f\u7528\u72ec\u7acb\u5f00\u53d1\u7684\u5206\u5305 ",(0,i.kt)("strong",{parentName:"p"},"\uff08\u5373\u4e3b\u5305\u4e0e\u5206\u5305\u4e0d\u5728\u540c\u4e00\u9879\u76ee\u4e2d\u4e14\u4e0d\u540c\u6846\u67b6\u65f6\uff09")," \u65f6\uff0c\u63d2\u4ef6\u7528\u4e8e\u6253\u901a\u7528\u6237\u6570\u636e\u548c\u9875\u9762\u6570\u636e\uff0c\u5408\u5e76\u4e3a\u4e00\u4e2a SDK \u8fd0\u884c\u903b\u8f91\u3002"),(0,i.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,i.kt)("h3",{id:"1\u5f15\u5165"},"1\u3001\u5f15\u5165"),(0,i.kt)("h4",{id:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165"},"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u63d2\u4ef6\u5305\u5e76\u590d\u5236\u81f3\u9879\u76ee\u4e2d\uff1a\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"3"},(0,i.kt)("a",{parentName:"strong",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.17/plugins/gioMultiIntegrate.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.17/plugins/gioMultiIntegrate.js"))),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5f15\u5165\u63d2\u4ef6"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import gioMultiIntegrate from './utils/plugins/gioMultiIntegrate';\n")),(0,i.kt)("h4",{id:"npm-\u96c6\u6210\u5f15\u5165"},"npm \u96c6\u6210\u5f15\u5165"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import gioMultiIntegrate from 'gio-webjs-sdk-cdp/plugins/gioMultiIntegrate';\n")),(0,i.kt)("font",{color:"#FC5F3A"},"\u63d0\u793a\uff1a\u4e3b\u5305\u5206\u5305\u5747\u9700\u5f15\u5165 SDK \u548c\u63d2\u4ef6\u3002"),(0,i.kt)("h3",{id:"2\u6ce8\u518c"},"2\u3001\u6ce8\u518c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('registerPlugins', [gioMultiIntegrate]);\ngdp('init', xxxx);\n")),(0,i.kt)("font",{color:"#FC5F3A"},"\u63d0\u793a\uff1a\u4e3b\u5305\u5206\u5305\u5747\u9700\u6ce8\u518c\u63d2\u4ef6\u5e76\u521d\u59cb\u5316\u3002"),(0,i.kt)("h3",{id:"3\u5206\u5305\u4fee\u6539\u521d\u59cb\u5316\u914d\u7f6e\u9879"},"3\u3001\u5206\u5305\u4fee\u6539\u521d\u59cb\u5316\u914d\u7f6e\u9879"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', xxxx, { subpackage: true });\n")),(0,i.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,i.kt)("p",null,"1\u3001",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"red"},"\u672c\u63d2\u4ef6\u4e0e\u65e0\u57cb\u70b9\u63d2\u4ef6\u4e92\u65a5\u3002")),"\u4ec5\u652f\u6301\u7528\u6237\u548c\u9875\u9762\u6570\u636e\u6253\u901a\u4e0e\u57cb\u70b9\u4e8b\u4ef6\uff0c\u65e0\u57cb\u70b9\u4e8b\u4ef6\u65e0\u6cd5\u652f\u6301\uff0c\u4f7f\u7528\u8be5\u63d2\u4ef6\u4f1a",(0,i.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u5f3a\u5236\u5173\u95ed\u65e0\u57cb\u70b9\u529f\u80fd"),"\uff08\u4e0d\u8bba\u662f\u5426\u52a0\u8f7d\u65e0\u57cb\u70b9\u63d2\u4ef6\u548c\u5f00\u542f autotrack\uff09\u3002"),(0,i.kt)("p",null,"2\u3001\u5728\u5206\u5305\u4e2d\u9664\u6846\u67b6\u5b9e\u4f8b\uff08\u4f8b\u5982\uff1auniVue\uff09\u5916\uff0c\u5176\u4ed6\u901a\u7528\u7ef4\u5ea6\u7684\u914d\u7f6e\u9879\u4f1a\u88ab\u4e3b\u5305\u7684\u521d\u59cb\u5316\u914d\u7f6e\u8986\u76d6\u3002"),(0,i.kt)("p",null,"3\u3001\u9700\u8981\u5728\u4e3b\u5305\u9879\u76ee\u4e2d\u4e0e\u5206\u5305\u9879\u76ee\u4e2d\u90fd\u96c6\u6210 SDK \u548c\u6ce8\u518c\u63d2\u4ef6\uff0c\u5e76\u5728\u5206\u5305\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"subpackage: true"),"\u3002"),(0,i.kt)("p",null,"4\u3001\u96c6\u6210\u8be5\u63d2\u4ef6\u65f6\uff0c\u5206\u5305",(0,i.kt)("inlineCode",{parentName:"p"},"identify"),"\u65b9\u6cd5\u8c03\u7528\u81ea\u52a8\u5931\u6548\uff0c\u4ec5\u5728\u4e3b\u5305\u4e2d\u8c03\u7528\u751f\u6548\u3002"),(0,i.kt)("p",null,"5\u3001\u5efa\u8bae\u5206\u5305\u9879\u76ee\u5c3d\u91cf\u4e0d\u8981\u8fc7\u591a\uff083 \u4e2a\u4ee5\u5185\u4e3a\u5b9c\uff09\uff0c\u8fc7\u591a\u53ef\u80fd\u4f1a\u5f71\u54cd SDK \u5408\u5e76\u8fd0\u884c\u65f6\u7684\u6027\u80fd\u4ece\u800c\u5f71\u54cd\u5c0f\u7a0b\u5e8f\u6574\u4f53\u8fd0\u884c\u6027\u80fd\u3002"),(0,i.kt)("p",null,"6\u3001\u76ee\u524d\u4ec5\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3002"))}g.isMDXComponent=!0}}]);