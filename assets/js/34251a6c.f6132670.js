"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[4753],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1196:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={id:"cellToLatLngDesc",title:"Determine the latitude/longitude coordinates of the center point of an H3Index cell",sidebar_label:"Determine the latitude/longitude coordinates of the center point of an H3Index cell",slug:"/core-library/cellToLatLngDesc"},l=void 0,s={unversionedId:"core-library/cellToLatLngDesc",id:"core-library/cellToLatLngDesc",isDocsHomePage:!1,title:"Determine the latitude/longitude coordinates of the center point of an H3Index cell",description:"This operation is performed by function cellToLatLng. See the comments in the function source code for more detail.",source:"@site/docs/core-library/cellToLatLngDesc.md",sourceDirName:"core-library",slug:"/core-library/cellToLatLngDesc",permalink:"/docs/next/core-library/cellToLatLngDesc",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/cellToLatLngDesc.md",tags:[],version:"current",frontMatter:{id:"cellToLatLngDesc",title:"Determine the latitude/longitude coordinates of the center point of an H3Index cell",sidebar_label:"Determine the latitude/longitude coordinates of the center point of an H3Index cell",slug:"/core-library/cellToLatLngDesc"},sidebar:"someSidebar",previous:{title:"Conversion from latitude/longitude to containing H3 cell index",permalink:"/docs/next/core-library/latLngToCellDesc"},next:{title:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",permalink:"/docs/next/core-library/cellToBoundaryDesc"}},d=[],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This operation is performed by function ",(0,a.kt)("inlineCode",{parentName:"p"},"cellToLatLng"),". See the comments in the function source code for more detail."),(0,a.kt)("p",null,"The conversion is performed as a series of coordinate system conversions described below. See the page ",(0,a.kt)("a",{parentName:"p",href:"/docs/core-library/coordsystems"},"Coordinate Systems used by the H3 Core Library")," for more information on each of these coordinate systems."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The function ",(0,a.kt)("inlineCode",{parentName:"li"},"_h3ToFaceIjk")," then converts the H3 index to the appropriate icosahedron face number and normalized ",(0,a.kt)("em",{parentName:"li"},"ijk")," coordinate's on that face's coordinate system as follows:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We start by assuming that the cell center point falls on the same icosahedron face as its base cell."),(0,a.kt)("li",{parentName:"ul"},"It is possible that the the cell center point lies on an adjacent face (termed an ",(0,a.kt)("em",{parentName:"li"},"overage")," in the code), in which case we would need to use a projection centered on that adjacent face instead. We recall that normalized ",(0,a.kt)("em",{parentName:"li"},"ijk")," coordinates have at most two non-zero components, and that in a face-centered Class II system the sum of those components is a resolution-specific constant value for cells that lie on the edge of that icosahedral face.\nWe determine whether an overage exists by taking the sum of the ",(0,a.kt)("em",{parentName:"li"},"ijk")," components, and if there is an overage the positive ",(0,a.kt)("em",{parentName:"li"},"ijk")," components indicate which adjacent face the cell center lies on. A lookup operation is then performed to find the appropriate rotation and translation to transform the ",(0,a.kt)("em",{parentName:"li"},"ijk")," coordinates into the adjacent face-centered ",(0,a.kt)("em",{parentName:"li"},"ijk")," system.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{height:"300",src:"/images/triEdge.png"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The face-centered ",(0,a.kt)("em",{parentName:"li"},"ijk")," coordinates are then converted into corresponding ",(0,a.kt)("em",{parentName:"li"},"Hex2d")," coordinates using the function ",(0,a.kt)("inlineCode",{parentName:"li"},"_ijkToHex2d"),"."),(0,a.kt)("li",{parentName:"ol"},"The function ",(0,a.kt)("inlineCode",{parentName:"li"},"_hex2dToGeo")," takes the ",(0,a.kt)("em",{parentName:"li"},"Hex2d")," coordinates and scales them into face-centered gnomonic coordinates, and then performs an inverse gnomonic projection to get the latitude/longitude coordinates.")))}u.isMDXComponent=!0}}]);