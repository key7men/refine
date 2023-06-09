"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||l[u]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"custom-layout",title:"Custom Layout"},i=void 0,p={unversionedId:"advanced-tutorials/custom-layout",id:"version-3.xx.xx/advanced-tutorials/custom-layout",title:"Custom Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/custom-layout.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/custom-layout",permalink:"/docs/3.xx.xx/advanced-tutorials/custom-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/custom-layout.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6zg\xfcr Ak\xe7a",lastUpdatedAt:1686294877,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"custom-layout",title:"Custom Layout"},sidebar:"someSidebar",previous:{title:"Azure AD Login",permalink:"/docs/3.xx.xx/advanced-tutorials/auth/azure-ad"},next:{title:"Custom Pages",permalink:"/docs/3.xx.xx/advanced-tutorials/custom-pages"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],d=(l="CodeSandboxExample",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const m={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can create custom layouts using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,o.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," is for global customization and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," is for local."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#footer"},(0,o.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#header"},(0,o.kt)("inlineCode",{parentName:"a"},"Header"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#offlayoutarea"},(0,o.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"Title")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package.")),(0,o.kt)("p",null,"Let's look at an example of modifying the default layout to have a top menu layout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList } from "pages/posts";\n// highlight-next-line\nimport { CustomSider } from "components";\n\nconst { Link } = routerProvider;\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            // highlight-start\n            Layout={({ children, Footer, OffLayoutArea }) => (\n                <AntdLayout>\n                    <AntdLayout.Header>\n                        <CustomSider />\n                    </AntdLayout.Header>\n                    <AntdLayout.Content>\n                        <AntdLayout.Content>\n                            <div style={{ padding: 24, minHeight: 360 }}>\n                                {children}\n                            </div>\n                        </AntdLayout.Content>\n                        {Footer && <Footer />}\n                    </AntdLayout.Content>\n                    {OffLayoutArea && <OffLayoutArea />}\n                </AntdLayout>\n            )}\n            // highlight-end\n            Title={() => (\n                <Link to="/" style={{ float: "left", marginRight: "10px" }}>\n                    <img src="/refine.svg" alt="Refine" />\n                </Link>\n            )}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Here, we override the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"<Title>"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>"))," components. When we override ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>")),", we put the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CustomSider>")," (instead of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>"))," that was provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>"))," to render it by default) on top of ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/"},(0,o.kt)("inlineCode",{parentName:"a"},"<AntdLayout>")),"."),(0,o.kt)("p",null,"So, we just provided a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>")),". Here's our custom sider that looks horizontal, instead of the default vertical one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/components/sider/index.tsx"',title:'"/src/components/sider/index.tsx"'},'import { useTitle, useMenu } from "@pankod/refine-core";\nimport { Menu } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nconst { Link } = routerProvider;\n\nexport const CustomSider: React.FC = () => {\n    // highlight-start\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n    // highlight-end\n\n    return (\n        <>\n            // highlight-start\n            {Title && <Title collapsed={false} />}\n            <Menu selectedKeys={[selectedKey]} mode="horizontal">\n                {menuItems.map(({ icon, route, label }) => (\n                    <Menu.Item key={route} icon={icon}>\n                        <Link to={route ?? ""}>{label}</Link>\n                    </Menu.Item>\n                ))}\n            </Menu>\n            // highlight-end\n        </>\n    );\n};\n')),(0,o.kt)("p",null,"Here, we use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu"},(0,o.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>"))," is responsible for rendering ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"<Title>")),". It gets this component (configured by ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and/or ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")),") by ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/refine/useTitle"},(0,o.kt)("inlineCode",{parentName:"a"},"useTitle"))," hook.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/layout-wrapper"},"refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here's how it looks in the end:"),(0,o.kt)(d,{path:"customization-top-menu-layout",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);