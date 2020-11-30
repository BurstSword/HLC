(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina1-pagina1-module"],{

/***/ "+b8r":
/*!*************************************************!*\
  !*** ./src/app/pages/pagina1/pagina1.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2luYTEvcGFnaW5hMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "0TNA":
/*!*************************************************!*\
  !*** ./src/app/pages/pagina1/pagina1.module.ts ***!
  \*************************************************/
/*! exports provided: Pagina1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagina1PageModule", function() { return Pagina1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pagina1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagina1-routing.module */ "DjOO");
/* harmony import */ var _pagina1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagina1.page */ "ulBQ");







let Pagina1PageModule = class Pagina1PageModule {
};
Pagina1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pagina1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Pagina1PageRoutingModule"]
        ],
        declarations: [_pagina1_page__WEBPACK_IMPORTED_MODULE_6__["Pagina1Page"]]
    })
], Pagina1PageModule);



/***/ }),

/***/ "DjOO":
/*!*********************************************************!*\
  !*** ./src/app/pages/pagina1/pagina1-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: Pagina1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagina1PageRoutingModule", function() { return Pagina1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pagina1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagina1.page */ "ulBQ");




const routes = [
    {
        path: '',
        component: _pagina1_page__WEBPACK_IMPORTED_MODULE_3__["Pagina1Page"]
    }
];
let Pagina1PageRoutingModule = class Pagina1PageRoutingModule {
};
Pagina1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Pagina1PageRoutingModule);



/***/ }),

/***/ "k4H6":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagina1/pagina1.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n<h1>Página 1</h1>\n</ion-content>\n");

/***/ }),

/***/ "ulBQ":
/*!***********************************************!*\
  !*** ./src/app/pages/pagina1/pagina1.page.ts ***!
  \***********************************************/
/*! exports provided: Pagina1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagina1Page", function() { return Pagina1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagina1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagina1.page.html */ "k4H6");
/* harmony import */ var _pagina1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagina1.page.scss */ "+b8r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Pagina1Page = class Pagina1Page {
    constructor() { }
    ngOnInit() {
    }
};
Pagina1Page.ctorParameters = () => [];
Pagina1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagina1',
        template: _raw_loader_pagina1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagina1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Pagina1Page);



/***/ })

}]);
//# sourceMappingURL=pagina1-pagina1-module-es2015.js.map