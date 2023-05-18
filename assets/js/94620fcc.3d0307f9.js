"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,g=s["".concat(l,".").concat(m)]||s[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},15114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"audit-log-antd",title:"Audit Log with Antd","example-tags":["audit-log-provider","antd"],"example-title":"Audit Log with Antd"},i=void 0,d={unversionedId:"examples/audit-log/audit-log-antd",id:"examples/audit-log/audit-log-antd",title:"Audit Log with Antd",description:"refine allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. This example demonstrates creating an audit log with Ant Design.",source:"@site/docs/examples/audit-log/audit-log-antd.md",sourceDirName:"examples/audit-log",slug:"/examples/audit-log/audit-log-antd",permalink:"/docs/examples/audit-log/audit-log-antd",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/audit-log/audit-log-antd.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1684412367,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{id:"audit-log-antd",title:"Audit Log with Antd","example-tags":["audit-log-provider","antd"],"example-title":"Audit Log with Antd"},sidebar:"someSidebar",previous:{title:"OTP Login",permalink:"/docs/examples/auth-provider/otpLogin"},next:{title:"Audit Log Provider",permalink:"/docs/examples/audit-log/audit-log-provider"}},l={},p=[],u=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const s={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. This example demonstrates creating an audit log with ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/audit-log-provider/"},"Refer to the refine Audit Log Provider documentation for more information. \u2192")),(0,o.kt)(u,{path:"antd-audit-log",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);