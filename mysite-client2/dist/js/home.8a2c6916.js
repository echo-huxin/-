(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"159b":function(t,e,i){var n=i("da84"),s=i("fdbc"),r=i("17c2"),o=i("9112");for(var c in s){var a=n[c],h=a&&a.prototype;if(h&&h.forEach!==r)try{o(h,"forEach",r)}catch(d){h.forEach=r}}},"16c0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"container",staticClass:"home-container",on:{wheel:t.handleWheel}},[i("ul",{staticClass:"carousel-container",style:{marginTop:t.marginTop},on:{transitionend:t.handleTransitionEnd}},t._l(t.data,(function(t){return i("li",{key:t.id},[i("CarouselItem",{attrs:{carousel:t}})],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.index>=1,expression:"index >= 1"}],staticClass:"icon icon-up",on:{click:function(e){return t.switchTo(t.index-1)}}},[i("Icon",{attrs:{type:"arrowUp"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.index<t.data.length-1,expression:"index < data.length - 1"}],staticClass:"icon icon-down",on:{click:function(e){return t.switchTo(t.index+1)}}},[i("Icon",{attrs:{type:"arrowDown"}})],1),i("ul",{staticClass:"indicator"},t._l(t.data,(function(e,n){return i("li",{key:e.id,class:{active:n===t.index},on:{click:function(e){return t.switchTo(n)}}})})),0)])},s=[],r=i("5530"),o=i("5880"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"carousel-item-container",on:{mousemove:t.handleMouseMove,mouseleave:t.handleMouseLeave}},[i("div",{ref:"image",staticClass:"carousel-img",style:t.imagePosition},[i("ImageLoader",{attrs:{src:t.carousel.bigImg,placeholder:t.carousel.midImg},on:{load:this.showWords}})],1),i("div",{ref:"title",staticClass:"title"},[t._v(t._s(t.carousel.title))]),i("div",{ref:"desc",staticClass:"desc"},[t._v(t._s(t.carousel.description))])])},a=[],h=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-loader-container"},[t.everythingDone?t._e():i("img",{staticClass:"placeholder",attrs:{src:t.placeholder,alt:""}}),i("img",{style:{opacity:t.originOpacity,transition:t.duration+"ms"},attrs:{src:t.imgURL,alt:""},on:{load:t.handleLoad}})])}),d=[],l=(i("a9e3"),{props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:500}},data:function(){return{originLoaded:!1,everythingDone:!1}},computed:{originOpacity:function(){return this.originLoaded?1:0},imgURL:function(){return this.src}},methods:{handleLoad:function(){var t=this;this.originLoaded=!0,setTimeout((function(){t.everythingDone=!0,t.$emit("load")}),this.duration)}}}),u=l,f=(i("fbab"),i("2877")),g=Object(f["a"])(u,h,d,!1,null,"34a0c20b",null),p=g.exports,m={props:["carousel"],components:{ImageLoader:p},data:function(){return{titleWidth:0,descWidth:0,containerSize:null,innerSize:null,mouseX:0,mouseY:0}},computed:{imagePosition:function(){if(this.innerSize&&this.containerSize){var t=this.innerSize.width-this.containerSize.width,e=this.innerSize.height-this.containerSize.height,i=-t/this.containerSize.width*this.mouseX,n=-e/this.containerSize.height*this.mouseY;return{transform:"translate(".concat(i,"px, ").concat(n,"px)")}}},center:function(){return{x:this.containerSize.width/2,y:this.containerSize.height/2}}},mounted:function(){this.titleWidth=this.$refs.title.clientWidth,this.descWidth=this.$refs.desc.clientWidth,this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed:function(){window.removeEventListener("resize",this.setSize)},methods:{showWords:function(){this.$refs.title.style.opacity=1,this.$refs.title.style.width=0,this.$refs.title.clientWidth,this.$refs.title.style.transition="1s",this.$refs.title.style.width=this.titleWidth+"px",this.$refs.desc.style.opacity=1,this.$refs.desc.style.width=0,this.$refs.desc.clientWidth,this.$refs.desc.style.transition="2s 1s",this.$refs.desc.style.width=this.descWidth+"px"},setSize:function(){this.containerSize={width:this.$refs.container.clientWidth,height:this.$refs.container.clientHeight},this.innerSize={width:this.$refs.image.clientWidth,height:this.$refs.image.clientHeight}},handleMouseMove:function(t){var e=this.$refs.container.getBoundingClientRect();this.mouseX=t.clientX-e.left,this.mouseY=t.clientY-e.top},handleMouseLeave:function(){this.mouseX=this.center.x,this.mouseY=this.center.y}}},v=m,w=(i("5343"),Object(f["a"])(v,c,a,!1,null,"7c8b49c1",null)),b=w.exports,y=i("d010"),x={components:{CarouselItem:b,Icon:y["a"]},data:function(){return{index:0,containerHeight:0,switching:!1}},created:function(){this.$store.dispatch("banner/fetchBanner")},mounted:function(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)},computed:Object(r["a"])({marginTop:function(){return-this.index*this.containerHeight+"px"}},Object(o["mapState"])("banner",["loading","data"])),methods:{switchTo:function(t){this.index=t},handleWheel:function(t){this.switching||(t.deltaY<-5&&this.index>0?(this.switching=!0,this.index--):t.deltaY>5&&this.index<this.data.length-1&&(this.switching=!0,this.index++))},handleTransitionEnd:function(){this.switching=!1},handleResize:function(){this.containerHeight=this.$refs.container.clientHeight}}},O=x,z=(i("3222"),Object(f["a"])(O,n,s,!1,null,"11643388",null));e["default"]=z.exports},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,s=i("a640"),r=i("ae40"),o=s("forEach"),c=r("forEach");t.exports=o&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1a1d":function(t,e,i){},2101:function(t,e,i){},3222:function(t,e,i){"use strict";i("1a1d")},4160:function(t,e,i){"use strict";var n=i("23e7"),s=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},5343:function(t,e,i){"use strict";i("88a4")},5530:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},"88a4":function(t,e,i){},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},dbb4:function(t,e,i){var n=i("23e7"),s=i("83ab"),r=i("56ef"),o=i("fc6a"),c=i("06cf"),a=i("8418");n({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,i,n=o(t),s=c.f,h=r(n),d={},l=0;while(h.length>l)i=s(n,e=h[l++]),void 0!==i&&a(d,e,i);return d}})},e439:function(t,e,i){var n=i("23e7"),s=i("d039"),r=i("fc6a"),o=i("06cf").f,c=i("83ab"),a=s((function(){o(1)})),h=!c||a;n({target:"Object",stat:!0,forced:h,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(r(t),e)}})},fbab:function(t,e,i){"use strict";i("2101")}}]);