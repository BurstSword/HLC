(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-botones-botones-module"],{

/***/ "C0m+":
/*!***********************************************!*\
  !*** ./src/app/pages/botones/botones.page.ts ***!
  \***********************************************/
/*! exports provided: BotonesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPage", function() { return BotonesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_botones_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./botones.page.html */ "NvfP");
/* harmony import */ var _botones_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./botones.page.scss */ "bBWK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BotonesPage = class BotonesPage {
    constructor() { }
    ngOnInit() {
    }
};
BotonesPage.ctorParameters = () => [];
BotonesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-botones',
        template: _raw_loader_botones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_botones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BotonesPage);



/***/ }),

/***/ "Ex7x":
/*!*********************************************************!*\
  !*** ./src/app/pages/botones/botones-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BotonesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPageRoutingModule", function() { return BotonesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _botones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./botones.page */ "C0m+");




const routes = [
    {
        path: '',
        component: _botones_page__WEBPACK_IMPORTED_MODULE_3__["BotonesPage"]
    }
];
let BotonesPageRoutingModule = class BotonesPageRoutingModule {
};
BotonesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BotonesPageRoutingModule);



/***/ }),

/***/ "NvfP":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botones/botones.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera [titulo]=\"'Botones'\"></app-cabecera>\n\n<ion-content>\n  <ion-chip>\n    <ion-label color=\"secondary\">Secundaria</ion-label>\n  </ion-chip>\n  \n  <ion-chip color=\"secondary\">\n    <ion-label color=\"dark\">Secundaria oscura</ion-label>\n  </ion-chip>\n  \n  <ion-chip>\n    <ion-icon name=\"pin\"></ion-icon>\n    <ion-label>Default</ion-label>\n  </ion-chip>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge>\n    <ion-fab-button color=\"rojizo\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button>Holi</ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button>\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button>\n        <ion-icon name=\"logo-chrome\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button>\n        <ion-icon name=\"logo-react\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  \n</ion-content>\n");

/***/ }),

/***/ "bBWK":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvdG9uZXMvYm90b25lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "tzZP":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.module.ts ***!
  \*************************************************/
/*! exports provided: BotonesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPageModule", function() { return BotonesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _botones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./botones-routing.module */ "Ex7x");
/* harmony import */ var _botones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./botones.page */ "C0m+");
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/componentes/componentes.module */ "lSLK");








let BotonesPageModule = class BotonesPageModule {
};
BotonesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _botones_routing_module__WEBPACK_IMPORTED_MODULE_5__["BotonesPageRoutingModule"],
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]
        ],
        declarations: [_botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]]
    })
], BotonesPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-botones-botones-module-es2015.js.map