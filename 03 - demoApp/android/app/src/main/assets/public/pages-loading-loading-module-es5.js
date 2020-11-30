(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loading-loading-module"], {
    /***/
    "76Y9":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loading/loading.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-cabecera [titulo]=\"'Loading'\"></app-cabecera>\n\n\n\n<ion-content class=\"ion-no-padding\">\n  <ion-button expand=\"block\" shape=\"round\" (click)=\"onClick()\">Mostrar Loading</ion-button>\n  <ion-button expand=\"block\" shape=\"round\" (click)=\"onClick2()\">Mostrar Loading</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "R094":
    /*!***********************************************!*\
      !*** ./src/app/pages/loading/loading.page.ts ***!
      \***********************************************/

    /*! exports provided: LoadingPage */

    /***/
    function R094(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingPage", function () {
        return LoadingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loading_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loading.page.html */
      "76Y9");
      /* harmony import */


      var _loading_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loading.page.scss */
      "RCIu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/mensajes.service */
      "fz3y");
      /* harmony import */


      var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/usuarios.service */
      "ESM5");

      var LoadingPage = /*#__PURE__*/function () {
        function LoadingPage(loadingController, _mensajesService, _usuariosService) {
          _classCallCheck(this, LoadingPage);

          this.loadingController = loadingController;
          this._mensajesService = _mensajesService;
          this._usuariosService = _usuariosService;
        }

        _createClass(LoadingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick() {
            var _this = this;

            this.mostrarCarga();
            setTimeout(function () {
              _this.loadingController.dismiss();
            }, 1500);
          }
        }, {
          key: "onClick2",
          value: function onClick2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this._mensajesService.muestraLoading("Cargando");

                      _context.next = 3;
                      return this._usuariosService.getUsuarios();

                    case 3:
                      data = _context.sent;
                      _context.next = 6;
                      return this._usuariosService.getUsuarios();

                    case 6:
                      data = _context.sent;
                      _context.next = 9;
                      return this._usuariosService.getUsuarios();

                    case 9:
                      data = _context.sent;

                      this._mensajesService.ocultaLoading();

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "mostrarCarga",
          value: function mostrarCarga() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoadingPage;
      }();

      LoadingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]
        }, {
          type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["UsuariosService"]
        }];
      };

      LoadingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loading',
        template: _raw_loader_loading_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loading_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoadingPage);
      /***/
    },

    /***/
    "RCIu":
    /*!*************************************************!*\
      !*** ./src/app/pages/loading/loading.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function RCIu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYWRpbmcvbG9hZGluZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "XRIH":
    /*!*************************************************!*\
      !*** ./src/app/pages/loading/loading.module.ts ***!
      \*************************************************/

    /*! exports provided: LoadingPageModule */

    /***/
    function XRIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function () {
        return LoadingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _loading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-routing.module */
      "xCyh");
      /* harmony import */


      var _loading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading.page */
      "R094");
      /* harmony import */


      var _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../componentes/componentes.module */
      "lSLK");

      var LoadingPageModule = function LoadingPageModule() {
        _classCallCheck(this, LoadingPageModule);
      };

      LoadingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loading_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoadingPageRoutingModule"], _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]],
        declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]]
      })], LoadingPageModule);
      /***/
    },

    /***/
    "xCyh":
    /*!*********************************************************!*\
      !*** ./src/app/pages/loading/loading-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: LoadingPageRoutingModule */

    /***/
    function xCyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingPageRoutingModule", function () {
        return LoadingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _loading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loading.page */
      "R094");

      var routes = [{
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"]
      }];

      var LoadingPageRoutingModule = function LoadingPageRoutingModule() {
        _classCallCheck(this, LoadingPageRoutingModule);
      };

      LoadingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoadingPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-loading-loading-module-es5.js.map