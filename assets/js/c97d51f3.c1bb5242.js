(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[6280],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=c(n),f=o,g=h["".concat(s,".").concat(f)]||h[f]||u[f]||i;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3903:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),l=["components"],a={id:"flowmodel",title:"Flow Modelling",sidebar_label:"Flow Modelling",slug:"/highlights/flowmodel"},s={unversionedId:"highlights/flowmodel",id:"version-3.x/highlights/flowmodel",isDocsHomePage:!1,title:"Flow Modelling",description:"H3's hexagonal grid is well suited to analyzing movement. In addition to the benefits of the hexagonal grid shape, H3 includes other features for modelling flow.",source:"@site/versioned_docs/version-3.x/highlights/flowmodel.md",sourceDirName:"highlights",slug:"/highlights/flowmodel",permalink:"/docs/highlights/flowmodel",editUrl:"https://github.com/uber/h3/edit/master/website/docs/highlights/flowmodel.md",version:"3.x",sidebar_label:"Flow Modelling",frontMatter:{id:"flowmodel",title:"Flow Modelling",sidebar_label:"Flow Modelling",slug:"/highlights/flowmodel"},sidebar:"version-3.x/someSidebar",previous:{title:"Joining",permalink:"/docs/highlights/joining"},next:{title:"Machine Learning",permalink:"/docs/highlights/ml"}},c=[{value:"Links",id:"links",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"H3's hexagonal grid is well suited to analyzing movement. In addition to the benefits of the hexagonal grid shape, H3 includes other features for modelling flow."),(0,i.kt)("p",null,"H3 can create indexes that refer to the movement from one cell to a neighbor. These directed edge indexes share the advantages with their cell index counterparts, such as being 64 bit integers. The use of directed edges makes it possible to associate a weight with a movement in the grid."),(0,i.kt)("p",null,"(A planned improvement for the H3 system is to create indexes that refer to the edge between two cells without regards of direction.)"),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Observable notebook example: ",(0,i.kt)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-travel-times"},"H3 Travel Times"))))}u.isMDXComponent=!0}}]);