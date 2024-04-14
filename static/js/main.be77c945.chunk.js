(this["webpackJsonpindividual-task"]=this["webpackJsonpindividual-task"]||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(9),c=n(11),i=n(10),s=n(0),o=n.n(s),u=n(20),l=n(1),d=n(17),j=n.n(d),h=n(21),v=n(14),b=n(13),p=n.n(b),O=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={movie:[],isLoading:!0},e.componentDidMount=function(){var t=e.props.id;t&&fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=81f382d33088c6d52099a62eab51d967&language=en-US")).then((function(e){return e.json()})).then((function(t){return e.setState({movie:t,isLoading:!1})}))},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.movie;return Object(l.jsx)("div",{className:"movieInfo-container",children:this.state.isLoading?Object(l.jsx)(p.a,{type:"Puff",color:"#00BFFF",height:"100",width:"100"}):Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{className:"title"}),Object(l.jsx)("h1",{children:e.title}),Object(l.jsxs)("section",{className:"cast",children:["ID: ",e.id]}),Object(l.jsx)("h2",{children:"Overview"}),Object(l.jsx)("p",{children:e.overview})]})})}}]),n}(s.Component),f=O,m=function(e){var t=e.movieGroup;return Object(l.jsx)("div",{className:"new-releases-slide",children:t})},x=[],g=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={currentIndex:0,translateValue:0},e.createNestedArr=function(){for(;e.props.movie.length;)x.push(e.props.movie.splice(0,5));return x.map((function(e,t){return Object(l.jsx)(m,{movieGroup:e},t)}))},e.nextPic=function(){if(e.state.currentIndex===x.length-1)return e.setState({currentIndex:0,translateValue:0});e.setState((function(t){return{currentIndex:t.currentIndex+1,translateValue:t.translateValue-e.slideWidth()}}))},e.prevPic=function(){return e.state.currentIndex===x.length+1||0===e.state.currentIndex?e.setState({currentIndex:0,translateValue:0}):void e.setState((function(t){return{currentIndex:t.currentIndex-1,translateValue:t.translateValue+e.slideWidth()}}))},e.slideWidth=function(){return document.querySelector(".new-releases-slide").clientWidth},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)("div",{className:"movie-carousel",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0.45s"},children:this.createNestedArr()})})}}]),n}(s.Component),y=g,k=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onClick=function(t){e.setState({movieId:t.target.id}),console.log(t.target.id)},e.state={movies:[],movieId:null,isLoading:!0},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(j.a.mark((function e(){var t,n,r,a=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=5");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r=n.results.map((function(e){return Object(l.jsx)(v.b,{to:"/movieInfo/".concat(e.id),children:Object(l.jsx)("div",{className:"overlay",onClick:a.onClick,children:Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,id:e.id})})})})),this.setState({movies:r,isLoading:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies;e.movieId;return Object(l.jsx)("div",{className:"carousel",children:this.state.isLoading?Object(l.jsx)(p.a,{type:"Puff",color:"#00BFFF",height:"100",width:"100"}):Object(l.jsx)("div",{children:Object(l.jsx)(y,{movie:t})})})}}]),n}(s.Component),I=k,w=n(3),C=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(I,{})})}}]),n}(s.Component),S=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.match.params.id;return Object(l.jsx)("div",{children:Object(l.jsx)(f,{id:e})})}}]),n}(s.Component),N=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"User"})})}}]),n}(s.Component),V=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={name:"React"},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)(v.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(w.a,{path:"/",exact:!0,component:C}),Object(l.jsx)(w.a,{path:"/movieInfo/:id",exact:!0,component:S}),Object(l.jsx)(w.a,{path:"/users/",component:N})]})})}}]),n}(s.Component);Object(u.render)(Object(l.jsx)(V,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.be77c945.chunk.js.map