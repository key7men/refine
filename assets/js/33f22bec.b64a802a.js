"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"useUpdateMany",siderbar_label:"useUpdateMany",source:"packages/core/src/hooks/data/useUpdateMany.ts"},d=void 0,p={unversionedId:"api-reference/core/hooks/data/useUpdateMany/index",id:"api-reference/core/hooks/data/useUpdateMany/index",title:"useUpdateMany",description:"useUpdateMany is an extended version of TanStack Query's useMutation. It supports all the features of useMutation and adds some extra features.",source:"@site/docs/api-reference/core/hooks/data/useUpdateMany/index.md",sourceDirName:"api-reference/core/hooks/data/useUpdateMany",slug:"/api-reference/core/hooks/data/useUpdateMany/",permalink:"/docs/api-reference/core/hooks/data/useUpdateMany/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useUpdateMany/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1690449369,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{title:"useUpdateMany",siderbar_label:"useUpdateMany",source:"packages/core/src/hooks/data/useUpdateMany.ts"},sidebar:"someSidebar",previous:{title:"useUpdate",permalink:"/docs/api-reference/core/hooks/data/useUpdate/"},next:{title:"useSelect",permalink:"/docs/api-reference/core/hooks/useSelect/"}},s={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Invalidating Queries",id:"invalidating-queries",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>mutationOptions</code>",id:"mutationoptions",level:3},{value:"<code>overtimeOptions</code>",id:"overtimeoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>ids</code> <PropTag required />",id:"ids-",level:3},{value:"<code>values</code> <PropTag required />",id:"values-",level:3},{value:"<code>mutationMode</code>",id:"mutationmode",level:3},{value:"<code>undoableTimeout</code>",id:"undoabletimeout",level:3},{value:"<code>onCancel</code>",id:"oncancel",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>invalidates</code>",id:"invalidates",level:3},{value:"Return Values",id:"return-values",level:2},{value:"Additional Values",id:"additional-values",level:3},{value:"<code>overtime</code>",id:"overtime",level:4},{value:"API",id:"api",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],m=(c="PropTag",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const k={toc:u};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," is an extended version of TanStack Query's ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,a.kt)("inlineCode",{parentName:"a"},"useMutation")),". It supports all the features of ",(0,a.kt)("inlineCode",{parentName:"p"},"useMutation")," and adds some extra features."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"updateMany")," method as the ",(0,a.kt)("strong",{parentName:"li"},"mutation function")," from the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/providers/data-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,a.kt)("inlineCode",{parentName:"li"},"<Refine>"),".")),(0,a.kt)("p",null,"It is useful when you want to update many records at once."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If your data provider does not have a ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMany")," method, ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," method instead. It is not recommended, because it will make requests one by one for each id. It is better to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMany")," method in the data provider.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," hook returns many useful properties and methods. One of them is the ",(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,a.kt)("inlineCode",{parentName:"p"},"values"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ids")," as parameters. These parameters will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMany")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdateMany } from "@refinedev/core";\n\nconst { mutate } = useUpdateMany();\n\nmutate({\n    resource: "products",\n    values: {\n        name: "New Product",\n        material: "Wood",\n    },\n    ids: [1, 2, 3],\n});\n')),(0,a.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," mutation runs successfully, it will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," etc. It is useful when you want to publish the changes to the subscribers on the client side."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider")," documentation for more information ","\u2192")),(0,a.kt)("h2",{id:"invalidating-queries"},"Invalidating Queries"),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," mutation runs successfully, by default it will invalidate the following queries from the current ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"list"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"many"'),", and ",(0,a.kt)("inlineCode",{parentName:"p"},'"detail"'),". That means, if you use ",(0,a.kt)("inlineCode",{parentName:"p"},"useList"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useMany"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne")," hooks on the same page, they will refetch the data after the mutation is completed. You can change this behavior by passing ",(0,a.kt)("a",{parentName:"p",href:"#invalidates"},(0,a.kt)("inlineCode",{parentName:"a"},"invalidates"))," prop."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"Refer to the query invalidation documentation for more information ","\u2192")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"mutationoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"mutationOptions")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useUpdateMany({\n    mutationOptions: {\n        retry: 3,\n    },\n});\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate(\n    {\n        resource: "products",\n        values: {\n            name: "New Product",\n            material: "Wood",\n        },\n        ids: [1, 2, 3],\n    },\n    {\n        onError: (error, variables, context) => {\n            // An error occurred!\n        },\n        onSuccess: (data, variables, context) => {\n            // Let\'s celebrate!\n        },\n    },\n);\n'))),(0,a.kt)("h3",{id:"overtimeoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"overtimeOptions")),(0,a.kt)("p",null,"If you want loading overtime for the request, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,a.kt)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval."),(0,a.kt)("p",null,"Return ",(0,a.kt)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,a.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useUpdateMany({\n    //...\n    overtimeOptions: {\n        interval: 1000,\n        onInterval(elapsedInterval) {\n            console.log(elapsedInterval);\n        },\n    },\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{\n    elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>;\n}\n")),(0,a.kt)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,a.kt)("h3",{id:"resource-"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")," ",(0,a.kt)(m,{required:!0,mdxType:"PropTag"})),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMany")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as an API endpoint path. It all depends on how to handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMany")," method. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider")," section for an example of how resources are handled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    resource: "categories",\n});\n')),(0,a.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,a.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,a.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,a.kt)("h3",{id:"ids-"},(0,a.kt)("inlineCode",{parentName:"h3"},"ids")," ",(0,a.kt)(m,{required:!0,mdxType:"PropTag"})),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMany")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which records will be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate } = useUpdateMany();\n\nmutate({\n    ids: [1, 2, 3],\n});\n")),(0,a.kt)("h3",{id:"values-"},(0,a.kt)("inlineCode",{parentName:"h3"},"values")," ",(0,a.kt)(m,{required:!0,mdxType:"PropTag"})),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMany")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as the data to be updated. It contains the new values of the record."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    values: {\n        name: "New Category",\n        description: "New Category Description",\n    },\n});\n')),(0,a.kt)("h3",{id:"mutationmode"},(0,a.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,a.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,a.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"optimistic"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"undoable"),". The default mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"pessimistic"),".\nEach mode corresponds to a different type of user experience."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"Refer to the mutation mode documentation for more information ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    mutationMode: "undoable",\n});\n')),(0,a.kt)("h3",{id:"undoabletimeout"},(0,a.kt)("inlineCode",{parentName:"h3"},"undoableTimeout")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"mutationMode")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"undoable"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," is used to determine duration to wait before executing the mutation. Default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"5000")," milliseconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    mutationMode: "undoable",\n    undoableTimeout: 10000,\n});\n')),(0,a.kt)("h3",{id:"oncancel"},(0,a.kt)("inlineCode",{parentName:"h3"},"onCancel")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onCancel")," property can be utilized when the ",(0,a.kt)("inlineCode",{parentName:"p"},"mutationMode")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"undoable"'),". It provides a function that can be used to cancel the ongoing mutation."),(0,a.kt)("p",null,"By defining ",(0,a.kt)("inlineCode",{parentName:"p"},"onCancel"),", undoable notification will not be shown automatically. This gives you the flexibility to handle the cancellation process in your own way, such as showing a custom notification or implementing any other desired behavior to allow users to cancel the mutation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useRef } from "react";\nimport { useUpdateMany } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const { mutate } = useUpdateMany();\n    const cancelRef = useRef<(() => void) | null>(null);\n\n    const updateItems = () => {\n        mutate({\n            //...\n            mutationMode: "undoable",\n            onCancel: (cancelMutation) => {\n                cancelRef.current = cancelMutation;\n            },\n        });\n    };\n\n    const cancelUpdate = () => {\n        cancelRef.current?.();\n    };\n\n    return (\n        <>\n            <button onClick={updateItems}>Update</button>\n            <button onClick={cancelUpdate}>Cancel</button>\n        </>\n    );\n};\n')),(0,a.kt)("h3",{id:"successnotification"},(0,a.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"After data is fetched successfully, ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    successNotification: (data, values, resource) => {\n        return {\n            message: `${data.title} Successfully fetched.`,\n            description: "Success with no errors",\n            type: "success",\n        };\n    },\n});\n')),(0,a.kt)("h3",{id:"errornotification"},(0,a.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"After data fetching is failed, ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    errorNotification: (data, values, resource) => {\n        return {\n            message: `Something went wrong when getting ${data.id}`,\n            description: "Error",\n            type: "error",\n        };\n    },\n});\n')),(0,a.kt)("h3",{id:"meta"},(0,a.kt)("inlineCode",{parentName:"h3"},"meta")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,a.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#meta"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation for more information ","\u2192")),(0,a.kt)("p",null,"In the following example, we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMany")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    // highlight-start\n    meta: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    //...\n    updateMany: async ({\n        resource,\n        ids,\n        variables,\n        // highlight-next-line\n        meta,\n    }) => {\n        // highlight-next-line\n        const headers = meta?.headers ?? {};\n        const url = `${apiUrl}/${resource}`;\n\n        //...\n        //...\n\n        // highlight-start\n        const { data } = await httpClient.patch(\n            url,\n            { ids, variables },\n            { headers },\n        );\n        // highlight-end\n\n        return {\n            data,\n        };\n    },\n    //...\n};\n')),(0,a.kt)("h3",{id:"dataprovidername"},(0,a.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,a.kt)("p",null,"If there is more than one ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    dataProviderName: "second-data-provider",\n});\n')),(0,a.kt)("h3",{id:"invalidates"},(0,a.kt)("inlineCode",{parentName:"h3"},"invalidates")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"invalidates")," is used to specify which queries should be invalidated after the mutation is completed."),(0,a.kt)("p",null,"By default, it invalidates the following queries from the current ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"list"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"many"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"detail"'),". That means, if you use ",(0,a.kt)("inlineCode",{parentName:"p"},"useList"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useMany"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne")," hooks on the same page, they will refetch the data after the mutation is completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useUpdateMany();\n\nmutate({\n    invalidates: ["list", "many", "detail"],\n});\n')),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("p",null,"Returns an object with TanStack Query's ",(0,a.kt)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,a.kt)("h3",{id:"additional-values"},"Additional Values"),(0,a.kt)("h4",{id:"overtime"},(0,a.kt)("inlineCode",{parentName:"h4"},"overtime")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"overtime")," object is returned from this hook. ",(0,a.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useUpdateMany();\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"required-block"},(0,a.kt)("div",null,"resource")," ",(0,a.kt)("div",{className:" required"},"Required"))),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ids ",(0,a.kt)("div",{className:" required"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"id for mutation function"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseKey[]"))),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"values ",(0,a.kt)("div",{className:" required"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TVariables")),(0,a.kt)("td",{parentName:"tr",align:null},"{}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/advanced-tutorials/mutation-mode"},"Determines when mutations are executed")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing the mutation when ",(0,a.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"5000ms"),"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onCancel"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a function to cancel the mutation when ",(0,a.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(cancelMutation: () => void) => void")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,a.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#successerrornotification"},(0,a.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,a.kt)("td",{parentName:"tr",align:null},'"Successfully updated ',(0,a.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,a.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#successerrornotification"},(0,a.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,a.kt)("td",{parentName:"tr",align:null},'"Error when updating ',(0,a.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,a.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"meta"),(0,a.kt)("td",{parentName:"tr",align:null},"Meta data query for ",(0,a.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#metadataquery"},(0,a.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,a.kt)("td",{parentName:"tr",align:null},"{}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,a.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,a.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,a.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"default"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"invalidates"),(0,a.kt)("td",{parentName:"tr",align:null},"You can use it to manage the invalidations that will occur at the end of the mutation."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"many"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"detail"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'["list", "many", "detail"]'))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,a.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component. ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," will use what is passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Desription"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TData"),(0,a.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TError"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,a.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,a.kt)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData }, TError, { resource:string; ids: BaseKey[]; values: TVariables; }, UpdateContext>")),"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"overtime"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"*")," ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateContext")," is an internal type.")))}h.isMDXComponent=!0}}]);