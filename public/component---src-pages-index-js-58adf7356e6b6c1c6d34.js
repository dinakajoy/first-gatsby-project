"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[678],{1496:function(e,t,a){var r=a(5318);t.Z=void 0;var n,i=r(a(1506)),l=r(a(5354)),s=r(a(7316)),o=r(a(7154)),c=r(a(7294)),d=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],m=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),E=function(e){var t=m(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function N(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+l+s+a+r+t+i+n+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,s=c.default.createElement(C,(0,o.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?c.default.createElement("picture",null,n(r),s):s})),C=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,m=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,u);return c.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:n},h,{onLoad:l,onError:d,ref:t,loading:m,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&E(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:E(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=E(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,w=e.draggable,I=p||g;if(!I)return null;var x=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:x?1:0,transition:k?"opacity "+b+"ms":"none"},s),V="boolean"==typeof E?"lightgray":E,j={transitionDelay:b+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&j,s,u),_={title:t,alt:this.state.isVisible?"":a,style:H,className:f,itemProp:y},W=this.state.isHydrated?h(I):I[0];if(p)return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),V&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&j)}),W.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:_,imageVariants:I,generateSources:R}),W.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:_,imageVariants:I,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,N(I),c.default.createElement(C,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,o.default)({alt:a,title:t,loading:S},W,{imageVariants:I}))}}));if(g){var U=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete U.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},V&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},k&&j)}),W.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:_,imageVariants:I,generateSources:R}),W.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:_,imageVariants:I,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,N(I),c.default.createElement(C,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,o.default)({alt:a,title:t,loading:S},W,{imageVariants:I}))}}))}return null},t}(c.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),V=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function j(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}k.propTypes={resolutions:z,sizes:V,fixed:j(d.default.oneOfType([z,d.default.arrayOf(z)])),fluid:j(d.default.oneOfType([V,d.default.arrayOf(V)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=k;t.Z=H},8301:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(5444),i=function(){var e=(0,r.useRef)(null),t=(0,r.useRef)(null);return r.createElement("header",{className:"header"},r.createElement("div",{className:"brand"},r.createElement("h1",null,"Logo")),r.createElement("nav",{className:"topnav",id:"myTopnav",ref:e},r.createElement("div",{className:"icon",onClick:function(){"topnav"===e.current.className&&"icon"===t.current.className?(t.current.className+=" change",e.current.className+=" responsive"):(t.current.className="icon",e.current.className="topnav")},ref:t},r.createElement("div",{className:"bar1"}),r.createElement("div",{className:"bar2"}),r.createElement("div",{className:"bar3"})),r.createElement("div",{className:"menus"},r.createElement(n.rU,{to:"/#home",className:"active"},"Home"),r.createElement(n.rU,{to:"/#about"},"About Us"),r.createElement(n.rU,{to:"/#services"},"Our Services"),r.createElement(n.rU,{to:"/#contact"},"Contact"))))},l=function(){return r.createElement("footer",{className:"footer"},r.createElement("p",null,"Designed By"," ",r.createElement("a",{href:"http://dinakajoy.com/",target:"_blank",rel:"noreferrer"},"Odinaka Joy")))},s=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(i,null),r.createElement("main",null,t),r.createElement(l,null))}},6916:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),n=a(8301),i=a(5444),l=function(){return r.createElement("section",{className:"home-module--heroimage--1pMkt",id:"home"},r.createElement("div",{className:"home-module--herotext--2K-sN"},r.createElement("h1",null,"ACME Global"),r.createElement("p",null,"We offer the best of services"),r.createElement(i.rU,{to:"#contact",className:"home-module--herobtn--1w39w"},"Reach Out")))},s=a(1496),o=a(8860),c=function(){var e=(0,i.K2)("894965043");return r.createElement("section",{className:o.jZ,id:"about"},r.createElement("div",{className:o.lr},r.createElement("div",{className:o.$B},r.createElement("div",{className:"container"},r.createElement("h1",null,"About Us Page"),r.createElement("p",null,"Some text about who we are and what we do."),r.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus quo harum maiores ipsa! Repellat animi nostrum adipisci. Lorem officia necessitatibus ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus quo harum maiores ipsa! Repellat animi nostrum adipisci officia necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus quo harum maiores ipsa! Repellat")))),r.createElement("div",{className:"container"},r.createElement("h2",{className:o.Yx},"Our Team"),r.createElement("div",{className:o.KT},r.createElement("div",{className:o.In},r.createElement(s.Z,{fluid:e.teamone.childImageSharp.fluid,alt:"Team One"}),r.createElement("div",{className:o.JT},r.createElement("h2",null,"Maxwell Doe"),r.createElement("p",{className:o.TN},"CEO & Founder"),r.createElement("p",null,"Some text that describes me lorem ipsum ipsum lorem."),r.createElement("p",null,"maxwell@example.com"),r.createElement("button",{className:o.LI},"Contact"))),r.createElement("div",{className:o.In},r.createElement(s.Z,{fluid:e.teamtwo.childImageSharp.fluid,alt:"Team Two"}),r.createElement("div",{className:o.JT},r.createElement("h2",null,"Jane Doclings"),r.createElement("p",{className:o.TN},"Managing Director"),r.createElement("p",null,"Some text that describes me lorem ipsum ipsum lorem."),r.createElement("p",null,"jane@example.com"),r.createElement("button",{className:o.LI},"Contact"))),r.createElement("div",{className:o.In},r.createElement(s.Z,{fluid:e.teamthree.childImageSharp.fluid,alt:"Team Three"}),r.createElement("div",{className:o.JT},r.createElement("h2",null,"Mike Regnis"),r.createElement("p",{className:o.TN},"Designer"),r.createElement("p",null,"Some text that describes me lorem ipsum ipsum lorem."),r.createElement("p",null,"mike@example.com"),r.createElement("button",{className:o.LI},"Contact"))))))},d=function(){var e=(0,i.K2)("2766112214").site.siteMetadata.servicesdata;return r.createElement("section",{className:"container",id:"services"},r.createElement("h2",{className:"services-module--about_title--2Aw4c"},"Our Services"),r.createElement("div",{className:"services-module--services_wrapper--gUA8G"},e.map((function(e){return r.createElement("div",{className:"services-module--card--32d_A"},r.createElement("div",{className:"services-module--card_details--bkzWl"},r.createElement(i.rU,{to:"/services/"+e.slug},r.createElement("h3",null,""+e.name),r.createElement("p",null,""+e.excerpt))))}))))},u=function(){return r.createElement("section",{className:"container",id:"contact"},r.createElement("div",{className:"contact-module--contact_wrapper--3DA-i"},r.createElement("div",{className:"contact-module--form_data--RdvEO"},r.createElement("h1",null,"Feel Reach Out To Us At Any Time"),r.createElement("p",null,"We reply within 3 hours")),r.createElement("form",{action:"/action_page.php"},r.createElement("label",{htmlFor:"fname"},"First Name"),r.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your name.."}),r.createElement("label",{htmlFor:"lname"},"Last Name"),r.createElement("input",{type:"text",id:"lname",name:"lastname",placeholder:"Your last name.."}),r.createElement("label",{htmlFor:"country"},"Country"),r.createElement("select",{id:"country",name:"country"},r.createElement("option",{value:"australia"},"Nigeria"),r.createElement("option",{value:"canada"},"Canada"),r.createElement("option",{value:"usa"},"USA")),r.createElement("label",{htmlFor:"subject"},"Subject"),r.createElement("textarea",{id:"subject",name:"subject",placeholder:"Write something..",rows:"10"}),r.createElement("input",{type:"submit",value:"Submit"}))))},m=function(){return r.createElement(n.Z,null,r.createElement(l,null),r.createElement(d,null),r.createElement(c,null),r.createElement(u,null))}},8860:function(e,t,a){a.d(t,{jZ:function(){return r},lr:function(){return n},$B:function(){return i},Yx:function(){return l},KT:function(){return s},In:function(){return o},JT:function(){return c},TN:function(){return d},LI:function(){return u},tX:function(){return m},Xn:function(){return f}});var r="about-module--about--2rBlf",n="about-module--about_section--3QRtF",i="about-module--about_details--3giOf",l="about-module--about_title--2Rubq",s="about-module--card_wrapper--13EAA",o="about-module--card--3YUEy",c="about-module--card_details--3wj6c",d="about-module--title--1TRFL",u="about-module--button--3rQrz",m="about-module--service_section--3yjH_",f="about-module--service--2hzf_"}}]);
//# sourceMappingURL=component---src-pages-index-js-58adf7356e6b6c1c6d34.js.map