"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),f=o,d=b["".concat(s,".").concat(f)]||b[f]||c[f]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"useTable",title:"useTable","example-title":"Ant Design useTable Hook","example-tags":["table","antd"]},s=void 0,p={unversionedId:"examples/table/antd/useTable",id:"examples/table/antd/useTable",title:"useTable",description:"You may use the useTable hook to process your data with features compatible with the Ant Design Table Component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination.",source:"@site/docs/examples/table/antd/useTable.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/useTable",permalink:"/docs/examples/table/antd/useTable",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/antd/useTable.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695144910,formattedLastUpdatedAt:"Sep 19, 2023",frontMatter:{id:"useTable",title:"useTable","example-title":"Ant Design useTable Hook","example-tags":["table","antd"]},sidebar:"someSidebar",previous:{title:"useEditableTable",permalink:"/docs/examples/table/antd/useEditableTable"},next:{title:"useUpdateMany",permalink:"/docs/examples/table/antd/useUpdateMany"}},u={},c=[],b=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var f;const d={toc:c};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook to process your data with features compatible with the Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/table/"},"Table")," Component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/table/useTable/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useTable hook documentation for more information. \u2192")),(0,r.kt)(b,{path:"table-antd-use-table",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);