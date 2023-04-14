"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7182],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"general-concepts",title:"General Concepts"},i=void 0,s={unversionedId:"api-reference/general-concepts",id:"api-reference/general-concepts",title:"General Concepts",description:"-   refine core is fully independent of UI. So you can use core components and hooks without any UI dependency.",source:"@site/docs/api-reference/general-concepts.md",sourceDirName:"api-reference",slug:"/api-reference/general-concepts",permalink:"/docs/api-reference/general-concepts",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/general-concepts.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681462112,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"general-concepts",title:"General Concepts"},sidebar:"someSidebar",previous:{title:"API Reference",permalink:"/docs/api-reference"},next:{title:"Core API",permalink:"/docs/api-reference/core"}},p={},l=[{value:"<code>resource</code>",id:"resource",level:2},{value:"<code>meta</code>",id:"meta",level:2},{value:"Pass global <code>meta</code> specific to a resource",id:"pass-global-meta-specific-to-a-resource",level:3},{value:"Pass <code>meta</code> with hook-specific properties",id:"pass-meta-with-hook-specific-properties",level:3},{value:"Use URL query parameters as <code>meta</code> properties",id:"use-url-query-parameters-as-meta-properties",level:3},{value:"Use <code>meta</code> to generate GraphQL queries",id:"use-meta-to-generate-graphql-queries",level:3},{value:"How to pass <code>meta</code> to your existing <code>dataProvider</code> methods",id:"how-to-pass-meta-to-your-existing-dataprovider-methods",level:3}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"refine")," core is fully independent of UI. So you can use core components and hooks without any UI dependency."),(0,a.kt)("li",{parentName:"ul"},"All the ",(0,a.kt)("strong",{parentName:"li"},"data")," related hooks(",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useTable/"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable")),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm")),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useList"},(0,a.kt)("inlineCode",{parentName:"a"},"useList"))," etc.) of ",(0,a.kt)("strong",{parentName:"li"},"refine")," can be given some common properties like ",(0,a.kt)("inlineCode",{parentName:"li"},"resource"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"meta"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"queryOptions")," etc.")),(0,a.kt)("h2",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h2"},"resource")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a params. This parameter is usually used to as a API endpoint path. It all depends on how to handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),". See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},(0,a.kt)("inlineCode",{parentName:"a"},"creating a data provider"))," section for an example of how ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," are handled."),(0,a.kt)("p",null,"How does refine know what the resource value is?"),(0,a.kt)("p",null,"1- The resource value is determined from the active route where the component or the hook is used."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To make the inference work, you need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component from your router package choice.")),(0,a.kt)("p",null,"Like below, if you are using the hook in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," component, the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," value defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},'"posts"'),". Because the active route is ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts")," and its also defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerBindings from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\nimport { PostList } from "pages/posts/list.tsx";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "posts",\n                        list: "/posts",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route path="/posts" element={<PostList />} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"2- The resource value is determined from the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop of the hook."),(0,a.kt)("p",null,"You can override the default ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," value hook by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop to the hook like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@refinedev/core";\n\nconst PostList: React.FC = () => {\n    const result = useTable({\n        //highlight-next-line\n        resource: "users",\n    });\n\n    return <div>...</div>;\n};\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The value you pass to the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property is also used to determine the active ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," array. Defining the resource in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," array is ",(0,a.kt)("strong",{parentName:"p"},"not")," required for your API interactions to work but it will enable features of ",(0,a.kt)("strong",{parentName:"p"},"refine")," such as redirecting to the list page after a successful create or update operation.")),(0,a.kt)("p",null,"How can I request an API with nested route?"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/faq#how-can-i-request-an-api-with-nested-route"},"Refer to how to use resource with nested routes documentation for more information. ","\u2192")),(0,a.kt)("h2",{id:"meta"},(0,a.kt)("inlineCode",{parentName:"h2"},"meta")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,a.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON)."),(0,a.kt)("li",{parentName:"ul"},"Filling additional parameters in target routes when occurs redirection.")),(0,a.kt)("h3",{id:"pass-global-meta-specific-to-a-resource"},"Pass global ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," specific to a resource"),(0,a.kt)("p",null,"You can define a global ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," specific to a resource, which will be passed to all the data provider methods whenever the resource is matched."),(0,a.kt)("p",null,"For instance, to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"role")," property to all data provider methods for the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource, use the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    // highlight-start\n                    meta: {\n                        role: "editor",\n                    },\n                    // highlight-end\n                },\n            ]}\n        />\n    );\n};\n')),(0,a.kt)("h3",{id:"pass-meta-with-hook-specific-properties"},"Pass ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," with hook-specific properties"),(0,a.kt)("p",null,"You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property with hook-specific properties to data provider methods, which will override the global ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," of the resource."),(0,a.kt)("p",null,"For example, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getOne")," method by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne")," hook, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'    useOne({\n        resource: "posts",\n        id: 1,\n        // highlight-start\n        meta: {\n            headers: { "x-meta-data": "true" },\n        },\n        // highlight-end\n    });\n\n    const myDataProvider = {\n        ...\n        getOne: async ({ resource, id, meta }) => {\n            // highlight-next-line\n            const headers = meta?.headers ?? {};\n            const url = `${apiUrl}/${resource}/${id}`;\n\n            //highlight-next-line\n            const { data } = await httpClient.get(url, { headers });\n\n            return {\n                data,\n            };\n        },\n        ...\n    };\n')),(0,a.kt)("p",null,"By using this logic, you can pass any property to handle your specific use cases."),(0,a.kt)("h3",{id:"use-url-query-parameters-as-meta-properties"},"Use URL query parameters as ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," properties"),(0,a.kt)("p",null,"Query parameters on the URL can also be used as ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," properties for data provider methods."),(0,a.kt)("p",null,"For example, if the URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/posts?foo=bar"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," property will be passed to the data provider methods as a ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const dataProvider = {\n    getList: async ({ resource, meta }) => {\n        console.log(meta); // { foo: "bar" }\n    },\n    ...\n};\n')),(0,a.kt)("p",null,"This can be useful when you want to customize the behavior of data provider methods based on query parameters passed in the URL."),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," is created in the following order of precedence:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Passed to the hook."),(0,a.kt)("li",{parentName:"ol"},"Defined in the URL query parameters."),(0,a.kt)("li",{parentName:"ol"},"Defined in the ",(0,a.kt)("inlineCode",{parentName:"li"},"resources")," prop of the ",(0,a.kt)("inlineCode",{parentName:"li"},"<Refine>"),"."))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," is only passed to the data provider methods via the following hooks and their derivatives:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useTable/"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useForm/"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useSelect/"},(0,a.kt)("inlineCode",{parentName:"a"},"useSelect"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/show/useShow/"},(0,a.kt)("inlineCode",{parentName:"a"},"useShow"))))),(0,a.kt)("h3",{id:"use-meta-to-generate-graphql-queries"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," to generate GraphQL queries"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/data-provider/graphql"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"GraphQL")," guide to learn how to use ",(0,a.kt)("inlineCode",{parentName:"a"},"meta")," to create GraphQL queries ","\u2192")),(0,a.kt)("h3",{id:"how-to-pass-meta-to-your-existing-dataprovider-methods"},"How to pass ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," to your existing ",(0,a.kt)("inlineCode",{parentName:"h3"},"dataProvider")," methods"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/faq#how-i-can-override-specific-function-of-data-providers"},"Refer to the how to pass ",(0,a.kt)("inlineCode",{parentName:"a"},"meta")," to your existing ",(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")," methods ","\u2192")))}c.isMDXComponent=!0}}]);