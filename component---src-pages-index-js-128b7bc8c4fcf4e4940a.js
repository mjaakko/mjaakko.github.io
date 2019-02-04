(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=function(e){var t=e.children;return o.a.createElement("div",{style:{margin:"0 auto",maxWidth:1e3,padding:"0 1rem"}},t)},a=n(7),s=n.n(a),l=(n(139),n(140)),u=n.n(l),d=function(e){return"https://github.com/"+e},c=function(e){var t=e.repoName;return o.a.createElement("a",{href:d(t),style:{fontWeight:"bold"}},t)},p=function(e){var t=e.date;return o.a.createElement("span",{style:{fontStyle:"italic"}},function(e){return e.toLocaleDateString(void 0,{day:"numeric",month:"numeric",year:"numeric"})}(new Date(t)))},h=function(e){var t,n,i=e.event;return o.a.createElement("li",null,"Pushed ",i.payload.size," ",(t="commit",n="commits",1===i.payload.size?t:n)," to"," ",o.a.createElement(c,{repoName:i.repo.name}),o.a.createElement("br",null),o.a.createElement(p,{date:i.created_at}))},f=function(e){var t=e.event;return o.a.createElement("li",null,"Created repository ",o.a.createElement(c,{repoName:t.repo.name}),o.a.createElement("br",null),o.a.createElement(p,{date:t.created_at}))},v=function(e){var t=e.event;return o.a.createElement("li",null,"Opened pull request"," ",o.a.createElement("a",{href:t.payload.pull_request.html_url,style:{fontWeight:"bold"}},t.payload.pull_request.title)," ","in ",o.a.createElement(c,{repoName:t.repo.name}),o.a.createElement("br",null),o.a.createElement(p,{date:t.created_at}))},m=function(e){var t=e.event;return o.a.createElement("li",null,"Published release"," ",o.a.createElement("a",{href:t.payload.release.html_url,style:{fontWeight:"bold"}},t.payload.release.name)," ","of ",o.a.createElement(c,{repoName:t.repo.name}),o.a.createElement("br",null),o.a.createElement(p,{date:t.created_at}))},y=function(e){var t=e.event;return o.a.createElement("li",null,"Opened issue"," ",o.a.createElement("a",{href:t.payload.issue.html_url,style:{fontWeight:"bold"}},t.payload.issue.title)," ","in ",o.a.createElement(c,{repoName:t.repo.name}),o.a.createElement("br",null),o.a.createElement(p,{date:t.created_at}))},w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={events:[],error:null},n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t=this;(e=this.props.user,fetch("https://api.github.com/users/"+e+"/events").then(function(e){return e.json()})).then(function(e){return t.setState({events:e})}).catch(function(e){return t.setState({error:e})})},n.render=function(){var e=this.state.error?o.a.createElement("p",null,this.state.error):this.state.events?o.a.createElement("ul",null,this.state.events.map(function(e){return"PushEvent"===e.type?o.a.createElement(u.a,null,o.a.createElement(h,{event:e})):"CreateEvent"===e.type&&"repository"===e.payload.ref_type?o.a.createElement(u.a,null,o.a.createElement(f,{event:e})):"PullRequestEvent"===e.type&&"opened"===e.payload.action?o.a.createElement(u.a,null,o.a.createElement(v,{event:e})):"ReleaseEvent"===e.type?o.a.createElement(u.a,null,o.a.createElement(m,{event:e})):"IssuesEvent"===e.type&&"opened"===e.payload.action?o.a.createElement(u.a,null,o.a.createElement(y,{event:e})):null})):o.a.createElement("div",null);return o.a.createElement("div",null,o.a.createElement("h3",null,"Activity in GitHub"),e)},t}(o.a.Component);t.default=function(){return o.a.createElement(r,null,o.a.createElement(w,{user:"mjaakko"}))}},138:function(e,t,n){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",o,!0),i("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,o){var r=Math.log(i),a=(Math.log(o)-r)/(n-t);return Math.exp(r+a*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+p)+"{"+e+"}",n=h[e];return n?""+v+n:(f.insertRule(t,f.cssRules.length),h[e]=p,""+v+p++)},t.hideAll=o,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var r=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},u=t.disableSsr=function(){return t.ssr=a=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,v=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(u,1500),s||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},139:function(e,t,n){var i=n(23).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||n(16)&&i(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},140:function(e,t,n){"use strict";function i(e,t){var n=t.distance,i=t.left,o=t.right,r=t.up,a=t.down,l=t.top,u=t.bottom,d=t.big,p=t.mirror,h=t.opposite,f=(n?n.toString():0)+((i?1:0)|(o?2:0)|(l||a?4:0)|(u||r?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(d?128:0));if(c.hasOwnProperty(f))return c[f];var v=i||o||r||a||l||u,m=void 0,y=void 0;if(v){if(!p!=!(e&&h)){var w=[o,i,u,l,a,r];i=w[0],o=w[1],l=w[2],u=w[3],r=w[4],a=w[5]}var b=n||(d?"2000px":"100%");m=i?"-"+b:o?b:"0",y=a||l?"-"+b:r||u?b:"0"}return c[f]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),c[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,o=(e.out,e.forever),r=e.timeout,a=e.duration,l=void 0===a?s.defaults.duration:a,d=e.delay,c=void 0===d?s.defaults.delay:d,p=e.count,h=void 0===p?s.defaults.count:p,f=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:i,duration:void 0===r?l:r,delay:c,forever:o,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,u.default)(f,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(4),s=n(138),l=n(141),u=(r=l)&&r.__esModule?r:{default:r},d={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},c={};o.propTypes=d,t.default=o,e.exports=t.default},141:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),r.default.Children.count(i)<2?r.default.createElement(a.default,o({},e,{inEffect:t,outEffect:n,children:i})):(i=r.default.Children.map(i,function(i){return r.default.createElement(a.default,o({},e,{inEffect:t,outEffect:n,children:i}))}),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,i):r.default.createElement("span",null,i))};var r=i(n(0)),a=i(n(142));e.exports=t.default},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),u=(i=l)&&i.__esModule?i:{default:i},d=n(4),c=n(138),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),h={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,c.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!c.observerMode&&this.props.collapse&&window.document.dispatchEvent(c.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,r=n.count,a=n.delay,s=n.duration;if(!o){this.animationEndTimeout=window.setTimeout(function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))},a+(s+(t?s:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,r=void 0,a=void 0;if(t.collapseOnly)r=n.duration/3,a=n.delay;else{var s=i>>2,l=s>>1;r=s,a=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:o,transition:"height "+r+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),c.ssr&&(0,c.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&c.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.globalHide||(0,c.hideAll)(),this&&this.el&&(e||(e=this.props),c.ssr&&(0,c.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):c.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||c.ssr&&!c.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):c.ssr&&(c.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):u.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=i.duration,s=i.reverse,l=n.length,d=2*r;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),r=d/2);var p=s?l:0;return n.map(function(e){return"object"===(void 0===e?"undefined":o(e))&&e?u.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,c.cascade)(s?p--:p++,0,l,r,d))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,o=i.style,r=i.className,s=i.children,l=this.props.disabled?r:(this.props.outEffect?c.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),d=a({},o,{opacity:1})):d=this.props.disabled?o:a({},o,this.state.style);var p=a({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),h=u.default.cloneElement(t,p,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,c.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(c.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){c.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!c.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();v.propTypes=h,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-128b7bc8c4fcf4e4940a.js.map