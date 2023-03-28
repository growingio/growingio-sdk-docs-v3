"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),r=n(6010),i=n(2389),l=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,l.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,a.useState)(y),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=g){const e=h[g];null!=e&&e!==w&&b.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=D.indexOf(t),o=b[n].value;o!==w&&(E(t),O(o),null!=g&&N(g,String(o)))},G=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]??D[D.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>D.push(e),onKeyDown:G,onClick:T},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},1719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));n(5488),n(5162);const r={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},i=void 0,l={unversionedId:"giokit/ios/integrate",id:"giokit/ios/integrate",title:"\u5982\u4f55\u96c6\u6210",description:"\u96c6\u6210 GioKit",source:"@site/docs/giokit/ios/integrate.md",sourceDirName:"giokit/ios",slug:"/giokit/ios/integrate",permalink:"/growingio-sdk-docs-saas/docs/giokit/ios/integrate",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/docs/giokit/ios/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs-saas/docs/giokit/ios/version"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/growingio-sdk-docs-saas/docs/giokit/web"}},s={},p=[{value:"\u96c6\u6210 GioKit",id:"\u96c6\u6210-giokit",level:2},{value:"1. Cocoapods \u96c6\u6210",id:"1-cocoapods-\u96c6\u6210",level:3},{value:"2. \u521d\u59cb\u5316",id:"2-\u521d\u59cb\u5316",level:3},{value:"3.\u5f00\u542f\u6027\u80fd\u76d1\u63a7",id:"3\u5f00\u542f\u6027\u80fd\u76d1\u63a7",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u96c6\u6210-giokit"},"\u96c6\u6210 GioKit"),(0,a.kt)("p",null,"GioKit \u4ee3\u7801\u5df2\u6258\u7ba1\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-toolskit"},"Github")," \u4e0a\uff0c\u6b22\u8fce star, fork \u4e00\u6ce2\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u73af\u5883"),"\n",(0,a.kt)("strong",{parentName:"p"},"Xcode 9.0 \u53ca\u4ee5\u4e0a"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"iOS 9.0 \u53ca\u4ee5\u4e0a"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u5728 ",(0,a.kt)("a",{parentName:"strong",href:"/docs/ios/Introduce"},"iOS SDK")," \u57fa\u7840\u4e0a\u4f7f\u7528 GioKit"))),(0,a.kt)("h3",{id:"1-cocoapods-\u96c6\u6210"},"1. Cocoapods \u96c6\u6210"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Podfile")," \u4e2d\u6dfb\u52a0\u4f9d\u8d56\u5e93"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"GrowingIO iOS SDK \u7248\u672c\u5728 ",(0,a.kt)("strong",{parentName:"p"},"3.2.1 \u53ca\u4ee5\u4e0a"),", \u8bf7\u6dfb\u52a0"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GrowingToolsKit', :configurations => ['Debug']\n"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"GrowingIO iOS SDK \u7248\u672c\u5728 ",(0,a.kt)("strong",{parentName:"p"},"3.2.0 \u53ca\u4ee5\u4e0b"),"\uff0c\u8bf7\u6dfb\u52a0\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GrowingToolsKit/SDK30202', :configurations => ['Debug']\n"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"GrowingIO iOS SDK \u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"2.x"),"\uff0c\u8bf7\u6dfb\u52a0\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GrowingToolsKit/SDK2nd', :configurations => ['Debug']\n"))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u6839\u636e\u76f8\u5e94\u7684 GrowingIO iOS SDK \u9009\u62e9\u5bf9\u5e94\u7684\u4f9d\u8d56\uff0c\u8bf7\u4e0d\u8981\u4e00\u8d77\u4f7f\u7528\uff01\uff01")),(0,a.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\n\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"pod update")),(0,a.kt)("h3",{id:"2-\u521d\u59cb\u5316"},"2. \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u60a8\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"AppDelegate.m"),"\u5bfc\u5165 GrowingToolsKit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},"#ifdef DEBUG\n#import <GrowingToolsKit/GrowingToolsKit.h>\n#endif\n")),(0,a.kt)("p",null,"\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"AppDelegate"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:"),"\u65b9\u6cd5\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},"#ifdef DEBUG\n    [GrowingToolsKit start];\n#endif\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u907f\u514d\u5728\u6b63\u5f0f\u73af\u5883\u4e0b\u51fa\u73b0\u4e0d\u5fc5\u8981\u7684\u9519\u8bef\uff0c\u8bf7\u52a1\u5fc5\u53ea\u5728 Debug \u73af\u5883\u4e0b\u4f7f\u7528 GioKit \u5de5\u5177\u3002")),(0,a.kt)("h3",{id:"3\u5f00\u542f\u6027\u80fd\u76d1\u63a7"},"3.\u5f00\u542f\u6027\u80fd\u76d1\u63a7"),(0,a.kt)("p",null,"\u5982\u60a8\u9700\u8981\u5f00\u542f\u6027\u80fd\u76f8\u5173\u76d1\u63a7\uff0c\u8bf7\u524d\u5f80 GioKit -> \u901a\u7528\u8bbe\u7f6e \u5f00\u542f\u6240\u9700\u76d1\u63a7\u529f\u80fd\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"SDK 2.x \u9ed8\u8ba4\u91c7\u96c6\u6a21\u5f0f\u4e0e\u6027\u80fd\u76d1\u63a7\u63d2\u4ef6\u4e0d\u517c\u5bb9\uff0c\u9700\u8981\u5728 main \u51fd\u6570\u6dfb\u52a0\u4ee3\u7801\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"// SDK 2.0 GrowingAspectModeSubClass \u4e0e\u6027\u80fd\u76d1\u63a7\u63d2\u4ef6\u4e0d\u517c\u5bb9\n[Growing setAspectMode:GrowingAspectModeDynamicSwizzling];\n"))))}u.isMDXComponent=!0}}]);