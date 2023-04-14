"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,v=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"prepare-env",title:"2. Prepare your dev environment",tutorial:{prev:"tutorial/getting-started/{preferredUI}/index",next:"tutorial/getting-started/{preferredUI}/create-project"}},i=void 0,l={unversionedId:"tutorial/getting-started/prepare-env",id:"tutorial/getting-started/prepare-env",title:"2. Prepare your dev environment",description:"Get the dev tools you need",source:"@site/docs/tutorial/1-getting-started/1-prepare-env.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/prepare-env",permalink:"/docs/tutorial/getting-started/prepare-env",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/1-prepare-env.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681462112,formattedLastUpdatedAt:"Apr 14, 2023",sidebarPosition:1,frontMatter:{id:"prepare-env",title:"2. Prepare your dev environment",tutorial:{prev:"tutorial/getting-started/{preferredUI}/index",next:"tutorial/getting-started/{preferredUI}/create-project"}}},d={},s=[{value:"Get the dev tools you need",id:"get-the-dev-tools-you-need",level:2},{value:"Terminal",id:"terminal",level:3},{value:"Code Editor",id:"code-editor",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=p("Checklist"),u=p("ChecklistItem"),m={toc:s};function v(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-the-dev-tools-you-need"},"Get the dev tools you need"),(0,o.kt)("p",null,"Before you can create a ",(0,o.kt)("strong",{parentName:"p"},"refine")," app, you need to set up a development environment on your local machine. This includes installing a few tools that you will use to create your project, and run key commands to build, develop, and test your site."),(0,o.kt)("h3",{id:"terminal"},"Terminal"),(0,o.kt)("p",null,"You will use a terminal (also known as a command line interface) to run commands and interact with your operating system. You can access the terminal through a local program of your operating system, such as Terminal (MacOS/Linux) or Command Prompt (Windows)."),(0,o.kt)("p",null,"In order to run ",(0,o.kt)("strong",{parentName:"p"},"refine")," applications on your system, you will also need to have ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," installed. Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser. It is required to run ",(0,o.kt)("strong",{parentName:"p"},"refine")," applications because it is a JavaScript-based tool."),(0,o.kt)("p",null,"To check if you already have a compatible version of Node.js (v.16.0.0 or higher) installed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch your terminal and type the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you do not have a compatible version of Node.js installed, follow these instructions to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"install Node.js")," via the terminal."))),(0,o.kt)("h3",{id:"code-editor"},"Code Editor"),(0,o.kt)("p",null,"In addition to a terminal, you will also need a code editor to write and edit your code. A code editor is a software application that allows you to write and edit code for various programming languages."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial will use ",(0,o.kt)("strong",{parentName:"p"},"VS Code"),", but you can use any code editor that is compatible with your operating system. Some other popular code editors include ",(0,o.kt)("strong",{parentName:"p"},"Sublime Text"),", ",(0,o.kt)("strong",{parentName:"p"},"Atom")," and ",(0,o.kt)("strong",{parentName:"p"},"Eclipse"),".")),(0,o.kt)(c,{mdxType:"Checklist"},(0,o.kt)(u,{id:"has-access-to-terminal",mdxType:"ChecklistItem"},"I am able to access the command line via a terminal."),(0,o.kt)(u,{id:"installed-nodejs",mdxType:"ChecklistItem"},"I have a compatible version of Node.js installed on my device."),(0,o.kt)(u,{id:"installed-vscode",mdxType:"ChecklistItem"},"I have a code editor installed.")))}v.isMDXComponent=!0}}]);