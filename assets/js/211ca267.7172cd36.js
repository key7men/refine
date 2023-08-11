"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,m=f["".concat(l,".").concat(b)]||f[b]||p[b]||o;return r?a.createElement(m,c(c({ref:t},u),{},{components:r})):a.createElement(m,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"basic",title:"Basic","example-title":"Basic React Table with Chakra UI","example-tags":["table","chakra-ui","react-table"]},l=void 0,s={unversionedId:"examples/table/chakra-ui/basic",id:"examples/table/chakra-ui/basic",title:"Basic",description:"refine allows you to use all the features of React Table with @refinedev/react-table adapter. In this way, you can manage your server-side data operations. By using this adapter, you can directly use all the features of React Table in your refine project. For more information, you can view the live example or review the source code to see how it's used with Chakra UI.",source:"@site/docs/examples/table/chakra-ui/basic.md",sourceDirName:"examples/table/chakra-ui",slug:"/examples/table/chakra-ui/basic",permalink:"/docs/examples/table/chakra-ui/basic",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/chakra-ui/basic.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1691775949,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{id:"basic",title:"Basic","example-title":"Basic React Table with Chakra UI","example-tags":["table","chakra-ui","react-table"]}},u={},p=[],f=(b="CodeSandboxExample",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var b;const m={toc:p};function y(e){var{components:t}=e,r=c(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," allows you to use all the features of ",(0,a.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/"},"React Table")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," adapter. In this way, you can manage your server-side data operations. By using this adapter, you can directly use all the features of React Table in your ",(0,a.kt)("strong",{parentName:"p"},"refine")," project. For more information, you can view the live example or review the source code to see how it's used with Chakra UI."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table/"},"Refer to the React Table documentation for more information. \u2192")),(0,a.kt)(f,{path:"table-chakra-ui-basic",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);