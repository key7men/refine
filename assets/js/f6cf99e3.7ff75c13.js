"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38237],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,i={unversionedId:"api-reference/mantine/hooks/useSelect/crud-live-preview",id:"api-reference/mantine/hooks/useSelect/crud-live-preview",title:"crud-live-preview",description:"",source:"@site/docs/api-reference/mantine/hooks/useSelect/crud-live-preview.md",sourceDirName:"api-reference/mantine/hooks/useSelect",slug:"/api-reference/mantine/hooks/useSelect/crud-live-preview",permalink:"/docs/api-reference/mantine/hooks/useSelect/crud-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/hooks/useSelect/crud-live-preview.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1684412367,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=300px",live:!0,url:"http://localhost:3000",previewHeight:"300px"},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport { Create, useForm, useSelect } from "@refinedev/mantine";\nimport { Select } from "@mantine/core";\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nconst ProductCreate: React.FC = () => {\n    const { saveButtonProps, getInputProps, errors } = useForm({\n        initialValues: {\n            category: {\n                id: "",\n            },\n        },\n    });\n\n    const { selectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <form>\n                <Select\n                    mt={8}\n                    label="Category"\n                    placeholder="Select a category"\n                    {...getInputProps("category.id")}\n                    {...selectProps}\n                />\n            </form>\n        </Create>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            create: ProductCreate,\n        },\n    ],\n});\nrender(<RefineMantineDemo />);\n')))}u.isMDXComponent=!0}}]);