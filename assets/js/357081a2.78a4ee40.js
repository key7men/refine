"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),c=i,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||a;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<a;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>m,toc:()=>u});n(67294);var o=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"How to Install and Use NVM?",description:"Guide to using NVM with Mac and Windows",slug:"install-nvm-mac-and-windows",authors:"chidume_nnamdi",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-09-nvm/social.png",hide_table_of_contents:!1},s=void 0,m={permalink:"/blog/install-nvm-mac-and-windows",source:"@site/blog/2022-11-09-nvm.md",title:"How to Install and Use NVM?",description:"Guide to using NVM with Mac and Windows",date:"2022-11-09T00:00:00.000Z",formattedDate:"November 9, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.49,hasTruncateMarker:!1,authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],frontMatter:{title:"How to Install and Use NVM?",description:"Guide to using NVM with Mac and Windows",slug:"install-nvm-mac-and-windows",authors:"chidume_nnamdi",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-09-nvm/social.png",hide_table_of_contents:!1},prevItem:{title:"Next.js 13 - What are the new features?",permalink:"/blog/new-features-in-next-js-13"},nextItem:{title:"esbuild - Next-generation JavaScript bundler",permalink:"/blog/what-is-esbuild"},relatedPosts:[{title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.835,date:"2022-08-28T00:00:00.000Z"},{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",permalink:"/blog/grpc-vs-rest",formattedDate:"June 23, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:12.595,date:"2023-06-23T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"We'll compare both in terms of features, pros, and cons and in which scenario you should prefer one over another.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"May 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.945,date:"2023-05-25T00:00:00.000Z"}],authorPosts:[{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"May 26, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:20.37,date:"2023-05-26T00:00:00.000Z"},{title:"React Props Explained with Examples",description:"A detailed guide on React props with examples",permalink:"/blog/react-props",formattedDate:"November 16, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:11.025,date:"2022-11-16T00:00:00.000Z"},{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"June 12, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.27,date:"2023-06-12T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What&#39;s <code>nvm</code>?",id:"whats-nvm",level:2},{value:"Installation of nvm",id:"installation-of-nvm",level:2},{value:"Installing a Node version",id:"installing-a-node-version",level:2},{value:"Switching environments",id:"switching-environments",level:2},{value:"Useful nvm commands",id:"useful-nvm-commands",level:2},{value:"<code>list</code>",id:"list",level:3},{value:"<code>uninstall</code>",id:"uninstall",level:3},{value:"<code>run</code>",id:"run",level:3},{value:"Conclusion",id:"conclusion",level:2}],p=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const h={toc:u};function v(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Nodejs became a game changer in the software development world after its initial release in May 2009. Since then, software development has not been the same. The majority of big companies turned towards Nodejs and many JavaScript frameworks were birthed. Finally, JavaScript ceased from being a browser-only language to an all-platform language. We can create mobile apps, and desktop apps now with JavaScript."),(0,o.kt)("p",null,"To run Nodejs all you need to do is to install the executable and off you go!\nNow, Nodejs got better and better with each new version released but sometimes these versions can be a problem, and we might see ourselves running incompatible Nodejs in our projects. So we might just have to install the right Nodejs version, but do we have to install and re-install Nodejs versions all the time?"),(0,o.kt)("p",null,"The answer is NO because a brilliant does all the versioning work for us. The tool is called nvm, Node Version Manager."),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#whats-nvm"},"What's nvm?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation-of-nvm"},"Installation of nvm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installing-a-node-version"},"Installing a Node version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#switching-environments"},"Switching environments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#useful-nvm-commands"},"Useful nvm commands"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#list"},(0,o.kt)("inlineCode",{parentName:"a"},"list"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#uninstall"},(0,o.kt)("inlineCode",{parentName:"a"},"uninstall"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run"},(0,o.kt)("inlineCode",{parentName:"a"},"run")))))),(0,o.kt)("h2",{id:"whats-nvm"},"What's ",(0,o.kt)("inlineCode",{parentName:"h2"},"nvm"),"?"),(0,o.kt)("p",null,"nvm like we have learned is a Node Version Manager. It allows us to install and switch between different versions of Nodejs."),(0,o.kt)("p",null,"Instead of manually downloading and uninstalling the version of Nodejs nvm does it behind the hood for us. Just that it does not uninstall any version. It just manages them and switches to anyone at will."),(0,o.kt)("p",null,"Let's say you are trying to run a Node project and the project works correctly (for e.g) Node version 14 but your Node version is 10. You will likely get this warning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"This project requires Node version 14\n")),(0,o.kt)("p",null,"I encountered that on a project I was part of. I am running Node version 16.17.0 but the tests in the project were written in Node version 14.18.1. I constantly got failures concerning V8 buffer overflows and most of the tests were failing because of that. It wasn't until after a long time I got to realize that the tests were initially written in a Node 14.18.1 environment. So I had to use nvm and switch from 16 to 14 and all the tests passed."),(0,o.kt)("p",null,"One of the quick and most powerful commands of the nvm is the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," command. This command does the switching of the Node version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm use 14.18.0\n")),(0,o.kt)("p",null,"This command will switch your current Node environment version to switch from its current version to version 14.18.0."),(0,o.kt)("p",null,"Let's say you are on Node 16.0.1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node --v\n16.0.1\n")),(0,o.kt)("p",null,"Now, to switch to Node version 14.18.0, we run the previous command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm use 14.18.0\n")),(0,o.kt)("p",null,"Let's check if the Node version is correctly switched:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node -v\n14.18.0\n")),(0,o.kt)("p",null,"Yes, it is now on Node version 14.18.0."),(0,o.kt)("h2",{id:"installation-of-nvm"},"Installation of nvm"),(0,o.kt)("p",null,"The easiest way to install the nvm in Linux or MacOS is by using the curl or wget tool. you run any of the commands below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash\n\nwget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash\n")),(0,o.kt)("p",null,"These commands download the ",(0,o.kt)("inlineCode",{parentName:"p"},"install.sh")," script from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/")," and run the script. "),(0,o.kt)("p",null,"This script contains instructions on where to fetch the nvm repository and install it on the executing machine. This nvm repository will be cloned to ",(0,o.kt)("inlineCode",{parentName:"p"},".nvm")," directory in your machine, and then add the below snippet to either of the profile configuration files: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.profile"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n')),(0,o.kt)("p",null,"Installation on a Windows machine is different from the above. In Windows, you will use the nvm-windows tool. This NVM for Windows is the Microsoft/npm/Google recommended Node.js version manager for Windows.\nN.B It is not the same thing as nvm."),(0,o.kt)("p",null,"You can download the latest release of the NVM Windows here. To view all releases of the NVM Windows, you can see it here. For more instructions on how to install the NVM Windows, upgrade, and more, visit their Github repo page."),(0,o.kt)("p",null,"Now, when done with the installation of the nvm we can verify if the installation is successful and that the nvm is available globally on our machine we will run the below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm -v\n")),(0,o.kt)("p",null,"This will print the version of the nvm currently on your machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Node Version Manager (v0.35.3)\n    \nNote: <version> refers to any version-like string nvm understands. This includes:\n  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)\n  - default (built-in) aliases: node, stable, unstable, iojs, system\n  - custom aliases you define with `nvm alias foo`\n\n Any options that produce colorized output should respect the `--no-colors` option.\n')),(0,o.kt)("p",null,"See mine above, as you can see I have nvm version 0.35.3 on my machine."),(0,o.kt)("hr",null),(0,o.kt)(p,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"installing-a-node-version"},"Installing a Node version"),(0,o.kt)("p",null,"We can install a particular Nodejs version using ",(0,o.kt)("inlineCode",{parentName:"p"},"nvm"),". This is done by running the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm install 10.1.0\n")),(0,o.kt)("p",null,"This will install the Nodejs v10.1.0 on your machine. Now, if there is Nodejs v14 in your machine, it will not be removed. Instead nvm will install the Nodejs v10.1.0 to sit in my machine alongside the v14. Now, the current version of Node that the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," will use is the version that was mainly installed directly, not from nvm."),(0,o.kt)("p",null,"You can install as many as Nodejs versions you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm install 11.2.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm install 16.2.3\n")),(0,o.kt)("p",null,"To install the latest Node version, we will run the below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm install node\n")),(0,o.kt)("p",null,"This will install the latest version of Nodejs on your machine."),(0,o.kt)("p",null,"If we run the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," command with only the major version, then nvm will install the latest version of Nodejs in that major version."),(0,o.kt)("p",null,"For example, this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm install 10\n")),(0,o.kt)("p",null,"will install the latest version of Nodejs v10. Let's say the latest version of Nodejs in major version 10 is 10.19.0. It will be installed."),(0,o.kt)("h2",{id:"switching-environments"},"Switching environments"),(0,o.kt)("p",null,"We can switch Node environments by using the nvm ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm use 14\n")),(0,o.kt)("p",null,"This switches to Nodejs version 14. We must have the Nodejs 14 already installed on our machine before we can switch to it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm use 12.0.1\n")),(0,o.kt)("p",null,"This will switch to Nodejs v12.0.1."),(0,o.kt)("p",null,"There is something that we need to understand. If we only state the major version in the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," command, nvm will switch to using the major version of the Nodejs regardless of the minor and patch versions."),(0,o.kt)("p",null,"For example, this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm use 14\n")),(0,o.kt)("p",null,"This is just 14, the major version. There is no minor or patch version. Now, this will switch to using the latest Node version in the machine with a major version of 14.\nIf there are Node versions: ",(0,o.kt)("inlineCode",{parentName:"p"},"14.17.1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"14.18.1"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"14.18.0"),". nvm will pick the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"14.18.1")," and switch to it."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"useful-nvm-commands"},"Useful nvm commands"),(0,o.kt)("p",null,"Let's see some other useful nvm commands:"),(0,o.kt)("h3",{id:"list"},(0,o.kt)("inlineCode",{parentName:"h3"},"list")),(0,o.kt)("p",null,"This command lists/displays all the Nodejs versions we have on our machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm list\n")),(0,o.kt)("p",null,"Let's see the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nv14.17.1\nv14.18.1\nv16.9.0\n-> v16.17 system\ndefault -> node (-> v16.17.0)\nnode -> stable (-> v16.17.0) (default)\nstable -> 16.17 (-> v16.17.0) (default)\niojs -> N/A (default)\nunstable -> N/A (default)\nlts/* -> lts/gallium (-> v16.17.0)\nlts/argon -> v4.9.1 (-> N/A)\nlts/boron -> v6.17.1 (-> N/A)\nlts/carbon -> v8.17.0 (-> N/A)\nlts/dubnium -> v10.24.1 (-> N/A)\nlts/erbium -> v12.22.12 (-> N/A)\nlts/fermium -> v14.20.0 (-> N/A)\nlts/gallium -> v16.17.0\n")),(0,o.kt)("p",null,"See that it displays all the Nodejs versions in my machine and LTS(long-term support) versions. See that the arrowed item in the list is our current Nodejs version."),(0,o.kt)("h3",{id:"uninstall"},(0,o.kt)("inlineCode",{parentName:"h3"},"uninstall")),(0,o.kt)("p",null,"This is the reverse action of ",(0,o.kt)("inlineCode",{parentName:"p"},"install"),". This command will uninstall a Node version from the machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm uninstall 13.10.1\n")),(0,o.kt)("p",null,"This will remove the installed Nodejs version 13.10.1 from your machine."),(0,o.kt)("h3",{id:"run"},(0,o.kt)("inlineCode",{parentName:"h3"},"run")),(0,o.kt)("p",null,"This command lets you run a script with a Nodejs version without changing the current version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm run 6.10.3 app.js\n")),(0,o.kt)("p",null,"This runs app.js using node 6.10.3. You don't have to switch the current version to 6.10.3 using the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," command before you can run the script. So this ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," command does the switching before running the script and switches back to the current version after executing the script."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We learned a lot from this article. We started by introducing Nodejs and then followed by nvm. Next, we learned about nvm and what it does to Node versions in our machine."),(0,o.kt)("p",null,"Next, we learned how nvm switches between Node versions in our machine, and the command we can use to do that. We learned also how to install and uninstall Node versions using the nvm tool."),(0,o.kt)("p",null,"Finally, we saw lists of useful nvm commands that we can to ease our use of the nvm tool."))}v.isMDXComponent=!0}}]);