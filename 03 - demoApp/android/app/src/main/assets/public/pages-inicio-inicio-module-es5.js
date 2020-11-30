(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
    /***/
    "5yII":
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function yII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "9scE":
    /*!*********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.ts ***!
      \*********************************************/

    /*! exports provided: InicioPage */

    /***/
    function scE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
        return InicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "XlEN");
      /* harmony import */


      var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inicio.page.scss */
      "5yII");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_datos_componentes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/datos-componentes.service */
      "ysfp");

      var InicioPage = /*#__PURE__*/function () {
        function InicioPage(_datos) {
          _classCallCheck(this, InicioPage);

          this._datos = _datos;
          this.componentes = [];
        }

        _createClass(InicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._datos.getDatos();

                    case 2:
                      this.componentes = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return InicioPage;
      }();

      InicioPage.ctorParameters = function () {
        return [{
          type: _services_datos_componentes_service__WEBPACK_IMPORTED_MODULE_4__["DatosComponentesService"]
        }];
      };

      InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InicioPage);
      /***/
    },

    /***/
    "DdEe":
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.module.ts ***!
      \***********************************************/

    /*! exports provided: InicioPageModule */

    /***/
    function DdEe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
        return InicioPageModule;
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


      var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inicio-routing.module */
      "vPJf");
      /* harmony import */


      var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inicio.page */
      "9scE");
      /* harmony import */


      var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/componentes/componentes.module */
      "lSLK");

      var InicioPageModule = function InicioPageModule() {
        _classCallCheck(this, InicioPageModule);
      };

      InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"], src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
      })], InicioPageModule);
      /***/
    },

    /***/
    "XlEN":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function XlEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n    <ion-menu-button slot=\"start\">\n      <ion-menu-button menu=\"menuPrincipal\"></ion-menu-button>\n    </ion-menu-button>\n    <ion-title>Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"ion-margin\" *ngFor=\"let componente of componentes, index as i\" detail\n      [routerLink]=\"componente.ruta\" expand=\"full\" [color]=\"componente.color\">\n      <ion-icon slot=\"start\" [name]=\"componente.icono\"></ion-icon>\n      {{componente.nombre}}\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "vPJf":
    /*!*******************************************************!*\
      !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InicioPageRoutingModule */

    /***/
    function vPJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
        return InicioPageRoutingModule;
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


      var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inicio.page */
      "9scE");

      var routes = [{
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
      }];

      var InicioPageRoutingModule = function InicioPageRoutingModule() {
        _classCallCheck(this, InicioPageRoutingModule);
      };

      InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InicioPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map