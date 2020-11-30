(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-demo-modal-demo-module"],{

/***/ "089i":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-demo/modal-demo.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera [titulo]=\"'Modal demo'\"></app-cabecera>\n\n<ion-content class=\"ion-no-padding\">\n  <ion-list>\n    <ion-item>\n      <ion-label>{{usuario.nombre}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{usuario.apellido}}</ion-label>\n    </ion-item>\n  </ion-list>\n<ion-button (click)=\"mostrarModal()\" expand=\"block\" color=\"danger\" shape=\"round\">\n  Editar datos\n</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "BXmG":
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-demo/modal-demo-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalDemoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoPageRoutingModule", function() { return ModalDemoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_demo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-demo.page */ "mX2q");




const routes = [
    {
        path: '',
        component: _modal_demo_page__WEBPACK_IMPORTED_MODULE_3__["ModalDemoPage"]
    }
];
let ModalDemoPageRoutingModule = class ModalDemoPageRoutingModule {
};
ModalDemoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalDemoPageRoutingModule);



/***/ }),

/***/ "WHyl":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-demo/modal-demo.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLWRlbW8vbW9kYWwtZGVtby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "mX2q":
/*!*****************************************************!*\
  !*** ./src/app/pages/modal-demo/modal-demo.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalDemoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoPage", function() { return ModalDemoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_demo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-demo.page.html */ "089i");
/* harmony import */ var _modal_demo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-demo.page.scss */ "WHyl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_window_modal_window_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-window/modal-window.page */ "rtLq");






let ModalDemoPage = class ModalDemoPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.usuario = {
            nombre: "Pedro",
            apellido: "Picapiedra"
        };
    }
    ngOnInit() {
    }
    mostrarModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_window_modal_window_page__WEBPACK_IMPORTED_MODULE_5__["ModalWindowPage"],
                componentProps: {
                    dato: {
                        nombre: this.usuario.nombre,
                        apellido: this.usuario.apellido
                    }
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.usuario = data;
            }
        });
    }
};
ModalDemoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalDemoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-demo',
        template: _raw_loader_modal_demo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_demo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalDemoPage);



/***/ }),

/***/ "pZhI":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-demo/modal-demo.module.ts ***!
  \*******************************************************/
/*! exports provided: ModalDemoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoPageModule", function() { return ModalDemoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-demo-routing.module */ "BXmG");
/* harmony import */ var _modal_demo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-demo.page */ "mX2q");
/* harmony import */ var _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/componentes.module */ "lSLK");








let ModalDemoPageModule = class ModalDemoPageModule {
};
ModalDemoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalDemoPageRoutingModule"],
            _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]
        ],
        declarations: [_modal_demo_page__WEBPACK_IMPORTED_MODULE_6__["ModalDemoPage"]]
    })
], ModalDemoPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-modal-demo-modal-demo-module-es2015.js.map