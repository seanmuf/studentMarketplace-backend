(this["webpackJsonpwbdv-su1-project-client-react"]=this["webpackJsonpwbdv-su1-project-client-react"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=(a(26),a(27),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),d=a(6),p=function(e,t,a){return fetch("http://localhost:8080/api/register",{body:JSON.stringify({username:e,password:t,userType:a}),headers:{"content-type":"application/json"},method:"POST",credentials:"include"}).then((function(e){return e.json()}))},h=function(e,t){return fetch("http://localhost:8080/api/profile",{method:"POST",body:JSON.stringify({username:e,password:t}),headers:{"content-type":"application/json"},credentials:"include"}).then((function(e){return e.json()}))},v=function(e,t){return fetch("http://localhost:8080/api/login",{body:JSON.stringify({username:e,password:t}),headers:{"content-type":"application/json"},method:"POST",credentials:"include"}).then((function(e){return e.json()}))},E=function(){return fetch("http://localhost:8080/api/logout",{method:"POST",credentials:"include"}).catch((function(e){return e.json()}))},f=function(e,t,a,n,r,l,c){fetch("http://localhost:8080/api/profile/".concat(c),{method:"PUT",body:JSON.stringify({username:e,password:t,f_name:a,l_name:n,email:r,userType:l}),headers:{"content-type":"application/json"},credentials:"include"}).then((function(e){return e.json()}))},b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={listing:e.props.listing},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,"Category: ",this.state.listing.l_category),r.a.createElement("div",null,"Name: ",this.state.listing.l_name),r.a.createElement("div",null,"Price: ",this.state.listing.l_price),r.a.createElement("div",null,"Quantity: ",this.state.listing.l_quantity),r.a.createElement("button",{onClick:function(){return e.props.deleteListing(e.state.listing)},className:"btn btn-primary btn-sm"},"Delete")))}}]),a}(r.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table searchResultTable"},r.a.createElement("thead",{className:"searchResultHeader"},r.a.createElement("tr",null,r.a.createElement("td",null,"Current Cart")))),r.a.createElement("div",{className:"row"},this.props.listing.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},r.a.createElement(b,{listing:e}))}))))}}]),a}(r.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={listing:e.props.listing},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,"Category: ",this.state.listing.l_category),r.a.createElement("div",null,"Name: ",this.state.listing.l_name),r.a.createElement("div",null,"Price: ",this.state.listing.l_price),r.a.createElement("div",null,"Quantity: ",this.state.listing.l_quantity),r.a.createElement("button",{onClick:function(e){return console.log(e.target)},className:"btn btn-primary btn-sm"},"Add to Cart")))}}]),a}(r.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table searchResultTable"},r.a.createElement("thead",{className:"searchResultHeader"},r.a.createElement("tr",null,r.a.createElement("td",{className:"listingHeader"},this.props.category," listings")))),r.a.createElement("div",{className:"row"},this.props.listings.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},r.a.createElement(y,{listing:e}))}))))}}]),a}(r.a.Component),k=function(e,t,a,n){return fetch("http://localhost:8080/api/listing",{body:JSON.stringify({l_category:e,l_name:t,l_price:a,l_quantity:n}),headers:{"content-type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},j=function(e){return fetch("http://localhost:8080/api/listings/".concat(e.id),{method:"DELETE"}).then((function(e){return e.json()}))},O=function(e){return fetch("http://localhost:8080/api/listings/"+e).then((function(e){return e.json()}))},w=function(){return fetch("http://localhost:8080/api/listings").then((function(e){return e.json()}))},S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={listings:[],category:e.props.match.params.category},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;O(this.state.category).then((function(t){return e.setState({listings:t})}))}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.category!==this.props.match.params.category&&this.setState({layout:this.props.match.params.category})}},{key:"render",value:function(){return r.a.createElement("div",{className:"listingPageHead"},r.a.createElement("div",{styles:{display:"inline-block"}},r.a.createElement("nav",{className:"navbar  fixed-top navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link searchPageHomeLink",to:"/"},"Back To Home")),r.a.createElement("li",null,r.a.createElement("h3",{className:"navbar-brand mr-auto searchPageHeader"},"Listings Page")))),r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link listingSearch",to:"/search"},"Search"))))),r.a.createElement("div",null,r.a.createElement(N,{category:this.state.category,listings:this.state.listings})))}}]),a}(r.a.Component),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={listings:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;w().then((function(t){return e.setState({listings:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table  homeGrid"},r.a.createElement("thead",{className:"searchResultHeader"},r.a.createElement("tr",null,r.a.createElement("td",{className:"listingHeader"},"Listings")))),r.a.createElement("div",{className:"row"},this.state.listings.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},r.a.createElement(y,{listing:e}))}))))}}]),a}(r.a.Component),C=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:{username:"",userType:""}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().catch((function(e){})).then((function(t){t&&e.setState({currentUser:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark"},r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeLogin",to:"/login"},"Login")),r.a.createElement("li",{className:"loginDivider"},"/"),r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeRegister",to:"/register"},"Register"))),r.a.createElement("div",{className:"navbar-brand mx-auto mainTitle"},r.a.createElement("h3",null,"Student MarketPlace")),this.state.currentUser.username&&r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeSearch",to:"/profile"},"Profile")),"seller"===this.state.currentUser.userType&&r.a.createElement("li",{className:"profileDivider"},"/"),"seller"===this.state.currentUser.userType&&r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeStore",to:"/store"},"Store")),"buyer"===this.state.currentUser.userType&&r.a.createElement("li",{className:"profileDivider"},"/"),"buyer"===this.state.currentUser.userType&&r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeRegister",to:"/cart"},"Cart"))))),r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-secondary homePageNav"},r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement("h3",{className:"homeCategory"},"Categories")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeLink",to:"/products/listings"},"Products")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeLink",to:"/books/listings"},"Books")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeLink",to:"/services/listings"},"Services")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeLink",to:"/housing/listings"},"Housing"))),r.a.createElement("ul",{className:"navbar nav ml-auto"},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link homeSearchLink",to:"/search"},"Search"))))),r.a.createElement("div",null,r.a.createElement(P,null)))}}]),a}(r.a.Component),T=function(e){return fetch("https://amazon-price1.p.rapidapi.com/search?keywords="+e+"&marketplace=US",{method:"GET",headers:{"x-rapidapi-host":"amazon-price1.p.rapidapi.com","x-rapidapi-key":"7928a2dcbfmsh5d89e8852c7289fp10f848jsnf45f27536d87"}}).then((function(e){return e.json()}))},x=function(e){return fetch("https://amazon-price1.p.rapidapi.com/search?keywords="+e+"&marketplace=US",{method:"GET",headers:{"x-rapidapi-host":"amazon-price1.p.rapidapi.com","x-rapidapi-key":"7928a2dcbfmsh5d89e8852c7289fp10f848jsnf45f27536d87"}}).then((function(e){return e.json()}))},U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={product:e.props.product},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("tr",{className:"detailsRow"},r.a.createElement("td",null,r.a.createElement("img",{className:"card-img-top",src:this.state.product.imageUrl})),r.a.createElement("td",null,this.state.product.title),r.a.createElement("td",null,this.state.product.price),r.a.createElement("td",null,this.state.product.rating),r.a.createElement("td",null,this.state.product.totalReviews),r.a.createElement("td",null,r.a.createElement("a",{href:"".concat(this.state.product.detailPageURL)},"Link")))}}]),a}(r.a.Component),_=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={product:e.props.product},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:this.state.product.imageUrl}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,this.state.product.title),r.a.createElement("div",null,this.state.product.price),r.a.createElement(m.b,{to:"/details/".concat(this.state.product.ASIN)},r.a.createElement("button",{className:"btn btn-primary btn-sm"},"More Details"))))}}]),a}(r.a.Component),L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{className:"table detailsTable"},r.a.createElement("thead",{className:"detailsTableHeader"},r.a.createElement("tr",null,r.a.createElement("td",null,"Image"),r.a.createElement("td",null,"Title"),r.a.createElement("td",null,"Price"),r.a.createElement("td",null,"Rating"),r.a.createElement("td",null,"Total Reviews"),r.a.createElement("td",null,"Link To Product"))),r.a.createElement("tbody",null,this.props.product.map((function(t){return r.a.createElement(U,{product:t,key:e.props.product.ASIN})})))))}}]),a}(r.a.Component),H=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={product:[],productId:e.props.match.params.productId},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;x(this.state.productId).then((function(t){return e.setState({product:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link detailsPageSearchLink",to:"/search"},"Back To Search")),r.a.createElement("li",null,r.a.createElement("h3",{className:"navbar-brand mr-auto searchPageHeader"},"Details Page"))))),r.a.createElement("div",null,r.a.createElement(L,{product:this.state.product})))}}]),a}(r.a.Component),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table searchResultTable"},r.a.createElement("thead",{className:"searchResultHeader"},r.a.createElement("tr",null,r.a.createElement("td",null,'Search Results For "',this.props.keyword,'"')))),r.a.createElement("div",{className:"row"},this.props.products.map((function(e){return r.a.createElement("div",{key:e.ASIN,className:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},r.a.createElement(_,{product:e}))}))))}}]),a}(r.a.Component),A=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={keyword:"",products:[]},e.updateKeyWord=function(t){return e.setState((function(e){return{keyword:t}}))},e.searchProducts=function(t){T(t).then((function(t){return e.setState({products:t})}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{styles:{display:"inline-block"}},r.a.createElement("nav",{className:"navbar  fixed-top navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link searchPageHomeLink",to:"/"},"Back To Home")),r.a.createElement("li",null,r.a.createElement("h3",{className:"navbar-brand mr-auto searchPageHeader"},"Search Page")))),r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",{className:"newCourseInput"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",placeholder:"Keyword",onChange:function(t){return e.updateKeyWord(t.target.value)},value:this.state.keyword}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:function(){return e.searchProducts(e.state.keyword)},className:"btn btn-primary"},"Search")))))))),r.a.createElement("div",null,r.a.createElement(D,{products:this.state.products,keyword:this.state.keyword})))}}]),a}(r.a.Component),R=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null))}}]),a}(r.a.Component),F=function(){return fetch("http://localhost:8080/api/sellers",{method:"POST",credentials:"include"}).then((function(e){return e.json()}))},B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",error:""},e.updateUsername=function(t){return e.setState((function(e){return{username:t}}))},e.updatePassword=function(t){return e.setState((function(e){return{password:t}}))},e.login=function(){v(e.state.username,e.state.password).catch((function(t){e.setState({error:"Invalid Login Attempt"})})).then((function(t){t&&e.props.history.push("/profile")}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{styles:{display:"inline-block"}},r.a.createElement("nav",{className:"navbar  fixed-top navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link searchPageHomeLink",to:"/"},"Back To Home")),r.a.createElement("li",null,r.a.createElement("h3",{className:"navbar-brand mr-auto searchPageHeader"},"Login Page")))))),this.state.error&&r.a.createElement("div",{className:"alert alert-danger loginError"},this.state.error),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group loginPage"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{onChange:function(t){return e.updateUsername(t.target.value)},type:"email",className:"form-control",id:"username","aria-describedby":"emailHelp",placeholder:"Enter Username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:function(t){return e.updatePassword(t.target.value)},type:"password",className:"form-control",id:"password",placeholder:"Enter Password"})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.login()}},"Login")))}}]),a}(r.a.Component),q=function(){return fetch("http://localhost:8080/api/buyers",{method:"POST",credentials:"include"}).then((function(e){return e.json()}))},I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",userType:"",user:"",error:null},e.updateUsername=function(t){return e.setState((function(e){return{username:t}}))},e.updatePassword=function(t){return e.setState((function(e){return{password:t}}))},e.updateType=function(t){e.setState({userType:t})},e.register=function(){p(e.state.username,e.state.password,e.state.userType).catch((function(t){e.setState({error:"Unable to register"})})).then((function(t){t&&(e.setState({user:t}),e.assignUser(e.state.userType),e.props.history.push("/profile"))}))},e}return Object(i.a)(a,[{key:"assignUser",value:function(e){"buyer"===e?q().catch((function(e){return console.log(e)})):"seller"===e&&F().catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{styles:{display:"inline-block"}},r.a.createElement("nav",{className:"navbar  fixed-top navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link searchPageHomeLink",to:"/"},"Back To Home")),r.a.createElement("li",null,r.a.createElement("h3",{className:"navbar-brand mr-auto searchPageHeader"},"Register Page")))))),this.state.error&&r.a.createElement("div",{className:"alert alert-danger"},this.state.error),r.a.createElement("div",{className:"input-group loginPage"},r.a.createElement("label",{htmlFor:"username",className:"col-sm-2 col-form-label"},"Username "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Enter Username",onChange:function(t){return e.updateUsername(t.target.value)},value:this.state.username})),r.a.createElement("label",{htmlFor:"password",className:"col-sm-2 col-form-label"},"Password "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Enter Password",onChange:function(t){return e.updatePassword(t.target.value)},value:this.state.password})),r.a.createElement("label",{htmlFor:"accountType",className:"col-sm-2 col-form-label"},"Account Type "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Enter Buyer or Seller",onChange:function(t){return e.updateType(t.target.value)},value:this.state.userType})),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{onClick:function(){return e.register()},className:"btn btn-primary"},"Register"))))}}]),a}(r.a.Component),M=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",firstName:"",lastName:"",email:"",userType:"",currentUser:""},e.updateUsername=function(t){return e.setState((function(e){return{username:t}}))},e.updatePassword=function(t){return e.setState((function(e){return{password:t}}))},e.updateFirstName=function(t){return e.setState((function(e){return{firstName:t}}))},e.updateLastName=function(t){return e.setState((function(e){return{lastName:t}}))},e.updateEmail=function(t){return e.setState((function(e){return{email:t}}))},e.updateType=function(t){e.setState({userType:t})},e.update=function(){return f(e.state.username,e.state.password,e.state.firstName,e.state.lastName,e.state.email,e.state.userType,e.state.currentUser)},e.logout=function(){return E().then((function(t){return e.props.history.push("/")}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().catch((function(e){})).then((function(t){t&&e.setState({currentUser:t})}))}},{key:"componentDidUpdate",value:function(e,t,a){t.currentUser!==this.state.currentUser&&this.setState({currentUser:this.state.currentUser})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{styles:{display:"inline-block"}},r.a.createElement("nav",{className:"navbar  fixed-top navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link searchPageHomeLink",to:"/"},"Back To Home")),r.a.createElement("li",null,r.a.createElement("h3",{className:"navbar-brand mr-auto searchPageHeader"},"Profile Page")))))),r.a.createElement("div",{className:"input-group loginPage"},r.a.createElement("label",{htmlFor:"username",className:"col-sm-2 col-form-label"},this.state.currentUser.username," "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Edit Username",onChange:function(t){return e.updateUsername(t.target.value)},value:this.state.username})),r.a.createElement("label",{htmlFor:"password",className:"col-sm-2 col-form-label"},this.state.currentUser.password," "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Edit Password",onChange:function(t){return e.updatePassword(t.target.value)},value:this.state.password})),r.a.createElement("label",{htmlFor:"firstName",className:"col-sm-2 col-form-label"},this.state.currentUser.firstName," "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Edit First Name",onChange:function(t){return e.updateFirstName(t.target.value)},value:this.state.firstName})),r.a.createElement("label",{htmlFor:"lastName",className:"col-sm-2 col-form-label"},this.state.currentUser.lastName," "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Edit Last Name",onChange:function(t){return e.updateLastName(t.target.value)},value:this.state.lastName})),r.a.createElement("label",{htmlFor:"email",className:"col-sm-2 col-form-label"},this.state.currentUser.email," "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Edit Email",onChange:function(t){return e.updateEmail(t.target.value)},value:this.state.email})),r.a.createElement("label",{htmlFor:"accountType",className:"col-sm-2 col-form-label"},this.state.currentUser.userType," "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"Edit Account Type",onChange:function(t){return e.updateType(t.target.value)}})),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{onClick:function(){return e.update()},className:"btn btn-primary"},"Update"),r.a.createElement("button",{onClick:function(){return e.logout()},className:"btn btn-danger logoutBtn"},"Logout"))))}}]),a}(r.a.Component),J=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={listing:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{styles:{display:"inline-block"}},r.a.createElement("nav",{className:"navbar  fixed-top navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link searchPageHomeLink",to:"/"},"Back To Home")),r.a.createElement("li",null,r.a.createElement("h3",{className:"navbar-brand mr-auto searchPageHeader"},"Search Page")))))),r.a.createElement("div",null,r.a.createElement(g,{listing:this.state.listing})))}}]),a}(r.a.Component),z=a(20),Q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={listing:e.props.listing},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,"Category: ",this.state.listing.l_category),r.a.createElement("div",null,"Name: ",this.state.listing.l_name),r.a.createElement("div",null,"Price: ",this.state.listing.l_price),r.a.createElement("div",null,"Quantity: ",this.state.listing.l_quantity),r.a.createElement("button",{onClick:function(){return e.props.deleteListing(e.state.listing)},className:"btn btn-primary btn-sm"},"Delete")))}}]),a}(r.a.Component),W=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table searchResultTable"},r.a.createElement("thead",{className:"searchResultHeader"},r.a.createElement("tr",null,r.a.createElement("td",null,"Current Store")))),r.a.createElement("div",{className:"row"},this.props.listings.map((function(t){return r.a.createElement("div",{key:t.id,className:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},r.a.createElement(Q,{listing:t,deleteListing:e.deleteListing}))}))))}}]),a}(r.a.Component),G=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={l_category:"",l_name:"",l_price:"",l_quantity:"",listings:[],currentUser:""},e.deleteListing=function(t){return j(t).then((function(a){return e.setState((function(e){return{listings:e.listings.filter((function(e){return e!==t}))}}))}))},e.updatel_category=function(t){return e.setState((function(e){return{l_category:t}}))},e.updatel_name=function(t){return e.setState((function(e){return{l_name:t}}))},e.updatel_price=function(t){return e.setState((function(e){return{l_price:t}}))},e.updatel_quantity=function(t){return e.setState((function(e){return{l_quantity:t}}))},e.createListing=function(){return k(e.state.l_category,e.state.l_name,e.state.l_price,e.state.l_quantity).catch((function(e){console.log(e)})).then((function(t){return e.setState((function(e){return{listings:[].concat(Object(z.a)(e.listings),[t])}}))}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().catch((function(e){})).then((function(t){t&&e.setState({currentUser:t})})),O(this.state.category).then((function(t){return e.setState({listings:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{styles:{display:"inline-block"}},r.a.createElement("nav",{className:"navbar  fixed-top navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav navbar-nav",style:{flexDirection:"row"}},r.a.createElement("li",null,r.a.createElement(m.b,{className:"nav-link searchPageHomeLink",to:"/"},"Back To Home")),r.a.createElement("li",null,r.a.createElement("h3",{className:"navbar-brand mr-auto searchPageHeader"},"Store Page")))))),r.a.createElement("div",{className:"input-group loginPage"},r.a.createElement("label",{htmlFor:"l_category",className:"col-sm-2 col-form-label"},"Enter Category "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"",onChange:function(t){return e.updatel_category(t.target.value)},value:this.state.l_category})),r.a.createElement("label",{htmlFor:"name",className:"col-sm-2 col-form-label"},"Enter Name "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"",onChange:function(t){return e.updatel_name(t.target.value)},value:this.state.l_name})),r.a.createElement("label",{htmlFor:"l_price",className:"col-sm-2 col-form-label"},"Enter Price "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"",onChange:function(t){return e.updatel_price(t.target.value)},value:this.state.l_price})),r.a.createElement("label",{htmlFor:"l_quantity",className:"col-sm-2 col-form-label"},"Enter Quantity "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",placeholder:"",onChange:function(t){return e.updatel_quantity(t.target.value)},value:this.state.l_quantity})),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{onClick:function(){return e.createListing()},className:"btn btn-primary"},"Create Listing"))),r.a.createElement("div",null,r.a.createElement(W,{listings:this.state.listings,deleteListing:this.deleteListing})))}}]),a}(r.a.Component),K=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(d.a,{path:"/store",exact:!0,component:G}),r.a.createElement(d.a,{path:"/cart",exact:!0,component:J}),r.a.createElement(d.a,{path:"/profile",exact:!0,component:M}),r.a.createElement(d.a,{path:"/login",exact:!0,component:B}),r.a.createElement(d.a,{path:"/register",exact:!0,component:I}),r.a.createElement(d.a,{path:"/listings",exact:!0,component:S}),r.a.createElement(d.a,{path:"/:category/listings",exact:!0,component:S}),r.a.createElement(d.a,{path:"/",exact:!0,component:C}),r.a.createElement(d.a,{path:"/search",exact:!0,component:R}),r.a.createElement(d.a,{path:"/search/:keyword",exact:!0,component:R}),r.a.createElement(d.a,{exact:!0,path:"/details",component:H}),r.a.createElement(d.a,{path:"/details/:productId",component:H})))}}]),a}(r.a.Component);var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.9e615349.chunk.js.map