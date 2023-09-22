"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=s(r),d=o,f=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},20608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"useGo",title:"useGo",sidebar_label:"useGo \ud83c\udd95"},l=void 0,s={unversionedId:"api-reference/core/hooks/navigation/useGo",id:"api-reference/core/hooks/navigation/useGo",title:"useGo",description:"useGo is a hook that leverages the go method of the routerProvider to perform navigation operations.",source:"@site/docs/api-reference/core/hooks/navigation/useGo.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useGo",permalink:"/docs/api-reference/core/hooks/navigation/useGo",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useGo.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695404279,formattedLastUpdatedAt:"Sep 22, 2023",frontMatter:{id:"useGo",title:"useGo",sidebar_label:"useGo \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useSubscription",permalink:"/docs/api-reference/core/hooks/live/useSubscription"},next:{title:"useParsed \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useParsed"}},u={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>to</code>",id:"to",level:3},{value:"<code>query</code>",id:"query",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>hash</code>",id:"hash",level:3},{value:"<code>options.keepQuery</code>",id:"optionskeepquery",level:3},{value:"<code>options.keepHash</code>",id:"optionskeephash",level:3},{value:"Return Value",id:"return-value",level:2}],h={toc:c};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useGo")," is a hook that leverages the ",(0,n.kt)("inlineCode",{parentName:"p"},"go")," method of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to perform navigation operations."),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGo } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const go = useGo();\n\n    return (\n        <Button\n            onClick={() => {\n                go({\n                    to: "/posts",\n                    query: {\n                        filters: [\n                            {\n                                field: "title",\n                                operator: "contains",\n                                value: "Refine",\n                            },\n                        ],\n                    },\n                    type: "push",\n                });\n            }}\n        >\n            Go Posts With Default Filters\n        </Button>\n    );\n};\n')),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"to"},(0,n.kt)("inlineCode",{parentName:"h3"},"to")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," parameter is the path you want to navigate to. If left empty, it will navigate to the current path, which is useful for updating the query parameters."),(0,n.kt)("h3",{id:"query"},(0,n.kt)("inlineCode",{parentName:"h3"},"query")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," parameter is the query parameters you want to add to the path. It is an object which the ",(0,n.kt)("inlineCode",{parentName:"p"},"routerProvider")," will convert to the query string."),(0,n.kt)("h3",{id:"type"},(0,n.kt)("inlineCode",{parentName:"h3"},"type")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," parameter is the type of navigation you want to perform. It can be one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"push"),": It adds a new entry to the history stack."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"replace"),": It replaces the current entry on the history stack."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),": Returns the navigation path for the given config. Doesn't mutate the history stack.")),(0,n.kt)("h3",{id:"hash"},(0,n.kt)("inlineCode",{parentName:"h3"},"hash")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"hash")," parameter is the hash you want to add to the path."),(0,n.kt)("h3",{id:"optionskeepquery"},(0,n.kt)("inlineCode",{parentName:"h3"},"options.keepQuery")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"options.keepQuery")," parameter is a boolean that determines whether the current query parameters should be kept or not. If it is ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", the current query parameters will be merged with the new query parameters. If it is ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", the current query parameters will be ignored."),(0,n.kt)("h3",{id:"optionskeephash"},(0,n.kt)("inlineCode",{parentName:"h3"},"options.keepHash")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"options.keepHash")," parameter is a boolean that determines whether the current hash should be kept or not. If it is ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", the current hash will be kept in the URL. If it is ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", the current hash will be ignored."),(0,n.kt)("h2",{id:"return-value"},"Return Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useGo")," does not return any value except for the ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," type, which returns the navigation path for the given config without mutating the history stack."))}d.isMDXComponent=!0}}]);