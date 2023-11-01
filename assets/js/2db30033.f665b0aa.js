"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),p=n(7094),s=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:m,groupId:g,className:k}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[w,C]=(0,a.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&b.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==w&&(j(t),C(r),null!=g&&N(g,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:I,onClick:S},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},5336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(5488),n(5162);const o={sidebar_position:6,title:"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f"},i=void 0,l={unversionedId:"miniprogram/integration/taobao",id:"miniprogram/integration/taobao",title:"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f",description:"\u76ee\u524d\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4ec5\u652f\u6301\u539f\u751f\u5f00\u53d1\u65b9\u5f0f\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002",source:"@site/docs/miniprogram/integration/taobao.md",sourceDirName:"miniprogram/integration",slug:"/miniprogram/integration/taobao",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/integration/taobao",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/miniprogram/integration/taobao.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"QQ\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/integration/qq"},next:{title:"\u5feb\u624b\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/integration/kuaishou"}},p={},s=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210",id:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210",level:2},{value:"1\u3001\u52a0\u8f7d SDK",id:"1\u52a0\u8f7d-sdk",level:4},{value:"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210",level:5},{value:"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210",id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210",level:5},{value:"2\u3001\u4f7f\u7528<code>init</code>\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:5},{value:"\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210",id:"\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210",level:2},{value:"\u63d2\u4ef6\u6269\u5c55",id:"\u63d2\u4ef6\u6269\u5c55",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:2},{value:"\u4f7f\u7528\u4e91\u51fd\u6570\u4e0a\u62a5",id:"\u4f7f\u7528\u4e91\u51fd\u6570\u4e0a\u62a5",level:3},{value:"\u4f7f\u7528\u4e91\u5e94\u7528\u8f6c\u53d1\u4e0a\u62a5",id:"\u4f7f\u7528\u4e91\u5e94\u7528\u8f6c\u53d1\u4e0a\u62a5",level:3},{value:"\u4e91\u51fd\u6570\u4e0a\u62a5",id:"\u4e91\u51fd\u6570\u4e0a\u62a5",level:2},{value:"\u5176\u4ed6\u4fe1\u606f",id:"\u5176\u4ed6\u4fe1\u606f",level:3}],u=(d="ImageLoader",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76ee\u524d\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4ec5\u652f\u6301\u539f\u751f\u5f00\u53d1\u65b9\u5f0f\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"1\u3001\u5728 GrowingIO \u5e73\u53f0\u4e2d\u65b0\u6570\u636e\u6e90\u5e76\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"accountId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"dataSourceId")),"\u3002"),(0,a.kt)("p",null,"2\u3001\u5728\u60a8\u7684\u5c0f\u7a0b\u5e8f\u4e2d\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"appId")),"\u3002"),(0,a.kt)("p",null,"3\u3001\u4e0b\u8f7d SDK \u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"utils/gio"),"\u76ee\u5f55\u4e3a\u4f8b(\u76ee\u5f55\u548c SDK \u6587\u4ef6\u53ef\u81ea\u5b9a\u4e49\u91cd\u547d\u540d)\u3002"),(0,a.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210"},"\u5c0f\u7a0b\u5e8f\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\u5728 app.js \u5c0f\u7a0b\u5e8f\u4e3b\u6587\u4ef6\u4e2d\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801\u3002\u6dfb\u52a0\u4f4d\u7f6e\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,a.kt)("strong",{parentName:"p"},"SDK \u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,a.kt)("h4",{id:"1\u52a0\u8f7d-sdk"},"1\u3001\u52a0\u8f7d SDK"),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e00\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"},"\u65b9\u5f0f\u4e00\uff1a\u4e0b\u8f7d\u672c\u5730\u96c6\u6210"),(0,a.kt)("p",null,"\u6dd8\u5b9d\u539f\u751f SDK \u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.17/gio-taobao.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.17/gio-taobao.js"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,a.kt)("h5",{id:"\u65b9\u5f0f\u4e8cnpm-\u96c6\u6210"},"\u65b9\u5f0f\u4e8c\uff1anpm \u96c6\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i gio-miniprogram-sdk-cdp --save\n")),(0,a.kt)("h4",{id:"2\u4f7f\u7528init\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"},"2\u3001\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"init"),"\u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u6240\u5904\u4f4d\u7f6e\u5728 App \u5b9e\u4f8b\u4e4b\u524d\u3002"),(0,a.kt)("h5",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\n// \u4e0b\u8f7d\u96c6\u6210\u65b9\u5f0f\nimport gdp from './utils/gio/gio-taobao.js';\n// npm\u96c6\u6210\u65b9\u5f0f\nimport gdp from 'gio-miniprogram-sdk-cdp/gio-taobao';\n\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    tbConfig: { ... },\n    ...other settings\n});\n\nApp({ ... });\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"strong"},"tbConfig")," \u4e3a\u5fc5\u586b\u9879\uff0c\u8be6\u60c5\u8bf7",(0,a.kt)("a",{parentName:"strong",href:"/docs/miniprogram/initSettings#tbconfig"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,a.kt)("a",{parentName:"em",href:"/docs/miniprogram/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,a.kt)("h2",{id:"\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210"},"\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210"),(0,a.kt)("p",null,"\u53c2\u8003\u5c0f\u7a0b\u5e8f\u96c6\u6210\u5728\u6307\u5b9a\u7684\u5c0f\u90e8\u4ef6 Component \u7ec4\u4ef6\u7684 js \u4e2d\u96c6\u6210\u5373\u53ef\u3002SDK \u521d\u59cb\u5316\u65f6\u4f1a\u81ea\u52a8\u5207\u6362\u4e3a\u63d2\u4ef6\u6a21\u5f0f\uff0c\u5c06\u5f53\u524d Component \u89c6\u4e3a\u4e00\u4e2a\u72ec\u7acb\u5e94\u7528\u53d1\u9001 VISIT \u4e8b\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// myComponent.js\nimport gdp from './utils/gio/sdk.js';\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'Your ServerHost',\n    tbConfig: { ... },\n    ...other settings\n});\n\nComponent({ ... });\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),"\u7531\u4e8e\u5c0f\u90e8\u4ef6\u4e2d\u65e0\u6cd5\u83b7\u53d6\u5230\u9875\u9762\u4fe1\u606f\uff08\u5373\u6ca1\u6709 path\uff09\uff0c\u56e0\u6b64\u5728\u5c0f\u90e8\u4ef6\u4e2d\u96c6\u6210\u65f6\uff0c\u4f1a\u81ea\u52a8\u5173\u95ed\u65e0\u57cb\u70b9\u529f\u80fd\uff08\u4e0d\u8bba\u662f\u5426\u52a0\u8f7d\u65e0\u57cb\u70b9\u63d2\u4ef6\u548c\u5f00\u542f autotrack\uff09\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u6269\u5c55"},"\u63d2\u4ef6\u6269\u5c55"),(0,a.kt)("p",null,"\u96c6\u6210 SDK \u65f6\uff0cSDK \u4ec5\u5185\u7f6e\u57cb\u70b9\u529f\u80fd\uff0c\u5982\u60a8\u9700\u8981\u6269\u5c55\u5176\u4ed6\u529f\u80fd\u65f6\uff0c\u9700\u8981\u96c6\u6210\u5e76\u6ce8\u518c\u5bf9\u5e94\u63d2\u4ef6\u65b9\u53ef\u6fc0\u6d3b\u5bf9\u5e94\u529f\u80fd\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5404\u4e2a\u63d2\u4ef6\u7684\u4ecb\u7ecd\u548c\u96c6\u6210\u65b9\u5f0f\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/miniprogram/plugins"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("p",null,"\u52a0\u8f7d\u63d2\u4ef6\u540e\u4f1a\u5728\u521d\u59cb\u5316\u4e4b\u524d\u6253\u5370\u65e5\u5fd7\u3002\u4f8b\uff1a"),(0,a.kt)(u,{path:"img/miniprogram/plugin_debug",mdxType:"ImageLoader"}),(0,a.kt)("h2",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,a.kt)("p",null,"\u8bf7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d Console \u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770b SDK \u4e0a\u62a5\u7684 log \u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)(u,{path:"img/miniprogram/taobao_debug",mdxType:"ImageLoader"}),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u4e91\u51fd\u6570\u4e0a\u62a5"},"\u4f7f\u7528\u4e91\u51fd\u6570\u4e0a\u62a5"),(0,a.kt)("p",null,"\u7531\u4e8e\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u5bf9\u4f7f\u7528\u4e91\u51fd\u6570\u5bf9\u5916\u4e0a\u62a5\u7684\u65b9\u5f0f\u8981\u6c42\u4e25\u683c\uff0c\u56e0\u6b64\u9700\u8981\u5177\u4f53\u57df\u540d\u548c\u5b57\u6bb5\u9700\u8981\u4e0e\u6211\u4eec\u6c9f\u901a\u786e\u8ba4\u540e\u7531\u5f00\u53d1\u4e3b\u4f53\u7533\u8bf7\u767d\u540d\u5355 ",(0,a.kt)("a",{parentName:"p",href:"https://miniapp.open.taobao.com/docV3.htm?docId=118444&docType=1"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u4e0d\u8981\u8f7b\u6613\u5c1d\u8bd5\u7533\u8bf7\uff01\u4f1a\u6d6a\u8d39\u60a8\u7684\u7533\u8bf7\u8d44\u6e90\uff01\u8bf7\u4e0e\u6211\u4eec\u5145\u5206\u6c9f\u901a\u9700\u6c42\u540e\u518d\u5b9e\u8df5\u3002")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u4e91\u5e94\u7528\u8f6c\u53d1\u4e0a\u62a5"},"\u4f7f\u7528\u4e91\u5e94\u7528\u8f6c\u53d1\u4e0a\u62a5"),(0,a.kt)("p",null,"\u65e0\u9700\u7533\u8bf7\u767d\u540d\u5355\u3002",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u8bf7\u4e0e\u6211\u4eec\u5145\u5206\u6c9f\u901a\u9700\u6c42\u540e\u518d\u5b9e\u8df5\u3002")),(0,a.kt)("h2",{id:"\u4e91\u51fd\u6570\u4e0a\u62a5"},"\u4e91\u51fd\u6570\u4e0a\u62a5"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7ed9\u51fa\u4e91\u51fd\u6570\u4e0a\u62a5\u5728\u4ee3\u7801\u4e2d\u7684\u8c03\u7528\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// 1\u3001server\u76ee\u5f55\u4e2d\u521b\u5efa\u81ea\u5b9a\u4e49\u4e91\u51fd\u6570\u3002\u6ce8\u610f\u8be5\u4e91\u51fd\u6570\u540d\u79f0\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\u586b\u5199cloudFuncName\u3002\n\n// 2\u3001index.js\n// \u6ce8\u610f\u8fd9\u91cc\u7684 main \u4e3a\u793a\u4f8b\uff0c\u540d\u79f0\u8bf7\u81ea\u884c\u786e\u5b9a\uff0c\u8be5\u540d\u79f0\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\u586b\u5199cloudFuncHandler\u3002\nexports.main = async (context) => {\n  const { domain, path, params, body } = context.data;\n  const result = await context.cloud.httpApi.invoke({\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json;charset=UTF-8' },\n    domain: context.env === 'online' ? domain : 'your test host',\n    path,\n    params,\n    body: body,\n  });\n  return { success: true, msg: result };\n};\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6\u4fe1\u606f"},"\u5176\u4ed6\u4fe1\u606f"),(0,a.kt)("p",null,"\u7531\u4e8e\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u5e95\u5c42\u4f7f\u7528\u7684\u662f\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u4ee3\u7801\uff0c\u6240\u4ee5\u5728 SDK \u8bc6\u522b\u4e0a\u53ef\u80fd\u4f1a\u88ab\u8bc6\u522b\u4e3a\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u3002"))}m.isMDXComponent=!0}}]);