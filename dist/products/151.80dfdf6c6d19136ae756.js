(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[151],{4151:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ProductsModule:()=>gt});var r=n(5887),i=n(3735),o=n(8583),a=n(665),s=n(2700),c=n(7716),p=n(4220),u=n(2534),d=n(8262);function g(t,e){1&t&&(c.TgZ(0,"div"),c.TgZ(1,"p"),c._uU(2,"Required"),c.qZA(),c.qZA())}function l(t,e){1&t&&(c.TgZ(0,"div"),c.TgZ(1,"p"),c._uU(2,"Required"),c.qZA(),c.qZA())}function h(t,e){1&t&&(c.TgZ(0,"div"),c.TgZ(1,"p"),c._uU(2,"Required"),c.qZA(),c.qZA())}function f(t,e){1&t&&(c.TgZ(0,"div"),c.TgZ(1,"p"),c._uU(2,"Required"),c.qZA(),c.qZA())}let m=(()=>{class t{constructor(t,e){this.store=t,this.dialogRef=e}ngOnInit(){this.productForm=new a.cw({name:new a.NI(null,a.kI.required),description:new a.NI(null,a.kI.required),price:new a.NI(null,a.kI.required),image:new a.NI(null,a.kI.required)})}onAddProduct(){this.productForm.valid&&(this.store.dispatch((0,s.gK)({product:{id:"",name:this.productForm.value.name,description:this.productForm.value.description,price:this.productForm.value.price,image:this.productForm.value.image}})),this.dialogRef.close())}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(p.yh),c.Y36(u.z))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-add-product"]],decls:36,vars:11,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"h-100","container"],["fxFlex","90","fxFlex.gt-sm","30","fxFlex.sm","60",2,"background-color","#f3f3f3",3,"formGroup","ngSubmit"],[3,"icon","title","hasBgImage"],[1,"card-inner",2,"margin-top","-20px"],[1,"form-control"],["type","text","formControlName","name"],[4,"ngIf"],["type","text","formControlName","price"],["type","text","formControlName","description"],["type","text","formControlName","image"],["fxLayout","row","fxLayoutAlign","space-between center",1,"submit-button-container"],["type","submit",1,"w-30","submit-button",3,"disabled"],[1,"w-30","cancel-button",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"form",1),c.NdJ("ngSubmit",function(){return e.onAddProduct()}),c._UZ(2,"app-header",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.TgZ(5,"label"),c._uU(6,"Name"),c.qZA(),c._UZ(7,"input",5),c.YNc(8,g,3,0,"div",6),c.qZA(),c._UZ(9,"br"),c.TgZ(10,"div",4),c.TgZ(11,"label"),c._uU(12,"Price"),c.qZA(),c._UZ(13,"input",7),c.YNc(14,l,3,0,"div",6),c.qZA(),c._UZ(15,"br"),c.TgZ(16,"div",4),c.TgZ(17,"label"),c._uU(18,"Description"),c.qZA(),c._UZ(19,"input",8),c.YNc(20,h,3,0,"div",6),c.qZA(),c._UZ(21,"br"),c.TgZ(22,"div",4),c.TgZ(23,"label"),c._uU(24,"Image Url"),c.qZA(),c._UZ(25,"input",9),c.YNc(26,f,3,0,"div",6),c.qZA(),c._UZ(27,"br"),c._UZ(28,"br"),c.TgZ(29,"div",10),c._UZ(30,"br"),c.TgZ(31,"button",11),c._uU(32,"Add"),c.qZA(),c._uU(33," \xa0\xa0\xa0\xa0 "),c.TgZ(34,"button",12),c.NdJ("click",function(){return e.cancel()}),c._uU(35,"Cancel"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(1),c.Q6J("formGroup",e.productForm),c.xp6(1),c.Tol("card-spacing"),c.Q6J("icon","exit_to_app")("title","ADD PRODUCT")("hasBgImage",!0),c.xp6(6),c.Q6J("ngIf",(null==e.productForm.controls.name.errors?null:e.productForm.controls.name.errors.required)&&e.productForm.controls.name.touched),c.xp6(6),c.Q6J("ngIf",(null==e.productForm.controls.price.errors?null:e.productForm.controls.price.errors.required)&&e.productForm.controls.price.touched),c.xp6(6),c.Q6J("ngIf",(null==e.productForm.controls.description.errors?null:e.productForm.controls.description.errors.required)&&e.productForm.controls.description.touched),c.xp6(6),c.Q6J("ngIf",(null==e.productForm.controls.image.errors?null:e.productForm.controls.image.errors.required)&&e.productForm.controls.image.touched),c.xp6(5),c.Q6J("disabled",!e.productForm.valid))},directives:[a._Y,a.JL,a.sg,d.G,a.Fj,a.JJ,a.u,o.O5],styles:[".secondary-text-color[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}p[_ngcontent-%COMP%]{font-size:12px;color:red;justify-content:left}"]}),t})();var Z=n(8002),x=n(1841);let b=(()=>{class t{constructor(t,e){this.http=t,this.store=e}getProducts(){return this.http.get("http://localhost:3000/products").pipe((0,Z.U)(t=>{const e=[];for(let n in t){let r=t[n].id;e.push(Object.assign(Object.assign({},t[n]),{id:r}))}return e}))}addProduct(t){return this.http.post("http://localhost:3000/products",t)}updateProduct(t){return this.http.patch(`http://localhost:3000/products/${t.id}`,{[t.id]:{id:t.id,name:t.name,description:t.description,price:t.price,image:t.image}})}deleteProduct(t){return this.http.delete(`http://localhost:3000/products/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(c.LFG(x.eN),c.LFG(p.yh))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=n(9773),_=n(3190),P=n(3342),A=n(9344);let y=(()=>{class t{constructor(t,e,n,i,o){this.actions$=t,this.productsService=e,this.store=n,this.router=i,this.toastr=o,this.loadProducts$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(s.QD),(0,v.zg)(t=>this.productsService.getProducts().pipe((0,Z.U)(t=>(0,s.UE)({products:t})))))),this.addProduct$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(s.gK),(0,v.zg)(t=>this.productsService.addProduct(t.product).pipe((0,Z.U)(e=>{const n=Object.assign(Object.assign({},t.product),{id:e.name});return(0,s.NV)({product:n})}))))),this.updateProduct$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(s.nM),(0,_.w)(t=>this.productsService.updateProduct(t.product).pipe((0,Z.U)(e=>(Object.assign({},t.product),(0,s.j7)({product:t.product}))))))),this.deleteProduct$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(s.Ir),(0,_.w)(t=>this.productsService.deleteProduct(t.id).pipe((0,Z.U)(e=>(0,s.Bl)({id:t.id})))))),this.productRedirect$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(s.Bl),(0,P.b)(t=>{this.router.navigate(["/"]),this.toastr.success("Success")})),{dispatch:!1}),this.productRedirect1$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(s.NV),(0,P.b)(t=>{this.toastr.success("Success"),this.router.navigate(["/"])})),{dispatch:!1}),this.productRedirect2$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(s.j7),(0,P.b)(t=>{this.router.navigate(["/"]),this.toastr.success("Success")})),{dispatch:!1})}}return t.\u0275fac=function(e){return new(e||t)(c.LFG(r.eX),c.LFG(b),c.LFG(p.yh),c.LFG(i.F0),c.LFG(A._W))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac}),t})();const I=(0,p.ZF)("products"),U=(0,p.P1)(I,t=>t.products),q=(0,p.P1)(I,(t,e)=>t.products.find(t=>t.id===e.id));var C=n(7031);function T(t,e){1&t&&(c.TgZ(0,"div"),c._uU(1,"Required"),c.qZA())}function w(t,e){1&t&&(c.TgZ(0,"div"),c._uU(1,"Required"),c.qZA())}function F(t,e){1&t&&(c.TgZ(0,"div"),c._uU(1,"Required"),c.qZA())}let k=(()=>{class t{constructor(t,e,n,r){this.route=t,this.store=e,this.dialogRef=n,this.config=r}ngOnInit(){this.productData=this.config.data,this.route.paramMap.subscribe(t=>{const e=t.get("id");this.store.select(q,{id:e}).subscribe(t=>{this.product=t,this.createForm()})})}createForm(){this.productForm=new a.cw({name:new a.NI(this.productData.name,a.kI.required),description:new a.NI(this.productData.description,a.kI.required),price:new a.NI(this.productData.price,a.kI.required),image:new a.NI(this.productData.image,a.kI.required)})}ngOnDestroy(){this.productSubscription&&this.productSubscription.unsubscribe()}onUpdateProduct(){this.productForm.valid&&(this.store.dispatch((0,s.nM)({product:{id:this.productData.id,name:this.productForm.value.name,description:this.productForm.value.description,price:this.productForm.value.price,image:this.productForm.value.image}})),this.dialogRef.close())}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(i.gz),c.Y36(p.yh),c.Y36(u.z),c.Y36(C.i))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-edit-product"]],decls:30,vars:10,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"h-100","container"],["fxFlex","90","fxFlex.gt-sm","30","fxFlex.sm","60",2,"background-color","#f3f3f3",3,"formGroup","ngSubmit"],[3,"icon","title","hasBgImage"],[1,"card-inner",2,"margin-top","-20px"],[1,"form-control"],["type","text","formControlName","name"],[4,"ngIf"],["type","text","formControlName","price"],["type","text","formControlName","description"],["fxLayout","row","fxLayoutAlign","space-between center",1,"submit-button-container"],["type","submit",1,"w-30","submit-button",3,"disabled"],[1,"w-30","cancel-button",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"form",1),c.NdJ("ngSubmit",function(){return e.onUpdateProduct()}),c._UZ(2,"app-header",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.TgZ(5,"label"),c._uU(6,"Name"),c.qZA(),c._UZ(7,"input",5),c.YNc(8,T,2,0,"div",6),c.qZA(),c._UZ(9,"br"),c.TgZ(10,"div",4),c.TgZ(11,"label"),c._uU(12,"Price"),c.qZA(),c._UZ(13,"input",7),c.YNc(14,w,2,0,"div",6),c.qZA(),c._UZ(15,"br"),c.TgZ(16,"div",4),c.TgZ(17,"label"),c._uU(18,"Description"),c.qZA(),c._UZ(19,"input",8),c.YNc(20,F,2,0,"div",6),c.qZA(),c._UZ(21,"br"),c._UZ(22,"br"),c.TgZ(23,"div",9),c._UZ(24,"br"),c.TgZ(25,"button",10),c._uU(26,"Update"),c.qZA(),c._uU(27," \xa0\xa0\xa0\xa0 "),c.TgZ(28,"button",11),c.NdJ("click",function(){return e.cancel()}),c._uU(29,"Cancel"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(1),c.Q6J("formGroup",e.productForm),c.xp6(1),c.Tol("card-spacing"),c.Q6J("icon","exit_to_app")("title","UPDATE PRODUCT")("hasBgImage",!0),c.xp6(6),c.Q6J("ngIf",(null==e.productForm.controls.name.errors?null:e.productForm.controls.name.errors.required)&&e.productForm.controls.name.touched),c.xp6(6),c.Q6J("ngIf",(null==e.productForm.controls.price.errors?null:e.productForm.controls.price.errors.required)&&e.productForm.controls.price.touched),c.xp6(6),c.Q6J("ngIf",(null==e.productForm.controls.description.errors?null:e.productForm.controls.description.errors.required)&&e.productForm.controls.description.touched),c.xp6(5),c.Q6J("disabled",!e.productForm.valid))},directives:[a._Y,a.JL,a.sg,d.G,a.Fj,a.JJ,a.u,o.O5],styles:[""]}),t})();var L=n(3547),O=n(9299),M=n(4918),N=n(4466);function J(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"a",11),c.NdJ("keyup.enter",function(){return c.CHM(n),c.oxw(3),c.MAs(1).previous()})("click",function(){return c.CHM(n),c.oxw(3),c.MAs(1).previous()}),c._uU(1),c.TgZ(2,"span",12),c._uU(3),c.qZA(),c.qZA()}if(2&t){var r=c.oxw(3);c.uIk("aria-label",r.previousLabel+" "+r.screenReaderPageLabel),c.xp6(1),c.hij(" ",r.previousLabel," "),c.xp6(2),c.Oqu(r.screenReaderPageLabel)}}function S(t,e){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.TgZ(2,"span",12),c._uU(3),c.qZA(),c.qZA()),2&t){var n=c.oxw(3);c.xp6(1),c.hij(" ",n.previousLabel," "),c.xp6(2),c.Oqu(n.screenReaderPageLabel)}}function D(t,e){if(1&t&&(c.TgZ(0,"li",8),c.YNc(1,J,4,3,"a",9),c.YNc(2,S,4,2,"span",10),c.qZA()),2&t){c.oxw(2);var n=c.MAs(1);c.ekj("disabled",n.isFirstPage()),c.xp6(1),c.Q6J("ngIf",1<n.getCurrent()),c.xp6(1),c.Q6J("ngIf",n.isFirstPage())}}function R(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"a",11),c.NdJ("keyup.enter",function(){c.CHM(n);var t=c.oxw().$implicit;return c.oxw(2),c.MAs(1).setCurrent(t.value)})("click",function(){c.CHM(n);var t=c.oxw().$implicit;return c.oxw(2),c.MAs(1).setCurrent(t.value)}),c.TgZ(1,"span",12),c._uU(2),c.qZA(),c.TgZ(3,"span"),c._uU(4),c.qZA(),c.qZA()}if(2&t){var r=c.oxw().$implicit,i=c.oxw(2);c.xp6(2),c.hij("",i.screenReaderPageLabel," "),c.xp6(2),c.Oqu(r.label)}}function Y(t,e){if(1&t&&(c.ynx(0),c.TgZ(1,"span",12),c._uU(2),c.qZA(),c.TgZ(3,"span"),c._uU(4),c.qZA(),c.BQk()),2&t){var n=c.oxw().$implicit,r=c.oxw(2);c.xp6(2),c.hij("",r.screenReaderCurrentLabel," "),c.xp6(2),c.Oqu(n.label)}}function z(t,e){if(1&t&&(c.TgZ(0,"li"),c.YNc(1,R,5,2,"a",9),c.YNc(2,Y,5,2,"ng-container",10),c.qZA()),2&t){var n=e.$implicit;c.oxw(2);var r=c.MAs(1);c.ekj("current",r.getCurrent()===n.value)("ellipsis","..."===n.label),c.xp6(1),c.Q6J("ngIf",r.getCurrent()!==n.value),c.xp6(1),c.Q6J("ngIf",r.getCurrent()===n.value)}}function Q(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"a",11),c.NdJ("keyup.enter",function(){return c.CHM(n),c.oxw(3),c.MAs(1).next()})("click",function(){return c.CHM(n),c.oxw(3),c.MAs(1).next()}),c._uU(1),c.TgZ(2,"span",12),c._uU(3),c.qZA(),c.qZA()}if(2&t){var r=c.oxw(3);c.uIk("aria-label",r.nextLabel+" "+r.screenReaderPageLabel),c.xp6(1),c.hij(" ",r.nextLabel," "),c.xp6(2),c.Oqu(r.screenReaderPageLabel)}}function j(t,e){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.TgZ(2,"span",12),c._uU(3),c.qZA(),c.qZA()),2&t){var n=c.oxw(3);c.xp6(1),c.hij(" ",n.nextLabel," "),c.xp6(2),c.Oqu(n.screenReaderPageLabel)}}function H(t,e){if(1&t&&(c.TgZ(0,"li",13),c.YNc(1,Q,4,3,"a",9),c.YNc(2,j,4,2,"span",10),c.qZA()),2&t){c.oxw(2);var n=c.MAs(1);c.ekj("disabled",n.isLastPage()),c.xp6(1),c.Q6J("ngIf",!n.isLastPage()),c.xp6(1),c.Q6J("ngIf",n.isLastPage())}}function B(t,e){if(1&t&&(c.TgZ(0,"ul",3),c.YNc(1,D,3,4,"li",4),c.TgZ(2,"li",5),c._uU(3),c.qZA(),c.YNc(4,z,3,6,"li",6),c.YNc(5,H,3,4,"li",7),c.qZA()),2&t){var n=c.oxw(),r=c.MAs(1);c.ekj("responsive",n.responsive),c.uIk("aria-label",n.screenReaderPaginationLabel),c.xp6(1),c.Q6J("ngIf",n.directionLinks),c.xp6(2),c.AsE(" ",r.getCurrent()," / ",r.getLastPage()," "),c.xp6(1),c.Q6J("ngForOf",r.pages),c.xp6(1),c.Q6J("ngIf",n.directionLinks)}}var $=function(){function t(){this.change=new c.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}return t.prototype.defaultId=function(){return this.DEFAULT_ID},t.prototype.register=function(t){null==t.id&&(t.id=this.DEFAULT_ID),this.instances[t.id]?this.updateInstance(t)&&this.change.emit(t.id):(this.instances[t.id]=t,this.change.emit(t.id))},t.prototype.updateInstance=function(t){var e=!1;for(var n in this.instances[t.id])t[n]!==this.instances[t.id][n]&&(this.instances[t.id][n]=t[n],e=!0);return e},t.prototype.getCurrentPage=function(t){if(this.instances[t])return this.instances[t].currentPage},t.prototype.setCurrentPage=function(t,e){if(this.instances[t]){var n=this.instances[t];e<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=e&&(this.instances[t].currentPage=e,this.change.emit(t))}},t.prototype.setTotalItems=function(t,e){this.instances[t]&&0<=e&&(this.instances[t].totalItems=e,this.change.emit(t))},t.prototype.setItemsPerPage=function(t,e){this.instances[t]&&(this.instances[t].itemsPerPage=e,this.change.emit(t))},t.prototype.getInstance=function(t){return void 0===t&&(t=this.DEFAULT_ID),this.instances[t]?this.clone(this.instances[t]):{}},t.prototype.clone=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Yz7({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(),G=Number.MAX_SAFE_INTEGER,E=function(){function t(t){this.service=t,this.state={}}return t.prototype.transform=function(t,e){if(!(t instanceof Array)){var n=e.id||this.service.defaultId();return this.state[n]?this.state[n].slice:t}var r,i,o=e.totalItems&&e.totalItems!==t.length,a=this.createInstance(t,e),s=a.id,c=a.itemsPerPage;if(this.service.register(a),!o&&t instanceof Array){if(this.stateIsIdentical(s,t,r=(a.currentPage-1)*(c=+c||G),i=r+c))return this.state[s].slice;var p=t.slice(r,i);return this.saveState(s,t,p,r,i),this.service.change.emit(s),p}return this.saveState(s,t,t,r,i),t},t.prototype.createInstance=function(t,e){return this.checkConfig(e),{id:null!=e.id?e.id:this.service.defaultId(),itemsPerPage:+e.itemsPerPage||0,currentPage:+e.currentPage||1,totalItems:+e.totalItems||t.length}},t.prototype.checkConfig=function(t){var e=["itemsPerPage","currentPage"].filter(function(e){return!(e in t)});if(0<e.length)throw new Error("PaginatePipe: Argument is missing the following required properties: "+e.join(", "))},t.prototype.saveState=function(t,e,n,r,i){this.state[t]={collection:e,size:e.length,slice:n,start:r,end:i}},t.prototype.stateIsIdentical=function(t,e,n,r){var i=this.state[t];return!!i&&!(i.size!==e.length||i.start!==n||i.end!==r)&&i.slice.every(function(t,r){return t===e[n+r]})},t.ctorParameters=function(){return[{type:$}]},t.\u0275fac=function(e){return new(e||t)(c.Y36($,16))},t.\u0275pipe=c.Yjl({name:"paginate",type:t,pure:!1}),t}();function W(t){return!!t&&"false"!==t}var X=function(){function t(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new c.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}return Object.defineProperty(t.prototype,"directionLinks",{get:function(){return this._directionLinks},set:function(t){this._directionLinks=W(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoHide",{get:function(){return this._autoHide},set:function(t){this._autoHide=W(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"responsive",{get:function(){return this._responsive},set:function(t){this._responsive=W(t)},enumerable:!0,configurable:!0}),t.ctorParameters=function(){return[]},t.propDecorators={id:[{type:c.IIB}],maxSize:[{type:c.IIB}],directionLinks:[{type:c.IIB}],autoHide:[{type:c.IIB}],responsive:[{type:c.IIB}],previousLabel:[{type:c.IIB}],nextLabel:[{type:c.IIB}],screenReaderPaginationLabel:[{type:c.IIB}],screenReaderPageLabel:[{type:c.IIB}],screenReaderCurrentLabel:[{type:c.IIB}],pageChange:[{type:c.r_U}]},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["pagination-controls"]],inputs:{maxSize:"maxSize",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",id:"id"},outputs:{pageChange:"pageChange"},decls:3,vars:3,consts:[[3,"id","maxSize","pageChange"],["p","paginationApi"],["class","ngx-pagination","role","navigation",3,"responsive",4,"ngIf"],["role","navigation",1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],[4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],[1,"pagination-next"]],template:function(t,e){if(1&t&&(c.TgZ(0,"pagination-template",0,1),c.NdJ("pageChange",function(t){return e.pageChange.emit(t)}),c.YNc(2,B,6,8,"ul",2),c.qZA()),2&t){var n=c.MAs(1);c.Q6J("id",e.id)("maxSize",e.maxSize),c.xp6(2),c.Q6J("ngIf",!(e.autoHide&&n.pages.length<=1))}},directives:function(){return[V,o.O5,o.sg]},styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],encapsulation:2,changeDetection:0}),t}(),V=function(){function t(t,e){var n=this;this.service=t,this.changeDetectorRef=e,this.maxSize=7,this.pageChange=new c.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(function(t){n.id===t&&(n.updatePageLinks(),n.changeDetectorRef.markForCheck(),n.changeDetectorRef.detectChanges())})}return t.prototype.ngOnInit=function(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()},t.prototype.ngOnChanges=function(t){this.updatePageLinks()},t.prototype.ngOnDestroy=function(){this.changeSub.unsubscribe()},t.prototype.previous=function(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)},t.prototype.next=function(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)},t.prototype.isFirstPage=function(){return 1===this.getCurrent()},t.prototype.isLastPage=function(){return this.getLastPage()===this.getCurrent()},t.prototype.setCurrent=function(t){this.pageChange.emit(t)},t.prototype.getCurrent=function(){return this.service.getCurrentPage(this.id)},t.prototype.getLastPage=function(){var t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)},t.prototype.getTotalItems=function(){return this.service.getInstance(this.id).totalItems},t.prototype.checkValidId=function(){null==this.service.getInstance(this.id).id&&console.warn('PaginationControlsDirective: the specified id "'+this.id+'" does not match any registered PaginationInstance')},t.prototype.updatePageLinks=function(){var t=this,e=this.service.getInstance(this.id),n=this.outOfBoundCorrection(e);n!==e.currentPage?setTimeout(function(){t.setCurrent(n),t.pages=t.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,t.maxSize)}):this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)},t.prototype.outOfBoundCorrection=function(t){var e=Math.ceil(t.totalItems/t.itemsPerPage);return e<t.currentPage&&0<e?e:t.currentPage<1?1:t.currentPage},t.prototype.createPageArray=function(t,e,n,r){r=+r;for(var i=[],o=Math.ceil(n/e),a=Math.ceil(r/2),s=t<=a,c=o-a<t,p=!s&&!c,u=r<o,d=1;d<=o&&d<=r;){var g=this.calculatePageNumber(d,t,r,o);i.push({label:u&&(2===d&&(p||c)||d===r-1&&(p||s))?"...":g,value:g}),d++}return i},t.prototype.calculatePageNumber=function(t,e,n,r){var i=Math.ceil(n/2);return t===n?r:1===t?t:n<r?r-i<e?r-n+t:i<e?e-i+t:t:t},t.ctorParameters=function(){return[{type:$},{type:c.sBO}]},t.propDecorators={id:[{type:c.IIB}],maxSize:[{type:c.IIB}],pageChange:[{type:c.r_U}]},t.\u0275fac=function(e){return new(e||t)(c.Y36($),c.Y36(c.sBO))},t.\u0275dir=c.lG2({type:t,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{maxSize:"maxSize",id:"id"},outputs:{pageChange:"pageChange"},exportAs:["paginationApi"],features:[c.TTD]}),t}(),K=function(){function t(){}return t.ctorParameters=function(){return[]},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({providers:[$],imports:[[o.ez]]}),t}();let tt=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-footer"]],decls:8,vars:0,consts:[[1,"footer"],["fxLayout.xs","column","fxLayout.gt-xs","row wrap",1,"footer-content"]],template:function(t,e){1&t&&(c._UZ(0,"br"),c._UZ(1,"br"),c._UZ(2,"br"),c._UZ(3,"br"),c.TgZ(4,"div",0),c.TgZ(5,"div",1),c.TgZ(6,"p"),c._uU(7,"Copyright \xa92021 All Rights Reserved"),c.qZA(),c.qZA(),c.qZA())},styles:[".footer[_ngcontent-%COMP%]{height:50px;position:relative;z-index:3;width:100%;background-color:#283593;color:#fff}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{padding-top:5px;padding-left:10px}"]}),t})(),et=(()=>{class t{transform(e,n){return n&&e?t.filter(e,n):e}static filter(t,e){const n=e.toLowerCase();function r(t,e){for(let i in t)if(null!==t[i]&&null!=t[i]){if("object"==typeof t[i]&&r(t[i],e))return!0;if(t[i].toString().toLowerCase().includes(n))return!0}return!1}return t.filter(function(t){return r(t,e)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Yjl({name:"filter",type:t,pure:!1}),t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac}),t})(),nt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({}),t})();function rt(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",38),c.NdJ("click",function(){return c.CHM(t),c.oxw().openAddDialog()}),c._uU(1,"Add Product"),c.qZA()}}function it(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"span"),c.TgZ(1,"button",43),c.NdJ("click",function(){c.CHM(t);const e=c.oxw().$implicit;return c.oxw().openUpdateDialog(e)}),c._uU(2,"Update"),c.qZA(),c._uU(3,"\xa0\xa0"),c.qZA()}}function ot(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"span"),c.TgZ(1,"button",43),c.NdJ("click",function(){c.CHM(t);const e=c.oxw().$implicit;return c.oxw().deleteProduct(e.id)}),c._uU(2,"Delete"),c.qZA(),c._uU(3," \xa0\xa0"),c.qZA()}}function at(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",39),c._UZ(1,"img",40),c.TgZ(2,"h3"),c._uU(3),c.TgZ(4,"span",41),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"p"),c._uU(7),c.qZA(),c.YNc(8,it,4,0,"span",42),c.YNc(9,ot,4,0,"span",42),c.TgZ(10,"button",43),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().addToCart(e)}),c._uU(11,"Add To Cart"),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit,n=c.oxw();c.xp6(1),c.Q6J("src",t.image,c.LSH),c.xp6(2),c.hij("",t.name," "),c.xp6(2),c.hij("Price: ",t.price," $"),c.xp6(2),c.hij("Description: ",t.description,""),c.xp6(1),c.Q6J("ngIf",n.currentUser),c.xp6(1),c.Q6J("ngIf",n.currentUser)}}function st(t,e){1&t&&(c.TgZ(0,"div",39),c.TgZ(1,"h1"),c._uU(2,"No Products added"),c.qZA(),c.qZA())}const ct=function(t){return{itemsPerPage:6,currentPage:t}};let pt=(()=>{class t{constructor(t,e,n,r){this.store=t,this.router=e,this.dialog=n,this.cartService=r,this.NoProducts=!1,this.cartProductList=[],this.comp1Out=new c.vpe,this.cartItems=new Array,this.cartProductCount=0}ngOnInit(){if(this.products=this.store.select(U),this.store.dispatch((0,s.QD)()),localStorage.getItem("cartItems")){let t=localStorage.getItem("cartItems");this.cartItems=JSON.parse(t),this.cartProductCount=this.cartItems.length}else console.log("Cart is empty");this.currentUser=localStorage.getItem("user")}deleteProduct(t){confirm("Are you sure you want to delete?")&&(this.store.dispatch((0,s.Ir)({id:t})),this.router.navigate(["/products"]),this.products=this.store.select(U),this.store.dispatch((0,s.QD)())),this.products||(this.NoProducts=!0)}viewProduct(){}openAddDialog(){this.dialog.open(m,{data:{message:"testing"}}).afterClosed.subscribe(t=>{console.log("Dialog closed",t),this.products=this.store.select(U),this.store.dispatch((0,s.QD)())})}openUpdateDialog(t){this.dialog.open(k,{data:t}).afterClosed.subscribe(t=>{console.log("Dialog closed",t)})}addToCart(t){this.cartItems.push(t),console.log(this.cartItems),this.cartProductCount=this.cartItems.length,localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}openCartDialog(){this.dialog.open(M.P,{data:this.cartItems}).afterClosed.subscribe(t=>{console.log("Dialog closed",t),localStorage.getItem("token")&&(this.cartItems=[],this.cartProductCount=this.cartItems.length,localStorage.removeItem("token"))})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(p.yh),c.Y36(i.F0),c.Y36(O.x),c.Y36(N.N))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-products-list"]],outputs:{comp1Out:"comp1Out"},decls:91,vars:15,consts:[[1,"outer",2,"margin","0 10px 0 10px"],["fxLayout","column","fxLayoutAlign","center center",1,"title-section","p-2","mb-2"],[1,"secondary-text-color"],[1,"products-tasks",2,"display","flex","flex-wrap","wrap"],[1,"search-product",2,"margin-top","12px"],["type","text","name","search","autocomplete","off","placeholder","Search Products",1,"form-control",2,"margin","0px !important","border-radius","5px","border","1px solid #000",3,"ngModel","ngModelChange"],[2,"margin-bottom","0px","margin-left","auto"],["style","margin-top: -20px;","class","add-product-button",3,"click",4,"ngIf"],["title","Cart",3,"click"],[1,"cart-count"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","version","1.1","id","Capa_1","x","0px","y","0px","viewBox","0 0 19.25 19.25",0,"xml","space","preserve","width","15px","height","20px",2,"enable-background","new 0 0 19.25 19.25"],["id","Layer_1_107_"],["d","M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461     C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124     c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112     c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075     c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7     C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2     h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z      M13.25,9.625v-2h3.418l-0.285,2H13.25z","fill","#FFFFFF"],["cx","6.75","cy","17.125","r","1.5","fill","#FFFFFF"],["cx","15.75","cy","17.125","r","1.5","fill","#FFFFFF"],[1,"list-col1"],["id","products",1,"mt-2","pt-3"],[1,"container"],["class","card",4,"ngFor","ngForOf"],["class","card",4,"ngIf"],[1,"list-col2"],[2,"width","30%"],[1,"pagination"],[3,"pageChange"],[1,"footer-top"],[1,"footer-box"],[1,"fa","fa-credit-card","icon"],[1,"fa","fa-undo","icon"],[1,"fa","fa-times","icon"],[1,"fa","fa-truck","icon"],[1,"fa","fa-facebook-square","icon"],[1,"fa","fa-twitter","icon"],[1,"fa","fa-instagram","icon"],[1,"fa","fa-linkedin","icon"],[1,"fa","fa-phone","icon"],[1,"fa","fa-whatsapp","icon"],[1,"fa","fa-envelope","icon"],[1,"fa","fa-map-marker","icon"],[1,"add-product-button",2,"margin-top","-20px",3,"click"],[1,"card"],["alt","image",1,"card-image",3,"src"],[2,"float","right"],[4,"ngIf"],[3,"click"]],template:function(t,e){1&t&&(c._UZ(0,"br"),c._UZ(1,"br"),c._UZ(2,"br"),c.TgZ(3,"div",0),c.TgZ(4,"div",1),c.TgZ(5,"h1"),c._uU(6,"PRODUCTS LIST"),c.qZA(),c.TgZ(7,"p",2),c._uU(8,"Explore products of your choice"),c.qZA(),c.qZA(),c.TgZ(9,"div",3),c.TgZ(10,"div",4),c.TgZ(11,"input",5),c.NdJ("ngModelChange",function(t){return e.searchText=t}),c.qZA(),c.qZA(),c.TgZ(12,"div",6),c.YNc(13,rt,2,0,"button",7),c._uU(14," \xa0\xa0\xa0 "),c.TgZ(15,"button",8),c.NdJ("click",function(){return e.openCartDialog()}),c.TgZ(16,"span",9),c.O4$(),c.TgZ(17,"svg",10),c.TgZ(18,"g"),c.TgZ(19,"g",11),c.TgZ(20,"g"),c._UZ(21,"path",12),c._UZ(22,"circle",13),c._UZ(23,"circle",14),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.kcU(),c.TgZ(24,"em"),c._uU(25),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(26,"div",15),c.TgZ(27,"div",16),c.TgZ(28,"div",17),c.YNc(29,at,12,6,"div",18),c.ALo(30,"paginate"),c.ALo(31,"filter"),c.ALo(32,"async"),c.qZA(),c.YNc(33,st,3,0,"div",19),c.qZA(),c.qZA(),c.qZA(),c.TgZ(34,"div",20),c._UZ(35,"div",21),c._UZ(36,"router-outlet"),c._UZ(37,"div",21),c.qZA(),c._UZ(38,"br"),c.TgZ(39,"div",22),c.TgZ(40,"pagination-controls",23),c.NdJ("pageChange",function(t){return e.p=t}),c.qZA(),c.qZA(),c._UZ(41,"br"),c._UZ(42,"br"),c._UZ(43,"br"),c.TgZ(44,"div",24),c.TgZ(45,"div",25),c.TgZ(46,"h3"),c._uU(47,"Why Choose Us"),c.qZA(),c.TgZ(48,"p"),c._UZ(49,"i",26),c._uU(50,"Secure Payments"),c.qZA(),c.TgZ(51,"p"),c._UZ(52,"i",27),c._uU(53,"Easy Returns"),c.qZA(),c.TgZ(54,"p"),c._UZ(55,"i",28),c._uU(56,"Free Cancellation"),c.qZA(),c.TgZ(57,"p"),c._UZ(58,"i",29),c._uU(59,"Free Shipping"),c.qZA(),c.qZA(),c.TgZ(60,"div",25),c.TgZ(61,"h3"),c._uU(62,"Social"),c.qZA(),c.TgZ(63,"p"),c._UZ(64,"i",30),c._uU(65,"Facebook"),c.qZA(),c.TgZ(66,"p"),c._UZ(67,"i",31),c._uU(68,"Twitter"),c.qZA(),c.TgZ(69,"p"),c._UZ(70,"i",32),c._uU(71,"Instagram"),c.qZA(),c.TgZ(72,"p"),c._UZ(73,"i",33),c._uU(74,"Linkedin"),c.qZA(),c.qZA(),c.TgZ(75,"div",25),c.TgZ(76,"h3"),c._uU(77,"Contact"),c.qZA(),c.TgZ(78,"p"),c._UZ(79,"i",34),c._uU(80,"Customer Care: 1234567890"),c.qZA(),c.TgZ(81,"p"),c._UZ(82,"i",35),c._uU(83,"Whatsapp: 1234567890"),c.qZA(),c.TgZ(84,"p"),c._UZ(85,"i",36),c._uU(86,"Email: order@products.com"),c.qZA(),c.TgZ(87,"p"),c._UZ(88,"i",37),c._uU(89,"Address: Pune, Maharashtra, India"),c.qZA(),c.qZA(),c.qZA(),c._UZ(90,"app-footer")),2&t&&(c.xp6(11),c.Q6J("ngModel",e.searchText),c.xp6(2),c.Q6J("ngIf",e.currentUser),c.xp6(12),c.Oqu(e.cartProductCount),c.xp6(4),c.Q6J("ngForOf",c.xi3(30,5,c.xi3(31,8,c.lcZ(32,11,e.products),e.searchText),c.VKq(13,ct,e.p))),c.xp6(4),c.Q6J("ngIf",e.NoProducts))},directives:[a.Fj,a.JJ,a.On,o.O5,o.sg,i.lC,X,tt],pipes:[E,et,o.Ov],styles:[".secondary-text-color[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.products-tasks[_ngcontent-%COMP%]{margin-bottom:-20px}#products[_ngcontent-%COMP%]{display:grid}#products[_ngcontent-%COMP%]   .search-product[_ngcontent-%COMP%]{margin-left:auto!important;margin-top:10px!important}#products[_ngcontent-%COMP%]   .search-product[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border:1px solid #000;width:40%;font-size:16px;margin-bottom:0!important;margin-top:0!important}.spacer[_ngcontent-%COMP%]{width:60%}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:300px;grid-gap:30px;grid-row-gap:80px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{transition:all .5s ease-out;border-right:1px solid #283593;border-top:1px solid #283593;border-color:#283593;border-style:solid;border-width:2px 2px 1px 1px;border-radius:10px;padding:10px;grid-row-gap:20px;row-gap:20px;margin-bottom:40px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]{height:200px;width:100%}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;background-color:#283593;color:#fff;border-radius:20px;font-size:16px;padding:5px 7px;border:0}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{margin-top:-20px}.pagination[_ngcontent-%COMP%]{float:right}.footer-top[_ngcontent-%COMP%]{background-color:#f3f3f3;width:100%;display:grid;grid-template-columns:repeat(3,1fr);margin-bottom:-70px}.footer-top[_ngcontent-%COMP%]   .footer-box[_ngcontent-%COMP%]{padding-left:20px}.footer-top[_ngcontent-%COMP%]   .footer-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{padding:5px;border:1px solid #000;border-radius:10px;margin-right:5px}@media only screen and (max-width: 800px) and (min-width: 550px){.container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.products-tasks[_ngcontent-%COMP%]{margin-bottom:0}}@media only screen and (max-width: 550px){.container[_ngcontent-%COMP%]{grid-template-columns:2fr;margin-top:60px!important}.form-control[_ngcontent-%COMP%]{width:100%;margin-top:0!important;margin-bottom:40px!important}.products-tasks[_ngcontent-%COMP%]{margin-bottom:0}}"]}),t})();var ut=n(9880);const dt=[{path:"",component:pt,children:[{path:"add",component:m},{path:"edit/:id",component:k}]}];let gt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({providers:[b,O.x,N.N],imports:[[o.ez,a.u5,ut.O,a.UX,i.Bz.forChild(dt),r.sQ.forFeature([y]),L.S,K,nt]]}),t})()}}]);