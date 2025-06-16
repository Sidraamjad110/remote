(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(7468)}])},7468:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Login}});var l=n(5893),d=n(7294),c=n(9332),m=n(1503),g=n(6501);function Login(){let{login:e,isAuthenticated:r}=(0,m.aC)(),n=(0,c.useRouter)(),[f,h]=(0,d.useState)(""),[y,b]=(0,d.useState)(""),[w,v]=(0,d.useState)(!1);(0,d.useEffect)(()=>{r&&(g.ZP.success("Login successful"),n.push("/dashboard"))},[r,n]);let handleLogin=async r=>{if(r.preventDefault(),!f.trim()||!y.trim()){g.ZP.error("Email and password are required");return}v(!0);try{await e(f,y)}catch(r){console.error("Login error:",r);let e=r.message||"Login failed. Please try again.";"Invalid email or password"===e?g.ZP.error("Invalid email or password"):g.ZP.error(e)}finally{v(!1)}};return(0,l.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900",children:(0,l.jsxs)("div",{className:"flex w-full h-screen animate-fade-in",children:[(0,l.jsxs)("div",{className:"w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-16 flex flex-col justify-center items-center",children:[(0,l.jsx)("div",{className:"text-5xl font-bold text-orange-500 mb-6",children:"\uD83C\uDF7D️ Rasant"}),(0,l.jsx)("p",{className:"text-gray-300 text-lg text-center max-w-md leading-relaxed",children:"Welcome back to Rasant Admin Panel! Access your dashboard to manage your restaurant with professional tools and insights."})]}),(0,l.jsxs)("div",{className:"w-1/2 bg-white dark:bg-gray-800 p-16 flex flex-col justify-center",children:[(0,l.jsx)("h2",{className:"text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-center",children:"Admin Login"}),(0,l.jsxs)("form",{onSubmit:handleLogin,className:"space-y-6 max-w-md mx-auto",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),(0,l.jsx)("input",{type:"email",id:"email",value:f,onChange:e=>h(e.target.value),placeholder:"Enter your email",className:"w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 text-lg",required:!0,autoComplete:"username"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Password"}),(0,l.jsx)("input",{type:"password",id:"password",value:y,onChange:e=>b(e.target.value),placeholder:"Enter your password",className:"w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 text-lg",required:!0,autoComplete:"current-password"})]}),(0,l.jsx)("button",{type:"submit",disabled:w,className:"w-full bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-all duration-300 text-lg font-medium ".concat(w?"opacity-70 cursor-not-allowed":"hover:scale-[1.02]"),children:w?(0,l.jsxs)("span",{className:"flex items-center justify-center",children:[(0,l.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Logging in..."]}):"Login"})]}),(0,l.jsx)("div",{className:"mt-6 text-center text-sm text-gray-600 dark:text-gray-400",children:(0,l.jsx)("a",{href:"#",className:"font-medium text-orange-500 hover:text-orange-600",children:"Forgot password?"})})]})]})})}},6501:function(e,r,n){"use strict";let l,d;n.d(r,{ZP:function(){return X}});var c,m=n(7294);let g={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||g,f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let m=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+m+";":l+="f"==c[1]?o(m,c):c+"{"+o(m,"k"==c[1]?"":r)+"}":"object"==typeof m?l+=o(m,r?r.replace(/([^,])+/g,e=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=m&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,m):c+":"+m+";")}return n+(r&&d?r+"{"+d+"}":d)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let m=s(e),g=b[m]||(b[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!b[g]){let r=m!==e?e:(e=>{let r,n,l=[{}];for(;r=f.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(y," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(y," ").trim();return l[0]})(e);b[g]=o(d?{["@keyframes "+g]:r}:r,n?"":"."+g)}let w=n&&b.g?b.g:null;return n&&(b.g=b[g]),c=b[g],w?r.data=r.data.replace(w,c):-1===r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),g},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let w,v,_,j=u.bind({k:1});function goober_modern_j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let m=Object.assign({},d),g=m.className||a.className;n.p=Object.assign({theme:v&&v()},m),n.o=/ *go\d+/.test(g),m.className=u.apply(n,l)+(g?" "+g:""),r&&(m.ref=c);let f=e;return e[0]&&(f=m.as||e,delete m.as),_&&f[0]&&_(m),w(f,m)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,k=(l=0,()=>(++l).toString()),A=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:l}=r;return{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},N=[],E={toasts:[],pausedAt:void 0},dist_u=e=>{E=U(E,e),N.forEach(e=>{e(E)})},J=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||k()}),x=e=>(r,n)=>{let l=J(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_c=(e,r)=>x("blank")(e,r);dist_c.error=x("error"),dist_c.success=x("success"),dist_c.loading=x("loading"),dist_c.custom=x("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let l=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let d=r.success?dist_f(r.success,e):void 0;return d?dist_c.success(d,{id:l,...n,...null==n?void 0:n.success}):dist_c.dismiss(l),e}).catch(e=>{let d=r.error?dist_f(r.error,e):void 0;d?dist_c.error(d,{id:l,...n,...null==n?void 0:n.error}):dist_c.dismiss(l)}),e};var $=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,C=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,P=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${C} 0.15s ease-out forwards;
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
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=goober_modern_j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${z} 1s linear infinite;
`,D=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,I=j`
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
}`,O=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${I} 0.2s ease-out forwards;
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
`,S=goober_modern_j("div")`
  position: absolute;
`,Z=goober_modern_j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=goober_modern_j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?m.createElement(T,null,r):r:"blank"===n?null:m.createElement(Z,null,m.createElement(F,{...l}),"loading"!==n&&m.createElement(S,null,"error"===n?m.createElement(P,{...l}):m.createElement(O,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,R=goober_modern_j("div")`
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
`,H=goober_modern_j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${j(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:r,style:n,children:l})=>{let d=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},c=m.createElement(M,{toast:e}),g=m.createElement(H,{...e.ariaProps},dist_f(e.message,e));return m.createElement(R,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:c,message:g}):m.createElement(m.Fragment,null,c,g))}),c=m.createElement,o.p=void 0,w=c,v=void 0,_=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var X=dist_c}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);