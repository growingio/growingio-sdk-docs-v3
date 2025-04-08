"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),o=r(7294),a=r(6010),i=r(2389),l=r(7392),s=r(7094),c=r(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:i,defaultValue:d,values:m,groupId:g,className:f}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,l.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,T]=(0,o.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=g){const e=k[g];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==O&&(N(t),T(n),null!=g&&w(g,String(n)))},D=e=>{var t;let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},f)},v.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:D,onClick:x},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,o.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),a=r(5488),i=r(5162);const l={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},s=void 0,c={unversionedId:"giokit/harmonyos/integrate",id:"giokit/harmonyos/integrate",title:"\u5982\u4f55\u96c6\u6210",description:"\u96c6\u6210 GioKit",source:"@site/docs/giokit/harmonyos/integrate.md",sourceDirName:"giokit/harmonyos",slug:"/giokit/harmonyos/integrate",permalink:"/growingio-sdk-docs-v3/docs/giokit/harmonyos/integrate",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/giokit/harmonyos/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs-v3/docs/giokit/harmonyos/version"},next:{title:"\u6d4b\u91cf\u534f\u8bae",permalink:"/growingio-sdk-docs-v3/docs/Measurement Protocol"}},u={},p=[{value:"\u96c6\u6210 GioKit",id:"\u96c6\u6210-giokit",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u96c6\u6210-giokit"},"\u96c6\u6210 GioKit"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"remote",label:"\u901a\u8fc7 ohpm \u4e2d\u5fc3\u4ed3\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"ohpm install @growingio/tools\n"))),(0,o.kt)(i.Z,{value:"local",label:"\u901a\u8fc7\u672c\u5730 har \u96c6\u6210",mdxType:"TabItem"},(0,o.kt)("p",null,"\u9996\u5148\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301\uff0c\u83b7\u53d6\u6700\u65b0 SDK har \u9759\u6001\u5171\u4eab\u5305\u4e0b\u8f7d\u5730\u5740\u5e76\u4e0b\u8f7d\uff0c\u518d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"ohpm install <\u60a8\u6240\u4e0b\u8f7d\u7684 har \u6587\u4ef6\u8def\u5f84>\n")))),(0,o.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u5728\u521d\u59cb\u5316 GrowingIO HarmonyOS 5 SDK \u65f6\u6dfb\u52a0 GrowingToolsKit\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let config = new GrowingConfig().CDP(\n  'Your AccountId',\n  'Your DataSourceId',\n  'Your UrlScheme',\n  'Your DataCollectionServerHost'\n)\nconfig.plugins = [new GrowingToolsKit()]\nGrowingAnalytics.start(this.context, config)\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8bf7\u4ec5\u5728 DEBUG \u73af\u5883\u4e0b\u4f7f\u7528 GrowingToolsKit\uff0cRELEASE \u73af\u5883\u4e0b GrowingToolsKit \u5c06\u4e0d\u4f1a\u663e\u793a")))}m.isMDXComponent=!0}}]);