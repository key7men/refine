"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(d,".").concat(m)]||c[m]||l[m]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},34757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"useUpdatePassword",title:"useUpdatePassword",siderbar_label:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration."},d=void 0,p={unversionedId:"api-reference/core/hooks/auth/useUpdatePassword",id:"version-3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword",title:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useUpdatePassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1688649762,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"useUpdatePassword",title:"useUpdatePassword",siderbar_label:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration."},sidebar:"someSidebar",previous:{title:"useForgotPassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useForgotPassword"},next:{title:"useLog",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after updatePassword",id:"redirection-after-updatepassword",level:2}],c={toc:l};function m(e){var{components:t}=e,r=s(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," calls ",(0,a.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. It update passwords the user if ",(0,a.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification."),(0,a.kt)("p",null,"It returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,a.kt)("p",null,"Data that is resolved from ",(0,a.kt)("inlineCode",{parentName:"p"},"updatePassword")," will be returned as the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Normally refine provides a default update password page. If you prefer to use this default update password page, there is no need to handle update password flow manually.",(0,a.kt)("br",{parentName:"p"}),"\n","If we want to build a custom update password page instead of default one that comes with ",(0,a.kt)("strong",{parentName:"p"},"refine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," can be used like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customupdatePasswordPage"',title:'"pages/customupdatePasswordPage"'},'import { useUpdatePassword } from "@pankod/refine-core";\n\ntype updatePasswordVariables = {\n    password: string;\n};\n\nexport const updatePasswordPage = () => {\n    const { mutate: updatePassword } =\n        useUpdatePassword<updatePasswordVariables>();\n\n    const onSubmit = (values: updatePasswordVariables) => {\n        updatePassword(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," can accept any kind of object for values since the ",(0,a.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,a.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdatePassword"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: updatePassword } = useUpdatePassword<{ newPassword: string }>();\n"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," gives you query strings for the ",(0,a.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),". If you have a logic that sends a password regeneration email to the email address while resetting the password and proceeds through the access token. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"queryStrings")," variable ",(0,a.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),". For example, your regeneration link is ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_DOMAIN/update-password?token=123"),". You can access the token from the parameters of the URL."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    updatePassword: (params) => {\n        // you can access query strings from params.queryStrings\n        console.log(params.token);\n        if(param.token === "123") {\n            // your logic to update the password\n        }\n        ...\n    }\n}\n'))),(0,a.kt)("h2",{id:"redirection-after-updatepassword"},"Redirection after updatePassword"),(0,a.kt)("p",null,"We have 2 options for redirecting the app after updatePassword successfully."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A custom url can be resolved from the promise returned from the ",(0,a.kt)("inlineCode",{parentName:"li"},"updatePassword")," method of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    updatePassword: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,a.kt)("p",null,"A custom url can be given to mutate the function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook if you want to redirect yourself to a certain url."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdatePassword } from "@pankod/refine-core";\n\nconst { mutate: updatePassword } = useUpdatePassword();\n\nupdatePassword({ redirectPath: "/custom-url" });\n')),(0,a.kt)("p",null,"Then, you can handle this url in your ",(0,a.kt)("inlineCode",{parentName:"p"},"updatePassword")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    updatePassword: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the promise returned from the ",(0,a.kt)("inlineCode",{parentName:"li"},"updatePassword")," method of the ",(0,a.kt)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    updatePassword: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the promise returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"updatePassword")," is resolved with nothing, app won't be redirected to any route by default.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}m.isMDXComponent=!0}}]);