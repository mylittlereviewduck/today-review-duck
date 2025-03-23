(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2882:function(t,e,s){Promise.resolve().then(s.bind(s,3070)),Promise.resolve().then(s.t.bind(s,9179,23))},3070:function(t,e,s){"use strict";s.d(e,{default:function(){return T}});var r=s(8392),i=s(8333),n=s(8949),a=s(840),o=s(9351),u=s(503),h=s(7450),c=class extends h.F{#t;#e;#s;#r;#i;#n;constructor(t){super(),this.#n=!1,this.#i=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#s=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#t=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,r=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#t,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.#i,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#s.remove(this)}setData(t,e){let s=(0,a.oE)(this.state.data,t,this.options);return this.#a({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#a({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#r?.promise;return this.#r?.cancel(t),e?e.then(a.ZT).catch(a.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,a.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#r&&(this.#n?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#a({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,r={queryKey:this.queryKey,meta:this.meta},i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#n=!0,s.signal)})};i(r);let n={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn&&this.options.queryFn!==a.CN?(this.#n=!1,this.options.persister)?this.options.persister(this.options.queryFn,r,this):this.options.queryFn(r):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};i(n),this.options.behavior?.onFetch(n,this),this.#e=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==n.fetchOptions?.meta)&&this.#a({type:"fetch",meta:n.fetchOptions?.meta});let o=t=>{(0,u.DV)(t)&&t.silent||this.#a({type:"error",error:t}),(0,u.DV)(t)||(this.#s.config.onError?.(t,this),this.#s.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#r=(0,u.Mz)({fn:n.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){o(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#s.config.onSuccess?.(t,this),this.#s.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:o,onFail:(t,e)=>{this.#a({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:n.options.retry,retryDelay:n.options.retryDelay,networkMode:n.options.networkMode,canRun:()=>!0}),this.#r.start()}#a(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":var s,r;return{...e,...(s=e.data,r=this.options,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,u.Kw)(r.networkMode)?"fetching":"paused",...void 0===s&&{error:null,status:"pending"}}),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if((0,u.DV)(i)&&i.revert&&this.#e)return{...this.#e,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),o.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:t})})}},l=s(9711),d=class extends l.l{constructor(t={}){super(),this.config=t,this.#o=new Map}#o;build(t,e,s){let r=e.queryKey,i=e.queryHash??(0,a.Rm)(r,e),n=this.get(i);return n||(n=new c({cache:this,queryKey:r,queryHash:i,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(r)}),this.add(n)),n}add(t){this.#o.has(t.queryHash)||(this.#o.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#o.get(t.queryHash);e&&(t.destroy(),e===t&&this.#o.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){o.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#o.get(t)}getAll(){return[...this.#o.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,a._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,a._x)(t,e)):e}notify(t){o.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){o.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){o.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},f=s(5183),p=class extends l.l{constructor(t={}){super(),this.config=t,this.#u=new Map,this.#h=Date.now()}#u;#h;build(t,e,s){let r=new f.m({mutationCache:this,mutationId:++this.#h,options:t.defaultMutationOptions(e),state:s});return this.add(r),r}add(t){let e=y(t),s=this.#u.get(e)??[];s.push(t),this.#u.set(e,s),this.notify({type:"added",mutation:t})}remove(t){let e=y(t);if(this.#u.has(e)){let s=this.#u.get(e)?.filter(e=>e!==t);s&&(0===s.length?this.#u.delete(e):this.#u.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#u.get(y(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#u.get(y(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){o.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#u.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,a.X7)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,a.X7)(t,e))}notify(t){o.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return o.V.batch(()=>Promise.all(t.map(t=>t.continue().catch(a.ZT))))}};function y(t){return t.options.scope?.id??String(t.mutationId)}var m=s(6648),g=s(833);function v(t,{pages:e,pageParams:s}){let r=e.length-1;return t.getNextPageParam(e[r],e,s[r],s)}var b=class{#c;#l;#i;#d;#f;#p;#y;#m;constructor(t={}){this.#c=t.queryCache||new d,this.#l=t.mutationCache||new p,this.#i=t.defaultOptions||{},this.#d=new Map,this.#f=new Map,this.#p=0}mount(){this.#p++,1===this.#p&&(this.#y=m.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#c.onFocus())}),this.#m=g.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#c.onOnline())}))}unmount(){this.#p--,0===this.#p&&(this.#y?.(),this.#y=void 0,this.#m?.(),this.#m=void 0)}isFetching(t){return this.#c.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#l.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#c.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),r=this.#c.build(this,s);return t.revalidateIfStale&&r.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#c.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let r=this.defaultQueryOptions({queryKey:t}),i=this.#c.get(r.queryHash),n=i?.state.data,o=(0,a.SE)(e,n);if(void 0!==o)return this.#c.build(this,r).setData(o,{...s,manual:!0})}setQueriesData(t,e,s){return o.V.batch(()=>this.#c.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#c.get(e.queryHash)?.state}removeQueries(t){let e=this.#c;o.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#c,r={type:"active",...t};return o.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(o.V.batch(()=>this.#c.findAll(t).map(t=>t.cancel(s)))).then(a.ZT).catch(a.ZT)}invalidateQueries(t={},e={}){return o.V.batch(()=>{if(this.#c.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(o.V.batch(()=>this.#c.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(a.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(a.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#c.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(a.ZT).catch(a.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let r=async()=>{let s;let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},c=t.options.queryFn&&t.options.queryFn!==a.CN?t.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),l=async(e,s,r)=>{if(u)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let i={queryKey:t.queryKey,pageParam:s,direction:r?"backward":"forward",meta:t.options.meta};h(i);let n=await c(i),{maxPages:o}=t.options,l=r?a.Ht:a.VX;return{pages:l(e.pages,n,o),pageParams:l(e.pageParams,s,o)}};if(i&&n.length){let t="backward"===i,e={pages:n,pageParams:o},a=(t?function(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}:v)(r,e);s=await l(e,a,t)}else{s=await l({pages:[],pageParams:[]},o[0]??r.initialPageParam);let t=e??n.length;for(let e=1;e<t;e++){let t=v(r,s);s=await l(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=r}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(a.ZT).catch(a.ZT)}resumePausedMutations(){return g.N.isOnline()?this.#l.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#c}getMutationCache(){return this.#l}getDefaultOptions(){return this.#i}setDefaultOptions(t){this.#i=t}setQueryDefaults(t,e){this.#d.set((0,a.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#d.values()],s={};return e.forEach(e=>{(0,a.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#f.set((0,a.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#f.values()],s={};return e.forEach(e=>{(0,a.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#i.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,a.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===a.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#i.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#c.clear(),this.#l.clear()}},q=s(2225),C=function(){return null},O=s(1209);function T(t){let{children:e}=t,[s]=(0,n.useState)(new b({defaultOptions:{queries:{refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1},mutations:{onError:t=>(0,O.zG)(t)}}}));return(0,r.jsx)(i.Wh,{children:(0,r.jsxs)(q.aH,{client:s,children:[e,(0,r.jsx)(C,{initialIsOpen:!0})]})})}},436:function(t,e,s){"use strict";s.d(e,{Bb:function(){return n},gj:function(){return i}});var r=s(5461);let i=t=>r.Z.get(t),n=(t,e)=>{r.Z.set(t,e,{expires:30/1440,secure:!0,sameSite:"Strict"})}},1209:function(t,e,s){"use strict";s.d(e,{be:function(){return o},et:function(){return h},zG:function(){return c}});var r=s(1025),i=s(436),n=s(8070);let a="".concat(window.location.origin,"/api"),o=r.Z.create({baseURL:a,headers:{"Content-Type":"application/json"}});function u(t){let e=r.Z.create({baseURL:"".concat("http://180.224.28.66","/").concat(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.gj)("accessToken")),"X-CSRF-Token":(0,i.gj)("csrfToken")||""}});return e.interceptors.request.use(t=>{let e=(0,i.gj)("accessToken"),s=(0,i.gj)("csrfToken");return"Bearer ".concat(e)!==t.headers.Authorization&&(t.headers.Authorization="Bearer ".concat(e)),s&&(t.headers["X-CSRF-Token"]=s),t}),e}console.log("getAuthorityCookie : ","Bearer ".concat((0,i.gj)("accessToken"))),r.Z.create({baseURL:"".concat(n.env.NEXT_PUBLIC_API_URL),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.gj)("refreshToken")),"X-CSRF-Token":(0,i.gj)("csrfToken")||""}}).interceptors.request.use(t=>{let e=(0,i.gj)("refreshToken"),s=(0,i.gj)("csrfToken");return"Bearer ".concat(e)!==t.headers.Authorization&&(t.headers.Authorization="Bearer ".concat(e)),s&&(t.headers["X-CSRF-Token"]=s),t});let h=u("auth/");u("user/");let c=t=>{r.Z.isAxiosError(t)?t.response?console.error("API 에러:",t.response.data):t.request&&console.error("서버 응답 없음"):t instanceof Error?console.error("JavaScript Error",t.message):console.error("알 수 없는 에러 발생")}},9179:function(){},8070:function(t){var e,s,r,i=t.exports={};function n(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(t){if(e===setTimeout)return setTimeout(t,0);if((e===n||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(s){try{return e.call(null,t,0)}catch(s){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:n}catch(t){e=n}try{s="function"==typeof clearTimeout?clearTimeout:a}catch(t){s=a}}();var u=[],h=!1,c=-1;function l(){h&&r&&(h=!1,r.length?u=r.concat(u):c=-1,u.length&&d())}function d(){if(!h){var t=o(l);h=!0;for(var e=u.length;e;){for(r=u,u=[];++c<e;)r&&r[c].run();c=-1,e=u.length}r=null,h=!1,function(t){if(s===clearTimeout)return clearTimeout(t);if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)e[s-1]=arguments[s];u.push(new f(t,e)),1!==u.length||h||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},function(t){t.O(0,[46,436,345,936,904,744],function(){return t(t.s=2882)}),_N_E=t.O()}]);