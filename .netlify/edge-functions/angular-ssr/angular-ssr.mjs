
  import "./polyfill.mjs";
  
    import { netlifyAppEngineHandler } from "../../../dist/DeveloperProfile/server/server.mjs";
    import "./fixup-event.mjs";

    export default netlifyAppEngineHandler;
    
  export const config = {
    path: "/*",
    excludedPath: ["/.netlify/*","/favicon.ico","/index.csr.html","/index.html","/main-LZ5EBURN.js","/styles-5INURTSO.css","/"],
    generator: "@netlify/angular-runtime@3.0.1",
    name: "Angular SSR",
    cache: "manual",
  };
  