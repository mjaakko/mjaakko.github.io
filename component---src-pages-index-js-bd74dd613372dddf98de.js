(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(170),o=(n(176),n(164)),l=n(192),c=n.n(l),m=n(195),u=n.n(m),p=Object(o.b)(['0%{content:"";}25%{content:".";}50%{content:"..";}75%{content:"...";}100%{content:"";}']),s=o.a.span.withConfig({displayName:"LoadingIndicator",componentId:"u8s378-0"})(['display:table;margin:6rem auto;&::after{display:inline-block;content:"...";animation:'," linear 2s infinite;}"],p),d=n(174),f=function(e){var t=e.url;return r.a.createElement(d.Helmet,null,r.a.createElement("link",{href:t,rel:"preconnect",crossOrigin:!0}))},E=(n(41),function(e){var t=Object(a.useState)(null),n=t[0],r=t[1],i=Object(a.useState)(null),o=i[0],l=i[1];return Object(a.useEffect)(function(){var t=function(e,t){if("AbortController"in window){var n=new AbortController,a=n.signal;return{promise:fetch(e,Object.assign({},t,{signal:a})),cancel:function(){return n.abort()}}}return{promise:fetch(e,t),cancel:function(){}}}("https://api.github.com/users/"+e+"/events"),n=t.promise,a=t.cancel;return n.then(function(e){return e.json()}).then(r).catch(function(e){"AbortError"!==e.name&&l(e)}),a},[e]),{events:n,error:o}}),h=function(e){return"https://github.com/"+e},g=o.a.a.withConfig({displayName:"GithubEvents__BoldLink",componentId:"sc-9q26lc-0"})(["font-weight:bold;"]),y=function(e){var t=e.repoName;return r.a.createElement(g,{href:h(t)},t)},v=o.a.time.withConfig({displayName:"GithubEvents__StyledTime",componentId:"sc-9q26lc-1"})(["font-style:italic;"]),b=function(e){var t=e.date,n=new Date(t);return r.a.createElement(v,{dateTime:n.toISOString()},u()(n).fromNow())},w=function(e){var t,n,a=e.event;return r.a.createElement(r.a.Fragment,null,"Pushed ",a.payload.size," ",(t="commit",n="commits",1===a.payload.size?t:n)," to"," ",r.a.createElement(y,{repoName:a.repo.name}),r.a.createElement("br",null),r.a.createElement(b,{date:a.created_at}))},k=function(e){var t=e.event;return r.a.createElement(r.a.Fragment,null,"Created repository ",r.a.createElement(y,{repoName:t.repo.name}),r.a.createElement("br",null),r.a.createElement(b,{date:t.created_at}))},x=function(e){var t=e.event;return r.a.createElement(r.a.Fragment,null,"Opened pull request"," ",r.a.createElement(g,{href:t.payload.pull_request.html_url},t.payload.pull_request.title)," ","in ",r.a.createElement(y,{repoName:t.repo.name}),r.a.createElement("br",null),r.a.createElement(b,{date:t.created_at}))},_=function(e){var t=e.event;return r.a.createElement(r.a.Fragment,null,"Published release"," ",r.a.createElement(g,{href:t.payload.release.html_url},t.payload.release.name)," ","of ",r.a.createElement(y,{repoName:t.repo.name}),r.a.createElement("br",null),r.a.createElement(b,{date:t.created_at}))},j=function(e){var t=e.event;return r.a.createElement(r.a.Fragment,null,"Opened issue"," ",r.a.createElement(g,{href:t.payload.issue.html_url},t.payload.issue.title)," ","in ",r.a.createElement(y,{repoName:t.repo.name}),r.a.createElement("br",null),r.a.createElement(b,{date:t.created_at}))},C=function(e){var t=e.user,n=E(t),a=n.events,i=n.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{url:"https://api.github.com"}),r.a.createElement("div",null,r.a.createElement("h3",null,"Activity in GitHub"),!!a||!!i||r.a.createElement(s,null,"Loading"),i&&r.a.createElement("p",null,i),a&&r.a.createElement(c.a,{bottom:!0,cascade:!0,duration:1200},r.a.createElement("ul",null,a.map(function(e){return"PushEvent"===e.type?r.a.createElement("li",{key:e.id},r.a.createElement(w,{event:e})):"CreateEvent"===e.type&&"repository"===e.payload.ref_type?r.a.createElement("li",{key:e.id},r.a.createElement(k,{event:e})):"PullRequestEvent"===e.type&&"opened"===e.payload.action?r.a.createElement("li",{key:e.id},r.a.createElement(x,{key:e.id,event:e})):"ReleaseEvent"===e.type?r.a.createElement("li",{key:e.id},r.a.createElement(_,{key:e.id,event:e})):"IssuesEvent"===e.type&&"opened"===e.payload.action?r.a.createElement("li",{key:e.id},r.a.createElement(j,{key:e.id,event:e})):null})))))},N=n(171);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{pagePath:"/"}),r.a.createElement(i.a,null,r.a.createElement(C,{user:"mjaakko"})))}},165:function(e,t,n){var a;e.exports=(a=n(168))&&a.default||a},166:function(e,t,n){"use strict";var a=n(169);t.a=function(){return a.data.site.siteMetadata}},167:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(40),c=n.n(l);n.d(t,"a",function(){return c.a});n(165),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},168:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(64),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},169:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://malkki.xyz",title:"Jaakko Malkki",description:"Personal website of Jaakko Malkki",headerColor:"#825d21",menu:[{path:"/projects",title:"Projects"},{path:"/contact",title:"Contact"}]}}}}},170:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(164),o=n(167),l=i.a.span.withConfig({displayName:"MenuButton__MenuButtonBar",componentId:"kz4t25-0"})(["display:block;background-color:",";border-radius:3px;height:5px;"],function(e){return e.color||"white"}),c=i.a.button.withConfig({displayName:"MenuButton",componentId:"kz4t25-1"})(["width:",";height:",";display:flex;flex-direction:column;justify-content:space-evenly;align-items:stretch;border:none;font:inherit;color:inherit;background-color:transparent;padding 0"],function(e){return e.size},function(e){return e.size}),m=n(166),u=n(172),p=n.n(u),s=n(173),d=n.n(s),f=new p.a(d.a).options,E=Object(i.a)(o.a).withConfig({displayName:"Header__MenuLink",componentId:"uv17pj-0"})(["display:inline-block;color:white;font-weight:bold;font-family:",";margin:0 0.5rem;transition:all 0.3s ease-in-out 0s;&:hover{color:white;text-decoration:underline;}@media (min-width:800px){&:hover{text-decoration:none;transform:rotate(10deg);}}"],f.headerFontFamily.join()),h=r.a.memo(function(e){var t=e.title,n=e.path;return r.a.createElement(E,{to:n},t)}),g=i.a.nav.withConfig({displayName:"Header__MobileMenuNav",componentId:"uv17pj-1"})(["display:",";flex-direction:column;justify-content:space-evenly;align-items:center;@media (min-width:800px){display:none;}"],function(e){return e.open?"flex":"none"}),y=function(e){var t=e.menu,n=e.open;return r.a.createElement(g,{open:n},t.map(function(e){return r.a.createElement(h,{key:e.path,path:e.path,title:e.title})}))},v=i.a.nav.withConfig({displayName:"Header__DesktopMenuNav",componentId:"uv17pj-2"})(["display:none;@media (min-width:800px){display:inline;}"]),b=function(e){var t=e.menu;return r.a.createElement(v,null,t.map(function(e){return r.a.createElement(h,{key:e.path,path:e.path,title:e.title})}))},w=i.a.header.withConfig({displayName:"Header",componentId:"uv17pj-3"})(["background-color:",";width:100%;padding:1rem 1rem;margin-bottom:1rem;box-shadow:0 1px 4px 4px gray;"],function(e){return e.color}),k=i.a.div.withConfig({displayName:"Header__HeaderContainer",componentId:"uv17pj-4"})(["display:flex;justify-content:start;align-items:center;flex-wrap:wrap;width:100%;margin:0 auto;@media (min-width:800px){max-width:1350px;}"]),x=i.a.h1.withConfig({displayName:"Header__HeaderTitle",componentId:"uv17pj-5"})(["display:inline;flex-grow:1;margin:0;"]),_=Object(i.a)(function(e){var t=e.className,n=e.color,i=e.size,o=e.onChange,m=Object(a.useState)(!1),u=m[0],p=m[1];return r.a.createElement(c,{className:t,size:i,onClick:function(){o(!u),p(!u)}},r.a.createElement(l,{color:n}),r.a.createElement(l,{color:n}),r.a.createElement(l,{color:n}))}).withConfig({displayName:"Header__MobileMenuButton",componentId:"uv17pj-6"})(["@media (min-width:800px){display:none;}"]),j=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=Object(m.a)();return r.a.createElement(w,{color:i.headerColor},r.a.createElement(k,null,r.a.createElement(x,null,r.a.createElement(o.a,{to:"/",style:{color:"white"}},i.title)),r.a.createElement(b,{menu:i.menu}),r.a.createElement(_,{size:"50px",onChange:n})),r.a.createElement(y,{menu:i.menu,open:t}))},C=i.a.main.withConfig({displayName:"layout__Container",componentId:"oq60o1-0"})(["margin:0 auto;max-width:1000px;padding:0 2rem;"]);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(C,null,t))}},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(174),o=n(166);t.a=function(e){var t=e.pageTitle,n=e.pageDescription,a=e.pagePath,l=Object(o.a)(),c=t?t+" | "+l.title:l.title,m=l.siteUrl+a,u=n||l.description,p={"@context":"https://schema.org","@type":"WebSite",inLanguage:"en",description:l.description,name:l.title,url:l.siteUrl},s={"@context":"https://schema.org","@type":"WebPage",inLanguage:"en",url:m,name:t,description:u};return r.a.createElement(i.Helmet,null,r.a.createElement("html",{lang:"en",prefix:"og: http://ogp.me/ns#"}),r.a.createElement("meta",{property:"og:url",content:m}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:t||l.title}),r.a.createElement("meta",{property:"og:site_name",content:l.title}),r.a.createElement("meta",{property:"og:description",content:u}),r.a.createElement("meta",{property:"og:locale",description:"en"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:title",content:c}),r.a.createElement("meta",{name:"twitter:description",content:u}),r.a.createElement("title",null,c),r.a.createElement("meta",{name:"description",content:u}),r.a.createElement("link",{rel:"canonical",href:m}),r.a.createElement("meta",{name:"google-site-verification",content:"7plJI9PIjUYQfvMz5-tplgZZ5kEGyE7zxOK5kps1CXM"}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify([p,s])))}}}]);
//# sourceMappingURL=component---src-pages-index-js-bd74dd613372dddf98de.js.map