(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuarios-usuarios-module"],{

/***/ "KpyH":
/*!***************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.module.ts ***!
  \***************************************************/
/*! exports provided: UsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-routing.module */ "WsvU");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios.page */ "thJk");
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/componentes/componentes.module */ "lSLK");








let UsuariosPageModule = class UsuariosPageModule {
};
UsuariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosPageRoutingModule"],
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]
        ],
        declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]]
    })
], UsuariosPageModule);



/***/ }),

/***/ "WsvU":
/*!***********************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UsuariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageRoutingModule", function() { return UsuariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.page */ "thJk");




const routes = [
    {
        path: '',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosPage"]
    }
];
let UsuariosPageRoutingModule = class UsuariosPageRoutingModule {
};
UsuariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosPageRoutingModule);



/***/ }),

/***/ "fDcj":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuarios/usuarios.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera [titulo]=\"'Usuarios'\"></app-cabecera>\n\n<ion-content>\n\n  <ion-refresher  #miRefresher slot=\"fixed\" (ionRefresh)=\"refresca($event)\">\n    <ion-refresher-content refreshingSpinner=\"dots\" refreshingText=\"Cargando...\">\n    </ion-refresher-content>\n\n  </ion-refresher>\n  <ion-item>\n    <ion-icon slot=\"end\" name=\"arrow-down\"></ion-icon>\n    <ion-label>Arrastra para actualizar</ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-item *ngFor=\"let item of usuarios; index as i\">\n      <ion-avatar slot=\"start\">\n        <img src={{item.avatar}}>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.first_name}}</h2>\n        <h3>{{item.last_name}}</h3>\n        <p>{{item.email}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n\n  <ion-fab (click)=\"limpiar()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll  #miInfinite threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"crescent\"\n      loadingText=\"Cargando...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "tOcb":
/*!***************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "thJk":
/*!*************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.page.ts ***!
  \*************************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_usuarios_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./usuarios.page.html */ "fDcj");
/* harmony import */ var _usuarios_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.page.scss */ "tOcb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "fz3y");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuarios.service */ "ESM5");







let UsuariosPage = class UsuariosPage {
    constructor(_mensajeService, _usuariosService, router) {
        this._mensajeService = _mensajeService;
        this._usuariosService = _usuariosService;
        this.router = router;
        this.usuarios = [];
    }
    ngOnInit() {
        this.cargador = true;
    }
    refresca() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const datos = yield this._usuariosService.getUsuarios();
            if (datos.total_pages > 0) {
                this.usuarios.unshift(...datos.data);
            }
            this.refresher.complete();
        });
    }
    limpiar() {
        this._usuariosService.numero = 1;
        this.usuarios = [];
        this._mensajeService.muestraMensaje("Usuarios eliminados con éxito");
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const datos = yield this._usuariosService.getUsuarios();
            setTimeout(() => {
                if (datos.total_pages > 0) {
                    this.usuarios.push(...datos.data);
                }
                else {
                    this.infinite.disabled = true;
                }
                this.infinite.complete();
            }, 1500);
        });
    }
};
UsuariosPage.ctorParameters = () => [
    { type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"] },
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["UsuariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UsuariosPage.propDecorators = {
    refresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['miRefresher',] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['miInfinite',] }]
};
UsuariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usuarios',
        template: _raw_loader_usuarios_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usuarios_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsuariosPage);



/***/ })

}]);
//# sourceMappingURL=pages-usuarios-usuarios-module-es2015.js.map