"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),d=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||n;return r?o.createElement(b,l(l({ref:t},s),{},{components:r})):o.createElement(b,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<n;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(7294),a=r(6010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(n,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var o=r(7462),a=r(7294),n=r(6010),l=r(2389),i=r(7392),u=r(7094),d=r(2466);const s="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:r,block:l,defaultValue:p,values:m,groupId:b,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:r,attributes:o}}=e;return{value:t,label:r,attributes:o}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[N,T]=(0,a.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:P}=(0,d.o5)();if(null!=b){const e=y[b];null!=e&&e!==N&&v.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,r=O.indexOf(t),o=v[r].value;o!==N&&(P(t),T(o),null!=b&&w(b,String(o)))},I=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:I,onClick:E},l,{className:(0,n.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,o.Z)({key:String(t)},e))}},4896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=r(7462),a=(r(7294),r(3905)),n=r(5488),l=r(5162);const i={sidebar_position:4,title:"Protobuf \u6a21\u5757"},u=void 0,d={unversionedId:"android/modules/protobuf module",id:"android/modules/protobuf module",title:"Protobuf \u6a21\u5757",description:"GrowingIO SDK protobuf \u6570\u636e\u6a21\u5757\u4f7f\u7528 Google Protobuf \u683c\u5f0f\u4fdd\u5b58\u548c\u4e0a\u4f20\u4e8b\u4ef6\u6570\u636e\u3002",source:"@site/docs/android/modules/protobuf module.md",sourceDirName:"android/modules",slug:"/android/modules/protobuf module",permalink:"/growingio-sdk-docs-v3/docs/android/modules/protobuf module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/android/modules/protobuf module.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Protobuf \u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"\u52a0\u5bc6\u6a21\u5757",permalink:"/growingio-sdk-docs-v3/docs/android/modules/encoder module"},next:{title:"OAID \u6a21\u5757",permalink:"/growingio-sdk-docs-v3/docs/android/modules/oaid module"}},s={},c=[{value:"SDK\u8bf4\u660e",id:"sdk\u8bf4\u660e",level:3},{value:"\u4f9d\u8d56\u65b9\u5f0f",id:"\u4f9d\u8d56\u65b9\u5f0f",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],p=(m="ImageLoader",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const b={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GrowingIO SDK protobuf \u6570\u636e\u6a21\u5757\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.cn/protocol-buffers"},"Google Protobuf")," \u683c\u5f0f\u4fdd\u5b58\u548c\u4e0a\u4f20\u4e8b\u4ef6\u6570\u636e\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 Protobuf \u683c\u5f0f\u4fdd\u5b58\u548c\u4e0a\u4f20\u4e8b\u4ef6\u6570\u636e\uff0c\u96c6\u6210\u5373\u751f\u6548\uff1b\u4e0e\u5176\u4ed6\u683c\u5f0f,\u5982json \u4e92\u4e0d\u517c\u5bb9\uff0c\u8fc1\u79fb\u5c06\u5bfc\u81f4APP\u672c\u5730\u6570\u636e\u5e93\u5185\u672a\u4e0a\u4f20\u7684\u4e8b\u4ef6\u6570\u636e\u4e22\u5931\uff0c\u540e\u7eed\u4ea7\u751f\u7684\u65b0\u6570\u636e\u5219\u4e0d\u53d7\u5f71\u54cd\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sdk\u8bf4\u660e"},"SDK\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u8bcd"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u96c6\u6210"),(0,a.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u5165\u6570\u636e\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:"right"},"\u8f93\u51fa\u6570\u636e\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6700\u4f4eSDK\u7248\u672c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protobuf"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u624b\u52a8\u96c6\u6210"),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"EventFormatData")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"EventByteArray")),(0,a.kt)("td",{parentName:"tr",align:"left"},">=3.3.3")))),(0,a.kt)("h3",{id:"\u4f9d\u8d56\u65b9\u5f0f"},"\u4f9d\u8d56\u65b9\u5f0f"),(0,a.kt)(n.Z,{groupId:"code-language",defaultValue:"common",values:[{label:"\u4f9d\u8d56",value:"common"},{label:"BoM",value:"bom"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"common",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.growingio.android:protobuf:3.5.1'\n}\n"))),(0,a.kt)(l.Z,{value:"bom",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  // Import the BoM for the GrowingIO platform\n  implementation platform('com.growingio.android:autotracker-bom:3.5.1')\n\n  implementation 'com.growingio.android:protobuf'\n}\n")))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)(n.Z,{groupId:"sdk-type",defaultValue:"autotrack",values:[{label:"\u65e0\u57cb\u70b9",value:"autotrack"},{label:"\u57cb\u70b9",value:"track"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"autotrack",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'GrowingAutotracker.startWithConfiguration(this,\n                new CdpAutotrackConfiguration("accountId", "urlScheme")\n                //...\n                .addPreloadComponent(new ProtobufLibraryModule()));\n'))),(0,a.kt)(l.Z,{value:"track",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'GrowingTracker.startWithConfiguration(this,\n                new CdpTrackConfiguration("accountId", "urlScheme")\n                //...\n                .addPreloadComponent(new ProtobufLibraryModule()));\n')))),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u6570\u636e\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)(p,{path:"img/android/modules/growingio_protobuf_module.jpg",mdxType:"ImageLoader"}))}f.isMDXComponent=!0}}]);