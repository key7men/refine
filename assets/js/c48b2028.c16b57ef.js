"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,g=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(87462),o=n(67294),a=n(86010),s=n(72389),i=n(67392),l=n(7094),p=n(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:s,defaultValue:c,values:h,groupId:g,className:m}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,l.U)(),[R,I]=(0,o.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=g){const e=w[g];null!=e&&e!==R&&v.some((t=>t.value===e))&&I(e)}const P=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==R&&(C(t),I(r),null!=g&&y(g,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},m)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:P,onClick:P},s,{className:(0,a.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":R===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===R))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==R})))))}function h(e){const t=(0,s.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},16959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(65488),s=n(85162);const i={id:"generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},l=void 0,p={unversionedId:"tutorial/getting-started/headless/generate-crud-pages",id:"tutorial/getting-started/headless/generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/docs/tutorial/1-getting-started/headless/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/headless",slug:"/tutorial/getting-started/headless/generate-crud-pages",permalink:"/docs/tutorial/getting-started/headless/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/headless/3-generate-crud-pages.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681462112,formattedLastUpdatedAt:"Apr 14, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},d={},u=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},h=c("Checklist"),g=c("ChecklistItem"),m={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inferencer"},"Inferencer"),(0,o.kt)("p",null,"Inferencer is a powerful tool in the ",(0,o.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with the required forms and tables for CRUD operations."),(0,o.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,o.kt)("p",null,"There are several benefits to using Inferencer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Code generated by Inferencer is also easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to it according to your needs. This allows you to quickly iterate and get your project up and running faster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using Inferencer can also help you avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,o.kt)("p",null,"Overall, using Inferencer will greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, allowing you to focus on more complex tasks instead."),(0,o.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,o.kt)("p",null,"You can Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"how Inferencer works")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/inferencer/"},"how to use it with Headless Mode")," in our documents."),(0,o.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"<HeadlessInferencer/>")," component, which can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/headless"),". It is used to generate CRUD pages based on your API response."),(0,o.kt)("p",null,"Before we start using Inferencer, we need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," packages to our project. Since these packages are used by Inferencer to generate forms and tables, they need to be installed in our project."),(0,o.kt)(a.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/react-table @refinedev/react-hook-form\n"))),(0,o.kt)(s.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i @refinedev/react-table @refinedev/react-hook-form\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @refinedev/react-table @refinedev/react-hook-form\n")))),(0,o.kt)("p",null,"Then, we need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"<HeadlessInferencer/>")," component which is used by passing appropriate values to the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop will be explained in detail in ","[Unit 4]","(/docs/tutorial/understanding-resources/index. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route path="blog-posts">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nexport default App;\n')),(0,o.kt)("p",null,"At this point, ",(0,o.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response."),(0,o.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,o.kt)("p",null,"So far we have added complete CRUD pages by utilizing the Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,o.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,o.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,o.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"How ",(0,o.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," will be explained in ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),".")),(0,o.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,o.kt)("h3",{id:"list-page"},"List Page"),(0,o.kt)("p",null,"To preview the list page, go back to your browser and go to ",(0,o.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000"),"."),(0,o.kt)("p",null,"You should see the list page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,o.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, like ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route\n                        index\n                        element={<NavigateToResource resource="blog_posts" />}\n                    />\n                    <Route path="blog-posts">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create-page"},"Create Page"),(0,o.kt)("p",null,"To preview the create page, go back to your browser and go to ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' or click the "Create" button on the list page.'),(0,o.kt)("p",null,"You should see the create page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route path="blog-posts">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit-page"},"Edit Page"),(0,o.kt)("p",null,"To preview the edit page, go back to your browser and go to ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' or click the "Edit" button on the record in the list page.'),(0,o.kt)("p",null,"You should see the edit page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route path="blog-posts">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show-page"},"Show Page"),(0,o.kt)("p",null,"To preview the show page, go back to your browser and go to ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' or click the "Show" button on the record in the list page.'),(0,o.kt)("p",null,"You should see the show page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route path="blog-posts">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"You will learn how to create CRUD pages manually using the code generated by Inferencer as a reference in ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/headless/index"},"Unit 5"),"."),(0,o.kt)(h,{mdxType:"Checklist"},(0,o.kt)(g,{id:"generated-headless-crud-pages",mdxType:"ChecklistItem"},"I understood what Inferencer is, how it works and how it can make my work easier."),(0,o.kt)(g,{id:"generated-headless-crud-pages-2",mdxType:"ChecklistItem"},(0,o.kt)("p",null,"I have inspected the auto-generated ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}f.isMDXComponent=!0}}]);