"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68255],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5597:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var a=n(3905);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const l={title:"A Guide to useContext and React Context API",description:"Share data across components with React Context in TypeScript and\xa0Next.js",slug:"usecontext-and-react-context",authors:"chibuzor_otuokwu",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-23-react-context/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/usecontext-and-react-context",source:"@site/blog/2022-10-23-react-context.md",title:"A Guide to useContext and React Context API",description:"Share data across components with React Context in TypeScript and\xa0Next.js",date:"2022-10-23T00:00:00.000Z",formattedDate:"October 23, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:12.25,hasTruncateMarker:!1,authors:[{name:"Chibuzor Otuokwu",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"chibuzor_otuokwu"}],frontMatter:{title:"A Guide to useContext and React Context API",description:"Share data across components with React Context in TypeScript and\xa0Next.js",slug:"usecontext-and-react-context",authors:"chibuzor_otuokwu",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-23-react-context/social.png",hide_table_of_contents:!1},prevItem:{title:"How to Use JavaScript Array some",permalink:"/blog/javascript-some-method"},nextItem:{title:"How to Use Tailwind CSS Grid",permalink:"/blog/tailwind-grid"},relatedPosts:[{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.22,date:"2023-02-23T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",description:"This web application will  us to create issue and tasks for your team members. You will also be able to choose the priority of these tasks, their tags, and which person to assign them to.",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:17.175,date:"2021-11-12T00:00:00.000Z"},{title:"An Intro to server components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",permalink:"/blog/react-server-components",formattedDate:"July 9, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.48,date:"2023-07-09T00:00:00.000Z"}],authorPosts:[]},p={authorsImageUrls:[void 0]},u=[{value:"What is a React Context API?",id:"what-is-a-react-context-api",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Building the Product\xa0Listings",id:"building-the-productlistings",level:2},{value:"Why and When Do we need the context\xa0API?",id:"why-and-when-do-we-need-the-contextapi",level:2},{value:"Creating a\xa0Context",id:"creating-acontext",level:2},{value:"Consuming the\xa0Context",id:"consuming-thecontext",level:2},{value:"Share Data across components",id:"share-data-across-components",level:2},{value:"Conclusion",id:"conclusion",level:2}],d=(m="PromotionBanner",function(t){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)});var m;const h={toc:u};function f(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)("wrapper",r(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},h,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When building React applications, we typically share data across several components from parent to child via props. Passing data from parent to child components would be easy if just a few layers of components were involved."),(0,a.kt)("p",null,"As more components are introduced, things start to get complex, and keeping track of state and props can quickly become cumbersome."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"React Context API")," provides an interface that enables data sharing across components without using the props drilling approach."),(0,a.kt)("p",null,"In this tutorial, we are going to build a mini e-commerce store and walk through examples of how we can use the context API for sharing data across multiple components."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-a-context"},"What is a Context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#project-setup"},"Project Setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#building-the-product-listings"},"Building the Product\xa0Listings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-and-when-do-we-need-the-context-api?"},"Why and When Do we need the context\xa0API?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-a-context"},"Creating a\xa0Context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#consuming-the-context"},"Consuming the\xa0Context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#share-data-across-components"},"Share Data across components"))),(0,a.kt)("h2",{id:"what-is-a-react-context-api"},"What is a React Context API?"),(0,a.kt)("p",null,"The React Context API allows us to store and retrieve data across multiple components without passing data from parent to child components."),(0,a.kt)("p",null,"The React context works basically in a two-way approach. You wrap all components that share similar data within the context provider as a parent component and access the data in the context via a ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook."),(0,a.kt)("p",null,"To use the context API, you need to create a context by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"createContext")," function with an optional default value when using JavaScript."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const defaultValue = { title: "Bag" };\nconst CartContext = React.createContext(defaultValue);\n')),(0,a.kt)("p",null,"The above creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"CartContext"),", we can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook to consume the data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"CartContext"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const data = React.useContext(CartContext);\n  return (\n    <CartContext.Provider value={defaultValue}>\n      <AnotherComponent>\n        <div>{data.title}</div>\n      </AnotherComponent>\n    </CartContext.Provider>\n  );\n}\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"project-setup"},"Project Setup"),(0,a.kt)("p",null,"To get started with the project, run the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx create-next-app react-context-tutorial --typescript \n")),(0,a.kt)("p",null,"This will bootstrap a Next.js app with TypeScript. I like to use absolute paths when building next.js applications."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open the tsconfig.json file and add the highlighted line."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'"baseUrl":"src"\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new folder named ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," in the root directory of the app."),(0,a.kt)("li",{parentName:"ul"},"Move the pages and styles folder into the ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," folder.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the path of the style in ",(0,a.kt)("inlineCode",{parentName:"li"},"_app.tsx")," to use absolute path.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/_app.tsx"',title:'"src/_app.tsx"'},"  import 'styles/globals.css'\n  import type { AppProps } from 'next/app'\n\n  function MyApp({ Component, pageProps }: AppProps) {\n    return <Component {...pageProps} />\n  }\n\n  export default MyApp\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run dev")," to start the app."),(0,a.kt)("li",{parentName:"ul"},"Open your browser on port 3000 (",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),")."),(0,a.kt)("li",{parentName:"ul"},"You should see the default welcome to next.js message!")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"building-the-productlistings"},"Building the Product\xa0Listings"),(0,a.kt)("p",null,"This is where things start to get interesting. We are going to build the UIs for the product listing and share data across several components in this section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Replace the styles in global.css with this ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/pseudoeazy/62e3259eaba1b253ced7c02b86caec40"},"CSS"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copy and paste ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," data below inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"products.ts")," file."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/constants/products.ts"',title:'"src/constants/products.ts"'},'const products = [\n  {\n    id: 1,\n    title: "Grape",\n  },\n  {\n    id: 2,\n    title: "ice cream",\n  },\n  {\n    id: 3,\n    title: "Tangerine",\n  },\n];\n\nexport default products;\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create the ",(0,a.kt)("inlineCode",{parentName:"li"},"Product")," data type structure for the product of the app inside a ",(0,a.kt)("inlineCode",{parentName:"li"},"product.ts")," file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"types")," directory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/types/product.ts"',title:'"src/types/product.ts"'},"export default interface Product {\n  id: number;\n  title: string;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"li"},"index.tsx")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pages")," directory with the following code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},'import type { NextPage } from "next";\n\nconst Home: NextPage = () => {\n  return (\n    <div className="container">\n      <main className="main-content">\n        <h1 style={{ textAlign: "center" }}>Hello World</h1>\n      </main>\n    </div>\n  );\n};\n\nexport default Home;\n')),(0,a.kt)("p",null,'If we reload our browser, we should see "Hello World" printed on the screen.'),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create the following files (",(0,a.kt)("em",{parentName:"li"},"favorites.tsx"),", ",(0,a.kt)("em",{parentName:"li"},"product-list.tsx"),", ",(0,a.kt)("em",{parentName:"li"},"product-item.tsx")," and ",(0,a.kt)("em",{parentName:"li"},"product-details.tsx"),") in the ",(0,a.kt)("inlineCode",{parentName:"li"},"components")," directory.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show the favorites.tsx"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/favorites.tsx"',title:'"src/components/favorites.tsx"'},'import Product from "types/product";\n\ninterface Props {\n  products: Product[];\n  favorites: number[];\n}\n\nconst Favorites: React.FC<Props> = ({ products, favorites }) => {\n  const myFavorites: Product[] = [];\n\n  favorites.forEach((fav) => {\n    const favorite = products.find((product) => product.id === fav);\n    if (favorite) {\n      myFavorites.push(favorite);\n    }\n  });\n\n  return (\n    <section className="favorites">\n      <h2>My Favorite products</h2>\n      {myFavorites.length ? (\n        <ul>\n          {myFavorites.map((favorite) => (\n            <li key={favorite.id}>{favorite.title}</li>\n          ))}\n        </ul>\n      ) : (\n        <div>\ud83d\ude02No favorite product!</div>\n      )}\n    </section>\n  );\n};\nexport default Favorites;\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show the product-list.tsx code "),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/product-list.tsx"',title:'"src/components/product-list.tsx"'},'import React from "react";\nimport ProductItem from "components/product-item";\nimport Product from "types/product";\n\ninterface Props {\n  favorites: number[];\n  products: Product[];\n  handleFavorite: (productId: number) => void;\n}\n\nconst ProductList: React.FC<Props> = ({\n  favorites,\n  products,\n  handleFavorite,\n}) => {\n  return (\n    <section className="product-container">\n      {products.map((product) => (\n        <ProductItem\n          key={product.id}\n          product={product}\n          handleFavorite={handleFavorite}\n          favorites={favorites}\n        />\n      ))}\n    </section>\n  );\n};\nexport default ProductList;\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show the product-item.tsx  "),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/product-item.tsx"',title:'"src/components/product-item.tsx"'},'import React from "react";\nimport ProductDetails from "components/product-details";\nimport Product from "types/product";\n\ninterface Props {\n  product: Product;\n  favorites: number[];\n  handleFavorite: (productId: number) => void;\n}\n\nconst ProductItem: React.FC<Props> = ({\n  product,\n  handleFavorite,\n  favorites,\n}) => {\n\n  return (\n    <div className="product-card">\n      <ProductDetails\n        product={product}\n        handleFavorite={handleFavorite}\n        favorites={favorites}\n      />\n    </div>\n  );\n};\nexport default ProductItem;\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show the product-details.tsx "),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/product-details.tsx"',title:'"src/components/product-details.tsx"'},'import React from "react";\nimport Product from "types/product";\n\ninterface Props {\n  product: Product;\n  favorites: number[];\n  handleFavorite: (productId: number) => void;\n}\n\nconst ProductDetails: React.FC<Props> = ({\n  product,\n  handleFavorite,\n  favorites,\n}) => {\n  const isFavorite = favorites.includes(product.id);\n  return (\n    <div className="product-details-container">\n      <div className="product-details">\n        <div className="product-image">{product.title}</div>\n      </div>\n      <div className="add-to-cart">\n        <button\n          type="button"\n          className="button"\n          onClick={() => handleFavorite(product.id)}\n        >\n          <span>{isFavorite ? "\u2764\ufe0f" : "\u2764\ufe0e"}</span>\n        </button>\n      </div>\n    </div>\n  );\n};\nexport default ProductDetails;\n\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the index.tsx file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pages")," directory with the following code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},'import { useState } from "react";\nimport type { NextPage } from "next";\nimport ProductList from "components/product-list";\nimport products from "constants/products";\nimport Favorites from "components/favorites";\n\nconst Home: NextPage = () => {\n  const [favorites, setFavorites] = useState<number[]>([]);\n\n  const handleFavorite = (productId: number) => {\n    if (favorites.includes(productId)) {\n      const newFavorites = favorites.filter((fav) => fav !== productId);\n      setFavorites(newFavorites);\n    } else {\n      setFavorites([...favorites, productId]);\n    }\n  };\n  return (\n    <div className="container">\n      <main className="main-content">\n        <Favorites products={products} favorites={favorites} />\n        <ProductList\n          products={products}\n          favorites={favorites}\n          handleFavorite={handleFavorite}\n        />\n      </main>\n    </div>\n  );\n};\n\nexport default Home;\n\n')),(0,a.kt)("p",null,"If you click the favorite icon for each product, you should see it listed under the list of my favorite products."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-23-react-context/favorite-product-list.png",alt:"React context API favouriteProduct"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"why-and-when-do-we-need-the-contextapi"},"Why and When Do we need the context\xa0API?"),(0,a.kt)("p",null,"If we look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," component, we see it has  ",(0,a.kt)("inlineCode",{parentName:"p"},"favorites")," state that keeps track of the user's favorite products. This data is shared across several components."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductDetails")," component calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleFavorite")," function to update the state in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," component and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Favorites")," component reacts to each update of the ",(0,a.kt)("inlineCode",{parentName:"p"},"favorites")," data."),(0,a.kt)("p",null,"To add a product as a favorite, we need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"favorites")," state and ",(0,a.kt)("inlineCode",{parentName:"p"},"handleFavorite")," function as prop down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductDetails")," component."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-23-react-context/prop-drill-favorite.png",alt:"React context API propDrillingFav"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductDetails")," component becomes very complex and requires ten properties, we need to pass all ten properties as props to the said component. This can become quite complicated and that is basically how ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," works. We pass data through props from parent to child component."),(0,a.kt)("p",null,"How can we manage data across components that are far apart in the component tree? This prop drilling method of sharing data between components can become very complicated and inefficient as more properties are introduced and the component tree continues to grow."),(0,a.kt)("p",null,"The React Context API allows share data across multiple components without using the prop drilling approach."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"creating-acontext"},"Creating a\xa0Context"),(0,a.kt)("p",null,"Creating a context is as easy as calling ",(0,a.kt)("inlineCode",{parentName:"p"},"createContext")," function with a default value. If you don't know what type of data you want to store in the context, you can save an empty object as ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," data type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import { createContext } from "react";\nconst ExampleContext = createContext({} as any);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create a folder named ",(0,a.kt)("inlineCode",{parentName:"li"},"context")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," directory."),(0,a.kt)("li",{parentName:"ul"},"create a file a named ",(0,a.kt)("inlineCode",{parentName:"li"},"example.context.tsx")," inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"context")," folder and copy the code below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/context/example.context.tsx"',title:'"src/context/example.context.tsx"'},'import React, { createContext, useContext } from "react";\n\nconst myData = { username: "Israel" };\nexport const ExampleContext = createContext(myData);\n\ninterface Props {\n  children: React.ReactNode;\n}\n\nexport const ExampleProvider: React.FC<Props> = ({ children }) => {\n  return (\n    <ExampleContext.Provider value={{ username: "Chibuzor" }}>\n      {children}\n    </ExampleContext.Provider>\n  );\n};\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We created an ",(0,a.kt)("inlineCode",{parentName:"li"},"ExampleContext")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"myData")," as it default value."),(0,a.kt)("li",{parentName:"ul"},"We created ",(0,a.kt)("inlineCode",{parentName:"li"},"ExampleProvider")," component, this will act as a parent component that we can wrap multiple components that will consume data from the context."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ExampleProvider"),' returns "',(0,a.kt)("inlineCode",{parentName:"li"},"ExampleContext.Provider"),'" component with a value passed as prop to the "',(0,a.kt)("inlineCode",{parentName:"li"},"ExampleContext.Provider"),'"\xa0.'),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ExampleContext.Provider"),", makes the value passed as prop available to all child components."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ExampleContext.Provider"),' must have only a single prop called "value" and that value can have only one value. Here we pass an object that has a similar data structure with the ',(0,a.kt)("inlineCode",{parentName:"li"},"myData")," default value of the context when it was created.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"consuming-thecontext"},"Consuming the\xa0Context"),(0,a.kt)("p",null,"We are going to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook to consume the data from our ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleContext"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"example.context.tsx")," ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/context/example.context.tsx"',title:'"src/context/example.context.tsx"'},'import React, { createContext, useContext } from "react";\n\nconst myData = { username: "Israel" };\nexport const ExampleContext = createContext(myData);\n\ninterface Props {\n  children: React.ReactNode;\n}\n\nexport const ExampleProvider: React.FC<Props> = ({ children }) => {\n  return (\n    <ExampleContext.Provider value={{ username: "Chibuzor" }}>\n      {children}\n    </ExampleContext.Provider>\n  );\n};\n\nexport const Greet = () => {\n  const data = useContext(ExampleContext);\n  return <h1>Hello, {data.username}</h1>;\n};\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"index.tsx")," in the page directory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},'...\nimport { ExampleProvider, Greet } from "context/example.context";\n\nconst Home: NextPage = () => {\n ...\n  return (\n    <div className="container">\n      <main className="main-content">\n        <ExampleProvider>\n          <Greet />\n        </ExampleProvider>\n        <Favorites products={products} favorites={favorites} />\n        <ProductList\n          products={products}\n          favorites={favorites}\n          handleFavorite={handleFavorite}\n        />\n      </main>\n    </div>\n  );\n};\n\nexport default Home;\n\n')),(0,a.kt)("p",null,'Reloading the browser should print "Hello Chibuzor" on the screen.'),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"example.context.tsx"),", we called the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook and passed the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleContext")," whose data we want to consume. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook returns the data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleContext")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Greet")," component renders the data without receiving the data via props from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleProvider")," component."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)(d,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"share-data-across-components"},"Share Data across components"),(0,a.kt)("p",null,"In this section, we are going to refactor our code to use the React context."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create a ",(0,a.kt)("inlineCode",{parentName:"li"},"product.context.tsx")," file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"context")," folder and copy the code below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/context/product.context.tsx"',title:'"src/context/product.context.tsx"'},'import React, { createContext, useContext, useReducer } from "react";\nimport products from "constants/products";\nimport Product from "types/product";\n\ntype ProductData = {\n  products: Product[];\n  favorites: number[];\n};\n\ntype ProductAction =\n  | {\n      type: "PRODUCTS";\n      products: Product[];\n    }\n  | {\n      type: "FAVORITES";\n      favorites: number;\n    };\n\nconst productReducer = (\n  state: ProductData,\n  action: ProductAction\n): ProductData => {\n\n  switch (action.type) {\n    case "PRODUCTS":\n      return { ...state, products: action.products };\ncase "FAVORITES":\n\n      let favorites = state.favorites;\n\nif (state.favorites.includes(action.favorites)) {\n        favorites = favorites.filter((fav) => fav !== action.favorites);\n      } else {\n        favorites = [...state.favorites, action.favorites];\n      }\n\nreturn { ...state, favorites };\ndefault:\n      return state;\n  }\n};\n\nconst defaultValues: ProductData = {\n  products,\n  favorites: [],\n};\n\nconst myProduct = {\n  product: defaultValues,\n  setProduct: (action: ProductAction): void => {},\n};\n\nconst ProductContext = createContext<{\n  product: ProductData;\n  setProduct: React.Dispatch<ProductAction>;\n}>(myProduct); //initialize context with default value\n\ninterface Props {\n  children: React.ReactNode;\n}\n\nexport const ProductProvider: React.FC<Props> = ({ children }) => {\n  const [product, setProduct] = useReducer(productReducer, defaultValues);\n\nreturn (\n    <ProductContext.Provider value={{ product, setProduct }}>\n      {children}\n    </ProductContext.Provider>\n  );\n};\n\nexport const useProduct = () => useContext(ProductContext);\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We moved the logic for handling favorites inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"productReducer"),"."),(0,a.kt)("li",{parentName:"ul"},"We initialized the ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductContext")," with a default value."),(0,a.kt)("li",{parentName:"ul"},"We export a ",(0,a.kt)("inlineCode",{parentName:"li"},"useProduct")," function that exports the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductContext"),". If we don't export the ",(0,a.kt)("inlineCode",{parentName:"li"},"useProduct")," function, we would have to call the ",(0,a.kt)("inlineCode",{parentName:"li"},"useContext")," and pass ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductContext")," as its argument each time we want to consume the ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductContext")," data in any component."),(0,a.kt)("li",{parentName:"ul"},"We need to update our components (",(0,a.kt)("em",{parentName:"li"},"index.tsx"),", ",(0,a.kt)("em",{parentName:"li"},"favorites.tsx"),", ",(0,a.kt)("em",{parentName:"li"},"product-list.tsx"),", ",(0,a.kt)("em",{parentName:"li"},"product-item.tsx")," and ",(0,a.kt)("em",{parentName:"li"},"product-details.tsx"),") to consume the data in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductContext"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},'import type { NextPage } from "next";\nimport ProductList from "components/product-list";\nimport Favorites from "components/favorites";\nimport { ProductProvider } from "context/product.context";\n\nconst Home: NextPage = () => {\n  return (\n    <div className="container">\n      <main className="main-content">\n        <ProductProvider>\n          <Favorites />\n          <ProductList />\n        </ProductProvider>\n      </main>\n    </div>\n  );\n};\n\nexport default Home;\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show the favorites.tsx"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/favorites.tsx"',title:'"src/components/favorites.tsx"'},'import Product from "types/product";\nimport { useProduct } from "context/product.context";\n\nconst Favorites: React.FC = () => {\n  const { product } = useProduct();\n  const myFavorites: Product[] = [];\n\n  product.favorites.forEach((fav) => {\n    const favorite = product.products.find((product) => product.id === fav);\n    if (favorite) {\n      myFavorites.push(favorite);\n    }\n  });\n \n  return (\n    <section className="favorites">\n      <h2>My Favorite products</h2>\n      {myFavorites.length ? (\n        <ul>\n          {myFavorites.map((favorite) => (\n            <li key={favorite.id}>{favorite.title}</li>\n          ))}\n        </ul>\n      ) : (\n        <div>\ud83d\ude02No favorite product!</div>\n      )}\n    </section>\n  );\n};\n\nexport default Favorites;\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show the product-list.tsx"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/product-list.tsx"',title:'"src/components/product-list.tsx"'},'import React from "react";\nimport ProductItem from "components/product-item";\nimport { useProduct } from "context/product.context";\n\nconst ProductList: React.FC = () => {\n  const { product } = useProduct();\n  return (\n    <section className="product-container">\n      {product.products.map((product) => (\n        <ProductItem key={product.id} product={product} />\n      ))}\n    </section>\n  );\n};\n\nexport default ProductList;\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show the product-item.tsx"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/product-item.tsx"',title:'"src/components/product-item.tsx"'},'import React from "react";\nimport ProductDetails from "components/product-details";\nimport Product from "types/product";\n\ninterface Props {\n  product: Product;\n}\nconst ProductItem: React.FC<Props> = ({ product }) => {\n  return (\n    <div className="product-card">\n      <ProductDetails product={product} />\n    </div>\n  );\n};\n\nexport default ProductItem;\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show the product-details.tsx"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/product-details.tsx"',title:'"src/components/product-details.tsx"'},'import React from "react";\nimport Product from "types/product";\nimport { useProduct } from "context/product.context";\n\ninterface Props {\n  product: Product;\n}\n\nconst ProductDetails: React.FC<Props> = ({ product }) => {\n  const { product: productData, setProduct } = useProduct();\n\n  const handleFavorite = (productId: number) => {\n    setProduct({ type: "FAVORITES", favorites: productId });\n  };\n\n  const isFavorite = productData.favorites.includes(product.id);\n\n  return (\n    <div className="product-details-container">\n      <div className="product-details">\n        <div className="product-image">{product.title}</div>\n      </div>\n      <div className="add-to-cart">\n        <button\n          type="button"\n          className="button"\n          onClick={() => handleFavorite(product.id)}\n        >\n          <span>{isFavorite ? "\u2764\ufe0f" : "\u2764\ufe0e"}</span>\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default ProductDetails;\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If we reload our browser, our app should work as expected.")),(0,a.kt)("p",null,"Our web application works as before, only this time the data is shared via the React Context API. The React context has some performance benefits when used properly."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Okay, I promise, that is all there is to getting started with the React Context API."),(0,a.kt)("p",null,"In summary, to use a context."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create the context by calling ",(0,a.kt)("inlineCode",{parentName:"li"},"createContext")," function."),(0,a.kt)("li",{parentName:"ul"},"Make the Context.Provider the Parent component."),(0,a.kt)("li",{parentName:"ul"},"Call the ",(0,a.kt)("inlineCode",{parentName:"li"},"useContext")," hook and pass the context as an argument.")),(0,a.kt)("p",null,"Here is the link to the github repo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://github.com/pseudoeazy/react-context-tutorial\n")),(0,a.kt)("p",null,"Live URL for the complete app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://react-context-tutorial-sf2t.vercel.app/\n")))}f.isMDXComponent=!0}}]);