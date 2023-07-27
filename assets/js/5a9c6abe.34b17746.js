"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Migrating a React-Admin Application to refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",slug:"migrating-a-react-admin-application-to-refine",authors:"umut",tags:["refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/migrating-a-react-admin-application-to-refine",source:"@site/blog/2021-10-6-migrating-react-admin-application-to-refine.md",title:"Migrating a React-Admin Application to refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",date:"2021-10-06T00:00:00.000Z",formattedDate:"October 6, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"}],readingTime:5.34,hasTruncateMarker:!0,authors:[{name:"Umut \xd6zdemir",title:"Frontend Developer",url:"https://github.com/miyavsu-limited",imageURL:"https://github.com/miyavsu-limited.png",key:"umut"}],frontMatter:{title:"Migrating a React-Admin Application to refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",slug:"migrating-a-react-admin-application-to-refine",authors:"umut",tags:["refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine"},nextItem:{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs"},relatedPosts:[{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"June 1, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:13.02,date:"2023-06-01T00:00:00.000Z"},{title:"Refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of refine and react-admin",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.975,date:"2021-11-26T00:00:00.000Z"},{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:14.295,date:"2022-09-22T00:00:00.000Z"}],authorPosts:[]},m={authorsImageUrls:[void 0]},p=[{value:"Migrating a React-Admin Application to refine",id:"migrating-a-react-admin-application-to-refine",level:3},{value:"Migrating Listing Pages",id:"migrating-listing-pages",level:2},{value:"Migrating Create/Edit Pages",id:"migrating-createedit-pages",level:2}],d={toc:p};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity. My mission was to migrate it and it took one and a half days for me to rewrite the panel in refine."),(0,a.kt)("h3",{id:"migrating-a-react-admin-application-to-refine"},"Migrating a React-Admin Application to refine"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine")," is an extremely customizable ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," based ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," framework for data-intensive applications and it handles most of the CRUD functionality that can be a requirement in many applications, without much effort. Providing the rest of the desired functionality (outside CRUD) is up to you, like in any ",(0,a.kt)("strong",null,"React")," application."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/"},"React-Admin")," is an amazing B2B application framework based on ",(0,a.kt)("a",{parentName:"p",href:"https://material.io/"},"Material Design"),", using ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/getting-started/overview/"},"Material UI"),". It provides ready-to-fetch-data components, so you just compose them together to create an application."),(0,a.kt)("strong",null,"refine")," is different in the way it makes you compose your application. refine directly provides ",(0,a.kt)("strong",null,"Ant Design")," components and some hooks to work with those components. Hooks give you the required props for those Ant Design components.",(0,a.kt)("p",null,"It is, also, one step forward towards the dream of ",(0,a.kt)("strong",null,"making it headless"),"."),(0,a.kt)("p",null,"To learn more about refine, see: ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"https://refine.dev/docs/")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-6-migrating-react-admin-to-refine/sider.png",alt:"sider"})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"Our panel has 7 resources (all listable), which 4 of them must have create and edit pages, 6 of them must be exportable to ",(0,a.kt)("inlineCode",{parentName:"em"},".csv")," files and some of those resources have images, all images must be uploaded in ",(0,a.kt)("inlineCode",{parentName:"em"},"base64")," format."))))),(0,a.kt)("p",null,"This is how it looks before the migration (React-Admin):"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-6-migrating-react-admin-to-refine/react_admin.png",alt:"react-admin"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"And this is how it looks like after the migration (refine):"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-6-migrating-react-admin-to-refine/refine_table.png",alt:"refine"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Both of these images show a list page of a resource (campaign)."),(0,a.kt)("h2",{id:"migrating-listing-pages"},"Migrating Listing Pages"),(0,a.kt)("p",null,"List pages have one/more tables inside them. Ideally, all table state should be managed by the framework in use."),(0,a.kt)("p",null,"refine is very flexible with tables. You can put them anywhere, configure it as much as you want with ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/hooks/table/useTable/"},"useTable"),". See the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/demo/"},"fineFoods example")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/examples/finefoods-antd/src/pages/categories/list.tsx"},"it's code"),"."),(0,a.kt)("p",null,"Here is an example list page from React-Admin that shows you the list of ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),",",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"isActive"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"startDate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"endDate")," from the API endpoint for ",(0,a.kt)("inlineCode",{parentName:"p"},"campaigns")," resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    List as ReactAdminList,\n    Datagrid,\n    TextField,\n    BooleanField,\n    EditButton,\n} from "react-admin";\n\nimport LocalizeDateField from "../../fields/LocalizeDateField";\n\nconst List = (props) => (\n    <ReactAdminList {...props}>\n        <Datagrid>\n            <TextField source="id" label="ID" />\n            <TextField source="name" label="Name" />\n            <BooleanField source="isActive" label="Active" />\n            <LocalizeDateField source="startDate" />\n            <LocalizeDateField source="endDate" />\n            <EditButton basePath="/campaigns" />\n        </Datagrid>\n    </ReactAdminList>\n);\n\nexport default List;\n')),(0,a.kt)("p",null,"And looks like this:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-6-migrating-react-admin-to-refine/react_admin.png",alt:"react-admin"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here's the code that renders this same list in refine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    List,\n    Table,\n    Space,\n    Button,\n    BooleanField,\n    DateField,\n    CreateButton,\n    EditButton,\n    ExportButton,\n    Icons,\n    useTable,\n    getDefaultSortOrder,\n    useExport,\n    useDeleteMany,\n    IResourceComponentsProps,\n} from "@pankod/refine";\n\nimport { ICampaign } from "interfaces";\n\nexport const CampaignsList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps, sorter } = useTable<ICampaign>({\n        sorters: {\n            initial: [\n                {\n                    field: "id",\n                    order: "asc",\n                },\n            ],\n        }\n    });\n\n    const { isLoading: isExportLoading, triggerExport } = useExport();\n\n    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>(\n        [],\n    );\n\n    const handleSelectChange = (selectedRowKeys: React.Key[]) => {\n        setSelectedRowKeys(selectedRowKeys);\n    };\n\n    const rowSelection = {\n        selectedRowKeys,\n        onChange: handleSelectChange,\n    };\n\n    const { mutate, isLoading } = useDeleteMany<ICampaign>();\n\n    const deleteSelectedItems = () => {\n        mutate(\n            {\n                resource: "campaigns",\n                ids: selectedRowKeys.map(String),\n                mutationMode: "undoable",\n            },\n            {\n                onSuccess: () => {\n                    setSelectedRowKeys([]);\n                },\n            },\n        );\n    };\n\n    const hasSelected = selectedRowKeys.length > 0;\n\n    return (\n        <List\n            pageHeaderProps={{\n                subTitle: hasSelected && (\n                    <Button\n                        type="text"\n                        onClick={() => deleteSelectedItems()}\n                        loading={isLoading}\n                        icon={\n                            <Icons.DeleteOutlined style={{ color: "green" }} />\n                        }\n                    >\n                        Delete\n                    </Button>\n                ),\n                extra: (\n                    <Space>\n                        <CreateButton />\n                        <ExportButton\n                            onClick={triggerExport}\n                            loading={isExportLoading}\n                        />\n                    </Space>\n                ),\n            }}\n        >\n            <Table {...tableProps} rowSelection={rowSelection} rowKey="id">\n                <Table.Column\n                    dataIndex="id"\n                    title="ID"\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("id", sorter)}\n                    width="70px"\n                />\n                <Table.Column\n                    dataIndex="name"\n                    title="Name"\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("name", sorter)}\n                />\n                <Table.Column\n                    dataIndex="isActive"\n                    title="Active"\n                    render={(isActive) => <BooleanField value={isActive} />}\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("isActive", sorter)}\n                />\n                <Table.Column\n                    dataIndex="startDate"\n                    title="Start Date"\n                    render={(value) => <DateField value={value} format="LLL" />}\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("startDate", sorter)}\n                />\n                <Table.Column\n                    dataIndex="endDate"\n                    title="End Date"\n                    render={(value) => <DateField value={value} format="LLL" />}\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("endDate", sorter)}\n                />\n                <Table.Column<ICampaign>\n                    fixed="right"\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, { id }) => <EditButton recordItemId={id} />}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,a.kt)("p",null,"It is long. Because we had to handle selection and bulk delete button manually. That's because refine is decoupled from Ant Design components' code, too. But the advantage here is that you use Ant Design. You can use the Ant Design's Table as however you like, and then connect its data with refine. The point is customizability.\nAnd it looks like this:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-6-migrating-react-admin-to-refine/refine_table.png",alt:"refine"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"In refine, we use Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/table/"},"Table")," components."),(0,a.kt)("h2",{id:"migrating-createedit-pages"},"Migrating Create/Edit Pages"),(0,a.kt)("p",null,"A resource creation page's code looked like this in React-Admin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    required,\n    Create as ReactAdminCreate,\n    SimpleForm,\n    BooleanInput,\n    TextInput,\n    DateTimeInput,\n} from "react-admin";\n\nconst Create = (props: any) => (\n    <ReactAdminCreate {...props}>\n        <SimpleForm>\n            <TextInput\n                fullWidth\n                variant="outlined"\n                source="name"\n                validate={[required()]}\n            />\n            <BooleanInput\n                fullWidth\n                variant="outlined"\n                source="isActive"\n                label="Active"\n            />\n            <DateTimeInput\n                source="startDate"\n                label="Start Date"\n                validate={[required()]}\n                fullWidth\n                variant="outlined"\n            />\n            <DateTimeInput\n                source="endDate"\n                label="End Date"\n                validate={[required()]}\n                fullWidth\n                variant="outlined"\n            />\n        </SimpleForm>\n    </ReactAdminCreate>\n);\n\nexport default Create;\n')),(0,a.kt)("p",null,"And it looks like this:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-6-migrating-react-admin-to-refine/react_admin_create.png",alt:"react-admin"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"For refine, code of our campaign create page looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Create,\n    DatePicker,\n    Form,\n    Input,\n    IResourceComponentsProps,\n    Switch,\n    useForm,\n} from "@pankod/refine";\nimport dayjs from "dayjs";\n\nexport const CampaignsCreate: React.FC<IResourceComponentsProps> = () => {\n    const { formProps, saveButtonProps } = useForm();\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form\n                {...formProps}\n                layout="vertical"\n                initialValues={{ isActive: false }}\n            >\n                <Form.Item\n                    label="Name"\n                    name="name"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Is Active"\n                    name="isActive"\n                    valuePropName="checked"\n                >\n                    <Switch />\n                </Form.Item>\n                <Form.Item\n                    label="Start Date"\n                    name="startDate"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                    getValueProps={(value) => dayjs(value)}\n                >\n                    <DatePicker />\n                </Form.Item>\n                <Form.Item\n                    label="End Date"\n                    name="endDate"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                    getValueProps={(value) => dayjs(value)}\n                >\n                    <DatePicker />\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n')),(0,a.kt)("p",null,"In both refine and React-Admin, by default, there aren't much differences between new resource page's code and resource edit page's code."),(0,a.kt)("p",null,"Also note that for both refine and React-Admin, this is all customizable. These code examples and screenshots mean little or no extra customization in resource list/create/edit pages."),(0,a.kt)("p",null,"Advantage of refine is that you use Ant Design directly. Let's assume you have your own way around your Ant Design application. refine doesn't interfere. Instead, it provides you the necessary data for your Ant Design application. This way, refine gives you all the freedom to customize all the components as you wish."),(0,a.kt)("p",null,"Happy hacking with refine \ud83e\ude84"))}u.isMDXComponent=!0}}]);