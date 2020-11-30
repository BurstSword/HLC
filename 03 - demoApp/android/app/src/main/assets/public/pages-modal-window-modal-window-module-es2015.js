(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-window-modal-window-module"],{

/***/ "X0GN":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modal-window/modal-window-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ModalWindowPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowPageRoutingModule", function() { return ModalWindowPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_window_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-window.page */ "rtLq");




const routes = [
    {
        path: '',
        component: _modal_window_page__WEBPACK_IMPORTED_MODULE_3__["ModalWindowPage"]
    }
];
let ModalWindowPageRoutingModule = class ModalWindowPageRoutingModule {
};
ModalWindowPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalWindowPageRoutingModule);



/***/ }),

/***/ "mpEd":
/*!***********************************************************!*\
  !*** ./src/app/pages/modal-window/modal-window.module.ts ***!
  \***********************************************************/
/*! exports provided: ModalWindowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowPageModule", function() { return ModalWindowPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_window_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-window-routing.module */ "X0GN");
/* harmony import */ var _modal_window_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-window.page */ "rtLq");







let ModalWindowPageModule = class ModalWindowPageModule {
};
ModalWindowPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_window_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalWindowPageRoutingModule"]
        ],
        declarations: [_modal_window_page__WEBPACK_IMPORTED_MODULE_6__["ModalWindowPage"]]
    })
], ModalWindowPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-modal-window-modal-window-module-es2015.js.map