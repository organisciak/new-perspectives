import{F as D,S as R,i as q,s as B,l as b,r as w,a as A,m as v,n as h,u as C,h as c,c as H,p as f,G as E,b as g,H as m,E as F,I as G,J,w as K,x as P,y as T,K as U,L as V,M as j,f as M,t as N,B as x}from"../chunks/index-bb97c4eb.js";import{b as O}from"../chunks/paths-86ffdd15.js";/* empty css                                                     */const z=()=>{const a=D("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},Q={subscribe(a){return z().page.subscribe(a)}};function W(a){let s,i,r,n,o,d,p,u,t,e;return{c(){s=b("header"),i=b("nav"),r=b("ul"),n=b("li"),o=b("a"),d=w("Home"),p=A(),u=b("li"),t=b("a"),e=w("About"),this.h()},l(l){s=v(l,"HEADER",{class:!0});var _=h(s);i=v(_,"NAV",{class:!0});var k=h(i);r=v(k,"UL",{class:!0});var $=h(r);n=v($,"LI",{class:!0});var y=h(n);o=v(y,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var I=h(o);d=C(I,"Home"),I.forEach(c),y.forEach(c),p=H($),u=v($,"LI",{class:!0});var L=h(u);t=v(L,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var S=h(t);e=C(S,"About"),S.forEach(c),L.forEach(c),$.forEach(c),k.forEach(c),_.forEach(c),this.h()},h(){f(o,"sveltekit:prefetch",""),f(o,"href",O+"/"),f(o,"class","svelte-1g00a6b"),f(n,"class","svelte-1g00a6b"),E(n,"active",a[0].url.pathname==="{base}/"),f(t,"sveltekit:prefetch",""),f(t,"href",O+"/about"),f(t,"class","svelte-1g00a6b"),f(u,"class","svelte-1g00a6b"),E(u,"active",a[0].url.pathname==="{base}/about"),f(r,"class","svelte-1g00a6b"),f(i,"class","svelte-1g00a6b"),f(s,"class","svelte-1g00a6b")},m(l,_){g(l,s,_),m(s,i),m(i,r),m(r,n),m(n,o),m(o,d),m(r,p),m(r,u),m(u,t),m(t,e)},p(l,[_]){_&1&&E(n,"active",l[0].url.pathname==="{base}/"),_&1&&E(u,"active",l[0].url.pathname==="{base}/about")},i:F,o:F,d(l){l&&c(s)}}}function X(a,s,i){let r;return G(a,Q,n=>i(0,r=n)),[r]}class Y extends R{constructor(s){super(),q(this,s,X,W,B,{})}}function Z(a){let s,i,r,n,o,d,p;s=new Y({});const u=a[1].default,t=J(u,a,a[0],null);return{c(){K(s.$$.fragment),i=A(),r=b("main"),t&&t.c(),n=A(),o=b("footer"),d=b("p")},l(e){P(s.$$.fragment,e),i=H(e),r=v(e,"MAIN",{});var l=h(r);t&&t.l(l),l.forEach(c),n=H(e),o=v(e,"FOOTER",{});var _=h(o);d=v(_,"P",{}),h(d).forEach(c),_.forEach(c)},m(e,l){T(s,e,l),g(e,i,l),g(e,r,l),t&&t.m(r,null),g(e,n,l),g(e,o,l),m(o,d),p=!0},p(e,[l]){t&&t.p&&(!p||l&1)&&U(t,u,e,e[0],p?j(u,e[0],l,null):V(e[0]),null)},i(e){p||(M(s.$$.fragment,e),M(t,e),p=!0)},o(e){N(s.$$.fragment,e),N(t,e),p=!1},d(e){x(s,e),e&&c(i),e&&c(r),t&&t.d(e),e&&c(n),e&&c(o)}}}function ee(a,s,i){let{$$slots:r={},$$scope:n}=s;return a.$$set=o=>{"$$scope"in o&&i(0,n=o.$$scope)},[n,r]}class re extends R{constructor(s){super(),q(this,s,ee,Z,B,{})}}export{re as default};
