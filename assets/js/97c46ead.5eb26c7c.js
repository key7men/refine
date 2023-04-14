"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"api-reference/core/hooks/useNotification/basic-usage-live-preview",id:"api-reference/core/hooks/useNotification/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/api-reference/core/hooks/useNotification/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/useNotification",slug:"/api-reference/core/hooks/useNotification/basic-usage-live-preview",permalink:"/docs/api-reference/core/hooks/useNotification/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/useNotification/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681462112,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{}},s={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=200px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"200px",hideCode:!0},'setInitialRoutes(["/"]);\n// visible-block-start\nimport { useNotification } from "@refinedev/core";\nimport { Button, Stack } from "@mui/material";\n\nconst ExamplePage: React.FC = () => {\n    const { open, close } = useNotification();\n\n    return (\n        <Stack spacing={2} direction="row">\n            <Button\n                color="success"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "success",\n                        message: "Success",\n                        description: "Success description",\n                    })\n                }\n            >\n                Success\n            </Button>\n            <Button\n                color="error"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "error",\n                        message: "Error",\n                        description: "Error description",\n                    })\n                }\n            >\n                Error\n            </Button>\n\n            <Button\n                color="secondary"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "progress",\n                        message: "Progress",\n                        undoableTimeout: 5,\n                        cancelMutation: () => {\n                            alert("cancelMutation");\n                        },\n                    })\n                }\n            >\n                Progress\n            </Button>\n        </Stack>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    DashboardPage: () => <ExamplePage />,\n    resources: [\n        {\n            name: "post",\n            create: () => {},\n        },\n    ],\n});\nrender(<RefineMuiDemo />);\n')))}u.isMDXComponent=!0}}]);