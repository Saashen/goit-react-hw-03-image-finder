(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__3-l_A",Modal:"Modal_Modal__2cIHP"}},22:function(e,a,t){e.exports={App:"App_App__3WPqI",Error:"App_Error__11UO5"}},23:function(e,a,t){e.exports={Button:"Button_Button__cJ1tz"}},24:function(e,a,t){e.exports={ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__2UIrY"}},26:function(e,a,t){e.exports={Loader:"Loader_Loader__134TY"}},27:function(e,a,t){e.exports={Error:"Error_Error__3i0zj"}},29:function(e,a,t){e.exports=t(74)},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(21),c=t.n(o),l=t(11),s=t(3),i=t(4),m=t(6),u=t(5),h=t(7),g=t(22),p=t.n(g),d=t(23),_=t.n(d),f=function(e){var a=e.handleClick;return n.a.createElement("button",{type:"button",className:_.a.Button,onClick:a},"LoadMore")},b=t(9),y=t.n(b),S=t(24),I=t.n(S),E=t(10),v=t.n(E),O=function(e){var a=e.largeImageURL,t=e.closeModal,r=e.tags;return window.addEventListener("keydown",t),n.a.createElement("button",{type:"button",className:v.a.Overlay,onClick:t},n.a.createElement("div",null,n.a.createElement("img",{src:a,alt:r,className:v.a.Modal})))},L=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={isModalOpen:!1},t.handleImageClick=function(){return t.setState({isModalOpen:!0})},t.closeModal=function(e){"keydown"===e.type&&"Escape"!==e.code||"click"===e.type&&"IMG"===e.target.nodeName||t.setState({isModalOpen:!1})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.largeImageURL,t=e.webformatURL,r=e.tags,o=this.state.isModalOpen;return n.a.createElement(n.a.Fragment,null,o&&n.a.createElement(O,{alt:r,largeImageURL:a,closeModal:this.closeModal,tags:r}),n.a.createElement("img",{src:t,alt:r,className:I.a.ImageGalleryItem_image,onClick:this.handleImageClick}))}}]),a}(r.Component),j=function(e){var a=e.images;return n.a.createElement("ul",{className:y.a.ImageGallery},a.map((function(e){return n.a.createElement("li",{key:e.id,className:y.a.ImageGalleryItem},n.a.createElement(L,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}))})))},k=t(8),w=t.n(k),M=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={query:""},t.handleChange=function(e){t.setState({query:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSearch(t.state.query),t.setState({query:""})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return n.a.createElement("header",{className:w.a.Searchbar},n.a.createElement("form",{onSubmit:this.handleSubmit,className:w.a.SearchForm},n.a.createElement("button",{type:"submit",className:w.a.SearchForm_button},n.a.createElement("span",{className:w.a.SearchForm_button_label},"Search")),n.a.createElement("input",{onChange:this.handleChange,className:w.a.SearchForm_input,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),a}(r.Component),N=t(25),q=t.n(N),C=t(26),F=t.n(C),G=function(){return n.a.createElement(q.a,{className:F.a.Loader,type:"ThreeDots",color:"#3f51b5",height:100,width:100})},x=t(27),A=t.n(x),U=function(e){var a=e.message;return n.a.createElement("h1",{className:A.a.Error},"Error: ",a)},R=t(28),B=t.n(R),J=function(e,a){return B.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(a,"&key=").concat("14926411-aa7bad2d088edfa07dff12899").concat("&image_type=photo&orientation=horizontal&per_page=12"))},T=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={images:[],query:"",page:1,isLoading:!1,error:null},t.handleImageSearch=function(e){t.setState({query:e,images:[],page:1})},t.loadImages=function(){t.setState({isLoading:!0}),J(t.state.query,t.state.page).then((function(e){var a=e.data;return t.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a.hits)),page:e.page+1}}))})).catch((function(e){t.setState({error:e.message})})).finally((function(){return t.setState({isLoading:!1})}))},t.handleLoadMoreButton=function(){var e=t.state,a=e.query,r=e.page;t.loadImages(a,r)},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,r=t.page,n=t.query;a.query!==n&&this.loadImages(),a.page!==r&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,r=e.error;return n.a.createElement("div",{className:p.a.App},n.a.createElement(M,{onSearch:this.handleImageSearch}),r&&n.a.createElement(U,{message:r}),n.a.createElement(j,{images:a}),t?n.a.createElement(G,null):a.length>0&&n.a.createElement(f,{handleClick:this.handleLoadMoreButton}))}}]),a}(r.Component);t(73);c.a.render(n.a.createElement(T,null),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__2jJXT",SearchForm:"Searchbar_SearchForm__rcAom",SearchForm_button:"Searchbar_SearchForm_button__8KlLd",SearchForm_button_label:"Searchbar_SearchForm_button_label__2qX3R",SearchForm_input:"Searchbar_SearchForm_input__1w_oa"}},9:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__QhbsA",ImageGalleryItem:"ImageGallery_ImageGalleryItem__3c5oi"}}},[[29,1,2]]]);
//# sourceMappingURL=main.84b9b9cc.chunk.js.map