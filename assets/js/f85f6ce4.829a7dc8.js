"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",slug:"supabase-twilio-otp-authentication-in-react",authors:"vijit_ail",tags:["react","supabase","refine","authentication","otp","login"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/social.png",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/supabase-twilio-otp-authentication-in-react",source:"@site/blog/2022-09-22-refine-supabase-auth.md",title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",date:"2022-09-22T00:00:00.000Z",formattedDate:"September 22, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"supabase",permalink:"/blog/tags/supabase"},{label:"refine",permalink:"/blog/tags/refine"},{label:"authentication",permalink:"/blog/tags/authentication"},{label:"otp",permalink:"/blog/tags/otp"},{label:"login",permalink:"/blog/tags/login"}],readingTime:12.495,hasTruncateMarker:!1,authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],frontMatter:{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",slug:"supabase-twilio-otp-authentication-in-react",authors:"vijit_ail",tags:["react","supabase","refine","authentication","otp","login"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/social.png",hide_table_of_contents:!1},prevItem:{title:"An article guideline for refine blog posts",permalink:"/blog/article-guideline"},nextItem:{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide"},relatedPosts:[{title:"Simple Web Application Example with Refine",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.58,date:"2021-10-04T00:00:00.000Z"},{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.835,date:"2022-08-04T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.975,date:"2022-02-22T00:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is Supabase?",id:"what-is-supabase",level:2},{value:"What is refine?",id:"what-is-refine",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installing Tailwind CSS for refine project",id:"installing-tailwind-css-for-refine-project",level:2},{value:"Set up the Supabase Project",id:"set-up-the-supabase-project",level:2},{value:"Create the Login Page",id:"create-the-login-page",level:2},{value:"Data Provider",id:"data-provider",level:2},{value:"Auth Provider",id:"auth-provider",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Passwords are one of the most popular ways to authenticate a user. However, passwords have disadvantages, such as being subject to brute force attacks and data breaches. "),(0,i.kt)("p",null,"Another significant problem with password-based login is that keeping track of different passwords can become challenging. This is where the term 'OTP' (One Time Password) can be helpful."),(0,i.kt)("p",null,"When we talk about OTP-based authentication, users need to enter a six-digit OTP number sent to them through an automated call or SMS when they want to access the application."),(0,i.kt)("p",null,"You can see the example app we'll build in the article from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/examples/refine-supabase-auth"},"here")),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-supabase"},"What is Supabase?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-refine"},"What is refine?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installing-tailwind-css-for-refine-project"},"Installing Tailwind CSS for refine project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#set-up-the-supabase-project"},"Set up the Supabase Project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-the-login-page"},"Create the Login Page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#data-provider"},"Data Provider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#auth-provider"},"Auth Provider"))),(0,i.kt)("h2",{id:"what-is-supabase"},"What is Supabase?"),(0,i.kt)("p",null,"Supabase is an open-source Firebase alternative. It provides a real-time database, authentication, and media buckets in one platform. You can use Supabase with any frontend tool, such as React, Angular, or Vue.js."),(0,i.kt)("p",null,"One of the great features of Supabase is its Auth service. Supabase Auth allows you to easily add OTP-based authentication to your app with just a few lines of code. "),(0,i.kt)("p",null,"In this guide, you will implement OTP-based login in Refine using the Supabase library."),(0,i.kt)("h2",{id:"what-is-refine"},"What is refine?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://refine.dev"},"refine")," is a React-based open-source frameworks for building admin panels, dashboards, internal tools and storefront apps rapidly. It helps developers to avoid from repetitive tasks demanded by CRUD operations and provides solutions for like authentication, access control, routing, networking, state management."),(0,i.kt)("p",null,"One of the great features of refine is its out-of-the-box data providers integrations. refine has a built-in data provider for supabase and we'll see how to use it propery."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To follow this guide, you must install the latest Node.js version on your system and be familiar with React and TypeScript concepts. For this tutorial, you will also require a Twilio account to send out OTP text messages and a Github account to sign up for Supabase."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Start by creating the refine app using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," CLI. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx superplate-cli -p refine-react refine-supabase-auth\n")),(0,i.kt)("div",{class:"img-container","align-items":"center"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/terminal.png",alt:"terminal"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Choose the headless option while specifying the UI framework, as you will be integrating tailwind in this tutorial. You can select your preferred package manager; this tutorial will use yarn. Choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"supabase")," option when selecting the Data Provider."),(0,i.kt)("p",null,"Here is the source code of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/supabase"},"refine supabase data provider")),(0,i.kt)("h2",{id:"installing-tailwind-css-for-refine-project"},"Installing Tailwind CSS for refine project"),(0,i.kt)("p",null,"Next, navigate to your project directory and install the following packages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add -D tailwindcss\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add daisyui react-daisyui\n")),(0,i.kt)("p",null,"Daisy UI adds attractive component classes to Tailwind, which are customizable and comes with modular React components like ",(0,i.kt)("inlineCode",{parentName:"p"},"Button"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Card"),", etc., out-of-the-box."),(0,i.kt)("p",null,"Run the following command to initialize Tailwind in your project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx tailwindcss init\n")),(0,i.kt)("p",null,"Update the recently added ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file to add some theming to the refine app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'},'module.exports = {\n  content: [\n    "node_modules/daisyui/dist/**/*.js",\n    "node_modules/react-daisyui/dist/**/*.js",\n    "./src/**/*.{js,jsx,ts,tsx}",\n  ],\n  theme: {\n    extend: {\n      colors: {\n        dark: "#030303",\n        gray: "#eaeaec",\n      },\n    },\n  },\n  plugins: [require("daisyui")],\n  daisyui: {\n    themes: [\n      {\n        mytheme: {\n          primary: "#545bef",\n          secondary: "#757EC0",\n          accent: "#09f08a",\n        },\n      },\n    ],\n  },\n};\n')),(0,i.kt)("p",null,"Now, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.css")," file and add the following content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.css"',title:'"src/App.css"'},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," file, import the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.css")," file to add the styling."),(0,i.kt)("p",null,"Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn dev")," command to start the refine development server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn dev\n")),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/dashboard.png",alt:"dashboard"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"set-up-the-supabase-project"},"Set up the Supabase Project"),(0,i.kt)("p",null,'Head over to app.supabase.com and sign in to your Supabase account. Next, create a new project by clicking on the "New Project" button.'),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/setupSupabase.png",alt:"setupSupabase"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Add the name of the project and the database password, and wait for Supabase to set up and create your project. Meanwhile, you can grab the public key and the project URL from the Supabase dashboard and update the credentials in your code."),(0,i.kt)("p",null,"Once the project is created, go to Authentication -> Settings to configure the Auth providers."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window",style:{alignSelf:"center",width:"400px"}},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/supabase2.png",alt:"supabase2"})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window",style:{alignSelf:"center",width:"400px"}},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/supabase3.png",alt:"supabase3"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"You will find the Phone Auth option in the Auth providers section; enable it and select Twilio as the SMS provider. "),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/supabase4.png",alt:"supabase4"})),(0,i.kt)("br",null),(0,i.kt)("p",null," You need to create and developer account and set up credentials on ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/"},"Twilio Console")),(0,i.kt)("p",null,"Add your Twilio API credentials to complete the integration. You can also edit the OTP expiry time, length of the OTP, and the SMS template according to your business requirements. For this guide, you can stick with the default values."),(0,i.kt)("p",null,"The backend setup is now complete. In the next section, you will start building the app's frontend."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/refinedev/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,i.kt)("h2",{id:"create-the-login-page"},"Create the Login Page"),(0,i.kt)("p",null,"In this guide, you are allowing users to access their account without requiring a password. Once the users log into their account, they will see a list of countries on the dashboard screen."),(0,i.kt)("p",null,"On the login page, you need to create a two-step form.",(0,i.kt)("br",{parentName:"p"}),"\n","In the first step, the user will enter the mobile number to receive the OTP message, and in the second step, the user will enter the OTP token to log in. Display an error if the OTP token is invalid or expired."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/Login.tsx"',title:'"src/pages/Login.tsx"'},'import { useRef, useState } from "react";\nimport { Alert, Button, Card, Input } from "react-daisyui";\n\nexport const LoginPage = () => {\n  const mobileNoRef = useRef<string>();\n  const otpRef = useRef<string>();\n  const [error, setError] = useState<string>();\n  const [formState, setFormState] = useState<"SEND_OTP" | "LOGIN">("SEND_OTP");\n\n  const onSendOtp = () => {\n    setFormState("LOGIN");\n  };\n\n  const mobileFormRender = () => (\n    <>\n      <label className="font-medium text-dark">Enter your mobile mumber</label>\n      <Input\n        className="mb-4 border-gray bg-gray text-dark text-lg font-medium"\n        onChange={(e) => (mobileNoRef.current = e.target.value)}\n        onFocus={() => setError("")}\n        name="mobile"\n        type={"tel"}\n        defaultValue={mobileNoRef.current}\n      />\n      <Button color="accent" className="shadow" onClick={onSendOtp}>\n        Send OTP\n      </Button>\n    </>\n  );\n\n  const otpFormRender = () => (\n    <>\n      <label className="font-medium text-dark">Enter OTP</label>\n      <Input\n        className="mb-4 border-gray bg-gray text-dark text-lg font-medium"\n        onChange={(e) => (otpRef.current = e.target.value)}\n        onFocus={() => setError("")}\n        name="otp"\n        value={otpRef.current}\n      />\n      <Button color="accent" className="shadow" onClick={onLogin}>\n        Login\n      </Button>\n    </>\n  );\n\n  return (\n    <div className="min-h-screen bg-primary flex items-center justify-center">\n      <Card className="bg-white w-1/2 shadow-lg " bordered={false}>\n        <Card.Body>\n          {error && (\n            <Alert status="error" className="mb-2">\n              {error}\n            </Alert>\n          )}\n          <h2 className="text-dark text-xl  font-bold mb-3">Sign In</h2>\n          {formState === "SEND_OTP" && mobileFormRender()}\n          {formState === "LOGIN" && otpFormRender()}\n        </Card.Body>\n      </Card>\n    </div>\n  );\n};\n')),(0,i.kt)("p",null,"In the above code, we set a ",(0,i.kt)("inlineCode",{parentName:"p"},"formState")," state variable to define whether to render the mobile input or the OTP input on the screen. If there's any error, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," variable and display it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Alert")," component."),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginPage")," component in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," file and pass it as a prop to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component to override the Login page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { Refine } from '@pankod/refine-core';\nimport routerProvider from '@pankod/refine-react-router-v6';\nimport { dataProvider } from '@pankod/refine-supabase';\nimport { supabaseClient } from 'utility';\nimport authProvider from './authProvider';\nimport { Countries } from 'pages/Countries';\nimport { Layout } from 'pages/Layout';\nimport './App.css';\n//highlight-next-line\nimport { LoginPage } from 'pages/Login';\n\nfunction App() {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(supabaseClient)}\n      resources={[{ name: \"countries\" }]}\n      authProvider={authProvider}\n      //highlight-next-line\n      LoginPage={LoginPage}\n    />\n  );\n}\n")),(0,i.kt)("p",null,"Also, notice that superplate CLI has already imported the ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dataProvider")," for you."),(0,i.kt)("h2",{id:"data-provider"},"Data Provider"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dataProvider")," acts as a data layer for your app that makes the HTTP requests and encapsulates how the data is retrieved. It requests and returns the data using predefined methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"create()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getMany()"),", etc. Refine consumes these methods via data hooks. "),(0,i.kt)("p",null,"For example, when you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useList")," hook, Refine internally calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"getList()")," method of the data provider."),(0,i.kt)("p",null,"In this case, we pass the supabaseClient as the data provider. Supabase is supported out-of-the-box as a data provider by Refine. Here, the data provider internally calls supabase-js database methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"select()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"insert()"),", etc., to handle the data."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/data-provider/"},"You can learn more about data provider in the Refine docs.")),(0,i.kt)("h2",{id:"auth-provider"},"Auth Provider"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," is an object that refine uses to authenticate and authorize the users. The auth provider must have methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"login()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"register()"),", etc., to manage authentication in your app. These methods should return a Promise and are accessible via hooks."),(0,i.kt)("p",null,"The superplate CLI autogenerates the auth provider from your selected preference- in this case, it is Supabase. Unlike data providers, refine does not offer out-of-the-box support for auth providers; you must create it from scratch."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/auth-provider/"},"You can read more about auth provider in detail here.")),(0,i.kt)("p",null,"Alright, now coming back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginPage")," component. When the user requests for OTP, validate the mobile number using the regex shown in the below code. The mobile number is expected to include the country code; you can use other third-party components for mobile input with a country code dropdown and mobile validation out-of-the-box."),(0,i.kt)("p",null," We'll use the input field in this guide for brevity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/Login.tsx"',title:'"src/pages/Login.tsx"'},'import { supabaseClient } from "utility";\n\n...\n\nconst onSendOtp = async () => {\n  const mobileNo = mobileNoRef.current || "";\n  if (!/^\\+[1-9]{1}[0-9]{3,14}$/.test(mobileNo)) {\n    setError("Please enter a valid mobile number");\n    return;\n  }\n  const { error } = await supabaseClient.auth.signIn({\n    phone: mobileNo,\n  });\n  if (error) {\n    setError(error.message);\n    return;\n  }\n  setFormState("LOGIN");\n};\n\n...\n')),(0,i.kt)("p",null,"To send the OTP message to the user, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"supabase.auth.signIn()")," method and pass the mobile number in the ",(0,i.kt)("inlineCode",{parentName:"p"},"phone")," property as shown above."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/login.png",alt:"login"})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/loginInvalid.png",alt:"loginInvalid"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," property in ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," to accept the mobile number and OTP as input and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"supabase.auth.verifyOTP()")," method for verifying the OTP entered by the user and enabling access to the dashboard page of the app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},"...\n\nconst authProvider: AuthProvider = {\n  login: async ({ mobileNo, otp }) => {\n    const { user, error } = await supabaseClient.auth.verifyOTP({\n      phone: mobileNo,\n      token: otp,\n    });\n    if (error) {\n      return Promise.reject(error);\n    }\n    if (user) {\n      return Promise.resolve();\n    }\n  },\n  ...\n}\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"onLogin()")," function of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<LoginPage/>")," component, pass the mobile number and OTP to the ",(0,i.kt)("inlineCode",{parentName:"p"},"login()")," acquired from the ",(0,i.kt)("inlineCode",{parentName:"p"},"useLogin")," hook."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/Login.tsx"',title:'"src/pages/Login.tsx"'},"\n...\n\nconst { mutate: login } = useLogin();\n\nconst onLogin = () => {\n  login(\n    { mobileNo: mobileNoRef.current, otp: otpRef.current },\n    { onError: (error) => setError(error.message) }\n  );\n};\n")),(0,i.kt)("p",null,"If the OTP is invalid, the error message will be displayed as shown below."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/loginToken.png",alt:"loginToken"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"The authentication flow is now complete. Let\u2019s finish the rest of the app by creating the countries resource."),(0,i.kt)("p",null,"In your Supabase project, head to the SQL editor page and click on the \u201cCountries\u201d option from the Quick start section. It will open up the SQL statements in an editor page; click on the RUN button to execute them."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/supabaseDB.png",alt:"supabaseDB"})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/supabaseDB2.png",alt:"supabaseDB2"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"The SQL snippet will create a countries table and dump the country list and other columns like country code and continent."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Countries")," component, get the data from Supabase using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useList")," hook and render the data using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/Countries.tsx"',title:'"src/pages/Countries.tsx"'},'import { useList } from "@pankod/refine-core";\nimport { Table } from "react-daisyui";\n\nconst columns = ["ID", "Name", "ISO Code", "Local Name", "Continent"];\n\nexport const Countries = () => {\n  const { data: countries } = useList({\n    resource: "countries",\n    config: { hasPagination: false },\n  });\n  return (\n    <div className="overflow-x-auto">\n      <Table color="primary" className="w-full">\n        <Table.Head className="bg-primary">\n          {columns.map((column) => (\n            <span key={column}>{column}</span>\n          ))}\n        </Table.Head>\n        <Table.Body>\n          {countries?.data.map((country: Record<string, string>) => (\n            <Table.Row key={country.id}>\n              <span className="text-dark opacity-50 font-medium">\n                {country.id}\n              </span>\n              <span className="text-dark opacity-50 font-medium">\n                {country.name}\n              </span>\n              <span className="text-dark opacity-50 font-medium">\n                {country.iso2}\n              </span>\n              <span className="text-dark opacity-50 font-medium">\n                {country.local_name}\n              </span>\n              <span className="text-dark opacity-50 font-medium">\n                {country.continent}\n              </span>\n            </Table.Row>\n          ))}\n        </Table.Body>\n      </Table>\n    </div>\n  );\n};\n')),(0,i.kt)("p",null,"Create the Layout component to create an app bar with a logout button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/Layout.tsx"',title:'"src/pages/Layout.tsx"'},'import { LayoutProps, useLogout } from "@pankod/refine-core";\nimport { Button } from "react-daisyui";\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n  const { mutate: logout } = useLogout();\n  return (\n    <div className="flex min-h-screen flex-col">\n      <div className="mb-2 py-3 bg-gray">\n        <div className="container mx-auto flex">\n          <Button\n            color="accent"\n            size="sm"\n            className="ml-auto shadow"\n            onClick={() => logout()}\n          >\n            Logout\n          </Button>\n        </div>\n      </div>\n      <div className="container bg-white mx-auto py-4">{children}</div>\n    </div>\n  );\n};\n')),(0,i.kt)("p",null,"Import the Countries and the Layout component in the App.tsx fle to finish up the application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'...\n//highlight-start\nimport { Countries } from "pages/Countries";\nimport { Layout } from "components/Layout";\n//highlight-end\n\nfunction App() {\n  return (\n    <Refine\n      routerProvider={{\n        ...routerProvider,\n      }}\n      dataProvider={dataProvider(supabaseClient)}\n      authProvider={authProvider}\n      LoginPage={LoginPage}\n      //highlight-start\n      resources={[{ name: "countries", list: Countries }]}\n      Layout={Layout}\n      //highlight-end\n    />\n  );\n}\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-22-refine-supabase-auth/final.png",alt:"final"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"OTP authentication adds an extra layer of security to your application and helps ensure that only authorized users can access it. In this article, we've gone over how to add OTP-based authentication in refine using Supabase Auth. We've also looked at how to set up the phone auth provider in Supabase using Twilio so that users can receive their OTP tokens. "),(0,i.kt)("p",null,"Following this article's steps, you should now have a refine application with OTP-based authentication enabled."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,i.kt)("p",null,"Low-code React frameworks are great for gaining development speed but they often fall short of flexibility if you need extensive styling and customization for your project."),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine"),",if you are interested in a headless framework you can use with any custom design or UI-Kit for 100% control over styling."),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/refinedev/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is an open-source React-based framework for building CRUD applications ",(0,i.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,i.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,i.kt)("strong",{parentName:"p"},"styling"),", ",(0,i.kt)("strong",{parentName:"p"},"customization")," and ",(0,i.kt)("strong",{parentName:"p"},"project workflow.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,i.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects."))}u.isMDXComponent=!0}}]);