function E(){}const ft=t=>t;function J(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(T)}function K(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function dt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function Q(t){return Object.keys(t).length===0}function R(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function _t(t,n,e){t.$$.on_destroy.push(R(n,e))}function ht(t,n,e,i){if(t){const c=z(t,n,e,i);return t[0](c)}}function z(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)s[u]=n.dirty[u]|c[u];return s}return n.dirty|c}return n.dirty}function pt(t,n,e,i,c,s){if(c){const o=z(n,e,i,s);t.p(o,c)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}const B=typeof window<"u";let gt=B?()=>window.performance.now():()=>Date.now(),O=B?t=>requestAnimationFrame(t):E;const _=new Set;function D(t){_.forEach(n=>{n.c(t)||(_.delete(n),n.f())}),_.size!==0&&O(D)}function xt(t){let n;return _.size===0&&O(D),{promise:new Promise(e=>{_.add(n={c:t,f:e})}),abort(){_.delete(n)}}}let A=!1;function U(){A=!0}function W(){A=!1}function V(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const l=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=l?c+1:V(1,c,g=>n[e[g]].claim_order,l))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);s.reverse(),o.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<o.length;r++){for(;l<s.length&&o[r].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(o[r],a)}}function Y(t,n){if(A){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function bt(t,n,e){A&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Z(t){t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function wt(){return N(" ")}function $t(){return N("")}function Et(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function At(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,c=!1){et(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function it(t,n,e,i){return F(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||s.push(u.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function vt(t,n,e){return it(t,n,e,tt)}function rt(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function St(t){return rt(t," ")}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n,e){t.classList[e?"add":"remove"](n)}function Ct(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function m(t){p=t}function v(){if(!p)throw new Error("Function called outside component initialization");return p}function qt(t){v().$$.on_mount.push(t)}function Mt(t){v().$$.after_update.push(t)}function Lt(t,n){return v().$$.context.set(t,n),n}function Pt(t){return v().$$.context.get(t)}const h=[],L=[],w=[],P=[],H=Promise.resolve();let j=!1;function I(){j||(j=!0,H.then(G))}function Tt(){return I(),H}function k(t){w.push(t)}const S=new Set;let b=0;function G(){const t=p;do{for(;b<h.length;){const n=h[b];b++,m(n),ct(n.$$)}for(m(null),h.length=0,b=0;L.length;)L.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];S.has(e)||(S.add(e),e())}w.length=0}while(h.length);for(;P.length;)P.pop()();j=!1,S.clear(),m(t)}function ct(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const $=new Set;let d;function zt(){d={r:0,c:[],p:d}}function Bt(){d.r||y(d.c),d=d.p}function ot(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Dt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],u=n[s];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[s]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function Ht(t){t&&t.c()}function It(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||k(()=>{const r=s.map(T).filter(K);o?o.push(...r):y(r),t.$$.on_mount=[]}),u.forEach(k)}function lt(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(h.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,c,s,o,u=[-1]){const r=p;m(t);const l=t.$$={fragment:null,ctx:null,props:s,update:E,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...C)=>{const q=C.length?C[0]:g;return l.ctx&&c(l.ctx[f],l.ctx[f]=q)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](q),a&&st(t,f)),g}):[],l.update(),a=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){U();const f=nt(n.target);l.fragment&&l.fragment.l(f),f.forEach(Z)}else l.fragment&&l.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),W(),G()}m(r)}class Jt{$destroy(){lt(this,1),this.$destroy=E}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ft as A,lt as B,J as C,Tt as D,E,Pt as F,Nt as G,Y as H,_t as I,ht as J,pt as K,yt as L,mt as M,Ct as N,dt as O,gt as P,xt as Q,ft as R,Jt as S,Et as T,y as U,wt as a,bt as b,St as c,Bt as d,$t as e,ot as f,zt as g,Z as h,Gt as i,Lt as j,Mt as k,tt as l,vt as m,nt as n,qt as o,At as p,kt as q,N as r,at as s,Ot as t,rt as u,jt as v,Ht as w,It as x,ut as y,Dt as z};
