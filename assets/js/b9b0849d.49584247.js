"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"useResource",title:"useResource",sidebar_label:"useResource"},l=void 0,u={unversionedId:"api-reference/core/hooks/resource/useResource",id:"api-reference/core/hooks/resource/useResource",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns the resource` object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route.",source:"@site/docs/api-reference/core/hooks/resource/useResource.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResource",permalink:"/docs/api-reference/core/hooks/resource/useResource",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/resource/useResource.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1691775949,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{id:"useResource",title:"useResource",sidebar_label:"useResource"},sidebar:"someSidebar",previous:{title:"useNotification",permalink:"/docs/api-reference/core/hooks/useNotification/"},next:{title:"useShow",permalink:"/docs/api-reference/core/hooks/show/useShow"}},s={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Without parameters",id:"without-parameters",level:3},{value:"With a resource name or identifier",id:"with-a-resource-name-or-identifier",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>resources</code>",id:"resources",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"<code>select</code>",id:"select",level:3},{value:"<code>identifier</code>",id:"identifier",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const f={toc:p};function k(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you pass a resource name or identifier to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object that matches the name or identifier. If there is no match, a temporary ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier.")),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("h3",{id:"without-parameters"},"Without parameters"),(0,n.kt)("p",null,"If you don't pass any parameter to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the current route by default. If there is no match, the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resources, resource, action, id } = useResource();\n')),(0,n.kt)("h3",{id:"with-a-resource-name-or-identifier"},"With a resource name or identifier"),(0,n.kt)("p",null,"If you pass a resource name or identifier to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the name or identifier. If there is no match, a temporary ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resource } = useResource("posts");\n')),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("h3",{id:"resources"},(0,n.kt)("inlineCode",{parentName:"h3"},"resources")),(0,n.kt)("p",null,"An array of resources that you defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,n.kt)("h3",{id:"resource"},(0,n.kt)("inlineCode",{parentName:"h3"},"resource")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object."),(0,n.kt)("h3",{id:"resourcename"},(0,n.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,n.kt)("p",null,"Resource name of the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object."),(0,n.kt)("h3",{id:"id"},(0,n.kt)("inlineCode",{parentName:"h3"},"id")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"id")," parameter of the current route."),(0,n.kt)("h3",{id:"action"},(0,n.kt)("inlineCode",{parentName:"h3"},"action")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"action")," from the current route if there is a match."),(0,n.kt)("h3",{id:"select"},(0,n.kt)("inlineCode",{parentName:"h3"},"select")),(0,n.kt)("p",null,"The function allows you to retrieve a ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object and matched ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," by providing either a resource ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier"),". By default, if there is no match for the given ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier"),", the function will return the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object and ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," associated with the provided value."),(0,n.kt)("p",null,"If you don't pass any parameter to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResource"),", it will try to infer the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," from the current route. If there is no match, the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.kt)("p",null,"The function also accepts a second parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"force")," which is ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," by default. If you set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", it will not return a ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object and ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," if there is no match."),(0,n.kt)("h3",{id:"identifier"},(0,n.kt)("inlineCode",{parentName:"h3"},"identifier")),(0,n.kt)("p",null,"Identifier value for the current resource, this can either be the ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," property or the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," property of the resource."),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)(d,{module:"@refinedev/core/useResource",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resources"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#interfaces"},(0,n.kt)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#interfaces"},(0,n.kt)("inlineCode",{parentName:"a"},"IResourceItem")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"a"},"undefined")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"clone"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"select"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(resourceName: string, force?: boolean) => { resource: IResourceItem")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined, identifier: string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"identifier"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,n.kt)("h4",{id:"interfaces"},"Interfaces"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceComponents {\n    list?:\n        | string\n        | React.ComponentType<any>\n        | { component: React.ComponentType<any>; path: string };\n    create?:\n        | string\n        | React.ComponentType<any>\n        | { component: React.ComponentType<any>; path: string };\n    edit?:\n        | string\n        | React.ComponentType<any>\n        | { component: React.ComponentType<any>; path: string };\n    show?:\n        | string\n        | React.ComponentType<any>\n        | { component: React.ComponentType<any>; path: string };\n}\n\ninterface IResourceItem extends IResourceComponents {\n    name: string;\n    identifier?: string;\n    meta?: MetaProps;\n}\n")))}k.isMDXComponent=!0}}]);