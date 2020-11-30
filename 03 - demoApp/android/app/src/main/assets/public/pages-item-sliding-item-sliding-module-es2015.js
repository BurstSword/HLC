(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-sliding-item-sliding-module"],{

/***/ "3tVq":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-sliding/item-sliding.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera [titulo]=\"'Item Sliding'\"></app-cabecera>\n\n<ion-content>\n<ion-list #miLista>\n  <ion-item-sliding *ngFor=\"let item of lista;let i = index\">\n    <ion-item-options side=\"start\">\n      <ion-item-option (click)=\"favorite(i)\"><ion-icon slot=\"start\" name=\"archive-outline\"></ion-icon></ion-item-option>\n      <ion-item-option (click)=\"share(i)\" color=\"danger\"><ion-icon slot=\"start\" name=\"bluetooth-outline\"></ion-icon></ion-item-option>\n    </ion-item-options>\n    <ion-item>\n      <ion-label>{{item}}</ion-label>\n    </ion-item>\n  </ion-item-sliding>\n\n  \n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "9wXd":
/*!*******************************************************************!*\
  !*** ./src/app/pages/item-sliding/item-sliding-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ItemSlidingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSlidingPageRoutingModule", function() { return ItemSlidingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _item_sliding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-sliding.page */ "PPmo");




const routes = [
    {
        path: '',
        component: _item_sliding_page__WEBPACK_IMPORTED_MODULE_3__["ItemSlidingPage"]
    }
];
let ItemSlidingPageRoutingModule = class ItemSlidingPageRoutingModule {
};
ItemSlidingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemSlidingPageRoutingModule);



/***/ }),

/***/ "PPmo":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-sliding/item-sliding.page.ts ***!
  \*********************************************************/
/*! exports provided: ItemSlidingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSlidingPage", function() { return ItemSlidingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_sliding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-sliding.page.html */ "3tVq");
/* harmony import */ var _item_sliding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-sliding.page.scss */ "foQB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ItemSlidingPage = class ItemSlidingPage {
    constructor() {
        this.lista = ["David", "Rafael", "Raúl", "Lucía"];
    }
    ngOnInit() {
    }
    favorite(id) {
        this.miLista.closeSlidingItems();
    }
    share(id) {
        this.miLista.closeSlidingItems();
    }
};
ItemSlidingPage.ctorParameters = () => [];
ItemSlidingPage.propDecorators = {
    miLista: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['miLista',] }]
};
ItemSlidingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-sliding',
        template: _raw_loader_item_sliding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_sliding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemSlidingPage);



/***/ }),

/***/ "Qoju":
/*!***********************************************************!*\
  !*** ./src/app/pages/item-sliding/item-sliding.module.ts ***!
  \***********************************************************/
/*! exports provided: ItemSlidingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSlidingPageModule", function() { return ItemSlidingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_sliding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-sliding-routing.module */ "9wXd");
/* harmony import */ var _item_sliding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-sliding.page */ "PPmo");
/* harmony import */ var _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/componentes.module */ "lSLK");








let ItemSlidingPageModule = class ItemSlidingPageModule {
};
ItemSlidingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_sliding_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemSlidingPageRoutingModule"],
            _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]
        ],
        declarations: [_item_sliding_page__WEBPACK_IMPORTED_MODULE_6__["ItemSlidingPage"]]
    })
], ItemSlidingPageModule);



/***/ }),

/***/ "foQB":
/*!***********************************************************!*\
  !*** ./src/app/pages/item-sliding/item-sliding.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tc2xpZGluZy9pdGVtLXNsaWRpbmcucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-item-sliding-item-sliding-module-es2015.js.map