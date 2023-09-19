"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57566],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=o(a),u=r,s=N["".concat(p,".").concat(u)]||N[u]||k[u]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},68889:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>k});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const d={id:"interfaceReferences",title:"Interface References"},p=void 0,o={unversionedId:"api-reference/core/interfaceReferences",id:"version-3.xx.xx/api-reference/core/interfaceReferences",title:"Interface References",description:"CrudFilters",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/interfaces.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/interfaceReferences",permalink:"/docs/3.xx.xx/api-reference/core/interfaceReferences",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/interfaces.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695144910,formattedLastUpdatedAt:"Sep 19, 2023",frontMatter:{id:"interfaceReferences",title:"Interface References"},sidebar:"someSidebar",previous:{title:"<CanAccess>",permalink:"/docs/3.xx.xx/api-reference/core/components/accessControl/can-access"},next:{title:"Ant Design API",permalink:"/docs/3.xx.xx/api-reference/antd"}},m={},k=[{value:"CrudFilters",id:"crudfilters",level:2},{value:"CrudFilter",id:"crudfilter",level:3},{value:"CrudOperators",id:"crudoperators",level:4},{value:"CrudSorting",id:"crudsorting",level:2},{value:"CrudSort",id:"crudsort",level:3},{value:"SortOrder",id:"sortorder",level:2},{value:"Pagination",id:"pagination",level:2},{value:"BaseKey",id:"basekey",level:2},{value:"BaseRecord",id:"baserecord",level:2},{value:"HttpError",id:"httperror",level:2},{value:"Delete Button Props",id:"delete-button-props",level:2},{value:"MutationMode",id:"mutationmode",level:2},{value:"UploadedFile",id:"uploadedfile",level:2},{value:"UseImportInputPropsType",id:"useimportinputpropstype",level:2},{value:"SuccessErrorNotification",id:"successerrornotification",level:2},{value:"MetaDataQuery",id:"metadataquery",level:2},{value:"NestedField",id:"nestedfield",level:3},{value:"QueryBuilderOptions",id:"querybuilderoptions",level:3},{value:"VariableOptions",id:"variableoptions",level:3},{value:"PromptProps",id:"promptprops",level:2},{value:"CanParams",id:"canparams",level:2},{value:"CanReturnType",id:"canreturntype",level:2},{value:"LiveEvent",id:"liveevent",level:2},{value:"LiveModeProps",id:"livemodeprops",level:2},{value:"OptionsProps",id:"optionsprops",level:2},{value:"ResourceItemProps",id:"resourceitemprops",level:2},{value:"SyncWithLocationParams",id:"syncwithlocationparams",level:2},{value:"Open Notification Params",id:"open-notification-params",level:2},{value:"Close Notification Params",id:"close-notification-params",level:2}],N={toc:k};function u(t){var{components:e}=t,a=i(t,["components"]);return(0,n.kt)("wrapper",l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},N,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"crudfilters"},"CrudFilters"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#crudfilter"},(0,n.kt)("inlineCode",{parentName:"a"},"CrudFilter[]"))),(0,n.kt)("h3",{id:"crudfilter"},"CrudFilter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"field"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operator"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#crudoperators"},(0,n.kt)("inlineCode",{parentName:"a"},"CrudOperators")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h4",{id:"crudoperators"},"CrudOperators"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'"eq" |\n    "ne" |\n    "lt" |\n    "gt" |\n    "lte" |\n    "gte" |\n    "in" |\n    "nin" |\n    "contains" |\n    "ncontains" |\n    "containss" |\n    "ncontainss" |\n    "between" |\n    "nbetween" |\n    "null" |\n    "nnull" |\n    "startswith" |\n    "nstartswith" |\n    "startswiths" |\n    "nstartswiths" |\n    "endswith" |\n    "nendswith" |\n    "endswiths" |\n    "nendswiths";\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"eq"')),(0,n.kt)("td",{parentName:"tr",align:null},"Equal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"ne"')),(0,n.kt)("td",{parentName:"tr",align:null},"Not equal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"lt"')),(0,n.kt)("td",{parentName:"tr",align:null},"Less than")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"gt"')),(0,n.kt)("td",{parentName:"tr",align:null},"Greater than")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"lte"')),(0,n.kt)("td",{parentName:"tr",align:null},"Less than or equal to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"gte"')),(0,n.kt)("td",{parentName:"tr",align:null},"Greater than or equal to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"in"')),(0,n.kt)("td",{parentName:"tr",align:null},"Included in an array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"nin"')),(0,n.kt)("td",{parentName:"tr",align:null},"Not included in an array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"contains"')),(0,n.kt)("td",{parentName:"tr",align:null},"Contains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"ncontains"')),(0,n.kt)("td",{parentName:"tr",align:null},"Doesn't contain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"containss"')),(0,n.kt)("td",{parentName:"tr",align:null},"Contains, case sensitive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"ncontainss"')),(0,n.kt)("td",{parentName:"tr",align:null},"Doesn't contain, case sensitive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"between"')),(0,n.kt)("td",{parentName:"tr",align:null},"Between")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"nbetween"')),(0,n.kt)("td",{parentName:"tr",align:null},"Doesn't between")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"null"')),(0,n.kt)("td",{parentName:"tr",align:null},"Is null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"nnull"')),(0,n.kt)("td",{parentName:"tr",align:null},"Is not null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"startswith"')),(0,n.kt)("td",{parentName:"tr",align:null},"Starts with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"nstartswith"')),(0,n.kt)("td",{parentName:"tr",align:null},"Doesn't start with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"startswiths"')),(0,n.kt)("td",{parentName:"tr",align:null},"Starts with, case sensitive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"nstartswiths"')),(0,n.kt)("td",{parentName:"tr",align:null},"Doesn't start with, case sensitive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"endswith"')),(0,n.kt)("td",{parentName:"tr",align:null},"Ends with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"nendswith"')),(0,n.kt)("td",{parentName:"tr",align:null},"Doesn't end with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"endswiths"')),(0,n.kt)("td",{parentName:"tr",align:null},"Ends with, case sensitive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"nendswiths"')),(0,n.kt)("td",{parentName:"tr",align:null},"Doesn't end with, case sensitive")))),(0,n.kt)("h2",{id:"crudsorting"},"CrudSorting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#crudsort"},(0,n.kt)("inlineCode",{parentName:"a"},"CrudSort[]"))),(0,n.kt)("h3",{id:"crudsort"},"CrudSort"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"field"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"asc"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},' "desc"'))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"order")," type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"asc"')),(0,n.kt)("td",{parentName:"tr",align:null},"Ascending order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"desc"')),(0,n.kt)("td",{parentName:"tr",align:null},"Descending order")))),(0,n.kt)("h2",{id:"sortorder"},"SortOrder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'"desc" | "asc" | "null";\n')),(0,n.kt)("h2",{id:"pagination"},"Pagination"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h2",{id:"basekey"},"BaseKey"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h2",{id:"baserecord"},"BaseRecord"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#basekey"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"[key: string]")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h2",{id:"httperror"},"HttpError"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h2",{id:"delete-button-props"},"Delete Button Props"),(0,n.kt)("p",null,"ButtonProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resourceName?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"recordItemId?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#basekey"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onSuccess?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<TData = BaseRecord>(value: { data: TData; }) => void;"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mutationMode?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#mutationmode"},(0,n.kt)("inlineCode",{parentName:"a"},"MutationMode")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hideText?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.kt)("h2",{id:"mutationmode"},"MutationMode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'"pessimistic" | "optimistic" | "undoable";\n')),(0,n.kt)("h2",{id:"uploadedfile"},"UploadedFile"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uid"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"size"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"percent"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"error"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"success"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"done" '),"|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"uploading"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"removed"'))))),(0,n.kt)("h2",{id:"useimportinputpropstype"},"UseImportInputPropsType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"file"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"accept"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'".cvs"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onChange"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(event: React.ChangeEvent<HTMLInputElement>) => void"))))),(0,n.kt)("h2",{id:"successerrornotification"},"SuccessErrorNotification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(data?: TData, values?: TVariables, resource?: string) => NotificationProperties")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"https://ant.design/components/notification/#API"},"Notification Properties")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(error?: TError, values?: TVariables, resource?: string) => NotificationProperties")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"https://ant.design/components/notification/#API"},"Notification Properties")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"false"))))),(0,n.kt)("h2",{id:"metadataquery"},"MetaDataQuery"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[k: string]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"any"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operation?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fields?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Array<string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"#nestedfield"},"NestedField"),">")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"variables?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#variableoptions"},"VariableOptions"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queryContext?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/guides/query-functions#queryfunctioncontext"},'Omit<QueryFunctionContext, "meta">'))))),(0,n.kt)("h3",{id:"nestedfield"},"NestedField"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"variables"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#querybuilderoptions"},"VariableOptions[]"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fields"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Array<string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"#nestedfield"},"NestedField"),">")))),(0,n.kt)("h3",{id:"querybuilderoptions"},"QueryBuilderOptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"variables"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#variableoptions"},"VariableOptions"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fields"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Array<string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"NestedField>"))))),(0,n.kt)("h3",{id:"variableoptions"},"VariableOptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"any"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"list?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"required?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[k: string]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h2",{id:"promptprops"},"PromptProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"when?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setWarnWhen?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(warnWhen: boolean) => void"))))),(0,n.kt)("h2",{id:"canparams"},"CanParams"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params?"),(0,n.kt)("td",{parentName:"tr",align:null},"{ ",(0,n.kt)("inlineCode",{parentName:"td"},"resource"),"?: ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#resourceitemprops"},"IResourceItem"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"id"),"?: ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"[key: string]: any")," }")))),(0,n.kt)("h2",{id:"canreturntype"},"CanReturnType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"can"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reason?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h2",{id:"liveevent"},"LiveEvent"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"channel"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"deleted"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"updated"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"created"')," ","|",' "',(0,n.kt)("inlineCode",{parentName:"td"},"*"),'" ',"|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payload"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{ids?: BaseKey[]; [x: string]: any; }"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Date"))))),(0,n.kt)("h2",{id:"livemodeprops"},"LiveModeProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"liveMode?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"auto"'),"\xa0","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"manual"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"liveParams?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{ids?: BaseKey[]; [x: string]: any; }"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onLiveEvent?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(event: LiveEvent) => void"))))),(0,n.kt)("h2",{id:"optionsprops"},"OptionsProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"route?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dataProviderName?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[key: string]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h2",{id:"resourceitemprops"},"ResourceItemProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label ?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"route?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"icon?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ReactNode"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"canCreate?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"canEdit?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"canShow?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"canDelete?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"parentName?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h2",{id:"syncwithlocationparams"},"SyncWithLocationParams"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pagination?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{ current?: number; pageSize?: number }"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sorter?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#crudsorting"},(0,n.kt)("inlineCode",{parentName:"a"},"CrudSorting")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filters?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#crudfilters"},(0,n.kt)("inlineCode",{parentName:"a"},"CrudSCrudFiltersorting")))))),(0,n.kt)("h2",{id:"open-notification-params"},"Open Notification Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"success"'),"\xa0","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"error"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"progress"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"description?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cancelMutation?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"undoableTimeout?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h2",{id:"close-notification-params"},"Close Notification Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))))}u.isMDXComponent=!0}}]);