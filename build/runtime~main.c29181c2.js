(()=>{"use strict";var u={},m={};function s(n){var r=m[n];if(r!==void 0)return r.exports;var a=m[n]={id:n,loaded:!1,exports:{}};return u[n].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=u,(()=>{var n=[];s.O=(r,a,e,i)=>{if(a){i=i||0;for(var o=n.length;o>0&&n[o-1][2]>i;o--)n[o]=n[o-1];n[o]=[a,e,i];return}for(var t=1/0,o=0;o<n.length;o++){for(var[a,e,i]=n[o],c=!0,l=0;l<a.length;l++)(i&!1||t>=i)&&Object.keys(s.O).every(b=>s.O[b](a[l]))?a.splice(l--,1):(c=!1,i<t&&(t=i));if(c){n.splice(o--,1);var f=e();f!==void 0&&(r=f)}}return r}})(),s.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return s.d(r,{a:r}),r},(()=>{var n=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__,r;s.t=function(a,e){if(e&1&&(a=this(a)),e&8||typeof a=="object"&&a&&(e&4&&a.__esModule||e&16&&typeof a.then=="function"))return a;var i=Object.create(null);s.r(i);var o={};r=r||[null,n({}),n([]),n(n)];for(var t=e&2&&a;typeof t=="object"&&!~r.indexOf(t);t=n(t))Object.getOwnPropertyNames(t).forEach(c=>o[c]=()=>a[c]);return o.default=()=>a,s.d(i,o),i}})(),s.d=(n,r)=>{for(var a in r)s.o(r,a)&&!s.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:r[a]})},s.f={},s.e=n=>Promise.all(Object.keys(s.f).reduce((r,a)=>(s.f[a](n,r),r),[])),s.u=n=>""+({46:"content-type-builder-translation-zh-Hans-json",90:"i18n-translation-de-json",92:"api-tokens-edit-page",96:"email-translation-de-json",123:"ru-json",129:"i18n-translation-es-json",302:"sso-settings-page",320:"en-json",395:"tr-json",435:"email-translation-it-json",562:"no-json",585:"upload-translation-pt-json",606:"sk-json",615:"upload-translation-uk-json",695:"upload-settings",742:"content-type-builder-translation-th-json",744:"email-translation-cs-json",749:"th-json",801:"Admin-authenticatedApp",830:"he-json",931:"content-type-builder-translation-en-json",994:"content-manager",1001:"content-type-builder-translation-nl-json",1009:"upload-translation-ms-json",1011:"zh-json",1018:"email-translation-ko-json",1023:"content-type-builder-translation-it-json",1056:"upload-translation-tr-json",1157:"email-translation-pt-BR-json",1167:"users-permissions-translation-ko-json",1180:"i18n-translation-tr-json",1312:"ja-json",1331:"upload-translation-es-json",1375:"upload-translation-pt-BR-json",1377:"ko-json",1442:"users-permissions-translation-cs-json",1495:"email-settings-page",1674:"users-permissions-translation-ru-json",1722:"graphql-translation-dk-json",1930:"users-permissions-translation-pt-json",1989:"graphql-translation-zh-Hans-json",2137:"i18n-translation-fr-json",2151:"content-type-builder-translation-id-json",2195:"graphql-translation-tr-json",2246:"content-type-builder-translation-dk-json",2248:"gu-json",2282:"users-providers-settings-page",2380:"users-permissions-translation-tr-json",2411:"email-translation-tr-json",2464:"users-permissions-translation-de-json",2489:"upload-translation-ko-json",2492:"transfer-tokens-edit-page",2544:"admin-edit-roles-page",2553:"zh-Hans-json",2567:"content-type-builder-translation-ko-json",2603:"email-translation-en-json",2648:"email-translation-ar-json",2657:"content-type-builder-translation-cs-json",2671:"nl-json",2742:"users-permissions-translation-zh-Hans-json",2776:"graphql-translation-ru-json",2812:"audit-logs-settings-page",3025:"ms-json",3038:"upload-translation-sk-json",3043:"email-translation-zh-Hans-json",3095:"users-permissions-translation-sk-json",3098:"users-permissions-translation-fr-json",3166:"email-translation-pt-json",3206:"email-translation-nl-json",3278:"vi-json",3304:"content-type-builder-translation-tr-json",3340:"pt-json",3382:"graphql-translation-pl-json",3455:"admin-roles-list",3516:"ca-json",3530:"users-permissions-translation-vi-json",3552:"i18n-settings-page",3555:"graphql-translation-zh-json",3650:"upload",3677:"Admin_pluginsPage",3702:"users-permissions-translation-pl-json",3825:"email-translation-dk-json",3948:"content-type-builder-translation-pl-json",3964:"content-type-builder-translation-ms-json",3981:"Admin_homePage",4021:"upload-translation-de-json",4121:"webhook-list-page",4179:"users-permissions-translation-id-json",4263:"admin-edit-users",4299:"api-tokens-create-page",4302:"content-type-builder-translation-zh-json",4587:"email-translation-th-json",4693:"email-translation-fr-json",4804:"upload-translation-ru-json",4816:"transfer-tokens-create-page",4987:"upload-translation-pl-json",5053:"upload-translation-zh-json",5162:"webhook-edit-page",5199:"admin-users",5222:"upload-translation-it-json",5296:"i18n-translation-dk-json",5388:"email-translation-ru-json",5396:"users-permissions-translation-zh-json",5516:"Admin_marketplace",5538:"admin-app",5751:"email-translation-es-json",5880:"upload-translation-ja-json",5894:"hu-json",5895:"Admin_settingsPage",5905:"content-type-builder-list-view",5906:"content-type-builder-translation-pt-BR-json",6068:"graphql-translation-sv-json",6232:"upload-translation-th-json",6280:"i18n-translation-ko-json",6332:"hi-json",6377:"users-permissions-translation-dk-json",6434:"upload-translation-en-json",6460:"users-permissions-translation-en-json",6558:"graphql-translation-es-json",6745:"email-translation-uk-json",6784:"email-translation-ms-json",6804:"graphql-translation-fr-json",6817:"it-json",6831:"upload-translation-zh-Hans-json",6836:"users-permissions-translation-uk-json",6848:"email-translation-zh-json",6901:"de-json",7048:"users-permissions-translation-nl-json",7094:"users-permissions-translation-ar-json",7155:"content-type-builder-translation-de-json",7186:"content-type-builder-translation-ru-json",7327:"email-translation-vi-json",7347:"highlight.js",7403:"uk-json",7465:"upload-translation-dk-json",7519:"cs-json",7663:"email-translation-id-json",7808:"i18n-translation-zh-json",7817:"users-permissions-translation-es-json",7828:"users-permissions-translation-th-json",7833:"upload-translation-fr-json",7846:"pl-json",7898:"dk-json",7934:"content-type-builder-translation-pt-json",7958:"ar-json",7997:"content-type-builder-translation-sk-json",8006:"fr-json",8056:"api-tokens-list-page",8155:"review-workflows-settings",8175:"i18n-translation-en-json",8178:"email-translation-ja-json",8329:"content-type-builder-translation-sv-json",8342:"content-type-builder-translation-es-json",8360:"eu-json",8367:"es-json",8418:"users-email-settings-page",8423:"upload-translation-ca-json",8467:"users-permissions-translation-sv-json",8481:"email-translation-pl-json",8573:"content-type-builder-translation-uk-json",8736:"users-permissions-translation-pt-BR-json",8853:"users-roles-settings-page",8880:"content-type-builder",8897:"id-json",8907:"content-type-builder-translation-ja-json",8965:"content-type-builder-translation-fr-json",9220:"users-permissions-translation-ms-json",9303:"sv-json",9366:"i18n-translation-pl-json",9412:"email-translation-sk-json",9460:"users-advanced-settings-page",9497:"Admin_profilePage",9501:"Admin_InternalErrorPage",9502:"users-permissions-translation-ja-json",9511:"content-type-builder-translation-ar-json",9514:"Upload_ConfigureTheView",9600:"transfer-tokens-list-page",9605:"graphql-translation-en-json",9647:"pt-BR-json",9726:"sa-json",9737:"i18n-translation-ru-json",9762:"i18n-translation-zh-Hans-json",9797:"upload-translation-he-json",9903:"ml-json",9905:"users-permissions-translation-it-json"}[n]||n)+"."+{46:"66b41381",90:"08cdd808",92:"9219675a",96:"e24286cf",123:"1750b5b2",129:"8aacbfb7",302:"8c544a31",320:"500c7892",395:"097ce63b",435:"37db6360",562:"635fd880",585:"bffc8f2b",606:"cde24510",615:"6c769ed1",695:"08bb856e",742:"4580645b",744:"1081041a",749:"7a5d662a",801:"f5004b49",830:"4ee88e7e",931:"1cf8ea4c",994:"18524298",1001:"858fb25f",1009:"e2c780db",1011:"84639769",1018:"5ce92c56",1023:"3f816aa9",1056:"208d19d9",1157:"7e34c212",1167:"bbd80f52",1180:"25199c69",1312:"7a2374e8",1331:"80938a50",1375:"7357ebdf",1377:"b9b3dfa0",1442:"e48f16c9",1495:"281bc2fa",1674:"37f93bd1",1722:"f9a61c98",1930:"66cd3d4a",1989:"452e8f5c",2137:"34daa706",2151:"09a228dd",2195:"251db782",2246:"66f41c0f",2248:"745b8aa5",2282:"499ecbb6",2380:"e9743d6b",2411:"33d925b8",2464:"8c7ce349",2489:"6170de22",2492:"469affa0",2544:"b95af640",2553:"3764d1bf",2567:"7606f4cd",2603:"bdf92374",2648:"582ae47e",2657:"4468ff6a",2671:"5a63f196",2742:"44f41049",2776:"1d2c7a82",2812:"65c1ef87",3025:"1f9a1b22",3038:"83390962",3043:"0af84a23",3095:"38fdcf88",3098:"c0b5b1b0",3166:"e35d15b7",3206:"d22af98f",3219:"33271e5e",3278:"1d8e8831",3304:"62d3bd57",3340:"a1fd01f7",3382:"78d35ecc",3455:"edbd05d7",3486:"58c30c5f",3516:"f6dcb3ef",3530:"221d3f0d",3552:"4f8e307f",3555:"e3b2ad95",3650:"4ea33c7b",3677:"bd0c96c5",3702:"3d75aca6",3825:"b8d1b10e",3848:"bb14f522",3948:"dc790a32",3964:"b85421c1",3981:"ce6b8832",4021:"9d8eab65",4121:"5ef24468",4179:"fc9f25bb",4263:"5c966018",4299:"ad59d63a",4302:"e517b23d",4587:"c262b04c",4693:"6299e069",4804:"4fc18b52",4816:"64da98af",4987:"84e8be93",5053:"4ecab1ec",5125:"b35d329e",5162:"b2301d8b",5199:"bec0dfa1",5222:"20fd6d1c",5296:"dc8d3beb",5388:"a2d9bfd1",5396:"8a450368",5516:"5dbd714a",5538:"73a1f35b",5751:"906df46e",5880:"8b1c3e73",5894:"27762f86",5895:"41dad9ff",5905:"713253cc",5906:"fb66e7e9",6068:"45547ec2",6232:"bd4b4409",6280:"208e409e",6332:"16dbd3c0",6377:"dc7d2ed3",6434:"1f3e72f2",6460:"684e2cc9",6558:"d1d7e515",6618:"f696961b",6745:"54b6d852",6784:"a44a2984",6798:"bcfb4b64",6804:"2993538f",6817:"55e160c2",6831:"85306587",6836:"6f7e9284",6848:"a88a9f91",6901:"89612cd8",7027:"4928fb3d",7048:"5bed0f38",7094:"33153973",7155:"f2c81259",7186:"49344a48",7327:"11a3d6e1",7347:"ecae80ae",7403:"1d7a2fc2",7465:"7754ba6d",7519:"bb835ffe",7663:"43996ed5",7692:"f56871f4",7808:"68ce1bfe",7817:"76bb2a26",7828:"23a78bec",7833:"23bcb76a",7846:"088ed52e",7898:"94ba76fb",7934:"65f566b5",7958:"ef7d3e50",7997:"c10c9c1c",8006:"9a1a9b41",8056:"a6b40f49",8155:"ccf80f71",8175:"da2630aa",8178:"0b1f4474",8273:"cd602b7b",8329:"bc638189",8342:"eda9e011",8360:"ba8d52e3",8367:"41be7db0",8418:"ec41f782",8423:"a7484ba9",8467:"5da70c5d",8481:"b44ca674",8573:"3d259d8a",8736:"8b69638b",8853:"9021b197",8880:"cf0c233d",8897:"bd34f2ac",8907:"8bdfc0a7",8965:"8293df23",9220:"4d867634",9303:"7544c4e8",9366:"34adb0bb",9381:"c9e2200c",9412:"d97bdb06",9460:"9d7946cd",9497:"7512b153",9501:"6491a255",9502:"a56d0d12",9511:"69aa2639",9514:"3130eb74",9600:"95bfffb1",9605:"e0e3c5b9",9647:"5b14c92c",9726:"f904f57c",9737:"95d14f8c",9762:"ca15269f",9797:"20bd70eb",9903:"e2224ffc",9905:"8575845f"}[n]+".chunk.js",s.miniCssF=n=>{},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n={},r="server:";s.l=(a,e,i,o)=>{if(n[a]){n[a].push(e);return}var t,c;if(i!==void 0)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==r+i){t=d;break}}t||(c=!0,t=document.createElement("script"),t.charset="utf-8",t.timeout=120,s.nc&&t.setAttribute("nonce",s.nc),t.setAttribute("data-webpack",r+i),t.src=a),n[a]=[e];var p=(g,b)=>{t.onerror=t.onload=null,clearTimeout(j);var h=n[a];if(delete n[a],t.parentNode&&t.parentNode.removeChild(t),h&&h.forEach(y=>y(b)),g)return g(b)},j=setTimeout(p.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=p.bind(null,t.onerror),t.onload=p.bind(null,t.onload),c&&document.head.appendChild(t)}})(),s.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),s.p="/admin/",(()=>{s.b=document.baseURI||self.location.href;var n={1303:0};s.f.j=(e,i)=>{var o=s.o(n,e)?n[e]:void 0;if(o!==0)if(o)i.push(o[2]);else if(e!=1303){var t=new Promise((d,p)=>o=n[e]=[d,p]);i.push(o[2]=t);var c=s.p+s.u(e),l=new Error,f=d=>{if(s.o(n,e)&&(o=n[e],o!==0&&(n[e]=void 0),o)){var p=d&&(d.type==="load"?"missing":d.type),j=d&&d.target&&d.target.src;l.message="Loading chunk "+e+` failed.
(`+p+": "+j+")",l.name="ChunkLoadError",l.type=p,l.request=j,o[1](l)}};s.l(c,f,"chunk-"+e,e)}else n[e]=0},s.O.j=e=>n[e]===0;var r=(e,i)=>{var[o,t,c]=i,l,f,d=0;if(o.some(j=>n[j]!==0)){for(l in t)s.o(t,l)&&(s.m[l]=t[l]);if(c)var p=c(s)}for(e&&e(i);d<o.length;d++)f=o[d],s.o(n,f)&&n[f]&&n[f][0](),n[f]=0;return s.O(p)},a=self.webpackChunkserver=self.webpackChunkserver||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})(),s.nc=void 0})();
