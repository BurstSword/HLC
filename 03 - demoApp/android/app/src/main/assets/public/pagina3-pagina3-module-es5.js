(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina3-pagina3-module"], {
    /***/
    "5p+m":
    /*!***********************************************!*\
      !*** ./src/app/pages/pagina3/pagina3.page.ts ***!
      \***********************************************/

    /*! exports provided: Pagina3Page */

    /***/
    function pM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pagina3Page", function () {
        return Pagina3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pagina3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pagina3.page.html */
      "kDuk");
      /* harmony import */


      var _pagina3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagina3.page.scss */
      "qvXZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Pagina3Page = /*#__PURE__*/function () {
        function Pagina3Page() {
          _classCallCheck(this, Pagina3Page);
        }

        _createClass(Pagina3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Pagina3Page;
      }();

      Pagina3Page.ctorParameters = function () {
        return [];
      };

      Pagina3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagina3',
        template: _raw_loader_pagina3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagina3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Pagina3Page);
      /***/
    },

    /***/
    "Q0Pp":
    /*!*************************************************!*\
      !*** ./src/app/pages/pagina3/pagina3.module.ts ***!
      \*************************************************/

    /*! exports provided: Pagina3PageModule */

    /***/
    function Q0Pp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pagina3PageModule", function () {
        return Pagina3PageModule;
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


      var _pagina3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pagina3-routing.module */
      "UJes");
      /* harmony import */


      var _pagina3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pagina3.page */
      "5p+m");

      var Pagina3PageModule = function Pagina3PageModule() {
        _classCallCheck(this, Pagina3PageModule);
      };

      Pagina3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pagina3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Pagina3PageRoutingModule"]],
        declarations: [_pagina3_page__WEBPACK_IMPORTED_MODULE_6__["Pagina3Page"]]
      })], Pagina3PageModule);
      /***/
    },

    /***/
    "UJes":
    /*!*********************************************************!*\
      !*** ./src/app/pages/pagina3/pagina3-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: Pagina3PageRoutingModule */

    /***/
    function UJes(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pagina3PageRoutingModule", function () {
        return Pagina3PageRoutingModule;
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


      var _pagina3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pagina3.page */
      "5p+m");

      var routes = [{
        path: '',
        component: _pagina3_page__WEBPACK_IMPORTED_MODULE_3__["Pagina3Page"]
      }];

      var Pagina3PageRoutingModule = function Pagina3PageRoutingModule() {
        _classCallCheck(this, Pagina3PageRoutingModule);
      };

      Pagina3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Pagina3PageRoutingModule);
      /***/
    },

    /***/
    "kDuk":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagina3/pagina3.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function kDuk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content>\n<h1>Página 3</h1>\n</ion-content>\n";
      /***/
    },

    /***/
    "qvXZ":
    /*!*************************************************!*\
      !*** ./src/app/pages/pagina3/pagina3.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function qvXZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2luYTMvcGFnaW5hMy5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pagina3-pagina3-module-es5.js.map