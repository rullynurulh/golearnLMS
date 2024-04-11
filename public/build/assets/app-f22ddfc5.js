/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ch(r,s){const l=new Set(r.split(","));return s?h=>l.has(h.toLowerCase()):h=>l.has(h)}const ye={},ia=[],An=()=>{},cR=()=>!1,Al=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&(r.charCodeAt(2)>122||r.charCodeAt(2)<97),lb=r=>r.startsWith("onUpdate:"),Le=Object.assign,db=(r,s)=>{const l=r.indexOf(s);l>-1&&r.splice(l,1)},lR=Object.prototype.hasOwnProperty,me=(r,s)=>lR.call(r,s),zt=Array.isArray,ra=r=>Da(r)==="[object Map]",ps=r=>Da(r)==="[object Set]",L1=r=>Da(r)==="[object Date]",dR=r=>Da(r)==="[object RegExp]",Zt=r=>typeof r=="function",Oe=r=>typeof r=="string",or=r=>typeof r=="symbol",Ie=r=>r!==null&&typeof r=="object",ub=r=>(Ie(r)||Zt(r))&&Zt(r.then)&&Zt(r.catch),Bx=Object.prototype.toString,Da=r=>Bx.call(r),uR=r=>Da(r).slice(8,-1),Nx=r=>Da(r)==="[object Object]",hb=r=>Oe(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,sa=Ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vh=r=>{const s=Object.create(null);return l=>s[l]||(s[l]=r(l))},hR=/-(\w)/g,Cn=vh(r=>r.replace(hR,(s,l)=>l?l.toUpperCase():"")),pR=/\B([A-Z])/g,Gn=vh(r=>r.replace(pR,"-$1").toLowerCase()),Cl=vh(r=>r.charAt(0).toUpperCase()+r.slice(1)),Xc=vh(r=>r?`on${Cl(r)}`:""),Eo=(r,s)=>!Object.is(r,s),aa=(r,s)=>{for(let l=0;l<r.length;l++)r[l](s)},oh=(r,s,l)=>{Object.defineProperty(r,s,{configurable:!0,enumerable:!1,value:l})},dl=r=>{const s=parseFloat(r);return isNaN(s)?r:s},ih=r=>{const s=Oe(r)?Number(r):NaN;return isNaN(s)?r:s};let R1;const pb=()=>R1||(R1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gR="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",fR=Ch(gR);function vl(r){if(zt(r)){const s={};for(let l=0;l<r.length;l++){const h=r[l],p=Oe(h)?wR(h):vl(h);if(p)for(const m in p)s[m]=p[m]}return s}else if(Oe(r)||Ie(r))return r}const mR=/;(?![^(]*\))/g,bR=/:([^]+)/,kR=/\/\*[^]*?\*\//g;function wR(r){const s={};return r.replace(kR,"").split(mR).forEach(l=>{if(l){const h=l.split(bR);h.length>1&&(s[h[0].trim()]=h[1].trim())}}),s}function vn(r){let s="";if(Oe(r))s=r;else if(zt(r))for(let l=0;l<r.length;l++){const h=vn(r[l]);h&&(s+=h+" ")}else if(Ie(r))for(const l in r)r[l]&&(s+=l+" ");return s.trim()}function _R(r){if(!r)return null;let{class:s,style:l}=r;return s&&!Oe(s)&&(r.class=vn(s)),l&&(r.style=vl(l)),r}const AR="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",CR=Ch(AR);function Px(r){return!!r||r===""}function vR(r,s){if(r.length!==s.length)return!1;let l=!0;for(let h=0;l&&h<r.length;h++)l=ir(r[h],s[h]);return l}function ir(r,s){if(r===s)return!0;let l=L1(r),h=L1(s);if(l||h)return l&&h?r.getTime()===s.getTime():!1;if(l=or(r),h=or(s),l||h)return r===s;if(l=zt(r),h=zt(s),l||h)return l&&h?vR(r,s):!1;if(l=Ie(r),h=Ie(s),l||h){if(!l||!h)return!1;const p=Object.keys(r).length,m=Object.keys(s).length;if(p!==m)return!1;for(const k in r){const _=r.hasOwnProperty(k),b=s.hasOwnProperty(k);if(_&&!b||!_&&b||!ir(r[k],s[k]))return!1}}return String(r)===String(s)}function yh(r,s){return r.findIndex(l=>ir(l,s))}const Yt=r=>Oe(r)?r:r==null?"":zt(r)||Ie(r)&&(r.toString===Bx||!Zt(r.toString))?JSON.stringify(r,Ox,2):String(r),Ox=(r,s)=>s&&s.__v_isRef?Ox(r,s.value):ra(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((l,[h,p],m)=>(l[Qf(h,m)+" =>"]=p,l),{})}:ps(s)?{[`Set(${s.size})`]:[...s.values()].map(l=>Qf(l))}:or(s)?Qf(s):Ie(s)&&!zt(s)&&!Nx(s)?String(s):s,Qf=(r,s="")=>{var l;return or(r)?`Symbol(${(l=r.description)!=null?l:s})`:r};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qn;class gb{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qn,!s&&qn&&(this.index=(qn.scopes||(qn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const l=qn;try{return qn=this,s()}finally{qn=l}}}on(){qn=this}off(){qn=this.parent}stop(s){if(this._active){let l,h;for(l=0,h=this.effects.length;l<h;l++)this.effects[l].stop();for(l=0,h=this.cleanups.length;l<h;l++)this.cleanups[l]();if(this.scopes)for(l=0,h=this.scopes.length;l<h;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!s){const p=this.parent.scopes.pop();p&&p!==this&&(this.parent.scopes[this.index]=p,p.index=this.index)}this.parent=void 0,this._active=!1}}}function yR(r){return new gb(r)}function Lx(r,s=qn){s&&s.active&&s.effects.push(r)}function Rx(){return qn}function ER(r){qn&&qn.cleanups.push(r)}let Jr;class ga{constructor(s,l,h,p){this.fn=s,this.trigger=l,this.scheduler=h,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Lx(this,p)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,dr();for(let s=0;s<this._depsLength;s++){const l=this.deps[s];if(l.computed&&(xR(l.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ur()}return this._dirtyLevel>=4}set dirty(s){this._dirtyLevel=s?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let s=tr,l=Jr;try{return tr=!0,Jr=this,this._runnings++,z1(this),this.fn()}finally{j1(this),this._runnings--,Jr=l,tr=s}}stop(){var s;this.active&&(z1(this),j1(this),(s=this.onStop)==null||s.call(this),this.active=!1)}}function xR(r){return r.value}function z1(r){r._trackId++,r._depsLength=0}function j1(r){if(r.deps.length>r._depsLength){for(let s=r._depsLength;s<r.deps.length;s++)zx(r.deps[s],r);r.deps.length=r._depsLength}}function zx(r,s){const l=r.get(s);l!==void 0&&s._trackId!==l&&(r.delete(s),r.size===0&&r.cleanup())}function DR(r,s){r.effect instanceof ga&&(r=r.effect.fn);const l=new ga(r,An,()=>{l.dirty&&l.run()});s&&(Le(l,s),s.scope&&Lx(l,s.scope)),(!s||!s.lazy)&&l.run();const h=l.run.bind(l);return h.effect=l,h}function TR(r){r.effect.stop()}let tr=!0,Tm=0;const jx=[];function dr(){jx.push(tr),tr=!1}function ur(){const r=jx.pop();tr=r===void 0?!0:r}function fb(){Tm++}function mb(){for(Tm--;!Tm&&Sm.length;)Sm.shift()()}function Fx(r,s,l){if(s.get(r)!==r._trackId){s.set(r,r._trackId);const h=r.deps[r._depsLength];h!==s?(h&&zx(h,r),r.deps[r._depsLength++]=s):r._depsLength++}}const Sm=[];function Vx(r,s,l){fb();for(const h of r.keys()){let p;h._dirtyLevel<s&&(p??(p=r.get(h)===h._trackId))&&(h._shouldSchedule||(h._shouldSchedule=h._dirtyLevel===0),h._dirtyLevel=s),h._shouldSchedule&&(p??(p=r.get(h)===h._trackId))&&(h.trigger(),(!h._runnings||h.allowRecurse)&&h._dirtyLevel!==2&&(h._shouldSchedule=!1,h.scheduler&&Sm.push(h.scheduler)))}mb()}const Hx=(r,s)=>{const l=new Map;return l.cleanup=r,l.computed=s,l},rh=new WeakMap,Xr=Symbol(""),Im=Symbol("");function jn(r,s,l){if(tr&&Jr){let h=rh.get(r);h||rh.set(r,h=new Map);let p=h.get(l);p||h.set(l,p=Hx(()=>h.delete(l))),Fx(Jr,p)}}function gi(r,s,l,h,p,m){const k=rh.get(r);if(!k)return;let _=[];if(s==="clear")_=[...k.values()];else if(l==="length"&&zt(r)){const b=Number(h);k.forEach((D,x)=>{(x==="length"||!or(x)&&x>=b)&&_.push(D)})}else switch(l!==void 0&&_.push(k.get(l)),s){case"add":zt(r)?hb(l)&&_.push(k.get("length")):(_.push(k.get(Xr)),ra(r)&&_.push(k.get(Im)));break;case"delete":zt(r)||(_.push(k.get(Xr)),ra(r)&&_.push(k.get(Im)));break;case"set":ra(r)&&_.push(k.get(Xr));break}fb();for(const b of _)b&&Vx(b,4);mb()}function SR(r,s){var l;return(l=rh.get(r))==null?void 0:l.get(s)}const IR=Ch("__proto__,__v_isRef,__isVue"),$x=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(or)),F1=MR();function MR(){const r={};return["includes","indexOf","lastIndexOf"].forEach(s=>{r[s]=function(...l){const h=ce(this);for(let m=0,k=this.length;m<k;m++)jn(h,"get",m+"");const p=h[s](...l);return p===-1||p===!1?h[s](...l.map(ce)):p}}),["push","pop","shift","unshift","splice"].forEach(s=>{r[s]=function(...l){dr(),fb();const h=ce(this)[s].apply(this,l);return mb(),ur(),h}}),r}function BR(r){const s=ce(this);return jn(s,"has",r),s.hasOwnProperty(r)}class Ux{constructor(s=!1,l=!1){this._isReadonly=s,this._isShallow=l}get(s,l,h){const p=this._isReadonly,m=this._isShallow;if(l==="__v_isReactive")return!p;if(l==="__v_isReadonly")return p;if(l==="__v_isShallow")return m;if(l==="__v_raw")return h===(p?m?Qx:Yx:m?Kx:Gx).get(s)||Object.getPrototypeOf(s)===Object.getPrototypeOf(h)?s:void 0;const k=zt(s);if(!p){if(k&&me(F1,l))return Reflect.get(F1,l,h);if(l==="hasOwnProperty")return BR}const _=Reflect.get(s,l,h);return(or(l)?$x.has(l):IR(l))||(p||jn(s,"get",l),m)?_:rn(_)?k&&hb(l)?_:_.value:Ie(_)?p?wb(_):yl(_):_}}class qx extends Ux{constructor(s=!1){super(!1,s)}set(s,l,h,p){let m=s[l];if(!this._isShallow){const b=is(m);if(!ul(h)&&!is(h)&&(m=ce(m),h=ce(h)),!zt(s)&&rn(m)&&!rn(h))return b?!1:(m.value=h,!0)}const k=zt(s)&&hb(l)?Number(l)<s.length:me(s,l),_=Reflect.set(s,l,h,p);return s===ce(p)&&(k?Eo(h,m)&&gi(s,"set",l,h):gi(s,"add",l,h)),_}deleteProperty(s,l){const h=me(s,l);s[l];const p=Reflect.deleteProperty(s,l);return p&&h&&gi(s,"delete",l,void 0),p}has(s,l){const h=Reflect.has(s,l);return(!or(l)||!$x.has(l))&&jn(s,"has",l),h}ownKeys(s){return jn(s,"iterate",zt(s)?"length":Xr),Reflect.ownKeys(s)}}class Wx extends Ux{constructor(s=!1){super(!0,s)}set(s,l){return!0}deleteProperty(s,l){return!0}}const NR=new qx,PR=new Wx,OR=new qx(!0),LR=new Wx(!0),bb=r=>r,Eh=r=>Reflect.getPrototypeOf(r);function Su(r,s,l=!1,h=!1){r=r.__v_raw;const p=ce(r),m=ce(s);l||(Eo(s,m)&&jn(p,"get",s),jn(p,"get",m));const{has:k}=Eh(p),_=h?bb:l?Cb:hl;if(k.call(p,s))return _(r.get(s));if(k.call(p,m))return _(r.get(m));r!==p&&r.get(s)}function Iu(r,s=!1){const l=this.__v_raw,h=ce(l),p=ce(r);return s||(Eo(r,p)&&jn(h,"has",r),jn(h,"has",p)),r===p?l.has(r):l.has(r)||l.has(p)}function Mu(r,s=!1){return r=r.__v_raw,!s&&jn(ce(r),"iterate",Xr),Reflect.get(r,"size",r)}function V1(r){r=ce(r);const s=ce(this);return Eh(s).has.call(s,r)||(s.add(r),gi(s,"add",r,r)),this}function H1(r,s){s=ce(s);const l=ce(this),{has:h,get:p}=Eh(l);let m=h.call(l,r);m||(r=ce(r),m=h.call(l,r));const k=p.call(l,r);return l.set(r,s),m?Eo(s,k)&&gi(l,"set",r,s):gi(l,"add",r,s),this}function $1(r){const s=ce(this),{has:l,get:h}=Eh(s);let p=l.call(s,r);p||(r=ce(r),p=l.call(s,r)),h&&h.call(s,r);const m=s.delete(r);return p&&gi(s,"delete",r,void 0),m}function U1(){const r=ce(this),s=r.size!==0,l=r.clear();return s&&gi(r,"clear",void 0,void 0),l}function Bu(r,s){return function(h,p){const m=this,k=m.__v_raw,_=ce(k),b=s?bb:r?Cb:hl;return!r&&jn(_,"iterate",Xr),k.forEach((D,x)=>h.call(p,b(D),b(x),m))}}function Nu(r,s,l){return function(...h){const p=this.__v_raw,m=ce(p),k=ra(m),_=r==="entries"||r===Symbol.iterator&&k,b=r==="keys"&&k,D=p[r](...h),x=l?bb:s?Cb:hl;return!s&&jn(m,"iterate",b?Im:Xr),{next(){const{value:y,done:A}=D.next();return A?{value:y,done:A}:{value:_?[x(y[0]),x(y[1])]:x(y),done:A}},[Symbol.iterator](){return this}}}}function Fi(r){return function(...s){return r==="delete"?!1:r==="clear"?void 0:this}}function RR(){const r={get(m){return Su(this,m)},get size(){return Mu(this)},has:Iu,add:V1,set:H1,delete:$1,clear:U1,forEach:Bu(!1,!1)},s={get(m){return Su(this,m,!1,!0)},get size(){return Mu(this)},has:Iu,add:V1,set:H1,delete:$1,clear:U1,forEach:Bu(!1,!0)},l={get(m){return Su(this,m,!0)},get size(){return Mu(this,!0)},has(m){return Iu.call(this,m,!0)},add:Fi("add"),set:Fi("set"),delete:Fi("delete"),clear:Fi("clear"),forEach:Bu(!0,!1)},h={get(m){return Su(this,m,!0,!0)},get size(){return Mu(this,!0)},has(m){return Iu.call(this,m,!0)},add:Fi("add"),set:Fi("set"),delete:Fi("delete"),clear:Fi("clear"),forEach:Bu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{r[m]=Nu(m,!1,!1),l[m]=Nu(m,!0,!1),s[m]=Nu(m,!1,!0),h[m]=Nu(m,!0,!0)}),[r,l,s,h]}const[zR,jR,FR,VR]=RR();function xh(r,s){const l=s?r?VR:FR:r?jR:zR;return(h,p,m)=>p==="__v_isReactive"?!r:p==="__v_isReadonly"?r:p==="__v_raw"?h:Reflect.get(me(l,p)&&p in h?l:h,p,m)}const HR={get:xh(!1,!1)},$R={get:xh(!1,!0)},UR={get:xh(!0,!1)},qR={get:xh(!0,!0)},Gx=new WeakMap,Kx=new WeakMap,Yx=new WeakMap,Qx=new WeakMap;function WR(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GR(r){return r.__v_skip||!Object.isExtensible(r)?0:WR(uR(r))}function yl(r){return is(r)?r:Dh(r,!1,NR,HR,Gx)}function kb(r){return Dh(r,!1,OR,$R,Kx)}function wb(r){return Dh(r,!0,PR,UR,Yx)}function KR(r){return Dh(r,!0,LR,qR,Qx)}function Dh(r,s,l,h,p){if(!Ie(r)||r.__v_raw&&!(s&&r.__v_isReactive))return r;const m=p.get(r);if(m)return m;const k=GR(r);if(k===0)return r;const _=new Proxy(r,k===2?h:l);return p.set(r,_),_}function ts(r){return is(r)?ts(r.__v_raw):!!(r&&r.__v_isReactive)}function is(r){return!!(r&&r.__v_isReadonly)}function ul(r){return!!(r&&r.__v_isShallow)}function _b(r){return ts(r)||is(r)}function ce(r){const s=r&&r.__v_raw;return s?ce(s):r}function Ab(r){return Object.isExtensible(r)&&oh(r,"__v_skip",!0),r}const hl=r=>Ie(r)?yl(r):r,Cb=r=>Ie(r)?wb(r):r;class Zx{constructor(s,l,h,p){this.getter=s,this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ga(()=>s(this._value),()=>ca(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!p,this.__v_isReadonly=h}get value(){const s=ce(this);return(!s._cacheable||s.effect.dirty)&&Eo(s._value,s._value=s.effect.run())&&ca(s,4),vb(s),s.effect._dirtyLevel>=2&&ca(s,2),s._value}set value(s){this._setter(s)}get _dirty(){return this.effect.dirty}set _dirty(s){this.effect.dirty=s}}function YR(r,s,l=!1){let h,p;const m=Zt(r);return m?(h=r,p=An):(h=r.get,p=r.set),new Zx(h,p,m||!p,l)}function vb(r){var s;tr&&Jr&&(r=ce(r),Fx(Jr,(s=r.dep)!=null?s:r.dep=Hx(()=>r.dep=void 0,r instanceof Zx?r:void 0)))}function ca(r,s=4,l){r=ce(r);const h=r.dep;h&&Vx(h,s)}function rn(r){return!!(r&&r.__v_isRef===!0)}function la(r){return Xx(r,!1)}function Jx(r){return Xx(r,!0)}function Xx(r,s){return rn(r)?r:new QR(r,s)}class QR{constructor(s,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?s:ce(s),this._value=l?s:hl(s)}get value(){return vb(this),this._value}set value(s){const l=this.__v_isShallow||ul(s)||is(s);s=l?s:ce(s),Eo(s,this._rawValue)&&(this._rawValue=s,this._value=l?s:hl(s),ca(this,4))}}function ZR(r){ca(r,4)}function er(r){return rn(r)?r.value:r}function JR(r){return Zt(r)?r():er(r)}const XR={get:(r,s,l)=>er(Reflect.get(r,s,l)),set:(r,s,l,h)=>{const p=r[s];return rn(p)&&!rn(l)?(p.value=l,!0):Reflect.set(r,s,l,h)}};function yb(r){return ts(r)?r:new Proxy(r,XR)}class tz{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:h}=s(()=>vb(this),()=>ca(this));this._get=l,this._set=h}get value(){return this._get()}set value(s){this._set(s)}}function t2(r){return new tz(r)}function ez(r){const s=zt(r)?new Array(r.length):{};for(const l in r)s[l]=e2(r,l);return s}class nz{constructor(s,l,h){this._object=s,this._key=l,this._defaultValue=h,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return SR(ce(this._object),this._key)}}class oz{constructor(s){this._getter=s,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function iz(r,s,l){return rn(r)?r:Zt(r)?new oz(r):Ie(r)&&arguments.length>1?e2(r,s,l):la(r)}function e2(r,s,l){const h=r[s];return rn(h)?h:new nz(r,s,l)}const rz={GET:"get",HAS:"has",ITERATE:"iterate"},sz={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const tl=[];function qr(r,...s){dr();const l=tl.length?tl[tl.length-1].component:null,h=l&&l.appContext.config.warnHandler,p=az();if(h)Ro(h,l,11,[r+s.map(m=>{var k,_;return(_=(k=m.toString)==null?void 0:k.call(m))!=null?_:JSON.stringify(m)}).join(""),l&&l.proxy,p.map(({vnode:m})=>`at <${J2(l,m.type)}>`).join(`
`),p]);else{const m=[`[Vue warn]: ${r}`,...s];p.length&&m.push(`
`,...cz(p)),console.warn(...m)}ur()}function az(){let r=tl[tl.length-1];if(!r)return[];const s=[];for(;r;){const l=s[0];l&&l.vnode===r?l.recurseCount++:s.push({vnode:r,recurseCount:0});const h=r.component&&r.component.parent;r=h&&h.vnode}return s}function cz(r){const s=[];return r.forEach((l,h)=>{s.push(...h===0?[]:[`
`],...lz(l))}),s}function lz({vnode:r,recurseCount:s}){const l=s>0?`... (${s} recursive calls)`:"",h=r.component?r.component.parent==null:!1,p=` at <${J2(r.component,r.type,h)}`,m=">"+l;return r.props?[p,...dz(r.props),m]:[p+m]}function dz(r){const s=[],l=Object.keys(r);return l.slice(0,3).forEach(h=>{s.push(...n2(h,r[h]))}),l.length>3&&s.push(" ..."),s}function n2(r,s,l){return Oe(s)?(s=JSON.stringify(s),l?s:[`${r}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?l?s:[`${r}=${s}`]:rn(s)?(s=n2(r,ce(s.value),!0),l?s:[`${r}=Ref<`,s,">"]):Zt(s)?[`${r}=fn${s.name?`<${s.name}>`:""}`]:(s=ce(s),l?s:[`${r}=`,s])}function uz(r,s){}const hz={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},pz={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Ro(r,s,l,h){try{return h?r(...h):r()}catch(p){gs(p,s,l)}}function Kn(r,s,l,h){if(Zt(r)){const m=Ro(r,s,l,h);return m&&ub(m)&&m.catch(k=>{gs(k,s,l)}),m}const p=[];for(let m=0;m<r.length;m++)p.push(Kn(r[m],s,l,h));return p}function gs(r,s,l,h=!0){const p=s?s.vnode:null;if(s){let m=s.parent;const k=s.proxy,_=`https://vuejs.org/error-reference/#runtime-${l}`;for(;m;){const D=m.ec;if(D){for(let x=0;x<D.length;x++)if(D[x](r,k,_)===!1)return}m=m.parent}const b=s.appContext.config.errorHandler;if(b){Ro(b,null,10,[r,k,_]);return}}gz(r,l,p,h)}function gz(r,s,l,h=!0){console.error(r)}let pl=!1,Mm=!1;const hn=[];let Oo=0;const da=[];let Ki=null,Kr=0;const o2=Promise.resolve();let Eb=null;function El(r){const s=Eb||o2;return r?s.then(this?r.bind(this):r):s}function fz(r){let s=Oo+1,l=hn.length;for(;s<l;){const h=s+l>>>1,p=hn[h],m=gl(p);m<r||m===r&&p.pre?s=h+1:l=h}return s}function Th(r){(!hn.length||!hn.includes(r,pl&&r.allowRecurse?Oo+1:Oo))&&(r.id==null?hn.push(r):hn.splice(fz(r.id),0,r),i2())}function i2(){!pl&&!Mm&&(Mm=!0,Eb=o2.then(r2))}function mz(r){const s=hn.indexOf(r);s>Oo&&hn.splice(s,1)}function sh(r){zt(r)?da.push(...r):(!Ki||!Ki.includes(r,r.allowRecurse?Kr+1:Kr))&&da.push(r),i2()}function q1(r,s,l=pl?Oo+1:0){for(;l<hn.length;l++){const h=hn[l];if(h&&h.pre){if(r&&h.id!==r.uid)continue;hn.splice(l,1),l--,h()}}}function ah(r){if(da.length){const s=[...new Set(da)].sort((l,h)=>gl(l)-gl(h));if(da.length=0,Ki){Ki.push(...s);return}for(Ki=s,Kr=0;Kr<Ki.length;Kr++)Ki[Kr]();Ki=null,Kr=0}}const gl=r=>r.id==null?1/0:r.id,bz=(r,s)=>{const l=gl(r)-gl(s);if(l===0){if(r.pre&&!s.pre)return-1;if(s.pre&&!r.pre)return 1}return l};function r2(r){Mm=!1,pl=!0,hn.sort(bz);const s=An;try{for(Oo=0;Oo<hn.length;Oo++){const l=hn[Oo];l&&l.active!==!1&&Ro(l,null,14)}}finally{Oo=0,hn.length=0,ah(),pl=!1,Eb=null,(hn.length||da.length)&&r2()}}let Js,Pu=[];function s2(r,s){var l,h;Js=r,Js?(Js.enabled=!0,Pu.forEach(({event:p,args:m})=>Js.emit(p,...m)),Pu=[]):typeof window<"u"&&window.HTMLElement&&!((h=(l=window.navigator)==null?void 0:l.userAgent)!=null&&h.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{s2(m,s)}),setTimeout(()=>{Js||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Pu=[])},3e3)):Pu=[]}function kz(r,s,...l){if(r.isUnmounted)return;const h=r.vnode.props||ye;let p=l;const m=s.startsWith("update:"),k=m&&s.slice(7);if(k&&k in h){const x=`${k==="modelValue"?"model":k}Modifiers`,{number:y,trim:A}=h[x]||ye;A&&(p=l.map(S=>Oe(S)?S.trim():S)),y&&(p=l.map(dl))}let _,b=h[_=Xc(s)]||h[_=Xc(Cn(s))];!b&&m&&(b=h[_=Xc(Gn(s))]),b&&Kn(b,r,6,p);const D=h[_+"Once"];if(D){if(!r.emitted)r.emitted={};else if(r.emitted[_])return;r.emitted[_]=!0,Kn(D,r,6,p)}}function a2(r,s,l=!1){const h=s.emitsCache,p=h.get(r);if(p!==void 0)return p;const m=r.emits;let k={},_=!1;if(!Zt(r)){const b=D=>{const x=a2(D,s,!0);x&&(_=!0,Le(k,x))};!l&&s.mixins.length&&s.mixins.forEach(b),r.extends&&b(r.extends),r.mixins&&r.mixins.forEach(b)}return!m&&!_?(Ie(r)&&h.set(r,null),null):(zt(m)?m.forEach(b=>k[b]=null):Le(k,m),Ie(r)&&h.set(r,k),k)}function Sh(r,s){return!r||!Al(s)?!1:(s=s.slice(2).replace(/Once$/,""),me(r,s[0].toLowerCase()+s.slice(1))||me(r,Gn(s))||me(r,s))}let Ye=null,Ih=null;function fl(r){const s=Ye;return Ye=r,Ih=r&&r.type.__scopeId||null,s}function wz(r){Ih=r}function _z(){Ih=null}const Az=r=>yo;function yo(r,s=Ye,l){if(!s||r._n)return r;const h=(...p)=>{h._d&&Fm(-1);const m=fl(s);let k;try{k=r(...p)}finally{fl(m),h._d&&Fm(1)}return k};return h._n=!0,h._c=!0,h._d=!0,h}function Ku(r){const{type:s,vnode:l,proxy:h,withProxy:p,props:m,propsOptions:[k],slots:_,attrs:b,emit:D,render:x,renderCache:y,data:A,setupState:S,ctx:N,inheritAttrs:O}=r;let j,G;const W=fl(r);try{if(l.shapeFlag&4){const H=p||h,Q=H;j=Wn(x.call(Q,H,y,m,S,A,N)),G=b}else{const H=s;j=Wn(H.length>1?H(m,{attrs:b,slots:_,emit:D}):H(m,null)),G=s.props?b:vz(b)}}catch(H){il.length=0,gs(H,r,1),j=he(gn)}let F=j;if(G&&O!==!1){const H=Object.keys(G),{shapeFlag:Q}=F;H.length&&Q&7&&(k&&H.some(lb)&&(G=yz(G,k)),F=Vo(F,G))}return l.dirs&&(F=Vo(F),F.dirs=F.dirs?F.dirs.concat(l.dirs):l.dirs),l.transition&&(F.transition=l.transition),j=F,fl(W),j}function Cz(r,s=!0){let l;for(let h=0;h<r.length;h++){const p=r[h];if(rr(p)){if(p.type!==gn||p.children==="v-if"){if(l)return;l=p}}else return}return l}const vz=r=>{let s;for(const l in r)(l==="class"||l==="style"||Al(l))&&((s||(s={}))[l]=r[l]);return s},yz=(r,s)=>{const l={};for(const h in r)(!lb(h)||!(h.slice(9)in s))&&(l[h]=r[h]);return l};function Ez(r,s,l){const{props:h,children:p,component:m}=r,{props:k,children:_,patchFlag:b}=s,D=m.emitsOptions;if(s.dirs||s.transition)return!0;if(l&&b>=0){if(b&1024)return!0;if(b&16)return h?W1(h,k,D):!!k;if(b&8){const x=s.dynamicProps;for(let y=0;y<x.length;y++){const A=x[y];if(k[A]!==h[A]&&!Sh(D,A))return!0}}}else return(p||_)&&(!_||!_.$stable)?!0:h===k?!1:h?k?W1(h,k,D):!0:!!k;return!1}function W1(r,s,l){const h=Object.keys(s);if(h.length!==Object.keys(r).length)return!0;for(let p=0;p<h.length;p++){const m=h[p];if(s[m]!==r[m]&&!Sh(l,m))return!0}return!1}function xb({vnode:r,parent:s},l){for(;s;){const h=s.subTree;if(h.suspense&&h.suspense.activeBranch===r&&(h.el=r.el),h===r)(r=s.vnode).el=l,s=s.parent;else break}}const Db="components",xz="directives";function _n(r,s){return Tb(Db,r,!0,s)||r}const c2=Symbol.for("v-ndc");function Dz(r){return Oe(r)?Tb(Db,r,!1)||r:r||c2}function Tz(r){return Tb(xz,r)}function Tb(r,s,l=!0,h=!1){const p=Ye||tn;if(p){const m=p.type;if(r===Db){const _=hh(m,!1);if(_&&(_===s||_===Cn(s)||_===Cl(Cn(s))))return m}const k=G1(p[r]||m[r],s)||G1(p.appContext[r],s);return!k&&h?m:k}}function G1(r,s){return r&&(r[s]||r[Cn(s)]||r[Cl(Cn(s))])}const l2=r=>r.__isSuspense;let Bm=0;const Sz={name:"Suspense",__isSuspense:!0,process(r,s,l,h,p,m,k,_,b,D){if(r==null)Mz(s,l,h,p,m,k,_,b,D);else{if(m&&m.deps>0&&!r.suspense.isInFallback){s.suspense=r.suspense,s.suspense.vnode=s,s.el=r.el;return}Bz(r,s,l,h,p,k,_,b,D)}},hydrate:Nz,create:Sb,normalize:Pz},Iz=Sz;function ml(r,s){const l=r.props&&r.props[s];Zt(l)&&l()}function Mz(r,s,l,h,p,m,k,_,b){const{p:D,o:{createElement:x}}=b,y=x("div"),A=r.suspense=Sb(r,p,h,s,y,l,m,k,_,b);D(null,A.pendingBranch=r.ssContent,y,null,h,A,m,k),A.deps>0?(ml(r,"onPending"),ml(r,"onFallback"),D(null,r.ssFallback,s,l,h,null,m,k),ua(A,r.ssFallback)):A.resolve(!1,!0)}function Bz(r,s,l,h,p,m,k,_,{p:b,um:D,o:{createElement:x}}){const y=s.suspense=r.suspense;y.vnode=s,s.el=r.el;const A=s.ssContent,S=s.ssFallback,{activeBranch:N,pendingBranch:O,isInFallback:j,isHydrating:G}=y;if(O)y.pendingBranch=A,vo(A,O)?(b(O,A,y.hiddenContainer,null,p,y,m,k,_),y.deps<=0?y.resolve():j&&(G||(b(N,S,l,h,p,null,m,k,_),ua(y,S)))):(y.pendingId=Bm++,G?(y.isHydrating=!1,y.activeBranch=O):D(O,p,y),y.deps=0,y.effects.length=0,y.hiddenContainer=x("div"),j?(b(null,A,y.hiddenContainer,null,p,y,m,k,_),y.deps<=0?y.resolve():(b(N,S,l,h,p,null,m,k,_),ua(y,S))):N&&vo(A,N)?(b(N,A,l,h,p,y,m,k,_),y.resolve(!0)):(b(null,A,y.hiddenContainer,null,p,y,m,k,_),y.deps<=0&&y.resolve()));else if(N&&vo(A,N))b(N,A,l,h,p,y,m,k,_),ua(y,A);else if(ml(s,"onPending"),y.pendingBranch=A,A.shapeFlag&512?y.pendingId=A.component.suspenseId:y.pendingId=Bm++,b(null,A,y.hiddenContainer,null,p,y,m,k,_),y.deps<=0)y.resolve();else{const{timeout:W,pendingId:F}=y;W>0?setTimeout(()=>{y.pendingId===F&&y.fallback(S)},W):W===0&&y.fallback(S)}}function Sb(r,s,l,h,p,m,k,_,b,D,x=!1){const{p:y,m:A,um:S,n:N,o:{parentNode:O,remove:j}}=D;let G;const W=Oz(r);W&&s!=null&&s.pendingBranch&&(G=s.pendingId,s.deps++);const F=r.props?ih(r.props.timeout):void 0,H=m,Q={vnode:r,parent:s,parentComponent:l,namespace:k,container:h,hiddenContainer:p,deps:0,pendingId:Bm++,timeout:typeof F=="number"?F:-1,activeBranch:null,pendingBranch:null,isInFallback:!x,isHydrating:x,isUnmounted:!1,effects:[],resolve(J=!1,et=!1){const{vnode:nt,activeBranch:P,pendingBranch:tt,pendingId:ft,effects:U,parentComponent:_t,container:Ot}=Q;let Ut=!1;Q.isHydrating?Q.isHydrating=!1:J||(Ut=P&&tt.transition&&tt.transition.mode==="out-in",Ut&&(P.transition.afterLeave=()=>{ft===Q.pendingId&&(A(tt,Ot,m===H?N(P):m,0),sh(U))}),P&&(O(P.el)!==Q.hiddenContainer&&(m=N(P)),S(P,_t,Q,!0)),Ut||A(tt,Ot,m,0)),ua(Q,tt),Q.pendingBranch=null,Q.isInFallback=!1;let mt=Q.parent,yt=!1;for(;mt;){if(mt.pendingBranch){mt.effects.push(...U),yt=!0;break}mt=mt.parent}!yt&&!Ut&&sh(U),Q.effects=[],W&&s&&s.pendingBranch&&G===s.pendingId&&(s.deps--,s.deps===0&&!et&&s.resolve()),ml(nt,"onResolve")},fallback(J){if(!Q.pendingBranch)return;const{vnode:et,activeBranch:nt,parentComponent:P,container:tt,namespace:ft}=Q;ml(et,"onFallback");const U=N(nt),_t=()=>{Q.isInFallback&&(y(null,J,tt,U,P,null,ft,_,b),ua(Q,J))},Ot=J.transition&&J.transition.mode==="out-in";Ot&&(nt.transition.afterLeave=_t),Q.isInFallback=!0,S(nt,P,null,!0),Ot||_t()},move(J,et,nt){Q.activeBranch&&A(Q.activeBranch,J,et,nt),Q.container=J},next(){return Q.activeBranch&&N(Q.activeBranch)},registerDep(J,et){const nt=!!Q.pendingBranch;nt&&Q.deps++;const P=J.vnode.el;J.asyncDep.catch(tt=>{gs(tt,J,0)}).then(tt=>{if(J.isUnmounted||Q.isUnmounted||Q.pendingId!==J.suspenseId)return;J.asyncResolved=!0;const{vnode:ft}=J;$m(J,tt,!1),P&&(ft.el=P);const U=!P&&J.subTree.el;et(J,ft,O(P||J.subTree.el),P?null:N(J.subTree),Q,k,b),U&&j(U),xb(J,ft.el),nt&&--Q.deps===0&&Q.resolve()})},unmount(J,et){Q.isUnmounted=!0,Q.activeBranch&&S(Q.activeBranch,l,J,et),Q.pendingBranch&&S(Q.pendingBranch,l,J,et)}};return Q}function Nz(r,s,l,h,p,m,k,_,b){const D=s.suspense=Sb(s,h,l,r.parentNode,document.createElement("div"),null,p,m,k,_,!0),x=b(r,D.pendingBranch=s.ssContent,l,D,m,k);return D.deps===0&&D.resolve(!1,!0),x}function Pz(r){const{shapeFlag:s,children:l}=r,h=s&32;r.ssContent=K1(h?l.default:l),r.ssFallback=h?K1(l.fallback):he(gn)}function K1(r){let s;if(Zt(r)){const l=as&&r._c;l&&(r._d=!1,vt()),r=r(),l&&(r._d=!0,s=zn,H2())}return zt(r)&&(r=Cz(r)),r=Wn(r),s&&!r.dynamicChildren&&(r.dynamicChildren=s.filter(l=>l!==r)),r}function d2(r,s){s&&s.pendingBranch?zt(r)?s.effects.push(...r):s.effects.push(r):sh(r)}function ua(r,s){r.activeBranch=s;const{vnode:l,parentComponent:h}=r;let p=s.el;for(;!p&&s.component;)s=s.component.subTree,p=s.el;l.el=p,h&&h.subTree===l&&(h.vnode.el=p,xb(h,p))}function Oz(r){var s;return((s=r.props)==null?void 0:s.suspensible)!=null&&r.props.suspensible!==!1}const u2=Symbol.for("v-scx"),h2=()=>zo(u2);function Lz(r,s){return xl(r,null,s)}function p2(r,s){return xl(r,null,{flush:"post"})}function g2(r,s){return xl(r,null,{flush:"sync"})}const Ou={};function ha(r,s,l){return xl(r,s,l)}function xl(r,s,{immediate:l,deep:h,flush:p,once:m,onTrack:k,onTrigger:_}=ye){if(s&&m){const J=s;s=(...et)=>{J(...et),Q()}}const b=tn,D=J=>h===!0?J:Yr(J,h===!1?1:void 0);let x,y=!1,A=!1;if(rn(r)?(x=()=>r.value,y=ul(r)):ts(r)?(x=()=>D(r),y=!0):zt(r)?(A=!0,y=r.some(J=>ts(J)||ul(J)),x=()=>r.map(J=>{if(rn(J))return J.value;if(ts(J))return D(J);if(Zt(J))return Ro(J,b,2)})):Zt(r)?s?x=()=>Ro(r,b,2):x=()=>(S&&S(),Kn(r,b,3,[N])):x=An,s&&h){const J=x;x=()=>Yr(J())}let S,N=J=>{S=F.onStop=()=>{Ro(J,b,4),S=F.onStop=void 0}},O;if(Il)if(N=An,s?l&&Kn(s,b,3,[x(),A?[]:void 0,N]):x(),p==="sync"){const J=h2();O=J.__watcherHandles||(J.__watcherHandles=[])}else return An;let j=A?new Array(r.length).fill(Ou):Ou;const G=()=>{if(!(!F.active||!F.dirty))if(s){const J=F.run();(h||y||(A?J.some((et,nt)=>Eo(et,j[nt])):Eo(J,j)))&&(S&&S(),Kn(s,b,3,[J,j===Ou?void 0:A&&j[0]===Ou?[]:j,N]),j=J)}else F.run()};G.allowRecurse=!!s;let W;p==="sync"?W=G:p==="post"?W=()=>ln(G,b&&b.suspense):(G.pre=!0,b&&(G.id=b.uid),W=()=>Th(G));const F=new ga(x,An,W),H=Rx(),Q=()=>{F.stop(),H&&db(H.effects,F)};return s?l?G():j=F.run():p==="post"?ln(F.run.bind(F),b&&b.suspense):F.run(),O&&O.push(Q),Q}function Rz(r,s,l){const h=this.proxy,p=Oe(r)?r.includes(".")?f2(h,r):()=>h[r]:r.bind(h,h);let m;Zt(s)?m=s:(m=s.handler,l=s);const k=cs(this),_=xl(p,m.bind(h),l);return k(),_}function f2(r,s){const l=s.split(".");return()=>{let h=r;for(let p=0;p<l.length&&h;p++)h=h[l[p]];return h}}function Yr(r,s,l=0,h){if(!Ie(r)||r.__v_skip)return r;if(s&&s>0){if(l>=s)return r;l++}if(h=h||new Set,h.has(r))return r;if(h.add(r),rn(r))Yr(r.value,s,l,h);else if(zt(r))for(let p=0;p<r.length;p++)Yr(r[p],s,l,h);else if(ps(r)||ra(r))r.forEach(p=>{Yr(p,s,l,h)});else if(Nx(r))for(const p in r)Yr(r[p],s,l,h);return r}function so(r,s){if(Ye===null)return r;const l=zh(Ye)||Ye.proxy,h=r.dirs||(r.dirs=[]);for(let p=0;p<s.length;p++){let[m,k,_,b=ye]=s[p];m&&(Zt(m)&&(m={mounted:m,updated:m}),m.deep&&Yr(k),h.push({dir:m,instance:l,value:k,oldValue:void 0,arg:_,modifiers:b}))}return r}function Po(r,s,l,h){const p=r.dirs,m=s&&s.dirs;for(let k=0;k<p.length;k++){const _=p[k];m&&(_.oldValue=m[k].value);let b=_.dir[h];b&&(dr(),Kn(b,l,8,[r.el,_,r,s]),ur())}}const Yi=Symbol("_leaveCb"),Lu=Symbol("_enterCb");function Ib(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sl(()=>{r.isMounted=!0}),Ph(()=>{r.isUnmounting=!0}),r}const io=[Function,Array],Mb={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:io,onEnter:io,onAfterEnter:io,onEnterCancelled:io,onBeforeLeave:io,onLeave:io,onAfterLeave:io,onLeaveCancelled:io,onBeforeAppear:io,onAppear:io,onAfterAppear:io,onAppearCancelled:io},zz={name:"BaseTransition",props:Mb,setup(r,{slots:s}){const l=_i(),h=Ib();return()=>{const p=s.default&&Mh(s.default(),!0);if(!p||!p.length)return;let m=p[0];if(p.length>1){for(const A of p)if(A.type!==gn){m=A;break}}const k=ce(r),{mode:_}=k;if(h.isLeaving)return Zf(m);const b=Y1(m);if(!b)return Zf(m);const D=fa(b,k,h,l);rs(b,D);const x=l.subTree,y=x&&Y1(x);if(y&&y.type!==gn&&!vo(b,y)){const A=fa(y,k,h,l);if(rs(y,A),_==="out-in")return h.isLeaving=!0,A.afterLeave=()=>{h.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},Zf(m);_==="in-out"&&b.type!==gn&&(A.delayLeave=(S,N,O)=>{const j=b2(h,y);j[String(y.key)]=y,S[Yi]=()=>{N(),S[Yi]=void 0,delete D.delayedLeave},D.delayedLeave=O})}return m}}},m2=zz;function b2(r,s){const{leavingVNodes:l}=r;let h=l.get(s.type);return h||(h=Object.create(null),l.set(s.type,h)),h}function fa(r,s,l,h){const{appear:p,mode:m,persisted:k=!1,onBeforeEnter:_,onEnter:b,onAfterEnter:D,onEnterCancelled:x,onBeforeLeave:y,onLeave:A,onAfterLeave:S,onLeaveCancelled:N,onBeforeAppear:O,onAppear:j,onAfterAppear:G,onAppearCancelled:W}=s,F=String(r.key),H=b2(l,r),Q=(nt,P)=>{nt&&Kn(nt,h,9,P)},J=(nt,P)=>{const tt=P[1];Q(nt,P),zt(nt)?nt.every(ft=>ft.length<=1)&&tt():nt.length<=1&&tt()},et={mode:m,persisted:k,beforeEnter(nt){let P=_;if(!l.isMounted)if(p)P=O||_;else return;nt[Yi]&&nt[Yi](!0);const tt=H[F];tt&&vo(r,tt)&&tt.el[Yi]&&tt.el[Yi](),Q(P,[nt])},enter(nt){let P=b,tt=D,ft=x;if(!l.isMounted)if(p)P=j||b,tt=G||D,ft=W||x;else return;let U=!1;const _t=nt[Lu]=Ot=>{U||(U=!0,Ot?Q(ft,[nt]):Q(tt,[nt]),et.delayedLeave&&et.delayedLeave(),nt[Lu]=void 0)};P?J(P,[nt,_t]):_t()},leave(nt,P){const tt=String(r.key);if(nt[Lu]&&nt[Lu](!0),l.isUnmounting)return P();Q(y,[nt]);let ft=!1;const U=nt[Yi]=_t=>{ft||(ft=!0,P(),_t?Q(N,[nt]):Q(S,[nt]),nt[Yi]=void 0,H[tt]===r&&delete H[tt])};H[tt]=r,A?J(A,[nt,U]):U()},clone(nt){return fa(nt,s,l,h)}};return et}function Zf(r){if(Tl(r))return r=Vo(r),r.children=null,r}function Y1(r){return Tl(r)?r.children?r.children[0]:void 0:r}function rs(r,s){r.shapeFlag&6&&r.component?rs(r.component.subTree,s):r.shapeFlag&128?(r.ssContent.transition=s.clone(r.ssContent),r.ssFallback.transition=s.clone(r.ssFallback)):r.transition=s}function Mh(r,s=!1,l){let h=[],p=0;for(let m=0;m<r.length;m++){let k=r[m];const _=l==null?k.key:String(l)+String(k.key!=null?k.key:m);k.type===be?(k.patchFlag&128&&p++,h=h.concat(Mh(k.children,s,_))):(s||k.type!==gn)&&h.push(_!=null?Vo(k,{key:_}):k)}if(p>1)for(let m=0;m<h.length;m++)h[m].patchFlag=-2;return h}/*! #__NO_SIDE_EFFECTS__ */function Dl(r,s){return Zt(r)?(()=>Le({name:r.name},s,{setup:r}))():r}const es=r=>!!r.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function jz(r){Zt(r)&&(r={loader:r});const{loader:s,loadingComponent:l,errorComponent:h,delay:p=200,timeout:m,suspensible:k=!0,onError:_}=r;let b=null,D,x=0;const y=()=>(x++,b=null,A()),A=()=>{let S;return b||(S=b=s().catch(N=>{if(N=N instanceof Error?N:new Error(String(N)),_)return new Promise((O,j)=>{_(N,()=>O(y()),()=>j(N),x+1)});throw N}).then(N=>S!==b&&b?b:(N&&(N.__esModule||N[Symbol.toStringTag]==="Module")&&(N=N.default),D=N,N)))};return Dl({name:"AsyncComponentWrapper",__asyncLoader:A,get __asyncResolved(){return D},setup(){const S=tn;if(D)return()=>Jf(D,S);const N=W=>{b=null,gs(W,S,13,!h)};if(k&&S.suspense||Il)return A().then(W=>()=>Jf(W,S)).catch(W=>(N(W),()=>h?he(h,{error:W}):null));const O=la(!1),j=la(),G=la(!!p);return p&&setTimeout(()=>{G.value=!1},p),m!=null&&setTimeout(()=>{if(!O.value&&!j.value){const W=new Error(`Async component timed out after ${m}ms.`);N(W),j.value=W}},m),A().then(()=>{O.value=!0,S.parent&&Tl(S.parent.vnode)&&(S.parent.effect.dirty=!0,Th(S.parent.update))}).catch(W=>{N(W),j.value=W}),()=>{if(O.value&&D)return Jf(D,S);if(j.value&&h)return he(h,{error:j.value});if(l&&!G.value)return he(l)}}})}function Jf(r,s){const{ref:l,props:h,children:p,ce:m}=s.vnode,k=he(r,h,p);return k.ref=l,k.ce=m,delete s.vnode.ce,k}const Tl=r=>r.type.__isKeepAlive,Fz={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(r,{slots:s}){const l=_i(),h=l.ctx;if(!h.renderer)return()=>{const W=s.default&&s.default();return W&&W.length===1?W[0]:W};const p=new Map,m=new Set;let k=null;const _=l.suspense,{renderer:{p:b,m:D,um:x,o:{createElement:y}}}=h,A=y("div");h.activate=(W,F,H,Q,J)=>{const et=W.component;D(W,F,H,0,_),b(et.vnode,W,F,H,et,_,Q,W.slotScopeIds,J),ln(()=>{et.isDeactivated=!1,et.a&&aa(et.a);const nt=W.props&&W.props.onVnodeMounted;nt&&Ln(nt,et.parent,W)},_)},h.deactivate=W=>{const F=W.component;D(W,A,null,1,_),ln(()=>{F.da&&aa(F.da);const H=W.props&&W.props.onVnodeUnmounted;H&&Ln(H,F.parent,W),F.isDeactivated=!0},_)};function S(W){Xf(W),x(W,l,_,!0)}function N(W){p.forEach((F,H)=>{const Q=hh(F.type);Q&&(!W||!W(Q))&&O(H)})}function O(W){const F=p.get(W);!k||!vo(F,k)?S(F):k&&Xf(k),p.delete(W),m.delete(W)}ha(()=>[r.include,r.exclude],([W,F])=>{W&&N(H=>Zc(W,H)),F&&N(H=>!Zc(F,H))},{flush:"post",deep:!0});let j=null;const G=()=>{j!=null&&p.set(j,tm(l.subTree))};return Sl(G),Nh(G),Ph(()=>{p.forEach(W=>{const{subTree:F,suspense:H}=l,Q=tm(F);if(W.type===Q.type&&W.key===Q.key){Xf(Q);const J=Q.component.da;J&&ln(J,H);return}S(W)})}),()=>{if(j=null,!s.default)return null;const W=s.default(),F=W[0];if(W.length>1)return k=null,W;if(!rr(F)||!(F.shapeFlag&4)&&!(F.shapeFlag&128))return k=null,F;let H=tm(F);const Q=H.type,J=hh(es(H)?H.type.__asyncResolved||{}:Q),{include:et,exclude:nt,max:P}=r;if(et&&(!J||!Zc(et,J))||nt&&J&&Zc(nt,J))return k=H,F;const tt=H.key==null?Q:H.key,ft=p.get(tt);return H.el&&(H=Vo(H),F.shapeFlag&128&&(F.ssContent=H)),j=tt,ft?(H.el=ft.el,H.component=ft.component,H.transition&&rs(H,H.transition),H.shapeFlag|=512,m.delete(tt),m.add(tt)):(m.add(tt),P&&m.size>parseInt(P,10)&&O(m.values().next().value)),H.shapeFlag|=256,k=H,l2(F.type)?F:H}}},Vz=Fz;function Zc(r,s){return zt(r)?r.some(l=>Zc(l,s)):Oe(r)?r.split(",").includes(s):dR(r)?r.test(s):!1}function k2(r,s){_2(r,"a",s)}function w2(r,s){_2(r,"da",s)}function _2(r,s,l=tn){const h=r.__wdc||(r.__wdc=()=>{let p=l;for(;p;){if(p.isDeactivated)return;p=p.parent}return r()});if(Bh(s,h,l),l){let p=l.parent;for(;p&&p.parent;)Tl(p.parent.vnode)&&Hz(h,s,l,p),p=p.parent}}function Hz(r,s,l,h){const p=Bh(s,r,h,!0);Oh(()=>{db(h[s],p)},l)}function Xf(r){r.shapeFlag&=-257,r.shapeFlag&=-513}function tm(r){return r.shapeFlag&128?r.ssContent:r}function Bh(r,s,l=tn,h=!1){if(l){const p=l[r]||(l[r]=[]),m=s.__weh||(s.__weh=(...k)=>{if(l.isUnmounted)return;dr();const _=cs(l),b=Kn(s,l,r,k);return _(),ur(),b});return h?p.unshift(m):p.push(m),m}}const wi=r=>(s,l=tn)=>(!Il||r==="sp")&&Bh(r,(...h)=>s(...h),l),A2=wi("bm"),Sl=wi("m"),C2=wi("bu"),Nh=wi("u"),Ph=wi("bum"),Oh=wi("um"),v2=wi("sp"),y2=wi("rtg"),E2=wi("rtc");function x2(r,s=tn){Bh("ec",r,s)}function pn(r,s,l,h){let p;const m=l&&l[h];if(zt(r)||Oe(r)){p=new Array(r.length);for(let k=0,_=r.length;k<_;k++)p[k]=s(r[k],k,void 0,m&&m[k])}else if(typeof r=="number"){p=new Array(r);for(let k=0;k<r;k++)p[k]=s(k+1,k,void 0,m&&m[k])}else if(Ie(r))if(r[Symbol.iterator])p=Array.from(r,(k,_)=>s(k,_,void 0,m&&m[_]));else{const k=Object.keys(r);p=new Array(k.length);for(let _=0,b=k.length;_<b;_++){const D=k[_];p[_]=s(r[D],D,_,m&&m[_])}}else p=[];return l&&(l[h]=p),p}function $z(r,s){for(let l=0;l<s.length;l++){const h=s[l];if(zt(h))for(let p=0;p<h.length;p++)r[h[p].name]=h[p].fn;else h&&(r[h.name]=h.key?(...p)=>{const m=h.fn(...p);return m&&(m.key=h.key),m}:h.fn)}return r}function Nm(r,s,l={},h,p){if(Ye.isCE||Ye.parent&&es(Ye.parent)&&Ye.parent.isCE)return s!=="default"&&(l.name=s),he("slot",l,h&&h());let m=r[s];m&&m._c&&(m._d=!1),vt();const k=m&&D2(m(l)),_=nr(be,{key:l.key||k&&k.key||`_${s}`},k||(h?h():[]),k&&r._===1?64:-2);return!p&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),m&&m._c&&(m._d=!0),_}function D2(r){return r.some(s=>rr(s)?!(s.type===gn||s.type===be&&!D2(s.children)):!0)?r:null}function Uz(r,s){const l={};for(const h in r)l[s&&/[A-Z]/.test(h)?`on:${h}`:Xc(h)]=r[h];return l}const Pm=r=>r?K2(r)?zh(r)||r.proxy:Pm(r.parent):null,el=Le(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Pm(r.parent),$root:r=>Pm(r.root),$emit:r=>r.emit,$options:r=>Bb(r),$forceUpdate:r=>r.f||(r.f=()=>{r.effect.dirty=!0,Th(r.update)}),$nextTick:r=>r.n||(r.n=El.bind(r.proxy)),$watch:r=>Rz.bind(r)}),em=(r,s)=>r!==ye&&!r.__isScriptSetup&&me(r,s),Om={get({_:r},s){const{ctx:l,setupState:h,data:p,props:m,accessCache:k,type:_,appContext:b}=r;let D;if(s[0]!=="$"){const S=k[s];if(S!==void 0)switch(S){case 1:return h[s];case 2:return p[s];case 4:return l[s];case 3:return m[s]}else{if(em(h,s))return k[s]=1,h[s];if(p!==ye&&me(p,s))return k[s]=2,p[s];if((D=r.propsOptions[0])&&me(D,s))return k[s]=3,m[s];if(l!==ye&&me(l,s))return k[s]=4,l[s];Lm&&(k[s]=0)}}const x=el[s];let y,A;if(x)return s==="$attrs"&&jn(r,"get",s),x(r);if((y=_.__cssModules)&&(y=y[s]))return y;if(l!==ye&&me(l,s))return k[s]=4,l[s];if(A=b.config.globalProperties,me(A,s))return A[s]},set({_:r},s,l){const{data:h,setupState:p,ctx:m}=r;return em(p,s)?(p[s]=l,!0):h!==ye&&me(h,s)?(h[s]=l,!0):me(r.props,s)||s[0]==="$"&&s.slice(1)in r?!1:(m[s]=l,!0)},has({_:{data:r,setupState:s,accessCache:l,ctx:h,appContext:p,propsOptions:m}},k){let _;return!!l[k]||r!==ye&&me(r,k)||em(s,k)||(_=m[0])&&me(_,k)||me(h,k)||me(el,k)||me(p.config.globalProperties,k)},defineProperty(r,s,l){return l.get!=null?r._.accessCache[s]=0:me(l,"value")&&this.set(r,s,l.value,null),Reflect.defineProperty(r,s,l)}},qz=Le({},Om,{get(r,s){if(s!==Symbol.unscopables)return Om.get(r,s,r)},has(r,s){return s[0]!=="_"&&!fR(s)}});function Wz(){return null}function Gz(){return null}function Kz(r){}function Yz(r){}function Qz(){return null}function Zz(){}function Jz(r,s){return null}function Xz(){return T2().slots}function t7(){return T2().attrs}function T2(){const r=_i();return r.setupContext||(r.setupContext=Z2(r))}function bl(r){return zt(r)?r.reduce((s,l)=>(s[l]=null,s),{}):r}function e7(r,s){const l=bl(r);for(const h in s){if(h.startsWith("__skip"))continue;let p=l[h];p?zt(p)||Zt(p)?p=l[h]={type:p,default:s[h]}:p.default=s[h]:p===null&&(p=l[h]={default:s[h]}),p&&s[`__skip_${h}`]&&(p.skipFactory=!0)}return l}function n7(r,s){return!r||!s?r||s:zt(r)&&zt(s)?r.concat(s):Le({},bl(r),bl(s))}function o7(r,s){const l={};for(const h in r)s.includes(h)||Object.defineProperty(l,h,{enumerable:!0,get:()=>r[h]});return l}function i7(r){const s=_i();let l=r();return Hm(),ub(l)&&(l=l.catch(h=>{throw cs(s),h})),[l,()=>cs(s)]}let Lm=!0;function r7(r){const s=Bb(r),l=r.proxy,h=r.ctx;Lm=!1,s.beforeCreate&&Q1(s.beforeCreate,r,"bc");const{data:p,computed:m,methods:k,watch:_,provide:b,inject:D,created:x,beforeMount:y,mounted:A,beforeUpdate:S,updated:N,activated:O,deactivated:j,beforeDestroy:G,beforeUnmount:W,destroyed:F,unmounted:H,render:Q,renderTracked:J,renderTriggered:et,errorCaptured:nt,serverPrefetch:P,expose:tt,inheritAttrs:ft,components:U,directives:_t,filters:Ot}=s;if(D&&s7(D,h,null),k)for(const yt in k){const Mt=k[yt];Zt(Mt)&&(h[yt]=Mt.bind(l))}if(p){const yt=p.call(l,l);Ie(yt)&&(r.data=yl(yt))}if(Lm=!0,m)for(const yt in m){const Mt=m[yt],Ee=Zt(Mt)?Mt.bind(l,l):Zt(Mt.get)?Mt.get.bind(l,l):An,qt=!Zt(Mt)&&Zt(Mt.set)?Mt.set.bind(l):An,Re=ro({get:Ee,set:qt});Object.defineProperty(h,yt,{enumerable:!0,configurable:!0,get:()=>Re.value,set:_e=>Re.value=_e})}if(_)for(const yt in _)S2(_[yt],h,l,yt);if(b){const yt=Zt(b)?b.call(l):b;Reflect.ownKeys(yt).forEach(Mt=>{nl(Mt,yt[Mt])})}x&&Q1(x,r,"c");function mt(yt,Mt){zt(Mt)?Mt.forEach(Ee=>yt(Ee.bind(l))):Mt&&yt(Mt.bind(l))}if(mt(A2,y),mt(Sl,A),mt(C2,S),mt(Nh,N),mt(k2,O),mt(w2,j),mt(x2,nt),mt(E2,J),mt(y2,et),mt(Ph,W),mt(Oh,H),mt(v2,P),zt(tt))if(tt.length){const yt=r.exposed||(r.exposed={});tt.forEach(Mt=>{Object.defineProperty(yt,Mt,{get:()=>l[Mt],set:Ee=>l[Mt]=Ee})})}else r.exposed||(r.exposed={});Q&&r.render===An&&(r.render=Q),ft!=null&&(r.inheritAttrs=ft),U&&(r.components=U),_t&&(r.directives=_t)}function s7(r,s,l=An){zt(r)&&(r=Rm(r));for(const h in r){const p=r[h];let m;Ie(p)?"default"in p?m=zo(p.from||h,p.default,!0):m=zo(p.from||h):m=zo(p),rn(m)?Object.defineProperty(s,h,{enumerable:!0,configurable:!0,get:()=>m.value,set:k=>m.value=k}):s[h]=m}}function Q1(r,s,l){Kn(zt(r)?r.map(h=>h.bind(s.proxy)):r.bind(s.proxy),s,l)}function S2(r,s,l,h){const p=h.includes(".")?f2(l,h):()=>l[h];if(Oe(r)){const m=s[r];Zt(m)&&ha(p,m)}else if(Zt(r))ha(p,r.bind(l));else if(Ie(r))if(zt(r))r.forEach(m=>S2(m,s,l,h));else{const m=Zt(r.handler)?r.handler.bind(l):s[r.handler];Zt(m)&&ha(p,m,r)}}function Bb(r){const s=r.type,{mixins:l,extends:h}=s,{mixins:p,optionsCache:m,config:{optionMergeStrategies:k}}=r.appContext,_=m.get(s);let b;return _?b=_:!p.length&&!l&&!h?b=s:(b={},p.length&&p.forEach(D=>ch(b,D,k,!0)),ch(b,s,k)),Ie(s)&&m.set(s,b),b}function ch(r,s,l,h=!1){const{mixins:p,extends:m}=s;m&&ch(r,m,l,!0),p&&p.forEach(k=>ch(r,k,l,!0));for(const k in s)if(!(h&&k==="expose")){const _=a7[k]||l&&l[k];r[k]=_?_(r[k],s[k]):s[k]}return r}const a7={data:Z1,props:J1,emits:J1,methods:Jc,computed:Jc,beforeCreate:wn,created:wn,beforeMount:wn,mounted:wn,beforeUpdate:wn,updated:wn,beforeDestroy:wn,beforeUnmount:wn,destroyed:wn,unmounted:wn,activated:wn,deactivated:wn,errorCaptured:wn,serverPrefetch:wn,components:Jc,directives:Jc,watch:l7,provide:Z1,inject:c7};function Z1(r,s){return s?r?function(){return Le(Zt(r)?r.call(this,this):r,Zt(s)?s.call(this,this):s)}:s:r}function c7(r,s){return Jc(Rm(r),Rm(s))}function Rm(r){if(zt(r)){const s={};for(let l=0;l<r.length;l++)s[r[l]]=r[l];return s}return r}function wn(r,s){return r?[...new Set([].concat(r,s))]:s}function Jc(r,s){return r?Le(Object.create(null),r,s):s}function J1(r,s){return r?zt(r)&&zt(s)?[...new Set([...r,...s])]:Le(Object.create(null),bl(r),bl(s??{})):s}function l7(r,s){if(!r)return s;if(!s)return r;const l=Le(Object.create(null),r);for(const h in s)l[h]=wn(r[h],s[h]);return l}function I2(){return{app:null,config:{isNativeTag:cR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let d7=0;function u7(r,s){return function(h,p=null){Zt(h)||(h=Le({},h)),p!=null&&!Ie(p)&&(p=null);const m=I2(),k=new WeakSet;let _=!1;const b=m.app={_uid:d7++,_component:h,_props:p,_container:null,_context:m,_instance:null,version:tD,get config(){return m.config},set config(D){},use(D,...x){return k.has(D)||(D&&Zt(D.install)?(k.add(D),D.install(b,...x)):Zt(D)&&(k.add(D),D(b,...x))),b},mixin(D){return m.mixins.includes(D)||m.mixins.push(D),b},component(D,x){return x?(m.components[D]=x,b):m.components[D]},directive(D,x){return x?(m.directives[D]=x,b):m.directives[D]},mount(D,x,y){if(!_){const A=he(h,p);return A.appContext=m,y===!0?y="svg":y===!1&&(y=void 0),x&&s?s(A,D):r(A,D,y),_=!0,b._container=D,D.__vue_app__=b,zh(A.component)||A.component.proxy}},unmount(){_&&(r(null,b._container),delete b._container.__vue_app__)},provide(D,x){return m.provides[D]=x,b},runWithContext(D){const x=pa;pa=b;try{return D()}finally{pa=x}}};return b}}let pa=null;function nl(r,s){if(tn){let l=tn.provides;const h=tn.parent&&tn.parent.provides;h===l&&(l=tn.provides=Object.create(h)),l[r]=s}}function zo(r,s,l=!1){const h=tn||Ye;if(h||pa){const p=h?h.parent==null?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides:pa._context.provides;if(p&&r in p)return p[r];if(arguments.length>1)return l&&Zt(s)?s.call(h&&h.proxy):s}}function h7(){return!!(tn||Ye||pa)}function p7(r,s,l,h=!1){const p={},m={};oh(m,Lh,1),r.propsDefaults=Object.create(null),M2(r,s,p,m);for(const k in r.propsOptions[0])k in p||(p[k]=void 0);l?r.props=h?p:kb(p):r.type.props?r.props=p:r.props=m,r.attrs=m}function g7(r,s,l,h){const{props:p,attrs:m,vnode:{patchFlag:k}}=r,_=ce(p),[b]=r.propsOptions;let D=!1;if((h||k>0)&&!(k&16)){if(k&8){const x=r.vnode.dynamicProps;for(let y=0;y<x.length;y++){let A=x[y];if(Sh(r.emitsOptions,A))continue;const S=s[A];if(b)if(me(m,A))S!==m[A]&&(m[A]=S,D=!0);else{const N=Cn(A);p[N]=zm(b,_,N,S,r,!1)}else S!==m[A]&&(m[A]=S,D=!0)}}}else{M2(r,s,p,m)&&(D=!0);let x;for(const y in _)(!s||!me(s,y)&&((x=Gn(y))===y||!me(s,x)))&&(b?l&&(l[y]!==void 0||l[x]!==void 0)&&(p[y]=zm(b,_,y,void 0,r,!0)):delete p[y]);if(m!==_)for(const y in m)(!s||!me(s,y))&&(delete m[y],D=!0)}D&&gi(r,"set","$attrs")}function M2(r,s,l,h){const[p,m]=r.propsOptions;let k=!1,_;if(s)for(let b in s){if(sa(b))continue;const D=s[b];let x;p&&me(p,x=Cn(b))?!m||!m.includes(x)?l[x]=D:(_||(_={}))[x]=D:Sh(r.emitsOptions,b)||(!(b in h)||D!==h[b])&&(h[b]=D,k=!0)}if(m){const b=ce(l),D=_||ye;for(let x=0;x<m.length;x++){const y=m[x];l[y]=zm(p,b,y,D[y],r,!me(D,y))}}return k}function zm(r,s,l,h,p,m){const k=r[l];if(k!=null){const _=me(k,"default");if(_&&h===void 0){const b=k.default;if(k.type!==Function&&!k.skipFactory&&Zt(b)){const{propsDefaults:D}=p;if(l in D)h=D[l];else{const x=cs(p);h=D[l]=b.call(null,s),x()}}else h=b}k[0]&&(m&&!_?h=!1:k[1]&&(h===""||h===Gn(l))&&(h=!0))}return h}function B2(r,s,l=!1){const h=s.propsCache,p=h.get(r);if(p)return p;const m=r.props,k={},_=[];let b=!1;if(!Zt(r)){const x=y=>{b=!0;const[A,S]=B2(y,s,!0);Le(k,A),S&&_.push(...S)};!l&&s.mixins.length&&s.mixins.forEach(x),r.extends&&x(r.extends),r.mixins&&r.mixins.forEach(x)}if(!m&&!b)return Ie(r)&&h.set(r,ia),ia;if(zt(m))for(let x=0;x<m.length;x++){const y=Cn(m[x]);X1(y)&&(k[y]=ye)}else if(m)for(const x in m){const y=Cn(x);if(X1(y)){const A=m[x],S=k[y]=zt(A)||Zt(A)?{type:A}:Le({},A);if(S){const N=nE(Boolean,S.type),O=nE(String,S.type);S[0]=N>-1,S[1]=O<0||N<O,(N>-1||me(S,"default"))&&_.push(y)}}}const D=[k,_];return Ie(r)&&h.set(r,D),D}function X1(r){return r[0]!=="$"&&!sa(r)}function tE(r){return r===null?"null":typeof r=="function"?r.name||"":typeof r=="object"&&r.constructor&&r.constructor.name||""}function eE(r,s){return tE(r)===tE(s)}function nE(r,s){return zt(s)?s.findIndex(l=>eE(l,r)):Zt(s)&&eE(s,r)?0:-1}const N2=r=>r[0]==="_"||r==="$stable",Nb=r=>zt(r)?r.map(Wn):[Wn(r)],f7=(r,s,l)=>{if(s._n)return s;const h=yo((...p)=>Nb(s(...p)),l);return h._c=!1,h},P2=(r,s,l)=>{const h=r._ctx;for(const p in r){if(N2(p))continue;const m=r[p];if(Zt(m))s[p]=f7(p,m,h);else if(m!=null){const k=Nb(m);s[p]=()=>k}}},O2=(r,s)=>{const l=Nb(s);r.slots.default=()=>l},m7=(r,s)=>{if(r.vnode.shapeFlag&32){const l=s._;l?(r.slots=ce(s),oh(s,"_",l)):P2(s,r.slots={})}else r.slots={},s&&O2(r,s);oh(r.slots,Lh,1)},b7=(r,s,l)=>{const{vnode:h,slots:p}=r;let m=!0,k=ye;if(h.shapeFlag&32){const _=s._;_?l&&_===1?m=!1:(Le(p,s),!l&&_===1&&delete p._):(m=!s.$stable,P2(s,p)),k=s}else s&&(O2(r,s),k={default:1});if(m)for(const _ in p)!N2(_)&&k[_]==null&&delete p[_]};function lh(r,s,l,h,p=!1){if(zt(r)){r.forEach((A,S)=>lh(A,s&&(zt(s)?s[S]:s),l,h,p));return}if(es(h)&&!p)return;const m=h.shapeFlag&4?zh(h.component)||h.component.proxy:h.el,k=p?null:m,{i:_,r:b}=r,D=s&&s.r,x=_.refs===ye?_.refs={}:_.refs,y=_.setupState;if(D!=null&&D!==b&&(Oe(D)?(x[D]=null,me(y,D)&&(y[D]=null)):rn(D)&&(D.value=null)),Zt(b))Ro(b,_,12,[k,x]);else{const A=Oe(b),S=rn(b);if(A||S){const N=()=>{if(r.f){const O=A?me(y,b)?y[b]:x[b]:b.value;p?zt(O)&&db(O,m):zt(O)?O.includes(m)||O.push(m):A?(x[b]=[m],me(y,b)&&(y[b]=x[b])):(b.value=[m],r.k&&(x[r.k]=b.value))}else A?(x[b]=k,me(y,b)&&(y[b]=k)):S&&(b.value=k,r.k&&(x[r.k]=k))};k?(N.id=-1,ln(N,l)):N()}}}let Vi=!1;const k7=r=>r.namespaceURI.includes("svg")&&r.tagName!=="foreignObject",w7=r=>r.namespaceURI.includes("MathML"),Ru=r=>{if(k7(r))return"svg";if(w7(r))return"mathml"},Uc=r=>r.nodeType===8;function _7(r){const{mt:s,p:l,o:{patchProp:h,createText:p,nextSibling:m,parentNode:k,remove:_,insert:b,createComment:D}}=r,x=(F,H)=>{if(!H.hasChildNodes()){__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&qr("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),l(null,F,H),ah(),H._vnode=F;return}Vi=!1,y(H.firstChild,F,null,null,null),ah(),H._vnode=F,Vi&&console.error("Hydration completed but contains mismatches.")},y=(F,H,Q,J,et,nt=!1)=>{const P=Uc(F)&&F.data==="[",tt=()=>O(F,H,Q,J,et,P),{type:ft,ref:U,shapeFlag:_t,patchFlag:Ot}=H;let Ut=F.nodeType;H.el=F,Ot===-2&&(nt=!1,H.dynamicChildren=null);let mt=null;switch(ft){case ss:Ut!==3?H.children===""?(b(H.el=p(""),k(F),F),mt=F):mt=tt():(F.data!==H.children&&(Vi=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&qr("Hydration text mismatch in",F.parentNode,`
  - rendered on server: ${JSON.stringify(F.data)}
  - expected on client: ${JSON.stringify(H.children)}`),F.data=H.children),mt=m(F));break;case gn:W(F)?(mt=m(F),G(H.el=F.content.firstChild,F,Q)):Ut!==8||P?mt=tt():mt=m(F);break;case ns:if(P&&(F=m(F),Ut=F.nodeType),Ut===1||Ut===3){mt=F;const yt=!H.children.length;for(let Mt=0;Mt<H.staticCount;Mt++)yt&&(H.children+=mt.nodeType===1?mt.outerHTML:mt.data),Mt===H.staticCount-1&&(H.anchor=mt),mt=m(mt);return P?m(mt):mt}else tt();break;case be:P?mt=N(F,H,Q,J,et,nt):mt=tt();break;default:if(_t&1)(Ut!==1||H.type.toLowerCase()!==F.tagName.toLowerCase())&&!W(F)?mt=tt():mt=A(F,H,Q,J,et,nt);else if(_t&6){H.slotScopeIds=et;const yt=k(F);if(P?mt=j(F):Uc(F)&&F.data==="teleport start"?mt=j(F,F.data,"teleport end"):mt=m(F),s(H,yt,null,Q,J,Ru(yt),nt),es(H)){let Mt;P?(Mt=he(be),Mt.anchor=mt?mt.previousSibling:yt.lastChild):Mt=F.nodeType===3?xn(""):he("div"),Mt.el=F,H.component.subTree=Mt}}else _t&64?Ut!==8?mt=tt():mt=H.type.hydrate(F,H,Q,J,et,nt,r,S):_t&128?mt=H.type.hydrate(F,H,Q,J,Ru(k(F)),et,nt,r,y):__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&qr("Invalid HostVNode type:",ft,`(${typeof ft})`)}return U!=null&&lh(U,null,J,H),mt},A=(F,H,Q,J,et,nt)=>{nt=nt||!!H.dynamicChildren;const{type:P,props:tt,patchFlag:ft,shapeFlag:U,dirs:_t,transition:Ot}=H,Ut=P==="input"||P==="option";if(Ut||ft!==-1){_t&&Po(H,null,Q,"created");let mt=!1;if(W(F)){mt=j2(J,Ot)&&Q&&Q.vnode.props&&Q.vnode.props.appear;const Mt=F.content.firstChild;mt&&Ot.beforeEnter(Mt),G(Mt,F,Q),H.el=F=Mt}if(U&16&&!(tt&&(tt.innerHTML||tt.textContent))){let Mt=S(F.firstChild,H,F,Q,J,et,nt),Ee=!1;for(;Mt;){Vi=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!Ee&&(qr("Hydration children mismatch on",F,`
Server rendered element contains more child nodes than client vdom.`),Ee=!0);const qt=Mt;Mt=Mt.nextSibling,_(qt)}}else U&8&&F.textContent!==H.children&&(Vi=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&qr("Hydration text content mismatch on",F,`
  - rendered on server: ${F.textContent}
  - expected on client: ${H.children}`),F.textContent=H.children);if(tt)if(Ut||!nt||ft&48)for(const Mt in tt)(Ut&&(Mt.endsWith("value")||Mt==="indeterminate")||Al(Mt)&&!sa(Mt)||Mt[0]===".")&&h(F,Mt,null,tt[Mt],void 0,void 0,Q);else tt.onClick&&h(F,"onClick",null,tt.onClick,void 0,void 0,Q);let yt;(yt=tt&&tt.onVnodeBeforeMount)&&Ln(yt,Q,H),_t&&Po(H,null,Q,"beforeMount"),((yt=tt&&tt.onVnodeMounted)||_t||mt)&&d2(()=>{yt&&Ln(yt,Q,H),mt&&Ot.enter(F),_t&&Po(H,null,Q,"mounted")},J)}return F.nextSibling},S=(F,H,Q,J,et,nt,P)=>{P=P||!!H.dynamicChildren;const tt=H.children,ft=tt.length;let U=!1;for(let _t=0;_t<ft;_t++){const Ot=P?tt[_t]:tt[_t]=Wn(tt[_t]);if(F)F=y(F,Ot,J,et,nt,P);else{if(Ot.type===ss&&!Ot.children)continue;Vi=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!U&&(qr("Hydration children mismatch on",Q,`
Server rendered element contains fewer child nodes than client vdom.`),U=!0),l(null,Ot,Q,null,J,et,Ru(Q),nt)}}return F},N=(F,H,Q,J,et,nt)=>{const{slotScopeIds:P}=H;P&&(et=et?et.concat(P):P);const tt=k(F),ft=S(m(F),H,tt,Q,J,et,nt);return ft&&Uc(ft)&&ft.data==="]"?m(H.anchor=ft):(Vi=!0,b(H.anchor=D("]"),tt,ft),ft)},O=(F,H,Q,J,et,nt)=>{if(Vi=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&qr(`Hydration node mismatch:
- rendered on server:`,F,F.nodeType===3?"(text)":Uc(F)&&F.data==="["?"(start of fragment)":"",`
- expected on client:`,H.type),H.el=null,nt){const ft=j(F);for(;;){const U=m(F);if(U&&U!==ft)_(U);else break}}const P=m(F),tt=k(F);return _(F),l(null,H,tt,P,Q,J,Ru(tt),et),P},j=(F,H="[",Q="]")=>{let J=0;for(;F;)if(F=m(F),F&&Uc(F)&&(F.data===H&&J++,F.data===Q)){if(J===0)return m(F);J--}return F},G=(F,H,Q)=>{const J=H.parentNode;J&&J.replaceChild(F,H);let et=Q;for(;et;)et.vnode.el===H&&(et.vnode.el=et.subTree.el=F),et=et.parent},W=F=>F.nodeType===1&&F.tagName.toLowerCase()==="template";return[x,y]}function A7(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(pb().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ln=d2;function L2(r){return z2(r)}function R2(r){return z2(r,_7)}function z2(r,s){A7();const l=pb();l.__VUE__=!0;const{insert:h,remove:p,patchProp:m,createElement:k,createText:_,createComment:b,setText:D,setElementText:x,parentNode:y,nextSibling:A,setScopeId:S=An,insertStaticContent:N}=r,O=(V,K,Z,at=null,st=null,Ct=null,kt=void 0,ht=null,xt=!!K.dynamicChildren)=>{if(V===K)return;V&&!vo(V,K)&&(at=it(V),_e(V,st,Ct,!0),V=null),K.patchFlag===-2&&(xt=!1,K.dynamicChildren=null);const{type:rt,ref:wt,shapeFlag:Nt}=K;switch(rt){case ss:j(V,K,Z,at);break;case gn:G(V,K,Z,at);break;case ns:V==null&&W(K,Z,at,kt);break;case be:U(V,K,Z,at,st,Ct,kt,ht,xt);break;default:Nt&1?Q(V,K,Z,at,st,Ct,kt,ht,xt):Nt&6?_t(V,K,Z,at,st,Ct,kt,ht,xt):(Nt&64||Nt&128)&&rt.process(V,K,Z,at,st,Ct,kt,ht,xt,It)}wt!=null&&st&&lh(wt,V&&V.ref,Ct,K||V,!K)},j=(V,K,Z,at)=>{if(V==null)h(K.el=_(K.children),Z,at);else{const st=K.el=V.el;K.children!==V.children&&D(st,K.children)}},G=(V,K,Z,at)=>{V==null?h(K.el=b(K.children||""),Z,at):K.el=V.el},W=(V,K,Z,at)=>{[V.el,V.anchor]=N(V.children,K,Z,at,V.el,V.anchor)},F=({el:V,anchor:K},Z,at)=>{let st;for(;V&&V!==K;)st=A(V),h(V,Z,at),V=st;h(K,Z,at)},H=({el:V,anchor:K})=>{let Z;for(;V&&V!==K;)Z=A(V),p(V),V=Z;p(K)},Q=(V,K,Z,at,st,Ct,kt,ht,xt)=>{K.type==="svg"?kt="svg":K.type==="math"&&(kt="mathml"),V==null?J(K,Z,at,st,Ct,kt,ht,xt):P(V,K,st,Ct,kt,ht,xt)},J=(V,K,Z,at,st,Ct,kt,ht)=>{let xt,rt;const{props:wt,shapeFlag:Nt,transition:Rt,dirs:St}=V;if(xt=V.el=k(V.type,Ct,wt&&wt.is,wt),Nt&8?x(xt,V.children):Nt&16&&nt(V.children,xt,null,at,st,nm(V,Ct),kt,ht),St&&Po(V,null,at,"created"),et(xt,V,V.scopeId,kt,at),wt){for(const Kt in wt)Kt!=="value"&&!sa(Kt)&&m(xt,Kt,null,wt[Kt],Ct,V.children,at,st,re);"value"in wt&&m(xt,"value",null,wt.value,Ct),(rt=wt.onVnodeBeforeMount)&&Ln(rt,at,V)}St&&Po(V,null,at,"beforeMount");const Ft=j2(st,Rt);Ft&&Rt.beforeEnter(xt),h(xt,K,Z),((rt=wt&&wt.onVnodeMounted)||Ft||St)&&ln(()=>{rt&&Ln(rt,at,V),Ft&&Rt.enter(xt),St&&Po(V,null,at,"mounted")},st)},et=(V,K,Z,at,st)=>{if(Z&&S(V,Z),at)for(let Ct=0;Ct<at.length;Ct++)S(V,at[Ct]);if(st){let Ct=st.subTree;if(K===Ct){const kt=st.vnode;et(V,kt,kt.scopeId,kt.slotScopeIds,st.parent)}}},nt=(V,K,Z,at,st,Ct,kt,ht,xt=0)=>{for(let rt=xt;rt<V.length;rt++){const wt=V[rt]=ht?Qi(V[rt]):Wn(V[rt]);O(null,wt,K,Z,at,st,Ct,kt,ht)}},P=(V,K,Z,at,st,Ct,kt)=>{const ht=K.el=V.el;let{patchFlag:xt,dynamicChildren:rt,dirs:wt}=K;xt|=V.patchFlag&16;const Nt=V.props||ye,Rt=K.props||ye;let St;if(Z&&Wr(Z,!1),(St=Rt.onVnodeBeforeUpdate)&&Ln(St,Z,K,V),wt&&Po(K,V,Z,"beforeUpdate"),Z&&Wr(Z,!0),rt?tt(V.dynamicChildren,rt,ht,Z,at,nm(K,st),Ct):kt||Mt(V,K,ht,null,Z,at,nm(K,st),Ct,!1),xt>0){if(xt&16)ft(ht,K,Nt,Rt,Z,at,st);else if(xt&2&&Nt.class!==Rt.class&&m(ht,"class",null,Rt.class,st),xt&4&&m(ht,"style",Nt.style,Rt.style,st),xt&8){const Ft=K.dynamicProps;for(let Kt=0;Kt<Ft.length;Kt++){const pe=Ft[Kt],ae=Nt[pe],we=Rt[pe];(we!==ae||pe==="value")&&m(ht,pe,ae,we,st,V.children,Z,at,re)}}xt&1&&V.children!==K.children&&x(ht,K.children)}else!kt&&rt==null&&ft(ht,K,Nt,Rt,Z,at,st);((St=Rt.onVnodeUpdated)||wt)&&ln(()=>{St&&Ln(St,Z,K,V),wt&&Po(K,V,Z,"updated")},at)},tt=(V,K,Z,at,st,Ct,kt)=>{for(let ht=0;ht<K.length;ht++){const xt=V[ht],rt=K[ht],wt=xt.el&&(xt.type===be||!vo(xt,rt)||xt.shapeFlag&70)?y(xt.el):Z;O(xt,rt,wt,null,at,st,Ct,kt,!0)}},ft=(V,K,Z,at,st,Ct,kt)=>{if(Z!==at){if(Z!==ye)for(const ht in Z)!sa(ht)&&!(ht in at)&&m(V,ht,Z[ht],null,kt,K.children,st,Ct,re);for(const ht in at){if(sa(ht))continue;const xt=at[ht],rt=Z[ht];xt!==rt&&ht!=="value"&&m(V,ht,rt,xt,kt,K.children,st,Ct,re)}"value"in at&&m(V,"value",Z.value,at.value,kt)}},U=(V,K,Z,at,st,Ct,kt,ht,xt)=>{const rt=K.el=V?V.el:_(""),wt=K.anchor=V?V.anchor:_("");let{patchFlag:Nt,dynamicChildren:Rt,slotScopeIds:St}=K;St&&(ht=ht?ht.concat(St):St),V==null?(h(rt,Z,at),h(wt,Z,at),nt(K.children||[],Z,wt,st,Ct,kt,ht,xt)):Nt>0&&Nt&64&&Rt&&V.dynamicChildren?(tt(V.dynamicChildren,Rt,Z,st,Ct,kt,ht),(K.key!=null||st&&K===st.subTree)&&Pb(V,K,!0)):Mt(V,K,Z,wt,st,Ct,kt,ht,xt)},_t=(V,K,Z,at,st,Ct,kt,ht,xt)=>{K.slotScopeIds=ht,V==null?K.shapeFlag&512?st.ctx.activate(K,Z,at,kt,xt):Ot(K,Z,at,st,Ct,kt,xt):Ut(V,K,xt)},Ot=(V,K,Z,at,st,Ct,kt)=>{const ht=V.component=G2(V,at,st);if(Tl(V)&&(ht.ctx.renderer=It),Y2(ht),ht.asyncDep){if(st&&st.registerDep(ht,mt),!V.el){const xt=ht.subTree=he(gn);G(null,xt,K,Z)}}else mt(ht,V,K,Z,st,Ct,kt)},Ut=(V,K,Z)=>{const at=K.component=V.component;if(Ez(V,K,Z))if(at.asyncDep&&!at.asyncResolved){yt(at,K,Z);return}else at.next=K,mz(at.update),at.effect.dirty=!0,at.update();else K.el=V.el,at.vnode=K},mt=(V,K,Z,at,st,Ct,kt)=>{const ht=()=>{if(V.isMounted){let{next:wt,bu:Nt,u:Rt,parent:St,vnode:Ft}=V;{const mn=F2(V);if(mn){wt&&(wt.el=Ft.el,yt(V,wt,kt)),mn.asyncDep.then(()=>{V.isUnmounted||ht()});return}}let Kt=wt,pe;Wr(V,!1),wt?(wt.el=Ft.el,yt(V,wt,kt)):wt=Ft,Nt&&aa(Nt),(pe=wt.props&&wt.props.onVnodeBeforeUpdate)&&Ln(pe,St,wt,Ft),Wr(V,!0);const ae=Ku(V),we=V.subTree;V.subTree=ae,O(we,ae,y(we.el),it(we),V,st,Ct),wt.el=ae.el,Kt===null&&xb(V,ae.el),Rt&&ln(Rt,st),(pe=wt.props&&wt.props.onVnodeUpdated)&&ln(()=>Ln(pe,St,wt,Ft),st)}else{let wt;const{el:Nt,props:Rt}=K,{bm:St,m:Ft,parent:Kt}=V,pe=es(K);if(Wr(V,!1),St&&aa(St),!pe&&(wt=Rt&&Rt.onVnodeBeforeMount)&&Ln(wt,Kt,K),Wr(V,!0),Nt&&ee){const ae=()=>{V.subTree=Ku(V),ee(Nt,V.subTree,V,st,null)};pe?K.type.__asyncLoader().then(()=>!V.isUnmounted&&ae()):ae()}else{const ae=V.subTree=Ku(V);O(null,ae,Z,at,V,st,Ct),K.el=ae.el}if(Ft&&ln(Ft,st),!pe&&(wt=Rt&&Rt.onVnodeMounted)){const ae=K;ln(()=>Ln(wt,Kt,ae),st)}(K.shapeFlag&256||Kt&&es(Kt.vnode)&&Kt.vnode.shapeFlag&256)&&V.a&&ln(V.a,st),V.isMounted=!0,K=Z=at=null}},xt=V.effect=new ga(ht,An,()=>Th(rt),V.scope),rt=V.update=()=>{xt.dirty&&xt.run()};rt.id=V.uid,Wr(V,!0),rt()},yt=(V,K,Z)=>{K.component=V;const at=V.vnode.props;V.vnode=K,V.next=null,g7(V,K.props,at,Z),b7(V,K.children,Z),dr(),q1(V),ur()},Mt=(V,K,Z,at,st,Ct,kt,ht,xt=!1)=>{const rt=V&&V.children,wt=V?V.shapeFlag:0,Nt=K.children,{patchFlag:Rt,shapeFlag:St}=K;if(Rt>0){if(Rt&128){qt(rt,Nt,Z,at,st,Ct,kt,ht,xt);return}else if(Rt&256){Ee(rt,Nt,Z,at,st,Ct,kt,ht,xt);return}}St&8?(wt&16&&re(rt,st,Ct),Nt!==rt&&x(Z,Nt)):wt&16?St&16?qt(rt,Nt,Z,at,st,Ct,kt,ht,xt):re(rt,st,Ct,!0):(wt&8&&x(Z,""),St&16&&nt(Nt,Z,at,st,Ct,kt,ht,xt))},Ee=(V,K,Z,at,st,Ct,kt,ht,xt)=>{V=V||ia,K=K||ia;const rt=V.length,wt=K.length,Nt=Math.min(rt,wt);let Rt;for(Rt=0;Rt<Nt;Rt++){const St=K[Rt]=xt?Qi(K[Rt]):Wn(K[Rt]);O(V[Rt],St,Z,null,st,Ct,kt,ht,xt)}rt>wt?re(V,st,Ct,!0,!1,Nt):nt(K,Z,at,st,Ct,kt,ht,xt,Nt)},qt=(V,K,Z,at,st,Ct,kt,ht,xt)=>{let rt=0;const wt=K.length;let Nt=V.length-1,Rt=wt-1;for(;rt<=Nt&&rt<=Rt;){const St=V[rt],Ft=K[rt]=xt?Qi(K[rt]):Wn(K[rt]);if(vo(St,Ft))O(St,Ft,Z,null,st,Ct,kt,ht,xt);else break;rt++}for(;rt<=Nt&&rt<=Rt;){const St=V[Nt],Ft=K[Rt]=xt?Qi(K[Rt]):Wn(K[Rt]);if(vo(St,Ft))O(St,Ft,Z,null,st,Ct,kt,ht,xt);else break;Nt--,Rt--}if(rt>Nt){if(rt<=Rt){const St=Rt+1,Ft=St<wt?K[St].el:at;for(;rt<=Rt;)O(null,K[rt]=xt?Qi(K[rt]):Wn(K[rt]),Z,Ft,st,Ct,kt,ht,xt),rt++}}else if(rt>Rt)for(;rt<=Nt;)_e(V[rt],st,Ct,!0),rt++;else{const St=rt,Ft=rt,Kt=new Map;for(rt=Ft;rt<=Rt;rt++){const Ze=K[rt]=xt?Qi(K[rt]):Wn(K[rt]);Ze.key!=null&&Kt.set(Ze.key,rt)}let pe,ae=0;const we=Rt-Ft+1;let mn=!1,qo=0;const We=new Array(we);for(rt=0;rt<we;rt++)We[rt]=0;for(rt=St;rt<=Nt;rt++){const Ze=V[rt];if(ae>=we){_e(Ze,st,Ct,!0);continue}let je;if(Ze.key!=null)je=Kt.get(Ze.key);else for(pe=Ft;pe<=Rt;pe++)if(We[pe-Ft]===0&&vo(Ze,K[pe])){je=pe;break}je===void 0?_e(Ze,st,Ct,!0):(We[je-Ft]=rt+1,je>=qo?qo=je:mn=!0,O(Ze,K[je],Z,null,st,Ct,kt,ht,xt),ae++)}const bs=mn?C7(We):ia;for(pe=bs.length-1,rt=we-1;rt>=0;rt--){const Ze=Ft+rt,je=K[Ze],Ge=Ze+1<wt?K[Ze+1].el:at;We[rt]===0?O(null,je,Z,Ge,st,Ct,kt,ht,xt):mn&&(pe<0||rt!==bs[pe]?Re(je,Z,Ge,2):pe--)}}},Re=(V,K,Z,at,st=null)=>{const{el:Ct,type:kt,transition:ht,children:xt,shapeFlag:rt}=V;if(rt&6){Re(V.component.subTree,K,Z,at);return}if(rt&128){V.suspense.move(K,Z,at);return}if(rt&64){kt.move(V,K,Z,It);return}if(kt===be){h(Ct,K,Z);for(let Nt=0;Nt<xt.length;Nt++)Re(xt[Nt],K,Z,at);h(V.anchor,K,Z);return}if(kt===ns){F(V,K,Z);return}if(at!==2&&rt&1&&ht)if(at===0)ht.beforeEnter(Ct),h(Ct,K,Z),ln(()=>ht.enter(Ct),st);else{const{leave:Nt,delayLeave:Rt,afterLeave:St}=ht,Ft=()=>h(Ct,K,Z),Kt=()=>{Nt(Ct,()=>{Ft(),St&&St()})};Rt?Rt(Ct,Ft,Kt):Kt()}else h(Ct,K,Z)},_e=(V,K,Z,at=!1,st=!1)=>{const{type:Ct,props:kt,ref:ht,children:xt,dynamicChildren:rt,shapeFlag:wt,patchFlag:Nt,dirs:Rt}=V;if(ht!=null&&lh(ht,null,Z,V,!0),wt&256){K.ctx.deactivate(V);return}const St=wt&1&&Rt,Ft=!es(V);let Kt;if(Ft&&(Kt=kt&&kt.onVnodeBeforeUnmount)&&Ln(Kt,K,V),wt&6)te(V.component,Z,at);else{if(wt&128){V.suspense.unmount(Z,at);return}St&&Po(V,null,K,"beforeUnmount"),wt&64?V.type.remove(V,K,Z,st,It,at):rt&&(Ct!==be||Nt>0&&Nt&64)?re(rt,K,Z,!1,!0):(Ct===be&&Nt&384||!st&&wt&16)&&re(xt,K,Z),at&&At(V)}(Ft&&(Kt=kt&&kt.onVnodeUnmounted)||St)&&ln(()=>{Kt&&Ln(Kt,K,V),St&&Po(V,null,K,"unmounted")},Z)},At=V=>{const{type:K,el:Z,anchor:at,transition:st}=V;if(K===be){jt(Z,at);return}if(K===ns){H(V);return}const Ct=()=>{p(Z),st&&!st.persisted&&st.afterLeave&&st.afterLeave()};if(V.shapeFlag&1&&st&&!st.persisted){const{leave:kt,delayLeave:ht}=st,xt=()=>kt(Z,Ct);ht?ht(V.el,Ct,xt):xt()}else Ct()},jt=(V,K)=>{let Z;for(;V!==K;)Z=A(V),p(V),V=Z;p(K)},te=(V,K,Z)=>{const{bum:at,scope:st,update:Ct,subTree:kt,um:ht}=V;at&&aa(at),st.stop(),Ct&&(Ct.active=!1,_e(kt,V,K,Z)),ht&&ln(ht,K),ln(()=>{V.isUnmounted=!0},K),K&&K.pendingBranch&&!K.isUnmounted&&V.asyncDep&&!V.asyncResolved&&V.suspenseId===K.pendingId&&(K.deps--,K.deps===0&&K.resolve())},re=(V,K,Z,at=!1,st=!1,Ct=0)=>{for(let kt=Ct;kt<V.length;kt++)_e(V[kt],K,Z,at,st)},it=V=>V.shapeFlag&6?it(V.component.subTree):V.shapeFlag&128?V.suspense.next():A(V.anchor||V.el);let ct=!1;const Et=(V,K,Z)=>{V==null?K._vnode&&_e(K._vnode,null,null,!0):O(K._vnode||null,V,K,null,null,null,Z),ct||(ct=!0,q1(),ah(),ct=!1),K._vnode=V},It={p:O,um:_e,m:Re,r:At,mt:Ot,mc:nt,pc:Mt,pbc:tt,n:it,o:r};let Wt,ee;return s&&([Wt,ee]=s(It)),{render:Et,hydrate:Wt,createApp:u7(Et,Wt)}}function nm({type:r,props:s},l){return l==="svg"&&r==="foreignObject"||l==="mathml"&&r==="annotation-xml"&&s&&s.encoding&&s.encoding.includes("html")?void 0:l}function Wr({effect:r,update:s},l){r.allowRecurse=s.allowRecurse=l}function j2(r,s){return(!r||r&&!r.pendingBranch)&&s&&!s.persisted}function Pb(r,s,l=!1){const h=r.children,p=s.children;if(zt(h)&&zt(p))for(let m=0;m<h.length;m++){const k=h[m];let _=p[m];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=p[m]=Qi(p[m]),_.el=k.el),l||Pb(k,_)),_.type===ss&&(_.el=k.el)}}function C7(r){const s=r.slice(),l=[0];let h,p,m,k,_;const b=r.length;for(h=0;h<b;h++){const D=r[h];if(D!==0){if(p=l[l.length-1],r[p]<D){s[h]=p,l.push(h);continue}for(m=0,k=l.length-1;m<k;)_=m+k>>1,r[l[_]]<D?m=_+1:k=_;D<r[l[m]]&&(m>0&&(s[h]=l[m-1]),l[m]=h)}}for(m=l.length,k=l[m-1];m-- >0;)l[m]=k,k=s[k];return l}function F2(r){const s=r.subTree.component;if(s)return s.asyncDep&&!s.asyncResolved?s:F2(s)}const v7=r=>r.__isTeleport,ol=r=>r&&(r.disabled||r.disabled===""),oE=r=>typeof SVGElement<"u"&&r instanceof SVGElement,iE=r=>typeof MathMLElement=="function"&&r instanceof MathMLElement,jm=(r,s)=>{const l=r&&r.to;return Oe(l)?s?s(l):null:l},y7={name:"Teleport",__isTeleport:!0,process(r,s,l,h,p,m,k,_,b,D){const{mc:x,pc:y,pbc:A,o:{insert:S,querySelector:N,createText:O,createComment:j}}=D,G=ol(s.props);let{shapeFlag:W,children:F,dynamicChildren:H}=s;if(r==null){const Q=s.el=O(""),J=s.anchor=O("");S(Q,l,h),S(J,l,h);const et=s.target=jm(s.props,N),nt=s.targetAnchor=O("");et&&(S(nt,et),k==="svg"||oE(et)?k="svg":(k==="mathml"||iE(et))&&(k="mathml"));const P=(tt,ft)=>{W&16&&x(F,tt,ft,p,m,k,_,b)};G?P(l,J):et&&P(et,nt)}else{s.el=r.el;const Q=s.anchor=r.anchor,J=s.target=r.target,et=s.targetAnchor=r.targetAnchor,nt=ol(r.props),P=nt?l:J,tt=nt?Q:et;if(k==="svg"||oE(J)?k="svg":(k==="mathml"||iE(J))&&(k="mathml"),H?(A(r.dynamicChildren,H,P,p,m,k,_),Pb(r,s,!0)):b||y(r,s,P,tt,p,m,k,_,!1),G)nt?s.props&&r.props&&s.props.to!==r.props.to&&(s.props.to=r.props.to):zu(s,l,Q,D,1);else if((s.props&&s.props.to)!==(r.props&&r.props.to)){const ft=s.target=jm(s.props,N);ft&&zu(s,ft,null,D,0)}else nt&&zu(s,J,et,D,1)}V2(s)},remove(r,s,l,h,{um:p,o:{remove:m}},k){const{shapeFlag:_,children:b,anchor:D,targetAnchor:x,target:y,props:A}=r;if(y&&m(x),k&&m(D),_&16){const S=k||!ol(A);for(let N=0;N<b.length;N++){const O=b[N];p(O,s,l,S,!!O.dynamicChildren)}}},move:zu,hydrate:E7};function zu(r,s,l,{o:{insert:h},m:p},m=2){m===0&&h(r.targetAnchor,s,l);const{el:k,anchor:_,shapeFlag:b,children:D,props:x}=r,y=m===2;if(y&&h(k,s,l),(!y||ol(x))&&b&16)for(let A=0;A<D.length;A++)p(D[A],s,l,2);y&&h(_,s,l)}function E7(r,s,l,h,p,m,{o:{nextSibling:k,parentNode:_,querySelector:b}},D){const x=s.target=jm(s.props,b);if(x){const y=x._lpa||x.firstChild;if(s.shapeFlag&16)if(ol(s.props))s.anchor=D(k(r),s,_(r),l,h,p,m),s.targetAnchor=y;else{s.anchor=k(r);let A=y;for(;A;)if(A=k(A),A&&A.nodeType===8&&A.data==="teleport anchor"){s.targetAnchor=A,x._lpa=s.targetAnchor&&k(s.targetAnchor);break}D(y,s,x,l,h,p,m)}V2(s)}return s.anchor&&k(s.anchor)}const x7=y7;function V2(r){const s=r.ctx;if(s&&s.ut){let l=r.children[0].el;for(;l&&l!==r.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",s.uid),l=l.nextSibling;s.ut()}}const be=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),ns=Symbol.for("v-stc"),il=[];let zn=null;function vt(r=!1){il.push(zn=r?null:[])}function H2(){il.pop(),zn=il[il.length-1]||null}let as=1;function Fm(r){as+=r}function $2(r){return r.dynamicChildren=as>0?zn||ia:null,H2(),as>0&&zn&&zn.push(r),r}function Dt(r,s,l,h,p,m){return $2(R(r,s,l,h,p,m,!0))}function nr(r,s,l,h,p){return $2(he(r,s,l,h,p,!0))}function rr(r){return r?r.__v_isVNode===!0:!1}function vo(r,s){return r.type===s.type&&r.key===s.key}function D7(r){}const Lh="__vInternal",U2=({key:r})=>r??null,Yu=({ref:r,ref_key:s,ref_for:l})=>(typeof r=="number"&&(r=""+r),r!=null?Oe(r)||rn(r)||Zt(r)?{i:Ye,r,k:s,f:!!l}:r:null);function R(r,s=null,l=null,h=0,p=null,m=r===be?0:1,k=!1,_=!1){const b={__v_isVNode:!0,__v_skip:!0,type:r,props:s,key:s&&U2(s),ref:s&&Yu(s),scopeId:Ih,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:h,dynamicProps:p,dynamicChildren:null,appContext:null,ctx:Ye};return _?(Ob(b,l),m&128&&r.normalize(b)):l&&(b.shapeFlag|=Oe(l)?8:16),as>0&&!k&&zn&&(b.patchFlag>0||m&6)&&b.patchFlag!==32&&zn.push(b),b}const he=T7;function T7(r,s=null,l=null,h=0,p=null,m=!1){if((!r||r===c2)&&(r=gn),rr(r)){const _=Vo(r,s,!0);return l&&Ob(_,l),as>0&&!m&&zn&&(_.shapeFlag&6?zn[zn.indexOf(r)]=_:zn.push(_)),_.patchFlag|=-2,_}if(R7(r)&&(r=r.__vccOpts),s){s=q2(s);let{class:_,style:b}=s;_&&!Oe(_)&&(s.class=vn(_)),Ie(b)&&(_b(b)&&!zt(b)&&(b=Le({},b)),s.style=vl(b))}const k=Oe(r)?1:l2(r)?128:v7(r)?64:Ie(r)?4:Zt(r)?2:0;return R(r,s,l,h,p,k,m,!0)}function q2(r){return r?_b(r)||Lh in r?Le({},r):r:null}function Vo(r,s,l=!1){const{props:h,ref:p,patchFlag:m,children:k}=r,_=s?W2(h||{},s):h;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:_,key:_&&U2(_),ref:s&&s.ref?l&&p?zt(p)?p.concat(Yu(s)):[p,Yu(s)]:Yu(s):p,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:k,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:s&&r.type!==be?m===-1?16:m|16:m,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Vo(r.ssContent),ssFallback:r.ssFallback&&Vo(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function xn(r=" ",s=0){return he(ss,null,r,s)}function Rh(r,s){const l=he(ns,null,r);return l.staticCount=s,l}function Ne(r="",s=!1){return s?(vt(),nr(gn,null,r)):he(gn,null,r)}function Wn(r){return r==null||typeof r=="boolean"?he(gn):zt(r)?he(be,null,r.slice()):typeof r=="object"?Qi(r):he(ss,null,String(r))}function Qi(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Vo(r)}function Ob(r,s){let l=0;const{shapeFlag:h}=r;if(s==null)s=null;else if(zt(s))l=16;else if(typeof s=="object")if(h&65){const p=s.default;p&&(p._c&&(p._d=!1),Ob(r,p()),p._c&&(p._d=!0));return}else{l=32;const p=s._;!p&&!(Lh in s)?s._ctx=Ye:p===3&&Ye&&(Ye.slots._===1?s._=1:(s._=2,r.patchFlag|=1024))}else Zt(s)?(s={default:s,_ctx:Ye},l=32):(s=String(s),h&64?(l=16,s=[xn(s)]):l=8);r.children=s,r.shapeFlag|=l}function W2(...r){const s={};for(let l=0;l<r.length;l++){const h=r[l];for(const p in h)if(p==="class")s.class!==h.class&&(s.class=vn([s.class,h.class]));else if(p==="style")s.style=vl([s.style,h.style]);else if(Al(p)){const m=s[p],k=h[p];k&&m!==k&&!(zt(m)&&m.includes(k))&&(s[p]=m?[].concat(m,k):k)}else p!==""&&(s[p]=h[p])}return s}function Ln(r,s,l,h=null){Kn(r,s,7,[l,h])}const S7=I2();let I7=0;function G2(r,s,l){const h=r.type,p=(s?s.appContext:r.appContext)||S7,m={uid:I7++,vnode:r,type:h,parent:s,appContext:p,root:null,next:null,subTree:null,effect:null,update:null,scope:new gb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(p.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B2(h,p),emitsOptions:a2(h,p),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:h.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=s?s.root:m,m.emit=kz.bind(null,m),r.ce&&r.ce(m),m}let tn=null;const _i=()=>tn||Ye;let dh,Vm;{const r=pb(),s=(l,h)=>{let p;return(p=r[l])||(p=r[l]=[]),p.push(h),m=>{p.length>1?p.forEach(k=>k(m)):p[0](m)}};dh=s("__VUE_INSTANCE_SETTERS__",l=>tn=l),Vm=s("__VUE_SSR_SETTERS__",l=>Il=l)}const cs=r=>{const s=tn;return dh(r),r.scope.on(),()=>{r.scope.off(),dh(s)}},Hm=()=>{tn&&tn.scope.off(),dh(null)};function K2(r){return r.vnode.shapeFlag&4}let Il=!1;function Y2(r,s=!1){s&&Vm(s);const{props:l,children:h}=r.vnode,p=K2(r);p7(r,l,p,s),m7(r,h);const m=p?M7(r,s):void 0;return s&&Vm(!1),m}function M7(r,s){const l=r.type;r.accessCache=Object.create(null),r.proxy=Ab(new Proxy(r.ctx,Om));const{setup:h}=l;if(h){const p=r.setupContext=h.length>1?Z2(r):null,m=cs(r);dr();const k=Ro(h,r,0,[r.props,p]);if(ur(),m(),ub(k)){if(k.then(Hm,Hm),s)return k.then(_=>{$m(r,_,s)}).catch(_=>{gs(_,r,0)});r.asyncDep=k}else $m(r,k,s)}else Q2(r,s)}function $m(r,s,l){Zt(s)?r.type.__ssrInlineRender?r.ssrRender=s:r.render=s:Ie(s)&&(r.setupState=yb(s)),Q2(r,l)}let uh,Um;function B7(r){uh=r,Um=s=>{s.render._rc&&(s.withProxy=new Proxy(s.ctx,qz))}}const N7=()=>!uh;function Q2(r,s,l){const h=r.type;if(!r.render){if(!s&&uh&&!h.render){const p=h.template||Bb(r).template;if(p){const{isCustomElement:m,compilerOptions:k}=r.appContext.config,{delimiters:_,compilerOptions:b}=h,D=Le(Le({isCustomElement:m,delimiters:_},k),b);h.render=uh(p,D)}}r.render=h.render||An,Um&&Um(r)}{const p=cs(r);dr();try{r7(r)}finally{ur(),p()}}}function P7(r){return r.attrsProxy||(r.attrsProxy=new Proxy(r.attrs,{get(s,l){return jn(r,"get","$attrs"),s[l]}}))}function Z2(r){const s=l=>{r.exposed=l||{}};return{get attrs(){return P7(r)},slots:r.slots,emit:r.emit,expose:s}}function zh(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(yb(Ab(r.exposed)),{get(s,l){if(l in s)return s[l];if(l in el)return el[l](r)},has(s,l){return l in s||l in el}}))}const O7=/(?:^|[-_])(\w)/g,L7=r=>r.replace(O7,s=>s.toUpperCase()).replace(/[-_]/g,"");function hh(r,s=!0){return Zt(r)?r.displayName||r.name:r.name||s&&r.__name}function J2(r,s,l=!1){let h=hh(s);if(!h&&s.__file){const p=s.__file.match(/([^/\\]+)\.\w+$/);p&&(h=p[1])}if(!h&&r&&r.parent){const p=m=>{for(const k in m)if(m[k]===s)return k};h=p(r.components||r.parent.type.components)||p(r.appContext.components)}return h?L7(h):l?"App":"Anonymous"}function R7(r){return Zt(r)&&"__vccOpts"in r}const ro=(r,s)=>YR(r,s,Il);function z7(r,s,l=ye){const h=_i(),p=Cn(s),m=Gn(s),k=t2((b,D)=>{let x;return g2(()=>{const y=r[s];Eo(x,y)&&(x=y,D())}),{get(){return b(),l.get?l.get(x):x},set(y){const A=h.vnode.props;!(A&&(s in A||p in A||m in A)&&(`onUpdate:${s}`in A||`onUpdate:${p}`in A||`onUpdate:${m}`in A))&&Eo(y,x)&&(x=y,D()),h.emit(`update:${s}`,l.set?l.set(y):y)}}}),_=s==="modelValue"?"modelModifiers":`${s}Modifiers`;return k[Symbol.iterator]=()=>{let b=0;return{next(){return b<2?{value:b++?r[_]||{}:k,done:!1}:{done:!0}}}},k}function jh(r,s,l){const h=arguments.length;return h===2?Ie(s)&&!zt(s)?rr(s)?he(r,null,[s]):he(r,s):he(r,null,s):(h>3?l=Array.prototype.slice.call(arguments,2):h===3&&rr(l)&&(l=[l]),he(r,s,l))}function j7(){}function F7(r,s,l,h){const p=l[h];if(p&&X2(p,r))return p;const m=s();return m.memo=r.slice(),l[h]=m}function X2(r,s){const l=r.memo;if(l.length!=s.length)return!1;for(let h=0;h<l.length;h++)if(Eo(l[h],s[h]))return!1;return as>0&&zn&&zn.push(r),!0}const tD="3.4.21",V7=An,H7=pz,$7=Js,U7=s2,q7={createComponentInstance:G2,setupComponent:Y2,renderComponentRoot:Ku,setCurrentRenderingInstance:fl,isVNode:rr,normalizeVNode:Wn},W7=q7,G7=null,K7=null,Y7=null;/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Q7="http://www.w3.org/2000/svg",Z7="http://www.w3.org/1998/Math/MathML",Zi=typeof document<"u"?document:null,rE=Zi&&Zi.createElement("template"),J7={insert:(r,s,l)=>{s.insertBefore(r,l||null)},remove:r=>{const s=r.parentNode;s&&s.removeChild(r)},createElement:(r,s,l,h)=>{const p=s==="svg"?Zi.createElementNS(Q7,r):s==="mathml"?Zi.createElementNS(Z7,r):Zi.createElement(r,l?{is:l}:void 0);return r==="select"&&h&&h.multiple!=null&&p.setAttribute("multiple",h.multiple),p},createText:r=>Zi.createTextNode(r),createComment:r=>Zi.createComment(r),setText:(r,s)=>{r.nodeValue=s},setElementText:(r,s)=>{r.textContent=s},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Zi.querySelector(r),setScopeId(r,s){r.setAttribute(s,"")},insertStaticContent(r,s,l,h,p,m){const k=l?l.previousSibling:s.lastChild;if(p&&(p===m||p.nextSibling))for(;s.insertBefore(p.cloneNode(!0),l),!(p===m||!(p=p.nextSibling)););else{rE.innerHTML=h==="svg"?`<svg>${r}</svg>`:h==="mathml"?`<math>${r}</math>`:r;const _=rE.content;if(h==="svg"||h==="mathml"){const b=_.firstChild;for(;b.firstChild;)_.appendChild(b.firstChild);_.removeChild(b)}s.insertBefore(_,l)}return[k?k.nextSibling:s.firstChild,l?l.previousSibling:s.lastChild]}},Hi="transition",qc="animation",ma=Symbol("_vtc"),Lb=(r,{slots:s})=>jh(m2,nD(r),s);Lb.displayName="Transition";const eD={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},X7=Lb.props=Le({},Mb,eD),Gr=(r,s=[])=>{zt(r)?r.forEach(l=>l(...s)):r&&r(...s)},sE=r=>r?zt(r)?r.some(s=>s.length>1):r.length>1:!1;function nD(r){const s={};for(const U in r)U in eD||(s[U]=r[U]);if(r.css===!1)return s;const{name:l="v",type:h,duration:p,enterFromClass:m=`${l}-enter-from`,enterActiveClass:k=`${l}-enter-active`,enterToClass:_=`${l}-enter-to`,appearFromClass:b=m,appearActiveClass:D=k,appearToClass:x=_,leaveFromClass:y=`${l}-leave-from`,leaveActiveClass:A=`${l}-leave-active`,leaveToClass:S=`${l}-leave-to`}=r,N=tj(p),O=N&&N[0],j=N&&N[1],{onBeforeEnter:G,onEnter:W,onEnterCancelled:F,onLeave:H,onLeaveCancelled:Q,onBeforeAppear:J=G,onAppear:et=W,onAppearCancelled:nt=F}=s,P=(U,_t,Ot)=>{Gi(U,_t?x:_),Gi(U,_t?D:k),Ot&&Ot()},tt=(U,_t)=>{U._isLeaving=!1,Gi(U,y),Gi(U,S),Gi(U,A),_t&&_t()},ft=U=>(_t,Ot)=>{const Ut=U?et:W,mt=()=>P(_t,U,Ot);Gr(Ut,[_t,mt]),aE(()=>{Gi(_t,U?b:m),hi(_t,U?x:_),sE(Ut)||cE(_t,h,O,mt)})};return Le(s,{onBeforeEnter(U){Gr(G,[U]),hi(U,m),hi(U,k)},onBeforeAppear(U){Gr(J,[U]),hi(U,b),hi(U,D)},onEnter:ft(!1),onAppear:ft(!0),onLeave(U,_t){U._isLeaving=!0;const Ot=()=>tt(U,_t);hi(U,y),iD(),hi(U,A),aE(()=>{U._isLeaving&&(Gi(U,y),hi(U,S),sE(H)||cE(U,h,j,Ot))}),Gr(H,[U,Ot])},onEnterCancelled(U){P(U,!1),Gr(F,[U])},onAppearCancelled(U){P(U,!0),Gr(nt,[U])},onLeaveCancelled(U){tt(U),Gr(Q,[U])}})}function tj(r){if(r==null)return null;if(Ie(r))return[om(r.enter),om(r.leave)];{const s=om(r);return[s,s]}}function om(r){return ih(r)}function hi(r,s){s.split(/\s+/).forEach(l=>l&&r.classList.add(l)),(r[ma]||(r[ma]=new Set)).add(s)}function Gi(r,s){s.split(/\s+/).forEach(h=>h&&r.classList.remove(h));const l=r[ma];l&&(l.delete(s),l.size||(r[ma]=void 0))}function aE(r){requestAnimationFrame(()=>{requestAnimationFrame(r)})}let ej=0;function cE(r,s,l,h){const p=r._endId=++ej,m=()=>{p===r._endId&&h()};if(l)return setTimeout(m,l);const{type:k,timeout:_,propCount:b}=oD(r,s);if(!k)return h();const D=k+"end";let x=0;const y=()=>{r.removeEventListener(D,A),m()},A=S=>{S.target===r&&++x>=b&&y()};setTimeout(()=>{x<b&&y()},_+1),r.addEventListener(D,A)}function oD(r,s){const l=window.getComputedStyle(r),h=N=>(l[N]||"").split(", "),p=h(`${Hi}Delay`),m=h(`${Hi}Duration`),k=lE(p,m),_=h(`${qc}Delay`),b=h(`${qc}Duration`),D=lE(_,b);let x=null,y=0,A=0;s===Hi?k>0&&(x=Hi,y=k,A=m.length):s===qc?D>0&&(x=qc,y=D,A=b.length):(y=Math.max(k,D),x=y>0?k>D?Hi:qc:null,A=x?x===Hi?m.length:b.length:0);const S=x===Hi&&/\b(transform|all)(,|$)/.test(h(`${Hi}Property`).toString());return{type:x,timeout:y,propCount:A,hasTransform:S}}function lE(r,s){for(;r.length<s.length;)r=r.concat(r);return Math.max(...s.map((l,h)=>dE(l)+dE(r[h])))}function dE(r){return r==="auto"?0:Number(r.slice(0,-1).replace(",","."))*1e3}function iD(){return document.body.offsetHeight}function nj(r,s,l){const h=r[ma];h&&(s=(s?[s,...h]:[...h]).join(" ")),s==null?r.removeAttribute("class"):l?r.setAttribute("class",s):r.className=s}const ph=Symbol("_vod"),rD=Symbol("_vsh"),sD={beforeMount(r,{value:s},{transition:l}){r[ph]=r.style.display==="none"?"":r.style.display,l&&s?l.beforeEnter(r):Wc(r,s)},mounted(r,{value:s},{transition:l}){l&&s&&l.enter(r)},updated(r,{value:s,oldValue:l},{transition:h}){!s!=!l&&(h?s?(h.beforeEnter(r),Wc(r,!0),h.enter(r)):h.leave(r,()=>{Wc(r,!1)}):Wc(r,s))},beforeUnmount(r,{value:s}){Wc(r,s)}};function Wc(r,s){r.style.display=s?r[ph]:"none",r[rD]=!s}function oj(){sD.getSSRProps=({value:r})=>{if(!r)return{style:{display:"none"}}}}const aD=Symbol("");function ij(r){const s=_i();if(!s)return;const l=s.ut=(p=r(s.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${s.uid}"]`)).forEach(m=>Wm(m,p))},h=()=>{const p=r(s.proxy);qm(s.subTree,p),l(p)};p2(h),Sl(()=>{const p=new MutationObserver(h);p.observe(s.subTree.el.parentNode,{childList:!0}),Oh(()=>p.disconnect())})}function qm(r,s){if(r.shapeFlag&128){const l=r.suspense;r=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{qm(l.activeBranch,s)})}for(;r.component;)r=r.component.subTree;if(r.shapeFlag&1&&r.el)Wm(r.el,s);else if(r.type===be)r.children.forEach(l=>qm(l,s));else if(r.type===ns){let{el:l,anchor:h}=r;for(;l&&(Wm(l,s),l!==h);)l=l.nextSibling}}function Wm(r,s){if(r.nodeType===1){const l=r.style;let h="";for(const p in s)l.setProperty(`--${p}`,s[p]),h+=`--${p}: ${s[p]};`;l[aD]=h}}const rj=/(^|;)\s*display\s*:/;function sj(r,s,l){const h=r.style,p=Oe(l);let m=!1;if(l&&!p){if(s)if(Oe(s))for(const k of s.split(";")){const _=k.slice(0,k.indexOf(":")).trim();l[_]==null&&Qu(h,_,"")}else for(const k in s)l[k]==null&&Qu(h,k,"");for(const k in l)k==="display"&&(m=!0),Qu(h,k,l[k])}else if(p){if(s!==l){const k=h[aD];k&&(l+=";"+k),h.cssText=l,m=rj.test(l)}}else s&&r.removeAttribute("style");ph in r&&(r[ph]=m?h.display:"",r[rD]&&(h.display="none"))}const uE=/\s*!important$/;function Qu(r,s,l){if(zt(l))l.forEach(h=>Qu(r,s,h));else if(l==null&&(l=""),s.startsWith("--"))r.setProperty(s,l);else{const h=aj(r,s);uE.test(l)?r.setProperty(Gn(h),l.replace(uE,""),"important"):r[h]=l}}const hE=["Webkit","Moz","ms"],im={};function aj(r,s){const l=im[s];if(l)return l;let h=Cn(s);if(h!=="filter"&&h in r)return im[s]=h;h=Cl(h);for(let p=0;p<hE.length;p++){const m=hE[p]+h;if(m in r)return im[s]=m}return s}const pE="http://www.w3.org/1999/xlink";function cj(r,s,l,h,p){if(h&&s.startsWith("xlink:"))l==null?r.removeAttributeNS(pE,s.slice(6,s.length)):r.setAttributeNS(pE,s,l);else{const m=CR(s);l==null||m&&!Px(l)?r.removeAttribute(s):r.setAttribute(s,m?"":l)}}function lj(r,s,l,h,p,m,k){if(s==="innerHTML"||s==="textContent"){h&&k(h,p,m),r[s]=l??"";return}const _=r.tagName;if(s==="value"&&_!=="PROGRESS"&&!_.includes("-")){const D=_==="OPTION"?r.getAttribute("value")||"":r.value,x=l??"";(D!==x||!("_value"in r))&&(r.value=x),l==null&&r.removeAttribute(s),r._value=l;return}let b=!1;if(l===""||l==null){const D=typeof r[s];D==="boolean"?l=Px(l):l==null&&D==="string"?(l="",b=!0):D==="number"&&(l=0,b=!0)}try{r[s]=l}catch{}b&&r.removeAttribute(s)}function pi(r,s,l,h){r.addEventListener(s,l,h)}function dj(r,s,l,h){r.removeEventListener(s,l,h)}const gE=Symbol("_vei");function uj(r,s,l,h,p=null){const m=r[gE]||(r[gE]={}),k=m[s];if(h&&k)k.value=h;else{const[_,b]=hj(s);if(h){const D=m[s]=fj(h,p);pi(r,_,D,b)}else k&&(dj(r,_,k,b),m[s]=void 0)}}const fE=/(?:Once|Passive|Capture)$/;function hj(r){let s;if(fE.test(r)){s={};let h;for(;h=r.match(fE);)r=r.slice(0,r.length-h[0].length),s[h[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Gn(r.slice(2)),s]}let rm=0;const pj=Promise.resolve(),gj=()=>rm||(pj.then(()=>rm=0),rm=Date.now());function fj(r,s){const l=h=>{if(!h._vts)h._vts=Date.now();else if(h._vts<=l.attached)return;Kn(mj(h,l.value),s,5,[h])};return l.value=r,l.attached=gj(),l}function mj(r,s){if(zt(s)){const l=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{l.call(r),r._stopped=!0},s.map(h=>p=>!p._stopped&&h&&h(p))}else return s}const mE=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)>96&&r.charCodeAt(2)<123,bj=(r,s,l,h,p,m,k,_,b)=>{const D=p==="svg";s==="class"?nj(r,h,D):s==="style"?sj(r,l,h):Al(s)?lb(s)||uj(r,s,l,h,k):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):kj(r,s,h,D))?lj(r,s,h,m,k,_,b):(s==="true-value"?r._trueValue=h:s==="false-value"&&(r._falseValue=h),cj(r,s,h,D))};function kj(r,s,l,h){if(h)return!!(s==="innerHTML"||s==="textContent"||s in r&&mE(s)&&Zt(l));if(s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&r.tagName==="INPUT"||s==="type"&&r.tagName==="TEXTAREA")return!1;if(s==="width"||s==="height"){const p=r.tagName;if(p==="IMG"||p==="VIDEO"||p==="CANVAS"||p==="SOURCE")return!1}return mE(s)&&Oe(l)?!1:s in r}/*! #__NO_SIDE_EFFECTS__ */function cD(r,s){const l=Dl(r);class h extends Fh{constructor(m){super(l,m,s)}}return h.def=l,h}/*! #__NO_SIDE_EFFECTS__ */const wj=r=>cD(r,kD),_j=typeof HTMLElement<"u"?HTMLElement:class{};class Fh extends _j{constructor(s,l={},h){super(),this._def=s,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&h?h(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),El(()=>{this._connected||(Gm(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let h=0;h<this.attributes.length;h++)this._setAttr(this.attributes[h].name);this._ob=new MutationObserver(h=>{for(const p of h)this._setAttr(p.attributeName)}),this._ob.observe(this,{attributes:!0});const s=(h,p=!1)=>{const{props:m,styles:k}=h;let _;if(m&&!zt(m))for(const b in m){const D=m[b];(D===Number||D&&D.type===Number)&&(b in this._props&&(this._props[b]=ih(this._props[b])),(_||(_=Object.create(null)))[Cn(b)]=!0)}this._numberProps=_,p&&this._resolveProps(h),this._applyStyles(k),this._update()},l=this._def.__asyncLoader;l?l().then(h=>s(h,!0)):s(this._def)}_resolveProps(s){const{props:l}=s,h=zt(l)?l:Object.keys(l||{});for(const p of Object.keys(this))p[0]!=="_"&&h.includes(p)&&this._setProp(p,this[p],!0,!1);for(const p of h.map(Cn))Object.defineProperty(this,p,{get(){return this._getProp(p)},set(m){this._setProp(p,m)}})}_setAttr(s){let l=this.getAttribute(s);const h=Cn(s);this._numberProps&&this._numberProps[h]&&(l=ih(l)),this._setProp(h,l,!1)}_getProp(s){return this._props[s]}_setProp(s,l,h=!0,p=!0){l!==this._props[s]&&(this._props[s]=l,p&&this._instance&&this._update(),h&&(l===!0?this.setAttribute(Gn(s),""):typeof l=="string"||typeof l=="number"?this.setAttribute(Gn(s),l+""):l||this.removeAttribute(Gn(s))))}_update(){Gm(this._createVNode(),this.shadowRoot)}_createVNode(){const s=he(this._def,Le({},this._props));return this._instance||(s.ce=l=>{this._instance=l,l.isCE=!0;const h=(m,k)=>{this.dispatchEvent(new CustomEvent(m,{detail:k}))};l.emit=(m,...k)=>{h(m,k),Gn(m)!==m&&h(Gn(m),k)};let p=this;for(;p=p&&(p.parentNode||p.host);)if(p instanceof Fh){l.parent=p._instance,l.provides=p._instance.provides;break}}),s}_applyStyles(s){s&&s.forEach(l=>{const h=document.createElement("style");h.textContent=l,this.shadowRoot.appendChild(h)})}}function Aj(r="$style"){{const s=_i();if(!s)return ye;const l=s.type.__cssModules;if(!l)return ye;const h=l[r];return h||ye}}const lD=new WeakMap,dD=new WeakMap,gh=Symbol("_moveCb"),bE=Symbol("_enterCb"),uD={name:"TransitionGroup",props:Le({},X7,{tag:String,moveClass:String}),setup(r,{slots:s}){const l=_i(),h=Ib();let p,m;return Nh(()=>{if(!p.length)return;const k=r.moveClass||`${r.name||"v"}-move`;if(!Dj(p[0].el,l.vnode.el,k))return;p.forEach(yj),p.forEach(Ej);const _=p.filter(xj);iD(),_.forEach(b=>{const D=b.el,x=D.style;hi(D,k),x.transform=x.webkitTransform=x.transitionDuration="";const y=D[gh]=A=>{A&&A.target!==D||(!A||/transform$/.test(A.propertyName))&&(D.removeEventListener("transitionend",y),D[gh]=null,Gi(D,k))};D.addEventListener("transitionend",y)})}),()=>{const k=ce(r),_=nD(k);let b=k.tag||be;p=m,m=s.default?Mh(s.default()):[];for(let D=0;D<m.length;D++){const x=m[D];x.key!=null&&rs(x,fa(x,_,h,l))}if(p)for(let D=0;D<p.length;D++){const x=p[D];rs(x,fa(x,_,h,l)),lD.set(x,x.el.getBoundingClientRect())}return he(b,null,m)}}},Cj=r=>delete r.mode;uD.props;const vj=uD;function yj(r){const s=r.el;s[gh]&&s[gh](),s[bE]&&s[bE]()}function Ej(r){dD.set(r,r.el.getBoundingClientRect())}function xj(r){const s=lD.get(r),l=dD.get(r),h=s.left-l.left,p=s.top-l.top;if(h||p){const m=r.el.style;return m.transform=m.webkitTransform=`translate(${h}px,${p}px)`,m.transitionDuration="0s",r}}function Dj(r,s,l){const h=r.cloneNode(),p=r[ma];p&&p.forEach(_=>{_.split(/\s+/).forEach(b=>b&&h.classList.remove(b))}),l.split(/\s+/).forEach(_=>_&&h.classList.add(_)),h.style.display="none";const m=s.nodeType===1?s:s.parentNode;m.appendChild(h);const{hasTransform:k}=oD(h);return m.removeChild(h),k}const sr=r=>{const s=r.props["onUpdate:modelValue"]||!1;return zt(s)?l=>aa(s,l):s};function Tj(r){r.target.composing=!0}function kE(r){const s=r.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const ao=Symbol("_assign"),Ho={created(r,{modifiers:{lazy:s,trim:l,number:h}},p){r[ao]=sr(p);const m=h||p.props&&p.props.type==="number";pi(r,s?"change":"input",k=>{if(k.target.composing)return;let _=r.value;l&&(_=_.trim()),m&&(_=dl(_)),r[ao](_)}),l&&pi(r,"change",()=>{r.value=r.value.trim()}),s||(pi(r,"compositionstart",Tj),pi(r,"compositionend",kE),pi(r,"change",kE))},mounted(r,{value:s}){r.value=s??""},beforeUpdate(r,{value:s,modifiers:{lazy:l,trim:h,number:p}},m){if(r[ao]=sr(m),r.composing)return;const k=p||r.type==="number"?dl(r.value):r.value,_=s??"";k!==_&&(document.activeElement===r&&r.type!=="range"&&(l||h&&r.value.trim()===_)||(r.value=_))}},Rb={deep:!0,created(r,s,l){r[ao]=sr(l),pi(r,"change",()=>{const h=r._modelValue,p=ba(r),m=r.checked,k=r[ao];if(zt(h)){const _=yh(h,p),b=_!==-1;if(m&&!b)k(h.concat(p));else if(!m&&b){const D=[...h];D.splice(_,1),k(D)}}else if(ps(h)){const _=new Set(h);m?_.add(p):_.delete(p),k(_)}else k(hD(r,m))})},mounted:wE,beforeUpdate(r,s,l){r[ao]=sr(l),wE(r,s,l)}};function wE(r,{value:s,oldValue:l},h){r._modelValue=s,zt(s)?r.checked=yh(s,h.props.value)>-1:ps(s)?r.checked=s.has(h.props.value):s!==l&&(r.checked=ir(s,hD(r,!0)))}const ls={created(r,{value:s},l){r.checked=ir(s,l.props.value),r[ao]=sr(l),pi(r,"change",()=>{r[ao](ba(r))})},beforeUpdate(r,{value:s,oldValue:l},h){r[ao]=sr(h),s!==l&&(r.checked=ir(s,h.props.value))}},zb={deep:!0,created(r,{value:s,modifiers:{number:l}},h){const p=ps(s);pi(r,"change",()=>{const m=Array.prototype.filter.call(r.options,k=>k.selected).map(k=>l?dl(ba(k)):ba(k));r[ao](r.multiple?p?new Set(m):m:m[0]),r._assigning=!0,El(()=>{r._assigning=!1})}),r[ao]=sr(h)},mounted(r,{value:s,modifiers:{number:l}}){_E(r,s,l)},beforeUpdate(r,s,l){r[ao]=sr(l)},updated(r,{value:s,modifiers:{number:l}}){r._assigning||_E(r,s,l)}};function _E(r,s,l){const h=r.multiple,p=zt(s);if(!(h&&!p&&!ps(s))){for(let m=0,k=r.options.length;m<k;m++){const _=r.options[m],b=ba(_);if(h)if(p){const D=typeof b;D==="string"||D==="number"?_.selected=s.includes(l?dl(b):b):_.selected=yh(s,b)>-1}else _.selected=s.has(b);else if(ir(ba(_),s)){r.selectedIndex!==m&&(r.selectedIndex=m);return}}!h&&r.selectedIndex!==-1&&(r.selectedIndex=-1)}}function ba(r){return"_value"in r?r._value:r.value}function hD(r,s){const l=s?"_trueValue":"_falseValue";return l in r?r[l]:s}const pD={created(r,s,l){ju(r,s,l,null,"created")},mounted(r,s,l){ju(r,s,l,null,"mounted")},beforeUpdate(r,s,l,h){ju(r,s,l,h,"beforeUpdate")},updated(r,s,l,h){ju(r,s,l,h,"updated")}};function gD(r,s){switch(r){case"SELECT":return zb;case"TEXTAREA":return Ho;default:switch(s){case"checkbox":return Rb;case"radio":return ls;default:return Ho}}}function ju(r,s,l,h,p){const k=gD(r.tagName,l.props&&l.props.type)[p];k&&k(r,s,l,h)}function Sj(){Ho.getSSRProps=({value:r})=>({value:r}),ls.getSSRProps=({value:r},s)=>{if(s.props&&ir(s.props.value,r))return{checked:!0}},Rb.getSSRProps=({value:r},s)=>{if(zt(r)){if(s.props&&yh(r,s.props.value)>-1)return{checked:!0}}else if(ps(r)){if(s.props&&r.has(s.props.value))return{checked:!0}}else if(r)return{checked:!0}},pD.getSSRProps=(r,s)=>{if(typeof s.type!="string")return;const l=gD(s.type.toUpperCase(),s.props&&s.props.type);if(l.getSSRProps)return l.getSSRProps(r,s)}}const Ij=["ctrl","shift","alt","meta"],Mj={stop:r=>r.stopPropagation(),prevent:r=>r.preventDefault(),self:r=>r.target!==r.currentTarget,ctrl:r=>!r.ctrlKey,shift:r=>!r.shiftKey,alt:r=>!r.altKey,meta:r=>!r.metaKey,left:r=>"button"in r&&r.button!==0,middle:r=>"button"in r&&r.button!==1,right:r=>"button"in r&&r.button!==2,exact:(r,s)=>Ij.some(l=>r[`${l}Key`]&&!s.includes(l))},Bj=(r,s)=>{const l=r._withMods||(r._withMods={}),h=s.join(".");return l[h]||(l[h]=(p,...m)=>{for(let k=0;k<s.length;k++){const _=Mj[s[k]];if(_&&_(p,s))return}return r(p,...m)})},Nj={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pj=(r,s)=>{const l=r._withKeys||(r._withKeys={}),h=s.join(".");return l[h]||(l[h]=p=>{if(!("key"in p))return;const m=Gn(p.key);if(s.some(k=>k===m||Nj[k]===m))return r(p)})},fD=Le({patchProp:bj},J7);let rl,AE=!1;function mD(){return rl||(rl=L2(fD))}function bD(){return rl=AE?rl:R2(fD),AE=!0,rl}const Gm=(...r)=>{mD().render(...r)},kD=(...r)=>{bD().hydrate(...r)},wD=(...r)=>{const s=mD().createApp(...r),{mount:l}=s;return s.mount=h=>{const p=AD(h);if(!p)return;const m=s._component;!Zt(m)&&!m.render&&!m.template&&(m.template=p.innerHTML),p.innerHTML="";const k=l(p,!1,_D(p));return p instanceof Element&&(p.removeAttribute("v-cloak"),p.setAttribute("data-v-app","")),k},s},Oj=(...r)=>{const s=bD().createApp(...r),{mount:l}=s;return s.mount=h=>{const p=AD(h);if(p)return l(p,!0,_D(p))},s};function _D(r){if(r instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&r instanceof MathMLElement)return"mathml"}function AD(r){return Oe(r)?document.querySelector(r):r}let CE=!1;const Lj=()=>{CE||(CE=!0,Sj(),oj())};/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Rj=()=>{},zj=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:m2,BaseTransitionPropsValidators:Mb,Comment:gn,DeprecationTypes:Y7,EffectScope:gb,ErrorCodes:hz,ErrorTypeStrings:H7,Fragment:be,KeepAlive:Vz,ReactiveEffect:ga,Static:ns,Suspense:Iz,Teleport:x7,Text:ss,TrackOpTypes:rz,Transition:Lb,TransitionGroup:vj,TriggerOpTypes:sz,VueElement:Fh,assertNumber:uz,callWithAsyncErrorHandling:Kn,callWithErrorHandling:Ro,camelize:Cn,capitalize:Cl,cloneVNode:Vo,compatUtils:K7,compile:Rj,computed:ro,createApp:wD,createBlock:nr,createCommentVNode:Ne,createElementBlock:Dt,createElementVNode:R,createHydrationRenderer:R2,createPropsRestProxy:o7,createRenderer:L2,createSSRApp:Oj,createSlots:$z,createStaticVNode:Rh,createTextVNode:xn,createVNode:he,customRef:t2,defineAsyncComponent:jz,defineComponent:Dl,defineCustomElement:cD,defineEmits:Gz,defineExpose:Kz,defineModel:Zz,defineOptions:Yz,defineProps:Wz,defineSSRCustomElement:wj,defineSlots:Qz,devtools:$7,effect:DR,effectScope:yR,getCurrentInstance:_i,getCurrentScope:Rx,getTransitionRawChildren:Mh,guardReactiveProps:q2,h:jh,handleError:gs,hasInjectionContext:h7,hydrate:kD,initCustomFormatter:j7,initDirectivesForSSR:Lj,inject:zo,isMemoSame:X2,isProxy:_b,isReactive:ts,isReadonly:is,isRef:rn,isRuntimeOnly:N7,isShallow:ul,isVNode:rr,markRaw:Ab,mergeDefaults:e7,mergeModels:n7,mergeProps:W2,nextTick:El,normalizeClass:vn,normalizeProps:_R,normalizeStyle:vl,onActivated:k2,onBeforeMount:A2,onBeforeUnmount:Ph,onBeforeUpdate:C2,onDeactivated:w2,onErrorCaptured:x2,onMounted:Sl,onRenderTracked:E2,onRenderTriggered:y2,onScopeDispose:ER,onServerPrefetch:v2,onUnmounted:Oh,onUpdated:Nh,openBlock:vt,popScopeId:_z,provide:nl,proxyRefs:yb,pushScopeId:wz,queuePostFlushCb:sh,reactive:yl,readonly:wb,ref:la,registerRuntimeCompiler:B7,render:Gm,renderList:pn,renderSlot:Nm,resolveComponent:_n,resolveDirective:Tz,resolveDynamicComponent:Dz,resolveFilter:G7,resolveTransitionHooks:fa,setBlockTracking:Fm,setDevtoolsHook:U7,setTransitionHooks:rs,shallowReactive:kb,shallowReadonly:KR,shallowRef:Jx,ssrContextKey:u2,ssrUtils:W7,stop:TR,toDisplayString:Yt,toHandlerKey:Xc,toHandlers:Uz,toRaw:ce,toRef:iz,toRefs:ez,toValue:JR,transformVNodeArgs:D7,triggerRef:ZR,unref:er,useAttrs:t7,useCssModule:Aj,useCssVars:ij,useModel:z7,useSSRContext:h2,useSlots:Xz,useTransitionState:Ib,vModelCheckbox:Rb,vModelDynamic:pD,vModelRadio:ls,vModelSelect:zb,vModelText:Ho,vShow:sD,version:tD,warn:V7,watch:ha,watchEffect:Lz,watchPostEffect:p2,watchSyncEffect:g2,withAsyncContext:i7,withCtx:yo,withDefaults:Jz,withDirectives:so,withKeys:Pj,withMemo:F7,withModifiers:Bj,withScopeId:Az},Symbol.toStringTag,{value:"Module"})),fn=(r,s)=>{const l=r.__vccOpts||r;for(const[h,p]of s)l[h]=p;return l},jj={};function Fj(r,s){const l=_n("router-view");return vt(),Dt("div",null,[he(l)])}const Vj=fn(jj,[["render",Fj]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Xs=typeof window<"u";function Hj(r){return r.__esModule||r[Symbol.toStringTag]==="Module"}const ve=Object.assign;function sm(r,s){const l={};for(const h in s){const p=s[h];l[h]=xo(p)?p.map(r):r(p)}return l}const sl=()=>{},xo=Array.isArray,$j=/\/$/,Uj=r=>r.replace($j,"");function am(r,s,l="/"){let h,p={},m="",k="";const _=s.indexOf("#");let b=s.indexOf("?");return _<b&&_>=0&&(b=-1),b>-1&&(h=s.slice(0,b),m=s.slice(b+1,_>-1?_:s.length),p=r(m)),_>-1&&(h=h||s.slice(0,_),k=s.slice(_,s.length)),h=Kj(h??s,l),{fullPath:h+(m&&"?")+m+k,path:h,query:p,hash:k}}function qj(r,s){const l=s.query?r(s.query):"";return s.path+(l&&"?")+l+(s.hash||"")}function vE(r,s){return!s||!r.toLowerCase().startsWith(s.toLowerCase())?r:r.slice(s.length)||"/"}function Wj(r,s,l){const h=s.matched.length-1,p=l.matched.length-1;return h>-1&&h===p&&ka(s.matched[h],l.matched[p])&&CD(s.params,l.params)&&r(s.query)===r(l.query)&&s.hash===l.hash}function ka(r,s){return(r.aliasOf||r)===(s.aliasOf||s)}function CD(r,s){if(Object.keys(r).length!==Object.keys(s).length)return!1;for(const l in r)if(!Gj(r[l],s[l]))return!1;return!0}function Gj(r,s){return xo(r)?yE(r,s):xo(s)?yE(s,r):r===s}function yE(r,s){return xo(s)?r.length===s.length&&r.every((l,h)=>l===s[h]):r.length===1&&r[0]===s}function Kj(r,s){if(r.startsWith("/"))return r;if(!r)return s;const l=s.split("/"),h=r.split("/"),p=h[h.length-1];(p===".."||p===".")&&h.push("");let m=l.length-1,k,_;for(k=0;k<h.length;k++)if(_=h[k],_!==".")if(_==="..")m>1&&m--;else break;return l.slice(0,m).join("/")+"/"+h.slice(k-(k===h.length?1:0)).join("/")}var kl;(function(r){r.pop="pop",r.push="push"})(kl||(kl={}));var al;(function(r){r.back="back",r.forward="forward",r.unknown=""})(al||(al={}));function Yj(r){if(!r)if(Xs){const s=document.querySelector("base");r=s&&s.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),Uj(r)}const Qj=/^[^#]+#/;function Zj(r,s){return r.replace(Qj,"#")+s}function Jj(r,s){const l=document.documentElement.getBoundingClientRect(),h=r.getBoundingClientRect();return{behavior:s.behavior,left:h.left-l.left-(s.left||0),top:h.top-l.top-(s.top||0)}}const Vh=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xj(r){let s;if("el"in r){const l=r.el,h=typeof l=="string"&&l.startsWith("#"),p=typeof l=="string"?h?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!p)return;s=Jj(p,r)}else s=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function EE(r,s){return(history.state?history.state.position-s:-1)+r}const Km=new Map;function t6(r,s){Km.set(r,s)}function e6(r){const s=Km.get(r);return Km.delete(r),s}let n6=()=>location.protocol+"//"+location.host;function vD(r,s){const{pathname:l,search:h,hash:p}=s,m=r.indexOf("#");if(m>-1){let _=p.includes(r.slice(m))?r.slice(m).length:1,b=p.slice(_);return b[0]!=="/"&&(b="/"+b),vE(b,"")}return vE(l,r)+h+p}function o6(r,s,l,h){let p=[],m=[],k=null;const _=({state:A})=>{const S=vD(r,location),N=l.value,O=s.value;let j=0;if(A){if(l.value=S,s.value=A,k&&k===N){k=null;return}j=O?A.position-O.position:0}else h(S);p.forEach(G=>{G(l.value,N,{delta:j,type:kl.pop,direction:j?j>0?al.forward:al.back:al.unknown})})};function b(){k=l.value}function D(A){p.push(A);const S=()=>{const N=p.indexOf(A);N>-1&&p.splice(N,1)};return m.push(S),S}function x(){const{history:A}=window;A.state&&A.replaceState(ve({},A.state,{scroll:Vh()}),"")}function y(){for(const A of m)A();m=[],window.removeEventListener("popstate",_),window.removeEventListener("beforeunload",x)}return window.addEventListener("popstate",_),window.addEventListener("beforeunload",x,{passive:!0}),{pauseListeners:b,listen:D,destroy:y}}function xE(r,s,l,h=!1,p=!1){return{back:r,current:s,forward:l,replaced:h,position:window.history.length,scroll:p?Vh():null}}function i6(r){const{history:s,location:l}=window,h={value:vD(r,l)},p={value:s.state};p.value||m(h.value,{back:null,current:h.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function m(b,D,x){const y=r.indexOf("#"),A=y>-1?(l.host&&document.querySelector("base")?r:r.slice(y))+b:n6()+r+b;try{s[x?"replaceState":"pushState"](D,"",A),p.value=D}catch(S){console.error(S),l[x?"replace":"assign"](A)}}function k(b,D){const x=ve({},s.state,xE(p.value.back,b,p.value.forward,!0),D,{position:p.value.position});m(b,x,!0),h.value=b}function _(b,D){const x=ve({},p.value,s.state,{forward:b,scroll:Vh()});m(x.current,x,!0);const y=ve({},xE(h.value,b,null),{position:x.position+1},D);m(b,y,!1),h.value=b}return{location:h,state:p,push:_,replace:k}}function r6(r){r=Yj(r);const s=i6(r),l=o6(r,s.state,s.location,s.replace);function h(m,k=!0){k||l.pauseListeners(),history.go(m)}const p=ve({location:"",base:r,go:h,createHref:Zj.bind(null,r)},s,l);return Object.defineProperty(p,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(p,"state",{enumerable:!0,get:()=>s.state.value}),p}function s6(r){return typeof r=="string"||r&&typeof r=="object"}function yD(r){return typeof r=="string"||typeof r=="symbol"}const $i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ED=Symbol("");var DE;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(DE||(DE={}));function wa(r,s){return ve(new Error,{type:r,[ED]:!0},s)}function ui(r,s){return r instanceof Error&&ED in r&&(s==null||!!(r.type&s))}const TE="[^/]+?",a6={sensitive:!1,strict:!1,start:!0,end:!0},c6=/[.+*?^${}()[\]/\\]/g;function l6(r,s){const l=ve({},a6,s),h=[];let p=l.start?"^":"";const m=[];for(const D of r){const x=D.length?[]:[90];l.strict&&!D.length&&(p+="/");for(let y=0;y<D.length;y++){const A=D[y];let S=40+(l.sensitive?.25:0);if(A.type===0)y||(p+="/"),p+=A.value.replace(c6,"\\$&"),S+=40;else if(A.type===1){const{value:N,repeatable:O,optional:j,regexp:G}=A;m.push({name:N,repeatable:O,optional:j});const W=G||TE;if(W!==TE){S+=10;try{new RegExp(`(${W})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${N}" (${W}): `+H.message)}}let F=O?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;y||(F=j&&D.length<2?`(?:/${F})`:"/"+F),j&&(F+="?"),p+=F,S+=20,j&&(S+=-8),O&&(S+=-20),W===".*"&&(S+=-50)}x.push(S)}h.push(x)}if(l.strict&&l.end){const D=h.length-1;h[D][h[D].length-1]+=.7000000000000001}l.strict||(p+="/?"),l.end?p+="$":l.strict&&(p+="(?:/|$)");const k=new RegExp(p,l.sensitive?"":"i");function _(D){const x=D.match(k),y={};if(!x)return null;for(let A=1;A<x.length;A++){const S=x[A]||"",N=m[A-1];y[N.name]=S&&N.repeatable?S.split("/"):S}return y}function b(D){let x="",y=!1;for(const A of r){(!y||!x.endsWith("/"))&&(x+="/"),y=!1;for(const S of A)if(S.type===0)x+=S.value;else if(S.type===1){const{value:N,repeatable:O,optional:j}=S,G=N in D?D[N]:"";if(xo(G)&&!O)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const W=xo(G)?G.join("/"):G;if(!W)if(j)A.length<2&&(x.endsWith("/")?x=x.slice(0,-1):y=!0);else throw new Error(`Missing required param "${N}"`);x+=W}}return x||"/"}return{re:k,score:h,keys:m,parse:_,stringify:b}}function d6(r,s){let l=0;for(;l<r.length&&l<s.length;){const h=s[l]-r[l];if(h)return h;l++}return r.length<s.length?r.length===1&&r[0]===40+40?-1:1:r.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function u6(r,s){let l=0;const h=r.score,p=s.score;for(;l<h.length&&l<p.length;){const m=d6(h[l],p[l]);if(m)return m;l++}if(Math.abs(p.length-h.length)===1){if(SE(h))return 1;if(SE(p))return-1}return p.length-h.length}function SE(r){const s=r[r.length-1];return r.length>0&&s[s.length-1]<0}const h6={type:0,value:""},p6=/[a-zA-Z0-9_]/;function g6(r){if(!r)return[[]];if(r==="/")return[[h6]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function s(S){throw new Error(`ERR (${l})/"${D}": ${S}`)}let l=0,h=l;const p=[];let m;function k(){m&&p.push(m),m=[]}let _=0,b,D="",x="";function y(){D&&(l===0?m.push({type:0,value:D}):l===1||l===2||l===3?(m.length>1&&(b==="*"||b==="+")&&s(`A repeatable param (${D}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:D,regexp:x,repeatable:b==="*"||b==="+",optional:b==="*"||b==="?"})):s("Invalid state to consume buffer"),D="")}function A(){D+=b}for(;_<r.length;){if(b=r[_++],b==="\\"&&l!==2){h=l,l=4;continue}switch(l){case 0:b==="/"?(D&&y(),k()):b===":"?(y(),l=1):A();break;case 4:A(),l=h;break;case 1:b==="("?l=2:p6.test(b)?A():(y(),l=0,b!=="*"&&b!=="?"&&b!=="+"&&_--);break;case 2:b===")"?x[x.length-1]=="\\"?x=x.slice(0,-1)+b:l=3:x+=b;break;case 3:y(),l=0,b!=="*"&&b!=="?"&&b!=="+"&&_--,x="";break;default:s("Unknown state");break}}return l===2&&s(`Unfinished custom RegExp for param "${D}"`),y(),k(),p}function f6(r,s,l){const h=l6(g6(r.path),l),p=ve(h,{record:r,parent:s,children:[],alias:[]});return s&&!p.record.aliasOf==!s.record.aliasOf&&s.children.push(p),p}function m6(r,s){const l=[],h=new Map;s=BE({strict:!1,end:!0,sensitive:!1},s);function p(x){return h.get(x)}function m(x,y,A){const S=!A,N=b6(x);N.aliasOf=A&&A.record;const O=BE(s,x),j=[N];if("alias"in x){const F=typeof x.alias=="string"?[x.alias]:x.alias;for(const H of F)j.push(ve({},N,{components:A?A.record.components:N.components,path:H,aliasOf:A?A.record:N}))}let G,W;for(const F of j){const{path:H}=F;if(y&&H[0]!=="/"){const Q=y.record.path,J=Q[Q.length-1]==="/"?"":"/";F.path=y.record.path+(H&&J+H)}if(G=f6(F,y,O),A?A.alias.push(G):(W=W||G,W!==G&&W.alias.push(G),S&&x.name&&!ME(G)&&k(x.name)),N.children){const Q=N.children;for(let J=0;J<Q.length;J++)m(Q[J],G,A&&A.children[J])}A=A||G,(G.record.components&&Object.keys(G.record.components).length||G.record.name||G.record.redirect)&&b(G)}return W?()=>{k(W)}:sl}function k(x){if(yD(x)){const y=h.get(x);y&&(h.delete(x),l.splice(l.indexOf(y),1),y.children.forEach(k),y.alias.forEach(k))}else{const y=l.indexOf(x);y>-1&&(l.splice(y,1),x.record.name&&h.delete(x.record.name),x.children.forEach(k),x.alias.forEach(k))}}function _(){return l}function b(x){let y=0;for(;y<l.length&&u6(x,l[y])>=0&&(x.record.path!==l[y].record.path||!xD(x,l[y]));)y++;l.splice(y,0,x),x.record.name&&!ME(x)&&h.set(x.record.name,x)}function D(x,y){let A,S={},N,O;if("name"in x&&x.name){if(A=h.get(x.name),!A)throw wa(1,{location:x});O=A.record.name,S=ve(IE(y.params,A.keys.filter(W=>!W.optional).map(W=>W.name)),x.params&&IE(x.params,A.keys.map(W=>W.name))),N=A.stringify(S)}else if("path"in x)N=x.path,A=l.find(W=>W.re.test(N)),A&&(S=A.parse(N),O=A.record.name);else{if(A=y.name?h.get(y.name):l.find(W=>W.re.test(y.path)),!A)throw wa(1,{location:x,currentLocation:y});O=A.record.name,S=ve({},y.params,x.params),N=A.stringify(S)}const j=[];let G=A;for(;G;)j.unshift(G.record),G=G.parent;return{name:O,path:N,params:S,matched:j,meta:w6(j)}}return r.forEach(x=>m(x)),{addRoute:m,resolve:D,removeRoute:k,getRoutes:_,getRecordMatcher:p}}function IE(r,s){const l={};for(const h of s)h in r&&(l[h]=r[h]);return l}function b6(r){return{path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:void 0,beforeEnter:r.beforeEnter,props:k6(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}}}function k6(r){const s={},l=r.props||!1;if("component"in r)s.default=l;else for(const h in r.components)s[h]=typeof l=="object"?l[h]:l;return s}function ME(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function w6(r){return r.reduce((s,l)=>ve(s,l.meta),{})}function BE(r,s){const l={};for(const h in r)l[h]=h in s?s[h]:r[h];return l}function xD(r,s){return s.children.some(l=>l===r||xD(r,l))}const DD=/#/g,_6=/&/g,A6=/\//g,C6=/=/g,v6=/\?/g,TD=/\+/g,y6=/%5B/g,E6=/%5D/g,SD=/%5E/g,x6=/%60/g,ID=/%7B/g,D6=/%7C/g,MD=/%7D/g,T6=/%20/g;function jb(r){return encodeURI(""+r).replace(D6,"|").replace(y6,"[").replace(E6,"]")}function S6(r){return jb(r).replace(ID,"{").replace(MD,"}").replace(SD,"^")}function Ym(r){return jb(r).replace(TD,"%2B").replace(T6,"+").replace(DD,"%23").replace(_6,"%26").replace(x6,"`").replace(ID,"{").replace(MD,"}").replace(SD,"^")}function I6(r){return Ym(r).replace(C6,"%3D")}function M6(r){return jb(r).replace(DD,"%23").replace(v6,"%3F")}function B6(r){return r==null?"":M6(r).replace(A6,"%2F")}function fh(r){try{return decodeURIComponent(""+r)}catch{}return""+r}function N6(r){const s={};if(r===""||r==="?")return s;const h=(r[0]==="?"?r.slice(1):r).split("&");for(let p=0;p<h.length;++p){const m=h[p].replace(TD," "),k=m.indexOf("="),_=fh(k<0?m:m.slice(0,k)),b=k<0?null:fh(m.slice(k+1));if(_ in s){let D=s[_];xo(D)||(D=s[_]=[D]),D.push(b)}else s[_]=b}return s}function NE(r){let s="";for(let l in r){const h=r[l];if(l=I6(l),h==null){h!==void 0&&(s+=(s.length?"&":"")+l);continue}(xo(h)?h.map(m=>m&&Ym(m)):[h&&Ym(h)]).forEach(m=>{m!==void 0&&(s+=(s.length?"&":"")+l,m!=null&&(s+="="+m))})}return s}function P6(r){const s={};for(const l in r){const h=r[l];h!==void 0&&(s[l]=xo(h)?h.map(p=>p==null?null:""+p):h==null?h:""+h)}return s}const O6=Symbol(""),PE=Symbol(""),Fb=Symbol(""),BD=Symbol(""),Qm=Symbol("");function Gc(){let r=[];function s(h){return r.push(h),()=>{const p=r.indexOf(h);p>-1&&r.splice(p,1)}}function l(){r=[]}return{add:s,list:()=>r.slice(),reset:l}}function Ji(r,s,l,h,p){const m=h&&(h.enterCallbacks[p]=h.enterCallbacks[p]||[]);return()=>new Promise((k,_)=>{const b=y=>{y===!1?_(wa(4,{from:l,to:s})):y instanceof Error?_(y):s6(y)?_(wa(2,{from:s,to:y})):(m&&h.enterCallbacks[p]===m&&typeof y=="function"&&m.push(y),k())},D=r.call(h&&h.instances[p],s,l,b);let x=Promise.resolve(D);r.length<3&&(x=x.then(b)),x.catch(y=>_(y))})}function cm(r,s,l,h){const p=[];for(const m of r)for(const k in m.components){let _=m.components[k];if(!(s!=="beforeRouteEnter"&&!m.instances[k]))if(L6(_)){const D=(_.__vccOpts||_)[s];D&&p.push(Ji(D,l,h,m,k))}else{let b=_();p.push(()=>b.then(D=>{if(!D)return Promise.reject(new Error(`Couldn't resolve component "${k}" at "${m.path}"`));const x=Hj(D)?D.default:D;m.components[k]=x;const A=(x.__vccOpts||x)[s];return A&&Ji(A,l,h,m,k)()}))}}return p}function L6(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function OE(r){const s=zo(Fb),l=zo(BD),h=ro(()=>s.resolve(er(r.to))),p=ro(()=>{const{matched:b}=h.value,{length:D}=b,x=b[D-1],y=l.matched;if(!x||!y.length)return-1;const A=y.findIndex(ka.bind(null,x));if(A>-1)return A;const S=LE(b[D-2]);return D>1&&LE(x)===S&&y[y.length-1].path!==S?y.findIndex(ka.bind(null,b[D-2])):A}),m=ro(()=>p.value>-1&&F6(l.params,h.value.params)),k=ro(()=>p.value>-1&&p.value===l.matched.length-1&&CD(l.params,h.value.params));function _(b={}){return j6(b)?s[er(r.replace)?"replace":"push"](er(r.to)).catch(sl):Promise.resolve()}return{route:h,href:ro(()=>h.value.href),isActive:m,isExactActive:k,navigate:_}}const R6=Dl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:OE,setup(r,{slots:s}){const l=yl(OE(r)),{options:h}=zo(Fb),p=ro(()=>({[RE(r.activeClass,h.linkActiveClass,"router-link-active")]:l.isActive,[RE(r.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const m=s.default&&s.default(l);return r.custom?m:jh("a",{"aria-current":l.isExactActive?r.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:p.value},m)}}}),z6=R6;function j6(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const s=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return r.preventDefault&&r.preventDefault(),!0}}function F6(r,s){for(const l in s){const h=s[l],p=r[l];if(typeof h=="string"){if(h!==p)return!1}else if(!xo(p)||p.length!==h.length||h.some((m,k)=>m!==p[k]))return!1}return!0}function LE(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const RE=(r,s,l)=>r??s??l,V6=Dl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:s,slots:l}){const h=zo(Qm),p=ro(()=>r.route||h.value),m=zo(PE,0),k=ro(()=>{let D=er(m);const{matched:x}=p.value;let y;for(;(y=x[D])&&!y.components;)D++;return D}),_=ro(()=>p.value.matched[k.value]);nl(PE,ro(()=>k.value+1)),nl(O6,_),nl(Qm,p);const b=la();return ha(()=>[b.value,_.value,r.name],([D,x,y],[A,S,N])=>{x&&(x.instances[y]=D,S&&S!==x&&D&&D===A&&(x.leaveGuards.size||(x.leaveGuards=S.leaveGuards),x.updateGuards.size||(x.updateGuards=S.updateGuards))),D&&x&&(!S||!ka(x,S)||!A)&&(x.enterCallbacks[y]||[]).forEach(O=>O(D))},{flush:"post"}),()=>{const D=p.value,x=r.name,y=_.value,A=y&&y.components[x];if(!A)return zE(l.default,{Component:A,route:D});const S=y.props[x],N=S?S===!0?D.params:typeof S=="function"?S(D):S:null,j=jh(A,ve({},N,s,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(y.instances[x]=null)},ref:b}));return zE(l.default,{Component:j,route:D})||j}}});function zE(r,s){if(!r)return null;const l=r(s);return l.length===1?l[0]:l}const H6=V6;function $6(r){const s=m6(r.routes,r),l=r.parseQuery||N6,h=r.stringifyQuery||NE,p=r.history,m=Gc(),k=Gc(),_=Gc(),b=Jx($i);let D=$i;Xs&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=sm.bind(null,it=>""+it),y=sm.bind(null,B6),A=sm.bind(null,fh);function S(it,ct){let Et,It;return yD(it)?(Et=s.getRecordMatcher(it),It=ct):It=it,s.addRoute(It,Et)}function N(it){const ct=s.getRecordMatcher(it);ct&&s.removeRoute(ct)}function O(){return s.getRoutes().map(it=>it.record)}function j(it){return!!s.getRecordMatcher(it)}function G(it,ct){if(ct=ve({},ct||b.value),typeof it=="string"){const K=am(l,it,ct.path),Z=s.resolve({path:K.path},ct),at=p.createHref(K.fullPath);return ve(K,Z,{params:A(Z.params),hash:fh(K.hash),redirectedFrom:void 0,href:at})}let Et;if("path"in it)Et=ve({},it,{path:am(l,it.path,ct.path).path});else{const K=ve({},it.params);for(const Z in K)K[Z]==null&&delete K[Z];Et=ve({},it,{params:y(K)}),ct.params=y(ct.params)}const It=s.resolve(Et,ct),Wt=it.hash||"";It.params=x(A(It.params));const ee=qj(h,ve({},it,{hash:S6(Wt),path:It.path})),V=p.createHref(ee);return ve({fullPath:ee,hash:Wt,query:h===NE?P6(it.query):it.query||{}},It,{redirectedFrom:void 0,href:V})}function W(it){return typeof it=="string"?am(l,it,b.value.path):ve({},it)}function F(it,ct){if(D!==it)return wa(8,{from:ct,to:it})}function H(it){return et(it)}function Q(it){return H(ve(W(it),{replace:!0}))}function J(it){const ct=it.matched[it.matched.length-1];if(ct&&ct.redirect){const{redirect:Et}=ct;let It=typeof Et=="function"?Et(it):Et;return typeof It=="string"&&(It=It.includes("?")||It.includes("#")?It=W(It):{path:It},It.params={}),ve({query:it.query,hash:it.hash,params:"path"in It?{}:it.params},It)}}function et(it,ct){const Et=D=G(it),It=b.value,Wt=it.state,ee=it.force,V=it.replace===!0,K=J(Et);if(K)return et(ve(W(K),{state:typeof K=="object"?ve({},Wt,K.state):Wt,force:ee,replace:V}),ct||Et);const Z=Et;Z.redirectedFrom=ct;let at;return!ee&&Wj(h,It,Et)&&(at=wa(16,{to:Z,from:It}),Re(It,It,!0,!1)),(at?Promise.resolve(at):tt(Z,It)).catch(st=>ui(st)?ui(st,2)?st:qt(st):Mt(st,Z,It)).then(st=>{if(st){if(ui(st,2))return et(ve({replace:V},W(st.to),{state:typeof st.to=="object"?ve({},Wt,st.to.state):Wt,force:ee}),ct||Z)}else st=U(Z,It,!0,V,Wt);return ft(Z,It,st),st})}function nt(it,ct){const Et=F(it,ct);return Et?Promise.reject(Et):Promise.resolve()}function P(it){const ct=jt.values().next().value;return ct&&typeof ct.runWithContext=="function"?ct.runWithContext(it):it()}function tt(it,ct){let Et;const[It,Wt,ee]=U6(it,ct);Et=cm(It.reverse(),"beforeRouteLeave",it,ct);for(const K of It)K.leaveGuards.forEach(Z=>{Et.push(Ji(Z,it,ct))});const V=nt.bind(null,it,ct);return Et.push(V),re(Et).then(()=>{Et=[];for(const K of m.list())Et.push(Ji(K,it,ct));return Et.push(V),re(Et)}).then(()=>{Et=cm(Wt,"beforeRouteUpdate",it,ct);for(const K of Wt)K.updateGuards.forEach(Z=>{Et.push(Ji(Z,it,ct))});return Et.push(V),re(Et)}).then(()=>{Et=[];for(const K of ee)if(K.beforeEnter)if(xo(K.beforeEnter))for(const Z of K.beforeEnter)Et.push(Ji(Z,it,ct));else Et.push(Ji(K.beforeEnter,it,ct));return Et.push(V),re(Et)}).then(()=>(it.matched.forEach(K=>K.enterCallbacks={}),Et=cm(ee,"beforeRouteEnter",it,ct),Et.push(V),re(Et))).then(()=>{Et=[];for(const K of k.list())Et.push(Ji(K,it,ct));return Et.push(V),re(Et)}).catch(K=>ui(K,8)?K:Promise.reject(K))}function ft(it,ct,Et){_.list().forEach(It=>P(()=>It(it,ct,Et)))}function U(it,ct,Et,It,Wt){const ee=F(it,ct);if(ee)return ee;const V=ct===$i,K=Xs?history.state:{};Et&&(It||V?p.replace(it.fullPath,ve({scroll:V&&K&&K.scroll},Wt)):p.push(it.fullPath,Wt)),b.value=it,Re(it,ct,Et,V),qt()}let _t;function Ot(){_t||(_t=p.listen((it,ct,Et)=>{if(!te.listening)return;const It=G(it),Wt=J(It);if(Wt){et(ve(Wt,{replace:!0}),It).catch(sl);return}D=It;const ee=b.value;Xs&&t6(EE(ee.fullPath,Et.delta),Vh()),tt(It,ee).catch(V=>ui(V,12)?V:ui(V,2)?(et(V.to,It).then(K=>{ui(K,20)&&!Et.delta&&Et.type===kl.pop&&p.go(-1,!1)}).catch(sl),Promise.reject()):(Et.delta&&p.go(-Et.delta,!1),Mt(V,It,ee))).then(V=>{V=V||U(It,ee,!1),V&&(Et.delta&&!ui(V,8)?p.go(-Et.delta,!1):Et.type===kl.pop&&ui(V,20)&&p.go(-1,!1)),ft(It,ee,V)}).catch(sl)}))}let Ut=Gc(),mt=Gc(),yt;function Mt(it,ct,Et){qt(it);const It=mt.list();return It.length?It.forEach(Wt=>Wt(it,ct,Et)):console.error(it),Promise.reject(it)}function Ee(){return yt&&b.value!==$i?Promise.resolve():new Promise((it,ct)=>{Ut.add([it,ct])})}function qt(it){return yt||(yt=!it,Ot(),Ut.list().forEach(([ct,Et])=>it?Et(it):ct()),Ut.reset()),it}function Re(it,ct,Et,It){const{scrollBehavior:Wt}=r;if(!Xs||!Wt)return Promise.resolve();const ee=!Et&&e6(EE(it.fullPath,0))||(It||!Et)&&history.state&&history.state.scroll||null;return El().then(()=>Wt(it,ct,ee)).then(V=>V&&Xj(V)).catch(V=>Mt(V,it,ct))}const _e=it=>p.go(it);let At;const jt=new Set,te={currentRoute:b,listening:!0,addRoute:S,removeRoute:N,hasRoute:j,getRoutes:O,resolve:G,options:r,push:H,replace:Q,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:m.add,beforeResolve:k.add,afterEach:_.add,onError:mt.add,isReady:Ee,install(it){const ct=this;it.component("RouterLink",z6),it.component("RouterView",H6),it.config.globalProperties.$router=ct,Object.defineProperty(it.config.globalProperties,"$route",{enumerable:!0,get:()=>er(b)}),Xs&&!At&&b.value===$i&&(At=!0,H(p.location).catch(Wt=>{}));const Et={};for(const Wt in $i)Object.defineProperty(Et,Wt,{get:()=>b.value[Wt],enumerable:!0});it.provide(Fb,ct),it.provide(BD,kb(Et)),it.provide(Qm,b);const It=it.unmount;jt.add(it),it.unmount=function(){jt.delete(it),jt.size<1&&(D=$i,_t&&_t(),_t=null,b.value=$i,At=!1,yt=!1),It()}}};function re(it){return it.reduce((ct,Et)=>ct.then(()=>P(Et)),Promise.resolve())}return te}function U6(r,s){const l=[],h=[],p=[],m=Math.max(s.matched.length,r.matched.length);for(let k=0;k<m;k++){const _=s.matched[k];_&&(r.matched.find(D=>ka(D,_))?h.push(_):l.push(_));const b=r.matched[k];b&&(s.matched.find(D=>ka(D,b))||p.push(b))}return[l,h,p]}function ND(r,s){return function(){return r.apply(s,arguments)}}const{toString:q6}=Object.prototype,{getPrototypeOf:Vb}=Object,Hh=(r=>s=>{const l=q6.call(s);return r[l]||(r[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),Uo=r=>(r=r.toLowerCase(),s=>Hh(s)===r),$h=r=>s=>typeof s===r,{isArray:Ta}=Array,wl=$h("undefined");function W6(r){return r!==null&&!wl(r)&&r.constructor!==null&&!wl(r.constructor)&&co(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const PD=Uo("ArrayBuffer");function G6(r){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(r):s=r&&r.buffer&&PD(r.buffer),s}const K6=$h("string"),co=$h("function"),OD=$h("number"),Uh=r=>r!==null&&typeof r=="object",Y6=r=>r===!0||r===!1,Zu=r=>{if(Hh(r)!=="object")return!1;const s=Vb(r);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},Q6=Uo("Date"),Z6=Uo("File"),J6=Uo("Blob"),X6=Uo("FileList"),tF=r=>Uh(r)&&co(r.pipe),eF=r=>{let s;return r&&(typeof FormData=="function"&&r instanceof FormData||co(r.append)&&((s=Hh(r))==="formdata"||s==="object"&&co(r.toString)&&r.toString()==="[object FormData]"))},nF=Uo("URLSearchParams"),oF=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ml(r,s,{allOwnKeys:l=!1}={}){if(r===null||typeof r>"u")return;let h,p;if(typeof r!="object"&&(r=[r]),Ta(r))for(h=0,p=r.length;h<p;h++)s.call(null,r[h],h,r);else{const m=l?Object.getOwnPropertyNames(r):Object.keys(r),k=m.length;let _;for(h=0;h<k;h++)_=m[h],s.call(null,r[_],_,r)}}function LD(r,s){s=s.toLowerCase();const l=Object.keys(r);let h=l.length,p;for(;h-- >0;)if(p=l[h],s===p.toLowerCase())return p;return null}const RD=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),zD=r=>!wl(r)&&r!==RD;function Zm(){const{caseless:r}=zD(this)&&this||{},s={},l=(h,p)=>{const m=r&&LD(s,p)||p;Zu(s[m])&&Zu(h)?s[m]=Zm(s[m],h):Zu(h)?s[m]=Zm({},h):Ta(h)?s[m]=h.slice():s[m]=h};for(let h=0,p=arguments.length;h<p;h++)arguments[h]&&Ml(arguments[h],l);return s}const iF=(r,s,l,{allOwnKeys:h}={})=>(Ml(s,(p,m)=>{l&&co(p)?r[m]=ND(p,l):r[m]=p},{allOwnKeys:h}),r),rF=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),sF=(r,s,l,h)=>{r.prototype=Object.create(s.prototype,h),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:s.prototype}),l&&Object.assign(r.prototype,l)},aF=(r,s,l,h)=>{let p,m,k;const _={};if(s=s||{},r==null)return s;do{for(p=Object.getOwnPropertyNames(r),m=p.length;m-- >0;)k=p[m],(!h||h(k,r,s))&&!_[k]&&(s[k]=r[k],_[k]=!0);r=l!==!1&&Vb(r)}while(r&&(!l||l(r,s))&&r!==Object.prototype);return s},cF=(r,s,l)=>{r=String(r),(l===void 0||l>r.length)&&(l=r.length),l-=s.length;const h=r.indexOf(s,l);return h!==-1&&h===l},lF=r=>{if(!r)return null;if(Ta(r))return r;let s=r.length;if(!OD(s))return null;const l=new Array(s);for(;s-- >0;)l[s]=r[s];return l},dF=(r=>s=>r&&s instanceof r)(typeof Uint8Array<"u"&&Vb(Uint8Array)),uF=(r,s)=>{const h=(r&&r[Symbol.iterator]).call(r);let p;for(;(p=h.next())&&!p.done;){const m=p.value;s.call(r,m[0],m[1])}},hF=(r,s)=>{let l;const h=[];for(;(l=r.exec(s))!==null;)h.push(l);return h},pF=Uo("HTMLFormElement"),gF=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,h,p){return h.toUpperCase()+p}),jE=(({hasOwnProperty:r})=>(s,l)=>r.call(s,l))(Object.prototype),fF=Uo("RegExp"),jD=(r,s)=>{const l=Object.getOwnPropertyDescriptors(r),h={};Ml(l,(p,m)=>{let k;(k=s(p,m,r))!==!1&&(h[m]=k||p)}),Object.defineProperties(r,h)},mF=r=>{jD(r,(s,l)=>{if(co(r)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const h=r[l];if(co(h)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},bF=(r,s)=>{const l={},h=p=>{p.forEach(m=>{l[m]=!0})};return Ta(r)?h(r):h(String(r).split(s)),l},kF=()=>{},wF=(r,s)=>(r=+r,Number.isFinite(r)?r:s),lm="abcdefghijklmnopqrstuvwxyz",FE="0123456789",FD={DIGIT:FE,ALPHA:lm,ALPHA_DIGIT:lm+lm.toUpperCase()+FE},_F=(r=16,s=FD.ALPHA_DIGIT)=>{let l="";const{length:h}=s;for(;r--;)l+=s[Math.random()*h|0];return l};function AF(r){return!!(r&&co(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const CF=r=>{const s=new Array(10),l=(h,p)=>{if(Uh(h)){if(s.indexOf(h)>=0)return;if(!("toJSON"in h)){s[p]=h;const m=Ta(h)?[]:{};return Ml(h,(k,_)=>{const b=l(k,p+1);!wl(b)&&(m[_]=b)}),s[p]=void 0,m}}return h};return l(r,0)},vF=Uo("AsyncFunction"),yF=r=>r&&(Uh(r)||co(r))&&co(r.then)&&co(r.catch),lt={isArray:Ta,isArrayBuffer:PD,isBuffer:W6,isFormData:eF,isArrayBufferView:G6,isString:K6,isNumber:OD,isBoolean:Y6,isObject:Uh,isPlainObject:Zu,isUndefined:wl,isDate:Q6,isFile:Z6,isBlob:J6,isRegExp:fF,isFunction:co,isStream:tF,isURLSearchParams:nF,isTypedArray:dF,isFileList:X6,forEach:Ml,merge:Zm,extend:iF,trim:oF,stripBOM:rF,inherits:sF,toFlatObject:aF,kindOf:Hh,kindOfTest:Uo,endsWith:cF,toArray:lF,forEachEntry:uF,matchAll:hF,isHTMLForm:pF,hasOwnProperty:jE,hasOwnProp:jE,reduceDescriptors:jD,freezeMethods:mF,toObjectSet:bF,toCamelCase:gF,noop:kF,toFiniteNumber:wF,findKey:LD,global:RD,isContextDefined:zD,ALPHABET:FD,generateString:_F,isSpecCompliantForm:AF,toJSONObject:CF,isAsyncFn:vF,isThenable:yF};function ue(r,s,l,h,p){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",s&&(this.code=s),l&&(this.config=l),h&&(this.request=h),p&&(this.response=p)}lt.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:lt.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const VD=ue.prototype,HD={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{HD[r]={value:r}});Object.defineProperties(ue,HD);Object.defineProperty(VD,"isAxiosError",{value:!0});ue.from=(r,s,l,h,p,m)=>{const k=Object.create(VD);return lt.toFlatObject(r,k,function(b){return b!==Error.prototype},_=>_!=="isAxiosError"),ue.call(k,r.message,s,l,h,p),k.cause=r,k.name=r.name,m&&Object.assign(k,m),k};const EF=null;function Jm(r){return lt.isPlainObject(r)||lt.isArray(r)}function $D(r){return lt.endsWith(r,"[]")?r.slice(0,-2):r}function VE(r,s,l){return r?r.concat(s).map(function(p,m){return p=$D(p),!l&&m?"["+p+"]":p}).join(l?".":""):s}function xF(r){return lt.isArray(r)&&!r.some(Jm)}const DF=lt.toFlatObject(lt,{},null,function(s){return/^is[A-Z]/.test(s)});function qh(r,s,l){if(!lt.isObject(r))throw new TypeError("target must be an object");s=s||new FormData,l=lt.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(O,j){return!lt.isUndefined(j[O])});const h=l.metaTokens,p=l.visitor||x,m=l.dots,k=l.indexes,b=(l.Blob||typeof Blob<"u"&&Blob)&&lt.isSpecCompliantForm(s);if(!lt.isFunction(p))throw new TypeError("visitor must be a function");function D(N){if(N===null)return"";if(lt.isDate(N))return N.toISOString();if(!b&&lt.isBlob(N))throw new ue("Blob is not supported. Use a Buffer instead.");return lt.isArrayBuffer(N)||lt.isTypedArray(N)?b&&typeof Blob=="function"?new Blob([N]):Buffer.from(N):N}function x(N,O,j){let G=N;if(N&&!j&&typeof N=="object"){if(lt.endsWith(O,"{}"))O=h?O:O.slice(0,-2),N=JSON.stringify(N);else if(lt.isArray(N)&&xF(N)||(lt.isFileList(N)||lt.endsWith(O,"[]"))&&(G=lt.toArray(N)))return O=$D(O),G.forEach(function(F,H){!(lt.isUndefined(F)||F===null)&&s.append(k===!0?VE([O],H,m):k===null?O:O+"[]",D(F))}),!1}return Jm(N)?!0:(s.append(VE(j,O,m),D(N)),!1)}const y=[],A=Object.assign(DF,{defaultVisitor:x,convertValue:D,isVisitable:Jm});function S(N,O){if(!lt.isUndefined(N)){if(y.indexOf(N)!==-1)throw Error("Circular reference detected in "+O.join("."));y.push(N),lt.forEach(N,function(G,W){(!(lt.isUndefined(G)||G===null)&&p.call(s,G,lt.isString(W)?W.trim():W,O,A))===!0&&S(G,O?O.concat(W):[W])}),y.pop()}}if(!lt.isObject(r))throw new TypeError("data must be an object");return S(r),s}function HE(r){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(h){return s[h]})}function Hb(r,s){this._pairs=[],r&&qh(r,this,s)}const UD=Hb.prototype;UD.append=function(s,l){this._pairs.push([s,l])};UD.toString=function(s){const l=s?function(h){return s.call(this,h,HE)}:HE;return this._pairs.map(function(p){return l(p[0])+"="+l(p[1])},"").join("&")};function TF(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qD(r,s,l){if(!s)return r;const h=l&&l.encode||TF,p=l&&l.serialize;let m;if(p?m=p(s,l):m=lt.isURLSearchParams(s)?s.toString():new Hb(s,l).toString(h),m){const k=r.indexOf("#");k!==-1&&(r=r.slice(0,k)),r+=(r.indexOf("?")===-1?"?":"&")+m}return r}class SF{constructor(){this.handlers=[]}use(s,l,h){return this.handlers.push({fulfilled:s,rejected:l,synchronous:h?h.synchronous:!1,runWhen:h?h.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){lt.forEach(this.handlers,function(h){h!==null&&s(h)})}}const $E=SF,WD={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},IF=typeof URLSearchParams<"u"?URLSearchParams:Hb,MF=typeof FormData<"u"?FormData:null,BF=typeof Blob<"u"?Blob:null,NF={isBrowser:!0,classes:{URLSearchParams:IF,FormData:MF,Blob:BF},protocols:["http","https","file","blob","url","data"]},GD=typeof window<"u"&&typeof document<"u",PF=(r=>GD&&["ReactNative","NativeScript","NS"].indexOf(r)<0)(typeof navigator<"u"&&navigator.product),OF=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),LF=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:GD,hasStandardBrowserEnv:PF,hasStandardBrowserWebWorkerEnv:OF},Symbol.toStringTag,{value:"Module"})),Lo={...LF,...NF};function RF(r,s){return qh(r,new Lo.classes.URLSearchParams,Object.assign({visitor:function(l,h,p,m){return Lo.isNode&&lt.isBuffer(l)?(this.append(h,l.toString("base64")),!1):m.defaultVisitor.apply(this,arguments)}},s))}function zF(r){return lt.matchAll(/\w+|\[(\w*)]/g,r).map(s=>s[0]==="[]"?"":s[1]||s[0])}function jF(r){const s={},l=Object.keys(r);let h;const p=l.length;let m;for(h=0;h<p;h++)m=l[h],s[m]=r[m];return s}function KD(r){function s(l,h,p,m){let k=l[m++];const _=Number.isFinite(+k),b=m>=l.length;return k=!k&&lt.isArray(p)?p.length:k,b?(lt.hasOwnProp(p,k)?p[k]=[p[k],h]:p[k]=h,!_):((!p[k]||!lt.isObject(p[k]))&&(p[k]=[]),s(l,h,p[k],m)&&lt.isArray(p[k])&&(p[k]=jF(p[k])),!_)}if(lt.isFormData(r)&&lt.isFunction(r.entries)){const l={};return lt.forEachEntry(r,(h,p)=>{s(zF(h),p,l,0)}),l}return null}function FF(r,s,l){if(lt.isString(r))try{return(s||JSON.parse)(r),lt.trim(r)}catch(h){if(h.name!=="SyntaxError")throw h}return(l||JSON.stringify)(r)}const $b={transitional:WD,adapter:["xhr","http"],transformRequest:[function(s,l){const h=l.getContentType()||"",p=h.indexOf("application/json")>-1,m=lt.isObject(s);if(m&&lt.isHTMLForm(s)&&(s=new FormData(s)),lt.isFormData(s))return p&&p?JSON.stringify(KD(s)):s;if(lt.isArrayBuffer(s)||lt.isBuffer(s)||lt.isStream(s)||lt.isFile(s)||lt.isBlob(s))return s;if(lt.isArrayBufferView(s))return s.buffer;if(lt.isURLSearchParams(s))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let _;if(m){if(h.indexOf("application/x-www-form-urlencoded")>-1)return RF(s,this.formSerializer).toString();if((_=lt.isFileList(s))||h.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return qh(_?{"files[]":s}:s,b&&new b,this.formSerializer)}}return m||p?(l.setContentType("application/json",!1),FF(s)):s}],transformResponse:[function(s){const l=this.transitional||$b.transitional,h=l&&l.forcedJSONParsing,p=this.responseType==="json";if(s&&lt.isString(s)&&(h&&!this.responseType||p)){const k=!(l&&l.silentJSONParsing)&&p;try{return JSON.parse(s)}catch(_){if(k)throw _.name==="SyntaxError"?ue.from(_,ue.ERR_BAD_RESPONSE,this,null,this.response):_}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Lo.classes.FormData,Blob:Lo.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};lt.forEach(["delete","get","head","post","put","patch"],r=>{$b.headers[r]={}});const Ub=$b,VF=lt.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),HF=r=>{const s={};let l,h,p;return r&&r.split(`
`).forEach(function(k){p=k.indexOf(":"),l=k.substring(0,p).trim().toLowerCase(),h=k.substring(p+1).trim(),!(!l||s[l]&&VF[l])&&(l==="set-cookie"?s[l]?s[l].push(h):s[l]=[h]:s[l]=s[l]?s[l]+", "+h:h)}),s},UE=Symbol("internals");function Kc(r){return r&&String(r).trim().toLowerCase()}function Ju(r){return r===!1||r==null?r:lt.isArray(r)?r.map(Ju):String(r)}function $F(r){const s=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let h;for(;h=l.exec(r);)s[h[1]]=h[2];return s}const UF=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function dm(r,s,l,h,p){if(lt.isFunction(h))return h.call(this,s,l);if(p&&(s=l),!!lt.isString(s)){if(lt.isString(h))return s.indexOf(h)!==-1;if(lt.isRegExp(h))return h.test(s)}}function qF(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,l,h)=>l.toUpperCase()+h)}function WF(r,s){const l=lt.toCamelCase(" "+s);["get","set","has"].forEach(h=>{Object.defineProperty(r,h+l,{value:function(p,m,k){return this[h].call(this,s,p,m,k)},configurable:!0})})}class Wh{constructor(s){s&&this.set(s)}set(s,l,h){const p=this;function m(_,b,D){const x=Kc(b);if(!x)throw new Error("header name must be a non-empty string");const y=lt.findKey(p,x);(!y||p[y]===void 0||D===!0||D===void 0&&p[y]!==!1)&&(p[y||b]=Ju(_))}const k=(_,b)=>lt.forEach(_,(D,x)=>m(D,x,b));return lt.isPlainObject(s)||s instanceof this.constructor?k(s,l):lt.isString(s)&&(s=s.trim())&&!UF(s)?k(HF(s),l):s!=null&&m(l,s,h),this}get(s,l){if(s=Kc(s),s){const h=lt.findKey(this,s);if(h){const p=this[h];if(!l)return p;if(l===!0)return $F(p);if(lt.isFunction(l))return l.call(this,p,h);if(lt.isRegExp(l))return l.exec(p);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,l){if(s=Kc(s),s){const h=lt.findKey(this,s);return!!(h&&this[h]!==void 0&&(!l||dm(this,this[h],h,l)))}return!1}delete(s,l){const h=this;let p=!1;function m(k){if(k=Kc(k),k){const _=lt.findKey(h,k);_&&(!l||dm(h,h[_],_,l))&&(delete h[_],p=!0)}}return lt.isArray(s)?s.forEach(m):m(s),p}clear(s){const l=Object.keys(this);let h=l.length,p=!1;for(;h--;){const m=l[h];(!s||dm(this,this[m],m,s,!0))&&(delete this[m],p=!0)}return p}normalize(s){const l=this,h={};return lt.forEach(this,(p,m)=>{const k=lt.findKey(h,m);if(k){l[k]=Ju(p),delete l[m];return}const _=s?qF(m):String(m).trim();_!==m&&delete l[m],l[_]=Ju(p),h[_]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const l=Object.create(null);return lt.forEach(this,(h,p)=>{h!=null&&h!==!1&&(l[p]=s&&lt.isArray(h)?h.join(", "):h)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,l])=>s+": "+l).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...l){const h=new this(s);return l.forEach(p=>h.set(p)),h}static accessor(s){const h=(this[UE]=this[UE]={accessors:{}}).accessors,p=this.prototype;function m(k){const _=Kc(k);h[_]||(WF(p,k),h[_]=!0)}return lt.isArray(s)?s.forEach(m):m(s),this}}Wh.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);lt.reduceDescriptors(Wh.prototype,({value:r},s)=>{let l=s[0].toUpperCase()+s.slice(1);return{get:()=>r,set(h){this[l]=h}}});lt.freezeMethods(Wh);const fi=Wh;function um(r,s){const l=this||Ub,h=s||l,p=fi.from(h.headers);let m=h.data;return lt.forEach(r,function(_){m=_.call(l,m,p.normalize(),s?s.status:void 0)}),p.normalize(),m}function YD(r){return!!(r&&r.__CANCEL__)}function Bl(r,s,l){ue.call(this,r??"canceled",ue.ERR_CANCELED,s,l),this.name="CanceledError"}lt.inherits(Bl,ue,{__CANCEL__:!0});function GF(r,s,l){const h=l.config.validateStatus;!l.status||!h||h(l.status)?r(l):s(new ue("Request failed with status code "+l.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}const KF=Lo.hasStandardBrowserEnv?{write(r,s,l,h,p,m){const k=[r+"="+encodeURIComponent(s)];lt.isNumber(l)&&k.push("expires="+new Date(l).toGMTString()),lt.isString(h)&&k.push("path="+h),lt.isString(p)&&k.push("domain="+p),m===!0&&k.push("secure"),document.cookie=k.join("; ")},read(r){const s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function YF(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function QF(r,s){return s?r.replace(/\/+$/,"")+"/"+s.replace(/^\/+/,""):r}function QD(r,s){return r&&!YF(s)?QF(r,s):s}const ZF=Lo.hasStandardBrowserEnv?function(){const s=/(msie|trident)/i.test(navigator.userAgent),l=document.createElement("a");let h;function p(m){let k=m;return s&&(l.setAttribute("href",k),k=l.href),l.setAttribute("href",k),{href:l.href,protocol:l.protocol?l.protocol.replace(/:$/,""):"",host:l.host,search:l.search?l.search.replace(/^\?/,""):"",hash:l.hash?l.hash.replace(/^#/,""):"",hostname:l.hostname,port:l.port,pathname:l.pathname.charAt(0)==="/"?l.pathname:"/"+l.pathname}}return h=p(window.location.href),function(k){const _=lt.isString(k)?p(k):k;return _.protocol===h.protocol&&_.host===h.host}}():function(){return function(){return!0}}();function JF(r){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return s&&s[1]||""}function XF(r,s){r=r||10;const l=new Array(r),h=new Array(r);let p=0,m=0,k;return s=s!==void 0?s:1e3,function(b){const D=Date.now(),x=h[m];k||(k=D),l[p]=b,h[p]=D;let y=m,A=0;for(;y!==p;)A+=l[y++],y=y%r;if(p=(p+1)%r,p===m&&(m=(m+1)%r),D-k<s)return;const S=x&&D-x;return S?Math.round(A*1e3/S):void 0}}function qE(r,s){let l=0;const h=XF(50,250);return p=>{const m=p.loaded,k=p.lengthComputable?p.total:void 0,_=m-l,b=h(_),D=m<=k;l=m;const x={loaded:m,total:k,progress:k?m/k:void 0,bytes:_,rate:b||void 0,estimated:b&&k&&D?(k-m)/b:void 0,event:p};x[s?"download":"upload"]=!0,r(x)}}const t8=typeof XMLHttpRequest<"u",e8=t8&&function(r){return new Promise(function(l,h){let p=r.data;const m=fi.from(r.headers).normalize();let{responseType:k,withXSRFToken:_}=r,b;function D(){r.cancelToken&&r.cancelToken.unsubscribe(b),r.signal&&r.signal.removeEventListener("abort",b)}let x;if(lt.isFormData(p)){if(Lo.hasStandardBrowserEnv||Lo.hasStandardBrowserWebWorkerEnv)m.setContentType(!1);else if((x=m.getContentType())!==!1){const[O,...j]=x?x.split(";").map(G=>G.trim()).filter(Boolean):[];m.setContentType([O||"multipart/form-data",...j].join("; "))}}let y=new XMLHttpRequest;if(r.auth){const O=r.auth.username||"",j=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";m.set("Authorization","Basic "+btoa(O+":"+j))}const A=QD(r.baseURL,r.url);y.open(r.method.toUpperCase(),qD(A,r.params,r.paramsSerializer),!0),y.timeout=r.timeout;function S(){if(!y)return;const O=fi.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),G={data:!k||k==="text"||k==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:O,config:r,request:y};GF(function(F){l(F),D()},function(F){h(F),D()},G),y=null}if("onloadend"in y?y.onloadend=S:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(S)},y.onabort=function(){y&&(h(new ue("Request aborted",ue.ECONNABORTED,r,y)),y=null)},y.onerror=function(){h(new ue("Network Error",ue.ERR_NETWORK,r,y)),y=null},y.ontimeout=function(){let j=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const G=r.transitional||WD;r.timeoutErrorMessage&&(j=r.timeoutErrorMessage),h(new ue(j,G.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,r,y)),y=null},Lo.hasStandardBrowserEnv&&(_&&lt.isFunction(_)&&(_=_(r)),_||_!==!1&&ZF(A))){const O=r.xsrfHeaderName&&r.xsrfCookieName&&KF.read(r.xsrfCookieName);O&&m.set(r.xsrfHeaderName,O)}p===void 0&&m.setContentType(null),"setRequestHeader"in y&&lt.forEach(m.toJSON(),function(j,G){y.setRequestHeader(G,j)}),lt.isUndefined(r.withCredentials)||(y.withCredentials=!!r.withCredentials),k&&k!=="json"&&(y.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&y.addEventListener("progress",qE(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&y.upload&&y.upload.addEventListener("progress",qE(r.onUploadProgress)),(r.cancelToken||r.signal)&&(b=O=>{y&&(h(!O||O.type?new Bl(null,r,y):O),y.abort(),y=null)},r.cancelToken&&r.cancelToken.subscribe(b),r.signal&&(r.signal.aborted?b():r.signal.addEventListener("abort",b)));const N=JF(A);if(N&&Lo.protocols.indexOf(N)===-1){h(new ue("Unsupported protocol "+N+":",ue.ERR_BAD_REQUEST,r));return}y.send(p||null)})},Xm={http:EF,xhr:e8};lt.forEach(Xm,(r,s)=>{if(r){try{Object.defineProperty(r,"name",{value:s})}catch{}Object.defineProperty(r,"adapterName",{value:s})}});const WE=r=>`- ${r}`,n8=r=>lt.isFunction(r)||r===null||r===!1,ZD={getAdapter:r=>{r=lt.isArray(r)?r:[r];const{length:s}=r;let l,h;const p={};for(let m=0;m<s;m++){l=r[m];let k;if(h=l,!n8(l)&&(h=Xm[(k=String(l)).toLowerCase()],h===void 0))throw new ue(`Unknown adapter '${k}'`);if(h)break;p[k||"#"+m]=h}if(!h){const m=Object.entries(p).map(([_,b])=>`adapter ${_} `+(b===!1?"is not supported by the environment":"is not available in the build"));let k=s?m.length>1?`since :
`+m.map(WE).join(`
`):" "+WE(m[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+k,"ERR_NOT_SUPPORT")}return h},adapters:Xm};function hm(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Bl(null,r)}function GE(r){return hm(r),r.headers=fi.from(r.headers),r.data=um.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),ZD.getAdapter(r.adapter||Ub.adapter)(r).then(function(h){return hm(r),h.data=um.call(r,r.transformResponse,h),h.headers=fi.from(h.headers),h},function(h){return YD(h)||(hm(r),h&&h.response&&(h.response.data=um.call(r,r.transformResponse,h.response),h.response.headers=fi.from(h.response.headers))),Promise.reject(h)})}const KE=r=>r instanceof fi?r.toJSON():r;function _a(r,s){s=s||{};const l={};function h(D,x,y){return lt.isPlainObject(D)&&lt.isPlainObject(x)?lt.merge.call({caseless:y},D,x):lt.isPlainObject(x)?lt.merge({},x):lt.isArray(x)?x.slice():x}function p(D,x,y){if(lt.isUndefined(x)){if(!lt.isUndefined(D))return h(void 0,D,y)}else return h(D,x,y)}function m(D,x){if(!lt.isUndefined(x))return h(void 0,x)}function k(D,x){if(lt.isUndefined(x)){if(!lt.isUndefined(D))return h(void 0,D)}else return h(void 0,x)}function _(D,x,y){if(y in s)return h(D,x);if(y in r)return h(void 0,D)}const b={url:m,method:m,data:m,baseURL:k,transformRequest:k,transformResponse:k,paramsSerializer:k,timeout:k,timeoutMessage:k,withCredentials:k,withXSRFToken:k,adapter:k,responseType:k,xsrfCookieName:k,xsrfHeaderName:k,onUploadProgress:k,onDownloadProgress:k,decompress:k,maxContentLength:k,maxBodyLength:k,beforeRedirect:k,transport:k,httpAgent:k,httpsAgent:k,cancelToken:k,socketPath:k,responseEncoding:k,validateStatus:_,headers:(D,x)=>p(KE(D),KE(x),!0)};return lt.forEach(Object.keys(Object.assign({},r,s)),function(x){const y=b[x]||p,A=y(r[x],s[x],x);lt.isUndefined(A)&&y!==_||(l[x]=A)}),l}const JD="1.6.2",qb={};["object","boolean","number","function","string","symbol"].forEach((r,s)=>{qb[r]=function(h){return typeof h===r||"a"+(s<1?"n ":" ")+r}});const YE={};qb.transitional=function(s,l,h){function p(m,k){return"[Axios v"+JD+"] Transitional option '"+m+"'"+k+(h?". "+h:"")}return(m,k,_)=>{if(s===!1)throw new ue(p(k," has been removed"+(l?" in "+l:"")),ue.ERR_DEPRECATED);return l&&!YE[k]&&(YE[k]=!0,console.warn(p(k," has been deprecated since v"+l+" and will be removed in the near future"))),s?s(m,k,_):!0}};function o8(r,s,l){if(typeof r!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const h=Object.keys(r);let p=h.length;for(;p-- >0;){const m=h[p],k=s[m];if(k){const _=r[m],b=_===void 0||k(_,m,r);if(b!==!0)throw new ue("option "+m+" must be "+b,ue.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new ue("Unknown option "+m,ue.ERR_BAD_OPTION)}}const tb={assertOptions:o8,validators:qb},Ui=tb.validators;class mh{constructor(s){this.defaults=s,this.interceptors={request:new $E,response:new $E}}request(s,l){typeof s=="string"?(l=l||{},l.url=s):l=s||{},l=_a(this.defaults,l);const{transitional:h,paramsSerializer:p,headers:m}=l;h!==void 0&&tb.assertOptions(h,{silentJSONParsing:Ui.transitional(Ui.boolean),forcedJSONParsing:Ui.transitional(Ui.boolean),clarifyTimeoutError:Ui.transitional(Ui.boolean)},!1),p!=null&&(lt.isFunction(p)?l.paramsSerializer={serialize:p}:tb.assertOptions(p,{encode:Ui.function,serialize:Ui.function},!0)),l.method=(l.method||this.defaults.method||"get").toLowerCase();let k=m&&lt.merge(m.common,m[l.method]);m&&lt.forEach(["delete","get","head","post","put","patch","common"],N=>{delete m[N]}),l.headers=fi.concat(k,m);const _=[];let b=!0;this.interceptors.request.forEach(function(O){typeof O.runWhen=="function"&&O.runWhen(l)===!1||(b=b&&O.synchronous,_.unshift(O.fulfilled,O.rejected))});const D=[];this.interceptors.response.forEach(function(O){D.push(O.fulfilled,O.rejected)});let x,y=0,A;if(!b){const N=[GE.bind(this),void 0];for(N.unshift.apply(N,_),N.push.apply(N,D),A=N.length,x=Promise.resolve(l);y<A;)x=x.then(N[y++],N[y++]);return x}A=_.length;let S=l;for(y=0;y<A;){const N=_[y++],O=_[y++];try{S=N(S)}catch(j){O.call(this,j);break}}try{x=GE.call(this,S)}catch(N){return Promise.reject(N)}for(y=0,A=D.length;y<A;)x=x.then(D[y++],D[y++]);return x}getUri(s){s=_a(this.defaults,s);const l=QD(s.baseURL,s.url);return qD(l,s.params,s.paramsSerializer)}}lt.forEach(["delete","get","head","options"],function(s){mh.prototype[s]=function(l,h){return this.request(_a(h||{},{method:s,url:l,data:(h||{}).data}))}});lt.forEach(["post","put","patch"],function(s){function l(h){return function(m,k,_){return this.request(_a(_||{},{method:s,headers:h?{"Content-Type":"multipart/form-data"}:{},url:m,data:k}))}}mh.prototype[s]=l(),mh.prototype[s+"Form"]=l(!0)});const Xu=mh;class Wb{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(m){l=m});const h=this;this.promise.then(p=>{if(!h._listeners)return;let m=h._listeners.length;for(;m-- >0;)h._listeners[m](p);h._listeners=null}),this.promise.then=p=>{let m;const k=new Promise(_=>{h.subscribe(_),m=_}).then(p);return k.cancel=function(){h.unsubscribe(m)},k},s(function(m,k,_){h.reason||(h.reason=new Bl(m,k,_),l(h.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const l=this._listeners.indexOf(s);l!==-1&&this._listeners.splice(l,1)}static source(){let s;return{token:new Wb(function(p){s=p}),cancel:s}}}const i8=Wb;function r8(r){return function(l){return r.apply(null,l)}}function s8(r){return lt.isObject(r)&&r.isAxiosError===!0}const eb={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eb).forEach(([r,s])=>{eb[s]=r});const a8=eb;function XD(r){const s=new Xu(r),l=ND(Xu.prototype.request,s);return lt.extend(l,Xu.prototype,s,{allOwnKeys:!0}),lt.extend(l,s,null,{allOwnKeys:!0}),l.create=function(p){return XD(_a(r,p))},l}const Qe=XD(Ub);Qe.Axios=Xu;Qe.CanceledError=Bl;Qe.CancelToken=i8;Qe.isCancel=YD;Qe.VERSION=JD;Qe.toFormData=qh;Qe.AxiosError=ue;Qe.Cancel=Qe.CanceledError;Qe.all=function(s){return Promise.all(s)};Qe.spread=r8;Qe.isAxiosError=s8;Qe.mergeConfig=_a;Qe.AxiosHeaders=fi;Qe.formToJSON=r=>KD(lt.isHTMLForm(r)?new FormData(r):r);Qe.getAdapter=ZD.getAdapter;Qe.HttpStatusCode=a8;Qe.default=Qe;const $e=Qe,c8={props:{filteredDalamProses:{type:Array,required:!0,default:()=>[]}},data(){return{currentPage:1,perPage:5,loading:!1}},methods:{nextPage(){this.currentPage<this.pages[this.pages.length-1]&&this.currentPage++},previousPage(){this.currentPage!=1&&this.currentPage--},nowPage(r){r!="..."&&(this.currentPage=r)},disableClickPageThreeDots(r){if(r=="...")return!0}},computed:{renderPaginate(){return this.filteredDalamProses.slice(this.perPage*(this.currentPage-1),this.perPage*this.currentPage)},pages(){let r=Math.ceil(this.filteredDalamProses.length/this.perPage),s=[];const l=this.currentPage+4;for(let h=1;h<=r;h++)if(h<=l&&s.length<5)s.push(h);else{s.push("..."),s.push(r);break}return this.currentPage>5&&this.currentPage<r?s=[1,"...",this.currentPage-1,this.currentPage,this.currentPage+1,"...",r]:this.currentPage>5&&this.currentPage==r&&(s=[1,"...",this.currentPage-1,this.currentPage]),s},showingData(){return this.currentPage*this.perPage-this.perPage+1},informasiDataTampil(){return`Showing ${this.showingData} to ${this.renderPaginate.length} of ${this.filteredDalamProses.length} entries`}},mounted(){this.$emit("updateFilteredDalamProses",this.renderPaginate)},watch:{renderPaginate(){this.$emit("updateFilteredDalamProses",this.renderPaginate)},filteredDalamProses(){this.currentPage=1}}},l8={class:"d-flex"},d8={class:"p-2 flex-grow-1"},u8={class:"p-2"},h8={"aria-label":"..."},p8={class:"pagination"},g8=["onClick","disabled"];function f8(r,s,l,h,p,m){return vt(),Dt("div",null,[R("div",l8,[R("div",d8,Yt(m.informasiDataTampil),1),R("div",u8,[R("nav",h8,[R("ul",p8,[R("li",{class:vn(["page-item",p.currentPage==1?"disabled":""])},[R("a",{class:"page-link",onClick:s[0]||(s[0]=(...k)=>m.previousPage&&m.previousPage(...k))},"Previous")],2),(vt(!0),Dt(be,null,pn(m.pages,k=>(vt(),Dt("li",{class:vn(["page-item",k==p.currentPage?"active":""]),key:k},[R("a",{class:"page-link",onClick:_=>m.nowPage(k),disabled:m.disableClickPageThreeDots(k)},Yt(k),9,g8)],2))),128)),R("li",{class:vn(["page-item",p.currentPage==m.pages[m.pages.length-1]?"disabled":""])},[R("a",{class:"page-link",onClick:s[1]||(s[1]=(...k)=>m.nextPage&&m.nextPage(...k))},"Next")],2)])])])])])}const m8=fn(c8,[["render",f8]]),b8={components:{pagination:m8},props:{headers:{type:Array,required:!0},items:{type:Array,required:!0},search:{type:String,required:!1,default:""},scrollable:{type:Boolean,required:!1,default:!1}},data(){return{renderPaginate:[],sortColumn:"no_urut",sortDirection:"asc"}},methods:{updateFilterDalamProses(r){this.renderPaginate=r},sort(r){if(r.sortable==!1)return;const s=r.value;s===this.sortColumn?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumn=s,this.sortDirection="asc")},checkClassItems(r){return r.classItems?`${r.class} ${r.classItems}`:`${r.class}`}},computed:{filteredDalamProses(){return this.sortedDataTable.filter(r=>Object.keys(r).some(s=>String(r[s]).toLowerCase().includes(this.search.toLowerCase())))},sortedDataTable(){return this.items.sort((s,l)=>{const h=this.sortDirection==="asc"?1:-1;return s[this.sortColumn]<l[this.sortColumn]?-1*h:s[this.sortColumn]>l[this.sortColumn]?1*h:0})}}},k8={class:"row d-flex justify-content-start"},w8=["onClick","sortable"],_8={style:{"font-weight":"700"}},A8={key:0},C8={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-up",viewBox:"0 0 16 16"},v8=R("path",{"fill-rule":"evenodd",d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"},null,-1),y8=[v8],E8={key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down",viewBox:"0 0 16 16"},x8=R("path",{"fill-rule":"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"},null,-1),D8=[x8],T8=R("hr",{class:"mb-3",style:{opacity:"1",border:"2px solid white",margin:"0"}},null,-1),S8={key:0},I8={style:{"font-weight":"500"}},M8={key:1,class:"d-flex justify-content-center align-items-center",style:{height:"50vh"}},B8=R("h3",{class:"text-center"},"Data Kosong",-1),N8=[B8],P8=R("hr",{class:"mb-3",style:{opacity:"1",border:"2px solid white",margin:"0"}},null,-1);function O8(r,s,l,h,p,m){const k=_n("pagination");return vt(),Dt("div",k8,[(vt(!0),Dt(be,null,pn(l.headers,_=>(vt(),Dt("div",{class:vn(["d-flex ps-4 align-items-center",[_.class?m.checkClassItems(_):"col-2 justify-content-center"]]),key:_.text,onClick:b=>m.sort(_),sortable:_.sortable!=!1},[R("h5",_8,[Nm(r.$slots,`header.${_.value}`,{},()=>[xn(Yt(_.text),1)])]),p.sortColumn===_.value?(vt(),Dt("span",A8,[p.sortDirection==="asc"?(vt(),Dt("svg",C8,y8)):(vt(),Dt("svg",E8,D8))])):Ne("",!0)],10,w8))),128)),T8,p.renderPaginate.length>0?(vt(),Dt("div",S8,[(vt(!0),Dt(be,null,pn(p.renderPaginate,(_,b)=>(vt(),Dt("div",{class:"row d-flex justify-content-start mb-2",key:b},[(vt(!0),Dt(be,null,pn(l.headers,D=>(vt(),Dt("div",{class:vn(["d-flex",D.class?m.checkClassItems(D):"col-2 justify-content-center"]),key:D.value},[R("h5",I8,[Nm(r.$slots,`item.${D.value}`,{item:_,index:b},()=>[xn(Yt(_[D.value]),1)])])],2))),128))]))),128))])):(vt(),Dt("div",M8,N8)),P8,he(k,{filteredDalamProses:m.filteredDalamProses,onUpdateFilteredDalamProses:m.updateFilterDalamProses},null,8,["filteredDalamProses","onUpdateFilteredDalamProses"])])}const tT=fn(b8,[["render",O8]]),L8={components:{DataTable:tT},data(){return{challenge:[],formchallenge:{nama:"",difficulty:""},difficulty:{1:"Easy",2:"Middle",3:"Hard"},headers:[{text:"No",value:"no",class:"col-1",classItems:"ps-4 justify-content-start",align:"",sortable:!1},{text:"Challenge Name",value:"nama",class:"col-3",classItems:"justify-content-center"},{text:"Difficulty",value:"difficultyText"},{text:"Hint Obtained",value:"difficulty"},{text:"Status",value:"status"},{text:"Action",value:"action"}]}},methods:{async getChallenge(){try{const r=localStorage.getItem("id"),{challenge:s}=await $e.get(`/api/challenge/${r}`).then(h=>h.data);this.challenge=s,document.querySelectorAll(".sub-menu-wrap-quiz").forEach(h=>{h.classList.remove("open-menu")})}catch(r){console.log(r)}},async addEditChallenge(){try{if(!Object.values(this.formchallenge).every(h=>h!==null&&h!=="")){this.$swal("Form tidak boleh kosong","","error");return}const s=localStorage.getItem("id"),{data:l}=await $e.post(`/api/challenge/${s}`,this.formchallenge);this.formchallenge={nama:"",difficulty:""},this.$swal("Data berhasil disimpan","","success"),this.getChallenge()}catch(r){console.log(r),this.$swal("Gagal menyimpan data","","error")}},difficultyText(r){return this.difficulty[r]},statusText(r){switch(r){case 1:return"Draft";case 2:return"Saved";default:return"Not Solved"}},toggleMenuQuiz(r){document.getElementById(`subMenuQuiz${r}`).classList.toggle("open-menu")},batal(){this.formchallenge={difficulty:"",nama:""}},hapus(r){this.$swal({title:"Apakah anda yakin?",text:"Data yang dihapus tidak dapat dikembalikan!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2F70AF",cancelButtonColor:"#d33",confirmButtonText:"Ya, hapus!",cancelButtonText:"Batal"}).then(async s=>{if(s.isConfirmed)try{const{data:l}=await $e.delete(`/api/challenge/${r}`);this.$swal("Data berhasil dihapus","","success"),this.getChallenge()}catch(l){console.log(l),this.$swal("Gagal menghapus data","","error")}})},goToQuestion(r){this.$router.push({name:"questionTeacher",params:{id:r}})},viewResult(r){this.$router.push({name:"resultTeacher",params:{id:r}})}},created(){this.getChallenge()}},R8={class:"content p-5"},z8=R("div",{class:"box-recommend p-4 mb-4"},[R("h3",{style:{"margin-bottom":"0"}},"Challenge | Add Challenge")],-1),j8={class:"row"},F8={class:"col-lg-3 col-md-4 col-sm-6"},V8=R("h3",{class:"ms-3 mb-4",style:{"margin-bottom":"0"},id:"titleText"},"Add Challenge",-1),H8={class:"box-recommend mt-2 p-4"},$8={class:"form-group mb-2"},U8=R("label",{for:"",class:"form-label",style:{"font-size":"23px"}},"Challenge Name",-1),q8={class:"form-group mb-2"},W8=R("label",{for:"",class:"form-label",style:{"font-size":"23px"}},"Difficulty",-1),G8=R("option",{selected:"",value:""},"Open this select menu",-1),K8=["value"],Y8={class:"form-group mb-2"},Q8=R("label",{for:"",class:"form-label",style:{"font-size":"23px"}},"Hint Obtained",-1),Z8={class:"d-flex justify-content-end pt-1 mb-1"},J8={class:"col-lg-9 col-md-8 col-sm-6"},X8=R("h3",{class:"ms-3 mb-4",style:{"margin-bottom":"0"}},"Challenge List",-1),t9={class:"box-recommend mt-2 p-4"},e9={style:{"margin-bottom":"0"}},n9={class:"col d-flex justify-content-center align-items-start"},o9=["onClick"],i9=["id"],r9={class:"sub-menu-quiz"},s9=["onClick"],a9=R("p",{style:{margin:"0","text-align":"end",color:"#2F70AF"}},"View Result ",-1),c9=[a9],l9=["onClick"],d9=R("p",{style:{margin:"0","text-align":"end",color:"#2F70AF"}},"Add Question ",-1),u9=[d9],h9=["onClick"],p9=R("p",{style:{margin:"0","text-align":"end",color:"#2F70AF"}},"Edit ",-1),g9=[p9],f9=["onClick"],m9=R("p",{style:{margin:"0","text-align":"end",color:"#2F70AF"}},"Delete ",-1),b9=[m9];function k9(r,s,l,h,p,m){const k=_n("DataTable");return vt(),Dt("div",R8,[z8,R("div",j8,[R("div",F8,[V8,R("div",H8,[R("div",$8,[U8,so(R("input",{type:"text",class:"form-control p-2",id:"quizTitle","onUpdate:modelValue":s[0]||(s[0]=_=>p.formchallenge.nama=_)},null,512),[[Ho,p.formchallenge.nama]])]),R("div",q8,[W8,so(R("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":s[1]||(s[1]=_=>p.formchallenge.difficulty=_)},[G8,(vt(!0),Dt(be,null,pn(p.difficulty,(_,b)=>(vt(),Dt("option",{key:b,value:b},Yt(_),9,K8))),128))],512),[[zb,p.formchallenge.difficulty]])]),R("div",Y8,[Q8,so(R("input",{type:"text",class:"form-control p-2",id:"quizTitle",disabled:"","onUpdate:modelValue":s[2]||(s[2]=_=>p.formchallenge.difficulty=_)},null,512),[[Ho,p.formchallenge.difficulty]])]),R("div",Z8,[p.formchallenge.id?(vt(),Dt("button",{key:0,class:"btn btn-button bg-danger btn-shadow text-dark px-4 me-2",onClick:s[3]||(s[3]=(..._)=>m.batal&&m.batal(..._))},"Batal")):Ne("",!0),R("button",{class:"btn btn-button btn-shadow text-dark px-4",onClick:s[4]||(s[4]=(..._)=>m.addEditChallenge&&m.addEditChallenge(..._))},"Save")])])]),R("div",J8,[X8,R("div",t9,[he(k,{headers:p.headers,items:p.challenge},{"item.no":yo(({item:_,index:b})=>[R("h3",e9,Yt(b+1),1)]),"item.difficultyText":yo(({item:_})=>[R("div",null,Yt(m.difficultyText(_.difficulty)),1)]),"item.status":yo(({item:_})=>[R("div",null,Yt(m.statusText(_.status)),1)]),"item.action":yo(({item:_})=>[R("div",n9,[R("button",{class:"btn btn-action-quiz btn-shadow text-dark px-4",onClick:b=>m.toggleMenuQuiz(_.id)},"Select",8,o9),R("div",{class:"sub-menu-wrap-quiz",id:`subMenuQuiz${_.id}`},[R("div",r9,[R("a",{href:"#",class:"sub-menu-link",onClick:b=>m.viewResult(_.id)},c9,8,s9),R("a",{href:"#",class:"sub-menu-link",onClick:b=>m.goToQuestion(_.id)},u9,8,l9),R("a",{href:"#",class:"sub-menu-link",onClick:b=>p.formchallenge=JSON.parse(JSON.stringify(_))},g9,8,h9),R("a",{href:"#",class:"sub-menu-link",onClick:b=>m.hapus(_.id)},b9,8,f9)])],8,i9)])]),_:1},8,["headers","items"])])])])])}const w9=fn(L8,[["render",k9]]),_9={data(){return{questions:[],formQuestion:{file:"",question:"",typeAnswer:"single",answer:[]}}},methods:{changeToAbjad(r){return String.fromCharCode(96+parseInt(r))},pushAnswer(){for(let r=0;r<4;r++)this.formQuestion.answer.push({answer:"",isCorrect:!1})},async getQuestions(){try{const r=this.$route.params.id,{question:s}=await $e.get(`/api/question/${r}`).then(l=>l.data);this.questions=s,this.$refs.file.value=""}catch(r){console.log(r)}},async simpanQuestions(){const{question:r,typeAnswer:s,answer:l}=this.formQuestion,h=l.filter(m=>m.answer!="");if(r==""||s==""||h.length<2){this.$swal("Error","Harap isi semua field","error");return}if(l.filter(m=>m.answer=="").length>0){this.$swal("Error","Harap isi semua jawaban","error");return}if(l.filter(m=>m.isCorrect==!0).length==0){this.$swal("Error","Harap pilih jawaban yang benar","error");return}try{const m=this.$route.params.id,{data:k}=await $e.post(`/api/question/${m}`,this.formQuestion,{headers:{"Content-Type":"multipart/form-data"}}).then(_=>_.data);this.$swal("Berhasil","Data berhasil disimpan","success"),this.formQuestion={file:"",question:"",typeAnswer:"single",answer:[]},this.pushAnswer(),this.getQuestions()}catch(m){console.log(m),this.$swal("Error","Gagal menyimpan data","error")}},uploadGambar(r){["image/jpeg","image/jpg","image/png"].includes(r.type)?this.formQuestion.file=r:(this.$swal("Error","File harus berupa gambar","error"),this.formQuestion.file="",this.$refs.file.value="")},hapusJawaban(r){this.$swal({title:"Apakah anda yakin?",text:"Data yang dihapus tidak dapat dikembalikan!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33"}).then(async s=>{if(s.isConfirmed)try{await $e.delete(`/api/question/${r}`),this.getQuestions(),this.$swal("Deleted!","Your file has been deleted.","success")}catch(l){console.log(l)}})},publishChallenge(){const r=this.$route.params.id;this.$swal({title:"Apakah anda yakin?",text:"Data yang disimpan tidak dapat diubah!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2F70AF",cancelButtonColor:"#d33",confirmButtonText:"Ya, simpan!",cancelButtonText:"Batal"}).then(async s=>{if(s.isConfirmed)try{await $e.put(`/api/challenge/${r}/publish`),this.$swal("Data berhasil disimpan","","success"),this.$router.push({name:"teacher"})}catch(l){console.log(l),this.$swal("Gagal menyimpan data","","error")}})},unpublishChallenge(){const r=this.$route.params.id;this.$swal({title:"Apakah anda yakin?",text:"Data yang disimpan tidak dapat diubah!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2F70AF",cancelButtonColor:"#d33",confirmButtonText:"Ya, simpan!",cancelButtonText:"Batal"}).then(async s=>{if(s.isConfirmed)try{await $e.put(`/api/challenge/${r}/unpublish`),this.$swal("Data berhasil disimpan","","success"),this.$router.push({name:"teacher"})}catch(l){console.log(l),this.$swal("Gagal menyimpan data","","error")}})}},created(){this.getQuestions()},mounted(){this.pushAnswer()},watch:{"formQuestion.typeAnswer":function(r){this.formQuestion.answer=[],this.pushAnswer()}},computed:{getLastQuestion(){return this.questions.length+1}}},A9={class:"content p-5"},C9={class:"box-recommend p-4 mb-5"},v9={class:"d-flex"},y9=R("div",{class:"p-2 flex-grow-1"},[R("h3",{style:{"margin-bottom":"0"}},"Add Question")],-1),E9={class:"p-2"},x9={class:"row"},D9={class:"col-7"},T9={class:"box-recommend mt-2 p-4"},S9={class:"form-group mb-2"},I9=R("label",{for:"",class:"form-label"},"File (Optional)",-1),M9=R("label",{for:"",class:"form-label"},"Question",-1),B9={class:"form-group mb-2"},N9={class:"form-group mb-2 row"},P9=R("div",{class:"col-auto"},[R("label",{for:"",class:"form-label"},"Type")],-1),O9={class:"col-auto"},L9={class:"form-check form-check-inline"},R9=R("label",{class:"form-check-label",for:"inlineRadio1"},"Multiple Choice",-1),z9={class:"form-check form-check-inline"},j9=R("label",{class:"form-check-label",for:"inlineRadio2"},"Multiple Answer",-1),F9={class:"d-flex row"},V9={class:"col-1 d-flex align-items-center justify-content-center",style:{position:"relative"}},H9={class:"col-10 d-flex align-items-center justify-content-start",style:{right:"10px",position:"relative"}},$9=["onUpdate:modelValue"],U9={class:"col-1 d-flex align-items-center justify-content-end"},q9=["value","checked","onClick"],W9=["value","checked","onClick"],G9={class:"col-5"},K9={class:"box-recommend mt-2 p-4 min-height-recommend"},Y9=R("h3",{style:{"margin-bottom":"0"}},"Question List",-1),Q9=R("hr",{class:"mb-3",style:{opacity:"1",border:"2px solid white",margin:"0"}},null,-1),Z9={class:"row d-flex justify-content-start"},J9={class:"col-1 d-flex justify-content-start align-items-center"},X9={style:{"margin-bottom":"0"}},tV={class:"col-9 d-flex justify-content-start align-items-center"},eV={class:"overflow-ecilips",style:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},nV={style:{"font-weight":"500","margin-bottom":"0"}},oV={class:"col-2 d-flex justify-content-end align-items-center"},iV={class:"col d-flex justify-content-end align-items-center"},rV=["onClick"],sV=R("span",{class:"iconify ms-2","data-icon":"ph:x-bold",style:{color:"red"},"data-width":"25"},null,-1),aV=[sV],cV=R("hr",{class:"mb-3",style:{opacity:"1",border:"2px solid white",margin:"0"}},null,-1),lV={class:"d-flex justify-content-center"};function dV(r,s,l,h,p,m){return vt(),Dt("div",A9,[R("div",C9,[R("div",v9,[y9,R("div",E9,[R("button",{class:"btn btn-secondary btn-lg btn-shadow px-4 me-2",onClick:s[0]||(s[0]=(...k)=>m.unpublishChallenge&&m.unpublishChallenge(...k))},"Draft"),R("button",{class:"btn btn-button btn-shadow px-4",onClick:s[1]||(s[1]=(...k)=>m.publishChallenge&&m.publishChallenge(...k))},"Save")])])]),R("div",x9,[R("div",D9,[R("div",T9,[R("p",null,[xn("Question No. "),R("b",null,Yt(m.getLastQuestion),1)]),R("div",S9,[I9,R("input",{type:"file",class:"form-control p-2",ref:"file",id:"quizTitle",onChange:s[2]||(s[2]=k=>m.uploadGambar(k.target.files[0])),accept:"image/*"},null,544)]),M9,R("div",B9,[so(R("textarea",{class:"form-control text-black",cols:"10",rows:"5","onUpdate:modelValue":s[3]||(s[3]=k=>p.formQuestion.question=k)},null,512),[[Ho,p.formQuestion.question]])]),R("div",N9,[P9,R("div",O9,[R("div",L9,[so(R("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"single","onUpdate:modelValue":s[4]||(s[4]=k=>p.formQuestion.typeAnswer=k)},null,512),[[ls,p.formQuestion.typeAnswer]]),R9]),R("div",z9,[so(R("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"multiple","onUpdate:modelValue":s[5]||(s[5]=k=>p.formQuestion.typeAnswer=k)},null,512),[[ls,p.formQuestion.typeAnswer]]),j9])])]),(vt(!0),Dt(be,null,pn(p.formQuestion.answer,(k,_)=>(vt(),Dt("div",{class:"form-control mb-2",style:{padding:"0px"},key:_},[R("div",F9,[R("div",V9,Yt(m.changeToAbjad(_+1))+". ",1),R("div",H9,[so(R("input",{type:"text",name:"option_a",id:"option_a",class:"form-control p-2",style:{border:"0px"},"onUpdate:modelValue":b=>k.answer=b},null,8,$9),[[Ho,k.answer]])]),R("div",U9,[p.formQuestion.typeAnswer=="single"?(vt(),Dt("input",{key:0,class:"me-2 radio-answer",type:"radio",style:{"font-size":"20px"},name:"answer_multiple_choice",value:m.changeToAbjad(_+1),checked:k.isCorrect,onClick:b=>{p.formQuestion.answer.forEach((D,x)=>{D.isCorrect=!1}),k.isCorrect=!0}},null,8,q9)):Ne("",!0),p.formQuestion.typeAnswer=="multiple"?(vt(),Dt("input",{key:1,class:"me-2 checkbox-answer",type:"checkbox",style:{"font-size":"20px"},name:"answer_multiple_choice",value:m.changeToAbjad(_+1),checked:k.isCorrect,onClick:b=>k.isCorrect=!k.isCorrect},null,8,W9)):Ne("",!0)])])]))),128))])]),R("div",G9,[R("div",K9,[Y9,Q9,(vt(!0),Dt(be,null,pn(p.questions,(k,_)=>(vt(),Dt("div",{class:"box-list-admin mb-2",key:_},[R("div",Z9,[R("div",J9,[R("h4",X9,Yt(_+1)+".",1)]),R("div",tV,[R("div",eV,[R("h5",nV,Yt(k.question),1)])]),R("div",oV,[R("div",iV,[R("a",{href:"#",onClick:b=>m.hapusJawaban(k.id),style:{border:"none"}},aV,8,rV)])])])]))),128)),cV,R("div",lV,[R("button",{class:"btn btn-button btn-shadow",onClick:s[6]||(s[6]=(...k)=>m.simpanQuestions&&m.simpanQuestions(...k))},"Add New")])])])])])}const uV=fn(_9,[["render",dV]]),hV={components:{DataTable:tT},data(){return{result:[],challenge:null,headers:[{text:"No",value:"no",sortable:"false"},{text:"Student",value:"user"},{text:"Status",value:"status"},{text:"Additional Hint Obtained",value:"score",class:"col-3",classItems:"justify-content-center"},{text:"Date Done",value:"date"}]}},methods:{async getResults(){const r=this.$route.params.id,{challenge:s,result:l}=await $e.get(`/api/challenge/resultChallenge/${r}`).then(h=>h.data);this.result=l,this.challenge=s},status(r){return r=parseInt(r),r>0?"Passed":"Failed"},dateFormat(r){const s=new Date(r),l=s.getDate(),h=s.getMonth()+1,p=s.getFullYear();return`${l}/${h}/${p}`}},created(){this.getResults()}},pV={class:"content p-5"},gV={class:"box-recommend p-4 mb-4"},fV={style:{"margin-bottom":"0"}},mV={class:"box-recommend mt-2 p-4"},bV={style:{"margin-bottom":"0"}};function kV(r,s,l,h,p,m){const k=_n("DataTable");return vt(),Dt("div",null,[R("div",pV,[R("div",gV,[R("h3",fV,"Challenge "+Yt(p.challenge)+" | View Result",1)]),R("div",mV,[he(k,{headers:p.headers,items:p.result},{"item.no":yo(({item:_,index:b})=>[R("h3",bV,Yt(b+1),1)]),"item.status":yo(({item:_})=>[R("div",null,Yt(m.status(_.score)),1)]),"item.date":yo(({item:_})=>[R("div",null,Yt(m.dateFormat(_.updated_at)),1)]),_:1},8,["headers","items"])])])])}const wV=fn(hV,[["render",kV]]);var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function eT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function _V(r){if(r.__esModule)return r;var s=r.default;if(typeof s=="function"){var l=function h(){return this instanceof h?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};l.prototype=s.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(r).forEach(function(h){var p=Object.getOwnPropertyDescriptor(r,h);Object.defineProperty(l,h,p.get?p:{enumerable:!0,get:function(){return r[h]}})}),l}var bh={exports:{}};bh.exports;(function(r,s){(function(l){const h=l.en=l.en||{};h.dictionary=Object.assign(h.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button":"Execute the currently focused button","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar":"Navigate through the toolbar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(l,h){r.exports=h()}(self,()=>(()=>{var l={9246:(k,_,b)=>{const D=b(6931),x={};for(const A of Object.keys(D))x[D[A]]=A;const y={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};k.exports=y;for(const A of Object.keys(y)){if(!("channels"in y[A]))throw new Error("missing channels property: "+A);if(!("labels"in y[A]))throw new Error("missing channel labels property: "+A);if(y[A].labels.length!==y[A].channels)throw new Error("channel and label counts mismatch: "+A);const{channels:S,labels:N}=y[A];delete y[A].channels,delete y[A].labels,Object.defineProperty(y[A],"channels",{value:S}),Object.defineProperty(y[A],"labels",{value:N})}y.rgb.hsl=function(A){const S=A[0]/255,N=A[1]/255,O=A[2]/255,j=Math.min(S,N,O),G=Math.max(S,N,O),W=G-j;let F,H;G===j?F=0:S===G?F=(N-O)/W:N===G?F=2+(O-S)/W:O===G&&(F=4+(S-N)/W),F=Math.min(60*F,360),F<0&&(F+=360);const Q=(j+G)/2;return H=G===j?0:Q<=.5?W/(G+j):W/(2-G-j),[F,100*H,100*Q]},y.rgb.hsv=function(A){let S,N,O,j,G;const W=A[0]/255,F=A[1]/255,H=A[2]/255,Q=Math.max(W,F,H),J=Q-Math.min(W,F,H),et=function(nt){return(Q-nt)/6/J+.5};return J===0?(j=0,G=0):(G=J/Q,S=et(W),N=et(F),O=et(H),W===Q?j=O-N:F===Q?j=.3333333333333333+S-O:H===Q&&(j=.6666666666666666+N-S),j<0?j+=1:j>1&&(j-=1)),[360*j,100*G,100*Q]},y.rgb.hwb=function(A){const S=A[0],N=A[1];let O=A[2];const j=y.rgb.hsl(A)[0],G=1/255*Math.min(S,Math.min(N,O));return O=1-.00392156862745098*Math.max(S,Math.max(N,O)),[j,100*G,100*O]},y.rgb.cmyk=function(A){const S=A[0]/255,N=A[1]/255,O=A[2]/255,j=Math.min(1-S,1-N,1-O);return[100*((1-S-j)/(1-j)||0),100*((1-N-j)/(1-j)||0),100*((1-O-j)/(1-j)||0),100*j]},y.rgb.keyword=function(A){const S=x[A];if(S)return S;let N,O=1/0;for(const W of Object.keys(D)){const F=D[W],H=(G=F,((j=A)[0]-G[0])**2+(j[1]-G[1])**2+(j[2]-G[2])**2);H<O&&(O=H,N=W)}var j,G;return N},y.keyword.rgb=function(A){return D[A]},y.rgb.xyz=function(A){let S=A[0]/255,N=A[1]/255,O=A[2]/255;return S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,O=O>.04045?((O+.055)/1.055)**2.4:O/12.92,[100*(.4124*S+.3576*N+.1805*O),100*(.2126*S+.7152*N+.0722*O),100*(.0193*S+.1192*N+.9505*O)]},y.rgb.lab=function(A){const S=y.rgb.xyz(A);let N=S[0],O=S[1],j=S[2];return N/=95.047,O/=100,j/=108.883,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,j=j>.008856?j**.3333333333333333:7.787*j+.13793103448275862,[116*O-16,500*(N-O),200*(O-j)]},y.hsl.rgb=function(A){const S=A[0]/360,N=A[1]/100,O=A[2]/100;let j,G,W;if(N===0)return W=255*O,[W,W,W];j=O<.5?O*(1+N):O+N-O*N;const F=2*O-j,H=[0,0,0];for(let Q=0;Q<3;Q++)G=S+.3333333333333333*-(Q-1),G<0&&G++,G>1&&G--,W=6*G<1?F+6*(j-F)*G:2*G<1?j:3*G<2?F+(j-F)*(.6666666666666666-G)*6:F,H[Q]=255*W;return H},y.hsl.hsv=function(A){const S=A[0];let N=A[1]/100,O=A[2]/100,j=N;const G=Math.max(O,.01);return O*=2,N*=O<=1?O:2-O,j*=G<=1?G:2-G,[S,100*(O===0?2*j/(G+j):2*N/(O+N)),100*((O+N)/2)]},y.hsv.rgb=function(A){const S=A[0]/60,N=A[1]/100;let O=A[2]/100;const j=Math.floor(S)%6,G=S-Math.floor(S),W=255*O*(1-N),F=255*O*(1-N*G),H=255*O*(1-N*(1-G));switch(O*=255,j){case 0:return[O,H,W];case 1:return[F,O,W];case 2:return[W,O,H];case 3:return[W,F,O];case 4:return[H,W,O];case 5:return[O,W,F]}},y.hsv.hsl=function(A){const S=A[0],N=A[1]/100,O=A[2]/100,j=Math.max(O,.01);let G,W;W=(2-N)*O;const F=(2-N)*j;return G=N*j,G/=F<=1?F:2-F,G=G||0,W/=2,[S,100*G,100*W]},y.hwb.rgb=function(A){const S=A[0]/360;let N=A[1]/100,O=A[2]/100;const j=N+O;let G;j>1&&(N/=j,O/=j);const W=Math.floor(6*S),F=1-O;G=6*S-W,1&W&&(G=1-G);const H=N+G*(F-N);let Q,J,et;switch(W){default:case 6:case 0:Q=F,J=H,et=N;break;case 1:Q=H,J=F,et=N;break;case 2:Q=N,J=F,et=H;break;case 3:Q=N,J=H,et=F;break;case 4:Q=H,J=N,et=F;break;case 5:Q=F,J=N,et=H}return[255*Q,255*J,255*et]},y.cmyk.rgb=function(A){const S=A[0]/100,N=A[1]/100,O=A[2]/100,j=A[3]/100;return[255*(1-Math.min(1,S*(1-j)+j)),255*(1-Math.min(1,N*(1-j)+j)),255*(1-Math.min(1,O*(1-j)+j))]},y.xyz.rgb=function(A){const S=A[0]/100,N=A[1]/100,O=A[2]/100;let j,G,W;return j=3.2406*S+-1.5372*N+-.4986*O,G=-.9689*S+1.8758*N+.0415*O,W=.0557*S+-.204*N+1.057*O,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,G=G>.0031308?1.055*G**.4166666666666667-.055:12.92*G,W=W>.0031308?1.055*W**.4166666666666667-.055:12.92*W,j=Math.min(Math.max(0,j),1),G=Math.min(Math.max(0,G),1),W=Math.min(Math.max(0,W),1),[255*j,255*G,255*W]},y.xyz.lab=function(A){let S=A[0],N=A[1],O=A[2];return S/=95.047,N/=100,O/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,[116*N-16,500*(S-N),200*(N-O)]},y.lab.xyz=function(A){let S,N,O;N=(A[0]+16)/116,S=A[1]/500+N,O=N-A[2]/200;const j=N**3,G=S**3,W=O**3;return N=j>.008856?j:(N-.13793103448275862)/7.787,S=G>.008856?G:(S-.13793103448275862)/7.787,O=W>.008856?W:(O-.13793103448275862)/7.787,S*=95.047,N*=100,O*=108.883,[S,N,O]},y.lab.lch=function(A){const S=A[0],N=A[1],O=A[2];let j;return j=360*Math.atan2(O,N)/2/Math.PI,j<0&&(j+=360),[S,Math.sqrt(N*N+O*O),j]},y.lch.lab=function(A){const S=A[0],N=A[1],O=A[2]/360*2*Math.PI;return[S,N*Math.cos(O),N*Math.sin(O)]},y.rgb.ansi16=function(A,S=null){const[N,O,j]=A;let G=S===null?y.rgb.hsv(A)[2]:S;if(G=Math.round(G/50),G===0)return 30;let W=30+(Math.round(j/255)<<2|Math.round(O/255)<<1|Math.round(N/255));return G===2&&(W+=60),W},y.hsv.ansi16=function(A){return y.rgb.ansi16(y.hsv.rgb(A),A[2])},y.rgb.ansi256=function(A){const S=A[0],N=A[1],O=A[2];return S===N&&N===O?S<8?16:S>248?231:Math.round((S-8)/247*24)+232:16+36*Math.round(S/255*5)+6*Math.round(N/255*5)+Math.round(O/255*5)},y.ansi16.rgb=function(A){let S=A%10;if(S===0||S===7)return A>50&&(S+=3.5),S=S/10.5*255,[S,S,S];const N=.5*(1+~~(A>50));return[(1&S)*N*255,(S>>1&1)*N*255,(S>>2&1)*N*255]},y.ansi256.rgb=function(A){if(A>=232){const N=10*(A-232)+8;return[N,N,N]}let S;return A-=16,[Math.floor(A/36)/5*255,Math.floor((S=A%36)/6)/5*255,S%6/5*255]},y.rgb.hex=function(A){const S=(((255&Math.round(A[0]))<<16)+((255&Math.round(A[1]))<<8)+(255&Math.round(A[2]))).toString(16).toUpperCase();return"000000".substring(S.length)+S},y.hex.rgb=function(A){const S=A.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!S)return[0,0,0];let N=S[0];S[0].length===3&&(N=N.split("").map(j=>j+j).join(""));const O=parseInt(N,16);return[O>>16&255,O>>8&255,255&O]},y.rgb.hcg=function(A){const S=A[0]/255,N=A[1]/255,O=A[2]/255,j=Math.max(Math.max(S,N),O),G=Math.min(Math.min(S,N),O),W=j-G;let F,H;return F=W<1?G/(1-W):0,H=W<=0?0:j===S?(N-O)/W%6:j===N?2+(O-S)/W:4+(S-N)/W,H/=6,H%=1,[360*H,100*W,100*F]},y.hsl.hcg=function(A){const S=A[1]/100,N=A[2]/100,O=N<.5?2*S*N:2*S*(1-N);let j=0;return O<1&&(j=(N-.5*O)/(1-O)),[A[0],100*O,100*j]},y.hsv.hcg=function(A){const S=A[1]/100,N=A[2]/100,O=S*N;let j=0;return O<1&&(j=(N-O)/(1-O)),[A[0],100*O,100*j]},y.hcg.rgb=function(A){const S=A[0]/360,N=A[1]/100,O=A[2]/100;if(N===0)return[255*O,255*O,255*O];const j=[0,0,0],G=S%1*6,W=G%1,F=1-W;let H=0;switch(Math.floor(G)){case 0:j[0]=1,j[1]=W,j[2]=0;break;case 1:j[0]=F,j[1]=1,j[2]=0;break;case 2:j[0]=0,j[1]=1,j[2]=W;break;case 3:j[0]=0,j[1]=F,j[2]=1;break;case 4:j[0]=W,j[1]=0,j[2]=1;break;default:j[0]=1,j[1]=0,j[2]=F}return H=(1-N)*O,[255*(N*j[0]+H),255*(N*j[1]+H),255*(N*j[2]+H)]},y.hcg.hsv=function(A){const S=A[1]/100,N=S+A[2]/100*(1-S);let O=0;return N>0&&(O=S/N),[A[0],100*O,100*N]},y.hcg.hsl=function(A){const S=A[1]/100,N=A[2]/100*(1-S)+.5*S;let O=0;return N>0&&N<.5?O=S/(2*N):N>=.5&&N<1&&(O=S/(2*(1-N))),[A[0],100*O,100*N]},y.hcg.hwb=function(A){const S=A[1]/100,N=S+A[2]/100*(1-S);return[A[0],100*(N-S),100*(1-N)]},y.hwb.hcg=function(A){const S=A[1]/100,N=1-A[2]/100,O=N-S;let j=0;return O<1&&(j=(N-O)/(1-O)),[A[0],100*O,100*j]},y.apple.rgb=function(A){return[A[0]/65535*255,A[1]/65535*255,A[2]/65535*255]},y.rgb.apple=function(A){return[A[0]/255*65535,A[1]/255*65535,A[2]/255*65535]},y.gray.rgb=function(A){return[A[0]/100*255,A[0]/100*255,A[0]/100*255]},y.gray.hsl=function(A){return[0,0,A[0]]},y.gray.hsv=y.gray.hsl,y.gray.hwb=function(A){return[0,100,A[0]]},y.gray.cmyk=function(A){return[0,0,0,A[0]]},y.gray.lab=function(A){return[A[0],0,0]},y.gray.hex=function(A){const S=255&Math.round(A[0]/100*255),N=((S<<16)+(S<<8)+S).toString(16).toUpperCase();return"000000".substring(N.length)+N},y.rgb.gray=function(A){return[(A[0]+A[1]+A[2])/3/255*100]}},9047:(k,_,b)=>{const D=b(9246),x=b(802),y={};Object.keys(D).forEach(A=>{y[A]={},Object.defineProperty(y[A],"channels",{value:D[A].channels}),Object.defineProperty(y[A],"labels",{value:D[A].labels});const S=x(A);Object.keys(S).forEach(N=>{const O=S[N];y[A][N]=function(j){const G=function(...W){const F=W[0];if(F==null)return F;F.length>1&&(W=F);const H=j(W);if(typeof H=="object")for(let Q=H.length,J=0;J<Q;J++)H[J]=Math.round(H[J]);return H};return"conversion"in j&&(G.conversion=j.conversion),G}(O),y[A][N].raw=function(j){const G=function(...W){const F=W[0];return F==null?F:(F.length>1&&(W=F),j(W))};return"conversion"in j&&(G.conversion=j.conversion),G}(O)})}),k.exports=y},802:(k,_,b)=>{const D=b(9246);function x(S){const N=function(){const j={},G=Object.keys(D);for(let W=G.length,F=0;F<W;F++)j[G[F]]={distance:-1,parent:null};return j}(),O=[S];for(N[S].distance=0;O.length;){const j=O.pop(),G=Object.keys(D[j]);for(let W=G.length,F=0;F<W;F++){const H=G[F],Q=N[H];Q.distance===-1&&(Q.distance=N[j].distance+1,Q.parent=j,O.unshift(H))}}return N}function y(S,N){return function(O){return N(S(O))}}function A(S,N){const O=[N[S].parent,S];let j=D[N[S].parent][S],G=N[S].parent;for(;N[G].parent;)O.unshift(N[G].parent),j=y(D[N[G].parent][G],j),G=N[G].parent;return j.conversion=O,j}k.exports=function(S){const N=x(S),O={},j=Object.keys(N);for(let G=j.length,W=0;W<G;W++){const F=j[W];N[F].parent!==null&&(O[F]=A(F,N))}return O}},6931:k=>{k.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const S=A},8708:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const S=A},1866:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const S=A},7793:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const S=A},7388:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},4098:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const S=A},8264:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const S=A},6269:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const S=A},265:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const S=A},5247:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const S=A},3350:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const S=A},7378:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const S=A},3469:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const S=A},6386:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},7693:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const S=A},1559:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const S=A},2267:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const S=A},4062:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7719:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const S=A},8762:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},3817:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},4808:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const S=A},1232:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const S=A},6903:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},9968:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const S=A},7141:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const S=A},8991:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const S=A},70:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const S=A},7048:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},5651:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},5506:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},4043:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},2655:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const S=A},5032:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const S=A},2329:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const S=A},4143:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const S=A},8986:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},8795:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const S=A},8137:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const S=A},1623:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},5562:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},8423:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},1801:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const S=A},5727:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},9715:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=A},4391:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=A},25:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const S=A},7317:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const S=A},1905:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const S=A},6309:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const S=A},9819:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},9822:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const S=A},8149:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},3629:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},1792:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},1666:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const S=A},8527:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},1185:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},7913:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const S=A},9529:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const S=A},7621:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},253:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},7801:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const S=A},4962:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},5199:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item .ck-button{text-align:left}[dir=rtl] .ck.ck-list__item .ck-button{text-align:right}.ck.ck-list__item .ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,oJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cAgED,CA9DC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UA6CD,CA/CA,uCAME,eAyCF,CA/CA,uCAUE,gBAqCF,CA/CA,6BAgBC,qCA+BD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},3710:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},991:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const S=A},5380:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},8298:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},2722:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},8107:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const S=A},109:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const S=A},1671:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const S=A},2710:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const S=A},9677:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},9205:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,sCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const S=A},7676:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const S=A},695:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},4095:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const S=A},8508:(k,_,b)=>{b.d(_,{A:()=>S});var D=b(9372),x=b.n(D),y=b(935),A=b.n(y)()(x());A.push([k.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const S=A},935:k=>{k.exports=function(_){var b=[];return b.toString=function(){return this.map(function(D){var x=_(D);return D[2]?"@media ".concat(D[2]," {").concat(x,"}"):x}).join("")},b.i=function(D,x,y){typeof D=="string"&&(D=[[null,D,""]]);var A={};if(y)for(var S=0;S<this.length;S++){var N=this[S][0];N!=null&&(A[N]=!0)}for(var O=0;O<D.length;O++){var j=[].concat(D[O]);y&&A[j[0]]||(x&&(j[2]?j[2]="".concat(x," and ").concat(j[2]):j[2]=x),b.push(j))}},b}},9372:k=>{function _(D,x){return function(y){if(Array.isArray(y))return y}(D)||function(y,A){var S=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(S!=null){var N,O,j=[],G=!0,W=!1;try{for(S=S.call(y);!(G=(N=S.next()).done)&&(j.push(N.value),!A||j.length!==A);G=!0);}catch(F){W=!0,O=F}finally{try{G||S.return==null||S.return()}finally{if(W)throw O}}return j}}(D,x)||function(y,A){if(y){if(typeof y=="string")return b(y,A);var S=Object.prototype.toString.call(y).slice(8,-1);if(S==="Object"&&y.constructor&&(S=y.constructor.name),S==="Map"||S==="Set")return Array.from(y);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return b(y,A)}}(D,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(D,x){(x==null||x>D.length)&&(x=D.length);for(var y=0,A=new Array(x);y<x;y++)A[y]=D[y];return A}k.exports=function(D){var x=_(D,4),y=x[1],A=x[3];if(!A)return y;if(typeof btoa=="function"){var S=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),N="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),O="/*# ".concat(N," */"),j=A.sources.map(function(G){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(G," */")});return[y].concat(j).concat([O]).join(`
`)}return[y].join(`
`)}},2591:(k,_,b)=>{var D,x=function(){return D===void 0&&(D=!!(window&&document&&document.all&&!window.atob)),D},y=function(){var et={};return function(nt){if(et[nt]===void 0){var P=document.querySelector(nt);if(window.HTMLIFrameElement&&P instanceof window.HTMLIFrameElement)try{P=P.contentDocument.head}catch{P=null}et[nt]=P}return et[nt]}}(),A=[];function S(et){for(var nt=-1,P=0;P<A.length;P++)if(A[P].identifier===et){nt=P;break}return nt}function N(et,nt){for(var P={},tt=[],ft=0;ft<et.length;ft++){var U=et[ft],_t=nt.base?U[0]+nt.base:U[0],Ot=P[_t]||0,Ut="".concat(_t," ").concat(Ot);P[_t]=Ot+1;var mt=S(Ut),yt={css:U[1],media:U[2],sourceMap:U[3]};mt!==-1?(A[mt].references++,A[mt].updater(yt)):A.push({identifier:Ut,updater:J(yt,nt),references:1}),tt.push(Ut)}return tt}function O(et){var nt=document.createElement("style"),P=et.attributes||{};if(P.nonce===void 0){var tt=b.nc;tt&&(P.nonce=tt)}if(Object.keys(P).forEach(function(U){nt.setAttribute(U,P[U])}),typeof et.insert=="function")et.insert(nt);else{var ft=y(et.insert||"head");if(!ft)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ft.appendChild(nt)}return nt}var j,G=(j=[],function(et,nt){return j[et]=nt,j.filter(Boolean).join(`
`)});function W(et,nt,P,tt){var ft=P?"":tt.media?"@media ".concat(tt.media," {").concat(tt.css,"}"):tt.css;if(et.styleSheet)et.styleSheet.cssText=G(nt,ft);else{var U=document.createTextNode(ft),_t=et.childNodes;_t[nt]&&et.removeChild(_t[nt]),_t.length?et.insertBefore(U,_t[nt]):et.appendChild(U)}}function F(et,nt,P){var tt=P.css,ft=P.media,U=P.sourceMap;if(ft?et.setAttribute("media",ft):et.removeAttribute("media"),U&&typeof btoa<"u"&&(tt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U))))," */")),et.styleSheet)et.styleSheet.cssText=tt;else{for(;et.firstChild;)et.removeChild(et.firstChild);et.appendChild(document.createTextNode(tt))}}var H=null,Q=0;function J(et,nt){var P,tt,ft;if(nt.singleton){var U=Q++;P=H||(H=O(nt)),tt=W.bind(null,P,U,!1),ft=W.bind(null,P,U,!0)}else P=O(nt),tt=F.bind(null,P,nt),ft=function(){(function(_t){if(_t.parentNode===null)return!1;_t.parentNode.removeChild(_t)})(P)};return tt(et),function(_t){if(_t){if(_t.css===et.css&&_t.media===et.media&&_t.sourceMap===et.sourceMap)return;tt(et=_t)}else ft()}}k.exports=function(et,nt){(nt=nt||{}).singleton||typeof nt.singleton=="boolean"||(nt.singleton=x());var P=N(et=et||[],nt);return function(tt){if(tt=tt||[],Object.prototype.toString.call(tt)==="[object Array]"){for(var ft=0;ft<P.length;ft++){var U=S(P[ft]);A[U].references--}for(var _t=N(tt,nt),Ot=0;Ot<P.length;Ot++){var Ut=S(P[Ot]);A[Ut].references===0&&(A[Ut].updater(),A.splice(Ut,1))}P=_t}}}}},h={};function p(k){var _=h[k];if(_!==void 0)return _.exports;var b=h[k]={id:k,exports:{}};return l[k](b,b.exports,p),b.exports}p.n=k=>{var _=k&&k.__esModule?()=>k.default:()=>k;return p.d(_,{a:_}),_},p.d=(k,_)=>{for(var b in _)p.o(_,b)&&!p.o(k,b)&&Object.defineProperty(k,b,{enumerable:!0,get:_[b]})},p.o=(k,_)=>Object.prototype.hasOwnProperty.call(k,_),p.nc=void 0;var m={};return(()=>{function k({emitter:o,activator:t,callback:e,contextElements:n}){o.listenTo(document,"mousedown",(i,a)=>{if(!t())return;const c=typeof a.composedPath=="function"?a.composedPath():[],d=typeof n=="function"?n():n;for(const u of d)if(u.contains(a.target)||c.includes(u))return;e()})}function _(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function b({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}function D({keystrokeHandler:o,focusTracker:t,gridItems:e,numberOfColumns:n,uiLanguageDirection:i}){const a=typeof n=="number"?()=>n:n;function c(g){return f=>{const w=e.find(I=>I.element===t.focusedElement),C=e.getIndex(w),T=g(C,e);e.get(T).focus(),f.stopPropagation(),f.preventDefault()}}function d(g,f){return g===f-1?0:g+1}function u(g,f){return g===0?f-1:g-1}o.set("arrowright",c((g,f)=>i==="rtl"?u(g,f.length):d(g,f.length))),o.set("arrowleft",c((g,f)=>i==="rtl"?d(g,f.length):u(g,f.length))),o.set("arrowup",c((g,f)=>{let w=g-a();return w<0&&(w=g+a()*Math.floor(f.length/a()),w>f.length-1&&(w-=a())),w})),o.set("arrowdown",c((g,f)=>{let w=g+a();return w>f.length-1&&(w=g%a()),w}))}p.d(m,{default:()=>Yf});const x=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var y;const A={isMac:S(x),isWindows:(y=x,y.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(x),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(x),isiOS:function(o){return!!o.match(/iphone|ipad/i)||S(o)&&navigator.maxTouchPoints>0}(x),isAndroid:function(o){return o.indexOf("android")>-1}(x),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(x),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function S(o){return o.indexOf("macintosh")>-1}function N(o,t,e,n){e=e||function(u,g){return u===g};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),a=Array.isArray(t)?t:Array.prototype.slice.call(t),c=function(u,g,f){const w=O(u,g,f);if(w===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const C=j(u,w),T=j(g,w),I=O(C,T,f),M=u.length-I,L=g.length-I;return{firstIndex:w,lastIndexOld:M,lastIndexNew:L}}(i,a,e);return n?function(u,g){const{firstIndex:f,lastIndexOld:w,lastIndexNew:C}=u;if(f===-1)return Array(g).fill("equal");let T=[];return f>0&&(T=T.concat(Array(f).fill("equal"))),C-f>0&&(T=T.concat(Array(C-f).fill("insert"))),w-f>0&&(T=T.concat(Array(w-f).fill("delete"))),C<g&&(T=T.concat(Array(g-C).fill("equal"))),T}(c,a.length):function(u,g){const f=[],{firstIndex:w,lastIndexOld:C,lastIndexNew:T}=g;return T-w>0&&f.push({index:w,type:"insert",values:u.slice(w,T)}),C-w>0&&f.push({index:w+(T-w),type:"delete",howMany:C-w}),f}(a,c)}function O(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function j(o,t){return o.slice(t).reverse()}function G(o,t,e){e=e||function(M,L){return M===L};const n=o.length,i=t.length;if(n>200||i>200||n+i>300)return G.fastDiff(o,t,e,!0);let a,c;if(i<n){const M=o;o=t,t=M,a="delete",c="insert"}else a="insert",c="delete";const d=o.length,u=t.length,g=u-d,f={},w={};function C(M){const L=(w[M-1]!==void 0?w[M-1]:-1)+1,z=w[M+1]!==void 0?w[M+1]:-1,Y=L>z?-1:1;f[M+Y]&&(f[M]=f[M+Y].slice(0)),f[M]||(f[M]=[]),f[M].push(L>z?a:c);let X=Math.max(L,z),pt=X-M;for(;pt<d&&X<u&&e(o[pt],t[X]);)pt++,X++,f[M].push("equal");return X}let T,I=0;do{for(T=-I;T<g;T++)w[T]=C(T);for(T=g+I;T>g;T--)w[T]=C(T);w[g]=C(g),I++}while(w[g]!==u);return f[g].slice(1)}G.fastDiff=N;const W=function(){return function o(){o.called=!0}};class F{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=W(),this.off=W()}}const H=new Array(256).fill("").map((o,t)=>("0"+t.toString(16)).slice(-2));function Q(){const o=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+H[255&o]+H[o>>8&255]+H[o>>16&255]+H[o>>24&255]+H[255&t]+H[t>>8&255]+H[t>>16&255]+H[t>>24&255]+H[255&e]+H[e>>8&255]+H[e>>16&255]+H[e>>24&255]+H[255&n]+H[n>>8&255]+H[n>>16&255]+H[n>>24&255]}const J={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function et(o,t){const e=J.get(t.priority);for(let n=0;n<o.length;n++)if(J.get(o[n].priority)<e)return void o.splice(n,0,t);o.push(t)}const nt="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class P extends Error{constructor(t,e,n){super(function(i,a){const c=new WeakSet,d=(f,w)=>{if(typeof w=="object"&&w!==null){if(c.has(w))return`[object ${w.constructor.name}]`;c.add(w)}return w},u=a?` ${JSON.stringify(a,d)}`:"",g=U(i);return i+u+g}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new P(t.message,e);throw n.stack=t.stack,n}}function tt(o,t){console.warn(..._t(o,t))}function ft(o,t){console.error(..._t(o,t))}function U(o){return`
Read more: ${nt}#error-${o}`}function _t(o,t){const e=U(o);return t?[o,t,e]:[o,e]}const Ot="41.2.1",Ut=new Date(2024,2,18);if(globalThis.CKEDITOR_VERSION)throw new P("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=Ot;const mt=Symbol("listeningTo"),yt=Symbol("emitterId"),Mt=Symbol("delegations"),Ee=qt(Object);function qt(o){return o?class extends o{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let i=!1;this.listenTo(this,t,(a,...c)=>{i||(i=!0,a.off(),e.call(this,a,...c))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,i={}){let a,c;this[mt]||(this[mt]={});const d=this[mt];_e(t)||Re(t);const u=_e(t);(a=d[u])||(a=d[u]={emitter:t,callbacks:{}}),(c=a.callbacks[e])||(c=a.callbacks[e]=[]),c.push(n),function(g,f,w,C,T){f._addEventListener?f._addEventListener(w,C,T):g._addEventListener.call(f,w,C,T)}(this,t,e,n,i)}stopListening(t,e,n){const i=this[mt];let a=t&&_e(t);const c=i&&a?i[a]:void 0,d=c&&e?c.callbacks[e]:void 0;if(!(!i||t&&!c||e&&!d))if(n)it(this,t,e,n),d.indexOf(n)!==-1&&(d.length===1?delete c.callbacks[e]:it(this,t,e,n));else if(d){for(;n=d.pop();)it(this,t,e,n);delete c.callbacks[e]}else if(c){for(e in c.callbacks)this.stopListening(t,e);delete i[a]}else{for(a in i)this.stopListening(i[a].emitter);delete this[mt]}}fire(t,...e){try{const n=t instanceof F?t:new F(this,t),i=n.name;let a=te(this,i);if(n.path.push(this),a){const d=[n,...e];a=Array.from(a);for(let u=0;u<a.length&&(a[u].callback.apply(this,d),n.off.called&&(delete n.off.called,this._removeEventListener(i,a[u].callback)),!n.stop.called);u++);}const c=this[Mt];if(c){const d=c.get(i),u=c.get("*");d&&re(d,n,e),u&&re(u,n,e)}return n.return}catch(n){P.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[Mt]||(this[Mt]=new Map),t.forEach(i=>{const a=this[Mt].get(i);a?a.set(e,n):this[Mt].set(i,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[Mt])if(t)if(e){const n=this[Mt].get(t);n&&n.delete(e)}else this[Mt].delete(t);else this[Mt].clear()}_addEventListener(t,e,n){(function(c,d){const u=At(c);if(u[d])return;let g=d,f=null;const w=[];for(;g!==""&&!u[g];)u[g]={callbacks:[],childEvents:[]},w.push(u[g]),f&&u[g].childEvents.push(f),f=g,g=g.substr(0,g.lastIndexOf(":"));if(g!==""){for(const C of w)C.callbacks=u[g].callbacks.slice();u[g].childEvents.push(f)}})(this,t);const i=jt(this,t),a={callback:e,priority:J.get(n.priority)};for(const c of i)et(c,a)}_removeEventListener(t,e){const n=jt(this,t);for(const i of n)for(let a=0;a<i.length;a++)i[a].callback==e&&(i.splice(a,1),a--)}}:Ee}function Re(o,t){o[yt]||(o[yt]=t||Q())}function _e(o){return o[yt]}function At(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function jt(o,t){const e=At(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){const a=jt(o,e.childEvents[i]);n=n.concat(a)}return n}function te(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?te(o,t.substr(0,t.lastIndexOf(":"))):null}function re(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;const a=new F(t.source,i);a.path=[...t.path],n.fire(a,...e)}}function it(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{qt[o]=Ee.prototype[o]});const ct=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},Et=Symbol("observableProperties"),It=Symbol("boundObservables"),Wt=Symbol("boundProperties"),ee=Symbol("decoratedMethods"),V=Symbol("decoratedOriginal"),K=Z(qt());function Z(o){return o?class extends o{set(t,e){if(ct(t))return void Object.keys(t).forEach(i=>{this.set(i,t[i])},this);at(this);const n=this[Et];if(t in this&&!n.has(t))throw new P("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(i){const a=n.get(t);let c=this.fire(`set:${t}`,t,i,a);c===void 0&&(c=i),a===c&&n.has(t)||(n.set(t,c),this.fire(`change:${t}`,t,c,a))}}),this[t]=e}bind(...t){if(!t.length||!kt(t))throw new P("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new P("observable-bind-duplicate-properties",this);at(this);const e=this[Wt];t.forEach(i=>{if(e.has(i))throw new P("observable-bind-rebind",this)});const n=new Map;return t.forEach(i=>{const a={property:i,to:[]};e.set(i,a),n.set(i,a)}),{to:st,toMany:Ct,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[Et])return;const e=this[Wt],n=this[It];if(t.length){if(!kt(t))throw new P("observable-unbind-wrong-properties",this);t.forEach(i=>{const a=e.get(i);a&&(a.to.forEach(([c,d])=>{const u=n.get(c),g=u[d];g.delete(a),g.size||delete u[d],Object.keys(u).length||(n.delete(c),this.stopListening(c,"change"))}),e.delete(i))})}else n.forEach((i,a)=>{this.stopListening(a,"change")}),n.clear(),e.clear()}decorate(t){at(this);const e=this[t];if(!e)throw new P("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,i)=>{n.return=e.apply(this,i)}),this[t]=function(...n){return this.fire(t,n)},this[t][V]=e,this[ee]||(this[ee]=[]),this[ee].push(t)}stopListening(t,e,n){if(!t&&this[ee]){for(const i of this[ee])this[i]=this[i][V];delete this[ee]}super.stopListening(t,e,n)}}:K}function at(o){o[Et]||(Object.defineProperty(o,Et,{value:new Map}),Object.defineProperty(o,It,{value:new Map}),Object.defineProperty(o,Wt,{value:new Map}))}function st(...o){const t=function(...a){if(!a.length)throw new P("observable-bind-to-parse-error",null);const c={to:[]};let d;return typeof a[a.length-1]=="function"&&(c.callback=a.pop()),a.forEach(u=>{if(typeof u=="string")d.properties.push(u);else{if(typeof u!="object")throw new P("observable-bind-to-parse-error",null);d={observable:u,properties:[]},c.to.push(d)}}),c}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new P("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new P("observable-bind-to-extra-callback",this);var i;t.to.forEach(a=>{if(a.properties.length&&a.properties.length!==n)throw new P("observable-bind-to-properties-length",this);a.properties.length||(a.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(a=>{const c=i[It];let d;c.get(a.observable)||i.listenTo(a.observable,"change",(u,g)=>{d=c.get(a.observable)[g],d&&d.forEach(f=>{ht(i,f.property)})})}),function(a){let c;a._bindings.forEach((d,u)=>{a._to.forEach(g=>{c=g.properties[d.callback?0:a._bindProperties.indexOf(u)],d.to.push([g.observable,c]),function(f,w,C,T){const I=f[It],M=I.get(C),L=M||{};L[T]||(L[T]=new Set),L[T].add(w),M||I.set(C,L)}(a._observable,d,g.observable,c)})})}(this),this._bindProperties.forEach(a=>{ht(this._observable,a)})}function Ct(o,t,e){if(this._bindings.size>1)throw new P("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const a=n.map(c=>[c,i]);return Array.prototype.concat.apply([],a)}(o,t),e)}function kt(o){return o.every(t=>typeof t=="string")}function ht(o,t){const e=o[Wt].get(t);let n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Z[o]=K.prototype[o]});class xt{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function rt(o){let t=0;for(const e of o)t++;return t}function wt(o,t){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}function Nt(o){return!(!o||!o[Symbol.iterator])}const Rt=typeof Xi=="object"&&Xi&&Xi.Object===Object&&Xi;var St=typeof self=="object"&&self&&self.Object===Object&&self;const Ft=Rt||St||Function("return this")(),Kt=Ft.Symbol;var pe=Object.prototype,ae=pe.hasOwnProperty,we=pe.toString,mn=Kt?Kt.toStringTag:void 0;const qo=function(o){var t=ae.call(o,mn),e=o[mn];try{o[mn]=void 0;var n=!0}catch{}var i=we.call(o);return n&&(t?o[mn]=e:delete o[mn]),i};var We=Object.prototype.toString;const bs=function(o){return We.call(o)};var Ze=Kt?Kt.toStringTag:void 0;const je=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":Ze&&Ze in Object(o)?qo(o):bs(o)},Ge=Array.isArray,Dn=function(o){return o!=null&&typeof o=="object"},Na=function(o){return typeof o=="string"||!Ge(o)&&Dn(o)&&je(o)=="[object String]"};function Tn(o,t,e={},n=[]){const i=e&&e.xmlns,a=i?o.createElementNS(i,t):o.createElement(t);for(const c in e)a.setAttribute(c,e[c]);!Na(n)&&Nt(n)||(n=[n]);for(let c of n)Na(c)&&(c=o.createTextNode(c)),a.appendChild(c);return a}const Jt=function(o,t){return function(e){return o(t(e))}},Pa=Jt(Object.getPrototypeOf,Object);var np=Function.prototype,op=Object.prototype,zl=np.toString,Wo=op.hasOwnProperty,ip=zl.call(Object);const bn=function(o){if(!Dn(o)||je(o)!="[object Object]")return!1;var t=Pa(o);if(t===null)return!0;var e=Wo.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&zl.call(e)==ip},rp=function(){this.__data__=[],this.size=0},fr=function(o,t){return o===t||o!=o&&t!=t},ks=function(o,t){for(var e=o.length;e--;)if(fr(o[e][0],t))return e;return-1};var Oa=Array.prototype.splice;const sp=function(o){var t=this.__data__,e=ks(t,o);return!(e<0)&&(e==t.length-1?t.pop():Oa.call(t,e,1),--this.size,!0)},ap=function(o){var t=this.__data__,e=ks(t,o);return e<0?void 0:t[e][1]},mr=function(o){return ks(this.__data__,o)>-1},cp=function(o,t){var e=this.__data__,n=ks(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function Ci(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Ci.prototype.clear=rp,Ci.prototype.delete=sp,Ci.prototype.get=ap,Ci.prototype.has=mr,Ci.prototype.set=cp;const ws=Ci,lp=function(){this.__data__=new ws,this.size=0},La=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},dp=function(o){return this.__data__.get(o)},up=function(o){return this.__data__.has(o)},Go=function(o){if(!ct(o))return!1;var t=je(o);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Ra=Ft["__core-js_shared__"];var ne=function(){var o=/[^.]+$/.exec(Ra&&Ra.keys&&Ra.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const hp=function(o){return!!ne&&ne in o};var pp=Function.prototype.toString;const Ko=function(o){if(o!=null){try{return pp.call(o)}catch{}try{return o+""}catch{}}return""};var gp=/^\[object .+?Constructor\]$/,fp=Function.prototype,mp=Object.prototype,za=fp.toString,br=mp.hasOwnProperty,jl=RegExp("^"+za.call(br).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const dn=function(o){return!(!ct(o)||hp(o))&&(Go(o)?jl:gp).test(Ko(o))},bp=function(o,t){return o==null?void 0:o[t]},Yo=function(o,t){var e=bp(o,t);return dn(e)?e:void 0},kr=Yo(Ft,"Map"),wr=Yo(Object,"create"),Fl=function(){this.__data__=wr?wr(null):{},this.size=0},kp=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t};var wp=Object.prototype.hasOwnProperty;const _p=function(o){var t=this.__data__;if(wr){var e=t[o];return e==="__lodash_hash_undefined__"?void 0:e}return wp.call(t,o)?t[o]:void 0};var Vl=Object.prototype.hasOwnProperty;const Ap=function(o){var t=this.__data__;return wr?t[o]!==void 0:Vl.call(t,o)},Hl=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=wr&&t===void 0?"__lodash_hash_undefined__":t,this};function vi(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}vi.prototype.clear=Fl,vi.prototype.delete=kp,vi.prototype.get=_p,vi.prototype.has=Ap,vi.prototype.set=Hl;const $l=vi,Cp=function(){this.size=0,this.__data__={hash:new $l,map:new(kr||ws),string:new $l}},vp=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},_s=function(o,t){var e=o.__data__;return vp(t)?e[typeof t=="string"?"string":"hash"]:e.map},yp=function(o){var t=_s(this,o).delete(o);return this.size-=t?1:0,t},Ep=function(o){return _s(this,o).get(o)},Ul=function(o){return _s(this,o).has(o)},yi=function(o,t){var e=_s(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function Ei(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Ei.prototype.clear=Cp,Ei.prototype.delete=yp,Ei.prototype.get=Ep,Ei.prototype.has=Ul,Ei.prototype.set=yi;const _r=Ei,ql=function(o,t){var e=this.__data__;if(e instanceof ws){var n=e.__data__;if(!kr||n.length<199)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new _r(n)}return e.set(o,t),this.size=e.size,this};function xi(o){var t=this.__data__=new ws(o);this.size=t.size}xi.prototype.clear=lp,xi.prototype.delete=La,xi.prototype.get=dp,xi.prototype.has=up,xi.prototype.set=ql;const Di=xi,xp=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},As=function(){try{var o=Yo(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Cs=function(o,t,e){t=="__proto__"&&As?As(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e};var Dp=Object.prototype.hasOwnProperty;const ja=function(o,t,e){var n=o[t];Dp.call(o,t)&&fr(n,e)&&(e!==void 0||t in o)||Cs(o,t,e)},Ti=function(o,t,e,n){var i=!e;e||(e={});for(var a=-1,c=t.length;++a<c;){var d=t[a],u=n?n(e[d],o[d],d,e,o):void 0;u===void 0&&(u=o[d]),i?Cs(e,d,u):ja(e,d,u)}return e},Qo=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n},Fa=function(o){return Dn(o)&&je(o)=="[object Arguments]"};var Wl=Object.prototype,Tp=Wl.hasOwnProperty,Sp=Wl.propertyIsEnumerable;const vs=Fa(function(){return arguments}())?Fa:function(o){return Dn(o)&&Tp.call(o,"callee")&&!Sp.call(o,"callee")},Ip=function(){return!1};var Gl=s&&!s.nodeType&&s,Kl=Gl&&!0&&r&&!r.nodeType&&r,Yl=Kl&&Kl.exports===Gl?Ft.Buffer:void 0;const Ar=(Yl?Yl.isBuffer:void 0)||Ip;var Mp=/^(?:0|[1-9]\d*)$/;const ys=function(o,t){var e=typeof o;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&Mp.test(o))&&o>-1&&o%1==0&&o<t},Va=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var Me={};Me["[object Float32Array]"]=Me["[object Float64Array]"]=Me["[object Int8Array]"]=Me["[object Int16Array]"]=Me["[object Int32Array]"]=Me["[object Uint8Array]"]=Me["[object Uint8ClampedArray]"]=Me["[object Uint16Array]"]=Me["[object Uint32Array]"]=!0,Me["[object Arguments]"]=Me["[object Array]"]=Me["[object ArrayBuffer]"]=Me["[object Boolean]"]=Me["[object DataView]"]=Me["[object Date]"]=Me["[object Error]"]=Me["[object Function]"]=Me["[object Map]"]=Me["[object Number]"]=Me["[object Object]"]=Me["[object RegExp]"]=Me["[object Set]"]=Me["[object String]"]=Me["[object WeakMap]"]=!1;const Ql=function(o){return Dn(o)&&Va(o.length)&&!!Me[je(o)]},Ha=function(o){return function(t){return o(t)}};var $a=s&&!s.nodeType&&s,Cr=$a&&!0&&r&&!r.nodeType&&r,Ua=Cr&&Cr.exports===$a&&Rt.process;const Si=function(){try{var o=Cr&&Cr.require&&Cr.require("util").types;return o||Ua&&Ua.binding&&Ua.binding("util")}catch{}}();var Zo=Si&&Si.isTypedArray;const qa=Zo?Ha(Zo):Ql;var Bp=Object.prototype.hasOwnProperty;const Zl=function(o,t){var e=Ge(o),n=!e&&vs(o),i=!e&&!n&&Ar(o),a=!e&&!n&&!i&&qa(o),c=e||n||i||a,d=c?Qo(o.length,String):[],u=d.length;for(var g in o)!t&&!Bp.call(o,g)||c&&(g=="length"||i&&(g=="offset"||g=="parent")||a&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||ys(g,u))||d.push(g);return d};var Np=Object.prototype;const Wa=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||Np)},Pp=Jt(Object.keys,Object);var Op=Object.prototype.hasOwnProperty;const Lp=function(o){if(!Wa(o))return Pp(o);var t=[];for(var e in Object(o))Op.call(o,e)&&e!="constructor"&&t.push(e);return t},Es=function(o){return o!=null&&Va(o.length)&&!Go(o)},Jo=function(o){return Es(o)?Zl(o):Lp(o)},Jl=function(o,t){return o&&Ti(t,Jo(t),o)},Rp=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t};var zp=Object.prototype.hasOwnProperty;const jp=function(o){if(!ct(o))return Rp(o);var t=Wa(o),e=[];for(var n in o)(n!="constructor"||!t&&zp.call(o,n))&&e.push(n);return e},Xo=function(o){return Es(o)?Zl(o,!0):jp(o)},Fp=function(o,t){return o&&Ti(t,Xo(t),o)};var xs=s&&!s.nodeType&&s,Ga=xs&&!0&&r&&!r.nodeType&&r,Ka=Ga&&Ga.exports===xs?Ft.Buffer:void 0,Ds=Ka?Ka.allocUnsafe:void 0;const Xl=function(o,t){if(t)return o.slice();var e=o.length,n=Ds?Ds(e):new o.constructor(e);return o.copy(n),n},td=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},Vp=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,a=[];++e<n;){var c=o[e];t(c,e,o)&&(a[i++]=c)}return a},vr=function(){return[]};var Hp=Object.prototype.propertyIsEnumerable,ed=Object.getOwnPropertySymbols;const Ya=ed?function(o){return o==null?[]:(o=Object(o),Vp(ed(o),function(t){return Hp.call(o,t)}))}:vr,$p=function(o,t){return Ti(o,Ya(o),t)},Qa=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},nd=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)Qa(t,Ya(o)),o=Pa(o);return t}:vr,Up=function(o,t){return Ti(o,nd(o),t)},od=function(o,t,e){var n=t(o);return Ge(o)?n:Qa(n,e(o))},yr=function(o){return od(o,Jo,Ya)},id=function(o){return od(o,Xo,nd)},Za=Yo(Ft,"DataView"),Ja=Yo(Ft,"Promise"),Xa=Yo(Ft,"Set"),tc=Yo(Ft,"WeakMap");var rd="[object Map]",sd="[object Promise]",ad="[object Set]",ec="[object WeakMap]",cd="[object DataView]",qp=Ko(Za),Wp=Ko(kr),Gp=Ko(Ja),ld=Ko(Xa),dd=Ko(tc),ti=je;(Za&&ti(new Za(new ArrayBuffer(1)))!=cd||kr&&ti(new kr)!=rd||Ja&&ti(Ja.resolve())!=sd||Xa&&ti(new Xa)!=ad||tc&&ti(new tc)!=ec)&&(ti=function(o){var t=je(o),e=t=="[object Object]"?o.constructor:void 0,n=e?Ko(e):"";if(n)switch(n){case qp:return cd;case Wp:return rd;case Gp:return sd;case ld:return ad;case dd:return ec}return t});const Er=ti;var Kp=Object.prototype.hasOwnProperty;const ud=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&Kp.call(o,"index")&&(e.index=o.index,e.input=o.input),e},Ii=Ft.Uint8Array,nc=function(o){var t=new o.constructor(o.byteLength);return new Ii(t).set(new Ii(o)),t},Yp=function(o,t){var e=t?nc(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)};var Qp=/\w*$/;const hd=function(o){var t=new o.constructor(o.source,Qp.exec(o));return t.lastIndex=o.lastIndex,t};var pd=Kt?Kt.prototype:void 0,gd=pd?pd.valueOf:void 0;const xr=function(o){return gd?Object(gd.call(o)):{}},oc=function(o,t){var e=t?nc(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)},Zp=function(o,t,e){var n=o.constructor;switch(t){case"[object ArrayBuffer]":return nc(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return Yp(o,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return oc(o,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return hd(o);case"[object Symbol]":return xr(o)}};var Dr=Object.create;const Jp=function(){function o(){}return function(t){if(!ct(t))return{};if(Dr)return Dr(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),fd=function(o){return typeof o.constructor!="function"||Wa(o)?{}:Jp(Pa(o))},Xp=function(o){return Dn(o)&&Er(o)=="[object Map]"};var ic=Si&&Si.isMap;const tg=ic?Ha(ic):Xp,eg=function(o){return Dn(o)&&Er(o)=="[object Set]"};var md=Si&&Si.isSet;const bd=md?Ha(md):eg;var rc="[object Arguments]",sc="[object Function]",kd="[object Object]",xe={};xe[rc]=xe["[object Array]"]=xe["[object ArrayBuffer]"]=xe["[object DataView]"]=xe["[object Boolean]"]=xe["[object Date]"]=xe["[object Float32Array]"]=xe["[object Float64Array]"]=xe["[object Int8Array]"]=xe["[object Int16Array]"]=xe["[object Int32Array]"]=xe["[object Map]"]=xe["[object Number]"]=xe[kd]=xe["[object RegExp]"]=xe["[object Set]"]=xe["[object String]"]=xe["[object Symbol]"]=xe["[object Uint8Array]"]=xe["[object Uint8ClampedArray]"]=xe["[object Uint16Array]"]=xe["[object Uint32Array]"]=!0,xe["[object Error]"]=xe[sc]=xe["[object WeakMap]"]=!1;const ac=function o(t,e,n,i,a,c){var d,u=1&e,g=2&e,f=4&e;if(n&&(d=a?n(t,i,a,c):n(t)),d!==void 0)return d;if(!ct(t))return t;var w=Ge(t);if(w){if(d=ud(t),!u)return td(t,d)}else{var C=Er(t),T=C==sc||C=="[object GeneratorFunction]";if(Ar(t))return Xl(t,u);if(C==kd||C==rc||T&&!a){if(d=g||T?{}:fd(t),!u)return g?Up(t,Fp(d,t)):$p(t,Jl(d,t))}else{if(!xe[C])return a?t:{};d=Zp(t,C,u)}}c||(c=new Di);var I=c.get(t);if(I)return I;c.set(t,d),bd(t)?t.forEach(function(L){d.add(o(L,e,n,L,t,c))}):tg(t)&&t.forEach(function(L,z){d.set(z,o(L,e,n,z,t,c))});var M=w?void 0:(f?g?id:yr:g?Xo:Jo)(t);return xp(M||t,function(L,z){M&&(L=t[z=L]),ja(d,z,o(L,e,n,z,t,c))}),d},cc=function(o,t){return ac(o,5,t=typeof t=="function"?t:void 0)},ei=function(o){return Dn(o)&&o.nodeType===1&&!bn(o)};class wd{constructor(t,e){this._config={},e&&this.define(_d(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(bn(e))return void this._setObjectToTarget(t,e,i);const a=e.split(".");e=a.pop();for(const c of a)bn(t[c])||(t[c]={}),t=t[c];if(bn(n))return bn(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const i of n){if(!bn(t[i])){t=null;break}t=t[i]}return t?_d(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function _d(o){return cc(o,ng)}function ng(o){return ei(o)||typeof o=="function"?o:void 0}function To(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Ts(o){const t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}const Ad=kn(qt());function kn(o){return o?class extends o{listenTo(t,e,n,i={}){if(To(t)||Ts(t)){const a={capture:!!i.useCapture,passive:!!i.usePassive},c=this._getProxyEmitter(t,a)||new lc(t,a);this.listenTo(c,e,n,i)}else super.listenTo(t,e,n,i)}stopListening(t,e,n){if(To(t)||Ts(t)){const i=this._getAllProxyEmitters(t);for(const a of i)this.stopListening(a,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,i){const a=n[mt];return a&&a[i]?a[i].emitter:null}(this,dc(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:Ad}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{kn[o]=Ad.prototype[o]});class lc extends qt(){constructor(t,e){super(),Re(this,dc(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),qt().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){qt().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function dc(o,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Q())}(o);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}let Tr;try{Tr={window,document}}catch{Tr={window:{},document:{}}}const Lt=Tr;function Cd(o){const t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function Fe(o){return Object.prototype.toString.call(o)=="[object Text]"}function Ss(o){return Object.prototype.toString.apply(o)=="[object Range]"}function vd(o){return o&&o.parentNode?o.offsetParent===Lt.document.body?null:o.offsetParent:null}const yd=["top","right","bottom","left","width","height"];class se{constructor(t){const e=Ss(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),v(t)||e)if(e){const n=se.getDomRangeRects(t);Is(this,se.getBoundingRect(n))}else Is(this,t.getBoundingClientRect());else if(Ts(t)){const{innerWidth:n,innerHeight:i}=t;Is(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Is(this,t)}clone(){return new se(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const n=new se(e);return n._source=this._source,n}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(Sr(t))return e;let n,i=t,a=t.parentNode||t.commonAncestorContainer;for(;a&&!Sr(a);){const d=((c=a)instanceof HTMLElement?c.ownerDocument.defaultView.getComputedStyle(c).overflow:"visible")==="visible";i instanceof HTMLElement&&E(i)==="absolute"&&(n=i);const u=E(a);if(d||n&&(u==="relative"&&d||u!=="relative")){i=a,a=a.parentNode;continue}const g=new se(a),f=e.getIntersection(g);if(!f)return null;f.getArea()<e.getArea()&&(e=f),i=a,a=a.parentNode}var c;return e}isEqual(t){for(const e of yd)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=Lt.window,n=this.clone().moveBy(t,e);if(v(n._source)){const i=vd(n._source);i&&function(a,c){const d=new se(c),u=Cd(c);let g=0,f=0;g-=d.left,f-=d.top,g+=c.scrollLeft,f+=c.scrollTop,g-=u.left,f-=u.top,a.moveBy(g,f)}(n,i)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(Ts(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const a=Cd(t);e=t.offsetWidth-t.clientWidth-a.left-a.right,n=t.offsetHeight-t.clientHeight-a.top-a.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=a.left,this.top+=a.top,this.right-=a.right,this.bottom-=a.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const i of n)e.push(new se(i));else{let i=t.startContainer;Fe(i)&&(i=i.parentNode);const a=new se(i.getBoundingClientRect());a.right=a.left,a.width=0,e.push(a)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new se(e))}}function Is(o,t){for(const e of yd)o[e]=t[e]}function Sr(o){return!!v(o)&&o===o.ownerDocument.body}function v(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function E(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const B=class{constructor(o,t){B._observerInstance||B._createObserver(),this._element=o,this._callback=t,B._addElementCallback(o,t),B._observerInstance.observe(o)}get element(){return this._element}destroy(){B._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,t){B._elementCallbacks||(B._elementCallbacks=new Map);let e=B._elementCallbacks.get(o);e||(e=new Set,B._elementCallbacks.set(o,e)),e.add(t)}static _deleteElementCallback(o,t){const e=B._getElementCallbacks(o);e&&(e.delete(t),e.size||(B._elementCallbacks.delete(o),B._observerInstance.unobserve(o))),B._elementCallbacks&&!B._elementCallbacks.size&&(B._observerInstance=null,B._elementCallbacks=null)}static _getElementCallbacks(o){return B._elementCallbacks?B._elementCallbacks.get(o):null}static _createObserver(){B._observerInstance=new Lt.window.ResizeObserver(o=>{for(const t of o){const e=B._getElementCallbacks(t.target);if(e)for(const n of e)n(t)}})}};let q=B;function dt(o,t){o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}function Vt(o){return t=>t+o}function ze(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function un(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function Ue(o){return o&&o.nodeType===Node.COMMENT_NODE}function Sn(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}q._observerInstance=null,q._elementCallbacks=null;var Ms=Math.pow;function og({element:o,target:t,positions:e,limiter:n,fitInViewport:i,viewportOffsetConfig:a}){Go(t)&&(t=t()),Go(n)&&(n=n());const c=vd(o),d=function(C){C=Object.assign({top:0,bottom:0,left:0,right:0},C);const T=new se(Lt.window);return T.top+=C.top,T.height-=C.top,T.bottom-=C.bottom,T.height-=C.bottom,T}(a),u=new se(o),g=uk(t,d);let f;if(!g||!d.getIntersection(g))return null;const w={targetRect:g,elementRect:u,positionedElementAncestor:c,viewportRect:d};if(n||i){if(n){const C=uk(n,d);C&&(w.limiterRect=C)}f=function(C,T){const{elementRect:I}=T,M=I.getArea(),L=C.map(X=>new hk(X,T)).filter(X=>!!X.name);let z=0,Y=null;for(const X of L){const{limiterIntersectionArea:pt,viewportIntersectionArea:Pt}=X;if(pt===M)return X;const Ht=Ms(Pt,2)+Ms(pt,2);Ht>z&&(z=Ht,Y=X)}return Y}(e,w)}else f=new hk(e[0],w);return f}function uk(o,t){const e=new se(o).getVisible();return e?e.getIntersection(t):null}class hk{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:i,top:a,name:c,config:d}=n;this.name=c,this.config=d,this._positioningFunctionCoordinates={left:i,top:a},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function pk(o){const t=o.parentNode;t&&t.removeChild(o)}function r5({window:o,rect:t,alignToTop:e,forceScroll:n,viewportOffset:i}){const a=t.clone().moveBy(0,i.bottom),c=t.clone().moveBy(0,-i.top),d=new se(o).excludeScrollbarsAndBorders(),u=e&&n,g=[c,a].every(I=>d.contains(I));let{scrollX:f,scrollY:w}=o;const C=f,T=w;u?w-=d.top-t.top+i.top:g||(fk(c,d)?w-=d.top-t.top+i.top:gk(a,d)&&(w+=e?t.top-d.top-i.top:t.bottom-d.bottom+i.bottom)),g||(mk(t,d)?f-=d.left-t.left+i.left:bk(t,d)&&(f+=t.right-d.right+i.right)),f==C&&w===T||o.scrollTo(f,w)}function s5({parent:o,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:i=0,limiterElement:a}){const c=ig(o),d=e&&n;let u,g,f;const w=a||c.document.body;for(;o!=w;)g=t(),u=new se(o).excludeScrollbarsAndBorders(),f=u.contains(g),d?o.scrollTop-=u.top-g.top+i:f||(fk(g,u)?o.scrollTop-=u.top-g.top+i:gk(g,u)&&(o.scrollTop+=e?g.top-u.top-i:g.bottom-u.bottom+i)),f||(mk(g,u)?o.scrollLeft-=u.left-g.left+i:bk(g,u)&&(o.scrollLeft+=g.right-u.right+i)),o=o.parentNode}function gk(o,t){return o.bottom>t.bottom}function fk(o,t){return o.top<t.top}function mk(o,t){return o.left<t.left}function bk(o,t){return o.right>t.right}function ig(o){return Ss(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function a5(o){if(Ss(o)){let t=o.commonAncestorContainer;return Fe(t)&&(t=t.parentNode),t}return o.parentNode}function kk(o,t){const e=ig(o),n=new se(o);if(e===t)return n;{let i=e;for(;i!=t;){const a=i.frameElement,c=new se(a).excludeScrollbarsAndBorders();n.moveBy(c.left,c.top),i=i.parent}}return n}const c5={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},l5={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},wk={37:"←",38:"↑",39:"→",40:"↓",9:"⇥"},le=function(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)o[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}(),d5=Object.fromEntries(Object.entries(le).map(([o,t])=>{let e;return e=t in wk?wk[t]:o.charAt(0).toUpperCase()+o.slice(1),[t,e]}));function Bs(o){let t;if(typeof o=="string"){if(t=le[o.toLowerCase()],!t)throw new P("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?le.alt:0)+(o.ctrlKey?le.ctrl:0)+(o.shiftKey?le.shift:0)+(o.metaKey?le.cmd:0);return t}function uc(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return Bs(e.slice(0,-1));const n=Bs(e);return(A.isMac||A.isiOS)&&n==le.ctrl?le.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Ed(o){let t=uc(o);return Object.entries(A.isMac||A.isiOS?c5:l5).reduce((e,[n,i])=>(t&le[n]&&(t&=~le[n],e+=i),e),"")+(t?d5[t]:"")}function rg(o,t){const e=t==="ltr";switch(o){case le.arrowleft:return e?"left":"right";case le.arrowright:return e?"right":"left";case le.arrowup:return"up";case le.arrowdown:return"down"}}function Be(o){return Array.isArray(o)?o:[o]}const sg=function(o,t,e){(e!==void 0&&!fr(o[t],e)||e===void 0&&!(t in o))&&Cs(o,t,e)},_k=function(o){return function(t,e,n){for(var i=-1,a=Object(t),c=n(t),d=c.length;d--;){var u=c[o?d:++i];if(e(a[u],u,a)===!1)break}return t}}(),u5=function(o){return Dn(o)&&Es(o)},ag=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},h5=function(o){return Ti(o,Xo(o))},p5=function(o,t,e,n,i,a,c){var d=ag(o,e),u=ag(t,e),g=c.get(u);if(g)sg(o,e,g);else{var f=a?a(d,u,e+"",o,t,c):void 0,w=f===void 0;if(w){var C=Ge(u),T=!C&&Ar(u),I=!C&&!T&&qa(u);f=u,C||T||I?Ge(d)?f=d:u5(d)?f=td(d):T?(w=!1,f=Xl(u,!0)):I?(w=!1,f=oc(u,!0)):f=[]:bn(u)||vs(u)?(f=d,vs(d)?f=h5(d):ct(d)&&!Go(d)||(f=fd(u))):w=!1}w&&(c.set(u,f),i(f,u,n,a,c),c.delete(u)),sg(o,e,f)}},g5=function o(t,e,n,i,a){t!==e&&_k(e,function(c,d){if(a||(a=new Di),ct(c))p5(t,e,d,n,o,i,a);else{var u=i?i(ag(t,d),c,d+"",t,e,a):void 0;u===void 0&&(u=c),sg(t,d,u)}},Xo)},Mi=function(o){return o},f5=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)};var Ak=Math.max;const m5=function(o,t,e){return t=Ak(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,a=Ak(n.length-t,0),c=Array(a);++i<a;)c[i]=n[t+i];i=-1;for(var d=Array(t+1);++i<t;)d[i]=n[i];return d[t]=e(c),f5(o,this,d)}},b5=function(o){return function(){return o}},k5=As?function(o,t){return As(o,"toString",{configurable:!0,enumerable:!1,value:b5(t),writable:!0})}:Mi;var w5=Date.now;const _5=function(o){var t=0,e=0;return function(){var n=w5(),i=16-(n-e);if(e=n,i>0){if(++t>=800)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(k5),A5=function(o,t){return _5(m5(o,t,Mi),o+"")},C5=function(o,t,e){if(!ct(e))return!1;var n=typeof t;return!!(n=="number"?Es(e)&&ys(t,e.length):n=="string"&&t in e)&&fr(e[t],o)},Ck=function(o){return A5(function(t,e){var n=-1,i=e.length,a=i>1?e[i-1]:void 0,c=i>2?e[2]:void 0;for(a=o.length>3&&typeof a=="function"?(i--,a):void 0,c&&C5(e[0],e[1],c)&&(a=i<3?void 0:a,i=1),t=Object(t);++n<i;){var d=e[n];d&&o(t,d,n,a)}return t})},cg=Ck(function(o,t,e){g5(o,t,e)});function v5(o,t,e=1,n){if(typeof e!="number")throw new P("translation-service-quantity-not-a-number",null,{quantity:e});const i=n||Lt.window.CKEDITOR_TRANSLATIONS,a=function(f){return Object.keys(f).length}(i);a===1&&(o=Object.keys(i)[0]);const c=t.id||t.string;if(a===0||!function(f,w,C){return!!C[f]&&!!C[f].dictionary[w]}(o,c,i))return e!==1?t.plural:t.string;const d=i[o].dictionary,u=i[o].getPluralForm||(f=>f===1?0:1),g=d[c];return typeof g=="string"?g:g[Number(u(e))]}Lt.window.CKEDITOR_TRANSLATIONS||(Lt.window.CKEDITOR_TRANSLATIONS={});const y5=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function vk(o){return y5.includes(o)?"rtl":"ltr"}class E5{constructor({uiLanguage:t="en",contentLanguage:e,translations:n}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=vk(this.uiLanguage),this.contentLanguageDirection=vk(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((a,c)=>cg(a,c)):i}(n),this.t=(i,a)=>this._t(i,a)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=Be(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(i,a){return i.replace(/%(\d+)/g,(c,d)=>d<a.length?a[d]:c)}(v5(this.uiLanguage,t,n,this.translations),e)}}class go extends qt(){constructor(t={},e={}){super();const n=Nt(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new P("collection-add-item-invalid-index",this);let n=0;for(const i of t){const a=this._getItemIdBeforeAdding(i),c=e+n;this._items.splice(c,0,i),this._itemMap.set(a,i),this.fire("add",i,c),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new P("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}forEach(t,e){this._items.forEach(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new P("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(i,a,c)=>{const d=e._bindToCollection==this,u=e._bindToInternalToExternalMap.get(a);if(d&&u)this._bindToExternalToInternalMap.set(a,u),this._bindToInternalToExternalMap.set(u,a);else{const g=t(a);if(!g)return void this._skippedIndexesFromExternal.push(c);let f=c;for(const w of this._skippedIndexesFromExternal)c>w&&f--;for(const w of e._skippedIndexesFromExternal)f>=w&&f++;this._bindToExternalToInternalMap.set(a,g),this._bindToInternalToExternalMap.set(g,a),this.add(g,f);for(let w=0;w<e._skippedIndexesFromExternal.length;w++)f<=e._skippedIndexesFromExternal[w]&&e._skippedIndexesFromExternal[w]++}};for(const i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,a,c)=>{const d=this._bindToExternalToInternalMap.get(a);d&&this.remove(d),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,g)=>(c<g&&u.push(g-1),c>g&&u.push(g),u),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new P("collection-add-invalid-id",this);if(this.get(n))throw new P("collection-add-item-already-exists",this)}else t[e]=n=Q();return n}_remove(t){let e,n,i,a=!1;const c=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),a=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],a=!i,i&&(n=i[c])):(i=t,n=i[c],e=this._items.indexOf(i),a=e==-1||!this._itemMap.get(n)),a)throw new P("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const d=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(d),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function en(o){const t=o.next();return t.done?null:t.value}class sn extends kn(Z()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new P("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class In{constructor(){this._listener=new(kn())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+Bs(n),n)})}set(t,e,n={}){const i=uc(t),a=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(c,d)=>{e(d,()=>{d.preventDefault(),d.stopPropagation(),c.stop()}),c.return=!0},{priority:a})}press(t){return!!this._listener.fire("_keydown:"+Bs(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function So(o){return Nt(o)?new Map(o):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(o)}function lg(o,t){let e;function n(...i){n.cancel(),e=setTimeout(()=>o(...i),t)}return n.cancel=()=>{clearTimeout(e)},n}function dg(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function ug(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const x5=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function yk(o,t){const e=String(o).matchAll(x5);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class gt extends Z(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Ek,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Ek),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Ek(o){o.return=!1,o.stop()}class oe extends Z(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;const n=t.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(n);(t.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",xk,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",xk),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function xk(o){o.return=!1,o.stop()}class Dk extends oe{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){et(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class Tk extends qt(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,a]of n)this._contextPlugins.set(i,a),this._contextPlugins.set(a,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new P("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const i=this,a=this._context;(function I(M,L=new Set){M.forEach(z=>{u(z)&&(L.has(z)||(L.add(z),z.pluginName&&!i._availablePlugins.has(z.pluginName)&&i._availablePlugins.set(z.pluginName,z),z.requires&&I(z.requires,L)))})})(t),C(t);const c=[...function I(M,L=new Set){return M.map(z=>u(z)?z:i._availablePlugins.get(z)).reduce((z,Y)=>L.has(Y)?z:(L.add(Y),Y.requires&&(C(Y.requires,Y),I(Y.requires,L).forEach(X=>z.add(X))),z.add(Y)),new Set)}(t.filter(I=>!f(I,e)))];(function(I,M){for(const L of M){if(typeof L!="function")throw new P("plugincollection-replace-plugin-invalid-type",null,{pluginItem:L});const z=L.pluginName;if(!z)throw new P("plugincollection-replace-plugin-missing-name",null,{pluginItem:L});if(L.requires&&L.requires.length)throw new P("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:z});const Y=i._availablePlugins.get(z);if(!Y)throw new P("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:z});const X=I.indexOf(Y);if(X===-1){if(i._contextPlugins.has(Y))return;throw new P("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:z})}if(Y.requires&&Y.requires.length)throw new P("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:z});I.splice(X,1,L),i._availablePlugins.set(z,L)}})(c,n);const d=c.map(I=>{let M=i._contextPlugins.get(I);return M=M||new I(a),i._add(I,M),M});return T(d,"init").then(()=>T(d,"afterInit")).then(()=>d);function u(I){return typeof I=="function"}function g(I){return u(I)&&!!I.isContextPlugin}function f(I,M){return M.some(L=>L===I||w(I)===L||w(L)===I)}function w(I){return u(I)?I.pluginName||I.name:I}function C(I,M=null){I.map(L=>u(L)?L:i._availablePlugins.get(L)||L).forEach(L=>{(function(z,Y){if(!u(z))throw Y?new P("plugincollection-soft-required",a,{missingPlugin:z,requiredBy:w(Y)}):new P("plugincollection-plugin-not-found",a,{plugin:z})})(L,M),function(z,Y){if(g(Y)&&!g(z))throw new P("plugincollection-context-required",a,{plugin:w(z),requiredBy:w(Y)})}(L,M),function(z,Y){if(Y&&f(z,e))throw new P("plugincollection-required",a,{plugin:w(z),requiredBy:w(Y)})}(L,M)})}function T(I,M){return I.reduce((L,z)=>z[M]?i._contextPlugins.has(z)?L:L.then(z[M].bind(z)):L,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new P("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}var Sk=Object.getOwnPropertySymbols,D5=Object.prototype.hasOwnProperty,T5=Object.prototype.propertyIsEnumerable;class Ik{constructor(t){this._contextOwner=null;const e=t||{},{translations:n}=e,i=((d,u)=>{var g={};for(var f in d)D5.call(d,f)&&u.indexOf(f)<0&&(g[f]=d[f]);if(d!=null&&Sk)for(var f of Sk(d))u.indexOf(f)<0&&T5.call(d,f)&&(g[f]=d[f]);return g})(e,["translations"]);this.config=new wd(i,this.constructor.defaultConfig);const a=this.constructor.builtinPlugins;this.config.define("plugins",a),this.plugins=new Tk(this,a);const c=this.config.get("language")||{};this.locale=new E5({uiLanguage:typeof c=="string"?c:c.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new go}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new P("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new P("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new P("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class xd extends Z(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class S5 extends In{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const i=e;e=(a,c)=>{this.editor.execute(i),c()}}super.set(t,e,n)}}var I5=p(2591),Bt=p.n(I5),Mk=p(4098),M5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(Mk.A,M5),Mk.A.locals;const Dd=new WeakMap;let Bk=!1;function Nk({view:o,element:t,text:e,isDirectHost:n=!0,keepOnFocus:i=!1}){const a=o.document;function c(d){Dd.get(a).set(t,{text:d,isDirectHost:n,keepOnFocus:i,hostElement:n?t:null}),o.change(u=>hg(a,u))}Dd.has(a)||(Dd.set(a,new Map),a.registerPostFixer(d=>hg(a,d)),a.on("change:isComposing",()=>{o.change(d=>hg(a,d))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(d,u,g)=>{c(g)}),t.placeholder?c(t.placeholder):e&&c(e),e&&function(){Bk||tt("enableplaceholder-deprecated-text-option"),Bk=!0}()}function B5(o,t){return!t.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",t),!0)}function N5(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function P5(o,t){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const e=o.document,n=e.selection.anchor;return(!e.isComposing||!n||n.parent!==o)&&(!!t||!e.isFocused||!!n&&n.parent!==o)}function hg(o,t){const e=Dd.get(o),n=[];let i=!1;for(const[a,c]of e)c.isDirectHost&&(n.push(a),Pk(t,a,c)&&(i=!0));for(const[a,c]of e){if(c.isDirectHost)continue;const d=O5(a);d&&(n.includes(d)||(c.hostElement=d,Pk(t,a,c)&&(i=!0)))}return i}function Pk(o,t,e){const{text:n,isDirectHost:i,hostElement:a}=e;let c=!1;return a.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,a),c=!0),(i||t.childCount==1)&&P5(a,e.keepOnFocus)?B5(o,a)&&(c=!0):N5(o,a)&&(c=!0),c}function O5(o){if(o.childCount){const t=o.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class Ir{is(){throw new Error("is() method is abstract")}}const Ok=function(o){return ac(o,4)};class Mr extends qt(Ir){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new P("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let a=0;for(;n[a]==i[a]&&n[a];)a++;return a===0?null:n[a-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=wt(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Ok(this);return delete t.parent,t}}Mr.prototype.is=function(o){return o==="node"||o==="view:node"};class De extends Mr{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof De&&(this===t||this.data===t.data)}_clone(){return new De(this.document,this.data)}}De.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class Io extends Ir{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new P("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new P("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}Io.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class fo{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const i=Lk(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){const e=[];for(const n of t)for(const i of this._patterns){const a=Lk(n,i);a&&e.push({element:n,pattern:i,match:a})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Lk(o,t){if(typeof t=="function")return t(o);const e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){const a=new Set(i.getAttributeKeys());return bn(n)?(n.style!==void 0&&tt("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&tt("matcher-pattern-deprecated-attributes-class-key",n)):(a.delete("style"),a.delete("class")),pg(n,a,c=>i.getAttribute(c))}(t.attributes,o),!e.attributes)||t.classes&&(e.classes=function(n,i){return pg(n,i.getClassNames(),()=>{})}(t.classes,o),!e.classes)||t.styles&&(e.styles=function(n,i){return pg(n,i.getStyleNames(!0),a=>i.getStyle(a))}(t.styles,o),!e.styles)?null:e}function pg(o,t,e){const n=function(c){return Array.isArray(c)?c.map(d=>bn(d)?(d.key!==void 0&&d.value!==void 0||tt("matcher-pattern-missing-key-or-value",d),[d.key,d.value]):[d,!0]):bn(c)?Object.entries(c):[[c,!0]]}(o),i=Array.from(t),a=[];if(n.forEach(([c,d])=>{i.forEach(u=>{(function(g,f){return g===!0||g===f||g instanceof RegExp&&f.match(g)})(c,u)&&function(g,f,w){if(g===!0)return!0;const C=w(f);return g===C||g instanceof RegExp&&!!String(C).match(g)}(d,u,e)&&a.push(u)})}),n.length&&!(a.length<n.length))return a}const Td=function(o){return typeof o=="symbol"||Dn(o)&&je(o)=="[object Symbol]"};var L5=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R5=/^\w*$/;const gg=function(o,t){if(Ge(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!Td(o))||R5.test(o)||!L5.test(o)||t!=null&&o in Object(t)};function fg(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=e.cache;if(a.has(i))return a.get(i);var c=o.apply(this,n);return e.cache=a.set(i,c)||a,c};return e.cache=new(fg.Cache||_r),e}fg.Cache=_r;const z5=fg,j5=function(o){var t=z5(o,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t};var F5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V5=/\\(\\)?/g,H5=j5(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace(F5,function(e,n,i,a){t.push(i?a.replace(V5,"$1"):n||e)}),t});const $5=H5,U5=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i};var Rk=Kt?Kt.prototype:void 0,zk=Rk?Rk.toString:void 0;const q5=function o(t){if(typeof t=="string")return t;if(Ge(t))return U5(t,o)+"";if(Td(t))return zk?zk.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},mg=function(o){return o==null?"":q5(o)},Sd=function(o,t){return Ge(o)?o:gg(o,t)?[o]:$5(mg(o))},W5=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0},Ns=function(o){if(typeof o=="string"||Td(o))return o;var t=o+"";return t=="0"&&1/o==-1/0?"-0":t},bg=function(o,t){for(var e=0,n=(t=Sd(t,o)).length;o!=null&&e<n;)o=o[Ns(t[e++])];return e&&e==n?o:void 0},jk=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(i);++n<i;)a[n]=o[n+t];return a},G5=function(o,t){return t.length<2?o:bg(o,jk(t,0,-1))},K5=function(o,t){return t=Sd(t,o),(o=G5(o,t))==null||delete o[Ns(W5(t))]},Y5=function(o,t){return o==null||K5(o,t)},hc=function(o,t,e){var n=o==null?void 0:bg(o,t);return n===void 0?e:n},Q5=function(o,t,e,n){if(!ct(o))return o;for(var i=-1,a=(t=Sd(t,o)).length,c=a-1,d=o;d!=null&&++i<a;){var u=Ns(t[i]),g=e;if(u==="__proto__"||u==="constructor"||u==="prototype")return o;if(i!=c){var f=d[u];(g=n?n(f,u,d):void 0)===void 0&&(g=ct(f)?f:ys(t[i+1])?[]:{})}ja(d,u,g),d=d[u]}return o},Z5=function(o,t,e){return o==null?o:Q5(o,t,e)};class kg{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=function(n){let i=null,a=0,c=0,d=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let g=0;g<n.length;g++){const f=n.charAt(g);if(i===null)switch(f){case":":d||(d=n.substr(a,g-a),c=g+1);break;case'"':case"'":i=f;break;case";":{const w=n.substr(c,g-c);d&&u.set(d.trim(),w.trim()),d=null,a=g+1;break}}else f===i&&(i=null)}return u}(t);for(const[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(ct(t))for(const[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=wg(t);Y5(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!ct(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([e])=>e)}clear(){this._styles={}}getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=hc(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class J5{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(ct(e))_g(n,wg(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:a,value:c}=i(e);_g(n,a,c)}else _g(n,t,e)}getNormalized(t,e){if(!t)return cg({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return hc(e,n);const i=n(t,e);if(i)return i}return hc(e,wg(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(i=>{const a=this.getNormalized(i,t);return a&&typeof a=="object"?Object.keys(a).length:a}),n=new Set([...e,...Object.keys(t)]);return Array.from(n)}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function wg(o){return o.replace("-",".")}function _g(o,t,e){let n=e;ct(e)&&(n=cg({},hc(o,t),e)),Z5(o,t,n)}class Fn extends Mr{constructor(t,e,n,i){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(a){const c=So(a);for(const[d,u]of c)u===null?c.delete(d):typeof u!="string"&&c.set(d,String(u));return c}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const a=this._attrs.get("class");Fk(this._classes,a),this._attrs.delete("class")}this._styles=new kg(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof Fn))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new fo(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const i of this.getChildren())e.push(i._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(a,c){return typeof c=="string"?[new De(a,c)]:(Nt(c)||(c=[c]),Array.from(c).map(d=>typeof d=="string"?new De(a,d):d instanceof Io?new De(a,d.data):d))}(this.document,e);for(const a of i)a.parent!==null&&a._remove(),a.parent=this,a.document=this.document,this._children.splice(t,0,a),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?Fk(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of Be(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of Be(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of Be(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Fk(o,t){const e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}Fn.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class pc extends Fn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=X5}}function X5(){const o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of o)if(!e.is("uiElement"))return null;return this.childCount}pc.prototype.is=function(o,t){return t?t===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Id extends Z(pc){constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",a=>a&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Id.prototype.is=function(o,t){return t?t===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const Vk=Symbol("rootName");class Hk extends Id{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(Vk)}set rootName(t){this._setCustomProperty(Vk,t)}set _name(t){this.name=t}}Hk.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Br{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new P("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new P("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=Tt._createAt(t.startPosition):this._position=Tt._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof De){if(t.isAtEnd)return this._position=Tt._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof Fn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new Tt(i,0);return this._position=t,this._formatReturnValue("elementStart",i,e,t,1)}if(i instanceof De){if(this.singleCharacters)return t=new Tt(i,0),this._position=t,this._next();let a,c=i.data.length;return i==this._boundaryEndParent?(c=this.boundaries.end.offset,a=new Io(i,0,c),t=Tt._createAfter(a)):(a=new Io(i,0,i.data.length),t.offset++),this._position=t,this._formatReturnValue("text",a,e,t,c)}if(typeof i=="string"){let a;this.singleCharacters?a=1:a=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const c=new Io(n,t.offset,a);return t.offset+=a,this._position=t,this._formatReturnValue("text",c,e,t,a)}return t=Tt._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof De){if(t.isAtStart)return this._position=Tt._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof Fn)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new Tt(i,i.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof De){if(this.singleCharacters)return t=new Tt(i,i.data.length),this._position=t,this._previous();let a,c=i.data.length;if(i==this._boundaryStartParent){const d=this.boundaries.start.offset;a=new Io(i,d,i.data.length-d),c=a.data.length,t=Tt._createBefore(a)}else a=new Io(i,0,i.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",a,e,t,c)}if(typeof i=="string"){let a;if(this.singleCharacters)a=1;else{const d=n===this._boundaryStartParent?this.boundaries.start.offset:0;a=t.offset-d}t.offset-=a;const c=new Io(n,t.offset,a);return this._position=t,this._formatReturnValue("text",c,e,t,a)}return t=Tt._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,a){return e instanceof Io&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Tt._createAfter(e.textNode):(i=Tt._createAfter(e.textNode),this._position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Tt._createBefore(e.textNode):(i=Tt._createBefore(e.textNode),this._position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:a}}}}class Tt extends Ir{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Id);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=Tt._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Br(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=wt(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Br(t)}clone(){return new Tt(this.parent,this.offset)}static _createAt(t,e){if(t instanceof Tt)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new P("view-createpositionat-offset-required",n)}return new Tt(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new Tt(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new P("view-position-after-root",t,{root:t});return new Tt(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new Tt(t.textNode,t.offsetInText);if(!t.parent)throw new P("view-position-before-root",t,{root:t});return new Tt(t.parent,t.index)}}Tt.prototype.is=function(o){return o==="position"||o==="view:position"};class Qt extends Ir{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Br({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(Md,{direction:"backward"}),e=this.end.getLastMatchingPosition(Md);return t.parent.is("$text")&&t.isAtStart&&(t=Tt._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=Tt._createAfter(e.parent)),new Qt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(Md);if(t.isAfter(this.end)||t.isEqual(this.end))return new Qt(t,t);let e=this.end.getLastMatchingPosition(Md,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new Tt(n,0)),i&&i.is("$text")&&(e=new Tt(i,i.data.length)),new Qt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Qt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Qt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Qt(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Br(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new Qt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Br(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Br(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new Tt(t,e),new Tt(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(Tt._createBefore(t),e)}}function Md(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}Qt.prototype.is=function(o){return o==="range"||o==="view:range"};class mo extends qt(Ir){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=rt(this.getRanges());if(e!=rt(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let a of t.getRanges())if(a=a.getTrimmed(),n.start.isEqual(a.start)&&n.end.isEqual(a.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(i);else if(e instanceof mo||e instanceof Ag)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Qt)this._setRanges([e],i&&i.backward),this._setFakeOptions(i);else if(e instanceof Tt)this._setRanges([new Qt(e)]),this._setFakeOptions(i);else if(e instanceof Mr){const a=!!i&&!!i.backward;let c;if(n===void 0)throw new P("view-selection-setto-required-second-parameter",this);c=n=="in"?Qt._createIn(e):n=="on"?Qt._createOn(e):new Qt(Tt._createAt(e,n)),this._setRanges([c],a),this._setFakeOptions(i)}else{if(!Nt(e))throw new P("view-selection-setto-not-selectable",this);this._setRanges(e,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new P("view-selection-setfocus-no-ranges",this);const n=Tt._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new Qt(n,i),!0):this._addRange(new Qt(i,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Qt))throw new P("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new P("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Qt(t.start,t.end))}}mo.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Ag extends qt(Ir){constructor(...t){super(),this._selection=new mo,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}Ag.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class Ps extends F{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Cg=Symbol("bubbling contexts");function vg(o){return class extends o{fire(t,...e){try{const n=t instanceof F?t:new F(this,t),i=yg(this);if(!i.size)return;if(gc(n,"capturing",this),Os(i,"$capture",n,...e))return n.return;const a=n.startRange||this.selection.getFirstRange(),c=a?a.getContainedElement():null,d=!!c&&!!$k(i,c);let u=c||function(g){if(!g)return null;const f=g.start.parent,w=g.end.parent,C=f.getPath(),T=w.getPath();return C.length>T.length?f:w}(a);if(gc(n,"atTarget",u),!d){if(Os(i,"$text",n,...e))return n.return;gc(n,"bubbling",u)}for(;u;){if(u.is("rootElement")){if(Os(i,"$root",n,...e))return n.return}else if(u.is("element")&&Os(i,u.name,n,...e))return n.return;if(Os(i,u,n,...e))return n.return;u=u.parent,gc(n,"bubbling",u)}return gc(n,"bubbling",this),Os(i,"$document",n,...e),n.return}catch(n){P.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const i=Be(n.context||"$document"),a=yg(this);for(const c of i){let d=a.get(c);d||(d=new(qt()),a.set(c,d)),this.listenTo(d,t,e,n)}}_removeEventListener(t,e){const n=yg(this);for(const i of n.values())this.stopListening(i,t,e)}}}{const o=vg(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{vg[t]=o.prototype[t]})}function gc(o,t,e){o instanceof Ps&&(o._eventPhase=t,o._currentTarget=e)}function Os(o,t,e,...n){const i=typeof t=="string"?o.get(t):$k(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function $k(o,t){for(const[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function yg(o){return o[Cg]||(o[Cg]=new Map),o[Cg]}class Bd extends vg(Z()){constructor(t){super(),this._postFixers=new Set,this.selection=new Ag,this.roots=new go({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.forEach(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class Nr extends Fn{constructor(t,e,n,i){super(t,e,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=tS}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new P("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function tS(){if(Eg(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Eg(o)>1)return null;o=o.parent}return!o||Eg(o)>1?null:this.childCount}function Eg(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}Nr.DEFAULT_PRIORITY=10,Nr.prototype.is=function(o,t){return t?t===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class xg extends Fn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=eS}_insertChild(t,e){if(e&&(e instanceof Mr||Array.from(e).length>0))throw new P("view-emptyelement-cannot-add",[this,e]);return 0}}function eS(){return null}xg.prototype.is=function(o,t){return t?t===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Nd extends Fn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=oS}_insertChild(t,e){if(e&&(e instanceof Mr||Array.from(e).length>0))throw new P("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function nS(o){o.document.on("arrowKey",(t,e)=>function(n,i,a){if(i.keyCode==le.arrowright){const c=i.domTarget.ownerDocument.defaultView.getSelection(),d=c.rangeCount==1&&c.getRangeAt(0).collapsed;if(d||i.shiftKey){const u=c.focusNode,g=c.focusOffset,f=a.domPositionToView(u,g);if(f===null)return;let w=!1;const C=f.getLastMatchingPosition(T=>(T.item.is("uiElement")&&(w=!0),!(!T.item.is("uiElement")&&!T.item.is("attributeElement"))));if(w){const T=a.viewPositionToDom(C);d?c.collapse(T.parent,T.offset):c.extend(T.parent,T.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function oS(){return null}Nd.prototype.is=function(o,t){return t?t===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Dg extends Fn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=iS}_insertChild(t,e){if(e&&(e instanceof Mr||Array.from(e).length>0))throw new P("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function iS(){return null}Dg.prototype.is=function(o,t){return t?t===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Pr extends qt(Ir){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(a,c){return typeof c=="string"?[new De(a,c)]:(Nt(c)||(c=[c]),Array.from(c).map(d=>typeof d=="string"?new De(a,d):d instanceof Io?new De(a,d.data):d))}(this.document,e);for(const a of i)a.parent!==null&&a._remove(),a.parent=this,this._children.splice(t,0,a),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}Pr.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class Uk{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new Pr(this.document,t)}createText(t){return new De(this.document,t)}createAttributeElement(t,e,n={}){const i=new Nr(this.document,t,e);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(t,e,n={},i={}){let a=null;bn(n)?i=n:a=n;const c=new pc(this.document,t,e,a);return i.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),c}createEditableElement(t,e,n={}){const i=new Id(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(t,e,n={}){const i=new xg(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(t,e,n){const i=new Nd(this.document,t,e);return n&&(i.render=n),i}createRawElement(t,e,n,i={}){const a=new Dg(this.document,t,e);return n&&(a.render=n),i.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),a}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){bn(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof Tt?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new P("view-writer-break-non-container-element",this.document);if(!e.parent)throw new P("view-writer-break-root",this.document);if(t.isAtStart)return Tt._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(Tt._createAfter(e),n);const i=new Qt(t,Tt._createAt(e,"end")),a=new Tt(n,0);this.move(i,a)}return Tt._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const c=n.parent,d=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Tt(c,d))}const i=n.getChild(e-1),a=n.getChild(e);if(!i||!a)return t;if(i.is("$text")&&a.is("$text"))return Wk(i,a);if(i.is("attributeElement")&&a.is("attributeElement")&&i.isSimilar(a)){const c=i.childCount;return i._appendChild(a.getChildren()),a._remove(),this._removeFromClonedElementsGroup(a),this.mergeAttributes(new Tt(i,c))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new P("view-writer-merge-containers-invalid-position",this.document);const i=e.getChild(e.childCount-1),a=i instanceof De?Tt._createAt(i,"end"):Tt._createAt(e,"end");return this.move(Qt._createIn(n),Tt._createAt(e,"end")),this.remove(Qt._createOn(n)),a}insert(t,e){Gk(e=Nt(e)?[...e]:[e],this.document);const n=e.reduce((c,d)=>{const u=c[c.length-1],g=!d.is("uiElement");return u&&u.breakAttributes==g?u.nodes.push(d):c.push({breakAttributes:g,nodes:[d]}),c},[]);let i=null,a=t;for(const{nodes:c,breakAttributes:d}of n){const u=this._insertNodes(a,c,d);i||(i=u.start),a=u.end}return i?new Qt(i,a):new Qt(t)}remove(t){const e=t instanceof Qt?t:Qt._createOn(t);if(fc(e,this.document),e.isCollapsed)return new Pr(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),a=n.parent,c=i.offset-n.offset,d=a._removeChildren(n.offset,c);for(const g of d)this._removeFromClonedElementsGroup(g);const u=this.mergeAttributes(n);return e.start=u,e.end=u.clone(),new Pr(this.document,d)}clear(t,e){fc(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const a=i.item;let c;if(a.is("element")&&e.isSimilar(a))c=Qt._createOn(a);else if(!i.nextPosition.isAfter(t.start)&&a.is("$textProxy")){const d=a.getAncestors().find(u=>u.is("element")&&e.isSimilar(u));d&&(c=Qt._createIn(d))}c&&(c.end.isAfter(t.end)&&(c.end=t.end),c.start.isBefore(t.start)&&(c.start=t.start),this.remove(c))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,a=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-a}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof Nr))throw new P("view-writer-wrap-invalid-attribute",this.document);if(fc(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(c=>!c.is("uiElement")))&&(i=i.getLastMatchingPosition(c=>c.item.is("uiElement"))),i=this._wrapPosition(i,e);const a=this.document.selection;return a.isCollapsed&&a.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new Qt(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof Nr))throw new P("view-writer-unwrap-invalid-attribute",this.document);if(fc(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),a=n.parent,c=this._unwrapChildren(a,n.offset,i.offset,e),d=this.mergeAttributes(c.start);d.isEqual(c.start)||c.end.offset--;const u=this.mergeAttributes(c.end);return new Qt(d,u)}rename(t,e){const n=new pc(this.document,t,e.getAttributes());return this.insert(Tt._createAfter(e),n),this.move(Qt._createIn(e),Tt._createAt(n,0)),this.remove(Qt._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return Tt._createAt(t,e)}createPositionAfter(t){return Tt._createAfter(t)}createPositionBefore(t){return Tt._createBefore(t)}createRange(t,e){return new Qt(t,e)}createRangeOn(t){return Qt._createOn(t)}createRangeIn(t){return Qt._createIn(t)}createSelection(...t){return new mo(...t)}createSlot(t="children"){if(!this._slotFactory)throw new P("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let i,a;if(i=n?Tg(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new P("view-writer-invalid-position-container",this.document);a=n?this._breakAttributes(t,!0):t.parent.is("$text")?Sg(t):t;const c=i._insertChild(a.offset,e);for(const f of e)this._addToClonedElementsGroup(f);const d=a.getShiftedBy(c),u=this.mergeAttributes(a);u.isEqual(a)||d.offset--;const g=this.mergeAttributes(d);return new Qt(u,g)}_wrapChildren(t,e,n,i){let a=e;const c=[];for(;a<n;){const u=t.getChild(a),g=u.is("$text"),f=u.is("attributeElement");if(f&&this._wrapAttributeElement(i,u))c.push(new Tt(t,a));else if(g||!f||rS(i,u)){const w=i._clone();u._remove(),w._appendChild(u),t._insertChild(a,w),this._addToClonedElementsGroup(w),c.push(new Tt(t,a))}else this._wrapChildren(u,0,u.childCount,i);a++}let d=0;for(const u of c)u.offset-=d,u.offset!=e&&(this.mergeAttributes(u).isEqual(u)||(d++,n--));return Qt._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let a=e;const c=[];for(;a<n;){const u=t.getChild(a);if(u.is("attributeElement"))if(u.isSimilar(i)){const g=u.getChildren(),f=u.childCount;u._remove(),t._insertChild(a,g),this._removeFromClonedElementsGroup(u),c.push(new Tt(t,a),new Tt(t,a+f)),a+=f,n+=f-1}else this._unwrapAttributeElement(i,u)?(c.push(new Tt(t,a),new Tt(t,a+1)),a++):(this._unwrapChildren(u,0,u.childCount,i),a++);else a++}let d=0;for(const u of c)u.offset-=d,!(u.offset==e||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(d++,n--));return Qt._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),a=n.parent,c=this._wrapChildren(a,n.offset,i.offset,e),d=this.mergeAttributes(c.start);d.isEqual(c.start)||c.end.offset--;const u=this.mergeAttributes(c.end);return new Qt(d,u)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return qk(t.clone());t.parent.is("$text")&&(t=Sg(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new Qt(t,t.getShiftedBy(1));this.wrap(i,e);const a=new Tt(n.parent,n.index);n._remove();const c=a.nodeBefore,d=a.nodeAfter;return c instanceof De&&d instanceof De?Wk(c,d):qk(a)}_wrapAttributeElement(t,e){if(!Kk(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Kk(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(fc(t,this.document),t.isCollapsed){const u=this._breakAttributes(t.start,e);return new Qt(u,u)}const a=this._breakAttributes(i,e),c=a.parent.childCount,d=this._breakAttributes(n,e);return a.offset+=a.parent.childCount-c,new Qt(d,a)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new P("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new P("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new P("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&Ig(i.parent)||Ig(i))return t.clone();if(i.is("$text"))return this._breakAttributes(Sg(t),e);if(n==i.childCount){const a=new Tt(i.parent,i.index+1);return this._breakAttributes(a,e)}if(n===0){const a=new Tt(i.parent,i.index);return this._breakAttributes(a,e)}{const a=i.index+1,c=i._clone();i.parent._insertChild(a,c),this._addToClonedElementsGroup(c);const d=i.childCount-n,u=i._removeChildren(n,d);c._appendChild(u);const g=new Tt(i.parent,a);return this._breakAttributes(g,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const i of t.getChildren())this._addToClonedElementsGroup(i);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const i of t.getChildren())this._removeFromClonedElementsGroup(i);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function Tg(o){let t=o.parent;for(;!Ig(t);){if(!t)return;t=t.parent}return t}function rS(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function qk(o){const t=o.nodeBefore;if(t&&t.is("$text"))return new Tt(t,t.data.length);const e=o.nodeAfter;return e&&e.is("$text")?new Tt(e,0):o}function Sg(o){if(o.offset==o.parent.data.length)return new Tt(o.parent.parent,o.parent.index+1);if(o.offset===0)return new Tt(o.parent.parent,o.parent.index);const t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new De(o.root.document,t)),new Tt(o.parent.parent,o.parent.index+1)}function Wk(o,t){const e=o.data.length;return o._data+=t.data,t._remove(),new Tt(o,e)}const sS=[De,Nr,pc,xg,Dg,Nd];function Gk(o,t){for(const e of o){if(!sS.some(n=>e instanceof n))throw new P("view-writer-insert-invalid-node-type",t);e.is("$text")||Gk(e.getChildren(),t)}}function Ig(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function fc(o,t){const e=Tg(o.start),n=Tg(o.end);if(!e||!n||e!==n)throw new P("view-writer-invalid-range-container",t)}function Kk(o,t){return o.id===null&&t.id===null}const Yk=o=>o.createTextNode(" "),Qk=o=>{const t=o.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},Zk=o=>{const t=o.createElement("br");return t.dataset.ckeFiller="true",t},bo=7,mc="⁠".repeat(bo);function Vn(o){return typeof o=="string"?o.substr(0,bo)===mc:Fe(o)&&o.data.substr(0,bo)===mc}function bc(o){return o.data.length==bo&&Vn(o)}function Jk(o){const t=typeof o=="string"?o:o.data;return Vn(o)?t.slice(bo):t}function aS(o,t){if(t.keyCode==le.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;Vn(n)&&i<=bo&&e.collapse(n,0)}}}var Xk=p(8264),cS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(Xk.A,cS),Xk.A.locals;class lS extends Z(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),A.isBlink&&!A.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new P("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!A.isAndroid)return;let t=null;const e=!(A.isBlink&&!A.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=Tt._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),i=n.parent.ownerDocument;Vn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=tw(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),a=this._diffNodeLists(n,i),c=this._findUpdateActions(a,n,i,dS);if(c.indexOf("update")!==-1){const d={equal:0,insert:0,delete:0};for(const u of c)if(u==="update"){const g=d.equal+d.insert,f=d.equal+d.delete,w=t.getChild(g);!w||w.is("uiElement")||w.is("rawElement")||this._updateElementMappings(w,n[f]),pk(i[g]),d.equal++}else d[u]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?Tt._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Fe(e.parent)&&Vn(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Vn(t))throw new P("view-renderer-filler-was-lost",this);bc(t)?t.remove():t.data=t.data.substr(bo),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(c){if(c.getAttribute("contenteditable")=="false")return!1;const d=c.findAncestor(u=>u.hasAttribute("contenteditable"));return!d||d.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const i=t.nodeBefore,a=t.nodeAfter;return!(i instanceof De||a instanceof De)&&(!A.isAndroid||!i&&!a)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let i=this.domConverter.viewToDom(t).data;const a=e.inlineFillerPosition;a&&a.parent==t.parent&&a.offset==t.index&&(i=mc+i),ew(n,i)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(a=>a.name),i=t.getAttributeKeys();for(const a of i)this.domConverter.setDomElementAttribute(e,a,t.getAttribute(a),t);for(const a of n)t.hasAttribute(a)||this.domConverter.removeDomElementAttribute(e,a)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(A.isAndroid){let w=null;for(const C of Array.from(n.childNodes)){if(w&&Fe(w)&&Fe(C)){n.normalize();break}w=C}}const i=e.inlineFillerPosition,a=n.childNodes,c=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));i&&i.parent===t&&tw(n.ownerDocument,c,i.offset);const d=this._diffNodeLists(a,c),u=this._findUpdateActions(d,a,c,uS);let g=0;const f=new Set;for(const w of u)w==="delete"?(f.add(a[g]),pk(a[g])):w!=="equal"&&w!=="update"||g++;g=0;for(const w of u)w==="insert"?(un(n,g,c[g]),g++):w==="update"?(ew(a[g],c[g].data),g++):w==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(c[g])),g++);for(const w of f)w.parentNode||this.domConverter.unbindDomElement(w)}_diffNodeLists(t,e){return t=function(n,i){const a=Array.from(n);return a.length==0||!i||a[a.length-1]==i&&a.pop(),a}(t,this._fakeSelectionContainer),G(t,e,hS.bind(null,this.domConverter))}_findUpdateActions(t,e,n,i){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let a=[],c=[],d=[];const u={equal:0,insert:0,delete:0};for(const g of t)g==="insert"?d.push(n[u.equal+u.insert]):g==="delete"?c.push(e[u.equal+u.delete]):(a=a.concat(G(c,d,i).map(f=>f==="equal"?"update":f)),a.push("equal"),c=[],d=[]),u[g]++;return a.concat(G(c,d,i).map(g=>g==="equal"?"update":g))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(A.isBlink&&!A.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&A.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(c){const d=c.createElement("div");return d.className="ck-fake-selection-container",Object.assign(d.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),d.textContent=" ",d}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),a=e.createRange();i.removeAllRanges(),a.selectNodeContents(n),i.addRange(a)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),A.isGecko&&function(a,c){const d=a.parent;if(d.nodeType!=Node.ELEMENT_NODE||a.offset!=d.childNodes.length-1)return;const u=d.childNodes[a.offset];u&&u.tagName=="BR"&&c.addRange(c.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function tw(o,t,e){const n=t instanceof Array?t:t.childNodes,i=n[e];if(Fe(i))return i.data=mc+i.data,i;{const a=o.createTextNode(mc);return Array.isArray(t)?n.splice(e,0,a):un(t,e,a),a}}function dS(o,t){return To(o)&&To(t)&&!Fe(o)&&!Fe(t)&&!Ue(o)&&!Ue(t)&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function uS(o,t){return To(o)&&To(t)&&Fe(o)&&Fe(t)}function hS(o,t,e){return t===e||(Fe(t)&&Fe(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}function ew(o,t){const e=o.data;if(e==t)return;const n=N(e,t);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const pS=Zk(Lt.document),gS=Yk(Lt.document),fS=Qk(Lt.document),Pd="data-ck-unsafe-attribute-",nw="data-ck-unsafe-element";class Od{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new fo,this._inlineObjectElementMatcher=new fo,this._elementsWithTemporaryCustomProperties=new Set,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Lt.document:Lt.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new mo(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),i=n.createDocumentFragment(),a=n.body.childNodes;for(;a.length>0;)i.appendChild(a[0]);const c=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),d=[];let u;for(;u=c.nextNode();)d.push(u);for(const g of d){for(const w of g.getAttributeNames())this.setDomElementAttribute(g,w,g.getAttribute(w));const f=g.tagName.toLowerCase();this._shouldRenameElement(f)&&(rw(f),g.replaceWith(this._createReplacementDomElement(f,g)))}for(;t.firstChild;)t.firstChild.remove();t.append(i)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{const n=t;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),e.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(rw(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),e.bind&&this.bindElements(i,n);for(const a of n.getAttributeKeys())this.setDomElementAttribute(i,a,n.getAttribute(a),n)}if(e.withChildren!==!1)for(const a of this.viewChildrenToDom(n,e))i.appendChild(a);return i}}setDomElementAttribute(t,e,n,i){const a=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(e);a||tt("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),function(c){try{Lt.document.createAttribute(c)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!a?t.removeAttribute(e):t.hasAttribute(Pd+e)&&a&&t.removeAttribute(Pd+e),t.setAttribute(a?e:Pd+e,n)):tt("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:n})}removeDomElementAttribute(t,e){e!=nw&&(t.removeAttribute(e),t.removeAttribute(Pd+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const a of t.getChildren()){n===i&&(yield this._getBlockFiller());const c=a.is("element")&&!!a.getCustomProperty("dataPipeline:transparentRendering")&&!en(a.getAttributes());c&&this.renderingMode=="data"?yield*this.viewChildrenToDom(a,e):(c&&tt("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:a}),yield this.viewToDom(a,e)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=this._domDocument.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return Vn(n)&&(i+=bo),{parent:n,offset:i}}{let n,i,a;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;a=n.childNodes[0]}else{const c=t.nodeBefore;if(i=c.is("$text")?this.findCorrespondingDomText(c):this.mapViewToDom(c),!i)return null;n=i.parentNode,a=i.nextSibling}return Fe(a)&&Vn(a)?{parent:a,offset:bo}:{parent:n,offset:i?ze(i)+1:0}}}domToView(t,e={}){const n=[],i=this._domToView(t,e,n),a=i.next().value;return a?(i.next(),this._processDomInlineNodes(null,n,e),a.is("$text")&&a.data.length==0?null:a):null}*domChildrenToView(t,e={},n=[]){for(let i=0;i<t.childNodes.length;i++){const a=t.childNodes[i],c=this._domToView(a,e,n),d=c.next().value;d!==null&&(this._isBlockViewElement(d)&&this._processDomInlineNodes(t,n,e),yield d,c.next())}this._processDomInlineNodes(t,n,e)}domSelectionToView(t){if(function(i){if(!A.isGecko||!i.rangeCount)return!1;const a=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(a)}catch{return!0}return!1}(t))return new mo([]);if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;Fe(i)&&(i=i.parentNode);const a=this.fakeSelectionToView(i);if(a)return a}const e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){const a=t.getRangeAt(i),c=this.domRangeToView(a);c&&n.push(c)}return new mo(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Qt(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,ze(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return Tt._createBefore(n);if(Fe(t)){if(bc(t))return this.domPositionToView(t.parentNode,ze(t));const i=this.findCorrespondingViewText(t);let a=e;return i?(Vn(t)&&(a-=bo,a=a<0?0:a),new Tt(i,a)):null}if(e===0){const i=this.mapDomToView(t);if(i)return new Tt(i,0)}else{const i=t.childNodes[e-1];if(Fe(i)&&bc(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,ze(i));const a=Fe(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(a&&a.parent)return new Tt(a.parent,a.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(bc(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const a=i.nextSibling;return a instanceof De?a:null}}else{const i=this.mapDomToView(t.parentNode);if(i){const a=i.getChild(0);return a instanceof De?a:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:i}=Lt.window,a=[];ow(e,c=>{const{scrollLeft:d,scrollTop:u}=c;a.push([d,u])}),e.focus(),ow(e,c=>{const[d,u]=a.shift();c.scrollLeft=d,c.scrollTop=u}),Lt.window.scrollTo(n,i)}}_clearDomSelection(){const t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;const e=t.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(e);n&&n.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(pS):!(t.tagName!=="BR"||!iw(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(fS)||function(e,n){return e.isEqualNode(gS)&&iw(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=function(n){const i=[];let a=n;for(;a&&a.nodeType!=Node.DOCUMENT_NODE;)i.unshift(a),a=a.parentNode;return i}(t);for(e.pop();e.length;){const n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_clearTemporaryCustomProperties(){for(const t of this._elementsWithTemporaryCustomProperties)t._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Yk(this._domDocument);case"markedNbsp":return Qk(this._domDocument);case"br":return Zk(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(Fe(t)&&Vn(t)&&e<bo||this.isElement(t)&&Vn(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(t,e,n){if(this.isBlockFiller(t))return null;const i=this.getHostViewElement(t);if(i)return i;if(Ue(t)&&e.skipComments)return null;if(Fe(t)){if(bc(t))return null;{const a=t.data;if(a==="")return null;const c=new De(this.document,a);return n.push(c),c}}{let a=this.mapDomToView(t);if(a)return this._isInlineObjectElement(a)&&n.push(a),a;if(this.isDocumentFragment(t))a=new Pr(this.document),e.bind&&this.bindDocumentFragments(t,a);else{a=this._createViewElement(t,e),e.bind&&this.bindElements(t,a);const d=t.attributes;if(d)for(let u=d.length,g=0;g<u;g++)a._setAttribute(d[g].name,d[g].value);if(this._isViewElementWithRawContent(a,e))return a._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(a)||n.push(a),a;if(Ue(t))return a._setCustomProperty("$rawContent",t.data),a}yield a;const c=[];if(e.withChildren!==!1)for(const d of this.domChildrenToView(t,e,c))a._appendChild(d);if(this._isInlineObjectElement(a))n.push(a);else for(const d of c)n.push(d)}}_processDomInlineNodes(t,e,n){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let i=!1;for(let a=0;a<e.length;a++){const c=e[a];if(!c.is("$text")){i=!1;continue}let d,u=!1;if(mS(c,this.preElements))d=Jk(c.data);else{d=c.data.replace(/[ \n\t\r]{1,}/g," "),u=/[^\S\u00A0]/.test(d.charAt(d.length-1));const g=a>0?e[a-1]:null,f=a+1<e.length?e[a+1]:null,w=!g||g.is("element")&&g.name=="br"||i,C=!f&&!Vn(c.data);n.withChildren!==!1&&(w&&(d=d.replace(/^ /,"")),C&&(d=d.replace(/ $/,""))),d=Jk(d),d=d.replace(/ \u00A0/g,"  ");const T=f&&f.is("element")&&f.name!="br",I=f&&f.is("$text")&&f.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(d)||!f||T||I)&&(d=d.replace(/\u00A0$/," ")),(w||g&&g.is("element")&&g.name!="br")&&(d=d.replace(/^\u00A0/," "))}d.length==0&&c.parent?(c._remove(),e.splice(a,1),a--):(c._data=d,i=u)}e.length=0}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!i||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_getTouchingInlineViewNode(t,e){const n=new Br({startPosition:e?Tt._createAfter(t):Tt._createBefore(t),direction:e?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(Ue(t))return new Nd(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new Fn(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(nw,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const i of e.getAttributeNames())n.setAttribute(i,e.getAttribute(i))}return n}}function mS(o,t){return o.getAncestors().some(e=>e.is("element")&&t.includes(e.name))}function ow(o,t){let e=o;for(;e;)t(e),e=e.parentElement}function iw(o,t){const e=o.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function rw(o){o==="script"&&tt("domconverter-unsafe-script-element-detected"),o==="style"&&tt("domconverter-unsafe-style-element-detected")}class Mo extends kn(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const sw=Ck(function(o,t){Ti(t,Xo(t),o)});class Ls{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,sw(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Bi extends Mo{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Ls(this.view,e,n))}}class bS extends Bi{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return Bs(this)}};this.fire(t.type,t,e)}}const Mg=function(){return Ft.Date.now()};var kS=/\s/;const wS=function(o){for(var t=o.length;t--&&kS.test(o.charAt(t)););return t};var _S=/^\s+/;const AS=function(o){return o&&o.slice(0,wS(o)+1).replace(_S,"")};var CS=/^[-+]0x[0-9a-f]+$/i,vS=/^0b[01]+$/i,yS=/^0o[0-7]+$/i,ES=parseInt;const aw=function(o){if(typeof o=="number")return o;if(Td(o))return NaN;if(ct(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=ct(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=AS(o);var e=vS.test(o);return e||yS.test(o)?ES(o.slice(2),e?2:8):CS.test(o)?NaN:+o};var xS=Math.max,DS=Math.min;const kc=function(o,t,e){var n,i,a,c,d,u,g=0,f=!1,w=!1,C=!0;if(typeof o!="function")throw new TypeError("Expected a function");function T(Y){var X=n,pt=i;return n=i=void 0,g=Y,c=o.apply(pt,X)}function I(Y){var X=Y-u;return u===void 0||X>=t||X<0||w&&Y-g>=a}function M(){var Y=Mg();if(I(Y))return L(Y);d=setTimeout(M,function(X){var pt=t-(X-u);return w?DS(pt,a-(X-g)):pt}(Y))}function L(Y){return d=void 0,C&&n?T(Y):(n=i=void 0,c)}function z(){var Y=Mg(),X=I(Y);if(n=arguments,i=this,u=Y,X){if(d===void 0)return function(pt){return g=pt,d=setTimeout(M,t),f?T(pt):c}(u);if(w)return clearTimeout(d),d=setTimeout(M,t),T(u)}return d===void 0&&(d=setTimeout(M,t)),c}return t=aw(t)||0,ct(e)&&(f=!!e.leading,a=(w="maxWait"in e)?xS(aw(e.maxWait)||0,t):a,C="trailing"in e?!!e.trailing:C),z.cancel=function(){d!==void 0&&clearTimeout(d),g=0,n=u=i=d=void 0},z.flush=function(){return d===void 0?c:L(Mg())},z};class TS extends Mo{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=kc(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new mo(e.getRanges(),{backward:e.isBackward,fake:!1});t!=le.arrowleft&&t!=le.arrowup||n.setTo(n.getFirstPosition()),t!=le.arrowright&&t!=le.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const SS=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},IS=function(o){return this.__data__.has(o)};function Ld(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new _r;++t<e;)this.add(o[t])}Ld.prototype.add=Ld.prototype.push=SS,Ld.prototype.has=IS;const MS=Ld,BS=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},NS=function(o,t){return o.has(t)},cw=function(o,t,e,n,i,a){var c=1&e,d=o.length,u=t.length;if(d!=u&&!(c&&u>d))return!1;var g=a.get(o),f=a.get(t);if(g&&f)return g==t&&f==o;var w=-1,C=!0,T=2&e?new MS:void 0;for(a.set(o,t),a.set(t,o);++w<d;){var I=o[w],M=t[w];if(n)var L=c?n(M,I,w,t,o,a):n(I,M,w,o,t,a);if(L!==void 0){if(L)continue;C=!1;break}if(T){if(!BS(t,function(z,Y){if(!NS(T,Y)&&(I===z||i(I,z,e,n,a)))return T.push(Y)})){C=!1;break}}else if(I!==M&&!i(I,M,e,n,a)){C=!1;break}}return a.delete(o),a.delete(t),C},PS=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},OS=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e};var lw=Kt?Kt.prototype:void 0,Bg=lw?lw.valueOf:void 0;const LS=function(o,t,e,n,i,a,c){switch(e){case"[object DataView]":if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=t.byteLength||!a(new Ii(o),new Ii(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return fr(+o,+t);case"[object Error]":return o.name==t.name&&o.message==t.message;case"[object RegExp]":case"[object String]":return o==t+"";case"[object Map]":var d=PS;case"[object Set]":var u=1&n;if(d||(d=OS),o.size!=t.size&&!u)return!1;var g=c.get(o);if(g)return g==t;n|=2,c.set(o,t);var f=cw(d(o),d(t),n,i,a,c);return c.delete(o),f;case"[object Symbol]":if(Bg)return Bg.call(o)==Bg.call(t)}return!1};var RS=Object.prototype.hasOwnProperty;const zS=function(o,t,e,n,i,a){var c=1&e,d=yr(o),u=d.length;if(u!=yr(t).length&&!c)return!1;for(var g=u;g--;){var f=d[g];if(!(c?f in t:RS.call(t,f)))return!1}var w=a.get(o),C=a.get(t);if(w&&C)return w==t&&C==o;var T=!0;a.set(o,t),a.set(t,o);for(var I=c;++g<u;){var M=o[f=d[g]],L=t[f];if(n)var z=c?n(L,M,f,t,o,a):n(M,L,f,o,t,a);if(!(z===void 0?M===L||i(M,L,e,n,a):z)){T=!1;break}I||(I=f=="constructor")}if(T&&!I){var Y=o.constructor,X=t.constructor;Y==X||!("constructor"in o)||!("constructor"in t)||typeof Y=="function"&&Y instanceof Y&&typeof X=="function"&&X instanceof X||(T=!1)}return a.delete(o),a.delete(t),T};var dw="[object Arguments]",uw="[object Array]",Rd="[object Object]",hw=Object.prototype.hasOwnProperty;const jS=function(o,t,e,n,i,a){var c=Ge(o),d=Ge(t),u=c?uw:Er(o),g=d?uw:Er(t),f=(u=u==dw?Rd:u)==Rd,w=(g=g==dw?Rd:g)==Rd,C=u==g;if(C&&Ar(o)){if(!Ar(t))return!1;c=!0,f=!1}if(C&&!f)return a||(a=new Di),c||qa(o)?cw(o,t,e,n,i,a):LS(o,t,u,e,n,i,a);if(!(1&e)){var T=f&&hw.call(o,"__wrapped__"),I=w&&hw.call(t,"__wrapped__");if(T||I){var M=T?o.value():o,L=I?t.value():t;return a||(a=new Di),i(M,L,e,n,a)}}return!!C&&(a||(a=new Di),zS(o,t,e,n,i,a))},zd=function o(t,e,n,i,a){return t===e||(t==null||e==null||!Dn(t)&&!Dn(e)?t!=t&&e!=e:jS(t,e,n,i,o,a))},FS=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?zd(o,t,void 0,e):!!n};class pw extends Mo{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,i=new Set;for(const c of t){const d=e.mapDomToView(c.target);d&&(d.is("uiElement")||d.is("rawElement")||c.type!=="childList"||this._isBogusBrMutation(c)||i.add(d))}for(const c of t){const d=e.mapDomToView(c.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&c.type==="characterData"){const u=e.findCorrespondingViewText(c.target);u&&!i.has(u.parent)?n.add(u):!u&&Vn(c.target)&&i.add(e.mapDomToView(c.target.parentNode))}}let a=!1;for(const c of n)a=!0,this.renderer.markToSync("text",c);for(const c of i){const d=e.mapViewToDom(c),u=Array.from(c.getChildren()),g=Array.from(e.domChildrenToView(d,{withChildren:!1}));FS(u,g,VS)||(a=!0,this.renderer.markToSync("children",c))}a&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function VS(o,t){if(!Array.isArray(o))return o===t||!(!o.is("$text")||!t.is("$text"))&&o.data===t.data}class jd extends Bi{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,i)=>{const a=e.selection.editableElement;a!==null&&a!==i.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class HS extends Mo{constructor(t){super(t),this.mutationObserver=t.getObserver(pw),this.focusObserver=t.getObserver(jd),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=kc(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=kc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(i,a)=>{this.document.isComposing&&!A.isAndroid||(this._handleSelectionChange(a,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const a={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",a),this._fireSelectionChangeDoneDebounced(a)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class $S extends Bi{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class gw{constructor(t,e={}){this._files=e.cacheFiles?fw(t):null,this._native=t}get files(){return this._files||(this._files=fw(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,n){this._native.setDragImage(t,e,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function fw(o){const t=Array.from(o.files||[]),e=Array.from(o.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class US extends Bi{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,i=n.document;let a=null,c=null,d=[];if(t.dataTransfer&&(a=new gw(t.dataTransfer)),t.data!==null?c=t.data:a&&(c=a.getData("text/plain")),i.selection.isFake)d=Array.from(i.selection.getRanges());else if(e.length)d=e.map(u=>{const g=n.domConverter.domPositionToView(u.startContainer,u.startOffset),f=n.domConverter.domPositionToView(u.endContainer,u.endOffset);return g?n.createRange(g,f):f?n.createRange(f):void 0}).filter(u=>!!u);else if(A.isAndroid){const u=t.target.ownerDocument.defaultView.getSelection();d=Array.from(n.domConverter.domSelectionToView(u).getRanges())}if(A.isAndroid&&t.inputType=="insertCompositionText"&&c&&c.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(d[0].end)]});else if(t.inputType=="insertText"&&c&&c.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...e?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[e]}]:[],n],on:{dragstart:i.to(a=>a.preventDefault())}}]})}}function FA(o,t,e){return(n,i)=>{const a=new se(o);if(a.width<W4||a.height<q4)return null;let c;c=t.position==="inside"?a.bottom-i.height:a.bottom-i.height/2,c-=t.verticalOffset;const d=e(a,i),u=n.clone().moveTo(d,c).getIntersection(i.clone().moveTo(d,c)).getVisible();return!u||u.getArea()<i.getArea()?null:{top:c,left:d,name:`position_${t.position}-side_${t.side}`,config:{withArrow:!1}}}}function VA(o){const t=o.config.get("ui.poweredBy"),e=t&&t.position||"border";return U4({position:e,label:G4,verticalOffset:e==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},t)}var HA=p(1801),Q4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(HA.A,Q4),HA.A.locals;const $A="polite";class Z4{constructor(t){this.editor=t}announce(t,e,n=$A){const i=this.editor;this.view||(this.view=new J4(i.locale),i.ui.view.body.add(this.view));let a=this.view.regionViews.find(c=>c.regionName===t);a||(a=new X4(this.view.locale),this.view.regionViews.add(a)),a.set({regionName:t,text:e,politeness:n})}}class J4 extends Gt{constructor(t){super(t),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class X4 extends Gt{constructor(t){super(t);const e=this.bindTemplate;this.set("regionName",""),this.set("text",""),this.set("politeness",$A),this.setTemplate({tag:"div",attributes:{role:"region","data-region":e.to("regionName"),"aria-live":e.to("politeness")},children:[{text:e.to("text")}]})}}var tB=Object.defineProperty,UA=Object.getOwnPropertySymbols,eB=Object.prototype.hasOwnProperty,nB=Object.prototype.propertyIsEnumerable,qA=(o,t,e)=>t in o?tB(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class oB extends Z(){constructor(t){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const e=t.editing.view;this.editor=t,this.componentFactory=new v4(t),this.focusTracker=new sn,this.tooltipManager=new eu(t),this.poweredBy=new K4(t),this.ariaLiveAnnouncer=new Z4(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(e.document,"layoutChanged",this.update.bind(this)),this.listenTo(e,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null,this.editor.keystrokes.stopListening(t);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}removeEditableElement(t){const e=this._editableElementsMap.get(t);e&&(this._editableElementsMap.delete(t),this.editor.keystrokes.stopListening(e),this.focusTracker.remove(e),e.ckeditorInstance=null)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor,e=t.editing.view;let n,i;t.keystrokes.set("Alt+F10",(a,c)=>{const d=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(d)&&!Array.from(e.domRoots.values()).includes(d)&&(n=d);const u=this._getCurrentFocusedToolbarDefinition();u&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let g=0;g<i.length;g++){const f=i.shift();if(i.push(f),f!==u&&this._focusFocusableCandidateToolbar(f)){u&&u.options.afterBlur&&u.options.afterBlur();break}}c()}),t.keystrokes.set("Esc",(a,c)=>{const d=this._getCurrentFocusedToolbarDefinition();d&&(n?(n.focus(),n=null):t.editing.view.focus(),d.options.afterBlur&&d.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=e;(Sn(n.element)||i.beforeFocus)&&t.push(e)}return t.sort((e,n)=>WA(e)-WA(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!Sn(e.element)&&(e.focus(),!0)}_handleScrollToTheSelection(t,e){const n=((i,a)=>{for(var c in a||(a={}))eB.call(a,c)&&qA(i,c,a[c]);if(UA)for(var c of UA(a))nB.call(a,c)&&qA(i,c,a[c]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);e.viewportOffset.top+=n.top,e.viewportOffset.bottom+=n.bottom,e.viewportOffset.left+=n.left,e.viewportOffset.right+=n.right}}function WA(o){const{toolbarView:t,options:e}=o;let n=10;return Sn(t.element)&&n--,e.isContextual&&n--,n}var GA=p(1185),iB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(GA.A,iB),GA.A.locals;class rB extends Gt{constructor(t){super(t),this.body=new qM(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class sB extends rB{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new Wd;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class aB extends Gt{constructor(t,e,n){super(t),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(i=>{const a=t.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",a),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",a)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(a,c,d)=>{d?n(i):e(i)})}(this):e(this)}}class cB extends aB{constructor(t,e,n,i={}){super(t,e,n);const a=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>a("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}class sf extends xd{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class KA extends Z(){constructor(t,e){super(),e&&sw(this,e),t&&this.set(t)}}var YA=p(991),lB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(YA.A,lB),YA.A.locals;var QA=p(5380),dB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(QA.A,dB),QA.A.locals;const ou=Vt("px");class iu extends gt{constructor(t){super(t),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new P("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new P("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new P("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new Nn(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new uB(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const a=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[a,i])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new hB(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class uB extends Gt{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new sn,this.buttonPrevView=this._createButtonView(e("Previous"),Xt.previousArrow),this.buttonNextView=this._createButtonView(e("Next"),Xt.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new ke(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class hB extends Gt{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",ou),left:n.to("left",ou),width:n.to("width",ou),height:n.to("height",ou)}},children:this.content}),this.on("change:numberOfPanels",(i,a,c,d)=>{c>d?this._addPanels(c-d):this._removePanels(d-c),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new Gt;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new se(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var ZA=p(8298),pB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(ZA.A,pB),ZA.A.locals;const Vs=Vt("px");class gB extends Gt{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new _o({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?Vs(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new _o({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?Vs(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_stickyTopOffset",n=>n&&Vs(n)),bottom:e.to("_stickyBottomOffset",n=>n&&Vs(n)),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(Lt.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=new se(this.limiterElement);let e=t.getVisible();if(e){const n=new se(Lt.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,e=e.getIntersection(n)}if(e&&t.top<e.top){const n=e.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>e.bottom){const i=Math.max(t.bottom-e.bottom,0)+this.limiterBottomOffset;t.bottom-i>t.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<t.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=t,this._stickyBottomOffset=null,this._marginLeft=Vs(-Lt.window.scrollX)}_stickToBottomOfLimiter(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=t,this._marginLeft=Vs(-Lt.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new se(this.contentPanelElement)}}class fB extends Kd{constructor(t,e){const n=t.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Jd},e);super(t,i.creator),this.label=e.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new Oi,this.iconView.content=Xt.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new ke(t),this.resetButtonView.set({label:n("Clear"),icon:Xt.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",a=>!a),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class mB extends Gt{constructor(){super();const t=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",t.if("isVisible","ck-hidden",e=>!e)],tabindex:-1},children:[{tag:"span",children:[{text:[t.to("primaryText")]}]},{tag:"span",children:[{text:[t.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class bB extends Gt{constructor(t){super(t),this.children=this.createCollection(),this.focusTracker=new sn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new to({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const t of this.children)this.focusTracker.add(t.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var JA=/[\\^$.*+?()[\]{}|]/g,kB=RegExp(JA.source);const XA=function(o){return(o=mg(o))&&kB.test(o)?o.replace(JA,"\\$&"):o};var t0=p(8107),wB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(t0.A,wB),t0.A.locals;var _B=Object.defineProperty,e0=Object.getOwnPropertySymbols,AB=Object.prototype.hasOwnProperty,CB=Object.prototype.propertyIsEnumerable,n0=(o,t,e)=>t in o?_B(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class vB extends Gt{constructor(t,e){super(t),this._config=e,this.filteredView=e.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new sn,this.keystrokes=new In,this.resultsView=new bB(t),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),e.infoView&&e.infoView.instance?this.infoView=e.infoView.instance:(this.infoView=new mB,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new to({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:a})=>{this.resultsCount=i,this.totalItemsCount=a}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",e.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const t=e=>e.stopPropagation();for(const e of this.focusableChildren)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(t){const e=t?new RegExp(XA(t),"ig"):null,n=this.filteredView.filter(e);this.fire("search",((i,a)=>{for(var c in a||(a={}))AB.call(a,c)&&n0(i,c,a[c]);if(e0)for(var c of e0(a))CB.call(a,c)&&n0(i,c,a[c]);return i})({query:t},n))}_createSearchTextQueryView(){const t=new fB(this.locale,this._config.queryView);return this.listenTo(t.fieldView,"input",()=>{this.search(t.fieldView.element.value)}),t.on("reset",()=>this.reset()),t.bind("isEnabled").to(this),t}_enableDefaultInfoViewBehavior(){const t=this.locale.t,e=this.infoView;function n(i,{query:a,resultsCount:c,totalItemsCount:d}){return typeof i=="function"?i(a,c,d):i}this.on("search",(i,a)=>{if(a.resultsCount)e.set({isVisible:!1});else{const c=this._config.infoView&&this._config.infoView.text;let d,u;a.totalItemsCount?c&&c.notFound?(d=c.notFound.primary,u=c.notFound.secondary):(d=t("No results found"),u=""):c&&c.noSearchableItems?(d=c.noSearchableItems.primary,u=c.noSearchableItems.secondary):(d=t("No searchable items"),u=""),e.set({primaryText:n(d,a),secondaryText:n(u,a),isVisible:!0})}})}}var o0=p(5727),yB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(o0.A,yB),o0.A.locals;const af=class extends vB{constructor(o,t){super(o,t),this._config=t;const e=Vt("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",e)}}}),this.focusTracker.on("change:isFocused",(i,a,c)=>{this._updateResultsVisibility(),c?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,a)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,a())}),this.listenTo(Lt.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:a})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=a,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new se(this.queryView.fieldView.element).width;const o=af._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:af.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=o}};let i0=af;i0.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,t)=>({top:o.top-t.height,left:o.left,name:"n"})],i0._getOptimalPosition=og;var r0=p(9529),EB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(r0.A,EB),r0.A.locals;var s0=p(109),xB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(s0.A,xB),s0.A.locals;var a0=p(2710),DB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(a0.A,DB),a0.A.locals;class TB extends oB{constructor(t,e){super(t),this.view=e,this._toolbarConfig=aA(t.config.get("toolbar")),this._elementReplacer=new xt,this.listenTo(t.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,a=n.editable,c=i.document.getRoot();a.name=c.rootName,n.render();const d=a.element;this.setEditableElement(a.name,d),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(d),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement;let a;const c=t.config.get("placeholder");c&&(a=typeof c=="string"?c:c[this.view.editable.name]),!a&&i&&i.tagName.toLowerCase()==="textarea"&&(a=i.getAttribute("placeholder")),a&&(n.placeholder=a),Nk({view:e,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(t,e,n){const i=this.view.stickyPanel;if(i.isSticky){const a=new se(i.element).height;e.viewportOffset.top+=a}else{const a=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",a),setTimeout(()=>{this.stopListening(i,"change:isSticky",a)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const t=this.view.stickyPanel,e=this.editor.plugins.get("Dialog");e.on("show",()=>{const n=e.view;n.on("moveTo",(i,a)=>{if(!t.isSticky||n.wasMoved)return;const c=new se(t.contentPanelElement);a[1]<c.bottom+tu.defaultOffset&&(a[1]=c.bottom+tu.defaultOffset)},{priority:"high"})},{priority:"low"})}}var c0=p(7388),SB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Bt()(c0.A,SB),c0.A.locals;class IB extends sB{constructor(t,e,n={}){super(t),this.stickyPanel=new gB(t),this.toolbar=new Xg(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new cB(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class l0{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof t.crashNumberLimit=="number"?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof t.minimumNonErrorTimePeriod=="number"?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=e=>{const n="error"in e?e.error:e.reason;n instanceof Error&&this._handleError(n,e)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(n=>n!==e)}_fire(t,...e){const n=this._listeners[t]||[];for(const i of n)i.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&t.context!==void 0&&t.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function cf(o,t=new Set){const e=[o],n=new Set;let i=0;for(;e.length>i;){const a=e[i++];if(!n.has(a)&&MB(a)&&!t.has(a))if(n.add(a),Symbol.iterator in a)try{for(const c of a)e.push(c)}catch{}else for(const c in a)c!=="defaultValue"&&e.push(a[c])}return n}function MB(o){const t=Object.prototype.toString.call(o),e=typeof o;return!(e==="number"||e==="boolean"||e==="string"||e==="symbol"||e==="function"||t==="[object Date]"||t==="[object RegExp]"||t==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function d0(o,t,e=new Set){if(o===t&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=cf(o,e),a=cf(t,e);for(const c of i)if(a.has(c))return!0;return!1}var BB=Object.defineProperty,NB=Object.defineProperties,PB=Object.getOwnPropertyDescriptors,ru=Object.getOwnPropertySymbols,u0=Object.prototype.hasOwnProperty,h0=Object.prototype.propertyIsEnumerable,p0=(o,t,e)=>t in o?BB(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,lf=(o,t)=>{for(var e in t||(t={}))u0.call(t,e)&&p0(o,e,t[e]);if(ru)for(var e of ru(t))h0.call(t,e)&&p0(o,e,t[e]);return o};class g0 extends l0{constructor(t,e={}){super(e),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=nu(this._save.bind(this),typeof e.saveInterval=="number"?e.saveInterval:5e3),t&&(this._creator=(n,i)=>t.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{const t={},e=[],n=this._config.rootsAttributes||{},i={};for(const[u,g]of Object.entries(this._data.roots))g.isLoaded?(t[u]="",i[u]=n[u]||{}):e.push(u);const a=(c=lf({},this._config),d={extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:i,_watchdogInitialData:this._data},NB(c,PB(d)));var c,d;return delete a.initialData,a.extraPlugins.push(OB),this._initUsingData?this.create(t,a,a.context):ei(this._elementOrData)?this.create(this._elementOrData,a,a.context):this.create(this._editables,a,a.context)}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,n){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData=typeof t=="string"||Object.keys(t).length>0&&typeof Object.values(t)[0]=="string",this._config=this._cloneEditorConfiguration(e)||{},this._config.context=n,this._creator(t,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter(d=>d.isAttached()&&d.rootName!="$graveyard"),{plugins:n}=t,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),a=n.has("TrackChanges")&&n.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach(d=>{c.roots[d.rootName]={content:JSON.stringify(Array.from(d.getChildren())),attributes:JSON.stringify(Array.from(d.getAttributes())),isLoaded:d._isLoaded}});for(const d of t.model.markers)d._affectsData&&(c.markers[d.name]={rangeJSON:d.getRange().toJSON(),usingOperation:d._managedUsingOperations,affectsData:d._affectsData});return i&&(c.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),a&&(c.suggestions=JSON.stringify(a.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(e);n&&(t[e]=n)}return t}_isErrorComingFromThisItem(t){return d0(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return cc(t,(e,n)=>ei(e)||n==="context"?e:void 0)}}class OB{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},e=>{this._restoreCollaborationData(),this._restoreEditorData(e)}),this.editor.data.fire("ready")},{priority:999})}_createNode(t,e){if("name"in e){const n=t.createElement(e.name,e.attributes);if(e.children)for(const i of e.children)n._appendChild(this._createNode(t,i));return n}return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:a}])=>{const c=JSON.parse(i),d=JSON.parse(a),u=e.model.document.getRoot(n);for(const[g,f]of d)t.setAttribute(g,f,u);for(const g of c){const f=this._createNode(t,g);t.insert(f,u,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:a}=e.model,c=i,{rangeJSON:{start:d,end:u}}=c,g=((I,M)=>{var L={};for(var z in I)u0.call(I,z)&&M.indexOf(z)<0&&(L[z]=I[z]);if(I!=null&&ru)for(var z of ru(I))M.indexOf(z)<0&&h0.call(I,z)&&(L[z]=I[z]);return L})(c,["rangeJSON"]),f=a.getRoot(d.root),w=t.createPositionFromPath(f,d.path,d.stickiness),C=t.createPositionFromPath(f,u.path,u.stickiness),T=t.createRange(w,C);t.addMarker(n,lf({range:T},g))})}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),a=this.editor.plugins.get("CommentsRepository");a.hasCommentThread(n.threadId)&&a.getCommentThread(n.threadId).remove(),a.addCommentThread(lf({channelId:i},n))}),e.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const Ic=Symbol("MainQueueId");class LB{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const n=t===Ic;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Ic),this._queues.get(t)])).then(e),a=i.catch(()=>{});return this._queues.set(t,a),i.finally(()=>{this._activeActions--,this._queues.get(t)===a&&this._activeActions===0&&this._onEmptyCallbacks.forEach(c=>c())})}}function f0(o){return Array.isArray(o)?o:[o]}class su extends Wg(PM){constructor(t,e={}){if(!au(t)&&e.initialData!==void 0)throw new P("editor-create-initial-data",null);super(e),this.config.get("initialData")===void 0&&this.config.set("initialData",function(a){return au(a)?(c=a,c instanceof HTMLTextAreaElement?c.value:c.innerHTML):a;var c}(t)),au(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new IB(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new TB(this,i),function(a){if(!Go(a.updateSourceElement))throw new P("attachtoform-missing-elementapi-interface",a);const c=a.sourceElement;if(function(d){return!!d&&d.tagName.toLowerCase()==="textarea"}(c)&&c.form){let d;const u=c.form,g=()=>a.updateSourceElement();Go(u.submit)&&(d=u.submit,u.submit=()=>{g(),d.apply(u)}),u.addEventListener("submit",g),a.on("destroy",()=>{u.removeEventListener("submit",g),d&&(u.submit=d)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(au(t)?t:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function au(o){return ei(o)}su.Context=Ik,su.EditorWatchdog=g0,su.ContextWatchdog=class extends l0{constructor(o,t={}){super(t),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new LB,this._watchdogConfig=t,this._creator=e=>o.create(e),this._destructor=e=>e.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(Ic,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const t=f0(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(e.id))throw new Error(`Item with the given id is already added: '${e.id}'.`);if(e.type==="editor")return n=new g0(null,this._watchdogConfig),n.setCreator(e.creator),n._setExcludedProperties(this._contextProps),e.destructor&&n.setDestructor(e.destructor),this._watchdogs.set(e.id,n),n.on("error",(i,{error:a,causesRestart:c})=>{this._fire("itemError",{itemId:e.id,error:a}),c&&this._actionQueues.enqueue(e.id,()=>new Promise(d=>{const u=()=>{n.off("restart",u),this._fire("itemRestart",{itemId:e.id}),d()};n.on("restart",u)}))}),n.create(e.sourceElementOrData,e.config,this._context);throw new Error(`Not supported item type: '${e.type}'.`)})))}remove(o){const t=f0(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e,()=>{const n=this._getWatchdog(e);return this._watchdogs.delete(e),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Ic,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Ic,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=cf(this._context),Promise.all(Array.from(this._watchdogs.values()).map(t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(t=>t.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const t=this._watchdogs.get(o);if(!t)throw new Error(`Item with the given id was not registered: ${o}.`);return t}_isErrorComingFromThisItem(o){for(const t of this._watchdogs.values())if(t._isErrorComingFromThisItem(o))return!1;return d0(this._context,o.context)}};class Mc extends Bi{constructor(t){super(t),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const e=this.document;function n(i){return(a,c)=>{c.preventDefault();const d=c.dropRange?[c.dropRange]:null,u=new F(e,i);e.fire(u,{dataTransfer:c.dataTransfer,method:a.name,targetRanges:d,target:c.target,domEvent:c.domEvent}),u.stop.called&&c.stopPropagation()}}this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",i={dataTransfer:new gw(e,{cacheFiles:n})};t.type!="drop"&&t.type!="dragover"||(i.dropRange=function(a,c){const d=c.target.ownerDocument,u=c.clientX,g=c.clientY;let f;return d.caretRangeFromPoint&&d.caretRangeFromPoint(u,g)?f=d.caretRangeFromPoint(u,g):c.rangeParent&&(f=d.createRange(),f.setStart(c.rangeParent,c.rangeOffset),f.collapse(!0)),f?a.domConverter.domRangeToView(f):null}(this.view,t)),this.fire(t.type,t,i)}}const m0=["figcaption","li"],b0=["ol","ul"];function k0(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let t="",e=null;for(const n of o.getChildren())t+=RB(n,e)+k0(n),e=n;return t}function RB(o,t){return t?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||b0.includes(o.name)&&b0.includes(t.name)?`

`:o.is("containerElement")||t.is("containerElement")?m0.includes(o.name)||m0.includes(t.name)?`
`:`

 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(r,s){(function(l,h){r.exports=h(vV)})(self,l=>(()=>{var h={976:_=>{_.exports=l}},p={};function m(_){var b=p[_];if(b!==void 0)return b.exports;var D=p[_]={exports:{}};return h[_](D,D.exports,m),D.exports}m.d=(_,b)=>{for(var D in b)m.o(b,D)&&!m.o(_,D)&&Object.defineProperty(_,D,{enumerable:!0,get:b[D]})},m.o=(_,b)=>Object.prototype.hasOwnProperty.call(_,b);var k={};return(()=>{m.d(k,{default:()=>_e});var _=m(976);const b=function(At){var jt=typeof At;return At!=null&&(jt=="object"||jt=="function")},D=typeof Xi=="object"&&Xi&&Xi.Object===Object&&Xi;var x=typeof self=="object"&&self&&self.Object===Object&&self;const y=D||x||Function("return this")(),A=function(){return y.Date.now()};var S=/\s/;const N=function(At){for(var jt=At.length;jt--&&S.test(At.charAt(jt)););return jt};var O=/^\s+/;const j=function(At){return At&&At.slice(0,N(At)+1).replace(O,"")},G=y.Symbol;var W=Object.prototype,F=W.hasOwnProperty,H=W.toString,Q=G?G.toStringTag:void 0;const J=function(At){var jt=F.call(At,Q),te=At[Q];try{At[Q]=void 0;var re=!0}catch{}var it=H.call(At);return re&&(jt?At[Q]=te:delete At[Q]),it};var et=Object.prototype.toString;const nt=function(At){return et.call(At)};var P=G?G.toStringTag:void 0;const tt=function(At){return At==null?At===void 0?"[object Undefined]":"[object Null]":P&&P in Object(At)?J(At):nt(At)},ft=function(At){return At!=null&&typeof At=="object"},U=function(At){return typeof At=="symbol"||ft(At)&&tt(At)=="[object Symbol]"};var _t=/^[-+]0x[0-9a-f]+$/i,Ot=/^0b[01]+$/i,Ut=/^0o[0-7]+$/i,mt=parseInt;const yt=function(At){if(typeof At=="number")return At;if(U(At))return NaN;if(b(At)){var jt=typeof At.valueOf=="function"?At.valueOf():At;At=b(jt)?jt+"":jt}if(typeof At!="string")return At===0?At:+At;At=j(At);var te=Ot.test(At);return te||Ut.test(At)?mt(At.slice(2),te?2:8):_t.test(At)?NaN:+At};var Mt=Math.max,Ee=Math.min;const qt=function(At,jt,te){var re,it,ct,Et,It,Wt,ee=0,V=!1,K=!1,Z=!0;if(typeof At!="function")throw new TypeError("Expected a function");function at(rt){var wt=re,Nt=it;return re=it=void 0,ee=rt,Et=At.apply(Nt,wt)}function st(rt){return ee=rt,It=setTimeout(kt,jt),V?at(rt):Et}function Ct(rt){var wt=rt-Wt;return Wt===void 0||wt>=jt||wt<0||K&&rt-ee>=ct}function kt(){var rt=A();if(Ct(rt))return ht(rt);It=setTimeout(kt,function(wt){var Nt=jt-(wt-Wt);return K?Ee(Nt,ct-(wt-ee)):Nt}(rt))}function ht(rt){return It=void 0,Z&&re?at(rt):(re=it=void 0,Et)}function xt(){var rt=A(),wt=Ct(rt);if(re=arguments,it=this,Wt=rt,wt){if(It===void 0)return st(Wt);if(K)return clearTimeout(It),It=setTimeout(kt,jt),at(Wt)}return It===void 0&&(It=setTimeout(kt,jt)),Et}return jt=yt(jt)||0,b(te)&&(V=!!te.leading,ct=(K="maxWait"in te)?Mt(yt(te.maxWait)||0,jt):ct,Z="trailing"in te?!!te.trailing:Z),xt.cancel=function(){It!==void 0&&clearTimeout(It),ee=0,re=Wt=it=It=void 0},xt.flush=function(){return It===void 0?Et:ht(A())},xt},Re=(0,_.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(At){this.instance&&At!==this.lastEditorData&&this.instance.data.set(At)},disabled(At){At?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:At}=window;if(At){const[jt]=At.split(".").map(Number);jt<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const At=Object.assign({},this.config);this.modelValue&&(At.initialData=this.modelValue),this.editor.create(this.$el,At).then(jt=>{this.instance=(0,_.markRaw)(jt),this.setUpEditorEvents(),this.modelValue!==At.initialData&&jt.data.set(this.modelValue),this.disabled&&jt.enableReadOnlyMode("Integration Sample"),this.$emit("ready",jt)}).catch(jt=>{console.error(jt)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const At=this.instance,jt=qt(te=>{if(this.disableTwoWayDataBinding)return;const re=this.lastEditorData=At.data.get();this.$emit("update:modelValue",re,te,At),this.$emit("input",re,te,At)},300,{leading:!0});At.model.document.on("change:data",jt),At.editing.view.document.on("focus",te=>{this.$emit("focus",te,At)}),At.editing.view.document.on("blur",te=>{this.$emit("blur",te,At)})}},render(){return(0,_.h)(this.tagName)}});if(!_.version||!_.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const _e={install(At){At.component("Ckeditor",Re)},component:Re}})(),k=k.default})())})(nT);var yV=nT.exports;const oT=eT(yV),EV={components:{ckeditor:oT.component},data(){return{questions:[],quiz:[],csrfToken:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),formQuestion:{file:"",question:"",typeAnswer:"single",answer:[],hint:""},editor:CV,editorData:"",editorConfig:{ckfinder:{headers:{"X-CSRF-TOKEN":this.csrfToken},uploadUrl:"/api/image/upload",onUploadDone:function(r){if(console.log(r),r&&r.success){const s=r.url;return this.editor.model.change(l=>{const h=l.createElement("image",{src:s});this.editor.model.insertContent(h)}),alert(r.message)}else alert("Failed to upload image.")}}}}},methods:{changeToAbjad(r){return String.fromCharCode(96+parseInt(r))},pushAnswer(){for(let r=0;r<4;r++)this.formQuestion.answer.push({answer:"",isCorrect:!1})},async getQuestions(){try{const r=this.$route.params.id,{question:s}=await $e.get(`/api/quiz/${r}`).then(h=>h.data),{quiz:l}=await $e.get(`/api/quiz/${r}`).then(h=>h.data);this.questions=s,this.quiz=l,this.$refs.file.value=""}catch(r){console.log(r)}},async simpanQuestions(){const{question:r,typeAnswer:s,answer:l}=this.formQuestion,h=l.filter(_=>_.answer!="");if(r==""||s==""||h.length<2){this.$swal("Error","Harap isi semua field","error");return}if(l.filter(_=>_.answer=="").length>0){this.$swal("Error","Harap isi semua jawaban","error");return}if(l.filter(_=>_.isCorrect==!0).length==0){this.$swal("Error","Harap pilih jawaban yang benar","error");return}const m=this.$route.params.id,k=new FormData;k.append("file",this.formQuestion.file),k.append("question",this.formQuestion.question),k.append("typeAnswer",this.formQuestion.typeAnswer),k.append("answer",JSON.stringify(this.formQuestion.answer)),k.append("hint",this.editorData);try{await $e.post(`/api/quiz/${m}`,k),this.$swal("Berhasil","Data berhasil disimpan","success"),this.formQuestion={file:"",question:"",typeAnswer:"single",answer:[],hint:""},this.editorData="",this.pushAnswer(),this.getQuestions()}catch(_){console.log(_),this.$swal("Gagal","Data gagal disimpan","error")}},uploadGambar(r){["image/jpeg","image/jpg","image/png"].includes(r.type)?this.formQuestion.file=r:(this.$swal("Error","File harus berupa gambar","error"),this.formQuestion.file="",this.$refs.file.value="")},hapusJawaban(r){this.$swal({title:"Apakah anda yakin?",text:"Data yang dihapus tidak dapat dikembalikan!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33"}).then(async s=>{if(s.isConfirmed)try{await $e.delete(`/api/quiz/${r}`),this.getQuestions(),this.$swal("Deleted!","Your file has been deleted.","success")}catch(l){console.log(l)}})},publishChallenge(){const r=this.$route.params.id;this.$swal({title:"Apakah anda yakin?",text:"Data yang disimpan tidak dapat diubah!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2F70AF",cancelButtonColor:"#d33",confirmButtonText:"Ya, simpan!",cancelButtonText:"Batal"}).then(s=>{if(s.isConfirmed)try{const l={status:"save"};$e.put(`/api/quiz/${r}/changeStatus`,l),this.$swal("Data berhasil disimpan","","success"),window.location.href="/admin/add-quiz"}catch(l){console.log(l),this.$swal("Gagal menyimpan data","","error")}})},unpublishChallenge(){const r=this.$route.params.id;this.$swal({title:"Apakah anda yakin?",text:"Data yang disimpan tidak dapat diubah!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2F70AF",cancelButtonColor:"#d33",confirmButtonText:"Ya, simpan!",cancelButtonText:"Batal"}).then(s=>{if(s.isConfirmed)try{$e.put(`/api/quiz/${r}/changeStatus`,{status:"draft"}),this.$swal("Data berhasil disimpan","","success"),window.location.href="/admin/add-quiz"}catch(l){console.log(l),this.$swal("Gagal menyimpan data","","error")}})}},created(){this.getQuestions()},mounted(){this.pushAnswer()},watch:{"formQuestion.typeAnswer":function(r){this.formQuestion.answer=[],this.pushAnswer()}},computed:{getLastQuestion(){return this.questions.length+1}}},xV={class:"content p-5"},DV={class:"box-recommend p-4 mb-5"},TV={class:"d-flex"},SV=R("div",{class:"p-2 flex-grow-1"},[R("h3",{style:{"margin-bottom":"0"}},"Add Question")],-1),IV={class:"p-2"},MV={class:"row"},BV={class:"col-7"},NV={class:"box-recommend mt-2 p-4"},PV={class:"form-group mb-2"},OV=R("label",{for:"",class:"form-label"},"File (Optional)",-1),LV=R("label",{for:"",class:"form-label"},"Question",-1),RV={class:"form-group mb-2"},zV={class:"form-group mb-2 row"},jV=R("div",{class:"col-auto"},[R("label",{for:"",class:"form-label"},"Type")],-1),FV={class:"col-auto"},VV={class:"form-check form-check-inline"},HV=R("label",{class:"form-check-label",for:"inlineRadio1"},"Multiple Choice",-1),$V={class:"form-check form-check-inline"},UV=R("label",{class:"form-check-label",for:"inlineRadio2"},"Multiple Answer",-1),qV={class:"d-flex row"},WV={class:"col-1 d-flex align-items-center justify-content-center",style:{position:"relative"}},GV={class:"col-10 d-flex align-items-center justify-content-start",style:{right:"10px",position:"relative"}},KV=["onUpdate:modelValue"],YV={class:"col-1 d-flex align-items-center justify-content-end"},QV=["value","checked","onClick"],ZV=["value","checked","onClick"],JV={key:0},XV=R("label",{for:"",class:"form-label"},"Hint",-1),tH={class:"col-5"},eH={class:"box-recommend mt-2 p-4 min-height-recommend"},nH=R("h3",{style:{"margin-bottom":"0"}},"Question List",-1),oH=R("hr",{class:"mb-3",style:{opacity:"1",border:"2px solid white",margin:"0"}},null,-1),iH={class:"row d-flex justify-content-start"},rH={class:"col-1 d-flex justify-content-start align-items-center"},sH={style:{"margin-bottom":"0"}},aH={class:"col-9 d-flex justify-content-start align-items-center"},cH={class:"overflow-ecilips",style:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},lH={style:{"font-weight":"500","margin-bottom":"0"}},dH={class:"col-2 d-flex justify-content-end align-items-center"},uH={class:"col d-flex justify-content-end align-items-center"},hH=["onClick"],pH=R("span",{class:"iconify ms-2","data-icon":"ph:x-bold",style:{color:"red"},"data-width":"25"},null,-1),gH=[pH],fH=R("hr",{class:"mb-3",style:{opacity:"1",border:"2px solid white",margin:"0"}},null,-1),mH={class:"d-flex justify-content-center"};function bH(r,s,l,h,p,m){const k=_n("ckeditor");return vt(),Dt("div",xV,[R("div",DV,[R("div",TV,[SV,R("div",IV,[R("button",{class:"btn btn-secondary btn-lg btn-shadow px-4 me-2",onClick:s[0]||(s[0]=(..._)=>m.unpublishChallenge&&m.unpublishChallenge(..._))},"Draft"),R("button",{class:"btn btn-button btn-shadow px-4",onClick:s[1]||(s[1]=(..._)=>m.publishChallenge&&m.publishChallenge(..._))},"Save")])])]),R("div",MV,[R("div",BV,[R("div",NV,[R("p",null,[xn("Question No. "),R("b",null,Yt(m.getLastQuestion),1)]),R("div",PV,[OV,R("input",{type:"file",class:"form-control p-2",ref:"file",id:"quizTitle",onChange:s[2]||(s[2]=_=>m.uploadGambar(_.target.files[0])),accept:"image/*"},null,544)]),LV,R("div",RV,[so(R("textarea",{class:"form-control text-black",cols:"10",rows:"5","onUpdate:modelValue":s[3]||(s[3]=_=>p.formQuestion.question=_)},null,512),[[Ho,p.formQuestion.question]])]),R("div",zV,[jV,R("div",FV,[R("div",VV,[so(R("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"single","onUpdate:modelValue":s[4]||(s[4]=_=>p.formQuestion.typeAnswer=_)},null,512),[[ls,p.formQuestion.typeAnswer]]),HV]),R("div",$V,[so(R("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"multiple","onUpdate:modelValue":s[5]||(s[5]=_=>p.formQuestion.typeAnswer=_)},null,512),[[ls,p.formQuestion.typeAnswer]]),UV])])]),(vt(!0),Dt(be,null,pn(p.formQuestion.answer,(_,b)=>(vt(),Dt("div",{class:"form-control mb-2",style:{padding:"0px"},key:b},[R("div",qV,[R("div",WV,Yt(m.changeToAbjad(b+1))+". ",1),R("div",GV,[so(R("input",{type:"text",name:"option_a",id:"option_a",class:"form-control p-2",style:{border:"0px"},"onUpdate:modelValue":D=>_.answer=D},null,8,KV),[[Ho,_.answer]])]),R("div",YV,[p.formQuestion.typeAnswer=="single"?(vt(),Dt("input",{key:0,class:"me-2 radio-answer",type:"radio",style:{"font-size":"20px"},name:"answer_multiple_choice",value:m.changeToAbjad(b+1),checked:_.isCorrect,onClick:D=>{p.formQuestion.answer.forEach((x,y)=>{x.isCorrect=!1}),_.isCorrect=!0}},null,8,QV)):Ne("",!0),p.formQuestion.typeAnswer=="multiple"?(vt(),Dt("input",{key:1,class:"me-2 checkbox-answer",type:"checkbox",style:{"font-size":"20px"},name:"answer_multiple_choice",value:m.changeToAbjad(b+1),checked:_.isCorrect,onClick:D=>_.isCorrect=!_.isCorrect},null,8,ZV)):Ne("",!0)])])]))),128)),p.quiz.help_mode==="yes"?(vt(),Dt("div",JV,[XV,he(k,{editor:p.editor,modelValue:p.editorData,"onUpdate:modelValue":s[6]||(s[6]=_=>p.editorData=_),config:p.editorConfig,name:"hint"},null,8,["editor","modelValue","config"])])):Ne("",!0)])]),R("div",tH,[R("div",eH,[nH,oH,(vt(!0),Dt(be,null,pn(p.questions,(_,b)=>(vt(),Dt("div",{class:"box-list-admin mb-2",key:b},[R("div",iH,[R("div",rH,[R("h4",sH,Yt(b+1)+".",1)]),R("div",aH,[R("div",cH,[R("h5",lH,Yt(_==null?void 0:_.question),1)])]),R("div",dH,[R("div",uH,[R("a",{href:"#",onClick:D=>m.hapusJawaban(_==null?void 0:_.id),style:{border:"none"}},gH,8,hH)])])])]))),128)),fH,R("div",mH,[R("button",{class:"btn btn-button btn-shadow",onClick:s[7]||(s[7]=(..._)=>m.simpanQuestions&&m.simpanQuestions(..._))},"Add New")])])])])])}const kH=fn(EV,[["render",bH]]);const wH={props:{progressEndValue:{type:Number,default:100}},data(){return{progressValue:0,speed:50}},mounted(){this.progress()},methods:{progress(){this.progressEndValue>0&&(this.progressInterval=setInterval(()=>{if(this.progressValue++,this.progressValue<this.progressEndValue){let r=document.querySelector(".circular-progress"),s=document.querySelector(".value-container");s.innerHTML=`${this.progressValue}%`,r.style.background=`conic-gradient(
                        #4d5bf9 ${this.progressValue*3.6}deg,
                        #cadcff ${this.progressValue*3.6}deg
                    )`}else clearInterval(this.progressInterval)},this.speed))}},beforeDestroy(){clearInterval(this.progressInterval)},watch:{progressEndValue(){this.progress()}}},_H={class:"circular-progress"},AH={class:"value-container"};function CH(r,s,l,h,p,m){return vt(),Dt("div",_H,[R("div",AH,Yt(p.progressValue)+"%",1)])}const vH=fn(wH,[["render",CH]]);const yH={props:["progress","cekAllCourse","isDisableNext"],components:{CircularProgress:vH},methods:{back(){window.location.href="/student"},next(){this.$emit("next")},previous(){this.$emit("previous")}}},EH={class:"nav-course"},xH={class:"row d-flex justify-content-between px-3 py-2"},DH=Rh('<div class="col-4 d-flex align-items-center"><div class="row d-flex align-items-center"><div class="col-1 mx-3"><span class="iconify" data-icon="icon-park-solid:back" data-width="40"></span></div><div class="col d-flex align-items-center ms-3"><h4 style="margin-bottom:0;">Figma Tutorial</h4></div></div></div>',1),TH={class:"col-4"},SH={class:"row d-flex justify-content-end"},IH={key:0,class:"col-2 me-5",id:"endCourse"},MH=R("a",{class:"btn btn-button",style:{"min-width":"130px"},href:"/student"},"End Course",-1),BH=[MH],NH={class:"col-2 me-3"},PH={key:1,class:"col-2"},OH={class:"col-3 d-flex justify-content-center align-items-center"};function LH(r,s,l,h,p,m){const k=_n("circular-progress");return vt(),Dt("div",EH,[R("div",xH,[DH,R("div",TH,[R("div",SH,[l.cekAllCourse?(vt(),Dt("div",IH,BH)):Ne("",!0),R("div",NH,[R("a",{onClick:s[0]||(s[0]=(..._)=>m.previous&&m.previous(..._)),class:"btn btn-button",style:{"min-width":"100px"},id:"previousCourseButton"},"Previous")]),l.cekAllCourse?Ne("",!0):(vt(),Dt("div",PH,[R("a",{onClick:s[1]||(s[1]=(..._)=>m.next&&m.next(..._)),class:"btn btn-button",style:{"min-width":"100px"},id:"nextCourseButton"}," Next ")])),R("div",OH,[he(k,{"progress-end-value":l.progress},null,8,["progress-end-value"])])])])])])}const RH=fn(yH,[["render",LH]]);const zH={props:["courses","isDisableNext","curriculumActive"],methods:{checkCourse(r){return r.curriculum.every(s=>s.isVisited)},selectCurriculum(r,s,l){s>1?this.courses[s-1].curriculum.every(p=>p.category!=="challenge"?p.next:!0)&&this.$emit("openCurriculum",r):(l!=0&&this.courses[s].curriculum[l-1].next&&this.$emit("openCurriculum",r),r.category=="challenge"&&this.$emit("openCurriculum",r)),r.next==!0&&this.$emit("openCurriculum",r)},isActive(r){if(r.id==this.curriculumActive.id)return"is-active"},cekResult(r){var l,h;switch(r.category){case"quiz":return r!=null&&r.result?(l=r==null?void 0:r.result)!=null&&l.isPassed?'<span class="text-success">Passed</span>':'<span class="text-danger">Failed</span>':"";case"challenge":return r!=null&&r.result?(h=r==null?void 0:r.result)!=null&&h.isPassed?'<span class="text-success">Passed</span>':'<span class="text-danger">Failed</span>':"";default:return""}}}},jH={class:"sidenav"},FH={class:"content"},VH={class:"row p-4"},HH={class:"section-curriculum sections"},$H=["onClick"],UH={class:"mains"},qH=["checked"],WH=R("span",{class:"geekmark"},null,-1),GH={key:0,class:"content-collapse"},KH={class:"list-lesson"},YH=["onClick"],QH={class:"mains"},ZH=["checked"],JH=R("span",{class:"geekmark"},null,-1),XH={class:"text-right"},t$=["innerHTML"];function e$(r,s,l,h,p,m){return vt(),Dt("div",jH,[R("div",FH,[R("div",VH,[R("section",HH,[R("article",null,[(vt(!0),Dt(be,null,pn(l.courses,(k,_)=>(vt(),Dt("div",{key:_,class:"mb-2"},[R("button",{type:"button",class:"collapsible",onClick:b=>k.collapsed=!k.collapsed},[R("label",UH,[R("input",{type:"checkbox",disabled:"disabled",checked:m.checkCourse(k)},null,8,qH),WH]),xn(" "+Yt(k.name),1)],8,$H),k.collapsed?(vt(),Dt("div",GH,[R("ul",KH,[(vt(!0),Dt(be,null,pn(k.curriculum,(b,D)=>(vt(),Dt("li",{class:vn(["detail-chapter mb-2",m.isActive(b)]),key:D},[R("div",{class:"d-flex align-items-center chapter-info",onClick:x=>m.selectCurriculum(b,_,D)},[R("label",QH,[R("input",{type:"checkbox",checked:b.isVisited,disabled:"disabled"},null,8,ZH),JH]),xn(Yt(b.name)+" ",1),R("span",XH,[R("div",{innerHTML:m.cekResult(b)},null,8,t$)])],8,YH)],2))),128))])])):Ne("",!0)]))),128))])])])])])}const n$=fn(zH,[["render",e$]]),o$={props:["lesson"],methods:{thisUrlPDF(r){return window.location.origin+"/"+r}}},i$={class:"bg-white",style:{"padding-bottom":"9rem","padding-left":"20rem"}},r$={class:"content p-5"},s$={class:"box-recommend min-height-recommend p-2",style:{"margin-top":"3rem"}},a$={key:0,class:"container p-5 d-flex justify-content-center align-items-center"},c$=["src"],l$={key:1,class:"container p-5 d-flex justify-content-center align-items-center"},d$=["data"],u$=["href"];function h$(r,s,l,h,p,m){var k,_;return vt(),Dt("div",i$,[R("div",r$,[R("div",s$,[(k=l.lesson)!=null&&k.soal.source?(vt(),Dt("div",a$,[R("iframe",{width:"1300px",height:"600px",src:(_=l.lesson)==null?void 0:_.soal.source,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,c$)])):(vt(),Dt("div",l$,[R("div",null,[R("object",{data:m.thisUrlPDF(l.lesson.soal.file),type:"application/pdf",width:"1080",height:"678"},[R("p",null,[xn(" Your browser does not support PDFs. "),R("a",{href:m.thisUrlPDF(l.lesson.soal.file)},"Download the PDF",8,u$),xn(" . ")])],8,d$)])]))])])])}const p$=fn(o$,[["render",h$]]),g$={props:["quiz","endCourse"],methods:{next(){this.$emit("next")},tryagain(){this.$emit("tryagain")}}},f$={class:"bg-white",style:{"padding-bottom":"9rem","padding-left":"20rem"}},m$={class:"content p-5"},b$=R("div",{class:"card card-quiz text-left",style:{"margin-top":"3rem"}},[R("div",{class:"row"},[R("div",{class:"col-4 d-flex align-items-center"},[R("div",{class:"row p-5"},[R("h3",null,"Your Exam Score")])])])],-1),k$={class:"box-quiz min-height-quiz"},w$={class:"row"},_$={class:"col p-5"},A$={class:"mb-4"},C$=Rh('<div class="row d-flex justify-content-start mb-2"><div class="col-3"><h5>Exam Score</h5></div><div class="col-3"><h5>Duration (minute)</h5></div><div class="col-3"><h5>Percentage</h5></div><div class="col-3"><h5>Rating</h5></div></div>',1),v$={class:"row d-flex justify-content-start mb-3"},y$={class:"col-3"},E$=R("br",null,null,-1),x$={class:"col-3"},D$={class:"col-3"},T$={class:"col-3"},S$={class:"col-9"},I$={class:"row"},M$={key:0,class:"col-2"},B$={key:1,class:"col-2 me-5",id:"endCourse"},N$=R("a",{class:"btn btn-button",style:{"min-width":"130px"},href:"/student"},"End Course",-1),P$=[N$],O$={key:2,class:"col-2"};function L$(r,s,l,h,p,m){return vt(),Dt("div",f$,[R("div",m$,[b$,R("div",k$,[R("div",w$,[R("div",_$,[R("h3",A$,Yt(l.quiz.isPassed?"Congratulations! You Have Completed This Quiz":"Failed! Please Read The Lesson Again"),1),C$,R("div",v$,[R("div",y$,[R("h5",null,[xn(Yt(l.quiz.correct_answer)+" Correct Answer ",1),E$,xn(Yt(l.quiz.wrong_answer)+" Wrong Answer ",1)])]),R("div",x$,[R("h5",null,Yt(l.quiz.duration),1)]),R("div",D$,[R("h5",null,Yt(l.quiz.percentageStudent)+"% ",1)]),R("div",T$,[R("h5",{style:{"font-weight":"900"},class:vn(l.quiz.isPassed?"text-success":"text-danger")},Yt(l.quiz.isPassed?"Success":"Failed"),3)])]),R("div",S$,[R("div",I$,[l.quiz.isPassed?l.endCourse?(vt(),Dt("div",B$,P$)):Ne("",!0):(vt(),Dt("div",M$,[R("a",{onClick:s[0]||(s[0]=(...k)=>m.tryagain&&m.tryagain(...k)),class:"btn btn-button"},"Try Again")])),l.quiz.isPassed?(vt(),Dt("div",O$,[R("a",{onClick:s[1]||(s[1]=(...k)=>m.next&&m.next(...k)),id:"nextCourse",class:"btn btn-button"},"Next Lesson ")])):Ne("",!0)])])])])])])])}const R$=fn(g$,[["render",L$]]);var yn="top",Yn="bottom",Qn="right",En="left",Gh="auto",Sa=[yn,Yn,Qn,En],ds="start",Aa="end",iT="clippingParents",Gb="viewport",ta="popper",rT="reference",nb=Sa.reduce(function(r,s){return r.concat([s+"-"+ds,s+"-"+Aa])},[]),Kb=[].concat(Sa,[Gh]).reduce(function(r,s){return r.concat([s,s+"-"+ds,s+"-"+Aa])},[]),sT="beforeRead",aT="read",cT="afterRead",lT="beforeMain",dT="main",uT="afterMain",hT="beforeWrite",pT="write",gT="afterWrite",fT=[sT,aT,cT,lT,dT,uT,hT,pT,gT];function $o(r){return r?(r.nodeName||"").toLowerCase():null}function Zn(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var s=r.ownerDocument;return s&&s.defaultView||window}return r}function us(r){var s=Zn(r).Element;return r instanceof s||r instanceof Element}function lo(r){var s=Zn(r).HTMLElement;return r instanceof s||r instanceof HTMLElement}function Yb(r){if(typeof ShadowRoot>"u")return!1;var s=Zn(r).ShadowRoot;return r instanceof s||r instanceof ShadowRoot}function z$(r){var s=r.state;Object.keys(s.elements).forEach(function(l){var h=s.styles[l]||{},p=s.attributes[l]||{},m=s.elements[l];!lo(m)||!$o(m)||(Object.assign(m.style,h),Object.keys(p).forEach(function(k){var _=p[k];_===!1?m.removeAttribute(k):m.setAttribute(k,_===!0?"":_)}))})}function j$(r){var s=r.state,l={popper:{position:s.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(s.elements.popper.style,l.popper),s.styles=l,s.elements.arrow&&Object.assign(s.elements.arrow.style,l.arrow),function(){Object.keys(s.elements).forEach(function(h){var p=s.elements[h],m=s.attributes[h]||{},k=Object.keys(s.styles.hasOwnProperty(h)?s.styles[h]:l[h]),_=k.reduce(function(b,D){return b[D]="",b},{});!lo(p)||!$o(p)||(Object.assign(p.style,_),Object.keys(m).forEach(function(b){p.removeAttribute(b)}))})}}const Qb={name:"applyStyles",enabled:!0,phase:"write",fn:z$,effect:j$,requires:["computeStyles"]};function jo(r){return r.split("-")[0]}var os=Math.max,kh=Math.min,Ca=Math.round;function ob(){var r=navigator.userAgentData;return r!=null&&r.brands&&Array.isArray(r.brands)?r.brands.map(function(s){return s.brand+"/"+s.version}).join(" "):navigator.userAgent}function mT(){return!/^((?!chrome|android).)*safari/i.test(ob())}function va(r,s,l){s===void 0&&(s=!1),l===void 0&&(l=!1);var h=r.getBoundingClientRect(),p=1,m=1;s&&lo(r)&&(p=r.offsetWidth>0&&Ca(h.width)/r.offsetWidth||1,m=r.offsetHeight>0&&Ca(h.height)/r.offsetHeight||1);var k=us(r)?Zn(r):window,_=k.visualViewport,b=!mT()&&l,D=(h.left+(b&&_?_.offsetLeft:0))/p,x=(h.top+(b&&_?_.offsetTop:0))/m,y=h.width/p,A=h.height/m;return{width:y,height:A,top:x,right:D+y,bottom:x+A,left:D,x:D,y:x}}function Zb(r){var s=va(r),l=r.offsetWidth,h=r.offsetHeight;return Math.abs(s.width-l)<=1&&(l=s.width),Math.abs(s.height-h)<=1&&(h=s.height),{x:r.offsetLeft,y:r.offsetTop,width:l,height:h}}function bT(r,s){var l=s.getRootNode&&s.getRootNode();if(r.contains(s))return!0;if(l&&Yb(l)){var h=s;do{if(h&&r.isSameNode(h))return!0;h=h.parentNode||h.host}while(h)}return!1}function ki(r){return Zn(r).getComputedStyle(r)}function F$(r){return["table","td","th"].indexOf($o(r))>=0}function hr(r){return((us(r)?r.ownerDocument:r.document)||window.document).documentElement}function Kh(r){return $o(r)==="html"?r:r.assignedSlot||r.parentNode||(Yb(r)?r.host:null)||hr(r)}function QE(r){return!lo(r)||ki(r).position==="fixed"?null:r.offsetParent}function V$(r){var s=/firefox/i.test(ob()),l=/Trident/i.test(ob());if(l&&lo(r)){var h=ki(r);if(h.position==="fixed")return null}var p=Kh(r);for(Yb(p)&&(p=p.host);lo(p)&&["html","body"].indexOf($o(p))<0;){var m=ki(p);if(m.transform!=="none"||m.perspective!=="none"||m.contain==="paint"||["transform","perspective"].indexOf(m.willChange)!==-1||s&&m.willChange==="filter"||s&&m.filter&&m.filter!=="none")return p;p=p.parentNode}return null}function Nl(r){for(var s=Zn(r),l=QE(r);l&&F$(l)&&ki(l).position==="static";)l=QE(l);return l&&($o(l)==="html"||$o(l)==="body"&&ki(l).position==="static")?s:l||V$(r)||s}function Jb(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function cl(r,s,l){return os(r,kh(s,l))}function H$(r,s,l){var h=cl(r,s,l);return h>l?l:h}function kT(){return{top:0,right:0,bottom:0,left:0}}function wT(r){return Object.assign({},kT(),r)}function _T(r,s){return s.reduce(function(l,h){return l[h]=r,l},{})}var $$=function(s,l){return s=typeof s=="function"?s(Object.assign({},l.rects,{placement:l.placement})):s,wT(typeof s!="number"?s:_T(s,Sa))};function U$(r){var s,l=r.state,h=r.name,p=r.options,m=l.elements.arrow,k=l.modifiersData.popperOffsets,_=jo(l.placement),b=Jb(_),D=[En,Qn].indexOf(_)>=0,x=D?"height":"width";if(!(!m||!k)){var y=$$(p.padding,l),A=Zb(m),S=b==="y"?yn:En,N=b==="y"?Yn:Qn,O=l.rects.reference[x]+l.rects.reference[b]-k[b]-l.rects.popper[x],j=k[b]-l.rects.reference[b],G=Nl(m),W=G?b==="y"?G.clientHeight||0:G.clientWidth||0:0,F=O/2-j/2,H=y[S],Q=W-A[x]-y[N],J=W/2-A[x]/2+F,et=cl(H,J,Q),nt=b;l.modifiersData[h]=(s={},s[nt]=et,s.centerOffset=et-J,s)}}function q$(r){var s=r.state,l=r.options,h=l.element,p=h===void 0?"[data-popper-arrow]":h;p!=null&&(typeof p=="string"&&(p=s.elements.popper.querySelector(p),!p)||bT(s.elements.popper,p)&&(s.elements.arrow=p))}const AT={name:"arrow",enabled:!0,phase:"main",fn:U$,effect:q$,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ya(r){return r.split("-")[1]}var W$={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G$(r,s){var l=r.x,h=r.y,p=s.devicePixelRatio||1;return{x:Ca(l*p)/p||0,y:Ca(h*p)/p||0}}function ZE(r){var s,l=r.popper,h=r.popperRect,p=r.placement,m=r.variation,k=r.offsets,_=r.position,b=r.gpuAcceleration,D=r.adaptive,x=r.roundOffsets,y=r.isFixed,A=k.x,S=A===void 0?0:A,N=k.y,O=N===void 0?0:N,j=typeof x=="function"?x({x:S,y:O}):{x:S,y:O};S=j.x,O=j.y;var G=k.hasOwnProperty("x"),W=k.hasOwnProperty("y"),F=En,H=yn,Q=window;if(D){var J=Nl(l),et="clientHeight",nt="clientWidth";if(J===Zn(l)&&(J=hr(l),ki(J).position!=="static"&&_==="absolute"&&(et="scrollHeight",nt="scrollWidth")),J=J,p===yn||(p===En||p===Qn)&&m===Aa){H=Yn;var P=y&&J===Q&&Q.visualViewport?Q.visualViewport.height:J[et];O-=P-h.height,O*=b?1:-1}if(p===En||(p===yn||p===Yn)&&m===Aa){F=Qn;var tt=y&&J===Q&&Q.visualViewport?Q.visualViewport.width:J[nt];S-=tt-h.width,S*=b?1:-1}}var ft=Object.assign({position:_},D&&W$),U=x===!0?G$({x:S,y:O},Zn(l)):{x:S,y:O};if(S=U.x,O=U.y,b){var _t;return Object.assign({},ft,(_t={},_t[H]=W?"0":"",_t[F]=G?"0":"",_t.transform=(Q.devicePixelRatio||1)<=1?"translate("+S+"px, "+O+"px)":"translate3d("+S+"px, "+O+"px, 0)",_t))}return Object.assign({},ft,(s={},s[H]=W?O+"px":"",s[F]=G?S+"px":"",s.transform="",s))}function K$(r){var s=r.state,l=r.options,h=l.gpuAcceleration,p=h===void 0?!0:h,m=l.adaptive,k=m===void 0?!0:m,_=l.roundOffsets,b=_===void 0?!0:_,D={placement:jo(s.placement),variation:ya(s.placement),popper:s.elements.popper,popperRect:s.rects.popper,gpuAcceleration:p,isFixed:s.options.strategy==="fixed"};s.modifiersData.popperOffsets!=null&&(s.styles.popper=Object.assign({},s.styles.popper,ZE(Object.assign({},D,{offsets:s.modifiersData.popperOffsets,position:s.options.strategy,adaptive:k,roundOffsets:b})))),s.modifiersData.arrow!=null&&(s.styles.arrow=Object.assign({},s.styles.arrow,ZE(Object.assign({},D,{offsets:s.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:b})))),s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-placement":s.placement})}const Xb={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:K$,data:{}};var Fu={passive:!0};function Y$(r){var s=r.state,l=r.instance,h=r.options,p=h.scroll,m=p===void 0?!0:p,k=h.resize,_=k===void 0?!0:k,b=Zn(s.elements.popper),D=[].concat(s.scrollParents.reference,s.scrollParents.popper);return m&&D.forEach(function(x){x.addEventListener("scroll",l.update,Fu)}),_&&b.addEventListener("resize",l.update,Fu),function(){m&&D.forEach(function(x){x.removeEventListener("scroll",l.update,Fu)}),_&&b.removeEventListener("resize",l.update,Fu)}}const tk={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Y$,data:{}};var Q$={left:"right",right:"left",bottom:"top",top:"bottom"};function th(r){return r.replace(/left|right|bottom|top/g,function(s){return Q$[s]})}var Z$={start:"end",end:"start"};function JE(r){return r.replace(/start|end/g,function(s){return Z$[s]})}function ek(r){var s=Zn(r),l=s.pageXOffset,h=s.pageYOffset;return{scrollLeft:l,scrollTop:h}}function nk(r){return va(hr(r)).left+ek(r).scrollLeft}function J$(r,s){var l=Zn(r),h=hr(r),p=l.visualViewport,m=h.clientWidth,k=h.clientHeight,_=0,b=0;if(p){m=p.width,k=p.height;var D=mT();(D||!D&&s==="fixed")&&(_=p.offsetLeft,b=p.offsetTop)}return{width:m,height:k,x:_+nk(r),y:b}}function X$(r){var s,l=hr(r),h=ek(r),p=(s=r.ownerDocument)==null?void 0:s.body,m=os(l.scrollWidth,l.clientWidth,p?p.scrollWidth:0,p?p.clientWidth:0),k=os(l.scrollHeight,l.clientHeight,p?p.scrollHeight:0,p?p.clientHeight:0),_=-h.scrollLeft+nk(r),b=-h.scrollTop;return ki(p||l).direction==="rtl"&&(_+=os(l.clientWidth,p?p.clientWidth:0)-m),{width:m,height:k,x:_,y:b}}function ok(r){var s=ki(r),l=s.overflow,h=s.overflowX,p=s.overflowY;return/auto|scroll|overlay|hidden/.test(l+p+h)}function CT(r){return["html","body","#document"].indexOf($o(r))>=0?r.ownerDocument.body:lo(r)&&ok(r)?r:CT(Kh(r))}function ll(r,s){var l;s===void 0&&(s=[]);var h=CT(r),p=h===((l=r.ownerDocument)==null?void 0:l.body),m=Zn(h),k=p?[m].concat(m.visualViewport||[],ok(h)?h:[]):h,_=s.concat(k);return p?_:_.concat(ll(Kh(k)))}function ib(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function tU(r,s){var l=va(r,!1,s==="fixed");return l.top=l.top+r.clientTop,l.left=l.left+r.clientLeft,l.bottom=l.top+r.clientHeight,l.right=l.left+r.clientWidth,l.width=r.clientWidth,l.height=r.clientHeight,l.x=l.left,l.y=l.top,l}function XE(r,s,l){return s===Gb?ib(J$(r,l)):us(s)?tU(s,l):ib(X$(hr(r)))}function eU(r){var s=ll(Kh(r)),l=["absolute","fixed"].indexOf(ki(r).position)>=0,h=l&&lo(r)?Nl(r):r;return us(h)?s.filter(function(p){return us(p)&&bT(p,h)&&$o(p)!=="body"}):[]}function nU(r,s,l,h){var p=s==="clippingParents"?eU(r):[].concat(s),m=[].concat(p,[l]),k=m[0],_=m.reduce(function(b,D){var x=XE(r,D,h);return b.top=os(x.top,b.top),b.right=kh(x.right,b.right),b.bottom=kh(x.bottom,b.bottom),b.left=os(x.left,b.left),b},XE(r,k,h));return _.width=_.right-_.left,_.height=_.bottom-_.top,_.x=_.left,_.y=_.top,_}function vT(r){var s=r.reference,l=r.element,h=r.placement,p=h?jo(h):null,m=h?ya(h):null,k=s.x+s.width/2-l.width/2,_=s.y+s.height/2-l.height/2,b;switch(p){case yn:b={x:k,y:s.y-l.height};break;case Yn:b={x:k,y:s.y+s.height};break;case Qn:b={x:s.x+s.width,y:_};break;case En:b={x:s.x-l.width,y:_};break;default:b={x:s.x,y:s.y}}var D=p?Jb(p):null;if(D!=null){var x=D==="y"?"height":"width";switch(m){case ds:b[D]=b[D]-(s[x]/2-l[x]/2);break;case Aa:b[D]=b[D]+(s[x]/2-l[x]/2);break}}return b}function Ea(r,s){s===void 0&&(s={});var l=s,h=l.placement,p=h===void 0?r.placement:h,m=l.strategy,k=m===void 0?r.strategy:m,_=l.boundary,b=_===void 0?iT:_,D=l.rootBoundary,x=D===void 0?Gb:D,y=l.elementContext,A=y===void 0?ta:y,S=l.altBoundary,N=S===void 0?!1:S,O=l.padding,j=O===void 0?0:O,G=wT(typeof j!="number"?j:_T(j,Sa)),W=A===ta?rT:ta,F=r.rects.popper,H=r.elements[N?W:A],Q=nU(us(H)?H:H.contextElement||hr(r.elements.popper),b,x,k),J=va(r.elements.reference),et=vT({reference:J,element:F,strategy:"absolute",placement:p}),nt=ib(Object.assign({},F,et)),P=A===ta?nt:J,tt={top:Q.top-P.top+G.top,bottom:P.bottom-Q.bottom+G.bottom,left:Q.left-P.left+G.left,right:P.right-Q.right+G.right},ft=r.modifiersData.offset;if(A===ta&&ft){var U=ft[p];Object.keys(tt).forEach(function(_t){var Ot=[Qn,Yn].indexOf(_t)>=0?1:-1,Ut=[yn,Yn].indexOf(_t)>=0?"y":"x";tt[_t]+=U[Ut]*Ot})}return tt}function oU(r,s){s===void 0&&(s={});var l=s,h=l.placement,p=l.boundary,m=l.rootBoundary,k=l.padding,_=l.flipVariations,b=l.allowedAutoPlacements,D=b===void 0?Kb:b,x=ya(h),y=x?_?nb:nb.filter(function(N){return ya(N)===x}):Sa,A=y.filter(function(N){return D.indexOf(N)>=0});A.length===0&&(A=y);var S=A.reduce(function(N,O){return N[O]=Ea(r,{placement:O,boundary:p,rootBoundary:m,padding:k})[jo(O)],N},{});return Object.keys(S).sort(function(N,O){return S[N]-S[O]})}function iU(r){if(jo(r)===Gh)return[];var s=th(r);return[JE(r),s,JE(s)]}function rU(r){var s=r.state,l=r.options,h=r.name;if(!s.modifiersData[h]._skip){for(var p=l.mainAxis,m=p===void 0?!0:p,k=l.altAxis,_=k===void 0?!0:k,b=l.fallbackPlacements,D=l.padding,x=l.boundary,y=l.rootBoundary,A=l.altBoundary,S=l.flipVariations,N=S===void 0?!0:S,O=l.allowedAutoPlacements,j=s.options.placement,G=jo(j),W=G===j,F=b||(W||!N?[th(j)]:iU(j)),H=[j].concat(F).reduce(function(jt,te){return jt.concat(jo(te)===Gh?oU(s,{placement:te,boundary:x,rootBoundary:y,padding:D,flipVariations:N,allowedAutoPlacements:O}):te)},[]),Q=s.rects.reference,J=s.rects.popper,et=new Map,nt=!0,P=H[0],tt=0;tt<H.length;tt++){var ft=H[tt],U=jo(ft),_t=ya(ft)===ds,Ot=[yn,Yn].indexOf(U)>=0,Ut=Ot?"width":"height",mt=Ea(s,{placement:ft,boundary:x,rootBoundary:y,altBoundary:A,padding:D}),yt=Ot?_t?Qn:En:_t?Yn:yn;Q[Ut]>J[Ut]&&(yt=th(yt));var Mt=th(yt),Ee=[];if(m&&Ee.push(mt[U]<=0),_&&Ee.push(mt[yt]<=0,mt[Mt]<=0),Ee.every(function(jt){return jt})){P=ft,nt=!1;break}et.set(ft,Ee)}if(nt)for(var qt=N?3:1,Re=function(te){var re=H.find(function(it){var ct=et.get(it);if(ct)return ct.slice(0,te).every(function(Et){return Et})});if(re)return P=re,"break"},_e=qt;_e>0;_e--){var At=Re(_e);if(At==="break")break}s.placement!==P&&(s.modifiersData[h]._skip=!0,s.placement=P,s.reset=!0)}}const yT={name:"flip",enabled:!0,phase:"main",fn:rU,requiresIfExists:["offset"],data:{_skip:!1}};function tx(r,s,l){return l===void 0&&(l={x:0,y:0}),{top:r.top-s.height-l.y,right:r.right-s.width+l.x,bottom:r.bottom-s.height+l.y,left:r.left-s.width-l.x}}function ex(r){return[yn,Qn,Yn,En].some(function(s){return r[s]>=0})}function sU(r){var s=r.state,l=r.name,h=s.rects.reference,p=s.rects.popper,m=s.modifiersData.preventOverflow,k=Ea(s,{elementContext:"reference"}),_=Ea(s,{altBoundary:!0}),b=tx(k,h),D=tx(_,p,m),x=ex(b),y=ex(D);s.modifiersData[l]={referenceClippingOffsets:b,popperEscapeOffsets:D,isReferenceHidden:x,hasPopperEscaped:y},s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-reference-hidden":x,"data-popper-escaped":y})}const ET={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:sU};function aU(r,s,l){var h=jo(r),p=[En,yn].indexOf(h)>=0?-1:1,m=typeof l=="function"?l(Object.assign({},s,{placement:r})):l,k=m[0],_=m[1];return k=k||0,_=(_||0)*p,[En,Qn].indexOf(h)>=0?{x:_,y:k}:{x:k,y:_}}function cU(r){var s=r.state,l=r.options,h=r.name,p=l.offset,m=p===void 0?[0,0]:p,k=Kb.reduce(function(x,y){return x[y]=aU(y,s.rects,m),x},{}),_=k[s.placement],b=_.x,D=_.y;s.modifiersData.popperOffsets!=null&&(s.modifiersData.popperOffsets.x+=b,s.modifiersData.popperOffsets.y+=D),s.modifiersData[h]=k}const xT={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:cU};function lU(r){var s=r.state,l=r.name;s.modifiersData[l]=vT({reference:s.rects.reference,element:s.rects.popper,strategy:"absolute",placement:s.placement})}const ik={name:"popperOffsets",enabled:!0,phase:"read",fn:lU,data:{}};function dU(r){return r==="x"?"y":"x"}function uU(r){var s=r.state,l=r.options,h=r.name,p=l.mainAxis,m=p===void 0?!0:p,k=l.altAxis,_=k===void 0?!1:k,b=l.boundary,D=l.rootBoundary,x=l.altBoundary,y=l.padding,A=l.tether,S=A===void 0?!0:A,N=l.tetherOffset,O=N===void 0?0:N,j=Ea(s,{boundary:b,rootBoundary:D,padding:y,altBoundary:x}),G=jo(s.placement),W=ya(s.placement),F=!W,H=Jb(G),Q=dU(H),J=s.modifiersData.popperOffsets,et=s.rects.reference,nt=s.rects.popper,P=typeof O=="function"?O(Object.assign({},s.rects,{placement:s.placement})):O,tt=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),ft=s.modifiersData.offset?s.modifiersData.offset[s.placement]:null,U={x:0,y:0};if(J){if(m){var _t,Ot=H==="y"?yn:En,Ut=H==="y"?Yn:Qn,mt=H==="y"?"height":"width",yt=J[H],Mt=yt+j[Ot],Ee=yt-j[Ut],qt=S?-nt[mt]/2:0,Re=W===ds?et[mt]:nt[mt],_e=W===ds?-nt[mt]:-et[mt],At=s.elements.arrow,jt=S&&At?Zb(At):{width:0,height:0},te=s.modifiersData["arrow#persistent"]?s.modifiersData["arrow#persistent"].padding:kT(),re=te[Ot],it=te[Ut],ct=cl(0,et[mt],jt[mt]),Et=F?et[mt]/2-qt-ct-re-tt.mainAxis:Re-ct-re-tt.mainAxis,It=F?-et[mt]/2+qt+ct+it+tt.mainAxis:_e+ct+it+tt.mainAxis,Wt=s.elements.arrow&&Nl(s.elements.arrow),ee=Wt?H==="y"?Wt.clientTop||0:Wt.clientLeft||0:0,V=(_t=ft==null?void 0:ft[H])!=null?_t:0,K=yt+Et-V-ee,Z=yt+It-V,at=cl(S?kh(Mt,K):Mt,yt,S?os(Ee,Z):Ee);J[H]=at,U[H]=at-yt}if(_){var st,Ct=H==="x"?yn:En,kt=H==="x"?Yn:Qn,ht=J[Q],xt=Q==="y"?"height":"width",rt=ht+j[Ct],wt=ht-j[kt],Nt=[yn,En].indexOf(G)!==-1,Rt=(st=ft==null?void 0:ft[Q])!=null?st:0,St=Nt?rt:ht-et[xt]-nt[xt]-Rt+tt.altAxis,Ft=Nt?ht+et[xt]+nt[xt]-Rt-tt.altAxis:wt,Kt=S&&Nt?H$(St,ht,Ft):cl(S?St:rt,ht,S?Ft:wt);J[Q]=Kt,U[Q]=Kt-ht}s.modifiersData[h]=U}}const DT={name:"preventOverflow",enabled:!0,phase:"main",fn:uU,requiresIfExists:["offset"]};function hU(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function pU(r){return r===Zn(r)||!lo(r)?ek(r):hU(r)}function gU(r){var s=r.getBoundingClientRect(),l=Ca(s.width)/r.offsetWidth||1,h=Ca(s.height)/r.offsetHeight||1;return l!==1||h!==1}function fU(r,s,l){l===void 0&&(l=!1);var h=lo(s),p=lo(s)&&gU(s),m=hr(s),k=va(r,p,l),_={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(h||!h&&!l)&&(($o(s)!=="body"||ok(m))&&(_=pU(s)),lo(s)?(b=va(s,!0),b.x+=s.clientLeft,b.y+=s.clientTop):m&&(b.x=nk(m))),{x:k.left+_.scrollLeft-b.x,y:k.top+_.scrollTop-b.y,width:k.width,height:k.height}}function mU(r){var s=new Map,l=new Set,h=[];r.forEach(function(m){s.set(m.name,m)});function p(m){l.add(m.name);var k=[].concat(m.requires||[],m.requiresIfExists||[]);k.forEach(function(_){if(!l.has(_)){var b=s.get(_);b&&p(b)}}),h.push(m)}return r.forEach(function(m){l.has(m.name)||p(m)}),h}function bU(r){var s=mU(r);return fT.reduce(function(l,h){return l.concat(s.filter(function(p){return p.phase===h}))},[])}function kU(r){var s;return function(){return s||(s=new Promise(function(l){Promise.resolve().then(function(){s=void 0,l(r())})})),s}}function wU(r){var s=r.reduce(function(l,h){var p=l[h.name];return l[h.name]=p?Object.assign({},p,h,{options:Object.assign({},p.options,h.options),data:Object.assign({},p.data,h.data)}):h,l},{});return Object.keys(s).map(function(l){return s[l]})}var nx={placement:"bottom",modifiers:[],strategy:"absolute"};function ox(){for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return!s.some(function(h){return!(h&&typeof h.getBoundingClientRect=="function")})}function Yh(r){r===void 0&&(r={});var s=r,l=s.defaultModifiers,h=l===void 0?[]:l,p=s.defaultOptions,m=p===void 0?nx:p;return function(_,b,D){D===void 0&&(D=m);var x={placement:"bottom",orderedModifiers:[],options:Object.assign({},nx,m),modifiersData:{},elements:{reference:_,popper:b},attributes:{},styles:{}},y=[],A=!1,S={state:x,setOptions:function(G){var W=typeof G=="function"?G(x.options):G;O(),x.options=Object.assign({},m,x.options,W),x.scrollParents={reference:us(_)?ll(_):_.contextElement?ll(_.contextElement):[],popper:ll(b)};var F=bU(wU([].concat(h,x.options.modifiers)));return x.orderedModifiers=F.filter(function(H){return H.enabled}),N(),S.update()},forceUpdate:function(){if(!A){var G=x.elements,W=G.reference,F=G.popper;if(ox(W,F)){x.rects={reference:fU(W,Nl(F),x.options.strategy==="fixed"),popper:Zb(F)},x.reset=!1,x.placement=x.options.placement,x.orderedModifiers.forEach(function(tt){return x.modifiersData[tt.name]=Object.assign({},tt.data)});for(var H=0;H<x.orderedModifiers.length;H++){if(x.reset===!0){x.reset=!1,H=-1;continue}var Q=x.orderedModifiers[H],J=Q.fn,et=Q.options,nt=et===void 0?{}:et,P=Q.name;typeof J=="function"&&(x=J({state:x,options:nt,name:P,instance:S})||x)}}}},update:kU(function(){return new Promise(function(j){S.forceUpdate(),j(x)})}),destroy:function(){O(),A=!0}};if(!ox(_,b))return S;S.setOptions(D).then(function(j){!A&&D.onFirstUpdate&&D.onFirstUpdate(j)});function N(){x.orderedModifiers.forEach(function(j){var G=j.name,W=j.options,F=W===void 0?{}:W,H=j.effect;if(typeof H=="function"){var Q=H({state:x,name:G,instance:S,options:F}),J=function(){};y.push(Q||J)}})}function O(){y.forEach(function(j){return j()}),y=[]}return S}}var _U=Yh(),AU=[tk,ik,Xb,Qb],CU=Yh({defaultModifiers:AU}),vU=[tk,ik,Xb,Qb,xT,yT,DT,AT,ET],rk=Yh({defaultModifiers:vU});const TT=Object.freeze(Object.defineProperty({__proto__:null,afterMain:uT,afterRead:cT,afterWrite:gT,applyStyles:Qb,arrow:AT,auto:Gh,basePlacements:Sa,beforeMain:lT,beforeRead:sT,beforeWrite:hT,bottom:Yn,clippingParents:iT,computeStyles:Xb,createPopper:rk,createPopperBase:_U,createPopperLite:CU,detectOverflow:Ea,end:Aa,eventListeners:tk,flip:yT,hide:ET,left:En,main:dT,modifierPhases:fT,offset:xT,placements:Kb,popper:ta,popperGenerator:Yh,popperOffsets:ik,preventOverflow:DT,read:aT,reference:rT,right:Qn,start:ds,top:yn,variationPlacements:nb,viewport:Gb,write:pT},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const qi=new Map,pm={set(r,s,l){qi.has(r)||qi.set(r,new Map);const h=qi.get(r);if(!h.has(s)&&h.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(h.keys())[0]}.`);return}h.set(s,l)},get(r,s){return qi.has(r)&&qi.get(r).get(s)||null},remove(r,s){if(!qi.has(r))return;const l=qi.get(r);l.delete(s),l.size===0&&qi.delete(r)}},yU=1e6,EU=1e3,rb="transitionend",ST=r=>(r&&window.CSS&&window.CSS.escape&&(r=r.replace(/#([^\s"#']+)/g,(s,l)=>`#${CSS.escape(l)}`)),r),xU=r=>r==null?`${r}`:Object.prototype.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase(),DU=r=>{do r+=Math.floor(Math.random()*yU);while(document.getElementById(r));return r},TU=r=>{if(!r)return 0;let{transitionDuration:s,transitionDelay:l}=window.getComputedStyle(r);const h=Number.parseFloat(s),p=Number.parseFloat(l);return!h&&!p?0:(s=s.split(",")[0],l=l.split(",")[0],(Number.parseFloat(s)+Number.parseFloat(l))*EU)},IT=r=>{r.dispatchEvent(new Event(rb))},mi=r=>!r||typeof r!="object"?!1:(typeof r.jquery<"u"&&(r=r[0]),typeof r.nodeType<"u"),ar=r=>mi(r)?r.jquery?r[0]:r:typeof r=="string"&&r.length>0?document.querySelector(ST(r)):null,Ia=r=>{if(!mi(r)||r.getClientRects().length===0)return!1;const s=getComputedStyle(r).getPropertyValue("visibility")==="visible",l=r.closest("details:not([open])");if(!l)return s;if(l!==r){const h=r.closest("summary");if(h&&h.parentNode!==l||h===null)return!1}return s},cr=r=>!r||r.nodeType!==Node.ELEMENT_NODE||r.classList.contains("disabled")?!0:typeof r.disabled<"u"?r.disabled:r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false",MT=r=>{if(!document.documentElement.attachShadow)return null;if(typeof r.getRootNode=="function"){const s=r.getRootNode();return s instanceof ShadowRoot?s:null}return r instanceof ShadowRoot?r:r.parentNode?MT(r.parentNode):null},wh=()=>{},Pl=r=>{r.offsetHeight},BT=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,gm=[],SU=r=>{document.readyState==="loading"?(gm.length||document.addEventListener("DOMContentLoaded",()=>{for(const s of gm)s()}),gm.push(r)):r()},uo=()=>document.documentElement.dir==="rtl",po=r=>{SU(()=>{const s=BT();if(s){const l=r.NAME,h=s.fn[l];s.fn[l]=r.jQueryInterface,s.fn[l].Constructor=r,s.fn[l].noConflict=()=>(s.fn[l]=h,r.jQueryInterface)}})},Rn=(r,s=[],l=r)=>typeof r=="function"?r(...s):l,NT=(r,s,l=!0)=>{if(!l){Rn(r);return}const h=5,p=TU(s)+h;let m=!1;const k=({target:_})=>{_===s&&(m=!0,s.removeEventListener(rb,k),Rn(r))};s.addEventListener(rb,k),setTimeout(()=>{m||IT(s)},p)},sk=(r,s,l,h)=>{const p=r.length;let m=r.indexOf(s);return m===-1?!l&&h?r[p-1]:r[0]:(m+=l?1:-1,h&&(m=(m+p)%p),r[Math.max(0,Math.min(m,p-1))])},IU=/[^.]*(?=\..*)\.|.*/,MU=/\..*/,BU=/::\d+$/,fm={};let ix=1;const PT={mouseenter:"mouseover",mouseleave:"mouseout"},NU=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function OT(r,s){return s&&`${s}::${ix++}`||r.uidEvent||ix++}function LT(r){const s=OT(r);return r.uidEvent=s,fm[s]=fm[s]||{},fm[s]}function PU(r,s){return function l(h){return ak(h,{delegateTarget:r}),l.oneOff&&bt.off(r,h.type,s),s.apply(r,[h])}}function OU(r,s,l){return function h(p){const m=r.querySelectorAll(s);for(let{target:k}=p;k&&k!==this;k=k.parentNode)for(const _ of m)if(_===k)return ak(p,{delegateTarget:k}),h.oneOff&&bt.off(r,p.type,s,l),l.apply(k,[p])}}function RT(r,s,l=null){return Object.values(r).find(h=>h.callable===s&&h.delegationSelector===l)}function zT(r,s,l){const h=typeof s=="string",p=h?l:s||l;let m=jT(r);return NU.has(m)||(m=r),[h,p,m]}function rx(r,s,l,h,p){if(typeof s!="string"||!r)return;let[m,k,_]=zT(s,l,h);s in PT&&(k=(N=>function(O){if(!O.relatedTarget||O.relatedTarget!==O.delegateTarget&&!O.delegateTarget.contains(O.relatedTarget))return N.call(this,O)})(k));const b=LT(r),D=b[_]||(b[_]={}),x=RT(D,k,m?l:null);if(x){x.oneOff=x.oneOff&&p;return}const y=OT(k,s.replace(IU,"")),A=m?OU(r,l,k):PU(r,k);A.delegationSelector=m?l:null,A.callable=k,A.oneOff=p,A.uidEvent=y,D[y]=A,r.addEventListener(_,A,m)}function sb(r,s,l,h,p){const m=RT(s[l],h,p);m&&(r.removeEventListener(l,m,!!p),delete s[l][m.uidEvent])}function LU(r,s,l,h){const p=s[l]||{};for(const[m,k]of Object.entries(p))m.includes(h)&&sb(r,s,l,k.callable,k.delegationSelector)}function jT(r){return r=r.replace(MU,""),PT[r]||r}const bt={on(r,s,l,h){rx(r,s,l,h,!1)},one(r,s,l,h){rx(r,s,l,h,!0)},off(r,s,l,h){if(typeof s!="string"||!r)return;const[p,m,k]=zT(s,l,h),_=k!==s,b=LT(r),D=b[k]||{},x=s.startsWith(".");if(typeof m<"u"){if(!Object.keys(D).length)return;sb(r,b,k,m,p?l:null);return}if(x)for(const y of Object.keys(b))LU(r,b,y,s.slice(1));for(const[y,A]of Object.entries(D)){const S=y.replace(BU,"");(!_||s.includes(S))&&sb(r,b,k,A.callable,A.delegationSelector)}},trigger(r,s,l){if(typeof s!="string"||!r)return null;const h=BT(),p=jT(s),m=s!==p;let k=null,_=!0,b=!0,D=!1;m&&h&&(k=h.Event(s,l),h(r).trigger(k),_=!k.isPropagationStopped(),b=!k.isImmediatePropagationStopped(),D=k.isDefaultPrevented());const x=ak(new Event(s,{bubbles:_,cancelable:!0}),l);return D&&x.preventDefault(),b&&r.dispatchEvent(x),x.defaultPrevented&&k&&k.preventDefault(),x}};function ak(r,s={}){for(const[l,h]of Object.entries(s))try{r[l]=h}catch{Object.defineProperty(r,l,{configurable:!0,get(){return h}})}return r}function sx(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function mm(r){return r.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}const bi={setDataAttribute(r,s,l){r.setAttribute(`data-bs-${mm(s)}`,l)},removeDataAttribute(r,s){r.removeAttribute(`data-bs-${mm(s)}`)},getDataAttributes(r){if(!r)return{};const s={},l=Object.keys(r.dataset).filter(h=>h.startsWith("bs")&&!h.startsWith("bsConfig"));for(const h of l){let p=h.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1,p.length),s[p]=sx(r.dataset[h])}return s},getDataAttribute(r,s){return sx(r.getAttribute(`data-bs-${mm(s)}`))}};class Ol{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(s){return s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s}_mergeConfigObj(s,l){const h=mi(l)?bi.getDataAttribute(l,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...mi(l)?bi.getDataAttributes(l):{},...typeof s=="object"?s:{}}}_typeCheckConfig(s,l=this.constructor.DefaultType){for(const[h,p]of Object.entries(l)){const m=s[h],k=mi(m)?"element":xU(m);if(!new RegExp(p).test(k))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${k}" but expected type "${p}".`)}}}const RU="5.3.3";class Do extends Ol{constructor(s,l){super(),s=ar(s),s&&(this._element=s,this._config=this._getConfig(l),pm.set(this._element,this.constructor.DATA_KEY,this))}dispose(){pm.remove(this._element,this.constructor.DATA_KEY),bt.off(this._element,this.constructor.EVENT_KEY);for(const s of Object.getOwnPropertyNames(this))this[s]=null}_queueCallback(s,l,h=!0){NT(s,l,h)}_getConfig(s){return s=this._mergeConfigObj(s,this._element),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}static getInstance(s){return pm.get(ar(s),this.DATA_KEY)}static getOrCreateInstance(s,l={}){return this.getInstance(s)||new this(s,typeof l=="object"?l:null)}static get VERSION(){return RU}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(s){return`${s}${this.EVENT_KEY}`}}const bm=r=>{let s=r.getAttribute("data-bs-target");if(!s||s==="#"){let l=r.getAttribute("href");if(!l||!l.includes("#")&&!l.startsWith("."))return null;l.includes("#")&&!l.startsWith("#")&&(l=`#${l.split("#")[1]}`),s=l&&l!=="#"?l.trim():null}return s?s.split(",").map(l=>ST(l)).join(","):null},$t={find(r,s=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(s,r))},findOne(r,s=document.documentElement){return Element.prototype.querySelector.call(s,r)},children(r,s){return[].concat(...r.children).filter(l=>l.matches(s))},parents(r,s){const l=[];let h=r.parentNode.closest(s);for(;h;)l.push(h),h=h.parentNode.closest(s);return l},prev(r,s){let l=r.previousElementSibling;for(;l;){if(l.matches(s))return[l];l=l.previousElementSibling}return[]},next(r,s){let l=r.nextElementSibling;for(;l;){if(l.matches(s))return[l];l=l.nextElementSibling}return[]},focusableChildren(r){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(l=>`${l}:not([tabindex^="-"])`).join(",");return this.find(s,r).filter(l=>!cr(l)&&Ia(l))},getSelectorFromElement(r){const s=bm(r);return s&&$t.findOne(s)?s:null},getElementFromSelector(r){const s=bm(r);return s?$t.findOne(s):null},getMultipleElementsFromSelector(r){const s=bm(r);return s?$t.find(s):[]}},Qh=(r,s="hide")=>{const l=`click.dismiss${r.EVENT_KEY}`,h=r.NAME;bt.on(document,l,`[data-bs-dismiss="${h}"]`,function(p){if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),cr(this))return;const m=$t.getElementFromSelector(this)||this.closest(`.${h}`);r.getOrCreateInstance(m)[s]()})},zU="alert",jU="bs.alert",FT=`.${jU}`,FU=`close${FT}`,VU=`closed${FT}`,HU="fade",$U="show";class Zh extends Do{static get NAME(){return zU}close(){if(bt.trigger(this._element,FU).defaultPrevented)return;this._element.classList.remove($U);const l=this._element.classList.contains(HU);this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),bt.trigger(this._element,VU),this.dispose()}static jQueryInterface(s){return this.each(function(){const l=Zh.getOrCreateInstance(this);if(typeof s=="string"){if(l[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);l[s](this)}})}}Qh(Zh,"close");po(Zh);const UU="button",qU="bs.button",WU=`.${qU}`,GU=".data-api",KU="active",ax='[data-bs-toggle="button"]',YU=`click${WU}${GU}`;class Jh extends Do{static get NAME(){return UU}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(KU))}static jQueryInterface(s){return this.each(function(){const l=Jh.getOrCreateInstance(this);s==="toggle"&&l[s]()})}}bt.on(document,YU,ax,r=>{r.preventDefault();const s=r.target.closest(ax);Jh.getOrCreateInstance(s).toggle()});po(Jh);const QU="swipe",Ma=".bs.swipe",ZU=`touchstart${Ma}`,JU=`touchmove${Ma}`,XU=`touchend${Ma}`,tq=`pointerdown${Ma}`,eq=`pointerup${Ma}`,nq="touch",oq="pen",iq="pointer-event",rq=40,sq={endCallback:null,leftCallback:null,rightCallback:null},aq={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class _h extends Ol{constructor(s,l){super(),this._element=s,!(!s||!_h.isSupported())&&(this._config=this._getConfig(l),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return sq}static get DefaultType(){return aq}static get NAME(){return QU}dispose(){bt.off(this._element,Ma)}_start(s){if(!this._supportPointerEvents){this._deltaX=s.touches[0].clientX;return}this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX)}_end(s){this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX-this._deltaX),this._handleSwipe(),Rn(this._config.endCallback)}_move(s){this._deltaX=s.touches&&s.touches.length>1?0:s.touches[0].clientX-this._deltaX}_handleSwipe(){const s=Math.abs(this._deltaX);if(s<=rq)return;const l=s/this._deltaX;this._deltaX=0,l&&Rn(l>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(bt.on(this._element,tq,s=>this._start(s)),bt.on(this._element,eq,s=>this._end(s)),this._element.classList.add(iq)):(bt.on(this._element,ZU,s=>this._start(s)),bt.on(this._element,JU,s=>this._move(s)),bt.on(this._element,XU,s=>this._end(s)))}_eventIsPointerPenTouch(s){return this._supportPointerEvents&&(s.pointerType===oq||s.pointerType===nq)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const cq="carousel",lq="bs.carousel",pr=`.${lq}`,VT=".data-api",dq="ArrowLeft",uq="ArrowRight",hq=500,Yc="next",Qs="prev",ea="left",eh="right",pq=`slide${pr}`,km=`slid${pr}`,gq=`keydown${pr}`,fq=`mouseenter${pr}`,mq=`mouseleave${pr}`,bq=`dragstart${pr}`,kq=`load${pr}${VT}`,wq=`click${pr}${VT}`,HT="carousel",Vu="active",_q="slide",Aq="carousel-item-end",Cq="carousel-item-start",vq="carousel-item-next",yq="carousel-item-prev",$T=".active",UT=".carousel-item",Eq=$T+UT,xq=".carousel-item img",Dq=".carousel-indicators",Tq="[data-bs-slide], [data-bs-slide-to]",Sq='[data-bs-ride="carousel"]',Iq={[dq]:eh,[uq]:ea},Mq={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Bq={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ll extends Do{constructor(s,l){super(s,l),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=$t.findOne(Dq,this._element),this._addEventListeners(),this._config.ride===HT&&this.cycle()}static get Default(){return Mq}static get DefaultType(){return Bq}static get NAME(){return cq}next(){this._slide(Yc)}nextWhenVisible(){!document.hidden&&Ia(this._element)&&this.next()}prev(){this._slide(Qs)}pause(){this._isSliding&&IT(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){bt.one(this._element,km,()=>this.cycle());return}this.cycle()}}to(s){const l=this._getItems();if(s>l.length-1||s<0)return;if(this._isSliding){bt.one(this._element,km,()=>this.to(s));return}const h=this._getItemIndex(this._getActive());if(h===s)return;const p=s>h?Yc:Qs;this._slide(p,l[s])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(s){return s.defaultInterval=s.interval,s}_addEventListeners(){this._config.keyboard&&bt.on(this._element,gq,s=>this._keydown(s)),this._config.pause==="hover"&&(bt.on(this._element,fq,()=>this.pause()),bt.on(this._element,mq,()=>this._maybeEnableCycle())),this._config.touch&&_h.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const h of $t.find(xq,this._element))bt.on(h,bq,p=>p.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(ea)),rightCallback:()=>this._slide(this._directionToOrder(eh)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),hq+this._config.interval))}};this._swipeHelper=new _h(this._element,l)}_keydown(s){if(/input|textarea/i.test(s.target.tagName))return;const l=Iq[s.key];l&&(s.preventDefault(),this._slide(this._directionToOrder(l)))}_getItemIndex(s){return this._getItems().indexOf(s)}_setActiveIndicatorElement(s){if(!this._indicatorsElement)return;const l=$t.findOne($T,this._indicatorsElement);l.classList.remove(Vu),l.removeAttribute("aria-current");const h=$t.findOne(`[data-bs-slide-to="${s}"]`,this._indicatorsElement);h&&(h.classList.add(Vu),h.setAttribute("aria-current","true"))}_updateInterval(){const s=this._activeElement||this._getActive();if(!s)return;const l=Number.parseInt(s.getAttribute("data-bs-interval"),10);this._config.interval=l||this._config.defaultInterval}_slide(s,l=null){if(this._isSliding)return;const h=this._getActive(),p=s===Yc,m=l||sk(this._getItems(),h,p,this._config.wrap);if(m===h)return;const k=this._getItemIndex(m),_=S=>bt.trigger(this._element,S,{relatedTarget:m,direction:this._orderToDirection(s),from:this._getItemIndex(h),to:k});if(_(pq).defaultPrevented||!h||!m)return;const D=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(k),this._activeElement=m;const x=p?Cq:Aq,y=p?vq:yq;m.classList.add(y),Pl(m),h.classList.add(x),m.classList.add(x);const A=()=>{m.classList.remove(x,y),m.classList.add(Vu),h.classList.remove(Vu,y,x),this._isSliding=!1,_(km)};this._queueCallback(A,h,this._isAnimated()),D&&this.cycle()}_isAnimated(){return this._element.classList.contains(_q)}_getActive(){return $t.findOne(Eq,this._element)}_getItems(){return $t.find(UT,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(s){return uo()?s===ea?Qs:Yc:s===ea?Yc:Qs}_orderToDirection(s){return uo()?s===Qs?ea:eh:s===Qs?eh:ea}static jQueryInterface(s){return this.each(function(){const l=Ll.getOrCreateInstance(this,s);if(typeof s=="number"){l.to(s);return}if(typeof s=="string"){if(l[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);l[s]()}})}}bt.on(document,wq,Tq,function(r){const s=$t.getElementFromSelector(this);if(!s||!s.classList.contains(HT))return;r.preventDefault();const l=Ll.getOrCreateInstance(s),h=this.getAttribute("data-bs-slide-to");if(h){l.to(h),l._maybeEnableCycle();return}if(bi.getDataAttribute(this,"slide")==="next"){l.next(),l._maybeEnableCycle();return}l.prev(),l._maybeEnableCycle()});bt.on(window,kq,()=>{const r=$t.find(Sq);for(const s of r)Ll.getOrCreateInstance(s)});po(Ll);const Nq="collapse",Pq="bs.collapse",Rl=`.${Pq}`,Oq=".data-api",Lq=`show${Rl}`,Rq=`shown${Rl}`,zq=`hide${Rl}`,jq=`hidden${Rl}`,Fq=`click${Rl}${Oq}`,wm="show",oa="collapse",Hu="collapsing",Vq="collapsed",Hq=`:scope .${oa} .${oa}`,$q="collapse-horizontal",Uq="width",qq="height",Wq=".collapse.show, .collapse.collapsing",ab='[data-bs-toggle="collapse"]',Gq={parent:null,toggle:!0},Kq={parent:"(null|element)",toggle:"boolean"};class _l extends Do{constructor(s,l){super(s,l),this._isTransitioning=!1,this._triggerArray=[];const h=$t.find(ab);for(const p of h){const m=$t.getSelectorFromElement(p),k=$t.find(m).filter(_=>_===this._element);m!==null&&k.length&&this._triggerArray.push(p)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Gq}static get DefaultType(){return Kq}static get NAME(){return Nq}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let s=[];if(this._config.parent&&(s=this._getFirstLevelChildren(Wq).filter(_=>_!==this._element).map(_=>_l.getOrCreateInstance(_,{toggle:!1}))),s.length&&s[0]._isTransitioning||bt.trigger(this._element,Lq).defaultPrevented)return;for(const _ of s)_.hide();const h=this._getDimension();this._element.classList.remove(oa),this._element.classList.add(Hu),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const p=()=>{this._isTransitioning=!1,this._element.classList.remove(Hu),this._element.classList.add(oa,wm),this._element.style[h]="",bt.trigger(this._element,Rq)},k=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(p,this._element,!0),this._element.style[h]=`${this._element[k]}px`}hide(){if(this._isTransitioning||!this._isShown()||bt.trigger(this._element,zq).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,Pl(this._element),this._element.classList.add(Hu),this._element.classList.remove(oa,wm);for(const p of this._triggerArray){const m=$t.getElementFromSelector(p);m&&!this._isShown(m)&&this._addAriaAndCollapsedClass([p],!1)}this._isTransitioning=!0;const h=()=>{this._isTransitioning=!1,this._element.classList.remove(Hu),this._element.classList.add(oa),bt.trigger(this._element,jq)};this._element.style[l]="",this._queueCallback(h,this._element,!0)}_isShown(s=this._element){return s.classList.contains(wm)}_configAfterMerge(s){return s.toggle=!!s.toggle,s.parent=ar(s.parent),s}_getDimension(){return this._element.classList.contains($q)?Uq:qq}_initializeChildren(){if(!this._config.parent)return;const s=this._getFirstLevelChildren(ab);for(const l of s){const h=$t.getElementFromSelector(l);h&&this._addAriaAndCollapsedClass([l],this._isShown(h))}}_getFirstLevelChildren(s){const l=$t.find(Hq,this._config.parent);return $t.find(s,this._config.parent).filter(h=>!l.includes(h))}_addAriaAndCollapsedClass(s,l){if(s.length)for(const h of s)h.classList.toggle(Vq,!l),h.setAttribute("aria-expanded",l)}static jQueryInterface(s){const l={};return typeof s=="string"&&/show|hide/.test(s)&&(l.toggle=!1),this.each(function(){const h=_l.getOrCreateInstance(this,l);if(typeof s=="string"){if(typeof h[s]>"u")throw new TypeError(`No method named "${s}"`);h[s]()}})}}bt.on(document,Fq,ab,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();for(const s of $t.getMultipleElementsFromSelector(this))_l.getOrCreateInstance(s,{toggle:!1}).toggle()});po(_l);const cx="dropdown",Yq="bs.dropdown",fs=`.${Yq}`,ck=".data-api",Qq="Escape",lx="Tab",Zq="ArrowUp",dx="ArrowDown",Jq=2,Xq=`hide${fs}`,tW=`hidden${fs}`,eW=`show${fs}`,nW=`shown${fs}`,qT=`click${fs}${ck}`,WT=`keydown${fs}${ck}`,oW=`keyup${fs}${ck}`,na="show",iW="dropup",rW="dropend",sW="dropstart",aW="dropup-center",cW="dropdown-center",Qr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',lW=`${Qr}.${na}`,nh=".dropdown-menu",dW=".navbar",uW=".navbar-nav",hW=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",pW=uo()?"top-end":"top-start",gW=uo()?"top-start":"top-end",fW=uo()?"bottom-end":"bottom-start",mW=uo()?"bottom-start":"bottom-end",bW=uo()?"left-start":"right-start",kW=uo()?"right-start":"left-start",wW="top",_W="bottom",AW={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},CW={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Fo extends Do{constructor(s,l){super(s,l),this._popper=null,this._parent=this._element.parentNode,this._menu=$t.next(this._element,nh)[0]||$t.prev(this._element,nh)[0]||$t.findOne(nh,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return AW}static get DefaultType(){return CW}static get NAME(){return cx}toggle(){return this._isShown()?this.hide():this.show()}show(){if(cr(this._element)||this._isShown())return;const s={relatedTarget:this._element};if(!bt.trigger(this._element,eW,s).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(uW))for(const h of[].concat(...document.body.children))bt.on(h,"mouseover",wh);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(na),this._element.classList.add(na),bt.trigger(this._element,nW,s)}}hide(){if(cr(this._element)||!this._isShown())return;const s={relatedTarget:this._element};this._completeHide(s)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(s){if(!bt.trigger(this._element,Xq,s).defaultPrevented){if("ontouchstart"in document.documentElement)for(const h of[].concat(...document.body.children))bt.off(h,"mouseover",wh);this._popper&&this._popper.destroy(),this._menu.classList.remove(na),this._element.classList.remove(na),this._element.setAttribute("aria-expanded","false"),bi.removeDataAttribute(this._menu,"popper"),bt.trigger(this._element,tW,s)}}_getConfig(s){if(s=super._getConfig(s),typeof s.reference=="object"&&!mi(s.reference)&&typeof s.reference.getBoundingClientRect!="function")throw new TypeError(`${cx.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return s}_createPopper(){if(typeof TT>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let s=this._element;this._config.reference==="parent"?s=this._parent:mi(this._config.reference)?s=ar(this._config.reference):typeof this._config.reference=="object"&&(s=this._config.reference);const l=this._getPopperConfig();this._popper=rk(s,this._menu,l)}_isShown(){return this._menu.classList.contains(na)}_getPlacement(){const s=this._parent;if(s.classList.contains(rW))return bW;if(s.classList.contains(sW))return kW;if(s.classList.contains(aW))return wW;if(s.classList.contains(cW))return _W;const l=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return s.classList.contains(iW)?l?gW:pW:l?mW:fW}_detectNavbar(){return this._element.closest(dW)!==null}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(l=>Number.parseInt(l,10)):typeof s=="function"?l=>s(l,this._element):s}_getPopperConfig(){const s={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(bi.setDataAttribute(this._menu,"popper","static"),s.modifiers=[{name:"applyStyles",enabled:!1}]),{...s,...Rn(this._config.popperConfig,[s])}}_selectMenuItem({key:s,target:l}){const h=$t.find(hW,this._menu).filter(p=>Ia(p));h.length&&sk(h,l,s===dx,!h.includes(l)).focus()}static jQueryInterface(s){return this.each(function(){const l=Fo.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof l[s]>"u")throw new TypeError(`No method named "${s}"`);l[s]()}})}static clearMenus(s){if(s.button===Jq||s.type==="keyup"&&s.key!==lx)return;const l=$t.find(lW);for(const h of l){const p=Fo.getInstance(h);if(!p||p._config.autoClose===!1)continue;const m=s.composedPath(),k=m.includes(p._menu);if(m.includes(p._element)||p._config.autoClose==="inside"&&!k||p._config.autoClose==="outside"&&k||p._menu.contains(s.target)&&(s.type==="keyup"&&s.key===lx||/input|select|option|textarea|form/i.test(s.target.tagName)))continue;const _={relatedTarget:p._element};s.type==="click"&&(_.clickEvent=s),p._completeHide(_)}}static dataApiKeydownHandler(s){const l=/input|textarea/i.test(s.target.tagName),h=s.key===Qq,p=[Zq,dx].includes(s.key);if(!p&&!h||l&&!h)return;s.preventDefault();const m=this.matches(Qr)?this:$t.prev(this,Qr)[0]||$t.next(this,Qr)[0]||$t.findOne(Qr,s.delegateTarget.parentNode),k=Fo.getOrCreateInstance(m);if(p){s.stopPropagation(),k.show(),k._selectMenuItem(s);return}k._isShown()&&(s.stopPropagation(),k.hide(),m.focus())}}bt.on(document,WT,Qr,Fo.dataApiKeydownHandler);bt.on(document,WT,nh,Fo.dataApiKeydownHandler);bt.on(document,qT,Fo.clearMenus);bt.on(document,oW,Fo.clearMenus);bt.on(document,qT,Qr,function(r){r.preventDefault(),Fo.getOrCreateInstance(this).toggle()});po(Fo);const GT="backdrop",vW="fade",ux="show",hx=`mousedown.bs.${GT}`,yW={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},EW={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class KT extends Ol{constructor(s){super(),this._config=this._getConfig(s),this._isAppended=!1,this._element=null}static get Default(){return yW}static get DefaultType(){return EW}static get NAME(){return GT}show(s){if(!this._config.isVisible){Rn(s);return}this._append();const l=this._getElement();this._config.isAnimated&&Pl(l),l.classList.add(ux),this._emulateAnimation(()=>{Rn(s)})}hide(s){if(!this._config.isVisible){Rn(s);return}this._getElement().classList.remove(ux),this._emulateAnimation(()=>{this.dispose(),Rn(s)})}dispose(){this._isAppended&&(bt.off(this._element,hx),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const s=document.createElement("div");s.className=this._config.className,this._config.isAnimated&&s.classList.add(vW),this._element=s}return this._element}_configAfterMerge(s){return s.rootElement=ar(s.rootElement),s}_append(){if(this._isAppended)return;const s=this._getElement();this._config.rootElement.append(s),bt.on(s,hx,()=>{Rn(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(s){NT(s,this._getElement(),this._config.isAnimated)}}const xW="focustrap",DW="bs.focustrap",Ah=`.${DW}`,TW=`focusin${Ah}`,SW=`keydown.tab${Ah}`,IW="Tab",MW="forward",px="backward",BW={autofocus:!0,trapElement:null},NW={autofocus:"boolean",trapElement:"element"};class YT extends Ol{constructor(s){super(),this._config=this._getConfig(s),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return BW}static get DefaultType(){return NW}static get NAME(){return xW}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),bt.off(document,Ah),bt.on(document,TW,s=>this._handleFocusin(s)),bt.on(document,SW,s=>this._handleKeydown(s)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,bt.off(document,Ah))}_handleFocusin(s){const{trapElement:l}=this._config;if(s.target===document||s.target===l||l.contains(s.target))return;const h=$t.focusableChildren(l);h.length===0?l.focus():this._lastTabNavDirection===px?h[h.length-1].focus():h[0].focus()}_handleKeydown(s){s.key===IW&&(this._lastTabNavDirection=s.shiftKey?px:MW)}}const gx=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",fx=".sticky-top",$u="padding-right",mx="margin-right";class cb{constructor(){this._element=document.body}getWidth(){const s=document.documentElement.clientWidth;return Math.abs(window.innerWidth-s)}hide(){const s=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,$u,l=>l+s),this._setElementAttributes(gx,$u,l=>l+s),this._setElementAttributes(fx,mx,l=>l-s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,$u),this._resetElementAttributes(gx,$u),this._resetElementAttributes(fx,mx)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(s,l,h){const p=this.getWidth(),m=k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+p)return;this._saveInitialAttribute(k,l);const _=window.getComputedStyle(k).getPropertyValue(l);k.style.setProperty(l,`${h(Number.parseFloat(_))}px`)};this._applyManipulationCallback(s,m)}_saveInitialAttribute(s,l){const h=s.style.getPropertyValue(l);h&&bi.setDataAttribute(s,l,h)}_resetElementAttributes(s,l){const h=p=>{const m=bi.getDataAttribute(p,l);if(m===null){p.style.removeProperty(l);return}bi.removeDataAttribute(p,l),p.style.setProperty(l,m)};this._applyManipulationCallback(s,h)}_applyManipulationCallback(s,l){if(mi(s)){l(s);return}for(const h of $t.find(s,this._element))l(h)}}const PW="modal",OW="bs.modal",ho=`.${OW}`,LW=".data-api",RW="Escape",zW=`hide${ho}`,jW=`hidePrevented${ho}`,QT=`hidden${ho}`,ZT=`show${ho}`,FW=`shown${ho}`,VW=`resize${ho}`,HW=`click.dismiss${ho}`,$W=`mousedown.dismiss${ho}`,UW=`keydown.dismiss${ho}`,qW=`click${ho}${LW}`,bx="modal-open",WW="fade",kx="show",_m="modal-static",GW=".modal.show",KW=".modal-dialog",YW=".modal-body",QW='[data-bs-toggle="modal"]',ZW={backdrop:!0,focus:!0,keyboard:!0},JW={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class hs extends Do{constructor(s,l){super(s,l),this._dialog=$t.findOne(KW,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new cb,this._addEventListeners()}static get Default(){return ZW}static get DefaultType(){return JW}static get NAME(){return PW}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||this._isTransitioning||bt.trigger(this._element,ZT,{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(bx),this._adjustDialog(),this._backdrop.show(()=>this._showElement(s)))}hide(){!this._isShown||this._isTransitioning||bt.trigger(this._element,zW).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(kx),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){bt.off(window,ho),bt.off(this._dialog,ho),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new KT({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new YT({trapElement:this._element})}_showElement(s){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const l=$t.findOne(YW,this._dialog);l&&(l.scrollTop=0),Pl(this._element),this._element.classList.add(kx);const h=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,bt.trigger(this._element,FW,{relatedTarget:s})};this._queueCallback(h,this._dialog,this._isAnimated())}_addEventListeners(){bt.on(this._element,UW,s=>{if(s.key===RW){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),bt.on(window,VW,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),bt.on(this._element,$W,s=>{bt.one(this._element,HW,l=>{if(!(this._element!==s.target||this._element!==l.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(bx),this._resetAdjustments(),this._scrollBar.reset(),bt.trigger(this._element,QT)})}_isAnimated(){return this._element.classList.contains(WW)}_triggerBackdropTransition(){if(bt.trigger(this._element,jW).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,h=this._element.style.overflowY;h==="hidden"||this._element.classList.contains(_m)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(_m),this._queueCallback(()=>{this._element.classList.remove(_m),this._queueCallback(()=>{this._element.style.overflowY=h},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const s=this._element.scrollHeight>document.documentElement.clientHeight,l=this._scrollBar.getWidth(),h=l>0;if(h&&!s){const p=uo()?"paddingLeft":"paddingRight";this._element.style[p]=`${l}px`}if(!h&&s){const p=uo()?"paddingRight":"paddingLeft";this._element.style[p]=`${l}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(s,l){return this.each(function(){const h=hs.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof h[s]>"u")throw new TypeError(`No method named "${s}"`);h[s](l)}})}}bt.on(document,qW,QW,function(r){const s=$t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&r.preventDefault(),bt.one(s,ZT,p=>{p.defaultPrevented||bt.one(s,QT,()=>{Ia(this)&&this.focus()})});const l=$t.findOne(GW);l&&hs.getInstance(l).hide(),hs.getOrCreateInstance(s).toggle(this)});Qh(hs);po(hs);const XW="offcanvas",tG="bs.offcanvas",Ai=`.${tG}`,JT=".data-api",eG=`load${Ai}${JT}`,nG="Escape",wx="show",_x="showing",Ax="hiding",oG="offcanvas-backdrop",XT=".offcanvas.show",iG=`show${Ai}`,rG=`shown${Ai}`,sG=`hide${Ai}`,Cx=`hidePrevented${Ai}`,t5=`hidden${Ai}`,aG=`resize${Ai}`,cG=`click${Ai}${JT}`,lG=`keydown.dismiss${Ai}`,dG='[data-bs-toggle="offcanvas"]',uG={backdrop:!0,keyboard:!0,scroll:!1},hG={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class lr extends Do{constructor(s,l){super(s,l),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return uG}static get DefaultType(){return hG}static get NAME(){return XW}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){if(this._isShown||bt.trigger(this._element,iG,{relatedTarget:s}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new cb().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(_x);const h=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(wx),this._element.classList.remove(_x),bt.trigger(this._element,rG,{relatedTarget:s})};this._queueCallback(h,this._element,!0)}hide(){if(!this._isShown||bt.trigger(this._element,sG).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ax),this._backdrop.hide();const l=()=>{this._element.classList.remove(wx,Ax),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new cb().reset(),bt.trigger(this._element,t5)};this._queueCallback(l,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const s=()=>{if(this._config.backdrop==="static"){bt.trigger(this._element,Cx);return}this.hide()},l=!!this._config.backdrop;return new KT({className:oG,isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?s:null})}_initializeFocusTrap(){return new YT({trapElement:this._element})}_addEventListeners(){bt.on(this._element,lG,s=>{if(s.key===nG){if(this._config.keyboard){this.hide();return}bt.trigger(this._element,Cx)}})}static jQueryInterface(s){return this.each(function(){const l=lr.getOrCreateInstance(this,s);if(typeof s=="string"){if(l[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);l[s](this)}})}}bt.on(document,cG,dG,function(r){const s=$t.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),cr(this))return;bt.one(s,t5,()=>{Ia(this)&&this.focus()});const l=$t.findOne(XT);l&&l!==s&&lr.getInstance(l).hide(),lr.getOrCreateInstance(s).toggle(this)});bt.on(window,eG,()=>{for(const r of $t.find(XT))lr.getOrCreateInstance(r).show()});bt.on(window,aG,()=>{for(const r of $t.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(r).position!=="fixed"&&lr.getOrCreateInstance(r).hide()});Qh(lr);po(lr);const pG=/^aria-[\w-]*$/i,e5={"*":["class","dir","id","lang","role",pG],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},gG=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),fG=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,mG=(r,s)=>{const l=r.nodeName.toLowerCase();return s.includes(l)?gG.has(l)?!!fG.test(r.nodeValue):!0:s.filter(h=>h instanceof RegExp).some(h=>h.test(l))};function bG(r,s,l){if(!r.length)return r;if(l&&typeof l=="function")return l(r);const p=new window.DOMParser().parseFromString(r,"text/html"),m=[].concat(...p.body.querySelectorAll("*"));for(const k of m){const _=k.nodeName.toLowerCase();if(!Object.keys(s).includes(_)){k.remove();continue}const b=[].concat(...k.attributes),D=[].concat(s["*"]||[],s[_]||[]);for(const x of b)mG(x,D)||k.removeAttribute(x.nodeName)}return p.body.innerHTML}const kG="TemplateFactory",wG={allowList:e5,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},_G={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},AG={entry:"(string|element|function|null)",selector:"(string|element)"};class CG extends Ol{constructor(s){super(),this._config=this._getConfig(s)}static get Default(){return wG}static get DefaultType(){return _G}static get NAME(){return kG}getContent(){return Object.values(this._config.content).map(s=>this._resolvePossibleFunction(s)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(s){return this._checkContent(s),this._config.content={...this._config.content,...s},this}toHtml(){const s=document.createElement("div");s.innerHTML=this._maybeSanitize(this._config.template);for(const[p,m]of Object.entries(this._config.content))this._setContent(s,m,p);const l=s.children[0],h=this._resolvePossibleFunction(this._config.extraClass);return h&&l.classList.add(...h.split(" ")),l}_typeCheckConfig(s){super._typeCheckConfig(s),this._checkContent(s.content)}_checkContent(s){for(const[l,h]of Object.entries(s))super._typeCheckConfig({selector:l,entry:h},AG)}_setContent(s,l,h){const p=$t.findOne(h,s);if(p){if(l=this._resolvePossibleFunction(l),!l){p.remove();return}if(mi(l)){this._putElementInTemplate(ar(l),p);return}if(this._config.html){p.innerHTML=this._maybeSanitize(l);return}p.textContent=l}}_maybeSanitize(s){return this._config.sanitize?bG(s,this._config.allowList,this._config.sanitizeFn):s}_resolvePossibleFunction(s){return Rn(s,[this])}_putElementInTemplate(s,l){if(this._config.html){l.innerHTML="",l.append(s);return}l.textContent=s.textContent}}const vG="tooltip",yG=new Set(["sanitize","allowList","sanitizeFn"]),Am="fade",EG="modal",Uu="show",xG=".tooltip-inner",vx=`.${EG}`,yx="hide.bs.modal",Qc="hover",Cm="focus",DG="click",TG="manual",SG="hide",IG="hidden",MG="show",BG="shown",NG="inserted",PG="click",OG="focusin",LG="focusout",RG="mouseenter",zG="mouseleave",jG={AUTO:"auto",TOP:"top",RIGHT:uo()?"left":"right",BOTTOM:"bottom",LEFT:uo()?"right":"left"},FG={allowList:e5,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},VG={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ba extends Do{constructor(s,l){if(typeof TT>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(s,l),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return FG}static get DefaultType(){return VG}static get NAME(){return vG}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),bt.off(this._element.closest(vx),yx,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const s=bt.trigger(this._element,this.constructor.eventName(MG)),h=(MT(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(s.defaultPrevented||!h)return;this._disposePopper();const p=this._getTipElement();this._element.setAttribute("aria-describedby",p.getAttribute("id"));const{container:m}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(m.append(p),bt.trigger(this._element,this.constructor.eventName(NG))),this._popper=this._createPopper(p),p.classList.add(Uu),"ontouchstart"in document.documentElement)for(const _ of[].concat(...document.body.children))bt.on(_,"mouseover",wh);const k=()=>{bt.trigger(this._element,this.constructor.eventName(BG)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(k,this.tip,this._isAnimated())}hide(){if(!this._isShown()||bt.trigger(this._element,this.constructor.eventName(SG)).defaultPrevented)return;if(this._getTipElement().classList.remove(Uu),"ontouchstart"in document.documentElement)for(const p of[].concat(...document.body.children))bt.off(p,"mouseover",wh);this._activeTrigger[DG]=!1,this._activeTrigger[Cm]=!1,this._activeTrigger[Qc]=!1,this._isHovered=null;const h=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),bt.trigger(this._element,this.constructor.eventName(IG)))};this._queueCallback(h,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(s){const l=this._getTemplateFactory(s).toHtml();if(!l)return null;l.classList.remove(Am,Uu),l.classList.add(`bs-${this.constructor.NAME}-auto`);const h=DU(this.constructor.NAME).toString();return l.setAttribute("id",h),this._isAnimated()&&l.classList.add(Am),l}setContent(s){this._newContent=s,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(s){return this._templateFactory?this._templateFactory.changeContent(s):this._templateFactory=new CG({...this._config,content:s,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[xG]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(s){return this.constructor.getOrCreateInstance(s.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Am)}_isShown(){return this.tip&&this.tip.classList.contains(Uu)}_createPopper(s){const l=Rn(this._config.placement,[this,s,this._element]),h=jG[l.toUpperCase()];return rk(this._element,s,this._getPopperConfig(h))}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(l=>Number.parseInt(l,10)):typeof s=="function"?l=>s(l,this._element):s}_resolvePossibleFunction(s){return Rn(s,[this._element])}_getPopperConfig(s){const l={placement:s,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:h=>{this._getTipElement().setAttribute("data-popper-placement",h.state.placement)}}]};return{...l,...Rn(this._config.popperConfig,[l])}}_setListeners(){const s=this._config.trigger.split(" ");for(const l of s)if(l==="click")bt.on(this._element,this.constructor.eventName(PG),this._config.selector,h=>{this._initializeOnDelegatedTarget(h).toggle()});else if(l!==TG){const h=l===Qc?this.constructor.eventName(RG):this.constructor.eventName(OG),p=l===Qc?this.constructor.eventName(zG):this.constructor.eventName(LG);bt.on(this._element,h,this._config.selector,m=>{const k=this._initializeOnDelegatedTarget(m);k._activeTrigger[m.type==="focusin"?Cm:Qc]=!0,k._enter()}),bt.on(this._element,p,this._config.selector,m=>{const k=this._initializeOnDelegatedTarget(m);k._activeTrigger[m.type==="focusout"?Cm:Qc]=k._element.contains(m.relatedTarget),k._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},bt.on(this._element.closest(vx),yx,this._hideModalHandler)}_fixTitle(){const s=this._element.getAttribute("title");s&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",s),this._element.setAttribute("data-bs-original-title",s),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(s,l){clearTimeout(this._timeout),this._timeout=setTimeout(s,l)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(s){const l=bi.getDataAttributes(this._element);for(const h of Object.keys(l))yG.has(h)&&delete l[h];return s={...l,...typeof s=="object"&&s?s:{}},s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s.container=s.container===!1?document.body:ar(s.container),typeof s.delay=="number"&&(s.delay={show:s.delay,hide:s.delay}),typeof s.title=="number"&&(s.title=s.title.toString()),typeof s.content=="number"&&(s.content=s.content.toString()),s}_getDelegateConfig(){const s={};for(const[l,h]of Object.entries(this._config))this.constructor.Default[l]!==h&&(s[l]=h);return s.selector=!1,s.trigger="manual",s}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(s){return this.each(function(){const l=Ba.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof l[s]>"u")throw new TypeError(`No method named "${s}"`);l[s]()}})}}po(Ba);const HG="popover",$G=".popover-header",UG=".popover-body",qG={...Ba.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},WG={...Ba.DefaultType,content:"(null|string|element|function)"};class lk extends Ba{static get Default(){return qG}static get DefaultType(){return WG}static get NAME(){return HG}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[$G]:this._getTitle(),[UG]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(s){return this.each(function(){const l=lk.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof l[s]>"u")throw new TypeError(`No method named "${s}"`);l[s]()}})}}po(lk);const GG="scrollspy",KG="bs.scrollspy",dk=`.${KG}`,YG=".data-api",QG=`activate${dk}`,Ex=`click${dk}`,ZG=`load${dk}${YG}`,JG="dropdown-item",Zs="active",XG='[data-bs-spy="scroll"]',vm="[href]",tK=".nav, .list-group",xx=".nav-link",eK=".nav-item",nK=".list-group-item",oK=`${xx}, ${eK} > ${xx}, ${nK}`,iK=".dropdown",rK=".dropdown-toggle",sK={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},aK={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Xh extends Do{constructor(s,l){super(s,l),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sK}static get DefaultType(){return aK}static get NAME(){return GG}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const s of this._observableSections.values())this._observer.observe(s)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(s){return s.target=ar(s.target)||document.body,s.rootMargin=s.offset?`${s.offset}px 0px -30%`:s.rootMargin,typeof s.threshold=="string"&&(s.threshold=s.threshold.split(",").map(l=>Number.parseFloat(l))),s}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(bt.off(this._config.target,Ex),bt.on(this._config.target,Ex,vm,s=>{const l=this._observableSections.get(s.target.hash);if(l){s.preventDefault();const h=this._rootElement||window,p=l.offsetTop-this._element.offsetTop;if(h.scrollTo){h.scrollTo({top:p,behavior:"smooth"});return}h.scrollTop=p}}))}_getNewObserver(){const s={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(l=>this._observerCallback(l),s)}_observerCallback(s){const l=k=>this._targetLinks.get(`#${k.target.id}`),h=k=>{this._previousScrollData.visibleEntryTop=k.target.offsetTop,this._process(l(k))},p=(this._rootElement||document.documentElement).scrollTop,m=p>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=p;for(const k of s){if(!k.isIntersecting){this._activeTarget=null,this._clearActiveClass(l(k));continue}const _=k.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(m&&_){if(h(k),!p)return;continue}!m&&!_&&h(k)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const s=$t.find(vm,this._config.target);for(const l of s){if(!l.hash||cr(l))continue;const h=$t.findOne(decodeURI(l.hash),this._element);Ia(h)&&(this._targetLinks.set(decodeURI(l.hash),l),this._observableSections.set(l.hash,h))}}_process(s){this._activeTarget!==s&&(this._clearActiveClass(this._config.target),this._activeTarget=s,s.classList.add(Zs),this._activateParents(s),bt.trigger(this._element,QG,{relatedTarget:s}))}_activateParents(s){if(s.classList.contains(JG)){$t.findOne(rK,s.closest(iK)).classList.add(Zs);return}for(const l of $t.parents(s,tK))for(const h of $t.prev(l,oK))h.classList.add(Zs)}_clearActiveClass(s){s.classList.remove(Zs);const l=$t.find(`${vm}.${Zs}`,s);for(const h of l)h.classList.remove(Zs)}static jQueryInterface(s){return this.each(function(){const l=Xh.getOrCreateInstance(this,s);if(typeof s=="string"){if(l[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);l[s]()}})}}bt.on(window,ZG,()=>{for(const r of $t.find(XG))Xh.getOrCreateInstance(r)});po(Xh);const cK="tab",lK="bs.tab",ms=`.${lK}`,dK=`hide${ms}`,uK=`hidden${ms}`,hK=`show${ms}`,pK=`shown${ms}`,gK=`click${ms}`,fK=`keydown${ms}`,mK=`load${ms}`,bK="ArrowLeft",Dx="ArrowRight",kK="ArrowUp",Tx="ArrowDown",ym="Home",Sx="End",Zr="active",Ix="fade",Em="show",wK="dropdown",n5=".dropdown-toggle",_K=".dropdown-menu",xm=`:not(${n5})`,AK='.list-group, .nav, [role="tablist"]',CK=".nav-item, .list-group-item",vK=`.nav-link${xm}, .list-group-item${xm}, [role="tab"]${xm}`,o5='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Dm=`${vK}, ${o5}`,yK=`.${Zr}[data-bs-toggle="tab"], .${Zr}[data-bs-toggle="pill"], .${Zr}[data-bs-toggle="list"]`;class xa extends Do{constructor(s){super(s),this._parent=this._element.closest(AK),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),bt.on(this._element,fK,l=>this._keydown(l)))}static get NAME(){return cK}show(){const s=this._element;if(this._elemIsActive(s))return;const l=this._getActiveElem(),h=l?bt.trigger(l,dK,{relatedTarget:s}):null;bt.trigger(s,hK,{relatedTarget:l}).defaultPrevented||h&&h.defaultPrevented||(this._deactivate(l,s),this._activate(s,l))}_activate(s,l){if(!s)return;s.classList.add(Zr),this._activate($t.getElementFromSelector(s));const h=()=>{if(s.getAttribute("role")!=="tab"){s.classList.add(Em);return}s.removeAttribute("tabindex"),s.setAttribute("aria-selected",!0),this._toggleDropDown(s,!0),bt.trigger(s,pK,{relatedTarget:l})};this._queueCallback(h,s,s.classList.contains(Ix))}_deactivate(s,l){if(!s)return;s.classList.remove(Zr),s.blur(),this._deactivate($t.getElementFromSelector(s));const h=()=>{if(s.getAttribute("role")!=="tab"){s.classList.remove(Em);return}s.setAttribute("aria-selected",!1),s.setAttribute("tabindex","-1"),this._toggleDropDown(s,!1),bt.trigger(s,uK,{relatedTarget:l})};this._queueCallback(h,s,s.classList.contains(Ix))}_keydown(s){if(![bK,Dx,kK,Tx,ym,Sx].includes(s.key))return;s.stopPropagation(),s.preventDefault();const l=this._getChildren().filter(p=>!cr(p));let h;if([ym,Sx].includes(s.key))h=l[s.key===ym?0:l.length-1];else{const p=[Dx,Tx].includes(s.key);h=sk(l,s.target,p,!0)}h&&(h.focus({preventScroll:!0}),xa.getOrCreateInstance(h).show())}_getChildren(){return $t.find(Dm,this._parent)}_getActiveElem(){return this._getChildren().find(s=>this._elemIsActive(s))||null}_setInitialAttributes(s,l){this._setAttributeIfNotExists(s,"role","tablist");for(const h of l)this._setInitialAttributesOnChild(h)}_setInitialAttributesOnChild(s){s=this._getInnerElement(s);const l=this._elemIsActive(s),h=this._getOuterElement(s);s.setAttribute("aria-selected",l),h!==s&&this._setAttributeIfNotExists(h,"role","presentation"),l||s.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(s,"role","tab"),this._setInitialAttributesOnTargetPanel(s)}_setInitialAttributesOnTargetPanel(s){const l=$t.getElementFromSelector(s);l&&(this._setAttributeIfNotExists(l,"role","tabpanel"),s.id&&this._setAttributeIfNotExists(l,"aria-labelledby",`${s.id}`))}_toggleDropDown(s,l){const h=this._getOuterElement(s);if(!h.classList.contains(wK))return;const p=(m,k)=>{const _=$t.findOne(m,h);_&&_.classList.toggle(k,l)};p(n5,Zr),p(_K,Em),h.setAttribute("aria-expanded",l)}_setAttributeIfNotExists(s,l,h){s.hasAttribute(l)||s.setAttribute(l,h)}_elemIsActive(s){return s.classList.contains(Zr)}_getInnerElement(s){return s.matches(Dm)?s:$t.findOne(Dm,s)}_getOuterElement(s){return s.closest(CK)||s}static jQueryInterface(s){return this.each(function(){const l=xa.getOrCreateInstance(this);if(typeof s=="string"){if(l[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);l[s]()}})}}bt.on(document,gK,o5,function(r){["A","AREA"].includes(this.tagName)&&r.preventDefault(),!cr(this)&&xa.getOrCreateInstance(this).show()});bt.on(window,mK,()=>{for(const r of $t.find(yK))xa.getOrCreateInstance(r)});po(xa);const EK="toast",xK="bs.toast",gr=`.${xK}`,DK=`mouseover${gr}`,TK=`mouseout${gr}`,SK=`focusin${gr}`,IK=`focusout${gr}`,MK=`hide${gr}`,BK=`hidden${gr}`,NK=`show${gr}`,PK=`shown${gr}`,OK="fade",Mx="hide",qu="show",Wu="showing",LK={animation:"boolean",autohide:"boolean",delay:"number"},RK={animation:!0,autohide:!0,delay:5e3};class tp extends Do{constructor(s,l){super(s,l),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return RK}static get DefaultType(){return LK}static get NAME(){return EK}show(){if(bt.trigger(this._element,NK).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(OK);const l=()=>{this._element.classList.remove(Wu),bt.trigger(this._element,PK),this._maybeScheduleHide()};this._element.classList.remove(Mx),Pl(this._element),this._element.classList.add(qu,Wu),this._queueCallback(l,this._element,this._config.animation)}hide(){if(!this.isShown()||bt.trigger(this._element,MK).defaultPrevented)return;const l=()=>{this._element.classList.add(Mx),this._element.classList.remove(Wu,qu),bt.trigger(this._element,BK)};this._element.classList.add(Wu),this._queueCallback(l,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(qu),super.dispose()}isShown(){return this._element.classList.contains(qu)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(s,l){switch(s.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=l;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=l;break}}if(l){this._clearTimeout();return}const h=s.relatedTarget;this._element===h||this._element.contains(h)||this._maybeScheduleHide()}_setListeners(){bt.on(this._element,DK,s=>this._onInteraction(s,!0)),bt.on(this._element,TK,s=>this._onInteraction(s,!1)),bt.on(this._element,SK,s=>this._onInteraction(s,!0)),bt.on(this._element,IK,s=>this._onInteraction(s,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(s){return this.each(function(){const l=tp.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof l[s]>"u")throw new TypeError(`No method named "${s}"`);l[s](this)}})}}Qh(tp);po(tp);const zK={components:{result:R$,Modal:hs},props:["quiz","endCourse"],data(){return{questions:[],question:null,questionIndex:0,intervalId:null,timer:0,timerSoal:0,jumlah_ekstra:0,isModalVisible:!1,hintData:null}},methods:{accessImage(r){if(r)return`/api/apiImage/${r}`},getQuestion(){this.questions=this.quiz.soal.map(r=>({...r,answer:r.answer.map(s=>({...s,isSelected:!1}))})),this.question=this.questions[this.questionIndex],this.startTimer(),this.hitungMundur()},startTimer(){this.intervalId=setInterval(()=>{this.timer++},1e3)},hitungMundur(){this.timerSoal=this.questions[0].minutes*60,this.intervalId=setInterval(()=>{this.timerSoal>0?this.timerSoal--:this.submit()},1e3)},async submit(){if(!this.questions.every(k=>k.answer.some(_=>_.isSelected))&&this.timerSoal>0){this.$swal("Error","Lengkapi jawaban terlebih dahulu","error");return}clearInterval(this.intervalId);let s=0,l=0;this.questions.forEach(k=>{k.type=="single"?k.answer.some(b=>b.isSelected&&b.isCorrect)?s++:l++:k.answer.every(b=>b.isSelected==b.isCorrect)?s++:l++});const h=()=>{let k=this.questions[0].minutes*60,_=Math.floor(k/60),b=k%60;return b=b<10?"0"+b:b,_=_<10?"0"+_:_,_+":"+b},p=this.questions.length;let m={enrolled:this.quiz.enrolled,quiz:this.quiz.id_category,correct_answer:s,wrong_answer:l,total_question:p,duration:this.timerSoal>0?this.makeTimer:h()};try{(await $e.post("/api/student/postAnswerQuiz",m)).data.success&&this.$emit("refresh")}catch(k){console.log(k)}},tryagain(){delete this.quiz.result},next(){this.$emit("next")},async usedHint(){const{data:r}=await $e.get(`/api/student/usedHint/${localStorage.getItem("id")}`),{data:s}=await $e.get(`/api/student/getHint/${this.question.id}`);r.message=="success"?(this.hintData=s.hint,this.showModal()):this.$swal("Error","Tidak ada point Hint yang tersisa. Hint gagal digunakan","error")},async closedHint(){const r=await $e.delete(`/api/student/deleteVisitedCourse/${this.quiz.enrolled}/${this.quiz.id}`);this.jumlah_ekstra=r.data.extra_hint,$("#jumlah_extra_hint").text(this.jumlah_ekstra)},showModal(){this.isModalVisible=!0,$("#exampleModal").modal({backdrop:"static",keyboard:!1}),$("#exampleModal").modal("show")},async closeModal(){await this.closedHint(),this.isModalVisible=!1,this.hintData=null,$("#exampleModal").modal("hide")}},computed:{makeTimer(){let r=Math.floor(this.timer/60),s=this.timer%60;return s=s<10?"0"+s:s,r=r<10?"0"+r:r,r+":"+s},makeTimerSoal(){let r=Math.floor(this.timerSoal/60),s=this.timerSoal%60;return s=s<10?"0"+s:s,r=r<10?"0"+r:r,r+":"+s}}},jK={class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true","data-backdrop":"static","data-keyboard":"false"},FK={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl",role:"document"},VK={class:"modal-content"},HK={class:"modal-header"},$K=R("h5",{class:"modal-title",id:"exampleModalLabel"},"Hint",-1),UK=R("span",{"aria-hidden":"true"},"×",-1),qK=[UK],WK={class:"modal-body"},GK=["innerHTML"],KK=R("small",{class:"text-danger text-center"},[xn(" * Mohon perhatikan dengan baik hint yang diberikan agar dapat membantu anda dalam mengerjakan soal quiz ini. "),R("br"),xn(" Jika anda menutup hint ini, maka point hint yang anda gunakan tidak akan dikembalikan. ")],-1),YK={class:"modal-footer"},QK={key:0,class:"bg-white",style:{"padding-bottom":"9rem","padding-left":"20rem"}},ZK={key:0,class:"content p-5"},JK={class:"card card-quiz text-left",style:{"margin-top":"3rem"}},XK={class:"row"},tY={class:"col-3 d-flex align-items-center"},eY={class:"row p-3"},nY={id:"timer"},oY={class:"col-5 d-flex align-items-center justify-content-center"},iY={key:0,class:"mx-1 pages pages-code d-flex justify-content-end align-items-center"},rY={class:"d-flex justify-content-center align-items-center button-hint"},sY={class:"col-4 d-flex justify-content-end align-items-center pe-5"},aY={class:"row"},cY={class:"col"},lY={class:"col"},dY={class:"col"},uY={class:"row"},hY={class:"col-9"},pY={class:"box-recommend min-height-recommend p-5"},gY={class:"d-flex justify-content-center"},fY=["src"],mY={class:"my-2",style:{"font-size":"20px","font-weight":"500"}},bY={class:"d-flex justify-content-start"},kY={class:"d-flex flex-column"},wY={class:"p-2"},_Y=["name","checked","onClick"],AY=["checked","onClick"],CY={class:"p-2"},vY={style:{"font-size":"19px"}},yY={class:"col"},EY={class:"box-question-number min-height-recommend p-5"},xY=R("h3",{class:"text-white"},"Number of Question",-1),DY={class:"row"},TY=["onClick"],SY={key:1,class:"content p-5"},IY={class:"box-recommend min-height-recommend p-2",style:{"margin-top":"3rem"}},MY={class:"card card-quiz text-left m-5"},BY={class:"row p-4"},NY={class:"col-10 d-flex align-items-center"},PY={class:"row"},OY={class:"d-flex align-items-center"},LY={class:"col-2"},RY={class:"row d-flex align-items-center justify-content-end"},zY={class:"d-flex justify-content-end",style:{"font-weight":"600","padding-right":"30px"}},jY={class:"div d-flex align-items-center justify-content-end"};function FY(r,s,l,h,p,m){var b,D,x,y,A;const k=_n("center"),_=_n("result");return vt(),Dt("div",null,[R("div",jK,[R("div",FK,[R("div",VK,[R("div",HK,[$K,R("button",{type:"button btn",class:"close","aria-label":"Close",onClick:s[0]||(s[0]=(...S)=>m.closeModal&&m.closeModal(...S))},qK)]),R("div",WK,[he(k,null,{default:yo(()=>[R("div",{innerHTML:p.hintData},null,8,GK)]),_:1}),KK]),R("div",YK,[R("button",{type:"button",class:"btn btn-danger btn-block",style:{display:"block",width:"100%"},onClick:s[1]||(s[1]=(...S)=>m.closeModal&&m.closeModal(...S))},"Close")])])])]),(b=l.quiz)!=null&&b.result?(vt(),nr(_,{key:1,quiz:l.quiz.result,endCourse:l.endCourse,onTryagain:m.tryagain,onNext:m.next},null,8,["quiz","endCourse","onTryagain","onNext"])):(vt(),Dt("div",QK,[p.questions.length>0?(vt(),Dt("div",ZK,[R("div",JK,[R("div",XK,[R("div",tY,[R("div",eY,[R("h5",nY,Yt(m.makeTimerSoal)+" min",1),R("h3",null,Yt(l.quiz.name),1)])]),R("div",oY,[l.quiz.soal[0].help_mode=="yes"?(vt(),Dt("div",iY,[R("li",rY,[R("a",{onClick:s[2]||(s[2]=(...S)=>m.usedHint&&m.usedHint(...S)),class:"btn btn-primary"}," Hint ")])])):Ne("",!0)]),R("div",sY,[R("div",aY,[R("div",cY,[p.questionIndex>0?(vt(),Dt("a",{key:0,class:"btn btn-paging-quiz-view",onClick:s[3]||(s[3]=S=>{p.questionIndex--,p.question=p.questions[p.questionIndex]}),id:"previousQuestionButton"},"Previous")):Ne("",!0)]),R("div",lY,[p.questionIndex<l.quiz.soal.length-1?(vt(),Dt("a",{key:0,class:"btn btn-paging-quiz-view",onClick:s[4]||(s[4]=S=>{p.questionIndex++,p.question=p.questions[p.questionIndex]}),id:"nextQuestionButton"},"Next")):Ne("",!0)]),R("div",dY,[p.questionIndex==l.quiz.soal.length-1?(vt(),Dt("a",{key:0,onClick:s[5]||(s[5]=(...S)=>m.submit&&m.submit(...S)),class:"btn btn-paging-quiz-view"},"Submit")):Ne("",!0)])])])])]),R("div",uY,[R("div",hY,[R("div",pY,[R("div",gY,[(D=p.question)!=null&&D.file?(vt(),Dt("img",{key:0,src:m.accessImage((x=p.question)==null?void 0:x.file),width:"300"},null,8,fY)):Ne("",!0)]),R("p",mY,Yt((y=p.question)==null?void 0:y.question),1),R("div",bY,[R("div",kY,[(vt(!0),Dt(be,null,pn((A=p.question)==null?void 0:A.answer,(S,N)=>(vt(),Dt("div",{key:N,class:"d-flex my-2"},[R("div",wY,[p.question.type=="single"?(vt(),Dt("input",{key:0,type:"radio",name:"question-"+p.question.id,checked:S.isSelected,onClick:O=>{p.question.answer.forEach(j=>j.isSelected=!1),S.isSelected=!0}},null,8,_Y)):(vt(),Dt("input",{key:1,type:"checkbox",checked:S.isSelected,onClick:O=>S.isSelected=!S.isSelected},null,8,AY))]),R("div",CY,[R("span",vY,Yt(S.answer),1)])]))),128))])])])]),R("div",yY,[R("div",EY,[xY,R("div",DY,[(vt(!0),Dt(be,null,pn(p.questions,(S,N)=>(vt(),Dt("div",{class:"col",key:N},[R("a",{class:vn(p.questionIndex==N?"btn btn-number-question-active":"btn btn-number-question"),onClick:O=>{p.questionIndex=N,p.question=p.questions[N]}},Yt(N+1),11,TY)]))),128))])])])])])):(vt(),Dt("div",SY,[R("div",IY,[R("div",MY,[R("div",BY,[R("div",NY,[R("div",PY,[R("h3",null,Yt(l.quiz.name),1),R("p",OY,"min. persentage "+Yt(l.quiz.soal[0].percentage)+"% ",1)])]),R("div",LY,[R("div",RY,[R("span",zY,Yt(l.quiz.soal[0].minutes)+" min",1),R("div",jY,[R("a",{onClick:s[6]||(s[6]=(...S)=>m.getQuestion&&m.getQuestion(...S)),class:"btn btn-certificate-view"},"Start")])])])])])])]))]))])}const VY=fn(zK,[["render",FY]]),HY={props:["challenge","endCourse"],methods:{next(){this.$emit("next")},tryagain(){this.$emit("tryagain")}}},$Y={class:"bg-white",style:{"padding-bottom":"9rem","padding-left":"20rem"}},UY={class:"content p-5"},qY=R("div",{class:"card card-quiz text-left",style:{"margin-top":"3rem"}},[R("div",{class:"row"},[R("div",{class:"col-4 d-flex align-items-center"},[R("div",{class:"row p-5"},[R("h3",null,"Your Challenge Result")])])])],-1),WY={class:"box-quiz min-height-quiz"},GY={class:"row"},KY={class:"col p-5"},YY={class:"mb-4"},QY=Rh('<div class="row d-flex justify-content-start mb-2"><div class="col-3"><h5>Exam Score</h5></div><div class="col-3"><h5>Duration (minute)</h5></div><div class="col-3"><h5>Hint Obtained</h5></div><div class="col-3"><h5>Rating</h5></div></div>',1),ZY={class:"row d-flex justify-content-start mb-3"},JY={class:"col-3"},XY={class:"col-3"},tQ={class:"col-3"},eQ={class:"col-3"},nQ={class:"col-9"},oQ={class:"row"},iQ={key:0,class:"col-2"},rQ={key:1,class:"col-2 me-5",id:"endCourse"},sQ=R("a",{class:"btn btn-button",style:{"min-width":"130px"},href:"/student"},"End Course",-1),aQ=[sQ],cQ={key:2,class:"col-2"};function lQ(r,s,l,h,p,m){var k,_,b;return vt(),Dt("div",$Y,[R("div",UY,[qY,R("div",WY,[R("div",GY,[R("div",KY,[R("h3",YY,Yt((k=l.challenge)!=null&&k.isPassed?"Congratulations! You Have Passed This Challenge!":"Unfortunately you didn`t make it through this challenge.."),1),QY,R("div",ZY,[R("div",JY,[R("h5",null,Yt((_=l.challenge)!=null&&_.isPassed?"Correct Answer":"Wrong Answer"),1)]),R("div",XY,[R("h5",null,Yt(l.challenge.time),1)]),R("div",tQ,[R("h5",null,"+"+Yt(l.challenge.score),1)]),R("div",eQ,[R("h5",{style:{"font-weight":"900"},class:vn(l.challenge.isPassed?"text-success":"text-danger")},Yt((b=l.challenge)!=null&&b.isPassed?"Passed":"Failed"),3)])]),R("div",nQ,[R("div",oQ,[l.challenge.isPassed?Ne("",!0):(vt(),Dt("div",iQ,[R("a",{onClick:s[0]||(s[0]=(...D)=>m.tryagain&&m.tryagain(...D)),class:"btn btn-button"},"Try Again")])),l.endCourse?(vt(),Dt("div",rQ,aQ)):Ne("",!0),l.endCourse?Ne("",!0):(vt(),Dt("div",cQ,[R("a",{onClick:s[1]||(s[1]=(...D)=>m.next&&m.next(...D)),id:"nextCourse",class:"btn btn-button"},"Next Lesson ")]))])])])])])])])}const dQ=fn(HY,[["render",lQ]]);const uQ={components:{result:dQ},props:["challenge","endCourse"],data(){return{questions:[],question:null,questionIndex:0,intervalId:null,timer:0}},methods:{statusText(r){switch(r=parseInt(r),r){case 1:return"Easy";case 2:return"Middle";default:return"Hard"}},getQuestions(){this.questions=this.challenge.soal.map(r=>({...r,answer:r.answer.map(s=>({...s,isCorrect:s.isCorrect=="true",isSelected:!1}))})),this.question=this.questions[this.questionIndex],this.startTimer()},startTimer(){this.intervalId=setInterval(()=>{this.timer++},1e3)},accessImage(r){if(r)return`/api/apiImage/${r}`},submit(){if(!this.questions.every(p=>p.answer.some(m=>m.isSelected))){this.$swal("Error","Lengkapi jawaban terlebih dahulu","error");return}const s=this.questions.every(p=>p.answer.every(m=>m.isSelected===m.isCorrect));clearInterval(this.intervalId),console.log(s);const l=localStorage.getItem("id");let h={challenge_id:this.questions[0].challenge.id,score:s?parseInt(this.questions[0].challenge.difficulty):0,time:this.makeTimer};$e.post(`/api/question/${l}/student`,h).then(p=>{this.$swal("Success","Berhasil submit jawaban","success"),window.location.reload()}).catch(p=>{console.log(p),this.$swal("Error","Gagal mengirimkan jawaban","error")})},tryagain(){delete this.challenge.result},next(){this.$emit("next")}},computed:{makeTimer(){let r=Math.floor(this.timer/60),s=this.timer%60;return s=s<10?"0"+s:s,r=r<10?"0"+r:r,r+":"+s}}},hQ={key:0,class:"bg-white",style:{"padding-bottom":"9rem","padding-left":"20rem"}},pQ={key:0,class:"content p-5"},gQ={class:"card card-quiz text-left p-4",style:{"margin-top":"3rem"}},fQ={class:"d-flex"},mQ={class:"p-2 flex-grow-1"},bQ={class:"fw-bold pt-n5"},kQ={class:"p-2"},wQ={class:"row"},_Q={class:"col"},AQ={class:"col"},CQ={class:"col"},vQ={class:"row"},yQ={class:"col-9"},EQ={class:"box-recommend min-height-recommend p-5"},xQ={class:"d-flex justify-content-center"},DQ=["src"],TQ={class:"my-2",style:{"font-size":"20px","font-weight":"500"}},SQ={class:"d-flex justify-content-start"},IQ={class:"d-flex flex-column"},MQ={class:"p-2"},BQ=["name","checked","onClick"],NQ=["checked","onClick"],PQ={class:"p-2"},OQ={style:{"font-size":"19px"}},LQ={class:"col"},RQ={class:"box-question-number min-height-recommend p-5"},zQ=R("h3",{class:"text-white"},"Number of Question",-1),jQ={class:"row"},FQ=["onClick"],VQ={key:1,class:"content p-5"},HQ={class:"box-recommend min-height-recommend p-2",style:{"margin-top":"3rem"}},$Q={class:"card card-quiz text-left m-5"},UQ={class:"row p-4"},qQ={class:"col-10 d-flex align-items-center"},WQ={class:"row"},GQ={class:"d-flex align-items-center"},KQ={class:"col-2"},YQ={class:"row d-flex align-items-center justify-content-end"},QQ={class:"d-flex justify-content-end",style:{"font-weight":"600","padding-right":"30px"}},ZQ=R("a",{class:"btn btn-certificate-view"},"Start",-1),JQ=[ZQ];function XQ(r,s,l,h,p,m){var _,b,D,x,y,A;const k=_n("result");return vt(),Dt("div",null,[(_=l.challenge)!=null&&_.result?(vt(),nr(k,{key:1,endCourse:l.endCourse,challenge:(A=l.challenge)==null?void 0:A.result,onTryagain:m.tryagain,onNext:m.next},null,8,["endCourse","challenge","onTryagain","onNext"])):(vt(),Dt("div",hQ,[p.questions.length>0?(vt(),Dt("div",pQ,[R("div",gQ,[R("div",fQ,[R("div",mQ,[R("h5",null,Yt(m.makeTimer)+" min",1),R("h3",bQ,Yt(p.questions[0].challenge.nama),1)]),R("div",kQ,[R("div",wQ,[R("div",_Q,[p.questionIndex>0?(vt(),Dt("a",{key:0,class:"btn btn-paging-quiz-view",onClick:s[0]||(s[0]=S=>{p.questionIndex--,p.question=p.questions[p.questionIndex]}),id:"previousQuestionButton"},"Previous")):Ne("",!0)]),R("div",AQ,[p.questionIndex<l.challenge.soal.length-1?(vt(),Dt("a",{key:0,class:"btn btn-paging-quiz-view",onClick:s[1]||(s[1]=S=>{p.questionIndex++,p.question=p.questions[p.questionIndex]}),id:"nextQuestionButton"},"Next")):Ne("",!0)]),R("div",CQ,[p.questionIndex==l.challenge.soal.length-1?(vt(),Dt("a",{key:0,onClick:s[2]||(s[2]=(...S)=>m.submit&&m.submit(...S)),class:"btn btn-paging-quiz-view"},"Submit")):Ne("",!0)])])])])]),R("div",vQ,[R("div",yQ,[R("div",EQ,[R("div",xQ,[(b=p.question)!=null&&b.file?(vt(),Dt("img",{key:0,src:m.accessImage((D=p.question)==null?void 0:D.file),width:"300"},null,8,DQ)):Ne("",!0)]),R("p",TQ,Yt((x=p.question)==null?void 0:x.question),1),R("div",SQ,[R("div",IQ,[(vt(!0),Dt(be,null,pn((y=p.question)==null?void 0:y.answer,(S,N)=>(vt(),Dt("div",{key:N,class:"d-flex my-2"},[R("div",MQ,[p.question.type=="single"?(vt(),Dt("input",{key:0,type:"radio",name:"question-"+p.question.id,checked:S.isSelected,onClick:O=>{p.question.answer.forEach(j=>j.isSelected=!1),S.isSelected=!0}},null,8,BQ)):(vt(),Dt("input",{key:1,type:"checkbox",checked:S.isSelected,onClick:O=>S.isSelected=!S.isSelected},null,8,NQ))]),R("div",PQ,[R("span",OQ,Yt(S.answer),1)])]))),128))])])])]),R("div",LQ,[R("div",RQ,[zQ,R("div",jQ,[(vt(!0),Dt(be,null,pn(p.questions,(S,N)=>(vt(),Dt("div",{class:"col",key:N},[R("a",{class:vn(p.questionIndex==N?"btn btn-number-question-active":"btn btn-number-question"),onClick:O=>{p.questionIndex=N,p.question=p.questions[N]}},Yt(N+1),11,FQ)]))),128))])])])])])):(vt(),Dt("div",VQ,[R("div",HQ,[R("div",$Q,[R("div",UQ,[R("div",qQ,[R("div",WQ,[R("h3",null,Yt(l.challenge.soal[0].challenge.nama),1),R("p",GQ,"Hint can get : "+Yt(l.challenge.soal[0].challenge.difficulty),1)])]),R("div",KQ,[R("div",YQ,[R("span",QQ,Yt(m.statusText(l.challenge.soal[0].challenge.difficulty)),1),R("div",{class:"div d-flex align-items-center justify-content-end",onClick:s[3]||(s[3]=(...S)=>m.getQuestions&&m.getQuestions(...S))},JQ)])])])])])]))]))])}const tZ=fn(uQ,[["render",XQ]]),eZ={components:{Header:RH,sidenav:n$,lesson:p$,quiz:VY,challenge:tZ},data(){return{courses:[],progress:0,loading:!1,curriculumSelected:null,groupedByChapter:{},isHeader:!1,endCourse:!1,isDisableNext:!1}},methods:{async getCourse(){var r;try{this.loading=!0;const s=localStorage.getItem("id"),l=this.$route.params.id,{data:h}=await $e.get(`/api/student/course/${s}/${l}`);this.courses=h.curriculum.map(p=>{var m;return{...p,enrolled:(m=h.enrolled)==null?void 0:m.id}}),this.progress=h.progress,this.kelompokkanByChapter(),((r=this.curriculumSelected)==null?void 0:r.challenge)!="challenge"&&!this.isHeader&&this.setCurriculumFirst(),this.endCourseAktivation()}catch(s){console.log(s)}finally{this.loading=!1}},kelompokkanByChapter(){let r={};this.courses.forEach(s=>{const{id:l,courses:h,name:p,created_at:m,updated_at:k}=s.chapter,_=l;r[_]||(r[_]={id:l,courses:h,name:p,created_at:m,updated_at:k,curriculum:[],collapsed:!0}),r[_].curriculum.push(s)}),this.groupedByChapter=r},setCurriculumFirst(){if(this.courses[0].next==!1)this.visitedCourse(this.courses[0],!0);else{const r=this.groupedByChapter,s=Object.keys(r).reduce((h,p)=>{const m=r[p],_=m.curriculum.filter(b=>b.category!=="challenge").map(b=>({...b,chapter:{id:m.id,name:m.name,created_at:m.created_at,updated_at:m.updated_at}}));return[...h,..._]},[]),l=s.findLastIndex(h=>h.next==!0);this.curriculumSelected=s[l]}},async visitedCourse(r,s){try{let l=r.id,h=r.enrolled;await $e.post("/api/student/visitedCourse",{curriculum:l,enrolled:h,next:s}),r.category=="challenge"?(this.curriculumSelected=r,this.groupedByChapter[r.chapter.id].curriculum.forEach(p=>{p.id==r.id&&(p.next=!0,p.isVisited=!0)})):this.getCourse()}catch(l){console.log(l)}},openCurriculum(r){var s;r.category=="challenge"&&(this.curriculumSelected=r,r.next==!1&&this.visitedCourse(r,!0)),((s=this.curriculumSelected)==null?void 0:s.id)!=(r==null?void 0:r.id)&&(this.isHeader=!1,!r.next&&!this.isDisableNext?this.visitedCourse(r,!0):r.next&&(this.curriculumSelected=r)),this.endCourseAktivation()},previous(){this.isHeader=!0;let r=this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum.findIndex(s=>s.id==this.curriculumSelected.id);if(r!=0){let s=this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum[r-1];s.category=="challenge"?(this.curriculumSelected=s,s.next==!1&&this.visitedCourse(s,!0),this.groupedByChapter[s.chapter.id].curriculum.forEach(l=>{l.id==s.id&&(l.next=!0,l.isVisited=!0)})):s.next==!0&&(this.curriculumSelected=s)}else{let s=Object.keys(this.groupedByChapter).findIndex(l=>l==this.curriculumSelected.chapter.id);if(s!=0){let l=this.groupedByChapter[Object.keys(this.groupedByChapter)[s-1]].curriculum.length-1;this.groupedByChapter[Object.keys(this.groupedByChapter)[s-1]].curriculum[l]}this.curriculumSelected=curriculumSelected}this.endCourseAktivation()},next(){this.isHeader=!0;let r=this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum.findIndex(l=>l.id==this.curriculumSelected.id),s=this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum.length-1;if(r!=s){let l=this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum[r+1];l.category=="challenge"?(this.curriculumSelected=l,l.next==!1&&this.visitedCourse(l,!0),this.groupedByChapter[l.chapter.id].curriculum.forEach(h=>{h.id==l.id&&(h.next=!0,h.isVisited=!0)})):l.next==!0?this.curriculumSelected=l:this.isDisableNext||(this.curriculumSelected=l,this.visitedCourse(l,!0))}else{let l=Object.keys(this.groupedByChapter).findIndex(h=>h==this.curriculumSelected.chapter.id);if(l!=Object.keys(this.groupedByChapter).length-1){let h=this.groupedByChapter[Object.keys(this.groupedByChapter)[l+1]].curriculum[0];this.curriculumSelected=h,h.next==!1&&this.visitedCourse(h,!0)}}this.endCourseAktivation()},endCourseAktivation(){const r=this.groupedByChapter,s=Object.keys(r).reduce((h,p)=>{const m=r[p],k=m.curriculum.map(_=>({..._,chapter:{id:m.id,name:m.name,created_at:m.created_at,updated_at:m.updated_at}}));return[...h,...k]},[]),l=s.filter(h=>h.next==!0);l.length==s.length&&(this.curriculumSelected.id==l[l.length-1].id?this.endCourse=!0:this.endCourse=!1)}},created(){this.getCourse()},watch:{curriculumSelected:{handler:function(r,s){var l;(r==null?void 0:r.category)=="quiz"&&(r!=null&&r.result?(l=r==null?void 0:r.result)!=null&&l.isPassed?this.isDisableNext=!1:this.isDisableNext=!0:this.isDisableNext=!0)},deep:!0},courses:{handler:function(r,s){this.curriculumSelected&&(this.curriculumSelected=r.find(l=>l.id==this.curriculumSelected.id))},deep:!0}}},nZ={key:0},oZ={class:"margin-left"};function iZ(r,s,l,h,p,m){var y,A,S;const k=_n("Header"),_=_n("sidenav"),b=_n("lesson"),D=_n("quiz"),x=_n("challenge");return vt(),Dt("div",null,[p.loading?Ne("",!0):(vt(),Dt("div",nZ,[he(k,{progress:p.progress,cekAllCourse:p.endCourse,onPrevious:m.previous,onNext:m.next,isDisableNext:p.isDisableNext},null,8,["progress","cekAllCourse","onPrevious","onNext","isDisableNext"]),he(_,{courses:p.groupedByChapter,onRefresh:m.getCourse,onOpenCurriculum:m.openCurriculum,isDisableNext:p.isDisableNext,curriculumActive:p.curriculumSelected},null,8,["courses","onRefresh","onOpenCurriculum","isDisableNext","curriculumActive"]),R("div",oZ,[((y=p.curriculumSelected)==null?void 0:y.category)=="lesson"?(vt(),nr(b,{key:0,lesson:p.curriculumSelected},null,8,["lesson"])):((A=p.curriculumSelected)==null?void 0:A.category)=="quiz"?(vt(),nr(D,{key:1,quiz:p.curriculumSelected,onRefresh:m.getCourse,onNext:m.next,endCourse:p.endCourse},null,8,["quiz","onRefresh","onNext","endCourse"])):((S=p.curriculumSelected)==null?void 0:S.category)=="challenge"?(vt(),nr(x,{key:2,challenge:p.curriculumSelected,onRefresh:m.getCourse,onNext:m.next,endCourse:p.endCourse},null,8,["challenge","onRefresh","onNext","endCourse"])):Ne("",!0)])]))])}const rZ=fn(eZ,[["render",iZ]]),sZ=$6({history:r6(),routes:[{path:"/admin/add-challenge",name:"teacher",component:w9},{path:"/admin/add-challenge/:id",name:"questionTeacher",component:uV},{path:"/admin/result/:id",name:"resultTeacher",component:wV},{path:"/admin/quiz/add-question/:id",name:"questionQuiz",component:kH},{path:"/course/:id",name:"course",component:rZ}]});var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i5={exports:{}};/*!
* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(r,s){(function(l,h){r.exports=h()})(Wi,function(){const l="SweetAlert2:",h=v=>{const E=[];for(let B=0;B<v.length;B++)E.indexOf(v[B])===-1&&E.push(v[B]);return E},p=v=>v.charAt(0).toUpperCase()+v.slice(1),m=v=>Array.prototype.slice.call(v),k=v=>{console.warn("".concat(l," ").concat(typeof v=="object"?v.join(" "):v))},_=v=>{console.error("".concat(l," ").concat(v))},b=[],D=v=>{b.includes(v)||(b.push(v),k(v))},x=(v,E)=>{D('"'.concat(v,'" is deprecated and will be removed in the next major release. Please use "').concat(E,'" instead.'))},y=v=>typeof v=="function"?v():v,A=v=>v&&typeof v.toPromise=="function",S=v=>A(v)?v.toPromise():Promise.resolve(v),N=v=>v&&Promise.resolve(v)===v,O={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},j=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],G={},W=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],F=v=>Object.prototype.hasOwnProperty.call(O,v),H=v=>j.indexOf(v)!==-1,Q=v=>G[v],J=v=>{F(v)||k('Unknown parameter "'.concat(v,'"'))},et=v=>{W.includes(v)&&k('The parameter "'.concat(v,'" is incompatible with toasts'))},nt=v=>{Q(v)&&x(v,Q(v))},P=v=>{!v.backdrop&&v.allowOutsideClick&&k('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const E in v)J(E),v.toast&&et(E),nt(E)},tt="swal2-",ft=v=>{const E={};for(const B in v)E[v[B]]=tt+v[B];return E},U=ft(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),_t=ft(["success","warning","info","question","error"]),Ot=()=>document.body.querySelector(".".concat(U.container)),Ut=v=>{const E=Ot();return E?E.querySelector(v):null},mt=v=>Ut(".".concat(v)),yt=()=>mt(U.popup),Mt=()=>mt(U.icon),Ee=()=>mt(U.title),qt=()=>mt(U["html-container"]),Re=()=>mt(U.image),_e=()=>mt(U["progress-steps"]),At=()=>mt(U["validation-message"]),jt=()=>Ut(".".concat(U.actions," .").concat(U.confirm)),te=()=>Ut(".".concat(U.actions," .").concat(U.deny)),re=()=>mt(U["input-label"]),it=()=>Ut(".".concat(U.loader)),ct=()=>Ut(".".concat(U.actions," .").concat(U.cancel)),Et=()=>mt(U.actions),It=()=>mt(U.footer),Wt=()=>mt(U["timer-progress-bar"]),ee=()=>mt(U.close),V=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,K=()=>{const v=m(yt().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((B,q)=>{const dt=parseInt(B.getAttribute("tabindex")),Vt=parseInt(q.getAttribute("tabindex"));return dt>Vt?1:dt<Vt?-1:0}),E=m(yt().querySelectorAll(V)).filter(B=>B.getAttribute("tabindex")!=="-1");return h(v.concat(E)).filter(B=>We(B))},Z=()=>!ht(document.body,U["toast-shown"])&&!ht(document.body,U["no-backdrop"]),at=()=>yt()&&ht(yt(),U.toast),st=()=>yt().hasAttribute("data-loading"),Ct={previousBodyPadding:null},kt=(v,E)=>{if(v.textContent="",E){const q=new DOMParser().parseFromString(E,"text/html");m(q.querySelector("head").childNodes).forEach(dt=>{v.appendChild(dt)}),m(q.querySelector("body").childNodes).forEach(dt=>{v.appendChild(dt)})}},ht=(v,E)=>{if(!E)return!1;const B=E.split(/\s+/);for(let q=0;q<B.length;q++)if(!v.classList.contains(B[q]))return!1;return!0},xt=(v,E)=>{m(v.classList).forEach(B=>{!Object.values(U).includes(B)&&!Object.values(_t).includes(B)&&!Object.values(E.showClass).includes(B)&&v.classList.remove(B)})},rt=(v,E,B)=>{if(xt(v,E),E.customClass&&E.customClass[B]){if(typeof E.customClass[B]!="string"&&!E.customClass[B].forEach)return k("Invalid type of customClass.".concat(B,'! Expected string or iterable object, got "').concat(typeof E.customClass[B],'"'));St(v,E.customClass[B])}},wt=(v,E)=>{if(!E)return null;switch(E){case"select":case"textarea":case"file":return v.querySelector(".".concat(U.popup," > .").concat(U[E]));case"checkbox":return v.querySelector(".".concat(U.popup," > .").concat(U.checkbox," input"));case"radio":return v.querySelector(".".concat(U.popup," > .").concat(U.radio," input:checked"))||v.querySelector(".".concat(U.popup," > .").concat(U.radio," input:first-child"));case"range":return v.querySelector(".".concat(U.popup," > .").concat(U.range," input"));default:return v.querySelector(".".concat(U.popup," > .").concat(U.input))}},Nt=v=>{if(v.focus(),v.type!=="file"){const E=v.value;v.value="",v.value=E}},Rt=(v,E,B)=>{!v||!E||(typeof E=="string"&&(E=E.split(/\s+/).filter(Boolean)),E.forEach(q=>{Array.isArray(v)?v.forEach(dt=>{B?dt.classList.add(q):dt.classList.remove(q)}):B?v.classList.add(q):v.classList.remove(q)}))},St=(v,E)=>{Rt(v,E,!0)},Ft=(v,E)=>{Rt(v,E,!1)},Kt=(v,E)=>{const B=m(v.childNodes);for(let q=0;q<B.length;q++)if(ht(B[q],E))return B[q]},pe=(v,E,B)=>{B==="".concat(parseInt(B))&&(B=parseInt(B)),B||parseInt(B)===0?v.style[E]=typeof B=="number"?"".concat(B,"px"):B:v.style.removeProperty(E)},ae=function(v){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";v.style.display=E},we=v=>{v.style.display="none"},mn=(v,E,B,q)=>{const dt=v.querySelector(E);dt&&(dt.style[B]=q)},qo=(v,E,B)=>{E?ae(v,B):we(v)},We=v=>!!(v&&(v.offsetWidth||v.offsetHeight||v.getClientRects().length)),bs=()=>!We(jt())&&!We(te())&&!We(ct()),Ze=v=>v.scrollHeight>v.clientHeight,je=v=>{const E=window.getComputedStyle(v),B=parseFloat(E.getPropertyValue("animation-duration")||"0"),q=parseFloat(E.getPropertyValue("transition-duration")||"0");return B>0||q>0},Ge=function(v){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const B=Wt();We(B)&&(E&&(B.style.transition="none",B.style.width="100%"),setTimeout(()=>{B.style.transition="width ".concat(v/1e3,"s linear"),B.style.width="0%"},10))},Dn=()=>{const v=Wt(),E=parseInt(window.getComputedStyle(v).width);v.style.removeProperty("transition"),v.style.width="100%";const B=parseInt(window.getComputedStyle(v).width),q=E/B*100;v.style.removeProperty("transition"),v.style.width="".concat(q,"%")},Na=()=>typeof window>"u"||typeof document>"u",Tn=100,Jt={},Pa=()=>{Jt.previousActiveElement&&Jt.previousActiveElement.focus?(Jt.previousActiveElement.focus(),Jt.previousActiveElement=null):document.body&&document.body.focus()},np=v=>new Promise(E=>{if(!v)return E();const B=window.scrollX,q=window.scrollY;Jt.restoreFocusTimeout=setTimeout(()=>{Pa(),E()},Tn),window.scrollTo(B,q)}),op=`
 <div aria-labelledby="`.concat(U.title,'" aria-describedby="').concat(U["html-container"],'" class="').concat(U.popup,`" tabindex="-1">
   <button type="button" class="`).concat(U.close,`"></button>
   <ul class="`).concat(U["progress-steps"],`"></ul>
   <div class="`).concat(U.icon,`"></div>
   <img class="`).concat(U.image,`" />
   <h2 class="`).concat(U.title,'" id="').concat(U.title,`"></h2>
   <div class="`).concat(U["html-container"],'" id="').concat(U["html-container"],`"></div>
   <input class="`).concat(U.input,`" />
   <input type="file" class="`).concat(U.file,`" />
   <div class="`).concat(U.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(U.select,`"></select>
   <div class="`).concat(U.radio,`"></div>
   <label for="`).concat(U.checkbox,'" class="').concat(U.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(U.label,`"></span>
   </label>
   <textarea class="`).concat(U.textarea,`"></textarea>
   <div class="`).concat(U["validation-message"],'" id="').concat(U["validation-message"],`"></div>
   <div class="`).concat(U.actions,`">
     <div class="`).concat(U.loader,`"></div>
     <button type="button" class="`).concat(U.confirm,`"></button>
     <button type="button" class="`).concat(U.deny,`"></button>
     <button type="button" class="`).concat(U.cancel,`"></button>
   </div>
   <div class="`).concat(U.footer,`"></div>
   <div class="`).concat(U["timer-progress-bar-container"],`">
     <div class="`).concat(U["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),zl=()=>{const v=Ot();return v?(v.remove(),Ft([document.documentElement,document.body],[U["no-backdrop"],U["toast-shown"],U["has-column"]]),!0):!1},Wo=()=>{Jt.currentInstance.resetValidationMessage()},ip=()=>{const v=yt(),E=Kt(v,U.input),B=Kt(v,U.file),q=v.querySelector(".".concat(U.range," input")),dt=v.querySelector(".".concat(U.range," output")),Vt=Kt(v,U.select),ze=v.querySelector(".".concat(U.checkbox," input")),un=Kt(v,U.textarea);E.oninput=Wo,B.onchange=Wo,Vt.onchange=Wo,ze.onchange=Wo,un.oninput=Wo,q.oninput=()=>{Wo(),dt.value=q.value},q.onchange=()=>{Wo(),q.nextSibling.value=q.value}},bn=v=>typeof v=="string"?document.querySelector(v):v,rp=v=>{const E=yt();E.setAttribute("role",v.toast?"alert":"dialog"),E.setAttribute("aria-live",v.toast?"polite":"assertive"),v.toast||E.setAttribute("aria-modal","true")},fr=v=>{window.getComputedStyle(v).direction==="rtl"&&St(Ot(),U.rtl)},ks=v=>{const E=zl();if(Na()){_("SweetAlert2 requires document to initialize");return}const B=document.createElement("div");B.className=U.container,E&&St(B,U["no-transition"]),kt(B,op);const q=bn(v.target);q.appendChild(B),rp(v),fr(q),ip()},Oa=(v,E)=>{v instanceof HTMLElement?E.appendChild(v):typeof v=="object"?sp(v,E):v&&kt(E,v)},sp=(v,E)=>{v.jquery?ap(E,v):kt(E,v.toString())},ap=(v,E)=>{if(v.textContent="",0 in E)for(let B=0;B in E;B++)v.appendChild(E[B].cloneNode(!0));else v.appendChild(E.cloneNode(!0))},mr=(()=>{if(Na())return!1;const v=document.createElement("div"),E={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const B in E)if(Object.prototype.hasOwnProperty.call(E,B)&&typeof v.style[B]<"u")return E[B];return!1})(),cp=()=>{const v=document.createElement("div");v.className=U["scrollbar-measure"],document.body.appendChild(v);const E=v.getBoundingClientRect().width-v.clientWidth;return document.body.removeChild(v),E},Ci=(v,E)=>{const B=Et(),q=it();!E.showConfirmButton&&!E.showDenyButton&&!E.showCancelButton?we(B):ae(B),rt(B,E,"actions"),ws(B,q,E),kt(q,E.loaderHtml),rt(q,E,"loader")};function ws(v,E,B){const q=jt(),dt=te(),Vt=ct();La(q,"confirm",B),La(dt,"deny",B),La(Vt,"cancel",B),lp(q,dt,Vt,B),B.reverseButtons&&(B.toast?(v.insertBefore(Vt,q),v.insertBefore(dt,q)):(v.insertBefore(Vt,E),v.insertBefore(dt,E),v.insertBefore(q,E)))}function lp(v,E,B,q){if(!q.buttonsStyling)return Ft([v,E,B],U.styled);St([v,E,B],U.styled),q.confirmButtonColor&&(v.style.backgroundColor=q.confirmButtonColor,St(v,U["default-outline"])),q.denyButtonColor&&(E.style.backgroundColor=q.denyButtonColor,St(E,U["default-outline"])),q.cancelButtonColor&&(B.style.backgroundColor=q.cancelButtonColor,St(B,U["default-outline"]))}function La(v,E,B){qo(v,B["show".concat(p(E),"Button")],"inline-block"),kt(v,B["".concat(E,"ButtonText")]),v.setAttribute("aria-label",B["".concat(E,"ButtonAriaLabel")]),v.className=U[E],rt(v,B,"".concat(E,"Button")),St(v,B["".concat(E,"ButtonClass")])}function dp(v,E){typeof E=="string"?v.style.background=E:E||St([document.documentElement,document.body],U["no-backdrop"])}function up(v,E){E in U?St(v,U[E]):(k('The "position" parameter is not valid, defaulting to "center"'),St(v,U.center))}function Go(v,E){if(E&&typeof E=="string"){const B="grow-".concat(E);B in U&&St(v,U[B])}}const Ra=(v,E)=>{const B=Ot();B&&(dp(B,E.backdrop),up(B,E.position),Go(B,E.grow),rt(B,E,"container"))};var ne={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const hp=["input","file","range","select","radio","checkbox","textarea"],pp=(v,E)=>{const B=yt(),q=ne.innerParams.get(v),dt=!q||E.input!==q.input;hp.forEach(Vt=>{const ze=U[Vt],un=Kt(B,ze);fp(Vt,E.inputAttributes),un.className=ze,dt&&we(un)}),E.input&&(dt&&Ko(E),mp(E))},Ko=v=>{if(!dn[v.input])return _('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(v.input,'"'));const E=jl(v.input),B=dn[v.input](E,v);ae(B),setTimeout(()=>{Nt(B)})},gp=v=>{for(let E=0;E<v.attributes.length;E++){const B=v.attributes[E].name;["type","value","style"].includes(B)||v.removeAttribute(B)}},fp=(v,E)=>{const B=wt(yt(),v);if(B){gp(B);for(const q in E)B.setAttribute(q,E[q])}},mp=v=>{const E=jl(v.input);v.customClass&&St(E,v.customClass.input)},za=(v,E)=>{(!v.placeholder||E.inputPlaceholder)&&(v.placeholder=E.inputPlaceholder)},br=(v,E,B)=>{if(B.inputLabel){v.id=U.input;const q=document.createElement("label"),dt=U["input-label"];q.setAttribute("for",v.id),q.className=dt,St(q,B.customClass.inputLabel),q.innerText=B.inputLabel,E.insertAdjacentElement("beforebegin",q)}},jl=v=>{const E=U[v]?U[v]:U.input;return Kt(yt(),E)},dn={};dn.text=dn.email=dn.password=dn.number=dn.tel=dn.url=(v,E)=>(typeof E.inputValue=="string"||typeof E.inputValue=="number"?v.value=E.inputValue:N(E.inputValue)||k('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof E.inputValue,'"')),br(v,v,E),za(v,E),v.type=E.input,v),dn.file=(v,E)=>(br(v,v,E),za(v,E),v),dn.range=(v,E)=>{const B=v.querySelector("input"),q=v.querySelector("output");return B.value=E.inputValue,B.type=E.input,q.value=E.inputValue,br(B,v,E),v},dn.select=(v,E)=>{if(v.textContent="",E.inputPlaceholder){const B=document.createElement("option");kt(B,E.inputPlaceholder),B.value="",B.disabled=!0,B.selected=!0,v.appendChild(B)}return br(v,v,E),v},dn.radio=v=>(v.textContent="",v),dn.checkbox=(v,E)=>{const B=wt(yt(),"checkbox");B.value="1",B.id=U.checkbox,B.checked=!!E.inputValue;const q=v.querySelector("span");return kt(q,E.inputPlaceholder),v},dn.textarea=(v,E)=>{v.value=E.inputValue,za(v,E),br(v,v,E);const B=q=>parseInt(window.getComputedStyle(q).marginLeft)+parseInt(window.getComputedStyle(q).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const q=parseInt(window.getComputedStyle(yt()).width),dt=()=>{const Vt=v.offsetWidth+B(v);Vt>q?yt().style.width="".concat(Vt,"px"):yt().style.width=null};new MutationObserver(dt).observe(v,{attributes:!0,attributeFilter:["style"]})}}),v};const bp=(v,E)=>{const B=qt();rt(B,E,"htmlContainer"),E.html?(Oa(E.html,B),ae(B,"block")):E.text?(B.textContent=E.text,ae(B,"block")):we(B),pp(v,E)},Yo=(v,E)=>{const B=It();qo(B,E.footer),E.footer&&Oa(E.footer,B),rt(B,E,"footer")},kr=(v,E)=>{const B=ee();kt(B,E.closeButtonHtml),rt(B,E,"closeButton"),qo(B,E.showCloseButton),B.setAttribute("aria-label",E.closeButtonAriaLabel)},wr=(v,E)=>{const B=ne.innerParams.get(v),q=Mt();if(B&&E.icon===B.icon){Vl(q,E),Fl(q,E);return}if(!E.icon&&!E.iconHtml)return we(q);if(E.icon&&Object.keys(_t).indexOf(E.icon)===-1)return _('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(E.icon,'"')),we(q);ae(q),Vl(q,E),Fl(q,E),St(q,E.showClass.icon)},Fl=(v,E)=>{for(const B in _t)E.icon!==B&&Ft(v,_t[B]);St(v,_t[E.icon]),Ap(v,E),kp(),rt(v,E,"icon")},kp=()=>{const v=yt(),E=window.getComputedStyle(v).getPropertyValue("background-color"),B=v.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let q=0;q<B.length;q++)B[q].style.backgroundColor=E},wp=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,_p=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Vl=(v,E)=>{v.textContent="",E.iconHtml?kt(v,Hl(E.iconHtml)):E.icon==="success"?kt(v,wp):E.icon==="error"?kt(v,_p):kt(v,Hl({question:"?",warning:"!",info:"i"}[E.icon]))},Ap=(v,E)=>{if(E.iconColor){v.style.color=E.iconColor,v.style.borderColor=E.iconColor;for(const B of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])mn(v,B,"backgroundColor",E.iconColor);mn(v,".swal2-success-ring","borderColor",E.iconColor)}},Hl=v=>'<div class="'.concat(U["icon-content"],'">').concat(v,"</div>"),vi=(v,E)=>{const B=Re();if(!E.imageUrl)return we(B);ae(B,""),B.setAttribute("src",E.imageUrl),B.setAttribute("alt",E.imageAlt),pe(B,"width",E.imageWidth),pe(B,"height",E.imageHeight),B.className=U.image,rt(B,E,"image")},$l=v=>{const E=document.createElement("li");return St(E,U["progress-step"]),kt(E,v),E},Cp=v=>{const E=document.createElement("li");return St(E,U["progress-step-line"]),v.progressStepsDistance&&(E.style.width=v.progressStepsDistance),E},vp=(v,E)=>{const B=_e();if(!E.progressSteps||E.progressSteps.length===0)return we(B);ae(B),B.textContent="",E.currentProgressStep>=E.progressSteps.length&&k("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),E.progressSteps.forEach((q,dt)=>{const Vt=$l(q);if(B.appendChild(Vt),dt===E.currentProgressStep&&St(Vt,U["active-progress-step"]),dt!==E.progressSteps.length-1){const ze=Cp(E);B.appendChild(ze)}})},_s=(v,E)=>{const B=Ee();qo(B,E.title||E.titleText,"block"),E.title&&Oa(E.title,B),E.titleText&&(B.innerText=E.titleText),rt(B,E,"title")},yp=(v,E)=>{const B=Ot(),q=yt();E.toast?(pe(B,"width",E.width),q.style.width="100%",q.insertBefore(it(),Mt())):pe(q,"width",E.width),pe(q,"padding",E.padding),E.color&&(q.style.color=E.color),E.background&&(q.style.background=E.background),we(At()),Ep(q,E)},Ep=(v,E)=>{v.className="".concat(U.popup," ").concat(We(v)?E.showClass.popup:""),E.toast?(St([document.documentElement,document.body],U["toast-shown"]),St(v,U.toast)):St(v,U.modal),rt(v,E,"popup"),typeof E.customClass=="string"&&St(v,E.customClass),E.icon&&St(v,U["icon-".concat(E.icon)])},Ul=(v,E)=>{yp(v,E),Ra(v,E),vp(v,E),wr(v,E),vi(v,E),_s(v,E),kr(v,E),bp(v,E),Ci(v,E),Yo(v,E),typeof E.didRender=="function"&&E.didRender(yt())},yi=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ei=()=>{m(document.body.children).forEach(E=>{E===Ot()||E.contains(Ot())||(E.hasAttribute("aria-hidden")&&E.setAttribute("data-previous-aria-hidden",E.getAttribute("aria-hidden")),E.setAttribute("aria-hidden","true"))})},_r=()=>{m(document.body.children).forEach(E=>{E.hasAttribute("data-previous-aria-hidden")?(E.setAttribute("aria-hidden",E.getAttribute("data-previous-aria-hidden")),E.removeAttribute("data-previous-aria-hidden")):E.removeAttribute("aria-hidden")})},ql=["swal-title","swal-html","swal-footer"],xi=v=>{const E=typeof v.template=="string"?document.querySelector(v.template):v.template;if(!E)return{};const B=E.content;return Ti(B),Object.assign(Di(B),xp(B),As(B),Cs(B),Dp(B),ja(B,ql))},Di=v=>{const E={};return m(v.querySelectorAll("swal-param")).forEach(B=>{Qo(B,["name","value"]);const q=B.getAttribute("name"),dt=B.getAttribute("value");typeof O[q]=="boolean"&&dt==="false"&&(E[q]=!1),typeof O[q]=="object"&&(E[q]=JSON.parse(dt))}),E},xp=v=>{const E={};return m(v.querySelectorAll("swal-button")).forEach(B=>{Qo(B,["type","color","aria-label"]);const q=B.getAttribute("type");E["".concat(q,"ButtonText")]=B.innerHTML,E["show".concat(p(q),"Button")]=!0,B.hasAttribute("color")&&(E["".concat(q,"ButtonColor")]=B.getAttribute("color")),B.hasAttribute("aria-label")&&(E["".concat(q,"ButtonAriaLabel")]=B.getAttribute("aria-label"))}),E},As=v=>{const E={},B=v.querySelector("swal-image");return B&&(Qo(B,["src","width","height","alt"]),B.hasAttribute("src")&&(E.imageUrl=B.getAttribute("src")),B.hasAttribute("width")&&(E.imageWidth=B.getAttribute("width")),B.hasAttribute("height")&&(E.imageHeight=B.getAttribute("height")),B.hasAttribute("alt")&&(E.imageAlt=B.getAttribute("alt"))),E},Cs=v=>{const E={},B=v.querySelector("swal-icon");return B&&(Qo(B,["type","color"]),B.hasAttribute("type")&&(E.icon=B.getAttribute("type")),B.hasAttribute("color")&&(E.iconColor=B.getAttribute("color")),E.iconHtml=B.innerHTML),E},Dp=v=>{const E={},B=v.querySelector("swal-input");B&&(Qo(B,["type","label","placeholder","value"]),E.input=B.getAttribute("type")||"text",B.hasAttribute("label")&&(E.inputLabel=B.getAttribute("label")),B.hasAttribute("placeholder")&&(E.inputPlaceholder=B.getAttribute("placeholder")),B.hasAttribute("value")&&(E.inputValue=B.getAttribute("value")));const q=v.querySelectorAll("swal-input-option");return q.length&&(E.inputOptions={},m(q).forEach(dt=>{Qo(dt,["value"]);const Vt=dt.getAttribute("value"),ze=dt.innerHTML;E.inputOptions[Vt]=ze})),E},ja=(v,E)=>{const B={};for(const q in E){const dt=E[q],Vt=v.querySelector(dt);Vt&&(Qo(Vt,[]),B[dt.replace(/^swal-/,"")]=Vt.innerHTML.trim())}return B},Ti=v=>{const E=ql.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);m(v.children).forEach(B=>{const q=B.tagName.toLowerCase();E.indexOf(q)===-1&&k("Unrecognized element <".concat(q,">"))})},Qo=(v,E)=>{m(v.attributes).forEach(B=>{E.indexOf(B.name)===-1&&k(['Unrecognized attribute "'.concat(B.name,'" on <').concat(v.tagName.toLowerCase(),">."),"".concat(E.length?"Allowed attributes are: ".concat(E.join(", ")):"To set the value, use HTML within the element.")])})};var Fa={email:(v,E)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(v)?Promise.resolve():Promise.resolve(E||"Invalid email address"),url:(v,E)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(v)?Promise.resolve():Promise.resolve(E||"Invalid URL")};function Wl(v){v.inputValidator||Object.keys(Fa).forEach(E=>{v.input===E&&(v.inputValidator=Fa[E])})}function Tp(v){(!v.target||typeof v.target=="string"&&!document.querySelector(v.target)||typeof v.target!="string"&&!v.target.appendChild)&&(k('Target parameter is not valid, defaulting to "body"'),v.target="body")}function Sp(v){Wl(v),v.showLoaderOnConfirm&&!v.preConfirm&&k(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Tp(v),typeof v.title=="string"&&(v.title=v.title.split(`
`).join("<br />")),ks(v)}class vs{constructor(E,B){this.callback=E,this.remaining=B,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(E){const B=this.running;return B&&this.stop(),this.remaining+=E,B&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ip=()=>{Ct.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Ct.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Ct.previousBodyPadding+cp(),"px"))},Gl=()=>{Ct.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(Ct.previousBodyPadding,"px"),Ct.previousBodyPadding=null)},Kl=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!ht(document.body,U.iosfix)){const E=document.body.scrollTop;document.body.style.top="".concat(E*-1,"px"),St(document.body,U.iosfix),Ar(),Yl()}},Yl=()=>{const v=navigator.userAgent,E=!!v.match(/iPad/i)||!!v.match(/iPhone/i),B=!!v.match(/WebKit/i);E&&B&&!v.match(/CriOS/i)&&yt().scrollHeight>window.innerHeight-44&&(Ot().style.paddingBottom="".concat(44,"px"))},Ar=()=>{const v=Ot();let E;v.ontouchstart=B=>{E=Mp(B)},v.ontouchmove=B=>{E&&(B.preventDefault(),B.stopPropagation())}},Mp=v=>{const E=v.target,B=Ot();return ys(v)||Va(v)?!1:E===B||!Ze(B)&&E.tagName!=="INPUT"&&E.tagName!=="TEXTAREA"&&!(Ze(qt())&&qt().contains(E))},ys=v=>v.touches&&v.touches.length&&v.touches[0].touchType==="stylus",Va=v=>v.touches&&v.touches.length>1,Me=()=>{if(ht(document.body,U.iosfix)){const v=parseInt(document.body.style.top,10);Ft(document.body,U.iosfix),document.body.style.top="",document.body.scrollTop=v*-1}},Ql=10,Ha=v=>{const E=Ot(),B=yt();typeof v.willOpen=="function"&&v.willOpen(B);const dt=window.getComputedStyle(document.body).overflowY;Si(E,B,v),setTimeout(()=>{Cr(E,B)},Ql),Z()&&(Ua(E,v.scrollbarPadding,dt),Ei()),!at()&&!Jt.previousActiveElement&&(Jt.previousActiveElement=document.activeElement),typeof v.didOpen=="function"&&setTimeout(()=>v.didOpen(B)),Ft(E,U["no-transition"])},$a=v=>{const E=yt();if(v.target!==E)return;const B=Ot();E.removeEventListener(mr,$a),B.style.overflowY="auto"},Cr=(v,E)=>{mr&&je(E)?(v.style.overflowY="hidden",E.addEventListener(mr,$a)):v.style.overflowY="auto"},Ua=(v,E,B)=>{Kl(),E&&B!=="hidden"&&Ip(),setTimeout(()=>{v.scrollTop=0})},Si=(v,E,B)=>{St(v,B.showClass.backdrop),E.style.setProperty("opacity","0","important"),ae(E,"grid"),setTimeout(()=>{St(E,B.showClass.popup),E.style.removeProperty("opacity")},Ql),St([document.documentElement,document.body],U.shown),B.heightAuto&&B.backdrop&&!B.toast&&St([document.documentElement,document.body],U["height-auto"])},Zo=v=>{let E=yt();E||new Sr,E=yt();const B=it();at()?we(Mt()):qa(E,v),ae(B),E.setAttribute("data-loading",!0),E.setAttribute("aria-busy",!0),E.focus()},qa=(v,E)=>{const B=Et(),q=it();!E&&We(jt())&&(E=jt()),ae(B),E&&(we(E),q.setAttribute("data-button-to-replace",E.className)),q.parentNode.insertBefore(q,E),St([v,B],U.loading)},Bp=(v,E)=>{E.input==="select"||E.input==="radio"?Op(v,E):["text","email","number","tel","textarea"].includes(E.input)&&(A(E.inputValue)||N(E.inputValue))&&(Zo(jt()),Lp(v,E))},Zl=(v,E)=>{const B=v.getInput();if(!B)return null;switch(E.input){case"checkbox":return Np(B);case"radio":return Wa(B);case"file":return Pp(B);default:return E.inputAutoTrim?B.value.trim():B.value}},Np=v=>v.checked?1:0,Wa=v=>v.checked?v.value:null,Pp=v=>v.files.length?v.getAttribute("multiple")!==null?v.files:v.files[0]:null,Op=(v,E)=>{const B=yt(),q=dt=>Es[E.input](B,Jo(dt),E);A(E.inputOptions)||N(E.inputOptions)?(Zo(jt()),S(E.inputOptions).then(dt=>{v.hideLoading(),q(dt)})):typeof E.inputOptions=="object"?q(E.inputOptions):_("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof E.inputOptions))},Lp=(v,E)=>{const B=v.getInput();we(B),S(E.inputValue).then(q=>{B.value=E.input==="number"?parseFloat(q)||0:"".concat(q),ae(B),B.focus(),v.hideLoading()}).catch(q=>{_("Error in inputValue promise: ".concat(q)),B.value="",ae(B),B.focus(),v.hideLoading()})},Es={select:(v,E,B)=>{const q=Kt(v,U.select),dt=(Vt,ze,un)=>{const Ue=document.createElement("option");Ue.value=un,kt(Ue,ze),Ue.selected=Jl(un,B.inputValue),Vt.appendChild(Ue)};E.forEach(Vt=>{const ze=Vt[0],un=Vt[1];if(Array.isArray(un)){const Ue=document.createElement("optgroup");Ue.label=ze,Ue.disabled=!1,q.appendChild(Ue),un.forEach(Sn=>dt(Ue,Sn[1],Sn[0]))}else dt(q,un,ze)}),q.focus()},radio:(v,E,B)=>{const q=Kt(v,U.radio);E.forEach(Vt=>{const ze=Vt[0],un=Vt[1],Ue=document.createElement("input"),Sn=document.createElement("label");Ue.type="radio",Ue.name=U.radio,Ue.value=ze,Jl(ze,B.inputValue)&&(Ue.checked=!0);const Ms=document.createElement("span");kt(Ms,un),Ms.className=U.label,Sn.appendChild(Ue),Sn.appendChild(Ms),q.appendChild(Sn)});const dt=q.querySelectorAll("input");dt.length&&dt[0].focus()}},Jo=v=>{const E=[];return typeof Map<"u"&&v instanceof Map?v.forEach((B,q)=>{let dt=B;typeof dt=="object"&&(dt=Jo(dt)),E.push([q,dt])}):Object.keys(v).forEach(B=>{let q=v[B];typeof q=="object"&&(q=Jo(q)),E.push([B,q])}),E},Jl=(v,E)=>E&&E.toString()===v.toString(),Rp=v=>{const E=ne.innerParams.get(v);v.disableButtons(),E.input?Xo(v,"confirm"):Ds(v,!0)},zp=v=>{const E=ne.innerParams.get(v);v.disableButtons(),E.returnInputValueOnDeny?Xo(v,"deny"):xs(v,!1)},jp=(v,E)=>{v.disableButtons(),E(yi.cancel)},Xo=(v,E)=>{const B=ne.innerParams.get(v);if(!B.input)return _('The "input" parameter is needed to be set when using returnInputValueOn'.concat(p(E)));const q=Zl(v,B);B.inputValidator?Fp(v,q,E):v.getInput().checkValidity()?E==="deny"?xs(v,q):Ds(v,q):(v.enableButtons(),v.showValidationMessage(B.validationMessage))},Fp=(v,E,B)=>{const q=ne.innerParams.get(v);v.disableInput(),Promise.resolve().then(()=>S(q.inputValidator(E,q.validationMessage))).then(Vt=>{v.enableButtons(),v.enableInput(),Vt?v.showValidationMessage(Vt):B==="deny"?xs(v,E):Ds(v,E)})},xs=(v,E)=>{const B=ne.innerParams.get(v||void 0);B.showLoaderOnDeny&&Zo(te()),B.preDeny?(ne.awaitingPromise.set(v||void 0,!0),Promise.resolve().then(()=>S(B.preDeny(E,B.validationMessage))).then(dt=>{dt===!1?v.hideLoading():v.closePopup({isDenied:!0,value:typeof dt>"u"?E:dt})}).catch(dt=>Ka(v||void 0,dt))):v.closePopup({isDenied:!0,value:E})},Ga=(v,E)=>{v.closePopup({isConfirmed:!0,value:E})},Ka=(v,E)=>{v.rejectPromise(E)},Ds=(v,E)=>{const B=ne.innerParams.get(v||void 0);B.showLoaderOnConfirm&&Zo(),B.preConfirm?(v.resetValidationMessage(),ne.awaitingPromise.set(v||void 0,!0),Promise.resolve().then(()=>S(B.preConfirm(E,B.validationMessage))).then(dt=>{We(At())||dt===!1?v.hideLoading():Ga(v,typeof dt>"u"?E:dt)}).catch(dt=>Ka(v||void 0,dt))):Ga(v,E)},Xl=(v,E,B)=>{ne.innerParams.get(v).toast?td(v,E,B):(Hp(E),ed(E),Ya(v,E,B))},td=(v,E,B)=>{E.popup.onclick=()=>{const q=ne.innerParams.get(v);q&&(Vp(q)||q.timer||q.input)||B(yi.close)}},Vp=v=>v.showConfirmButton||v.showDenyButton||v.showCancelButton||v.showCloseButton;let vr=!1;const Hp=v=>{v.popup.onmousedown=()=>{v.container.onmouseup=function(E){v.container.onmouseup=void 0,E.target===v.container&&(vr=!0)}}},ed=v=>{v.container.onmousedown=()=>{v.popup.onmouseup=function(E){v.popup.onmouseup=void 0,(E.target===v.popup||v.popup.contains(E.target))&&(vr=!0)}}},Ya=(v,E,B)=>{E.container.onclick=q=>{const dt=ne.innerParams.get(v);if(vr){vr=!1;return}q.target===E.container&&y(dt.allowOutsideClick)&&B(yi.backdrop)}},$p=()=>We(yt()),Qa=()=>jt()&&jt().click(),nd=()=>te()&&te().click(),Up=()=>ct()&&ct().click(),od=(v,E,B,q)=>{E.keydownTarget&&E.keydownHandlerAdded&&(E.keydownTarget.removeEventListener("keydown",E.keydownHandler,{capture:E.keydownListenerCapture}),E.keydownHandlerAdded=!1),B.toast||(E.keydownHandler=dt=>Ja(v,dt,q),E.keydownTarget=B.keydownListenerCapture?window:yt(),E.keydownListenerCapture=B.keydownListenerCapture,E.keydownTarget.addEventListener("keydown",E.keydownHandler,{capture:E.keydownListenerCapture}),E.keydownHandlerAdded=!0)},yr=(v,E,B)=>{const q=K();if(q.length)return E=E+B,E===q.length?E=0:E===-1&&(E=q.length-1),q[E].focus();yt().focus()},id=["ArrowRight","ArrowDown"],Za=["ArrowLeft","ArrowUp"],Ja=(v,E,B)=>{const q=ne.innerParams.get(v);q&&(q.stopKeydownPropagation&&E.stopPropagation(),E.key==="Enter"?Xa(v,E,q):E.key==="Tab"?tc(E,q):[...id,...Za].includes(E.key)?rd(E.key):E.key==="Escape"&&sd(E,q,B))},Xa=(v,E,B)=>{if(!(!y(B.allowEnterKey)||E.isComposing)&&E.target&&v.getInput()&&E.target.outerHTML===v.getInput().outerHTML){if(["textarea","file"].includes(B.input))return;Qa(),E.preventDefault()}},tc=(v,E)=>{const B=v.target,q=K();let dt=-1;for(let Vt=0;Vt<q.length;Vt++)if(B===q[Vt]){dt=Vt;break}v.shiftKey?yr(E,dt,-1):yr(E,dt,1),v.stopPropagation(),v.preventDefault()},rd=v=>{const E=jt(),B=te(),q=ct();if(![E,B,q].includes(document.activeElement))return;const dt=id.includes(v)?"nextElementSibling":"previousElementSibling",Vt=document.activeElement[dt];Vt instanceof HTMLElement&&Vt.focus()},sd=(v,E,B)=>{y(E.allowEscapeKey)&&(v.preventDefault(),B(yi.esc))},ad=v=>typeof v=="object"&&v.jquery,ec=v=>v instanceof Element||ad(v),cd=v=>{const E={};return typeof v[0]=="object"&&!ec(v[0])?Object.assign(E,v[0]):["title","html","icon"].forEach((B,q)=>{const dt=v[q];typeof dt=="string"||ec(dt)?E[B]=dt:dt!==void 0&&_("Unexpected type of ".concat(B,'! Expected "string" or "Element", got ').concat(typeof dt))}),E};function qp(){const v=this;for(var E=arguments.length,B=new Array(E),q=0;q<E;q++)B[q]=arguments[q];return new v(...B)}function Wp(v){class E extends this{_main(q,dt){return super._main(q,Object.assign({},v,dt))}}return E}const Gp=()=>Jt.timeout&&Jt.timeout.getTimerLeft(),ld=()=>{if(Jt.timeout)return Dn(),Jt.timeout.stop()},dd=()=>{if(Jt.timeout){const v=Jt.timeout.start();return Ge(v),v}},ti=()=>{const v=Jt.timeout;return v&&(v.running?ld():dd())},Er=v=>{if(Jt.timeout){const E=Jt.timeout.increase(v);return Ge(E,!0),E}},Kp=()=>Jt.timeout&&Jt.timeout.isRunning();let ud=!1;const Ii={};function nc(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ii[v]=this,ud||(document.body.addEventListener("click",Yp),ud=!0)}const Yp=v=>{for(let E=v.target;E&&E!==document;E=E.parentNode)for(const B in Ii){const q=E.getAttribute(B);if(q){Ii[B].fire({template:q});return}}};var Qp=Object.freeze({isValidParameter:F,isUpdatableParameter:H,isDeprecatedParameter:Q,argsToParams:cd,isVisible:$p,clickConfirm:Qa,clickDeny:nd,clickCancel:Up,getContainer:Ot,getPopup:yt,getTitle:Ee,getHtmlContainer:qt,getImage:Re,getIcon:Mt,getInputLabel:re,getCloseButton:ee,getActions:Et,getConfirmButton:jt,getDenyButton:te,getCancelButton:ct,getLoader:it,getFooter:It,getTimerProgressBar:Wt,getFocusableElements:K,getValidationMessage:At,isLoading:st,fire:qp,mixin:Wp,showLoading:Zo,enableLoading:Zo,getTimerLeft:Gp,stopTimer:ld,resumeTimer:dd,toggleTimer:ti,increaseTimer:Er,isTimerRunning:Kp,bindClickHandler:nc});function hd(){const v=ne.innerParams.get(this);if(!v)return;const E=ne.domCache.get(this);we(E.loader),at()?v.icon&&ae(Mt()):pd(E),Ft([E.popup,E.actions],U.loading),E.popup.removeAttribute("aria-busy"),E.popup.removeAttribute("data-loading"),E.confirmButton.disabled=!1,E.denyButton.disabled=!1,E.cancelButton.disabled=!1}const pd=v=>{const E=v.popup.getElementsByClassName(v.loader.getAttribute("data-button-to-replace"));E.length?ae(E[0],"inline-block"):bs()&&we(v.actions)};function gd(v){const E=ne.innerParams.get(v||this),B=ne.domCache.get(v||this);return B?wt(B.popup,E.input):null}var xr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function oc(v,E,B,q){at()?bd(v,q):(np(B).then(()=>bd(v,q)),Jt.keydownTarget.removeEventListener("keydown",Jt.keydownHandler,{capture:Jt.keydownListenerCapture}),Jt.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(E.setAttribute("style","display:none !important"),E.removeAttribute("class"),E.innerHTML=""):E.remove(),Z()&&(Gl(),Me(),_r()),Zp()}function Zp(){Ft([document.documentElement,document.body],[U.shown,U["height-auto"],U["no-backdrop"],U["toast-shown"]])}function Dr(v){v=tg(v);const E=xr.swalPromiseResolve.get(this),B=fd(this);this.isAwaitingPromise()?v.isDismissed||(ic(this),E(v)):B&&E(v)}function Jp(){return!!ne.awaitingPromise.get(this)}const fd=v=>{const E=yt();if(!E)return!1;const B=ne.innerParams.get(v);if(!B||ht(E,B.hideClass.popup))return!1;Ft(E,B.showClass.popup),St(E,B.hideClass.popup);const q=Ot();return Ft(q,B.showClass.backdrop),St(q,B.hideClass.backdrop),eg(v,E,B),!0};function Xp(v){const E=xr.swalPromiseReject.get(this);ic(this),E&&E(v)}const ic=v=>{v.isAwaitingPromise()&&(ne.awaitingPromise.delete(v),ne.innerParams.get(v)||v._destroy())},tg=v=>typeof v>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},v),eg=(v,E,B)=>{const q=Ot(),dt=mr&&je(E);typeof B.willClose=="function"&&B.willClose(E),dt?md(v,E,q,B.returnFocus,B.didClose):oc(v,q,B.returnFocus,B.didClose)},md=(v,E,B,q,dt)=>{Jt.swalCloseEventFinishedCallback=oc.bind(null,v,B,q,dt),E.addEventListener(mr,function(Vt){Vt.target===E&&(Jt.swalCloseEventFinishedCallback(),delete Jt.swalCloseEventFinishedCallback)})},bd=(v,E)=>{setTimeout(()=>{typeof E=="function"&&E.bind(v.params)(),v._destroy()})};function rc(v,E,B){const q=ne.domCache.get(v);E.forEach(dt=>{q[dt].disabled=B})}function sc(v,E){if(!v)return!1;if(v.type==="radio"){const q=v.parentNode.parentNode.querySelectorAll("input");for(let dt=0;dt<q.length;dt++)q[dt].disabled=E}else v.disabled=E}function kd(){rc(this,["confirmButton","denyButton","cancelButton"],!1)}function xe(){rc(this,["confirmButton","denyButton","cancelButton"],!0)}function ac(){return sc(this.getInput(),!1)}function cc(){return sc(this.getInput(),!0)}function ei(v){const E=ne.domCache.get(this),B=ne.innerParams.get(this);kt(E.validationMessage,v),E.validationMessage.className=U["validation-message"],B.customClass&&B.customClass.validationMessage&&St(E.validationMessage,B.customClass.validationMessage),ae(E.validationMessage);const q=this.getInput();q&&(q.setAttribute("aria-invalid",!0),q.setAttribute("aria-describedby",U["validation-message"]),Nt(q),St(q,U.inputerror))}function wd(){const v=ne.domCache.get(this);v.validationMessage&&we(v.validationMessage);const E=this.getInput();E&&(E.removeAttribute("aria-invalid"),E.removeAttribute("aria-describedby"),Ft(E,U.inputerror))}function _d(){return ne.domCache.get(this).progressSteps}function ng(v){const E=yt(),B=ne.innerParams.get(this);if(!E||ht(E,B.hideClass.popup))return k("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const q=To(v),dt=Object.assign({},B,q);Ul(this,dt),ne.innerParams.set(this,dt),Object.defineProperties(this,{params:{value:Object.assign({},this.params,v),writable:!1,enumerable:!0}})}const To=v=>{const E={};return Object.keys(v).forEach(B=>{H(B)?E[B]=v[B]:k('Invalid parameter to update: "'.concat(B,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),E};function Ts(){const v=ne.domCache.get(this),E=ne.innerParams.get(this);if(!E){kn(this);return}v.popup&&Jt.swalCloseEventFinishedCallback&&(Jt.swalCloseEventFinishedCallback(),delete Jt.swalCloseEventFinishedCallback),Jt.deferDisposalTimer&&(clearTimeout(Jt.deferDisposalTimer),delete Jt.deferDisposalTimer),typeof E.didDestroy=="function"&&E.didDestroy(),Ad(this)}const Ad=v=>{kn(v),delete v.params,delete Jt.keydownHandler,delete Jt.keydownTarget,delete Jt.currentInstance},kn=v=>{v.isAwaitingPromise()?(lc(ne,v),ne.awaitingPromise.set(v,!0)):(lc(xr,v),lc(ne,v))},lc=(v,E)=>{for(const B in v)v[B].delete(E)};var dc=Object.freeze({hideLoading:hd,disableLoading:hd,getInput:gd,close:Dr,isAwaitingPromise:Jp,rejectPromise:Xp,closePopup:Dr,closeModal:Dr,closeToast:Dr,enableButtons:kd,disableButtons:xe,enableInput:ac,disableInput:cc,showValidationMessage:ei,resetValidationMessage:wd,getProgressSteps:_d,update:ng,_destroy:Ts});let Tr;class Lt{constructor(){if(typeof window>"u")return;Tr=this;for(var E=arguments.length,B=new Array(E),q=0;q<E;q++)B[q]=arguments[q];const dt=Object.freeze(this.constructor.argsToParams(B));Object.defineProperties(this,{params:{value:dt,writable:!1,enumerable:!0,configurable:!0}});const Vt=this._main(this.params);ne.promise.set(this,Vt)}_main(E){let B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};P(Object.assign({},B,E)),Jt.currentInstance&&(Jt.currentInstance._destroy(),Z()&&_r()),Jt.currentInstance=this;const q=Fe(E,B);Sp(q),Object.freeze(q),Jt.timeout&&(Jt.timeout.stop(),delete Jt.timeout),clearTimeout(Jt.restoreFocusTimeout);const dt=Ss(this);return Ul(this,q),ne.innerParams.set(this,q),Cd(this,dt,q)}then(E){return ne.promise.get(this).then(E)}finally(E){return ne.promise.get(this).finally(E)}}const Cd=(v,E,B)=>new Promise((q,dt)=>{const Vt=ze=>{v.closePopup({isDismissed:!0,dismiss:ze})};xr.swalPromiseResolve.set(v,q),xr.swalPromiseReject.set(v,dt),E.confirmButton.onclick=()=>Rp(v),E.denyButton.onclick=()=>zp(v),E.cancelButton.onclick=()=>jp(v,Vt),E.closeButton.onclick=()=>Vt(yi.close),Xl(v,E,Vt),od(v,Jt,B,Vt),Bp(v,B),Ha(B),vd(Jt,B,Vt),yd(E,B),setTimeout(()=>{E.container.scrollTop=0})}),Fe=(v,E)=>{const B=xi(v),q=Object.assign({},O,E,B,v);return q.showClass=Object.assign({},O.showClass,q.showClass),q.hideClass=Object.assign({},O.hideClass,q.hideClass),q},Ss=v=>{const E={popup:yt(),container:Ot(),actions:Et(),confirmButton:jt(),denyButton:te(),cancelButton:ct(),loader:it(),closeButton:ee(),validationMessage:At(),progressSteps:_e()};return ne.domCache.set(v,E),E},vd=(v,E,B)=>{const q=Wt();we(q),E.timer&&(v.timeout=new vs(()=>{B("timer"),delete v.timeout},E.timer),E.timerProgressBar&&(ae(q),rt(q,E,"timerProgressBar"),setTimeout(()=>{v.timeout&&v.timeout.running&&Ge(E.timer)})))},yd=(v,E)=>{if(!E.toast){if(!y(E.allowEnterKey))return Is();se(v,E)||yr(E,-1,1)}},se=(v,E)=>E.focusDeny&&We(v.denyButton)?(v.denyButton.focus(),!0):E.focusCancel&&We(v.cancelButton)?(v.cancelButton.focus(),!0):E.focusConfirm&&We(v.confirmButton)?(v.confirmButton.focus(),!0):!1,Is=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Lt.prototype,dc),Object.assign(Lt,Qp),Object.keys(dc).forEach(v=>{Lt[v]=function(){if(Tr)return Tr[v](...arguments)}}),Lt.DismissReason=yi,Lt.version="11.4.0";const Sr=Lt;return Sr.default=Sr,Sr}),typeof Wi<"u"&&Wi.Sweetalert2&&(Wi.swal=Wi.sweetAlert=Wi.Swal=Wi.SweetAlert=Wi.Sweetalert2)})(i5);var Gu=i5.exports;class aZ{static install(s,l={}){var h;const p=Gu.mixin(l),m=function(...k){return p.fire.call(p,...k)};Object.assign(m,Gu),Object.keys(Gu).filter(k=>typeof Gu[k]=="function").forEach(k=>{m[k]=p[k].bind(p)}),(h=s.config)!=null&&h.globalProperties&&!s.config.globalProperties.$swal?(s.config.globalProperties.$swal=m,s.provide("$swal",m)):Object.prototype.hasOwnProperty.call(s,"$swal")||(s.prototype.$swal=m,s.swal=m)}}const ep=wD(Vj);ep.use(sZ);ep.use(aZ);ep.use(oT);ep.mount("#app");