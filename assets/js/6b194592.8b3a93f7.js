"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={id:"useIsAuthenticated",title:"useIsAuthenticated",siderbar_label:"useIsAuthenticated",description:"useIsAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useIsAuthenticated/index.ts"},o=void 0,c={unversionedId:"api-reference/core/hooks/authentication/useIsAuthenticated",id:"api-reference/core/hooks/authentication/useIsAuthenticated",title:"useIsAuthenticated",description:"useIsAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/docs/api-reference/core/hooks/authentication/useIsAuthenticated.md",sourceDirName:"api-reference/core/hooks/authentication",slug:"/api-reference/core/hooks/authentication/useIsAuthenticated",permalink:"/docs/api-reference/core/hooks/authentication/useIsAuthenticated",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/authentication/useIsAuthenticated.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1684771170,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{id:"useIsAuthenticated",title:"useIsAuthenticated",siderbar_label:"useIsAuthenticated",description:"useIsAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useIsAuthenticated/index.ts"},sidebar:"someSidebar",previous:{title:"useCan",permalink:"/docs/api-reference/core/hooks/accessControl/useCan"},next:{title:"useOnError",permalink:"/docs/api-reference/core/hooks/authentication/useOnError"}},s={},u=[{value:"Usage",id:"usage",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,r.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isError"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Data that is resolved from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type CheckResponse = {\n    authenticated: boolean;\n    redirectTo?: string;\n    logout?: boolean;\n    error?: Error;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authenticated"),": A boolean value indicating whether the user is authenticated or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirectTo"),": A string value indicating the URL to redirect to if authentication is required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logout"),": A boolean value indicating whether the logout method should be called."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": An Error object representing any errors that may have occurred during the check.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," can be useful when you want to check for authentication and handle the result manually."),(0,r.kt)("p",null,"We have used this hook in refine's ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/auth/authenticated"},(0,r.kt)("inlineCode",{parentName:"a"},"<Authenticated>"))," component which allows only authenticated users to access the page or any part of the code."),(0,r.kt)("p",null,"We will demonstrate a similar basic implementation below. Imagine that you have a public page but you want to make some specific fields private."),(0,r.kt)("p",null,"We have a logic in ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthBindings = {\n    // ---\n    // highlight-start\n    check: () =>\n        localStorage.getItem("email")\n            ? {\n                  authenticated: true,\n              }\n            : {\n                  authenticated: false,\n                  error: {\n                    message: "Check failed",\n                    name: "Not authenticated",\n                  },\n                  logout: true,\n                  redirectTo: "/login",\n              },\n    // highlight-end\n    // ---\n};\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Let's create a wrapper component that renders children if ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method returns the Promise resolved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/authenticated.tsx"',title:'"components/authenticated.tsx"'},'// highlight-next-line\nimport { useIsAuthenticated, useGo } from "@refinedev/core";\n\nexport const Authenticated: React.FC<AuthenticatedProps> = ({\n    children,\n    fallback,\n    loading,\n}) => {\n    // highlight-next-line\n    const { isLoading, data } = useIsAuthenticated();\n\n    const go = useGo();\n\n    if (isLoading) {\n        return <>{loading}</> || null;\n    }\n\n    if (data.error) {\n        if (!fallback) {\n            go({ to: redirectTo, type: "replace" });\n            return null;\n        }\n\n        return <>{fallback}</>;\n    }\n\n    if (data.authenticated) {\n        return <>{children}</>;\n    }\n\n    return null;\n};\n\ntype AuthenticatedProps = {\n    fallback?: React.ReactNode;\n    loading?: React.ReactNode;\n};\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now, only authenticated users can see the price field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/postShow"',title:'"components/postShow"'},'// highlight-next-line\nimport { Authenticated } from "components/authenticated";\n\nexport const PostShow: React.FC = () => (\n    <div>\n        // highlight-start\n        <Authenticated>\n            <span>Only authenticated users can see</span>\n        </Authenticated>\n        // highlight-end\n    </div>\n);\n')))}d.isMDXComponent=!0}}]);