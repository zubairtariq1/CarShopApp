(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){},105:function(e,a,t){},266:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(15),o=t.n(l),c=(t(103),t(22)),s=t(23),i=t(25),d=t(24),h=t(26),u=(t(105),t(97)),m=t(96),f=(t(109),t(95)),C=t.n(f),p=t(58),b=t.n(p),E=t(27),v=t.n(E),g=t(94),y=t.n(g),k=t(44),w=t.n(k),S=t(90),O=t(91),j=t.n(O),H=t(93),M=t.n(H),T=t(18),N=t.n(T),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(S.a)({},e.target.name,e.target.value))},t.saveCar=function(){var e={brand:t.state.brand,model:t.state.model,color:t.state.color,year:t.state.year,fuel:t.state.fuel,price:t.state.price};t.props.saveCar(e),t.setState({brand:"",model:"",color:"",year:"",fuel:"",price:""}),t.addModal.current.hide()},t.state={brand:"",model:"",color:"",year:"",fuel:"",price:""},t.addModal=r.a.createRef(),t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{style:{margin:10},variant:"contained",color:"primary",onClick:function(){return e.addModal.current.show()}},"New Car ",r.a.createElement(M.a,null)),r.a.createElement(j.a,{dialogStyles:{width:"20%",height:"300px",marginLeft:"-10%"},hideOnOverlayClicked:!0,ref:this.addModal,title:"New Car"},r.a.createElement(N.a,{placeholder:"brand",name:"brand",onChange:this.handleChange,value:this.state.brand})," ",r.a.createElement("br",null),r.a.createElement(N.a,{placeholder:"model",name:"model",onChange:this.handleChange,value:this.state.model})," ",r.a.createElement("br",null),r.a.createElement(N.a,{placeholder:"color",name:"color",onChange:this.handleChange,value:this.state.color})," ",r.a.createElement("br",null),r.a.createElement(N.a,{placeholder:"year",name:"year",onChange:this.handleChange,value:this.state.year}),"   ",r.a.createElement("br",null),r.a.createElement(N.a,{placeholder:"fuel",name:"fuel",onChange:this.handleChange,value:this.state.fuel})," ",r.a.createElement("br",null),r.a.createElement(N.a,{placeholder:"price",name:"price",onChange:this.handleChange,value:this.state.price}),"  ",r.a.createElement("br",null),r.a.createElement(v.a,{style:{margin:10},variant:"contained",color:"primary",onClick:this.saveCar},"Save Car",r.a.createElement(w.a,null))))}}]),a}(n.Component),B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).updateCar=function(e,a){fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){t.setState({showSnack:!0,msg:"Car Saved"}),t.listCars()})},t.renderEditable=function(e){return r.a.createElement("div",{style:{backgroundColor:"#fafafa"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){var n=Object(u.a)(t.state.cars);n[e.index][e.column.id]=a.target.innerHTML,t.setState({cars:n})},dangerouslySetInnerHTML:{__html:t.state.cars[e.index][e.column.id]}})},t.handleClose=function(){t.setState({showSnack:!1})},t.deleteCar=function(e){fetch(e,{method:"DELETE"}).then(function(e){t.listCars(),t.setState({showSnack:!0,msg:"Car Deleted"})})},t.saveCar=function(e){fetch("https://carstockrest.herokuapp.com/cars",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){t.listCars()}).catch(function(e){console.error(e),t.setState({showSnack:!0,msg:"Error in Saving"})})},t.state={cars:[],showSnack:!1,msg:""},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.listCars()}},{key:"listCars",value:function(){var e=this;fetch("https://carstockrest.herokuapp.com/cars").then(function(e){return e.json()}).then(function(a){e.setState({cars:a._embedded.cars})})}},{key:"render",value:function(){var e=this,a=[{Header:"Brand",accessor:"brand",Cell:this.renderEditable},{Header:"Model",accessor:"model",Cell:this.renderEditable},{Header:"Year",accessor:"year",Cell:this.renderEditable},{Header:"Color",accessor:"color",Cell:this.renderEditable},{Header:"Fuel",accessor:"fuel",Cell:this.renderEditable},{Header:"Price \u20ac",accessor:"price",Cell:this.renderEditable},{Header:"",accessor:"_links.self.href",filterable:!1,sortable:!1,Cell:function(a){var t=a.row,n=a.value;return r.a.createElement("div",null,r.a.createElement(v.a,{size:"small",color:"default",onClick:function(){return e.updateCar(t,n)}},r.a.createElement(w.a,null)),r.a.createElement(v.a,{size:"small",color:"default",onClick:function(){return e.deleteCar(n)}},r.a.createElement(y.a,null)))}}];return r.a.createElement("div",null,r.a.createElement(x,{saveCar:this.saveCar}),r.a.createElement(m.a,{filterable:!0,defaultPageSize:10,data:this.state.cars,columns:a}),r.a.createElement(C.a,{autoHideDuration:3e3,open:this.state.showSnack,onClose:this.handleClose,TransitionComponent:b.a,message:this.state.msg}),r.a.createElement("iframe",{allow:"microphone;",width:"350",height:"430",src:"https://console.dialogflow.com/api-client/demo/embedded/e16f9528-4472-49e1-8a8f-1e912a5f8a94"}))}}]),a}(n.Component),D=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"Car Shop")),r.a.createElement(B,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,a,t){e.exports=t(266)}},[[98,2,1]]]);
//# sourceMappingURL=main.19169f4a.chunk.js.map