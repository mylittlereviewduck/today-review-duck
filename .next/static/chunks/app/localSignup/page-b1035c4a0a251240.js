(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{1211:function(t,e,s){Promise.resolve().then(s.bind(s,1532))},3809:function(t,e,s){"use strict";var r=s(7563);s.o(r,"useParams")&&s.d(e,{useParams:function(){return r.useParams}}),s.o(r,"useRouter")&&s.d(e,{useRouter:function(){return r.useRouter}}),s.o(r,"useSearchParams")&&s.d(e,{useSearchParams:function(){return r.useSearchParams}})},3131:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});var r=s(8392),n=s(7616),i=s.n(n);function o(t){let{totalSteps:e,currentStep:s}=t;return(0,r.jsx)("div",{className:i().progress_bar,children:Array.from({length:e}).map((t,e)=>(0,r.jsx)("div",{className:"".concat(i().step," ").concat(e==s-1?i().active:i().inactive)},e))})}},5940:function(t,e,s){"use strict";var r=s(8392),n=s(1891),i=s(8347),o=s.n(i);e.Z=t=>{let{width:e,top:s,right:i,transform:a}=t,{toasts:u,removeToast:c}=(0,n.p)();return(0,r.jsx)("span",{className:o().toast_container,style:{width:e,top:s,right:i,transform:a},children:u.map(t=>(0,r.jsx)("span",{className:"".concat(o().toast," ").concat(o()[t.type]),onClick:()=>c(t.id),children:t.message},t.id))})}},4227:function(t,e,s){"use strict";s.d(e,{Q:function(){return i},n:function(){return o}});var r=s(8483),n=s(1209);let i=()=>(0,r.D)({mutationFn:async t=>(await n.be.post("/auth/email/inspect-duplicate",{email:t})).data}),o=()=>(0,r.D)({mutationFn:async t=>(await n.be.post("/auth/email/inspect",{email:t})).data})},1891:function(t,e,s){"use strict";s.d(e,{p:function(){return i}});var r=s(8333),n=s(3049);let i=()=>{let[t,e]=(0,r.FV)(n.J),s=t=>{e(e=>e.filter(e=>e.id!==t))};return{toasts:t,addToast:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=Date.now().toString();e(e=>[...e,{id:n,message:t,type:r}]),setTimeout(()=>{s(n)},3e3)},removeToast:s}}},4869:function(t,e,s){"use strict";s.d(e,{h:function(){return i}});var r=s(8483),n=s(1209);let i=()=>(0,r.D)({mutationFn:async t=>{let{email:e,code:s}=t;return(await n.et.post("/email/verify",{email:e,code:s})).data}})},436:function(t,e,s){"use strict";s.d(e,{Bb:function(){return i},gj:function(){return n}});var r=s(5461);let n=t=>r.Z.get(t),i=(t,e)=>{r.Z.set(t,e,{expires:30/1440,secure:!0,sameSite:"Strict"})}},1183:function(t,e,s){"use strict";s.d(e,{oH:function(){return i},uo:function(){return o}});let r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,n=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{6,30}$/,i=t=>t.trim()?r.test(t)?"":"앗! 이메일 주소 형식이 맞는지 다시 확인해주세요.":"이메일을 입력해주세요.",o=t=>t.trim()?n.test(t)?"":"비밀번호는 6~30자, 영문+숫자+특수문자를 포함해야 합니다.":"비밀번호를 입력해주세요."},1209:function(t,e,s){"use strict";s.d(e,{be:function(){return a},et:function(){return c},zG:function(){return l}});var r=s(1025),n=s(436),i=s(8070);let o="".concat(window.location.origin,"/api"),a=r.Z.create({baseURL:o,headers:{"Content-Type":"application/json"}});function u(t){let e=r.Z.create({baseURL:"".concat("http://180.224.28.66","/").concat(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,n.gj)("accessToken")),"X-CSRF-Token":(0,n.gj)("csrfToken")||""}});return e.interceptors.request.use(t=>{let e=(0,n.gj)("accessToken"),s=(0,n.gj)("csrfToken");return"Bearer ".concat(e)!==t.headers.Authorization&&(t.headers.Authorization="Bearer ".concat(e)),s&&(t.headers["X-CSRF-Token"]=s),t}),e}console.log("getAuthorityCookie : ","Bearer ".concat((0,n.gj)("accessToken"))),r.Z.create({baseURL:"".concat(i.env.NEXT_PUBLIC_API_URL),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,n.gj)("refreshToken")),"X-CSRF-Token":(0,n.gj)("csrfToken")||""}}).interceptors.request.use(t=>{let e=(0,n.gj)("refreshToken"),s=(0,n.gj)("csrfToken");return"Bearer ".concat(e)!==t.headers.Authorization&&(t.headers.Authorization="Bearer ".concat(e)),s&&(t.headers["X-CSRF-Token"]=s),t});let c=u("auth/");u("user/");let l=t=>{r.Z.isAxiosError(t)?t.response?console.error("API 에러:",t.response.data):t.request&&console.error("서버 응답 없음"):t instanceof Error?console.error("JavaScript Error",t.message):console.error("알 수 없는 에러 발생")}},1532:function(t,e,s){"use strict";s.d(e,{default:function(){return k}});var r=s(8392),n=s(9844),i=s.n(n),o=s(9226),a=s(4048),u=s(3131),c=s(8949),l=s(4080),p=s(2069),d=s.n(p),_=s(1183),h=s(1891),m=s(5940),f=s(4227);function g(t){let{setStep:e,setEmail:s}=t,{addToast:n}=(0,h.p)(),{mutate:i,isPending:o}=(0,f.Q)(),[a,u]=(0,c.useState)(""),[p,g]=(0,c.useState)(""),b=t=>{let{name:e,value:s}=t.target;"email"===e&&u((0,_.oH)(s)),g(s)},v=t=>{t.preventDefault(),x||i(p,{onSuccess:()=>{},onError:t=>{var r,i;e(2),s(p),(null==t?void 0:null===(r=t.response)||void 0===r?void 0:r.status)===400&&n("유효하지 않은 요청입니다.","error"),(null==t?void 0:null===(i=t.response)||void 0===i?void 0:i.status)===409&&n("이미 가입된 이메일입니다.","error")}})},x=!p.trim()||""!==a.trim()||o;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:d().form_wrap,children:[(0,r.jsxs)("strong",{className:d().main_title,children:["다시 만나서 반가워요!",(0,r.jsx)("br",{})," 로그인 후 모든 활동이 가능해요"]}),(0,r.jsx)("p",{className:d().sub_title,children:"이메일로 인증번호를 보내드릴게요!"}),(0,r.jsx)(l.II,{type:"email",name:"email",label:"이메일",placeholder:"이메일을 입력해주세요",error:a,value:p,onChange:t=>b(t),padding:"30px 0 0 0"})]}),(0,r.jsxs)("div",{className:d().form_button_wrap,children:[(0,r.jsx)(l.zx,{buttonType:"button",filled:!0,className:d().form_button,onClick:t=>v(t),disabled:x,children:"다음으로"}),(0,r.jsx)(m.Z,{width:"335px",top:"-60px",right:"50%",transform:"translateX(50%)"})]})]})}var b=s(4869);function v(t){let{setStep:e,email:s,timeLeft:n,setTimeLeft:i}=t,{addToast:o}=(0,h.p)(),{mutate:a,isPending:u,isError:p}=(0,b.h)(),[_,f]=(0,c.useState)("");(0,c.useEffect)(()=>{if(n<=0)return;let t=setTimeout(()=>i(t=>t-1),1e3);return()=>clearTimeout(t)},[n]);let g=(t,e)=>{let s=t.target.value.replace(/[^0-9]/g,""),r=_.split("");if(r[e]=s,f(r.join("")),s&&e<5){var n;null===(n=document.getElementById("code-input-".concat(e+1)))||void 0===n||n.focus()}},v=(t,e)=>{if("Backspace"===t.key&&!_[e]&&e>0){var s;null===(s=document.getElementById("code-input-".concat(e-1)))||void 0===s||s.focus()}},x=t=>{t.preventDefault(),j||a({email:s,code:_},{onSuccess:()=>{e(3)},onError:t=>{var s,r;e(3),(null==t?void 0:null===(s=t.response)||void 0===s?void 0:s.status)===400?o("유효하지 않은 요청입니다.","error"):(null==t?void 0:null===(r=t.response)||void 0===r?void 0:r.status)===401?o("인증되지 않은 이메일이거나 시간이 초과되었습니다.","error"):o("알 수 없는 오류가 발생했습니다.","error")}})},j=6!==_.length||u;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:d().form_wrap,children:[(0,r.jsxs)("strong",{className:d().main_title,children:["이메일로 전송된",(0,r.jsx)("br",{}),"인증번호 6자리를 입력해주세요!"]}),(0,r.jsx)("div",{className:d().code_input_wrap,children:[...Array(6)].map((t,e)=>(0,r.jsx)("input",{type:"text",maxLength:1,className:"".concat(d().code_input," ").concat(p?d().code_input_error:""),value:_[e]||"",id:"code-input-".concat(e),onChange:t=>g(t,e),onKeyDown:t=>v(t,e)},e))}),(0,r.jsxs)("p",{className:d().timer,children:[Math.floor(n/60),":",String(n%60).padStart(2,"0")]}),(0,r.jsxs)("p",{className:d().resend_wrap,children:[(0,r.jsx)("span",{children:"인증번호가 오지 않았나요?"}),(0,r.jsx)("button",{type:"button",disabled:u,onClick:()=>{},children:"다시 전송하기"})]})]}),(0,r.jsxs)("div",{className:d().form_button_wrap,children:[(0,r.jsx)(l.zx,{buttonType:"button",filled:!0,className:d().form_button,onClick:t=>x(t),disabled:j,children:"다음으로"}),(0,r.jsx)(m.Z,{width:"335px",top:"-60px",right:"50%",transform:"translateX(50%)"})]})]})}function x(t){let{setStep:e}=t,{addToast:s}=(0,h.p)(),[n,i]=(0,c.useState)(""),[o,a]=(0,c.useState)(""),[u,p]=(0,c.useState)(""),[f,g]=(0,c.useState)(""),b=t=>{let{name:e,value:s}=t.target;"password"===e&&(p(s),i((0,_.uo)(s))),"verifyPassword"===e&&g(s)};(0,c.useEffect)(()=>{f!==u?a("앗! 비밀번호가 일치하지 않아요"):a("")},[f]);let v=t=>{t.preventDefault(),x||(s("두줄이상 인포의 경우 두줄이상 ","info"),e(4))},x=!u.trim()||!f.trim()||""!==n.trim()||""!==o.trim();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:d().form_wrap,children:[(0,r.jsxs)("strong",{className:d().main_title,children:["마지막이에요!",(0,r.jsx)("br",{}),"사용하실 비밀번호를 입력해주세요."]}),(0,r.jsx)("p",{className:d().sub_title,children:"영문, 숫자, 특수문자를 사용하여 6자 ~ 30자로 입력해주세요!"}),(0,r.jsx)(l.II,{type:"password",name:"password",placeholder:"비밀번호를 입력해주세요",error:n,value:u,onChange:t=>b(t),padding:"30px 0 0 0"}),(0,r.jsx)(l.II,{type:"password",name:"verifyPassword",placeholder:"비밀번호를 다시 입력해주세요",error:o,value:f,onChange:t=>b(t),padding:"15px 0 0 0"})]}),(0,r.jsxs)("div",{className:d().form_button_wrap,children:[(0,r.jsx)(l.zx,{buttonType:"button",filled:!0,className:d().form_button,onClick:t=>v(t),disabled:x,children:"다음으로"}),(0,r.jsx)(m.Z,{width:"335px",top:"-60px",right:"50%",transform:"translateX(50%)"})]})]})}var j=s(9040),w=s.n(j),y=s(3809),S=s(3004);function N(){let t=(0,y.useRouter)();return(0,r.jsxs)("div",{className:w().box_wrap,children:[(0,r.jsxs)("div",{className:w().icon_wrap,children:[(0,r.jsx)(l.JO,{src:S.Z,alt:"완료 페이지 아이콘",width:90,height:90}),(0,r.jsx)("strong",{className:w().sub_title,children:"회원가입이 완료되었어요!"})]}),(0,r.jsx)("div",{className:w().button_wrap,children:(0,r.jsx)(l.zx,{buttonType:"button",filled:!0,onClick:()=>{t.push("/localLogin")},children:"로그인하러 가기"})})]})}function k(){let[t,e]=(0,c.useState)(1),[s,n]=(0,c.useState)(""),[l,p]=(0,c.useState)(299);return(0,r.jsxs)("section",{className:i().page,children:[4!==t&&(0,r.jsxs)("div",{className:i().signup_wrap,children:[(0,r.jsx)("h1",{className:i().logo_wrap,children:(0,r.jsx)(o.default,{src:a.Z,alt:"logo image",loading:"lazy",property:"public/images/logo.svg",width:69,height:51})}),(0,r.jsx)(u.Z,{totalSteps:3,currentStep:t}),1==t&&(0,r.jsx)(g,{setStep:e,setEmail:n}),2==t&&(0,r.jsx)(v,{setStep:e,email:s,timeLeft:l,setTimeLeft:p}),3==t&&(0,r.jsx)(x,{setStep:e})]}),4==t&&(0,r.jsx)(N,{})]})}},7616:function(t){t.exports={progress_bar:"progressbar_progress_bar__rFKvY",step:"progressbar_step__bWckK",active:"progressbar_active__dFAE8",inactive:"progressbar_inactive__Qyh2o"}},8347:function(t){t.exports={toast_container:"toast_toast_container__EkI_i",toast:"toast_toast__Ma_iG",success:"toast_success__0w_sH",error:"toast_error__5xCYm",info:"toast_info__UC2GW"}},9040:function(t){t.exports={box_wrap:"completed_box_wrap__Gk_Mq",icon_wrap:"completed_icon_wrap__Fbr0H",sub_title:"completed_sub_title__UDFqN",button_wrap:"completed_button_wrap__oxe2V"}},9844:function(t){t.exports={page:"signup_page__JfHlE",signup_wrap:"signup_signup_wrap___1e52",logo_wrap:"signup_logo_wrap__Ma4tt"}},2069:function(t){t.exports={form_wrap:"step_form_wrap__lz_HB",main_title:"step_main_title__2nhvY",sub_title:"step_sub_title__YYGEB",find_password:"step_find_password__T5F8v",find_password_title:"step_find_password_title__pRBgi",find_password_button:"step_find_password_button__HdU6b",form_button_wrap:"step_form_button_wrap__4l2UN",code_input_wrap:"step_code_input_wrap__3HZ9m",code_input:"step_code_input__UPAsH",code_input_error:"step_code_input_error__LwfgW",timer:"step_timer__vVuXl",resend_wrap:"step_resend_wrap__hKuc5"}},3004:function(t,e){"use strict";e.Z={src:"/_next/static/media/icon-check.dc4c24a3.svg",height:90,width:90,blurWidth:0,blurHeight:0}},4048:function(t,e){"use strict";e.Z={src:"/_next/static/media/logo.eefef4be.svg",height:34,width:46,blurWidth:0,blurHeight:0}},8483:function(t,e,s){"use strict";s.d(e,{D:function(){return p}});var r=s(8949),n=s(5183),i=s(9351),o=s(9711),a=s(840),u=class extends o.l{#t;#e=void 0;#s;#r;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#n()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,a.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,a.Ym)(e.mutationKey)!==(0,a.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#n(),this.#i(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#n(),this.#i()}mutate(t,e){return this.#r=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#n(){let t=this.#s?.state??(0,n.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#i(t){i.V.batch(()=>{if(this.#r&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#r.onSuccess?.(t.data,e,s),this.#r.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#r.onError?.(t.error,e,s),this.#r.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}},c=s(2225);function l(){}function p(t,e){var s,n;let o=(0,c.NL)(e),[a]=r.useState(()=>new u(o,t));r.useEffect(()=>{a.setOptions(t)},[a,t]);let p=r.useSyncExternalStore(r.useCallback(t=>a.subscribe(i.V.batchCalls(t)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),d=r.useCallback((t,e)=>{a.mutate(t,e).catch(l)},[a]);if(p.error&&(s=a.options.throwOnError,n=[p.error],"function"==typeof s?s(...n):!!s))throw p.error;return{...p,mutate:d,mutateAsync:p.mutate}}}},function(t){t.O(0,[900,367,869,436,982,345,80,936,904,744],function(){return t(t.s=1211)}),_N_E=t.O()}]);