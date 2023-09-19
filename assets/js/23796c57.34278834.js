"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>h});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"How to set up a WebSocket connection with Node.js and React.js?",description:"Understanding Real-time communication with React and WebSocket",slug:"react-websocket-tutorial-nodejs",authors:"frank_joseph",tags:["react"],hide_table_of_contents:!1,image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-16-react-web-socket/social.png"},c=void 0,l={permalink:"/blog/react-websocket-tutorial-nodejs",source:"@site/blog/2023-08-16-react-web-socket.md",title:"How to set up a WebSocket connection with Node.js and React.js?",description:"Understanding Real-time communication with React and WebSocket",date:"2023-08-16T00:00:00.000Z",formattedDate:"August 16, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:12.28,hasTruncateMarker:!1,authors:[{name:"Frank Joseph",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"frank_joseph"}],frontMatter:{title:"How to set up a WebSocket connection with Node.js and React.js?",description:"Understanding Real-time communication with React and WebSocket",slug:"react-websocket-tutorial-nodejs",authors:"frank_joseph",tags:["react"],hide_table_of_contents:!1,image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-16-react-web-socket/social.png"},prevItem:{title:"How to use Docker Exec command?",permalink:"/blog/docker-exec"},nextItem:{title:"React-admin vs refine - Which React Framework is Best for B2B Apps?",permalink:"/blog/react-admin-vs-refine"},relatedPosts:[{title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.125,date:"2021-10-25T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.67,date:"2022-03-01T00:00:00.000Z"},{title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",permalink:"/blog/how-to-add-darkmode-in-ant-design",formattedDate:"February 12, 2022",authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],readingTime:5.045,date:"2022-02-12T00:00:00.000Z"}],authorPosts:[]},d={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"Why WebSocket?",id:"why-websocket",level:2},{value:"Unleashing the Power of WebSockets using Node.js and React",id:"unleashing-the-power-of-websockets-using-nodejs-and-react",level:2},{value:"Accessing the Code",id:"accessing-the-code",level:2},{value:"Run the application after Setting up the Environment",id:"run-the-application-after-setting-up-the-environment",level:2},{value:"Understanding the Code**",id:"understanding-the-code",level:2},{value:"Understanding the WebSocket Handshake",id:"understanding-the-websocket-handshake",level:3},{value:"Managing Client Connections",id:"managing-client-connections",level:3},{value:"Establishing the Handshake at the Client Level",id:"establishing-the-handshake-at-the-client-level",level:3},{value:"Real-time Message Transmission",id:"real-time-message-transmission",level:3},{value:"Handling Disconnections",id:"handling-disconnections",level:3}],p=(u="PromotionBanner",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const m={toc:h};function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"With the advent of Social Media and other internet-enabled communication tools, delivering real-time communication has become increasingly important. Hypertext Transfer Protocol (HTTP) is a communication protocol like WebSocket that follows the Request-Response, one-way communication pattern. It has been used by most developers to implement real-time communication but it falls short when the use case involves instant updates and building a full-duplex bidirectional communication tool. Although HTTP through its various methods such as HTTP Polling, Streaming, and server-sent events (SSE) helped developers implement data transfer, there are restrictions and disadvantages that have paved the way for WebSocket. WebSocket helps developers implement a full-duplex bidirectional communication mechanism and helps developers build a real-time communication system."),(0,a.kt)("p",null,"In this article, we\u2019ll discuss the shortcomings of the HTTP protocol,  and explore the concept of real-time communication and how to implement it with the WebSocket protocol while building a basic client communication application. "),(0,a.kt)("h2",{id:"why-websocket"},"Why WebSocket?"),(0,a.kt)("p",null,"In creating web applications with a full-duplex (two-way) bidirectional communication functionality, developers must tweak the traditional HTTP protocol to implement data transfer. The HTTP protocol has several methods such as HTTP Polling, HTTP Streaming, and server-sent events that help developers build a real-time application. These methods have several shortcomings where WebSockets has proved superior as we\u2019ll see in the following few sections."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTTP Polling"),"\nThe first attempt to solve the issues that comes with traditional HTTP protocol is by polling the server intervals. The client sends the request to the server at predefined intervals using these functions setInterval or setTimeout. In long polling, the server handles the interval or waiting time. The sum total of the request and response events in the HTTP protocol is referred to as the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP Polling lifecycle")," It involves the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To communicate with the server, the client sends a request and waits for a response"),(0,a.kt)("li",{parentName:"ul"},"The server sends a response when there is an event, update, or change, or reaches a timeout until then it hangs the client request."),(0,a.kt)("li",{parentName:"ul"},"The server sends a response to the client when there is an update or change"),(0,a.kt)("li",{parentName:"ul"},"This cycle continues as the client sends a new request.")),(0,a.kt)("p",null,"The following are some of the flaws associated with HTTP Polling: Caching, Timeouts, header overhead, and latency. Building a real-time application with WebSocket removes these pitfalls associated with HTTP Polling."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTTP Stream"),"\nIn HTTP Polling, the server closes without sending a response to the client, this is the predominant cause of network latency associated with HTTP Polling. In HTTP Polling, the server closes the request connection channel after responding. This connection channel closure means the client would have to create a new connection whenever there is a new request.  HTTP Stream solves this problem. In HTTP Stream, the initial request is left open even after the server has responded to the client\u2019s request with data. Leaving the request channel open indefinitely makes it possible for the server to continually send responses to the client whenever new data is available or there is an update or change. HTTP Stream reduces latency, delivers updates near real-time, and utilizes server resources. The limitation associated with streaming data over HTTP is that it requires the client to initiate a request and establish a connection and latency could be an issue with streaming too."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"},(0,a.kt)("strong",{parentName:"a"},"Server-Sent Event (SSE)")),"\nThe server-sent event protocol provides a unidirectional (Serve-client) communication channel to stream data in real-time or near real-time. The SSE is a standardized HTTP streaming protocol with a built-in browser API. "),(0,a.kt)("p",null,"NB:  Firefox doesn't support the use of SSE in service workers."),(0,a.kt)("p",null,"SSE is an excellent choice for unidirectional data transfer from server to client. SSE is extremely fitted for use cases where there is no need to send data from the client to the server. For example, SSE is especially useful for handling social media feed updates, and real-time dashboards. "),(0,a.kt)("p",null,"So far, we\u2019ve seen the shortcomings associated with the traditional HTTP methods, and how inefficient it is to use them to implement bidirectional real-time communication. WebSocket is a more suitable option for implementing bidirectional data exchange."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What is WebSocket"),"\nWebSocket is a data transfer protocol that makes it possible for bidirectional (two-way), real-time, full-duplex, and interactive communication between the browser (client) and the server over a single, long-lived Transmission Control Protocol (TCP) connection. With ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSocket API"),", the client can send requests to the server and receive event-driven responses without having to poll the server."),(0,a.kt)("p",null,"WebSocket connection follows the order below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Request Handshake"),": To establish a connection, the client sends an initial request to the server, this is known as the WebSocket handshake."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Validate request"),": Upon receiving the request, the server checks its validity and connects if validation is successful."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Communication"),": Upon successful validation, a WebSocket connection is established, and both the server and client can transfer data to each other.")),(0,a.kt)("p",null,"WebSocket API is supported by most major browsers as shown in this ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API#browser_compatibility"},"compatibility table"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why Developers should use WebSockets"),"\nDue to the inconsistencies associated with the HTTP methods; it is not advisable to build an application with a bidirectional communication functionality using traditional HTTP methods. WebSockets provide low-latency, bidirectional, real-time communication channels between client and server. While being a lightweight protocol, it is also scalable and supports full-duplex (two-way) communication. WebSockets are supported by most modern browsers."),(0,a.kt)("h2",{id:"unleashing-the-power-of-websockets-using-nodejs-and-react"},"Unleashing the Power of WebSockets using Node.js and React"),(0,a.kt)("p",null,"According to the Web Socket connection order discussed earlier, the WebSocket protocol starts by creating a handshake and then allows communication after confirming the request by sending data. The connection between the client and server must be established through the handshake. Real-time data communication between the client and server is possible when the handshake is complete."),(0,a.kt)("p",null,"We'll demonstrate how to set up a WebSocket connection with Node.js and React.js. To illustrate the capabilities of WebSockets, we'll utilize a collaborative text editing application as an example. Multiple people can collaborate and edit a text at the same time with this application, and any changes made by one person are immediately visible to all other users."),(0,a.kt)("h2",{id:"accessing-the-code"},"Accessing the Code"),(0,a.kt)("p",null,"Before getting into the specifics of WebSockets, it's important to remember that Git Repository has the entire code available. The source code for a prototype collaborative text editing application that will be used as our real-world example to understand web sockets practically is in the root folder(",(0,a.kt)("strong",{parentName:"p"},"WebSockets-Demo-main"),") that can be obtained from the provided URL(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/khabbabpersonal/WebSockets-Demo"},(0,a.kt)("strong",{parentName:"a"},"Collaborative Text Editing Application")),"). To follow along, clone or download the repository."),(0,a.kt)("h2",{id:"run-the-application-after-setting-up-the-environment"},"Run the application after Setting up the Environment"),(0,a.kt)("p",null,"The next step after downloading and unzipping the file is configuring your Environment. Using your favorite code editor, open the unzipped folder. There are two main directories available:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Server Directory:")," This is the location of the Node.js WebSocket server. It is in charge of managing the text editor's core logic. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Client Directory:")," This includes a React application that communicates with the WebSocket server. It is in charge of the application's real-time features. Through it, the user engages with the application."),(0,a.kt)("p",null,"You need to execute some commands in order to start the text editing application. These commands will launch the server and client and install the required packages. You can open the app in two different browser windows and edit the text simultaneously after the server and client are both up and running. Here, you begin to experience WebSockets' real-time capabilities."),(0,a.kt)("h2",{id:"understanding-the-code"},"Understanding the Code**"),(0,a.kt)("h3",{id:"understanding-the-websocket-handshake"},"Understanding the WebSocket Handshake"),(0,a.kt)("p",null,"The server and client begin a handshake over the WebSocket protocol. At the server level, the HTTP server is turned on, and the WebSocket server is connected using a single port. The WebSocket server is connected to the HTTP port once the HTTP server has been set up. The process of creating a WebSocket connection starts with this, and it serves as the beginning of an exchange between the server and the client, much like a virtual handshake."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/server/index.js"',title:'"/server/index.js"'},"// Import required modules\nconst { WebSocket, WebSocketServer } = require('ws');\nconst http = require('http');\nconst uuidv4 = require('uuid').v4;\n\n// Create an HTTP server and a WebSocket server\nconst server = http.createServer();\nconst wsServer = new WebSocketServer({ server });\nconst port = 8000;\n\n// Start the WebSocket server\nserver.listen(port, () => {\n  console.log(`WebSocket server is running on port ${port}`);\n});\n\n")),(0,a.kt)("h3",{id:"managing-client-connections"},"Managing Client Connections"),(0,a.kt)("p",null,"The management of client connections is essential in any real-time application. Each client is provided with an individual key produced by the 'uuid' package, and all connected clients are tracked as an object in the code. The special key is created, and the connection is saved when a new client connection request is received. This enables the server to manage all connections that are currently active efficiently."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/server/index.js"',title:'"/server/index.js"'},"// Maintain active connections and users\nconst clients = {};\nconst users = {};\nlet editorContent = null;\nlet userActivity = [];\n\n// Handle new client connections\nwsServer.on('connection', function handleNewConnection(connection) {\n  const userId = uuidv4();\n  console.log('Received a new connection');\n\n  clients[userId] = connection;\n  console.log(`${userId} connected.`);\n\n  connection.on('message', (message) => processReceivedMessage(message, userId));\n  connection.on('close', () => handleClientDisconnection(userId));\n});\n\n")),(0,a.kt)("p",null,"New client connections are handled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleNewConnection")," function as events. When a new client creates a WebSocket connection with the server, it is activated."),(0,a.kt)("p",null,"\xb7    The uuidv4 library is used to create a distinct ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," whenever a new connection is made."),(0,a.kt)("p",null,"\xb7    The ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," serves as the key for storing the connection in the ",(0,a.kt)("em",{parentName:"p"},"clients")," object."),(0,a.kt)("p",null,"\xb7    A new connection is signaled by printing a message in the log."),(0,a.kt)("p",null,"Incoming messages from clients are handled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"processReceivedMessage")," function. The response message is broadcast to all connected clients once the message has been parsed, the message type has been established, and actions have been taken based on the message type (such as user activity of joining or editing content)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/server/index.js"',title:'"/server/index.js"'},"// Handle incoming messages from clients\nfunction processReceivedMessage(message, userId) {\n  const dataFromClient = JSON.parse(message.toString());\n  const json = { type: dataFromClient.type };\n\n  if (dataFromClient.type === eventTypes.USER_EVENT) {\n    users[userId] = dataFromClient;\n    userActivity.push(`${dataFromClient.username} joined to collaborate`);\n    json.data = { users, userActivity };\n  } else if (dataFromClient.type === eventTypes.CONTENT_CHANGE) {\n    editorContent = dataFromClient.content;\n    json.data = { editorContent, userActivity };\n  }\n\n  sendMessageToAllClients(json);\n}\n")),(0,a.kt)("p",null,"As you can see, the new connection is successfully received."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-16-react-web-socket/enter-name.png",alt:"react-websocket-nodejs"})),(0,a.kt)("p",null,"When User enter their name and click on Join Document the message is broadcasted to all connected clients that user have joined to collaborate. Please see the below screenshots of application:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-16-react-web-socket/enter-name-2.png",alt:"react-websocket-nodejs"})),(0,a.kt)("h3",{id:"establishing-the-handshake-at-the-client-level"},"Establishing the Handshake at the Client Level"),(0,a.kt)("p",null,"In the code below, the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-use-websocket")," package is used on the client side to start a WebSocket connection. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useWebSocket")," hook provided by this package allows React functional components to control WebSocket connections. This is the client's way of reaching out for a handshake with the server. From the client's perspective, it's the initial stage of creating a WebSocket connection. It is very easy to understand and use WebSockets when we have a good understanding of the various event types: ",(0,a.kt)("inlineCode",{parentName:"p"},"onopen"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onclose"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"onmessage"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/src/App.js"',title:'"client/src/App.js"'},"import React, { useEffect, useState } from 'react';\nimport { Navbar, NavbarBrand } from 'react-bootstrap';\nimport useWebSocket, { ReadyState } from 'react-use-websocket';\nimport { Tooltip as ReactTooltip } from 'react-tooltip';\nimport { DefaultEditor } from 'react-simple-wysiwyg';\nimport Avatar from 'react-avatar';\n\nimport './App.css';\n\nconst WS_URL = 'ws://127.0.0.1:8000';\n\nfunction isUserEvent(message) {\n  const parsedMessage = JSON.parse(message.data);\n  return parsedMessage.type === 'userevent';\n}\n\nfunction isDocumentEvent(message) {\n  const parsedMessage = JSON.parse(message.data);\n  return parsedMessage.type === 'contentchange';\n}\n\nfunction App() {\n  const [username, setUsername] = useState('');\n  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {\n    onOpen: () => {\n      console.log('WebSocket connection established.');\n    },\n    share: true,\n    filter: () => false,\n    retryOnError: true,\n    shouldReconnect: () => true\n  });\n\n // Rest of the component code\n}\n")),(0,a.kt)("p",null,"Now, when user joins, the web socket connection is established at client level. The above screenshot shows the \u201cWebSocket connection established\u201d in console logs when the connection is opened for client."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-16-react-web-socket/handshake.png",alt:"react-websocket-nodejs"})),(0,a.kt)("hr",null),(0,a.kt)(p,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"real-time-message-transmission"},"Real-time Message Transmission"),(0,a.kt)("p",null,"The WebSocket connection can transfer messages as it receives them once the client and server have established a connection through the WebSocket handshake event. Users can collaborate and edit text in real-time in the sample React app. The application also keeps track of user actions and content modifications, transmitting these events to every other connected client. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/src/App.js"',title:'"client/src/App.js"'},'function App() {\n  const [username, setUsername] = useState(\'\');\n  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {\n    onOpen: () => {\n      console.log(\'WebSocket connection established.\');\n    },\n    share: true,\n    filter: () => false,\n    retryOnError: true,\n    shouldReconnect: () => true\n  });\n\n  useEffect(() => {\n    if (username && readyState === ReadyState.OPEN) {\n      sendJsonMessage({\n        username,\n        type: \'userevent\'\n      });\n    }\n  }, [username, sendJsonMessage, readyState]);\n\n  return (\n    <>\n      <Navbar className="navbar" color="light" light>\n        <NavbarBrand href="/">Real-time Collaborative Text Editor</NavbarBrand>\n      </Navbar>\n      <div className="container-fluid">\n        {username ? <EditorSection /> : <LoginSection onLogin={setUsername} />}\n      </div>\n    </>\n  );\n}\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/src/App.js"',title:'"client/src/App.js"'},'function EditorSection() {\n  return (\n    <div className="main-content">\n      <div className="document-holder">\n        <div className="current-users">\n          <Users />\n        </div>\n        <Document />\n      </div>\n      <div className="history-holder">\n        <History />\n      </div>\n    </div>\n  );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="client/src/App.js"',title:'"client/src/App.js"'},"function Document() {\n  const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {\n    share: true,\n    filter: isDocumentEvent\n  });\n  let html = lastJsonMessage?.data.editorContent || '';\n\n  function handleHtmlChange(e) {\n    sendJsonMessage({\n      type: 'contentchange',\n      content: e.target.value\n    });\n  }\n\n  return <DefaultEditor value={html} onChange={handleHtmlChange} />;\n}\n")),(0,a.kt)("p",null,"The below screenshot shows that when the client connection is established then users can collaborate and edit text in real-time, each action will be transmited to every connection client."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-16-react-web-socket/real-time-transmitting.png",alt:"react-websocket-nodejs"})),(0,a.kt)("h3",{id:"handling-disconnections"},"Handling Disconnections"),(0,a.kt)("p",null,"Handling disconnections is just as crucial to any real-time application as managing connections. The WebSocket initiates a ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," event when a user disconnects. According to the code below, when the user closes their browser or refreshes the page, the server is capable of notifying the remaining users about the disconnection of that user. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/server/index.js"',title:'"/server/index.js"'},"\n// Handle disconnection of a client\nfunction handleClientDisconnection(userId) {\n  console.log(`${userId} disconnected.`);\n  const json = { type: eventTypes.USER_EVENT };\n  const username = users[userId]?.username || userId;\n  userActivity.push(`${username} left the editor`);\n  json.data = { users, userActivity };\n  delete clients[userId];\n  delete users[userId];\n  sendMessageToAllClients(json);\n}\n")),(0,a.kt)("p",null,"When user closes the browser window or refreshes the page, application will disconnect client and notify every connected user by broadcasting the message that that user left the editor."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-16-react-web-socket/handling-disconnections.png",alt:"react-websocket-nodejs"})),(0,a.kt)("p",null,"##\xa0Conclusion\nFull-duplex bidirectional real-time communication is an important aspect of modern web development. WebSockets provides the relevant and most efficient means to achieve real-time communication. In this article, we explored the concept of WebSockets, its benefits, why it is superior to other traditional HTTP methods, and why developers should adopt WebSockets. Finally, we illustrated how to integrate WebSockets into React and Node.js applications."))}g.isMDXComponent=!0}}]);