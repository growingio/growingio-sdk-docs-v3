"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,g=m["".concat(d,".").concat(p)]||m[p]||s[p]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),d=r(7094),c=r(2466);const u="tabList__CuJ",s="tabItem_LNqP";function m(e){var t;const{lazy:r,block:l,defaultValue:m,values:p,groupId:g,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,d.U)(),[N,O]=(0,a.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&v.some((t=>t.value===e))&&O(e)}const D=e=>{const t=e.currentTarget,r=T.indexOf(t),n=v[r].value;n!==N&&(E(t),O(n),null!=g&&w(g,String(n)))},S=e=>{var t;let r=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:S,onClick:D},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},2535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905)),o=r(5488),l=r(5162);const i={sidebar_position:6,title:"\u5708\u9009\u6a21\u5757"},d=void 0,c={unversionedId:"android/modules/circler module",id:"android/modules/circler module",title:"\u5708\u9009\u6a21\u5757",description:"\u5708\u9009\uff0c\u662f\u5229\u7528GrowingIO\u8fdb\u884c\u65e0\u57cb\u70b9\u6570\u636e\u5206\u6790\u4e4b\u524d\u7684\u6570\u636e\u5b9a\u4e49\u8fc7\u7a0b\u3002\u60a8\u9700\u8981\u6839\u636e\u4e1a\u52a1\u9700\u6c42\uff0c\u5c06\u9700\u8981\u5206\u6790\u7684\u5173\u952e\u4e8b\u4ef6\u901a\u8fc7\u53ef\u89c6\u5316\u5730\u65b9\u5f0f\u5728\u60a8\u7684\u4ea7\u54c1\u754c\u9762\u4e2d\u5b9a\u4e49\u51fa\u6765\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u5c31\u662f\u5708\u9009\u3002",source:"@site/docs/android/modules/circler module.md",sourceDirName:"android/modules",slug:"/android/modules/circler module",permalink:"/growingio-sdk-docs-v3/docs/android/modules/circler module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/android/modules/circler module.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u5708\u9009\u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"OAID \u6a21\u5757",permalink:"/growingio-sdk-docs-v3/docs/android/modules/oaid module"},next:{title:"Debugger \u6a21\u5757",permalink:"/growingio-sdk-docs-v3/docs/android/modules/debugger module"}},u={},s=[{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3}],m={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5708\u9009\uff0c\u662f\u5229\u7528GrowingIO\u8fdb\u884c\u65e0\u57cb\u70b9\u6570\u636e\u5206\u6790\u4e4b\u524d\u7684\u6570\u636e\u5b9a\u4e49\u8fc7\u7a0b\u3002\u60a8\u9700\u8981\u6839\u636e\u4e1a\u52a1\u9700\u6c42\uff0c\u5c06\u9700\u8981\u5206\u6790\u7684\u5173\u952e\u4e8b\u4ef6\u901a\u8fc7\u53ef\u89c6\u5316\u5730\u65b9\u5f0f\u5728\u60a8\u7684\u4ea7\u54c1\u754c\u9762\u4e2d\u5b9a\u4e49\u51fa\u6765\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u5c31\u662f\u5708\u9009\u3002"),(0,a.kt)("p",null,"\u5708\u9009\u7684\u6559\u7a0b\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.growingio.com/op-help/docs/4.0/product-manual/user-behavior-analytics/data-management/data-management/auto-track/app-data-definition"},"\u4ea7\u54c1\u6559\u7a0b-\u65e0\u57cb\u70b9\u4e8b\u4ef6")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u96c6\u6210\u65e0\u57cb\u70b9SDK\u65f6\uff0c\u5708\u9009\u6a21\u5757\u4f1a\u9ed8\u8ba4\u96c6\u6210\u5230SDK\u4e2d\uff0c\u4e14\u53ea\u5728\u65e0\u57cb\u70b9SDK\u4e2d\u6709\u6548\uff0c\u4e0d\u652f\u6301\u57cb\u70b9SDK\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u82e5\u4e0d\u60f3\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u96c6\u6210\u5708\u9009\u6a21\u5757\uff0c\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/blog/custom%20android%20sdk"},"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1"),"\uff0c\u81ea\u5b9a\u4e49SDK\u6a21\u5757\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,a.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"circler"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u57cb\u70b9\u81ea\u52a8\u96c6\u6210"),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"Circler")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"WebService")),(0,a.kt)("td",{parentName:"tr",align:"left"},">=3.3.0")))),(0,a.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,a.kt)(o.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"common",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.growingio.android:circler:3.5.1'\n}\n"))),(0,a.kt)(l.Z,{value:"bom",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:3.5.1')\n\n  implementation 'com.growingio.android:circler'\n}\n")))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"\u9700\u8981\u5728 \u201d\u6570\u636e\u7ba1\u7406 > \u65e0\u57cb\u70b9\u4e8b\u4ef6\u201d \u4e2d\u70b9\u51fb \u201c\u65b0\u5efa\u65e0\u57cb\u70b9\u4e8b\u4ef6 > {App\u5e94\u7528}\u201d \u8fdb\u5165App\u5524\u9192\u9875\u9762\u3002\n\u540e\u7eed\u64cd\u4f5c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.growingio.com/op-help/docs/4.0/product-manual/user-behavior-analytics/data-management/data-management/auto-track/app-data-definition"},"APP\u7aef\u6570\u636e\u5b9a\u4e49")," \u5373\u53ef\u3002"))}p.isMDXComponent=!0}}]);