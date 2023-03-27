"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"useApiUrl",title:"useApiUrl",source:"packages/core/src/hooks/data/useApiUrl.ts"},i=void 0,l={unversionedId:"api-reference/core/hooks/data/useApiUrl",id:"version-3.xx.xx/api-reference/core/hooks/data/useApiUrl",title:"useApiUrl",description:"useApiUrl is a React hook that returns the API URL.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useApiUrl.md",sourceDirName:"api-reference/core/hooks/data",slug:"/api-reference/core/hooks/data/useApiUrl",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useApiUrl",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useApiUrl.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679934123,formattedLastUpdatedAt:"Mar 27, 2023",frontMatter:{id:"useApiUrl",title:"useApiUrl",source:"packages/core/src/hooks/data/useApiUrl.ts"},sidebar:"someSidebar",previous:{title:"useBreadcrumb",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb"},next:{title:"useCreate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Return value",id:"return-value",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useApiUrl")," is a React hook that returns the API URL."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"getApiUrl")," method to get the API URL from the ",(0,a.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")),".")),(0,a.kt)("p",null,"It is useful when you want to use the API URL in your custom hooks."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useApiUrl")," hook does not expect any parameter. It will run the ",(0,a.kt)("inlineCode",{parentName:"p"},"getApiUrl")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," and return the result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'//highlight-next-line\nimport { useCustom, useApiUrl } from "@pankod/refine-core";\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\n//highlight-next-line\nconst apiUrl = useApiUrl();\n\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n    //highlight-next-line\n    url: `${apiUrl}/posts-unique-check`,\n    method: "get",\n    config: {\n        query: {\n            title: "Foo bar",\n        },\n    },\n});\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))))}c.isMDXComponent=!0}}]);