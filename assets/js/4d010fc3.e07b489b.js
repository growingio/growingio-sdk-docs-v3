"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[392],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},A=Object.keys(e);for(n=0;n<A.length;n++)a=A[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(n=0;n<A.length;n++)a=A[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,A=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(a),c=r,u=g["".concat(o,".").concat(c)]||g[c]||s[c]||A;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var A=a.length,l=new Array(A);l[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<A;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const A="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(A,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),A=a(6010),l=a(2389),i=a(7392),o=a(7094),p=a(2466);const d="tabList__CuJ",s="tabItem_LNqP";function g(e){var t;const{lazy:a,block:l,defaultValue:g,values:c,groupId:u,className:m}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),B=c??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),E=(0,i.l)(B,((e,t)=>e.value===t.value));if(E.length>0)throw new Error(`Docusaurus error: Duplicate values "${E.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===g?g:g??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!B.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${B.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:Q,setTabGroupChoices:C}=(0,o.U)(),[N,b]=(0,r.useState)(f),v=[],{blockElementScrollPositionUntilNextRender:h}=(0,p.o5)();if(null!=u){const e=Q[u];null!=e&&e!==N&&B.some((t=>t.value===e))&&b(e)}const I=e=>{const t=e.currentTarget,a=v.indexOf(t),n=B[a].value;n!==N&&(h(t),b(n),null!=u&&C(u,String(n)))},w=e=>{var t;let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=v.indexOf(e.currentTarget)+1;a=v[t]??v[0];break}case"ArrowLeft":{const t=v.indexOf(e.currentTarget)-1;a=v[t]??v[v.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,A.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,A.Z)("tabs",{"tabs--block":l},m)},B.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>v.push(e),onKeyDown:w,onClick:I},l,{className:(0,A.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,l.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},9164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905)),A=a(5488),l=a(5162);const i={sidebar_position:5,title:"\u5e7f\u544a\u6a21\u5757"},o=void 0,p={unversionedId:"ios/modules/Advert Module",id:"ios/modules/Advert Module",title:"\u5e7f\u544a\u6a21\u5757",description:"\u5e7f\u544a\u6a21\u5757\u5305\u62ec\u6fc0\u6d3b\u4e8b\u4ef6\u548c\u6df1\u5ea6\u94fe\u63a5 (DeepLink)\uff0c\u6fc0\u6d3b\u4e8b\u4ef6\u662f\u5f53\u7528\u6237\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u6709\u4e14\u4ec5\u53d1\u4e00\u6b21\u7684\u4e8b\u4ef6\uff0c\u6df1\u5ea6\u94fe\u63a5\u662f\u63d0\u4f9b\u5ba2\u6237\u901a\u8fc7\u6d3b\u52a8\u7f51\u9875\u7b49\u5f62\u5f0f\u63d0\u4f9b App \u6e20\u9053\u7684\u8df3\u8f6c\u548c\u4e0b\u8f7d\u3002 \u5728\u6df1\u5ea6\u94fe\u63a5\u6280\u672f\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App \u5e76\u8df3\u8f6c\u81f3\u6307\u5b9a\u9875\u9762\uff0c\u540c\u65f6\u6839\u636e\u6761\u4ef6\u5224\u65ad\u7528\u6237\u8df3\u8f6c\u8def\u5f84\uff0c\u5f53\u7528\u6237\u5df2\u7ecf\u5b89\u88c5 App \u65f6\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App\uff0c\u5f53\u7528\u6237\u672a\u5b89\u88c5 App \u65f6\u4f1a\u5f15\u5bfc\u7528\u6237\u4e0b\u8f7d App\u3002",source:"@site/docs/ios/modules/Advert Module.md",sourceDirName:"ios/modules",slug:"/ios/modules/Advert Module",permalink:"/growingio-sdk-docs-saas/docs/ios/modules/Advert Module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/docs/ios/modules/Advert Module.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u5e7f\u544a\u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"Debugger \u6a21\u5757",permalink:"/growingio-sdk-docs-saas/docs/ios/modules/MobileDebugger Module"},next:{title:"\u6027\u80fd\u76d1\u63a7\u6a21\u5757",permalink:"/growingio-sdk-docs-saas/docs/ios/modules/APM Module"}},d={},s=[{value:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e",id:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e",level:3},{value:"\u6a21\u5757\u96c6\u6210",id:"\u6a21\u5757\u96c6\u6210",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:3},{value:"\u4e3b\u52a8\u89e6\u53d1 DeepLink",id:"\u4e3b\u52a8\u89e6\u53d1-deeplink",level:3},{value:"\u83b7\u53d6 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790",id:"\u83b7\u53d6-apple-search-ads-\u5f52\u56e0\u6570\u636e\u5206\u6790",level:3},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e-1",level:3},{value:"\u4e3b\u52a8\u89e6\u53d1 DeepLink",id:"\u4e3b\u52a8\u89e6\u53d1-deeplink-1",level:3},{value:"\u83b7\u53d6 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790",id:"\u83b7\u53d6-apple-search-ads-\u5f52\u56e0\u6570\u636e\u5206\u6790-1",level:3}],g={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5e7f\u544a\u6a21\u5757\u5305\u62ec\u6fc0\u6d3b\u4e8b\u4ef6\u548c\u6df1\u5ea6\u94fe\u63a5 (DeepLink)\uff0c\u6fc0\u6d3b\u4e8b\u4ef6\u662f\u5f53\u7528\u6237\u5e94\u7528\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u6709\u4e14\u4ec5\u53d1\u4e00\u6b21\u7684\u4e8b\u4ef6\uff0c\u6df1\u5ea6\u94fe\u63a5\u662f\u63d0\u4f9b\u5ba2\u6237\u901a\u8fc7\u6d3b\u52a8\u7f51\u9875\u7b49\u5f62\u5f0f\u63d0\u4f9b App \u6e20\u9053\u7684\u8df3\u8f6c\u548c\u4e0b\u8f7d\u3002 \u5728\u6df1\u5ea6\u94fe\u63a5\u6280\u672f\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App \u5e76\u8df3\u8f6c\u81f3\u6307\u5b9a\u9875\u9762\uff0c\u540c\u65f6\u6839\u636e\u6761\u4ef6\u5224\u65ad\u7528\u6237\u8df3\u8f6c\u8def\u5f84\uff0c\u5f53\u7528\u6237\u5df2\u7ecf\u5b89\u88c5 App \u65f6\u53ef\u4ee5\u76f4\u63a5\u5524\u8d77 App\uff0c\u5f53\u7528\u6237\u672a\u5b89\u88c5 App \u65f6\u4f1a\u5f15\u5bfc\u7528\u6237\u4e0b\u8f7d App\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5e73\u53f0\u7248\u672c >=4.0 \u652f\u6301\uff0c\u4ea7\u54c1\u4f7f\u7528\u6587\u6863\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.growingio.com/op-help/docs/4.0/product-manual/acquisition-analytics/acquisition-tracing/tracking-deeplink"},"\u6df1\u5ea6\u94fe\u63a5")),(0,r.kt)("p",{parentName:"admonition"},"\u91c7\u96c6 SDK \u7248\u672c >=3.4.7"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6 SDK \u7248\u672c\u4fdd\u6301\u4e00\u81f4"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"},"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"\u83b7\u5ba2\u5206\u6790 -> \u4ea7\u54c1\u914d\u7f6e -> \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e"),"\uff0c\u8fdb\u5165\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u9875\u9762"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"config_deeplink",src:a(7226).Z,width:"1032",height:"484"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u627e\u5230\u9700\u8981\u914d\u7f6e\u7684 iOS \u5e94\u7528\uff0c\u70b9\u51fb\u66f4\u591a\u4fe1\u606f\uff0c\u67e5\u770b\u5f53\u524d\u5e94\u7528\u7684\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb Universal Link \u7f16\u8f91\u6309\u94ae\uff0c\u83b7\u53d6 Team ID \u5e76\u586b\u5165\u8868\u5355\u4e2d"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"config_universal_link",src:a(8535).Z,width:"1598",height:"1094"})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u5982\u4f55\u83b7\u53d6 Team ID"),(0,r.kt)("p",null,"\u5728\u82f9\u679c\u5f00\u53d1\u8005\u7f51\u7ad9\u4e2d\u627e\u5230 Team ID \u4e0e Bundle ID\n",(0,r.kt)("img",{alt:"config_team_id",src:a(8023).Z,width:"1719",height:"1386"}))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u590d\u5236 Link")," \u6309\u94ae\uff0c\u5728\u60a8\u7684 Xcode \u9879\u76ee\u914d\u7f6e\u4e2d\u6253\u5f00 ",(0,r.kt)("strong",{parentName:"p"},"Associated Domains")," \u529f\u80fd\uff0c\u5e76\u5c06\u6240\u590d\u5236\u7684 Link \u6dfb\u52a0\u5230 Associated Domains \u5217\u8868\u4e2d"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"associated_domains",src:a(9783).Z,width:"785",height:"597"}),"\n",(0,r.kt)("img",{alt:"associated_domains2",src:a(5451).Z,width:"604",height:"155"})))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u52fe\u9009",(0,r.kt)("strong",{parentName:"li"},"\u6211\u5df2\u5b8c\u6210 Xcode \u914d\u7f6e\uff0c\u5141\u8bb8 Universal Link \u8df3\u8f6c"),"\uff0c\u70b9\u51fb\u4fdd\u5b58")),(0,r.kt)("h3",{id:"\u6a21\u5757\u96c6\u6210"},"\u6a21\u5757\u96c6\u6210"),(0,r.kt)(A.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Cocoapods \u5b89\u88c5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pod 'GrowingAnalytics/Advert'\n")),(0,r.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"pod update")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 AppDelegate.m \u4e2d\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},'#import "GrowingAdvertising.h"'))),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"\u5e7f\u544a\u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u76f8\u5173\u914d\u7f6e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readClipboardEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"YES")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deepLinkHost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSString")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5730\u5740\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn"},"https://n.datayi.cn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deepLinkCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Block")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithProjectId:@"YourAccountId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\n\n// \u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f\nconfiguration.readClipboardEnabled = YES;\n// \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5730\u5740\nconfiguration.deepLinkHost = @"Your DeepLinkHost";\n// \u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570\nconfiguration.deepLinkCallback = ^(NSDictionary * _Nullable params, \n                                   NSTimeInterval processTime, \n                                   NSError * _Nullable error) {\n};\n\n[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u89e6\u53d1-deeplink"},"\u4e3b\u52a8\u89e6\u53d1 DeepLink"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u6cd5\u624b\u52a8\u53d1\u9001 DeepLink \u4e8b\u4ef6\uff0c\u8be5\u63a5\u53e3\u5e38\u7528\u4e8e\u5e94\u7528\u5185\u90e8\u5e7f\u544a\u83b7\u5ba2\u63a5\u6536"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"doDeeplinkByUrl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSURL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5URL\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn/k4wudMXn"},"https://n.datayi.cn/k4wudMXn"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'[[GrowingAdvertising sharedInstance] doDeeplinkByUrl:[NSURL URLWithString:@"Your DeepLinkUrl"]\n                                            callback:^(NSDictionary * _Nullable params,\n                                                       NSTimeInterval processTime,\n                                                       NSError * _Nullable error) {\n        \n}];\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6-apple-search-ads-\u5f52\u56e0\u6570\u636e\u5206\u6790"},"\u83b7\u53d6 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790"),(0,r.kt)("p",null,"\u5982\u60a8\u9700\u8981\u4f7f\u7528 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790\uff0c\u5728 SDK \u521d\u59cb\u5316\u65f6\u6253\u5f00 ASAEnabled \u5f00\u5173\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithProjectId:@"YourAccountId"];\nconfiguration.dataCollectionServerHost = @"YourServerHost";\nconfiguration.dataSourceId = @"YourDatasourceId";\n\n// \u6253\u5f00 ASAEnabled \u5f00\u5173\nconfiguration.ASAEnabled = YES;\n\n[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];\n')),(0,r.kt)("p",null,"\u5728 Target -> Build Phases -> Link Binary With Libraries\uff0c\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"p"},"iAd.framework")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"AdServices.framework"),"\uff0c\u5e76\u8bbe\u7f6e AdServices.framework status \u4e3a ",(0,r.kt)("strong",{parentName:"p"},"Optional")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AdServices Framework",src:a(3289).Z,width:"706",height:"196"}))),(0,r.kt)(l.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"li"},"GrowingModule_Advert")," Package")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add Package",src:a(2638).Z,width:"400",height:"460"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 AppDelegate.swift \u4e2d\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"import GrowingModule_Advert"))),(0,r.kt)("h3",{id:"\u6a21\u5757\u914d\u7f6e-1"},"\u6a21\u5757\u914d\u7f6e"),(0,r.kt)("p",null,"\u5e7f\u544a\u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u76f8\u5173\u914d\u7f6e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readClipboardEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Bool")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deepLinkHost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5730\u5740\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn"},"https://n.datayi.cn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deepLinkCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Closures")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let config = GrowingAutotrackConfiguration(projectId: "YourAccountId")\nconfig?.dataCollectionServerHost = "YourServerHost"\nconfig?.dataSourceId = "YourDatasourceId"\n\n// \u662f\u5426\u5141\u8bb8\u8bfb\u53d6\u526a\u5207\u677f\u7684\u5e94\u7528\u4fe1\u606f\nconfig?.readClipboardEnabled = true\n// \u6df1\u5ea6\u94fe\u63a5\u914d\u7f6e\u5730\u5740\nconfig?.deepLinkHost = "Your DeepLinkHost"\n// \u76d1\u542c\u6df1\u5ea6\u94fe\u63a5\u4e2d\u7684\u5730\u5740\u53c2\u6570\nconfig?.deepLinkCallback = { (params: [AnyHashable : Any]?, \n                              processTime: TimeInterval, \n                              error: Error?) -> Void in\n}\n\nGrowingAutotracker.start(with: config!, launchOptions: launchOptions ?? [:])\n')),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u89e6\u53d1-deeplink-1"},"\u4e3b\u52a8\u89e6\u53d1 DeepLink"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u6cd5\u624b\u52a8\u53d1\u9001 DeepLink \u4e8b\u4ef6\uff0c\u8be5\u63a5\u53e3\u5e38\u7528\u4e8e\u5e94\u7528\u5185\u90e8\u5e7f\u544a\u83b7\u5ba2\u63a5\u6536"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"doDeeplink")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"URL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6df1\u5ea6\u94fe\u63a5URL\uff0c\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://n.datayi.cn/k4wudMXn"},"https://n.datayi.cn/k4wudMXn"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let callback = { (params: [AnyHashable : Any]?, \n                  processTime: TimeInterval, \n                  error: Error? ) -> Void in\n}\nGrowingAdvertising.sharedInstance().doDeeplink(by: URL(string: "Your DeepLinkUrl")!, callback: callback)\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6-apple-search-ads-\u5f52\u56e0\u6570\u636e\u5206\u6790-1"},"\u83b7\u53d6 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790"),(0,r.kt)("p",null,"\u5982\u60a8\u9700\u8981\u4f7f\u7528 Apple Search Ads \u5f52\u56e0\u6570\u636e\u5206\u6790\uff0c\u5728 SDK \u521d\u59cb\u5316\u65f6\u6253\u5f00 ASAEnabled \u5f00\u5173\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let config = GrowingAutotrackConfiguration(projectId: "YourAccountId")\nconfig?.dataCollectionServerHost = "YourServerHost"\nconfig?.dataSourceId = "YourDatasourceId"\n\n// \u6253\u5f00 ASAEnabled \u5f00\u5173\nconfig?.ASAEnabled = true\n\nGrowingAutotracker.start(with: config!, launchOptions: launchOptions ?? [:])\n')),(0,r.kt)("p",null,"\u5728 Target -> Build Phases -> Link Binary With Libraries\uff0c\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"p"},"iAd.framework")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"AdServices.framework"),"\uff0c\u5e76\u8bbe\u7f6e AdServices.framework status \u4e3a ",(0,r.kt)("strong",{parentName:"p"},"Optional")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AdServices Framework",src:a(3289).Z,width:"706",height:"196"})))))}c.isMDXComponent=!0},7226:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/product_config_deeplink-4ae54cd8529f73623d9df9699de28718.png"},2638:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_package_advert-cf0c2fa3b81c840e7a7e6ca2ab16f8fa.png"},3289:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adservices_framework-f9957ded8076f2897a019756b1570edf.png"},9783:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/associated_domains-ed0c4cc5ad52fd6b4ad22d4ad5e3feb4.png"},5451:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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0PX888/7Yw0IaebtzTfftEGDBtlTTz1l8+fPz/rMeZtS1HorjUalluBDvax5TwWsX3/91U455RR75513TMfTaM2iRYtMAWvJkiX2xhtvWOfOnU3h5d1337VOnTqlni7j89dee634NT3eaaedip//Gw/OPvtsO+6442zDDTcs9XQ//vijt3fHHXe0HXbYodR9c31x2223tXr16vmU7ffff29K8QpoFV122WUXe//99/3cFX0ujo8AAggggMDaCBx66KH26KOP2hFHHGHVqlXz6cQ///zTR7eWL1/uv5999llr3769bbrpplmfKi8jXBrB0Afqzz//nHRihabx48fb119/nbQ93ZPPPvvM9tlnH2vWrJm1aNHCw1SPHj08xKnRerzxxhubRmjatWtnkyZN8sCQ7ljptilkNWnSxN+vkaBgAZzqfu655/r6MI2s9e3b11atWuWjPxpp0rbddtvN9/nll1/80NOnT7dTTz3Vdt55Z1PHKA0H5YsvvvC66rWDDjrIXn75ZX/p8ccft6OOOsoUqBR07r33Xu8sBb8TTzzRR+AmT55st9xyi+9/++232wMPPOCPX331VTv88MNNwUVDm5qiU1GYvfLKK23vvfe2E044oYS/75Twz8knn+yp/K233nIL/cGo/SqZ2vTJJ59Yx44dfdRNYXfPPfe0F154wXr16uWhtXv37ha4yFWjZ5oC7tq1q40ZM8aPrb7VaKVG2oLjqZ1dunRxgyeeeML3U3symfsO/IMAAggggEAFC2iduL6sV6NGDdNnusrEiRM9eH388ce2/vrre04oawAltZp5CVwNGza0xo0b+zRYELr04fn555/7+TbffPPU85Z4/tNPP9lmm21mSpEaslODqlev7t9M1OhYnTp1fDpOr+uxUmfiovoSB0zYoAVvmlJUcNCPhgC1MF9Fw4Ka6tMHvcKDMBV8FBQ1sqawd9NNN/mc7SuvvOIhRwvmFCIvu+wyq1u3rl177bX20Ucf+TTnGWec4aFKr9WvX98DkUy0/ky/AxcNSWqE7vLLL/fz3XfffW4YjNodcMAB/gUBTTFqHxlrGlDTcgqIKlrPFkwXKuApSGVTNtlkEw9A2lfr5VSn0tqkemtK8Nhjj/Vva1x33XXeBwceeKAHXwUwTfEOGDDAmjdv7qFR/xcgF4VL9ZmOoW+caj891kJEhUi9fvfdd9sf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EEAAAQRCJEDgClFnUBUEEEAAAQQQiKdAjXg2i1bFQaCoqCgOzaANCCBQyQKFhYWVXANOj4BZwT9rChAIIIAAAggggAACFSfAlGLF2Va5I8+aNcsmTpxY5dpNgxFAAAEEEChLgMBVllAEX7/lllusdevW/tOmTRvr2bOnTZo0qcJbMnr0aBs8eHCFn4cTIIAAAgggEDUBphSj1mNZ1LdPnz5Wu3Zt69Wrl82ePduGDh1qw4YNsyFDhljz5s2zOAK7IIAAAggggEA+BRjhyqdmiI61zjrreOhq1aqVXXHFFaaRrueee85r+Mcff9hFF11ke+yxh3Xr1s1ee+013z59+nQ7+uijPajtvPPOdumll9rjjz9ue+65p7Vv394mTJjg+y1atMhHzXbZZRfr0KGDvfzyy779pZdeMo2uqVx11VV2/fXX++udOnWy559/3rf//fffpkC47777Wtu2bW3QoEG+nX8QQAABBBCIswCBK869m9A2BaZp06b5FgWe6tWr2zvvvGM33HCDB6MZM2bYypUr7YsvvrDu3bvb22+/7euxpkyZYuPHj7fjjjvOBg4c6O//7LPPbMstt7QPPvjArr76auvbt6/puxfLli2z33//3fdZvHix/fjjjzZ8+HDf56677rJVq1aZ3jtmzBh766237Nlnn7XPP//c/vzzz4Sa8hABBBBAAIH4CRC44tenaVtUs2ZNW7Fihb/20Ucf2RlnnGF16tTxUa7dd9/dPv30U3+tUaNGts8++9jGG29sGh3r3Lmzj5RpNOy3337zfTSqpVGvp59+2teGKWSlC00aPdtggw18lKugoMBmzpxpm222mS1dutRDnsJcMP2ZttJsRAABBBBAICYCBK6YdGRZzfjkk09shx128N00kqURrqDosUafVGrUSL40W7VqJf9E7rvvPrv99ttNIapFixbBYUr8rlWrVvE2PdYoWOPGje3111+3nXbayV544QXr2rVr8ahY8c48QAABBBBAIGYCJT9NY9bAqt6cuXPn2mOPPWYjR460Y445xjl23XVXX1O1evVq++GHH0xhTOuxsi1Tp061Qw891M4880zTWrFcii4bofVcPXr0sIcfftg09Th//vxcDsG+CCCAAAIIRE6AwBW5Liu7whp5UpjZZptt7PDDD/dA9cgjj9i2227rb9a6rW+++cb22msvO+mkk+zCCy+0rbbayl/Te4OS6fGpp55qjz76qE89aq1XppL6fj1v2bKlL77XgnlNVx511FE+dZnpGGxHAAEEEEAgDgJcFiIOvVjONixfvtzXZyUGo2wPpW8b6v1aB1aeogX2WleWOoVZnmPxHgQQQAABBMIuQOAKew9RPwQQQAABBBCIvABTipHvQhqAAAIIIIAAAmEXIHCFvYeoX+gEdO2wn376yev18ccfFz/OVNE5c+aYvmhAyZ/AqFGj/Lpv5T3i2r6/vOflfQggUHUFCFxVt+9peTkFnnjiCRs3bpy/W98ALe2LA9rp/fffL75obDlPydsSBP766y+/o8H333+fsDX7h2v7/uzPxJ4IIIDA/wWSL7r0/+08QgCBLAT07U/Kvyuga7q999575T7p2r6/3CfmjQggUKUFGOGq0t1fdRp/2223+f0kdSkMPdZFWIN7R+pek7p35LHHHmtff/21o+haYb1797YTTjjBX+vZs6dfIT9V7LrrrrNXXnnFNx900EF+5Xxdhf/4448vvnp/4ns0MnbEEUeYphl1pf3DDjvMr/av65L9/PPPxefWVGUUy4IFC/z6bPI8+eST/ZIjugacinx0Kyhd801TrPLXbaS0r37rucqJJ57ot5jSY/XVzTffrId+KRPdYkpFdzGQod6jS4tcfPHFpuvLnX/++fbLL7/4PqXVJXi/dtS9RPVcd1zQJVJ0r9F0RRf8bdeunV8O5c477zRdx05/J3qP6qB+150TKAgggEA6AQJXOhW2xUpg1qxZflsiBaNhw4bZiy++6MFKV9zXeqytt97a7wt5wAEH+E291XhdtmL06NF2ySWX+L0kte2OO+7Qr6SiC7cGtzXSB71GT8aOHeshasCAAUn7vvvuu3bTTTeZPqx1i6O7777bL0arWy117NjR712pN3z44Yf25ZdfJr03Kk9uvPFGq1+/vl9rTSFV9+vU5UNU5LP++uv7dOz2229v55xzjnXp0sXt9VvPVXRNON2nU0X33dSUrQKynHQPTxUdS3dHCO7/qQvxaj/dNmrEiBG+T1l10ftnrLmHqEKzbrSuftNdF4KA5wf53z/6u1Ew0w3gFbLefPNNr5v+TnTh4Hvuucf/rl599VX/m0p8L48RQAABCRC4+DuIvUCzZs181EUfmApb+lCeN2+et3u99daz008/3dZdd13/wJ89e7b9+uuv/pruKakR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"},8023:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config_team_id-983d292ccae270d2485a8302fba105c8.webp"},8535:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config_universal_link-3140457e65c46940b0b376215870c07c.png"}}]);