"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={id:"auth-provider",title:"Migrating Auth Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Auth Provider"},i=void 0,l={unversionedId:"migration-guide/auth-provider",id:"migration-guide/auth-provider",title:"Migrating Auth Provider from 3.x.x to 4.x.x",description:"Motivation behind the changes",source:"@site/docs/migration-guide/auth-provider.md",sourceDirName:"migration-guide",slug:"/migration-guide/auth-provider",permalink:"/docs/migration-guide/auth-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/migration-guide/auth-provider.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679934123,formattedLastUpdatedAt:"Mar 27, 2023",frontMatter:{id:"auth-provider",title:"Migrating Auth Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Auth Provider"},sidebar:"someSidebar",previous:{title:"3.x.x to 4.x.x",permalink:"/docs/migration-guide/3x-to-4x"},next:{title:"Migrating Router Provider",permalink:"/docs/migration-guide/router-provider"}},s={},d=[{value:"Motivation behind the changes",id:"motivation-behind-the-changes",level:2},{value:"Naming changes",id:"naming-changes",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>login</code>",id:"login",level:3},{value:"<code>logout</code>",id:"logout",level:3},{value:"<code>register</code>",id:"register",level:3},{value:"<code>forgotPassword</code>",id:"forgotpassword",level:3},{value:"<code>updatePassword</code>",id:"updatepassword",level:3},{value:"<code>check</code>",id:"check",level:3},{value:"<code>onError</code>",id:"onerror",level:3},{value:"<code>getPermissions</code>",id:"getpermissions",level:3},{value:"<code>getIdentity</code>",id:"getidentity",level:3},{value:"Auth hooks",id:"auth-hooks",level:2},{value:"Backward compatibility",id:"backward-compatibility",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"motivation-behind-the-changes"},"Motivation behind the changes"),(0,o.kt)("p",null,"Our motivation for modifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," prop in ",(0,o.kt)("strong",{parentName:"p"},"refine")," v4 is to enhance its flexibility and customization options to handle a wider range of use cases without over complicating the process."),(0,o.kt)("p",null,"We wanted to create a common interface for the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," methods to improve its transparency for developers for better understanding and debugging."),(0,o.kt)("p",null,"Previously, developers were expected to resolve the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," methods on success and reject them on failure. However, this approach had limitations, as rejected promises are generally associated with errors or unusual scenarios. Since some errors, such as incorrect login credentials, aren't necessarily failures and must be communicated to the user, rejected promises often led to confusion for developers and hindered the debugging process."),(0,o.kt)("p",null,"Now, the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise that includes an object with a success key. This key indicates whether the operation was successful or not, and in case of failure, an optional error key containing an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," object can be used to notify users."),(0,o.kt)("p",null,"Furthermore, the auth hooks no longer have default redirection paths, which had previously been a source of confusion for some developers. Instead, by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," methods' return object, developers can have more control over the redirection after a successful operation."),(0,o.kt)("h2",{id:"naming-changes"},"Naming changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"AuthPovider")," interface changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthBindings"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { AuthProvider } from "@refinedev/core";\n+ import { AuthBindings } from "@refinedev/core";\n\n- const authProvider: AuthProvider = {/* ... */}\n+ const authProvider: AuthBindings = {/* ... */}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"getIdentity"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"checkError")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"onError"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"checkAuth")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"check"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"const authProvider = {\n-     getUserIdentity,\n+     getIdentity,\n-     useCheckError,\n+     useOnError,\n-     checkAuth,\n+     check,\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," hook changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { useAuthenticated } from "@refinedev/core";\n+ import { useIsAuthenticated } from "@refinedev/core";\n')))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"login"},(0,o.kt)("inlineCode",{parentName:"h3"},"login")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"login")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthActionResponse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"login")," method expects promises to be resolved in all cases. You should always resolve the promise with a ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," key and an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," key in case of a failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useLogin")," no longer has default redirection. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo")," property to the ",(0,o.kt)("inlineCode",{parentName:"li"},"login")," method's return object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    login: async ({ email, password }) => {\n        const user = mockUsers.find((item) => item.email === email);\n\n        if (user) {\n            localStorage.setItem("auth", JSON.stringify(user));\n-           return Promise.resolve();\n+           return {\n+               success: true,\n+               redirectTo: "/",\n+           };\n        }\n\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: new Error("Invalid email or password"),\n+       };\n    },\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,o.kt)("h3",{id:"logout"},(0,o.kt)("inlineCode",{parentName:"h3"},"logout")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logout")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthActionResponse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logout")," method expects promises to be resolved in all cases. You should always resolve the promise with a ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," key and an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," key in case of a failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useLogout")," no longer has default redirection. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo")," property to the ",(0,o.kt)("inlineCode",{parentName:"li"},"logout")," method's return object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    logout: async ({ email, password }) => {\n        localStorage.removeItem("auth");\n-       return Promise.resolve();\n+       return {\n+          success: true,\n+          redirectTo: "/login",\n+       };\n    },\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,o.kt)("h3",{id:"register"},(0,o.kt)("inlineCode",{parentName:"h3"},"register")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"register")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthActionResponse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"register")," method expects promises to be resolved in all cases. You should always resolve the promise with a ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," key and an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," key in case of a failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useRegister")," no longer has default redirection. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo")," property to the ",(0,o.kt)("inlineCode",{parentName:"li"},"register")," method's return object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    register: async ({ email, password }) => {\n        const user = mockUsers.find((item) => item.email === email);\n\n        if (user) {\n-           return Promise.reject();\n+           return {\n+               success: false,\n+               error: {\n+                   name: "Register Error"",\n+                   message: "User already exists",\n+               },\n+           };\n        }\n\n        mockUsers.push({ email });\n\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/",\n+       };\n    },\n}\n')),(0,o.kt)("h3",{id:"forgotpassword"},(0,o.kt)("inlineCode",{parentName:"h3"},"forgotPassword")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forgotPassword")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthActionResponse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forgotPassword")," method expects promises to be resolved in all cases. You should always resolve the promise with a ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," key and an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," key in case of a failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useForgotPassword")," no longer has default redirection. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo")," property to the ",(0,o.kt)("inlineCode",{parentName:"li"},"forgotPassword")," method's return object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    forgotPassword: async ({ password }) => {\n        // send password reset link to the user\'s email address here\n\n        // if request is successful\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/login",\n+       };\n\n        // if request is not successful\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: {\n+               name: "Forgot Password Error",\n+               message: "Email address does not exist",\n+           },\n+       };\n    },\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,o.kt)("h3",{id:"updatepassword"},(0,o.kt)("inlineCode",{parentName:"h3"},"updatePassword")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"updatePassword")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthActionResponse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"updatePassword")," method expects promises to be resolved in all cases. You should always resolve the promise with a ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," key and an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," key in case of a failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useUpdatePassword")," no longer has default redirection. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo")," property to the ",(0,o.kt)("inlineCode",{parentName:"li"},"updatePassword")," method's return object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    updatePassword: async ({ password }) => {\n        // update the user\'s password here\n\n        // if request is successful\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/login",\n+       });\n\n        // if request is not successful\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: {\n+               name: "Forgot Password Error",\n+               message: "Email address does not exist",\n+           },\n+       };\n    },\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,o.kt)("h3",{id:"check"},(0,o.kt)("inlineCode",{parentName:"h3"},"check")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checkAuth")," method of the authProvider changed to ",(0,o.kt)("inlineCode",{parentName:"li"},"check"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"check")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"CheckResponse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"check")," method expects promises to be resolved in all cases. You should always resolve the promise with a ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," key and an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," key in case of a failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Authenticated/>")," component no longer has default redirection. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo")," property to the ",(0,o.kt)("inlineCode",{parentName:"li"},"check")," method's return object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Authenticated/>")," component no longer call ",(0,o.kt)("inlineCode",{parentName:"li"},"logout")," method by default. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"logout")," property to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"check")," method's return object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n-   checkAuth: async () => {\n+   check: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n-           return Promise.resolve();\n+           return {\n+               authenticated: true,\n+           };\n        }\n\n-       return Promise.reject();\n+       return {\n+           authenticated: false,\n+           redirectTo: "/login",\n+           logout: true,\n+           error: new Error("User not found"),\n+       };\n    },\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type CheckResponse = {\n    authenticated: boolean;\n    redirectTo?: string;\n    logout?: boolean;\n    error?: Error;\n};\n")),(0,o.kt)("h3",{id:"onerror"},(0,o.kt)("inlineCode",{parentName:"h3"},"onError")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"checkError")," method renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"onError"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onError")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"OnErrorResponse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onError")," method expects promises to be resolved in all cases. You should always resolve the promise with a ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," key and an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," key in case of a failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useOnError")," no longer has default redirection. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo")," property to the ",(0,o.kt)("inlineCode",{parentName:"li"},"onError")," method's return object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useOnError")," component no longer call ",(0,o.kt)("inlineCode",{parentName:"li"},"logout")," method by default. You will need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"logout")," property to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"check")," method's return object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n-   checkError: async (error) => {\n+   onError: async (error) => {\n        if (error.status === 401 || error.status === 403) {\n-           return Promise.reject();\n+           return {\n+               redirectTo: "/login",\n+               logout: true,\n+               error: error,\n+           };\n        }\n\n-       return Promise.reject();\n+       return {};\n    },\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type OnErrorResponse = {\n    redirectTo?: string;\n    logout?: boolean;\n    error?: Error;\n};\n")),(0,o.kt)("h3",{id:"getpermissions"},(0,o.kt)("inlineCode",{parentName:"h3"},"getPermissions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getPermissions")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"PermissionResponse"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    getPermissions: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n            const { roles } = JSON.parse(user);\n\n            return roles;\n        }\n\n-        return Promise.reject();\n+        return null;\n    },\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type PermissionResponse = unknown;\n")),(0,o.kt)("h3",{id:"getidentity"},(0,o.kt)("inlineCode",{parentName:"h3"},"getIdentity")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"getUserIdentity")," method renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"getIdentity"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getIdentity")," method now requires promises to be resolved in all cases, with a return type of ",(0,o.kt)("inlineCode",{parentName:"li"},"IdentityResponse"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider: AuthProvider = {\n-   getUserIdentity: async () => {\n+   getIdentity: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n            const { email, roles } = JSON.parse(user);\n\n            return { email, roles };\n        }\n\n-        return Promise.reject();\n+        return null;\n    },\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type IdentityResponse = unknown;\n")),(0,o.kt)("h2",{id:"auth-hooks"},"Auth hooks"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you have used ",(0,o.kt)("inlineCode",{parentName:"p"},"codemod"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"v3LegacyAuthProviderCompatible: true")," prop added to the auth hooks for backward compatibility. If you have updated to the new auth provider, you need to manually remove this prop."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"useLogin({\n-       v3LegacyAuthProviderCompatible: true,\n})\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine@3")," auth provider used to work based on a promise reject-resolve system. with ",(0,o.kt)("strong",{parentName:"p"},"refine@4"),", all auth methods are resolving promises. Therefore, if you have used auth hooks in your application, you need to update them according to the new system."),(0,o.kt)("p",null,"Let's create a wrapper component that renders children according to the authentication status:"),(0,o.kt)("p",null,"Auth Provider v3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useAuthenticated } from "@pankod/refine-core";\n\nexport const Authenticated: React.FC = ({ children }) => {\n    const { isSuccess, isLoading, isError } = useAuthenticated();\n\n    if (isLoading) {\n        return <div>loading...</div>;\n    }\n\n    if (isError) {\n        return null;\n    }\n\n    if (isSuccess) {\n        return <>{children}</>;\n    }\n\n    return null;\n};\n')),(0,o.kt)("p",null,"Auth Provider v4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useIsAuthenticated } from "@refinedev/core";\n\nexport const Authenticated: React.FC = ({ children }) => {\n    const { isLoading, data } = useIsAuthenticated();\n\n    if (isLoading) {\n        return <div>loading...</div>;\n    }\n\n    if (data.error) {\n        return null;\n    }\n\n    if (data.authenticated) {\n        return <>{children}</>;\n    }\n\n    return null;\n};\n')),(0,o.kt)("p",null,"All hooks are similar and you need to update your auth hooks according to the new system."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/#hooks-and-components"},"Please refer to the hooks documentation for more information.")),(0,o.kt)("h2",{id:"backward-compatibility"},"Backward compatibility"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"refine")," still supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider@v3")," for backward compatibility. We changed name to ",(0,o.kt)("inlineCode",{parentName:"p"},"legacyAuthProvider")," and it will be removed in the next major version. If you want to continue using the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider@v3")," you can use it as ",(0,o.kt)("inlineCode",{parentName:"p"},"legacyAuthProvider")," in your project."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { AuthProvider } from "@refinedev/core";\n+ import { LegacyAuthProvider } from "@refinedev/core";\n\n- const authProvider: AuthProvider = {/* ... */}\n+ const authProvider: LegacyAuthProvider = {/* ... */}\n\nconst App = () => {\n    return (\n        <Refine\n-           authProvider={authProvider}\n+           legacyAuthProvider={authProvider}\n        >\n            <AppLayout />\n        </Refine>\n    );\n};\n\n')),(0,o.kt)("p",{parentName:"admonition"},"Also you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"v3LegacyAuthProviderCompatible: true")," to your auth hooks to continue using the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider@v3")," in your project."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useLogin } from "@refinedev/core";\n\nconst login = useLogin({\n    // highlight-next-line\n    v3LegacyAuthProviderCompatible: true,\n});\n'))))}p.isMDXComponent=!0}}]);