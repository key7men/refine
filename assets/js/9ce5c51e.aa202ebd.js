"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,u=f["".concat(p,".").concat(m)]||f[m]||d[m]||a;return n?i.createElement(u,r(r({ref:t},l),{},{components:n})):i.createElement(u,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={id:"notification-provider",title:"Notification Provider"},r=void 0,s={unversionedId:"api-reference/core/providers/notification-provider",id:"version-3.xx.xx/api-reference/core/providers/notification-provider",title:"Notification Provider",description:"refine let's you set a notification API by providing the notificationProvider property to the `` component.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/providers/notification-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/notification-provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/notification-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/providers/notification-provider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681462112,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"notification-provider",title:"Notification Provider"},sidebar:"someSidebar",previous:{title:"Live Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},next:{title:"Router Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/router-provider"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Built-in Notification Providers",id:"built-in-notification-providers",level:2},{value:"Creating an <code>notificationProvider</code>",id:"creating-an-notificationprovider",level:2},{value:"<code>open</code>",id:"open",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"Example",id:"example",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=l("Tabs"),f=l("TabItem"),m=l("CodeSandboxExample"),u={toc:c};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," let's you set a notification API by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," is an object with close and open methods. ",(0,o.kt)("strong",{parentName:"p"},"refine")," uses these methods to show and hide notifications. These methods can be called from anywhere in the application with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useNotification/"},(0,o.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," must include following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const notificationProvider = {\n    show: () => {},\n    close: () => {},\n};\n")),(0,o.kt)("p",null,"And these methods types like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'interface NotificationProvider {\n    open: (params: OpenNotificationParams) => void;\n    close: (key: string) => void;\n}\n\ninterface OpenNotificationParams {\n    key?: string;\n    message: string;\n    type: "success" | "error" | "progress";\n    description?: string;\n    cancelMutation?: () => void;\n    undoableTimeout?: number;\n}\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," in refine, we have to pass the notificationProvider to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, NotificationProvider } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n//highlight-start\nconst notificationProvider: NotificationProvider = {\n    open: () => {},\n    close: () => {},\n};\n//highlight-end\n\nconst App = () => {\n    return (\n        <Refine\n            //highlight-next-line\n            notificationProvider={notificationProvider}\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        />\n    );\n};\n')),(0,o.kt)("p",null,"By default, ",(0,o.kt)("strong",{parentName:"p"},"refine")," doesn't require ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," configuration."),(0,o.kt)("p",null,"If an ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," property is not provided, ",(0,o.kt)("strong",{parentName:"p"},"refine")," will use the default ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider"),". This default ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," lets the app work without an notification.\nIf your app doesn't require ",(0,o.kt)("inlineCode",{parentName:"p"},"notification"),", no further setup is necessary for the app to work."),(0,o.kt)("h2",{id:"built-in-notification-providers"},"Built-in Notification Providers"),(0,o.kt)("p",null,"If you're looking for a complete notification infrastructure, ",(0,o.kt)("strong",{parentName:"p"},"refine")," has out-of-the-box support for the libraries below:"),(0,o.kt)(d,{defaultValue:"antd",values:[{label:"Ant Design",value:"antd"},{label:"Material UI",value:"mui"},{label:"Mantine",value:"mantine"},{label:"Chakra UI",value:"chakra"},{label:"Custom",value:"custom"}],mdxType:"Tabs"},(0,o.kt)(f,{value:"custom",mdxType:"TabItem"},(0,o.kt)("p",null,"  Create a custom notification provider by following the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/#creating-an-notificationprovider"},"guide"),".")),(0,o.kt)(f,{value:"antd",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider} from "@pankod/refine-antd";\n\nreturn (\n  <Refine\n    //...\n    notificationProvider={notificationProvider}\n  />\n);\n'))),(0,o.kt)(f,{value:"mui",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider, RefineSnackbarProvider } from "@pankod/refine-mui";\n\nreturn (\n  <RefineSnackbarProvider>\n    <Refine\n      //...\n      notificationProvider={notificationProvider}\n    />\n  </RefineSnackbarProvider>\n);\n'))),(0,o.kt)(f,{value:"mantine",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider, NotificationsProvider } from "@pankod/refine-mantine";\n\nreturn (\n  <NotificationsProvider position="top-right">\n    <Refine\n      //...\n      notificationProvider={notificationProvider}\n    />\n  </NotificationsProvider>\n);\n'))),(0,o.kt)(f,{value:"chakra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider } from "@pankod/refine-chakra";\n\nreturn (\n  <Refine\n    //...\n    notificationProvider={notificationProvider()}\n  />\n);\n')))),(0,o.kt)("h2",{id:"creating-an-notificationprovider"},"Creating an ",(0,o.kt)("inlineCode",{parentName:"h2"},"notificationProvider")),(0,o.kt)("p",null,"We will build a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," from scratch to show the logic of how ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," methods interact with the app. For this, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fkhadra/react-toastify"},(0,o.kt)("inlineCode",{parentName:"a"},"react-toastify"))," package, which is very ",(0,o.kt)("strong",{parentName:"p"},"popular")," in the ",(0,o.kt)("strong",{parentName:"p"},"React Ecosystem"),". If you want to use another notification library, you can use the same approach."),(0,o.kt)("p",null,"Before we start, we need set up the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-toastify")," requirements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\n\n//highlight-start\nimport { ToastContainer } from "react-toastify";\nimport "react-toastify/dist/ReactToastify.css";\n//highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            ...\n            //highlight-start\n            Layout={({ children }) => (\n                <div>\n                    {children}\n                    <ToastContainer />\n                </div>\n            )}\n            //highlight-end\n        />\n    );\n};\n\nexport default App;\n\n')),(0,o.kt)("h3",{id:"open"},(0,o.kt)("inlineCode",{parentName:"h3"},"open")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," calls this method when it wants to open a notification. It also helps you to get the right notification by sending some parameters to the ",(0,o.kt)("strong",{parentName:"p"},"refine")," open method. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", etc..."),(0,o.kt)("p",null,"Here we open a ",(0,o.kt)("strong",{parentName:"p"},"notification")," with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fkhadra/react-toastify"},(0,o.kt)("inlineCode",{parentName:"a"},"react-toastify")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n    open: ({ message, key, type }) => {\n        toast(message, {\n            toastId: key,\n            type,\n        });\n    },\n};\n')),(0,o.kt)("p",null,"In case the notification is called repeatedly with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),", let's update the previous notification instead of creating a new one."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toast.isActive(key)")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the notification is still active. So we can check if the notification is already active and update it instead of creating a new one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n    open: ({ message, key, type }) => {\n        //highlight-start\n        if (toast.isActive(key)) {\n            toast.update(key, {\n                render: message,\n                type,\n            });\n        } else {\n            //highlight-end\n            toast(message, {\n                toastId: key,\n                type,\n            });\n        }\n    },\n};\n')),(0,o.kt)("p",null,"Now, let's create a custom notification when the mutation mode is ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable"),". In this case, ",(0,o.kt)("strong",{parentName:"p"},"refine")," sends notification's type as ",(0,o.kt)("inlineCode",{parentName:"p"},"progress")," as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelMutation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"undoableTimeout"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," decreases by 1 every second until it reaches 0. When it reaches 0, the notification is closed. ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," method is called again with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," each countdown. So, the notification should be updated with the new ",(0,o.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n    open: ({ message, key, type }) => {\n        //highlight-start\n        if (type === "progress") {\n            if (toast.isActive(key)) {\n                toast.update(key, {\n                    progress: undoableTimeout && (undoableTimeout / 10) * 2,\n                    render: (\n                        <UndoableNotification\n                            message={message}\n                            cancelMutation={cancelMutation}\n                        />\n                    ),\n                    type: "default",\n                });\n            } else {\n                toast(\n                    <UndoableNotification\n                        message={message}\n                        cancelMutation={cancelMutation}\n                    />,\n                    {\n                        toastId: key,\n                        updateId: key,\n                        closeOnClick: false,\n                        closeButton: false,\n                        autoClose: false,\n                        progress: undoableTimeout && (undoableTimeout / 10) * 2,\n                    },\n                );\n            }\n        } else {\n            //highlight-end\n            if (toast.isActive(key)) {\n                toast.update(key, {\n                    render: message,\n                    //highlight-start\n                    closeButton: true,\n                    autoClose: 5000,\n                    //highlight-end\n                    type,\n                });\n            } else {\n                toast(message, {\n                    toastId: key,\n                    type,\n                });\n            }\n        }\n    },\n};\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": We add ",(0,o.kt)("inlineCode",{parentName:"p"},"closeButton")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"autoClose")," for progress notifications are not closable by default. Because, when progress is done, the progress notification to be updated should be closeable.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"See UndoableNotification Component"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type UndoableNotification = {\n    message: string;\n    cancelMutation?: () => void;\n    closeToast?: () => void;\n};\n\nexport const UndoableNotification: React.FC<UndoableNotification> = ({\n    closeToast,\n    cancelMutation,\n    message,\n}) => {\n    return (\n        <div>\n            <p>{message}</p>\n            <button\n                onClick={() => {\n                    cancelMutation?.();\n                    closeToast?.();\n                }}\n            >\n                Undo\n            </button>\n        </div>\n    );\n};\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"open")," method will be accessible via ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useNotification/"},(0,o.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@pankod/refine-core";\n\nconst { open } = useNotification();\n\nopen?.({\n    type: "success",\n    message: "Hey",\n    description: "I <3 Refine",\n    key: "unique-id",\n});\n'))),(0,o.kt)("h3",{id:"close"},(0,o.kt)("inlineCode",{parentName:"h3"},"close")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," calls this method when it wants to close a notification. ",(0,o.kt)("strong",{parentName:"p"},"refine")," pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," of the notification to the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method. So, we can handle the notification close logic with this ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n    //...\n    close: (key) => toast.dismiss(key),\n};\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"close")," method will be accessible via ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useNotification/"},(0,o.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@pankod/refine-core";\n\nconst { close } = useNotification();\n\nclose?.("displayed-notification-key");\n'))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(m,{path:"with-react-toastify",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);