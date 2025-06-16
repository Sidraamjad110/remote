(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[756],{5529:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RegisterAdmin",function(){return n(5981)}])},5981:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return RegisterAdmin}});var d=n(5893),l=n(7294),c=n(9332),m=n(6501);function RegisterAdmin(){let e=(0,c.useRouter)(),[r,n]=(0,l.useState)(""),[g,f]=(0,l.useState)(""),[y,b]=(0,l.useState)(""),[h,w]=(0,l.useState)(!1),handleApiError=e=>{if(!e.success)switch(console.error("API Error:",e),e.error){case"BAD_REQUEST":return e.message||"Invalid input provided";case"ALREADY_EXISTS":return e.message||"Admin with this email already exists";case"UNAUTHORIZED":return"Unauthorized access";case"DATA_NOT_FOUND":return"Resource not found";case"CONFLICT":return e.message||"Please try again";case"FORBIDDEN":return"Access denied";case"MONGO_EXCEPTION":return console.error("MongoDB Error Details:",e.details),"Database error occurred";case"DB_ERROR":return e.message||"Database error occurred";default:return"An unexpected error occurred"}return""},handleRegister=async d=>{if(d.preventDefault(),!r.trim()||!g.trim()||!y.trim()){m.ZP.error("All fields are required");return}w(!0);try{let d=await fetch("http://192.168.18.107:3000/users/api/v1/create-admin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:g,password:y})}),l=await d.json();if(!d.ok||!l.success){let e=handleApiError(l);throw Error(e||"Failed to register admin")}if(l.success&&1===l.type)m.ZP.success("Admin registered successfully"),n(""),f(""),b(""),e.push("/login");else throw Error("Invalid response format")}catch(r){let e=r instanceof Error?r.message:"Failed to register admin";m.ZP.error(e)}finally{w(!1)}};return(0,d.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900",children:(0,d.jsxs)("div",{className:"flex w-full h-screen animate-fade-in",children:[(0,d.jsxs)("div",{className:"w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-16 flex flex-col justify-center items-center",children:[(0,d.jsx)("div",{className:"text-5xl font-bold text-orange-500 mb-6",children:"\uD83C\uDF7D️ Rasant"}),(0,d.jsx)("p",{className:"text-gray-300 text-lg text-center max-w-md leading-relaxed",children:"Create your Rasant Admin Account and take control of your restaurant management with ease. Join us to streamline operations and enhance your business efficiency."})]}),(0,d.jsxs)("div",{className:"w-1/2 bg-white dark:bg-gray-800 p-16 flex flex-col justify-center",children:[(0,d.jsx)("h2",{className:"text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-center",children:"Create Admin Account"}),(0,d.jsxs)("form",{onSubmit:handleRegister,className:"space-y-6 max-w-md mx-auto",children:[(0,d.jsx)("input",{type:"text",value:r,onChange:e=>n(e.target.value),placeholder:"Name",className:"w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 text-lg",required:!0}),(0,d.jsx)("input",{type:"email",value:g,onChange:e=>f(e.target.value),placeholder:"Email",className:"w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 text-lg",required:!0}),(0,d.jsx)("input",{type:"password",value:y,onChange:e=>b(e.target.value),placeholder:"Password",className:"w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 text-lg",required:!0}),(0,d.jsx)("button",{type:"submit",disabled:h,className:"w-full bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 text-lg font-medium",children:h?"Registering...":"Register"})]})]})]})})}},6501:function(e,r,n){"use strict";let d,l;n.d(r,{ZP:function(){return X}});var c,m=n(7294);let g={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||g,f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y=/\/\*[^]*?\*\/|  +/g,b=/\n+/g,o=(e,r)=>{let n="",d="",l="";for(let c in e){let m=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+m+";":d+="f"==c[1]?o(m,c):c+"{"+o(m,"k"==c[1]?"":r)+"}":"object"==typeof m?d+=o(m,r?r.replace(/([^,])+/g,e=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=m&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=o.p?o.p(c,m):c+":"+m+";")}return n+(r&&l?r+"{"+l+"}":l)+d},h={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,d,l)=>{var c;let m=s(e),g=h[m]||(h[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!h[g]){let r=m!==e?e:(e=>{let r,n,d=[{}];for(;r=f.exec(e.replace(y,""));)r[4]?d.shift():r[3]?(n=r[3].replace(b," ").trim(),d.unshift(d[0][n]=d[0][n]||{})):d[0][r[1]]=r[2].replace(b," ").trim();return d[0]})(e);h[g]=o(l?{["@keyframes "+g]:r}:r,n?"":"."+g)}let w=n&&h.g?h.g:null;return n&&(h.g=h[g]),c=h[g],w?r.data=r.data.replace(w,c):-1===r.data.indexOf(c)&&(r.data=d?c+r.data:r.data+c),g},p=(e,r,n)=>e.reduce((e,d,l)=>{let c=r[l];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+d+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let w,_,v,j=u.bind({k:1});function goober_modern_j(e,r){let n=this||{};return function(){let d=arguments;function a(l,c){let m=Object.assign({},l),g=m.className||a.className;n.p=Object.assign({theme:_&&_()},m),n.o=/ *go\d+/.test(g),m.className=u.apply(n,d)+(g?" "+g:""),r&&(m.ref=c);let f=e;return e[0]&&(f=m.as||e,delete m.as),v&&f[0]&&v(m),w(f,m)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,E=(d=0,()=>(++d).toString()),A=()=>{if(void 0===l&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");l=!e||e.matches}return l},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:d}=r;return{...e,toasts:e.toasts.map(e=>e.id===d||void 0===d?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let l=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+l}))}}},N=[],k={toasts:[],pausedAt:void 0},dist_u=e=>{k=U(k,e),N.forEach(e=>{e(k)})},J=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||E()}),x=e=>(r,n)=>{let d=J(r,e,n);return dist_u({type:2,toast:d}),d.id},dist_c=(e,r)=>x("blank")(e,r);dist_c.error=x("error"),dist_c.success=x("success"),dist_c.loading=x("loading"),dist_c.custom=x("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let d=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let l=r.success?dist_f(r.success,e):void 0;return l?dist_c.success(l,{id:d,...n,...null==n?void 0:n.success}):dist_c.dismiss(d),e}).catch(e=>{let l=r.error?dist_f(r.error,e):void 0;l?dist_c.error(l,{id:d,...n,...null==n?void 0:n.error}):dist_c.dismiss(d)}),e};var D=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,C=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=goober_modern_j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${C} 1s linear infinite;
`,P=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,S=j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,T=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${S} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,F=goober_modern_j("div")`
  position: absolute;
`,z=goober_modern_j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=goober_modern_j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:d}=e;return void 0!==r?"string"==typeof r?m.createElement(q,null,r):r:"blank"===n?null:m.createElement(z,null,m.createElement(I,{...d}),"loading"!==n&&m.createElement(F,null,"error"===n?m.createElement($,{...d}):m.createElement(T,{...d})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,B=goober_modern_j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,L=goober_modern_j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[d,l]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${j(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:r,style:n,children:d})=>{let l=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},c=m.createElement(M,{toast:e}),g=m.createElement(L,{...e.ariaProps},dist_f(e.message,e));return m.createElement(B,{className:e.className,style:{...l,...n,...e.style}},"function"==typeof d?d({icon:c,message:g}):m.createElement(m.Fragment,null,c,g))}),c=m.createElement,o.p=void 0,w=c,_=void 0,v=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var X=dist_c}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5529)}),_N_E=e.O()}]);