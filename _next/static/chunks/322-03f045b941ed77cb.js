"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{1322:function(e,r,n){n.r(r);var d=n(5893),l=n(7294),c=n(6249),m=n(6501),g=n(3454);let h=g.env.REACT_APP_API_BASE_URL||"http://192.168.18.107:3000";r.default=e=>{let{token:r,logout:n}=e,[g,f]=(0,l.useState)([]),[y,b]=(0,l.useState)([]),[w,v]=(0,l.useState)(null),[j,_]=(0,l.useState)([]),[k,N]=(0,l.useState)(""),[E,P]=(0,l.useState)(""),[C,D]=(0,l.useState)({fetch:!1,create:!1,delete:!1,update:!1}),[S,T]=(0,l.useState)(!1),[$,O]=(0,l.useState)(null);(0,l.useEffect)(()=>{r&&(fetchRoles(),fetchPermissions())},[r]);let handleApiError=e=>{if(!e.success)switch(e.error){case"DATA_NOT_FOUND":return"Not Found";case"BAD_REQUEST":return e.message||"Invalid input provided";case"ALREADY_EXISTS":return e.message||"Permission already exists";case"CONFLICT":return e.message||"Please try again";case"FORBIDDEN":return"Access Denied";case"UNAUTHORIZED":return n(),window.location.href="/pos-system/login","Please log in to continue";case"MONGO_EXCEPTION":return"Database error occurred";case"DB_CHECK_FAIL":return e.message||"Database error occurred";default:return"An unexpected error occurred"}return""},fetchRoles=async()=>{D(e=>({...e,fetch:!0}));try{let e=await fetch("".concat(h,"/rolepermission/api/v1/roles/list"),{headers:{Authorization:"Bearer ".concat(r)}}),d=await e.json();if(401===e.status){n(),window.location.href="/pos-system/login";return}if(!e.ok||!d.success)throw Error(handleApiError(d));f(d.data||[])}catch(e){m.ZP.error(e instanceof Error?e.message:"Failed to fetch roles")}finally{D(e=>({...e,fetch:!1}))}},fetchPermissions=async()=>{D(e=>({...e,fetch:!0}));try{let e=await fetch("".concat(h,"/rolepermission/api/v1/permissions/list"),{headers:{Authorization:"Bearer ".concat(r)}}),d=await e.json();if(401===e.status){n(),window.location.href="/pos-system/login";return}if(!e.ok||!d.success)throw Error(handleApiError(d));b(d.data||[])}catch(e){m.ZP.error(e instanceof Error?e.message:"Failed to fetch permissions")}finally{D(e=>({...e,fetch:!1}))}},handleCreatePermission=async()=>{if(!k.trim()){m.ZP.error("Permission key cannot be empty!");return}if(y.some(e=>e.key===k.trim())){m.ZP.error("Permission key already exists!");return}D(e=>({...e,create:!0}));try{let e=await fetch("".concat(h,"/rolepermission/api/v1/permissions/create"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({key:k.trim(),description:E.trim()||void 0})}),d=await e.json();if(401===e.status){n(),window.location.href="/pos-system/login";return}if(!e.ok||!d.success)throw Error(handleApiError(d));b([...y,d.data]),N(""),P(""),m.ZP.success("Permission created successfully!")}catch(e){m.ZP.error(e instanceof Error?e.message:"Failed to create permission")}finally{D(e=>({...e,create:!1}))}},handleDeletePermission=async e=>{D(e=>({...e,delete:!0}));try{let d=await fetch("".concat(h,"/rolepermission/api/v1/permissions/delete"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({permission_id:e})}),l=await d.json();if(401===d.status){n(),window.location.href="/pos-system/login";return}if(!d.ok||!l.success)throw Error(handleApiError(l));b(y.filter(r=>r._id!==e)),m.ZP.success("Permission removed successfully!")}catch(e){m.ZP.error(e instanceof Error?e.message:"Failed to delete permission")}finally{D(e=>({...e,delete:!1})),T(!1)}},handlePermissionToggle=(e,r)=>{_(n=>r?[...n,e]:n.filter(r=>r!==e))},handleUpdatePermissions=async e=>{if(!e){m.ZP.error("Please select a role first!");return}D(e=>({...e,update:!0}));try{let d=g.find(r=>r._id===e);if(!d)throw Error("Role not found");let l=d.permissions.map(e=>e._id),c=j.filter(e=>!l.includes(e)),f=l.filter(e=>!j.includes(e)),y=await fetch("".concat(h,"/rolepermission/api/v1/roles/update-permissions"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({role_id:e,add_permission_ids:c,remove_permission_ids:f})}),b=await y.json();if(401===y.status){n(),window.location.href="/pos-system/login";return}if(!y.ok||!b.success)throw Error(handleApiError(b));m.ZP.success("Permissions updated successfully!"),v(null),_([]),await fetchRoles()}catch(e){m.ZP.error(e instanceof Error?e.message:"Failed to update permissions")}finally{D(e=>({...e,update:!1}))}},loadRolePermissions=e=>{let r=g.find(r=>r._id===e);_((null==r?void 0:r.permissions.map(e=>e._id))||[]),v(e)},openDeleteModal=e=>{O(e),T(!0)};return C.fetch?(0,d.jsx)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 border border-gray-200 dark:border-gray-700",children:(0,d.jsxs)("div",{className:"animate-pulse space-y-4",children:[(0,d.jsx)("div",{className:"h-6 bg-gray-200 dark:bg-gray-700 rounded-lg"}),[,,,].fill(0).map((e,r)=>(0,d.jsx)("div",{className:"h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"},r))]})}):(0,d.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700",children:[(0,d.jsx)("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Manage Permissions"}),(0,d.jsxs)("div",{className:"space-y-6",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-2",children:"Create Permission"}),(0,d.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-2",children:"Use format: resource_action (e.g., orders_can_view, orders_can_edit, orders_can_delete)"}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:space-x-3",children:[(0,d.jsxs)("div",{className:"flex-1",children:[(0,d.jsx)("label",{className:"block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Permission Key"}),(0,d.jsx)("input",{type:"text",value:k,onChange:e=>N(e.target.value),className:"w-full p-2 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"e.g., orders_can_view"})]}),(0,d.jsxs)("div",{className:"flex-1",children:[(0,d.jsx)("label",{className:"block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Description"}),(0,d.jsx)("input",{type:"text",value:E,onChange:e=>P(e.target.value),className:"w-full p-2 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Enter permission description"})]}),(0,d.jsx)("div",{className:"mt-4 sm:mt-6 sm:self-end",children:(0,d.jsx)("button",{onClick:handleCreatePermission,className:"px-4 py-2 bg-indigo-600 text-white text-xs rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300",disabled:C.create,children:C.create?"Creating...":"Create Permission"})})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-2",children:"Existing Permissions"}),0===y.length?(0,d.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"No permissions found"}):(0,d.jsx)("ul",{className:"space-y-2",children:y.map(e=>(0,d.jsxs)("li",{className:"flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 text-xs",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"font-semibold",children:e.key}),e.description&&(0,d.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-xs",children:e.description})]}),(0,d.jsx)("button",{onClick:()=>openDeleteModal(e._id),className:"text-red-600 hover:text-red-800 p-1 mt-2 sm:mt-0 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50",disabled:C.delete,children:(0,d.jsx)(c.Z,{className:"w-4 h-4"})})]},e._id))})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-2",children:"Assign Permissions to Roles"}),(0,d.jsxs)("div",{className:"space-y-4",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{className:"block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Select Role"}),(0,d.jsxs)("select",{value:w||"",onChange:e=>loadRolePermissions(e.target.value),className:"w-full p-2 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[(0,d.jsx)("option",{value:"",children:"Select a role"}),g.map(e=>(0,d.jsx)("option",{value:e._id,children:e.name},e._id))]})]}),w&&(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{className:"text-xs font-semibold text-gray-900 dark:text-white mb-2",children:"Permissions for Role"}),(0,d.jsx)("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:y.map(e=>(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("input",{type:"checkbox",checked:j.includes(e._id),onChange:r=>handlePermissionToggle(e._id,r.target.checked),className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded",disabled:C.update}),(0,d.jsxs)("label",{className:"ml-2 text-xs text-gray-700 dark:text-gray-300",children:[e.key,e.description&&(0,d.jsxs)("span",{className:"text-gray-500 dark:text-gray-400",children:[" (",e.description,")"]})]})]},e._id))}),(0,d.jsx)("button",{onClick:()=>handleUpdatePermissions(w),className:"mt-4 px-4 py-2 bg-indigo-600 text-white text-xs rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300",disabled:C.update,children:C.update?"Updating...":"Update Permissions"})]})]})]})]}),S&&(0,d.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:(0,d.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-full max-w-sm",children:[(0,d.jsx)("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-2",children:"Confirm Deletion"}),(0,d.jsx)("p",{className:"text-xs text-gray-600 dark:text-gray-300 mb-4",children:"Are you sure you want to delete this permission? This action cannot be undone."}),(0,d.jsxs)("div",{className:"flex justify-end space-x-3",children:[(0,d.jsx)("button",{onClick:()=>{O(null),T(!1)},className:"px-3 py-1 text-xs border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700",children:"Cancel"}),(0,d.jsx)("button",{onClick:()=>{$&&handleDeletePermission($)},className:"px-3 py-1 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-red-300",disabled:C.delete,children:C.delete?"Deleting...":"Delete"})]})]})})]})}},6501:function(e,r,n){let d,l;n.d(r,{ZP:function(){return K}});var c,m=n(7294);let g={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||g,h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,o=(e,r)=>{let n="",d="",l="";for(let c in e){let m=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+m+";":d+="f"==c[1]?o(m,c):c+"{"+o(m,"k"==c[1]?"":r)+"}":"object"==typeof m?d+=o(m,r?r.replace(/([^,])+/g,e=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=m&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=o.p?o.p(c,m):c+":"+m+";")}return n+(r&&l?r+"{"+l+"}":l)+d},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,d,l)=>{var c;let m=s(e),g=b[m]||(b[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!b[g]){let r=m!==e?e:(e=>{let r,n,d=[{}];for(;r=h.exec(e.replace(f,""));)r[4]?d.shift():r[3]?(n=r[3].replace(y," ").trim(),d.unshift(d[0][n]=d[0][n]||{})):d[0][r[1]]=r[2].replace(y," ").trim();return d[0]})(e);b[g]=o(l?{["@keyframes "+g]:r}:r,n?"":"."+g)}let w=n&&b.g?b.g:null;return n&&(b.g=b[g]),c=b[g],w?r.data=r.data.replace(w,c):-1===r.data.indexOf(c)&&(r.data=d?c+r.data:r.data+c),g},p=(e,r,n)=>e.reduce((e,d,l)=>{let c=r[l];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+d+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let w,v,j,_=u.bind({k:1});function goober_modern_j(e,r){let n=this||{};return function(){let d=arguments;function a(l,c){let m=Object.assign({},l),g=m.className||a.className;n.p=Object.assign({theme:v&&v()},m),n.o=/ *go\d+/.test(g),m.className=u.apply(n,d)+(g?" "+g:""),r&&(m.ref=c);let h=e;return e[0]&&(h=m.as||e,delete m.as),j&&h[0]&&j(m),w(h,m)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,k=(d=0,()=>(++d).toString()),A=()=>{if(void 0===l&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");l=!e||e.matches}return l},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:d}=r;return{...e,toasts:e.toasts.map(e=>e.id===d||void 0===d?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let l=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+l}))}}},N=[],E={toasts:[],pausedAt:void 0},dist_u=e=>{E=U(E,e),N.forEach(e=>{e(E)})},J=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||k()}),x=e=>(r,n)=>{let d=J(r,e,n);return dist_u({type:2,toast:d}),d.id},dist_c=(e,r)=>x("blank")(e,r);dist_c.error=x("error"),dist_c.success=x("success"),dist_c.loading=x("loading"),dist_c.custom=x("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let d=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let l=r.success?dist_f(r.success,e):void 0;return l?dist_c.success(l,{id:d,...n,...null==n?void 0:n.success}):dist_c.dismiss(d),e}).catch(e=>{let l=r.error?dist_f(r.error,e):void 0;l?dist_c.error(l,{id:d,...n,...null==n?void 0:n.error}):dist_c.dismiss(d)}),e};var P=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,C=_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,S=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$=goober_modern_j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${T} 1s linear infinite;
`,O=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=_`
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
}`,R=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F} 0.2s ease-out forwards;
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
`,Z=goober_modern_j("div")`
  position: absolute;
`,z=goober_modern_j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,I=_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=goober_modern_j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${I} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:d}=e;return void 0!==r?"string"==typeof r?m.createElement(B,null,r):r:"blank"===n?null:m.createElement(z,null,m.createElement($,{...d}),"loading"!==n&&m.createElement(Z,null,"error"===n?m.createElement(S,{...d}):m.createElement(R,{...d})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,L=goober_modern_j("div")`
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
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[d,l]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${_(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:r,style:n,children:d})=>{let l=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},c=m.createElement(M,{toast:e}),g=m.createElement(H,{...e.ariaProps},dist_f(e.message,e));return m.createElement(L,{className:e.className,style:{...l,...n,...e.style}},"function"==typeof d?d({icon:c,message:g}):m.createElement(m.Fragment,null,c,g))}),c=m.createElement,o.p=void 0,w=c,v=void 0,j=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var K=dist_c}}]);