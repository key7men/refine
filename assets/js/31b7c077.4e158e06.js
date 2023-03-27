"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>l});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),l=a,h=m["".concat(p,".").concat(l)]||m[l]||u[l]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function l(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"breadcrumb",title:"Breadcrumb",sidebar_label:"Breadcrumb",swizzle:!0},i=void 0,c={unversionedId:"api-reference/chakra-ui/components/breadcrumb",id:"api-reference/chakra-ui/components/breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Chakra UI Breadcrumb components using the useBreadcrumb` hook.",source:"@site/docs/api-reference/chakra-ui/components/breadcrumb.md",sourceDirName:"api-reference/chakra-ui/components",slug:"/api-reference/chakra-ui/components/breadcrumb",permalink:"/docs/api-reference/chakra-ui/components/breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/components/breadcrumb.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679934123,formattedLastUpdatedAt:"Mar 27, 2023",frontMatter:{id:"breadcrumb",title:"Breadcrumb",sidebar_label:"Breadcrumb",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/chakra-ui/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/api-reference/chakra-ui/components/buttons/clone-button"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const m={toc:s};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Chakra UI ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/breadcrumb/usage"},"Breadcrumb")," components using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useBreadcrumb"},(0,a.kt)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("admonition",{title:"Legacy Behavior (Dashboard Page)",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In earlier versions of ",(0,a.kt)("strong",{parentName:"p"},"refine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component had accepted ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage")," which could be used to add an index page to your app. With the changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," API of ",(0,a.kt)("strong",{parentName:"p"},"refine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage")," is deprecated. You can now define an index route yourself manually by your router package."),(0,a.kt)("p",{parentName:"admonition"},"In earlier versions, the home icon in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," was created by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage"),", now it is rendered if you define a an action route as ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"breadcrumbprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Chakra UI ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/breadcrumb/usage"},"Breadcrumb")," component so it can be configured with the ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/chakra-ui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"showhome"},(0,a.kt)("inlineCode",{parentName:"h3"},"showHome")),(0,a.kt)("p",null,"If you have a page with route ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", it will be used as the root of the hierarchy and shown in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," with a home icon. To hide the root item, set ",(0,a.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/chakra-ui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb showHome={true} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"meta"},(0,a.kt)("inlineCode",{parentName:"h3"},"meta")),(0,a.kt)("p",null,"If your routes has additional parameters in their paths, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component to use them while creating the paths and filling the parameters in the paths. By default, existing URL parameters are used. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," to override them or add new ones."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/chakra-ui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb meta={{ authorId: "123" }} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"hideicons"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideIcons")),(0,a.kt)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/chakra-ui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb hideIcons />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(d,{module:"@refinedev/chakra-ui/Breadcrumb",mdxType:"PropsTable"}))}l.isMDXComponent=!0}}]);