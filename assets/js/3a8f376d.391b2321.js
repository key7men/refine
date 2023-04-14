"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"csv-export",title:"CSV Export"},i=void 0,p={unversionedId:"advanced-tutorials/import-export/csv-export",id:"advanced-tutorials/import-export/csv-export",title:"CSV Export",description:"With refine, you can easily add export functionality to your application. By using the useExport hook with desired configurations, you can turn any button into an export button. Which resources' records to export can be configured. By default, it is inferred from current route of browser.",source:"@site/docs/advanced-tutorials/import-export/csv-export.md",sourceDirName:"advanced-tutorials/import-export",slug:"/advanced-tutorials/import-export/csv-export",permalink:"/docs/advanced-tutorials/import-export/csv-export",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/import-export/csv-export.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681462112,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"csv-export",title:"CSV Export"},sidebar:"someSidebar",previous:{title:"Save and Continue",permalink:"/docs/advanced-tutorials/forms/save-and-continue"},next:{title:"CSV Import",permalink:"/docs/advanced-tutorials/import-export/csv-import"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],l=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With ",(0,o.kt)("strong",{parentName:"p"},"refine"),", you can easily add export functionality to your application. By using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useExport"},(0,o.kt)("inlineCode",{parentName:"a"},"useExport"))," hook with desired configurations, you can turn any button into an export button. Which resources' records to export can be configured. By default, it is inferred from current route of browser."),(0,o.kt)("p",null,"Internally, it uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv"},(0,o.kt)("inlineCode",{parentName:"a"},"export-to-csv"))," to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSV")," file."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useExport } from "@refinedev/core";\n\ninterface IPost {\n    id: number;\n    slug: string;\n    title: string;\n    content: string;\n}\n\nexport const PostList: React.FC = () => {\n    const { triggerExport } = useExport<IPost>();\n\n    return (\n        <div>\n            <button onClick={triggerExport}>Export Button</button>\n            ...\n        </div>\n    );\n};\n')),(0,o.kt)("p",null,"After this setup is done, when the user clicks the button, download process will initialize."),(0,o.kt)("p",null,"Manually running the ",(0,o.kt)("inlineCode",{parentName:"p"},"triggerExport")," function is another option."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useExport")," returns two properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading: boolean")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"triggerExport: async () => void"),". You can use these properties to create your own export button or pass them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExportButton")," component."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useExport"},"Refer to the useExport docs for more detailed information and export settings. ","\u2192"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(l,{path:"import-export-antd",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);