(this["webpackJsonppolo-redux"]=this["webpackJsonppolo-redux"]||[]).push([[0],{38:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(17),c=a.n(l),s={lineHeight:"30px"},o=function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand",href:"/",style:s},n.a.createElement("img",{src:"logo192.png",className:"d-inline-block align-top",alt:"",width:30}),"  ","React test application - Redux version")))},i=a(15),m=function(){return n.a.createElement("div",null,n.a.createElement(i.a,{to:"/react-redux/",className:"btn btn-outline-primary btn-lg btn-block"},"Main"),n.a.createElement(i.a,{to:"/react-redux/data",className:"btn btn-outline-primary btn-lg btn-block"},"Showing"),n.a.createElement(i.a,{to:"/react-redux/about",role:"button",className:"btn btn-outline-primary btn-lg btn-block"},"About"))},u=a(2),p=a(4),d=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h1",{className:"display-4"},"Hello, visitor!"),n.a.createElement("p",{className:"lead"},"Welcome to React test application !"),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",null,"This app can fetch API data from Poloniex cryptocurrency market and show desirable information by pairs")))},b=a(8),E=a(9),f=a(11),h=a(10),y=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(b.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={counter:0},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this;return Object.keys(this.props.data).map((function(t){var a=t.indexOf("_");return t.substring(0,a)===e.props.market_filter_list[e.props.market_filter_selected]?n.a.createElement("li",{key:e.props.data[t].id,className:"list-group-item",style:{textAlign:"center"}},t,n.a.createElement("b",{style:{margin:"20px"}},e.props.data[t][e.props.pair_parameters[e.props.selected_parameter]])):null}))}}]),a}(n.a.Component),g=a(12),v=a(23),_=a.n(v),k=a(35),N=a(36),x=a.n(N),j=function(){return function(){var e=Object(k.a)(_.a.mark((function e(t){var a,r,n,l,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://poloniex.com/public?command=returnTicker");case 2:for(a=e.sent,r=Object.keys(a.data),n=[],l=0;l<r.length;l++)c=r[l].indexOf("_"),-1===n.indexOf(r[l].substring(0,c))&&n.push(r[l].substring(0,c));a.market_filter_list=n,t({type:"NEW_DATA",payload:a});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return function(t){t({type:"SELECTED_MARKET",payload:e})}},A=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this;return this.props.data.market_filter_list.map((function(t,a){return n.a.createElement("button",{onClick:function(){return e.props.MarketFilterClick(a)},type:"button",style:{margin:5},className:e.props.selectors.market_filter_selected===a?"btn btn-success":"btn btn-primary",key:e.props.data.market_filter_list[a]},t)}))}}]),a}(n.a.Component),C=Object(g.b)((function(e){return{data:e.selectedSong,selectors:e.local_selectors}}),{MarketFilterClick:O})(A),w=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"card border-secondary mb-3",style:{textAlign:"center"}},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("b",null,"Choose market"))),n.a.createElement("div",{className:"card-body text-secondary"},n.a.createElement(C,null)))}}]),a}(n.a.Component),S=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this;return this.props.pair_parameters.map((function(t,a){return n.a.createElement("button",{onClick:function(){return e.props.ParameterClick(a)},type:"button",style:{margin:5},className:e.props.selected_parameter===a?"btn btn-success":"btn btn-primary",key:e.props.pair_parameters[a]},t)}))}}]),a}(n.a.Component),T=Object(g.b)((function(e){return{data:e.selectedSong,selectors:e.local_selectors}}),{selectSong:j,ParameterClick:function(e){return function(t){t({type:"SELECTED_PARAMETER",payload:e})}}})(S),R=function(e){if(e.value){document.getElementsByClassName("list-group")[0].children.length;return n.a.createElement("p",{style:{textAlign:"center"}},"Showed ",n.a.createElement("b",null,e.value)," pairs")}return null},D=function(e){return Object.keys(e.value).length?n.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},n.a.createElement("p",null,n.a.createElement("button",{className:"btn btn-warning",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:e.onClick},"Show raw JSON data")),n.a.createElement("div",{className:"collapse",id:"collapseExample"},n.a.createElement("div",{className:"card card-body"},JSON.stringify(e.value)))):null},W=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(b.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={pairs:[],pair_parameters:[],fetching_time:"",selected_parameter:0,market_filter_list:[],market_filter_selected:0,showed_pairs:0,SHOW_RAW:!1},e}return Object(E.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var r=document.getElementsByClassName("list-group")[0].children.length;this.state.showed_pairs!==r&&this.setState({showed_pairs:r})}},{key:"render",value:function(){var e=this,t=this.props.data,a=this.props.selectors;if(t){var r=t.pairs,l=Object.keys(r[Object.keys(r)[0]]);return n.a.createElement("div",null,n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("p",{style:{textAlign:"center",margin:10}},"Last update: "," ",n.a.createElement("b",null,String(new Date))),n.a.createElement("button",{type:"button",className:"btn btn-success btn-block ",id:"fetch",onClick:function(){return e.props.selectSong()}},0===Object.keys(t.pairs).length?"FETCH":"RENEW"),n.a.createElement("p",{style:{textAlign:"center",margin:10}},"Total "," ",n.a.createElement("b",null,Object.keys(t.pairs).length)," "," pairs"),n.a.createElement(D,{value:t.pairs}),n.a.createElement("div",{className:"card border-secondary mb-3",style:{textAlign:"center"}},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("b",null,"Choose parameter"))),n.a.createElement("div",{className:"card-body text-secondary"},n.a.createElement(T,{onClick:function(t){return e.props.onClick(t)},pair_parameters:l,selected_parameter:a.selected_parameter}))),n.a.createElement(w,null),n.a.createElement(R,{value:a.showed_pairs}),n.a.createElement("ul",{className:"list-group"},n.a.createElement(y,{data:r,selected_parameter:a.selected_parameter,pair_parameters:l,market_filter_list:t.market_filter_list,market_filter_selected:a.market_filter_selected})))))}return n.a.createElement("div",null,n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("p",{style:{textAlign:"center",margin:10}},"Last update: "," ",n.a.createElement("b",null,"never")),n.a.createElement("button",{type:"button",className:"btn btn-success btn-block ",id:"fetch",onClick:function(){return e.props.selectSong()}},0===Object.keys(this.state.pairs).length?"FETCH":"RENEW"),n.a.createElement("p",{style:{textAlign:"center",margin:10}},"Total "," ",n.a.createElement("b",null,"0")," "," pairs"))))}}]),a}(n.a.Component),M=Object(g.b)((function(e){return{data:e.selectedSong,selectors:e.local_selectors}}),{selectSong:j,MarketFilterClick:O})(W),F=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"alert alert-success",role:"alert"},n.a.createElement("h4",{className:"alert-heading"},"Well done!"),n.a.createElement("p",null,"This is just a test React application. This app doesn`t do anything useful. "),n.a.createElement("hr",null)),n.a.createElement("div",{className:"alert alert-danger",role:"alert"},"All interface written on Bootstrap 4"),n.a.createElement("p",null),n.a.createElement("h5",null,"Source code of this application you can find by address",n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/razorsrider/react-test"},"https://github.com/razorsrider/react-redux"))),n.a.createElement("p",null),n.a.createElement("div",{className:"alert alert-secondary",role:"alert"},"Feel free to contact me ",n.a.createElement("b",null,"razorsrider@gmail.com")))))},L=a(13),P=Object(L.c)({local_selectors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a={};return"NEW_DATA"===t.type?(a.selected_parameter=0,a.showed_pairs=0,a.market_filter_selected=0,a):"SELECTED_MARKET"===t.type?(a.selected_parameter=e.selected_parameter,a.showed_pairs=e.showed_pairs,a.market_filter_selected=t.payload,a):"SELECTED_PARAMETER"===t.type?(a.selected_parameter=t.payload,a.showed_pairs=e.showed_pairs,a.market_filter_selected=e.market_filter_selected,a):e},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a={};return"NEW_DATA"===t.type?(a.pairs=t.payload.data,a.market_filter_list=t.payload.market_filter_list,a):e}}),H=a(37),J=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-12 col-lg-12 col-sm-12 col-md-12 col-12 col-12"},n.a.createElement(o,null))),n.a.createElement("div",{className:"row"},n.a.createElement(u.b,{history:Object(p.a)()},n.a.createElement("div",{className:"col-xl-2 col-lg-2 col-sm-12 col-md-12 col-12 col-12",style:{marginTop:"10px"}},n.a.createElement(m,null)),n.a.createElement("div",{className:"col-xl-10 col-lg-10 col-sm-12 col-md-12 col-12 col-12"},n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/react-redux/",exact:!0,component:d}),n.a.createElement(u.a,{path:"/react-redux/data",exact:!0,component:M}),n.a.createElement(u.a,{path:"/react-redux/about",exact:!0,component:F})))))))},z=Object(L.d)(P,Object(L.a)(H.a));c.a.render(n.a.createElement(g.a,{store:z},n.a.createElement(J,null)),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6d01713e.chunk.js.map