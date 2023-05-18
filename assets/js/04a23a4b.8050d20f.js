"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={id:"edit-button",title:"Edit",swizzle:!0},a=void 0,s={unversionedId:"api-reference/mui/components/buttons/edit-button",id:"api-reference/mui/components/buttons/edit-button",title:"Edit",description:"` uses Material UI  component. It uses the edit method from useNavigation` under the hood. It can be useful to redirect the app to the edit page route of resource.",source:"@site/docs/api-reference/mui/components/buttons/edit.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/edit-button",permalink:"/docs/api-reference/mui/components/buttons/edit-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/buttons/edit.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1684381289,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{id:"edit-button",title:"Edit",swizzle:!0},sidebar:"someSidebar",previous:{title:"Delete",permalink:"/docs/api-reference/mui/components/buttons/delete-button"},next:{title:"Export",permalink:"/docs/api-reference/mui/components/buttons/export-button"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=l("PropTag"),u=l("PropsTable"),m={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses Material UI ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,i.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," method from ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,i.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful to redirect the app to the edit page route of resource."),(0,i.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,i.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,i.kt)("strong",{parentName:"a"},"refine CLI")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n    useDataGrid,\n    List,\n    // highlight-next-line\n    EditButton,\n} from "@refinedev/mui";\nimport { DataGrid, GridColumns } from "@mui/x-data-grid";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    { field: "title", headerName: "Title", minWidth: 400, flex: 1 },\n    {\n        field: "actions",\n        headerName: "Actions",\n        renderCell: function render({ row }) {\n            // highlight-next-line\n            return <EditButton size="small" recordItemId={row.id} />;\n        },\n        align: "center",\n        headerAlign: "center",\n        minWidth: 80,\n    },\n];\n\nconst PostsList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostsList,\n                edit: () => (\n                    <RefineMui.Edit>Rest of the page here...</RefineMui.Edit>\n                ),\n            },\n        ]}\n    />,\n);\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"recorditemid"},(0,i.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path for the edit route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { EditButton } from "@refinedev/mui";\n\nconst MyEditComponent = () => {\n    return (\n        <EditButton\n            resource="posts"\n            // highlight-next-line\n            recordItemId="1"\n        />\n    );\n};\n\n// visible-block-end\n\nconst EditPage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                edit: EditPage,\n            },\n        ]}\n        DashboardPage={MyEditComponent}\n    />,\n);\n')),(0,i.kt)("p",null,"Clicking the button will trigger the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,i.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"<EditButton>"))," component reads the id information from the route by default.")),(0,i.kt)("h3",{id:"resource"},(0,i.kt)("inlineCode",{parentName:"h3"},"resource")),(0,i.kt)("p",null,"Redirection endpoint is defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," property and its ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," action path. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses the inferred resource from the route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mui";\n\nconst MyEditComponent = () => {\n    return (\n        <EditButton\n            // highlight-next-line\n            resource="categories"\n            recordItemId="2"\n        />\n    );\n};\n\n// visible-block-end\n\nconst EditPage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n            {\n                name: "categories",\n                edit: EditPage,\n            },\n        ]}\n        DashboardPage={MyEditComponent}\n    />,\n);\n')),(0,i.kt)("p",null,"Clicking the button will trigger the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,i.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route."),(0,i.kt)("h3",{id:"meta"},(0,i.kt)("inlineCode",{parentName:"h3"},"meta")),(0,i.kt)("p",null,"It is used to pass additional parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,i.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," method. You can pass additional parameters or override the existing ones using the ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," action route is defined by the pattern: ",(0,i.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/edit/:id"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n    return (\n        <EditButton meta={{ authorId: "10" }} />\n    );\n};\n')),(0,i.kt)("h3",{id:"hidetext"},(0,i.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,i.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mui";\n\nconst MyEditComponent = () => {\n    return (\n        <EditButton\n            // highlight-next-line\n            hideText={true}\n        />\n    );\n};\n\n// visible-block-end\n\nconst EditPage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MyEditComponent,\n                edit: EditPage,\n            },\n        ]}\n    />,\n);\n')),(0,i.kt)("h3",{id:"accesscontrol"},(0,i.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,i.kt)("p",null,"This prop can be used to skip access control check with its ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,i.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,i.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@refinedev/mui";\n\nexport const MyListComponent = () => {\n    return (\n        <EditButton\n            accessControl={{ enabled: true, hideIfUnauthorized: true }}\n        />\n    );\n};\n')),(0,i.kt)("h3",{id:"resourcenameorroutename-"},(0,i.kt)("del",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,i.kt)(c,{deprecated:!0,mdxType:"PropTag"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,i.kt)("p",null,"It is used to redirect the app to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/edit")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,i.kt)("inlineCode",{parentName:"p"},"/edit")," defined by the name property of resource object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mui";\n\nconst MyEditComponent = () => {\n    return (\n        <EditButton\n            // highlight-next-line\n            resourceNameOrRouteName="categories"\n            recordItemId="2"\n        />\n    );\n};\n\n// visible-block-end\n\nconst EditPage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n            {\n                name: "categories",\n                edit: EditPage,\n            },\n        ]}\n        DashboardPage={MyEditComponent}\n    />,\n);\n')),(0,i.kt)("p",null,"Clicking the button will trigger the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,i.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,i.kt)("inlineCode",{parentName:"p"},"/posts/edit/2"),"."),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties-1"},"Properties"),(0,i.kt)(u,{module:"@refinedev/mui/EditButton",mdxType:"PropsTable"}),(0,i.kt)("admonition",{title:"External Props",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},"Button"),".")))}h.isMDXComponent=!0}}]);