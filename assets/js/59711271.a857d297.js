"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?i.createElement(u,r(r({ref:t},p),{},{components:n})):i.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var i=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",slug:"how-to-base64-upload",authors:"melih",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/how-to-base64-upload",source:"@site/blog/2021-12-22-base64-upload.md",title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",date:"2021-12-22T00:00:00.000Z",formattedDate:"December 22, 2021",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:3.22,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",slug:"how-to-base64-upload",authors:"melih",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},nextItem:{title:"Web3 with Refine",permalink:"/blog/web3-with-refine"},relatedPosts:[{title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",permalink:"/blog/what-is-vite-vs-webpack",formattedDate:"May 15, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:8.085,date:"2023-05-15T00:00:00.000Z"},{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.44,date:"2022-01-18T00:00:00.000Z"},{title:"Unexpected token in JSON at position 0 error",description:"We will look into the various possible causes of this error message and suggest methods to rectify it.",permalink:"/blog/unexpected-token-in-json-at-position-0-error",formattedDate:"December 9, 2022",authors:[{name:"Chukwuka Reuben",title:"Frontend Developer",imageURL:"/img/generic-profile.png",key:"chukwuka_reuben"}],readingTime:6.885,date:"2022-12-09T00:00:00.000Z"}],authorPosts:[{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",description:"With the refine being headless, we may use any UI we choose for our Admin Panel. In this tutorial, we'll create a Nostalgic-style admin panel using refine and React95 UI.",permalink:"/blog/awesome-react-windows95-ui-with-refine",formattedDate:"March 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.555,date:"2022-03-22T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.86,date:"2022-02-14T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.605,date:"2022-02-21T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"What is Base64 encoding?",id:"what-is-base64-encoding",level:2},{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"How to Base64 Upload with Refine?",id:"how-to-base64-upload-with-refine",level:2},{value:"Example",id:"example-1",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},h=m("PromotionBanner"),u=m("CodeSandboxExample"),g={toc:d};function f(e){var{components:t}=e,n=r(e,["components"]);return(0,i.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding"),(0,i.kt)("h2",{id:"what-is-base64-encoding"},"What is Base64 encoding?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Base64 Encoding")," is the most widely used technique for storing or transmitting binary data by converting it to text. With this technique, binary data, which basically consists of 8-bit bytes, is divided into 6-bit (2^6 = 64) parts. 64 different numbers expressed in 6 bits are matched with 64 different characters expressed as Printable Characters in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ASCII")," character set."),(0,i.kt)("p",null,"Base64 encoding is most commonly used to attach binary files to electronic mail in applications of the MIME (Multipurpose Internet Mail Extensions) standard."),(0,i.kt)("p",null,"Another usage area of \u200b\u200bBase64 Encoding is adding images and other files to HTML and CSS documents by encoding with Base64 using Data URLs format in modern browsers."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In our example, we will upload the image file by encoding the image as Base64. First, let's write simple HTML and set the ",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/getting-started/introduction/"},"Bootstrap")," CSS link."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="stylesheet" href="./index.css" />\n        <link\n            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n            rel="stylesheet"\n            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n            crossorigin="anonymous"\n        />\n        <title>Base64 File Upload</title>\n    </head>\n\n    <body>\n        <div style="margin: 24px">\n            <h2>Upload Image</h2>\n        </div>\n\n        <script src="./index.js"><\/script>\n    </body>\n</html>\n')),(0,i.kt)("p",null,"Then we need to use the HTML ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file"},"input")," tag to receive an image file from the user."),(0,i.kt)("p",null,"We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"file input")," because it must be the input type file we want to receive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./index.css" />\n    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet" />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n      crossorigin="anonymous"\n    />\n\n    <title>Base64 File Upload</title>\n  </head>\n  <body>\n    <div style="margin: 24px">\n      <h2>Upload Image</h2>\n    </div>\n    //highlight-start\n    <div style="margin: 16px; padding: 16px">\n      <input\n        class="form-control form-control-lg"\n        id="selectAvatar"\n        type="file"\n      />\n    </div>\n    //highlight-end\n</html>\n')),(0,i.kt)("p",null,"Now we have an input to interact with the user and select a file. Let's add the HTML elements that will show the image file and Base64 code we received from the user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="stylesheet" href="./index.css" />\n        <link href="assets/css/bootstrap-responsive.css" rel="stylesheet" />\n        <link\n            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n            rel="stylesheet"\n            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n            crossorigin="anonymous"\n        />\n\n        <title>Base64 File Upload</title>\n    </head>\n    <body>\n        <div style="margin: 24px">\n            <h2>Upload Image</h2>\n        </div>\n\n        <div style="margin: 16px; padding: 16px">\n            <input\n                class="form-control form-control-lg"\n                id="selectAvatar"\n                type="file"\n            />\n        </div>\n        //highlight-start\n        <div class="container">\n            <div class="row">\n                <div class="col">\n                    <h6>Image Preview:</h6>\n                    <img class="img" id="avatar" />\n                </div>\n                <div class="col">\n                    <h6>Base64 Output</h6>\n                    <textarea id="textArea" rows="30" cols="50"></textarea>\n                </div>\n            </div>\n        </div>\n        //highlight-end\n        <script src="./index.js"><\/script>\n    </body>\n</html>\n')),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-12-22-base64-upload/upload.png",alt:"upload_screen"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Our fields are ready to display the image file and Base64 code. Now let's do our operations on the JavaScript side."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const input = document.getElementById("selectAvatar");\nconst avatar = document.getElementById("avatar");\nconst textArea = document.getElementById("textAreaExample");\n\nconst convertBase64 = (file) => {\n    return new Promise((resolve, reject) => {\n        const fileReader = new FileReader();\n        fileReader.readAsDataURL(file);\n\n        fileReader.onload = () => {\n            resolve(fileReader.result);\n        };\n\n        fileReader.onerror = (error) => {\n            reject(error);\n        };\n    });\n};\n\nconst uploadImage = async (event) => {\n    const file = event.target.files[0];\n    const base64 = await convertBase64(file);\n    avatar.src = base64;\n    textArea.innerText = base64;\n};\n\ninput.addEventListener("change", (e) => {\n    uploadImage(e);\n});\n')),(0,i.kt)("p",null,"Here we take data in file format and encode it as Base64. Then we show this encoded image and Base64 encoding output."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-12-22-base64-upload/overview.png",alt:"overview"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/base64-upload-file-h3yy0?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"base64-upload-file",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)(h,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-to-base64-upload-with-refine"},"How to Base64 Upload with Refine?"),(0,i.kt)("p",null,"The Base64 file upload process with ",(0,i.kt)("strong",{parentName:"p"},"refine")," is very simple. How to use it is explained step by step in the guide and example. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/upload/base64-upload/"},"Refer to the ",(0,i.kt)("strong",{parentName:"a"},"refine")," Base64 Upload guide for more information. \u2192")," "),(0,i.kt)("h2",{id:"example-1"},"Example"),(0,i.kt)(u,{path:"upload-antd-base64",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);