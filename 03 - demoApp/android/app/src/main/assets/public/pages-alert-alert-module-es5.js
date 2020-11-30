(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-alert-alert-module"], {
    /***/
    "3Qz6":
    /*!*********************************************!*\
      !*** ./src/app/pages/alert/alert.module.ts ***!
      \*********************************************/

    /*! exports provided: AlertPageModule */

    /***/
    function Qz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertPageModule", function () {
        return AlertPageModule;
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


      var _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alert-routing.module */
      "LGqY");
      /* harmony import */


      var _alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alert.page */
      "OfL/");
      /* harmony import */


      var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/componentes/componentes.module */
      "lSLK");

      var AlertPageModule = function AlertPageModule() {
        _classCallCheck(this, AlertPageModule);
      };

      AlertPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertPageRoutingModule"], src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]],
        declarations: [_alert_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"]]
      })], AlertPageModule);
      /***/
    },

    /***/
    "4rH/":
    /*!*********************************************!*\
      !*** ./src/app/pages/alert/alert.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function rH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsZXJ0L2FsZXJ0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "LGqY":
    /*!*****************************************************!*\
      !*** ./src/app/pages/alert/alert-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AlertPageRoutingModule */

    /***/
    function LGqY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertPageRoutingModule", function () {
        return AlertPageRoutingModule;
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


      var _alert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert.page */
      "OfL/");

      var routes = [{
        path: '',
        component: _alert_page__WEBPACK_IMPORTED_MODULE_3__["AlertPage"]
      }];

      var AlertPageRoutingModule = function AlertPageRoutingModule() {
        _classCallCheck(this, AlertPageRoutingModule);
      };

      AlertPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AlertPageRoutingModule);
      /***/
    },

    /***/
    "OfL/":
    /*!*******************************************!*\
      !*** ./src/app/pages/alert/alert.page.ts ***!
      \*******************************************/

    /*! exports provided: AlertPage */

    /***/
    function OfL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertPage", function () {
        return AlertPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_alert_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./alert.page.html */
      "dtAw");
      /* harmony import */


      var _alert_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert.page.scss */
      "4rH/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AlertPage = /*#__PURE__*/function () {
        function AlertPage(alertController) {
          _classCallCheck(this, AlertPage);

          this.alertController = alertController;
          this.botones = [{
            nombre: "Informativo",
            numero: 1,
            color: "rojizo"
          }, {
            nombre: "Multiples botones",
            numero: 2,
            color: "secondary"
          }, {
            nombre: "Confirmar",
            numero: 3,
            color: "tertiary"
          }, {
            nombre: "Prompt",
            numero: 4,
            color: "success"
          }, {
            nombre: "Radio",
            numero: 5,
            color: "warning"
          }, {
            nombre: "Checkbox",
            numero: 6,
            color: "dark"
          }];
        }

        _createClass(AlertPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick(numero) {
            switch (numero) {
              case 1:
                this.presentAlert();
                break;

              case 2:
                this.presentAlertMultipleButtons();
                break;

              case 3:
                this.presentAlertConfirm();
                break;

              case 4:
                this.presentAlertPrompt();
                break;

              case 5:
                this.presentAlertRadio();
                break;

              case 6:
                this.presentAlertCheckbox();
                break;
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Alerta',
                        message: 'Apruébame David por favor',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlertMultipleButtons",
          value: function presentAlertMultipleButtons() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Multiples Botones',
                        message: '¿Aprobar a Miguel?',
                        buttons: ['Sí', 'Sí', 'Sí++']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Confirma',
                        message: 'Miguel ha aprobado!',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Mal hecho');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            console.log('Bien hecho');
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Formulario',
                        inputs: [{
                          name: 'Nombre',
                          type: 'text',
                          placeholder: 'Nombre'
                        }, // multiline input.
                        {
                          name: 'Apellido',
                          type: 'text',
                          placeholder: 'Apellido'
                        }, {
                          name: 'Fecha de Nacimiento',
                          type: 'date'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log(data);
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlertRadio",
          value: function presentAlertRadio() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'Radio',
                        inputs: [{
                          name: 'radio1',
                          type: 'radio',
                          label: 'Aprobar',
                          value: 'value1',
                          checked: true
                        }, {
                          name: 'radio2',
                          type: 'radio',
                          label: 'Aprobar más',
                          value: 'value2'
                        }, {
                          name: 'radio3',
                          type: 'radio',
                          label: 'Pedazo de 10',
                          value: 'value3'
                        }, {
                          name: 'radio4',
                          type: 'radio',
                          label: 'Esa era',
                          value: 'value4'
                        }, {
                          name: 'radio5',
                          type: 'radio',
                          label: 'Aprobadísimo',
                          value: 'value5'
                        }, {
                          name: 'radio6',
                          type: 'radio',
                          label: 'Al final has aprobado',
                          value: 'value6'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            console.log('Confirm Ok');
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentAlertCheckbox",
          value: function presentAlertCheckbox() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        header: 'Checkbox',
                        inputs: [{
                          name: 'Sevilla',
                          type: 'checkbox',
                          label: 'Sevilla',
                          value: 'Sevilla',
                          checked: true
                        }, {
                          name: 'Betis',
                          type: 'checkbox',
                          label: 'Betis',
                          value: 'Betis'
                        }, {
                          name: 'Madrid',
                          type: 'checkbox',
                          label: 'Madrid',
                          value: 'Madrid'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log(data);
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return AlertPage;
      }();

      AlertPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      AlertPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AlertPage);
      /***/
    },

    /***/
    "dtAw":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function dtAw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-cabecera [titulo]=\"'Alert'\"></app-cabecera>\n\n<ion-content>\n   \n\n    <!-- <ion-list *ngFor=\"let boton of botones, index as i\">\n        <ion-item>\n            <ion-button expand=\"full\" (click)=\"onClick(boton.numero)\" [color]=\"boton.color\">\n                {{boton.nombre}}\n            </ion-button>\n        </ion-item>\n    </ion-list> -->\n\n    <ion-grid>\n        <ion-row >\n            <ion-col *ngFor=\"let boton of botones, index as i\" size=\"6\"><ion-button expand=\"full\" (click)=\"onClick(boton.numero)\" [color]=\"boton.color\">{{boton.nombre}}</ion-button></ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-alert-alert-module-es5.js.map