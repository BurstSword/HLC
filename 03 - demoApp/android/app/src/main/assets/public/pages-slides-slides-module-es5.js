(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slides-slides-module"], {
    /***/
    "0sid":
    /*!*******************************************************!*\
      !*** ./src/app/pages/slides/slides-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SlidesPageRoutingModule */

    /***/
    function sid(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidesPageRoutingModule", function () {
        return SlidesPageRoutingModule;
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


      var _slides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slides.page */
      "PrxK");

      var routes = [{
        path: '',
        component: _slides_page__WEBPACK_IMPORTED_MODULE_3__["SlidesPage"]
      }];

      var SlidesPageRoutingModule = function SlidesPageRoutingModule() {
        _classCallCheck(this, SlidesPageRoutingModule);
      };

      SlidesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SlidesPageRoutingModule);
      /***/
    },

    /***/
    "INly":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slides/slides.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function INly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-cabecera [titulo]=\"'Slides'\"></app-cabecera>\n\n<ion-content fullscreen>\n  <ion-slides class=\"slides\" pager=\"true\">\n    <ion-slide *ngFor=\"let usuario of usuarios;index as i\">\n      <ion-card>\n        <ion-card-header>\n          <img [src]=\"usuario.avatar\" />\n          <ion-card-title>{{usuario.first_name}} {{usuario.last_name}}</ion-card-title>\n\n        </ion-card-header>\n        <ion-card-subtitle>\n          {{usuario.email}}\n        </ion-card-subtitle>\n        <ion-label>Current user:<ion-chip>\n          <ion-label>{{usuario.id}}</ion-label>\n        </ion-chip>\n      </ion-label>\n      </ion-card>\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>";
      /***/
    },

    /***/
    "PrxK":
    /*!*********************************************!*\
      !*** ./src/app/pages/slides/slides.page.ts ***!
      \*********************************************/

    /*! exports provided: SlidesPage */

    /***/
    function PrxK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidesPage", function () {
        return SlidesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_slides_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./slides.page.html */
      "INly");
      /* harmony import */


      var _slides_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./slides.page.scss */
      "xqe7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/usuarios.service */
      "ESM5");

      var SlidesPage = /*#__PURE__*/function () {
        function SlidesPage(_usuariosService) {
          _classCallCheck(this, SlidesPage);

          this._usuariosService = _usuariosService;
          this.usuarios = [];
        }

        _createClass(SlidesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this$usuarios;

              var datos;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._usuariosService.getUsuarios();

                    case 2:
                      datos = _context.sent;

                      (_this$usuarios = this.usuarios).unshift.apply(_this$usuarios, _toConsumableArray(datos.data));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SlidesPage;
      }();

      SlidesPage.ctorParameters = function () {
        return [{
          type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]
        }];
      };

      SlidesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slides',
        template: _raw_loader_slides_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slides_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SlidesPage);
      /***/
    },

    /***/
    "vG9B":
    /*!***********************************************!*\
      !*** ./src/app/pages/slides/slides.module.ts ***!
      \***********************************************/

    /*! exports provided: SlidesPageModule */

    /***/
    function vG9B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function () {
        return SlidesPageModule;
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


      var _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./slides-routing.module */
      "0sid");
      /* harmony import */


      var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./slides.page */
      "PrxK");
      /* harmony import */


      var _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../componentes/componentes.module */
      "lSLK");

      var SlidesPageModule = function SlidesPageModule() {
        _classCallCheck(this, SlidesPageModule);
      };

      SlidesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidesPageRoutingModule"], _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]],
        declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
      })], SlidesPageModule);
      /***/
    },

    /***/
    "xqe7":
    /*!***********************************************!*\
      !*** ./src/app/pages/slides/slides.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function xqe7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2xpZGVzL3NsaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zbGlkZXMvc2xpZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-slides-slides-module-es5.js.map