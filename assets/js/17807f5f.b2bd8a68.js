"use strict";(self.webpackChunktechguide_wiki=self.webpackChunktechguide_wiki||[]).push([[935],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=d(a),g=i,f=u["".concat(c,".").concat(g)]||u[g]||p[g]||s;return a?n.createElement(f,r(r({ref:t},o),{},{components:a})):n.createElement(f,r({ref:t},o))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const s={title:"test",sidebar_position:2,slug:"/5ffd4be8-8fbe-4d78-bcc8-ac908829f9d4"},r=void 0,l={unversionedId:"Network---System/Virtualization/Proxmox/test",id:"Network---System/Virtualization/Proxmox/test",title:"test",description:"vxhvghxkgkfs",source:"@site/docs/Network---System/Virtualization/Proxmox/test.md",sourceDirName:"Network---System/Virtualization/Proxmox",slug:"/5ffd4be8-8fbe-4d78-bcc8-ac908829f9d4",permalink:"/docs/5ffd4be8-8fbe-4d78-bcc8-ac908829f9d4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network---System/Virtualization/Proxmox/test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"test",sidebar_position:2,slug:"/5ffd4be8-8fbe-4d78-bcc8-ac908829f9d4"},sidebar:"tutorialSidebar",previous:{title:"High Availability Mode Replication",permalink:"/docs/05ecd4c6-0093-4898-8d96-aa8805eac45c"},next:{title:"Comming soon",permalink:"/docs/b7aca39c-a24e-43ab-b045-33b5d9900499"}},c={},d=[{value:"Setup New Virtual Machine",id:"d4186a2a82ef4a08bb4e90e3d18458f3",level:2},{value:"2.2 Configuration for VM Replication",id:"8568707dc91f4b2c8d6d3ec82ea2adab",level:2},{value:"2.3 Set HA mode for VM",id:"f1ef1c9c5d9a4dca9d285e5733d23a59",level:2},{value:"2.4 Test HA Mode",id:"e36831e505184f5f90222d1abd0214bc",level:2}],o={toc:d},u="wrapper";function p(e){let{components:t,...s}=e;return(0,i.kt)(u,(0,n.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"vxhvghxkgkfs"),(0,i.kt)("h1",{id:"82833088fc0649789adcfa25d733da82"},"Setup Datastore for Virtual Machine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use ZFS-RAIDZ (software-defined storage)"),(0,i.kt)("li",{parentName:"ul"},"There are 2 data disks on every PVE server")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7153).Z,width:"4242",height:"1098"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create ZFS on PVE-01 and tick")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7598).Z,width:"4240",height:"1536"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create ZFS on PVE-02, PVE-03 but do not tick \u201cAdd Storage\u201d")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6675).Z,width:"4242",height:"1526"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4555).Z,width:"4230",height:"1526"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add DATASTORE to all PVE servers")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6884).Z,width:"4238",height:"1410"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now We have the same storage named DATASTORE on all PVE servers")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3029).Z,width:"4230",height:"1070"})),(0,i.kt)("h1",{id:"a9f3931f6d09483e8f48db221672e665"},"HA Mode Configuration"),(0,i.kt)("h2",{id:"d4186a2a82ef4a08bb4e90e3d18458f3"},"Setup New Virtual Machine"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7578).Z,width:"3718",height:"2058"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose the ISO file that has been uploaded before")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3327).Z,width:"1440",height:"1018"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep default setting")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6908).Z,width:"1430",height:"1020"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create VM Disk (if running window we can switch to SATA)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(240).Z,width:"1434",height:"1026"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the number of core CPU and RAM capacity")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(803).Z,width:"1442",height:"1020"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2839).Z,width:"1446",height:"998"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set Network Interface Card type, Mac Address and NIC connect to \u201cBridge\u201d (Switch)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8248).Z,width:"1446",height:"1020"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Confirm to create a VM")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9828).Z,width:"1436",height:"1012"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"VM was created and we can modify VM hardware, set boot order, and auto start,\u2026")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6660).Z,width:"3710",height:"1280"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3438).Z,width:"3718",height:"1332"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the VM and set up the OS as running on bare-metal")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8145).Z,width:"3724",height:"1618"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3942).Z,width:"3754",height:"1944"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4807).Z,width:"3740",height:"2074"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1947).Z,width:"4270",height:"2078"})),(0,i.kt)("h2",{id:"8568707dc91f4b2c8d6d3ec82ea2adab"},"2.2 Configuration for VM Replication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"VM are running on PVE-01 and should be replicate to PVE-02, PVE-03")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4574).Z,width:"3740",height:"1570"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set time for replicating, do the same to PVE-03")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2697).Z,width:"3730",height:"1792"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(783).Z,width:"3738",height:"948"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We can now start syncing data")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4920).Z,width:"3734",height:"1580"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now all PVE have VM Disk")),(0,i.kt)("h2",{id:"f1ef1c9c5d9a4dca9d285e5733d23a59"},"2.3 Set HA mode for VM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an HA group that Vm can migrate to these server in the group")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4615).Z,width:"3726",height:"1690"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable HA mode for VM")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9585).Z,width:"3728",height:"1730"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3373).Z,width:"3746",height:"1238"})),(0,i.kt)("h2",{id:"e36831e505184f5f90222d1abd0214bc"},"2.4 Test HA Mode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"VM running on PVE-02")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6955).Z,width:"3742",height:"2178"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Power off PVE-02")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2806).Z,width:"3722",height:"1604"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can not ping to VM")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7240).Z,width:"3714",height:"2242"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cluster take 3-5 minutes to make sure PVE-02 is down"),(0,i.kt)("li",{parentName:"ul"},"VM will migrate to PVE-01 automatically and start successfuly")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5287).Z,width:"3754",height:"2242"})))}p.isMDXComponent=!0},3942:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1128366564-9a82746bc5bf8c8b2eb0f9e921b5f89c.png"},9828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1129969869-5e62f3e3a3b90ef22435095ef7aadbd9.png"},6884:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1181652769-f417d7938900638e01ce8a31cc5b6b53.png"},4615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1350269263-f64816055fa9d9ce5f084bdb49cc7351.png"},8145:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1389879648-419ccb70c3383a8412a82f1ec764b3d0.png"},7153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1436961637-207b47767cce7963dd9f9d12de89e9cb.png"},4555:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1446025234-6c00af4a210accb56a1f6a8dd860db9d.png"},240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1742973488-705d1ba1e4e9327e5a367758042639e6.png"},6955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1767662884-e47e3c52201dcf0e99d917e562b30b8d.png"},2806:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/188329903-aeecc8e51914d9e31df79ba5bcb483db.png"},5287:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1907468078-51e7d968dc978c9835acd8f712aaa107.png"},7240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/195274063-0cfabfa5e4573b11b1b758c0c7f557d4.png"},4920:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2035497060-c995da01f621d61af6aac36d45098e7b.png"},9585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/222086902-0f4dc0aa73c02780add2d8780e9fa0b3.png"},2697:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/229315828-1137608d6f194c1b20f5433be7d8f3ab.png"},6908:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/307063625-457c554f12ff7765773cded127907468.png"},4807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/308982124-15a41efdd5c5aa34864c12ac10c8f9d5.png"},3327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/331397217-6fdc58f6b0aeaa2fbc1804cf24c80d5e.png"},3438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/372047439-ea7558765ff4ac40a43475b82c29091a.png"},3373:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/442555760-f09ef0485db9051041684b2f6756df1f.png"},8248:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/456546760-428dea1d6d44d41717158c66f3752948.png"},1947:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/472884498-3edcbaa172b5f52e44cd66c9b91347eb.png"},6675:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/566193205-1a11962f22aa360baca133f28114e8ce.png"},803:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/628688487-e4e5c38baa3330115b5bfcee933408c5.png"},783:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/637847736-b18e89cbb6ecf034d20bf1aa71d6b687.png"},4574:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/719186118-aad2466ade72a3843baf942502fd2e8a.png"},3029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/745500008-4a88a251b45ccacc5041fb9b979ee665.png"},6660:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/78791423-8e719b400b3db686754dd713cfc26433.png"},7598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/864038790-f0897fc85144c921a26e679428783afc.png"},7578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/928943810-05a07a0aba995dec1aa2673f3dcbe4c4.png"},2839:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/999006366-b395e12ed94532f47b20faa9c92f269b.png"}}]);