"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"markdown",title:"Markdown",swizzle:!0},c=void 0,p={unversionedId:"api-reference/chakra-ui/components/fields/markdown",id:"version-3.xx.xx/api-reference/chakra-ui/components/fields/markdown",title:"Markdown",description:"This field lets you display markdown content. It supports GitHub Flavored Markdown.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/fields/markdown.md",sourceDirName:"api-reference/chakra-ui/components/fields",slug:"/api-reference/chakra-ui/components/fields/markdown",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/fields/markdown",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/fields/markdown.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695072280,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"markdown",title:"Markdown",swizzle:!0},sidebar:"someSidebar",previous:{title:"File",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/fields/file"},next:{title:"Number",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/fields/number"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],u=(f="PropsTable",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var f;const m={toc:d};function h(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    Layout: RefineChakra.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineChakra.ChakraProvider theme={RefineChakra.refineTheme}>\n            {children}\n        </RefineChakra.ChakraProvider>\n    );\n};\n')),(0,r.kt)("p",null,"This field lets you display markdown content. It supports ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's see how we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<MarkdownField>")," in a show page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { ShowButton } from "@pankod/refine-chakra-ui";\n\n// visible-block-start\nimport { useShow } from "@pankod/refine-core";\nimport {\n    Show,\n    Heading,\n    Text,\n    // highlight-next-line\n    MarkdownField,\n} from "@pankod/refine-chakra-ui";\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show isLoading={isLoading}>\n            <Heading as="h5" size="sm">\n                Id\n            </Heading>\n            <Text mt={2}>{record?.id}</Text>\n\n            <Heading as="h5" size="sm" mt={4}>\n                Content\n            </Heading>\n            // highlight-next-line\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: number;\n    content: string;\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            notificationProvider={RefineChakra.notificationProvider()}\n            resources={[\n                {\n                    name: "posts",\n                    show: PostShow,\n                    list: () => (\n                        <RefineChakra.VStack alignItems="flex-start">\n                            <RefineChakra.Text>\n                                This page is empty.\n                            </RefineChakra.Text>\n                            <ShowButton colorScheme="black" recordItemId="123">\n                                Show Item 123\n                            </ShowButton>\n                        </RefineChakra.VStack>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(u,{module:"@pankod/refine-chakra-ui/MarkdownField","value-description":"Markdown data to render",mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);