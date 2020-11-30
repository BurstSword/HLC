(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina2-pagina2-module"], {
    /***/
    "1HBn":
    /*!*************************************************!*\
      !*** ./src/app/pages/pagina2/pagina2.module.ts ***!
      \*************************************************/

    /*! exports provided: Pagina2PageModule */

    /***/
    function HBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pagina2PageModule", function () {
        return Pagina2PageModule;
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


      var _pagina2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pagina2-routing.module */
      "lhKw");
      /* harmony import */


      var _pagina2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pagina2.page */
      "m1ki");

      var Pagina2PageModule = function Pagina2PageModule() {
        _classCallCheck(this, Pagina2PageModule);
      };

      Pagina2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pagina2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Pagina2PageRoutingModule"]],
        declarations: [_pagina2_page__WEBPACK_IMPORTED_MODULE_6__["Pagina2Page"]]
      })], Pagina2PageModule);
      /***/
    },

    /***/
    "Aep3":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagina2/pagina2.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Aep3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n<h1>Página 2</h1>\n</ion-content>\n";
      /***/
    },

    /***/
    "NtPl":
    /*!*************************************************!*\
      !*** ./src/app/pages/pagina2/pagina2.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function NtPl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2luYTIvcGFnaW5hMi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "lhKw":
    /*!*********************************************************!*\
      !*** ./src/app/pages/pagina2/pagina2-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: Pagina2PageRoutingModule */

    /***/
    function lhKw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pagina2PageRoutingModule", function () {
        return Pagina2PageRoutingModule;
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


      var _pagina2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pagina2.page */
      "m1ki");

      var routes = [{
        path: '',
        component: _pagina2_page__WEBPACK_IMPORTED_MODULE_3__["Pagina2Page"]
      }];

      var Pagina2PageRoutingModule = function Pagina2PageRoutingModule() {
        _classCallCheck(this, Pagina2PageRoutingModule);
      };

      Pagina2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Pagina2PageRoutingModule);
      /***/
    },

    /***/
    "m1ki":
    /*!***********************************************!*\
      !*** ./src/app/pages/pagina2/pagina2.page.ts ***!
      \***********************************************/

    /*! exports provided: Pagina2Page */

    /***/
    function m1ki(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pagina2Page", function () {
        return Pagina2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pagina2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pagina2.page.html */
      "Aep3");
      /* harmony import */


      var _pagina2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagina2.page.scss */
      "NtPl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Pagina2Page = /*#__PURE__*/function () {
        function Pagina2Page() {
          _classCallCheck(this, Pagina2Page);
        }

        _createClass(Pagina2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Pagina2Page;
      }();

      Pagina2Page.ctorParameters = function () {
        return [];
      };

      Pagina2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagina2',
        template: _raw_loader_pagina2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagina2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Pagina2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pagina2-pagina2-module-es5.js.map