"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44669],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),g=n,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},42237:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});o(67294);var r=o(3905);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const l={title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/lighthouse-google-chrome",source:"@site/blog/2022-08-31-google-lighthouse.md",title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",date:"2022-08-31T00:00:00.000Z",formattedDate:"August 31, 2022",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:14.68,hasTruncateMarker:!0,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social.png",hide_table_of_contents:!1},prevItem:{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations"},nextItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},relatedPosts:[{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.93,date:"2023-06-24T00:00:00.000Z"},{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",permalink:"/blog/bun-js-vs-node",formattedDate:"June 4, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:9.39,date:"2023-06-04T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.145,date:"2022-11-13T00:00:00.000Z"}],authorPosts:[{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.22,date:"2023-02-23T00:00:00.000Z"},{title:"Comparing the best headless CMS solutions",description:"We compared best headless CMS solutions -  Strapi, Hasura, and Hygraph. We'll highlight their pros and cons.",permalink:"/blog/best-headless-cms",formattedDate:"February 8, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.875,date:"2023-02-08T00:00:00.000Z"},{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:3.935,date:"2022-09-29T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],m={toc:u};function g(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){n(e,t,o[t])}))}return e}({},m,o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As websites and web applications become more complex, it is necessary to measure and track their overall quality to provide a seamless browsing experience to your clients. Though several other tools exist for this purpose, Google lighthouse is quite popular among web developers mainly because it is part of the Chrome DevTools."),(0,r.kt)("p",null,"If it doesn't meet your needs as part of Chrome DevTools, Google lighthouse is also readily available as a Node package or command line utility. You can use it for auditing a website for performance, best practices, accessibility, progressive web app (PWA), and search engine optimization(SEO)."),(0,r.kt)("p",null,"You will explore the different ways of using Google Lighthouse in this article. You will also learn how to remedy some of the issues highlighted in the performance measurement and use Google lighthouse in continuous integration(CI) workflow."))}g.isMDXComponent=!0}}]);