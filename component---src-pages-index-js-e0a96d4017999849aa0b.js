(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(169),o=n(8),l=n.n(o),c=(n(191),n(164)),u=n(195),m=n.n(u),s=n(192),p=n.n(s),d=function(e){return"https://github.com/"+e},h=c.a.a.withConfig({displayName:"GithubEvents__BoldLink",componentId:"sc-9q26lc-0"})(["font-weight:bold;"]),f=function(e){var t=e.repoName;return r.a.createElement(h,{href:d(t)},t)},E=c.a.span.withConfig({displayName:"GithubEvents__DateSpan",componentId:"sc-9q26lc-1"})(["font-style:italic;"]),y=function(e){var t=e.date;return r.a.createElement(E,null,function(e){return e.toLocaleDateString(void 0,{day:"numeric",month:"numeric",year:"numeric"})}(new Date(t)))},v=function(e){var t,n,a=e.event;return r.a.createElement("li",null,"Pushed ",a.payload.size," ",(t="commit",n="commits",1===a.payload.size?t:n)," to"," ",r.a.createElement(f,{repoName:a.repo.name}),r.a.createElement("br",null),r.a.createElement(y,{date:a.created_at}))},g=function(e){var t=e.event;return r.a.createElement("li",null,"Created repository ",r.a.createElement(f,{repoName:t.repo.name}),r.a.createElement("br",null),r.a.createElement(y,{date:t.created_at}))},w=function(e){var t=e.event;return r.a.createElement("li",null,"Opened pull request"," ",r.a.createElement(h,{href:t.payload.pull_request.html_url},t.payload.pull_request.title)," ","in ",r.a.createElement(f,{repoName:t.repo.name}),r.a.createElement("br",null),r.a.createElement(y,{date:t.created_at}))},b=function(e){var t=e.event;return r.a.createElement("li",null,"Published release"," ",r.a.createElement(h,{href:t.payload.release.html_url},t.payload.release.name)," ","of ",r.a.createElement(f,{repoName:t.repo.name}),r.a.createElement("br",null),r.a.createElement(y,{date:t.created_at}))},k=function(e){var t=e.event;return r.a.createElement("li",null,"Opened issue"," ",r.a.createElement(h,{href:t.payload.issue.html_url},t.payload.issue.title)," ","in ",r.a.createElement(f,{repoName:t.repo.name}),r.a.createElement("br",null),r.a.createElement(y,{date:t.created_at}))},_=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={events:[],error:null},n}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t=this;(e=this.props.user,fetch("https://api.github.com/users/"+e+"/events").then(function(e){return e.json()})).then(function(e){return t.setState({events:e})}).catch(function(e){return t.setState({error:e})})},n.render=function(){var e=this.state.error?r.a.createElement("p",null,this.state.error):this.state.events?r.a.createElement("ul",null,r.a.createElement(m.a,{appear:!0,enter:!0},this.state.events.map(function(e){return"PushEvent"===e.type?r.a.createElement(p.a,{key:e.id},r.a.createElement(v,{event:e})):"CreateEvent"===e.type&&"repository"===e.payload.ref_type?r.a.createElement(p.a,{key:e.id},r.a.createElement(g,{event:e})):"PullRequestEvent"===e.type&&"opened"===e.payload.action?r.a.createElement(p.a,{key:e.id},r.a.createElement(w,{event:e})):"ReleaseEvent"===e.type?r.a.createElement(p.a,{key:e.id},r.a.createElement(b,{event:e})):"IssuesEvent"===e.type&&"opened"===e.payload.action?r.a.createElement(p.a,{key:e.id},r.a.createElement(k,{event:e})):null}))):r.a.createElement("div",null);return r.a.createElement("div",null,r.a.createElement("h3",null,"Activity in GitHub"),e)},t}(r.a.Component),C=n(170);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{pagePath:"/"}),r.a.createElement(i.a,null,r.a.createElement(_,{user:"mjaakko"})))}},165:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(40),c=n.n(l);n.d(t,"a",function(){return c.a});n(166);var u=r.a.createContext({});function m(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:n,render:a||i,staticQueryData:e})})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},166:function(e,t,n){var a;e.exports=(a=n(168))&&a.default||a},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Jaakko Malkki",headerColor:"#825d21",menu:[{path:"/projects",title:"Projects"},{path:"/contact",title:"Contact"}]}}}}},168:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(64),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},169:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(164),o=n(8),l=n.n(o),c=n(167),u=n(165),m=i.a.span.withConfig({displayName:"MenuButton__MenuButtonBar",componentId:"kz4t25-0"})(["display:block;background-color:",";border-radius:3px;height:5px;"],function(e){return e.color||"white"}),s=i.a.button.withConfig({displayName:"MenuButton",componentId:"kz4t25-1"})(["width:",";height:",";display:flex;flex-direction:column;justify-content:space-evenly;align-items:stretch;border:none;font:inherit;color:inherit;background-color:transparent;padding 0"],function(e){return e.size},function(e){return e.size}),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}l()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){t.open!==this.state.open&&this.props.onChange(this.state.open)},n.render=function(){var e=this;return r.a.createElement(s,{className:this.props.className,size:this.props.size,onClick:function(){return e.setState(function(e){return{open:!e.open}})}},r.a.createElement(m,{color:this.props.color}),r.a.createElement(m,{color:this.props.color}),r.a.createElement(m,{color:this.props.color}))},t}(r.a.PureComponent),d=n(172),h=n.n(d),f=n(173),E=n.n(f),y=new h.a(E.a).options,v=Object(i.a)(u.a).withConfig({displayName:"Header__MenuLink",componentId:"uv17pj-0"})(["display:inline-block;color:white;font-weight:bold;font-family:",";margin:0 0.5rem;transition:all 0.3s ease-in-out 0s;&:hover{color:white;transform:rotate(10deg);}"],y.headerFontFamily.join()),g=r.a.memo(function(e){var t=e.title,n=e.path;return r.a.createElement(v,{to:n},t)}),w=i.a.nav.withConfig({displayName:"Header__MobileMenuNav",componentId:"uv17pj-1"})(["display:",";flex-direction:column;justify-content:space-evenly;align-items:stretch;@media (min-width:800px){display:none;}"],function(e){return e.open?"flex":"none"}),b=function(e){var t=e.menu,n=e.open;return r.a.createElement(w,{open:n},t.map(function(e){return r.a.createElement(g,{key:e.path,path:e.path,title:e.title})}))},k=i.a.nav.withConfig({displayName:"Header__DesktopMenuNav",componentId:"uv17pj-2"})(["display:none;@media (min-width:800px){display:inline;}"]),_=function(e){var t=e.menu;return r.a.createElement(k,null,t.map(function(e){return r.a.createElement(g,{key:e.path,path:e.path,title:e.title})}))},C=i.a.header.withConfig({displayName:"Header",componentId:"uv17pj-3"})(["background-color:",";width:100%;padding:1rem 1rem;margin-bottom:1rem;box-shadow:0 1px 4px 4px gray;"],function(e){return e.color}),x=i.a.div.withConfig({displayName:"Header__HeaderContainer",componentId:"uv17pj-4"})(["display:flex;justify-content:start;align-items:center;flex-wrap:wrap;width:100%;margin:0 auto;@media (min-width:800px){max-width:1350px;}"]),M=i.a.h1.withConfig({displayName:"Header__HeaderTitle",componentId:"uv17pj-5"})(["display:inline;flex-grow:1;margin:0;"]),N=Object(i.a)(p).withConfig({displayName:"Header__MobileMenuButton",componentId:"uv17pj-6"})(["@media (min-width:800px){display:none;}"]),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).onChange=function(e){return n.setState({mobileMenuOpen:e})},n.state={mobileMenuOpen:!1},n}return l()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement(u.b,{query:"1451359731",render:function(t){return r.a.createElement(C,{color:t.site.siteMetadata.headerColor},r.a.createElement(x,null,r.a.createElement(M,null,r.a.createElement(u.a,{to:"/",style:{color:"white"}},t.site.siteMetadata.title)),r.a.createElement(_,{menu:t.site.siteMetadata.menu}),r.a.createElement(N,{size:"50px",onChange:e.onChange})),r.a.createElement(b,{menu:t.site.siteMetadata.menu,open:e.state.mobileMenuOpen}))},data:c})},t}(r.a.Component),q=i.a.div.withConfig({displayName:"layout__Container",componentId:"oq60o1-0"})(["margin:0 auto;max-width:1000px;padding:0 2rem;"]);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(q,null,t))}},170:function(e,t,n){"use strict";var a=n(171),r=n(0),i=n.n(r),o=n(174),l=n(165);t.a=function(e){var t=e.pageTitle,n=e.pageDescription,r=e.pagePath;return i.a.createElement(l.b,{query:"4061694213",render:function(e){var a=e.site.siteMetadata,l=t?t+" | "+a.title:a.title,c=a.siteUrl+r,u=n||"Personal website of Jaakko Malkki";return i.a.createElement(o.Helmet,null,i.a.createElement("html",{lang:"en",prefix:"og: http://ogp.me/ns#"}),i.a.createElement("meta",{property:"og:url",content:c}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:u}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:u}),i.a.createElement("title",null,l),i.a.createElement("meta",{name:"description",content:u}),i.a.createElement("link",{rel:"canonical",href:c}),i.a.createElement("meta",{name:"google-site-verification",content:"7plJI9PIjUYQfvMz5-tplgZZ5kEGyE7zxOK5kps1CXM"}))},data:a})}},171:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://malkki.xyz",title:"Jaakko Malkki"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-e0a96d4017999849aa0b.js.map