"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82821],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},h=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,u=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(u,a(a({ref:n},h),{},{components:t})):r.createElement(u,a({ref:n},h))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"theme",title:"Theme"},s=void 0,c={unversionedId:"api-reference/mantine/customization/theme",id:"version-3.xx.xx/api-reference/mantine/customization/theme",title:"Theme",description:"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored. You can either create your own theme object or use themes that provide from refine. There are two types of themes: LightTheme and DarkTheme. LightTheme tend to have dark text on a light background, while DarkTheme have light text on a dark background. Theme provides a way to your app's design to meet them.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/customization/theme.md",sourceDirName:"api-reference/mantine/customization",slug:"/api-reference/mantine/customization/theme",permalink:"/docs/3.xx.xx/api-reference/mantine/customization/theme",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/customization/theme.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1690449369,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{id:"theme",title:"Theme"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/url"},next:{title:"Layout",permalink:"/docs/3.xx.xx/api-reference/mantine/customization/layout"}},h={},m=[{value:"Theme customization",id:"theme-customization",level:2},{value:"Overriding the refine themes",id:"overriding-the-refine-themes",level:3},{value:"Theme switching",id:"theme-switching",level:2}],p={toc:m};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},p,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { useNavigation, useRouterContext } from "@pankod/refine-core";\nimport {\n    List,\n    Create,\n    Edit,\n    Table,\n    Pagination,\n    EditButton,\n    useForm,\n    TextInput,\n} from "@pankod/refine-mantine";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        <EditButton\n                            hideText\n                            recordItemId={getValue() as number}\n                        />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n        refineCoreProps: {\n            initialPageSize: 5,\n        },\n    });\n\n    return (\n        <List>\n            <Table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </Table>\n            <br />\n            <Pagination\n                position="right"\n                total={pageCount}\n                page={current}\n                onChange={setCurrent}\n            />\n        </List>\n    );\n};\n\nconst PostEdit: React.FC = () => {\n    const { saveButtonProps, getInputProps } = useForm({\n        initialValues: {\n            title: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n        },\n    });\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <form>\n                <TextInput\n                    mt={8}\n                    label="Title"\n                    placeholder="Title"\n                    {...getInputProps("title")}\n                />\n            </form>\n        </Edit>\n    );\n};\n\nconst PostCreate: React.FC = () => {\n    const { saveButtonProps, getInputProps } = useForm({\n        initialValues: {\n            title: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n        },\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <form>\n                <TextInput\n                    mt={8}\n                    label="Title"\n                    placeholder="Title"\n                    {...getInputProps("title")}\n                />\n            </form>\n        </Create>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,r.kt)("p",null,"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored. You can either create your own theme object or use themes that provide from ",(0,r.kt)("strong",{parentName:"p"},"refine"),". There are two types of themes: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/mantine/src/theme/index.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"LightTheme"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/mantine/src/theme/index.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"DarkTheme")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"LightTheme")," tend to have dark text on a light background, while ",(0,r.kt)("inlineCode",{parentName:"p"},"DarkTheme")," have light text on a dark background. Theme provides a way to your app's design to meet them."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/theme-object/"},"Refer to the Mantine documentation for more information about theme object. ","\u2192")),(0,r.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<MantineProvider/>")," component can be used to change theme. It is not required if you decide to use the default theme. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"LightTheme")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DarkTheme")," provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    Layout,\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    // highlight-next-line\n    DarkTheme,\n} from "@pankod/refine-mantine";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n    return (\n        // highlight-next-line\n        <MantineProvider theme={DarkTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "posts",\n                            list: PostList,\n                            edit: PostEdit,\n                            create: PostCreate,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/mantine-provider/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<MantineProvider/>")," documentation for more information. ","\u2192")),(0,r.kt)("h3",{id:"overriding-the-refine-themes"},"Overriding the refine themes"),(0,r.kt)("p",null,"You can override or extend the default refine themes. You can also create your own theme. Let's see how to do this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    Layout,\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    // highlight-next-line\n    LightTheme,\n} from "@pankod/refine-mantine";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n    return (\n        <MantineProvider\n            // highlight-start\n            theme={{\n                ...LightTheme,\n                colors: {\n                    primary: [\n                        "#ECF9F8",\n                        "#C9EEEC",\n                        "#A6E2E1",\n                        "#84D7D5",\n                        "#61CCC9",\n                        "#3EC1BD",\n                        "#329A97",\n                        "#257471",\n                        "#194D4B",\n                        "#0C2726",\n                    ],\n                },\n            }}\n            // highlight-end\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "posts",\n                            list: PostList,\n                            edit: PostEdit,\n                            create: PostCreate,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/colors/"},"Refer to the Mantine colors documentation for more information. ","\u2192")),(0,r.kt)("h2",{id:"theme-switching"},"Theme switching"),(0,r.kt)("p",null,"You can switch between themes as Mantine mentioned in its documentation. You can see an example of using local storage to store the theme below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\nconst IconSun = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-sun"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        strokeWidth="2"\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <circle cx={12} cy={12} r={4}></circle>\n        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>\n    </svg>\n);\n\nconst IconMoonStars = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-moon-stars"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        stroke-width={2}\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>\n        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>\n        <path d="M19 11h2m-1 -1v2"></path>\n    </svg>\n);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    Layout,\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    MantineHeader,\n    Group,\n    ActionIcon,\n    // highlight-start\n    ColorSchemeProvider,\n    ColorScheme,\n    LightTheme,\n    DarkTheme,\n    useLocalStorage,\n    useMantineColorScheme,\n    // highlight-end\n} from "@pankod/refine-mantine";\nimport { IconSun, IconMoonStars } from "@tabler/icons";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst Header = () => {\n    const { colorScheme, toggleColorScheme } = useMantineColorScheme();\n    const dark = colorScheme === "dark";\n\n    return (\n        <MantineHeader height={50} p="xs">\n            <Group position="right">\n                <ActionIcon\n                    variant="outline"\n                    color={dark ? "yellow" : "primary"}\n                    onClick={() => toggleColorScheme()}\n                    title="Toggle color scheme"\n                >\n                    {dark ? <IconSun /> : <IconMoonStars />}\n                </ActionIcon>\n            </Group>\n        </MantineHeader>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    // highlight-start\n    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({\n        key: "mantine-color-scheme",\n        defaultValue: "light",\n        getInitialValueInEffect: true,\n    });\n    // highlight-end\n\n    // highlight-start\n    const toggleColorScheme = (value?: ColorScheme) =>\n        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));\n    // highlight-end\n\n    return (\n        // highlight-start\n        <ColorSchemeProvider\n            colorScheme={colorScheme}\n            toggleColorScheme={toggleColorScheme}\n            // highlight-end\n        >\n            <MantineProvider\n                // highlight-next-line\n                theme={colorScheme === "dark" ? DarkTheme : LightTheme}\n                withNormalizeCSS\n                withGlobalStyles\n            >\n                <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n                <NotificationsProvider position="top-right">\n                    <Refine\n                        routerProvider={routerProvider}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        Layout={Layout}\n                        // highlight-next-line\n                        Header={Header}\n                        resources={[\n                            {\n                                name: "posts",\n                                list: PostList,\n                                edit: PostEdit,\n                                create: PostCreate,\n                            },\n                        ]}\n                    />\n                </NotificationsProvider>\n            </MantineProvider>\n        </ColorSchemeProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/guides/dark-theme"},"Refer to the Mantine dark theme documentation for more information. ","\u2192")))}d.isMDXComponent=!0}}]);