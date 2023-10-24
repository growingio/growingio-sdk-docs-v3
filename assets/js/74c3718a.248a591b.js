"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),r=n(6010),i=n(2389),l=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:k}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,o.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==N&&(E(t),T(a),null!=g&&w(g,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:D,onClick:P},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},1719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),i=n(5162);const l={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},s=void 0,p={unversionedId:"giokit/ios/integrate",id:"giokit/ios/integrate",title:"\u5982\u4f55\u96c6\u6210",description:"\u96c6\u6210 GioKit",source:"@site/docs/giokit/ios/integrate.md",sourceDirName:"giokit/ios",slug:"/giokit/ios/integrate",permalink:"/growingio-sdk-docs-v3/docs/giokit/ios/integrate",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/giokit/ios/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs-v3/docs/giokit/ios/version"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/growingio-sdk-docs-v3/docs/giokit/web"}},c={},u=[{value:"\u96c6\u6210 GioKit",id:"\u96c6\u6210-giokit",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u5f00\u542f\u6027\u80fd\u76d1\u63a7",id:"\u5f00\u542f\u6027\u80fd\u76d1\u63a7",level:2}],d=(m="ImageLoader",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const g={toc:u};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u96c6\u6210-giokit"},"\u96c6\u6210 GioKit"),(0,o.kt)("p",null,"GioKit \u4ee3\u7801\u5df2\u6258\u7ba1\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-toolskit"},"Github")," \u4e0a\uff0c\u6b22\u8fce star, fork \u4e00\u6ce2\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u73af\u5883"),"\n",(0,o.kt)("strong",{parentName:"p"},"Xcode 9.0 \u53ca\u4ee5\u4e0a"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"iOS 9.0 \u53ca\u4ee5\u4e0a"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u5728 ",(0,o.kt)("a",{parentName:"strong",href:"/docs/ios/Introduce"},"iOS SDK")," \u57fa\u7840\u4e0a\u4f7f\u7528 GioKit"))),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"\u5728\u60a8\u7684 Podfile \u6587\u4ef6\u4e2d\u6dfb\u52a0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GrowingToolsKit', :configurations => ['Debug']\n")),(0,o.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\n\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"pod update"))),(0,o.kt)(i.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 Xcode \u83dc\u5355\u680f\u70b9\u51fb File -> Add Packages... \u6216\u9009\u62e9\u5de5\u7a0b -> \u5bf9\u5e94 Project -> Package Dependencies -> \u70b9\u51fb \u2795")),(0,o.kt)(d,{path:"img/ios/add_package_dependencies",mdxType:"ImageLoader"}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u641c\u7d22 GrowingToolsKit SDK GitHub \u5730\u5740")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/growingio/growingio-sdk-ios-toolskit.git\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5e76\u8bbe\u7f6e Dependency Rule \u4e3a Branch master\uff0cAdd to Project \u9009\u62e9\u60a8\u6240\u9700\u8981\u7684 Project")),(0,o.kt)(d,{path:"img/giokit/ios/set_dependency_rule",mdxType:"ImageLoader"}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4e0b\u65b9\u7684 Add Package \u6309\u94ae\uff0c\u9009\u62e9 GrowingToolsKit\uff0c\u518d\u6b21\u70b9\u51fb Add Package \u6309\u94ae")),(0,o.kt)(d,{path:"img/giokit/ios/add_package_giokit",mdxType:"ImageLoader"}),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u5728 TARGETS -> Build Settings -> Other Linker Flags \u4e2d\u6dfb\u52a0 -ObjC")))),(0,o.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"\u5728\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate.m")," \u5bfc\u5165 GrowingToolsKit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"#ifdef DEBUG\n#import <GrowingToolsKit/GrowingToolsKit.h>\n#endif\n")),(0,o.kt)("p",null,"\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," \u65b9\u6cd5\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"#ifdef DEBUG\n    [GrowingToolsKit start];\n#endif\n"))),(0,o.kt)(i.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",mdxType:"TabItem"},(0,o.kt)("p",null,"\u5728\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate.swift")," \u5bfc\u5165 GrowingToolsKit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"#if DEBUG\nimport GrowingToolsKit\n#endif\n")),(0,o.kt)("p",null,"\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5728\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," \u65b9\u6cd5\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"#if DEBUG\n    GrowingToolsKit.start()\n#endif\n")))),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u907f\u514d\u5728\u6b63\u5f0f\u73af\u5883\u4e0b\u51fa\u73b0\u4e0d\u5fc5\u8981\u7684\u9519\u8bef\uff0c\u8bf7\u52a1\u5fc5\u53ea\u5728 Debug \u73af\u5883\u4e0b\u4f7f\u7528 GioKit \u5de5\u5177\u3002")),(0,o.kt)("h2",{id:"\u5f00\u542f\u6027\u80fd\u76d1\u63a7"},"\u5f00\u542f\u6027\u80fd\u76d1\u63a7"),(0,o.kt)("p",null,"\u5982\u60a8\u9700\u8981\u5f00\u542f\u6027\u80fd\u76f8\u5173\u76d1\u63a7\uff0c\u8bf7\u524d\u5f80 GioKit -> \u901a\u7528\u8bbe\u7f6e \u5f00\u542f\u6240\u9700\u76d1\u63a7\u529f\u80fd\u3002"))}k.isMDXComponent=!0}}]);