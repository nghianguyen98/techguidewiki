"use strict";(self.webpackChunktechguide_wiki=self.webpackChunktechguide_wiki||[]).push([[635],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,l(l({ref:e},u),{},{components:n})):a.createElement(g,l({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1669:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Proxmox Cluster Installation",sidebar_position:0,slug:"/b403f398-ec56-4bc5-9082-55a086463670"},l=void 0,o={unversionedId:"Network---System/Virtualization/Proxmox/Proxmox-Cluster-Installation",id:"Network---System/Virtualization/Proxmox/Proxmox-Cluster-Installation",title:"Proxmox Cluster Installation",description:"Author: Brian",source:"@site/docs/Network---System/Virtualization/Proxmox/Proxmox-Cluster-Installation.md",sourceDirName:"Network---System/Virtualization/Proxmox",slug:"/b403f398-ec56-4bc5-9082-55a086463670",permalink:"/docs/b403f398-ec56-4bc5-9082-55a086463670",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network---System/Virtualization/Proxmox/Proxmox-Cluster-Installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Proxmox Cluster Installation",sidebar_position:0,slug:"/b403f398-ec56-4bc5-9082-55a086463670"},sidebar:"tutorialSidebar",previous:{title:"Comming soon",permalink:"/docs/8b2cfc51-d406-4152-b590-5fd3afd5a26b"},next:{title:"High Availability Mode Replication",permalink:"/docs/05ecd4c6-0093-4898-8d96-aa8805eac45c"}},s={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...i}=t;return(0,r.kt)(p,(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Author: Brian"),(0,r.kt)("h1",{id:"70b6e121a05e41aabd99c25a0bb5a851"},"1. Setup Proxmox  Virtual Environment(PVE)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Boot into ISO Proxmox-7.4 and Install")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7182).Z,width:"3042",height:"2304"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS DISK: ZFS RAID-1 (2 X SSD) - For Proxmox OS"),(0,r.kt)("li",{parentName:"ul"},"STORAGE DISK: ZFS RAID-1 (2 X HDD) - For VM Server")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6153).Z,width:"3172",height:"2278"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set time zone")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9857).Z,width:"3022",height:"2226"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set password")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7103).Z,width:"3010",height:"2232"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup Network")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4486).Z,width:"2860",height:"2128"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Summary information")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9023).Z,width:"3354",height:"2262"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installation in progress")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5427).Z,width:"2974",height:"1780"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The server will be rebooted")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8960).Z,width:"3134",height:"2208"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8010).Z,width:"2584",height:"968"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the installation is finished, log in to PVE via WEB-INTERFACE ",(0,r.kt)("a",{parentName:"li",href:"https://ip-promox:8006/"},(0,r.kt)("strong",{parentName:"a"},"https://ip-promox:8006"))," ",(0,r.kt)("strong",{parentName:"li"},"to Proxmox Standalone Mode"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7125).Z,width:"3400",height:"2280"})),(0,r.kt)("p",null,"From now, Setting-up everything can be done via Web-Interface, do the same for another server."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2305).Z,width:"3384",height:"1836"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update, and upgrade  software")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6168).Z,width:"3398",height:"1598"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PVE dashboard")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6853).Z,width:"3940",height:"2314"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"039dd5fecc2644baa59490d15766effc"},"2. Configure A Cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Cluster on the first PVE-01")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7281).Z,width:"4226",height:"1650"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy Cluster information to join another server")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9566).Z,width:"4248",height:"1496"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From PVE-02")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(420).Z,width:"4228",height:"1486"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do the same for PVE-03")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(705).Z,width:"4228",height:"1426"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After joining Cluster, PVE-02, and PVE-03 temporarily lost connection because they were restarting services."),(0,r.kt)("li",{parentName:"ul"},"Now we can manage them via a single Dashboard")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(330).Z,width:"4242",height:"1596"})),(0,r.kt)("hr",null))}d.isMDXComponent=!0},7281:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1099152704-1da2b18960099856de827fa4480a2a5b.png"},9023:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1216391474-751a9397310c9eb8935d36e0aa8b2864.png"},7103:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1343754322-d9cfcb717507092ddec7d4fc144f5e74.png"},420:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1612180668-0887a589955bc9f42f7f898e6e958ab1.png"},5427:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1692349064-cca91bcbebfe03e17b92b7c76f33d98b.png"},705:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/183490961-a91cb692f770144adc949ed21ed0cfdc.png"},9857:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1948570564-c87103672d408242c9a5dfeaba1af0bc.png"},6168:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1964100873-bcc8a8753c4cd274609bde2c7bc57a05.png"},7182:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/2004550512-8540ad3f34571cf10dfe8f6bfec54101.png"},8010:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/2029606768-973bf7ca67b8eb2d0e8361ca8629ff11.png"},7125:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/2101205858-94845dc0051a014a0a3bf9ea1387d4b9.png"},2305:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/2121485469-89c440dccd7aa060e8bc07d5a2be089c.png"},4486:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/335294247-d5bb455cba965b9c7e2faa8f0a7c2e0b.png"},330:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/515318480-0c9442941745c5ff03f7b3bc48994748.png"},8960:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/549276004-646047a5da9e338a13153bd390c41311.png"},9566:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/601175512-aebc1547147c0593a643228fb9d03725.png"},6853:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/749967221-99c3e51273b0697f431c99364b72f5f3.png"},6153:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/888623884-9bb17238c4f22687ab18f1f41da57ed7.png"}}]);