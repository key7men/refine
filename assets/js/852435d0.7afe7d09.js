"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15501],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const a={id:"delete-button",title:"Delete",swizzle:!0},i=void 0,s={unversionedId:"api-reference/mui/components/buttons/delete-button",id:"version-3.xx.xx/api-reference/mui/components/buttons/delete-button",title:"Delete",description:"` uses Material UI  and ` components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/buttons/delete.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/delete-button",permalink:"/docs/3.xx.xx/api-reference/mui/components/buttons/delete-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/buttons/delete.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679934123,formattedLastUpdatedAt:"Mar 27, 2023",frontMatter:{id:"delete-button",title:"Delete",swizzle:!0},sidebar:"someSidebar",previous:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/mui/components/buttons/create-button"},next:{title:"Edit",permalink:"/docs/3.xx.xx/api-reference/mui/components/buttons/edit-button"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>onSuccess</code>",id:"onsuccess",level:3},{value:"<code>mutationMode</code>",id:"mutationmode",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"How to override confirm texts?",id:"how-to-override-confirm-texts",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3}],c=(p="PropsTable",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const u={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," uses Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/loading-button/#main-content"},(0,o.kt)("inlineCode",{parentName:"a"},"<LoadingButton>"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-dialog/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Dialog>"))," components.\nWhen you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,o.kt)("inlineCode",{parentName:"a"},"useDelete"))," method provided by your ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'const { Create } = RefineMui;\nimport dataProvider from "@pankod/refine-simple-rest";\n// visible-block-start\nimport {\n    useDataGrid,\n    DataGrid,\n    GridColumns,\n    List,\n    // highlight-next-line\n    DeleteButton,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    { field: "title", headerName: "Title", minWidth: 400, flex: 1 },\n    {\n        field: "actions",\n        headerName: "Actions",\n        renderCell: function render({ row }) {\n            // highlight-next-line\n            return <DeleteButton size="small" recordItemId={row.id} />;\n        },\n        align: "center",\n        headerAlign: "center",\n        minWidth: 80,\n    },\n];\n\nconst PostsList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nconst simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n);\n\nconst customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n        await new Promise((resolve) => setTimeout(resolve, 500));\n\n        return {\n            message: "You have successfully deleted the record",\n        };\n    },\n};\n\nrender(\n    <RefineMuiDemo\n        dataProvider={customDataProvider}\n        resources={[\n            {\n                name: "posts",\n                list: PostsList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"recorditemid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which record will be deleted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\n\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mui";\n\nconst MyDeleteComponent = () => {\n    return <DeleteButton resourceNameOrRouteName="posts" recordItemId="1" />;\n};\n\n// visible-block-end\n\nconst simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n);\n\nconst customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n        await new Promise((resolve) => setTimeout(resolve, 500));\n\n        return {\n            message: "You have successfully deleted the record",\n        };\n    },\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        dataProvider={customDataProvider}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyDeleteComponent}\n    />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,o.kt)("inlineCode",{parentName:"a"},"useDelete"))," method and then the record whose resource is ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," and whose id is ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," gets deleted."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the id information from the route by default.")),(0,o.kt)("h3",{id:"resourcenameorroutename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," allows us to manage which resource's record is going to be deleted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mui";\n\nconst MyDeleteComponent = () => {\n    return (\n        <DeleteButton resourceNameOrRouteName="categories" recordItemId="2" />\n    );\n};\n// visible-block-end\nconst simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n);\n\nconst customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n        await new Promise((resolve) => setTimeout(resolve, 500));\n\n        return {\n            message: "You have successfully deleted the record",\n        };\n    },\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        dataProvider={customDataProvider}\n        resources={[\n            {\n                name: "posts",\n            },\n            {\n                name: "categories",\n            },\n        ]}\n        DashboardPage={MyDeleteComponent}\n    />,\n);\n')),(0,o.kt)("h3",{id:"onsuccess"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSuccess")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onSuccess")," can be used if you want to do anything on the result returned after the delete request."),(0,o.kt)("p",null,"For example, let's ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," after deletion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mui";\n\nconst MyDeleteComponent = () => {\n    return (\n        <DeleteButton\n            resourceNameOrRouteName="posts" \n            recordItemId="1"\n            onSuccess={(value) => {\n                console.log(value);\n            }}\n        />\n    );\n};\n// visible-block-end\nconst simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n);\n\nconst customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n        await new Promise((resolve) => setTimeout(resolve, 500));\n\n        return {\n            message: "You have successfully deleted the record",\n        };\n    },\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        dataProvider={customDataProvider}\n        resources={[\n            {\n                name: "posts",\n            }\n        ]}\n        DashboardPage={MyDeleteComponent}\n    />,\n);\n')),(0,o.kt)("h3",{id:"mutationmode"},(0,o.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,o.kt)("p",null,"Determines which mode mutation will have while executing ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton>"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/mutation-mode"},"Refer to the mutation mode docs for further information. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    // highlight-next-line\n    DeleteButton,\n    TableHead,\n    TableRow,\n    TableCell,\n    TableBody,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>();\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>ID</TableCell>\n                        <TableCell>Title</TableCell>\n                        <TableCell align="center">Action</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell>{row.id}</TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell align="center">\n                                <DeleteButton\n                                    recordItemId={row.id}\n                                    // highlight-next-line\n                                    mutationMode="undoable"\n                                />\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mui";\n\nconst MyDeleteComponent = () => {\n    return (\n        <DeleteButton\n            // highlight-next-line\n            hideText={true}\n        />\n    );\n};\n// visible-block-end\nconst simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n);\n\nconst customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n        await new Promise((resolve) => setTimeout(resolve, 500));\n\n        return {\n            message: "You have successfully deleted the record",\n        };\n    },\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        dataProvider={customDataProvider}\n        resources={[\n            {\n                name: "posts",\n                list: MyDeleteComponent,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"accesscontrol"},(0,o.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,o.kt)("p",null,"This prop can be used to skip access control check with its ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-mui";\n\nexport const MyListComponent = () => {\n    return <DeleteButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />;\n};\n')),(0,o.kt)("h2",{id:"how-to-override-confirm-texts"},"How to override confirm texts?"),(0,o.kt)("p",null,"You can change the text that appears when you confirm a transaction with ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmTitle")," prop, as well as what ok and cancel buttons text look like with ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmOkText")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmCancelText")," props."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mui";\n\nconst MyDeleteComponent = () => {\n    return (\n        <DeleteButton\n            // highlight-start\n            confirmTitle="Title"\n            confirmOkText="Ok Text"\n            confirmCancelText="Delete Text"\n            // highlight-end\n        />\n    );\n};\n// visible-block-end\n\nconst simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n);\n\nconst customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n        await new Promise((resolve) => setTimeout(resolve, 500));\n\n        return {\n            message: "You have successfully deleted the record",\n        };\n    },\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        dataProvider={customDataProvider}\n        resources={[\n            {\n                name: "posts",\n                list: MyDeleteComponent,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(c,{module:"@pankod/refine-mui/DeleteButton",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},"Button"),".")))}m.isMDXComponent=!0}}]);