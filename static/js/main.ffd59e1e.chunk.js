(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{16:function(e,a,t){e.exports={card:"RecipeCard_card__2RWNY",title:"RecipeCard_title__3vIAq",custombtn:"RecipeCard_custombtn__1k9K3"}},23:function(e,a,t){e.exports={header:"Header_header__3yRSH",highlight:"Header_highlight__1rYGf",input:"Header_input__1MriE",btn:"Header_btn__u1HSo",logo:"Header_logo__3OL3U",imagecontainer:"Header_imagecontainer__1JdKx"}},30:function(e,a,t){e.exports={nav:"Nav_nav__2RGQO"}},31:function(e,a,t){e.exports={custombtn:"Recipes_custombtn__7Z8_6"}},42:function(e,a,t){e.exports={logo:"Logo_logo__2c2jq"}},43:function(e,a,t){e.exports=t.p+"static/media/icons8_soup_plate_32.5f844aae.png"},44:function(e,a,t){e.exports=t.p+"static/media/kisspng-angus-cattle-kebab-hamburger-take-out-pizza-beef-burger-5ad848f1a59fd3.9041058515241238896784.04b5130b.png"},48:function(e,a,t){e.exports={ldsellipsis:"LoadingIndicator_ldsellipsis__1ZP3G","lds-ellipsis1":"LoadingIndicator_lds-ellipsis1__3JIGv","lds-ellipsis2":"LoadingIndicator_lds-ellipsis2__1jaNg","lds-ellipsis3":"LoadingIndicator_lds-ellipsis3__ZUbEk"}},49:function(e,a,t){e.exports={backdrop:"Backdrop_backdrop__3T0we"}},50:function(e,a,t){e.exports={child:"Modal_child__3sxR6"}},51:function(e,a,t){e.exports=t.p+"static/media/icons8_delete.0527b4b9.ico"},52:function(e,a,t){e.exports=t(84)},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},63:function(e,a,t){e.exports=t.p+"static/media/1161745-312x231.2b95350e.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/icons8_pot.12bd97a8.ico"},65:function(e,a,t){e.exports=t.p+"static/media/icons8_stopwatch.a3803f26.ico"},84:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),r=t.n(c),s=(t(57),t(58),t(15)),i=t.n(s),o=t(5),u=t(29),m=t(6),d=t(7),p=t(9),h=t(8),f=(t(60),t(30)),b=t.n(f),g=t(42),E=t.n(g),y=t(43),v=t.n(y),x=function(e){return l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("img",{alt:"logo",className:E.a.logo,src:v.a}),l.a.createElement("h3",{style:{fontWeight:800}},"Foodie"))},_=t(85),N=t(86),j=t(87),R=function(e){return l.a.createElement(_.a,{className:"p-2 ".concat(b.a.nav)},l.a.createElement(N.a,{className:"d-flex align-items-center justify-content-between "},l.a.createElement(j.a,{xs:4},l.a.createElement(x,null)),l.a.createElement(j.a,{xs:4,className:"d-flex justify-content-end align-items-center"},l.a.createElement("h5",{className:b.a.navEl},l.a.createElement("a",{href:!0},"source")))))},k=t(23),w=t.n(k),O=t(44),S=t.n(O),I=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={searchValue:""},e.ChangeSearchVal=function(){""===e.state.searchValue?alert("please enter food item to search"):e.props.clicked(e.state.searchValue)},e.TextboxValue=function(a){var t=a.target.value;e.setState({searchValue:t})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(_.a,{className:"mt-2 text-light  rounded  ".concat(w.a.header," py-xs-4 py-md-3 text-center")},l.a.createElement(N.a,{className:"d-flex justify-content-between align-items-center px-md-4  py-md-0 "},l.a.createElement(j.a,{md:6,xs:12,className:" py-3"},l.a.createElement("h2",{style:{fontWeight:600}},"Expand your Cooking Skills ",l.a.createElement("br",null)," with ",l.a.createElement("span",{className:w.a.highlight},"Foodie")),l.a.createElement("h5",{style:{fontWeight:200},className:"py-2"},"Get creative with thousands of recipes made ready for you.cook enjoy and shares with your love ones while upgraded your cooking skills."),l.a.createElement("input",{onChange:function(a){return e.TextboxValue(a)},placeholder:"Enter meal name",className:"".concat(w.a.input," rounded-left")}),l.a.createElement("button",{onClick:this.ChangeSearchVal,className:"".concat(w.a.btn," rounded-right")},"Search")),l.a.createElement(j.a,{md:6,className:"d-none d-md-block"},l.a.createElement("img",{alt:"logo",className:"".concat(w.a.logo),src:S.a}))))}}]),t}(n.Component),C=function(e){return e.children},D=t(45),M=function(e){return l.a.createElement(D.a,{defaultValue:"All",placeholder:e.placeholder,label:"Single select",options:e.options,theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:5,colors:Object(o.a)(Object(o.a)({},e.colors),{},{primary25:"pink",primary:"dangerLight"})})}})},T=t(47),F=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(T.a,{isMulti:!0,onChange:this.handleChange,defaultValue:"All",placeholder:this.props.placeholder,label:"Single select",options:this.props.options,theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:5,colors:Object(o.a)(Object(o.a)({},e.colors),{},{primary25:"pink",primary:"dangerLight"})})}})}}]),t}(n.Component),H=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={Diet:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],Intolerance:[{value:"chocolate",label:"Dairy"},{value:"strawberry",label:"Egg"},{value:"vanilla",label:"Grain"},{value:"chocolate",label:"Peanut"},{value:"strawberry",label:"Seafood"},{value:"vanilla",label:"Sesame"},{value:"chocolate",label:"Shellfish"},{value:"strawberry",label:"Soy"},{value:"vanilla",label:"Sulfite"},{value:"strawberry",label:"Tree Nut"},{value:"vanilla",label:"Wheat"}],Type:[{value:"main course",label:"Main Course"},{value:"side dish",label:"Side Dish"},{value:"dessert",label:"Dessert"},{value:"main course",label:"Appetizer"},{value:"strawberry",label:"Salad"},{value:"vanilla",label:"Bread"},{value:"dessert",label:"BreakFast"},{value:"main course",label:"Soup"},{value:"strawberry",label:"Beverage"},{value:"vanilla",label:"Sauce"},{value:"dessert",label:"Marinade"},{value:"main course",label:"FingerFood"},{value:"strawberry",label:"Snack"},{value:"vanilla",label:"Drink"}],Cuisine:["African","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","middle Eastern","Nordic","Southern","Thai","Vietnamese"].map((function(e){return{value:e,label:e}}))},e}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(_.a,null,l.a.createElement(N.a,{className:"my-4 justify-content-center 3"},l.a.createElement(j.a,{xs:12,md:3,className:"my-3"},l.a.createElement(M,{placeholder:"Filter Diet",options:this.state.options})),l.a.createElement(j.a,{xs:12,md:3,className:"my-3"},l.a.createElement(M,{placeholder:"Filter Intolerance",options:this.state.options})),l.a.createElement(j.a,{xs:12,md:3,className:"my-3"},l.a.createElement(M,{placeholder:"Filter Type",options:this.state.Type})),l.a.createElement(j.a,{xs:12,md:3,className:"my-3"},l.a.createElement(F,{placeholder:"Exclude Cuisine",options:this.state.Cuisine}))))}}]),t}(n.Component),A=(t(63),t(16)),L=t.n(A),V=(t(64),t(65),function(e){return l.a.createElement("div",{style:{color:"#1D1B6E"},xs:12,className:"border rounded h-100 ".concat(L.a.card," ")},l.a.createElement(N.a,null,l.a.createElement(j.a,{className:"text-center align-content-center"},l.a.createElement("img",{alt:"logo",className:"",src:e.img,style:{maxWidth:"100%",maxheight:"50%"}}),l.a.createElement(_.a,{fluid:!0,className:"py-3"},l.a.createElement("h4",{style:{fontWeight:600}},e.name),l.a.createElement(N.a,{className:"",style:{fontWeight:500}},l.a.createElement(j.a,{xs:12,className:"my-1 "},"Cuisine: ",l.a.createElement("span",{className:"".concat(L.a.title)},e.cuisine)),l.a.createElement(j.a,{xs:6,className:"my-1 "},"Price: ",l.a.createElement("span",{className:"".concat(L.a.title)},"$",e.price)),l.a.createElement(j.a,{xs:6,className:"my-1 "},"Rating: ",l.a.createElement("span",{className:"".concat(L.a.title)},e.rating)),l.a.createElement(j.a,{xs:12,className:"my-1 text-bold"},"PrepTime: ",l.a.createElement("span",{className:"".concat(L.a.title)},e.prepTime,"min")),l.a.createElement(j.a,{xs:12,className:"my-1"},"Dish Type: ",l.a.createElement("span",{className:"".concat(L.a.title," text-wrap")},e.type)),l.a.createElement(j.a,{xs:12,className:"my-2 d-flex justify-content-center"},e.children))))))}),W=t(31),B=t.n(W),G=t(48),J=t.n(G),K=function(){return l.a.createElement("div",{className:J.a.ldsellipsis},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))},P=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=this.props.data.RecipeData.map((function(a){return l.a.createElement(j.a,{xs:12,md:4,className:"text-center text-md-left my-2"},l.a.createElement(V,{key:a.id,name:a.name,prepTime:a.prepTime,img:a.image,price:a.price,rating:a.rating,type:a.type,cuisine:a.cuisine},l.a.createElement("button",{className:"".concat(B.a.custombtn),onClick:function(){return e.props.clicked(a.id)}},"View Recipe")))}));return l.a.createElement(_.a,null,l.a.createElement("h3",{style:{color:"#1D1B6E"},className:"text-center text-md-left"},"Recipes"),l.a.createElement("h5",{style:{color:"#1D1B6E"},className:"text-center text-md-left"},"Total Results : ",l.a.createElement("span",{style:{color:"#FF798A"}},this.props.totalResults)),l.a.createElement(N.a,null,a),l.a.createElement(N.a,{className:"my-4 d-flex justify-content-center"},this.props.data.loadingMoreRecipes||!this.props.data.RecipesLoaded?l.a.createElement(K,null):null),l.a.createElement(N.a,{className:"my-4 d-flex justify-content-center"},this.props.data.RecipesLoaded?l.a.createElement("button",{onClick:this.props.moreRecipesHandler,className:"".concat(B.a.custombtn)},"More\u2b07"):null))}}]),t}(n.Component),q=t(27),z=t.n(q),Z=t(49),U=t.n(Z),Y=function(e){return n.createElement(_.a,{fluid:!0,className:"".concat(U.a.backdrop),onClick:e.close},e.children)},$=t(50),Q=t.n($),X=function(e){return e.show?n.createElement(Y,{className:"bg-danger",close:e.close},n.createElement("div",{className:"bg-light rounded h-90 p-3 ".concat(Q.a.child),style:{color:"#1D1B6E"}},e.children)):null},ee=t(51),ae=t.n(ee),te=t(32),ne=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={RecipeData:{},loadedRecipeInfo:!1},e}return Object(d.a)(t,[{key:"fetchCurrentRecipe",value:function(){var e=this;z.a.get("https://api.spoonacular.com/recipes/".concat(this.props.id,"/information?apiKey=0198da9be6534f7ea70d9089e498c835")).then((function(a){var t;t={name:a.data.title,summary:a.data.summary,instructions:a.data.instructions,ingredients:a.data.extendedIngredients.map((function(e){return e.original})).join(" , "),type:a.data.dishTypes.join(","),cuisine:a.data.cuisines.join(",")};var n;n=t,e.setState({RecipeData:n,loadedRecipeInfo:!0},(function(){console.log(e.state.RecipeData),console.log(n)}))})).catch((function(e){alert(e)}))}},{key:"componentDidMount",value:function(){this.fetchCurrentRecipe()}},{key:"render",value:function(){var e=l.a.createElement(C,null,l.a.createElement(N.a,{className:"d-flex justify-content-end px-2"},l.a.createElement("img",{src:ae.a,alt:"cancelImg"})),l.a.createElement(N.a,null,l.a.createElement(j.a,{className:"text-center"},l.a.createElement("h3",{style:{fontWeight:600,color:"#FF798A"}},this.state.RecipeData.name),l.a.createElement("h6",{dangerouslySetInnerHTML:{__html:te.a.link(this.state.RecipeData.summary)}}))),l.a.createElement(N.a,{className:"my-2"},l.a.createElement(j.a,{className:"text-center"},l.a.createElement("h4",{style:{fontWeight:500,color:"#FF798A"}},"Ingredients"),l.a.createElement(j.a,{style:{fontWeight:500}},this.state.RecipeData.ingredients))),l.a.createElement(N.a,null,l.a.createElement(j.a,{className:"text-center mt-2"},l.a.createElement("h4",{style:{fontWeight:500,color:"#FF798A"}},"Instructions"),l.a.createElement(j.a,null,l.a.createElement("h6",{dangerouslySetInnerHTML:{__html:te.a.link(this.state.RecipeData.instructions)},style:{fontWeight:500}})))));return this.state.loadedRecipeInfo?l.a.createElement(C,null,e):l.a.createElement("div",{className:"text-center"},l.a.createElement(K,null))}}]),t}(n.Component),le=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={data:{RecipeData:[],RecipesLoaded:!1,offset:0,number:30,loadingMoreRecipes:!1},totalResults:0,initialSearchItem:"",showModal:!1,selectedID:null},e.moreRecipesHandler=Object(u.a)(i.a.mark((function a(){var t,n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return 30,t=e.state.data.number+30,(n=Object(o.a)({},e.state.data)).number=t,n.offset=30,n.loadingMoreRecipes=!0,a.next=8,e.setState({data:n});case 8:e.fetchRecipes();case 9:case"end":return a.stop()}}),a)}))),e}return Object(d.a)(t,[{key:"changeSearchValHandler",value:function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({initialSearchItem:a});case 2:this.fetchRecipes();case 3:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"fetchRecipes",value:function(){var e=this;console.log("inside FectRecipes: ".concat(this.state.initialSearchItem));var a=[];z.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=0198da9be6534f7ea70d9089e498c835&query=".concat(this.state.initialSearchItem,"&number=").concat(this.state.data.number,"&addRecipeInformation=true&offset=").concat(this.state.data.offset)).then((function(t){t.data.results.forEach((function(e){var t;t={name:e.title,id:e.id,prepTime:e.readyInMinutes,image:e.image,price:e.pricePerServing,rating:e.spoonacularScore,type:e.dishTypes.slice(0,4).join(","),cuisine:e.cuisines.join(",")},a.push(t)}));var n=Object(o.a)({},e.state.data);n.RecipeData=a,n.RecipesLoaded=!0,n.loadingMoreRecipes=!1,e.setState({data:n,totalResults:t.data.totalResults}),console.log(e.state.data),console.log(n)})).catch((function(e){alert(e)}))}},{key:"toggleModal",value:function(){var e=this.state.showModal;this.setState({showModal:!e})}},{key:"componentDidMount",value:function(){this.fetchRecipes()}},{key:"selectedIdHandler",value:function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({selectedID:a});case 2:this.toggleModal();case 3:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(C,null,null!==this.state.selectedID?l.a.createElement(X,{show:this.state.showModal,close:this.toggleModal.bind(this)},l.a.createElement(ne,{id:this.state.selectedID})):null,l.a.createElement(R,null),l.a.createElement(I,{clicked:this.changeSearchValHandler.bind(this)}),l.a.createElement(H,null),l.a.createElement(P,{data:this.state.data,totalResults:this.state.totalResults,moreRecipesHandler:this.moreRecipesHandler,clicked:this.selectedIdHandler.bind(this)}))}}]),t}(n.Component);var ce=function(){return l.a.createElement(le,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(83);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.ffd59e1e.chunk.js.map