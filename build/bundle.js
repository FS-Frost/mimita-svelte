var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function g(t){$=t}function b(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const v=[],y=[],x=[],k=[],w=Promise.resolve();let _=!1;function N(t){x.push(t)}let C=!1;const M=new Set;function T(){if(!C){C=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];g(e),E(e.$$)}for(g(null),v.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];M.has(e)||(M.add(e),e())}x.length=0}while(v.length);for(;k.length;)k.pop()();_=!1,C=!1,M.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const j=new Set;function q(t,e){t&&t.i&&(j.delete(t),t.i(e))}function B(t,n,i,s){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,i),s||N((()=>{const n=l.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(N)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,w.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,r,i,s,c,l,u,d=[-1]){const f=$;g(e);const m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};u&&u(m.root);let h=!1;if(m.ctx=i?i(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),h&&A(e,t)),n})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();r.intro&&q(e.$$.fragment),B(e,r.target,r.anchor,r.customElement),T()}g(f)}class O{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var S;!function(t){t.Normal="?",t.Clicked="Ñee ñee 👻",t.Blocked="X",t.Found="Nouuuuu 😣"}(S||(S={}));class H{constructor(t,e){this.blockTimer=null,this.x=t,this.y=e,this.state=S.Normal}print(){return`${this.x}x${this.y}`}hasSamePosition(t,e){return this.x==t&&this.y==e}}function P(t,e,n){const o=t.slice();return o[25]=e[n],o}function z(t){let e,n,r,i,$,g,b,v=t[25].state+"";function y(){return t[15](t[25])}function x(){return t[16](t[25])}function k(){return t[17](t[25])}function w(){return t[18](t[25])}function _(){return t[19](t[25])}return{c(){e=u("button"),n=d(v),r=f(),h(e,"class",i=s(t[8](t[25],t[0],t[1]))+" svelte-mansdr"),e.disabled=$=t[6]||t[25].state!=S.Normal},m(t,o){var i;l(t,e,o),c(e,n),c(e,r),g||(b=[m(e,"click",(i=y,function(t){return t.preventDefault(),i.call(this,t)})),m(e,"mousedown",x),m(e,"mouseup",k),m(e,"touchstart",w,{passive:!0}),m(e,"touchend",_,{passive:!0})],g=!0)},p(o,r){t=o,4&r&&v!==(v=t[25].state+"")&&p(n,v),7&r&&i!==(i=s(t[8](t[25],t[0],t[1]))+" svelte-mansdr")&&h(e,"class",i),68&r&&$!==($=t[6]||t[25].state!=S.Normal)&&(e.disabled=$)},d(t){t&&a(e),g=!1,o(b)}}}function D(e){let n,o,r,i,s,$,g,b,v,y,x,k,w,_,N,C,M,T,E,j,q,B,L=e[2],A=[];for(let t=0;t<L.length;t+=1)A[t]=z(P(e,L,t));return{c(){n=u("div"),o=u("div"),r=u("button"),r.textContent="Reiniciar",i=f(),s=u("div"),$=u("p"),$.innerHTML="<b>Mantener presionado para bloquear espacio (evita que la Mimita lo ocupe)</b>",g=f(),b=u("p"),v=d("Bloqueos disponibles: "),y=d(e[3]),x=f(),k=u("p"),w=d("Intentos disponibles: "),_=d(e[5]),N=f(),C=u("div"),M=d(e[4]),E=f(),j=u("div");for(let t=0;t<A.length;t+=1)A[t].c();h(r,"class","btn btn-primary"),h(o,"class","row mb-3"),h($,"class","svelte-mansdr"),h(b,"class","svelte-mansdr"),h(k,"class","svelte-mansdr"),h(s,"class","row info svelte-mansdr"),h(C,"class","row alert alert-primary"),h(C,"role","alert"),C.hidden=T=""==e[4],h(j,"class","row grid mb-3 svelte-mansdr"),h(n,"class","game svelte-mansdr")},m(t,a){l(t,n,a),c(n,o),c(o,r),c(n,i),c(n,s),c(s,$),c(s,g),c(s,b),c(b,v),c(b,y),c(s,x),c(s,k),c(k,w),c(k,_),c(n,N),c(n,C),c(C,M),c(n,E),c(n,j);for(let t=0;t<A.length;t+=1)A[t].m(j,null);q||(B=m(r,"click",e[14]),q=!0)},p(t,[e]){if(8&e&&p(y,t[3]),32&e&&p(_,t[5]),16&e&&p(M,t[4]),16&e&&T!==(T=""==t[4])&&(C.hidden=T),1863&e){let n;for(L=t[2],n=0;n<L.length;n+=1){const o=P(t,L,n);A[n]?A[n].p(o,e):(A[n]=z(o),A[n].c(),A[n].m(j,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=L.length}},i:t,o:t,d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(A,t),q=!1,B()}}}function I(t,e,n,o){return n==t&&o==e}function R(t){t.blockTimer&&clearTimeout(t.blockTimer)}function X(t,e,n){let o,r,i,s,c,l,a,u=0,d=0,f=[],m="";function h(){n(2,f=[...f])}function p(){n(4,m=""),n(2,f=[]);for(let t=0;t<3;t++)for(let e=0;e<3;e++){const o=new H(t,e);n(2,f=[...f,o])}$()}function $(){const t=f.filter((t=>t.state==S.Normal&&(u!=t.x||d!=t.y)));var e;const o=t[(e=t.length,Math.floor(Math.random()*e))];n(0,u=o.x),n(1,d=o.y)}function g(t){t.state=S.Found,h(),n(4,m="¡Mimita encontrada! 😛")}function v(t){if(I(t.x,t.y,u,d))return void g(t);t.state=S.Clicked,h();f.filter((t=>t.state==S.Clicked)).length>=3||0==s.length?n(4,m="¡La Mimita ganó! 🤗"):$()}function y(t){t.blockTimer=setTimeout((()=>{!function(t){I(t.x,t.y,u,d)?g(t):t.state===S.Normal&&(l?(t.state=S.Blocked,h()):alert("¡No quedan bloqueos!"))}(t)}),300)}b((()=>p()));return t.$$.update=()=>{4&t.$$.dirty&&n(13,r=f.some((t=>t.state==S.Found))),7&t.$$.dirty&&n(11,s=f.filter((t=>t.state==S.Normal&&(u!=t.x||d!=t.y)))),2052&t.$$.dirty&&n(12,i=f.filter((t=>t.state==S.Clicked)).length>=3||0==s.length),12288&t.$$.dirty&&n(6,o=r||i),4&t.$$.dirty&&n(3,c=5-f.filter((t=>t.state==S.Blocked)).length),8&t.$$.dirty&&(l=c>0),4&t.$$.dirty&&n(5,a=3-f.filter((t=>t.state==S.Clicked)).length)},[u,d,f,c,m,a,o,p,function(t,e,n){const{x:o,y:r}=t;return`btn grid-item text-center align-text-middle ${I(o,r,e,n)?"with-target":"without-target"} ${t.state==S.Clicked?"clicked":""} ${t.state==S.Blocked?"blocked":""}`},v,y,s,i,r,()=>p(),t=>v(t),t=>y(t),t=>R(t),t=>y(t),t=>R(t)]}class G extends O{constructor(t){super(),F(this,t,X,D,i,{})}}function J(e){let n,o,r,i,s,d,m;return i=new G({}),{c(){var t;n=u("main"),o=u("h1"),o.textContent="Mimita escapa escapa",r=f(),(t=i.$$.fragment)&&t.c(),s=f(),d=u("div"),d.innerHTML='<div class="container w-100"><p class="text-muted text-center w-100"></p></div>',h(o,"class","title svelte-ojt0c7"),h(n,"class","svelte-ojt0c7"),h(d,"class","footer w-100 svelte-ojt0c7")},m(t,e){l(t,n,e),c(n,o),c(n,r),B(i,n,null),l(t,s,e),l(t,d,e),m=!0},p:t,i(t){m||(q(i.$$.fragment,t),m=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),(void 0).c.push((()=>{j.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(i.$$.fragment,t),m=!1},d(t){t&&a(n),L(i),t&&a(s),t&&a(d)}}}return new class extends O{constructor(t){super(),F(this,t,null,J,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map