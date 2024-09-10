"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:f,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[N,O]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&y.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==N&&(T(t),O(r),null!=f&&w(f,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:D,onClick:S},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},s=void 0,u={unversionedId:"framework/harmonyos/Introduce",id:"framework/harmonyos/Introduce",title:"\u5982\u4f55\u96c6\u6210",description:"SDK \u96c6\u6210",source:"@site/docs/framework/harmonyos/Introduce.md",sourceDirName:"framework/harmonyos",slug:"/framework/harmonyos/Introduce",permalink:"/growingio-sdk-docs-v3/docs/framework/harmonyos/Introduce",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/framework/harmonyos/Introduce.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u96c6\u6210"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs-v3/docs/framework/harmonyos/version"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs-v3/docs/framework/harmonyos/Configuration"}},c={},p=[{value:"SDK \u96c6\u6210",id:"sdk-\u96c6\u6210",level:3},{value:"\u914d\u7f6e\u6807\u51c6\u5316 OHMUrl",id:"\u914d\u7f6e\u6807\u51c6\u5316-ohmurl",level:3},{value:"\u914d\u7f6e\u6743\u9650",id:"\u914d\u7f6e\u6743\u9650",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u67e5\u770b\u96c6\u6210\u6548\u679c",id:"\u67e5\u770b\u96c6\u6210\u6548\u679c",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"sdk-\u96c6\u6210"},"SDK \u96c6\u6210"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"remote",label:"\u901a\u8fc7 ohpm \u4e2d\u5fc3\u4ed3\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"ohpm install @growingio/analytics\n"))),(0,a.kt)(l.Z,{value:"local",label:"\u901a\u8fc7\u672c\u5730 har \u96c6\u6210",mdxType:"TabItem"},(0,a.kt)("p",null,"\u9996\u5148\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301\uff0c\u83b7\u53d6\u6700\u65b0 SDK har \u9759\u6001\u5171\u4eab\u5305\u4e0b\u8f7d\u5730\u5740\u5e76\u4e0b\u8f7d\uff0c\u518d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"ohpm install <\u60a8\u6240\u4e0b\u8f7d\u7684 har \u6587\u4ef6\u8def\u5f84>\n")))),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6807\u51c6\u5316-ohmurl"},"\u914d\u7f6e\u6807\u51c6\u5316 OHMUrl"),(0,a.kt)("p",null,"\u5728\u5de5\u7a0b\u7ea7 build-profile.json5 \u4e2d\u914d\u7f6e useNormalizedOHMUrl \u4e3a true"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "app": {\n    "products": [\n      {\n        "buildOption": {\n          "strictMode": {\n            "useNormalizedOHMUrl": true\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6743\u9650"},"\u914d\u7f6e\u6743\u9650"),(0,a.kt)("p",null,"\u5728 module.json5 \u4e2d\u914d\u7f6e\u6240\u9700\u6743\u9650\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'"requestPermissions": [\n  {\n    "name": "ohos.permission.INTERNET"\n  },\n  {\n    "name": "ohos.permission.GET_NETWORK_INFO"\n  }\n]\n')),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728 AbilityStage \u7684 onCreate \u65b9\u6cd5\u4e2d\u521d\u59cb\u5316 SDK (Stage \u6a21\u578b)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import AbilityStage from '@ohos.app.ability.AbilityStage'\nimport type Want from '@ohos.app.ability.Want'\nimport { GrowingAnalytics, GrowingConfig } from '@growingio/analytics'\n\n// Entry\u7c7b\u578b\u7684module\u5bf9\u5e94\u914d\u7f6e\u7684srcEntry\nexport default class MyAbilityStage extends AbilityStage {\n  onCreate(): void {\n    // \u5e94\u7528\u7684HAP\u5728\u9996\u6b21\u52a0\u8f7d\u7684\u65f6\uff0c\u4e3a\u8be5Module\u521d\u59cb\u5316\u64cd\u4f5c\n    this.startAnalytics()\n  }\n  onAcceptWant(want: Want): string {\n    // \u4ec5specified\u6a21\u5f0f\u4e0b\u89e6\u53d1\n    return 'MyAbilityStage'\n  }\n\n  startAnalytics() {\n    let config = new GrowingConfig().CDP(\n      'Your AccountId',\n      'Your DataSourceId',\n      'Your UrlScheme',\n      'Your DataCollectionServerHost'\n    )\n    GrowingAnalytics.start(this.context, config)\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u82e5\u9700\u8981\uff0c\u53ef\u5728\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u4e4b\u540e\uff0c\u518d\u8fdb\u884c\u521d\u59cb\u5316 SDK\n\u5176\u4e2d accountId/dataSourceId/urlScheme/dataCollectionServerHost \u4e3a\u5fc5\u586b\u9879\uff0c\u82e5\u4e0d\u6e05\u695a\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301")),(0,a.kt)("p",null,"\u5176\u4ed6\u521d\u59cb\u5316\u914d\u7f6e\u9879\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/framework/harmonyos/Configuration"},"\u8868\u683c"),"\uff0c\u5728 start \u65b9\u6cd5\u8c03\u7528\u524d\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"config.<\u914d\u7f6e\u9879> = \u5bf9\u5e94\u503c"),"\u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u67e5\u770b\u96c6\u6210\u6548\u679c"},"\u67e5\u770b\u96c6\u6210\u6548\u679c"),(0,a.kt)("p",null,"\u8fd0\u884c\u5e94\u7528\uff0c\u82e5\u65e5\u5fd7\u4e2d\u8f93\u51fa\u4e86",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: x.x.x"),(0,a.kt)("br",{parentName:"p"}),"\n","\u5219\u8bf4\u660e SDK \u5df2\u7ecf\u96c6\u6210\u6210\u529f\u3002"),(0,a.kt)("p",null,"\u82e5\u5728\u521d\u59cb\u5316\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"debugEnabled")," \u8bbe\u7f6e\u4e3a true\uff0c\u6253\u5f00\u4e86 Debug \uff0c\u5219\u53ef\u4ee5\u5728\u65e5\u5fd7\u4e2d\u770b\u5230\u6bcf\u4e2a\u4e8b\u4ef6\u7684 log \u65e5\u5fd7\u8f93\u51fa\u3002"),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c\u5c31\u5b8c\u6210\u4e86 HarmonyOS NEXT SDK \u7684\u96c6\u6210\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u60a8\u53ef\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/giokit/harmonyos"},"GioKit \u8f85\u52a9\u63d2\u4ef6")," \u8fdb\u884c\u96c6\u6210\u9a8c\u8bc1\u3002"))}m.isMDXComponent=!0}}]);