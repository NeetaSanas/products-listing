(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[806],{5806:(t,r,o)=>{"use strict";o.r(r),o.d(r,{ProductsModule:()=>Q});var e=o(5887),i=o(3735),c=o(8583),n=o(665),s=o(2700),d=o(7716),u=o(4220),p=o(2534),a=o(8262);function l(t,r){1&t&&(d.TgZ(0,"div"),d.TgZ(1,"p"),d._uU(2,"Required"),d.qZA(),d.qZA())}function g(t,r){1&t&&(d.TgZ(0,"div"),d.TgZ(1,"p"),d._uU(2,"Required"),d.qZA(),d.qZA())}function m(t,r){1&t&&(d.TgZ(0,"div"),d.TgZ(1,"p"),d._uU(2,"Required"),d.qZA(),d.qZA())}function h(t,r){1&t&&(d.TgZ(0,"div"),d.TgZ(1,"p"),d._uU(2,"Required"),d.qZA(),d.qZA())}let Z=(()=>{class t{constructor(t,r){this.store=t,this.dialogRef=r}ngOnInit(){this.productForm=new n.cw({name:new n.NI(null,n.kI.required),description:new n.NI(null,n.kI.required),price:new n.NI(null,n.kI.required),image:new n.NI(null,n.kI.required)})}onAddProduct(){this.productForm.valid&&(this.store.dispatch((0,s.gK)({product:{id:"",name:this.productForm.value.name,description:this.productForm.value.description,price:this.productForm.value.price,image:this.productForm.value.image}})),this.dialogRef.close())}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(u.yh),d.Y36(p.z))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-add-product"]],decls:36,vars:11,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"h-100","container"],["fxFlex","90","fxFlex.gt-sm","30","fxFlex.sm","60",2,"background-color","#f3f3f3",3,"formGroup","ngSubmit"],[3,"icon","title","hasBgImage"],[1,"card-inner",2,"margin-top","-20px"],[1,"form-control"],["type","text","formControlName","name"],[4,"ngIf"],["type","text","formControlName","price"],["type","text","formControlName","description"],["type","text","formControlName","image"],["fxLayout","row","fxLayoutAlign","space-between center",1,"submit-button-container"],["type","submit",1,"w-30","submit-button",3,"disabled"],[1,"w-30","cancel-button",3,"click"]],template:function(t,r){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"form",1),d.NdJ("ngSubmit",function(){return r.onAddProduct()}),d._UZ(2,"app-header",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"label"),d._uU(6,"Name"),d.qZA(),d._UZ(7,"input",5),d.YNc(8,l,3,0,"div",6),d.qZA(),d._UZ(9,"br"),d.TgZ(10,"div",4),d.TgZ(11,"label"),d._uU(12,"Price"),d.qZA(),d._UZ(13,"input",7),d.YNc(14,g,3,0,"div",6),d.qZA(),d._UZ(15,"br"),d.TgZ(16,"div",4),d.TgZ(17,"label"),d._uU(18,"Description"),d.qZA(),d._UZ(19,"input",8),d.YNc(20,m,3,0,"div",6),d.qZA(),d._UZ(21,"br"),d.TgZ(22,"div",4),d.TgZ(23,"label"),d._uU(24,"Image Url"),d.qZA(),d._UZ(25,"input",9),d.YNc(26,h,3,0,"div",6),d.qZA(),d._UZ(27,"br"),d._UZ(28,"br"),d.TgZ(29,"div",10),d._UZ(30,"br"),d.TgZ(31,"button",11),d._uU(32,"Add"),d.qZA(),d._uU(33," \xa0\xa0\xa0\xa0 "),d.TgZ(34,"button",12),d.NdJ("click",function(){return r.cancel()}),d._uU(35,"Cancel"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(1),d.Q6J("formGroup",r.productForm),d.xp6(1),d.Tol("card-spacing"),d.Q6J("icon","exit_to_app")("title","ADD PRODUCT")("hasBgImage",!0),d.xp6(6),d.Q6J("ngIf",(null==r.productForm.controls.name.errors?null:r.productForm.controls.name.errors.required)&&r.productForm.controls.name.touched),d.xp6(6),d.Q6J("ngIf",(null==r.productForm.controls.price.errors?null:r.productForm.controls.price.errors.required)&&r.productForm.controls.price.touched),d.xp6(6),d.Q6J("ngIf",(null==r.productForm.controls.description.errors?null:r.productForm.controls.description.errors.required)&&r.productForm.controls.description.touched),d.xp6(6),d.Q6J("ngIf",(null==r.productForm.controls.image.errors?null:r.productForm.controls.image.errors.required)&&r.productForm.controls.image.touched),d.xp6(5),d.Q6J("disabled",!r.productForm.valid))},directives:[n._Y,n.JL,n.sg,a.G,n.Fj,n.JJ,n.u,c.O5],styles:[".secondary-text-color[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}p[_ngcontent-%COMP%]{font-size:12px;color:red;justify-content:left}"]}),t})();var f=o(8002),_=o(1841);let b=(()=>{class t{constructor(t,r){this.http=t,this.store=r}getProducts(){return this.http.get("http://localhost:3000/products").pipe((0,f.U)(t=>{const r=[];for(let o in t){let e=t[o].id;r.push(Object.assign(Object.assign({},t[o]),{id:e}))}return r}))}addProduct(t){return this.http.post("http://localhost:3000/products",t)}updateProduct(t){return this.http.patch(`http://localhost:3000/products/${t.id}`,{[t.id]:{id:t.id,name:t.name,description:t.description,price:t.price,image:t.image}})}deleteProduct(t){return this.http.delete(`http://localhost:3000/products/${t}`)}}return t.\u0275fac=function(r){return new(r||t)(d.LFG(_.eN),d.LFG(u.yh))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=o(9773),v=o(3190),q=o(3342),U=o(9344);let A=(()=>{class t{constructor(t,r,o,i,c){this.actions$=t,this.productsService=r,this.store=o,this.router=i,this.toastr=c,this.loadProducts$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(s.QD),(0,x.zg)(t=>this.productsService.getProducts().pipe((0,f.U)(t=>(0,s.UE)({products:t})))))),this.addProduct$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(s.gK),(0,x.zg)(t=>this.productsService.addProduct(t.product).pipe((0,f.U)(r=>{const o=Object.assign(Object.assign({},t.product),{id:r.name});return(0,s.NV)({product:o})}))))),this.updateProduct$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(s.nM),(0,v.w)(t=>this.productsService.updateProduct(t.product).pipe((0,f.U)(r=>(Object.assign({},t.product),(0,s.j7)({product:t.product}))))))),this.deleteProduct$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(s.Ir),(0,v.w)(t=>this.productsService.deleteProduct(t.id).pipe((0,f.U)(r=>(0,s.Bl)({id:t.id})))))),this.productRedirect$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(s.Bl),(0,q.b)(t=>{this.router.navigate(["/products"]),this.toastr.success("Success")})),{dispatch:!1}),this.productRedirect1$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(s.NV),(0,q.b)(t=>{this.toastr.success("Success"),this.router.navigate(["/products"])})),{dispatch:!1}),this.productRedirect2$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(s.j7),(0,q.b)(t=>{this.router.navigate(["/products"]),this.toastr.success("Success")})),{dispatch:!1})}}return t.\u0275fac=function(r){return new(r||t)(d.LFG(e.eX),d.LFG(b),d.LFG(u.yh),d.LFG(i.F0),d.LFG(U._W))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac}),t})();const F=(0,u.ZF)("products"),T=(0,u.P1)(F,t=>t.products),P=(0,u.P1)(F,(t,r)=>t.products.find(t=>t.id===r.id));var y=o(7031);function w(t,r){1&t&&(d.TgZ(0,"div"),d._uU(1,"Required"),d.qZA())}function C(t,r){1&t&&(d.TgZ(0,"div"),d._uU(1,"Required"),d.qZA())}function O(t,r){1&t&&(d.TgZ(0,"div"),d._uU(1,"Required"),d.qZA())}let N=(()=>{class t{constructor(t,r,o,e){this.route=t,this.store=r,this.dialogRef=o,this.config=e}ngOnInit(){this.productData=this.config.data,this.route.paramMap.subscribe(t=>{const r=t.get("id");this.store.select(P,{id:r}).subscribe(t=>{this.product=t,this.createForm()})})}createForm(){this.productForm=new n.cw({name:new n.NI(this.productData.name,n.kI.required),description:new n.NI(this.productData.description,n.kI.required),price:new n.NI(this.productData.price,n.kI.required),image:new n.NI(this.productData.image,n.kI.required)})}ngOnDestroy(){this.productSubscription&&this.productSubscription.unsubscribe()}onUpdateProduct(){this.productForm.valid&&(this.store.dispatch((0,s.nM)({product:{id:this.productData.id,name:this.productForm.value.name,description:this.productForm.value.description,price:this.productForm.value.price,image:this.productForm.value.image}})),this.dialogRef.close())}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(i.gz),d.Y36(u.yh),d.Y36(p.z),d.Y36(y.i))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-edit-product"]],decls:30,vars:10,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"h-100","container"],["fxFlex","90","fxFlex.gt-sm","30","fxFlex.sm","60",2,"background-color","#f3f3f3",3,"formGroup","ngSubmit"],[3,"icon","title","hasBgImage"],[1,"card-inner",2,"margin-top","-20px"],[1,"form-control"],["type","text","formControlName","name"],[4,"ngIf"],["type","text","formControlName","price"],["type","text","formControlName","description"],["fxLayout","row","fxLayoutAlign","space-between center",1,"submit-button-container"],["type","submit",1,"w-30","submit-button",3,"disabled"],[1,"w-30","cancel-button",3,"click"]],template:function(t,r){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"form",1),d.NdJ("ngSubmit",function(){return r.onUpdateProduct()}),d._UZ(2,"app-header",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"label"),d._uU(6,"Name"),d.qZA(),d._UZ(7,"input",5),d.YNc(8,w,2,0,"div",6),d.qZA(),d._UZ(9,"br"),d.TgZ(10,"div",4),d.TgZ(11,"label"),d._uU(12,"Price"),d.qZA(),d._UZ(13,"input",7),d.YNc(14,C,2,0,"div",6),d.qZA(),d._UZ(15,"br"),d.TgZ(16,"div",4),d.TgZ(17,"label"),d._uU(18,"Description"),d.qZA(),d._UZ(19,"input",8),d.YNc(20,O,2,0,"div",6),d.qZA(),d._UZ(21,"br"),d._UZ(22,"br"),d.TgZ(23,"div",9),d._UZ(24,"br"),d.TgZ(25,"button",10),d._uU(26,"Update"),d.qZA(),d._uU(27," \xa0\xa0\xa0\xa0 "),d.TgZ(28,"button",11),d.NdJ("click",function(){return r.cancel()}),d._uU(29,"Cancel"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(1),d.Q6J("formGroup",r.productForm),d.xp6(1),d.Tol("card-spacing"),d.Q6J("icon","exit_to_app")("title","UPDATE PRODUCT")("hasBgImage",!0),d.xp6(6),d.Q6J("ngIf",(null==r.productForm.controls.name.errors?null:r.productForm.controls.name.errors.required)&&r.productForm.controls.name.touched),d.xp6(6),d.Q6J("ngIf",(null==r.productForm.controls.price.errors?null:r.productForm.controls.price.errors.required)&&r.productForm.controls.price.touched),d.xp6(6),d.Q6J("ngIf",(null==r.productForm.controls.description.errors?null:r.productForm.controls.description.errors.required)&&r.productForm.controls.description.touched),d.xp6(5),d.Q6J("disabled",!r.productForm.valid))},directives:[n._Y,n.JL,n.sg,a.G,n.Fj,n.JJ,n.u,c.O5],styles:[""]}),t})();var I=o(3547),M=o(9299);function J(t,r){if(1&t){const t=d.EpF();d.TgZ(0,"div",12),d._UZ(1,"img",13),d.TgZ(2,"h3"),d._uU(3),d.qZA(),d.TgZ(4,"p"),d._uU(5),d.qZA(),d.TgZ(6,"button",6),d.NdJ("click",function(){const r=d.CHM(t).$implicit;return d.oxw().openUpdateDialog(r)}),d._uU(7,"Update"),d.qZA(),d._uU(8,"\xa0\xa0 "),d.TgZ(9,"button",6),d.NdJ("click",function(){const r=d.CHM(t).$implicit;return d.oxw().deleteProduct(r.id)}),d._uU(10,"Delete"),d.qZA(),d.qZA()}if(2&t){const t=r.$implicit;d.xp6(1),d.Q6J("src",t.image,d.LSH),d.xp6(2),d.AsE("Name: ",t.name," \xa0\xa0\xa0\xa0",t.price," "),d.xp6(2),d.hij("Description: ",t.description,"")}}function D(t,r){1&t&&(d.TgZ(0,"div",12),d.TgZ(1,"h1"),d._uU(2,"No Products added"),d.qZA(),d.qZA())}let k=(()=>{class t{constructor(t,r,o){this.store=t,this.router=r,this.dialog=o,this.NoProducts=!1}ngOnInit(){this.products=this.store.select(T),this.store.dispatch((0,s.QD)())}deleteProduct(t){confirm("Are you sure you want to delete?")&&(this.store.dispatch((0,s.Ir)({id:t})),this.router.navigate(["/products"]),this.products=this.store.select(T),this.store.dispatch((0,s.QD)())),this.products||(this.NoProducts=!0)}viewProduct(){}openAddDialog(){this.dialog.open(Z,{data:{message:"testing"}}).afterClosed.subscribe(t=>{console.log("Dialog closed",t),this.products=this.store.select(T),this.store.dispatch((0,s.QD)())})}openUpdateDialog(t){this.dialog.open(N,{data:t}).afterClosed.subscribe(t=>{console.log("Dialog closed",t)})}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(u.yh),d.Y36(i.F0),d.Y36(M.x))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-products-list"]],decls:23,vars:4,consts:[[1,"outer"],[1,"list-col1"],["id","products",1,"mt-2","pt-3"],["fxLayout","column","fxLayoutAlign","center center",1,"title-section","p-2","mb-2"],[1,"secondary-text-color"],[2,"margin-bottom","10px"],[3,"click"],[1,"container"],["class","card",4,"ngFor","ngForOf"],["class","card",4,"ngIf"],[1,"list-col2"],[2,"width","30%"],[1,"card"],["alt","image",1,"card-image",3,"src"]],template:function(t,r){1&t&&(d._UZ(0,"br"),d._UZ(1,"br"),d.TgZ(2,"div",0),d.TgZ(3,"div",1),d.TgZ(4,"div",2),d.TgZ(5,"div",3),d.TgZ(6,"h1"),d._uU(7,"PRODUCTS LIST"),d.qZA(),d.TgZ(8,"p",4),d._uU(9,"Explore products of your choice..."),d.qZA(),d.qZA(),d.TgZ(10,"div",5),d.TgZ(11,"button",6),d.NdJ("click",function(){return r.openAddDialog()}),d._uU(12,"Add Product"),d.qZA(),d.qZA(),d._UZ(13,"br"),d._UZ(14,"br"),d.TgZ(15,"div",7),d.YNc(16,J,11,4,"div",8),d.ALo(17,"async"),d.qZA(),d.YNc(18,D,3,0,"div",9),d.qZA(),d.qZA(),d.qZA(),d.TgZ(19,"div",10),d._UZ(20,"div",11),d._UZ(21,"router-outlet"),d._UZ(22,"div",11),d.qZA()),2&t&&(d.xp6(16),d.Q6J("ngForOf",d.lcZ(17,2,r.products)),d.xp6(2),d.Q6J("ngIf",r.NoProducts))},directives:[c.sg,c.O5,i.lC],pipes:[c.Ov],styles:[".secondary-text-color[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#products[_ngcontent-%COMP%]{display:grid}#products[_ngcontent-%COMP%]   .search-product[_ngcontent-%COMP%]{float:right}#products[_ngcontent-%COMP%]   .search-product[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #000;width:32%;font-size:16px;margin-bottom:0!important}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:300px;grid-gap:30px;grid-row-gap:80px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{transition:all .5s ease-out;border:1px solid #000;border-radius:5px;padding:10px;grid-row-gap:20px;row-gap:20px;margin-bottom:40px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]{height:200px;width:100%}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;background-color:#1976d2;color:#fff;border-radius:20px;font-size:16px;padding:5px 7px;border:0}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{margin-top:-20px}.pagination[_ngcontent-%COMP%]{float:right}@media only screen and (max-width: 800px) and (min-width: 550px){.container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media only screen and (max-width: 550px){.container[_ngcontent-%COMP%]{grid-template-columns:2fr}.form-control[_ngcontent-%COMP%]{margin-bottom:20px!important}}"]}),t})();var L=o(9880);const Y=[{path:"",component:k,children:[{path:"add",component:Z},{path:"edit/:id",component:N}]}];let Q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({providers:[b,M.x],imports:[[c.ez,L.O,n.UX,i.Bz.forChild(Y),e.sQ.forFeature([A]),I.S]]}),t})()}}]);