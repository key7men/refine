"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6332],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={id:"index",title:"1. Build your first refine app",tutorial:{order:0,prev:!1,next:"tutorial/introduction/prequisite"}},a=void 0,l={unversionedId:"tutorial/introduction/index",id:"tutorial/introduction/index",title:"1. Build your first refine app",description:"About this Tutorial",source:"@site/docs/tutorial/0-introduction/0-intro.md",sourceDirName:"tutorial/0-introduction",slug:"/tutorial/introduction/index",permalink:"/docs/tutorial/introduction/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/0-introduction/0-intro.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1684923962,formattedLastUpdatedAt:"May 24, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"1. Build your first refine app",tutorial:{order:0,prev:!1,next:"tutorial/introduction/prequisite"}},sidebar:"someSidebar",previous:{title:"Quick Start Guide",permalink:"/docs/getting-started/quickstart"},next:{title:"3.x.x to 4.x.x",permalink:"/docs/migration-guide/3x-to-4x"}},p={},u=[{value:"About this Tutorial",id:"about-this-tutorial",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=s("Checklist"),d=s("ChecklistItem"),m={toc:u};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-this-tutorial"},"About this Tutorial"),(0,o.kt)("p",null,"This tutorial will guide you through the process of building a fully-functional CRUD app using ",(0,o.kt)("strong",{parentName:"p"},"refine"),". You will learn all the necessary steps to get started with ",(0,o.kt)("strong",{parentName:"p"},"refine"),", from setting up your development environment to launching your app. \ud83d\ude80"),(0,o.kt)("p",null,"We'll cover the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting up your development environment"),(0,o.kt)("li",{parentName:"ul"},"Creating your first ",(0,o.kt)("strong",{parentName:"li"},"refine")," app"),(0,o.kt)("li",{parentName:"ul"},"Understanding ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/providers/data-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider"))),(0,o.kt)("li",{parentName:"ul"},"The concept of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#resources"},(0,o.kt)("inlineCode",{parentName:"a"},"resources"))," prop"),(0,o.kt)("li",{parentName:"ul"},"Adding CRUD pages to your project")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you would rather start exploring ",(0,o.kt)("strong",{parentName:"p"},"refine")," with some examples before diving in, visit our ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/"},"examples")," page and choose an example to open and explore it in an online editor.")),(0,o.kt)("admonition",{title:"Thank you Astro Community! \u2764\ufe0f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"While preparing the refine's tutorial, we were ",(0,o.kt)("em",{parentName:"p"},"quite")," inspired by the ",(0,o.kt)("a",{parentName:"p",href:"https://astro.build/"},"Astro")," tutorial. We thank Astro for your contributions to the open-source community \ud83c\udf89")),(0,o.kt)(c,{mdxType:"Checklist"},(0,o.kt)(d,{id:"looks-great",mdxType:"ChecklistItem"},"Great! I'm ready to begin!")))}f.isMDXComponent=!0}}]);