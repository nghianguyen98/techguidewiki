"use strict";(self.webpackChunktechguide_wiki=self.webpackChunktechguide_wiki||[]).push([[392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"SSH server",sidebar_position:1,slug:"/52553071-c70f-452e-9f8d-7ceff79d4bf0"},s=void 0,i={unversionedId:"Network---System/Linux-Administration/User-and-Group/SSH-server",id:"Network---System/Linux-Administration/User-and-Group/SSH-server",title:"SSH server",description:"1.C\xe0i \u0111\u1eb7t ssh server",source:"@site/docs/Network---System/Linux-Administration/User-and-Group/SSH-server.md",sourceDirName:"Network---System/Linux-Administration/User-and-Group",slug:"/52553071-c70f-452e-9f8d-7ceff79d4bf0",permalink:"/docs/52553071-c70f-452e-9f8d-7ceff79d4bf0",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network---System/Linux-Administration/User-and-Group/SSH-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SSH server",sidebar_position:1,slug:"/52553071-c70f-452e-9f8d-7ceff79d4bf0"},sidebar:"tutorialSidebar",previous:{title:"Comming soon",permalink:"/docs/ee4c016a-5dfb-4acd-9583-754bbced289e"},next:{title:"Firewall UFW",permalink:"/docs/a08cbb1a-3ce9-49e0-acf3-06fe86b1f74e"}},o={},c=[{value:"1.C\xe0i \u0111\u1eb7t ssh server",id:"c44fb8f8dbfc4df99c12db3864c1d370",level:2},{value:"<strong>2.K\u1ebft n\u1ed1i SSH s\u1eed d\u1ee5ng key</strong>",id:"0fe83fec80fb48f69e67f95faecbb9c5",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"c44fb8f8dbfc4df99c12db3864c1d370"},"1.C\xe0i \u0111\u1eb7t ssh server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"sudo apt -y install openssh-server\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File config n\u1eb1m \u0111\u01b0\u1eddng d\u1eabn: ",(0,a.kt)("strong",{parentName:"li"},"/etc/ssh/sshd_config"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo nano /etc/ssh/sshd_config\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xf4 hi\u1ec7u h\xf3a root login : s\u1eeda n\u1ed9i dung \xa0",(0,a.kt)("strong",{parentName:"li"},"PermitRootLogin no"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"T\u1eaft t\xednh n\u0103ng \u0111\u0103ng nh\u1eadp b\u1eb1ng m\u1eadt kh\u1ea9u :s\u1eeda n\u1ed9i dung ",(0,a.kt)("strong",{parentName:"li"},"PasswordAuthentication no"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Restart services")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"sudo systemctl restart ssh\n")),(0,a.kt)("h2",{id:"0fe83fec80fb48f69e67f95faecbb9c5"},(0,a.kt)("strong",{parentName:"h2"},"2.K\u1ebft n\u1ed1i SSH s\u1eed d\u1ee5ng key")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"T\u1ea1o private/public key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ssh-keygen -t rsa -b 2048\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File key n\u1eb1m \u1edf folder m\u1eb7c \u0111\u1ecbnh : ",(0,a.kt)("strong",{parentName:"li"},"/home/ubuntu/.ssh")," g\u1ed3m 2 key private v\xe0 public")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"private key"),": key b\u1ea3o m\u1eadt kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 m\u1ea5t ho\u1eb7c public (gi\u1ed1ng password) c\xf3 th\u1ec3 xem nh\u01b0 \u201cch\xeca kh\xf3a\u201d")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"public key")," : c\xf3 th\u1ec3 public v\xe0 \u0111\u01b0\u1ee3c copy l\xean server c\u1ea7n ssh t\u1edbi,c\xf3 th\u1ec3 xem nh\u01b0 \u201c\u1ed5 kh\xf3a\u201d")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy public key l\xean server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ssh-copy-id ubuntu@192.168.3.22\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"N\u1ebfu t\xean file key kh\xe1c v\u1edbi t\xean m\u1eb7c \u0111\u1ecbnh (kh\xf4ng ph\u1ea3i\xa0",(0,a.kt)("strong",{parentName:"li"},"id_rsa"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"ssh-copy-id -i abc.key root@192.168.3.22\n")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"K\u1ebft n\u1ed1i ssh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"ssh ubuntu@192.168.3.22\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"K\u1ebft n\u1ed1i ssh s\u1eed d\u1ee5ng m\u1ed9t key kh\xe1c \u0111\u1ec3 \u0111\u0103ng nh\u1eadp")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"ssh -i /home/user/abc.key user@192.168.3.22\n")))}m.isMDXComponent=!0}}]);