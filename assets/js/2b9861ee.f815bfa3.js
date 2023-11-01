"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2117],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(n),g=r,u=k["".concat(o,".").concat(g)]||k[g]||s[g]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},5488:(t,e,n)=>{n.d(e,{Z:()=>g});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),d=n(7392),o=n(7094),p=n(2466);const m="tabList__CuJ",s="tabItem_LNqP";function k(t){var e;const{lazy:n,block:i,defaultValue:k,values:g,groupId:u,className:N}=t,c=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=g??c.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),b=(0,d.l)(f,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===k?k:k??(null==(e=c.find((t=>t.props.default)))?void 0:e.props.value)??c[0].props.value;if(null!==v&&!f.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:h}=(0,o.U)(),[y,E]=(0,r.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=u){const t=C[u];null!=t&&t!==y&&f.some((e=>e.value===t))&&E(t)}const D=t=>{const e=t.currentTarget,n=I.indexOf(e),a=f[n].value;a!==y&&(w(e),E(a),null!=u&&h(u,String(a)))},S=t=>{var e;let n=null;switch(t.key){case"Enter":D(t);break;case"ArrowRight":{const e=I.indexOf(t.currentTarget)+1;n=I[e]??I[0];break}case"ArrowLeft":{const e=I.indexOf(t.currentTarget)-1;n=I[e]??I[I.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},N)},f.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:t=>I.push(t),onKeyDown:S,onClick:D},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":y===e})}),n??e)}))),n?(0,r.cloneElement)(c.filter((t=>t.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},c.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==y})))))}function g(t){const e=(0,i.Z)();return r.createElement(k,(0,a.Z)({key:String(e)},t))}},9343:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const l={sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},i=void 0,d={unversionedId:"android/Configuration",id:"android/Configuration",title:"\u521d\u59cb\u5316\u914d\u7f6e",description:"--------------",source:"@site/docs/android/Configuration.md",sourceDirName:"android",slug:"/android/Configuration",permalink:"/growingio-sdk-docs-v3/docs/android/Configuration",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/android/Configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},sidebar:"gioSidebar",previous:{title:"\u5982\u4f55\u96c6\u6210",permalink:"/growingio-sdk-docs-v3/docs/android/Introduce"},next:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs-v3/docs/android/api"}},o={},p=[{value:"\u914d\u7f6e\u8868\u683c",id:"\u914d\u7f6e\u8868\u683c",level:2},{value:"1. SDK\u5fc5\u9700\u53c2\u6570",id:"1-sdk\u5fc5\u9700\u53c2\u6570",level:3},{value:"2. <strong>setChannel</strong>",id:"2-setchannel",level:3},{value:"3. <strong>setDebugEnabled</strong>",id:"3-setdebugenabled",level:3},{value:"4. <strong>setCellularDataLimit</strong>",id:"4-setcellulardatalimit",level:3},{value:"5. <strong>setDataUploadInterval</strong>",id:"5-setdatauploadinterval",level:3},{value:"6. <strong>setSessionInterval</strong>",id:"6-setsessioninterval",level:3},{value:"7. <strong>setDataCollectionEnabled</strong>",id:"7-setdatacollectionenabled",level:3},{value:"8. <strong>setImeiEnabled</strong>",id:"8-setimeienabled",level:3},{value:"9. <strong>setEventFilterInterceptor</strong>",id:"9-seteventfilterinterceptor",level:3},{value:"10. <strong>setIdMappingEnabled</strong>",id:"10-setidmappingenabled",level:3},{value:"11. <strong>setImpressionScale</strong>",id:"11-setimpressionscale",level:3},{value:"12 <strong>addPreloadComponent</strong>",id:"12-addpreloadcomponent",level:3},{value:"13 <strong>setWebViewBridgeEnabled</strong>",id:"13-setwebviewbridgeenabled",level:3}],m={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK\u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),",\u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8868\u683c"},"\u914d\u7f6e\u8868\u683c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Config"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5176\u5b83"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accountId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76eeID\uff0c\u6bcf\u4e2a\u5e94\u7528\u5bf9\u5e94\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"urlScheme")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684URLScheme\uff0c\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDataSourceId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684DataSourceId\uff0c\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDataCollectionServerHost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u7aef\u90e8\u7f72\u540e\u7684 ServerHost"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setChannel")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684\u5206\u53d1\u6e20\u9053"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDebugEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4f1a\u6253\u5370 Log \u548c\u9519\u8bef\uff0c\u5728\u7ebf\u4e0a\u73af\u5883\u8bf7\u5173\u95ed"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setCellularDataLimit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u5929\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u9650\u5236\uff0c\u5355\u4f4dMB"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDataUploadInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"15")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u53d1\u9001\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setSessionInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setImeiEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6Imei\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e0d\u91c7\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.5.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setDataCollectionEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setEventFilterInterceptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventFilterInterceptor")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DefaultEventFilterInterceptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u4e8b\u4ef6\u8fc7\u6ee4,\u66ff\u6362\u5e9f\u5f03\u7684\u4e8b\u4ef6\u8fc7\u6ee4\u548c\u5c5e\u6027\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.4.3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setExcludeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e8b\u4ef6\u8fc7\u6ee4\uff0c\u5df2\u88ab\u5e9f\u5f03"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"3.5.0 \u5220\u9664"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setIgnoreField")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e8b\u4ef6\u5c5e\u6027\u8fc7\u6ee4\uff0c\u5df2\u88ab\u5e9f\u5f03"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"3.5.0 \u5220\u9664"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setIdMappingEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.3.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setImpressionScale")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5143\u7d20\u66dd\u5149\u4e8b\u4ef6\u4e2d\u7684\u6bd4\u4f8b\u56e0\u5b50,\u8303\u56f4 ","[0-1]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u57cb\u70b9\u72ec\u6709"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setRequireAppProcessesEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SDK \u662f\u5426\u80fd\u83b7\u53d6\u5e94\u7528\u591a\u8fdb\u7a0bID"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.3.4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"addPreloadComponent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LibraryGioModule")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ce8\u518c\u81ea\u5b9a\u4e49/\u9884\u5b9a\u4e49\u6a21\u5757(\u5982\u52a0\u5bc6\u6a21\u5757\u3001OAID\u6a21\u5757)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.3.4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"addPreloadComponent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LibraryGioModule"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Configurable")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ce8\u518c\u81ea\u5b9a\u4e49/\u9884\u5b9a\u4e49\u6a21\u5757\u53ca\u5176\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.4.3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setWebViewBridgeEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5168\u91cf\u91c7\u96c6 hybrid \u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u57cb\u70b9\u72ec\u6709"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},">= 3.5.1"))))),(0,r.kt)("h3",{id:"1-sdk\u5fc5\u9700\u53c2\u6570"},"1. SDK\u5fc5\u9700\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"accountId\uff0c")," ",(0,r.kt)("strong",{parentName:"p"},"urlScheme\uff0c")," ",(0,r.kt)("strong",{parentName:"p"},"setDataSourceId\uff0c")," ",(0,r.kt)("strong",{parentName:"p"},"setDataCollectionServerHost"),"\n\u8fd9\u56db\u4e2a\u53c2\u6570\u4e3a CDP \u7528\u6237\u5fc5\u987b\u8981\u8bbe\u7f6e\u7684\u53c2\u6570\uff0c\u82e5\u4e0d\u6e05\u695a\u5177\u4f53\u6570\u503c\u8bf7\u8be2\u95ee\u76f8\u5173\u670d\u52a1\u7aef\u5bf9\u63a5\u7684\u5f00\u53d1\u540c\u4e8b\u3002"),(0,r.kt)("h3",{id:"2-setchannel"},"2. ",(0,r.kt)("strong",{parentName:"h3"},"setChannel")),(0,r.kt)("p",null,"\u5bf9\u5e94\u5e94\u7528\u7684\u5206\u53d1\u6e20\u9053\u5b57\u6bb5\uff0c\u82e5\u8bbe\u7f6e\u4e86\u503c\u5219\u4f1a\u5728\u6bcf\u4e2a\u4e8b\u4ef6\u4e0a\u62a5\u4e2d\u542b\u6709\u6e20\u9053\u4fe1\u606f\u3002\n\u6bd4\u5982\u5728\u521d\u59cb\u5316\u4e2d\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},'.setChannel("Docs")'),",\u5219\u4f1a\u5728\u4e0a\u62a5\u4fe1\u606f\u4e2d\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"appChannel")," \u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    \u2551 {\n    \u2551   "platform": "Android",\n    \u2551   "appChannel": "Docs",\n    \u2551   "screenHeight": 1920,\n    \u2551   "screenWidth": 1080,\n    \u2551   ...\n    \u2551 }\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n')),(0,r.kt)("h3",{id:"3-setdebugenabled"},"3. ",(0,r.kt)("strong",{parentName:"h3"},"setDebugEnabled")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff0c\u5f00\u542f\u540e\u4f1a\u8f93\u51fa SDK Log \u65e5\u5fd7\u3002\n\u5efa\u8bae\u505a\u6cd5\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"setDebugEnabled(BuildConfig.DEBUG)")," \u8fd9\u6837\u65e2\u80fd\u4fdd\u8bc1Debug\u65f6\u80fd\u591f\u6253\u5370\u65e5\u5fd7\uff0c\u6b63\u5f0f\u53d1\u5e03\u65f6\u4e5f\u80fd\u5173\u95ed\u65e5\u5fd7\uff1b"),(0,r.kt)("h3",{id:"4-setcellulardatalimit"},"4. ",(0,r.kt)("strong",{parentName:"h3"},"setCellularDataLimit")),(0,r.kt)("p",null,"\u4e3a\u6bcf\u65e5\u57284G\u73af\u5883\u4e0b\u7684\u6d41\u91cf\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a10M\u3002WIFI\u73af\u5883\u4e0b\u5219\u4e0d\u8ba1\u6d41\u91cf\u3002"),(0,r.kt)("h3",{id:"5-setdatauploadinterval"},"5. ",(0,r.kt)("strong",{parentName:"h3"},"setDataUploadInterval")),(0,r.kt)("p",null,"\u4e0a\u62a5\u95f4\u9694\u3002GrowingIO SDK \u4f1a\u5148\u5c06\u4e8b\u4ef6\u5b58\u5165\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u9ed8\u8ba4\u65f6\u95f415\u79d2\u7684\u60c5\u51b5\u4e0b\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6\u5305\uff08\u6700\u592750\u6761\u4e8b\u4ef6\uff09\u3002"),(0,r.kt)("h3",{id:"6-setsessioninterval"},"6. ",(0,r.kt)("strong",{parentName:"h3"},"setSessionInterval")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\u3002\u6307\u5f53\u524d\u4f1a\u8bdd\u5728\u5e94\u7528\u8fdb\u5165\u540e\u53f0\u540e\u7684\u6700\u5927\u7559\u5b58\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a30\u79d2\u3002\u53e6\u5916\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4f1a\u8bdd\uff0c\u5982\u8bbe\u7f6e\u7528\u6237ID\u7b49\u6838\u5fc3\u4fe1\u606f\uff0c\u91cd\u65b0\u6253\u5f00\u6570\u636e\u6536\u96c6\u7b49\u3002"),(0,r.kt)("h3",{id:"7-setdatacollectionenabled"},"7. ",(0,r.kt)("strong",{parentName:"h3"},"setDataCollectionEnabled")),(0,r.kt)("p",null,"\u6570\u636e\u6536\u96c6\u3002\u5f53\u6570\u636e\u6536\u96c6\u5173\u95ed\u65f6\uff0cSDK\u5c06\u4e0d\u4f1a\u518d\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f\uff0c\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u4e8b\u4ef6\u548c\u4e0a\u62a5\u4e8b\u4ef6\u3002"),(0,r.kt)("h3",{id:"8-setimeienabled"},"8. ",(0,r.kt)("strong",{parentName:"h3"},"setImeiEnabled")),(0,r.kt)("p",null,"\u662f\u5426\u91c7\u96c6Imei\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e0d\u91c7\u96c6\uff0c\u4e14Android 10\u53ca\u4ee5\u4e0a\u5df2\u4e0d\u518d\u652f\u6301 Imei \u7684\u83b7\u53d6\u3002"),(0,r.kt)("h3",{id:"9-seteventfilterinterceptor"},"9. ",(0,r.kt)("strong",{parentName:"h3"},"setEventFilterInterceptor")),(0,r.kt)("p",null,"\u4e8b\u4ef6\u8fc7\u6ee4\uff0c\u8be5\u63a5\u53e3\u9700\u8981\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u62e6\u622a\u5668\u7528\u4e8e\u4e8b\u4ef6\u62e6\u622a\u7684\u81ea\u5b9a\u4e49\u5316\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u4e8b\u4ef6\u62e6\u622a\u5668\u65f6\u8bf7\u6ce8\u610f\u4f7f\u7528\uff0c\u4e0d\u8981\u8fc7\u6ee4\u6389\u91cd\u8981\u4fe1\u606f\uff0c\u9632\u6b62\u6570\u636e\u91c7\u96c6\u4fe1\u606f\u4e22\u5931\u6216\u8005\u5c11\u91c7\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u58f0\u660e\u4e00\u4e2a\u4e8b\u4ef6\u8fc7\u6ee4\u5668\uff0c\u7ee7\u627f `DefaultEventFilterInterceptor` \u6216 `EventFilterInterceptor`\nclass CustomEventFilterInterceptor implements EventFilterInterceptor {\n\n    // \u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\u6765\u8fc7\u6ee4\u4e8b\u4ef6\uff0c\u8fd4\u56de false \u8868\u793a\u62e6\u622a\uff0c\u8fd4\u56de true \u8868\u793a\u4e0d\u8fc7\u6ee4\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u62e6\u622a\u4e8b\u4ef6\u7c7b\u578b\u4e3a \u201cPAGE\u201d \u7684\u4e8b\u4ef6\n    @Override\n    public boolean filterEventType(String eventType) {\n        if (FilterEventType.PAGE.equals(eventType)) return false;\n        return true;\n    }\n\n    // \u8fc7\u6ee4\u4e8b\u4ef6\u57fa\u7840\u5c5e\u6027\uff0c\u5c5e\u6027\u8bbe\u7f6e false \u8868\u793a\u62e6\u622a\uff0c\u8bbe\u7f6e true \u8868\u793a\u4e0d\u8fc7\u6ee4\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u4e8b\u4ef6\u4e2d\u4e0d\u518d\u5305\u542b\u5c4f\u5e55\u5bbd\u9ad8\u7684\u5c5e\u6027\u3002\n    @Override\n    public Map<String, Boolean> filterEventField(String type, Map<String, Boolean> fieldArea) {\n        fieldArea.put(BaseField.SCREEN_HEIGHT, false);\n        fieldArea.put(BaseField.SCREEN_WIDTH, false);\n        return fieldArea;\n    }\n\n    // \u9488\u5bf9\u65e0\u57cb\u70b9\u7684\u9875\u9762\u4e8b\u4ef6\u7684\u8def\u5f84\u8fdb\u884c\u8fc7\u6ee4\u3002\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u82e5\u9875\u9762\u4e8b\u4ef6\u4e2d\u7684\u8def\u5f84\u5305\u542b \u201cTestActivity\u201d \u5219\u8fc7\u6ee4\u3002\n    @Override\n    public boolean filterEventPath(String path) {\n        return !path.contains("TestActivity");\n    }\n\n    // \u9488\u5bf9\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u540d\u79f0\u8fdb\u884c\u8fc7\u6ee4\u3002\n    // \u5982\u4e0b\u4f8b\u8868\u793a\u82e5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u4e2d\u540d\u79f0\u4e3a "test" \u5219\u8fc7\u6ee4\u3002\n    @Override\n    public boolean filterEventName(String eventName) {\n        return !"test".equals(eventName);\n    }\n}\n')),(0,r.kt)("p",null,"\u4e4b\u540e\u518d\u8c03\u7528\u8be5\u63a5\u53e3\u8bbe\u7f6e\u62e6\u622a\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'GrowingTracker.startWithConfiguration(this,\n    new CdpTrackConfiguration("accountId", "urlScheme")\n        ...\n       .setEventFilterInterceptor(new CustomEventFilterInterceptor())\n);\n')),(0,r.kt)("h3",{id:"10-setidmappingenabled"},"10. ",(0,r.kt)("strong",{parentName:"h3"},"setIdMappingEnabled")),(0,r.kt)("p",null,"\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5, \u9ed8\u8ba4\u4e0d\u652f\u6301\u3002\n\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5, \u4e0e API \u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"setLoginUserId(String userId, String userKey)"),"\u5bf9\u5e94, \u5f00\u542f\u65f6, userKey\u4f1a\u5728\u6bcf\u6b21\u4e0a\u62a5\u6570\u636e\u65f6\u643a\u5e26, \u5173\u95ed\u65f6, \u63a5\u53e3\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"setLoginUserId(String userId)"),"\u4f5c\u7528\u76f8\u540c"),(0,r.kt)("h3",{id:"11-setimpressionscale"},"11. ",(0,r.kt)("strong",{parentName:"h3"},"setImpressionScale")),(0,r.kt)("p",null,"\u66dd\u5149\u6bd4\u4f8b\u3002\u4e0e\u66dd\u5149\u4e8b\u4ef6\u7ed3\u5408\u4f7f\u7528\u3002\u66dd\u5149\u6bd4\u4f8b\u662f\u6307\u5f53\u4e00\u4e2a\u66dd\u5149\u7684View\u51fa\u73b0\u5728\u5c4f\u5e55\u65f6\u53ef\u89c1\u7684\u90e8\u5206\u5360\u636e\u81ea\u8eab\u5c3a\u5bf8\u7684\u6bd4\u4f8b\uff0c\u6bd4\u5982\u8bf4\u82e5\u8bbe\u4e3a 0 \u5219\u8868\u793a\u53ea\u8981\u51fa\u73b0\u5373\u4ea7\u751f\u66dd\u5149\u4e8b\u4ef6\uff0c\u82e5\u8bbe\u4e3a1\u5219\u8868\u793a\u8981\u6574\u4e2aView\u90fd\u51fa\u73b0\u5728\u5c4f\u5e55\u4e2d\u3002"),(0,r.kt)("h3",{id:"12-addpreloadcomponent"},"12 ",(0,r.kt)("strong",{parentName:"h3"},"addPreloadComponent")),(0,r.kt)("p",null,"\u6ce8\u518c\u529f\u80fd\u6a21\u5757\uff0c\u4e3a Growingio SDK \u6dfb\u52a0\u66f4\u591a\u7684\u989d\u5916\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u521d\u59cb\u5316SDK\u65f6\uff0c\u53ef\u4ee5\u6ce8\u518c\u5bf9\u5e94\u6a21\u5757\nGrowingAutotracker.startWithConfiguration(this,\n        new CdpAutotrackConfiguration("accountId", "urlScheme")\n        //...\n        .addPreloadComponent(<\u6a21\u5757\u5bf9\u8c61>, <\u6a21\u5757\u914d\u7f6e>)\n        // \u6216\u8005\n        .addPreloadComponent(<\u6a21\u5757\u5bf9\u8c61>)\n\n);\n')),(0,r.kt)("p",null,"\u6a21\u5757\u5217\u8868\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/android/modules"},"\u529f\u80fd\u6a21\u5757\u4e00\u89c8")),(0,r.kt)("h3",{id:"13-setwebviewbridgeenabled"},"13 ",(0,r.kt)("strong",{parentName:"h3"},"setWebViewBridgeEnabled")),(0,r.kt)("p",null,"\u662f\u5426\u5168\u91cf\u91c7\u96c6 hybrid \u6570\u636e\uff08\u9ed8\u8ba4\u4e3a true\uff09"),(0,r.kt)("p",null,"\u65e0\u57cb\u70b9\u9ed8\u8ba4\u4f1a\u91c7\u96c6\u5bf9\u5e94 webview \u7684 hybrid \u4e8b\u4ef6\uff0c\u8bbe\u7f6e\u4e3a false\uff0c\u53ef\u4ee5\u5173\u95ed\u91c7\u96c6 hybrid \u6570\u636e\u3002\n\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u91c7\u96c6\u5355\u4e2a webview \u7684 hybrid \u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u65f6 API \u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"bridgeWebView(View webView)"),"\u5f00\u542f\u91c7\u96c6\u3002"))}s.isMDXComponent=!0}}]);