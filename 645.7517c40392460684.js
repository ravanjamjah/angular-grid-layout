"use strict";(self.webpackChunkdemo_app=self.webpackChunkdemo_app||[]).push([[645],{6645:(w,l,o)=>{o.r(l),o.d(l,{KtdRowHeightFitComponent:()=>v});var a=o(6895),g=o(1647),_=o(6787),h=o(3753),c=o(13),m=o(4583),p=o(8729),u=o(9309),t=o(4650);const C=["gridContainer"];function f(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"div",8),t.NdJ("mousedown",function(d){t.CHM(i);const s=t.oxw(2);return t.KtG(s.stopEventPropagation(d))})("click",function(){t.CHM(i);const d=t.oxw().$implicit,s=t.oxw();return t.KtG(s.removeItem(d.id))}),t.qZA()}}function y(n,r){if(1&n&&(t.TgZ(0,"ktd-grid-item",5)(1,"div",6),t._uU(2),t.qZA(),t.YNc(3,f,1,0,"div",7),t.qZA()),2&n){const i=r.$implicit,e=t.oxw();t.Q6J("id",i.id)("draggable",!e.disableDrag)("resizable",!e.disableResize),t.xp6(2),t.Oqu(i.id),t.xp6(1),t.Q6J("ngIf",!e.disableRemove)}}let v=(()=>{class n{constructor(){this.trackById=g.Yy,this.cols=12,this.gridHeight=500,this.compactType="vertical",this.layout=[{id:"0",x:5,y:0,w:2,h:3},{id:"1",x:2,y:2,w:1,h:2},{id:"2",x:3,y:7,w:1,h:2},{id:"3",x:2,y:0,w:3,h:2},{id:"4",x:5,y:3,w:2,h:3},{id:"5",x:0,y:4,w:1,h:3},{id:"6",x:9,y:0,w:3,h:4},{id:"7",x:9,y:4,w:2,h:2},{id:"8",x:3,y:2,w:2,h:5},{id:"9",x:7,y:0,w:1,h:3},{id:"10",x:2,y:4,w:1,h:4},{id:"11",x:0,y:0,w:2,h:4},{id:"12",x:7,y:3,w:2,h:2},{id:"13",x:8,y:5,w:1,h:4},{id:"14",x:9,y:6,w:3,h:3}],this.dragStartThreshold=0,this.gap=0,this.disableDrag=!1,this.disableResize=!1,this.disableRemove=!1,this.preventCollision=!1}ngOnInit(){this.gridHeight=this.gridContainerElementRef.nativeElement.getBoundingClientRect().height,this.resizeSubscription=(0,_.T)((0,h.R)(window,"resize"),(0,h.R)(window,"orientationchange")).pipe((0,c.b)(50)).subscribe(()=>{const i=this.gridContainerElementRef.nativeElement.getBoundingClientRect().height;this.gridHeight!==i?this.gridHeight=this.gridContainerElementRef.nativeElement.getBoundingClientRect().height:this.grid.resize()})}onLayoutUpdated(i){console.log("on layout updated",i),this.layout=i}stopEventPropagation(i){i.preventDefault(),i.stopPropagation()}removeItem(i){this.layout=(0,m.I)(this.layout,e=>e.id===i)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ktd-row-height-fit"]],viewQuery:function(i,e){if(1&i&&(t.Gf(g.Vh,7),t.Gf(C,7)),2&i){let d;t.iGM(d=t.CRH())&&(e.grid=d.first),t.iGM(d=t.CRH())&&(e.gridContainerElementRef=d.first)}},standalone:!0,features:[t.jDz],decls:6,vars:9,consts:[[1,"grid-container"],["gridContainer",""],[3,"cols","height","rowHeight","layout","compactType","preventCollision","gap","layoutUpdated"],[3,"id","draggable","resizable",4,"ngFor","ngForOf","ngForTrackBy"],[1,"footer-container"],[3,"id","draggable","resizable"],[1,"grid-item-content"],["class","grid-item-remove-handle",3,"mousedown","click",4,"ngIf"],[1,"grid-item-remove-handle",3,"mousedown","click"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0,1)(2,"ktd-grid",2),t.NdJ("layoutUpdated",function(s){return e.onLayoutUpdated(s)}),t.YNc(3,y,4,5,"ktd-grid-item",3),t.qZA()(),t.TgZ(4,"div",4),t._UZ(5,"ktd-footer"),t.qZA()),2&i&&(t.xp6(2),t.Q6J("cols",e.cols)("height",e.gridHeight)("rowHeight","fit")("layout",e.layout)("compactType",e.compactType)("preventCollision",e.preventCollision)("gap",e.gap),t.xp6(1),t.Q6J("ngForOf",e.layout)("ngForTrackBy",e.trackById))},dependencies:[a.ez,a.sg,a.O5,g.SQ,g.Vh,g.Mc,p.Bz,u.f],styles:['[_nghost-%COMP%]{width:100%;height:calc(100% - 65px);padding:12px;box-sizing:border-box;display:flex;flex-direction:column}[_nghost-%COMP%]   .grid-container[_ngcontent-%COMP%]{flex:1;min-height:0;box-sizing:border-box;border:1px solid var(--ktd-border-color);background-color:var(--ktd-background-color);border-radius:2px}[_nghost-%COMP%]   ktd-grid-item[_ngcontent-%COMP%]{color:#121212}[_nghost-%COMP%]   ktd-grid[_ngcontent-%COMP%]{transition:height .5s ease}[_nghost-%COMP%]   .grid-item-content[_ngcontent-%COMP%]{box-sizing:border-box;background:#ccc;border:1px solid;width:100%;height:100%;-webkit-user-select:none;user-select:none;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .grid-item-remove-handle[_ngcontent-%COMP%]{position:absolute;cursor:pointer;display:flex;justify-content:center;width:20px;height:20px;top:0;right:0}[_nghost-%COMP%]   .grid-item-remove-handle[_ngcontent-%COMP%]:after{content:"x";color:#121212;font-size:16px;font-weight:300;font-family:Arial,sans-serif}[_nghost-%COMP%]   ktd-grid-item[_ngcontent-%COMP%]{cursor:grab}[_nghost-%COMP%]   ktd-grid-item.ktd-grid-item-dragging[_ngcontent-%COMP%]{cursor:grabbing}']}),n})()}}]);