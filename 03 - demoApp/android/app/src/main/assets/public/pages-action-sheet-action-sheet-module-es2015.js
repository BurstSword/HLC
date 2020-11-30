(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-action-sheet-action-sheet-module"],{

/***/ "1dbX":
/*!***********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.module.ts ***!
  \***********************************************************/
/*! exports provided: ActionSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPageModule", function() { return ActionSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-sheet-routing.module */ "vb6O");
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-sheet.page */ "VIHP");
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/componentes/componentes.module */ "lSLK");








let ActionSheetPageModule = class ActionSheetPageModule {
};
ActionSheetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionSheetPageRoutingModule"],
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]
        ],
        declarations: [_action_sheet_page__WEBPACK_IMPORTED_MODULE_6__["ActionSheetPage"]]
    })
], ActionSheetPageModule);



/***/ }),

/***/ "C3be":
/*!***********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGlvbi1zaGVldC9hY3Rpb24tc2hlZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "VIHP":
/*!*********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.page.ts ***!
  \*********************************************************/
/*! exports provided: ActionSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPage", function() { return ActionSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_action_sheet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./action-sheet.page.html */ "nbLD");
/* harmony import */ var _action_sheet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-sheet.page.scss */ "C3be");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ActionSheetPage = class ActionSheetPage {
    constructor(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
    }
    onClick() {
        this.presentActionSheet();
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Opciones',
                backdropDismiss: false,
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        cssClass: 'rojo',
                        icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked');
                        }
                    }, {
                        text: 'Share',
                        icon: 'share',
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
ActionSheetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
ActionSheetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-action-sheet',
        template: _raw_loader_action_sheet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_action_sheet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ActionSheetPage);



/***/ }),

/***/ "nbLD":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera [titulo]=\"'Action-sheet'\"></app-cabecera>\n\n<ion-content class=\"ion-padding\">\n    <ion-button (click)=\"onClick()\" expand=\"block\">\n        Mostrar\n    </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "vb6O":
/*!*******************************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActionSheetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPageRoutingModule", function() { return ActionSheetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-sheet.page */ "VIHP");




const routes = [
    {
        path: '',
        component: _action_sheet_page__WEBPACK_IMPORTED_MODULE_3__["ActionSheetPage"]
    }
];
let ActionSheetPageRoutingModule = class ActionSheetPageRoutingModule {
};
ActionSheetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActionSheetPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-action-sheet-action-sheet-module-es2015.js.map