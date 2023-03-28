"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5598],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var k=r.createContext({}),m=function(t){var e=r.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(k.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,k=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),N=m(a),g=n,o=N["".concat(k,".").concat(g)]||N[g]||c[g]||l;return a?r.createElement(o,i(i({ref:e},d),{},{components:a})):r.createElement(o,i({ref:e},d))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7506:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={id:"home",sidebar_position:1,title:"SDK \u7b80\u4ecb",slug:"/"},i=void 0,p={unversionedId:"home",id:"home",title:"SDK \u7b80\u4ecb",description:"--------------",source:"@site/docs/SDK OVERVIEW.md",sourceDirName:".",slug:"/",permalink:"/growingio-sdk-docs-saas/docs/",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/docs/SDK OVERVIEW.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"home",sidebar_position:1,title:"SDK \u7b80\u4ecb",slug:"/"},sidebar:"gioSidebar",next:{title:"\u7b80\u4ecb",permalink:"/growingio-sdk-docs-saas/docs/basicknowledge"}},k={},m=[{value:"\u4ea7\u54c1\u6982\u8ff0",id:"\u4ea7\u54c1\u6982\u8ff0",level:2},{value:"SDK \u7b80\u4ecb",id:"sdk-\u7b80\u4ecb",level:2},{value:"SDK\u652f\u6301\u8303\u56f4",id:"sdk\u652f\u6301\u8303\u56f4",level:3},{value:"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9",id:"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9",level:3},{value:"\u4f7f\u7528\u6d41\u7a0b",id:"\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e SDK\u7248\u672c\u5bf9\u5e94\u5173\u7cfb",id:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e-sdk\u7248\u672c\u5bf9\u5e94\u5173\u7cfb",level:2}],d={toc:m};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u4ea7\u54c1\u6982\u8ff0"},"\u4ea7\u54c1\u6982\u8ff0"),(0,n.kt)("p",null,"GrowingIO \uff08\u5317\u4eac\u6613\u6570\u79d1\u6280\u6709\u9650\u516c\u53f8\uff09\u662f\u57fa\u4e8e\u7528\u6237\u884c\u4e3a\u6570\u636e\u7684\u589e\u957f\u5e73\u53f0\uff0c\u56fd\u5185\u9886\u5148\u7684\u6570\u636e\u8fd0\u8425\u89e3\u51b3\u65b9\u6848\u4f9b\u5e94\u5546\u3002\u4e3a\u4ea7\u54c1\u3001\u8fd0\u8425\u3001\u5e02\u573a\u3001\u6570\u636e\u56e2\u961f\u53ca\u7ba1\u7406\u8005\u7b49\uff0c\u63d0\u4f9b\u5ba2\u6237\u6570\u636e\u5e73\u53f0\u3001  \u4ea7\u54c1\u5206\u6790\u3001\u83b7\u5ba2\u5206\u6790\uff0c\u667a\u80fd\u8fd0\u8425\u7b49\u4ea7\u54c1\u548c\u54a8\u8be2\u670d\u52a1\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5728\u6570\u636e\u5316\u5347\u7ea7\u7684\u8def\u4e0a\uff0c\u63d0\u5347\u6570\u636e\u9a71\u52a8\u80fd\u529b\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u589e\u957f\u3002"),(0,n.kt)("p",null,"GrowingIO \u4e13\u6ce8\u4e8e\u96f6\u552e\u3001\u7535\u5546\u3001\u91d1\u878d\u3001\u9152\u65c5\u822a\u53f8\u3001\u6559\u80b2\u3001\u5185\u5bb9\u793e\u533a\u3001B2B\u7b49\u884c\u4e1a\uff0c\u6210\u7acb\u4ee5\u6765\uff0c\u670d\u52a1\u4e0a\u5343\u5bb6\u4f01\u4e1a\u7ea7\u5ba2\u6237\uff0c\u83b7\u5f97\u8fea\u5965\u3001\u5b89\u8e0f\u3001\u559c\u8336\u3001\u62db\u5546\u4ec1\u548c\u4eba\u5bff\u3001\u4e0a\u6c7d\u96c6\u56e2\u3001\u4e1c\u822a\u3001\u6625\u822a\u3001\u9996\u65c5\u5982\u5bb6\u3001\u964c\u964c\u3001\u7231\u5947\u827a\u3001\u65b0\u4e1c\u65b9\u7b49\u5ba2\u6237\u7684\u9752\u7750\u3002"),(0,n.kt)("p",null,"GrowingIO \u5e2e\u52a9\u5ba2\u6237\u63d0\u5347\u6570\u636e\u9a71\u52a8\u80fd\u529b\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u589e\u957f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.growingio.com/.gitbook/assets/-LGNxeGABUADKiTWTaEM-LIEN5IgjD_lm1zFG-YX-LIEN8O7RZ9ipiI48vpk45_4_conversion_1_.gif",alt:"slogan"})),(0,n.kt)("h2",{id:"sdk-\u7b80\u4ecb"},"SDK \u7b80\u4ecb"),(0,n.kt)("h3",{id:"sdk\u652f\u6301\u8303\u56f4"},"SDK\u652f\u6301\u8303\u56f4"),(0,n.kt)("p",null,"SDK \u5305\u62ec\u5ba2\u6237\u7aefSDK\u548c\u670d\u52a1\u7aefSDK\u3002\u76ee\u524d\u5ba2\u6237\u7aefSDK\u652f\u6301Android\u548ciOS\u539f\u751f\uff0cWeb JS\uff0c\u5c0f\u7a0b\u5e8f\uff0c\u4ee5\u53ca\u4f17\u591a\u7b2c\u4e09\u65b9\u6df7\u5408\u5f00\u53d1\u6846\u67b6\u3002\u670d\u52a1\u7aefSDK\u652f\u6301Java\u3001PHP\u3001Python\u3002"),(0,n.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u3001\u5b57\u8282(\u6296\u97f3\u5934\u6761)\u5c0f\u7a0b\u5e8f\u3001QQ\u5c0f\u7a0b\u5e8f\u3001\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u5feb\u624b\u5c0f\u7a0b\u5e8f\u3001\u5feb\u5e94\u7528\u3002"),(0,n.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u6301\u7684\u5f00\u53d1\u6846\u67b6\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u539f\u751f \u3001 \u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"Taro 2.x \u3001Taro3(React)\u3001Taro 3.x(vue2)\u3001Taro 3.x(vue3)"),(0,n.kt)("li",{parentName:"ul"},"uni-app(vue2)\u3001uni-app(vue3)"),(0,n.kt)("li",{parentName:"ul"},"WePY 1.x\u3001WePY 2.x \u4ee5\u53ca\u7b2c\u4e09\u65b9\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"Chameleon"),(0,n.kt)("li",{parentName:"ul"},"Remax")),(0,n.kt)("p",null,"\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f\u652f\u6301\u7684\u5f00\u53d1\u6846\u67b6\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u539f\u751f"),(0,n.kt)("li",{parentName:"ul"},"Taro 2.x \u3001Taro3(React)\u3001Taro 3.x(vue2)\u3001Taro 3.x(vue3)"),(0,n.kt)("li",{parentName:"ul"},"uni-app(vue2)\u3001uni-app(vue3)"),(0,n.kt)("li",{parentName:"ul"},"Chameleon"),(0,n.kt)("li",{parentName:"ul"},"Remax")),(0,n.kt)("p",null,"\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u652f\u6301\u7684\u5f00\u53d1\u6846\u67b6\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u539f\u751f"),(0,n.kt)("li",{parentName:"ul"},"Taro 2.x \u3001Taro3(React)\u3001Taro 3.x(vue2)\u3001Taro 3.x(vue3)"),(0,n.kt)("li",{parentName:"ul"},"uni-app(vue2)\u3001uni-app(vue3)"),(0,n.kt)("li",{parentName:"ul"},"Chameleon")),(0,n.kt)("p",null,"\u5b57\u8282(\u6296\u97f3\u5934\u6761)\u5c0f\u7a0b\u5e8f\u652f\u6301\u7684\u5f00\u53d1\u6846\u67b6\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u539f\u751f"),(0,n.kt)("li",{parentName:"ul"},"Taro 2.x \u3001Taro3(React)\u3001Taro 3.x(vue2)\u3001Taro 3.x(vue3)"),(0,n.kt)("li",{parentName:"ul"},"uni-app(vue2)\u3001uni-app(vue3)"),(0,n.kt)("li",{parentName:"ul"},"Remax")),(0,n.kt)("p",null,"QQ\u5c0f\u7a0b\u5e8f\u652f\u6301\u7684\u5f00\u53d1\u6846\u67b6\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u539f\u751f"),(0,n.kt)("li",{parentName:"ul"},"Taro 2.x \u3001Taro3(React)\u3001Taro 3.x(vue2)\u3001Taro 3.x(vue3)")),(0,n.kt)("p",null,"\u5404SDK\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b\u5982\u4e0b\u8868\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"SDK"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8bbf\u95ee"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u9875\u9762\u6d4f\u89c8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5143\u7d20\u70b9\u51fb"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u5165\u6846\u6539\u53d8\u5185\u5bb9"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8868\u5355\u63d0\u4ea4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u7528\u6237\u5c5e\u6027"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u6fc0\u6d3b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5524\u9192"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5e94\u7528\u5173\u95ed"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Android\u65e0\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Android\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"iOS\u65e0\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"iOS\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Web JS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5c0f\u7a0b\u5e8f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"React Native"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Flutter"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Java"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PHP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Python"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u4e8b\u4ef6\u7c7b\u578b\u8bf4\u660e\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"/docs/basicknowledge/eventModel"},(0,n.kt)("strong",{parentName:"a"},"\u4e8b\u4ef6\u6a21\u578b")),"\uff0c\u4e8b\u4ef6\u5305\u542b\u5b57\u6bb5\u4fe1\u606f\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"/docs/Measurement%20Protocol"},(0,n.kt)("strong",{parentName:"a"},"\u6d4b\u91cf\u534f\u8bae"))," ",(0,n.kt)("br",null),"\n\u670d\u52a1\u7aefSDK\u652f\u6301\u591a\u7ef4\u5ea6\u8868\uff0c\u7528\u6237\u878d\u5408\u529f\u80fd\uff0c\u5177\u4f53\u53c2\u8003\u670d\u52a1\u7aefSDK",(0,n.kt)("br",null),"\nSDK\u672a\u652f\u6301\u7684\u670d\u52a1\u7aef\u5f00\u53d1\u8bed\u8a00\uff0cGrowingIO \u63d0\u4f9b\u6709 OPEN API\uff0c\u5982\u6709\u9700\u6c42\u8bf7\u8054\u7cfb\u60a8\u7684\u6280\u672f\u652f\u6301")),(0,n.kt)("h3",{id:"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9"},"\u79fb\u52a8\u7aef\u6846\u67b6\u7248\u672c\u517c\u5bb9"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6846\u67b6"),(0,n.kt)("th",{parentName:"tr",align:"center"},"SDK\u7c7b\u522b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"App\u9002\u914d\u7684\u7cfb\u7edf\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u6846\u67b6\u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u539f\u751fAndroid"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u539f\u751fiOS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"iOS 8+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"React Native"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+  iOS 8+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.46-0.56\u30010.59.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Flutter"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Android 4.2+  iOS 8+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,n.kt)("h2",{id:"\u4f7f\u7528\u6d41\u7a0b"},"\u4f7f\u7528\u6d41\u7a0b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8d2d\u4e70 CDP \u4ea7\u54c1;"),(0,n.kt)("li",{parentName:"ol"},"\u83b7\u53d6 ",(0,n.kt)("inlineCode",{parentName:"li"},"AccountId"),",",(0,n.kt)("inlineCode",{parentName:"li"},"UrlScheme"),",",(0,n.kt)("inlineCode",{parentName:"li"},"ServerHost")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"DataSourceId"),";"),(0,n.kt)("li",{parentName:"ol"},"\u5f00\u59cb\u96c6\u6210;")),(0,n.kt)("admonition",{title:"\u5173\u4e8e CDP \u4ea7\u54c1",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"GrowingIO CDP \u4ea7\u54c1\u662f\u96c6",(0,n.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u6570\u636e\u5206\u6790\u548c\u5ba2\u6237\u7aef\u81ea\u52a8\u57cb\u70b9\u4e00\u4f53\u5316"),"\u7684\u4ea7\u54c1\u670d\u52a1\u3002")),(0,n.kt)("h2",{id:"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e-sdk\u7248\u672c\u5bf9\u5e94\u5173\u7cfb"},"\u5e73\u53f0\u652f\u6301\u529f\u80fd\u7684\u7248\u672c\u4e0e SDK\u7248\u672c\u5bf9\u5e94\u5173\u7cfb"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5e73\u53f0\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u529f\u80fd"),(0,n.kt)("th",{parentName:"tr",align:"center"},"SDK\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5907\u6ce8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"OP-13.6"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u3001\u57cb\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"OP-14.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5168\u91cf context \u5b57\u6bb5\u4f20\u8f93,\u670d\u52a1\u7aef\u901a\u7528\u7ef4\u5ea6\u62c6\u89e3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"3.2.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"OP-2.0.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301 user_key,IDMapping"),(0,n.kt)("td",{parentName:"tr",align:"center"},"3.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"OP-2.6.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301\u57cb\u70b9\u4e8b\u4ef6\u5c5e\u6027\u503c\u3001\u7528\u6237\u53d8\u91cf\u5c5e\u6027\u503c\u53ef\u4f20\u6570\u7ec4\u7c7b\u578b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Android SDK 3.3.6",(0,n.kt)("br",null),"iOS SDK 3.3.6",(0,n.kt)("br",null),"Web JS SDK 3.3.10",(0,n.kt)("br",null),"\u5c0f\u7a0b\u5e8f SDK 3.3.5",(0,n.kt)("br",null)),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"OP-2.7.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301\u670d\u52a1\u7aefSDK\u57cb\u70b9\u4e8b\u4ef6\u53ef\u4f20eventTime\u53c2\u6570"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Java SDK v1.0.11-cdp",(0,n.kt)("br",null)," PHP SDK v1.0.2",(0,n.kt)("br",null)," Python SDK v1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u91c7\u96c6\u6570\u636e\u52a0\u5bc6\u89e3\u5bc6\u529f\u80fd\u4ea7\u54c1\u9700\u8981\u5347\u7ea7\u5230 14.3.0 \u4e4b\u540e\uff0c Android SDK 3.3.0\u4e4b\u540e\uff0c iOS  SDK 3.3.0\u4e4b\u540e")))}c.isMDXComponent=!0}}]);