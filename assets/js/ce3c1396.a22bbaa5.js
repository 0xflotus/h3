(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=(n(0),n(115));const a={id:"joining",title:"Joining",sidebar_label:"Joining",slug:"/highlights/joining"},o={unversionedId:"highlights/joining",id:"highlights/joining",isDocsHomePage:!1,title:"Joining",description:"H3, acting as a standard unit of analysis, can be used to join disparate data sets.",source:"@site/docs/highlights/joining.md",slug:"/highlights/joining",permalink:"/docs/highlights/joining",editUrl:"https://github.com/uber/h3/edit/master/website/docs/highlights/joining.md",version:"current",sidebar_label:"Joining",sidebar:"someSidebar",previous:{title:"Aggregation",permalink:"/docs/highlights/aggregation"},next:{title:"Flow Modelling",permalink:"/docs/highlights/flowmodel"}},s=[{value:"References",id:"references",children:[]}],c={toc:s};function l({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"H3, acting as a standard unit of analysis, can be used to join disparate data sets."),Object(i.b)("p",null,"The H3 library contains support for indexing points, lines, and regions into the grid. Other data formats, such as rasters, can be indexed into H3 using combinations of these basic indexing operations. Once data is indexed into H3 indexes, it can be easily joined with other datasets on the H3 index."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Example: ",Object(i.b)("a",{parentName:"li",href:"https://www.placekey.io/"},"Placekey")),Object(i.b)("li",{parentName:"ul"},"Jupyter notebook example: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/uber/h3-py-notebooks/blob/master/notebooks/unified_data_layers.ipynb"},"Unified Data Layers")),Object(i.b)("li",{parentName:"ul"},"Observable notebook example: ",Object(i.b)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-tutorial-suitability-analysis?collection=@nrabinowitz/h3-tutorial"},"Suitability Analysis"))))}l.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(g,s(s({ref:t},l),{},{components:n})):i.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);